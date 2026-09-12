const catalogProducts = [
  { page: 2, category: "Correctores", name: "e.l.f. Soft Glam Satin Concealer", price: 110, description: "Corrector de cobertura media a alta que ayuda a cubrir ojeras, manchas e imperfecciones. Su acabado satinado deja la piel con una apariencia uniforme, suave y natural." },
  { page: 3, category: "Ojos", name: "L'Oréal Lash Paradise Big Deal Mascara", price: 250, description: "Máscara de pestañas diseñada para aportar volumen y longitud, logrando una mirada más intensa y definida. Su fórmula ayuda a que las pestañas se vean más abundantes y llamativas." },
  { page: 4, category: "Ojos", name: "L'Oréal Telescopic Original Mascara", price: 190, description: "Máscara que ayuda a alargar y definir las pestañas, logrando un efecto más separado y estilizado. Es ideal para conseguir una mirada definida sin que las pestañas se vean demasiado pesadas." },
  { page: 5, category: "Rostro", name: "e.l.f. Camo Liquid Blush", price: 135, description: "Rubor líquido altamente pigmentado que aporta un toque de color intenso y fácil de difuminar. Permite crear desde un look suave hasta uno más marcado y deja las mejillas con una apariencia fresca y natural." },
  { page: 6, category: "Rostro", name: "e.l.f. Soft Glam Cream Blush Stick", price: 115, description: "Rubor en crema presentado en formato de barra, práctico y fácil de aplicar. Se difumina sobre la piel para aportar un toque de color natural y favorecedor." },
  { page: 7, category: "Labios", name: "NYX Lip Liner / Lipstick", price: 85, description: "Producto para labios que ayuda a definir y dar forma al contorno mientras aporta color. Es perfecto para combinar con otros productos de labios y crear looks tanto naturales como más intensos." },
  { page: 8, category: "Labios", name: "L'Oréal Infallible Plump Ambition Lip Oil", price: 125, description: "Aceite labial que aporta brillo e hidratación mientras deja los labios con una apariencia más suave y voluminosa. Su acabado brillante es ideal para conseguir unos labios jugosos y llamativos." },
  { page: 9, category: "Labios", name: "NYX Duck Plump Extreme Sensation Lip Gloss", price: 145, description: "Gloss de alto brillo que aporta color y una apariencia más voluminosa a los labios. Su efecto crea un look llamativo y brillante, ideal para quienes buscan unos labios protagonistas." },
  { page: 10, category: "Labios", name: "NYX Fat Oil Lip Drip", price: 120, description: "Aceite labial que combina brillo y sensación hidratante para dejar los labios suaves y con un acabado jugoso. Puede utilizarse solo o sobre otro labial para añadir un efecto glossy." },
  { page: 11, category: "Ojos", name: "Maybelline Lash Sensational Mascara", price: 145, description: "Máscara de pestañas que ayuda a separar, definir y aportar volumen para conseguir una mirada más abierta. Su cepillo permite trabajar las pestañas para lograr un efecto más abundante y definido." },
  { page: 12, category: "Correctores", name: "L'Oréal Infallible 24H Full Wear Concealer", price: 150, description: "Corrector de alta cobertura diseñado para ayudar a cubrir ojeras, manchas e imperfecciones. Su fórmula de larga duración permite mantener una apariencia uniforme durante varias horas." },
  { page: 13, category: "Rostro", name: "e.l.f. Halo Glow Liquid Filter", price: 215, description: "Producto líquido que aporta luminosidad y un efecto de piel radiante y saludable. Puede utilizarse solo, debajo del maquillaje, mezclado con la base o en puntos específicos del rostro para añadir luz." },
  { page: 14, category: "Bases", name: "e.l.f. Soft Glam Satin Foundation", price: 135, description: "Base de maquillaje con acabado satinado que ayuda a unificar el tono de la piel y mejorar su apariencia. Deja un acabado natural y elegante, ideal para looks de maquillaje suaves y sofisticados." },
  { page: 15, category: "Correctores", name: "L'Oréal True Match Radiant Concealer", price: 135, description: "Corrector de acabado luminoso que ayuda a cubrir ojeras e imperfecciones mientras mantiene una apariencia natural. Su efecto radiante ayuda a que la piel se vea más fresca y uniforme." },
  { page: 16, category: "Correctores", name: "Maybelline Instant Age Rewind Eraser", price: 135, description: "Corrector multifuncional que ayuda a cubrir ojeras, pequeñas imperfecciones y zonas que se quieran iluminar. Su aplicador facilita la aplicación y permite conseguir un acabado uniforme y natural." },
  { page: 17, category: "Correctores", name: "Maybelline Fit Me Concealer", price: 140, description: "Corrector ligero que ayuda a disimular ojeras e imperfecciones sin dejar una apariencia demasiado pesada. Su acabado natural lo hace ideal para el maquillaje diario." },
  { page: 18, category: "Labios", name: "e.l.f. Glow Reviver Plumping Lip Oil", price: 125, description: "Aceite labial que aporta brillo e hidratación mientras proporciona un efecto de labios más voluminosos. Su acabado luminoso deja los labios con una apariencia suave, jugosa y fresca." },
  { page: 19, category: "Labios", name: "Maybelline Lifter Gloss", price: 120, description: "Gloss de acabado brillante que aporta color y ayuda a mantener los labios con una apariencia suave e hidratada. Es ideal para conseguir un look de labios jugosos y con mayor dimensión." },
  { page: 20, category: "Bases", name: "L'Oréal Infallible 32H Fresh Wear Foundation", price: 245, description: "Base de larga duración que ayuda a mantener el maquillaje durante muchas horas mientras unifica el tono de la piel. Su acabado busca mantener una apariencia fresca y natural durante el día." },
  { page: 21, category: "Labios", name: "NYX Butter Gloss Non-Sticky Lip Gloss", price: 105, description: "Gloss cremoso y ligero que aporta brillo y un toque de color a los labios sin dejar una sensación excesivamente pegajosa. Puede utilizarse solo o combinado con un delineador o labial." },
  { page: 22, category: "Labios", name: "L'Oréal Infallible Matte Resistance Liquid Lipstick", price: 135, description: "Labial líquido de larga duración con acabado mate y color intenso. Está diseñado para mantener el color durante varias horas sin necesidad de estar retocándolo constantemente." },
  { page: 23, category: "Cuidado", name: "Starface Hydro-Star Pimple Patches", price: 175, description: "Parches para granitos que ayudan a proteger las imperfecciones de factores externos y a evitar tocarlas constantemente. Su diseño los convierte en una opción divertida y discreta para incorporar al cuidado de la piel." },
  { page: 24, category: "Preparación", name: "e.l.f. Power Grip Matte Primer", price: 175, description: "Primer facial que ayuda a preparar la piel antes del maquillaje y a mejorar la duración de los productos aplicados después. Su acabado mate ayuda a controlar el brillo y deja la piel lista para continuar con la rutina de maquillaje." }
];

