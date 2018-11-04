<template>
    <div class="game-pool">
        <div class="ticket">
            <div class="t-left">
                <p>{{$t('Round Lottery Pot',{sum:24})}}</p>
                <h2>{{bonus}}<em>{{game.title}}</em></h2>
            </div>
            <div class="t-right" :class="game.icon"></div>
        </div>
        <div class="lottery-clock"><h2>{{$t('Next Drawing')}}</h2>
            <time-down ref="timer" @timeout="timeout" :end="timeEnd"></time-down>
        </div>
        <div class="lottery-info">
            <h3></h3>
            <p></p>
        </div><!---->
    </div>
</template>

<script>
    import {http} from "../../services/api";
    import TimeDown from "../common/TimeDown";
    import * as dayjs from 'dayjs';

    export default {
        name: "GamePool",
        components: {TimeDown},
        computed: {
            game() {
                return this.$store.state.game.current;
            }
        },
        data() {
            return {
                bonus: 3266.6719,
                data: [],
                loading: false,
                date: {},
                //开奖时间
                timeEnd: ''
            }
        },
        methods: {
            //倒计时结束
            async timeout() {
                //alert("开奖了哈");
                this.setEndTime();
            },
            async setEndTime() {
                this.timeEnd = dayjs(dayjs().unix() * 1000 + 10000 * 1000).format('YYYY-MM-DD HH:mm:ss')
            },
            async load() {
                this.loading = true;

                const res = await http.get('/');


                this.loading = false;
            }
        },
        created() {
            this.setEndTime();
        }
    }
</script>

<style scoped lang="scss">
    .game-pool {
        .ticket {
            background-color: #f7cc3f;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            border-right: 10px solid #3e404d;
            border-bottom: 10px solid #3e404d;
            margin-bottom: 28px;
            background: -webkit-gradient(linear, right bottom, left top, from(#f7c621), to(#f8d561));
            background: linear-gradient(to left top, #f7c621 0%, #f8d561 100%);
            > div {
                height: 300px;
                flex: 1;
                margin-left: -5px;
            }
            .t-left {
                border-left: 14px solid #d2a818;
                font-weight: 700;
                padding-top: 4.5em;
                padding-left: 1.5em;
                position: relative;
                p {
                    font-size: 20px;
                    font-weight: 700;
                }
                h2 {
                    font-weight: 700;
                    font-size: 90px;
                    color: #303030;
                    font-family: 'impact';
                    em {
                        font-size: 0.5em;
                        padding-left: 4px;
                        color: rgb(68, 68, 68);
                    }
                }
                &:after {
                    content: "";
                    position: absolute;
                    width: 54px;
                    height: 30px;
                    right: -24px;
                    bottom: -15px;
                    background-color: #1a1d36;
                    border-radius: 29px 29px 0 0;
                    z-index: 1;
                }
            }
            .t-right {
                -webkit-box-flex: 0;
                -ms-flex: 0 0 22%;
                flex: 0 0 22%;
                border-left: 2px dashed #d2a818;
                position: relative;
                background-size: 63px !important;
                &.game-eos {
                    background: url(../../assets/images/eos_icon_big_new.png) center 50px no-repeat;
                }
                &.game-dice {
                    background: url(../../assets/images/dice_icon_big.png) center 50px no-repeat;
                }
                &:after {
                    top: 0;
                    background-color: #191c35;
                    border-radius: 0 0 29px 29px;
                    content: "";
                    position: absolute;
                    width: 58px;
                    height: 29px;
                    left: -29px;
                }
                &:before {
                    content: "";
                    position: absolute;
                    width: 58px;
                    height: 29px;
                    left: -29px;
                    border-radius: 29px 29px 0 0;
                    bottom: 0;
                    background-color: #3e404d;
                }
            }
        }
        .lottery-clock {
            h2 {
                font-weight: 700;
                color: #edcd5c;
                font-size: 28px;
                text-align: center;
                margin-bottom: 16px;
            }
        }
    }

    //兼容方案
    @media screen and (max-width: 1180px) {
        .game-pool {
            .ticket {
                background-color: #f7cc3f;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                border-right: 1.2vw solid #3e404d;
                border-bottom: 1.2vw solid #3e404d;
                margin-bottom: 28px;
                padding-left: 5px;
                > div {
                    height: 30vw !important;
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    margin-left: -5px;
                }
                .t-left {
                    border-left: 1.2vw solid #d2a818;
                    padding-top: 6vw;
                    padding-left: 3vw;
                    p {
                        font-size: 3.3vw;
                    }
                    h2 {
                        font-size: 9vw;
                        margin-top: 1vw;
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        width: 6vw;
                        height: 3vw;
                        right: -2.2vw;
                        bottom: -2vw;
                        background-color: #1a1d36;
                        border-radius: 3vw 3vw 0 0;
                        z-index: 1;
                    }
                }
                .t-right {
                    &:before, &:after {
                        content: "";
                        width: 6vw;
                        height: 3vw;
                        left: -3vw;
                    }
                }
            }
            .lottery-clock {
                h2 {
                    font-weight: 700;
                    color: #edcd5c;
                    text-align: center;
                    margin-bottom: 16px;
                    font-size: 4.8vw;
                }
                > ul > li {
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    border: 2px solid #f6c522;
                    border-radius: 9px;
                    color: #edcd5c;
                    margin: 4px;
                    text-align: center;
                    font-size: 10vw;
                    &.point {
                        -webkit-box-flex: 0;
                        -ms-flex: 0 0 1vw;
                        flex: 0 0 1vw;
                        margin: 0;
                    }
                }
            }
        }
    }
</style>
