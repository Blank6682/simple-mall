<template>
    <div class="herder">
        <div class="address">
            <span class="address-icon iconfont">&#xe636;</span>
            北京理工大学国防科技园2号楼10层
            <div class="news iconfont">&#xe63d;</div>
        </div>
        <div class="searchbar">
            <div class="searchbar-icon">
                <span class="iconfont">&#xe60c;</span>
            </div>
            <input type="search" placeholder="山姆会员商店优惠商品" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "../../style/viriablles.scss";
@import "../../style/mixins.scss";
.herder {
    color: $content-fontcolor;
    .address {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        font-size: 16px;
        line-height: 22px;
        @include ellipsis;
        &-icon {
            position: relative;
            top: 1px;
            margin-right: 8.5px;
        }
    }
    .iconfont {
        color: #000000;
        font-size: 20px;
    }
}
.searchbar {
    display: flex;
    margin-top: 16px;
    border-radius: 16px;
    height: 32px;
    background: rgba($color: #272727, $alpha: 0.1);
    color: #b7b7b7;
    overflow: hidden;
    input {
        width: 100%;
        height: 100%;
        font-size: 14px;
        line-height: 16px;
        border: 0px;
        outline: none;
        background: rgba($color: #272727, $alpha: 0.05);
    }
    &-icon {
        line-height: 32px;
        margin: 0px 7px;
    }
}
</style>