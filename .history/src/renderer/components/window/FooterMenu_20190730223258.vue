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
            <dt  style="width:180px;">扫描进度：<span style="width:180px;">10% </span></dt>
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
</style>
