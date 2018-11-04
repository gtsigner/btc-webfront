<template>
    <div class="ctrl-board"><!---->
        <ul class="row-1">
            <li>
                <div class="title one">{{$t('BET AMOUNT')}}</div>
                <ol>
                    <li class="tokens-icon first" :class="game.icon">
                        <i></i>
                        <input type="number" v-model="bet.money" spellcheck="false"
                               class="no-spin"><span>{{game.title}}</span>
                    </li>
                    <li class="btns" @click="fix(0.5)">1/2</li>
                    <li class="btns add-line" @click="fix(2)">2X</li>
                    <li class="btns" @click="bet.money=bet.max">MAX</li>
                </ol>
            </li>
            <li>
                <div class="title two tokens-icon">{{$t('PAYOUT ON WIN')}}</div>
                <ol>
                    <li id="win-currency" class="tokens-icon" :class="game.icon">
                        <span>{{bet.money*(100-(board.scroll))}}</span>
                        <em class="game-title">{{game.title}}</em>
                    </li>
                </ol>
            </li>
        </ul>
        <ul class="row-2">
            <li>
                <div class="title">{{$t('ROLL UNDER TO WIN')}}</div>
                <div class="content min50">{{board.scroll}} <i></i></div>
            </li>
            <li class="add-line">
                <div class="title">{{$t('PAYOUT')}}</div>
                <div class="content">{{100-(board.scroll)}}</div>
            </li>
            <li>
                <div class="title">{{$t('WIN CHANCE')}}</div>
                <div class="content">{{board.scroll-1}}%</div>
            </li>
        </ul>


        <!--progress-->
        <div class="prog-bar">
            <div class="my-progress">
                <el-slider tooltip-class="godtoy" v-model="board.scroll" :step="1" :max="board.max"
                           :min="board.min"></el-slider>
                <ul class="scale">
                    <li><span style="padding-left: 1px;">1</span></li>
                    <li><span style="position: relative; left: -7px;">25</span></li>
                    <li><span style="position: relative; left: -7px;">50</span></li>
                    <li><span style="position: relative; left: -7px;">75</span><span
                        style="padding-right: 0px; position: relative; right: -8px;">100</span></li>
                </ul>
            </div>
        </div>

        <!--auto ctrl-->
        <div class="auto-ctrl">
            <span>{{$t('Auto Bet')}}</span>
            <el-switch v-model="auto" size="large"></el-switch>
            <span style="color: rgb(255, 255, 255); font-weight: 600;">{{$t('Off')}}</span>
            <i class="el-icon-question"><em>{{$t('bet tips')}}</em></i></div>
        <div class="btn-bar">
            <div v-if="!isLogin">
                <button class="login" @click="login">{{$t('Login')}}</button>
            </div>
            <div v-if="isLogin">
                <button class="login" @click="submit">{{$t('ROLL')}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CtrlBoard",
        computed: {
            game() {
                return this.$store.state.game.current;
            },
            user() {
                return this.$store.state.user;
            },
            isLogin() {
                return this.$store.state.isLogin;
            }
        },
        data() {
            return {
                auto: false,
                bet: {
                    money: '',
                    max: 10240000,
                },
                board: {
                    win: 52,
                    pl: '2.22x',
                    rate: '49%',
                    scroll: 49,
                    max: 96,
                    min: 2,
                },
            }
        },
        methods: {
            async submit() {
                alert("请对接接口");
            },
            login() {
                this.$store.dispatch('login');
            },
            fix(r) {
                this.bet.money *= r;
            }
        }
    }
</script>

