<template>
  <div class="user-info row no-gutters loading">
    <div class=" col-12 col-sm-4 col-lg-12">
      <div class="user-info-head">
        <img v-bind:src="avatar_url" v-bind:alt="'Image of ' + name" />
      </div>
    </div>
    <div class="col-12 col-sm-8 col-lg-12">
      <div class="user-info-body text-center text-sm-left text-lg-center">
        <h2>
          <span>{{ name }}</span>
          <span class="user-info-login">({{ login }})</span>
        </h2>
        <p>{{ bio }}</p>
      </div>
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

<style lang="scss">
.user-info {
  width: 100%;
  background: $bg-color;
  border-radius: $border-radius;
  margin-bottom: $margin;

  @include media-breakpoint-up(lg) {
    max-width: 290px;
    position: fixed;
  }

  @include media-breakpoint-up(xl) {
    max-width: 320px;
    position: fixed;
  }

  &-head {
    @include media-breakpoint-up(sm) {
      padding: $padding;
    }

    @include media-breakpoint-up(lg) {
      padding: 0;
    }
  }

  img {
    width: 100%;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;

    @include media-breakpoint-up(sm) {
      border-radius: 50%;
    }

    @include media-breakpoint-up(lg) {
      border-radius: $border-radius $border-radius 0 0;
    }
  }

  &-body {
    padding: $padding;
  }

  &-login {
    display: block;
    font-size: 22px;
  }
}
</style>
