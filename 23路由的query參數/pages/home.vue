<template>
    <div>
        <router-link to="/home/message">Message</router-link>
        <router-link to="/home/news">News</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'home',
    };
</script>