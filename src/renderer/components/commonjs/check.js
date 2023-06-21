// 校验信息
export default () => {
    // 手机号校验
    const testMobile = (value) => {
      const patt = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
      return patt.test(value)
    }
  
    const testName = (value) => {
      if (value.length < 2 || value.length > 30) {
        return false
      } else {
        return true
      }
    }
  
    const testEmail = (value) => {
      const patt = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
      return patt.test(value)
    }
  
    const testPassWord = (value) => {
      const patt = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/
      return patt.test(value)
    }
  
    return { testMobile, testName, testEmail, testPassWord }
  }