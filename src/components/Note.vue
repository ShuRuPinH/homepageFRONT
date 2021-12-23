<template>
  <div><ul class="list-group">
   <li id="notestitle" class="list-group-item disabled">{{status}} </li>

    <li><div style="width: 100%" class="input-group">

    <textarea v-model="note" class="form-control" aria-label="With textarea"></textarea>
    <span id="button" @click="req" class="input-group-text">+</span>
  </div></li>
    <li v-for="(nte) in notes" :key="nte.index">/* {{nte}} */</li> </ul></div>
</template>

<script>
import dataService from "../service/axiosService";

export default {
  name: "Note",
  data() {
    return {
      notes: [],
      note: "Текст заметки...",
      status: "Для заметок:"


    }


  },
  created(){
   this.init();
   setInterval(this.init, 4000);
  },
   methods :{
    async req (){
      this.note=this.note.trim();

      if ( this.notes.includes(this.note) || this.note.length ==0) return;
      if (this.note.length>120){
        alert("Заметка слишком длинная. Нужно уложиться в 120 символов");
        return;
      }
      this.notes.push(this.note);
      this.note=  "";

      let temp =await dataService.d_req(this.notes,'add',"POST");
      this.status= temp ==null? "Ошибка добавления заметки" : temp;
      setTimeout(() => { this.note=  "Текст заметки...";this.status="Для заметок:";
      } ,1500)

    },
    async init(){
      let tmp = await dataService.d_req("",'notes',"GET")  ;
      if (tmp !=null){
        this.notes= tmp;
      }
    }


   }


}
</script>

<style scoped>


#button:hover{
  background-color: #08da20;
}
#button:active{
  background-color: #03540c;
}

#notestitle{
  font-size: large;

  font-weight: bold;

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
</style>