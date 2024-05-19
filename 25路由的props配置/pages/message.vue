<template>
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <router-link :to="{
                name: 'detail',     //params必須用name來指定,不能用path
                params: {
                  id: msg.id,
                  title: msg.title
                }   
              }">
                    {{ msg.title }}
                </router-link>
            </li>
        </ul>
        <div class='view'>
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'message',
        data() {
            return {
                messageList: [
                    { id: 1, title: 'message001' },
                    { id: 2, title: 'message002' },
                    { id: 3, title: 'message003' },
                ]
            }
        }
    };
</script>
<style scoped>
    .view {
        margin-top: 5px;
        padding-top: 10px;
        margin-left: 50px;

    }
</style>