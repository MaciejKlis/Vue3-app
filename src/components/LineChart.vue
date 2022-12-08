<script setup lang="ts">
import { PropType, computed } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

const props = defineProps({
    chart: {
        type: Array as PropType<Array<[number, number]>>,
        required: true
    }
})

const chartOptions = {
    responsive: true,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.4,
}

const testout = computed(() => {
    const labels:Array<string> = [];
    const data:Array<number> = [];
    
    //Max points not biger than 300
    const amountOfData = props.chart.length
    const divider = amountOfData < 300 ? 1 : Math.round(props.chart.length / 300)
    props.chart!.forEach( (el, idx) => {
        if(idx % divider === 0) {
            const date = new Date(el[0])
            const dateString = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
            labels.push(dateString);
            data.push(el[1])
        }
    })

    return {
        labels: labels,
        datasets: [ { data: data } ],
    }
})
</script>

<template>
    <Line
        id="my-chart-id"
        :data="testout"
        :options="chartOptions"
    />
</template>