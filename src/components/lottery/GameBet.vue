<template>
    <div class="game-bet">
        <div class="lottery-bet"><h3>{{$t('Buy Tickets')}}</h3>
            <ul class="row-1">
                <li>
                    <ol>
                        <li class="tokens-icon first"><i></i>
                            <input
                                v-model="bet.money"
                                type="text"
                                spellcheck="false">
                            <span>{{$t('Ticket')}}</span>
                        </li>
                        <li class="btns" @click="fix(0.5)">1/2</li>
                        <li class="btns add-line" @click="fix(2)">2X</li>
                        <li class="btns" @click="bet.money=bet.max">MAX</li>
                    </ol>
                </li>
            </ul>
            <ul class="row-2">
                <li><img src="../../assets/images/price_icon.jpg" alt="">
                    <h2>{{counter.price}} <em>{{game.title}}</em></h2>
                    <p>{{$t('Price per Ticket')}}</p></li>
                <li><img src="../../assets/images/total_icon.jpg" alt="">
                    <h2>{{counter.count}} <em> {{game.title}}</em></h2>
                    <p>{{$t('Total')}}</p></li>
            </ul><!----><!----></div>
    </div>
</template>

<script>
    export default {
        name: "GameBet",
        data() {
            return {
                bet: {
                    money: '',
                    max: 10240000,
                    min: 100
                },
                counter: {
                    price: 0.22,
                    count: 2233,
                }
            }
        },
        watch: {
            //fixbug: 1
            'bet.money'(n, o) {
                if (n <= this.bet.min) {
                    this.bet.money = this.bet.min;
                }
                if (n > this.bet.max) {
                    this.bet.money = this.bet.max;
                }
                return n;
            }
        },
        computed: {
            game() {
                return this.$store.state.game.current;
            }
        },
        methods: {
            submit() {

            },
            fix(r) {
                this.bet.money *= r;
            }
        }
    }
</script>

<style scoped lang="scss">
    p {
        margin: 0 0 10px;
    }

    .h1, .h2, .h3, h1, h2, h3 {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .lottery-bet {
        max-width: 600px;
        margin: 0 auto;
        h3 {
            text-align: center;
            font-weight: 600;
            margin-bottom: 16px;
        }
        > ul.row-1 {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            margin-bottom: 8px;
            > li {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                > ol {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    background-color: #1c233f;
                    font-size: 14px;
                    padding: 6px;
                    border-radius: 3px;
                    height: 62px;
                    > li {
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        text-align: center;
                    }
                    > li.first {
                        -webkit-box-flex: 3.6;
                        -ms-flex: 3.6;
                        flex: 3.6;
                        border-radius: 3px;
                        padding-left: 52px;
                        padding-right: 50px;
                        background: #121832 url(../../assets/images/bet_icon.jpg) no-repeat 10px 6px;
                        margin-right: 2px;
                        position: relative;
                        span {
                            position: absolute;
                            right: 0px;
                            bottom: 10px;
                            font-size: 0.77em;
                            text-align: right;
                            padding-right: 16px;
                            color: #999;
                        }
                    }
                    > li.first input {
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                        text-align: center;
                        border: none;
                        font-weight: 700;
                        font-size: 32px;
                        text-shadow: 0 0 3px #eee;
                    }
                }
            }
        }
    }

    .lottery-bet > ul.row-1 > li > ol > li.btns {
        cursor: pointer;
        border-radius: 3px;
        font-size: 19px;
        line-height: 52px;
        font-weight: 700;
        color: #596386;
    }

    .lottery-bet > ul.row-1 > li > ol > li.btns:hover {
        color: #ddd;
        background-color: #3c435b;
        text-shadow: 0 0 5px #fff;
    }

    .lottery-bet > ul.row-1 > li > ol > li.btns.add-line {
        border-left: 1px solid #131831;
        border-right: 1px solid #131831;
    }

    .lottery-bet > ul.row-1 .tokens-icon {
        background-size: 20px;
        background: no-repeat 10px center;
    }

    .lottery-bet > ul.row-2 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        border-radius: 8px;
        background-color: #1c233f;
    }

    .lottery-bet > ul.row-2 li {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        text-align: center;
        padding: 28px 0 18px;
    }

    .lottery-bet > ul.row-2 li h2 {
        font-size: 26px;
        font-weight: 600;
        margin-top: 3px;
    }

    .lottery-bet > ul.row-2 li h2 em {
        font-size: 0.6em;
        color: #999;
    }

    .lottery-bet > ul.row-2 li p {
        color: #9196b6;
        font-size: 14px;
    }

    .lottery-bet > ul.row-2 li i.fa {
        font-size: 39px;
        color: #171d33;
    }

    .lottery-bet > ul.row-2 li + li {
        border-left: 1px solid #121832;
    }

    .lottery-bet .submit-btn {
        text-align: center;
        padding-top: 22px;
        margin-bottom: 28px;
    }

    .lottery-bet .submit-btn button {
        font-size: 19px;
        font-weight: 600;
        background-color: #33b6e2;
        border: none;
    }

    .lottery-bet .submit-btn button:hover {
        background-color: #53c1e6;
    }

    .lottery-bet .submit-btn .el-button.is-round {
        border-radius: 24px;
        padding: 13px 28px;
    }

    .lottery-bet .user-currency {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        min-width: 240px;
        max-width: 300px;
        margin: 0 auto;
        padding: 10px 10px;
        border: 1px solid #272935;
        border-radius: 23px;
        opacity: 0.85;
    }

    .lottery-bet .user-currency img {
        width: 21px;
        height: 24px;
        display: block;
        margin-right: 6px;
        position: relative;
        top: -2px;
    }

    .lottery-bet .user-currency span {
        font-size: 19px;
        font-weight: 600;
        color: #eee;
    }

    .lottery-bet .user-currency span em {
        padding-left: 5px;
        font-size: 13px;
        color: #aaa;
    }

    @media screen and (max-width: 550px) {
        .lottery-bet h3 {
            margin-top: 25px;
            font-size: 19px;
        }
        .lottery-bet > ul.row-1 {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .lottery-bet > ul.row-1 > li {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
        }
        .lottery-bet > ul.row-1 > li > ol > li {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            text-align: center;
        }
        .lottery-bet > ul.row-1 > li > ol > li.first {
            -webkit-box-flex: 3.6;
            -ms-flex: 3.6;
            flex: 3.6;
            background-position: 5px 6px;
            padding-right: 30px;
            padding-left: 42px;
        }
        .lottery-bet > ul.row-1 > li > ol > li.first input {
            font-size: 28px;
        }
        .lottery-bet > ul.row-1 > li > ol > li.first span {
            padding-right: 5px;
        }
        .lottery-bet > ul.row-1 > li > ol > li.btns {
            font-size: 14px;
        }
        .lottery-bet > ul.row-2 li {
            padding: 12px 0 10px;
        }
        .lottery-bet > ul.row-2 li > img {
            display: inline-block;
            width: 34px;
            height: 34px;
        }
        .lottery-bet > ul.row-2 li h2 {
            font-size: 18px;
            margin-top: 3px;
        }
        .lottery-bet > ul.row-2 li h2 em {
            font-size: 0.5em;
            color: #999;
        }
        .lottery-bet > ul.row-2 li p {
            font-size: 12px;
        }
        .lottery-bet > ul.row-2 li + li {
            border-left: 1px solid #121832;
        }
        .lottery-bet .submit-btn {
            text-align: center;
            padding-top: 22px;
        }
        .lottery-bet .submit-btn button {
            font-size: 17px;
        }
    }
</style>
