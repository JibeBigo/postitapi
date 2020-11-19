<template>
    <form @submit="addList">
        <div class="input-group mb-3 m-2">
            <input type="text" v-model="name" class="form-control" placeholder="Add new list" name="name">
            <button class="btn btn-outline-primary mr-3" type="submit" value="Submit">Add</button>
        </div>
    </form>
</template>

<script>
import uuid from 'uuid';

export default {
    name: "AddList",
    data() {
        return {
            name: ''
        }
    },
    methods: {
        addList(e) {
            e.preventDefault();
            const newList = {
                id: uuid.v4(),
                name: this.name,
            }
            this.$emit('add-list', newList);
            this.name= ''
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