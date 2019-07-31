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
                <div>  

                </div>
            </div>
            <div class="worker-box-item2"> 
              <div class="worker-box-item-title">产品信息</div>
                <div > 
                      <a-card :bordered="false" :gutter="16">
                            <a-col :span="8">
                                <a-card  :bordered=false>
                                <p>card content</p>
                                </a-card>
                            </a-col>
                            <a-col :span="8">
                                <a-card  :bordered=false>
                                <p>card content</p>
                                </a-card> 
                            </a-col>
                            <a-col :span="8">
                                <a-card  :bordered=false>
                                <p>card content</p>
                                </a-card>
                            </a-col>
                            <a-col :span="8">
                                <a-card  :bordered=false>
                                <p>card content</p>
                                </a-card>
                            </a-col>
                            <a-col :span="8">
                                <a-card  :bordered=false>
                                <p>card content</p>
                                </a-card> 
                            </a-col>
                            <a-col :span="8">
                                <a-card title="x新封面" extra="空间的的"  :bordered=false>
                                <p>card content</p>
                                </a-card>
                            </a-col>
                      </a-card>
                </div>
            </div>
            <div class="worker-box-item3"> 
                 <div class="worker-box-item-title">检测操作</div>
                <div class="worker-box-item3-content"> 
                    <div class="worker-box-item3-content-btn"> 
                        <a-button type="primary">开始扫描</a-button>
                        <a-button type="danger">停止扫描</a-button>
                    </div>
                    <div class="worker-box-item3-content-footer">
                        <span>当前站：主用站</span>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import Vue from 'vue'
import { Button,Card, Col} from 'ant-design-vue';
Vue.use(Button).use(Card).use(Col);
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
/***检测操作&**/
.worker-box-item3-content{
    position: relative;
    width: 100%;
    height:20vh;
}
.worker-box-item3-content-btn{
    width: 100%;
    text-align: center;
     line-height:20vh;
}
.worker-box-item3-content-footer{
    position: absolute;
    bottom: 0;
    right: 10px;
    font-size: .12rem;
}
</style>
