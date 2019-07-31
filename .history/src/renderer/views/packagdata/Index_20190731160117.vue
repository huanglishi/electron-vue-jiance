<template>
    <div id="footer-header-box">
        <a-card :bordered="false">
            <a-row :gutter="8">
                <a-col :span="5">
                </a-col>
                <a-col :span="19">
                    <s-table
                    ref="table"
                    size="default"
                    :columns="columns"
                    :data="loadData"
                    :alert="false"
                    :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                    >
                    <span slot="action" slot-scope="text, record">
                        <template v-if="$auth('table.update')">
                        <a @click="handleEdit(record)">编辑</a>
                        <a-divider type="vertical" />
                        </template>
                        <a-dropdown>
                        <a class="ant-dropdown-link">
                            更多 <a-icon type="down" />
                        </a>
                        <a-menu slot="overlay">
                            <a-menu-item>
                            <a href="javascript:;">详情</a>
                            </a-menu-item>
                            <a-menu-item v-if="$auth('table.disable')">
                            <a href="javascript:;">禁用</a>
                            </a-menu-item>
                            <a-menu-item v-if="$auth('table.delete')">
                            <a href="javascript:;">删除</a>
                            </a-menu-item>
                        </a-menu>
                        </a-dropdown>
                    </span>
                    </s-table>
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
