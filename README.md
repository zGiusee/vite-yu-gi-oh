# Esercizio di oggi: Vite Yu-Gi-Oh<br>
nome repo: vite-yu-gi-oh <br>
Descrizione: Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato. <br>
Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php e con i dati restituiti, stampate una card per ogni carta.<br>
ATTENZIONE: l’api restituisce tutti i risultati in un colpo solo. Per evitare attese e/o rallentamenti nelle richieste, potete diminuire il numero di risultati sfruttando i parametri num e offset<br>
https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0 (usate direttamente questo endpoint)Bonus: Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.