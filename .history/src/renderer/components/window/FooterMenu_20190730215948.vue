<template>
    <div class="app-footer">
       <dl>
            <dt>TCP服务：<sapn class="on">已启动</sapn></dt>
            <dt>Robot连接状态：<sapn class="off">未连接</sapn></dt>
            <dt>激光头连接方式：USB</dt>
            <dt>激光头连接状态：<sapn class="off">未连接</sapn></dt>
            <dt>激光头准备状态：<sapn class="off">未准备</sapn></dt>
            <dt>扫描状态：<sapn class="off">未准备</sapn></dt>
            <dt >服务通信状态：<sapn class="off">未连接</sapn></dt>
            <dt >扫描进度：<sapn ></sapn></dt>
        </dl>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
 .app-footer{
     height: 2vh;
     line-height: 2vh;
     border-top: .1vh #e8e8e8 solid;
     width: 100%;
 }
 .app-footer dl{
    margin-bottom: 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:no-wrap;
 }
  .app-footer dl dt{
      font-size: .12rem;
     align-self:flex-start ;
    flex-grow:1;
    border-right: .1vh #e8e8e8 solid;
 }
.app-footer dl:last-child{
    border-right: 0;
}
</style>
