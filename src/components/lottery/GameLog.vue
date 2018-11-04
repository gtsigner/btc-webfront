<template>
    <div class="game-log">
        <div class="lottery-log">
            <ul class="table-header">
                <li id="log-page-top" class="top">
                    <h2>{{$t('Round Count Lottery',{count:200})}}</h2>
                    <p>{{$t('Winner')}}</p>
                    <div class="name">
                        {{winer.user}}
                        <button type="button"
                                @click="leftGo"
                                :class="{'disable':!date.leftEnable}"
                                :disabled="!date.leftEnable"
                                class="el-button btn-left el-button--info el-button--mini is-circle">
                            <i class="el-icon-arrow-left"></i>
                        </button>
                        <button type="button"
                                @click="rightGo"
                                :class="{'disable':!date.rightEnable}"
                                :disabled="!date.rightEnable"
                                class="el-button btn-right el-button--info el-button--mini is-circle">
                            <i class="el-icon-arrow-right"></i></button>
                    </div>
                    <div class="money">{{$t('User')}}：<em
                        style="font-weight: 800; font-size: 1.2em;">{{winer.id}}</em>
                        {{game.title}}
                    </div>
                    <p class="total">{{$t('Total Count Tickets')}}：{{betCount}}</p></li>
            </ul>
            <ul class="table-list data">
                <li class="t-header">
                    <span class="no">#</span>
                    <span>{{$t('User')}}</span>
                    <span>{{$t('Win Prize')}}</span>
                    <span>{{$t('Ticket Number')}}</span>
                    <span>{{$t('Owned Ratio')}}</span>
                </li>
                <li class="items" v-for="(bet,i) in bets">
                    <span :class="'no'+bet.rank"><i>{{bet.rank}}</i></span>
                    <span>{{bet.user}}</span>
                    <span>
                        <em>{{bet.bonus}}</em>
                        <em style="font-size: 12px; padding-left: 4px;">{{game.title}}</em>
                    </span>
                    <span>{{bet.codes}}</span>
                    <span>{{bet.rate}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {http} from "../../services/api";

    export default {
        name: "GameLog",
        data() {
            return {
                data: [],
                loading: false,
                bets: [],
                winer: {
                    user: 'godtoy',
                    id: '123123.123',
                },
                betCount: 100232,
                date: {
                    leftEnable: true,
                    rightEnable: true
                }
            }
        },
        computed: {
            game() {
                return this.$store.state.game.current;
            }
        },
        methods: {
            async leftGo() {
                this.date.leftEnable = false;
                this.date.rightEnable = true;
                // this.date = dayjs().format('YYYY-MM-DD');
                this.load();
            },
            async rightGo() {
                this.date.leftEnable = true;
                this.date.rightEnable = false;
                // this.date = dayjs().format('YYYY-MM-DD');//自己做
                this.bets.push({
                    rank: this.bets.length + 1,
                    user: 'zhaojunlike',
                    bonus: '1233312.2131',
                    codes: '23,123',
                    rate: "45.82%"
                });
            },
            async load(date) {
                this.loading = true;
                const res = await http.get('/');
                const list = [
                    {
                        rank: 1,
                        user: 'zhaojunlike',
                        bonus: '12312.2131',
                        codes: '1231,123',
                        rate: "45.82%"
                    },
                    {
                        rank: 2,
                        bonus: '12312.2131',
                        codes: '1231,123',
                        user: 'godtoy',
                        rate: "45.87%"
                    },
                    {
                        rank: 3,
                        bonus: '12312.2131',
                        codes: '1231,123',
                        user: 'godtoy',
                        rate: "45.87%"
                    },
                ];
                this.bets = [...list];
                this.loading = false;
            }
        },
        created() {
            this.load();
        }
    }
</script>

<style scoped lang="scss">
    .lottery-log {
        position: relative;
        top: 0;
        z-index: 3;
        margin: 0 auto 0;
        .el-button {
            background: transparent;
        }
        .el-button.disable {
            background: transparent;
            cursor: auto;
            opacity: 0.2;
        }

        > ul.table-header {
            margin: 0;
            padding: 0 0;
            background-color: #f3c742;
            li.top {
                display: block;
                text-align: center;
                background: #2580c6 url(../../assets/images/lottery_log_bg_1.jpg) repeat-x 22px 0;
                padding-top: 28px;
                padding-bottom: 5px;
                border-radius: 0;
                position: relative;
                &:before, &:after {
                    content: "";
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    top: -20px;
                    background-color: #181c37;
                    right: -20px;
                }
                &:after {
                    left: -20px;
                }
                h2 {
                    color: #fff;
                    font-size: 22px;
                    font-weight: 600;
                    margin-top: 20px;
                    margin-bottom: 10px;
                }
                p {
                    color: #70b1e3;
                    font-size: 14px;
                    text-align: center;
                    font-weight: 400;
                    &.total {
                        margin-bottom: 5px;
                        color: rgb(186, 215, 238);
                        text-align: right;
                        padding-right: 16px;
                    }
                }
                > div.name {
                    margin: 5px auto 8px;
                    text-align: center;
                    padding-left: 4px;
                    width: 285px;
                    height: 83px;
                    color: #fff;
                    line-height: 80px;
                    font-size: 18px;
                    font-weight: 600;
                    position: relative;
                    background: #186aa6 url(../../assets/images/lottery_log_bg.jpg);
                    .btn-right, .btn-left {
                        position: absolute;
                        top: 50%;
                        -webkit-transform: translate(0, -50%);
                        transform: translate(0, -50%);
                        border-color: #ccc;
                    }
                    .btn-left {
                        left: -40px;
                    }
                    .btn-right {

                        right: -40px;
                    }
                }
                > div.money {
                    display: inline-block;
                    font-size: 18px;
                    background-color: #f3cb56;
                    height: 32px;
                    line-height: 32px;
                    padding: 0 16px;
                    border-radius: 16px;
                    color: #333;
                    font-weight: 600;
                    text-align: center;
                    margin: 0 auto 12px;
                    em {
                        font-weight: 800;
                        font-size: 1.2em;
                    }
                }
            }
        }

        > ul.table-list.data {
            min-height: 226px;
            margin: 0;
            padding: 0 0;
            background-color: #f3c742;
            .t-header {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                color: #a2a4a6;
                justify-content: space-around;
                border-radius: 3px;
                min-height: 49px;
                padding-left: 32px;
                padding-right: 12px;
                background-color: #e3b73a;
                span {
                    color: #111;
                    padding: 0 5px;
                    max-width: 190px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
        ul.table-list {
            li {
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                color: #a2a4a6;
                justify-content: space-around;
                border-radius: 3px;
                min-height: 49px;
                padding-left: 32px;
                span {
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    text-align: center;
                    padding: 0 5px;
                    color: #222;
                    max-width: 190px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    &:first-child {
                        display: block;
                        height: 25px;
                        width: 25px;
                        line-height: 25px;
                        font-weight: 600;
                        text-align: center;
                        font-size: 13px;
                        color: #ddd;
                        background-color: #c9a027;
                        border-radius: 50%;
                    }
                }

                &:nth-of-type(odd) {
                    background-color: #e3b73a;
                }
                span.no {
                    text-align: center;
                    flex: 0 0 45px;
                    border-radius: 0;
                    background: transparent;
                    display: inline-block;
                }

                //排名显示号码
                &.items {
                    span:first-child {
                        flex: 0 0 26px;
                        margin-left: 8px;
                        margin-right: 8px;
                        position: relative;
                        left: -5px;
                    }
                    span.no1 {
                        background: url(../../assets/images/no_1.png) no-repeat;
                        color: transparent;
                        height: 42px;
                        background-size: 42px 42px;
                        position: relative;
                        left: -6px;
                        top: 2px;
                        -webkit-box-flex: 0;
                        -ms-flex: 0 0 42px;
                        flex: 0 0 42px;
                        margin-left: 0;
                        margin-right: 0;
                    }
                    span.no2 {
                        background: url(../../assets/images/no_2.png) no-repeat;
                        color: transparent;
                        background-size: 38px 38px;
                        height: 38px;
                        position: relative;
                        left: -4px;
                        top: 2px;
                        -webkit-box-flex: 0;
                        -ms-flex: 0 0 42px;
                        flex: 0 0 42px;
                        margin-left: 0;
                        margin-right: 0;
                    }
                    span.no3 {
                        background: url(../../assets/images/no_3.png) no-repeat;
                        color: transparent;
                        background-size: 34px 34px;
                        height: 34px;
                        position: relative;
                        left: -2px;
                        -webkit-box-flex: 0;
                        -ms-flex: 0 0 42px;
                        flex: 0 0 42px;
                        margin-left: 0;
                        margin-right: 0;
                    }
                }
            }
        }
    }

    //兼容500
    @media screen and (max-width: 500px) {

        .lottery-log {
            > ul.table-header {
                li.top > div.name {
                    width: 220px;
                    padding-left: 30px;
                }
            }

            > ul.table-list li.t-header, > ul.table-list li.items {
                width: 470px;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
            }
            > ul.table-list {
                width: 100%;
                overflow-y: scroll;
                &.data {
                    min-height: 226px;
                }
                .t-header {
                    padding: 0 !important;
                }
                li {
                    padding-left: 15px !important;
                }
            }
        }
    }
</style>
