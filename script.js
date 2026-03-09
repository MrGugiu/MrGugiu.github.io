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
    if(!grid) return;
    grid.innerHTML = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.type === filter);
    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <span class="allergen-tag">⚠️ Alergeni: ${p.allergens}</span>
            </div>`;
    });
}

function filterProducts(type) {
    document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${type}`).classList.add('active');
    displayProducts(type);
}

window.onload = () => { if(document.getElementById('productGrid')) displayProducts('all'); };
