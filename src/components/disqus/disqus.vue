<template>
    <div id="disqus_thread"></div>
</template>

<script>
    module.exports = {
        props: ['id', 'title'],
        created() {
            this.fetchDisqus();
        },
        methods: {
            fetchDisqus() {
                let dsq = document.createElement('script');
                dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = '//palam.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            }
        },
    };
</script>