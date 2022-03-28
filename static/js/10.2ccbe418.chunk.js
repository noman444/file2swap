(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [10], {
        1520: function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n(8),
                r = n(1),
                i = n(5),
                a = n(2),
                o = n(43),
                s = n(14),
                d = n(384),
                l = n(830),
                u = n(93),
                b = n(840),
                j = n(9),
                p = n(3),
                x = n.n(p),
                h = n(13),
                f = n(6),
                O = n(32),
                m = n(21),
                v = n(230),
                g = n(231),
                w = n(16),
                C = n(35);

            function A(e, t) {
                if (Object(w.a)(2, arguments), !t || "object" !== typeof t) return new Date(NaN);
                var n = "years" in t ? Object(C.a)(t.years) : 0,
                    c = "months" in t ? Object(C.a)(t.months) : 0,
                    r = "weeks" in t ? Object(C.a)(t.weeks) : 0,
                    i = "days" in t ? Object(C.a)(t.days) : 0,
                    a = "hours" in t ? Object(C.a)(t.hours) : 0,
                    o = "minutes" in t ? Object(C.a)(t.minutes) : 0,
                    s = "seconds" in t ? Object(C.a)(t.seconds) : 0,
                    d = Object(m.default)(e),
                    l = c || n ? Object(g.default)(d, c + 12 * n) : d,
                    u = i || r ? Object(v.default)(l, i + 7 * r) : l,
                    b = o + 60 * a,
                    j = s + 60 * b,
                    p = 1e3 * j,
                    x = new Date(u.getTime() + p);
                return x
            }
            var k = n(861),
                B = 36e5;

            function y(e, t) { Object(w.a)(2, arguments); var n = Object(k.a)(e, t) / B; return n > 0 ? Math.floor(n) : Math.ceil(n) }
            var S, D = n(50),
                F = n(4),
                E = n(33),
                N = function(e, t) { var n = new F.j(F.a.MAINNET, e, 18); return F.f.getAddress(n, t) },
                T = [{ account: "0x9Ed5a62535A5Dd2dB2d9bB21bAc42035Af47F630", farmName: "NAV-BNB", tokenAddress: "0xBFEf6cCFC830D3BaCA4F6766a0d4AaA242Ca9F3D", quoteToken: E.a.wbnb, tokenName: "Navcoin", projectSite: "https://navcoin.org/en" }, { account: "0x33723811B0FCa2a751f3912B80603Fe11499D894", farmName: "WSG-BNB", tokenAddress: "0xA58950F05FeA2277d2608748412bf9F802eA4901", quoteToken: E.a.wbnb, tokenName: "Wall Street Games", projectSite: "https://wsg.gg/" }, { account: "0xD1C35C3F5D9d373A3F7c0668Fbe75801886e060f", farmName: "SWIRGE-BNB", tokenAddress: "0xe792f64C582698b8572AAF765bDC426AC3aEfb6B", quoteToken: E.a.wbnb, tokenName: "Swirge Network", projectSite: "https://swirge.com/" }, { account: "0x58092273a044D6e1d23B5095AE873F6E24E906ed", farmName: "rUSD-BUSD", tokenAddress: "0x07663837218A003e66310a01596af4bf4e44623D", quoteToken: E.a.busd, tokenName: "RAMP DEFI", projectSite: "https://www.rampdefi.com/" }, { account: "0xfAd3B5FeAC1aAF86B3f66D105F2fa9607164D86b", farmName: "FEED-BNB", tokenAddress: "0x67d66e8Ec1Fd25d98B3Ccd3B19B7dc4b4b7fC493", quoteToken: E.a.wbnb, tokenName: "Feeder Finance", projectSite: "https://www.feeder.finance/" }, { account: "0x6a2d41c87c3F28C2C0b466424DE8e08FC2E23eDc", farmName: "BBT-BNB", tokenAddress: "0xD48474E7444727bF500a32D5AbE01943f3A59A64", quoteToken: E.a.wbnb, tokenName: "BitBook", projectSite: "https://www.bitbook.network/" }, { account: "0xAe126B90d2835c5A2D720b0687EC59f59b768183", farmName: "WOW-BUSD", tokenAddress: "0x4DA996C5Fe84755C80e108cf96Fe705174c5e36A", quoteToken: E.a.busd, tokenName: "WOWswap", projectSite: "https://wowswap.io/" }, { account: "0x88F0A6cb89909838d69E4E6e76eC21e2a7bdcA66", farmName: "BREW-BNB", tokenAddress: "0x790Be81C3cA0e53974bE2688cDb954732C9862e1", quoteToken: E.a.wbnb, tokenName: "CafeSwap Finance", projectSite: "https://app.cafeswap.finance/" }, { account: "0x0Cf86283ad1a1B7D04669696eD13BAE3d5925a0a", farmName: "SAKE-BNB", tokenAddress: "0x8BD778B12b15416359A227F0533Ce2D91844e1eD", quoteToken: E.a.wbnb, tokenName: "SakeSwap", projectSite: "https://bsc.sakeswap.finance/" }, { account: "0xCe059E8af96a654d4afe630Fa325FBF70043Ab11", farmName: "XBLZD-BNB", tokenAddress: "0x9a946c3Cb16c08334b69aE249690C236Ebd5583E", quoteToken: E.a.wbnb, tokenName: "Blizzard", projectSite: "https://www.blizzard.money/" }, { account: "0x7A4BAE68836f486e2c99dca0fBda1845d4532194", farmName: "HERO-BNB", tokenAddress: "0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13", quoteToken: E.a.wbnb, tokenName: "Metahero", projectSite: "https://metahero.io/" }, { account: "0x46D8e47b9A6487FDAB0a700b269A452cFeED49Aa", farmName: "MCRN-BNB", tokenAddress: "0xacb2d47827C9813AE26De80965845D80935afd0B", quoteToken: E.a.wbnb, tokenName: "MacaronSwap", projectSite: "https://www.macaronswap.finance/" }, { account: "0x1bA962acab22Be9e49C4cEBE7710c9201A72dFcc", farmName: "BABYCAKE-BNB", tokenAddress: "0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c", quoteToken: E.a.wbnb, tokenName: "Babycake", projectSite: "https://babycake.app/" }, { account: "0xCCcC0b22799E82A79007814Dbc6A194410DCcEA5", farmName: "BMON-BNB", tokenAddress: "0x08ba0619b1e7A582E0BCe5BBE9843322C954C340", quoteToken: E.a.wbnb, tokenName: "Binamon", projectSite: "https://binamon.org/" }, { account: "0x71eE6DE14c90700eE06C81aaBdBacD684cfe30fe", farmName: "BMON-BUSD", tokenAddress: "0x08ba0619b1e7A582E0BCe5BBE9843322C954C340", quoteToken: E.a.busd, tokenName: "Binamon", projectSite: "https://binamon.org/" }, { account: "0x6cfA3ff4e96abe93a290dc3d7A911A483C194758", farmName: "ANY-BNB", tokenAddress: "0xF68C9Df95a18B2A5a5fa1124d79EEEffBaD0B6Fa", quoteToken: E.a.wbnb, tokenName: "Anyswap", projectSite: "https://anyswap.exchange/" }, { account: "0xe596470D291Cb2D32ec111afC314B07006690c72", farmName: "PHX-BNB", tokenAddress: "0xac86e5f9bA48d680516df50C72928c2ec50F3025", quoteToken: E.a.wbnb, tokenName: "Phoenix Finance", projectSite: "https://www.phoenixprotocol.net/" }, { account: "0x8f8c77987C0ea9dd2400383b623d9cbcBbAf98CF", farmName: "GMR-BNB", tokenAddress: "0x0523215DCafbF4E4aA92117d13C6985a3BeF27D7", quoteToken: E.a.wbnb, tokenName: "GMR Finance", projectSite: "https://www.gmr.finance/" }, { account: "0x786B313b01A25eddbF7f7461b48D60AF680d758C", farmName: "BP-BNB", tokenAddress: "0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1", quoteToken: E.a.wbnb, tokenName: "BunnyPark", projectSite: "https://www.bunnypark.com/" }, { account: "0x70d7eCEE276Ad5fDFc91B3C30d2c1cDb9dD442Fb", farmName: "DPET-BNB", tokenAddress: "0xfb62AE373acA027177D1c18Ee0862817f9080d08", quoteToken: E.a.wbnb, tokenName: "MyDefiPet", projectSite: "https://mydefipet.com/" }, { account: "0x8aC06b55C9812e3E574CF5A5F3b49619dF33099C", farmName: "NMX-BUSD", tokenAddress: "0xd32d01A43c869EdcD1117C640fBDcfCFD97d9d65", quoteToken: E.a.busd, tokenName: "Nominex", projectSite: "https://nominex.io/" }, { account: "0xd27E57Ff5dD3d78B03c85e2A2bB8dc37E67c5140", farmName: "POOLZ-BNB", tokenAddress: "0x77018282fD033DAF370337A5367E62d8811Bc885", quoteToken: E.a.wbnb, tokenName: "Poolz Finance", projectSite: "https://poolz.finance/" }, { account: "0x0767a2f9c644b364Bc88Eea5a535afE506Ba6802", farmName: "ODDZ-BNB", tokenAddress: "0xCD40F2670CF58720b694968698A5514e924F742d", quoteToken: E.a.wbnb, tokenName: "Oddz Finance", projectSite: "https://oddz.fi" }, { account: "0x2B6b2701d7F7b65BA2E1ec2d2dAa17d46B85A4fe", farmName: "UBXT-BUSD", tokenAddress: "0xBbEB90cFb6FAFa1F69AA130B7341089AbeEF5811", quoteToken: E.a.busd, tokenName: "UpBots", projectSite: "https://upbots.com/" }, { account: "0x875831249bA511a6f1E49c84D66E1A6F5601f7C6", farmName: "DND-BUSD", tokenAddress: "0x14c358b573a4cE45364a3DBD84BBb4Dae87af034", quoteToken: E.a.busd, tokenName: "DungeonSwap", projectSite: "https://dungeonswap.app/" }, { account: "0xb7d303BbaE2573513801C5F94aE0B61Fa5b3426F", farmName: "ZOON-BNB", tokenAddress: "0x9D173E6c594f479B4d47001F8E6A95A7aDDa42bC", quoteToken: E.a.wbnb, tokenName: "CryptoZoon", projectSite: "https://cryptozoon.io/" }, { account: "0x22d56946c6cc1d4ed09f02858ddb990fcc981c55", farmName: "HGET-BUSD", tokenAddress: "0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731", quoteToken: E.a.busd, tokenName: "Hedget", projectSite: "https://www.hedget.com/" }, { account: "0x027D50F36fe3b64630170B3ba82FC64BfC9bc088", farmName: "FAN-BNB", tokenAddress: "0xFAc3A1ED2480Da8F5c34576C0Da13F245239717d", quoteToken: E.a.wbnb, tokenName: "Fanadise", projectSite: "https://fanadise.com/" }, { account: "0x73f9eb8eB7109b171396C8cbffcb29839c8b3064", farmName: "PKMON-BUSD", tokenAddress: "0x609D183Fb91a0fce59550b62ab7d2c931b0Bb1BE", quoteToken: E.a.busd, tokenName: "PolkaMonster", projectSite: "https://polkamonster.game/" }, { account: "0x88Dba2cF8911A80cc50A1B392b5fF6b47B930330", farmName: "SFUND-BNB", tokenAddress: "0x477bC8d23c634C154061869478bce96BE6045D12", quoteToken: E.a.wbnb, tokenName: "Seedify", projectSite: "https://launchpad.seedify.fund/" }, { account: "0xf1dD352EF3a94F60b3047B607C2Bd976401F538c", farmName: "GNT-BNB", tokenAddress: "0xF750A26EB0aCf95556e8529E72eD530f3b60f348", quoteToken: E.a.wbnb, tokenName: "GreenTrust", projectSite: "https://www.greentrusttoken.com/" }, { account: "0x3992D7D9Ed721257d8bD7501d280b857eD7F9C24", farmName: "TT-BUSD", tokenAddress: "0x990E7154bB999FAa9b2fa5Ed29E822703311eA85", quoteToken: E.a.busd, tokenName: "ThunderCore", projectSite: "https://www.thundercore.com/" }, { account: "0x2Ef317299888DD4a4F57FFf99FF2685D544fEAf1", farmName: "TT-BNB", tokenAddress: "0x990E7154bB999FAa9b2fa5Ed29E822703311eA85", quoteToken: E.a.wbnb, tokenName: "ThunderCore", projectSite: "https://www.thundercore.com/" }, { account: "0xB9a32da7F33731FfDa8e7ecCB91325eee8A524AC", farmName: "SMG-BNB", tokenAddress: "0x6bfd576220e8444CA4Cc5f89Efbd7f02a4C94C16", quoteToken: E.a.wbnb, tokenName: "Smaugs NFT", projectSite: "https://smaugs.com" }, { account: "0x5ed6B80F0e8b1c7fdB783202d4a926BbED2d49ee", farmName: "TENFI-BNB", tokenAddress: "0xd15C444F1199Ae72795eba15E8C1db44E47abF62", quoteToken: E.a.wbnb, tokenName: "TEN Finance", projectSite: "https://ten.finance/" }, { account: "0x75015B56dA228A5367d313866f6520495344C65c", farmName: "BNX-BUSD", tokenAddress: "0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97", quoteToken: E.a.busd, tokenName: "BinaryX", projectSite: "https://www.binaryx.pro/#/" }, { account: "0xCbD932aC66f645a3764733aACD30Ce50e522Fac1", farmName: "DVI-BNB", tokenAddress: "0x758FB037A375F17c7e195CC634D77dA4F554255B", quoteToken: E.a.wbnb, tokenName: "Dvision", projectSite: "https://dvision.network/" }].map((function(e) { return Object(f.a)(Object(f.a)({}, e), {}, { lpAddress: N(e.tokenAddress, e.quoteToken) }) })),
                P = { account: "", tokenAddress: "", quoteToken: E.a.wbnb, farmName: "Unknown", tokenName: "Unknown" },
                X = function(e) { var t = T.find((function(t) { return t.account.toLowerCase() === e.toLowerCase() })); return t || Object(f.a)(Object(f.a)({}, P), {}, { account: e }) },
                L = n(97);
            ! function(e) { e[e.Pending = 0] = "Pending", e[e.Open = 1] = "Open", e[e.Close = 2] = "Close" }(S || (S = {}));
            var I, q, M, U, R, z, W, H, K, Z, _, Q, G, Y, V, J, $, ee, te, ne = n(12),
                ce = n(30),
                re = "https://docs.google.com/forms/d/e/1FAIpQLScUkwbsMWwg7L5jjGjEcmv6RsoCNhFDkV3xEpRu2KcJrr47Sw/viewform",
                ie = function(e, t) {
                    var n = Object(O.a)(e).sort((function(e, t) { return e.amount.lt(t.amount) ? 1 : e.amount.gt(t.amount) ? -1 : 0 })).map((function(e, t) { var n = X(e.account); return Object(f.a)(Object(f.a)({}, n), {}, { position: t + 1, account: e.account, amount: e.amount }) })),
                        c = 0;
                    return n.map((function(e, n, r) {
                        var i = Object(ce.d)(e.amount),
                            a = 0 !== n && e.amount.eq(r[n - 1].amount);
                        c = a ? c : c + 1;
                        var o = !!t && n + 1 <= t.topLeaderboard;
                        return t && t.leaderboardThreshold.gt(0) && (o = t.leaderboardThreshold.lte(i)), Object(f.a)(Object(f.a)({}, e), {}, { position: c, isTopPosition: o, samePositionAsAbove: a, amount: i })
                    }))
                },
                ae = function(e, t, n, c) { return c !== S.Pending || t || n ? c === S.Close ? ne.a.Closed : e >= n ? ne.a.Finished : c === S.Open && e < t ? ne.a.Pending : c === S.Open && e > t ? ne.a.Open : ne.a.ToBeAnnounced : ne.a.ToBeAnnounced },
                oe = function() {
                    var e = Object(h.a)(x.a.mark((function e(t, n) {
                        var c, r, i;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (c = (n - t) * D.h, !(t > n)) { e.next = 14; break }
                                    return e.prev = 3, e.next = 6, L.a.getBlock(n);
                                case 6:
                                    return r = e.sent, i = r.timestamp, e.abrupt("return", Object(m.default)(1e3 * i));
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(3), A(new Date, { seconds: c });
                                case 14:
                                    return e.abrupt("return", A(new Date, { seconds: c }));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 11]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                se = function() {
                    var e = Object(h.a)(x.a.mark((function e(t, n) {
                        var c, r, i, a, o;
                        return x.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return c = Object(f.a)(Object(f.a)({}, n), {}, { topLeaderboard: n.leaderboard.toNumber(), initialBidAmount: Object(ce.d)(n.initialBidAmount).div(D.k).toNumber(), leaderboardThreshold: Object(ce.d)(n.leaderboardThreshold), startBlock: n.startBlock.toNumber(), endBlock: n.endBlock.toNumber() }), e.next = 3, L.a.getBlockNumber();
                                case 3:
                                    return r = e.sent, e.next = 6, oe(r, c.startBlock);
                                case 6:
                                    return i = e.sent, e.next = 9, oe(r, c.endBlock);
                                case 9:
                                    return a = e.sent, o = ae(r, c.startBlock, c.endBlock, c.status), e.abrupt("return", Object(f.a)(Object(f.a)({ id: t, startDate: i, endDate: a, auctionDuration: y(a, i) }, c), {}, { status: o }));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                de = function(e) {
                    var t = Object(j.a)(e, 4),
                        n = t[0],
                        c = t[1],
                        r = t[2],
                        i = t[3];
                    return { auctions: n.map((function(e, t) { return { id: e.toNumber(), amount: Object(ce.d)(c[t]), claimed: r[t] } })), nextCursor: i.toNumber() }
                },
                le = n(0),
                ue = Object(i.e)(a.v)(I || (I = Object(c.a)(["\n  flex: 1;\n  height: fit-content;\n"]))),
                be = Object(i.e)(a.ib)(q || (q = Object(c.a)(["\n  display: inline;\n"]))),
                je = i.e.ul(M || (M = Object(c.a)(["\n  list-style-position: outside;\n  padding: 0 24px;\n\n  li {\n    line-height: 1.5;\n    margin-bottom: 4px;\n  }\n\n  li::marker {\n    font-size: 12px;\n  }\n"]))),
                pe = i.e.li(U || (U = Object(c.a)(["\n  color: ", ";\n"])), (function(e) { return e.theme.colors.textSubtle })),
                xe = function() { var e = Object(s.b)().t; return Object(le.jsxs)(a.X, { flexDirection: "column", children: [Object(le.jsx)(a.Z, { as: "h1", scale: "xxl", mb: "40px", children: e("FAQs") }), Object(le.jsx)(a.X, { flexDirection: ["column", null, null, null, "row"], children: Object(le.jsxs)(ue, { mr: [null, null, null, null, "24px"], mb: ["24px", null, null, null, "0"], children: [Object(le.jsx)(a.y, { children: Object(le.jsx)(a.Z, { children: e("How does it work?") }) }), Object(le.jsxs)(a.w, { p: "0 24px 24px", children: [Object(le.jsx)(b.a, { title: e("Step 1: Submit application"), mt: "24px", children: Object(le.jsxs)(a.n, { display: "inline", children: [Object(le.jsx)(a.nc, { display: "inline", color: "textSubtle", children: e("Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the ") }), Object(le.jsx)(be, { href: re, external: !0, children: e("Application Form") })] }) }), Object(le.jsx)(b.a, { title: e("Step 2: Await whitelisting"), mt: "24px", children: Object(le.jsxs)(a.n, { color: "textSubtle", children: [Object(le.jsx)(a.nc, { color: "textSubtle", mb: "4px", children: e("The PancakeSwap team will try to respond within a week.") }), Object(le.jsxs)(je, { children: [Object(le.jsx)(pe, { children: e("Community Farm qualifiers will be asked to provide the address of the wallet which you\u2019ll use for bidding CAKE in the auction.") }), Object(le.jsx)(pe, { children: e("Core Farm/Pool qualifiers will receive further directions separately.") })] })] }) }), Object(le.jsxs)(b.a, { title: e("Step 3: During the auction"), mt: "24px", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: e("During the auction period, if you connect your project\u2019s whitelisted wallet to the Auction page, you\u2019ll see a \u201cPlace Bid\u201d button during when the auction is live.") }), Object(le.jsx)(a.nc, { color: "textSubtle", children: e("You can then commit CAKE to bid during the auction, competing against other project for one of the available farms.") })] }), Object(le.jsxs)(b.a, { title: e("Step 4: After the auction"), mt: "24px", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: e("If your bid was not successful, you can reclaim your CAKE on this page.") }), Object(le.jsx)(a.nc, { color: "textSubtle", children: e("If your bid was successful, your farm will begin at the specified time. The CAKE you bid will not be returned to you and will be added to our weekly CAKE burn.") }), Object(le.jsx)(a.nc, { color: "textSubtle", children: e("So long as you are whitelisted, you\u2019ll be able to participate in each new auction.") }), Object(le.jsx)(a.nc, { color: "textSubtle", children: e("If two or more projects bid the exact same CAKE amount and are contending for a spot in the winning bidders, their bids may be invalidated.") })] })] })] }) })] }) },
                he = n(31),
                fe = n(15),
                Oe = n.n(fe),
                me = n(56),
                ve = n(132),
                ge = n(805),
                we = n(45),
                Ce = n(95),
                Ae = n(108),
                ke = n(806),
                Be = n(98),
                ye = n(130),
                Se = n(99),
                De = Object(i.e)(a.wb)(R || (R = Object(c.a)(["\n  min-width: 280px;\n  max-width: 320px;\n  & > div:nth-child(2) {\n    padding: 0;\n  }\n"]))),
                Fe = Object(i.e)(a.n)(z || (z = Object(c.a)(["\n  padding: 24px;\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.dropdown })),
                Ee = Object(i.e)(a.n)(W || (W = Object(c.a)(["\n  padding: 24px;\n"]))),
                Ne = function(e) {
                    var t = e.onDismiss,
                        n = e.initialBidAmount,
                        c = e.connectedBidder,
                        i = e.refreshBidders,
                        d = Object(o.c)().account,
                        l = Object(s.b)().t,
                        b = Object(u.a)().theme,
                        p = Object(ye.a)().callWithGasPrice,
                        f = Object(r.useState)(""),
                        O = Object(j.a)(f, 2),
                        m = O[0],
                        v = O[1],
                        g = Object(r.useState)(!1),
                        w = Object(j.a)(g, 2),
                        C = w[0],
                        A = w[1],
                        k = Object(r.useState)(!1),
                        B = Object(j.a)(k, 2),
                        y = B[0],
                        S = B[1],
                        F = Object(r.useState)(!1),
                        N = Object(j.a)(F, 2),
                        T = N[0],
                        P = N[1],
                        X = Object(r.useState)(null),
                        L = Object(j.a)(X, 2),
                        I = L[0],
                        q = L[1],
                        M = Object(ve.b)(E.a.cake.address),
                        U = M.balance,
                        R = M.fetchStatus,
                        z = Object(he.f)(U),
                        W = Object(Be.g)(),
                        H = Object(we.j)(),
                        K = Object(we.c)(),
                        Z = Object(Ce.a)().toastSuccess,
                        _ = c.bidderData,
                        Q = _.amount,
                        G = _.position,
                        Y = Q.isZero(),
                        V = Y && !y;
                    Object(r.useEffect)((function() { S(parseFloat(m) >= n), A(parseFloat(m) % 10 === 0 && 0 !== parseFloat(m)), R === ve.a.SUCCESS && z.lt(m) ? P(!0) : P(!1) }), [m, n, R, z]), Object(r.useEffect)((function() { q(T ? l("Insufficient CAKE balance") : !y && Y ? l("First bid must be %initialBidAmount% CAKE or more.", { initialBidAmount: n }) : C ? null : l("Bid must be a multiple of 10")) }), [C, y, T, n, l, Y]);
                    var J = Object(ge.a)({
                            onRequiresApproval: function() {
                                var e = Object(h.a)(x.a.mark((function e() {
                                    var t, n;
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, K.allowance(d, H.address);
                                            case 3:
                                                return t = e.sent, n = Object(ce.d)(t), e.abrupt("return", n.gt(0));
                                            case 8:
                                                return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 8]
                                    ])
                                })));
                                return function() { return e.apply(this, arguments) }
                            }(),
                            onApprove: function() { return p(K, "approve", [H.address, me.a.constants.MaxUint256]) },
                            onApproveSuccess: function() {
                                var e = Object(h.a)(x.a.mark((function e(t) {
                                    var n;
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = t.receipt, Z(l("Contract approved - you can now place your bid!"), Object(le.jsx)(Se.b, { txHash: n.transactionHash }));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) { return e.apply(this, arguments) }
                            }(),
                            onConfirm: function() { var e = new Oe.a(m).times(D.k).toString(); return p(H, "bid", [e]) },
                            onSuccess: function() {
                                var e = Object(h.a)(x.a.mark((function e(n) {
                                    var c;
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                c = n.receipt, i(), t(), Z(l("Bid placed!"), Object(le.jsx)(Se.b, { txHash: c.transactionHash }));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) { return e.apply(this, arguments) }
                            }()
                        }),
                        $ = J.isApproving,
                        ee = J.isApproved,
                        te = J.isConfirmed,
                        ne = J.isConfirming,
                        re = J.handleApprove,
                        ie = J.handleConfirm,
                        ae = function(e) {
                            var t = 1 === e ? Oe.a.ROUND_FLOOR : Oe.a.ROUND_CEIL,
                                n = Object(he.f)(U.times(e)).div(10).integerValue(t).times(10);
                            v(n.toString())
                        };
                    return Object(le.jsxs)(De, { title: l("Place a Bid"), onDismiss: t, headerBackground: b.colors.gradients.cardHeader, children: [Object(le.jsxs)(Fe, { children: [Object(le.jsxs)(a.X, { justifyContent: "space-between", children: [Object(le.jsx)(a.nc, { children: l("Your existing bid") }), Object(le.jsx)(a.nc, { children: l("%num% CAKE", { num: Object(he.g)(Q).toLocaleString() }) })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", children: [Object(le.jsx)(a.nc, { children: l("Your position") }), Object(le.jsx)(a.nc, { children: G ? "#".concat(G) : "-" })] })] }), Object(le.jsxs)(Ee, { children: [Object(le.jsxs)(a.X, { justifyContent: "space-between", alignItems: "center", pb: "8px", children: [Object(le.jsx)(a.nc, { children: l("Bid a multiple of 10") }), Object(le.jsxs)(a.X, { children: [Object(le.jsx)(a.Hb, { width: "24px", height: "24px", mr: "4px" }), Object(le.jsx)(a.nc, { bold: !0, children: "CAKE" })] })] }), Y && Object(le.jsx)(a.nc, { pb: "8px", small: !0, children: l("First bid must be %initialBidAmount% CAKE or more.", { initialBidAmount: n }) }), Object(le.jsx)(a.j, { isWarning: !C || V, placeholder: "0", value: m, onUserInput: function(e) { v(e) }, currencyValue: W.gt(0) && "~".concat(m ? W.times(new Oe.a(m)).toNumber().toLocaleString() : "0.00", " USD") }), Object(le.jsxs)(a.X, { justifyContent: "flex-end", mt: "8px", children: [Object(le.jsxs)(a.nc, { fontSize: "12px", color: "textSubtle", mr: "8px", children: [l("Balance"), ":"] }), Object(le.jsx)(a.nc, { fontSize: "12px", color: "textSubtle", children: Object(he.e)(z.toNumber(), 3, 3) })] }), I && Object(le.jsx)(a.nc, { color: "failure", textAlign: "right", fontSize: "12px", children: I }), Object(le.jsxs)(a.X, { justifyContent: "space-between", mt: "8px", mb: "24px", children: [Object(le.jsx)(a.r, { disabled: R !== ve.a.SUCCESS, scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return ae(.25) }, children: "25%" }), Object(le.jsx)(a.r, { disabled: R !== ve.a.SUCCESS, scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return ae(.5) }, children: "50%" }), Object(le.jsx)(a.r, { disabled: R !== ve.a.SUCCESS, scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return ae(.75) }, children: "75%" }), Object(le.jsx)(a.r, { disabled: R !== ve.a.SUCCESS, scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return ae(1) }, children: "MAX" })] }), Object(le.jsx)(a.X, { flexDirection: "column", children: d ? Object(le.jsx)(ke.b, { isApproveDisabled: ee, isApproving: $, isConfirmDisabled: !C || Object(he.f)(U).lt(m) || te || V || T, isConfirming: ne, onApprove: re, onConfirm: ie, buttonArrangement: ke.a.SEQUENTIAL }) : Object(le.jsx)(Ae.a, {}) }), Object(le.jsx)(a.nc, { color: "textSubtle", small: !0, mt: "24px", children: l("If your bid is unsuccessful, you\u2019ll be able to reclaim your CAKE after the auction.") })] })] })
                },
                Te = n(774),
                Pe = Object(i.e)(a.X)(H || (H = Object(c.a)(["\n  flex-direction: column;\n  padding: 16px;\n  border-radius: ", ";\n  background-color: ", ";\n  border: 1px ", " solid;\n"])), (function(e) { return e.theme.radii.default }), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.colors.cardBorder })),
                Xe = function(e) {
                    var t = e.auction,
                        n = t.startBlock,
                        c = t.endBlock,
                        r = t.auctionDuration,
                        i = t.startDate,
                        o = t.endDate,
                        d = t.status,
                        l = Object(s.b)().t,
                        u = d === ne.a.ToBeAnnounced || d === ne.a.Closed;
                    return Object(le.jsxs)(le.Fragment, { children: [Object(le.jsx)(a.nc, { fontSize: "12px", bold: !0, color: "secondary", textTransform: "uppercase", mb: "8px", children: l("Auction Schedule") }), Object(le.jsxs)(Pe, { children: [!u && Object(le.jsxs)(a.X, { justifyContent: "space-between", mb: "8px", children: [Object(le.jsx)(a.nc, { small: !0, color: "textSubtle", children: l("Auction duration") }), Object(le.jsx)(a.nc, { small: !0, children: l("%numHours% hours", { numHours: "~".concat(r.toString()) }) })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", mb: "8px", children: [Object(le.jsx)(a.nc, { small: !0, color: "textSubtle", children: l("Start") }), u ? Object(le.jsx)(a.nc, { small: !0, children: l("To be announced") }) : Object(le.jsxs)(a.n, { children: [Object(le.jsx)(a.nc, { small: !0, children: Object(Te.default)(i, "MMMM dd yyyy hh:mm aa") }), Object(le.jsx)(a.nc, { small: !0, textAlign: "right", children: l("Block %num%", { num: n }) })] })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", children: [Object(le.jsx)(a.nc, { small: !0, color: "textSubtle", children: l("End") }), u ? Object(le.jsx)(a.nc, { small: !0, children: l("To be announced") }) : Object(le.jsxs)(a.n, { children: [Object(le.jsx)(a.nc, { small: !0, children: Object(Te.default)(o, "MMMM dd yyyy hh:mm aa") }), Object(le.jsx)(a.nc, { small: !0, textAlign: "right", children: l("Block %num%", { num: c }) })] })] })] })] })
                },
                Le = function() {
                    var e = Object(s.b)().t,
                        t = Object(a.Oc)(Object(le.jsxs)(le.Fragment, { children: [Object(le.jsx)(a.nc, { mb: "16px", children: e("Only whitelisted project wallets can bid in the auction to create Community Farms.") }), Object(le.jsx)(a.nc, { mb: "16px", children: e("Bidding is only possible while the auction is live.") }), Object(le.jsx)(a.nc, { children: e("If you\u2019re sure your project should be able to bid in this auction, make sure you\u2019re connected with the correct (whitelisted) wallet.") })] }), { placement: "bottom" }),
                        n = t.tooltip,
                        c = t.targetRef,
                        r = t.tooltipVisible;
                    return Object(le.jsxs)(a.X, { justifyContent: "center", alignItems: "center", children: [Object(le.jsx)(a.nc, { color: "textSubtle", small: !0, mr: "8px", children: e("Why cant I bid for a farm?") }), Object(le.jsx)("span", { ref: c, children: Object(le.jsx)(a.ab, { color: "textSubtle", height: "16px", width: "16px" }) }), r && n] })
                },
                Ie = n(157),
                qe = function() {
                    var e = Object(r.useState)(null),
                        t = Object(j.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        i = Object(we.j)();
                    return Object(r.useEffect)((function() {
                        n || function() {
                            var e = Object(h.a)(x.a.mark((function e() {
                                var t, n, r, a;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, i.viewBidders(0, D.b);
                                        case 3:
                                            t = e.sent, n = Object(j.a)(t, 1), r = n[0], a = r.map((function(e) { return X(e) })), c(a), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch list of whitelisted addresses", e.t0);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [i, n]), n
                },
                Me = Object(i.e)(a.wb)(K || (K = Object(c.a)(["\n  & > div:nth-child(2) {\n    padding: 0;\n  }\n"]))),
                Ue = Object(i.e)(a.X)(Z || (Z = Object(c.a)(["\n  border-bottom: 1px solid ", ";\n"])), (function(e) { return e.theme.colors.cardBorder })),
                Re = i.e.div(_ || (_ = Object(c.a)(["\n  display: grid;\n  grid-template-columns: 3fr 5fr 0.5fr;\n  border-bottom: 1px solid ", ";\n  padding: 8px 24px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.5;\n  }\n"])), (function(e) { return e.theme.colors.cardBorder })),
                ze = function(e) {
                    var t = e.bidder,
                        n = e.isMobile,
                        c = t.farmName,
                        r = t.tokenName,
                        i = t.account,
                        o = t.projectSite;
                    return Object(le.jsx)("a", { href: o, target: "_blank", rel: "noopener noreferrer", children: Object(le.jsxs)(Re, { children: [Object(le.jsxs)(a.X, { flexDirection: "column", flex: "3", children: [Object(le.jsx)(a.nc, { children: c }), Object(le.jsx)(a.nc, { fontSize: "12px", color: "textSubtle", children: r })] }), Object(le.jsx)(a.X, { justifyContent: ["center", null, "flex-start"], alignItems: "center", flex: "6", children: Object(le.jsx)(a.nc, { mr: "8px", children: n ? Object(Ie.a)(i) : i }) }), Object(le.jsx)(a.Gb, { color: "primary" })] }) })
                },
                We = function(e) {
                    var t = e.onDismiss,
                        n = Object(r.useState)(""),
                        c = Object(j.a)(n, 2),
                        i = c[0],
                        o = c[1],
                        d = Object(s.b)().t,
                        l = Object(u.a)().theme,
                        b = Object(a.Lc)().isMobile,
                        p = qe(),
                        x = p ? p.filter((function(e) {
                            var t = e.farmName,
                                n = e.tokenName,
                                c = e.account;
                            return t.toLowerCase().includes(i.toLowerCase()) || n.toLowerCase().includes(i.toLowerCase()) || c.toLowerCase().includes(i.toLowerCase())
                        })) : [],
                        h = p ? x.map((function(e) { return Object(le.jsx)(ze, { bidder: e, isMobile: b }, e.account) })) : Object(le.jsx)(a.X, { justifyContent: "center", alignItems: "center", py: "24px", children: Object(le.jsx)(a.Xb, {}) });
                    return Object(le.jsxs)(Me, { p: "0", title: d("All Whitelisted Project Wallets"), onDismiss: t, headerBackground: l.colors.gradients.cardHeader, children: [Object(le.jsx)(Ue, { py: "16px", px: "24px", children: Object(le.jsx)(a.fb, { placeholder: d("Search address or token"), value: i, onChange: function(e) { o(e.target.value) } }) }), Object(le.jsx)(a.n, { pb: "24px", overflow: "scroll", maxHeight: "245px", children: h })] })
                },
                He = function() {
                    var e = qe(),
                        t = Object(a.Mc)(Object(le.jsx)(We, {})),
                        n = Object(j.a)(t, 1)[0];
                    return e ? Object(le.jsx)(a.r, { p: "0", variant: "text", scale: "sm", onClick: n, children: e.length }) : Object(le.jsx)(a.Ub, { height: "24px", width: "46px" })
                },
                Ke = Object(i.e)(a.n)(Q || (Q = Object(c.a)(["\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.dropdown })),
                Ze = function(e) {
                    var t = e.auction,
                        n = Object(r.useState)(!1),
                        c = Object(j.a)(n, 2),
                        i = c[0],
                        o = c[1],
                        d = Object(s.b)().t,
                        l = t.topLeaderboard,
                        u = t.status,
                        b = u === ne.a.Pending || u === ne.a.Open;
                    return Object(le.jsxs)(a.x, { p: "0", children: [i && Object(le.jsx)(Ke, { children: Object(le.jsxs)(a.X, { p: "16px", flexDirection: "column", children: [b && Object(le.jsxs)(a.X, { justifyContent: "space-between", width: "100%", pt: "8px", px: "8px", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: d("Farms available") }), Object(le.jsxs)(a.nc, { children: [l, " (", d("top %num% bidders", { num: l }), ")"] })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", width: "100%", pt: "8px", px: "8px", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: d("Multiplier per farm") }), Object(le.jsxs)(a.nc, { children: ["1x ", d("each")] })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", width: "100%", pt: "8px", px: "8px", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: d("Total whitelisted bidders") }), Object(le.jsx)(He, {})] })] }) }), Object(le.jsx)(a.X, { p: "8px", alignItems: "center", justifyContent: "center", children: Object(le.jsx)(a.V, { expanded: i, onClick: function() { return o((function(e) { return !e })) }, children: d(i ? "Hide" : "Details") }) })] })
                },
                _e = Object(i.e)(a.v)(G || (G = Object(c.a)(["\n  flex: 1;\n"]))),
                Qe = function(e) {
                    var t = e.auction,
                        n = e.connectedBidder,
                        c = e.refreshBidders,
                        r = Object(s.b)().t,
                        i = Object(a.Mc)(Object(le.jsx)(Ne, { connectedBidder: n, refreshBidders: c, initialBidAmount: null === t || void 0 === t ? void 0 : t.initialBidAmount })),
                        o = Object(j.a)(i, 1)[0];
                    if (!t) return Object(le.jsxs)(_e, { mb: ["24px", null, null, "0"], children: [Object(le.jsx)(a.y, { children: Object(le.jsx)(a.Z, { children: r("Current Auction") }) }), Object(le.jsx)(a.w, { children: Object(le.jsx)(a.X, { justifyContent: "center", alignItems: "center", height: "100%", children: Object(le.jsx)(a.Xb, {}) }) })] });
                    var d = t.status === ne.a.Closed ? r("Next Auction") : r("Current Auction");
                    return Object(le.jsxs)(_e, {
                        mb: ["24px", null, null, "0"],
                        children: [Object(le.jsx)(a.y, { children: Object(le.jsx)(a.Z, { children: d }) }), Object(le.jsxs)(a.w, {
                            children: [Object(le.jsx)(Xe, { auction: t }), Object(le.jsx)(a.X, {
                                mt: "24px",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                children: function() {
                                    var e = !n || n && !n.isWhitelisted,
                                        c = !e && n.bidderData;
                                    if (e || t.status !== ne.a.Open) return Object(le.jsx)(Le, {});
                                    if (c) {
                                        var i = n.bidderData,
                                            s = i.amount,
                                            d = i.position;
                                        return Object(le.jsxs)(le.Fragment, { children: [Object(le.jsx)(a.kc, { outline: !0, variant: "success", startIcon: Object(le.jsx)(a.F, {}), children: r("Connected as %projectName%", { projectName: n.bidderData.tokenName }) }), Object(le.jsxs)(a.X, { justifyContent: "space-between", width: "100%", pt: "24px", children: [Object(le.jsx)(a.nc, { small: !0, color: "textSubtle", children: r("Your existing bid") }), Object(le.jsxs)(a.nc, { small: !0, children: [Object(he.g)(s).toLocaleString(), " CAKE"] })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", width: "100%", pt: "8px", children: [Object(le.jsx)(a.nc, { small: !0, color: "textSubtle", children: r("Your position") }), Object(le.jsx)(a.nc, { small: !0, children: d ? "#".concat(d) : "-" })] }), Object(le.jsx)(a.r, { my: "24px", width: "100%", onClick: o, children: r("Place bid") }), Object(le.jsx)(a.nc, { color: "textSubtle", small: !0, children: r("If your bid is unsuccessful, you\u2019ll be able to reclaim your CAKE after the auction.") })] })
                                    }
                                    return Object(le.jsxs)(le.Fragment, { children: [Object(le.jsx)(a.Ub, { width: "200px", height: "28px" }), Object(le.jsxs)(a.X, { justifyContent: "space-between", width: "100%", pt: "24px", px: "8px", children: [Object(le.jsx)(a.Ub, { width: "120px", height: "24px" }), Object(le.jsx)(a.Ub, { width: "86px", height: "24px" })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", width: "100%", pt: "8px", px: "8px", children: [Object(le.jsx)(a.Ub, { width: "96px", height: "24px" }), Object(le.jsx)(a.Ub, { width: "42px", height: "24px" })] })] })
                                }()
                            })]
                        }), Object(le.jsx)(Ze, { auction: t })]
                    })
                },
                Ge = n(885),
                Ye = n(19),
                Ve = function(e) {
                    var t = Object(r.useState)({}),
                        n = Object(j.a)(t, 2),
                        c = n[0],
                        i = n[1],
                        a = Object(we.j)();
                    return Object(r.useEffect)((function() {
                        var t = function() {
                            var t = Object(h.a)(x.a.mark((function t() {
                                var n, c, r, o, s, d;
                                return x.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, a.auctions(e);
                                        case 3:
                                            return n = t.sent, t.next = 6, se(e, n);
                                        case 6:
                                            return c = t.sent, t.next = 9, a.viewBidsPerAuction(e, 0, D.a);
                                        case 9:
                                            r = t.sent, o = Object(j.a)(r, 1), s = o[0], d = ie(s, c), i((function(t) { return Object(f.a)(Object(f.a)({}, t), {}, Object(Ye.a)({}, e, { auction: c, bidders: d })) })), t.next = 19;
                                            break;
                                        case 16:
                                            t.prev = 16, t.t0 = t.catch(0), console.error("Failed to fetch auction history", t.t0);
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 16]
                                ])
                            })));
                            return function() { return t.apply(this, arguments) }
                        }();
                        !c[e] && e > 0 && t()
                    }), [a, c, e]), c
                },
                Je = n(38),
                $e = i.e.div(Y || (Y = Object(c.a)(["\n  display: grid;\n  grid-template-columns: 1fr 5fr 3fr 1fr;\n  ", " {\n    grid-template-columns: 3fr 5fr 5fr 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                et = Object(i.e)(a.X)(V || (V = Object(c.a)(["\n  height: 65px;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n\n  ", "\n"])), (function(e) { return e.theme.colors.cardBorder }), (function(e) { var t = e.theme; return e.isTopPosition && "background-color: ".concat(t.colors.warning, "2D;") })),
                tt = function(e) {
                    var t = e.bidder,
                        n = e.cakePriceBusd,
                        c = e.isMobile,
                        r = Object(s.b)().t,
                        i = t.isTopPosition,
                        o = t.position,
                        d = t.samePositionAsAbove,
                        l = t.farmName,
                        u = t.tokenName,
                        b = t.amount,
                        j = t.projectSite,
                        p = t.lpAddress,
                        x = t.account;
                    return Object(le.jsxs)(le.Fragment, { children: [Object(le.jsx)(et, { isTopPosition: i, pl: ["12px", "24px"], children: Object(le.jsx)(a.X, { children: Object(le.jsxs)(a.nc, { bold: i, color: d ? "textDisabled" : "text", textTransform: "uppercase", children: ["#", o] }) }) }), Object(le.jsx)(et, { isTopPosition: i, children: Object(le.jsxs)(a.X, { flexDirection: "column", pl: ["8px"], children: [Object(le.jsxs)(a.X, { children: [Object(le.jsx)(a.nc, { bold: i, mr: "4px", children: l }), !c && Object(le.jsx)(a.nc, { children: "(1x)" })] }), Object(le.jsx)(a.nc, { fontSize: "12px", color: "textSubtle", children: u })] }) }), Object(le.jsx)(et, { isTopPosition: i, children: Object(le.jsxs)(a.X, { flexDirection: "column", width: "100%", justifyContent: "flex-end", pr: [null, null, "24px"], children: [Object(le.jsx)(a.nc, { bold: !0, textTransform: "uppercase", width: "100%", textAlign: "right", children: Object(he.g)(b).toLocaleString() }), n.gt(0) ? Object(le.jsxs)(a.nc, { fontSize: "12px", color: "textSubtle", textAlign: "right", children: ["~$", Object(he.g)(b.times(n)).toLocaleString("en", { maximumFractionDigits: 0 })] }) : Object(le.jsx)(a.X, { justifyContent: "flex-end", children: Object(le.jsx)(a.Ub, { width: "48px" }) })] }) }), Object(le.jsx)(et, { isTopPosition: i, children: Object(le.jsxs)(a.cc, { component: Object(le.jsx)(a.S, { height: "16px", width: "16px" }), children: [j && Object(le.jsx)(a.dc, { as: a.jb, href: j, bold: !1, color: "text", children: r("Project Site") }), p && Object(le.jsx)(a.dc, { as: a.jb, href: "/info/pool/".concat(p), bold: !1, color: "text", children: r("LP Info") }), x && Object(le.jsx)(a.dc, { as: a.jb, href: Object(Je.e)(x, "address"), bold: !1, color: "text", children: r("Bidder Address") })] }) })] })
                },
                nt = function(e) {
                    var t = e.bidders,
                        n = e.noBidsText,
                        c = Object(r.useState)(10),
                        i = Object(j.a)(c, 2),
                        o = i[0],
                        d = i[1],
                        l = Object(Be.g)(),
                        u = Object(s.b)().t,
                        b = Object(a.Lc)().isMobile,
                        p = Object(a.Mc)(Object(le.jsx)(We, {})),
                        x = Object(j.a)(p, 1)[0],
                        h = t.length;
                    return 0 === h ? Object(le.jsxs)(a.X, { justifyContent: "center", alignItems: "center", flexDirection: "column", py: "24px", children: [Object(le.jsx)(a.nc, { mb: "8px", children: n }), Object(le.jsx)(a.q, { height: "64px", width: "64px" })] }) : Object(le.jsxs)(a.n, { children: [Object(le.jsxs)($e, { children: [Object(le.jsx)(a.nc, { color: "secondary", bold: !0, fontSize: "12px", textTransform: "uppercase", pl: ["12px", "24px"], py: "16px", children: u("Position") }), Object(le.jsx)(a.nc, { color: "secondary", bold: !0, fontSize: "12px", textTransform: "uppercase", pl: ["8px"], py: "16px", children: u("Farm") }), Object(le.jsx)(a.nc, { color: "secondary", bold: !0, fontSize: "12px", textTransform: "uppercase", textAlign: "right", pr: [null, null, "24px"], py: "16px", children: u("CAKE bid") }), Object(le.jsx)(a.n, {}), t.slice(0, o).map((function(e) { return Object(le.jsx)(tt, { bidder: e, cakePriceBusd: l, isMobile: b }, e.account) }))] }), Object(le.jsxs)(a.X, { mt: "16px", px: "24px", flexDirection: "column", justifyContent: "center", alignItems: "center", children: [o <= 10 && h > 10 && Object(le.jsxs)(a.nc, { color: "textSubtle", textAlign: "center", children: [u("Showing top 10 bids only."), " ", Object(le.jsx)(a.r, { px: "0", variant: "text", onClick: x, children: u("See all whitelisted bidders") })] }), o < h && Object(le.jsx)(a.r, { mt: "16px", variant: "text", onClick: function() { return d((function(e) { return h - e > 10 ? e + 10 : h })) }, children: u("Show More") })] })] })
                },
                ct = Object(i.e)(a.cb)(J || (J = Object(c.a)(["\n  width: 32px;\n\n  :disabled {\n    background: none;\n\n    svg {\n      fill: ", ";\n\n      path {\n        fill: ", ";\n      }\n    }\n  }\n"])), (function(e) { return e.theme.colors.textDisabled }), (function(e) { return e.theme.colors.textDisabled })),
                rt = function(e) {
                    var t = e.mostRecentClosedAuctionId,
                        n = Object(r.useState)(t ? t.toString() : "0"),
                        c = Object(j.a)(n, 2),
                        i = c[0],
                        o = c[1],
                        d = parseInt(i, 10),
                        l = Object(s.b)().t,
                        u = Object(a.Lc)(),
                        b = u.isXs,
                        p = u.isSm,
                        x = u.isMd,
                        h = u.isLg,
                        f = u.isXl,
                        O = u.isXxl,
                        m = h || f || O,
                        v = b || p || x,
                        g = Ve(d),
                        w = Object.values(g).find((function(e) { return e.auction.id === d })),
                        C = w ? Object(le.jsx)(nt, { bidders: w.bidders, noBidsText: "No bids were placed in this auction" }) : Object(le.jsx)(a.X, { justifyContent: "center", alignItems: "center", p: "24px", height: "250px", children: Object(le.jsx)(a.Xb, {}) });
                    Number.isNaN(d) && (C = Object(le.jsxs)(a.X, { flexDirection: "column", justifyContent: "center", alignItems: "center", p: "24px", height: "250px", children: [Object(le.jsx)(a.nc, { mb: "8px", children: l("Please specify auction ID") }), Object(le.jsx)(a.q, { height: "64px", width: "64px" })] }));
                    var A = w ? Object(Te.default)(w.auction.endDate, "MMM. dd yyyy, hh:mm aa") : null,
                        k = function(e) { o(e ? e.toString() : "1") };
                    return Object(le.jsxs)(a.n, {
                        py: "24px",
                        children: [Object(le.jsxs)(a.X, {
                            px: ["12px", "24px"],
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [Object(le.jsxs)(a.X, {
                                flex: "3",
                                alignItems: "center",
                                children: [Object(le.jsx)(a.nc, { bold: !0, fontSize: m ? "20px" : "16px", mr: ["4px", "8px"], children: l("Auction #") }), Object(le.jsx)(a.n, {
                                    width: "62px",
                                    mr: ["4px", "16px"],
                                    children: Object(le.jsx)(a.fb, {
                                        disabled: !t,
                                        type: "input",
                                        value: i,
                                        onChange: function(e) {
                                            var n = e.target.value;
                                            if (n) {
                                                var c = n;
                                                parseInt(n, 10) <= 0 && (c = ""), parseInt(n, 10) >= t && (c = t.toString()), o(c)
                                            } else o("")
                                        }
                                    })
                                }), Object(le.jsx)(ct, { disabled: !d || d <= 1, variant: "text", scale: "sm", mr: ["8px", "12px"], onClick: function() { return k(d - 1) }, children: Object(le.jsx)(a.c, {}) }), Object(le.jsx)(ct, { disabled: d >= t, variant: "text", scale: "sm", mr: ["8px", "12px"], onClick: function() { return k(d + 1) }, children: Object(le.jsx)(a.f, {}) }), Object(le.jsx)(ct, { disabled: d >= t, variant: "text", scale: "sm", onClick: function() { return k(t) }, children: Object(le.jsx)(a.g, {}) })]
                            }), m && Object(le.jsx)(a.X, { flex: "2", justifyContent: "flex-end", children: A && Object(le.jsx)(a.nc, { children: l("Ended %date%", { date: A }) }) })]
                        }), v && Object(le.jsx)(a.X, { px: ["12px", "24px"], pt: "8px", children: A && Object(le.jsx)(a.nc, { children: l("Ended %date%", { date: A }) }) }), t ? C : Object(le.jsxs)(a.X, { flexDirection: "column", justifyContent: "center", alignItems: "center", p: "24px", height: "250px", children: [Object(le.jsx)(a.nc, { mb: "8px", children: l("No history yet") }), Object(le.jsx)(a.q, { height: "64px", width: "64px" })] })]
                    })
                },
                it = n(956),
                at = n(111),
                ot = function(e) {
                    var t = e.auction,
                        n = Object(r.useState)(0),
                        c = Object(j.a)(n, 2),
                        i = c[0],
                        o = c[1],
                        s = Object(at.a)().slowRefresh;
                    return Object(r.useEffect)((function() {
                        if (t.status === ne.a.ToBeAnnounced || t.status === ne.a.Pending) o(0);
                        else {
                            var e = new Date,
                                n = Object(it.a)(t.endDate, t.startDate),
                                c = 100 * Object(it.a)(e, t.startDate) / n;
                            o(c < 100 ? c : 100)
                        }
                    }), [s, t]), Object(le.jsx)(a.Pb, { variant: "flat", primaryStep: i })
                },
                st = i.e.div($ || ($ = Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: ", ";\n  color: white;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  width: 94px;\n  height: 94px;\n  z-index: 1;\n  clip-path: polygon(0 0, 40% 0, 100% 60%, 100% 100%);\n\n  & > div {\n    padding-top: 23%;\n    overflow: hidden;\n    transform: rotate(45deg);\n  }\n"])), (function(e) {
                    var t = e.theme,
                        n = e.color;
                    return t.colors[n]
                })),
                dt = function(e) {
                    var t = e.auction,
                        n = e.noAuctionHistory,
                        c = Object(s.b)().t,
                        r = t.status;
                    if (n) return null;
                    var i = c("Finished"),
                        o = "textDisabled";
                    return r === ne.a.Open && (i = "".concat(c("Live"), "!"), o = "success"), r === ne.a.Pending && (i = "".concat(c("Get ready"), "!"), o = "warning"), Object(le.jsx)(st, { color: o, children: Object(le.jsx)(a.nc, { color: "white", textTransform: "uppercase", children: i }) })
                },
                lt = Object(i.e)(a.v)(ee || (ee = Object(c.a)(["\n  width: 100%;\n  flex: 2;\n"])));
            ! function(e) { e[e.Latest = 0] = "Latest", e[e.Archive = 1] = "Archive" }(te || (te = {}));
            var ut, bt, jt, pt, xt, ht, ft, Ot, mt = function(e, t) { return t === ne.a.Closed ? e : 0 === e ? null : e - 1 },
                vt = function(e) {
                    var t = e.auction,
                        n = e.bidders,
                        c = Object(s.b)().t,
                        i = Object(r.useState)(te.Latest),
                        o = Object(j.a)(i, 2),
                        d = o[0],
                        l = o[1];
                    if (!t || !n) return Object(le.jsxs)(lt, { children: [Object(le.jsxs)(Ge.b, { children: [Object(le.jsx)(Ge.a, { isActive: d === te.Latest, onClick: function() { return l(te.Latest) }, children: c("Latest") }), Object(le.jsx)(Ge.a, { isActive: d === te.Archive, onClick: function() { return l(te.Archive) }, children: c("Archive") })] }), Object(le.jsx)(a.X, { justifyContent: "center", alignItems: "center", flexDirection: "column", height: "320px", children: Object(le.jsx)(a.Xb, {}) })] });
                    var u = t.id,
                        b = t.status;
                    return Object(le.jsxs)(lt, { children: [Object(le.jsxs)(Ge.b, { children: [Object(le.jsx)(Ge.a, { isActive: d === te.Latest, onClick: function() { return l(te.Latest) }, children: c("Latest") }), Object(le.jsx)(Ge.a, { isActive: d === te.Archive, onClick: function() { return l(te.Archive) }, children: c("Archive") })] }), d === te.Latest ? Object(le.jsxs)(a.n, { position: "relative", children: [Object(le.jsx)(a.nc, { bold: !0, fontSize: "20px", py: "24px", px: ["12px", "24px"], children: c("Auction #%auctionId%", { auctionId: u }) }), Object(le.jsx)(dt, { auction: t, noAuctionHistory: null === mt(u, b) }), Object(le.jsx)(ot, { auction: t }), Object(le.jsx)(nt, { bidders: n, noBidsText: "No bids yet" })] }) : Object(le.jsx)(rt, { mostRecentClosedAuctionId: mt(u, b) })] })
                },
                gt = n(841),
                wt = n.n(gt),
                Ct = n(255),
                At = n(745),
                kt = n(376),
                Bt = Object(i.e)(a.X)(ut || (ut = Object(c.a)(["\n  align-items: flex-end;\n  margin: 0 16px 0 16px;\n"]))),
                yt = function(e) {
                    var t = e.auction,
                        n = Object(s.b)().t;
                    if (!t) return Object(le.jsx)(a.X, { justifyContent: "center", alignItems: "center", mb: "48px", children: Object(le.jsx)(a.Ub, { width: "256px", height: "40px" }) });
                    if (t.status === ne.a.ToBeAnnounced || t.status === ne.a.Closed) return null;
                    if (t.status === ne.a.Finished) return Object(le.jsxs)(a.X, { justifyContent: "center", alignItems: "center", mb: "48px", children: [Object(le.jsxs)(a.nc, { bold: !0, children: [n("Closing"), "..."] }), Object(le.jsx)(a.Lb, { height: "40px", width: "40px" })] });
                    var c = t.startDate,
                        r = t.endDate,
                        i = Object(At.default)(c, new Date) ? c : r,
                        o = n(i === r ? "Ending in" : "Next auction"),
                        d = Object(it.a)(i, new Date),
                        l = Object(kt.a)(d),
                        u = l.days,
                        b = l.hours,
                        j = l.minutes;
                    return Object(le.jsxs)(a.X, { justifyContent: "center", alignItems: "center", mb: "48px", children: [Object(le.jsxs)(a.nc, { bold: !0, children: [o, ": "] }), Object(le.jsxs)(Bt, { children: [0 !== u && Object(le.jsxs)(le.Fragment, { children: [Object(le.jsx)(a.nc, { verticalAlign: "baseline", lineHeight: "28px", fontSize: "24px", bold: !0, color: "secondary", mr: "4px", children: u }), Object(le.jsx)(a.nc, { verticalAlign: "baseline", bold: !0, mr: "4px", children: n("d") })] }), Object(le.jsx)(a.nc, { verticalAlign: "baseline", lineHeight: "28px", fontSize: "24px", bold: !0, color: "secondary", mr: "4px", children: b }), Object(le.jsx)(a.nc, { verticalAlign: "baseline", bold: !0, mr: "4px", children: n("h") }), Object(le.jsx)(a.nc, { verticalAlign: "baseline", lineHeight: "28px", fontSize: "24px", bold: !0, color: "secondary", mr: "4px", children: j }), Object(le.jsx)(a.nc, { verticalAlign: "baseline", bold: !0, children: n("m") })] }), Object(le.jsx)(a.Lb, { height: "40px", width: "40px" })] })
                },
                St = { auctions: [], currentCursor: 0, nextCursor: 0, nextAuctionToCheck: 0, auctionToReclaim: null, loading: !1 },
                Dt = function(e, t) {
                    switch (t.type) {
                        case "setAuctions":
                            return { auctions: t.payload.auctions, currentCursor: e.currentCursor, nextCursor: t.payload.nextCursor, nextAuctionToCheck: 0, auctionToReclaim: null, loading: !1 };
                        case "setAuctionToReclaim":
                            return Object(f.a)(Object(f.a)({}, e), {}, { auctionToReclaim: t.payload.auctionToReclaim, loading: !1 });
                        case "checkNextAuction":
                            var n = e.nextAuctionToCheck + 1;
                            return n === e.auctions.length ? Object(f.a)(Object(f.a)({}, e), {}, { auctions: [], currentCursor: e.nextCursor, auctionToReclaim: null, loading: !1 }) : Object(f.a)(Object(f.a)({}, e), {}, { nextAuctionToCheck: n, auctionToReclaim: null, loading: !1 });
                        case "setLoading":
                            return Object(f.a)(Object(f.a)({}, e), {}, { loading: t.payload.loading });
                        case "reset":
                            return St;
                        default:
                            return e
                    }
                },
                Ft = function() {
                    var e = Object(o.c)().account,
                        t = Object(r.useReducer)(Dt, St),
                        n = Object(j.a)(t, 2),
                        c = n[0],
                        i = n[1],
                        a = Object(we.j)();
                    return Object(r.useEffect)((function() { i({ type: "reset" }) }), [e]), Object(r.useEffect)((function() {
                        var t = function() {
                            var t = Object(h.a)(x.a.mark((function t() {
                                var n, r, o, s;
                                return x.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, i({ type: "setLoading", payload: { loading: !0 } }), t.next = 4, a.viewBidderAuctions(e, c.currentCursor, D.m);
                                        case 4:
                                            n = t.sent, r = de(n), o = r.auctions, s = r.nextCursor, o.length > 0 && i({ type: "setAuctions", payload: { auctions: o, nextCursor: s } }), t.next = 13;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t.catch(0), console.error("Failed to fetch auctions for bidder", t.t0), i({ type: "setLoading", payload: { loading: !1 } });
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 9]
                                ])
                            })));
                            return function() { return t.apply(this, arguments) }
                        }();
                        !c.loading && e && c.currentCursor === c.nextCursor && t()
                    }), [e, c, a]), Object(r.useEffect)((function() {
                        var t = function() {
                                var t = Object(h.a)(x.a.mark((function t(n) {
                                    var c, r, o, s, d, l, u;
                                    return x.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return i({ type: "setLoading", payload: { loading: !0 } }), t.prev = 1, t.next = 4, a.claimable(n.id, e);
                                            case 4:
                                                if (!t.sent) { t.next = 18; break }
                                                return t.next = 8, a.viewBidsPerAuction(n.id, 0, 500);
                                            case 8:
                                                c = t.sent, r = Object(j.a)(c, 1), o = r[0], s = ie(o), d = s.find((function(t) { return t.account === e })), l = null === d || void 0 === d ? void 0 : d.position, u = { id: n.id, amount: n.amount, position: l }, i({ type: "setAuctionToReclaim", payload: { auctionToReclaim: u } }), t.next = 19;
                                                break;
                                            case 18:
                                                i({ type: "checkNextAuction" });
                                            case 19:
                                                t.next = 25;
                                                break;
                                            case 21:
                                                t.prev = 21, t.t0 = t.catch(1), i({ type: "setLoading", payload: { loading: !1 } }), console.error("Failed to check for unclaim bids", t.t0);
                                            case 25:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 21]
                                    ])
                                })));
                                return function(e) { return t.apply(this, arguments) }
                            }(),
                            n = c.auctions,
                            r = c.nextAuctionToCheck,
                            o = c.loading;
                        n.length > 0 && e && !o && t(n[r])
                    }), [e, c, a]), [c.auctionToReclaim, function() { i({ type: "checkNextAuction" }) }]
                },
                Et = Object(i.e)(a.v)(bt || (bt = Object(c.a)(["\n  margin-top: 16px;\n  flex: 1;\n"]))),
                Nt = function() {
                    var e = Object(s.b)().t,
                        t = Object(o.c)().account,
                        n = Object(ye.a)().callWithGasPrice,
                        c = Ft(),
                        r = Object(j.a)(c, 2),
                        i = r[0],
                        d = r[1],
                        l = Object(we.c)(),
                        u = Object(we.j)(),
                        b = Object(Ce.a)().toastSuccess,
                        p = Object(ge.a)({
                            onRequiresApproval: function() {
                                var e = Object(h.a)(x.a.mark((function e() {
                                    var n, c;
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, l.allowance(t, u.address);
                                            case 3:
                                                return n = e.sent, c = Object(ce.d)(n), e.abrupt("return", c.gt(0));
                                            case 8:
                                                return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 8]
                                    ])
                                })));
                                return function() { return e.apply(this, arguments) }
                            }(),
                            onApprove: function() { return n(l, "approve", [u.address, me.a.constants.MaxUint256]) },
                            onApproveSuccess: function() {
                                var t = Object(h.a)(x.a.mark((function t(n) {
                                    var c;
                                    return x.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                c = n.receipt, b(e("Contract approved - you can now reclaim your bid!"), Object(le.jsx)(Se.b, { txHash: c.transactionHash }));
                                            case 2:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) { return t.apply(this, arguments) }
                            }(),
                            onConfirm: function() { return n(u, "claimAuction", [i.id]) },
                            onSuccess: function() {
                                var t = Object(h.a)(x.a.mark((function t(n) {
                                    var c;
                                    return x.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                c = n.receipt, d(), b(e("Bid reclaimed!"), Object(le.jsx)(Se.b, { txHash: c.transactionHash }));
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) { return t.apply(this, arguments) }
                            }()
                        }),
                        f = p.isApproving,
                        O = p.isApproved,
                        m = p.isConfirming,
                        v = p.handleApprove,
                        g = p.handleConfirm;
                    if (!i) return null;
                    var w = i.position,
                        C = i.amount;
                    return Object(le.jsxs)(Et, { mb: ["24px", null, null, "0"], children: [Object(le.jsx)(a.y, { children: Object(le.jsx)(a.Z, { children: e("Reclaim Bid") }) }), Object(le.jsxs)(a.w, { children: [Object(le.jsx)(a.nc, { mb: "16px", children: e("Your bid in Auction #%auctionId% was unsuccessful.", { auctionId: i.id }) }), Object(le.jsx)(a.nc, { bold: !0, mb: "16px", children: e("Reclaim your CAKE now.") }), Object(le.jsxs)(a.X, { justifyContent: "space-between", mb: "8px", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: e("Your total bid") }), Object(le.jsx)(a.nc, { children: e("%num% CAKE", { num: Object(he.g)(C).toLocaleString() }) })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", mb: "24px", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: e("Your position") }), Object(le.jsxs)(a.nc, { children: ["#", w] })] }), t ? Object(le.jsx)(ke.b, { isApproveDisabled: O, isApproving: f, isConfirmDisabled: !1, isConfirming: m, onApprove: v, onConfirm: g, buttonArrangement: ke.a.SEQUENTIAL, confirmLabel: e("Reclaim") }) : Object(le.jsx)(Ae.a, {})] })] })
                },
                Tt = function(e) {
                    var t = e.connectedBidder,
                        n = e.auction,
                        c = Object(s.b)().t;
                    return t && t.isWhitelisted || !n ? null : Object(le.jsx)(a.X, { mb: "24px", justifyContent: "center", children: Object(le.jsx)(a.tb, { variant: "warning", icon: Object(le.jsx)(a.ab, { width: "24px" }), children: Object(le.jsxs)(a.n, { maxWidth: "800px", children: [Object(le.jsx)(a.nc, { bold: !0, children: c("Notice") }), Object(le.jsx)(a.nc, { children: c("This page is a functional page, for projects to bid for farms.") }), Object(le.jsx)(a.nc, { children: c("If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view the auction bids in real time!") }), Object(le.jsx)(a.nc, { children: c("Connect a whitelisted project wallet to participate in Auctions.") })] }) }) })
                },
                Pt = function(e, t) {
                    var n = Object(r.useState)(null),
                        c = Object(j.a)(n, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(o.c)().account,
                        d = Object(we.j)();
                    return Object(r.useEffect)((function() {
                        var n = function() {
                                var e = Object(h.a)(x.a.mark((function e(t) {
                                    var n, c, r, i, o, l, u, b;
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, d.auctions(t);
                                            case 2:
                                                return n = e.sent, e.next = 5, se(t, n);
                                            case 5:
                                                return c = e.sent, e.next = 8, d.viewBidsPerAuction(t, 0, 500);
                                            case 8:
                                                r = e.sent, i = Object(j.a)(r, 1), o = i[0], l = ie(o), u = c.leaderboardThreshold, l.filter((function(e) { return u.lte(e.amount) })).map((function(e) { return e.account })).includes(s) && (b = l.find((function(e) { return e.account === s })), a({ auction: c, bidderData: b }));
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) { return e.apply(this, arguments) }
                            }(),
                            c = t.filter((function(t) { return e.leaderboardThreshold.lte(t.amount) })).map((function(e) { return e.account })),
                            r = e.id - 1;
                        if (e.status === ne.a.Closed && c.includes(s)) {
                            var i = t.find((function(e) { return e.account === s }));
                            a({ auction: e, bidderData: i })
                        } else r > 0 && n(r)
                    }), [e, t, s, d]), i
                },
                Xt = Object(i.e)(a.v)(jt || (jt = Object(c.a)(["\n  margin-top: 16px;\n  flex: 1;\n"]))),
                Lt = function(e) {
                    var t = e.currentAuction,
                        n = e.bidders,
                        c = Object(s.b)().t,
                        r = Pt(t, n);
                    if (!r) return null;
                    var i = r.auction,
                        o = r.bidderData,
                        d = o.amount,
                        l = o.position;
                    return Object(le.jsxs)(Xt, { mb: ["24px", null, null, "0"], children: [Object(le.jsx)(a.y, { children: Object(le.jsx)(a.Z, { children: c("Congratulations!") }) }), Object(le.jsxs)(a.w, { children: [Object(le.jsx)(a.nc, { mb: "16px", children: c("Your bid in Auction #%auctionId% was successful.", { auctionId: i.id }) }), Object(le.jsx)(a.nc, { children: c("Your Farm will be launched as follows:") }), Object(le.jsxs)(a.X, { flexDirection: "column", mb: "24px", children: [Object(le.jsxs)(a.X, { justifyContent: "space-between", width: "100%", pt: "8px", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: c("Multiplier per farm") }), Object(le.jsxs)(a.nc, { children: ["1x ", c("each")] })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", width: "100%", pt: "8px", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: c("Total whitelisted bidders") }), Object(le.jsx)(He, {})] })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", mb: "8px", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: c("Your total bid") }), Object(le.jsxs)(a.nc, { children: [Object(he.g)(d).toLocaleString(), " CAKE"] })] }), Object(le.jsxs)(a.X, { justifyContent: "space-between", children: [Object(le.jsx)(a.nc, { color: "textSubtle", children: c("Your position") }), Object(le.jsxs)(a.nc, { children: ["#", l] })] })] })] })
                },
                It = n(44),
                qt = Object(i.e)(a.nc)(pt || (pt = Object(c.a)(["\n  font-size: 52px;\n\n  ", " {\n    font-size: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Mt = function() {
                    var e = Object(r.useState)(0),
                        t = Object(j.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        i = Object(s.b)().t,
                        o = Object(we.j)(),
                        d = Object(Be.g)().times(n);
                    return Object(r.useEffect)((function() {
                        0 === n && function() {
                            var e = Object(h.a)(x.a.mark((function e() {
                                var t, n;
                                return x.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, o.totalCollected();
                                        case 3:
                                            t = e.sent, n = Object(ce.d)(t), c(Object(he.g)(n)), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch burned auction cake", e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [n, o]), Object(le.jsxs)(a.X, { flexDirection: ["column-reverse", null, "row"], children: [Object(le.jsxs)(a.X, { flexDirection: "column", flex: "2", children: [0 !== n ? Object(le.jsx)(It.a, { fontSize: "64px", bold: !0, value: n, decimals: 0, unit: " CAKE" }) : Object(le.jsx)(a.Ub, { width: "256px", height: "64px" }), Object(le.jsx)(qt, { textTransform: "uppercase", bold: !0, color: "secondary", children: i("Burned") }), Object(le.jsx)(a.nc, { fontSize: "24px", bold: !0, children: i("through community auctions so far!") }), d.isNaN() || d.isZero() ? Object(le.jsx)(a.Ub, { width: "128px" }) : Object(le.jsxs)(a.nc, { color: "textSubtle", children: ["~$", d.toNumber().toLocaleString("en", { maximumFractionDigits: 0 })] })] }), Object(le.jsx)(a.db, { width: 350, height: 320, src: "/images/burnt-cake.png", alt: i(" ") })] })
                },
                Ut = Object(i.e)(d.a)(xt || (xt = Object(c.a)(["\n  max-height: max-content;\n  margin-bottom: -40px;\n  padding-bottom: 40px;\n  overflow: hidden;\n  ", " {\n    max-height: 600px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Rt = Object(i.e)(a.X)(ht || (ht = Object(c.a)(["\n  flex-direction: column;\n  flex: 1;\n"]))),
                zt = Object(i.e)(a.X)(ft || (ft = Object(c.a)(["\n  align-items: center;\n  justify-content: center;\n  flex: 0.5;\n  & img {\n    height: 50%;\n    width: 50%;\n    max-height: 330px;\n    margin-top: 24px;\n  }\n\n  ", " {\n    & img {\n      height: auto;\n      width: auto;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Wt = Object(i.e)(a.X)(Ot || (Ot = Object(c.a)(["\n  width: 100%;\n  align-items: flex-start;\n\n  ", " {\n    gap: 24px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md }));
            t.default = function() {
                var e = Object(s.b)().t,
                    t = Object(u.a)().theme,
                    n = function(e) {
                        var t = Object(r.useState)(null),
                            n = Object(j.a)(t, 2),
                            c = n[0],
                            i = n[1],
                            a = Object(r.useState)(null),
                            o = Object(j.a)(a, 2),
                            s = o[0],
                            d = o[1],
                            l = Object(r.useState)(null),
                            u = Object(j.a)(l, 2),
                            b = u[0],
                            p = u[1],
                            O = Object(Ct.a)(),
                            m = O.lastUpdated,
                            v = O.setLastUpdated,
                            g = Object(at.a)().fastRefresh,
                            w = Object(we.j)();
                        return Object(r.useEffect)((function() {
                            ! function() {
                                var e = Object(h.a)(x.a.mark((function e() {
                                    var t, n, c;
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, w.currentAuctionId();
                                            case 3:
                                                return t = e.sent, e.next = 6, w.auctions(t);
                                            case 6:
                                                return n = e.sent, e.next = 9, se(t.toNumber(), n);
                                            case 9:
                                                c = e.sent, i(c), e.next = 16;
                                                break;
                                            case 13:
                                                e.prev = 13, e.t0 = e.catch(0), console.error("Failed to fetch current auction", e.t0);
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 13]
                                    ])
                                })));
                                return function() { return e.apply(this, arguments) }
                            }()()
                        }), [w, g]), Object(r.useEffect)((function() {
                            c && function() {
                                var e = Object(h.a)(x.a.mark((function e() {
                                    var t, n, r, i;
                                    return x.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, w.viewBidsPerAuction(c.id, 0, D.a);
                                            case 3:
                                                t = e.sent, n = Object(j.a)(t, 1), r = n[0], i = ie(r, c), d(i), e.next = 13;
                                                break;
                                            case 10:
                                                e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch bidders", e.t0);
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 10]
                                    ])
                                })));
                                return function() { return e.apply(this, arguments) }
                            }()()
                        }), [c, w, m, g]), Object(r.useEffect)((function() {
                            var t = function() {
                                var t = Object(h.a)(x.a.mark((function t() {
                                    var n;
                                    return x.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, w.whitelisted(e);
                                            case 3:
                                                n = t.sent, p({ account: e, isWhitelisted: n }), t.next = 10;
                                                break;
                                            case 7:
                                                t.prev = 7, t.t0 = t.catch(0), console.error("Failed to check if account is whitelisted", t.t0);
                                            case 10:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 7]
                                    ])
                                })));
                                return function() { return t.apply(this, arguments) }
                            }();
                            !e || b && b.account === e || t(), e || p(null)
                        }), [e, b, w]), Object(r.useEffect)((function() {
                            if (b && b.isWhitelisted) {
                                var t = function() { if (s && s.length > 0) { var t = s.find((function(t) { return t.account === e })); if (t) return t } var n = X(e); return Object(f.a)({ position: null, samePositionAsAbove: !1, isTopPosition: !1, amount: ce.c }, n) }();
                                wt()(t, b.bidderData) || p({ account: e, isWhitelisted: !0, bidderData: t })
                            }
                        }), [e, b, s]), { currentAuction: c, bidders: s, connectedBidder: b, refreshBidders: v }
                    }(Object(o.c)().account),
                    c = n.currentAuction,
                    i = n.bidders,
                    d = n.connectedBidder,
                    b = n.refreshBidders,
                    p = "radial-gradient(50% 79.31% at 50% 50%, #FAF9FA 0%, #EAECF4 100%)",
                    O = "radial-gradient(103.12% 50% at 50% 50%, #152534 0%, #191326 100%)";
                return Object(le.jsxs)(le.Fragment, { children: [Object(le.jsxs)(Ut, { children: [Object(le.jsxs)(a.o, { children: [Object(le.jsx)(a.ib, { href: "/", color: "primary", style: { fontWeight: 400 }, children: e("Home") }), Object(le.jsx)(a.ib, { href: "/farms", color: "primary", style: { fontWeight: 400 }, children: e("Farms") }), Object(le.jsx)(a.nc, { children: e("Community Farm Auction") })] }), Object(le.jsxs)(a.X, { flexDirection: ["column-reverse", null, "row"], children: [Object(le.jsxs)(Rt, { children: [Object(le.jsx)(a.Z, { as: "h1", scale: "xxl", my: "24px", children: e("Community Farm Auction") }), Object(le.jsx)(a.nc, { color: "textSubtle", mb: "24px", children: e("Each week, qualifying projects can bid CAKE for the right to host a 7-day Farm on PancakeSwap.") }), Object(le.jsx)(a.nc, { color: "textSubtle", children: e("This page is for projects to bid for farms.") }), Object(le.jsx)(a.nc, { color: "textSubtle", mb: "24px", children: e("If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view what\u2019s going on!") }), Object(le.jsx)(a.ib, { external: !0, href: re, children: Object(le.jsx)(a.r, { children: Object(le.jsx)(a.nc, { color: "white", bold: !0, fontSize: "16px", mr: "4px", children: e("Apply for a Farm/Pool") }) }) })] }), Object(le.jsx)(zt, { children: Object(le.jsx)("img", { src: "/images/decorations/auction-bunny.png", alt: e("auction bunny") }) })] })] }), Object(le.jsxs)(le.Fragment, { children: [Object(le.jsxs)(l.a, { innerProps: { style: { margin: "0", width: "100%" } }, background: t.colors.background, p: "24px 0", index: 2, concaveDivider: !0, dividerPosition: "top", children: [Object(le.jsx)(Tt, { connectedBidder: d, auction: c }), Object(le.jsx)(yt, { auction: c }), Object(le.jsxs)(Wt, { flexDirection: ["column", null, null, "row"], children: [Object(le.jsxs)(a.X, { flex: "1", flexDirection: "column", width: "100%", minWidth: "288px", children: [Object(le.jsx)(Qe, { auction: c, connectedBidder: d, refreshBidders: b }), (null === d || void 0 === d ? void 0 : d.isWhitelisted) && i && c && Object(le.jsx)(Lt, { currentAuction: c, bidders: i }), (null === d || void 0 === d ? void 0 : d.isWhitelisted) && Object(le.jsx)(Nt, {})] }), Object(le.jsx)(vt, { auction: c, bidders: i })] })] }), Object(le.jsx)(l.a, { background: t.isDark ? O : p, index: 2, innerProps: { style: { width: "100%" } }, dividerPosition: "top", dividerFill: { light: "radial-gradient(ellipse at bottom, #f0f1f6, #EAECF4)", dark: "#191326" }, children: Object(le.jsx)(Mt, {}) }), Object(le.jsx)(l.a, { background: t.isDark ? "linear-gradient(180deg, #434575 0%, #66578D 100%)" : "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)", clipFill: { light: "#CBD7EF", dark: "#434575" }, dividerFill: { light: p, dark: O }, concaveDivider: !0, index: 3, dividerPosition: "top", children: Object(le.jsx)(xe, {}) })] })] })
            }
        },
        805: function(e, t, n) {
            "use strict";
            var c = n(3),
                r = n.n(c),
                i = n(13),
                a = n(9),
                o = n(6),
                s = n(1),
                d = n(123),
                l = n(43),
                u = n(95),
                b = n(14),
                j = { approvalState: "idle", confirmState: "idle" },
                p = function(e, t) {
                    switch (t.type) {
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
                            return e
                    }
                };
            t.a = function(e) {
                var t = e.onApprove,
                    n = e.onConfirm,
                    c = e.onRequiresApproval,
                    o = e.onSuccess,
                    x = void 0 === o ? d.noop : o,
                    h = e.onApproveSuccess,
                    f = void 0 === h ? d.noop : h,
                    O = Object(b.b)().t,
                    m = Object(l.c)().account,
                    v = Object(s.useReducer)(p, j),
                    g = Object(a.a)(v, 2),
                    w = g[0],
                    C = g[1],
                    A = Object(s.useRef)(c),
                    k = Object(u.a)().toastError;
                return Object(s.useEffect)((function() { m && A.current && A.current().then((function(e) { e && C({ type: "requires_approval" }) })) }), [m, A, C]), {
                    isApproving: "loading" === w.approvalState,
                    isApproved: "success" === w.approvalState,
                    isConfirming: "loading" === w.confirmState,
                    isConfirmed: "success" === w.confirmState,
                    handleApprove: function() {
                        var e = Object(i.a)(r.a.mark((function e() {
                            var n, c;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t();
                                    case 3:
                                        return n = e.sent, C({ type: "approve_sending" }), e.next = 7, n.wait();
                                    case 7:
                                        (c = e.sent).status && (C({ type: "approve_receipt" }), f({ state: w, receipt: c })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), C({ type: "approve_error" }), k(O("Error"), O("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 11]
                            ])
                        })));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    handleConfirm: function() {
                        var e = Object(i.a)(r.a.mark((function e() {
                            var t, c;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return C({ type: "confirm_sending" }), e.prev = 1, e.next = 4, n();
                                    case 4:
                                        return t = e.sent, e.next = 7, t.wait();
                                    case 7:
                                        (c = e.sent).status && (C({ type: "confirm_receipt" }), x({ state: w, receipt: c })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), C({ type: "confirm_error" }), k(O("Error"), O("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 11]
                            ])
                        })));
                        return function() { return e.apply(this, arguments) }
                    }()
                }
            }
        },
        806: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return o }));
            var c, r, i, a, o, s = n(8),
                d = (n(1), n(5)),
                l = n(2),
                u = n(14),
                b = n(0);
            ! function(e) { e.ROW = "row", e.SEQUENTIAL = "sequential" }(o || (o = {}));
            var j = d.e.div(c || (c = Object(s.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  ", " {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                p = Object(d.e)(l.r)(r || (r = Object(s.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                x = { width: "24px", color: "textDisabled" },
                h = Object(d.e)(l.J).attrs(x)(i || (i = Object(s.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                f = Object(d.e)(l.H).attrs(x)(a || (a = Object(s.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                O = Object(b.jsx)(l.i, { spin: !0, color: "currentColor" });
            t.b = function(e) {
                var t = e.isApproveDisabled,
                    n = e.isApproving,
                    c = e.isConfirming,
                    r = e.isConfirmDisabled,
                    i = e.onApprove,
                    a = e.onConfirm,
                    s = e.buttonArrangement,
                    d = void 0 === s ? o.ROW : s,
                    x = e.confirmLabel,
                    m = e.confirmId,
                    v = Object(u.b)().t,
                    g = null !== x && void 0 !== x ? x : v("Confirm");
                return d === o.ROW ? Object(b.jsxs)(j, { children: [Object(b.jsx)(l.n, { children: Object(b.jsx)(p, { disabled: t, onClick: i, endIcon: n ? O : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }), Object(b.jsxs)(l.X, { justifyContent: "center", children: [Object(b.jsx)(h, {}), Object(b.jsx)(f, {})] }), Object(b.jsx)(l.n, { children: Object(b.jsx)(p, { id: m, onClick: a, disabled: r, isLoading: c, endIcon: c ? O : void 0, children: c ? v("Confirming") : g }) })] }) : Object(b.jsx)(b.Fragment, { children: t ? Object(b.jsx)(l.n, { children: Object(b.jsx)(p, { id: m, onClick: a, disabled: r, isLoading: c, endIcon: c ? O : void 0, children: c ? v("Confirming") : g }) }) : Object(b.jsx)(l.n, { children: Object(b.jsx)(p, { onClick: i, endIcon: n ? O : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }) })
            }
        },
        830: function(e, t, n) {
            "use strict";
            var c, r, i, a, o, s, d, l = n(6),
                u = n(53),
                b = n(8),
                j = (n(1), n(5)),
                p = n(2),
                x = n(248),
                h = n(0),
                f = function(e, t, n) { return Object(j.d)(c || (c = Object(b.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(", ");\n\n  background: ", ";\n\n  & svg {\n    display: block;\n  }\n"])), t, (function() { return e.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || e.colors.background : (null === n || void 0 === n ? void 0 : n.light) || e.colors.background })) },
                O = Object(j.e)(p.n)(r || (r = Object(b.a)(["\n  ", "\n  transform: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.clipPath,
                        c = e.clipFill;
                    return f(t, n, c)
                }), (function(e) { return "#bottomConcaveCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, 1px)" })),
                m = Object(j.e)(p.n)(i || (i = Object(b.a)(["\n  ", "\n  transform: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.clipPath,
                        c = e.clipFill;
                    return f(t, n, c)
                }), (function(e) { return "#bottomConvexCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, -1px)" })),
                v = function(e) { var t = e.clipFill; return Object(h.jsx)(m, { clipFill: t, clipPath: "#topConvexCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "topConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z" }) }) }) }) }) },
                g = function(e) { var t = e.clipFill; return Object(h.jsx)(m, { clipFill: t, clipPath: "#bottomConvexCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "bottomConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }) }) }) }) },
                w = function(e) { var t = e.clipFill; return Object(h.jsx)(O, { clipFill: t, clipPath: "#topConcaveCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "topConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }) }) }) }) },
                C = function(e) { var t = e.clipFill; return Object(h.jsx)(O, { clipFill: t, clipPath: "#bottomConcaveCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "bottomConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z" }) }) }) }) }) },
                A = j.e.div(a || (a = Object(b.a)(["\n  background: ", ";\n  z-index: ", ";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])), (function(e) {
                    var t = e.theme,
                        n = e.dividerFill;
                    return t.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || "none" : (null === n || void 0 === n ? void 0 : n.light) || (null === n || void 0 === n ? void 0 : n.dark) || "none"
                }), (function(e) { return e.index })),
                k = j.e.div(o || (o = Object(b.a)(["\n  z-index: ", ";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])), (function(e) { return e.index + 1 })),
                B = function(e) {
                    var t = e.index,
                        n = e.dividerPosition,
                        c = e.dividerComponent,
                        r = e.concave,
                        i = e.clipFill,
                        a = e.dividerFill,
                        o = "top" === n && !r,
                        s = "bottom" === n && !r,
                        d = "top" === n && r,
                        l = "bottom" === n && r;
                    return Object(h.jsxs)(A, { index: t, dividerFill: a, children: [c && Object(h.jsx)(k, { index: t, children: c }), Object(h.jsxs)(h.Fragment, { children: [d && Object(h.jsx)(w, { clipFill: i }), l && Object(h.jsx)(C, { clipFill: i })] }), Object(h.jsxs)(h.Fragment, { children: [o && Object(h.jsx)(v, { clipFill: i }), s && Object(h.jsx)(g, { clipFill: i })] })] })
                },
                y = ["children", "background", "svgFill", "index", "dividerComponent", "dividerPosition", "hasCurvedDivider", "concaveDivider", "clipFill", "dividerFill", "containerProps", "innerProps"],
                S = Object(j.e)(p.X)(s || (s = Object(b.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ", ";\n  background: ", ";\n  padding: ", ";\n"])), (function(e) { return e.index - 1 }), (function(e) {
                    var t = e.background,
                        n = e.theme;
                    return t || n.colors.background
                }), (function(e) { return (0, e.getPadding)() })),
                D = Object(j.e)(x.a)(d || (d = Object(b.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  ", " {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg }));
            t.a = function(e) {
                var t = e.children,
                    n = e.background,
                    c = e.svgFill,
                    r = e.index,
                    i = void 0 === r ? 1 : r,
                    a = e.dividerComponent,
                    o = e.dividerPosition,
                    s = void 0 === o ? "bottom" : o,
                    d = e.hasCurvedDivider,
                    b = void 0 === d || d,
                    j = e.concaveDivider,
                    x = void 0 !== j && j,
                    f = e.clipFill,
                    O = e.dividerFill,
                    m = e.containerProps,
                    v = e.innerProps,
                    g = Object(u.a)(e, y);
                return Object(h.jsxs)(p.n, Object(l.a)(Object(l.a)({}, m), {}, { children: [b && "top" === s && Object(h.jsx)(B, { svgFill: c, index: i, concave: x, dividerPosition: s, dividerComponent: a, clipFill: f, dividerFill: O }), Object(h.jsx)(S, Object(l.a)(Object(l.a)({ background: n, index: i, getPadding: function() { return b ? "bottom" === s ? "48px 0 14px" : "top" === s ? "14px 0 48px" : "48px 0" : "48px 0" } }, g), {}, { children: Object(h.jsx)(D, Object(l.a)(Object(l.a)({}, v), {}, { children: t })) })), b && "bottom" === s && Object(h.jsx)(B, { svgFill: c, index: i, concave: x, dividerPosition: s, dividerComponent: a, clipFill: f, dividerFill: O })] }))
            }
        },
        840: function(e, t, n) {
            "use strict";
            var c, r, i, a = n(6),
                o = n(9),
                s = n(53),
                d = n(8),
                l = n(1),
                u = n(5),
                b = n(2),
                j = n(14),
                p = n(0),
                x = ["title", "children"],
                h = Object(u.e)(b.X)(c || (c = Object(d.a)(["\n  cursor: pointer;\n"]))),
                f = Object(u.e)(b.X)(r || (r = Object(d.a)(["\n  button {\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]))),
                O = Object(u.e)(b.X)(i || (i = Object(d.a)(["\n  overflow: hidden;\n  height: ", ";\n  padding-bottom: ", ";\n  border-bottom: 1px solid ", ";\n"])), (function(e) { return e.isExpanded ? "100%" : "0px" }), (function(e) { return e.isExpanded ? "16px" : "0px" }), (function(e) { return e.theme.colors.inputSecondary }));
            t.a = function(e) {
                var t = e.title,
                    n = e.children,
                    c = Object(s.a)(e, x),
                    r = Object(j.b)().t,
                    i = Object(l.useState)(!1),
                    d = Object(o.a)(i, 2),
                    u = d[0],
                    m = d[1];
                return Object(p.jsxs)(h, Object(a.a)(Object(a.a)({}, c), {}, { flexDirection: "column", onClick: function() { return m(!u) }, children: [Object(p.jsxs)(b.X, { justifyContent: "space-between", alignItems: "center", pb: "16px", children: [Object(p.jsx)(b.nc, { fontWeight: "bold", children: t }), Object(p.jsx)(f, { children: Object(p.jsx)(b.V, { expanded: u, onClick: function() { return m(!u) }, children: r(u ? "Hide" : "Details") }) })] }), Object(p.jsx)(O, { isExpanded: u, flexDirection: "column", children: n })] }))
            }
        },
        841: function(e, t, n) {
            var c = n(380);
            e.exports = function(e, t) { return c(e, t) }
        },
        861: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var c = n(21),
                r = n(16);

            function i(e, t) {
                Object(r.a)(2, arguments);
                var n = Object(c.default)(e),
                    i = Object(c.default)(t);
                return n.getTime() - i.getTime()
            }
        },
        885: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return b })), n.d(t, "b", (function() { return j }));
            var c, r, i, a = n(8),
                o = (n(1), n(2)),
                s = n(5),
                d = n(0),
                l = Object(s.e)(o.X)(c || (c = Object(a.a)(["\n  overflow-x: scroll;\n  padding: 0;\n  border-radius: 24px 24px 0 0;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none; /* Firefox */\n"]))),
                u = Object(s.e)(o.X)(r || (r = Object(a.a)(["\n  justify-content: space-between;\n  background-color: ", ";\n  width: 100%;\n"])), (function(e) { return e.theme.colors.input })),
                b = s.e.button(i || (i = Object(a.a)(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  flex: 1;\n  border: 0;\n  outline: 0;\n  padding: 16px;\n  margin: 0;\n  border-radius: 24px 24px 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: ", ";\n  background-color: ", ";\n"])), (function(e) { var t = e.theme; return e.isActive ? t.colors.text : t.colors.textSubtle }), (function(e) { var t = e.theme; return e.isActive ? t.card.background : t.colors.input })),
                j = function(e) { var t = e.children; return Object(d.jsx)(l, { p: ["0 4px", "0 16px"], children: Object(d.jsx)(u, { children: t }) }) }
        },
        956: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var c = n(861),
                r = n(16);

            function i(e, t) { Object(r.a)(2, arguments); var n = Object(c.a)(e, t) / 1e3; return n > 0 ? Math.floor(n) : Math.ceil(n) }
        }
    }
]);
//# sourceMappingURL=10.2ccbe418.chunk.js.map