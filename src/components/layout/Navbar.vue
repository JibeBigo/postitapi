<template>
  <div id="nav" class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/">
      <img src="@/assets/notes.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
      Postit App
      </a>
      <ul class="navbar-nav d-flex flex-row justify-content-between" style="width: 130px">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/notes">PostIts</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>