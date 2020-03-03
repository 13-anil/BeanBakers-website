<template>
  <div>
    <h1> 404: Not Found ... ! </h1>
    <p>
      <router-link to="/">
        Go back To --> BeanBakers
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  h1 {
    text-align: center;
    color: brown;
    margin: 20px;
    padding: 20px;
    font-style: italic;
    font-weight: bold
  }
  p {
    text-align: center;
    color: #cccccc;
    font-style: italic;
    font-size: 30px;
    margin: 20px;
    padding: 20px;
  }
  p > a {
    color: #999;
    text-decoration: none;
  }
</style>