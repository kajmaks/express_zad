const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../static/style.css">
            <title>Strona główna</title>
        </head>
        <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Strona główna</a></li>
                        <li><a href="/o-nas">O nas</a></li>
                        <li><a href="/oferta">Oferta</a></li>
                        <li><a href="/kontakt">Kontakt</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Strona główna</h1>
                <p>I have brought peace, freedom, justice, and security to my new Empire.</p>
                <p>Your new Empire?</p>
                <p>Don't make me kill you</p>
                <p>Anakin, my allegiance is to the Republic, to democracy!</p>
                <p>If you're not with me, then you're my enemy.</p>
                <p> Only a Sith deals in absolutes. <br> I will do what I must.</p>
                <p>You will try.</p>
            </main>
            <footer>
                <p>Maksymilian Janicki 4c</p>
            </footer>
        </body>
        </html>
    `);
});

module.exports = router;
