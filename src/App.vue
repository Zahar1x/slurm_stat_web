<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark mt-0">
      <a class="navbar-brand">Slurm Statistics</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <font-awesome-icon icon="home" /> Главная
          </router-link>
        </li>
      </div>

      <div class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/load" class="nav-link">
            Load graphic
          </router-link>
        </li>

      </div>

      <div class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/failures" class="nav-link">
            Failures graphic
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/downtime" class="nav-link">
            Downtime graphic
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/work" class="nav-link">
            Work graphic
          </router-link>
        </li>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
