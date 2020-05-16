<template>
  <ul>
    <RepositoryItem v-for="repository in repositories" v-bind:key="repository.id" v-bind="repository" />
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
    console.log('fuck',this.repositories)
  }
};

</script>

<style scoped lang="scss">

</style>
