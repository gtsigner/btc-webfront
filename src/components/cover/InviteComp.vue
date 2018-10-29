<template>
    <div class="full-screen-cover"><!----><!----><!----><!----><!----><!---->
        <section style="margin-top: 80px; border-top: 1px solid rgb(69, 77, 84); padding-top: 0px; min-height: 290px;">
            <section class="invite-comp"><h2>Invite friends for Rewards!</h2>
                <div class="last">
                    <div class="input-box"><input type="text" spellcheck="false">
                    </div>
                    <div>
                        <button type="button"
                                class="el-button copy-btn el-button--primary el-button--small"
                                data-clipboard-text="https://betdice.one"
                                style="font-size: 0.8em; padding: 10px 14px; display: inline-block; width: 100%; margin: 0px;">
                            <!----><!----><span>COPY</span></button>
                    </div>
                </div>
                <p>Refer a friend and earm 0.2% of their bets! Referral bonus applies to all
                    tokens.<br><br>Please collect your balance in "Payout" -&gt; "My Balance".</p></section>
            <i class="el-icon-close closed-icon"></i></section><!----><!----><!---->
    </div>
</template>

<script>
    export default {
        name: "InviteComp"
    }
</script>

<style scoped lang="scss">

    section {
        max-width: 560px;
        width: 100%;
        min-height: 120px;
        background-color: #444d54;
        border-radius: 10px;
        color: #fff;
        position: relative;
    }

    section i.close {
        position: absolute;
        top: 14px;
        right: 16px;
        font-size: 24px;
        color: #aaa;
        cursor: pointer;
        font-weight: 700;
    }

    section i.close:hover {
        color: #ccc;
    }

    .invite-comp {
        max-width: 768px;
        min-height: 250px;
        margin-top: 20px;
        padding-top: 20px;
    }

    .invite-comp h2 {
        text-align: center;
        margin-bottom: 22px;
        font-size: 26px;
        padding-top: 10px;
    }

    .invite-comp p {
        text-align: left;
    }

    .invite-comp div.last {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-right: 0;
        padding-top: 16px;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .invite-comp div.last .input-box {
        background-color: #3d4245;
        border-radius: 4px;
        background-color: #3b435c;
        margin-right: 2px;
        position: relative;
        overflow: hidden;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .invite-comp div.last .input-box input {
        width: 100%;
        height: 42px;
        background-color: #2b3945;
        text-align: left;
        border: none;
        font-size: 16px;
        padding: 0 12px;
    }

    .invite-comp div.last > div {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
    }

    .invite-comp div.last > div:last-child {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 55px;
        flex: 0 0 55px;
        margin-left: 8px;
    }

    .invite-comp ul.invite-eos {
        display: block;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-bottom: 16px;
    }

    .invite-comp ul.invite-eos li:nth-of-type(1) {
        font-size: 18px;
        font-weight: 600;
    }

    .invite-comp ul.invite-eos li:nth-of-type(2) {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        font-size: 18px;
        font-weight: 600;
        padding-left: 34px;
        background: url(/img/eos_icon.png) 10px 10px no-repeat;
        background-color: #3a434c;
        border-radius: 3px;
        padding-top: 7px;
        padding-bottom: 7px;
    }

    .invite-comp ul.invite-eos li:nth-of-type(2) em {
        font-size: 0.7em;
        color: #bbb;
    }

    .invite-comp ul.invite-eos li:nth-of-type(3) {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        font-size: 18px;
        font-weight: 600;
        padding-left: 34px;
        background: url(/img/dice_icon.png) 10px 10px no-repeat;
        background-size: 18px 18px;
        background-color: #3a434c;
        border-radius: 3px;
        padding-top: 7px;
        padding-bottom: 7px;
    }

    .invite-comp ul.invite-eos li:nth-of-type(3) em {
        font-size: 0.7em;
        color: #bbb;
    }

    .invite-comp ul.invite-eos li:nth-of-type(4) {
        margin-left: 10px;
    }

    @media screen and (max-width: 600px) {
        .invite-comp {
            padding-left: 0;
            padding-right: 0;
        }
    }

    .full-screen-cover {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(35, 35, 35, .9);
        z-index: 9;
        top: 0;
        left: 0;
    }

    .full-screen-cover section {
        max-width: 560px;
        width: 100%;
        min-height: 320px;
        margin: 170px auto;
        background-color: #444d54;
        border-radius: 10px;
        color: #fff;
        padding: 0 30px 32px;
        position: relative;
    }

    .full-screen-cover section h5 {
        padding: 32px 0 22px;
        text-align: center;
        font-size: 22px;
        font-weight: 600;
    }

    .full-screen-cover section p {
        text-align: center;
    }

    .full-screen-cover section ol {
        padding-left: 12px;
    }

    .full-screen-cover section ol li {
        font-size: 15px;
    }

    .full-screen-cover section ol a {
        color: #4d9efc;
        font-weight: 700;
        font-size: 1.1em;
    }

    .full-screen-cover section div.btn-box {
        text-align: center;
        padding-top: 50px;
    }

    .full-screen-cover section i.closed-icon {
        position: absolute;
        top: 14px;
        right: 16px;
        font-size: 24px;
        color: #929493;
        cursor: pointer;
        font-weight: 700;
    }

    .full-screen-cover section i.closed-icon:hover {
        color: #ccc;
    }

    .full-screen-cover section li {
        line-height: 1.6;
    }

    @media screen and (max-width: 768px) {
        .full-screen-cover section {
            padding: 0 16px 0px;
        }
        .full-screen-cover section ol {
            padding-left: 0 !important;
        }
    }

    @media screen and (max-width: 575px) {
        .full-screen-cover {
            padding-left: 13px;
            padding-right: 13px;
        }
    }
</style>
