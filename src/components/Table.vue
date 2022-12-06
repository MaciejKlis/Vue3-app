<script setup lang="ts">
import CryptoCoin from '../types/cryptoCoin'

defineProps<{
    cryptoCoins: Array<CryptoCoin>
}>()
</script>

<template>
   <v-table>
    <thead>
      <tr>
        <th class="text-left">
            idx
        </th>
        <th class="text-left">
            image
        </th>
        <th class="text-left">
            Name
        </th>
        <th class="text-left">
            Price
        </th>
        <th class="text-left">
            Mrk. cap
        </th>
        <th class="text-left">
            Ath
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