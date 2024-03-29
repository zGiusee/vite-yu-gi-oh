import { reactive } from 'vue';

export const store = reactive({

    apiNumberFilter: '&num=100&offset=0',
    // INDIRIZZO API 'YU-GI-HO'
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
    // ARRAY CHE VERRà RIEMPITO DALL'API 'YU-GI-HO'
    CharacterData: [],
    // INDIRIZZO ARCHETIPI AP
    archetypeApi: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    // ARRAY CHE CONTERRà TUTTI GLI ARCHETIPI DELLE CARTE
    archetypes: [],
    // VARIABILE DEL LOADER 
    loading: true,
    // VARIABILE DEL LOADER DELLE CARTE
    cardLoader: true,
    // VARIABILE STATUS PER FILTRAGGIO DATI
    archetype: ' ',
})