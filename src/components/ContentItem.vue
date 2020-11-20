<template>
  <div>
    <template>
      <v-dialog v-model="dialogDelete" max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-hover>
            <template v-slot:default="{ hover }">
              <b-card-body
                border-variant="warning"
                class="my-2 shadow-sm transition-swing d-flex text-left align-items-center"
                ref="content"
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
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Edit Color</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-color-picker
                  class="ma-2"
                  dot-size="30"
                  v-model="color"
                  hide-canvas
                  hide-mode-switch
                  disabled
                  hide-inputs
                  show-swatches
                  :swatches="swatches"
                ></v-color-picker>
                <v-btn color="blue darken-1" text @click="changeColor()">
                  Edit Color
                </v-btn>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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
      color: "",
      swatches: [
        ['#FF00003D', "#FFEB0042"],
        ['#0040FF38', "#00EFFF44"],
        ["#02FF004D", '#FF00D532'],
      ],
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
    changeColor() {
      this.$refs.content.style.backgroundColor = this.color;
      this.dialogDelete = false;
    },
  },
};
</script>

<style scoped>
.card-body {
  padding: 1rem;
  background-color: rgba(253, 235, 0, 0.29);
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) calc(0.25rem - 1px)
    calc(0.25rem - 1px);
}
</style>