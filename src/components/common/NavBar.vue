<template>
    <div class="nav-bar">
        <div class="bx">
            <div class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" data-toggle="collapse"
                                data-target="#bar-menu"
                                aria-expanded="false" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span><span
                            class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                        </button>
                        <router-link to="/" class="navbar-brand">
                            <img src="../../assets/images/logo.png" alt="" class="logo-img">
                        </router-link>
                    </div>
                    <div id="bar-menu" class="navbar-collapse collapse" aria-expanded="false">
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
                            <li class="dropdown">
                                <a href="javascript:void(0);" data-toggle="dropdown" role="button" aria-haspopup="true"
                                   aria-expanded="false" class="dropdown-toggle">
                                    <span class="country-flag" :class="lang.icon">{{$t(lang.title)}}</span>
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu lang-menus">
                                    <li v-for="(lang,i) in langs">
                                        <a @click="chooseLang(lang.locale)"
                                           class="country-flag"
                                           :class="lang.icon">{{$t(lang.title)}}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li @click="modals.invite=true"><a href="#">{{$t('Referral')}}</a></li>
                            <li @click="modals.help=true"><a href="#">{{$t('How to Play')}}</a></li>
                            <li><a href="#">{{$t('Payout')}}</a></li>
                            <li><a href="/vip" class="">{{$t('VIP')}}</a></li>
                            <li class="user-dashboard">
                                <a href="#" class="action-box" v-if="!isLogin">
                                    <el-button
                                        @click="login"
                                        type="primary" size="mini">
                                        <span><i class="fa fa-user"></i> {{$t('Login')}}</span>
                                    </el-button>
                                </a>
                            </li>
                            <li class="dropdown" v-if="isLogin">
                                <a href="javascript:void(0);"
                                   data-toggle="dropdown"
                                   role="button"
                                   aria-haspopup="true"
                                   aria-expanded="false"
                                   class="dropdown-toggle">
                                    <span>{{user.username}}</span>
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu lang-menus">
                                    <li>
                                        <a @click="logout">注销登录</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <invite-comp @close="modals.invite=false" v-if="modals.invite"></invite-comp>
        <play-help @close="modals.help=false" v-if="modals.help"></play-help>
    </div>
</template>

<script>
    import InviteComp from "../cover/InviteComp";
    import PlayHelp from "../cover/PlayHelp";

    export default {
        name: "NavBar",
        components: {PlayHelp, InviteComp},
        data() {
            return {
                modals: {
                    invite: false,
                    help: false
                }
            }
        },
        computed: {
            langs() {
                return this.$store.state.langs;
            },
            lang() {
                return this.$store.state.lang;
            },
            user() {
                return this.$store.state.user;
            },
            isLogin() {
                return this.$store.state.isLogin;
            }
        },
        methods: {
            chooseLang(locale) {
                this.$i18n.locale = locale;
                this.$store.dispatch('setLang', locale);
            },
            login() {
                this.$store.dispatch('login');
            },
            logout() {
                this.$store.dispatch('logout');
            }
        },
        created() {
            this.chooseLang(this.$i18n.locale);
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

    .nav-bar {
        //语言包
        span.country-flag {
            padding: 5px 0 5px 42px;
        }
        .lang-menus {
            > li {
                border-bottom: 1px solid #eee;
                cursor: pointer;
                padding: 5px;
                &:last-child {
                    border-bottom: 0;
                }
            }
        }
        .country-flag {
            padding: 3px 20px 3px 40px;
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
                line-height: 20px;
            }
        }
    }

    //menu
    .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
        background: transparent;
        color: #fff;
    }

    .navbar-collapse {
        border: none;
    }

    .navbar-default .navbar-toggle {
        border-color: transparent;
        .icon-bar {
            background-color: #fff;
        }
        &:hover, &:focus {
            border-color: transparent !important;
        }
    }

    @media screen and (max-width: 767px) {
        .nav-bar .navbar-right ul.link {
            display: none;
        }
        .navbar-nav .open .dropdown-menu > li > a {
            line-height: 20px;
        }
        .nav-bar {
            .navbar-nav .open .dropdown-menu {
                > li > a {
                    padding-left: 80px !important;
                    color: #fff;
                    background-position-y: 7px;
                    background-position-x: 50px;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .nav-bar .logo-img {
            width: 100%;
        }
        .nav-bar {
            .navbar-brand {
                height: 50px;
                padding: 15px 15px !important;
                width: 140px;
            }
            .bar-menu > ul > li > a {
                padding: 20px 12px;
            }
        }
    }

    @media (min-width: 768px) {
        .navbar-nav > li > a {
            padding-top: 20px;
        }
    }

    @media screen and (min-width: 769px) {
        .nav-bar {
            .bar-menu > ul > li > a {
                padding: 20px 12px;
            }
        }
    }
</style>
