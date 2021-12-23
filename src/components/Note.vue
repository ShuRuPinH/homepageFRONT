<template>
  <div><ul class="list-group">
   <li id="notestitle" class="list-group-item disabled"> Для заметок:</li>

    <li><div style="width: 100%" class="input-group">
    <span is="s" class="input-group-text">{{status}}</span>
    <textarea v-model="note" class="form-control" aria-label="With textarea"></textarea>
    <span id="button" @click="req" class="input-group-text">+</span>
  </div></li>
    <li v-for="(nte) in notes" :key="nte.index">/* {{nte}} */</li> </ul>
  </div>
</template>

<script>
import dataService from "../service/axiosService";

export default {
  name: "Note",
  data() {
    return {
      notes: [],
      note: "Текст заметки...",
      status: ""


    }


  },
 async created(){
        let tmp = await dataService.d_req("",'notes',"GET")  ;
        if (tmp !=null){
          this.notes= tmp;
        }
  },
   methods :{
    async req (){
      if ( this.notes.includes(this.note)) return;
      if (this.note.length>120){
        alert("Заметка слишком длинная. Нужно уложиться в 120 символов");
        return;
      }
      this.notes.push(this.note);
      this.note=  "";
       await dataService.d_req(this.notes,'add',"POST");
      setTimeout(() => { this.note=  "Текст заметки...";this.status="";
      } ,1500)

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