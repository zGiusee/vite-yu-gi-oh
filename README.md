# Esercizio di oggi (11/01/2024): Vite Yu-Gi-Oh<br>
nome repo: vite-yu-gi-oh <br>
Descrizione: Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato. <br>
Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php e con i dati restituiti, stampate una card per ogni carta.<br>
ATTENZIONE: l’api restituisce tutti i risultati in un colpo solo. Per evitare attese e/o rallentamenti nelle richieste, potete diminuire il numero di risultati sfruttando i parametri num e offset<br>
https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0 (usate direttamente questo endpoint)Bonus: Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.

# Esercizio di oggi (12/01/2024): Vite Yu-Gi-Oh <br>
nome repo: vite-yu-gi-ohDescrizione: Continuate a lavorare nella stessa repo di ieri e aggiungete una select per filtrare i risultati in base all’archetipo.<br>
Le option della select devono essere popolate dinamicamente chiamando questo endpoint dell'api: https://db.ygoprodeck.com/api/v7/archetypes.php<br>
Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata alle API con l'archetipo selezionato<br>
Bonus: Creare un componente che mostri il numero totale di risultati ottenuti. (usare le computed properties).<br>