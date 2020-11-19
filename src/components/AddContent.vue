<template>
  <form @submit="onSubmit">
    <div class="input-group mb-3 mx-2" style="width: 16rem">
      <input
        type="text"
        v-model="newContent"
        class="form-control"
        placeholder="Add content"
        name="newContent"
      />
      <button class="btn btn-outline-primary" type="submit" value="Submit">
        Add
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  name: "AddContent",
  props: ["note"],
  data() {
    return {
      newContent: "",
    };
  },
  methods: {
    ...mapActions(["addContent"]),
    async onSubmit(e) {
      e.preventDefault();
      var parsedContent = JSON.parse(JSON.stringify(this.note.content));
      if (this.newContent === "") {
        const response = await axios.get(
          "https://thesimpsonsquoteapi.glitch.me/quotes"
        );
        // var quote = response.data.quote[0]
        this.newContent = response.data[0].quote + " - " + response.data[0].character;
      }
      parsedContent.push(this.newContent);
      this.addContent({
        id: this.note._id,
        content: parsedContent,
        title: this.note.title,
      });
      this.newContent = "";
    },
  },
};
</script>

<style scoped>
.bg-warning {
  background-color: rgba(255, 217, 0, 0.2) !important;
}
.card-text {
  text-align: start;
}
</style>