<template>
    <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../../sass/mixins.scss';
    .spinner {
        margin: 100px auto;
        width: 50px;
        height: 40px;
        text-align: center;
        font-size: 10px;
    }

    .spinner > div {
        background-color: #333;
        height: 100%;
        width: 6px;
        display: inline-block;
        @include animation(sk-stretch-delay 1.2s infinite ease-in-out);
    }

    .spinner .rect2 {
        @include css3-prefix(animation-delay, -1.1s)
    }

    .spinner .rect3 {
        @include css3-prefix(animation-delay, -1.0s)
    }

    .spinner .rect4 {
        @include css3-prefix(animation-delay, -0.9s)
    }

    .spinner .rect5 {
        @include css3-prefix(animation-delay, -0.8s)
    }

    @keyframes sk-stretch-delay {
        0%, 40%, 100% {
            @include css3-prefix(transform, scaleY(0.4));
        }
        20% {
            @include css3-prefix(transform, scaleY(1.0));
        }
    }
</style>
<script>
    export default {}
</script>
