<template>
  <ul class="repository-list list-unstyled loading">
    <RepositoryItem
      v-for="repository in repositories"
      v-bind:key="repository.id"
      v-bind="repository"
    />
  </ul>
</template>

<script>
import RepositoryItem from "@/components/RepositoryItem.vue";

export default {
  name: "RepositoryList",
  components: {
    RepositoryItem
  },
  props: {
    repositories: Array
  },
  created() {
  }
};
</script>
