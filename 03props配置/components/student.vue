<template>
    <div>
      <h1>{{msg}}</h1>
        <h2>學生名稱:{{name}}</h2>
        <h2>學生性別:{{sex}}</h2>
        <h2>學生年齡:{{btnAge}}</h2>
        <button @click="btnAge++">年齡+1</button>
    </div>
</template>
  
<script>
  export default {
    name: 'School',
    data(){
      return {
        msg: '學生資料',
        btnAge:this.age
      }
    },
  //簡單接收
   props:['name','age','sex'] 

  //限制類型
  //   props:{
  //     name:String,
  //     age:Number,
  //     sex:String
  // }

  //限制類型並設定預設值
    // props:{
    //   name:{
    //     type:String,
    //     required:true
    //   },
    //   age:{
    //     type:Number,
    //     default:0
    //   },
    //   sex:{
    //     type:String,
    //     default:'男'
    //   }
    // }
  }
  
</script>

  