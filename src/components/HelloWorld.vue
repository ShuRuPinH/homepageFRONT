<template>
  <div style="margin-left:auto; margin-right: auto; width: 90%" class="hello">

    <div class="container-fluid">

      <div class="row">
        <div class="col-md-4">
                   <ul class="list-group">
            <li id="listtitle" class="list-group-item disabled" aria-disabled="true">Завершенные проекты</li>
            <li class="list-group-item"><a href="https://timet.mircloud.ru/" target="_blank">Сервис отложенных СМС-напоминаний</a></li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul><br>
        </div>
        <div class="col-md-4"><SMS></SMS>
        </div>
        <div class="col-md-4"><Note></Note>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Note from "./Note";
import SMS from "./SMS";

export default {
  name: 'HelloWorld',
  components:{
    Note,
    SMS
  },
  props: {
    msg: String
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#listtitle{
  font-size: large;
  font-weight: bold;
  background-color: #bbd9bf
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
