<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCryptoStore } from '../stores/cryptoStore';
import { computed } from "vue";

const route = useRoute()
const id = route.params.id as string

const cryptoStore = useCryptoStore();
//fetch chart data
cryptoStore.getCoinChartData(id);
const coin = cryptoStore.top100.find(c => c.id === id)
</script>

<template>
{{coin}}
</template>