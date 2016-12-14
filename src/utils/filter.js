export default (Vue) => {
    Vue.filter('formatDate', date => {
        return new Date(date).toLocaleDateString()
    })
}