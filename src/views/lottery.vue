<template>
    <div class="game-comp-lottery">
        <ul class="tabs-bar">
            <li class="ctrl-items">
                <ul>
                    <li v-for="(tab,i) in tabs"
                        @click="choose(tab)"
                        :class="{'active':i===current.i}">
                        <i :class="tab.icon"></i>
                        {{$t(tab.title)}}
                    </li>
                </ul>
            </li>
            <li class="show-items">
                <div>0</div>
                <p>{{$t('Your Tickets')}}</p><i class="fa fa-user"></i></li>
            <li class="show-items">
                <div>0%</div>
                <p>{{$t('Win Chance')}}</p><img src="../assets/images/ticket_icon.jpg" alt=""></li>
            <li class="show-items pool-count">
                <div>415826</div>
                <p>{{$t('Total Tickets')}}</p><img src="../assets/images/ticket_icon.jpg" alt=""></li>
        </ul>

        <!--动态组件-->
        <component :is="current.comp"></component>

    </div>
</template>

<script>
    import Comps from '../components/lottery';

    export default {
        name: "home",
        components: {
            ...Comps
        },
        data() {
            return {
                current: {
                    i: 0,
                    title: '',
                    comp: 'game-pool',
                },
                tabs: [
                    {
                        i: 0,
                        title: 'Lottery Pot',
                        comp: 'game-pool',
                        icon: 'fa fa-pie-chart',
                    },
                    {
                        i: 1,
                        title: 'Prizes',
                        comp: 'game-bonus',
                        icon: 'fa fa-bar-chart',
                    },
                    {
                        i: 2,
                        title: 'Buy Tickets',
                        comp: 'game-bet',
                        icon: 'fa fa-life-ring',
                    },
                    {
                        i: 3,
                        title: 'History',
                        comp: 'game-log',
                        icon: 'fa fa-clock-o',
                    },
                ],
                total: {}
            }
        },
        methods: {
            choose(tab) {
                this.current = tab;
            }
        }
    }
</script>

<style scoped lang="scss">
    .game-comp-lottery {
        background: #161933 url(../assets/images/bg_77.jpg) no-repeat center 0;
        color: #fff;
        max-width: 1180px;
        position: relative;
        margin: 0 auto 50px;
        padding: 28px 70px 0 265px;
        .tabs-bar {
            width: 194px;
            position: absolute;
            top: 28px;
            left: 0;
            > li {
                background-color: #1c233f;
                border-radius: 4px;
                margin-bottom: 6px;
                font-size: 14px;
                text-align: center;
                color: #8489a7;
                > ul li + li {
                    border-top: 1px solid #171a33;
                }
            }
            > li.show-items {
                padding: 4px 0 0;
                min-height: 97px;
                div {
                    font-size: 28px;
                    font-weight: 600;
                    color: #fff;
                }
                p {
                    color: #8489a7;
                    margin-bottom: 10px;
                    font-size: 14px;
                    line-height: 20px;
                }
                img {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    margin-top: -3px;
                }
                i {
                    color: #111832;
                    font-size: 48px;
                    margin-top: -3px;
                    margin-bottom: 5px;
                }
            }
            .ctrl-items {
                > ul > li {
                    text-align: left;
                    padding: 15px 4px 15px 2em;
                    cursor: pointer;
                    border-radius: 2px;
                    i {
                        margin-right: 10px;
                    }
                    &:hover {
                        background-color: rgba(255, 255, 255, .06);
                    }
                    &.active {
                        color: #f4c821;
                    }
                }
            }
        }
    }

    /*兼容小屏幕方案*/
    @media screen and (max-width: 1180px) {
        .game-comp-lottery {
            padding: 0 15px;
            min-height: 200px;
            ul.tabs-bar {
                position: relative;
                top: 8px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                width: 100%;
                margin-bottom: 16px;
                > li {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 100%;
                    flex: 0 0 100%;
                    margin-right: 8px;
                    > ul {
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                    }
                    > ul li {
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        padding: 12px 4px !important;
                        text-align: center !important;
                        font-size: 2.4vw;
                        cursor: pointer;
                        border-radius: 2px;
                        i {
                            margin-right: 3px !important;
                        }
                        + li {
                            border-top: 1px solid #171a33;
                        }
                    }
                }
                > li.show-items {
                    padding: 5px 0 !important;
                    margin: 0;
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 49%;
                    flex: 0 0 49%;
                    min-height: 22px;
                    div {
                        font-size: 6vw;
                    }
                    i.fa, img {
                        display: none !important;
                    }
                    p {
                        font-size: 2.5vw;
                        margin-top: 0;
                        color: #8489a7;
                        margin-bottom: 4px;
                    }
                    &.pool-count {
                        margin: 6px 0 0;
                        -webkit-box-flex: 0;
                        -ms-flex: 0 0 100%;
                        flex: 0 0 100%;
                    }
                }
            }
        }
    }
</style>
