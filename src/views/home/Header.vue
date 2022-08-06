<template>
    <div class="head">
        <div class="address">
            <div class="address-left">
                <span class="address-left-icon iconfont">&#xe636;</span>
                <span> 广州市天河区天河城</span>
            </div>

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
.head {
    padding-top: 12rem;
    color: $content-fontColor;
    .address {
        display: flex;
        justify-content:space-between;
        align-items: center;
        position: relative;
        font-size: 16rem;
        line-height: 22rem;
        @include ellipsis;
        &-left{
            &-icon {
            position: relative;
            top: 1rem;
            margin-right: 7rem;
            }
        }
    }
    .iconfont {
        color: $darkColor;
        font-size: 20rem;
    }
}
.searchbar {
    display: flex;
    margin-top: 16rem;
    border-radius: 16rem;
    height: 32rem;
    background: rgba($color: #272727, $alpha: 0.1);
    color: #b7b7b7;
    overflow: hidden;
    input {
        width: 100%;
        height: 100%;
        font-size: 14rem;
        line-height: 16rem;
        border: 0rem;
        outline: none;
        background: rgba($color: #272727, $alpha: 0.05);
    }
    &-icon {
        line-height: 32rem;
        margin: 0rem 7rem;
    }
}
</style>
