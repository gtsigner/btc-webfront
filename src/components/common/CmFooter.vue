<template>
    <div class="footer-wrapper">
        <div class="bx">
            <div class="_left">
                <div class="logo"><img src="../../assets/images/BetDice.png" alt=""></div>
                <div class="contact">
                    <a class="link" href="">{{$t('Contact us')}}</a>
                    <span class="line"></span>
                    <a class="link" href="">{{$t('Business cooperation')}}</a>
                </div>
            </div>
            <div class="_right">
                <div class="share-link">
                    <a href="#" target="_blank" data-title="Telegram">
                        <i class="fa fa-send"></i>
                    </a>
                    <a href="#" target="_blank" data-title="Twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="bx tips">
            <p v-for="(t,i) in tips" :key="i">{{t}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CmFooter",
        data() {
            return {
                tips: [
                    'Please arrange your time reasonably, and do not over-indulge.',
                    'If you reside in a location where lottery, gambling, sports betting or betting over the internet is\n' +
                    '                illegal, please do not click on anything related to these activities on this site. You must be 21 years\n' +
                    '                of age to click on any betting or gambling related items even if it is legal to do so in your location.\n' +
                    '                Recognising that the laws and regulations involving online gaming are different everywhere, readers are\n' +
                    '                advised to check with the laws that exist within their own jurisdiction to ascertain the legality of the\n' +
                    '                activities which are covered.',
                    'The games provided by BetDice are based on blockchain, fair and transparent. When you start playing these\n' +
                    '                games, please note that online gambling and lottery is an entertainment vehicle and that it carries with\n' +
                    '                it a certain degree of financial risk. Players should be aware of this risk, and govern themselves\n' +
                    '                accordingly. '
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    $margin: 15px;
    .footer-wrapper {
        margin-top: 50px;
        padding-left: 16px;
        padding-right: 16px;
        background-color: #1c233f;
        .bx {
            max-width: 1180px;
            margin: 0 auto;
            color: #72778d;
            padding: 40px 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            &.tips {
                padding-top: 15px;
                padding-bottom: 18px;
                font-size: 12px;
                border-top: 1px solid #171932;
            }
            .line {
                border-right: 1px solid #5e7784;
                margin: 0 10px;
            }
            ._left {
                .contact {
                    margin-top: $margin;
                }
                a.link {
                    color: #9599ba;
                }
            }
        }
    }
</style>