<style scoped lang="scss">


    //progress
    .my-progress {
        max-width: 768px;
        padding-top: 45px;
        padding-bottom: 35px;
        .leve1, .leve2 {
            height: 14px;
            border-radius: 7px;
        }
        .leve1 {
            background-color: #ee0060;
            cursor: pointer;
        }
        .leve2 {
            background-color: #29f294;
            -webkit-box-shadow: 0 0 7px #29f294;
            box-shadow: 0 0 7px #29f294;
            position: relative;
            i {
                display: block;
                height: 22px;
                width: 22px;
                position: absolute;
                right: -11px;
                top: -6px;
                background-color: #f4f4f4;
                border-radius: 50%;
                -webkit-box-shadow: 0 0 5px #fff;
                box-shadow: 0 0 5px #fff;
                cursor: -webkit-grabbing;
                cursor: grabbing;
                z-index: 2;
                &:after {
                    content: "";
                    display: block;
                    height: 28px;
                    width: 28px;
                    position: absolute;
                    left: -3px;
                    top: -3px;
                    border-radius: 50%;
                    -webkit-box-shadow: 0 0 12px #fff inset;
                    box-shadow: 0 0 12px #fff inset;
                }
            }
            em {
                width: 58px;
                height: 28px;
                line-height: 28px;
                font-size: 17px;
                font-weight: 600;
                color: #fff;
                position: absolute;
                top: -42px;
                right: -29px;
                background-color: #5b5f62;
                border-radius: 3px;
                text-align: center;
                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 24px;
                    bottom: -5px;
                    border-top: 5px solid #5b5f62;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                }
            }

        }
        .leve2-roll {
            height: 0;
            position: relative;
            border-right: 1px solid #41f396;
            z-index: 1;
            em {
                position: absolute;
                top: 5px;
                right: -18px;
                height: 36px;
                width: 36px;
                line-height: 30px;
                border-radius: 8px;
                background-color: #344e47;
                font-size: 1.3em;
                font-weight: 600;
                border: 3px solid #41f396;
                color: #41f396;
                text-align: center;
            }
            em:after {
                content: "";
                display: block;
                position: absolute;
                height: 0px;
                width: 0px;
                border: 5px solid transparent;
                border-bottom-color: #41f396;
                top: -13px;
                left: 10px;
            }
            &.lost {
                border-right: 1px solid #e90062;
                em {
                    border: 3px solid #e90062;
                    background-color: #4b2d2e;
                    color: #e90062;
                    &:after {
                        border-bottom-color: #e90062;
                    }
                }
            }
        }
        ul.scale {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding-top: 12px;
            li {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                font-size: 13px;
                color: #949496;
            }
            li:last-child {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
            }
        }

    }

    @media screen and (max-width: 768px) {
        .my-progress {
            .leve1, .leve2 {
                height: 16px;
                border-radius: 8px;
                i {
                    height: 24px;
                    width: 24px;
                    position: absolute;
                    right: -12px;
                    top: -6px;
                    border-radius: 50%;
                }
                i:after {
                    content: "";
                    height: 30px;
                    width: 30px;
                    left: -3px;
                    top: -3px;
                }
                em {
                    top: -42px;
                }
            }
        }
    }

    @media screen and (max-width: 1180px) {
        .ctrl-board {
            margin: 0 auto;
        }
    }

    .ctrl-board {
        max-width: 650px;
        padding: 28px 0 50px;
        color: #ffffff;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        .tokens-icon {
            font-size: 20px;
            font-weight: 600;
            &.game-dice {
                background-image: url(../../assets/images/dice_icon_big.png);
            }
            &.game-eos {
                background-image: url(../../assets/images/eos_icon_big_new.png);
            }
            .game-title {
                margin-left: 5px;
                font-size: 0.7em;
                color: rgb(153, 153, 153);
            }
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        input[type="number"] {
            -moz-appearance: textfield;
        }
    }

    .ctrl-board .tab-btns {
        text-align: center;
        padding: 6px 0 18px;
    }

    .ctrl-board .tab-btns button {
        background-repeat: no-repeat;
        background-position-x: 10px;
        background-position-y: center;
        background-size: 20px;
        padding: 6px 15px;
        padding-left: 34px;
        border-radius: 6px;
        margin: 0 5px;
        background-color: #252e51;
        color: #fff;
    }

    .ctrl-board .tab-btns button.active {
        background-color: #f1940f;
    }

    .ctrl-board > ul.row-1,
    .ctrl-board > ul.row-2 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .ctrl-board > ul.row-1 > li,
    .ctrl-board > ul.row-2 > li {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .ctrl-board > ul.row-1 > li > ol,
    .ctrl-board > ul.row-2 > li > ol {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        background-color: #1c233f;
        font-size: 14px;
        padding: 4px;
        border-radius: 3px;
        height: 44px;
    }

    .ctrl-board > ul.row-1 > li > ol > li,
    .ctrl-board > ul.row-2 > li > ol > li {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        line-height: 36px;
    }

    .ctrl-board > ul.row-1 > li > ol > li.first,
    .ctrl-board > ul.row-2 > li > ol > li.first {
        -webkit-box-flex: 3.6;
        -ms-flex: 3.6;
        flex: 3.6;
        border-radius: 3px;
        padding-left: 40px;
        padding-right: 50px;
        background-color: #3b435c;
        margin-right: 2px;
        position: relative;
    }

    .ctrl-board > ul.row-1 > li > ol > li.first input,
    .ctrl-board > ul.row-2 > li > ol > li.first input {
        width: 100%;
        height: 98%;
        background-color: transparent;
        text-align: center;
        border: none;
    }

    .ctrl-board > ul.row-1 > li > ol > li.first span,
    .ctrl-board > ul.row-2 > li > ol > li.first span {
        position: absolute;
        right: 0px;
        top: 3px;
        font-size: 0.7em;
        text-align: left;
        width: 48px;
        color: #999;
    }

    .ctrl-board > ul.row-1 > li > ol > li.btns,
    .ctrl-board > ul.row-2 > li > ol > li.btns {
        cursor: pointer;
        border-radius: 3px;
    }

    .ctrl-board > ul.row-1 > li > ol > li.btns:hover,
    .ctrl-board > ul.row-2 > li > ol > li.btns:hover {
        background-color: #3c435b;
        text-shadow: 0 0 5px #fff;
    }

    .ctrl-board > ul.row-1 > li:first-child,
    .ctrl-board > ul.row-2 > li:first-child {
        -webkit-box-flex: 1.2;
        -ms-flex: 1.2;
        flex: 1.2;
        margin-right: 2.2%;
    }

    .ctrl-board > ul.row-1 div.title,
    .ctrl-board > ul.row-2 div.title {
        font-size: 13px;
        color: #898a8c;
    }

    .ctrl-board > ul.row-1 div.title.one,
    .ctrl-board > ul.row-2 div.title.one,
    .ctrl-board > ul.row-1 div.title.two,
    .ctrl-board > ul.row-2 div.title.two {
        padding: 7px 0 4px;
        padding-left: 33px;
    }

    .ctrl-board > ul.row-1 div.title.one,
    .ctrl-board > ul.row-2 div.title.one {
        background: url(../../assets/images/round2.png) 5px center no-repeat;
    }

    .ctrl-board > ul.row-1 div.title.two,
    .ctrl-board > ul.row-2 div.title.two {
        background: url(../../assets/images/goldcoin.png) 5px center no-repeat;
    }

    .ctrl-board > ul.row-1 .tokens-icon,
    .ctrl-board > ul.row-2 .tokens-icon {
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 10px center;
    }

    .ctrl-board > ul.row-2 {
        background-color: #1c233f;
        padding: 25px 0;
        border-radius: 3px;
        text-align: center;
    }

    .ctrl-board > ul.row-2 .content {
        font-size: 34px;
        font-weight: 600;
    }

    .ctrl-board li.add-line {
        position: relative;
        margin-left: 1px;
        margin-right: 1px;
    }

    .ctrl-board li.add-line:after,
    .ctrl-board li.add-line:before {
        content: "";
        display: block;
        position: absolute;
        background-color: #181e3a;
        width: 1px;
        height: 18px;
        top: 9px;
    }

    .ctrl-board li.add-line:after {
        left: -1px;
    }

    .ctrl-board li.add-line:before {
        right: -1px;
    }

    .ctrl-board > ul.row-2 li.add-line:after,
    .ctrl-board > ul.row-2 li.add-line:before {
        height: 55px;
        top: 5px;
    }

    .ctrl-board .min50 > i {
        display: inline-block;
        width: 12px;
        height: 16px;
        background: url(../../assets/images/xiajiantou.png) 0 0 no-repeat;
        position: relative;
        top: 1px;
    }

    .ctrl-board {
        .btn-bar {
            position: relative;
            .current-eos {
                position: absolute;
                left: 0px;
                font-size: 22px;
                font-weight: 600;
                top: 2%;
                padding: 7px 0 7px 36px;
                background: no-repeat 4px center;
                background-size: 34px;
            }

            .current-eos .move-num {
                position: absolute;
                top: 80px;
                left: 42px;
                color: lime;
                font-size: 22px;
                -webkit-transition: all 0.3s;
                transition: all 0.3s;
                display: none;
            }
            .current-eos.dice {
                left: auto;
                right: 0px;
                padding-left: 35px;
            }
            .current-eos.dice i {
                color: #6a6a6a;
                cursor: pointer;
            }
            .current-eos.dice i:hover {
                color: #aaa;
            }
        }
    }

    .ctrl-board {
        .btn-bar button {
            display: block;
            margin: 0 auto;
            min-width: 132px;
            height: 48px;
            line-height: 46px;
            background-color: #28b6e4;
            border: none;
            border-radius: 6px;
            padding: 0 5px;
            font-size: 18px;
            font-weight: 600;
            overflow: hidden;
        }
        .btn-bar button:hover {
            background-color: #20abd7;
        }
        .btn-bar button.login {
            border-radius: 23px;
        }
        .loading-cover {
            position: absolute;
            width: 110%;
            height: 100%;
            z-index: 9;
            top: 0;
            left: -5%;
            background: -webkit-gradient(linear, left top, right top, from(rgba(23, 26, 51, .88)), color-stop(rgba(23, 26, 51, .98)), color-stop(rgba(23, 26, 51, .98)), to(rgba(23, 26, 51, .88)));
            background: linear-gradient(to right, rgba(23, 26, 51, .88), rgba(23, 26, 51, .98), rgba(23, 26, 51, .98), rgba(23, 26, 51, .88));
        }
    }

    .ctrl-board .loading-cover {
        ul {
            width: 220px;
            height: 220px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -110px;
            margin-left: -110px;
        }

        ul li {
            color: #fff;
            font-size: 22px;
            font-weight: 600;
            padding: 2px 0;
            text-align: center;
            &:first-child {
                width: 112px;
                height: 91px;
                background: url(../../assets/images/loading.gif);
                margin: 0 auto;
            }
            &:last-child {
                color: #a1a1a1;
                font-size: 14px;
                font-weight: 400;
            }
        }
    }

    .ctrl-board {
        .auto-ctrl {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin-bottom: 22px;
            margin-top: -20px;
        }
    }

    .ctrl-board {
        .auto-ctrl {
            > span {
                position: relative;
                color: #a0a8c4;
                top: 2px;
                padding: 0 6px;
            }
            > i {
                font-size: 22px;
                position: relative;
                color: #6a6a6a;
                top: 2px;
                padding: 0 6px;
                cursor: pointer;
            }
            //help
            > i:hover em {
                display: block;
            }
            > i em {
                display: none;
                position: absolute;
                top: 0;
                -webkit-transform: translate(0, -115%);
                transform: translate(0, -115%);
                left: 0;
                padding: 10px;
                width: 180px;
                background-color: #444;
                border-radius: 5px;
                color: #ccc;
                font-size: 15px;
                z-index: 2000;
            }
            > i:hover {
                color: #aaaaaa;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .ctrl-board {
            .btn-bar button {
                margin-bottom: 10px;
                height: 42px;
                line-height: 40px;
            }
            > ul.row-1 > li, > ul .row-2 > li {
                -webkit-box-flex: 0;
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                margin-bottom: 8px;
            }
            ul.row-1 > li:first-child, > ul.row-2 > li:first-child {
                margin-right: 0;
            }
            > ul {
                &.row-1, &.row-2 {
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                }
            }
        }
    }

    button, input, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
</style>
