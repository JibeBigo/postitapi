<template>
  <div class="notedetails" id="app">
    <div v-bind:key="note.id" v-for="note in JSON.parse(notes[0])" class="my-4">
        <BigNote  v-bind:note="note" v-if="note['id']== $route.params.id"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BigNote from '../components/BigNote'

export default {
  name: 'Notes',
  components: {
    BigNote
  },  
  data() {
    return {
      notes: [localStorage.getItem("notes")],
    }
  }
}
</script>
