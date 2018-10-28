<template>
    <div class="home-view">
        <ranking></ranking>
        <ctrl-board></ctrl-board>
        <tabs></tabs>
    </div>
</template>

<script>
    import Tabs from "../components/lottery/Tabs";
    import Ranking from "../components/lottery/Ranking";
    import CtrlBoard from "../components/lottery/CtrlBoard";

    export default {
        name: "home",
        components: {CtrlBoard, Ranking, Tabs},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .home-view {
        background: #161933 url(../assets/images/bg_77.jpg) no-repeat center 0px;
        min-height: 560px;
        position: relative
    }

</style>
