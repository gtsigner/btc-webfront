<template>
    <div class="tips-message">
        <ul>
            <li>{{$t('Bet to get')}}：<em>6.2500</em> {{game.title}}</li>
            <li>{{$t('Bet now for FREE tokens to get')}}</li>
            <i class="el-icon-question"></i>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TipMessage",
        computed: {
            game() {
                return this.$store.state.game.current;
            }
        }
    }
</script>

<style scoped lang="scss">
    .tips-message {
        max-width: 650px;
        ul {
            max-width: 430px;
            height: 76px;
            background: #1c233f url(../../assets/images/dice_msg.png) no-repeat 26px 17px;
            border-radius: 38px;
            padding-left: 90px;
            padding-top: 8px;
            margin: 0 auto 40px;
            font-size: 13px;
            position: relative;
            li:nth-of-type(1) {
                color: #fff;
                em {
                    font-size: 1.9em;
                    font-weight: 600;
                }
            }
            li:nth-of-type(2) {
                color: #ff8831;
                font-size: 0.9em;
            }
            i {
                position: absolute;
                right: 10px;
                top: 26px;
                font-size: 24px;
                color: #777;
                cursor: pointer;
            }
        }
    }

    @media screen and (max-width: 575px) {
        .tips-message ul {
            padding-left: 88px;
            padding-top: 17px;
            li:nth-of-type(1) {
                em {
                    font-size: 1.3em;
                    font-weight: 600;
                }
            }
        }
    }

    @media screen and (max-width: 1180px) {
        .tips-message {
            max-width: 100%;
        }
    }
</style>
