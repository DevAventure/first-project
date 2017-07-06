<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style>
html, body, #app {
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
