<template>
    <div class="ranking-container">
        <div class="ranking-comp">
            <h2><i class="fa fa-bar-chart-o"></i> 今日排行榜 (03:16:29)</h2>
            <ul class="table-header " style="margin: 0px; padding: 0px;">
                <li class="t-header" style="height: 40px; padding: 6px 20px 0px;"><span
                    style="text-align: center; flex: 0 0 52px; display: inline-block;">排名</span><span>投注者</span><span>总投注额</span><span>奖励</span>
                </li>
            </ul>
            <ul id="is-dice" class="table-list data ">
                <li class="items top1"><span>1</span><span>bettobigmoon</span><span><em style="font-weight: 600;">165,712</em><em
                    style="font-size: 12px; padding-left: 4px;">EOS</em></span><span><em
                    style="font-weight: 600; color: rgb(41, 224, 141);">2500</em><em
                    style="font-size: 12px; padding-left: 4px;">EOS</em></span></li>
                <li class="items top100"><span>100</span><span>hellohellogc</span><span><em style="font-weight: 600;">1,803</em><em
                    style="font-size: 12px; padding-left: 4px;">EOS</em></span><span><em
                    style="font-size: 12px; padding-left: 4px;">-</em></span></li>
            </ul>
            <ul class="table-list user ">
                <li class="items user"><span>-</span><span>-</span><span><em style="font-weight: 600;">0.0000</em><em
                    style="font-size: 12px; padding-left: 4px;">EOS</em></span><span></span></li>
            </ul>
            <div class="info-font "
                 style="padding-left: 15px; padding-bottom: 5px; color: rgb(187, 187, 187); font-size: 13px;">*
                数据最多延迟三分钟并于每天UTC 00:00 重置
            </div>
            <div class="flag"><a target="_blank"
                                 href="https://medium.com/@betdice/betdice-event-week-is-being-extended-for-one-final-week-e255f1a76ed">
                <div class="msg"><p class="neon1"
                                    style="color: rgb(233, 30, 99); animation: neon1 0.75s ease-in-out 0s infinite alternate none running;">
                    4000
                </p>
                    <p>EOS大赠送</p></div>
            </a></div>
            <div class="btn-ctrl ">
                <button type="button" class="el-button el-button--info el-button--mini is-circle"
                        style="background: transparent;"><!----><i class="el-icon-arrow-left"></i><!----></button>
                <button type="button" class="el-button el-button--info el-button--mini is-circle"
                        style="background: transparent; cursor: auto; opacity: 0.2;"><!----><i
                    class="el-icon-arrow-right"></i><!----></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ranking"
    }
</script>

<style scoped lang="scss">

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
        > ul.table-list.data#is-dice {
            height: 245px;
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

    @-webkit-keyframes neon1 {
        from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
        }
        to {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
        }
    }
</style>
