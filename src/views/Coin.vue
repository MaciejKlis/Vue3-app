<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useCryptoStore } from '../stores/cryptoStore';
import LineChart from '../components/LineChart.vue'
import CoinInformation from '../components/CoinInformation.vue'

const route = useRoute()
const id = route.params.id as string

const cryptoStore = useCryptoStore();
//fetch chart data
cryptoStore.getCoinChartData(id);
const coin = computed(() => cryptoStore.top100.find(c => c.id === id));

const minTimestampToGetData = ref(0)

const chartData = computed(() => cryptoStore.top100.find(c => c.id === id)?.chart?.filter(el => el[0] >= minTimestampToGetData.value))

//handle chart date changing
const changeChart = (days:number) => {
    const daysInMilisec = days * 24 * 60 * 60 * 1000;
    const getChartFrom = Date.now() - daysInMilisec;
    minTimestampToGetData.value = getChartFrom;
    //if max let's set to chart
    if (days === 0) minTimestampToGetData.value = 0;
}
</script>


<template>
    <div v-if="coin">  
        <div class="flex justify-center">
            <h1>
                {{coin.name}}
            </h1>
            <img :src="coin.image" class="h-10 my-auto ml-4" alt=""> 
        </div>
        
        <CoinInformation v-if="coin" :coin="coin"/>

        <button @click="changeChart(0)">max</button>
        <button @click="changeChart(730)">2years</button>
        <button @click="changeChart(365)">1year</button>
        <button @click="changeChart(180)">180days</button>
        <button @click="changeChart(90)">90days</button>
        <button @click="changeChart(30)">30days</button>
        <button @click="changeChart(7)">7days</button>

        <div class="flex m-top-2">
            <div class="w-full">
                <LineChart v-if="coin.chart" :chart="chartData!" />
            </div>
        </div>
    </div>
</template>