<template>
    <div>
        <router-link  to="/home/message">Message</router-link>
        <router-link  to="/home/news">News</router-link>
        <keep-alive include="news">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'home',
    };
</script>