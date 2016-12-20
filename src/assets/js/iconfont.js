;(function(window) {

    var svgSprite = '<svg>' +
        '' +
        '<symbol id="icon-comments" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M876.032 624 848 624 848 568l14.016 0c23.168 0 41.984-18.816 41.984-41.984L904 161.984c0-23.168-18.816-41.984-41.984-41.984l-560 0c-23.168 0-41.984 18.816-41.984 41.984L260.032 176 204.032 176 204.032 147.968C204.032 101.568 241.6 64 288 64l588.032 0C922.368 64 960 101.568 960 147.968l0 392C960 586.368 922.368 624 876.032 624zM819.968 288l0 392c0 46.4-37.632 83.968-83.968 83.968L483.968 763.968 204.032 960l0-195.968L147.968 764.032C101.568 764.032 64 726.4 64 680L64 288c0-46.4 37.568-83.968 83.968-83.968L736 204.032C782.4 204.032 819.968 241.6 819.968 288zM161.984 259.968c-23.168 0-41.984 18.816-41.984 41.984l0 364.032c0 23.232 18.816 41.984 41.984 41.984l97.984 0 0 140.032 195.968-140.032 265.984 0c23.168 0 41.984-18.752 41.984-41.984L763.904 302.016c0-23.168-18.816-41.984-41.984-41.984L161.984 260.032z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-cshy-classify-fill" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M96.364233 255.9473l255.573793 0c17.705244 0 32.058137-14.352893 32.058137-32.058137 0-17.705244-14.352893-32.058137-32.058137-32.058137L96.364233 191.831027c-17.705244 0-32.058137 14.352893-32.058137 32.058137C64.306096 241.594407 78.658989 255.9473 96.364233 255.9473z"  ></path>' +
        '' +
        '<path d="M96.364233 544.006971l255.573793 0c17.705244 0 32.058137-14.351869 32.058137-32.057113s-14.352893-32.058137-32.058137-32.058137L96.364233 479.891721c-17.705244 0-32.058137 14.352893-32.058137 32.058137S78.658989 544.006971 96.364233 544.006971z"  ></path>' +
        '' +
        '<path d="M927.037133 767.952416 96.364233 767.952416c-17.705244 0-32.058137 14.352893-32.058137 32.058137s14.352893 32.057113 32.058137 32.057113L927.037133 832.067666c17.705244 0 32.058137-14.351869 32.058137-32.057113S944.742377 767.952416 927.037133 767.952416z"  ></path>' +
        '' +
        '<path d="M604.870666 455.321116c36.310997 0 69.855998-11.828396 97.008404-31.830963l169.281451 169.282474c12.165064 12.165064 31.888268 12.165064 44.054355 0 12.165064-12.166087 12.165064-31.888268-0.001023-44.054355L744.162082 377.667525c15.488763-25.009603 24.437575-54.495148 24.437575-86.074378 0-90.424452-73.30454-163.728992-163.728992-163.728992s-163.728992 73.30454-163.728992 163.728992C441.141674 382.018623 514.44519 455.321116 604.870666 455.321116z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '<symbol id="icon-tagso" viewBox="0 0 1024 1024">' +
        '' +
        '<path d="M280.1 278.7c-45.9 0-83.2 37.3-83.2 83.2 0 45.9 37.3 83.2 83.2 83.2 45.8 0 83.1-37.4 83.1-83.3C363.2 316 325.9 278.7 280.1 278.7zM280.1 381.9c-11 0-20-9-20-20s9-20 20-20 20 9 20 20S291.1 381.9 280.1 381.9z"  ></path>' +
        '' +
        '<path d="M909.5 544l-359-362.4c-8-8.1-18.7-12.6-30.2-12.6L158 169c-34.2 0-62 27.5-62 61.4L96 454c0 11.2 4.4 21.7 12.4 29.7L467 838c11.8 11.5 27.3 17.9 43.8 17.9s32-6.3 43.8-17.9l28.3-28 28.3 28c11.8 11.5 27.3 17.9 43.8 17.9s32-6.4 43.8-17.9L909 630.3C933 606.7 933.2 568 909.5 544zM764.8 630.3c11.7-11.4 18.1-26.7 18.2-43s-6.2-31.7-17.7-43.3L456.4 232.1l55.3 0L863 586.9 655 792.4l-27.2-26.8L764.8 630.3zM159.2 445 159.2 232.1l208.3 0 351.2 354.6L578.6 725.2l-36.3 36.1-31.5 31.1L159.2 445z"  ></path>' +
        '' +
        '</symbol>' +
        '' +
        '</svg>'
    var script = function() {
        var scripts = document.getElementsByTagName('script')
        return scripts[scripts.length - 1]
    }()
    var shouldInjectCss = script.getAttribute("data-injectcss")

    /**
     * document ready
     */
    var ready = function(fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function() {
                    document.removeEventListener("DOMContentLoaded", loadFn, false)
                    fn()
                }
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }

        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                // only fire once
                init = function() {
                    if (!done) {
                        done = true
                        fn()
                    }
                }
            // polling for no errors
            var polling = function() {
                try {
                    // throws errors until after ondocumentready
                    d.documentElement.doScroll('left')
                } catch (e) {
                    setTimeout(polling, 50)
                    return
                }
                // no errors, fire

                init()
            };

            polling()
            // trying to always fire before onload
            d.onreadystatechange = function() {
                if (d.readyState == 'complete') {
                    d.onreadystatechange = null
                    init()
                }
            }
        }
    }

    /**
     * Insert el before target
     *
     * @param {Element} el
     * @param {Element} target
     */

    var before = function(el, target) {
        target.parentNode.insertBefore(el, target)
    }

    /**
     * Prepend el to target
     *
     * @param {Element} el
     * @param {Element} target
     */

    var prepend = function(el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    }

    function appendSvg() {
        var div, svg

        div = document.createElement('div')
        div.innerHTML = svgSprite
        svgSprite = null
        svg = div.getElementsByTagName('svg')[0]
        if (svg) {
            svg.setAttribute('aria-hidden', 'true')
            svg.style.position = 'absolute'
            svg.style.width = 0
            svg.style.height = 0
            svg.style.overflow = 'hidden'
            prepend(svg, document.body)
        }
    }

    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        } catch (e) {
            console && console.log(e)
        }
    }

    ready(appendSvg)


})(window)