<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Repositories</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}

#nav {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  background: rgba($primary-color, 0.95);
  box-shadow: 7px 5px 15px rgba($primary-color, 0.95);
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: $text-color;

    &.router-link-exact-active {
      color: $bg-color;
      text-decoration: underline;
    }
  }

  & + div {
    margin-top: 100px;
  }
}
</style>
