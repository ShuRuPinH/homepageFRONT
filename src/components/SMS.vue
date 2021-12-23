<template>
  <ul class="list-group">
    <li id="smstitle" class="list-group-item disabled" aria-disabled="true">Срочная связь:</li>
    <li class="list-group-item"><textarea v-model="msg" class="form-control" style="width: 100%; height: auto"></textarea></li>

    <li id="but" @click="sms" class="list-group-item">ОТПРАВИТЬ</li>
  </ul>
</template>

<script>
import dataService from "../service/axiosService";

export default {
  name: "SMS",
  data(){return{
    msg: "Текст сообщения"}
  },
   methods:{
    async sms(){
      if (this.msg== "Текст сообщения") return;
      if (this.msg.length>58){
        alert("Сообщение слишком длинное. Нужно уложиться в 58 символов");
        return;
      }

     this.status(await dataService.d_req(this.msg,"sms","POST"));

    },

     status(rez){
          let head =  document.getElementById("smstitle");

        if (rez=="true"){
         head.style.backgroundColor = "#9be3c2"
          head.innerText="Сообщение успешно отправлено"
        }
        else {
          head.style.backgroundColor = "#e3b89b"
          head.innerText="Сообщение не отправлено"
        }
       setTimeout(() => {  head.style.backgroundColor = "#67c8a9";
         head.innerText="Срочная связь:"} ,1500);
     }
  }

}
</script>

<style scoped>
#smstitle{
  font-size: large;
  font-weight: bold;
  background-color: #67c8a9
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
#but{
  background-color: #e9ecef;
}

#but:hover{
  background-color: #08da20;
}
#but:active{
  background-color: #03540c;
}
</style>