const products = {
  Aura: "Una pieza pensada para acompañar tus espacios con presencia serena y carácter propio.",
  Lino: "Texturas suaves y una paleta cálida para crear momentos que se sienten en casa.",
  Nube: "Ligera, luminosa y fácil de hacer tuya. Un detalle sutil para cualquier rincón.",
  Sienna: "Tonos intensos y una silueta con personalidad para quienes disfrutan lo singular.",
  Cassis: "Una composición profunda que equilibra calma, contraste y un toque inesperado.",
  Lumen: "Un pequeño destello que cambia la atmósfera y hace que todo se vea distinto.",
  Ocre: "Cálida y honesta, pensada para sumar carácter sin perder la sencillez.",
  Marea: "Inspirada en el movimiento pausado del agua, para llevar una sensación de calma."
};

const cards = [...document.querySelectorAll(".product-card")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const catalogSearch = document.querySelector("#catalogSearch");
const globalSearch = document.querySelector("#globalSearch");
const emptyState = document.querySelector("#emptyState");
const mobileMenu = document.querySelector("#mobileMenu");
const menuButton = document.querySelector("#menuButton");
const searchPanel = document.querySelector("#searchPanel");
const searchButton = document.querySelector("#searchButton");
const closeSearch = document.querySelector("#closeSearch");
const modal = document.querySelector("#productModal");
const modalArt = document.querySelector("#modalArt");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
const closeModal = document.querySelector("#closeModal");
let activeFilter = "todos";
let lastFocusedElement;

function showCards() {
  const query = (catalogSearch.value || "").trim().toLowerCase();
  let visible = 0;
  cards.forEach((card) => {
    const matchesFilter = activeFilter === "todos" || card.dataset.category === activeFilter;
    const matchesSearch = !query || card.dataset.name.toLowerCase().includes(query);
    const shouldShow = matchesFilter && matchesSearch;
    card.hidden = !shouldShow;
    if (shouldShow) visible += 1;
  });
  emptyState.hidden = visible !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    showCards();
  });
});

function syncSearch(value) {
  catalogSearch.value = value;
  showCards();
}

catalogSearch.addEventListener("input", () => syncSearch(catalogSearch.value));
globalSearch.addEventListener("input", () => syncSearch(globalSearch.value));

function toggleMenu() {
  const open = mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}

menuButton.addEventListener("click", toggleMenu);
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  if (mobileMenu.classList.contains("open")) toggleMenu();
}));

function toggleSearch(open) {
  searchPanel.classList.toggle("open", open);
  searchPanel.setAttribute("aria-hidden", String(!open));
  searchButton.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("modal-open", open);
  if (open) {
    lastFocusedElement = document.activeElement;
    globalSearch.focus();
  } else {
    globalSearch.value = "";
    syncSearch("");
    lastFocusedElement?.focus();
  }
}

searchButton.addEventListener("click", () => toggleSearch(true));
closeSearch.addEventListener("click", () => toggleSearch(false));
searchPanel.addEventListener("click", (event) => {
  if (event.target === searchPanel) toggleSearch(false);
});

function openProduct(name, source) {
  lastFocusedElement = source;
  modalTitle.textContent = name;
  modalText.textContent = products[name];
  modalArt.className = "modal-art";
  modalArt.classList.add(`modal-${name.toLowerCase()}`);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeModal.focus();
}

function closeProduct() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

document.querySelectorAll(".product-visual").forEach((button) => {
  button.addEventListener("click", () => openProduct(button.dataset.product, button));
});
closeModal.addEventListener("click", closeProduct);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeProduct();
});
document.querySelector("#modalContact").addEventListener("click", closeProduct);

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (searchPanel.classList.contains("open")) toggleSearch(false);
  if (modal.classList.contains("open")) closeProduct();
  if (mobileMenu.classList.contains("open")) toggleMenu();
});