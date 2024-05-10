<template>
    <div class="row">
        <!--展示用户列表-->
        <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url">
                <img :src="user.avatar_url" alt="user" style="width:100%">
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
        <!--展示歡迎-->
        <h1 v-show="info.isFirst">welcome to use!</h1>
        <!--展示加載中-->
        <p v-show="info.isLoad">加載中...</p>
        <!--展示錯誤信息-->
        <p v-show="info.errorMsg">{{ info.errorMsg }}</p>
    </div>
</template>

<script>
export default {
    name: 'list',
    data() {
        return {
            info: {
                users: [],
                isFirst: true,
                isLoad: false,
                errorMsg: ''
            }

        };
    },
    mounted() {
        this.$bus.$on('userlist', (usersOBJ) => {
            //ES6语法，将usersOBJ对象中的属性拷貝到info对象中
            this.info = {...this.info, ...usersOBJ}
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