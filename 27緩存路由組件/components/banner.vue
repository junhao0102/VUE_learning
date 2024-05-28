<template>
    <div class="row">
        <div>
            <div class="page-header">
                <h2>Vue Router Demo</h2>
                <button @click = "back">後退</button>
                <button @click = "forward">前進</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'about',
        methods: {
            back() {
                this.$router.go(-1);
            },
            forward() {
                this.$router.go(1);
            }
        }
    };
</script>