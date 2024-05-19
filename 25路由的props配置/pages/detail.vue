<template>
    <ul>
        <li>id: {{ id }}</li>
        <li>title: {{ title }}</li>
    </ul>
</template>

<script>
    export default {
        name: 'detail',
        props: ['id', 'title']
    };
</script>