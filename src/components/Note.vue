<template>
    <div class="d-flex-column mx-2">
        <div class="card" style="width: 16rem;">
            <div class="card-body shadow-sm bg-warning">
                <p class="card-text">{{note.content}}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <router-link :to="{ name: 'note', params: { id: note.id, content: note.content}}">Show note</router-link>
                    <a @click="$emit('del-note', note.id)" class="btn text-danger"><b-icon icon="trash"></b-icon> Delete</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Note",
    props: ["note"]
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