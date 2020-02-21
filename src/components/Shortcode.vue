<template>
      <div class="column">
        <h3>Förkortning</h3>
          <ul>
          <li v-for="(value, key) in currencies" :key="key">{{key}}: {{ value }}</li>
          </ul>
      </div>
</template>

<script>
export default {
    name: "Shortcode",
    created() {
    fetch('https://api.frankfurter.app/currencies', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        this.currencies = result
      })
  },
  data() {
      return {
    currencies: null
  }
  },
 
}
</script>

<style scoped>
.column h3 {
  font-family: 'Courgette', cursive;
  font-size: 22px;
  background: #222;
  color: #FFF;
  border-bottom: solid 4px #FFA500;
}

.column {
  padding: 20px;
  flex: 1;
  background: #fff;
  box-sizing: border-box;
}
</style>