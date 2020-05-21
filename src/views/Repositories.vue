<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4">
        <UserInfo v-bind="userInfo" />
      </div>
      <div class="col-12 col-lg-8">
        <RepositoryList v-bind:repositories="repositories" />
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/utilities/fetchData.js";
import removeLoader from "@/utilities/removeLoader.js";

import RepositoryList from "@/components/RepositoryList.vue";
import UserInfo from "@/components/UserInfo.vue";

export default {
  name: "Repositories",
  components: {
    RepositoryList,
    UserInfo
  },
  data() {
    return {
      userInfo: {},
      repositories: []
    };
  },
  created() {
    fetchData("https://api.github.com/users/Inza", this, 'userInfo')
      .then(() => removeLoader('.user-info'));

    fetchData("https://api.github.com/users/Inza/repos", this, 'repositories', true)
      .then(() => removeLoader('.repository-list'));  
  }
};
</script>
