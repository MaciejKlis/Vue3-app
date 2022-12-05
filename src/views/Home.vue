<script lang="ts">
import { computed, ref } from 'vue';
import { useCryptoStore } from '../stores/cryptoStore';

export default {
    name: "Home",
    setup() {
        const store = useCryptoStore();

        setInterval(() => {
            store.incrementPrice();
        },2000)

        return {
            dolarBitcoinPrice: computed(() => store.dolarBitcoinPrice),
            store
        }
    },
}
</script>

<template>
    <div>
        <h1> {{dolarBitcoinPrice}} </h1>
        <button @click="store.incrementPrice">Incremant BTC price</button>
    </div>
</template>