<template>
  <div class="panel">
    <div class="columns is-mobile">
      <div class="column is-mobile has-text-centered">
        <MyImage :key="key" v-for="(image, key) in myPhoto" :image="image"></MyImage>
        <input @change="uploadImage" class="photo-input" type="file" accept="image/*" id="capture" capture="camera"> 
        <i @click="browseImage" class="fa fa-plus-circle fa-4x add-button" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>
<script>
  import MyImage from '@/components/MyImage'
  import firebase from 'firebase'
  export default {
    components: {
      MyImage
    },
    data: () => ({
      photo: '',
      myPhoto: []
    }),
    methods: {
      browseImage () {
        document.querySelector('.photo-input').click()
      },
      uploadImage (event) {
        let file = event.target.files[0]
        let userId = firebase.auth().currentUser.uid
        let imagePath = `images/${userId}/${file.name}`

        const fileFullRef = firebase.storage().ref().child(imagePath)
        fileFullRef.put(file)
          .then((snapshot) => {
            if (snapshot.state === 'success') {
              this.$root.$firebaseRefs.image.push({
                uid: userId,
                image_path: imagePath
              })
            }
          })
      }
    },
    created () {
      // firebase.storage().ref().child('images/ix3iTaMZ0VhHrX6UWjNvkBV8Pt83/1499514930923481551266.jpg')
      //   .then(response => console.log(response))
      let vm = this
      this.$root.$firebaseRefs.image.orderByChild('uid').equalTo(firebase.auth().currentUser.uid).on('value', function (snapshot) {
        vm.myPhoto = []
        let data = snapshot.val()
        Object.keys(data).forEach(x => {
          firebase.storage().ref().child(data[x].image_path).getDownloadURL()
            .then(response => {
              firebase.storage().ref().child(data[x].image_path).getMetadata()
                .then(metadata => {
                  vm.myPhoto.push({
                    uid: data[x].uid,
                    image_path: response,
                    name: metadata.name,
                    timeCreated: metadata.timeCreated
                  })
                  console.log(vm.myPhoto)
                })
            })
        })
      })
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
