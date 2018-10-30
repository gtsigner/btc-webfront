<template>
    <div class="home">
        <nav-bar></nav-bar>
        <div class="main-view">
            <!--游戏菜单-->
            <ul class="game-nav">
                <li class="dice">
                    <router-link exact-active-class="active" to="/">BetDice</router-link>
                </li>
                <li class="lottery">
                    <router-link exact-active-class="active" to="/lottery">Lottery</router-link>
                </li>
                <li class="bonuses" hidden>
                    <router-link exact-active-class="active" to="/bonuses">Lucky Draw</router-link>
                </li>
                <li class="exchange" hidden>
                    <router-link exact-active-class="active" to="/exchange">Exchange</router-link>
                </li>
            </ul>

            <!--游戏tab-->
            <div class="game-tabs">
                <button v-for="g in games" :key="g.id"
                        :class="[g.id===game.id?'active':'',g.icon]"
                        @click="choose(g)"
                        class="game-tab-btn">
                    <em>{{g.title}}</em>
                </button>
            </div>
            <router-view class="main-container"></router-view>
        </div>
        <!--右侧下单的组件-->
        <cm-footer></cm-footer>
        <fixed-bet></fixed-bet>

    </div>
</template>

<script>
    import NavBar from "../components/common/NavBar";
    import CmFooter from "../components/common/CmFooter";
    import FixedBet from "../components/common/FixedBet";
    import InviteComp from "../components/cover/InviteComp";

    export default {
        name: 'home',
        components: {InviteComp, FixedBet, CmFooter, NavBar},
        props: {},
        data() {
            return {
                games: [],
            }
        },
        computed: {
            game() {
                return this.$store.state.game.current;
            }
        },
        methods: {
            async getGames() {
                //const res = await http.get('games');//....
                const res = [
                    {
                        id: 1,
                        title: 'EOS',
                        icon: 'game-eos',
                        logo: '/images/eos_icon_big_new.png',
                        enable: 1
                    },
                    {
                        id: 2,
                        title: 'DICE',
                        icon: 'game-dice',
                        logo: '/images/dice_icon_big.png',
                        enable: 1,
                    },
                ];
                this.games = [...res];
                this.choose(this.games[0]);
            },
            //选中一款游戏
            async choose(game) {
                this.$store.commit('SET_GAME', game);
            }
        },
        created() {
            this.getGames();
        }
    }
</script>
<style scoped lang="scss">

    //game nav
    .game-nav {
        width: 100%;
        position: relative;
        top: 10px;
        display: flex;
        justify-content: center;
        padding-top: 5px;
        z-index: 0;
        right: 0;
        margin-bottom: 10px;
        /*background-color: rgba(26, 30, 61, .5);*/
        li {
            flex: 0 0 90px;
            margin: 0.5% 12px 6px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, .1);
            &.dice {
                a {
                    background: url(../assets/images/game_dice_icon.png) no-repeat center 12px;
                    background-size: 50px;
                }
            }
            &.lottery {
                a {
                    background: url(../assets/images/game_lottery_icon.png) no-repeat center 16px;
                    background-size: 40px;
                }
            }
            &.bonuses {
                a {
                    background: url(../assets/images/game_bonuses_icon.png) center 11px no-repeat;
                    background-size: 50px;
                }
            }
            &.exchange {
                a {
                    background: url(../assets/images/game_exchange_icon.png) center 12px no-repeat;
                    background-size: 50px;
                }
            }
            a {
                display: block;
                height: 100%;
                color: #ddd;
                border-radius: 4px;
                padding: 48px 0 5px;
                text-align: center;
                &.active {
                    background-color: #ed9326;
                    opacity: 1;
                }
            }
        }
    }

    //#region game tabs
    .game-tabs {
        text-align: center;
        padding: 16px 0 5px;
        .game-tab-btn {
            background-repeat: no-repeat;
            background-position-x: 10px;
            background-position-y: center;
            background-size: 20px;
            &.game-dice {
                background-image: url(../assets/images/dice_icon_big.png);
            }
            &.game-eos {
                background-image: url(../assets/images/eos_icon_big_new.png);
            }
        }
        button {
            padding: 6px 15px 6px 34px;
            border-radius: 6px;
            margin: 0 5px;
            background-color: #252e51;
            color: #fff;
            &.active {
                background-color: #f1940f;
            }
        }
    }

    @media screen and (max-width: 580px) {
        .game-tabs {
            button {
                display: inline-block;
                height: 32px;
                width: 32px;
                text-align: center;
                padding: 6px 20px !important;
                em {
                    display: none !important;
                }
            }
        }
    }

    //#endregion

    .main-container {
        max-width: 1180px;
        margin: 0 auto;
        position: relative;
        min-height: 560px;
    }

    .main-view {
        max-width: 1180px;
        margin: 0 auto;
        position: relative;
        background-color: transparent;
        min-height: 760px;
    }
</style>
