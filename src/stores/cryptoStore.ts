import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { fetchTop100Coins, fetchCoinChartData } from '../api/cryptoService'
import CryptoCoin from '../types/cryptoCoin';

export const useCryptoStore = defineStore('crypto', () => {
    //State 
    const cryptoTop100:Array<CryptoCoin> = reactive([])

    //Getters
    const top100 = computed(() => cryptoTop100);

    //Actions
    async function getTop100Coins() {
        if(cryptoTop100.length) return

        const data:Array<CryptoCoin> = await fetchTop100Coins();
        data.forEach(element => {
            cryptoTop100.push(element)
        })
    }

    async function getCoinChartData(id:string) {
        //Check top100 is fetched
        if(cryptoTop100.length === 0) await getTop100Coins();

        const coinData = cryptoTop100.find(coin => coin.id === id) as CryptoCoin
        
        //Check if chart is already fetched
        if(coinData.chart) return;
        
        //Get chart
        const chart = await fetchCoinChartData(id);
        coinData.chart = chart;
    }

    return {top100, getTop100Coins, getCoinChartData};
})