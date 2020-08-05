<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }}<small> (preço: {{ stock.price | price }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantity"/>
        <v-btn class="green darken-3 white--text" :disabled="quantity <= 0 || !Number.isInteger(quantity)" @click="buyStock">Comprar</v-btn>
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
    buyStock() {

      const order = {
        idStock: this.stock.id,
        priceStock: this.stock.price,
        quantity: this.quantity
      }
      console.log(order)
      this.quantity = 0
    }
  }
}
</script>

<style>

</style>