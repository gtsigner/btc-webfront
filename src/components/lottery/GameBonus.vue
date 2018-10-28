<template>
    <div class="game-bonus">
        <div class="vip-comp">
            <div class="top">
                <img src="../../assets/images/rectangle_rotate.png" alt="" class="top_rorate_img"
                     style="width: 100%; position: absolute; top: -15%;">
                <div class="recent_pool">
                    <div class="rect-pool-bg">
                        <p class="title">当前彩池：</p><span style="color: white;"> 419.4065 EOS</span>
                    </div>
                </div>
                <div class="ranking">
                    <div style="position: relative; margin-bottom: 10px;"><img
                        src="../../assets/images/lottery_title0.png"
                        alt=""
                        style="width: 66%;"><span class="pm-jl">排名奖励</span>
                    </div>
                    <div class="recent_pool_phone">
                        <div class="pool-2-bg">
                            <p style="margin: 0px; font-size: 12px; color: white; font-weight: 300;">当前彩池：</p><span
                            style="color: white;"> 419.4065 EOS</span></div>
                    </div>
                    <div>
                        <div class="first_award">
                            #1 奖励
                        </div>
                    </div>
                    <div class="ranking_data"><h3>209.7032</h3>
                        <div><span class="line"></span><span
                            class="chara"><img
                            src="../../assets/images/eos_icon_big_new.png"
                            style="display: inline-block; width: 1.25rem; height: 1.25rem;"><font
                            style="color: rgb(90, 72, 5); font-weight: 400; font-size: 1.58rem; vertical-align: middle; margin-left: 0.41rem; font-family: Microsoft;">EOS</font></span><span
                            class="line"></span></div>
                    </div>
                </div>
            </div>
            <div class="center">
                <div class="row">
                    <div id="top-2" class="col-lg-6 col-md-6 col-sm-6 col-xs-12 second">
                        <div class="ranking">
                            #<em style="font-size: 1.25rem; font-weight: 400;">2</em> 奖励
                        </div>
                        <div class="chara"><h3>104.8516</h3>
                            <div><span class="line"></span><span
                                class="chara"><img src="../../assets/images/eos_icon_big_new.png"
                                                   style="display: inline-block; width: 1.25rem; height: 1.25rem;"><font

                                style="font-weight: 400; font-size: 1.25rem; vertical-align: middle; margin-left: 0.41rem; font-family: Microsoft;">EOS</font></span><span
                                class="line"></span></div>
                        </div>
                    </div>
                    <div id="top-3" class="col-lg-6 col-md-6 col-sm-6 col-xs-12 second">
                        <div class="ranking">
                            #<em style="font-size: 1.25rem; font-weight: 400;">3</em> 奖励
                        </div>
                        <div class="chara"><h3>52.4258</h3>
                            <div><span class="line"></span><span
                                class="chara"><img src="../../assets/images/eos_icon_big_new.png"
                                                   style="display: inline-block; width: 1.25rem; height: 1.25rem;"><font

                                style="font-weight: 400; font-size: 1.25rem; vertical-align: middle; margin-left: 0.41rem; font-family: Microsoft;">EOS</font></span><span
                                class="line"></span></div>
                        </div>
                    </div>
                    <div id="top-4" class="col-lg-6 col-md-6 col-sm-6 col-xs-12 second">
                        <div class="ranking">
                            #<em style="font-size: 1.25rem; font-weight: 400;">4</em> 奖励
                        </div>
                        <div class="chara"><h3>26.2129</h3>
                            <div><span class="line"></span><span
                                class="chara"><img src="../../assets/images/eos_icon_big_new.png"
                                                   style="display: inline-block; width: 1.25rem; height: 1.25rem;"><font

                                style="font-weight: 400; font-size: 1.25rem; vertical-align: middle; margin-left: 0.41rem; font-family: Microsoft;">EOS</font></span><span
                                class="line"></span></div>
                        </div>
                    </div>
                    <div id="top-5" class="col-lg-6 col-md-6 col-sm-6 col-xs-12 second">
                        <div class="ranking">
                            #<em style="font-size: 1.25rem; font-weight: 400;">5</em> 奖励
                        </div>
                        <div class="chara"><h3>13.1064</h3>
                            <div><span class="line"></span><span
                                class="chara"><img src="../../assets/images/eos_icon_big_new.png"
                                                   style="display: inline-block; width: 1.25rem; height: 1.25rem;"><font

                                style="font-weight: 400; font-size: 1.25rem; vertical-align: middle; margin-left: 0.41rem; font-family: Microsoft;">EOS</font></span><span
                                class="line"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GameBonus"
    }
</script>

