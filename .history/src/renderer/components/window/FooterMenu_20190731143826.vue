<template>
    <div class="app-footer">
       <dl>
            <dt>TCP服务：<span class="on">已启动</span></dt>
            <dt>Robot连接状态：<span class="off">未连接</span></dt>
            <dt>激光头连接方式：USB</dt>
            <dt>激光头连接状态：<span class="off">未连接</span></dt>
            <dt>激光头准备状态：<span class="off">未准备</span></dt>
            <dt>扫描状态：<span class="off">未准备</span></dt>
            <dt >服务通信状态：<span class="off">未连接</span></dt>
            <dt  style="width:120px;" class="progress-dt">
               <div class="progress-dt-title">扫描进度：</div>
              <div class="progress-bar blue stripes">
                <span style="width: 60%">60%</span>
            </div>
         </dt>
        </dl>
    </div>
</template>
<script>
export default {
   name:"FooterMenu"
}
</script>
<style scoped>
 .app-footer{
     height: 2vh;
     line-height: 2vh;
     border-top: .15vh #e8e8e8 solid;
     width: 100%;
 }
 .app-footer dl{
    margin-bottom: 0;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    flex-wrap:no-wrap;
 }
  .app-footer dl dt{
      font-size: .12rem;
    align-self:flex-start ;
    flex-grow:1;
    border-right: .15vh #e8e8e8 solid;
    overflow: hidden;
 }
.app-footer dl:last-child{
    border-right: 0;
}
.app-footer .on{
    color: #1890ff;
 }
 .app-footer .off{
  color: #f5222d;
 }
 /***进度条***/
 .progress-dt{
   display:flex;
    justify-content:space-between;
    align-items:flex-start;
    flex-wrap:no-wrap;
 }
  .progress-dt>div{
     align-self:flex-start ;
    flex-grow:1;
  }
  .progress-dt .progress-dt-title{
       width: 20px;
  }
 .progress-bar {
    margin-top: 1px;
    align-items: center;
    background-color: #e8e8e8;
    height: 15px;
    line-height: 14px;
    padding: 1px;
    width: 100%;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-box-shadow: 0 1px 5px #e8e8e8 inset, 0 1px 0 #e8e8e8;
    -webkit-box-shadow: 0 1px 5px #e8e8e8 inset, 0 1px 0 #e8e8e8;
    box-shadow: 0 1px 5px #e8e8e8 inset, 0 1px 0 #e8e8e8;           
}
.progress-bar span {
    display: inline-block;
    height: 100%;
    color: #ffffff;
    background-color: #777;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
    -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
    box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
    -webkit-transition: width .4s ease-in-out;
    -moz-transition: width .4s ease-in-out;
    -ms-transition: width .4s ease-in-out;
    -o-transition: width .4s ease-in-out;
    transition: width .4s ease-in-out;		
}

.blue span {
    background-color: #34c2e3;   
}
.stripes span {
    -webkit-background-size: 30px 30px;
    -moz-background-size: 30px 30px;
    background-size: 30px 30px;			
    background-image: -webkit-gradient(linear, left top, right bottom,
                        color-stop(.25, rgba(255, 255, 255, .15)), color-stop(.25, transparent),
                        color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .15)),
                        color-stop(.75, rgba(255, 255, 255, .15)), color-stop(.75, transparent),
                        to(transparent));
    background-image: -webkit-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
                        transparent 75%, transparent);
    background-image: -moz-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
                        transparent 75%, transparent);
    background-image: -ms-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
                        transparent 75%, transparent);
    background-image: -o-linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
                        transparent 75%, transparent);
    background-image: linear-gradient(135deg, rgba(255, 255, 255, .15) 25%, transparent 25%,
                        transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,
                        transparent 75%, transparent);            
    -webkit-animation: animate-stripes 3s linear infinite;
    -moz-animation: animate-stripes 3s linear infinite;       		
}
@-webkit-keyframes animate-stripes { 
    0% {background-position: 0 0;} 100% {background-position: 60px 0;}
}

@-moz-keyframes animate-stripes {
    0% {background-position: 0 0;} 100% {background-position: 60px 0;}
}
</style>
