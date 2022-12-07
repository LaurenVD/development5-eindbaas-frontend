<script setup>
    // detail donut page by id
    import { ref, onMounted, reactive } from 'vue'
    import { useRoute } from 'vue-router'
    let donut = reactive({data: []});
    let name = ref('');
    let id = ref("");
    let image = ref("");
    let glaze = ref("");
    let sprinkles = ref("");
    let status = ref("");
    let route = useRoute()

    // only allow user to see page if they are logged in
    if (!localStorage.getItem('token')) {
        window.location.href = '/login'
    }

    //show details from donut with id
    onMounted(() => {
        //get id from url
        const id = route.params.id;
        console.log(id)
        //fetch data from api
        const apiUrl = `https://eindbaas-donutello-node.onrender.com/api/v1/donuts/${id}`;
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }})
            .then(res => res.json())
            .then(data => {
                console.log(data)
                donut.data = data.data.donut
                name.value = data.data.donut.name
                image.value = data.data.donut.image
                glaze.value = data.data.donut.glaze
                sprinkles.value = data.data.donut.sprinkles
                status.value = data.data.donut.status
            })
    });

    //if clicked on changeStatus, change status to value of button
    const changeStatus = () => {
        //get id from url
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        //fetch data from api
        const apiUrl = `https://eindbaas-donutello-node.onrender.com/api/v1/donuts/${id}`;
        fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                //change status to value of button
                status.value = data.status
            })
            //reload page quarter of a second after status is changed
    }

    //delete donut
    const deleteDonut = () => {
        //get id from url
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        //fetch data from api
        const apiUrl = `https://eindbaas-donutello-node.onrender.com/api/v1/donuts/${id}`;
        fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                //go to gallery page
                window.location.href = '/gallery.html'
            })
    }

</script>

<template>
        <div class="donut">
                <h2>{{name}}</h2>
                <img :src="image" alt="donut image" class="donut__image">
                <p class="donut__text">Glaze: {{glaze}}</p>
                <p class="donut__text">Sprinkles: {{sprinkles}}</p>
                <p class="donut__text">Status: {{status}}</p>
                <div class="donut__btnContainer">
                <button @click="changeStatus('In productie')" class="btn btn--strawberry">In Productie</button>
                <button @click="changeStatus('Gereed')" class="btn btn--strawberry">Gereed</button>
                <button @click="deleteDonut" class="btn btn--lemon">Delete</button>
                 </div>
        </div>
</template>

<style scoped>
.donut {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
}

.donut__text {
    font-weight: normal;
}

.donut__image {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.btn {
    color: var(--lemon);
    margin: 1rem;
}

.btn--strawberry {
    font-weight: medium;
    background-color: var(--strawberry);
}

.btn--lemon {
    font-weight: medium;
    color: var(--strawberry);
    background-color: var(--lemon);
}
</style>