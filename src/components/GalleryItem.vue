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
        const apiUrl = "https://eindbaas-donutello-node.onrender.com/api/v1/donuts/";
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data.donuts)
                donuts.data = data.data.donuts
            })
    });

    //when name is clicked, go to detail page with id connected to name
    const goToDetail = (_id) => {
        //fetch id
        const apiUrl = `https://eindbaas-donutello-node.onrender.com/api/v1/donuts/${_id}`;
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                donuts.data = data.data.donuts
                //go to detail route
                window.location.href = `/details/${_id}`
            })
    }

</script>

<template>
    <div>
        <h1 class="title">Ontdek de <span class="title title--highlight" >donutgallerij</span></h1>
        <div class="galleryitem">
            <div v-for="donut in donuts.data" :key="donut.id" class="galleryitem__donut">
                <img :src="donut.image" alt="donut image" class="galleryitem__image">
                <h2 class="galleryitem__subheading">{{donut.name}}</h2>
                <p class="galleryitem__text">Productie: {{donut.production}}</p>
                <button @click="goToDetail(donut._id)" class="galleryitem__btn btn--strawberry">Bekijk donut</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.title {
    font-weight: bold;
}

.title--highlight {
    color: var(--strawberry);
}

.galleryitem{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    margin-bottom: 3rem;
}

.galleryitem__donut {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
}
.galleryitem__image {
    object-fit: cover;
    width: 350px;
    height: 150px;
    border-top-left-radius: calc(1rem - 1px);
    border-top-right-radius: calc(1rem - 1px);
}

.galleryitem__btn {
    color: var(--lemon);
}

.btn--strawberry {
    font-weight: medium;
    background-color: var(--strawberry);
}

.galleryitem__donut:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
}


.galleryitem__btn:hover {
    background-color: var(--lemon);
    color: var(--strawberry);
    transition: all 0.3s ease-in-out;
}
</style>