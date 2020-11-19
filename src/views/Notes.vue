<template>
  <div>
    <h3>My Notes</h3>
    <div class="notedetails d-flex flex-wrap" id="app">
      <div v-bind:key="note.id" v-for="note in JSON.parse(notes[0])" class="my-4">
          <Note v-bind:note="note"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Note from '../components/Note'

export default {
  name: 'Notes',
  components: {
    Note
  },  
  data() {
    return {
      notes: [localStorage.getItem("notes")],
    }
  }
}
</script>
