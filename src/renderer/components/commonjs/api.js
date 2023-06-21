/*
 * @Description: 
 * @Author: peng.lu
 * @Date: 2021-09-30 10:50:38
 * @LastEditTime: 2023-04-19 16:41:30
 * @LastEditors: peng.lu peng.lu@cyclone-robotics@example.com
 * @Reference: 
 */
const API ={
    login: '/user/token', //登陆
    register: '/v1/user/register', //注册
    uploadResume: '/v1/job/upload/resume', //上传简历
    analysisResume: '/v1/job/analysis/resume', //分析简历
    selectUserId: '/v1/user/selectUserId', //获取UserId
}

export default API