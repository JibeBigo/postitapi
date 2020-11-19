<template>
  <div class="home" id="app">
    <List v-bind:lists="lists"/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '../components/List'


export default {
  name: 'Home',
  components: {
    List,
  },  
  data() {
    return {
      lists: JSON.parse(localStorage.getItem("lists")),
    }
  },
}
</script>
