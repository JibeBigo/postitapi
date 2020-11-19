<template>
  <div class="home">
    <div class="d-flex flex-row flex-wrap justify-content-start">
      <AddNote />
      <div class="note" v-for="note in allNotes" :key="note.id">
        <b-card
          class="m-2"
          border-variant="primary"
          :header="note.title"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
        >
          <template v-slot:header>
            <b-nav card-header tabs class="d-flex justify-content-between align-items-baseline align-items-center ml-1">
              <b-card-text>{{ note.title }}</b-card-text>
              <a href="#" @click="deleteNote(note._id)"
                ><b-icon icon="trash" variant="white"></b-icon
              ></a>
            </b-nav>
          </template>
          <Note v-bind:note="note" />
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Note from "@/components/Note.vue";
import AddNote from "@/components/AddNote.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Note,
    AddNote,
  },
  methods: {
    ...mapActions(["fetchNotes", "deleteNote"]),
  },
  computed: mapGetters(["allNotes"]),
  created() {
    this.fetchNotes();
  },
};
</script>

<style scoped>
.note {
  min-width: 14rem;
}
.card {
  min-height: 18rem;
  max-height: 22rem;
  max-width: 18rem;
}
.card-body {
  padding: 10px 10px;
  overflow: auto;
}
.card-header {
  height: 3.05rem;
}
</style>
