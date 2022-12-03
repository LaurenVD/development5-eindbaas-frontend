<script setup>
    // detail donut page by id
    import { ref, onMounted, reactive } from 'vue'
    let donut = reactive({data: []});
    let name = ref('');
    let id = ref("");
    let image = ref("");
    let glaze = ref("");
    let sprinkles = ref("");
    let status = ref("");

    //show details from donut with id
    onMounted(() => {
        //get id from url
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        //fetch data from api
        const apiUrl = `https://donutello-backend.onrender.com/api/v1/donuts/${id}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                donut.data = data.data.donuts
                name.value = data.data.donut.name
                image.value = data.data.donut.image
                glaze.value = data.data.donut.glaze
                sprinkles.value = data.data.donut.sprinkles
                status.value = data.data.donut.status
            })
    });

</script>

<template>
        <div class="col">
                <h2>{{name}}</h2>
                <img :src="image" alt="donut image" class="donut__image">
                <p>Glaze: {{glaze}}</p>
                <p>Status: {{status}}</p>
        </div>
</template>

<style scoped>
.donut__image {
    width: 200px;
    height: 200px;
    object-fit: cover;
}
</style>