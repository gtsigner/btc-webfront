<template>
    <div class="table-list">
        <ul class="tabs">
            <li class="tab-li"
                @click="check(tab)"
                :class="{'active':current.i===tab.i}" v-for="(tab,i) in tabs" :key="i">
                {{$t(tab.title)}}
            </li>
        </ul>
        <component :is="current.comp" :search="current.search"></component>
    </div>
</template>

<script>
    import Tabs from '../tabs/index';

    export default {
        name: "Tabs",
        components: {
            ...Tabs
        },
        data() {
            return {
                current: {
                    i: 1,
                    comp: '',
                    search: {}
                },
                tabs: [
                    //mock数据
                    {i: 0, title: 'All Bets', comp: 'tab-bets', search: {}},
                    {i: 1, title: 'My Bets', comp: 'tab-bets', search: {t: 0}},
                    {
                        i: 2, title: 'Top Wager', comp: 'tab-top', search: {
                            t: 1,
                            title: 'Top Wager'
                        }
                    },
                    {
                        i: 3, title: 'Top Payout', comp: 'tab-top', search: {
                            t: 2,
                            title: 'Top Payout'
                        }
                    },
                    {
                        i: 4, title: 'Net Profit', comp: 'tab-top', search: {
                            t: 3,
                            title: 'Net Profit'
                        }
                    },
                    {
                        i: 5, title: 'Total Wager', comp: 'tab-top', search: {
                            t: 4,
                            title: 'Total Wager'
                        }
                    },
                    {
                        i: 6, title: 'Total Payout', comp: 'tab-top', search: {
                            t: 5,
                            title: 'Total Payout'
                        }
                    },
                    {
                        i: 7, title: 'Play Count', comp: 'tab-top', search: {
                            t: 6,
                            title: 'Play Count'
                        }
                    }
                ],
            }
        },
        methods: {
            async check(tab) {
                this.current = tab;
            }
        }
    }
</script>

<style scoped lang="scss">

    .table-list {
        margin-top: 20px;
        text-align: left;
        min-height: 550px;
        margin-bottom: 40px;
        background-color: #1c233f;
        .tabs {
            display: flex;
            background-color: #1c233f;
            border-bottom: 1px solid #333853;
            .tab-li {
                margin-left: 25px;
                font-size: 17px;
                color: #97989a;
                padding: 17px 5px;
                cursor: pointer;
                white-space: nowrap;
                &.active {
                    color: #fff;
                    font-weight: 600;
                    border-bottom: 2px solid #fff;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .table-list {
            ul.tabs {
                overflow-x: scroll;
            }
        }
        .only-pc {
            display: none;
        }
    }

</style>
