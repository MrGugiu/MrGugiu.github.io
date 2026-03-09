const products = [
    { name: "Pâine cu Maia", type: "sarat", allergens: "Gluten", img: "images/paine.jpg" },
    { name: "Baghetă Rustică", type: "sarat", allergens: "Gluten", img: "images/bagheta.jpg" },
    { name: "Pâine cu Semințe", type: "sarat", allergens: "Gluten, Susan", img: "images/paine-seminte.jpg" },
    { name: "Focaccia cu Rozmarin", type: "sarat", allergens: "Gluten", img: "images/focaccia.jpg" },
    { name: "Covrigi cu Susan", type: "sarat", allergens: "Gluten, Susan", img: "images/covrigi.jpg" },
    { name: "Pâine Secară & Nucă", type: "sarat", allergens: "Gluten, Nuci", img: "images/paine-secara.jpg" },
    { name: "Croissant cu Unt", type: "dulce", allergens: "Gluten, Lactoză", img: "images/croissant.jpg" },
    { name: "Tartă cu Fructe", type: "dulce", allergens: "Ou, Lactoză", img: "images/tarta.jpg" },
    { name: "Pain au Chocolat", type: "dulce", allergens: "Gluten, Lactoză", img: "images/pain-chocolat.jpg" },
    { name: "Melc cu Scorțișoară", type: "dulce", allergens: "Gluten, Scorțișoară", img: "images/melc.jpg" },
    { name: "Brioșă cu Vanilie", type: "dulce", allergens: "Gluten, Ou", img: "images/briosa.jpg" },
    { name: "Chec cu Banane", type: "dulce", allergens: "Gluten, Nuci", img: "images/chec.jpg" }
];

function displayProducts(filter) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    let finalHTML = ''; // Construim totul aici mai întâi
    const filtered = filter === 'all' ? products : products.filter(p => p.type === filter);

    filtered.forEach(p => {
        finalHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                <h3>${p.name}</h3>
                <span class="allergen-tag">⚠️ Alergeni: ${p.allergens}</span>
            </div>`;
    });

    grid.innerHTML = finalHTML; // O singură scriere în DOM = fără clipit
}

function filterProducts(type) {
    // Schimbăm clasa active pe butoane
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.getElementById(`btn-${type}`);
    if (activeBtn) activeBtn.classList.add('active');

    displayProducts(type);
}

// Folosim DOMContentLoaded în loc de window.onload pentru stabilitate
document.addEventListener('DOMContentLoaded', () => {
    displayProducts('all');
});
