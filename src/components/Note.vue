<template>
  <div>
    <AddContent v-bind:note="note"/>
    <b-card
      v-for="subnote in note.content"
      :key="subnote"
      border-variant="warning"
      class="my-3"
    >
      {{ subnote }}
    </b-card>
  </div>
</template>

<script>
import AddContent from '../components/AddContent.vue'

export default {
  name: "Note",
  components: {
    AddContent
  },
  props: ["note"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-body {
  padding: 1rem;
  background-color: rgba(255, 217, 0, 0.2) !important;
}
</style>
