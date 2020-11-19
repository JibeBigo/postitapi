<template>
  <div id="nav" class="navbar navbar-light bg-light shadow-sm py-2 mb-5">
      <a class="navbar-brand" href="/">
      <img src="@/assets/NoteIt.png" width="50" height="50" alt="" loading="lazy">
      NoteIt
      </a>
      <ul class="navbar-nav d-flex flex-row justify-content-between" style="width: 130px">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">PostIts</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#nav{
  background-color: rgba(255, 217, 0, 0.2) !important;
}
</style>