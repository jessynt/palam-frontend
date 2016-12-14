;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tagso" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M222.6 318.3c17.9 0 32.5 14.6 32.5 32.5s-14.6 32.5-32.5 32.5-32.5-14.6-32.5-32.5S204.7 318.3 222.6 318.3M222.6 254.3c-53.3 0-96.5 43.2-96.5 96.5 0 53.3 43.2 96.5 96.5 96.5S319 404 319 350.7C319 297.4 275.9 254.3 222.6 254.3L222.6 254.3z"  ></path>' +
    '' +
    '<path d="M1004 583.7 555.3 130.7c-8.5-8.6-20.1-13.5-32.4-13.5L342.6 117.2l-92.3 0L70 117.2c-38.6 0-70 31-70 69.2L0 466c0 11.9 4.7 23.2 13.2 31.7l448.2 442.9c13.7 13.5 31.6 20.3 49.5 20.3 17.9 0 35.8-6.8 49.5-20.3l40.6-40.2 40.6 40.2c13.7 13.5 31.6 20.3 49.5 20.3s35.8-6.8 49.5-20.3L1003.5 681C1030.6 654.2 1030.8 610.8 1004 583.7zM555.6 855.5l-40.1 39.6c-1.2 1.2-2.7 1.8-4.5 1.8-1.8 0-3.3-0.6-4.5-1.8L64 457.9 64 186.3c0-2.8 2.8-5.2 6-5.2l110.5 0 69.8 0 84.7 0 443.3 447.6c0.4 0.4 1.4 1.5 1.4 3.4 0 1.7-0.8 2.7-1.5 3.3l-177.1 175L555.6 855.5zM958.5 635.5 695.7 895.1c-1.2 1.2-2.7 1.8-4.5 1.8-1.8 0-3.3-0.6-4.5-1.8l-40.1-39.6L823.2 681c27.1-26.8 27.3-70.1 0.5-97.3L425 181.1l90.2 0 443.3 447.6c0.4 0.4 1.4 1.5 1.4 3.4C960 633.8 959.2 634.8 958.5 635.5z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tvlivecategoryu1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M548.644 102.607 548.644 43.532c0-15.922-12.909-28.832-28.83-28.832l-14.415 0c-15.92 0-28.832 12.91-28.832 28.832l0 59.076C242.639 120.977 58.524 316.622 58.524 555.271c0 250.779 203.306 454.081 454.082 454.081 250.775 0 454.082-203.302 454.082-454.081C966.688 316.622 782.571 120.977 548.644 102.607zM915.313 473.55c-22.22 13.686-77.407 45.609-150.678 73.459-2.854-103.174-34.013-183.604-73.225-244.501 50.372-13.195 91.461-27.632 113.52-35.898C859.982 322.354 899.206 393.763 915.313 473.55zM534.229 850.633c32.337-0.666 63.289-3.534 92.513-7.909-32.727 39.768-66.725 70.658-92.513 91.576L534.229 850.633zM534.229 816.576 534.229 634.387c74.85-1.697 142.718-16.405 200.049-35.35-7.514 78.304-38.357 145.996-75.704 201.17C619.646 809.258 577.795 815.441 534.229 816.576zM534.229 145.004c95.6 4.958 182.549 42.597 249.899 101.953l-4.839-1.613c0 0-43.989 16.468-105.444 31.802-52.191-70.168-112.563-109.651-139.616-125.067L534.229 145.004zM534.229 177.534c28.455 23.999 66.906 60.58 102.614 108.165-32.319 6.86-67.505 12.674-102.614 15.489L534.229 177.534zM655.058 311.38c43.896 65.566 79.701 148.641 80.927 245.959-59.889 20.422-129.42 36.733-201.756 38.683L534.229 330.158C575.712 327.055 617.108 319.946 655.058 311.38zM505.399 595.84c-61.861-3.135-141.408-25.319-213.233-50.169 3.461-89.076 34.069-164.893 72.43-225.844 37.274 7.03 80.027 12.01 126.386 12.01 4.793 0 9.601-0.068 14.418-0.197L505.4 595.84zM505.399 302.783c-4.825 0.141-9.635 0.222-14.418 0.222-38.11 0-74.946-3.918-108.596-9.707 43.543-61.045 92.731-104.414 123.014-128.044L505.399 302.783zM491.787 144.974c0.966 0.646 2.784 1.879 5.352 3.691-23.728 12.792-94.184 55.385-152.121 137.228-49.458-11.091-88.825-24.966-110.221-33.274C303.167 189.834 392.869 149.911 491.787 144.974zM217.092 269.884l0 4.292c0 0 42.423 21.062 110.818 37.727-34.853 57.153-62.217 130.571-66.864 222.68-73.793-27.033-134.47-54.35-150.962-61.913C125.984 394.789 163.916 324.928 217.092 269.884zM101.769 555.271c0-16.561 0.987-32.89 2.893-48.938 13.89 7.208 76.433 38.995 155.841 69.115 1.863 80.406 20.942 146.029 47.716 198.938-96.618-31.035-177.618-67.756-177.618-67.756l0.231 0.693C112.083 660.295 101.769 608.989 101.769 555.271zM491.818 965.571c-145.965-7.274-271.872-90.719-338.777-211.403 23.103 12.035 94.034 46.822 185.703 71.186 58.8 84.013 133.246 124.895 158.121 136.879C494.469 963.854 492.756 964.969 491.818 965.571zM505.399 946.57c-27.958-20.551-72.032-57.134-112.9-108.796 35.987 7.038 74.06 11.852 112.9 12.825L505.399 946.57zM358.515 789.509c-34.311-55.239-61.258-122.928-65.955-202.349 68.257 23.955 145.034 44.471 212.839 47.104L505.399 816.43C460.934 814.425 409.148 803.618 358.515 789.509zM534.229 965.539l0-6.228c28.363-14.493 93.346-53.285 147.131-126.816 83.835-18.855 148.604-47.989 183.786-66.149C796.818 880.217 674.881 958.245 534.229 965.539zM897.202 700.045c-26.402 16.846-95.098 57.324-186.274 85.87 28.408-52.046 49.559-117.141 53.337-197.498 86.268-32.604 143.375-72.106 156.354-81.512 1.86 15.864 2.824 32.002 2.824 48.366C923.443 606.23 914.16 655.019 897.202 700.045z"  ></path>' +
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