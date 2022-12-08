<script setup lang="ts">
import { PropType } from 'vue';
import CryptoCoin from '../types/cryptoCoin';

const props = defineProps({
    coin: {
        type: Object as PropType<CryptoCoin> 
    }
})

const coin = props.coin
</script>

<template>
    <div class="flex my-10">
        <div class="flex-grow flex-shrink-0">
            <ul>
                <li>Current price: {{coin?.current_price}}PLN</li>
                <li>All time high: {{coin?.ath}}PLN</li>
                <li>Change from ATH: {{coin?.ath_change_percentage}}%</li>
            </ul>
        </div>
        <div class="flex-grow flex-shrink-0">
            <ul>
                <li>Ciruculating supply: {{coin?.circulating_supply}}</li>
                <li>Total supply: {{coin?.total_supply}}</li>
                <li>Max supply: {{coin?.max_supply}}</li>
            </ul>
        </div>
        <div class="flex-grow flex-shrink-0">
            <ul>
                <li>Market cap: {{coin?.market_cap}}PLN</li>
                <li>Fully dituluted Mrk. cap: {{coin?.fully_diluted_valuation}} PLN</li>
                <li>Rank: {{coin?.market_cap_rank}}</li>
            </ul>
        </div>
    </div>
</template>