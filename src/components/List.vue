<template>
    <div class="d-flex flex-nowrap overflow-auto justify-content-left ml-2">
        <div v-bind:key="list.id" v-for="list in lists" class="my-4 mx-2">
            <div class="card" style="max-width: 18rem;">
                <div class="card-header">{{list.name}}</div>
                <div class="d-flex-column mx-10">
                    <div v-bind:key="note.id" v-for="note in notes" class="my-4">
                        <Note v-if="note.list_id === list.id" v-bind:note="note" v-on:del-note="deleteNote"/>
                    </div>
                    <AddNote v-on:add-note="addNote" v-on:make-toast="makeToast" v-bind:list="list"/> 
                </div>
                <div>
                    <button @click="deleteList(list.id)" class="btn btn-outline-danger"><b-icon icon="trash"></b-icon> Delete List</button>
                </div>
            </div>
        </div>
        <div class="my-4 mx-2">
            <div class="mb-3" style="width: 18rem;">
                <AddList v-on:add-list="addList" v-bind:lists="lists"/>
            </div>
        </div>
    </div>
</template>

<script>
import Note from '../components/Note'
import AddNote from '../components/AddNote'
import AddList from '../components/AddList'

export default {
    name: "Lists",
    components: {
    Note,
    AddNote,
    AddList
  },  
    props: ["lists"],
    data() {
    return {
      notes: JSON.parse(localStorage.getItem("notes")),
      content: ''
      }
    }, 
    methods: {
        addNote(newNote) {
            this.notes.push(newNote);
            localStorage.setItem("notes", JSON.stringify(this.notes));
        },
        addList(newList) {
            this.lists = [...this.lists, newList];
            localStorage.setItem("lists", JSON.stringify(this.lists));
        },
        getLists() {
            return JSON.parse(localStorage.getItem("lists"));
        },
        getNotes() {
            return JSON.parse(localStorage.getItem("notes"));
        },
        deleteNote(id) {
            this.notes = this.notes.filter(note => note.id !== id)
            localStorage.setItem("notes", JSON.stringify(this.notes))
        },
        deleteList(id) {
            this.lists = this.lists.filter(list => list.id !== id)
            localStorage.setItem("lists", JSON.stringify(this.lists))
        },
        makeToast() {
        this.$bvToast.toast('Note added successfully', {
          title: 'Success',
          autoHideDelay: 5000,
          variant: "success"
        })
        }
    }
  }

</script>

<style scoped>

.btn-outline-danger{
  padding: 4px;
  margin-bottom: 0.6em;
}

</style>