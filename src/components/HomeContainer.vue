<template>
  <div>
    <NavBar></NavBar>
    <div class="container is-fluid">
        <div class="tabs is-fullwidth">
          <ul>
            <router-link tag="li" :to="{ name: 'feed' } " exact active-class="is-active"><a>Photo</a></router-link>
            <router-link tag="li" :to="{ name: 'profile' }" active-class="is-active"><a>Profile</a></router-link>
          </ul>
        </div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>
<script>
  import NavBar from '@/components/NavBar'
  export default {
    components: {
      NavBar
    }
  }
</script>
