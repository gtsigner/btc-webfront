<template>
    <div class="full-screen-cover"><!----><!----><!----><!----><!----><!---->
        <section class="modal-container">
            <section class="play-help">
                <h2>{{$t('How To Play')}}</h2>
                <div class="content">
                    <ol>
                        <li>1. 准备好你的EOS 帐号，如果还未有EOS帐号，可根据<a
                            href="https://medium.com/dapppub/create-your-own-eos-account-easily-using-the-non-service-fee-dapp-signupeoseos-b15c5347f2fc"
                            target="_blank">教程</a>创建
                        </li>
                        <li>2, 您需要透过Scatter 在网页上操作帐号，如果还未有安装Scatter，请<a href="https://get-scatter.com/" target="_blank">安装Scatter</a>
                        </li>
                        <li>3, 按下登入按钮，透过Scatter 进行登入</li>
                        <li>4, 选择需要投注货币，您可使用EOS 或 DICE 投注</li>
                        <li>5, 设置需要投注量</li>
                        <li>6, 调整滑条投注骰子号码上限，改变胜出机率</li>
                        <li>7, 按下"掷骰子"按钮进行投注，如果 摇到骰子号码小于投注骰子号码上限，立即中奖</li>
                        <li>** 由于游戏都在EOS 的智能合约上执，因此游戏保证公平，并不能作弊。我们透过独有的加密技术，保证赛果不会被更改，请您放心下注。</li>
                    </ol>
                </div>
            </section>
            <i @click="close" class="el-icon-close closed-icon"></i>
        </section>
    </div>
</template>

<script>
    export default {
        name: "PlayHelp",
        props: {
            show: Boolean
        },
        methods: {
            close() {
                this.$emit('close');
            }
        },
        created() {

        }
    }
</script>

<style scoped lang="scss">
    .modal-container {
        position: relative;

    }

    .play-help {
        padding: 50px;
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
    }
</style>
