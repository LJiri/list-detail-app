<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="repository-detail text-center">
          <h1>{{ this.$route.params.name }}</h1>
          <div class="accordion loading">
            <h3
              class="accordion-toggle"
              v-on:click="toggleAccordion"
              data-toggle="branches"
            >
              Branches
            </h3>
            <ul class="accordion-content list-unstyled" id="branches">
              <li v-for="branch in branches" v-bind:key="branch.commit.sha">
                {{ branch.name }}
              </li>
            </ul>
            <h3
              class="accordion-toggle"
              v-on:click="toggleAccordion"
              data-toggle="commits"
            >
              Commits
            </h3>
            <ul class="accordion-content list-unstyled" id="commits">
              <li v-for="commit in commits" v-bind:key="commit.sha">
                {{ commit.commit.message }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/utilities/fetchData.js";
import removeLoader from "@/utilities/removeLoader.js"; 

export default {
  name: "RepositoryDetail",
  data() {
    return {
      branches: [],
      commits: []
    };
  },
  methods: {
    toggleAccordion: function(e) {
      const targetId = e.target.dataset.toggle;
      const target = document.getElementById(targetId);

      target.classList.toggle("is-active");
    }
  },
  created() {
    (async () => {
      await fetchData(`https://api.github.com/repos/Inza/${this.$route.params.name}/branches?page=1&per_page=10`, this, 'branches', true);
      await fetchData(`https://api.github.com/repos/Inza/${this.$route.params.name}/commits?page=1&per_page=10`, this, 'commits', true);

      removeLoader(".repository-detail .accordion");
    })();
  }
};
</script>

<style lang="scss">
.repository-detail {
  .accordion {
    position: relative;
    background: $bg-color;
    padding: $padding;
    border-radius: $border-radius;

    &-toggle {
      cursor: pointer;
      border: 1px solid $bg-color;
      border-radius: $border-radius;
      margin: 0;

      &:hover {
        background: $bg-hover-color;
      }
    }

    &-content {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: max-height 0.5s, opacity 1s;

      &:last-child {
        margin: 0;
      }

      &.is-active {
        max-height: 5000px;
        opacity: 1;
      }
    }
  }
}
</style>
