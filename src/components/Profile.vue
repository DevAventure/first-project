<template>
  <div class="panel">
    <div class="columns is-mobile">
      <div class="column has-text-centered">
        <button @click="signOut" class="button is-outlined">Sign Out</button>
      </div>
    </div>
  </div>
</template>
<script>
  import firebase from 'firebase'
  export default {
    methods: {
      signOut () {
        firebase.auth().signOut()
          .then(() => {
            this.$router.push({ name: 'signIn' })
          })
      }
    }
  }
</script>

