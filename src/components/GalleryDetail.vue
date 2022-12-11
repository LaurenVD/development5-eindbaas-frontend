<script setup>
    // detail donut page by id
    import { ref, onMounted, reactive } from 'vue'
    import { useRoute } from 'vue-router'
    let donut = reactive({data: []});
    let name = ref('');
    let id = ref("");
    let email = ref("");
    let image = ref("");
    let glaze = ref("");
    let sprinkles = ref("");
    let status = ref("");
    let route = useRoute()
    let production = ref("")

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
        const apiUrl = `https://donutello-backend.onrender.com/api/v1/donuts/${id}`;
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
                email.value = data.data.donut.email
                image.value = data.data.donut.image
                glaze.value = data.data.donut.glaze
                sprinkles.value = data.data.donut.sprinkles
                status.value = data.data.donut.status
                production.value = data.data.donut.production
            })
    });

    //if clicked on changeStatus, change status to value of button
        //if clicked on changeStatus, change status to value of button
    const changeStatus = (production) => {
        //get id from url
        const id = route.params.id;
        console.log(id)
        //fetch data from api
        const apiUrl = `https://donutello-backend.onrender.com/api/v1/donuts/${id}`;
        fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                production: production
            })
        })
            .then(res => res.json())
            .then(data => {
                donut.data = data.data.donut
                //show new production status
                console.log(data.data.donut.production)
            })
    }



    //delete donut
    const deleteDonut = () => {
        //get id from url
        const id = route.params.id;
        console.log(id)
        //fetch data from api
        const apiUrl = `https://donutello-backend.onrender.com/api/v1/donuts/${id}`;
        fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
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
                <h3>{{email}}</h3>
                <img :src="image" alt="donut image" class="donut__image">
                <p class="donut__text">Glaze: {{glaze}}</p>
                <p class="donut__text">Sprinkles: {{sprinkles}}</p>
                <p class="donut__text">Productie: {{production}}</p>
                <div class="donut__btnContainer">
                <select v-model="production" @change="changeStatus(production)">
                    <option value="In productie">In productie</option>
                    <option value="Gereed">Gereed</option>
                </select>
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