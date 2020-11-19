<template>
    <div class="card m-auto" style="width: 40rem; height: 40rem;">
        <div class="card-body shadow-sm bg-warning">
            <p class="card-text">{{note['content']}}</p>
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