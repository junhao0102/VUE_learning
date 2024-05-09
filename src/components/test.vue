<template>
    <div>
        <button @click="isShow = !isShow">顯示/隱藏</button>
        <transition name="hello">
            <h1 v-show="isShow" >你好啊</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'test',
    data() {
        return {
            isShow: true
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: orange;
}

.hello-enter-active {
    animation: ani 1s;
}

.hello-leave-active {
    animation: ani 1s reverse;
}

@keyframes ani {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0px);
    }
}
</style>