<style scoped lang="scss">

    .vip-comp {
        max-width: 53rem;
        margin: 0 auto;
        position: relative;
        font-family: "impact";
        .top {
            width: 100%;
            background: url("../../assets/images/rectangle5.png") center center;
            height: 33.33rem;
            background-size: 100% 100%;
            position: relative;
            overflow: hidden;
            .recent_pool {
                position: absolute;
                top: 82.72px;
                .rect-pool-bg {
                    background: url(../../assets/images/pool1.gif) center center no-repeat;
                    .title {
                        margin: 0;
                        font-size: 12px;
                        color: white;
                        font-weight: 300;
                    }
                }
                > div {
                    background: white;
                    color: #ebb80c;
                    min-width: 130px;
                    padding-left: 10px;
                    border-top-right-radius: 30px;
                    border-bottom-right-radius: 30px;
                    font-size: 1.63rem
                }
                > div font {
                    font-size: 18.72px;
                    font-weight: 300;
                }
                > p {
                    color: black;
                    text-align: left;
                    padding-left: 13.28px;
                    margin-bottom: 0;
                }
            }

            .top_rorate_img {
                -webkit-animation: spin-data 8s linear 0s infinite;
                animation: spin-data 8s infinite 0s;
            }

            .ranking {
                text-align: center;
                padding-top: 2.5rem;
                padding-bottom: 2.5rem;
                position: absolute;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
                max-width: 25rem;
                width: 100%;
                .first_award {
                    margin: 0 auto;
                    margin-top: 1rem;
                    padding: 0.67rem;
                    background: #c09b11;
                    color: white;
                    border-radius: 30px;
                    max-width: 11.33rem;
                    width: 100%;
                }
                .recent_pool_phone {
                    max-width: 120px;
                    border-radius: 30px;
                    overflow: hidden;
                    display: none;
                    margin: 0 auto;
                }
                .ranking_data {
                    max-width: 25rem;
                    width: 100%;
                    height: 16rem;
                    margin: 0 auto;
                    text-align: center;
                    background: url(../../assets/images/rectangle1.png) center center;
                    padding-top: 5rem;
                    h3 {
                        font-size: 2.33rem;
                        color: #5a4805;
                        margin-top: 20px;
                        font-family: inherit;
                        font-weight: 500;
                        line-height: 1.1;
                        margin-bottom: 10px;
                    }
                    .line {
                        display: inline-block;
                        max-width: 53.28px;
                        width: 100%;
                        border-top: 1px solid #deb72b;
                        margin: 0 10.72px;
                        vertical-align: middle;
                    }
                    > .chara {
                        color: #5a4805;
                    }
                    > .chara img {
                        vertical-align: middle;
                    }
                }
            }
        }

        .pool-2-bg {
            background: url(../../assets/images/pool2.gif) center center no-repeat;
            min-width: 120px;
        }
    }

    @-webkit-keyframes spin-data {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin-data {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .vip-comp .top .ranking h2 {
        font-weight: 900;
        font-size: 51.52px;
    }

    .vip-comp .center {
        padding: 34.72px 0;
        background: #434e53;
    }

    .pm-jl {
        position: absolute;
        display: inline-block;
        width: 100%;
        left: 0;
        top: 16%;
        font-size: 20px;
        font-weight: 600;
    }

    .vip-comp .center .row {
        margin: 0;
    }

    .vip-comp .center .row > div {
        margin-top: 13.28px;
        .ranking {
            padding: 8px;
            color: white;
            background: #283539;
            border-radius: 30px;
            text-align: center;
            max-width: 152px;
            width: 100%;
            margin: 0 auto;
            white-space: nowrap;
        }
        > .chara {
            max-width: 16.67rem;
            width: 100%;
            height: 11.17rem;
            padding-top: 3.17rem;
            text-align: center;
            margin: 0 auto;
        }
        > .chara h3 {
            font-size: 2rem;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        > .chara .line {
            display: inline-block;
            max-width: 2.33rem;
            width: 100%;
            margin: 0 0.67rem;
            vertical-align: middle;
        }
    }

    .vip-comp .center .row #top-2 {
        > .chara {
            background: url("../../assets/images/rectangle4.png") center center;
            h3 {
                color: #144470;
            }
            .line {
                border-top: 1px solid #1b5482;
            }
        }

    }

    .vip-comp .center .row #top-3 {
        > .chara {
            background: url("../../assets/images/rectangle3.png") center center;
            h3 {
                color: #be723e;
            }
            .line {
                border-top: 1px solid #bb713f;
            }

        }
    }

    .vip-comp .center .row #top-4 {
        > .chara {
            background: url("../../assets/images/rectangle2.png") center center;
            padding-top: 2rem !important;
            h3 {
                color: #c9d4d9;
            }
            .line {
                border-top: 1px solid #bcc3cc;
            }
        }
    }

    .vip-comp .center .row #top-5 {
        > .chara {
            background: url("../../assets/images/rectangle2.png") center center;
            padding-top: 2rem !important;

            h3 {
                color: #c9d4d9;
            }
            .line {
                border-top: 1px solid #bcc3cc;
            }
        }
    }

    .vip-comp .bottom {
        padding: 18.72px 0;
        background: #2f3b42;
        text-align: center;
    }

    .vip-comp .bottom a {
        color: #818d94;
    }

    .vip-comp .bottom a img {
        margin-right: 6.72px;
        vertical-align: middle;
    }

    .vip-comp .bottom a i {
        margin-left: 6.72px;
        vertical-align: middle;
    }

    @media screen and (max-width: 460px) {
        .vip-comp .top .recent_pool {
            display: none;
        }
        .vip-comp .top .recent_pool_phone {
            display: block !important;
        }
        .vip-comp .top .ranking {
            padding-top: 2.17rem !important;
        }
        .vip-comp .top .ranking h2 {
            margin-bottom: 0;
            margin-top: 0.833rem;
        }
    }

    @media screen and (max-width: 600px) {
        .top_rorate_img {
            top: -5% !important;
        }
    }

    @media screen and (max-width: 520px) {
        .top_rorate_img {
            top: 0% !important;
        }
    }

    @media screen and (max-width: 480px) {
        .top_rorate_img {
            top: 10% !important;
        }
    }

    @media screen and (max-width: 414px) {
        .top_rorate_img {
            display: none;
        }
    }

    @media screen and (max-width: 768px) {
        .vip-comp {
            overflow-y: auto;
        }
    }

    @media screen and (max-width: 668px) {
        .vip-comp .close_icon {
            right: 0.83rem !important;
        }
    }
</style>
