(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [13], { 1519: function(e, t, n) { "use strict";
            n.r(t); var c, r, i, a = n(1),
                o = n(14),
                s = n(79),
                l = n(86),
                u = n(2),
                b = n(248),
                d = n(8),
                j = n(5),
                m = n(0),
                f = j.e.div(c || (c = Object(d.a)(["\n  background: ", ";\n  padding-bottom: 40px;\n  padding-top: 40px;\n"])), (function(e) { var t = e.theme; return t.isDark ? "repeating-linear-gradient(to right, #332453, #332453 40px, #281D44 40px, #281D44 80px)" : "repeating-linear-gradient(to right, #21d4e2, #21d4e2 40px, #53dee9 40px, #53dee9 80px)" })),
                p = j.e.div(r || (r = Object(d.a)(["\n  background-image: url('/images/curtain-bottom-", ".png');\n  background-repeat: repeat-x;\n  background-size: contain;\n  height: 20px;\n"])), (function(e) { return e.theme.isDark ? "dark" : "light" })),
                O = function() { var e = Object(o.b)().t; return Object(m.jsxs)(u.n, { mb: "32px", children: [Object(m.jsx)(f, { children: Object(m.jsxs)(b.a, { children: [Object(m.jsx)(u.Z, { as: "h1", scale: "xl", mb: "24px", children: e("IFO: Initial Farm Offerings") }), Object(m.jsx)(u.nc, { bold: !0, fontSize: "20px", children: e("Buy new tokens with a brand new token sale model.") })] }) }), Object(m.jsx)(p, {})] }) },
                x = n(39),
                h = n(3),
                g = n.n(h),
                v = n(6),
                y = n(13),
                I = n(9),
                w = n(15),
                k = n.n(w),
                P = n(50),
                S = n(100),
                A = n(98),
                C = n(111),
                L = n(54),
                D = n(387),
                T = n(30),
                B = function(e, t, n) { return 0 === e ? "idle" : e < t ? "coming_soon" : e >= t && e <= n ? "live" : e > n ? "finished" : "idle" },
                U = function(e) { return { raisingAmountPool: e ? new k.a(e[0].toString()) : T.c, offeringAmountPool: e ? new k.a(e[1].toString()) : T.c, limitPerUserInLP: e ? new k.a(e[2].toString()) : T.c, hasTax: !!e && e[3], totalAmountPool: e ? new k.a(e[4].toString()) : T.c, sumTaxesOverflow: e ? new k.a(e[5].toString()) : T.c } },
                E = function(e) { var t = e.address,
                        n = e.releaseBlockNumber,
                        c = Object(A.c)(e.currency.symbol),
                        r = Object(C.a)().fastRefresh,
                        i = Object(a.useState)({ status: "idle", blocksRemaining: 0, secondsUntilStart: 0, progress: 5, secondsUntilEnd: 0, poolBasic: { raisingAmountPool: T.c, offeringAmountPool: T.c, limitPerUserInLP: T.c, taxRate: 0, totalAmountPool: T.c, sumTaxesOverflow: T.c }, poolUnlimited: { raisingAmountPool: T.c, offeringAmountPool: T.c, limitPerUserInLP: T.c, taxRate: 0, totalAmountPool: T.c, sumTaxesOverflow: T.c }, startBlockNum: 0, endBlockNum: 0, numberPoints: 0 }),
                        o = Object(I.a)(i, 2),
                        s = o[0],
                        l = o[1],
                        u = Object(S.a)().currentBlock,
                        b = Object(a.useCallback)(Object(y.a)(g.a.mark((function e() { var c, r, i, a, o, s, b, d, j, m, f, p, O, x, h, y, w, k; return g.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c = [{ address: t, name: "startBlock" }, { address: t, name: "endBlock" }, { address: t, name: "viewPoolInformation", params: [0] }, { address: t, name: "viewPoolInformation", params: [1] }, { address: t, name: "viewPoolTaxRateOverflow", params: [1] }, { address: t, name: "numberPoints" }], e.next = 3, Object(L.b)(D, c);
                                    case 3:
                                        r = e.sent, i = Object(I.a)(r, 6), a = i[0], o = i[1], s = i[2], b = i[3], d = i[4], j = i[5], m = U(s), f = U(b), p = a ? a[0].toNumber() : 0, O = o ? o[0].toNumber() : 0, x = d ? d[0].div(1e10).toNumber() : 0, h = B(u, p, O), y = O - p, w = O - u, k = u > p ? (u - p) / y * 100 : (u - n) / (p - n) * 100, l((function(e) { return Object(v.a)(Object(v.a)({}, e), {}, { secondsUntilEnd: w * P.h, secondsUntilStart: (p - u) * P.h, poolBasic: Object(v.a)(Object(v.a)({}, m), {}, { taxRate: 0 }), poolUnlimited: Object(v.a)(Object(v.a)({}, f), {}, { taxRate: x }), status: h, progress: k, blocksRemaining: w, startBlockNum: p, endBlockNum: O, numberPoints: j ? j[0].toNumber() : 0 }) }));
                                    case 21:
                                    case "end":
                                        return e.stop() } }), e) }))), [t, u, n]); return Object(a.useEffect)((function() { b() }), [b, r]), Object(v.a)(Object(v.a)({}, s), {}, { currencyPriceInUSD: c, fetchIfoData: b }) },
                N = n(19),
                F = n(43),
                R = n(45),
                X = function(e, t, n) { var c = Object(F.c)().account,
                        r = Object(a.useState)(T.c),
                        i = Object(I.a)(r, 2),
                        o = i[0],
                        s = i[1]; return Object(a.useEffect)((function() { c && function() { var n = Object(y.a)(g.a.mark((function n() { var r; return g.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, e.allowance(c, t);
                                        case 3:
                                            r = n.sent, s(new k.a(r.toString())), n.next = 10; break;
                                        case 7:
                                            n.prev = 7, n.t0 = n.catch(0), console.error(n.t0);
                                        case 10:
                                        case "end":
                                            return n.stop() } }), n, null, [
                                    [0, 7]
                                ]) }))); return function() { return n.apply(this, arguments) } }()() }), [c, t, e, n]), o },
                G = function(e) { var t = Object(C.a)().fastRefresh,
                        n = Object(a.useState)({ poolBasic: { amountTokenCommittedInLP: T.c, offeringAmountInToken: T.c, refundingAmountInLP: T.c, taxAmountInLP: T.c, hasClaimed: !1, isPendingTx: !1 }, poolUnlimited: { amountTokenCommittedInLP: T.c, offeringAmountInToken: T.c, refundingAmountInLP: T.c, taxAmountInLP: T.c, hasClaimed: !1, isPendingTx: !1 } }),
                        c = Object(I.a)(n, 2),
                        r = c[0],
                        i = c[1],
                        o = e.address,
                        s = e.currency,
                        l = Object(F.c)().account,
                        u = Object(R.l)(o),
                        b = Object(R.h)(s.address),
                        d = X(b, o),
                        j = Object(a.useCallback)(Object(y.a)(g.a.mark((function e() { var t, n, c, r, a; return g.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = ["viewUserInfo", "viewUserOfferingAndRefundingAmountsForPools"].map((function(e) { return { address: o, name: e, params: [l, [0, 1]] } })), e.next = 3, Object(L.b)(D, t);
                                    case 3:
                                        n = e.sent, c = Object(I.a)(n, 2), r = c[0], a = c[1], i((function(e) { return Object(v.a)(Object(v.a)({}, e), {}, { poolBasic: Object(v.a)(Object(v.a)({}, e.poolBasic), {}, { amountTokenCommittedInLP: new k.a(r[0][0].toString()), offeringAmountInToken: new k.a(a[0][0][0].toString()), refundingAmountInLP: new k.a(a[0][0][1].toString()), taxAmountInLP: new k.a(a[0][0][2].toString()), hasClaimed: r[1][0] }), poolUnlimited: Object(v.a)(Object(v.a)({}, e.poolUnlimited), {}, { amountTokenCommittedInLP: new k.a(r[0][1].toString()), offeringAmountInToken: new k.a(a[0][1][0].toString()), refundingAmountInLP: new k.a(a[0][1][1].toString()), taxAmountInLP: new k.a(a[0][1][2].toString()), hasClaimed: r[1][1] }) }) }));
                                    case 8:
                                    case "end":
                                        return e.stop() } }), e) }))), [l, o]); return Object(a.useEffect)((function() { l && j() }), [l, j, t]), Object(v.a)(Object(v.a)({}, r), {}, { allowance: d, contract: u, setPendingTx: function(e, t) { return i((function(n) { return Object(v.a)(Object(v.a)({}, n), {}, Object(N.a)({}, t, Object(v.a)(Object(v.a)({}, n[t]), {}, { isPendingTx: e }))) })) }, setIsClaimed: function(e) { i((function(t) { return Object(v.a)(Object(v.a)({}, t), {}, Object(N.a)({}, e, Object(v.a)(Object(v.a)({}, t[e]), {}, { hasClaimed: !0 }))) })) }, fetchIfoData: j }) },
                _ = n(12),
                W = n(95),
                q = n(99);! function(e) { e.ENABLED = "enabled", e.DISABLED = "disabled", e.IS_ENABLING = "is_enabling" }(i || (i = {})); var V, Y, z, H, K, Q, M, Z, J, $, ee, te, ne, ce, re = n(188),
                ie = n(53),
                ae = n(33),
                oe = n(31),
                se = n(257),
                le = ["userAmount", "totalAmount"],
                ue = function(e) { var t = e.userAmount,
                        n = e.totalAmount,
                        c = Object(ie.a)(e, le),
                        r = Object(o.b)().t,
                        i = (n.isGreaterThan(0) ? t.div(n).times(100).toNumber() : T.c).toLocaleString(void 0, { maximumFractionDigits: 5 }); return Object(m.jsx)(u.nc, Object(v.a)(Object(v.a)({ fontSize: "14px", color: "textSubtle" }, c), {}, { children: r("%num% of total", { num: i }) })) },
                be = function() { return Object(m.jsx)(u.Ub, { height: "48px" }) },
                de = function() { return Object(m.jsxs)("div", { children: [Object(m.jsxs)(u.X, { justifyContent: "space-between", alignItems: "center", mb: "24px", children: [Object(m.jsx)(u.Ub, { variant: "circle", width: "32px", height: "32px", mr: "16px" }), Object(m.jsx)(u.Ub, { width: "90%" })] }), Object(m.jsxs)(u.X, { justifyContent: "space-between", alignItems: "center", children: [Object(m.jsx)(u.Ub, { variant: "circle", width: "32px", height: "32px", mr: "16px" }), Object(m.jsx)(u.Ub, { width: "90%" })] })] }) },
                je = function() { return Object(m.jsxs)("div", { children: [Object(m.jsx)(u.Ub, { mb: "8px" }), Object(m.jsx)(u.Ub, {})] }) },
                me = ["primaryToken", "secondaryToken", "children"],
                fe = function(e) { var t = e.primaryToken,
                        n = e.secondaryToken,
                        c = e.children,
                        r = Object(ie.a)(e, me); return Object(m.jsxs)(u.X, Object(v.a)(Object(v.a)({}, r), {}, { children: [t ? t && n ? Object(m.jsx)(se.b, { variant: "inverted", primaryToken: t, height: 32, width: 32, secondaryToken: n, mr: "16px" }) : Object(m.jsx)(se.a, { token: t, height: 32, width: 32, mr: "16px" }) : Object(m.jsx)(u.q, { width: 32, mr: "16px" }), Object(m.jsx)("div", { children: c })] })) },
                pe = function(e) { return Object(m.jsx)(fe, Object(v.a)({ primaryToken: ae.a.cake, secondaryToken: ae.a.wbnb }, e)) },
                Oe = function(e) { return Object(m.jsx)(u.nc, Object(v.a)({ bold: !0, fontSize: "12px", color: "secondary", textTransform: "uppercase" }, e)) },
                xe = function(e) { return Object(m.jsx)(u.nc, Object(v.a)({ bold: !0, fontSize: "20px", style: { wordBreak: "break-all" } }, e)) },
                he = function(e) { var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = e.walletIfoData,
                        a = e.hasProfile,
                        s = e.isLoading,
                        l = e.onApprove,
                        b = e.enableStatus,
                        d = Object(F.c)().account,
                        j = Object(o.b)().t,
                        f = Object(u.Oc)(j("Sorry, you didn\u2019t contribute enough LP tokens to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your LP tokens."), { placement: "bottom" }),
                        p = f.targetRef,
                        O = f.tooltip,
                        x = f.tooltipVisible,
                        h = c[t],
                        g = r[t],
                        v = n.currency,
                        y = n.token,
                        I = g.hasClaimed,
                        w = 100 * n[t].distributionRatio; return Object(m.jsxs)(u.n, { pb: "24px", children: [x && O, s ? Object(m.jsx)(de, {}) : d && !a ? "finished" === c.status ? Object(m.jsx)(u.nc, { textAlign: "center", children: j("Activate PancakeSwap Profile to take part in next IFO\u2018s!") }) : Object(m.jsx)(u.nc, { textAlign: "center", children: j("You need an active PancakeSwap Profile to take part in an IFO!") }) : "coming_soon" === c.status ? Object(m.jsxs)(m.Fragment, { children: [Object(m.jsxs)(fe, { children: [Object(m.jsx)(Oe, { children: j("On sale") }), Object(m.jsx)(xe, { children: n[t].saleAmount })] }), Object(m.jsx)(u.nc, { fontSize: "14px", color: "textSubtle", pl: "48px", children: j("%ratio%% of total sale", { ratio: w }) }), b !== i.ENABLED && d && Object(m.jsx)(u.r, { width: "100%", mt: "16px", onClick: l, isLoading: b === i.IS_ENABLING, endIcon: b === i.IS_ENABLING ? Object(m.jsx)(u.i, { spin: !0, color: "currentColor" }) : null, children: j("Enable") })] }) : "live" === c.status ? Object(m.jsxs)(m.Fragment, { children: [Object(m.jsxs)(pe, { mb: "24px", children: [Object(m.jsx)(Oe, { children: j("Your %symbol% committed", { symbol: v.symbol }) }), Object(m.jsx)(xe, { children: Object(oe.g)(g.amountTokenCommittedInLP, v.decimals) }), Object(m.jsx)(ue, { userAmount: g.amountTokenCommittedInLP, totalAmount: h.totalAmountPool })] }), Object(m.jsxs)(fe, { primaryToken: n.token, children: [Object(m.jsx)(Oe, { children: j("%symbol% to receive", { symbol: y.symbol }) }), Object(m.jsx)(xe, { children: Object(oe.g)(g.offeringAmountInToken, y.decimals) })] })] }) : "finished" === c.status ? g.amountTokenCommittedInLP.isEqualTo(0) ? Object(m.jsxs)(u.X, { flexDirection: "column", alignItems: "center", children: [Object(m.jsx)(u.q, { width: 80, mb: "16px" }), Object(m.jsx)(u.nc, { children: j("You didn\u2019t participate in this sale!") })] }) : Object(m.jsxs)(m.Fragment, { children: [Object(m.jsxs)(pe, { mb: "24px", children: [Object(m.jsx)(Oe, { children: j(I ? "Your %symbol% RECLAIMED" : "Your %symbol% TO RECLAIM", { symbol: v.symbol }) }), Object(m.jsxs)(u.X, { alignItems: "center", children: [Object(m.jsx)(xe, { children: Object(oe.g)(g.refundingAmountInLP, v.decimals) }), I && Object(m.jsx)(u.F, { color: "success", ml: "8px" })] }), Object(m.jsx)(ue, { userAmount: g.amountTokenCommittedInLP, totalAmount: h.totalAmountPool })] }), Object(m.jsxs)(fe, { primaryToken: n.token, children: [Object(m.jsxs)(Oe, { children: [" ", j(I ? "%symbol% received" : "%symbol% to receive", { symbol: y.symbol })] }), Object(m.jsxs)(u.X, { alignItems: "center", children: [Object(m.jsx)(xe, { children: Object(oe.g)(g.offeringAmountInToken, y.decimals) }), !I && g.offeringAmountInToken.isEqualTo(0) && Object(m.jsx)("div", { ref: p, style: { display: "flex", marginLeft: "8px" }, children: Object(m.jsx)(u.ab, {}) }), I && Object(m.jsx)(u.F, { color: "success", ml: "8px" })] })] })] }) : null] }) },
                ge = n(108),
                ve = n(132),
                ye = n(56),
                Ie = n(64),
                we = n(806),
                ke = n(805),
                Pe = n(130),
                Se = [.1, .25, .5, .75, 1],
                Ae = Object(Ie.parseUnits)("10", "gwei").toString(),
                Ce = function(e) { var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = e.walletIfoData,
                        i = e.userCurrencyBalance,
                        s = e.onDismiss,
                        l = e.onSuccess,
                        b = c[t],
                        d = r[t],
                        j = n.currency,
                        f = b.limitPerUserInLP,
                        p = d.amountTokenCommittedInLP,
                        O = r.contract,
                        x = Object(a.useState)(""),
                        h = Object(I.a)(x, 2),
                        v = h[0],
                        w = h[1],
                        S = Object(F.c)().account,
                        A = Object(Pe.a)().callWithGasPrice,
                        C = Object(R.h)(j.address),
                        L = Object(o.b)().t,
                        D = new k.a(v).times(P.k),
                        T = Object(ke.a)({ onRequiresApproval: function() { var e = Object(y.a)(g.a.mark((function e() { var t, n; return g.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, C.allowance(S, O.address);
                                            case 3:
                                                return t = e.sent, n = new k.a(t.toString()), e.abrupt("return", n.gt(0));
                                            case 8:
                                                return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 11:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 8]
                                    ]) }))); return function() { return e.apply(this, arguments) } }(), onApprove: function() { return A(C, "approve", [O.address, ye.a.constants.MaxUint256], { gasPrice: Ae }) }, onConfirm: function() { return A(O, "depositPool", [D.toString(), t === _.d.poolBasic ? 0 : 1], { gasPrice: Ae }) }, onSuccess: function() { var e = Object(y.a)(g.a.mark((function e(t) { var n; return g.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = t.receipt, e.next = 3, l(D, n.transactionHash);
                                            case 3:
                                                s();
                                            case 4:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }),
                        B = T.isApproving,
                        U = T.isApproved,
                        E = T.isConfirmed,
                        N = T.isConfirming,
                        X = T.handleApprove,
                        G = T.handleConfirm,
                        W = f.isGreaterThan(0) && f.minus(p).isLessThanOrEqualTo(i) ? f : i; return Object(m.jsx)(u.wb, { title: L("Contribute %symbol%", { symbol: j.symbol }), onDismiss: s, children: Object(m.jsxs)(u.yb, { maxWidth: "320px", children: [f.isGreaterThan(0) && Object(m.jsxs)(u.X, { justifyContent: "space-between", mb: "16px", children: [Object(m.jsx)(u.nc, { children: L("Max. LP token entry") }), Object(m.jsx)(u.nc, { children: Object(oe.f)(f, j.decimals).toString() })] }), Object(m.jsxs)(u.X, { justifyContent: "space-between", mb: "8px", children: [Object(m.jsxs)(u.nc, { children: [L("Commit"), ":"] }), Object(m.jsxs)(u.X, { flexGrow: 1, justifyContent: "flex-end", children: [Object(m.jsx)(u.db, { src: "/images/farms/".concat(j.symbol.split(" ")[0].toLocaleLowerCase(), ".svg"), width: 24, height: 24 }), Object(m.jsx)(u.nc, { children: j.symbol })] })] }), Object(m.jsx)(u.j, { value: v, currencyValue: c.currencyPriceInUSD.times(v || 0).toFixed(2), onUserInput: w, isWarning: D.isGreaterThan(W), decimals: j.decimals, mb: "8px" }), Object(m.jsx)(u.nc, { color: "textSubtle", textAlign: "right", fontSize: "12px", mb: "16px", children: L("Balance: %balance%", { balance: Object(oe.f)(i, j.decimals).toString() }) }), Object(m.jsx)(u.X, { justifyContent: "space-between", mb: "16px", children: Se.map((function(e, t) { return Object(m.jsxs)(u.r, { scale: "xs", variant: "tertiary", onClick: function() { return w(Object(oe.f)(W.times(e)).toString()) }, mr: t < Se.length - 1 ? "8px" : 0, children: [100 * e, "%"] }, e) })) }), Object(m.jsx)(u.nc, { color: "textSubtle", fontSize: "12px", mb: "24px", children: L("If you don\u2019t commit enough LP tokens, you may not receive any IFO tokens at all and will only receive a full refund of your LP tokens.") }), Object(m.jsx)(we.b, { isApproveDisabled: E || N || U, isApproving: B, isConfirmDisabled: !U || E || D.isNaN() || D.eq(0), isConfirming: N, onApprove: X, onConfirm: G })] }) }) },
                Le = function(e) { var t = e.currency,
                        n = e.onDismiss,
                        c = Object(o.b)().t; return Object(m.jsx)(u.wb, { title: c("LP Tokens required"), onDismiss: n, children: Object(m.jsxs)(u.yb, { maxWidth: "288px", children: [Object(m.jsx)(u.db, { src: "/images/farms/".concat(t.symbol.split(" ")[0].toLocaleLowerCase(), ".svg"), width: 72, height: 72, margin: "auto", mb: "24px" }), Object(m.jsx)(u.nc, { mb: "16px", children: c("You\u2019ll need CAKE-BNB LP tokens to participate in the IFO!") }), Object(m.jsx)(u.nc, { mb: "24px", children: c("Get LP tokens, or make sure your tokens aren\u2019t staked somewhere else.") }), Object(m.jsx)(u.r, { as: u.ib, external: !0, href: "".concat(P.c, "/BNB/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"), endIcon: Object(m.jsx)(u.Gb, { color: "white" }), minWidth: "100%", children: c("Get LP tokens") })] }) }) },
                De = function(e) { var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = e.walletIfoData,
                        i = c[t],
                        a = r[t],
                        s = a.isPendingTx,
                        l = a.amountTokenCommittedInLP,
                        b = i.limitPerUserInLP,
                        d = Object(o.b)().t,
                        j = Object(W.a)().toastSuccess,
                        f = Object(ve.b)(n.currency.address).balance,
                        p = function() { var e = Object(y.a)(g.a.mark((function e(t, n) { return g.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Promise.all([c.fetchIfoData(), r.fetchIfoData()]);
                                        case 2:
                                            j(d("Success!"), Object(m.jsx)(q.b, { txHash: n, children: d("You have contributed %amount% CAKE-BNB LP tokens to this IFO!", { amount: Object(oe.g)(t) }) }));
                                        case 3:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t, n) { return e.apply(this, arguments) } }(),
                        O = Object(u.Mc)(Object(m.jsx)(Ce, { poolId: t, ifo: n, publicIfoData: c, walletIfoData: r, onSuccess: p, userCurrencyBalance: f }), !1),
                        x = Object(I.a)(O, 1)[0],
                        h = Object(u.Mc)(Object(m.jsx)(Le, { currency: n.currency }), !1),
                        v = Object(I.a)(h, 1)[0],
                        w = s || b.isGreaterThan(0) && l.isGreaterThanOrEqualTo(b); return Object(m.jsx)(u.r, { onClick: f.isEqualTo(0) ? v : x, width: "100%", disabled: w, children: d(w ? "Max. Committed" : "Commit LP Tokens") }) },
                Te = function(e) { var t = e.poolId,
                        n = e.ifoVersion,
                        c = e.walletIfoData,
                        r = c[t],
                        i = Object(o.b)().t,
                        a = Object(W.a)(),
                        s = a.toastError,
                        l = a.toastSuccess,
                        b = function(e) { return c.setPendingTx(e, t) },
                        d = function() { var e = Object(y.a)(g.a.mark((function e() { var r, a, o, u, d; return g.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, b(!0), 1 !== n) { e.next = 12; break } return e.next = 5, c.contract.harvest();
                                        case 5:
                                            return a = e.sent, e.next = 8, a.wait();
                                        case 8:
                                            o = e.sent, r = o.transactionHash, e.next = 19; break;
                                        case 12:
                                            return e.next = 14, c.contract.harvestPool(t === _.d.poolBasic ? 0 : 1);
                                        case 14:
                                            return u = e.sent, e.next = 17, u.wait();
                                        case 17:
                                            d = e.sent, r = d.transactionHash;
                                        case 19:
                                            c.setIsClaimed(t), l(i("Success!"), Object(m.jsx)(q.b, { txHash: r, children: i("You have successfully claimed your rewards.") })), e.next = 27; break;
                                        case 23:
                                            e.prev = 23, e.t0 = e.catch(0), s(i("Error"), i("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0);
                                        case 27:
                                            return e.prev = 27, b(!1), e.finish(27);
                                        case 30:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 23, 27, 30]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(m.jsx)(u.r, { onClick: d, disabled: r.isPendingTx, width: "100%", isLoading: r.isPendingTx, endIcon: r.isPendingTx ? Object(m.jsx)(u.i, { spin: !0, color: "currentColor" }) : null, children: i("Claim") }) },
                Be = function(e) { var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = e.walletIfoData,
                        i = e.hasProfile,
                        a = e.isLoading,
                        s = Object(o.b)().t,
                        b = Object(F.c)().account,
                        d = r[t]; return a ? Object(m.jsx)(be, {}) : b ? i ? Object(m.jsxs)(m.Fragment, { children: ["live" === c.status && Object(m.jsx)(De, { poolId: t, ifo: n, publicIfoData: c, walletIfoData: r }), "finished" === c.status && !d.hasClaimed && (d.offeringAmountInToken.isGreaterThan(0) || d.refundingAmountInLP.isGreaterThan(0)) && Object(m.jsx)(Te, { poolId: t, ifoVersion: n.version, walletIfoData: r })] }) : Object(m.jsx)(u.r, { as: l.a, to: "/profile", width: "100%", children: s("Activate your Profile") }) : Object(m.jsx)(ge.a, { width: "100%" }) },
                Ue = function(e) { var t = e.label,
                        n = e.value; return Object(m.jsxs)(u.X, { justifyContent: "space-between", alignItems: "center", children: [Object(m.jsx)(u.nc, { small: !0, color: "textSubtle", children: t }), n ? Object(m.jsx)(u.nc, { small: !0, textAlign: "right", children: n }) : Object(m.jsx)(u.Ub, { height: 21, width: 80 })] }) },
                Ee = function(e) { var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = Object(o.b)().t,
                        i = c.status,
                        a = c.currencyPriceInUSD,
                        s = c[t],
                        l = Object(oe.g)(s.limitPerUserInLP, n.currency.decimals),
                        b = "".concat(s.taxRate, "%"),
                        d = s.totalAmountPool.div(s.raisingAmountPool).times(100).toFixed(2),
                        j = Object(oe.g)(s.totalAmountPool, n.currency.decimals),
                        f = a.times(j),
                        p = "~$".concat(Object(oe.e)(f.toNumber(), 0, 0), " (").concat(d, "%)"); return Object(m.jsx)(u.n, { paddingTop: "24px", children: "coming_soon" === i ? Object(m.jsxs)(m.Fragment, { children: [t === _.d.poolBasic && Object(m.jsx)(Ue, { label: r("Max. LP token entry"), value: l }), Object(m.jsx)(Ue, { label: r("Funds to raise:"), value: n[t].raiseAmount }), Object(m.jsx)(Ue, { label: r("CAKE to burn:"), value: n[t].cakeToBurn }), Object(m.jsx)(Ue, { label: r("Price per %symbol%:", { symbol: n.token.symbol }), value: "$".concat(n.tokenOfferingPrice) })] }) : "live" === i ? Object(m.jsxs)(m.Fragment, { children: [t === _.d.poolBasic && Object(m.jsx)(Ue, { label: r("Max. LP token entry"), value: l }), t === _.d.poolUnlimited && Object(m.jsx)(Ue, { label: r("Additional fee:"), value: b }), Object(m.jsx)(Ue, { label: r("Total committed:"), value: a.gt(0) ? p : null })] }) : "finished" === i ? Object(m.jsxs)(m.Fragment, { children: [t === _.d.poolBasic && Object(m.jsx)(Ue, { label: r("Max. LP token entry"), value: l }), t === _.d.poolUnlimited && Object(m.jsx)(Ue, { label: r("Additional fee:"), value: b }), Object(m.jsx)(Ue, { label: r("Total committed:"), value: a.gt(0) ? p : null }), Object(m.jsx)(Ue, { label: r("Funds to raise:"), value: n[t].raiseAmount }), Object(m.jsx)(Ue, { label: r("CAKE to burn:"), value: n[t].cakeToBurn }), Object(m.jsx)(Ue, { label: r("Price per %symbol%:", { symbol: n.token.symbol }), value: "$".concat(n.tokenOfferingPrice ? n.tokenOfferingPrice : "?") })] }) : Object(m.jsx)(je, {}) }) },
                Ne = (V = {}, Object(N.a)(V, _.d.poolBasic, { title: "Basic Sale", variant: "blue", tooltip: "Every person can only commit a limited amount, but may expect a higher return per token committed." }), Object(N.a)(V, _.d.poolUnlimited, { title: "Unlimited Sale", variant: "violet", tooltip: "No limits on the amount you can commit. Additional fee applies when claiming." }), V),
                Fe = function(e) { var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = e.walletIfoData,
                        i = e.onApprove,
                        a = e.enableStatus,
                        s = Object(o.b)().t,
                        l = Ne[t],
                        b = Object(re.c)(),
                        d = b.hasProfile,
                        j = b.isLoading,
                        f = Object(u.Oc)(s(l.tooltip), { placement: "bottom" }),
                        p = f.targetRef,
                        O = f.tooltip,
                        x = f.tooltipVisible,
                        h = j || "idle" === c.status; return Object(m.jsxs)(m.Fragment, { children: [x && O, Object(m.jsxs)(u.v, { children: [Object(m.jsx)(u.y, { variant: l.variant, children: Object(m.jsxs)(u.X, { justifyContent: "space-between", alignItems: "center", children: [Object(m.jsx)(u.nc, { bold: !0, fontSize: "20px", children: s(l.title) }), Object(m.jsx)("div", { ref: p, children: Object(m.jsx)(u.ab, {}) })] }) }), Object(m.jsxs)(u.w, { children: [Object(m.jsx)(he, { poolId: t, ifo: n, publicIfoData: c, walletIfoData: r, hasProfile: d, isLoading: h, onApprove: i, enableStatus: a }), Object(m.jsx)(Be, { poolId: t, ifo: n, publicIfoData: c, walletIfoData: r, hasProfile: d, isLoading: h }), Object(m.jsx)(Ee, { poolId: t, ifo: n, publicIfoData: c })] })] })] }) },
                Re = n(38),
                Xe = n(376),
                Ge = function(e) { var t = e.publicIfoData,
                        n = Object(o.b)().t,
                        c = t.status,
                        r = t.secondsUntilStart,
                        i = t.secondsUntilEnd,
                        a = t.startBlockNum,
                        s = "coming_soon" === c ? r : i,
                        l = Object(Xe.a)(s),
                        b = "coming_soon" === c ? n("Start").toLowerCase() : n("Finish").toLowerCase(); return Object(m.jsx)(u.X, { justifyContent: "center", mb: "32px", children: "idle" === c ? Object(m.jsx)(u.Ub, { animation: "pulse", variant: "rect", width: "100%", height: "48px" }) : Object(m.jsxs)(m.Fragment, { children: [Object(m.jsx)(u.Lb, { width: "48px", mr: "16px" }), Object(m.jsxs)(u.X, { alignItems: "center", children: [Object(m.jsxs)(u.nc, { bold: !0, mr: "16px", children: [b, ":"] }), Object(m.jsx)(u.nc, { children: n("%day%d %hour%h %minute%m", { day: l.days, hour: l.hours, minute: l.minutes }) }), Object(m.jsx)(u.ib, { href: Object(Re.e)(a, "countdown"), target: "blank", rel: "noopener noreferrer", ml: "8px", textTransform: "lowercase", children: "(".concat(n("Blocks"), ")") })] })] }) }) },
                _e = T.b,
                We = Object(j.e)(u.X)(Y || (Y = Object(d.a)(["\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  ", " {\n    flex-direction: row;\n    align-items: initial;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                qe = Object(j.e)(u.X)(z || (z = Object(d.a)(["\n  ", ";\n"])), (function(e) { return e.isFinished ? "filter: grayscale(100%)" : "" })),
                Ve = Object(j.e)(u.jb)(H || (H = Object(d.a)(["\n  margin-top: 32px;\n  ", " {\n    margin-top: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Ye = function(e) { var t, n = e.ifo,
                        c = e.publicIfoData,
                        r = Object(o.b)().t,
                        i = null === (t = n.token.symbol) || void 0 === t ? void 0 : t.toLowerCase(),
                        a = n.name,
                        s = _e.div(c.currencyPriceInUSD).toNumber(); return Object(m.jsxs)(We, { children: [Object(m.jsxs)(qe, { isFinished: "finished" === c.status, alignItems: "center", flexGrow: 1, children: [Object(m.jsx)(u.db, { src: "/images/achievements/ifo-".concat(i, ".svg"), width: 56, height: 56, mr: "8px" }), Object(m.jsxs)(u.X, { flexDirection: "column", children: [Object(m.jsx)(u.nc, { color: "secondary", fontSize: "12px", children: "".concat(r("Achievement"), ":") }), Object(m.jsxs)(u.X, { children: [Object(m.jsx)(u.nc, { bold: !0, mr: "8px", children: r("IFO Shopper: %title%", { title: a }) }), Object(m.jsxs)(u.X, { alignItems: "center", mr: "8px", children: [Object(m.jsx)(u.Nb, { color: "textSubtle", width: "16px", mr: "4px" }), Object(m.jsx)(u.nc, { color: "textSubtle", children: c.numberPoints })] })] }), c.currencyPriceInUSD.gt(0) ? Object(m.jsx)(u.nc, { color: "textSubtle", fontSize: "12px", children: r("Commit ~%amount% LP in total to earn!", { amount: s.toFixed(3) }) }) : Object(m.jsx)(u.Ub, { minHeight: 18, width: 80 })] })] }), Object(m.jsxs)(u.X, { alignItems: "flex-end", flexDirection: "column", children: [Object(m.jsx)(Ve, { href: n.articleUrl, mb: "8px", children: r("Learn more about %title%", { title: a }) }), Object(m.jsx)(Ve, { href: Object(Re.e)(n.address, "address"), children: r("View Contract") })] })] }) },
                ze = function(e, t) { var n = Object(Pe.a)().callWithGasPrice; return Object(a.useCallback)(Object(y.a)(g.a.mark((function c() { var r; return g.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return c.next = 2, n(e, "approve", [t, ye.a.constants.MaxUint256]);
                                case 2:
                                    return r = c.sent, c.abrupt("return", r.wait());
                                case 4:
                                case "end":
                                    return c.stop() } }), c) }))), [t, e, n]) },
                He = Object(j.e)(u.v)(K || (K = Object(d.a)(["\n  max-width: 736px;\n  width: 100%;\n  margin: auto;\n"]))),
                Ke = Object(j.e)(u.y)(Q || (Q = Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 112px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-image: ", ";\n"])), (function(e) { var t = e.ifoId; return "url('/images/ifos/".concat(t, "-bg.svg')") })),
                Qe = j.e.div(M || (M = Object(d.a)(["\n  display: ", ";\n  background: ", ";\n"])), (function(e) { return e.isVisible ? "block" : "none" }), (function(e) { var t = e.isActive,
                        n = e.theme; return t ? n.colors.gradients.bubblegum : n.colors.dropdown })),
                Me = j.e.div(Z || (Z = Object(d.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-bottom: 32px;\n  ", " {\n    grid-template-columns: ", ";\n    justify-items: ", ";\n  }\n"])), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.singleCard ? "1fr" : "1fr 1fr" }), (function(e) { return e.singleCard ? "center" : "unset" })),
                Ze = Object(j.e)(u.w)(J || (J = Object(d.a)(["\n  padding: 24px 16px;\n  ", " {\n    padding: 24px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Je = Object(j.e)(u.x)($ || ($ = Object(d.a)(["\n  text-align: center;\n  padding: 8px;\n  background: ", ";\n"])), (function(e) { return e.theme.colors.backgroundAlt })),
                $e = function(e) { var t = e.ifo,
                        n = e.publicIfoData,
                        c = e.walletIfoData,
                        r = e.isInitiallyVisible,
                        s = Object(a.useState)(r),
                        l = Object(I.a)(s, 2),
                        b = l[0],
                        d = l[1],
                        j = Object(a.useState)(i.DISABLED),
                        f = Object(I.a)(j, 2),
                        p = f[0],
                        O = f[1],
                        x = Object(o.b)().t,
                        h = Object(F.c)().account,
                        v = Object(R.h)(t.currency.address),
                        w = function(e, t, n) { return "coming_soon" === t ? Object(m.jsx)(u.z, { variantColor: "textDisabled", ribbonPosition: "left", text: n("Coming Soon") }) : "live" === t || "finished" === t && e.isActive ? Object(m.jsx)(u.z, { variantColor: "primary", ribbonPosition: "left", style: { textTransform: "uppercase" }, text: "".concat(n("live" === t ? "Live" : "Finished"), "!") }) : null }(t, n.status, x),
                        P = "finished" !== n.status && t.isActive,
                        S = c.contract,
                        A = ze(v, S.address),
                        C = Object(W.a)().toastSuccess,
                        L = function() { var e = Object(y.a)(g.a.mark((function e() { var n; return g.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, O(i.IS_ENABLING), e.next = 4, A();
                                        case 4:
                                            n = e.sent, O(i.ENABLED), C(x("Successfully Enabled!"), Object(m.jsx)(q.b, { txHash: n.transactionHash, children: x("You can now participate in the %symbol% IFO.", { symbol: t.token.symbol }) })), e.next = 12; break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), O(i.DISABLED);
                                        case 12:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 9]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(a.useEffect)((function() { h && function() { var e = Object(y.a)(g.a.mark((function e() { var t, n; return g.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, v.allowance(h, S.address);
                                        case 3:
                                            t = e.sent, n = new k.a(t.toString()), O(n.lte(0) ? i.DISABLED : i.ENABLED), e.next = 11; break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), O(i.DISABLED);
                                        case 11:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 8]
                                ]) }))); return function() { return e.apply(this, arguments) } }()() }), [h, v, S, O]), Object(m.jsxs)(He, { ribbon: w, children: [Object(m.jsx)(Ke, { ifoId: t.id, children: Object(m.jsx)(u.U, { expanded: b, onClick: function() { return d((function(e) { return !e })) } }) }), Object(m.jsxs)(Qe, { isVisible: b, isActive: "idle" !== n.status && P, children: [P && Object(m.jsx)(u.Pb, { variant: "flat", primaryStep: n.progress }), Object(m.jsxs)(Ze, { children: [P && Object(m.jsx)(Ge, { publicIfoData: n }), Object(m.jsxs)(Me, { singleCard: !n.poolBasic || !c.poolBasic, children: [n.poolBasic && c.poolBasic && Object(m.jsx)(Fe, { poolId: _.d.poolBasic, ifo: t, publicIfoData: n, walletIfoData: c, onApprove: L, enableStatus: p }), Object(m.jsx)(Fe, { poolId: _.d.poolUnlimited, ifo: t, publicIfoData: n, walletIfoData: c, onApprove: L, enableStatus: p })] }), Object(m.jsx)(Ye, { ifo: t, publicIfoData: n })] }), Object(m.jsx)(Je, { children: Object(m.jsx)(u.r, { variant: "text", endIcon: Object(m.jsx)(u.K, { color: "primary" }), onClick: function() { return d(!1) }, children: x("Close") }) })] })] }) },
                et = j.e.div(ee || (ee = Object(d.a)(["\n  display: grid;\n  grid-gap: 32px;\n  padding: 40px 0;\n  border-top: 2px solid ", ";\n"])), (function(e) { return e.theme.colors.textSubtle })),
                tt = n(862),
                nt = n.n(tt),
                ct = Object(j.e)(b.a)(te || (te = Object(d.a)(["\n  background: ", ";\n  margin-left: -16px;\n  margin-right: -16px;\n  padding-top: 48px;\n  padding-bottom: 48px;\n\n  ", " {\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n"])), (function(e) { return e.theme.colors.gradients.bubblegum }), (function(e) { return e.theme.mediaQueries.sm })),
                rt = function(e) { var t = e.ifo,
                        n = e.walletIfoData,
                        c = n.poolBasic,
                        r = n.poolUnlimited,
                        i = Object(re.c)().hasProfile,
                        a = Object(o.b)().t,
                        s = [i, Object(ve.b)(t.currency.address).balance.isGreaterThan(0), c.amountTokenCommittedInLP.isGreaterThan(0) || r.amountTokenCommittedInLP.isGreaterThan(0), c.hasClaimed || r.hasClaimed],
                        l = function(e) { var t = 0 === e || nt()(s.slice(0, e), Boolean); return s[e] ? t ? "past" : "future" : t ? "current" : "future" },
                        b = function(e) { var t = s[e]; switch (e) {
                                case 0:
                                    return Object(m.jsxs)(u.w, { children: [Object(m.jsx)(u.Z, { as: "h4", color: "secondary", mb: "16px", children: a("Activate your Profile") }), Object(m.jsx)(u.nc, { color: "textSubtle", small: !0, mb: "16px", children: a("You\u2019ll need an active PancakeSwap Profile to take part in an IFO!") }), t ? Object(m.jsx)(u.nc, { color: "success", bold: !0, children: a("Profile Active!") }) : Object(m.jsx)(u.r, { as: u.ib, href: "/profile", children: a("Activate your Profile") })] });
                                case 1:
                                    return Object(m.jsxs)(u.w, { children: [Object(m.jsx)(u.Z, { as: "h4", color: "secondary", mb: "16px", children: a("Get CAKE-BNB LP Tokens") }), Object(m.jsxs)(u.nc, { color: "textSubtle", small: !0, children: [a("Stake CAKE and BNB in the liquidity pool to get LP tokens."), " ", Object(m.jsx)("br", {}), a("You\u2019ll spend them to buy IFO sale tokens.")] }), Object(m.jsx)(u.r, { as: u.ib, external: !0, href: "".concat(P.c, "/BNB/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"), endIcon: Object(m.jsx)(u.Gb, { color: "white" }), mt: "16px", children: a("Get LP tokens") })] });
                                case 2:
                                    return Object(m.jsxs)(u.w, { children: [Object(m.jsx)(u.Z, { as: "h4", color: "secondary", mb: "16px", children: a("Commit LP Tokens") }), Object(m.jsxs)(u.nc, { color: "textSubtle", small: !0, children: [a("When the IFO sales are live, you can \u201ccommit\u201d your LP tokens to buy the tokens being sold."), " ", Object(m.jsx)("br", {}), a("We recommend committing to the Basic Sale first, but you can do both if you like.")] })] });
                                case 3:
                                    return Object(m.jsxs)(u.w, { children: [Object(m.jsx)(u.Z, { as: "h4", color: "secondary", mb: "16px", children: a("Claim your tokens and achievement") }), Object(m.jsx)(u.nc, { color: "textSubtle", small: !0, children: a("After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE-BNB LP tokens will be returned to your wallet.") })] });
                                default:
                                    return null } }; return Object(m.jsxs)(ct, { children: [Object(m.jsx)(u.Z, { as: "h2", scale: "xl", color: "secondary", mb: "24px", textAlign: "center", children: a("How to Take Part") }), Object(m.jsx)(u.bc, { children: s.map((function(e, t) { return Object(m.jsx)(u.ac, { index: t, status: l(t), children: Object(m.jsx)(u.v, { children: b(t) }) }, t) })) })] }) },
                it = n(840),
                at = [{ title: "What\u2019s the difference between a Basic Sale and Unlimited Sale?", description: ["In the Basic Sale, every user can commit a maximum of about 100 USD worth of CAKE-BNB LP Tokens. We calculate the maximum LP amount about 30 minutes before each IFO. The Basic Sale has no participation fee.", "In the Unlimited Sale, there\u2019s no limit to the amount of CAKE-BNB LP Tokens you can commit. However, there\u2019s a fee for participation: see below."] }, { title: "Which sale should I commit to? Can I do both?", description: ["You can choose one or both at the same time! If you\u2019re only committing a small amount, we recommend the Basic Sale first. Just remember you need a PancakeSwap Profile in order to participate."] }, { title: "How much is the participation fee?", description: ["There\u2019s only a participation fee for the Unlimited Sale: there\u2019s no fee for the Basic Sale.", "The fee will start at 1%.", "The 1% participation fee decreases in cliffs, based on the percentage of overflow from the \u201cUnlimited\u201d portion of the sale."] }, { title: "Where does the participation fee go?", description: ["We burn it. The CAKE-BNB LP tokens from the participation fee will be decomposed. We will then use the BNB portion to market buy the CAKE equivalent, and finally throw all of the CAKE into the weekly token burn."] }, { title: "How can I get an achievement for participating in the IFO?", description: ["You need to contribute a minimum of about 10 USD worth of CAKE-BNB LP Tokens to either sale.", "You can contribute to one or both, it doesn\u2019t matter: only your overall contribution is counted for the achievement."] }],
                ot = j.e.div(ne || (ne = Object(d.a)(["\n  flex: none;\n  order: 2;\n  max-width: 414px;\n  width: 100%;\n\n  ", " {\n    order: 1;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                st = j.e.div(ce || (ce = Object(d.a)(["\n  order: 1;\n  margin-bottom: 40px;\n\n  ", " {\n    order: 2;\n    margin-bottom: 0;\n    margin-left: 40px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                lt = function() { var e = Object(o.b)().t; return Object(m.jsxs)(u.X, { alignItems: ["center", null, null, "start"], flexDirection: ["column", null, null, "row"], children: [Object(m.jsx)(ot, { children: Object(m.jsx)("img", { src: "/images/ifos/ifo-bunny.png", alt: "ifo bunny", width: "414px", height: "500px" }) }), Object(m.jsx)(st, { children: Object(m.jsxs)(u.v, { children: [Object(m.jsx)(u.y, { children: Object(m.jsx)(u.Z, { scale: "lg", color: "secondary", children: e("Details") }) }), Object(m.jsx)(u.w, { children: at.map((function(t, n, c) { var r = t.title,
                                            i = t.description,
                                            a = c.length; return Object(m.jsx)(it.a, { id: r, mb: n + 1 === a ? "" : "24px", title: e(r), children: i.map((function(t) { return Object(m.jsx)(u.nc, { color: "textSubtle", as: "p", children: e(t) }, t) })) }, r) })) })] }) })] }) },
                ut = x.x.find((function(e) { return e.isActive })),
                bt = function() { var e = E(ut),
                        t = G(ut); return Object(m.jsxs)(et, { id: "current-ifo", children: [Object(m.jsx)($e, { ifo: ut, publicIfoData: e, walletIfoData: t, isInitiallyVisible: !0 }), Object(m.jsx)(rt, { ifo: ut, walletIfoData: t }), Object(m.jsx)(lt, {})] }) },
                dt = function(e) { var t = e.ifo,
                        n = e.isInitiallyVisible,
                        c = E(t),
                        r = G(t); return Object(m.jsx)($e, { ifo: t, publicIfoData: c, walletIfoData: r, isInitiallyVisible: n }) },
                jt = n(386),
                mt = function(e) { var t = e.address,
                        n = e.releaseBlockNumber,
                        c = Object(A.c)(e.currency.symbol),
                        r = Object(a.useState)(Object(N.a)({ status: "idle", blocksRemaining: 0, secondsUntilStart: 0, progress: 5, secondsUntilEnd: 0, startBlockNum: 0, endBlockNum: 0, numberPoints: null }, _.d.poolUnlimited, { raisingAmountPool: T.c, totalAmountPool: T.c, offeringAmountPool: T.c, limitPerUserInLP: T.c, taxRate: 0, sumTaxesOverflow: T.c })),
                        i = Object(I.a)(r, 2),
                        o = i[0],
                        s = i[1],
                        l = Object(S.a)().currentBlock,
                        u = Object(a.useCallback)(Object(y.a)(g.a.mark((function e() { var c, r, i, a, o, u, b, d, j, m, f, p, O; return g.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c = ["startBlock", "endBlock", "raisingAmount", "totalAmount"].map((function(e) { return { address: t, name: e } })), e.next = 3, Object(L.b)(jt, c);
                                    case 3:
                                        r = e.sent, i = Object(I.a)(r, 4), a = i[0], o = i[1], u = i[2], b = i[3], d = a ? a[0].toNumber() : 0, j = o ? o[0].toNumber() : 0, m = B(l, d, j), f = j - d, p = j - l, O = l > d ? (l - d) / f * 100 : (l - n) / (d - n) * 100, s((function(e) { return Object(N.a)({ status: m, blocksRemaining: p, secondsUntilStart: (d - l) * P.h, progress: O, secondsUntilEnd: p * P.h, startBlockNum: d, endBlockNum: j, currencyPriceInUSD: null, numberPoints: null }, _.d.poolUnlimited, Object(v.a)(Object(v.a)({}, e.poolUnlimited), {}, { raisingAmountPool: u ? new k.a(u[0].toString()) : T.c, totalAmountPool: b ? new k.a(b[0].toString()) : T.c })) }));
                                    case 16:
                                    case "end":
                                        return e.stop() } }), e) }))), [t, l, n]); return Object(a.useEffect)((function() { u() }), [u]), Object(v.a)(Object(v.a)({}, o), {}, { currencyPriceInUSD: c, fetchIfoData: u }) },
                ft = function(e) { var t = Object(a.useState)(Object(N.a)({}, _.d.poolUnlimited, { amountTokenCommittedInLP: T.c, hasClaimed: !1, isPendingTx: !1, offeringAmountInToken: T.c, refundingAmountInLP: T.c, taxAmountInLP: T.c })),
                        n = Object(I.a)(t, 2),
                        c = n[0],
                        r = n[1],
                        i = e.address,
                        o = e.currency,
                        s = c.poolUnlimited,
                        l = Object(F.c)().account,
                        u = Object(R.k)(i),
                        b = Object(R.h)(o.address),
                        d = X(b, i, s.isPendingTx),
                        j = Object(a.useCallback)(Object(y.a)(g.a.mark((function e() { var t, n, c, a, o, s, u; return g.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = ["getOfferingAmount", "userInfo", "getRefundingAmount"].map((function(e) { return { address: i, name: e, params: [l] } })), e.next = 3, Object(L.b)(jt, t);
                                    case 3:
                                        n = e.sent, c = Object(I.a)(n, 3), a = c[0], o = c[1], s = c[2], u = o ? { amount: new k.a(o.amount.toString()), claimed: o.claimed } : { amount: T.c, claimed: !1 }, r((function(e) { return Object(N.a)({}, _.d.poolUnlimited, Object(v.a)(Object(v.a)({}, e.poolUnlimited), {}, { amountTokenCommittedInLP: u.amount, hasClaimed: u.claimed, offeringAmountInToken: a ? new k.a(a[0].toString()) : T.c, refundingAmountInLP: s ? new k.a(s[0].toString()) : T.c })) }));
                                    case 10:
                                    case "end":
                                        return e.stop() } }), e) }))), [l, i]); return Object(a.useEffect)((function() { l && j() }), [l, j]), Object(v.a)(Object(v.a)({}, c), {}, { allowance: d, contract: u, setPendingTx: function(e) { return r((function(t) { return Object(N.a)({}, _.d.poolUnlimited, Object(v.a)(Object(v.a)({}, t.poolUnlimited), {}, { isPendingTx: e })) })) }, setIsClaimed: function() { r((function(e) { return Object(N.a)({}, _.d.poolUnlimited, Object(v.a)(Object(v.a)({}, e.poolUnlimited), {}, { hasClaimed: !0 })) })) }, fetchIfoData: j }) },
                pt = function(e) { var t = e.ifo,
                        n = mt(t),
                        c = ft(t); return Object(m.jsx)($e, { ifo: t, publicIfoData: n, walletIfoData: c, isInitiallyVisible: !1 }) },
                Ot = x.x.filter((function(e) { return !e.isActive })),
                xt = function() { return Object(m.jsx)(et, { id: "past-ifos", children: Ot.map((function(e) { return 1 === e.version ? Object(m.jsx)(pt, { ifo: e }, e.id) : Object(m.jsx)(dt, { ifo: e, isInitiallyVisible: !1 }, e.id) })) }) };
            t.default = function() { var e = Object(o.b)().t,
                    t = Object(s.j)(),
                    n = t.path,
                    c = t.url,
                    r = t.isExact; return Object(m.jsxs)(m.Fragment, { children: [Object(m.jsx)(O, {}), Object(m.jsxs)(b.a, { children: [Object(m.jsx)(u.X, { justifyContent: "center", alignItems: "center", mb: "32px", children: Object(m.jsxs)(u.s, { activeIndex: r ? 0 : 1, scale: "sm", variant: "subtle", children: [Object(m.jsx)(u.t, { as: l.a, to: "".concat(c), children: e("Next IFO") }), Object(m.jsx)(u.t, { id: "past-ifos-button", as: l.a, to: "".concat(c, "/history"), children: e("Past IFOs") })] }) }), Object(m.jsx)(s.b, { exact: !0, path: "".concat(n), children: Object(m.jsx)(bt, {}) }), Object(m.jsx)(s.b, { path: "".concat(n, "/history"), children: Object(m.jsx)(xt, {}) })] })] }) } }, 805: function(e, t, n) { "use strict"; var c = n(3),
                r = n.n(c),
                i = n(13),
                a = n(9),
                o = n(6),
                s = n(1),
                l = n(123),
                u = n(43),
                b = n(95),
                d = n(14),
                j = { approvalState: "idle", confirmState: "idle" },
                m = function(e, t) { switch (t.type) {
                        case "requires_approval":
                            return Object(o.a)(Object(o.a)({}, e), {}, { approvalState: "success" });
                        case "approve_sending":
                            return Object(o.a)(Object(o.a)({}, e), {}, { approvalState: "loading" });
                        case "approve_receipt":
                            return Object(o.a)(Object(o.a)({}, e), {}, { approvalState: "success" });
                        case "approve_error":
                            return Object(o.a)(Object(o.a)({}, e), {}, { approvalState: "fail" });
                        case "confirm_sending":
                            return Object(o.a)(Object(o.a)({}, e), {}, { confirmState: "loading" });
                        case "confirm_receipt":
                            return Object(o.a)(Object(o.a)({}, e), {}, { confirmState: "success" });
                        case "confirm_error":
                            return Object(o.a)(Object(o.a)({}, e), {}, { confirmState: "fail" });
                        default:
                            return e } };
            t.a = function(e) { var t = e.onApprove,
                    n = e.onConfirm,
                    c = e.onRequiresApproval,
                    o = e.onSuccess,
                    f = void 0 === o ? l.noop : o,
                    p = e.onApproveSuccess,
                    O = void 0 === p ? l.noop : p,
                    x = Object(d.b)().t,
                    h = Object(u.c)().account,
                    g = Object(s.useReducer)(m, j),
                    v = Object(a.a)(g, 2),
                    y = v[0],
                    I = v[1],
                    w = Object(s.useRef)(c),
                    k = Object(b.a)().toastError; return Object(s.useEffect)((function() { h && w.current && w.current().then((function(e) { e && I({ type: "requires_approval" }) })) }), [h, w, I]), { isApproving: "loading" === y.approvalState, isApproved: "success" === y.approvalState, isConfirming: "loading" === y.confirmState, isConfirmed: "success" === y.confirmState, handleApprove: function() { var e = Object(i.a)(r.a.mark((function e() { var n, c; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t();
                                    case 3:
                                        return n = e.sent, I({ type: "approve_sending" }), e.next = 7, n.wait();
                                    case 7:
                                        (c = e.sent).status && (I({ type: "approve_receipt" }), O({ state: y, receipt: c })), e.next = 15; break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), I({ type: "approve_error" }), k(x("Error"), x("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [0, 11]
                            ]) }))); return function() { return e.apply(this, arguments) } }(), handleConfirm: function() { var e = Object(i.a)(r.a.mark((function e() { var t, c; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return I({ type: "confirm_sending" }), e.prev = 1, e.next = 4, n();
                                    case 4:
                                        return t = e.sent, e.next = 7, t.wait();
                                    case 7:
                                        (c = e.sent).status && (I({ type: "confirm_receipt" }), f({ state: y, receipt: c })), e.next = 15; break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), I({ type: "confirm_error" }), k(x("Error"), x("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [1, 11]
                            ]) }))); return function() { return e.apply(this, arguments) } }() } } }, 806: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return o })); var c, r, i, a, o, s = n(8),
                l = (n(1), n(5)),
                u = n(2),
                b = n(14),
                d = n(0);! function(e) { e.ROW = "row", e.SEQUENTIAL = "sequential" }(o || (o = {})); var j = l.e.div(c || (c = Object(s.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  ", " {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                m = Object(l.e)(u.r)(r || (r = Object(s.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                f = { width: "24px", color: "textDisabled" },
                p = Object(l.e)(u.J).attrs(f)(i || (i = Object(s.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                O = Object(l.e)(u.H).attrs(f)(a || (a = Object(s.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                x = Object(d.jsx)(u.i, { spin: !0, color: "currentColor" });
            t.b = function(e) { var t = e.isApproveDisabled,
                    n = e.isApproving,
                    c = e.isConfirming,
                    r = e.isConfirmDisabled,
                    i = e.onApprove,
                    a = e.onConfirm,
                    s = e.buttonArrangement,
                    l = void 0 === s ? o.ROW : s,
                    f = e.confirmLabel,
                    h = e.confirmId,
                    g = Object(b.b)().t,
                    v = null !== f && void 0 !== f ? f : g("Confirm"); return l === o.ROW ? Object(d.jsxs)(j, { children: [Object(d.jsx)(u.n, { children: Object(d.jsx)(m, { disabled: t, onClick: i, endIcon: n ? x : void 0, isLoading: n, children: g(n ? "Enabling" : "Enable") }) }), Object(d.jsxs)(u.X, { justifyContent: "center", children: [Object(d.jsx)(p, {}), Object(d.jsx)(O, {})] }), Object(d.jsx)(u.n, { children: Object(d.jsx)(m, { id: h, onClick: a, disabled: r, isLoading: c, endIcon: c ? x : void 0, children: c ? g("Confirming") : v }) })] }) : Object(d.jsx)(d.Fragment, { children: t ? Object(d.jsx)(u.n, { children: Object(d.jsx)(m, { id: h, onClick: a, disabled: r, isLoading: c, endIcon: c ? x : void 0, children: c ? g("Confirming") : v }) }) : Object(d.jsx)(u.n, { children: Object(d.jsx)(m, { onClick: i, endIcon: n ? x : void 0, isLoading: n, children: g(n ? "Enabling" : "Enable") }) }) }) } }, 840: function(e, t, n) { "use strict"; var c, r, i, a = n(6),
                o = n(9),
                s = n(53),
                l = n(8),
                u = n(1),
                b = n(5),
                d = n(2),
                j = n(14),
                m = n(0),
                f = ["title", "children"],
                p = Object(b.e)(d.X)(c || (c = Object(l.a)(["\n  cursor: pointer;\n"]))),
                O = Object(b.e)(d.X)(r || (r = Object(l.a)(["\n  button {\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]))),
                x = Object(b.e)(d.X)(i || (i = Object(l.a)(["\n  overflow: hidden;\n  height: ", ";\n  padding-bottom: ", ";\n  border-bottom: 1px solid ", ";\n"])), (function(e) { return e.isExpanded ? "100%" : "0px" }), (function(e) { return e.isExpanded ? "16px" : "0px" }), (function(e) { return e.theme.colors.inputSecondary }));
            t.a = function(e) { var t = e.title,
                    n = e.children,
                    c = Object(s.a)(e, f),
                    r = Object(j.b)().t,
                    i = Object(u.useState)(!1),
                    l = Object(o.a)(i, 2),
                    b = l[0],
                    h = l[1]; return Object(m.jsxs)(p, Object(a.a)(Object(a.a)({}, c), {}, { flexDirection: "column", onClick: function() { return h(!b) }, children: [Object(m.jsxs)(d.X, { justifyContent: "space-between", alignItems: "center", pb: "16px", children: [Object(m.jsx)(d.nc, { fontWeight: "bold", children: t }), Object(m.jsx)(O, { children: Object(m.jsx)(d.V, { expanded: b, onClick: function() { return h(!b) }, children: r(b ? "Hide" : "Details") }) })] }), Object(m.jsx)(x, { isExpanded: b, flexDirection: "column", children: n })] })) } }, 862: function(e, t, n) { var c = n(886),
                r = n(887),
                i = n(250),
                a = n(102),
                o = n(374);
            e.exports = function(e, t, n) { var s = a(e) ? c : r; return n && o(e, t, n) && (t = void 0), s(e, i(t, 3)) } }, 886: function(e, t) { e.exports = function(e, t) { for (var n = -1, c = null == e ? 0 : e.length; ++n < c;)
                    if (!t(e[n], n, e)) return !1;
                return !0 } }, 887: function(e, t, n) { var c = n(378);
            e.exports = function(e, t) { var n = !0; return c(e, (function(e, c, r) { return n = !!t(e, c, r) })), n } } }
]);
//# sourceMappingURL=13.9ae03cdc.chunk.js.map