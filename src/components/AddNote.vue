<template>
  <div>
    <b-card
      class="m-2"
      border-variant="warning"
      header="Add Note"
      header-bg-variant="warning"
      header-text-variant="white"
      text-align="center"
    >
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="title"
            type="text"
            required
            placeholder="Enter a title"
          >
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="outline-warning" class="text-warning">Add</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddNote",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addNote"]),
    onSubmit(e) {
      e.preventDefault();
      this.addNote(this.title);
      this.title = "";
    },
  },
};
</script>

<style scoped>
.card {
  min-width: 18rem;
}
.card-body {
  padding: 10px 10px;
  overflow: auto;
}
.card-header {
  text-align: start;
}
.btn:hover {
  color: white !important;
}
</style>