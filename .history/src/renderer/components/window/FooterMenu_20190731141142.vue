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
            <dt  style="width:120px;">扫描进度：<span style="width:180px;">
             
      10% </span></dt>
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
</style>
<style lang="scss" scoped>

  .description-list {

    .title {
      color: rgba(0,0,0,.85);
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 16px;
    }

    /deep/ .term {
      color: rgba(0,0,0,.85);
      display: table-cell;
      line-height: 20px;
      margin-right: 8px;
      padding-bottom: 16px;
      white-space: nowrap;

      &:not(:empty):after {
        content: ":";
        margin: 0 8px 0 2px;
        position: relative;
        top: -.5px;
      }
    }

    /deep/ .content {
      color: rgba(0,0,0,.65);
      display: table-cell;
      min-height: 22px;
      line-height: 22px;
      padding-bottom: 16px;
      width: 100%;
      &:empty {
        content: ' ';
        height: 38px;
        padding-bottom: 16px;
      }
    }

    &.small {

      .title {
        font-size: 14px;
        color: rgba(0, 0, 0, .65);
        font-weight: normal;
        margin-bottom: 12px;
      }
      /deep/ .term, .content {
        padding-bottom: 8px;
      }
    }

    &.large {
      /deep/ .term, .content {
        padding-bottom: 16px;
      }

      .title {
        font-size: 16px;
      }
    }

    &.vertical {
      .term {
        padding-bottom: 8px;
      }
      /deep/ .term, .content {
        display: block;
      }
    }
  }
</style>
