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
    padding-top: 12rem;
    color: $content-fontColor;
    .address {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        font-size: 16rem;
        line-height: 22rem;
        @include ellipsis;
        &-icon {
            position: relative;
            top: 1rem;
            margin-right: 8.5rem;
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