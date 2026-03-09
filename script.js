const products = [
    { name: "Pâine cu Maia", type: "sarat", allergens: "Gluten", img: "images/paine.png" },
    { name: "Baghetă Rustică", type: "sarat", allergens: "Gluten", img: "images/bagheta.png" },
    { name: "Pâine cu Semințe", type: "sarat", allergens: "Gluten, Susan", img: "images/paine-seminte.png" },
    { name: "Focaccia cu Rozmarin", type: "sarat", allergens: "Gluten", img: "images/focaccia.png" },
    { name: "Covrigi cu Susan", type: "sarat", allergens: "Gluten, Susan", img: "images/covrigi.png" },
    { name: "Pâine Secară & Nucă", type: "sarat", allergens: "Gluten, Nuci", img: "images/paine-secara.png" },
    { name: "Croissant cu Unt", type: "dulce", allergens: "Gluten, Lactoză", img: "images/croissant.png" },
    { name: "Tartă cu Fructe", type: "dulce", allergens: "Ou, Lactoză", img: "images/tarta.png" },
    { name: "Pain au Chocolat", type: "dulce", allergens: "Gluten, Lactoză", img: "images/pain-chocolat.png" },
    { name: "Melc cu Scorțișoară", type: "dulce", allergens: "Gluten, Scorțișoară", img: "images/melc.png" },
    { name: "Brioșă cu Vanilie", type: "dulce", allergens: "Gluten, Ou", img: "images/briosa.png" },
    { name: "Chec cu Banane", type: "dulce", allergens: "Gluten, Nuci", img: "images/chec.png" }
];

function displayProducts(filter) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    let htmlContent = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.type === filter);

    filtered.forEach(p => {
        htmlContent += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <span class="allergen-tag">⚠️ Alergeni: ${p.allergens}</span>
            </div>`;
    });

    grid.innerHTML = htmlContent;
}

function filterProducts(type) {
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const targetBtn = document.getElementById(`btn-${type}`);
    if (targetBtn) targetBtn.classList.add('active');

    displayProducts(type);
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts('all');
});
