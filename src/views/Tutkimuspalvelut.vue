<template>
  <div>

    <!-- First section of Tutkimuspalvelut -->
    <section class="d-flex sec-one">
      <div class="row">
        <div class=" col-8 col-md-6 col-xl-6 sec1-img">
          <img
            src="@/assets/random.png"
            class="animate img1" >
        </div>
        <div class="col">
          <h1> Tutkimuspalvelut </h1>
          <div 
            v-for="item in textJSON" 
            :key="item.id">
            <h3> {{ item.head }} </h3>
            <p> {{ item.text }} </p>
          </div>
          <a href="#contact-form">
            <button v-scroll-to="'#contact-form'"> Pyydä Tarjous </button>
          </a>
        </div>
      </div>
    </section>

    <!-- Second section of Tutkimuspalvelut -->
    <section 
      class="d-flex sec-two">
      <div class="row">
        <div class="col col-md-6 col-xl sec2-txt">
          <h1> Tutkittu tieto on valttia </h1>
          <p> 
            Tutkittu tieto on nykyään valttia niin johtamisessa, markkinoinnissa, kehittämisessä kuin monessa muussakin asiassa. Kerättiinpä tietoa mihin asiaan liittyen tahansa, on keskeistä, että tieto on kerätty suunnitellusti, hallitusti ja ammattimaisesti. Tällöin tiedonkeruusta on aidosti hyötyä ja lopputulos on toivotunkaltainen.
            <br> BeanBakers tarjoaa tukea ja osaamista erilaisten tiedonkeruiden ja tutkimusten toteuttamiseen ja suunnitteluun olipa kyseessä sitten palautekysely tai laajempi selvitys tai tutkimus.
          </p>
        </div>
        <div class="col-8 col-md col-xl sec2-img">
          <img 
            src="@/assets/random.png" 
            class="animate img2">
        </div>
      </div>
    </section>

    <!-- Third section of Tutkimuspalvelut -->
    <section class="d-flex">
      <div class="row">
        <div class="col-8 col-md-6 col-xl sec3">
          <img 
            class="circle" 
            src="@/assets/avatar.png">
        </div>
        <div class="col col-md-6 col-xl-6 text">
          <h1> Otsikko </h1>
          <p> <i>
            ”Intohimonani on edistää laadukasta tutkimuksentekoa ja tarkoituksenmukaista tiedonkeruuta. Liian usein törmää kyselyihin ja selvityksiin, joissa tiedonkeruu on suunniteltu huonosti tai toteutettu epäedullisella tavalla, joka pahimmassa tapauksessa vääristää tuloksia. Olen työskennellyt yli 10 vuotta erilaisissa tutkimushankkeissa ja opettanut tutkimusmenetelmiä korkekoulusektorilla. Viimeistelen parhaillaan myös omaa väitöskirjaani, joten minulla on ajantasaiset kontaktit tieteelliseen yhteisöön ja tutkimuksen ajankohtaisiin teemoihin. Olen mielelläni tukena tutkimuksesi tai tiedonkeruusi eri vaiheissa, jotta pääsisit haluttuun lopputulokseen.”
          </i> </p>
          <span> <b> Reeta Lehto </b> </span> <br>
          <span> KM, tutkimusasiantuntija, BeanBakers Oy </span>
        </div>
      </div>
    </section>

    <!-- Last section of Tutkimuspalvelut for contact form -->
    <section 
      id="contact-form" 
      ref="contact-form" >
      <Contact />
    </section>
  </div>
</template>

<script>
import Contact from './OtaYhteytta.vue';

export default {
    components: {
    Contact
  },
  data () {
    return {
      textJSON: [
        {
          head: 'Konsultointi',
          text: 'Tukea ja koulutusta tutkimuksen ja tiedonkeruun suunnitteluun, toteutukseen ja analysointiin, aineistonhallintaan.'
        },
        {
          head: 'Tutkimukset ja osatoteutukset',
          text: 'Aineistonkeruu eri menetelmillä (kysely, haastattelu, dokumentit tai muut kirjalliset aineistot, havainnointi), tulosten analysointi, raportointi, aineiston käsittely (esim. litterointi).Koko tutkimuksen totetuttaminen alusta loppuun asiakkaan toiveiden ja tarpeiden mukaan.'
        },
        {
          head: 'Lisäpalvelut',
          text: 'Koulutusta SPSS-ohjelmaan, Word, PowerPoint ja Excel -alkeet.'
        }
      ]
    }
  },

  watch: {
    '$route.hash': {
      immediate: true,
      handler(val) {
        this.onRouteChange(val);
      }
    }
  },

  methods: {
    onRouteChange(val) {
      if(val) {
        const hash = val.substr(1);
        this.$nextTick(() => {
          const el = this.$refs[hash];
          if(el) el.scrollIntoView();
        });
      }
    }
  }
}
</script>

<style scoped>
  .animate {
    animation: moveDown 0.8s ease-in-out 0.1s backwards;
  }
  @keyframes moveDown{
    0% { 
      transform: translateY(-40px); 
      opacity: 0;
    }
    100% { 
      transform: translateY(0px);  
      opacity: 1;
    }
  }
  .circle:hover {
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    }
  h1 {
    font-size: 37px;
  }
  p {
    text-align: justify;
    margin-right: 30px;
  }
  button {
    padding: 10px;
    background-color: teal;
    border-radius: 20px;
    color: white;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
  }
  .sec-one {
    margin: 2%;
  }
  .img1 {
    width: 70%;
  }
  .sec-two {
    background-color: rgb(241, 234, 234);
  }
  .sec2-img {
    margin: 2%;
  }
  .img2 {
    width: 60%;
  }
  .sec2-txt {
    margin: 2%;
  }
  .sec3 img {
    width: 70%;
  }
  .circle {
    border-radius: 50%;
    margin-left: 5%;
    padding: 10px;
  }
  #contact-form {
    background-color: rgb(241, 234, 234);
    margin: 10px;
    padding: 10px;
  }
  @media screen and (min-width: 1200px) {
    .img1 {
      width: 70%;
    }
    .text {
      margin-left: 10%;
      margin-top: 2%;
    }
    .sec1-img {
      margin: 3%;
      padding: 2%;
      width: 100%;
    }
    .sec2-img {
      margin: 5%;
      padding: 2%;
      width: 100%;
    }
    .img2 {
      width: 60%;
    }
    .circle {
      margin: 3%;
      padding: 2%
    }
    .sec3 img {
      width: 70%;
    }
  }
</style>