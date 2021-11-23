<template>
  <header>
      <div class="logo">
              <router-link class="header" :to="{name: 'Home'}">DDD</router-link>
        </div>
          
      <nav class="container">
          <div class="nav-links">
              <ul v-show="!mobile" class="menu">
                  <router-link class="link" :to="{name: 'CreatePost'}">Create Posts</router-link>
                  <router-link class="link" :to="{name: 'CreatePost'}">PORTFOLIO</router-link>
                  <router-link class="link" :to="{name: 'About'}">About</router-link>
                  
              </ul>
          </div>
      </nav>
      <transition name="mobile-nav">
                  <ul class="mobile-nav" v-show="mobileNav">
                      <router-link class="link" :to="{name: 'CreatePost'}">Create Posts</router-link>
                      <router-link class="link" :to="{name: 'CreatePost'}">PORTFOLIO</router-link>
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
*{
    
}
header {
    position: relative;
     background-color: #fff;
    z-index: 99;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    
    .logo {
        position: absolute;
        padding: 0 20px;
        .header {
                cursor: pointer;
                font-size: 2rem;
                font-weight: 700;
                color: #000;
                text-decoration: none; 
                transition: .3s ease-in-out all;
                
            @media(max-width:700px) {
                font-size: 1.4rem;
                position: absolute;
                padding: 7px 0px;
            }    

            &:hover {
                color: lightcoral;
            }
        }    
    }
    .container {
        padding: 10px 0;
        display: flex;
        width: 100%;
        
        .nav-links {
            width: 100%;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            .menu {
                cursor: pointer;
                text-decoration: none;
                &:hover {
                    color: #000;
                }

                .link {
                    padding: 0 20px;
                    font-weight: 500;
                    text-decoration: none;
                    color: #bbb;
                    transition: .3s ease all;
                    &:hover {
                        color: #000;
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

        .mobile-nav {

        }
    }
}
</style>