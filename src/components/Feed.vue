<template>
  <div class="panel">
    <div class="columns is-mobile">
      <div class="column has-text-centered">
        Feed

        <input @change="uploadImage" class="photo-input" type="file" accept="image/*" id="capture" capture="camera"> 
        <i @click="browseImage" class="fa fa-plus-circle fa-4x add-button" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      photo: ''
    }),
    methods: {
      browseImage () {
        document.querySelector('.photo-input').click()
      },
      uploadImage (event) {
        console.log(event.target.files[0])
        console.log(typeof event.target.files[0])
      }
    }
  }
</script>
<style lang="scss" scoped>
  .photo-input {
    display: none;
  }
  .add-button {
    color: #ff3860;
    position: fixed;
    bottom: 50px;
    right: 50px;
  }
</style>
