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
// @ is an alias to /src
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
      userInfo: {
        avatar_url: 'http://satyr.io/200-250x300'
      },
      repositories: []
    }
  },
  created() {
    (async () => {
      let userResponse = await fetch("https://api.github.com/users/Inza");
      let userData = await userResponse.json();
      this.userInfo = userData;

      let repositoriesResponse = await fetch("https://api.github.com/users/Inza/repos");
      let repositoriesData = await repositoriesResponse.json();
      this.repositories = Array.from(repositoriesData);
    })();
  }
};


</script>
