<template>
    <div>
        <h1>人員列表</h1>
        <h2 style="color:red;">count組件的求和:{{sum}}</h2>
        <input placeholder="請輸入人員" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personlist" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
    name: "person",
    data() {
        return {
            name: ""
        };
    },
    methods: {
        add() {
            const personOBJ = { id: nanoid(), name: this.name }
            this.$store.commit("ADDPERSON", personOBJ)
            this.name = ""
        }
    },
    computed: {
        // personlist(){
        //     return this.$store.state.personlist
        // }
        ...mapState(["personlist","sum"])

    }
};
</script>

<style></style>