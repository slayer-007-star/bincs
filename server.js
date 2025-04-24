const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware pour traiter les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Servir les fichiers HTML
app.use(express.static(__dirname));

// Route pour afficher les données du formulaire
app.post('/soumettre_formulaire', (req, res) => {
    const { nom, email, mot_de_passe } = req.body;
    console.log(`Nom: ${nom}, Email: ${email}, Mot de passe: ${mot_de_passe}`);
    res.send(`
        <h1>Informations reçues</h1>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Mot de passe :</strong> ${mot_de_passe}</p>
        <a href="/">Retour à la page d'accueil</a>
    `);
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});