<template>
  <div id="app">
    <div id="nav" class="navbar navbar-light shadow-sm bg-light">
      <a class="navbar-brand" href="/">
      <img src="./assets/notes.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
      Postit App
      </a>
      <ul class="navbar-nav d-flex flex-row justify-content-between mr-3" style="width:130px">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/notes">Notes</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar-light {
  background-color: #FFFFFF !important;
}
</style>
