<template>
    <ul>
        <li>id: {{ $route.params.id }}</li>
        <li>title: {{ $route.params.title }}</li> 
    </ul>
</template>

<script>
    export default {
        name: 'detail',
    };
</script>