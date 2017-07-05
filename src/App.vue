<template>
  <div id="app">
      <NavBar></NavBar>
      <div class="container is-fluid">
          <div class="tabs is-fullwidth">
            <ul>
              <li :class="{ 'is-active': tab == 1 }" @click="toggleTab(1)"><a>Photo</a></li>
              <li :class="{ 'is-active': tab == 2 }" @click="toggleTab(2)"><a>Profile</a></li>
            </ul>
          </div>
          <transition name="fade" mode="out-in">
            <div v-if="tab == 1" class="panel">
              panel1
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <Profile v-if="tab == 2"></Profile>
          </transition>
      </div>
      <!-- <FooterComponent></FooterComponent> -->
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import Profile from '@/components/Profile'
  import FooterComponent from '@/components/FooterComponent'
  export default {
    name: 'app',
    components: {
      NavBar,
      Profile,
      FooterComponent
    },
    data: () => ({
      tab: 1
    }),
    methods: {
      toggleTab (id) {
        this.tab = id
      }
    },
    created () {
      console.log(this.$root)
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
