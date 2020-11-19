<template>
  <div>
    <template>
      <v-dialog v-model="dialogDelete" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-hover>
            <template v-slot:default="{ hover }">
              <b-card-body
                border-variant="warning"
                class="my-2 shadow-sm transition-swing d-flex text-left align-items-center"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                :class="`elevation-${hover ? 4 : 0}`"
              >
                {{ content }}
                <b-icon icon="trash" variant="danger" class="ml-auto"></b-icon>
              </b-card-body>
            </template>
          </v-hover>
        </template>
        <v-card>
          <v-card-title class="headline justify-center">
            Delete Item ?
          </v-card-title>
          <v-card-text>Do you really want to discard this item ?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialogDelete = false">
              Keep
            </v-btn>
            <v-btn text color="error" @click="closeDialog()"> Delete </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "ContentItem",
  props: ["content", "note"],
  data() {
    return {
      dialogDelete: false,
    };
  },
  methods: {
    ...mapActions(["deleteContentItem"]),
    closeDialog() {
      var parsedContent = JSON.parse(JSON.stringify(this.note.content));
      parsedContent.splice(this.$vnode.key, 1);
      this.dialogDelete = false;
      this.deleteContentItem({
        id: this.note._id,
        newContent: parsedContent,
        title: this.note.title,
      });
    },
  },
};
</script>

<style scoped>
.card-body {
  padding: 1rem;
  background-color: rgba(255, 217, 0, 0.2) !important;
  border: 1px solid #ffc1078f;
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) calc(0.25rem - 1px)
    calc(0.25rem - 1px);
}
</style>