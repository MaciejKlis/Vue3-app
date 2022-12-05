import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { fetchTop100Coins } from '../api/cryptoService'
import CryptoCoin from '../types/cryptoCoin';

export const useCryptoStore = defineStore('crypto', () => {
    //State 
    const cryptoTop100:Array<CryptoCoin> = reactive([])

    //Getter
    const top100 = computed(() => cryptoTop100);

    //Action
    async function getTop100Coins() {
        if(cryptoTop100.length) return

        const data:Array<CryptoCoin> = await fetchTop100Coins();
        data.forEach(element => {
            cryptoTop100.push(element)
        })
    }

    return {top100, getTop100Coins};
})