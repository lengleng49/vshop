import axios from "axios";

axios.defaults.baseURL = 'http://locahost:4000'
export default (url='',method='GET',data={}) => {
   return new Promise((resolve,reject) => {
      if(method === 'GET'){ //如果方法是get，参数为query参数
         let currentUrl = '?'
         Object.keys(data).forEach(item =>{
            dataStr += item + '=' + data[item] + '&' 
         })
         currentUrl = url + currentUrl + dataStr
         //判断query参数是否为空
         if(dataStr !== '' ){
            let newUrl = currentUrl.substring(0,currentUrl.lastIndexOf('&'))
         }
         //发送get请求
         axios.get(newUrl).then(res => {
            resolve(res.data)
         },err => {
            reject(err)
         })
      }else{
         //发送其它请求
         axios({url,method,data}).then(res => {
            resolve(res.data)
         },err => {
            reject(err)
         })
      }
   })
}