<script setup>
    import { ref, onMounted, reactive } from 'vue'
    let donuts = reactive({data: []});
    let name = reactive({data: []});
    //id
    let id = ref("");
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

    //when name is clicked, go to detail page with id connected to name
    const goToDetail = (_id) => {
        //fetch id
        const apiUrl = `https://donutello-backend.onrender.com/api/v1/donuts/${_id}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                donuts.data = data.data.donuts
                //go to detail page with id
                window.location.href = `/detail.html?id=${_id}`
            })
    }

</script>

<template>
    <div>
        <h1>The Donuts!</h1>
        <div class="col">
            <div v-for="donut in donuts.data" :key="donut.id" class="">
                <a @click="goToDetail(donut._id)"><h2>{{donut.name}}</h2></a>
                <img :src="donut.image" alt="donut image" class="donut__image">
            </div>
        </div>
    </div>
</template>

<style scoped>
.donut__image {
    width: 200px;
    height: 200px;
    object-fit: cover;
}
</style>