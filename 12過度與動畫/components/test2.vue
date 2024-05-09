<template>
    <div>
        <button @click="isShow = !isShow">顯示/隱藏</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">你好啊</h1>
            <h1 v-show="isShow" key="2">你好啊2</h1>
        </transition-group>
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

.hello-enter-active,
.hello-leave-active {
    transition: transform 1s;
}

/* 進入的起點,離開的終點  */
.hello-enter,
.hello-leave-to {
    transform: translateX(-100%);
}

/* 進入的終點 ,離開的起點*/
.hello-enter-to,
.hello-leave {
    transform: translateX(0px);
}
</style>