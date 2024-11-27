// script.js

// Fonction pour changer la couleur de fond au clic du bouton
document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#f1c40f', '#9b59b6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
