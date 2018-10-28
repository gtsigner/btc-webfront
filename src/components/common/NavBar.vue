<template>
    <div class="nav-bar">
        <div class="bx">
            <div class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span><span
                            class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                        </button>
                        <a href="/" class="navbar-brand">
                            <img src="../../assets/images/logo.png" alt="" class="logo-img">
                        </a>
                    </div>
                    <div class="navbar-collapse collapse" aria-expanded="false">
                        <ul class="nav navbar-nav navbar-right">
                            <!--图标-->
                            <li class="no-shadow">
                                <a href="#" style="padding: 12px 20px;">
                                    <div class="share-link">
                                        <a href="#" target="_blank" data-title="Telegram">
                                            <i class="fa fa-send"></i>
                                        </a>
                                        <a href="#" target="_blank" data-title="Twitter">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </div>
                                </a></li>
                            <li class="dropdown"><a href="#" data-toggle="dropdown" role="button"
                                                    aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">
                                <!----><span class="country-flag china">简体中文</span><!----><!----><!----><span
                                class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#" class="country-flag usa">英文</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#" class="country-flag china">简体中文</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#" class="country-flag hongkong">繁体中文</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#" class="country-flag korea">韩文</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#" class="country-flag russia">俄文</a></li>
                                </ul>
                            </li><!---->
                            <li><a href="#">邀请好友</a></li>
                            <li><a href="#">玩法介绍</a></li><!---->
                            <li><a href="#">红利</a></li>
                            <li><a href="/vip" class="">VIP</a></li>
                            <li class="user-dashboard">
                                <a href="#" class="action-box">
                                    <el-button type="primary" size="mini">
                                        <span><i class="fa fa-user"></i> 登入</span>
                                    </el-button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                langs: [
                    {title: ''},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

    .user-dashboard {
        .action-box {
            cursor: auto;
            padding: 16px 15px 0 !important;
        }
    }

    .navbar-brand {
        float: left;
        height: 50px;
        padding: 15px 15px;
        font-size: 18px;
        line-height: 20px;
    }

    .nav-bar {
        overflow: hidden;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: #1c233f;
        position: relative;
        z-index: 4;
        .bx {
            max-width: 1180px;
            margin: 0 auto;
        }
        .logo {
            width: auto;
        }
        .nav-group {
            padding: 10px 15px;
            height: 60px;
        }
        .navbar-header {
            > a {
                padding: 10px 15px;
            }
        }
        .share-link {
            a {
                height: 34px;
                width: 34px;
                line-height: 30px;
                font-size: 18px;
                &:last-child {
                    font-size: 22px;
                }
            }
        }

        .navbar.navbar-default {
            background-color: #1c233f;
            border: none;
            .navbar-nav {
                & > .open > a,
                & > .open > a:focus,
                & > .open > a:hover {
                    color: #eee;
                    background-color: rgba(0, 0, 0, .1);
                }
                & > .li-active > a {
                    color: #eee;
                }
            }
            .navbar-nav > li > a {
                color: #eee;
                font-size: 13px;
                &:hover {
                    color: #fff;
                }
            }
            .navbar-nav > li.li-active a {
                background-color: #fb9a37;
            }

        }
        .navbar-brand {
            float: left;
            padding: 10px 15px !important;
            font-size: 18px;
            line-height: 20px;
            width: 140px;
        }
        .navbar {
            margin-bottom: 0;
        }
        .navbar-right ul.link {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-display: flex;
            -moz-display: flex;
            -o-display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            min-height: 50px;
            margin-right: 16px;
            li {
                width: 18px;
                margin: 0 8px;
                img {
                    display: block;
                    width: auto;
                    height: auto;
                    margin: 0 auto;
                }

            }
        }
    }

    @media screen and (max-width: 768px) {
        .nav-bar .logo-img {
            width: 100%;
        }
        .nav-bar .navbar-brand{
            height: 50px;
            padding: 15px 15px !important;
            width: 140px;
        }
    }

    .nav-bar {
        //语言包
        .country-flag {
            padding: 5px 0 5px 42px;
            background: url(../../assets/images/flag_england.jpg) 9px 4px no-repeat;
            &.china {
                background-image: url(../../assets/images/flag_china.png);
            }
            &.korea {
                background-image: url(../../assets/images/flag_korea.jpg);
            }
        }
        .navbar-collapse {
            > ul > li > a {
                padding: 20px 12px;
                line-height: 20px;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        .nav-bar .navbar-right ul.link {
            display: none;
        }
    }
</style>
