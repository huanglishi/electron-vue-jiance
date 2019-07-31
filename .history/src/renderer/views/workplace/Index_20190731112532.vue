<template>
   <div class="worker-box">
        <!--左边图区-->
        <div class="worker-box-left"> 
            <div class="worker-box-left-img"> 
                 <img :src="workplaceUrl" />
            </div>
            <div class="worker-box-left-footer"> 
                <dl>
                    <dt>更新时间：<span class="on">2019-7-30 23:00</span></dt>
                    <dt>图像状态：<span class="on">生成完成</span></dt>
                 </dl>
            </div>
        </div>
        <!--右边功能区-->
        <div class="worker-box-rigth"> 
            <div class="worker-box-item1"> 
                <div class="worker-box-item-title">检测结果</div>
                <div class="worker-box-item1-info">
                    <a-card :bordered="false" :gutter="16">  
                        <a-row align="middle">
                            <a-col :span="12">点1 344483.4</a-col>
                            <a-col :span="12">0.3343</a-col>
                        </a-row>
                        <a-row>
                            <a-col :span="12">点2 7774.3</a-col>
                            <a-col :span="12">0.3343</a-col>
                        </a-row>
                        <a-row>
                            <a-col :span="6"></a-col>
                            <a-col :span="6">高差 -0.3343</a-col>
                            <a-col :span="6"></a-col>
                        </a-row>
                        <a-row>
                            <p class="off"> 说明：长计算，在....</p>
                        </a-row>
                        <a-row>
                            <a-col :span="4"></a-col>
                            <a-col :span="4"><a-button>开始</a-button></a-col>
                            <a-col :span="4"></a-col>
                            <a-col :span="4"></a-col>
                        </a-row>
                        <a-row :gutter="16" class="worker-box-data1">
                            <a-col :span="8">
                                <a-card title="收到检测数据:" :bordered=false>
                                 <p >39494</p>
                                </a-card>
                            </a-col>
                            <a-col :span="8">
                                <a-card title="用法:" :bordered=false>
                                 <p>content</p>
                                </a-card> 
                            </a-col>
                            <a-col :span="8">
                                <a-card title="其他:" :bordered=false>
                                <p>333,44</p>
                                </a-card>   
                            </a-col>
                            </a-row>
                    </a-card>
                </div>
            </div>
            <div class="worker-box-item2"> 
              <div class="worker-box-item-title">产品信息</div>
                <div class="worker-box-item2-info"> 
                      <a-card :bordered="false" :gutter="16">
                            <a-col :span="12" >
                                <a-card  :bordered=false>
                                  <div>产品编号：H2101</div>
                                </a-card>
                            </a-col>
                            <a-col :span="12" >
                                <a-card  :bordered=false>
                                  <div>产品类型：包装纸</div>
                                </a-card>
                            </a-col>
                            <a-col :span="12" >
                                <a-card  :bordered=false>
                                  <div>检查结果：结果处理中</div>
                                </a-card>
                            </a-col>
                            <a-col :span="12" >
                               <a-card  :bordered=false>
                                  <div>离线检测来源：E:\build</div>
                                </a-card>
                            </a-col>
                            <a-col :span="12" >
                               <a-card  :bordered=false>
                                  <div>产品型号：T32</div>
                                </a-card>
                            </a-col>
                      </a-card>
                </div>
            </div>
            <div class="worker-box-item3"> 
                 <div class="worker-box-item-title">检测操作</div>
                <div class="worker-box-item3-info"> 
                    <div class="worker-box-item3-info-btn"> 
                        <a-button type="primary">开始扫描</a-button>
                        <a-button type="danger">停止扫描</a-button>
                    </div>
                    <div class="worker-box-item3-info-footer">
                        <span>当前站：主用站</span>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import Vue from 'vue'
import { Button,Card, Col,Row} from 'ant-design-vue';
Vue.use(Button).use(Card).use(Col).use(Row);
export default {
    name:'workplaceindex',
    components: {
     },
    data () {
        // 注意 路径的起始是 `static/`
        return { workplaceUrl: 'static/images/workplace_index.png' }
    }
}
</script>

<style scoped>
.worker-box{
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:no-wrap;
    height: 93.7vh;
    overflow: auto;
    /* overflow-y:scroll */
}
.worker-box .worker-box-left{
    width: 46%;
    height: 93.7vh;
}
.worker-box .worker-box-left .worker-box-left-img{
     height: 83.7vh;
     display:flex;
	align-items:center; 
	justify-content:center;
}
.worker-box .worker-box-left .worker-box-left-img img{
    width:auto;height:auto;max-width:100%;max-height:100%;
}
.worker-box .worker-box-left .worker-box-left-footer{
    height: 10vh;
}
.worker-box-left-footer dl{
     height: 3vh;
     line-height: 3vh;
     margin-bottom: 0;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    flex-wrap:no-wrap;
    border-bottom: .15vh #e8e8e8 solid;
}
.worker-box-left-footer dl dt{
    font-size: .12rem;
    flex:1;
    flex-grow:1;
    border-right: .15vh #e8e8e8 solid;
    overflow: hidden;
    padding-left: 8px;
 }
.worker-box-left-footer .on{
    color: #1890ff;
 }
/*****右边****/
.worker-box .worker-box-rigth{
  border-left: 2px #e8e8e8 solid; 
   width: 54%;
   height: 93.7vh;
     display:flex;
     justify-content:space-around;
    align-items:flex-start;
    align-content :flex-end;
    flex-wrap:wrap;
}
.worker-box .worker-box-rigth>div{
 width: 100%;
}
/**功能分块****/
.worker-box .worker-box-rigth .worker-box-item1{
  height: 35vh;
  border-bottom: 2px #e8e8e8 solid; 
}
.worker-box .worker-box-rigth .worker-box-item2{
  height:  35vh;
  border-bottom: 2px #e8e8e8 solid; 
}
.worker-box .worker-box-rigth .worker-box-item3{
 height:  23.7vh;
}
.worker-box-item-title{
    height:3.7vh;
}
/**1检测结果***/
.worker-box-item1-info{
    height: 31.3vh;
    overflow: auto;
}
/**2检测结果***/
.worker-box-item2-info{
    height: 31.3vh;
    overflow: auto;
}
/***3检测操作&**/
.worker-box-item3-info{
    position: relative;
    width: 100%;
    height:20vh;
    overflow: auto;
}
.worker-box-item3-info-btn{
    width: 100%;
    text-align: center;
     line-height:20vh;
}
.worker-box-item3-info-footer{
    position: absolute;
    bottom: 0;
    right: 10px;
    font-size: .12rem;
}
/***card**/
.worker-box-item2-info >>>.ant-card-head {
   border-bottom: 0;
}
.worker-box-item2-info >>>.ant-card-body{
    padding: 8px;
}
.worker-box-item1-info >>>.ant-card-body{
    padding: 8px;
}
.worker-box-item1-info >>>.ant-card-head {
   border-bottom: 0;
}
.off{
    color: #f5222d;
}
.worker-box-data1 p{
    text-align: center;
}
</style>
