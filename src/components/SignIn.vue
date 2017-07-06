<template>
 <div class="container is-fluid signin-container">
    <button @click="signIn" class="button is-outlined is-primary">Sign In</button>
  </div>
</template>
<script>
  import firebase from 'firebase'
  export default {
    methods: {
      signIn () {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then(() => {
            this.$router.replace(this.$route.query.redirect || '/')
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
.signin-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
