<template>
    <div class="full-screen-cover"><!----><!----><!----><!----><!----><!---->
        <section class="modal-container">
            <section class="invite-comp">
                <h2>{{$t('Invite friends for Rewards')}}!</h2>
                <div class="last">
                    <div class="input-box"><input type="text" spellcheck="false">
                    </div>
                    <div>
                        <el-button type="primary"><span>COPY</span></el-button>
                    </div>
                </div>
                <p style="margin-top: 20px;">{{$t('Invite Tips')}}</p>
            </section>
            <i @click="close" class="el-icon-close closed-icon"></i>
        </section>
    </div>
</template>

<script>
    export default {
        name: "InviteComp",
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
        max-width: 400px;
        min-height: 200px;
        padding: 40px 15px;
    }

    .invite-comp h2 {
        text-align: center;
        margin-bottom: 22px;
        font-size: 26px;
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

</style>
