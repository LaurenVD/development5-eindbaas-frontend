<script setup>
    import { ref, onMounted, reactive } from 'vue'
    let donuts = reactive({data: []});
    let name = reactive({data: []});
    let dough = ref('');
    let imageSrc = ref("");

    //fetch name and image from https://donutello-backend.onrender.com/api/v1/donuts
    // onMounted
    onMounted(() => {
        const apiUrl = "https://donutello-backend.onrender.com/api/v1/donuts/";
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data.data.donuts)
                donuts.data = data.data.donuts
            })
    });

</script>

<template>
    <div>
        <h1>The Donuts!</h1>
        <div>
            <div v-for="donut in donuts.data" :key="donut.id">
                <h2>{{donut.name}}</h2>
                <img :src="donut.image" alt="donut image">
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>