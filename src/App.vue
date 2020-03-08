<template>
  <div id="app">

 <header class="topbar">
    <div class="container">
      <div class="row">

        <div class="col-sm-12">
          <ul class="social-network">
            <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-pinterest"></i></a></li>
            <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-google-plus"></i></a></li>
          </ul>
        </div>

      </div>
    </div>
  </header>
  <nav class="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
    <div class="container">
      <a class="navbar-brand" href="index.html"> JOHANS VALUTA OMVANDLARE</a>

    </div>
  </nav>
  

  <main>
<div class="container1">
    <Currencies />

     <div class="column column-two">
    <Convert />
    <div id="gallery">
    <Gallery v-for="picture in pictures" :key="picture.image" :image="picture.image"/>
    <br>
    <br>
     </div>

     </div>

    <Shortcode />
    
</div>

  </main>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-4  col-md-4 col-sm-4">
          <div class="footer_dv">
            <h4 class="footer-list-header">Social Media</h4>
            <a class="btn btn-default btn-lg" href="#"><i class="fa fa-facebook fa-fw"></i> Facebook</a><br>
            <a class="btn btn-default btn-lg" href="#"><i class="fa fa-twitter fa-fw"></i> Twitter</a><br>
            <a class="btn btn-default btn-lg" href="#"><i class="fa fa-instagram fa-fw"></i> Instagram</a><br>
            <a class="btn btn-default btn-lg" href="#"><i class="fa fa-youtube fa-fw"></i> Youtube</a>
          </div>
        </div>
        <div class="col-lg-4  col-md-4 col-sm-4">
          <div class="footer_dv">
            <h4 class="footer-list-header">Valutakurser</h4>
            <p>Här kan du se aktuella kurser för olika valutor och jämföra exempelvis aktuell dollarkurs (USD), eurokurs
              (EUR) och pundkurs (GBP) från svenska kronor (SEK)</p>
          </div>
        </div>
        <div class="col-lg-4  col-md-4 col-sm-4">
          <div class="footer_dv">
            <h4 class="footer-list-header">Kontakta oss</h4>
            <p><i class="fas fa-envelope"></i> Johans Valuta Omvandlare</p>
          </div>
        </div>
      </div>
    </div>
  </footer>


  </div>
</template>

<script>
import Currencies from './components/Currencies.vue'
import Convert from './components/Convert.vue'
import Gallery from './components/Gallery.vue'
import Shortcode from './components/Shortcode.vue'

export default {
  name: 'App',
    data() {
    return {
      pictures: [
        {
          image: 'images/sek.png',
        },
        {
          image: 'images/dkk.png'
        },
        {
          image: 'images/dollar.png'
        },
        {
          image: 'images/euro.png'
        }
      ]
    }
  },
  components: {
    Currencies,
    Convert,
    Gallery,
    Shortcode
  }
}
</script>


<style scoped>
.column {
  padding: 20px;
  flex: 1;
  background: #fff;
  box-sizing: border-box;
}

.column-two {
  flex-basis: 50em;
  padding: 20px;
}

.container1 {
  display: flex;
}

#gallery img {
  padding-top: 40px;
  padding-right: 5px;
  border-radius: 10px;
}

@media (max-width: 800px) {
  .container1 {
    display: block;
  }
}

</style>