<script setup lang="ts">
import { useCryptoStore } from '../stores/cryptoStore';
import Table from '../components/Table.vue'

const store = useCryptoStore();
store.getTop100Coins();

</script>

<template>
    <div>
        <Table :cryptoCoins="store.top100" />
    </div>
</template>