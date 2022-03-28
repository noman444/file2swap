(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [26], { 1513: function(e, t, n) { "use strict";
            n.r(t); var c, r, i, o, s, a, l, b, j, u, d, x, O, h, p, f, m, g, v, w, y, k, C, S, B = n(9),
                E = n(1),
                L = n(43),
                A = n(278),
                I = n(2),
                P = n(62),
                D = n(786),
                N = n(100),
                R = n(370),
                U = n(51),
                z = n(47),
                F = n(375),
                T = n(189),
                H = n(3),
                X = n.n(H),
                M = n(13),
                W = n(56),
                V = n(255),
                Y = n(40),
                Q = function() { var e = Object(E.useState)(W.a.BigNumber.from(0)),
                        t = Object(B.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = Object(V.a)(),
                        i = r.lastUpdated,
                        o = r.setLastUpdated; return Object(E.useEffect)((function() {
                        (function() { var e = Object(M.a)(X.a.mark((function e() { var t, n; return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(Y.i)(), e.next = 3, t.latestAnswer();
                                        case 3:
                                            n = e.sent, c(n);
                                        case 5:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } })()() }), [i, c]), { price: n, lastUpdated: i, refresh: o } },
                Z = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                        t = Q(),
                        n = t.price,
                        c = t.refresh,
                        r = Object(P.b)();
                    Object(E.useEffect)((function() { c(); var t = setInterval((function() { c() }), 1e3 * e); return function() { clearInterval(t) } }), [e, c]), Object(E.useEffect)((function() { r(Object(R.o)(n.toJSON())) }), [n, r]) },
                _ = n(123),
                $ = function() { var e = Object(E.useRef)(null),
                        t = Object(P.b)(),
                        n = Object(L.c)().account,
                        c = Object(D.d)(),
                        r = Object(D.g)(),
                        i = Object(D.v)();
                    Object(E.useEffect)((function() { return e.current && clearInterval(e.current), i !== U.d.INITIAL && (e.current = setInterval(Object(M.a)(X.a.mark((function e() { var i, o; return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            i = [c, c - 1, c - 2], t(Object(R.g)(i)), t(Object(R.e)()), n && (o = Object(_.range)(r, c + 1), t(Object(R.d)({ account: n, epochs: o })), t(Object(R.c)({ account: n, epochs: o })));
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e) }))), 1e4)),
                            function() { e.current && clearInterval(e.current) } }), [e, n, i, c, r, t]) },
                q = n(8),
                G = n(5),
                K = G.e.div(c || (c = Object(q.a)(["\n  background: ", ";\n  height: calc(100vh - 64px);\n  min-height: calc(100vh - 64px);\n  overflow: hidden;\n  position: relative;\n"])), (function(e) { return e.theme.colors.gradients.violetAlt })),
                J = n(783),
                ee = n(14),
                te = n(67),
                ne = n(0),
                ce = Object(G.f)(r || (r = Object(q.a)(["\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"]))),
                re = Object(G.f)(i || (i = Object(q.a)(["\n  20% {\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n"]))),
                ie = Object(G.d)(o || (o = Object(q.a)(["\n  animation: ", " 1s;\n"])), ce),
                oe = Object(G.d)(s || (s = Object(q.a)(["\n  animation: ", " 1s;\n"])), re),
                se = G.e.div(a || (a = Object(q.a)(["\n  align-items: center;\n  bottom: 72px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: absolute;\n  width: 100%;\n  z-index: 50;\n\n  &.popup-enter-active {\n    ", "\n  }\n\n  &.popup-enter-done {\n    bottom: 72px;\n  }\n\n  &.popup-exit-done {\n    bottom: -2000px;\n  }\n\n  &.popup-exit-active {\n    ", "\n  }\n\n  ", " {\n    bottom: 16px;\n    justify-content: flex-end;\n\n    &.popup-enter-done {\n      bottom: 16px;\n    }\n  }\n"])), ie, oe, (function(e) { return e.theme.mediaQueries.md })),
                ae = G.e.div(l || (l = Object(q.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 32px;\n  color: #ffffff;\n  display: flex;\n  max-width: 320px;\n  padding: 16px 8px;\n"])), (function(e) { return e.theme.colors.secondary })),
                le = function() { var e = Object(E.useState)(!1),
                        t = Object(B.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = Object(ee.b)().t,
                        i = Object(E.useRef)(null),
                        o = Object(E.useRef)(null),
                        s = Object(L.c)().account,
                        a = Object(D.v)(),
                        l = Object(D.y)(),
                        b = Object(P.b)(); return Object(E.useEffect)((function() { var e = !1; return s && (o.current = setInterval(Object(M.a)(X.a.mark((function t() { var n, r; return X.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(te.e)({ user: s.toLowerCase(), claimed: !1 });
                                        case 2:
                                            n = t.sent, e || (r = n.filter((function(e) { return e.position === e.round.position })), l || c(r.length > 0));
                                        case 4:
                                        case "end":
                                            return t.stop() } }), t) }))), 3e4)),
                            function() { clearInterval(o.current), e = !0 } }), [s, o, a, c, l]), Object(E.useEffect)((function() { l && c(!1) }), [l, c]), Object(ne.jsx)(J.a, { in: n, unmountOnExit: !0, nodeRef: i, timeout: 1e3, classNames: "popup", children: Object(ne.jsx)(se, { ref: i, children: Object(ne.jsxs)(ae, { children: [Object(ne.jsx)(I.wc, { width: "64px", style: { flex: "none" }, mr: "8px" }), Object(ne.jsx)(I.r, { style: { flex: 1 }, onClick: function() { b(Object(R.n)(!0)) }, children: r("Collect Winnings") }), Object(ne.jsx)(I.cb, { variant: "text", onClick: function() { c(!1), clearInterval(o.current) }, children: Object(ne.jsx)(I.M, { color: "primary", width: "24px" }) })] }) }) }) },
                be = Object(E.createContext)(void 0),
                je = function(e) { var t = e.children,
                        n = Object(E.useState)(null),
                        c = Object(B.a)(n, 2),
                        r = c[0],
                        i = c[1]; return Object(ne.jsx)(be.Provider, { value: { swiper: r, setSwiper: i, destroySwiper: function() { r && (r.destroy(), i(null)) } }, children: t }) },
                ue = n(1095),
                de = n(221),
                xe = n.n(de),
                Oe = n(1096),
                he = n.n(Oe),
                pe = "tradingview_b239c",
                fe = function() { var e = Object(M.a)(X.a.mark((function e() { return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e) { return Object.defineProperty(window, "TradingView", { configurable: !0, set: function(t) { this.tv = t, e(t) } }) })));
                                case 1:
                                case "end":
                                    return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                me = function(e, t, n) { new e.widget({ autosize: !0, height: "100%", symbol: "BINANCE:BNBUSDT", interval: "5", timezone: "Etc/UTC", theme: t.isDark ? "dark" : "light", style: "1", locale: n, toolbar_bg: "#f1f3f6", enable_publishing: !1, allow_symbol_change: !0, container_id: pe }) },
                ge = function() { var e = Object(ee.b)().currentLanguage,
                        t = Object(G.g)(),
                        n = Object(V.a)(),
                        c = n.lastUpdated,
                        r = n.setLastUpdated; return Object(E.useEffect)((function() { var e = document.getElementById(pe),
                            t = xe()((function() { r() }), 500),
                            n = new ResizeObserver((function() { t() })); return n.observe(e),
                            function() { n.unobserve(e) } }), [r]), Object(E.useEffect)((function() { window.tv ? me(window.tv, t, e.code) : fe().then((function(n) { me(n, t, e.code) })) }), [t, e, c]), Object(ne.jsx)(I.n, { overflow: "hidden", className: "tradingview_container", children: Object(ne.jsx)("div", { id: pe }) }) },
                ve = G.e.div(b || (b = Object(q.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  height: 100%;\n  justify-content: center;\n"]))),
                we = G.e.div(j || (j = Object(q.a)(["\n  position: relative;\n  width: 320px;\n"]))),
                ye = G.e.div(u || (u = Object(q.a)(["\n  position: absolute;\n  top: -130px;\n  left: 0px;\n  text-align: center;\n  width: 100%;\n  z-index: 5;\n"]))),
                ke = function(e) { var t = e.title,
                        n = e.children; return Object(ne.jsx)(ve, { children: Object(ne.jsxs)(we, { children: [Object(ne.jsx)(ye, { children: Object(ne.jsx)("img", { src: "/images/decorations/hiccup-bunny.png", alt: "bunny decoration", height: "121px", width: "130px" }) }), Object(ne.jsx)(I.v, { children: Object(ne.jsxs)(I.w, { children: [Object(ne.jsx)(I.Z, { mb: "24px", children: t }), n] }) })] }) }) },
                Ce = function() { var e = Object(ee.b)().t,
                        t = Object(P.b)(); return Object(ne.jsxs)(ke, { title: e("Error"), children: [Object(ne.jsx)(I.nc, { as: "p", mb: "24px", children: e("This page can\u2019t be displayed right now due to an error. Please check back soon.") }), Object(ne.jsx)(I.r, { variant: "primary", width: "100%", onClick: function() { t(Object(R.n)(!0)) }, children: e("Show History") })] }) },
                Se = function() { var e = Object(ee.b)().t,
                        t = Object(P.b)(); return Object(ne.jsxs)(ke, { title: e("Markets Paused"), children: [Object(ne.jsxs)(I.n, { mb: "24px", children: [Object(ne.jsx)(I.nc, { as: "p", children: e("Prediction markets have been paused due to an error.") }), Object(ne.jsx)(I.nc, { as: "p", children: e("All open positions have been canceled.") }), Object(ne.jsx)(I.nc, { as: "p", children: e("You can reclaim any funds entered into existing positions via the History tab on this page.") })] }), Object(ne.jsx)(I.r, { variant: "primary", width: "100%", onClick: function() { t(Object(R.n)(!0)) }, children: e("Show History") })] }) },
                Be = n(108),
                Ee = n(19),
                Le = n(110),
                Ae = n(31),
                Ie = function(e) { return "$".concat(Object(Ae.e)(e || 0, 3, 3)) },
                Pe = function(e) { return e ? e.toLocaleString(void 0, { minimumFractionDigits: 3, maximumFractionDigits: 3 }) : "0" },
                De = function(e, t) { return 0 === e || 0 === t ? 0 : e / t },
                Ne = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1; if (!e || !e.round) return 0; var n = e.round,
                        c = n.bullAmount,
                        r = n.bearAmount,
                        i = n.totalAmount,
                        o = De(i, e.position === U.a.BULL ? c : r); return e.amount * o * t },
                Re = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1; if (!e || !e.round) return 0; var n = Ne(e, t); return n - e.amount },
                Ue = n(6),
                ze = n(53),
                Fe = n(32),
                Te = n(379),
                He = n(95),
                Xe = n(45),
                Me = n(130),
                We = n(99),
                Ve = n(88),
                Ye = Object(G.e)(I.Ab)(d || (d = Object(q.a)(["\n  overflow: visible;\n"]))),
                Qe = G.e.div(x || (x = Object(q.a)(["\n  position: absolute;\n  top: -116px; // line up bunny at the top of the modal\n  left: 0px;\n  text-align: center;\n  width: 100%;\n"]))),
                Ze = function(e) { var t = e.onDismiss,
                        n = e.onSuccess,
                        c = Object(E.useState)(!1),
                        r = Object(B.a)(c, 2),
                        i = r[0],
                        o = r[1],
                        s = Object(L.c)().account,
                        a = Object(ee.b)().t,
                        l = Object(He.a)(),
                        b = l.toastSuccess,
                        j = l.toastError,
                        u = Object(Me.a)().callWithGasPrice,
                        d = Object(Xe.r)(),
                        x = Object(Te.a)(),
                        O = Object(P.b)(),
                        h = Object(D.m)(),
                        p = Object(D.i)(),
                        f = function(e) { return e ? e.reduce((function(e, t) { if (!t.claimed && t.position === t.round.position) { var n = Ne(t, Le.d); return Object(Ue.a)(Object(Ue.a)({}, e), {}, { epochs: [].concat(Object(Fe.a)(e.epochs), [t.round.epoch]), total: e.total + n }) } return e }), { epochs: [], total: 0 }) : { epochs: [], total: 0 } }(p),
                        m = f.epochs,
                        g = f.total,
                        v = Object(Ve.d)(x, g);
                    Object(E.useEffect)((function() { 0 === p.length && O(Object(R.f)({ account: s })) }), [s, p, O]); var w = function() { var e = Object(M.a)(X.a.mark((function e() { var c, r, i; return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, u(d, "claim", [m]);
                                    case 3:
                                        return c = e.sent, o(!0), e.next = 7, c.wait();
                                    case 7:
                                        if (r = e.sent, O(Object(R.k)(m.reduce((function(e, t) { return Object(Ue.a)(Object(Ue.a)({}, e), {}, Object(Ee.a)({}, t, !0)) }), {}))), !n) { e.next = 12; break } return e.next = 12, n();
                                    case 12:
                                        t(), o(!1), b(a("Winnings collected!"), Object(ne.jsx)(We.b, { txHash: r.transactionHash, children: a("Your prizes have been sent to your wallet") })), e.next = 21; break;
                                    case 17:
                                        e.prev = 17, e.t0 = e.catch(0), console.error("Unable to claim winnings", e.t0), j(a("Error"), (null === e.t0 || void 0 === e.t0 || null === (i = e.t0.data) || void 0 === i ? void 0 : i.message) || a("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 21:
                                        return e.prev = 21, o(!1), e.finish(21);
                                    case 24:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [0, 17, 21, 24]
                            ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(ne.jsxs)(Ye, { minWidth: "288px", position: "relative", mt: "124px", children: [Object(ne.jsx)(Qe, { children: Object(ne.jsx)("img", { src: "/images/decorations/prize-bunny.png", alt: "bunny decoration", height: "124px", width: "168px" }) }), Object(ne.jsxs)(I.Bb, { children: [Object(ne.jsx)(I.Db, { children: Object(ne.jsx)(I.Z, { children: a("Collect Winnings") }) }), Object(ne.jsx)(I.zb, { onDismiss: t })] }), Object(ne.jsxs)(I.yb, { p: "24px", children: [Object(ne.jsx)(I.wc, { width: "96px", mx: "auto", mb: "24px" }), Object(ne.jsxs)(I.X, { alignItems: "start", justifyContent: "space-between", mb: "8px", children: [Object(ne.jsx)(I.nc, { children: a("Collecting") }), Object(ne.jsxs)(I.n, { style: { textAlign: "right" }, children: [Object(ne.jsx)(I.nc, { children: "".concat(Object(Ae.e)(g, 0, 4), " BNB") }), Object(ne.jsx)(I.nc, { fontSize: "12px", color: "textSubtle", children: "~$".concat(v.toFixed(2)) })] })] }), Object(ne.jsx)(I.X, { alignItems: "start", justifyContent: "center", mb: "24px", children: h ? Object(ne.jsx)(I.Ub, { height: "21", width: "140px" }) : Object(ne.jsx)(I.nc, { color: "textSubtle", fontSize: "14px", children: 1 === m.length ? a("From round %round%", { round: m[0] }) : a("From rounds %rounds%", { rounds: m.join(", ") }) }) }), Object(ne.jsx)(I.r, { width: "100%", mb: "8px", onClick: w, isLoading: i || h, endIcon: i ? Object(ne.jsx)(I.i, { spin: !0, color: "currentColor" }) : null, children: a("Confirm") })] })] }) },
                _e = ["hasClaimed", "onSuccess", "children"],
                $e = function(e) { var t = e.hasClaimed,
                        n = e.onSuccess,
                        c = e.children,
                        r = Object(ze.a)(e, _e),
                        i = Object(I.Mc)(Object(ne.jsx)(Ze, { onSuccess: n }), !1),
                        o = Object(B.a)(i, 1)[0]; return Object(ne.jsx)(I.r, Object(Ue.a)(Object(Ue.a)({ onClick: o, disabled: t }, r), {}, { children: c })) },
                qe = ["epoch", "onSuccess", "children"],
                Ge = function(e) { var t = e.epoch,
                        n = e.onSuccess,
                        c = e.children,
                        r = Object(ze.a)(e, qe),
                        i = Object(E.useState)(!1),
                        o = Object(B.a)(i, 2),
                        s = o[0],
                        a = o[1],
                        l = Object(ee.b)().t,
                        b = Object(Xe.r)(),
                        j = Object(Me.a)().callWithGasPrice,
                        u = Object(He.a)(),
                        d = u.toastSuccess,
                        x = u.toastError,
                        O = function() { var e = Object(M.a)(X.a.mark((function e() { var c, r; return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, j(b, "claim", [
                                                [t]
                                            ]);
                                        case 2:
                                            return c = e.sent, a(!0), e.next = 6, c.wait();
                                        case 6:
                                            if (!(r = e.sent).status) { e.next = 15; break } if (!n) { e.next = 11; break } return e.next = 11, n();
                                        case 11:
                                            a(!1), d(l("Position reclaimed!"), Object(ne.jsx)(We.b, { txHash: r.transactionHash })), e.next = 17; break;
                                        case 15:
                                            a(!1), x(l("Error"), l("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                        case 17:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(ne.jsx)(I.r, Object(Ue.a)(Object(Ue.a)({ onClick: O, isLoading: s, endIcon: s ? Object(ne.jsx)(I.i, { spin: !0, color: "white" }) : null }, r), {}, { children: c || l("Reclaim Position") })) },
                Ke = n(38),
                Je = n(60),
                et = n(376),
                tt = Je.a.from(1e5),
                nt = Je.a.from("1000000000000000"),
                ct = function(e) { var t = e.price,
                        n = void 0 === t ? Je.a.from(0) : t,
                        c = e.minPriceDisplayed,
                        r = e.unitPrefix,
                        i = e.decimals,
                        o = n.isNegative() ? Je.a.from(-1) : Je.a.from(1); if (n.abs().lt(c)) { var s = c.mul(o); return "<".concat(r).concat(Object(Ae.b)(s, 3, i)) } return "".concat(r).concat(Object(Ae.b)(n, 3, i)) },
                rt = function(e) { return ct({ price: e, minPriceDisplayed: tt, unitPrefix: "$", decimals: 8 }) },
                it = function(e) { return ct({ price: e, minPriceDisplayed: nt, unitPrefix: "", decimals: 18 }) },
                ot = function(e) { return e.toString().padStart(2, "0") },
                st = function(e) { var t = Object(et.a)(e),
                        n = t.hours,
                        c = t.minutes,
                        r = t.seconds,
                        i = "".concat(ot(c), ":").concat(ot(r)); return n > 0 ? "".concat(ot(n), ":").concat(i) : i },
                at = function(e, t) { var n = 1e3 * (e.closeTimestamp + t),
                        c = Date.now(); return null !== n && c > n && !e.oracleCalled },
                lt = function(e, t) { if (!e) return W.a.FixedNumber.from(0); if (e.eq(0) || t.eq(0)) return W.a.FixedNumber.from(0); var n = W.a.FixedNumber.from(e),
                        c = W.a.FixedNumber.from(t); return n.divUnsafe(c) },
                bt = function(e, t) { return e && t ? e.sub(t) : W.a.BigNumber.from(0) },
                jt = function(e, t) { return t ? t.eq(e) ? U.a.HOUSE : t.gt(e) ? U.a.BULL : U.a.BEAR : null },
                ut = ["bg", "startIcon", "children", "onClick"],
                dt = ["betPosition", "children"],
                xt = Object(G.e)(I.X)(O || (O = Object(q.a)(["\n  background-color: ", ";\n  display: inline-flex;\n"])), (function(e) { var t = e.bg; return e.theme.colors[t] })),
                Ot = function(e) { var t = e.bg,
                        n = void 0 === t ? "success" : t,
                        c = e.startIcon,
                        r = e.children,
                        i = e.onClick,
                        o = Object(ze.a)(e, ut),
                        s = c || Object(ne.jsx)(I.h, { color: "white" }); return Object(ne.jsxs)(xt, Object(Ue.a)(Object(Ue.a)({ alignItems: "center", justifyContent: "center", borderRadius: "4px", bg: n, py: "4px", px: "8px", onClick: i, style: { cursor: i ? "pointer" : "normal" } }, o), {}, { children: [s, Object(ne.jsx)(I.nc, { textTransform: "uppercase", color: "white", ml: "4px", children: r })] })) },
                ht = function(e) { var t = e.betPosition,
                        n = e.children,
                        c = Object(ze.a)(e, dt),
                        r = Object(ee.b)().t,
                        i = t === U.a.BULL,
                        o = i ? Object(ne.jsx)(I.h, { color: "white" }) : Object(ne.jsx)(I.d, { color: "white" }),
                        s = Object(I.Oc)(Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)(I.nc, { bold: !0, mb: "4px", children: r("Neither side wins this round") }), Object(ne.jsx)(I.nc, { children: r("The Locked Price & Closed Price are exactly the same (within 8 decimals), so neither side wins. All funds entered into UP and DOWN positions will go to the weekly CAKE burn.") })] }), { placement: "right" }),
                        a = s.targetRef,
                        l = s.tooltip,
                        b = s.tooltipVisible; return t === U.a.HOUSE ? Object(ne.jsxs)(ne.Fragment, { children: [b && l, Object(ne.jsx)(I.vc, { ref: a, color: "secondary", fontWeight: "300", textTransform: "uppercase", children: Object(ne.jsxs)(I.X, { alignItems: "center", children: [r("To Burn"), Object(ne.jsx)(I.eb, { width: "16px", ml: "4px", color: "secondary" })] }) })] }) : Object(ne.jsx)(Ot, Object(Ue.a)(Object(Ue.a)({ bg: i ? "success" : "failure", startIcon: o }, c), {}, { children: n })) },
                pt = ["children"],
                ft = ["totalAmount"],
                mt = ["positionLabel", "multiplier", "amount"],
                gt = ["lockPrice"],
                vt = ["isNext", "hasEntered", "isLive", "children"],
                wt = ["totalAmount"],
                yt = ["lockPrice"],
                kt = function(e) { return e ? it(e) : "0" },
                Ct = function(e) { var t = e.children,
                        n = Object(ze.a)(e, pt); return Object(ne.jsx)(I.X, Object(Ue.a)(Object(Ue.a)({ alignItems: "center", justifyContent: "space-between" }, n), {}, { children: t })) },
                St = function(e) { var t = e.totalAmount,
                        n = Object(ze.a)(e, ft),
                        c = Object(ee.b)().t; return Object(ne.jsxs)(Ct, Object(Ue.a)(Object(Ue.a)({}, n), {}, { children: [Object(ne.jsxs)(I.nc, { bold: !0, children: [c("Prize Pool"), ":"] }), Object(ne.jsx)(I.nc, { bold: !0, children: "".concat(kt(t), " BNB") })] })) },
                Bt = function(e) { var t = e.positionLabel,
                        n = e.multiplier,
                        c = e.amount,
                        r = Object(ze.a)(e, mt),
                        i = Object(ee.b)().t,
                        o = "".concat(n.toLocaleString(void 0, { maximumFractionDigits: 2 }), "x"); return Object(ne.jsxs)(Ct, Object(Ue.a)(Object(Ue.a)({ height: "18px" }, r), {}, { children: [Object(ne.jsxs)(I.nc, { fontSize: "12px", textTransform: "uppercase", children: [t, ":"] }), Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsx)(I.nc, { fontSize: "12px", lineHeight: "18px", bold: !0, children: i("%multiplier% Payout", { multiplier: o }) }), Object(ne.jsx)(I.nc, { mx: "4px", children: "|" }), Object(ne.jsx)(I.nc, { fontSize: "12px", lineHeight: "18px", children: "".concat(Pe(c), " BNB") })] })] })) },
                Et = function(e) { var t = e.lockPrice,
                        n = Object(ze.a)(e, gt),
                        c = Object(ee.b)().t; return Object(ne.jsxs)(Ct, Object(Ue.a)(Object(Ue.a)({}, n), {}, { children: [Object(ne.jsxs)(I.nc, { fontSize: "14px", children: [c("Locked Price"), ":"] }), Object(ne.jsx)(I.nc, { fontSize: "14px", children: rt(t) })] })) },
                Lt = Object(G.e)(I.n)(h || (h = Object(q.a)(["\n  background: ", ";\n  border-radius: 16px;\n  padding: 2px;\n"])), (function(e) { var t = e.theme,
                        n = e.betPosition,
                        c = e.isNext,
                        r = e.isLive,
                        i = e.hasEntered; if (c) return "linear-gradient(180deg, #53DEE9 0%, #7645D9 100%)"; if (i || r) return t.colors.secondary; switch (n) {
                        case U.a.BULL:
                            return t.colors.success;
                        case U.a.BEAR:
                            return t.colors.failure;
                        case U.a.HOUSE:
                            return t.colors.textDisabled;
                        default:
                            return t.colors.cardBorder } })),
                At = G.e.div(p || (p = Object(q.a)(["\n  background: ", ";\n  border-radius: 14px;\n  padding: 16px;\n"])), (function(e) { return e.theme.card.background })),
                It = function(e) { var t = e.isNext,
                        n = void 0 !== t && t,
                        c = e.hasEntered,
                        r = void 0 !== c && c,
                        i = e.isLive,
                        o = void 0 !== i && i,
                        s = e.children,
                        a = Object(ze.a)(e, vt); return Object(ne.jsx)(Lt, Object(Ue.a)(Object(Ue.a)({ isNext: n, hasEntered: r, isLive: o }, a), {}, { children: Object(ne.jsx)(At, { children: s }) })) },
                Pt = function(e) { var t = e.lockPrice,
                        n = e.closePrice,
                        c = jt(t, n),
                        r = bt(n, t); return Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", mb: "16px", children: [n ? Object(ne.jsx)(I.nc, { color: function() { switch (c) {
                                    case U.a.BULL:
                                        return "success";
                                    case U.a.BEAR:
                                        return "failure";
                                    case U.a.HOUSE:
                                    default:
                                        return "textDisabled" } }(), bold: !0, fontSize: "24px", children: rt(n) }) : Object(ne.jsx)(I.Ub, { height: "34px", my: "1px" }), Object(ne.jsx)(ht, { betPosition: c, children: rt(r) })] }) },
                Dt = function(e) { return e ? Pe(e) : "0" },
                Nt = function(e) { var t = e.totalAmount,
                        n = Object(ze.a)(e, wt),
                        c = Object(ee.b)().t; return Object(ne.jsxs)(Ct, Object(Ue.a)(Object(Ue.a)({}, n), {}, { children: [Object(ne.jsxs)(I.nc, { bold: !0, children: [c("Prize Pool"), ":"] }), Object(ne.jsx)(I.nc, { bold: !0, children: "".concat(Dt(t), " BNB") })] })) },
                Rt = function(e) { var t = e.lockPrice,
                        n = Object(ze.a)(e, yt),
                        c = Object(ee.b)().t; return Object(ne.jsxs)(Ct, Object(Ue.a)(Object(Ue.a)({}, n), {}, { children: [Object(ne.jsxs)(I.nc, { fontSize: "14px", children: [c("Locked Price"), ":"] }), Object(ne.jsx)(I.nc, { fontSize: "14px", children: Ie(t) })] })) },
                Ut = ["round", "hasFailed", "children"],
                zt = function(e) { var t = e.round,
                        n = e.hasFailed,
                        c = void 0 !== n && n,
                        r = e.children,
                        i = Object(ze.a)(e, Ut),
                        o = t.lockPrice,
                        s = t.closePrice,
                        a = t.totalAmount,
                        l = jt(o, s),
                        b = Object(ee.b)().t; return Object(ne.jsxs)(It, Object(Ue.a)(Object(Ue.a)({ betPosition: l }, i), {}, { children: [Object(ne.jsx)(I.nc, { color: "textSubtle", fontSize: "12px", bold: !0, textTransform: "uppercase", mb: "8px", children: b("Closed Price") }), c ? Object(ne.jsx)(I.nc, { bold: !0, textTransform: "uppercase", color: "textDisabled", mb: "16px", fontSize: "24px", children: b("Canceled") }) : Object(ne.jsx)(Pt, { lockPrice: o, closePrice: s }), o && Object(ne.jsx)(Et, { lockPrice: o }), Object(ne.jsx)(St, { totalAmount: a }), r] })) },
                Ft = ["round", "children"],
                Tt = function(e) { var t = e.round,
                        n = e.children,
                        c = Object(ze.a)(e, Ft),
                        r = t.lockPrice,
                        i = t.closePrice,
                        o = t.totalAmount,
                        s = i > r ? U.a.BULL : U.a.BEAR,
                        a = s === U.a.BULL,
                        l = Object(ee.b)().t,
                        b = i - r; return Object(ne.jsxs)(It, Object(Ue.a)(Object(Ue.a)({ betPosition: s }, c), {}, { children: [Object(ne.jsx)(I.nc, { color: "textSubtle", fontSize: "12px", bold: !0, textTransform: "uppercase", mb: "8px", children: l("Closed Price") }), t.failed ? Object(ne.jsx)(I.nc, { bold: !0, textTransform: "uppercase", color: "textDisabled", mb: "16px", fontSize: "24px", children: l("Canceled") }) : Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", mb: "16px", children: [Object(ne.jsx)(I.nc, { color: a ? "success" : "failure", bold: !0, fontSize: "24px", children: Ie(i) }), Object(ne.jsx)(ht, { betPosition: s, children: Ie(b) })] }), r && Object(ne.jsx)(Rt, { lockPrice: r }), Object(ne.jsx)(Nt, { totalAmount: o }), n] })) },
                Ht = function(e) { var t = Object(E.useState)(!1),
                        n = Object(B.a)(t, 2),
                        c = n[0],
                        r = n[1],
                        i = Object(L.c)().account; return Object(E.useEffect)((function() { i && function() { var t = Object(M.a)(X.a.mark((function t() { var n, c; return X.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = Object(Y.u)(), t.next = 3, n.refundable(e, i);
                                        case 3:
                                            if (!t.sent) { t.next = 11; break } return t.next = 7, n.ledger(e, i);
                                        case 7:
                                            c = t.sent, r(!1 === c.claimed), t.next = 12; break;
                                        case 11:
                                            r(!1);
                                        case 12:
                                        case "end":
                                            return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }()() }), [i, e, r]), { isRefundable: c, setIsRefundable: r } },
                Xt = Object(G.e)(I.n)(f || (f = Object(q.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n  margin-bottom: 24px;\n  padding: 16px;\n"])), (function(e) { return e.theme.colors.textDisabled })),
                Mt = G.e.hr(m || (m = Object(q.a)(["\n  border: 1px solid ", ";\n"])), (function(e) { return e.theme.colors.cardBorder })),
                Wt = function(e) { var t = e.bet,
                        n = e.result,
                        c = Object(ee.b)().t,
                        r = Object(P.b)(),
                        i = Object(L.c)().account,
                        o = Ht(t.round.epoch).isRefundable,
                        s = Object(D.l)(t.round.epoch),
                        a = Object(Te.a)(),
                        l = Object(I.Oc)(Object(ne.jsx)(I.nc, { as: "p", children: c("Includes your original position and your winnings, minus the %fee% fee.", { fee: "3%" }) }), { placement: "auto" }),
                        b = l.targetRef,
                        j = l.tooltip,
                        u = l.tooltipVisible,
                        d = n === te.b.WIN,
                        x = d ? Re(t, Le.d) : t.amount,
                        O = Object(Ve.d)(a, x),
                        h = x + t.amount,
                        p = function() { switch (n) {
                                case te.b.WIN:
                                    return "warning";
                                case te.b.LOSE:
                                    return "textSubtle";
                                case te.b.CANCELED:
                                    return "textDisabled";
                                default:
                                    return "text" } },
                        f = function() { var e = Object(M.a)(X.a.mark((function e() { return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            r(Object(R.k)(Object(Ee.a)({}, t.round.epoch, !0))), r(Object(R.d)({ account: i, epochs: [t.round.epoch] }));
                                        case 2:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", mb: "8px", children: [Object(ne.jsx)(I.Z, { children: c("Your History") }), Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsx)(I.Z, { as: "h3", color: p(), textTransform: "uppercase", bold: !0, mr: "4px", children: function() { switch (n) {
                                            case te.b.WIN:
                                                return c("Win");
                                            case te.b.LOSE:
                                                return c("Lose");
                                            case te.b.CANCELED:
                                                return c("Canceled");
                                            default:
                                                return "" } }() }), function() { switch (n) {
                                        case te.b.WIN:
                                            return Object(ne.jsx)(I.Nb, { color: p() });
                                        case te.b.LOSE:
                                        case te.b.CANCELED:
                                            return Object(ne.jsx)(I.l, { color: p() });
                                        default:
                                            return null } }()] })] }), Object(ne.jsxs)(Xt, { children: [n === te.b.WIN && !s && Object(ne.jsx)($e, { hasClaimed: !s, width: "100%", mb: "16px", onSuccess: f, children: t.claimed ? c("Already Collected") : c("Collect Winnings") }), t.claimed && t.claimedHash && Object(ne.jsx)(I.X, { justifyContent: "center", children: Object(ne.jsx)(I.jb, { href: Object(Ke.e)(t.claimedHash, "transaction"), mb: "16px", children: c("View on BscScan") }) }), n === te.b.CANCELED && o && Object(ne.jsx)(Ge, { epoch: t.round.epoch, width: "100%", mb: "16px" }), Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", mb: "16px", children: [Object(ne.jsxs)(I.nc, { children: [c("Your direction"), ":"] }), Object(ne.jsx)(ht, { betPosition: t.position, children: t.position === U.a.BULL ? c("Up") : c("Down") })] }), Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", mb: "16px", children: [Object(ne.jsx)(I.nc, { children: c("Your position") }), Object(ne.jsx)(I.nc, { children: "".concat(Pe(t.amount), " BNB") })] }), Object(ne.jsxs)(I.X, { alignItems: "start", justifyContent: "space-between", children: [Object(ne.jsxs)(I.nc, { bold: !0, children: [c(d ? "Your winnings" : "Your Result"), ":"] }), Object(ne.jsxs)(I.n, { style: { textAlign: "right" }, children: [Object(ne.jsx)(I.nc, { bold: !0, color: function() { switch (n) {
                                                case te.b.WIN:
                                                    return "success";
                                                case te.b.LOSE:
                                                    return "failure";
                                                case te.b.CANCELED:
                                                default:
                                                    return "text" } }(), children: "".concat(d ? "+" : "-").concat(Pe(x), " BNB") }), Object(ne.jsx)(I.nc, { fontSize: "12px", color: "textSubtle", children: "~$".concat(O.toFixed(2)) })] })] }), d && Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)(Mt, {}), Object(ne.jsxs)(I.X, { alignItems: "start", justifyContent: "space-between", children: [Object(ne.jsxs)(I.nc, { fontSize: "14px", color: "textSubtle", children: [c("Amount to collect"), ":"] }), Object(ne.jsxs)(I.X, { justifyContent: "end", children: [Object(ne.jsx)(I.nc, { fontSize: "14px", color: "textSubtle", children: "".concat(Pe(h), " BNB") }), Object(ne.jsx)("span", { ref: b, children: Object(ne.jsx)(I.eb, { color: "textSubtle", ml: "4px" }) })] }), u && j] })] })] })] }) },
                Vt = G.e.div(g || (g = Object(q.a)(["\n  background-color: ", ";\n  border-bottom: 2px solid ", ";\n  padding: 24px;\n"])), (function(e) { return e.theme.colors.dropdown }), (function(e) { return e.theme.colors.cardBorder })),
                Yt = function(e) { var t = e.bet,
                        n = e.result,
                        c = Object(ee.b)().t,
                        r = t.round,
                        i = r.totalAmount,
                        o = r.bullAmount,
                        s = r.bearAmount,
                        a = De(i, o),
                        l = De(i, s); return Object(ne.jsxs)(Vt, { children: [n === te.b.CANCELED && Object(ne.jsx)(I.nc, { as: "p", color: "failure", mb: "24px", children: c("This round was automatically canceled due to an error. If you entered a position, please reclaim your funds below.") }), n !== te.b.LIVE && Object(ne.jsx)(Wt, { bet: t, result: n }), Object(ne.jsx)(I.Z, { mb: "8px", children: c("Round History") }), Object(ne.jsxs)(Tt, { round: t.round, mb: "24px", children: [Object(ne.jsx)(Bt, { positionLabel: c("Up"), multiplier: a, amount: o }), Object(ne.jsx)(Bt, { positionLabel: c("Down"), multiplier: l, amount: s })] }), t.round.lockBlock && Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", mb: "8px", children: [Object(ne.jsx)(I.nc, { children: c("Opening Block") }), Object(ne.jsx)(I.ib, { href: Object(Ke.e)(t.round.lockBlock, "block"), external: !0, children: t.round.lockBlock })] }), t.round.closeBlock && Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", children: [Object(ne.jsx)(I.nc, { children: c("Closing Block") }), Object(ne.jsx)(I.ib, { href: Object(Ke.e)(t.round.closeBlock, "block"), external: !0, children: t.round.closeBlock })] })] }) },
                Qt = Object(G.e)(I.X).attrs({ alignItems: "center", p: "16px" })(v || (v = Object(q.a)(["\n  background-color: ", ";\n  border-bottom: 2px solid ", ";\n  cursor: pointer;\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.colors.cardBorder })),
                Zt = Object(G.e)(I.n)(w || (w = Object(q.a)(["\n  flex: 1;\n"]))),
                _t = function(e) { var t, n = e.bet,
                        c = Object(E.useState)(!1),
                        r = Object(B.a)(c, 2),
                        i = r[0],
                        o = r[1],
                        s = n.amount,
                        a = n.round,
                        l = Object(ee.b)().t,
                        b = Object(D.d)(),
                        j = Object(D.v)(),
                        u = Object(D.l)(n.round.epoch),
                        d = Object(P.b)(),
                        x = Object(L.c)().account,
                        O = Object(te.l)(n, b),
                        h = function(e) { switch (e) {
                                case te.b.WIN:
                                    return "success";
                                case te.b.LOSE:
                                    return "failure";
                                case te.b.CANCELED:
                                    return "textDisabled";
                                default:
                                    return "text" } }(O),
                        p = (t = O) === te.b.LOSE ? "-" : t === te.b.WIN ? "+" : "",
                        f = a.epoch === b,
                        m = j === U.d.LIVE && a.epoch === b - 1,
                        g = O === te.b.WIN ? Re(n, Le.d) : s,
                        v = function() { var e = Object(M.a)(X.a.mark((function e() { return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            d(Object(R.k)(Object(Ee.a)({}, n.round.epoch, !0))), d(Object(R.d)({ account: x, epochs: [n.round.epoch] }));
                                        case 2:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsxs)(Qt, { onClick: function() { return o(!i) }, role: "button", children: [Object(ne.jsx)(I.n, { width: "48px", children: Object(ne.jsxs)(I.nc, { textAlign: "center", children: [Object(ne.jsx)(I.nc, { fontSize: "12px", color: "textSubtle", children: l("Round") }), Object(ne.jsx)(I.nc, { bold: !0, lineHeight: 1, children: a.epoch.toLocaleString() })] }) }), Object(ne.jsx)(Zt, { px: "24px", children: f ? Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsx)(I.Ec, { color: "primary", mr: "6px", width: "24px" }), Object(ne.jsx)(I.nc, { color: "primary", bold: !0, children: l("Starting Soon") })] }) : m ? Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsx)(I.Kb, { color: "secondary", mr: "6px", width: "24px" }), Object(ne.jsx)(I.nc, { color: "secondary", bold: !0, children: l("Live Now") })] }) : Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)(I.nc, { fontSize: "12px", color: "textSubtle", children: l("Your Result") }), Object(ne.jsx)(I.nc, { bold: !0, color: h, lineHeight: 1, children: O === te.b.CANCELED ? l("Canceled") : "".concat(p).concat(Pe(g)) })] }) }), O === te.b.WIN && u && Object(ne.jsx)($e, { hasClaimed: !u, onSuccess: v, scale: "sm", mr: "8px", children: l("Collect") }), O === te.b.CANCELED && u && Object(ne.jsx)(Ge, { epoch: n.round.epoch, scale: "sm", mr: "8px", children: l("Reclaim") }), !f && !m && Object(ne.jsx)(I.cb, { variant: "text", scale: "sm", children: i ? Object(ne.jsx)(I.K, {}) : Object(ne.jsx)(I.H, {}) })] }), i && Object(ne.jsx)(Yt, { bet: n, result: Object(te.l)(n, b) })] }) },
                $t = G.e.label(y || (y = Object(q.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: inline-flex;\n  margin-right: 16px;\n"]))),
                qt = Object(G.e)(I.n)(k || (k = Object(q.a)(["\n  background: ", ";\n  flex: none;\n  padding: 16px;\n"])), (function(e) { return e.theme.colors.gradients.bubblegum })),
                Gt = G.e.div(C || (C = Object(q.a)(["\n  margin-bottom: 16px;\n  width: 100%;\n  & > div {\n    width: 100%;\n  }\n\n  & button {\n    width: 100%;\n  }\n"])));! function(e) { e[e.ROUNDS = 0] = "ROUNDS", e[e.PNL = 1] = "PNL" }(S || (S = {})); var Kt, Jt, en, tn, nn, cn, rn, on, sn, an, ln, bn, jn, un, dn, xn, On, hn, pn, fn, mn, gn, vn, wn, yn, kn, Cn, Sn, Bn, En, Ln, An, In, Pn, Dn, Nn, Rn, Un, zn, Fn, Tn, Hn, Xn = function(e) { var t = e.activeTab,
                        n = e.setActiveTab,
                        c = Object(D.j)(),
                        r = Object(D.m)(),
                        i = Object(ee.b)().t,
                        o = Object(P.b)(),
                        s = Object(L.c)().account,
                        a = function(e) { return Object(M.a)(X.a.mark((function t() { return X.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e !== c && o(Object(R.m)(e));
                                        case 1:
                                        case "end":
                                            return t.stop() } }), t) }))) },
                        l = function() { var e = Object(M.a)(X.a.mark((function e(t) { return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n(t), e.next = 3, a(U.b.ALL)();
                                        case 3:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(); return Object(ne.jsxs)(qt, { children: [Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", mb: "16px", children: [Object(ne.jsx)(I.Z, { as: "h3", size: "md", children: i("History") }), Object(ne.jsx)(I.r, { onClick: function() { o(Object(R.n)(!1)) }, variant: "text", endIcon: Object(ne.jsx)(I.f, { color: "primary" }), px: "0", children: i("Close") })] }), Object(ne.jsx)(Gt, { children: Object(ne.jsxs)(I.s, { activeIndex: t, scale: "sm", variant: "subtle", onItemClick: l, children: [Object(ne.jsx)(I.t, { children: i("Rounds") }), Object(ne.jsx)(I.t, { children: i("PNL") })] }) }), t === S.ROUNDS && Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)(I.nc, { color: "textSubtle", fontSize: "12px", mb: "8px", children: i("Filter") }), Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsxs)($t, { children: [Object(ne.jsx)(I.Rb, { scale: "sm", checked: c === U.b.ALL, disabled: r || !s, onChange: a(U.b.ALL) }), Object(ne.jsx)(I.nc, { ml: "4px", children: i("All") })] }), Object(ne.jsxs)($t, { children: [Object(ne.jsx)(I.Rb, { scale: "sm", checked: c === U.b.COLLECTED, disabled: r || !s, onChange: a(U.b.COLLECTED) }), Object(ne.jsx)(I.nc, { ml: "4px", children: i("Collected") })] }), Object(ne.jsxs)($t, { children: [Object(ne.jsx)(I.Rb, { scale: "sm", checked: c === U.b.UNCOLLECTED, disabled: r || !s, onChange: a(U.b.UNCOLLECTED) }), Object(ne.jsx)(I.nc, { ml: "4px", children: i("Uncollected") })] })] })] })] }) },
                Mn = n(398),
                Wn = n(73),
                Vn = n.n(Wn),
                Yn = n(890),
                Qn = n.n(Yn),
                Zn = n(96),
                _n = function() { var e = Object(M.a)(X.a.mark((function e() { var t, n, c, r = arguments; return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : 0, n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, e.next = 4, Vn()(Zn.e, Object(Wn.gql)(Kt || (Kt = Object(q.a)(["\n      query getV1BetHistory($skip: Int!, $where: Bet_filter) {\n        bets(first: 1000, skip: $skip, where: $where, orderBy: createdAt, orderDirection: desc) {\n          hash\n          amount\n          position\n          claimed\n          claimedAmount\n          claimedHash\n          round {\n            epoch\n            position\n            failed\n            totalAmount\n            lockPrice\n            closePrice\n            totalBets\n            totalAmount\n          }\n        }\n      }\n    "]))), { skip: t, where: n });
                                case 4:
                                    return c = e.sent, e.abrupt("return", c.bets);
                                case 6:
                                case "end":
                                    return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                $n = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return new Promise((function(t, n) { var c = {},
                            r = function() { var i = Object(M.a)(X.a.mark((function i(o) { var s; return X.a.wrap((function(i) { for (;;) switch (i.prev = i.next) {
                                            case 0:
                                                return i.prev = 0, i.next = 3, _n(o, e);
                                            case 3:
                                                s = i.sent, c[o] = s, 0 === s.length ? t(Qn()(Object.values(c))) : r(o + 1e3), i.next = 11; break;
                                            case 8:
                                                i.prev = 8, i.t0 = i.catch(0), n(i.t0);
                                            case 11:
                                            case "end":
                                                return i.stop() } }), i, null, [
                                        [0, 8]
                                    ]) }))); return function(e) { return i.apply(this, arguments) } }();
                        r(0) })) },
                qn = Object(G.e)(I.Ab)(Jt || (Jt = Object(q.a)(["\n  overflow: visible;\n"]))),
                Gn = G.e.div(en || (en = Object(q.a)(["\n  position: absolute;\n  top: -116px; // line up bunny at the top of the modal\n  left: 0px;\n  text-align: center;\n  width: 100%;\n"]))),
                Kn = function(e) { var t = e.onDismiss,
                        n = Object(E.useState)(!1),
                        c = Object(B.a)(n, 2),
                        r = c[0],
                        i = c[1],
                        o = Object(E.useState)([]),
                        s = Object(B.a)(o, 2),
                        a = s[0],
                        l = s[1],
                        b = Object(ee.b)().t,
                        j = Object(L.c)().account; return Object(E.useEffect)((function() { var e = function() { var e = Object(M.a)(X.a.mark((function e() { var t; return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return i(!0), e.prev = 1, e.next = 4, $n({ user: j.toLowerCase() });
                                        case 4:
                                            t = e.sent, l(t), e.next = 11; break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), console.error("Unable to fetch history", e.t0);
                                        case 11:
                                            return e.prev = 11, i(!1), e.finish(11);
                                        case 14:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [1, 8, 11, 14]
                                ]) }))); return function() { return e.apply(this, arguments) } }();
                        j && e() }), [j, l, i]), Object(ne.jsxs)(qn, { minWidth: "288px", position: "relative", mt: "124px", children: [Object(ne.jsx)(Gn, { children: Object(ne.jsx)("img", { src: "/images/decorations/prize-bunny.png", alt: "bunny decoration", height: "124px", width: "168px" }) }), Object(ne.jsxs)(I.Bb, { children: [Object(ne.jsx)(I.Db, { children: Object(ne.jsx)(I.Z, { children: b("Nothing to Collect") }) }), Object(ne.jsx)(I.zb, { onDismiss: t })] }), Object(ne.jsxs)(I.yb, { p: "24px", children: [Object(ne.jsx)(I.nc, { as: "p", fontSize: "14px", children: b("You have no unclaimed v0.1 prizes.") }), Object(ne.jsx)(I.nc, { as: "p", fontSize: "14px", mb: "24px", children: b("Download your v0.1 Prediction history below.") }), Object(ne.jsx)(I.r, { onClick: function() { var e = ["Round", "Result", "Your Position", "Bet Amount", "Transaction", "Claimed Transaction", "Lock Price", "Close Price", "Total Bets", "Total Amount", "Round Failed"].join(","),
                                        t = a.reduce((function(e, t) { return [].concat(Object(Fe.a)(e), [
                                                [t.round.epoch, t.round.position, t.position, t.amount, t.hash, t.claimedHash || "", t.round.lockPrice, t.round.closePrice, t.round.totalBets, t.round.totalAmount, t.round.failed].join(",")
                                            ]) }), []),
                                        n = document.createElement("a"),
                                        c = new Blob(["".concat(e, "\n").concat(t.join("\n"))], { type: "text/csv;charset=utf-8;" });
                                    n.href = URL.createObjectURL(c), n.target = "_blank", n.download = "pancakeswap-prediction-v1-history.csv", document.body.appendChild(n), n.click(), document.body.removeChild(n) }, isLoading: r, endIcon: r ? Object(ne.jsx)(I.i, { spin: !0, width: "24px", color: "white" }) : null, children: b("Download .CSV") })] })] }) },
                Jn = Object(G.e)(I.X)(tn || (tn = Object(q.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n  justify-content: space-between;\n  padding: 16px;\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.colors.cardBorder })),
                ec = function() { var e = Object(E.useState)(!1),
                        t = Object(B.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = Object(ee.b)().t,
                        i = Object(L.c)().account,
                        o = Object(I.Mc)(Object(ne.jsx)(Ze, {}), !1),
                        s = Object(B.a)(o, 1)[0],
                        a = Object(I.Mc)(Object(ne.jsx)(Kn, {})),
                        l = Object(B.a)(a, 1)[0],
                        b = function() { var e = Object(M.a)(X.a.mark((function e() { var t; return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, c(!0), e.next = 4, $n({ user: i.toLowerCase(), claimed: !1 });
                                        case 4:
                                            t = e.sent, t.filter((function(e) { return e.round.position === e.position || !0 === e.round.failed })).length > 0 ? s() : l(), e.next = 12; break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), console.error("Unable to check v1 history", e.t0);
                                        case 12:
                                            return e.prev = 12, c(!1), e.finish(12);
                                        case 15:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 9, 12, 15]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(ne.jsxs)(Jn, { onClick: i ? b : void 0, children: [Object(ne.jsxs)(I.n, { style: { flex: 1 }, children: [Object(ne.jsx)(I.nc, { children: r("Showing history for Prediction v0.2") }), Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsx)(I.nc, { color: "primary", children: r("Check for unclaimed v0.1 winnings") }), Object(ne.jsx)(I.J, { color: "primary", width: "24px" })] })] }), n && Object(ne.jsx)(I.n, { px: "16px", children: Object(ne.jsx)(Mn.a, {}) })] }) },
                tc = function(e) { var t = e.hasBetHistory,
                        n = e.bets,
                        c = Object(ee.b)().t,
                        r = Object(P.b)(),
                        i = Object(L.c)().account,
                        o = Object(D.h)(),
                        s = Object(D.e)(),
                        a = Object(D.m)(); return t ? Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)(ec, {}), Object(_.orderBy)(n, ["round.epoch"], ["desc"]).map((function(e) { return Object(ne.jsx)(_t, { bet: e }, e.round.epoch) })), t && !o && Object(ne.jsx)(I.X, { alignItems: "center", justifyContent: "center", py: "24px", children: Object(ne.jsx)(I.r, { variant: "secondary", scale: "sm", onClick: function() { r(Object(R.f)({ account: i, page: s + 1 })) }, disabled: a, children: c("View More") }) })] }) : Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)(ec, {}), Object(ne.jsxs)(I.n, { p: "24px", children: [Object(ne.jsx)(I.Z, { size: "lg", textAlign: "center", mb: "8px", children: c("No prediction history available") }), Object(ne.jsx)(I.nc, { as: "p", textAlign: "center", children: c("If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.") })] })] }) },
                nc = Object(G.f)(nn || (nn = Object(q.a)(["\n  from {\n    stroke-dasharray: 0, 339.292\n  }\n  to {\n    stroke-dasharray: ", " 339.292;\n  }\n"])), (function(e) { return e.length })),
                cc = Object(G.f)(cn || (cn = Object(q.a)(["\n  from {\n    stroke-dashoffset: 0\n  }\n  to {\n    stroke-dashoffset: ", ";\n  }\n"])), (function(e) { return -e.offset })),
                rc = G.e.svg(rn || (rn = Object(q.a)(["\n  width: 128px;\n  height: 128px;\n  transform: rotate(-90deg);\n"]))),
                ic = G.e.circle(on || (on = Object(q.a)(["\n  fill: none;\n  stroke-width: 16;\n  stroke-dasharray: ", ";\n"])), (function(e) { return "".concat(e.length, " 339.292") })),
                oc = Object(G.e)(ic)(sn || (sn = Object(q.a)(["\n  stroke: #ed4b9e;\n  animation: ", " 1s ease;\n"])), nc),
                sc = Object(G.e)(ic)(an || (an = Object(q.a)(["\n  stroke: #31d0aa;\n  stroke-dashoffset: ", ";\n  animation: ", " 1s ease, ", " 1s ease;\n"])), (function(e) { return -e.offset }), nc, cc),
                ac = G.e.div(ln || (ln = Object(q.a)(["\n  position: relative;\n  width: 128px;\n  height: 128px;\n"]))),
                lc = G.e.div(bn || (bn = Object(q.a)(["\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),
                bc = 339.292,
                jc = function(e) { var t = e.lost,
                        n = e.won,
                        c = Object(ee.b)().t,
                        r = (100 * n / (t + n)).toFixed(2),
                        i = t / (n + t) * bc,
                        o = bc - i; return Object(ne.jsxs)(ac, { children: [Object(ne.jsxs)(rc, { viewBox: "0 0 128 128", children: [Object(ne.jsx)(oc, { r: "54", cx: "64", cy: "64", length: i }), Object(ne.jsx)(sc, { r: "54", cx: "64", cy: "64", length: o, offset: i })] }), Object(ne.jsxs)(lc, { children: [Object(ne.jsx)(I.nc, { small: !0, lineHeight: "1", children: c("Won") }), Object(ne.jsxs)(I.nc, { bold: !0, fontSize: "20px", lineHeight: "1", children: [n, "/", n + t] }), Object(ne.jsxs)(I.nc, { small: !0, lineHeight: "1", color: "textSubtle", children: [r, "%"] })] })] }) },
                uc = { won: "success", lost: "failure", entered: "text" },
                dc = { won: "+", lost: "-", entered: "" },
                xc = function(e) { var t = e.type,
                        n = e.summary,
                        c = e.bnbBusdPrice,
                        r = Object(ee.b)().t,
                        i = uc[t],
                        o = n[t],
                        s = o.rounds,
                        a = o.amount,
                        l = (100 * s / n.entered.rounds).toFixed(2),
                        b = t.charAt(0).toUpperCase() + t.slice(1),
                        j = "won" === t ? n[t].payout : a,
                        u = Object(Ve.d)(c, j); return Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)(I.nc, { mt: "16px", bold: !0, color: "textSubtle", children: r(b) }), Object(ne.jsxs)(I.X, { children: [Object(ne.jsxs)(I.X, { flex: "2", flexDirection: "column", children: [Object(ne.jsxs)(I.nc, { bold: !0, fontSize: "20px", color: i, children: [s, " ", r("Rounds").toLocaleLowerCase()] }), Object(ne.jsx)(I.nc, { fontSize: "12px", color: "textSubtle", children: "entered" === t ? r("Total").toLocaleLowerCase() : "".concat(l, "%") })] }), Object(ne.jsxs)(I.X, { flex: "3", flexDirection: "column", children: [Object(ne.jsx)(I.nc, { bold: !0, fontSize: "20px", color: i, children: "".concat(dc[t]).concat(Pe(j), " BNB") }), Object(ne.jsx)(I.nc, { fontSize: "12px", color: "textSubtle", children: "~$".concat(u.toFixed(2)) })] })] })] }) },
                Oc = G.e.div(jn || (jn = Object(q.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 24px auto;\n  width: 100%;\n"])), (function(e) { return e.theme.colors.backgroundDisabled })),
                hc = { won: { rounds: 0, amount: 0, payout: 0, bestRound: { id: "0", payout: 0, multiplier: 0 } }, lost: { rounds: 0, amount: 0 }, entered: { rounds: 0, amount: 0 } },
                pc = function(e) { var t = e.hasBetHistory,
                        n = e.bets,
                        c = Object(ee.b)().t,
                        r = Object(L.c)().account,
                        i = Object(D.d)(),
                        o = Object(Te.a)(),
                        s = function(e, t) { return e.reduce((function(e, n) { var c = Object(te.l)(n, t); if (c === te.b.WIN) { var r = Re(n, Le.d),
                                        i = e.won.bestRound; if (r > i.payout) { var o = n.round,
                                            s = o.bullAmount,
                                            a = o.bearAmount,
                                            l = o.totalAmount,
                                            b = De(l, n.position === U.a.BULL ? s : a);
                                        i = { id: n.round.epoch.toString(), payout: r, multiplier: b } } return { won: { rounds: e.won.rounds + 1, amount: e.won.amount + n.amount, payout: e.won.payout + r, bestRound: i }, entered: { rounds: e.entered.rounds + 1, amount: e.entered.amount + n.amount }, lost: e.lost } } return c === te.b.LOSE ? { lost: { rounds: e.lost.rounds + 1, amount: e.lost.amount + n.amount }, entered: { rounds: e.entered.rounds + 1, amount: e.entered.amount + n.amount }, won: e.won } : e }), hc) }(n, i),
                        a = s.won.payout - s.lost.amount,
                        l = a > 0,
                        b = s.entered.amount / s.entered.rounds,
                        j = a / s.entered.rounds,
                        u = j > 0,
                        d = 0 !== s.won.bestRound.payout,
                        x = Object(Ve.d)(o, a),
                        O = Object(Ve.d)(o, j),
                        h = Object(Ve.d)(o, s.won.bestRound.multiplier),
                        p = Object(Ve.d)(o, b); return t ? Object(ne.jsxs)(I.n, { p: "16px", children: [Object(ne.jsx)(I.nc, { bold: !0, fontSize: "24px", color: "secondary", pb: "24px", children: c("Your history") }), Object(ne.jsxs)(I.X, { children: [Object(ne.jsx)(jc, { lost: s.lost.rounds, won: s.won.rounds }), Object(ne.jsxs)(I.X, { flexDirection: "column", justifyContent: "center", pl: "24px", children: [Object(ne.jsx)(I.nc, { bold: !0, color: "textSubtle", children: c("Net results") }), Object(ne.jsx)(I.nc, { bold: !0, fontSize: "24px", lineHeight: "1", color: l ? "success" : "failure", children: "".concat(l ? "+" : "").concat(Pe(a), " BNB") }), Object(ne.jsx)(I.nc, { small: !0, color: "textSubtle", children: "~$".concat(x.toFixed(2)) })] })] }), Object(ne.jsxs)(I.n, { pl: "8px", children: [Object(ne.jsx)(I.nc, { mt: "24px", bold: !0, color: "textSubtle", children: c("Average return / round") }), Object(ne.jsx)(I.nc, { bold: !0, color: u ? "success" : "failure", children: "".concat(u ? "+" : "").concat(Pe(j), " BNB") }), Object(ne.jsx)(I.nc, { small: !0, color: "textSubtle", children: "~$".concat(O.toFixed(2)) }), d && Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)(I.nc, { mt: "16px", bold: !0, color: "textSubtle", children: c("Best round: #%roundId%", { roundId: s.won.bestRound.id }) }), Object(ne.jsxs)(I.X, { alignItems: "flex-end", children: [Object(ne.jsx)(I.nc, { bold: !0, color: "success", children: "+".concat(Pe(s.won.bestRound.payout), " BNB") }), Object(ne.jsxs)(I.nc, { ml: "4px", small: !0, color: "textSubtle", children: ["(", s.won.bestRound.multiplier.toFixed(2), "x)"] })] }), Object(ne.jsx)(I.nc, { small: !0, color: "textSubtle", children: "~$".concat(h.toFixed(2)) })] }), Object(ne.jsx)(I.nc, { mt: "16px", bold: !0, color: "textSubtle", children: c("Average position entered / round") }), Object(ne.jsx)(I.nc, { bold: !0, children: "".concat(Pe(b), " BNB") }), Object(ne.jsx)(I.nc, { small: !0, color: "textSubtle", children: "~$".concat(p.toFixed(2)) }), Object(ne.jsx)(Oc, {}), Object(ne.jsx)(xc, { type: "won", summary: s, bnbBusdPrice: o }), Object(ne.jsx)(xc, { type: "lost", summary: s, bnbBusdPrice: o }), Object(ne.jsx)(xc, { type: "entered", summary: s, bnbBusdPrice: o }), Object(ne.jsx)(I.X, { justifyContent: "center", mt: "24px", children: Object(ne.jsx)(I.ib, { href: "".concat(Object(Ke.e)(r, "address"), "#internaltx"), mb: "16px", external: !0, children: Object(ne.jsxs)(I.r, { mt: "8px", width: "100%", children: [c("View Reclaimed & Won"), Object(ne.jsx)(I.Gb, { color: "white", ml: "4px" })] }) }) })] })] }) : Object(ne.jsxs)(I.n, { p: "24px", children: [Object(ne.jsx)(I.Z, { size: "lg", textAlign: "center", mb: "8px", children: c("No prediction history available") }), Object(ne.jsx)(I.nc, { as: "p", textAlign: "center", children: c("If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.") })] }) },
                fc = G.e.div(un || (un = Object(q.a)(["\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])), (function(e) { return e.theme.card.background })),
                mc = G.e.div(dn || (dn = Object(q.a)(["\n  flex: 1;\n  height: 100%;\n  overflow-y: auto;\n  position: relative;\n"]))),
                gc = G.e.div(xn || (xn = Object(q.a)(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  left: 0;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])), (function(e) { return e.theme.card.background })),
                vc = function() { var e = Object(L.c)().account,
                        t = Object(P.b)(),
                        n = Object(D.y)(),
                        c = Object(D.m)(),
                        r = Object(D.j)(),
                        i = Object(D.d)(),
                        o = Object(D.e)(),
                        s = Object(ee.b)().t,
                        a = Object(D.i)(),
                        l = Object(E.useState)(S.ROUNDS),
                        b = Object(B.a)(l, 2),
                        j = b[0],
                        u = b[1];
                    Object(E.useEffect)((function() { e && n && t(Object(R.f)({ account: e })) }), [e, i, n, t]); var d = Object(te.g)(a, r),
                        x = d && d.length > 0,
                        O = null; switch (j) {
                        case S.PNL:
                            O = Object(ne.jsx)(pc, { hasBetHistory: x, bets: d }); break;
                        case S.ROUNDS:
                        default:
                            O = Object(ne.jsx)(tc, { hasBetHistory: x, bets: d }) } return e || (O = Object(ne.jsxs)(I.X, { justifyContent: "center", alignItems: "center", flexDirection: "column", mt: "32px", children: [Object(ne.jsx)(Be.a, {}), Object(ne.jsx)(I.nc, { mt: "8px", children: s("Connect your wallet to view your prediction history") })] })), Object(ne.jsxs)(fc, { children: [Object(ne.jsx)(Xn, { activeTab: j, setActiveTab: u }), Object(ne.jsx)(mc, { children: c && 1 === o ? Object(ne.jsx)(gc, { children: Object(ne.jsx)(I.Xb, { size: 72 }) }) : O })] }) },
                wc = n(1514),
                yc = n(1494),
                kc = n(1495),
                Cc = n(1525),
                Sc = n(1496),
                Bc = (n(1098), n(93)),
                Ec = ["isActive"],
                Lc = ["isActive"],
                Ac = function(e) { var t = e.isActive,
                        n = Object(ze.a)(e, Ec),
                        c = Object(G.g)().colors[t ? "failure" : "tertiary"]; return Object(ne.jsxs)(I.ec, Object(Ue.a)(Object(Ue.a)({ height: "65px", width: "240px", viewBox: "0 0 240 65" }, n), {}, { children: [Object(ne.jsx)("g", { filter: "url(#filter0_i)", children: Object(ne.jsx)("path", { d: "M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z", fill: c }) }), Object(ne.jsx)("defs", { children: Object(ne.jsxs)("filter", { id: "filter0_i", x: "10.0001", y: "1", width: "224", height: "62.9688", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: [Object(ne.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), Object(ne.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), Object(ne.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), Object(ne.jsx)("feOffset", {}), Object(ne.jsx)("feGaussianBlur", { stdDeviation: "1" }), Object(ne.jsx)("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }), Object(ne.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" }), Object(ne.jsx)("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })] }) })] })) },
                Ic = function(e) { var t = e.isActive,
                        n = Object(ze.a)(e, Lc),
                        c = Object(G.g)().colors[t ? "success" : "tertiary"]; return Object(ne.jsxs)(I.ec, Object(Ue.a)(Object(Ue.a)({ height: "65px", width: "240px", viewBox: "0 0 240 65" }, n), {}, { children: [Object(ne.jsx)("g", { filter: "url(#filter0_i)", children: Object(ne.jsx)("path", { d: "M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z", fill: c }) }), Object(ne.jsx)("defs", { children: Object(ne.jsxs)("filter", { id: "filter0_i", x: "10.0001", y: "1.03125", width: "224", height: "62.9688", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: [Object(ne.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), Object(ne.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), Object(ne.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), Object(ne.jsx)("feOffset", {}), Object(ne.jsx)("feGaussianBlur", { stdDeviation: "1" }), Object(ne.jsx)("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }), Object(ne.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" }), Object(ne.jsx)("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })] }) })] })) },
                Pc = function(e) { var t = e.amount,
                        n = e.hasClaimed,
                        c = void 0 !== n && n,
                        r = Object(ee.b)().t,
                        i = Object(I.Oc)(Object(ne.jsx)("div", { style: { whiteSpace: "nowrap" }, children: "".concat(it(t), " BNB") }), { placement: "bottom" }),
                        o = i.targetRef,
                        s = i.tooltipVisible,
                        a = i.tooltip; return Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsxs)("span", { ref: o, children: [Object(ne.jsx)(I.kc, { variant: "secondary", fontWeight: "bold", textTransform: "uppercase", outline: !c, startIcon: c ? Object(ne.jsx)(I.E, { width: "18px" }) : Object(ne.jsx)(I.F, { width: "18px" }), children: r(c ? "Claimed" : "Entered") }), " "] }), " ", s && a] }) },
                Dc = G.e.div(On || (On = Object(q.a)(["\n  height: 65px;\n  margin: 0 auto;\n  width: 240px;\n"]))),
                Nc = G.e.div(hn || (hn = Object(q.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"]))),
                Rc = G.e.div(pn || (pn = Object(q.a)(["\n  position: absolute;\n  z-index: 10;\n"]))),
                Uc = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "textSubtle"; return function(t, n, c) { return n || c ? "textDisabled" : t ? "white" : e } },
                zc = function(e) { var t = e.betAmount,
                        n = e.multiplier,
                        c = e.hasEntered,
                        r = void 0 !== c && c,
                        i = e.hasClaimed,
                        o = void 0 !== i && i,
                        s = e.betPosition,
                        a = void 0 === s ? U.a.BULL : s,
                        l = e.isDisabled,
                        b = void 0 !== l && l,
                        j = e.isActive,
                        u = void 0 !== j && j,
                        d = e.isHouse,
                        x = void 0 !== d && d,
                        O = Object(ee.b)().t,
                        h = Uc("success")(u, b, x),
                        p = Uc("failure")(u, b, x),
                        f = Uc()(u, b, x),
                        m = Object(ne.jsx)(I.n, { children: Object(ne.jsxs)(I.X, { justifyContent: "center", height: "14px", children: [Object(ne.jsx)(I.nc, { fontSize: "14px", color: f, bold: !0, lineHeight: "14x", children: void 0 !== n ? "".concat(n, "x") : "-" }), Object(ne.jsx)(I.nc, { fontSize: "14px", color: f, lineHeight: "14x", ml: "4px", children: O("Payout") })] }) }),
                        g = function(e) { return r ? Object(ne.jsx)(Rc, { style: e, children: Object(ne.jsx)(Pc, { amount: t, hasClaimed: o }) }) : null }; return a === U.a.BEAR ? Object(ne.jsx)(I.n, { mt: "-1px", position: "relative", children: Object(ne.jsxs)(Dc, { children: [Object(ne.jsx)(Ac, { isActive: u }), g({ bottom: 0, right: 0 }), Object(ne.jsxs)(Nc, { children: [!b && m, Object(ne.jsx)(I.nc, { bold: !0, fontSize: "20px", mb: "8px", color: p, textTransform: "uppercase", children: O("Down") })] })] }) }) : Object(ne.jsx)(I.n, { mb: "-1px", position: "relative", children: Object(ne.jsxs)(Dc, { children: [Object(ne.jsx)(Ic, { isActive: u }), g({ top: 0, left: 0 }), Object(ne.jsxs)(Nc, { children: [Object(ne.jsx)(I.nc, { bold: !0, fontSize: "20px", lineHeight: "21px", color: h, textTransform: "uppercase", children: O("Up") }), !b && m] })] }) }) },
                Fc = "37px",
                Tc = function(e, t) { var n = "calc(".concat(Fc, " + 1px)"); switch (t) {
                        case "calculating":
                            return "linear-gradient(transparent ".concat(n, ", ").concat(e.colors.cardBorder, " ").concat(n, "), ").concat(e.colors.gradients.cardHeader);
                        case "canceled":
                            return "linear-gradient(".concat(e.colors.warning, " ").concat(n, ", ").concat(e.colors.cardBorder, " ").concat(n, ")");
                        case "next":
                            return "linear-gradient(".concat(e.colors.secondary, " ").concat(n, ", ").concat(e.colors.cardBorder, " ").concat(n, ")");
                        case "expired":
                        case "soon":
                        default:
                            return e.colors.cardBorder } },
                Hc = function(e, t) { switch (e) {
                        case "expired":
                            return "textDisabled";
                        case "next":
                            return "white";
                        case "live":
                            return "secondary";
                        case "canceled":
                        case "calculating":
                            return "text";
                        default:
                            return t } },
                Xc = G.e.div(fn || (fn = Object(q.a)(["\n  align-items: center;\n  background: ", ";\n  display: flex;\n  justify-content: space-between;\n  height: ", ";\n  padding: ", ";\n"])), (function(e) { return function(e, t) { switch (t) {
                            case "calculating":
                                return e.colors.gradients.cardHeader;
                            case "live":
                                return "transparent";
                            case "canceled":
                                return e.colors.warning;
                            case "next":
                                return e.colors.secondary;
                            case "expired":
                            case "soon":
                            default:
                                return e.colors.cardBorder } }(e.theme, e.status) }), Fc, (function(e) { return "live" === e.status ? "16px" : "8px" })),
                Mc = G.e.div(mn || (mn = Object(q.a)(["\n  justify-self: center;\n"]))),
                Wc = function(e) { var t = e.status,
                        n = e.title,
                        c = e.epoch,
                        r = e.icon,
                        i = Hc(t, "text"),
                        o = "live" === t; return Object(ne.jsxs)(Xc, { status: t, children: [Object(ne.jsxs)(I.X, { alignItems: "center", children: [r, Object(ne.jsx)(I.nc, { color: i, bold: o, textTransform: o ? "uppercase" : "capitalize", lineHeight: "21px", children: n })] }), Object(ne.jsx)(Mc, { children: Object(ne.jsx)(I.nc, { fontSize: o ? "14px" : "12px", color: Hc(t, "textSubtle"), textAlign: "center", children: "#".concat(c) }) })] }) },
                Vc = ["epoch", "isBottom"],
                Yc = Object(G.e)(I.X)(gn || (gn = Object(q.a)(["\n  background-color: ", ";\n  left: 0;\n  position: absolute;\n  width: 100%;\n  z-index: 30;\n\n  ", "\n"])), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.isBottom ? "\n      border-radius: 0 0 16px 16px;\n      bottom: 0;\n    " : "\n      top: 37px; // Card header height\n    " })),
                Qc = function(e) { var t = e.epoch,
                        n = e.isBottom,
                        c = void 0 !== n && n,
                        r = Object(ze.a)(e, Vc),
                        i = Object(ee.b)().t; return Object(D.l)(t) ? Object(ne.jsxs)(Yc, Object(Ue.a)(Object(Ue.a)({ alignItems: "center", p: "16px", isBottom: c }, r), {}, { children: [Object(ne.jsx)(I.wc, { width: "64px", style: { flex: "none" }, mr: "8px" }), Object(ne.jsx)($e, { hasClaimed: !1, width: "100%", children: i("Collect Winnings") })] })) : null },
                Zc = function(e) { var t = e.round,
                        n = Object(ee.b)().t,
                        c = Object(Bc.a)().theme,
                        r = Ht(t.epoch),
                        i = r.isRefundable,
                        o = r.setIsRefundable,
                        s = t.epoch,
                        a = function() { var e = Object(M.a)(X.a.mark((function e() { return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            o(!1);
                                        case 1:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(ne.jsxs)(I.v, { borderBackground: Tc(c, "canceled"), children: [Object(ne.jsx)(Wc, { status: "canceled", icon: Object(ne.jsx)(I.l, { mr: "4px", width: "21px" }), title: n("Canceled"), epoch: t.epoch }), Object(ne.jsxs)(I.w, { p: "16px", children: [Object(ne.jsx)(zc, { isDisabled: !0 }), Object(ne.jsx)(It, { children: Object(ne.jsxs)(I.X, { flexDirection: "column", alignItems: "center", children: [Object(ne.jsx)(I.nc, { bold: !0, color: i ? "text" : "textDisabled", children: n("Round Canceled") }), i && Object(ne.jsx)(Ge, { epoch: s, onSuccess: a, width: "100%", my: "8px" }), Object(ne.jsx)(I.jb, { href: "https://docs.pancakeswap.finance/products/prediction", external: !0, children: n("Learn More") })] }) }), Object(ne.jsx)(zc, { betPosition: U.a.BEAR, isDisabled: !0 })] })] }) },
                _c = function(e) { var t = e.round,
                        n = e.hasEnteredUp,
                        c = e.hasEnteredDown,
                        r = Object(ee.b)().t,
                        i = Object(Bc.a)().theme,
                        o = Object(I.Oc)(r("This round\u2019s closing transaction has been submitted to the blockchain, and is awaiting confirmation."), { placement: "bottom" }),
                        s = o.targetRef,
                        a = o.tooltip,
                        l = o.tooltipVisible; return Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsxs)(I.v, { borderBackground: Tc(i, "calculating"), children: [Object(ne.jsx)(Wc, { status: "calculating", icon: Object(ne.jsx)(I.Ec, { mr: "4px", width: "21px" }), title: r("Calculating"), epoch: t.epoch }), Object(ne.jsxs)(I.w, { p: "16px", children: [Object(ne.jsx)(zc, { isDisabled: !0, hasEntered: n }), Object(ne.jsx)(It, { children: Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "center", flexDirection: "column", children: [Object(ne.jsx)(I.Xb, { size: 96 }), Object(ne.jsxs)(I.X, { mt: "8px", ref: s, children: [Object(ne.jsx)(I.vc, { children: r("Calculating") }), Object(ne.jsx)(I.eb, { ml: "4px" })] })] }) }), Object(ne.jsx)(zc, { betPosition: U.a.BEAR, isDisabled: !0, hasEntered: c })] })] }), l && a] }) },
                $c = Object(G.e)(I.v)(vn || (vn = Object(q.a)(["\n  opacity: 0.7;\n  transition: opacity 300ms;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),
                qc = function(e) { var t = e.round,
                        n = e.betAmount,
                        c = e.hasEnteredUp,
                        r = e.hasEnteredDown,
                        i = e.hasClaimedUp,
                        o = e.hasClaimedDown,
                        s = e.bullMultiplier,
                        a = e.bearMultiplier,
                        l = Object(ee.b)().t,
                        b = Object(Bc.a)().theme,
                        j = t.epoch,
                        u = t.lockPrice,
                        d = t.closePrice,
                        x = jt(u, d),
                        O = Object(D.c)(),
                        h = at(t, O); return h ? Object(ne.jsx)(Zc, { round: t }) : d ? Object(ne.jsxs)(I.n, { position: "relative", children: [Object(ne.jsxs)($c, { borderBackground: Tc(b, "expired"), children: [Object(ne.jsx)(Wc, { status: "expired", icon: Object(ne.jsx)(I.l, { mr: "4px", width: "21px", color: "textDisabled" }), title: l("Expired"), epoch: t.epoch }), Object(ne.jsxs)(I.w, { p: "16px", style: { position: "relative" }, children: [Object(ne.jsx)(zc, { betAmount: n, multiplier: s, isActive: x === U.a.BULL, hasEntered: c, hasClaimed: i, isHouse: x === U.a.HOUSE }), Object(ne.jsx)(zt, { round: t, hasFailed: h }), Object(ne.jsx)(zc, { betAmount: n, multiplier: a, betPosition: U.a.BEAR, isActive: x === U.a.BEAR, hasEntered: r, hasClaimed: o, isHouse: x === U.a.HOUSE })] })] }), Object(ne.jsx)(Qc, { epoch: j, isBottom: r })] }) : Object(ne.jsx)(_c, { round: t, hasEnteredDown: r, hasEnteredUp: c }) },
                Gc = n(399),
                Kc = ["lockTimestamp", "closeTimestamp"],
                Jc = function(e) { var t = e.lockTimestamp,
                        n = e.closeTimestamp,
                        c = Object(ze.a)(e, Kc),
                        r = 1e3 * t,
                        i = 1e3 * n,
                        o = (Date.now() - r) / (i - r) * 100,
                        s = o <= 100 ? o : 100; return Object(ne.jsx)(I.Pb, Object(Ue.a)({ primaryStep: s }, c)) },
                er = function(e) { var t = e.round,
                        n = e.betAmount,
                        c = e.hasEnteredUp,
                        r = e.hasEnteredDown,
                        i = e.bullMultiplier,
                        o = e.bearMultiplier,
                        s = Object(ee.b)().t,
                        a = t.lockPrice,
                        l = t.totalAmount,
                        b = t.lockTimestamp,
                        j = t.closeTimestamp,
                        u = Object(D.n)(),
                        d = Object(D.c)(),
                        x = a && u.gt(a),
                        O = x ? "success" : "failure",
                        h = bt(u, a),
                        p = parseFloat(Object(Ae.b)(u, 3, 8)),
                        f = at(t, d),
                        m = Date.now(),
                        g = Object(Gc.useCountUp)({ start: 0, end: p, duration: 1, decimals: 3 }),
                        v = g.countUp,
                        w = g.update,
                        y = Object(I.Oc)(s("Last price from Chainlink Oracle"), { placement: "bottom" }),
                        k = y.targetRef,
                        C = y.tooltip,
                        S = y.tooltipVisible,
                        B = Object(E.useRef)(w); return Object(E.useEffect)((function() { B.current(p) }), [p, B]), f ? Object(ne.jsx)(Zc, { round: t }) : m > 1e3 * j ? Object(ne.jsx)(_c, { round: t, hasEnteredDown: r, hasEnteredUp: c }) : Object(ne.jsxs)(I.v, { isActive: !0, children: [Object(ne.jsx)(Wc, { status: "live", icon: Object(ne.jsx)(I.Kb, { mr: "4px", width: "24px", color: "secondary" }), title: s("Live"), epoch: t.epoch }), Object(ne.jsx)(Jc, { variant: "flat", scale: "sm", lockTimestamp: b, closeTimestamp: j }), Object(ne.jsxs)(I.w, { p: "16px", children: [Object(ne.jsx)(zc, { betAmount: n, multiplier: i, hasEntered: c, isActive: x }), Object(ne.jsxs)(It, { betPosition: x ? U.a.BULL : U.a.BEAR, children: [Object(ne.jsx)(I.nc, { color: "textSubtle", fontSize: "12px", bold: !0, textTransform: "uppercase", mb: "8px", children: s("Last Price") }), Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", mb: "16px", height: "36px", children: [Object(ne.jsx)("div", { ref: k, children: Object(ne.jsx)(I.vc, { bold: !0, color: O, fontSize: "24px", style: { minHeight: "36px" }, children: u.gt(0) ? "$".concat(v) : Object(ne.jsx)(I.Ub, { height: "36px", width: "94px" }) }) }), Object(ne.jsx)(ht, { betPosition: x ? U.a.BULL : U.a.BEAR, children: rt(h) })] }), a && Object(ne.jsx)(Et, { lockPrice: a }), Object(ne.jsx)(St, { totalAmount: l })] }), Object(ne.jsx)(zc, { betAmount: n, multiplier: o, betPosition: U.a.BEAR, hasEntered: r, isActive: !x })] }), S && C] }) },
                tr = G.e.div(wn || (wn = Object(q.a)(["\n  align-items: center;\n  backface-visibility: hidden;\n  display: flex;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: z-index 600ms;\n  width: 100%;\n\n  & > div {\n    flex: 1;\n  }\n"]))),
                nr = Object(G.e)(tr)(yn || (yn = Object(q.a)(["\n  transform: rotateY(180deg);\n"]))),
                cr = G.e.div(kn || (kn = Object(q.a)(["\n  height: 100%;\n  position: relative;\n  transform: rotateY(", "deg);\n  transform-style: preserve-3d;\n  transition: transform 600ms;\n\n  ", " {\n    z-index: ", ";\n  }\n\n  ", " {\n    z-index: ", ";\n  }\n"])), (function(e) { return e.isFlipped ? 180 : 0 }), tr, (function(e) { return e.isFlipped ? 5 : 10 }), nr, (function(e) { return e.isFlipped ? 10 : 5 })),
                rr = G.e.div(Cn || (Cn = Object(q.a)(["\n  perspective: 1000px;\n  z-index: auto;\n"]))),
                ir = function(e) { var t = e.isFlipped,
                        n = e.height,
                        c = function(e) { if (2 !== e.length) throw new Error("CardFlip: Two children are required"); return e }(e.children),
                        r = Object(B.a)(c, 2),
                        i = r[0],
                        o = r[1]; return Object(ne.jsx)(rr, { style: { height: n }, children: Object(ne.jsxs)(cr, { isFlipped: t, children: [Object(ne.jsx)(tr, { children: i }), Object(ne.jsx)(nr, { children: o })] }) }) },
                or = n(64),
                sr = n(132),
                ar = function() { var e = Object(E.useContext)(be); if (void 0 === e) throw new Error("Swiper not found"); return e },
                lr = Object(G.e)(I.X).attrs({ alignItems: "center" })(Sn || (Sn = Object(q.a)(["\n  flex: 1;\n"]))),
                br = Object(or.parseUnits)("0.01", 18),
                jr = [10, 25, 50, 75],
                ur = function(e) { var t = parseFloat(e); return Number.isNaN(t) ? W.a.BigNumber.from(0) : Object(or.parseUnits)(e) },
                dr = function(e) { var t = e.position,
                        n = e.togglePosition,
                        c = e.epoch,
                        r = e.onBack,
                        i = e.onSuccess,
                        o = Object(E.useState)(""),
                        s = Object(B.a)(o, 2),
                        a = s[0],
                        l = s[1],
                        b = Object(E.useState)(!1),
                        j = Object(B.a)(b, 2),
                        u = j[0],
                        d = j[1],
                        x = Object(E.useState)(null),
                        O = Object(B.a)(x, 2),
                        h = O[0],
                        p = O[1],
                        f = Object(E.useState)(0),
                        m = Object(B.a)(f, 2),
                        g = m[0],
                        v = m[1],
                        w = Object(L.c)().account,
                        y = ar().swiper,
                        k = Object(sr.d)().balance,
                        C = Object(D.t)(),
                        S = Object(ee.b)().t,
                        A = Object(He.a)().toastError,
                        P = Object(Me.a)().callWithGasPrice,
                        N = Object(Xe.r)(),
                        R = Object(E.useMemo)((function() { return k.gt(br) ? k.sub(br) : br }), [k]),
                        z = Object(Ae.a)(k),
                        F = ur(a),
                        T = w && F.gt(0) && null !== h,
                        H = function(e) { if (e > 0) { var t = W.a.FixedNumber.from(R),
                                    n = W.a.FixedNumber.from(100),
                                    c = W.a.FixedNumber.from(e.toFixed(18)).divUnsafe(n),
                                    r = t.mulUnsafe(c);
                                l(Object(Ae.c)(r)) } else l("");
                            v(e) },
                        V = function(e, t, n) { return (e.gt(0) ? e.lte(t) : t.gt(0)) ? e.eq(0) ? { key: "Enter an amount", disabled: !0 } : { key: "Confirm", disabled: e.lt(n) } : { key: "Insufficient BNB balance", disabled: !0 } }(F, R, C),
                        Y = V.key,
                        Q = V.disabled,
                        Z = function() { var e = Object(M.a)(X.a.mark((function e() { var n, r, o; return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t === U.a.BULL ? "betBull" : "betBear", e.prev = 1, e.next = 4, P(N, n, [c], { value: F.toString() });
                                        case 4:
                                            return r = e.sent, d(!0), e.next = 8, r.wait();
                                        case 8:
                                            o = e.sent, i(o.transactionHash), e.next = 15; break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(1), A(S("Error"), S("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                        case 15:
                                            return e.prev = 15, d(!1), e.finish(15);
                                        case 18:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [1, 12, 15, 18]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(E.useEffect)((function() { var e = ur(a);
                        e.gt(0) && e.lte(R) ? e.gt(0) && e.lt(C) ? p({ key: "A minimum amount of %num% %token% is required", data: { num: Object(Ae.a)(C), token: "BNB" } }) : p(null) : p({ key: "Insufficient BNB balance" }) }), [a, R, C, p]), Object(ne.jsxs)(I.v, { onMouseOver: function() { y.keyboard.disable(), y.mousewheel.disable(), y.detachEvents() }, onMouseOut: function() { y.keyboard.enable(), y.mousewheel.enable(), y.attachEvents() }, children: [Object(ne.jsx)(I.y, { p: "16px", children: Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsx)(I.cb, { variant: "text", scale: "sm", onClick: function() { l(""), v(0), r() }, mr: "8px", children: Object(ne.jsx)(I.c, { width: "24px" }) }), Object(ne.jsx)(lr, { children: Object(ne.jsx)(I.Z, { scale: "md", children: S("Set Position") }) }), Object(ne.jsx)(ht, { betPosition: t, onClick: n, children: t === U.a.BULL ? S("Up") : S("Down") })] }) }), Object(ne.jsxs)(I.w, { py: "16px", children: [Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", mb: "8px", children: [Object(ne.jsxs)(I.nc, { textAlign: "right", color: "textSubtle", children: [S("Commit"), ":"] }), Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsx)(I.k, { mr: "4px  " }), Object(ne.jsx)(I.nc, { bold: !0, textTransform: "uppercase", children: "BNB" })] })] }), Object(ne.jsx)(I.j, { value: a, onUserInput: function(e) { var t = ur(e); if (t.eq(0)) v(0);
                                    else { var n = W.a.FixedNumber.from(t),
                                            c = W.a.FixedNumber.from(R),
                                            r = W.a.FixedNumber.from(100),
                                            i = n.divUnsafe(c).mulUnsafe(r).toUnsafeFloat();
                                        v(i > 100 ? 100 : i) }
                                    l(e) }, isWarning: T, inputProps: { disabled: !w || u } }), T && Object(ne.jsx)(I.nc, { color: "failure", fontSize: "12px", mt: "4px", textAlign: "right", children: S(h.key, h.data) }), Object(ne.jsx)(I.nc, { textAlign: "right", mb: "16px", color: "textSubtle", fontSize: "12px", style: { height: "18px" }, children: w && S("Balance: %balance%", { balance: z }) }), Object(ne.jsx)(I.Vb, { name: "balance", min: 0, max: 100, value: g, onValueChanged: H, valueLabel: w ? "".concat(g.toFixed(g > 0 ? 1 : 0), "%") : "", step: .01, disabled: !w || u, mb: "4px", className: !w || u ? "" : "swiper-no-swiping" }), Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "space-between", mb: "16px", children: [jr.map((function(e) { return Object(ne.jsx)(I.r, { scale: "xs", variant: "tertiary", onClick: function() { H(e) }, disabled: !w || u, style: { flex: 1 }, children: "".concat(e, "%") }, e) })), Object(ne.jsx)(I.r, { scale: "xs", variant: "tertiary", onClick: function() { return H(100) }, disabled: !w || u, children: S("Max") })] }), Object(ne.jsx)(I.n, { mb: "8px", children: w ? Object(ne.jsx)(I.r, { width: "100%", disabled: !w || Q, onClick: Z, isLoading: u, endIcon: u ? Object(ne.jsx)(I.i, { color: "currentColor", spin: !0 }) : null, children: S(Y) }) : Object(ne.jsx)(Be.a, { width: "100%" }) }), Object(ne.jsx)(I.nc, { as: "p", fontSize: "12px", lineHeight: 1, color: "textSubtle", children: S("You won\u2019t be able to remove or change your position once you enter it.") })] })] }) },
                xr = function(e) { var t = e.round,
                        n = e.betAmount,
                        c = e.hasEnteredUp,
                        r = e.hasEnteredDown,
                        i = e.bullMultiplier,
                        o = e.bearMultiplier,
                        s = Object(E.useState)({ isSettingPosition: !1, position: U.a.BULL }),
                        a = Object(B.a)(s, 2),
                        l = a[0],
                        b = a[1],
                        j = Object(ee.b)().t,
                        u = Object(Bc.a)().theme,
                        d = Object(He.a)().toastSuccess,
                        x = Object(L.c)().account,
                        O = Object(P.b)(),
                        h = l.isSettingPosition,
                        p = l.position,
                        f = Date.now() > 1e3 * (t.lockTimestamp + Le.f),
                        m = p === U.a.BULL ? j("Up").toUpperCase() : j("Down").toUpperCase(),
                        g = Object(I.Oc)(Object(ne.jsx)("div", { style: { whiteSpace: "nowrap" }, children: "".concat(it(n), " BNB") }), { placement: "top" }),
                        v = g.targetRef,
                        w = g.tooltipVisible,
                        y = g.tooltip,
                        k = !c && !r && null === t.lockPrice,
                        C = function() { return b((function(e) { return Object(Ue.a)(Object(Ue.a)({}, e), {}, { isSettingPosition: !1 }) })) },
                        S = function(e) { b((function(t) { return Object(Ue.a)(Object(Ue.a)({}, t), {}, { isSettingPosition: !0, position: e }) })) },
                        A = function() { var e = Object(M.a)(X.a.mark((function e(n) { return X.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, O(Object(R.d)({ account: x, epochs: [t.epoch] }));
                                        case 2:
                                            C(), d(j("Success!"), Object(ne.jsx)(We.b, { txHash: n, children: j("%position% position entered", { position: m }) }));
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(); return Object(ne.jsxs)(ir, { isFlipped: h, height: "404px", children: [Object(ne.jsxs)(I.v, { borderBackground: Tc(u, "next"), children: [Object(ne.jsx)(Wc, { status: "next", epoch: t.epoch, icon: Object(ne.jsx)(I.Kb, { color: "white", mr: "4px", width: "21px" }), title: j("Next") }), Object(ne.jsxs)(I.w, { p: "16px", children: [Object(ne.jsx)(zc, { betAmount: n, multiplier: i, hasEntered: c }), Object(ne.jsx)(It, { isNext: k, isLive: !k, children: k ? Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)(St, { totalAmount: t.totalAmount, mb: "8px" }), Object(ne.jsx)(I.r, { variant: "success", width: "100%", onClick: function() { return S(U.a.BULL) }, mb: "4px", disabled: !k || f, children: j("Enter UP") }), Object(ne.jsx)(I.r, { variant: "danger", width: "100%", onClick: function() { return S(U.a.BEAR) }, disabled: !k || f, children: j("Enter DOWN") })] }) : Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)("div", { ref: v, children: Object(ne.jsx)(I.r, { disabled: !0, startIcon: p === U.a.BULL ? Object(ne.jsx)(I.h, { color: "currentColor" }) : Object(ne.jsx)(I.d, { color: "currentColor" }), width: "100%", mb: "8px", children: j("%position% Entered", { position: m }) }) }), Object(ne.jsx)(St, { totalAmount: t.totalAmount }), w && y] }) }), Object(ne.jsx)(zc, { betAmount: n, multiplier: o, betPosition: U.a.BEAR, hasEntered: r })] })] }), Object(ne.jsx)(dr, { onBack: C, onSuccess: A, position: p, togglePosition: function() { b((function(e) { return Object(Ue.a)(Object(Ue.a)({}, e), {}, { position: e.position === U.a.BULL ? U.a.BEAR : U.a.BULL }) })) }, epoch: t.epoch })] }) },
                Or = n(276),
                hr = function() { return Math.floor(Date.now() / 1e3) },
                pr = function(e) { var t = Object(E.useState)((function() { return e - hr() })),
                        n = Object(B.a)(t, 2),
                        c = n[0],
                        r = n[1],
                        i = Object(E.useState)(!1),
                        o = Object(B.a)(i, 2),
                        s = o[0],
                        a = o[1],
                        l = Object(Or.a)(),
                        b = Object(E.useCallback)((function() { return a(!0) }), [a]),
                        j = Object(E.useCallback)((function() { return a(!1) }), [a]); return Object(E.useEffect)((function() { var e; return !s && c > 0 && (e = setTimeout((function() { r((function(e) { return e - 1 })) }), 1e3)),
                            function() { clearTimeout(e) } }), [c, s, r]), Object(E.useEffect)((function() { r(e - hr()) }), [e, r]), Object(E.useEffect)((function() { l ? (r(e - hr()), j()) : b() }), [b, j, e, r, l]), { secondsRemaining: c, pause: b, unpause: j } },
                fr = function(e) { var t = e.round,
                        n = Object(D.k)(),
                        c = pr(t.startTimestamp + n + Le.f).secondsRemaining,
                        r = st(c),
                        i = Object(ee.b)().t,
                        o = Object(Bc.a)().theme; return Object(ne.jsxs)(I.v, { borderBackground: Tc(o, "soon"), children: [Object(ne.jsx)(Wc, { status: "soon", icon: Object(ne.jsx)(I.Ec, { mr: "4px", width: "21px" }), title: i("Later"), epoch: t.epoch }), Object(ne.jsxs)(I.w, { p: "16px", children: [Object(ne.jsx)(zc, { isDisabled: !0 }), Object(ne.jsx)(It, { children: Object(ne.jsxs)(I.nc, { textAlign: "center", children: [Object(ne.jsx)(I.nc, { bold: !0, children: i("Entry starts") }), Object(ne.jsx)(I.nc, { fontSize: "24px", bold: !0, children: "~".concat(r) })] }) }), Object(ne.jsx)(zc, { betPosition: U.a.BEAR, isDisabled: !0 })] })] }) },
                mr = function(e) { var t = e.round,
                        n = t.epoch,
                        c = t.lockPrice,
                        r = t.closePrice,
                        i = t.totalAmount,
                        o = t.bullAmount,
                        s = t.bearAmount,
                        a = Object(D.d)(),
                        l = Object(L.c)().account,
                        b = Object(D.b)(l, n),
                        j = !!b && b.amount.gt(0),
                        u = j && b.position === U.a.BULL,
                        d = j && b.position === U.a.BEAR,
                        x = j && b.claimed && b.position === U.a.BULL,
                        O = j && b.claimed && b.position === U.a.BEAR,
                        h = lt(i, o),
                        p = lt(i, s),
                        f = h.toUnsafeFloat().toFixed(h.isZero() ? 0 : 2),
                        m = p.toUnsafeFloat().toFixed(p.isZero() ? 0 : 2); return n === a && null === c ? Object(ne.jsx)(xr, { round: t, hasEnteredDown: d, hasEnteredUp: u, betAmount: null === b || void 0 === b ? void 0 : b.amount, bullMultiplier: f, bearMultiplier: m }) : null === r && n === a - 1 ? Object(ne.jsx)(er, { betAmount: null === b || void 0 === b ? void 0 : b.amount, hasEnteredDown: d, hasEnteredUp: u, round: t, bullMultiplier: f, bearMultiplier: m }) : n > a ? Object(ne.jsx)(fr, { round: t }) : Object(ne.jsx)(qc, { round: t, hasEnteredDown: d, hasEnteredUp: u, hasClaimedDown: O, hasClaimedUp: x, betAmount: null === b || void 0 === b ? void 0 : b.amount, bullMultiplier: f, bearMultiplier: m }) },
                gr = n(86),
                vr = Object(G.e)(I.n)(Bn || (Bn = Object(q.a)(["\n  margin-top: -24px;\n  position: absolute;\n  top: 50%;\n  z-index: 30;\n\n  & > svg {\n    height: 48px;\n    width: 48px;\n  }\n\n  ", " {\n    margin-top: -32px;\n\n    & > svg {\n      height: 64px;\n      width: 64px;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                wr = Object(G.e)(I.nc)(En || (En = Object(q.a)(["\n  font-size: 16px;\n  line-height: 21px;\n\n  ", " {\n    font-size: 20px;\n    line-height: 22px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                yr = Object(G.e)(I.nc)(Ln || (Ln = Object(q.a)(["\n  font-size: 9px;\n  line-height: 21px;\n\n  ", " {\n    font-size: 16px;\n  }\n\n  ", " {\n    font-size: 20px;\n    line-height: 22px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg })),
                kr = Object(G.e)(I.nc)(An || (An = Object(q.a)(["\n  height: 18px;\n  justify-self: start;\n  width: 70px;\n\n  ", " {\n    text-align: center;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                Cr = Object(G.e)(I.nc)(In || (In = Object(q.a)(["\n  ", " {\n    text-align: center;\n    width: 32px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                Sr = Object(G.e)(I.X)(Pn || (Pn = Object(q.a)(["\n  background-color: ", ";\n  box-shadow: ", ";\n  align-items: ", ";\n  border-radius: ", ";\n  flex-direction: column;\n  overflow: initial;\n  padding: ", ";\n\n  ", " {\n    align-items: center;\n    border-radius: ", ";\n    flex-direction: row;\n    padding: ", ";\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.shadows.level1 }), (function(e) { return "right" === e.dir ? "flex-end" : "flex-start" }), (function(e) { return "right" === e.dir ? "8px 8px 8px 24px" : "8px 8px 24px 8px" }), (function(e) { return "right" === e.dir ? "0 28px 0 8px" : "0 8px 0 24px" }), (function(e) { return e.theme.mediaQueries.lg }), (function(e) { return e.theme.radii.card }), (function(e) { return "right" === e.dir ? "8px 40px 8px 8px" : "8px 8px 8px 40px" })),
                Br = function() { var e = Object(D.n)(),
                        t = parseFloat(Object(Ae.b)(e, 3, 8)),
                        n = Object(Gc.useCountUp)({ start: 0, end: t, duration: 1, decimals: 3 }),
                        c = n.countUp,
                        r = n.update,
                        i = Object(E.useRef)(r); return Object(E.useEffect)((function() { i.current(t) }), [t, i]), Object(ne.jsxs)(I.n, { pl: "24px", position: "relative", display: "inline-block", children: [Object(ne.jsx)(vr, { left: 0, children: Object(ne.jsx)(I.m, {}) }), Object(ne.jsxs)(Sr, { dir: "left", children: [Object(ne.jsx)(wr, { bold: !0, textTransform: "uppercase", children: "BNBUSDT" }), Object(ne.jsx)(kr, { fontSize: "12px", children: "$".concat(c) })] })] }) },
                Er = function(e) { var t = e.interval,
                        n = e.unit,
                        c = Object(D.f)(),
                        r = pr(c + Le.f).secondsRemaining,
                        i = st(r),
                        o = Object(ee.b)().t; return Object(ne.jsxs)(I.n, { pr: "24px", position: "relative", children: [Object(ne.jsxs)(Sr, { dir: "right", children: [0 !== r ? Object(ne.jsx)(wr, { bold: !0, color: "secondary", children: i }) : Object(ne.jsx)(yr, { bold: !0, color: "secondary", children: o("Closing") }), Object(ne.jsx)(Cr, { fontSize: "12px", children: "".concat(t).concat(o(n)) })] }), Object(ne.jsx)(vr, { right: 0, children: Object(ne.jsx)(I.Lb, {}) })] }) },
                Lr = Object(G.e)(I.X)(Dn || (Dn = Object(q.a)(["\n  align-items: center;\n  display: none;\n  justify-content: space-between;\n  overflow: initial;\n  position: relative;\n  width: 128px;\n\n  box-shadow: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n\n  ", " {\n    display: flex;\n  }\n"])), (function(e) { return e.theme.shadows.level1 }), (function(e) { return e.theme.radii.default }), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.lg })),
                Ar = G.e.div(Nn || (Nn = Object(q.a)(["\n  cursor: pointer;\n  left: 50%;\n  margin-left: -32px;\n  position: absolute;\n"]))),
                Ir = function() { var e = ar().swiper,
                        t = Object(D.d)(),
                        n = Object(D.w)(); return Object(ne.jsxs)(Lr, { children: [Object(ne.jsx)(I.cb, { variant: "text", scale: "sm", onClick: function() { e.slidePrev() }, children: Object(ne.jsx)(I.c, { color: "primary", width: "24px" }) }), Object(ne.jsx)(Ar, { onClick: function() { var c = n.findIndex((function(e) { return e.epoch === t }));
                                e.slideTo(c - 1), e.update() }, children: Object(ne.jsx)(I.p, { width: "64px" }) }), Object(ne.jsx)(I.cb, { variant: "text", scale: "sm", onClick: function() { e.slideNext() }, children: Object(ne.jsx)(I.f, { color: "primary", width: "24px" }) })] }) },
                Pr = function() { var e = Object(D.m)(),
                        t = Object(P.b)(),
                        n = Object(L.c)().account; return Object(ne.jsx)(I.cb, { id: "prediction-history-button", variant: "subtle", onClick: function() { t(Object(R.n)(!0)) }, isLoading: e, disabled: !n, children: e ? Object(ne.jsx)(I.i, { spin: !0, color: "white" }) : Object(ne.jsx)(I.bb, { width: "24px", color: "white" }) }) },
                Dr = G.e.div(Rn || (Rn = Object(q.a)(["\n  flex: none;\n  width: auto;\n\n  ", " {\n    width: 270px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                Nr = G.e.div(Un || (Un = Object(q.a)(["\n  order: 1;\n  margin: 0 2px 0 8px;\n\n  ", " {\n    order: 2;\n    margin: 0 0 0 8px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Rr = G.e.div(zn || (zn = Object(q.a)(["\n  order: 3;\n  width: 100px;\n\n  ", " {\n    order: 1;\n    width: auto;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Ur = G.e.div(Fn || (Fn = Object(q.a)(["\n  display: block;\n\n  order: 2;\n  margin: 0 8px 0 0;\n\n  ", " {\n    order: 3;\n    margin: 0 0 0 8px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                zr = G.e.div(Tn || (Tn = Object(q.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n    margin-left: 8px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                Fr = function() { return Object(ne.jsxs)(lr, { alignItems: "center", p: "16px", children: [Object(ne.jsx)(Dr, { children: Object(ne.jsx)(Br, {}) }), Object(ne.jsx)(lr, { justifyContent: "center", children: Object(ne.jsx)(Ir, {}) }), Object(ne.jsx)(Dr, { children: Object(ne.jsxs)(I.X, { alignItems: "center", justifyContent: "flex-end", children: [Object(ne.jsx)(Rr, { children: Object(ne.jsx)(Er, { interval: "5", unit: "m" }) }), Object(ne.jsx)(Nr, { children: Object(ne.jsx)(I.r, { variant: "subtle", as: "a", href: "https://docs.pancakeswap.finance/products/prediction", target: "_blank", rel: "noreferrer noopener", width: "48px", children: Object(ne.jsx)(I.ab, { width: "24px", color: "white" }) }) }), Object(ne.jsx)(Ur, { children: Object(ne.jsx)(I.r, { as: gr.a, variant: "subtle", to: "/prediction/leaderboard", width: "48px", children: Object(ne.jsx)(I.Nb, { color: "white" }) }) }), Object(ne.jsx)(zr, { style: { order: 4 }, children: Object(ne.jsx)(Pr, {}) })] }) })] }) },
                Tr = n(256),
                Hr = function() { var e = Object(D.d)(),
                        t = Object(D.w)(),
                        n = Object(L.c)().account,
                        c = Object(Tr.a)(e),
                        r = ar().swiper,
                        i = Object(P.b)();
                    Object(E.useEffect)((function() { if (r && void 0 !== e && void 0 !== c && e !== c) { var n = t.findIndex((function(t) { return t.epoch === e }));
                            r.slideTo(n - 1), r.update() } }), [c, e, t, r, n, i]) },
                Xr = function(e, t) { var n = ar().swiper,
                        c = Object(Tr.a)(t);
                    Object(E.useEffect)((function() { n && t !== c && n.activeIndex !== e && n.slideTo(e, .1) }), [n, c, t, e]) };
            wc.a.use([yc.a, kc.a]); var Mr, Wr, Vr, Yr, Qr, Zr, _r, $r, qr, Gr, Kr, Jr, ei, ti, ni, ci = G.e.div(Hn || (Hn = Object(q.a)(["\n  .swiper-wrapper {\n    align-items: center;\n    display: flex;\n  }\n\n  .swiper-slide {\n    width: 320px;\n  }\n"]))),
                ri = function(e) { var t = e.view,
                        n = ar().setSwiper,
                        c = Object(D.w)(),
                        r = Object(D.d)(),
                        i = r > 0 ? r - 1 : r,
                        o = c.find((function(e) { return e.epoch === i })),
                        s = c.indexOf(o); return Hr(), Xr(s, t), Object(ne.jsxs)(I.n, { overflow: "hidden", children: [Object(ne.jsx)(Fr, {}), Object(ne.jsx)(ci, { children: Object(ne.jsx)(Cc.a, { initialSlide: s, onSwiper: n, spaceBetween: 16, slidesPerView: "auto", freeMode: !0, freeModeSticky: !0, centeredSlides: !0, freeModeMomentumRatio: .25, freeModeMomentumVelocityRatio: .5, mousewheel: !0, keyboard: !0, resizeObserver: !0, children: c.map((function(e) { return Object(ne.jsx)(Sc.a, { children: Object(ne.jsx)(mr, { round: e }) }, e.epoch) })) }) })] }) },
                ii = Object(G.e)(I.r)(Mr || (Mr = Object(q.a)(["\n  background-color: ", ";\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  bottom: 12px;\n  color: ", ";\n  display: none;\n  left: 32px;\n  position: absolute;\n  z-index: 50;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    background-color: ", ";\n    opacity: 1;\n  }\n\n  ", " {\n    display: inline-flex;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.lg })),
                oi = G.e.div(Wr || (Wr = Object(q.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 12px 0;\n  flex: 1;\n  overflow: hidden;\n"]))),
                si = G.e.div(Vr || (Vr = Object(q.a)(["\n  overflow: hidden;\n  position: relative;\n"]))),
                ai = G.e.div(Yr || (Yr = Object(q.a)(["\n  flex: none;\n  overflow: hidden;\n  transition: width 200ms ease-in-out;\n  width: ", ";\n"])), (function(e) { return e.isHistoryPaneOpen ? "384px" : 0 })),
                li = G.e.div(Qr || (Qr = Object(q.a)(["\n  display: none;\n\n  ", " {\n    display: flex;\n    height: 100%;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                bi = G.e.div(Zr || (Zr = Object(q.a)(["\n  align-items: center;\n  display: flex;\n  max-width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  & > div {\n    flex: 1;\n    overflow: hidden;\n  }\n"]))),
                ji = G.e.div(_r || (_r = Object(q.a)(["\n  background: ", ";\n  cursor: row-resize;\n  height: 12px;\n  position: relative;\n\n  &:before {\n    background-color: ", ";\n    border-radius: 8px;\n    content: '';\n    height: 4px;\n    left: 50%;\n    margin-left: -32px;\n    position: absolute;\n    top: 4px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.colors.dropdown }), (function(e) { return e.theme.colors.textSubtle })),
                ui = function() { var e = Object(E.useRef)(),
                        t = Object(E.useRef)(),
                        n = Object(E.useRef)(),
                        c = Object(D.y)(),
                        r = Object(D.x)(),
                        i = Object(P.b)(),
                        o = Object(ee.b)().t,
                        s = Object(D.v)(); return Object(E.useEffect)((function() { var e = xe()((function() { var e = t.current.getBoundingClientRect().height;
                                i(Object(R.l)(e > 100)) }), 50),
                            c = Object(ue.a)({ dragInterval: 1, snapOffset: 100, onDrag: e, rowGutters: [{ track: 1, element: n.current }] }); return function() { c.destroy() } }), [n, t, i]), Object(ne.jsxs)(ne.Fragment, { children: [!r && Object(ne.jsx)(ii, { variant: "tertiary", scale: "sm", startIcon: r ? Object(ne.jsx)(I.d, {}) : Object(ne.jsx)(I.C, {}), onClick: function() { var t = !r;
                                t && (e.current.style.transition = "grid-template-rows 150ms", e.current.style.gridTemplateRows = "1.2fr 12px .8fr", he()((function() { e.current.style.transition = "" }), 150)), i(Object(R.l)(t)) }, children: o(r ? "Close" : "Charts") }), Object(ne.jsxs)(li, { children: [Object(ne.jsxs)(oi, { ref: e, children: [Object(ne.jsxs)(bi, { children: [s === U.d.ERROR && Object(ne.jsx)(Ce, {}), s === U.d.PAUSED && Object(ne.jsx)(Se, {}), s === U.d.LIVE && Object(ne.jsx)(ri, {})] }), Object(ne.jsx)(ji, { ref: n }), Object(ne.jsx)(si, { ref: t, children: Object(ne.jsx)(ge, {}) })] }), Object(ne.jsx)(ai, { isHistoryPaneOpen: c, children: Object(ne.jsx)(vc, {}) })] })] }) },
                di = G.e.div($r || ($r = Object(q.a)(["\n  flex: none;\n"]))),
                xi = G.e.div(qr || (qr = Object(q.a)(["\n  flex: 1;\n  text-align: center;\n"]))),
                Oi = G.e.div(Gr || (Gr = Object(q.a)(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  flex: none;\n  height: 64px;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.lg })),
                hi = function() { var e = ar().swiper,
                        t = Object(D.y)(),
                        n = Object(D.x)(),
                        c = Object(D.v)(),
                        r = function(e, t) { return e ? 2 : t ? 1 : 0 }(t, n),
                        i = Object(P.b)(),
                        o = Object(L.c)().account; return Object(ne.jsxs)(Oi, { children: [Object(ne.jsx)(di, { children: Object(ne.jsx)(I.cb, { variant: "text", onClick: function() { return e.slidePrev() }, disabled: c !== U.d.LIVE, children: Object(ne.jsx)(I.c, { width: "24px", color: "primary" }) }) }), Object(ne.jsx)(xi, { children: Object(ne.jsxs)(I.s, { activeIndex: r, scale: "sm", variant: "subtle", onItemClick: function(e) { switch (e) {
                                        case 2:
                                            i(Object(R.n)(!0)); break;
                                        case 1:
                                            i(Object(R.l)(!0)), i(Object(R.n)(!1)); break;
                                        case 0:
                                        default:
                                            i(Object(R.n)(!1)), i(Object(R.l)(!1)) } }, children: [Object(ne.jsx)(I.t, { children: Object(ne.jsx)(I.B, { color: "currentColor" }) }), Object(ne.jsx)(I.t, { children: Object(ne.jsx)(I.C, { color: "currentColor" }) }), Object(ne.jsx)(I.t, { disabled: !o, children: Object(ne.jsx)(I.bb, { color: "currentColor" }) })] }) }), Object(ne.jsx)(di, { children: Object(ne.jsx)(I.cb, { variant: "text", onClick: function() { return e.slideNext() }, disabled: c !== U.d.LIVE, children: Object(ne.jsx)(I.f, { width: "24px", color: "primary" }) }) })] }) },
                pi = G.e.div(Kr || (Kr = Object(q.a)(["\n  flex: none;\n"]))),
                fi = G.e.div(Jr || (Jr = Object(q.a)(["\n  flex: 1;\n  height: 100%;\n"]))),
                mi = function() { return Object(ne.jsxs)(I.X, { flexDirection: "column", height: "100%", children: [Object(ne.jsx)(pi, { children: Object(ne.jsx)(Fr, {}) }), Object(ne.jsx)(fi, { children: Object(ne.jsx)(ge, {}) })] }) };! function(e) { e.POSITIONS = "positions", e.HISTORY = "history", e.CHART = "chart" }(ei || (ei = {})); var gi, vi, wi = G.e.div(ti || (ti = Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                yi = G.e.div(ni || (ni = Object(q.a)(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  visibility: ", ";\n"])), (function(e) { return e.isVisible ? "visible" : "hidden" })),
                ki = function() { var e = function(e, t) { return e ? ei.HISTORY : t ? ei.CHART : ei.POSITIONS }(Object(D.y)(), Object(D.x)()),
                        t = Object(D.v)(); return Object(ne.jsxs)(wi, { children: [Object(ne.jsxs)(I.n, { height: "100%", overflow: "hidden", position: "relative", children: [Object(ne.jsx)(yi, { isVisible: e === ei.POSITIONS, children: Object(ne.jsxs)(I.X, { alignItems: "center", height: "100%", children: [t === U.d.ERROR && Object(ne.jsx)(Ce, {}), t === U.d.PAUSED && Object(ne.jsx)(Se, {}), t === U.d.LIVE && Object(ne.jsx)(ri, { view: e })] }) }), Object(ne.jsx)(yi, { isVisible: e === ei.CHART, children: Object(ne.jsx)(mi, {}) }), Object(ne.jsx)(yi, { isVisible: e === ei.HISTORY, children: Object(ne.jsx)(vc, {}) })] }), Object(ne.jsx)(hi, {})] }) },
                Ci = Object(G.e)(I.Bb)(gi || (gi = Object(q.a)(["\n  background: ", ";\n  padding-bottom: 24px;\n  padding-top: 24px;\n"])), (function(e) { return e.theme.colors.gradients.bubblegum })),
                Si = function(e) { var t = e.onSuccess,
                        n = e.onDismiss,
                        c = Object(E.useState)(!1),
                        r = Object(B.a)(c, 2),
                        i = r[0],
                        o = r[1],
                        s = Object(E.useState)(!1),
                        a = Object(B.a)(s, 2),
                        l = a[0],
                        b = a[1],
                        j = Object(ee.b)().t; return Object(ne.jsxs)(I.Ab, { title: j("Welcome!"), minWidth: "320px", id: "predictions-risk-disclaimer", children: [Object(ne.jsx)(Ci, { children: Object(ne.jsx)(I.Db, { children: Object(ne.jsx)(I.Z, { scale: "lg", children: j("Welcome!") }) }) }), Object(ne.jsxs)(I.yb, { p: "24px", maxWidth: "400px", children: [Object(ne.jsxs)(I.n, { maxHeight: "300px", overflowY: "auto", children: [Object(ne.jsx)(I.Z, { as: "h3", mb: "24px", children: j("This Product is in beta.") }), Object(ne.jsx)(I.nc, { as: "p", color: "textSubtle", mb: "24px", children: j("Once you enter a position, you cannot cancel or adjust it.") }), Object(ne.jsx)("label", { htmlFor: "responsibility-checkbox", style: { display: "block", cursor: "pointer", marginBottom: "24px" }, children: Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsx)("div", { style: { flex: "none" }, children: Object(ne.jsx)(I.D, { id: "responsibility-checkbox", scale: "sm", checked: i, onChange: function() { o(!i) } }) }), Object(ne.jsx)(I.nc, { ml: "8px", children: j("I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own responsibility.") })] }) }), Object(ne.jsx)("label", { htmlFor: "beta-checkbox", style: { display: "block", cursor: "pointer", marginBottom: "24px" }, children: Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsx)("div", { style: { flex: "none" }, children: Object(ne.jsx)(I.D, { id: "beta-checkbox", scale: "sm", checked: l, onChange: function() { b(!l) } }) }), Object(ne.jsx)(I.nc, { ml: "8px", children: j("I understand that this product is still in beta. I am participating at my own risk") })] }) })] }), Object(ne.jsx)(I.r, { id: "prediction-disclaimer-continue", width: "100%", onClick: function() { t(), n() }, disabled: !i || !l, children: j("Continue") })] })] }) },
                Bi = G.e.ul(vi || (vi = Object(q.a)(["\n  color: ", ";\n  list-style-position: outside;\n  margin-left: 16px;\n\n  & > li {\n    font-size: 14px;\n    line-height: 1.5;\n  }\n"])), (function(e) { return e.theme.colors.textSubtle })),
                Ei = function(e) { var t = e.onDismiss,
                        n = Object(z.r)(),
                        c = Object(B.a)(n, 2),
                        r = c[0],
                        i = c[1],
                        o = Object(ee.b)().t; return Object(ne.jsx)(I.Ab, { minWidth: "320px", children: Object(ne.jsxs)(I.yb, { p: "24px", maxWidth: "400px", children: [Object(ne.jsx)(I.X, { justifyContent: "center", mb: "32px", children: Object(ne.jsx)(I.db, { src: "/images/chartwarning.svg", width: 190, height: 118 }) }), Object(ne.jsxs)(I.Z, { as: "h3", size: "sm", children: [o("Warning"), ":"] }), Object(ne.jsxs)(I.Z, { as: "h4", size: "sm", mb: "24px", children: [o("Prices shown on cards and charts are different"), ":"] }), Object(ne.jsxs)(I.nc, { as: "p", fontSize: "14px", color: "textSubtle", children: [o("The price you see come from difference places"), ":"] }), Object(ne.jsxs)(Bi, { children: [Object(ne.jsx)("li", { children: o("Prices on cards come from Chainlink\u2019s verifiable price oracle.") }), Object(ne.jsx)("li", { children: o("Prices on charts come from Binance.com. Chart's are provided for your reference only.") })] }), Object(ne.jsx)(I.nc, { as: "p", mb: "16px", fontSize: "14px", color: "textSubtle", children: o("Only the price from Chainlink (shown on the cards) determines the round's result.") }), Object(ne.jsx)(I.jb, { href: "https://docs.pancakeswap.finance/products/prediction/prediction-faq#what-are-you-using-for-your-price-feed", external: !0, mb: "24px", children: o("Learn More") }), Object(ne.jsx)(I.n, { children: Object(ne.jsx)(I.r, { width: "100%", onClick: function() { t() }, mb: "16px", children: o("I understand") }) }), Object(ne.jsx)("label", { htmlFor: "checkbox", style: { display: "block", cursor: "pointer", marginBottom: "24px" }, children: Object(ne.jsxs)(I.X, { alignItems: "center", children: [Object(ne.jsx)("div", { style: { flex: "none" }, children: Object(ne.jsx)(I.D, { id: "checkbox", scale: "sm", checked: !r, onChange: function() { return i(!r) } }) }), Object(ne.jsx)(I.nc, { ml: "8px", children: o("Don't show this again") })] }) })] }) }) };
            t.default = function() { var e = Object(I.Lc)().isDesktop,
                    t = Object(z.q)(),
                    n = Object(B.a)(t, 2),
                    c = n[0],
                    r = n[1],
                    i = Object(z.r)(),
                    o = Object(B.a)(i, 1)[0],
                    s = Object(L.c)().account,
                    a = Object(D.v)(),
                    l = Object(D.x)(),
                    b = Object(P.b)(),
                    j = Object(N.b)(),
                    u = Object(I.Mc)(Object(ne.jsx)(Si, { onSuccess: function() { return r(!0) } }), !1),
                    d = Object(B.a)(u, 1)[0],
                    x = Object(I.Mc)(Object(ne.jsx)(Ei, {}), !1),
                    O = Object(B.a)(x, 1)[0],
                    h = Object(E.useRef)(d),
                    p = Object(E.useRef)(O); return Object(E.useEffect)((function() { c || h.current() }), [c, h]), Object(E.useEffect)((function() { l && o && p.current() }), [p, l, o]), Object(E.useEffect)((function() { j > 0 && b(Object(R.j)(s)) }), [j, b, s]), $(), Z(), a === U.d.INITIAL ? Object(ne.jsx)(F.a, {}) : Object(ne.jsxs)(ne.Fragment, { children: [Object(ne.jsx)(A.a, { children: Object(ne.jsx)("script", { src: "https://s3.tradingview.com/tv.js", type: "text/javascript", id: "tradingViewWidget" }) }), Object(ne.jsx)(T.a, {}), Object(ne.jsx)(je, { children: Object(ne.jsxs)(K, { children: [e ? Object(ne.jsx)(ui, {}) : Object(ne.jsx)(ki, {}), Object(ne.jsx)(le, {})] }) })] }) } }, 786: function(e, t, n) { "use strict";
            n.d(t, "w", (function() { return x })), n.d(t, "b", (function() { return O })), n.d(t, "l", (function() { return h })), n.d(t, "g", (function() { return p })), n.d(t, "y", (function() { return f })), n.d(t, "x", (function() { return m })), n.d(t, "d", (function() { return g })), n.d(t, "k", (function() { return v })), n.d(t, "v", (function() { return w })), n.d(t, "j", (function() { return y })), n.d(t, "h", (function() { return k })), n.d(t, "e", (function() { return C })), n.d(t, "t", (function() { return S })), n.d(t, "c", (function() { return B })), n.d(t, "m", (function() { return E })), n.d(t, "i", (function() { return L })), n.d(t, "n", (function() { return A })), n.d(t, "f", (function() { return I })), n.d(t, "q", (function() { return P })), n.d(t, "r", (function() { return D })), n.d(t, "o", (function() { return N })), n.d(t, "s", (function() { return R })), n.d(t, "p", (function() { return U })), n.d(t, "a", (function() { return z })), n.d(t, "u", (function() { return F })); var c = n(19),
                r = n(6),
                i = n(1),
                o = n(23),
                s = n(56),
                a = n(123),
                l = n(38),
                b = n(62),
                j = n(67),
                u = n(370),
                d = function() { var e = Object(o.c)((function(e) { return e.predictions.rounds })); return Object.keys(e).reduce((function(t, n) { return Object(r.a)(Object(r.a)({}, t), {}, Object(c.a)({}, n, Object(j.q)(e[n]))) }), {}) },
                x = function() { var e = d(); return Object(a.orderBy)(Object.values(e), ["epoch"], ["asc"]) },
                O = function(e, t) { var n = Object(o.c)((function(e) { return e.predictions.ledgers })); return n[e] && n[e][t] ? Object(j.q)(n[e][t]) : null },
                h = function(e) { return Object(o.c)((function(e) { return e.predictions.claimableStatuses }))[e] || !1 },
                p = function() { return Object(o.c)((function(e) { var t = Object(a.minBy)(Object.values(e.predictions.rounds), "epoch"); return null === t || void 0 === t ? void 0 : t.epoch })) },
                f = function() { return Object(o.c)((function(e) { return e.predictions.isHistoryPaneOpen })) },
                m = function() { return Object(o.c)((function(e) { return e.predictions.isChartPaneOpen })) },
                g = function() { return Object(o.c)((function(e) { return e.predictions.currentEpoch })) },
                v = function() { return Object(o.c)((function(e) { return e.predictions.intervalSeconds })) },
                w = function() { return Object(o.c)((function(e) { return e.predictions.status })) },
                y = function() { return Object(o.c)((function(e) { return e.predictions.historyFilter })) },
                k = function() { return Object(o.c)((function(e) { return e.predictions.hasHistoryLoaded })) },
                C = function() { return Object(o.c)((function(e) { return e.predictions.currentHistoryPage })) },
                S = function() { var e = Object(o.c)((function(e) { return e.predictions.minBetAmount })); return Object(i.useMemo)((function() { return s.a.BigNumber.from(e) }), [e]) },
                B = function() { return Object(o.c)((function(e) { return e.predictions.bufferSeconds })) },
                E = function() { return Object(o.c)((function(e) { return e.predictions.isFetchingHistory })) },
                L = function() { return Object(o.c)((function(e) { return e.predictions.history })) },
                A = function() { var e = Object(o.c)((function(e) { return e.predictions.lastOraclePrice })); return Object(i.useMemo)((function() { return s.a.BigNumber.from(e) }), [e]) },
                I = function() { var e = function() { var e = g(); return d()[e] }(),
                        t = v(); return e.lockTimestamp ? e.lockTimestamp : e.startTimestamp + t },
                P = function() { return Object(o.c)((function(e) { return e.predictions.leaderboard.loadingState })) },
                D = function() { return Object(o.c)((function(e) { return e.predictions.leaderboard.results })) },
                N = function() { return Object(o.c)((function(e) { return e.predictions.leaderboard.filters })) },
                R = function() { return Object(o.c)((function(e) { return e.predictions.leaderboard.skip })) },
                U = function() { return Object(o.c)((function(e) { return e.predictions.leaderboard.hasMoreResults })) },
                z = function(e) { return Object(o.c)((function(t) { return t.predictions.leaderboard.addressResults[e] })) },
                F = function(e) { var t = z(e),
                        n = Object(b.b)(); return Object(i.useEffect)((function() { var c = Object(l.h)(e);!t && null !== t && c && n(Object(u.b)(e)) }), [n, e, t]), t } } }
]);
//# sourceMappingURL=26.b26dbb80.chunk.js.map