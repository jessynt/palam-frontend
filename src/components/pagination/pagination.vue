<template>
    <nav class="pagination">
        <a href="javascript:void(0)" class="pagination-prev" v-if="prevPage" @click.prevent="changePage(prevPage)">{{ $t('pagination.prev')}}</a>
        <a href="javascript:void(0)" class="pagination-next" v-if="nextPage" @click.prevent="changePage(nextPage)">{{ $t('pagination.next')}}</a>
    </nav>
</template>
<script>
    export default{
        name: 'pagination',
        props: {
            pagination: {
                type: Object,
                required: true,
            },
            callback: {
                type: Function,
                required: true,
            }
        },
        computed: {
            prevPage() {
                return this.pagination.links.previous ? this.pagination.current_page - 1 : 0;
            },
            nextPage() {
                return this.pagination.links.next ? this.pagination.current_page + 1 : 0;
            }
        },
        methods: {
            changePage(page) {
                this.callback(page);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    $paginationRed: #f03838;
    $paginationWhite: #fff;
    .pagination {
        position: relative;
        margin: 30px 0;
        display: flex;
        justify-content: space-around;
        .pagination-prev, .pagination-next {
            color: $paginationRed;
            font-size: 1.6rem;
            border: 1px solid #e0e0e0;
            line-height: 30px;
            height: 32px;
            padding: 0 20px;
            border-radius: 16px;
            transition-duration: 0.4s;
            &:hover {
                color: $paginationWhite;
                background-color: $paginationRed;
                border-color: $paginationRed;
            }
        }
    }
</style>