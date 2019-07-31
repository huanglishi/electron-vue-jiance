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
import { Button,Card, Col,Row,Fable} from 'ant-design-vue';
Vue.use(Button).use(Card).use(Col).use(Row).use(Fable);
const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default {
   name:"packagdata",
   components:{

   },
   data(){
       return{
         data,
        columns,
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
       }
   },
    computed: {
        hasSelected() {
        return this.selectedRowKeys.length > 0
        }
  },
  methods: {
    start () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },
    onSelectChange (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys
    }
  },
}
</script>

<style scoped>
  
</style>
