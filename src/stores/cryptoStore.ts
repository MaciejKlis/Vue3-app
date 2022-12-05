import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCryptoStore = defineStore('crypto', () => {
    //State 
    const bitcoinPrice = ref(17300);

    //Getter
    const dolarBitcoinPrice = computed(() => bitcoinPrice.value + ' $');

    //Action
    function incrementPrice() {
        bitcoinPrice.value += 100;
    }

    return {dolarBitcoinPrice, incrementPrice};
})