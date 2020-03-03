<template>
  <div>

    <!-- First Section for the details of ohjelmistokonsultointi component-->
    <section class="d-flex sec-one">
      <div class="row">
        <div class=" col-8 col-md-6 col-xl-6 sec1-img">
          <img
            src="@/assets/random.png"
            class="animate img1" >
        </div>
        <div class="col">
          <h1> Ohjelmistokonsultointi </h1>
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

    <!-- Second Section for the details of ohjelmistokonsultointi component-->
    <section class="d-flex sec-two">
      <div class="row">
        <div class="col col-md-6 col-xl sec2-txt">
          <h1> Otsikko </h1>
          <p> {{ para }} {{ para }} </p>
        </div>
        <div class="col-8 col-md col-xl-6 sec2-img">
          <img
            src="@/assets/random.png"
            class="animate img2" >
        </div>
      </div>
    </section>

    <!--  <page-section
      v-for="(item, i) in items"
      :key="i"
      :content="item.content"
      :title="item.title"
      :image="item.image"
      :image-position="item.imagePosition"
    /> -->

    <!-- Third Section for the details of ohjelmistokonsultointi component-->
    <section class="d-flex">
      <div class="row">
        <div class=" col-8 col-md-6 col-xl sec3" >
          <img 
            class="circle" 
            src="@/assets/avatar.png">
        </div>
        <div class="col col-md-6 col-xl-6 text">
          <h1> Otsikko </h1>
          <p> {{ para }} {{ para }} </p>
          <span> <b> Peter Lehto, </b> CEO BeanBakers </span>
        </div>
      </div>
    </section>

    <!-- Last Section for the contact form of ohjelmistokonsultointi component-->
    <section 
      id="contact-form" 
      ref="contact-form" >
      <Contact />
    </section>
  </div>
</template>

<script>
import Contact from './OtaYhteytta.vue';
//import { contenItems } from "../config";

export default {
  components: {
    Contact
  },
  data () {
    return {
      para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi consectetur nam eius quos dolorem expedita, laborum libero quia, sequi voluptatibus ullam, iure quas itaque suscipit. Dolore qui odit magnam doloribus.',
      textJSON: [
        {
          head: 'Otsikko',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi consectetur nam eius quos dolorem expedita, laborum libero quia, sequi voluptatibus ullam, iure quas itaque suscipit. Dolore qui odit magnam doloribus.'
        },
        {
          head: 'Otsikko',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi consectetur nam eius quos dolorem expedita, laborum libero quia, sequi voluptatibus ullam, iure quas itaque suscipit. Dolore qui odit magnam doloribus.'
        },
        {
          head: 'Otsikko',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi consectetur nam eius quos dolorem expedita, laborum libero quia, sequi voluptatibus ullam, iure quas itaque suscipit. Dolore qui odit magnam doloribus.'
        },
      ]
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
    background-color: midnightblue;
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
  .circle {
    border-radius: 50%;
    margin-left: 5%;
    padding: 10px;
  }
  .sec3 img {
    width: 70%;
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
    .img2 {
      width: 60%;
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
    .circle {
      margin: 3%;
      padding: 2%
    }
    .sec3 img {
      width: 70%;
    }
  }
</style>