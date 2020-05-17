<template>
  <div class="repository-detail">
    <h1> {{ this.$route.params.name }} </h1>
    <div>
      <ul>
        <li v-for="branch in branches" v-bind:key="branch.commit.sha">{{ branch.name }}</li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="commit in commits" v-bind:key="commit.sha">{{ commit.commit.message }}</li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  name: "RepositoryDetail",
  data() {
    return {
      branches: [],
      commits: []
    }
  },
  created() {
    
    (async () => {
      let branchesResponse = await fetch(`https://api.github.com/repos/Inza/${this.$route.params.name}/branches?page=1&per_page=10`);
      let branchesData = await branchesResponse.json();
      this.branches = Array.from(branchesData);

      let commitsResponse = await fetch(`https://api.github.com/repos/Inza/${this.$route.params.name}/commits?page=1&per_page=10`);
      let commitsData = await commitsResponse.json();
      this.commits = Array.from(commitsData);
    })();
  }
};


</script>
