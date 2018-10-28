<template>
    <div class="ctrl-board"><!---->
        <ul class="row-1">
            <li>
                <div class="title one">投注金额</div>
                <ol>
                    <li class="tokens-icon first"
                        style="background-image: url(&quot;/img/dice_icon_big.png&quot;); font-size: 20px; font-weight: 600;">
                        <i></i><input type="number" spellcheck="false"
                                      class="no-spin"><span>DICE</span></li>
                    <li class="btns">1/2</li>
                    <li class="btns add-line">2X</li>
                    <li class="btns">MAX</li>
                </ol>
            </li>
            <li>
                <div class="title two tokens-icon">赢取奖金</div>
                <ol>
                    <li id="win-currency" class="tokens-icon"
                        style="background-image: url(&quot;/img/dice_icon_big.png&quot;); font-size: 20px; font-weight: 600;">
                        201.0204<em
                        style="margin-left: 5px; font-size: 0.7em; color: rgb(153, 153, 153);">DICE</em>
                    </li>
                </ol>
            </li>
        </ul>
        <ul class="row-2">
            <li>
                <div class="title">小于该数获胜</div>
                <div class="content min50">50 <i></i></div>
            </li>
            <li class="add-line">
                <div class="title">赔率</div>
                <div class="content">2.01x</div>
            </li>
            <li>
                <div class="title">中奖概率</div>
                <div class="content">49%</div>
            </li>
        </ul>
        <div class="prog-bar">
            <div class="my-progress">
                <div class="leve1">
                    <div class="leve2" style="width: 50%;"><i></i><em>50</em></div><!----></div>
                <ul class="scale">
                    <li><span style="padding-left: 1px;">1</span></li>
                    <li><span style="position: relative; left: -7px;">25</span></li>
                    <li><span style="position: relative; left: -7px;">50</span></li>
                    <li><span style="position: relative; left: -7px;">75</span><span
                        style="padding-right: 0px; position: relative; right: -8px;">100</span></li>
                </ul>
            </div>
        </div>
        <div class="auto-ctrl"><span>自动投注</span>
            <div role="switch" class="el-switch" style="display: inline-block;"><input
                type="checkbox" name="" true-value="true" class="el-switch__input"><!----><span class="el-switch__core"
                                                                                                style="width: 40px; border-color: rgb(82, 84, 113); background-color: rgb(82, 84, 113);"></span>
                <!----></div>
            <span style="color: rgb(255, 255, 255); font-weight: 600;">关闭</span><i
                class="el-icon-question"><em
            >开启自动投注后，将会按当前投注设定自动投注直至取消，取消会有一两秒延迟，敬请留意</em></i></div>
        <div class="btn-bar">
            <div>
                <button class="login">登 入<!----></button>
            </div><!----><!----></div><!----></div>
</template>

<script>
    export default {
        name: "CtrlBoard"
    }
</script>

