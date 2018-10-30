<template>
    <table class="table table-striped text-center">
        <thead>
        <tr>
            <th style="width: 14%;">{{$t('Rank')}}</th>
            <th style="width: 8%;">{{$t('Tab Bettor')}}</th>
            <th style="width: 15%;">{{$t(search.title)}}</th>
        </tr>
        </thead>
        <tbody>
        <tr class="win" v-for="i in len">
            <td>01:17:12<i></i><em></em></td>
            <td>bettobigmoon<em></em></td>
            <td>2.0102 EOS<em></em></td>
        </tr>
        <tr v-for="i in len">
            <td>01:17:12<i></i><em></em></td>
            <td>bettobigmoon<em></em></td>
            <td>2.0102 EOS<em></em></td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "TabTop",
        props: {
            search: Object
        },
        data() {
            return {
                data: [],
                len: 20,
            }
        },
        methods: {
            load() {
                this.len = Math.floor(Math.random() * 5) + 1;
            }
        },
        watch: {
            'search'() {
                this.load();
            }
        },
        mounted() {
            this.load();
        }
    }
</script>

<style scoped lang="scss">
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
</style>
