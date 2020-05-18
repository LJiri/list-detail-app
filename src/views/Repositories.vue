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
    (async () => {
      try {
        let userResponse = await fetch("https://api.github.com/users/Inza");
        let userData = await userResponse.json();
        this.userInfo = userData;

        document.querySelector(".user-info").classList.remove("loading");
      } catch (err) {
        console.log(err);
      }
    })();

    (async () => {
      try {
        let repositoriesResponse = await fetch("https://api.github.com/users/Inza/repos");
        let repositoriesData = await repositoriesResponse.json();
        this.repositories = Array.from(repositoriesData);

        document.querySelector(".repository-list").classList.remove("loading");
      } catch (err) {
        console.log(err);
      }
    })();
  }
};
</script>
