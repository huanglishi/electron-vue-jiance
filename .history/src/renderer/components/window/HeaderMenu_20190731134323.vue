
<template>
  <div class="app-header">
     <div class="header-fex">
        <dl>
          <router-link tag="dt" :to="{ name: 'workplace'}" :class="{'active':($route.name=='workplace')}">
                检测台
          </router-link>
        <dt>用户管理</dt>
        <dt>通信设置</dt>
         <router-link tag="dt" :to="{ name: 'workplace'}" :class="{'active':($route.name=='workplace')}">
                模板设置
          </router-link>
        <dt class="help">帮助</dt>
        </dl>
      </div>
      <div class="header-fex-title">
          烟包全幅面精密测量系统
      </div>
      <div class="header-btn">
          <svg class="icon" aria-hidden="true" @click="minwin">
             <use xlink:href="#icon-zuixiaohua"></use>
          </svg>
          <svg class="icon" aria-hidden="true" @click="maxresetwin">
             <use :xlink:href="maxreset"></use>
          </svg>
          <svg class="icon close" aria-hidden="true" @click="clasewin">
             <use xlink:href="#icon-guanbi"></use>
          </svg>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      maxreset:"#icon-zuidahua"
    }
  },
  methods: {
    minwin(){
     this.$electron.ipcRenderer.send('min');
    },
    maxresetwin(){
         this.$electron.ipcRenderer.send('max');
         if(this.maxreset=='#icon-zuidahua'){
           this.maxreset='#icon-zuidahua1'
         }else{
           this.maxreset='#icon-zuidahua'
         }
    },
   clasewin(){//关闭窗口
      this.$electron.ipcRenderer.send('close');
   }
  },
}
</script>
<style>
.app-header{
  border-bottom: .15vh #bbc0c1 solid;
  height:3.5vh;
  line-height: 3.5vh;
  background:#eaeeef;
  -webkit-app-region: drag;

  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:no-wrap;
}
.app-header>div{
  align-self:flex-start ;
 flex-grow:1;
}
.app-header .header-btn{
  text-align: right;
}
.app-header .header-btn .icon{
  height: 3.3vh;
  line-height:  3.3vh;
   width: 0.4rem;
   padding: .05rem;
  -webkit-app-region: no-drag; 
}
.app-header .header-btn .icon:hover {
   background:#ffffff;
}
.app-header .header-btn .close:hover {
   background:#f76666;
}
.app-header dl{clear:left; margin-bottom: 0em;}
.app-header dl dt{float:left; display:block;margin-left: .1rem;color: rgb(37, 37, 37);
 font-size: .15rem;cursor: default;
  -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    -webkit-app-region: no-drag; 
    }
 .app-header .help{
   cursor: help;
 }
.app-header dl dt:hover,
 .app-header dl dt:focus {
  color: #40a9ff;
  border-color: #40a9ff;
}
.app-header .active{
   color: #40a9ff;
  border-color: #40a9ff;
}
.header-fex-title{
  font-size: .15rem;
}
</style>
