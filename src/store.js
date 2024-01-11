import { reactive } from 'vue';

export const store = reactive({
    // INDIRIZZO API 'YU-GI-HO'
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    // ARRAY CHE VERRà RIEMPITO DALL'API 'YU-GI-HO'
    CharacterData: [],
    // VARIABILE DEL LOADER 
    loading: true
})