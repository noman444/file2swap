(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [14], { 1531: function(e, t, n) { "use strict";
            n.r(t);
            n(1); var c, i, r, s, a, o, b, l = n(189),
                j = n(79),
                d = n(86),
                u = n(2),
                x = n(375),
                O = n(234),
                p = n(14),
                m = n(843),
                h = n(8),
                f = n(5),
                g = n(888),
                v = n(950),
                w = n(0),
                y = f.e.div(c || (c = Object(h.a)(["\n  padding-top: 16px;\n\n  ", " {\n    padding-top: 24px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                k = f.e.img(i || (i = Object(h.a)(["\n  border-radius: 50%;\n  height: 64px;\n  margin-top: -12px;\n  width: 64px;\n  border: solid 2px white;\n\n  ", " {\n    height: 128px;\n    margin-top: -24px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                D = f.e.div(r || (r = Object(h.a)(["\n  margin-bottom: 8px;\n  text-align: center;\n"]))),
                I = Object(f.e)(u.v)(s || (s = Object(h.a)(["\n  overflow: visible;\n"]))),
                S = Object(f.e)(u.y)(a || (a = Object(h.a)(["\n  position: relative;\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding-top: 0;\n  text-align: center;\n"])), (function(e) { return e.bg })),
                z = Object(f.e)(u.Z).attrs({ as: "h2" })(o || (o = Object(h.a)(["\n  font-size: 24px;\n\n  ", " {\n    font-size: 40px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                C = f.e.div(b || (b = Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n  margin-bottom: 16px;\n\n  ", " {\n    grid-gap: 32px;\n    grid-template-columns: repeat(2, 1fr);\n    margin-bottom: 32px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                T = function(e) { var t = e.team,
                        n = Object(p.b)().t; return Object(w.jsx)(y, { children: Object(w.jsxs)(I, { children: [Object(w.jsxs)(S, { bg: "/images/teams/".concat(t.background), children: [Object(w.jsx)(D, { children: Object(w.jsx)(k, { src: "/images/teams/".concat(t.images.md), alt: "team avatar" }) }), Object(w.jsx)(z, { color: t.textColor, children: t.name }), Object(w.jsx)(u.nc, { as: "p", color: t.textColor, children: n(t.description) })] }), Object(w.jsxs)(u.w, { children: [Object(w.jsxs)(C, { children: [Object(w.jsx)(v.a, { icon: u.O, title: t.users, subtitle: n("Active Members") }), Object(w.jsx)(v.a, { icon: u.Nb, title: n("Coming Soon"), subtitle: n("Team Points"), isDisabled: !0 })] }), Object(w.jsx)(u.Z, { as: "h3", children: n("Team Achievements") }), Object(w.jsx)(g.a, {})] })] }) }) },
                Z = n(948);
            t.default = function() { var e = Object(j.i)().id,
                    t = Number(e),
                    n = Object(p.b)().t,
                    c = -1 !== O.a.findIndex((function(e) { return e.id === t })),
                    i = Object(m.a)(t); return c ? i ? Object(w.jsxs)(l.b, { children: [Object(w.jsx)(Z.a, {}), Object(w.jsx)(u.X, { mb: "24px", children: Object(w.jsx)(d.a, { to: "/teams", children: Object(w.jsxs)(u.X, { alignItems: "center", children: [Object(w.jsx)(u.I, { color: "primary" }), Object(w.jsx)(u.nc, { color: "primary", children: n("Teams Overview") })] }) }) }), Object(w.jsx)(T, { team: i })] }) : Object(w.jsx)(x.a, {}) : Object(w.jsx)(j.a, { to: "/404" }) } }, 843: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return a })), n.d(t, "b", (function() { return o })); var c = n(1),
                i = n(23),
                r = n(62),
                s = n(175),
                a = function(e) { var t = Object(i.c)((function(t) { return t.teams.data[e] })),
                        n = Object(r.b)(); return Object(c.useEffect)((function() { n(Object(s.b)(e)) }), [e, n]), t },
                o = function() { var e = Object(i.c)((function(e) { return e.teams })),
                        t = e.isInitialized,
                        n = e.isLoading,
                        a = e.data,
                        o = Object(r.b)(); return Object(c.useEffect)((function() { o(Object(s.c)()) }), [o]), { teams: a, isInitialized: t, isLoading: n } } }, 844: function(e, t, n) { "use strict"; var c, i = n(8),
                r = n(5).e.div(c || (c = Object(i.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.textSubtle }));
            t.a = r }, 888: function(e, t, n) { "use strict";
            n(1); var c = n(2),
                i = n(14),
                r = n(0);
            t.a = function(e) { var t = e.children,
                    n = Object(i.b)().t; return Object(r.jsxs)(c.X, { flexDirection: "column", alignItems: "center", justifyContent: "center", p: "24px", children: [Object(r.jsx)(c.q, { width: "72px", height: "72px" }), Object(r.jsx)(c.Z, { as: "h5", scale: "md", color: "textDisabled", children: t || n("Coming Soon!") })] }) } }, 948: function(e, t, n) { "use strict";
            n(1); var c = n(2),
                i = n(188),
                r = n(14),
                s = n(844),
                a = n(86),
                o = n(0),
                b = function() { var e = Object(r.b)().t; return Object(o.jsx)(c.v, { mb: "32px", isActive: !0, children: Object(o.jsx)(c.w, { children: Object(o.jsxs)(c.X, { alignItems: ["start", null, "center"], justifyContent: ["start", null, "space-between"], flexDirection: ["column", null, "row"], children: [Object(o.jsxs)("div", { children: [Object(o.jsx)(c.Z, { scale: "lg", mb: "8px", children: e("You haven\u2019t set up your profile yet!") }), Object(o.jsx)(c.nc, { children: e("You can do this at any time by clicking on your profile picture in the menu") })] }), Object(o.jsx)(c.r, { as: a.a, to: "/profile", id: "teamsPageSetUpProfile", mt: ["16px", null, 0], children: e("Set up now") })] }) }) }) };
            t.a = function() { var e = Object(r.b)().t,
                    t = Object(i.c)(),
                    n = t.isInitialized,
                    a = t.profile,
                    l = n && !a; return Object(o.jsxs)(o.Fragment, { children: [l && Object(o.jsx)(b, {}), Object(o.jsxs)(s.a, { children: [Object(o.jsx)(c.Z, { as: "h1", scale: "xxl", color: "secondary", children: e("Teams & Profiles") }), Object(o.jsx)(c.nc, { bold: !0, children: e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!") })] })] }) } }, 950: function(e, t, n) { "use strict"; var c, i = n(6),
                r = n(53),
                s = (n(1), n(2)),
                a = n(8),
                o = n(5),
                b = Object(o.e)(s.nc)(c || (c = Object(a.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n"])), (function(e) { return e.theme.colors.tertiary }));
            b.defaultProps = { p: "24px" }; var l = b,
                j = n(0),
                d = ["icon", "title", "subtitle", "isDisabled"];
            t.a = function(e) { var t = e.icon,
                    n = e.title,
                    c = e.subtitle,
                    a = e.isDisabled,
                    o = void 0 !== a && a,
                    b = Object(r.a)(e, d); return Object(j.jsx)(l, Object(i.a)(Object(i.a)({}, b), {}, { children: Object(j.jsxs)(s.X, { alignItems: "start", children: [Object(j.jsx)(t, { width: "44px", mr: "24px", color: o ? "textDisabled" : "currentColor" }), Object(j.jsxs)("div", { children: [Object(j.jsx)(s.Z, { as: "h3", scale: "xl", color: o ? "textDisabled" : "text", children: n }), Object(j.jsx)(s.nc, { textTransform: "uppercase", color: o ? "textDisabled" : "textSubtle", fontSize: "12px", bold: !0, children: c })] })] }) })) } } }
]);
//# sourceMappingURL=14.bc5c1816.chunk.js.map