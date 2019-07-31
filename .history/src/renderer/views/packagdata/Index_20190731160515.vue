<template>
    <div id="footer-header-box">
        <a-card :bordered="false">
            <a-row :gutter="8">
                <a-col :span="5">

                </a-col>
                <a-col :span="19">
                        <div style="margin-bottom: 16px">
                        <a-button
                            type="primary"
                            @click="start"
                            :disabled="!hasSelected"
                            :loading="loading"
                        >
                            Reload
                        </a-button>
                        <span style="margin-left: 8px">
                            <template v-if="hasSelected">
                            {{`Selected ${selectedRowKeys.length} items`}}
                            </template>
                        </span>
                        </div>
                        <a-table :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" :columns="columns" :dataSource="data" />
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
