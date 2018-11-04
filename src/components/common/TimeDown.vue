<template>
    <ul>
        <li v-for="(t,i) in time.split('')" :class="{'point':t===':'}">{{t}}</li>
    </ul>
</template>

<script>
    import * as dayjs from 'dayjs';
    import {secToTime} from '../../libs/utils';

    export default {
        name: 'TimeDown',
        props: {
            end: {
                type: String
            },
        },
        data() {
            return {
                time: '',
                timer: null,
            };
        },
        methods: {
            parseTime() {
                let time = dayjs(this.end).unix() - Date.now() / 1000;
                time = parseInt(time);
                if (time <= 0) {
                    this.$emit('timeout');
                }
                time = time > 0 ? time : 0;
                time = secToTime(time);
                this.time = time;
            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        mounted() {
            this.timer = setInterval(() => {
                this.parseTime();
            }, 1000);
        },
        created() {
            this.parseTime();
        }
    };
</script>

<style scoped lang="scss">
    ul {
        display: flex;
        max-width: 648px;
        margin: 0 auto 35px;
        li {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            font-size: 70px;
            border: 2px solid #f6c522;
            border-radius: 9px;
            color: #edcd5c;
            margin: 4px;
            text-align: center;
            text-shadow: 0 0 1px #f4cc4b;
            font-weight: 600;
            font-family: 'Microsoft YaHei', 'Arial', 'Verdana';
            &.point {
                flex: 0 0 5%;
                font-weight: 400;
                color: #7d80a1;
                border: none;
            }
        }
    }
</style>
