<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Description: 
 * @Author: weiguo.cao
 * @Date: 2021-09-23 14:46:49
 * @LastEditTime: 2023-03-27 16:12:47
 * @LastEditors: Please set LastEditors
 * @Reference: 
-->
<template>
     <a-result status="403" title="403" sub-title="当前用户无权限，请联系管理员">
        <template #extra>
        <a-button type="primary" @click="backLogin">
            返回登录
        </a-button>
        </template>
    </a-result>
</template>
<script>
export default {
     methods: {
       backLogin(){
        localStorage.clear();
        sessionStorage.clear();
        window.location.href=window.REQUEST_URL.loginOutUrl
       },
     }
}
</script>

<style lang="less" scoped>

</style>