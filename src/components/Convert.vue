<template>
 <div>
        <h3>Konvertera</h3>
          <input @click="SEKTOUSD" type="button" class="buttons" value="100 SEK > USD">
          <input @click="SEKTOEUR" type="button" class="buttons" value="100 SEK > EUR">
          <input @click="SEKTODKK" type="button" class="buttons" value="100 SEK > DKK">

<div id="valorer">
          <h2>Svensk krona</h2>
          <p>
            <router-link to="/mynt"> Mynt</router-link> /
            <router-link to="/sedlar">Sedlar</router-link>
          </p>
          <router-view></router-view>
        </div>


<div id="convert">
  <img src="images/sweden.png" alt="Sweden">Från SEK <input v-model="from" type="text" class="currency-input" name="from">
  <img src="images/usa.png" alt="USA">Till USD <input type="text" class="currency-input" name="to" :value="amount">
</div>


 </div>
        
</template>

<script>

export default {
    name: "Convert",
      data() {
    return {
      from: '',
      to: '',
    }
  },

  computed: {
    amount() {
      return this.from * 0.102
    },
  },
    methods: {
    SEKTOUSD() {
      fetch('https://api.frankfurter.app/latest?amount=100&from=SEK&to=USD')
        .then(response => response.json())
        .then(result => {
          alert('100 SEK = ' + result.rates.USD + ' USD')
        })
    },
    SEKTODKK() {
      fetch('https://api.frankfurter.app/latest?amount=100&from=SEK&to=DKK')
        .then(response => response.json())
        .then(result => {
          alert('100 SEK = ' + result.rates.DKK + ' DKK')
        })
    },
    SEKTOEUR() {
      fetch('https://api.frankfurter.app/latest?amount=100&from=SEK&to=EUR')
        .then(response => response.json())
        .then(result => {
          alert('100 SEK = ' + result.rates.EUR + ' EUR')
        })
    }
  },
 
}
</script>
<style scoped>
.buttons {
  padding: 0.5em 1em;
  background: #222;
  color: #FFF;
  border-bottom: solid 4px #FFA500;
  border-radius: 3px;
  margin-bottom: 2rem;
}

#convert img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

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

.currency-input {
  width: 20%;
  margin-right: 5px;
  font-size: 20px;
  height: 40px;
  border: 1px solid #CCC;
  padding-left: 10px;
  background: #222;
  color: #FFF;
  border-bottom: solid 4px #FFA500;
  border-radius: 3px;
}


#valorer {
  margin-bottom: 2.5rem;
}

#valorer a{
color: #0a0a0a;
}

#valorer a:hover {
  color: #FFA500;
}
#valorer h2 {
  font-family: 'Courgette', cursive;
}

@media (max-width: 800px) {
  #convert input {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