const grid = document.querySelector("#productGrid");
const tabs = document.querySelector("#categoryTabs");
const search = document.querySelector("#productSearch");
const emptyState = document.querySelector("#emptyState");
const overlaySearch = document.querySelector("#searchOverlay");
const overlayInput = document.querySelector("#overlaySearch");
const productOverlay = document.querySelector("#productOverlay");
const productImage = document.querySelector("#productImage");
const productTitle = document.querySelector("#productTitle");
const productPrice = document.querySelector("#productPrice");
const productCategory = document.querySelector("#productCategory");
const productDescription = document.querySelector("#productDescription");
let activeCategory = "Todos";
let lastFocus;

const categories = ["Todos", ...new Set(catalogProducts.map((product) => product.category))];
tabs.innerHTML = categories.map((category) => {
  const count = category === "Todos" ? catalogProducts.length : catalogProducts.filter((product) => product.category === category).length;
  return `<button class="category-button${category === "Todos" ? " active" : ""}" type="button" data-category="${category}">${category}<span>${String(count).padStart(2, "0")}</span></button>`;
}).join("");

function renderProducts() {
  const query = search.value.trim().toLowerCase();
  const visible = catalogProducts.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    return matchesCategory && (!query || `${product.name} ${product.category}`.toLowerCase().includes(query));
  });
  grid.innerHTML = visible.map((product) => `
    <article class="product-card" tabindex="0" role="button" data-page="${product.page}">
      <div class="product-image-wrap"><img loading="lazy" src="assets/page-${String(product.page).padStart(2, "0")}.jpg" alt="${product.name}"><span class="product-page">${String(product.page - 1).padStart(2, "0")}</span></div>
      <div class="product-info"><div><h3>${product.name}</h3><p class="product-category">${product.category}</p></div><span class="product-price">Q${product.price}</span></div>
    </article>
  `).join("");
  emptyState.hidden = visible.length > 0;
  grid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => openProduct(Number(card.dataset.page), card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openProduct(Number(card.dataset.page), card); }
    });
  });
}

tabs.addEventListener("click", (event) => {
  const button = event.target.closest(".category-button");
  if (!button) return;
  activeCategory = button.dataset.category;
  tabs.querySelectorAll(".category-button").forEach((item) => item.classList.toggle("active", item === button));
  renderProducts();
});
search.addEventListener("input", renderProducts);

function syncSearch(value) { search.value = value; renderProducts(); }
function toggleSearch(open) {
  overlaySearch.classList.toggle("open", open);
  overlaySearch.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("locked", open || productOverlay.classList.contains("open"));
  if (open) { lastFocus = document.activeElement; overlayInput.value = search.value; overlayInput.focus(); }
  else { lastFocus?.focus(); }
}
document.querySelector("#searchTrigger").addEventListener("click", () => toggleSearch(true));
document.querySelector("#closeSearch").addEventListener("click", () => toggleSearch(false));
overlaySearch.addEventListener("click", (event) => { if (event.target === overlaySearch) toggleSearch(false); });
overlayInput.addEventListener("input", () => syncSearch(overlayInput.value));

function openProduct(page, source) {
  const product = catalogProducts.find((item) => item.page === page);
  if (!product) return;
  lastFocus = source;
  productImage.src = `assets/page-${String(product.page).padStart(2, "0")}.jpg`;
  productImage.alt = product.name;
  productTitle.textContent = product.name;
  productPrice.textContent = `Q${product.price}`;
  productCategory.textContent = `MAVIE BEAUTY · ${product.category}`;
  productDescription.textContent = product.description;
  productOverlay.classList.add("open");
  productOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  document.querySelector("#closeProduct").focus();
}
function closeProduct() {
  productOverlay.classList.remove("open");
  productOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.toggle("locked", overlaySearch.classList.contains("open"));
  lastFocus?.focus();
}
document.querySelector("#closeProduct").addEventListener("click", closeProduct);
productOverlay.addEventListener("click", (event) => { if (event.target === productOverlay) closeProduct(); });
document.querySelector("#productContact").addEventListener("click", closeProduct);

const menu = document.querySelector("#mobileNav");
const menuTrigger = document.querySelector("#menuTrigger");
menuTrigger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuTrigger.setAttribute("aria-expanded", String(open));
  menuTrigger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});
menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => menu.classList.remove("open")));
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (overlaySearch.classList.contains("open")) toggleSearch(false);
  if (productOverlay.classList.contains("open")) closeProduct();
  if (menu.classList.contains("open")) menu.classList.remove("open");
});
renderProducts();