<template>
  <div class="_padding-10">
    <div class="box">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="image.image_path">
          </figure>
        </div>
        <div class="card-content">
          <!--<div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>-->

          <div class="content">
            <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a>#css</a> <a>#responsive</a> -->
            <small><strong>time created: </strong>{{image.timeCreated}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
  export default {
    props: ['image']
  }
</script>
<style lang="scss" scoped>
._padding-10 {
  padding: 10px;
}
</style>
