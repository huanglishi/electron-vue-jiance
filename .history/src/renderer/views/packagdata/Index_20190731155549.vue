<template>
    <div id="footer-header-box">
        <a-card :bordered="false">
            <div class="table-page-search-wrapper">
                <a-form layout="inline">
                    <a-row :gutter="48">
                    <a-col :md="8" :sm="24">
                        <a-form-item label="规则编号">
                        <a-input v-model="queryParam.id" placeholder=""/>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="使用状态">
                        <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                            <a-select-option value="0">全部</a-select-option>
                            <a-select-option value="1">关闭</a-select-option>
                            <a-select-option value="2">运行中</a-select-option>
                        </a-select>
                        </a-form-item>
                    </a-col>
                    <template v-if="advanced">
                        <a-col :md="8" :sm="24">
                        <a-form-item label="调用次数">
                            <a-input-number v-model="queryParam.callNo" style="width: 100%"/>
                        </a-form-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                        <a-form-item label="更新日期">
                            <a-date-picker v-model="queryParam.date" style="width: 100%" placeholder="请输入更新日期"/>
                        </a-form-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                        <a-form-item label="使用状态">
                            <a-select v-model="queryParam.useStatus" placeholder="请选择" default-value="0">
                            <a-select-option value="0">全部</a-select-option>
                            <a-select-option value="1">关闭</a-select-option>
                            <a-select-option value="2">运行中</a-select-option>
                            </a-select>
                        </a-form-item>
                        </a-col>
                        <a-col :md="8" :sm="24">
                        <a-form-item label="使用状态">
                            <a-select placeholder="请选择" default-value="0">
                            <a-select-option value="0">全部</a-select-option>
                            <a-select-option value="1">关闭</a-select-option>
                            <a-select-option value="2">运行中</a-select-option>
                            </a-select>
                        </a-form-item>
                        </a-col>
                    </template>
                    </a-row>
                </a-form>
            </div>
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
