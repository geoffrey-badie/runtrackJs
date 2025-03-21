document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Expression régulière pour vérifier le domaine de l'email
    const emailPattern = /^[^\s@]+@laplateforme\.io$/;

    if (!emailPattern.test(email)) {
        alert('Adresse email invalide. Veuillez utiliser une adresse se terminant par @laplateforme.io.');
        return;
    }

    // Logique de connexion (à compléter)
    console.log('Email:', email);
    console.log('Mot de passe:', password);

});

// Information envoyée par le bouton "Soumettre", stocker donnée "id:date" pour chaque utilisateur
// Comparer la date enregistrée à la date du jour, doit être supérieure ou information invalide
// Sauvegarder l'information valide dans le .json