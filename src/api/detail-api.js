import request from '../axios/request'
export function getDetailFun(id){
    request.get('/products/'+id).then(res=>{
        return res;
      })
}