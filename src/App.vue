<template>
    <div id="app">
        <div class="app-layout">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        created() {

        }
    };
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #fff;
        overflow-x: hidden;
    }

    .app-layout {
        background-color: #f4f4f4;
        min-height: 820px;
        background: url(./assets/images/bg_77.jpg) center 0 no-repeat;
        background-color: #161933;
        position: relative;
    }
</style>
