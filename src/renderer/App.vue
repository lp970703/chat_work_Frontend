<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view/>
    </a-config-provider>
  </div>
</template>

<script>
import './assets/main.css'//引入全局公共的自定义的css
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import EN from 'ant-design-vue/lib/locale-provider/en_GB';

export default {
  data() {
    return {
      locale: 'en'==localStorage.getItem('language')?EN:zhCN,//国际化 默认中文 暂时未开通
      // locale: zhCN,
    };
  },
  // mounted(){
  //     var token=location.search.split('=')
  //     if(token.length>1){
  //       if(token[2]){ 
  //         localStorage.setItem('token',token[2])
  //         if(token.length>1){
  //           window.location.href='/#/addWork'
  //         }
  //     }
  //   }
  // }
}
</script>

<style>

</style>
