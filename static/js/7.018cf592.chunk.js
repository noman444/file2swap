(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [7], { 1092: function(e, t, n) { var c = n(1093),
                r = n(1094),
                i = n(102);
            e.exports = function(e) { return (i(e) ? c : r)(e) } }, 1093: function(e, t, n) { var c = n(509),
                r = n(957);
            e.exports = function(e) { return r(c(e)) } }, 1094: function(e, t, n) { var c = n(957),
                r = n(501);
            e.exports = function(e) { return c(r(e)) } }, 1517: function(e, t, n) { "use strict";
            n.r(t); var c, r, i, a, s, o, l, u = n(1),
                b = n(79),
                j = n(43),
                d = n(189),
                p = n(375),
                O = n(188),
                x = n(23),
                f = n(62),
                m = n(400),
                h = n(8),
                v = n(5),
                g = n(2),
                C = n(14),
                y = n(3),
                w = n.n(y),
                k = n(13),
                S = n(9),
                A = n(6),
                E = n(40),
                I = n(148),
                T = Object(I.parseUnits)("1"),
                D = Object(I.parseUnits)("0.5"),
                P = ["sleepy", "dollop", "twinkle", "churro", "sunny"],
                N = n(0),
                R = T.add(D),
                X = R.mul(5),
                F = { isInitialized: !1, currentStep: 0, teamId: null, selectedNft: { nftAddress: null, tokenId: null }, userName: "", minimumCakeRequired: R, allowance: X },
                z = function(e, t) { switch (t.type) {
                        case "initialize":
                            return Object(A.a)(Object(A.a)({}, e), {}, { isInitialized: !0, currentStep: t.step });
                        case "next_step":
                            return Object(A.a)(Object(A.a)({}, e), {}, { currentStep: e.currentStep + 1 });
                        case "set_team":
                            return Object(A.a)(Object(A.a)({}, e), {}, { teamId: t.teamId });
                        case "set_selected_nft":
                            return Object(A.a)(Object(A.a)({}, e), {}, { selectedNft: { tokenId: t.tokenId, nftAddress: t.nftAddress } });
                        case "set_username":
                            return Object(A.a)(Object(A.a)({}, e), {}, { userName: t.userName });
                        default:
                            return e } },
                M = Object(u.createContext)(null),
                _ = function(e) { var t = e.children,
                        n = Object(u.useReducer)(z, F),
                        c = Object(S.a)(n, 2),
                        r = c[0],
                        i = c[1],
                        a = Object(j.c)().account;
                    Object(u.useEffect)((function() { var e = !0; return a && function() { var t = Object(k.a)(w.a.mark((function t() { var n, c; return w.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return n = Object(E.b)(), t.next = 3, n.canMint(a);
                                            case 3:
                                                c = t.sent, i({ type: "initialize", step: c ? 0 : 1 }), e && i({ type: "initialize", step: c ? 0 : 1 });
                                            case 6:
                                            case "end":
                                                return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }()(),
                            function() { e = !1 } }), [a, i]); var s = Object(u.useMemo)((function() { return { nextStep: function() { return i({ type: "next_step" }) }, setTeamId: function(e) { return i({ type: "set_team", teamId: e }) }, setSelectedNft: function(e, t) { return i({ type: "set_selected_nft", tokenId: e, nftAddress: t }) }, setUserName: function(e) { return i({ type: "set_username", userName: e }) } } }), [i]); return Object(N.jsx)(M.Provider, { value: Object(A.a)(Object(A.a)({}, r), {}, { actions: s }), children: t }) },
                L = v.e.div(c || (c = Object(h.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                W = ["Get Starter Collectible", "Set Profile Picture", "Join Team", "Set Name"],
                U = function() { var e = Object(C.b)().t,
                        t = Object(u.useContext)(M).currentStep; return Object(N.jsxs)(L, { children: [Object(N.jsx)(g.Z, { as: "h1", scale: "xxl", color: "secondary", mb: "8px", id: "profile-setup-title", children: e("Profile Setup") }), Object(N.jsx)(g.Z, { as: "h2", scale: "lg", mb: "8px", children: e("Show off your stats and collectibles with your unique profile") }), Object(N.jsx)(g.nc, { color: "textSubtle", mb: "24px", children: e("Total cost: 1.5 CAKE") }), Object(N.jsx)(g.o, { children: W.map((function(n, c) { return Object(N.jsx)(g.nc, { color: c <= t ? "text" : "textDisabled", children: e(n) }, n) })) })] }) },
                Z = n(108),
                Q = function() { var e = Object(C.b)().t; return Object(N.jsxs)("div", { children: [Object(N.jsx)(g.Z, { scale: "xl", mb: "8px", children: e("Oops!") }), Object(N.jsx)(g.nc, { as: "p", mb: "16px", children: e("Please connect your wallet to continue") }), Object(N.jsx)(Z.a, {})] }) },
                q = n(805),
                H = n(45),
                V = n(132),
                G = n(140),
                Y = n(130),
                K = n(806),
                B = n(53),
                J = ["name", "value", "isChecked", "image", "onChange", "disabled", "children"],
                $ = v.e.label(r || (r = Object(h.a)(["\n  cursor: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ", ";\n"])), (function(e) { return e.isDisabled ? "not-allowed" : "pointer" }), (function(e) { return e.isDisabled ? "0.6" : "1" })),
                ee = v.e.div(i || (i = Object(h.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]))),
                te = v.e.div(a || (a = Object(h.a)(["\n  margin-left: 16px;\n"]))),
                ne = v.e.div(s || (s = Object(h.a)(["\n  align-self: stretch;\n  background-image: url('", "');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"])), (function(e) { return e.src })),
                ce = function(e) { var t = e.name,
                        n = e.value,
                        c = e.isChecked,
                        r = void 0 !== c && c,
                        i = e.image,
                        a = e.onChange,
                        s = e.disabled,
                        o = e.children,
                        l = Object(B.a)(e, J); return Object(N.jsx)(g.v, Object(A.a)(Object(A.a)({ isSuccess: r, isDisabled: s, mb: "16px" }, l), {}, { children: Object(N.jsxs)($, { isDisabled: s, children: [Object(N.jsxs)(ee, { children: [Object(N.jsx)(g.Rb, { name: t, checked: r, value: n, onChange: function(e) { return a(e.target.value) }, disabled: s, style: { flex: "none" } }), Object(N.jsx)(te, { children: o })] }), Object(N.jsx)(ne, { src: i })] }) })) },
                re = function(e) { return Object(N.jsx)(g.r, Object(A.a)({ endIcon: Object(N.jsx)(g.f, { color: "currentColor" }) }, e)) },
                ie = function() { return Object(u.useContext)(M) },
                ae = G.a.pancake.filter((function(e) { return P.includes(e.identifier) })),
                se = function() { var e = Object(u.useState)(null),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = ie(),
                        i = r.actions,
                        a = r.minimumCakeRequired,
                        s = r.allowance,
                        o = Object(j.c)().account,
                        l = Object(H.c)(),
                        b = Object(H.a)(),
                        d = Object(C.b)().t,
                        p = Object(V.e)(),
                        O = p.balance,
                        x = p.fetchStatus === V.a.SUCCESS && O.gte(T),
                        f = Object(Y.a)().callWithGasPrice,
                        m = Object(q.a)({ onRequiresApproval: function() { var e = Object(k.a)(w.a.mark((function e() { var t; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, l.allowance(o, b.address);
                                            case 3:
                                                return t = e.sent, e.abrupt("return", t.gte(a));
                                            case 7:
                                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 10:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 7]
                                    ]) }))); return function() { return e.apply(this, arguments) } }(), onApprove: function() { return f(l, "approve", [b.address, s.toString()]) }, onConfirm: function() { return f(b, "mintNFT", [n]) }, onSuccess: function() { return i.nextStep() } }),
                        h = m.isApproving,
                        v = m.isApproved,
                        y = m.isConfirmed,
                        A = m.isConfirming,
                        E = m.handleApprove,
                        D = m.handleConfirm; return Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.nc, { fontSize: "20px", color: "textSubtle", bold: !0, children: d("Step %num%", { num: 1 }) }), Object(N.jsx)(g.Z, { as: "h3", scale: "xl", mb: "24px", children: d("Get Starter Collectible") }), Object(N.jsx)(g.nc, { as: "p", children: d("Every profile starts by making a \u201cstarter\u201d collectible (NFT).") }), Object(N.jsx)(g.nc, { as: "p", children: d("This starter will also become your first profile picture.") }), Object(N.jsx)(g.nc, { as: "p", mb: "24px", children: d("You can change your profile pic later if you get another approved Pancake Collectible.") }), Object(N.jsx)(g.v, { mb: "24px", children: Object(N.jsxs)(g.w, { children: [Object(N.jsx)(g.Z, { as: "h4", scale: "lg", mb: "8px", children: d("Choose your Starter!") }), Object(N.jsx)(g.nc, { as: "p", color: "textSubtle", children: d("Choose wisely: you can only ever make one starter collectible!") }), Object(N.jsx)(g.nc, { as: "p", mb: "24px", color: "textSubtle", children: d("Cost: %num% CAKE", { num: Object(I.formatUnits)(T) }) }), ae.map((function(e) { return Object(N.jsx)(ce, { name: "mintStarter", value: e.id, image: "/images/nfts/".concat(e.images.md), isChecked: n === e.id, onChange: function(e) { return c(Number(e)) }, disabled: h || A || y || !x, children: Object(N.jsx)(g.nc, { bold: !0, children: e.name }) }, e.identifier) })), !x && Object(N.jsx)(g.nc, { color: "failure", mb: "16px", children: d("A minimum of %num% CAKE is required", { num: Object(I.formatUnits)(T) }) }), Object(N.jsx)(K.b, { isApproveDisabled: null === n || y || A || v, isApproving: h, isConfirmDisabled: !v || y || !x, isConfirming: A, onApprove: E, onConfirm: D })] }) }), Object(N.jsx)(re, { onClick: i.nextStep, disabled: !y, children: d("Next Step") })] }) },
                oe = n(86),
                le = n(227),
                ue = n(36),
                be = n(842),
                je = n(95),
                de = Object(v.e)(oe.a)(o || (o = Object(h.a)(["\n  color: ", ";\n"])), (function(e) { return e.theme.colors.primary })),
                pe = v.e.div(l || (l = Object(h.a)(["\n  margin-bottom: 24px;\n"]))),
                Oe = function() { var e = Object(j.c)().library,
                        t = Object(u.useState)(!1),
                        n = Object(S.a)(t, 2),
                        c = n[0],
                        r = n[1],
                        i = Object(u.useState)(!1),
                        a = Object(S.a)(i, 2),
                        s = a[0],
                        o = a[1],
                        l = Object(u.useContext)(M),
                        b = l.selectedNft,
                        d = l.actions,
                        p = Object(C.b)().t,
                        O = Object(be.a)(),
                        x = O.isLoading,
                        f = O.nftsInWallet,
                        m = O.tokenIds,
                        h = Object(je.a)().toastError,
                        v = Object(Y.a)().callWithGasPrice,
                        y = function() { var t = Object(k.a)(w.a.mark((function t() { var n, c; return w.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = Object(E.l)(b.nftAddress, e.getSigner()), t.next = 3, v(n, "approve", [Object(ue.o)(), b.tokenId]);
                                        case 3:
                                            return c = t.sent, o(!0), t.next = 7, c.wait();
                                        case 7:
                                            t.sent.status ? (o(!1), r(!0)) : (h(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), o(!1));
                                        case 9:
                                        case "end":
                                            return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }(); return x || 0 !== f.length ? Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.nc, { fontSize: "20px", color: "textSubtle", bold: !0, children: p("Step %num%", { num: 2 }) }), Object(N.jsx)(g.Z, { as: "h3", scale: "xl", mb: "24px", children: p("Set Profile Picture") }), Object(N.jsx)(g.v, { mb: "24px", children: Object(N.jsxs)(g.w, { children: [Object(N.jsx)(g.Z, { as: "h4", scale: "lg", mb: "8px", children: p("Choose collectible") }), Object(N.jsx)(g.nc, { as: "p", color: "textSubtle", children: p("Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.") }), Object(N.jsxs)(g.nc, { as: "p", color: "textSubtle", mb: "24px", children: [p("Only approved Pancake Collectibles can be used."), Object(N.jsx)(de, { to: "/collectibles", style: { marginLeft: "4px" }, children: p("See the list >") })] }), Object(N.jsx)(pe, { children: x ? Object(N.jsx)(g.Ub, { height: "80px", mb: "16px" }) : f.map((function(e) { var t = Object(S.a)(m[e.identifier], 1)[0],
                                            n = Object(le.a)(); return Object(N.jsx)(ce, { name: "profilePicture", value: t, image: "/images/nfts/".concat(e.images.md), isChecked: t === b.tokenId, onChange: function(e) { return d.setSelectedNft(parseInt(e, 10), n) }, children: Object(N.jsx)(g.nc, { bold: !0, children: e.name }) }, e.identifier) })) }), Object(N.jsx)(g.Z, { as: "h4", scale: "lg", mb: "8px", children: p("Allow collectible to be locked") }), Object(N.jsx)(g.nc, { as: "p", color: "textSubtle", mb: "16px", children: p("The collectible you've chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don't worry - you'll be able to get it back at any time.") }), Object(N.jsx)(g.r, { isLoading: s, disabled: c || s || null === b.tokenId, onClick: y, endIcon: s ? Object(N.jsx)(g.i, { spin: !0, color: "currentColor" }) : void 0, id: "approveStarterCollectible", children: p("Enable") })] }) }), Object(N.jsx)(re, { onClick: d.nextStep, disabled: null === b.tokenId || !c || s, children: p("Next Step") })] }) : Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.Z, { scale: "xl", mb: "24px", children: p("Oops!") }), Object(N.jsx)(g.nc, { bold: !0, fontSize: "20px", mb: "24px", children: p("We couldn\u2019t find any Pancake Collectibles in your wallet.") }), Object(N.jsx)(g.nc, { as: "p", children: p("You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.") })] }) },
                xe = n(1092),
                fe = n.n(xe),
                me = n(843),
                he = function() { var e = ie(),
                        t = e.teamId,
                        n = e.actions,
                        c = Object(C.b)().t,
                        r = Object(me.b)().teams,
                        i = function(e) { return n.setTeamId(parseInt(e, 10)) },
                        a = Object(u.useMemo)((function() { return fe()(Object.values(r)) }), [r]); return Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.nc, { fontSize: "20px", color: "textSubtle", bold: !0, children: c("Step %num%", { num: 3 }) }), Object(N.jsx)(g.Z, { as: "h3", scale: "xl", mb: "24px", children: c("Join a Team") }), Object(N.jsx)(g.nc, { as: "p", mb: "24px", children: c("It won\u2019t be possible to undo the choice you make for the foreseeable future!") }), Object(N.jsx)(g.v, { mb: "24px", children: Object(N.jsxs)(g.w, { children: [Object(N.jsx)(g.Z, { as: "h4", scale: "lg", mb: "8px", children: c("Join a Team") }), Object(N.jsx)(g.nc, { as: "p", color: "textSubtle", mb: "24px", children: c("There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!") }), a && a.map((function(e) { return Object(N.jsxs)(ce, { name: "teams-selection", value: e.id, isChecked: t === e.id, image: "/images/teams/".concat(e.images.md), onChange: i, disabled: !e.isJoinable, children: [Object(N.jsx)(g.nc, { bold: !0, children: e.name }), Object(N.jsxs)(g.X, { children: [Object(N.jsx)(g.O, { mr: "8px" }), Object(N.jsx)(g.nc, { children: e.users.toLocaleString() })] })] }, e.name) }))] }) }), Object(N.jsx)(re, { onClick: n.nextStep, disabled: null === t, children: c("Next Step") })] }) },
                ve = n(863),
                ge = n(21),
                Ce = n(514),
                ye = n(16),
                we = n(515),
                ke = n(516);

            function Se(e) { Object(ye.a)(1, arguments); var t = Object(ge.default)(e); return Object(we.default)(t).getTime() === Object(ke.default)(t).getTime() }

            function Ae(e, t) { Object(ye.a)(2, arguments); var n, c = Object(ge.default)(e),
                    r = Object(ge.default)(t),
                    i = Object(ve.a)(c, r),
                    a = Math.abs(Object(Ce.default)(c, r)); if (a < 1) n = 0;
                else { 1 === c.getMonth() && c.getDate() > 27 && c.setDate(30), c.setMonth(c.getMonth() - i * a); var s = Object(ve.a)(c, r) === -i;
                    Se(Object(ge.default)(e)) && 1 === a && 1 === Object(ve.a)(e, r) && (s = !1), n = i * (a - Number(s)) } return 0 === n ? 0 : n } var Ee = n(956),
                Ie = n(271),
                Te = n(889),
                De = n(141),
                Pe = 1440,
                Ne = 43200;

            function Re(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(ye.a)(2, arguments); var c = n.locale || Ie.a; if (!c.formatDistance) throw new RangeError("locale must contain formatDistance property"); var r = Object(ve.a)(e, t); if (isNaN(r)) throw new RangeError("Invalid time value"); var i, a, s = Object(Te.a)(n);
                s.addSuffix = Boolean(n.addSuffix), s.comparison = r, r > 0 ? (i = Object(ge.default)(t), a = Object(ge.default)(e)) : (i = Object(ge.default)(e), a = Object(ge.default)(t)); var o, l = Object(Ee.a)(a, i),
                    u = (Object(De.a)(a) - Object(De.a)(i)) / 1e3,
                    b = Math.round((l - u) / 60); if (b < 2) return n.includeSeconds ? l < 5 ? c.formatDistance("lessThanXSeconds", 5, s) : l < 10 ? c.formatDistance("lessThanXSeconds", 10, s) : l < 20 ? c.formatDistance("lessThanXSeconds", 20, s) : l < 40 ? c.formatDistance("halfAMinute", null, s) : l < 60 ? c.formatDistance("lessThanXMinutes", 1, s) : c.formatDistance("xMinutes", 1, s) : 0 === b ? c.formatDistance("lessThanXMinutes", 1, s) : c.formatDistance("xMinutes", b, s); if (b < 45) return c.formatDistance("xMinutes", b, s); if (b < 90) return c.formatDistance("aboutXHours", 1, s); if (b < Pe) { var j = Math.round(b / 60); return c.formatDistance("aboutXHours", j, s) } if (b < 2520) return c.formatDistance("xDays", 1, s); if (b < Ne) { var d = Math.round(b / Pe); return c.formatDistance("xDays", d, s) } if (b < 86400) return o = Math.round(b / Ne), c.formatDistance("aboutXMonths", o, s); if ((o = Ae(a, i)) < 12) { var p = Math.round(b / Ne); return c.formatDistance("xMonths", p, s) } var O = o % 12,
                    x = Math.floor(o / 12); return O < 3 ? c.formatDistance("aboutXYears", x, s) : O < 9 ? c.formatDistance("overXYears", x, s) : c.formatDistance("almostXYears", x + 1, s) } var Xe, Fe, ze, Me, _e = n(748),
                Le = n(96),
                We = n(197),
                Ue = n(22),
                Ze = n(221),
                Qe = n.n(Ze),
                qe = n(124),
                He = n(99),
                Ve = function(e) { var t = e.account,
                        n = e.teamId,
                        c = e.selectedNft,
                        r = e.minimumCakeRequired,
                        i = e.allowance,
                        a = e.onDismiss,
                        s = Object(C.b)().t,
                        o = Object(H.s)(),
                        l = Object(f.b)(),
                        u = Object(je.a)().toastSuccess,
                        b = Object(H.c)(),
                        j = Object(Y.a)().callWithGasPrice,
                        d = Object(q.a)({ onRequiresApproval: function() { var e = Object(k.a)(w.a.mark((function e() { var n; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, b.allowance(t, o.address);
                                            case 3:
                                                return n = e.sent, e.abrupt("return", n.gte(r));
                                            case 7:
                                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 10:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 7]
                                    ]) }))); return function() { return e.apply(this, arguments) } }(), onApprove: function() { return j(b, "approve", [o.address, i.toJSON()]) }, onConfirm: function() { return j(o, "createProfile", [n, c.nftAddress, c.tokenId]) }, onSuccess: function() { var e = Object(k.a)(w.a.mark((function e(n) { var c; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return c = n.receipt, e.next = 3, l(Object(qe.c)(t));
                                            case 3:
                                                a(), u(s("Profile created!"), Object(N.jsx)(He.b, { txHash: c.transactionHash }));
                                            case 5:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }),
                        p = d.isApproving,
                        O = d.isApproved,
                        x = d.isConfirmed,
                        m = d.isConfirming,
                        h = d.handleApprove,
                        v = d.handleConfirm; return Object(N.jsxs)(g.wb, { title: s("Complete Profile"), onDismiss: a, children: [Object(N.jsx)(g.nc, { color: "textSubtle", mb: "8px", children: s("Submitting NFT to contract and confirming User Name and Team.") }), Object(N.jsxs)(g.X, { justifyContent: "space-between", mb: "16px", children: [Object(N.jsx)(g.nc, { children: s("Cost") }), Object(N.jsx)(g.nc, { children: s("%num% CAKE", { num: Object(I.formatUnits)(D) }) })] }), Object(N.jsx)(K.b, { isApproveDisabled: x || m || O, isApproving: p, isConfirmDisabled: !O || x, isConfirming: m, onApprove: h, onConfirm: v })] }) };! function(e) { e.IDLE = "idle", e.CREATED = "created", e.NEW = "new" }(Me || (Me = {})); var Ge, Ye = v.e.div(Xe || (Xe = Object(h.a)(["\n  position: relative;\n  max-width: 240px;\n"]))),
                Ke = Object(v.e)(g.fb)(Fe || (Fe = Object(h.a)(["\n  padding-right: 40px;\n"]))),
                Be = Object(v.e)(g.X)(ze || (ze = Object(h.a)(["\n  align-items: center;\n  height: 24px;\n  justify-content: center;\n  margin-top: -12px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  width: 24px;\n"]))),
                Je = function() { var e = Object(u.useState)(!1),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = ie(),
                        i = r.teamId,
                        a = r.selectedNft,
                        s = r.userName,
                        o = r.actions,
                        l = r.minimumCakeRequired,
                        b = r.allowance,
                        d = Object(C.b)().t,
                        p = Object(j.c)().account,
                        O = Object(je.a)().toastError,
                        x = Object(Ue.a)().library,
                        f = Object(u.useState)(Me.IDLE),
                        m = Object(S.a)(f, 2),
                        h = m[0],
                        v = m[1],
                        y = Object(u.useState)(!1),
                        A = Object(S.a)(y, 2),
                        E = A[0],
                        T = A[1],
                        P = Object(u.useState)(!1),
                        R = Object(S.a)(P, 2),
                        X = R[0],
                        F = R[1],
                        z = Object(u.useState)(""),
                        M = Object(S.a)(z, 2),
                        _ = M[0],
                        L = M[1],
                        W = Object(V.e)(),
                        U = W.balance,
                        Z = W.fetchStatus === V.a.SUCCESS && U.gte(D),
                        Q = Object(g.Mc)(Object(N.jsx)(Ve, { userName: s, selectedNft: a, account: p, teamId: i, minimumCakeRequired: l, allowance: b }), !1),
                        q = Object(S.a)(Q, 1)[0],
                        H = h === Me.CREATED,
                        G = Qe()(function() { var e = Object(k.a)(w.a.mark((function e(t) { var n, c, r; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, F(!0), e.next = 4, fetch("".concat(Le.a, "/api/users/valid/").concat(t));
                                        case 4:
                                            if (!(n = e.sent).ok) { e.next = 10; break }
                                            T(!0), L(""), e.next = 15; break;
                                        case 10:
                                            return e.next = 12, n.json();
                                        case 12:
                                            r = e.sent, T(!1), L(null === r || void 0 === r || null === (c = r.error) || void 0 === c ? void 0 : c.message);
                                        case 15:
                                            return e.prev = 15, F(!1), e.finish(15);
                                        case 18:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, , 15, 18]
                                ]) }))); return function(t) { return e.apply(this, arguments) } }(), 200),
                        Y = function() { var e = Object(k.a)(w.a.mark((function e() { var t, n, c, r; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, F(!0), e.next = 4, Object(We.c)(x, p, s);
                                        case 4:
                                            return t = e.sent, e.next = 7, fetch("".concat(Le.a, "/api/users/register"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address: p, username: s, signature: t }) });
                                        case 7:
                                            if (!(n = e.sent).ok) { e.next = 12; break }
                                            v(Me.CREATED), e.next = 16; break;
                                        case 12:
                                            return e.next = 14, n.json();
                                        case 14:
                                            r = e.sent, O(d("Error"), null === r || void 0 === r || null === (c = r.error) || void 0 === c ? void 0 : c.message);
                                        case 16:
                                            e.next = 21; break;
                                        case 18:
                                            e.prev = 18, e.t0 = e.catch(0), O((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) ? e.t0.message : JSON.stringify(e.t0));
                                        case 21:
                                            return e.prev = 21, F(!1), e.finish(21);
                                        case 24:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 18, 21, 24]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(u.useEffect)((function() { p && function() { var e = Object(k.a)(w.a.mark((function e() { var t, n, c; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, fetch("".concat(Le.a, "/api/users/").concat(p));
                                        case 3:
                                            return t = e.sent, e.next = 6, t.json();
                                        case 6:
                                            n = e.sent, t.ok ? (c = Re(Object(_e.default)(n.created_at), new Date), L(d("Created %dateCreated% ago", { dateCreated: c })), o.setUserName(n.username), v(Me.CREATED), T(!0)) : v(Me.NEW), e.next = 13; break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), O(d("Error"), d("Unable to verify username"));
                                        case 13:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 10]
                                ]) }))); return function() { return e.apply(this, arguments) } }()() }), [p, v, T, L, o, O, d]), Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.nc, { fontSize: "20px", color: "textSubtle", bold: !0, children: d("Step %num%", { num: 4 }) }), Object(N.jsx)(g.Z, { as: "h3", scale: "xl", mb: "24px", children: d("Set Your Name") }), Object(N.jsx)(g.nc, { as: "p", mb: "24px", children: d("This name will be shown in team leaderboards and search results as long as your profile is active.") }), Object(N.jsx)(g.v, { mb: "24px", children: Object(N.jsxs)(g.w, { children: [Object(N.jsx)(g.Z, { as: "h4", scale: "lg", mb: "8px", children: d("Set Your Name") }), Object(N.jsx)(g.nc, { as: "p", color: "textSubtle", mb: "24px", children: d("Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.") }), h === Me.IDLE ? Object(N.jsx)(g.Ub, { height: "40px", width: "240px" }) : Object(N.jsxs)(Ye, { children: [Object(N.jsx)(Ke, { onChange: function(e) { var t = e.target.value;
                                            o.setUserName(t), G(t) }, isWarning: s && !E, isSuccess: s && E, minLength: 3, maxLength: 15, disabled: H, placeholder: d("Enter your name..."), value: s }), Object(N.jsxs)(Be, { children: [X && Object(N.jsx)(g.i, { spin: !0 }), !X && E && s && Object(N.jsx)(g.G, { color: "success" }), !X && !E && s && Object(N.jsx)(g.Fc, { color: "failure" })] })] }), Object(N.jsx)(g.nc, { color: "textSubtle", fontSize: "14px", py: "4px", mb: "16px", style: { minHeight: "30px" }, children: _ }), Object(N.jsx)(g.nc, { as: "p", color: "failure", mb: "8px", children: d("Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.") }), Object(N.jsx)("label", { htmlFor: "checkbox", style: { display: "block", cursor: "pointer", marginBottom: "24px" }, children: Object(N.jsxs)(g.X, { alignItems: "center", children: [Object(N.jsx)("div", { style: { flex: "none" }, children: Object(N.jsx)(g.D, { id: "checkbox", scale: "sm", checked: n, onChange: function() { return c(!n) } }) }), Object(N.jsx)(g.nc, { ml: "8px", children: d("I understand that people can view my wallet if they know my username") })] }) }), Object(N.jsx)(g.r, { onClick: Y, disabled: !E || H || X || !n, children: d("Confirm") })] }) }), Object(N.jsx)(g.r, { onClick: q, disabled: !E || !H, id: "completeProfileCreation", children: d("Complete Profile") }), !Z && Object(N.jsx)(g.nc, { color: "failure", mt: "16px", children: d("A minimum of %num% CAKE is required", { num: Object(I.formatUnits)(D) }) })] }) },
                $e = function() { var e = Object(C.b)().t,
                        t = Object(u.useContext)(M),
                        n = t.isInitialized,
                        c = t.currentStep; return Object(j.c)().account ? n ? 0 === c ? Object(N.jsx)(se, {}) : 1 === c ? Object(N.jsx)(Oe, {}) : 2 === c ? Object(N.jsx)(he, {}) : 3 === c ? Object(N.jsx)(Je, {}) : null : Object(N.jsx)("div", { children: e("Loading...") }) : Object(N.jsx)(Q, {}) },
                et = function() { return Object(N.jsx)(_, { children: Object(N.jsxs)(d.b, { children: [Object(N.jsx)(U, {}), Object(N.jsx)($e, {})] }) }) },
                tt = function() { var e = Object(u.useState)(!1),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = Object(u.useState)(1),
                        i = Object(S.a)(r, 2),
                        a = i[0],
                        s = i[1],
                        o = Object(j.c)().account,
                        l = Object(u.useCallback)((function() { s((function(e) { return e + 1 })) }), [s]); return Object(u.useEffect)((function() { o && function() { var e = Object(k.a)(w.a.mark((function e() { var t, n; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(E.j)(), e.prev = 1, e.next = 4, t.canClaim(o);
                                        case 4:
                                            n = e.sent, c(n), e.next = 11; break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), console.error(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [1, 8]
                                ]) }))); return function() { return e.apply(this, arguments) } }()() }), [o, a, c]), { canClaim: n, checkClaimStatus: l } },
                nt = function(e) { var t = e.onSuccess,
                        n = e.onDismiss,
                        c = Object(u.useState)(!1),
                        r = Object(S.a)(c, 2),
                        i = r[0],
                        a = r[1],
                        s = Object(C.b)().t,
                        o = tt().canClaim,
                        l = Object(H.e)(),
                        b = Object(je.a)(),
                        j = b.toastSuccess,
                        d = b.toastError,
                        p = Object(Y.a)().callWithGasPrice,
                        O = function() { var e = Object(k.a)(w.a.mark((function e() { var c, r; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, p(l, "getCakeBack");
                                        case 2:
                                            return c = e.sent, a(!0), e.next = 6, c.wait();
                                        case 6:
                                            (r = e.sent).status ? (j(s("Success!"), Object(N.jsx)(He.b, { txHash: r.transactionHash })), t(), n()) : (a(!1), d(s("Error"), s("Please try again. Confirm the transaction and make sure you are paying enough gas!")));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(N.jsx)(g.wb, { title: s("Claim your Gift!"), onDismiss: n, children: Object(N.jsxs)("div", { style: { maxWidth: "640px" }, children: [Object(N.jsx)(g.nc, { as: "p", children: s("Thank you for being a day-one user of Pancake Profiles!") }), Object(N.jsx)(g.nc, { as: "p", mb: "8px", children: s("If you haven't already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!") }), Object(N.jsx)(g.nc, { as: "p", children: s("To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.") }), Object(N.jsx)(g.nc, { as: "p", mb: "8px", children: s("We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.") }), Object(N.jsx)(g.nc, { as: "p", mb: "24px", children: s("Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.") }), Object(N.jsx)(g.r, { endIcon: i ? Object(N.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, isLoading: i, onClick: O, disabled: !o, children: s("Claim Your CAKE") })] }) }) },
                ct = n(844),
                rt = n(19);! function(e) { e.START = "start", e.CHANGE = "change", e.REMOVE = "remove", e.APPROVE = "approve" }(Ge || (Ge = {})); var it, at, st, ot, lt, ut, bt, jt, dt, pt, Ot, xt, ft, mt, ht, vt, gt, Ct, yt, wt, kt, St, At, Et, It = function(e, t) { switch (t.type) {
                        case "set_view":
                            return Object(A.a)(Object(A.a)({}, e), {}, { currentView: t.view, previousView: e.currentView });
                        case "go_previous":
                            return Object(A.a)(Object(A.a)({}, e), {}, { currentView: e.previousView, previousView: e.currentView });
                        default:
                            return e } },
                Tt = function() { var e = Object(u.useReducer)(It, { currentView: Ge.START, previousView: null }),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        c = t[1]; return Object(A.a)(Object(A.a)({}, n), {}, { goToStart: function() { return c({ type: "set_view", view: Ge.START }) }, goToChange: function() { return c({ type: "set_view", view: Ge.CHANGE }) }, goToRemove: function() { return c({ type: "set_view", view: Ge.REMOVE }) }, goToApprove: function() { return c({ type: "set_view", view: Ge.APPROVE }) }, goPrevious: function() { return c({ type: "go_previous" }) } }) },
                Dt = n(31),
                Pt = n(56),
                Nt = n(54),
                Rt = n(275),
                Xt = function() { var e = Object(C.b)().t,
                        t = Object(u.useState)({ numberCakeToReactivate: Pt.a.BigNumber.from(0), numberCakeToRegister: Pt.a.BigNumber.from(0), numberCakeToUpdate: Pt.a.BigNumber.from(0) }),
                        n = Object(S.a)(t, 2),
                        c = n[0],
                        r = n[1],
                        i = Object(je.a)().toastError; return Object(u.useEffect)((function() {
                        (function() { var t = Object(k.a)(w.a.mark((function t() { var n, c, a, s, o, l, u, b, j; return w.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, n = ["numberCakeToReactivate", "numberCakeToRegister", "numberCakeToUpdate"].map((function(e) { return { address: Object(ue.o)(), name: e } })), t.next = 4, Object(Nt.b)(Rt, n);
                                        case 4:
                                            c = t.sent, a = Object(S.a)(c, 3), s = Object(S.a)(a[0], 1), o = s[0], l = Object(S.a)(a[1], 1), u = l[0], b = Object(S.a)(a[2], 1), j = b[0], r({ numberCakeToReactivate: o, numberCakeToRegister: u, numberCakeToUpdate: j }), t.next = 18; break;
                                        case 15:
                                            t.prev = 15, t.t0 = t.catch(0), i(e("Error"), e("Could not retrieve CAKE costs for profile"));
                                        case 18:
                                        case "end":
                                            return t.stop() } }), t, null, [
                                    [0, 15]
                                ]) }))); return function() { return t.apply(this, arguments) } })()() }), [r, i, e]), c },
                Ft = n(818),
                zt = Object(v.e)(g.r).attrs({ variant: "secondary" })(it || (it = Object(h.a)(["\n  border-color: ", ";\n  color: ", ";\n  margin-bottom: 24px;\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    border-color: ", ";\n    opacity: 0.8;\n  }\n"])), (function(e) { return e.theme.colors.failure }), (function(e) { return e.theme.colors.failure }), (function(e) { return e.theme.colors.failure })),
                Mt = v.e.div(at || (at = Object(h.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                _t = function(e) { var t = e.goToApprove,
                        n = e.goToChange,
                        c = e.goToRemove,
                        r = e.onDismiss,
                        i = Object(u.useState)(null),
                        a = Object(S.a)(i, 2),
                        s = a[0],
                        o = a[1],
                        l = Object(O.c)().profile,
                        b = Xt(),
                        d = b.numberCakeToUpdate,
                        p = b.numberCakeToReactivate,
                        x = l.isActive ? d : p,
                        f = Object(V.e)(),
                        m = f.balance,
                        h = f.fetchStatus === V.a.SUCCESS && m.gte(x),
                        v = Object(C.b)().t,
                        y = Object(j.c)().account,
                        A = Object(H.c)(),
                        E = l.isActive ? d : p; return Object(u.useEffect)((function() { y && function() { var e = Object(k.a)(w.a.mark((function e() { var t; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, A.allowance(y, Object(ue.o)());
                                        case 2:
                                            t = e.sent, o(t.lt(E));
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }()() }), [y, E, o, A]), l ? Object(N.jsxs)(g.X, { alignItems: "center", justifyContent: "center", flexDirection: "column", children: [Object(N.jsx)(Mt, { children: Object(N.jsx)(Ft.a, { profile: l }) }), Object(N.jsx)(g.X, { alignItems: "center", style: { height: "48px" }, justifyContent: "center", children: Object(N.jsx)(g.nc, { as: "p", color: "failure", children: !h && v("%minimum% CAKE required to change profile pic", { minimum: Object(Dt.a)(x) }) }) }), l.isActive ? Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.r, { width: "100%", mb: "8px", onClick: !0 === s ? t : n, disabled: !h || null === s, children: v("Change Profile Pic") }), Object(N.jsx)(zt, { width: "100%", onClick: c, children: v("Remove Profile Pic") })] }) : Object(N.jsx)(g.r, { width: "100%", mb: "8px", onClick: !0 === s ? t : n, disabled: !h || null === s, children: v("Reactivate Profile") }), Object(N.jsx)(g.r, { variant: "text", width: "100%", onClick: r, children: v("Close Window") })] }) : null },
                Lt = function(e) { var t = e.onDismiss,
                        n = Object(u.useState)(!1),
                        c = Object(S.a)(n, 2),
                        r = c[0],
                        i = c[1],
                        a = Object(u.useState)(!1),
                        s = Object(S.a)(a, 2),
                        o = s[0],
                        l = s[1],
                        b = Object(O.c)().profile,
                        d = Xt().numberCakeToReactivate,
                        p = Object(C.b)().t,
                        x = Object(H.s)(),
                        m = Object(Y.a)().callWithGasPrice,
                        h = Object(j.c)().account,
                        v = Object(je.a)(),
                        y = v.toastSuccess,
                        A = v.toastError,
                        E = Object(f.b)(),
                        I = function() { var e = Object(k.a)(w.a.mark((function e() { var n, c; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, m(x, "pauseProfile");
                                        case 2:
                                            return n = e.sent, l(!0), e.next = 6, n.wait();
                                        case 6:
                                            if (!(c = e.sent).status) { e.next = 14; break } return e.next = 10, E(Object(qe.c)(h));
                                        case 10:
                                            y(p("Profile Paused!"), Object(N.jsx)(He.b, { txHash: c.transactionHash })), t(), e.next = 16; break;
                                        case 14:
                                            A(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), l(!1);
                                        case 16:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return b ? Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.nc, { as: "p", color: "failure", mb: "24px", children: p("This will suspend your profile and send your Collectible back to your wallet") }), Object(N.jsx)(g.nc, { as: "p", color: "textSubtle", mb: "24px", children: p("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile") }), Object(N.jsx)(g.nc, { as: "p", color: "textSubtle", mb: "24px", children: p("Cost to reactivate in the future: %cost% CAKE", { cost: Object(Dt.a)(d) }) }), Object(N.jsx)("label", { htmlFor: "acknowledgement", style: { cursor: "pointer", display: "block", marginBottom: "24px" }, children: Object(N.jsxs)(g.X, { alignItems: "center", children: [Object(N.jsx)(g.D, { id: "acknowledgement", checked: r, onChange: function() { return i(!r) }, scale: "sm" }), Object(N.jsx)(g.nc, { ml: "8px", children: p("I understand") })] }) }), Object(N.jsx)(g.r, { width: "100%", isLoading: o, endIcon: o ? Object(N.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, disabled: !r || o, onClick: I, mb: "8px", children: p("Confirm") }), Object(N.jsx)(g.r, { variant: "text", width: "100%", onClick: t, children: p("Close Window") })] }) : null },
                Wt = function(e) { var t = e.onDismiss,
                        n = Object(u.useState)({ tokenId: null, nftAddress: null }),
                        c = Object(S.a)(n, 2),
                        r = c[0],
                        i = c[1],
                        a = Object(C.b)().t,
                        s = Object(be.a)(),
                        o = s.isLoading,
                        l = s.tokenIds,
                        b = s.nftsInWallet,
                        d = Object(f.b)(),
                        p = Object(O.c)().profile,
                        x = Object(H.s)(),
                        m = Object(j.c)(),
                        h = m.account,
                        v = m.library,
                        y = Object(je.a)().toastSuccess,
                        A = Object(Y.a)().callWithGasPrice,
                        I = Object(q.a)({ onApprove: function() { var e = Object(E.l)(r.nftAddress, v.getSigner()); return A(e, "approve", [Object(ue.o)(), r.tokenId]) }, onConfirm: function() { return p.isActive ? A(x, "updateProfile", [r.nftAddress, r.tokenId]) : A(x, "reactivateProfile", [r.nftAddress, r.tokenId]) }, onSuccess: function() { var e = Object(k.a)(w.a.mark((function e(n) { var c; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return c = n.receipt, e.next = 3, d(Object(qe.c)(h));
                                            case 3:
                                                y(a("Profile Updated!"), Object(N.jsx)(He.b, { txHash: c.transactionHash })), t();
                                            case 5:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }),
                        T = I.isApproving,
                        D = I.isApproved,
                        P = I.isConfirmed,
                        R = I.isConfirming,
                        X = I.handleApprove,
                        F = I.handleConfirm; return Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.nc, { as: "p", color: "textSubtle", mb: "24px", children: a("Choose a new Collectible to use as your profile pic.") }), o ? Object(N.jsx)(g.Ub, { height: "80px", mb: "16px" }) : b.map((function(e) { var t = Object(S.a)(l[e.identifier], 1)[0]; return Object(N.jsx)(ce, { name: "profilePicture", value: t, image: "/images/nfts/".concat(e.images.md), isChecked: t === r.tokenId, onChange: function(e) { i({ tokenId: Number(e), nftAddress: Object(le.a)() }) }, disabled: T || R || P, children: Object(N.jsx)(g.nc, { bold: !0, children: e.name }) }, e.identifier) })), !o && 0 === b.length && Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.nc, { as: "p", color: "textSubtle", mb: "16px", children: a("Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!") }), Object(N.jsx)(g.nc, { as: "p", color: "textSubtle", mb: "24px", children: a("Make sure you have a Pancake Collectible in your wallet and try again!") })] }), Object(N.jsx)(K.b, { isApproveDisabled: P || R || D || null === r.tokenId, isApproving: T, isConfirmDisabled: !D || P || null === r.tokenId, isConfirming: R, onApprove: X, onConfirm: F }), Object(N.jsx)(g.r, { variant: "text", width: "100%", onClick: t, disabled: T || R, children: a("Close Window") })] }) },
                Ut = function(e) { var t = e.goToChange,
                        n = e.onDismiss,
                        c = Object(u.useState)(!1),
                        r = Object(S.a)(c, 2),
                        i = r[0],
                        a = r[1],
                        s = Object(O.c)().profile,
                        o = Object(C.b)().t,
                        l = Xt(),
                        b = l.numberCakeToUpdate,
                        j = l.numberCakeToReactivate,
                        d = Object(H.c)(),
                        p = Object(je.a)().toastError,
                        x = s.isActive ? b : j,
                        f = function() { var e = Object(k.a)(w.a.mark((function e() { var n; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.approve(Object(ue.o)(), x.mul(2).toString());
                                        case 2:
                                            return n = e.sent, a(!0), e.next = 6, n.wait();
                                        case 6:
                                            e.sent.status ? t() : (p(o("Error"), o("Please try again. Confirm the transaction and make sure you are paying enough gas!")), a(!1));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return s ? Object(N.jsxs)(g.X, { flexDirection: "column", children: [Object(N.jsxs)(g.X, { alignItems: "center", justifyContent: "space-between", mb: "24px", children: [Object(N.jsx)(g.nc, { children: s.isActive ? o("Cost to update:") : o("Cost to reactivate:") }), Object(N.jsxs)(g.nc, { children: [Object(Dt.a)(x), " CAKE"] })] }), Object(N.jsx)(g.r, { disabled: i, isLoading: i, endIcon: i ? Object(N.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, width: "100%", mb: "8px", onClick: f, children: o("Enable") }), Object(N.jsx)(g.r, { variant: "text", width: "100%", onClick: n, disabled: i, children: o("Close Window") })] }) : null },
                Zt = (st = {}, Object(rt.a)(st, Ge.START, "Edit Profile"), Object(rt.a)(st, Ge.CHANGE, "Change Profile Pic"), Object(rt.a)(st, Ge.REMOVE, "Remove Profile Pic"), Object(rt.a)(st, Ge.APPROVE, "Enable CAKE"), st),
                Qt = function(e) { var t = e.onDismiss,
                        n = Tt(),
                        c = n.currentView,
                        r = n.goToChange,
                        i = n.goToRemove,
                        a = n.goToApprove,
                        s = n.goPrevious,
                        o = Object(C.b)().t,
                        l = Zt[c],
                        u = c === Ge.START,
                        b = u ? null : function() { return s() }; return Object(N.jsx)(g.wb, { title: o(l), onBack: b, onDismiss: t, hideCloseButton: !u, children: Object(N.jsxs)("div", { style: { maxWidth: "400px" }, children: [c === Ge.START && Object(N.jsx)(_t, { goToApprove: a, goToChange: r, goToRemove: i, onDismiss: t }), c === Ge.REMOVE && Object(N.jsx)(Lt, { onDismiss: t }), c === Ge.CHANGE && Object(N.jsx)(Wt, { onDismiss: t }), c === Ge.APPROVE && Object(N.jsx)(Ut, { goToChange: r, onDismiss: t })] }) }) },
                qt = function() { var e = Object(C.b)().t,
                        t = tt(),
                        n = t.canClaim,
                        c = t.checkClaimStatus,
                        r = Object(g.Mc)(Object(N.jsx)(nt, { onSuccess: c })),
                        i = Object(S.a)(r, 1)[0],
                        a = Object(g.Mc)(Object(N.jsx)(Qt, {}), !1),
                        s = Object(S.a)(a, 1)[0],
                        o = Object(O.c)().hasProfile; return Object(N.jsx)(ct.a, { children: Object(N.jsxs)(g.X, { flexDirection: ["column", null, "row"], alignItems: ["start", null, "center"], justifyContent: "space-between", children: [Object(N.jsxs)("div", { children: [Object(N.jsx)(g.Z, { as: "h1", scale: "xxl", mb: "8px", color: "secondary", children: e("Your Profile") }), Object(N.jsx)(g.Z, { as: "h2", scale: "lg", mb: "16px", children: e("Check your stats and collect achievements") }), o && Object(N.jsx)(g.r, { onClick: s, children: e("Edit Profile") })] }), n && Object(N.jsx)(g.r, { variant: "tertiary", onClick: i, startIcon: Object(N.jsx)(g.Mb, {}), children: e("You\u2019ve got a gift to claim!") })] }) }) },
                Ht = ["badge"],
                Vt = Object(v.e)(g.q)(ot || (ot = Object(h.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Gt = v.e.img(lt || (lt = Object(h.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Yt = function(e) { var t = e.badge,
                        n = Object(B.a)(e, Ht); return t ? Object(N.jsx)(Gt, Object(A.a)({ src: "/images/achievements/".concat(t), alt: "achievement badge" }, n)) : Object(N.jsx)(Vt, {}) },
                Kt = ["title"],
                Bt = function(e) { var t = e.title,
                        n = Object(B.a)(e, Kt),
                        c = Object(C.b)().t; if ("string" === typeof t) return Object(N.jsx)(g.nc, Object(A.a)(Object(A.a)({ bold: !0 }, n), {}, { children: t })); var r = t.key,
                        i = t.data,
                        a = void 0 === i ? {} : i; return Object(N.jsx)(g.nc, Object(A.a)(Object(A.a)({ bold: !0 }, n), {}, { children: c(r, a) })) },
                Jt = ["description"],
                $t = Object(v.e)(g.nc).attrs({ as: "p", fontSize: "14px" })(ut || (ut = Object(h.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                en = function(e) { var t = e.description,
                        n = Object(B.a)(e, Jt),
                        c = Object(C.b)().t; if (!t) return null; if ("string" === typeof t) return Object(N.jsx)(g.nc, Object(A.a)(Object(A.a)({ as: "p", color: "textSubtle", fontSize: "14px" }, n), {}, { children: t })); var r = t.key,
                        i = t.data,
                        a = void 0 === i ? {} : i; return Object(N.jsx)($t, Object(A.a)(Object(A.a)({ color: "textSubtle" }, n), {}, { children: c(r, a) })) },
                tn = Object(v.e)(g.X)(bt || (bt = Object(h.a)(["\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 8px;\n  padding-right: 8px;\n"]))),
                nn = function(e) { var t = e.achievement; return Object(N.jsxs)(g.X, { children: [Object(N.jsx)(Yt, { badge: t.badge }), Object(N.jsxs)(tn, { children: [Object(N.jsx)(Bt, { title: t.title }), Object(N.jsx)(en, { description: t.description })] }), Object(N.jsxs)(g.X, { alignItems: "center", children: [Object(N.jsx)(g.Nb, { width: "18px", color: "textSubtle", mr: "4px" }), Object(N.jsx)(g.nc, { color: "textSubtle", children: t.points.toLocaleString() })] })] }) },
                cn = v.e.div(jt || (jt = Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                rn = function() { var e = Object(C.b)().t,
                        t = Object(x.c)((function(e) { return e.achievements.data })); return Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(cn, { children: t.map((function(e) { return Object(N.jsx)(nn, { achievement: e }, e.id) })) }), 0 === t.length && Object(N.jsx)(g.X, { alignItems: "center", justifyContent: "center", style: { height: "64px" }, children: Object(N.jsx)(g.Z, { as: "h5", scale: "md", color: "textDisabled", children: e("No achievements yet!") }) })] }) },
                an = n(123),
                sn = n(349),
                on = v.e.div(dt || (dt = Object(h.a)(["\n  flex: none;\n  width: 100%;\n\n  ", " {\n    max-width: 160px;\n\n    & > button {\n      width: 100%;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ln = ["points"],
                un = function(e) { var t = e.points,
                        n = Object(B.a)(e, ln),
                        c = Object(C.b)().t,
                        r = t.toLocaleString(); return Object(N.jsxs)(g.X, Object(A.a)(Object(A.a)({ alignItems: "center" }, n), {}, { children: [Object(N.jsx)(g.Nb, { mr: "4px", color: "textSubtle" }), Object(N.jsx)(g.nc, { color: "textSubtle", children: c("%num% points", { num: r }) })] })) },
                bn = Object(v.e)(g.X)(pt || (pt = Object(h.a)(["\n  border-bottom: 1px solid ", ";\n  padding-bottom: 16px;\n  padding-top: 16px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                jn = v.e.div(Ot || (Ot = Object(h.a)(["\n  flex: 1;\n"]))),
                dn = Object(v.e)(g.X)(xt || (xt = Object(h.a)(["\n  flex-direction: column;\n  flex: 1;\n  margin-left: 8px;\n\n  ", " {\n    align-items: center;\n    flex-direction: row;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                pn = function(e) { var t = e.achievement,
                        n = e.onCollectSuccess,
                        c = Object(u.useState)(!1),
                        r = Object(S.a)(c, 2),
                        i = r[0],
                        a = r[1],
                        s = Object(C.b)().t,
                        o = Object(H.q)(),
                        l = Object(je.a)(),
                        b = l.toastError,
                        j = l.toastSuccess,
                        d = Object(Y.a)().callWithGasPrice,
                        p = function() { var e = Object(k.a)(w.a.mark((function e() { var c, r; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d(o, "getPoints", [t.address]);
                                        case 2:
                                            return c = e.sent, a(!0), e.next = 6, c.wait();
                                        case 6:
                                            (r = e.sent).status ? (a(!1), n(t), j(s("Points Collected!"), Object(N.jsx)(He.b, { txHash: r.transactionHash }))) : (b(s("Error"), s("Please try again. Confirm the transaction and make sure you are paying enough gas!")), a(!1));
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(); return Object(N.jsxs)(bn, { children: [Object(N.jsx)(Yt, { badge: t.badge }), Object(N.jsxs)(dn, { children: [Object(N.jsxs)(jn, { children: [Object(N.jsx)(Bt, { title: t.title }), Object(N.jsx)(en, { description: t.description })] }), Object(N.jsx)(un, { points: t.points, px: [0, null, null, "32px"], mb: ["16px", null, null, 0] }), Object(N.jsx)(on, { children: Object(N.jsx)(g.r, { onClick: p, isLoading: i, endIcon: i ? Object(N.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, disabled: i, variant: "secondary", children: s("Collect") }) })] })] }) },
                On = function() { var e = Object(u.useState)([]),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        r = Object(C.b)().t,
                        i = Object(f.b)(),
                        a = Object(O.c)().profile,
                        s = Object(j.c)().account;
                    Object(u.useEffect)((function() { s && function() { var e = Object(k.a)(w.a.mark((function e() { var t; return w.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(sn.c)(s);
                                        case 2:
                                            t = e.sent, c(t);
                                        case 4:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }()() }), [s, i, c]); var o = function(e) { i(Object(m.a)(e)), i(Object(qe.a)(e.points)), c((function(t) { return t.filter((function(t) { return t.id !== e.id })) })) }; if (!(null === a || void 0 === a ? void 0 : a.isActive)) return null; if (0 === n.length) return null; var l = Object(an.sumBy)(n, "points"); return Object(N.jsxs)(g.v, { isActive: !0, mb: "32px", children: [Object(N.jsx)(g.y, { children: Object(N.jsx)(g.X, { flexDirection: ["column", null, "row"], justifyContent: ["start", null, "space-between"], children: Object(N.jsxs)(g.X, { alignItems: "center", mb: ["16px", null, 0], children: [Object(N.jsx)(g.Nb, { width: "32px", mr: "8px" }), Object(N.jsx)(g.Z, { scale: "lg", children: r("%num% Points to Collect", { num: l }) })] }) }) }), Object(N.jsx)(g.w, { children: n.map((function(e) { return Object(N.jsx)(pn, { achievement: e, onCollectSuccess: o }, e.address) })) })] }) },
                xn = n(888),
                fn = function(e) { var t = e.activeIndex,
                        n = void 0 === t ? 0 : t,
                        c = Object(C.b)().t; return Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.X, { mb: "24px", children: Object(N.jsx)(oe.a, { to: "/teams", children: Object(N.jsxs)(g.X, { alignItems: "center", children: [Object(N.jsx)(g.I, { color: "primary" }), Object(N.jsx)(g.nc, { color: "primary", children: c("Teams Overview") })] }) }) }), Object(N.jsx)(g.X, { mb: "24px", justifyContent: "center", children: Object(N.jsxs)(g.s, { activeIndex: n, variant: "subtle", scale: "sm", children: [Object(N.jsx)(g.t, { as: oe.a, to: "/profile/tasks", children: c("Task Center") }), Object(N.jsx)(g.t, { as: oe.a, to: "/profile", children: c("Public Profile") })] }) })] }) },
                mn = function() { var e = Object(C.b)().t; return Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(fn, {}), Object(N.jsx)(On, {}), Object(N.jsxs)(g.v, { mb: "32px", children: [Object(N.jsx)(g.y, { children: Object(N.jsx)(g.X, { alignItems: "center", justifyContent: "space-between", children: Object(N.jsxs)("div", { children: [Object(N.jsx)(g.Z, { scale: "lg", mb: "8px", children: e("Achievements") }), Object(N.jsx)(g.nc, { as: "p", children: e("Earn more points for completing larger quests!") })] }) }) }), Object(N.jsx)(g.w, { children: Object(N.jsx)(rn, {}) })] }), Object(N.jsxs)(g.v, { mb: "32px", children: [Object(N.jsx)(g.y, { children: Object(N.jsx)(g.X, { alignItems: "center", justifyContent: "space-between", children: Object(N.jsxs)("div", { children: [Object(N.jsx)(g.Z, { scale: "lg", mb: "8px", children: e("Task Center") }), Object(N.jsx)(g.nc, { as: "p", children: e("Earn points by completing regular tasks!") }), Object(N.jsx)(g.nc, { as: "p", children: e("Collecting points for these tasks makes them available again.") })] }) }) }), Object(N.jsx)(g.w, { children: Object(N.jsx)(xn.a, {}) })] })] }) },
                hn = n(47),
                vn = n(38),
                gn = Object(v.e)(g.y)(ft || (ft = Object(h.a)(["\n  background: ", ";\n  position: relative;\n"])), (function(e) { return function(e) { return e.isDark ? "linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)" : "linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)" }(e.theme) })),
                Cn = v.e.img(mt || (mt = Object(h.a)(["\n  border-radius: 4px;\n  margin-bottom: 8px;\n"]))),
                yn = function(e) { var t = e.nft; return Object(N.jsxs)("div", { children: [Object(N.jsx)(Cn, { src: "/images/nfts/".concat(t.images.lg) }), Object(N.jsx)(g.nc, { bold: !0, mb: "8px", children: t.name }), Object(N.jsx)(g.nc, { as: "p", fontSize: "12px", color: "textSubtle", children: t.description })] }) },
                wn = v.e.div(ht || (ht = Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 16px 0;\n\n  ", " {\n    grid-gap: 24px;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 24px 0;\n  }\n\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  ", " {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.mediaQueries.lg })),
                kn = function() { var e = Object(C.b)().t,
                        t = Object(be.a)().nftsInWallet; return Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(g.Z, { as: "h4", scale: "md", mb: "8px", children: e("Pancake Collectibles") }), Object(N.jsx)(g.nc, { as: "p", children: e("Pancake Collectibles are special ERC-721 NFTs that can be used on the PancakeSwap platform.") }), Object(N.jsx)(g.nc, { as: "p", children: e("NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.") }), t.length > 0 && Object(N.jsx)(wn, { children: t.map((function(e) { return Object(N.jsx)(yn, { nft: e }, e.identifier) })) }), 0 === t.length && Object(N.jsx)(g.X, { justifyContent: "center", p: "32px", children: Object(N.jsx)(g.nc, { fontSize: "20px", bold: !0, color: "textDisabled", children: e("No NFTs Found") }) }), Object(N.jsxs)(g.X, { alignItems: "center", justifyContent: "flex-end", children: [Object(N.jsx)(oe.a, { to: "/collectibles", children: e("See all approved Pancake Collectibles") }), Object(N.jsx)(g.J, {})] })] }) },
                Sn = n(950),
                An = v.e.div(vt || (vt = Object(h.a)(["\n  background: rgba(0, 0, 0, 0.6) url('/images/camera.svg') no-repeat center center;\n  background-size: 24px;\n  border-radius: 50%;\n  left: 0;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  transition: opacity 300ms;\n  width: 100%;\n  z-index: 3;\n\n  ", " {\n    background-size: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                En = v.e.div(gt || (gt = Object(h.a)(["\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n\n    ", " {\n      opacity: 1;\n    }\n  }\n"])), An),
                In = v.e.div(Ct || (Ct = Object(h.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Tn = function(e) { var t = e.profile,
                        n = Object(g.Mc)(Object(N.jsx)(Qt, {}), !1),
                        c = Object(S.a)(n, 1)[0]; return Object(N.jsxs)(En, { onClick: c, children: [Object(N.jsx)(In, { children: Object(N.jsx)(Ft.a, { profile: t }) }), Object(N.jsx)(An, {})] }) },
                Dn = v.e.div(yt || (yt = Object(h.a)(["\n  flex: 1;\n  padding: 16px 0;\n\n  ", " {\n    padding: 0 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Pn = Object(v.e)(g.Z)(wt || (wt = Object(h.a)(["\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 8px;\n\n  ", " {\n    font-size: 40px;\n    line-height: 44px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Nn = v.e.div(kt || (kt = Object(h.a)(["\n  position: absolute;\n  right: 24px;\n  top: 24px;\n"]))),
                Rn = Object(v.e)(g.nc)(St || (St = Object(h.a)(["\n  font-size: 12px;\n\n  ", " {\n    font-size: 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Xn = Object(v.e)(g.ib)(At || (At = Object(h.a)(["\n  display: inline-block;\n  font-weight: 400;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80px;\n  white-space: nowrap;\n\n  ", " {\n    font-size: 16px;\n    width: auto;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Fn = v.e.div(Et || (Et = Object(h.a)(["\n  margin-bottom: 40px;\n"]))),
                zn = function() { var e = Object(j.c)().account,
                        t = Object(O.c)().profile,
                        n = Object(hn.v)(),
                        c = Object(S.a)(n, 2),
                        r = c[0],
                        i = c[1],
                        a = Object(C.b)().t; if (!e) return Object(N.jsx)(Q, {}); var s = t.username,
                        o = t.team,
                        l = t.isActive,
                        u = t.points,
                        b = r ? g.Bc : g.Cc; return Object(N.jsxs)(N.Fragment, { children: [Object(N.jsx)(fn, { activeIndex: 1 }), Object(N.jsx)("div", { children: Object(N.jsxs)(g.v, { children: [Object(N.jsxs)(gn, { children: [Object(N.jsxs)(g.X, { alignItems: ["start", null, "center"], flexDirection: ["column", null, "row"], children: [Object(N.jsx)(Tn, { profile: t }), Object(N.jsxs)(Dn, { children: [Object(N.jsxs)(g.X, { alignItems: "center", children: [Object(N.jsxs)(Pn, { children: ["@", r ? s : s.replace(/./g, "*")] }), Object(N.jsx)(b, { ml: "4px", onClick: function() { i(!r) }, cursor: "pointer" })] }), Object(N.jsx)(g.X, { alignItems: "center", children: Object(N.jsxs)(Xn, { href: Object(vn.e)(e, "address"), color: "text", external: !0, children: [e, Object(N.jsx)(g.Gb, { ml: "4px" })] }) }), Object(N.jsx)(Rn, { bold: !0, children: o.name })] })] }), Object(N.jsx)(Nn, { children: l ? Object(N.jsx)(g.kc, { startIcon: Object(N.jsx)(g.F, { width: "18px" }), outline: !0, children: a("Active") }) : Object(N.jsx)(g.kc, { variant: "failure", startIcon: Object(N.jsx)(g.l, { width: "18px" }), outline: !0, children: a("Paused") }) })] }), Object(N.jsxs)(g.w, { children: [Object(N.jsx)(Sn.a, { icon: g.Nb, title: u, subtitle: a("Points"), mb: "24px" }), Object(N.jsxs)(Fn, { children: [Object(N.jsx)(g.Z, { as: "h4", scale: "md", mb: "16px", children: a("Achievements") }), Object(N.jsx)(rn, {})] }), Object(N.jsx)(kn, {})] })] }) })] }) };
            t.default = function() { var e = Object(O.c)(),
                    t = e.isInitialized,
                    n = e.isLoading,
                    c = e.hasProfile,
                    r = Object(j.c)().account; return function() { var e = Object(j.c)().account,
                        t = Object(f.b)();
                    Object(u.useEffect)((function() { e && t(Object(m.c)(e)) }), [e, t]) }(), !t || n ? Object(N.jsx)(p.a, {}) : r && !c ? Object(N.jsx)(d.b, { children: Object(N.jsx)(et, {}) }) : Object(N.jsxs)(d.b, { children: [Object(N.jsx)(qt, {}), Object(N.jsx)(b.b, { exact: !0, path: "/profile", children: Object(N.jsx)(zn, {}) }), Object(N.jsx)(b.b, { path: "/profile/tasks", children: Object(N.jsx)(mn, {}) })] }) } }, 805: function(e, t, n) { "use strict"; var c = n(3),
                r = n.n(c),
                i = n(13),
                a = n(9),
                s = n(6),
                o = n(1),
                l = n(123),
                u = n(43),
                b = n(95),
                j = n(14),
                d = { approvalState: "idle", confirmState: "idle" },
                p = function(e, t) { switch (t.type) {
                        case "requires_approval":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "success" });
                        case "approve_sending":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "loading" });
                        case "approve_receipt":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "success" });
                        case "approve_error":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "fail" });
                        case "confirm_sending":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "loading" });
                        case "confirm_receipt":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "success" });
                        case "confirm_error":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "fail" });
                        default:
                            return e } };
            t.a = function(e) { var t = e.onApprove,
                    n = e.onConfirm,
                    c = e.onRequiresApproval,
                    s = e.onSuccess,
                    O = void 0 === s ? l.noop : s,
                    x = e.onApproveSuccess,
                    f = void 0 === x ? l.noop : x,
                    m = Object(j.b)().t,
                    h = Object(u.c)().account,
                    v = Object(o.useReducer)(p, d),
                    g = Object(a.a)(v, 2),
                    C = g[0],
                    y = g[1],
                    w = Object(o.useRef)(c),
                    k = Object(b.a)().toastError; return Object(o.useEffect)((function() { h && w.current && w.current().then((function(e) { e && y({ type: "requires_approval" }) })) }), [h, w, y]), { isApproving: "loading" === C.approvalState, isApproved: "success" === C.approvalState, isConfirming: "loading" === C.confirmState, isConfirmed: "success" === C.confirmState, handleApprove: function() { var e = Object(i.a)(r.a.mark((function e() { var n, c; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t();
                                    case 3:
                                        return n = e.sent, y({ type: "approve_sending" }), e.next = 7, n.wait();
                                    case 7:
                                        (c = e.sent).status && (y({ type: "approve_receipt" }), f({ state: C, receipt: c })), e.next = 15; break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), y({ type: "approve_error" }), k(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [0, 11]
                            ]) }))); return function() { return e.apply(this, arguments) } }(), handleConfirm: function() { var e = Object(i.a)(r.a.mark((function e() { var t, c; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return y({ type: "confirm_sending" }), e.prev = 1, e.next = 4, n();
                                    case 4:
                                        return t = e.sent, e.next = 7, t.wait();
                                    case 7:
                                        (c = e.sent).status && (y({ type: "confirm_receipt" }), O({ state: C, receipt: c })), e.next = 15; break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), y({ type: "confirm_error" }), k(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [1, 11]
                            ]) }))); return function() { return e.apply(this, arguments) } }() } } }, 806: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return s })); var c, r, i, a, s, o = n(8),
                l = (n(1), n(5)),
                u = n(2),
                b = n(14),
                j = n(0);! function(e) { e.ROW = "row", e.SEQUENTIAL = "sequential" }(s || (s = {})); var d = l.e.div(c || (c = Object(o.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  ", " {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                p = Object(l.e)(u.r)(r || (r = Object(o.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                O = { width: "24px", color: "textDisabled" },
                x = Object(l.e)(u.J).attrs(O)(i || (i = Object(o.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                f = Object(l.e)(u.H).attrs(O)(a || (a = Object(o.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                m = Object(j.jsx)(u.i, { spin: !0, color: "currentColor" });
            t.b = function(e) { var t = e.isApproveDisabled,
                    n = e.isApproving,
                    c = e.isConfirming,
                    r = e.isConfirmDisabled,
                    i = e.onApprove,
                    a = e.onConfirm,
                    o = e.buttonArrangement,
                    l = void 0 === o ? s.ROW : o,
                    O = e.confirmLabel,
                    h = e.confirmId,
                    v = Object(b.b)().t,
                    g = null !== O && void 0 !== O ? O : v("Confirm"); return l === s.ROW ? Object(j.jsxs)(d, { children: [Object(j.jsx)(u.n, { children: Object(j.jsx)(p, { disabled: t, onClick: i, endIcon: n ? m : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }), Object(j.jsxs)(u.X, { justifyContent: "center", children: [Object(j.jsx)(x, {}), Object(j.jsx)(f, {})] }), Object(j.jsx)(u.n, { children: Object(j.jsx)(p, { id: h, onClick: a, disabled: r, isLoading: c, endIcon: c ? m : void 0, children: c ? v("Confirming") : g }) })] }) : Object(j.jsx)(j.Fragment, { children: t ? Object(j.jsx)(u.n, { children: Object(j.jsx)(p, { id: h, onClick: a, disabled: r, isLoading: c, endIcon: c ? m : void 0, children: c ? v("Confirming") : g }) }) : Object(j.jsx)(u.n, { children: Object(j.jsx)(p, { onClick: i, endIcon: n ? m : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }) }) } }, 818: function(e, t, n) { "use strict"; var c, r, i, a = n(8),
                s = (n(1), n(2)),
                o = n(5),
                l = n(0),
                u = o.e.img(c || (c = Object(a.a)(["\n  border: 1px solid ", ";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  ", " {\n    border-width: 2px;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.sm })),
                b = o.e.div(r || (r = Object(a.a)(["\n  background: url('", "');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])), (function(e) { return e.bg })),
                j = Object(o.e)(s.Eb)(i || (i = Object(a.a)(["\n  width: 100%;\n  height: 100%;\n"])));
            t.a = function(e) { var t, n, c = e.profile; return Object(l.jsxs)(b, { bg: "/images/nfts/".concat(null === (t = c.nft) || void 0 === t || null === (n = t.images) || void 0 === n ? void 0 : n.md), children: [!c.isActive && Object(l.jsx)(j, {}), Object(l.jsx)(u, { src: "/images/teams/".concat(c.team.images.alt), alt: c.team.name })] }) } }, 842: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return l })); var c = n(1),
                r = n(43),
                i = n(23),
                a = n(62),
                s = n(140),
                o = n(381),
                l = function() { var e = Object(r.c)().account,
                        t = Object(a.b)(),
                        n = Object(i.c)((function(e) { return e.collectibles })),
                        l = n.isInitialized,
                        u = n.isLoading,
                        b = n.data,
                        j = Object.keys(b); return Object(c.useEffect)((function() {!l && e && t(Object(o.b)(e)) }), [l, e, t]), { isInitialized: l, isLoading: u, tokenIds: b, nftsInWallet: s.a.pancake.filter((function(e) { return j.includes(e.identifier) })) } } }, 843: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return s })), n.d(t, "b", (function() { return o })); var c = n(1),
                r = n(23),
                i = n(62),
                a = n(175),
                s = function(e) { var t = Object(r.c)((function(t) { return t.teams.data[e] })),
                        n = Object(i.b)(); return Object(c.useEffect)((function() { n(Object(a.b)(e)) }), [e, n]), t },
                o = function() { var e = Object(r.c)((function(e) { return e.teams })),
                        t = e.isInitialized,
                        n = e.isLoading,
                        s = e.data,
                        o = Object(i.b)(); return Object(c.useEffect)((function() { o(Object(a.c)()) }), [o]), { teams: s, isInitialized: t, isLoading: n } } }, 844: function(e, t, n) { "use strict"; var c, r = n(8),
                i = n(5).e.div(c || (c = Object(r.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.textSubtle }));
            t.a = i }, 861: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return i })); var c = n(21),
                r = n(16);

            function i(e, t) { Object(r.a)(2, arguments); var n = Object(c.default)(e),
                    i = Object(c.default)(t); return n.getTime() - i.getTime() } }, 863: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return i })); var c = n(21),
                r = n(16);

            function i(e, t) { Object(r.a)(2, arguments); var n = Object(c.default)(e),
                    i = Object(c.default)(t),
                    a = n.getTime() - i.getTime(); return a < 0 ? -1 : a > 0 ? 1 : a } }, 888: function(e, t, n) { "use strict";
            n(1); var c = n(2),
                r = n(14),
                i = n(0);
            t.a = function(e) { var t = e.children,
                    n = Object(r.b)().t; return Object(i.jsxs)(c.X, { flexDirection: "column", alignItems: "center", justifyContent: "center", p: "24px", children: [Object(i.jsx)(c.q, { width: "72px", height: "72px" }), Object(i.jsx)(c.Z, { as: "h5", scale: "md", color: "textDisabled", children: t || n("Coming Soon!") })] }) } }, 889: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return r })); var c = n(395);

            function r(e) { return Object(c.a)({}, e) } }, 950: function(e, t, n) { "use strict"; var c, r = n(6),
                i = n(53),
                a = (n(1), n(2)),
                s = n(8),
                o = n(5),
                l = Object(o.e)(a.nc)(c || (c = Object(s.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n"])), (function(e) { return e.theme.colors.tertiary }));
            l.defaultProps = { p: "24px" }; var u = l,
                b = n(0),
                j = ["icon", "title", "subtitle", "isDisabled"];
            t.a = function(e) { var t = e.icon,
                    n = e.title,
                    c = e.subtitle,
                    s = e.isDisabled,
                    o = void 0 !== s && s,
                    l = Object(i.a)(e, j); return Object(b.jsx)(u, Object(r.a)(Object(r.a)({}, l), {}, { children: Object(b.jsxs)(a.X, { alignItems: "start", children: [Object(b.jsx)(t, { width: "44px", mr: "24px", color: o ? "textDisabled" : "currentColor" }), Object(b.jsxs)("div", { children: [Object(b.jsx)(a.Z, { as: "h3", scale: "xl", color: o ? "textDisabled" : "text", children: n }), Object(b.jsx)(a.nc, { textTransform: "uppercase", color: o ? "textDisabled" : "textSubtle", fontSize: "12px", bold: !0, children: c })] })] }) })) } }, 956: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return i })); var c = n(861),
                r = n(16);

            function i(e, t) { Object(r.a)(2, arguments); var n = Object(c.a)(e, t) / 1e3; return n > 0 ? Math.floor(n) : Math.ceil(n) } }, 957: function(e, t, n) { var c = n(500);
            e.exports = function(e, t) { var n = -1,
                    r = e.length,
                    i = r - 1; for (t = void 0 === t ? r : t; ++n < t;) { var a = c(n, i),
                        s = e[a];
                    e[a] = e[n], e[n] = s } return e.length = t, e } } }
]);
//# sourceMappingURL=7.018cf592.chunk.js.map