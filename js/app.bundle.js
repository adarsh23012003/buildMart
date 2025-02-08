/*! For license information please see app.bundle.js.LICENSE.txt */
!(function () {
  var e = {
      661: function (e) {
        e.exports = (function (e) {
          function t(n) {
            if (i[n]) return i[n].exports;
            var o = (i[n] = { exports: {}, id: n, loaded: !1 });
            return (
              e[n].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
            );
          }
          var i = {};
          return (t.m = e), (t.c = i), (t.p = "dist/"), t(0);
        })([
          function (e, t, i) {
            "use strict";
            function n(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var o =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                      Object.prototype.hasOwnProperty.call(i, n) &&
                        (e[n] = i[n]);
                  }
                  return e;
                },
              s = (n(i(1)), i(6)),
              r = n(s),
              a = n(i(7)),
              l = n(i(8)),
              c = n(i(9)),
              u = n(i(10)),
              d = n(i(11)),
              p = n(i(14)),
              h = [],
              f = !1,
              g = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1,
              },
              m = function () {
                if (
                  (arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0] &&
                    (f = !0),
                  f)
                )
                  return (
                    (h = (0, d.default)(h, g)), (0, u.default)(h, g.once), h
                  );
              },
              v = function () {
                (h = (0, p.default)()), m();
              };
            e.exports = {
              init: function (e) {
                (g = o(g, e)), (h = (0, p.default)());
                var t = document.all && !window.atob;
                return (function (e) {
                  return (
                    !0 === e ||
                    ("mobile" === e && c.default.mobile()) ||
                    ("phone" === e && c.default.phone()) ||
                    ("tablet" === e && c.default.tablet()) ||
                    ("function" == typeof e && !0 === e())
                  );
                })(g.disable) || t
                  ? void h.forEach(function (e, t) {
                      e.node.removeAttribute("data-aos"),
                        e.node.removeAttribute("data-aos-easing"),
                        e.node.removeAttribute("data-aos-duration"),
                        e.node.removeAttribute("data-aos-delay");
                    })
                  : (g.disableMutationObserver ||
                      l.default.isSupported() ||
                      (console.info(
                        '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                      ),
                      (g.disableMutationObserver = !0)),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-easing", g.easing),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-duration", g.duration),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-delay", g.delay),
                    "DOMContentLoaded" === g.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1
                      ? m(!0)
                      : "load" === g.startEvent
                      ? window.addEventListener(g.startEvent, function () {
                          m(!0);
                        })
                      : document.addEventListener(g.startEvent, function () {
                          m(!0);
                        }),
                    window.addEventListener(
                      "resize",
                      (0, a.default)(m, g.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "orientationchange",
                      (0, a.default)(m, g.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "scroll",
                      (0, r.default)(function () {
                        (0, u.default)(h, g.once);
                      }, g.throttleDelay)
                    ),
                    g.disableMutationObserver ||
                      l.default.ready("[data-aos]", v),
                    h);
              },
              refresh: m,
              refreshHard: v,
            };
          },
          function (e, t) {},
          ,
          ,
          ,
          ,
          function (e, t) {
            (function (t) {
              "use strict";
              function i(e, t, i) {
                function o(t) {
                  var i = d,
                    n = p;
                  return (d = p = void 0), (v = t), (f = e.apply(n, i));
                }
                function r(e) {
                  var i = e - m;
                  return void 0 === m || i >= t || i < 0 || (k && e - v >= h);
                }
                function l() {
                  var e = x();
                  return r(e)
                    ? c(e)
                    : void (g = setTimeout(
                        l,
                        (function (e) {
                          var i = t - (e - m);
                          return k ? w(i, h - (e - v)) : i;
                        })(e)
                      ));
                }
                function c(e) {
                  return (g = void 0), S && d ? o(e) : ((d = p = void 0), f);
                }
                function u() {
                  var e = x(),
                    i = r(e);
                  if (((d = arguments), (p = this), (m = e), i)) {
                    if (void 0 === g)
                      return (function (e) {
                        return (v = e), (g = setTimeout(l, t)), y ? o(e) : f;
                      })(m);
                    if (k) return (g = setTimeout(l, t)), o(m);
                  }
                  return void 0 === g && (g = setTimeout(l, t)), f;
                }
                var d,
                  p,
                  h,
                  f,
                  g,
                  m,
                  v = 0,
                  y = !1,
                  k = !1,
                  S = !0;
                if ("function" != typeof e) throw new TypeError(a);
                return (
                  (t = s(t) || 0),
                  n(i) &&
                    ((y = !!i.leading),
                    (h = (k = "maxWait" in i) ? b(s(i.maxWait) || 0, t) : h),
                    (S = "trailing" in i ? !!i.trailing : S)),
                  (u.cancel = function () {
                    void 0 !== g && clearTimeout(g),
                      (v = 0),
                      (d = m = p = g = void 0);
                  }),
                  (u.flush = function () {
                    return void 0 === g ? f : c(x());
                  }),
                  u
                );
              }
              function n(e) {
                var t = void 0 === e ? "undefined" : r(e);
                return !!e && ("object" == t || "function" == t);
              }
              function o(e) {
                return (
                  "symbol" == (void 0 === e ? "undefined" : r(e)) ||
                  ((function (e) {
                    return (
                      !!e && "object" == (void 0 === e ? "undefined" : r(e))
                    );
                  })(e) &&
                    y.call(e) == c)
                );
              }
              function s(e) {
                if ("number" == typeof e) return e;
                if (o(e)) return l;
                if (n(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = n(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(u, "");
                var i = p.test(e);
                return i || h.test(e)
                  ? f(e.slice(2), i ? 2 : 8)
                  : d.test(e)
                  ? l
                  : +e;
              }
              var r =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                a = "Expected a function",
                l = NaN,
                c = "[object Symbol]",
                u = /^\s+|\s+$/g,
                d = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                h = /^0o[0-7]+$/i,
                f = parseInt,
                g =
                  "object" == (void 0 === t ? "undefined" : r(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                m =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : r(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                v = g || m || Function("return this")(),
                y = Object.prototype.toString,
                b = Math.max,
                w = Math.min,
                x = function () {
                  return v.Date.now();
                };
              e.exports = function (e, t, o) {
                var s = !0,
                  r = !0;
                if ("function" != typeof e) throw new TypeError(a);
                return (
                  n(o) &&
                    ((s = "leading" in o ? !!o.leading : s),
                    (r = "trailing" in o ? !!o.trailing : r)),
                  i(e, t, { leading: s, maxWait: t, trailing: r })
                );
              };
            }).call(
              t,
              (function () {
                return this;
              })()
            );
          },
          function (e, t) {
            (function (t) {
              "use strict";
              function i(e) {
                var t = void 0 === e ? "undefined" : s(e);
                return !!e && ("object" == t || "function" == t);
              }
              function n(e) {
                return (
                  "symbol" == (void 0 === e ? "undefined" : s(e)) ||
                  ((function (e) {
                    return (
                      !!e && "object" == (void 0 === e ? "undefined" : s(e))
                    );
                  })(e) &&
                    v.call(e) == l)
                );
              }
              function o(e) {
                if ("number" == typeof e) return e;
                if (n(e)) return a;
                if (i(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = i(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(c, "");
                var o = d.test(e);
                return o || p.test(e)
                  ? h(e.slice(2), o ? 2 : 8)
                  : u.test(e)
                  ? a
                  : +e;
              }
              var s =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                r = "Expected a function",
                a = NaN,
                l = "[object Symbol]",
                c = /^\s+|\s+$/g,
                u = /^[-+]0x[0-9a-f]+$/i,
                d = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                h = parseInt,
                f =
                  "object" == (void 0 === t ? "undefined" : s(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                g =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : s(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                m = f || g || Function("return this")(),
                v = Object.prototype.toString,
                y = Math.max,
                b = Math.min,
                w = function () {
                  return m.Date.now();
                };
              e.exports = function (e, t, n) {
                function s(t) {
                  var i = d,
                    n = p;
                  return (d = p = void 0), (v = t), (f = e.apply(n, i));
                }
                function a(e) {
                  var i = e - m;
                  return void 0 === m || i >= t || i < 0 || (k && e - v >= h);
                }
                function l() {
                  var e = w();
                  return a(e)
                    ? c(e)
                    : void (g = setTimeout(
                        l,
                        (function (e) {
                          var i = t - (e - m);
                          return k ? b(i, h - (e - v)) : i;
                        })(e)
                      ));
                }
                function c(e) {
                  return (g = void 0), S && d ? s(e) : ((d = p = void 0), f);
                }
                function u() {
                  var e = w(),
                    i = a(e);
                  if (((d = arguments), (p = this), (m = e), i)) {
                    if (void 0 === g)
                      return (function (e) {
                        return (v = e), (g = setTimeout(l, t)), x ? s(e) : f;
                      })(m);
                    if (k) return (g = setTimeout(l, t)), s(m);
                  }
                  return void 0 === g && (g = setTimeout(l, t)), f;
                }
                var d,
                  p,
                  h,
                  f,
                  g,
                  m,
                  v = 0,
                  x = !1,
                  k = !1,
                  S = !0;
                if ("function" != typeof e) throw new TypeError(r);
                return (
                  (t = o(t) || 0),
                  i(n) &&
                    ((x = !!n.leading),
                    (h = (k = "maxWait" in n) ? y(o(n.maxWait) || 0, t) : h),
                    (S = "trailing" in n ? !!n.trailing : S)),
                  (u.cancel = function () {
                    void 0 !== g && clearTimeout(g),
                      (v = 0),
                      (d = m = p = g = void 0);
                  }),
                  (u.flush = function () {
                    return void 0 === g ? f : c(w());
                  }),
                  u
                );
              };
            }).call(
              t,
              (function () {
                return this;
              })()
            );
          },
          function (e, t) {
            "use strict";
            function i(e) {
              var t = void 0,
                n = void 0;
              for (t = 0; t < e.length; t += 1) {
                if ((n = e[t]).dataset && n.dataset.aos) return !0;
                if (n.children && i(n.children)) return !0;
              }
              return !1;
            }
            function n() {
              return (
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver
              );
            }
            function o(e) {
              e &&
                e.forEach(function (e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                    n = Array.prototype.slice.call(e.removedNodes);
                  if (i(t.concat(n))) return s();
                });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = function () {};
            t.default = {
              isSupported: function () {
                return !!n();
              },
              ready: function (e, t) {
                var i = window.document,
                  r = new (n())(o);
                (s = t),
                  r.observe(i.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  });
              },
            };
          },
          function (e, t) {
            "use strict";
            function i() {
              return (
                navigator.userAgent || navigator.vendor || window.opera || ""
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function () {
                function e(e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, i, n) {
                  return i && e(t.prototype, i), n && e(t, n), t;
                };
              })(),
              o =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              s =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              r =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              a =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              l = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  n(e, [
                    {
                      key: "phone",
                      value: function () {
                        var e = i();
                        return !(!o.test(e) && !s.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "mobile",
                      value: function () {
                        var e = i();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "tablet",
                      value: function () {
                        return this.mobile() && !this.phone();
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = new l();
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = function (e, t) {
              var i = window.pageYOffset,
                n = window.innerHeight;
              e.forEach(function (e, o) {
                !(function (e, t, i) {
                  var n = e.node.getAttribute("data-aos-once");
                  t > e.position
                    ? e.node.classList.add("aos-animate")
                    : void 0 !== n &&
                      ("false" === n || (!i && "true" !== n)) &&
                      e.node.classList.remove("aos-animate");
                })(e, n + i, t);
              });
            };
          },
          function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(i(12));
            t.default = function (e, t) {
              return (
                e.forEach(function (e, i) {
                  e.node.classList.add("aos-init"),
                    (e.position = (0, n.default)(e.node, t.offset));
                }),
                e
              );
            };
          },
          function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function (e) {
              return e && e.__esModule ? e : { default: e };
            })(i(13));
            t.default = function (e, t) {
              var i = 0,
                o = 0,
                s = window.innerHeight,
                r = {
                  offset: e.getAttribute("data-aos-offset"),
                  anchor: e.getAttribute("data-aos-anchor"),
                  anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
                };
              switch (
                (r.offset && !isNaN(r.offset) && (o = parseInt(r.offset)),
                r.anchor &&
                  document.querySelectorAll(r.anchor) &&
                  (e = document.querySelectorAll(r.anchor)[0]),
                (i = (0, n.default)(e).top),
                r.anchorPlacement)
              ) {
                case "top-bottom":
                  break;
                case "center-bottom":
                  i += e.offsetHeight / 2;
                  break;
                case "bottom-bottom":
                  i += e.offsetHeight;
                  break;
                case "top-center":
                  i += s / 2;
                  break;
                case "bottom-center":
                  i += s / 2 + e.offsetHeight;
                  break;
                case "center-center":
                  i += s / 2 + e.offsetHeight / 2;
                  break;
                case "top-top":
                  i += s;
                  break;
                case "bottom-top":
                  i += e.offsetHeight + s;
                  break;
                case "center-top":
                  i += e.offsetHeight / 2 + s;
              }
              return (
                r.anchorPlacement || r.offset || isNaN(t) || (o = t), i + o
              );
            };
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = function (e) {
              for (
                var t = 0, i = 0;
                e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

              )
                (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                  (i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                  (e = e.offsetParent);
              return { top: i, left: t };
            };
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = function (e) {
              return (
                (e = e || document.querySelectorAll("[data-aos]")),
                Array.prototype.map.call(e, function (e) {
                  return { node: e };
                })
              );
            };
          },
        ]);
      },
      217: function () {
        function e(e, t) {
          var i = 36e5,
            n = 24 * i,
            o = new Date(t).getTime(),
            s = setInterval(function () {
              var t = new Date().getTime(),
                r = o - t,
                a = document.querySelector("#".concat(e, " .days")),
                l = document.querySelector("#".concat(e, " .hours")),
                c = document.querySelector("#".concat(e, " .minutes")),
                u = document.querySelector("#".concat(e, " .seconds"));
              if (
                (a &&
                  l &&
                  c &&
                  u &&
                  ((a.innerText = Math.floor(r / n)),
                  (l.innerText = Math.floor((r % n) / i)),
                  (c.innerText = Math.floor((r % i) / 6e4)),
                  (u.innerText = Math.floor((r % 6e4) / 1e3))),
                r < 0)
              ) {
                var d = document.querySelector("#".concat(e));
                d && (d.style.display = "none"), clearInterval(s);
              }
            }, 1e3);
        }
        e("countdown1", "2025-12-30"),
          e("countdown2", "2025-12-20"),
          e("countdown3", "2025-11-24"),
          e("countdown4", "2025-11-11"),
          e("countdown5", "2025-11-13"),
          e("countdown6", "2025-11-03"),
          e("countdown7", "2025-11-03"),
          e("countdown8", "2025-11-03"),
          e("countdown9", "2025-11-03"),
          e("countdown10", "2025-12-03"),
          e("countdown11", "2025-11-15"),
          e("countdown12", "2025-11-15"),
          e("countdown13", "2025-11-15"),
          e("countdown14", "2025-11-15"),
          e("countdown15", "2025-11-15"),
          e("countdown16", "2025-11-15"),
          e("countdown17", "2025-11-15"),
          e("countdown18", "2025-11-15"),
          e("countdown19", "2025-11-15"),
          e("countdown20", "2025-11-15"),
          e("countdown21", "2025-11-15"),
          e("countdown22", "2025-11-15"),
          e("countdown23", "2025-11-15"),
          e("countdown24", "2025-11-15");
      },
      62: function (e, t, i) {
        var n = i(692);
        function o(e) {
          return (
            (o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            o(e)
          );
        }
        function s(e, t, i) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != o(e) || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var i = t.call(e, "string");
                  if ("object" != o(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(e);
              return "symbol" == o(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = i),
            e
          );
        }
        !(function (e) {
          "use strict";
          e(function () {
            e(".toggle-mobileMenu").on("click", function () {
              e(".mobile-menu").addClass("active"),
                e(".side-overlay").addClass("show"),
                e("body").addClass("scroll-hide-sm");
            }),
              e(".close-button, .side-overlay").on("click", function () {
                e(".mobile-menu").removeClass("active"),
                  e(".side-overlay").removeClass("show"),
                  e("body").removeClass("scroll-hide-sm");
              });
            var t = e(window).width();
            e(".has-submenu").on("click", function () {
              var i = e(this);
              if (t < 992) {
                i.hasClass("active")
                  ? i.removeClass("active")
                  : (e(".has-submenu").removeClass("active"),
                    e(i).addClass("active"));
                var n = i.find(".nav-submenu");
                e(".nav-submenu").not(n).slideUp(300), n.slideToggle(300);
              }
            });
            var i = document.querySelector(".progress-wrap path"),
              o = i.getTotalLength();
            (i.style.transition = i.style.WebkitTransition = "none"),
              (i.style.strokeDasharray = o + " " + o),
              (i.style.strokeDashoffset = o),
              i.getBoundingClientRect(),
              (i.style.transition = i.style.WebkitTransition =
                "stroke-dashoffset 10ms linear");
            var r,
              a,
              l = function () {
                var t = e(window).scrollTop(),
                  n = e(document).height() - e(window).height(),
                  s = o - (t * o) / n;
                i.style.strokeDashoffset = s;
              };
            l(),
              e(window).on("scroll", l),
              n(window).on("scroll", function () {
                n(this).scrollTop() > 50
                  ? n(".progress-wrap").addClass("active-progress")
                  : n(".progress-wrap").removeClass("active-progress");
              }),
              n(".progress-wrap").on("click", function (e) {
                return (
                  e.preventDefault(),
                  n("html, body").animate({ scrollTop: 0 }, 550),
                  !1
                );
              }),
              e("ul").length &&
                ((r = e("ul")),
                "" === (a = window.location.pathname.split("/").reverse()[0]) ||
                "index.html" === a
                  ? r
                      .find("li.nav-menu__item.has-submenu")
                      .eq(0)
                      .addClass("activePage")
                  : (r.find("li").removeClass("activePage"),
                    r.find("li").each(function () {
                      var t = e(this).find("a");
                      e(t).attr("href") == a && e(this).addClass("activePage");
                    }),
                    r.children("li").each(function () {
                      e(this).find(".activePage").length &&
                        e(this).addClass("activePage");
                    }))),
              e(".js-example-basic-single").select2(),
              e(".search-icon").on("click", function () {
                e(".search-box").addClass("active");
              }),
              e(".search-box__close").on("click", function () {
                e(".search-box").removeClass("active");
              }),
              e(".responsive-dropdown .has-submenus-submenu").on(
                "click",
                function () {
                  e(window).width() < 992 &&
                    (e(this).hasClass("active")
                      ? (e(this).removeClass("active"),
                        e(this).children(".submenus-submenu").slideUp())
                      : (e(
                          ".responsive-dropdown .has-submenus-submenu"
                        ).removeClass("active"),
                        e(".responsive-dropdown .has-submenus-submenu")
                          .children(".submenus-submenu")
                          .slideUp(),
                        e(this).addClass("active"),
                        e(this).children(".submenus-submenu").slideDown()));
                }
              ),
              e(".category__button").on("click", function () {
                e(".responsive-dropdown").addClass("active"),
                  e(".side-overlay").addClass("show"),
                  e("body").addClass("scroll-hide-sm");
              }),
              e(".side-overlay, .close-responsive-dropdown").on(
                "click",
                function () {
                  e(".responsive-dropdown").removeClass("active"),
                    e(".side-overlay").removeClass("show"),
                    e("body").removeClass("scroll-hide-sm");
                }
              ),
              e(".selectable-text-list li").each(function () {
                var t = e(this);
                t.on("click", function () {
                  var e = t.text();
                  t.parent().parent().find(".selected-text").text(e);
                });
              }),
              e(".banner-slider").slick(
                s(
                  s(
                    s(
                      s(
                        {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          autoplay: !1,
                          autoplaySpeed: 2e3,
                          speed: 1500,
                          dots: !1,
                          pauseOnHover: !0,
                          arrows: !0,
                          draggable: !0,
                          rtl: "rtl" === e("html").attr("dir"),
                        },
                        "speed",
                        900
                      ),
                      "infinite",
                      !0
                    ),
                    "nextArrow",
                    "#banner-next"
                  ),
                  "prevArrow",
                  "#banner-prev"
                )
              ),
              e(".banner-slider").on("beforeChange", function (t, i, n, o) {
                e(".wow").css("visibility", "hidden").removeClass("animated");
              }),
              e(".banner-slider").on("afterChange", function (t, i, n) {
                e(".wow").css("visibility", "visible");
              }),
              e(".bt-tab-pane").hide(),
              e(".bt-tab-pane:first").show(),
              e(".bt-tb-btn").on("click", function () {
                e(".bt-tb-btn").removeClass("active"),
                  e(this).addClass("active"),
                  e(".bt-tab-pane").hide();
                var t = e(this).data("target");
                return e(t).fadeIn(500), !1;
              }),
              e(".bt-tab-pane-t").hide(),
              e(".bt-tab-pane-t:first").show(),
              e(".bt-tb-btn-t").on("click", function () {
                e(".bt-tb-btn-t").removeClass("active"),
                  e(this).addClass("active"),
                  e(".bt-tab-pane-t").hide();
                var t = e(this).data("target");
                return e(t).fadeIn(500), !1;
              }),
              e(".bt-pane-p").hide(),
              e(".bt-pane-p:first").show(),
              e(".bt-tb-btn-p").on("click", function () {
                e(".bt-tb-btn-p").removeClass("active"),
                  e(this).addClass("active"),
                  e(".bt-pane-p").hide();
                var t = e(this).data("target");
                return e(t).fadeIn(500), !1;
              }),
              e(".bt-pane-pr").hide(),
              e(".bt-pane-pr:first").show(),
              e(".bt-tb-btn-pr").on("click", function () {
                e(".bt-tb-btn-pr").removeClass("active"),
                  e(this).addClass("active"),
                  e(".bt-pane-pr").hide();
                var t = e(this).data("target");
                return e(t).fadeIn(500), !1;
              }),
              e(".banner-three-slider").slick(
                s(
                  s(
                    s(
                      s(
                        {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          autoplay: !1,
                          autoplaySpeed: 2e3,
                          speed: 1500,
                          dots: !1,
                          pauseOnHover: !0,
                          arrows: !0,
                          draggable: !0,
                          rtl: "rtl" === e("html").attr("dir"),
                        },
                        "speed",
                        900
                      ),
                      "infinite",
                      !0
                    ),
                    "nextArrow",
                    "#banner-three-next"
                  ),
                  "prevArrow",
                  "#banner-three-prev"
                )
              ),
              e(".banner-three-slider").on(
                "beforeChange",
                function (t, i, n, o) {
                  e(".wow").css("visibility", "hidden").removeClass("animated");
                }
              ),
              e(".banner-three-slider").on("afterChange", function (t, i, n) {
                e(".wow").css("visibility", "visible");
              }),
              e(".feature-item-wrapper").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 10,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#feature-item-wrapper-next"
                    ),
                    "prevArrow",
                    "#feature-item-wrapper-prev"
                  ),
                  "responsive",
                  [
                    { breakpoint: 1699, settings: { slidesToShow: 9 } },
                    { breakpoint: 1599, settings: { slidesToShow: 8 } },
                    { breakpoint: 1399, settings: { slidesToShow: 6 } },
                    { breakpoint: 992, settings: { slidesToShow: 5 } },
                    { breakpoint: 768, settings: { slidesToShow: 4 } },
                    { breakpoint: 575, settings: { slidesToShow: 3 } },
                    { breakpoint: 424, settings: { slidesToShow: 2 } },
                    { breakpoint: 359, settings: { slidesToShow: 1 } },
                  ]
                )
              ),
              e(".feature-three-item-wrapper").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 6,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#feature-item-wrapper-next"
                    ),
                    "prevArrow",
                    "#feature-item-wrapper-prev"
                  ),
                  "responsive",
                  [
                    { breakpoint: 1599, settings: { slidesToShow: 5 } },
                    { breakpoint: 1399, settings: { slidesToShow: 4 } },
                    { breakpoint: 992, settings: { slidesToShow: 3 } },
                    { breakpoint: 768, settings: { slidesToShow: 3 } },
                    { breakpoint: 575, settings: { slidesToShow: 2 } },
                    { breakpoint: 424, settings: { slidesToShow: 2 } },
                    { breakpoint: 359, settings: { slidesToShow: 1 } },
                  ]
                )
              ),
              e(".banner-item-two__slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: !1,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !0,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#banner-next"
                    ),
                    "prevArrow",
                    "#banner-prev"
                  ),
                  "responsive",
                  [{ breakpoint: 767, settings: { slidesToShow: 1 } }]
                )
              ),
              e(".banner-item-two__slider").on(
                "beforeChange",
                function (t, i, n, o) {
                  e(".wow").css("visibility", "hidden").removeClass("animated");
                }
              ),
              e(".banner-item-two__slider").on(
                "afterChange",
                function (t, i, n) {
                  e(".wow").css("visibility", "visible");
                }
              ),
              e(".flash-sales__slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#flash-next"
                    ),
                    "prevArrow",
                    "#flash-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 991,
                      settings: { slidesToShow: 1, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".hot-deals-slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#deals-next"
                    ),
                    "prevArrow",
                    "#deals-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 1399,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 1199,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                    {
                      breakpoint: 575,
                      settings: { slidesToShow: 1, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".deals-week-slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 6,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#deal-week-next"
                    ),
                    "prevArrow",
                    "#deal-week-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 1599,
                      settings: { slidesToShow: 5, arrows: !1 },
                    },
                    {
                      breakpoint: 1399,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 1199,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                    {
                      breakpoint: 575,
                      settings: { slidesToShow: 1, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".top-selling-product-slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#top-selling-next"
                    ),
                    "prevArrow",
                    "#top-selling-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 1399,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 1199,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                    {
                      breakpoint: 575,
                      settings: { slidesToShow: 1, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".organic-food__slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 6,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#organic-next"
                    ),
                    "prevArrow",
                    "#organic-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 1599,
                      settings: { slidesToShow: 6, arrows: !1 },
                    },
                    {
                      breakpoint: 1399,
                      settings: { slidesToShow: 4, arrows: !1 },
                    },
                    {
                      breakpoint: 992,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 575,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                    {
                      breakpoint: 424,
                      settings: { slidesToShow: 1, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".new-arrival__slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 6,
                            slidesToScroll: 1,
                            autoplay: !1,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#new-arrival-next"
                    ),
                    "prevArrow",
                    "#new-arrival-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 1599,
                      settings: { slidesToShow: 6, arrows: !1 },
                    },
                    {
                      breakpoint: 1399,
                      settings: { slidesToShow: 4, arrows: !1 },
                    },
                    {
                      breakpoint: 992,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 575,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                    {
                      breakpoint: 424,
                      settings: { slidesToShow: 1, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".short-product-list").slick(
                s(
                  s(
                    s(
                      s(
                        {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          autoplay: !0,
                          autoplaySpeed: 2e3,
                          speed: 1500,
                          dots: !1,
                          pauseOnHover: !0,
                          arrows: !0,
                          draggable: !0,
                          rtl: "rtl" === e("html").attr("dir"),
                        },
                        "speed",
                        900
                      ),
                      "infinite",
                      !0
                    ),
                    "prevArrow",
                    '<button type="button" class="slick-prev border border-solid border-gray-100 w-30 h-30 bg-transparent rounded-[50rem] absolute hover-bg-main-600 hover-text-white hover-border-main-600 duration-100 ease-linear"><i class="ph ph-caret-left"></i></button>'
                  ),
                  "nextArrow",
                  '<button type="button" class="slick-next border border-solid border-gray-100 w-30 h-30 bg-transparent rounded-[50rem] absolute hover-bg-main-600 hover-text-white hover-border-main-600 duration-100 ease-linear"><i class="ph ph-caret-right"></i></button>'
                )
              ),
              e(".brand-slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 8,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#brand-next"
                    ),
                    "prevArrow",
                    "#brand-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 1599,
                      settings: { slidesToShow: 7, arrows: !1 },
                    },
                    {
                      breakpoint: 1399,
                      settings: { slidesToShow: 6, arrows: !1 },
                    },
                    {
                      breakpoint: 992,
                      settings: { slidesToShow: 5, arrows: !1 },
                    },
                    {
                      breakpoint: 575,
                      settings: { slidesToShow: 4, arrows: !1 },
                    },
                    {
                      breakpoint: 424,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 359,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".category-two .category__button").on("click", function () {
                e(".category-two .category__button").toggleClass("active"),
                  e(".responsive-dropdown.style-two")
                    .addClass("active")
                    .slideToggle(400);
              }),
              e(".featured-product-slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#featured-products-next"
                    ),
                    "prevArrow",
                    "#featured-products-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 991,
                      settings: { slidesToShow: 1, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".recommended-slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#recommended-next"
                    ),
                    "prevArrow",
                    "#recommended-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 1399,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 1199,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                    {
                      breakpoint: 575,
                      settings: { slidesToShow: 1, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".vendor-card__list.style-two").slick(
                s(
                  s(
                    s(
                      s(
                        {
                          slidesToShow: 4,
                          slidesToScroll: 1,
                          autoplay: !0,
                          autoplaySpeed: 2e3,
                          speed: 1500,
                          dots: !1,
                          pauseOnHover: !0,
                          arrows: !0,
                          draggable: !0,
                          rtl: "rtl" === e("html").attr("dir"),
                        },
                        "speed",
                        900
                      ),
                      "infinite",
                      !0
                    ),
                    "nextArrow",
                    "#vendor-next"
                  ),
                  "prevArrow",
                  "#vendor-prev"
                )
              ),
              e(".top-brand__slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 8,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#topBrand-next"
                    ),
                    "prevArrow",
                    "#topBrand-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 1599,
                      settings: { slidesToShow: 7, arrows: !1 },
                    },
                    {
                      breakpoint: 1399,
                      settings: { slidesToShow: 6, arrows: !1 },
                    },
                    {
                      breakpoint: 992,
                      settings: { slidesToShow: 5, arrows: !1 },
                    },
                    {
                      breakpoint: 575,
                      settings: { slidesToShow: 4, arrows: !1 },
                    },
                    {
                      breakpoint: 424,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 359,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".product-details__thumb-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                fade: !0,
                asNavFor: ".product-details__images-slider",
              }),
              e(".product-details__images-slider").slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: ".product-details__thumb-slider",
                dots: !1,
                arrows: !1,
                focusOnSelect: !0,
              });
            var c = e(".quantity__minus"),
              u = e(".quantity__plus");
            e(u).on("click", function () {
              var t = e(this).siblings(".quantity__input"),
                i = t.val();
              i++, t.val(i);
            }),
              e(c).on("click", function () {
                var t = e(this).siblings(".quantity__input"),
                  i = t.val();
                i > 1 && i--, t.val(i);
              }),
              e(".color-list__button").on("click", function () {
                e(".color-list__button").removeClass("border-gray-900"),
                  e(this).hasClass("border-gray-900")
                    ? (e(this).removeClass("border-gray-900"),
                      e(this).addClass("border-gray-50"))
                    : (e(this).addClass("border-gray-900"),
                      e(this).removeClass("border-gray-50"));
              }),
              e(function () {
                e("#slider-range").slider({
                  range: !0,
                  min: 0,
                  max: 25,
                  values: [0, 25],
                  slide: function (t, i) {
                    e("#amount").val("$" + i.values[0] + " - $" + i.values[1]);
                  },
                }),
                  e("#amount").val(
                    "$" +
                      e("#slider-range").slider("values", 0) +
                      " - $" +
                      e("#slider-range").slider("values", 1)
                  );
              }),
              e(".list-btn").on("click", function () {
                e(".grid-btn").addClass("border-gray-100"),
                  e(".grid-btn").removeClass(
                    "border-main-600 text-white bg-main-600"
                  ),
                  e(".list-grid-wrapper").removeClass("list-view"),
                  e(this).removeClass("border-gray-100"),
                  e(this).addClass("border-main-600 text-white bg-main-600"),
                  e(".list-grid-wrapper").addClass("list-view");
              }),
              e(".grid-btn").on("click", function () {
                e(".list-btn").addClass("border-gray-100"),
                  e(".list-btn").removeClass(
                    "border-main-600 text-white bg-main-600"
                  ),
                  e(".list-grid-wrapper").removeClass("list-view"),
                  e(this).removeClass("border-gray-100"),
                  e(this).addClass("border-main-600 text-white bg-main-600");
              }),
              e(".sidebar-btn").on("click", function () {
                e(this).addClass("bg-main-600 text-white"),
                  e(".shop-sidebar").addClass("active"),
                  e(".side-overlay").addClass("show"),
                  e("body").addClass("scroll-hide-sm");
              }),
              e(".side-overlay, .shop-sidebar__close").on("click", function () {
                e(".sidebar-btn").removeClass("bg-main-600 text-white"),
                  e(".shop-sidebar").removeClass("active"),
                  e(".side-overlay").removeClass("show"),
                  e("body").removeClass("scroll-hide-sm");
              }),
              e(".remove-tr-btn").on("click", function () {
                e(this).closest("tr").addClass("hidden");
              }),
              e(".payment-item .form-check-input:checked")
                .closest(".payment-item")
                .find(".payment-item__content")
                .show(),
              e(".payment-item .form-check-input").on("change", function () {
                e(".payment-item__content").hide(),
                  e(this)
                    .closest(".payment-item")
                    .find(".payment-item__content")
                    .show();
              }),
              e(".toggle-password").on("click", function () {
                e(this).toggleClass("active");
                var t = e(e(this).attr("id"));
                "password" == t.attr("type")
                  ? t.attr("type", "text")
                  : t.attr("type", "password");
              }),
              e(".text-slider").marquee({
                pauseOnHover: !0,
                allowCss3Support: !0,
                css3easing: "linear",
                easing: "linear",
                delayBeforeStart: 1e3,
                duration: 7e3,
                gap: 20,
                pauseOnCycle: !1,
                startVisible: !1,
              }),
              e(".expand-btn").on("click", function () {
                e(this).toggleClass("bg-main-two-600 text-white"),
                  e(this).parent().find(".expand-icons").toggleClass("flex"),
                  e(this).children("i").hasClass("ph ph-plus")
                    ? (e(this).children("i").removeClass("ph ph-plus"),
                      e(this).children("i").addClass("ph ph-x"))
                    : (e(this).children("i").removeClass("ph ph-x"),
                      e(this).children("i").addClass("ph ph-plus"));
              }),
              e(".wishlist-btn").on("click", function () {
                e(this).children("i").hasClass("ph ph-heart")
                  ? (e(this).children("i").removeClass("ph ph-heart"),
                    e(this)
                      .children("i")
                      .addClass("ph-fill ph-heart text-main-two-600"))
                  : (e(this)
                      .children("i")
                      .removeClass("ph-fill ph-heart text-main-two-600"),
                    e(this).children("i").addClass("ph ph-heart"));
              }),
              e(".instagram-slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            autoplay: !0,
                            autoplaySpeed: 2e3,
                            speed: 1500,
                            dots: !1,
                            pauseOnHover: !0,
                            arrows: !0,
                            draggable: !0,
                            rtl: "rtl" === e("html").attr("dir"),
                          },
                          "speed",
                          900
                        ),
                        "infinite",
                        !0
                      ),
                      "nextArrow",
                      "#instagram-next"
                    ),
                    "prevArrow",
                    "#instagram-prev"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 1299,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 992,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 768,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                    {
                      breakpoint: 424,
                      settings: { slidesToShow: 1, arrows: !1 },
                    },
                  ]
                )
              ),
              e(".testimonials-slider").slick(
                s(
                  s(
                    {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      asNavFor: ".testimonials-thumbs-slider",
                      dots: !0,
                      centerMode: !0,
                      focusOnSelect: !0,
                      fade: !0,
                      cssEase: "linear",
                    },
                    "dots",
                    !1
                  ),
                  "arrows",
                  !1
                )
              ),
              e(".testimonials-thumbs-slider").slick(
                s(
                  s(
                    s(
                      s(
                        s(
                          s(
                            {
                              slidesToShow: 4,
                              slidesToScroll: 1,
                              autoplay: !1,
                              autoplaySpeed: 2e3,
                              speed: 1500,
                              dots: !1,
                              pauseOnHover: !0,
                              arrows: !0,
                              draggable: !0,
                              rtl: "rtl" === e("html").attr("dir"),
                            },
                            "speed",
                            900
                          ),
                          "infinite",
                          !0
                        ),
                        "nextArrow",
                        "#testi-next"
                      ),
                      "prevArrow",
                      "#testi-prev"
                    ),
                    "asNavFor",
                    ".testimonials-slider"
                  ),
                  "responsive",
                  [
                    {
                      breakpoint: 1299,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 992,
                      settings: { slidesToShow: 3, arrows: !1 },
                    },
                    {
                      breakpoint: 768,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                    {
                      breakpoint: 424,
                      settings: { slidesToShow: 2, arrows: !1 },
                    },
                  ]
                )
              ),
              e('[class^="slider-"], [class*=" slider-"]').on(
                "afterChange",
                function () {
                  AOS.refreshHard();
                }
              );
          }),
            e(window).on("scroll", function () {
              e(window).scrollTop() >= 260
                ? e(".header").addClass("fixed-header")
                : e(".header").removeClass("fixed-header");
            });
        })(n);
      },
      505: function (e, t, i) {
        !(function (e) {
          "use strict";
          e(window).on("load", function () {
            e(".preloader").fadeOut();
          });
        })(i(692));
      },
      309: function (e, t, i) {
        var n = i(692);
        !(function (e) {
          "use strict";
          e(function () {
            var t = document.querySelector(".progress-wrap path"),
              i = t.getTotalLength();
            (t.style.transition = t.style.WebkitTransition = "none"),
              (t.style.strokeDasharray = i + " " + i),
              (t.style.strokeDashoffset = i),
              t.getBoundingClientRect(),
              (t.style.transition = t.style.WebkitTransition =
                "stroke-dashoffset 10ms linear");
            var o = function () {
              var n = e(window).scrollTop(),
                o = e(document).height() - e(window).height(),
                s = i - (n * i) / o;
              t.style.strokeDashoffset = s;
            };
            o(),
              e(window).on("scroll", o),
              n(window).on("scroll", function () {
                n(this).scrollTop() > 50
                  ? n(".progress-wrap").addClass("active-progress")
                  : n(".progress-wrap").removeClass("active-progress");
              }),
              n(".progress-wrap").on("click", function (e) {
                return (
                  e.preventDefault(),
                  n("html, body").animate({ scrollTop: 0 }, 550),
                  !1
                );
              });
          });
        })(n);
      },
      443: function () {
        for (
          var e = document.getElementsByTagName("head")[0],
            t = 0,
            i = ["regular", "thin", "light", "bold", "fill", "duotone"];
          t < i.length;
          t++
        ) {
          var n = i[t],
            o = document.createElement("link");
          (o.rel = "stylesheet"),
            (o.type = "text/css"),
            (o.href =
              "https://unpkg.com/@phosphor-icons/web@2.1.1/src/" +
              n +
              "/style.css"),
            e.appendChild(o);
        }
      },
      897: function (e, t, i) {
        var n, o, s;
        !(function () {
          "use strict";
          (o = [i(692), i(883)]),
            void 0 ===
              (s =
                "function" ==
                typeof (n = function (e) {
                  return (e.ui.keyCode = {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38,
                  });
                })
                  ? n.apply(t, o)
                  : n) || (e.exports = s);
        })();
      },
      883: function (e, t, i) {
        var n, o, s;
        !(function () {
          "use strict";
          (o = [i(692)]),
            void 0 ===
              (s =
                "function" ==
                typeof (n = function (e) {
                  return (e.ui = e.ui || {}), (e.ui.version = "1.14.0");
                })
                  ? n.apply(t, o)
                  : n) || (e.exports = s);
        })();
      },
      139: function (e, t, i) {
        var n, o, s;
        !(function () {
          "use strict";
          (o = [i(692), i(883)]),
            (n = function (e) {
              var t,
                i = 0,
                n = Array.prototype.hasOwnProperty,
                o = Array.prototype.slice;
              return (
                (e.cleanData =
                  ((t = e.cleanData),
                  function (i) {
                    var n, o, s;
                    for (s = 0; null != (o = i[s]); s++)
                      (n = e._data(o, "events")) &&
                        n.remove &&
                        e(o).triggerHandler("remove");
                    t(i);
                  })),
                (e.widget = function (t, i, n) {
                  var o,
                    s,
                    r,
                    a = {},
                    l = t.split(".")[0],
                    c = l + "-" + (t = t.split(".")[1]);
                  return (
                    n || ((n = i), (i = e.Widget)),
                    Array.isArray(n) &&
                      (n = e.extend.apply(null, [{}].concat(n))),
                    (e.expr.pseudos[c.toLowerCase()] = function (t) {
                      return !!e.data(t, c);
                    }),
                    (e[l] = e[l] || {}),
                    (o = e[l][t]),
                    (s = e[l][t] =
                      function (e, t) {
                        if (!this || !this._createWidget) return new s(e, t);
                        arguments.length && this._createWidget(e, t);
                      }),
                    e.extend(s, o, {
                      version: n.version,
                      _proto: e.extend({}, n),
                      _childConstructors: [],
                    }),
                    ((r = new i()).options = e.widget.extend({}, r.options)),
                    e.each(n, function (e, t) {
                      a[e] =
                        "function" == typeof t
                          ? (function () {
                              function n() {
                                return i.prototype[e].apply(this, arguments);
                              }
                              function o(t) {
                                return i.prototype[e].apply(this, t);
                              }
                              return function () {
                                var e,
                                  i = this._super,
                                  s = this._superApply;
                                return (
                                  (this._super = n),
                                  (this._superApply = o),
                                  (e = t.apply(this, arguments)),
                                  (this._super = i),
                                  (this._superApply = s),
                                  e
                                );
                              };
                            })()
                          : t;
                    }),
                    (s.prototype = e.widget.extend(
                      r,
                      { widgetEventPrefix: (o && r.widgetEventPrefix) || t },
                      a,
                      {
                        constructor: s,
                        namespace: l,
                        widgetName: t,
                        widgetFullName: c,
                      }
                    )),
                    o
                      ? (e.each(o._childConstructors, function (t, i) {
                          var n = i.prototype;
                          e.widget(
                            n.namespace + "." + n.widgetName,
                            s,
                            i._proto
                          );
                        }),
                        delete o._childConstructors)
                      : i._childConstructors.push(s),
                    e.widget.bridge(t, s),
                    s
                  );
                }),
                (e.widget.extend = function (t) {
                  for (
                    var i, s, r = o.call(arguments, 1), a = 0, l = r.length;
                    a < l;
                    a++
                  )
                    for (i in r[a])
                      (s = r[a][i]),
                        n.call(r[a], i) &&
                          void 0 !== s &&
                          (e.isPlainObject(s)
                            ? (t[i] = e.isPlainObject(t[i])
                                ? e.widget.extend({}, t[i], s)
                                : e.widget.extend({}, s))
                            : (t[i] = s));
                  return t;
                }),
                (e.widget.bridge = function (t, i) {
                  var n = i.prototype.widgetFullName || t;
                  e.fn[t] = function (s) {
                    var r = "string" == typeof s,
                      a = o.call(arguments, 1),
                      l = this;
                    return (
                      r
                        ? this.length || "instance" !== s
                          ? this.each(function () {
                              var i,
                                o = e.data(this, n);
                              return "instance" === s
                                ? ((l = o), !1)
                                : o
                                ? "function" != typeof o[s] ||
                                  "_" === s.charAt(0)
                                  ? e.error(
                                      "no such method '" +
                                        s +
                                        "' for " +
                                        t +
                                        " widget instance"
                                    )
                                  : (i = o[s].apply(o, a)) !== o && void 0 !== i
                                  ? ((l =
                                      i && i.jquery ? l.pushStack(i.get()) : i),
                                    !1)
                                  : void 0
                                : e.error(
                                    "cannot call methods on " +
                                      t +
                                      " prior to initialization; attempted to call method '" +
                                      s +
                                      "'"
                                  );
                            })
                          : (l = void 0)
                        : (a.length &&
                            (s = e.widget.extend.apply(null, [s].concat(a))),
                          this.each(function () {
                            var t = e.data(this, n);
                            t
                              ? (t.option(s || {}), t._init && t._init())
                              : e.data(this, n, new i(s, this));
                          })),
                      l
                    );
                  };
                }),
                (e.Widget = function () {}),
                (e.Widget._childConstructors = []),
                (e.Widget.prototype = {
                  widgetName: "widget",
                  widgetEventPrefix: "",
                  defaultElement: "<div>",
                  options: { classes: {}, disabled: !1, create: null },
                  _createWidget: function (t, n) {
                    (n = e(n || this.defaultElement || this)[0]),
                      (this.element = e(n)),
                      (this.uuid = i++),
                      (this.eventNamespace = "." + this.widgetName + this.uuid),
                      (this.bindings = e()),
                      (this.hoverable = e()),
                      (this.focusable = e()),
                      (this.classesElementLookup = {}),
                      n !== this &&
                        (e.data(n, this.widgetFullName, this),
                        this._on(!0, this.element, {
                          remove: function (e) {
                            e.target === n && this.destroy();
                          },
                        }),
                        (this.document = e(
                          n.style ? n.ownerDocument : n.document || n
                        )),
                        (this.window = e(
                          this.document[0].defaultView ||
                            this.document[0].parentWindow
                        ))),
                      (this.options = e.widget.extend(
                        {},
                        this.options,
                        this._getCreateOptions(),
                        t
                      )),
                      this._create(),
                      this.options.disabled &&
                        this._setOptionDisabled(this.options.disabled),
                      this._trigger("create", null, this._getCreateEventData()),
                      this._init();
                  },
                  _getCreateOptions: function () {
                    return {};
                  },
                  _getCreateEventData: e.noop,
                  _create: e.noop,
                  _init: e.noop,
                  destroy: function () {
                    var t = this;
                    this._destroy(),
                      e.each(this.classesElementLookup, function (e, i) {
                        t._removeClass(i, e);
                      }),
                      this.element
                        .off(this.eventNamespace)
                        .removeData(this.widgetFullName),
                      this.widget()
                        .off(this.eventNamespace)
                        .removeAttr("aria-disabled"),
                      this.bindings.off(this.eventNamespace);
                  },
                  _destroy: e.noop,
                  widget: function () {
                    return this.element;
                  },
                  option: function (t, i) {
                    var n,
                      o,
                      s,
                      r = t;
                    if (0 === arguments.length)
                      return e.widget.extend({}, this.options);
                    if ("string" == typeof t)
                      if (
                        ((r = {}),
                        (n = t.split(".")),
                        (t = n.shift()),
                        n.length)
                      ) {
                        for (
                          o = r[t] = e.widget.extend({}, this.options[t]),
                            s = 0;
                          s < n.length - 1;
                          s++
                        )
                          (o[n[s]] = o[n[s]] || {}), (o = o[n[s]]);
                        if (((t = n.pop()), 1 === arguments.length))
                          return void 0 === o[t] ? null : o[t];
                        o[t] = i;
                      } else {
                        if (1 === arguments.length)
                          return void 0 === this.options[t]
                            ? null
                            : this.options[t];
                        r[t] = i;
                      }
                    return this._setOptions(r), this;
                  },
                  _setOptions: function (e) {
                    var t;
                    for (t in e) this._setOption(t, e[t]);
                    return this;
                  },
                  _setOption: function (e, t) {
                    return (
                      "classes" === e && this._setOptionClasses(t),
                      (this.options[e] = t),
                      "disabled" === e && this._setOptionDisabled(t),
                      this
                    );
                  },
                  _setOptionClasses: function (t) {
                    var i, n, o;
                    for (i in t)
                      (o = this.classesElementLookup[i]),
                        t[i] !== this.options.classes[i] &&
                          o &&
                          o.length &&
                          ((n = e(o.get())),
                          this._removeClass(o, i),
                          n.addClass(
                            this._classes({
                              element: n,
                              keys: i,
                              classes: t,
                              add: !0,
                            })
                          ));
                  },
                  _setOptionDisabled: function (e) {
                    this._toggleClass(
                      this.widget(),
                      this.widgetFullName + "-disabled",
                      null,
                      !!e
                    ),
                      e &&
                        (this._removeClass(
                          this.hoverable,
                          null,
                          "ui-state-hover"
                        ),
                        this._removeClass(
                          this.focusable,
                          null,
                          "ui-state-focus"
                        ));
                  },
                  enable: function () {
                    return this._setOptions({ disabled: !1 });
                  },
                  disable: function () {
                    return this._setOptions({ disabled: !0 });
                  },
                  _classes: function (t) {
                    var i = [],
                      n = this;
                    function o() {
                      var i = [];
                      t.element.each(function (t, o) {
                        e
                          .map(n.classesElementLookup, function (e) {
                            return e;
                          })
                          .some(function (e) {
                            return e.is(o);
                          }) || i.push(o);
                      }),
                        n._on(e(i), { remove: "_untrackClassesElement" });
                    }
                    function s(s, r) {
                      var a, l;
                      for (l = 0; l < s.length; l++)
                        (a = n.classesElementLookup[s[l]] || e()),
                          t.add
                            ? (o(),
                              (a = e(
                                e.uniqueSort(a.get().concat(t.element.get()))
                              )))
                            : (a = e(a.not(t.element).get())),
                          (n.classesElementLookup[s[l]] = a),
                          i.push(s[l]),
                          r && t.classes[s[l]] && i.push(t.classes[s[l]]);
                    }
                    return (
                      (t = e.extend(
                        {
                          element: this.element,
                          classes: this.options.classes || {},
                        },
                        t
                      )).keys && s(t.keys.match(/\S+/g) || [], !0),
                      t.extra && s(t.extra.match(/\S+/g) || []),
                      i.join(" ")
                    );
                  },
                  _untrackClassesElement: function (t) {
                    var i = this;
                    e.each(i.classesElementLookup, function (n, o) {
                      -1 !== e.inArray(t.target, o) &&
                        (i.classesElementLookup[n] = e(o.not(t.target).get()));
                    }),
                      this._off(e(t.target));
                  },
                  _removeClass: function (e, t, i) {
                    return this._toggleClass(e, t, i, !1);
                  },
                  _addClass: function (e, t, i) {
                    return this._toggleClass(e, t, i, !0);
                  },
                  _toggleClass: function (e, t, i, n) {
                    n = "boolean" == typeof n ? n : i;
                    var o = "string" == typeof e || null === e,
                      s = {
                        extra: o ? t : i,
                        keys: o ? e : t,
                        element: o ? this.element : e,
                        add: n,
                      };
                    return s.element.toggleClass(this._classes(s), n), this;
                  },
                  _on: function (t, i, n) {
                    var o,
                      s = this;
                    "boolean" != typeof t && ((n = i), (i = t), (t = !1)),
                      n
                        ? ((i = o = e(i)),
                          (this.bindings = this.bindings.add(i)))
                        : ((n = i), (i = this.element), (o = this.widget())),
                      e.each(n, function (n, r) {
                        function a() {
                          if (
                            t ||
                            (!0 !== s.options.disabled &&
                              !e(this).hasClass("ui-state-disabled"))
                          )
                            return ("string" == typeof r ? s[r] : r).apply(
                              s,
                              arguments
                            );
                        }
                        "string" != typeof r &&
                          (a.guid = r.guid = r.guid || a.guid || e.guid++);
                        var l = n.match(/^([\w:-]*)\s*(.*)$/),
                          c = l[1] + s.eventNamespace,
                          u = l[2];
                        u ? o.on(c, u, a) : i.on(c, a);
                      });
                  },
                  _off: function (t, i) {
                    (i =
                      (i || "").split(" ").join(this.eventNamespace + " ") +
                      this.eventNamespace),
                      t.off(i),
                      (this.bindings = e(this.bindings.not(t).get())),
                      (this.focusable = e(this.focusable.not(t).get())),
                      (this.hoverable = e(this.hoverable.not(t).get()));
                  },
                  _delay: function (e, t) {
                    var i = this;
                    return setTimeout(function () {
                      return ("string" == typeof e ? i[e] : e).apply(
                        i,
                        arguments
                      );
                    }, t || 0);
                  },
                  _hoverable: function (t) {
                    (this.hoverable = this.hoverable.add(t)),
                      this._on(t, {
                        mouseenter: function (t) {
                          this._addClass(
                            e(t.currentTarget),
                            null,
                            "ui-state-hover"
                          );
                        },
                        mouseleave: function (t) {
                          this._removeClass(
                            e(t.currentTarget),
                            null,
                            "ui-state-hover"
                          );
                        },
                      });
                  },
                  _focusable: function (t) {
                    (this.focusable = this.focusable.add(t)),
                      this._on(t, {
                        focusin: function (t) {
                          this._addClass(
                            e(t.currentTarget),
                            null,
                            "ui-state-focus"
                          );
                        },
                        focusout: function (t) {
                          this._removeClass(
                            e(t.currentTarget),
                            null,
                            "ui-state-focus"
                          );
                        },
                      });
                  },
                  _trigger: function (t, i, n) {
                    var o,
                      s,
                      r = this.options[t];
                    if (
                      ((n = n || {}),
                      ((i = e.Event(i)).type = (
                        t === this.widgetEventPrefix
                          ? t
                          : this.widgetEventPrefix + t
                      ).toLowerCase()),
                      (i.target = this.element[0]),
                      (s = i.originalEvent))
                    )
                      for (o in s) o in i || (i[o] = s[o]);
                    return (
                      this.element.trigger(i, n),
                      !(
                        ("function" == typeof r &&
                          !1 === r.apply(this.element[0], [i].concat(n))) ||
                        i.isDefaultPrevented()
                      )
                    );
                  },
                }),
                e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
                  e.Widget.prototype["_" + t] = function (n, o, s) {
                    var r;
                    "string" == typeof o && (o = { effect: o });
                    var a = o
                      ? !0 === o || "number" == typeof o
                        ? i
                        : o.effect || i
                      : t;
                    "number" == typeof (o = o || {})
                      ? (o = { duration: o })
                      : !0 === o && (o = {}),
                      (r = !e.isEmptyObject(o)),
                      (o.complete = s),
                      o.delay && n.delay(o.delay),
                      r && e.effects && e.effects.effect[a]
                        ? n[t](o)
                        : a !== t && n[a]
                        ? n[a](o.duration, o.easing, s)
                        : n.queue(function (i) {
                            e(this)[t](), s && s.call(n[0]), i();
                          });
                  };
                }),
                e.widget
              );
            }),
            void 0 === (s = n.apply(t, o)) || (e.exports = s);
        })();
      },
      662: function (e, t, i) {
        var n, o, s;
        !(function () {
          "use strict";
          (o = [i(692), i(883), i(139)]),
            void 0 ===
              (s =
                "function" ==
                typeof (n = function (e) {
                  var t = !1;
                  return (
                    e(document).on("mouseup", function () {
                      t = !1;
                    }),
                    e.widget("ui.mouse", {
                      version: "1.14.0",
                      options: {
                        cancel: "input, textarea, button, select, option",
                        distance: 1,
                        delay: 0,
                      },
                      _mouseInit: function () {
                        var t = this;
                        this.element
                          .on("mousedown." + this.widgetName, function (e) {
                            return t._mouseDown(e);
                          })
                          .on("click." + this.widgetName, function (i) {
                            if (
                              !0 ===
                              e.data(
                                i.target,
                                t.widgetName + ".preventClickEvent"
                              )
                            )
                              return (
                                e.removeData(
                                  i.target,
                                  t.widgetName + ".preventClickEvent"
                                ),
                                i.stopImmediatePropagation(),
                                !1
                              );
                          }),
                          (this.started = !1);
                      },
                      _mouseDestroy: function () {
                        this.element.off("." + this.widgetName),
                          this._mouseMoveDelegate &&
                            this.document
                              .off(
                                "mousemove." + this.widgetName,
                                this._mouseMoveDelegate
                              )
                              .off(
                                "mouseup." + this.widgetName,
                                this._mouseUpDelegate
                              );
                      },
                      _mouseDown: function (i) {
                        if (!t) {
                          (this._mouseMoved = !1),
                            this._mouseStarted && this._mouseUp(i),
                            (this._mouseDownEvent = i);
                          var n = this,
                            o = 1 === i.which,
                            s =
                              "string" == typeof this.options.cancel &&
                              e(i.target).closest(this.options.cancel).length;
                          return !(
                            o &&
                            !s &&
                            this._mouseCapture(i) &&
                            ((this.mouseDelayMet = !this.options.delay),
                            this.mouseDelayMet ||
                              (this._mouseDelayTimer = setTimeout(function () {
                                n.mouseDelayMet = !0;
                              }, this.options.delay)),
                            this._mouseDistanceMet(i) &&
                            this._mouseDelayMet(i) &&
                            ((this._mouseStarted = !1 !== this._mouseStart(i)),
                            !this._mouseStarted)
                              ? (i.preventDefault(), 0)
                              : (!0 ===
                                  e.data(
                                    i.target,
                                    this.widgetName + ".preventClickEvent"
                                  ) &&
                                  e.removeData(
                                    i.target,
                                    this.widgetName + ".preventClickEvent"
                                  ),
                                (this._mouseMoveDelegate = function (e) {
                                  return n._mouseMove(e);
                                }),
                                (this._mouseUpDelegate = function (e) {
                                  return n._mouseUp(e);
                                }),
                                this.document
                                  .on(
                                    "mousemove." + this.widgetName,
                                    this._mouseMoveDelegate
                                  )
                                  .on(
                                    "mouseup." + this.widgetName,
                                    this._mouseUpDelegate
                                  ),
                                i.preventDefault(),
                                (t = !0),
                                0))
                          );
                        }
                      },
                      _mouseMove: function (e) {
                        if (this._mouseMoved && !e.which)
                          if (
                            e.originalEvent.altKey ||
                            e.originalEvent.ctrlKey ||
                            e.originalEvent.metaKey ||
                            e.originalEvent.shiftKey
                          )
                            this.ignoreMissingWhich = !0;
                          else if (!this.ignoreMissingWhich)
                            return this._mouseUp(e);
                        return (
                          (e.which || e.button) && (this._mouseMoved = !0),
                          this._mouseStarted
                            ? (this._mouseDrag(e), e.preventDefault())
                            : (this._mouseDistanceMet(e) &&
                                this._mouseDelayMet(e) &&
                                ((this._mouseStarted =
                                  !1 !==
                                  this._mouseStart(this._mouseDownEvent, e)),
                                this._mouseStarted
                                  ? this._mouseDrag(e)
                                  : this._mouseUp(e)),
                              !this._mouseStarted)
                        );
                      },
                      _mouseUp: function (i) {
                        this.document
                          .off(
                            "mousemove." + this.widgetName,
                            this._mouseMoveDelegate
                          )
                          .off(
                            "mouseup." + this.widgetName,
                            this._mouseUpDelegate
                          ),
                          this._mouseStarted &&
                            ((this._mouseStarted = !1),
                            i.target === this._mouseDownEvent.target &&
                              e.data(
                                i.target,
                                this.widgetName + ".preventClickEvent",
                                !0
                              ),
                            this._mouseStop(i)),
                          this._mouseDelayTimer &&
                            (clearTimeout(this._mouseDelayTimer),
                            delete this._mouseDelayTimer),
                          (this.ignoreMissingWhich = !1),
                          (t = !1),
                          i.preventDefault();
                      },
                      _mouseDistanceMet: function (e) {
                        return (
                          Math.max(
                            Math.abs(this._mouseDownEvent.pageX - e.pageX),
                            Math.abs(this._mouseDownEvent.pageY - e.pageY)
                          ) >= this.options.distance
                        );
                      },
                      _mouseDelayMet: function () {
                        return this.mouseDelayMet;
                      },
                      _mouseStart: function () {},
                      _mouseDrag: function () {},
                      _mouseStop: function () {},
                      _mouseCapture: function () {
                        return !0;
                      },
                    })
                  );
                })
                  ? n.apply(t, o)
                  : n) || (e.exports = s);
        })();
      },
      720: function (e, t, i) {
        var n, o, s;
        !(function () {
          "use strict";
          (o = [i(692), i(662), i(897), i(883), i(139)]),
            (n = function (e) {
              return e.widget("ui.slider", e.ui.mouse, {
                version: "1.14.0",
                widgetEventPrefix: "slide",
                options: {
                  animate: !1,
                  classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header",
                  },
                  distance: 0,
                  max: 100,
                  min: 0,
                  orientation: "horizontal",
                  range: !1,
                  step: 1,
                  value: 0,
                  values: null,
                  change: null,
                  slide: null,
                  start: null,
                  stop: null,
                },
                numPages: 5,
                _create: function () {
                  (this._keySliding = !1),
                    (this._mouseSliding = !1),
                    (this._animateOff = !0),
                    (this._handleIndex = null),
                    this._detectOrientation(),
                    this._mouseInit(),
                    this._calculateNewMax(),
                    this._addClass(
                      "ui-slider ui-slider-" + this.orientation,
                      "ui-widget ui-widget-content"
                    ),
                    this._refresh(),
                    (this._animateOff = !1);
                },
                _refresh: function () {
                  this._createRange(),
                    this._createHandles(),
                    this._setupEvents(),
                    this._refreshValue();
                },
                _createHandles: function () {
                  var t,
                    i,
                    n = this.options,
                    o = this.element.find(".ui-slider-handle"),
                    s = [];
                  for (
                    i = (n.values && n.values.length) || 1,
                      o.length > i &&
                        (o.slice(i).remove(), (o = o.slice(0, i))),
                      t = o.length;
                    t < i;
                    t++
                  )
                    s.push("<span tabindex='0'></span>");
                  (this.handles = o.add(e(s.join("")).appendTo(this.element))),
                    this._addClass(
                      this.handles,
                      "ui-slider-handle",
                      "ui-state-default"
                    ),
                    (this.handle = this.handles.eq(0)),
                    this.handles.each(function (t) {
                      e(this)
                        .data("ui-slider-handle-index", t)
                        .attr("tabIndex", 0);
                    });
                },
                _createRange: function () {
                  var t = this.options;
                  t.range
                    ? (!0 === t.range &&
                        (t.values
                          ? t.values.length && 2 !== t.values.length
                            ? (t.values = [t.values[0], t.values[0]])
                            : Array.isArray(t.values) &&
                              (t.values = t.values.slice(0))
                          : (t.values = [this._valueMin(), this._valueMin()])),
                      this.range && this.range.length
                        ? (this._removeClass(
                            this.range,
                            "ui-slider-range-min ui-slider-range-max"
                          ),
                          this.range.css({ left: "", bottom: "" }))
                        : ((this.range = e("<div>").appendTo(this.element)),
                          this._addClass(this.range, "ui-slider-range")),
                      ("min" !== t.range && "max" !== t.range) ||
                        this._addClass(
                          this.range,
                          "ui-slider-range-" + t.range
                        ))
                    : (this.range && this.range.remove(), (this.range = null));
                },
                _setupEvents: function () {
                  this._off(this.handles),
                    this._on(this.handles, this._handleEvents),
                    this._hoverable(this.handles),
                    this._focusable(this.handles);
                },
                _destroy: function () {
                  this.handles.remove(),
                    this.range && this.range.remove(),
                    this._mouseDestroy();
                },
                _mouseCapture: function (t) {
                  var i,
                    n,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c = this,
                    u = this.options;
                  return (
                    !u.disabled &&
                    ((this.elementSize = {
                      width: this.element.outerWidth(),
                      height: this.element.outerHeight(),
                    }),
                    (this.elementOffset = this.element.offset()),
                    (i = { x: t.pageX, y: t.pageY }),
                    (n = this._normValueFromMouse(i)),
                    (o = this._valueMax() - this._valueMin() + 1),
                    this.handles.each(function (t) {
                      var i = Math.abs(n - c.values(t));
                      (o > i ||
                        (o === i &&
                          (t === c._lastChangedValue ||
                            c.values(t) === u.min))) &&
                        ((o = i), (s = e(this)), (r = t));
                    }),
                    !1 !== this._start(t, r) &&
                      ((this._mouseSliding = !0),
                      (this._handleIndex = r),
                      this._addClass(s, null, "ui-state-active"),
                      s.trigger("focus"),
                      (a = s.offset()),
                      (l = !e(t.target)
                        .parents()
                        .addBack()
                        .is(".ui-slider-handle")),
                      (this._clickOffset = l
                        ? { left: 0, top: 0 }
                        : {
                            left: t.pageX - a.left - s.width() / 2,
                            top:
                              t.pageY -
                              a.top -
                              s.height() / 2 -
                              (parseInt(s.css("borderTopWidth"), 10) || 0) -
                              (parseInt(s.css("borderBottomWidth"), 10) || 0) +
                              (parseInt(s.css("marginTop"), 10) || 0),
                          }),
                      this.handles.hasClass("ui-state-hover") ||
                        this._slide(t, r, n),
                      (this._animateOff = !0),
                      !0))
                  );
                },
                _mouseStart: function () {
                  return !0;
                },
                _mouseDrag: function (e) {
                  var t = { x: e.pageX, y: e.pageY },
                    i = this._normValueFromMouse(t);
                  return this._slide(e, this._handleIndex, i), !1;
                },
                _mouseStop: function (e) {
                  return (
                    this._removeClass(this.handles, null, "ui-state-active"),
                    (this._mouseSliding = !1),
                    this._stop(e, this._handleIndex),
                    this._change(e, this._handleIndex),
                    (this._handleIndex = null),
                    (this._clickOffset = null),
                    (this._animateOff = !1),
                    !1
                  );
                },
                _detectOrientation: function () {
                  this.orientation =
                    "vertical" === this.options.orientation
                      ? "vertical"
                      : "horizontal";
                },
                _normValueFromMouse: function (e) {
                  var t, i, n, o, s;
                  return (
                    "horizontal" === this.orientation
                      ? ((t = this.elementSize.width),
                        (i =
                          e.x -
                          this.elementOffset.left -
                          (this._clickOffset ? this._clickOffset.left : 0)))
                      : ((t = this.elementSize.height),
                        (i =
                          e.y -
                          this.elementOffset.top -
                          (this._clickOffset ? this._clickOffset.top : 0))),
                    (n = i / t) > 1 && (n = 1),
                    n < 0 && (n = 0),
                    "vertical" === this.orientation && (n = 1 - n),
                    (o = this._valueMax() - this._valueMin()),
                    (s = this._valueMin() + n * o),
                    this._trimAlignValue(s)
                  );
                },
                _uiHash: function (e, t, i) {
                  var n = {
                    handle: this.handles[e],
                    handleIndex: e,
                    value: void 0 !== t ? t : this.value(),
                  };
                  return (
                    this._hasMultipleValues() &&
                      ((n.value = void 0 !== t ? t : this.values(e)),
                      (n.values = i || this.values())),
                    n
                  );
                },
                _hasMultipleValues: function () {
                  return this.options.values && this.options.values.length;
                },
                _start: function (e, t) {
                  return this._trigger("start", e, this._uiHash(t));
                },
                _slide: function (e, t, i) {
                  var n,
                    o = this.value(),
                    s = this.values();
                  this._hasMultipleValues() &&
                    ((n = this.values(t ? 0 : 1)),
                    (o = this.values(t)),
                    2 === this.options.values.length &&
                      !0 === this.options.range &&
                      (i = 0 === t ? Math.min(n, i) : Math.max(n, i)),
                    (s[t] = i)),
                    i !== o &&
                      !1 !== this._trigger("slide", e, this._uiHash(t, i, s)) &&
                      (this._hasMultipleValues()
                        ? this.values(t, i)
                        : this.value(i));
                },
                _stop: function (e, t) {
                  this._trigger("stop", e, this._uiHash(t));
                },
                _change: function (e, t) {
                  this._keySliding ||
                    this._mouseSliding ||
                    ((this._lastChangedValue = t),
                    this._trigger("change", e, this._uiHash(t)));
                },
                value: function (e) {
                  return arguments.length
                    ? ((this.options.value = this._trimAlignValue(e)),
                      this._refreshValue(),
                      void this._change(null, 0))
                    : this._value();
                },
                values: function (e, t) {
                  var i, n, o;
                  if (arguments.length > 1)
                    return (
                      (this.options.values[e] = this._trimAlignValue(t)),
                      this._refreshValue(),
                      void this._change(null, e)
                    );
                  if (!arguments.length) return this._values();
                  if (!Array.isArray(arguments[0]))
                    return this._hasMultipleValues()
                      ? this._values(e)
                      : this.value();
                  for (
                    i = this.options.values, n = arguments[0], o = 0;
                    o < i.length;
                    o += 1
                  )
                    (i[o] = this._trimAlignValue(n[o])), this._change(null, o);
                  this._refreshValue();
                },
                _setOption: function (e, t) {
                  var i,
                    n = 0;
                  switch (
                    ("range" === e &&
                      !0 === this.options.range &&
                      ("min" === t
                        ? ((this.options.value = this._values(0)),
                          (this.options.values = null))
                        : "max" === t &&
                          ((this.options.value = this._values(
                            this.options.values.length - 1
                          )),
                          (this.options.values = null))),
                    Array.isArray(this.options.values) &&
                      (n = this.options.values.length),
                    this._super(e, t),
                    e)
                  ) {
                    case "orientation":
                      this._detectOrientation(),
                        this._removeClass(
                          "ui-slider-horizontal ui-slider-vertical"
                        )._addClass("ui-slider-" + this.orientation),
                        this._refreshValue(),
                        this.options.range && this._refreshRange(t),
                        this.handles.css(
                          "horizontal" === t ? "bottom" : "left",
                          ""
                        );
                      break;
                    case "value":
                      (this._animateOff = !0),
                        this._refreshValue(),
                        this._change(null, 0),
                        (this._animateOff = !1);
                      break;
                    case "values":
                      for (
                        this._animateOff = !0, this._refreshValue(), i = n - 1;
                        i >= 0;
                        i--
                      )
                        this._change(null, i);
                      this._animateOff = !1;
                      break;
                    case "step":
                    case "min":
                    case "max":
                      (this._animateOff = !0),
                        this._calculateNewMax(),
                        this._refreshValue(),
                        (this._animateOff = !1);
                      break;
                    case "range":
                      (this._animateOff = !0),
                        this._refresh(),
                        (this._animateOff = !1);
                  }
                },
                _setOptionDisabled: function (e) {
                  this._super(e),
                    this._toggleClass(null, "ui-state-disabled", !!e);
                },
                _value: function () {
                  var e = this.options.value;
                  return this._trimAlignValue(e);
                },
                _values: function (e) {
                  var t, i, n;
                  if (arguments.length)
                    return (
                      (t = this.options.values[e]), this._trimAlignValue(t)
                    );
                  if (this._hasMultipleValues()) {
                    for (
                      i = this.options.values.slice(), n = 0;
                      n < i.length;
                      n += 1
                    )
                      i[n] = this._trimAlignValue(i[n]);
                    return i;
                  }
                  return [];
                },
                _trimAlignValue: function (e) {
                  if (e <= this._valueMin()) return this._valueMin();
                  if (e >= this._valueMax()) return this._valueMax();
                  var t = this.options.step > 0 ? this.options.step : 1,
                    i = (e - this._valueMin()) % t,
                    n = e - i;
                  return (
                    2 * Math.abs(i) >= t && (n += i > 0 ? t : -t),
                    parseFloat(n.toFixed(5))
                  );
                },
                _calculateNewMax: function () {
                  var e = this.options.max,
                    t = this._valueMin(),
                    i = this.options.step;
                  (e = Math.round((e - t) / i) * i + t) > this.options.max &&
                    (e -= i),
                    (this.max = parseFloat(e.toFixed(this._precision())));
                },
                _precision: function () {
                  var e = this._precisionOf(this.options.step);
                  return (
                    null !== this.options.min &&
                      (e = Math.max(e, this._precisionOf(this.options.min))),
                    e
                  );
                },
                _precisionOf: function (e) {
                  var t = e.toString(),
                    i = t.indexOf(".");
                  return -1 === i ? 0 : t.length - i - 1;
                },
                _valueMin: function () {
                  return this.options.min;
                },
                _valueMax: function () {
                  return this.max;
                },
                _refreshRange: function (e) {
                  "vertical" === e && this.range.css({ width: "", left: "" }),
                    "horizontal" === e &&
                      this.range.css({ height: "", bottom: "" });
                },
                _refreshValue: function () {
                  var t,
                    i,
                    n,
                    o,
                    s,
                    r = this.options.range,
                    a = this.options,
                    l = this,
                    c = !this._animateOff && a.animate,
                    u = {};
                  this._hasMultipleValues()
                    ? this.handles.each(function (n) {
                        (i =
                          ((l.values(n) - l._valueMin()) /
                            (l._valueMax() - l._valueMin())) *
                          100),
                          (u[
                            "horizontal" === l.orientation ? "left" : "bottom"
                          ] = i + "%"),
                          e(this)
                            .stop(1, 1)
                            [c ? "animate" : "css"](u, a.animate),
                          !0 === l.options.range &&
                            ("horizontal" === l.orientation
                              ? (0 === n &&
                                  l.range
                                    .stop(1, 1)
                                    [c ? "animate" : "css"](
                                      { left: i + "%" },
                                      a.animate
                                    ),
                                1 === n &&
                                  l.range[c ? "animate" : "css"](
                                    { width: i - t + "%" },
                                    { queue: !1, duration: a.animate }
                                  ))
                              : (0 === n &&
                                  l.range
                                    .stop(1, 1)
                                    [c ? "animate" : "css"](
                                      { bottom: i + "%" },
                                      a.animate
                                    ),
                                1 === n &&
                                  l.range[c ? "animate" : "css"](
                                    { height: i - t + "%" },
                                    { queue: !1, duration: a.animate }
                                  ))),
                          (t = i);
                      })
                    : ((n = this.value()),
                      (o = this._valueMin()),
                      (s = this._valueMax()),
                      (i = s !== o ? ((n - o) / (s - o)) * 100 : 0),
                      (u[
                        "horizontal" === this.orientation ? "left" : "bottom"
                      ] = i + "%"),
                      this.handle
                        .stop(1, 1)
                        [c ? "animate" : "css"](u, a.animate),
                      "min" === r &&
                        "horizontal" === this.orientation &&
                        this.range
                          .stop(1, 1)
                          [c ? "animate" : "css"](
                            { width: i + "%" },
                            a.animate
                          ),
                      "max" === r &&
                        "horizontal" === this.orientation &&
                        this.range
                          .stop(1, 1)
                          [c ? "animate" : "css"](
                            { width: 100 - i + "%" },
                            a.animate
                          ),
                      "min" === r &&
                        "vertical" === this.orientation &&
                        this.range
                          .stop(1, 1)
                          [c ? "animate" : "css"](
                            { height: i + "%" },
                            a.animate
                          ),
                      "max" === r &&
                        "vertical" === this.orientation &&
                        this.range
                          .stop(1, 1)
                          [c ? "animate" : "css"](
                            { height: 100 - i + "%" },
                            a.animate
                          ));
                },
                _handleEvents: {
                  keydown: function (t) {
                    var i,
                      n,
                      o,
                      s = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                      case e.ui.keyCode.HOME:
                      case e.ui.keyCode.END:
                      case e.ui.keyCode.PAGE_UP:
                      case e.ui.keyCode.PAGE_DOWN:
                      case e.ui.keyCode.UP:
                      case e.ui.keyCode.RIGHT:
                      case e.ui.keyCode.DOWN:
                      case e.ui.keyCode.LEFT:
                        if (
                          (t.preventDefault(),
                          !this._keySliding &&
                            ((this._keySliding = !0),
                            this._addClass(
                              e(t.target),
                              null,
                              "ui-state-active"
                            ),
                            !1 === this._start(t, s)))
                        )
                          return;
                    }
                    switch (
                      ((o = this.options.step),
                      (i = n =
                        this._hasMultipleValues()
                          ? this.values(s)
                          : this.value()),
                      t.keyCode)
                    ) {
                      case e.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                      case e.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                      case e.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(
                          i +
                            (this._valueMax() - this._valueMin()) /
                              this.numPages
                        );
                        break;
                      case e.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(
                          i -
                            (this._valueMax() - this._valueMin()) /
                              this.numPages
                        );
                        break;
                      case e.ui.keyCode.UP:
                      case e.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        n = this._trimAlignValue(i + o);
                        break;
                      case e.ui.keyCode.DOWN:
                      case e.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        n = this._trimAlignValue(i - o);
                    }
                    this._slide(t, s, n);
                  },
                  keyup: function (t) {
                    var i = e(t.target).data("ui-slider-handle-index");
                    this._keySliding &&
                      ((this._keySliding = !1),
                      this._stop(t, i),
                      this._change(t, i),
                      this._removeClass(e(t.target), null, "ui-state-active"));
                  },
                },
              });
            }),
            void 0 === (s = n.apply(t, o)) || (e.exports = s);
        })();
      },
      959: function (e, t, i) {
        var n, o, s;
        !(function () {
          "use strict";
          (o = [i(692)]),
            void 0 ===
              (s =
                "function" ==
                typeof (n = function (e) {
                  (e.fn.marquee = function (t) {
                    return this.each(function () {
                      var i,
                        n,
                        o,
                        s,
                        r,
                        a = e.extend({}, e.fn.marquee.defaults, t),
                        l = e(this),
                        c = 3,
                        u = "animation-play-state",
                        d = !1,
                        p = function (e, t, i) {
                          for (
                            var n = ["webkit", "moz", "MS", "o", ""], o = 0;
                            o < n.length;
                            o++
                          )
                            n[o] || (t = t.toLowerCase()),
                              e.addEventListener(n[o] + t, i, !1);
                        },
                        h = function () {
                          l.timer = setTimeout(E, a.delayBeforeStart);
                        },
                        f = {
                          pause: function () {
                            d && a.allowCss3Support
                              ? i.css(u, "paused")
                              : e.fn.pause && i.pause(),
                              l.data("runningStatus", "paused"),
                              l.trigger("paused");
                          },
                          resume: function () {
                            d && a.allowCss3Support
                              ? i.css(u, "running")
                              : e.fn.resume && i.resume(),
                              l.data("runningStatus", "resumed"),
                              l.trigger("resumed");
                          },
                          toggle: function () {
                            f[
                              "resumed" === l.data("runningStatus")
                                ? "pause"
                                : "resume"
                            ]();
                          },
                          destroy: function () {
                            clearTimeout(l.timer),
                              l.find("*").addBack().off(),
                              l.html(l.find(".js-marquee:first").html());
                          },
                        };
                      if ("string" != typeof t) {
                        var g;
                        e.each(a, function (e) {
                          if (void 0 !== (g = l.attr("data-" + e))) {
                            switch (g) {
                              case "true":
                                g = !0;
                                break;
                              case "false":
                                g = !1;
                            }
                            a[e] = g;
                          }
                        }),
                          a.speed &&
                            (a.duration =
                              (parseInt(l.width(), 10) / a.speed) * 1e3),
                          (s = "up" === a.direction || "down" === a.direction),
                          (a.gap = a.duplicated ? parseInt(a.gap) : 0),
                          l.wrapInner('<div class="js-marquee"></div>');
                        var m = l
                          .find(".js-marquee")
                          .css({ "margin-right": a.gap, float: "left" });
                        if (
                          (a.duplicated && m.clone(!0).appendTo(l),
                          l.wrapInner(
                            '<div style="width:100000px" class="js-marquee-wrapper"></div>'
                          ),
                          (i = l.find(".js-marquee-wrapper")),
                          s)
                        ) {
                          var v = l.height();
                          i.removeAttr("style"),
                            l.height(v),
                            l
                              .find(".js-marquee")
                              .css({
                                float: "none",
                                "margin-bottom": a.gap,
                                "margin-right": 0,
                              }),
                            a.duplicated &&
                              l
                                .find(".js-marquee:last")
                                .css({ "margin-bottom": 0 });
                          var y = l.find(".js-marquee:first").height() + a.gap;
                          a.startVisible && !a.duplicated
                            ? ((a._completeDuration =
                                ((parseInt(y, 10) + parseInt(v, 10)) /
                                  parseInt(v, 10)) *
                                a.duration),
                              (a.duration =
                                (parseInt(y, 10) / parseInt(v, 10)) *
                                a.duration))
                            : (a.duration =
                                ((parseInt(y, 10) + parseInt(v, 10)) /
                                  parseInt(v, 10)) *
                                a.duration);
                        } else
                          (r = l.find(".js-marquee:first").width() + a.gap),
                            (n = l.width()),
                            a.startVisible && !a.duplicated
                              ? ((a._completeDuration =
                                  ((parseInt(r, 10) + parseInt(n, 10)) /
                                    parseInt(n, 10)) *
                                  a.duration),
                                (a.duration =
                                  (parseInt(r, 10) / parseInt(n, 10)) *
                                  a.duration))
                              : (a.duration =
                                  ((parseInt(r, 10) + parseInt(n, 10)) /
                                    parseInt(n, 10)) *
                                  a.duration);
                        if (
                          (a.duplicated && (a.duration = a.duration / 2),
                          a.allowCss3Support)
                        ) {
                          var b =
                              document.body || document.createElement("div"),
                            w =
                              "marqueeAnimation-" +
                              Math.floor(1e7 * Math.random()),
                            x = "Webkit Moz O ms Khtml".split(" "),
                            k = "animation",
                            S = "",
                            T = "";
                          if (
                            (void 0 !== b.style.animation &&
                              ((T = "@keyframes " + w + " "), (d = !0)),
                            !1 === d)
                          )
                            for (var _ = 0; _ < x.length; _++)
                              if (void 0 !== b.style[x[_] + "AnimationName"]) {
                                var C = "-" + x[_].toLowerCase() + "-";
                                (k = C + k),
                                  (u = C + u),
                                  (T = "@" + C + "keyframes " + w + " "),
                                  (d = !0);
                                break;
                              }
                          d &&
                            ((S =
                              w +
                              " " +
                              a.duration / 1e3 +
                              "s " +
                              a.delayBeforeStart / 1e3 +
                              "s infinite " +
                              a.css3easing),
                            l.data("css3AnimationIsSupported", !0));
                        }
                        var $ = function () {
                            i.css(
                              "transform",
                              "translateY(" +
                                ("up" === a.direction
                                  ? v + "px"
                                  : "-" + y + "px") +
                                ")"
                            );
                          },
                          A = function () {
                            i.css(
                              "transform",
                              "translateX(" +
                                ("left" === a.direction
                                  ? n + "px"
                                  : "-" + r + "px") +
                                ")"
                            );
                          };
                        a.duplicated
                          ? (s
                              ? a.startVisible
                                ? i.css("transform", "translateY(0)")
                                : i.css(
                                    "transform",
                                    "translateY(" +
                                      ("up" === a.direction
                                        ? v + "px"
                                        : "-" + (2 * y - a.gap) + "px") +
                                      ")"
                                  )
                              : a.startVisible
                              ? i.css("transform", "translateX(0)")
                              : i.css(
                                  "transform",
                                  "translateX(" +
                                    ("left" === a.direction
                                      ? n + "px"
                                      : "-" + (2 * r - a.gap) + "px") +
                                    ")"
                                ),
                            a.startVisible || (c = 1))
                          : a.startVisible
                          ? (c = 2)
                          : s
                          ? $()
                          : A();
                        var E = function () {
                          if (
                            (a.duplicated &&
                              (1 === c
                                ? ((a._originalDuration = a.duration),
                                  (a.duration = s
                                    ? "up" === a.direction
                                      ? a.duration + v / (y / a.duration)
                                      : 2 * a.duration
                                    : "left" === a.direction
                                    ? a.duration + n / (r / a.duration)
                                    : 2 * a.duration),
                                  S &&
                                    (S =
                                      w +
                                      " " +
                                      a.duration / 1e3 +
                                      "s " +
                                      a.delayBeforeStart / 1e3 +
                                      "s " +
                                      a.css3easing),
                                  c++)
                                : 2 === c &&
                                  ((a.duration = a._originalDuration),
                                  S &&
                                    ((w += "0"),
                                    (T = e.trim(T) + "0 "),
                                    (S =
                                      w +
                                      " " +
                                      a.duration / 1e3 +
                                      "s 0s infinite " +
                                      a.css3easing)),
                                  c++)),
                            s
                              ? a.duplicated
                                ? (c > 2 &&
                                    i.css(
                                      "transform",
                                      "translateY(" +
                                        ("up" === a.direction
                                          ? 0
                                          : "-" + y + "px") +
                                        ")"
                                    ),
                                  (o = {
                                    transform:
                                      "translateY(" +
                                      ("up" === a.direction
                                        ? "-" + y + "px"
                                        : 0) +
                                      ")",
                                  }))
                                : a.startVisible
                                ? 2 === c
                                  ? (S &&
                                      (S =
                                        w +
                                        " " +
                                        a.duration / 1e3 +
                                        "s " +
                                        a.delayBeforeStart / 1e3 +
                                        "s " +
                                        a.css3easing),
                                    (o = {
                                      transform:
                                        "translateY(" +
                                        ("up" === a.direction
                                          ? "-" + y + "px"
                                          : v + "px") +
                                        ")",
                                    }),
                                    c++)
                                  : 3 === c &&
                                    ((a.duration = a._completeDuration),
                                    S &&
                                      ((w += "0"),
                                      (T = e.trim(T) + "0 "),
                                      (S =
                                        w +
                                        " " +
                                        a.duration / 1e3 +
                                        "s 0s infinite " +
                                        a.css3easing)),
                                    $())
                                : ($(),
                                  (o = {
                                    transform:
                                      "translateY(" +
                                      ("up" === a.direction
                                        ? "-" + i.height() + "px"
                                        : v + "px") +
                                      ")",
                                  }))
                              : a.duplicated
                              ? (c > 2 &&
                                  i.css(
                                    "transform",
                                    "translateX(" +
                                      ("left" === a.direction
                                        ? 0
                                        : "-" + r + "px") +
                                      ")"
                                  ),
                                (o = {
                                  transform:
                                    "translateX(" +
                                    ("left" === a.direction
                                      ? "-" + r + "px"
                                      : 0) +
                                    ")",
                                }))
                              : a.startVisible
                              ? 2 === c
                                ? (S &&
                                    (S =
                                      w +
                                      " " +
                                      a.duration / 1e3 +
                                      "s " +
                                      a.delayBeforeStart / 1e3 +
                                      "s " +
                                      a.css3easing),
                                  (o = {
                                    transform:
                                      "translateX(" +
                                      ("left" === a.direction
                                        ? "-" + r + "px"
                                        : n + "px") +
                                      ")",
                                  }),
                                  c++)
                                : 3 === c &&
                                  ((a.duration = a._completeDuration),
                                  S &&
                                    ((w += "0"),
                                    (T = e.trim(T) + "0 "),
                                    (S =
                                      w +
                                      " " +
                                      a.duration / 1e3 +
                                      "s 0s infinite " +
                                      a.css3easing)),
                                  A())
                              : (A(),
                                (o = {
                                  transform:
                                    "translateX(" +
                                    ("left" === a.direction
                                      ? "-" + r + "px"
                                      : n + "px") +
                                    ")",
                                })),
                            l.trigger("beforeStarting"),
                            d)
                          ) {
                            i.css(k, S);
                            var t =
                                T +
                                " { 100%  " +
                                (function (e) {
                                  var t = [];
                                  for (var i in e)
                                    e.hasOwnProperty(i) &&
                                      t.push(i + ":" + e[i]);
                                  return t.push(), "{" + t.join(",") + "}";
                                })(o) +
                                "}",
                              u = i.find("style");
                            0 !== u.length
                              ? u.filter(":last").html(t)
                              : e("head").append("<style>" + t + "</style>"),
                              p(i[0], "AnimationIteration", function () {
                                l.trigger("finished");
                              }),
                              p(i[0], "AnimationEnd", function () {
                                E(), l.trigger("finished");
                              });
                          } else
                            i.animate(o, a.duration, a.easing, function () {
                              l.trigger("finished"), a.pauseOnCycle ? h() : E();
                            });
                          l.data("runningStatus", "resumed");
                        };
                        l.on("pause", f.pause),
                          l.on("resume", f.resume),
                          a.pauseOnHover &&
                            (l.on("mouseenter", f.pause),
                            l.on("mouseleave", f.resume)),
                          d && a.allowCss3Support ? E() : h();
                      } else e.isFunction(f[t]) && (i || (i = l.find(".js-marquee-wrapper")), !0 === l.data("css3AnimationIsSupported") && (d = !0), f[t]());
                    });
                  }),
                    (e.fn.marquee.defaults = {
                      allowCss3Support: !0,
                      css3easing: "linear",
                      easing: "linear",
                      delayBeforeStart: 1e3,
                      direction: "left",
                      duplicated: !1,
                      duration: 5e3,
                      speed: 0,
                      gap: 20,
                      pauseOnCycle: !1,
                      pauseOnHover: !1,
                      startVisible: !1,
                    });
                })
                  ? n.apply(t, o)
                  : n) || (e.exports = s);
        })();
      },
      692: function (e, t) {
        var i;
        !(function (t, i) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? i(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return i(e);
                  })
            : i(t);
        })("undefined" != typeof window ? window : this, function (n, o) {
          "use strict";
          var s = [],
            r = Object.getPrototypeOf,
            a = s.slice,
            l = s.flat
              ? function (e) {
                  return s.flat.call(e);
                }
              : function (e) {
                  return s.concat.apply([], e);
                },
            c = s.push,
            u = s.indexOf,
            d = {},
            p = d.toString,
            h = d.hasOwnProperty,
            f = h.toString,
            g = f.call(Object),
            m = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = n.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, i) {
            var n,
              o,
              s = (i = i || b).createElement("script");
            if (((s.text = e), t))
              for (n in w)
                (o = t[n] || (t.getAttribute && t.getAttribute(n))) &&
                  s.setAttribute(n, o);
            i.head.appendChild(s).parentNode.removeChild(s);
          }
          function k(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[p.call(e)] || "object"
              : typeof e;
          }
          var S = "3.7.1",
            T = /HTML$/i,
            _ = function (e, t) {
              return new _.fn.init(e, t);
            };
          function C(e) {
            var t = !!e && "length" in e && e.length,
              i = k(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === i ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          function $(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          (_.fn = _.prototype =
            {
              jquery: S,
              constructor: _,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = _.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return _.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  _.map(this, function (t, i) {
                    return e.call(t, i, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  _.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  _.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  i = +e + (e < 0 ? t : 0);
                return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: s.sort,
              splice: s.splice,
            }),
            (_.extend = _.fn.extend =
              function () {
                var e,
                  t,
                  i,
                  n,
                  o,
                  s,
                  r = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof r &&
                    ((c = r), (r = arguments[a] || {}), a++),
                    "object" == typeof r || v(r) || (r = {}),
                    a === l && ((r = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (n = e[t]),
                        "__proto__" !== t &&
                          r !== n &&
                          (c &&
                          n &&
                          (_.isPlainObject(n) || (o = Array.isArray(n)))
                            ? ((i = r[t]),
                              (s =
                                o && !Array.isArray(i)
                                  ? []
                                  : o || _.isPlainObject(i)
                                  ? i
                                  : {}),
                              (o = !1),
                              (r[t] = _.extend(c, s, n)))
                            : void 0 !== n && (r[t] = n));
                return r;
              }),
            _.extend({
              expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, i;
                return !(
                  !e ||
                  "[object Object]" !== p.call(e) ||
                  ((t = r(e)) &&
                    ("function" !=
                      typeof (i = h.call(t, "constructor") && t.constructor) ||
                      f.call(i) !== g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, i) {
                x(e, { nonce: t && t.nonce }, i);
              },
              each: function (e, t) {
                var i,
                  n = 0;
                if (C(e))
                  for (
                    i = e.length;
                    n < i && !1 !== t.call(e[n], n, e[n]);
                    n++
                  );
                else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
                return e;
              },
              text: function (e) {
                var t,
                  i = "",
                  n = 0,
                  o = e.nodeType;
                if (!o) for (; (t = e[n++]); ) i += _.text(t);
                return 1 === o || 11 === o
                  ? e.textContent
                  : 9 === o
                  ? e.documentElement.textContent
                  : 3 === o || 4 === o
                  ? e.nodeValue
                  : i;
              },
              makeArray: function (e, t) {
                var i = t || [];
                return (
                  null != e &&
                    (C(Object(e))
                      ? _.merge(i, "string" == typeof e ? [e] : e)
                      : c.call(i, e)),
                  i
                );
              },
              inArray: function (e, t, i) {
                return null == t ? -1 : u.call(t, e, i);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  i = e && (e.ownerDocument || e).documentElement;
                return !T.test(t || (i && i.nodeName) || "HTML");
              },
              merge: function (e, t) {
                for (var i = +t.length, n = 0, o = e.length; n < i; n++)
                  e[o++] = t[n];
                return (e.length = o), e;
              },
              grep: function (e, t, i) {
                for (var n = [], o = 0, s = e.length, r = !i; o < s; o++)
                  !t(e[o], o) !== r && n.push(e[o]);
                return n;
              },
              map: function (e, t, i) {
                var n,
                  o,
                  s = 0,
                  r = [];
                if (C(e))
                  for (n = e.length; s < n; s++)
                    null != (o = t(e[s], s, i)) && r.push(o);
                else for (s in e) null != (o = t(e[s], s, i)) && r.push(o);
                return l(r);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (_.fn[Symbol.iterator] = s[Symbol.iterator]),
            _.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var A = s.pop,
            E = s.sort,
            O = s.splice,
            D = "[\\x20\\t\\r\\n\\f]",
            L = new RegExp(
              "^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$",
              "g"
            );
          _.contains = function (e, t) {
            var i = t && t.parentNode;
            return (
              e === i ||
              !(
                !i ||
                1 !== i.nodeType ||
                !(e.contains
                  ? e.contains(i)
                  : e.compareDocumentPosition &&
                    16 & e.compareDocumentPosition(i))
              )
            );
          };
          var M = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function j(e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
          _.escapeSelector = function (e) {
            return (e + "").replace(M, j);
          };
          var H = b,
            P = c;
          !(function () {
            var e,
              t,
              i,
              o,
              r,
              l,
              c,
              d,
              p,
              f,
              g = P,
              v = _.expando,
              y = 0,
              b = 0,
              w = ee(),
              x = ee(),
              k = ee(),
              S = ee(),
              T = function (e, t) {
                return e === t && (r = !0), 0;
              },
              C =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              M =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                D +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              j =
                "\\[" +
                D +
                "*(" +
                M +
                ")(?:" +
                D +
                "*([*^$|!~]?=)" +
                D +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                M +
                "))|)" +
                D +
                "*\\]",
              N =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                j +
                ")*)|.*)\\)|)",
              q = new RegExp(D + "+", "g"),
              I = new RegExp("^" + D + "*," + D + "*"),
              z = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"),
              W = new RegExp(D + "|>"),
              R = new RegExp(N),
              F = new RegExp("^" + M + "$"),
              U = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + j),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    D +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    D +
                    "*(?:([+-]|)" +
                    D +
                    "*(\\d+)|))" +
                    D +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + C + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    D +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    D +
                    "*((?:-\\d)?\\d*)" +
                    D +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              B = /^(?:input|select|textarea|button)$/i,
              Y = /^h\d$/i,
              V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              X = /[+~]/,
              G = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + D + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              K = function (e, t) {
                var i = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (i < 0
                    ? String.fromCharCode(i + 65536)
                    : String.fromCharCode(
                        (i >> 10) | 55296,
                        (1023 & i) | 56320
                      ))
                );
              },
              Q = function () {
                le();
              },
              Z = pe(
                function (e) {
                  return !0 === e.disabled && $(e, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              g.apply((s = a.call(H.childNodes)), H.childNodes),
                s[H.childNodes.length].nodeType;
            } catch (e) {
              g = {
                apply: function (e, t) {
                  P.apply(e, a.call(t));
                },
                call: function (e) {
                  P.apply(e, a.call(arguments, 1));
                },
              };
            }
            function J(e, t, i, n) {
              var o,
                s,
                r,
                a,
                c,
                u,
                h,
                f = t && t.ownerDocument,
                y = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== y && 9 !== y && 11 !== y))
              )
                return i;
              if (!n && (le(t), (t = t || l), d)) {
                if (11 !== y && (c = V.exec(e)))
                  if ((o = c[1])) {
                    if (9 === y) {
                      if (!(r = t.getElementById(o))) return i;
                      if (r.id === o) return g.call(i, r), i;
                    } else if (
                      f &&
                      (r = f.getElementById(o)) &&
                      J.contains(t, r) &&
                      r.id === o
                    )
                      return g.call(i, r), i;
                  } else {
                    if (c[2]) return g.apply(i, t.getElementsByTagName(e)), i;
                    if ((o = c[3]) && t.getElementsByClassName)
                      return g.apply(i, t.getElementsByClassName(o)), i;
                  }
                if (!(S[e + " "] || (p && p.test(e)))) {
                  if (((h = e), (f = t), 1 === y && (W.test(e) || z.test(e)))) {
                    for (
                      ((f = (X.test(e) && ae(t.parentNode)) || t) == t &&
                        m.scope) ||
                        ((a = t.getAttribute("id"))
                          ? (a = _.escapeSelector(a))
                          : t.setAttribute("id", (a = v))),
                        s = (u = ue(e)).length;
                      s--;

                    )
                      u[s] = (a ? "#" + a : ":scope") + " " + de(u[s]);
                    h = u.join(",");
                  }
                  try {
                    return g.apply(i, f.querySelectorAll(h)), i;
                  } catch (t) {
                    S(e, !0);
                  } finally {
                    a === v && t.removeAttribute("id");
                  }
                }
              }
              return ye(e.replace(L, "$1"), t, i, n);
            }
            function ee() {
              var e = [];
              return function i(n, o) {
                return (
                  e.push(n + " ") > t.cacheLength && delete i[e.shift()],
                  (i[n + " "] = o)
                );
              };
            }
            function te(e) {
              return (e[v] = !0), e;
            }
            function ie(e) {
              var t = l.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ne(e) {
              return function (t) {
                return $(t, "input") && t.type === e;
              };
            }
            function oe(e) {
              return function (t) {
                return ($(t, "input") || $(t, "button")) && t.type === e;
              };
            }
            function se(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && Z(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function re(e) {
              return te(function (t) {
                return (
                  (t = +t),
                  te(function (i, n) {
                    for (var o, s = e([], i.length, t), r = s.length; r--; )
                      i[(o = s[r])] && (i[o] = !(n[o] = i[o]));
                  })
                );
              });
            }
            function ae(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            function le(e) {
              var i,
                n = e ? e.ownerDocument || e : H;
              return n != l && 9 === n.nodeType && n.documentElement
                ? ((c = (l = n).documentElement),
                  (d = !_.isXMLDoc(l)),
                  (f =
                    c.matches ||
                    c.webkitMatchesSelector ||
                    c.msMatchesSelector),
                  c.msMatchesSelector &&
                    H != l &&
                    (i = l.defaultView) &&
                    i.top !== i &&
                    i.addEventListener("unload", Q),
                  (m.getById = ie(function (e) {
                    return (
                      (c.appendChild(e).id = _.expando),
                      !l.getElementsByName ||
                        !l.getElementsByName(_.expando).length
                    );
                  })),
                  (m.disconnectedMatch = ie(function (e) {
                    return f.call(e, "*");
                  })),
                  (m.scope = ie(function () {
                    return l.querySelectorAll(":scope");
                  })),
                  (m.cssHas = ie(function () {
                    try {
                      return l.querySelector(":has(*,:jqfake)"), !1;
                    } catch (e) {
                      return !0;
                    }
                  })),
                  m.getById
                    ? ((t.filter.ID = function (e) {
                        var t = e.replace(G, K);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && d) {
                          var i = t.getElementById(e);
                          return i ? [i] : [];
                        }
                      }))
                    : ((t.filter.ID = function (e) {
                        var t = e.replace(G, K);
                        return function (e) {
                          var i =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return i && i.value === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && d) {
                          var i,
                            n,
                            o,
                            s = t.getElementById(e);
                          if (s) {
                            if ((i = s.getAttributeNode("id")) && i.value === e)
                              return [s];
                            for (
                              o = t.getElementsByName(e), n = 0;
                              (s = o[n++]);

                            )
                              if (
                                (i = s.getAttributeNode("id")) &&
                                i.value === e
                              )
                                return [s];
                          }
                          return [];
                        }
                      })),
                  (t.find.TAG = function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : t.querySelectorAll(e);
                  }),
                  (t.find.CLASS = function (e, t) {
                    if (void 0 !== t.getElementsByClassName && d)
                      return t.getElementsByClassName(e);
                  }),
                  (p = []),
                  ie(function (e) {
                    var t;
                    (c.appendChild(e).innerHTML =
                      "<a id='" +
                      v +
                      "' href='' disabled='disabled'></a><select id='" +
                      v +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      e.querySelectorAll("[selected]").length ||
                        p.push("\\[" + D + "*(?:value|" + C + ")"),
                      e.querySelectorAll("[id~=" + v + "-]").length ||
                        p.push("~="),
                      e.querySelectorAll("a#" + v + "+*").length ||
                        p.push(".#.+[+~]"),
                      e.querySelectorAll(":checked").length ||
                        p.push(":checked"),
                      (t = l.createElement("input")).setAttribute(
                        "type",
                        "hidden"
                      ),
                      e.appendChild(t).setAttribute("name", "D"),
                      (c.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        p.push(":enabled", ":disabled"),
                      (t = l.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        p.push(
                          "\\[" + D + "*name" + D + "*=" + D + "*(?:''|\"\")"
                        );
                  }),
                  m.cssHas || p.push(":has"),
                  (p = p.length && new RegExp(p.join("|"))),
                  (T = function (e, t) {
                    if (e === t) return (r = !0), 0;
                    var i =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      i ||
                      (1 &
                        (i =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!m.sortDetached && t.compareDocumentPosition(e) === i)
                        ? e === l || (e.ownerDocument == H && J.contains(H, e))
                          ? -1
                          : t === l ||
                            (t.ownerDocument == H && J.contains(H, t))
                          ? 1
                          : o
                          ? u.call(o, e) - u.call(o, t)
                          : 0
                        : 4 & i
                        ? -1
                        : 1)
                    );
                  }),
                  l)
                : l;
            }
            for (e in ((J.matches = function (e, t) {
              return J(e, null, null, t);
            }),
            (J.matchesSelector = function (e, t) {
              if ((le(e), d && !S[t + " "] && (!p || !p.test(t))))
                try {
                  var i = f.call(e, t);
                  if (
                    i ||
                    m.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  S(t, !0);
                }
              return J(t, l, null, [e]).length > 0;
            }),
            (J.contains = function (e, t) {
              return (e.ownerDocument || e) != l && le(e), _.contains(e, t);
            }),
            (J.attr = function (e, i) {
              (e.ownerDocument || e) != l && le(e);
              var n = t.attrHandle[i.toLowerCase()],
                o =
                  n && h.call(t.attrHandle, i.toLowerCase())
                    ? n(e, i, !d)
                    : void 0;
              return void 0 !== o ? o : e.getAttribute(i);
            }),
            (J.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (_.uniqueSort = function (e) {
              var t,
                i = [],
                n = 0,
                s = 0;
              if (
                ((r = !m.sortStable),
                (o = !m.sortStable && a.call(e, 0)),
                E.call(e, T),
                r)
              ) {
                for (; (t = e[s++]); ) t === e[s] && (n = i.push(s));
                for (; n--; ) O.call(e, i[n], 1);
              }
              return (o = null), e;
            }),
            (_.fn.uniqueSort = function () {
              return this.pushStack(_.uniqueSort(a.apply(this)));
            }),
            (t = _.expr =
              {
                cacheLength: 50,
                createPseudo: te,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(G, K)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(G, K)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || J.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && J.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      i = !e[6] && e[2];
                    return U.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : i &&
                            R.test(i) &&
                            (t = ue(i, !0)) &&
                            (t = i.indexOf(")", i.length - t) - i.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(G, K).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return $(e, t);
                        };
                  },
                  CLASS: function (e) {
                    var t = w[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + D + ")" + e + "(" + D + "|$)"
                      )) &&
                        w(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, i) {
                    return function (n) {
                      var o = J.attr(n, e);
                      return null == o
                        ? "!=" === t
                        : !t ||
                            ((o += ""),
                            "=" === t
                              ? o === i
                              : "!=" === t
                              ? o !== i
                              : "^=" === t
                              ? i && 0 === o.indexOf(i)
                              : "*=" === t
                              ? i && o.indexOf(i) > -1
                              : "$=" === t
                              ? i && o.slice(-i.length) === i
                              : "~=" === t
                              ? (" " + o.replace(q, " ") + " ").indexOf(i) > -1
                              : "|=" === t &&
                                (o === i ||
                                  o.slice(0, i.length + 1) === i + "-"));
                    };
                  },
                  CHILD: function (e, t, i, n, o) {
                    var s = "nth" !== e.slice(0, 3),
                      r = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === n && 0 === o
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, i, l) {
                          var c,
                            u,
                            d,
                            p,
                            h,
                            f = s !== r ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            b = !l && !a,
                            w = !1;
                          if (g) {
                            if (s) {
                              for (; f; ) {
                                for (d = t; (d = d[f]); )
                                  if (a ? $(d, m) : 1 === d.nodeType) return !1;
                                h = f = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [r ? g.firstChild : g.lastChild]), r && b)
                            ) {
                              for (
                                w =
                                  (p =
                                    (c =
                                      (u = g[v] || (g[v] = {}))[e] || [])[0] ===
                                      y && c[1]) && c[2],
                                  d = p && g.childNodes[p];
                                (d =
                                  (++p && d && d[f]) || (w = p = 0) || h.pop());

                              )
                                if (1 === d.nodeType && ++w && d === t) {
                                  u[e] = [y, p, w];
                                  break;
                                }
                            } else if (
                              (b &&
                                (w = p =
                                  (c =
                                    (u = t[v] || (t[v] = {}))[e] || [])[0] ===
                                    y && c[1]),
                              !1 === w)
                            )
                              for (
                                ;
                                (d =
                                  (++p && d && d[f]) ||
                                  (w = p = 0) ||
                                  h.pop()) &&
                                (!(a ? $(d, m) : 1 === d.nodeType) ||
                                  !++w ||
                                  (b && ((u = d[v] || (d[v] = {}))[e] = [y, w]),
                                  d !== t));

                              );
                            return (w -= o) === n || (w % n == 0 && w / n >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, i) {
                    var n,
                      o =
                        t.pseudos[e] ||
                        t.setFilters[e.toLowerCase()] ||
                        J.error("unsupported pseudo: " + e);
                    return o[v]
                      ? o(i)
                      : o.length > 1
                      ? ((n = [e, e, "", i]),
                        t.setFilters.hasOwnProperty(e.toLowerCase())
                          ? te(function (e, t) {
                              for (var n, s = o(e, i), r = s.length; r--; )
                                e[(n = u.call(e, s[r]))] = !(t[n] = s[r]);
                            })
                          : function (e) {
                              return o(e, 0, n);
                            })
                      : o;
                  },
                },
                pseudos: {
                  not: te(function (e) {
                    var t = [],
                      i = [],
                      n = ve(e.replace(L, "$1"));
                    return n[v]
                      ? te(function (e, t, i, o) {
                          for (
                            var s, r = n(e, null, o, []), a = e.length;
                            a--;

                          )
                            (s = r[a]) && (e[a] = !(t[a] = s));
                        })
                      : function (e, o, s) {
                          return (
                            (t[0] = e),
                            n(t, null, s, i),
                            (t[0] = null),
                            !i.pop()
                          );
                        };
                  }),
                  has: te(function (e) {
                    return function (t) {
                      return J(e, t).length > 0;
                    };
                  }),
                  contains: te(function (e) {
                    return (
                      (e = e.replace(G, K)),
                      function (t) {
                        return (t.textContent || _.text(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: te(function (e) {
                    return (
                      F.test(e || "") || J.error("unsupported lang: " + e),
                      (e = e.replace(G, K).toLowerCase()),
                      function (t) {
                        var i;
                        do {
                          if (
                            (i = d
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (i = i.toLowerCase()) === e ||
                              0 === i.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                  },
                  root: function (e) {
                    return e === c;
                  },
                  focus: function (e) {
                    return (
                      e ===
                        (function () {
                          try {
                            return l.activeElement;
                          } catch (e) {}
                        })() &&
                      l.hasFocus() &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: se(!1),
                  disabled: se(!0),
                  checked: function (e) {
                    return (
                      ($(e, "input") && !!e.checked) ||
                      ($(e, "option") && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !t.pseudos.empty(e);
                  },
                  header: function (e) {
                    return Y.test(e.nodeName);
                  },
                  input: function (e) {
                    return B.test(e.nodeName);
                  },
                  button: function (e) {
                    return (
                      ($(e, "input") && "button" === e.type) || $(e, "button")
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      $(e, "input") &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: re(function () {
                    return [0];
                  }),
                  last: re(function (e, t) {
                    return [t - 1];
                  }),
                  eq: re(function (e, t, i) {
                    return [i < 0 ? i + t : i];
                  }),
                  even: re(function (e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e;
                  }),
                  odd: re(function (e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e;
                  }),
                  lt: re(function (e, t, i) {
                    var n;
                    for (n = i < 0 ? i + t : i > t ? t : i; --n >= 0; )
                      e.push(n);
                    return e;
                  }),
                  gt: re(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
                    return e;
                  }),
                },
              }),
            (t.pseudos.nth = t.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              t.pseudos[e] = ne(e);
            for (e in { submit: !0, reset: !0 }) t.pseudos[e] = oe(e);
            function ce() {}
            function ue(e, i) {
              var n,
                o,
                s,
                r,
                a,
                l,
                c,
                u = x[e + " "];
              if (u) return i ? 0 : u.slice(0);
              for (a = e, l = [], c = t.preFilter; a; ) {
                for (r in ((n && !(o = I.exec(a))) ||
                  (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
                (n = !1),
                (o = z.exec(a)) &&
                  ((n = o.shift()),
                  s.push({ value: n, type: o[0].replace(L, " ") }),
                  (a = a.slice(n.length))),
                t.filter))
                  !(o = U[r].exec(a)) ||
                    (c[r] && !(o = c[r](o))) ||
                    ((n = o.shift()),
                    s.push({ value: n, type: r, matches: o }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return i ? a.length : a ? J.error(e) : x(e, l).slice(0);
            }
            function de(e) {
              for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
              return n;
            }
            function pe(e, t, i) {
              var n = t.dir,
                o = t.next,
                s = o || n,
                r = i && "parentNode" === s,
                a = b++;
              return t.first
                ? function (t, i, o) {
                    for (; (t = t[n]); )
                      if (1 === t.nodeType || r) return e(t, i, o);
                    return !1;
                  }
                : function (t, i, l) {
                    var c,
                      u,
                      d = [y, a];
                    if (l) {
                      for (; (t = t[n]); )
                        if ((1 === t.nodeType || r) && e(t, i, l)) return !0;
                    } else
                      for (; (t = t[n]); )
                        if (1 === t.nodeType || r)
                          if (((u = t[v] || (t[v] = {})), o && $(t, o)))
                            t = t[n] || t;
                          else {
                            if ((c = u[s]) && c[0] === y && c[1] === a)
                              return (d[2] = c[2]);
                            if (((u[s] = d), (d[2] = e(t, i, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function he(e) {
              return e.length > 1
                ? function (t, i, n) {
                    for (var o = e.length; o--; ) if (!e[o](t, i, n)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function fe(e, t, i, n, o) {
              for (
                var s, r = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (s = e[a]) &&
                  ((i && !i(s, n, o)) || (r.push(s), c && t.push(a)));
              return r;
            }
            function ge(e, t, i, n, o, s) {
              return (
                n && !n[v] && (n = ge(n)),
                o && !o[v] && (o = ge(o, s)),
                te(function (s, r, a, l) {
                  var c,
                    d,
                    p,
                    h,
                    f = [],
                    m = [],
                    v = r.length,
                    y =
                      s ||
                      (function (e, t, i) {
                        for (var n = 0, o = t.length; n < o; n++) J(e, t[n], i);
                        return i;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    b = !e || (!s && t) ? y : fe(y, f, e, a, l);
                  if (
                    (i
                      ? i(b, (h = o || (s ? e : v || n) ? [] : r), a, l)
                      : (h = b),
                    n)
                  )
                    for (c = fe(h, m), n(c, [], a, l), d = c.length; d--; )
                      (p = c[d]) && (h[m[d]] = !(b[m[d]] = p));
                  if (s) {
                    if (o || e) {
                      if (o) {
                        for (c = [], d = h.length; d--; )
                          (p = h[d]) && c.push((b[d] = p));
                        o(null, (h = []), c, l);
                      }
                      for (d = h.length; d--; )
                        (p = h[d]) &&
                          (c = o ? u.call(s, p) : f[d]) > -1 &&
                          (s[c] = !(r[c] = p));
                    }
                  } else (h = fe(h === r ? h.splice(v, h.length) : h)), o ? o(null, r, h, l) : g.apply(r, h);
                })
              );
            }
            function me(e) {
              for (
                var n,
                  o,
                  s,
                  r = e.length,
                  a = t.relative[e[0].type],
                  l = a || t.relative[" "],
                  c = a ? 1 : 0,
                  d = pe(
                    function (e) {
                      return e === n;
                    },
                    l,
                    !0
                  ),
                  p = pe(
                    function (e) {
                      return u.call(n, e) > -1;
                    },
                    l,
                    !0
                  ),
                  h = [
                    function (e, t, o) {
                      var s =
                        (!a && (o || t != i)) ||
                        ((n = t).nodeType ? d(e, t, o) : p(e, t, o));
                      return (n = null), s;
                    },
                  ];
                c < r;
                c++
              )
                if ((o = t.relative[e[c].type])) h = [pe(he(h), o)];
                else {
                  if ((o = t.filter[e[c].type].apply(null, e[c].matches))[v]) {
                    for (s = ++c; s < r && !t.relative[e[s].type]; s++);
                    return ge(
                      c > 1 && he(h),
                      c > 1 &&
                        de(
                          e
                            .slice(0, c - 1)
                            .concat({ value: " " === e[c - 2].type ? "*" : "" })
                        ).replace(L, "$1"),
                      o,
                      c < s && me(e.slice(c, s)),
                      s < r && me((e = e.slice(s))),
                      s < r && de(e)
                    );
                  }
                  h.push(o);
                }
              return he(h);
            }
            function ve(e, n) {
              var o,
                s = [],
                r = [],
                a = k[e + " "];
              if (!a) {
                for (n || (n = ue(e)), o = n.length; o--; )
                  (a = me(n[o]))[v] ? s.push(a) : r.push(a);
                (a = k(
                  e,
                  (function (e, n) {
                    var o = n.length > 0,
                      s = e.length > 0,
                      r = function (r, a, c, u, p) {
                        var h,
                          f,
                          m,
                          v = 0,
                          b = "0",
                          w = r && [],
                          x = [],
                          k = i,
                          S = r || (s && t.find.TAG("*", p)),
                          T = (y += null == k ? 1 : Math.random() || 0.1),
                          C = S.length;
                        for (
                          p && (i = a == l || a || p);
                          b !== C && null != (h = S[b]);
                          b++
                        ) {
                          if (s && h) {
                            for (
                              f = 0,
                                a || h.ownerDocument == l || (le(h), (c = !d));
                              (m = e[f++]);

                            )
                              if (m(h, a || l, c)) {
                                g.call(u, h);
                                break;
                              }
                            p && (y = T);
                          }
                          o && ((h = !m && h) && v--, r && w.push(h));
                        }
                        if (((v += b), o && b !== v)) {
                          for (f = 0; (m = n[f++]); ) m(w, x, a, c);
                          if (r) {
                            if (v > 0)
                              for (; b--; ) w[b] || x[b] || (x[b] = A.call(u));
                            x = fe(x);
                          }
                          g.apply(u, x),
                            p &&
                              !r &&
                              x.length > 0 &&
                              v + n.length > 1 &&
                              _.uniqueSort(u);
                        }
                        return p && ((y = T), (i = k)), w;
                      };
                    return o ? te(r) : r;
                  })(r, s)
                )),
                  (a.selector = e);
              }
              return a;
            }
            function ye(e, i, n, o) {
              var s,
                r,
                a,
                l,
                c,
                u = "function" == typeof e && e,
                p = !o && ue((e = u.selector || e));
              if (((n = n || []), 1 === p.length)) {
                if (
                  (r = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (a = r[0]).type &&
                  9 === i.nodeType &&
                  d &&
                  t.relative[r[1].type]
                ) {
                  if (
                    !(i = (t.find.ID(a.matches[0].replace(G, K), i) || [])[0])
                  )
                    return n;
                  u && (i = i.parentNode),
                    (e = e.slice(r.shift().value.length));
                }
                for (
                  s = U.needsContext.test(e) ? 0 : r.length;
                  s-- && ((a = r[s]), !t.relative[(l = a.type)]);

                )
                  if (
                    (c = t.find[l]) &&
                    (o = c(
                      a.matches[0].replace(G, K),
                      (X.test(r[0].type) && ae(i.parentNode)) || i
                    ))
                  ) {
                    if ((r.splice(s, 1), !(e = o.length && de(r))))
                      return g.apply(n, o), n;
                    break;
                  }
              }
              return (
                (u || ve(e, p))(
                  o,
                  i,
                  !d,
                  n,
                  !i || (X.test(e) && ae(i.parentNode)) || i
                ),
                n
              );
            }
            (ce.prototype = t.filters = t.pseudos),
              (t.setFilters = new ce()),
              (m.sortStable = v.split("").sort(T).join("") === v),
              le(),
              (m.sortDetached = ie(function (e) {
                return (
                  1 & e.compareDocumentPosition(l.createElement("fieldset"))
                );
              })),
              (_.find = J),
              (_.expr[":"] = _.expr.pseudos),
              (_.unique = _.uniqueSort),
              (J.compile = ve),
              (J.select = ye),
              (J.setDocument = le),
              (J.tokenize = ue),
              (J.escape = _.escapeSelector),
              (J.getText = _.text),
              (J.isXML = _.isXMLDoc),
              (J.selectors = _.expr),
              (J.support = _.support),
              (J.uniqueSort = _.uniqueSort);
          })();
          var N = function (e, t, i) {
              for (
                var n = [], o = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (o && _(e).is(i)) break;
                  n.push(e);
                }
              return n;
            },
            q = function (e, t) {
              for (var i = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && i.push(e);
              return i;
            },
            I = _.expr.match.needsContext,
            z =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function W(e, t, i) {
            return v(t)
              ? _.grep(e, function (e, n) {
                  return !!t.call(e, n, e) !== i;
                })
              : t.nodeType
              ? _.grep(e, function (e) {
                  return (e === t) !== i;
                })
              : "string" != typeof t
              ? _.grep(e, function (e) {
                  return u.call(t, e) > -1 !== i;
                })
              : _.filter(t, e, i);
          }
          (_.filter = function (e, t, i) {
            var n = t[0];
            return (
              i && (e = ":not(" + e + ")"),
              1 === t.length && 1 === n.nodeType
                ? _.find.matchesSelector(n, e)
                  ? [n]
                  : []
                : _.find.matches(
                    e,
                    _.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            _.fn.extend({
              find: function (e) {
                var t,
                  i,
                  n = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    _(e).filter(function () {
                      for (t = 0; t < n; t++)
                        if (_.contains(o[t], this)) return !0;
                    })
                  );
                for (i = this.pushStack([]), t = 0; t < n; t++)
                  _.find(e, o[t], i);
                return n > 1 ? _.uniqueSort(i) : i;
              },
              filter: function (e) {
                return this.pushStack(W(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(W(this, e || [], !0));
              },
              is: function (e) {
                return !!W(
                  this,
                  "string" == typeof e && I.test(e) ? _(e) : e || [],
                  !1
                ).length;
              },
            });
          var R,
            F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((_.fn.init = function (e, t, i) {
            var n, o;
            if (!e) return this;
            if (((i = i || R), "string" == typeof e)) {
              if (
                !(n =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : F.exec(e)) ||
                (!n[1] && t)
              )
                return !t || t.jquery
                  ? (t || i).find(e)
                  : this.constructor(t).find(e);
              if (n[1]) {
                if (
                  ((t = t instanceof _ ? t[0] : t),
                  _.merge(
                    this,
                    _.parseHTML(
                      n[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0
                    )
                  ),
                  z.test(n[1]) && _.isPlainObject(t))
                )
                  for (n in t) v(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this;
              }
              return (
                (o = b.getElementById(n[2])) &&
                  ((this[0] = o), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== i.ready
                ? i.ready(e)
                : e(_)
              : _.makeArray(e, this);
          }).prototype = _.fn),
            (R = _(b));
          var U = /^(?:parents|prev(?:Until|All))/,
            B = { children: !0, contents: !0, next: !0, prev: !0 };
          function Y(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          _.fn.extend({
            has: function (e) {
              var t = _(e, this),
                i = t.length;
              return this.filter(function () {
                for (var e = 0; e < i; e++)
                  if (_.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var i,
                n = 0,
                o = this.length,
                s = [],
                r = "string" != typeof e && _(e);
              if (!I.test(e))
                for (; n < o; n++)
                  for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (
                      i.nodeType < 11 &&
                      (r
                        ? r.index(i) > -1
                        : 1 === i.nodeType && _.find.matchesSelector(i, e))
                    ) {
                      s.push(i);
                      break;
                    }
              return this.pushStack(s.length > 1 ? _.uniqueSort(s) : s);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? u.call(_(e), this[0])
                  : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            _.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return N(e, "parentNode");
                },
                parentsUntil: function (e, t, i) {
                  return N(e, "parentNode", i);
                },
                next: function (e) {
                  return Y(e, "nextSibling");
                },
                prev: function (e) {
                  return Y(e, "previousSibling");
                },
                nextAll: function (e) {
                  return N(e, "nextSibling");
                },
                prevAll: function (e) {
                  return N(e, "previousSibling");
                },
                nextUntil: function (e, t, i) {
                  return N(e, "nextSibling", i);
                },
                prevUntil: function (e, t, i) {
                  return N(e, "previousSibling", i);
                },
                siblings: function (e) {
                  return q((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return q(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && r(e.contentDocument)
                    ? e.contentDocument
                    : ($(e, "template") && (e = e.content || e),
                      _.merge([], e.childNodes));
                },
              },
              function (e, t) {
                _.fn[e] = function (i, n) {
                  var o = _.map(this, t, i);
                  return (
                    "Until" !== e.slice(-5) && (n = i),
                    n && "string" == typeof n && (o = _.filter(n, o)),
                    this.length > 1 &&
                      (B[e] || _.uniqueSort(o), U.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              }
            );
          var V = /[^\x20\t\r\n\f]+/g;
          function X(e) {
            return e;
          }
          function G(e) {
            throw e;
          }
          function K(e, t, i, n) {
            var o;
            try {
              e && v((o = e.promise))
                ? o.call(e).done(t).fail(i)
                : e && v((o = e.then))
                ? o.call(e, t, i)
                : t.apply(void 0, [e].slice(n));
            } catch (e) {
              i.apply(void 0, [e]);
            }
          }
          (_.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      _.each(e.match(V) || [], function (e, i) {
                        t[i] = !0;
                      }),
                      t
                    );
                  })(e)
                : _.extend({}, e);
            var t,
              i,
              n,
              o,
              s = [],
              r = [],
              a = -1,
              l = function () {
                for (o = o || e.once, n = t = !0; r.length; a = -1)
                  for (i = r.shift(); ++a < s.length; )
                    !1 === s[a].apply(i[0], i[1]) &&
                      e.stopOnFalse &&
                      ((a = s.length), (i = !1));
                e.memory || (i = !1), (t = !1), o && (s = i ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    s &&
                      (i && !t && ((a = s.length - 1), r.push(i)),
                      (function t(i) {
                        _.each(i, function (i, n) {
                          v(n)
                            ? (e.unique && c.has(n)) || s.push(n)
                            : n && n.length && "string" !== k(n) && t(n);
                        });
                      })(arguments),
                      i && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    _.each(arguments, function (e, t) {
                      for (var i; (i = _.inArray(t, s, i)) > -1; )
                        s.splice(i, 1), i <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? _.inArray(e, s) > -1 : s.length > 0;
                },
                empty: function () {
                  return s && (s = []), this;
                },
                disable: function () {
                  return (o = r = []), (s = i = ""), this;
                },
                disabled: function () {
                  return !s;
                },
                lock: function () {
                  return (o = r = []), i || t || (s = i = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, i) {
                  return (
                    o ||
                      ((i = [e, (i = i || []).slice ? i.slice() : i]),
                      r.push(i),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!n;
                },
              };
            return c;
          }),
            _.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      _.Callbacks("memory"),
                      _.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      _.Callbacks("once memory"),
                      _.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      _.Callbacks("once memory"),
                      _.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  i = "pending",
                  o = {
                    state: function () {
                      return i;
                    },
                    always: function () {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return _.Deferred(function (i) {
                        _.each(t, function (t, n) {
                          var o = v(e[n[4]]) && e[n[4]];
                          s[n[1]](function () {
                            var e = o && o.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(i.notify)
                                  .done(i.resolve)
                                  .fail(i.reject)
                              : i[n[0] + "With"](this, o ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, i, o) {
                      var s = 0;
                      function r(e, t, i, o) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var n, c;
                              if (!(e < s)) {
                                if ((n = i.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  n &&
                                  ("object" == typeof n ||
                                    "function" == typeof n) &&
                                  n.then),
                                  v(c)
                                    ? o
                                      ? c.call(n, r(s, t, X, o), r(s, t, G, o))
                                      : (s++,
                                        c.call(
                                          n,
                                          r(s, t, X, o),
                                          r(s, t, G, o),
                                          r(s, t, X, t.notifyWith)
                                        ))
                                    : (i !== X && ((a = void 0), (l = [n])),
                                      (o || t.resolveWith)(a, l));
                              }
                            },
                            u = o
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (n) {
                                    _.Deferred.exceptionHook &&
                                      _.Deferred.exceptionHook(n, u.error),
                                      e + 1 >= s &&
                                        (i !== G && ((a = void 0), (l = [n])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? u()
                            : (_.Deferred.getErrorHook
                                ? (u.error = _.Deferred.getErrorHook())
                                : _.Deferred.getStackHook &&
                                  (u.error = _.Deferred.getStackHook()),
                              n.setTimeout(u));
                        };
                      }
                      return _.Deferred(function (n) {
                        t[0][3].add(r(0, n, v(o) ? o : X, n.notifyWith)),
                          t[1][3].add(r(0, n, v(e) ? e : X)),
                          t[2][3].add(r(0, n, v(i) ? i : G));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? _.extend(e, o) : o;
                    },
                  },
                  s = {};
                return (
                  _.each(t, function (e, n) {
                    var r = n[2],
                      a = n[5];
                    (o[n[1]] = r.add),
                      a &&
                        r.add(
                          function () {
                            i = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      r.add(n[3].fire),
                      (s[n[0]] = function () {
                        return (
                          s[n[0] + "With"](
                            this === s ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (s[n[0] + "With"] = r.fireWith);
                  }),
                  o.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when: function (e) {
                var t = arguments.length,
                  i = t,
                  n = Array(i),
                  o = a.call(arguments),
                  s = _.Deferred(),
                  r = function (e) {
                    return function (i) {
                      (n[e] = this),
                        (o[e] = arguments.length > 1 ? a.call(arguments) : i),
                        --t || s.resolveWith(n, o);
                    };
                  };
                if (
                  t <= 1 &&
                  (K(e, s.done(r(i)).resolve, s.reject, !t),
                  "pending" === s.state() || v(o[i] && o[i].then))
                )
                  return s.then();
                for (; i--; ) K(o[i], r(i), s.reject);
                return s.promise();
              },
            });
          var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (_.Deferred.exceptionHook = function (e, t) {
            n.console &&
              n.console.warn &&
              e &&
              Q.test(e.name) &&
              n.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (_.readyException = function (e) {
              n.setTimeout(function () {
                throw e;
              });
            });
          var Z = _.Deferred();
          function J() {
            b.removeEventListener("DOMContentLoaded", J),
              n.removeEventListener("load", J),
              _.ready();
          }
          (_.fn.ready = function (e) {
            return (
              Z.then(e).catch(function (e) {
                _.readyException(e);
              }),
              this
            );
          }),
            _.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --_.readyWait : _.isReady) ||
                  ((_.isReady = !0),
                  (!0 !== e && --_.readyWait > 0) || Z.resolveWith(b, [_]));
              },
            }),
            (_.ready.then = Z.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? n.setTimeout(_.ready)
              : (b.addEventListener("DOMContentLoaded", J),
                n.addEventListener("load", J));
          var ee = function (e, t, i, n, o, s, r) {
              var a = 0,
                l = e.length,
                c = null == i;
              if ("object" === k(i))
                for (a in ((o = !0), i)) ee(e, t, a, i[a], !0, s, r);
              else if (
                void 0 !== n &&
                ((o = !0),
                v(n) || (r = !0),
                c &&
                  (r
                    ? (t.call(e, n), (t = null))
                    : ((c = t),
                      (t = function (e, t, i) {
                        return c.call(_(e), i);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
              return o ? e : c ? t.call(e) : l ? t(e[0], i) : s;
            },
            te = /^-ms-/,
            ie = /-([a-z])/g;
          function ne(e, t) {
            return t.toUpperCase();
          }
          function oe(e) {
            return e.replace(te, "ms-").replace(ie, ne);
          }
          var se = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function re() {
            this.expando = _.expando + re.uid++;
          }
          (re.uid = 1),
            (re.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    se(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, i) {
                var n,
                  o = this.cache(e);
                if ("string" == typeof t) o[oe(t)] = i;
                else for (n in t) o[oe(n)] = t[n];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][oe(t)];
              },
              access: function (e, t, i) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === i)
                  ? this.get(e, t)
                  : (this.set(e, t, i), void 0 !== i ? i : t);
              },
              remove: function (e, t) {
                var i,
                  n = e[this.expando];
                if (void 0 !== n) {
                  if (void 0 !== t) {
                    i = (t = Array.isArray(t)
                      ? t.map(oe)
                      : (t = oe(t)) in n
                      ? [t]
                      : t.match(V) || []).length;
                    for (; i--; ) delete n[t[i]];
                  }
                  (void 0 === t || _.isEmptyObject(n)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !_.isEmptyObject(t);
              },
            });
          var ae = new re(),
            le = new re(),
            ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ue = /[A-Z]/g;
          function de(e, t, i) {
            var n;
            if (void 0 === i && 1 === e.nodeType)
              if (
                ((n = "data-" + t.replace(ue, "-$&").toLowerCase()),
                "string" == typeof (i = e.getAttribute(n)))
              ) {
                try {
                  i = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ce.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(i);
                } catch (e) {}
                le.set(e, t, i);
              } else i = void 0;
            return i;
          }
          _.extend({
            hasData: function (e) {
              return le.hasData(e) || ae.hasData(e);
            },
            data: function (e, t, i) {
              return le.access(e, t, i);
            },
            removeData: function (e, t) {
              le.remove(e, t);
            },
            _data: function (e, t, i) {
              return ae.access(e, t, i);
            },
            _removeData: function (e, t) {
              ae.remove(e, t);
            },
          }),
            _.fn.extend({
              data: function (e, t) {
                var i,
                  n,
                  o,
                  s = this[0],
                  r = s && s.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = le.get(s)),
                    1 === s.nodeType && !ae.get(s, "hasDataAttrs"))
                  ) {
                    for (i = r.length; i--; )
                      r[i] &&
                        0 === (n = r[i].name).indexOf("data-") &&
                        ((n = oe(n.slice(5))), de(s, n, o[n]));
                    ae.set(s, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      le.set(this, e);
                    })
                  : ee(
                      this,
                      function (t) {
                        var i;
                        if (s && void 0 === t)
                          return void 0 !== (i = le.get(s, e)) ||
                            void 0 !== (i = de(s, e))
                            ? i
                            : void 0;
                        this.each(function () {
                          le.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  le.remove(this, e);
                });
              },
            }),
            _.extend({
              queue: function (e, t, i) {
                var n;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (n = ae.get(e, t)),
                    i &&
                      (!n || Array.isArray(i)
                        ? (n = ae.access(e, t, _.makeArray(i)))
                        : n.push(i)),
                    n || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var i = _.queue(e, t),
                  n = i.length,
                  o = i.shift(),
                  s = _._queueHooks(e, t);
                "inprogress" === o && ((o = i.shift()), n--),
                  o &&
                    ("fx" === t && i.unshift("inprogress"),
                    delete s.stop,
                    o.call(
                      e,
                      function () {
                        _.dequeue(e, t);
                      },
                      s
                    )),
                  !n && s && s.empty.fire();
              },
              _queueHooks: function (e, t) {
                var i = t + "queueHooks";
                return (
                  ae.get(e, i) ||
                  ae.access(e, i, {
                    empty: _.Callbacks("once memory").add(function () {
                      ae.remove(e, [t + "queue", i]);
                    }),
                  })
                );
              },
            }),
            _.fn.extend({
              queue: function (e, t) {
                var i = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), i--),
                  arguments.length < i
                    ? _.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var i = _.queue(this, e, t);
                        _._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== i[0] &&
                            _.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  _.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var i,
                  n = 1,
                  o = _.Deferred(),
                  s = this,
                  r = this.length,
                  a = function () {
                    --n || o.resolveWith(s, [s]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  r--;

                )
                  (i = ae.get(s[r], e + "queueHooks")) &&
                    i.empty &&
                    (n++, i.empty.add(a));
                return a(), o.promise(t);
              },
            });
          var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            he = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
            fe = ["Top", "Right", "Bottom", "Left"],
            ge = b.documentElement,
            me = function (e) {
              return _.contains(e.ownerDocument, e);
            },
            ve = { composed: !0 };
          ge.getRootNode &&
            (me = function (e) {
              return (
                _.contains(e.ownerDocument, e) ||
                e.getRootNode(ve) === e.ownerDocument
              );
            });
          var ye = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                me(e) &&
                "none" === _.css(e, "display"))
            );
          };
          function be(e, t, i, n) {
            var o,
              s,
              r = 20,
              a = n
                ? function () {
                    return n.cur();
                  }
                : function () {
                    return _.css(e, t, "");
                  },
              l = a(),
              c = (i && i[3]) || (_.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (_.cssNumber[t] || ("px" !== c && +l)) &&
                he.exec(_.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; r--; )
                _.style(e, t, u + c),
                  (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0),
                  (u /= s);
              (u *= 2), _.style(e, t, u + c), (i = i || []);
            }
            return (
              i &&
                ((u = +u || +l || 0),
                (o = i[1] ? u + (i[1] + 1) * i[2] : +i[2]),
                n && ((n.unit = c), (n.start = u), (n.end = o))),
              o
            );
          }
          var we = {};
          function xe(e) {
            var t,
              i = e.ownerDocument,
              n = e.nodeName,
              o = we[n];
            return (
              o ||
              ((t = i.body.appendChild(i.createElement(n))),
              (o = _.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === o && (o = "block"),
              (we[n] = o),
              o)
            );
          }
          function ke(e, t) {
            for (var i, n, o = [], s = 0, r = e.length; s < r; s++)
              (n = e[s]).style &&
                ((i = n.style.display),
                t
                  ? ("none" === i &&
                      ((o[s] = ae.get(n, "display") || null),
                      o[s] || (n.style.display = "")),
                    "" === n.style.display && ye(n) && (o[s] = xe(n)))
                  : "none" !== i && ((o[s] = "none"), ae.set(n, "display", i)));
            for (s = 0; s < r; s++) null != o[s] && (e[s].style.display = o[s]);
            return e;
          }
          _.fn.extend({
            show: function () {
              return ke(this, !0);
            },
            hide: function () {
              return ke(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ye(this) ? _(this).show() : _(this).hide();
                  });
            },
          });
          var Se,
            Te,
            _e = /^(?:checkbox|radio)$/i,
            Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            $e = /^$|^module$|\/(?:java|ecma)script/i;
          (Se = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (Te = b.createElement("input")).setAttribute("type", "radio"),
            Te.setAttribute("checked", "checked"),
            Te.setAttribute("name", "t"),
            Se.appendChild(Te),
            (m.checkClone = Se.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (Se.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!Se.cloneNode(!0).lastChild.defaultValue),
            (Se.innerHTML = "<option></option>"),
            (m.option = !!Se.lastChild);
          var Ae = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function Ee(e, t) {
            var i;
            return (
              (i =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && $(e, t)) ? _.merge([e], i) : i
            );
          }
          function Oe(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
              ae.set(e[i], "globalEval", !t || ae.get(t[i], "globalEval"));
          }
          (Ae.tbody = Ae.tfoot = Ae.colgroup = Ae.caption = Ae.thead),
            (Ae.th = Ae.td),
            m.option ||
              (Ae.optgroup = Ae.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var De = /<|&#?\w+;/;
          function Le(e, t, i, n, o) {
            for (
              var s,
                r,
                a,
                l,
                c,
                u,
                d = t.createDocumentFragment(),
                p = [],
                h = 0,
                f = e.length;
              h < f;
              h++
            )
              if ((s = e[h]) || 0 === s)
                if ("object" === k(s)) _.merge(p, s.nodeType ? [s] : s);
                else if (De.test(s)) {
                  for (
                    r = r || d.appendChild(t.createElement("div")),
                      a = (Ce.exec(s) || ["", ""])[1].toLowerCase(),
                      l = Ae[a] || Ae._default,
                      r.innerHTML = l[1] + _.htmlPrefilter(s) + l[2],
                      u = l[0];
                    u--;

                  )
                    r = r.lastChild;
                  _.merge(p, r.childNodes),
                    ((r = d.firstChild).textContent = "");
                } else p.push(t.createTextNode(s));
            for (d.textContent = "", h = 0; (s = p[h++]); )
              if (n && _.inArray(s, n) > -1) o && o.push(s);
              else if (
                ((c = me(s)),
                (r = Ee(d.appendChild(s), "script")),
                c && Oe(r),
                i)
              )
                for (u = 0; (s = r[u++]); ) $e.test(s.type || "") && i.push(s);
            return d;
          }
          var Me = /^([^.]*)(?:\.(.+)|)/;
          function je() {
            return !0;
          }
          function He() {
            return !1;
          }
          function Pe(e, t, i, n, o, s) {
            var r, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof i && ((n = n || i), (i = void 0)),
              t))
                Pe(e, a, i, n, t[a], s);
              return e;
            }
            if (
              (null == n && null == o
                ? ((o = i), (n = i = void 0))
                : null == o &&
                  ("string" == typeof i
                    ? ((o = n), (n = void 0))
                    : ((o = n), (n = i), (i = void 0))),
              !1 === o)
            )
              o = He;
            else if (!o) return e;
            return (
              1 === s &&
                ((r = o),
                (o = function (e) {
                  return _().off(e), r.apply(this, arguments);
                }),
                (o.guid = r.guid || (r.guid = _.guid++))),
              e.each(function () {
                _.event.add(this, t, o, n, i);
              })
            );
          }
          function Ne(e, t, i) {
            i
              ? (ae.set(e, t, !1),
                _.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      n = ae.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (n)
                        (_.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((n = a.call(arguments)),
                        ae.set(this, t, n),
                        this[t](),
                        (i = ae.get(this, t)),
                        ae.set(this, t, !1),
                        n !== i)
                      )
                        return (
                          e.stopImmediatePropagation(), e.preventDefault(), i
                        );
                    } else
                      n &&
                        (ae.set(
                          this,
                          t,
                          _.event.trigger(n[0], n.slice(1), this)
                        ),
                        e.stopPropagation(),
                        (e.isImmediatePropagationStopped = je));
                  },
                }))
              : void 0 === ae.get(e, t) && _.event.add(e, t, je);
          }
          (_.event = {
            global: {},
            add: function (e, t, i, n, o) {
              var s,
                r,
                a,
                l,
                c,
                u,
                d,
                p,
                h,
                f,
                g,
                m = ae.get(e);
              if (se(e))
                for (
                  i.handler && ((i = (s = i).handler), (o = s.selector)),
                    o && _.find.matchesSelector(ge, o),
                    i.guid || (i.guid = _.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (r = m.handle) ||
                      (r = m.handle =
                        function (t) {
                          return void 0 !== _ && _.event.triggered !== t.type
                            ? _.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(V) || [""]).length;
                  c--;

                )
                  (h = g = (a = Me.exec(t[c]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    h &&
                      ((d = _.event.special[h] || {}),
                      (h = (o ? d.delegateType : d.bindType) || h),
                      (d = _.event.special[h] || {}),
                      (u = _.extend(
                        {
                          type: h,
                          origType: g,
                          data: n,
                          handler: i,
                          guid: i.guid,
                          selector: o,
                          needsContext: o && _.expr.match.needsContext.test(o),
                          namespace: f.join("."),
                        },
                        s
                      )),
                      (p = l[h]) ||
                        (((p = l[h] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, n, f, r)) ||
                          (e.addEventListener && e.addEventListener(h, r))),
                      d.add &&
                        (d.add.call(e, u),
                        u.handler.guid || (u.handler.guid = i.guid)),
                      o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                      (_.event.global[h] = !0));
            },
            remove: function (e, t, i, n, o) {
              var s,
                r,
                a,
                l,
                c,
                u,
                d,
                p,
                h,
                f,
                g,
                m = ae.hasData(e) && ae.get(e);
              if (m && (l = m.events)) {
                for (c = (t = (t || "").match(V) || [""]).length; c--; )
                  if (
                    ((h = g = (a = Me.exec(t[c]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    h)
                  ) {
                    for (
                      d = _.event.special[h] || {},
                        p =
                          l[(h = (n ? d.delegateType : d.bindType) || h)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        r = s = p.length;
                      s--;

                    )
                      (u = p[s]),
                        (!o && g !== u.origType) ||
                          (i && i.guid !== u.guid) ||
                          (a && !a.test(u.namespace)) ||
                          (n &&
                            n !== u.selector &&
                            ("**" !== n || !u.selector)) ||
                          (p.splice(s, 1),
                          u.selector && p.delegateCount--,
                          d.remove && d.remove.call(e, u));
                    r &&
                      !p.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, f, m.handle)) ||
                        _.removeEvent(e, h, m.handle),
                      delete l[h]);
                  } else for (h in l) _.event.remove(e, h + t[c], i, n, !0);
                _.isEmptyObject(l) && ae.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                i,
                n,
                o,
                s,
                r,
                a = new Array(arguments.length),
                l = _.event.fix(e),
                c =
                  (ae.get(this, "events") || Object.create(null))[l.type] || [],
                u = _.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, l))
              ) {
                for (
                  r = _.event.handlers.call(this, l, c), t = 0;
                  (o = r[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = o.elem, i = 0;
                    (s = o.handlers[i++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== s.namespace &&
                      !l.rnamespace.test(s.namespace)) ||
                      ((l.handleObj = s),
                      (l.data = s.data),
                      void 0 !==
                        (n = (
                          (_.event.special[s.origType] || {}).handle ||
                          s.handler
                        ).apply(o.elem, a)) &&
                        !1 === (l.result = n) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var i,
                n,
                o,
                s,
                r,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (s = [], r = {}, i = 0; i < l; i++)
                      void 0 === r[(o = (n = t[i]).selector + " ")] &&
                        (r[o] = n.needsContext
                          ? _(o, this).index(c) > -1
                          : _.find(o, this, null, [c]).length),
                        r[o] && s.push(n);
                    s.length && a.push({ elem: c, handlers: s });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[_.expando] ? e : new _.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    _e.test(t.type) &&
                      t.click &&
                      $(t, "input") &&
                      Ne(t, "click", !0),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    _e.test(t.type) &&
                      t.click &&
                      $(t, "input") &&
                      Ne(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (_e.test(t.type) &&
                      t.click &&
                      $(t, "input") &&
                      ae.get(t, "click")) ||
                    $(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (_.removeEvent = function (e, t, i) {
              e.removeEventListener && e.removeEventListener(t, i);
            }),
            (_.Event = function (e, t) {
              if (!(this instanceof _.Event)) return new _.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? je
                      : He),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && _.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[_.expando] = !0);
            }),
            (_.Event.prototype = {
              constructor: _.Event,
              isDefaultPrevented: He,
              isPropagationStopped: He,
              isImmediatePropagationStopped: He,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = je),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = je),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = je),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            _.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              _.event.addProp
            ),
            _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              function i(e) {
                if (b.documentMode) {
                  var i = ae.get(this, "handle"),
                    n = _.event.fix(e);
                  (n.type = "focusin" === e.type ? "focus" : "blur"),
                    (n.isSimulated = !0),
                    i(e),
                    n.target === n.currentTarget && i(n);
                } else _.event.simulate(t, e.target, _.event.fix(e));
              }
              (_.event.special[e] = {
                setup: function () {
                  var n;
                  if ((Ne(this, e, !0), !b.documentMode)) return !1;
                  (n = ae.get(this, t)) || this.addEventListener(t, i),
                    ae.set(this, t, (n || 0) + 1);
                },
                trigger: function () {
                  return Ne(this, e), !0;
                },
                teardown: function () {
                  var e;
                  if (!b.documentMode) return !1;
                  (e = ae.get(this, t) - 1)
                    ? ae.set(this, t, e)
                    : (this.removeEventListener(t, i), ae.remove(this, t));
                },
                _default: function (t) {
                  return ae.get(t.target, e);
                },
                delegateType: t,
              }),
                (_.event.special[t] = {
                  setup: function () {
                    var n = this.ownerDocument || this.document || this,
                      o = b.documentMode ? this : n,
                      s = ae.get(o, t);
                    s ||
                      (b.documentMode
                        ? this.addEventListener(t, i)
                        : n.addEventListener(e, i, !0)),
                      ae.set(o, t, (s || 0) + 1);
                  },
                  teardown: function () {
                    var n = this.ownerDocument || this.document || this,
                      o = b.documentMode ? this : n,
                      s = ae.get(o, t) - 1;
                    s
                      ? ae.set(o, t, s)
                      : (b.documentMode
                          ? this.removeEventListener(t, i)
                          : n.removeEventListener(e, i, !0),
                        ae.remove(o, t));
                  },
                });
            }),
            _.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                _.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var i,
                      n = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (n && (n === this || _.contains(this, n))) ||
                        ((e.type = o.origType),
                        (i = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      i
                    );
                  },
                };
              }
            ),
            _.fn.extend({
              on: function (e, t, i, n) {
                return Pe(this, e, t, i, n);
              },
              one: function (e, t, i, n) {
                return Pe(this, e, t, i, n, 1);
              },
              off: function (e, t, i) {
                var n, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (n = e.handleObj),
                    _(e.delegateTarget).off(
                      n.namespace ? n.origType + "." + n.namespace : n.origType,
                      n.selector,
                      n.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((i = t), (t = void 0)),
                  !1 === i && (i = He),
                  this.each(function () {
                    _.event.remove(this, e, i, t);
                  })
                );
              },
            });
          var qe = /<script|<style|<link/i,
            Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ze = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function We(e, t) {
            return (
              ($(e, "table") &&
                $(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                _(e).children("tbody")[0]) ||
              e
            );
          }
          function Re(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Fe(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Ue(e, t) {
            var i, n, o, s, r, a;
            if (1 === t.nodeType) {
              if (ae.hasData(e) && (a = ae.get(e).events))
                for (o in (ae.remove(t, "handle events"), a))
                  for (i = 0, n = a[o].length; i < n; i++)
                    _.event.add(t, o, a[o][i]);
              le.hasData(e) &&
                ((s = le.access(e)), (r = _.extend({}, s)), le.set(t, r));
            }
          }
          function Be(e, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && _e.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== i && "textarea" !== i) ||
                (t.defaultValue = e.defaultValue);
          }
          function Ye(e, t, i, n) {
            t = l(t);
            var o,
              s,
              r,
              a,
              c,
              u,
              d = 0,
              p = e.length,
              h = p - 1,
              f = t[0],
              g = v(f);
            if (
              g ||
              (p > 1 && "string" == typeof f && !m.checkClone && Ie.test(f))
            )
              return e.each(function (o) {
                var s = e.eq(o);
                g && (t[0] = f.call(this, o, s.html())), Ye(s, t, i, n);
              });
            if (
              p &&
              ((s = (o = Le(t, e[0].ownerDocument, !1, e, n)).firstChild),
              1 === o.childNodes.length && (o = s),
              s || n)
            ) {
              for (a = (r = _.map(Ee(o, "script"), Re)).length; d < p; d++)
                (c = o),
                  d !== h &&
                    ((c = _.clone(c, !0, !0)),
                    a && _.merge(r, Ee(c, "script"))),
                  i.call(e[d], c, d);
              if (a)
                for (
                  u = r[r.length - 1].ownerDocument, _.map(r, Fe), d = 0;
                  d < a;
                  d++
                )
                  (c = r[d]),
                    $e.test(c.type || "") &&
                      !ae.access(c, "globalEval") &&
                      _.contains(u, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? _._evalUrl &&
                          !c.noModule &&
                          _._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            u
                          )
                        : x(c.textContent.replace(ze, ""), c, u));
            }
            return e;
          }
          function Ve(e, t, i) {
            for (
              var n, o = t ? _.filter(t, e) : e, s = 0;
              null != (n = o[s]);
              s++
            )
              i || 1 !== n.nodeType || _.cleanData(Ee(n)),
                n.parentNode &&
                  (i && me(n) && Oe(Ee(n, "script")),
                  n.parentNode.removeChild(n));
            return e;
          }
          _.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, i) {
              var n,
                o,
                s,
                r,
                a = e.cloneNode(!0),
                l = me(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  _.isXMLDoc(e)
                )
              )
                for (r = Ee(a), n = 0, o = (s = Ee(e)).length; n < o; n++)
                  Be(s[n], r[n]);
              if (t)
                if (i)
                  for (
                    s = s || Ee(e), r = r || Ee(a), n = 0, o = s.length;
                    n < o;
                    n++
                  )
                    Ue(s[n], r[n]);
                else Ue(e, a);
              return (
                (r = Ee(a, "script")).length > 0 &&
                  Oe(r, !l && Ee(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, i, n, o = _.event.special, s = 0;
                void 0 !== (i = e[s]);
                s++
              )
                if (se(i)) {
                  if ((t = i[ae.expando])) {
                    if (t.events)
                      for (n in t.events)
                        o[n]
                          ? _.event.remove(i, n)
                          : _.removeEvent(i, n, t.handle);
                    i[ae.expando] = void 0;
                  }
                  i[le.expando] && (i[le.expando] = void 0);
                }
            },
          }),
            _.fn.extend({
              detach: function (e) {
                return Ve(this, e, !0);
              },
              remove: function (e) {
                return Ve(this, e);
              },
              text: function (e) {
                return ee(
                  this,
                  function (e) {
                    return void 0 === e
                      ? _.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Ye(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    We(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Ye(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = We(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ye(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ye(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (_.cleanData(Ee(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return _.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return ee(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      i = 0,
                      n = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !qe.test(e) &&
                      !Ae[(Ce.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = _.htmlPrefilter(e);
                      try {
                        for (; i < n; i++)
                          1 === (t = this[i] || {}).nodeType &&
                            (_.cleanData(Ee(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Ye(
                  this,
                  arguments,
                  function (t) {
                    var i = this.parentNode;
                    _.inArray(this, e) < 0 &&
                      (_.cleanData(Ee(this)), i && i.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            _.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                _.fn[e] = function (e) {
                  for (
                    var i, n = [], o = _(e), s = o.length - 1, r = 0;
                    r <= s;
                    r++
                  )
                    (i = r === s ? this : this.clone(!0)),
                      _(o[r])[t](i),
                      c.apply(n, i.get());
                  return this.pushStack(n);
                };
              }
            );
          var Xe = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
            Ge = /^--/,
            Ke = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = n), t.getComputedStyle(e);
            },
            Qe = function (e, t, i) {
              var n,
                o,
                s = {};
              for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((n = i.call(e)), t)) e.style[o] = s[o];
              return n;
            },
            Ze = new RegExp(fe.join("|"), "i");
          function Je(e, t, i) {
            var n,
              o,
              s,
              r,
              a = Ge.test(t),
              l = e.style;
            return (
              (i = i || Ke(e)) &&
                ((r = i.getPropertyValue(t) || i[t]),
                a && r && (r = r.replace(L, "$1") || void 0),
                "" !== r || me(e) || (r = _.style(e, t)),
                !m.pixelBoxStyles() &&
                  Xe.test(r) &&
                  Ze.test(t) &&
                  ((n = l.width),
                  (o = l.minWidth),
                  (s = l.maxWidth),
                  (l.minWidth = l.maxWidth = l.width = r),
                  (r = i.width),
                  (l.width = n),
                  (l.minWidth = o),
                  (l.maxWidth = s))),
              void 0 !== r ? r + "" : r
            );
          }
          function et(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (u) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ge.appendChild(c).appendChild(u);
                var e = n.getComputedStyle(u);
                (i = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (u.style.right = "60%"),
                  (r = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (u.style.position = "absolute"),
                  (s = 12 === t(u.offsetWidth / 3)),
                  ge.removeChild(c),
                  (u = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var i,
              o,
              s,
              r,
              a,
              l,
              c = b.createElement("div"),
              u = b.createElement("div");
            u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
              _.extend(m, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), r;
                },
                pixelPosition: function () {
                  return e(), i;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), s;
                },
                reliableTrDimensions: function () {
                  var e, t, i, o;
                  return (
                    null == a &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (i = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText =
                        "box-sizing:content-box;border:1px solid"),
                      (t.style.height = "1px"),
                      (i.style.height = "9px"),
                      (i.style.display = "block"),
                      ge.appendChild(e).appendChild(t).appendChild(i),
                      (o = n.getComputedStyle(t)),
                      (a =
                        parseInt(o.height, 10) +
                          parseInt(o.borderTopWidth, 10) +
                          parseInt(o.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ge.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var tt = ["Webkit", "Moz", "ms"],
            it = b.createElement("div").style,
            nt = {};
          function ot(e) {
            return (
              _.cssProps[e] ||
              nt[e] ||
              (e in it
                ? e
                : (nt[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), i = tt.length;
                        i--;

                      )
                        if ((e = tt[i] + t) in it) return e;
                    })(e) || e))
            );
          }
          var st = /^(none|table(?!-c[ea]).+)/,
            rt = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            at = { letterSpacing: "0", fontWeight: "400" };
          function lt(e, t, i) {
            var n = he.exec(t);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
          }
          function ct(e, t, i, n, o, s) {
            var r = "width" === t ? 1 : 0,
              a = 0,
              l = 0,
              c = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; r < 4; r += 2)
              "margin" === i && (c += _.css(e, i + fe[r], !0, o)),
                n
                  ? ("content" === i &&
                      (l -= _.css(e, "padding" + fe[r], !0, o)),
                    "margin" !== i &&
                      (l -= _.css(e, "border" + fe[r] + "Width", !0, o)))
                  : ((l += _.css(e, "padding" + fe[r], !0, o)),
                    "padding" !== i
                      ? (l += _.css(e, "border" + fe[r] + "Width", !0, o))
                      : (a += _.css(e, "border" + fe[r] + "Width", !0, o)));
            return (
              !n &&
                s >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        s -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l + c
            );
          }
          function ut(e, t, i) {
            var n = Ke(e),
              o =
                (!m.boxSizingReliable() || i) &&
                "border-box" === _.css(e, "boxSizing", !1, n),
              s = o,
              r = Je(e, t, n),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Xe.test(r)) {
              if (!i) return r;
              r = "auto";
            }
            return (
              ((!m.boxSizingReliable() && o) ||
                (!m.reliableTrDimensions() && $(e, "tr")) ||
                "auto" === r ||
                (!parseFloat(r) && "inline" === _.css(e, "display", !1, n))) &&
                e.getClientRects().length &&
                ((o = "border-box" === _.css(e, "boxSizing", !1, n)),
                (s = a in e) && (r = e[a])),
              (r = parseFloat(r) || 0) +
                ct(e, t, i || (o ? "border" : "content"), s, n, r) +
                "px"
            );
          }
          function dt(e, t, i, n, o) {
            return new dt.prototype.init(e, t, i, n, o);
          }
          _.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var i = Je(e, "opacity");
                    return "" === i ? "1" : i;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
            },
            cssProps: {},
            style: function (e, t, i, n) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  s,
                  r,
                  a = oe(t),
                  l = Ge.test(t),
                  c = e.style;
                if (
                  (l || (t = ot(a)),
                  (r = _.cssHooks[t] || _.cssHooks[a]),
                  void 0 === i)
                )
                  return r && "get" in r && void 0 !== (o = r.get(e, !1, n))
                    ? o
                    : c[t];
                "string" == (s = typeof i) &&
                  (o = he.exec(i)) &&
                  o[1] &&
                  ((i = be(e, t, o)), (s = "number")),
                  null != i &&
                    i == i &&
                    ("number" !== s ||
                      l ||
                      (i += (o && o[3]) || (_.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== i ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (r && "set" in r && void 0 === (i = r.set(e, i, n))) ||
                      (l ? c.setProperty(t, i) : (c[t] = i)));
              }
            },
            css: function (e, t, i, n) {
              var o,
                s,
                r,
                a = oe(t);
              return (
                Ge.test(t) || (t = ot(a)),
                (r = _.cssHooks[t] || _.cssHooks[a]) &&
                  "get" in r &&
                  (o = r.get(e, !0, i)),
                void 0 === o && (o = Je(e, t, n)),
                "normal" === o && t in at && (o = at[t]),
                "" === i || i
                  ? ((s = parseFloat(o)), !0 === i || isFinite(s) ? s || 0 : o)
                  : o
              );
            },
          }),
            _.each(["height", "width"], function (e, t) {
              _.cssHooks[t] = {
                get: function (e, i, n) {
                  if (i)
                    return !st.test(_.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? ut(e, t, n)
                      : Qe(e, rt, function () {
                          return ut(e, t, n);
                        });
                },
                set: function (e, i, n) {
                  var o,
                    s = Ke(e),
                    r = !m.scrollboxSize() && "absolute" === s.position,
                    a =
                      (r || n) && "border-box" === _.css(e, "boxSizing", !1, s),
                    l = n ? ct(e, t, n, a, s) : 0;
                  return (
                    a &&
                      r &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(s[t]) -
                          ct(e, t, "border", !1, s) -
                          0.5
                      )),
                    l &&
                      (o = he.exec(i)) &&
                      "px" !== (o[3] || "px") &&
                      ((e.style[t] = i), (i = _.css(e, t))),
                    lt(0, i, l)
                  );
                },
              };
            }),
            (_.cssHooks.marginLeft = et(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Je(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Qe(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            _.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (_.cssHooks[e + t] = {
                  expand: function (i) {
                    for (
                      var n = 0,
                        o = {},
                        s = "string" == typeof i ? i.split(" ") : [i];
                      n < 4;
                      n++
                    )
                      o[e + fe[n] + t] = s[n] || s[n - 2] || s[0];
                    return o;
                  },
                }),
                  "margin" !== e && (_.cssHooks[e + t].set = lt);
              }
            ),
            _.fn.extend({
              css: function (e, t) {
                return ee(
                  this,
                  function (e, t, i) {
                    var n,
                      o,
                      s = {},
                      r = 0;
                    if (Array.isArray(t)) {
                      for (n = Ke(e), o = t.length; r < o; r++)
                        s[t[r]] = _.css(e, t[r], !1, n);
                      return s;
                    }
                    return void 0 !== i ? _.style(e, t, i) : _.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (_.Tween = dt),
            (dt.prototype = {
              constructor: dt,
              init: function (e, t, i, n, o, s) {
                (this.elem = e),
                  (this.prop = i),
                  (this.easing = o || _.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = n),
                  (this.unit = s || (_.cssNumber[i] ? "" : "px"));
              },
              cur: function () {
                var e = dt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : dt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  i = dt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        _.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  i && i.set ? i.set(this) : dt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (dt.prototype.init.prototype = dt.prototype),
            (dt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = _.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  _.fx.step[e.prop]
                    ? _.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!_.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : _.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (dt.propHooks.scrollTop = dt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (_.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (_.fx = dt.prototype.init),
            (_.fx.step = {});
          var pt,
            ht,
            ft = /^(?:toggle|show|hide)$/,
            gt = /queueHooks$/;
          function mt() {
            ht &&
              (!1 === b.hidden && n.requestAnimationFrame
                ? n.requestAnimationFrame(mt)
                : n.setTimeout(mt, _.fx.interval),
              _.fx.tick());
          }
          function vt() {
            return (
              n.setTimeout(function () {
                pt = void 0;
              }),
              (pt = Date.now())
            );
          }
          function yt(e, t) {
            var i,
              n = 0,
              o = { height: e };
            for (t = t ? 1 : 0; n < 4; n += 2 - t)
              o["margin" + (i = fe[n])] = o["padding" + i] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function bt(e, t, i) {
            for (
              var n,
                o = (wt.tweeners[t] || []).concat(wt.tweeners["*"]),
                s = 0,
                r = o.length;
              s < r;
              s++
            )
              if ((n = o[s].call(i, t, e))) return n;
          }
          function wt(e, t, i) {
            var n,
              o,
              s = 0,
              r = wt.prefilters.length,
              a = _.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (o) return !1;
                for (
                  var t = pt || vt(),
                    i = Math.max(0, c.startTime + c.duration - t),
                    n = 1 - (i / c.duration || 0),
                    s = 0,
                    r = c.tweens.length;
                  s < r;
                  s++
                )
                  c.tweens[s].run(n);
                return (
                  a.notifyWith(e, [c, n, i]),
                  n < 1 && r
                    ? i
                    : (r || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(
                  !0,
                  { specialEasing: {}, easing: _.easing._default },
                  i
                ),
                originalProperties: t,
                originalOptions: i,
                startTime: pt || vt(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                  var n = _.Tween(
                    e,
                    c.opts,
                    t,
                    i,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(n), n;
                },
                stop: function (t) {
                  var i = 0,
                    n = t ? c.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; i < n; i++) c.tweens[i].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              u = c.props;
            for (
              (function (e, t) {
                var i, n, o, s, r;
                for (i in e)
                  if (
                    ((o = t[(n = oe(i))]),
                    (s = e[i]),
                    Array.isArray(s) && ((o = s[1]), (s = e[i] = s[0])),
                    i !== n && ((e[n] = s), delete e[i]),
                    (r = _.cssHooks[n]) && ("expand" in r))
                  )
                    for (i in ((s = r.expand(s)), delete e[n], s))
                      (i in e) || ((e[i] = s[i]), (t[i] = o));
                  else t[n] = o;
              })(u, c.opts.specialEasing);
              s < r;
              s++
            )
              if ((n = wt.prefilters[s].call(c, e, u, c.opts)))
                return (
                  v(n.stop) &&
                    (_._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                  n
                );
            return (
              _.map(u, bt, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              _.fx.timer(
                _.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (_.Animation = _.extend(wt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var i = this.createTween(e, t);
                  return be(i.elem, e, he.exec(t), i), i;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(V));
              for (var i, n = 0, o = e.length; n < o; n++)
                (i = e[n]),
                  (wt.tweeners[i] = wt.tweeners[i] || []),
                  wt.tweeners[i].unshift(t);
            },
            prefilters: [
              function (e, t, i) {
                var n,
                  o,
                  s,
                  r,
                  a,
                  l,
                  c,
                  u,
                  d = "width" in t || "height" in t,
                  p = this,
                  h = {},
                  f = e.style,
                  g = e.nodeType && ye(e),
                  m = ae.get(e, "fxshow");
                for (n in (i.queue ||
                  (null == (r = _._queueHooks(e, "fx")).unqueued &&
                    ((r.unqueued = 0),
                    (a = r.empty.fire),
                    (r.empty.fire = function () {
                      r.unqueued || a();
                    })),
                  r.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      r.unqueued--, _.queue(e, "fx").length || r.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[n]), ft.test(o))) {
                    if (
                      (delete t[n],
                      (s = s || "toggle" === o),
                      o === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== o || !m || void 0 === m[n]) continue;
                      g = !0;
                    }
                    h[n] = (m && m[n]) || _.style(e, n);
                  }
                if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(h))
                  for (n in (d &&
                    1 === e.nodeType &&
                    ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                    null == (c = m && m.display) && (c = ae.get(e, "display")),
                    "none" === (u = _.css(e, "display")) &&
                      (c
                        ? (u = c)
                        : (ke([e], !0),
                          (c = e.style.display || c),
                          (u = _.css(e, "display")),
                          ke([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === _.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          f.display = c;
                        }),
                        null == c &&
                          ((u = f.display), (c = "none" === u ? "" : u))),
                      (f.display = "inline-block"))),
                  i.overflow &&
                    ((f.overflow = "hidden"),
                    p.always(function () {
                      (f.overflow = i.overflow[0]),
                        (f.overflowX = i.overflow[1]),
                        (f.overflowY = i.overflow[2]);
                    })),
                  (l = !1),
                  h))
                    l ||
                      (m
                        ? "hidden" in m && (g = m.hidden)
                        : (m = ae.access(e, "fxshow", { display: c })),
                      s && (m.hidden = !g),
                      g && ke([e], !0),
                      p.done(function () {
                        for (n in (g || ke([e]), ae.remove(e, "fxshow"), h))
                          _.style(e, n, h[n]);
                      })),
                      (l = bt(g ? m[n] : 0, n, p)),
                      n in m ||
                        ((m[n] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? wt.prefilters.unshift(e) : wt.prefilters.push(e);
            },
          })),
            (_.speed = function (e, t, i) {
              var n =
                e && "object" == typeof e
                  ? _.extend({}, e)
                  : {
                      complete: i || (!i && t) || (v(e) && e),
                      duration: e,
                      easing: (i && t) || (t && !v(t) && t),
                    };
              return (
                _.fx.off
                  ? (n.duration = 0)
                  : "number" != typeof n.duration &&
                    (n.duration in _.fx.speeds
                      ? (n.duration = _.fx.speeds[n.duration])
                      : (n.duration = _.fx.speeds._default)),
                (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                (n.old = n.complete),
                (n.complete = function () {
                  v(n.old) && n.old.call(this),
                    n.queue && _.dequeue(this, n.queue);
                }),
                n
              );
            }),
            _.fn.extend({
              fadeTo: function (e, t, i, n) {
                return this.filter(ye)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, i, n);
              },
              animate: function (e, t, i, n) {
                var o = _.isEmptyObject(e),
                  s = _.speed(t, i, n),
                  r = function () {
                    var t = wt(this, _.extend({}, e), s);
                    (o || ae.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (r.finish = r),
                  o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                );
              },
              stop: function (e, t, i) {
                var n = function (e) {
                  var t = e.stop;
                  delete e.stop, t(i);
                };
                return (
                  "string" != typeof e && ((i = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      o = null != e && e + "queueHooks",
                      s = _.timers,
                      r = ae.get(this);
                    if (o) r[o] && r[o].stop && n(r[o]);
                    else
                      for (o in r) r[o] && r[o].stop && gt.test(o) && n(r[o]);
                    for (o = s.length; o--; )
                      s[o].elem !== this ||
                        (null != e && s[o].queue !== e) ||
                        (s[o].anim.stop(i), (t = !1), s.splice(o, 1));
                    (!t && i) || _.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      i = ae.get(this),
                      n = i[e + "queue"],
                      o = i[e + "queueHooks"],
                      s = _.timers,
                      r = n ? n.length : 0;
                    for (
                      i.finish = !0,
                        _.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = s.length;
                      t--;

                    )
                      s[t].elem === this &&
                        s[t].queue === e &&
                        (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < r; t++)
                      n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish;
                  })
                );
              },
            }),
            _.each(["toggle", "show", "hide"], function (e, t) {
              var i = _.fn[t];
              _.fn[t] = function (e, n, o) {
                return null == e || "boolean" == typeof e
                  ? i.apply(this, arguments)
                  : this.animate(yt(t, !0), e, n, o);
              };
            }),
            _.each(
              {
                slideDown: yt("show"),
                slideUp: yt("hide"),
                slideToggle: yt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                _.fn[e] = function (e, i, n) {
                  return this.animate(t, e, i, n);
                };
              }
            ),
            (_.timers = []),
            (_.fx.tick = function () {
              var e,
                t = 0,
                i = _.timers;
              for (pt = Date.now(); t < i.length; t++)
                (e = i[t])() || i[t] !== e || i.splice(t--, 1);
              i.length || _.fx.stop(), (pt = void 0);
            }),
            (_.fx.timer = function (e) {
              _.timers.push(e), _.fx.start();
            }),
            (_.fx.interval = 13),
            (_.fx.start = function () {
              ht || ((ht = !0), mt());
            }),
            (_.fx.stop = function () {
              ht = null;
            }),
            (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (_.fn.delay = function (e, t) {
              return (
                (e = (_.fx && _.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, i) {
                  var o = n.setTimeout(t, e);
                  i.stop = function () {
                    n.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var xt,
            kt = _.expr.attrHandle;
          _.fn.extend({
            attr: function (e, t) {
              return ee(this, _.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                _.removeAttr(this, e);
              });
            },
          }),
            _.extend({
              attr: function (e, t, i) {
                var n,
                  o,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return void 0 === e.getAttribute
                    ? _.prop(e, t, i)
                    : ((1 === s && _.isXMLDoc(e)) ||
                        (o =
                          _.attrHooks[t.toLowerCase()] ||
                          (_.expr.match.bool.test(t) ? xt : void 0)),
                      void 0 !== i
                        ? null === i
                          ? void _.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (n = o.set(e, i, t))
                          ? n
                          : (e.setAttribute(t, i + ""), i)
                        : o && "get" in o && null !== (n = o.get(e, t))
                        ? n
                        : null == (n = _.find.attr(e, t))
                        ? void 0
                        : n);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && $(e, "input")) {
                      var i = e.value;
                      return e.setAttribute("type", t), i && (e.value = i), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var i,
                  n = 0,
                  o = t && t.match(V);
                if (o && 1 === e.nodeType)
                  for (; (i = o[n++]); ) e.removeAttribute(i);
              },
            }),
            (xt = {
              set: function (e, t, i) {
                return !1 === t ? _.removeAttr(e, i) : e.setAttribute(i, i), i;
              },
            }),
            _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var i = kt[t] || _.find.attr;
              kt[t] = function (e, t, n) {
                var o,
                  s,
                  r = t.toLowerCase();
                return (
                  n ||
                    ((s = kt[r]),
                    (kt[r] = o),
                    (o = null != i(e, t, n) ? r : null),
                    (kt[r] = s)),
                  o
                );
              };
            });
          var St = /^(?:input|select|textarea|button)$/i,
            Tt = /^(?:a|area)$/i;
          function _t(e) {
            return (e.match(V) || []).join(" ");
          }
          function Ct(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function $t(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(V)) || [];
          }
          _.fn.extend({
            prop: function (e, t) {
              return ee(this, _.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[_.propFix[e] || e];
              });
            },
          }),
            _.extend({
              prop: function (e, t, i) {
                var n,
                  o,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return (
                    (1 === s && _.isXMLDoc(e)) ||
                      ((t = _.propFix[t] || t), (o = _.propHooks[t])),
                    void 0 !== i
                      ? o && "set" in o && void 0 !== (n = o.set(e, i, t))
                        ? n
                        : (e[t] = i)
                      : o && "get" in o && null !== (n = o.get(e, t))
                      ? n
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = _.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : St.test(e.nodeName) || (Tt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (_.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            _.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                _.propFix[this.toLowerCase()] = this;
              }
            ),
            _.fn.extend({
              addClass: function (e) {
                var t, i, n, o, s, r;
                return v(e)
                  ? this.each(function (t) {
                      _(this).addClass(e.call(this, t, Ct(this)));
                    })
                  : (t = $t(e)).length
                  ? this.each(function () {
                      if (
                        ((n = Ct(this)),
                        (i = 1 === this.nodeType && " " + _t(n) + " "))
                      ) {
                        for (s = 0; s < t.length; s++)
                          (o = t[s]),
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        (r = _t(i)), n !== r && this.setAttribute("class", r);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, i, n, o, s, r;
                return v(e)
                  ? this.each(function (t) {
                      _(this).removeClass(e.call(this, t, Ct(this)));
                    })
                  : arguments.length
                  ? (t = $t(e)).length
                    ? this.each(function () {
                        if (
                          ((n = Ct(this)),
                          (i = 1 === this.nodeType && " " + _t(n) + " "))
                        ) {
                          for (s = 0; s < t.length; s++)
                            for (o = t[s]; i.indexOf(" " + o + " ") > -1; )
                              i = i.replace(" " + o + " ", " ");
                          (r = _t(i)), n !== r && this.setAttribute("class", r);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var i,
                  n,
                  o,
                  s,
                  r = typeof e,
                  a = "string" === r || Array.isArray(e);
                return v(e)
                  ? this.each(function (i) {
                      _(this).toggleClass(e.call(this, i, Ct(this), t), t);
                    })
                  : "boolean" == typeof t && a
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((i = $t(e)),
                    this.each(function () {
                      if (a)
                        for (s = _(this), o = 0; o < i.length; o++)
                          (n = i[o]),
                            s.hasClass(n) ? s.removeClass(n) : s.addClass(n);
                      else
                        (void 0 !== e && "boolean" !== r) ||
                          ((n = Ct(this)) && ae.set(this, "__className__", n),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              n || !1 === e
                                ? ""
                                : ae.get(this, "__className__") || ""
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  i,
                  n = 0;
                for (t = " " + e + " "; (i = this[n++]); )
                  if (
                    1 === i.nodeType &&
                    (" " + _t(Ct(i)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var At = /\r/g;
          _.fn.extend({
            val: function (e) {
              var t,
                i,
                n,
                o = this[0];
              return arguments.length
                ? ((n = v(e)),
                  this.each(function (i) {
                    var o;
                    1 === this.nodeType &&
                      (null == (o = n ? e.call(this, i, _(this).val()) : e)
                        ? (o = "")
                        : "number" == typeof o
                        ? (o += "")
                        : Array.isArray(o) &&
                          (o = _.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        _.valHooks[this.type] ||
                        _.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  }))
                : o
                ? (t =
                    _.valHooks[o.type] ||
                    _.valHooks[o.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (i = t.get(o, "value"))
                  ? i
                  : "string" == typeof (i = o.value)
                  ? i.replace(At, "")
                  : null == i
                  ? ""
                  : i
                : void 0;
            },
          }),
            _.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : _t(_.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      i,
                      n,
                      o = e.options,
                      s = e.selectedIndex,
                      r = "select-one" === e.type,
                      a = r ? null : [],
                      l = r ? s + 1 : o.length;
                    for (n = s < 0 ? l : r ? s : 0; n < l; n++)
                      if (
                        ((i = o[n]).selected || n === s) &&
                        !i.disabled &&
                        (!i.parentNode.disabled || !$(i.parentNode, "optgroup"))
                      ) {
                        if (((t = _(i).val()), r)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var i, n, o = e.options, s = _.makeArray(t), r = o.length;
                      r--;

                    )
                      ((n = o[r]).selected =
                        _.inArray(_.valHooks.option.get(n), s) > -1) &&
                        (i = !0);
                    return i || (e.selectedIndex = -1), s;
                  },
                },
              },
            }),
            _.each(["radio", "checkbox"], function () {
              (_.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = _.inArray(_(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (_.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            });
          var Et = n.location,
            Ot = { guid: Date.now() },
            Dt = /\?/;
          _.parseXML = function (e) {
            var t, i;
            if (!e || "string" != typeof e) return null;
            try {
              t = new n.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (i = t && t.getElementsByTagName("parsererror")[0]),
              (t && !i) ||
                _.error(
                  "Invalid XML: " +
                    (i
                      ? _.map(i.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var Lt = /^(?:focusinfocus|focusoutblur)$/,
            Mt = function (e) {
              e.stopPropagation();
            };
          _.extend(_.event, {
            trigger: function (e, t, i, o) {
              var s,
                r,
                a,
                l,
                c,
                u,
                d,
                p,
                f = [i || b],
                g = h.call(e, "type") ? e.type : e,
                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((r = p = a = i = i || b),
                3 !== i.nodeType &&
                  8 !== i.nodeType &&
                  !Lt.test(g + _.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (c = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[_.expando]
                    ? e
                    : new _.Event(g, "object" == typeof e && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = i),
                  (t = null == t ? [e] : _.makeArray(t, [e])),
                  (d = _.event.special[g] || {}),
                  o || !d.trigger || !1 !== d.trigger.apply(i, t)))
              ) {
                if (!o && !d.noBubble && !y(i)) {
                  for (
                    l = d.delegateType || g,
                      Lt.test(l + g) || (r = r.parentNode);
                    r;
                    r = r.parentNode
                  )
                    f.push(r), (a = r);
                  a === (i.ownerDocument || b) &&
                    f.push(a.defaultView || a.parentWindow || n);
                }
                for (s = 0; (r = f[s++]) && !e.isPropagationStopped(); )
                  (p = r),
                    (e.type = s > 1 ? l : d.bindType || g),
                    (u =
                      (ae.get(r, "events") || Object.create(null))[e.type] &&
                      ae.get(r, "handle")) && u.apply(r, t),
                    (u = c && r[c]) &&
                      u.apply &&
                      se(r) &&
                      ((e.result = u.apply(r, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  o ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(f.pop(), t)) ||
                    !se(i) ||
                    (c &&
                      v(i[g]) &&
                      !y(i) &&
                      ((a = i[c]) && (i[c] = null),
                      (_.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, Mt),
                      i[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, Mt),
                      (_.event.triggered = void 0),
                      a && (i[c] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, i) {
              var n = _.extend(new _.Event(), i, { type: e, isSimulated: !0 });
              _.event.trigger(n, null, t);
            },
          }),
            _.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  _.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var i = this[0];
                if (i) return _.event.trigger(e, t, i, !0);
              },
            });
          var jt = /\[\]$/,
            Ht = /\r?\n/g,
            Pt = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;
          function qt(e, t, i, n) {
            var o;
            if (Array.isArray(t))
              _.each(t, function (t, o) {
                i || jt.test(e)
                  ? n(e, o)
                  : qt(
                      e +
                        "[" +
                        ("object" == typeof o && null != o ? t : "") +
                        "]",
                      o,
                      i,
                      n
                    );
              });
            else if (i || "object" !== k(t)) n(e, t);
            else for (o in t) qt(e + "[" + o + "]", t[o], i, n);
          }
          (_.param = function (e, t) {
            var i,
              n = [],
              o = function (e, t) {
                var i = v(t) ? t() : t;
                n[n.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == i ? "" : i);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
              _.each(e, function () {
                o(this.name, this.value);
              });
            else for (i in e) qt(i, e[i], t, o);
            return n.join("&");
          }),
            _.fn.extend({
              serialize: function () {
                return _.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = _.prop(this, "elements");
                  return e ? _.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !_(this).is(":disabled") &&
                      Nt.test(this.nodeName) &&
                      !Pt.test(e) &&
                      (this.checked || !_e.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var i = _(this).val();
                    return null == i
                      ? null
                      : Array.isArray(i)
                      ? _.map(i, function (e) {
                          return { name: t.name, value: e.replace(Ht, "\r\n") };
                        })
                      : { name: t.name, value: i.replace(Ht, "\r\n") };
                  })
                  .get();
              },
            });
          var It = /%20/g,
            zt = /#.*$/,
            Wt = /([?&])_=[^&]*/,
            Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ft = /^(?:GET|HEAD)$/,
            Ut = /^\/\//,
            Bt = {},
            Yt = {},
            Vt = "*/".concat("*"),
            Xt = b.createElement("a");
          function Gt(e) {
            return function (t, i) {
              "string" != typeof t && ((i = t), (t = "*"));
              var n,
                o = 0,
                s = t.toLowerCase().match(V) || [];
              if (v(i))
                for (; (n = s[o++]); )
                  "+" === n[0]
                    ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i))
                    : (e[n] = e[n] || []).push(i);
            };
          }
          function Kt(e, t, i, n) {
            var o = {},
              s = e === Yt;
            function r(a) {
              var l;
              return (
                (o[a] = !0),
                _.each(e[a] || [], function (e, a) {
                  var c = a(t, i, n);
                  return "string" != typeof c || s || o[c]
                    ? s
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), r(c), !1);
                }),
                l
              );
            }
            return r(t.dataTypes[0]) || (!o["*"] && r("*"));
          }
          function Qt(e, t) {
            var i,
              n,
              o = _.ajaxSettings.flatOptions || {};
            for (i in t)
              void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && _.extend(!0, e, n), e;
          }
          (Xt.href = Et.href),
            _.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Et.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Vt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": _.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Qt(Qt(e, _.ajaxSettings), t) : Qt(_.ajaxSettings, e);
              },
              ajaxPrefilter: Gt(Bt),
              ajaxTransport: Gt(Yt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var i,
                  o,
                  s,
                  r,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p,
                  h = _.ajaxSetup({}, t),
                  f = h.context || h,
                  g = h.context && (f.nodeType || f.jquery) ? _(f) : _.event,
                  m = _.Deferred(),
                  v = _.Callbacks("once memory"),
                  y = h.statusCode || {},
                  w = {},
                  x = {},
                  k = "canceled",
                  S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!r)
                          for (r = {}; (t = Rt.exec(s)); )
                            r[t[1].toLowerCase() + " "] = (
                              r[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = r[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? s : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (w[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) S.always(e[S.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || k;
                      return i && i.abort(t), T(0, t), this;
                    },
                  };
                if (
                  (m.promise(S),
                  (h.url = ((e || h.url || Et.href) + "").replace(
                    Ut,
                    Et.protocol + "//"
                  )),
                  (h.type = t.method || t.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || "*").toLowerCase().match(V) || [
                    "",
                  ]),
                  null == h.crossDomain)
                ) {
                  l = b.createElement("a");
                  try {
                    (l.href = h.url),
                      (l.href = l.href),
                      (h.crossDomain =
                        Xt.protocol + "//" + Xt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = _.param(h.data, h.traditional)),
                  Kt(Bt, h, t, S),
                  c)
                )
                  return S;
                for (d in ((u = _.event && h.global) &&
                  0 == _.active++ &&
                  _.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Ft.test(h.type)),
                (o = h.url.replace(zt, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    0 ===
                      (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (h.data = h.data.replace(It, "+"))
                  : ((p = h.url.slice(o.length)),
                    h.data &&
                      (h.processData || "string" == typeof h.data) &&
                      ((o += (Dt.test(o) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((o = o.replace(Wt, "$1")),
                      (p = (Dt.test(o) ? "&" : "?") + "_=" + Ot.guid++ + p)),
                    (h.url = o + p)),
                h.ifModified &&
                  (_.lastModified[o] &&
                    S.setRequestHeader("If-Modified-Since", _.lastModified[o]),
                  _.etag[o] && S.setRequestHeader("If-None-Match", _.etag[o])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  t.contentType) &&
                  S.setRequestHeader("Content-Type", h.contentType),
                S.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + Vt + "; q=0.01" : "")
                    : h.accepts["*"]
                ),
                h.headers))
                  S.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(f, S, h) || c))
                  return S.abort();
                if (
                  ((k = "abort"),
                  v.add(h.complete),
                  S.done(h.success),
                  S.fail(h.error),
                  (i = Kt(Yt, h, t, S)))
                ) {
                  if (
                    ((S.readyState = 1), u && g.trigger("ajaxSend", [S, h]), c)
                  )
                    return S;
                  h.async &&
                    h.timeout > 0 &&
                    (a = n.setTimeout(function () {
                      S.abort("timeout");
                    }, h.timeout));
                  try {
                    (c = !1), i.send(w, T);
                  } catch (e) {
                    if (c) throw e;
                    T(-1, e);
                  }
                } else T(-1, "No Transport");
                function T(e, t, r, l) {
                  var d,
                    p,
                    b,
                    w,
                    x,
                    k = t;
                  c ||
                    ((c = !0),
                    a && n.clearTimeout(a),
                    (i = void 0),
                    (s = l || ""),
                    (S.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    r &&
                      (w = (function (e, t, i) {
                        for (
                          var n, o, s, r, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === n &&
                              (n =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (n)
                          for (o in a)
                            if (a[o] && a[o].test(n)) {
                              l.unshift(o);
                              break;
                            }
                        if (l[0] in i) s = l[0];
                        else {
                          for (o in i) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                              s = o;
                              break;
                            }
                            r || (r = o);
                          }
                          s = s || r;
                        }
                        if (s) return s !== l[0] && l.unshift(s), i[s];
                      })(h, S, r)),
                    !d &&
                      _.inArray("script", h.dataTypes) > -1 &&
                      _.inArray("json", h.dataTypes) < 0 &&
                      (h.converters["text script"] = function () {}),
                    (w = (function (e, t, i, n) {
                      var o,
                        s,
                        r,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (r in e.converters)
                          c[r.toLowerCase()] = e.converters[r];
                      for (s = u.shift(); s; )
                        if (
                          (e.responseFields[s] && (i[e.responseFields[s]] = t),
                          !l &&
                            n &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = s),
                          (s = u.shift()))
                        )
                          if ("*" === s) s = l;
                          else if ("*" !== l && l !== s) {
                            if (!(r = c[l + " " + s] || c["* " + s]))
                              for (o in c)
                                if (
                                  (a = o.split(" "))[1] === s &&
                                  (r = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === r
                                    ? (r = c[o])
                                    : !0 !== c[o] &&
                                      ((s = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== r)
                              if (r && e.throws) t = r(t);
                              else
                                try {
                                  t = r(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: r
                                      ? e
                                      : "No conversion from " + l + " to " + s,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(h, w, S, d)),
                    d
                      ? (h.ifModified &&
                          ((x = S.getResponseHeader("Last-Modified")) &&
                            (_.lastModified[o] = x),
                          (x = S.getResponseHeader("etag")) && (_.etag[o] = x)),
                        204 === e || "HEAD" === h.type
                          ? (k = "nocontent")
                          : 304 === e
                          ? (k = "notmodified")
                          : ((k = w.state), (p = w.data), (d = !(b = w.error))))
                      : ((b = k),
                        (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                    (S.status = e),
                    (S.statusText = (t || k) + ""),
                    d
                      ? m.resolveWith(f, [p, k, S])
                      : m.rejectWith(f, [S, k, b]),
                    S.statusCode(y),
                    (y = void 0),
                    u &&
                      g.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        S,
                        h,
                        d ? p : b,
                      ]),
                    v.fireWith(f, [S, k]),
                    u &&
                      (g.trigger("ajaxComplete", [S, h]),
                      --_.active || _.event.trigger("ajaxStop")));
                }
                return S;
              },
              getJSON: function (e, t, i) {
                return _.get(e, t, i, "json");
              },
              getScript: function (e, t) {
                return _.get(e, void 0, t, "script");
              },
            }),
            _.each(["get", "post"], function (e, t) {
              _[t] = function (e, i, n, o) {
                return (
                  v(i) && ((o = o || n), (n = i), (i = void 0)),
                  _.ajax(
                    _.extend(
                      { url: e, type: t, dataType: o, data: i, success: n },
                      _.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            _.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (_._evalUrl = function (e, t, i) {
              return _.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  _.globalEval(e, t, i);
                },
              });
            }),
            _.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = _(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      _(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = _(this),
                        i = t.contents();
                      i.length ? i.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (i) {
                  _(this).wrapAll(t ? e.call(this, i) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      _(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (_.expr.pseudos.hidden = function (e) {
              return !_.expr.pseudos.visible(e);
            }),
            (_.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (_.ajaxSettings.xhr = function () {
              try {
                return new n.XMLHttpRequest();
              } catch (e) {}
            });
          var Zt = { 0: 200, 1223: 204 },
            Jt = _.ajaxSettings.xhr();
          (m.cors = !!Jt && "withCredentials" in Jt),
            (m.ajax = Jt = !!Jt),
            _.ajaxTransport(function (e) {
              var t, i;
              if (m.cors || (Jt && !e.crossDomain))
                return {
                  send: function (o, s) {
                    var r,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (r in e.xhrFields) a[r] = e.xhrFields[r];
                    for (r in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      a.setRequestHeader(r, o[r]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            i =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? s(0, "error")
                              : s(a.status, a.statusText)
                            : s(
                                Zt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (i = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = i)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              n.setTimeout(function () {
                                t && i();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            _.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            _.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return _.globalEval(e), e;
                },
              },
            }),
            _.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            _.ajaxTransport("script", function (e) {
              var t, i;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (n, o) {
                    (t = _("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (i = function (e) {
                          t.remove(),
                            (i = null),
                            e && o("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    i && i();
                  },
                };
            });
          var ei,
            ti = [],
            ii = /(=)\?(?=&|$)|\?\?/;
          _.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = ti.pop() || _.expando + "_" + Ot.guid++;
              return (this[e] = !0), e;
            },
          }),
            _.ajaxPrefilter("json jsonp", function (e, t, i) {
              var o,
                s,
                r,
                a =
                  !1 !== e.jsonp &&
                  (ii.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      ii.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(ii, "$1" + o))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return r || _.error(o + " was not called"), r[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (s = n[o]),
                  (n[o] = function () {
                    r = arguments;
                  }),
                  i.always(function () {
                    void 0 === s ? _(n).removeProp(o) : (n[o] = s),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), ti.push(o)),
                      r && v(s) && s(r[0]),
                      (r = s = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((ei = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === ei.childNodes.length)),
            (_.parseHTML = function (e, t, i) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((i = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((n = (t =
                          b.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(n))
                      : (t = b)),
                  (s = !i && []),
                  (o = z.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = Le([e], t, s)),
                      s && s.length && _(s).remove(),
                      _.merge([], o.childNodes)));
              var n, o, s;
            }),
            (_.fn.load = function (e, t, i) {
              var n,
                o,
                s,
                r = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((n = _t(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((i = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                r.length > 0 &&
                  _.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (s = arguments),
                        r.html(
                          n ? _("<div>").append(_.parseHTML(e)).find(n) : e
                        );
                    })
                    .always(
                      i &&
                        function (e, t) {
                          r.each(function () {
                            i.apply(this, s || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (_.expr.pseudos.animated = function (e) {
              return _.grep(_.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (_.offset = {
              setOffset: function (e, t, i) {
                var n,
                  o,
                  s,
                  r,
                  a,
                  l,
                  c = _.css(e, "position"),
                  u = _(e),
                  d = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (s = _.css(e, "top")),
                  (l = _.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (s + l).indexOf("auto") > -1
                    ? ((r = (n = u.position()).top), (o = n.left))
                    : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, i, _.extend({}, a))),
                  null != t.top && (d.top = t.top - a.top + r),
                  null != t.left && (d.left = t.left - a.left + o),
                  "using" in t ? t.using.call(e, d) : u.css(d);
              },
            }),
            _.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        _.offset.setOffset(this, e, t);
                      });
                var t,
                  i,
                  n = this[0];
                return n
                  ? n.getClientRects().length
                    ? ((t = n.getBoundingClientRect()),
                      (i = n.ownerDocument.defaultView),
                      {
                        top: t.top + i.pageYOffset,
                        left: t.left + i.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    i,
                    n = this[0],
                    o = { top: 0, left: 0 };
                  if ("fixed" === _.css(n, "position"))
                    t = n.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        i = n.ownerDocument,
                        e = n.offsetParent || i.documentElement;
                      e &&
                      (e === i.body || e === i.documentElement) &&
                      "static" === _.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== n &&
                      1 === e.nodeType &&
                      (((o = _(e).offset()).top += _.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (o.left += _.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - _.css(n, "marginTop", !0),
                    left: t.left - o.left - _.css(n, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === _.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ge;
                });
              },
            }),
            _.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var i = "pageYOffset" === t;
                _.fn[e] = function (n) {
                  return ee(
                    this,
                    function (e, n, o) {
                      var s;
                      if (
                        (y(e)
                          ? (s = e)
                          : 9 === e.nodeType && (s = e.defaultView),
                        void 0 === o)
                      )
                        return s ? s[t] : e[n];
                      s
                        ? s.scrollTo(
                            i ? s.pageXOffset : o,
                            i ? o : s.pageYOffset
                          )
                        : (e[n] = o);
                    },
                    e,
                    n,
                    arguments.length
                  );
                };
              }
            ),
            _.each(["top", "left"], function (e, t) {
              _.cssHooks[t] = et(m.pixelPosition, function (e, i) {
                if (i)
                  return (
                    (i = Je(e, t)), Xe.test(i) ? _(e).position()[t] + "px" : i
                  );
              });
            }),
            _.each({ Height: "height", Width: "width" }, function (e, t) {
              _.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (i, n) {
                  _.fn[n] = function (o, s) {
                    var r = arguments.length && (i || "boolean" != typeof o),
                      a = i || (!0 === o || !0 === s ? "margin" : "border");
                    return ee(
                      this,
                      function (t, i, o) {
                        var s;
                        return y(t)
                          ? 0 === n.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((s = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              s["scroll" + e],
                              t.body["offset" + e],
                              s["offset" + e],
                              s["client" + e]
                            ))
                          : void 0 === o
                          ? _.css(t, i, a)
                          : _.style(t, i, o, a);
                      },
                      t,
                      r ? o : void 0,
                      r
                    );
                  };
                }
              );
            }),
            _.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                _.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            _.fn.extend({
              bind: function (e, t, i) {
                return this.on(e, null, t, i);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, i, n) {
                return this.on(t, e, i, n);
              },
              undelegate: function (e, t, i) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", i);
              },
              hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e);
              },
            }),
            _.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                _.fn[t] = function (e, i) {
                  return arguments.length > 0
                    ? this.on(t, null, e, i)
                    : this.trigger(t);
                };
              }
            );
          var ni = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (_.proxy = function (e, t) {
            var i, n, o;
            if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), v(e)))
              return (
                (n = a.call(arguments, 2)),
                (o = function () {
                  return e.apply(t || this, n.concat(a.call(arguments)));
                }),
                (o.guid = e.guid = e.guid || _.guid++),
                o
              );
          }),
            (_.holdReady = function (e) {
              e ? _.readyWait++ : _.ready(!0);
            }),
            (_.isArray = Array.isArray),
            (_.parseJSON = JSON.parse),
            (_.nodeName = $),
            (_.isFunction = v),
            (_.isWindow = y),
            (_.camelCase = oe),
            (_.type = k),
            (_.now = Date.now),
            (_.isNumeric = function (e) {
              var t = _.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (_.trim = function (e) {
              return null == e ? "" : (e + "").replace(ni, "$1");
            }),
            void 0 ===
              (i = function () {
                return _;
              }.apply(t, [])) || (e.exports = i);
          var oi = n.jQuery,
            si = n.$;
          return (
            (_.noConflict = function (e) {
              return (
                n.$ === _ && (n.$ = si),
                e && n.jQuery === _ && (n.jQuery = oi),
                _
              );
            }),
            void 0 === o && (n.jQuery = n.$ = _),
            _
          );
        });
      },
      458: function (e, t, i) {
        var n,
          o,
          s,
          r = i(692);
        (o = [i(692)]),
          (n = function (e) {
            var t = (function () {
                if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
                  var t = e.fn.select2.amd;
                var i, n, o;
                return (
                  (t && t.requirejs) ||
                    (t ? (n = t) : (t = {}),
                    (function (e) {
                      var t,
                        s,
                        r,
                        a,
                        l = {},
                        c = {},
                        u = {},
                        d = {},
                        p = Object.prototype.hasOwnProperty,
                        h = [].slice,
                        f = /\.js$/;
                      function g(e, t) {
                        return p.call(e, t);
                      }
                      function m(e, t) {
                        var i,
                          n,
                          o,
                          s,
                          r,
                          a,
                          l,
                          c,
                          d,
                          p,
                          h,
                          g = t && t.split("/"),
                          m = u.map,
                          v = (m && m["*"]) || {};
                        if (e) {
                          for (
                            r = (e = e.split("/")).length - 1,
                              u.nodeIdCompat &&
                                f.test(e[r]) &&
                                (e[r] = e[r].replace(f, "")),
                              "." === e[0].charAt(0) &&
                                g &&
                                (e = g.slice(0, g.length - 1).concat(e)),
                              d = 0;
                            d < e.length;
                            d++
                          )
                            if ("." === (h = e[d])) e.splice(d, 1), (d -= 1);
                            else if (".." === h) {
                              if (
                                0 === d ||
                                (1 === d && ".." === e[2]) ||
                                ".." === e[d - 1]
                              )
                                continue;
                              d > 0 && (e.splice(d - 1, 2), (d -= 2));
                            }
                          e = e.join("/");
                        }
                        if ((g || v) && m) {
                          for (d = (i = e.split("/")).length; d > 0; d -= 1) {
                            if (((n = i.slice(0, d).join("/")), g))
                              for (p = g.length; p > 0; p -= 1)
                                if (
                                  (o = m[g.slice(0, p).join("/")]) &&
                                  (o = o[n])
                                ) {
                                  (s = o), (a = d);
                                  break;
                                }
                            if (s) break;
                            !l && v && v[n] && ((l = v[n]), (c = d));
                          }
                          !s && l && ((s = l), (a = c)),
                            s && (i.splice(0, a, s), (e = i.join("/")));
                        }
                        return e;
                      }
                      function v(t, i) {
                        return function () {
                          var n = h.call(arguments, 0);
                          return (
                            "string" != typeof n[0] &&
                              1 === n.length &&
                              n.push(null),
                            s.apply(e, n.concat([t, i]))
                          );
                        };
                      }
                      function y(e) {
                        return function (t) {
                          l[e] = t;
                        };
                      }
                      function b(i) {
                        if (g(c, i)) {
                          var n = c[i];
                          delete c[i], (d[i] = !0), t.apply(e, n);
                        }
                        if (!g(l, i) && !g(d, i)) throw new Error("No " + i);
                        return l[i];
                      }
                      function w(e) {
                        var t,
                          i = e ? e.indexOf("!") : -1;
                        return (
                          i > -1 &&
                            ((t = e.substring(0, i)),
                            (e = e.substring(i + 1, e.length))),
                          [t, e]
                        );
                      }
                      function x(e) {
                        return e ? w(e) : [];
                      }
                      function k(e) {
                        return function () {
                          return (u && u.config && u.config[e]) || {};
                        };
                      }
                      (r = function (e, t) {
                        var i,
                          n,
                          o = w(e),
                          s = o[0],
                          r = t[1];
                        return (
                          (e = o[1]),
                          s && (i = b((s = m(s, r)))),
                          s
                            ? (e =
                                i && i.normalize
                                  ? i.normalize(
                                      e,
                                      ((n = r),
                                      function (e) {
                                        return m(e, n);
                                      })
                                    )
                                  : m(e, r))
                            : ((s = (o = w((e = m(e, r))))[0]),
                              (e = o[1]),
                              s && (i = b(s))),
                          { f: s ? s + "!" + e : e, n: e, pr: s, p: i }
                        );
                      }),
                        (a = {
                          require: function (e) {
                            return v(e);
                          },
                          exports: function (e) {
                            var t = l[e];
                            return void 0 !== t ? t : (l[e] = {});
                          },
                          module: function (e) {
                            return {
                              id: e,
                              uri: "",
                              exports: l[e],
                              config: k(e),
                            };
                          },
                        }),
                        (t = function (t, i, n, o) {
                          var s,
                            u,
                            p,
                            h,
                            f,
                            m,
                            w,
                            k = [],
                            S = typeof n;
                          if (
                            ((m = x((o = o || t))),
                            "undefined" === S || "function" === S)
                          ) {
                            for (
                              i =
                                !i.length && n.length
                                  ? ["require", "exports", "module"]
                                  : i,
                                f = 0;
                              f < i.length;
                              f += 1
                            )
                              if ("require" === (u = (h = r(i[f], m)).f))
                                k[f] = a.require(t);
                              else if ("exports" === u)
                                (k[f] = a.exports(t)), (w = !0);
                              else if ("module" === u) s = k[f] = a.module(t);
                              else if (g(l, u) || g(c, u) || g(d, u))
                                k[f] = b(u);
                              else {
                                if (!h.p) throw new Error(t + " missing " + u);
                                h.p.load(h.n, v(o, !0), y(u), {}),
                                  (k[f] = l[u]);
                              }
                            (p = n ? n.apply(l[t], k) : void 0),
                              t &&
                                (s && s.exports !== e && s.exports !== l[t]
                                  ? (l[t] = s.exports)
                                  : (p === e && w) || (l[t] = p));
                          } else t && (l[t] = n);
                        }),
                        (i =
                          n =
                          s =
                            function (i, n, o, l, c) {
                              if ("string" == typeof i)
                                return a[i] ? a[i](n) : b(r(i, x(n)).f);
                              if (!i.splice) {
                                if (((u = i).deps && s(u.deps, u.callback), !n))
                                  return;
                                n.splice
                                  ? ((i = n), (n = o), (o = null))
                                  : (i = e);
                              }
                              return (
                                (n = n || function () {}),
                                "function" == typeof o && ((o = l), (l = c)),
                                l
                                  ? t(e, i, n, o)
                                  : setTimeout(function () {
                                      t(e, i, n, o);
                                    }, 4),
                                s
                              );
                            }),
                        (s.config = function (e) {
                          return s(e);
                        }),
                        (i._defined = l),
                        ((o = function (e, t, i) {
                          if ("string" != typeof e)
                            throw new Error(
                              "See almond README: incorrect module build, no module name"
                            );
                          t.splice || ((i = t), (t = [])),
                            g(l, e) || g(c, e) || (c[e] = [e, t, i]);
                        }).amd = { jQuery: !0 });
                    })(),
                    (t.requirejs = i),
                    (t.require = n),
                    (t.define = o)),
                  t.define("almond", function () {}),
                  t.define("jquery", [], function () {
                    var t = e || r;
                    return (
                      null == t &&
                        console &&
                        console.error &&
                        console.error(
                          "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
                        ),
                      t
                    );
                  }),
                  t.define("select2/utils", ["jquery"], function (e) {
                    var t = {};
                    function i(e) {
                      var t = e.prototype,
                        i = [];
                      for (var n in t)
                        "function" == typeof t[n] &&
                          "constructor" !== n &&
                          i.push(n);
                      return i;
                    }
                    (t.Extend = function (e, t) {
                      var i = {}.hasOwnProperty;
                      function n() {
                        this.constructor = e;
                      }
                      for (var o in t) i.call(t, o) && (e[o] = t[o]);
                      return (
                        (n.prototype = t.prototype),
                        (e.prototype = new n()),
                        (e.__super__ = t.prototype),
                        e
                      );
                    }),
                      (t.Decorate = function (e, t) {
                        var n = i(t),
                          o = i(e);
                        function s() {
                          var i = Array.prototype.unshift,
                            n = t.prototype.constructor.length,
                            o = e.prototype.constructor;
                          n > 0 &&
                            (i.call(arguments, e.prototype.constructor),
                            (o = t.prototype.constructor)),
                            o.apply(this, arguments);
                        }
                        (t.displayName = e.displayName),
                          (s.prototype = new (function () {
                            this.constructor = s;
                          })());
                        for (var r = 0; r < o.length; r++) {
                          var a = o[r];
                          s.prototype[a] = e.prototype[a];
                        }
                        for (
                          var l = function (e) {
                              var i = function () {};
                              (e in s.prototype) && (i = s.prototype[e]);
                              var n = t.prototype[e];
                              return function () {
                                return (
                                  Array.prototype.unshift.call(arguments, i),
                                  n.apply(this, arguments)
                                );
                              };
                            },
                            c = 0;
                          c < n.length;
                          c++
                        ) {
                          var u = n[c];
                          s.prototype[u] = l(u);
                        }
                        return s;
                      });
                    var n = function () {
                      this.listeners = {};
                    };
                    (n.prototype.on = function (e, t) {
                      (this.listeners = this.listeners || {}),
                        e in this.listeners
                          ? this.listeners[e].push(t)
                          : (this.listeners[e] = [t]);
                    }),
                      (n.prototype.trigger = function (e) {
                        var t = Array.prototype.slice,
                          i = t.call(arguments, 1);
                        (this.listeners = this.listeners || {}),
                          null == i && (i = []),
                          0 === i.length && i.push({}),
                          (i[0]._type = e),
                          e in this.listeners &&
                            this.invoke(
                              this.listeners[e],
                              t.call(arguments, 1)
                            ),
                          "*" in this.listeners &&
                            this.invoke(this.listeners["*"], arguments);
                      }),
                      (n.prototype.invoke = function (e, t) {
                        for (var i = 0, n = e.length; i < n; i++)
                          e[i].apply(this, t);
                      }),
                      (t.Observable = n),
                      (t.generateChars = function (e) {
                        for (var t = "", i = 0; i < e; i++)
                          t += Math.floor(36 * Math.random()).toString(36);
                        return t;
                      }),
                      (t.bind = function (e, t) {
                        return function () {
                          e.apply(t, arguments);
                        };
                      }),
                      (t._convertData = function (e) {
                        for (var t in e) {
                          var i = t.split("-"),
                            n = e;
                          if (1 !== i.length) {
                            for (var o = 0; o < i.length; o++) {
                              var s = i[o];
                              (s =
                                s.substring(0, 1).toLowerCase() +
                                s.substring(1)) in n || (n[s] = {}),
                                o == i.length - 1 && (n[s] = e[t]),
                                (n = n[s]);
                            }
                            delete e[t];
                          }
                        }
                        return e;
                      }),
                      (t.hasScroll = function (t, i) {
                        var n = e(i),
                          o = i.style.overflowX,
                          s = i.style.overflowY;
                        return (
                          (o !== s || ("hidden" !== s && "visible" !== s)) &&
                          ("scroll" === o ||
                            "scroll" === s ||
                            n.innerHeight() < i.scrollHeight ||
                            n.innerWidth() < i.scrollWidth)
                        );
                      }),
                      (t.escapeMarkup = function (e) {
                        var t = {
                          "\\": "&#92;",
                          "&": "&amp;",
                          "<": "&lt;",
                          ">": "&gt;",
                          '"': "&quot;",
                          "'": "&#39;",
                          "/": "&#47;",
                        };
                        return "string" != typeof e
                          ? e
                          : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                              return t[e];
                            });
                      }),
                      (t.__cache = {});
                    var o = 0;
                    return (
                      (t.GetUniqueElementId = function (e) {
                        var i = e.getAttribute("data-select2-id");
                        return (
                          null != i ||
                            ((i = e.id
                              ? "select2-data-" + e.id
                              : "select2-data-" +
                                (++o).toString() +
                                "-" +
                                t.generateChars(4)),
                            e.setAttribute("data-select2-id", i)),
                          i
                        );
                      }),
                      (t.StoreData = function (e, i, n) {
                        var o = t.GetUniqueElementId(e);
                        t.__cache[o] || (t.__cache[o] = {}),
                          (t.__cache[o][i] = n);
                      }),
                      (t.GetData = function (i, n) {
                        var o = t.GetUniqueElementId(i);
                        return n
                          ? t.__cache[o] && null != t.__cache[o][n]
                            ? t.__cache[o][n]
                            : e(i).data(n)
                          : t.__cache[o];
                      }),
                      (t.RemoveData = function (e) {
                        var i = t.GetUniqueElementId(e);
                        null != t.__cache[i] && delete t.__cache[i],
                          e.removeAttribute("data-select2-id");
                      }),
                      (t.copyNonInternalCssClasses = function (e, t) {
                        var i = e.getAttribute("class").trim().split(/\s+/);
                        i = i.filter(function (e) {
                          return 0 === e.indexOf("select2-");
                        });
                        var n = t.getAttribute("class").trim().split(/\s+/);
                        n = n.filter(function (e) {
                          return 0 !== e.indexOf("select2-");
                        });
                        var o = i.concat(n);
                        e.setAttribute("class", o.join(" "));
                      }),
                      t
                    );
                  }),
                  t.define(
                    "select2/results",
                    ["jquery", "./utils"],
                    function (e, t) {
                      function i(e, t, n) {
                        (this.$element = e),
                          (this.data = n),
                          (this.options = t),
                          i.__super__.constructor.call(this);
                      }
                      return (
                        t.Extend(i, t.Observable),
                        (i.prototype.render = function () {
                          var t = e(
                            '<ul class="select2-results__options" role="listbox"></ul>'
                          );
                          return (
                            this.options.get("multiple") &&
                              t.attr("aria-multiselectable", "true"),
                            (this.$results = t),
                            t
                          );
                        }),
                        (i.prototype.clear = function () {
                          this.$results.empty();
                        }),
                        (i.prototype.displayMessage = function (t) {
                          var i = this.options.get("escapeMarkup");
                          this.clear(), this.hideLoading();
                          var n = e(
                              '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                            ),
                            o = this.options.get("translations").get(t.message);
                          n.append(i(o(t.args))),
                            (n[0].className += " select2-results__message"),
                            this.$results.append(n);
                        }),
                        (i.prototype.hideMessages = function () {
                          this.$results
                            .find(".select2-results__message")
                            .remove();
                        }),
                        (i.prototype.append = function (e) {
                          this.hideLoading();
                          var t = [];
                          if (null != e.results && 0 !== e.results.length) {
                            e.results = this.sort(e.results);
                            for (var i = 0; i < e.results.length; i++) {
                              var n = e.results[i],
                                o = this.option(n);
                              t.push(o);
                            }
                            this.$results.append(t);
                          } else
                            0 === this.$results.children().length &&
                              this.trigger("results:message", {
                                message: "noResults",
                              });
                        }),
                        (i.prototype.position = function (e, t) {
                          t.find(".select2-results").append(e);
                        }),
                        (i.prototype.sort = function (e) {
                          return this.options.get("sorter")(e);
                        }),
                        (i.prototype.highlightFirstItem = function () {
                          var e = this.$results.find(
                              ".select2-results__option--selectable"
                            ),
                            t = e.filter(".select2-results__option--selected");
                          t.length > 0
                            ? t.first().trigger("mouseenter")
                            : e.first().trigger("mouseenter"),
                            this.ensureHighlightVisible();
                        }),
                        (i.prototype.setClasses = function () {
                          var i = this;
                          this.data.current(function (n) {
                            var o = n.map(function (e) {
                              return e.id.toString();
                            });
                            i.$results
                              .find(".select2-results__option--selectable")
                              .each(function () {
                                var i = e(this),
                                  n = t.GetData(this, "data"),
                                  s = "" + n.id;
                                (null != n.element && n.element.selected) ||
                                (null == n.element && o.indexOf(s) > -1)
                                  ? (this.classList.add(
                                      "select2-results__option--selected"
                                    ),
                                    i.attr("aria-selected", "true"))
                                  : (this.classList.remove(
                                      "select2-results__option--selected"
                                    ),
                                    i.attr("aria-selected", "false"));
                              });
                          });
                        }),
                        (i.prototype.showLoading = function (e) {
                          this.hideLoading();
                          var t = {
                              disabled: !0,
                              loading: !0,
                              text: this.options
                                .get("translations")
                                .get("searching")(e),
                            },
                            i = this.option(t);
                          (i.className += " loading-results"),
                            this.$results.prepend(i);
                        }),
                        (i.prototype.hideLoading = function () {
                          this.$results.find(".loading-results").remove();
                        }),
                        (i.prototype.option = function (i) {
                          var n = document.createElement("li");
                          n.classList.add("select2-results__option"),
                            n.classList.add(
                              "select2-results__option--selectable"
                            );
                          var o = { role: "option" },
                            s =
                              window.Element.prototype.matches ||
                              window.Element.prototype.msMatchesSelector ||
                              window.Element.prototype.webkitMatchesSelector;
                          for (var r in (((null != i.element &&
                            s.call(i.element, ":disabled")) ||
                            (null == i.element && i.disabled)) &&
                            ((o["aria-disabled"] = "true"),
                            n.classList.remove(
                              "select2-results__option--selectable"
                            ),
                            n.classList.add(
                              "select2-results__option--disabled"
                            )),
                          null == i.id &&
                            n.classList.remove(
                              "select2-results__option--selectable"
                            ),
                          null != i._resultId && (n.id = i._resultId),
                          i.title && (n.title = i.title),
                          i.children &&
                            ((o.role = "group"),
                            (o["aria-label"] = i.text),
                            n.classList.remove(
                              "select2-results__option--selectable"
                            ),
                            n.classList.add("select2-results__option--group")),
                          o)) {
                            var a = o[r];
                            n.setAttribute(r, a);
                          }
                          if (i.children) {
                            var l = e(n),
                              c = document.createElement("strong");
                            (c.className = "select2-results__group"),
                              this.template(i, c);
                            for (
                              var u = [], d = 0;
                              d < i.children.length;
                              d++
                            ) {
                              var p = i.children[d],
                                h = this.option(p);
                              u.push(h);
                            }
                            var f = e("<ul></ul>", {
                              class:
                                "select2-results__options select2-results__options--nested",
                              role: "none",
                            });
                            f.append(u), l.append(c), l.append(f);
                          } else this.template(i, n);
                          return t.StoreData(n, "data", i), n;
                        }),
                        (i.prototype.bind = function (i, n) {
                          var o = this,
                            s = i.id + "-results";
                          this.$results.attr("id", s),
                            i.on("results:all", function (e) {
                              o.clear(),
                                o.append(e.data),
                                i.isOpen() &&
                                  (o.setClasses(), o.highlightFirstItem());
                            }),
                            i.on("results:append", function (e) {
                              o.append(e.data), i.isOpen() && o.setClasses();
                            }),
                            i.on("query", function (e) {
                              o.hideMessages(), o.showLoading(e);
                            }),
                            i.on("select", function () {
                              i.isOpen() &&
                                (o.setClasses(),
                                o.options.get("scrollAfterSelect") &&
                                  o.highlightFirstItem());
                            }),
                            i.on("unselect", function () {
                              i.isOpen() &&
                                (o.setClasses(),
                                o.options.get("scrollAfterSelect") &&
                                  o.highlightFirstItem());
                            }),
                            i.on("open", function () {
                              o.$results.attr("aria-expanded", "true"),
                                o.$results.attr("aria-hidden", "false"),
                                o.setClasses(),
                                o.ensureHighlightVisible();
                            }),
                            i.on("close", function () {
                              o.$results.attr("aria-expanded", "false"),
                                o.$results.attr("aria-hidden", "true"),
                                o.$results.removeAttr("aria-activedescendant");
                            }),
                            i.on("results:toggle", function () {
                              var e = o.getHighlightedResults();
                              0 !== e.length && e.trigger("mouseup");
                            }),
                            i.on("results:select", function () {
                              var e = o.getHighlightedResults();
                              if (0 !== e.length) {
                                var i = t.GetData(e[0], "data");
                                e.hasClass("select2-results__option--selected")
                                  ? o.trigger("close", {})
                                  : o.trigger("select", { data: i });
                              }
                            }),
                            i.on("results:previous", function () {
                              var e = o.getHighlightedResults(),
                                t = o.$results.find(
                                  ".select2-results__option--selectable"
                                ),
                                i = t.index(e);
                              if (!(i <= 0)) {
                                var n = i - 1;
                                0 === e.length && (n = 0);
                                var s = t.eq(n);
                                s.trigger("mouseenter");
                                var r = o.$results.offset().top,
                                  a = s.offset().top,
                                  l = o.$results.scrollTop() + (a - r);
                                0 === n
                                  ? o.$results.scrollTop(0)
                                  : a - r < 0 && o.$results.scrollTop(l);
                              }
                            }),
                            i.on("results:next", function () {
                              var e = o.getHighlightedResults(),
                                t = o.$results.find(
                                  ".select2-results__option--selectable"
                                ),
                                i = t.index(e) + 1;
                              if (!(i >= t.length)) {
                                var n = t.eq(i);
                                n.trigger("mouseenter");
                                var s =
                                    o.$results.offset().top +
                                    o.$results.outerHeight(!1),
                                  r = n.offset().top + n.outerHeight(!1),
                                  a = o.$results.scrollTop() + r - s;
                                0 === i
                                  ? o.$results.scrollTop(0)
                                  : r > s && o.$results.scrollTop(a);
                              }
                            }),
                            i.on("results:focus", function (e) {
                              e.element[0].classList.add(
                                "select2-results__option--highlighted"
                              ),
                                e.element[0].setAttribute(
                                  "aria-selected",
                                  "true"
                                );
                            }),
                            i.on("results:message", function (e) {
                              o.displayMessage(e);
                            }),
                            e.fn.mousewheel &&
                              this.$results.on("mousewheel", function (e) {
                                var t = o.$results.scrollTop(),
                                  i =
                                    o.$results.get(0).scrollHeight -
                                    t +
                                    e.deltaY,
                                  n = e.deltaY > 0 && t - e.deltaY <= 0,
                                  s = e.deltaY < 0 && i <= o.$results.height();
                                n
                                  ? (o.$results.scrollTop(0),
                                    e.preventDefault(),
                                    e.stopPropagation())
                                  : s &&
                                    (o.$results.scrollTop(
                                      o.$results.get(0).scrollHeight -
                                        o.$results.height()
                                    ),
                                    e.preventDefault(),
                                    e.stopPropagation());
                              }),
                            this.$results.on(
                              "mouseup",
                              ".select2-results__option--selectable",
                              function (i) {
                                var n = e(this),
                                  s = t.GetData(this, "data");
                                n.hasClass("select2-results__option--selected")
                                  ? o.options.get("multiple")
                                    ? o.trigger("unselect", {
                                        originalEvent: i,
                                        data: s,
                                      })
                                    : o.trigger("close", {})
                                  : o.trigger("select", {
                                      originalEvent: i,
                                      data: s,
                                    });
                              }
                            ),
                            this.$results.on(
                              "mouseenter",
                              ".select2-results__option--selectable",
                              function (i) {
                                var n = t.GetData(this, "data");
                                o
                                  .getHighlightedResults()
                                  .removeClass(
                                    "select2-results__option--highlighted"
                                  )
                                  .attr("aria-selected", "false"),
                                  o.trigger("results:focus", {
                                    data: n,
                                    element: e(this),
                                  });
                              }
                            );
                        }),
                        (i.prototype.getHighlightedResults = function () {
                          return this.$results.find(
                            ".select2-results__option--highlighted"
                          );
                        }),
                        (i.prototype.destroy = function () {
                          this.$results.remove();
                        }),
                        (i.prototype.ensureHighlightVisible = function () {
                          var e = this.getHighlightedResults();
                          if (0 !== e.length) {
                            var t = this.$results
                                .find(".select2-results__option--selectable")
                                .index(e),
                              i = this.$results.offset().top,
                              n = e.offset().top,
                              o = this.$results.scrollTop() + (n - i),
                              s = n - i;
                            (o -= 2 * e.outerHeight(!1)),
                              t <= 2
                                ? this.$results.scrollTop(0)
                                : (s > this.$results.outerHeight() || s < 0) &&
                                  this.$results.scrollTop(o);
                          }
                        }),
                        (i.prototype.template = function (t, i) {
                          var n = this.options.get("templateResult"),
                            o = this.options.get("escapeMarkup"),
                            s = n(t, i);
                          null == s
                            ? (i.style.display = "none")
                            : "string" == typeof s
                            ? (i.innerHTML = o(s))
                            : e(i).append(s);
                        }),
                        i
                      );
                    }
                  ),
                  t.define("select2/keys", [], function () {
                    return {
                      BACKSPACE: 8,
                      TAB: 9,
                      ENTER: 13,
                      SHIFT: 16,
                      CTRL: 17,
                      ALT: 18,
                      ESC: 27,
                      SPACE: 32,
                      PAGE_UP: 33,
                      PAGE_DOWN: 34,
                      END: 35,
                      HOME: 36,
                      LEFT: 37,
                      UP: 38,
                      RIGHT: 39,
                      DOWN: 40,
                      DELETE: 46,
                    };
                  }),
                  t.define(
                    "select2/selection/base",
                    ["jquery", "../utils", "../keys"],
                    function (e, t, i) {
                      function n(e, t) {
                        (this.$element = e),
                          (this.options = t),
                          n.__super__.constructor.call(this);
                      }
                      return (
                        t.Extend(n, t.Observable),
                        (n.prototype.render = function () {
                          var i = e(
                            '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                          );
                          return (
                            (this._tabindex = 0),
                            null != t.GetData(this.$element[0], "old-tabindex")
                              ? (this._tabindex = t.GetData(
                                  this.$element[0],
                                  "old-tabindex"
                                ))
                              : null != this.$element.attr("tabindex") &&
                                (this._tabindex =
                                  this.$element.attr("tabindex")),
                            i.attr("title", this.$element.attr("title")),
                            i.attr("tabindex", this._tabindex),
                            i.attr("aria-disabled", "false"),
                            (this.$selection = i),
                            i
                          );
                        }),
                        (n.prototype.bind = function (e, t) {
                          var n = this,
                            o = e.id + "-results";
                          (this.container = e),
                            this.$selection.on("focus", function (e) {
                              n.trigger("focus", e);
                            }),
                            this.$selection.on("blur", function (e) {
                              n._handleBlur(e);
                            }),
                            this.$selection.on("keydown", function (e) {
                              n.trigger("keypress", e),
                                e.which === i.SPACE && e.preventDefault();
                            }),
                            e.on("results:focus", function (e) {
                              n.$selection.attr(
                                "aria-activedescendant",
                                e.data._resultId
                              );
                            }),
                            e.on("selection:update", function (e) {
                              n.update(e.data);
                            }),
                            e.on("open", function () {
                              n.$selection.attr("aria-expanded", "true"),
                                n.$selection.attr("aria-owns", o),
                                n._attachCloseHandler(e);
                            }),
                            e.on("close", function () {
                              n.$selection.attr("aria-expanded", "false"),
                                n.$selection.removeAttr(
                                  "aria-activedescendant"
                                ),
                                n.$selection.removeAttr("aria-owns"),
                                n.$selection.trigger("focus"),
                                n._detachCloseHandler(e);
                            }),
                            e.on("enable", function () {
                              n.$selection.attr("tabindex", n._tabindex),
                                n.$selection.attr("aria-disabled", "false");
                            }),
                            e.on("disable", function () {
                              n.$selection.attr("tabindex", "-1"),
                                n.$selection.attr("aria-disabled", "true");
                            });
                        }),
                        (n.prototype._handleBlur = function (t) {
                          var i = this;
                          window.setTimeout(function () {
                            document.activeElement == i.$selection[0] ||
                              e.contains(
                                i.$selection[0],
                                document.activeElement
                              ) ||
                              i.trigger("blur", t);
                          }, 1);
                        }),
                        (n.prototype._attachCloseHandler = function (i) {
                          e(document.body).on(
                            "mousedown.select2." + i.id,
                            function (i) {
                              var n = e(i.target).closest(".select2");
                              e(".select2.select2-container--open").each(
                                function () {
                                  this != n[0] &&
                                    t.GetData(this, "element").select2("close");
                                }
                              );
                            }
                          );
                        }),
                        (n.prototype._detachCloseHandler = function (t) {
                          e(document.body).off("mousedown.select2." + t.id);
                        }),
                        (n.prototype.position = function (e, t) {
                          t.find(".selection").append(e);
                        }),
                        (n.prototype.destroy = function () {
                          this._detachCloseHandler(this.container);
                        }),
                        (n.prototype.update = function (e) {
                          throw new Error(
                            "The `update` method must be defined in child classes."
                          );
                        }),
                        (n.prototype.isEnabled = function () {
                          return !this.isDisabled();
                        }),
                        (n.prototype.isDisabled = function () {
                          return this.options.get("disabled");
                        }),
                        n
                      );
                    }
                  ),
                  t.define(
                    "select2/selection/single",
                    ["jquery", "./base", "../utils", "../keys"],
                    function (e, t, i, n) {
                      function o() {
                        o.__super__.constructor.apply(this, arguments);
                      }
                      return (
                        i.Extend(o, t),
                        (o.prototype.render = function () {
                          var e = o.__super__.render.call(this);
                          return (
                            e[0].classList.add("select2-selection--single"),
                            e.html(
                              '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                            ),
                            e
                          );
                        }),
                        (o.prototype.bind = function (e, t) {
                          var i = this;
                          o.__super__.bind.apply(this, arguments);
                          var n = e.id + "-container";
                          this.$selection
                            .find(".select2-selection__rendered")
                            .attr("id", n)
                            .attr("role", "textbox")
                            .attr("aria-readonly", "true"),
                            this.$selection.attr("aria-labelledby", n),
                            this.$selection.attr("aria-controls", n),
                            this.$selection.on("mousedown", function (e) {
                              1 === e.which &&
                                i.trigger("toggle", { originalEvent: e });
                            }),
                            this.$selection.on("focus", function (e) {}),
                            this.$selection.on("blur", function (e) {}),
                            e.on("focus", function (t) {
                              e.isOpen() || i.$selection.trigger("focus");
                            });
                        }),
                        (o.prototype.clear = function () {
                          var e = this.$selection.find(
                            ".select2-selection__rendered"
                          );
                          e.empty(), e.removeAttr("title");
                        }),
                        (o.prototype.display = function (e, t) {
                          var i = this.options.get("templateSelection");
                          return this.options.get("escapeMarkup")(i(e, t));
                        }),
                        (o.prototype.selectionContainer = function () {
                          return e("<span></span>");
                        }),
                        (o.prototype.update = function (e) {
                          if (0 !== e.length) {
                            var t = e[0],
                              i = this.$selection.find(
                                ".select2-selection__rendered"
                              ),
                              n = this.display(t, i);
                            i.empty().append(n);
                            var o = t.title || t.text;
                            o ? i.attr("title", o) : i.removeAttr("title");
                          } else this.clear();
                        }),
                        o
                      );
                    }
                  ),
                  t.define(
                    "select2/selection/multiple",
                    ["jquery", "./base", "../utils"],
                    function (e, t, i) {
                      function n(e, t) {
                        n.__super__.constructor.apply(this, arguments);
                      }
                      return (
                        i.Extend(n, t),
                        (n.prototype.render = function () {
                          var e = n.__super__.render.call(this);
                          return (
                            e[0].classList.add("select2-selection--multiple"),
                            e.html(
                              '<ul class="select2-selection__rendered"></ul>'
                            ),
                            e
                          );
                        }),
                        (n.prototype.bind = function (t, o) {
                          var s = this;
                          n.__super__.bind.apply(this, arguments);
                          var r = t.id + "-container";
                          this.$selection
                            .find(".select2-selection__rendered")
                            .attr("id", r),
                            this.$selection.on("click", function (e) {
                              s.trigger("toggle", { originalEvent: e });
                            }),
                            this.$selection.on(
                              "click",
                              ".select2-selection__choice__remove",
                              function (t) {
                                if (!s.isDisabled()) {
                                  var n = e(this).parent(),
                                    o = i.GetData(n[0], "data");
                                  s.trigger("unselect", {
                                    originalEvent: t,
                                    data: o,
                                  });
                                }
                              }
                            ),
                            this.$selection.on(
                              "keydown",
                              ".select2-selection__choice__remove",
                              function (e) {
                                s.isDisabled() || e.stopPropagation();
                              }
                            );
                        }),
                        (n.prototype.clear = function () {
                          var e = this.$selection.find(
                            ".select2-selection__rendered"
                          );
                          e.empty(), e.removeAttr("title");
                        }),
                        (n.prototype.display = function (e, t) {
                          var i = this.options.get("templateSelection");
                          return this.options.get("escapeMarkup")(i(e, t));
                        }),
                        (n.prototype.selectionContainer = function () {
                          return e(
                            '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
                          );
                        }),
                        (n.prototype.update = function (e) {
                          if ((this.clear(), 0 !== e.length)) {
                            for (
                              var t = [],
                                n =
                                  this.$selection
                                    .find(".select2-selection__rendered")
                                    .attr("id") + "-choice-",
                                o = 0;
                              o < e.length;
                              o++
                            ) {
                              var s = e[o],
                                r = this.selectionContainer(),
                                a = this.display(s, r),
                                l = n + i.generateChars(4) + "-";
                              s.id ? (l += s.id) : (l += i.generateChars(4)),
                                r
                                  .find(".select2-selection__choice__display")
                                  .append(a)
                                  .attr("id", l);
                              var c = s.title || s.text;
                              c && r.attr("title", c);
                              var u = this.options
                                  .get("translations")
                                  .get("removeItem"),
                                d = r.find(
                                  ".select2-selection__choice__remove"
                                );
                              d.attr("title", u()),
                                d.attr("aria-label", u()),
                                d.attr("aria-describedby", l),
                                i.StoreData(r[0], "data", s),
                                t.push(r);
                            }
                            this.$selection
                              .find(".select2-selection__rendered")
                              .append(t);
                          }
                        }),
                        n
                      );
                    }
                  ),
                  t.define("select2/selection/placeholder", [], function () {
                    function e(e, t, i) {
                      (this.placeholder = this.normalizePlaceholder(
                        i.get("placeholder")
                      )),
                        e.call(this, t, i);
                    }
                    return (
                      (e.prototype.normalizePlaceholder = function (e, t) {
                        return (
                          "string" == typeof t && (t = { id: "", text: t }), t
                        );
                      }),
                      (e.prototype.createPlaceholder = function (e, t) {
                        var i = this.selectionContainer();
                        i.html(this.display(t)),
                          i[0].classList.add("select2-selection__placeholder"),
                          i[0].classList.remove("select2-selection__choice");
                        var n = t.title || t.text || i.text();
                        return (
                          this.$selection
                            .find(".select2-selection__rendered")
                            .attr("title", n),
                          i
                        );
                      }),
                      (e.prototype.update = function (e, t) {
                        var i = 1 == t.length && t[0].id != this.placeholder.id;
                        if (t.length > 1 || i) return e.call(this, t);
                        this.clear();
                        var n = this.createPlaceholder(this.placeholder);
                        this.$selection
                          .find(".select2-selection__rendered")
                          .append(n);
                      }),
                      e
                    );
                  }),
                  t.define(
                    "select2/selection/allowClear",
                    ["jquery", "../keys", "../utils"],
                    function (e, t, i) {
                      function n() {}
                      return (
                        (n.prototype.bind = function (e, t, i) {
                          var n = this;
                          e.call(this, t, i),
                            null == this.placeholder &&
                              this.options.get("debug") &&
                              window.console &&
                              console.error &&
                              console.error(
                                "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                              ),
                            this.$selection.on(
                              "mousedown",
                              ".select2-selection__clear",
                              function (e) {
                                n._handleClear(e);
                              }
                            ),
                            t.on("keypress", function (e) {
                              n._handleKeyboardClear(e, t);
                            });
                        }),
                        (n.prototype._handleClear = function (e, t) {
                          if (!this.isDisabled()) {
                            var n = this.$selection.find(
                              ".select2-selection__clear"
                            );
                            if (0 !== n.length) {
                              t.stopPropagation();
                              var o = i.GetData(n[0], "data"),
                                s = this.$element.val();
                              this.$element.val(this.placeholder.id);
                              var r = { data: o };
                              if ((this.trigger("clear", r), r.prevented))
                                this.$element.val(s);
                              else {
                                for (var a = 0; a < o.length; a++)
                                  if (
                                    ((r = { data: o[a] }),
                                    this.trigger("unselect", r),
                                    r.prevented)
                                  )
                                    return void this.$element.val(s);
                                this.$element
                                  .trigger("input")
                                  .trigger("change"),
                                  this.trigger("toggle", {});
                              }
                            }
                          }
                        }),
                        (n.prototype._handleKeyboardClear = function (e, i, n) {
                          n.isOpen() ||
                            (i.which != t.DELETE && i.which != t.BACKSPACE) ||
                            this._handleClear(i);
                        }),
                        (n.prototype.update = function (t, n) {
                          if (
                            (t.call(this, n),
                            this.$selection
                              .find(".select2-selection__clear")
                              .remove(),
                            this.$selection[0].classList.remove(
                              "select2-selection--clearable"
                            ),
                            !(
                              this.$selection.find(
                                ".select2-selection__placeholder"
                              ).length > 0 || 0 === n.length
                            ))
                          ) {
                            var o = this.$selection
                                .find(".select2-selection__rendered")
                                .attr("id"),
                              s = this.options
                                .get("translations")
                                .get("removeAllItems"),
                              r = e(
                                '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                              );
                            r.attr("title", s()),
                              r.attr("aria-label", s()),
                              r.attr("aria-describedby", o),
                              i.StoreData(r[0], "data", n),
                              this.$selection.prepend(r),
                              this.$selection[0].classList.add(
                                "select2-selection--clearable"
                              );
                          }
                        }),
                        n
                      );
                    }
                  ),
                  t.define(
                    "select2/selection/search",
                    ["jquery", "../utils", "../keys"],
                    function (e, t, i) {
                      function n(e, t, i) {
                        e.call(this, t, i);
                      }
                      return (
                        (n.prototype.render = function (t) {
                          var i = this.options
                              .get("translations")
                              .get("search"),
                            n = e(
                              '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                            );
                          (this.$searchContainer = n),
                            (this.$search = n.find("textarea")),
                            this.$search.prop(
                              "autocomplete",
                              this.options.get("autocomplete")
                            ),
                            this.$search.attr("aria-label", i());
                          var o = t.call(this);
                          return (
                            this._transferTabIndex(),
                            o.append(this.$searchContainer),
                            o
                          );
                        }),
                        (n.prototype.bind = function (e, n, o) {
                          var s = this,
                            r = n.id + "-results",
                            a = n.id + "-container";
                          e.call(this, n, o),
                            s.$search.attr("aria-describedby", a),
                            n.on("open", function () {
                              s.$search.attr("aria-controls", r),
                                s.$search.trigger("focus");
                            }),
                            n.on("close", function () {
                              s.$search.val(""),
                                s.resizeSearch(),
                                s.$search.removeAttr("aria-controls"),
                                s.$search.removeAttr("aria-activedescendant"),
                                s.$search.trigger("focus");
                            }),
                            n.on("enable", function () {
                              s.$search.prop("disabled", !1),
                                s._transferTabIndex();
                            }),
                            n.on("disable", function () {
                              s.$search.prop("disabled", !0);
                            }),
                            n.on("focus", function (e) {
                              s.$search.trigger("focus");
                            }),
                            n.on("results:focus", function (e) {
                              e.data._resultId
                                ? s.$search.attr(
                                    "aria-activedescendant",
                                    e.data._resultId
                                  )
                                : s.$search.removeAttr("aria-activedescendant");
                            }),
                            this.$selection.on(
                              "focusin",
                              ".select2-search--inline",
                              function (e) {
                                s.trigger("focus", e);
                              }
                            ),
                            this.$selection.on(
                              "focusout",
                              ".select2-search--inline",
                              function (e) {
                                s._handleBlur(e);
                              }
                            ),
                            this.$selection.on(
                              "keydown",
                              ".select2-search--inline",
                              function (e) {
                                if (
                                  (e.stopPropagation(),
                                  s.trigger("keypress", e),
                                  (s._keyUpPrevented = e.isDefaultPrevented()),
                                  e.which === i.BACKSPACE &&
                                    "" === s.$search.val())
                                ) {
                                  var n = s.$selection
                                    .find(".select2-selection__choice")
                                    .last();
                                  if (n.length > 0) {
                                    var o = t.GetData(n[0], "data");
                                    s.searchRemoveChoice(o), e.preventDefault();
                                  }
                                }
                              }
                            ),
                            this.$selection.on(
                              "click",
                              ".select2-search--inline",
                              function (e) {
                                s.$search.val() && e.stopPropagation();
                              }
                            );
                          var l = document.documentMode,
                            c = l && l <= 11;
                          this.$selection.on(
                            "input.searchcheck",
                            ".select2-search--inline",
                            function (e) {
                              c
                                ? s.$selection.off(
                                    "input.search input.searchcheck"
                                  )
                                : s.$selection.off("keyup.search");
                            }
                          ),
                            this.$selection.on(
                              "keyup.search input.search",
                              ".select2-search--inline",
                              function (e) {
                                if (c && "input" === e.type)
                                  s.$selection.off(
                                    "input.search input.searchcheck"
                                  );
                                else {
                                  var t = e.which;
                                  t != i.SHIFT &&
                                    t != i.CTRL &&
                                    t != i.ALT &&
                                    t != i.TAB &&
                                    s.handleSearch(e);
                                }
                              }
                            );
                        }),
                        (n.prototype._transferTabIndex = function (e) {
                          this.$search.attr(
                            "tabindex",
                            this.$selection.attr("tabindex")
                          ),
                            this.$selection.attr("tabindex", "-1");
                        }),
                        (n.prototype.createPlaceholder = function (e, t) {
                          this.$search.attr("placeholder", t.text);
                        }),
                        (n.prototype.update = function (e, t) {
                          var i = this.$search[0] == document.activeElement;
                          this.$search.attr("placeholder", ""),
                            e.call(this, t),
                            this.resizeSearch(),
                            i && this.$search.trigger("focus");
                        }),
                        (n.prototype.handleSearch = function () {
                          if ((this.resizeSearch(), !this._keyUpPrevented)) {
                            var e = this.$search.val();
                            this.trigger("query", { term: e });
                          }
                          this._keyUpPrevented = !1;
                        }),
                        (n.prototype.searchRemoveChoice = function (e, t) {
                          this.trigger("unselect", { data: t }),
                            this.$search.val(t.text),
                            this.handleSearch();
                        }),
                        (n.prototype.resizeSearch = function () {
                          this.$search.css("width", "25px");
                          var e = "100%";
                          "" === this.$search.attr("placeholder") &&
                            (e = 0.75 * (this.$search.val().length + 1) + "em"),
                            this.$search.css("width", e);
                        }),
                        n
                      );
                    }
                  ),
                  t.define(
                    "select2/selection/selectionCss",
                    ["../utils"],
                    function (e) {
                      function t() {}
                      return (
                        (t.prototype.render = function (t) {
                          var i = t.call(this),
                            n = this.options.get("selectionCssClass") || "";
                          return (
                            -1 !== n.indexOf(":all:") &&
                              ((n = n.replace(":all:", "")),
                              e.copyNonInternalCssClasses(
                                i[0],
                                this.$element[0]
                              )),
                            i.addClass(n),
                            i
                          );
                        }),
                        t
                      );
                    }
                  ),
                  t.define(
                    "select2/selection/eventRelay",
                    ["jquery"],
                    function (e) {
                      function t() {}
                      return (
                        (t.prototype.bind = function (t, i, n) {
                          var o = this,
                            s = [
                              "open",
                              "opening",
                              "close",
                              "closing",
                              "select",
                              "selecting",
                              "unselect",
                              "unselecting",
                              "clear",
                              "clearing",
                            ],
                            r = [
                              "opening",
                              "closing",
                              "selecting",
                              "unselecting",
                              "clearing",
                            ];
                          t.call(this, i, n),
                            i.on("*", function (t, i) {
                              if (-1 !== s.indexOf(t)) {
                                i = i || {};
                                var n = e.Event("select2:" + t, { params: i });
                                o.$element.trigger(n),
                                  -1 !== r.indexOf(t) &&
                                    (i.prevented = n.isDefaultPrevented());
                              }
                            });
                        }),
                        t
                      );
                    }
                  ),
                  t.define(
                    "select2/translation",
                    ["jquery", "require"],
                    function (e, t) {
                      function i(e) {
                        this.dict = e || {};
                      }
                      return (
                        (i.prototype.all = function () {
                          return this.dict;
                        }),
                        (i.prototype.get = function (e) {
                          return this.dict[e];
                        }),
                        (i.prototype.extend = function (t) {
                          this.dict = e.extend({}, t.all(), this.dict);
                        }),
                        (i._cache = {}),
                        (i.loadPath = function (e) {
                          if (!(e in i._cache)) {
                            var n = t(e);
                            i._cache[e] = n;
                          }
                          return new i(i._cache[e]);
                        }),
                        i
                      );
                    }
                  ),
                  t.define("select2/diacritics", [], function () {
                    return {
                      "Ⓐ": "A",
                      Ａ: "A",
                      À: "A",
                      Á: "A",
                      Â: "A",
                      Ầ: "A",
                      Ấ: "A",
                      Ẫ: "A",
                      Ẩ: "A",
                      Ã: "A",
                      Ā: "A",
                      Ă: "A",
                      Ằ: "A",
                      Ắ: "A",
                      Ẵ: "A",
                      Ẳ: "A",
                      Ȧ: "A",
                      Ǡ: "A",
                      Ä: "A",
                      Ǟ: "A",
                      Ả: "A",
                      Å: "A",
                      Ǻ: "A",
                      Ǎ: "A",
                      Ȁ: "A",
                      Ȃ: "A",
                      Ạ: "A",
                      Ậ: "A",
                      Ặ: "A",
                      Ḁ: "A",
                      Ą: "A",
                      Ⱥ: "A",
                      Ɐ: "A",
                      Ꜳ: "AA",
                      Æ: "AE",
                      Ǽ: "AE",
                      Ǣ: "AE",
                      Ꜵ: "AO",
                      Ꜷ: "AU",
                      Ꜹ: "AV",
                      Ꜻ: "AV",
                      Ꜽ: "AY",
                      "Ⓑ": "B",
                      Ｂ: "B",
                      Ḃ: "B",
                      Ḅ: "B",
                      Ḇ: "B",
                      Ƀ: "B",
                      Ƃ: "B",
                      Ɓ: "B",
                      "Ⓒ": "C",
                      Ｃ: "C",
                      Ć: "C",
                      Ĉ: "C",
                      Ċ: "C",
                      Č: "C",
                      Ç: "C",
                      Ḉ: "C",
                      Ƈ: "C",
                      Ȼ: "C",
                      Ꜿ: "C",
                      "Ⓓ": "D",
                      Ｄ: "D",
                      Ḋ: "D",
                      Ď: "D",
                      Ḍ: "D",
                      Ḑ: "D",
                      Ḓ: "D",
                      Ḏ: "D",
                      Đ: "D",
                      Ƌ: "D",
                      Ɗ: "D",
                      Ɖ: "D",
                      Ꝺ: "D",
                      Ǳ: "DZ",
                      Ǆ: "DZ",
                      ǲ: "Dz",
                      ǅ: "Dz",
                      "Ⓔ": "E",
                      Ｅ: "E",
                      È: "E",
                      É: "E",
                      Ê: "E",
                      Ề: "E",
                      Ế: "E",
                      Ễ: "E",
                      Ể: "E",
                      Ẽ: "E",
                      Ē: "E",
                      Ḕ: "E",
                      Ḗ: "E",
                      Ĕ: "E",
                      Ė: "E",
                      Ë: "E",
                      Ẻ: "E",
                      Ě: "E",
                      Ȅ: "E",
                      Ȇ: "E",
                      Ẹ: "E",
                      Ệ: "E",
                      Ȩ: "E",
                      Ḝ: "E",
                      Ę: "E",
                      Ḙ: "E",
                      Ḛ: "E",
                      Ɛ: "E",
                      Ǝ: "E",
                      "Ⓕ": "F",
                      Ｆ: "F",
                      Ḟ: "F",
                      Ƒ: "F",
                      Ꝼ: "F",
                      "Ⓖ": "G",
                      Ｇ: "G",
                      Ǵ: "G",
                      Ĝ: "G",
                      Ḡ: "G",
                      Ğ: "G",
                      Ġ: "G",
                      Ǧ: "G",
                      Ģ: "G",
                      Ǥ: "G",
                      Ɠ: "G",
                      Ꞡ: "G",
                      Ᵹ: "G",
                      Ꝿ: "G",
                      "Ⓗ": "H",
                      Ｈ: "H",
                      Ĥ: "H",
                      Ḣ: "H",
                      Ḧ: "H",
                      Ȟ: "H",
                      Ḥ: "H",
                      Ḩ: "H",
                      Ḫ: "H",
                      Ħ: "H",
                      Ⱨ: "H",
                      Ⱶ: "H",
                      Ɥ: "H",
                      "Ⓘ": "I",
                      Ｉ: "I",
                      Ì: "I",
                      Í: "I",
                      Î: "I",
                      Ĩ: "I",
                      Ī: "I",
                      Ĭ: "I",
                      İ: "I",
                      Ï: "I",
                      Ḯ: "I",
                      Ỉ: "I",
                      Ǐ: "I",
                      Ȉ: "I",
                      Ȋ: "I",
                      Ị: "I",
                      Į: "I",
                      Ḭ: "I",
                      Ɨ: "I",
                      "Ⓙ": "J",
                      Ｊ: "J",
                      Ĵ: "J",
                      Ɉ: "J",
                      "Ⓚ": "K",
                      Ｋ: "K",
                      Ḱ: "K",
                      Ǩ: "K",
                      Ḳ: "K",
                      Ķ: "K",
                      Ḵ: "K",
                      Ƙ: "K",
                      Ⱪ: "K",
                      Ꝁ: "K",
                      Ꝃ: "K",
                      Ꝅ: "K",
                      Ꞣ: "K",
                      "Ⓛ": "L",
                      Ｌ: "L",
                      Ŀ: "L",
                      Ĺ: "L",
                      Ľ: "L",
                      Ḷ: "L",
                      Ḹ: "L",
                      Ļ: "L",
                      Ḽ: "L",
                      Ḻ: "L",
                      Ł: "L",
                      Ƚ: "L",
                      Ɫ: "L",
                      Ⱡ: "L",
                      Ꝉ: "L",
                      Ꝇ: "L",
                      Ꞁ: "L",
                      Ǉ: "LJ",
                      ǈ: "Lj",
                      "Ⓜ": "M",
                      Ｍ: "M",
                      Ḿ: "M",
                      Ṁ: "M",
                      Ṃ: "M",
                      Ɱ: "M",
                      Ɯ: "M",
                      "Ⓝ": "N",
                      Ｎ: "N",
                      Ǹ: "N",
                      Ń: "N",
                      Ñ: "N",
                      Ṅ: "N",
                      Ň: "N",
                      Ṇ: "N",
                      Ņ: "N",
                      Ṋ: "N",
                      Ṉ: "N",
                      Ƞ: "N",
                      Ɲ: "N",
                      Ꞑ: "N",
                      Ꞥ: "N",
                      Ǌ: "NJ",
                      ǋ: "Nj",
                      "Ⓞ": "O",
                      Ｏ: "O",
                      Ò: "O",
                      Ó: "O",
                      Ô: "O",
                      Ồ: "O",
                      Ố: "O",
                      Ỗ: "O",
                      Ổ: "O",
                      Õ: "O",
                      Ṍ: "O",
                      Ȭ: "O",
                      Ṏ: "O",
                      Ō: "O",
                      Ṑ: "O",
                      Ṓ: "O",
                      Ŏ: "O",
                      Ȯ: "O",
                      Ȱ: "O",
                      Ö: "O",
                      Ȫ: "O",
                      Ỏ: "O",
                      Ő: "O",
                      Ǒ: "O",
                      Ȍ: "O",
                      Ȏ: "O",
                      Ơ: "O",
                      Ờ: "O",
                      Ớ: "O",
                      Ỡ: "O",
                      Ở: "O",
                      Ợ: "O",
                      Ọ: "O",
                      Ộ: "O",
                      Ǫ: "O",
                      Ǭ: "O",
                      Ø: "O",
                      Ǿ: "O",
                      Ɔ: "O",
                      Ɵ: "O",
                      Ꝋ: "O",
                      Ꝍ: "O",
                      Œ: "OE",
                      Ƣ: "OI",
                      Ꝏ: "OO",
                      Ȣ: "OU",
                      "Ⓟ": "P",
                      Ｐ: "P",
                      Ṕ: "P",
                      Ṗ: "P",
                      Ƥ: "P",
                      Ᵽ: "P",
                      Ꝑ: "P",
                      Ꝓ: "P",
                      Ꝕ: "P",
                      "Ⓠ": "Q",
                      Ｑ: "Q",
                      Ꝗ: "Q",
                      Ꝙ: "Q",
                      Ɋ: "Q",
                      "Ⓡ": "R",
                      Ｒ: "R",
                      Ŕ: "R",
                      Ṙ: "R",
                      Ř: "R",
                      Ȑ: "R",
                      Ȓ: "R",
                      Ṛ: "R",
                      Ṝ: "R",
                      Ŗ: "R",
                      Ṟ: "R",
                      Ɍ: "R",
                      Ɽ: "R",
                      Ꝛ: "R",
                      Ꞧ: "R",
                      Ꞃ: "R",
                      "Ⓢ": "S",
                      Ｓ: "S",
                      ẞ: "S",
                      Ś: "S",
                      Ṥ: "S",
                      Ŝ: "S",
                      Ṡ: "S",
                      Š: "S",
                      Ṧ: "S",
                      Ṣ: "S",
                      Ṩ: "S",
                      Ș: "S",
                      Ş: "S",
                      Ȿ: "S",
                      Ꞩ: "S",
                      Ꞅ: "S",
                      "Ⓣ": "T",
                      Ｔ: "T",
                      Ṫ: "T",
                      Ť: "T",
                      Ṭ: "T",
                      Ț: "T",
                      Ţ: "T",
                      Ṱ: "T",
                      Ṯ: "T",
                      Ŧ: "T",
                      Ƭ: "T",
                      Ʈ: "T",
                      Ⱦ: "T",
                      Ꞇ: "T",
                      Ꜩ: "TZ",
                      "Ⓤ": "U",
                      Ｕ: "U",
                      Ù: "U",
                      Ú: "U",
                      Û: "U",
                      Ũ: "U",
                      Ṹ: "U",
                      Ū: "U",
                      Ṻ: "U",
                      Ŭ: "U",
                      Ü: "U",
                      Ǜ: "U",
                      Ǘ: "U",
                      Ǖ: "U",
                      Ǚ: "U",
                      Ủ: "U",
                      Ů: "U",
                      Ű: "U",
                      Ǔ: "U",
                      Ȕ: "U",
                      Ȗ: "U",
                      Ư: "U",
                      Ừ: "U",
                      Ứ: "U",
                      Ữ: "U",
                      Ử: "U",
                      Ự: "U",
                      Ụ: "U",
                      Ṳ: "U",
                      Ų: "U",
                      Ṷ: "U",
                      Ṵ: "U",
                      Ʉ: "U",
                      "Ⓥ": "V",
                      Ｖ: "V",
                      Ṽ: "V",
                      Ṿ: "V",
                      Ʋ: "V",
                      Ꝟ: "V",
                      Ʌ: "V",
                      Ꝡ: "VY",
                      "Ⓦ": "W",
                      Ｗ: "W",
                      Ẁ: "W",
                      Ẃ: "W",
                      Ŵ: "W",
                      Ẇ: "W",
                      Ẅ: "W",
                      Ẉ: "W",
                      Ⱳ: "W",
                      "Ⓧ": "X",
                      Ｘ: "X",
                      Ẋ: "X",
                      Ẍ: "X",
                      "Ⓨ": "Y",
                      Ｙ: "Y",
                      Ỳ: "Y",
                      Ý: "Y",
                      Ŷ: "Y",
                      Ỹ: "Y",
                      Ȳ: "Y",
                      Ẏ: "Y",
                      Ÿ: "Y",
                      Ỷ: "Y",
                      Ỵ: "Y",
                      Ƴ: "Y",
                      Ɏ: "Y",
                      Ỿ: "Y",
                      "Ⓩ": "Z",
                      Ｚ: "Z",
                      Ź: "Z",
                      Ẑ: "Z",
                      Ż: "Z",
                      Ž: "Z",
                      Ẓ: "Z",
                      Ẕ: "Z",
                      Ƶ: "Z",
                      Ȥ: "Z",
                      Ɀ: "Z",
                      Ⱬ: "Z",
                      Ꝣ: "Z",
                      "ⓐ": "a",
                      ａ: "a",
                      ẚ: "a",
                      à: "a",
                      á: "a",
                      â: "a",
                      ầ: "a",
                      ấ: "a",
                      ẫ: "a",
                      ẩ: "a",
                      ã: "a",
                      ā: "a",
                      ă: "a",
                      ằ: "a",
                      ắ: "a",
                      ẵ: "a",
                      ẳ: "a",
                      ȧ: "a",
                      ǡ: "a",
                      ä: "a",
                      ǟ: "a",
                      ả: "a",
                      å: "a",
                      ǻ: "a",
                      ǎ: "a",
                      ȁ: "a",
                      ȃ: "a",
                      ạ: "a",
                      ậ: "a",
                      ặ: "a",
                      ḁ: "a",
                      ą: "a",
                      ⱥ: "a",
                      ɐ: "a",
                      ꜳ: "aa",
                      æ: "ae",
                      ǽ: "ae",
                      ǣ: "ae",
                      ꜵ: "ao",
                      ꜷ: "au",
                      ꜹ: "av",
                      ꜻ: "av",
                      ꜽ: "ay",
                      "ⓑ": "b",
                      ｂ: "b",
                      ḃ: "b",
                      ḅ: "b",
                      ḇ: "b",
                      ƀ: "b",
                      ƃ: "b",
                      ɓ: "b",
                      "ⓒ": "c",
                      ｃ: "c",
                      ć: "c",
                      ĉ: "c",
                      ċ: "c",
                      č: "c",
                      ç: "c",
                      ḉ: "c",
                      ƈ: "c",
                      ȼ: "c",
                      ꜿ: "c",
                      ↄ: "c",
                      "ⓓ": "d",
                      ｄ: "d",
                      ḋ: "d",
                      ď: "d",
                      ḍ: "d",
                      ḑ: "d",
                      ḓ: "d",
                      ḏ: "d",
                      đ: "d",
                      ƌ: "d",
                      ɖ: "d",
                      ɗ: "d",
                      ꝺ: "d",
                      ǳ: "dz",
                      ǆ: "dz",
                      "ⓔ": "e",
                      ｅ: "e",
                      è: "e",
                      é: "e",
                      ê: "e",
                      ề: "e",
                      ế: "e",
                      ễ: "e",
                      ể: "e",
                      ẽ: "e",
                      ē: "e",
                      ḕ: "e",
                      ḗ: "e",
                      ĕ: "e",
                      ė: "e",
                      ë: "e",
                      ẻ: "e",
                      ě: "e",
                      ȅ: "e",
                      ȇ: "e",
                      ẹ: "e",
                      ệ: "e",
                      ȩ: "e",
                      ḝ: "e",
                      ę: "e",
                      ḙ: "e",
                      ḛ: "e",
                      ɇ: "e",
                      ɛ: "e",
                      ǝ: "e",
                      "ⓕ": "f",
                      ｆ: "f",
                      ḟ: "f",
                      ƒ: "f",
                      ꝼ: "f",
                      "ⓖ": "g",
                      ｇ: "g",
                      ǵ: "g",
                      ĝ: "g",
                      ḡ: "g",
                      ğ: "g",
                      ġ: "g",
                      ǧ: "g",
                      ģ: "g",
                      ǥ: "g",
                      ɠ: "g",
                      ꞡ: "g",
                      ᵹ: "g",
                      ꝿ: "g",
                      "ⓗ": "h",
                      ｈ: "h",
                      ĥ: "h",
                      ḣ: "h",
                      ḧ: "h",
                      ȟ: "h",
                      ḥ: "h",
                      ḩ: "h",
                      ḫ: "h",
                      ẖ: "h",
                      ħ: "h",
                      ⱨ: "h",
                      ⱶ: "h",
                      ɥ: "h",
                      ƕ: "hv",
                      "ⓘ": "i",
                      ｉ: "i",
                      ì: "i",
                      í: "i",
                      î: "i",
                      ĩ: "i",
                      ī: "i",
                      ĭ: "i",
                      ï: "i",
                      ḯ: "i",
                      ỉ: "i",
                      ǐ: "i",
                      ȉ: "i",
                      ȋ: "i",
                      ị: "i",
                      į: "i",
                      ḭ: "i",
                      ɨ: "i",
                      ı: "i",
                      "ⓙ": "j",
                      ｊ: "j",
                      ĵ: "j",
                      ǰ: "j",
                      ɉ: "j",
                      "ⓚ": "k",
                      ｋ: "k",
                      ḱ: "k",
                      ǩ: "k",
                      ḳ: "k",
                      ķ: "k",
                      ḵ: "k",
                      ƙ: "k",
                      ⱪ: "k",
                      ꝁ: "k",
                      ꝃ: "k",
                      ꝅ: "k",
                      ꞣ: "k",
                      "ⓛ": "l",
                      ｌ: "l",
                      ŀ: "l",
                      ĺ: "l",
                      ľ: "l",
                      ḷ: "l",
                      ḹ: "l",
                      ļ: "l",
                      ḽ: "l",
                      ḻ: "l",
                      ſ: "l",
                      ł: "l",
                      ƚ: "l",
                      ɫ: "l",
                      ⱡ: "l",
                      ꝉ: "l",
                      ꞁ: "l",
                      ꝇ: "l",
                      ǉ: "lj",
                      "ⓜ": "m",
                      ｍ: "m",
                      ḿ: "m",
                      ṁ: "m",
                      ṃ: "m",
                      ɱ: "m",
                      ɯ: "m",
                      "ⓝ": "n",
                      ｎ: "n",
                      ǹ: "n",
                      ń: "n",
                      ñ: "n",
                      ṅ: "n",
                      ň: "n",
                      ṇ: "n",
                      ņ: "n",
                      ṋ: "n",
                      ṉ: "n",
                      ƞ: "n",
                      ɲ: "n",
                      ŉ: "n",
                      ꞑ: "n",
                      ꞥ: "n",
                      ǌ: "nj",
                      "ⓞ": "o",
                      ｏ: "o",
                      ò: "o",
                      ó: "o",
                      ô: "o",
                      ồ: "o",
                      ố: "o",
                      ỗ: "o",
                      ổ: "o",
                      õ: "o",
                      ṍ: "o",
                      ȭ: "o",
                      ṏ: "o",
                      ō: "o",
                      ṑ: "o",
                      ṓ: "o",
                      ŏ: "o",
                      ȯ: "o",
                      ȱ: "o",
                      ö: "o",
                      ȫ: "o",
                      ỏ: "o",
                      ő: "o",
                      ǒ: "o",
                      ȍ: "o",
                      ȏ: "o",
                      ơ: "o",
                      ờ: "o",
                      ớ: "o",
                      ỡ: "o",
                      ở: "o",
                      ợ: "o",
                      ọ: "o",
                      ộ: "o",
                      ǫ: "o",
                      ǭ: "o",
                      ø: "o",
                      ǿ: "o",
                      ɔ: "o",
                      ꝋ: "o",
                      ꝍ: "o",
                      ɵ: "o",
                      œ: "oe",
                      ƣ: "oi",
                      ȣ: "ou",
                      ꝏ: "oo",
                      "ⓟ": "p",
                      ｐ: "p",
                      ṕ: "p",
                      ṗ: "p",
                      ƥ: "p",
                      ᵽ: "p",
                      ꝑ: "p",
                      ꝓ: "p",
                      ꝕ: "p",
                      "ⓠ": "q",
                      ｑ: "q",
                      ɋ: "q",
                      ꝗ: "q",
                      ꝙ: "q",
                      "ⓡ": "r",
                      ｒ: "r",
                      ŕ: "r",
                      ṙ: "r",
                      ř: "r",
                      ȑ: "r",
                      ȓ: "r",
                      ṛ: "r",
                      ṝ: "r",
                      ŗ: "r",
                      ṟ: "r",
                      ɍ: "r",
                      ɽ: "r",
                      ꝛ: "r",
                      ꞧ: "r",
                      ꞃ: "r",
                      "ⓢ": "s",
                      ｓ: "s",
                      ß: "s",
                      ś: "s",
                      ṥ: "s",
                      ŝ: "s",
                      ṡ: "s",
                      š: "s",
                      ṧ: "s",
                      ṣ: "s",
                      ṩ: "s",
                      ș: "s",
                      ş: "s",
                      ȿ: "s",
                      ꞩ: "s",
                      ꞅ: "s",
                      ẛ: "s",
                      "ⓣ": "t",
                      ｔ: "t",
                      ṫ: "t",
                      ẗ: "t",
                      ť: "t",
                      ṭ: "t",
                      ț: "t",
                      ţ: "t",
                      ṱ: "t",
                      ṯ: "t",
                      ŧ: "t",
                      ƭ: "t",
                      ʈ: "t",
                      ⱦ: "t",
                      ꞇ: "t",
                      ꜩ: "tz",
                      "ⓤ": "u",
                      ｕ: "u",
                      ù: "u",
                      ú: "u",
                      û: "u",
                      ũ: "u",
                      ṹ: "u",
                      ū: "u",
                      ṻ: "u",
                      ŭ: "u",
                      ü: "u",
                      ǜ: "u",
                      ǘ: "u",
                      ǖ: "u",
                      ǚ: "u",
                      ủ: "u",
                      ů: "u",
                      ű: "u",
                      ǔ: "u",
                      ȕ: "u",
                      ȗ: "u",
                      ư: "u",
                      ừ: "u",
                      ứ: "u",
                      ữ: "u",
                      ử: "u",
                      ự: "u",
                      ụ: "u",
                      ṳ: "u",
                      ų: "u",
                      ṷ: "u",
                      ṵ: "u",
                      ʉ: "u",
                      "ⓥ": "v",
                      ｖ: "v",
                      ṽ: "v",
                      ṿ: "v",
                      ʋ: "v",
                      ꝟ: "v",
                      ʌ: "v",
                      ꝡ: "vy",
                      "ⓦ": "w",
                      ｗ: "w",
                      ẁ: "w",
                      ẃ: "w",
                      ŵ: "w",
                      ẇ: "w",
                      ẅ: "w",
                      ẘ: "w",
                      ẉ: "w",
                      ⱳ: "w",
                      "ⓧ": "x",
                      ｘ: "x",
                      ẋ: "x",
                      ẍ: "x",
                      "ⓨ": "y",
                      ｙ: "y",
                      ỳ: "y",
                      ý: "y",
                      ŷ: "y",
                      ỹ: "y",
                      ȳ: "y",
                      ẏ: "y",
                      ÿ: "y",
                      ỷ: "y",
                      ẙ: "y",
                      ỵ: "y",
                      ƴ: "y",
                      ɏ: "y",
                      ỿ: "y",
                      "ⓩ": "z",
                      ｚ: "z",
                      ź: "z",
                      ẑ: "z",
                      ż: "z",
                      ž: "z",
                      ẓ: "z",
                      ẕ: "z",
                      ƶ: "z",
                      ȥ: "z",
                      ɀ: "z",
                      ⱬ: "z",
                      ꝣ: "z",
                      Ά: "Α",
                      Έ: "Ε",
                      Ή: "Η",
                      Ί: "Ι",
                      Ϊ: "Ι",
                      Ό: "Ο",
                      Ύ: "Υ",
                      Ϋ: "Υ",
                      Ώ: "Ω",
                      ά: "α",
                      έ: "ε",
                      ή: "η",
                      ί: "ι",
                      ϊ: "ι",
                      ΐ: "ι",
                      ό: "ο",
                      ύ: "υ",
                      ϋ: "υ",
                      ΰ: "υ",
                      ώ: "ω",
                      ς: "σ",
                      "’": "'",
                    };
                  }),
                  t.define("select2/data/base", ["../utils"], function (e) {
                    function t(e, i) {
                      t.__super__.constructor.call(this);
                    }
                    return (
                      e.Extend(t, e.Observable),
                      (t.prototype.current = function (e) {
                        throw new Error(
                          "The `current` method must be defined in child classes."
                        );
                      }),
                      (t.prototype.query = function (e, t) {
                        throw new Error(
                          "The `query` method must be defined in child classes."
                        );
                      }),
                      (t.prototype.bind = function (e, t) {}),
                      (t.prototype.destroy = function () {}),
                      (t.prototype.generateResultId = function (t, i) {
                        var n = t.id + "-result-";
                        return (
                          (n += e.generateChars(4)),
                          null != i.id
                            ? (n += "-" + i.id.toString())
                            : (n += "-" + e.generateChars(4)),
                          n
                        );
                      }),
                      t
                    );
                  }),
                  t.define(
                    "select2/data/select",
                    ["./base", "../utils", "jquery"],
                    function (e, t, i) {
                      function n(e, t) {
                        (this.$element = e),
                          (this.options = t),
                          n.__super__.constructor.call(this);
                      }
                      return (
                        t.Extend(n, e),
                        (n.prototype.current = function (e) {
                          var t = this;
                          e(
                            Array.prototype.map.call(
                              this.$element[0].querySelectorAll(":checked"),
                              function (e) {
                                return t.item(i(e));
                              }
                            )
                          );
                        }),
                        (n.prototype.select = function (e) {
                          var t = this;
                          if (
                            ((e.selected = !0),
                            null != e.element &&
                              "option" === e.element.tagName.toLowerCase())
                          )
                            return (
                              (e.element.selected = !0),
                              void this.$element
                                .trigger("input")
                                .trigger("change")
                            );
                          if (this.$element.prop("multiple"))
                            this.current(function (i) {
                              var n = [];
                              (e = [e]).push.apply(e, i);
                              for (var o = 0; o < e.length; o++) {
                                var s = e[o].id;
                                -1 === n.indexOf(s) && n.push(s);
                              }
                              t.$element.val(n),
                                t.$element.trigger("input").trigger("change");
                            });
                          else {
                            var i = e.id;
                            this.$element.val(i),
                              this.$element.trigger("input").trigger("change");
                          }
                        }),
                        (n.prototype.unselect = function (e) {
                          var t = this;
                          if (this.$element.prop("multiple")) {
                            if (
                              ((e.selected = !1),
                              null != e.element &&
                                "option" === e.element.tagName.toLowerCase())
                            )
                              return (
                                (e.element.selected = !1),
                                void this.$element
                                  .trigger("input")
                                  .trigger("change")
                              );
                            this.current(function (i) {
                              for (var n = [], o = 0; o < i.length; o++) {
                                var s = i[o].id;
                                s !== e.id && -1 === n.indexOf(s) && n.push(s);
                              }
                              t.$element.val(n),
                                t.$element.trigger("input").trigger("change");
                            });
                          }
                        }),
                        (n.prototype.bind = function (e, t) {
                          var i = this;
                          (this.container = e),
                            e.on("select", function (e) {
                              i.select(e.data);
                            }),
                            e.on("unselect", function (e) {
                              i.unselect(e.data);
                            });
                        }),
                        (n.prototype.destroy = function () {
                          this.$element.find("*").each(function () {
                            t.RemoveData(this);
                          });
                        }),
                        (n.prototype.query = function (e, t) {
                          var n = [],
                            o = this;
                          this.$element.children().each(function () {
                            if (
                              "option" === this.tagName.toLowerCase() ||
                              "optgroup" === this.tagName.toLowerCase()
                            ) {
                              var t = i(this),
                                s = o.item(t),
                                r = o.matches(e, s);
                              null !== r && n.push(r);
                            }
                          }),
                            t({ results: n });
                        }),
                        (n.prototype.addOptions = function (e) {
                          this.$element.append(e);
                        }),
                        (n.prototype.option = function (e) {
                          var n;
                          e.children
                            ? ((n = document.createElement("optgroup")).label =
                                e.text)
                            : void 0 !==
                              (n = document.createElement("option")).textContent
                            ? (n.textContent = e.text)
                            : (n.innerText = e.text),
                            void 0 !== e.id && (n.value = e.id),
                            e.disabled && (n.disabled = !0),
                            e.selected && (n.selected = !0),
                            e.title && (n.title = e.title);
                          var o = this._normalizeItem(e);
                          return (
                            (o.element = n), t.StoreData(n, "data", o), i(n)
                          );
                        }),
                        (n.prototype.item = function (e) {
                          var n = {};
                          if (null != (n = t.GetData(e[0], "data"))) return n;
                          var o = e[0];
                          if ("option" === o.tagName.toLowerCase())
                            n = {
                              id: e.val(),
                              text: e.text(),
                              disabled: e.prop("disabled"),
                              selected: e.prop("selected"),
                              title: e.prop("title"),
                            };
                          else if ("optgroup" === o.tagName.toLowerCase()) {
                            n = {
                              text: e.prop("label"),
                              children: [],
                              title: e.prop("title"),
                            };
                            for (
                              var s = e.children("option"), r = [], a = 0;
                              a < s.length;
                              a++
                            ) {
                              var l = i(s[a]),
                                c = this.item(l);
                              r.push(c);
                            }
                            n.children = r;
                          }
                          return (
                            ((n = this._normalizeItem(n)).element = e[0]),
                            t.StoreData(e[0], "data", n),
                            n
                          );
                        }),
                        (n.prototype._normalizeItem = function (e) {
                          e !== Object(e) && (e = { id: e, text: e });
                          return (
                            null != (e = i.extend({}, { text: "" }, e)).id &&
                              (e.id = e.id.toString()),
                            null != e.text && (e.text = e.text.toString()),
                            null == e._resultId &&
                              e.id &&
                              null != this.container &&
                              (e._resultId = this.generateResultId(
                                this.container,
                                e
                              )),
                            i.extend({}, { selected: !1, disabled: !1 }, e)
                          );
                        }),
                        (n.prototype.matches = function (e, t) {
                          return this.options.get("matcher")(e, t);
                        }),
                        n
                      );
                    }
                  ),
                  t.define(
                    "select2/data/array",
                    ["./select", "../utils", "jquery"],
                    function (e, t, i) {
                      function n(e, t) {
                        (this._dataToConvert = t.get("data") || []),
                          n.__super__.constructor.call(this, e, t);
                      }
                      return (
                        t.Extend(n, e),
                        (n.prototype.bind = function (e, t) {
                          n.__super__.bind.call(this, e, t),
                            this.addOptions(
                              this.convertToOptions(this._dataToConvert)
                            );
                        }),
                        (n.prototype.select = function (e) {
                          var t = this.$element
                            .find("option")
                            .filter(function (t, i) {
                              return i.value == e.id.toString();
                            });
                          0 === t.length &&
                            ((t = this.option(e)), this.addOptions(t)),
                            n.__super__.select.call(this, e);
                        }),
                        (n.prototype.convertToOptions = function (e) {
                          var t = this,
                            n = this.$element.find("option"),
                            o = n
                              .map(function () {
                                return t.item(i(this)).id;
                              })
                              .get(),
                            s = [];
                          function r(e) {
                            return function () {
                              return i(this).val() == e.id;
                            };
                          }
                          for (var a = 0; a < e.length; a++) {
                            var l = this._normalizeItem(e[a]);
                            if (o.indexOf(l.id) >= 0) {
                              var c = n.filter(r(l)),
                                u = this.item(c),
                                d = i.extend(!0, {}, l, u),
                                p = this.option(d);
                              c.replaceWith(p);
                            } else {
                              var h = this.option(l);
                              if (l.children) {
                                var f = this.convertToOptions(l.children);
                                h.append(f);
                              }
                              s.push(h);
                            }
                          }
                          return s;
                        }),
                        n
                      );
                    }
                  ),
                  t.define(
                    "select2/data/ajax",
                    ["./array", "../utils", "jquery"],
                    function (e, t, i) {
                      function n(e, t) {
                        (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                          null != this.ajaxOptions.processResults &&
                            (this.processResults =
                              this.ajaxOptions.processResults),
                          n.__super__.constructor.call(this, e, t);
                      }
                      return (
                        t.Extend(n, e),
                        (n.prototype._applyDefaults = function (e) {
                          var t = {
                            data: function (e) {
                              return i.extend({}, e, { q: e.term });
                            },
                            transport: function (e, t, n) {
                              var o = i.ajax(e);
                              return o.then(t), o.fail(n), o;
                            },
                          };
                          return i.extend({}, t, e, !0);
                        }),
                        (n.prototype.processResults = function (e) {
                          return e;
                        }),
                        (n.prototype.query = function (e, t) {
                          var n = this;
                          null != this._request &&
                            ("function" == typeof this._request.abort &&
                              this._request.abort(),
                            (this._request = null));
                          var o = i.extend({ type: "GET" }, this.ajaxOptions);
                          function s() {
                            var i = o.transport(
                              o,
                              function (i) {
                                var o = n.processResults(i, e);
                                n.options.get("debug") &&
                                  window.console &&
                                  console.error &&
                                  ((o &&
                                    o.results &&
                                    Array.isArray(o.results)) ||
                                    console.error(
                                      "Select2: The AJAX results did not return an array in the `results` key of the response."
                                    )),
                                  t(o);
                              },
                              function () {
                                (!("status" in i) ||
                                  (0 !== i.status && "0" !== i.status)) &&
                                  n.trigger("results:message", {
                                    message: "errorLoading",
                                  });
                              }
                            );
                            n._request = i;
                          }
                          "function" == typeof o.url &&
                            (o.url = o.url.call(this.$element, e)),
                            "function" == typeof o.data &&
                              (o.data = o.data.call(this.$element, e)),
                            this.ajaxOptions.delay && null != e.term
                              ? (this._queryTimeout &&
                                  window.clearTimeout(this._queryTimeout),
                                (this._queryTimeout = window.setTimeout(
                                  s,
                                  this.ajaxOptions.delay
                                )))
                              : s();
                        }),
                        n
                      );
                    }
                  ),
                  t.define("select2/data/tags", ["jquery"], function (e) {
                    function t(e, t, i) {
                      var n = i.get("tags"),
                        o = i.get("createTag");
                      void 0 !== o && (this.createTag = o);
                      var s = i.get("insertTag");
                      if (
                        (void 0 !== s && (this.insertTag = s),
                        e.call(this, t, i),
                        Array.isArray(n))
                      )
                        for (var r = 0; r < n.length; r++) {
                          var a = n[r],
                            l = this._normalizeItem(a),
                            c = this.option(l);
                          this.$element.append(c);
                        }
                    }
                    return (
                      (t.prototype.query = function (e, t, i) {
                        var n = this;
                        this._removeOldTags(),
                          null != t.term && null == t.page
                            ? e.call(this, t, function e(o, s) {
                                for (
                                  var r = o.results, a = 0;
                                  a < r.length;
                                  a++
                                ) {
                                  var l = r[a],
                                    c =
                                      null != l.children &&
                                      !e({ results: l.children }, !0);
                                  if (
                                    (l.text || "").toUpperCase() ===
                                      (t.term || "").toUpperCase() ||
                                    c
                                  )
                                    return !s && ((o.data = r), void i(o));
                                }
                                if (s) return !0;
                                var u = n.createTag(t);
                                if (null != u) {
                                  var d = n.option(u);
                                  d.attr("data-select2-tag", "true"),
                                    n.addOptions([d]),
                                    n.insertTag(r, u);
                                }
                                (o.results = r), i(o);
                              })
                            : e.call(this, t, i);
                      }),
                      (t.prototype.createTag = function (e, t) {
                        if (null == t.term) return null;
                        var i = t.term.trim();
                        return "" === i ? null : { id: i, text: i };
                      }),
                      (t.prototype.insertTag = function (e, t, i) {
                        t.unshift(i);
                      }),
                      (t.prototype._removeOldTags = function (t) {
                        this.$element
                          .find("option[data-select2-tag]")
                          .each(function () {
                            this.selected || e(this).remove();
                          });
                      }),
                      t
                    );
                  }),
                  t.define("select2/data/tokenizer", ["jquery"], function (e) {
                    function t(e, t, i) {
                      var n = i.get("tokenizer");
                      void 0 !== n && (this.tokenizer = n), e.call(this, t, i);
                    }
                    return (
                      (t.prototype.bind = function (e, t, i) {
                        e.call(this, t, i),
                          (this.$search =
                            t.dropdown.$search ||
                            t.selection.$search ||
                            i.find(".select2-search__field"));
                      }),
                      (t.prototype.query = function (t, i, n) {
                        var o = this;
                        i.term = i.term || "";
                        var s = this.tokenizer(i, this.options, function (t) {
                          var i = o._normalizeItem(t);
                          if (
                            !o.$element.find("option").filter(function () {
                              return e(this).val() === i.id;
                            }).length
                          ) {
                            var n = o.option(i);
                            n.attr("data-select2-tag", !0),
                              o._removeOldTags(),
                              o.addOptions([n]);
                          }
                          !(function (e) {
                            o.trigger("select", { data: e });
                          })(i);
                        });
                        s.term !== i.term &&
                          (this.$search.length &&
                            (this.$search.val(s.term),
                            this.$search.trigger("focus")),
                          (i.term = s.term)),
                          t.call(this, i, n);
                      }),
                      (t.prototype.tokenizer = function (t, i, n, o) {
                        for (
                          var s = n.get("tokenSeparators") || [],
                            r = i.term,
                            a = 0,
                            l =
                              this.createTag ||
                              function (e) {
                                return { id: e.term, text: e.term };
                              };
                          a < r.length;

                        ) {
                          var c = r[a];
                          if (-1 !== s.indexOf(c)) {
                            var u = r.substr(0, a),
                              d = l(e.extend({}, i, { term: u }));
                            null != d
                              ? (o(d), (r = r.substr(a + 1) || ""), (a = 0))
                              : a++;
                          } else a++;
                        }
                        return { term: r };
                      }),
                      t
                    );
                  }),
                  t.define("select2/data/minimumInputLength", [], function () {
                    function e(e, t, i) {
                      (this.minimumInputLength = i.get("minimumInputLength")),
                        e.call(this, t, i);
                    }
                    return (
                      (e.prototype.query = function (e, t, i) {
                        (t.term = t.term || ""),
                          t.term.length < this.minimumInputLength
                            ? this.trigger("results:message", {
                                message: "inputTooShort",
                                args: {
                                  minimum: this.minimumInputLength,
                                  input: t.term,
                                  params: t,
                                },
                              })
                            : e.call(this, t, i);
                      }),
                      e
                    );
                  }),
                  t.define("select2/data/maximumInputLength", [], function () {
                    function e(e, t, i) {
                      (this.maximumInputLength = i.get("maximumInputLength")),
                        e.call(this, t, i);
                    }
                    return (
                      (e.prototype.query = function (e, t, i) {
                        (t.term = t.term || ""),
                          this.maximumInputLength > 0 &&
                          t.term.length > this.maximumInputLength
                            ? this.trigger("results:message", {
                                message: "inputTooLong",
                                args: {
                                  maximum: this.maximumInputLength,
                                  input: t.term,
                                  params: t,
                                },
                              })
                            : e.call(this, t, i);
                      }),
                      e
                    );
                  }),
                  t.define(
                    "select2/data/maximumSelectionLength",
                    [],
                    function () {
                      function e(e, t, i) {
                        (this.maximumSelectionLength = i.get(
                          "maximumSelectionLength"
                        )),
                          e.call(this, t, i);
                      }
                      return (
                        (e.prototype.bind = function (e, t, i) {
                          var n = this;
                          e.call(this, t, i),
                            t.on("select", function () {
                              n._checkIfMaximumSelected();
                            });
                        }),
                        (e.prototype.query = function (e, t, i) {
                          var n = this;
                          this._checkIfMaximumSelected(function () {
                            e.call(n, t, i);
                          });
                        }),
                        (e.prototype._checkIfMaximumSelected = function (e, t) {
                          var i = this;
                          this.current(function (e) {
                            var n = null != e ? e.length : 0;
                            i.maximumSelectionLength > 0 &&
                            n >= i.maximumSelectionLength
                              ? i.trigger("results:message", {
                                  message: "maximumSelected",
                                  args: { maximum: i.maximumSelectionLength },
                                })
                              : t && t();
                          });
                        }),
                        e
                      );
                    }
                  ),
                  t.define(
                    "select2/dropdown",
                    ["jquery", "./utils"],
                    function (e, t) {
                      function i(e, t) {
                        (this.$element = e),
                          (this.options = t),
                          i.__super__.constructor.call(this);
                      }
                      return (
                        t.Extend(i, t.Observable),
                        (i.prototype.render = function () {
                          var t = e(
                            '<span class="select2-dropdown"><span class="select2-results"></span></span>'
                          );
                          return (
                            t.attr("dir", this.options.get("dir")),
                            (this.$dropdown = t),
                            t
                          );
                        }),
                        (i.prototype.bind = function () {}),
                        (i.prototype.position = function (e, t) {}),
                        (i.prototype.destroy = function () {
                          this.$dropdown.remove();
                        }),
                        i
                      );
                    }
                  ),
                  t.define("select2/dropdown/search", ["jquery"], function (e) {
                    function t() {}
                    return (
                      (t.prototype.render = function (t) {
                        var i = t.call(this),
                          n = this.options.get("translations").get("search"),
                          o = e(
                            '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                          );
                        return (
                          (this.$searchContainer = o),
                          (this.$search = o.find("input")),
                          this.$search.prop(
                            "autocomplete",
                            this.options.get("autocomplete")
                          ),
                          this.$search.attr("aria-label", n()),
                          i.prepend(o),
                          i
                        );
                      }),
                      (t.prototype.bind = function (t, i, n) {
                        var o = this,
                          s = i.id + "-results";
                        t.call(this, i, n),
                          this.$search.on("keydown", function (e) {
                            o.trigger("keypress", e),
                              (o._keyUpPrevented = e.isDefaultPrevented());
                          }),
                          this.$search.on("input", function (t) {
                            e(this).off("keyup");
                          }),
                          this.$search.on("keyup input", function (e) {
                            o.handleSearch(e);
                          }),
                          i.on("open", function () {
                            o.$search.attr("tabindex", 0),
                              o.$search.attr("aria-controls", s),
                              o.$search.trigger("focus"),
                              window.setTimeout(function () {
                                o.$search.trigger("focus");
                              }, 0);
                          }),
                          i.on("close", function () {
                            o.$search.attr("tabindex", -1),
                              o.$search.removeAttr("aria-controls"),
                              o.$search.removeAttr("aria-activedescendant"),
                              o.$search.val(""),
                              o.$search.trigger("blur");
                          }),
                          i.on("focus", function () {
                            i.isOpen() || o.$search.trigger("focus");
                          }),
                          i.on("results:all", function (e) {
                            (null != e.query.term && "" !== e.query.term) ||
                              (o.showSearch(e)
                                ? o.$searchContainer[0].classList.remove(
                                    "select2-search--hide"
                                  )
                                : o.$searchContainer[0].classList.add(
                                    "select2-search--hide"
                                  ));
                          }),
                          i.on("results:focus", function (e) {
                            e.data._resultId
                              ? o.$search.attr(
                                  "aria-activedescendant",
                                  e.data._resultId
                                )
                              : o.$search.removeAttr("aria-activedescendant");
                          });
                      }),
                      (t.prototype.handleSearch = function (e) {
                        if (!this._keyUpPrevented) {
                          var t = this.$search.val();
                          this.trigger("query", { term: t });
                        }
                        this._keyUpPrevented = !1;
                      }),
                      (t.prototype.showSearch = function (e, t) {
                        return !0;
                      }),
                      t
                    );
                  }),
                  t.define("select2/dropdown/hidePlaceholder", [], function () {
                    function e(e, t, i, n) {
                      (this.placeholder = this.normalizePlaceholder(
                        i.get("placeholder")
                      )),
                        e.call(this, t, i, n);
                    }
                    return (
                      (e.prototype.append = function (e, t) {
                        (t.results = this.removePlaceholder(t.results)),
                          e.call(this, t);
                      }),
                      (e.prototype.normalizePlaceholder = function (e, t) {
                        return (
                          "string" == typeof t && (t = { id: "", text: t }), t
                        );
                      }),
                      (e.prototype.removePlaceholder = function (e, t) {
                        for (
                          var i = t.slice(0), n = t.length - 1;
                          n >= 0;
                          n--
                        ) {
                          var o = t[n];
                          this.placeholder.id === o.id && i.splice(n, 1);
                        }
                        return i;
                      }),
                      e
                    );
                  }),
                  t.define(
                    "select2/dropdown/infiniteScroll",
                    ["jquery"],
                    function (e) {
                      function t(e, t, i, n) {
                        (this.lastParams = {}),
                          e.call(this, t, i, n),
                          (this.$loadingMore = this.createLoadingMore()),
                          (this.loading = !1);
                      }
                      return (
                        (t.prototype.append = function (e, t) {
                          this.$loadingMore.remove(),
                            (this.loading = !1),
                            e.call(this, t),
                            this.showLoadingMore(t) &&
                              (this.$results.append(this.$loadingMore),
                              this.loadMoreIfNeeded());
                        }),
                        (t.prototype.bind = function (e, t, i) {
                          var n = this;
                          e.call(this, t, i),
                            t.on("query", function (e) {
                              (n.lastParams = e), (n.loading = !0);
                            }),
                            t.on("query:append", function (e) {
                              (n.lastParams = e), (n.loading = !0);
                            }),
                            this.$results.on(
                              "scroll",
                              this.loadMoreIfNeeded.bind(this)
                            );
                        }),
                        (t.prototype.loadMoreIfNeeded = function () {
                          var t = e.contains(
                            document.documentElement,
                            this.$loadingMore[0]
                          );
                          !this.loading &&
                            t &&
                            this.$results.offset().top +
                              this.$results.outerHeight(!1) +
                              50 >=
                              this.$loadingMore.offset().top +
                                this.$loadingMore.outerHeight(!1) &&
                            this.loadMore();
                        }),
                        (t.prototype.loadMore = function () {
                          this.loading = !0;
                          var t = e.extend({}, { page: 1 }, this.lastParams);
                          t.page++, this.trigger("query:append", t);
                        }),
                        (t.prototype.showLoadingMore = function (e, t) {
                          return t.pagination && t.pagination.more;
                        }),
                        (t.prototype.createLoadingMore = function () {
                          var t = e(
                              '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                            ),
                            i = this.options
                              .get("translations")
                              .get("loadingMore");
                          return t.html(i(this.lastParams)), t;
                        }),
                        t
                      );
                    }
                  ),
                  t.define(
                    "select2/dropdown/attachBody",
                    ["jquery", "../utils"],
                    function (e, t) {
                      function i(t, i, n) {
                        (this.$dropdownParent = e(
                          n.get("dropdownParent") || document.body
                        )),
                          t.call(this, i, n);
                      }
                      return (
                        (i.prototype.bind = function (e, t, i) {
                          var n = this;
                          e.call(this, t, i),
                            t.on("open", function () {
                              n._showDropdown(),
                                n._attachPositioningHandler(t),
                                n._bindContainerResultHandlers(t);
                            }),
                            t.on("close", function () {
                              n._hideDropdown(), n._detachPositioningHandler(t);
                            }),
                            this.$dropdownContainer.on(
                              "mousedown",
                              function (e) {
                                e.stopPropagation();
                              }
                            );
                        }),
                        (i.prototype.destroy = function (e) {
                          e.call(this), this.$dropdownContainer.remove();
                        }),
                        (i.prototype.position = function (e, t, i) {
                          t.attr("class", i.attr("class")),
                            t[0].classList.remove("select2"),
                            t[0].classList.add("select2-container--open"),
                            t.css({ position: "absolute", top: -999999 }),
                            (this.$container = i);
                        }),
                        (i.prototype.render = function (t) {
                          var i = e("<span></span>"),
                            n = t.call(this);
                          return i.append(n), (this.$dropdownContainer = i), i;
                        }),
                        (i.prototype._hideDropdown = function (e) {
                          this.$dropdownContainer.detach();
                        }),
                        (i.prototype._bindContainerResultHandlers = function (
                          e,
                          t
                        ) {
                          if (!this._containerResultsHandlersBound) {
                            var i = this;
                            t.on("results:all", function () {
                              i._positionDropdown(), i._resizeDropdown();
                            }),
                              t.on("results:append", function () {
                                i._positionDropdown(), i._resizeDropdown();
                              }),
                              t.on("results:message", function () {
                                i._positionDropdown(), i._resizeDropdown();
                              }),
                              t.on("select", function () {
                                i._positionDropdown(), i._resizeDropdown();
                              }),
                              t.on("unselect", function () {
                                i._positionDropdown(), i._resizeDropdown();
                              }),
                              (this._containerResultsHandlersBound = !0);
                          }
                        }),
                        (i.prototype._attachPositioningHandler = function (
                          i,
                          n
                        ) {
                          var o = this,
                            s = "scroll.select2." + n.id,
                            r = "resize.select2." + n.id,
                            a = "orientationchange.select2." + n.id,
                            l = this.$container.parents().filter(t.hasScroll);
                          l.each(function () {
                            t.StoreData(this, "select2-scroll-position", {
                              x: e(this).scrollLeft(),
                              y: e(this).scrollTop(),
                            });
                          }),
                            l.on(s, function (i) {
                              var n = t.GetData(
                                this,
                                "select2-scroll-position"
                              );
                              e(this).scrollTop(n.y);
                            }),
                            e(window).on(s + " " + r + " " + a, function (e) {
                              o._positionDropdown(), o._resizeDropdown();
                            });
                        }),
                        (i.prototype._detachPositioningHandler = function (
                          i,
                          n
                        ) {
                          var o = "scroll.select2." + n.id,
                            s = "resize.select2." + n.id,
                            r = "orientationchange.select2." + n.id;
                          this.$container.parents().filter(t.hasScroll).off(o),
                            e(window).off(o + " " + s + " " + r);
                        }),
                        (i.prototype._positionDropdown = function () {
                          var t = e(window),
                            i = this.$dropdown[0].classList.contains(
                              "select2-dropdown--above"
                            ),
                            n = this.$dropdown[0].classList.contains(
                              "select2-dropdown--below"
                            ),
                            o = null,
                            s = this.$container.offset();
                          s.bottom = s.top + this.$container.outerHeight(!1);
                          var r = { height: this.$container.outerHeight(!1) };
                          (r.top = s.top), (r.bottom = s.top + r.height);
                          var a = this.$dropdown.outerHeight(!1),
                            l = t.scrollTop(),
                            c = t.scrollTop() + t.height(),
                            u = l < s.top - a,
                            d = c > s.bottom + a,
                            p = { left: s.left, top: r.bottom },
                            h = this.$dropdownParent;
                          "static" === h.css("position") &&
                            (h = h.offsetParent());
                          var f = { top: 0, left: 0 };
                          (e.contains(document.body, h[0]) ||
                            h[0].isConnected) &&
                            (f = h.offset()),
                            (p.top -= f.top),
                            (p.left -= f.left),
                            i || n || (o = "below"),
                            d || !u || i
                              ? !u && d && i && (o = "below")
                              : (o = "above"),
                            ("above" == o || (i && "below" !== o)) &&
                              (p.top = r.top - f.top - a),
                            null != o &&
                              (this.$dropdown[0].classList.remove(
                                "select2-dropdown--below"
                              ),
                              this.$dropdown[0].classList.remove(
                                "select2-dropdown--above"
                              ),
                              this.$dropdown[0].classList.add(
                                "select2-dropdown--" + o
                              ),
                              this.$container[0].classList.remove(
                                "select2-container--below"
                              ),
                              this.$container[0].classList.remove(
                                "select2-container--above"
                              ),
                              this.$container[0].classList.add(
                                "select2-container--" + o
                              )),
                            this.$dropdownContainer.css(p);
                        }),
                        (i.prototype._resizeDropdown = function () {
                          var e = {
                            width: this.$container.outerWidth(!1) + "px",
                          };
                          this.options.get("dropdownAutoWidth") &&
                            ((e.minWidth = e.width),
                            (e.position = "relative"),
                            (e.width = "auto")),
                            this.$dropdown.css(e);
                        }),
                        (i.prototype._showDropdown = function (e) {
                          this.$dropdownContainer.appendTo(
                            this.$dropdownParent
                          ),
                            this._positionDropdown(),
                            this._resizeDropdown();
                        }),
                        i
                      );
                    }
                  ),
                  t.define(
                    "select2/dropdown/minimumResultsForSearch",
                    [],
                    function () {
                      function e(t) {
                        for (var i = 0, n = 0; n < t.length; n++) {
                          var o = t[n];
                          o.children ? (i += e(o.children)) : i++;
                        }
                        return i;
                      }
                      function t(e, t, i, n) {
                        (this.minimumResultsForSearch = i.get(
                          "minimumResultsForSearch"
                        )),
                          this.minimumResultsForSearch < 0 &&
                            (this.minimumResultsForSearch = 1 / 0),
                          e.call(this, t, i, n);
                      }
                      return (
                        (t.prototype.showSearch = function (t, i) {
                          return (
                            !(
                              e(i.data.results) < this.minimumResultsForSearch
                            ) && t.call(this, i)
                          );
                        }),
                        t
                      );
                    }
                  ),
                  t.define(
                    "select2/dropdown/selectOnClose",
                    ["../utils"],
                    function (e) {
                      function t() {}
                      return (
                        (t.prototype.bind = function (e, t, i) {
                          var n = this;
                          e.call(this, t, i),
                            t.on("close", function (e) {
                              n._handleSelectOnClose(e);
                            });
                        }),
                        (t.prototype._handleSelectOnClose = function (t, i) {
                          if (i && null != i.originalSelect2Event) {
                            var n = i.originalSelect2Event;
                            if ("select" === n._type || "unselect" === n._type)
                              return;
                          }
                          var o = this.getHighlightedResults();
                          if (!(o.length < 1)) {
                            var s = e.GetData(o[0], "data");
                            (null != s.element && s.element.selected) ||
                              (null == s.element && s.selected) ||
                              this.trigger("select", { data: s });
                          }
                        }),
                        t
                      );
                    }
                  ),
                  t.define("select2/dropdown/closeOnSelect", [], function () {
                    function e() {}
                    return (
                      (e.prototype.bind = function (e, t, i) {
                        var n = this;
                        e.call(this, t, i),
                          t.on("select", function (e) {
                            n._selectTriggered(e);
                          }),
                          t.on("unselect", function (e) {
                            n._selectTriggered(e);
                          });
                      }),
                      (e.prototype._selectTriggered = function (e, t) {
                        var i = t.originalEvent;
                        (i && (i.ctrlKey || i.metaKey)) ||
                          this.trigger("close", {
                            originalEvent: i,
                            originalSelect2Event: t,
                          });
                      }),
                      e
                    );
                  }),
                  t.define(
                    "select2/dropdown/dropdownCss",
                    ["../utils"],
                    function (e) {
                      function t() {}
                      return (
                        (t.prototype.render = function (t) {
                          var i = t.call(this),
                            n = this.options.get("dropdownCssClass") || "";
                          return (
                            -1 !== n.indexOf(":all:") &&
                              ((n = n.replace(":all:", "")),
                              e.copyNonInternalCssClasses(
                                i[0],
                                this.$element[0]
                              )),
                            i.addClass(n),
                            i
                          );
                        }),
                        t
                      );
                    }
                  ),
                  t.define(
                    "select2/dropdown/tagsSearchHighlight",
                    ["../utils"],
                    function (e) {
                      function t() {}
                      return (
                        (t.prototype.highlightFirstItem = function (t) {
                          var i = this.$results.find(
                            ".select2-results__option--selectable:not(.select2-results__option--selected)"
                          );
                          if (i.length > 0) {
                            var n = i.first(),
                              o = e.GetData(n[0], "data").element;
                            if (
                              o &&
                              o.getAttribute &&
                              "true" === o.getAttribute("data-select2-tag")
                            )
                              return void n.trigger("mouseenter");
                          }
                          t.call(this);
                        }),
                        t
                      );
                    }
                  ),
                  t.define("select2/i18n/en", [], function () {
                    return {
                      errorLoading: function () {
                        return "The results could not be loaded.";
                      },
                      inputTooLong: function (e) {
                        var t = e.input.length - e.maximum,
                          i = "Please delete " + t + " character";
                        return 1 != t && (i += "s"), i;
                      },
                      inputTooShort: function (e) {
                        return (
                          "Please enter " +
                          (e.minimum - e.input.length) +
                          " or more characters"
                        );
                      },
                      loadingMore: function () {
                        return "Loading more results…";
                      },
                      maximumSelected: function (e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t;
                      },
                      noResults: function () {
                        return "No results found";
                      },
                      searching: function () {
                        return "Searching…";
                      },
                      removeAllItems: function () {
                        return "Remove all items";
                      },
                      removeItem: function () {
                        return "Remove item";
                      },
                      search: function () {
                        return "Search";
                      },
                    };
                  }),
                  t.define(
                    "select2/defaults",
                    [
                      "jquery",
                      "./results",
                      "./selection/single",
                      "./selection/multiple",
                      "./selection/placeholder",
                      "./selection/allowClear",
                      "./selection/search",
                      "./selection/selectionCss",
                      "./selection/eventRelay",
                      "./utils",
                      "./translation",
                      "./diacritics",
                      "./data/select",
                      "./data/array",
                      "./data/ajax",
                      "./data/tags",
                      "./data/tokenizer",
                      "./data/minimumInputLength",
                      "./data/maximumInputLength",
                      "./data/maximumSelectionLength",
                      "./dropdown",
                      "./dropdown/search",
                      "./dropdown/hidePlaceholder",
                      "./dropdown/infiniteScroll",
                      "./dropdown/attachBody",
                      "./dropdown/minimumResultsForSearch",
                      "./dropdown/selectOnClose",
                      "./dropdown/closeOnSelect",
                      "./dropdown/dropdownCss",
                      "./dropdown/tagsSearchHighlight",
                      "./i18n/en",
                    ],
                    function (
                      e,
                      t,
                      i,
                      n,
                      o,
                      s,
                      r,
                      a,
                      l,
                      c,
                      u,
                      d,
                      p,
                      h,
                      f,
                      g,
                      m,
                      v,
                      y,
                      b,
                      w,
                      x,
                      k,
                      S,
                      T,
                      _,
                      C,
                      $,
                      A,
                      E,
                      O
                    ) {
                      function D() {
                        this.reset();
                      }
                      return (
                        (D.prototype.apply = function (u) {
                          if (
                            (null ==
                              (u = e.extend(!0, {}, this.defaults, u))
                                .dataAdapter &&
                              (null != u.ajax
                                ? (u.dataAdapter = f)
                                : null != u.data
                                ? (u.dataAdapter = h)
                                : (u.dataAdapter = p),
                              u.minimumInputLength > 0 &&
                                (u.dataAdapter = c.Decorate(u.dataAdapter, v)),
                              u.maximumInputLength > 0 &&
                                (u.dataAdapter = c.Decorate(u.dataAdapter, y)),
                              u.maximumSelectionLength > 0 &&
                                (u.dataAdapter = c.Decorate(u.dataAdapter, b)),
                              u.tags &&
                                (u.dataAdapter = c.Decorate(u.dataAdapter, g)),
                              (null == u.tokenSeparators &&
                                null == u.tokenizer) ||
                                (u.dataAdapter = c.Decorate(u.dataAdapter, m))),
                            null == u.resultsAdapter &&
                              ((u.resultsAdapter = t),
                              null != u.ajax &&
                                (u.resultsAdapter = c.Decorate(
                                  u.resultsAdapter,
                                  S
                                )),
                              null != u.placeholder &&
                                (u.resultsAdapter = c.Decorate(
                                  u.resultsAdapter,
                                  k
                                )),
                              u.selectOnClose &&
                                (u.resultsAdapter = c.Decorate(
                                  u.resultsAdapter,
                                  C
                                )),
                              u.tags &&
                                (u.resultsAdapter = c.Decorate(
                                  u.resultsAdapter,
                                  E
                                ))),
                            null == u.dropdownAdapter)
                          ) {
                            if (u.multiple) u.dropdownAdapter = w;
                            else {
                              var d = c.Decorate(w, x);
                              u.dropdownAdapter = d;
                            }
                            0 !== u.minimumResultsForSearch &&
                              (u.dropdownAdapter = c.Decorate(
                                u.dropdownAdapter,
                                _
                              )),
                              u.closeOnSelect &&
                                (u.dropdownAdapter = c.Decorate(
                                  u.dropdownAdapter,
                                  $
                                )),
                              null != u.dropdownCssClass &&
                                (u.dropdownAdapter = c.Decorate(
                                  u.dropdownAdapter,
                                  A
                                )),
                              (u.dropdownAdapter = c.Decorate(
                                u.dropdownAdapter,
                                T
                              ));
                          }
                          null == u.selectionAdapter &&
                            (u.multiple
                              ? (u.selectionAdapter = n)
                              : (u.selectionAdapter = i),
                            null != u.placeholder &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                o
                              )),
                            u.allowClear &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                s
                              )),
                            u.multiple &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                r
                              )),
                            null != u.selectionCssClass &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                a
                              )),
                            (u.selectionAdapter = c.Decorate(
                              u.selectionAdapter,
                              l
                            ))),
                            (u.language = this._resolveLanguage(u.language)),
                            u.language.push("en");
                          for (var O = [], D = 0; D < u.language.length; D++) {
                            var L = u.language[D];
                            -1 === O.indexOf(L) && O.push(L);
                          }
                          return (
                            (u.language = O),
                            (u.translations = this._processTranslations(
                              u.language,
                              u.debug
                            )),
                            u
                          );
                        }),
                        (D.prototype.reset = function () {
                          function t(e) {
                            return e.replace(/[^\u0000-\u007E]/g, function (e) {
                              return d[e] || e;
                            });
                          }
                          this.defaults = {
                            amdLanguageBase: "./i18n/",
                            autocomplete: "off",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: c.escapeMarkup,
                            language: {},
                            matcher: function i(n, o) {
                              if (null == n.term || "" === n.term.trim())
                                return o;
                              if (o.children && o.children.length > 0) {
                                for (
                                  var s = e.extend(!0, {}, o),
                                    r = o.children.length - 1;
                                  r >= 0;
                                  r--
                                )
                                  null == i(n, o.children[r]) &&
                                    s.children.splice(r, 1);
                                return s.children.length > 0 ? s : i(n, s);
                              }
                              var a = t(o.text).toUpperCase(),
                                l = t(n.term).toUpperCase();
                              return a.indexOf(l) > -1 ? o : null;
                            },
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            scrollAfterSelect: !1,
                            sorter: function (e) {
                              return e;
                            },
                            templateResult: function (e) {
                              return e.text;
                            },
                            templateSelection: function (e) {
                              return e.text;
                            },
                            theme: "default",
                            width: "resolve",
                          };
                        }),
                        (D.prototype.applyFromElement = function (e, t) {
                          var i = e.language,
                            n = this.defaults.language,
                            o = t.prop("lang"),
                            s = t.closest("[lang]").prop("lang"),
                            r = Array.prototype.concat.call(
                              this._resolveLanguage(o),
                              this._resolveLanguage(i),
                              this._resolveLanguage(n),
                              this._resolveLanguage(s)
                            );
                          return (e.language = r), e;
                        }),
                        (D.prototype._resolveLanguage = function (t) {
                          if (!t) return [];
                          if (e.isEmptyObject(t)) return [];
                          if (e.isPlainObject(t)) return [t];
                          var i;
                          i = Array.isArray(t) ? t : [t];
                          for (var n = [], o = 0; o < i.length; o++)
                            if (
                              (n.push(i[o]),
                              "string" == typeof i[o] && i[o].indexOf("-") > 0)
                            ) {
                              var s = i[o].split("-")[0];
                              n.push(s);
                            }
                          return n;
                        }),
                        (D.prototype._processTranslations = function (t, i) {
                          for (var n = new u(), o = 0; o < t.length; o++) {
                            var s = new u(),
                              r = t[o];
                            if ("string" == typeof r)
                              try {
                                s = u.loadPath(r);
                              } catch (e) {
                                try {
                                  (r = this.defaults.amdLanguageBase + r),
                                    (s = u.loadPath(r));
                                } catch (e) {
                                  i &&
                                    window.console &&
                                    console.warn &&
                                    console.warn(
                                      'Select2: The language file for "' +
                                        r +
                                        '" could not be automatically loaded. A fallback will be used instead.'
                                    );
                                }
                              }
                            else s = e.isPlainObject(r) ? new u(r) : r;
                            n.extend(s);
                          }
                          return n;
                        }),
                        (D.prototype.set = function (t, i) {
                          var n = {};
                          n[e.camelCase(t)] = i;
                          var o = c._convertData(n);
                          e.extend(!0, this.defaults, o);
                        }),
                        new D()
                      );
                    }
                  ),
                  t.define(
                    "select2/options",
                    ["jquery", "./defaults", "./utils"],
                    function (e, t, i) {
                      function n(e, i) {
                        (this.options = e),
                          null != i && this.fromElement(i),
                          null != i &&
                            (this.options = t.applyFromElement(
                              this.options,
                              i
                            )),
                          (this.options = t.apply(this.options));
                      }
                      return (
                        (n.prototype.fromElement = function (t) {
                          var n = ["select2"];
                          null == this.options.multiple &&
                            (this.options.multiple = t.prop("multiple")),
                            null == this.options.disabled &&
                              (this.options.disabled = t.prop("disabled")),
                            null == this.options.autocomplete &&
                              t.prop("autocomplete") &&
                              (this.options.autocomplete =
                                t.prop("autocomplete")),
                            null == this.options.dir &&
                              (t.prop("dir")
                                ? (this.options.dir = t.prop("dir"))
                                : t.closest("[dir]").prop("dir")
                                ? (this.options.dir = t
                                    .closest("[dir]")
                                    .prop("dir"))
                                : (this.options.dir = "ltr")),
                            t.prop("disabled", this.options.disabled),
                            t.prop("multiple", this.options.multiple),
                            i.GetData(t[0], "select2Tags") &&
                              (this.options.debug &&
                                window.console &&
                                console.warn &&
                                console.warn(
                                  'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                                ),
                              i.StoreData(
                                t[0],
                                "data",
                                i.GetData(t[0], "select2Tags")
                              ),
                              i.StoreData(t[0], "tags", !0)),
                            i.GetData(t[0], "ajaxUrl") &&
                              (this.options.debug &&
                                window.console &&
                                console.warn &&
                                console.warn(
                                  "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                                ),
                              t.attr("ajax--url", i.GetData(t[0], "ajaxUrl")),
                              i.StoreData(
                                t[0],
                                "ajax-Url",
                                i.GetData(t[0], "ajaxUrl")
                              ));
                          var o = {};
                          function s(e, t) {
                            return t.toUpperCase();
                          }
                          for (var r = 0; r < t[0].attributes.length; r++) {
                            var a = t[0].attributes[r].name,
                              l = "data-";
                            if (a.substr(0, 5) == l) {
                              var c = a.substring(5),
                                u = i.GetData(t[0], c);
                              o[c.replace(/-([a-z])/g, s)] = u;
                            }
                          }
                          e.fn.jquery &&
                            "1." == e.fn.jquery.substr(0, 2) &&
                            t[0].dataset &&
                            (o = e.extend(!0, {}, t[0].dataset, o));
                          var d = e.extend(!0, {}, i.GetData(t[0]), o);
                          for (var p in (d = i._convertData(d)))
                            n.indexOf(p) > -1 ||
                              (e.isPlainObject(this.options[p])
                                ? e.extend(this.options[p], d[p])
                                : (this.options[p] = d[p]));
                          return this;
                        }),
                        (n.prototype.get = function (e) {
                          return this.options[e];
                        }),
                        (n.prototype.set = function (e, t) {
                          this.options[e] = t;
                        }),
                        n
                      );
                    }
                  ),
                  t.define(
                    "select2/core",
                    ["jquery", "./options", "./utils", "./keys"],
                    function (e, t, i, n) {
                      var o = function (e, n) {
                        null != i.GetData(e[0], "select2") &&
                          i.GetData(e[0], "select2").destroy(),
                          (this.$element = e),
                          (this.id = this._generateId(e)),
                          (n = n || {}),
                          (this.options = new t(n, e)),
                          o.__super__.constructor.call(this);
                        var s = e.attr("tabindex") || 0;
                        i.StoreData(e[0], "old-tabindex", s),
                          e.attr("tabindex", "-1");
                        var r = this.options.get("dataAdapter");
                        this.dataAdapter = new r(e, this.options);
                        var a = this.render();
                        this._placeContainer(a);
                        var l = this.options.get("selectionAdapter");
                        (this.selection = new l(e, this.options)),
                          (this.$selection = this.selection.render()),
                          this.selection.position(this.$selection, a);
                        var c = this.options.get("dropdownAdapter");
                        (this.dropdown = new c(e, this.options)),
                          (this.$dropdown = this.dropdown.render()),
                          this.dropdown.position(this.$dropdown, a);
                        var u = this.options.get("resultsAdapter");
                        (this.results = new u(
                          e,
                          this.options,
                          this.dataAdapter
                        )),
                          (this.$results = this.results.render()),
                          this.results.position(this.$results, this.$dropdown);
                        var d = this;
                        this._bindAdapters(),
                          this._registerDomEvents(),
                          this._registerDataEvents(),
                          this._registerSelectionEvents(),
                          this._registerDropdownEvents(),
                          this._registerResultsEvents(),
                          this._registerEvents(),
                          this.dataAdapter.current(function (e) {
                            d.trigger("selection:update", { data: e });
                          }),
                          e[0].classList.add("select2-hidden-accessible"),
                          e.attr("aria-hidden", "true"),
                          this._syncAttributes(),
                          i.StoreData(e[0], "select2", this),
                          e.data("select2", this);
                      };
                      return (
                        i.Extend(o, i.Observable),
                        (o.prototype._generateId = function (e) {
                          return (
                            "select2-" +
                            (null != e.attr("id")
                              ? e.attr("id")
                              : null != e.attr("name")
                              ? e.attr("name") + "-" + i.generateChars(2)
                              : i.generateChars(4)
                            ).replace(/(:|\.|\[|\]|,)/g, "")
                          );
                        }),
                        (o.prototype._placeContainer = function (e) {
                          e.insertAfter(this.$element);
                          var t = this._resolveWidth(
                            this.$element,
                            this.options.get("width")
                          );
                          null != t && e.css("width", t);
                        }),
                        (o.prototype._resolveWidth = function (e, t) {
                          var i =
                            /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                          if ("resolve" == t) {
                            var n = this._resolveWidth(e, "style");
                            return null != n
                              ? n
                              : this._resolveWidth(e, "element");
                          }
                          if ("element" == t) {
                            var o = e.outerWidth(!1);
                            return o <= 0 ? "auto" : o + "px";
                          }
                          if ("style" == t) {
                            var s = e.attr("style");
                            if ("string" != typeof s) return null;
                            for (
                              var r = s.split(";"), a = 0, l = r.length;
                              a < l;
                              a += 1
                            ) {
                              var c = r[a].replace(/\s/g, "").match(i);
                              if (null !== c && c.length >= 1) return c[1];
                            }
                            return null;
                          }
                          return "computedstyle" == t
                            ? window.getComputedStyle(e[0]).width
                            : t;
                        }),
                        (o.prototype._bindAdapters = function () {
                          this.dataAdapter.bind(this, this.$container),
                            this.selection.bind(this, this.$container),
                            this.dropdown.bind(this, this.$container),
                            this.results.bind(this, this.$container);
                        }),
                        (o.prototype._registerDomEvents = function () {
                          var e = this;
                          this.$element.on("change.select2", function () {
                            e.dataAdapter.current(function (t) {
                              e.trigger("selection:update", { data: t });
                            });
                          }),
                            this.$element.on("focus.select2", function (t) {
                              e.trigger("focus", t);
                            }),
                            (this._syncA = i.bind(this._syncAttributes, this)),
                            (this._syncS = i.bind(this._syncSubtree, this)),
                            (this._observer = new window.MutationObserver(
                              function (t) {
                                e._syncA(), e._syncS(t);
                              }
                            )),
                            this._observer.observe(this.$element[0], {
                              attributes: !0,
                              childList: !0,
                              subtree: !1,
                            });
                        }),
                        (o.prototype._registerDataEvents = function () {
                          var e = this;
                          this.dataAdapter.on("*", function (t, i) {
                            e.trigger(t, i);
                          });
                        }),
                        (o.prototype._registerSelectionEvents = function () {
                          var e = this,
                            t = ["toggle", "focus"];
                          this.selection.on("toggle", function () {
                            e.toggleDropdown();
                          }),
                            this.selection.on("focus", function (t) {
                              e.focus(t);
                            }),
                            this.selection.on("*", function (i, n) {
                              -1 === t.indexOf(i) && e.trigger(i, n);
                            });
                        }),
                        (o.prototype._registerDropdownEvents = function () {
                          var e = this;
                          this.dropdown.on("*", function (t, i) {
                            e.trigger(t, i);
                          });
                        }),
                        (o.prototype._registerResultsEvents = function () {
                          var e = this;
                          this.results.on("*", function (t, i) {
                            e.trigger(t, i);
                          });
                        }),
                        (o.prototype._registerEvents = function () {
                          var e = this;
                          this.on("open", function () {
                            e.$container[0].classList.add(
                              "select2-container--open"
                            );
                          }),
                            this.on("close", function () {
                              e.$container[0].classList.remove(
                                "select2-container--open"
                              );
                            }),
                            this.on("enable", function () {
                              e.$container[0].classList.remove(
                                "select2-container--disabled"
                              );
                            }),
                            this.on("disable", function () {
                              e.$container[0].classList.add(
                                "select2-container--disabled"
                              );
                            }),
                            this.on("blur", function () {
                              e.$container[0].classList.remove(
                                "select2-container--focus"
                              );
                            }),
                            this.on("query", function (t) {
                              e.isOpen() || e.trigger("open", {}),
                                this.dataAdapter.query(t, function (i) {
                                  e.trigger("results:all", {
                                    data: i,
                                    query: t,
                                  });
                                });
                            }),
                            this.on("query:append", function (t) {
                              this.dataAdapter.query(t, function (i) {
                                e.trigger("results:append", {
                                  data: i,
                                  query: t,
                                });
                              });
                            }),
                            this.on("keypress", function (t) {
                              var i = t.which;
                              e.isOpen()
                                ? i === n.ESC || (i === n.UP && t.altKey)
                                  ? (e.close(t), t.preventDefault())
                                  : i === n.ENTER || i === n.TAB
                                  ? (e.trigger("results:select", {}),
                                    t.preventDefault())
                                  : i === n.SPACE && t.ctrlKey
                                  ? (e.trigger("results:toggle", {}),
                                    t.preventDefault())
                                  : i === n.UP
                                  ? (e.trigger("results:previous", {}),
                                    t.preventDefault())
                                  : i === n.DOWN &&
                                    (e.trigger("results:next", {}),
                                    t.preventDefault())
                                : (i === n.ENTER ||
                                    i === n.SPACE ||
                                    (i === n.DOWN && t.altKey)) &&
                                  (e.open(), t.preventDefault());
                            });
                        }),
                        (o.prototype._syncAttributes = function () {
                          this.options.set(
                            "disabled",
                            this.$element.prop("disabled")
                          ),
                            this.isDisabled()
                              ? (this.isOpen() && this.close(),
                                this.trigger("disable", {}))
                              : this.trigger("enable", {});
                        }),
                        (o.prototype._isChangeMutation = function (e) {
                          var t = this;
                          if (e.addedNodes && e.addedNodes.length > 0) {
                            for (var i = 0; i < e.addedNodes.length; i++)
                              if (e.addedNodes[i].selected) return !0;
                          } else {
                            if (e.removedNodes && e.removedNodes.length > 0)
                              return !0;
                            if (Array.isArray(e))
                              return e.some(function (e) {
                                return t._isChangeMutation(e);
                              });
                          }
                          return !1;
                        }),
                        (o.prototype._syncSubtree = function (e) {
                          var t = this._isChangeMutation(e),
                            i = this;
                          t &&
                            this.dataAdapter.current(function (e) {
                              i.trigger("selection:update", { data: e });
                            });
                        }),
                        (o.prototype.trigger = function (e, t) {
                          var i = o.__super__.trigger,
                            n = {
                              open: "opening",
                              close: "closing",
                              select: "selecting",
                              unselect: "unselecting",
                              clear: "clearing",
                            };
                          if ((void 0 === t && (t = {}), e in n)) {
                            var s = n[e],
                              r = { prevented: !1, name: e, args: t };
                            if ((i.call(this, s, r), r.prevented))
                              return void (t.prevented = !0);
                          }
                          i.call(this, e, t);
                        }),
                        (o.prototype.toggleDropdown = function () {
                          this.isDisabled() ||
                            (this.isOpen() ? this.close() : this.open());
                        }),
                        (o.prototype.open = function () {
                          this.isOpen() ||
                            this.isDisabled() ||
                            this.trigger("query", {});
                        }),
                        (o.prototype.close = function (e) {
                          this.isOpen() &&
                            this.trigger("close", { originalEvent: e });
                        }),
                        (o.prototype.isEnabled = function () {
                          return !this.isDisabled();
                        }),
                        (o.prototype.isDisabled = function () {
                          return this.options.get("disabled");
                        }),
                        (o.prototype.isOpen = function () {
                          return this.$container[0].classList.contains(
                            "select2-container--open"
                          );
                        }),
                        (o.prototype.hasFocus = function () {
                          return this.$container[0].classList.contains(
                            "select2-container--focus"
                          );
                        }),
                        (o.prototype.focus = function (e) {
                          this.hasFocus() ||
                            (this.$container[0].classList.add(
                              "select2-container--focus"
                            ),
                            this.trigger("focus", {}));
                        }),
                        (o.prototype.enable = function (e) {
                          this.options.get("debug") &&
                            window.console &&
                            console.warn &&
                            console.warn(
                              'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                            ),
                            (null != e && 0 !== e.length) || (e = [!0]);
                          var t = !e[0];
                          this.$element.prop("disabled", t);
                        }),
                        (o.prototype.data = function () {
                          this.options.get("debug") &&
                            arguments.length > 0 &&
                            window.console &&
                            console.warn &&
                            console.warn(
                              'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                            );
                          var e = [];
                          return (
                            this.dataAdapter.current(function (t) {
                              e = t;
                            }),
                            e
                          );
                        }),
                        (o.prototype.val = function (e) {
                          if (
                            (this.options.get("debug") &&
                              window.console &&
                              console.warn &&
                              console.warn(
                                'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                              ),
                            null == e || 0 === e.length)
                          )
                            return this.$element.val();
                          var t = e[0];
                          Array.isArray(t) &&
                            (t = t.map(function (e) {
                              return e.toString();
                            })),
                            this.$element
                              .val(t)
                              .trigger("input")
                              .trigger("change");
                        }),
                        (o.prototype.destroy = function () {
                          i.RemoveData(this.$container[0]),
                            this.$container.remove(),
                            this._observer.disconnect(),
                            (this._observer = null),
                            (this._syncA = null),
                            (this._syncS = null),
                            this.$element.off(".select2"),
                            this.$element.attr(
                              "tabindex",
                              i.GetData(this.$element[0], "old-tabindex")
                            ),
                            this.$element[0].classList.remove(
                              "select2-hidden-accessible"
                            ),
                            this.$element.attr("aria-hidden", "false"),
                            i.RemoveData(this.$element[0]),
                            this.$element.removeData("select2"),
                            this.dataAdapter.destroy(),
                            this.selection.destroy(),
                            this.dropdown.destroy(),
                            this.results.destroy(),
                            (this.dataAdapter = null),
                            (this.selection = null),
                            (this.dropdown = null),
                            (this.results = null);
                        }),
                        (o.prototype.render = function () {
                          var t = e(
                            '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                          );
                          return (
                            t.attr("dir", this.options.get("dir")),
                            (this.$container = t),
                            this.$container[0].classList.add(
                              "select2-container--" + this.options.get("theme")
                            ),
                            i.StoreData(t[0], "element", this.$element),
                            t
                          );
                        }),
                        o
                      );
                    }
                  ),
                  t.define("jquery-mousewheel", ["jquery"], function (e) {
                    return e;
                  }),
                  t.define(
                    "jquery.select2",
                    [
                      "jquery",
                      "jquery-mousewheel",
                      "./select2/core",
                      "./select2/defaults",
                      "./select2/utils",
                    ],
                    function (e, t, i, n, o) {
                      if (null == e.fn.select2) {
                        var s = ["open", "close", "destroy"];
                        e.fn.select2 = function (t) {
                          if ("object" == typeof (t = t || {}))
                            return (
                              this.each(function () {
                                var n = e.extend(!0, {}, t);
                                new i(e(this), n);
                              }),
                              this
                            );
                          if ("string" == typeof t) {
                            var n,
                              r = Array.prototype.slice.call(arguments, 1);
                            return (
                              this.each(function () {
                                var e = o.GetData(this, "select2");
                                null == e &&
                                  window.console &&
                                  console.error &&
                                  console.error(
                                    "The select2('" +
                                      t +
                                      "') method was called on an element that is not using Select2."
                                  ),
                                  (n = e[t].apply(e, r));
                              }),
                              s.indexOf(t) > -1 ? this : n
                            );
                          }
                          throw new Error(
                            "Invalid arguments for Select2: " + t
                          );
                        };
                      }
                      return (
                        null == e.fn.select2.defaults &&
                          (e.fn.select2.defaults = n),
                        i
                      );
                    }
                  ),
                  { define: t.define, require: t.require }
                );
              })(),
              i = t.require("jquery.select2");
            return (e.fn.select2.amd = t), i;
          }),
          void 0 === (s = n.apply(t, o)) || (e.exports = s);
      },
      969: function (e, t, i) {
        var n, o, s;
        !(function () {
          "use strict";
          (o = [i(692)]),
            (n = function (e) {
              var t = window.Slick || {};
              ((t = (function () {
                var t = 0;
                return function (i, n) {
                  var o,
                    s = this;
                  (s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(i),
                    appendDots: e(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow:
                      '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow:
                      '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, i) {
                      return e('<button type="button" />').text(i + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                  }),
                    (s.initials = {
                      animating: !1,
                      dragging: !1,
                      autoPlayTimer: null,
                      currentDirection: 0,
                      currentLeft: null,
                      currentSlide: 0,
                      direction: 1,
                      $dots: null,
                      listWidth: null,
                      listHeight: null,
                      loadIndex: 0,
                      $nextArrow: null,
                      $prevArrow: null,
                      scrolling: !1,
                      slideCount: null,
                      slideWidth: null,
                      $slideTrack: null,
                      $slides: null,
                      sliding: !1,
                      slideOffset: 0,
                      swipeLeft: null,
                      swiping: !1,
                      $list: null,
                      touchObject: {},
                      transformsEnabled: !1,
                      unslicked: !1,
                    }),
                    e.extend(s, s.initials),
                    (s.activeBreakpoint = null),
                    (s.animType = null),
                    (s.animProp = null),
                    (s.breakpoints = []),
                    (s.breakpointSettings = []),
                    (s.cssTransitions = !1),
                    (s.focussed = !1),
                    (s.interrupted = !1),
                    (s.hidden = "hidden"),
                    (s.paused = !0),
                    (s.positionProp = null),
                    (s.respondTo = null),
                    (s.rowCount = 1),
                    (s.shouldClick = !0),
                    (s.$slider = e(i)),
                    (s.$slidesCache = null),
                    (s.transformType = null),
                    (s.transitionType = null),
                    (s.visibilityChange = "visibilitychange"),
                    (s.windowWidth = 0),
                    (s.windowTimer = null),
                    (o = e(i).data("slick") || {}),
                    (s.options = e.extend({}, s.defaults, n, o)),
                    (s.currentSlide = s.options.initialSlide),
                    (s.originalSettings = s.options),
                    void 0 !== document.mozHidden
                      ? ((s.hidden = "mozHidden"),
                        (s.visibilityChange = "mozvisibilitychange"))
                      : void 0 !== document.webkitHidden &&
                        ((s.hidden = "webkitHidden"),
                        (s.visibilityChange = "webkitvisibilitychange")),
                    (s.autoPlay = e.proxy(s.autoPlay, s)),
                    (s.autoPlayClear = e.proxy(s.autoPlayClear, s)),
                    (s.autoPlayIterator = e.proxy(s.autoPlayIterator, s)),
                    (s.changeSlide = e.proxy(s.changeSlide, s)),
                    (s.clickHandler = e.proxy(s.clickHandler, s)),
                    (s.selectHandler = e.proxy(s.selectHandler, s)),
                    (s.setPosition = e.proxy(s.setPosition, s)),
                    (s.swipeHandler = e.proxy(s.swipeHandler, s)),
                    (s.dragHandler = e.proxy(s.dragHandler, s)),
                    (s.keyHandler = e.proxy(s.keyHandler, s)),
                    (s.instanceUid = t++),
                    (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    s.registerBreakpoints(),
                    s.init(!0);
                };
              })()).prototype.activateADA = function () {
                this.$slideTrack
                  .find(".slick-active")
                  .attr({ "aria-hidden": "false" })
                  .find("a, input, button, select")
                  .attr({ tabindex: "0" });
              }),
                (t.prototype.addSlide = t.prototype.slickAdd =
                  function (t, i, n) {
                    var o = this;
                    if ("boolean" == typeof i) (n = i), (i = null);
                    else if (i < 0 || i >= o.slideCount) return !1;
                    o.unload(),
                      "number" == typeof i
                        ? 0 === i && 0 === o.$slides.length
                          ? e(t).appendTo(o.$slideTrack)
                          : n
                          ? e(t).insertBefore(o.$slides.eq(i))
                          : e(t).insertAfter(o.$slides.eq(i))
                        : !0 === n
                        ? e(t).prependTo(o.$slideTrack)
                        : e(t).appendTo(o.$slideTrack),
                      (o.$slides = o.$slideTrack.children(this.options.slide)),
                      o.$slideTrack.children(this.options.slide).detach(),
                      o.$slideTrack.append(o.$slides),
                      o.$slides.each(function (t, i) {
                        e(i).attr("data-slick-index", t);
                      }),
                      (o.$slidesCache = o.$slides),
                      o.reinit();
                  }),
                (t.prototype.animateHeight = function () {
                  var e = this;
                  if (
                    1 === e.options.slidesToShow &&
                    !0 === e.options.adaptiveHeight &&
                    !1 === e.options.vertical
                  ) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({ height: t }, e.options.speed);
                  }
                }),
                (t.prototype.animateSlide = function (t, i) {
                  var n = {},
                    o = this;
                  o.animateHeight(),
                    !0 === o.options.rtl &&
                      !1 === o.options.vertical &&
                      (t = -t),
                    !1 === o.transformsEnabled
                      ? !1 === o.options.vertical
                        ? o.$slideTrack.animate(
                            { left: t },
                            o.options.speed,
                            o.options.easing,
                            i
                          )
                        : o.$slideTrack.animate(
                            { top: t },
                            o.options.speed,
                            o.options.easing,
                            i
                          )
                      : !1 === o.cssTransitions
                      ? (!0 === o.options.rtl &&
                          (o.currentLeft = -o.currentLeft),
                        e({ animStart: o.currentLeft }).animate(
                          { animStart: t },
                          {
                            duration: o.options.speed,
                            easing: o.options.easing,
                            step: function (e) {
                              (e = Math.ceil(e)),
                                !1 === o.options.vertical
                                  ? ((n[o.animType] =
                                      "translate(" + e + "px, 0px)"),
                                    o.$slideTrack.css(n))
                                  : ((n[o.animType] =
                                      "translate(0px," + e + "px)"),
                                    o.$slideTrack.css(n));
                            },
                            complete: function () {
                              i && i.call();
                            },
                          }
                        ))
                      : (o.applyTransition(),
                        (t = Math.ceil(t)),
                        !1 === o.options.vertical
                          ? (n[o.animType] =
                              "translate3d(" + t + "px, 0px, 0px)")
                          : (n[o.animType] =
                              "translate3d(0px," + t + "px, 0px)"),
                        o.$slideTrack.css(n),
                        i &&
                          setTimeout(function () {
                            o.disableTransition(), i.call();
                          }, o.options.speed));
                }),
                (t.prototype.getNavTarget = function () {
                  var t = this.options.asNavFor;
                  return t && null !== t && (t = e(t).not(this.$slider)), t;
                }),
                (t.prototype.asNavFor = function (t) {
                  var i = this.getNavTarget();
                  null !== i &&
                    "object" == typeof i &&
                    i.each(function () {
                      var i = e(this).slick("getSlick");
                      i.unslicked || i.slideHandler(t, !0);
                    });
                }),
                (t.prototype.applyTransition = function (e) {
                  var t = this,
                    i = {};
                  !1 === t.options.fade
                    ? (i[t.transitionType] =
                        t.transformType +
                        " " +
                        t.options.speed +
                        "ms " +
                        t.options.cssEase)
                    : (i[t.transitionType] =
                        "opacity " +
                        t.options.speed +
                        "ms " +
                        t.options.cssEase),
                    !1 === t.options.fade
                      ? t.$slideTrack.css(i)
                      : t.$slides.eq(e).css(i);
                }),
                (t.prototype.autoPlay = function () {
                  var e = this;
                  e.autoPlayClear(),
                    e.slideCount > e.options.slidesToShow &&
                      (e.autoPlayTimer = setInterval(
                        e.autoPlayIterator,
                        e.options.autoplaySpeed
                      ));
                }),
                (t.prototype.autoPlayClear = function () {
                  this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                }),
                (t.prototype.autoPlayIterator = function () {
                  var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                  e.paused ||
                    e.interrupted ||
                    e.focussed ||
                    (!1 === e.options.infinite &&
                      (1 === e.direction &&
                      e.currentSlide + 1 === e.slideCount - 1
                        ? (e.direction = 0)
                        : 0 === e.direction &&
                          ((t = e.currentSlide - e.options.slidesToScroll),
                          e.currentSlide - 1 == 0 && (e.direction = 1))),
                    e.slideHandler(t));
                }),
                (t.prototype.buildArrows = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    ((t.$prevArrow = e(t.options.prevArrow).addClass(
                      "slick-arrow"
                    )),
                    (t.$nextArrow = e(t.options.nextArrow).addClass(
                      "slick-arrow"
                    )),
                    t.slideCount > t.options.slidesToShow
                      ? (t.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        t.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        t.htmlExpr.test(t.options.prevArrow) &&
                          t.$prevArrow.prependTo(t.options.appendArrows),
                        t.htmlExpr.test(t.options.nextArrow) &&
                          t.$nextArrow.appendTo(t.options.appendArrows),
                        !0 !== t.options.infinite &&
                          t.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"))
                      : t.$prevArrow
                          .add(t.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
                }),
                (t.prototype.buildDots = function () {
                  var t,
                    i,
                    n = this;
                  if (!0 === n.options.dots) {
                    for (
                      n.$slider.addClass("slick-dotted"),
                        i = e("<ul />").addClass(n.options.dotsClass),
                        t = 0;
                      t <= n.getDotCount();
                      t += 1
                    )
                      i.append(
                        e("<li />").append(
                          n.options.customPaging.call(this, n, t)
                        )
                      );
                    (n.$dots = i.appendTo(n.options.appendDots)),
                      n.$dots.find("li").first().addClass("slick-active");
                  }
                }),
                (t.prototype.buildOut = function () {
                  var t = this;
                  (t.$slides = t.$slider
                    .children(t.options.slide + ":not(.slick-cloned)")
                    .addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.$slides.each(function (t, i) {
                      e(i)
                        .attr("data-slick-index", t)
                        .data("originalStyling", e(i).attr("style") || "");
                    }),
                    t.$slider.addClass("slick-slider"),
                    (t.$slideTrack =
                      0 === t.slideCount
                        ? e('<div class="slick-track"/>').appendTo(t.$slider)
                        : t.$slides
                            .wrapAll('<div class="slick-track"/>')
                            .parent()),
                    (t.$list = t.$slideTrack
                      .wrap('<div class="slick-list"/>')
                      .parent()),
                    t.$slideTrack.css("opacity", 0),
                    (!0 !== t.options.centerMode &&
                      !0 !== t.options.swipeToSlide) ||
                      (t.options.slidesToScroll = 1),
                    e("img[data-lazy]", t.$slider)
                      .not("[src]")
                      .addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses(
                      "number" == typeof t.currentSlide ? t.currentSlide : 0
                    ),
                    !0 === t.options.draggable && t.$list.addClass("draggable");
                }),
                (t.prototype.buildRows = function () {
                  var e,
                    t,
                    i,
                    n,
                    o,
                    s,
                    r,
                    a = this;
                  if (
                    ((n = document.createDocumentFragment()),
                    (s = a.$slider.children()),
                    a.options.rows > 1)
                  ) {
                    for (
                      r = a.options.slidesPerRow * a.options.rows,
                        o = Math.ceil(s.length / r),
                        e = 0;
                      e < o;
                      e++
                    ) {
                      var l = document.createElement("div");
                      for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                          var u = e * r + (t * a.options.slidesPerRow + i);
                          s.get(u) && c.appendChild(s.get(u));
                        }
                        l.appendChild(c);
                      }
                      n.appendChild(l);
                    }
                    a.$slider.empty().append(n),
                      a.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                          width: 100 / a.options.slidesPerRow + "%",
                          display: "inline-block",
                        });
                  }
                }),
                (t.prototype.checkResponsive = function (t, i) {
                  var n,
                    o,
                    s,
                    r = this,
                    a = !1,
                    l = r.$slider.width(),
                    c = window.innerWidth || e(window).width();
                  if (
                    ("window" === r.respondTo
                      ? (s = c)
                      : "slider" === r.respondTo
                      ? (s = l)
                      : "min" === r.respondTo && (s = Math.min(c, l)),
                    r.options.responsive &&
                      r.options.responsive.length &&
                      null !== r.options.responsive)
                  ) {
                    for (n in ((o = null), r.breakpoints))
                      r.breakpoints.hasOwnProperty(n) &&
                        (!1 === r.originalSettings.mobileFirst
                          ? s < r.breakpoints[n] && (o = r.breakpoints[n])
                          : s > r.breakpoints[n] && (o = r.breakpoints[n]));
                    null !== o
                      ? null !== r.activeBreakpoint
                        ? (o !== r.activeBreakpoint || i) &&
                          ((r.activeBreakpoint = o),
                          "unslick" === r.breakpointSettings[o]
                            ? r.unslick(o)
                            : ((r.options = e.extend(
                                {},
                                r.originalSettings,
                                r.breakpointSettings[o]
                              )),
                              !0 === t &&
                                (r.currentSlide = r.options.initialSlide),
                              r.refresh(t)),
                          (a = o))
                        : ((r.activeBreakpoint = o),
                          "unslick" === r.breakpointSettings[o]
                            ? r.unslick(o)
                            : ((r.options = e.extend(
                                {},
                                r.originalSettings,
                                r.breakpointSettings[o]
                              )),
                              !0 === t &&
                                (r.currentSlide = r.options.initialSlide),
                              r.refresh(t)),
                          (a = o))
                      : null !== r.activeBreakpoint &&
                        ((r.activeBreakpoint = null),
                        (r.options = r.originalSettings),
                        !0 === t && (r.currentSlide = r.options.initialSlide),
                        r.refresh(t),
                        (a = o)),
                      t || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
                  }
                }),
                (t.prototype.changeSlide = function (t, i) {
                  var n,
                    o,
                    s = this,
                    r = e(t.currentTarget);
                  switch (
                    (r.is("a") && t.preventDefault(),
                    r.is("li") || (r = r.closest("li")),
                    (n =
                      s.slideCount % s.options.slidesToScroll != 0
                        ? 0
                        : (s.slideCount - s.currentSlide) %
                          s.options.slidesToScroll),
                    t.data.message)
                  ) {
                    case "previous":
                      (o =
                        0 === n
                          ? s.options.slidesToScroll
                          : s.options.slidesToShow - n),
                        s.slideCount > s.options.slidesToShow &&
                          s.slideHandler(s.currentSlide - o, !1, i);
                      break;
                    case "next":
                      (o = 0 === n ? s.options.slidesToScroll : n),
                        s.slideCount > s.options.slidesToShow &&
                          s.slideHandler(s.currentSlide + o, !1, i);
                      break;
                    case "index":
                      var a =
                        0 === t.data.index
                          ? 0
                          : t.data.index ||
                            r.index() * s.options.slidesToScroll;
                      s.slideHandler(s.checkNavigable(a), !1, i),
                        r.children().trigger("focus");
                      break;
                    default:
                      return;
                  }
                }),
                (t.prototype.checkNavigable = function (e) {
                  var t, i;
                  if (
                    ((i = 0),
                    e > (t = this.getNavigableIndexes())[t.length - 1])
                  )
                    e = t[t.length - 1];
                  else
                    for (var n in t) {
                      if (e < t[n]) {
                        e = i;
                        break;
                      }
                      i = t[n];
                    }
                  return e;
                }),
                (t.prototype.cleanUpEvents = function () {
                  var t = this;
                  t.options.dots &&
                    null !== t.$dots &&
                    (e("li", t.$dots)
                      .off("click.slick", t.changeSlide)
                      .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                      .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                    !0 === t.options.accessibility &&
                      t.$dots.off("keydown.slick", t.keyHandler)),
                    t.$slider.off("focus.slick blur.slick"),
                    !0 === t.options.arrows &&
                      t.slideCount > t.options.slidesToShow &&
                      (t.$prevArrow &&
                        t.$prevArrow.off("click.slick", t.changeSlide),
                      t.$nextArrow &&
                        t.$nextArrow.off("click.slick", t.changeSlide),
                      !0 === t.options.accessibility &&
                        (t.$prevArrow &&
                          t.$prevArrow.off("keydown.slick", t.keyHandler),
                        t.$nextArrow &&
                          t.$nextArrow.off("keydown.slick", t.keyHandler))),
                    t.$list.off(
                      "touchstart.slick mousedown.slick",
                      t.swipeHandler
                    ),
                    t.$list.off(
                      "touchmove.slick mousemove.slick",
                      t.swipeHandler
                    ),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off(
                      "touchcancel.slick mouseleave.slick",
                      t.swipeHandler
                    ),
                    t.$list.off("click.slick", t.clickHandler),
                    e(document).off(t.visibilityChange, t.visibility),
                    t.cleanUpSlideEvents(),
                    !0 === t.options.accessibility &&
                      t.$list.off("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .off("click.slick", t.selectHandler),
                    e(window).off(
                      "orientationchange.slick.slick-" + t.instanceUid,
                      t.orientationChange
                    ),
                    e(window).off(
                      "resize.slick.slick-" + t.instanceUid,
                      t.resize
                    ),
                    e("[draggable!=true]", t.$slideTrack).off(
                      "dragstart",
                      t.preventDefault
                    ),
                    e(window).off(
                      "load.slick.slick-" + t.instanceUid,
                      t.setPosition
                    );
                }),
                (t.prototype.cleanUpSlideEvents = function () {
                  var t = this;
                  t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                    t.$list.off(
                      "mouseleave.slick",
                      e.proxy(t.interrupt, t, !1)
                    );
                }),
                (t.prototype.cleanUpRows = function () {
                  var e,
                    t = this;
                  t.options.rows > 1 &&
                    ((e = t.$slides.children().children()).removeAttr("style"),
                    t.$slider.empty().append(e));
                }),
                (t.prototype.clickHandler = function (e) {
                  !1 === this.shouldClick &&
                    (e.stopImmediatePropagation(),
                    e.stopPropagation(),
                    e.preventDefault());
                }),
                (t.prototype.destroy = function (t) {
                  var i = this;
                  i.autoPlayClear(),
                    (i.touchObject = {}),
                    i.cleanUpEvents(),
                    e(".slick-cloned", i.$slider).detach(),
                    i.$dots && i.$dots.remove(),
                    i.$prevArrow &&
                      i.$prevArrow.length &&
                      (i.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      i.htmlExpr.test(i.options.prevArrow) &&
                        i.$prevArrow.remove()),
                    i.$nextArrow &&
                      i.$nextArrow.length &&
                      (i.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      i.htmlExpr.test(i.options.nextArrow) &&
                        i.$nextArrow.remove()),
                    i.$slides &&
                      (i.$slides
                        .removeClass(
                          "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                          e(this).attr(
                            "style",
                            e(this).data("originalStyling")
                          );
                        }),
                      i.$slideTrack.children(this.options.slide).detach(),
                      i.$slideTrack.detach(),
                      i.$list.detach(),
                      i.$slider.append(i.$slides)),
                    i.cleanUpRows(),
                    i.$slider.removeClass("slick-slider"),
                    i.$slider.removeClass("slick-initialized"),
                    i.$slider.removeClass("slick-dotted"),
                    (i.unslicked = !0),
                    t || i.$slider.trigger("destroy", [i]);
                }),
                (t.prototype.disableTransition = function (e) {
                  var t = this,
                    i = {};
                  (i[t.transitionType] = ""),
                    !1 === t.options.fade
                      ? t.$slideTrack.css(i)
                      : t.$slides.eq(e).css(i);
                }),
                (t.prototype.fadeSlide = function (e, t) {
                  var i = this;
                  !1 === i.cssTransitions
                    ? (i.$slides.eq(e).css({ zIndex: i.options.zIndex }),
                      i.$slides
                        .eq(e)
                        .animate(
                          { opacity: 1 },
                          i.options.speed,
                          i.options.easing,
                          t
                        ))
                    : (i.applyTransition(e),
                      i.$slides
                        .eq(e)
                        .css({ opacity: 1, zIndex: i.options.zIndex }),
                      t &&
                        setTimeout(function () {
                          i.disableTransition(e), t.call();
                        }, i.options.speed));
                }),
                (t.prototype.fadeSlideOut = function (e) {
                  var t = this;
                  !1 === t.cssTransitions
                    ? t.$slides
                        .eq(e)
                        .animate(
                          { opacity: 0, zIndex: t.options.zIndex - 2 },
                          t.options.speed,
                          t.options.easing
                        )
                    : (t.applyTransition(e),
                      t.$slides
                        .eq(e)
                        .css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
                }),
                (t.prototype.filterSlides = t.prototype.slickFilter =
                  function (e) {
                    var t = this;
                    null !== e &&
                      ((t.$slidesCache = t.$slides),
                      t.unload(),
                      t.$slideTrack.children(this.options.slide).detach(),
                      t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                      t.reinit());
                  }),
                (t.prototype.focusHandler = function () {
                  var t = this;
                  t.$slider
                    .off("focus.slick blur.slick")
                    .on("focus.slick blur.slick", "*", function (i) {
                      i.stopImmediatePropagation();
                      var n = e(this);
                      setTimeout(function () {
                        t.options.pauseOnFocus &&
                          ((t.focussed = n.is(":focus")), t.autoPlay());
                      }, 0);
                    });
                }),
                (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
                  function () {
                    return this.currentSlide;
                  }),
                (t.prototype.getDotCount = function () {
                  var e = this,
                    t = 0,
                    i = 0,
                    n = 0;
                  if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++n;
                    else
                      for (; t < e.slideCount; )
                        ++n,
                          (t = i + e.options.slidesToScroll),
                          (i +=
                            e.options.slidesToScroll <= e.options.slidesToShow
                              ? e.options.slidesToScroll
                              : e.options.slidesToShow);
                  else if (!0 === e.options.centerMode) n = e.slideCount;
                  else if (e.options.asNavFor)
                    for (; t < e.slideCount; )
                      ++n,
                        (t = i + e.options.slidesToScroll),
                        (i +=
                          e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
                  else
                    n =
                      1 +
                      Math.ceil(
                        (e.slideCount - e.options.slidesToShow) /
                          e.options.slidesToScroll
                      );
                  return n - 1;
                }),
                (t.prototype.getLeft = function (e) {
                  var t,
                    i,
                    n,
                    o,
                    s = this,
                    r = 0;
                  return (
                    (s.slideOffset = 0),
                    (i = s.$slides.first().outerHeight(!0)),
                    !0 === s.options.infinite
                      ? (s.slideCount > s.options.slidesToShow &&
                          ((s.slideOffset =
                            s.slideWidth * s.options.slidesToShow * -1),
                          (o = -1),
                          !0 === s.options.vertical &&
                            !0 === s.options.centerMode &&
                            (2 === s.options.slidesToShow
                              ? (o = -1.5)
                              : 1 === s.options.slidesToShow && (o = -2)),
                          (r = i * s.options.slidesToShow * o)),
                        s.slideCount % s.options.slidesToScroll != 0 &&
                          e + s.options.slidesToScroll > s.slideCount &&
                          s.slideCount > s.options.slidesToShow &&
                          (e > s.slideCount
                            ? ((s.slideOffset =
                                (s.options.slidesToShow - (e - s.slideCount)) *
                                s.slideWidth *
                                -1),
                              (r =
                                (s.options.slidesToShow - (e - s.slideCount)) *
                                i *
                                -1))
                            : ((s.slideOffset =
                                (s.slideCount % s.options.slidesToScroll) *
                                s.slideWidth *
                                -1),
                              (r =
                                (s.slideCount % s.options.slidesToScroll) *
                                i *
                                -1))))
                      : e + s.options.slidesToShow > s.slideCount &&
                        ((s.slideOffset =
                          (e + s.options.slidesToShow - s.slideCount) *
                          s.slideWidth),
                        (r = (e + s.options.slidesToShow - s.slideCount) * i)),
                    s.slideCount <= s.options.slidesToShow &&
                      ((s.slideOffset = 0), (r = 0)),
                    !0 === s.options.centerMode &&
                    s.slideCount <= s.options.slidesToShow
                      ? (s.slideOffset =
                          (s.slideWidth * Math.floor(s.options.slidesToShow)) /
                            2 -
                          (s.slideWidth * s.slideCount) / 2)
                      : !0 === s.options.centerMode && !0 === s.options.infinite
                      ? (s.slideOffset +=
                          s.slideWidth *
                            Math.floor(s.options.slidesToShow / 2) -
                          s.slideWidth)
                      : !0 === s.options.centerMode &&
                        ((s.slideOffset = 0),
                        (s.slideOffset +=
                          s.slideWidth *
                          Math.floor(s.options.slidesToShow / 2))),
                    (t =
                      !1 === s.options.vertical
                        ? e * s.slideWidth * -1 + s.slideOffset
                        : e * i * -1 + r),
                    !0 === s.options.variableWidth &&
                      ((n =
                        s.slideCount <= s.options.slidesToShow ||
                        !1 === s.options.infinite
                          ? s.$slideTrack.children(".slick-slide").eq(e)
                          : s.$slideTrack
                              .children(".slick-slide")
                              .eq(e + s.options.slidesToShow)),
                      (t =
                        !0 === s.options.rtl
                          ? n[0]
                            ? -1 *
                              (s.$slideTrack.width() -
                                n[0].offsetLeft -
                                n.width())
                            : 0
                          : n[0]
                          ? -1 * n[0].offsetLeft
                          : 0),
                      !0 === s.options.centerMode &&
                        ((n =
                          s.slideCount <= s.options.slidesToShow ||
                          !1 === s.options.infinite
                            ? s.$slideTrack.children(".slick-slide").eq(e)
                            : s.$slideTrack
                                .children(".slick-slide")
                                .eq(e + s.options.slidesToShow + 1)),
                        (t =
                          !0 === s.options.rtl
                            ? n[0]
                              ? -1 *
                                (s.$slideTrack.width() -
                                  n[0].offsetLeft -
                                  n.width())
                              : 0
                            : n[0]
                            ? -1 * n[0].offsetLeft
                            : 0),
                        (t += (s.$list.width() - n.outerWidth()) / 2))),
                    t
                  );
                }),
                (t.prototype.getOption = t.prototype.slickGetOption =
                  function (e) {
                    return this.options[e];
                  }),
                (t.prototype.getNavigableIndexes = function () {
                  var e,
                    t = this,
                    i = 0,
                    n = 0,
                    o = [];
                  for (
                    !1 === t.options.infinite
                      ? (e = t.slideCount)
                      : ((i = -1 * t.options.slidesToScroll),
                        (n = -1 * t.options.slidesToScroll),
                        (e = 2 * t.slideCount));
                    i < e;

                  )
                    o.push(i),
                      (i = n + t.options.slidesToScroll),
                      (n +=
                        t.options.slidesToScroll <= t.options.slidesToShow
                          ? t.options.slidesToScroll
                          : t.options.slidesToShow);
                  return o;
                }),
                (t.prototype.getSlick = function () {
                  return this;
                }),
                (t.prototype.getSlideCount = function () {
                  var t,
                    i,
                    n = this;
                  return (
                    (i =
                      !0 === n.options.centerMode
                        ? n.slideWidth * Math.floor(n.options.slidesToShow / 2)
                        : 0),
                    !0 === n.options.swipeToSlide
                      ? (n.$slideTrack
                          .find(".slick-slide")
                          .each(function (o, s) {
                            if (
                              s.offsetLeft - i + e(s).outerWidth() / 2 >
                              -1 * n.swipeLeft
                            )
                              return (t = s), !1;
                          }),
                        Math.abs(
                          e(t).attr("data-slick-index") - n.currentSlide
                        ) || 1)
                      : n.options.slidesToScroll
                  );
                }),
                (t.prototype.goTo = t.prototype.slickGoTo =
                  function (e, t) {
                    this.changeSlide(
                      { data: { message: "index", index: parseInt(e) } },
                      t
                    );
                  }),
                (t.prototype.init = function (t) {
                  var i = this;
                  e(i.$slider).hasClass("slick-initialized") ||
                    (e(i.$slider).addClass("slick-initialized"),
                    i.buildRows(),
                    i.buildOut(),
                    i.setProps(),
                    i.startLoad(),
                    i.loadSlider(),
                    i.initializeEvents(),
                    i.updateArrows(),
                    i.updateDots(),
                    i.checkResponsive(!0),
                    i.focusHandler()),
                    t && i.$slider.trigger("init", [i]),
                    !0 === i.options.accessibility && i.initADA(),
                    i.options.autoplay && ((i.paused = !1), i.autoPlay());
                }),
                (t.prototype.initADA = function () {
                  var t = this,
                    i = Math.ceil(t.slideCount / t.options.slidesToShow),
                    n = t.getNavigableIndexes().filter(function (e) {
                      return e >= 0 && e < t.slideCount;
                    });
                  t.$slides
                    .add(t.$slideTrack.find(".slick-cloned"))
                    .attr({ "aria-hidden": "true", tabindex: "-1" })
                    .find("a, input, button, select")
                    .attr({ tabindex: "-1" }),
                    null !== t.$dots &&
                      (t.$slides
                        .not(t.$slideTrack.find(".slick-cloned"))
                        .each(function (i) {
                          var o = n.indexOf(i);
                          e(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + t.instanceUid + i,
                            tabindex: -1,
                          }),
                            -1 !== o &&
                              e(this).attr({
                                "aria-describedby":
                                  "slick-slide-control" + t.instanceUid + o,
                              });
                        }),
                      t.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (o) {
                          var s = n[o];
                          e(this).attr({ role: "presentation" }),
                            e(this)
                              .find("button")
                              .first()
                              .attr({
                                role: "tab",
                                id: "slick-slide-control" + t.instanceUid + o,
                                "aria-controls":
                                  "slick-slide" + t.instanceUid + s,
                                "aria-label": o + 1 + " of " + i,
                                "aria-selected": null,
                                tabindex: "-1",
                              });
                        })
                        .eq(t.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
                  for (
                    var o = t.currentSlide, s = o + t.options.slidesToShow;
                    o < s;
                    o++
                  )
                    t.$slides.eq(o).attr("tabindex", 0);
                  t.activateADA();
                }),
                (t.prototype.initArrowEvents = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow
                      .off("click.slick")
                      .on(
                        "click.slick",
                        { message: "previous" },
                        e.changeSlide
                      ),
                    e.$nextArrow
                      .off("click.slick")
                      .on("click.slick", { message: "next" }, e.changeSlide),
                    !0 === e.options.accessibility &&
                      (e.$prevArrow.on("keydown.slick", e.keyHandler),
                      e.$nextArrow.on("keydown.slick", e.keyHandler)));
                }),
                (t.prototype.initDotEvents = function () {
                  var t = this;
                  !0 === t.options.dots &&
                    (e("li", t.$dots).on(
                      "click.slick",
                      { message: "index" },
                      t.changeSlide
                    ),
                    !0 === t.options.accessibility &&
                      t.$dots.on("keydown.slick", t.keyHandler)),
                    !0 === t.options.dots &&
                      !0 === t.options.pauseOnDotsHover &&
                      e("li", t.$dots)
                        .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                        .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                }),
                (t.prototype.initSlideEvents = function () {
                  var t = this;
                  t.options.pauseOnHover &&
                    (t.$list.on(
                      "mouseenter.slick",
                      e.proxy(t.interrupt, t, !0)
                    ),
                    t.$list.on(
                      "mouseleave.slick",
                      e.proxy(t.interrupt, t, !1)
                    ));
                }),
                (t.prototype.initializeEvents = function () {
                  var t = this;
                  t.initArrowEvents(),
                    t.initDotEvents(),
                    t.initSlideEvents(),
                    t.$list.on(
                      "touchstart.slick mousedown.slick",
                      { action: "start" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchmove.slick mousemove.slick",
                      { action: "move" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchend.slick mouseup.slick",
                      { action: "end" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchcancel.slick mouseleave.slick",
                      { action: "end" },
                      t.swipeHandler
                    ),
                    t.$list.on("click.slick", t.clickHandler),
                    e(document).on(
                      t.visibilityChange,
                      e.proxy(t.visibility, t)
                    ),
                    !0 === t.options.accessibility &&
                      t.$list.on("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .on("click.slick", t.selectHandler),
                    e(window).on(
                      "orientationchange.slick.slick-" + t.instanceUid,
                      e.proxy(t.orientationChange, t)
                    ),
                    e(window).on(
                      "resize.slick.slick-" + t.instanceUid,
                      e.proxy(t.resize, t)
                    ),
                    e("[draggable!=true]", t.$slideTrack).on(
                      "dragstart",
                      t.preventDefault
                    ),
                    e(window).on(
                      "load.slick.slick-" + t.instanceUid,
                      t.setPosition
                    ),
                    e(t.setPosition);
                }),
                (t.prototype.initUI = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.show(), e.$nextArrow.show()),
                    !0 === e.options.dots &&
                      e.slideCount > e.options.slidesToShow &&
                      e.$dots.show();
                }),
                (t.prototype.keyHandler = function (e) {
                  var t = this;
                  e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === e.keyCode && !0 === t.options.accessibility
                      ? t.changeSlide({
                          data: {
                            message: !0 === t.options.rtl ? "next" : "previous",
                          },
                        })
                      : 39 === e.keyCode &&
                        !0 === t.options.accessibility &&
                        t.changeSlide({
                          data: {
                            message: !0 === t.options.rtl ? "previous" : "next",
                          },
                        }));
                }),
                (t.prototype.lazyLoad = function () {
                  function t(t) {
                    e("img[data-lazy]", t).each(function () {
                      var t = e(this),
                        i = e(this).attr("data-lazy"),
                        n = e(this).attr("data-srcset"),
                        o =
                          e(this).attr("data-sizes") ||
                          s.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                      (r.onload = function () {
                        t.animate({ opacity: 0 }, 100, function () {
                          n && (t.attr("srcset", n), o && t.attr("sizes", o)),
                            t
                              .attr("src", i)
                              .animate({ opacity: 1 }, 200, function () {
                                t.removeAttr(
                                  "data-lazy data-srcset data-sizes"
                                ).removeClass("slick-loading");
                              }),
                            s.$slider.trigger("lazyLoaded", [s, t, i]);
                        });
                      }),
                        (r.onerror = function () {
                          t
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading")
                            .addClass("slick-lazyload-error"),
                            s.$slider.trigger("lazyLoadError", [s, t, i]);
                        }),
                        (r.src = i);
                    });
                  }
                  var i,
                    n,
                    o,
                    s = this;
                  if (
                    (!0 === s.options.centerMode
                      ? !0 === s.options.infinite
                        ? (o =
                            (n =
                              s.currentSlide +
                              (s.options.slidesToShow / 2 + 1)) +
                            s.options.slidesToShow +
                            2)
                        : ((n = Math.max(
                            0,
                            s.currentSlide - (s.options.slidesToShow / 2 + 1)
                          )),
                          (o =
                            s.options.slidesToShow / 2 +
                            1 +
                            2 +
                            s.currentSlide))
                      : ((n = s.options.infinite
                          ? s.options.slidesToShow + s.currentSlide
                          : s.currentSlide),
                        (o = Math.ceil(n + s.options.slidesToShow)),
                        !0 === s.options.fade &&
                          (n > 0 && n--, o <= s.slideCount && o++)),
                    (i = s.$slider.find(".slick-slide").slice(n, o)),
                    "anticipated" === s.options.lazyLoad)
                  )
                    for (
                      var r = n - 1,
                        a = o,
                        l = s.$slider.find(".slick-slide"),
                        c = 0;
                      c < s.options.slidesToScroll;
                      c++
                    )
                      r < 0 && (r = s.slideCount - 1),
                        (i = (i = i.add(l.eq(r))).add(l.eq(a))),
                        r--,
                        a++;
                  t(i),
                    s.slideCount <= s.options.slidesToShow
                      ? t(s.$slider.find(".slick-slide"))
                      : s.currentSlide >= s.slideCount - s.options.slidesToShow
                      ? t(
                          s.$slider
                            .find(".slick-cloned")
                            .slice(0, s.options.slidesToShow)
                        )
                      : 0 === s.currentSlide &&
                        t(
                          s.$slider
                            .find(".slick-cloned")
                            .slice(-1 * s.options.slidesToShow)
                        );
                }),
                (t.prototype.loadSlider = function () {
                  var e = this;
                  e.setPosition(),
                    e.$slideTrack.css({ opacity: 1 }),
                    e.$slider.removeClass("slick-loading"),
                    e.initUI(),
                    "progressive" === e.options.lazyLoad &&
                      e.progressiveLazyLoad();
                }),
                (t.prototype.next = t.prototype.slickNext =
                  function () {
                    this.changeSlide({ data: { message: "next" } });
                  }),
                (t.prototype.orientationChange = function () {
                  this.checkResponsive(), this.setPosition();
                }),
                (t.prototype.pause = t.prototype.slickPause =
                  function () {
                    this.autoPlayClear(), (this.paused = !0);
                  }),
                (t.prototype.play = t.prototype.slickPlay =
                  function () {
                    var e = this;
                    e.autoPlay(),
                      (e.options.autoplay = !0),
                      (e.paused = !1),
                      (e.focussed = !1),
                      (e.interrupted = !1);
                  }),
                (t.prototype.postSlide = function (t) {
                  var i = this;
                  i.unslicked ||
                    (i.$slider.trigger("afterChange", [i, t]),
                    (i.animating = !1),
                    i.slideCount > i.options.slidesToShow && i.setPosition(),
                    (i.swipeLeft = null),
                    i.options.autoplay && i.autoPlay(),
                    !0 === i.options.accessibility &&
                      (i.initADA(),
                      i.options.focusOnChange &&
                        e(i.$slides.get(i.currentSlide))
                          .attr("tabindex", 0)
                          .focus()));
                }),
                (t.prototype.prev = t.prototype.slickPrev =
                  function () {
                    this.changeSlide({ data: { message: "previous" } });
                  }),
                (t.prototype.preventDefault = function (e) {
                  e.preventDefault();
                }),
                (t.prototype.progressiveLazyLoad = function (t) {
                  t = t || 1;
                  var i,
                    n,
                    o,
                    s,
                    r,
                    a = this,
                    l = e("img[data-lazy]", a.$slider);
                  l.length
                    ? ((i = l.first()),
                      (n = i.attr("data-lazy")),
                      (o = i.attr("data-srcset")),
                      (s =
                        i.attr("data-sizes") || a.$slider.attr("data-sizes")),
                      ((r = document.createElement("img")).onload =
                        function () {
                          o && (i.attr("srcset", o), s && i.attr("sizes", s)),
                            i
                              .attr("src", n)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                            !0 === a.options.adaptiveHeight && a.setPosition(),
                            a.$slider.trigger("lazyLoaded", [a, i, n]),
                            a.progressiveLazyLoad();
                        }),
                      (r.onerror = function () {
                        t < 3
                          ? setTimeout(function () {
                              a.progressiveLazyLoad(t + 1);
                            }, 500)
                          : (i
                              .removeAttr("data-lazy")
                              .removeClass("slick-loading")
                              .addClass("slick-lazyload-error"),
                            a.$slider.trigger("lazyLoadError", [a, i, n]),
                            a.progressiveLazyLoad());
                      }),
                      (r.src = n))
                    : a.$slider.trigger("allImagesLoaded", [a]);
                }),
                (t.prototype.refresh = function (t) {
                  var i,
                    n,
                    o = this;
                  (n = o.slideCount - o.options.slidesToShow),
                    !o.options.infinite &&
                      o.currentSlide > n &&
                      (o.currentSlide = n),
                    o.slideCount <= o.options.slidesToShow &&
                      (o.currentSlide = 0),
                    (i = o.currentSlide),
                    o.destroy(!0),
                    e.extend(o, o.initials, { currentSlide: i }),
                    o.init(),
                    t ||
                      o.changeSlide(
                        { data: { message: "index", index: i } },
                        !1
                      );
                }),
                (t.prototype.registerBreakpoints = function () {
                  var t,
                    i,
                    n,
                    o = this,
                    s = o.options.responsive || null;
                  if ("array" === e.type(s) && s.length) {
                    for (t in ((o.respondTo = o.options.respondTo || "window"),
                    s))
                      if (
                        ((n = o.breakpoints.length - 1), s.hasOwnProperty(t))
                      ) {
                        for (i = s[t].breakpoint; n >= 0; )
                          o.breakpoints[n] &&
                            o.breakpoints[n] === i &&
                            o.breakpoints.splice(n, 1),
                            n--;
                        o.breakpoints.push(i),
                          (o.breakpointSettings[i] = s[t].settings);
                      }
                    o.breakpoints.sort(function (e, t) {
                      return o.options.mobileFirst ? e - t : t - e;
                    });
                  }
                }),
                (t.prototype.reinit = function () {
                  var t = this;
                  (t.$slides = t.$slideTrack
                    .children(t.options.slide)
                    .addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.currentSlide >= t.slideCount &&
                      0 !== t.currentSlide &&
                      (t.currentSlide =
                        t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow &&
                      (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.cleanUpSlideEvents(),
                    t.initSlideEvents(),
                    t.checkResponsive(!1, !0),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .on("click.slick", t.selectHandler),
                    t.setSlideClasses(
                      "number" == typeof t.currentSlide ? t.currentSlide : 0
                    ),
                    t.setPosition(),
                    t.focusHandler(),
                    (t.paused = !t.options.autoplay),
                    t.autoPlay(),
                    t.$slider.trigger("reInit", [t]);
                }),
                (t.prototype.resize = function () {
                  var t = this;
                  e(window).width() !== t.windowWidth &&
                    (clearTimeout(t.windowDelay),
                    (t.windowDelay = window.setTimeout(function () {
                      (t.windowWidth = e(window).width()),
                        t.checkResponsive(),
                        t.unslicked || t.setPosition();
                    }, 50)));
                }),
                (t.prototype.removeSlide = t.prototype.slickRemove =
                  function (e, t, i) {
                    var n = this;
                    if (
                      ((e =
                        "boolean" == typeof e
                          ? !0 === (t = e)
                            ? 0
                            : n.slideCount - 1
                          : !0 === t
                          ? --e
                          : e),
                      n.slideCount < 1 || e < 0 || e > n.slideCount - 1)
                    )
                      return !1;
                    n.unload(),
                      !0 === i
                        ? n.$slideTrack.children().remove()
                        : n.$slideTrack
                            .children(this.options.slide)
                            .eq(e)
                            .remove(),
                      (n.$slides = n.$slideTrack.children(this.options.slide)),
                      n.$slideTrack.children(this.options.slide).detach(),
                      n.$slideTrack.append(n.$slides),
                      (n.$slidesCache = n.$slides),
                      n.reinit();
                  }),
                (t.prototype.setCSS = function (e) {
                  var t,
                    i,
                    n = this,
                    o = {};
                  !0 === n.options.rtl && (e = -e),
                    (t =
                      "left" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (o[n.positionProp] = e),
                    !1 === n.transformsEnabled
                      ? n.$slideTrack.css(o)
                      : ((o = {}),
                        !1 === n.cssTransitions
                          ? ((o[n.animType] =
                              "translate(" + t + ", " + i + ")"),
                            n.$slideTrack.css(o))
                          : ((o[n.animType] =
                              "translate3d(" + t + ", " + i + ", 0px)"),
                            n.$slideTrack.css(o)));
                }),
                (t.prototype.setDimensions = function () {
                  var e = this;
                  !1 === e.options.vertical
                    ? !0 === e.options.centerMode &&
                      e.$list.css({ padding: "0px " + e.options.centerPadding })
                    : (e.$list.height(
                        e.$slides.first().outerHeight(!0) *
                          e.options.slidesToShow
                      ),
                      !0 === e.options.centerMode &&
                        e.$list.css({
                          padding: e.options.centerPadding + " 0px",
                        })),
                    (e.listWidth = e.$list.width()),
                    (e.listHeight = e.$list.height()),
                    !1 === e.options.vertical && !1 === e.options.variableWidth
                      ? ((e.slideWidth = Math.ceil(
                          e.listWidth / e.options.slidesToShow
                        )),
                        e.$slideTrack.width(
                          Math.ceil(
                            e.slideWidth *
                              e.$slideTrack.children(".slick-slide").length
                          )
                        ))
                      : !0 === e.options.variableWidth
                      ? e.$slideTrack.width(5e3 * e.slideCount)
                      : ((e.slideWidth = Math.ceil(e.listWidth)),
                        e.$slideTrack.height(
                          Math.ceil(
                            e.$slides.first().outerHeight(!0) *
                              e.$slideTrack.children(".slick-slide").length
                          )
                        ));
                  var t =
                    e.$slides.first().outerWidth(!0) -
                    e.$slides.first().width();
                  !1 === e.options.variableWidth &&
                    e.$slideTrack
                      .children(".slick-slide")
                      .width(e.slideWidth - t);
                }),
                (t.prototype.setFade = function () {
                  var t,
                    i = this;
                  i.$slides.each(function (n, o) {
                    (t = i.slideWidth * n * -1),
                      !0 === i.options.rtl
                        ? e(o).css({
                            position: "relative",
                            right: t,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0,
                          })
                        : e(o).css({
                            position: "relative",
                            left: t,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0,
                          });
                  }),
                    i.$slides
                      .eq(i.currentSlide)
                      .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
                }),
                (t.prototype.setHeight = function () {
                  var e = this;
                  if (
                    1 === e.options.slidesToShow &&
                    !0 === e.options.adaptiveHeight &&
                    !1 === e.options.vertical
                  ) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t);
                  }
                }),
                (t.prototype.setOption = t.prototype.slickSetOption =
                  function () {
                    var t,
                      i,
                      n,
                      o,
                      s,
                      r = this,
                      a = !1;
                    if (
                      ("object" === e.type(arguments[0])
                        ? ((n = arguments[0]),
                          (a = arguments[1]),
                          (s = "multiple"))
                        : "string" === e.type(arguments[0]) &&
                          ((n = arguments[0]),
                          (o = arguments[1]),
                          (a = arguments[2]),
                          "responsive" === arguments[0] &&
                          "array" === e.type(arguments[1])
                            ? (s = "responsive")
                            : void 0 !== arguments[1] && (s = "single")),
                      "single" === s)
                    )
                      r.options[n] = o;
                    else if ("multiple" === s)
                      e.each(n, function (e, t) {
                        r.options[e] = t;
                      });
                    else if ("responsive" === s)
                      for (i in o)
                        if ("array" !== e.type(r.options.responsive))
                          r.options.responsive = [o[i]];
                        else {
                          for (t = r.options.responsive.length - 1; t >= 0; )
                            r.options.responsive[t].breakpoint ===
                              o[i].breakpoint &&
                              r.options.responsive.splice(t, 1),
                              t--;
                          r.options.responsive.push(o[i]);
                        }
                    a && (r.unload(), r.reinit());
                  }),
                (t.prototype.setPosition = function () {
                  var e = this;
                  e.setDimensions(),
                    e.setHeight(),
                    !1 === e.options.fade
                      ? e.setCSS(e.getLeft(e.currentSlide))
                      : e.setFade(),
                    e.$slider.trigger("setPosition", [e]);
                }),
                (t.prototype.setProps = function () {
                  var e = this,
                    t = document.body.style;
                  (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                    "top" === e.positionProp
                      ? e.$slider.addClass("slick-vertical")
                      : e.$slider.removeClass("slick-vertical"),
                    (void 0 === t.WebkitTransition &&
                      void 0 === t.MozTransition &&
                      void 0 === t.msTransition) ||
                      (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                    e.options.fade &&
                      ("number" == typeof e.options.zIndex
                        ? e.options.zIndex < 3 && (e.options.zIndex = 3)
                        : (e.options.zIndex = e.defaults.zIndex)),
                    void 0 !== t.OTransform &&
                      ((e.animType = "OTransform"),
                      (e.transformType = "-o-transform"),
                      (e.transitionType = "OTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.webkitPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.MozTransform &&
                      ((e.animType = "MozTransform"),
                      (e.transformType = "-moz-transform"),
                      (e.transitionType = "MozTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.MozPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.webkitTransform &&
                      ((e.animType = "webkitTransform"),
                      (e.transformType = "-webkit-transform"),
                      (e.transitionType = "webkitTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.webkitPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.msTransform &&
                      ((e.animType = "msTransform"),
                      (e.transformType = "-ms-transform"),
                      (e.transitionType = "msTransition"),
                      void 0 === t.msTransform && (e.animType = !1)),
                    void 0 !== t.transform &&
                      !1 !== e.animType &&
                      ((e.animType = "transform"),
                      (e.transformType = "transform"),
                      (e.transitionType = "transition")),
                    (e.transformsEnabled =
                      e.options.useTransform &&
                      null !== e.animType &&
                      !1 !== e.animType);
                }),
                (t.prototype.setSlideClasses = function (e) {
                  var t,
                    i,
                    n,
                    o,
                    s = this;
                  if (
                    ((i = s.$slider
                      .find(".slick-slide")
                      .removeClass("slick-active slick-center slick-current")
                      .attr("aria-hidden", "true")),
                    s.$slides.eq(e).addClass("slick-current"),
                    !0 === s.options.centerMode)
                  ) {
                    var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (t = Math.floor(s.options.slidesToShow / 2)),
                      !0 === s.options.infinite &&
                        (e >= t && e <= s.slideCount - 1 - t
                          ? s.$slides
                              .slice(e - t + r, e + t + 1)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : ((n = s.options.slidesToShow + e),
                            i
                              .slice(n - t + 1 + r, n + t + 2)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")),
                        0 === e
                          ? i
                              .eq(i.length - 1 - s.options.slidesToShow)
                              .addClass("slick-center")
                          : e === s.slideCount - 1 &&
                            i
                              .eq(s.options.slidesToShow)
                              .addClass("slick-center")),
                      s.$slides.eq(e).addClass("slick-center");
                  } else
                    e >= 0 && e <= s.slideCount - s.options.slidesToShow
                      ? s.$slides
                          .slice(e, e + s.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : i.length <= s.options.slidesToShow
                      ? i.addClass("slick-active").attr("aria-hidden", "false")
                      : ((o = s.slideCount % s.options.slidesToShow),
                        (n =
                          !0 === s.options.infinite
                            ? s.options.slidesToShow + e
                            : e),
                        s.options.slidesToShow == s.options.slidesToScroll &&
                        s.slideCount - e < s.options.slidesToShow
                          ? i
                              .slice(n - (s.options.slidesToShow - o), n + o)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : i
                              .slice(n, n + s.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false"));
                  ("ondemand" !== s.options.lazyLoad &&
                    "anticipated" !== s.options.lazyLoad) ||
                    s.lazyLoad();
                }),
                (t.prototype.setupInfinite = function () {
                  var t,
                    i,
                    n,
                    o = this;
                  if (
                    (!0 === o.options.fade && (o.options.centerMode = !1),
                    !0 === o.options.infinite &&
                      !1 === o.options.fade &&
                      ((i = null), o.slideCount > o.options.slidesToShow))
                  ) {
                    for (
                      n =
                        !0 === o.options.centerMode
                          ? o.options.slidesToShow + 1
                          : o.options.slidesToShow,
                        t = o.slideCount;
                      t > o.slideCount - n;
                      t -= 1
                    )
                      (i = t - 1),
                        e(o.$slides[i])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", i - o.slideCount)
                          .prependTo(o.$slideTrack)
                          .addClass("slick-cloned");
                    for (t = 0; t < n + o.slideCount; t += 1)
                      (i = t),
                        e(o.$slides[i])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", i + o.slideCount)
                          .appendTo(o.$slideTrack)
                          .addClass("slick-cloned");
                    o.$slideTrack
                      .find(".slick-cloned")
                      .find("[id]")
                      .each(function () {
                        e(this).attr("id", "");
                      });
                  }
                }),
                (t.prototype.interrupt = function (e) {
                  e || this.autoPlay(), (this.interrupted = e);
                }),
                (t.prototype.selectHandler = function (t) {
                  var i = this,
                    n = e(t.target).is(".slick-slide")
                      ? e(t.target)
                      : e(t.target).parents(".slick-slide"),
                    o = parseInt(n.attr("data-slick-index"));
                  o || (o = 0),
                    i.slideCount <= i.options.slidesToShow
                      ? i.slideHandler(o, !1, !0)
                      : i.slideHandler(o);
                }),
                (t.prototype.slideHandler = function (e, t, i) {
                  var n,
                    o,
                    s,
                    r,
                    a,
                    l = null,
                    c = this;
                  if (
                    ((t = t || !1),
                    !(
                      (!0 === c.animating && !0 === c.options.waitForAnimate) ||
                      (!0 === c.options.fade && c.currentSlide === e)
                    ))
                  )
                    if (
                      (!1 === t && c.asNavFor(e),
                      (n = e),
                      (l = c.getLeft(n)),
                      (r = c.getLeft(c.currentSlide)),
                      (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
                      !1 === c.options.infinite &&
                        !1 === c.options.centerMode &&
                        (e < 0 ||
                          e > c.getDotCount() * c.options.slidesToScroll))
                    )
                      !1 === c.options.fade &&
                        ((n = c.currentSlide),
                        !0 !== i
                          ? c.animateSlide(r, function () {
                              c.postSlide(n);
                            })
                          : c.postSlide(n));
                    else if (
                      !1 === c.options.infinite &&
                      !0 === c.options.centerMode &&
                      (e < 0 || e > c.slideCount - c.options.slidesToScroll)
                    )
                      !1 === c.options.fade &&
                        ((n = c.currentSlide),
                        !0 !== i
                          ? c.animateSlide(r, function () {
                              c.postSlide(n);
                            })
                          : c.postSlide(n));
                    else {
                      if (
                        (c.options.autoplay && clearInterval(c.autoPlayTimer),
                        (o =
                          n < 0
                            ? c.slideCount % c.options.slidesToScroll != 0
                              ? c.slideCount -
                                (c.slideCount % c.options.slidesToScroll)
                              : c.slideCount + n
                            : n >= c.slideCount
                            ? c.slideCount % c.options.slidesToScroll != 0
                              ? 0
                              : n - c.slideCount
                            : n),
                        (c.animating = !0),
                        c.$slider.trigger("beforeChange", [
                          c,
                          c.currentSlide,
                          o,
                        ]),
                        (s = c.currentSlide),
                        (c.currentSlide = o),
                        c.setSlideClasses(c.currentSlide),
                        c.options.asNavFor &&
                          (a = (a = c.getNavTarget()).slick("getSlick"))
                            .slideCount <= a.options.slidesToShow &&
                          a.setSlideClasses(c.currentSlide),
                        c.updateDots(),
                        c.updateArrows(),
                        !0 === c.options.fade)
                      )
                        return (
                          !0 !== i
                            ? (c.fadeSlideOut(s),
                              c.fadeSlide(o, function () {
                                c.postSlide(o);
                              }))
                            : c.postSlide(o),
                          void c.animateHeight()
                        );
                      !0 !== i
                        ? c.animateSlide(l, function () {
                            c.postSlide(o);
                          })
                        : c.postSlide(o);
                    }
                }),
                (t.prototype.startLoad = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.hide(), e.$nextArrow.hide()),
                    !0 === e.options.dots &&
                      e.slideCount > e.options.slidesToShow &&
                      e.$dots.hide(),
                    e.$slider.addClass("slick-loading");
                }),
                (t.prototype.swipeDirection = function () {
                  var e,
                    t,
                    i,
                    n,
                    o = this;
                  return (
                    (e = o.touchObject.startX - o.touchObject.curX),
                    (t = o.touchObject.startY - o.touchObject.curY),
                    (i = Math.atan2(t, e)),
                    (n = Math.round((180 * i) / Math.PI)) < 0 &&
                      (n = 360 - Math.abs(n)),
                    (n <= 45 && n >= 0) || (n <= 360 && n >= 315)
                      ? !1 === o.options.rtl
                        ? "left"
                        : "right"
                      : n >= 135 && n <= 225
                      ? !1 === o.options.rtl
                        ? "right"
                        : "left"
                      : !0 === o.options.verticalSwiping
                      ? n >= 35 && n <= 135
                        ? "down"
                        : "up"
                      : "vertical"
                  );
                }),
                (t.prototype.swipeEnd = function (e) {
                  var t,
                    i,
                    n = this;
                  if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
                    return (n.scrolling = !1), !1;
                  if (
                    ((n.interrupted = !1),
                    (n.shouldClick = !(n.touchObject.swipeLength > 10)),
                    void 0 === n.touchObject.curX)
                  )
                    return !1;
                  if (
                    (!0 === n.touchObject.edgeHit &&
                      n.$slider.trigger("edge", [n, n.swipeDirection()]),
                    n.touchObject.swipeLength >= n.touchObject.minSwipe)
                  ) {
                    switch ((i = n.swipeDirection())) {
                      case "left":
                      case "down":
                        (t = n.options.swipeToSlide
                          ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                          : n.currentSlide + n.getSlideCount()),
                          (n.currentDirection = 0);
                        break;
                      case "right":
                      case "up":
                        (t = n.options.swipeToSlide
                          ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                          : n.currentSlide - n.getSlideCount()),
                          (n.currentDirection = 1);
                    }
                    "vertical" != i &&
                      (n.slideHandler(t),
                      (n.touchObject = {}),
                      n.$slider.trigger("swipe", [n, i]));
                  } else
                    n.touchObject.startX !== n.touchObject.curX &&
                      (n.slideHandler(n.currentSlide), (n.touchObject = {}));
                }),
                (t.prototype.swipeHandler = function (e) {
                  var t = this;
                  if (
                    !(
                      !1 === t.options.swipe ||
                      ("ontouchend" in document && !1 === t.options.swipe) ||
                      (!1 === t.options.draggable &&
                        -1 !== e.type.indexOf("mouse"))
                    )
                  )
                    switch (
                      ((t.touchObject.fingerCount =
                        e.originalEvent && void 0 !== e.originalEvent.touches
                          ? e.originalEvent.touches.length
                          : 1),
                      (t.touchObject.minSwipe =
                        t.listWidth / t.options.touchThreshold),
                      !0 === t.options.verticalSwiping &&
                        (t.touchObject.minSwipe =
                          t.listHeight / t.options.touchThreshold),
                      e.data.action)
                    ) {
                      case "start":
                        t.swipeStart(e);
                        break;
                      case "move":
                        t.swipeMove(e);
                        break;
                      case "end":
                        t.swipeEnd(e);
                    }
                }),
                (t.prototype.swipeMove = function (e) {
                  var t,
                    i,
                    n,
                    o,
                    s,
                    r,
                    a = this;
                  return (
                    (s =
                      void 0 !== e.originalEvent
                        ? e.originalEvent.touches
                        : null),
                    !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
                      ((t = a.getLeft(a.currentSlide)),
                      (a.touchObject.curX =
                        void 0 !== s ? s[0].pageX : e.clientX),
                      (a.touchObject.curY =
                        void 0 !== s ? s[0].pageY : e.clientY),
                      (a.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                          Math.pow(a.touchObject.curX - a.touchObject.startX, 2)
                        )
                      )),
                      (r = Math.round(
                        Math.sqrt(
                          Math.pow(a.touchObject.curY - a.touchObject.startY, 2)
                        )
                      )),
                      !a.options.verticalSwiping && !a.swiping && r > 4
                        ? ((a.scrolling = !0), !1)
                        : (!0 === a.options.verticalSwiping &&
                            (a.touchObject.swipeLength = r),
                          (i = a.swipeDirection()),
                          void 0 !== e.originalEvent &&
                            a.touchObject.swipeLength > 4 &&
                            ((a.swiping = !0), e.preventDefault()),
                          (o =
                            (!1 === a.options.rtl ? 1 : -1) *
                            (a.touchObject.curX > a.touchObject.startX
                              ? 1
                              : -1)),
                          !0 === a.options.verticalSwiping &&
                            (o =
                              a.touchObject.curY > a.touchObject.startY
                                ? 1
                                : -1),
                          (n = a.touchObject.swipeLength),
                          (a.touchObject.edgeHit = !1),
                          !1 === a.options.infinite &&
                            ((0 === a.currentSlide && "right" === i) ||
                              (a.currentSlide >= a.getDotCount() &&
                                "left" === i)) &&
                            ((n =
                              a.touchObject.swipeLength *
                              a.options.edgeFriction),
                            (a.touchObject.edgeHit = !0)),
                          !1 === a.options.vertical
                            ? (a.swipeLeft = t + n * o)
                            : (a.swipeLeft =
                                t + n * (a.$list.height() / a.listWidth) * o),
                          !0 === a.options.verticalSwiping &&
                            (a.swipeLeft = t + n * o),
                          !0 !== a.options.fade &&
                            !1 !== a.options.touchMove &&
                            (!0 === a.animating
                              ? ((a.swipeLeft = null), !1)
                              : void a.setCSS(a.swipeLeft))))
                  );
                }),
                (t.prototype.swipeStart = function (e) {
                  var t,
                    i = this;
                  if (
                    ((i.interrupted = !0),
                    1 !== i.touchObject.fingerCount ||
                      i.slideCount <= i.options.slidesToShow)
                  )
                    return (i.touchObject = {}), !1;
                  void 0 !== e.originalEvent &&
                    void 0 !== e.originalEvent.touches &&
                    (t = e.originalEvent.touches[0]),
                    (i.touchObject.startX = i.touchObject.curX =
                      void 0 !== t ? t.pageX : e.clientX),
                    (i.touchObject.startY = i.touchObject.curY =
                      void 0 !== t ? t.pageY : e.clientY),
                    (i.dragging = !0);
                }),
                (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
                  function () {
                    var e = this;
                    null !== e.$slidesCache &&
                      (e.unload(),
                      e.$slideTrack.children(this.options.slide).detach(),
                      e.$slidesCache.appendTo(e.$slideTrack),
                      e.reinit());
                  }),
                (t.prototype.unload = function () {
                  var t = this;
                  e(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow &&
                      t.htmlExpr.test(t.options.prevArrow) &&
                      t.$prevArrow.remove(),
                    t.$nextArrow &&
                      t.htmlExpr.test(t.options.nextArrow) &&
                      t.$nextArrow.remove(),
                    t.$slides
                      .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                      )
                      .attr("aria-hidden", "true")
                      .css("width", "");
                }),
                (t.prototype.unslick = function (e) {
                  var t = this;
                  t.$slider.trigger("unslick", [t, e]), t.destroy();
                }),
                (t.prototype.updateArrows = function () {
                  var e = this;
                  Math.floor(e.options.slidesToShow / 2),
                    !0 === e.options.arrows &&
                      e.slideCount > e.options.slidesToShow &&
                      !e.options.infinite &&
                      (e.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      e.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      0 === e.currentSlide
                        ? (e.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          e.$nextArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"))
                        : ((e.currentSlide >=
                            e.slideCount - e.options.slidesToShow &&
                            !1 === e.options.centerMode) ||
                            (e.currentSlide >= e.slideCount - 1 &&
                              !0 === e.options.centerMode)) &&
                          (e.$nextArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          e.$prevArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false")));
                }),
                (t.prototype.updateDots = function () {
                  var e = this;
                  null !== e.$dots &&
                    (e.$dots.find("li").removeClass("slick-active").end(),
                    e.$dots
                      .find("li")
                      .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                      .addClass("slick-active"));
                }),
                (t.prototype.visibility = function () {
                  var e = this;
                  e.options.autoplay &&
                    (document[e.hidden]
                      ? (e.interrupted = !0)
                      : (e.interrupted = !1));
                }),
                (e.fn.slick = function () {
                  var e,
                    i,
                    n = this,
                    o = arguments[0],
                    s = Array.prototype.slice.call(arguments, 1),
                    r = n.length;
                  for (e = 0; e < r; e++)
                    if (
                      ("object" == typeof o || void 0 === o
                        ? (n[e].slick = new t(n[e], o))
                        : (i = n[e].slick[o].apply(n[e].slick, s)),
                      void 0 !== i)
                    )
                      return i;
                  return n;
                });
            }),
            void 0 === (s = n.apply(t, o)) || (e.exports = s);
        })();
      },
      571: function (e) {
        "use strict";
        var t = (function () {
          function e(t) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (
              ((function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              !(t instanceof Node))
            )
              throw (
                "Can't initialize VanillaTilt because " + t + " is not a Node."
              );
            (this.width = null),
              (this.height = null),
              (this.clientWidth = null),
              (this.clientHeight = null),
              (this.left = null),
              (this.top = null),
              (this.gammazero = null),
              (this.betazero = null),
              (this.lastgammazero = null),
              (this.lastbetazero = null),
              (this.transitionTimeout = null),
              (this.updateCall = null),
              (this.event = null),
              (this.updateBind = this.update.bind(this)),
              (this.resetBind = this.reset.bind(this)),
              (this.element = t),
              (this.settings = this.extendSettings(i)),
              (this.reverse = this.settings.reverse ? -1 : 1),
              (this.resetToStart = e.isSettingTrue(
                this.settings["reset-to-start"]
              )),
              (this.glare = e.isSettingTrue(this.settings.glare)),
              (this.glarePrerender = e.isSettingTrue(
                this.settings["glare-prerender"]
              )),
              (this.fullPageListening = e.isSettingTrue(
                this.settings["full-page-listening"]
              )),
              (this.gyroscope = e.isSettingTrue(this.settings.gyroscope)),
              (this.gyroscopeSamples = this.settings.gyroscopeSamples),
              (this.elementListener = this.getElementListener()),
              this.glare && this.prepareGlare(),
              this.fullPageListening && this.updateClientSize(),
              this.addEventListeners(),
              this.reset(),
              !1 === this.resetToStart &&
                ((this.settings.startX = 0), (this.settings.startY = 0));
          }
          return (
            (e.isSettingTrue = function (e) {
              return "" === e || !0 === e || 1 === e;
            }),
            (e.prototype.getElementListener = function () {
              if (this.fullPageListening) return window.document;
              if ("string" == typeof this.settings["mouse-event-element"]) {
                var e = document.querySelector(
                  this.settings["mouse-event-element"]
                );
                if (e) return e;
              }
              return this.settings["mouse-event-element"] instanceof Node
                ? this.settings["mouse-event-element"]
                : this.element;
            }),
            (e.prototype.addEventListeners = function () {
              (this.onMouseEnterBind = this.onMouseEnter.bind(this)),
                (this.onMouseMoveBind = this.onMouseMove.bind(this)),
                (this.onMouseLeaveBind = this.onMouseLeave.bind(this)),
                (this.onWindowResizeBind = this.onWindowResize.bind(this)),
                (this.onDeviceOrientationBind =
                  this.onDeviceOrientation.bind(this)),
                this.elementListener.addEventListener(
                  "mouseenter",
                  this.onMouseEnterBind
                ),
                this.elementListener.addEventListener(
                  "mouseleave",
                  this.onMouseLeaveBind
                ),
                this.elementListener.addEventListener(
                  "mousemove",
                  this.onMouseMoveBind
                ),
                (this.glare || this.fullPageListening) &&
                  window.addEventListener("resize", this.onWindowResizeBind),
                this.gyroscope &&
                  window.addEventListener(
                    "deviceorientation",
                    this.onDeviceOrientationBind
                  );
            }),
            (e.prototype.removeEventListeners = function () {
              this.elementListener.removeEventListener(
                "mouseenter",
                this.onMouseEnterBind
              ),
                this.elementListener.removeEventListener(
                  "mouseleave",
                  this.onMouseLeaveBind
                ),
                this.elementListener.removeEventListener(
                  "mousemove",
                  this.onMouseMoveBind
                ),
                this.gyroscope &&
                  window.removeEventListener(
                    "deviceorientation",
                    this.onDeviceOrientationBind
                  ),
                (this.glare || this.fullPageListening) &&
                  window.removeEventListener("resize", this.onWindowResizeBind);
            }),
            (e.prototype.destroy = function () {
              clearTimeout(this.transitionTimeout),
                null !== this.updateCall &&
                  cancelAnimationFrame(this.updateCall),
                (this.element.style.willChange = ""),
                (this.element.style.transition = ""),
                (this.element.style.transform = ""),
                this.resetGlare(),
                this.removeEventListeners(),
                (this.element.vanillaTilt = null),
                delete this.element.vanillaTilt,
                (this.element = null);
            }),
            (e.prototype.onDeviceOrientation = function (e) {
              if (null !== e.gamma && null !== e.beta) {
                this.updateElementPosition(),
                  this.gyroscopeSamples > 0 &&
                    ((this.lastgammazero = this.gammazero),
                    (this.lastbetazero = this.betazero),
                    null === this.gammazero
                      ? ((this.gammazero = e.gamma), (this.betazero = e.beta))
                      : ((this.gammazero = (e.gamma + this.lastgammazero) / 2),
                        (this.betazero = (e.beta + this.lastbetazero) / 2)),
                    (this.gyroscopeSamples -= 1));
                var t =
                    this.settings.gyroscopeMaxAngleX -
                    this.settings.gyroscopeMinAngleX,
                  i =
                    this.settings.gyroscopeMaxAngleY -
                    this.settings.gyroscopeMinAngleY,
                  n = t / this.width,
                  o = i / this.height,
                  s =
                    (e.gamma -
                      (this.settings.gyroscopeMinAngleX + this.gammazero)) /
                    n,
                  r =
                    (e.beta -
                      (this.settings.gyroscopeMinAngleY + this.betazero)) /
                    o;
                null !== this.updateCall &&
                  cancelAnimationFrame(this.updateCall),
                  (this.event = {
                    clientX: s + this.left,
                    clientY: r + this.top,
                  }),
                  (this.updateCall = requestAnimationFrame(this.updateBind));
              }
            }),
            (e.prototype.onMouseEnter = function () {
              this.updateElementPosition(),
                (this.element.style.willChange = "transform"),
                this.setTransition();
            }),
            (e.prototype.onMouseMove = function (e) {
              null !== this.updateCall && cancelAnimationFrame(this.updateCall),
                (this.event = e),
                (this.updateCall = requestAnimationFrame(this.updateBind));
            }),
            (e.prototype.onMouseLeave = function () {
              this.setTransition(),
                this.settings.reset && requestAnimationFrame(this.resetBind);
            }),
            (e.prototype.reset = function () {
              this.onMouseEnter(),
                this.fullPageListening
                  ? (this.event = {
                      clientX:
                        ((this.settings.startX + this.settings.max) /
                          (2 * this.settings.max)) *
                        this.clientWidth,
                      clientY:
                        ((this.settings.startY + this.settings.max) /
                          (2 * this.settings.max)) *
                        this.clientHeight,
                    })
                  : (this.event = {
                      clientX:
                        this.left +
                        ((this.settings.startX + this.settings.max) /
                          (2 * this.settings.max)) *
                          this.width,
                      clientY:
                        this.top +
                        ((this.settings.startY + this.settings.max) /
                          (2 * this.settings.max)) *
                          this.height,
                    });
              var e = this.settings.scale;
              (this.settings.scale = 1),
                this.update(),
                (this.settings.scale = e),
                this.resetGlare();
            }),
            (e.prototype.resetGlare = function () {
              this.glare &&
                ((this.glareElement.style.transform =
                  "rotate(180deg) translate(-50%, -50%)"),
                (this.glareElement.style.opacity = "0"));
            }),
            (e.prototype.getValues = function () {
              var e = void 0,
                t = void 0;
              return (
                this.fullPageListening
                  ? ((e = this.event.clientX / this.clientWidth),
                    (t = this.event.clientY / this.clientHeight))
                  : ((e = (this.event.clientX - this.left) / this.width),
                    (t = (this.event.clientY - this.top) / this.height)),
                (e = Math.min(Math.max(e, 0), 1)),
                (t = Math.min(Math.max(t, 0), 1)),
                {
                  tiltX: (
                    this.reverse *
                    (this.settings.max - e * this.settings.max * 2)
                  ).toFixed(2),
                  tiltY: (
                    this.reverse *
                    (t * this.settings.max * 2 - this.settings.max)
                  ).toFixed(2),
                  percentageX: 100 * e,
                  percentageY: 100 * t,
                  angle:
                    Math.atan2(
                      this.event.clientX - (this.left + this.width / 2),
                      -(this.event.clientY - (this.top + this.height / 2))
                    ) *
                    (180 / Math.PI),
                }
              );
            }),
            (e.prototype.updateElementPosition = function () {
              var e = this.element.getBoundingClientRect();
              (this.width = this.element.offsetWidth),
                (this.height = this.element.offsetHeight),
                (this.left = e.left),
                (this.top = e.top);
            }),
            (e.prototype.update = function () {
              var e = this.getValues();
              (this.element.style.transform =
                "perspective(" +
                this.settings.perspective +
                "px) rotateX(" +
                ("x" === this.settings.axis ? 0 : e.tiltY) +
                "deg) rotateY(" +
                ("y" === this.settings.axis ? 0 : e.tiltX) +
                "deg) scale3d(" +
                this.settings.scale +
                ", " +
                this.settings.scale +
                ", " +
                this.settings.scale +
                ")"),
                this.glare &&
                  ((this.glareElement.style.transform =
                    "rotate(" + e.angle + "deg) translate(-50%, -50%)"),
                  (this.glareElement.style.opacity =
                    "" + (e.percentageY * this.settings["max-glare"]) / 100)),
                this.element.dispatchEvent(
                  new CustomEvent("tiltChange", { detail: e })
                ),
                (this.updateCall = null);
            }),
            (e.prototype.prepareGlare = function () {
              if (!this.glarePrerender) {
                var e = document.createElement("div");
                e.classList.add("js-tilt-glare");
                var t = document.createElement("div");
                t.classList.add("js-tilt-glare-inner"),
                  e.appendChild(t),
                  this.element.appendChild(e);
              }
              (this.glareElementWrapper =
                this.element.querySelector(".js-tilt-glare")),
                (this.glareElement = this.element.querySelector(
                  ".js-tilt-glare-inner"
                )),
                this.glarePrerender ||
                  (Object.assign(this.glareElementWrapper.style, {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    "pointer-events": "none",
                    "border-radius": "inherit",
                  }),
                  Object.assign(this.glareElement.style, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    "pointer-events": "none",
                    "background-image":
                      "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    transform: "rotate(180deg) translate(-50%, -50%)",
                    "transform-origin": "0% 0%",
                    opacity: "0",
                  }),
                  this.updateGlareSize());
            }),
            (e.prototype.updateGlareSize = function () {
              if (this.glare) {
                var e =
                  2 *
                  (this.element.offsetWidth > this.element.offsetHeight
                    ? this.element.offsetWidth
                    : this.element.offsetHeight);
                Object.assign(this.glareElement.style, {
                  width: e + "px",
                  height: e + "px",
                });
              }
            }),
            (e.prototype.updateClientSize = function () {
              (this.clientWidth =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth),
                (this.clientHeight =
                  window.innerHeight ||
                  document.documentElement.clientHeight ||
                  document.body.clientHeight);
            }),
            (e.prototype.onWindowResize = function () {
              this.updateGlareSize(), this.updateClientSize();
            }),
            (e.prototype.setTransition = function () {
              var e = this;
              clearTimeout(this.transitionTimeout),
                (this.element.style.transition =
                  this.settings.speed + "ms " + this.settings.easing),
                this.glare &&
                  (this.glareElement.style.transition =
                    "opacity " +
                    this.settings.speed +
                    "ms " +
                    this.settings.easing),
                (this.transitionTimeout = setTimeout(function () {
                  (e.element.style.transition = ""),
                    e.glare && (e.glareElement.style.transition = "");
                }, this.settings.speed));
            }),
            (e.prototype.extendSettings = function (e) {
              var t = {
                  reverse: !1,
                  max: 15,
                  startX: 0,
                  startY: 0,
                  perspective: 1e3,
                  easing: "cubic-bezier(.03,.98,.52,.99)",
                  scale: 1,
                  speed: 300,
                  transition: !0,
                  axis: null,
                  glare: !1,
                  "max-glare": 1,
                  "glare-prerender": !1,
                  "full-page-listening": !1,
                  "mouse-event-element": null,
                  reset: !0,
                  "reset-to-start": !0,
                  gyroscope: !0,
                  gyroscopeMinAngleX: -45,
                  gyroscopeMaxAngleX: 45,
                  gyroscopeMinAngleY: -45,
                  gyroscopeMaxAngleY: 45,
                  gyroscopeSamples: 10,
                },
                i = {};
              for (var n in t)
                if (n in e) i[n] = e[n];
                else if (this.element.hasAttribute("data-tilt-" + n)) {
                  var o = this.element.getAttribute("data-tilt-" + n);
                  try {
                    i[n] = JSON.parse(o);
                  } catch (e) {
                    i[n] = o;
                  }
                } else i[n] = t[n];
              return i;
            }),
            (e.init = function (t, i) {
              t instanceof Node && (t = [t]),
                t instanceof NodeList && (t = [].slice.call(t)),
                t instanceof Array &&
                  t.forEach(function (t) {
                    "vanillaTilt" in t || (t.vanillaTilt = new e(t, i));
                  });
            }),
            e
          );
        })();
        "undefined" != typeof document &&
          ((window.VanillaTilt = t),
          t.init(document.querySelectorAll("[data-tilt]"))),
          (e.exports = t);
      },
      799: function () {
        (function () {
          var e,
            t,
            i,
            n,
            o,
            s = function (e, t) {
              return function () {
                return e.apply(t, arguments);
              };
            },
            r =
              [].indexOf ||
              function (e) {
                for (var t = 0, i = this.length; t < i; t++)
                  if (t in this && this[t] === e) return t;
                return -1;
              };
          (t = (function () {
            function e() {}
            return (
              (e.prototype.extend = function (e, t) {
                var i, n;
                for (i in t) (n = t[i]), null == e[i] && (e[i] = n);
                return e;
              }),
              (e.prototype.isMobile = function (e) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  e
                );
              }),
              (e.prototype.createEvent = function (e, t, i, n) {
                var o;
                return (
                  null == t && (t = !1),
                  null == i && (i = !1),
                  null == n && (n = null),
                  null != document.createEvent
                    ? (o = document.createEvent("CustomEvent")).initCustomEvent(
                        e,
                        t,
                        i,
                        n
                      )
                    : null != document.createEventObject
                    ? ((o = document.createEventObject()).eventType = e)
                    : (o.eventName = e),
                  o
                );
              }),
              (e.prototype.emitEvent = function (e, t) {
                return null != e.dispatchEvent
                  ? e.dispatchEvent(t)
                  : t in (null != e)
                  ? e[t]()
                  : "on" + t in (null != e)
                  ? e["on" + t]()
                  : void 0;
              }),
              (e.prototype.addEvent = function (e, t, i) {
                return null != e.addEventListener
                  ? e.addEventListener(t, i, !1)
                  : null != e.attachEvent
                  ? e.attachEvent("on" + t, i)
                  : (e[t] = i);
              }),
              (e.prototype.removeEvent = function (e, t, i) {
                return null != e.removeEventListener
                  ? e.removeEventListener(t, i, !1)
                  : null != e.detachEvent
                  ? e.detachEvent("on" + t, i)
                  : delete e[t];
              }),
              (e.prototype.innerHeight = function () {
                return "innerHeight" in window
                  ? window.innerHeight
                  : document.documentElement.clientHeight;
              }),
              e
            );
          })()),
            (i =
              this.WeakMap ||
              this.MozWeakMap ||
              (i = (function () {
                function e() {
                  (this.keys = []), (this.values = []);
                }
                return (
                  (e.prototype.get = function (e) {
                    var t, i, n, o;
                    for (t = i = 0, n = (o = this.keys).length; i < n; t = ++i)
                      if (o[t] === e) return this.values[t];
                  }),
                  (e.prototype.set = function (e, t) {
                    var i, n, o, s;
                    for (i = n = 0, o = (s = this.keys).length; n < o; i = ++n)
                      if (s[i] === e) return void (this.values[i] = t);
                    return this.keys.push(e), this.values.push(t);
                  }),
                  e
                );
              })())),
            (e =
              this.MutationObserver ||
              this.WebkitMutationObserver ||
              this.MozMutationObserver ||
              (e = (function () {
                function e() {
                  "undefined" != typeof console &&
                    null !== console &&
                    console.warn(
                      "MutationObserver is not supported by your browser."
                    ),
                    "undefined" != typeof console &&
                      null !== console &&
                      console.warn(
                        "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                      );
                }
                return (
                  (e.notSupported = !0),
                  (e.prototype.observe = function () {}),
                  e
                );
              })())),
            (n =
              this.getComputedStyle ||
              function (e, t) {
                return (
                  (this.getPropertyValue = function (t) {
                    var i;
                    return (
                      "float" === t && (t = "styleFloat"),
                      o.test(t) &&
                        t.replace(o, function (e, t) {
                          return t.toUpperCase();
                        }),
                      (null != (i = e.currentStyle) ? i[t] : void 0) || null
                    );
                  }),
                  this
                );
              }),
            (o = /(\-([a-z]){1})/g),
            (this.WOW = (function () {
              function o(e) {
                null == e && (e = {}),
                  (this.scrollCallback = s(this.scrollCallback, this)),
                  (this.scrollHandler = s(this.scrollHandler, this)),
                  (this.resetAnimation = s(this.resetAnimation, this)),
                  (this.start = s(this.start, this)),
                  (this.scrolled = !0),
                  (this.config = this.util().extend(e, this.defaults)),
                  null != e.scrollContainer &&
                    (this.config.scrollContainer = document.querySelector(
                      e.scrollContainer
                    )),
                  (this.animationNameCache = new i()),
                  (this.wowEvent = this.util().createEvent(
                    this.config.boxClass
                  ));
              }
              return (
                (o.prototype.defaults = {
                  boxClass: "wow",
                  animateClass: "animated",
                  offset: 0,
                  mobile: !0,
                  live: !0,
                  callback: null,
                  scrollContainer: null,
                }),
                (o.prototype.init = function () {
                  var e;
                  return (
                    (this.element = window.document.documentElement),
                    "interactive" === (e = document.readyState) ||
                    "complete" === e
                      ? this.start()
                      : this.util().addEvent(
                          document,
                          "DOMContentLoaded",
                          this.start
                        ),
                    (this.finished = [])
                  );
                }),
                (o.prototype.start = function () {
                  var t, i, n, o, s;
                  if (
                    ((this.stopped = !1),
                    (this.boxes = function () {
                      var e, i, n, o;
                      for (
                        o = [],
                          e = 0,
                          i = (n = this.element.querySelectorAll(
                            "." + this.config.boxClass
                          )).length;
                        e < i;
                        e++
                      )
                        (t = n[e]), o.push(t);
                      return o;
                    }.call(this)),
                    (this.all = function () {
                      var e, i, n, o;
                      for (
                        o = [], e = 0, i = (n = this.boxes).length;
                        e < i;
                        e++
                      )
                        (t = n[e]), o.push(t);
                      return o;
                    }.call(this)),
                    this.boxes.length)
                  )
                    if (this.disabled()) this.resetStyle();
                    else
                      for (i = 0, n = (o = this.boxes).length; i < n; i++)
                        (t = o[i]), this.applyStyle(t, !0);
                  if (
                    (this.disabled() ||
                      (this.util().addEvent(
                        this.config.scrollContainer || window,
                        "scroll",
                        this.scrollHandler
                      ),
                      this.util().addEvent(
                        window,
                        "resize",
                        this.scrollHandler
                      ),
                      (this.interval = setInterval(this.scrollCallback, 50))),
                    this.config.live)
                  )
                    return new e(
                      ((s = this),
                      function (e) {
                        var t, i, n, o, r;
                        for (r = [], t = 0, i = e.length; t < i; t++)
                          (o = e[t]),
                            r.push(
                              function () {
                                var e, t, i, s;
                                for (
                                  s = [],
                                    e = 0,
                                    t = (i = o.addedNodes || []).length;
                                  e < t;
                                  e++
                                )
                                  (n = i[e]), s.push(this.doSync(n));
                                return s;
                              }.call(s)
                            );
                        return r;
                      })
                    ).observe(document.body, { childList: !0, subtree: !0 });
                }),
                (o.prototype.stop = function () {
                  if (
                    ((this.stopped = !0),
                    this.util().removeEvent(
                      this.config.scrollContainer || window,
                      "scroll",
                      this.scrollHandler
                    ),
                    this.util().removeEvent(
                      window,
                      "resize",
                      this.scrollHandler
                    ),
                    null != this.interval)
                  )
                    return clearInterval(this.interval);
                }),
                (o.prototype.sync = function (t) {
                  if (e.notSupported) return this.doSync(this.element);
                }),
                (o.prototype.doSync = function (e) {
                  var t, i, n, o, s;
                  if ((null == e && (e = this.element), 1 === e.nodeType)) {
                    for (
                      s = [],
                        i = 0,
                        n = (o = (e = e.parentNode || e).querySelectorAll(
                          "." + this.config.boxClass
                        )).length;
                      i < n;
                      i++
                    )
                      (t = o[i]),
                        r.call(this.all, t) < 0
                          ? (this.boxes.push(t),
                            this.all.push(t),
                            this.stopped || this.disabled()
                              ? this.resetStyle()
                              : this.applyStyle(t, !0),
                            s.push((this.scrolled = !0)))
                          : s.push(void 0);
                    return s;
                  }
                }),
                (o.prototype.show = function (e) {
                  return (
                    this.applyStyle(e),
                    (e.className =
                      e.className + " " + this.config.animateClass),
                    null != this.config.callback && this.config.callback(e),
                    this.util().emitEvent(e, this.wowEvent),
                    this.util().addEvent(
                      e,
                      "animationend",
                      this.resetAnimation
                    ),
                    this.util().addEvent(
                      e,
                      "oanimationend",
                      this.resetAnimation
                    ),
                    this.util().addEvent(
                      e,
                      "webkitAnimationEnd",
                      this.resetAnimation
                    ),
                    this.util().addEvent(
                      e,
                      "MSAnimationEnd",
                      this.resetAnimation
                    ),
                    e
                  );
                }),
                (o.prototype.applyStyle = function (e, t) {
                  var i, n, o, s;
                  return (
                    (n = e.getAttribute("data-wow-duration")),
                    (i = e.getAttribute("data-wow-delay")),
                    (o = e.getAttribute("data-wow-iteration")),
                    this.animate(
                      ((s = this),
                      function () {
                        return s.customStyle(e, t, n, i, o);
                      })
                    )
                  );
                }),
                (o.prototype.animate =
                  "requestAnimationFrame" in window
                    ? function (e) {
                        return window.requestAnimationFrame(e);
                      }
                    : function (e) {
                        return e();
                      }),
                (o.prototype.resetStyle = function () {
                  var e, t, i, n, o;
                  for (o = [], t = 0, i = (n = this.boxes).length; t < i; t++)
                    (e = n[t]), o.push((e.style.visibility = "visible"));
                  return o;
                }),
                (o.prototype.resetAnimation = function (e) {
                  var t;
                  if (e.type.toLowerCase().indexOf("animationend") >= 0)
                    return ((t = e.target || e.srcElement).className =
                      t.className.replace(this.config.animateClass, "").trim());
                }),
                (o.prototype.customStyle = function (e, t, i, n, o) {
                  return (
                    t && this.cacheAnimationName(e),
                    (e.style.visibility = t ? "hidden" : "visible"),
                    i && this.vendorSet(e.style, { animationDuration: i }),
                    n && this.vendorSet(e.style, { animationDelay: n }),
                    o &&
                      this.vendorSet(e.style, { animationIterationCount: o }),
                    this.vendorSet(e.style, {
                      animationName: t ? "none" : this.cachedAnimationName(e),
                    }),
                    e
                  );
                }),
                (o.prototype.vendors = ["moz", "webkit"]),
                (o.prototype.vendorSet = function (e, t) {
                  var i, n, o, s;
                  for (i in ((n = []), t))
                    (o = t[i]),
                      (e["" + i] = o),
                      n.push(
                        function () {
                          var t, n, r, a;
                          for (
                            a = [], t = 0, n = (r = this.vendors).length;
                            t < n;
                            t++
                          )
                            (s = r[t]),
                              a.push(
                                (e[
                                  "" +
                                    s +
                                    i.charAt(0).toUpperCase() +
                                    i.substr(1)
                                ] = o)
                              );
                          return a;
                        }.call(this)
                      );
                  return n;
                }),
                (o.prototype.vendorCSS = function (e, t) {
                  var i, o, s, r, a, l;
                  for (
                    r = (a = n(e)).getPropertyCSSValue(t),
                      i = 0,
                      o = (s = this.vendors).length;
                    i < o;
                    i++
                  )
                    (l = s[i]),
                      (r = r || a.getPropertyCSSValue("-" + l + "-" + t));
                  return r;
                }),
                (o.prototype.animationName = function (e) {
                  var t;
                  try {
                    t = this.vendorCSS(e, "animation-name").cssText;
                  } catch (i) {
                    t = n(e).getPropertyValue("animation-name");
                  }
                  return "none" === t ? "" : t;
                }),
                (o.prototype.cacheAnimationName = function (e) {
                  return this.animationNameCache.set(e, this.animationName(e));
                }),
                (o.prototype.cachedAnimationName = function (e) {
                  return this.animationNameCache.get(e);
                }),
                (o.prototype.scrollHandler = function () {
                  return (this.scrolled = !0);
                }),
                (o.prototype.scrollCallback = function () {
                  var e;
                  if (
                    this.scrolled &&
                    ((this.scrolled = !1),
                    (this.boxes = function () {
                      var t, i, n, o;
                      for (
                        o = [], t = 0, i = (n = this.boxes).length;
                        t < i;
                        t++
                      )
                        (e = n[t]) &&
                          (this.isVisible(e) ? this.show(e) : o.push(e));
                      return o;
                    }.call(this)),
                    !this.boxes.length && !this.config.live)
                  )
                    return this.stop();
                }),
                (o.prototype.offsetTop = function (e) {
                  for (var t; void 0 === e.offsetTop; ) e = e.parentNode;
                  for (t = e.offsetTop; (e = e.offsetParent); )
                    t += e.offsetTop;
                  return t;
                }),
                (o.prototype.isVisible = function (e) {
                  var t, i, n, o, s;
                  return (
                    (i =
                      e.getAttribute("data-wow-offset") || this.config.offset),
                    (o =
                      (s =
                        (this.config.scrollContainer &&
                          this.config.scrollContainer.scrollTop) ||
                        window.pageYOffset) +
                      Math.min(
                        this.element.clientHeight,
                        this.util().innerHeight()
                      ) -
                      i),
                    (t = (n = this.offsetTop(e)) + e.clientHeight),
                    n <= o && t >= s
                  );
                }),
                (o.prototype.util = function () {
                  return null != this._util
                    ? this._util
                    : (this._util = new t());
                }),
                (o.prototype.disabled = function () {
                  return (
                    !this.config.mobile &&
                    this.util().isMobile(navigator.userAgent)
                  );
                }),
                o
              );
            })());
        }).call(this);
      },
    },
    t = {};
  function i(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var s = (t[n] = { exports: {} });
    return e[n].call(s.exports, s, s.exports, i), s.exports;
  }
  (i.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return i.d(t, { a: t }), t;
  }),
    (i.d = function (e, t) {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      i(443), i(458), i(969), i(217), i(720);
      var e = i(799),
        t = i.n(e),
        n = i(661),
        o = i.n(n),
        s = (i(959), i(571)),
        r = i.n(s);
      i(505),
        i(309),
        i(62),
        new (t().WOW)({ live: !1 }).init(),
        o().init({ offset: 40, duration: 1e3, easing: "ease" }),
        r().init(document.querySelectorAll("[data-tilt]"), {
          max: 16,
          speed: 500,
          perspective: 5e3,
          scale: 1.06,
        });
    })();
})();
