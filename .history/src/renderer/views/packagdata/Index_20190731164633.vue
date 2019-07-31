<template>
    <div id="footer-header-box">
        <a-card :bordered="false">
            <a-row :gutter="8" >
                <a-col :span="5">
                    <div style="margin-bottom: 16px">
                        <a-button type="primary" icon="plus" size="small">添加分类</a-button>
                        <a-button icon="form" size="small" @click="openEWind">管理分类</a-button>
                    </div>
                    <a-tree
                        showLine
                        :defaultExpandedKeys="['0-0-0']"
                        @select="onSelect"
                    >
                        <a-tree-node key="0-0">
                        <span slot="title" style="color: #1890ff">分类</span>
                        <a-tree-node title="parent 1-0" key="0-0-0">
                            <a-tree-node title="leaf" key="0-0-0-0" />
                            <a-tree-node title="leaf" key="0-0-0-1" />
                            <a-tree-node title="leaf" key="0-0-0-2" />
                        </a-tree-node>
                        <a-tree-node title="parent 1-1" key="0-0-1">
                            <a-tree-node title="leaf" key="0-0-1-0" />
                        </a-tree-node>
                        <a-tree-node title="parent 1-2" key="0-0-2">
                            <a-tree-node title="leaf" key="0-0-2-0" />
                            <a-tree-node title="leaf" key="0-0-2-1" />
                        </a-tree-node>
                        </a-tree-node>
                    </a-tree>
                </a-col>
                <a-col :span="19">
                        <div style="margin-bottom: 16px">
                            <a-button type="primary" icon="plus">添加数据</a-button>
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
                        <a-table :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" :columns="columns" :dataSource="data" :pagination="pagination" />
                </a-col>
             </a-row>
        </a-card>
    </div>
</template>

<script>
import Vue from 'vue'
import { Button,Card, Col,Row,Table,Tree} from 'ant-design-vue';
Vue.use(Button).use(Card).use(Col).use(Row).use(Table).use(Tree);
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
            pagination: {
                onChange: (page) => {
                    this.pagination.current=page
                },
                showSizeChanger: true, 
                showQuickJumper: true,
                pageSize: 5, 
                total: 0,
                current:1,
            }
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
    },
    //tree
    onSelect (selectedKeys, info) {
      console.log('selected', selectedKeys, info)
    },
    //打开新窗口--manerClass
    openEWind(){
        let win = this.$Win.createWin({
            width: 800,
            height: 600,   
            windowConfig: {
                router: '/index',
                name: 'index', // 窗口名字，如果该name窗口存在会直接显示，不会重新创建    
                customAnimation: {
                fromPosition: {x: 0, y: 0}, // 窗口动画起点
                time: 1000, // 动画时间
                graphs: 'Quartic.InOut' // 动画过度曲线
                }, 
                data: {index: 1}
            }
            })
    }
  },
}
</script>

<style scoped>
  
</style>
