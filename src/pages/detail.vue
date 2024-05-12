<template>
    <ul>
        <li>id: {{ $route.query.id }}</li>
        <li>title: {{ $route.query.title }}</li> 
    </ul>
</template>

<script>
    export default {
        name: 'detail',
    };
</script>