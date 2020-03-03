<template>
  <div class="container-fluid">
    <footer class="d-flex">
      <div class="row last">
        <div class="col-3 col-md-3 logo">
          <img src="@/assets/logo.png">
        </div>
        <div class="col-9 col-md-8">
          <ul class="foot">
            <li 
              v-for="info in infos" 
              :key="info.i"> 
              <caption>{{ info.caption }} 
                <span>{{ info.value }}</span>
              </caption>  
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>  
</template>

<script>

export default {
  data() {
    return {
      infos: [
        {
          'caption': 'Email',
          'value': 'contact@beankbakers.fi'}, 
        {
          'caption': 'Phone',
          'value': '+358 (0) 44 76 92 601'
        },
        {
          'caption': 'VAT ID',
          'value': '2893192-3' 
        },
      ]
    }
  }
}
</script>

<style scoped>
  img {
    width: 150%;
    margin-top: 50%;
  }
  .last {
    margin: 5px;
  }

  ul.foot {
    list-style-type: none;
  }

  li caption {
    width: 230px;
    color: rgb(116, 113, 113);
    text-align: justify;
  }

  li span {
    color: black;
    margin-left: 30px;
    text-align: justify;
  }

  @media screen and (min-width: 768px) {
    .logo {
      margin-top: -50px;
      margin-left: 20px;
    }
    .logo img {
      width: 100%;
      margin-left: 80%;
    }
    .foot {
      margin-left: 30%;
    }
  }
  @media screen and (min-width: 992px) {
    .logo {
      margin-top: -100px;
    }
    .logo img {
      width: 100%;
    }
    li caption {
      width: 280px;
    }
  }

  @media screen and (min-width: 1200px) {
    .logo {
      margin-top: -10%;
    }
    .last {
      margin-left: 17%;
    }
  }
</style>