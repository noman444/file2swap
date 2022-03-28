(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [9], { 1523: function(e, t, n) { "use strict";
            n.r(t); var c, r, a, o = n(1),
                s = n(2),
                i = n(43),
                l = n(79),
                j = n(86),
                b = n(62),
                u = n(51),
                d = n(846),
                x = n(383),
                p = n(14),
                O = n(248),
                h = n(949),
                f = n(375),
                m = n(807),
                v = n(864),
                g = n(900),
                w = n(8),
                k = n(5),
                y = n(774),
                S = n(38),
                C = n(157),
                B = n(811),
                I = n(0),
                L = Object(k.e)(s.n)(c || (c = Object(w.a)(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n"])), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.colors.cardBorder })),
                A = function(e) { var t = e.proposal,
                        n = Object(p.b)().t,
                        c = new Date(1e3 * t.start),
                        r = new Date(1e3 * t.end); return Object(I.jsxs)(s.v, { mb: "16px", children: [Object(I.jsx)(s.y, { children: Object(I.jsx)(s.Z, { as: "h3", scale: "md", children: n("Details") }) }), Object(I.jsxs)(s.w, { children: [Object(I.jsxs)(s.X, { alignItems: "center", mb: "8px", children: [Object(I.jsx)(s.nc, { color: "textSubtle", children: n("Identifier") }), Object(I.jsx)(s.jb, { href: "".concat(B.b, "/").concat(t.id), ml: "8px", children: t.id.slice(0, 8) })] }), Object(I.jsxs)(s.X, { alignItems: "center", mb: "8px", children: [Object(I.jsx)(s.nc, { color: "textSubtle", children: n("Creator") }), Object(I.jsx)(s.jb, { href: Object(S.e)(t.author, "address"), ml: "8px", children: Object(C.a)(t.author) })] }), Object(I.jsxs)(s.X, { alignItems: "center", mb: "16px", children: [Object(I.jsx)(s.nc, { color: "textSubtle", children: n("Snapshot") }), Object(I.jsx)(s.jb, { href: Object(S.e)(t.snapshot, "block"), ml: "8px", children: t.snapshot })] }), Object(I.jsxs)(L, { p: "16px", children: [Object(I.jsx)(v.a, { proposalState: t.state, mb: "8px" }), Object(I.jsxs)(s.X, { alignItems: "center", children: [Object(I.jsx)(s.nc, { color: "textSubtle", fontSize: "14px", children: n("Start Date") }), Object(I.jsx)(s.nc, { ml: "8px", children: Object(y.default)(c, "yyyy-MM-dd HH:mm") })] }), Object(I.jsxs)(s.X, { alignItems: "center", children: [Object(I.jsx)(s.nc, { color: "textSubtle", fontSize: "14px", children: n("End Date") }), Object(I.jsx)(s.nc, { ml: "8px", children: Object(y.default)(r, "yyyy-MM-dd HH:mm") })] })] })] })] }) },
                D = n(819),
                P = n.n(D),
                V = n(31),
                E = Object(k.e)(s.nc)(r || (r = Object(w.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),
                N = function(e) { var t = e.choices,
                        n = e.votes,
                        c = Object(p.b)().t,
                        r = Object(m.a)(n),
                        a = Object(d.e)(),
                        o = Object(i.c)().account,
                        l = Object(m.f)(n); return Object(I.jsxs)(s.v, { children: [Object(I.jsx)(s.y, { children: Object(I.jsx)(s.Z, { as: "h3", scale: "md", children: c("Current Results") }) }), Object(I.jsxs)(s.w, { children: [a === u.h.IDLE && t.map((function(e, t) { var n = r[e] || [],
                                    a = Object(m.f)(n),
                                    i = 0 === l ? 0 : a / l * 100,
                                    j = n.some((function(e) { return o && e.voter.toLowerCase() === o.toLowerCase() })); return Object(I.jsxs)(s.n, { mt: t > 0 ? "24px" : "0px", children: [Object(I.jsxs)(s.X, { alignItems: "center", mb: "8px", children: [Object(I.jsx)(E, { mb: "4px", title: e, children: e }), j && Object(I.jsxs)(s.kc, { variant: "success", outline: !0, ml: "8px", children: [Object(I.jsx)(s.F, { mr: "4px" }), " ", c("Voted")] })] }), Object(I.jsx)(s.n, { mb: "4px", children: Object(I.jsx)(s.Pb, { primaryStep: i, scale: "sm" }) }), Object(I.jsxs)(s.X, { alignItems: "center", justifyContent: "space-between", children: [Object(I.jsx)(s.nc, { color: "textSubtle", children: c("%total% Votes", { total: Object(V.e)(a, 0, 2) }) }), Object(I.jsxs)(s.nc, { children: [i.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 }), "%"] })] })] }, e) })), a === u.h.LOADING && P()(t.length).map((function(e, t) { return Object(I.jsx)(s.n, { mt: t > 0 ? "24px" : "0px", children: Object(I.jsx)(s.Ub, { height: "36px", mb: "4px" }) }, e) }))] })] }) },
                F = n(6),
                X = n(3),
                z = n.n(X),
                T = n(13),
                M = n(9),
                H = n(53),
                K = n(95),
                Z = n(108),
                J = n(19),
                Y = n(197),
                U = n(22),
                G = n(93);! function(e) { e.MAIN = "main", e.DETAILS = "details" }(a || (a = {})); var R, Q, W, _, q, $, ee, te, ne = n(871),
                ce = function(e) { var t = e.vote,
                        n = e.total,
                        c = e.isPending,
                        r = e.isLoading,
                        a = e.onConfirm,
                        o = e.onViewDetails,
                        i = e.onDismiss,
                        l = Object(p.b)().t; return Object(I.jsxs)(I.Fragment, { children: [Object(I.jsxs)(ne.a, { children: [Object(I.jsx)(s.nc, { color: "secondary", mb: "8px", textTransform: "uppercase", fontSize: "12px", bold: !0, children: l("Voting For") }), Object(I.jsx)(E, { bold: !0, fontSize: "20px", mb: "8px", title: t.label, children: t.label }), Object(I.jsx)(s.nc, { color: "secondary", mb: "8px", textTransform: "uppercase", fontSize: "12px", bold: !0, children: l("Your Voting Power") }), r ? Object(I.jsx)(s.Ub, { height: "64px", mb: "24px" }) : Object(I.jsxs)(ne.b, { onClick: o, style: { cursor: "pointer" }, children: [Object(I.jsx)(s.nc, { bold: !0, fontSize: "20px", children: Object(V.e)(n, 0, 3) }), Object(I.jsx)(s.cb, { scale: "sm", variant: "text", children: Object(I.jsx)(s.J, { width: "24px" }) })] }), Object(I.jsx)(s.nc, { as: "p", color: "textSubtle", fontSize: "14px", children: l("Are you sure you want to vote for the above choice? This action cannot be undone.") })] }), Object(I.jsx)(s.r, { isLoading: c, endIcon: c ? Object(I.jsx)(s.i, { spin: !0, color: "currentColor" }) : null, disabled: r || 0 === n, width: "100%", mb: "8px", onClick: a, children: l("Confirm Vote") }), Object(I.jsx)(s.r, { variant: "secondary", width: "100%", onClick: i, children: l("Cancel") })] }) },
                re = n(901),
                ae = n(902),
                oe = function(e) { var t, n = e.onSuccess,
                        c = e.proposalId,
                        r = e.vote,
                        l = e.block,
                        j = e.onDismiss,
                        b = Object(o.useState)(a.MAIN),
                        d = Object(M.a)(b, 2),
                        x = d[0],
                        O = d[1],
                        h = Object(o.useState)(!0),
                        f = Object(M.a)(h, 2),
                        v = f[0],
                        g = f[1],
                        w = Object(o.useState)(!1),
                        k = Object(M.a)(w, 2),
                        y = k[0],
                        S = k[1],
                        C = Object(i.c)().account,
                        B = Object(p.b)().t,
                        L = Object(K.a)().toastError,
                        A = Object(U.a)().library,
                        D = Object(G.a)().theme,
                        P = Object(ae.a)(l, v),
                        V = P.isLoading,
                        E = P.total,
                        N = P.cakeBalance,
                        X = P.cakeVaultBalance,
                        H = P.cakePoolBalance,
                        Z = P.poolsBalance,
                        R = P.cakeBnbLpBalance,
                        Q = P.verificationHash,
                        W = x === a.MAIN,
                        _ = W ? null : function() { return O(a.MAIN) },
                        q = (t = {}, Object(J.a)(t, a.MAIN, B("Confirm Vote")), Object(J.a)(t, a.DETAILS, B("Voting Power")), t),
                        $ = function() { g(!1), j() },
                        ee = function() { var e = Object(T.a)(z.a.mark((function e() { var t, a, o; return z.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, S(!0), t = JSON.stringify(Object(F.a)(Object(F.a)({}, Object(m.e)()), {}, { type: u.g.VOTE, payload: { proposal: c, choice: r.value, metadata: { votingPower: E.toString(), verificationHash: Q } } })), e.next = 5, Object(Y.c)(A, C, t);
                                        case 5:
                                            return a = e.sent, o = { address: C, msg: t, sig: a }, e.next = 9, Object(m.i)(o);
                                        case 9:
                                            return S(!1), e.next = 12, n();
                                        case 12:
                                            $(), e.next = 20; break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(0), S(!1), L(B("Error"), null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message), console.error(e.t0);
                                        case 20:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 15]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(I.jsx)(s.wb, { title: q[x], onBack: _, onDismiss: j, hideCloseButton: !W, headerBackground: D.colors.gradients.cardHeader, children: Object(I.jsxs)(s.n, { mb: "24px", width: "320px", children: [x === a.MAIN && Object(I.jsx)(ce, { vote: r, isLoading: V, isPending: y, total: E, onConfirm: ee, onViewDetails: function() { return O(a.DETAILS) }, onDismiss: $ }), x === a.DETAILS && Object(I.jsx)(re.a, { total: E, cakeBalance: N, cakeVaultBalance: X, cakePoolBalance: H, poolsBalance: Z, cakeBnbLpBalance: R })] }) }) },
                se = ["proposal"],
                ie = k.e.label(R || (R = Object(w.a)(["\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 16px;\n  cursor: ", ";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])), (function(e) { var t = e.theme,
                        n = e.isChecked; return t.colors[n ? "success" : "cardBorder"] }), (function(e) { return e.isDisabled ? "not-allowed" : "pointer" })),
                le = k.e.div(Q || (Q = Object(w.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),
                je = function(e) { var t = e.proposal,
                        n = Object(H.a)(e, se),
                        c = Object(o.useState)(null),
                        r = Object(M.a)(c, 2),
                        a = r[0],
                        l = r[1],
                        j = Object(p.b)().t,
                        u = Object(K.a)().toastSuccess,
                        d = Object(b.b)(),
                        O = Object(i.c)().account,
                        h = function() { var e = Object(T.a)(z.a.mark((function e() { return z.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            u(j("Vote cast!")), d(Object(x.d)({ proposalId: t.id, block: Number(t.snapshot) }));
                                        case 2:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                        f = Object(s.Mc)(Object(I.jsx)(oe, { onSuccess: h, proposalId: t.id, vote: a, block: Number(t.snapshot) })),
                        m = Object(M.a)(f, 1)[0]; return Object(I.jsxs)(s.v, Object(F.a)(Object(F.a)({}, n), {}, { children: [Object(I.jsx)(s.y, { children: Object(I.jsx)(s.Z, { as: "h3", scale: "md", children: j("Cast your vote") }) }), Object(I.jsxs)(s.w, { children: [t.choices.map((function(e, t) { var n = t + 1 === (null === a || void 0 === a ? void 0 : a.value); return Object(I.jsxs)(ie, { isChecked: n, isDisabled: !O, children: [Object(I.jsx)("div", { style: { flexShrink: 0 }, children: Object(I.jsx)(s.Rb, { scale: "sm", value: e, checked: n, onChange: function() { l({ label: e, value: t + 1 }) }, disabled: !O }) }), Object(I.jsx)(le, { children: Object(I.jsx)(s.nc, { as: "span", title: e, children: e }) })] }, e) })), O ? Object(I.jsx)(s.r, { onClick: m, disabled: null === a, children: j("Cast Vote") }) : Object(I.jsx)(Z.a, {})] })] })) },
                be = n(270),
                ue = n.n(be),
                de = Object(k.e)(s.X)(W || (W = Object(w.a)(["\n  border-bottom: 1px solid ", ";\n  padding: 16px 24px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                xe = Object(k.e)(s.Ub)(_ || (_ = Object(w.a)(["\n  flex: 1;\n"]))),
                pe = function() { return Object(I.jsx)(s.n, { children: P()(10).map((function(e) { return Object(I.jsxs)(de, { children: [Object(I.jsx)(s.Ub, { height: "21px", mr: "32px", width: "100px" }), Object(I.jsx)(xe, { height: "21px", mr: "32px", width: "100%" }), Object(I.jsx)(xe, { height: "21px", width: "100%" })] }, e) })) }) },
                Oe = Object(k.e)(s.n).attrs({ alignItems: "center" })(q || (q = Object(w.a)(["\n  grid-area: address;\n"]))),
                he = Object(k.e)(s.n)($ || ($ = Object(w.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),
                fe = Object(k.e)(s.n)(ee || (ee = Object(w.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),
                me = Object(k.e)(s.Y)(te || (te = Object(w.a)(["\n  border-bottom: 1px solid ", ";\n  grid-gap: 8px;\n  grid-template-areas:\n    'address address address'\n    'choice choice vote';\n  grid-template-columns: 1fr 1fr 120px;\n  padding: 8px 16px;\n\n  ", " {\n    grid-gap: 16px;\n    grid-template-areas: 'address choice vote';\n    padding: 16px 24px;\n  }\n"])), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.mediaQueries.sm })),
                ve = function(e) { var t, n = e.vote,
                        c = e.isVoter,
                        r = Object(p.b)().t,
                        a = !!(null === (t = n.metadata) || void 0 === t ? void 0 : t.votingPower),
                        o = a ? parseFloat(n.metadata.votingPower).toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: 3 }) : "--"; return Object(I.jsxs)(me, { children: [Object(I.jsx)(Oe, { children: Object(I.jsxs)(s.X, { alignItems: "center", children: [Object(I.jsx)(s.jb, { href: Object(S.e)(n.voter, "address"), children: Object(C.a)(n.voter) }), c && Object(I.jsxs)(s.kc, { variant: "success", outline: !0, ml: "8px", children: [Object(I.jsx)(s.F, { mr: "4px" }), " ", r("Voted")] })] }) }), Object(I.jsx)(he, { children: Object(I.jsx)(E, { title: n.proposal.choices[n.choice - 1], children: n.proposal.choices[n.choice - 1] }) }), Object(I.jsx)(fe, { children: Object(I.jsxs)(s.X, { alignItems: "center", justifyContent: "end", children: [Object(I.jsx)(s.nc, { title: n.metadata.votingPower, children: o }), a && Object(I.jsx)(s.jb, { href: "".concat(B.b, "/").concat(n.id) })] }) })] }) },
                ge = function(e) { var t; return parseFloat(null === e || void 0 === e || null === (t = e.metadata) || void 0 === t ? void 0 : t.votingPower) },
                we = function(e) { var t = e.votes,
                        n = Object(o.useState)(!1),
                        c = Object(M.a)(n, 2),
                        r = c[0],
                        a = c[1],
                        l = Object(p.b)().t,
                        j = Object(i.c)().account,
                        b = ue()(t, [ge, "created"], ["desc", "desc"]),
                        x = r ? b : b.slice(0, 20),
                        O = Object(d.e)() === u.h.IDLE; return Object(I.jsxs)(s.v, { children: [Object(I.jsx)(s.y, { children: Object(I.jsxs)(s.X, { alignItems: "center", justifyContent: "space-between", children: [Object(I.jsx)(s.Z, { as: "h3", scale: "md", children: l("Votes (%count%)", { count: t.length.toLocaleString() }) }), !O && Object(I.jsx)(s.i, { spin: !0, width: "22px" })] }) }), !O && Object(I.jsx)(pe, {}), O && x.length > 0 && Object(I.jsxs)(I.Fragment, { children: [x.map((function(e) { var t = j && e.voter.toLowerCase() === j.toLowerCase(); return Object(I.jsx)(ve, { vote: e, isVoter: t }, e.id) })), Object(I.jsx)(s.X, { alignItems: "center", justifyContent: "center", py: "8px", px: "24px", children: Object(I.jsx)(s.r, { width: "100%", onClick: function() { a(!r) }, variant: "text", endIcon: r ? Object(I.jsx)(s.K, { color: "primary", width: "21px" }) : Object(I.jsx)(s.H, { color: "primary", width: "21px" }), disabled: !O, children: l(r ? "Hide" : "See All") }) })] }), O && 0 === x.length && Object(I.jsx)(s.X, { alignItems: "center", justifyContent: "center", py: "32px", children: Object(I.jsx)(s.Z, { as: "h5", children: l("No votes found") }) })] }) },
                ke = n(189);
            t.default = function() { var e = Object(l.i)().id,
                    t = Object(d.a)(e),
                    n = Object(p.b)().t,
                    c = Object(i.c)().account,
                    r = Object(b.b)(),
                    a = Object(d.d)(e),
                    w = Object(d.e)(),
                    k = Object(d.b)(),
                    y = c && a.some((function(e) { return e.voter.toLowerCase() === c.toLowerCase() })),
                    S = null !== t && void 0 !== t ? t : {},
                    C = S.id,
                    B = void 0 === C ? null : C,
                    L = S.snapshot,
                    D = void 0 === L ? null : L,
                    P = w === u.h.LOADING || k === u.h.LOADING; return Object(o.useEffect)((function() { r(Object(x.b)(e)) }), [e, r]), Object(o.useEffect)((function() { B && D && r(Object(x.d)({ proposalId: B, block: Number(D) })) }), [B, D, r]), t ? Object(I.jsxs)(O.a, { py: "40px", children: [Object(I.jsx)(ke.a, {}), Object(I.jsx)(s.n, { mb: "40px", children: Object(I.jsx)(s.r, { as: j.a, to: "/voting", variant: "text", startIcon: Object(I.jsx)(s.c, { color: "primary", width: "24px" }), px: "0", children: n("Back to Vote Overview") }) }), Object(I.jsxs)(g.a, { children: [Object(I.jsxs)(s.n, { children: [Object(I.jsxs)(s.n, { mb: "32px", children: [Object(I.jsxs)(s.X, { alignItems: "center", mb: "8px", children: [Object(I.jsx)(v.a, { proposalState: t.state }), Object(I.jsx)(v.b, { isCoreProposal: Object(m.h)(t), ml: "8px" })] }), Object(I.jsx)(s.Z, { as: "h1", scale: "xl", mb: "16px", children: t.title }), Object(I.jsx)(s.n, { children: Object(I.jsx)(h.a, { children: t.body }) })] }), !P && !y && t.state === u.e.ACTIVE && Object(I.jsx)(je, { proposal: t, mb: "16px" }), Object(I.jsx)(we, { votes: a })] }), Object(I.jsxs)(s.n, { children: [Object(I.jsx)(A, { proposal: t }), Object(I.jsx)(N, { choices: t.choices, votes: a })] })] })] }) : Object(I.jsx)(f.a, {}) } }, 807: function(e, t, n) { "use strict";
            n.d(t, "h", (function() { return x })), n.d(t, "c", (function() { return p })), n.d(t, "b", (function() { return O })), n.d(t, "d", (function() { return h })), n.d(t, "e", (function() { return f })), n.d(t, "i", (function() { return m })), n.d(t, "g", (function() { return v })), n.d(t, "a", (function() { return g })), n.d(t, "f", (function() { return w })); var c = n(19),
                r = n(32),
                a = n(6),
                o = n(3),
                s = n.n(o),
                i = n(13),
                l = n(96),
                j = n(33),
                b = n(51),
                u = n(97),
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
                h = function() { return { plugins: {}, network: 56, strategies: [{ name: "cake", params: { symbol: "CAKE", address: j.a.cake.address, decimals: 18 } }] } },
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
                v = function() { var e = Object(i.a)(s.a.mark((function e(t, n, c) { var r, a, o; return s.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = c, e.t0) { e.next = 5; break } return e.next = 4, u.a.getBlockNumber();
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
                g = function(e) { return e.reduce((function(e, t) { var n = t.proposal.choices[t.choice - 1]; return Object(a.a)(Object(a.a)({}, e), {}, Object(c.a)({}, n, e[n] ? [].concat(Object(r.a)(e[n]), [t]) : [t])) }), {}) },
                w = function(e) { return e.reduce((function(e, t) { var n; return e + parseFloat(null === (n = t.metadata) || void 0 === n ? void 0 : n.votingPower) }), 0) } }, 811: function(e, t, n) { "use strict";
            n.d(t, "d", (function() { return c })), n.d(t, "a", (function() { return r })), n.d(t, "b", (function() { return a })), n.d(t, "e", (function() { return o })), n.d(t, "c", (function() { return s })), n.d(t, "f", (function() { return i })); var c = 10,
                r = "0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",
                a = "https://gateway.ipfs.io/ipfs",
                o = "0.1.3",
                s = "cake.eth",
                i = 10 }, 846: function(e, t, n) { "use strict";
            n.d(t, "c", (function() { return r })), n.d(t, "a", (function() { return a })), n.d(t, "d", (function() { return o })), n.d(t, "e", (function() { return s })), n.d(t, "b", (function() { return i })); var c = n(23),
                r = function() { var e = Object(c.c)((function(e) { return e.voting.proposals })); return Object.values(e) },
                a = function(e) { return Object(c.c)((function(t) { return t.voting.proposals[e] })) },
                o = function(e) { var t = Object(c.c)((function(t) { return t.voting.votes[e] })); return t ? t.filter((function(e) { return !0 !== e._inValid })) : [] },
                s = function() { return Object(c.c)((function(e) { return e.voting.voteLoadingStatus })) },
                i = function() { return Object(c.c)((function(e) { return e.voting.proposalLoadingStatus })) } }, 864: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return j })), n.d(t, "b", (function() { return b })); var c = n(6),
                r = n(53),
                a = (n(1), n(195)),
                o = n(51),
                s = n(0),
                i = ["proposalState"],
                l = ["isCoreProposal"],
                j = function(e) { var t = e.proposalState,
                        n = Object(r.a)(e, i); return t === o.e.ACTIVE ? Object(s.jsx)(a.h, Object(c.a)({}, n)) : t === o.e.PENDING ? Object(s.jsx)(a.g, Object(c.a)({}, n)) : Object(s.jsx)(a.a, Object(c.a)({}, n)) },
                b = function(e) { var t = e.isCoreProposal,
                        n = Object(r.a)(e, l); return t ? Object(s.jsx)(a.d, Object(c.a)({}, n)) : Object(s.jsx)(a.b, Object(c.a)({}, n)) } }, 871: function(e, t, n) { "use strict";
            n.d(t, "b", (function() { return l })), n.d(t, "a", (function() { return j })); var c, r = n(6),
                a = n(8),
                o = (n(1), n(2)),
                s = n(5),
                i = n(0),
                l = s.e.div(c || (c = Object(a.a)(["\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                j = function(e) { return Object(i.jsx)(o.n, Object(r.a)({ mb: "24px", maxWidth: "320px" }, e)) } }, 900: function(e, t, n) { "use strict"; var c, r = n(8),
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
                    j = e.poolsBalance,
                    b = e.cakeBnbLpBalance,
                    u = Object(r.b)().t; return Object(s.jsxs)(o.a, { mb: "0", children: [Object(s.jsx)(c.nc, { as: "p", mb: "24px", fontSize: "14px", color: "textSubtle", children: u("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.") }), Object(s.jsx)(c.nc, { color: "secondary", textTransform: "uppercase", mb: "4px", bold: !0, fontSize: "14px", children: u("Overview") }), Object(s.jsxs)(o.b, { children: [Object(s.jsx)(c.nc, { color: "secondary", children: u("Your Voting Power") }), Object(s.jsx)(c.nc, { bold: !0, fontSize: "20px", children: Object(a.e)(t, 0, 3) })] }), Object(s.jsx)(c.nc, { color: "secondary", textTransform: "uppercase", mb: "4px", bold: !0, fontSize: "14px", children: u("Your Cake Held Now") }), Object(s.jsxs)(c.X, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(s.jsx)(c.nc, { color: "textSubtle", fontSize: "16px", children: u("Wallet") }), Object(s.jsx)(c.nc, { textAlign: "right", children: Object(a.e)(n, 0, 3) })] }), Object(s.jsxs)(c.X, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(s.jsx)(c.nc, { color: "textSubtle", fontSize: "16px", children: u("Manual CAKE Pool") }), Object(s.jsx)(c.nc, { textAlign: "right", children: Object(a.e)(l, 0, 3) })] }), Object(s.jsxs)(c.X, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(s.jsx)(c.nc, { color: "textSubtle", fontSize: "16px", children: u("Auto CAKE Pool") }), Object(s.jsx)(c.nc, { textAlign: "right", children: Object(a.e)(i, 0, 3) })] }), Object(s.jsxs)(c.X, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(s.jsx)(c.nc, { color: "textSubtle", fontSize: "16px", children: u("Other Syrup Pools") }), Object(s.jsx)(c.nc, { textAlign: "right", children: Object(a.e)(j, 0, 3) })] }), Object(s.jsxs)(c.X, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(s.jsx)(c.nc, { color: "textSubtle", fontSize: "16px", children: u("CAKE BNB LP") }), Object(s.jsx)(c.nc, { textAlign: "right", children: Object(a.e)(b, 0, 3) })] })] }) } }, 902: function(e, t, n) { "use strict"; var c = n(3),
                r = n.n(c),
                a = n(6),
                o = n(13),
                s = n(9),
                i = n(1),
                l = n(43),
                j = n(191),
                b = n(36),
                u = n(97),
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
                    v = Object(s.a)(m, 2),
                    g = v[0],
                    w = v[1]; return Object(i.useEffect)((function() { c && t && function() { var n = Object(o.a)(r.a.mark((function n() { var o, s, i, l, x, p, O, h, m, v, g; return r.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (w(!0), n.prev = 1, n.t0 = e, n.t0) { n.next = 7; break } return n.next = 6, u.a.getBlockNumber();
                                    case 6:
                                        n.t0 = n.sent;
                                    case 7:
                                        return o = n.t0, n.next = 10, Object(j.b)(o);
                                    case 10:
                                        return s = n.sent, i = s.map((function(e) { var t = e.contractAddress; return Object(b.a)(t) })), n.next = 14, Object(d.g)(c, i, o);
                                    case 14:
                                        l = n.sent, x = l.cakeBalance, p = l.cakeBnbLpBalance, O = l.cakePoolBalance, h = l.total, m = l.poolsBalance, v = l.cakeVaultBalance, g = l.verificationHash, t && f((function(e) { return Object(a.a)(Object(a.a)({}, e), {}, { verificationHash: g, cakeBalance: parseFloat(x), cakeBnbLpBalance: parseFloat(p), cakePoolBalance: parseFloat(O), poolsBalance: parseFloat(m), cakeVaultBalance: parseFloat(v), total: parseFloat(h) }) }));
                                    case 23:
                                        return n.prev = 23, w(!1), n.finish(23);
                                    case 26:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [1, , 23, 26]
                            ]) }))); return function() { return n.apply(this, arguments) } }()() }), [c, e, f, t, w]), Object(a.a)(Object(a.a)({}, h), {}, { isLoading: g }) } }, 949: function(e, t, n) { "use strict"; var c, r, a, o = n(6),
                s = (n(1), n(959)),
                i = n.n(s),
                l = n(995),
                j = n.n(l),
                b = n(8),
                u = n(2),
                d = n(5),
                x = n(0),
                p = d.e.table(c || (c = Object(b.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ", ";\n    padding: 8px;\n  }\n"])), (function(e) { return e.theme.colors.text })),
                O = d.e.div(r || (r = Object(b.a)(["\n  color: ", ";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])), (function(e) { return e.theme.colors.text })),
                h = function(e) { return Object(x.jsx)(u.Z, Object(o.a)({ as: "h4", scale: "lg", my: "16px" }, e)) },
                f = { h1: h, h2: h, h3: h, h4: h, h5: h, h6: h, p: function(e) { return Object(x.jsx)(u.nc, Object(o.a)({ as: "p", my: "16px" }, e)) }, table: p, ol: function(e) { return Object(x.jsx)(O, Object(o.a)({ as: "ol" }, e)) }, ul: function(e) { return Object(x.jsx)(O, Object(o.a)({ as: "ul" }, e)) }, pre: d.e.pre(a || (a = Object(b.a)(["\n  color: ", ";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])), (function(e) { return e.theme.colors.text })) };
            t.a = function(e) { return Object(x.jsx)(i.a, Object(o.a)({ remarkPlugins: [j.a], components: f }, e)) } } }
]);
//# sourceMappingURL=9.dd468821.chunk.js.map