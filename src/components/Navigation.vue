<template>
  <header>
      <div class="logo">
              <router-link class="header" :to="{name: 'Home'}">DDD</router-link>
        </div>
          
      <nav class="container">
          <div class="nav-links">
              <!--ul v-show="!mobile" class="menu"-->
              <ul  class="menu">
                  <router-link class="link" :to="{name: 'CreatePost'}">Create Post</router-link>
                  <router-link class="link" :to="{name: 'CreatePost'}">PORTFOLIO+</router-link>
                  <router-link class="link" :to="{name: 'About'}">About</router-link>
                  
              </ul>
          </div>
      </nav>
      <transition name="mobile-nav">
                  <ul class="mobile-nav" v-show="mobileNav">
                      <router-link class="link" :to="{name: 'CreatePost'}">Create Post</router-link>
                      <router-link class="link" :to="{name: 'CreatePost'}">PORTFOLIO+</router-link>
                      <router-link class="link" :to="{name: 'About'}">About</router-link>
                  </ul>
        </transition>              
  </header>
</template>

<script>

export default {
    name: 'navigation',
    data() {
        return {
            mobile: null,
            mobileNav: null,
            user: true,
            windownWidth: null,
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windownWidth = window.innerWidth;
            if(this.windownWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },


    },
    components: {
        
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
*{
    font-family: 'Open Sans', sans-serif;
}
header {
    background-color: #fbf6f2;

    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 99;
    
    //box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    
    .logo {
        width: 100%;
        position: fixed;
        display: flex;
        flex: 1;
        justify-content: center;
        padding-top: 15px;
        .header {
                cursor: pointer;
                font-size: 1.8rem;
                font-weight: 700;
                color: #000;
                text-decoration: none; 
                transition: .3s ease-in-out all;
                
            @media(max-width:700px) {
                font-size: 1.8rem;
                padding: 7px 0px;
            }    

            &:hover {
                color: #46759b;
            }
        }    
    }
    .container {
        margin-top: 80px;
        padding-bottom: 15px;
        position: fixed;
        display: flex;
        width: 100%;
        background-color: #fbf6f2;
        .nav-links {
            width: 60%;
            display: flex;
            flex: 1;
            
            align-items: center;
            justify-content: center;
            .menu {
                letter-spacing: 5px;
                cursor: pointer;
                text-decoration: none;
                
                &:hover {
                    color: #000;
                }

                .link {
                    //border: 1px solid black;
            
                    padding: 0 30px;
                    font-size: 12px;
                    text-decoration: none;
                    color: #bbb;
                    transition: .3s ease all;
                    &:hover {
                        color: #46759b;
                    }

                    @media(max-width: 700px) {
                        font-size: 10px;
                    }
                    
                }
            }

            .menu-icon {
                cursor: pointer;
                position: absolute;
                top: 32px;
                right: 25px;
                height: 25px;
                width: auto;
            }
        }

    }
}
</style>