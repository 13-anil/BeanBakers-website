<template>
  <div>
    <section class="d-flex">
      <div class="row">
        <div 
          class="col-12 col-md-12 col-lg-8 first-img">
          <img 
            src="@/assets/bean.png"
            style="width: 100%;">
        </div>
        <div class="sec col-md-11 col-lg-4">
          <p> {{ para }} </p>
          <router-link :to=" {name: 'ohjelmistokonsultointi'} ">
            <button class="btn-one"> Ohjelmistokonsultointi </button>
          </router-link>
          <router-link :to=" {name: 'tutkimuspalvelut'} ">
            <button class="btn-two"> Tutkimuspalvelut </button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      para: 'Bean Bakers ipsum dolor sit amet, consectetur adipiscing elit. In at bibendum sem. Morbi rutrum lorem in interdum iaculis. Morbi et lacus sed enim commodo faucibus'
    }
  }
}
</script>

<style scoped>
  .first-img {
    background-color: teal;
  }
  .sec {
    text-align: justify;
    margin: 20px;
    padding: 10px;
  }
  .btn-one {
    padding: 10px;
    background-color: midnightblue;
    border-radius: 20px;
    color: white;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
  }
  .btn-two {
    padding: 10px;
    background-color: teal;
    border-radius: 20px;
    color: white;
    margin-left: 10px;
    cursor: pointer; 
  }

  @media screen and (min-width: 768px) {
    .first-img {
      max-width: 100%;
    }
    .first-img img {
      max-width: 50%;
      margin-left: 25%;
      padding: 10px;
    }
    .sec {
      margin-top: 10%;
      margin-bottom: 10%;
    }
  }

  @media screen and (min-width: 992px) {
    .first-img {
      max-width: 60%;
      height: 1000px;
    }
    .first-img img {
      max-width: 100%;
      margin: 0px;
      margin-top: 20%;
    }
    .sec {
      margin-top: 40%;
    }
  }

  @media screen and (min-width: 1200px) {
    .first-img {
      max-width: 50%;
      height: 1200px;
    }
    .first-img img {
      max-width: 50%;
      margin: 20%;
    }
    .sec {
      margin-top: 20%;
      margin-left: 5%;
    }
  }
</style>