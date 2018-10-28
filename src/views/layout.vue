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
                <li class="bonuses">
                    <router-link exact-active-class="active" to="/bonuses">Lucky Draw</router-link>
                </li>

                <li class="exchange">
                    <router-link exact-active-class="active" to="/exchange">Exchange</router-link>
                </li>
            </ul>
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

    export default {
        name: 'home',
        components: {FixedBet, CmFooter, NavBar},
        data() {
            return {}
        }
    };
</script>
<style scoped lang="scss">
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
