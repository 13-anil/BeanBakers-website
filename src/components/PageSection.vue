<template>
  <section class="d-flex sec-two">
    <div 
      v-if="imagePosition === 'right'" 
      class="row">
      <div class="col col-md-11 col-xl text txt-2">
        <h1> {{ title }} </h1>
        <p> {{ content }} </p>
      </div>
      <div class="col-8 col-md-8 col-xl-6 img-2">
        <img 
          :src="image"
          height="100">
      </div>
    </div>
    <div 
      v-else
      class="row">
      <div class="col col-md-11 col-xl text txt-2">
        <img 
          :src="image"
          height="100">
      </div>
      <div class="col-8 col-md-8 col-xl-6 img-2">
        <h1> {{ title }} </h1>
        <p> {{ content }} </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props:  {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: '',
        },
        image: {
            type: String,
            default:''
        },
        imagePosition: {
            type: String,
            default: 'left'
        }

    },
}
</script>