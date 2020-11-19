<template>
    <form @submit="addNote">
        <div class="input-group mb-3 mx-2" style="width: 16rem;">
            <input type="text" v-model="content" class="form-control" placeholder="Add new note" name="content">
            <button class="btn btn-outline-primary" type="submit" value="Submit" @click="$emit('make-toast')">Add</button>
        </div>
    </form>
</template>

<script>
import uuid from 'uuid';

export default {
    name: "AddNote",
    data() {
        return {
            content: ''
        }
    },
    methods: {
        addNote(e) {
            e.preventDefault();
            const newNote = {
                id: uuid.v4(),
                content: this.content,
                list_id: this.$attrs.list.id
            }
            this.$emit('add-note', newNote);
            this.content= ''
        }
    }
}

</script>

<style scoped>
.bg-warning{
    background-color: rgba(255, 217, 0, 0.2) !important;
}
.card-text{
    text-align: start;
}
</style>