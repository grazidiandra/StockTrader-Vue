<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }}<small> (preço: {{ stock.price | price }} | Qnte: {{ stock.quantity }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantity"/>
        <v-btn class="blue darken-3 white--text" :disabled="quantity <= 0 || !Number.isInteger(quantity)" @click="sellStock">Vender</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  filters: {
    price(value) {
      return `R$ ${parseFloat(value).toFixed(2)}`.replace('.', ',')
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('sellStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style>

</style>