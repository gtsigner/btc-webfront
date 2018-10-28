<template>
    <div class="fixed-bet">
        <a href="/lottery" class="">
            <p><em class="fa fa-clock-o"></em>彩票开奖时间</p>
            <div class="time">00:04:48</div>
            <div class="link">前往下注</div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "FixedBet"
    }
</script>

<style scoped lang="scss">
    .fixed-bet {
        display: inline-block;
        background-color: #1c233f;
        padding: 8px 0 0;
        margin: 0 -6px 0 0;
        border-radius: 7px;
        font-size: 13px;
        text-align: center;
        overflow: hidden;
        min-width: 120px;
        border: 1px solid #e9bb1f;
        z-index: 9;
        position: fixed;
        bottom: 30px;
        right: 30px;
        color: #fff;
        div {
            color: #fff;
        }
        p {
            color: #8c8d9a;
            margin: 0;
        }
        .time {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 4px;
        }
        .link {
            background-color: #e9bb1f;
            padding: 4px;
        }
    }
</style>
