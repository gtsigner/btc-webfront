<template>
    <div class="full-screen-cover" ><!----><!----><!----><!----><!----><!---->
        <section class="modal-container">
            <div class="content text-center">
                <h1 class="title">Conguratulations, yout bet 1.00000 BLACK</h1>
                <p>Roll result ......</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Tip",
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

    .full-screen-cover {
        background: transparent;
        .modal-container {
            border-top: 5px solid lightgreen;
            border-radius: 0;
            padding-top: 20px;
            min-height: 120px;
            .title {
                color: lightgreen;
                font-weight: 600;
                font-size: 20px;
                line-height: 50px;
            }
            p {
                font-weight: 600;
            }
        }
    }
</style>
