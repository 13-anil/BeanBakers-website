<template>
  <div>
    <nav 
      class="row menu-wrap slide-down slide-up">
      <input 
        ref="menuInput"
        type="checkbox"
        class="toggler" >
      <div class="hamburger"><div></div></div>
      <div class="menu">
        <div>
          <div>
            <router-link
              to="/" 
              @click.native="onLinkClicked">
              <img
                width="200px"
                src="@/assets/logo.png"
                style="max-width: 100%;"
                class="logo-img"/>
            </router-link>
            <ul
              class="col-xl">
              <li
                v-for="link in links"
                :key="link.id">
                <router-link 
                  :to="`${link.page}`" 
                  @click.native="onLinkClicked"> {{ link.text }} </router-link>
              </li>

              <li v-if="$route.name != 'beanbakers'">
                <a 
                  v-scroll-to="'#contact-form'"
                  href="#contact-form"
                  @click="onLinkClicked">
                  OTA YHTEYTTÄ
                </a>
              </li>
              <!-- <li>
                <a 
                  v-if="$route.name === 'tutkimuspalvelut'"
                  href="#contact-form"
                  @click="onLinkClicked">
                  OTA YHTEYTTÄ
                </a>
                <router-link
                  v-else
                  :to="{ name:'tutkimuspalvelut', hash: '#contact-form' }"
                  @click.native="onLinkClicked">
                  OTA YHTEYTTÄ
                </router-link>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          text: "OHJELMISTOKONSULTOINTI",
          page: "/ohjelmistokonsultointi"
        },
        {
          id: 2,
          text: "TUTKIMUSPALVELUT",
          page: "/tutkimuspalvelut"
        }
      ]
    }
  },
  methods: {
    onLinkClicked() {
      const el = this.$refs.menuInput;
      if(el) el.checked = false;
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 991px) {
  .slide-up, .slide-down {
    overflow:hidden;
  }
  .slide-up > div, .slide-down > div {
    transform: translateY(-100%);
    transition: all .5s ease-in;
  }
  .slide-down > div {            
    transform: translateY(0);
  } 
  input {
    display: block;
  }
    /* MENU STYLES */
  .menu-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .menu-wrap .toggler {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: 80px;
    height: 50px;
    opacity: 0;
  }

  .menu-wrap .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 80px;
    height: 60px;
    padding: 1rem;
    display: flex;
    align-items: left;
    justify-content: left;
  }

  /* Hamburger Line */
  .menu-wrap .hamburger > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 3px;
    background: #999;
    display: flex;
    align-items: left;
    justify-content: left;
    transition: all 0.25s ease-in-out;
    margin: 10px;
  }

  /* Hamburger Lines - Top & Bottom */
  .menu-wrap .hamburger > div::before,
  .menu-wrap .hamburger > div::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 3px;
    background: #999;
  }

  /* Moves Line Down */
  .menu-wrap .hamburger > div::after {
    top: 10px;
  }

  /* Toggler Animation */
  .menu-wrap .toggler:checked + .hamburger > div {
    transform: rotate(135deg);
    margin-top: 10px;
    background: #666;
  }
  
  /* Turns Lines Into X */
  .menu-wrap .toggler:checked + .hamburger > div:before,
  .menu-wrap .toggler:checked + .hamburger > div:after {
    top: 0;
    transform: rotate(90deg);
    background: #666;
  }
  /* Show Menu */
  .menu-wrap .toggler:checked ~ .menu {
    visibility: visible;
    background-color: white;
  }

  .menu-wrap .toggler:checked ~ .menu > div {
    transform: scale(1);
  }

  .menu-wrap .toggler:checked ~ .menu > div > div {
    opacity: 1;
  }
  .menu-wrap .menu > div > div {
    text-align: left;
    max-width: 100%;
    max-height: 100%;
    width: 1000px;
    height: 1800px;
    opacity: 0;
  }
  .menu-wrap .menu > div > div > ul > li {
    list-style: none;
    font-size: 1.2rem;
    padding: 1.5rem;
  }
  .menu-wrap .menu > div > div > ul > li > a {
    color: black;
    text-decoration: none;
    transition: color 0.4s ease;
  }
  .logo-img {
    margin-top: 100px;
    margin-left: 40px;
  }
}

@media screen and (min-width: 992px) {
  input {
    visibility: hidden;
  }
  .menu-wrap {
    padding: 50px;
    margin-bottom: 10px;
  }
  .menu-wrap .menu > div > div > ul {
    display: flex;
    margin-left: 8%;
    position: absolute;
    justify-content: center;
    margin-top: 16px;
  }
  .menu-wrap .menu > div > div > ul > li {
    display: flex;
    margin-left: 40px;
    margin-bottom: 10px;
  }
  .menu-wrap .menu > div > div > ul > li > a {
    color: black;
  }
  .logo-img {
    position: absolute;
    margin-top: -16px;
  }
}

@media screen and (min-width: 1200px) {
  .menu-wrap .menu > div > div > ul {
    position: absolute;
    margin-left: 20%;
  }
}
</style>