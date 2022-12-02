<script lang="ts">
import { ref } from 'vue';
export default {
    name: "Home",
    setup() {
        let someVariable = ref('Siemanko');
        const clikedTimes = ref(0);
        const h1 = ref(null);

        const logH1 = () => {
            someVariable.value = "siemaa"
        }

        return {
            someVariable,
            clikedTimes,
            h1,
            logH1
        }
    },
}
</script>

<template>
    <div>
        <h1 ref="h1"> Component </h1>
        <button @click="(someVariable += ' ' + (clikedTimes++))">Click</button>
        <button @click="logH1">Log h1</button>   
    </div>
</template>