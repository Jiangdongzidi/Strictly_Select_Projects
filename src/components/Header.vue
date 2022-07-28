<template>
  <div class="header">
        <div class="header-box">
            <div class="left">欢迎来到叩丁狼积分商城</div>
            <div class="right">
                <ul>
                    <li><img src="../assets/img/userImg.f8bbec5e.png" alt="">用户名:--</li>
                    <li>我的鸡腿: --</li>
                    <li>获取鸡腿</li>
                    <li><a href="https://www.wolfcode.cn/new/portal/index.html">叩丁狼官网</a></li>
                    <li>登录</li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header{
    background-color: #242B39;
    .header-box{
        width: 1200px;
        height: 40px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        line-height: 40px;
        color: #fff;
        .right{
            // float: right;
            ul{
                 display: flex;
                 li{
                    padding: 0 10px;
                    img{
                        width: 23px;
                        height: 23px;
                        border-radius: 50%;
                        vertical-align: middle;
                        margin-right: 5px;
                    }
                    &:last-child{
                        width: 105px;
                        height: 40px;
                        background-color: #0A328E;
                        text-align: center;
                    }
                    a{
                        color: #fff;
                    }
                 }
            }
        }
    }
}
</style>