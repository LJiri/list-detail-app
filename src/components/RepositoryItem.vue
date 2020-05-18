<template>
  <li class="repository-item">
    <router-link :to="{ name: 'RepositoryDetail', params: { name: name } }">
      <div>
        <h2>{{ full_name }}</h2>
        <p v-if="description">{{ description }}</p>
        <div v-if="language || stargazers_count || license">
          <span v-if="language">
            <SvgIcon v-bind:name="'language'" />
            {{ language }}
          </span>
          <span v-if="stargazers_count">
            <SvgIcon v-bind:name="'star'" />
            {{ stargazers_count }}
          </span>
          <span v-if="license">
            <SvgIcon v-bind:name="'license'" />
            {{ license.name }}
          </span>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  name: "RepositoryItem",
  components: {
    SvgIcon
  },
  props: {
    name: String,
    full_name: String,
    description: String,
    language: String,
    stargazers_count: Number,
    license: Object
  }
};
</script>

<style lang="scss">
.repository-item {
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  a {
    display: block;
    background: $bg-color;
    border-radius: 15px;
    color: $text-color;
    text-align: left;
    padding: $padding;
    transition: transform 0.5s;

    &:hover {
      background: $bg-hover-color;
      color: $text-color;
      text-decoration: none;
      transform: scale(1.02);
    }
  }

  h2 {
    word-break: break-all;
  }

  span {
    display: inline-flex;

    &:not(:last-child) {
      margin-right: $margin;
    }
  }

  .icon {
    width: 20px;
    margin-right: $margin / 2;
    fill: $secondary-color;
  }
}
</style>
