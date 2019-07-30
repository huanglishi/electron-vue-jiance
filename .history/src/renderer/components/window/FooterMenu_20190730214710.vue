<template>
    <div class="app-footer">
       <dl>
            <dt ></dt>
            <dt>用户管理</dt>
            <dt>通信设置</dt>
            <dt>模板设置</dt>
            <dt > </dt>
            <dt >帮助</dt>
            <dt >帮助</dt>
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
     align-self:flex-start ;
    flex-grow:1;
    border-right: .1vh #e8e8e8 solid;
 }
.app-footer dl:last-child{
    border-right: 0;
}
</style>
