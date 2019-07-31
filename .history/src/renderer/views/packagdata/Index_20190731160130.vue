<template>
    <div id="footer-header-box">
        <a-card :bordered="false">
            <a-row :gutter="8">
                <a-col :span="5">

                </a-col>
                <a-col :span="19">
                </a-col>
                </a-row>
        </a-card>
    </div>
</template>

<script>
import Vue from 'vue'
import { Button,Card, Col,Row,Form} from 'ant-design-vue';
Vue.use(Button).use(Card).use(Col).use(Row).use(Form);
export default {
   name:"packagdata",
   components:{

   },
   data(){
       return{
            advanced: false,
       }
   }
}
</script>

<style scoped>
  
</style>
