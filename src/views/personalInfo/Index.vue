<template>
    <div class="warper">
        <PersonalInfo />
        <FooterTapBar :currentIndex="3" />
    </div>
</template>

<script>
import FooterTapBar from '../../components/FooterTapBar.vue'
import PersonalInfo from './PersonalInfo.vue'

export default {
    name: "personalInfo",
    components: { FooterTapBar, PersonalInfo },
}
</script>
<style>
.warper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>