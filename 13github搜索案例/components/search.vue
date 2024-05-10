<template>
    <div class ="srh">
        <h1>Search github user</h1>
        <input placeholder="enter the name" v-model="keyword"></input>
        <button @click="btn">search</button>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'search',
        data() {
            return {
                keyword: ''
            };
        },
        methods: {
            btn() {
                //請求前更新數據
                this.$bus.$emit('userlist',{isFirst:false,isLoad:true,errorMsg:'',users:[]});
                axios.get('https://api.github.com/search/users?q=' + this.keyword).then(
                    (response) => {
                        console.log("請求成功")
                        //請求成功更新數據
                        this.$bus.$emit('userlist',{isLoad:false,errorMsg:'',users:response.data.items});
                    },
                    (error) => {
                        console.log(error.message);     
                        //請求失敗更新數據
                        this.$bus.$emit('userlist',{isLoad:false,errorMsg:error.message,users:[]});
                    }
                )
            }
        }
    };
</script>
<style scoped>
    .srh {
        text-align: center;
        background-color: antiquewhite;
        margin: 0px;
        padding: 50px 0 0 0;
        border: none;
        position: relative;
        top:-20px;
        height:200px ;
    }
    .srh input{
        width: 300px;
        height: 30px;
        margin: 10px;

    }
    .srh button{
        width: 50px;
        height: 35px;
        margin: 0px;
        padding: auto;
    }
    
    
</style>