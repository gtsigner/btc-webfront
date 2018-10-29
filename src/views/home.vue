<template>
    <div class="home-view">
        <ranking></ranking>
        <ctrl-board></ctrl-board>
        <tip-message></tip-message>
        <tabs></tabs>
    </div>
</template>

<script>
    import Tabs from "../components/lottery/Tabs";
    import Ranking from "../components/lottery/Ranking";
    import CtrlBoard from "../components/lottery/CtrlBoard";
    import TipMessage from "../components/lottery/TipMessage";

    export default {
        name: "home",
        components: {TipMessage, CtrlBoard, Ranking, Tabs},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .home-view {
        background: #161933 url(../assets/images/bg_77.jpg) no-repeat center 0;
        min-height: 560px;
        position: relative
    }

    @media screen and (max-width: 1180px) {
        .home-view {
            padding-left: 15px;
            padding-right: 15px;
            min-height: 200px;
        }
    }

</style>
