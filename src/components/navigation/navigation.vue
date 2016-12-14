<template>
    <nav class="navigation">
        <ul>
            <li>
                <router-link :to="{ name: 'home'}">{{ $t('home.title')}}</router-link>
            </li>
            <li>
                <router-link :to="{name: 'archives'}">{{ $t('archive.title')}}</router-link>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" rel="stylesheet/scss">
    .navigation {
        text-align: center;
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            font-size: 1.6em;
            li {
                display: inline-block;
                margin: 0 0.5rem;
                a {
                    display: block;
                    color: #F03838;
                    font-size: 1.6rem;
                    line-height: 2rem;
                    padding: 0 1rem;
                }
            }
        }
    }
</style>
<script type="text/babel">
    export default {};
</script>
