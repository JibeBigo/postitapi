<template>
  <div class="home">
    <div class="container">
      <v-text-field
        class="mb-5"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <div class="d-flex flex-row flex-wrap justify-content-start">
        <AddNote />
        <div data-app class="note" v-for="note in filteredNotes" :key="note.id">
          <b-card
            class="m-2 shadow-sm"
            border-variant="primary"
            :header="note.title"
            header-bg-variant="primary"
            header-text-variant="white"
            header-class="text-left"
            align="center"
          >
            <template v-slot:header>
              <b-nav
                card-header
                tabs
                class="d-flex justify-content-between flex-nowrap align-items-baseline pl-1"
              >
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
  </div>
</template>

<script>
// @ is an alias to /src

import Note from "@/components/Note.vue";
import AddNote from "@/components/AddNote.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      search: "",
    };
  },
  components: {
    Note,
    AddNote,
  },
  methods: {
    ...mapActions(["fetchNotes", "deleteNote"]),
  },
  computed: {
    ...mapGetters(["allNotes"]),
    filteredNotes: function () {
      return this.allNotes.filter((note) => {
        return note.title.toLowerCase().match(this.search.toLowerCase())
      });
    },
  },
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
  height: 20rem;

  width: 18rem;
}
.card-header {
  padding: 0.5rem 1rem;
}
.card-body {
  padding: 10px 10px;
  overflow: auto;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(90, 90, 90, 0.144);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
.container {
  max-width: 1250px;
}
</style>
