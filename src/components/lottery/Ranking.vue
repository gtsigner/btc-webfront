<template>
    <div class="ranking-container">
        <div class="ranking-comp">
            <h2><i class="fa fa-bar-chart-o"></i> {{$t("Today Leader Board")}} ({{date.time}})</h2>
            <ul class="table-header">
                <li class="t-header">
                    <span class="rank-col">{{$t('Rank')}}</span>
                    <span>{{$t('Bettor')}}</span>
                    <span>{{$t('Total Wager')}}</span>
                    <span>{{$t('Prize')}}</span>
                </li>
            </ul>
            <ul :id="game.icon" class="table-list data">
                <li class="items" v-for="(it,i) in data" :class="'top'+it.rank">
                    <span>{{it.rank}}</span>
                    <span>{{it.bettor}}</span>
                    <span>
                        <em style="font-weight: 600;">{{it.total_wager}}</em>
                        <em class="game-type">{{game.title}}</em>
                    </span>
                    <span>
                        <em style="font-weight: 600; color: rgb(41, 224, 141);">{{it.prize}}</em>
                        <em class="game-type">{{game.title}}</em>
                    </span>
                </li>
            </ul>
            <ul class="table-list user ">
                <li class="items user"><span>-</span><span>-</span><span>
                    <em style="font-weight: 600;">0.0000</em>
                    <em style="font-size: 12px; padding-left: 4px;">{{game.title}}</em></span><span></span></li>

            </ul>
            <div class="info-font tips">
                * {{$t('Reset Time Tips')}}
            </div>
            <div class="flag">
                <a target="_blank"
                   href="https://medium.com/@betdice/betdice-event-week-is-being-extended-for-one-final-week-e255f1a76ed">
                    <div class="msg">
                        <p class="neon1">{{resend.count}}</p>
                        <p>{{$t('Giveaway',{title:game.title})}}</p></div>
                </a></div>
            <div class="btn-ctrl">
                <el-button style="background: transparent;" type="info" size="mini" circle>
                    <i class="el-icon-arrow-left"></i>
                </el-button>
                <el-button style="background: transparent; cursor: auto; opacity: 0.2;" type="info" size="mini" circle>
                    <i class="el-icon-arrow-right"></i>
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ranking",
        data() {
            return {
                data: [],
                resend: {
                    count: 4000
                },
                date: {
                    time: '03:16:29',
                    date: ''
                }
            }
        },
        methods: {
            async getData() {
                const list = [
                    {
                        rank: 1,
                        bettor: 'bettobigmoon',
                        total_wager: '123',
                        prize: '123'
                    },
                    {
                        rank: 2,
                        bettor: 'godtoy',
                        total_wager: '22',
                        prize: '123'
                    },
                ];
                this.data = [...list];
            }
        },
        computed: {
            game() {
                return this.$store.state.game.current;
            },
        },
        created() {
            this.getData();
        }
    }
</script>

