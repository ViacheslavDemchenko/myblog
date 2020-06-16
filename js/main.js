"use strict";

// Polyfill for forEach method
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function (e, n, A) {
  function o(e, n) {
    return _typeof(e) === n;
  }

  function t() {
    var e, n, A, t, a, i, l;

    for (var f in r) {
      if (r.hasOwnProperty(f)) {
        if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (A = 0; A < n.options.aliases.length; A++) {
          e.push(n.options.aliases[A].toLowerCase());
        }

        for (t = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? "" : "no-") + l.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        A = Modernizr._config.classPrefix || "";

    if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      n = n.replace(o, "$1" + A + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A), c ? u.className.baseVal = n : u.className = n);
  }

  function i(e, n) {
    if ("object" == _typeof(e)) for (var A in e) {
      f(e, A) && i(A, e[A]);
    } else {
      e = e.toLowerCase();
      var o = e.split("."),
          t = Modernizr[o[0]];
      if (2 == o.length && (t = t[o[1]]), "undefined" != typeof t) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n);
    }
    return Modernizr;
  }

  var s = [],
      r = [],
      l = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var A = this;
      setTimeout(function () {
        n(A[e]);
      }, 0);
    },
    addTest: function addTest(e, n, A) {
      r.push({
        name: e,
        fn: n,
        options: A
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      r.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = l, Modernizr = new Modernizr();
  var f,
      u = n.documentElement,
      c = "svg" === u.nodeName.toLowerCase();
  !function () {
    var e = {}.hasOwnProperty;
    f = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
      return n in e && o(e.constructor.prototype[n], "undefined");
    } : function (n, A) {
      return e.call(n, A);
    };
  }(), l._l = {}, l.on = function (e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, l._trigger = function (e, n) {
    if (this._l[e]) {
      var A = this._l[e];
      setTimeout(function () {
        var e, o;

        for (e = 0; e < A.length; e++) {
          (o = A[e])(n);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    l.addTest = i;
  }), Modernizr.addAsyncTest(function () {
    function e(e, n, A) {
      function o(n) {
        var o = n && "load" === n.type ? 1 == t.width : !1,
            a = "webp" === e;
        i(e, a && o ? new Boolean(o) : o), A && A(n);
      }

      var t = new Image();
      t.onerror = o, t.onload = o, t.src = n;
    }

    var n = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }],
        A = n.shift();
    e(A.name, A.uri, function (A) {
      if (A && "load" === A.type) for (var o = 0; o < n.length; o++) {
        e(n[o].name, n[o].uri);
      }
    });
  }), t(), a(s), delete l.addTest, delete l.addAsyncTest;

  for (var p = 0; p < Modernizr._q.length; p++) {
    Modernizr._q[p]();
  }

  e.Modernizr = Modernizr;
}(window, document);
"use strict";

;

(function () {
  var hamburger = document.getElementById('menu__button');
  var menu = document.querySelector('.header-nav');
  var body = document.getElementsByTagName('body')[0];
  var categoriesTitle = document.querySelector('.nav__link--mobile');
  var categories = document.querySelectorAll('.categories__title--mobile');
  var categoriesList = document.querySelectorAll('.categories-list--mobile');
  var categoriesLinks = document.querySelectorAll('.categories__link');
  var screenWidth = window.screen.availWidth;
  hamburger.addEventListener('click', mobileMenu);
  categoriesTitle.addEventListener('click', categoriesShow);

  function mobileMenu() {
    if (!hamburger.classList.contains('active')) {
      hamburger.classList.add('active');
      menu.classList.add('header-nav--open');
      body.classList.add('no-scroll');
    } else {
      hamburger.classList.remove('active');
      menu.classList.remove('header-nav--open');
      body.classList.remove('no-scroll');
      categories.forEach(function (category) {
        category.classList.remove('categories__title--mobile--active');
      });
      categoriesList.forEach(function (category) {
        category.classList.remove('categories-list--mobile--active');
      });
    }
  }

  function categoriesShow() {
    categories.forEach(function (category) {
      if (!category.classList.contains('categories__title--mobile--active')) {
        category.classList.add('categories__title--mobile--active');
      } else {
        category.classList.remove('categories__title--mobile--active');
        categoriesList.forEach(function (category) {
          category.classList.remove('categories-list--mobile--active');
        });
      }
    });
  }

  function categoriesListShow() {
    categories.forEach(function (category, i) {
      category.addEventListener('click', function () {
        categoriesList.forEach(function (category) {
          category.classList.remove('categories-list--mobile--active');
        });
        categoriesList[i].classList.add('categories-list--mobile--active');
      });
    });
  }

  categoriesListShow();

  function menuItemChoice() {
    categoriesLinks.forEach(function (link, i) {
      link.addEventListener('click', function () {
        categoriesList.forEach(function (category) {
          category.classList.remove('categories-list--mobile--active');
        });
        mobileMenu();
      });
    });
  }

  menuItemChoice();

  function mobileHide() {
    hamburger.classList.remove('active');
    menu.classList.remove('header-nav--open');
    body.classList.remove('no-scroll');
    categories.forEach(function (category) {
      category.classList.remove('categories__title--mobile--active');
    });
    categoriesList.forEach(function (category) {
      category.classList.remove('categories-list--mobile--active');
    });
  }

  window.addEventListener('resize', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth > 1024) {
      mobileHide();
    }
  });
})();
"use strict";

;

(function () {
  var paginationBtn = document.querySelectorAll('.pagination-btn');

  function paginationAnimate() {
    paginationBtn.forEach(function (el, i) {
      el.addEventListener('click', function () {
        paginationBtn.forEach(function (el, i) {
          paginationBtn[i].classList.remove('pagination-btn--active');
        });

        if (i != 0 && i != paginationBtn.length - 1 && !paginationBtn[i].classList.contains('pagination-btn--active')) {
          paginationBtn[i].classList.add('pagination-btn--active');
        }
      });
    });
  }

  paginationAnimate(); // function paginationAnimate() {
  //     for (let i = 0; i < paginationToggles.length; i++) {
  //         paginationToggles[i].addEventListener('click', () => {
  //             paginationLabels.forEach(el => {
  //                 el.style.width = '';
  //             });
  //             if (i != 0 && i != paginationToggles.length - 1) {
  //                 paginationLabels[i].style.width = 120 + 'px';
  //             }
  //         });
  //     }
  // }
  // paginationAnimate();
})();
"use strict";

;

(function () {
  var skillsIcon = document.querySelectorAll('.skills-icons__item');
  var skillsText = document.querySelectorAll('.skills__item');

  function skillsTextShow() {
    skillsIcon.forEach(function (icon, index) {
      icon.addEventListener('click', function () {
        skillsText.forEach(function (text) {
          text.classList.remove('skills__item--active');
        });
        console.log(skillsText[index]);
        skillsText[index].classList.add('skills__item--active');
      });
    });
  }

  skillsTextShow();
})();
"use strict";

;

(function () {
  //Передача в переменную всех элементов html на странице
  var elements = document.documentElement,
      body = document.body,
      //Передаем в переменную body
  links = document.links,
      //Получаем все якорные ссылки на странице
  scrollTop; //Функция опредления нажатой ссылки и расчета перемещения

  function calcScroll() {
    //Перебор циклом все ссылок и определение той, на которой был сделан клик
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = function (event) {
        event = event || window.event; //Кросс-браузерность
        //Определение и округление текущего расстояния от верха документа

        scrollTop = Math.round(body.scrollTop || elements.scrollTop);

        if (this.hash !== '') {
          //Предотвращение действия браузера по дефолту при отсутвии атрибута hash у элемента
          event.preventDefault(); //Получение элемента, к которому ведет якорь нажатой ссылки

          var targetElement = document.getElementById(this.hash.substring(1)),
              //Задел в 80px, чтобы при прокрутке меню не закрывало заголовок секции
          targetElementTop = -80; //Вычисление через цикл расстояния от верха до элемента, к которому ведет нажатая ссылка

          while (targetElement.offsetParent) {
            targetElementTop += targetElement.offsetTop;
            targetElement = targetElement.offsetParent;
          } //Получение округленного значения расположения элемента


          targetElementTop = Math.round(targetElementTop);
          /* Функция запуска плавного перемещения (содержит аргументы: текущее растояние от верха
          документа, расстояние от верха документа к контентному блоку, к которому ведет нажатая 
          ссылка и сам контентный блок) */

          if (document.body.style.overflow !== 'hidden') {
            //Предотвращает прокрутку при открытом модальном окне
            smoothScroll(scrollTop, targetElementTop, this.hash);
          }
        }
      };
    }
  }

  ;
  calcScroll();
  var timeInterval = 1,
      //Задаем временной интервал в 1 миллисекунду
  prevScrollTop,
      speed; //Функция плавной прокрутки

  function smoothScroll(from, to, hash) {
    /* Если элемент (конечная точка движения) расположен ниже текущей точки экрана,
    то scroll ведется с верху вниз (положительное значение), если наоборот, то снизу
    вверх (отрицательное значение) */
    if (to > from) {
      speed = 10;
    } else {
      speed = -20;
    } //Установка интервала движения


    var move = setInterval(function () {
      //Получение и округение текущей позиции экрана
      scrollTop = Math.round(body.scrollTop || elements.scrollTop); //Условия прекращения или продолжения движения

      if (prevScrollTop === scrollTop || to > from && scrollTop >= to || to < from && scrollTop <= to) {
        clearInterval(move); //Добавление атрибута hash в url после прокрутки (добавляется к адресной строке в браузере)

        history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
      } else {
        body.scrollTop += speed;
        elements.scrollTop += speed;
        /* Передача текущей позиции экрана в переменную, которая при последующих перемещениях
        будет играть роль места хранения последней позиции экрана */

        prevScrollTop = scrollTop;
      }
    }, timeInterval); //Передача ранее установленного интервала перемещения
  }
})();
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();