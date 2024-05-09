<template>
    <div class="row">
        <div class="card" v-for="user in users" :key="user.login">
            <a :href="user.html_url">
                <img :src="user.avatar_url" alt="user" style="width:100%">
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list',
        data() {
            return {
                users: [],
            };
        },
        mounted() {
            this.$bus.$on('userlist', (users) => {
                this.users = users;
            })
        },
        beforeDestroy() {
            this.$bus.$off('userlist');
        }
    };
</script>


<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 200px;
        height: 200px;
        margin: 30px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .card img {
        width: 100%;
        height: 100%;
    }

    .card-text {
        text-align: center;
    }

    .row {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
    }
</style>