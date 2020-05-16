<template>
  <div class="row">
      <div class="col-12 col-sm-4 col-lg-12">
        <img v-bind:src="avatar_url" v-bind:alt="'Image of ' + name">  
      </div>
      <div class="col-12 col-sm-8 col-lg-12">
        <h2>
            <span>{{ name }}</span>
            <span>{{ login }}</span>
        </h2>
        <p>{{ bio }}</p>  
      </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    avatar_url: String,
    name: String,
    login: String,
    bio: String
  }
};
</script>

<style scoped lang="scss">
    img {
        max-width: 100%;
    }
</style>
