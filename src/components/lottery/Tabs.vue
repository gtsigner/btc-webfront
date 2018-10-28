<template>
    <div class="table-list">
        <ul class="tabs">
            <li class="tab-li"
                @click="check(tab)"
                :class="{'active':current.i===tab.i}" v-for="(tab,i) in tabs" :key="i">{{tab.title}}
            </li>
        </ul>
        <table class="table table-striped text-center">
            <thead>
            <tr>
                <th style="width: 14%;">时间</th>
                <th style="width: 8%;">投注者</th>
                <th class="only-pc" style="width: 12%;">小于该号码获胜</th>
                <th class="only-pc" style="width: 12%;">投注</th>
                <th class="only-pc" style="width: 8%;">开奖号码</th>
                <th style="width: 15%;">奖金</th>
            </tr>
            </thead>
            <tbody>
            <tr class="win" v-for="i in 5">
                <td>01:17:12<i></i><em></em></td>
                <td>bettobigmoon<em></em></td>
                <td class="only-pc">50<em></em></td>
                <td class="only-pc">1.0000 EOS<em></em></td>
                <td class="only-pc">7<em></em></td>
                <td>2.0102 EOS<em></em></td>
            </tr>
            <tr v-for="i in 20">
                <td>01:17:12<i></i><em></em></td>
                <td>bettobigmoon<em></em></td>
                <td class="only-pc">50<em></em></td>
                <td class="only-pc">1.0000 EOS<em></em></td>
                <td class="only-pc">7<em></em></td>
                <td>2.0102 EOS<em></em></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        data() {
            return {
                current: {
                    i: 1
                },
                tabs: [
                    {i: 0, title: '所有投注',},
                    {i: 1, title: '我的投注'},
                    {i: 2, title: '最高投注额'},
                    {i: 3, title: '最高奖金'},
                    {i: 4, title: '淨利润'},
                    {i: 5, title: '总投注额'},
                    {i: 6, title: '总奖金'},
                    {i: 7, title: '总投注次数'}
                ],
            }
        },
        methods: {
            async check(tab) {
                this.current.i = tab.i;
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

    .table-list {
        .table {
            background: transparent;
            padding-bottom: 20px;
            tr {
                border: none !important;
                background-color: transparent;
                padding: 0;
            }
            td {
                text-align: center;
                color: #fff;
                max-width: 265px;
                padding: 15px 4px;
                font-size: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                border: none !important;
            }
            th {
                background-color: #1d233e;
                color: #989a99;
                border: none !important;
                height: 45px;
                text-align: center !important;
                line-height: 45px;
            }
            tbody {
                tr {
                    background: #4c2d2e;
                    border-top: 1px solid red !important;;
                }
                tr.win {
                    border-top: 1px solid green !important;
                    background: #334e47;
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
    }
</style>
