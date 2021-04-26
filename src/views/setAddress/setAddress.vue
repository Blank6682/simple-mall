<template>
    <div class="address">
        <div class="head">
            <span class="head-back iconfont">&#xe677;</span>
            <h3 class="head-title">新建收货地址</h3>
            <span class="head-save">保存</span>
        </div>
        <div class="content">
            <div class="content-item">
                所在城市：
                <input type="text" placeholder="如北京" />
            </div>
            <div class="content-item">
                小区/大厦/学校：
                <input type="text" placeholder="如理工大学国防科技园" />
            </div>
            <div class="content-item">
                楼号-门牌号：
                <input type="text" placeholder="A号楼B层" />
            </div>
            <div class="content-item">
                收货人：
                <input type="text" placeholder="请填写收货人的姓名" />
            </div>
            <div class="content-item">
                联系电话：
                <input type="text" placeholder="请填写收货手机号码" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SetAddress'

}
</script>

<style lang="scss" scoped>
.head {
    margin: 11px auto;
    &-title {
        font-size: 16px;
        color: #333;
    }
}
</style>