<style scoped lang="scss">

    .ranking-container {
        position: absolute;
        top: 20px;
        right: 0;
        width: 500px;
        .info-font {
            &.tips {
                padding-left: 15px;
                padding-bottom: 5px;
                color: rgb(187, 187, 187);
                font-size: 13px;
            }
        }

        .game-type {
            font-size: 12px;
            padding-left: 4px;
        }

        .ranking-comp {
            .table-header {
                margin: 0;
                padding: 0;
            }
            .t-header {
                height: 40px;
                padding: 6px 20px 0;
                .rank-col {
                    text-align: center;
                    flex: 0 0 52px;
                    display: inline-block;
                }
            }
        }
    }

    @media screen and (max-width: 1180px) {
        .ranking-container {
            padding-top: 10px;
            position: relative;
            top: 0;
            right: 0;
            width: 100%;
            max-width: 768px;
            margin: 0 auto 20px;
        }
    }

    .ranking-comp {
        max-width: 768px;
        background-color: #1c233f;
        position: relative;
        border-radius: 2px;
        overflow: hidden;
        top: 7px;
        z-index: 3;
        h2 {
            text-align: center;
            color: #fff;
            font-size: 19px;
            padding: 19px 0;
            margin: 0;
        }
        > ul.table-list.data {
            height: 360px;
            overflow-y: auto;
        }
        > ul.table-list.data::-webkit-scrollbar {
            width: 9px;
            height: 9px;
        }
        ul.table-list.data::-webkit-scrollbar-track-piece {
            background-color: #1c233f;
        }
        > ul.table-list.data::-webkit-scrollbar-thumb {
            background-color: #3c4771;
            background-clip: padding-box;
            min-height: 28px;
            border-radius: 4px;
        }
        > ul.table-list.data {
            &#game-eos {
                height: 245px;
            }
        }
        > ul.table-list.user {
            padding-top: 6px;
            padding-right: 22px;
        }
        > ul.table-list, > ul.table-header {
            margin: 0;
            padding: 0 13px;
            border-top: 2px solid #21294c;
        }
        > ul.table-list li, > ul.table-header li {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            color: #a2a4a6;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            margin-bottom: 5px;
            border-radius: 3px;
            height: 45px;
            padding-left: 7px;
        }
    }

    .ranking-comp > ul.table-list li span,
    .ranking-comp > ul.table-header li span {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        padding: 0 5px;
        color: #bebec3;
        max-width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ranking-comp > ul.table-list li span:first-child,
    .ranking-comp > ul.table-header li span:first-child {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 52px;
        flex: 0 0 52px;
    }

    .ranking-comp > ul.table-list li.items span:first-child,
    .ranking-comp > ul.table-header li.items span:first-child {
        height: 48px;
        line-height: 48px;
        font-weight: 600;
        text-align: center;
        font-size: 15px;
        color: #ddd;
        background: url(../../assets/images/top0.png) 9px 4px no-repeat;
    }

    .ranking-comp > ul.table-list li.top1 span:first-child,
    .ranking-comp > ul.table-header li.top1 span:first-child {
        background: url(../../assets/images/top1.png) 4px 4px no-repeat;
    }

    .ranking-comp > ul.table-list li.top2 span:first-child,
    .ranking-comp > ul.table-header li.top2 span:first-child {
        background: url(../../assets/images/top2.png) 4px 4px no-repeat;
    }

    .ranking-comp > ul.table-list li.top3 span:first-child,
    .ranking-comp > ul.table-header li.top3 span:first-child {
        background: url(../../assets/images/top3.png) 4px 4px no-repeat;
    }

    .ranking-comp > ul.table-list li.top1 span:first-child,
    .ranking-comp > ul.table-header li.top1 span:first-child,
    .ranking-comp > ul.table-list li.top2 span:first-child,
    .ranking-comp > ul.table-header li.top2 span:first-child,
    .ranking-comp > ul.table-list li.top3 span:first-child,
    .ranking-comp > ul.table-header li.top3 span:first-child {
        color: transparent;
        height: 48px;
    }

    .ranking-comp > ul.table-list li.t-header li,
    .ranking-comp > ul.table-header li.t-header li {
        padding: 0;
    }

    .ranking-comp > ul.table-list li.t-header span,
    .ranking-comp > ul.table-header li.t-header span {
        color: #fff;
    }

    .ranking-comp > ul.table-list li.items,
    .ranking-comp > ul.table-header li.items {
        background: #171c32;
    }

    .ranking-comp > ul.table-list li.items.user,
    .ranking-comp > ul.table-header li.items.user {
        background: #212a4b;
        height: 58px;
    }

    .ranking-comp .btn-ctrl {
        position: absolute;
        top: 12px;
        right: 12px;
    }

    .ranking-comp div.flag {
        width: 97px;
        height: 97px;
        background: url(../../assets/images/flag_ranking.png) no-repeat;
        position: absolute;
        top: 0;
        left: 0;
    }

    .ranking-comp div.flag .msg {
        color: #fff;
        -webkit-transform: rotate(-45deg) translate(-22%, -25%);
        transform: rotate(-45deg) translate(-22%, -25%);
    }

    .ranking-comp div.flag .msg p {
        margin: 0;
        text-align: center;
        font-size: 12px;
    }

    .ranking-comp div.flag .msg p:first-child {
        font-weight: 600;
        font-size: 19px;
    }

    @media screen and (max-width: 768px) {
        .ranking-comp > ul.table-list.data {
            height: 150px;
        }
        .ranking-comp > ul.table-list.data#is-dice {
            height: 150px;
        }
        .ranking-comp > ul.table-list.data.show-more#is-dice,
        .ranking-comp > ul.table-list.data.show-more {
            height: 446px;
        }
        .ranking-comp div.info-font {
            display: none;
        }
        .ranking-comp div.info-font.show-more {
            display: block;
        }
        .ranking-comp > ul.table-list,
        .ranking-comp > ul.table-header {
            display: none;
        }
        .ranking-comp > ul.table-list.user {
            display: block;
            margin: 0 -16px;
        }
        .ranking-comp > ul.table-list.user.show-more {
            display: block;
            margin: 0 0px;
        }
        .ranking-comp > ul.table-list.show-more,
        .ranking-comp > ul.table-header.show-more {
            display: block;
        }
        .ranking-comp .btn-ctrl {
            display: none;
        }
        .ranking-comp .btn-ctrl.show-more {
            display: block;
            right: 0;
        }
    }

    @media screen and (max-width: 500px) {
        .ranking-comp h2 .fa {
            display: none;
        }
        .ranking-comp > ul.table-list,
        .ranking-comp > ul.table-header {
            padding-right: 6px;
        }
        .ranking-comp > ul.table-list.user {
            padding-right: 15px;
        }
        .ranking-comp h2 {
            text-align: center;
            color: #fff;
            font-size: 17px;
            padding: 19px 0;
            margin: 0;
        }
    }

    .neon1 {
        color: rgb(233, 30, 99);
        animation: neon1 0.75s ease-in-out 0s infinite alternate none running;
    }

    @-webkit-keyframes neon1 {

        from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
        }
        to {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
        }
    }
</style>
