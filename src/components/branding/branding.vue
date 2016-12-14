<template>
    <div class="branding">
        <div class="site-branding">
            <h1 class="site-title">
                <a href="/">Palam</a>
            </h1>
            <p class="site-description">CODE IS POETRY</p>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss">
    .site-branding {
        text-align: center;
        margin-bottom: 2rem;
        font-family: "Open Sans", arial, sans-serif;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        .site-title {
            margin: 0;
            font-size: 1.4rem;
        }

        .site-title a {
            display: inline-block;
            color: #fff;
            font-weight: bolder;
            background-color: #F03838;
            line-height: 3rem;
            height: 3rem;
            padding: 0 1rem;
            -webkit-transition: padding 0.3s ease-out;
            transition: padding 0.3s ease-out;
            & a:hover {
                padding: 0 1.5rem;
            }
        }
        .site-description {
            color: #9e9e9e;
            font-size: 1.3rem;
            margin: 1rem 0 0;
        }
    }
</style>