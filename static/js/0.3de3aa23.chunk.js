/*! For license information please see 0.3de3aa23.chunk.js.LICENSE.txt */
(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [0], {
        1099: function(e, n, t) {
            "use strict";
            var r = t(1100),
                i = t(1101);
            e.exports = i, i.prototype.message = function(e, n, t) {
                var i = new r(e, n, t);
                this.path && (i.name = this.path + ":" + i.name, i.file = this.path);
                return i.fatal = !1, this.messages.push(i), i
            }, i.prototype.info = function() { var e = this.message.apply(this, arguments); return e.fatal = null, e }, i.prototype.fail = function() { var e = this.message.apply(this, arguments); throw e.fatal = !0, e }
        },
        1100: function(e, n, t) {
            "use strict";
            var r = t(961);

            function i() {}
            e.exports = u, i.prototype = Error.prototype, u.prototype = new i;
            var o = u.prototype;

            function u(e, n, t) { var i, o, u; "string" === typeof n && (t = n, n = null), i = function(e) { var n, t = [null, null]; "string" === typeof e && (-1 === (n = e.indexOf(":")) ? t[1] = e : (t[0] = e.slice(0, n), t[1] = e.slice(n + 1))); return t }(t), o = r(n) || "1:1", u = { start: { line: null, column: null }, end: { line: null, column: null } }, n && n.position && (n = n.position), n && (n.start ? (u = n, n = n.start) : u.start = n), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = o, this.reason = e, this.line = n ? n.line : null, this.column = n ? n.column : null, this.location = u, this.source = i[0], this.ruleId = i[1] }
            o.file = "", o.name = "", o.reason = "", o.message = "", o.stack = "", o.fatal = null, o.column = null, o.line = null
        },
        1101: function(e, n, t) {
            "use strict";
            var r = t(1102),
                i = t(1103),
                o = t(962);
            e.exports = a;
            var u = {}.hasOwnProperty,
                l = ["history", "path", "basename", "stem", "extname", "dirname"];

            function a(e) {
                var n, t;
                if (e) {
                    if ("string" === typeof e || o(e)) e = { contents: e };
                    else if ("message" in e && "messages" in e) return e
                } else e = {};
                if (!(this instanceof a)) return new a(e);
                for (this.data = {}, this.messages = [], this.history = [], this.cwd = i.cwd(), t = -1; ++t < l.length;) n = l[t], u.call(e, n) && (this[n] = e[n]);
                for (n in e) l.indexOf(n) < 0 && (this[n] = e[n])
            }

            function c(e, n) { if (e && e.indexOf(r.sep) > -1) throw new Error("`" + n + "` cannot be a path: did not expect `" + r.sep + "`") }

            function s(e, n) { if (!e) throw new Error("`" + n + "` cannot be empty") }

            function f(e, n) { if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too") }
            a.prototype.toString = function(e) { return (this.contents || "").toString(e) }, Object.defineProperty(a.prototype, "path", { get: function() { return this.history[this.history.length - 1] }, set: function(e) { s(e, "path"), this.path !== e && this.history.push(e) } }), Object.defineProperty(a.prototype, "dirname", { get: function() { return "string" === typeof this.path ? r.dirname(this.path) : void 0 }, set: function(e) { f(this.path, "dirname"), this.path = r.join(e || "", this.basename) } }), Object.defineProperty(a.prototype, "basename", { get: function() { return "string" === typeof this.path ? r.basename(this.path) : void 0 }, set: function(e) { s(e, "basename"), c(e, "basename"), this.path = r.join(this.dirname || "", e) } }), Object.defineProperty(a.prototype, "extname", {
                get: function() { return "string" === typeof this.path ? r.extname(this.path) : void 0 },
                set: function(e) {
                    if (c(e, "extname"), f(this.path, "extname"), e) { if (46 !== e.charCodeAt(0)) throw new Error("`extname` must start with `.`"); if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots") }
                    this.path = r.join(this.dirname, this.stem + (e || ""))
                }
            }), Object.defineProperty(a.prototype, "stem", { get: function() { return "string" === typeof this.path ? r.basename(this.path, this.extname) : void 0 }, set: function(e) { s(e, "stem"), c(e, "stem"), this.path = r.join(this.dirname || "", e + (this.extname || "")) } })
        },
        1102: function(e, n, t) {
            "use strict";

            function r(e) {
                var n, t;
                return i(e), n = 47 === e.charCodeAt(0), (t = function(e, n) {
                    var t, r, i = "",
                        o = 0,
                        u = -1,
                        l = 0,
                        a = -1;
                    for (; ++a <= e.length;) {
                        if (a < e.length) t = e.charCodeAt(a);
                        else {
                            if (47 === t) break;
                            t = 47
                        }
                        if (47 === t) {
                            if (u === a - 1 || 1 === l);
                            else if (u !== a - 1 && 2 === l) {
                                if (i.length < 2 || 2 !== o || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                    if (i.length > 2) { if ((r = i.lastIndexOf("/")) !== i.length - 1) { r < 0 ? (i = "", o = 0) : o = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), u = a, l = 0; continue } } else if (i.length) { i = "", o = 0, u = a, l = 0; continue }
                                n && (i = i.length ? i + "/.." : "..", o = 2)
                            } else i.length ? i += "/" + e.slice(u + 1, a) : i = e.slice(u + 1, a), o = a - u - 1;
                            u = a, l = 0
                        } else 46 === t && l > -1 ? l++ : l = -1
                    }
                    return i
                }(e, !n)).length || n || (t = "."), t.length && 47 === e.charCodeAt(e.length - 1) && (t += "/"), n ? "/" + t : t
            }

            function i(e) { if ("string" !== typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e)) }
            n.basename = function(e, n) {
                var t, r, o, u, l = 0,
                    a = -1;
                if (void 0 !== n && "string" !== typeof n) throw new TypeError('"ext" argument must be a string');
                if (i(e), t = e.length, void 0 === n || !n.length || n.length > e.length) {
                    for (; t--;)
                        if (47 === e.charCodeAt(t)) { if (o) { l = t + 1; break } } else a < 0 && (o = !0, a = t + 1);
                    return a < 0 ? "" : e.slice(l, a)
                }
                if (n === e) return "";
                r = -1, u = n.length - 1;
                for (; t--;)
                    if (47 === e.charCodeAt(t)) { if (o) { l = t + 1; break } } else r < 0 && (o = !0, r = t + 1), u > -1 && (e.charCodeAt(t) === n.charCodeAt(u--) ? u < 0 && (a = t) : (u = -1, a = r));
                l === a ? a = r : a < 0 && (a = e.length);
                return e.slice(l, a)
            }, n.dirname = function(e) {
                var n, t, r;
                if (i(e), !e.length) return ".";
                n = -1, r = e.length;
                for (; --r;)
                    if (47 === e.charCodeAt(r)) { if (t) { n = r; break } } else t || (t = !0);
                return n < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === n && 47 === e.charCodeAt(0) ? "//" : e.slice(0, n)
            }, n.extname = function(e) {
                var n, t, r, o = -1,
                    u = 0,
                    l = -1,
                    a = 0;
                i(e), r = e.length;
                for (; r--;)
                    if (47 !== (t = e.charCodeAt(r))) l < 0 && (n = !0, l = r + 1), 46 === t ? o < 0 ? o = r : 1 !== a && (a = 1) : o > -1 && (a = -1);
                    else if (n) { u = r + 1; break }
                if (o < 0 || l < 0 || 0 === a || 1 === a && o === l - 1 && o === u + 1) return "";
                return e.slice(o, l)
            }, n.join = function() { var e, n = -1; for (; ++n < arguments.length;) i(arguments[n]), arguments[n] && (e = void 0 === e ? arguments[n] : e + "/" + arguments[n]); return void 0 === e ? "." : r(e) }, n.sep = "/"
        },
        1103: function(e, n, t) {
            "use strict";
            n.cwd = function() { return "/" }
        },
        1104: function(e, n, t) {
            "use strict";
            var r = t(1105),
                i = t(962),
                o = t(1106),
                u = t(1107),
                l = t(1108),
                a = t(960);
            e.exports = function e() {
                var n, t = [],
                    i = l(),
                    x = {},
                    y = -1;
                return k.data = function(e, t) { if ("string" === typeof e) return 2 === arguments.length ? (m("data", n), x[e] = t, k) : s.call(x, e) && x[e] || null; if (e) return m("data", n), x = e, k; return x }, k.freeze = b, k.attachers = t, k.use = function(e) {
                    var r;
                    if (m("use", n), null === e || void 0 === e);
                    else if ("function" === typeof e) s.apply(null, arguments);
                    else { if ("object" !== typeof e) throw new Error("Expected usable value, not `" + e + "`"); "length" in e ? a(e) : i(e) }
                    r && (x.settings = o(x.settings || {}, r));
                    return k;

                    function i(e) { a(e.plugins), e.settings && (r = o(r || {}, e.settings)) }

                    function l(e) {
                        if ("function" === typeof e) s(e);
                        else { if ("object" !== typeof e) throw new Error("Expected usable value, not `" + e + "`"); "length" in e ? s.apply(null, e) : i(e) }
                    }

                    function a(e) {
                        var n = -1;
                        if (null === e || void 0 === e);
                        else { if ("object" !== typeof e || !("length" in e)) throw new Error("Expected a list of plugins, not `" + e + "`"); for (; ++n < e.length;) l(e[n]) }
                    }

                    function s(e, n) {
                        var r = w(e);
                        r ? (u(r[1]) && u(n) && (n = o(!0, r[1], n)), r[1] = n) : t.push(c.call(arguments))
                    }
                }, k.parse = function(e) { var n, t = a(e); if (b(), d("parse", n = k.Parser), p(n, "parse")) return new n(String(t), t).parse(); return n(String(t), t) }, k.stringify = function(e, n) { var t, r = a(n); if (b(), h("stringify", t = k.Compiler), g(e), p(t, "compile")) return new t(e, r).compile(); return t(e, r) }, k.run = C, k.runSync = function(e, n) {
                    var t, i;
                    return C(e, n, o), v("runSync", "run", i), t;

                    function o(e, n) { i = !0, t = n, r(e) }
                }, k.process = S, k.processSync = function(e) {
                    var n, t;
                    return b(), d("processSync", k.Parser), h("processSync", k.Compiler), S(n = a(e), i), v("processSync", "process", t), n;

                    function i(e) { t = !0, r(e) }
                }, k;

                function k() { for (var n = e(), r = -1; ++r < t.length;) n.use.apply(null, t[r]); return n.data(o(!0, {}, x)), n }

                function b() { var e, r; if (n) return k; for (; ++y < t.length;) !1 !== (e = t[y])[1] && (!0 === e[1] && (e[1] = void 0), "function" === typeof(r = e[0].apply(k, e.slice(1))) && i.use(r)); return n = !0, y = 1 / 0, k }

                function w(e) {
                    for (var n = -1; ++n < t.length;)
                        if (t[n][0] === e) return t[n]
                }

                function C(e, n, t) {
                    if (g(e), b(), t || "function" !== typeof n || (t = n, n = null), !t) return new Promise(r);

                    function r(r, o) { i.run(e, a(n), (function(n, i, u) { i = i || e, n ? o(n) : r ? r(i) : t(null, i, u) })) }
                    r(null, t)
                }

                function S(e, n) {
                    if (b(), d("process", k.Parser), h("process", k.Compiler), !n) return new Promise(t);

                    function t(t, r) {
                        var i = a(e);
                        f.run(k, { file: i }, (function(e) { e ? r(e) : t ? t(i) : n(null, i) }))
                    }
                    t(null, n)
                }
            }().freeze();
            var c = [].slice,
                s = {}.hasOwnProperty,
                f = l().use((function(e, n) { n.tree = e.parse(n.file) })).use((function(e, n, t) { e.run(n.tree, n.file, (function(e, r, i) { e ? t(e) : (n.tree = r, n.file = i, t()) })) })).use((function(e, n) {
                    var t = e.stringify(n.tree, n.file);
                    void 0 === t || null === t || ("string" === typeof t || i(t) ? n.file.contents = t : n.file.result = t)
                }));

            function p(e, n) { return "function" === typeof e && e.prototype && (function(e) { var n; for (n in e) return !0; return !1 }(e.prototype) || n in e.prototype) }

            function d(e, n) { if ("function" !== typeof n) throw new Error("Cannot `" + e + "` without `Parser`") }

            function h(e, n) { if ("function" !== typeof n) throw new Error("Cannot `" + e + "` without `Compiler`") }

            function m(e, n) { if (n) throw new Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.") }

            function g(e) { if (!e || "string" !== typeof e.type) throw new Error("Expected node, got `" + e + "`") }

            function v(e, n, t) { if (!t) throw new Error("`" + e + "` finished async. Use `" + n + "` instead") }
        },
        1105: function(e, n, t) {
            "use strict";
            e.exports = function(e) { if (e) throw e }
        },
        1106: function(e, n, t) {
            "use strict";
            var r = Object.prototype.hasOwnProperty,
                i = Object.prototype.toString,
                o = Object.defineProperty,
                u = Object.getOwnPropertyDescriptor,
                l = function(e) { return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === i.call(e) },
                a = function(e) {
                    if (!e || "[object Object]" !== i.call(e)) return !1;
                    var n, t = r.call(e, "constructor"),
                        o = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !t && !o) return !1;
                    for (n in e);
                    return "undefined" === typeof n || r.call(e, n)
                },
                c = function(e, n) { o && "__proto__" === n.name ? o(e, n.name, { enumerable: !0, configurable: !0, value: n.newValue, writable: !0 }) : e[n.name] = n.newValue },
                s = function(e, n) { if ("__proto__" === n) { if (!r.call(e, n)) return; if (u) return u(e, n).value } return e[n] };
            e.exports = function e() {
                var n, t, r, i, o, u, f = arguments[0],
                    p = 1,
                    d = arguments.length,
                    h = !1;
                for ("boolean" === typeof f && (h = f, f = arguments[1] || {}, p = 2), (null == f || "object" !== typeof f && "function" !== typeof f) && (f = {}); p < d; ++p)
                    if (null != (n = arguments[p]))
                        for (t in n) r = s(f, t), f !== (i = s(n, t)) && (h && i && (a(i) || (o = l(i))) ? (o ? (o = !1, u = r && l(r) ? r : []) : u = r && a(r) ? r : {}, c(f, { name: t, newValue: e(h, u, i) })) : "undefined" !== typeof i && c(f, { name: t, newValue: i }));
                return f
            }
        },
        1107: function(e, n, t) {
            "use strict";
            e.exports = function(e) { if ("[object Object]" !== Object.prototype.toString.call(e)) return !1; var n = Object.getPrototypeOf(e); return null === n || n === Object.prototype }
        },
        1108: function(e, n, t) {
            "use strict";
            var r = t(1109);
            e.exports = o, o.wrap = r;
            var i = [].slice;

            function o() {
                var e = [],
                    n = {
                        run: function() {
                            var n = -1,
                                t = i.call(arguments, 0, -1),
                                o = arguments[arguments.length - 1];
                            if ("function" !== typeof o) throw new Error("Expected function as last argument, not " + o);

                            function u(l) {
                                var a = e[++n],
                                    c = i.call(arguments, 0),
                                    s = c.slice(1),
                                    f = t.length,
                                    p = -1;
                                if (l) o(l);
                                else {
                                    for (; ++p < f;) null !== s[p] && void 0 !== s[p] || (s[p] = t[p]);
                                    t = s, a ? r(a, u).apply(null, t) : o.apply(null, [null].concat(t))
                                }
                            }
                            u.apply(null, [null].concat(t))
                        },
                        use: function(t) { if ("function" !== typeof t) throw new Error("Expected `fn` to be a function, not " + t); return e.push(t), n }
                    };
                return n
            }
        },
        1109: function(e, n, t) {
            "use strict";
            var r = [].slice;
            e.exports = function(e, n) {
                var t;
                return function() {
                    var n, u = r.call(arguments, 0),
                        l = e.length > u.length;
                    l && u.push(i);
                    try { n = e.apply(null, u) } catch (a) { if (l && t) throw a; return i(a) }
                    l || (n && "function" === typeof n.then ? n.then(o, i) : n instanceof Error ? i(n) : o(n))
                };

                function i() { t || (t = !0, n.apply(null, arguments)) }

                function o(e) { i(null, e) }
            }
        },
        1110: function(e, n, t) {
            "use strict";
            e.exports = function(e) {
                var n = this;
                this.Parser = function(t) { return r(t, Object.assign({}, n.data("settings"), e, { extensions: n.data("micromarkExtensions") || [], mdastExtensions: n.data("fromMarkdownExtensions") || [] })) }
            };
            var r = t(1111)
        },
        1111: function(e, n, t) {
            "use strict";
            e.exports = t(1112)
        },
        1112: function(e, n, t) {
            "use strict";
            e.exports = function(e, n, t) {
                "string" !== typeof n && (t = n, n = void 0);
                return function(e) {
                    var n = e || {},
                        t = function(e, n) { var t = -1; for (; ++t < n.length;) d(e, n[t]); return e }({ transforms: [], canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"], enter: { autolink: v(pe), autolinkProtocol: B, autolinkEmail: B, atxHeading: v(ae), blockQuote: v(re), characterEscape: B, characterReference: B, codeFenced: v(ie), codeFencedFenceInfo: x, codeFencedFenceMeta: x, codeIndented: v(ie, x), codeText: v(oe, x), codeTextData: B, data: B, codeFlowValue: B, definition: v(ue), definitionDestinationString: x, definitionLabelString: x, definitionTitleString: x, emphasis: v(le), hardBreakEscape: v(ce), hardBreakTrailing: v(ce), htmlFlow: v(se, x), htmlFlowData: B, htmlText: v(se, x), htmlTextData: B, image: v(fe), label: x, link: v(pe), listItem: v(he), listItemValue: S, listOrdered: v(de, C), listUnordered: v(de), paragraph: v(me), reference: Z, referenceString: x, resourceDestinationString: x, resourceTitleString: x, setextHeading: v(ae), strong: v(ge), thematicBreak: v(xe) }, exit: { atxHeading: k(), atxHeadingSequence: L, autolink: k(), autolinkEmail: te, autolinkProtocol: ne, blockQuote: k(), characterEscapeValue: _, characterReferenceMarkerHexadecimal: G, characterReferenceMarkerNumeric: G, characterReferenceValue: ee, codeFenced: k(T), codeFencedFence: A, codeFencedFenceInfo: E, codeFencedFenceMeta: F, codeFlowValue: _, codeIndented: k(P), codeText: k(q), codeTextData: _, data: _, definition: k(), definitionDestinationString: I, definitionLabelString: D, definitionTitleString: O, emphasis: k(), hardBreakEscape: k(H), hardBreakTrailing: k(H), htmlFlow: k(U), htmlFlowData: _, htmlText: k(N), htmlTextData: _, image: k($), label: Q, labelText: W, lineEnding: j, link: k(V), listItem: k(), listOrdered: k(), listUnordered: k(), paragraph: k(), referenceString: J, resourceDestinationString: K, resourceTitleString: X, resource: Y, setextHeading: k(R), setextHeadingLineSequence: z, setextHeadingText: M, strong: k(), thematicBreak: k() } }, n.mdastExtensions || []),
                        a = {};
                    return c;

                    function c(e) { for (var n, r = { type: "root", children: [] }, u = [], l = [], a = -1, c = { stack: [r], tokenStack: u, config: t, enter: y, exit: b, buffer: x, resume: w, setData: h, getData: m }; ++a < e.length;) "listOrdered" !== e[a][1].type && "listUnordered" !== e[a][1].type || ("enter" === e[a][0] ? l.push(a) : a = s(e, l.pop(a), a)); for (a = -1; ++a < e.length;) n = t[e[a][0]], o.call(n, e[a][1].type) && n[e[a][1].type].call(i({ sliceSerialize: e[a][2].sliceSerialize }, c), e[a][1]); if (u.length) throw new Error("Cannot close document, a token (`" + u[u.length - 1].type + "`, " + p({ start: u[u.length - 1].start, end: u[u.length - 1].end }) + ") is still open"); for (r.position = { start: g(e.length ? e[0][1].start : { line: 1, column: 1, offset: 0 }), end: g(e.length ? e[e.length - 2][1].end : { line: 1, column: 1, offset: 0 }) }, a = -1; ++a < t.transforms.length;) r = t.transforms[a](r) || r; return r }

                    function s(e, n, t) {
                        for (var r, i, o, u, l, a, c, s = n - 1, f = -1, p = !1; ++s <= t;)
                            if ("listUnordered" === (l = e[s])[1].type || "listOrdered" === l[1].type || "blockQuote" === l[1].type ? ("enter" === l[0] ? f++ : f--, c = void 0) : "lineEndingBlank" === l[1].type ? "enter" === l[0] && (!r || c || f || a || (a = s), c = void 0) : "linePrefix" === l[1].type || "listItemValue" === l[1].type || "listItemMarker" === l[1].type || "listItemPrefix" === l[1].type || "listItemPrefixWhitespace" === l[1].type || (c = void 0), !f && "enter" === l[0] && "listItemPrefix" === l[1].type || -1 === f && "exit" === l[0] && ("listUnordered" === l[1].type || "listOrdered" === l[1].type)) {
                                if (r) {
                                    for (i = s, o = void 0; i--;)
                                        if ("lineEnding" === (u = e[i])[1].type || "lineEndingBlank" === u[1].type) {
                                            if ("exit" === u[0]) continue;
                                            o && (e[o][1].type = "lineEndingBlank", p = !0), u[1].type = "lineEnding", o = i
                                        } else if ("linePrefix" !== u[1].type && "blockQuotePrefix" !== u[1].type && "blockQuotePrefixWhitespace" !== u[1].type && "blockQuoteMarker" !== u[1].type && "listItemIndent" !== u[1].type) break;
                                    a && (!o || a < o) && (r._spread = !0), r.end = g(o ? e[o][1].start : l[1].end), e.splice(o || s, 0, ["exit", r, l[2]]), s++, t++
                                }
                                "listItemPrefix" === l[1].type && (r = { type: "listItem", _spread: !1, start: g(l[1].start) }, e.splice(s, 0, ["enter", r, l[2]]), s++, t++, a = void 0, c = !0)
                            }
                        return e[n][1]._spread = p, t
                    }

                    function h(e, n) { a[e] = n }

                    function m(e) { return a[e] }

                    function g(e) { return { line: e.line, column: e.column, offset: e.offset } }

                    function v(e, n) {
                        return t;

                        function t(t) { y.call(this, e(t), t), n && n.call(this, t) }
                    }

                    function x() { this.stack.push({ type: "fragment", children: [] }) }

                    function y(e, n) { return this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push(n), e.position = { start: g(n.start) }, e }

                    function k(e) {
                        return n;

                        function n(n) { e && e.call(this, n), b.call(this, n) }
                    }

                    function b(e) {
                        var n = this.stack.pop(),
                            t = this.tokenStack.pop();
                        if (!t) throw new Error("Cannot close `" + e.type + "` (" + p({ start: e.start, end: e.end }) + "): it\u2019s not open");
                        if (t.type !== e.type) throw new Error("Cannot close `" + e.type + "` (" + p({ start: e.start, end: e.end }) + "): a different token (`" + t.type + "`, " + p({ start: t.start, end: t.end }) + ") is open");
                        return n.position.end = g(e.end), n
                    }

                    function w() { return r(this.stack.pop()) }

                    function C() { h("expectingFirstListItemValue", !0) }

                    function S(e) { m("expectingFirstListItemValue") && (this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(e), 10), h("expectingFirstListItemValue")) }

                    function E() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].lang = e
                    }

                    function F() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].meta = e
                    }

                    function A() { m("flowCodeInside") || (this.buffer(), h("flowCodeInside", !0)) }

                    function T() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), h("flowCodeInside")
                    }

                    function P() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function D(e) {
                        var n = this.resume();
                        this.stack[this.stack.length - 1].label = n, this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase()
                    }

                    function O() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function I() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function L(e) { this.stack[this.stack.length - 1].depth || (this.stack[this.stack.length - 1].depth = this.sliceSerialize(e).length) }

                    function M() { h("setextHeadingSlurpLineEnding", !0) }

                    function z(e) { this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2 }

                    function R() { h("setextHeadingSlurpLineEnding") }

                    function B(e) {
                        var n = this.stack[this.stack.length - 1].children,
                            t = n[n.length - 1];
                        t && "text" === t.type || ((t = ve()).position = { start: g(e.start) }, this.stack[this.stack.length - 1].children.push(t)), this.stack.push(t)
                    }

                    function _(e) {
                        var n = this.stack.pop();
                        n.value += this.sliceSerialize(e), n.position.end = g(e.end)
                    }

                    function j(e) { var n = this.stack[this.stack.length - 1]; if (m("atHardBreak")) return n.children[n.children.length - 1].position.end = g(e.end), void h("atHardBreak");!m("setextHeadingSlurpLineEnding") && t.canContainEols.indexOf(n.type) > -1 && (B.call(this, e), _.call(this, e)) }

                    function H() { h("atHardBreak", !0) }

                    function U() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function N() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function q() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].value = e
                    }

                    function V() {
                        var e = this.stack[this.stack.length - 1];
                        m("inReference") ? (e.type += "Reference", e.referenceType = m("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), h("referenceType")
                    }

                    function $() {
                        var e = this.stack[this.stack.length - 1];
                        m("inReference") ? (e.type += "Reference", e.referenceType = m("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label, delete e.referenceType), h("referenceType")
                    }

                    function W(e) { this.stack[this.stack.length - 2].identifier = u(this.sliceSerialize(e)).toLowerCase() }

                    function Q() {
                        var e = this.stack[this.stack.length - 1],
                            n = this.resume();
                        this.stack[this.stack.length - 1].label = n, h("inReference", !0), "link" === this.stack[this.stack.length - 1].type ? this.stack[this.stack.length - 1].children = e.children : this.stack[this.stack.length - 1].alt = n
                    }

                    function K() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].url = e
                    }

                    function X() {
                        var e = this.resume();
                        this.stack[this.stack.length - 1].title = e
                    }

                    function Y() { h("inReference") }

                    function Z() { h("referenceType", "collapsed") }

                    function J(e) {
                        var n = this.resume();
                        this.stack[this.stack.length - 1].label = n, this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase(), h("referenceType", "full")
                    }

                    function G(e) { h("characterReferenceType", e.type) }

                    function ee(e) {
                        var n, t, r = this.sliceSerialize(e),
                            i = m("characterReferenceType");
                        i ? (n = l(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), h("characterReferenceType")) : n = f(r), (t = this.stack.pop()).value += n, t.position.end = g(e.end)
                    }

                    function ne(e) { _.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e) }

                    function te(e) { _.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e) }

                    function re() { return { type: "blockquote", children: [] } }

                    function ie() { return { type: "code", lang: null, meta: null, value: "" } }

                    function oe() { return { type: "inlineCode", value: "" } }

                    function ue() { return { type: "definition", identifier: "", label: null, title: null, url: "" } }

                    function le() { return { type: "emphasis", children: [] } }

                    function ae() { return { type: "heading", depth: void 0, children: [] } }

                    function ce() { return { type: "break" } }

                    function se() { return { type: "html", value: "" } }

                    function fe() { return { type: "image", title: null, url: "", alt: null } }

                    function pe() { return { type: "link", title: null, url: "", children: [] } }

                    function de(e) { return { type: "list", ordered: "listOrdered" === e.type, start: null, spread: e._spread, children: [] } }

                    function he(e) { return { type: "listItem", spread: e._spread, checked: null, children: [] } }

                    function me() { return { type: "paragraph", children: [] } }

                    function ge() { return { type: "strong", children: [] } }

                    function ve() { return { type: "text", value: "" } }

                    function xe() { return { type: "thematicBreak" } }
                }(t)(s(a(t).document().write(c()(e, n, !0))))
            };
            var r = t(1113),
                i = t(847),
                o = t(963),
                u = t(891),
                l = t(1114),
                a = t(1115),
                c = t(1150),
                s = t(1151),
                f = t(969),
                p = t(961);

            function d(e, n) { var t, r; for (t in n) r = o.call(e, t) ? e[t] : e[t] = {}, "canContainEols" === t || "transforms" === t ? e[t] = [].concat(r, n[t]) : Object.assign(r, n[t]) }
        },
        1113: function(e, n, t) {
            "use strict";

            function r(e) { return e && (e.value || e.alt || e.title || "children" in e && i(e.children) || "length" in e && i(e)) || "" }

            function i(e) { for (var n = [], t = -1; ++t < e.length;) n[t] = r(e[t]); return n.join("") }
            e.exports = r
        },
        1114: function(e, n, t) {
            "use strict";
            var r = t(865);
            e.exports = function(e, n) { var t = parseInt(e, n); return t < 9 || 11 === t || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || 65535 === (65535 & t) || 65534 === (65535 & t) || t > 1114111 ? "\ufffd" : r(t) }
        },
        1115: function(e, n, t) {
            "use strict";
            var r = t(1116),
                i = t(1117),
                o = t(1118),
                u = t(966),
                l = t(967),
                a = t(1121),
                c = t(892),
                s = t(1124);
            e.exports = function(e) {
                var n = { defined: [], constructs: l([s].concat(c((e || {}).extensions))), content: t(r), document: t(i), flow: t(o), string: t(u.string), text: t(u.text) };
                return n;

                function t(e) { return function(t) { return a(n, e, t) } }
            }
        },
        1116: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 });
            var r = t(789),
                i = t(790),
                o = function(e) {
                    var n, t = e.attempt(this.parser.constructs.contentInitial, (function(n) { if (null === n) return void e.consume(n); return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), i(e, t, "linePrefix") }), (function(n) { return e.enter("paragraph"), o(n) }));
                    return t;

                    function o(t) { var r = e.enter("chunkText", { contentType: "text", previous: n }); return n && (n.next = r), n = r, u(t) }

                    function u(n) { return null === n ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(n)) : r(n) ? (e.consume(n), e.exit("chunkText"), o) : (e.consume(n), u) }
                };
            n.tokenize = o
        },
        1117: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 });
            var r = t(789),
                i = t(790),
                o = t(866),
                u = function(e) {
                    var n, t, i, u = this,
                        c = [],
                        s = 0,
                        f = {
                            tokenize: function(e, r) {
                                var i = 0;
                                return n = {}, s;

                                function s(r) { return i < c.length ? (u.containerState = c[i][1], e.attempt(c[i][0].continuation, f, p)(r)) : t.currentConstruct && t.currentConstruct.concrete ? (n.flowContinue = !0, m(r)) : (u.interrupt = t.currentConstruct && t.currentConstruct.interruptible, u.containerState = {}, e.attempt(l, h, m)(r)) }

                                function f(e) { return i++, u.containerState._closeFlow ? h(e) : s(e) }

                                function p(n) { return t.currentConstruct && t.currentConstruct.lazy ? (u.containerState = {}, e.attempt(l, h, e.attempt(a, h, e.check(o, h, d)))(n)) : h(n) }

                                function d(e) { return i = c.length, n.lazy = !0, n.flowContinue = !0, m(e) }

                                function h(e) { return n.flowEnd = !0, m(e) }

                                function m(e) { return n.continued = i, u.interrupt = u.containerState = void 0, r(e) }
                            },
                            partial: !0
                        };
                    return p;

                    function p(n) { return s < c.length ? (u.containerState = c[s][1], e.attempt(c[s][0].continuation, d, h)(n)) : h(n) }

                    function d(e) { return s++, p(e) }

                    function h(r) { return n && n.flowContinue ? g(r) : (u.interrupt = t && t.currentConstruct && t.currentConstruct.interruptible, u.containerState = {}, e.attempt(l, m, g)(r)) }

                    function m(e) { return c.push([u.currentConstruct, u.containerState]), u.containerState = void 0, h(e) }

                    function g(n) { return null === n ? (k(0, !0), void e.consume(n)) : (t = t || u.parser.flow(u.now()), e.enter("chunkFlow", { contentType: "flow", previous: i, _tokenizer: t }), v(n)) }

                    function v(n) { return null === n ? (y(e.exit("chunkFlow")), g(n)) : r(n) ? (e.consume(n), y(e.exit("chunkFlow")), e.check(f, x)) : (e.consume(n), v) }

                    function x(e) { return k(n.continued, n && n.flowEnd), s = 0, p(e) }

                    function y(e) { i && (i.next = e), i = e, t.lazy = n && n.lazy, t.defineSkip(e.start), t.write(u.sliceStream(e)) }

                    function k(n, r) {
                        var o = c.length;
                        for (t && r && (t.write([null]), i = t = void 0); o-- > n;) u.containerState = c[o][1], c[o][0].exit.call(u, e);
                        c.length = n
                    }
                },
                l = { tokenize: function(e, n, t) { return i(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4) } },
                a = { tokenize: function(e, n, t) { return i(e, e.lazy(this.parser.constructs.flow, n, t), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4) } };
            n.tokenize = u
        },
        1118: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 });
            var r = t(1119),
                i = t(790),
                o = t(866),
                u = function(e) {
                    var n = this,
                        t = e.attempt(o, (function(r) { if (null === r) return void e.consume(r); return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t }), e.attempt(this.parser.constructs.flowInitial, u, i(e, e.attempt(this.parser.constructs.flow, u, e.attempt(r, u)), "linePrefix")));
                    return t;

                    function u(r) {
                        if (null !== r) return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), n.currentConstruct = void 0, t;
                        e.consume(r)
                    }
                };
            n.tokenize = u
        },
        1119: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(848),
                o = t(965),
                u = t(790),
                l = {
                    tokenize: function(e, n) {
                        var t;
                        return function(n) { return e.enter("content"), t = e.enter("chunkContent", { contentType: "content" }), i(n) };

                        function i(n) { return null === n ? o(n) : r(n) ? e.check(a, u, o)(n) : (e.consume(n), i) }

                        function o(t) { return e.exit("chunkContent"), e.exit("content"), n(t) }

                        function u(n) { return e.consume(n), e.exit("chunkContent"), t = t.next = e.enter("chunkContent", { contentType: "content", previous: t }), i }
                    },
                    resolve: function(e) { return o(e), e },
                    interruptible: !0,
                    lazy: !0
                },
                a = {
                    tokenize: function(e, n, t) {
                        var o = this;
                        return function(n) { return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), u(e, l, "linePrefix") };

                        function l(u) { return null === u || r(u) ? t(u) : o.parser.constructs.disable.null.indexOf("codeIndented") > -1 || i(o.events, "linePrefix") < 4 ? e.interrupt(o.parser.constructs.flow, t, n)(u) : n(u) }
                    },
                    partial: !0
                };
            e.exports = l
        },
        1120: function(e, n, t) {
            "use strict";
            var r = [].splice;
            e.exports = r
        },
        1121: function(e, n, t) {
            "use strict";
            var r = t(847),
                i = t(789),
                o = t(893),
                u = t(813),
                l = t(892),
                a = t(867),
                c = t(1122),
                s = t(821),
                f = t(1123);
            e.exports = function(e, n, t) {
                var p = t ? s(t) : { line: 1, column: 1, offset: 0 },
                    d = {},
                    h = [],
                    m = [],
                    g = [],
                    v = {
                        consume: function(e) {
                            i(e) ? (p.line++, p.column = 1, p.offset += -3 === e ? 2 : 1, A()) : -1 !== e && (p.column++, p.offset++);
                            p._bufferIndex < 0 ? p._index++ : (p._bufferIndex++, p._bufferIndex === m[p._index].length && (p._bufferIndex = -1, p._index++));
                            x.previous = e
                        },
                        enter: function(e, n) { var t = n || {}; return t.type = e, t.start = b(), x.events.push(["enter", t, x]), g.push(t), t },
                        exit: function(e) { var n = g.pop(); return n.end = b(), x.events.push(["exit", n, x]), n },
                        attempt: E((function(e, n) { F(e, n.from) })),
                        check: E(S),
                        interrupt: E(S, { interrupt: !0 }),
                        lazy: E(S, { lazy: !0 })
                    },
                    x = { previous: null, events: [], parser: e, sliceStream: k, sliceSerialize: function(e) { return c(k(e)) }, now: b, defineSkip: function(e) { d[e.line] = e.column, A() }, write: function(e) { if (m = o(m, e), w(), null !== m[m.length - 1]) return []; return F(n, 0), x.events = a(h, x.events, x), x.events } },
                    y = n.tokenize.call(x, v);
                return n.resolveAll && h.push(n), p._index = 0, p._bufferIndex = -1, x;

                function k(e) { return f(m, e) }

                function b() { return s(p) }

                function w() {
                    for (var e, n; p._index < m.length;)
                        if ("string" === typeof(n = m[p._index]))
                            for (e = p._index, p._bufferIndex < 0 && (p._bufferIndex = 0); p._index === e && p._bufferIndex < n.length;) C(n.charCodeAt(p._bufferIndex));
                        else C(n)
                }

                function C(e) { y = y(e) }

                function S(e, n) { n.restore() }

                function E(e, n) {
                    return function(t, i, o) {
                        var u, a, c, s;
                        return t.tokenize || "length" in t ? f(l(t)) : function(e) { if (e in t || null in t) return f(t.null ? l(t[e]).concat(l(t.null)) : t[e])(e); return o(e) };

                        function f(e) { return u = e, d(e[a = 0]) }

                        function d(e) {
                            return function(t) {
                                s = function() {
                                    var e = b(),
                                        n = x.previous,
                                        t = x.currentConstruct,
                                        r = x.events.length,
                                        i = Array.from(g);
                                    return { restore: o, from: r };

                                    function o() { p = e, x.previous = n, x.currentConstruct = t, x.events.length = r, g = i, A() }
                                }(), c = e, e.partial || (x.currentConstruct = e);
                                if (e.name && x.parser.constructs.disable.null.indexOf(e.name) > -1) return m();
                                return e.tokenize.call(n ? r({}, x, n) : x, v, h, m)(t)
                            }
                        }

                        function h(n) { return e(c, s), i }

                        function m(e) { return s.restore(), ++a < u.length ? d(u[a]) : o }
                    }
                }

                function F(e, n) { e.resolveAll && h.indexOf(e) < 0 && h.push(e), e.resolve && u(x.events, n, x.events.length - n, e.resolve(x.events.slice(n), x)), e.resolveTo && (x.events = e.resolveTo(x.events, x)) }

                function A() { p.line in d && p.column < 2 && (p.column = d[p.line], p.offset += d[p.line] - 1) }
            }
        },
        1122: function(e, n, t) {
            "use strict";
            var r = t(865);
            e.exports = function(e) {
                for (var n, t, i, o = -1, u = []; ++o < e.length;) {
                    if ("string" === typeof(n = e[o])) t = n;
                    else if (-5 === n) t = "\r";
                    else if (-4 === n) t = "\n";
                    else if (-3 === n) t = "\r\n";
                    else if (-2 === n) t = "\t";
                    else if (-1 === n) {
                        if (i) continue;
                        t = " "
                    } else t = r(n);
                    i = -2 === n, u.push(t)
                }
                return u.join("")
            }
        },
        1123: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t, r = n.start._index,
                    i = n.start._bufferIndex,
                    o = n.end._index,
                    u = n.end._bufferIndex;
                return r === o ? t = [e[r].slice(i, u)] : (t = e.slice(r, o), i > -1 && (t[0] = t[0].slice(i)), u > 0 && t.push(e[o].slice(0, u))), t
            }
        },
        1124: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 });
            var r = t(966),
                i = t(1125),
                o = t(1128),
                u = t(1130),
                l = t(1131),
                a = t(1133),
                c = t(1135),
                s = t(1136),
                f = t(1137),
                p = t(1138),
                d = t(1139),
                h = t(1140),
                m = t(1141),
                g = t(1144),
                v = t(897),
                x = t(1145),
                y = t(1146),
                k = t(1147),
                b = t(1148),
                w = t(1149),
                C = t(975),
                S = { 42: b, 43: b, 45: b, 48: b, 49: b, 50: b, 51: b, 52: b, 53: b, 54: b, 55: b, 56: b, 57: b, 62: u },
                E = { 91: p },
                F = { "-2": s, "-1": s, 32: s },
                A = { 35: h, 42: C, 45: [w, C], 60: m, 61: w, 95: C, 96: c, 126: c },
                T = { 38: a, 92: l },
                P = { "-5": k, "-4": k, "-3": k, 33: x, 38: a, 42: i, 60: [o, g], 91: y, 92: [d, l], 93: v, 95: i, 96: f },
                D = { null: [i, r.resolver] };
            n.contentInitial = E, n.disable = { null: [] }, n.document = S, n.flow = A, n.flowInitial = F, n.insideSpan = D, n.string = T, n.text = P
        },
        1125: function(e, n, t) {
            "use strict";
            var r = t(893),
                i = t(813),
                o = t(968),
                u = t(1127),
                l = t(867),
                a = t(821),
                c = {
                    name: "attention",
                    tokenize: function(e, n) {
                        var t, r = o(this.previous);
                        return function(n) { return e.enter("attentionSequence"), t = n, i(n) };

                        function i(u) { var l, a, c, s; return u === t ? (e.consume(u), i) : (l = e.exit("attentionSequence"), c = !(a = o(u)) || 2 === a && r, s = !r || 2 === r && a, l._open = 42 === t ? c : c && (r || !s), l._close = 42 === t ? s : s && (a || !c), n(u)) }
                    },
                    resolveAll: function(e, n) {
                        var t, o, c, s, f, p, d, h, m = -1;
                        for (; ++m < e.length;)
                            if ("enter" === e[m][0] && "attentionSequence" === e[m][1].type && e[m][1]._close)
                                for (t = m; t--;)
                                    if ("exit" === e[t][0] && "attentionSequence" === e[t][1].type && e[t][1]._open && n.sliceSerialize(e[t][1]).charCodeAt(0) === n.sliceSerialize(e[m][1]).charCodeAt(0)) {
                                        if ((e[t][1]._close || e[m][1]._open) && (e[m][1].end.offset - e[m][1].start.offset) % 3 && !((e[t][1].end.offset - e[t][1].start.offset + e[m][1].end.offset - e[m][1].start.offset) % 3)) continue;
                                        p = e[t][1].end.offset - e[t][1].start.offset > 1 && e[m][1].end.offset - e[m][1].start.offset > 1 ? 2 : 1, s = { type: p > 1 ? "strongSequence" : "emphasisSequence", start: u(a(e[t][1].end), -p), end: a(e[t][1].end) }, f = { type: p > 1 ? "strongSequence" : "emphasisSequence", start: a(e[m][1].start), end: u(a(e[m][1].start), p) }, c = { type: p > 1 ? "strongText" : "emphasisText", start: a(e[t][1].end), end: a(e[m][1].start) }, o = { type: p > 1 ? "strong" : "emphasis", start: a(s.start), end: a(f.end) }, e[t][1].end = a(s.start), e[m][1].start = a(f.end), d = [], e[t][1].end.offset - e[t][1].start.offset && (d = r(d, [
                                            ["enter", e[t][1], n],
                                            ["exit", e[t][1], n]
                                        ])), d = r(d, [
                                            ["enter", o, n],
                                            ["enter", s, n],
                                            ["exit", s, n],
                                            ["enter", c, n]
                                        ]), d = r(d, l(n.parser.constructs.insideSpan.null, e.slice(t + 1, m), n)), d = r(d, [
                                            ["exit", c, n],
                                            ["enter", f, n],
                                            ["exit", f, n],
                                            ["exit", o, n]
                                        ]), e[m][1].end.offset - e[m][1].start.offset ? (h = 2, d = r(d, [
                                            ["enter", e[m][1], n],
                                            ["exit", e[m][1], n]
                                        ])) : h = 0, i(e, t - 1, m - t + 3, d), m = t + d.length - h - 2;
                                        break
                                    }
                        m = -1;
                        for (; ++m < e.length;) "attentionSequence" === e[m][1].type && (e[m][1].type = "data");
                        return e
                    }
                };
            e.exports = c
        },
        1126: function(e, n, t) {
            "use strict";
            e.exports = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        },
        1127: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e.column += n, e.offset += n, e._bufferIndex += n, e }
        },
        1128: function(e, n, t) {
            "use strict";
            var r = t(868),
                i = t(849),
                o = t(1129),
                u = t(896),
                l = {
                    name: "autolink",
                    tokenize: function(e, n, t) {
                        var l = 1;
                        return function(n) { return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a };

                        function a(n) { return r(n) ? (e.consume(n), c) : o(n) ? p(n) : t(n) }

                        function c(e) { return 43 === e || 45 === e || 46 === e || i(e) ? s(e) : p(e) }

                        function s(n) { return 58 === n ? (e.consume(n), f) : (43 === n || 45 === n || 46 === n || i(n)) && l++ < 32 ? (e.consume(n), s) : p(n) }

                        function f(n) { return 62 === n ? (e.exit("autolinkProtocol"), g(n)) : 32 === n || 60 === n || u(n) ? t(n) : (e.consume(n), f) }

                        function p(n) { return 64 === n ? (e.consume(n), l = 0, d) : o(n) ? (e.consume(n), p) : t(n) }

                        function d(e) { return i(e) ? h(e) : t(e) }

                        function h(n) { return 46 === n ? (e.consume(n), l = 0, d) : 62 === n ? (e.exit("autolinkProtocol").type = "autolinkEmail", g(n)) : m(n) }

                        function m(n) { return (45 === n || i(n)) && l++ < 63 ? (e.consume(n), 45 === n ? m : h) : t(n) }

                        function g(t) { return e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.exit("autolink"), n }
                    }
                };
            e.exports = l
        },
        1129: function(e, n, t) {
            "use strict";
            var r = t(817)(/[#-'*+\--9=?A-Z^-~]/);
            e.exports = r
        },
        1130: function(e, n, t) {
            "use strict";
            var r = t(812),
                i = t(790),
                o = {
                    name: "blockQuote",
                    tokenize: function(e, n, t) {
                        var i = this;
                        return function(n) { if (62 === n) return i.containerState.open || (e.enter("blockQuote", { _container: !0 }), i.containerState.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(n), e.exit("blockQuoteMarker"), o; return t(n) };

                        function o(t) { return r(t) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(t), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(t)) }
                    },
                    continuation: { tokenize: function(e, n, t) { return i(e, e.attempt(o, n, t), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4) } },
                    exit: function(e) { e.exit("blockQuote") }
                };
            e.exports = o
        },
        1131: function(e, n, t) {
            "use strict";
            var r = t(1132),
                i = {
                    name: "characterEscape",
                    tokenize: function(e, n, t) {
                        return function(n) { return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(n), e.exit("escapeMarker"), i };

                        function i(i) { return r(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(i) }
                    }
                };
            e.exports = i
        },
        1132: function(e, n, t) {
            "use strict";
            var r = t(817)(/[!-/:-@[-`{-~]/);
            e.exports = r
        },
        1133: function(e, n, t) {
            "use strict";
            var r = t(969),
                i = t(849),
                o = t(970),
                u = t(1134);

            function l(e) { return e && "object" === typeof e && "default" in e ? e : { default: e } }
            var a = l(r),
                c = {
                    name: "characterReference",
                    tokenize: function(e, n, t) {
                        var r, l, c = this,
                            s = 0;
                        return function(n) { return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(n), e.exit("characterReferenceMarker"), f };

                        function f(n) { return 35 === n ? (e.enter("characterReferenceMarkerNumeric"), e.consume(n), e.exit("characterReferenceMarkerNumeric"), p) : (e.enter("characterReferenceValue"), r = 31, l = i, d(n)) }

                        function p(n) { return 88 === n || 120 === n ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(n), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, l = u, d) : (e.enter("characterReferenceValue"), r = 7, l = o, d(n)) }

                        function d(o) { var u; return 59 === o && s ? (u = e.exit("characterReferenceValue"), l !== i || a.default(c.sliceSerialize(u)) ? (e.enter("characterReferenceMarker"), e.consume(o), e.exit("characterReferenceMarker"), e.exit("characterReference"), n) : t(o)) : l(o) && s++ < r ? (e.consume(o), d) : t(o) }
                    }
                };
            e.exports = c
        },
        1134: function(e, n, t) {
            "use strict";
            var r = t(817)(/[\dA-Fa-f]/);
            e.exports = r
        },
        1135: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(814),
                o = t(848),
                u = t(790),
                l = {
                    name: "codeFenced",
                    tokenize: function(e, n, t) {
                        var l, a = this,
                            c = {
                                tokenize: function(e, n, t) {
                                    var i = 0;
                                    return u(e, o, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);

                                    function o(n) { return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), a(n) }

                                    function a(n) { return n === l ? (e.consume(n), i++, a) : i < f ? t(n) : (e.exit("codeFencedFenceSequence"), u(e, c, "whitespace")(n)) }

                                    function c(i) { return null === i || r(i) ? (e.exit("codeFencedFence"), n(i)) : t(i) }
                                },
                                partial: !0
                            },
                            s = o(this.events, "linePrefix"),
                            f = 0;
                        return function(n) { return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), l = n, p(n) };

                        function p(n) { return n === l ? (e.consume(n), f++, p) : (e.exit("codeFencedFenceSequence"), f < 3 ? t(n) : u(e, d, "whitespace")(n)) }

                        function d(n) { return null === n || r(n) ? v(n) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), h(n)) }

                        function h(n) { return null === n || i(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), u(e, m, "whitespace")(n)) : 96 === n && n === l ? t(n) : (e.consume(n), h) }

                        function m(n) { return null === n || r(n) ? v(n) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), g(n)) }

                        function g(n) { return null === n || r(n) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), v(n)) : 96 === n && n === l ? t(n) : (e.consume(n), g) }

                        function v(t) { return e.exit("codeFencedFence"), a.interrupt ? n(t) : x(t) }

                        function x(n) { return null === n ? k(n) : r(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), e.attempt(c, k, s ? u(e, x, "linePrefix", s + 1) : x)) : (e.enter("codeFlowValue"), y(n)) }

                        function y(n) { return null === n || r(n) ? (e.exit("codeFlowValue"), x(n)) : (e.consume(n), y) }

                        function k(t) { return e.exit("codeFenced"), n(t) }
                    },
                    concrete: !0
                };
            e.exports = l
        },
        1136: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(813),
                o = t(848),
                u = t(790),
                l = {
                    name: "codeIndented",
                    tokenize: function(e, n, t) {
                        return e.attempt(a, i, t);

                        function i(t) { return null === t ? n(t) : r(t) ? e.attempt(a, i, n)(t) : (e.enter("codeFlowValue"), o(t)) }

                        function o(n) { return null === n || r(n) ? (e.exit("codeFlowValue"), i(n)) : (e.consume(n), o) }
                    },
                    resolve: function(e, n) {
                        var t = { type: "codeIndented", start: e[0][1].start, end: e[e.length - 1][1].end };
                        return i(e, 0, 0, [
                            ["enter", t, n]
                        ]), i(e, e.length, 0, [
                            ["exit", t, n]
                        ]), e
                    }
                },
                a = { tokenize: function(e, n, t) { var i = this; return u(e, (function l(a) { if (r(a)) return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), u(e, l, "linePrefix", 5); return o(i.events, "linePrefix") < 4 ? t(a) : n(a) }), "linePrefix", 5) }, partial: !0 };
            e.exports = l
        },
        1137: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = {
                    name: "codeText",
                    tokenize: function(e, n, t) {
                        var i, o, u = 0;
                        return function(n) { return e.enter("codeText"), e.enter("codeTextSequence"), l(n) };

                        function l(n) { return 96 === n ? (e.consume(n), u++, l) : (e.exit("codeTextSequence"), a(n)) }

                        function a(n) { return null === n ? t(n) : 96 === n ? (o = e.enter("codeTextSequence"), i = 0, s(n)) : 32 === n ? (e.enter("space"), e.consume(n), e.exit("space"), a) : r(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), a) : (e.enter("codeTextData"), c(n)) }

                        function c(n) { return null === n || 32 === n || 96 === n || r(n) ? (e.exit("codeTextData"), a(n)) : (e.consume(n), c) }

                        function s(t) { return 96 === t ? (e.consume(t), i++, s) : i === u ? (e.exit("codeTextSequence"), e.exit("codeText"), n(t)) : (o.type = "codeTextData", c(t)) }
                    },
                    resolve: function(e) {
                        var n, t, r = e.length - 4,
                            i = 3;
                        if (("lineEnding" === e[i][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type))
                            for (n = i; ++n < r;)
                                if ("codeTextData" === e[n][1].type) { e[r][1].type = e[i][1].type = "codeTextPadding", i += 2, r -= 2; break }
                        n = i - 1, r++;
                        for (; ++n <= r;) void 0 === t ? n !== r && "lineEnding" !== e[n][1].type && (t = n) : n !== r && "lineEnding" !== e[n][1].type || (e[t][1].type = "codeTextData", n !== t + 2 && (e[t][1].end = e[n - 1][1].end, e.splice(t + 2, n - t - 2), r -= n - t - 2, n = t + 2), t = void 0);
                        return e
                    },
                    previous: function(e) { return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type }
                };
            e.exports = i
        },
        1138: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(814),
                o = t(891),
                u = t(971),
                l = t(972),
                a = t(790),
                c = t(973),
                s = t(974),
                f = {
                    name: "definition",
                    tokenize: function(e, n, t) {
                        var i, s = this;
                        return function(n) { return e.enter("definition"), l.call(s, e, f, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(n) };

                        function f(n) { return i = o(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1)), 58 === n ? (e.enter("definitionMarker"), e.consume(n), e.exit("definitionMarker"), c(e, u(e, e.attempt(p, a(e, d, "whitespace"), a(e, d, "whitespace")), t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : t(n) }

                        function d(o) { return null === o || r(o) ? (e.exit("definition"), s.parser.defined.indexOf(i) < 0 && s.parser.defined.push(i), n(o)) : t(o) }
                    }
                },
                p = {
                    tokenize: function(e, n, t) {
                        return function(n) { return i(n) ? c(e, o)(n) : t(n) };

                        function o(n) { return 34 === n || 39 === n || 40 === n ? s(e, a(e, u, "whitespace"), t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(n) : t(n) }

                        function u(e) { return null === e || r(e) ? n(e) : t(e) }
                    },
                    partial: !0
                };
            e.exports = f
        },
        1139: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = {
                    name: "hardBreakEscape",
                    tokenize: function(e, n, t) {
                        return function(n) { return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(n), i };

                        function i(i) { return r(i) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), n(i)) : t(i) }
                    }
                };
            e.exports = i
        },
        1140: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(814),
                o = t(812),
                u = t(813),
                l = t(790),
                a = {
                    name: "headingAtx",
                    tokenize: function(e, n, t) {
                        var u = this,
                            a = 0;
                        return function(n) { return e.enter("atxHeading"), e.enter("atxHeadingSequence"), c(n) };

                        function c(r) { return 35 === r && a++ < 6 ? (e.consume(r), c) : null === r || i(r) ? (e.exit("atxHeadingSequence"), u.interrupt ? n(r) : s(r)) : t(r) }

                        function s(t) { return 35 === t ? (e.enter("atxHeadingSequence"), f(t)) : null === t || r(t) ? (e.exit("atxHeading"), n(t)) : o(t) ? l(e, s, "whitespace")(t) : (e.enter("atxHeadingText"), p(t)) }

                        function f(n) { return 35 === n ? (e.consume(n), f) : (e.exit("atxHeadingSequence"), s(n)) }

                        function p(n) { return null === n || 35 === n || i(n) ? (e.exit("atxHeadingText"), s(n)) : (e.consume(n), p) }
                    },
                    resolve: function(e, n) {
                        var t, r, i = e.length - 2,
                            o = 3;
                        "whitespace" === e[o][1].type && (o += 2);
                        i - 2 > o && "whitespace" === e[i][1].type && (i -= 2);
                        "atxHeadingSequence" === e[i][1].type && (o === i - 1 || i - 4 > o && "whitespace" === e[i - 2][1].type) && (i -= o + 1 === i ? 2 : 4);
                        i > o && (t = { type: "atxHeadingText", start: e[o][1].start, end: e[i][1].end }, r = { type: "chunkText", start: e[o][1].start, end: e[i][1].end, contentType: "text" }, u(e, o, i - o + 1, [
                            ["enter", t, n],
                            ["enter", r, n],
                            ["exit", r, n],
                            ["exit", t, n]
                        ]));
                        return e
                    }
                };
            e.exports = a
        },
        1141: function(e, n, t) {
            "use strict";
            var r = t(868),
                i = t(849),
                o = t(789),
                u = t(814),
                l = t(812),
                a = t(865),
                c = t(1142),
                s = t(1143),
                f = t(866),
                p = {
                    name: "htmlFlow",
                    tokenize: function(e, n, t) {
                        var f, p, h, m, g, v = this;
                        return function(n) { return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), x };

                        function x(i) { return 33 === i ? (e.consume(i), y) : 47 === i ? (e.consume(i), w) : 63 === i ? (e.consume(i), f = 3, v.interrupt ? n : N) : r(i) ? (e.consume(i), h = a(i), p = !0, C) : t(i) }

                        function y(i) { return 45 === i ? (e.consume(i), f = 2, k) : 91 === i ? (e.consume(i), f = 5, h = "CDATA[", m = 0, b) : r(i) ? (e.consume(i), f = 4, v.interrupt ? n : N) : t(i) }

                        function k(r) { return 45 === r ? (e.consume(r), v.interrupt ? n : N) : t(r) }

                        function b(r) { return r === h.charCodeAt(m++) ? (e.consume(r), m === h.length ? v.interrupt ? n : z : b) : t(r) }

                        function w(n) { return r(n) ? (e.consume(n), h = a(n), C) : t(n) }

                        function C(r) { return null === r || 47 === r || 62 === r || u(r) ? 47 !== r && p && s.indexOf(h.toLowerCase()) > -1 ? (f = 1, v.interrupt ? n(r) : z(r)) : c.indexOf(h.toLowerCase()) > -1 ? (f = 6, 47 === r ? (e.consume(r), S) : v.interrupt ? n(r) : z(r)) : (f = 7, v.interrupt ? t(r) : p ? F(r) : E(r)) : 45 === r || i(r) ? (e.consume(r), h += a(r), C) : t(r) }

                        function S(r) { return 62 === r ? (e.consume(r), v.interrupt ? n : z) : t(r) }

                        function E(n) { return l(n) ? (e.consume(n), E) : L(n) }

                        function F(n) { return 47 === n ? (e.consume(n), L) : 58 === n || 95 === n || r(n) ? (e.consume(n), A) : l(n) ? (e.consume(n), F) : L(n) }

                        function A(n) { return 45 === n || 46 === n || 58 === n || 95 === n || i(n) ? (e.consume(n), A) : T(n) }

                        function T(n) { return 61 === n ? (e.consume(n), P) : l(n) ? (e.consume(n), T) : F(n) }

                        function P(n) { return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), g = n, D) : l(n) ? (e.consume(n), P) : (g = void 0, O(n)) }

                        function D(n) { return n === g ? (e.consume(n), I) : null === n || o(n) ? t(n) : (e.consume(n), D) }

                        function O(n) { return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 62 === n || 96 === n || u(n) ? T(n) : (e.consume(n), O) }

                        function I(e) { return 47 === e || 62 === e || l(e) ? F(e) : t(e) }

                        function L(n) { return 62 === n ? (e.consume(n), M) : t(n) }

                        function M(n) { return l(n) ? (e.consume(n), M) : null === n || o(n) ? z(n) : t(n) }

                        function z(n) { return 45 === n && 2 === f ? (e.consume(n), _) : 60 === n && 1 === f ? (e.consume(n), j) : 62 === n && 4 === f ? (e.consume(n), q) : 63 === n && 3 === f ? (e.consume(n), N) : 93 === n && 5 === f ? (e.consume(n), U) : !o(n) || 6 !== f && 7 !== f ? null === n || o(n) ? R(n) : (e.consume(n), z) : e.check(d, q, R)(n) }

                        function R(n) { return e.exit("htmlFlowData"), B(n) }

                        function B(n) { return null === n ? V(n) : o(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), B) : (e.enter("htmlFlowData"), z(n)) }

                        function _(n) { return 45 === n ? (e.consume(n), N) : z(n) }

                        function j(n) { return 47 === n ? (e.consume(n), h = "", H) : z(n) }

                        function H(n) { return 62 === n && s.indexOf(h.toLowerCase()) > -1 ? (e.consume(n), q) : r(n) && h.length < 8 ? (e.consume(n), h += a(n), H) : z(n) }

                        function U(n) { return 93 === n ? (e.consume(n), N) : z(n) }

                        function N(n) { return 62 === n ? (e.consume(n), q) : z(n) }

                        function q(n) { return null === n || o(n) ? (e.exit("htmlFlowData"), V(n)) : (e.consume(n), q) }

                        function V(t) { return e.exit("htmlFlow"), n(t) }
                    },
                    resolveTo: function(e) {
                        var n = e.length;
                        for (; n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type););
                        n > 1 && "linePrefix" === e[n - 2][1].type && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2));
                        return e
                    },
                    concrete: !0
                },
                d = { tokenize: function(e, n, t) { return function(r) { return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(f, n, t) } }, partial: !0 };
            e.exports = p
        },
        1142: function(e, n, t) {
            "use strict";
            e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
        },
        1143: function(e, n, t) {
            "use strict";
            e.exports = ["pre", "script", "style", "textarea"]
        },
        1144: function(e, n, t) {
            "use strict";
            var r = t(868),
                i = t(849),
                o = t(789),
                u = t(814),
                l = t(812),
                a = t(790),
                c = {
                    name: "htmlText",
                    tokenize: function(e, n, t) {
                        var c, s, f, p, d = this;
                        return function(n) { return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(n), h };

                        function h(n) { return 33 === n ? (e.consume(n), m) : 47 === n ? (e.consume(n), T) : 63 === n ? (e.consume(n), F) : r(n) ? (e.consume(n), O) : t(n) }

                        function m(n) { return 45 === n ? (e.consume(n), g) : 91 === n ? (e.consume(n), s = "CDATA[", f = 0, b) : r(n) ? (e.consume(n), E) : t(n) }

                        function g(n) { return 45 === n ? (e.consume(n), v) : t(n) }

                        function v(n) { return null === n || 62 === n ? t(n) : 45 === n ? (e.consume(n), x) : y(n) }

                        function x(e) { return null === e || 62 === e ? t(e) : y(e) }

                        function y(n) { return null === n ? t(n) : 45 === n ? (e.consume(n), k) : o(n) ? (p = y, j(n)) : (e.consume(n), y) }

                        function k(n) { return 45 === n ? (e.consume(n), U) : y(n) }

                        function b(n) { return n === s.charCodeAt(f++) ? (e.consume(n), f === s.length ? w : b) : t(n) }

                        function w(n) { return null === n ? t(n) : 93 === n ? (e.consume(n), C) : o(n) ? (p = w, j(n)) : (e.consume(n), w) }

                        function C(n) { return 93 === n ? (e.consume(n), S) : w(n) }

                        function S(n) { return 62 === n ? U(n) : 93 === n ? (e.consume(n), S) : w(n) }

                        function E(n) { return null === n || 62 === n ? U(n) : o(n) ? (p = E, j(n)) : (e.consume(n), E) }

                        function F(n) { return null === n ? t(n) : 63 === n ? (e.consume(n), A) : o(n) ? (p = F, j(n)) : (e.consume(n), F) }

                        function A(e) { return 62 === e ? U(e) : F(e) }

                        function T(n) { return r(n) ? (e.consume(n), P) : t(n) }

                        function P(n) { return 45 === n || i(n) ? (e.consume(n), P) : D(n) }

                        function D(n) { return o(n) ? (p = D, j(n)) : l(n) ? (e.consume(n), D) : U(n) }

                        function O(n) { return 45 === n || i(n) ? (e.consume(n), O) : 47 === n || 62 === n || u(n) ? I(n) : t(n) }

                        function I(n) { return 47 === n ? (e.consume(n), U) : 58 === n || 95 === n || r(n) ? (e.consume(n), L) : o(n) ? (p = I, j(n)) : l(n) ? (e.consume(n), I) : U(n) }

                        function L(n) { return 45 === n || 46 === n || 58 === n || 95 === n || i(n) ? (e.consume(n), L) : M(n) }

                        function M(n) { return 61 === n ? (e.consume(n), z) : o(n) ? (p = M, j(n)) : l(n) ? (e.consume(n), M) : I(n) }

                        function z(n) { return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n), c = n, R) : o(n) ? (p = z, j(n)) : l(n) ? (e.consume(n), z) : (e.consume(n), c = void 0, _) }

                        function R(n) { return n === c ? (e.consume(n), B) : null === n ? t(n) : o(n) ? (p = R, j(n)) : (e.consume(n), R) }

                        function B(e) { return 62 === e || 47 === e || u(e) ? I(e) : t(e) }

                        function _(n) { return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 96 === n ? t(n) : 62 === n || u(n) ? I(n) : (e.consume(n), _) }

                        function j(n) { return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), a(e, H, "linePrefix", d.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4) }

                        function H(n) { return e.enter("htmlTextData"), p(n) }

                        function U(r) { return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(r) }
                    }
                };
            e.exports = c
        },
        1145: function(e, n, t) {
            "use strict";
            var r = {
                name: "labelStartImage",
                tokenize: function(e, n, t) {
                    var r = this;
                    return function(n) { return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(n), e.exit("labelImageMarker"), i };

                    function i(n) { return 91 === n ? (e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelImage"), o) : t(n) }

                    function o(e) { return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? t(e) : n(e) }
                },
                resolveAll: t(897).resolveAll
            };
            e.exports = r
        },
        1146: function(e, n, t) {
            "use strict";
            var r = {
                name: "labelStartLink",
                tokenize: function(e, n, t) {
                    var r = this;
                    return function(n) { return e.enter("labelLink"), e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelLink"), i };

                    function i(e) { return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? t(e) : n(e) }
                },
                resolveAll: t(897).resolveAll
            };
            e.exports = r
        },
        1147: function(e, n, t) {
            "use strict";
            var r = t(790),
                i = { name: "lineEnding", tokenize: function(e, n) { return function(t) { return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r(e, n, "linePrefix") } } };
            e.exports = i
        },
        1148: function(e, n, t) {
            "use strict";
            var r = t(970),
                i = t(812),
                o = t(848),
                u = t(964),
                l = t(790),
                a = t(866),
                c = t(975),
                s = {
                    name: "list",
                    tokenize: function(e, n, t) {
                        var l = this,
                            s = o(l.events, "linePrefix"),
                            p = 0;
                        return function(n) { var i = l.containerState.type || (42 === n || 43 === n || 45 === n ? "listUnordered" : "listOrdered"); if ("listUnordered" === i ? !l.containerState.marker || n === l.containerState.marker : r(n)) { if (l.containerState.type || (l.containerState.type = i, e.enter(i, { _container: !0 })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === n || 45 === n ? e.check(c, t, h)(n) : h(n); if (!l.interrupt || 49 === n) return e.enter("listItemPrefix"), e.enter("listItemValue"), d(n) } return t(n) };

                        function d(n) { return r(n) && ++p < 10 ? (e.consume(n), d) : (!l.interrupt || p < 2) && (l.containerState.marker ? n === l.containerState.marker : 41 === n || 46 === n) ? (e.exit("listItemValue"), h(n)) : t(n) }

                        function h(n) { return e.enter("listItemMarker"), e.consume(n), e.exit("listItemMarker"), l.containerState.marker = l.containerState.marker || n, e.check(a, l.interrupt ? t : m, e.attempt(f, v, g)) }

                        function m(e) { return l.containerState.initialBlankLine = !0, s++, v(e) }

                        function g(n) { return i(n) ? (e.enter("listItemPrefixWhitespace"), e.consume(n), e.exit("listItemPrefixWhitespace"), v) : t(n) }

                        function v(t) { return l.containerState.size = s + u(l.sliceStream(e.exit("listItemPrefix"))), n(t) }
                    },
                    continuation: {
                        tokenize: function(e, n, t) {
                            var r = this;
                            return r.containerState._closeFlow = void 0, e.check(a, (function(t) { return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, l(e, n, "listItemIndent", r.containerState.size + 1)(t) }), (function(t) { if (r.containerState.furtherBlankLines || !i(t)) return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, o(t); return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0, e.attempt(p, n, o)(t) }));

                            function o(i) { return r.containerState._closeFlow = !0, r.interrupt = void 0, l(e, e.attempt(s, n, t), "linePrefix", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(i) }
                        }
                    },
                    exit: function(e) { e.exit(this.containerState.type) }
                },
                f = { tokenize: function(e, n, t) { var r = this; return l(e, (function(e) { return i(e) || !o(r.events, "listItemPrefixWhitespace") ? t(e) : n(e) }), "listItemPrefixWhitespace", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 5) }, partial: !0 },
                p = { tokenize: function(e, n, t) { var r = this; return l(e, (function(e) { return o(r.events, "listItemIndent") === r.containerState.size ? n(e) : t(e) }), "listItemIndent", r.containerState.size + 1) }, partial: !0 };
            e.exports = s
        },
        1149: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(821),
                o = t(790),
                u = {
                    name: "setextUnderline",
                    tokenize: function(e, n, t) {
                        var i, u, l = this,
                            a = l.events.length;
                        for (; a--;)
                            if ("lineEnding" !== l.events[a][1].type && "linePrefix" !== l.events[a][1].type && "content" !== l.events[a][1].type) { u = "paragraph" === l.events[a][1].type; break }
                        return function(n) { if (!l.lazy && (l.interrupt || u)) return e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), i = n, c(n); return t(n) };

                        function c(n) { return n === i ? (e.consume(n), c) : (e.exit("setextHeadingLineSequence"), o(e, s, "lineSuffix")(n)) }

                        function s(i) { return null === i || r(i) ? (e.exit("setextHeadingLine"), n(i)) : t(i) }
                    },
                    resolveTo: function(e, n) {
                        var t, r, o, u, l = e.length;
                        for (; l--;)
                            if ("enter" === e[l][0]) { if ("content" === e[l][1].type) { t = l; break } "paragraph" === e[l][1].type && (r = l) } else "content" === e[l][1].type && e.splice(l, 1), o || "definition" !== e[l][1].type || (o = l);
                        u = { type: "setextHeading", start: i(e[r][1].start), end: i(e[e.length - 1][1].end) }, e[r][1].type = "setextHeadingText", o ? (e.splice(r, 0, ["enter", u, n]), e.splice(o + 1, 0, ["exit", e[t][1], n]), e[t][1].end = i(e[o][1].end)) : e[t][1] = u;
                        return e.push(["exit", u, n]), e
                    }
                };
            e.exports = u
        },
        1150: function(e, n, t) {
            "use strict";
            var r = /[\0\t\n\r]/g;
            e.exports = function() {
                var e, n = !0,
                    t = 1,
                    i = "";
                return function(o, u, l) {
                    var a, c, s, f, p, d = [];
                    o = i + o.toString(u), s = 0, i = "", n && (65279 === o.charCodeAt(0) && s++, n = void 0);
                    for (; s < o.length;) {
                        if (r.lastIndex = s, a = r.exec(o), f = a ? a.index : o.length, p = o.charCodeAt(f), !a) { i = o.slice(s); break }
                        if (10 === p && s === f && e) d.push(-3), e = void 0;
                        else if (e && (d.push(-5), e = void 0), s < f && (d.push(o.slice(s, f)), t += f - s), 0 === p) d.push(65533), t++;
                        else if (9 === p)
                            for (c = 4 * Math.ceil(t / 4), d.push(-2); t++ < c;) d.push(-1);
                        else 10 === p ? (d.push(-4), t = 1) : (e = !0, t = 1);
                        s = f + 1
                    }
                    l && (e && d.push(-5), i && d.push(i), d.push(null));
                    return d
                }
            }
        },
        1151: function(e, n, t) {
            "use strict";
            var r = t(965);
            e.exports = function(e) { for (; !r(e);); return e }
        },
        1152: function(e, n, t) {
            "use strict";
            var r = t(1153);
            e.exports = function(e, n) {
                e && !e.process && (n = e, e = null);
                return e ? function(e, n) {
                    return t;

                    function t(t, i, o) {
                        function u(e) { o(e) }
                        e.run(r(t, n), i, u)
                    }
                }(e, n) : function(e) {
                    return n;

                    function n(n) { return r(n, e) }
                }(n)
            }
        },
        1153: function(e, n, t) {
            "use strict";
            e.exports = t(1154)
        },
        1154: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t = function(e, n) {
                        var t = n || {};
                        void 0 === t.allowDangerousHTML || p || (p = !0, console.warn("mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"));
                        var r = t.allowDangerousHtml || t.allowDangerousHTML,
                            a = {};
                        return d.dangerous = r, d.definition = l(e), d.footnoteById = a, d.footnoteOrder = [], d.augment = c, d.handlers = Object.assign({}, s, t.handlers), d.unknownHandler = t.unknownHandler, d.passThrough = t.passThrough, i(e, "footnoteDefinition", h), d;

                        function c(e, n) { var t, r; return e && e.data && ((t = e.data).hName && ("element" !== n.type && (n = { type: "element", tagName: "", properties: {}, children: [] }), n.tagName = t.hName), "element" === n.type && t.hProperties && (n.properties = Object.assign({}, n.properties, t.hProperties)), n.children && t.hChildren && (n.children = t.hChildren)), r = e && e.position ? e : { position: e }, u(r) || (n.position = { start: o.start(r), end: o.end(r) }), n }

                        function d(e, n, t, r) { return void 0 !== r && null !== r || "object" !== typeof t || !("length" in t) || (r = t, t = {}), c(e, { type: "element", tagName: n, properties: t || {}, children: r || [] }) }

                        function h(e) {
                            var n = String(e.identifier).toUpperCase();
                            f.call(a, n) || (a[n] = e)
                        }
                    }(e, n),
                    d = a(t, e),
                    h = c(t);
                h && (d.children = d.children.concat(r("text", "\n"), h));
                return d
            };
            var r = t(801),
                i = t(898),
                o = t(978),
                u = t(1156),
                l = t(1157),
                a = t(979),
                c = t(1158),
                s = t(1159),
                f = {}.hasOwnProperty,
                p = !1
        },
        1155: function(e, n) { e.exports = function(e) { return e } },
        1156: function(e, n, t) {
            "use strict";
            e.exports = function(e) { return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column }
        },
        1157: function(e, n, t) {
            "use strict";
            var r = t(898);
            e.exports = function(e, n) {
                return function(e) {
                    return n;

                    function n(n) { var t = n && o(n); return t && i.call(e, t) ? e[t] : null }
                }(function(e) {
                    var n = {};
                    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
                    return r(e, "definition", t), n;

                    function t(e) {
                        var t = o(e.identifier);
                        i.call(n, t) || (n[t] = e)
                    }
                }(e))
            };
            var i = {}.hasOwnProperty;

            function o(e) { return e.toUpperCase() }
        },
        1158: function(e, n, t) {
            "use strict";
            e.exports = function(e) {
                var n, t, u, l, a = e.footnoteById,
                    c = e.footnoteOrder,
                    s = c.length,
                    f = -1,
                    p = [];
                for (; ++f < s;)(n = a[c[f].toUpperCase()]) && (u = n.children.concat(), l = u[u.length - 1], t = { type: "link", url: "#fnref-" + n.identifier, data: { hProperties: { className: ["footnote-backref"] } }, children: [{ type: "text", value: "\u21a9" }] }, l && "paragraph" === l.type || (l = { type: "paragraph", children: [] }, u.push(l)), l.children.push(t), p.push({ type: "listItem", data: { hProperties: { id: "fn-" + n.identifier } }, children: u, position: n.position }));
                if (0 === p.length) return null;
                return e(null, "div", { className: ["footnotes"] }, o([r(e), i(e, { type: "list", ordered: !0, children: p })], !0))
            };
            var r = t(980),
                i = t(981),
                o = t(850)
        },
        1159: function(e, n, t) {
            "use strict";

            function r() { return null }
            e.exports = { blockquote: t(1160), break: t(1161), code: t(1162), delete: t(1163), emphasis: t(1164), footnoteReference: t(982), footnote: t(1165), heading: t(1166), html: t(1167), imageReference: t(1168), image: t(1169), inlineCode: t(1170), linkReference: t(1171), link: t(1172), listItem: t(1173), list: t(981), paragraph: t(1174), root: t(1175), strong: t(1176), table: t(1177), text: t(1178), thematicBreak: t(980), toml: r, yaml: r, definition: r, footnoteDefinition: r }
        },
        1160: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e(n, "blockquote", r(i(e, n), !0)) };
            var r = t(850),
                i = t(797)
        },
        1161: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return [e(n, "br"), r("text", "\n")] };
            var r = t(801)
        },
        1162: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t, i = n.value ? n.value + "\n" : "",
                    o = n.lang && n.lang.match(/^[^ \t]+(?=[ \t]|$)/),
                    u = {};
                o && (u.className = ["language-" + o]);
                t = e(n, "code", u, [r("text", i)]), n.meta && (t.data = { meta: n.meta });
                return e(n.position, "pre", [t])
            };
            var r = t(801)
        },
        1163: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e(n, "del", r(e, n)) };
            var r = t(797)
        },
        1164: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e(n, "em", r(e, n)) };
            var r = t(797)
        },
        1165: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t = e.footnoteById,
                    i = e.footnoteOrder,
                    o = 1;
                for (; o in t;) o++;
                return o = String(o), i.push(o), t[o] = { type: "footnoteDefinition", identifier: o, children: [{ type: "paragraph", children: n.children }], position: n.position }, r(e, { type: "footnoteReference", identifier: o, position: n.position })
            };
            var r = t(982)
        },
        1166: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e(n, "h" + n.depth, r(e, n)) };
            var r = t(797)
        },
        1167: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e.dangerous ? e.augment(n, r("raw", n.value)) : null };
            var r = t(801)
        },
        1168: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t, o = e.definition(n.identifier);
                if (!o) return i(e, n);
                t = { src: r(o.url || ""), alt: n.alt }, null !== o.title && void 0 !== o.title && (t.title = o.title);
                return e(n, "img", t)
            };
            var r = t(869),
                i = t(983)
        },
        1169: function(e, n, t) {
            "use strict";
            var r = t(869);
            e.exports = function(e, n) {
                var t = { src: r(n.url), alt: n.alt };
                null !== n.title && void 0 !== n.title && (t.title = n.title);
                return e(n, "img", t)
            }
        },
        1170: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { var t = n.value.replace(/\r?\n|\r/g, " "); return e(n, "code", [r("text", t)]) };
            var r = t(801)
        },
        1171: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t, u = e.definition(n.identifier);
                if (!u) return i(e, n);
                t = { href: r(u.url || "") }, null !== u.title && void 0 !== u.title && (t.title = u.title);
                return e(n, "a", t, o(e, n))
            };
            var r = t(869),
                i = t(983),
                o = t(797)
        },
        1172: function(e, n, t) {
            "use strict";
            var r = t(869),
                i = t(797);
            e.exports = function(e, n) {
                var t = { href: r(n.url) };
                null !== n.title && void 0 !== n.title && (t.title = n.title);
                return e(n, "a", t, i(e, n))
            }
        },
        1173: function(e, n, t) {
            "use strict";
            e.exports = function(e, n, t) {
                var u, l, a, c = i(e, n),
                    s = c[0],
                    f = t ? function(e) {
                        var n = e.spread,
                            t = e.children,
                            r = t.length,
                            i = -1;
                        for (; !n && ++i < r;) n = o(t[i]);
                        return n
                    }(t) : o(n),
                    p = {},
                    d = [];
                "boolean" === typeof n.checked && (s && "p" === s.tagName || (s = e(null, "p", []), c.unshift(s)), s.children.length > 0 && s.children.unshift(r("text", " ")), s.children.unshift(e(null, "input", { type: "checkbox", checked: n.checked, disabled: !0 })), p.className = ["task-list-item"]);
                u = c.length, l = -1;
                for (; ++l < u;) a = c[l], (f || 0 !== l || "p" !== a.tagName) && d.push(r("text", "\n")), "p" !== a.tagName || f ? d.push(a) : d = d.concat(a.children);
                u && (f || "p" !== a.tagName) && d.push(r("text", "\n"));
                return e(n, "li", p, d)
            };
            var r = t(801),
                i = t(797);

            function o(e) { var n = e.spread; return void 0 === n || null === n ? e.children.length > 1 : n }
        },
        1174: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e(n, "p", r(e, n)) };
            var r = t(797)
        },
        1175: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e.augment(n, r("root", i(o(e, n)))) };
            var r = t(801),
                i = t(850),
                o = t(797)
        },
        1176: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e(n, "strong", r(e, n)) };
            var r = t(797)
        },
        1177: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t, u, l, a, c, s = n.children,
                    f = s.length,
                    p = n.align || [],
                    d = p.length,
                    h = [];
                for (; f--;) {
                    for (u = s[f].children, a = 0 === f ? "th" : "td", t = d || u.length, l = []; t--;) c = u[t], l[t] = e(c, a, { align: p[t] }, c ? o(e, c) : []);
                    h[f] = e(s[f], "tr", i(l, !0))
                }
                return e(n, "table", i([e(h[0].position, "thead", i([h[0]], !0))].concat(h[1] ? e({ start: r.start(h[1]), end: r.end(h[h.length - 1]) }, "tbody", i(h.slice(1), !0)) : []), !0))
            };
            var r = t(978),
                i = t(850),
                o = t(797)
        },
        1178: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e.augment(n, r("text", String(n.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1"))) };
            var r = t(801)
        },
        1179: function(e, n, t) {
            "use strict";
            var r = t(984),
                i = t(986),
                o = t(990),
                u = t(991),
                l = t(994),
                a = t(1180);
            e.exports = r([o, i, u, l, a])
        },
        1180: function(e, n, t) {
            "use strict";
            var r = t(870),
                i = t(833),
                o = t(992),
                u = r.boolean,
                l = r.overloadedBoolean,
                a = r.booleanish,
                c = r.number,
                s = r.spaceSeparated,
                f = r.commaSeparated;
            e.exports = i({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: o, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: f, acceptCharset: s, accessKey: s, action: null, allow: null, allowFullScreen: u, allowPaymentRequest: u, allowUserMedia: u, alt: null, as: null, async: u, autoCapitalize: null, autoComplete: s, autoFocus: u, autoPlay: u, capture: u, charSet: null, checked: u, cite: null, className: s, cols: c, colSpan: null, content: null, contentEditable: a, controls: u, controlsList: s, coords: c | f, crossOrigin: null, data: null, dateTime: null, decoding: null, default: u, defer: u, dir: null, dirName: null, disabled: u, download: l, draggable: a, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: u, formTarget: null, headers: s, height: c, hidden: u, high: c, href: null, hrefLang: null, htmlFor: s, httpEquiv: s, id: null, imageSizes: null, imageSrcSet: f, inputMode: null, integrity: null, is: null, isMap: u, itemId: null, itemProp: s, itemRef: s, itemScope: u, itemType: s, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: u, low: c, manifest: null, max: null, maxLength: c, media: null, method: null, min: null, minLength: c, multiple: u, muted: u, name: null, nonce: null, noModule: u, noValidate: u, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: u, optimum: c, pattern: null, ping: s, placeholder: null, playsInline: u, poster: null, preload: null, readOnly: u, referrerPolicy: null, rel: s, required: u, reversed: u, rows: c, rowSpan: c, sandbox: s, scope: null, scoped: u, seamless: u, selected: u, shape: null, size: c, sizes: null, slot: null, span: c, spellCheck: a, src: null, srcDoc: null, srcLang: null, srcSet: f, start: c, step: null, style: null, tabIndex: c, target: null, title: null, translate: null, type: null, typeMustMatch: u, useMap: null, value: a, width: c, wrap: null, align: null, aLink: null, archive: s, axis: null, background: null, bgColor: null, border: c, borderColor: null, bottomMargin: c, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: u, declare: u, event: null, face: null, frame: null, frameBorder: null, hSpace: c, leftMargin: c, link: null, longDesc: null, lowSrc: null, marginHeight: c, marginWidth: c, noResize: u, noHref: u, noShade: u, noWrap: u, object: null, profile: null, prompt: null, rev: null, rightMargin: c, rules: null, scheme: null, scrolling: a, standby: null, summary: null, text: null, topMargin: c, valueType: null, version: null, vAlign: null, vLink: null, vSpace: c, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: u, disableRemotePlayback: u, prefix: null, property: null, results: c, security: null, unselectable: null } })
        },
        1181: function(e, n, t) {
            var r = t(898),
                i = [].splice;
            e.exports = function(e) {
                if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
                return e.allowedElements || e.disallowedElements || e.allowElement ? function(e) { r(e, "element", n) } : void 0;

                function n(n, t, r) { var o; if (e.allowedElements ? o = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (o = e.disallowedElements.includes(n.tagName)), !o && e.allowElement && (o = !e.allowElement(n, t, r)), o) { var u = [t, 1]; return e.unwrapDisallowed && n.children && (u = u.concat(n.children)), i.apply(r.children, u), t } }
            }
        },
        1182: function(e, n) {
            var t = ["http", "https", "mailto", "tel"];
            e.exports = function(e) {
                var n = (e || "").trim(),
                    r = n.charAt(0);
                if ("#" === r || "/" === r) return n;
                var i = n.indexOf(":");
                if (-1 === i) return n;
                var o = -1;
                for (; ++o < t.length;) { var u = t[o]; if (i === u.length && n.slice(0, u.length).toLowerCase() === u) return n }
                if (-1 !== (o = n.indexOf("?")) && i > o) return n;
                if (-1 !== (o = n.indexOf("#")) && i > o) return n;
                return "javascript:void(0)"
            }
        },
        1183: function(e, n, t) {
            "use strict";
            var r = t(1),
                i = t(1184),
                o = t(1186),
                u = t(1188),
                l = t(1189),
                a = t(1190),
                c = t(1191),
                s = t(1192);
            n.hastToReact = h, n.hastChildrenToReact = d;
            var f = {}.hasOwnProperty,
                p = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

            function d(e, n) { for (var t, r = [], i = -1; ++i < n.children.length;) "element" === (t = n.children[i]).type ? r.push(h(e, t, i, n)) : "text" === t.type ? "element" === n.type && p.has(n.tagName) && "\n" === t.value || r.push(t.value) : "raw" !== t.type || e.options.skipHtml || r.push(t.value); return r }

            function h(e, n, t, u) {
                var l, a = e.options,
                    c = e.schema,
                    s = n.tagName,
                    p = {},
                    h = c;
                for (l in "html" === c.space && "svg" === s && (h = o, e.schema = h), n.properties) f.call(n.properties, l) && g(p, l, n.properties[l], e);
                "ol" !== s && "ul" !== s || e.listDepth++;
                var v = d(e, n);
                "ol" !== s && "ul" !== s || e.listDepth--, e.schema = c;
                var x, y = n.position || { start: { line: null, column: null, offset: null }, end: { line: null, column: null, offset: null } },
                    k = a.components && f.call(a.components, s) ? a.components[s] : s,
                    b = "string" === typeof k || k === r.Fragment;
                if (!i.isValidElementType(k)) throw new TypeError("Component for name `".concat(s, "` not defined or is not renderable"));
                if (p.key = [s, y.start.line, y.start.column, t].join("-"), "a" === s && a.linkTarget && (p.target = "function" === typeof a.linkTarget ? a.linkTarget(p.href, n.children, p.title) : a.linkTarget), "a" === s && a.transformLinkUri && (p.href = a.transformLinkUri(p.href, n.children, p.title)), b || "code" !== s || "pre" === u.tagName || (p.inline = !0), b || "h1" !== s && "h2" !== s && "h3" !== s && "h4" !== s && "h5" !== s && "h6" !== s || (p.level = parseInt(s.charAt(1), 10)), "img" === s && a.transformImageUri && (p.src = a.transformImageUri(p.src, p.alt, p.title)), !b && "li" === s) {
                    var w = function(e) { var n = -1; for (; ++n < e.children.length;) { var t = e.children[n]; if ("element" === t.type && "input" === t.tagName) return t } return null }(n);
                    p.checked = w ? Boolean(w.properties.checked) : null, p.index = m(u, n), p.ordered = "ol" === u.tagName
                }
                return b || "ol" !== s && "ul" !== s || (p.ordered = "ol" === s, p.depth = e.listDepth), "td" !== s && "th" !== s || (p.align && (p.style || (p.style = {}), p.style.textAlign = p.align, delete p.align), b || (p.isHeader = "th" === s)), b || "tr" !== s || (p.isHeader = Boolean("thead" === u.tagName)), a.sourcePos && (p["data-sourcepos"] = [(x = y).start.line, ":", x.start.column, "-", x.end.line, ":", x.end.column].map((function(e) { return String(e) })).join("")), !b && a.rawSourcePos && (p.sourcePosition = n.position), !b && a.includeElementIndex && (p.index = m(u, n), p.siblingCount = m(u)), b || (p.node = n), v.length > 0 ? r.createElement(k, p, v) : r.createElement(k, p)
            }

            function m(e, n) { for (var t = -1, r = 0; ++t < e.children.length && e.children[t] !== n;) "element" === e.children[t].type && r++; return r }

            function g(e, n, t, r) {
                var i = u(r.schema, n),
                    o = t;
                null !== o && void 0 !== o && o === o && (o && "object" === typeof o && "length" in o && (o = (i.commaSeparated ? c : a).stringify(o)), "style" === i.property && "string" === typeof o && (o = function(e) {
                    var n = {};
                    try { s(e, t) } catch (r) {}
                    return n;

                    function t(e, t) {
                        var r = "-ms-" === e.slice(0, 4) ? "ms-".concat(e.slice(4)) : e;
                        n[r.replace(/-([a-z])/g, v)] = t
                    }
                }(o)), i.space ? e[f.call(l, i.property) ? l[i.property] : i.property] = o : e[i.attribute] = o)
            }

            function v(e, n) { return n.toUpperCase() }
        },
        1184: function(e, n, t) {
            "use strict";
            e.exports = t(1185)
        },
        1185: function(e, n, t) {
            "use strict";
            var r = 60103,
                i = 60106,
                o = 60107,
                u = 60108,
                l = 60114,
                a = 60109,
                c = 60110,
                s = 60112,
                f = 60113,
                p = 60120,
                d = 60115,
                h = 60116,
                m = 60121,
                g = 60122,
                v = 60117,
                x = 60129,
                y = 60131;
            if ("function" === typeof Symbol && Symbol.for) {
                var k = Symbol.for;
                r = k("react.element"), i = k("react.portal"), o = k("react.fragment"), u = k("react.strict_mode"), l = k("react.profiler"), a = k("react.provider"), c = k("react.context"), s = k("react.forward_ref"), f = k("react.suspense"), p = k("react.suspense_list"), d = k("react.memo"), h = k("react.lazy"), m = k("react.block"), g = k("react.server.block"), v = k("react.fundamental"), x = k("react.debug_trace_mode"), y = k("react.legacy_hidden")
            }

            function b(e) {
                if ("object" === typeof e && null !== e) {
                    var n = e.$$typeof;
                    switch (n) {
                        case r:
                            switch (e = e.type) {
                                case o:
                                case l:
                                case u:
                                case f:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case s:
                                        case h:
                                        case d:
                                        case a:
                                            return e;
                                        default:
                                            return n
                                    }
                            }
                        case i:
                            return n
                    }
                }
            }
            var w = a,
                C = r,
                S = s,
                E = o,
                F = h,
                A = d,
                T = i,
                P = l,
                D = u,
                O = f;
            n.ContextConsumer = c, n.ContextProvider = w, n.Element = C, n.ForwardRef = S, n.Fragment = E, n.Lazy = F, n.Memo = A, n.Portal = T, n.Profiler = P, n.StrictMode = D, n.Suspense = O, n.isAsyncMode = function() { return !1 }, n.isConcurrentMode = function() { return !1 }, n.isContextConsumer = function(e) { return b(e) === c }, n.isContextProvider = function(e) { return b(e) === a }, n.isElement = function(e) { return "object" === typeof e && null !== e && e.$$typeof === r }, n.isForwardRef = function(e) { return b(e) === s }, n.isFragment = function(e) { return b(e) === o }, n.isLazy = function(e) { return b(e) === h }, n.isMemo = function(e) { return b(e) === d }, n.isPortal = function(e) { return b(e) === i }, n.isProfiler = function(e) { return b(e) === l }, n.isStrictMode = function(e) { return b(e) === u }, n.isSuspense = function(e) { return b(e) === f }, n.isValidElementType = function(e) { return "string" === typeof e || "function" === typeof e || e === o || e === l || e === x || e === u || e === f || e === p || e === y || "object" === typeof e && null !== e && (e.$$typeof === h || e.$$typeof === d || e.$$typeof === a || e.$$typeof === c || e.$$typeof === s || e.$$typeof === v || e.$$typeof === m || e[0] === g) }, n.typeOf = b
        },
        1186: function(e, n, t) {
            "use strict";
            var r = t(984),
                i = t(986),
                o = t(990),
                u = t(991),
                l = t(994),
                a = t(1187);
            e.exports = r([o, i, u, l, a])
        },
        1187: function(e, n, t) {
            "use strict";
            var r = t(870),
                i = t(833),
                o = t(993),
                u = r.boolean,
                l = r.number,
                a = r.spaceSeparated,
                c = r.commaSeparated,
                s = r.commaOrSpaceSeparated;
            e.exports = i({ space: "svg", attributes: { accentHeight: "accent-height", alignmentBaseline: "alignment-baseline", arabicForm: "arabic-form", baselineShift: "baseline-shift", capHeight: "cap-height", className: "class", clipPath: "clip-path", clipRule: "clip-rule", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", colorProfile: "color-profile", colorRendering: "color-rendering", crossOrigin: "crossorigin", dataType: "datatype", dominantBaseline: "dominant-baseline", enableBackground: "enable-background", fillOpacity: "fill-opacity", fillRule: "fill-rule", floodColor: "flood-color", floodOpacity: "flood-opacity", fontFamily: "font-family", fontSize: "font-size", fontSizeAdjust: "font-size-adjust", fontStretch: "font-stretch", fontStyle: "font-style", fontVariant: "font-variant", fontWeight: "font-weight", glyphName: "glyph-name", glyphOrientationHorizontal: "glyph-orientation-horizontal", glyphOrientationVertical: "glyph-orientation-vertical", hrefLang: "hreflang", horizAdvX: "horiz-adv-x", horizOriginX: "horiz-origin-x", horizOriginY: "horiz-origin-y", imageRendering: "image-rendering", letterSpacing: "letter-spacing", lightingColor: "lighting-color", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", navDown: "nav-down", navDownLeft: "nav-down-left", navDownRight: "nav-down-right", navLeft: "nav-left", navNext: "nav-next", navPrev: "nav-prev", navRight: "nav-right", navUp: "nav-up", navUpLeft: "nav-up-left", navUpRight: "nav-up-right", onAbort: "onabort", onActivate: "onactivate", onAfterPrint: "onafterprint", onBeforePrint: "onbeforeprint", onBegin: "onbegin", onCancel: "oncancel", onCanPlay: "oncanplay", onCanPlayThrough: "oncanplaythrough", onChange: "onchange", onClick: "onclick", onClose: "onclose", onCopy: "oncopy", onCueChange: "oncuechange", onCut: "oncut", onDblClick: "ondblclick", onDrag: "ondrag", onDragEnd: "ondragend", onDragEnter: "ondragenter", onDragExit: "ondragexit", onDragLeave: "ondragleave", onDragOver: "ondragover", onDragStart: "ondragstart", onDrop: "ondrop", onDurationChange: "ondurationchange", onEmptied: "onemptied", onEnd: "onend", onEnded: "onended", onError: "onerror", onFocus: "onfocus", onFocusIn: "onfocusin", onFocusOut: "onfocusout", onHashChange: "onhashchange", onInput: "oninput", onInvalid: "oninvalid", onKeyDown: "onkeydown", onKeyPress: "onkeypress", onKeyUp: "onkeyup", onLoad: "onload", onLoadedData: "onloadeddata", onLoadedMetadata: "onloadedmetadata", onLoadStart: "onloadstart", onMessage: "onmessage", onMouseDown: "onmousedown", onMouseEnter: "onmouseenter", onMouseLeave: "onmouseleave", onMouseMove: "onmousemove", onMouseOut: "onmouseout", onMouseOver: "onmouseover", onMouseUp: "onmouseup", onMouseWheel: "onmousewheel", onOffline: "onoffline", onOnline: "ononline", onPageHide: "onpagehide", onPageShow: "onpageshow", onPaste: "onpaste", onPause: "onpause", onPlay: "onplay", onPlaying: "onplaying", onPopState: "onpopstate", onProgress: "onprogress", onRateChange: "onratechange", onRepeat: "onrepeat", onReset: "onreset", onResize: "onresize", onScroll: "onscroll", onSeeked: "onseeked", onSeeking: "onseeking", onSelect: "onselect", onShow: "onshow", onStalled: "onstalled", onStorage: "onstorage", onSubmit: "onsubmit", onSuspend: "onsuspend", onTimeUpdate: "ontimeupdate", onToggle: "ontoggle", onUnload: "onunload", onVolumeChange: "onvolumechange", onWaiting: "onwaiting", onZoom: "onzoom", overlinePosition: "overline-position", overlineThickness: "overline-thickness", paintOrder: "paint-order", panose1: "panose-1", pointerEvents: "pointer-events", referrerPolicy: "referrerpolicy", renderingIntent: "rendering-intent", shapeRendering: "shape-rendering", stopColor: "stop-color", stopOpacity: "stop-opacity", strikethroughPosition: "strikethrough-position", strikethroughThickness: "strikethrough-thickness", strokeDashArray: "stroke-dasharray", strokeDashOffset: "stroke-dashoffset", strokeLineCap: "stroke-linecap", strokeLineJoin: "stroke-linejoin", strokeMiterLimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", tabIndex: "tabindex", textAnchor: "text-anchor", textDecoration: "text-decoration", textRendering: "text-rendering", typeOf: "typeof", underlinePosition: "underline-position", underlineThickness: "underline-thickness", unicodeBidi: "unicode-bidi", unicodeRange: "unicode-range", unitsPerEm: "units-per-em", vAlphabetic: "v-alphabetic", vHanging: "v-hanging", vIdeographic: "v-ideographic", vMathematical: "v-mathematical", vectorEffect: "vector-effect", vertAdvY: "vert-adv-y", vertOriginX: "vert-origin-x", vertOriginY: "vert-origin-y", wordSpacing: "word-spacing", writingMode: "writing-mode", xHeight: "x-height", playbackOrder: "playbackorder", timelineBegin: "timelinebegin" }, transform: o, properties: { about: s, accentHeight: l, accumulate: null, additive: null, alignmentBaseline: null, alphabetic: l, amplitude: l, arabicForm: null, ascent: l, attributeName: null, attributeType: null, azimuth: l, bandwidth: null, baselineShift: null, baseFrequency: null, baseProfile: null, bbox: null, begin: null, bias: l, by: null, calcMode: null, capHeight: l, className: a, clip: null, clipPath: null, clipPathUnits: null, clipRule: null, color: null, colorInterpolation: null, colorInterpolationFilters: null, colorProfile: null, colorRendering: null, content: null, contentScriptType: null, contentStyleType: null, crossOrigin: null, cursor: null, cx: null, cy: null, d: null, dataType: null, defaultAction: null, descent: l, diffuseConstant: l, direction: null, display: null, dur: null, divisor: l, dominantBaseline: null, download: u, dx: null, dy: null, edgeMode: null, editable: null, elevation: l, enableBackground: null, end: null, event: null, exponent: l, externalResourcesRequired: null, fill: null, fillOpacity: l, fillRule: null, filter: null, filterRes: null, filterUnits: null, floodColor: null, floodOpacity: null, focusable: null, focusHighlight: null, fontFamily: null, fontSize: null, fontSizeAdjust: null, fontStretch: null, fontStyle: null, fontVariant: null, fontWeight: null, format: null, fr: null, from: null, fx: null, fy: null, g1: c, g2: c, glyphName: c, glyphOrientationHorizontal: null, glyphOrientationVertical: null, glyphRef: null, gradientTransform: null, gradientUnits: null, handler: null, hanging: l, hatchContentUnits: null, hatchUnits: null, height: null, href: null, hrefLang: null, horizAdvX: l, horizOriginX: l, horizOriginY: l, id: null, ideographic: l, imageRendering: null, initialVisibility: null, in: null, in2: null, intercept: l, k: l, k1: l, k2: l, k3: l, k4: l, kernelMatrix: s, kernelUnitLength: null, keyPoints: null, keySplines: null, keyTimes: null, kerning: null, lang: null, lengthAdjust: null, letterSpacing: null, lightingColor: null, limitingConeAngle: l, local: null, markerEnd: null, markerMid: null, markerStart: null, markerHeight: null, markerUnits: null, markerWidth: null, mask: null, maskContentUnits: null, maskUnits: null, mathematical: null, max: null, media: null, mediaCharacterEncoding: null, mediaContentEncodings: null, mediaSize: l, mediaTime: null, method: null, min: null, mode: null, name: null, navDown: null, navDownLeft: null, navDownRight: null, navLeft: null, navNext: null, navPrev: null, navRight: null, navUp: null, navUpLeft: null, navUpRight: null, numOctaves: null, observer: null, offset: null, onAbort: null, onActivate: null, onAfterPrint: null, onBeforePrint: null, onBegin: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnd: null, onEnded: null, onError: null, onFocus: null, onFocusIn: null, onFocusOut: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadStart: null, onMessage: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onMouseWheel: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRepeat: null, onReset: null, onResize: null, onScroll: null, onSeeked: null, onSeeking: null, onSelect: null, onShow: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnload: null, onVolumeChange: null, onWaiting: null, onZoom: null, opacity: null, operator: null, order: null, orient: null, orientation: null, origin: null, overflow: null, overlay: null, overlinePosition: l, overlineThickness: l, paintOrder: null, panose1: null, path: null, pathLength: l, patternContentUnits: null, patternTransform: null, patternUnits: null, phase: null, ping: a, pitch: null, playbackOrder: null, pointerEvents: null, points: null, pointsAtX: l, pointsAtY: l, pointsAtZ: l, preserveAlpha: null, preserveAspectRatio: null, primitiveUnits: null, propagate: null, property: s, r: null, radius: null, referrerPolicy: null, refX: null, refY: null, rel: s, rev: s, renderingIntent: null, repeatCount: null, repeatDur: null, requiredExtensions: s, requiredFeatures: s, requiredFonts: s, requiredFormats: s, resource: null, restart: null, result: null, rotate: null, rx: null, ry: null, scale: null, seed: null, shapeRendering: null, side: null, slope: null, snapshotTime: null, specularConstant: l, specularExponent: l, spreadMethod: null, spacing: null, startOffset: null, stdDeviation: null, stemh: null, stemv: null, stitchTiles: null, stopColor: null, stopOpacity: null, strikethroughPosition: l, strikethroughThickness: l, string: null, stroke: null, strokeDashArray: s, strokeDashOffset: null, strokeLineCap: null, strokeLineJoin: null, strokeMiterLimit: l, strokeOpacity: l, strokeWidth: null, style: null, surfaceScale: l, syncBehavior: null, syncBehaviorDefault: null, syncMaster: null, syncTolerance: null, syncToleranceDefault: null, systemLanguage: s, tabIndex: l, tableValues: null, target: null, targetX: l, targetY: l, textAnchor: null, textDecoration: null, textRendering: null, textLength: null, timelineBegin: null, title: null, transformBehavior: null, type: null, typeOf: s, to: null, transform: null, u1: null, u2: null, underlinePosition: l, underlineThickness: l, unicode: null, unicodeBidi: null, unicodeRange: null, unitsPerEm: l, values: null, vAlphabetic: l, vMathematical: l, vectorEffect: null, vHanging: l, vIdeographic: l, version: null, vertAdvY: l, vertOriginX: l, vertOriginY: l, viewBox: null, viewTarget: null, visibility: null, width: null, widths: null, wordSpacing: null, writingMode: null, x: null, x1: null, x2: null, xChannelSelector: null, xHeight: l, y: null, y1: null, y2: null, yChannelSelector: null, z: null, zoomAndPan: null } })
        },
        1188: function(e, n, t) {
            "use strict";
            var r = t(987),
                i = t(988),
                o = t(989),
                u = "data";
            e.exports = function(e, n) {
                var t = r(n),
                    p = n,
                    d = o;
                if (t in e.normal) return e.property[e.normal[t]];
                t.length > 4 && t.slice(0, 4) === u && l.test(n) && ("-" === n.charAt(4) ? p = function(e) { var n = e.slice(5).replace(a, f); return u + n.charAt(0).toUpperCase() + n.slice(1) }(n) : n = function(e) { var n = e.slice(4); if (a.test(n)) return e; "-" !== (n = n.replace(c, s)).charAt(0) && (n = "-" + n); return u + n }(n), d = i);
                return new d(p, n)
            };
            var l = /^data[-\w.:]+$/i,
                a = /-[a-z]/g,
                c = /[A-Z]/g;

            function s(e) { return "-" + e.toLowerCase() }

            function f(e) { return e.charAt(1).toUpperCase() }
        },
        1189: function(e) { e.exports = JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}') },
        1190: function(e, n, t) {
            "use strict";
            n.parse = function(e) { var n = String(e || "").trim(); return "" === n ? [] : n.split(r) }, n.stringify = function(e) { return e.join(" ").trim() };
            var r = /[ \t\n\r\f]+/g
        },
        1191: function(e, n, t) {
            "use strict";
            n.parse = function(e) {
                var n, t = [],
                    r = String(e || ""),
                    i = r.indexOf(","),
                    o = 0,
                    u = !1;
                for (; !u;) - 1 === i && (i = r.length, u = !0), !(n = r.slice(o, i).trim()) && u || t.push(n), o = i + 1, i = r.indexOf(",", o);
                return t
            }, n.stringify = function(e, n) {
                var t = n || {},
                    r = !1 === t.padLeft ? "" : " ",
                    i = t.padRight ? " " : "";
                "" === e[e.length - 1] && (e = e.concat(""));
                return e.join(i + "," + r).trim()
            }
        },
        1192: function(e, n, t) {
            var r = t(1193);
            e.exports = function(e, n) { var t, i = null; if (!e || "string" !== typeof e) return i; for (var o, u, l = r(e), a = "function" === typeof n, c = 0, s = l.length; c < s; c++) o = (t = l[c]).property, u = t.value, a ? n(o, u, t) : u && (i || (i = {}), i[o] = u); return i }
        },
        1193: function(e, n) {
            var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                r = /\n/g,
                i = /^\s*/,
                o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                u = /^:\s*/,
                l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                a = /^[;\s]*/,
                c = /^\s+|\s+$/g,
                s = "";

            function f(e) { return e ? e.replace(c, s) : s }
            e.exports = function(e, n) {
                if ("string" !== typeof e) throw new TypeError("First argument must be a string");
                if (!e) return [];
                n = n || {};
                var c = 1,
                    p = 1;

                function d(e) {
                    var n = e.match(r);
                    n && (c += n.length);
                    var t = e.lastIndexOf("\n");
                    p = ~t ? e.length - t : p + e.length
                }

                function h() { var e = { line: c, column: p }; return function(n) { return n.position = new m(e), y(), n } }

                function m(e) { this.start = e, this.end = { line: c, column: p }, this.source = n.source }
                m.prototype.content = e;
                var g = [];

                function v(t) {
                    var r = new Error(n.source + ":" + c + ":" + p + ": " + t);
                    if (r.reason = t, r.filename = n.source, r.line = c, r.column = p, r.source = e, !n.silent) throw r;
                    g.push(r)
                }

                function x(n) { var t = n.exec(e); if (t) { var r = t[0]; return d(r), e = e.slice(r.length), t } }

                function y() { x(i) }

                function k(e) { var n; for (e = e || []; n = b();) !1 !== n && e.push(n); return e }

                function b() { var n = h(); if ("/" == e.charAt(0) && "*" == e.charAt(1)) { for (var t = 2; s != e.charAt(t) && ("*" != e.charAt(t) || "/" != e.charAt(t + 1));) ++t; if (t += 2, s === e.charAt(t - 1)) return v("End of comment missing"); var r = e.slice(2, t - 2); return p += 2, d(r), e = e.slice(t), p += 2, n({ type: "comment", comment: r }) } }

                function w() {
                    var e = h(),
                        n = x(o);
                    if (n) {
                        if (b(), !x(u)) return v("property missing ':'");
                        var r = x(l),
                            i = e({ type: "declaration", property: f(n[0].replace(t, s)), value: r ? f(r[0].replace(t, s)) : s });
                        return x(a), i
                    }
                }
                return y(),
                    function() { var e, n = []; for (k(n); e = w();) !1 !== e && (n.push(e), k(n)); return n }()
            }
        },
        1194: function(e, n, t) { e.exports = t(1195) },
        1195: function(e, n, t) {
            var r = t(967),
                i = t(1196),
                o = t(1198),
                u = t(1199),
                l = t(1201);
            e.exports = function(e) { return r([i, o(e), u, l]) }
        },
        1196: function(e, n, t) { e.exports = t(1197) },
        1197: function(e, n, t) {
            var r = t(868),
                i = t(849),
                o = t(896),
                u = t(789),
                l = t(894),
                a = t(895),
                c = {
                    tokenize: function(e, n, t) {
                        return function(n) { return e.consume(n), r };

                        function r(n) { return 87 === n || n - 32 === 87 ? (e.consume(n), i) : t(n) }

                        function i(n) { return 87 === n || n - 32 === 87 ? (e.consume(n), o) : t(n) }

                        function o(n) { return 46 === n ? (e.consume(n), l) : t(n) }

                        function l(e) { return null === e || u(e) ? t(e) : n(e) }
                    },
                    partial: !0
                },
                s = {
                    tokenize: function(e, n, t) {
                        var r, i;
                        return u;

                        function u(n) { return 38 === n ? e.check(d, s, c)(n) : 46 === n || 95 === n ? e.check(p, s, c)(n) : o(n) || a(n) || 45 !== n && l(n) ? s(n) : (e.consume(n), u) }

                        function c(n) { return 46 === n ? (i = r, r = void 0, e.consume(n), u) : (95 === n && (r = !0), e.consume(n), u) }

                        function s(e) { return i || r ? t(e) : n(e) }
                    },
                    partial: !0
                },
                f = {
                    tokenize: function(e, n) {
                        var t = 0;
                        return r;

                        function r(u) { return 38 === u ? e.check(d, n, i)(u) : (40 === u && t++, 41 === u ? e.check(p, o, i)(u) : k(u) ? n(u) : y(u) ? e.check(p, n, i)(u) : (e.consume(u), r)) }

                        function i(n) { return e.consume(n), r }

                        function o(e) { return --t < 0 ? n(e) : i(e) }
                    },
                    partial: !0
                },
                p = {
                    tokenize: function(e, n, t) {
                        return function(n) { return e.consume(n), r };

                        function r(i) { return y(i) ? (e.consume(i), r) : k(i) ? n(i) : t(i) }
                    },
                    partial: !0
                },
                d = {
                    tokenize: function(e, n, t) {
                        return function(n) { return e.consume(n), i };

                        function i(n) { return r(n) ? (e.consume(n), i) : 59 === n ? (e.consume(n), o) : t(n) }

                        function o(e) { return k(e) ? n(e) : t(e) }
                    },
                    partial: !0
                },
                h = {
                    tokenize: function(e, n, t) {
                        var r = this;
                        return function(n) { if (87 !== n && n - 32 !== 87 || !w(r.previous) || E(r.events)) return t(n); return e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(c, e.attempt(s, e.attempt(f, i), t), t)(n) };

                        function i(t) { return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(t) }
                    },
                    previous: w
                },
                m = {
                    tokenize: function(e, n, t) {
                        var r = this;
                        return function(n) { if (72 !== n && n - 32 !== 72 || !C(r.previous) || E(r.events)) return t(n); return e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(n), i };

                        function i(n) { return 84 === n || n - 32 === 84 ? (e.consume(n), u) : t(n) }

                        function u(n) { return 84 === n || n - 32 === 84 ? (e.consume(n), c) : t(n) }

                        function c(n) { return 80 === n || n - 32 === 80 ? (e.consume(n), p) : t(n) }

                        function p(n) { return 83 === n || n - 32 === 83 ? (e.consume(n), d) : d(n) }

                        function d(n) { return 58 === n ? (e.consume(n), h) : t(n) }

                        function h(n) { return 47 === n ? (e.consume(n), m) : t(n) }

                        function m(n) { return 47 === n ? (e.consume(n), g) : t(n) }

                        function g(n) { return o(n) || a(n) || l(n) ? t(n) : e.attempt(s, e.attempt(f, v), t)(n) }

                        function v(t) { return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(t) }
                    },
                    previous: C
                },
                g = {
                    tokenize: function(e, n, t) {
                        var r, o = this;
                        return function(n) { if (!b(n) || !S(o.previous) || E(o.events)) return t(n); return e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), u(n) };

                        function u(n) { return b(n) ? (e.consume(n), u) : 64 === n ? (e.consume(n), l) : t(n) }

                        function l(n) { return 46 === n ? e.check(p, f, a)(n) : 45 === n || 95 === n ? e.check(p, t, c)(n) : i(n) ? (e.consume(n), l) : f(n) }

                        function a(n) { return e.consume(n), r = !0, l }

                        function c(n) { return e.consume(n), s }

                        function s(n) { return 46 === n ? e.check(p, t, a)(n) : l(n) }

                        function f(i) { return r ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(i)) : t(i) }
                    },
                    previous: S
                },
                v = {};
            n.text = v;
            for (var x = 48; x < 123;) v[x] = g, 58 === ++x ? x = 65 : 91 === x && (x = 97);

            function y(e) { return 33 === e || 34 === e || 39 === e || 41 === e || 42 === e || 44 === e || 46 === e || 58 === e || 59 === e || 60 === e || 63 === e || 95 === e || 126 === e }

            function k(e) { return null === e || e < 0 || 32 === e || 60 === e }

            function b(e) { return 43 === e || 45 === e || 46 === e || 95 === e || i(e) }

            function w(e) { return null === e || e < 0 || 32 === e || 40 === e || 42 === e || 95 === e || 126 === e }

            function C(e) { return null === e || !r(e) }

            function S(e) { return 47 !== e && C(e) }

            function E(e) {
                for (var n = e.length; n--;)
                    if (("labelLink" === e[n][1].type || "labelImage" === e[n][1].type) && !e[n][1]._balanced) return !0
            }
            v[43] = g, v[45] = g, v[46] = g, v[95] = g, v[72] = [g, m], v[104] = [g, m], v[87] = [g, h], v[119] = [g, h]
        },
        1198: function(e, n, t) {
            e.exports = function(e) {
                var n = (e || {}).singleTilde,
                    t = {
                        tokenize: function(e, t, i) {
                            var o = this.previous,
                                u = this.events,
                                l = 0;
                            return a;

                            function a(n) { return 126 !== n || 126 === o && "characterEscape" !== u[u.length - 1][1].type ? i(n) : (e.enter("strikethroughSequenceTemporary"), c(n)) }

                            function c(u) { var a, s, f = r(o); return 126 === u ? l > 1 ? i(u) : (e.consume(u), l++, c) : l < 2 && !n ? i(u) : (a = e.exit("strikethroughSequenceTemporary"), s = r(u), a._open = !s || 2 === s && f, a._close = !f || 2 === f && s, t(u)) }
                        },
                        resolveAll: function(e, n) {
                            var t, r, l, a, c = -1;
                            for (; ++c < e.length;)
                                if ("enter" === e[c][0] && "strikethroughSequenceTemporary" === e[c][1].type && e[c][1]._close)
                                    for (l = c; l--;)
                                        if ("exit" === e[l][0] && "strikethroughSequenceTemporary" === e[l][1].type && e[l][1]._open && e[c][1].end.offset - e[c][1].start.offset === e[l][1].end.offset - e[l][1].start.offset) {
                                            e[c][1].type = "strikethroughSequence", e[l][1].type = "strikethroughSequence", t = { type: "strikethrough", start: u(e[l][1].start), end: u(e[c][1].end) }, r = { type: "strikethroughText", start: u(e[l][1].end), end: u(e[c][1].start) }, a = [
                                                ["enter", t, n],
                                                ["enter", e[l][1], n],
                                                ["exit", e[l][1], n],
                                                ["enter", r, n]
                                            ], i(a, a.length, 0, o(n.parser.constructs.insideSpan.null, e.slice(l + 1, c), n)), i(a, a.length, 0, [
                                                ["exit", r, n],
                                                ["enter", e[c][1], n],
                                                ["exit", e[c][1], n],
                                                ["exit", t, n]
                                            ]), i(e, l - 1, c - l + 3, a), c = l + a.length - 2;
                                            break
                                        }
                            return function(e) {
                                var n = -1,
                                    t = e.length;
                                for (; ++n < t;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
                                return e
                            }(e)
                        }
                    };
                null !== n && void 0 !== n || (n = !0);
                return { text: { 126: t }, insideSpan: { null: t } }
            };
            var r = t(968),
                i = t(813),
                o = t(867),
                u = t(821)
        },
        1199: function(e, n, t) { e.exports = t(1200) },
        1200: function(e, n, t) {
            n.flow = {
                null: {
                    tokenize: function(e, n, t) {
                        var u, l, a = [],
                            c = 0;
                        return function(n) { if (null === n || -5 === n || -4 === n || -3 === n) return t(n); if (e.enter("table")._align = a, e.enter("tableHead"), e.enter("tableRow"), 124 === n) return s(n); return c++, e.enter("temporaryTableCellContent"), d(n) };

                        function s(n) { return e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), u = !0, f }

                        function f(n) { return null === n || -5 === n || -4 === n || -3 === n ? function(n) { if (null === n) return t(n); return e.exit("tableRow"), e.exit("tableHead"), e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), e.check(i, t, r(e, m, "linePrefix", 4)) }(n) : -2 === n || -1 === n || 32 === n ? (e.enter("whitespace"), e.consume(n), p) : (u && (u = void 0, c++), 124 === n ? s(n) : (e.enter("temporaryTableCellContent"), d(n))) }

                        function p(n) { return -2 === n || -1 === n || 32 === n ? (e.consume(n), p) : (e.exit("whitespace"), f(n)) }

                        function d(n) { return null === n || n < 0 || 32 === n || 124 === n ? (e.exit("temporaryTableCellContent"), f(n)) : (e.consume(n), 92 === n ? h : d) }

                        function h(n) { return 92 === n || 124 === n ? (e.consume(n), d) : d(n) }

                        function m(n) { return null === n || n < 0 || 32 === n ? t(n) : (e.enter("tableDelimiterRow"), g(n)) }

                        function g(n) { return null === n || -5 === n || -4 === n || -3 === n ? b(n) : -2 === n || -1 === n || 32 === n ? (e.enter("whitespace"), e.consume(n), v) : 45 === n ? (e.enter("tableDelimiterFiller"), e.consume(n), l = !0, a.push(null), x) : 58 === n ? (e.enter("tableDelimiterAlignment"), e.consume(n), e.exit("tableDelimiterAlignment"), a.push("left"), y) : 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), g) : t(n) }

                        function v(n) { return -2 === n || -1 === n || 32 === n ? (e.consume(n), v) : (e.exit("whitespace"), g(n)) }

                        function x(n) { return 45 === n ? (e.consume(n), x) : (e.exit("tableDelimiterFiller"), 58 === n ? (e.enter("tableDelimiterAlignment"), e.consume(n), e.exit("tableDelimiterAlignment"), a[a.length - 1] = "left" === a[a.length - 1] ? "center" : "right", k) : g(n)) }

                        function y(n) { return 45 === n ? (e.enter("tableDelimiterFiller"), e.consume(n), l = !0, x) : t(n) }

                        function k(n) { return null === n || -5 === n || -4 === n || -3 === n ? b(n) : -2 === n || -1 === n || 32 === n ? (e.enter("whitespace"), e.consume(n), v) : 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), g) : t(n) }

                        function b(n) { return e.exit("tableDelimiterRow"), l && c === a.length ? null === n ? w(n) : e.check(o, w, C)(n) : t(n) }

                        function w(t) { return e.exit("table"), n(t) }

                        function C(n) { return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), r(e, S, "linePrefix", 4) }

                        function S(n) { return e.enter("tableBody"), E(n) }

                        function E(n) { return e.enter("tableRow"), 124 === n ? F(n) : (e.enter("temporaryTableCellContent"), P(n)) }

                        function F(n) { return e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), A }

                        function A(n) { return null === n || -5 === n || -4 === n || -3 === n ? function(n) { if (e.exit("tableRow"), null === n) return O(n); return e.check(o, O, I)(n) }(n) : -2 === n || -1 === n || 32 === n ? (e.enter("whitespace"), e.consume(n), T) : 124 === n ? F(n) : (e.enter("temporaryTableCellContent"), P(n)) }

                        function T(n) { return -2 === n || -1 === n || 32 === n ? (e.consume(n), T) : (e.exit("whitespace"), A(n)) }

                        function P(n) { return null === n || n < 0 || 32 === n || 124 === n ? (e.exit("temporaryTableCellContent"), A(n)) : (e.consume(n), 92 === n ? D : P) }

                        function D(n) { return 92 === n || 124 === n ? (e.consume(n), P) : P(n) }

                        function O(n) { return e.exit("tableBody"), w(n) }

                        function I(n) { return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), r(e, E, "linePrefix", 4) }
                    },
                    resolve: function(e, n) {
                        var t, r, i, o, u, l, a, c, s, f, p = e.length,
                            d = -1;
                        for (; ++d < p;) t = e[d][1], o && ("temporaryTableCellContent" === t.type && (c = c || d, s = d), "tableCellDivider" !== t.type && "tableRow" !== t.type || !s || (l = { type: "tableContent", start: e[c][1].start, end: e[s][1].end }, a = { type: "chunkText", start: l.start, end: l.end, contentType: "text" }, e.splice(c, s - c + 1, ["enter", l, n], ["enter", a, n], ["exit", a, n], ["exit", l, n]), d -= s - c - 3, p = e.length, c = void 0, s = void 0)), "exit" === e[d][0] && f && f + 1 < d && ("tableCellDivider" === t.type || "tableRow" === t.type && (f + 3 < d || "whitespace" !== e[f][1].type)) && (u = { type: i ? "tableDelimiter" : r ? "tableHeader" : "tableData", start: e[f][1].start, end: e[d][1].end }, e.splice(d + ("tableCellDivider" === t.type ? 1 : 0), 0, ["exit", u, n]), e.splice(f, 0, ["enter", u, n]), d += 2, p = e.length, f = d + 1), "tableRow" === t.type && (o = "enter" === e[d][0]) && (f = d + 1), "tableDelimiterRow" === t.type && (i = "enter" === e[d][0]) && (f = d + 1), "tableHead" === t.type && (r = "enter" === e[d][0]);
                        return e
                    },
                    interruptible: !0
                }
            };
            var r = t(790),
                i = {
                    tokenize: function(e, n, t) {
                        return function(n) { if (45 !== n) return t(n); return e.enter("setextUnderline"), r(n) };

                        function r(n) { return 45 === n ? (e.consume(n), r) : i(n) }

                        function i(r) { return -2 === r || -1 === r || 32 === r ? (e.consume(r), i) : null === r || -5 === r || -4 === r || -3 === r ? n(r) : t(r) }
                    },
                    partial: !0
                },
                o = {
                    tokenize: function(e, n, t) {
                        var r = 0;
                        return function(n) { return e.enter("check"), e.consume(n), i };

                        function i(o) { return -1 === o || 32 === o ? (e.consume(o), 4 === ++r ? n : i) : null === o || o < 0 ? n(o) : t(o) }
                    },
                    partial: !0
                }
        },
        1201: function(e, n, t) { e.exports = t(1202) },
        1202: function(e, n, t) {
            var r = t(814),
                i = t(790),
                o = t(848),
                u = {
                    tokenize: function(e, n, t) {
                        var r = this;
                        return function(n) { if (91 !== n || null !== r.previous || !r._gfmTasklistFirstContentOfListItem) return t(n); return e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(n), e.exit("taskListCheckMarker"), i };

                        function i(n) { return -2 === n || 32 === n ? (e.enter("taskListCheckValueUnchecked"), e.consume(n), e.exit("taskListCheckValueUnchecked"), o) : 88 === n || 120 === n ? (e.enter("taskListCheckValueChecked"), e.consume(n), e.exit("taskListCheckValueChecked"), o) : t(n) }

                        function o(r) { return 93 === r ? (e.enter("taskListCheckMarker"), e.consume(r), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), e.check({ tokenize: l }, n, t)) : t(r) }
                    }
                };

            function l(e, n, t) { var u = this; return i(e, (function(e) { return o(u.events, "whitespace") && null !== e && !r(e) ? n(e) : t(e) }), "whitespace") }
            n.text = { 91: u }
        },
        1203: function(e, n, t) {
            var r = t(1204),
                i = t(1208),
                o = t(1209),
                u = t(1210),
                l = {}.hasOwnProperty;

            function a(e, n) { var t, r, i; for (t in n) r = l.call(e, t) ? e[t] : e[t] = {}, i = n[t], "canContainEols" === t || "transforms" === t ? e[t] = [].concat(r, i) : Object.assign(r, i) }
            e.exports = function(e) {
                var n = { transforms: [], canContainEols: [] },
                    t = e.length,
                    r = -1;
                for (; ++r < t;) a(n, e[r]);
                return n
            }([r, i, o, u])
        },
        1204: function(e, n, t) {
            var r = t(1205),
                i = t(1206),
                o = t(894),
                u = t(895);

            function l(e) { this.config.enter.autolinkProtocol.call(this, e) }

            function a(e, n, t, i, o) {
                var u, l, a = "";
                return !!s(o) && (/^w/i.test(n) && (t = n + t, n = "", a = "http://"), !! function(e) { var n = e.split("."); if (n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2]))) return !1; return !0 }(t) && (!!(u = function(e) {
                    var n, t, i, o = /[!"&'),.:;<>?\]}]+$/.exec(e);
                    if (o)
                        for (e = e.slice(0, o.index), n = (o = o[0]).indexOf(")"), t = r(e, "("), i = r(e, ")"); - 1 !== n && t > i;) e += o.slice(0, n + 1), n = (o = o.slice(n + 1)).indexOf(")"), i++;
                    return [e, o]
                }(t + i))[0] && (l = { type: "link", title: null, url: a + n + u[0], children: [{ type: "text", value: n + u[0] }] }, u[1] && (l = [l, { type: "text", value: u[1] }]), l)))
            }

            function c(e, n, t, r) { return !(!s(r, !0) || /[_-]$/.test(t)) && { type: "link", title: null, url: "mailto:" + n + "@" + t, children: [{ type: "text", value: n + "@" + t }] } }

            function s(e, n) { var t = e.input.charCodeAt(e.index - 1); return (t !== t || u(t) || o(t)) && (!n || 47 !== t) }
            n.transforms = [function(e) {
                i(e, [
                    [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/i, a],
                    [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/, c]
                ], { ignore: ["link", "linkReference"] })
            }], n.enter = { literalAutolink: function(e) { this.enter({ type: "link", title: null, url: "", children: [] }, e) }, literalAutolinkEmail: l, literalAutolinkHttp: l, literalAutolinkWww: l }, n.exit = { literalAutolink: function(e) { this.exit(e) }, literalAutolinkEmail: function(e) { this.config.exit.autolinkEmail.call(this, e) }, literalAutolinkHttp: function(e) { this.config.exit.autolinkProtocol.call(this, e) }, literalAutolinkWww: function(e) { this.config.exit.data.call(this, e), this.stack[this.stack.length - 1].url = "http://" + this.sliceSerialize(e) } }
        },
        1205: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t, r = String(e),
                    i = 0;
                if ("string" !== typeof n) throw new Error("Expected character");
                t = r.indexOf(n);
                for (; - 1 !== t;) i++, t = r.indexOf(n, t + n.length);
                return i
            }
        },
        1206: function(e, n, t) {
            "use strict";
            e.exports = function(e, n, t, r) {
                var i, o;
                "string" === typeof n || n && "function" === typeof n.exec ? o = [
                    [n, t]
                ] : (o = n, r = t);
                return l(e, i = r || {}, function e(n) {
                    var t = n[0];
                    return r;

                    function r(r, o) {
                        var a, c, s, f, p = t[0],
                            d = t[1],
                            h = [],
                            m = 0,
                            g = o.children.indexOf(r);
                        for (p.lastIndex = 0, c = p.exec(r.value); c && (a = c.index, !1 !== (f = d.apply(null, [].concat(c, { index: c.index, input: c.input }))) && (m !== a && h.push({ type: "text", value: r.value.slice(m, a) }), "string" === typeof f && f.length > 0 && (f = { type: "text", value: f }), f && (h = [].concat(h, f)), m = a + c[0].length), p.global);) c = p.exec(r.value);
                        if (void 0 === a ? (h = [r], g--) : (m < r.value.length && h.push({ type: "text", value: r.value.slice(m) }), h.unshift(g, 1), u.apply(o.children, h)), n.length > 1)
                            for (s = e(n.slice(1)), a = -1; ++a < h.length;) "text" === (r = h[a]).type ? s(r, o) : l(r, i, s);
                        return g + h.length + 1
                    }
                }(function(e) {
                    var n, t, r = [];
                    if ("object" !== typeof e) throw new Error("Expected array or object as schema");
                    if ("length" in e)
                        for (t = -1; ++t < e.length;) r.push([a(e[t][0]), c(e[t][1])]);
                    else
                        for (n in e) r.push([a(n), c(e[n])]);
                    return r
                }(o))), e
            };
            var r = t(976),
                i = t(977),
                o = t(1207),
                u = [].splice;

            function l(e, n, t) {
                var o = i(n.ignore || []);
                return r(e, "text", (function(e, n) {
                    var r, i, u = -1;
                    for (; ++u < n.length;) {
                        if (r = n[u], o(r, i ? i.children.indexOf(r) : void 0, i)) return;
                        i = r
                    }
                    return t(e, i)
                })), []
            }

            function a(e) { return "string" === typeof e ? new RegExp(o(e), "g") : e }

            function c(e) { return "function" === typeof e ? e : function() { return e } }
        },
        1207: function(e, n, t) {
            "use strict";
            e.exports = function(e) { if ("string" !== typeof e) throw new TypeError("Expected a string"); return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d") }
        },
        1208: function(e, n) { n.canContainEols = ["delete"], n.enter = { strikethrough: function(e) { this.enter({ type: "delete", children: [] }, e) } }, n.exit = { strikethrough: function(e) { this.exit(e) } } },
        1209: function(e, n) {
            function t(e) { this.exit(e) }

            function r(e) { this.enter({ type: "tableCell", children: [] }, e) }

            function i(e, n) { return "|" === n ? n : e }
            n.enter = { table: function(e) { this.enter({ type: "table", align: e._align, children: [] }, e), this.setData("inTable", !0) }, tableData: r, tableHeader: r, tableRow: function(e) { this.enter({ type: "tableRow", children: [] }, e) } }, n.exit = {
                codeText: function(e) {
                    var n = this.resume();
                    this.getData("inTable") && (n = n.replace(/\\([\\|])/g, i));
                    this.stack[this.stack.length - 1].value = n, this.exit(e)
                },
                table: function(e) { this.exit(e), this.setData("inTable") },
                tableData: t,
                tableHeader: t,
                tableRow: t
            }
        },
        1210: function(e, n) {
            function t(e) { this.stack[this.stack.length - 2].checked = "taskListCheckValueChecked" === e.type }
            n.exit = {
                taskListCheckValueChecked: t,
                taskListCheckValueUnchecked: t,
                paragraph: function(e) {
                    var n, t = this.stack[this.stack.length - 2],
                        r = this.stack[this.stack.length - 1],
                        i = t.children,
                        o = r.children[0],
                        u = -1;
                    if (t && "listItem" === t.type && "boolean" === typeof t.checked && o && "text" === o.type) {
                        for (; ++u < i.length;)
                            if ("paragraph" === i[u].type) { n = i[u]; break }
                        n === r && (o.value = o.value.slice(1), 0 === o.value.length ? r.children.shift() : (o.position.start.column++, o.position.start.offset++, r.position.start = Object.assign({}, o.position.start)))
                    }
                    this.exit(e)
                }
            }
        },
        1211: function(e, n, t) {
            var r = t(1212),
                i = t(1213),
                o = t(1214),
                u = t(1218),
                l = t(1224);
            e.exports = function(e) { var n = l({ handlers: {}, join: [], unsafe: [], options: {} }, { extensions: [r, i, o(e), u] }); return Object.assign(n.options, { handlers: n.handlers, join: n.join, unsafe: n.unsafe }) }
        },
        1212: function(e, n) {
            var t = "phrasing",
                r = ["autolink", "link", "image", "label"];
            n.unsafe = [{ character: "@", before: "[+\\-.\\w]", after: "[\\-.\\w]", inConstruct: t, notInConstruct: r }, { character: ".", before: "[Ww]", after: "[\\-.\\w]", inConstruct: t, notInConstruct: r }, { character: ":", before: "[ps]", after: "\\/", inConstruct: t, notInConstruct: r }]
        },
        1213: function(e, n, t) {
            var r = t(996);

            function i(e, n, t) {
                var i = t.enter("emphasis"),
                    o = r(e, t, { before: "~", after: "~" });
                return i(), "~~" + o + "~~"
            }
            n.unsafe = [{ character: "~", inConstruct: "phrasing" }], n.handlers = { delete: i }, i.peek = function() { return "~" }
        },
        1214: function(e, n, t) {
            var r = t(996),
                i = t(1215),
                o = t(1217);
            e.exports = function(e) {
                var n = e || {},
                    t = n.tableCellPadding,
                    u = n.tablePipeAlign,
                    l = n.stringLength,
                    a = t ? " " : "|";
                return {
                    unsafe: [{ character: "\r", inConstruct: "tableCell" }, { character: "\n", inConstruct: "tableCell" }, { atBreak: !0, character: "|", after: "[\t :-]" }, { character: "|", inConstruct: "tableCell" }, { atBreak: !0, character: ":", after: "-" }, { atBreak: !0, character: "-", after: "[:|-]" }],
                    handlers: {
                        table: function(e, n, t) {
                            return s(function(e, n) {
                                var t = e.children,
                                    r = -1,
                                    i = t.length,
                                    o = [],
                                    u = n.enter("table");
                                for (; ++r < i;) o[r] = f(t[r], n);
                                return u(), o
                            }(e, t), e.align)
                        },
                        tableRow: function(e, n, t) { var r = s([f(e, t)]); return r.slice(0, r.indexOf("\n")) },
                        tableCell: c,
                        inlineCode: function(e, n, t) { var r = i(e, n, t); - 1 !== t.stack.indexOf("tableCell") && (r = r.replace(/\|/g, "\\$&")); return r }
                    }
                };

                function c(e, n, t) {
                    var i = t.enter("tableCell"),
                        o = r(e, t, { before: a, after: a });
                    return i(), o
                }

                function s(e, n) { return o(e, { align: n, alignDelimiters: u, padding: t, stringLength: l }) }

                function f(e, n) { for (var t = e.children, r = -1, i = t.length, o = [], u = n.enter("tableRow"); ++r < i;) o[r] = c(t[r], 0, n); return u(), o }
            }
        },
        1215: function(e, n, t) {
            e.exports = i, i.peek = function() { return "`" };
            var r = t(1216);

            function i(e, n, t) {
                for (var i, o, u, l, a = e.value || "", c = "`", s = -1; new RegExp("(^|[^`])" + c + "([^`]|$)").test(a);) c += "`";
                for (/[^ \r\n]/.test(a) && (/[ \r\n`]/.test(a.charAt(0)) || /[ \r\n`]/.test(a.charAt(a.length - 1))) && (a = " " + a + " "); ++s < t.unsafe.length;)
                    if ((i = t.unsafe[s]).atBreak)
                        for (o = r(i); u = o.exec(a);) l = u.index, 10 === a.charCodeAt(l) && 13 === a.charCodeAt(l - 1) && l--, a = a.slice(0, l) + " " + a.slice(u.index + 1);
                return c + a + c
            }
        },
        1216: function(e, n) {
            e.exports = function(e) {
                var n, t;
                e._compiled || (n = e.before ? "(?:" + e.before + ")" : "", t = e.after ? "(?:" + e.after + ")" : "", e.atBreak && (n = "[\\r\\n][\\t ]*" + n), e._compiled = new RegExp((n ? "(" + n + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (t || ""), "g"));
                return e._compiled
            }
        },
        1217: function(e, n, t) {
            "use strict";
            var r = t(899);
            e.exports = function(e, n) {
                var t, s, f, p, d, h, m, g, v, x, y, k = n || {},
                    b = !1 !== k.padding,
                    w = !1 !== k.delimiterStart,
                    C = !1 !== k.delimiterEnd,
                    S = (k.align || []).concat(),
                    E = !1 !== k.alignDelimiters,
                    F = [],
                    A = k.stringLength || a,
                    T = -1,
                    P = e.length,
                    D = [],
                    O = [],
                    I = [],
                    L = [],
                    M = [],
                    z = 0;
                for (; ++T < P;) {
                    for (t = e[T], s = -1, f = t.length, I = [], L = [], f > z && (z = f); ++s < f;) R = t[s], h = null === R || void 0 === R ? "" : String(R), !0 === E && (d = A(h), L[s] = d, (void 0 === (p = M[s]) || d > p) && (M[s] = d)), I.push(h);
                    D[T] = I, O[T] = L
                }
                var R;
                if (s = -1, f = z, "object" === typeof S && "length" in S)
                    for (; ++s < f;) F[s] = c(S[s]);
                else
                    for (y = c(S); ++s < f;) F[s] = y;
                s = -1, f = z, I = [], L = [];
                for (; ++s < f;) y = F[s], v = "", x = "", 108 === y ? v = u : y === l ? x = u : 99 === y && (v = u, x = u), d = E ? Math.max(1, M[s] - v.length - x.length) : 1, h = v + r("-", d) + x, !0 === E && ((d = v.length + d + x.length) > M[s] && (M[s] = d), L[s] = d), I[s] = h;
                D.splice(1, 0, I), O.splice(1, 0, L), T = -1, P = D.length, m = [];
                for (; ++T < P;) {
                    for (I = D[T], L = O[T], s = -1, f = z, g = []; ++s < f;) h = I[s] || "", v = "", x = "", !0 === E && (d = M[s] - (L[s] || 0), (y = F[s]) === l ? v = r(o, d) : 99 === y ? d % 2 === 0 ? (v = r(o, d / 2), x = v) : (v = r(o, d / 2 + .5), x = r(o, d / 2 - .5)) : x = r(o, d)), !0 === w && 0 === s && g.push("|"), !0 !== b || !1 === E && "" === h || !0 !== w && 0 === s || g.push(o), !0 === E && g.push(v), g.push(h), !0 === E && g.push(x), !0 === b && g.push(o), !0 !== C && s === f - 1 || g.push("|");
                    g = g.join(""), !1 === C && (g = g.replace(i, "")), m.push(g)
                }
                return m.join("\n")
            };
            var i = / +$/,
                o = " ",
                u = ":",
                l = 114;

            function a(e) { return e.length }

            function c(e) { var n = "string" === typeof e ? e.charCodeAt(0) : 0; return 76 === n || 108 === n ? 108 : 82 === n || n === l ? l : 67 === n || 99 === n ? 99 : 0 }
        },
        1218: function(e, n, t) {
            var r = t(1219);
            n.unsafe = [{ atBreak: !0, character: "-", after: "[:|-]" }], n.handlers = {
                listItem: function(e, n, t) {
                    var i = r(e, n, t),
                        o = e.children[0];
                    "boolean" === typeof e.checked && o && "paragraph" === o.type && (i = i.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, (function(n) { return n + "[" + (e.checked ? "x" : " ") + "] " })));
                    return i
                }
            }
        },
        1219: function(e, n, t) {
            e.exports = function(e, n, t) {
                var a, c, s, f = i(t),
                    p = o(t);
                n && n.ordered && (f = (n.start > -1 ? n.start : 1) + (!1 === t.options.incrementListMarker ? 0 : n.children.indexOf(e)) + ".");
                a = f.length + 1, ("tab" === p || "mixed" === p && (n && n.spread || e.spread)) && (a = 4 * Math.ceil(a / 4));
                return s = t.enter("listItem"), c = l(u(e, t), (function(e, n, t) { if (n) return (t ? "" : r(" ", a)) + e; return (t ? f : f + r(" ", a - f.length)) + e })), s(), c
            };
            var r = t(899),
                i = t(1220),
                o = t(1221),
                u = t(1222),
                l = t(1223)
        },
        1220: function(e, n) { e.exports = function(e) { var n = e.options.bullet || "*"; if ("*" !== n && "+" !== n && "-" !== n) throw new Error("Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`"); return n } },
        1221: function(e, n) { e.exports = function(e) { var n = e.options.listItemIndent || "tab"; if (1 === n || "1" === n) return "one"; if ("tab" !== n && "one" !== n && "mixed" !== n) throw new Error("Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"); return n } },
        1222: function(e, n, t) {
            e.exports = function(e, n) {
                var t, i = e.children || [],
                    o = [],
                    u = -1;
                for (; ++u < i.length;) t = i[u], o.push(n.handle(t, e, n, { before: "\n", after: "\n" })), u + 1 < i.length && o.push(l(t, i[u + 1]));
                return o.join("");

                function l(t, i) { for (var o, u = -1; ++u < n.join.length && !0 !== (o = n.join[u](t, i, e, n)) && 1 !== o;) { if ("number" === typeof o) return r("\n", 1 + Number(o)); if (!1 === o) return "\n\n\x3c!----\x3e\n\n" } return "\n\n" }
            };
            var r = t(899)
        },
        1223: function(e, n) {
            e.exports = function(e, n) {
                var r, i = [],
                    o = 0,
                    u = 0;
                for (; r = t.exec(e);) l(e.slice(o, r.index)), i.push(r[0]), o = r.index + r[0].length, u++;
                return l(e.slice(o)), i.join("");

                function l(e) { i.push(n(e, u, !e)) }
            };
            var t = /\r?\n|\r/g
        },
        1224: function(e, n) {
            e.exports = function e(n, t) {
                var r, i = -1;
                if (t.extensions)
                    for (; ++i < t.extensions.length;) e(n, t.extensions[i]);
                for (r in t) "extensions" === r || ("unsafe" === r || "join" === r ? n[r] = n[r].concat(t[r] || []) : "handlers" === r ? n[r] = Object.assign(n[r], t[r] || {}) : n.options[r] = t[r]);
                return n
            }
        },
        789: function(e, n, t) {
            "use strict";
            e.exports = function(e) { return e < -2 }
        },
        790: function(e, n, t) {
            "use strict";
            var r = t(812);
            e.exports = function(e, n, t, i) {
                var o = i ? i - 1 : 1 / 0,
                    u = 0;
                return function(i) { if (r(i)) return e.enter(t), l(i); return n(i) };

                function l(i) { return r(i) && u++ < o ? (e.consume(i), l) : (e.exit(t), n(i)) }
            }
        },
        797: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t, i, o = n.children || [],
                    u = o.length,
                    l = [],
                    a = -1;
                for (; ++a < u;)(t = r(e, o[a], n)) && (a && "break" === o[a - 1].type && (t.value && (t.value = t.value.replace(/^\s+/, "")), (i = t.children && t.children[0]) && i.value && (i.value = i.value.replace(/^\s+/, ""))), l = l.concat(t));
                return l
            };
            var r = t(979)
        },
        801: function(e, n, t) {
            "use strict";
            e.exports = function(e, n, t) {
                var r;
                null !== t && void 0 !== t || "object" === typeof n && !Array.isArray(n) || (t = n, n = {});
                r = Object.assign({ type: String(e) }, n), Array.isArray(t) ? r.children = t : null !== t && void 0 !== t && (r.value = String(t));
                return r
            }
        },
        812: function(e, n, t) {
            "use strict";
            e.exports = function(e) { return -2 === e || -1 === e || 32 === e }
        },
        813: function(e, n, t) {
            "use strict";
            var r = t(1120);
            e.exports = function(e, n, t, i) {
                var o, u = e.length,
                    l = 0;
                if (n = n < 0 ? -n > u ? 0 : u + n : n > u ? u : n, t = t > 0 ? t : 0, i.length < 1e4)(o = Array.from(i)).unshift(n, t), r.apply(e, o);
                else
                    for (t && r.apply(e, [n, t]); l < i.length;)(o = i.slice(l, l + 1e4)).unshift(n, 0), r.apply(e, o), l += 1e4, n += 1e4
            }
        },
        814: function(e, n, t) {
            "use strict";
            e.exports = function(e) { return e < 0 || 32 === e }
        },
        817: function(e, n, t) {
            "use strict";
            var r = t(865);
            e.exports = function(e) { return function(n) { return e.test(r(n)) } }
        },
        819: function(e, n, t) {
            var r = t(494),
                i = t(845),
                o = t(820),
                u = 4294967295,
                l = Math.min;
            e.exports = function(e, n) {
                if ((e = o(e)) < 1 || e > 9007199254740991) return [];
                var t = u,
                    a = l(e, u);
                n = i(n), e -= u;
                for (var c = r(a, n); ++t < e;) n(t);
                return c
            }
        },
        820: function(e, n, t) {
            var r = t(493);
            e.exports = function(e) {
                var n = r(e),
                    t = n % 1;
                return n === n ? t ? n - t : n : 0
            }
        },
        821: function(e, n, t) {
            "use strict";
            var r = t(847);
            e.exports = function(e) { return r({}, e) }
        },
        832: function(e, n) { e.exports = function() { for (var e = {}, n = 0; n < arguments.length; n++) { var r = arguments[n]; for (var i in r) t.call(r, i) && (e[i] = r[i]) } return e }; var t = Object.prototype.hasOwnProperty },
        833: function(e, n, t) {
            "use strict";
            var r = t(987),
                i = t(985),
                o = t(988);
            e.exports = function(e) {
                var n, t, u = e.space,
                    l = e.mustUseProperty || [],
                    a = e.attributes || {},
                    c = e.properties,
                    s = e.transform,
                    f = {},
                    p = {};
                for (n in c) t = new o(n, s(a, n), c[n], u), -1 !== l.indexOf(n) && (t.mustUseProperty = !0), f[n] = t, p[r(n)] = n, p[r(t.attribute)] = n;
                return new i(f, p, u)
            }
        },
        845: function(e, n, t) {
            var r = t(251);
            e.exports = function(e) { return "function" == typeof e ? e : r }
        },
        847: function(e, n, t) {
            "use strict";
            var r = Object.assign;
            e.exports = r
        },
        848: function(e, n, t) {
            "use strict";
            var r = t(964);
            e.exports = function(e, n) { var t = e[e.length - 1]; return t && t[1].type === n ? r(t[2].sliceStream(t[1])) : 0 }
        },
        849: function(e, n, t) {
            "use strict";
            var r = t(817)(/[\dA-Za-z]/);
            e.exports = r
        },
        850: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t = [],
                    i = -1,
                    o = e.length;
                n && t.push(r("text", "\n"));
                for (; ++i < o;) i && t.push(r("text", "\n")), t.push(e[i]);
                n && e.length > 0 && t.push(r("text", "\n"));
                return t
            };
            var r = t(801)
        },
        865: function(e, n, t) {
            "use strict";
            var r = String.fromCharCode;
            e.exports = r
        },
        866: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(790),
                o = { tokenize: function(e, n, t) { return i(e, (function(e) { return null === e || r(e) ? n(e) : t(e) }), "linePrefix") }, partial: !0 };
            e.exports = o
        },
        867: function(e, n, t) {
            "use strict";
            e.exports = function(e, n, t) { for (var r, i = [], o = -1; ++o < e.length;)(r = e[o].resolveAll) && i.indexOf(r) < 0 && (n = r(n, t), i.push(r)); return n }
        },
        868: function(e, n, t) {
            "use strict";
            var r = t(817)(/[A-Za-z]/);
            e.exports = r
        },
        869: function(e, n, t) {
            "use strict";
            var r = {};

            function i(e, n, t) {
                var o, u, l, a, c, s = "";
                for ("string" !== typeof n && (t = n, n = i.defaultChars), "undefined" === typeof t && (t = !0), c = function(e) { var n, t, i = r[e]; if (i) return i; for (i = r[e] = [], n = 0; n < 128; n++) t = String.fromCharCode(n), /^[0-9a-z]$/i.test(t) ? i.push(t) : i.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2)); for (n = 0; n < e.length; n++) i[e.charCodeAt(n)] = e[n]; return i }(n), o = 0, u = e.length; o < u; o++)
                    if (l = e.charCodeAt(o), t && 37 === l && o + 2 < u && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) s += e.slice(o, o + 3), o += 2;
                    else if (l < 128) s += c[l];
                else if (l >= 55296 && l <= 57343) {
                    if (l >= 55296 && l <= 56319 && o + 1 < u && (a = e.charCodeAt(o + 1)) >= 56320 && a <= 57343) { s += encodeURIComponent(e[o] + e[o + 1]), o++; continue }
                    s += "%EF%BF%BD"
                } else s += encodeURIComponent(e[o]);
                return s
            }
            i.defaultChars = ";/?:@&=+$,-_.!~*'()#", i.componentChars = "-_.!~*'()", e.exports = i
        },
        870: function(e, n, t) {
            "use strict";
            var r = 0;

            function i() { return Math.pow(2, ++r) }
            n.boolean = i(), n.booleanish = i(), n.overloadedBoolean = i(), n.number = i(), n.spaceSeparated = i(), n.commaSeparated = i(), n.commaOrSpaceSeparated = i()
        },
        891: function(e, n, t) {
            "use strict";
            e.exports = function(e) { return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase() }
        },
        892: function(e, n, t) {
            "use strict";
            e.exports = function(e) { return null === e || void 0 === e ? [] : "length" in e ? e : [e] }
        },
        893: function(e, n, t) {
            "use strict";
            var r = t(813);
            e.exports = function(e, n) { return e.length ? (r(e, e.length, 0, n), e) : n }
        },
        894: function(e, n, t) {
            "use strict";
            var r = t(1126),
                i = t(817)(r);
            e.exports = i
        },
        895: function(e, n, t) {
            "use strict";
            var r = t(817)(/\s/);
            e.exports = r
        },
        896: function(e, n, t) {
            "use strict";
            e.exports = function(e) { return e < 32 || 127 === e }
        },
        897: function(e, n, t) {
            "use strict";
            var r = t(814),
                i = t(893),
                o = t(813),
                u = t(891),
                l = t(867),
                a = t(821),
                c = t(971),
                s = t(972),
                f = t(974),
                p = t(973),
                d = {
                    name: "labelEnd",
                    tokenize: function(e, n, t) {
                        var r, i, o = this,
                            l = o.events.length;
                        for (; l--;)
                            if (("labelImage" === o.events[l][1].type || "labelLink" === o.events[l][1].type) && !o.events[l][1]._balanced) { r = o.events[l][1]; break }
                        return function(n) { if (!r) return t(n); return r._inactive ? c(n) : (i = o.parser.defined.indexOf(u(o.sliceSerialize({ start: r.end, end: o.now() }))) > -1, e.enter("labelEnd"), e.enter("labelMarker"), e.consume(n), e.exit("labelMarker"), e.exit("labelEnd"), a) };

                        function a(t) { return 40 === t ? e.attempt(h, n, i ? n : c)(t) : 91 === t ? e.attempt(m, n, i ? e.attempt(g, n, c) : c)(t) : i ? n(t) : c(t) }

                        function c(e) { return r._balanced = !0, t(e) }
                    },
                    resolveTo: function(e, n) {
                        var t, r, u, c, s, f, p, d = e.length,
                            h = 0;
                        for (; d--;)
                            if (c = e[d][1], s) { if ("link" === c.type || "labelLink" === c.type && c._inactive) break; "enter" === e[d][0] && "labelLink" === c.type && (c._inactive = !0) } else if (f) { if ("enter" === e[d][0] && ("labelImage" === c.type || "labelLink" === c.type) && !c._balanced && (s = d, "labelLink" !== c.type)) { h = 2; break } } else "labelEnd" === c.type && (f = d);
                        return t = { type: "labelLink" === e[s][1].type ? "link" : "image", start: a(e[s][1].start), end: a(e[e.length - 1][1].end) }, r = { type: "label", start: a(e[s][1].start), end: a(e[f][1].end) }, u = { type: "labelText", start: a(e[s + h + 2][1].end), end: a(e[f - 2][1].start) }, p = i(p = [
                            ["enter", t, n],
                            ["enter", r, n]
                        ], e.slice(s + 1, s + h + 3)), p = i(p, [
                            ["enter", u, n]
                        ]), p = i(p, l(n.parser.constructs.insideSpan.null, e.slice(s + h + 4, f - 3), n)), p = i(p, [
                            ["exit", u, n], e[f - 2], e[f - 1],
                            ["exit", r, n]
                        ]), p = i(p, e.slice(f + 1)), p = i(p, [
                            ["exit", t, n]
                        ]), o(e, s, e.length, p), e
                    },
                    resolveAll: function(e) { var n, t = -1; for (; ++t < e.length;)(n = e[t][1])._used || "labelImage" !== n.type && "labelLink" !== n.type && "labelEnd" !== n.type || (e.splice(t + 1, "labelImage" === n.type ? 4 : 2), n.type = "data", t++); return e }
                },
                h = {
                    tokenize: function(e, n, t) {
                        return function(n) { return e.enter("resource"), e.enter("resourceMarker"), e.consume(n), e.exit("resourceMarker"), p(e, i) };

                        function i(n) { return 41 === n ? l(n) : c(e, o, t, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(n) }

                        function o(n) { return r(n) ? p(e, u)(n) : l(n) }

                        function u(n) { return 34 === n || 39 === n || 40 === n ? f(e, p(e, l), t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(n) : l(n) }

                        function l(r) { return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), n) : t(r) }
                    }
                },
                m = {
                    tokenize: function(e, n, t) {
                        var r = this;
                        return function(n) { return s.call(r, e, i, t, "reference", "referenceMarker", "referenceString")(n) };

                        function i(e) { return r.parser.defined.indexOf(u(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) < 0 ? t(e) : n(e) }
                    }
                },
                g = {
                    tokenize: function(e, n, t) {
                        return function(n) { return e.enter("reference"), e.enter("referenceMarker"), e.consume(n), e.exit("referenceMarker"), r };

                        function r(r) { return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), n) : t(r) }
                    }
                };
            e.exports = d
        },
        898: function(e, n, t) {
            "use strict";
            e.exports = l;
            var r = t(976),
                i = r.CONTINUE,
                o = r.SKIP,
                u = r.EXIT;

            function l(e, n, t, i) {
                "function" === typeof n && "function" !== typeof t && (i = t, t = n, n = null), r(e, n, (function(e, n) {
                    var r = n[n.length - 1],
                        i = r ? r.children.indexOf(e) : null;
                    return t(e, i, r)
                }), i)
            }
            l.CONTINUE = i, l.SKIP = o, l.EXIT = u
        },
        899: function(e, n, t) {
            "use strict";
            var r, i = "";
            e.exports = function(e, n) {
                if ("string" !== typeof e) throw new TypeError("expected a string");
                if (1 === n) return e;
                if (2 === n) return e + e;
                var t = e.length * n;
                if (r !== e || "undefined" === typeof r) r = e, i = "";
                else if (i.length >= t) return i.substr(0, t);
                for (; t > i.length && n > 1;) 1 & n && (i += e), n >>= 1, e += e;
                return i = (i += e).substr(0, t)
            }
        },
        959: function(e, n, t) {
            "use strict";
            var r = t(1),
                i = t(960),
                o = t(1104),
                u = t(1110),
                l = t(1152),
                a = t(49),
                c = t(1179),
                s = t(1181),
                f = t(1182),
                p = t(1183).hastChildrenToReact;
            e.exports = m;
            var d = {}.hasOwnProperty,
                h = { renderers: { to: "components", id: "change-renderers-to-components" }, astPlugins: { id: "remove-buggy-html-in-markdown-parser" }, allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" }, escapeHtml: { id: "remove-buggy-html-in-markdown-parser" }, source: { to: "children", id: "change-source-to-children" }, allowNode: { to: "allowElement", id: "replace-allownode-allowedtypes-and-disallowedtypes" }, allowedTypes: { to: "allowedElements", id: "replace-allownode-allowedtypes-and-disallowedtypes" }, disallowedTypes: { to: "disallowedElements", id: "replace-allownode-allowedtypes-and-disallowedtypes" }, includeNodeIndex: { to: "includeElementIndex", id: "change-includenodeindex-to-includeelementindex" } };

            function m(e) {
                for (var n in h)
                    if (d.call(h, n) && d.call(e, n)) {
                        var t = h[n];
                        console.warn("[react-markdown] Warning: please ".concat(t.to ? "use `".concat(t.to, "` instead of") : "remove", " `").concat(n, "` (see <").concat("https://github.com/remarkjs/react-markdown/blob/main/changelog.md", "#").concat(t.id, "> for more info)")), delete h[n]
                    }
                var a, f = o().use(u).use(e.remarkPlugins || e.plugins || []).use(l, { allowDangerousHtml: !0 }).use(e.rehypePlugins || []).use(s, e);
                "string" === typeof e.children ? a = i(e.children) : (void 0 !== e.children && null !== e.children && console.warn("[react-markdown] Warning: please pass a string as `children` (not: `".concat(e.children, "`)")), a = i());
                var m = f.runSync(f.parse(a), a);
                if ("root" !== m.type) throw new TypeError("Expected a `root` node");
                var g = r.createElement(r.Fragment, {}, p({ options: e, schema: c, listDepth: 0 }, m));
                return e.className && (g = r.createElement("div", { className: e.className }, g)), g
            }
            m.defaultProps = { transformLinkUri: f }, m.propTypes = { children: a.string, className: a.string, allowElement: a.func, allowedElements: a.arrayOf(a.string), disallowedElements: a.arrayOf(a.string), unwrapDisallowed: a.bool, remarkPlugins: a.arrayOf(a.oneOfType([a.object, a.func, a.arrayOf(a.oneOfType([a.object, a.func]))])), rehypePlugins: a.arrayOf(a.oneOfType([a.object, a.func, a.arrayOf(a.oneOfType([a.object, a.func]))])), sourcePos: a.bool, rawSourcePos: a.bool, skipHtml: a.bool, includeElementIndex: a.bool, transformLinkUri: a.oneOfType([a.func, a.bool]), linkTarget: a.oneOfType([a.func, a.string]), transformImageUri: a.func, components: a.object }, m.uriTransformer = f
        },
        960: function(e, n, t) {
            "use strict";
            e.exports = t(1099)
        },
        961: function(e, n, t) {
            "use strict";
            var r = {}.hasOwnProperty;

            function i(e) { return e && "object" === typeof e || (e = {}), u(e.line) + ":" + u(e.column) }

            function o(e) { return e && "object" === typeof e || (e = {}), i(e.start) + "-" + i(e.end) }

            function u(e) { return e && "number" === typeof e ? e : 1 }
            e.exports = function(e) { if (!e || "object" !== typeof e) return ""; if (r.call(e, "position") || r.call(e, "type")) return o(e.position); if (r.call(e, "start") || r.call(e, "end")) return o(e); if (r.call(e, "line") || r.call(e, "column")) return i(e); return "" }
        },
        962: function(e, n) { e.exports = function(e) { return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e) } },
        963: function(e, n, t) {
            "use strict";
            var r = {}.hasOwnProperty;
            e.exports = r
        },
        964: function(e, n, t) {
            "use strict";
            e.exports = function(e) { for (var n = -1, t = 0; ++n < e.length;) t += "string" === typeof e[n] ? e[n].length : 1; return t }
        },
        965: function(e, n, t) {
            "use strict";
            var r = t(847),
                i = t(813),
                o = t(821);

            function u(e, n) {
                for (var t, r, o, u, l, a, c = e[n][1], s = e[n][2], f = n - 1, p = [], d = c._tokenizer || s.parser[c.contentType](c.start), h = d.events, m = [], g = {}; c;) {
                    for (; e[++f][1] !== c;);
                    p.push(f), c._tokenizer || (t = s.sliceStream(c), c.next || t.push(null), r && d.defineSkip(c.start), c.isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0), d.write(t), c.isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), r = c, c = c.next
                }
                for (c = r, o = h.length; o--;) "enter" === h[o][0] ? u = !0 : u && h[o][1].type === h[o - 1][1].type && h[o][1].start.line !== h[o][1].end.line && (v(h.slice(o + 1, l)), c._tokenizer = c.next = void 0, c = c.previous, l = o + 1);
                for (d.events = c._tokenizer = c.next = void 0, v(h.slice(0, l)), o = -1, a = 0; ++o < m.length;) g[a + m[o][0]] = a + m[o][1], a += m[o][1] - m[o][0] - 1;
                return g;

                function v(n) {
                    var t = p.pop();
                    m.unshift([t, t + n.length - 1]), i(e, t, 2, n)
                }
            }
            e.exports = function(e) {
                for (var n, t, l, a, c, s, f, p = {}, d = -1; ++d < e.length;) {
                    for (; d in p;) d = p[d];
                    if (n = e[d], d && "chunkFlow" === n[1].type && "listItemPrefix" === e[d - 1][1].type && ((l = 0) < (s = n[1]._tokenizer.events).length && "lineEndingBlank" === s[l][1].type && (l += 2), l < s.length && "content" === s[l][1].type))
                        for (; ++l < s.length && "content" !== s[l][1].type;) "chunkText" === s[l][1].type && (s[l][1].isInFirstContentOfListItem = !0, l++);
                    if ("enter" === n[0]) n[1].contentType && (r(p, u(e, d)), d = p[d], f = !0);
                    else if (n[1]._container || n[1]._movePreviousLineEndings) {
                        for (l = d, t = void 0; l-- && ("lineEnding" === (a = e[l])[1].type || "lineEndingBlank" === a[1].type);) "enter" === a[0] && (t && (e[t][1].type = "lineEndingBlank"), a[1].type = "lineEnding", t = l);
                        t && (n[1].end = o(e[t][1].start), (c = e.slice(t, d)).unshift(n), i(e, t, d - t + 1, c))
                    }
                }
                return !f
            }
        },
        966: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 });
            var r = t(847),
                i = t(821),
                o = a("text"),
                u = a("string"),
                l = { resolveAll: c() };

            function a(e) {
                return {
                    tokenize: function(n) {
                        var t = this,
                            r = this.parser.constructs[e],
                            i = n.attempt(r, o, u);
                        return o;

                        function o(e) { return a(e) ? i(e) : u(e) }

                        function u(e) {
                            if (null !== e) return n.enter("data"), n.consume(e), l;
                            n.consume(e)
                        }

                        function l(e) { return a(e) ? (n.exit("data"), i(e)) : (n.consume(e), l) }

                        function a(e) {
                            var n = r[e],
                                i = -1;
                            if (null === e) return !0;
                            if (n)
                                for (; ++i < n.length;)
                                    if (!n[i].previous || n[i].previous.call(t, t.previous)) return !0
                        }
                    },
                    resolveAll: c("text" === e ? s : void 0)
                }
            }

            function c(e) { return function(n, t) { var r, i = -1; for (; ++i <= n.length;) void 0 === r ? n[i] && "data" === n[i][1].type && (r = i, i++) : n[i] && "data" === n[i][1].type || (i !== r + 2 && (n[r][1].end = n[i - 1][1].end, n.splice(r + 2, i - r - 2), i = r + 2), r = void 0); return e ? e(n, t) : n } }

            function s(e, n) {
                for (var t, o, u, l, a, c, s, f, p = -1; ++p <= e.length;)
                    if ((p === e.length || "lineEnding" === e[p][1].type) && "data" === e[p - 1][1].type) {
                        for (o = e[p - 1][1], l = (t = n.sliceStream(o)).length, a = -1, c = 0, s = void 0; l--;)
                            if ("string" === typeof(u = t[l])) {
                                for (a = u.length; 32 === u.charCodeAt(a - 1);) c++, a--;
                                if (a) break;
                                a = -1
                            } else if (-2 === u) s = !0, c++;
                        else if (-1 !== u) { l++; break }
                        c && (f = { type: p === e.length || s || c < 2 ? "lineSuffix" : "hardBreakTrailing", start: { line: o.end.line, column: o.end.column - c, offset: o.end.offset - c, _index: o.start._index + l, _bufferIndex: l ? a : o.start._bufferIndex + a }, end: i(o.end) }, o.end = i(f.start), o.start.offset === o.end.offset ? r(o, f) : (e.splice(p, 0, ["enter", f, n], ["exit", f, n]), p += 2)), p++
                    }
                return e
            }
            n.resolver = l, n.string = u, n.text = o
        },
        967: function(e, n, t) {
            "use strict";
            var r = t(963),
                i = t(813),
                o = t(892);

            function u(e, n) {
                var t, i, u, a;
                for (t in n)
                    for (a in i = r.call(e, t) ? e[t] : e[t] = {}, u = n[t]) i[a] = l(o(u[a]), r.call(i, a) ? i[a] : [])
            }

            function l(e, n) { for (var t = -1, r = []; ++t < e.length;)("after" === e[t].add ? n : r).push(e[t]); return i(n, 0, 0, r), n }
            e.exports = function(e) { for (var n = {}, t = -1; ++t < e.length;) u(n, e[t]); return n }
        },
        968: function(e, n, t) {
            "use strict";
            var r = t(814),
                i = t(894),
                o = t(895);
            e.exports = function(e) { return null === e || r(e) || o(e) ? 1 : i(e) ? 2 : void 0 }
        },
        969: function(e, n, t) {
            "use strict";
            var r;
            e.exports = function(e) { var n, t = "&" + e + ";"; if ((r = r || document.createElement("i")).innerHTML = t, 59 === (n = r.textContent).charCodeAt(n.length - 1) && "semi" !== e) return !1; return n !== t && n }
        },
        970: function(e, n, t) {
            "use strict";
            var r = t(817)(/\d/);
            e.exports = r
        },
        971: function(e, n, t) {
            "use strict";
            var r = t(896),
                i = t(814),
                o = t(789);
            e.exports = function(e, n, t, u, l, a, c, s, f) {
                var p = f || 1 / 0,
                    d = 0;
                return function(n) { if (60 === n) return e.enter(u), e.enter(l), e.enter(a), e.consume(n), e.exit(a), h; if (r(n) || 41 === n) return t(n); return e.enter(u), e.enter(c), e.enter(s), e.enter("chunkString", { contentType: "string" }), v(n) };

                function h(t) { return 62 === t ? (e.enter(a), e.consume(t), e.exit(a), e.exit(l), e.exit(u), n) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), m(t)) }

                function m(n) { return 62 === n ? (e.exit("chunkString"), e.exit(s), h(n)) : null === n || 60 === n || o(n) ? t(n) : (e.consume(n), 92 === n ? g : m) }

                function g(n) { return 60 === n || 62 === n || 92 === n ? (e.consume(n), m) : m(n) }

                function v(o) { return 40 === o ? ++d > p ? t(o) : (e.consume(o), v) : 41 === o ? d-- ? (e.consume(o), v) : (e.exit("chunkString"), e.exit(s), e.exit(c), e.exit(u), n(o)) : null === o || i(o) ? d ? t(o) : (e.exit("chunkString"), e.exit(s), e.exit(c), e.exit(u), n(o)) : r(o) ? t(o) : (e.consume(o), 92 === o ? x : v) }

                function x(n) { return 40 === n || 41 === n || 92 === n ? (e.consume(n), v) : v(n) }
            }
        },
        972: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(812);
            e.exports = function(e, n, t, o, u, l) {
                var a, c = this,
                    s = 0;
                return function(n) { return e.enter(o), e.enter(u), e.consume(n), e.exit(u), e.enter(l), f };

                function f(i) { return null === i || 91 === i || 93 === i && !a || 94 === i && !s && "_hiddenFootnoteSupport" in c.parser.constructs || s > 999 ? t(i) : 93 === i ? (e.exit(l), e.enter(u), e.consume(i), e.exit(u), e.exit(o), n) : r(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), f) : (e.enter("chunkString", { contentType: "string" }), p(i)) }

                function p(n) { return null === n || 91 === n || 93 === n || r(n) || s++ > 999 ? (e.exit("chunkString"), f(n)) : (e.consume(n), a = a || !i(n), 92 === n ? d : p) }

                function d(n) { return 91 === n || 92 === n || 93 === n ? (e.consume(n), s++, p) : p(n) }
            }
        },
        973: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(812),
                o = t(790);
            e.exports = function(e, n) { var t; return function u(l) { if (r(l)) return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), t = !0, u; if (i(l)) return o(e, u, t ? "linePrefix" : "lineSuffix")(l); return n(l) } }
        },
        974: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(790);
            e.exports = function(e, n, t, o, u, l) {
                var a;
                return function(n) { return e.enter(o), e.enter(u), e.consume(n), e.exit(u), a = 40 === n ? 41 : n, c };

                function c(t) { return t === a ? (e.enter(u), e.consume(t), e.exit(u), e.exit(o), n) : (e.enter(l), s(t)) }

                function s(n) { return n === a ? (e.exit(l), c(a)) : null === n ? t(n) : r(n) ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), i(e, s, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), f(n)) }

                function f(n) { return n === a || null === n || r(n) ? (e.exit("chunkString"), s(n)) : (e.consume(n), 92 === n ? p : f) }

                function p(n) { return n === a || 92 === n ? (e.consume(n), f) : f(n) }
            }
        },
        975: function(e, n, t) {
            "use strict";
            var r = t(789),
                i = t(812),
                o = t(790),
                u = {
                    name: "thematicBreak",
                    tokenize: function(e, n, t) {
                        var u, l = 0;
                        return function(n) { return e.enter("thematicBreak"), u = n, a(n) };

                        function a(s) { return s === u ? (e.enter("thematicBreakSequence"), c(s)) : i(s) ? o(e, a, "whitespace")(s) : l < 3 || null !== s && !r(s) ? t(s) : (e.exit("thematicBreak"), n(s)) }

                        function c(n) { return n === u ? (e.consume(n), l++, c) : (e.exit("thematicBreakSequence"), a(n)) }
                    }
                };
            e.exports = u
        },
        976: function(e, n, t) {
            "use strict";
            e.exports = a;
            var r = t(977),
                i = t(1155),
                o = !0,
                u = "skip",
                l = !1;

            function a(e, n, t, a) {
                var c, s;
                "function" === typeof n && "function" !== typeof t && (a = t, t = n, n = null), s = r(n), c = a ? -1 : 1,
                    function e(r, f, p) {
                        var d, h = "object" === typeof r && null !== r ? r : {};
                        "string" === typeof h.type && (d = "string" === typeof h.tagName ? h.tagName : "string" === typeof h.name ? h.name : void 0, m.displayName = "node (" + i(h.type + (d ? "<" + d + ">" : "")) + ")");
                        return m;

                        function m() {
                            var i, d, h = p.concat(r),
                                m = [];
                            if ((!n || s(r, f, p[p.length - 1] || null)) && (m = function(e) { if (null !== e && "object" === typeof e && "length" in e) return e; if ("number" === typeof e) return [o, e]; return [e] }(t(r, p)))[0] === l) return m;
                            if (r.children && m[0] !== u)
                                for (d = (a ? r.children.length : -1) + c; d > -1 && d < r.children.length;) {
                                    if ((i = e(r.children[d], d, h)())[0] === l) return i;
                                    d = "number" === typeof i[1] ? i[1] : d + c
                                }
                            return m
                        }
                    }(e, null, [])()
            }
            a.CONTINUE = true, a.SKIP = u, a.EXIT = l
        },
        977: function(e, n, t) {
            "use strict";

            function r(e) {
                if (null == e) return i;
                if ("string" === typeof e) return function(e) {
                    return n;

                    function n(n) { return Boolean(n && n.type === e) }
                }(e);
                if ("object" === typeof e) return "length" in e ? function(e) {
                    var n = [],
                        t = -1;
                    for (; ++t < e.length;) n[t] = r(e[t]);
                    return i;

                    function i() {
                        for (var e = -1; ++e < n.length;)
                            if (n[e].apply(this, arguments)) return !0;
                        return !1
                    }
                }(e) : function(e) {
                    return n;

                    function n(n) {
                        var t;
                        for (t in e)
                            if (n[t] !== e[t]) return !1;
                        return !0
                    }
                }(e);
                if ("function" === typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function i() { return !0 }
            e.exports = r
        },
        978: function(e, n, t) {
            "use strict";
            var r = u("start"),
                i = u("end");

            function o(e) { return { start: r(e), end: i(e) } }

            function u(e) {
                return n.displayName = e, n;

                function n(n) { var t = n && n.position && n.position[e] || {}; return { line: t.line || null, column: t.column || null, offset: isNaN(t.offset) ? null : t.offset } }
            }
            e.exports = o, o.start = r, o.end = i
        },
        979: function(e, n, t) {
            "use strict";
            e.exports = function(e, n, t) {
                var r, i = n && n.type;
                if (!i) throw new Error("Expected node, got `" + n + "`");
                r = o.call(e.handlers, i) ? e.handlers[i] : e.passThrough && e.passThrough.indexOf(i) > -1 ? l : e.unknownHandler;
                return ("function" === typeof r ? r : u)(e, n, t)
            };
            var r = t(801),
                i = t(797),
                o = {}.hasOwnProperty;

            function u(e, n) { return function(e) { var n = e.data || {}; if (o.call(n, "hName") || o.call(n, "hProperties") || o.call(n, "hChildren")) return !1; return "value" in e }(n) ? e.augment(n, r("text", n.value)) : e(n, "div", i(e, n)) }

            function l(e, n) { var t; return n.children ? ((t = Object.assign({}, n)).children = i(e, n), t) : n }
        },
        980: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return e(n, "hr") }
        },
        981: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t, o, u = {},
                    l = n.ordered ? "ol" : "ul",
                    a = -1;
                "number" === typeof n.start && 1 !== n.start && (u.start = n.start);
                t = i(e, n), o = t.length;
                for (; ++a < o;)
                    if (t[a].properties.className && -1 !== t[a].properties.className.indexOf("task-list-item")) { u.className = ["contains-task-list"]; break }
                return e(n, l, u, r(t, !0))
            };
            var r = t(850),
                i = t(797)
        },
        982: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t = e.footnoteOrder,
                    i = String(n.identifier); - 1 === t.indexOf(i) && t.push(i);
                return e(n.position, "sup", { id: "fnref-" + i }, [e(n, "a", { href: "#fn-" + i, className: ["footnote-ref"] }, [r("text", n.label || i)])])
            };
            var r = t(801)
        },
        983: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) {
                var t, o, u, l = n.referenceType,
                    a = "]";
                "collapsed" === l ? a += "[]" : "full" === l && (a += "[" + (n.label || n.identifier) + "]");
                if ("imageReference" === n.type) return r("text", "![" + n.alt + a);
                t = i(e, n), (o = t[0]) && "text" === o.type ? o.value = "[" + o.value : t.unshift(r("text", "["));
                (u = t[t.length - 1]) && "text" === u.type ? u.value += a : t.push(r("text", a));
                return t
            };
            var r = t(801),
                i = t(797)
        },
        984: function(e, n, t) {
            "use strict";
            var r = t(832),
                i = t(985);
            e.exports = function(e) {
                var n, t, o = e.length,
                    u = [],
                    l = [],
                    a = -1;
                for (; ++a < o;) n = e[a], u.push(n.property), l.push(n.normal), t = n.space;
                return new i(r.apply(null, u), r.apply(null, l), t)
            }
        },
        985: function(e, n, t) {
            "use strict";
            e.exports = i;
            var r = i.prototype;

            function i(e, n, t) { this.property = e, this.normal = n, t && (this.space = t) }
            r.space = null, r.normal = {}, r.property = {}
        },
        986: function(e, n, t) {
            "use strict";
            var r = t(833);
            e.exports = r({ space: "xlink", transform: function(e, n) { return "xlink:" + n.slice(5).toLowerCase() }, properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } })
        },
        987: function(e, n, t) {
            "use strict";
            e.exports = function(e) { return e.toLowerCase() }
        },
        988: function(e, n, t) {
            "use strict";
            var r = t(989),
                i = t(870);
            e.exports = l, l.prototype = new r, l.prototype.defined = !0;
            var o = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"],
                u = o.length;

            function l(e, n, t, l) { var c, s = -1; for (a(this, "space", l), r.call(this, e, n); ++s < u;) a(this, c = o[s], (t & i[c]) === i[c]) }

            function a(e, n, t) { t && (e[n] = t) }
        },
        989: function(e, n, t) {
            "use strict";
            e.exports = i;
            var r = i.prototype;

            function i(e, n) { this.property = e, this.attribute = n }
            r.space = null, r.attribute = null, r.property = null, r.boolean = !1, r.booleanish = !1, r.overloadedBoolean = !1, r.number = !1, r.commaSeparated = !1, r.spaceSeparated = !1, r.commaOrSpaceSeparated = !1, r.mustUseProperty = !1, r.defined = !1
        },
        990: function(e, n, t) {
            "use strict";
            var r = t(833);
            e.exports = r({ space: "xml", transform: function(e, n) { return "xml:" + n.slice(3).toLowerCase() }, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } })
        },
        991: function(e, n, t) {
            "use strict";
            var r = t(833),
                i = t(992);
            e.exports = r({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: i, properties: { xmlns: null, xmlnsXLink: null } })
        },
        992: function(e, n, t) {
            "use strict";
            var r = t(993);
            e.exports = function(e, n) { return r(e, n.toLowerCase()) }
        },
        993: function(e, n, t) {
            "use strict";
            e.exports = function(e, n) { return n in e ? e[n] : n }
        },
        994: function(e, n, t) {
            "use strict";
            var r = t(870),
                i = t(833),
                o = r.booleanish,
                u = r.number,
                l = r.spaceSeparated;
            e.exports = i({ transform: function(e, n) { return "role" === n ? n : "aria-" + n.slice(4).toLowerCase() }, properties: { ariaActiveDescendant: null, ariaAtomic: o, ariaAutoComplete: null, ariaBusy: o, ariaChecked: o, ariaColCount: u, ariaColIndex: u, ariaColSpan: u, ariaControls: l, ariaCurrent: null, ariaDescribedBy: l, ariaDetails: null, ariaDisabled: o, ariaDropEffect: l, ariaErrorMessage: null, ariaExpanded: o, ariaFlowTo: l, ariaGrabbed: o, ariaHasPopup: null, ariaHidden: o, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: l, ariaLevel: u, ariaLive: null, ariaModal: o, ariaMultiLine: o, ariaMultiSelectable: o, ariaOrientation: null, ariaOwns: l, ariaPlaceholder: null, ariaPosInSet: u, ariaPressed: o, ariaReadOnly: o, ariaRelevant: null, ariaRequired: o, ariaRoleDescription: l, ariaRowCount: u, ariaRowIndex: u, ariaRowSpan: u, ariaSelected: o, ariaSetSize: u, ariaSort: null, ariaValueMax: u, ariaValueMin: u, ariaValueNow: u, ariaValueText: null, role: null } })
        },
        995: function(e, n, t) {
            "use strict";
            var r, i = t(1194),
                o = t(1203),
                u = t(1211);
            e.exports = function(e) {
                var n = this.data();
                !r && (this.Parser && this.Parser.prototype && this.Parser.prototype.blockTokenizers || this.Compiler && this.Compiler.prototype && this.Compiler.prototype.visitors) && (r = !0, console.warn("[remark-gfm] Warning: please upgrade to remark 13 to use this plugin"));

                function t(e, t) { n[e] ? n[e].push(t) : n[e] = [t] }
                t("micromarkExtensions", i(e)), t("fromMarkdownExtensions", o), t("toMarkdownExtensions", u(e))
            }
        },
        996: function(e, n) {
            e.exports = function(e, n, t) {
                var r, i, o, u = e.children || [],
                    l = [],
                    a = -1,
                    c = t.before;
                for (; ++a < u.length;) o = u[a], a + 1 < u.length ? ((i = n.handle.handlers[u[a + 1].type]) && i.peek && (i = i.peek), r = i ? i(u[a + 1], e, n, { before: "", after: "" }).charAt(0) : "") : r = t.after, l.length > 0 && ("\r" === c || "\n" === c) && "html" === o.type && (l[l.length - 1] = l[l.length - 1].replace(/(\r?\n|\r)$/, " "), c = " "), l.push(n.handle(o, e, n, { before: c, after: r })), c = l[l.length - 1].slice(-1);
                return l.join("")
            }
        }
    }
]);
//# sourceMappingURL=0.3de3aa23.chunk.js.map