<style scoped lang="scss">
    .center-view  {
        max-width: 1180px;
        margin: 0 auto;
        position: relative;
    }

    .center-view .ranking-container  {
        position: absolute;
        top: 20px;
        right: 0px;
        width: 500px;
    }

    .ctrl-board  {
        max-width: 650px;
        padding: 28px 0 50px;
        color: #ffffff;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .ctrl-board .tab-btns  {
        text-align: center;
        padding: 6px 0 18px;
    }

    .ctrl-board .tab-btns button  {
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

    .ctrl-board .tab-btns button.active  {
        background-color: #f1940f;
    }

    .ctrl-board > ul.row-1[data-v-4bb3f238],
    .ctrl-board > ul.row-2  {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .ctrl-board > ul.row-1 > li[data-v-4bb3f238],
    .ctrl-board > ul.row-2 > li  {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .ctrl-board > ul.row-1 > li > ol[data-v-4bb3f238],
    .ctrl-board > ul.row-2 > li > ol  {
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

    .ctrl-board > ul.row-1 > li > ol > li[data-v-4bb3f238],
    .ctrl-board > ul.row-2 > li > ol > li  {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        line-height: 36px;
    }

    .ctrl-board > ul.row-1 > li > ol > li.first[data-v-4bb3f238],
    .ctrl-board > ul.row-2 > li > ol > li.first  {
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

    .ctrl-board > ul.row-1 > li > ol > li.first input[data-v-4bb3f238],
    .ctrl-board > ul.row-2 > li > ol > li.first input  {
        width: 100%;
        height: 98%;
        background-color: transparent;
        text-align: center;
        border: none;
    }

    .ctrl-board > ul.row-1 > li > ol > li.first span[data-v-4bb3f238],
    .ctrl-board > ul.row-2 > li > ol > li.first span  {
        position: absolute;
        right: 0px;
        top: 3px;
        font-size: 0.7em;
        text-align: left;
        width: 48px;
        color: #999;
    }

    .ctrl-board > ul.row-1 > li > ol > li.btns[data-v-4bb3f238],
    .ctrl-board > ul.row-2 > li > ol > li.btns  {
        cursor: pointer;
        border-radius: 3px;
    }

    .ctrl-board > ul.row-1 > li > ol > li.btns[data-v-4bb3f238]:hover,
    .ctrl-board > ul.row-2 > li > ol > li.btns[data-v-4bb3f238]:hover {
        background-color: #3c435b;
        text-shadow: 0 0 5px #fff;
    }

    .ctrl-board > ul.row-1 > li[data-v-4bb3f238]:first-child,
    .ctrl-board > ul.row-2 > li[data-v-4bb3f238]:first-child {
        -webkit-box-flex: 1.2;
        -ms-flex: 1.2;
        flex: 1.2;
        margin-right: 2.2%;
    }

    .ctrl-board > ul.row-1 div.title[data-v-4bb3f238],
    .ctrl-board > ul.row-2 div.title  {
        font-size: 13px;
        color: #898a8c;
    }

    .ctrl-board > ul.row-1 div.title.one[data-v-4bb3f238],
    .ctrl-board > ul.row-2 div.title.one[data-v-4bb3f238],
    .ctrl-board > ul.row-1 div.title.two[data-v-4bb3f238],
    .ctrl-board > ul.row-2 div.title.two  {
        padding: 7px 0 4px;
        padding-left: 33px;
    }

    .ctrl-board > ul.row-1 div.title.one[data-v-4bb3f238],
    .ctrl-board > ul.row-2 div.title.one  {
        background: url(/img/round2.png) 5px center no-repeat;
    }

    .ctrl-board > ul.row-1 div.title.two[data-v-4bb3f238],
    .ctrl-board > ul.row-2 div.title.two  {
        background: url(/img/goldcoin.png) 5px center no-repeat;
    }

    .ctrl-board > ul.row-1 .tokens-icon[data-v-4bb3f238],
    .ctrl-board > ul.row-2 .tokens-icon  {
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 10px center;
    }

    .ctrl-board > ul.row-2  {
        background-color: #1c233f;
        padding: 25px 0;
        border-radius: 3px;
        text-align: center;
    }

    .ctrl-board > ul.row-2 .content  {
        font-size: 34px;
        font-weight: 600;
    }

    .ctrl-board li.add-line  {
        position: relative;
        margin-left: 1px;
        margin-right: 1px;
    }

    .ctrl-board li.add-line[data-v-4bb3f238]:after,
    .ctrl-board li.add-line[data-v-4bb3f238]:before {
        content: "";
        display: block;
        position: absolute;
        background-color: #181e3a;
        width: 1px;
        height: 18px;
        top: 9px;
    }

    .ctrl-board li.add-line[data-v-4bb3f238]:after {
        left: -1px;
    }

    .ctrl-board li.add-line[data-v-4bb3f238]:before {
        right: -1px;
    }

    .ctrl-board > ul.row-2 li.add-line[data-v-4bb3f238]:after,
    .ctrl-board > ul.row-2 li.add-line[data-v-4bb3f238]:before {
        height: 55px;
        top: 5px;
    }

    .ctrl-board .min50 > i  {
        display: inline-block;
        width: 12px;
        height: 16px;
        background: url(/img/xiajiantou.png) 0px 0px no-repeat;
        position: relative;
        top: 1px;
    }

    .ctrl-board .btn-bar  {
        position: relative;
    }

    .ctrl-board .btn-bar .current-eos  {
        position: absolute;
        left: 0px;
        font-size: 22px;
        font-weight: 600;
        top: 2%;
        padding: 7px 0;
        padding-left: 36px;
        background-repeat: no-repeat;
        background-position: 4px center;
        background-size: 34px;
    }

    .ctrl-board .btn-bar .current-eos .move-num  {
        position: absolute;
        top: 80px;
        left: 42px;
        color: lime;
        font-size: 22px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        display: none;
    }

    .ctrl-board .btn-bar .current-eos.dice  {
        left: auto;
        right: 0px;
        padding-left: 35px;
    }

    .ctrl-board .btn-bar .current-eos.dice i  {
        color: #6a6a6a;
        cursor: pointer;
    }

    .ctrl-board .btn-bar .current-eos.dice i[data-v-4bb3f238]:hover {
        color: #aaa;
    }

    .ctrl-board .btn-bar button  {
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

    .ctrl-board .btn-bar button[data-v-4bb3f238]:hover {
        background-color: #20abd7;
    }

    .ctrl-board .btn-bar button.login  {
        border-radius: 23px;
    }

    .ctrl-board .loading-cover  {
        position: absolute;
        width: 110%;
        height: 100%;
        z-index: 9;
        top: 0;
        left: -5%;
        background: -webkit-gradient(linear, left top, right top, from(rgba(23, 26, 51, .88)), color-stop(rgba(23, 26, 51, .98)), color-stop(rgba(23, 26, 51, .98)), to(rgba(23, 26, 51, .88)));
        background: linear-gradient(to right, rgba(23, 26, 51, .88), rgba(23, 26, 51, .98), rgba(23, 26, 51, .98), rgba(23, 26, 51, .88));
    }

    .ctrl-board .loading-cover ul  {
        width: 220px;
        height: 220px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -110px;
        margin-left: -110px;
    }

    .ctrl-board .loading-cover ul li  {
        color: #fff;
        font-size: 22px;
        font-weight: 600;
        padding: 2px 0;
        text-align: center;
    }

    .ctrl-board .loading-cover ul li[data-v-4bb3f238]:first-child {
        width: 112px;
        height: 91px;
        background: url(/img/loading.gif);
        margin: 0 auto;
    }

    .ctrl-board .loading-cover ul li[data-v-4bb3f238]:last-child {
        color: #a1a1a1;
        font-size: 14px;
        font-weight: 400;
    }

    .ctrl-board .auto-ctrl  {
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

    .ctrl-board .auto-ctrl > span  {
        position: relative;
        color: #a0a8c4;
        top: 2px;
        padding: 0 6px;
    }

    .ctrl-board .auto-ctrl > i  {
        font-size: 22px;
        position: relative;
        color: #6a6a6a;
        top: 2px;
        padding: 0 6px;
        cursor: pointer;
    }

    .ctrl-board .auto-ctrl > i[data-v-4bb3f238]:hover {
        color: #aaaaaa;
    }

    .ctrl-board .auto-ctrl > i:hover em  {
        display: block;
    }

    .ctrl-board .auto-ctrl > i em  {
        display: none;
        position: absolute;
        top: 0;
        -webkit-transform: translate(0, -115%);
        transform: translate(0, -115%);
        right: 15px;
        width: 180px;
        font-size: 12px;
        background-color: #444;
        color: #ccc;
        font-size: 15px;
    }
</style>
