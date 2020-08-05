<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-layout>
</template>

<script>
import Stock from './Stock'

export default {
  components:{ Stock },
  data() {
    return {
      stocks: [
        {id: 1, name: 'BMW', price: 110},
        {id: 2, name: 'Google', price: 230},
        {id: 3, name: 'Apple', price: 270},
        {id: 4, name: 'Twitter', price: 93},
      ]

    }
  }
}
</script>

<style>

</style>