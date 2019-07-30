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
                <div>检测结果</div>
                <div>  </div>
            </div>
            <div class="worker-box-item2"> 
              <div>产品信息</div>
                <div>  </div>
            </div>
            <div class="worker-box-item3"> 
                        <div>检测操作</div>
                <div>  </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    name:'workplaceindex',
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
     margin-bottom: 0;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    flex-wrap:no-wrap;
}
.worker-box-left-footer dl dt{
    font-size: .12rem;
    align-self:flex-start ;
    flex-grow:1;
    border-right: .15vh #e8e8e8 solid;
    overflow: hidden;
 }
/*****右边****/
.worker-box .worker-box-rigth{
  border-left: 2px #e8e8e8 solid; 
   width: 54%;
   height: 93.4vh;
     display:flex;
     justify-content:space-around;
    align-items:flex-start;
    align-content :flex-end;
    flex-wrap:wrap;
}
.worker-box .worker-box-rigth>div{
 width: 100%;
}
.worker-box .worker-box-rigth .worker-box-item1{
  height: 30%;
  border-bottom: 2px #e8e8e8 solid; 
}
.worker-box .worker-box-rigth .worker-box-item2{
 height: 35%;
  border-bottom: 2px #e8e8e8 solid; 
}
.worker-box .worker-box-rigth .worker-box-item3{
 height: 30%;
}
</style>
