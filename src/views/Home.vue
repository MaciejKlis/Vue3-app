<script setup lang="ts">
import { useCryptoStore } from '../stores/cryptoStore';
import Table from '../components/Table.vue'

const store = useCryptoStore();
store.getTop100Coins();

const tableHeaders = [
    'id',
    'Image',
    'Name',
    'Price',
    'Mrk. cap',
    'All time high'
]

</script>

<template>
    <div>
        <h1 class="my-8">Top 100 cryptocurrencies</h1>
        <Table :cryptoCoins="store.top100" :headers="tableHeaders" />
    </div>
</template>