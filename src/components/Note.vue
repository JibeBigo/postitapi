<template>
  <div class="d-flex flex-column mb-8" id="container">
    <draggable v-model="note.content" group="people" @start="drag=true" @end="drag=false">
    <ContentItem v-for="content in note.content" :key="note.content.indexOf(content)" v-bind:content="content" v-bind:note="note"/>
    </draggable>
    <div id="add-content-input">
      <AddContent v-bind:note="note" />
    </div>
  </div>
</template>

<script>
import AddContent from "../components/AddContent.vue";
import ContentItem from "./ContentItem.vue";
import draggable from 'vuedraggable'


export default {
  name: "Note",
  components: {
    AddContent,
    ContentItem,
    draggable
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
  border: 1px solid #ffc1078f;
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) calc(0.25rem - 1px)
    calc(0.25rem - 1px);
}
#add-content-input{
  position: absolute; 
  bottom: 0;
  left:0;
  width: 100%;
}
</style>
