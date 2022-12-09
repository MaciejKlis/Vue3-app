<script setup lang="ts">
import CryptoCoin from '../types/cryptoCoin'

defineProps<{
    cryptoCoins: Array<CryptoCoin>
    headers: Array<string>
}>()
</script>

<template>
   <v-table>
    <thead>
      <tr>
        <th class="text-left" v-for="header in headers">
            {{header}}
        </th>
      </tr>
    </thead>
    
    <tbody>
      <tr v-for="(coin, idx) in cryptoCoins" :key="idx">
        <td>
            {{ idx + 1 }}
        </td>
        <td>
            <img class="max-h-5" :src="coin.image" :alt="coin.symbol">
        </td>
        <td>
            <router-link :to="('/coin/' + coin.id)">
                {{ coin.name }}
            </router-link>
        </td>
        <td>
            {{ coin.current_price }} PLN
        </td>
        <td>
            {{ coin.market_cap }} PLN
        </td>
        <td>
            {{ coin.ath }} PLN
        </td>
      </tr>
    </tbody>
  </v-table>
</template>