(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [11], { 1225: function(e, t, n) { var c = n(502),
                r = n(507),
                a = n(254),
                o = n(102),
                s = n(190),
                i = n(317),
                l = n(319),
                u = n(318),
                b = Object.prototype.hasOwnProperty;
            e.exports = function(e) { if (null == e) return !0; if (s(e) && (o(e) || "string" == typeof e || "function" == typeof e.splice || i(e) || u(e) || a(e))) return !e.length; var t = r(e); if ("[object Map]" == t || "[object Set]" == t) return !e.size; if (l(e)) return !c(e).length; for (var n in e)
                    if (b.call(e, n)) return !1;
                return !0 } }, 1528: function(e, t, n) { "use strict";
            n.r(t); var c, r, a, o = n(19),
                s = n(3),
                i = n.n(s),
                l = n(6),
                u = n(13),
                b = n(9),
                j = n(1),
                d = n(2),
                x = n(79),
                p = n(86),
                O = n(43),
                h = n(819),
                f = n.n(h),
                m = n(1225),
                g = n.n(m),
                v = n(100),
                y = n(51),
                k = n(95),
                w = n(22),
                B = n(38),
                C = n(157),
                T = n(197),
                S = n(14),
                D = n(248),
                P = n(453),
                A = n(108),
                I = n(949),
                E = n(189),
                z = n(807),
                L = n(900),
                M = n(8),
                Y = n(5),
                F = n(0),
                H = Y.e.label(c || (c = Object(M.a)(["\n  color: ", ";\n  display: block;\n  font-weight: 600;\n  margin-bottom: 8px;\n"])), (function(e) { return e.theme.colors.text })),
                V = Object(Y.e)(H)(r || (r = Object(M.a)(["\n  font-size: 20px;\n"]))),
                X = Object(Y.e)(H)(a || (a = Object(M.a)(["\n  font-size: 12px;\n  text-transform: uppercase;\n"]))),
                N = function(e) { var t = e.children; return Object(F.jsx)(d.nc, { color: "failure", mb: "4px", children: t }) },
                K = function(e) { var t = e.errors; return Object(F.jsx)(d.n, { mt: "8px", children: t.map((function(e) { return Object(F.jsx)(N, { children: e }, e) })) }) },
                J = n(32),
                R = n(228),
                q = n.n(R),
                Z = n(53),
                W = ["onRemove", "onTextInput"],
                U = function(e) { var t = e.onRemove,
                        n = e.onTextInput,
                        c = Object(Z.a)(e, W),
                        r = Object(j.useState)(!1),
                        a = Object(b.a)(r, 2),
                        o = a[0],
                        s = a[1],
                        i = Object(j.useState)(!1),
                        u = Object(b.a)(i, 2),
                        x = u[0],
                        p = u[1]; return Object(F.jsxs)(d.n, { position: "relative", mb: "16px", children: [Object(F.jsx)(d.fb, Object(l.a)(Object(l.a)({}, c), {}, { onChange: function(e) { var t = e.currentTarget.value;
                                s(x && 0 === t.length), p(!0), n(t) }, isWarning: o })), t && Object(F.jsx)(d.n, { position: "absolute", right: "8px", top: "0px", zIndex: 30, children: Object(F.jsx)(d.cb, { variant: "text", onClick: t, children: Object(F.jsx)(d.M, {}) }) })] }) },
                Q = function() { return { id: q()(), value: "" } },
                _ = function(e) { var t = e.choices,
                        n = e.onChange,
                        c = Object(S.b)().t,
                        r = t.filter((function(e) { return e.value.length > 0 })).length >= 2; return Object(F.jsxs)(d.v, { children: [Object(F.jsx)(d.y, { children: Object(F.jsx)(d.Z, { as: "h3", scale: "md", children: c("Choices") }) }), Object(F.jsxs)(d.w, { children: [t.map((function(e, r) { var a = e.id,
                                    o = e.value; return Object(F.jsx)(U, { scale: "lg", onTextInput: function(e) { var c = Object(J.a)(t),
                                            r = c.findIndex((function(e) { return e.id === a }));
                                        c[r].value = e, n(c) }, placeholder: c("Input choice text"), value: o, onRemove: r > 1 ? function() { n(t.filter((function(e) { return e.id !== a }))) } : void 0 }, a) })), Object(F.jsx)(d.r, { type: "button", onClick: function() { n([].concat(Object(J.a)(t), [Q()])) }, disabled: !r, children: c("Add Choice") })] })] }) },
                G = n(351),
                $ = n(774),
                ee = n(748),
                te = function(e, t) { if (!Object(G.default)(e) || !Object(G.default)(t)) return null; var n = Object($.default)(e, "yyyy-MM-dd"),
                        c = Object($.default)(t, "HH:mm:ss"); return Object(ee.default)("".concat(n, "T").concat(c)).getTime() / 1e3 },
                ne = n(811),
                ce = n(93),
                re = n(902),
                ae = n(901),
                oe = function(e) { var t = e.block,
                        n = e.onDismiss,
                        c = Object(S.b)().t,
                        r = Object(j.useState)(!0),
                        a = Object(b.a)(r, 2),
                        o = a[0],
                        s = a[1],
                        i = Object(re.a)(t, o),
                        l = i.isLoading,
                        u = i.total,
                        x = i.cakeBalance,
                        p = i.cakeVaultBalance,
                        O = i.cakePoolBalance,
                        h = i.poolsBalance,
                        f = i.cakeBnbLpBalance,
                        m = Object(ce.a)().theme; return Object(F.jsx)(d.wb, { title: c("Voting Power"), onDismiss: function() { s(!1), n() }, headerBackground: m.colors.gradients.cardHeader, children: Object(F.jsx)(d.n, { mb: "24px", width: "320px", children: l ? Object(F.jsx)(d.X, { height: "450px", alignItems: "center", justifyContent: "center", children: Object(F.jsx)(d.Xb, { size: 80 }) }) : Object(F.jsxs)(F.Fragment, { children: [Object(F.jsx)(ae.a, { total: u, cakeBalance: x, cakeVaultBalance: p, cakePoolBalance: O, poolsBalance: h, cakeBnbLpBalance: f }), Object(F.jsx)(d.r, { variant: "secondary", onClick: n, width: "100%", mt: "16px", children: c("Close") })] }) }) }) },
                se = Object(j.lazy)((function() { return Promise.all([n.e(6), n.e(21)]).then(n.bind(null, 1511)) }));
            t.default = function() { var e = Object(j.useState)({ name: "", body: "", choices: f()(2).map(Q), startDate: null, startTime: null, endDate: null, endTime: null, snapshot: 0 }),
                    t = Object(b.a)(e, 2),
                    n = t[0],
                    c = t[1],
                    r = Object(j.useState)(!1),
                    a = Object(b.a)(r, 2),
                    s = a[0],
                    h = a[1],
                    m = Object(j.useState)({}),
                    M = Object(b.a)(m, 2),
                    Y = M[0],
                    H = M[1],
                    N = Object(S.b)().t,
                    R = Object(O.c)().account,
                    q = Object(v.b)(),
                    Z = Object(x.g)().push,
                    W = Object(w.a)().library,
                    U = Object(k.a)(),
                    $ = U.toastSuccess,
                    ee = U.toastError,
                    ce = Object(d.Mc)(Object(F.jsx)(oe, { block: n.snapshot })),
                    re = Object(b.a)(ce, 1)[0],
                    ae = n.name,
                    ie = n.body,
                    le = n.choices,
                    ue = n.startDate,
                    be = n.startTime,
                    je = n.endDate,
                    de = n.endTime,
                    xe = n.snapshot,
                    pe = function(e, t) { var n = e.name,
                            c = e.body,
                            r = e.choices,
                            a = e.startDate,
                            o = e.startTime,
                            s = e.endDate,
                            i = e.endTime,
                            l = e.snapshot,
                            u = {};
                        n || (u.name = [t("%field% is required", { field: "Title" })]), c || (u.body = [t("%field% is required", { field: "Body" })]), r.length < 2 && (u.choices = [t("Please create a minimum of %num% choices", { num: 2 })]); var b = r.some((function(e) { return !e.value }));
                        2 === r.length && b && (u.choices = Array.isArray(u.choices) ? [].concat(Object(J.a)(u.choices), [t("Choices must not be empty")]) : u.choices = [t("Choices must not be empty")]), Object(G.default)(a) || (u.startDate = [t("Please select a valid date")]), Object(G.default)(o) || (u.startTime = [t("Please select a valid time")]), Object(G.default)(s) || (u.endDate = [t("Please select a valid date")]), Object(G.default)(i) || (u.endTime = [t("Please select a valid time")]); var j = te(a, o); return te(s, i) < j && (u.endDate = Array.isArray(u.endDate) ? [].concat(Object(J.a)(u.endDate), [t("End date must be after the start date")]) : u.endDate = [t("End date must be after the start date")]), 0 === l && (u.snapshot = [t("Invalid snapshot")]), u }(n, N),
                    Oe = function() { var e = Object(u.a)(i.a.mark((function e(t) { var n, c, r, a; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.preventDefault(), e.prev = 1, h(!0), n = JSON.stringify(Object(l.a)(Object(l.a)({}, Object(z.e)()), {}, { type: y.g.PROPOSAL, payload: { name: ae, body: ie, snapshot: xe, start: te(ue, be), end: te(je, de), choices: le.filter((function(e) { return e.value })).map((function(e) { return e.value })), metadata: Object(z.d)(), type: "single-choice" } })), e.next = 6, Object(T.c)(W, R, n);
                                    case 6:
                                        if (!(c = e.sent)) { e.next = 16; break } return r = { address: R, msg: n, sig: c }, e.next = 11, Object(z.i)(r);
                                    case 11:
                                        a = e.sent, Z("/voting/proposal/".concat(a.ipfsHash)), $(N("Proposal created!")), e.next = 17; break;
                                    case 16:
                                        ee(N("Error"), N("Unable to sign payload"));
                                    case 17:
                                        e.next = 24; break;
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(1), ee(N("Error"), (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) || (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.error)), console.error(e.t0), h(!1);
                                    case 24:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [1, 19]
                            ]) }))); return function(t) { return e.apply(this, arguments) } }(),
                    he = function(e, t) { c((function(n) { return Object(l.a)(Object(l.a)({}, n), {}, Object(o.a)({}, e, t)) })), H((function(t) { return Object(l.a)(Object(l.a)({}, t), {}, Object(o.a)({}, e, !0)) })) },
                    fe = function(e) { return function(t) { he(e, t) } },
                    me = Object(j.useMemo)((function() { return { hideIcons: R === ne.a ? [] : ["guide", "fullscreen", "preview", "side-by-side", "image"] } }), [R]); return Object(j.useEffect)((function() { q > 0 && c((function(e) { return Object(l.a)(Object(l.a)({}, e), {}, { snapshot: q }) })) }), [q, c]), Object(F.jsxs)(D.a, { py: "40px", children: [Object(F.jsx)(E.a, {}), Object(F.jsx)(d.n, { mb: "48px", children: Object(F.jsxs)(d.o, { children: [Object(F.jsx)(p.a, { to: "/", children: N("Home") }), Object(F.jsx)(p.a, { to: "/voting", children: N("Voting") }), Object(F.jsx)(d.nc, { children: N("Make a Proposal") })] }) }), Object(F.jsx)("form", { onSubmit: Oe, children: Object(F.jsxs)(L.a, { children: [Object(F.jsxs)(d.n, { children: [Object(F.jsxs)(d.n, { mb: "24px", children: [Object(F.jsx)(V, { htmlFor: "name", children: N("Title") }), Object(F.jsx)(d.fb, { id: "name", name: "name", value: ae, scale: "lg", onChange: function(e) { var t = e.currentTarget,
                                                n = t.name,
                                                c = t.value;
                                            he(n, c) }, required: !0 }), pe.name && Y.name && Object(F.jsx)(K, { errors: pe.name })] }), Object(F.jsxs)(d.n, { mb: "24px", children: [Object(F.jsx)(V, { htmlFor: "body", children: N("Content") }), Object(F.jsx)(d.nc, { color: "textSubtle", mb: "8px", children: N("Tip: write in Markdown!") }), Object(F.jsx)(se, { id: "body", name: "body", onTextChange: function(e) { he("body", e) }, value: ie, options: me, required: !0 }), pe.body && Y.body && Object(F.jsx)(K, { errors: pe.body })] }), ie && Object(F.jsx)(d.n, { mb: "24px", children: Object(F.jsxs)(d.v, { children: [Object(F.jsx)(d.y, { children: Object(F.jsx)(d.Z, { as: "h3", scale: "md", children: N("Preview") }) }), Object(F.jsx)(d.w, { p: "0", px: "24px", children: Object(F.jsx)(I.a, { children: ie }) })] }) }), Object(F.jsx)(_, { choices: le, onChange: function(e) { he("choices", e) } }), pe.choices && Y.choices && Object(F.jsx)(K, { errors: pe.choices })] }), Object(F.jsx)(d.n, { children: Object(F.jsxs)(d.v, { children: [Object(F.jsx)(d.y, { children: Object(F.jsx)(d.Z, { as: "h3", scale: "md", children: N("Actions") }) }), Object(F.jsxs)(d.w, { children: [Object(F.jsxs)(d.n, { mb: "24px", children: [Object(F.jsx)(X, { children: N("Start Date") }), Object(F.jsx)(P.a, { name: "startDate", onChange: fe("startDate"), selected: ue, placeholderText: "YYYY/MM/DD" }), pe.startDate && Y.startDate && Object(F.jsx)(K, { errors: pe.startDate })] }), Object(F.jsxs)(d.n, { mb: "24px", children: [Object(F.jsx)(X, { children: N("Start Time") }), Object(F.jsx)(P.c, { name: "startTime", onChange: fe("startTime"), selected: be, placeholderText: "00:00" }), pe.startTime && Y.startTime && Object(F.jsx)(K, { errors: pe.startTime })] }), Object(F.jsxs)(d.n, { mb: "24px", children: [Object(F.jsx)(X, { children: N("End Date") }), Object(F.jsx)(P.a, { name: "endDate", onChange: fe("endDate"), selected: je, placeholderText: "YYYY/MM/DD" }), pe.endDate && Y.endDate && Object(F.jsx)(K, { errors: pe.endDate })] }), Object(F.jsxs)(d.n, { mb: "24px", children: [Object(F.jsx)(X, { children: N("End Time") }), Object(F.jsx)(P.c, { name: "endTime", onChange: fe("endTime"), selected: de, placeholderText: "00:00" }), pe.endTime && Y.endTime && Object(F.jsx)(K, { errors: pe.endTime })] }), R && Object(F.jsxs)(d.X, { alignItems: "center", mb: "8px", children: [Object(F.jsx)(d.nc, { color: "textSubtle", mr: "16px", children: N("Creator") }), Object(F.jsx)(d.jb, { href: Object(B.e)(R, "address"), children: Object(C.a)(R) })] }), Object(F.jsxs)(d.X, { alignItems: "center", mb: "16px", children: [Object(F.jsx)(d.nc, { color: "textSubtle", mr: "16px", children: N("Snapshot") }), Object(F.jsx)(d.jb, { href: Object(B.e)(xe, "block"), children: xe })] }), R ? Object(F.jsxs)(F.Fragment, { children: [Object(F.jsx)(d.r, { type: "submit", width: "100%", isLoading: s, endIcon: s ? Object(F.jsx)(d.i, { spin: !0, color: "currentColor" }) : null, disabled: !g()(pe), mb: "16px", children: N("Publish") }), Object(F.jsxs)(d.nc, { color: "failure", as: "p", mb: "4px", children: [N("You need at least %count% voting power to publish a proposal.", { count: ne.f }), " "] }), Object(F.jsx)(d.r, { scale: "sm", type: "button", variant: "text", onClick: re, p: 0, children: N("Check voting power") })] }) : Object(F.jsx)(A.a, { width: "100%", type: "button" })] })] }) })] }) })] }) } }, 807: function(e, t, n) { "use strict";
            n.d(t, "h", (function() { return x })), n.d(t, "c", (function() { return p })), n.d(t, "b", (function() { return O })), n.d(t, "d", (function() { return h })), n.d(t, "e", (function() { return f })), n.d(t, "i", (function() { return m })), n.d(t, "g", (function() { return g })), n.d(t, "a", (function() { return v })), n.d(t, "f", (function() { return y })); var c = n(19),
                r = n(32),
                a = n(6),
                o = n(3),
                s = n.n(o),
                i = n(13),
                l = n(96),
                u = n(33),
                b = n(51),
                j = n(97),
                d = n(811),
                x = function(e) { return e.author.toLowerCase() === d.a.toLowerCase() },
                p = function(e, t) { switch (t) {
                        case b.f.COMMUNITY:
                            return e.filter((function(e) { return !x(e) }));
                        case b.f.CORE:
                            return e.filter((function(e) { return x(e) }));
                        case b.f.ALL:
                        default:
                            return e } },
                O = function(e, t) { return e.filter((function(e) { return e.state === t })) },
                h = function() { return { plugins: {}, network: 56, strategies: [{ name: "cake", params: { symbol: "CAKE", address: u.a.cake.address, decimals: 18 } }] } },
                f = function() { return { version: d.e, timestamp: (Date.now() / 1e3).toFixed(), space: d.c } },
                m = function() { var e = Object(i.a)(s.a.mark((function e(t) { var n, c, r; return s.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(l.i, { method: "post", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(t) });
                                case 2:
                                    if ((n = e.sent).ok) { e.next = 8; break } return e.next = 6, n.json();
                                case 6:
                                    throw c = e.sent, new Error(null === c || void 0 === c ? void 0 : c.error_description);
                                case 8:
                                    return e.next = 10, n.json();
                                case 10:
                                    return r = e.sent, e.abrupt("return", r);
                                case 12:
                                case "end":
                                    return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(),
                g = function() { var e = Object(i.a)(s.a.mark((function e(t, n, c) { var r, a, o; return s.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = c, e.t0) { e.next = 5; break } return e.next = 4, j.a.getBlockNumber();
                                case 4:
                                    e.t0 = e.sent;
                                case 5:
                                    return r = e.t0, e.next = 8, fetch("".concat(l.j, "/power"), { method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address: t, block: r, poolAddresses: n }) });
                                case 8:
                                    return a = e.sent, e.next = 11, a.json();
                                case 11:
                                    return o = e.sent, e.abrupt("return", o.data);
                                case 13:
                                case "end":
                                    return e.stop() } }), e) }))); return function(t, n, c) { return e.apply(this, arguments) } }(),
                v = function(e) { return e.reduce((function(e, t) { var n = t.proposal.choices[t.choice - 1]; return Object(a.a)(Object(a.a)({}, e), {}, Object(c.a)({}, n, e[n] ? [].concat(Object(r.a)(e[n]), [t]) : [t])) }), {}) },
                y = function(e) { return e.reduce((function(e, t) { var n; return e + parseFloat(null === (n = t.metadata) || void 0 === n ? void 0 : n.votingPower) }), 0) } }, 811: function(e, t, n) { "use strict";
            n.d(t, "d", (function() { return c })), n.d(t, "a", (function() { return r })), n.d(t, "b", (function() { return a })), n.d(t, "e", (function() { return o })), n.d(t, "c", (function() { return s })), n.d(t, "f", (function() { return i })); var c = 10,
                r = "0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",
                a = "https://gateway.ipfs.io/ipfs",
                o = "0.1.3",
                s = "cake.eth",
                i = 10 }, 871: function(e, t, n) { "use strict";
            n.d(t, "b", (function() { return l })), n.d(t, "a", (function() { return u })); var c, r = n(6),
                a = n(8),
                o = (n(1), n(2)),
                s = n(5),
                i = n(0),
                l = s.e.div(c || (c = Object(a.a)(["\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                u = function(e) { return Object(i.jsx)(o.n, Object(r.a)({ mb: "24px", maxWidth: "320px" }, e)) } }, 900: function(e, t, n) { "use strict"; var c, r = n(8),
                a = n(5).e.div(c || (c = Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  ", " {\n    grid-template-columns: 1fr 332px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg }));
            t.a = a }, 901: function(e, t, n) { "use strict";
            n(1); var c = n(2),
                r = n(14),
                a = n(31),
                o = n(871),
                s = n(0);
            t.a = function(e) { var t = e.total,
                    n = e.cakeBalance,
                    i = e.cakeVaultBalance,
                    l = e.cakePoolBalance,
                    u = e.poolsBalance,
                    b = e.cakeBnbLpBalance,
                    j = Object(r.b)().t; return Object(s.jsxs)(o.a, { mb: "0", children: [Object(s.jsx)(c.nc, { as: "p", mb: "24px", fontSize: "14px", color: "textSubtle", children: j("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.") }), Object(s.jsx)(c.nc, { color: "secondary", textTransform: "uppercase", mb: "4px", bold: !0, fontSize: "14px", children: j("Overview") }), Object(s.jsxs)(o.b, { children: [Object(s.jsx)(c.nc, { color: "secondary", children: j("Your Voting Power") }), Object(s.jsx)(c.nc, { bold: !0, fontSize: "20px", children: Object(a.e)(t, 0, 3) })] }), Object(s.jsx)(c.nc, { color: "secondary", textTransform: "uppercase", mb: "4px", bold: !0, fontSize: "14px", children: j("Your Cake Held Now") }), Object(s.jsxs)(c.X, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(s.jsx)(c.nc, { color: "textSubtle", fontSize: "16px", children: j("Wallet") }), Object(s.jsx)(c.nc, { textAlign: "right", children: Object(a.e)(n, 0, 3) })] }), Object(s.jsxs)(c.X, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(s.jsx)(c.nc, { color: "textSubtle", fontSize: "16px", children: j("Manual CAKE Pool") }), Object(s.jsx)(c.nc, { textAlign: "right", children: Object(a.e)(l, 0, 3) })] }), Object(s.jsxs)(c.X, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(s.jsx)(c.nc, { color: "textSubtle", fontSize: "16px", children: j("Auto CAKE Pool") }), Object(s.jsx)(c.nc, { textAlign: "right", children: Object(a.e)(i, 0, 3) })] }), Object(s.jsxs)(c.X, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(s.jsx)(c.nc, { color: "textSubtle", fontSize: "16px", children: j("Other Syrup Pools") }), Object(s.jsx)(c.nc, { textAlign: "right", children: Object(a.e)(u, 0, 3) })] }), Object(s.jsxs)(c.X, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(s.jsx)(c.nc, { color: "textSubtle", fontSize: "16px", children: j("CAKE BNB LP") }), Object(s.jsx)(c.nc, { textAlign: "right", children: Object(a.e)(b, 0, 3) })] })] }) } }, 902: function(e, t, n) { "use strict"; var c = n(3),
                r = n.n(c),
                a = n(6),
                o = n(13),
                s = n(9),
                i = n(1),
                l = n(43),
                u = n(191),
                b = n(36),
                j = n(97),
                d = n(807),
                x = { verificationHash: null, cakeBalance: 0, cakeVaultBalance: 0, cakePoolBalance: 0, poolsBalance: 0, cakeBnbLpBalance: 0, total: 0 };
            t.a = function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = Object(l.c)(),
                    c = n.account,
                    p = Object(i.useState)(x),
                    O = Object(s.a)(p, 2),
                    h = O[0],
                    f = O[1],
                    m = Object(i.useState)(!!c),
                    g = Object(s.a)(m, 2),
                    v = g[0],
                    y = g[1]; return Object(i.useEffect)((function() { c && t && function() { var n = Object(o.a)(r.a.mark((function n() { var o, s, i, l, x, p, O, h, m, g, v; return r.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (y(!0), n.prev = 1, n.t0 = e, n.t0) { n.next = 7; break } return n.next = 6, j.a.getBlockNumber();
                                    case 6:
                                        n.t0 = n.sent;
                                    case 7:
                                        return o = n.t0, n.next = 10, Object(u.b)(o);
                                    case 10:
                                        return s = n.sent, i = s.map((function(e) { var t = e.contractAddress; return Object(b.a)(t) })), n.next = 14, Object(d.g)(c, i, o);
                                    case 14:
                                        l = n.sent, x = l.cakeBalance, p = l.cakeBnbLpBalance, O = l.cakePoolBalance, h = l.total, m = l.poolsBalance, g = l.cakeVaultBalance, v = l.verificationHash, t && f((function(e) { return Object(a.a)(Object(a.a)({}, e), {}, { verificationHash: v, cakeBalance: parseFloat(x), cakeBnbLpBalance: parseFloat(p), cakePoolBalance: parseFloat(O), poolsBalance: parseFloat(m), cakeVaultBalance: parseFloat(g), total: parseFloat(h) }) }));
                                    case 23:
                                        return n.prev = 23, y(!1), n.finish(23);
                                    case 26:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [1, , 23, 26]
                            ]) }))); return function() { return n.apply(this, arguments) } }()() }), [c, e, f, t, y]), Object(a.a)(Object(a.a)({}, h), {}, { isLoading: v }) } }, 949: function(e, t, n) { "use strict"; var c, r, a, o = n(6),
                s = (n(1), n(959)),
                i = n.n(s),
                l = n(995),
                u = n.n(l),
                b = n(8),
                j = n(2),
                d = n(5),
                x = n(0),
                p = d.e.table(c || (c = Object(b.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ", ";\n    padding: 8px;\n  }\n"])), (function(e) { return e.theme.colors.text })),
                O = d.e.div(r || (r = Object(b.a)(["\n  color: ", ";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])), (function(e) { return e.theme.colors.text })),
                h = function(e) { return Object(x.jsx)(j.Z, Object(o.a)({ as: "h4", scale: "lg", my: "16px" }, e)) },
                f = { h1: h, h2: h, h3: h, h4: h, h5: h, h6: h, p: function(e) { return Object(x.jsx)(j.nc, Object(o.a)({ as: "p", my: "16px" }, e)) }, table: p, ol: function(e) { return Object(x.jsx)(O, Object(o.a)({ as: "ol" }, e)) }, ul: function(e) { return Object(x.jsx)(O, Object(o.a)({ as: "ul" }, e)) }, pre: d.e.pre(a || (a = Object(b.a)(["\n  color: ", ";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])), (function(e) { return e.theme.colors.text })) };
            t.a = function(e) { return Object(x.jsx)(i.a, Object(o.a)({ remarkPlugins: [u.a], components: f }, e)) } } }
]);
//# sourceMappingURL=11.0b8cade6.chunk.js.map