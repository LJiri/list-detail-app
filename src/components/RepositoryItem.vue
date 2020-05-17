<template>
    <li class="repository-item">
        <router-link :to="{ name: 'RepositoryDetail', params: { name: name }}">
            <h2>{{ full_name }}</h2>
            <p v-if="description">{{ description }}</p>
            <div>
                <span v-if="language"><SvgIcon v-bind:name="'language'" />{{ language }}</span>
                <span v-if="stargazers_count"><SvgIcon v-bind:name="'star'" />{{ stargazers_count }}</span>
                <span v-if="license"><SvgIcon v-bind:name="'license'" />{{ license.name }}</span>
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
        .icon {
            width: 20px;
        }
    }
</style>
