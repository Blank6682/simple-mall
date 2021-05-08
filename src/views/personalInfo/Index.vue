<template>
    <div class="personal">
        <PersonalInfo />
        <ContentBar />
        <FooterTapBar :currentIndex="3" />
    </div>
</template>

<script>
import FooterTapBar from '../../components/FooterTapBar.vue'
import ContentBar from './ContentBar.vue'
import PersonalInfo from './PersonalInfo.vue'

export default {
    name: "personalInfo",
    components: { FooterTapBar, PersonalInfo, ContentBar },
}
</script>
<style>
.personal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 49px;
}
</style>