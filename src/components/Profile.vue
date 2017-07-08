<template>
  <div class="panel">
    <div class="columns is-mobile">
      <div class="column has-text-centered">
        <figure class="image is-128x128 profile-image">
          <img :src="photo" class="profile" alt="">
        </figure>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                {{name}}
              </h1>
              <h2 class="subtitle">
                {{email}}
              </h2>
            </div>
          </div>
        </section>

        <button @click="signOut" class="button is-danger is-outlined">Sign Out</button>
      </div>
    </div>
  </div>
</template>
<script>
  import firebase from 'firebase'
  export default {
    data: () => ({
      name: '',
      email: '',
      photo: ''
    }),
    methods: {
      signOut () {
        firebase.auth().signOut()
          .then(() => {
            this.$router.push({ name: 'signIn' })
          })
      }
    },
    created () {
      // console.log(firebase.auth().currentUser)
      this.name = firebase.auth().currentUser.displayName
      this.email = firebase.auth().currentUser.email
      this.photo = firebase.auth().currentUser.photoURL
    }
  }
</script>
<style lang="scss" scoped>
.profile-image {
  margin: auto;
  > .profile {
    border-radius: 50%;
  }
}
</style>
