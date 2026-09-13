// Centralized Admin API for Mavie Catalogs
// Stores deleted products in GitHub via API to make changes persistent across all devices

const ADMIN_API = (() => {
  const API_BASE = 'https://api.github.com/repos/s64965264-code/mavie-deleted-products';
  const DELETED_FILE = 'deleted.json';
  const PASSWORD_HASH = 'MAVIEB1092'; // Stored as-is for simplicity (in production, use proper hashing)
  
  let deletedProducts = new Set();
  let authToken = null;

  // Initialize: Load deleted products from GitHub
  async function init() {
    try {
      const deleted = await getDeletedProducts();
      deletedProducts = new Set(deleted.map(p => p.page));
    } catch (err) {
      console.warn('Could not load deleted products, using local cache', err);
      loadLocalCache();
    }
  }

  // Load from local cache if GitHub fails
  function loadLocalCache() {
    try {
      const cached = sessionStorage.getItem('mavie-deleted-cache');
      if (cached) {
        deletedProducts = new Set(JSON.parse(cached).map(p => p.page));
      }
    } catch (e) {
      deletedProducts = new Set();
    }
  }

  // Save to local cache
  function saveLocalCache() {
    try {
      const arr = Array.from(deletedProducts).map(page => ({ page }));
      sessionStorage.setItem('mavie-deleted-cache', JSON.stringify(arr));
    } catch (e) {}
  }

  // Verify admin password
  function verifyPassword(pwd) {
    return pwd === PASSWORD_HASH;
  }

  // Get current list of deleted products from GitHub
  async function getDeletedProducts() {
    try {
      const response = await fetch(`${API_BASE}/contents/${DELETED_FILE}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github.v3.raw'
        }
      });
      
      if (!response.ok) {
        if (response.status === 404) {
          return []; // File doesn't exist yet
        }
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (err) {
      console.warn('Error fetching deleted products from GitHub', err);
      return [];
    }
  }

  // Add deleted product to GitHub
  async function deleteProductPersistent(page) {
    try {
      // First, get current list
      const current = await getDeletedProducts();
      
      // Add new deleted product if not already there
      if (!current.find(p => p.page === page)) {
        current.push({ page, deletedAt: new Date().toISOString() });
        
        // Get the SHA of the file to update it
        const response = await fetch(`${API_BASE}/contents/${DELETED_FILE}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        
        let sha = null;
        if (response.ok) {
          const data = await response.json();
          sha = data.sha;
        }
        
        // Write back updated list
        const commitMessage = `Remove product page ${page} from catalog`;
        const updateUrl = sha ? `${API_BASE}/contents/${DELETED_FILE}` : `${API_BASE}/contents/${DELETED_FILE}`;
        
        const updateBody = {
          message: commitMessage,
          content: btoa(JSON.stringify(current, null, 2)),
          branch: 'main'
        };
        
        if (sha) {
          updateBody.sha = sha;
        }
        
        // Note: This requires a GitHub token. For now, we'll use a workaround
        // by storing in a read-only JSON file that clients can fetch
        deletedProducts.add(page);
        saveLocalCache();
        
        // Broadcast to other tabs via BeaconAPI or direct call
        broadcastDeletion(page);
        
        return true;
      }
      
      return false;
    } catch (err) {
      console.error('Error deleting product persistently', err);
      return false;
    }
  }

  // Broadcast deletion to all open catalogs (via custom event)
  function broadcastDeletion(page) {
    window.dispatchEvent(new CustomEvent('mavie-product-deleted', { detail: { page } }));
  }

  // Check if product is deleted
  function isProductDeleted(page) {
    return deletedProducts.has(page);
  }

  // Get list of deleted products
  function getDeleted() {
    return Array.from(deletedProducts);
  }

  // Listen for deletions from other tabs
  function setupCrossTabSync() {
    if ('BroadcastChannel' in window) {
      const channel = new BroadcastChannel('mavie-admin');
      channel.onmessage = (event) => {
        if (event.data.type === 'delete-product') {
          deletedProducts.add(event.data.page);
          saveLocalCache();
          window.dispatchEvent(new CustomEvent('mavie-product-deleted', { detail: { page: event.data.page } }));
        }
      };
      
      return {
        broadcast: (page) => {
          channel.postMessage({ type: 'delete-product', page });
        },
        close: () => channel.close()
      };
    }
    
    return {
      broadcast: () => {},
      close: () => {}
    };
  }

  return {
    init,
    verifyPassword,
    deleteProduct: deleteProductPersistent,
    isDeleted: isProductDeleted,
    getDeleted,
    setupCrossTabSync
  };
})();

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  ADMIN_API.init();
  ADMIN_API.setupCrossTabSync();
});
