/*! For license information please see 4.51aa43c6.chunk.js.LICENSE.txt */
(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [4], Array(777).concat([function(e, t, r) { "use strict";
        r.r(t); var n = {};
        r.r(n), r.d(n, "generateKey", (function() { return E })), r.d(n, "verifyHmac", (function() { return A })), r.d(n, "encrypt", (function() { return T })), r.d(n, "decrypt", (function() { return O })); var i = r(3),
            o = r.n(i),
            a = r(13),
            s = r(18),
            u = r(20),
            c = r(25),
            f = r(26),
            d = r(32),
            l = r(829),
            h = r(1303),
            p = "Session currently connected",
            b = "Session currently disconnected",
            v = "JSON RPC response format is invalid",
            g = "User close QRCode Modal",
            y = function() {
                function e() { Object(s.a)(this, e), this._eventEmitters = [] } return Object(u.a)(e, [{ key: "subscribe", value: function(e) { this._eventEmitters.push(e) } }, { key: "unsubscribe", value: function(e) { this._eventEmitters = this._eventEmitters.filter((function(t) { return t.event !== e })) } }, { key: "trigger", value: function(e) { var t, r = [];
                        (t = Object(l.q)(e) ? e.method : Object(l.s)(e) || Object(l.r)(e) ? "response:".concat(e.id) : Object(l.p)(e) ? e.event : "") && (r = this._eventEmitters.filter((function(e) { return e.event === t }))), r && r.length || Object(l.u)(t) || Object(l.p)(t) || (r = this._eventEmitters.filter((function(e) { return "call_request" === e.event }))), r.forEach((function(t) { if (Object(l.r)(e)) { var r = new Error(e.error.message);
                                t.callback(r, null) } else t.callback(null, e) })) } }]), e }(),
            m = function() {
                function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "walletconnect";
                    Object(s.a)(this, e), this.storageId = t } return Object(u.a)(e, [{ key: "getSession", value: function() { var e = null,
                            t = Object(l.k)(this.storageId); return t && Object(l.w)(t) && (e = t), e } }, { key: "setSession", value: function(e) { return Object(l.D)(this.storageId, e), e } }, { key: "removeSession", value: function() { Object(l.C)(this.storageId) } }]), e }(),
            _ = ["https://a.bridge.walletconnect.org", "https://b.bridge.walletconnect.org", "https://c.bridge.walletconnect.org", "https://d.bridge.walletconnect.org", "https://e.bridge.walletconnect.org", "https://f.bridge.walletconnect.org", "https://g.bridge.walletconnect.org", "https://h.bridge.walletconnect.org", "https://i.bridge.walletconnect.org", "https://j.bridge.walletconnect.org", "https://k.bridge.walletconnect.org", "https://l.bridge.walletconnect.org"];

        function w() { return _[Math.floor(Math.random() * _.length)] } var x = function() {
                function e(t) { if (Object(s.a)(this, e), this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new y, this._clientMeta = Object(l.i)() || t.connectorOpts.clientMeta || null, this._cryptoLib = t.cryptoLib, this._sessionStorage = t.sessionStorage || new m(t.connectorOpts.storageId), this._qrcodeModal = t.connectorOpts.qrcodeModal, this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions, this._signingMethods = [].concat(Object(d.a)(l.E), Object(d.a)(t.connectorOpts.signingMethods || [])), !t.connectorOpts.bridge && !t.connectorOpts.uri && !t.connectorOpts.session) throw new Error("Missing one of the required parameters: bridge / uri / session"); var r;
                    t.connectorOpts.bridge && (this.bridge = "https://bridge.walletconnect.org" === (r = t.connectorOpts.bridge) || _.includes(r) ? w() : r), t.connectorOpts.uri && (this.uri = t.connectorOpts.uri); var n = t.connectorOpts.session || this._getStorageSession();
                    n && (this.session = n), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = t.transport || new h.a({ protocol: this.protocol, version: this.version, url: this.bridge, subscriptions: [this.clientId] }), this._subscribeToInternalEvents(), this._initTransport(), t.connectorOpts.uri && this._subscribeToSessionRequest(), t.pushServerOpts && this._registerPushServer(t.pushServerOpts) } return Object(u.a)(e, [{ key: "bridge", get: function() { return this._bridge }, set: function(e) { e && (this._bridge = e) } }, { key: "key", get: function() { return this._key ? Object(l.c)(this._key, !0) : "" }, set: function(e) { if (e) { var t = Object(l.e)(e);
                            this._key = t } } }, { key: "clientId", get: function() { var e = this._clientId; return e || (e = this._clientId = Object(l.F)()), this._clientId }, set: function(e) { e && (this._clientId = e) } }, { key: "peerId", get: function() { return this._peerId }, set: function(e) { e && (this._peerId = e) } }, { key: "clientMeta", get: function() { var e = this._clientMeta; return e || (e = this._clientMeta = Object(l.i)()), e }, set: function(e) {} }, { key: "peerMeta", get: function() { return this._peerMeta }, set: function(e) { this._peerMeta = e } }, { key: "handshakeTopic", get: function() { return this._handshakeTopic }, set: function(e) { e && (this._handshakeTopic = e) } }, { key: "handshakeId", get: function() { return this._handshakeId }, set: function(e) { e && (this._handshakeId = e) } }, { key: "uri", get: function() { return this._formatUri() }, set: function(e) { if (e) { var t = this._parseUri(e),
                                r = t.handshakeTopic,
                                n = t.bridge,
                                i = t.key;
                            this.handshakeTopic = r, this.bridge = n, this.key = i } } }, { key: "chainId", get: function() { return this._chainId }, set: function(e) { this._chainId = e } }, { key: "networkId", get: function() { return this._networkId }, set: function(e) { this._networkId = e } }, { key: "accounts", get: function() { return this._accounts }, set: function(e) { this._accounts = e } }, { key: "rpcUrl", get: function() { return this._rpcUrl }, set: function(e) { this._rpcUrl = e } }, { key: "connected", get: function() { return this._connected }, set: function(e) {} }, { key: "pending", get: function() { return !!this._handshakeTopic }, set: function(e) {} }, { key: "session", get: function() { return { connected: this.connected, accounts: this.accounts, chainId: this.chainId, bridge: this.bridge, key: this.key, clientId: this.clientId, clientMeta: this.clientMeta, peerId: this.peerId, peerMeta: this.peerMeta, handshakeId: this.handshakeId, handshakeTopic: this.handshakeTopic } }, set: function(e) { e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic) } }, { key: "on", value: function(e, t) { var r = { event: e, callback: t };
                        this._eventManager.subscribe(r) } }, { key: "off", value: function(e) { this._eventManager.unsubscribe(e) } }, { key: "createInstantRequest", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n, i, a = this; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._generateKey();
                                    case 2:
                                        return this._key = e.sent, r = this._formatRequest({ method: "wc_instantRequest", params: [{ peerId: this.clientId, peerMeta: this.clientMeta, request: this._formatRequest(t) }] }), this.handshakeId = r.id, this.handshakeTopic = Object(l.F)(), this._eventManager.trigger({ event: "display_uri", params: [this.uri] }), this.on("modal_closed", (function() { throw new Error(g) })), n = function() { a.killSession() }, e.prev = 9, e.next = 12, this._sendCallRequest(r);
                                    case 12:
                                        return (i = e.sent) && n(), e.abrupt("return", i);
                                    case 17:
                                        throw e.prev = 17, e.t0 = e.catch(9), n(), e.t0;
                                    case 21:
                                    case "end":
                                        return e.stop() } }), e, this, [
                                [9, 17]
                            ]) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "connect", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r = this; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._qrcodeModal) { e.next = 2; break } throw new Error("QRCode Modal not provided");
                                    case 2:
                                        if (!this.connected) { e.next = 4; break } return e.abrupt("return", { chainId: this.chainId, accounts: this.accounts });
                                    case 4:
                                        return e.next = 6, this.createSession(t);
                                    case 6:
                                        return e.abrupt("return", new Promise(function() { var e = Object(a.a)(o.a.mark((function e(t, n) { return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            r.on("modal_closed", (function() { return n(new Error(g)) })), r.on("connect", (function(e, r) { if (e) return n(e);
                                                                t(r.params[0]) }));
                                                        case 2:
                                                        case "end":
                                                            return e.stop() } }), e) }))); return function(t, r) { return e.apply(this, arguments) } }()));
                                    case 7:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "createSession", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this._connected) { e.next = 2; break } throw new Error(p);
                                    case 2:
                                        if (!this.pending) { e.next = 4; break } return e.abrupt("return");
                                    case 4:
                                        return e.next = 6, this._generateKey();
                                    case 6:
                                        this._key = e.sent, r = this._formatRequest({ method: "wc_sessionRequest", params: [{ peerId: this.clientId, peerMeta: this.clientMeta, chainId: t && t.chainId ? t.chainId : null }] }), this.handshakeId = r.id, this.handshakeTopic = Object(l.F)(), this._sendSessionRequest(r, "Session update rejected", { topic: this.handshakeTopic }), this._eventManager.trigger({ event: "display_uri", params: [this.uri] });
                                    case 12:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "approveSession", value: function(e) { if (this._connected) throw new Error(p);
                        this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || ""; var t = { approved: !0, chainId: this.chainId, networkId: this.networkId, accounts: this.accounts, rpcUrl: this.rpcUrl, peerId: this.clientId, peerMeta: this.clientMeta },
                            r = { id: this.handshakeId, jsonrpc: "2.0", result: t };
                        this._sendResponse(r), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({ event: "connect", params: [{ peerId: this.peerId, peerMeta: this.peerMeta, chainId: this.chainId, accounts: this.accounts }] }) } }, { key: "rejectSession", value: function(e) { if (this._connected) throw new Error(p); var t = e && e.message ? e.message : "Session Rejected",
                            r = this._formatResponse({ id: this.handshakeId, error: { message: t } });
                        this._sendResponse(r), this._connected = !1, this._eventManager.trigger({ event: "disconnect", params: [{ message: t }] }), this._removeStorageSession() } }, { key: "updateSession", value: function(e) { if (!this._connected) throw new Error(b);
                        this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || ""; var t = { approved: !0, chainId: this.chainId, networkId: this.networkId, accounts: this.accounts, rpcUrl: this.rpcUrl },
                            r = this._formatRequest({ method: "wc_sessionUpdate", params: [t] });
                        this._sendSessionRequest(r, "Session update rejected"), this._eventManager.trigger({ event: "session_update", params: [{ chainId: this.chainId, accounts: this.accounts }] }), this._manageStorageSession() } }, { key: "killSession", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n, i; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t ? t.message : "Session Disconnected", n = { approved: !1, chainId: null, networkId: null, accounts: null }, i = this._formatRequest({ method: "wc_sessionUpdate", params: [n] }), e.next = 5, this._sendRequest(i);
                                    case 5:
                                        this._handleSessionDisconnect(r);
                                    case 6:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "sendTransaction", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n, i; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._connected) { e.next = 2; break } throw new Error(b);
                                    case 2:
                                        return r = Object(l.z)(t), n = this._formatRequest({ method: "eth_sendTransaction", params: [r] }), e.next = 6, this._sendCallRequest(n);
                                    case 6:
                                        return i = e.sent, e.abrupt("return", i);
                                    case 8:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "signTransaction", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n, i; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._connected) { e.next = 2; break } throw new Error(b);
                                    case 2:
                                        return r = Object(l.z)(t), n = this._formatRequest({ method: "eth_signTransaction", params: [r] }), e.next = 6, this._sendCallRequest(n);
                                    case 6:
                                        return i = e.sent, e.abrupt("return", i);
                                    case 8:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "signMessage", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._connected) { e.next = 2; break } throw new Error(b);
                                    case 2:
                                        return r = this._formatRequest({ method: "eth_sign", params: t }), e.next = 5, this._sendCallRequest(r);
                                    case 5:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 7:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "signPersonalMessage", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._connected) { e.next = 2; break } throw new Error(b);
                                    case 2:
                                        return t = Object(l.y)(t), r = this._formatRequest({ method: "personal_sign", params: t }), e.next = 6, this._sendCallRequest(r);
                                    case 6:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 8:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "signTypedData", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._connected) { e.next = 2; break } throw new Error(b);
                                    case 2:
                                        return r = this._formatRequest({ method: "eth_signTypedData", params: t }), e.next = 5, this._sendCallRequest(r);
                                    case 5:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 7:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "updateChain", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._connected) { e.next = 2; break } throw new Error("Session currently disconnected");
                                    case 2:
                                        return r = this._formatRequest({ method: "wallet_updateChain", params: [t] }), e.next = 5, this._sendCallRequest(r);
                                    case 5:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 7:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "unsafeSend", value: function(e, t) { var r = this; return this._sendRequest(e, t), new Promise((function(t, n) { r._subscribeToResponse(e.id, (function(e, r) { if (e) n(e);
                                else { if (!r) throw new Error("Missing JSON RPC response");
                                    t(r) } })) })) } }, { key: "sendCustomRequest", value: function() { var e = Object(a.a)(o.a.mark((function e(t, r) { var n, i; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._connected) { e.next = 2; break } throw new Error(b);
                                    case 2:
                                        e.t0 = t.method, e.next = "eth_accounts" === e.t0 ? 5 : "eth_chainId" === e.t0 ? 6 : "eth_sendTransaction" === e.t0 || "eth_signTransaction" === e.t0 ? 7 : "personal_sign" === e.t0 ? 9 : 11; break;
                                    case 5:
                                        return e.abrupt("return", this.accounts);
                                    case 6:
                                        return e.abrupt("return", Object(l.f)(this.chainId));
                                    case 7:
                                        return t.params && (t.params[0] = Object(l.z)(t.params[0])), e.abrupt("break", 12);
                                    case 9:
                                        return t.params && (t.params = Object(l.y)(t.params)), e.abrupt("break", 12);
                                    case 11:
                                        return e.abrupt("break", 12);
                                    case 12:
                                        return n = this._formatRequest(t), e.next = 15, this._sendCallRequest(n, r);
                                    case 15:
                                        return i = e.sent, e.abrupt("return", i);
                                    case 17:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t, r) { return e.apply(this, arguments) } }() }, { key: "approveRequest", value: function(e) { if (!Object(l.s)(e)) throw new Error('JSON-RPC success response must include "result" field'); var t = this._formatResponse(e);
                        this._sendResponse(t) } }, { key: "rejectRequest", value: function(e) { if (!Object(l.r)(e)) throw new Error('JSON-RPC error response must include "error" field'); var t = this._formatResponse(e);
                        this._sendResponse(t) } }, { key: "transportClose", value: function() { this._transport.close() } }, { key: "_sendRequest", value: function() { var e = Object(a.a)(o.a.mark((function e(t, r) { var n, i, a, s, u; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = this._formatRequest(t), e.next = 3, this._encrypt(n);
                                    case 3:
                                        i = e.sent, a = "undefined" !== typeof(null === r || void 0 === r ? void 0 : r.topic) ? r.topic : this.peerId, s = JSON.stringify(i), u = "undefined" !== typeof(null === r || void 0 === r ? void 0 : r.forcePushNotification) ? !r.forcePushNotification : Object(l.v)(n), this._transport.send(s, a, u);
                                    case 8:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t, r) { return e.apply(this, arguments) } }() }, { key: "_sendResponse", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n, i; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._encrypt(t);
                                    case 2:
                                        r = e.sent, n = this.peerId, i = JSON.stringify(r), !0, this._transport.send(i, n, true);
                                    case 7:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "_sendSessionRequest", value: function() { var e = Object(a.a)(o.a.mark((function e(t, r, n) { return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this._sendRequest(t, n), this._subscribeToSessionResponse(t.id, r);
                                    case 2:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t, r, n) { return e.apply(this, arguments) } }() }, { key: "_sendCallRequest", value: function(e, t) { if (this._sendRequest(e, t), this._eventManager.trigger({ event: "call_request_sent", params: [{ request: e, options: t }] }), Object(l.t)() && this._signingMethods.includes(e.method)) { var r = Object(l.k)(l.x);
                            r && (window.location.href = r.href) } return this._subscribeToCallResponse(e.id) } }, { key: "_formatRequest", value: function(e) { if ("undefined" === typeof e.method) throw new Error('JSON RPC request must have valid "method" value'); return { id: "undefined" === typeof e.id ? Object(l.B)() : e.id, jsonrpc: "2.0", method: e.method, params: "undefined" === typeof e.params ? [] : e.params } } }, { key: "_formatResponse", value: function(e) { if ("undefined" === typeof e.id) throw new Error('JSON RPC request must have valid "id" value'); var t = { id: e.id, jsonrpc: "2.0" }; if (Object(l.r)(e)) { var r = Object(l.h)(e.error); return Object.assign(Object.assign(Object.assign({}, t), e), { error: r }) } if (Object(l.s)(e)) return Object.assign(Object.assign({}, t), e); throw new Error(v) } }, { key: "_handleSessionDisconnect", value: function(e) { var t = e || "Session Disconnected";
                        this._connected || (this._qrcodeModal && this._qrcodeModal.close(), Object(l.C)(l.x)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._eventManager.trigger({ event: "disconnect", params: [{ message: t }] }), this._removeStorageSession(), this.transportClose() } }, { key: "_handleSessionResponse", value: function(e, t) { t && t.approved ? (this._connected ? (t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), this._eventManager.trigger({ event: "session_update", params: [{ chainId: this.chainId, accounts: this.accounts }] })) : (this._connected = !0, t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), t.peerId && !this.peerId && (this.peerId = t.peerId), t.peerMeta && !this.peerMeta && (this.peerMeta = t.peerMeta), this._eventManager.trigger({ event: "connect", params: [{ peerId: this.peerId, peerMeta: this.peerMeta, chainId: this.chainId, accounts: this.accounts }] })), this._manageStorageSession()) : this._handleSessionDisconnect(e) } }, { key: "_handleIncomingMessages", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ([this.clientId, this.handshakeTopic].includes(t.topic)) { e.next = 3; break } return e.abrupt("return");
                                    case 3:
                                        e.prev = 3, r = JSON.parse(t.payload), e.next = 10; break;
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(3), e.abrupt("return");
                                    case 10:
                                        return e.next = 12, this._decrypt(r);
                                    case 12:
                                        (n = e.sent) && this._eventManager.trigger(n);
                                    case 14:
                                    case "end":
                                        return e.stop() } }), e, this, [
                                [3, 7]
                            ]) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "_subscribeToSessionRequest", value: function() { this._transport.subscribe(this.handshakeTopic) } }, { key: "_subscribeToResponse", value: function(e, t) { this.on("response:".concat(e), t) } }, { key: "_subscribeToSessionResponse", value: function(e, t) { var r = this;
                        this._subscribeToResponse(e, (function(e, n) { e ? r._handleSessionResponse(e.message) : n.result ? r._handleSessionResponse(t, n.result) : n.error && n.error.message ? r._handleSessionResponse(n.error.message) : r._handleSessionResponse(t) })) } }, { key: "_subscribeToCallResponse", value: function(e) { var t = this; return new Promise((function(r, n) { t._subscribeToResponse(e, (function(e, t) { e ? n(e) : t.result ? r(t.result) : t.error && t.error.message ? n(new Error(t.error.message)) : n(new Error(v)) })) })) } }, { key: "_subscribeToInternalEvents", value: function() { var e = this;
                        this.on("display_uri", (function() { e._qrcodeModal && e._qrcodeModal.open(e.uri, (function() { e._eventManager.trigger({ event: "modal_closed", params: [] }) }), e._qrcodeModalOptions) })), this.on("connect", (function() { e._qrcodeModal && e._qrcodeModal.close() })), this.on("wc_sessionRequest", (function(t, r) { t && e._eventManager.trigger({ event: "error", params: [{ code: "SESSION_REQUEST_ERROR", message: t.toString() }] }), e.handshakeId = r.id, e.peerId = r.params[0].peerId, e.peerMeta = r.params[0].peerMeta; var n = Object.assign(Object.assign({}, r), { method: "session_request" });
                            e._eventManager.trigger(n) })), this.on("wc_sessionUpdate", (function(t, r) { t && e._handleSessionResponse(t.message), e._handleSessionResponse("Session disconnected", r.params[0]) })) } }, { key: "_initTransport", value: function() { var e = this;
                        this._transport.on("message", (function(t) { return e._handleIncomingMessages(t) })), this._transport.on("open", (function() { return e._eventManager.trigger({ event: "transport_open", params: [] }) })), this._transport.on("close", (function() { return e._eventManager.trigger({ event: "transport_close", params: [] }) })), this._transport.on("error", (function() { return e._eventManager.trigger({ event: "transport_error", params: ["Websocket connection failed"] }) })), this._transport.open() } }, { key: "_formatUri", value: function() { var e = this.protocol,
                            t = this.handshakeTopic,
                            r = this.version,
                            n = encodeURIComponent(this.bridge),
                            i = this.key; return "".concat(e, ":").concat(t, "@").concat(r, "?bridge=").concat(n, "&key=").concat(i) } }, { key: "_parseUri", value: function(e) { var t = Object(l.A)(e); if (t.protocol === this.protocol) { if (!t.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value"); var r = t.handshakeTopic; if (!t.bridge) throw Error("Invalid or missing bridge url parameter value"); var n = decodeURIComponent(t.bridge); if (!t.key) throw Error("Invalid or missing key parameter value"); return { handshakeTopic: r, bridge: n, key: t.key } } throw new Error("URI format is invalid") } }, { key: "_generateKey", value: function() { var e = Object(a.a)(o.a.mark((function e() { var t; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this._cryptoLib) { e.next = 5; break } return e.next = 3, this._cryptoLib.generateKey();
                                    case 3:
                                        return t = e.sent, e.abrupt("return", t);
                                    case 5:
                                        return e.abrupt("return", null);
                                    case 6:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function() { return e.apply(this, arguments) } }() }, { key: "_encrypt", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = this._key, !this._cryptoLib || !r) { e.next = 6; break } return e.next = 4, this._cryptoLib.encrypt(t, r);
                                    case 4:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 6:
                                        return e.abrupt("return", null);
                                    case 7:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "_decrypt", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = this._key, !this._cryptoLib || !r) { e.next = 6; break } return e.next = 4, this._cryptoLib.decrypt(t, r);
                                    case 4:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 6:
                                        return e.abrupt("return", null);
                                    case 7:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "_getStorageSession", value: function() { var e = null; return this._sessionStorage && (e = this._sessionStorage.getSession()), e } }, { key: "_setStorageSession", value: function() { this._sessionStorage && this._sessionStorage.setSession(this.session) } }, { key: "_removeStorageSession", value: function() { this._sessionStorage && this._sessionStorage.removeSession() } }, { key: "_manageStorageSession", value: function() { this._connected ? this._setStorageSession() : this._removeStorageSession() } }, { key: "_registerPushServer", value: function(e) { if (!e.url || "string" !== typeof e.url) throw Error("Invalid or missing pushServerOpts.url parameter value"); if (!e.type || "string" !== typeof e.type) throw Error("Invalid or missing pushServerOpts.type parameter value"); if (!e.token || "string" !== typeof e.token) throw Error("Invalid or missing pushServerOpts.token parameter value"); var t = { bridge: this.bridge, topic: this.clientId, type: e.type, token: e.token, peerName: "", language: e.language || "" };
                        this.on("connect", function() { var r = Object(a.a)(o.a.mark((function r(n, i) { var a, s; return o.a.wrap((function(r) { for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (!n) { r.next = 2; break } throw n;
                                        case 2:
                                            return e.peerMeta && (a = i.params[0].peerMeta.name, t.peerName = a), r.prev = 3, r.next = 6, fetch("".concat(e.url, "/new"), { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(t) });
                                        case 6:
                                            return s = r.sent, r.next = 9, s.json();
                                        case 9:
                                            if (r.sent.success) { r.next = 12; break } throw Error("Failed to register in Push Server");
                                        case 12:
                                            r.next = 17; break;
                                        case 14:
                                            throw r.prev = 14, r.t0 = r.catch(3), Error("Failed to register in Push Server");
                                        case 17:
                                        case "end":
                                            return r.stop() } }), r, null, [
                                    [3, 14]
                                ]) }))); return function(e, t) { return r.apply(this, arguments) } }()) } }]), e }(),
            k = r(1306),
            S = r(853);

        function E(e) { return M.apply(this, arguments) }

        function M() { return (M = Object(a.a)(o.a.mark((function e(t) { var r, n, i; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = (t || 256) / 8, n = k.randomBytes(r), i = Object(l.d)(S.arrayToBuffer(n)), e.abrupt("return", i);
                        case 4:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) }

        function A(e, t) { return R.apply(this, arguments) }

        function R() { return (R = Object(a.a)(o.a.mark((function e(t, r) { var n, i, a, s, u, c, f; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = S.hexToArray(t.data), i = S.hexToArray(t.iv), a = S.hexToArray(t.hmac), s = S.arrayToHex(a, !1), u = S.concatArrays(n, i), e.next = 7, k.hmacSha256Sign(r, u);
                        case 7:
                            if (c = e.sent, f = S.arrayToHex(c, !1), S.removeHexPrefix(s) !== S.removeHexPrefix(f)) { e.next = 11; break } return e.abrupt("return", !0);
                        case 11:
                            return e.abrupt("return", !1);
                        case 12:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) }

        function T(e, t, r) { return C.apply(this, arguments) }

        function C() { return (C = Object(a.a)(o.a.mark((function e(t, r, n) { var i, a, s, u, c, f, d, h, p, b, v; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (i = S.bufferToArray(Object(l.b)(r)), e.t0 = n, e.t0) { e.next = 6; break } return e.next = 5, E(128);
                        case 5:
                            e.t0 = e.sent;
                        case 6:
                            return a = e.t0, s = S.bufferToArray(Object(l.b)(a)), u = S.arrayToHex(s, !1), c = JSON.stringify(t), f = S.utf8ToArray(c), e.next = 13, k.aesCbcEncrypt(s, i, f);
                        case 13:
                            return d = e.sent, h = S.arrayToHex(d, !1), p = S.concatArrays(d, s), e.next = 18, k.hmacSha256Sign(i, p);
                        case 18:
                            return b = e.sent, v = S.arrayToHex(b, !1), e.abrupt("return", { data: h, hmac: v, iv: u });
                        case 21:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) }

        function O(e, t) { return P.apply(this, arguments) }

        function P() { return (P = Object(a.a)(o.a.mark((function e(t, r) { var n, i, a, s, u, c; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = S.bufferToArray(Object(l.b)(r))) { e.next = 3; break } throw new Error("Missing key: required for decryption");
                        case 3:
                            return e.next = 5, A(t, n);
                        case 5:
                            if (e.sent) { e.next = 8; break } return e.abrupt("return", null);
                        case 8:
                            return i = S.hexToArray(t.data), a = S.hexToArray(t.iv), e.next = 12, k.aesCbcDecrypt(a, n, i);
                        case 12:
                            s = e.sent, u = S.arrayToUtf8(s), e.prev = 14, c = JSON.parse(u), e.next = 21; break;
                        case 18:
                            return e.prev = 18, e.t0 = e.catch(14), e.abrupt("return", null);
                        case 21:
                            return e.abrupt("return", c);
                        case 22:
                        case "end":
                            return e.stop() } }), e, null, [
                    [14, 18]
                ]) })))).apply(this, arguments) } var I = function(e) { Object(c.a)(r, e); var t = Object(f.a)(r);

                function r(e, i) { return Object(s.a)(this, r), t.call(this, { cryptoLib: n, connectorOpts: e, pushServerOpts: i }) } return r }(x),
            B = r(1307),
            L = r.n(B),
            j = r(1331),
            N = r.n(j),
            q = r(1332),
            U = Object(l.j)("XMLHttpRequest") || q.XMLHttpRequest,
            D = function(e) { Object(c.a)(r, e); var t = Object(f.a)(r);

                function r(e) { var n; return Object(s.a)(this, r), (n = t.call(this)).url = e, n } return Object(u.a)(r, [{ key: "formatError", value: function(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1; return { error: { message: t, code: r }, id: e.id, jsonrpc: e.jsonrpc } } }, { key: "send", value: function(e, t) { var r = this; return new Promise((function(n) { if ("eth_subscribe" === e.method) { var i = r.formatError(e, "Subscriptions are not supported by this HTTP endpoint"); return r.emit("error", i), n(i) } var o = new U,
                                a = !1,
                                s = function(i, s) { if (!a)
                                        if (o.abort(), a = !0, t) t(i, s);
                                        else { var u = e.id,
                                                c = e.jsonrpc,
                                                f = i ? { id: u, jsonrpc: c, error: { message: i.message, code: i.code } } : { id: u, jsonrpc: c, result: s };
                                            r.emit("payload", f), n(f) } };
                            o.open("POST", r.url, !0), o.setRequestHeader("Content-Type", "application/json"), o.timeout = 6e4, o.onerror = s, o.ontimeout = s, o.onreadystatechange = function() { if (4 === o.readyState) try { var e = JSON.parse(o.responseText);
                                    s(e.error, e.result) } catch (t) { s(t) } }, o.send(JSON.stringify(e)) })) } }]), r }(N.a),
            H = r(1353),
            z = r(1426),
            F = r(1430),
            K = r(1431),
            W = r(1448),
            V = r(1464),
            J = r(1467),
            Y = function(e) { Object(c.a)(r, e); var t = Object(f.a)(r);

                function r(e) { var n; if (Object(s.a)(this, r), (n = t.call(this, { pollingInterval: e.pollingInterval || 8e3 })).bridge = "https://bridge.walletconnect.org", n.qrcode = !0, n.qrcodeModal = L.a, n.qrcodeModalOptions = void 0, n.rpc = null, n.infuraId = "", n.http = null, n.isConnecting = !1, n.connected = !1, n.connectCallbacks = [], n.accounts = [], n.chainId = 1, n.rpcUrl = "", n.enable = Object(a.a)(o.a.mark((function e() { var t; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.getWalletConnector();
                                    case 2:
                                        if (!(t = e.sent)) { e.next = 9; break } return n.start(), n.subscribeWalletConnector(), e.abrupt("return", t.accounts);
                                    case 9:
                                        throw new Error("Failed to connect to WalleConnect");
                                    case 10:
                                    case "end":
                                        return e.stop() } }), e) }))), n.request = function() { var e = Object(a.a)(o.a.mark((function e(t) { return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", n.send(t));
                                        case 1:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(), n.send = function() { var e = Object(a.a)(o.a.mark((function e(t, r) { var i, a; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("string" !== typeof t) { e.next = 5; break } return a = r, "personal_sign" === (i = t) && (a = Object(l.y)(a)), e.abrupt("return", n.sendAsyncPromise(i, a));
                                        case 5:
                                            if ("personal_sign" === (t = Object.assign({ id: Object(l.B)(), jsonrpc: "2.0" }, t)).method && (t.params = Object(l.y)(t.params)), !r) { e.next = 10; break } return n.sendAsync(t, r), e.abrupt("return");
                                        case 10:
                                            return e.abrupt("return", n.sendAsyncPromise(t.method, t.params));
                                        case 11:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t, r) { return e.apply(this, arguments) } }(), n.onConnect = function(e) { n.connectCallbacks.push(e) }, n.triggerConnect = function(e) { n.connectCallbacks && n.connectCallbacks.length && n.connectCallbacks.forEach((function(t) { return t(e) })) }, n.bridge = e.connector ? e.connector.bridge : e.bridge || "https://bridge.walletconnect.org", n.qrcode = "undefined" === typeof e.qrcode || !1 !== e.qrcode, n.qrcodeModal = e.qrcodeModal || n.qrcodeModal, n.qrcodeModalOptions = e.qrcodeModalOptions, n.wc = e.connector || new I({ bridge: n.bridge, qrcodeModal: n.qrcode ? n.qrcodeModal : void 0, qrcodeModalOptions: n.qrcodeModalOptions, storageId: null === e || void 0 === e ? void 0 : e.storageId, signingMethods: null === e || void 0 === e ? void 0 : e.signingMethods, clientMeta: null === e || void 0 === e ? void 0 : e.clientMeta }), n.rpc = e.rpc || null, !n.rpc && (!e.infuraId || "string" !== typeof e.infuraId || !e.infuraId.trim())) throw new Error("Missing one of the required parameters: rpc or infuraId"); return n.infuraId = e.infuraId || "", n.chainId = (null === e || void 0 === e ? void 0 : e.chainId) || n.chainId, n.initialize(), n } return Object(u.a)(r, [{ key: "isWalletConnect", get: function() { return !0 } }, { key: "connector", get: function() { return this.wc } }, { key: "walletMeta", get: function() { return this.wc.peerMeta } }, { key: "disconnect", value: function() { var e = Object(a.a)(o.a.mark((function e() { return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this.close();
                                    case 1:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function() { return e.apply(this, arguments) } }() }, { key: "close", value: function() { var e = Object(a.a)(o.a.mark((function e() { var t; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getWalletConnector({ disableSessionCreation: !0 });
                                    case 2:
                                        return t = e.sent, e.next = 5, t.killSession();
                                    case 5:
                                        return e.next = 7, this.onDisconnect();
                                    case 7:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function() { return e.apply(this, arguments) } }() }, { key: "handleRequest", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n, i; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, n = null, e.next = 4, this.getWalletConnector();
                                    case 4:
                                        i = e.sent, e.t0 = t.method, e.next = "wc_killSession" === e.t0 ? 8 : "eth_accounts" === e.t0 ? 12 : "eth_coinbase" === e.t0 ? 14 : "eth_chainId" === e.t0 ? 16 : "net_version" === e.t0 ? 18 : "eth_uninstallFilter" === e.t0 ? 20 : 23; break;
                                    case 8:
                                        return e.next = 10, this.close();
                                    case 10:
                                        return n = null, e.abrupt("break", 26);
                                    case 12:
                                        return n = i.accounts, e.abrupt("break", 26);
                                    case 14:
                                        return n = i.accounts[0], e.abrupt("break", 26);
                                    case 16:
                                    case 18:
                                        return n = i.chainId, e.abrupt("break", 26);
                                    case 20:
                                        return this.sendAsync(t, (function(e) { return e })), n = !0, e.abrupt("break", 26);
                                    case 23:
                                        return e.next = 25, this.handleOtherRequests(t);
                                    case 25:
                                        r = e.sent;
                                    case 26:
                                        if (!r) { e.next = 28; break } return e.abrupt("return", r);
                                    case 28:
                                        return e.abrupt("return", this.formatResponse(t, n));
                                    case 31:
                                        throw e.prev = 31, e.t1 = e.catch(0), this.emit("error", e.t1), e.t1;
                                    case 35:
                                    case "end":
                                        return e.stop() } }), e, this, [
                                [0, 31]
                            ]) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "handleOtherRequests", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (l.E.includes(t.method) || !t.method.startsWith("eth_")) { e.next = 2; break } return e.abrupt("return", this.handleReadRequests(t));
                                    case 2:
                                        return e.next = 4, this.getWalletConnector();
                                    case 4:
                                        return r = e.sent, e.next = 7, r.sendCustomRequest(t);
                                    case 7:
                                        return n = e.sent, e.abrupt("return", this.formatResponse(t, n));
                                    case 9:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "handleReadRequests", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.http) { e.next = 4; break } throw r = new Error("HTTP Connection not available"), this.emit("error", r), r;
                                    case 4:
                                        return e.abrupt("return", this.http.send(t));
                                    case 5:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "formatResponse", value: function(e, t) { return { id: e.id, jsonrpc: e.jsonrpc, result: t } } }, { key: "getWalletConnector", value: function() { var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = t.disableSessionCreation,
                            n = void 0 !== r && r; return new Promise((function(t, r) { var i = e.wc;
                            e.isConnecting ? e.onConnect((function(e) { return t(e) })) : i.connected || n ? (e.connected || (e.connected = !0, e.updateState(i.session)), t(i)) : (e.isConnecting = !0, i.on("modal_closed", (function() { r(new Error("User closed modal")) })), i.createSession({ chainId: e.chainId }).then((function() { i.on("connect", (function(n, o) { if (n) return e.isConnecting = !1, r(n);
                                    e.isConnecting = !1, e.connected = !0, o && e.updateState(o.params[0]), e.emit("connect"), e.triggerConnect(i), t(i) })) })).catch((function(t) { e.isConnecting = !1, r(t) }))) })) } }, { key: "subscribeWalletConnector", value: function() { var e = Object(a.a)(o.a.mark((function e() { var t, r = this; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getWalletConnector();
                                    case 2:
                                        (t = e.sent).on("disconnect", (function(e) { e ? r.emit("error", e) : r.onDisconnect() })), t.on("session_update", (function(e, t) { e ? r.emit("error", e) : r.updateState(t.params[0]) }));
                                    case 5:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function() { return e.apply(this, arguments) } }() }, { key: "onDisconnect", value: function() { var e = Object(a.a)(o.a.mark((function e() { return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.stop();
                                    case 2:
                                        this.emit("close", 1e3, "Connection closed"), this.emit("disconnect", 1e3, "Connection disconnected");
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function() { return e.apply(this, arguments) } }() }, { key: "updateState", value: function() { var e = Object(a.a)(o.a.mark((function e(t) { var r, n, i, a; return o.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r = t.accounts, n = t.chainId, i = t.networkId, a = t.rpcUrl, (!this.accounts || r && this.accounts !== r) && (this.accounts = r, this.emit("accountsChanged", r)), (!this.chainId || n && this.chainId !== n) && (this.chainId = n, this.emit("chainChanged", n)), (!this.networkId || i && this.networkId !== i) && (this.networkId = i, this.emit("networkChanged", i)), this.updateRpcUrl(this.chainId, a || "");
                                    case 5:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "updateRpcUrl", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = { infuraId: this.infuraId, custom: this.rpc || void 0 };
                        (t = t || Object(l.n)(e, r)) ? (this.rpcUrl = t, this.updateHttpConnection()) : this.emit("error", new Error("No RPC Url available for chainId: ".concat(e))) } }, { key: "updateHttpConnection", value: function() { var e = this;
                        this.rpcUrl && (this.http = new D(this.rpcUrl), this.http.on("payload", (function(t) { return e.emit("payload", t) })), this.http.on("error", (function(t) { return e.emit("error", t) }))) } }, { key: "sendAsyncPromise", value: function(e, t) { var r = this; return new Promise((function(n, i) { r.sendAsync({ id: Object(l.B)(), jsonrpc: "2.0", method: e, params: t || [] }, (function(e, t) { e ? i(e) : n(t.result) })) })) } }, { key: "initialize", value: function() { var e = this;
                        this.updateRpcUrl(this.chainId), this.addProvider(new F({ eth_hashrate: "0x00", eth_mining: !1, eth_syncing: !0, net_listening: !0, web3_clientVersion: "WalletConnect/v1.x.x/javascript" })), this.addProvider(new z), this.addProvider(new J), this.addProvider(new K), this.addProvider(new V), this.addProvider(new W(this.configWallet())), this.addProvider({ handleRequest: function() { var t = Object(a.a)(o.a.mark((function t(r, n, i) { var a, s, u; return o.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.handleRequest(r);
                                            case 3:
                                                a = t.sent, s = a.error, u = a.result, i(s, u), t.next = 12; break;
                                            case 9:
                                                t.prev = 9, t.t0 = t.catch(0), i(t.t0);
                                            case 12:
                                            case "end":
                                                return t.stop() } }), t, null, [
                                        [0, 9]
                                    ]) }))); return function(e, r, n) { return t.apply(this, arguments) } }(), setEngine: function(e) { return e } }) } }, { key: "configWallet", value: function() { var e = this; return { getAccounts: function() { var t = Object(a.a)(o.a.mark((function t(r) { var n, i; return o.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.getWalletConnector();
                                            case 3:
                                                n = t.sent, (i = n.accounts) && i.length ? r(null, i) : r(new Error("Failed to get accounts")), t.next = 11; break;
                                            case 8:
                                                t.prev = 8, t.t0 = t.catch(0), r(t.t0);
                                            case 11:
                                            case "end":
                                                return t.stop() } }), t, null, [
                                        [0, 8]
                                    ]) }))); return function(e) { return t.apply(this, arguments) } }(), processMessage: function() { var t = Object(a.a)(o.a.mark((function t(r, n) { var i, a; return o.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.getWalletConnector();
                                            case 3:
                                                return i = t.sent, t.next = 6, i.signMessage([r.from, r.data]);
                                            case 6:
                                                a = t.sent, n(null, a), t.next = 13; break;
                                            case 10:
                                                t.prev = 10, t.t0 = t.catch(0), n(t.t0);
                                            case 13:
                                            case "end":
                                                return t.stop() } }), t, null, [
                                        [0, 10]
                                    ]) }))); return function(e, r) { return t.apply(this, arguments) } }(), processPersonalMessage: function() { var t = Object(a.a)(o.a.mark((function t(r, n) { var i, a; return o.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.getWalletConnector();
                                            case 3:
                                                return i = t.sent, t.next = 6, i.signPersonalMessage([r.data, r.from]);
                                            case 6:
                                                a = t.sent, n(null, a), t.next = 13; break;
                                            case 10:
                                                t.prev = 10, t.t0 = t.catch(0), n(t.t0);
                                            case 13:
                                            case "end":
                                                return t.stop() } }), t, null, [
                                        [0, 10]
                                    ]) }))); return function(e, r) { return t.apply(this, arguments) } }(), processSignTransaction: function() { var t = Object(a.a)(o.a.mark((function t(r, n) { var i, a; return o.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.getWalletConnector();
                                            case 3:
                                                return i = t.sent, t.next = 6, i.signTransaction(r);
                                            case 6:
                                                a = t.sent, n(null, a), t.next = 13; break;
                                            case 10:
                                                t.prev = 10, t.t0 = t.catch(0), n(t.t0);
                                            case 13:
                                            case "end":
                                                return t.stop() } }), t, null, [
                                        [0, 10]
                                    ]) }))); return function(e, r) { return t.apply(this, arguments) } }(), processTransaction: function() { var t = Object(a.a)(o.a.mark((function t(r, n) { var i, a; return o.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.getWalletConnector();
                                            case 3:
                                                return i = t.sent, t.next = 6, i.sendTransaction(r);
                                            case 6:
                                                a = t.sent, n(null, a), t.next = 13; break;
                                            case 10:
                                                t.prev = 10, t.t0 = t.catch(0), n(t.t0);
                                            case 13:
                                            case "end":
                                                return t.stop() } }), t, null, [
                                        [0, 10]
                                    ]) }))); return function(e, r) { return t.apply(this, arguments) } }(), processTypedMessage: function() { var t = Object(a.a)(o.a.mark((function t(r, n) { var i, a; return o.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.getWalletConnector();
                                            case 3:
                                                return i = t.sent, t.next = 6, i.signTypedData([r.from, r.data]);
                                            case 6:
                                                a = t.sent, n(null, a), t.next = 13; break;
                                            case 10:
                                                t.prev = 10, t.t0 = t.catch(0), n(t.t0);
                                            case 13:
                                            case "end":
                                                return t.stop() } }), t, null, [
                                        [0, 10]
                                    ]) }))); return function(e, r) { return t.apply(this, arguments) } }() } } }]), r }(H);
        t.default = Y }, , , , , , , , function(e, t, r) { "use strict";
        (function(e) { var n = r(1287),
                i = r(1288),
                o = r(1289);

            function a() { return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

            function s(e, t) { if (a() < t) throw new RangeError("Invalid typed array length"); return u.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = u.prototype : (null === e && (e = new u(t)), e.length = t), e }

            function u(e, t, r) { if (!u.TYPED_ARRAY_SUPPORT && !(this instanceof u)) return new u(e, t, r); if ("number" === typeof e) { if ("string" === typeof t) throw new Error("If encoding is specified then the first argument must be a string"); return d(this, e) } return c(this, e, t, r) }

            function c(e, t, r, n) { if ("number" === typeof t) throw new TypeError('"value" argument must not be a number'); return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, n) { if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds"); if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                    u.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = u.prototype : e = l(e, t); return e }(e, t, r, n) : "string" === typeof t ? function(e, t, r) { "string" === typeof r && "" !== r || (r = "utf8"); if (!u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding'); var n = 0 | p(t, r),
                        i = (e = s(e, n)).write(t, r);
                    i !== n && (e = e.slice(0, i)); return e }(e, t, r) : function(e, t) { if (u.isBuffer(t)) { var r = 0 | h(t.length); return 0 === (e = s(e, r)).length || t.copy(e, 0, 0, r), e } if (t) { if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" !== typeof t.length || (n = t.length) !== n ? s(e, 0) : l(e, t); if ("Buffer" === t.type && o(t.data)) return l(e, t.data) } var n; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }(e, t) }

            function f(e) { if ("number" !== typeof e) throw new TypeError('"size" argument must be a number'); if (e < 0) throw new RangeError('"size" argument must not be negative') }

            function d(e, t) { if (f(t), e = s(e, t < 0 ? 0 : 0 | h(t)), !u.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < t; ++r) e[r] = 0; return e }

            function l(e, t) { var r = t.length < 0 ? 0 : 0 | h(t.length);
                e = s(e, r); for (var n = 0; n < r; n += 1) e[n] = 255 & t[n]; return e }

            function h(e) { if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes"); return 0 | e }

            function p(e, t) { if (u.isBuffer(e)) return e.length; if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength; "string" !== typeof e && (e = "" + e); var r = e.length; if (0 === r) return 0; for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return H(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return z(e).length;
                    default:
                        if (n) return H(e).length;
                        t = ("" + t).toLowerCase(), n = !0 } }

            function b(e, t, r) { var n = !1; if ((void 0 === t || t < 0) && (t = 0), t > this.length) return ""; if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return ""; if ((r >>>= 0) <= (t >>>= 0)) return ""; for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return C(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return M(this, t, r);
                    case "ascii":
                        return R(this, t, r);
                    case "latin1":
                    case "binary":
                        return T(this, t, r);
                    case "base64":
                        return E(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return O(this, t, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), n = !0 } }

            function v(e, t, r) { var n = e[t];
                e[t] = e[r], e[r] = n }

            function g(e, t, r, n, i) { if (0 === e.length) return -1; if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) { if (i) return -1;
                    r = e.length - 1 } else if (r < 0) { if (!i) return -1;
                    r = 0 } if ("string" === typeof t && (t = u.from(t, n)), u.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, n, i); if ("number" === typeof t) return t &= 255, u.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, i); throw new TypeError("val must be string, number or Buffer") }

            function y(e, t, r, n, i) { var o, a = 1,
                    s = e.length,
                    u = t.length; if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) { if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, u /= 2, r /= 2 }

                function c(e, t) { return 1 === a ? e[t] : e.readUInt16BE(t * a) } if (i) { var f = -1; for (o = r; o < s; o++)
                        if (c(e, o) === c(t, -1 === f ? 0 : o - f)) { if (-1 === f && (f = o), o - f + 1 === u) return f * a } else -1 !== f && (o -= o - f), f = -1 } else
                    for (r + u > s && (r = s - u), o = r; o >= 0; o--) { for (var d = !0, l = 0; l < u; l++)
                            if (c(e, o + l) !== c(t, l)) { d = !1; break }
                        if (d) return o }
                return -1 }

            function m(e, t, r, n) { r = Number(r) || 0; var i = e.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i; var o = t.length; if (o % 2 !== 0) throw new TypeError("Invalid hex string");
                n > o / 2 && (n = o / 2); for (var a = 0; a < n; ++a) { var s = parseInt(t.substr(2 * a, 2), 16); if (isNaN(s)) return a;
                    e[r + a] = s } return a }

            function _(e, t, r, n) { return F(H(t, e.length - r), e, r, n) }

            function w(e, t, r, n) { return F(function(e) { for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r)); return t }(t), e, r, n) }

            function x(e, t, r, n) { return w(e, t, r, n) }

            function k(e, t, r, n) { return F(z(t), e, r, n) }

            function S(e, t, r, n) { return F(function(e, t) { for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = (r = e.charCodeAt(a)) >> 8, i = r % 256, o.push(i), o.push(n); return o }(t, e.length - r), e, r, n) }

            function E(e, t, r) { return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r)) }

            function M(e, t, r) { r = Math.min(e.length, r); for (var n = [], i = t; i < r;) { var o, a, s, u, c = e[i],
                        f = null,
                        d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1; if (i + d <= r) switch (d) {
                        case 1:
                            c < 128 && (f = c); break;
                        case 2:
                            128 === (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (f = u); break;
                        case 3:
                            o = e[i + 1], a = e[i + 2], 128 === (192 & o) && 128 === (192 & a) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (f = u); break;
                        case 4:
                            o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 === (192 & o) && 128 === (192 & a) && 128 === (192 & s) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (f = u) }
                    null === f ? (f = 65533, d = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += d } return function(e) { var t = e.length; if (t <= A) return String.fromCharCode.apply(String, e); var r = "",
                        n = 0; for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += A)); return r }(n) }
            t.Buffer = u, t.SlowBuffer = function(e) {+e != e && (e = 0); return u.alloc(+e) }, t.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() { try { var e = new Uint8Array(1); return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === e.foo() && "function" === typeof e.subarray && 0 === e.subarray(1, 1).byteLength } catch (t) { return !1 } }(), t.kMaxLength = a(), u.poolSize = 8192, u._augment = function(e) { return e.__proto__ = u.prototype, e }, u.from = function(e, t, r) { return c(null, e, t, r) }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })), u.alloc = function(e, t, r) { return function(e, t, r, n) { return f(t), t <= 0 ? s(e, t) : void 0 !== r ? "string" === typeof n ? s(e, t).fill(r, n) : s(e, t).fill(r) : s(e, t) }(null, e, t, r) }, u.allocUnsafe = function(e) { return d(null, e) }, u.allocUnsafeSlow = function(e) { return d(null, e) }, u.isBuffer = function(e) { return !(null == e || !e._isBuffer) }, u.compare = function(e, t) { if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers"); if (e === t) return 0; for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) { r = e[i], n = t[i]; break }
                return r < n ? -1 : n < r ? 1 : 0 }, u.isEncoding = function(e) { switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1 } }, u.concat = function(e, t) { if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === e.length) return u.alloc(0); var r; if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length; var n = u.allocUnsafe(t),
                    i = 0; for (r = 0; r < e.length; ++r) { var a = e[r]; if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(n, i), i += a.length } return n }, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function() { var e = this.length; if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2) v(this, t, t + 1); return this }, u.prototype.swap32 = function() { var e = this.length; if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4) v(this, t, t + 3), v(this, t + 1, t + 2); return this }, u.prototype.swap64 = function() { var e = this.length; if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8) v(this, t, t + 7), v(this, t + 1, t + 6), v(this, t + 2, t + 5), v(this, t + 3, t + 4); return this }, u.prototype.toString = function() { var e = 0 | this.length; return 0 === e ? "" : 0 === arguments.length ? M(this, 0, e) : b.apply(this, arguments) }, u.prototype.equals = function(e) { if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === u.compare(this, e) }, u.prototype.inspect = function() { var e = "",
                    r = t.INSPECT_MAX_BYTES; return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">" }, u.prototype.compare = function(e, t, r, n, i) { if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index"); if (n >= i && t >= r) return 0; if (n >= i) return -1; if (t >= r) return 1; if (this === e) return 0; for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), s = Math.min(o, a), c = this.slice(n, i), f = e.slice(t, r), d = 0; d < s; ++d)
                    if (c[d] !== f[d]) { o = c[d], a = f[d]; break }
                return o < a ? -1 : a < o ? 1 : 0 }, u.prototype.includes = function(e, t, r) { return -1 !== this.indexOf(e, t, r) }, u.prototype.indexOf = function(e, t, r) { return g(this, e, t, r, !0) }, u.prototype.lastIndexOf = function(e, t, r) { return g(this, e, t, r, !1) }, u.prototype.write = function(e, t, r, n) { if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" === typeof t) n = t, r = this.length, t = 0;
                else { if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0) } var i = this.length - t; if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8"); for (var o = !1;;) switch (n) {
                    case "hex":
                        return m(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return _(this, e, t, r);
                    case "ascii":
                        return w(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return x(this, e, t, r);
                    case "base64":
                        return k(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return S(this, e, t, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0 } }, u.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } }; var A = 4096;

            function R(e, t, r) { var n = "";
                r = Math.min(e.length, r); for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]); return n }

            function T(e, t, r) { var n = "";
                r = Math.min(e.length, r); for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]); return n }

            function C(e, t, r) { var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n); for (var i = "", o = t; o < r; ++o) i += D(e[o]); return i }

            function O(e, t, r) { for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]); return i }

            function P(e, t, r) { if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint"); if (e + t > r) throw new RangeError("Trying to access beyond buffer length") }

            function I(e, t, r, n, i, o) { if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > i || t < o) throw new RangeError('"value" argument is out of bounds'); if (r + n > e.length) throw new RangeError("Index out of range") }

            function B(e, t, r, n) { t < 0 && (t = 65535 + t + 1); for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i) }

            function L(e, t, r, n) { t < 0 && (t = 4294967295 + t + 1); for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255 }

            function j(e, t, r, n, i, o) { if (r + n > e.length) throw new RangeError("Index out of range"); if (r < 0) throw new RangeError("Index out of range") }

            function N(e, t, r, n, o) { return o || j(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4 }

            function q(e, t, r, n, o) { return o || j(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8 }
            u.prototype.slice = function(e, t) { var r, n = this.length; if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), u.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = u.prototype;
                else { var i = t - e;
                    r = new u(i, void 0); for (var o = 0; o < i; ++o) r[o] = this[o + e] } return r }, u.prototype.readUIntLE = function(e, t, r) { e |= 0, t |= 0, r || P(e, t, this.length); for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i; return n }, u.prototype.readUIntBE = function(e, t, r) { e |= 0, t |= 0, r || P(e, t, this.length); for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i; return n }, u.prototype.readUInt8 = function(e, t) { return t || P(e, 1, this.length), this[e] }, u.prototype.readUInt16LE = function(e, t) { return t || P(e, 2, this.length), this[e] | this[e + 1] << 8 }, u.prototype.readUInt16BE = function(e, t) { return t || P(e, 2, this.length), this[e] << 8 | this[e + 1] }, u.prototype.readUInt32LE = function(e, t) { return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, u.prototype.readUInt32BE = function(e, t) { return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, u.prototype.readIntLE = function(e, t, r) { e |= 0, t |= 0, r || P(e, t, this.length); for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i; return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n }, u.prototype.readIntBE = function(e, t, r) { e |= 0, t |= 0, r || P(e, t, this.length); for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i; return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o }, u.prototype.readInt8 = function(e, t) { return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, u.prototype.readInt16LE = function(e, t) { t || P(e, 2, this.length); var r = this[e] | this[e + 1] << 8; return 32768 & r ? 4294901760 | r : r }, u.prototype.readInt16BE = function(e, t) { t || P(e, 2, this.length); var r = this[e + 1] | this[e] << 8; return 32768 & r ? 4294901760 | r : r }, u.prototype.readInt32LE = function(e, t) { return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, u.prototype.readInt32BE = function(e, t) { return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, u.prototype.readFloatLE = function(e, t) { return t || P(e, 4, this.length), i.read(this, e, !0, 23, 4) }, u.prototype.readFloatBE = function(e, t) { return t || P(e, 4, this.length), i.read(this, e, !1, 23, 4) }, u.prototype.readDoubleLE = function(e, t) { return t || P(e, 8, this.length), i.read(this, e, !0, 52, 8) }, u.prototype.readDoubleBE = function(e, t) { return t || P(e, 8, this.length), i.read(this, e, !1, 52, 8) }, u.prototype.writeUIntLE = function(e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || I(this, e, t, r, Math.pow(2, 8 * r) - 1, 0); var i = 1,
                    o = 0; for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255; return t + r }, u.prototype.writeUIntBE = function(e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || I(this, e, t, r, Math.pow(2, 8 * r) - 1, 0); var i = r - 1,
                    o = 1; for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255; return t + r }, u.prototype.writeUInt8 = function(e, t, r) { return e = +e, t |= 0, r || I(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1 }, u.prototype.writeUInt16LE = function(e, t, r) { return e = +e, t |= 0, r || I(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2 }, u.prototype.writeUInt16BE = function(e, t, r) { return e = +e, t |= 0, r || I(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2 }, u.prototype.writeUInt32LE = function(e, t, r) { return e = +e, t |= 0, r || I(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : L(this, e, t, !0), t + 4 }, u.prototype.writeUInt32BE = function(e, t, r) { return e = +e, t |= 0, r || I(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4 }, u.prototype.writeIntLE = function(e, t, r, n) { if (e = +e, t |= 0, !n) { var i = Math.pow(2, 8 * r - 1);
                    I(this, e, t, r, i - 1, -i) } var o = 0,
                    a = 1,
                    s = 0; for (this[t] = 255 & e; ++o < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255; return t + r }, u.prototype.writeIntBE = function(e, t, r, n) { if (e = +e, t |= 0, !n) { var i = Math.pow(2, 8 * r - 1);
                    I(this, e, t, r, i - 1, -i) } var o = r - 1,
                    a = 1,
                    s = 0; for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255; return t + r }, u.prototype.writeInt8 = function(e, t, r) { return e = +e, t |= 0, r || I(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, u.prototype.writeInt16LE = function(e, t, r) { return e = +e, t |= 0, r || I(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : B(this, e, t, !0), t + 2 }, u.prototype.writeInt16BE = function(e, t, r) { return e = +e, t |= 0, r || I(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : B(this, e, t, !1), t + 2 }, u.prototype.writeInt32LE = function(e, t, r) { return e = +e, t |= 0, r || I(this, e, t, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : L(this, e, t, !0), t + 4 }, u.prototype.writeInt32BE = function(e, t, r) { return e = +e, t |= 0, r || I(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), u.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4 }, u.prototype.writeFloatLE = function(e, t, r) { return N(this, e, t, !0, r) }, u.prototype.writeFloatBE = function(e, t, r) { return N(this, e, t, !1, r) }, u.prototype.writeDoubleLE = function(e, t, r) { return q(this, e, t, !0, r) }, u.prototype.writeDoubleBE = function(e, t, r) { return q(this, e, t, !1, r) }, u.prototype.copy = function(e, t, r, n) { if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0; if (0 === e.length || 0 === this.length) return 0; if (t < 0) throw new RangeError("targetStart out of bounds"); if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds"); if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r); var i, o = n - r; if (this === e && r < t && t < n)
                    for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
                else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) e[i + t] = this[i + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t); return o }, u.prototype.fill = function(e, t, r, n) { if ("string" === typeof e) { if ("string" === typeof t ? (n = t, t = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), 1 === e.length) { var i = e.charCodeAt(0);
                        i < 256 && (e = i) } if (void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string"); if ("string" === typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n) } else "number" === typeof e && (e &= 255); if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index"); if (r <= t) return this; var o; if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" === typeof e)
                    for (o = t; o < r; ++o) this[o] = e;
                else { var a = u.isBuffer(e) ? e : H(new u(e, n).toString()),
                        s = a.length; for (o = 0; o < r - t; ++o) this[o + t] = a[o % s] } return this }; var U = /[^+\/0-9A-Za-z-_]/g;

            function D(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16) }

            function H(e, t) { var r;
                t = t || 1 / 0; for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) { if ((r = e.charCodeAt(a)) > 55295 && r < 57344) { if (!i) { if (r > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189); continue } if (a + 1 === n) {
                                (t -= 3) > -1 && o.push(239, 191, 189); continue }
                            i = r; continue } if (r < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = r; continue }
                        r = 65536 + (i - 55296 << 10 | r - 56320) } else i && (t -= 3) > -1 && o.push(239, 191, 189); if (i = null, r < 128) { if ((t -= 1) < 0) break;
                        o.push(r) } else if (r < 2048) { if ((t -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128) } else if (r < 65536) { if ((t -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128) } else { if (!(r < 1114112)) throw new Error("Invalid code point"); if ((t -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128) } } return o }

            function z(e) { return n.toByteArray(function(e) { if ((e = function(e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") }(e).replace(U, "")).length < 2) return ""; for (; e.length % 4 !== 0;) e += "="; return e }(e)) }

            function F(e, t, r, n) { for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i]; return i } }).call(this, r(147)) }, , , , , , , , , function(e, t, r) { var n = r(928);
        e.exports = function(e, t) { if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && n(e, t) } }, function(e, t, r) { var n = r(858),
            i = r(1049),
            o = r(1358);
        e.exports = function(e) { var t = i(); return function() { var r, i = n(e); if (t) { var a = n(this).constructor;
                    r = Reflect.construct(i, arguments, a) } else r = i.apply(this, arguments); return o(this, r) } } }, , , function(e, t) {
        function r(e, t, r, n, i, o, a) { try { var s = e[o](a),
                    u = s.value } catch (c) { return void r(c) }
            s.done ? t(u) : Promise.resolve(u).then(n, i) }
        e.exports = function(e) { return function() { var t = this,
                    n = arguments; return new Promise((function(i, o) { var a = e.apply(t, n);

                    function s(e) { r(a, i, o, s, u, "next", e) }

                    function u(e) { r(a, i, o, s, u, "throw", e) }
                    s(void 0) })) } } }, function(e, t, r) { var n = r(785),
            i = n.Buffer;

        function o(e, t) { for (var r in e) t[r] = e[r] }

        function a(e, t, r) { return i(e, t, r) }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), a.prototype = Object.create(i.prototype), o(i, a), a.from = function(e, t, r) { if ("number" === typeof e) throw new TypeError("Argument must not be a number"); return i(e, t, r) }, a.alloc = function(e, t, r) { if ("number" !== typeof e) throw new TypeError("Argument must be a number"); var n = i(e); return void 0 !== t ? "string" === typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n }, a.allocUnsafe = function(e) { if ("number" !== typeof e) throw new TypeError("Argument must be a number"); return i(e) }, a.allocUnsafeSlow = function(e) { if ("number" !== typeof e) throw new TypeError("Argument must be a number"); return n.SlowBuffer(e) } }, , , function(e, t, r) { "use strict"; var n = t,
            i = r(48),
            o = r(220),
            a = r(1053);
        n.assert = o, n.toArray = a.toArray, n.zero2 = a.zero2, n.toHex = a.toHex, n.encode = a.encode, n.getNAF = function(e, t, r) { var n = new Array(Math.max(e.bitLength(), r) + 1);
            n.fill(0); for (var i = 1 << t + 1, o = e.clone(), a = 0; a < n.length; a++) { var s, u = o.andln(i - 1);
                o.isOdd() ? (s = u > (i >> 1) - 1 ? (i >> 1) - u : u, o.isubn(s)) : s = 0, n[a] = s, o.iushrn(1) } return n }, n.getJSF = function(e, t) { var r = [
                [],
                []
            ];
            e = e.clone(), t = t.clone(); for (var n, i = 0, o = 0; e.cmpn(-i) > 0 || t.cmpn(-o) > 0;) { var a, s, u = e.andln(3) + i & 3,
                    c = t.andln(3) + o & 3;
                3 === u && (u = -1), 3 === c && (c = -1), a = 0 === (1 & u) ? 0 : 3 !== (n = e.andln(7) + i & 7) && 5 !== n || 2 !== c ? u : -u, r[0].push(a), s = 0 === (1 & c) ? 0 : 3 !== (n = t.andln(7) + o & 7) && 5 !== n || 2 !== u ? c : -c, r[1].push(s), 2 * i === a + 1 && (i = 1 - i), 2 * o === s + 1 && (o = 1 - o), e.iushrn(1), t.iushrn(1) } return r }, n.cachedProperty = function(e, t, r) { var n = "_" + t;
            e.prototype[t] = function() { return void 0 !== this[n] ? this[n] : this[n] = r.call(this) } }, n.parseBytes = function(e) { return "string" === typeof e ? n.toArray(e, "hex") : e }, n.intFromLE = function(e) { return new i(e, "hex", "le") } }, , , , , , , , , , , , , , , , , , , , , function(e, t, r) { "use strict"; var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) { void 0 === n && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() { return t[r] } }) } : function(e, t, r, n) { void 0 === n && (n = r), e[n] = t[r] }),
            i = this && this.__exportStar || function(e, t) { for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r) };
        Object.defineProperty(t, "__esModule", { value: !0 }), i(r(1297), t), i(r(1298), t) }, function(e, t) { var r, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        t.getSymbolSize = function(e) { if (!e) throw new Error('"version" cannot be null or undefined'); if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40'); return 4 * e + 17 }, t.getSymbolTotalCodewords = function(e) { return n[e] }, t.getBCHDigit = function(e) { for (var t = 0; 0 !== e;) t++, e >>>= 1; return t }, t.setToSJISFunction = function(e) { if ("function" !== typeof e) throw new Error('"toSJISFunc" is not a valid function.');
            r = e }, t.isKanjiModeEnabled = function() { return "undefined" !== typeof r }, t.toSJIS = function(e) { return r(e) } }, function(e, t, r) { var n = r(1037),
            i = r(1038);
        t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }, t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }, t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }, t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }, t.MIXED = { bit: -1 }, t.getCharCountIndicator = function(e, t) { if (!e.ccBits) throw new Error("Invalid mode: " + e); if (!n.isValid(t)) throw new Error("Invalid version: " + t); return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2] }, t.getBestModeForData = function(e) { return i.testNumeric(e) ? t.NUMERIC : i.testAlphanumeric(e) ? t.ALPHANUMERIC : i.testKanji(e) ? t.KANJI : t.BYTE }, t.toString = function(e) { if (e && e.id) return e.id; throw new Error("Invalid mode") }, t.isValid = function(e) { return e && e.bit && e.ccBits }, t.from = function(e, r) { if (t.isValid(e)) return e; try { return function(e) { if ("string" !== typeof e) throw new Error("Param is not a string"); switch (e.toLowerCase()) {
                        case "numeric":
                            return t.NUMERIC;
                        case "alphanumeric":
                            return t.ALPHANUMERIC;
                        case "kanji":
                            return t.KANJI;
                        case "byte":
                            return t.BYTE;
                        default:
                            throw new Error("Unknown mode: " + e) } }(e) } catch (n) { return r } } }, function(e, t, r) { "use strict"; var n = r(878),
            i = Object.keys || function(e) { var t = []; for (var r in e) t.push(r); return t };
        e.exports = d; var o = Object.create(r(855));
        o.inherits = r(490); var a = r(1043),
            s = r(925);
        o.inherits(d, a); for (var u = i(s.prototype), c = 0; c < u.length; c++) { var f = u[c];
            d.prototype[f] || (d.prototype[f] = s.prototype[f]) }

        function d(e) { if (!(this instanceof d)) return new d(e);
            a.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", l) }

        function l() { this.allowHalfOpen || this._writableState.ended || n.nextTick(h, this) }

        function h(e) { e.end() }
        Object.defineProperty(d.prototype, "writableHighWaterMark", { enumerable: !1, get: function() { return this._writableState.highWaterMark } }), Object.defineProperty(d.prototype, "destroyed", { get: function() { return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed) }, set: function(e) { void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e) } }), d.prototype._destroy = function(e, t) { this.push(null), this.end(), n.nextTick(t, e) } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.isAsync = void 0; var n, i = r(1414),
            o = (n = i) && n.__esModule ? n : { default: n }; var a = "function" === typeof Symbol;

        function s(e) { return a && "AsyncFunction" === e[Symbol.toStringTag] }
        t.default = function(e) { return s(e) ? (0, o.default)(e) : e }, t.isAsync = s }, , function(e, t, r) { "use strict";
        r.d(t, "g", (function() { return n.detectEnv })), r.d(t, "t", (function() { return n.isMobile })), r.d(t, "o", (function() { return n.isBrowser })), r.d(t, "j", (function() { return n.getFromWindow })), r.d(t, "l", (function() { return n.getLocation })), r.d(t, "i", (function() { return n.getClientMeta })), r.d(t, "D", (function() { return n.setLocal })), r.d(t, "k", (function() { return n.getLocal })), r.d(t, "C", (function() { return n.removeLocal })), r.d(t, "x", (function() { return n.mobileLinkChoiceKey })), r.d(t, "E", (function() { return o })), r.d(t, "b", (function() { return f })), r.d(t, "c", (function() { return d })), r.d(t, "d", (function() { return l })), r.d(t, "e", (function() { return h })), r.d(t, "f", (function() { return p })), r.d(t, "y", (function() { return R })), r.d(t, "z", (function() { return T })), r.d(t, "B", (function() { return g })), r.d(t, "F", (function() { return y })), r.d(t, "n", (function() { return m })), r.d(t, "h", (function() { return C })), r.d(t, "w", (function() { return L })), r.d(t, "A", (function() { return j })), r.d(t, "m", (function() { return P })), r.d(t, "a", (function() { return I })), r.d(t, "q", (function() { return w })), r.d(t, "s", (function() { return x })), r.d(t, "r", (function() { return k })), r.d(t, "p", (function() { return S })), r.d(t, "u", (function() { return E })), r.d(t, "v", (function() { return M })); var n = r(945),
            i = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"],
            o = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign"],
            a = { 1: "mainnet", 3: "ropsten", 4: "rinkeby", 5: "goerli", 42: "kovan" },
            s = r(1285),
            u = r.n(s),
            c = r(853);

        function f(e) { return c.arrayToBuffer(new Uint8Array(e)) }

        function d(e, t) { return c.arrayToHex(new Uint8Array(e), !t) }

        function l(e) { return c.bufferToArray(e).buffer }

        function h(e) { return c.hexToArray(e).buffer }

        function p(e, t) { var r = c.removeHexPrefix(c.sanitizeHex(new u.a(e).toString(16))); return t ? r : c.addHexPrefix(r) } var b = r(1294);

        function v(e) { return c.sanitizeHex(e) } var g = r(1296).payloadId;

        function y() { return function(e, t) { for (t = e = ""; e++ < 36; t += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-"); return t }() }

        function m(e, t) { var r, n = function(e, t) { var r, n = a[e]; return n && (r = "https://".concat(n, ".infura.io/v3/").concat(t)), r }(e, t.infuraId); return t.custom && t.custom[e] ? r = t.custom[e] : n && (r = n), r }

        function _(e, t) { return c.isHexString(e, t) }

        function w(e) { return "undefined" !== typeof e.method }

        function x(e) { return "undefined" !== typeof e.result }

        function k(e) { return "undefined" !== typeof e.error }

        function S(e) { return "undefined" !== typeof e.event }

        function E(e) { return i.includes(e) || e.startsWith("wc_") }

        function M(e) { return !!e.method.startsWith("wc_") || !o.includes(e.method) }

        function A(e) { e = Object(c.removeHexPrefix)(e.toLowerCase()); for (var t, r = Object(c.removeHexPrefix)(Object(b.keccak_256)((t = e, c.utf8ToBuffer(t)))), n = "", i = 0; i < e.length; i++) parseInt(r[i], 16) > 7 ? n += e[i].toUpperCase() : n += e[i]; return Object(c.addHexPrefix)(n) }

        function R(e) { var t, r, n; return (n = e) && n.length && !_(e[0]) && (e[0] = (t = e[0], c.utf8ToHex(t, !r))), e }

        function T(e) { if ("undefined" === typeof e.from || (!(t = e.from) || "0x" !== t.toLowerCase().substring(0, 2) || !/^(0x)?[0-9a-f]{40}$/i.test(t) || !/^(0x)?[0-9a-f]{40}$/.test(t) && !/^(0x)?[0-9A-F]{40}$/.test(t) && t !== A(t))) throw new Error("Transaction object must include a valid 'from' value."); var t;

            function r(e) { var t, r = e; return ("number" === typeof e || "string" === typeof e && ! function(e) { return "" === e || "string" === typeof e && "" === e.trim() }(e)) && (_(e) ? "string" === typeof e && (r = v(e)) : r = p(e)), "string" === typeof r && (t = r, r = c.removeHexLeadingZeros(c.addHexPrefix(t))), r } var n = { from: v(e.from), to: "undefined" === typeof e.to ? "" : v(e.to), gasPrice: "undefined" === typeof e.gasPrice ? "" : r(e.gasPrice), gas: "undefined" === typeof e.gas ? "undefined" === typeof e.gasLimit ? "" : r(e.gasLimit) : r(e.gas), value: "undefined" === typeof e.value ? "" : r(e.value), nonce: "undefined" === typeof e.nonce ? "" : r(e.nonce), data: "undefined" === typeof e.data ? "" : v(e.data) || "0x" },
                i = ["gasPrice", "gas", "value", "nonce"]; return Object.keys(n).forEach((function(e) {!n[e].trim().length && i.includes(e) && delete n[e] })), n }
        r(3), r(13);

        function C(e) { var t = e.message || "Failed or Rejected Request",
                r = -32e3; if (e && !e.code) switch (t) {
                case "Parse error":
                    r = -32700; break;
                case "Invalid request":
                    r = -32600; break;
                case "Method not found":
                    r = -32601; break;
                case "Invalid params":
                    r = -32602; break;
                case "Internal error":
                    r = -32603; break;
                default:
                    r = -32e3 }
            return { code: r, message: t } } var O = r(1299);

        function P(e) { var t = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0; return "undefined" !== typeof t ? e.substr(t) : "" }

        function I(e, t) { var r = B(e); return e = function(e) { return O.stringify(e) }(r = Object.assign(Object.assign({}, r), t)) }

        function B(e) { return O.parse(e) }

        function L(e) { return "undefined" !== typeof e.bridge }

        function j(e) { var t = e.indexOf(":"),
                r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                n = e.substring(0, t); var i = function(e) { var t = e.split("@"); return { handshakeTopic: t[0], version: parseInt(t[1], 10) } }(e.substring(t + 1, r)); var o = function(e) { var t = B(e); return { key: t.key || "", bridge: t.bridge || "" } }("undefined" !== typeof r ? e.substr(r) : ""); return Object.assign(Object.assign({ protocol: n }, i), o) } }, , , function(e, t) { e.exports = function() { for (var e = {}, t = 0; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) r.call(n, i) && (e[i] = n[i]) } return e }; var r = Object.prototype.hasOwnProperty }, , , function(e, t, r) { "use strict"; var n = r(922);
        o.TYPED_ARRAY_SUPPORT = function() { try { var e = new Uint8Array(1); return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === e.foo() } catch (t) { return !1 } }(); var i = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

        function o(e, t, r) { return o.TYPED_ARRAY_SUPPORT || this instanceof o ? "number" === typeof e ? u(this, e) : function(e, t, r, n) { if ("number" === typeof t) throw new TypeError('"value" argument must not be a number'); if ("undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, r, n) { if (r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds"); if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds"); var i;
                    i = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                    o.TYPED_ARRAY_SUPPORT ? i.__proto__ = o.prototype : i = c(e, i); return i }(e, t, r, n); if ("string" === typeof t) return function(e, t) { var r = 0 | d(t),
                        n = s(e, r),
                        i = n.write(t);
                    i !== r && (n = n.slice(0, i)); return n }(e, t); return function(e, t) { if (o.isBuffer(t)) { var r = 0 | a(t.length),
                            n = s(e, r); return 0 === n.length || t.copy(n, 0, 0, r), n } if (t) { if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" !== typeof t.length || (i = t.length) !== i ? s(e, 0) : c(e, t); if ("Buffer" === t.type && Array.isArray(t.data)) return c(e, t.data) } var i; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }(e, t) }(this, e, t, r) : new o(e, t, r) }

        function a(e) { if (e >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes"); return 0 | e }

        function s(e, t) { var r; return o.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t)).__proto__ = o.prototype : (null === (r = e) && (r = new o(t)), r.length = t), r }

        function u(e, t) { var r = s(e, t < 0 ? 0 : 0 | a(t)); if (!o.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n) r[n] = 0; return r }

        function c(e, t) { for (var r = t.length < 0 ? 0 : 0 | a(t.length), n = s(e, r), i = 0; i < r; i += 1) n[i] = 255 & t[i]; return n }

        function f(e, t) { var r;
            t = t || 1 / 0; for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) { if ((r = e.charCodeAt(a)) > 55295 && r < 57344) { if (!i) { if (r > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189); continue } if (a + 1 === n) {
                            (t -= 3) > -1 && o.push(239, 191, 189); continue }
                        i = r; continue } if (r < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), i = r; continue }
                    r = 65536 + (i - 55296 << 10 | r - 56320) } else i && (t -= 3) > -1 && o.push(239, 191, 189); if (i = null, r < 128) { if ((t -= 1) < 0) break;
                    o.push(r) } else if (r < 2048) { if ((t -= 2) < 0) break;
                    o.push(r >> 6 | 192, 63 & r | 128) } else if (r < 65536) { if ((t -= 3) < 0) break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128) } else { if (!(r < 1114112)) throw new Error("Invalid code point"); if ((t -= 4) < 0) break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128) } } return o }

        function d(e) { return o.isBuffer(e) ? e.length : "undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" !== typeof e && (e = "" + e), 0 === e.length ? 0 : f(e).length) }
        o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 })), o.prototype.write = function(e, t, r) { void 0 === t || void 0 === r && "string" === typeof t ? (r = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(r) ? r |= 0 : r = void 0); var n = this.length - t; if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds"); return function(e, t, r, n) { return function(e, t, r, n) { for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i]; return i }(f(t, e.length - r), e, r, n) }(this, e, t, r) }, o.prototype.slice = function(e, t) { var r, n = this.length; if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), o.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = o.prototype;
            else { var i = t - e;
                r = new o(i, void 0); for (var a = 0; a < i; ++a) r[a] = this[a + e] } return r }, o.prototype.copy = function(e, t, r, n) { if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0; if (0 === e.length || 0 === this.length) return 0; if (t < 0) throw new RangeError("targetStart out of bounds"); if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds"); if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r); var i, a = n - r; if (this === e && r < t && t < n)
                for (i = a - 1; i >= 0; --i) e[i + t] = this[i + r];
            else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < a; ++i) e[i + t] = this[i + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t); return a }, o.prototype.fill = function(e, t, r) { if ("string" === typeof e) { if ("string" === typeof t ? (t = 0, r = this.length) : "string" === typeof r && (r = this.length), 1 === e.length) { var n = e.charCodeAt(0);
                    n < 256 && (e = n) } } else "number" === typeof e && (e &= 255); if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index"); if (r <= t) return this; var i; if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" === typeof e)
                for (i = t; i < r; ++i) this[i] = e;
            else { var a = o.isBuffer(e) ? e : new o(e),
                    s = a.length; for (i = 0; i < r - t; ++i) this[i + t] = a[i % s] } return this }, o.concat = function(e, t) { if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === e.length) return s(null, 0); var r; if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length; var i = u(null, t),
                a = 0; for (r = 0; r < e.length; ++r) { var c = e[r]; if (!o.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
                c.copy(i, a), a += c.length } return i }, o.byteLength = d, o.prototype._isBuffer = !0, o.isBuffer = function(e) { return !(null == e || !e._isBuffer) }, e.exports.alloc = function(e) { var t = new o(e); return t.fill(0), t }, e.exports.from = function(e) { return new o(e) } }, function(e, t, r) { "use strict"; var n = {};

        function i(e, t, r) { r || (r = Error); var i = function(e) { var r, n;

                function i(r, n, i) { return e.call(this, function(e, r, n) { return "string" === typeof t ? t : t(e, r, n) }(r, n, i)) || this } return n = e, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n, i }(r);
            i.prototype.name = r.name, i.prototype.code = e, n[e] = i }

        function o(e, t) { if (Array.isArray(e)) { var r = e.length; return e = e.map((function(e) { return String(e) })), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]) } return "of ".concat(t, " ").concat(String(e)) }
        i("ERR_INVALID_OPT_VALUE", (function(e, t) { return 'The value "' + t + '" is invalid for option "' + e + '"' }), TypeError), i("ERR_INVALID_ARG_TYPE", (function(e, t, r) { var n, i, a, s; if ("string" === typeof t && (i = "not ", t.substr(!a || a < 0 ? 0 : +a, i.length) === i) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", function(e, t, r) { return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t }(e, " argument")) s = "The ".concat(e, " ").concat(n, " ").concat(o(t, "type"));
            else { var u = function(e, t, r) { return "number" !== typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r) }(e, ".") ? "property" : "argument";
                s = 'The "'.concat(e, '" ').concat(u, " ").concat(n, " ").concat(o(t, "type")) } return s += ". Received type ".concat(typeof r) }), TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", (function(e) { return "The " + e + " method is not implemented" })), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", (function(e) { return "Cannot call " + e + " after a stream was destroyed" })), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", (function(e) { return "Unknown encoding: " + e }), TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.codes = n }, function(e, t, r) { "use strict";
        (function(t) { var n = Object.keys || function(e) { var t = []; for (var r in e) t.push(r); return t };
            e.exports = c; var i = r(1058),
                o = r(1062);
            r(490)(c, i); for (var a = n(o.prototype), s = 0; s < a.length; s++) { var u = a[s];
                c.prototype[u] || (c.prototype[u] = o.prototype[u]) }

            function c(e) { if (!(this instanceof c)) return new c(e);
                i.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", f))) }

            function f() { this._writableState.ended || t.nextTick(d, this) }

            function d(e) { e.end() }
            Object.defineProperty(c.prototype, "writableHighWaterMark", { enumerable: !1, get: function() { return this._writableState.highWaterMark } }), Object.defineProperty(c.prototype, "writableBuffer", { enumerable: !1, get: function() { return this._writableState && this._writableState.getBuffer() } }), Object.defineProperty(c.prototype, "writableLength", { enumerable: !1, get: function() { return this._writableState.length } }), Object.defineProperty(c.prototype, "destroyed", { enumerable: !1, get: function() { return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed) }, set: function(e) { void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e) } }) }).call(this, r(246)) }, function(e, t, r) { var n = r(799).Buffer;

        function i(e, t) { this._block = n.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0 }
        i.prototype.update = function(e, t) { "string" === typeof e && (t = t || "utf8", e = n.from(e, t)); for (var r = this._block, i = this._blockSize, o = e.length, a = this._len, s = 0; s < o;) { for (var u = a % i, c = Math.min(o - s, i - u), f = 0; f < c; f++) r[u + f] = e[s + f];
                s += c, (a += c) % i === 0 && this._update(r) } return this._len += o, this }, i.prototype.digest = function(e) { var t = this._len % this._blockSize;
            this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0)); var r = 8 * this._len; if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
            else { var n = (4294967295 & r) >>> 0,
                    i = (r - n) / 4294967296;
                this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4) }
            this._update(this._block); var o = this._hash(); return e ? o.toString(e) : o }, i.prototype._update = function() { throw new Error("_update must be implemented by subclass") }, e.exports = i }, function(e, t, r) { "use strict";
        (function(t) { var n = r(1066),
                i = r(1403);

            function o(e) { var t = e; if ("string" !== typeof t) throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof t + ", while padToEven."); return t.length % 2 && (t = "0" + t), t }

            function a(e) { return "0x" + e.toString(16) }
            e.exports = { arrayContainsArray: function(e, t, r) { if (!0 !== Array.isArray(e)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof e + "'"); if (!0 !== Array.isArray(t)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof t + "'"); return t[Boolean(r) ? "some" : "every"]((function(t) { return e.indexOf(t) >= 0 })) }, intToBuffer: function(e) { var r = a(e); return new t(o(r.slice(2)), "hex") }, getBinarySize: function(e) { if ("string" !== typeof e) throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'."); return t.byteLength(e, "utf8") }, isHexPrefixed: n, stripHexPrefix: i, padToEven: o, intToHex: a, fromAscii: function(e) { for (var t = "", r = 0; r < e.length; r++) { var n = e.charCodeAt(r).toString(16);
                        t += n.length < 2 ? "0" + n : n } return "0x" + t }, fromUtf8: function(e) { return "0x" + o(new t(e, "utf8").toString("hex")).replace(/^0+|0+$/g, "") }, toAscii: function(e) { var t = "",
                        r = 0,
                        n = e.length; for ("0x" === e.substring(0, 2) && (r = 2); r < n; r += 2) { var i = parseInt(e.substr(r, 2), 16);
                        t += String.fromCharCode(i) } return t }, toUtf8: function(e) { return new t(o(i(e).replace(/^0+|0+$/g, "")), "hex").toString("utf8") }, getKeys: function(e, t, r) { if (!Array.isArray(e)) throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof e + "'"); if ("string" !== typeof t) throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof t + "'."); for (var n = [], i = 0; i < e.length; i++) { var o = e[i][t]; if (r && !o) o = "";
                        else if ("string" !== typeof o) throw new Error("invalid abi");
                        n.push(o) } return n }, isHexString: function(e, t) { return !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t) } } }).call(this, r(785).Buffer) }, , , , , , , , , , , , , , function(e, t, r) { "use strict";
        (function(e) { var n = r(917),
                i = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
            Object.defineProperty(t, "__esModule", { value: !0 }), t.removeHexLeadingZeros = t.sanitizeHex = t.addHexPrefix = t.removeHexPrefix = t.padRight = t.padLeft = t.sanitizeBytes = t.swapHex = t.swapBytes = t.splitBytes = t.calcByteLength = t.trimRight = t.trimLeft = t.concatArrays = t.concatBuffers = t.getEncoding = t.getType = t.isArrayBuffer = t.isTypedArray = t.isBuffer = t.isHexString = t.isBinaryString = t.binaryToNumber = t.binaryToUtf8 = t.binaryToHex = t.binaryToArray = t.binaryToBuffer = t.numberToBinary = t.numberToUtf8 = t.numberToHex = t.numberToArray = t.numberToBuffer = t.utf8ToBinary = t.utf8ToNumber = t.utf8ToHex = t.utf8ToArray = t.utf8ToBuffer = t.hexToBinary = t.hexToNumber = t.hexToUtf8 = t.hexToArray = t.hexToBuffer = t.arrayToBinary = t.arrayToNumber = t.arrayToUtf8 = t.arrayToHex = t.arrayToBuffer = t.bufferToBinary = t.bufferToNumber = t.bufferToUtf8 = t.bufferToHex = t.bufferToArray = void 0; var o = i(r(1017)),
                a = i(r(1293)),
                s = "hex",
                u = "utf8",
                c = "0";

            function f(e) { return new Uint8Array(e) }

            function d(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = e.toString(s); return t ? U(r) : r }

            function l(e) { return e.toString(u) }

            function h(e) { return e.readUIntBE(0, e.length) }

            function p(e) { return a.default(e) }

            function b(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return d(p(e), t) }

            function v(e) { return l(p(e)) }

            function g(e) { return h(p(e)) }

            function y(e) { return Array.from(e).map(S).join("") }

            function m(t) { return e.from(q(t), s) }

            function _(e) { return f(m(e)) }

            function w(e) { return y(_(e)) }

            function x(t) { return e.from(t, u) }

            function k(e) { return f(x(e)) }

            function S(e) { return j((e >>> 0).toString(2)) }

            function E(e) { return p(M(e)) }

            function M(e) { return new Uint8Array(B(e).map((function(e) { return parseInt(e, 2) }))) }

            function A(e, t) { return b(M(e), t) }

            function R(e) { return !("string" !== typeof e || !new RegExp(/^[01]+$/).test(e)) && e.length % 8 === 0 }

            function T(e, t) { return !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t) }

            function C(t) { return e.isBuffer(t) }

            function O(e) { return o.default.strict(e) && !C(e) }

            function P(e) { return !O(e) && !C(e) && "undefined" !== typeof e.byteLength }

            function I(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
                    r = e % t; return r ? (e - r) / t * t + t : e }

            function B(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
                    r = j(e).match(new RegExp(".{".concat(t, "}"), "gi")); return Array.from(r || []) }

            function L(e) { return B(e).map(D).join("") }

            function j(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c; return N(e, I(e.length, t), r) }

            function N(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c; return H(e, t, !0, r) }

            function q(e) { return e.replace(/^0x/, "") }

            function U(e) { return e.startsWith("0x") ? e : "0x".concat(e) }

            function D(e) { return e.split("").reverse().join("") }

            function H(e, t, r) { var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c,
                    i = t - e.length,
                    o = e; if (i > 0) { var a = n.repeat(i);
                    o = r ? a + e : e + a } return o }
            t.bufferToArray = f, t.bufferToHex = d, t.bufferToUtf8 = l, t.bufferToNumber = h, t.bufferToBinary = function(e) { return y(f(e)) }, t.arrayToBuffer = p, t.arrayToHex = b, t.arrayToUtf8 = v, t.arrayToNumber = g, t.arrayToBinary = y, t.hexToBuffer = m, t.hexToArray = _, t.hexToUtf8 = function(e) { return l(m(e)) }, t.hexToNumber = function(e) { return g(_(e)) }, t.hexToBinary = w, t.utf8ToBuffer = x, t.utf8ToArray = k, t.utf8ToHex = function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return d(x(e), t) }, t.utf8ToNumber = function(e) { var t = parseInt(e, 10); return function(e, t) { if (!e) throw new Error(t) }(! function(e) { return "undefined" === typeof e }(t), "Number can only safely store up to 53 bits"), t }, t.utf8ToBinary = function(e) { return y(k(e)) }, t.numberToBuffer = function(e) { return E(S(e)) }, t.numberToArray = function(e) { return M(S(e)) }, t.numberToHex = function(e, t) { return A(S(e), t) }, t.numberToUtf8 = function(e) { return "".concat(e) }, t.numberToBinary = S, t.binaryToBuffer = E, t.binaryToArray = M, t.binaryToHex = A, t.binaryToUtf8 = function(e) { return v(M(e)) }, t.binaryToNumber = function(e) { return g(M(e)) }, t.isBinaryString = R, t.isHexString = T, t.isBuffer = C, t.isTypedArray = O, t.isArrayBuffer = P, t.getType = function(e) { return C(e) ? "buffer" : O(e) ? "typed-array" : P(e) ? "array-buffer" : Array.isArray(e) ? "array" : typeof e }, t.getEncoding = function(e) { return R(e) ? "binary" : T(e) ? s : u }, t.concatBuffers = function() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; var i = e.concat(r); return i }, t.concatArrays = function() { for (var e = [], t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i]; return r.forEach((function(t) { return e = e.concat(Array.from(t)) })), new Uint8Array(n(e)) }, t.trimLeft = function(e, t) { var r = e.length - t; return r > 0 && (e = e.slice(r)), e }, t.trimRight = function(e, t) { return e.slice(0, t) }, t.calcByteLength = I, t.splitBytes = B, t.swapBytes = L, t.swapHex = function(e) { return A(L(w(e))) }, t.sanitizeBytes = j, t.padLeft = N, t.padRight = function(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c; return H(e, t, !1, r) }, t.removeHexPrefix = q, t.addHexPrefix = U, t.sanitizeHex = function(e) { return (e = j(e = q(e), 2)) && (e = U(e)), e }, t.removeHexLeadingZeros = function(e) { var t = e.startsWith("0x"); return e = (e = q(e)).startsWith(c) ? e.substring(1) : e, t ? U(e) : e } }).call(this, r(785).Buffer) }, function(e, t, r) {
        (t = e.exports = r(1043)).Stream = t, t.Readable = t, t.Writable = r(925), t.Duplex = r(826), t.Transform = r(1047), t.PassThrough = r(1339) }, function(e, t, r) {
        (function(e) {
            function r(e) { return Object.prototype.toString.call(e) }
            t.isArray = function(e) { return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e) }, t.isBoolean = function(e) { return "boolean" === typeof e }, t.isNull = function(e) { return null === e }, t.isNullOrUndefined = function(e) { return null == e }, t.isNumber = function(e) { return "number" === typeof e }, t.isString = function(e) { return "string" === typeof e }, t.isSymbol = function(e) { return "symbol" === typeof e }, t.isUndefined = function(e) { return void 0 === e }, t.isRegExp = function(e) { return "[object RegExp]" === r(e) }, t.isObject = function(e) { return "object" === typeof e && null !== e }, t.isDate = function(e) { return "[object Date]" === r(e) }, t.isError = function(e) { return "[object Error]" === r(e) || e instanceof Error }, t.isFunction = function(e) { return "function" === typeof e }, t.isPrimitive = function(e) { return null === e || "boolean" === typeof e || "number" === typeof e || "string" === typeof e || "symbol" === typeof e || "undefined" === typeof e }, t.isBuffer = e.isBuffer }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict"; var n = r(799).Buffer,
            i = n.isEncoding || function(e) { switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1 } };

        function o(e) { var t; switch (this.encoding = function(e) { var t = function(e) { if (!e) return "utf8"; for (var t;;) switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t) return;
                            e = ("" + e).toLowerCase(), t = !0 } }(e); if ("string" !== typeof t && (n.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e); return t || e }(e), this.encoding) {
                case "utf16le":
                    this.text = u, this.end = c, t = 4; break;
                case "utf8":
                    this.fillLast = s, t = 4; break;
                case "base64":
                    this.text = f, this.end = d, t = 3; break;
                default:
                    return this.write = l, void(this.end = h) }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t) }

        function a(e) { return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2 }

        function s(e) { var t = this.lastTotal - this.lastNeed,
                r = function(e, t, r) { if (128 !== (192 & t[0])) return e.lastNeed = 0, "\ufffd"; if (e.lastNeed > 1 && t.length > 1) { if (128 !== (192 & t[1])) return e.lastNeed = 1, "\ufffd"; if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2])) return e.lastNeed = 2, "\ufffd" } }(this, e); return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length)) }

        function u(e, t) { if ((e.length - t) % 2 === 0) { var r = e.toString("utf16le", t); if (r) { var n = r.charCodeAt(r.length - 1); if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1) } return r } return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1) }

        function c(e) { var t = e && e.length ? this.write(e) : ""; if (this.lastNeed) { var r = this.lastTotal - this.lastNeed; return t + this.lastChar.toString("utf16le", 0, r) } return t }

        function f(e, t) { var r = (e.length - t) % 3; return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r)) }

        function d(e) { var t = e && e.length ? this.write(e) : ""; return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t }

        function l(e) { return e.toString(this.encoding) }

        function h(e) { return e && e.length ? this.write(e) : "" }
        t.StringDecoder = o, o.prototype.write = function(e) { if (0 === e.length) return ""; var t, r; if (this.lastNeed) { if (void 0 === (t = this.fillLast(e))) return "";
                r = this.lastNeed, this.lastNeed = 0 } else r = 0; return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "" }, o.prototype.end = function(e) { var t = e && e.length ? this.write(e) : ""; return this.lastNeed ? t + "\ufffd" : t }, o.prototype.text = function(e, t) { var r = function(e, t, r) { var n = t.length - 1; if (n < r) return 0; var i = a(t[n]); if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i; if (--n < r || -2 === i) return 0; if ((i = a(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i; if (--n < r || -2 === i) return 0; if ((i = a(t[n])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i; return 0 }(this, e, t); if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = r; var n = e.length - (r - this.lastNeed); return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n) }, o.prototype.fillLast = function(e) { if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length } }, function(e, t, r) { "use strict"; var n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            i = r(1048),
            o = i.keccak224,
            a = i.keccak384,
            s = i.keccak256,
            u = i.keccak512,
            c = r(1367),
            f = r(932),
            d = r(880),
            l = r(48),
            h = r(1056),
            p = r(799).Buffer;
        Object.assign(t, r(839)), t.MAX_INTEGER = new l("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new l("10000000000000000000000000000000000000000000000000000000000000000", 16), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.SHA3_NULL_S = t.KECCAK256_NULL_S, t.KECCAK256_NULL = p.from(t.KECCAK256_NULL_S, "hex"), t.SHA3_NULL = t.KECCAK256_NULL, t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.SHA3_RLP_ARRAY_S = t.KECCAK256_RLP_ARRAY_S, t.KECCAK256_RLP_ARRAY = p.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.SHA3_RLP_ARRAY = t.KECCAK256_RLP_ARRAY, t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.SHA3_RLP_S = t.KECCAK256_RLP_S, t.KECCAK256_RLP = p.from(t.KECCAK256_RLP_S, "hex"), t.SHA3_RLP = t.KECCAK256_RLP, t.BN = l, t.rlp = d, t.secp256k1 = c, t.zeros = function(e) { return p.allocUnsafe(e).fill(0) }, t.zeroAddress = function() { var e = t.zeros(20); return t.bufferToHex(e) }, t.setLengthLeft = t.setLength = function(e, r, n) { var i = t.zeros(r); return e = t.toBuffer(e), n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r) }, t.setLengthRight = function(e, r) { return t.setLength(e, r, !0) }, t.unpad = t.stripZeros = function(e) { for (var r = (e = t.stripHexPrefix(e))[0]; e.length > 0 && "0" === r.toString();) r = (e = e.slice(1))[0]; return e }, t.toBuffer = function(e) { if (!p.isBuffer(e))
                if (Array.isArray(e)) e = p.from(e);
                else if ("string" === typeof e) e = t.isHexString(e) ? p.from(t.padToEven(t.stripHexPrefix(e)), "hex") : p.from(e);
            else if ("number" === typeof e) e = t.intToBuffer(e);
            else if (null === e || void 0 === e) e = p.allocUnsafe(0);
            else if (l.isBN(e)) e = e.toArrayLike(p);
            else { if (!e.toArray) throw new Error("invalid type");
                e = p.from(e.toArray()) } return e }, t.bufferToInt = function(e) { return new l(t.toBuffer(e)).toNumber() }, t.bufferToHex = function(e) { return "0x" + (e = t.toBuffer(e)).toString("hex") }, t.fromSigned = function(e) { return new l(e).fromTwos(256) }, t.toUnsigned = function(e) { return p.from(e.toTwos(256).toArray()) }, t.keccak = function(e, r) { switch (e = t.toBuffer(e), r || (r = 256), r) {
                case 224:
                    return o(e);
                case 256:
                    return s(e);
                case 384:
                    return a(e);
                case 512:
                    return u(e);
                default:
                    throw new Error("Invald algorithm: keccak" + r) } }, t.keccak256 = function(e) { return t.keccak(e) }, t.sha3 = t.keccak, t.sha256 = function(e) { return e = t.toBuffer(e), h("sha256").update(e).digest() }, t.ripemd160 = function(e, r) { e = t.toBuffer(e); var n = h("rmd160").update(e).digest(); return !0 === r ? t.setLength(n, 32) : n }, t.rlphash = function(e) { return t.keccak(d.encode(e)) }, t.isValidPrivate = function(e) { return c.privateKeyVerify(e) }, t.isValidPublic = function(e, t) { return 64 === e.length ? c.publicKeyVerify(p.concat([p.from([4]), e])) : !!t && c.publicKeyVerify(e) }, t.pubToAddress = t.publicToAddress = function(e, r) { return e = t.toBuffer(e), r && 64 !== e.length && (e = c.publicKeyConvert(e, !1).slice(1)), f(64 === e.length), t.keccak(e).slice(-20) }; var b = t.privateToPublic = function(e) { return e = t.toBuffer(e), c.publicKeyCreate(e, !1).slice(1) };
        t.importPublic = function(e) { return 64 !== (e = t.toBuffer(e)).length && (e = c.publicKeyConvert(e, !1).slice(1)), e }, t.ecsign = function(e, t) { var r = c.sign(e, t),
                n = {}; return n.r = r.signature.slice(0, 32), n.s = r.signature.slice(32, 64), n.v = r.recovery + 27, n }, t.hashPersonalMessage = function(e) { var r = t.toBuffer("\x19Ethereum Signed Message:\n" + e.length.toString()); return t.keccak(p.concat([r, e])) }, t.ecrecover = function(e, r, n, i) { var o = p.concat([t.setLength(n, 32), t.setLength(i, 32)], 64),
                a = r - 27; if (0 !== a && 1 !== a) throw new Error("Invalid signature v value"); var s = c.recover(e, o, a); return c.publicKeyConvert(s, !1).slice(1) }, t.toRpcSig = function(e, r, n) { if (27 !== e && 28 !== e) throw new Error("Invalid recovery id"); return t.bufferToHex(p.concat([t.setLengthLeft(r, 32), t.setLengthLeft(n, 32), t.toBuffer(e - 27)])) }, t.fromRpcSig = function(e) { if (65 !== (e = t.toBuffer(e)).length) throw new Error("Invalid signature length"); var r = e[64]; return r < 27 && (r += 27), { v: r, r: e.slice(0, 32), s: e.slice(32, 64) } }, t.privateToAddress = function(e) { return t.publicToAddress(b(e)) }, t.isValidAddress = function(e) { return /^0x[0-9a-fA-F]{40}$/.test(e) }, t.isZeroAddress = function(e) { return t.zeroAddress() === t.addHexPrefix(e) }, t.toChecksumAddress = function(e) { e = t.stripHexPrefix(e).toLowerCase(); for (var r = t.keccak(e).toString("hex"), n = "0x", i = 0; i < e.length; i++) parseInt(r[i], 16) >= 8 ? n += e[i].toUpperCase() : n += e[i]; return n }, t.isValidChecksumAddress = function(e) { return t.isValidAddress(e) && t.toChecksumAddress(e) === e }, t.generateAddress = function(e, r) { return e = t.toBuffer(e), r = (r = new l(r)).isZero() ? null : p.from(r.toArray()), t.rlphash([e, r]).slice(-20) }, t.isPrecompiled = function(e) { var r = t.unpad(e); return 1 === r.length && r[0] >= 1 && r[0] <= 8 }, t.addHexPrefix = function(e) { return "string" !== typeof e || t.isHexPrefixed(e) ? e : "0x" + e }, t.isValidSignature = function(e, t, r, n) { var i = new l("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                o = new l("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16); return 32 === t.length && 32 === r.length && ((27 === e || 28 === e) && (t = new l(t), r = new l(r), !(t.isZero() || t.gt(o) || r.isZero() || r.gt(o)) && (!1 !== n || 1 !== new l(r).cmp(i)))) }, t.baToJSON = function(e) { if (p.isBuffer(e)) return "0x" + e.toString("hex"); if (e instanceof Array) { for (var r = [], n = 0; n < e.length; n++) r.push(t.baToJSON(e[n])); return r } }, t.defineProperties = function(e, r, i) { if (e.raw = [], e._fields = [], e.toJSON = function(r) { if (r) { var n = {}; return e._fields.forEach((function(t) { n[t] = "0x" + e[t].toString("hex") })), n } return t.baToJSON(this.raw) }, e.serialize = function() { return d.encode(e.raw) }, r.forEach((function(r, n) {
                    function i() { return e.raw[n] }

                    function o(i) { "00" !== (i = t.toBuffer(i)).toString("hex") || r.allowZero || (i = p.allocUnsafe(0)), r.allowLess && r.length ? (i = t.stripZeros(i), f(r.length >= i.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === i.length || !r.length || f(r.length === i.length, "The field " + r.name + " must have byte length of " + r.length), e.raw[n] = i }
                    e._fields.push(r.name), Object.defineProperty(e, r.name, { enumerable: !0, configurable: !0, get: i, set: o }), r.default && (e[r.name] = r.default), r.alias && Object.defineProperty(e, r.alias, { enumerable: !1, configurable: !0, set: o, get: i }) })), i)
                if ("string" === typeof i && (i = p.from(t.stripHexPrefix(i), "hex")), p.isBuffer(i) && (i = d.decode(i)), Array.isArray(i)) { if (i.length > e._fields.length) throw new Error("wrong number of fields in data");
                    i.forEach((function(r, n) { e[e._fields[n]] = t.toBuffer(r) })) } else { if ("object" !== ("undefined" === typeof i ? "undefined" : n(i))) throw new Error("invalid data"); var o = Object.keys(i);
                    r.forEach((function(t) {-1 !== o.indexOf(t.name) && (e[t.name] = i[t.name]), -1 !== o.indexOf(t.alias) && (e[t.alias] = i[t.alias]) })) } } }, function(e, t) {
        function r(t) { return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, r(t) }
        e.exports = r }, function(e, t) {
        function r(e) { return e.sort((function(e, t) { return "latest" === e || "earliest" === t ? 1 : "latest" === t || "earliest" === e ? -1 : n(e) - n(t) })) }

        function n(e) { return void 0 === e || null === e ? e : Number.parseInt(e, 16) }

        function i(e) { if (void 0 === e || null === e) return e; var t = e.toString(16); return t.length % 2 && (t = "0" + t), "0x" + t }

        function o() { return Math.floor(16 * Math.random()).toString(16) }
        e.exports = { minBlockRef: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var i = r(t); return i[0] }, maxBlockRef: function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; var i = r(t); return i[i.length - 1] }, sortBlockRefs: r, bnToHex: function(e) { return "0x" + e.toString(16) }, blockRefIsNumber: function(e) { return e && !["earliest", "latest", "pending"].includes(e) }, hexToInt: n, incrementHexInt: function(e) { return void 0 === e || null === e ? e : i(n(e) + 1) }, intToHex: i, unsafeRandomBytes: function(e) { for (var t = "0x", r = 0; r < e; r++) t += o(), t += o(); return t } } }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }), t.baToJSON = t.addHexPrefix = t.toUnsigned = t.fromSigned = t.bufferToHex = t.bufferToInt = t.toBuffer = t.stripZeros = t.unpad = t.setLengthRight = t.setLength = t.setLengthLeft = t.zeros = void 0; var n = r(839),
                i = r(48);
            t.zeros = function(t) { return e.allocUnsafe(t).fill(0) }, t.setLengthLeft = function(e, r, n) { void 0 === n && (n = !1); var i = t.zeros(r); return e = t.toBuffer(e), n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r) }, t.setLength = t.setLengthLeft, t.setLengthRight = function(e, r) { return t.setLength(e, r, !0) }, t.unpad = function(e) { for (var t = (e = n.stripHexPrefix(e))[0]; e.length > 0 && "0" === t.toString();) t = (e = e.slice(1))[0]; return e }, t.stripZeros = t.unpad, t.toBuffer = function(t) { if (!e.isBuffer(t))
                    if (Array.isArray(t)) t = e.from(t);
                    else if ("string" === typeof t) { if (!n.isHexString(t)) throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + t);
                    t = e.from(n.padToEven(n.stripHexPrefix(t)), "hex") } else if ("number" === typeof t) t = n.intToBuffer(t);
                else if (null === t || void 0 === t) t = e.allocUnsafe(0);
                else if (i.isBN(t)) t = t.toArrayLike(e);
                else { if (!t.toArray) throw new Error("invalid type");
                    t = e.from(t.toArray()) } return t }, t.bufferToInt = function(e) { return new i(t.toBuffer(e)).toNumber() }, t.bufferToHex = function(e) { return "0x" + (e = t.toBuffer(e)).toString("hex") }, t.fromSigned = function(e) { return new i(e).fromTwos(256) }, t.toUnsigned = function(t) { return e.from(t.toTwos(256).toArray()) }, t.addHexPrefix = function(e) { return "string" !== typeof e || n.isHexPrefixed(e) ? e : "0x" + e }, t.baToJSON = function(r) { if (e.isBuffer(r)) return "0x" + r.toString("hex"); if (r instanceof Array) { for (var n = [], i = 0; i < r.length; i++) n.push(t.baToJSON(r[i])); return n } } }).call(this, r(785).Buffer) }, , , , , , , , , , , , , , , , , function(e, t, r) { "use strict";
        r.d(t, "a", (function() { return o })), r.d(t, "c", (function() { return a })), r.d(t, "b", (function() { return s })), r.d(t, "d", (function() { return u })), r.d(t, "e", (function() { return c })); var n, i = r(19),
            o = "INTERNAL_ERROR",
            a = "SERVER_ERROR",
            s = [-32700, -32600, -32601, -32602, -32603],
            u = [-32e3, -32099],
            c = (n = {}, Object(i.a)(n, "PARSE_ERROR", { code: -32700, message: "Parse error" }), Object(i.a)(n, "INVALID_REQUEST", { code: -32600, message: "Invalid Request" }), Object(i.a)(n, "METHOD_NOT_FOUND", { code: -32601, message: "Method not found" }), Object(i.a)(n, "INVALID_PARAMS", { code: -32602, message: "Invalid params" }), Object(i.a)(n, o, { code: -32603, message: "Internal error" }), Object(i.a)(n, a, { code: -32e3, message: "Server error" }), n) }, function(e, t, r) { "use strict";
        (function(t) { "undefined" === typeof t || !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = { nextTick: function(e, r, n, i) { if ("function" !== typeof e) throw new TypeError('"callback" argument must be a function'); var o, a, s = arguments.length; switch (s) {
                        case 0:
                        case 1:
                            return t.nextTick(e);
                        case 2:
                            return t.nextTick((function() { e.call(null, r) }));
                        case 3:
                            return t.nextTick((function() { e.call(null, r, n) }));
                        case 4:
                            return t.nextTick((function() { e.call(null, r, n, i) }));
                        default:
                            for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a]; return t.nextTick((function() { e.apply(null, o) })) } } } : e.exports = t }).call(this, r(246)) }, function(e, t, r) { "use strict"; var n = r(48),
            i = r(802),
            o = i.getNAF,
            a = i.getJSF,
            s = i.assert;

        function u(e, t) { this.type = e, this.p = new n(t.p, 16), this.red = t.prime ? n.red(t.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = t.n && new n(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0; var r = this.n && this.p.div(this.n);!r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red)) }

        function c(e, t) { this.curve = e, this.type = t, this.precomputed = null }
        e.exports = u, u.prototype.point = function() { throw new Error("Not implemented") }, u.prototype.validate = function() { throw new Error("Not implemented") }, u.prototype._fixedNafMul = function(e, t) { s(e.precomputed); var r = e._getDoubles(),
                n = o(t, 1, this._bitLength),
                i = (1 << r.step + 1) - (r.step % 2 === 0 ? 2 : 1);
            i /= 3; var a, u, c = []; for (a = 0; a < n.length; a += r.step) { u = 0; for (var f = a + r.step - 1; f >= a; f--) u = (u << 1) + n[f];
                c.push(u) } for (var d = this.jpoint(null, null, null), l = this.jpoint(null, null, null), h = i; h > 0; h--) { for (a = 0; a < c.length; a++)(u = c[a]) === h ? l = l.mixedAdd(r.points[a]) : u === -h && (l = l.mixedAdd(r.points[a].neg()));
                d = d.add(l) } return d.toP() }, u.prototype._wnafMul = function(e, t) { var r = 4,
                n = e._getNAFPoints(r);
            r = n.wnd; for (var i = n.points, a = o(t, r, this._bitLength), u = this.jpoint(null, null, null), c = a.length - 1; c >= 0; c--) { for (var f = 0; c >= 0 && 0 === a[c]; c--) f++; if (c >= 0 && f++, u = u.dblp(f), c < 0) break; var d = a[c];
                s(0 !== d), u = "affine" === e.type ? d > 0 ? u.mixedAdd(i[d - 1 >> 1]) : u.mixedAdd(i[-d - 1 >> 1].neg()) : d > 0 ? u.add(i[d - 1 >> 1]) : u.add(i[-d - 1 >> 1].neg()) } return "affine" === e.type ? u.toP() : u }, u.prototype._wnafMulAdd = function(e, t, r, n, i) { var s, u, c, f = this._wnafT1,
                d = this._wnafT2,
                l = this._wnafT3,
                h = 0; for (s = 0; s < n; s++) { var p = (c = t[s])._getNAFPoints(e);
                f[s] = p.wnd, d[s] = p.points } for (s = n - 1; s >= 1; s -= 2) { var b = s - 1,
                    v = s; if (1 === f[b] && 1 === f[v]) { var g = [t[b], null, null, t[v]];
                    0 === t[b].y.cmp(t[v].y) ? (g[1] = t[b].add(t[v]), g[2] = t[b].toJ().mixedAdd(t[v].neg())) : 0 === t[b].y.cmp(t[v].y.redNeg()) ? (g[1] = t[b].toJ().mixedAdd(t[v]), g[2] = t[b].add(t[v].neg())) : (g[1] = t[b].toJ().mixedAdd(t[v]), g[2] = t[b].toJ().mixedAdd(t[v].neg())); var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        m = a(r[b], r[v]); for (h = Math.max(m[0].length, h), l[b] = new Array(h), l[v] = new Array(h), u = 0; u < h; u++) { var _ = 0 | m[0][u],
                            w = 0 | m[1][u];
                        l[b][u] = y[3 * (_ + 1) + (w + 1)], l[v][u] = 0, d[b] = g } } else l[b] = o(r[b], f[b], this._bitLength), l[v] = o(r[v], f[v], this._bitLength), h = Math.max(l[b].length, h), h = Math.max(l[v].length, h) } var x = this.jpoint(null, null, null),
                k = this._wnafT4; for (s = h; s >= 0; s--) { for (var S = 0; s >= 0;) { var E = !0; for (u = 0; u < n; u++) k[u] = 0 | l[u][s], 0 !== k[u] && (E = !1); if (!E) break;
                    S++, s-- } if (s >= 0 && S++, x = x.dblp(S), s < 0) break; for (u = 0; u < n; u++) { var M = k[u];
                    0 !== M && (M > 0 ? c = d[u][M - 1 >> 1] : M < 0 && (c = d[u][-M - 1 >> 1].neg()), x = "affine" === c.type ? x.mixedAdd(c) : x.add(c)) } } for (s = 0; s < n; s++) d[s] = null; return i ? x : x.toP() }, u.BasePoint = c, c.prototype.eq = function() { throw new Error("Not implemented") }, c.prototype.validate = function() { return this.curve.validate(this) }, u.prototype.decodePoint = function(e, t) { e = i.toArray(e, t); var r = this.p.byteLength(); if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 === 2 * r) return 6 === e[0] ? s(e[e.length - 1] % 2 === 0) : 7 === e[0] && s(e[e.length - 1] % 2 === 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r)); if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]); throw new Error("Unknown point format") }, c.prototype.encodeCompressed = function(e) { return this.encode(e, !0) }, c.prototype._encode = function(e) { var t = this.curve.p.byteLength(),
                r = this.getX().toArray("be", t); return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t)) }, c.prototype.encode = function(e, t) { return i.encode(this._encode(t), e) }, c.prototype.precompute = function(e) { if (this.precomputed) return this; var t = { doubles: null, naf: null, beta: null }; return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this }, c.prototype._hasDoubles = function(e) { if (!this.precomputed) return !1; var t = this.precomputed.doubles; return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step) }, c.prototype._getDoubles = function(e, t) { if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles; for (var r = [this], n = this, i = 0; i < t; i += e) { for (var o = 0; o < e; o++) n = n.dbl();
                r.push(n) } return { step: e, points: r } }, c.prototype._getNAFPoints = function(e) { if (this.precomputed && this.precomputed.naf) return this.precomputed.naf; for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n); return { wnd: e, points: t } }, c.prototype._getBeta = function() { return null }, c.prototype.dblp = function(e) { for (var t = this, r = 0; r < e; r++) t = t.dbl(); return t } }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }), t.getLength = t.decode = t.encode = void 0; var n = r(48);

            function i(e, t) { if ("00" === e.slice(0, 2)) throw new Error("invalid RLP: extra zeros"); return parseInt(e, t) }

            function o(t, r) { if (t < 56) return e.from([t + r]); var n = u(t),
                    i = u(r + 55 + n.length / 2); return e.from(i + n, "hex") }

            function a(t) { var r, n, o, s, u, c = [],
                    f = t[0]; if (f <= 127) return { data: t.slice(0, 1), remainder: t.slice(1) }; if (f <= 183) { if (r = f - 127, o = 128 === f ? e.from([]) : t.slice(1, r), 2 === r && o[0] < 128) throw new Error("invalid rlp encoding: byte must be less 0x80"); return { data: o, remainder: t.slice(r) } } if (f <= 191) { if (n = f - 182, t.length - 1 < n) throw new Error("invalid RLP: not enough bytes for string length"); if ((r = i(t.slice(1, n).toString("hex"), 16)) <= 55) throw new Error("invalid RLP: expected string length to be greater than 55"); if ((o = t.slice(n, r + n)).length < r) throw new Error("invalid RLP: not enough bytes for string"); return { data: o, remainder: t.slice(r + n) } } if (f <= 247) { for (r = f - 191, s = t.slice(1, r); s.length;) u = a(s), c.push(u.data), s = u.remainder; return { data: c, remainder: t.slice(r) } } var d = (n = f - 246) + (r = i(t.slice(1, n).toString("hex"), 16)); if (d > t.length) throw new Error("invalid rlp: total length is larger than the data"); if (0 === (s = t.slice(n, d)).length) throw new Error("invalid rlp, List has a invalid length"); for (; s.length;) u = a(s), c.push(u.data), s = u.remainder; return { data: c, remainder: t.slice(d) } }

            function s(e) { return "0x" === e.slice(0, 2) }

            function u(e) { if (e < 0) throw new Error("Invalid integer as argument, must be unsigned!"); var t = e.toString(16); return t.length % 2 ? "0" + t : t }

            function c(t) { if (!e.isBuffer(t)) { if ("string" === typeof t) return s(t) ? e.from((r = "string" !== typeof(i = t) ? i : s(i) ? i.slice(2) : i).length % 2 ? "0" + r : r, "hex") : e.from(t); if ("number" === typeof t || "bigint" === typeof t) return t ? function(t) { var r = u(t); return e.from(r, "hex") }(t) : e.from([]); if (null === t || void 0 === t) return e.from([]); if (t instanceof Uint8Array) return e.from(t); if (n.isBN(t)) return e.from(t.toArray()); throw new Error("invalid type") } var r, i; return t }
            t.encode = function t(r) { if (Array.isArray(r)) { for (var n = [], i = 0; i < r.length; i++) n.push(t(r[i])); var a = e.concat(n); return e.concat([o(a.length, 192), a]) } var s = c(r); return 1 === s.length && s[0] < 128 ? s : e.concat([o(s.length, 128), s]) }, t.decode = function(t, r) { if (void 0 === r && (r = !1), !t || 0 === t.length) return e.from([]); var n = a(c(t)); if (r) return n; if (0 !== n.remainder.length) throw new Error("invalid remainder"); return n.data }, t.getLength = function(t) { if (!t || 0 === t.length) return e.from([]); var r = c(t),
                    n = r[0]; if (n <= 127) return r.length; if (n <= 183) return n - 127; if (n <= 191) return n - 182; if (n <= 247) return n - 191; var o = n - 246; return o + i(r.slice(1, o).toString("hex"), 16) } }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) { t |= 0; for (var r = Math.max(e.length - t, 0), n = Array(r), i = 0; i < r; i++) n[i] = e[t + i]; return n }, e.exports = t.default }, function(e, t, r) { var n = r(936);

        function i() {}
        e.exports = i, i.prototype.setEngine = function(e) { var t = this;
            t.engine || (t.engine = e, e.on("block", (function(e) { t.currentBlock = e })), e.on("start", (function() { t.start() })), e.on("stop", (function() { t.stop() }))) }, i.prototype.handleRequest = function(e, t, r) { throw new Error("Subproviders should override `handleRequest`.") }, i.prototype.emitPayload = function(e, t) { this.engine.sendAsync(n(e), t) }, i.prototype.stop = function() {}, i.prototype.start = function() {} }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) { var n = r(1290),
            i = r(1291),
            o = r(393),
            a = r(1292);
        e.exports = function(e) { return n(e) || i(e) || o(e) || a() } }, function(e, t, r) { "use strict";
        r.d(t, "c", (function() { return i })), r.d(t, "a", (function() { return o })), r.d(t, "b", (function() { return a })); var n = r(877);

        function i(e) { return n.b.includes(e) }

        function o(e) { return Object.keys(n.e).includes(e) ? n.e[e] : n.e[n.a] }

        function a(e) { var t = Object.values(n.e).find((function(t) { return t.code === e })); return t || n.e[n.a] } }, function(e, t, r) { "use strict";
        r.d(t, "a", (function() { return i })); var n = r(18),
            i = function e() { Object(n.a)(this, e) } }, function(e, t, r) { "use strict";
        r.d(t, "b", (function() { return l })), r.d(t, "a", (function() { return p })), r.d(t, "c", (function() { return v })), r.d(t, "d", (function() { return y })), r.d(t, "e", (function() { return _ })), r.d(t, "f", (function() { return x })); var n = r(3),
            i = r.n(n),
            o = r(13),
            a = r(823),
            s = r(946);

        function u(e) { return e === s.a ? { length: s.b, name: s.a } : { hash: { name: s.f }, name: s.e } }

        function c(e) { return e === s.a ? [s.d, s.c] : [s.k, s.l] }

        function f(e) { return d.apply(this, arguments) }

        function d() { return (d = Object(o.a)(i.a.mark((function e(t) { var r, n = arguments; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = n.length > 1 && void 0 !== n[1] ? n[1] : s.a, e.abrupt("return", a.getSubtleCrypto().importKey("raw", t, u(r), !0, c(r)));
                        case 2:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) }

        function l(e, t, r) { return h.apply(this, arguments) }

        function h() { return (h = Object(o.a)(i.a.mark((function e(t, r, n) { var o, u, c; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return o = a.getSubtleCrypto(), e.next = 3, f(r, s.a);
                        case 3:
                            return u = e.sent, e.next = 6, o.encrypt({ iv: t, name: s.a }, u, n);
                        case 6:
                            return c = e.sent, e.abrupt("return", new Uint8Array(c));
                        case 8:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) }

        function p(e, t, r) { return b.apply(this, arguments) }

        function b() { return (b = Object(o.a)(i.a.mark((function e(t, r, n) { var o, u, c; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return o = a.getSubtleCrypto(), e.next = 3, f(r, s.a);
                        case 3:
                            return u = e.sent, e.next = 6, o.decrypt({ iv: t, name: s.a }, u, n);
                        case 6:
                            return c = e.sent, e.abrupt("return", new Uint8Array(c));
                        case 8:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) }

        function v(e, t) { return g.apply(this, arguments) }

        function g() { return (g = Object(o.a)(i.a.mark((function e(t, r) { var n, o, u; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = a.getSubtleCrypto(), e.next = 3, f(t, s.e);
                        case 3:
                            return o = e.sent, e.next = 6, n.sign({ length: s.g, name: s.e }, o, r);
                        case 6:
                            return u = e.sent, e.abrupt("return", new Uint8Array(u));
                        case 8:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) }

        function y(e, t) { return m.apply(this, arguments) }

        function m() { return (m = Object(o.a)(i.a.mark((function e(t, r) { var n, o, u; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = a.getSubtleCrypto(), e.next = 3, f(t, s.e);
                        case 3:
                            return o = e.sent, e.next = 6, n.sign({ length: s.h, name: s.e }, o, r);
                        case 6:
                            return u = e.sent, e.abrupt("return", new Uint8Array(u));
                        case 8:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) }

        function _(e) { return w.apply(this, arguments) }

        function w() { return (w = Object(o.a)(i.a.mark((function e(t) { var r, n; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = a.getSubtleCrypto(), e.next = 3, r.digest({ name: s.i }, t);
                        case 3:
                            return n = e.sent, e.abrupt("return", new Uint8Array(n));
                        case 5:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) }

        function x(e) { return k.apply(this, arguments) }

        function k() { return (k = Object(o.a)(i.a.mark((function e(t) { var r, n; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = a.getSubtleCrypto(), e.next = 3, r.digest({ name: s.j }, t);
                        case 3:
                            return n = e.sent, e.abrupt("return", new Uint8Array(n));
                        case 5:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) } }, function(e, t, r) { "use strict"; var n = r(1031);
        r.o(n, "isConstantTime") && r.d(t, "isConstantTime", (function() { return n.isConstantTime }));
        r(1032); var i = r(1033);
        r.o(i, "isConstantTime") && r.d(t, "isConstantTime", (function() { return i.isConstantTime })); var o = r(1034);
        r.d(t, "isConstantTime", (function() { return o.a })) }, function(e, t) { var r = {}.toString;
        e.exports = Array.isArray || function(e) { return "[object Array]" == r.call(e) } }, function(e, t) { t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 }, t.isValid = function(e) { return e && "undefined" !== typeof e.bit && e.bit >= 0 && e.bit < 4 }, t.from = function(e, r) { if (t.isValid(e)) return e; try { return function(e) { if ("string" !== typeof e) throw new Error("Param is not a string"); switch (e.toLowerCase()) {
                        case "l":
                        case "low":
                            return t.L;
                        case "m":
                        case "medium":
                            return t.M;
                        case "q":
                        case "quartile":
                            return t.Q;
                        case "h":
                        case "high":
                            return t.H;
                        default:
                            throw new Error("Unknown EC Level: " + e) } }(e) } catch (n) { return r } } }, function(e, t, r) { var n = r(785),
            i = n.Buffer;

        function o(e, t) { for (var r in e) t[r] = e[r] }

        function a(e, t, r) { return i(e, t, r) }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = a), o(i, a), a.from = function(e, t, r) { if ("number" === typeof e) throw new TypeError("Argument must not be a number"); return i(e, t, r) }, a.alloc = function(e, t, r) { if ("number" !== typeof e) throw new TypeError("Argument must be a number"); var n = i(e); return void 0 !== t ? "string" === typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n }, a.allocUnsafe = function(e) { if ("number" !== typeof e) throw new TypeError("Argument must be a number"); return i(e) }, a.allocUnsafeSlow = function(e) { if ("number" !== typeof e) throw new TypeError("Argument must be a number"); return n.SlowBuffer(e) } }, function(e, t, r) { "use strict";
        (function(t, n, i) { var o = r(878);

            function a(e) { var t = this;
                this.next = null, this.entry = null, this.finish = function() {! function(e, t, r) { var n = e.entry;
                        e.entry = null; for (; n;) { var i = n.callback;
                            t.pendingcb--, i(r), n = n.next }
                        t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e }(t, e) } }
            e.exports = y; var s, u = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? n : o.nextTick;
            y.WritableState = g; var c = Object.create(r(855));
            c.inherits = r(490); var f = { deprecate: r(1046) },
                d = r(1044),
                l = r(924).Buffer,
                h = i.Uint8Array || function() {}; var p, b = r(1045);

            function v() {}

            function g(e, t) { s = s || r(826), e = e || {}; var n = t instanceof s;
                this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode); var i = e.highWaterMark,
                    c = e.writableHighWaterMark,
                    f = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : n && (c || 0 === c) ? c : f, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1; var d = !1 === e.decodeStrings;
                this.decodeStrings = !d, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {! function(e, t) { var r = e._writableState,
                            n = r.sync,
                            i = r.writecb; if (function(e) { e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0 }(r), t) ! function(e, t, r, n, i) {--t.pendingcb, r ? (o.nextTick(i, n), o.nextTick(S, e, t), e._writableState.errorEmitted = !0, e.emit("error", n)) : (i(n), e._writableState.errorEmitted = !0, e.emit("error", n), S(e, t)) }(e, r, n, t, i);
                        else { var a = x(r);
                            a || r.corked || r.bufferProcessing || !r.bufferedRequest || w(e, r), n ? u(_, e, r, a, i) : _(e, r, a, i) } }(t, e) }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this) }

            function y(e) { if (s = s || r(826), !p.call(y, this) && !(this instanceof s)) return new y(e);
                this._writableState = new g(e, this), this.writable = !0, e && ("function" === typeof e.write && (this._write = e.write), "function" === typeof e.writev && (this._writev = e.writev), "function" === typeof e.destroy && (this._destroy = e.destroy), "function" === typeof e.final && (this._final = e.final)), d.call(this) }

            function m(e, t, r, n, i, o, a) { t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1 }

            function _(e, t, r, n) { r || function(e, t) { 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")) }(e, t), t.pendingcb--, n(), S(e, t) }

            function w(e, t) { t.bufferProcessing = !0; var r = t.bufferedRequest; if (e._writev && r && r.next) { var n = t.bufferedRequestCount,
                        i = new Array(n),
                        o = t.corkedRequestsFree;
                    o.entry = r; for (var s = 0, u = !0; r;) i[s] = r, r.isBuf || (u = !1), r = r.next, s += 1;
                    i.allBuffers = u, m(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new a(t), t.bufferedRequestCount = 0 } else { for (; r;) { var c = r.chunk,
                            f = r.encoding,
                            d = r.callback; if (m(e, t, !1, t.objectMode ? 1 : c.length, c, f, d), r = r.next, t.bufferedRequestCount--, t.writing) break }
                    null === r && (t.lastBufferedRequest = null) }
                t.bufferedRequest = r, t.bufferProcessing = !1 }

            function x(e) { return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing }

            function k(e, t) { e._final((function(r) { t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), S(e, t) })) }

            function S(e, t) { var r = x(t); return r && (! function(e, t) { t.prefinished || t.finalCalled || ("function" === typeof e._final ? (t.pendingcb++, t.finalCalled = !0, o.nextTick(k, e, t)) : (t.prefinished = !0, e.emit("prefinish"))) }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), r }
            c.inherits(y, d), g.prototype.getBuffer = function() { for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next; return t },
                function() { try { Object.defineProperty(g.prototype, "buffer", { get: f.deprecate((function() { return this.getBuffer() }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") }) } catch (e) {} }(), "function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(y, Symbol.hasInstance, { value: function(e) { return !!p.call(this, e) || this === y && (e && e._writableState instanceof g) } })) : p = function(e) { return e instanceof this }, y.prototype.pipe = function() { this.emit("error", new Error("Cannot pipe, not readable")) }, y.prototype.write = function(e, t, r) { var n, i = this._writableState,
                        a = !1,
                        s = !i.objectMode && (n = e, l.isBuffer(n) || n instanceof h); return s && !l.isBuffer(e) && (e = function(e) { return l.from(e) }(e)), "function" === typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = i.defaultEncoding), "function" !== typeof r && (r = v), i.ended ? function(e, t) { var r = new Error("write after end");
                        e.emit("error", r), o.nextTick(t, r) }(this, r) : (s || function(e, t, r, n) { var i = !0,
                            a = !1; return null === r ? a = new TypeError("May not write null values to stream") : "string" === typeof r || void 0 === r || t.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), o.nextTick(n, a), i = !1), i }(this, i, e, r)) && (i.pendingcb++, a = function(e, t, r, n, i, o) { if (!r) { var a = function(e, t, r) { e.objectMode || !1 === e.decodeStrings || "string" !== typeof t || (t = l.from(t, r)); return t }(t, n, i);
                            n !== a && (r = !0, i = "buffer", n = a) } var s = t.objectMode ? 1 : n.length;
                        t.length += s; var u = t.length < t.highWaterMark;
                        u || (t.needDrain = !0); if (t.writing || t.corked) { var c = t.lastBufferedRequest;
                            t.lastBufferedRequest = { chunk: n, encoding: i, isBuf: r, callback: o, next: null }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1 } else m(e, t, !1, s, n, i, o); return u }(this, i, s, e, t, r)), a }, y.prototype.cork = function() { this._writableState.corked++ }, y.prototype.uncork = function() { var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e)) }, y.prototype.setDefaultEncoding = function(e) { if ("string" === typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e); return this._writableState.defaultEncoding = e, this }, Object.defineProperty(y.prototype, "writableHighWaterMark", { enumerable: !1, get: function() { return this._writableState.highWaterMark } }), y.prototype._write = function(e, t, r) { r(new Error("_write() is not implemented")) }, y.prototype._writev = null, y.prototype.end = function(e, t, r) { var n = this._writableState; "function" === typeof e ? (r = e, e = null, t = null) : "function" === typeof t && (r = t, t = null), null !== e && void 0 !== e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function(e, t, r) { t.ending = !0, S(e, t), r && (t.finished ? o.nextTick(r) : e.once("finish", r));
                        t.ended = !0, e.writable = !1 }(this, n, r) }, Object.defineProperty(y.prototype, "destroyed", { get: function() { return void 0 !== this._writableState && this._writableState.destroyed }, set: function(e) { this._writableState && (this._writableState.destroyed = e) } }), y.prototype.destroy = b.destroy, y.prototype._undestroy = b.undestroy, y.prototype._destroy = function(e, t) { this.end(), t(e) } }).call(this, r(246), r(492).setImmediate, r(147)) }, function(e, t, r) { "use strict"; var n = r(1342),
            i = r(1343);

        function o() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null }
        t.parse = m, t.resolve = function(e, t) { return m(e, !1, !0).resolve(t) }, t.resolveObject = function(e, t) { return e ? m(e, !1, !0).resolveObject(t) : t }, t.format = function(e) { i.isString(e) && (e = m(e)); return e instanceof o ? e.format() : o.prototype.format.call(e) }, t.Url = o; var a = /^([a-z0-9.+-]+:)/i,
            s = /:[0-9]*$/,
            u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
            c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
            f = ["'"].concat(c),
            d = ["%", "/", "?", ";", "#"].concat(f),
            l = ["/", "?", "#"],
            h = /^[+a-z0-9A-Z_-]{0,63}$/,
            p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
            b = { javascript: !0, "javascript:": !0 },
            v = { javascript: !0, "javascript:": !0 },
            g = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
            y = r(1344);

        function m(e, t, r) { if (e && i.isObject(e) && e instanceof o) return e; var n = new o; return n.parse(e, t, r), n }
        o.prototype.parse = function(e, t, r) { if (!i.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e); var o = e.indexOf("?"),
                s = -1 !== o && o < e.indexOf("#") ? "?" : "#",
                c = e.split(s);
            c[0] = c[0].replace(/\\/g, "/"); var m = e = c.join(s); if (m = m.trim(), !r && 1 === e.split("#").length) { var _ = u.exec(m); if (_) return this.path = m, this.href = m, this.pathname = _[1], _[2] ? (this.search = _[2], this.query = t ? y.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this } var w = a.exec(m); if (w) { var x = (w = w[0]).toLowerCase();
                this.protocol = x, m = m.substr(w.length) } if (r || w || m.match(/^\/\/[^@\/]+@[^@\/]+/)) { var k = "//" === m.substr(0, 2);!k || w && v[w] || (m = m.substr(2), this.slashes = !0) } if (!v[w] && (k || w && !g[w])) { for (var S, E, M = -1, A = 0; A < l.length; A++) {-1 !== (R = m.indexOf(l[A])) && (-1 === M || R < M) && (M = R) } - 1 !== (E = -1 === M ? m.lastIndexOf("@") : m.lastIndexOf("@", M)) && (S = m.slice(0, E), m = m.slice(E + 1), this.auth = decodeURIComponent(S)), M = -1; for (A = 0; A < d.length; A++) { var R; - 1 !== (R = m.indexOf(d[A])) && (-1 === M || R < M) && (M = R) } - 1 === M && (M = m.length), this.host = m.slice(0, M), m = m.slice(M), this.parseHost(), this.hostname = this.hostname || ""; var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1]; if (!T)
                    for (var C = this.hostname.split(/\./), O = (A = 0, C.length); A < O; A++) { var P = C[A]; if (P && !P.match(h)) { for (var I = "", B = 0, L = P.length; B < L; B++) P.charCodeAt(B) > 127 ? I += "x" : I += P[B]; if (!I.match(h)) { var j = C.slice(0, A),
                                    N = C.slice(A + 1),
                                    q = P.match(p);
                                q && (j.push(q[1]), N.unshift(q[2])), N.length && (m = "/" + N.join(".") + m), this.hostname = j.join("."); break } } }
                this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = n.toASCII(this.hostname)); var U = this.port ? ":" + this.port : "",
                    D = this.hostname || "";
                this.host = D + U, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== m[0] && (m = "/" + m)) } if (!b[x])
                for (A = 0, O = f.length; A < O; A++) { var H = f[A]; if (-1 !== m.indexOf(H)) { var z = encodeURIComponent(H);
                        z === H && (z = escape(H)), m = m.split(H).join(z) } }
            var F = m.indexOf("#"); - 1 !== F && (this.hash = m.substr(F), m = m.slice(0, F)); var K = m.indexOf("?"); if (-1 !== K ? (this.search = m.substr(K), this.query = m.substr(K + 1), t && (this.query = y.parse(this.query)), m = m.slice(0, K)) : t && (this.search = "", this.query = {}), m && (this.pathname = m), g[x] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) { U = this.pathname || ""; var W = this.search || "";
                this.path = U + W } return this.href = this.format(), this }, o.prototype.format = function() { var e = this.auth || "";
            e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@"); var t = this.protocol || "",
                r = this.pathname || "",
                n = this.hash || "",
                o = !1,
                a = "";
            this.host ? o = e + this.host : this.hostname && (o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (a = y.stringify(this.query)); var s = this.search || a && "?" + a || ""; return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || g[t]) && !1 !== o ? (o = "//" + (o || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""), n && "#" !== n.charAt(0) && (n = "#" + n), s && "?" !== s.charAt(0) && (s = "?" + s), t + o + (r = r.replace(/[?#]/g, (function(e) { return encodeURIComponent(e) }))) + (s = s.replace("#", "%23")) + n }, o.prototype.resolve = function(e) { return this.resolveObject(m(e, !1, !0)).format() }, o.prototype.resolveObject = function(e) { if (i.isString(e)) { var t = new o;
                t.parse(e, !1, !0), e = t } for (var r = new o, n = Object.keys(this), a = 0; a < n.length; a++) { var s = n[a];
                r[s] = this[s] } if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r; if (e.slashes && !e.protocol) { for (var u = Object.keys(e), c = 0; c < u.length; c++) { var f = u[c]; "protocol" !== f && (r[f] = e[f]) } return g[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r } if (e.protocol && e.protocol !== r.protocol) { if (!g[e.protocol]) { for (var d = Object.keys(e), l = 0; l < d.length; l++) { var h = d[l];
                        r[h] = e[h] } return r.href = r.format(), r } if (r.protocol = e.protocol, e.host || v[e.protocol]) r.pathname = e.pathname;
                else { for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), r.pathname = p.join("/") } if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) { var b = r.pathname || "",
                        y = r.search || "";
                    r.path = b + y } return r.slashes = r.slashes || e.slashes, r.href = r.format(), r } var m = r.pathname && "/" === r.pathname.charAt(0),
                _ = e.host || e.pathname && "/" === e.pathname.charAt(0),
                w = _ || m || r.host && e.pathname,
                x = w,
                k = r.pathname && r.pathname.split("/") || [],
                S = (p = e.pathname && e.pathname.split("/") || [], r.protocol && !g[r.protocol]); if (S && (r.hostname = "", r.port = null, r.host && ("" === k[0] ? k[0] = r.host : k.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), w = w && ("" === p[0] || "" === k[0])), _) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, k = p;
            else if (p.length) k || (k = []), k.pop(), k = k.concat(p), r.search = e.search, r.query = e.query;
            else if (!i.isNullOrUndefined(e.search)) { if (S) r.hostname = r.host = k.shift(), (T = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = T.shift(), r.host = r.hostname = T.shift()); return r.search = e.search, r.query = e.query, i.isNull(r.pathname) && i.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r } if (!k.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r; for (var E = k.slice(-1)[0], M = (r.host || e.host || k.length > 1) && ("." === E || ".." === E) || "" === E, A = 0, R = k.length; R >= 0; R--) "." === (E = k[R]) ? k.splice(R, 1) : ".." === E ? (k.splice(R, 1), A++) : A && (k.splice(R, 1), A--); if (!w && !x)
                for (; A--; A) k.unshift("..");!w || "" === k[0] || k[0] && "/" === k[0].charAt(0) || k.unshift(""), M && "/" !== k.join("/").substr(-1) && k.push(""); var T, C = "" === k[0] || k[0] && "/" === k[0].charAt(0);
            S && (r.hostname = r.host = C ? "" : k.length ? k.shift() : "", (T = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = T.shift(), r.host = r.hostname = T.shift())); return (w = w || r.host && k.length) && !C && k.unshift(""), k.length ? r.pathname = k.join("/") : (r.pathname = null, r.path = null), i.isNull(r.pathname) && i.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r }, o.prototype.parseHost = function() { var e = this.host,
                t = s.exec(e);
            t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e) } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = function() {
            function e() { this.listeners = {} } return e.prototype.addEventListener = function(e, t) { e = e.toLowerCase(), this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(t.handleEvent || t) }, e.prototype.removeEventListener = function(e, t) { if (e = e.toLowerCase(), this.listeners[e]) { var r = this.listeners[e].indexOf(t.handleEvent || t);
                    r < 0 || this.listeners[e].splice(r, 1) } }, e.prototype.dispatchEvent = function(e) { var t = e.type.toLowerCase(); if (e.target = this, this.listeners[t])
                    for (var r = 0, n = this.listeners[t]; r < n.length; r++) { n[r].call(this, e) }
                var i = this["on" + t]; return i && i.call(this, e), !0 }, e }();
        t.XMLHttpRequestEventTarget = n }, function(e, t) {
        function r(t, n) { return e.exports = r = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, r(t, n) }
        e.exports = r }, function(e, t, r) { e.exports = i; var n = r(372).EventEmitter;

        function i() { n.call(this) }
        r(490)(i, n), i.Readable = r(854), i.Writable = r(1360), i.Duplex = r(1361), i.Transform = r(1362), i.PassThrough = r(1363), i.Stream = i, i.prototype.pipe = function(e, t) { var r = this;

            function i(t) { e.writable && !1 === e.write(t) && r.pause && r.pause() }

            function o() { r.readable && r.resume && r.resume() }
            r.on("data", i), e.on("drain", o), e._isStdio || t && !1 === t.end || (r.on("end", s), r.on("close", u)); var a = !1;

            function s() { a || (a = !0, e.end()) }

            function u() { a || (a = !0, "function" === typeof e.destroy && e.destroy()) }

            function c(e) { if (f(), 0 === n.listenerCount(this, "error")) throw e }

            function f() { r.removeListener("data", i), e.removeListener("drain", o), r.removeListener("end", s), r.removeListener("close", u), r.removeListener("error", c), e.removeListener("error", c), r.removeListener("end", f), r.removeListener("close", f), e.removeListener("close", f) } return r.on("error", c), e.on("error", c), r.on("end", f), r.on("close", f), e.on("close", f), e.emit("pipe", r), e } }, function(e, t, r) { "use strict"; var n = t;
        n.version = r(1370).version, n.utils = r(802), n.rand = r(1054), n.curve = r(1055), n.curves = r(931), n.ec = r(1376), n.eddsa = r(1380) }, function(e, t, r) { "use strict"; var n, i = t,
            o = r(101),
            a = r(1055),
            s = r(802).assert;

        function u(e) { "short" === e.type ? this.curve = new a.short(e) : "edwards" === e.type ? this.curve = new a.edwards(e) : this.curve = new a.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O") }

        function c(e, t) { Object.defineProperty(i, e, { configurable: !0, enumerable: !0, get: function() { var r = new u(t); return Object.defineProperty(i, e, { configurable: !0, enumerable: !0, value: r }), r } }) }
        i.PresetCurve = u, c("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: o.sha256, gRed: !1, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), c("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: o.sha256, gRed: !1, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), c("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: o.sha256, gRed: !1, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), c("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: o.sha384, gRed: !1, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), c("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: o.sha512, gRed: !1, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), c("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: o.sha256, gRed: !1, g: ["9"] }), c("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: o.sha256, gRed: !1, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] }); try { n = r(1375) } catch (f) { n = void 0 }
        c("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: o.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: !1, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n] }) }, function(e, t, r) { "use strict";
        (function(t) { var n = r(107);

            function i(e, t) { if (e === t) return 0; for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) { r = e[i], n = t[i]; break }
                return r < n ? -1 : n < r ? 1 : 0 }

            function o(e) { return t.Buffer && "function" === typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer) } var a = r(373),
                s = Object.prototype.hasOwnProperty,
                u = Array.prototype.slice,
                c = "foo" === function() {}.name;

            function f(e) { return Object.prototype.toString.call(e) }

            function d(e) { return !o(e) && ("function" === typeof t.ArrayBuffer && ("function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer)))) } var l = e.exports = y,
                h = /\s*function\s+([^\(\s]*)\s*/;

            function p(e) { if (a.isFunction(e)) { if (c) return e.name; var t = e.toString().match(h); return t && t[1] } }

            function b(e, t) { return "string" === typeof e ? e.length < t ? e : e.slice(0, t) : e }

            function v(e) { if (c || !a.isFunction(e)) return a.inspect(e); var t = p(e); return "[Function" + (t ? ": " + t : "") + "]" }

            function g(e, t, r, n, i) { throw new l.AssertionError({ message: r, actual: e, expected: t, operator: n, stackStartFunction: i }) }

            function y(e, t) { e || g(e, !0, t, "==", l.ok) }

            function m(e, t, r, n) { if (e === t) return !0; if (o(e) && o(t)) return 0 === i(e, t); if (a.isDate(e) && a.isDate(t)) return e.getTime() === t.getTime(); if (a.isRegExp(e) && a.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase; if (null !== e && "object" === typeof e || null !== t && "object" === typeof t) { if (d(e) && d(t) && f(e) === f(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer)); if (o(e) !== o(t)) return !1; var s = (n = n || { actual: [], expected: [] }).actual.indexOf(e); return -1 !== s && s === n.expected.indexOf(t) || (n.actual.push(e), n.expected.push(t), function(e, t, r, n) { if (null === e || void 0 === e || null === t || void 0 === t) return !1; if (a.isPrimitive(e) || a.isPrimitive(t)) return e === t; if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1; var i = _(e),
                            o = _(t); if (i && !o || !i && o) return !1; if (i) return m(e = u.call(e), t = u.call(t), r); var s, c, f = k(e),
                            d = k(t); if (f.length !== d.length) return !1; for (f.sort(), d.sort(), c = f.length - 1; c >= 0; c--)
                            if (f[c] !== d[c]) return !1;
                        for (c = f.length - 1; c >= 0; c--)
                            if (!m(e[s = f[c]], t[s], r, n)) return !1;
                        return !0 }(e, t, r, n)) } return r ? e === t : e == t }

            function _(e) { return "[object Arguments]" == Object.prototype.toString.call(e) }

            function w(e, t) { if (!e || !t) return !1; if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e); try { if (e instanceof t) return !0 } catch (r) {} return !Error.isPrototypeOf(t) && !0 === t.call({}, e) }

            function x(e, t, r, n) { var i; if ("function" !== typeof t) throw new TypeError('"block" argument must be a function'); "string" === typeof r && (n = r, r = null), i = function(e) { var t; try { e() } catch (r) { t = r } return t }(t), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), e && !i && g(i, r, "Missing expected exception" + n); var o = "string" === typeof n,
                    s = !e && i && !r; if ((!e && a.isError(i) && o && w(i, r) || s) && g(i, r, "Got unwanted exception" + n), e && i && r && !w(i, r) || !e && i) throw i }
            l.AssertionError = function(e) { this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = function(e) { return b(v(e.actual), 128) + " " + e.operator + " " + b(v(e.expected), 128) }(this), this.generatedMessage = !0); var t = e.stackStartFunction || g; if (Error.captureStackTrace) Error.captureStackTrace(this, t);
                else { var r = new Error; if (r.stack) { var n = r.stack,
                            i = p(t),
                            o = n.indexOf("\n" + i); if (o >= 0) { var a = n.indexOf("\n", o + 1);
                            n = n.substring(a + 1) }
                        this.stack = n } } }, a.inherits(l.AssertionError, Error), l.fail = g, l.ok = y, l.equal = function(e, t, r) { e != t && g(e, t, r, "==", l.equal) }, l.notEqual = function(e, t, r) { e == t && g(e, t, r, "!=", l.notEqual) }, l.deepEqual = function(e, t, r) { m(e, t, !1) || g(e, t, r, "deepEqual", l.deepEqual) }, l.deepStrictEqual = function(e, t, r) { m(e, t, !0) || g(e, t, r, "deepStrictEqual", l.deepStrictEqual) }, l.notDeepEqual = function(e, t, r) { m(e, t, !1) && g(e, t, r, "notDeepEqual", l.notDeepEqual) }, l.notDeepStrictEqual = function e(t, r, n) { m(t, r, !0) && g(t, r, n, "notDeepStrictEqual", e) }, l.strictEqual = function(e, t, r) { e !== t && g(e, t, r, "===", l.strictEqual) }, l.notStrictEqual = function(e, t, r) { e === t && g(e, t, r, "!==", l.notStrictEqual) }, l.throws = function(e, t, r) { x(!0, e, t, r) }, l.doesNotThrow = function(e, t, r) { x(!1, e, t, r) }, l.ifError = function(e) { if (e) throw e }, l.strict = n((function e(t, r) { t || g(t, !0, r, "==", e) }), l, { equal: l.strictEqual, deepEqual: l.deepStrictEqual, notEqual: l.notStrictEqual, notDeepEqual: l.notDeepStrictEqual }), l.strict.strict = l.strict; var k = Object.keys || function(e) { var t = []; for (var r in e) s.call(e, r) && t.push(r); return t } }).call(this, r(147)) }, function(e, t, r) { "use strict"; var n = r(836).codes.ERR_STREAM_PREMATURE_CLOSE;

        function i() {}
        e.exports = function e(t, r, o) { if ("function" === typeof r) return e(t, null, r);
            r || (r = {}), o = function(e) { var t = !1; return function() { if (!t) { t = !0; for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        e.apply(this, n) } } }(o || i); var a = r.readable || !1 !== r.readable && t.readable,
                s = r.writable || !1 !== r.writable && t.writable,
                u = function() { t.writable || f() },
                c = t._writableState && t._writableState.finished,
                f = function() { s = !1, c = !0, a || o.call(t) },
                d = t._readableState && t._readableState.endEmitted,
                l = function() { a = !1, d = !0, s || o.call(t) },
                h = function(e) { o.call(t, e) },
                p = function() { var e; return a && !d ? (t._readableState && t._readableState.ended || (e = new n), o.call(t, e)) : s && !c ? (t._writableState && t._writableState.ended || (e = new n), o.call(t, e)) : void 0 },
                b = function() { t.req.on("finish", f) }; return ! function(e) { return e.setHeader && "function" === typeof e.abort }(t) ? s && !t._writableState && (t.on("end", u), t.on("close", u)) : (t.on("complete", f), t.on("abort", p), t.req ? b() : t.on("request", b)), t.on("end", l), t.on("finish", f), !1 !== r.error && t.on("error", h), t.on("close", p),
                function() { t.removeListener("complete", f), t.removeListener("abort", p), t.removeListener("request", b), t.req && t.req.removeListener("finish", f), t.removeListener("end", u), t.removeListener("close", u), t.removeListener("finish", f), t.removeListener("end", l), t.removeListener("error", h), t.removeListener("close", p) } } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { return function() { if (null !== e) { var t = e;
                    e = null, t.apply(this, arguments) } } }, e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { return function() { if (null === e) throw new Error("Callback was already called."); var t = e;
                e = null, t.apply(this, arguments) } }, e.exports = t.default }, function(e, t, r) { var n = r(1425),
            i = r(832);
        e.exports = function(e) { return i({ id: n(), jsonrpc: "2.0", params: [] }, e) } }, function(e, t, r) { var n = r(247),
            i = r(249),
            o = r(794),
            a = r(795),
            s = function(e) { "use strict";
                o(r, e); var t = a(r);

                function r(e) { var i; if (n(this, r), i = t.call(this), !e) throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified"); return i._constructorFn = e, i } return i(r, [{ key: "setEngine", value: function(e) { if (this.middleware) throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice"); var t = e._blockTracker,
                            r = this._constructorFn({ engine: e, provider: e, blockTracker: t }); if (!r) throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware"); if ("function" !== typeof r) throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");
                        this.middleware = r } }, { key: "handleRequest", value: function(e, t, r) { var n = { id: e.id };
                        this.middleware(e, n, (function(e) { t((function(t, r, i) { t ? (delete n.result, n.error = { message: t.message || t }) : n.result = r, e ? e(i) : i() })) }), (function(e) { if (e) return r(e);
                            r(null, n.result) })) } }]), r }(r(882));
        e.exports = s }, function(e, t, r) { "use strict"; var n = r(247),
            i = r(249),
            o = r(794),
            a = r(795);

        function s(e, t, r) { try { Reflect.apply(e, t, r) } catch (n) { setTimeout((function() { throw n })) } }

        function u(e) { for (var t = e.length, r = new Array(t), n = 0; n < t; n += 1) r[n] = e[n]; return r }
        Object.defineProperty(t, "__esModule", { value: !0 }); var c = function(e) { o(r, e); var t = a(r);

            function r() { return n(this, r), t.apply(this, arguments) } return i(r, [{ key: "emit", value: function(e) { var t = "error" === e,
                        r = this._events; if (void 0 !== r) t = t && void 0 === r.error;
                    else if (!t) return !1; for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o]; if (t) { var a; if (i.length > 0 && (a = i[0]), a instanceof Error) throw a; var c = new Error("Unhandled error.".concat(a ? " (".concat(a.message, ")") : "")); throw c.context = a, c } var f = r[e]; if (void 0 === f) return !1; if ("function" === typeof f) s(f, this, i);
                    else
                        for (var d = f.length, l = u(f), h = 0; h < d; h += 1) s(l[h], this, i); return !0 } }]), r }(r(372).EventEmitter);
        t.default = c }, function(e, t, r) { "use strict"; var n = r(247),
            i = r(249),
            o = r(794),
            a = r(795),
            s = r(1436);
        Object.defineProperty(t, "__esModule", { value: !0 }), t.EthereumProviderError = t.EthereumRpcError = void 0; var u = r(1439),
            c = function(e) { o(r, e); var t = a(r);

                function r(e, i, o) { var a; if (n(this, r), !Number.isInteger(e)) throw new Error('"code" must be an integer.'); if (!i || "string" !== typeof i) throw new Error('"message" must be a nonempty string.'); return (a = t.call(this, i)).code = e, void 0 !== o && (a.data = o), a } return i(r, [{ key: "serialize", value: function() { var e = { code: this.code, message: this.message }; return void 0 !== this.data && (e.data = this.data), this.stack && (e.stack = this.stack), e } }, { key: "toString", value: function() { return u.default(this.serialize(), d, 2) } }]), r }(s(Error));
        t.EthereumRpcError = c; var f = function(e) { o(r, e); var t = a(r);

            function r(e, i, o) { if (n(this, r), ! function(e) { return Number.isInteger(e) && e >= 1e3 && e <= 4999 }(e)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999'); return t.call(this, e, i, o) } return r }(c);

        function d(e, t) { if ("[Circular]" !== t) return t }
        t.EthereumProviderError = f }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.errorValues = t.errorCodes = void 0, t.errorCodes = { rpc: { invalidInput: -32e3, resourceNotFound: -32001, resourceUnavailable: -32002, transactionRejected: -32003, methodNotSupported: -32004, limitExceeded: -32005, parse: -32700, invalidRequest: -32600, methodNotFound: -32601, invalidParams: -32602, internal: -32603 }, provider: { userRejectedRequest: 4001, unauthorized: 4100, unsupportedMethod: 4200, disconnected: 4900, chainDisconnected: 4901 } }, t.errorValues = { "-32700": { standard: "JSON RPC 2.0", message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text." }, "-32600": { standard: "JSON RPC 2.0", message: "The JSON sent is not a valid Request object." }, "-32601": { standard: "JSON RPC 2.0", message: "The method does not exist / is not available." }, "-32602": { standard: "JSON RPC 2.0", message: "Invalid method parameter(s)." }, "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." }, "-32000": { standard: "EIP-1474", message: "Invalid input." }, "-32001": { standard: "EIP-1474", message: "Resource not found." }, "-32002": { standard: "EIP-1474", message: "Resource unavailable." }, "-32003": { standard: "EIP-1474", message: "Transaction rejected." }, "-32004": { standard: "EIP-1474", message: "Method not supported." }, "-32005": { standard: "EIP-1474", message: "Request limit exceeded." }, 4001: { standard: "EIP-1193", message: "User rejected the request." }, 4100: { standard: "EIP-1193", message: "The requested account and/or method has not been authorized by the user." }, 4200: { standard: "EIP-1193", message: "The requested method is not supported by this Ethereum provider." }, 4900: { standard: "EIP-1193", message: "The provider is disconnected from all chains." }, 4901: { standard: "EIP-1193", message: "The provider is disconnected from the specified chain." } } }, function(e, t, r) { var n = r(3),
            i = r(798),
            o = r(247),
            a = r(249),
            s = r(794),
            u = r(795),
            c = function(e) { "use strict";
                s(r, e); var t = u(r);

                function r() { var e; return o(this, r), (e = t.call(this)).updates = [], e } return a(r, [{ key: "initialize", value: function() { var e = i(n.mark((function e() { return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                    case "end":
                                        return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }() }, { key: "update", value: function() { var e = i(n.mark((function e() { return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        throw new Error("BaseFilter - no update method specified");
                                    case 1:
                                    case "end":
                                        return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }() }, { key: "addResults", value: function(e) { var t = this;
                        this.updates = this.updates.concat(e), e.forEach((function(e) { return t.emit("update", e) })) } }, { key: "addInitialResults", value: function(e) {} }, { key: "getChangesAndClear", value: function() { var e = this.updates; return this.updates = [], e } }]), r }(r(938).default);
        e.exports = c }, function(e, t, r) { var n = r(3),
            i = r(798);

        function o() { return (o = i(n.mark((function e(t) { var r, i, o, c, f, d, l; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = t.provider, i = t.fromBlock, o = t.toBlock, i || (i = o), c = a(i), f = a(o), d = Array(f - c + 1).fill().map((function(e, t) { return c + t })).map(s), e.next = 8, Promise.all(d.map((function(e) { return u(r, "eth_getBlockByNumber", [e, !1]) })));
                        case 8:
                            return l = e.sent, e.abrupt("return", l);
                        case 10:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) }

        function a(e) { return void 0 === e || null === e ? e : Number.parseInt(e, 16) }

        function s(e) { return void 0 === e || null === e ? e : "0x" + e.toString(16) }

        function u(e, t, r) { return new Promise((function(n, i) { e.sendAsync({ id: 1, jsonrpc: "2.0", method: t, params: r }, (function(e, t) { if (e) return i(e);
                    n(t.result) })) })) }
        e.exports = function(e) { return o.apply(this, arguments) } }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }), t.ecdhUnsafe = t.ecdh = t.recover = t.verify = t.sign = t.signatureImportLax = t.signatureImport = t.signatureExport = t.signatureNormalize = t.publicKeyCombine = t.publicKeyTweakMul = t.publicKeyTweakAdd = t.publicKeyVerify = t.publicKeyConvert = t.publicKeyCreate = t.privateKeyTweakMul = t.privateKeyTweakAdd = t.privateKeyModInverse = t.privateKeyNegate = t.privateKeyImport = t.privateKeyExport = t.privateKeyVerify = void 0; var n = r(1051),
                i = r(1456),
                o = r(1457);
            t.privateKeyVerify = function(e) { return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e)) }, t.privateKeyExport = function(e, t) { if (32 !== e.length) throw new RangeError("private key length is invalid"); var r = i.privateKeyExport(e, t); return o.privateKeyExport(e, r, t) }, t.privateKeyImport = function(e) { if (null !== (e = o.privateKeyImport(e)) && 32 === e.length && t.privateKeyVerify(e)) return e; throw new Error("couldn't import from DER format") }, t.privateKeyNegate = function(t) { return e.from(n.privateKeyNegate(Uint8Array.from(t))) }, t.privateKeyModInverse = function(t) { if (32 !== t.length) throw new Error("private key length is invalid"); return e.from(i.privateKeyModInverse(Uint8Array.from(t))) }, t.privateKeyTweakAdd = function(t, r) { return e.from(n.privateKeyTweakAdd(Uint8Array.from(t), r)) }, t.privateKeyTweakMul = function(t, r) { return e.from(n.privateKeyTweakMul(Uint8Array.from(t), Uint8Array.from(r))) }, t.publicKeyCreate = function(t, r) { return e.from(n.publicKeyCreate(Uint8Array.from(t), r)) }, t.publicKeyConvert = function(t, r) { return e.from(n.publicKeyConvert(Uint8Array.from(t), r)) }, t.publicKeyVerify = function(e) { return (33 === e.length || 65 === e.length) && n.publicKeyVerify(Uint8Array.from(e)) }, t.publicKeyTweakAdd = function(t, r, i) { return e.from(n.publicKeyTweakAdd(Uint8Array.from(t), Uint8Array.from(r), i)) }, t.publicKeyTweakMul = function(t, r, i) { return e.from(n.publicKeyTweakMul(Uint8Array.from(t), Uint8Array.from(r), i)) }, t.publicKeyCombine = function(t, r) { var i = []; return t.forEach((function(e) { i.push(Uint8Array.from(e)) })), e.from(n.publicKeyCombine(i, r)) }, t.signatureNormalize = function(t) { return e.from(n.signatureNormalize(Uint8Array.from(t))) }, t.signatureExport = function(t) { return e.from(n.signatureExport(Uint8Array.from(t))) }, t.signatureImport = function(t) { return e.from(n.signatureImport(Uint8Array.from(t))) }, t.signatureImportLax = function(e) { if (0 === e.length) throw new RangeError("signature length is invalid"); var t = o.signatureImportLax(e); if (null === t) throw new Error("couldn't parse DER signature"); return i.signatureImport(t) }, t.sign = function(t, r, i) { if (null === i) throw new TypeError("options should be an Object"); var o = void 0; if (i) { if (o = {}, null === i.data) throw new TypeError("options.data should be a Buffer"); if (i.data) { if (32 != i.data.length) throw new RangeError("options.data length is invalid");
                        o.data = new Uint8Array(i.data) } if (null === i.noncefn) throw new TypeError("options.noncefn should be a Function");
                    i.noncefn && (o.noncefn = function(t, r, n, o, a) { var s = null != n ? e.from(n) : null,
                            u = null != o ? e.from(o) : null,
                            c = e.from(""); return i.noncefn && (c = i.noncefn(e.from(t), e.from(r), s, u, a)), new Uint8Array(c) }) } var a = n.ecdsaSign(Uint8Array.from(t), Uint8Array.from(r), o); return { signature: e.from(a.signature), recovery: a.recid } }, t.verify = function(e, t, r) { return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r) }, t.recover = function(t, r, i, o) { return e.from(n.ecdsaRecover(Uint8Array.from(r), i, Uint8Array.from(t), o)) }, t.ecdh = function(t, r) { return e.from(n.ecdh(Uint8Array.from(t), Uint8Array.from(r), {})) }, t.ecdhUnsafe = function(t, r, n) { if (33 !== t.length && 65 !== t.length) throw new RangeError("public key length is invalid"); if (32 !== r.length) throw new RangeError("private key length is invalid"); return e.from(i.ecdhUnsafe(Uint8Array.from(t), Uint8Array.from(r), n)) } }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }), t.rlphash = t.ripemd160 = t.sha256 = t.keccak256 = t.keccak = void 0; var n = r(1048),
                i = n.keccak224,
                o = n.keccak384,
                a = n.keccak256,
                s = n.keccak512,
                u = r(1056),
                c = r(839),
                f = r(880),
                d = r(860);
            t.keccak = function(t, r) { switch (void 0 === r && (r = 256), t = "string" !== typeof t || c.isHexString(t) ? d.toBuffer(t) : e.from(t, "utf8"), r || (r = 256), r) {
                    case 224:
                        return i(t);
                    case 256:
                        return a(t);
                    case 384:
                        return o(t);
                    case 512:
                        return s(t);
                    default:
                        throw new Error("Invald algorithm: keccak" + r) } }, t.keccak256 = function(e) { return t.keccak(e) }, t.sha256 = function(e) { return e = d.toBuffer(e), u("sha256").update(e).digest() }, t.ripemd160 = function(e, t) { e = d.toBuffer(e); var r = u("rmd160").update(e).digest(); return !0 === t ? d.setLength(r, 32) : r }, t.rlphash = function(e) { return t.keccak(f.encode(e)) } }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict";
        r.r(t), r.d(t, "detectEnv", (function() { return a })), r.d(t, "detectOS", (function() { return s })), r.d(t, "isAndroid", (function() { return u })), r.d(t, "isIOS", (function() { return c })), r.d(t, "isMobile", (function() { return f })), r.d(t, "isNode", (function() { return d })), r.d(t, "isBrowser", (function() { return l })), r.d(t, "getFromWindow", (function() { return h })), r.d(t, "getFromWindowOrThrow", (function() { return p })), r.d(t, "getDocumentOrThrow", (function() { return b })), r.d(t, "getDocument", (function() { return v })), r.d(t, "getNavigatorOrThrow", (function() { return g })), r.d(t, "getNavigator", (function() { return y })), r.d(t, "getLocationOrThrow", (function() { return m })), r.d(t, "getLocation", (function() { return _ })), r.d(t, "getCryptoOrThrow", (function() { return w })), r.d(t, "getCrypto", (function() { return x })), r.d(t, "getLocalStorageOrThrow", (function() { return k })), r.d(t, "getLocalStorage", (function() { return S })), r.d(t, "getClientMeta", (function() { return E })), r.d(t, "safeJsonParse", (function() { return M })), r.d(t, "safeJsonStringify", (function() { return A })), r.d(t, "setLocal", (function() { return R })), r.d(t, "getLocal", (function() { return T })), r.d(t, "removeLocal", (function() { return C })), r.d(t, "mobileLinkChoiceKey", (function() { return O })), r.d(t, "formatIOSMobile", (function() { return P })), r.d(t, "saveMobileLinkInfo", (function() { return I })), r.d(t, "getMobileRegistryEntry", (function() { return B })), r.d(t, "getMobileLinkRegistry", (function() { return L })), r.d(t, "getWalletRegistryUrl", (function() { return N })), r.d(t, "getDappRegistryUrl", (function() { return q })), r.d(t, "getAppLogoUrl", (function() { return U })), r.d(t, "formatMobileRegistryEntry", (function() { return D })), r.d(t, "formatMobileRegistry", (function() { return H })); var n = r(1283),
            i = r(1016),
            o = r(1284);

        function a(e) { return Object(o.a)(e) }

        function s() { var e = a(); return e && e.os ? e.os : void 0 }

        function u() { var e = s(); return !!e && e.toLowerCase().includes("android") }

        function c() { var e = s(); return !!e && (e.toLowerCase().includes("ios") || e.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1) }

        function f() { return !!s() && (u() || c()) }

        function d() { var e = a(); return !(!e || !e.name) && "node" === e.name.toLowerCase() }

        function l() { return !d() && !!y() } var h = i.getFromWindow,
            p = i.getFromWindowOrThrow,
            b = i.getDocumentOrThrow,
            v = i.getDocument,
            g = i.getNavigatorOrThrow,
            y = i.getNavigator,
            m = i.getLocationOrThrow,
            _ = i.getLocation,
            w = i.getCryptoOrThrow,
            x = i.getCrypto,
            k = i.getLocalStorageOrThrow,
            S = i.getLocalStorage;

        function E() { return n.getWindowMetadata() } var M = function(e) { if ("string" !== typeof e) throw new Error("Cannot safe json parse value of type ".concat(typeof e)); try { return JSON.parse(e) } catch (t) { return e } },
            A = function(e) { return "string" === typeof e ? e : JSON.stringify(e) };

        function R(e, t) { var r = A(t),
                n = S();
            n && n.setItem(e, r) }

        function T(e) { var t = null,
                r = S(); return r && (t = r.getItem(e)), t ? M(t) : t }

        function C(e) { var t = S();
            t && t.removeItem(e) } var O = "WALLETCONNECT_DEEPLINK_CHOICE";

        function P(e, t) { var r = encodeURIComponent(e); return t.universalLink ? "".concat(t.universalLink, "/wc?uri=").concat(r) : t.deepLink ? "".concat(t.deepLink).concat(t.deepLink.endsWith(":") ? "//" : "/", "wc?uri=").concat(r) : "" }

        function I(e) { var t = e.href.split("?")[0];
            R(O, Object.assign(Object.assign({}, e), { href: t })) }

        function B(e, t) { return e.filter((function(e) { return e.name.toLowerCase().includes(t.toLowerCase()) }))[0] }

        function L(e, t) { var r = e; return t && t.length && (r = t.map((function(t) { return B(e, t) }))), r } var j = "https://registry.walletconnect.org";

        function N() { return j + "/data/wallets.json" }

        function q() { return j + "/data/dapps.json" }

        function U(e) { return j + "/logo/sm/" + e + ".jpeg" }

        function D(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mobile"; return { name: e.name || "", shortName: e.metadata.shortName || "", color: e.metadata.colors.primary || "", logo: e.id ? U(e.id) : "", universalLink: e[t].universal || "", deepLink: e[t].native || "" } }

        function H(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mobile"; return Object.values(e).filter((function(e) { return !!e[t].universal || !!e[t].native })).map((function(e) { return D(e, t) })) } }, function(e, t, r) { "use strict";
        r.d(t, "b", (function() { return i })), r.d(t, "g", (function() { return o })), r.d(t, "a", (function() { return a })), r.d(t, "f", (function() { return s })), r.d(t, "e", (function() { return u })), r.d(t, "i", (function() { return c })), r.d(t, "j", (function() { return f })), r.d(t, "h", (function() { return n })), r.d(t, "d", (function() { return d })), r.d(t, "c", (function() { return l })), r.d(t, "k", (function() { return h })), r.d(t, "l", (function() { return p })); var n = 512,
            i = 256,
            o = 256,
            a = "AES-CBC",
            s = "SHA-".concat(i),
            u = "HMAC",
            c = "SHA-256",
            f = "SHA-512",
            d = ("aes-".concat(i, "-cbc"), "sha".concat(o), "encrypt"),
            l = "decrypt",
            h = "sign",
            p = "verify" }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) { "use strict";

        function n(e) { var t = void 0; return "undefined" !== typeof window && "undefined" !== typeof window[e] && (t = window[e]), t }

        function i(e) { var t = n(e); if (!t) throw new Error("".concat(e, " is not defined in Window")); return t }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = n, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() { return i("document") }, t.getDocument = function() { return n("document") }, t.getNavigatorOrThrow = function() { return i("navigator") }, t.getNavigator = function() { return n("navigator") }, t.getLocationOrThrow = function() { return i("location") }, t.getLocation = function() { return n("location") }, t.getCryptoOrThrow = function() { return i("crypto") }, t.getCrypto = function() { return n("crypto") }, t.getLocalStorageOrThrow = function() { return i("localStorage") }, t.getLocalStorage = function() { return n("localStorage") } }, function(e, t) { e.exports = i, i.strict = o, i.loose = a; var r = Object.prototype.toString,
            n = { "[object Int8Array]": !0, "[object Int16Array]": !0, "[object Int32Array]": !0, "[object Uint8Array]": !0, "[object Uint8ClampedArray]": !0, "[object Uint16Array]": !0, "[object Uint32Array]": !0, "[object Float32Array]": !0, "[object Float64Array]": !0 };

        function i(e) { return o(e) || a(e) }

        function o(e) { return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array }

        function a(e) { return n[r.call(e)] } }, function(e, t, r) { "use strict"; var n = r(823);
        r.o(n, "payloadId") && r.d(t, "payloadId", (function() { return n.payloadId }));
        n.isNode }, function(e, t, r) { "use strict";
        r.d(t, "a", (function() { return n }));
        r(918), r(877);

        function n() { return Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3)) } }, function(e, t, r) { "use strict" }, function(e, t, r) { "use strict";
        r(1022) }, function(e, t, r) { "use strict";
        r(1023), r(919), r(1024), r(1025) }, function(e, t) {}, function(e, t, r) { "use strict"; var n = r(18),
            i = r(25),
            o = r(26),
            a = r(919);
        a.a, a.a }, function(e, t) {}, function(e, t, r) { "use strict" }, function(e, t, r) { "use strict" }, function(e, t, r) { "use strict";
        r.d(t, "a", (function() { return i })); var n = r(823);

        function i(e) { return n.getBrowerCrypto().getRandomValues(new Uint8Array(e)) } }, function(e, t, r) { "use strict";
        r.d(t, "b", (function() { return i })), r.d(t, "a", (function() { return o })); var n = r(920);

        function i(e, t, r) { return Object(n.b)(e, t, r) }

        function o(e, t, r) { return Object(n.a)(e, t, r) } }, function(e, t, r) { "use strict";
        r.d(t, "a", (function() { return s })); var n = r(3),
            i = r.n(n),
            o = r(13),
            a = r(920);
        r(921);

        function s(e, t) { return u.apply(this, arguments) }

        function u() { return (u = Object(o.a)(i.a.mark((function e(t, r) { var n; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(a.c)(t, r);
                        case 2:
                            return n = e.sent, e.abrupt("return", n);
                        case 4:
                        case "end":
                            return e.stop() } }), e) })))).apply(this, arguments) } }, function(e, t, r) { "use strict"; var n = r(823);
        r.o(n, "isConstantTime") && r.d(t, "isConstantTime", (function() { return n.isConstantTime })) }, function(e, t, r) { "use strict" }, function(e, t) {}, function(e, t, r) { "use strict";

        function n(e, t) { if (e.length !== t.length) return !1; for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n]; return 0 === r }
        r.d(t, "a", (function() { return n })) }, function(e, t, r) { "use strict";
        r(3), r(13), r(920) }, function(e, t, r) { var n = r(923),
            i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
            o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        t.getBlocksCount = function(e, t) { switch (t) {
                case n.L:
                    return i[4 * (e - 1) + 0];
                case n.M:
                    return i[4 * (e - 1) + 1];
                case n.Q:
                    return i[4 * (e - 1) + 2];
                case n.H:
                    return i[4 * (e - 1) + 3];
                default:
                    return } }, t.getTotalCodewordsCount = function(e, t) { switch (t) {
                case n.L:
                    return o[4 * (e - 1) + 0];
                case n.M:
                    return o[4 * (e - 1) + 1];
                case n.Q:
                    return o[4 * (e - 1) + 2];
                case n.H:
                    return o[4 * (e - 1) + 3];
                default:
                    return } } }, function(e, t) { t.isValid = function(e) { return !isNaN(e) && e >= 1 && e <= 40 } }, function(e, t) { var r = "[0-9]+",
            n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
            i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
        t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(i, "g"), t.NUMERIC = new RegExp(r, "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"); var o = new RegExp("^" + n + "$"),
            a = new RegExp("^[0-9]+$"),
            s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        t.testKanji = function(e) { return o.test(e) }, t.testNumeric = function(e) { return a.test(e) }, t.testAlphanumeric = function(e) { return s.test(e) } }, function(e, t) {
        function r(e) { if ("number" === typeof e && (e = e.toString()), "string" !== typeof e) throw new Error("Color should be defined as hex string"); var t = e.slice().replace("#", "").split(""); if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
            3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map((function(e) { return [e, e] })))), 6 === t.length && t.push("F", "F"); var r = parseInt(t.join(""), 16); return { r: r >> 24 & 255, g: r >> 16 & 255, b: r >> 8 & 255, a: 255 & r, hex: "#" + t.slice(0, 6).join("") } }
        t.getOptions = function(e) { e || (e = {}), e.color || (e.color = {}); var t = "undefined" === typeof e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                n = e.width && e.width >= 21 ? e.width : void 0,
                i = e.scale || 4; return { width: n, scale: n ? 4 : i, margin: t, color: { dark: r(e.color.dark || "#000000ff"), light: r(e.color.light || "#ffffffff") }, type: e.type, rendererOpts: e.rendererOpts || {} } }, t.getScale = function(e, t) { return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale }, t.getImageWidth = function(e, r) { var n = t.getScale(e, r); return Math.floor((e + 2 * r.margin) * n) }, t.qrToImageData = function(e, r, n) { for (var i = r.modules.size, o = r.modules.data, a = t.getScale(i, n), s = Math.floor((i + 2 * n.margin) * a), u = n.margin * a, c = [n.color.light, n.color.dark], f = 0; f < s; f++)
                for (var d = 0; d < s; d++) { var l = 4 * (f * s + d),
                        h = n.color.light; if (f >= u && d >= u && f < s - u && d < s - u) h = c[o[Math.floor((f - u) / a) * i + Math.floor((d - u) / a)] ? 1 : 0];
                    e[l++] = h.r, e[l++] = h.g, e[l++] = h.b, e[l] = h.a } } }, function(e, t, r) {
        (function(e) { var n = r(1334),
                i = r(1042),
                o = r(832),
                a = r(1341),
                s = r(926),
                u = t;
            u.request = function(t, r) { t = "string" === typeof t ? s.parse(t) : o(t); var i = -1 === e.location.protocol.search(/^https?:$/) ? "http:" : "",
                    a = t.protocol || i,
                    u = t.hostname || t.host,
                    c = t.port,
                    f = t.path || "/";
                u && -1 !== u.indexOf(":") && (u = "[" + u + "]"), t.url = (u ? a + "//" + u : "") + (c ? ":" + c : "") + f, t.method = (t.method || "GET").toUpperCase(), t.headers = t.headers || {}; var d = new n(t); return r && d.on("response", r), d }, u.get = function(e, t) { var r = u.request(e, t); return r.end(), r }, u.ClientRequest = n, u.IncomingMessage = i.IncomingMessage, u.Agent = function() {}, u.Agent.defaultMaxSockets = 4, u.globalAgent = new u.Agent, u.STATUS_CODES = a, u.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"] }).call(this, r(147)) }, function(e, t, r) {
        (function(e) { t.fetch = s(e.fetch) && s(e.ReadableStream), t.writableStream = s(e.WritableStream), t.abortController = s(e.AbortController), t.blobConstructor = !1; try { new Blob([new ArrayBuffer(1)]), t.blobConstructor = !0 } catch (u) {} var r;

            function n() { if (void 0 !== r) return r; if (e.XMLHttpRequest) { r = new e.XMLHttpRequest; try { r.open("GET", e.XDomainRequest ? "/" : "https://example.com") } catch (u) { r = null } } else r = null; return r }

            function i(e) { var t = n(); if (!t) return !1; try { return t.responseType = e, t.responseType === e } catch (u) {} return !1 } var o = "undefined" !== typeof e.ArrayBuffer,
                a = o && s(e.ArrayBuffer.prototype.slice);

            function s(e) { return "function" === typeof e }
            t.arraybuffer = t.fetch || o && i("arraybuffer"), t.msstream = !t.fetch && a && i("ms-stream"), t.mozchunkedarraybuffer = !t.fetch && o && i("moz-chunked-arraybuffer"), t.overrideMimeType = t.fetch || !!n() && s(n().overrideMimeType), t.vbArray = s(e.VBArray), r = null }).call(this, r(147)) }, function(e, t, r) {
        (function(e, n, i) { var o = r(1041),
                a = r(490),
                s = r(854),
                u = t.readyStates = { UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 },
                c = t.IncomingMessage = function(t, r, a, u) { var c = this; if (s.Readable.call(c), c._mode = a, c.headers = {}, c.rawHeaders = [], c.trailers = {}, c.rawTrailers = [], c.on("end", (function() { e.nextTick((function() { c.emit("close") })) })), "fetch" === a) { if (c._fetchResponse = r, c.url = r.url, c.statusCode = r.status, c.statusMessage = r.statusText, r.headers.forEach((function(e, t) { c.headers[t.toLowerCase()] = e, c.rawHeaders.push(t, e) })), o.writableStream) { var f = new WritableStream({ write: function(e) { return new Promise((function(t, r) { c._destroyed ? r() : c.push(new i(e)) ? t() : c._resumeFetch = t })) }, close: function() { n.clearTimeout(u), c._destroyed || c.push(null) }, abort: function(e) { c._destroyed || c.emit("error", e) } }); try { return void r.body.pipeTo(f).catch((function(e) { n.clearTimeout(u), c._destroyed || c.emit("error", e) })) } catch (p) {} } var d = r.body.getReader();! function e() { d.read().then((function(t) { if (!c._destroyed) { if (t.done) return n.clearTimeout(u), void c.push(null);
                                    c.push(new i(t.value)), e() } })).catch((function(e) { n.clearTimeout(u), c._destroyed || c.emit("error", e) })) }() } else { if (c._xhr = t, c._pos = 0, c.url = t.responseURL, c.statusCode = t.status, c.statusMessage = t.statusText, t.getAllResponseHeaders().split(/\r?\n/).forEach((function(e) { var t = e.match(/^([^:]+):\s*(.*)/); if (t) { var r = t[1].toLowerCase(); "set-cookie" === r ? (void 0 === c.headers[r] && (c.headers[r] = []), c.headers[r].push(t[2])) : void 0 !== c.headers[r] ? c.headers[r] += ", " + t[2] : c.headers[r] = t[2], c.rawHeaders.push(t[1], t[2]) } })), c._charset = "x-user-defined", !o.overrideMimeType) { var l = c.rawHeaders["mime-type"]; if (l) { var h = l.match(/;\s*charset=([^;])(;|$)/);
                                h && (c._charset = h[1].toLowerCase()) }
                            c._charset || (c._charset = "utf-8") } } };
            a(c, s.Readable), c.prototype._read = function() { var e = this._resumeFetch;
                e && (this._resumeFetch = null, e()) }, c.prototype._onXHRProgress = function() { var e = this,
                    t = e._xhr,
                    r = null; switch (e._mode) {
                    case "text:vbarray":
                        if (t.readyState !== u.DONE) break; try { r = new n.VBArray(t.responseBody).toArray() } catch (f) {} if (null !== r) { e.push(new i(r)); break }
                    case "text":
                        try { r = t.responseText } catch (f) { e._mode = "text:vbarray"; break } if (r.length > e._pos) { var o = r.substr(e._pos); if ("x-user-defined" === e._charset) { for (var a = new i(o.length), s = 0; s < o.length; s++) a[s] = 255 & o.charCodeAt(s);
                                e.push(a) } else e.push(o, e._charset);
                            e._pos = r.length } break;
                    case "arraybuffer":
                        if (t.readyState !== u.DONE || !t.response) break;
                        r = t.response, e.push(new i(new Uint8Array(r))); break;
                    case "moz-chunked-arraybuffer":
                        if (r = t.response, t.readyState !== u.LOADING || !r) break;
                        e.push(new i(new Uint8Array(r))); break;
                    case "ms-stream":
                        if (r = t.response, t.readyState !== u.LOADING) break; var c = new n.MSStreamReader;
                        c.onprogress = function() { c.result.byteLength > e._pos && (e.push(new i(new Uint8Array(c.result.slice(e._pos)))), e._pos = c.result.byteLength) }, c.onload = function() { e.push(null) }, c.readAsArrayBuffer(r) }
                e._xhr.readyState === u.DONE && "ms-stream" !== e._mode && e.push(null) } }).call(this, r(246), r(147), r(785).Buffer) }, function(e, t, r) { "use strict";
        (function(t, n) { var i = r(878);
            e.exports = m; var o, a = r(1335);
            m.ReadableState = y;
            r(372).EventEmitter; var s = function(e, t) { return e.listeners(t).length },
                u = r(1044),
                c = r(924).Buffer,
                f = t.Uint8Array || function() {}; var d = Object.create(r(855));
            d.inherits = r(490); var l = r(1336),
                h = void 0;
            h = l && l.debuglog ? l.debuglog("stream") : function() {}; var p, b = r(1337),
                v = r(1045);
            d.inherits(m, u); var g = ["error", "close", "destroy", "pause", "resume"];

            function y(e, t) { e = e || {}; var n = t instanceof(o = o || r(826));
                this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode); var i = e.highWaterMark,
                    a = e.readableHighWaterMark,
                    s = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : n && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new b, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (p || (p = r(856).StringDecoder), this.decoder = new p(e.encoding), this.encoding = e.encoding) }

            function m(e) { if (o = o || r(826), !(this instanceof m)) return new m(e);
                this._readableState = new y(e, this), this.readable = !0, e && ("function" === typeof e.read && (this._read = e.read), "function" === typeof e.destroy && (this._destroy = e.destroy)), u.call(this) }

            function _(e, t, r, n, i) { var o, a = e._readableState;
                null === t ? (a.reading = !1, function(e, t) { if (t.ended) return; if (t.decoder) { var r = t.decoder.end();
                        r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length) }
                    t.ended = !0, S(e) }(e, a)) : (i || (o = function(e, t) { var r;
                    n = t, c.isBuffer(n) || n instanceof f || "string" === typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk")); var n; return r }(a, t)), o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" === typeof t || a.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function(e) { return c.from(e) }(t)), n ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : w(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? w(e, a, t, !1) : M(e, a)) : w(e, a, t, !1))) : n || (a.reading = !1)); return function(e) { return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length) }(a) }

            function w(e, t, r, n) { t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && S(e)), M(e, t) }
            Object.defineProperty(m.prototype, "destroyed", { get: function() { return void 0 !== this._readableState && this._readableState.destroyed }, set: function(e) { this._readableState && (this._readableState.destroyed = e) } }), m.prototype.destroy = v.destroy, m.prototype._undestroy = v.undestroy, m.prototype._destroy = function(e, t) { this.push(null), t(e) }, m.prototype.push = function(e, t) { var r, n = this._readableState; return n.objectMode ? r = !0 : "string" === typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = c.from(e, t), t = ""), r = !0), _(this, e, t, !1, r) }, m.prototype.unshift = function(e) { return _(this, e, null, !0, !1) }, m.prototype.isPaused = function() { return !1 === this._readableState.flowing }, m.prototype.setEncoding = function(e) { return p || (p = r(856).StringDecoder), this._readableState.decoder = new p(e), this._readableState.encoding = e, this }; var x = 8388608;

            function k(e, t) { return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) { return e >= x ? e = x : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)) }

            function S(e) { var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (h("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(E, e) : E(e)) }

            function E(e) { h("emit readable"), e.emit("readable"), C(e) }

            function M(e, t) { t.readingMore || (t.readingMore = !0, i.nextTick(A, e, t)) }

            function A(e, t) { for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (h("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
                t.readingMore = !1 }

            function R(e) { h("readable nexttick read 0"), e.read(0) }

            function T(e, t) { t.reading || (h("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), C(e), t.flowing && !t.reading && e.read(0) }

            function C(e) { var t = e._readableState; for (h("flow", t.flowing); t.flowing && null !== e.read();); }

            function O(e, t) { return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = function(e, t, r) { var n;
                    e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function(e, t) { var r = t.head,
                            n = 1,
                            i = r.data;
                        e -= i.length; for (; r = r.next;) { var o = r.data,
                                a = e > o.length ? o.length : e; if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) { a === o.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a)); break }++n } return t.length -= n, i }(e, t) : function(e, t) { var r = c.allocUnsafe(e),
                            n = t.head,
                            i = 1;
                        n.data.copy(r), e -= n.data.length; for (; n = n.next;) { var o = n.data,
                                a = e > o.length ? o.length : e; if (o.copy(r, r.length - e, 0, a), 0 === (e -= a)) { a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a)); break }++i } return t.length -= i, r }(e, t); return n }(e, t.buffer, t.decoder), r); var r }

            function P(e) { var t = e._readableState; if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || (t.ended = !0, i.nextTick(I, t, e)) }

            function I(e, t) { e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end")) }

            function B(e, t) { for (var r = 0, n = e.length; r < n; r++)
                    if (e[r] === t) return r;
                return -1 }
            m.prototype.read = function(e) { h("read", e), e = parseInt(e, 10); var t = this._readableState,
                    r = e; if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return h("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? P(this) : S(this), null; if (0 === (e = k(e, t)) && t.ended) return 0 === t.length && P(this), null; var n, i = t.needReadable; return h("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && h("length less than watermark", i = !0), t.ended || t.reading ? h("reading or ended", i = !1) : i && (h("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = k(r, t))), null === (n = e > 0 ? O(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && P(this)), null !== n && this.emit("data", n), n }, m.prototype._read = function(e) { this.emit("error", new Error("_read() is not implemented")) }, m.prototype.pipe = function(e, t) { var r = this,
                    o = this._readableState; switch (o.pipesCount) {
                    case 0:
                        o.pipes = e; break;
                    case 1:
                        o.pipes = [o.pipes, e]; break;
                    default:
                        o.pipes.push(e) }
                o.pipesCount += 1, h("pipe count=%d opts=%j", o.pipesCount, t); var u = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? f : m;

                function c(t, n) { h("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, h("cleanup"), e.removeListener("close", g), e.removeListener("finish", y), e.removeListener("drain", d), e.removeListener("error", v), e.removeListener("unpipe", c), r.removeListener("end", f), r.removeListener("end", m), r.removeListener("data", b), l = !0, !o.awaitDrain || e._writableState && !e._writableState.needDrain || d()) }

                function f() { h("onend"), e.end() }
                o.endEmitted ? i.nextTick(u) : r.once("end", u), e.on("unpipe", c); var d = function(e) { return function() { var t = e._readableState;
                        h("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, C(e)) } }(r);
                e.on("drain", d); var l = !1; var p = !1;

                function b(t) { h("ondata"), p = !1, !1 !== e.write(t) || p || ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== B(o.pipes, e)) && !l && (h("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, p = !0), r.pause()) }

                function v(t) { h("onerror", t), m(), e.removeListener("error", v), 0 === s(e, "error") && e.emit("error", t) }

                function g() { e.removeListener("finish", y), m() }

                function y() { h("onfinish"), e.removeListener("close", g), m() }

                function m() { h("unpipe"), r.unpipe(e) } return r.on("data", b),
                    function(e, t, r) { if ("function" === typeof e.prependListener) return e.prependListener(t, r);
                        e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r) }(e, "error", v), e.once("close", g), e.once("finish", y), e.emit("pipe", r), o.flowing || (h("pipe resume"), r.resume()), e }, m.prototype.unpipe = function(e) { var t = this._readableState,
                    r = { hasUnpiped: !1 }; if (0 === t.pipesCount) return this; if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this; if (!e) { var n = t.pipes,
                        i = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1; for (var o = 0; o < i; o++) n[o].emit("unpipe", this, r); return this } var a = B(t.pipes, e); return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this }, m.prototype.on = function(e, t) { var r = u.prototype.on.call(this, e, t); if ("data" === e) !1 !== this._readableState.flowing && this.resume();
                else if ("readable" === e) { var n = this._readableState;
                    n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && S(this) : i.nextTick(R, this)) } return r }, m.prototype.addListener = m.prototype.on, m.prototype.resume = function() { var e = this._readableState; return e.flowing || (h("resume"), e.flowing = !0, function(e, t) { t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(T, e, t)) }(this, e)), this }, m.prototype.pause = function() { return h("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (h("pause"), this._readableState.flowing = !1, this.emit("pause")), this }, m.prototype.wrap = function(e) { var t = this,
                    r = this._readableState,
                    n = !1; for (var i in e.on("end", (function() { if (h("wrapped end"), r.decoder && !r.ended) { var e = r.decoder.end();
                            e && e.length && t.push(e) }
                        t.push(null) })), e.on("data", (function(i) {
                        (h("wrapped data"), r.decoder && (i = r.decoder.write(i)), !r.objectMode || null !== i && void 0 !== i) && ((r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()))) })), e) void 0 === this[i] && "function" === typeof e[i] && (this[i] = function(t) { return function() { return e[t].apply(e, arguments) } }(i)); for (var o = 0; o < g.length; o++) e.on(g[o], this.emit.bind(this, g[o])); return this._read = function(t) { h("wrapped _read", t), n && (n = !1, e.resume()) }, this }, Object.defineProperty(m.prototype, "readableHighWaterMark", { enumerable: !1, get: function() { return this._readableState.highWaterMark } }), m._fromList = O }).call(this, r(147), r(246)) }, function(e, t, r) { e.exports = r(372).EventEmitter }, function(e, t, r) { "use strict"; var n = r(878);

        function i(e, t) { e.emit("error", t) }
        e.exports = { destroy: function(e, t) { var r = this,
                    o = this._readableState && this._readableState.destroyed,
                    a = this._writableState && this._writableState.destroyed; return o || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {!t && e ? (n.nextTick(i, r, e), r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e) })), this) }, undestroy: function() { this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1) } } }, function(e, t, r) {
        (function(t) {
            function r(e) { try { if (!t.localStorage) return !1 } catch (n) { return !1 } var r = t.localStorage[e]; return null != r && "true" === String(r).toLowerCase() }
            e.exports = function(e, t) { if (r("noDeprecation")) return e; var n = !1; return function() { if (!n) { if (r("throwDeprecation")) throw new Error(t);
                        r("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0 } return e.apply(this, arguments) } } }).call(this, r(147)) }, function(e, t, r) { "use strict";
        e.exports = a; var n = r(826),
            i = Object.create(r(855));

        function o(e, t) { var r = this._transformState;
            r.transforming = !1; var n = r.writecb; if (!n) return this.emit("error", new Error("write callback called multiple times"));
            r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e); var i = this._readableState;
            i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark) }

        function a(e) { if (!(this instanceof a)) return new a(e);
            n.call(this, e), this._transformState = { afterTransform: o.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" === typeof e.transform && (this._transform = e.transform), "function" === typeof e.flush && (this._flush = e.flush)), this.on("prefinish", s) }

        function s() { var e = this; "function" === typeof this._flush ? this._flush((function(t, r) { u(e, t, r) })) : u(this, null, null) }

        function u(e, t, r) { if (t) return e.emit("error", t); if (null != r && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0"); if (e._transformState.transforming) throw new Error("Calling transform done when still transforming"); return e.push(null) }
        i.inherits = r(490), i.inherits(a, n), a.prototype.push = function(e, t) { return this._transformState.needTransform = !1, n.prototype.push.call(this, e, t) }, a.prototype._transform = function(e, t, r) { throw new Error("_transform() is not implemented") }, a.prototype._write = function(e, t, r) { var n = this._transformState; if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) { var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark) } }, a.prototype._read = function(e) { var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0 }, a.prototype._destroy = function(e, t) { var r = this;
            n.prototype._destroy.call(this, e, (function(e) { t(e), r.emit("close") })) } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = r(1354),
            i = r(1355);
        t.keccak224 = n.createHashFunction((function() { return i("keccak224") })), t.keccak256 = n.createHashFunction((function() { return i("keccak256") })), t.keccak384 = n.createHashFunction((function() { return i("keccak384") })), t.keccak512 = n.createHashFunction((function() { return i("keccak512") })) }, function(e, t) { e.exports = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } } }, function(e, t) { e.exports = function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e } }, function(e, t, r) { "use strict"; var n = this && this.__awaiter || function(e, t, r, n) { return new(r || (r = Promise))((function(i, o) {
                    function a(e) { try { u(n.next(e)) } catch (t) { o(t) } }

                    function s(e) { try { u(n.throw(e)) } catch (t) { o(t) } }

                    function u(e) { var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) { e(t) }))).then(a, s) }
                    u((n = n.apply(e, t || [])).next()) })) },
            i = this && this.__generator || function(e, t) { var r, n, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" === typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

                function s(o) { return function(s) { return function(o) { if (r) throw new TypeError("Generator is already executing."); for (; a;) try { if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i; switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o; break;
                                    case 4:
                                        return a.label++, { value: o[1], done: !1 };
                                    case 5:
                                        a.label++, n = o[1], o = [0]; continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop(); continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) { a = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break } if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break } if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                                        i[2] && a.ops.pop(), a.trys.pop(); continue }
                                o = t.call(e, a) } catch (s) { o = [6, s], n = 0 } finally { r = i = 0 }
                            if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } };
        Object.defineProperty(t, "__esModule", { value: !0 }); var o = r(1052),
            a = r(1383);
        t.createPrivateKey = function() { return n(this, void 0, void 0, (function() { var e; return i(this, (function(t) { switch (t.label) {
                            case 0:
                                return [4, a.getRandomBytes(32)];
                            case 1:
                                return e = t.sent(), o.privateKeyVerify(e) ? [2, e] : [3, 0];
                            case 2:
                                return [2] } })) })) }, t.createPrivateKeySync = function() { for (;;) { var e = a.getRandomBytesSync(32); if (o.privateKeyVerify(e)) return e } },
            function(e) { for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]) }(r(1052)) }, function(e, t, r) { e.exports = r(1368)(r(1369)) }, function(e, t, r) { "use strict"; var n = t;

        function i(e) { return 1 === e.length ? "0" + e : e }

        function o(e) { for (var t = "", r = 0; r < e.length; r++) t += i(e[r].toString(16)); return t }
        n.toArray = function(e, t) { if (Array.isArray(e)) return e.slice(); if (!e) return []; var r = []; if ("string" !== typeof e) { for (var n = 0; n < e.length; n++) r[n] = 0 | e[n]; return r } if ("hex" === t) {
                (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (e = "0" + e); for (n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16)) } else
                for (n = 0; n < e.length; n++) { var i = e.charCodeAt(n),
                        o = i >> 8,
                        a = 255 & i;
                    o ? r.push(o, a) : r.push(a) }
            return r }, n.zero2 = i, n.toHex = o, n.encode = function(e, t) { return "hex" === t ? o(e) : e } }, function(e, t, r) { var n;

        function i(e) { this.rand = e } if (e.exports = function(e) { return n || (n = new i(null)), n.generate(e) }, e.exports.Rand = i, i.prototype.generate = function(e) { return this._rand(e) }, i.prototype._rand = function(e) { if (this.rand.getBytes) return this.rand.getBytes(e); for (var t = new Uint8Array(e), r = 0; r < t.length; r++) t[r] = this.rand.getByte(); return t }, "object" === typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(e) { var t = new Uint8Array(e); return self.crypto.getRandomValues(t), t } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(e) { var t = new Uint8Array(e); return self.msCrypto.getRandomValues(t), t } : "object" === typeof window && (i.prototype._rand = function() { throw new Error("Not implemented yet") });
        else try { var o = r(1371); if ("function" !== typeof o.randomBytes) throw new Error("Not supported");
            i.prototype._rand = function(e) { return o.randomBytes(e) } } catch (a) {} }, function(e, t, r) { "use strict"; var n = t;
        n.base = r(879), n.short = r(1372), n.mont = r(1373), n.edwards = r(1374) }, function(e, t, r) { "use strict"; var n = r(490),
            i = r(1387),
            o = r(1396),
            a = r(1397),
            s = r(1402);

        function u(e) { s.call(this, "digest"), this._hash = e }
        n(u, s), u.prototype._update = function(e) { this._hash.update(e) }, u.prototype._final = function() { return this._hash.digest() }, e.exports = function(e) { return "md5" === (e = e.toLowerCase()) ? new i : "rmd160" === e || "ripemd160" === e ? new o : new u(a(e)) } }, function(e, t, r) { "use strict"; var n = r(799).Buffer,
            i = r(1388).Transform;

        function o(e) { i.call(this), this._block = n.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1 }
        r(490)(o, i), o.prototype._transform = function(e, t, r) { var n = null; try { this.update(e, t) } catch (i) { n = i }
            r(n) }, o.prototype._flush = function(e) { var t = null; try { this.push(this.digest()) } catch (r) { t = r }
            e(t) }, o.prototype.update = function(e, t) { if (function(e, t) { if (!n.isBuffer(e) && "string" !== typeof e) throw new TypeError(t + " must be a string or a buffer") }(e, "Data"), this._finalized) throw new Error("Digest already called");
            n.isBuffer(e) || (e = n.from(e, t)); for (var r = this._block, i = 0; this._blockOffset + e.length - i >= this._blockSize;) { for (var o = this._blockOffset; o < this._blockSize;) r[o++] = e[i++];
                this._update(), this._blockOffset = 0 } for (; i < e.length;) r[this._blockOffset++] = e[i++]; for (var a = 0, s = 8 * e.length; s > 0; ++a) this._length[a] += s, (s = this._length[a] / 4294967296 | 0) > 0 && (this._length[a] -= 4294967296 * s); return this }, o.prototype._update = function() { throw new Error("_update is not implemented") }, o.prototype.digest = function(e) { if (this._finalized) throw new Error("Digest already called");
            this._finalized = !0; var t = this._digest();
            void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0; for (var r = 0; r < 4; ++r) this._length[r] = 0; return t }, o.prototype._digest = function() { throw new Error("_digest is not implemented") }, e.exports = o }, function(e, t, r) { "use strict";
        (function(t, n) { var i;
            e.exports = E, E.ReadableState = S;
            r(372).EventEmitter; var o = function(e, t) { return e.listeners(t).length },
                a = r(1059),
                s = r(785).Buffer,
                u = t.Uint8Array || function() {}; var c, f = r(1389);
            c = f && f.debuglog ? f.debuglog("stream") : function() {}; var d, l, h, p = r(1390),
                b = r(1060),
                v = r(1061).getHighWaterMark,
                g = r(836).codes,
                y = g.ERR_INVALID_ARG_TYPE,
                m = g.ERR_STREAM_PUSH_AFTER_EOF,
                _ = g.ERR_METHOD_NOT_IMPLEMENTED,
                w = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            r(490)(E, a); var x = b.errorOrDestroy,
                k = ["error", "close", "destroy", "pause", "resume"];

            function S(e, t, n) { i = i || r(837), e = e || {}, "boolean" !== typeof n && (n = t instanceof i), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = v(this, e, "readableHighWaterMark", n), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (d || (d = r(856).StringDecoder), this.decoder = new d(e.encoding), this.encoding = e.encoding) }

            function E(e) { if (i = i || r(837), !(this instanceof E)) return new E(e); var t = this instanceof i;
                this._readableState = new S(e, this, t), this.readable = !0, e && ("function" === typeof e.read && (this._read = e.read), "function" === typeof e.destroy && (this._destroy = e.destroy)), a.call(this) }

            function M(e, t, r, n, i) { c("readableAddChunk", t); var o, a = e._readableState; if (null === t) a.reading = !1,
                    function(e, t) { if (c("onEofChunk"), t.ended) return; if (t.decoder) { var r = t.decoder.end();
                            r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length) }
                        t.ended = !0, t.sync ? C(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, O(e))) }(e, a);
                else if (i || (o = function(e, t) { var r;
                        n = t, s.isBuffer(n) || n instanceof u || "string" === typeof t || void 0 === t || e.objectMode || (r = new y("chunk", ["string", "Buffer", "Uint8Array"], t)); var n; return r }(a, t)), o) x(e, o);
                else if (a.objectMode || t && t.length > 0)
                    if ("string" === typeof t || a.objectMode || Object.getPrototypeOf(t) === s.prototype || (t = function(e) { return s.from(e) }(t)), n) a.endEmitted ? x(e, new w) : A(e, a, t, !0);
                    else if (a.ended) x(e, new m);
                else { if (a.destroyed) return !1;
                    a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? A(e, a, t, !1) : P(e, a)) : A(e, a, t, !1) } else n || (a.reading = !1, P(e, a)); return !a.ended && (a.length < a.highWaterMark || 0 === a.length) }

            function A(e, t, r, n) { t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && C(e)), P(e, t) }
            Object.defineProperty(E.prototype, "destroyed", { enumerable: !1, get: function() { return void 0 !== this._readableState && this._readableState.destroyed }, set: function(e) { this._readableState && (this._readableState.destroyed = e) } }), E.prototype.destroy = b.destroy, E.prototype._undestroy = b.undestroy, E.prototype._destroy = function(e, t) { t(e) }, E.prototype.push = function(e, t) { var r, n = this._readableState; return n.objectMode ? r = !0 : "string" === typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = s.from(e, t), t = ""), r = !0), M(this, e, t, !1, r) }, E.prototype.unshift = function(e) { return M(this, e, null, !0, !1) }, E.prototype.isPaused = function() { return !1 === this._readableState.flowing }, E.prototype.setEncoding = function(e) { d || (d = r(856).StringDecoder); var t = new d(e);
                this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding; for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += t.write(n.data), n = n.next; return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this }; var R = 1073741824;

            function T(e, t) { return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) { return e >= R ? e = R : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)) }

            function C(e) { var t = e._readableState;
                c("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (c("emitReadable", t.flowing), t.emittedReadable = !0, n.nextTick(O, e)) }

            function O(e) { var t = e._readableState;
                c("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, N(e) }

            function P(e, t) { t.readingMore || (t.readingMore = !0, n.nextTick(I, e, t)) }

            function I(e, t) { for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) { var r = t.length; if (c("maybeReadMore read 0"), e.read(0), r === t.length) break }
                t.readingMore = !1 }

            function B(e) { var t = e._readableState;
                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume() }

            function L(e) { c("readable nexttick read 0"), e.read(0) }

            function j(e, t) { c("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), N(e), t.flowing && !t.reading && e.read(0) }

            function N(e) { var t = e._readableState; for (c("flow", t.flowing); t.flowing && null !== e.read();); }

            function q(e, t) { return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r); var r }

            function U(e) { var t = e._readableState;
                c("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, n.nextTick(D, t, e)) }

            function D(e, t) { if (c("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) { var r = t._writableState;
                    (!r || r.autoDestroy && r.finished) && t.destroy() } }

            function H(e, t) { for (var r = 0, n = e.length; r < n; r++)
                    if (e[r] === t) return r;
                return -1 }
            E.prototype.read = function(e) { c("read", e), e = parseInt(e, 10); var t = this._readableState,
                    r = e; if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return c("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? U(this) : C(this), null; if (0 === (e = T(e, t)) && t.ended) return 0 === t.length && U(this), null; var n, i = t.needReadable; return c("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && c("length less than watermark", i = !0), t.ended || t.reading ? c("reading or ended", i = !1) : i && (c("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = T(r, t))), null === (n = e > 0 ? q(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && U(this)), null !== n && this.emit("data", n), n }, E.prototype._read = function(e) { x(this, new _("_read()")) }, E.prototype.pipe = function(e, t) { var r = this,
                    i = this._readableState; switch (i.pipesCount) {
                    case 0:
                        i.pipes = e; break;
                    case 1:
                        i.pipes = [i.pipes, e]; break;
                    default:
                        i.pipes.push(e) }
                i.pipesCount += 1, c("pipe count=%d opts=%j", i.pipesCount, t); var a = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? u : v;

                function s(t, n) { c("onunpipe"), t === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, c("cleanup"), e.removeListener("close", p), e.removeListener("finish", b), e.removeListener("drain", f), e.removeListener("error", h), e.removeListener("unpipe", s), r.removeListener("end", u), r.removeListener("end", v), r.removeListener("data", l), d = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || f()) }

                function u() { c("onend"), e.end() }
                i.endEmitted ? n.nextTick(a) : r.once("end", a), e.on("unpipe", s); var f = function(e) { return function() { var t = e._readableState;
                        c("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && o(e, "data") && (t.flowing = !0, N(e)) } }(r);
                e.on("drain", f); var d = !1;

                function l(t) { c("ondata"); var n = e.write(t);
                    c("dest.write", n), !1 === n && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== H(i.pipes, e)) && !d && (c("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause()) }

                function h(t) { c("onerror", t), v(), e.removeListener("error", h), 0 === o(e, "error") && x(e, t) }

                function p() { e.removeListener("finish", b), v() }

                function b() { c("onfinish"), e.removeListener("close", p), v() }

                function v() { c("unpipe"), r.unpipe(e) } return r.on("data", l),
                    function(e, t, r) { if ("function" === typeof e.prependListener) return e.prependListener(t, r);
                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r) }(e, "error", h), e.once("close", p), e.once("finish", b), e.emit("pipe", r), i.flowing || (c("pipe resume"), r.resume()), e }, E.prototype.unpipe = function(e) { var t = this._readableState,
                    r = { hasUnpiped: !1 }; if (0 === t.pipesCount) return this; if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this; if (!e) { var n = t.pipes,
                        i = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1; for (var o = 0; o < i; o++) n[o].emit("unpipe", this, { hasUnpiped: !1 }); return this } var a = H(t.pipes, e); return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this }, E.prototype.on = function(e, t) { var r = a.prototype.on.call(this, e, t),
                    i = this._readableState; return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, c("on readable", i.length, i.reading), i.length ? C(this) : i.reading || n.nextTick(L, this))), r }, E.prototype.addListener = E.prototype.on, E.prototype.removeListener = function(e, t) { var r = a.prototype.removeListener.call(this, e, t); return "readable" === e && n.nextTick(B, this), r }, E.prototype.removeAllListeners = function(e) { var t = a.prototype.removeAllListeners.apply(this, arguments); return "readable" !== e && void 0 !== e || n.nextTick(B, this), t }, E.prototype.resume = function() { var e = this._readableState; return e.flowing || (c("resume"), e.flowing = !e.readableListening, function(e, t) { t.resumeScheduled || (t.resumeScheduled = !0, n.nextTick(j, e, t)) }(this, e)), e.paused = !1, this }, E.prototype.pause = function() { return c("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (c("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this }, E.prototype.wrap = function(e) { var t = this,
                    r = this._readableState,
                    n = !1; for (var i in e.on("end", (function() { if (c("wrapped end"), r.decoder && !r.ended) { var e = r.decoder.end();
                            e && e.length && t.push(e) }
                        t.push(null) })), e.on("data", (function(i) {
                        (c("wrapped data"), r.decoder && (i = r.decoder.write(i)), !r.objectMode || null !== i && void 0 !== i) && ((r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause()))) })), e) void 0 === this[i] && "function" === typeof e[i] && (this[i] = function(t) { return function() { return e[t].apply(e, arguments) } }(i)); for (var o = 0; o < k.length; o++) e.on(k[o], this.emit.bind(this, k[o])); return this._read = function(t) { c("wrapped _read", t), n && (n = !1, e.resume()) }, this }, "function" === typeof Symbol && (E.prototype[Symbol.asyncIterator] = function() { return void 0 === l && (l = r(1392)), l(this) }), Object.defineProperty(E.prototype, "readableHighWaterMark", { enumerable: !1, get: function() { return this._readableState.highWaterMark } }), Object.defineProperty(E.prototype, "readableBuffer", { enumerable: !1, get: function() { return this._readableState && this._readableState.buffer } }), Object.defineProperty(E.prototype, "readableFlowing", { enumerable: !1, get: function() { return this._readableState.flowing }, set: function(e) { this._readableState && (this._readableState.flowing = e) } }), E._fromList = q, Object.defineProperty(E.prototype, "readableLength", { enumerable: !1, get: function() { return this._readableState.length } }), "function" === typeof Symbol && (E.from = function(e, t) { return void 0 === h && (h = r(1393)), h(E, e, t) }) }).call(this, r(147), r(246)) }, function(e, t, r) { e.exports = r(372).EventEmitter }, function(e, t, r) { "use strict";
        (function(t) {
            function r(e, t) { i(e, t), n(e) }

            function n(e) { e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close") }

            function i(e, t) { e.emit("error", t) }
            e.exports = { destroy: function(e, o) { var a = this,
                        s = this._readableState && this._readableState.destroyed,
                        u = this._writableState && this._writableState.destroyed; return s || u ? (o ? o(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, t.nextTick(i, this, e)) : t.nextTick(i, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {!o && e ? a._writableState ? a._writableState.errorEmitted ? t.nextTick(n, a) : (a._writableState.errorEmitted = !0, t.nextTick(r, a, e)) : t.nextTick(r, a, e) : o ? (t.nextTick(n, a), o(e)) : t.nextTick(n, a) })), this) }, undestroy: function() { this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1) }, errorOrDestroy: function(e, t) { var r = e._readableState,
                        n = e._writableState;
                    r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t) } } }).call(this, r(246)) }, function(e, t, r) { "use strict"; var n = r(836).codes.ERR_INVALID_OPT_VALUE;
        e.exports = { getHighWaterMark: function(e, t, r, i) { var o = function(e, t, r) { return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null }(t, i, r); if (null != o) { if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r : "highWaterMark", o); return Math.floor(o) } return e.objectMode ? 16 : 16384 } } }, function(e, t, r) { "use strict";
        (function(t, n) {
            function i(e) { var t = this;
                this.next = null, this.entry = null, this.finish = function() {! function(e, t, r) { var n = e.entry;
                        e.entry = null; for (; n;) { var i = n.callback;
                            t.pendingcb--, i(r), n = n.next }
                        t.corkedRequestsFree.next = e }(t, e) } } var o;
            e.exports = E, E.WritableState = S; var a = { deprecate: r(1046) },
                s = r(1059),
                u = r(785).Buffer,
                c = t.Uint8Array || function() {}; var f, d = r(1060),
                l = r(1061).getHighWaterMark,
                h = r(836).codes,
                p = h.ERR_INVALID_ARG_TYPE,
                b = h.ERR_METHOD_NOT_IMPLEMENTED,
                v = h.ERR_MULTIPLE_CALLBACK,
                g = h.ERR_STREAM_CANNOT_PIPE,
                y = h.ERR_STREAM_DESTROYED,
                m = h.ERR_STREAM_NULL_VALUES,
                _ = h.ERR_STREAM_WRITE_AFTER_END,
                w = h.ERR_UNKNOWN_ENCODING,
                x = d.errorOrDestroy;

            function k() {}

            function S(e, t, a) { o = o || r(837), e = e || {}, "boolean" !== typeof a && (a = t instanceof o), this.objectMode = !!e.objectMode, a && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = l(this, e, "writableHighWaterMark", a), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1; var s = !1 === e.decodeStrings;
                this.decodeStrings = !s, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {! function(e, t) { var r = e._writableState,
                            i = r.sync,
                            o = r.writecb; if ("function" !== typeof o) throw new v; if (function(e) { e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0 }(r), t) ! function(e, t, r, i, o) {--t.pendingcb, r ? (n.nextTick(o, i), n.nextTick(O, e, t), e._writableState.errorEmitted = !0, x(e, i)) : (o(i), e._writableState.errorEmitted = !0, x(e, i), O(e, t)) }(e, r, i, t, o);
                        else { var a = T(r) || e.destroyed;
                            a || r.corked || r.bufferProcessing || !r.bufferedRequest || R(e, r), i ? n.nextTick(A, e, r, a, o) : A(e, r, a, o) } }(t, e) }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this) }

            function E(e) { var t = this instanceof(o = o || r(837)); if (!t && !f.call(E, this)) return new E(e);
                this._writableState = new S(e, this, t), this.writable = !0, e && ("function" === typeof e.write && (this._write = e.write), "function" === typeof e.writev && (this._writev = e.writev), "function" === typeof e.destroy && (this._destroy = e.destroy), "function" === typeof e.final && (this._final = e.final)), s.call(this) }

            function M(e, t, r, n, i, o, a) { t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new y("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1 }

            function A(e, t, r, n) { r || function(e, t) { 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")) }(e, t), t.pendingcb--, n(), O(e, t) }

            function R(e, t) { t.bufferProcessing = !0; var r = t.bufferedRequest; if (e._writev && r && r.next) { var n = t.bufferedRequestCount,
                        o = new Array(n),
                        a = t.corkedRequestsFree;
                    a.entry = r; for (var s = 0, u = !0; r;) o[s] = r, r.isBuf || (u = !1), r = r.next, s += 1;
                    o.allBuffers = u, M(e, t, !0, t.length, o, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0 } else { for (; r;) { var c = r.chunk,
                            f = r.encoding,
                            d = r.callback; if (M(e, t, !1, t.objectMode ? 1 : c.length, c, f, d), r = r.next, t.bufferedRequestCount--, t.writing) break }
                    null === r && (t.lastBufferedRequest = null) }
                t.bufferedRequest = r, t.bufferProcessing = !1 }

            function T(e) { return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing }

            function C(e, t) { e._final((function(r) { t.pendingcb--, r && x(e, r), t.prefinished = !0, e.emit("prefinish"), O(e, t) })) }

            function O(e, t) { var r = T(t); if (r && (function(e, t) { t.prefinished || t.finalCalled || ("function" !== typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, n.nextTick(C, e, t))) }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) { var i = e._readableState;
                    (!i || i.autoDestroy && i.endEmitted) && e.destroy() } return r }
            r(490)(E, s), S.prototype.getBuffer = function() { for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next; return t },
                function() { try { Object.defineProperty(S.prototype, "buffer", { get: a.deprecate((function() { return this.getBuffer() }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") }) } catch (e) {} }(), "function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (f = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, { value: function(e) { return !!f.call(this, e) || this === E && (e && e._writableState instanceof S) } })) : f = function(e) { return e instanceof this }, E.prototype.pipe = function() { x(this, new g) }, E.prototype.write = function(e, t, r) { var i, o = this._writableState,
                        a = !1,
                        s = !o.objectMode && (i = e, u.isBuffer(i) || i instanceof c); return s && !u.isBuffer(e) && (e = function(e) { return u.from(e) }(e)), "function" === typeof t && (r = t, t = null), s ? t = "buffer" : t || (t = o.defaultEncoding), "function" !== typeof r && (r = k), o.ending ? function(e, t) { var r = new _;
                        x(e, r), n.nextTick(t, r) }(this, r) : (s || function(e, t, r, i) { var o; return null === r ? o = new m : "string" === typeof r || t.objectMode || (o = new p("chunk", ["string", "Buffer"], r)), !o || (x(e, o), n.nextTick(i, o), !1) }(this, o, e, r)) && (o.pendingcb++, a = function(e, t, r, n, i, o) { if (!r) { var a = function(e, t, r) { e.objectMode || !1 === e.decodeStrings || "string" !== typeof t || (t = u.from(t, r)); return t }(t, n, i);
                            n !== a && (r = !0, i = "buffer", n = a) } var s = t.objectMode ? 1 : n.length;
                        t.length += s; var c = t.length < t.highWaterMark;
                        c || (t.needDrain = !0); if (t.writing || t.corked) { var f = t.lastBufferedRequest;
                            t.lastBufferedRequest = { chunk: n, encoding: i, isBuf: r, callback: o, next: null }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1 } else M(e, t, !1, s, n, i, o); return c }(this, o, s, e, t, r)), a }, E.prototype.cork = function() { this._writableState.corked++ }, E.prototype.uncork = function() { var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || R(this, e)) }, E.prototype.setDefaultEncoding = function(e) { if ("string" === typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new w(e); return this._writableState.defaultEncoding = e, this }, Object.defineProperty(E.prototype, "writableBuffer", { enumerable: !1, get: function() { return this._writableState && this._writableState.getBuffer() } }), Object.defineProperty(E.prototype, "writableHighWaterMark", { enumerable: !1, get: function() { return this._writableState.highWaterMark } }), E.prototype._write = function(e, t, r) { r(new b("_write()")) }, E.prototype._writev = null, E.prototype.end = function(e, t, r) { var i = this._writableState; return "function" === typeof e ? (r = e, e = null, t = null) : "function" === typeof t && (r = t, t = null), null !== e && void 0 !== e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || function(e, t, r) { t.ending = !0, O(e, t), r && (t.finished ? n.nextTick(r) : e.once("finish", r));
                        t.ended = !0, e.writable = !1 }(this, i, r), this }, Object.defineProperty(E.prototype, "writableLength", { enumerable: !1, get: function() { return this._writableState.length } }), Object.defineProperty(E.prototype, "destroyed", { enumerable: !1, get: function() { return void 0 !== this._writableState && this._writableState.destroyed }, set: function(e) { this._writableState && (this._writableState.destroyed = e) } }), E.prototype.destroy = d.destroy, E.prototype._undestroy = d.undestroy, E.prototype._destroy = function(e, t) { t(e) } }).call(this, r(147), r(246)) }, function(e, t, r) { "use strict";
        e.exports = f; var n = r(836).codes,
            i = n.ERR_METHOD_NOT_IMPLEMENTED,
            o = n.ERR_MULTIPLE_CALLBACK,
            a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
            s = n.ERR_TRANSFORM_WITH_LENGTH_0,
            u = r(837);

        function c(e, t) { var r = this._transformState;
            r.transforming = !1; var n = r.writecb; if (null === n) return this.emit("error", new o);
            r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e); var i = this._readableState;
            i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark) }

        function f(e) { if (!(this instanceof f)) return new f(e);
            u.call(this, e), this._transformState = { afterTransform: c.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" === typeof e.transform && (this._transform = e.transform), "function" === typeof e.flush && (this._flush = e.flush)), this.on("prefinish", d) }

        function d() { var e = this; "function" !== typeof this._flush || this._readableState.destroyed ? l(this, null, null) : this._flush((function(t, r) { l(e, t, r) })) }

        function l(e, t, r) { if (t) return e.emit("error", t); if (null != r && e.push(r), e._writableState.length) throw new s; if (e._transformState.transforming) throw new a; return e.push(null) }
        r(490)(f, u), f.prototype.push = function(e, t) { return this._transformState.needTransform = !1, u.prototype.push.call(this, e, t) }, f.prototype._transform = function(e, t, r) { r(new i("_transform()")) }, f.prototype._write = function(e, t, r) { var n = this._transformState; if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) { var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark) } }, f.prototype._read = function(e) { var t = this._transformState;
            null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) }, f.prototype._destroy = function(e, t) { u.prototype._destroy.call(this, e, (function(e) { t(e) })) } }, function(e, t, r) { var n = r(490),
            i = r(838),
            o = r(799).Buffer,
            a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            s = new Array(64);

        function u() { this.init(), this._w = s, i.call(this, 64, 56) }

        function c(e, t, r) { return r ^ e & (t ^ r) }

        function f(e, t, r) { return e & t | r & (e | t) }

        function d(e) { return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10) }

        function l(e) { return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7) }

        function h(e) { return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3 }
        n(u, i), u.prototype.init = function() { return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this }, u.prototype._update = function(e) { for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, u = 0 | this._e, p = 0 | this._f, b = 0 | this._g, v = 0 | this._h, g = 0; g < 16; ++g) r[g] = e.readInt32BE(4 * g); for (; g < 64; ++g) r[g] = 0 | (((t = r[g - 2]) >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10) + r[g - 7] + h(r[g - 15]) + r[g - 16]; for (var y = 0; y < 64; ++y) { var m = v + l(u) + c(u, p, b) + a[y] + r[y] | 0,
                    _ = d(n) + f(n, i, o) | 0;
                v = b, b = p, p = u, u = s + m | 0, s = o, o = i, i = n, n = m + _ | 0 }
            this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = u + this._e | 0, this._f = p + this._f | 0, this._g = b + this._g | 0, this._h = v + this._h | 0 }, u.prototype._hash = function() { var e = o.allocUnsafe(32); return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e }, e.exports = u }, function(e, t, r) { var n = r(490),
            i = r(838),
            o = r(799).Buffer,
            a = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
            s = new Array(160);

        function u() { this.init(), this._w = s, i.call(this, 128, 112) }

        function c(e, t, r) { return r ^ e & (t ^ r) }

        function f(e, t, r) { return e & t | r & (e | t) }

        function d(e, t) { return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25) }

        function l(e, t) { return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23) }

        function h(e, t) { return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7 }

        function p(e, t) { return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25) }

        function b(e, t) { return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6 }

        function v(e, t) { return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26) }

        function g(e, t) { return e >>> 0 < t >>> 0 ? 1 : 0 }
        n(u, i), u.prototype.init = function() { return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this }, u.prototype._update = function(e) { for (var t = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, u = 0 | this._fh, y = 0 | this._gh, m = 0 | this._hh, _ = 0 | this._al, w = 0 | this._bl, x = 0 | this._cl, k = 0 | this._dl, S = 0 | this._el, E = 0 | this._fl, M = 0 | this._gl, A = 0 | this._hl, R = 0; R < 32; R += 2) t[R] = e.readInt32BE(4 * R), t[R + 1] = e.readInt32BE(4 * R + 4); for (; R < 160; R += 2) { var T = t[R - 30],
                    C = t[R - 30 + 1],
                    O = h(T, C),
                    P = p(C, T),
                    I = b(T = t[R - 4], C = t[R - 4 + 1]),
                    B = v(C, T),
                    L = t[R - 14],
                    j = t[R - 14 + 1],
                    N = t[R - 32],
                    q = t[R - 32 + 1],
                    U = P + j | 0,
                    D = O + L + g(U, P) | 0;
                D = (D = D + I + g(U = U + B | 0, B) | 0) + N + g(U = U + q | 0, q) | 0, t[R] = D, t[R + 1] = U } for (var H = 0; H < 160; H += 2) { D = t[H], U = t[H + 1]; var z = f(r, n, i),
                    F = f(_, w, x),
                    K = d(r, _),
                    W = d(_, r),
                    V = l(s, S),
                    J = l(S, s),
                    Y = a[H],
                    G = a[H + 1],
                    Z = c(s, u, y),
                    X = c(S, E, M),
                    $ = A + J | 0,
                    Q = m + V + g($, A) | 0;
                Q = (Q = (Q = Q + Z + g($ = $ + X | 0, X) | 0) + Y + g($ = $ + G | 0, G) | 0) + D + g($ = $ + U | 0, U) | 0; var ee = W + F | 0,
                    te = K + z + g(ee, W) | 0;
                m = y, A = M, y = u, M = E, u = s, E = S, s = o + Q + g(S = k + $ | 0, k) | 0, o = i, k = x, i = n, x = w, n = r, w = _, r = Q + te + g(_ = $ + ee | 0, $) | 0 }
            this._al = this._al + _ | 0, this._bl = this._bl + w | 0, this._cl = this._cl + x | 0, this._dl = this._dl + k | 0, this._el = this._el + S | 0, this._fl = this._fl + E | 0, this._gl = this._gl + M | 0, this._hl = this._hl + A | 0, this._ah = this._ah + r + g(this._al, _) | 0, this._bh = this._bh + n + g(this._bl, w) | 0, this._ch = this._ch + i + g(this._cl, x) | 0, this._dh = this._dh + o + g(this._dl, k) | 0, this._eh = this._eh + s + g(this._el, S) | 0, this._fh = this._fh + u + g(this._fl, E) | 0, this._gh = this._gh + y + g(this._gl, M) | 0, this._hh = this._hh + m + g(this._hl, A) | 0 }, u.prototype._hash = function() { var e = o.allocUnsafe(64);

            function t(t, r, n) { e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4) } return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e }, e.exports = u }, function(e, t) { e.exports = function(e) { if ("string" !== typeof e) throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof e + ", while checking isHexPrefixed."); return "0x" === e.slice(0, 2) } }, function(e, t, r) { "use strict"; var n = function(e, t) { return function() { for (var r = this, n = t.promiseModule, i = new Array(arguments.length), o = 0; o < arguments.length; o++) i[o] = arguments[o]; return new n((function(n, o) { t.errorFirst ? i.push((function(e, r) { if (t.multiArgs) { for (var i = new Array(arguments.length - 1), a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                            e ? (i.unshift(e), o(i)) : n(i) } else e ? o(e) : n(r) })) : i.push((function(e) { if (t.multiArgs) { for (var r = new Array(arguments.length - 1), i = 0; i < arguments.length; i++) r[i] = arguments[i];
                            n(r) } else n(e) })), e.apply(r, i) })) } };
        e.exports = function(e, t) { t = Object.assign({ exclude: [/.+(Sync|Stream)$/], errorFirst: !0, promiseModule: Promise }, t); var r, i = function(e) { var r = function(t) { return "string" === typeof t ? e === t : t.test(e) }; return t.include ? t.include.some(r) : !t.exclude.some(r) }; for (var o in r = "function" === typeof e ? function() { return t.excludeMain ? e.apply(this, arguments) : n(e, t).apply(this, arguments) } : Object.create(Object.getPrototypeOf(e)), e) { var a = e[o];
                r[o] = "function" === typeof a && i(o) ? n(a, t) : a } return r } }, function(e, t, r) { var n = r(1406);

        function i(t, r, o) { return "undefined" !== typeof Reflect && Reflect.get ? e.exports = i = Reflect.get : e.exports = i = function(e, t, r) { var i = n(e, t); if (i) { var o = Object.getOwnPropertyDescriptor(i, t); return o.get ? o.get.call(r) : o.value } }, i(t, r, o || t) }
        e.exports = i }, function(e, t, r) { var n = r(832),
            i = r(1407)();

        function o(e) { this.currentProvider = e }

        function a(e) { return function() { var t = this,
                    r = [].slice.call(arguments),
                    n = r.pop();
                t.sendAsync({ method: e, params: r }, n) } }

        function s(e, t) { return function() { var r = this,
                    n = [].slice.call(arguments),
                    i = n.pop();
                n.length < e && n.push("latest"), r.sendAsync({ method: t, params: n }, i) } }
        e.exports = o, o.prototype.getBalance = s(2, "eth_getBalance"), o.prototype.getCode = s(2, "eth_getCode"), o.prototype.getTransactionCount = s(2, "eth_getTransactionCount"), o.prototype.getStorageAt = s(3, "eth_getStorageAt"), o.prototype.call = s(2, "eth_call"), o.prototype.protocolVersion = a("eth_protocolVersion"), o.prototype.syncing = a("eth_syncing"), o.prototype.coinbase = a("eth_coinbase"), o.prototype.mining = a("eth_mining"), o.prototype.hashrate = a("eth_hashrate"), o.prototype.gasPrice = a("eth_gasPrice"), o.prototype.accounts = a("eth_accounts"), o.prototype.blockNumber = a("eth_blockNumber"), o.prototype.getBlockTransactionCountByHash = a("eth_getBlockTransactionCountByHash"), o.prototype.getBlockTransactionCountByNumber = a("eth_getBlockTransactionCountByNumber"), o.prototype.getUncleCountByBlockHash = a("eth_getUncleCountByBlockHash"), o.prototype.getUncleCountByBlockNumber = a("eth_getUncleCountByBlockNumber"), o.prototype.sign = a("eth_sign"), o.prototype.sendTransaction = a("eth_sendTransaction"), o.prototype.sendRawTransaction = a("eth_sendRawTransaction"), o.prototype.estimateGas = a("eth_estimateGas"), o.prototype.getBlockByHash = a("eth_getBlockByHash"), o.prototype.getBlockByNumber = a("eth_getBlockByNumber"), o.prototype.getTransactionByHash = a("eth_getTransactionByHash"), o.prototype.getTransactionByBlockHashAndIndex = a("eth_getTransactionByBlockHashAndIndex"), o.prototype.getTransactionByBlockNumberAndIndex = a("eth_getTransactionByBlockNumberAndIndex"), o.prototype.getTransactionReceipt = a("eth_getTransactionReceipt"), o.prototype.getUncleByBlockHashAndIndex = a("eth_getUncleByBlockHashAndIndex"), o.prototype.getUncleByBlockNumberAndIndex = a("eth_getUncleByBlockNumberAndIndex"), o.prototype.getCompilers = a("eth_getCompilers"), o.prototype.compileLLL = a("eth_compileLLL"), o.prototype.compileSolidity = a("eth_compileSolidity"), o.prototype.compileSerpent = a("eth_compileSerpent"), o.prototype.newFilter = a("eth_newFilter"), o.prototype.newBlockFilter = a("eth_newBlockFilter"), o.prototype.newPendingTransactionFilter = a("eth_newPendingTransactionFilter"), o.prototype.uninstallFilter = a("eth_uninstallFilter"), o.prototype.getFilterChanges = a("eth_getFilterChanges"), o.prototype.getFilterLogs = a("eth_getFilterLogs"), o.prototype.getLogs = a("eth_getLogs"), o.prototype.getWork = a("eth_getWork"), o.prototype.submitWork = a("eth_submitWork"), o.prototype.submitHashrate = a("eth_submitHashrate"), o.prototype.sendAsync = function(e, t) { var r;
            this.currentProvider.sendAsync((r = e, n({ id: i(), jsonrpc: "2.0", params: [] }, r)), (function(e, r) { if (!e && r.error && (e = new Error("EthQuery - RPC Error - " + r.error.message)), e) return t(e);
                t(null, r.result) })) } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, r) {
            ((0, n.default)(e) ? l : h)(e, (0, f.default)(t), r) }; var n = d(r(190)),
            i = d(r(1071)),
            o = d(r(1411)),
            a = d(r(1073)),
            s = d(r(316)),
            u = d(r(934)),
            c = d(r(935)),
            f = d(r(827));

        function d(e) { return e && e.__esModule ? e : { default: e } }

        function l(e, t, r) { r = (0, u.default)(r || s.default); var n = 0,
                o = 0,
                a = e.length;

            function f(e, t) { e ? r(e) : ++o !== a && t !== i.default || r(null) } for (0 === a && r(null); n < a; n++) t(e[n], n, (0, c.default)(f)) } var h = (0, a.default)(o.default, 1 / 0);
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = {}, e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { return function(t, r, u) { if (u = (0, i.default)(u || n.default), e <= 0 || !t) return u(null); var c = (0, o.default)(t),
                    f = !1,
                    d = 0,
                    l = !1;

                function h(e, t) { if (d -= 1, e) f = !0, u(e);
                    else { if (t === s.default || f && d <= 0) return f = !0, u(null);
                        l || p() } }

                function p() { for (l = !0; d < e && !f;) { var t = c(); if (null === t) return f = !0, void(d <= 0 && u(null));
                        d += 1, r(t.value, t.key, (0, a.default)(h)) }
                    l = !1 }
                p() } }; var n = u(r(316)),
            i = u(r(934)),
            o = u(r(1412)),
            a = u(r(935)),
            s = u(r(1071));

        function u(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) { return function(r, n, i) { return e(r, t, n, i) } }, e.exports = t.default }, function(e, t, r) { var n = r(1075);

        function i(e) { return "never" !== s(e) }

        function o(e) { var t = a(e); return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t) }

        function a(e) { switch (e.method) {
                case "eth_getStorageAt":
                    return 2;
                case "eth_getBalance":
                case "eth_getCode":
                case "eth_getTransactionCount":
                case "eth_call":
                case "eth_estimateGas":
                    return 1;
                case "eth_getBlockByNumber":
                    return 0;
                default:
                    return } }

        function s(e) { switch (e.method) {
                case "web3_clientVersion":
                case "web3_sha3":
                case "eth_protocolVersion":
                case "eth_getBlockTransactionCountByHash":
                case "eth_getUncleCountByBlockHash":
                case "eth_getCode":
                case "eth_getBlockByHash":
                case "eth_getTransactionByHash":
                case "eth_getTransactionByBlockHashAndIndex":
                case "eth_getTransactionReceipt":
                case "eth_getUncleByBlockHashAndIndex":
                case "eth_getCompilers":
                case "eth_compileLLL":
                case "eth_compileSolidity":
                case "eth_compileSerpent":
                case "shh_version":
                    return "perma";
                case "eth_getBlockByNumber":
                case "eth_getBlockTransactionCountByNumber":
                case "eth_getUncleCountByBlockNumber":
                case "eth_getTransactionByBlockNumberAndIndex":
                case "eth_getUncleByBlockNumberAndIndex":
                    return "fork";
                case "eth_gasPrice":
                case "eth_getBalance":
                case "eth_getStorageAt":
                case "eth_getTransactionCount":
                case "eth_call":
                case "eth_estimateGas":
                case "eth_getFilterLogs":
                case "eth_getLogs":
                case "eth_blockNumber":
                    return "block";
                case "net_version":
                case "net_peerCount":
                case "net_listening":
                case "eth_syncing":
                case "eth_sign":
                case "eth_coinbase":
                case "eth_mining":
                case "eth_hashrate":
                case "eth_accounts":
                case "eth_sendTransaction":
                case "eth_sendRawTransaction":
                case "eth_newFilter":
                case "eth_newBlockFilter":
                case "eth_newPendingTransactionFilter":
                case "eth_uninstallFilter":
                case "eth_getFilterChanges":
                case "eth_getWork":
                case "eth_submitWork":
                case "eth_submitHashrate":
                case "db_putString":
                case "db_getString":
                case "db_putHex":
                case "db_getHex":
                case "shh_post":
                case "shh_newIdentity":
                case "shh_hasIdentity":
                case "shh_newGroup":
                case "shh_addToGroup":
                case "shh_newFilter":
                case "shh_uninstallFilter":
                case "shh_getFilterChanges":
                case "shh_getMessages":
                    return "never" } }
        e.exports = { cacheIdentifierForPayload: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!i(e)) return null; var r = t.includeBlockRef,
                    a = r ? e.params : o(e); return e.method + ":" + n(a) }, canCache: i, blockTagForPayload: function(e) { var t = a(e); if (t >= e.params.length) return null; return e.params[t] }, paramsWithoutBlockTag: o, blockTagParamIndex: a, cacheTypeForPayload: s } }, function(e, t, r) { var n = "undefined" !== typeof JSON ? JSON : r(1422);
        e.exports = function(e, t) { t || (t = {}), "function" === typeof t && (t = { cmp: t }); var r = t.space || ""; "number" === typeof r && (r = Array(r + 1).join(" ")); var a, s = "boolean" === typeof t.cycles && t.cycles,
                u = t.replacer || function(e, t) { return t },
                c = t.cmp && (a = t.cmp, function(e) { return function(t, r) { var n = { key: t, value: e[t] },
                            i = { key: r, value: e[r] }; return a(n, i) } }),
                f = []; return function e(t, a, d, l) { var h = r ? "\n" + new Array(l + 1).join(r) : "",
                    p = r ? ": " : ":"; if (d && d.toJSON && "function" === typeof d.toJSON && (d = d.toJSON()), void 0 !== (d = u.call(t, a, d))) { if ("object" !== typeof d || null === d) return n.stringify(d); if (i(d)) { for (var b = [], v = 0; v < d.length; v++) { var g = e(d, v, d[v], l + 1) || n.stringify(null);
                            b.push(h + r + g) } return "[" + b.join(",") + h + "]" } if (-1 !== f.indexOf(d)) { if (s) return n.stringify("__cycle__"); throw new TypeError("Converting circular structure to JSON") }
                    f.push(d); var y = o(d).sort(c && c(d)); for (b = [], v = 0; v < y.length; v++) { var m = e(d, a = y[v], d[a], l + 1); if (m) { var _ = n.stringify(a) + p + m;
                            b.push(h + r + _) } } return f.splice(f.indexOf(d), 1), "{" + b.join(",") + h + "}" } }({ "": e }, "", e, 0) }; var i = Array.isArray || function(e) { return "[object Array]" === {}.toString.call(e) },
            o = Object.keys || function(e) { var t = Object.prototype.hasOwnProperty || function() { return !0 },
                    r = []; for (var n in e) t.call(e, n) && r.push(n); return r } }, function(e, t, r) { var n = r(3),
            i = r(798),
            o = r(1485).Mutex,
            a = r(1077).createAsyncMiddleware,
            s = r(1081),
            u = r(1443),
            c = r(1446),
            f = r(1447),
            d = r(859),
            l = d.intToHex,
            h = d.hexToInt;

        function p(e) { return b(i(n.mark((function t() { var r, i, o = arguments; return n.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, e.apply(void 0, o);
                        case 2:
                            return r = t.sent, i = l(r.id), t.abrupt("return", i);
                        case 5:
                        case "end":
                            return t.stop() } }), t) })))) }

        function b(e) { return a(function() { var t = i(n.mark((function t(r, i) { var o; return n.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.apply(null, r.params);
                            case 2:
                                o = t.sent, i.result = o;
                            case 4:
                            case "end":
                                return t.stop() } }), t) }))); return function(e, r) { return t.apply(this, arguments) } }()) }

        function v(e, t) { var r = []; for (var n in e) r.push(e[n]); return r }
        e.exports = function(e) { var t = e.blockTracker,
                r = e.provider,
                a = 0,
                d = {},
                g = new o,
                y = function(e) { var t = e.mutex; return function(e) { return function() { var r = i(n.mark((function r(i, o, a, s) { return n.wrap((function(r) { for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, t.acquire();
                                        case 2:
                                            (0, r.sent)(), e(i, o, a, s);
                                        case 5:
                                        case "end":
                                            return r.stop() } }), r) }))); return function(e, t, n, i) { return r.apply(this, arguments) } }() } }({ mutex: g }),
                m = s({ eth_newFilter: y(p(w)), eth_newBlockFilter: y(p(k)), eth_newPendingTransactionFilter: y(p(E)), eth_uninstallFilter: y(b(O)), eth_getFilterChanges: y(b(A)), eth_getFilterLogs: y(b(T)) }),
                _ = function() { var e = i(n.mark((function e(t) { var r, o, a; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.oldBlock, o = t.newBlock, 0 !== d.length) { e.next = 3; break } return e.abrupt("return");
                                case 3:
                                    return e.next = 5, g.acquire();
                                case 5:
                                    return a = e.sent, e.prev = 6, e.next = 9, Promise.all(v(d).map(function() { var e = i(n.mark((function e(t) { return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, e.next = 3, t.update({ oldBlock: r, newBlock: o });
                                                    case 3:
                                                        e.next = 8; break;
                                                    case 5:
                                                        e.prev = 5, e.t0 = e.catch(0), console.error(e.t0);
                                                    case 8:
                                                    case "end":
                                                        return e.stop() } }), e, null, [
                                                [0, 5]
                                            ]) }))); return function(t) { return e.apply(this, arguments) } }()));
                                case 9:
                                    e.next = 14; break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(6), console.error(e.t0);
                                case 14:
                                    a();
                                case 15:
                                case "end":
                                    return e.stop() } }), e, null, [
                            [6, 11]
                        ]) }))); return function(t) { return e.apply(this, arguments) } }(); return m.newLogFilter = w, m.newBlockFilter = k, m.newPendingTransactionFilter = E, m.uninstallFilter = O, m.getFilterChanges = A, m.getFilterLogs = T, m.destroy = function() {! function() { N.apply(this, arguments) }() }, m;

            function w(e) { return x.apply(this, arguments) }

            function x() { return (x = i(n.mark((function e(t) { var i; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = new u({ provider: r, params: t }), e.next = 3, I(i);
                            case 3:
                                return e.sent, e.abrupt("return", i);
                            case 5:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function k() { return S.apply(this, arguments) }

            function S() { return (S = i(n.mark((function e() { var t; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = new c({ provider: r }), e.next = 3, I(t);
                            case 3:
                                return e.sent, e.abrupt("return", t);
                            case 5:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function E() { return M.apply(this, arguments) }

            function M() { return (M = i(n.mark((function e() { var t; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = new f({ provider: r }), e.next = 3, I(t);
                            case 3:
                                return e.sent, e.abrupt("return", t);
                            case 5:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function A(e) { return R.apply(this, arguments) }

            function R() { return (R = i(n.mark((function e(t) { var r, i, o; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = h(t), i = d[r]) { e.next = 4; break } throw new Error('No filter for index "'.concat(r, '"'));
                            case 4:
                                return o = i.getChangesAndClear(), e.abrupt("return", o);
                            case 6:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function T(e) { return C.apply(this, arguments) }

            function C() { return (C = i(n.mark((function e(t) { var r, i; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = h(t), i = d[r]) { e.next = 4; break } throw new Error('No filter for index "'.concat(r, '"'));
                            case 4:
                                return "log" === i.type ? results = i.getAllResults() : results = [], e.abrupt("return", results);
                            case 6:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function O(e) { return P.apply(this, arguments) }

            function P() { return (P = i(n.mark((function e(t) { var r, i, o; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = h(t), i = d[r], !(o = Boolean(i))) { e.next = 6; break } return e.next = 6, L(r);
                            case 6:
                                return e.abrupt("return", o);
                            case 7:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function I(e) { return B.apply(this, arguments) }

            function B() { return (B = i(n.mark((function e(r) { var i, o, s; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = v(d).length, e.next = 3, t.getLatestBlock();
                            case 3:
                                return o = e.sent, e.next = 6, r.initialize({ currentBlock: o });
                            case 6:
                                return a++, d[a] = r, r.id = a, r.idHex = l(a), s = v(d).length, q({ prevFilterCount: i, newFilterCount: s }), e.abrupt("return", a);
                            case 13:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function L(e) { return j.apply(this, arguments) }

            function j() { return (j = i(n.mark((function e(t) { var r, i; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                r = v(d).length, delete d[t], i = v(d).length, q({ prevFilterCount: r, newFilterCount: i });
                            case 4:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function N() { return (N = i(n.mark((function e() { var t; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                t = v(d).length, d = {}, q({ prevFilterCount: t, newFilterCount: 0 });
                            case 3:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function q(e) { var r = e.prevFilterCount,
                    n = e.newFilterCount;
                0 === r && n > 0 ? t.on("sync", _) : r > 0 && 0 === n && t.removeListener("sync", _) } } }, function(e, t, r) { "use strict"; var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) { void 0 === n && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() { return t[r] } }) } : function(e, t, r, n) { void 0 === n && (n = r), e[n] = t[r] }),
            i = this && this.__exportStar || function(e, t) { for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r) };
        Object.defineProperty(t, "__esModule", { value: !0 }), i(r(1432), t), i(r(1433), t), i(r(1434), t), i(r(1078), t), i(r(1079), t), i(r(1441), t) }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getUniqueId = void 0; var n = 4294967295,
            i = Math.floor(Math.random() * n);
        t.getUniqueId = function() { return i = (i + 1) % n } }, function(e, t, r) { "use strict"; var n = r(158),
            i = r(3),
            o = r(377),
            a = r(798),
            s = r(247),
            u = r(249),
            c = r(794),
            f = r(795),
            d = this && this.__importDefault || function(e) { return e && e.__esModule ? e : { default: e } };
        Object.defineProperty(t, "__esModule", { value: !0 }), t.JsonRpcEngine = void 0; var l = d(r(938)),
            h = r(1435),
            p = function(e) { c(r, e); var t = f(r);

                function r() { var e; return s(this, r), (e = t.call(this))._middleware = [], e } return u(r, [{ key: "push", value: function(e) { this._middleware.push(e) } }, { key: "handle", value: function(e, t) { if (t && "function" !== typeof t) throw new Error('"callback" must be a function if provided.'); return Array.isArray(e) ? t ? this._handleBatch(e, t) : this._handleBatch(e) : t ? this._handle(e, t) : this._promiseHandle(e) } }, { key: "asMiddleware", value: function() { var e = this; return function() { var t = a(i.mark((function t(n, s, u, c) { var f, d, l, h, p; return i.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, r._runAllMiddleware(n, s, e._middleware);
                                        case 3:
                                            if (f = t.sent, d = o(f, 3), l = d[0], h = d[1], p = d[2], !h) { t.next = 12; break } return t.next = 11, r._runReturnHandlers(p);
                                        case 11:
                                            return t.abrupt("return", c(l));
                                        case 12:
                                            return t.abrupt("return", u(function() { var e = a(i.mark((function e(t) { return i.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.prev = 0, e.next = 3, r._runReturnHandlers(p);
                                                            case 3:
                                                                e.next = 8; break;
                                                            case 5:
                                                                return e.prev = 5, e.t0 = e.catch(0), e.abrupt("return", t(e.t0));
                                                            case 8:
                                                                return e.abrupt("return", t());
                                                            case 9:
                                                            case "end":
                                                                return e.stop() } }), e, null, [
                                                        [0, 5]
                                                    ]) }))); return function(t) { return e.apply(this, arguments) } }()));
                                        case 15:
                                            return t.prev = 15, t.t0 = t.catch(0), t.abrupt("return", c(t.t0));
                                        case 18:
                                        case "end":
                                            return t.stop() } }), t, null, [
                                    [0, 15]
                                ]) }))); return function(e, r, n, i) { return t.apply(this, arguments) } }() } }, { key: "_handleBatch", value: function() { var e = a(i.mark((function e(t, r) { var n; return i.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Promise.all(t.map(this._promiseHandle.bind(this)));
                                    case 3:
                                        if (n = e.sent, !r) { e.next = 6; break } return e.abrupt("return", r(null, n));
                                    case 6:
                                        return e.abrupt("return", n);
                                    case 9:
                                        if (e.prev = 9, e.t0 = e.catch(0), !r) { e.next = 13; break } return e.abrupt("return", r(e.t0));
                                    case 13:
                                        throw e.t0;
                                    case 14:
                                    case "end":
                                        return e.stop() } }), e, this, [
                                [0, 9]
                            ]) }))); return function(t, r) { return e.apply(this, arguments) } }() }, { key: "_promiseHandle", value: function(e) { var t = this; return new Promise((function(r) { t._handle(e, (function(e, t) { r(t) })) })) } }, { key: "_handle", value: function() { var e = a(i.mark((function e(t, r) { var n, o, a, s, u; return i.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t && !Array.isArray(t) && "object" === typeof t) { e.next = 3; break } return n = new h.EthereumRpcError(h.errorCodes.rpc.invalidRequest, "Requests must be plain objects. Received: ".concat(typeof t), { request: t }), e.abrupt("return", r(n, { id: void 0, jsonrpc: "2.0", error: n }));
                                    case 3:
                                        if ("string" === typeof t.method) { e.next = 6; break } return o = new h.EthereumRpcError(h.errorCodes.rpc.invalidRequest, "Must specify a string method. Received: ".concat(typeof t.method), { request: t }), e.abrupt("return", r(o, { id: t.id, jsonrpc: "2.0", error: o }));
                                    case 6:
                                        return a = Object.assign({}, t), s = { id: a.id, jsonrpc: a.jsonrpc }, u = null, e.prev = 9, e.next = 12, this._processRequest(a, s);
                                    case 12:
                                        e.next = 17; break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(9), u = e.t0;
                                    case 17:
                                        return u && (delete s.result, s.error || (s.error = h.serializeError(u))), e.abrupt("return", r(u, s));
                                    case 19:
                                    case "end":
                                        return e.stop() } }), e, this, [
                                [9, 14]
                            ]) }))); return function(t, r) { return e.apply(this, arguments) } }() }, { key: "_processRequest", value: function() { var e = a(i.mark((function e(t, n) { var a, s, u, c, f; return i.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r._runAllMiddleware(t, n, this._middleware);
                                    case 2:
                                        return a = e.sent, s = o(a, 3), u = s[0], c = s[1], f = s[2], r._checkForCompletion(t, n, c), e.next = 10, r._runReturnHandlers(f);
                                    case 10:
                                        if (!u) { e.next = 12; break } throw u;
                                    case 12:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t, r) { return e.apply(this, arguments) } }() }], [{ key: "_runAllMiddleware", value: function() { var e = a(i.mark((function e(t, a, s) { var u, c, f, d, l, h, p, b; return i.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        u = [], c = null, f = !1, d = n(s), e.prev = 4, d.s();
                                    case 6:
                                        if ((l = d.n()).done) { e.next = 18; break } return h = l.value, e.next = 10, r._runMiddleware(t, a, h, u);
                                    case 10:
                                        if (p = e.sent, b = o(p, 2), c = b[0], !(f = b[1])) { e.next = 16; break } return e.abrupt("break", 18);
                                    case 16:
                                        e.next = 6; break;
                                    case 18:
                                        e.next = 23; break;
                                    case 20:
                                        e.prev = 20, e.t0 = e.catch(4), d.e(e.t0);
                                    case 23:
                                        return e.prev = 23, d.f(), e.finish(23);
                                    case 26:
                                        return e.abrupt("return", [c, f, u.reverse()]);
                                    case 27:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [4, 20, 23, 26]
                            ]) }))); return function(t, r, n) { return e.apply(this, arguments) } }() }, { key: "_runMiddleware", value: function(e, t, r, n) { return new Promise((function(i) { var o = function(e) { var r = e || t.error;
                                r && (t.error = h.serializeError(r)), i([r, !0]) }; try { r(e, t, (function(r) { t.error ? o(t.error) : (r && ("function" !== typeof r && o(new h.EthereumRpcError(h.errorCodes.rpc.internal, 'JsonRpcEngine: "next" return handlers must be functions. ' + 'Received "'.concat(typeof r, '" for request:\n').concat(b(e)), { request: e })), n.push(r)), i([null, !1])) }), o) } catch (a) { o(a) } })) } }, { key: "_runReturnHandlers", value: function() { var e = a(i.mark((function e(t) { var r, o, a; return i.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r = n(t), e.prev = 1, a = i.mark((function e() { var t; return i.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return t = o.value, e.next = 3, new Promise((function(e, r) { t((function(t) { return t ? r(t) : e() })) }));
                                                    case 3:
                                                    case "end":
                                                        return e.stop() } }), e) })), r.s();
                                    case 4:
                                        if ((o = r.n()).done) { e.next = 8; break } return e.delegateYield(a(), "t0", 6);
                                    case 6:
                                        e.next = 4; break;
                                    case 8:
                                        e.next = 13; break;
                                    case 10:
                                        e.prev = 10, e.t1 = e.catch(1), r.e(e.t1);
                                    case 13:
                                        return e.prev = 13, r.f(), e.finish(13);
                                    case 16:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [1, 10, 13, 16]
                            ]) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "_checkForCompletion", value: function(e, t, r) { if (!("result" in t) && !("error" in t)) throw new h.EthereumRpcError(h.errorCodes.rpc.internal, "JsonRpcEngine: Response has no error or result for request:\n".concat(b(e)), { request: e }); if (!r) throw new h.EthereumRpcError(h.errorCodes.rpc.internal, "JsonRpcEngine: Nothing ended request:\n".concat(b(e)), { request: e }) } }]), r }(l.default);

        function b(e) { return JSON.stringify(e, null, 2) }
        t.JsonRpcEngine = p }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0; var n = r(940),
            i = r(939),
            o = n.errorCodes.rpc.internal,
            a = "Unspecified error message. This is a bug, please report it.",
            s = { code: o, message: u(o) };

        function u(e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a; if (Number.isInteger(e)) { var i = e.toString(); if (l(n.errorValues, i)) return n.errorValues[i].message; if (f(e)) return t.JSON_RPC_SERVER_ERROR_MESSAGE } return r }

        function c(e) { if (!Number.isInteger(e)) return !1; var t = e.toString(); return !!n.errorValues[t] || !!f(e) }

        function f(e) { return e >= -32099 && e <= -32e3 }

        function d(e) { return e && "object" === typeof e && !Array.isArray(e) ? Object.assign({}, e) : e }

        function l(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
        t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", t.getMessageFromCode = u, t.isValidCode = c, t.serializeError = function(e) { var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = n.fallbackError,
                a = void 0 === o ? s : o,
                f = n.shouldIncludeStack,
                h = void 0 !== f && f; if (!a || !Number.isInteger(a.code) || "string" !== typeof a.message) throw new Error("Must provide fallback error with integer number code and string message."); if (e instanceof i.EthereumRpcError) return e.serialize(); var p = {}; if (e && "object" === typeof e && !Array.isArray(e) && l(e, "code") && c(e.code)) { var b = e;
                p.code = b.code, b.message && "string" === typeof b.message ? (p.message = b.message, l(b, "data") && (p.data = b.data)) : (p.message = u(p.code), p.data = { originalError: d(e) }) } else { p.code = a.code; var v = null === (t = e) || void 0 === t ? void 0 : t.message;
                p.message = v && "string" === typeof v ? v : a.message, p.data = { originalError: d(e) } } var g = null === (r = e) || void 0 === r ? void 0 : r.stack; return h && e && g && "string" === typeof g && (p.stack = g), p } }, function(e, t, r) { e.exports = r(1442) }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getWindowMetadata = void 0; var n = r(1016);
        t.getWindowMetadata = function() { var e, t; try { e = n.getDocumentOrThrow(), t = n.getLocationOrThrow() } catch (o) { return null }

            function r() { for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]; for (var i = e.getElementsByTagName("meta"), o = function(e) { var t = i[e],
                            n = ["itemprop", "property", "name"].map((function(e) { return t.getAttribute(e) })).filter((function(e) { return !!e && r.includes(e) })); if (n.length && n) { var o = t.getAttribute("content"); if (o) return { v: o } } }, a = 0; a < i.length; a++) { var s = o(a); if ("object" === typeof s) return s.v } return "" } var i = function() { var t = r("name", "og:site_name", "og:title", "twitter:title"); return t || (t = e.title), t }(); return { description: r("description", "og:description", "twitter:description", "keywords"), url: t.origin, icons: function() { for (var r = e.getElementsByTagName("link"), n = [], i = 0; i < r.length; i++) { var o = r[i],
                            a = o.getAttribute("rel"); if (a && a.toLowerCase().indexOf("icon") > -1) { var s = o.getAttribute("href"); if (s)
                                if (-1 === s.toLowerCase().indexOf("https:") && -1 === s.toLowerCase().indexOf("http:") && 0 !== s.indexOf("//")) { var u = t.protocol + "//" + t.host; if (0 === s.indexOf("/")) u += s;
                                    else { var c = t.pathname.split("/");
                                        c.pop(), u += c.join("/") + "/" + s }
                                    n.push(u) } else if (0 === s.indexOf("//")) { var f = t.protocol + s;
                                n.push(f) } else n.push(s) } } return n }(), name: i } } }, function(e, t, r) { "use strict";
        (function(e) { r.d(t, "a", (function() { return l })); var n = function() { for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length; var n = Array(e),
                        i = 0; for (t = 0; t < r; t++)
                        for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a]; return n },
                i = function(e, t, r) { this.name = e, this.version = t, this.os = r, this.type = "browser" },
                o = function(t) { this.version = t, this.type = "node", this.name = "node", this.os = e.platform },
                a = function(e, t, r, n) { this.name = e, this.version = t, this.os = r, this.bot = n, this.type = "bot-device" },
                s = function() { this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null },
                u = function() { this.type = "react-native", this.name = "react-native", this.version = null, this.os = null },
                c = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                f = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FBAV\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                d = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function l(t) { return t ? p(t) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new u : "undefined" !== typeof navigator ? p(navigator.userAgent) : "undefined" !== typeof e && e.version ? new o(e.version.slice(1)) : null }

            function h(e) { return "" !== e && f.reduce((function(t, r) { var n = r[0],
                        i = r[1]; if (t) return t; var o = i.exec(e); return !!o && [n, o] }), !1) }

            function p(e) { var t = h(e); if (!t) return null; var r = t[0],
                    o = t[1]; if ("searchbot" === r) return new s; var u = o[1] && o[1].split(/[._]/).slice(0, 3);
                u ? u.length < 3 && (u = n(u, function(e) { for (var t = [], r = 0; r < e; r++) t.push("0"); return t }(3 - u.length))) : u = []; var f = u.join("."),
                    l = function(e) { for (var t = 0, r = d.length; t < r; t++) { var n = d[t],
                                i = n[0]; if (n[1].exec(e)) return i } return null }(e),
                    p = c.exec(e); return p && p[1] ? new a(r, f, l, p[1]) : new i(r, f, l) } }).call(this, r(246)) }, function(e, t, r) {
        (function(e) {! function(e, t) { "use strict";

                function n(e, t) { if (!e) throw new Error(t || "Assertion failed") }

                function i(e, t) { e.super_ = t; var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e }

                function o(e, t, r) { if (o.isBN(e)) return e;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be")) } var a; "object" === typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26; try { a = r(1286).Buffer } catch (S) {}

                function s(e, t, r) { for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) { var a = e.charCodeAt(o) - 48;
                        n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a } return n }

                function u(e, t, r, n) { for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) { var s = e.charCodeAt(a) - 48;
                        i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s } return i }
                o.isBN = function(e) { return e instanceof o || null !== e && "object" === typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words) }, o.max = function(e, t) { return e.cmp(t) > 0 ? e : t }, o.min = function(e, t) { return e.cmp(t) < 0 ? e : t }, o.prototype._init = function(e, t, r) { if ("number" === typeof e) return this._initNumber(e, t, r); if ("object" === typeof e) return this._initArray(e, t, r); "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36); var i = 0; "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), t, r) }, o.prototype._initNumber = function(e, t, r) { e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r) }, o.prototype._initArray = function(e, t, r) { if (n("number" === typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(e.length / 3), this.words = new Array(this.length); for (var i = 0; i < this.length; i++) this.words[i] = 0; var o, a, s = 0; if ("be" === r)
                        for (i = e.length - 1, o = 0; i >= 0; i -= 3) a = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    else if ("le" === r)
                        for (i = 0, o = 0; i < e.length; i += 3) a = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++); return this.strip() }, o.prototype._parseHex = function(e, t) { this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length); for (var r = 0; r < this.length; r++) this.words[r] = 0; var n, i, o = 0; for (r = e.length - 6, n = 0; r >= t; r -= 6) i = s(e, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);
                    r + 6 !== t && (i = s(e, t, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip() }, o.prototype._parseBase = function(e, t, r) { this.words = [0], this.length = 1; for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                    n--, i = i / t | 0; for (var o = e.length - r, a = o % n, s = Math.min(o, o - a) + r, c = 0, f = r; f < s; f += n) c = u(e, f, f + n, t), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c); if (0 !== a) { var d = 1; for (c = u(e, f, e.length, t), f = 0; f < a; f++) d *= t;
                        this.imuln(d), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c) } }, o.prototype.copy = function(e) { e.words = new Array(this.length); for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                    e.length = this.length, e.negative = this.negative, e.red = this.red }, o.prototype.clone = function() { var e = new o(null); return this.copy(e), e }, o.prototype._expand = function(e) { for (; this.length < e;) this.words[this.length++] = 0; return this }, o.prototype.strip = function() { for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--; return this._normSign() }, o.prototype._normSign = function() { return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this }, o.prototype.inspect = function() { return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">" }; var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function l(e, t, r) { r.negative = t.negative ^ e.negative; var n = e.length + t.length | 0;
                    r.length = n, n = n - 1 | 0; var i = 0 | e.words[0],
                        o = 0 | t.words[0],
                        a = i * o,
                        s = 67108863 & a,
                        u = a / 67108864 | 0;
                    r.words[0] = s; for (var c = 1; c < n; c++) { for (var f = u >>> 26, d = 67108863 & u, l = Math.min(c, t.length - 1), h = Math.max(0, c - e.length + 1); h <= l; h++) { var p = c - h | 0;
                            f += (a = (i = 0 | e.words[p]) * (o = 0 | t.words[h]) + d) / 67108864 | 0, d = 67108863 & a }
                        r.words[c] = 0 | d, u = 0 | f } return 0 !== u ? r.words[c] = 0 | u : r.length--, r.strip() }
                o.prototype.toString = function(e, t) { var r; if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) { r = ""; for (var i = 0, o = 0, a = 0; a < this.length; a++) { var s = this.words[a],
                                u = (16777215 & (s << i | o)).toString(16);
                            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? c[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, a--) } for (0 !== o && (r = o.toString(16) + r); r.length % t !== 0;) r = "0" + r; return 0 !== this.negative && (r = "-" + r), r } if (e === (0 | e) && e >= 2 && e <= 36) { var l = f[e],
                            h = d[e];
                        r = ""; var p = this.clone(); for (p.negative = 0; !p.isZero();) { var b = p.modn(h).toString(e);
                            r = (p = p.idivn(h)).isZero() ? b + r : c[l - b.length] + b + r } for (this.isZero() && (r = "0" + r); r.length % t !== 0;) r = "0" + r; return 0 !== this.negative && (r = "-" + r), r }
                    n(!1, "Base should be between 2 and 36") }, o.prototype.toNumber = function() { var e = this.words[0]; return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e }, o.prototype.toJSON = function() { return this.toString(16) }, o.prototype.toBuffer = function(e, t) { return n("undefined" !== typeof a), this.toArrayLike(a, e, t) }, o.prototype.toArray = function(e, t) { return this.toArrayLike(Array, e, t) }, o.prototype.toArrayLike = function(e, t, r) { var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip(); var a, s, u = "le" === t,
                        c = new e(o),
                        f = this.clone(); if (u) { for (s = 0; !f.isZero(); s++) a = f.andln(255), f.iushrn(8), c[s] = a; for (; s < o; s++) c[s] = 0 } else { for (s = 0; s < o - i; s++) c[s] = 0; for (s = 0; !f.isZero(); s++) a = f.andln(255), f.iushrn(8), c[o - s - 1] = a } return c }, Math.clz32 ? o.prototype._countBits = function(e) { return 32 - Math.clz32(e) } : o.prototype._countBits = function(e) { var t = e,
                        r = 0; return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t }, o.prototype._zeroBits = function(e) { if (0 === e) return 26; var t = e,
                        r = 0; return 0 === (8191 & t) && (r += 13, t >>>= 13), 0 === (127 & t) && (r += 7, t >>>= 7), 0 === (15 & t) && (r += 4, t >>>= 4), 0 === (3 & t) && (r += 2, t >>>= 2), 0 === (1 & t) && r++, r }, o.prototype.bitLength = function() { var e = this.words[this.length - 1],
                        t = this._countBits(e); return 26 * (this.length - 1) + t }, o.prototype.zeroBits = function() { if (this.isZero()) return 0; for (var e = 0, t = 0; t < this.length; t++) { var r = this._zeroBits(this.words[t]); if (e += r, 26 !== r) break } return e }, o.prototype.byteLength = function() { return Math.ceil(this.bitLength() / 8) }, o.prototype.toTwos = function(e) { return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone() }, o.prototype.fromTwos = function(e) { return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone() }, o.prototype.isNeg = function() { return 0 !== this.negative }, o.prototype.neg = function() { return this.clone().ineg() }, o.prototype.ineg = function() { return this.isZero() || (this.negative ^= 1), this }, o.prototype.iuor = function(e) { for (; this.length < e.length;) this.words[this.length++] = 0; for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t]; return this.strip() }, o.prototype.ior = function(e) { return n(0 === (this.negative | e.negative)), this.iuor(e) }, o.prototype.or = function(e) { return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this) }, o.prototype.uor = function(e) { return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this) }, o.prototype.iuand = function(e) { var t;
                    t = this.length > e.length ? e : this; for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r]; return this.length = t.length, this.strip() }, o.prototype.iand = function(e) { return n(0 === (this.negative | e.negative)), this.iuand(e) }, o.prototype.and = function(e) { return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this) }, o.prototype.uand = function(e) { return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this) }, o.prototype.iuxor = function(e) { var t, r;
                    this.length > e.length ? (t = this, r = e) : (t = e, r = this); for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n]; if (this !== t)
                        for (; n < t.length; n++) this.words[n] = t.words[n]; return this.length = t.length, this.strip() }, o.prototype.ixor = function(e) { return n(0 === (this.negative | e.negative)), this.iuxor(e) }, o.prototype.xor = function(e) { return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this) }, o.prototype.uxor = function(e) { return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this) }, o.prototype.inotn = function(e) { n("number" === typeof e && e >= 0); var t = 0 | Math.ceil(e / 26),
                        r = e % 26;
                    this._expand(t), r > 0 && t--; for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i]; return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip() }, o.prototype.notn = function(e) { return this.clone().inotn(e) }, o.prototype.setn = function(e, t) { n("number" === typeof e && e >= 0); var r = e / 26 | 0,
                        i = e % 26; return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip() }, o.prototype.iadd = function(e) { var t, r, n; if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign(); if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                    this.length > e.length ? (r = this, n = e) : (r = e, n = this); for (var i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26; for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26; if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o]; return this }, o.prototype.add = function(e) { var t; return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this) }, o.prototype.isub = function(e) { if (0 !== e.negative) { e.negative = 0; var t = this.iadd(e); return e.negative = 1, t._normSign() } if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign(); var r, n, i = this.cmp(e); if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = e) : (r = e, n = this); for (var o = 0, a = 0; a < n.length; a++) o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t; for (; 0 !== o && a < r.length; a++) o = (t = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & t; if (0 === o && a < r.length && r !== this)
                        for (; a < r.length; a++) this.words[a] = r.words[a]; return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip() }, o.prototype.sub = function(e) { return this.clone().isub(e) }; var h = function(e, t, r) { var n, i, o, a = e.words,
                        s = t.words,
                        u = r.words,
                        c = 0,
                        f = 0 | a[0],
                        d = 8191 & f,
                        l = f >>> 13,
                        h = 0 | a[1],
                        p = 8191 & h,
                        b = h >>> 13,
                        v = 0 | a[2],
                        g = 8191 & v,
                        y = v >>> 13,
                        m = 0 | a[3],
                        _ = 8191 & m,
                        w = m >>> 13,
                        x = 0 | a[4],
                        k = 8191 & x,
                        S = x >>> 13,
                        E = 0 | a[5],
                        M = 8191 & E,
                        A = E >>> 13,
                        R = 0 | a[6],
                        T = 8191 & R,
                        C = R >>> 13,
                        O = 0 | a[7],
                        P = 8191 & O,
                        I = O >>> 13,
                        B = 0 | a[8],
                        L = 8191 & B,
                        j = B >>> 13,
                        N = 0 | a[9],
                        q = 8191 & N,
                        U = N >>> 13,
                        D = 0 | s[0],
                        H = 8191 & D,
                        z = D >>> 13,
                        F = 0 | s[1],
                        K = 8191 & F,
                        W = F >>> 13,
                        V = 0 | s[2],
                        J = 8191 & V,
                        Y = V >>> 13,
                        G = 0 | s[3],
                        Z = 8191 & G,
                        X = G >>> 13,
                        $ = 0 | s[4],
                        Q = 8191 & $,
                        ee = $ >>> 13,
                        te = 0 | s[5],
                        re = 8191 & te,
                        ne = te >>> 13,
                        ie = 0 | s[6],
                        oe = 8191 & ie,
                        ae = ie >>> 13,
                        se = 0 | s[7],
                        ue = 8191 & se,
                        ce = se >>> 13,
                        fe = 0 | s[8],
                        de = 8191 & fe,
                        le = fe >>> 13,
                        he = 0 | s[9],
                        pe = 8191 & he,
                        be = he >>> 13;
                    r.negative = e.negative ^ t.negative, r.length = 19; var ve = (c + (n = Math.imul(d, H)) | 0) + ((8191 & (i = (i = Math.imul(d, z)) + Math.imul(l, H) | 0)) << 13) | 0;
                    c = ((o = Math.imul(l, z)) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(p, H), i = (i = Math.imul(p, z)) + Math.imul(b, H) | 0, o = Math.imul(b, z); var ge = (c + (n = n + Math.imul(d, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, W) | 0) + Math.imul(l, K) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(l, W) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(g, H), i = (i = Math.imul(g, z)) + Math.imul(y, H) | 0, o = Math.imul(y, z), n = n + Math.imul(p, K) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(b, K) | 0, o = o + Math.imul(b, W) | 0; var ye = (c + (n = n + Math.imul(d, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, Y) | 0) + Math.imul(l, J) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(l, Y) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(_, H), i = (i = Math.imul(_, z)) + Math.imul(w, H) | 0, o = Math.imul(w, z), n = n + Math.imul(g, K) | 0, i = (i = i + Math.imul(g, W) | 0) + Math.imul(y, K) | 0, o = o + Math.imul(y, W) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, Y) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, Y) | 0; var me = (c + (n = n + Math.imul(d, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, X) | 0) + Math.imul(l, Z) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(l, X) | 0) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(k, H), i = (i = Math.imul(k, z)) + Math.imul(S, H) | 0, o = Math.imul(S, z), n = n + Math.imul(_, K) | 0, i = (i = i + Math.imul(_, W) | 0) + Math.imul(w, K) | 0, o = o + Math.imul(w, W) | 0, n = n + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, Y) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, Y) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, X) | 0; var _e = (c + (n = n + Math.imul(d, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ee) | 0) + Math.imul(l, Q) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(l, ee) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(M, H), i = (i = Math.imul(M, z)) + Math.imul(A, H) | 0, o = Math.imul(A, z), n = n + Math.imul(k, K) | 0, i = (i = i + Math.imul(k, W) | 0) + Math.imul(S, K) | 0, o = o + Math.imul(S, W) | 0, n = n + Math.imul(_, J) | 0, i = (i = i + Math.imul(_, Y) | 0) + Math.imul(w, J) | 0, o = o + Math.imul(w, Y) | 0, n = n + Math.imul(g, Z) | 0, i = (i = i + Math.imul(g, X) | 0) + Math.imul(y, Z) | 0, o = o + Math.imul(y, X) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, ee) | 0; var we = (c + (n = n + Math.imul(d, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ne) | 0) + Math.imul(l, re) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(l, ne) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(T, H), i = (i = Math.imul(T, z)) + Math.imul(C, H) | 0, o = Math.imul(C, z), n = n + Math.imul(M, K) | 0, i = (i = i + Math.imul(M, W) | 0) + Math.imul(A, K) | 0, o = o + Math.imul(A, W) | 0, n = n + Math.imul(k, J) | 0, i = (i = i + Math.imul(k, Y) | 0) + Math.imul(S, J) | 0, o = o + Math.imul(S, Y) | 0, n = n + Math.imul(_, Z) | 0, i = (i = i + Math.imul(_, X) | 0) + Math.imul(w, Z) | 0, o = o + Math.imul(w, X) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, ee) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(b, re) | 0, o = o + Math.imul(b, ne) | 0; var xe = (c + (n = n + Math.imul(d, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ae) | 0) + Math.imul(l, oe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(l, ae) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(P, H), i = (i = Math.imul(P, z)) + Math.imul(I, H) | 0, o = Math.imul(I, z), n = n + Math.imul(T, K) | 0, i = (i = i + Math.imul(T, W) | 0) + Math.imul(C, K) | 0, o = o + Math.imul(C, W) | 0, n = n + Math.imul(M, J) | 0, i = (i = i + Math.imul(M, Y) | 0) + Math.imul(A, J) | 0, o = o + Math.imul(A, Y) | 0, n = n + Math.imul(k, Z) | 0, i = (i = i + Math.imul(k, X) | 0) + Math.imul(S, Z) | 0, o = o + Math.imul(S, X) | 0, n = n + Math.imul(_, Q) | 0, i = (i = i + Math.imul(_, ee) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, ee) | 0, n = n + Math.imul(g, re) | 0, i = (i = i + Math.imul(g, ne) | 0) + Math.imul(y, re) | 0, o = o + Math.imul(y, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, ae) | 0) + Math.imul(b, oe) | 0, o = o + Math.imul(b, ae) | 0; var ke = (c + (n = n + Math.imul(d, ue) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ce) | 0) + Math.imul(l, ue) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(l, ce) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(L, H), i = (i = Math.imul(L, z)) + Math.imul(j, H) | 0, o = Math.imul(j, z), n = n + Math.imul(P, K) | 0, i = (i = i + Math.imul(P, W) | 0) + Math.imul(I, K) | 0, o = o + Math.imul(I, W) | 0, n = n + Math.imul(T, J) | 0, i = (i = i + Math.imul(T, Y) | 0) + Math.imul(C, J) | 0, o = o + Math.imul(C, Y) | 0, n = n + Math.imul(M, Z) | 0, i = (i = i + Math.imul(M, X) | 0) + Math.imul(A, Z) | 0, o = o + Math.imul(A, X) | 0, n = n + Math.imul(k, Q) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, ee) | 0, n = n + Math.imul(_, re) | 0, i = (i = i + Math.imul(_, ne) | 0) + Math.imul(w, re) | 0, o = o + Math.imul(w, ne) | 0, n = n + Math.imul(g, oe) | 0, i = (i = i + Math.imul(g, ae) | 0) + Math.imul(y, oe) | 0, o = o + Math.imul(y, ae) | 0, n = n + Math.imul(p, ue) | 0, i = (i = i + Math.imul(p, ce) | 0) + Math.imul(b, ue) | 0, o = o + Math.imul(b, ce) | 0; var Se = (c + (n = n + Math.imul(d, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, le) | 0) + Math.imul(l, de) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(l, le) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(q, H), i = (i = Math.imul(q, z)) + Math.imul(U, H) | 0, o = Math.imul(U, z), n = n + Math.imul(L, K) | 0, i = (i = i + Math.imul(L, W) | 0) + Math.imul(j, K) | 0, o = o + Math.imul(j, W) | 0, n = n + Math.imul(P, J) | 0, i = (i = i + Math.imul(P, Y) | 0) + Math.imul(I, J) | 0, o = o + Math.imul(I, Y) | 0, n = n + Math.imul(T, Z) | 0, i = (i = i + Math.imul(T, X) | 0) + Math.imul(C, Z) | 0, o = o + Math.imul(C, X) | 0, n = n + Math.imul(M, Q) | 0, i = (i = i + Math.imul(M, ee) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, ee) | 0, n = n + Math.imul(k, re) | 0, i = (i = i + Math.imul(k, ne) | 0) + Math.imul(S, re) | 0, o = o + Math.imul(S, ne) | 0, n = n + Math.imul(_, oe) | 0, i = (i = i + Math.imul(_, ae) | 0) + Math.imul(w, oe) | 0, o = o + Math.imul(w, ae) | 0, n = n + Math.imul(g, ue) | 0, i = (i = i + Math.imul(g, ce) | 0) + Math.imul(y, ue) | 0, o = o + Math.imul(y, ce) | 0, n = n + Math.imul(p, de) | 0, i = (i = i + Math.imul(p, le) | 0) + Math.imul(b, de) | 0, o = o + Math.imul(b, le) | 0; var Ee = (c + (n = n + Math.imul(d, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, be) | 0) + Math.imul(l, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(l, be) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(q, K), i = (i = Math.imul(q, W)) + Math.imul(U, K) | 0, o = Math.imul(U, W), n = n + Math.imul(L, J) | 0, i = (i = i + Math.imul(L, Y) | 0) + Math.imul(j, J) | 0, o = o + Math.imul(j, Y) | 0, n = n + Math.imul(P, Z) | 0, i = (i = i + Math.imul(P, X) | 0) + Math.imul(I, Z) | 0, o = o + Math.imul(I, X) | 0, n = n + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, ee) | 0) + Math.imul(C, Q) | 0, o = o + Math.imul(C, ee) | 0, n = n + Math.imul(M, re) | 0, i = (i = i + Math.imul(M, ne) | 0) + Math.imul(A, re) | 0, o = o + Math.imul(A, ne) | 0, n = n + Math.imul(k, oe) | 0, i = (i = i + Math.imul(k, ae) | 0) + Math.imul(S, oe) | 0, o = o + Math.imul(S, ae) | 0, n = n + Math.imul(_, ue) | 0, i = (i = i + Math.imul(_, ce) | 0) + Math.imul(w, ue) | 0, o = o + Math.imul(w, ce) | 0, n = n + Math.imul(g, de) | 0, i = (i = i + Math.imul(g, le) | 0) + Math.imul(y, de) | 0, o = o + Math.imul(y, le) | 0; var Me = (c + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(b, be) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(q, J), i = (i = Math.imul(q, Y)) + Math.imul(U, J) | 0, o = Math.imul(U, Y), n = n + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, X) | 0) + Math.imul(j, Z) | 0, o = o + Math.imul(j, X) | 0, n = n + Math.imul(P, Q) | 0, i = (i = i + Math.imul(P, ee) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, ee) | 0, n = n + Math.imul(T, re) | 0, i = (i = i + Math.imul(T, ne) | 0) + Math.imul(C, re) | 0, o = o + Math.imul(C, ne) | 0, n = n + Math.imul(M, oe) | 0, i = (i = i + Math.imul(M, ae) | 0) + Math.imul(A, oe) | 0, o = o + Math.imul(A, ae) | 0, n = n + Math.imul(k, ue) | 0, i = (i = i + Math.imul(k, ce) | 0) + Math.imul(S, ue) | 0, o = o + Math.imul(S, ce) | 0, n = n + Math.imul(_, de) | 0, i = (i = i + Math.imul(_, le) | 0) + Math.imul(w, de) | 0, o = o + Math.imul(w, le) | 0; var Ae = (c + (n = n + Math.imul(g, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, be) | 0) + Math.imul(y, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(y, be) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(q, Z), i = (i = Math.imul(q, X)) + Math.imul(U, Z) | 0, o = Math.imul(U, X), n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(j, Q) | 0, o = o + Math.imul(j, ee) | 0, n = n + Math.imul(P, re) | 0, i = (i = i + Math.imul(P, ne) | 0) + Math.imul(I, re) | 0, o = o + Math.imul(I, ne) | 0, n = n + Math.imul(T, oe) | 0, i = (i = i + Math.imul(T, ae) | 0) + Math.imul(C, oe) | 0, o = o + Math.imul(C, ae) | 0, n = n + Math.imul(M, ue) | 0, i = (i = i + Math.imul(M, ce) | 0) + Math.imul(A, ue) | 0, o = o + Math.imul(A, ce) | 0, n = n + Math.imul(k, de) | 0, i = (i = i + Math.imul(k, le) | 0) + Math.imul(S, de) | 0, o = o + Math.imul(S, le) | 0; var Re = (c + (n = n + Math.imul(_, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, be) | 0) + Math.imul(w, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(w, be) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(q, Q), i = (i = Math.imul(q, ee)) + Math.imul(U, Q) | 0, o = Math.imul(U, ee), n = n + Math.imul(L, re) | 0, i = (i = i + Math.imul(L, ne) | 0) + Math.imul(j, re) | 0, o = o + Math.imul(j, ne) | 0, n = n + Math.imul(P, oe) | 0, i = (i = i + Math.imul(P, ae) | 0) + Math.imul(I, oe) | 0, o = o + Math.imul(I, ae) | 0, n = n + Math.imul(T, ue) | 0, i = (i = i + Math.imul(T, ce) | 0) + Math.imul(C, ue) | 0, o = o + Math.imul(C, ce) | 0, n = n + Math.imul(M, de) | 0, i = (i = i + Math.imul(M, le) | 0) + Math.imul(A, de) | 0, o = o + Math.imul(A, le) | 0; var Te = (c + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, be) | 0) + Math.imul(S, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(S, be) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(q, re), i = (i = Math.imul(q, ne)) + Math.imul(U, re) | 0, o = Math.imul(U, ne), n = n + Math.imul(L, oe) | 0, i = (i = i + Math.imul(L, ae) | 0) + Math.imul(j, oe) | 0, o = o + Math.imul(j, ae) | 0, n = n + Math.imul(P, ue) | 0, i = (i = i + Math.imul(P, ce) | 0) + Math.imul(I, ue) | 0, o = o + Math.imul(I, ce) | 0, n = n + Math.imul(T, de) | 0, i = (i = i + Math.imul(T, le) | 0) + Math.imul(C, de) | 0, o = o + Math.imul(C, le) | 0; var Ce = (c + (n = n + Math.imul(M, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(M, be) | 0) + Math.imul(A, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(A, be) | 0) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(q, oe), i = (i = Math.imul(q, ae)) + Math.imul(U, oe) | 0, o = Math.imul(U, ae), n = n + Math.imul(L, ue) | 0, i = (i = i + Math.imul(L, ce) | 0) + Math.imul(j, ue) | 0, o = o + Math.imul(j, ce) | 0, n = n + Math.imul(P, de) | 0, i = (i = i + Math.imul(P, le) | 0) + Math.imul(I, de) | 0, o = o + Math.imul(I, le) | 0; var Oe = (c + (n = n + Math.imul(T, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, be) | 0) + Math.imul(C, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(C, be) | 0) + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, n = Math.imul(q, ue), i = (i = Math.imul(q, ce)) + Math.imul(U, ue) | 0, o = Math.imul(U, ce), n = n + Math.imul(L, de) | 0, i = (i = i + Math.imul(L, le) | 0) + Math.imul(j, de) | 0, o = o + Math.imul(j, le) | 0; var Pe = (c + (n = n + Math.imul(P, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, be) | 0) + Math.imul(I, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(I, be) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(q, de), i = (i = Math.imul(q, le)) + Math.imul(U, de) | 0, o = Math.imul(U, le); var Ie = (c + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, be) | 0) + Math.imul(j, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(j, be) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863; var Be = (c + (n = Math.imul(q, pe)) | 0) + ((8191 & (i = (i = Math.imul(q, be)) + Math.imul(U, pe) | 0)) << 13) | 0; return c = ((o = Math.imul(U, be)) + (i >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, u[0] = ve, u[1] = ge, u[2] = ye, u[3] = me, u[4] = _e, u[5] = we, u[6] = xe, u[7] = ke, u[8] = Se, u[9] = Ee, u[10] = Me, u[11] = Ae, u[12] = Re, u[13] = Te, u[14] = Ce, u[15] = Oe, u[16] = Pe, u[17] = Ie, u[18] = Be, 0 !== c && (u[19] = c, r.length++), r };

                function p(e, t, r) { return (new b).mulp(e, t, r) }

                function b(e, t) { this.x = e, this.y = t }
                Math.imul || (h = l), o.prototype.mulTo = function(e, t) { var r = this.length + e.length; return 10 === this.length && 10 === e.length ? h(this, e, t) : r < 63 ? l(this, e, t) : r < 1024 ? function(e, t, r) { r.negative = t.negative ^ e.negative, r.length = e.length + t.length; for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) { var a = i;
                            i = 0; for (var s = 67108863 & n, u = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= u; c++) { var f = o - c,
                                    d = (0 | e.words[f]) * (0 | t.words[c]),
                                    l = 67108863 & d;
                                s = 67108863 & (l = l + s | 0), i += (a = (a = a + (d / 67108864 | 0) | 0) + (l >>> 26) | 0) >>> 26, a &= 67108863 }
                            r.words[o] = s, n = a, a = i } return 0 !== n ? r.words[o] = n : r.length--, r.strip() }(this, e, t) : p(this, e, t) }, b.prototype.makeRBT = function(e) { for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e); return t }, b.prototype.revBin = function(e, t, r) { if (0 === e || e === r - 1) return e; for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1; return n }, b.prototype.permute = function(e, t, r, n, i, o) { for (var a = 0; a < o; a++) n[a] = t[e[a]], i[a] = r[e[a]] }, b.prototype.transform = function(e, t, r, n, i, o) { this.permute(o, e, t, r, n, i); for (var a = 1; a < i; a <<= 1)
                        for (var s = a << 1, u = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), f = 0; f < i; f += s)
                            for (var d = u, l = c, h = 0; h < a; h++) { var p = r[f + h],
                                    b = n[f + h],
                                    v = r[f + h + a],
                                    g = n[f + h + a],
                                    y = d * v - l * g;
                                g = d * g + l * v, v = y, r[f + h] = p + v, n[f + h] = b + g, r[f + h + a] = p - v, n[f + h + a] = b - g, h !== s && (y = u * d - c * l, l = u * l + c * d, d = y) } }, b.prototype.guessLen13b = function(e, t) { var r = 1 | Math.max(t, e),
                        n = 1 & r,
                        i = 0; for (r = r / 2 | 0; r; r >>>= 1) i++; return 1 << i + 1 + n }, b.prototype.conjugate = function(e, t, r) { if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) { var i = e[n];
                            e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i } }, b.prototype.normalize13b = function(e, t) { for (var r = 0, n = 0; n < t / 2; n++) { var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                        e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0 } return e }, b.prototype.convert13b = function(e, t, r, i) { for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13; for (a = 2 * t; a < i; ++a) r[a] = 0;
                    n(0 === o), n(0 === (-8192 & o)) }, b.prototype.stub = function(e) { for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0; return t }, b.prototype.mulp = function(e, t, r) { var n = 2 * this.guessLen13b(e.length, t.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        a = new Array(n),
                        s = new Array(n),
                        u = new Array(n),
                        c = new Array(n),
                        f = new Array(n),
                        d = new Array(n),
                        l = r.words;
                    l.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, c, n), this.transform(a, o, s, u, n, i), this.transform(c, o, f, d, n, i); for (var h = 0; h < n; h++) { var p = s[h] * f[h] - u[h] * d[h];
                        u[h] = s[h] * d[h] + u[h] * f[h], s[h] = p } return this.conjugate(s, u, n), this.transform(s, u, l, o, n, i), this.conjugate(l, o, n), this.normalize13b(l, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip() }, o.prototype.mul = function(e) { var t = new o(null); return t.words = new Array(this.length + e.length), this.mulTo(e, t) }, o.prototype.mulf = function(e) { var t = new o(null); return t.words = new Array(this.length + e.length), p(this, e, t) }, o.prototype.imul = function(e) { return this.clone().mulTo(e, this) }, o.prototype.imuln = function(e) { n("number" === typeof e), n(e < 67108864); for (var t = 0, r = 0; r < this.length; r++) { var i = (0 | this.words[r]) * e,
                            o = (67108863 & i) + (67108863 & t);
                        t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o } return 0 !== t && (this.words[r] = t, this.length++), this }, o.prototype.muln = function(e) { return this.clone().imuln(e) }, o.prototype.sqr = function() { return this.mul(this) }, o.prototype.isqr = function() { return this.imul(this.clone()) }, o.prototype.pow = function(e) { var t = function(e) { for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) { var n = r / 26 | 0,
                                i = r % 26;
                            t[r] = (e.words[n] & 1 << i) >>> i } return t }(e); if (0 === t.length) return new o(1); for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr()); if (++n < t.length)
                        for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i)); return r }, o.prototype.iushln = function(e) { n("number" === typeof e && e >= 0); var t, r = e % 26,
                        i = (e - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r; if (0 !== r) { var a = 0; for (t = 0; t < this.length; t++) { var s = this.words[t] & o,
                                u = (0 | this.words[t]) - s << r;
                            this.words[t] = u | a, a = s >>> 26 - r }
                        a && (this.words[t] = a, this.length++) } if (0 !== i) { for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t]; for (t = 0; t < i; t++) this.words[t] = 0;
                        this.length += i } return this.strip() }, o.prototype.ishln = function(e) { return n(0 === this.negative), this.iushln(e) }, o.prototype.iushrn = function(e, t, r) { var i;
                    n("number" === typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0; var o = e % 26,
                        a = Math.min((e - o) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> o << o,
                        u = r; if (i -= a, i = Math.max(0, i), u) { for (var c = 0; c < a; c++) u.words[c] = this.words[c];
                        u.length = a } if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, c = 0; c < this.length; c++) this.words[c] = this.words[c + a];
                    else this.words[0] = 0, this.length = 1; var f = 0; for (c = this.length - 1; c >= 0 && (0 !== f || c >= i); c--) { var d = 0 | this.words[c];
                        this.words[c] = f << 26 - o | d >>> o, f = d & s } return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip() }, o.prototype.ishrn = function(e, t, r) { return n(0 === this.negative), this.iushrn(e, t, r) }, o.prototype.shln = function(e) { return this.clone().ishln(e) }, o.prototype.ushln = function(e) { return this.clone().iushln(e) }, o.prototype.shrn = function(e) { return this.clone().ishrn(e) }, o.prototype.ushrn = function(e) { return this.clone().iushrn(e) }, o.prototype.testn = function(e) { n("number" === typeof e && e >= 0); var t = e % 26,
                        r = (e - t) / 26,
                        i = 1 << t; return !(this.length <= r) && !!(this.words[r] & i) }, o.prototype.imaskn = function(e) { n("number" === typeof e && e >= 0); var t = e % 26,
                        r = (e - t) / 26; if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this; if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) { var i = 67108863 ^ 67108863 >>> t << t;
                        this.words[this.length - 1] &= i } return this.strip() }, o.prototype.maskn = function(e) { return this.clone().imaskn(e) }, o.prototype.iaddn = function(e) { return n("number" === typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e) }, o.prototype._iaddn = function(e) { this.words[0] += e; for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++; return this.length = Math.max(this.length, t + 1), this }, o.prototype.isubn = function(e) { if (n("number" === typeof e), n(e < 67108864), e < 0) return this.iaddn(-e); if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this; if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1; return this.strip() }, o.prototype.addn = function(e) { return this.clone().iaddn(e) }, o.prototype.subn = function(e) { return this.clone().isubn(e) }, o.prototype.iabs = function() { return this.negative = 0, this }, o.prototype.abs = function() { return this.clone().iabs() }, o.prototype._ishlnsubmul = function(e, t, r) { var i, o, a = e.length + r;
                    this._expand(a); var s = 0; for (i = 0; i < e.length; i++) { o = (0 | this.words[i + r]) + s; var u = (0 | e.words[i]) * t;
                        s = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o } for (; i < this.length - r; i++) s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o; if (0 === s) return this.strip(); for (n(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o; return this.negative = 1, this.strip() }, o.prototype._wordDiv = function(e, t) { var r = (this.length, e.length),
                        n = this.clone(),
                        i = e,
                        a = 0 | i.words[i.length - 1];
                    0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]); var s, u = n.length - i.length; if ("mod" !== t) {
                        (s = new o(null)).length = u + 1, s.words = new Array(s.length); for (var c = 0; c < s.length; c++) s.words[c] = 0 } var f = n.clone()._ishlnsubmul(i, 1, u);
                    0 === f.negative && (n = f, s && (s.words[u] = 1)); for (var d = u - 1; d >= 0; d--) { var l = 67108864 * (0 | n.words[i.length + d]) + (0 | n.words[i.length + d - 1]); for (l = Math.min(l / a | 0, 67108863), n._ishlnsubmul(i, l, d); 0 !== n.negative;) l--, n.negative = 0, n._ishlnsubmul(i, 1, d), n.isZero() || (n.negative ^= 1);
                        s && (s.words[d] = l) } return s && s.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), { div: s || null, mod: n } }, o.prototype.divmod = function(e, t, r) { return n(!e.isZero()), this.isZero() ? { div: new o(0), mod: new o(0) } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(e)), { div: i, mod: a }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), { div: i, mod: s.mod }) : 0 !== (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(e)), { div: s.div, mod: a }) : e.length > this.length || this.cmp(e) < 0 ? { div: new o(0), mod: this } : 1 === e.length ? "div" === t ? { div: this.divn(e.words[0]), mod: null } : "mod" === t ? { div: null, mod: new o(this.modn(e.words[0])) } : { div: this.divn(e.words[0]), mod: new o(this.modn(e.words[0])) } : this._wordDiv(e, t); var i, a, s }, o.prototype.div = function(e) { return this.divmod(e, "div", !1).div }, o.prototype.mod = function(e) { return this.divmod(e, "mod", !1).mod }, o.prototype.umod = function(e) { return this.divmod(e, "mod", !0).mod }, o.prototype.divRound = function(e) { var t = this.divmod(e); if (t.mod.isZero()) return t.div; var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                        n = e.ushrn(1),
                        i = e.andln(1),
                        o = r.cmp(n); return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1) }, o.prototype.modn = function(e) { n(e <= 67108863); for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--) r = (t * r + (0 | this.words[i])) % e; return r }, o.prototype.idivn = function(e) { n(e <= 67108863); for (var t = 0, r = this.length - 1; r >= 0; r--) { var i = (0 | this.words[r]) + 67108864 * t;
                        this.words[r] = i / e | 0, t = i % e } return this.strip() }, o.prototype.divn = function(e) { return this.clone().idivn(e) }, o.prototype.egcd = function(e) { n(0 === e.negative), n(!e.isZero()); var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone(); for (var i = new o(1), a = new o(0), s = new o(0), u = new o(1), c = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++c; for (var f = r.clone(), d = t.clone(); !t.isZero();) { for (var l = 0, h = 1; 0 === (t.words[0] & h) && l < 26; ++l, h <<= 1); if (l > 0)
                            for (t.iushrn(l); l-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(f), a.isub(d)), i.iushrn(1), a.iushrn(1); for (var p = 0, b = 1; 0 === (r.words[0] & b) && p < 26; ++p, b <<= 1); if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(f), u.isub(d)), s.iushrn(1), u.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), i.isub(s), a.isub(u)) : (r.isub(t), s.isub(i), u.isub(a)) } return { a: s, b: u, gcd: r.iushln(c) } }, o.prototype._invmp = function(e) { n(0 === e.negative), n(!e.isZero()); var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone(); for (var i, a = new o(1), s = new o(0), u = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) { for (var c = 0, f = 1; 0 === (t.words[0] & f) && c < 26; ++c, f <<= 1); if (c > 0)
                            for (t.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1); for (var d = 0, l = 1; 0 === (r.words[0] & l) && d < 26; ++d, l <<= 1); if (d > 0)
                            for (r.iushrn(d); d-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), a.isub(s)) : (r.isub(t), s.isub(a)) } return (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i }, o.prototype.gcd = function(e) { if (this.isZero()) return e.abs(); if (e.isZero()) return this.abs(); var t = this.clone(),
                        r = e.clone();
                    t.negative = 0, r.negative = 0; for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1); for (;;) { for (; t.isEven();) t.iushrn(1); for (; r.isEven();) r.iushrn(1); var i = t.cmp(r); if (i < 0) { var o = t;
                            t = r, r = o } else if (0 === i || 0 === r.cmpn(1)) break;
                        t.isub(r) } return r.iushln(n) }, o.prototype.invm = function(e) { return this.egcd(e).a.umod(e) }, o.prototype.isEven = function() { return 0 === (1 & this.words[0]) }, o.prototype.isOdd = function() { return 1 === (1 & this.words[0]) }, o.prototype.andln = function(e) { return this.words[0] & e }, o.prototype.bincn = function(e) { n("number" === typeof e); var t = e % 26,
                        r = (e - t) / 26,
                        i = 1 << t; if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this; for (var o = i, a = r; 0 !== o && a < this.length; a++) { var s = 0 | this.words[a];
                        o = (s += o) >>> 26, s &= 67108863, this.words[a] = s } return 0 !== o && (this.words[a] = o, this.length++), this }, o.prototype.isZero = function() { return 1 === this.length && 0 === this.words[0] }, o.prototype.cmpn = function(e) { var t, r = e < 0; if (0 !== this.negative && !r) return -1; if (0 === this.negative && r) return 1; if (this.strip(), this.length > 1) t = 1;
                    else { r && (e = -e), n(e <= 67108863, "Number is too big"); var i = 0 | this.words[0];
                        t = i === e ? 0 : i < e ? -1 : 1 } return 0 !== this.negative ? 0 | -t : t }, o.prototype.cmp = function(e) { if (0 !== this.negative && 0 === e.negative) return -1; if (0 === this.negative && 0 !== e.negative) return 1; var t = this.ucmp(e); return 0 !== this.negative ? 0 | -t : t }, o.prototype.ucmp = function(e) { if (this.length > e.length) return 1; if (this.length < e.length) return -1; for (var t = 0, r = this.length - 1; r >= 0; r--) { var n = 0 | this.words[r],
                            i = 0 | e.words[r]; if (n !== i) { n < i ? t = -1 : n > i && (t = 1); break } } return t }, o.prototype.gtn = function(e) { return 1 === this.cmpn(e) }, o.prototype.gt = function(e) { return 1 === this.cmp(e) }, o.prototype.gten = function(e) { return this.cmpn(e) >= 0 }, o.prototype.gte = function(e) { return this.cmp(e) >= 0 }, o.prototype.ltn = function(e) { return -1 === this.cmpn(e) }, o.prototype.lt = function(e) { return -1 === this.cmp(e) }, o.prototype.lten = function(e) { return this.cmpn(e) <= 0 }, o.prototype.lte = function(e) { return this.cmp(e) <= 0 }, o.prototype.eqn = function(e) { return 0 === this.cmpn(e) }, o.prototype.eq = function(e) { return 0 === this.cmp(e) }, o.red = function(e) { return new x(e) }, o.prototype.toRed = function(e) { return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e) }, o.prototype.fromRed = function() { return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this) }, o.prototype._forceRed = function(e) { return this.red = e, this }, o.prototype.forceRed = function(e) { return n(!this.red, "Already a number in reduction context"), this._forceRed(e) }, o.prototype.redAdd = function(e) { return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e) }, o.prototype.redIAdd = function(e) { return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e) }, o.prototype.redSub = function(e) { return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e) }, o.prototype.redISub = function(e) { return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e) }, o.prototype.redShl = function(e) { return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e) }, o.prototype.redMul = function(e) { return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e) }, o.prototype.redIMul = function(e) { return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e) }, o.prototype.redSqr = function() { return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this) }, o.prototype.redISqr = function() { return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this) }, o.prototype.redSqrt = function() { return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this) }, o.prototype.redInvm = function() { return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this) }, o.prototype.redNeg = function() { return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this) }, o.prototype.redPow = function(e) { return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e) }; var v = { k256: null, p224: null, p192: null, p25519: null };

                function g(e, t) { this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp() }

                function y() { g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f") }

                function m() { g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001") }

                function _() { g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff") }

                function w() { g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed") }

                function x(e) { if ("string" === typeof e) { var t = o._prime(e);
                        this.m = t.p, this.prime = t } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null }

                function k(e) { x.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv) }
                g.prototype._tmp = function() { var e = new o(null); return e.words = new Array(Math.ceil(this.n / 13)), e }, g.prototype.ireduce = function(e) { var t, r = e;
                    do { this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength() } while (t > this.n); var n = t < this.n ? -1 : r.ucmp(this.p); return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r }, g.prototype.split = function(e, t) { e.iushrn(this.n, 0, t) }, g.prototype.imulK = function(e) { return e.imul(this.k) }, i(y, g), y.prototype.split = function(e, t) { for (var r = 4194303, n = Math.min(e.length, 9), i = 0; i < n; i++) t.words[i] = e.words[i]; if (t.length = n, e.length <= 9) return e.words[0] = 0, void(e.length = 1); var o = e.words[9]; for (t.words[t.length++] = o & r, i = 10; i < e.length; i++) { var a = 0 | e.words[i];
                        e.words[i - 10] = (a & r) << 4 | o >>> 22, o = a }
                    o >>>= 22, e.words[i - 10] = o, 0 === o && e.length > 10 ? e.length -= 10 : e.length -= 9 }, y.prototype.imulK = function(e) { e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2; for (var t = 0, r = 0; r < e.length; r++) { var n = 0 | e.words[r];
                        t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0) } return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e }, i(m, g), i(_, g), i(w, g), w.prototype.imulK = function(e) { for (var t = 0, r = 0; r < e.length; r++) { var n = 19 * (0 | e.words[r]) + t,
                            i = 67108863 & n;
                        n >>>= 26, e.words[r] = i, t = n } return 0 !== t && (e.words[e.length++] = t), e }, o._prime = function(e) { if (v[e]) return v[e]; var t; if ("k256" === e) t = new y;
                    else if ("p224" === e) t = new m;
                    else if ("p192" === e) t = new _;
                    else { if ("p25519" !== e) throw new Error("Unknown prime " + e);
                        t = new w } return v[e] = t, t }, x.prototype._verify1 = function(e) { n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers") }, x.prototype._verify2 = function(e, t) { n(0 === (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers") }, x.prototype.imod = function(e) { return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this) }, x.prototype.neg = function(e) { return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this) }, x.prototype.add = function(e, t) { this._verify2(e, t); var r = e.add(t); return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this) }, x.prototype.iadd = function(e, t) { this._verify2(e, t); var r = e.iadd(t); return r.cmp(this.m) >= 0 && r.isub(this.m), r }, x.prototype.sub = function(e, t) { this._verify2(e, t); var r = e.sub(t); return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this) }, x.prototype.isub = function(e, t) { this._verify2(e, t); var r = e.isub(t); return r.cmpn(0) < 0 && r.iadd(this.m), r }, x.prototype.shl = function(e, t) { return this._verify1(e), this.imod(e.ushln(t)) }, x.prototype.imul = function(e, t) { return this._verify2(e, t), this.imod(e.imul(t)) }, x.prototype.mul = function(e, t) { return this._verify2(e, t), this.imod(e.mul(t)) }, x.prototype.isqr = function(e) { return this.imul(e, e.clone()) }, x.prototype.sqr = function(e) { return this.mul(e, e) }, x.prototype.sqrt = function(e) { if (e.isZero()) return e.clone(); var t = this.m.andln(3); if (n(t % 2 === 1), 3 === t) { var r = this.m.add(new o(1)).iushrn(2); return this.pow(e, r) } for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                    n(!i.isZero()); var s = new o(1).toRed(this),
                        u = s.redNeg(),
                        c = this.m.subn(1).iushrn(1),
                        f = this.m.bitLength(); for (f = new o(2 * f * f).toRed(this); 0 !== this.pow(f, c).cmp(u);) f.redIAdd(u); for (var d = this.pow(f, i), l = this.pow(e, i.addn(1).iushrn(1)), h = this.pow(e, i), p = a; 0 !== h.cmp(s);) { for (var b = h, v = 0; 0 !== b.cmp(s); v++) b = b.redSqr();
                        n(v < p); var g = this.pow(d, new o(1).iushln(p - v - 1));
                        l = l.redMul(g), d = g.redSqr(), h = h.redMul(d), p = v } return l }, x.prototype.invm = function(e) { var t = e._invmp(this.m); return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t) }, x.prototype.pow = function(e, t) { if (t.isZero()) return new o(1).toRed(this); if (0 === t.cmpn(1)) return e.clone(); var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = e; for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e); var i = r[0],
                        a = 0,
                        s = 0,
                        u = t.bitLength() % 26; for (0 === u && (u = 26), n = t.length - 1; n >= 0; n--) { for (var c = t.words[n], f = u - 1; f >= 0; f--) { var d = c >> f & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== d || 0 !== a ? (a <<= 1, a |= d, (4 === ++s || 0 === n && 0 === f) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0 }
                        u = 26 } return i }, x.prototype.convertTo = function(e) { var t = e.umod(this.m); return t === e ? t.clone() : t }, x.prototype.convertFrom = function(e) { var t = e.clone(); return t.red = null, t }, o.mont = function(e) { return new k(e) }, i(k, x), k.prototype.convertTo = function(e) { return this.imod(e.ushln(this.shift)) }, k.prototype.convertFrom = function(e) { var t = this.imod(e.mul(this.rinv)); return t.red = null, t }, k.prototype.imul = function(e, t) { if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e; var r = e.imul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i; return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this) }, k.prototype.mul = function(e, t) { if (e.isZero() || t.isZero()) return new o(0)._forceRed(this); var r = e.mul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        a = i; return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this) }, k.prototype.invm = function(e) { return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this) } }(e, this) }).call(this, r(219)(e)) }, , function(e, t, r) { "use strict";
        t.byteLength = function(e) { var t = c(e),
                r = t[0],
                n = t[1]; return 3 * (r + n) / 4 - n }, t.toByteArray = function(e) { var t, r, n = c(e),
                a = n[0],
                s = n[1],
                u = new o(function(e, t, r) { return 3 * (t + r) / 4 - r }(0, a, s)),
                f = 0,
                d = s > 0 ? a - 4 : a; for (r = 0; r < d; r += 4) t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)], u[f++] = t >> 16 & 255, u[f++] = t >> 8 & 255, u[f++] = 255 & t;
            2 === s && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, u[f++] = 255 & t);
            1 === s && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, u[f++] = t >> 8 & 255, u[f++] = 255 & t); return u }, t.fromByteArray = function(e) { for (var t, r = e.length, i = r % 3, o = [], a = 16383, s = 0, u = r - i; s < u; s += a) o.push(f(e, s, s + a > u ? u : s + a));
            1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")); return o.join("") }; for (var n = [], i = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) n[s] = a[s], i[a.charCodeAt(s)] = s;

        function c(e) { var t = e.length; if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var r = e.indexOf("="); return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4] }

        function f(e, t, r) { for (var i, o, a = [], s = t; s < r; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]); return a.join("") }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63 }, function(e, t) { t.read = function(e, t, r, n, i) { var o, a, s = 8 * i - n - 1,
                u = (1 << s) - 1,
                c = u >> 1,
                f = -7,
                d = r ? i - 1 : 0,
                l = r ? -1 : 1,
                h = e[t + d]; for (d += l, o = h & (1 << -f) - 1, h >>= -f, f += s; f > 0; o = 256 * o + e[t + d], d += l, f -= 8); for (a = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; a = 256 * a + e[t + d], d += l, f -= 8); if (0 === o) o = 1 - c;
            else { if (o === u) return a ? NaN : 1 / 0 * (h ? -1 : 1);
                a += Math.pow(2, n), o -= c } return (h ? -1 : 1) * a * Math.pow(2, o - n) }, t.write = function(e, t, r, n, i, o) { var a, s, u, c = 8 * o - i - 1,
                f = (1 << c) - 1,
                d = f >> 1,
                l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = n ? 0 : o - 1,
                p = n ? 1 : -1,
                b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = f) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (t += a + d >= 1 ? l / u : l * Math.pow(2, 1 - d)) * u >= 2 && (a++, u /= 2), a + d >= f ? (s = 0, a = f) : a + d >= 1 ? (s = (t * u - 1) * Math.pow(2, i), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + h] = 255 & s, h += p, s /= 256, i -= 8); for (a = a << i | s, c += i; c > 0; e[r + h] = 255 & a, h += p, a /= 256, c -= 8);
            e[r + h - p] |= 128 * b } }, function(e, t) { var r = {}.toString;
        e.exports = Array.isArray || function(e) { return "[object Array]" == r.call(e) } }, function(e, t, r) { var n = r(510);
        e.exports = function(e) { if (Array.isArray(e)) return n(e) } }, function(e, t) { e.exports = function(e) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) } }, function(e, t) { e.exports = function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } }, function(e, t, r) {
        (function(t) { var n = r(1017).strict;
            e.exports = function(e) { if (n(e)) { var r = t.from(e.buffer); return e.byteLength !== e.buffer.byteLength && (r = r.slice(e.byteOffset, e.byteOffset + e.byteLength)), r } return t.from(e) } }).call(this, r(785).Buffer) }, function(e, t, r) {
        (function(n, i) { var o;! function() { "use strict"; var a = "input is invalid type",
                    s = "object" === typeof window,
                    u = s ? window : {};
                u.JS_SHA3_NO_WINDOW && (s = !1); var c = !s && "object" === typeof self;!u.JS_SHA3_NO_NODE_JS && "object" === typeof n && n.versions && n.versions.node ? u = i : c && (u = self); var f = !u.JS_SHA3_NO_COMMON_JS && "object" === typeof e && e.exports,
                    d = r(1295),
                    l = !u.JS_SHA3_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer,
                    h = "0123456789abcdef".split(""),
                    p = [4, 1024, 262144, 67108864],
                    b = [0, 8, 16, 24],
                    v = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    g = [224, 256, 384, 512],
                    y = [128, 256],
                    m = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    _ = { 128: 168, 256: 136 };!u.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) { return "[object Array]" === Object.prototype.toString.call(e) }), !l || !u.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) { return "object" === typeof e && e.buffer && e.buffer.constructor === ArrayBuffer }); for (var w = function(e, t, r) { return function(n) { return new j(e, t, e).update(n)[r]() } }, x = function(e, t, r) { return function(n, i) { return new j(e, t, i).update(n)[r]() } }, k = function(e, t, r) { return function(t, n, i, o) { return R["cshake" + e].update(t, n, i, o)[r]() } }, S = function(e, t, r) { return function(t, n, i, o) { return R["kmac" + e].update(t, n, i, o)[r]() } }, E = function(e, t, r, n) { for (var i = 0; i < m.length; ++i) { var o = m[i];
                            e[o] = t(r, n, o) } return e }, M = function(e, t) { var r = w(e, t, "hex"); return r.create = function() { return new j(e, t, e) }, r.update = function(e) { return r.create().update(e) }, E(r, w, e, t) }, A = [{ name: "keccak", padding: [1, 256, 65536, 16777216], bits: g, createMethod: M }, { name: "sha3", padding: [6, 1536, 393216, 100663296], bits: g, createMethod: M }, { name: "shake", padding: [31, 7936, 2031616, 520093696], bits: y, createMethod: function(e, t) { var r = x(e, t, "hex"); return r.create = function(r) { return new j(e, t, r) }, r.update = function(e, t) { return r.create(t).update(e) }, E(r, x, e, t) } }, { name: "cshake", padding: p, bits: y, createMethod: function(e, t) { var r = _[e],
                                n = k(e, 0, "hex"); return n.create = function(n, i, o) { return i || o ? new j(e, t, n).bytepad([i, o], r) : R["shake" + e].create(n) }, n.update = function(e, t, r, i) { return n.create(t, r, i).update(e) }, E(n, k, e, t) } }, { name: "kmac", padding: p, bits: y, createMethod: function(e, t) { var r = _[e],
                                n = S(e, 0, "hex"); return n.create = function(n, i, o) { return new N(e, t, i).bytepad(["KMAC", o], r).bytepad([n], r) }, n.update = function(e, t, r, i) { return n.create(e, r, i).update(t) }, E(n, S, e, t) } }], R = {}, T = [], C = 0; C < A.length; ++C)
                    for (var O = A[C], P = O.bits, I = 0; I < P.length; ++I) { var B = O.name + "_" + P[I]; if (T.push(B), R[B] = O.createMethod(P[I], O.padding), "sha3" !== O.name) { var L = O.name + P[I];
                            T.push(L), R[L] = R[B] } }

                function j(e, t, r) { this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3; for (var n = 0; n < 50; ++n) this.s[n] = 0 }

                function N(e, t, r) { j.call(this, e, t, r) }
                j.prototype.update = function(e) { if (this.finalized) throw new Error("finalize already called"); var t, r = typeof e; if ("string" !== r) { if ("object" !== r) throw new Error(a); if (null === e) throw new Error(a); if (l && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!Array.isArray(e) && (!l || !ArrayBuffer.isView(e))) throw new Error(a);
                        t = !0 } for (var n, i, o = this.blocks, s = this.byteCount, u = e.length, c = this.blockCount, f = 0, d = this.s; f < u;) { if (this.reset)
                            for (this.reset = !1, o[0] = this.block, n = 1; n < c + 1; ++n) o[n] = 0; if (t)
                            for (n = this.start; f < u && n < s; ++f) o[n >> 2] |= e[f] << b[3 & n++];
                        else
                            for (n = this.start; f < u && n < s; ++f)(i = e.charCodeAt(f)) < 128 ? o[n >> 2] |= i << b[3 & n++] : i < 2048 ? (o[n >> 2] |= (192 | i >> 6) << b[3 & n++], o[n >> 2] |= (128 | 63 & i) << b[3 & n++]) : i < 55296 || i >= 57344 ? (o[n >> 2] |= (224 | i >> 12) << b[3 & n++], o[n >> 2] |= (128 | i >> 6 & 63) << b[3 & n++], o[n >> 2] |= (128 | 63 & i) << b[3 & n++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++f)), o[n >> 2] |= (240 | i >> 18) << b[3 & n++], o[n >> 2] |= (128 | i >> 12 & 63) << b[3 & n++], o[n >> 2] |= (128 | i >> 6 & 63) << b[3 & n++], o[n >> 2] |= (128 | 63 & i) << b[3 & n++]); if (this.lastByteIndex = n, n >= s) { for (this.start = n - s, this.block = o[c], n = 0; n < c; ++n) d[n] ^= o[n];
                            q(d), this.reset = !0 } else this.start = n } return this }, j.prototype.encode = function(e, t) { var r = 255 & e,
                        n = 1,
                        i = [r]; for (r = 255 & (e >>= 8); r > 0;) i.unshift(r), r = 255 & (e >>= 8), ++n; return t ? i.push(n) : i.unshift(n), this.update(i), i.length }, j.prototype.encodeString = function(e) { var t, r = typeof e; if ("string" !== r) { if ("object" !== r) throw new Error(a); if (null === e) throw new Error(a); if (l && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!Array.isArray(e) && (!l || !ArrayBuffer.isView(e))) throw new Error(a);
                        t = !0 } var n = 0,
                        i = e.length; if (t) n = i;
                    else
                        for (var o = 0; o < e.length; ++o) { var s = e.charCodeAt(o);
                            s < 128 ? n += 1 : s < 2048 ? n += 2 : s < 55296 || s >= 57344 ? n += 3 : (s = 65536 + ((1023 & s) << 10 | 1023 & e.charCodeAt(++o)), n += 4) }
                    return n += this.encode(8 * n), this.update(e), n }, j.prototype.bytepad = function(e, t) { for (var r = this.encode(t), n = 0; n < e.length; ++n) r += this.encodeString(e[n]); var i = t - r % t,
                        o = []; return o.length = i, this.update(o), this }, j.prototype.finalize = function() { if (!this.finalized) { this.finalized = !0; var e = this.blocks,
                            t = this.lastByteIndex,
                            r = this.blockCount,
                            n = this.s; if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
                            for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0; for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
                        q(n) } }, j.prototype.toString = j.prototype.hex = function() { this.finalize(); for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, a = 0, s = ""; a < n;) { for (o = 0; o < t && a < n; ++o, ++a) e = r[o], s += h[e >> 4 & 15] + h[15 & e] + h[e >> 12 & 15] + h[e >> 8 & 15] + h[e >> 20 & 15] + h[e >> 16 & 15] + h[e >> 28 & 15] + h[e >> 24 & 15];
                        a % t === 0 && (q(r), o = 0) } return i && (e = r[o], s += h[e >> 4 & 15] + h[15 & e], i > 1 && (s += h[e >> 12 & 15] + h[e >> 8 & 15]), i > 2 && (s += h[e >> 20 & 15] + h[e >> 16 & 15])), s }, j.prototype.arrayBuffer = function() { this.finalize(); var e, t = this.blockCount,
                        r = this.s,
                        n = this.outputBlocks,
                        i = this.extraBytes,
                        o = 0,
                        a = 0,
                        s = this.outputBits >> 3;
                    e = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(s); for (var u = new Uint32Array(e); a < n;) { for (o = 0; o < t && a < n; ++o, ++a) u[a] = r[o];
                        a % t === 0 && q(r) } return i && (u[o] = r[o], e = e.slice(0, s)), e }, j.prototype.buffer = j.prototype.arrayBuffer, j.prototype.digest = j.prototype.array = function() { this.finalize(); for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, a = 0, s = 0, u = []; s < i;) { for (a = 0; a < r && s < i; ++a, ++s) e = s << 2, t = n[a], u[e] = 255 & t, u[e + 1] = t >> 8 & 255, u[e + 2] = t >> 16 & 255, u[e + 3] = t >> 24 & 255;
                        s % r === 0 && q(n) } return o && (e = s << 2, t = n[a], u[e] = 255 & t, o > 1 && (u[e + 1] = t >> 8 & 255), o > 2 && (u[e + 2] = t >> 16 & 255)), u }, N.prototype = new j, N.prototype.finalize = function() { return this.encode(this.outputBits, !0), j.prototype.finalize.call(this) }; var q = function(e) { var t, r, n, i, o, a, s, u, c, f, d, l, h, p, b, g, y, m, _, w, x, k, S, E, M, A, R, T, C, O, P, I, B, L, j, N, q, U, D, H, z, F, K, W, V, J, Y, G, Z, X, $, Q, ee, te, re, ne, ie, oe, ae, se, ue, ce, fe; for (n = 0; n < 48; n += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], f = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], d = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (l = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | s >>> 31), r = (h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (s << 1 | a >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (u << 1 | c >>> 31), r = o ^ (c << 1 | u >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = a ^ (f << 1 | d >>> 31), r = s ^ (d << 1 | f >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = u ^ (l << 1 | h >>> 31), r = c ^ (h << 1 | l >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = f ^ (i << 1 | o >>> 31), r = d ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], b = e[1], J = e[11] << 4 | e[10] >>> 28, Y = e[10] << 4 | e[11] >>> 28, T = e[20] << 3 | e[21] >>> 29, C = e[21] << 3 | e[20] >>> 29, se = e[31] << 9 | e[30] >>> 23, ue = e[30] << 9 | e[31] >>> 23, F = e[40] << 18 | e[41] >>> 14, K = e[41] << 18 | e[40] >>> 14, L = e[2] << 1 | e[3] >>> 31, j = e[3] << 1 | e[2] >>> 31, g = e[13] << 12 | e[12] >>> 20, y = e[12] << 12 | e[13] >>> 20, G = e[22] << 10 | e[23] >>> 22, Z = e[23] << 10 | e[22] >>> 22, O = e[33] << 13 | e[32] >>> 19, P = e[32] << 13 | e[33] >>> 19, ce = e[42] << 2 | e[43] >>> 30, fe = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, N = e[14] << 6 | e[15] >>> 26, q = e[15] << 6 | e[14] >>> 26, m = e[25] << 11 | e[24] >>> 21, _ = e[24] << 11 | e[25] >>> 21, X = e[34] << 15 | e[35] >>> 17, $ = e[35] << 15 | e[34] >>> 17, I = e[45] << 29 | e[44] >>> 3, B = e[44] << 29 | e[45] >>> 3, E = e[6] << 28 | e[7] >>> 4, M = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, U = e[26] << 25 | e[27] >>> 7, D = e[27] << 25 | e[26] >>> 7, w = e[36] << 21 | e[37] >>> 11, x = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, W = e[8] << 27 | e[9] >>> 5, V = e[9] << 27 | e[8] >>> 5, A = e[18] << 20 | e[19] >>> 12, R = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, H = e[38] << 8 | e[39] >>> 24, z = e[39] << 8 | e[38] >>> 24, k = e[48] << 14 | e[49] >>> 18, S = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~g & m, e[1] = b ^ ~y & _, e[10] = E ^ ~A & T, e[11] = M ^ ~R & C, e[20] = L ^ ~N & U, e[21] = j ^ ~q & D, e[30] = W ^ ~J & G, e[31] = V ^ ~Y & Z, e[40] = te ^ ~ne & oe, e[41] = re ^ ~ie & ae, e[2] = g ^ ~m & w, e[3] = y ^ ~_ & x, e[12] = A ^ ~T & O, e[13] = R ^ ~C & P, e[22] = N ^ ~U & H, e[23] = q ^ ~D & z, e[32] = J ^ ~G & X, e[33] = Y ^ ~Z & $, e[42] = ne ^ ~oe & se, e[43] = ie ^ ~ae & ue, e[4] = m ^ ~w & k, e[5] = _ ^ ~x & S, e[14] = T ^ ~O & I, e[15] = C ^ ~P & B, e[24] = U ^ ~H & F, e[25] = D ^ ~z & K, e[34] = G ^ ~X & Q, e[35] = Z ^ ~$ & ee, e[44] = oe ^ ~se & ce, e[45] = ae ^ ~ue & fe, e[6] = w ^ ~k & p, e[7] = x ^ ~S & b, e[16] = O ^ ~I & E, e[17] = P ^ ~B & M, e[26] = H ^ ~F & L, e[27] = z ^ ~K & j, e[36] = X ^ ~Q & W, e[37] = $ ^ ~ee & V, e[46] = se ^ ~ce & te, e[47] = ue ^ ~fe & re, e[8] = k ^ ~p & g, e[9] = S ^ ~b & y, e[18] = I ^ ~E & A, e[19] = B ^ ~M & R, e[28] = F ^ ~L & N, e[29] = K ^ ~j & q, e[38] = Q ^ ~W & J, e[39] = ee ^ ~V & Y, e[48] = ce ^ ~te & ne, e[49] = fe ^ ~re & ie, e[0] ^= v[n], e[1] ^= v[n + 1] }; if (f) e.exports = R;
                else { for (C = 0; C < T.length; ++C) u[T[C]] = R[T[C]];
                    d && (void 0 === (o = function() { return R }.call(t, r, t, e)) || (e.exports = o)) } }() }).call(this, r(246), r(147)) }, function(e, t) {
        (function(t) { e.exports = t }).call(this, {}) }, function(e, t, r) { "use strict";
        r(877), r(918); var n = r(1018);
        r.o(n, "payloadId") && r.d(t, "payloadId", (function() { return n.payloadId })); var i = r(1019);
        r.d(t, "payloadId", (function() { return i.a }));
        r(1020), r(1021), r(1026), r(1027) }, function(e, t, r) { "use strict";
        (function(e) {
            function r() { return (null === e || void 0 === e ? void 0 : e.crypto) || (null === e || void 0 === e ? void 0 : e.msCrypto) || {} }

            function n() { var e = r(); return e.subtle || e.webkitSubtle }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = r, t.getSubtleCrypto = n, t.isBrowserCryptoAvailable = function() { return !!r() && !!n() } }).call(this, r(147)) }, function(e, t, r) { "use strict";
        (function(e) {
            function r() { return "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product }

            function n() { return "undefined" !== typeof e && "undefined" !== typeof e.versions && "undefined" !== typeof e.versions.node }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = r, t.isNode = n, t.isBrowser = function() { return !r() && !n() } }).call(this, r(246)) }, function(e, t, r) { "use strict"; var n = r(377),
            i = r(158),
            o = r(917),
            a = r(1300),
            s = r(1301),
            u = r(1302);

        function c(e) { if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string") }

        function f(e, t) { return t.encode ? t.strict ? a(e) : encodeURIComponent(e) : e }

        function d(e, t) { return t.decode ? s(e) : e }

        function l(e) { return Array.isArray(e) ? e.sort() : "object" === typeof e ? l(Object.keys(e)).sort((function(e, t) { return Number(e) - Number(t) })).map((function(t) { return e[t] })) : e }

        function h(e) { var t = e.indexOf("#"); return -1 !== t && (e = e.slice(0, t)), e }

        function p(e) { var t = (e = h(e)).indexOf("?"); return -1 === t ? "" : e.slice(t + 1) }

        function b(e, t) { return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e }

        function v(e, t) { c((t = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, t)).arrayFormatSeparator); var r = function(e) { var t; switch (e.arrayFormat) {
                        case "index":
                            return function(e, r, n) { t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r };
                        case "bracket":
                            return function(e, r, n) { t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r };
                        case "comma":
                        case "separator":
                            return function(t, r, n) { var i = "string" === typeof r && r.split("").indexOf(e.arrayFormatSeparator) > -1 ? r.split(e.arrayFormatSeparator).map((function(t) { return d(t, e) })) : null === r ? r : d(r, e);
                                n[t] = i };
                        default:
                            return function(e, t, r) { void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t } } }(t),
                o = Object.create(null); if ("string" !== typeof e) return o; if (!(e = e.trim().replace(/^[?#&]/, ""))) return o; var a, s = i(e.split("&")); try { for (s.s(); !(a = s.n()).done;) { var f = a.value,
                        h = u(t.decode ? f.replace(/\+/g, " ") : f, "="),
                        p = n(h, 2),
                        v = p[0],
                        g = p[1];
                    g = void 0 === g ? null : ["comma", "separator"].includes(t.arrayFormat) ? g : d(g, t), r(d(v, t), g, o) } } catch (E) { s.e(E) } finally { s.f() } for (var y = 0, m = Object.keys(o); y < m.length; y++) { var _ = m[y],
                    w = o[_]; if ("object" === typeof w && null !== w)
                    for (var x = 0, k = Object.keys(w); x < k.length; x++) { var S = k[x];
                        w[S] = b(w[S], t) } else o[_] = b(w, t) } return !1 === t.sort ? o : (!0 === t.sort ? Object.keys(o).sort() : Object.keys(o).sort(t.sort)).reduce((function(e, t) { var r = o[t]; return Boolean(r) && "object" === typeof r && !Array.isArray(r) ? e[t] = l(r) : e[t] = r, e }), Object.create(null)) }
        t.extract = p, t.parse = v, t.stringify = function(e, t) { if (!e) return "";
            c((t = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, t)).arrayFormatSeparator); for (var r = function(r) { return t.skipNull && (null === (n = e[r]) || void 0 === n) || t.skipEmptyString && "" === e[r]; var n }, n = function(e) { switch (e.arrayFormat) {
                        case "index":
                            return function(t) { return function(r, n) { var i = r.length; return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(o(r), null === n ? [
                                        [f(t, e), "[", i, "]"].join("")
                                    ] : [
                                        [f(t, e), "[", f(i, e), "]=", f(n, e)].join("")
                                    ]) } };
                        case "bracket":
                            return function(t) { return function(r, n) { return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(o(r), null === n ? [
                                        [f(t, e), "[]"].join("")
                                    ] : [
                                        [f(t, e), "[]=", f(n, e)].join("")
                                    ]) } };
                        case "comma":
                        case "separator":
                            return function(t) { return function(r, n) { return null === n || void 0 === n || 0 === n.length ? r : 0 === r.length ? [
                                        [f(t, e), "=", f(n, e)].join("")
                                    ] : [
                                        [r, f(n, e)].join(e.arrayFormatSeparator)
                                    ] } };
                        default:
                            return function(t) { return function(r, n) { return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(o(r), null === n ? [f(t, e)] : [
                                        [f(t, e), "=", f(n, e)].join("")
                                    ]) } } } }(t), i = {}, a = 0, s = Object.keys(e); a < s.length; a++) { var u = s[a];
                r(u) || (i[u] = e[u]) } var d = Object.keys(i); return !1 !== t.sort && d.sort(t.sort), d.map((function(r) { var i = e[r]; return void 0 === i ? "" : null === i ? f(r, t) : Array.isArray(i) ? i.reduce(n(r), []).join("&") : f(r, t) + "=" + f(i, t) })).filter((function(e) { return e.length > 0 })).join("&") }, t.parseUrl = function(e, t) { t = Object.assign({ decode: !0 }, t); var r = u(e, "#"),
                i = n(r, 2),
                o = i[0],
                a = i[1]; return Object.assign({ url: o.split("?")[0] || "", query: v(p(e), t) }, t && t.parseFragmentIdentifier && a ? { fragmentIdentifier: d(a, t) } : {}) }, t.stringifyUrl = function(e, r) { r = Object.assign({ encode: !0, strict: !0 }, r); var n = h(e.url).split("?")[0] || "",
                i = t.extract(e.url),
                o = t.parse(i, { sort: !1 }),
                a = Object.assign(o, e.query),
                s = t.stringify(a, r);
            s && (s = "?".concat(s)); var u = function(e) { var t = "",
                    r = e.indexOf("#"); return -1 !== r && (t = e.slice(r)), t }(e.url); return e.fragmentIdentifier && (u = "#".concat(f(e.fragmentIdentifier, r))), "".concat(n).concat(s).concat(u) } }, function(e, t, r) { "use strict";
        e.exports = function(e) { return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) { return "%".concat(e.charCodeAt(0).toString(16).toUpperCase()) })) } }, function(e, t, r) { "use strict"; var n = "%[a-f0-9]{2}",
            i = new RegExp(n, "gi"),
            o = new RegExp("(" + n + ")+", "gi");

        function a(e, t) { try { return decodeURIComponent(e.join("")) } catch (i) {} if (1 === e.length) return e;
            t = t || 1; var r = e.slice(0, t),
                n = e.slice(t); return Array.prototype.concat.call([], a(r), a(n)) }

        function s(e) { try { return decodeURIComponent(e) } catch (n) { for (var t = e.match(i), r = 1; r < t.length; r++) t = (e = a(t, r).join("")).match(i); return e } }
        e.exports = function(e) { if ("string" !== typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"); try { return e = e.replace(/\+/g, " "), decodeURIComponent(e) } catch (t) { return function(e) { for (var r = { "%FE%FF": "\ufffd\ufffd", "%FF%FE": "\ufffd\ufffd" }, n = o.exec(e); n;) { try { r[n[0]] = decodeURIComponent(n[0]) } catch (t) { var i = s(n[0]);
                            i !== n[0] && (r[n[0]] = i) }
                        n = o.exec(e) }
                    r["%C2"] = "\ufffd"; for (var a = Object.keys(r), u = 0; u < a.length; u++) { var c = a[u];
                        e = e.replace(new RegExp(c, "g"), r[c]) } return e }(e) } } }, function(e, t, r) { "use strict";
        e.exports = function(e, t) { if ("string" !== typeof e || "string" !== typeof t) throw new TypeError("Expected the arguments to be of type `string`"); if ("" === t) return [e]; var r = e.indexOf(t); return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)] } }, function(e, t, r) { "use strict";
        (function(e) { var n = r(3),
                i = r.n(n),
                o = r(13),
                a = r(18),
                s = r(20),
                u = r(829),
                c = r(1304),
                f = "undefined" !== typeof e.WebSocket ? e.WebSocket : r(1305),
                d = function() {
                    function e(t) { var r = this; if (Object(a.a)(this, e), this._queue = [], this._events = [], this._subscriptions = [], this._protocol = t.protocol, this._version = t.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = t.subscriptions || [], this._netMonitor = t.netMonitor || new c.a, !t.url || "string" !== typeof t.url) throw new Error("Missing or invalid WebSocket url");
                        this._url = t.url, this._netMonitor.on("online", (function() { return r._socketCreate() })) } return Object(s.a)(e, [{ key: "readyState", get: function() { return this._socket ? this._socket.readyState : -1 }, set: function(e) {} }, { key: "connecting", get: function() { return 0 === this.readyState }, set: function(e) {} }, { key: "connected", get: function() { return 1 === this.readyState }, set: function(e) {} }, { key: "closing", get: function() { return 2 === this.readyState }, set: function(e) {} }, { key: "closed", get: function() { return 3 === this.readyState }, set: function(e) {} }, { key: "open", value: function() { this._socketCreate() } }, { key: "close", value: function() { this._socketClose() } }, { key: "send", value: function(e, t, r) { if (!t || "string" !== typeof t) throw new Error("Missing or invalid topic field");
                            this._socketSend({ topic: t, type: "pub", payload: e, silent: !!r }) } }, { key: "subscribe", value: function(e) { this._socketSend({ topic: e, type: "sub", payload: "", silent: !0 }) } }, { key: "on", value: function(e, t) { this._events.push({ event: e, callback: t }) } }, { key: "_socketCreate", value: function() { var e = this; if (!this._nextSocket) { var t = function(e, t, r) { var n, i, o = (e.startsWith("https") ? e.replace("https", "wss") : e.startsWith("http") ? e.replace("http", "ws") : e).split("?"),
                                        a = Object(u.o)() ? { protocol: t, version: r, env: "browser", host: (null === (n = Object(u.l)()) || void 0 === n ? void 0 : n.host) || "" } : { protocol: t, version: r, env: (null === (i = Object(u.g)()) || void 0 === i ? void 0 : i.name) || "" },
                                        s = Object(u.a)(Object(u.m)(o[1] || ""), a); return o[0] + "?" + s }(this._url, this._protocol, this._version); if (this._nextSocket = new f(t), !this._nextSocket) throw new Error("Failed to create socket");
                                this._nextSocket.onmessage = function(t) { return e._socketReceive(t) }, this._nextSocket.onopen = function() { return e._socketOpen() }, this._nextSocket.onerror = function(t) { return e._socketError(t) }, this._nextSocket.onclose = function() { e._nextSocket = null, e._socketCreate() } } } }, { key: "_socketOpen", value: function() { this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue() } }, { key: "_socketClose", value: function() { this._socket && (this._socket.onclose = function() {}, this._socket.close()) } }, { key: "_socketSend", value: function(e) { var t = JSON.stringify(e);
                            this._socket && 1 === this._socket.readyState ? this._socket.send(t) : (this._setToQueue(e), this._socketCreate()) } }, { key: "_socketReceive", value: function() { var e = Object(o.a)(i.a.mark((function e(t) { var r, n; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            e.prev = 0, r = JSON.parse(t.data), e.next = 7; break;
                                        case 4:
                                            return e.prev = 4, e.t0 = e.catch(0), e.abrupt("return");
                                        case 7:
                                            this._socketSend({ topic: r.topic, type: "ack", payload: "", silent: !0 }), this._socket && 1 === this._socket.readyState && (n = this._events.filter((function(e) { return "message" === e.event }))) && n.length && n.forEach((function(e) { return e.callback(r) }));
                                        case 9:
                                        case "end":
                                            return e.stop() } }), e, this, [
                                    [0, 4]
                                ]) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "_socketError", value: function(e) { var t = this._events.filter((function(e) { return "error" === e.event }));
                            t && t.length && t.forEach((function(t) { return t.callback(e) })) } }, { key: "_queueSubscriptions", value: function() { var e = this;
                            this._subscriptions.forEach((function(t) { return e._queue.push({ topic: t, type: "sub", payload: "", silent: !0 }) })), this._subscriptions = [] } }, { key: "_setToQueue", value: function(e) { this._queue.push(e) } }, { key: "_pushQueue", value: function() { var e = this;
                            this._queue.forEach((function(t) { return e._socketSend(t) })), this._queue = [] } }]), e }();
            t.a = d }).call(this, r(147)) }, function(e, t, r) { "use strict"; var n = r(18),
            i = r(20),
            o = function() {
                function e() { var t = this;
                    Object(n.a)(this, e), this._eventEmitters = [], "undefined" !== typeof window && "undefined" !== typeof window.addEventListener && (window.addEventListener("online", (function() { return t.trigger("online") })), window.addEventListener("offline", (function() { return t.trigger("offline") }))) } return Object(i.a)(e, [{ key: "on", value: function(e, t) { this._eventEmitters.push({ event: e, callback: t }) } }, { key: "trigger", value: function(e) { var t = [];
                        e && (t = this._eventEmitters.filter((function(t) { return t.event === e }))), t.forEach((function(e) { e.callback() })) } }]), e }();
        t.a = o }, function(e, t, r) { "use strict";
        e.exports = function() { throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object") } }, function(e, t, r) { "use strict"; var n = r(1028);
        r.d(t, "randomBytes", (function() { return n.a })); var i = r(1029);
        r.d(t, "aesCbcDecrypt", (function() { return i.a })), r.d(t, "aesCbcEncrypt", (function() { return i.b })); var o = r(1030);
        r.d(t, "hmacSha256Sign", (function() { return o.a }));
        r(1035), r(921), r(946) }, function(e, t, r) {
        (function(t) {
            function n(e) { return e && "object" === typeof e && "default" in e ? e.default : e } var i = r(945),
                o = n(r(1308)),
                a = n(r(1329)),
                s = r(1488); var u = "walletconnect-wrapper",
                c = "walletconnect-style-sheet",
                f = "walletconnect-qrcode-modal",
                d = "walletconnect-qrcode-text";

            function l(e) { return s.createElement("div", { className: "walletconnect-modal__header" }, s.createElement("img", { src: "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E", className: "walletconnect-modal__headerLogo" }), s.createElement("p", null, "WalletConnect"), s.createElement("div", { className: "walletconnect-modal__close__wrapper", onClick: e.onClose }, s.createElement("div", { id: "walletconnect-qrcode-close", className: "walletconnect-modal__close__icon" }, s.createElement("div", { className: "walletconnect-modal__close__line1" }), s.createElement("div", { className: "walletconnect-modal__close__line2" })))) } "undefined" !== typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" !== typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));

            function h(e) { return s.createElement("a", { className: "walletconnect-connect__button", href: e.href, id: "walletconnect-connect-button-" + e.name, onClick: e.onClick, rel: "noopener noreferrer", style: { backgroundColor: e.color }, target: "_blank" }, e.name) }

            function p(e) { var t = e.color,
                    r = e.href,
                    n = e.name,
                    i = e.logo,
                    o = e.onClick; return s.createElement("a", { className: "walletconnect-modal__base__row", href: r, onClick: o, rel: "noopener noreferrer", target: "_blank" }, s.createElement("h3", { className: "walletconnect-modal__base__row__h3" }, n), s.createElement("div", { className: "walletconnect-modal__base__row__right" }, s.createElement("div", { className: "walletconnect-modal__base__row__right__app-icon", style: { background: "url('" + i + "') " + t, backgroundSize: "100%" } }), s.createElement("img", { src: "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E", className: "walletconnect-modal__base__row__right__caret" }))) }

            function b(e) { var t = e.color,
                    r = e.href,
                    n = e.name,
                    i = e.logo,
                    o = e.onClick; return s.createElement("a", { className: "walletconnect-connect__button__icon_anchor", href: r, onClick: o, rel: "noopener noreferrer", target: "_blank" }, s.createElement("div", { className: "walletconnect-connect__button__icon", style: { background: "url('" + i + "') " + t, backgroundSize: "100%" } }), s.createElement("div", { style: { fontSize: (n.length > 8 ? 2.5 : 2.7) + "vw" }, className: "walletconnect-connect__button__text" }, n)) }

            function v(e) { var t = i.isAndroid(),
                    r = e.qrcodeModalOptions && e.qrcodeModalOptions.mobileLinks ? e.qrcodeModalOptions.mobileLinks : void 0,
                    n = s.useState(1),
                    o = n[0],
                    a = n[1],
                    u = s.useState(!1),
                    c = u[0],
                    f = u[1],
                    l = s.useState([]),
                    v = l[0],
                    g = l[1];
                s.useEffect((function() {! function() { try { if (t) return Promise.resolve(); var n = function(e, t) { try { var r = e() } catch (n) { return t(n) } return r && r.then ? r.then(void 0, t) : r }((function() { var t = i.getWalletRegistryUrl(); return Promise.resolve(fetch(t).then((function(e) { return e.json() }))).then((function(t) { var n = e.mobile ? "mobile" : "desktop",
                                        o = i.getMobileLinkRegistry(i.formatMobileRegistry(t, n), r);
                                    g(o) })) }), (function(e) { console.error(e), f(!0) }));
                            Promise.resolve(n && n.then ? n.then((function() {})) : void 0) } catch (o) { return Promise.reject(o) } }() }), []); var y = v.length > 5,
                    m = Math.ceil(v.length / 12),
                    _ = [12 * (o - 1) + 1, 12 * o],
                    w = v.length ? v.filter((function(e, t) { return t + 1 >= _[0] && t + 1 <= _[1] })) : []; return s.createElement("div", null, s.createElement("p", { id: d, className: "walletconnect-qrcode__text" }, t ? e.text.connect_mobile_wallet : e.text.choose_preferred_wallet), s.createElement("div", { className: "walletconnect-connect__buttons__wrapper" + (t ? "__android" : y ? "__wrap" : "") }, t ? s.createElement(h, { name: e.text.connect, color: "rgb(64, 153, 255)", href: e.uri, onClick: s.useCallback((function() { i.saveMobileLinkInfo({ name: "Unknown", href: e.uri }) }), []) }) : w.length ? w.map((function(t) { var r = t.color,
                        n = t.name,
                        o = t.shortName,
                        a = t.logo,
                        u = i.formatIOSMobile(e.uri, t),
                        c = s.useCallback((function() { i.saveMobileLinkInfo({ name: n, href: u }) }), []); return y ? s.createElement(b, { color: r, href: u, name: o, logo: a, onClick: c }) : s.createElement(p, { color: r, href: u, name: n, logo: a, onClick: c }) })) : s.createElement(s.Fragment, null, s.createElement("p", null, c ? "Something went wrong" : "Loading..."))), !(t || !(m > 1)) && s.createElement("div", { className: "walletconnect-modal__footer" }, Array(m).fill(0).map((function(e, t) { var r = t + 1,
                        n = o === r; return s.createElement("a", { style: { margin: "auto 10px", fontWeight: n ? "bold" : "normal" }, onClick: function() { return a(r) } }, r) })))) }

            function g(e) { var t = !!e.message.trim(); return s.createElement("div", { className: "walletconnect-qrcode__notification" + (t ? " notification__show" : "") }, e.message) }

            function y(e) { var t = s.useState(""),
                    r = t[0],
                    n = t[1],
                    i = s.useState(""),
                    u = i[0],
                    c = i[1];
                s.useEffect((function() { try { return Promise.resolve(function(e) { try { var t = ""; return Promise.resolve(o.toString(e, { margin: 0, type: "svg" })).then((function(e) { return "string" === typeof e && (t = e.replace("<svg", '<svg class="walletconnect-qrcode__image"')), t })) } catch (r) { return Promise.reject(r) } }(e.uri)).then((function(e) { c(e) })) } catch (t) { Promise.reject(t) } }), []); return s.createElement("div", null, s.createElement("p", { id: d, className: "walletconnect-qrcode__text" }, e.text.scan_qrcode_with_wallet), s.createElement("div", { dangerouslySetInnerHTML: { __html: u } }), s.createElement("div", { className: "walletconnect-modal__footer" }, s.createElement("a", { onClick: function() { a(e.uri) ? (n(e.text.copied_to_clipboard), setInterval((function() { return n("") }), 1200)) : (n("Error"), setInterval((function() { return n("") }), 1200)) } }, e.text.copy_to_clipboard)), s.createElement(g, { message: r })) }

            function m(e) { var t = i.isMobile(),
                    r = s.useState(!t),
                    n = r[0],
                    o = r[1],
                    a = { mobile: t, text: e.text, uri: e.uri, qrcodeModalOptions: e.qrcodeModalOptions },
                    u = t ? n : !n; return s.createElement("div", { id: f, className: "walletconnect-qrcode__base animated fadeIn" }, s.createElement("div", { className: "walletconnect-modal__base" }, s.createElement(l, { onClose: e.onClose }), s.createElement("div", { className: "walletconnect-modal__mobile__toggle" + (u ? " right__selected" : "") }, s.createElement("div", { className: "walletconnect-modal__mobile__toggle_selector" }), t ? s.createElement(s.Fragment, null, s.createElement("a", { onClick: function() { return o(!1) } }, e.text.mobile), s.createElement("a", { onClick: function() { return o(!0) } }, e.text.qrcode)) : s.createElement(s.Fragment, null, s.createElement("a", { onClick: function() { return o(!0) } }, e.text.qrcode), s.createElement("a", { onClick: function() { return o(!1) } }, e.text.desktop))), s.createElement("div", null, n ? s.createElement(y, Object.assign({}, a)) : s.createElement(v, Object.assign({}, a))))) } var _ = { de: { choose_preferred_wallet: "W\xe4hle bevorzugte Wallet", connect_mobile_wallet: "Verbinde mit Mobile Wallet", scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet", connect: "Verbinden", qrcode: "QR-Code", mobile: "Mobile", desktop: "Desktop", copy_to_clipboard: "In die Zwischenablage kopieren", copied_to_clipboard: "In die Zwischenablage kopiert!" }, en: { choose_preferred_wallet: "Choose your preferred wallet", connect_mobile_wallet: "Connect to Mobile Wallet", scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet", connect: "Connect", qrcode: "QR Code", mobile: "Mobile", desktop: "Desktop", copy_to_clipboard: "Copy to clipboard", copied_to_clipboard: "Copied to clipboard!" }, es: { choose_preferred_wallet: "Elige tu billetera preferida", connect_mobile_wallet: "Conectar a billetera m\xf3vil", scan_qrcode_with_wallet: "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect", connect: "Conectar", qrcode: "C\xf3digo QR", mobile: "M\xf3vil", desktop: "Desktop", copy_to_clipboard: "Copiar", copied_to_clipboard: "Copiado!" }, fr: { choose_preferred_wallet: "Choisissez votre portefeuille pr\xe9f\xe9r\xe9", connect_mobile_wallet: "Se connecter au portefeuille mobile", scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect", connect: "Se connecter", qrcode: "QR Code", mobile: "Mobile", desktop: "Desktop", copy_to_clipboard: "Copier", copied_to_clipboard: "Copi\xe9!" }, ko: { choose_preferred_wallet: "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694", connect_mobile_wallet: "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0", scan_qrcode_with_wallet: "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694", connect: "\uc5f0\uacb0", qrcode: "QR \ucf54\ub4dc", mobile: "\ubaa8\ubc14\uc77c", desktop: "\ub370\uc2a4\ud06c\ud0d1", copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac", copied_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!" }, pt: { choose_preferred_wallet: "Escolha sua carteira preferida", connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel", scan_qrcode_with_wallet: "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect", connect: "Conectar", qrcode: "C\xf3digo QR", mobile: "M\xf3vel", desktop: "Desktop", copy_to_clipboard: "Copiar", copied_to_clipboard: "Copiado!" }, zh: { choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305", connect_mobile_wallet: "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305", scan_qrcode_with_wallet: "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801", connect: "\u8fde\u63a5", qrcode: "\u4e8c\u7ef4\u7801", mobile: "\u79fb\u52a8", desktop: "\u684c\u9762", copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f", copied_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01" }, fa: { choose_preferred_wallet: "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f", connect_mobile_wallet: "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f", scan_qrcode_with_wallet: "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f", connect: "\u0627\u062a\u0635\u0627\u0644", qrcode: "\u06a9\u062f QR", mobile: "\u0633\u06cc\u0627\u0631", desktop: "\u062f\u0633\u06a9\u062a\u0627\u067e", copy_to_clipboard: "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f", copied_to_clipboard: "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!" } };

            function w() { var e = i.getDocumentOrThrow(),
                    t = e.getElementById(f);
                t && (t.className = t.className.replace("fadeIn", "fadeOut"), setTimeout((function() { var t = e.getElementById(u);
                    t && e.body.removeChild(t) }), 300)) }

            function x(e) { return function() { w(), e && e() } }

            function k() { var e = i.getNavigatorOrThrow().language.split("-")[0] || "en"; return _[e] || _.en }

            function S(e, t, r) {! function() { var e = i.getDocumentOrThrow(),
                        t = e.getElementById(c);
                    t && e.head.removeChild(t); var r = e.createElement("style");
                    r.setAttribute("id", c), r.innerText = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 30px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n', e.head.appendChild(r) }(); var n = function() { var e = i.getDocumentOrThrow(),
                        t = e.createElement("div"); return t.setAttribute("id", u), e.body.appendChild(t), t }();
                s.render(s.createElement(m, { text: k(), uri: e, onClose: x(t), qrcodeModalOptions: r }), n) } var E = function() { return "undefined" !== typeof t && "undefined" !== typeof t.versions && "undefined" !== typeof t.versions.node }; var M = { open: function(e, t, r) { console.log(e), E() ? function(e) { o.toString(e, { type: "terminal" }).then(console.log) }(e) : S(e, t, r) }, close: function() { E() || w() } };
            e.exports = M }).call(this, r(246)) }, function(e, t, r) { var n = r(1309),
            i = r(1310),
            o = r(1327),
            a = r(1328);

        function s(e, t, r, o, a) { var s = [].slice.call(arguments, 1),
                u = s.length,
                c = "function" === typeof s[u - 1]; if (!c && !n()) throw new Error("Callback required as last argument"); if (!c) { if (u < 1) throw new Error("Too few arguments provided"); return 1 === u ? (r = t, t = o = void 0) : 2 !== u || t.getContext || (o = r, r = t, t = void 0), new Promise((function(n, a) { try { var s = i.create(r, o);
                        n(e(s, t, o)) } catch (u) { a(u) } })) } if (u < 2) throw new Error("Too few arguments provided");
            2 === u ? (a = r, r = t, t = o = void 0) : 3 === u && (t.getContext && "undefined" === typeof a ? (a = o, o = void 0) : (a = o, o = r, r = t, t = void 0)); try { var f = i.create(r, o);
                a(null, e(f, t, o)) } catch (d) { a(d) } }
        t.create = i.create, t.toCanvas = s.bind(null, o.render), t.toDataURL = s.bind(null, o.renderToDataURL), t.toString = s.bind(null, (function(e, t, r) { return a.render(e, r) })) }, function(e, t) { e.exports = function() { return "function" === typeof Promise && Promise.prototype && Promise.prototype.then } }, function(e, t, r) { var n = r(835),
            i = r(824),
            o = r(923),
            a = r(1311),
            s = r(1312),
            u = r(1313),
            c = r(1314),
            f = r(1315),
            d = r(1036),
            l = r(1316),
            h = r(1319),
            p = r(1320),
            b = r(825),
            v = r(1321),
            g = r(922);

        function y(e, t, r) { var n, i, o = e.size,
                a = p.getEncodedBits(t, r); for (n = 0; n < 15; n++) i = 1 === (a >> n & 1), n < 6 ? e.set(n, 8, i, !0) : n < 8 ? e.set(n + 1, 8, i, !0) : e.set(o - 15 + n, 8, i, !0), n < 8 ? e.set(8, o - n - 1, i, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, i, !0) : e.set(8, 15 - n - 1, i, !0);
            e.set(o - 8, 8, 1, !0) }

        function m(e, t, r) { var o = new a;
            r.forEach((function(t) { o.put(t.mode.bit, 4), o.put(t.getLength(), b.getCharCountIndicator(t.mode, e)), t.write(o) })); var s = 8 * (i.getSymbolTotalCodewords(e) - d.getTotalCodewordsCount(e, t)); for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 !== 0;) o.putBit(0); for (var u = (s - o.getLengthInBits()) / 8, c = 0; c < u; c++) o.put(c % 2 ? 17 : 236, 8); return function(e, t, r) { for (var o = i.getSymbolTotalCodewords(t), a = d.getTotalCodewordsCount(t, r), s = o - a, u = d.getBlocksCount(t, r), c = u - o % u, f = Math.floor(o / u), h = Math.floor(s / u), p = h + 1, b = f - h, v = new l(b), g = 0, y = new Array(u), m = new Array(u), _ = 0, w = n.from(e.buffer), x = 0; x < u; x++) { var k = x < c ? h : p;
                    y[x] = w.slice(g, g + k), m[x] = v.encode(y[x]), g += k, _ = Math.max(_, k) } var S, E, M = n.alloc(o),
                    A = 0; for (S = 0; S < _; S++)
                    for (E = 0; E < u; E++) S < y[E].length && (M[A++] = y[E][S]); for (S = 0; S < b; S++)
                    for (E = 0; E < u; E++) M[A++] = m[E][S]; return M }(o, e, t) }

        function _(e, t, r, n) { var o; if (g(e)) o = v.fromArray(e);
            else { if ("string" !== typeof e) throw new Error("Invalid data"); var a = t; if (!a) { var d = v.rawSplit(e);
                    a = h.getBestVersionForData(d, r) }
                o = v.fromString(e, a || 40) } var l = h.getBestVersionForData(o, r); if (!l) throw new Error("The amount of data is too big to be stored in a QR Code"); if (t) { if (t < l) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + l + ".\n") } else t = l; var p = m(t, r, o),
                b = i.getSymbolSize(t),
                _ = new s(b); return function(e, t) { for (var r = e.size, n = c.getPositions(t), i = 0; i < n.length; i++)
                        for (var o = n[i][0], a = n[i][1], s = -1; s <= 7; s++)
                            if (!(o + s <= -1 || r <= o + s))
                                for (var u = -1; u <= 7; u++) a + u <= -1 || r <= a + u || (s >= 0 && s <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && u >= 2 && u <= 4 ? e.set(o + s, a + u, !0, !0) : e.set(o + s, a + u, !1, !0)) }(_, t),
                function(e) { for (var t = e.size, r = 8; r < t - 8; r++) { var n = r % 2 === 0;
                        e.set(r, 6, n, !0), e.set(6, r, n, !0) } }(_),
                function(e, t) { for (var r = u.getPositions(t), n = 0; n < r.length; n++)
                        for (var i = r[n][0], o = r[n][1], a = -2; a <= 2; a++)
                            for (var s = -2; s <= 2; s++) - 2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? e.set(i + a, o + s, !0, !0) : e.set(i + a, o + s, !1, !0) }(_, t), y(_, r, 0), t >= 7 && function(e, t) { for (var r, n, i, o = e.size, a = h.getEncodedBits(t), s = 0; s < 18; s++) r = Math.floor(s / 3), n = s % 3 + o - 8 - 3, i = 1 === (a >> s & 1), e.set(r, n, i, !0), e.set(n, r, i, !0) }(_, t),
                function(e, t) { for (var r = e.size, n = -1, i = r - 1, o = 7, a = 0, s = r - 1; s > 0; s -= 2)
                        for (6 === s && s--;;) { for (var u = 0; u < 2; u++)
                                if (!e.isReserved(i, s - u)) { var c = !1;
                                    a < t.length && (c = 1 === (t[a] >>> o & 1)), e.set(i, s - u, c), -1 === --o && (a++, o = 7) }
                            if ((i += n) < 0 || r <= i) { i -= n, n = -n; break } } }(_, p), isNaN(n) && (n = f.getBestMask(_, y.bind(null, _, r))), f.applyMask(n, _), y(_, r, n), { modules: _, version: t, errorCorrectionLevel: r, maskPattern: n, segments: o } }
        t.create = function(e, t) { if ("undefined" === typeof e || "" === e) throw new Error("No input text"); var r, n, a = o.M; return "undefined" !== typeof t && (a = o.from(t.errorCorrectionLevel, o.M), r = h.from(t.version), n = f.from(t.maskPattern), t.toSJISFunc && i.setToSJISFunction(t.toSJISFunc)), _(e, r, a, n) } }, function(e, t) {
        function r() { this.buffer = [], this.length = 0 }
        r.prototype = { get: function(e) { var t = Math.floor(e / 8); return 1 === (this.buffer[t] >>> 7 - e % 8 & 1) }, put: function(e, t) { for (var r = 0; r < t; r++) this.putBit(1 === (e >>> t - r - 1 & 1)) }, getLengthInBits: function() { return this.length }, putBit: function(e) { var t = Math.floor(this.length / 8);
                this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++ } }, e.exports = r }, function(e, t, r) { var n = r(835);

        function i(e) { if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
            this.size = e, this.data = n.alloc(e * e), this.reservedBit = n.alloc(e * e) }
        i.prototype.set = function(e, t, r, n) { var i = e * this.size + t;
            this.data[i] = r, n && (this.reservedBit[i] = !0) }, i.prototype.get = function(e, t) { return this.data[e * this.size + t] }, i.prototype.xor = function(e, t, r) { this.data[e * this.size + t] ^= r }, i.prototype.isReserved = function(e, t) { return this.reservedBit[e * this.size + t] }, e.exports = i }, function(e, t, r) { var n = r(824).getSymbolSize;
        t.getRowColCoords = function(e) { if (1 === e) return []; for (var t = Math.floor(e / 7) + 2, r = n(e), i = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)), o = [r - 7], a = 1; a < t - 1; a++) o[a] = o[a - 1] - i; return o.push(6), o.reverse() }, t.getPositions = function(e) { for (var r = [], n = t.getRowColCoords(e), i = n.length, o = 0; o < i; o++)
                for (var a = 0; a < i; a++) 0 === o && 0 === a || 0 === o && a === i - 1 || o === i - 1 && 0 === a || r.push([n[o], n[a]]); return r } }, function(e, t, r) { var n = r(824).getSymbolSize;
        t.getPositions = function(e) { var t = n(e); return [
                [0, 0],
                [t - 7, 0],
                [0, t - 7]
            ] } }, function(e, t) { t.Patterns = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }; var r = 3,
            n = 3,
            i = 40,
            o = 10;

        function a(e, r, n) { switch (e) {
                case t.Patterns.PATTERN000:
                    return (r + n) % 2 === 0;
                case t.Patterns.PATTERN001:
                    return r % 2 === 0;
                case t.Patterns.PATTERN010:
                    return n % 3 === 0;
                case t.Patterns.PATTERN011:
                    return (r + n) % 3 === 0;
                case t.Patterns.PATTERN100:
                    return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 === 0;
                case t.Patterns.PATTERN101:
                    return r * n % 2 + r * n % 3 === 0;
                case t.Patterns.PATTERN110:
                    return (r * n % 2 + r * n % 3) % 2 === 0;
                case t.Patterns.PATTERN111:
                    return (r * n % 3 + (r + n) % 2) % 2 === 0;
                default:
                    throw new Error("bad maskPattern:" + e) } }
        t.isValid = function(e) { return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7 }, t.from = function(e) { return t.isValid(e) ? parseInt(e, 10) : void 0 }, t.getPenaltyN1 = function(e) { for (var t = e.size, n = 0, i = 0, o = 0, a = null, s = null, u = 0; u < t; u++) { i = o = 0, a = s = null; for (var c = 0; c < t; c++) { var f = e.get(u, c);
                    f === a ? i++ : (i >= 5 && (n += r + (i - 5)), a = f, i = 1), (f = e.get(c, u)) === s ? o++ : (o >= 5 && (n += r + (o - 5)), s = f, o = 1) }
                i >= 5 && (n += r + (i - 5)), o >= 5 && (n += r + (o - 5)) } return n }, t.getPenaltyN2 = function(e) { for (var t = e.size, r = 0, i = 0; i < t - 1; i++)
                for (var o = 0; o < t - 1; o++) { var a = e.get(i, o) + e.get(i, o + 1) + e.get(i + 1, o) + e.get(i + 1, o + 1);
                    4 !== a && 0 !== a || r++ }
            return r * n }, t.getPenaltyN3 = function(e) { for (var t = e.size, r = 0, n = 0, o = 0, a = 0; a < t; a++) { n = o = 0; for (var s = 0; s < t; s++) n = n << 1 & 2047 | e.get(a, s), s >= 10 && (1488 === n || 93 === n) && r++, o = o << 1 & 2047 | e.get(s, a), s >= 10 && (1488 === o || 93 === o) && r++ } return r * i }, t.getPenaltyN4 = function(e) { for (var t = 0, r = e.data.length, n = 0; n < r; n++) t += e.data[n]; return Math.abs(Math.ceil(100 * t / r / 5) - 10) * o }, t.applyMask = function(e, t) { for (var r = t.size, n = 0; n < r; n++)
                for (var i = 0; i < r; i++) t.isReserved(i, n) || t.xor(i, n, a(e, i, n)) }, t.getBestMask = function(e, r) { for (var n = Object.keys(t.Patterns).length, i = 0, o = 1 / 0, a = 0; a < n; a++) { r(a), t.applyMask(a, e); var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                t.applyMask(a, e), s < o && (o = s, i = a) } return i } }, function(e, t, r) { var n = r(835),
            i = r(1317),
            o = r(785).Buffer;

        function a(e) { this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree) }
        a.prototype.initialize = function(e) { this.degree = e, this.genPoly = i.generateECPolynomial(this.degree) }, a.prototype.encode = function(e) { if (!this.genPoly) throw new Error("Encoder not initialized"); var t = n.alloc(this.degree),
                r = o.concat([e, t], e.length + this.degree),
                a = i.mod(r, this.genPoly),
                s = this.degree - a.length; if (s > 0) { var u = n.alloc(this.degree); return a.copy(u, s), u } return a }, e.exports = a }, function(e, t, r) { var n = r(835),
            i = r(1318);
        t.mul = function(e, t) { for (var r = n.alloc(e.length + t.length - 1), o = 0; o < e.length; o++)
                for (var a = 0; a < t.length; a++) r[o + a] ^= i.mul(e[o], t[a]); return r }, t.mod = function(e, t) { for (var r = n.from(e); r.length - t.length >= 0;) { for (var o = r[0], a = 0; a < t.length; a++) r[a] ^= i.mul(t[a], o); for (var s = 0; s < r.length && 0 === r[s];) s++;
                r = r.slice(s) } return r }, t.generateECPolynomial = function(e) { for (var r = n.from([1]), o = 0; o < e; o++) r = t.mul(r, [1, i.exp(o)]); return r } }, function(e, t, r) { var n = r(835),
            i = n.alloc(512),
            o = n.alloc(256);! function() { for (var e = 1, t = 0; t < 255; t++) i[t] = e, o[e] = t, 256 & (e <<= 1) && (e ^= 285); for (t = 255; t < 512; t++) i[t] = i[t - 255] }(), t.log = function(e) { if (e < 1) throw new Error("log(" + e + ")"); return o[e] }, t.exp = function(e) { return i[e] }, t.mul = function(e, t) { return 0 === e || 0 === t ? 0 : i[o[e] + o[t]] } }, function(e, t, r) { var n = r(824),
            i = r(1036),
            o = r(923),
            a = r(825),
            s = r(1037),
            u = r(922),
            c = n.getBCHDigit(7973);

        function f(e, t) { return a.getCharCountIndicator(e, t) + 4 }

        function d(e, t) { var r = 0; return e.forEach((function(e) { var n = f(e.mode, t);
                r += n + e.getBitsLength() })), r }
        t.from = function(e, t) { return s.isValid(e) ? parseInt(e, 10) : t }, t.getCapacity = function(e, t, r) { if (!s.isValid(e)) throw new Error("Invalid QR Code version"); "undefined" === typeof r && (r = a.BYTE); var o = 8 * (n.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t)); if (r === a.MIXED) return o; var u = o - f(r, e); switch (r) {
                case a.NUMERIC:
                    return Math.floor(u / 10 * 3);
                case a.ALPHANUMERIC:
                    return Math.floor(u / 11 * 2);
                case a.KANJI:
                    return Math.floor(u / 13);
                case a.BYTE:
                default:
                    return Math.floor(u / 8) } }, t.getBestVersionForData = function(e, r) { var n, i = o.from(r, o.M); if (u(e)) { if (e.length > 1) return function(e, r) { for (var n = 1; n <= 40; n++)
                        if (d(e, n) <= t.getCapacity(n, r, a.MIXED)) return n }(e, i); if (0 === e.length) return 1;
                n = e[0] } else n = e; return function(e, r, n) { for (var i = 1; i <= 40; i++)
                    if (r <= t.getCapacity(i, n, e)) return i }(n.mode, n.getLength(), i) }, t.getEncodedBits = function(e) { if (!s.isValid(e) || e < 7) throw new Error("Invalid QR Code version"); for (var t = e << 12; n.getBCHDigit(t) - c >= 0;) t ^= 7973 << n.getBCHDigit(t) - c; return e << 12 | t } }, function(e, t, r) { var n = r(824),
            i = n.getBCHDigit(1335);
        t.getEncodedBits = function(e, t) { for (var r = e.bit << 3 | t, o = r << 10; n.getBCHDigit(o) - i >= 0;) o ^= 1335 << n.getBCHDigit(o) - i; return 21522 ^ (r << 10 | o) } }, function(e, t, r) { var n = r(825),
            i = r(1322),
            o = r(1323),
            a = r(1324),
            s = r(1325),
            u = r(1038),
            c = r(824),
            f = r(1326);

        function d(e) { return unescape(encodeURIComponent(e)).length }

        function l(e, t, r) { for (var n, i = []; null !== (n = e.exec(r));) i.push({ data: n[0], index: n.index, mode: t, length: n[0].length }); return i }

        function h(e) { var t, r, i = l(u.NUMERIC, n.NUMERIC, e),
                o = l(u.ALPHANUMERIC, n.ALPHANUMERIC, e); return c.isKanjiModeEnabled() ? (t = l(u.BYTE, n.BYTE, e), r = l(u.KANJI, n.KANJI, e)) : (t = l(u.BYTE_KANJI, n.BYTE, e), r = []), i.concat(o, t, r).sort((function(e, t) { return e.index - t.index })).map((function(e) { return { data: e.data, mode: e.mode, length: e.length } })) }

        function p(e, t) { switch (t) {
                case n.NUMERIC:
                    return i.getBitsLength(e);
                case n.ALPHANUMERIC:
                    return o.getBitsLength(e);
                case n.KANJI:
                    return s.getBitsLength(e);
                case n.BYTE:
                    return a.getBitsLength(e) } }

        function b(e, t) { var r, u = n.getBestModeForData(e); if ((r = n.from(t, u)) !== n.BYTE && r.bit < u.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(r) + ".\n Suggested mode is: " + n.toString(u)); switch (r !== n.KANJI || c.isKanjiModeEnabled() || (r = n.BYTE), r) {
                case n.NUMERIC:
                    return new i(e);
                case n.ALPHANUMERIC:
                    return new o(e);
                case n.KANJI:
                    return new s(e);
                case n.BYTE:
                    return new a(e) } }
        t.fromArray = function(e) { return e.reduce((function(e, t) { return "string" === typeof t ? e.push(b(t, null)) : t.data && e.push(b(t.data, t.mode)), e }), []) }, t.fromString = function(e, r) { for (var i = function(e, t) { for (var r = {}, i = { start: {} }, o = ["start"], a = 0; a < e.length; a++) { for (var s = e[a], u = [], c = 0; c < s.length; c++) { var f = s[c],
                                d = "" + a + c;
                            u.push(d), r[d] = { node: f, lastCount: 0 }, i[d] = {}; for (var l = 0; l < o.length; l++) { var h = o[l];
                                r[h] && r[h].node.mode === f.mode ? (i[h][d] = p(r[h].lastCount + f.length, f.mode) - p(r[h].lastCount, f.mode), r[h].lastCount += f.length) : (r[h] && (r[h].lastCount = f.length), i[h][d] = p(f.length, f.mode) + 4 + n.getCharCountIndicator(f.mode, t)) } }
                        o = u } for (l = 0; l < o.length; l++) i[o[l]].end = 0; return { map: i, table: r } }(function(e) { for (var t = [], r = 0; r < e.length; r++) { var i = e[r]; switch (i.mode) {
                            case n.NUMERIC:
                                t.push([i, { data: i.data, mode: n.ALPHANUMERIC, length: i.length }, { data: i.data, mode: n.BYTE, length: i.length }]); break;
                            case n.ALPHANUMERIC:
                                t.push([i, { data: i.data, mode: n.BYTE, length: i.length }]); break;
                            case n.KANJI:
                                t.push([i, { data: i.data, mode: n.BYTE, length: d(i.data) }]); break;
                            case n.BYTE:
                                t.push([{ data: i.data, mode: n.BYTE, length: d(i.data) }]) } } return t }(h(e, c.isKanjiModeEnabled())), r), o = f.find_path(i.map, "start", "end"), a = [], s = 1; s < o.length - 1; s++) a.push(i.table[o[s]].node); return t.fromArray(function(e) { return e.reduce((function(e, t) { var r = e.length - 1 >= 0 ? e[e.length - 1] : null; return r && r.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e) }), []) }(a)) }, t.rawSplit = function(e) { return t.fromArray(h(e, c.isKanjiModeEnabled())) } }, function(e, t, r) { var n = r(825);

        function i(e) { this.mode = n.NUMERIC, this.data = e.toString() }
        i.getBitsLength = function(e) { return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0) }, i.prototype.getLength = function() { return this.data.length }, i.prototype.getBitsLength = function() { return i.getBitsLength(this.data.length) }, i.prototype.write = function(e) { var t, r, n; for (t = 0; t + 3 <= this.data.length; t += 3) r = this.data.substr(t, 3), n = parseInt(r, 10), e.put(n, 10); var i = this.data.length - t;
            i > 0 && (r = this.data.substr(t), n = parseInt(r, 10), e.put(n, 3 * i + 1)) }, e.exports = i }, function(e, t, r) { var n = r(825),
            i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

        function o(e) { this.mode = n.ALPHANUMERIC, this.data = e }
        o.getBitsLength = function(e) { return 11 * Math.floor(e / 2) + e % 2 * 6 }, o.prototype.getLength = function() { return this.data.length }, o.prototype.getBitsLength = function() { return o.getBitsLength(this.data.length) }, o.prototype.write = function(e) { var t; for (t = 0; t + 2 <= this.data.length; t += 2) { var r = 45 * i.indexOf(this.data[t]);
                r += i.indexOf(this.data[t + 1]), e.put(r, 11) }
            this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6) }, e.exports = o }, function(e, t, r) { var n = r(835),
            i = r(825);

        function o(e) { this.mode = i.BYTE, this.data = n.from(e) }
        o.getBitsLength = function(e) { return 8 * e }, o.prototype.getLength = function() { return this.data.length }, o.prototype.getBitsLength = function() { return o.getBitsLength(this.data.length) }, o.prototype.write = function(e) { for (var t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8) }, e.exports = o }, function(e, t, r) { var n = r(825),
            i = r(824);

        function o(e) { this.mode = n.KANJI, this.data = e }
        o.getBitsLength = function(e) { return 13 * e }, o.prototype.getLength = function() { return this.data.length }, o.prototype.getBitsLength = function() { return o.getBitsLength(this.data.length) }, o.prototype.write = function(e) { var t; for (t = 0; t < this.data.length; t++) { var r = i.toSJIS(this.data[t]); if (r >= 33088 && r <= 40956) r -= 33088;
                else { if (!(r >= 57408 && r <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                    r -= 49472 }
                r = 192 * (r >>> 8 & 255) + (255 & r), e.put(r, 13) } }, e.exports = o }, function(e, t, r) { "use strict"; var n = { single_source_shortest_paths: function(e, t, r) { var i = {},
                    o = {};
                o[t] = 0; var a, s, u, c, f, d, l, h = n.PriorityQueue.make(); for (h.push(t, 0); !h.empty();)
                    for (u in s = (a = h.pop()).value, c = a.cost, f = e[s] || {}) f.hasOwnProperty(u) && (d = c + f[u], l = o[u], ("undefined" === typeof o[u] || l > d) && (o[u] = d, h.push(u, d), i[u] = s)); if ("undefined" !== typeof r && "undefined" === typeof o[r]) { var p = ["Could not find a path from ", t, " to ", r, "."].join(""); throw new Error(p) } return i }, extract_shortest_path_from_predecessor_list: function(e, t) { for (var r = [], n = t; n;) r.push(n), e[n], n = e[n]; return r.reverse(), r }, find_path: function(e, t, r) { var i = n.single_source_shortest_paths(e, t, r); return n.extract_shortest_path_from_predecessor_list(i, r) }, PriorityQueue: { make: function(e) { var t, r = n.PriorityQueue,
                        i = {}; for (t in e = e || {}, r) r.hasOwnProperty(t) && (i[t] = r[t]); return i.queue = [], i.sorter = e.sorter || r.default_sorter, i }, default_sorter: function(e, t) { return e.cost - t.cost }, push: function(e, t) { var r = { value: e, cost: t };
                    this.queue.push(r), this.queue.sort(this.sorter) }, pop: function() { return this.queue.shift() }, empty: function() { return 0 === this.queue.length } } };
        e.exports = n }, function(e, t, r) { var n = r(1039);
        t.render = function(e, t, r) { var i = r,
                o = t; "undefined" !== typeof i || t && t.getContext || (i = t, t = void 0), t || (o = function() { try { return document.createElement("canvas") } catch (e) { throw new Error("You need to specify a canvas element") } }()), i = n.getOptions(i); var a = n.getImageWidth(e.modules.size, i),
                s = o.getContext("2d"),
                u = s.createImageData(a, a); return n.qrToImageData(u.data, e, i),
                function(e, t, r) { e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = r, t.width = r, t.style.height = r + "px", t.style.width = r + "px" }(s, o, a), s.putImageData(u, 0, 0), o }, t.renderToDataURL = function(e, r, n) { var i = n; "undefined" !== typeof i || r && r.getContext || (i = r, r = void 0), i || (i = {}); var o = t.render(e, r, i),
                a = i.type || "image/png",
                s = i.rendererOpts || {}; return o.toDataURL(a, s.quality) } }, function(e, t, r) { var n = r(1039);

        function i(e, t) { var r = e.a / 255,
                n = t + '="' + e.hex + '"'; return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n }

        function o(e, t, r) { var n = e + t; return "undefined" !== typeof r && (n += " " + r), n }
        t.render = function(e, t, r) { var a = n.getOptions(t),
                s = e.modules.size,
                u = e.modules.data,
                c = s + 2 * a.margin,
                f = a.color.light.a ? "<path " + i(a.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
                d = "<path " + i(a.color.dark, "stroke") + ' d="' + function(e, t, r) { for (var n = "", i = 0, a = !1, s = 0, u = 0; u < e.length; u++) { var c = Math.floor(u % t),
                            f = Math.floor(u / t);
                        c || a || (a = !0), e[u] ? (s++, u > 0 && c > 0 && e[u - 1] || (n += a ? o("M", c + r, .5 + f + r) : o("m", i, 0), i = 0, a = !1), c + 1 < t && e[u + 1] || (n += o("h", s), s = 0)) : i++ } return n }(u, s, a.margin) + '"/>',
                l = 'viewBox="0 0 ' + c + " " + c + '"',
                h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + l + ' shape-rendering="crispEdges">' + f + d + "</svg>\n"; return "function" === typeof r && r(null, h), h } }, function(e, t, r) { "use strict"; var n = r(1330),
            i = { "text/plain": "Text", "text/html": "Url", default: "Text" };
        e.exports = function(e, t) { var r, o, a, s, u, c, f = !1;
            t || (t = {}), r = t.debug || !1; try { if (a = n(), s = document.createRange(), u = document.getSelection(), (c = document.createElement("span")).textContent = e, c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) { if (n.stopPropagation(), t.format)
                            if (n.preventDefault(), "undefined" === typeof n.clipboardData) { r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData(); var o = i[t.format] || i.default;
                                window.clipboardData.setData(o, e) } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                        t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData)) })), document.body.appendChild(c), s.selectNodeContents(c), u.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                f = !0 } catch (d) { r && console.error("unable to copy using execCommand: ", d), r && console.warn("trying IE specific stuff"); try { window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), f = !0 } catch (d) { r && console.error("unable to copy using clipboardData: ", d), r && console.error("falling back to prompt"), o = function(e) { var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C"; return e.replace(/#{\s*key\s*}/g, t) }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(o, e) } } finally { u && ("function" == typeof u.removeRange ? u.removeRange(s) : u.removeAllRanges()), c && document.body.removeChild(c), a() } return f } }, function(e, t) { e.exports = function() { var e = document.getSelection(); if (!e.rangeCount) return function() {}; for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n)); switch (t.tagName.toUpperCase()) {
                case "INPUT":
                case "TEXTAREA":
                    t.blur(); break;
                default:
                    t = null } return e.removeAllRanges(),
                function() { "Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach((function(t) { e.addRange(t) })), t && t.focus() } } }, function(e, t, r) { "use strict"; var n = Object.prototype.hasOwnProperty,
            i = "~";

        function o() {}

        function a(e, t, r) { this.fn = e, this.context = t, this.once = r || !1 }

        function s(e, t, r, n, o) { if ("function" !== typeof r) throw new TypeError("The listener must be a function"); var s = new a(r, n || e, o),
                u = i ? i + t : t; return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], s] : e._events[u].push(s) : (e._events[u] = s, e._eventsCount++), e }

        function u(e, t) { 0 === --e._eventsCount ? e._events = new o : delete e._events[t] }

        function c() { this._events = new o, this._eventsCount = 0 }
        Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (i = !1)), c.prototype.eventNames = function() { var e, t, r = []; if (0 === this._eventsCount) return r; for (t in e = this._events) n.call(e, t) && r.push(i ? t.slice(1) : t); return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r }, c.prototype.listeners = function(e) { var t = i ? i + e : e,
                r = this._events[t]; if (!r) return []; if (r.fn) return [r.fn]; for (var n = 0, o = r.length, a = new Array(o); n < o; n++) a[n] = r[n].fn; return a }, c.prototype.listenerCount = function(e) { var t = i ? i + e : e,
                r = this._events[t]; return r ? r.fn ? 1 : r.length : 0 }, c.prototype.emit = function(e, t, r, n, o, a) { var s = i ? i + e : e; if (!this._events[s]) return !1; var u, c, f = this._events[s],
                d = arguments.length; if (f.fn) { switch (f.once && this.removeListener(e, f.fn, void 0, !0), d) {
                    case 1:
                        return f.fn.call(f.context), !0;
                    case 2:
                        return f.fn.call(f.context, t), !0;
                    case 3:
                        return f.fn.call(f.context, t, r), !0;
                    case 4:
                        return f.fn.call(f.context, t, r, n), !0;
                    case 5:
                        return f.fn.call(f.context, t, r, n, o), !0;
                    case 6:
                        return f.fn.call(f.context, t, r, n, o, a), !0 } for (c = 1, u = new Array(d - 1); c < d; c++) u[c - 1] = arguments[c];
                f.fn.apply(f.context, u) } else { var l, h = f.length; for (c = 0; c < h; c++) switch (f[c].once && this.removeListener(e, f[c].fn, void 0, !0), d) {
                    case 1:
                        f[c].fn.call(f[c].context); break;
                    case 2:
                        f[c].fn.call(f[c].context, t); break;
                    case 3:
                        f[c].fn.call(f[c].context, t, r); break;
                    case 4:
                        f[c].fn.call(f[c].context, t, r, n); break;
                    default:
                        if (!u)
                            for (l = 1, u = new Array(d - 1); l < d; l++) u[l - 1] = arguments[l];
                        f[c].fn.apply(f[c].context, u) } } return !0 }, c.prototype.on = function(e, t, r) { return s(this, e, t, r, !1) }, c.prototype.once = function(e, t, r) { return s(this, e, t, r, !0) }, c.prototype.removeListener = function(e, t, r, n) { var o = i ? i + e : e; if (!this._events[o]) return this; if (!t) return u(this, o), this; var a = this._events[o]; if (a.fn) a.fn !== t || n && !a.once || r && a.context !== r || u(this, o);
            else { for (var s = 0, c = [], f = a.length; s < f; s++)(a[s].fn !== t || n && !a[s].once || r && a[s].context !== r) && c.push(a[s]);
                c.length ? this._events[o] = 1 === c.length ? c[0] : c : u(this, o) } return this }, c.prototype.removeAllListeners = function(e) { var t; return e ? (t = i ? i + e : e, this._events[t] && u(this, t)) : (this._events = new o, this._eventsCount = 0), this }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = i, c.EventEmitter = c, e.exports = c }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            function(e) { for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]) }(r(1333)); var n = r(927);
        t.XMLHttpRequestEventTarget = n.XMLHttpRequestEventTarget }, function(e, t, r) { "use strict";
        (function(e, n) { var i = this && this.__extends || function() { var e = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]) }; return function(t, r) {
                        function n() { this.constructor = t }
                        e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }(),
                o = this && this.__assign || Object.assign || function(e) { for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e };
            Object.defineProperty(t, "__esModule", { value: !0 }); var a = r(1040),
                s = r(1347),
                u = r(1348),
                c = r(926),
                f = r(1349),
                d = r(1350),
                l = r(927),
                h = r(1351),
                p = r(1352),
                b = function(t) {
                    function r(n) { void 0 === n && (n = {}); var i = t.call(this) || this; return i.UNSENT = r.UNSENT, i.OPENED = r.OPENED, i.HEADERS_RECEIVED = r.HEADERS_RECEIVED, i.LOADING = r.LOADING, i.DONE = r.DONE, i.onreadystatechange = null, i.readyState = r.UNSENT, i.response = null, i.responseText = "", i.responseType = "", i.status = 0, i.statusText = "", i.timeout = 0, i.upload = new h.XMLHttpRequestUpload, i.responseUrl = "", i.withCredentials = !1, i._method = null, i._url = null, i._sync = !1, i._headers = {}, i._loweredHeaders = {}, i._mimeOverride = null, i._request = null, i._response = null, i._responseParts = null, i._responseHeaders = null, i._aborting = null, i._error = null, i._loadedBytes = 0, i._totalBytes = 0, i._lengthComputable = !1, i._restrictedMethods = { CONNECT: !0, TRACE: !0, TRACK: !0 }, i._restrictedHeaders = { "accept-charset": !0, "accept-encoding": !0, "access-control-request-headers": !0, "access-control-request-method": !0, connection: !0, "content-length": !0, cookie: !0, cookie2: !0, date: !0, dnt: !0, expect: !0, host: !0, "keep-alive": !0, origin: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, via: !0 }, i._privateHeaders = { "set-cookie": !0, "set-cookie2": !0 }, i._userAgent = "Mozilla/5.0 (" + u.type() + " " + u.arch() + ") node.js/" + e.versions.node + " v8/" + e.versions.v8, i._anonymous = n.anon || !1, i } return i(r, t), r.prototype.open = function(e, t, n, i, o) { if (void 0 === n && (n = !0), e = e.toUpperCase(), this._restrictedMethods[e]) throw new r.SecurityError("HTTP method " + e + " is not allowed in XHR"); var a = this._parseUrl(t, i, o);
                        this.readyState === r.HEADERS_RECEIVED || (this.readyState, r.LOADING), this._method = e, this._url = a, this._sync = !n, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(r.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1 }, r.prototype.setRequestHeader = function(e, t) { if (this.readyState !== r.OPENED) throw new r.InvalidStateError("XHR readyState must be OPENED"); var n = e.toLowerCase();
                        this._restrictedHeaders[n] || /^sec-/.test(n) || /^proxy-/.test(n) ? console.warn('Refused to set unsafe header "' + e + '"') : (t = t.toString(), null != this._loweredHeaders[n] ? (e = this._loweredHeaders[n], this._headers[e] = this._headers[e] + ", " + t) : (this._loweredHeaders[n] = e, this._headers[e] = t)) }, r.prototype.send = function(e) { if (this.readyState !== r.OPENED) throw new r.InvalidStateError("XHR readyState must be OPENED"); if (this._request) throw new r.InvalidStateError("send() already called"); switch (this._url.protocol) {
                            case "file:":
                                return this._sendFile(e);
                            case "http:":
                            case "https:":
                                return this._sendHttp(e);
                            default:
                                throw new r.NetworkError("Unsupported protocol " + this._url.protocol) } }, r.prototype.abort = function() { null != this._request && (this._request.abort(), this._setError(), this._dispatchProgress("abort"), this._dispatchProgress("loadend")) }, r.prototype.getResponseHeader = function(e) { if (null == this._responseHeaders || null == e) return null; var t = e.toLowerCase(); return this._responseHeaders.hasOwnProperty(t) ? this._responseHeaders[e.toLowerCase()] : null }, r.prototype.getAllResponseHeaders = function() { var e = this; return null == this._responseHeaders ? "" : Object.keys(this._responseHeaders).map((function(t) { return t + ": " + e._responseHeaders[t] })).join("\r\n") }, r.prototype.overrideMimeType = function(e) { if (this.readyState === r.LOADING || this.readyState === r.DONE) throw new r.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");
                        this._mimeOverride = e.toLowerCase() }, r.prototype.nodejsSet = function(e) { if (this.nodejsHttpAgent = e.httpAgent || this.nodejsHttpAgent, this.nodejsHttpsAgent = e.httpsAgent || this.nodejsHttpsAgent, e.hasOwnProperty("baseUrl")) { if (null != e.baseUrl)
                                if (!c.parse(e.baseUrl, !1, !0).protocol) throw new r.SyntaxError("baseUrl must be an absolute URL");
                            this.nodejsBaseUrl = e.baseUrl } }, r.nodejsSet = function(e) { r.prototype.nodejsSet(e) }, r.prototype._setReadyState = function(e) { this.readyState = e, this.dispatchEvent(new f.ProgressEvent("readystatechange")) }, r.prototype._sendFile = function(e) { throw new Error("Protocol file: not implemented") }, r.prototype._sendHttp = function(e) { if (this._sync) throw new Error("Synchronous XHR processing not implemented");!e || "GET" !== this._method && "HEAD" !== this._method ? e = e || "" : (console.warn("Discarding entity body for " + this._method + " requests"), e = null), this.upload._setData(e), this._finalizeHeaders(), this._sendHxxpRequest() }, r.prototype._sendHxxpRequest = function() { var e = this; if (this.withCredentials) { var t = r.cookieJar.getCookies(p.CookieAccessInfo(this._url.hostname, this._url.pathname, "https:" === this._url.protocol)).toValueString();
                            this._headers.cookie = this._headers.cookie2 = t } var n = "http:" === this._url.protocol ? [a, this.nodejsHttpAgent] : [s, this.nodejsHttpsAgent],
                            i = n[0],
                            o = n[1],
                            u = i.request.bind(i)({ hostname: this._url.hostname, port: +this._url.port, path: this._url.path, auth: this._url.auth, method: this._method, headers: this._headers, agent: o });
                        this._request = u, this.timeout && u.setTimeout(this.timeout, (function() { return e._onHttpTimeout(u) })), u.on("response", (function(t) { return e._onHttpResponse(u, t) })), u.on("error", (function(t) { return e._onHttpRequestError(u, t) })), this.upload._startUpload(u), this._request === u && this._dispatchProgress("loadstart") }, r.prototype._finalizeHeaders = function() { this._headers = o({}, this._headers, { Connection: "keep-alive", Host: this._url.host, "User-Agent": this._userAgent }, this._anonymous ? { Referer: "about:blank" } : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders) }, r.prototype._onHttpResponse = function(e, t) { var n = this; if (this._request === e) { if (this.withCredentials && (t.headers["set-cookie"] || t.headers["set-cookie2"]) && r.cookieJar.setCookies(t.headers["set-cookie"] || t.headers["set-cookie2"]), [301, 302, 303, 307, 308].indexOf(t.statusCode) >= 0) return this._url = this._parseUrl(t.headers.location), this._method = "GET", this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]), null != this._headers["Content-Type"] && delete this._headers["Content-Type"], delete this._headers["Content-Length"], this.upload._reset(), this._finalizeHeaders(), void this._sendHxxpRequest();
                            this._response = t, this._response.on("data", (function(e) { return n._onHttpResponseData(t, e) })), this._response.on("end", (function() { return n._onHttpResponseEnd(t) })), this._response.on("close", (function() { return n._onHttpResponseClose(t) })), this.responseUrl = this._url.href.split("#")[0], this.status = t.statusCode, this.statusText = a.STATUS_CODES[this.status], this._parseResponseHeaders(t); var i = this._responseHeaders["content-length"] || "";
                            this._totalBytes = +i, this._lengthComputable = !!i, this._setReadyState(r.HEADERS_RECEIVED) } }, r.prototype._onHttpResponseData = function(e, t) { this._response === e && (this._responseParts.push(new n(t)), this._loadedBytes += t.length, this.readyState !== r.LOADING && this._setReadyState(r.LOADING), this._dispatchProgress("progress")) }, r.prototype._onHttpResponseEnd = function(e) { this._response === e && (this._parseResponse(), this._request = null, this._response = null, this._setReadyState(r.DONE), this._dispatchProgress("load"), this._dispatchProgress("loadend")) }, r.prototype._onHttpResponseClose = function(e) { if (this._response === e) { var t = this._request;
                            this._setError(), t.abort(), this._setReadyState(r.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend") } }, r.prototype._onHttpTimeout = function(e) { this._request === e && (this._setError(), e.abort(), this._setReadyState(r.DONE), this._dispatchProgress("timeout"), this._dispatchProgress("loadend")) }, r.prototype._onHttpRequestError = function(e, t) { this._request === e && (this._setError(), e.abort(), this._setReadyState(r.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend")) }, r.prototype._dispatchProgress = function(e) { var t = new r.ProgressEvent(e);
                        t.lengthComputable = this._lengthComputable, t.loaded = this._loadedBytes, t.total = this._totalBytes, this.dispatchEvent(t) }, r.prototype._setError = function() { this._request = null, this._response = null, this._responseHeaders = null, this._responseParts = null }, r.prototype._parseUrl = function(e, t, r) { var n = null == this.nodejsBaseUrl ? e : c.resolve(this.nodejsBaseUrl, e),
                            i = c.parse(n, !1, !0);
                        i.hash = null; var o = (i.auth || "").split(":"),
                            a = o[0],
                            s = o[1]; return (a || s || t || r) && (i.auth = (t || a || "") + ":" + (r || s || "")), i }, r.prototype._parseResponseHeaders = function(e) { for (var t in this._responseHeaders = {}, e.headers) { var r = t.toLowerCase();
                            this._privateHeaders[r] || (this._responseHeaders[r] = e.headers[t]) }
                        null != this._mimeOverride && (this._responseHeaders["content-type"] = this._mimeOverride) }, r.prototype._parseResponse = function() { var e = n.concat(this._responseParts); switch (this._responseParts = null, this.responseType) {
                            case "json":
                                this.responseText = null; try { this.response = JSON.parse(e.toString("utf-8")) } catch (o) { this.response = null } return;
                            case "buffer":
                                return this.responseText = null, void(this.response = e);
                            case "arraybuffer":
                                this.responseText = null; for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), i = 0; i < e.length; i++) r[i] = e[i]; return void(this.response = t);
                            case "text":
                            default:
                                try { this.responseText = e.toString(this._parseResponseEncoding()) } catch (a) { this.responseText = e.toString("binary") }
                                this.response = this.responseText } }, r.prototype._parseResponseEncoding = function() { return /;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"] || "")[1] || "utf-8" }, r.ProgressEvent = f.ProgressEvent, r.InvalidStateError = d.InvalidStateError, r.NetworkError = d.NetworkError, r.SecurityError = d.SecurityError, r.SyntaxError = d.SyntaxError, r.XMLHttpRequestUpload = h.XMLHttpRequestUpload, r.UNSENT = 0, r.OPENED = 1, r.HEADERS_RECEIVED = 2, r.LOADING = 3, r.DONE = 4, r.cookieJar = p.CookieJar(), r }(l.XMLHttpRequestEventTarget);
            t.XMLHttpRequest = b, b.prototype.nodejsHttpAgent = a.globalAgent, b.prototype.nodejsHttpsAgent = s.globalAgent, b.prototype.nodejsBaseUrl = null }).call(this, r(246), r(785).Buffer) }, function(e, t, r) {
        (function(t, n, i) { var o = r(1041),
                a = r(490),
                s = r(1042),
                u = r(854),
                c = r(1340),
                f = s.IncomingMessage,
                d = s.readyStates; var l = e.exports = function(e) { var r, n = this;
                u.Writable.call(n), n._opts = e, n._body = [], n._headers = {}, e.auth && n.setHeader("Authorization", "Basic " + new t(e.auth).toString("base64")), Object.keys(e.headers).forEach((function(t) { n.setHeader(t, e.headers[t]) })); var i = !0; if ("disable-fetch" === e.mode || "requestTimeout" in e && !o.abortController) i = !1, r = !0;
                else if ("prefer-streaming" === e.mode) r = !1;
                else if ("allow-wrong-content-type" === e.mode) r = !o.overrideMimeType;
                else { if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw new Error("Invalid value for opts.mode");
                    r = !0 }
                n._mode = function(e, t) { return o.fetch && t ? "fetch" : o.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : o.msstream ? "ms-stream" : o.arraybuffer && e ? "arraybuffer" : o.vbArray && e ? "text:vbarray" : "text" }(r, i), n._fetchTimer = null, n.on("finish", (function() { n._onFinish() })) };
            a(l, u.Writable), l.prototype.setHeader = function(e, t) { var r = e.toLowerCase(); - 1 === h.indexOf(r) && (this._headers[r] = { name: e, value: t }) }, l.prototype.getHeader = function(e) { var t = this._headers[e.toLowerCase()]; return t ? t.value : null }, l.prototype.removeHeader = function(e) { delete this._headers[e.toLowerCase()] }, l.prototype._onFinish = function() { var e = this; if (!e._destroyed) { var r = e._opts,
                        a = e._headers,
                        s = null; "GET" !== r.method && "HEAD" !== r.method && (s = o.arraybuffer ? c(t.concat(e._body)) : o.blobConstructor ? new n.Blob(e._body.map((function(e) { return c(e) })), { type: (a["content-type"] || {}).value || "" }) : t.concat(e._body).toString()); var u = []; if (Object.keys(a).forEach((function(e) { var t = a[e].name,
                                r = a[e].value;
                            Array.isArray(r) ? r.forEach((function(e) { u.push([t, e]) })) : u.push([t, r]) })), "fetch" === e._mode) { var f = null; if (o.abortController) { var l = new AbortController;
                            f = l.signal, e._fetchAbortController = l, "requestTimeout" in r && 0 !== r.requestTimeout && (e._fetchTimer = n.setTimeout((function() { e.emit("requestTimeout"), e._fetchAbortController && e._fetchAbortController.abort() }), r.requestTimeout)) }
                        n.fetch(e._opts.url, { method: e._opts.method, headers: u, body: s || void 0, mode: "cors", credentials: r.withCredentials ? "include" : "same-origin", signal: f }).then((function(t) { e._fetchResponse = t, e._connect() }), (function(t) { n.clearTimeout(e._fetchTimer), e._destroyed || e.emit("error", t) })) } else { var h = e._xhr = new n.XMLHttpRequest; try { h.open(e._opts.method, e._opts.url, !0) } catch (p) { return void i.nextTick((function() { e.emit("error", p) })) } "responseType" in h && (h.responseType = e._mode.split(":")[0]), "withCredentials" in h && (h.withCredentials = !!r.withCredentials), "text" === e._mode && "overrideMimeType" in h && h.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in r && (h.timeout = r.requestTimeout, h.ontimeout = function() { e.emit("requestTimeout") }), u.forEach((function(e) { h.setRequestHeader(e[0], e[1]) })), e._response = null, h.onreadystatechange = function() { switch (h.readyState) {
                                case d.LOADING:
                                case d.DONE:
                                    e._onXHRProgress() } }, "moz-chunked-arraybuffer" === e._mode && (h.onprogress = function() { e._onXHRProgress() }), h.onerror = function() { e._destroyed || e.emit("error", new Error("XHR error")) }; try { h.send(s) } catch (p) { return void i.nextTick((function() { e.emit("error", p) })) } } } }, l.prototype._onXHRProgress = function() { var e = this;
                (function(e) { try { var t = e.status; return null !== t && 0 !== t } catch (r) { return !1 } })(e._xhr) && !e._destroyed && (e._response || e._connect(), e._response._onXHRProgress()) }, l.prototype._connect = function() { var e = this;
                e._destroyed || (e._response = new f(e._xhr, e._fetchResponse, e._mode, e._fetchTimer), e._response.on("error", (function(t) { e.emit("error", t) })), e.emit("response", e._response)) }, l.prototype._write = function(e, t, r) { this._body.push(e), r() }, l.prototype.abort = l.prototype.destroy = function() { var e = this;
                e._destroyed = !0, n.clearTimeout(e._fetchTimer), e._response && (e._response._destroyed = !0), e._xhr ? e._xhr.abort() : e._fetchAbortController && e._fetchAbortController.abort() }, l.prototype.end = function(e, t, r) { "function" === typeof e && (r = e, e = void 0), u.Writable.prototype.end.call(this, e, t, r) }, l.prototype.flushHeaders = function() {}, l.prototype.setTimeout = function() {}, l.prototype.setNoDelay = function() {}, l.prototype.setSocketKeepAlive = function() {}; var h = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"] }).call(this, r(785).Buffer, r(147), r(246)) }, function(e, t) { var r = {}.toString;
        e.exports = Array.isArray || function(e) { return "[object Array]" == r.call(e) } }, , function(e, t, r) { "use strict"; var n = r(924).Buffer,
            i = r(1338);
        e.exports = function() {
            function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.head = null, this.tail = null, this.length = 0 } return e.prototype.push = function(e) { var t = { data: e, next: null };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length }, e.prototype.unshift = function(e) { var t = { data: e, next: this.head };
                0 === this.length && (this.tail = t), this.head = t, ++this.length }, e.prototype.shift = function() { if (0 !== this.length) { var e = this.head.data; return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e } }, e.prototype.clear = function() { this.head = this.tail = null, this.length = 0 }, e.prototype.join = function(e) { if (0 === this.length) return ""; for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data; return r }, e.prototype.concat = function(e) { if (0 === this.length) return n.alloc(0); if (1 === this.length) return this.head.data; for (var t, r, i, o = n.allocUnsafe(e >>> 0), a = this.head, s = 0; a;) t = a.data, r = o, i = s, t.copy(r, i), s += a.data.length, a = a.next; return o }, e }(), i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function() { var e = i.inspect({ length: this.length }); return this.constructor.name + " " + e }) }, , function(e, t, r) { "use strict";
        e.exports = o; var n = r(1047),
            i = Object.create(r(855));

        function o(e) { if (!(this instanceof o)) return new o(e);
            n.call(this, e) }
        i.inherits = r(490), i.inherits(o, n), o.prototype._transform = function(e, t, r) { r(null, e) } }, function(e, t, r) { var n = r(785).Buffer;
        e.exports = function(e) { if (e instanceof Uint8Array) { if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength) return e.buffer; if ("function" === typeof e.buffer.slice) return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength) } if (n.isBuffer(e)) { for (var t = new Uint8Array(e.length), r = e.length, i = 0; i < r; i++) t[i] = e[i]; return t.buffer } throw new Error("Argument must be a Buffer") } }, function(e, t) { e.exports = { 100: "Continue", 101: "Switching Protocols", 102: "Processing", 200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 208: "Already Reported", 226: "IM Used", 300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 307: "Temporary Redirect", 308: "Permanent Redirect", 400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Payload Too Large", 414: "URI Too Long", 415: "Unsupported Media Type", 416: "Range Not Satisfiable", 417: "Expectation Failed", 418: "I'm a teapot", 421: "Misdirected Request", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 425: "Unordered Collection", 426: "Upgrade Required", 428: "Precondition Required", 429: "Too Many Requests", 431: "Request Header Fields Too Large", 451: "Unavailable For Legal Reasons", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 508: "Loop Detected", 509: "Bandwidth Limit Exceeded", 510: "Not Extended", 511: "Network Authentication Required" } }, function(e, t, r) {
        (function(e, n) { var i;! function(o) { t && t.nodeType, e && e.nodeType; var a = "object" == typeof n && n;
                a.global !== a && a.window !== a && a.self; var s, u = 2147483647,
                    c = 36,
                    f = /^xn--/,
                    d = /[^\x20-\x7E]/,
                    l = /[\x2E\u3002\uFF0E\uFF61]/g,
                    h = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                    p = Math.floor,
                    b = String.fromCharCode;

                function v(e) { throw new RangeError(h[e]) }

                function g(e, t) { for (var r = e.length, n = []; r--;) n[r] = t(e[r]); return n }

                function y(e, t) { var r = e.split("@"),
                        n = ""; return r.length > 1 && (n = r[0] + "@", e = r[1]), n + g((e = e.replace(l, ".")).split("."), t).join(".") }

                function m(e) { for (var t, r, n = [], i = 0, o = e.length; i < o;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (r = e.charCodeAt(i++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--) : n.push(t); return n }

                function _(e) { return g(e, (function(e) { var t = ""; return e > 65535 && (t += b((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += b(e) })).join("") }

                function w(e, t) { return e + 22 + 75 * (e < 26) - ((0 != t) << 5) }

                function x(e, t, r) { var n = 0; for (e = r ? p(e / 700) : e >> 1, e += p(e / t); e > 455; n += c) e = p(e / 35); return p(n + 36 * e / (e + 38)) }

                function k(e) { var t, r, n, i, o, a, s, f, d, l, h, b = [],
                        g = e.length,
                        y = 0,
                        m = 128,
                        w = 72; for ((r = e.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && v("not-basic"), b.push(e.charCodeAt(n)); for (i = r > 0 ? r + 1 : 0; i < g;) { for (o = y, a = 1, s = c; i >= g && v("invalid-input"), ((f = (h = e.charCodeAt(i++)) - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : c) >= c || f > p((u - y) / a)) && v("overflow"), y += f * a, !(f < (d = s <= w ? 1 : s >= w + 26 ? 26 : s - w)); s += c) a > p(u / (l = c - d)) && v("overflow"), a *= l;
                        w = x(y - o, t = b.length + 1, 0 == o), p(y / t) > u - m && v("overflow"), m += p(y / t), y %= t, b.splice(y++, 0, m) } return _(b) }

                function S(e) { var t, r, n, i, o, a, s, f, d, l, h, g, y, _, k, S = []; for (g = (e = m(e)).length, t = 128, r = 0, o = 72, a = 0; a < g; ++a)(h = e[a]) < 128 && S.push(b(h)); for (n = i = S.length, i && S.push("-"); n < g;) { for (s = u, a = 0; a < g; ++a)(h = e[a]) >= t && h < s && (s = h); for (s - t > p((u - r) / (y = n + 1)) && v("overflow"), r += (s - t) * y, t = s, a = 0; a < g; ++a)
                            if ((h = e[a]) < t && ++r > u && v("overflow"), h == t) { for (f = r, d = c; !(f < (l = d <= o ? 1 : d >= o + 26 ? 26 : d - o)); d += c) k = f - l, _ = c - l, S.push(b(w(l + k % _, 0))), f = p(k / _);
                                S.push(b(w(f, 0))), o = x(r, y, n == i), r = 0, ++n }++r, ++t } return S.join("") }
                s = { version: "1.4.1", ucs2: { decode: m, encode: _ }, decode: k, encode: S, toASCII: function(e) { return y(e, (function(e) { return d.test(e) ? "xn--" + S(e) : e })) }, toUnicode: function(e) { return y(e, (function(e) { return f.test(e) ? k(e.slice(4).toLowerCase()) : e })) } }, void 0 === (i = function() { return s }.call(t, r, t, e)) || (e.exports = i) }() }).call(this, r(219)(e), r(147)) }, function(e, t, r) { "use strict";
        e.exports = { isString: function(e) { return "string" === typeof e }, isObject: function(e) { return "object" === typeof e && null !== e }, isNull: function(e) { return null === e }, isNullOrUndefined: function(e) { return null == e } } }, function(e, t, r) { "use strict";
        t.decode = t.parse = r(1345), t.encode = t.stringify = r(1346) }, function(e, t, r) { "use strict";

        function n(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
        e.exports = function(e, t, r, o) { t = t || "&", r = r || "="; var a = {}; if ("string" !== typeof e || 0 === e.length) return a; var s = /\+/g;
            e = e.split(t); var u = 1e3;
            o && "number" === typeof o.maxKeys && (u = o.maxKeys); var c = e.length;
            u > 0 && c > u && (c = u); for (var f = 0; f < c; ++f) { var d, l, h, p, b = e[f].replace(s, "%20"),
                    v = b.indexOf(r);
                v >= 0 ? (d = b.substr(0, v), l = b.substr(v + 1)) : (d = b, l = ""), h = decodeURIComponent(d), p = decodeURIComponent(l), n(a, h) ? i(a[h]) ? a[h].push(p) : a[h] = [a[h], p] : a[h] = p } return a }; var i = Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) } }, function(e, t, r) { "use strict"; var n = function(e) { switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return "" } };
        e.exports = function(e, t, r, s) { return t = t || "&", r = r || "=", null === e && (e = void 0), "object" === typeof e ? o(a(e), (function(a) { var s = encodeURIComponent(n(a)) + r; return i(e[a]) ? o(e[a], (function(e) { return s + encodeURIComponent(n(e)) })).join(t) : s + encodeURIComponent(n(e[a])) })).join(t) : s ? encodeURIComponent(n(s)) + r + encodeURIComponent(n(e)) : "" }; var i = Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) };

        function o(e, t) { if (e.map) return e.map(t); for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n)); return r } var a = Object.keys || function(e) { var t = []; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r); return t } }, function(e, t, r) { var n = r(1040),
            i = r(926),
            o = e.exports; for (var a in n) n.hasOwnProperty(a) && (o[a] = n[a]);

        function s(e) { if ("string" === typeof e && (e = i.parse(e)), e.protocol || (e.protocol = "https:"), "https:" !== e.protocol) throw new Error('Protocol "' + e.protocol + '" not supported. Expected "https:"'); return e }
        o.request = function(e, t) { return e = s(e), n.request.call(this, e, t) }, o.get = function(e, t) { return e = s(e), n.get.call(this, e, t) } }, function(e, t) { t.endianness = function() { return "LE" }, t.hostname = function() { return "undefined" !== typeof location ? location.hostname : "" }, t.loadavg = function() { return [] }, t.uptime = function() { return 0 }, t.freemem = function() { return Number.MAX_VALUE }, t.totalmem = function() { return Number.MAX_VALUE }, t.cpus = function() { return [] }, t.type = function() { return "Browser" }, t.release = function() { return "undefined" !== typeof navigator ? navigator.appVersion : "" }, t.networkInterfaces = t.getNetworkInterfaces = function() { return {} }, t.arch = function() { return "javascript" }, t.platform = function() { return "browser" }, t.tmpdir = t.tmpDir = function() { return "/tmp" }, t.EOL = "\n", t.homedir = function() { return "/" } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = function(e) { this.type = e, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0 };
        t.ProgressEvent = n }, function(e, t, r) { "use strict"; var n = this && this.__extends || function() { var e = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]) }; return function(t, r) {
                function n() { this.constructor = t }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this } return n(t, e), t }(Error);
        t.SecurityError = i; var o = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this } return n(t, e), t }(Error);
        t.InvalidStateError = o; var a = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this } return n(t, e), t }(Error);
        t.NetworkError = a; var s = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this } return n(t, e), t }(Error);
        t.SyntaxError = s }, function(e, t, r) { "use strict";
        (function(e) { var n = this && this.__extends || function() { var e = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]) }; return function(t, r) {
                    function n() { this.constructor = t }
                    e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n) } }();
            Object.defineProperty(t, "__esModule", { value: !0 }); var i = function(t) {
                function r() { var e = t.call(this) || this; return e._contentType = null, e._body = null, e._reset(), e } return n(r, t), r.prototype._reset = function() { this._contentType = null, this._body = null }, r.prototype._setData = function(t) { if (null != t)
                        if ("string" === typeof t) 0 !== t.length && (this._contentType = "text/plain;charset=UTF-8"), this._body = new e(t, "utf-8");
                        else if (e.isBuffer(t)) this._body = t;
                    else if (t instanceof ArrayBuffer) { for (var r = new e(t.byteLength), n = new Uint8Array(t), i = 0; i < t.byteLength; i++) r[i] = n[i];
                        this._body = r } else { if (!(t.buffer && t.buffer instanceof ArrayBuffer)) throw new Error("Unsupported send() data " + t);
                        r = new e(t.byteLength); var o = t.byteOffset; for (n = new Uint8Array(t.buffer), i = 0; i < t.byteLength; i++) r[i] = n[i + o];
                        this._body = r } }, r.prototype._finalizeHeaders = function(e, t) { this._contentType && !t["content-type"] && (e["Content-Type"] = this._contentType), this._body && (e["Content-Length"] = this._body.length.toString()) }, r.prototype._startUpload = function(e) { this._body && e.write(this._body), e.end() }, r }(r(927).XMLHttpRequestEventTarget);
            t.XMLHttpRequestUpload = i }).call(this, r(785).Buffer) }, function(e, t) {! function() { "use strict";

            function e(t, r, n, i) { return this instanceof e ? (this.domain = t || void 0, this.path = r || "/", this.secure = !!n, this.script = !!i, this) : new e(t, r, n, i) }

            function r(e, t, n) { return e instanceof r ? e : this instanceof r ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(n || "/"), this.explicit_path = !1, this.domain = t || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, e && this.parse(e, t, n), this) : new r(e, t, n) }
            e.All = Object.freeze(Object.create(null)), t.CookieAccessInfo = e, t.Cookie = r, r.prototype.toString = function() { var e = [this.name + "=" + this.value]; return this.expiration_date !== 1 / 0 && e.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && e.push("domain=" + this.domain), this.path && e.push("path=" + this.path), this.secure && e.push("secure"), this.noscript && e.push("httponly"), e.join("; ") }, r.prototype.toValueString = function() { return this.name + "=" + this.value }; var n = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;

            function i() { var e, t; return this instanceof i ? (e = Object.create(null), this.setCookie = function(n, i, o) { var a, s; if (a = (n = new r(n, i, o)).expiration_date <= Date.now(), void 0 !== e[n.name]) { for (t = e[n.name], s = 0; s < t.length; s += 1)
                            if (t[s].collidesWith(n)) return a ? (t.splice(s, 1), 0 === t.length && delete e[n.name], !1) : (t[s] = n, n);
                        return !a && (t.push(n), n) } return !a && (e[n.name] = [n], e[n.name]) }, this.getCookie = function(r, n) { var i, o; if (t = e[r])
                        for (o = 0; o < t.length; o += 1)
                            if ((i = t[o]).expiration_date <= Date.now()) 0 === t.length && delete e[i.name];
                            else if (i.matches(n)) return i }, this.getCookies = function(t) { var r, n, i = []; for (r in e)(n = this.getCookie(r, t)) && i.push(n); return i.toString = function() { return i.join(":") }, i.toValueString = function() { return i.map((function(e) { return e.toValueString() })).join(";") }, i }, this) : new i }
            r.prototype.parse = function(e, t, n) { if (this instanceof r) { var i, o = e.split(";").filter((function(e) { return !!e })),
                        a = o[0].match(/([^=]+)=([\s\S]*)/); if (!a) return void console.warn("Invalid cookie header encountered. Header: '" + e + "'"); var s = a[1],
                        u = a[2]; if ("string" !== typeof s || 0 === s.length || "string" !== typeof u) return void console.warn("Unable to extract values from cookie header. Cookie: '" + e + "'"); for (this.name = s, this.value = u, i = 1; i < o.length; i += 1) switch (s = (a = o[i].match(/([^=]+)(?:=([\s\S]*))?/))[1].trim().toLowerCase(), u = a[2], s) {
                        case "httponly":
                            this.noscript = !0; break;
                        case "expires":
                            this.expiration_date = u ? Number(Date.parse(u)) : 1 / 0; break;
                        case "path":
                            this.path = u ? u.trim() : "", this.explicit_path = !0; break;
                        case "domain":
                            this.domain = u ? u.trim() : "", this.explicit_domain = !!this.domain; break;
                        case "secure":
                            this.secure = !0 }
                    return this.explicit_path || (this.path = n || "/"), this.explicit_domain || (this.domain = t), this } return (new r).parse(e, t, n) }, r.prototype.matches = function(t) { return t === e.All || !(this.noscript && t.script || this.secure && !t.secure || !this.collidesWith(t)) }, r.prototype.collidesWith = function(e) { if (this.path && !e.path || this.domain && !e.domain) return !1; if (this.path && 0 !== e.path.indexOf(this.path)) return !1; if (this.explicit_path && 0 !== e.path.indexOf(this.path)) return !1; var t = e.domain && e.domain.replace(/^[\.]/, ""),
                    r = this.domain && this.domain.replace(/^[\.]/, ""); if (r === t) return !0; if (r) { if (!this.explicit_domain) return !1; var n = t.indexOf(r); return -1 !== n && n === t.length - r.length } return !0 }, t.CookieJar = i, i.prototype.setCookies = function(e, t, i) { var o, a, s = []; for (e = (e = Array.isArray(e) ? e : e.split(n)).map((function(e) { return new r(e, t, i) })), o = 0; o < e.length; o += 1) a = e[o], this.setCookie(a, t, i) && s.push(a); return s } }() }, function(e, t, r) { var n = r(372).EventEmitter,
            i = r(373).inherits,
            o = r(857),
            a = r(1404),
            s = r(1409),
            u = r(1418),
            c = r(1421),
            f = (r(1074), r(936));

        function d(e) { var t = this;
            n.call(t), t.setMaxListeners(30), e = e || {}; var r = { sendAsync: t._handleAsync.bind(t) },
                i = e.blockTrackerProvider || r;
            t._blockTracker = e.blockTracker || new a({ provider: i, pollingInterval: e.pollingInterval || 4e3, setSkipCacheFlag: !0 }), t._ready = new c, t.currentBlock = null, t._providers = [] }

        function l(e) { return { number: o.toBuffer(e.number), hash: o.toBuffer(e.hash), parentHash: o.toBuffer(e.parentHash), nonce: o.toBuffer(e.nonce), mixHash: o.toBuffer(e.mixHash), sha3Uncles: o.toBuffer(e.sha3Uncles), logsBloom: o.toBuffer(e.logsBloom), transactionsRoot: o.toBuffer(e.transactionsRoot), stateRoot: o.toBuffer(e.stateRoot), receiptsRoot: o.toBuffer(e.receiptRoot || e.receiptsRoot), miner: o.toBuffer(e.miner), difficulty: o.toBuffer(e.difficulty), totalDifficulty: o.toBuffer(e.totalDifficulty), size: o.toBuffer(e.size), extraData: o.toBuffer(e.extraData), gasLimit: o.toBuffer(e.gasLimit), gasUsed: o.toBuffer(e.gasUsed), timestamp: o.toBuffer(e.timestamp), transactions: e.transactions } }
        e.exports = d, i(d, n), d.prototype.start = function() { var e = this,
                t = this;
            t._ready.go(), t._blockTracker.on("latest", (function(r) { t._getBlockByNumberWithRetry(r, (function(r, n) { if (r) e.emit("error", r);
                    else { if (!n) return console.log(n), void e.emit("error", new Error("Could not find block")); var i = l(n);
                        t._setCurrentBlock(i), t.emit("rawBlock", n), t.emit("latest", n) } })) })), t._blockTracker.on("sync", t.emit.bind(t, "sync")), t._blockTracker.on("error", t.emit.bind(t, "error")), t._running = !0, t.emit("start") }, d.prototype.stop = function() { var e = this;
            e._blockTracker.removeAllListeners(), e._running = !1, e.emit("stop") }, d.prototype.isRunning = function() { return this._running }, d.prototype.addProvider = function(e, t) { "number" === typeof t ? this._providers.splice(t, 0, e) : this._providers.push(e), e.setEngine(this) }, d.prototype.removeProvider = function(e) { var t = this._providers.indexOf(e); if (t < 0) throw new Error("Provider not found.");
            this._providers.splice(t, 1) }, d.prototype.send = function(e) { throw new Error("Web3ProviderEngine does not support synchronous requests.") }, d.prototype.sendAsync = function(e, t) { var r = this;
            r._ready.await((function() { Array.isArray(e) ? s(e, r._handleAsync.bind(r), t) : r._handleAsync(e, t) })) }, d.prototype._getBlockByNumberWithRetry = function(e, t) { var r = this,
                n = 5; return void i();

            function i() { r._getBlockByNumber(e, o) }

            function o(e, r) { return e ? t(e) : r ? void t(null, r) : n > 0 ? (n--, void setTimeout((function() { i() }), 1e3)) : void t(null, null) } }, d.prototype._getBlockByNumber = function(e, t) { var r = f({ method: "eth_getBlockByNumber", params: [e, !1], skipCache: !0 });
            this._handleAsync(r, (function(e, r) { return e ? t(e) : t(null, r.result) })) }, d.prototype._handleAsync = function(e, t) { var r = this,
                n = -1,
                i = null,
                o = null,
                a = [];

            function s(r, n) { o = r, i = n, u(a, (function(e, t) { e ? e(o, i, t) : t() }), (function() { var r = { id: e.id, jsonrpc: e.jsonrpc, result: i };
                    null != o ? (r.error = { message: o.stack || o.message || o, code: -32e3 }, t(o, r)) : t(null, r) })) }! function t(i) { if (n += 1, a.unshift(i), n >= r._providers.length) s(new Error('Request for method "' + e.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));
                else try { r._providers[n].handleRequest(e, t, s) } catch (o) { s(o) } }() }, d.prototype._setCurrentBlock = function(e) { this.currentBlock = e, this.emit("block", e) } }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }), t.createHashFunction = function(t) { return function(r) { var n = t(); return n.update(r), e.from(n.digest()) } } }).call(this, r(785).Buffer) }, function(e, t, r) { e.exports = r(1356)(r(1365)) }, function(e, t, r) { var n = r(1357),
            i = r(1364);
        e.exports = function(e) { var t = n(e),
                r = i(e); return function(e, n) { switch ("string" === typeof e ? e.toLowerCase() : e) {
                    case "keccak224":
                        return new t(1152, 448, null, 224, n);
                    case "keccak256":
                        return new t(1088, 512, null, 256, n);
                    case "keccak384":
                        return new t(832, 768, null, 384, n);
                    case "keccak512":
                        return new t(576, 1024, null, 512, n);
                    case "sha3-224":
                        return new t(1152, 448, 6, 224, n);
                    case "sha3-256":
                        return new t(1088, 512, 6, 256, n);
                    case "sha3-384":
                        return new t(832, 768, 6, 384, n);
                    case "sha3-512":
                        return new t(576, 1024, 6, 512, n);
                    case "shake128":
                        return new r(1344, 256, 31, n);
                    case "shake256":
                        return new r(1088, 512, 31, n);
                    default:
                        throw new Error("Invald algorithm: " + e) } } } }, function(e, t, r) {
        (function(t) { var n = r(247),
                i = r(249),
                o = r(794),
                a = r(795),
                s = r(929).Transform;
            e.exports = function(e) { return function(r) { "use strict";
                    o(u, r); var s = a(u);

                    function u(t, r, i, o, a) { var c; return n(this, u), (c = s.call(this, a))._rate = t, c._capacity = r, c._delimitedSuffix = i, c._hashBitLength = o, c._options = a, c._state = new e, c._state.initialize(t, r), c._finalized = !1, c } return i(u, [{ key: "_transform", value: function(e, t, r) { var n = null; try { this.update(e, t) } catch (i) { n = i }
                            r(n) } }, { key: "_flush", value: function(e) { var t = null; try { this.push(this.digest()) } catch (r) { t = r }
                            e(t) } }, { key: "update", value: function(e, r) { if (!t.isBuffer(e) && "string" !== typeof e) throw new TypeError("Data must be a string or a buffer"); if (this._finalized) throw new Error("Digest already called"); return t.isBuffer(e) || (e = t.from(e, r)), this._state.absorb(e), this } }, { key: "digest", value: function(e) { if (this._finalized) throw new Error("Digest already called");
                            this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix); var t = this._state.squeeze(this._hashBitLength / 8); return void 0 !== e && (t = t.toString(e)), this._resetState(), t } }, { key: "_resetState", value: function() { return this._state.initialize(this._rate, this._capacity), this } }, { key: "_clone", value: function() { var e = new u(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options); return this._state.copy(e._state), e._finalized = this._finalized, e } }]), u }(s) } }).call(this, r(785).Buffer) }, function(e, t, r) { var n = r(1359),
            i = r(1050);
        e.exports = function(e, t) { return !t || "object" !== n(t) && "function" !== typeof t ? i(e) : t } }, function(e, t) {
        function r(t) { return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? e.exports = r = function(e) { return typeof e } : e.exports = r = function(e) { return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, r(t) }
        e.exports = r }, function(e, t, r) { e.exports = r(925) }, function(e, t, r) { e.exports = r(826) }, function(e, t, r) { e.exports = r(854).Transform }, function(e, t, r) { e.exports = r(854).PassThrough }, function(e, t, r) {
        (function(t) { var n = r(247),
                i = r(249),
                o = r(794),
                a = r(795),
                s = r(929).Transform;
            e.exports = function(e) { return function(r) { "use strict";
                    o(u, r); var s = a(u);

                    function u(t, r, i, o) { var a; return n(this, u), (a = s.call(this, o))._rate = t, a._capacity = r, a._delimitedSuffix = i, a._options = o, a._state = new e, a._state.initialize(t, r), a._finalized = !1, a } return i(u, [{ key: "_transform", value: function(e, t, r) { var n = null; try { this.update(e, t) } catch (i) { n = i }
                            r(n) } }, { key: "_flush", value: function() {} }, { key: "_read", value: function(e) { this.push(this.squeeze(e)) } }, { key: "update", value: function(e, r) { if (!t.isBuffer(e) && "string" !== typeof e) throw new TypeError("Data must be a string or a buffer"); if (this._finalized) throw new Error("Squeeze already called"); return t.isBuffer(e) || (e = t.from(e, r)), this._state.absorb(e), this } }, { key: "squeeze", value: function(e, t) { this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix)); var r = this._state.squeeze(e); return void 0 !== t && (r = r.toString(t)), r } }, { key: "_resetState", value: function() { return this._state.initialize(this._rate, this._capacity), this } }, { key: "_clone", value: function() { var e = new u(this._rate, this._capacity, this._delimitedSuffix, this._options); return this._state.copy(e._state), e._finalized = this._finalized, e } }]), u }(s) } }).call(this, r(785).Buffer) }, function(e, t, r) {
        (function(t) { var n = r(1366);

            function i() { this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1 }
            i.prototype.initialize = function(e, t) { for (var r = 0; r < 50; ++r) this.state[r] = 0;
                this.blockSize = e / 8, this.count = 0, this.squeezing = !1 }, i.prototype.absorb = function(e) { for (var t = 0; t < e.length; ++t) this.state[~~(this.count / 4)] ^= e[t] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (n.p1600(this.state), this.count = 0) }, i.prototype.absorbLastFewBits = function(e) { this.state[~~(this.count / 4)] ^= e << this.count % 4 * 8, 0 !== (128 & e) && this.count === this.blockSize - 1 && n.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, n.p1600(this.state), this.count = 0, this.squeezing = !0 }, i.prototype.squeeze = function(e) { this.squeezing || this.absorbLastFewBits(1); for (var r = t.alloc(e), i = 0; i < e; ++i) r[i] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (n.p1600(this.state), this.count = 0); return r }, i.prototype.copy = function(e) { for (var t = 0; t < 50; ++t) e.state[t] = this.state[t];
                e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing }, e.exports = i }).call(this, r(785).Buffer) }, function(e, t) { var r = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
        t.p1600 = function(e) { for (var t = 0; t < 24; ++t) { var n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
                    i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
                    o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
                    a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
                    s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
                    u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
                    c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
                    f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
                    d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
                    l = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49],
                    h = d ^ (o << 1 | a >>> 31),
                    p = l ^ (a << 1 | o >>> 31),
                    b = e[0] ^ h,
                    v = e[1] ^ p,
                    g = e[10] ^ h,
                    y = e[11] ^ p,
                    m = e[20] ^ h,
                    _ = e[21] ^ p,
                    w = e[30] ^ h,
                    x = e[31] ^ p,
                    k = e[40] ^ h,
                    S = e[41] ^ p;
                h = n ^ (s << 1 | u >>> 31), p = i ^ (u << 1 | s >>> 31); var E = e[2] ^ h,
                    M = e[3] ^ p,
                    A = e[12] ^ h,
                    R = e[13] ^ p,
                    T = e[22] ^ h,
                    C = e[23] ^ p,
                    O = e[32] ^ h,
                    P = e[33] ^ p,
                    I = e[42] ^ h,
                    B = e[43] ^ p;
                h = o ^ (c << 1 | f >>> 31), p = a ^ (f << 1 | c >>> 31); var L = e[4] ^ h,
                    j = e[5] ^ p,
                    N = e[14] ^ h,
                    q = e[15] ^ p,
                    U = e[24] ^ h,
                    D = e[25] ^ p,
                    H = e[34] ^ h,
                    z = e[35] ^ p,
                    F = e[44] ^ h,
                    K = e[45] ^ p;
                h = s ^ (d << 1 | l >>> 31), p = u ^ (l << 1 | d >>> 31); var W = e[6] ^ h,
                    V = e[7] ^ p,
                    J = e[16] ^ h,
                    Y = e[17] ^ p,
                    G = e[26] ^ h,
                    Z = e[27] ^ p,
                    X = e[36] ^ h,
                    $ = e[37] ^ p,
                    Q = e[46] ^ h,
                    ee = e[47] ^ p;
                h = c ^ (n << 1 | i >>> 31), p = f ^ (i << 1 | n >>> 31); var te = e[8] ^ h,
                    re = e[9] ^ p,
                    ne = e[18] ^ h,
                    ie = e[19] ^ p,
                    oe = e[28] ^ h,
                    ae = e[29] ^ p,
                    se = e[38] ^ h,
                    ue = e[39] ^ p,
                    ce = e[48] ^ h,
                    fe = e[49] ^ p,
                    de = b,
                    le = v,
                    he = y << 4 | g >>> 28,
                    pe = g << 4 | y >>> 28,
                    be = m << 3 | _ >>> 29,
                    ve = _ << 3 | m >>> 29,
                    ge = x << 9 | w >>> 23,
                    ye = w << 9 | x >>> 23,
                    me = k << 18 | S >>> 14,
                    _e = S << 18 | k >>> 14,
                    we = E << 1 | M >>> 31,
                    xe = M << 1 | E >>> 31,
                    ke = R << 12 | A >>> 20,
                    Se = A << 12 | R >>> 20,
                    Ee = T << 10 | C >>> 22,
                    Me = C << 10 | T >>> 22,
                    Ae = P << 13 | O >>> 19,
                    Re = O << 13 | P >>> 19,
                    Te = I << 2 | B >>> 30,
                    Ce = B << 2 | I >>> 30,
                    Oe = j << 30 | L >>> 2,
                    Pe = L << 30 | j >>> 2,
                    Ie = N << 6 | q >>> 26,
                    Be = q << 6 | N >>> 26,
                    Le = D << 11 | U >>> 21,
                    je = U << 11 | D >>> 21,
                    Ne = H << 15 | z >>> 17,
                    qe = z << 15 | H >>> 17,
                    Ue = K << 29 | F >>> 3,
                    De = F << 29 | K >>> 3,
                    He = W << 28 | V >>> 4,
                    ze = V << 28 | W >>> 4,
                    Fe = Y << 23 | J >>> 9,
                    Ke = J << 23 | Y >>> 9,
                    We = G << 25 | Z >>> 7,
                    Ve = Z << 25 | G >>> 7,
                    Je = X << 21 | $ >>> 11,
                    Ye = $ << 21 | X >>> 11,
                    Ge = ee << 24 | Q >>> 8,
                    Ze = Q << 24 | ee >>> 8,
                    Xe = te << 27 | re >>> 5,
                    $e = re << 27 | te >>> 5,
                    Qe = ne << 20 | ie >>> 12,
                    et = ie << 20 | ne >>> 12,
                    tt = ae << 7 | oe >>> 25,
                    rt = oe << 7 | ae >>> 25,
                    nt = se << 8 | ue >>> 24,
                    it = ue << 8 | se >>> 24,
                    ot = ce << 14 | fe >>> 18,
                    at = fe << 14 | ce >>> 18;
                e[0] = de ^ ~ke & Le, e[1] = le ^ ~Se & je, e[10] = He ^ ~Qe & be, e[11] = ze ^ ~et & ve, e[20] = we ^ ~Ie & We, e[21] = xe ^ ~Be & Ve, e[30] = Xe ^ ~he & Ee, e[31] = $e ^ ~pe & Me, e[40] = Oe ^ ~Fe & tt, e[41] = Pe ^ ~Ke & rt, e[2] = ke ^ ~Le & Je, e[3] = Se ^ ~je & Ye, e[12] = Qe ^ ~be & Ae, e[13] = et ^ ~ve & Re, e[22] = Ie ^ ~We & nt, e[23] = Be ^ ~Ve & it, e[32] = he ^ ~Ee & Ne, e[33] = pe ^ ~Me & qe, e[42] = Fe ^ ~tt & ge, e[43] = Ke ^ ~rt & ye, e[4] = Le ^ ~Je & ot, e[5] = je ^ ~Ye & at, e[14] = be ^ ~Ae & Ue, e[15] = ve ^ ~Re & De, e[24] = We ^ ~nt & me, e[25] = Ve ^ ~it & _e, e[34] = Ee ^ ~Ne & Ge, e[35] = Me ^ ~qe & Ze, e[44] = tt ^ ~ge & Te, e[45] = rt ^ ~ye & Ce, e[6] = Je ^ ~ot & de, e[7] = Ye ^ ~at & le, e[16] = Ae ^ ~Ue & He, e[17] = Re ^ ~De & ze, e[26] = nt ^ ~me & we, e[27] = it ^ ~_e & xe, e[36] = Ne ^ ~Ge & Xe, e[37] = qe ^ ~Ze & $e, e[46] = ge ^ ~Te & Oe, e[47] = ye ^ ~Ce & Pe, e[8] = ot ^ ~de & ke, e[9] = at ^ ~le & Se, e[18] = Ue ^ ~He & Qe, e[19] = De ^ ~ze & et, e[28] = me ^ ~we & Ie, e[29] = _e ^ ~xe & Be, e[38] = Ge ^ ~Xe & he, e[39] = Ze ^ ~$e & pe, e[48] = Te ^ ~Oe & Fe, e[49] = Ce ^ ~Pe & Ke, e[0] ^= r[2 * t], e[1] ^= r[2 * t + 1] } } }, function(e, t, r) { "use strict";
        (function(t) { var n = r(1051),
                i = r(1385),
                o = r(1386),
                a = function(e) { return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e)) };
            e.exports = { privateKeyVerify: a, privateKeyExport: function(e, t) { if (32 !== e.length) throw new RangeError("private key length is invalid"); var r = i.privateKeyExport(e, t); return o.privateKeyExport(e, r, t) }, privateKeyImport: function(e) { if (null !== (e = o.privateKeyImport(e)) && 32 === e.length && a(e)) return e; throw new Error("couldn't import from DER format") }, privateKeyNegate: function(e) { return t.from(n.privateKeyNegate(Uint8Array.from(e))) }, privateKeyModInverse: function(e) { if (32 !== e.length) throw new Error("private key length is invalid"); return t.from(i.privateKeyModInverse(Uint8Array.from(e))) }, privateKeyTweakAdd: function(e, r) { return t.from(n.privateKeyTweakAdd(Uint8Array.from(e), r)) }, privateKeyTweakMul: function(e, r) { return t.from(n.privateKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r))) }, publicKeyCreate: function(e, r) { return t.from(n.publicKeyCreate(Uint8Array.from(e), r)) }, publicKeyConvert: function(e, r) { return t.from(n.publicKeyConvert(Uint8Array.from(e), r)) }, publicKeyVerify: function(e) { return (33 === e.length || 65 === e.length) && n.publicKeyVerify(Uint8Array.from(e)) }, publicKeyTweakAdd: function(e, r, i) { return t.from(n.publicKeyTweakAdd(Uint8Array.from(e), Uint8Array.from(r), i)) }, publicKeyTweakMul: function(e, r, i) { return t.from(n.publicKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r), i)) }, publicKeyCombine: function(e, r) { var i = []; return e.forEach((function(e) { i.push(Uint8Array.from(e)) })), t.from(n.publicKeyCombine(i, r)) }, signatureNormalize: function(e) { return t.from(n.signatureNormalize(Uint8Array.from(e))) }, signatureExport: function(e) { return t.from(n.signatureExport(Uint8Array.from(e))) }, signatureImport: function(e) { return t.from(n.signatureImport(Uint8Array.from(e))) }, signatureImportLax: function(e) { if (0 === e.length) throw new RangeError("signature length is invalid"); var t = o.signatureImportLax(e); if (null === t) throw new Error("couldn't parse DER signature"); return i.signatureImport(t) }, sign: function(e, r, i) { if (null === i) throw new TypeError("options should be an Object"); var o = void 0; if (i) { if (o = {}, null === i.data) throw new TypeError("options.data should be a Buffer"); if (i.data) { if (32 !== i.data.length) throw new RangeError("options.data length is invalid");
                            o.data = new Uint8Array(i.data) } if (null === i.noncefn) throw new TypeError("options.noncefn should be a Function");
                        i.noncefn && (o.noncefn = function(e, r, n, o, a) { var s = null != n ? t.from(n) : null,
                                u = null != o ? t.from(o) : null,
                                c = t.from(""); return i.noncefn && (c = i.noncefn(t.from(e), t.from(r), s, u, a)), Uint8Array.from(c) }) } var a = n.ecdsaSign(Uint8Array.from(e), Uint8Array.from(r), o); return { signature: t.from(a.signature), recovery: a.recid } }, verify: function(e, t, r) { return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r) }, recover: function(e, r, i, o) { return t.from(n.ecdsaRecover(Uint8Array.from(r), i, Uint8Array.from(e), o)) }, ecdh: function(e, r) { return t.from(n.ecdh(Uint8Array.from(e), Uint8Array.from(r), {})) }, ecdhUnsafe: function(e, r, n) { if (33 !== e.length && 65 !== e.length) throw new RangeError("public key length is invalid"); if (32 !== r.length) throw new RangeError("private key length is invalid"); return t.from(i.ecdhUnsafe(Uint8Array.from(e), Uint8Array.from(r), n)) } } }).call(this, r(785).Buffer) }, function(e, t, r) { var n = r(158),
            i = "Impossible case. Please create issue.",
            o = "The tweak was out of range or the resulted private key is invalid",
            a = "The tweak was out of range or equal to zero",
            s = "Unknow error on context randomization",
            u = "Private Key is invalid",
            c = "Public Key could not be parsed",
            f = "Public Key serialization error",
            d = "The sum of the public keys is not valid",
            l = "Signature could not be parsed",
            h = "The nonce generation function failed, or the private key was invalid",
            p = "Public key could not be recover",
            b = "Scalar was invalid (zero or overflow)";

        function v(e, t) { if (!e) throw new Error(t) }

        function g(e, t, r) { if (v(t instanceof Uint8Array, "Expected ".concat(e, " to be an Uint8Array")), void 0 !== r)
                if (Array.isArray(r)) { var n = r.join(", "),
                        i = "Expected ".concat(e, " to be an Uint8Array with length [").concat(n, "]");
                    v(r.includes(t.length), i) } else { var o = "Expected ".concat(e, " to be an Uint8Array with length ").concat(r);
                    v(t.length === r, o) } }

        function y(e) { v("Boolean" === _(e), "Expected compressed to be a Boolean") }

        function m() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e) { return new Uint8Array(e) },
                t = arguments.length > 1 ? arguments[1] : void 0; return "function" === typeof e && (e = e(t)), g("output", e, t), e }

        function _(e) { return Object.prototype.toString.call(e).slice(8, -1) }
        e.exports = function(e) { return { contextRandomize: function(t) { switch (v(null === t || t instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), null !== t && g("seed", t, 32), e.contextRandomize(t)) {
                        case 1:
                            throw new Error(s) } }, privateKeyVerify: function(t) { return g("private key", t, 32), 0 === e.privateKeyVerify(t) }, privateKeyNegate: function(t) { switch (g("private key", t, 32), e.privateKeyNegate(t)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(i) } }, privateKeyTweakAdd: function(t, r) { switch (g("private key", t, 32), g("tweak", r, 32), e.privateKeyTweakAdd(t, r)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(o) } }, privateKeyTweakMul: function(t, r) { switch (g("private key", t, 32), g("tweak", r, 32), e.privateKeyTweakMul(t, r)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(a) } }, publicKeyVerify: function(t) { return g("public key", t, [33, 65]), 0 === e.publicKeyVerify(t) }, publicKeyCreate: function(t) { var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0; switch (g("private key", t, 32), y(r), n = m(n, r ? 33 : 65), e.publicKeyCreate(n, t)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(u);
                        case 2:
                            throw new Error(f) } }, publicKeyConvert: function(t) { var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0; switch (g("public key", t, [33, 65]), y(r), n = m(n, r ? 33 : 65), e.publicKeyConvert(n, t)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(f) } }, publicKeyNegate: function(t) { var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0; switch (g("public key", t, [33, 65]), y(r), n = m(n, r ? 33 : 65), e.publicKeyNegate(n, t)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(i);
                        case 3:
                            throw new Error(f) } }, publicKeyCombine: function(t) { var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 ? arguments[2] : void 0;
                    v(Array.isArray(t), "Expected public keys to be an Array"), v(t.length > 0, "Expected public keys array will have more than zero items"); var o, a = n(t); try { for (a.s(); !(o = a.n()).done;) { var s = o.value;
                            g("public key", s, [33, 65]) } } catch (u) { a.e(u) } finally { a.f() } switch (y(r), i = m(i, r ? 33 : 65), e.publicKeyCombine(i, t)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(d);
                        case 3:
                            throw new Error(f) } }, publicKeyTweakAdd: function(t, r) { var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = arguments.length > 3 ? arguments[3] : void 0; switch (g("public key", t, [33, 65]), g("tweak", r, 32), y(n), i = m(i, n ? 33 : 65), e.publicKeyTweakAdd(i, t, r)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(o) } }, publicKeyTweakMul: function(t, r) { var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = arguments.length > 3 ? arguments[3] : void 0; switch (g("public key", t, [33, 65]), g("tweak", r, 32), y(n), i = m(i, n ? 33 : 65), e.publicKeyTweakMul(i, t, r)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(a) } }, signatureNormalize: function(t) { switch (g("signature", t, 64), e.signatureNormalize(t)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(l) } }, signatureExport: function(t, r) { g("signature", t, 64); var n = { output: r = m(r, 72), outputlen: 72 }; switch (e.signatureExport(n, t)) {
                        case 0:
                            return r.slice(0, n.outputlen);
                        case 1:
                            throw new Error(l);
                        case 2:
                            throw new Error(i) } }, signatureImport: function(t, r) { switch (g("signature", t), r = m(r, 64), e.signatureImport(r, t)) {
                        case 0:
                            return r;
                        case 1:
                            throw new Error(l);
                        case 2:
                            throw new Error(i) } }, ecdsaSign: function(t, r) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = arguments.length > 3 ? arguments[3] : void 0;
                    g("message", t, 32), g("private key", r, 32), v("Object" === _(n), "Expected options to be an Object"), void 0 !== n.data && g("options.data", n.data), void 0 !== n.noncefn && v("Function" === _(n.noncefn), "Expected options.noncefn to be a Function"); var a = { signature: o = m(o, 64), recid: null }; switch (e.ecdsaSign(a, t, r, n.data, n.noncefn)) {
                        case 0:
                            return a;
                        case 1:
                            throw new Error(h);
                        case 2:
                            throw new Error(i) } }, ecdsaVerify: function(t, r, n) { switch (g("signature", t, 64), g("message", r, 32), g("public key", n, [33, 65]), e.ecdsaVerify(t, r, n)) {
                        case 0:
                            return !0;
                        case 3:
                            return !1;
                        case 1:
                            throw new Error(l);
                        case 2:
                            throw new Error(c) } }, ecdsaRecover: function(t, r, n) { var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = arguments.length > 4 ? arguments[4] : void 0; switch (g("signature", t, 64), v("Number" === _(r) && r >= 0 && r <= 3, "Expected recovery id to be a Number within interval [0, 3]"), g("message", n, 32), y(o), a = m(a, o ? 33 : 65), e.ecdsaRecover(a, t, r, n)) {
                        case 0:
                            return a;
                        case 1:
                            throw new Error(l);
                        case 2:
                            throw new Error(p);
                        case 3:
                            throw new Error(i) } }, ecdh: function(t, r) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 ? arguments[3] : void 0; switch (g("public key", t, [33, 65]), g("private key", r, 32), v("Object" === _(n), "Expected options to be an Object"), void 0 !== n.data && g("options.data", n.data), void 0 !== n.hashfn ? (v("Function" === _(n.hashfn), "Expected options.hashfn to be a Function"), void 0 !== n.xbuf && g("options.xbuf", n.xbuf, 32), void 0 !== n.ybuf && g("options.ybuf", n.ybuf, 32), g("output", i)) : i = m(i, 32), e.ecdh(i, t, r, n.data, n.hashfn, n.xbuf, n.ybuf)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(b) } } } } }, function(e, t, r) { var n = new(0, r(930).ec)("secp256k1"),
            i = n.curve,
            o = i.n.constructor;

        function a(e) { var t = e[0]; switch (t) {
                case 2:
                case 3:
                    return 33 !== e.length ? null : function(e, t) { var r = new o(t); if (r.cmp(i.p) >= 0) return null; var a = (r = r.toRed(i.red)).redSqr().redIMul(r).redIAdd(i.b).redSqrt(); return 3 === e !== a.isOdd() && (a = a.redNeg()), n.keyPair({ pub: { x: r, y: a } }) }(t, e.subarray(1, 33));
                case 4:
                case 6:
                case 7:
                    return 65 !== e.length ? null : function(e, t, r) { var a = new o(t),
                            s = new o(r); if (a.cmp(i.p) >= 0 || s.cmp(i.p) >= 0) return null; if (a = a.toRed(i.red), s = s.toRed(i.red), (6 === e || 7 === e) && s.isOdd() !== (7 === e)) return null; var u = a.redSqr().redIMul(a); return s.redSqr().redISub(u.redIAdd(i.b)).isZero() ? n.keyPair({ pub: { x: a, y: s } }) : null }(t, e.subarray(1, 33), e.subarray(33, 65));
                default:
                    return null } }

        function s(e, t) { for (var r = t.encode(null, 33 === e.length), n = 0; n < e.length; ++n) e[n] = r[n] }
        e.exports = { contextRandomize: function() { return 0 }, privateKeyVerify: function(e) { var t = new o(e); return t.cmp(i.n) < 0 && !t.isZero() ? 0 : 1 }, privateKeyNegate: function(e) { var t = new o(e),
                    r = i.n.sub(t).umod(i.n).toArrayLike(Uint8Array, "be", 32); return e.set(r), 0 }, privateKeyTweakAdd: function(e, t) { var r = new o(t); if (r.cmp(i.n) >= 0) return 1; if (r.iadd(new o(e)), r.cmp(i.n) >= 0 && r.isub(i.n), r.isZero()) return 1; var n = r.toArrayLike(Uint8Array, "be", 32); return e.set(n), 0 }, privateKeyTweakMul: function(e, t) { var r = new o(t); if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
                r.imul(new o(e)), r.cmp(i.n) >= 0 && (r = r.umod(i.n)); var n = r.toArrayLike(Uint8Array, "be", 32); return e.set(n), 0 }, publicKeyVerify: function(e) { return null === a(e) ? 1 : 0 }, publicKeyCreate: function(e, t) { var r = new o(t); return r.cmp(i.n) >= 0 || r.isZero() ? 1 : (s(e, n.keyFromPrivate(t).getPublic()), 0) }, publicKeyConvert: function(e, t) { var r = a(t); return null === r ? 1 : (s(e, r.getPublic()), 0) }, publicKeyNegate: function(e, t) { var r = a(t); if (null === r) return 1; var n = r.getPublic(); return n.y = n.y.redNeg(), s(e, n), 0 }, publicKeyCombine: function(e, t) { for (var r = new Array(t.length), n = 0; n < t.length; ++n)
                    if (r[n] = a(t[n]), null === r[n]) return 1;
                for (var i = r[0].getPublic(), o = 1; o < r.length; ++o) i = i.add(r[o].pub); return i.isInfinity() ? 2 : (s(e, i), 0) }, publicKeyTweakAdd: function(e, t, r) { var n = a(t); if (null === n) return 1; if ((r = new o(r)).cmp(i.n) >= 0) return 2; var u = n.getPublic().add(i.g.mul(r)); return u.isInfinity() ? 2 : (s(e, u), 0) }, publicKeyTweakMul: function(e, t, r) { var n = a(t); return null === n ? 1 : (r = new o(r)).cmp(i.n) >= 0 || r.isZero() ? 2 : (s(e, n.getPublic().mul(r)), 0) }, signatureNormalize: function(e) { var t = new o(e.subarray(0, 32)),
                    r = new o(e.subarray(32, 64)); return t.cmp(i.n) >= 0 || r.cmp(i.n) >= 0 ? 1 : (1 === r.cmp(n.nh) && e.set(i.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32), 0) }, signatureExport: function(e, t) { var r = t.subarray(0, 32),
                    n = t.subarray(32, 64); if (new o(r).cmp(i.n) >= 0) return 1; if (new o(n).cmp(i.n) >= 0) return 1; var a = e.output,
                    s = a.subarray(4, 37);
                s[0] = 0, s.set(r, 1); for (var u = 33, c = 0; u > 1 && 0 === s[c] && !(128 & s[c + 1]); --u, ++c); if (128 & (s = s.subarray(c))[0]) return 1; if (u > 1 && 0 === s[0] && !(128 & s[1])) return 1; var f = a.subarray(39, 72);
                f[0] = 0, f.set(n, 1); for (var d = 33, l = 0; d > 1 && 0 === f[l] && !(128 & f[l + 1]); --d, ++l); return 128 & (f = f.subarray(l))[0] || d > 1 && 0 === f[0] && !(128 & f[1]) ? 1 : (e.outputlen = 6 + u + d, a[0] = 48, a[1] = e.outputlen - 2, a[2] = 2, a[3] = s.length, a.set(s, 4), a[4 + u] = 2, a[5 + u] = f.length, a.set(f, 6 + u), 0) }, signatureImport: function(e, t) { if (t.length < 8) return 1; if (t.length > 72) return 1; if (48 !== t[0]) return 1; if (t[1] !== t.length - 2) return 1; if (2 !== t[2]) return 1; var r = t[3]; if (0 === r) return 1; if (5 + r >= t.length) return 1; if (2 !== t[4 + r]) return 1; var n = t[5 + r]; if (0 === n) return 1; if (6 + r + n !== t.length) return 1; if (128 & t[4]) return 1; if (r > 1 && 0 === t[4] && !(128 & t[5])) return 1; if (128 & t[r + 6]) return 1; if (n > 1 && 0 === t[r + 6] && !(128 & t[r + 7])) return 1; var a = t.subarray(4, 4 + r); if (33 === a.length && 0 === a[0] && (a = a.subarray(1)), a.length > 32) return 1; var s = t.subarray(6 + r); if (33 === s.length && 0 === s[0] && (s = s.slice(1)), s.length > 32) throw new Error("S length is too long"); var u = new o(a);
                u.cmp(i.n) >= 0 && (u = new o(0)); var c = new o(t.subarray(6 + r)); return c.cmp(i.n) >= 0 && (c = new o(0)), e.set(u.toArrayLike(Uint8Array, "be", 32), 0), e.set(c.toArrayLike(Uint8Array, "be", 32), 32), 0 }, ecdsaSign: function(e, t, r, a, s) { if (s) { var u = s;
                    s = function(e) { var n = u(t, r, null, a, e); if (!(n instanceof Uint8Array && 32 === n.length)) throw new Error("This is the way"); return new o(n) } } var c, f = new o(r); if (f.cmp(i.n) >= 0 || f.isZero()) return 1; try { c = n.sign(t, r, { canonical: !0, k: s, pers: a }) } catch (d) { return 1 } return e.signature.set(c.r.toArrayLike(Uint8Array, "be", 32), 0), e.signature.set(c.s.toArrayLike(Uint8Array, "be", 32), 32), e.recid = c.recoveryParam, 0 }, ecdsaVerify: function(e, t, r) { var s = { r: e.subarray(0, 32), s: e.subarray(32, 64) },
                    u = new o(s.r),
                    c = new o(s.s); if (u.cmp(i.n) >= 0 || c.cmp(i.n) >= 0) return 1; if (1 === c.cmp(n.nh) || u.isZero() || c.isZero()) return 3; var f = a(r); if (null === f) return 2; var d = f.getPublic(); return n.verify(t, s, d) ? 0 : 3 }, ecdsaRecover: function(e, t, r, a) { var u, c = { r: t.slice(0, 32), s: t.slice(32, 64) },
                    f = new o(c.r),
                    d = new o(c.s); if (f.cmp(i.n) >= 0 || d.cmp(i.n) >= 0) return 1; if (f.isZero() || d.isZero()) return 2; try { u = n.recoverPubKey(a, c, r) } catch (l) { return 2 } return s(e, u), 0 }, ecdh: function(e, t, r, s, u, c, f) { var d = a(t); if (null === d) return 1; var l = new o(r); if (l.cmp(i.n) >= 0 || l.isZero()) return 2; var h = d.getPublic().mul(l); if (void 0 === u)
                    for (var p = h.encode(null, !0), b = n.hash().update(p).digest(), v = 0; v < 32; ++v) e[v] = b[v];
                else { c || (c = new Uint8Array(32)); for (var g = h.getX().toArray("be", 32), y = 0; y < 32; ++y) c[y] = g[y];
                    f || (f = new Uint8Array(32)); for (var m = h.getY().toArray("be", 32), _ = 0; _ < 32; ++_) f[_] = m[_]; var w = u(c, f, s); if (!(w instanceof Uint8Array && w.length === e.length)) return 2;
                    e.set(w) } return 0 } } }, function(e) { e.exports = JSON.parse('{"name":"elliptic","version":"6.5.4","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"lint":"eslint lib test","lint:fix":"npm run lint -- --fix","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^2.0.2","coveralls":"^3.1.0","eslint":"^7.6.0","grunt":"^1.2.1","grunt-browserify":"^5.3.0","grunt-cli":"^1.3.2","grunt-contrib-connect":"^3.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^5.0.0","grunt-mocha-istanbul":"^5.0.2","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.5","mocha":"^8.0.1"},"dependencies":{"bn.js":"^4.11.9","brorand":"^1.1.0","hash.js":"^1.0.0","hmac-drbg":"^1.0.1","inherits":"^2.0.4","minimalistic-assert":"^1.0.1","minimalistic-crypto-utils":"^1.0.1"}}') }, , function(e, t, r) { "use strict"; var n = r(802),
            i = r(48),
            o = r(490),
            a = r(879),
            s = n.assert;

        function u(e) { a.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4) }

        function c(e, t, r, n) { a.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1) }

        function f(e, t, r, n) { a.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one }
        o(u, a), e.exports = u, u.prototype._getEndomorphism = function(e) { if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) { var t, r; if (e.beta) t = new i(e.beta, 16).toRed(this.red);
                else { var n = this._getEndoRoots(this.p);
                    t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red) } if (e.lambda) r = new i(e.lambda, 16);
                else { var o = this._getEndoRoots(this.n);
                    0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? r = o[0] : (r = o[1], s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t)))) } return { beta: t, lambda: r, basis: e.basis ? e.basis.map((function(e) { return { a: new i(e.a, 16), b: new i(e.b, 16) } })) : this._getEndoBasis(r) } } }, u.prototype._getEndoRoots = function(e) { var t = e === this.p ? this.red : i.mont(e),
                r = new i(2).toRed(t).redInvm(),
                n = r.redNeg(),
                o = new i(3).toRed(t).redNeg().redSqrt().redMul(r); return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()] }, u.prototype._getEndoBasis = function(e) { for (var t, r, n, o, a, s, u, c, f, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), l = e, h = this.n.clone(), p = new i(1), b = new i(0), v = new i(0), g = new i(1), y = 0; 0 !== l.cmpn(0);) { var m = h.div(l);
                c = h.sub(m.mul(l)), f = v.sub(m.mul(p)); var _ = g.sub(m.mul(b)); if (!n && c.cmp(d) < 0) t = u.neg(), r = p, n = c.neg(), o = f;
                else if (n && 2 === ++y) break;
                u = c, h = l, l = c, v = p, p = f, g = b, b = _ }
            a = c.neg(), s = f; var w = n.sqr().add(o.sqr()); return a.sqr().add(s.sqr()).cmp(w) >= 0 && (a = t, s = r), n.negative && (n = n.neg(), o = o.neg()), a.negative && (a = a.neg(), s = s.neg()), [{ a: n, b: o }, { a: a, b: s }] }, u.prototype._endoSplit = function(e) { var t = this.endo.basis,
                r = t[0],
                n = t[1],
                i = n.b.mul(e).divRound(this.n),
                o = r.b.neg().mul(e).divRound(this.n),
                a = i.mul(r.a),
                s = o.mul(n.a),
                u = i.mul(r.b),
                c = o.mul(n.b); return { k1: e.sub(a).sub(s), k2: u.add(c).neg() } }, u.prototype.pointFromX = function(e, t) {
            (e = new i(e, 16)).red || (e = e.toRed(this.red)); var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                n = r.redSqrt(); if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point"); var o = n.fromRed().isOdd(); return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n) }, u.prototype.validate = function(e) { if (e.inf) return !0; var t = e.x,
                r = e.y,
                n = this.a.redMul(t),
                i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b); return 0 === r.redSqr().redISub(i).cmpn(0) }, u.prototype._endoWnafMulAdd = function(e, t, r) { for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) { var a = this._endoSplit(t[o]),
                    s = e[o],
                    u = s._getBeta();
                a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), u = u.neg(!0)), n[2 * o] = s, n[2 * o + 1] = u, i[2 * o] = a.k1, i[2 * o + 1] = a.k2 } for (var c = this._wnafMulAdd(1, n, i, 2 * o, r), f = 0; f < 2 * o; f++) n[f] = null, i[f] = null; return c }, o(c, a.BasePoint), u.prototype.point = function(e, t, r) { return new c(this, e, t, r) }, u.prototype.pointFromJSON = function(e, t) { return c.fromJSON(this, e, t) }, c.prototype._getBeta = function() { if (this.curve.endo) { var e = this.precomputed; if (e && e.beta) return e.beta; var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y); if (e) { var r = this.curve,
                        n = function(e) { return r.point(e.x.redMul(r.endo.beta), e.y) };
                    e.beta = t, t.precomputed = { beta: null, naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) }, doubles: e.doubles && { step: e.doubles.step, points: e.doubles.points.map(n) } } } return t } }, c.prototype.toJSON = function() { return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y] }, c.fromJSON = function(e, t, r) { "string" === typeof t && (t = JSON.parse(t)); var n = e.point(t[0], t[1], r); if (!t[2]) return n;

            function i(t) { return e.point(t[0], t[1], r) } var o = t[2]; return n.precomputed = { beta: null, doubles: o.doubles && { step: o.doubles.step, points: [n].concat(o.doubles.points.map(i)) }, naf: o.naf && { wnd: o.naf.wnd, points: [n].concat(o.naf.points.map(i)) } }, n }, c.prototype.inspect = function() { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">" }, c.prototype.isInfinity = function() { return this.inf }, c.prototype.add = function(e) { if (this.inf) return e; if (e.inf) return this; if (this.eq(e)) return this.dbl(); if (this.neg().eq(e)) return this.curve.point(null, null); if (0 === this.x.cmp(e.x)) return this.curve.point(null, null); var t = this.y.redSub(e.y);
            0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm())); var r = t.redSqr().redISub(this.x).redISub(e.x),
                n = t.redMul(this.x.redSub(r)).redISub(this.y); return this.curve.point(r, n) }, c.prototype.dbl = function() { if (this.inf) return this; var e = this.y.redAdd(this.y); if (0 === e.cmpn(0)) return this.curve.point(null, null); var t = this.curve.a,
                r = this.x.redSqr(),
                n = e.redInvm(),
                i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
                o = i.redSqr().redISub(this.x.redAdd(this.x)),
                a = i.redMul(this.x.redSub(o)).redISub(this.y); return this.curve.point(o, a) }, c.prototype.getX = function() { return this.x.fromRed() }, c.prototype.getY = function() { return this.y.fromRed() }, c.prototype.mul = function(e) { return e = new i(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e) }, c.prototype.mulAdd = function(e, t, r) { var n = [this, t],
                i = [e, r]; return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2) }, c.prototype.jmulAdd = function(e, t, r) { var n = [this, t],
                i = [e, r]; return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0) }, c.prototype.eq = function(e) { return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y)) }, c.prototype.neg = function(e) { if (this.inf) return this; var t = this.curve.point(this.x, this.y.redNeg()); if (e && this.precomputed) { var r = this.precomputed,
                    n = function(e) { return e.neg() };
                t.precomputed = { naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) }, doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(n) } } } return t }, c.prototype.toJ = function() { return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one) }, o(f, a.BasePoint), u.prototype.jpoint = function(e, t, r) { return new f(this, e, t, r) }, f.prototype.toP = function() { if (this.isInfinity()) return this.curve.point(null, null); var e = this.z.redInvm(),
                t = e.redSqr(),
                r = this.x.redMul(t),
                n = this.y.redMul(t).redMul(e); return this.curve.point(r, n) }, f.prototype.neg = function() { return this.curve.jpoint(this.x, this.y.redNeg(), this.z) }, f.prototype.add = function(e) { if (this.isInfinity()) return e; if (e.isInfinity()) return this; var t = e.z.redSqr(),
                r = this.z.redSqr(),
                n = this.x.redMul(t),
                i = e.x.redMul(r),
                o = this.y.redMul(t.redMul(e.z)),
                a = e.y.redMul(r.redMul(this.z)),
                s = n.redSub(i),
                u = o.redSub(a); if (0 === s.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl(); var c = s.redSqr(),
                f = c.redMul(s),
                d = n.redMul(c),
                l = u.redSqr().redIAdd(f).redISub(d).redISub(d),
                h = u.redMul(d.redISub(l)).redISub(o.redMul(f)),
                p = this.z.redMul(e.z).redMul(s); return this.curve.jpoint(l, h, p) }, f.prototype.mixedAdd = function(e) { if (this.isInfinity()) return e.toJ(); if (e.isInfinity()) return this; var t = this.z.redSqr(),
                r = this.x,
                n = e.x.redMul(t),
                i = this.y,
                o = e.y.redMul(t).redMul(this.z),
                a = r.redSub(n),
                s = i.redSub(o); if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl(); var u = a.redSqr(),
                c = u.redMul(a),
                f = r.redMul(u),
                d = s.redSqr().redIAdd(c).redISub(f).redISub(f),
                l = s.redMul(f.redISub(d)).redISub(i.redMul(c)),
                h = this.z.redMul(a); return this.curve.jpoint(d, l, h) }, f.prototype.dblp = function(e) { if (0 === e) return this; if (this.isInfinity()) return this; if (!e) return this.dbl(); var t; if (this.curve.zeroA || this.curve.threeA) { var r = this; for (t = 0; t < e; t++) r = r.dbl(); return r } var n = this.curve.a,
                i = this.curve.tinv,
                o = this.x,
                a = this.y,
                s = this.z,
                u = s.redSqr().redSqr(),
                c = a.redAdd(a); for (t = 0; t < e; t++) { var f = o.redSqr(),
                    d = c.redSqr(),
                    l = d.redSqr(),
                    h = f.redAdd(f).redIAdd(f).redIAdd(n.redMul(u)),
                    p = o.redMul(d),
                    b = h.redSqr().redISub(p.redAdd(p)),
                    v = p.redISub(b),
                    g = h.redMul(v);
                g = g.redIAdd(g).redISub(l); var y = c.redMul(s);
                t + 1 < e && (u = u.redMul(l)), o = b, s = y, c = g } return this.curve.jpoint(o, c.redMul(i), s) }, f.prototype.dbl = function() { return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl() }, f.prototype._zeroDbl = function() { var e, t, r; if (this.zOne) { var n = this.x.redSqr(),
                    i = this.y.redSqr(),
                    o = i.redSqr(),
                    a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                a = a.redIAdd(a); var s = n.redAdd(n).redIAdd(n),
                    u = s.redSqr().redISub(a).redISub(a),
                    c = o.redIAdd(o);
                c = (c = c.redIAdd(c)).redIAdd(c), e = u, t = s.redMul(a.redISub(u)).redISub(c), r = this.y.redAdd(this.y) } else { var f = this.x.redSqr(),
                    d = this.y.redSqr(),
                    l = d.redSqr(),
                    h = this.x.redAdd(d).redSqr().redISub(f).redISub(l);
                h = h.redIAdd(h); var p = f.redAdd(f).redIAdd(f),
                    b = p.redSqr(),
                    v = l.redIAdd(l);
                v = (v = v.redIAdd(v)).redIAdd(v), e = b.redISub(h).redISub(h), t = p.redMul(h.redISub(e)).redISub(v), r = (r = this.y.redMul(this.z)).redIAdd(r) } return this.curve.jpoint(e, t, r) }, f.prototype._threeDbl = function() { var e, t, r; if (this.zOne) { var n = this.x.redSqr(),
                    i = this.y.redSqr(),
                    o = i.redSqr(),
                    a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                a = a.redIAdd(a); var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                    u = s.redSqr().redISub(a).redISub(a);
                e = u; var c = o.redIAdd(o);
                c = (c = c.redIAdd(c)).redIAdd(c), t = s.redMul(a.redISub(u)).redISub(c), r = this.y.redAdd(this.y) } else { var f = this.z.redSqr(),
                    d = this.y.redSqr(),
                    l = this.x.redMul(d),
                    h = this.x.redSub(f).redMul(this.x.redAdd(f));
                h = h.redAdd(h).redIAdd(h); var p = l.redIAdd(l),
                    b = (p = p.redIAdd(p)).redAdd(p);
                e = h.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(f); var v = d.redSqr();
                v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v), t = h.redMul(p.redISub(e)).redISub(v) } return this.curve.jpoint(e, t, r) }, f.prototype._dbl = function() { var e = this.curve.a,
                t = this.x,
                r = this.y,
                n = this.z,
                i = n.redSqr().redSqr(),
                o = t.redSqr(),
                a = r.redSqr(),
                s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
                u = t.redAdd(t),
                c = (u = u.redIAdd(u)).redMul(a),
                f = s.redSqr().redISub(c.redAdd(c)),
                d = c.redISub(f),
                l = a.redSqr();
            l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l); var h = s.redMul(d).redISub(l),
                p = r.redAdd(r).redMul(n); return this.curve.jpoint(f, h, p) }, f.prototype.trpl = function() { if (!this.curve.zeroA) return this.dbl().add(this); var e = this.x.redSqr(),
                t = this.y.redSqr(),
                r = this.z.redSqr(),
                n = t.redSqr(),
                i = e.redAdd(e).redIAdd(e),
                o = i.redSqr(),
                a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
                s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
                u = n.redIAdd(n);
            u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u); var c = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(u),
                f = t.redMul(c);
            f = (f = f.redIAdd(f)).redIAdd(f); var d = this.x.redMul(s).redISub(f);
            d = (d = d.redIAdd(d)).redIAdd(d); var l = this.y.redMul(c.redMul(u.redISub(c)).redISub(a.redMul(s)));
            l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l); var h = this.z.redAdd(a).redSqr().redISub(r).redISub(s); return this.curve.jpoint(d, l, h) }, f.prototype.mul = function(e, t) { return e = new i(e, t), this.curve._wnafMul(this, e) }, f.prototype.eq = function(e) { if ("affine" === e.type) return this.eq(e.toJ()); if (this === e) return !0; var t = this.z.redSqr(),
                r = e.z.redSqr(); if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1; var n = t.redMul(this.z),
                i = r.redMul(e.z); return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0) }, f.prototype.eqXToP = function(e) { var t = this.z.redSqr(),
                r = e.toRed(this.curve.red).redMul(t); if (0 === this.x.cmp(r)) return !0; for (var n = e.clone(), i = this.curve.redN.redMul(t);;) { if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1; if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0 } }, f.prototype.inspect = function() { return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">" }, f.prototype.isInfinity = function() { return 0 === this.z.cmpn(0) } }, function(e, t, r) { "use strict"; var n = r(48),
            i = r(490),
            o = r(879),
            a = r(802);

        function s(e) { o.call(this, "mont", e), this.a = new n(e.a, 16).toRed(this.red), this.b = new n(e.b, 16).toRed(this.red), this.i4 = new n(4).toRed(this.red).redInvm(), this.two = new n(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two)) }

        function u(e, t, r) { o.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new n(t, 16), this.z = new n(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red))) }
        i(s, o), e.exports = s, s.prototype.validate = function(e) { var t = e.normalize().x,
                r = t.redSqr(),
                n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t); return 0 === n.redSqrt().redSqr().cmp(n) }, i(u, o.BasePoint), s.prototype.decodePoint = function(e, t) { return this.point(a.toArray(e, t), 1) }, s.prototype.point = function(e, t) { return new u(this, e, t) }, s.prototype.pointFromJSON = function(e) { return u.fromJSON(this, e) }, u.prototype.precompute = function() {}, u.prototype._encode = function() { return this.getX().toArray("be", this.curve.p.byteLength()) }, u.fromJSON = function(e, t) { return new u(e, t[0], t[1] || e.one) }, u.prototype.inspect = function() { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">" }, u.prototype.isInfinity = function() { return 0 === this.z.cmpn(0) }, u.prototype.dbl = function() { var e = this.x.redAdd(this.z).redSqr(),
                t = this.x.redSub(this.z).redSqr(),
                r = e.redSub(t),
                n = e.redMul(t),
                i = r.redMul(t.redAdd(this.curve.a24.redMul(r))); return this.curve.point(n, i) }, u.prototype.add = function() { throw new Error("Not supported on Montgomery curve") }, u.prototype.diffAdd = function(e, t) { var r = this.x.redAdd(this.z),
                n = this.x.redSub(this.z),
                i = e.x.redAdd(e.z),
                o = e.x.redSub(e.z).redMul(r),
                a = i.redMul(n),
                s = t.z.redMul(o.redAdd(a).redSqr()),
                u = t.x.redMul(o.redISub(a).redSqr()); return this.curve.point(s, u) }, u.prototype.mul = function(e) { for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) i.push(t.andln(1)); for (var o = i.length - 1; o >= 0; o--) 0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl()); return n }, u.prototype.mulAdd = function() { throw new Error("Not supported on Montgomery curve") }, u.prototype.jumlAdd = function() { throw new Error("Not supported on Montgomery curve") }, u.prototype.eq = function(e) { return 0 === this.getX().cmp(e.getX()) }, u.prototype.normalize = function() { return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this }, u.prototype.getX = function() { return this.normalize(), this.x.fromRed() } }, function(e, t, r) { "use strict"; var n = r(802),
            i = r(48),
            o = r(490),
            a = r(879),
            s = n.assert;

        function u(e) { this.twisted = 1 !== (0 | e.a), this.mOneA = this.twisted && -1 === (0 | e.a), this.extended = this.mOneA, a.call(this, "edwards", e), this.a = new i(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 === (0 | e.c) }

        function c(e, t, r, n, o) { a.BasePoint.call(this, e, "projective"), null === t && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(t, 16), this.y = new i(r, 16), this.z = n ? new i(n, 16) : this.curve.one, this.t = o && new i(o, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm())))) }
        o(u, a), e.exports = u, u.prototype._mulA = function(e) { return this.mOneA ? e.redNeg() : this.a.redMul(e) }, u.prototype._mulC = function(e) { return this.oneC ? e : this.c.redMul(e) }, u.prototype.jpoint = function(e, t, r, n) { return this.point(e, t, r, n) }, u.prototype.pointFromX = function(e, t) {
            (e = new i(e, 16)).red || (e = e.toRed(this.red)); var r = e.redSqr(),
                n = this.c2.redSub(this.a.redMul(r)),
                o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                a = n.redMul(o.redInvm()),
                s = a.redSqrt(); if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point"); var u = s.fromRed().isOdd(); return (t && !u || !t && u) && (s = s.redNeg()), this.point(e, s) }, u.prototype.pointFromY = function(e, t) {
            (e = new i(e, 16)).red || (e = e.toRed(this.red)); var r = e.redSqr(),
                n = r.redSub(this.c2),
                o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                a = n.redMul(o.redInvm()); if (0 === a.cmp(this.zero)) { if (t) throw new Error("invalid point"); return this.point(this.zero, e) } var s = a.redSqrt(); if (0 !== s.redSqr().redSub(a).cmp(this.zero)) throw new Error("invalid point"); return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e) }, u.prototype.validate = function(e) { if (e.isInfinity()) return !0;
            e.normalize(); var t = e.x.redSqr(),
                r = e.y.redSqr(),
                n = t.redMul(this.a).redAdd(r),
                i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r))); return 0 === n.cmp(i) }, o(c, a.BasePoint), u.prototype.pointFromJSON = function(e) { return c.fromJSON(this, e) }, u.prototype.point = function(e, t, r, n) { return new c(this, e, t, r, n) }, c.fromJSON = function(e, t) { return new c(e, t[0], t[1], t[2]) }, c.prototype.inspect = function() { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">" }, c.prototype.isInfinity = function() { return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c)) }, c.prototype._extDbl = function() { var e = this.x.redSqr(),
                t = this.y.redSqr(),
                r = this.z.redSqr();
            r = r.redIAdd(r); var n = this.curve._mulA(e),
                i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
                o = n.redAdd(t),
                a = o.redSub(r),
                s = n.redSub(t),
                u = i.redMul(a),
                c = o.redMul(s),
                f = i.redMul(s),
                d = a.redMul(o); return this.curve.point(u, c, d, f) }, c.prototype._projDbl = function() { var e, t, r, n, i, o, a = this.x.redAdd(this.y).redSqr(),
                s = this.x.redSqr(),
                u = this.y.redSqr(); if (this.curve.twisted) { var c = (n = this.curve._mulA(s)).redAdd(u);
                this.zOne ? (e = a.redSub(s).redSub(u).redMul(c.redSub(this.curve.two)), t = c.redMul(n.redSub(u)), r = c.redSqr().redSub(c).redSub(c)) : (i = this.z.redSqr(), o = c.redSub(i).redISub(i), e = a.redSub(s).redISub(u).redMul(o), t = c.redMul(n.redSub(u)), r = c.redMul(o)) } else n = s.redAdd(u), i = this.curve._mulC(this.z).redSqr(), o = n.redSub(i).redSub(i), e = this.curve._mulC(a.redISub(n)).redMul(o), t = this.curve._mulC(n).redMul(s.redISub(u)), r = n.redMul(o); return this.curve.point(e, t, r) }, c.prototype.dbl = function() { return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl() }, c.prototype._extAdd = function(e) { var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                n = this.t.redMul(this.curve.dd).redMul(e.t),
                i = this.z.redMul(e.z.redAdd(e.z)),
                o = r.redSub(t),
                a = i.redSub(n),
                s = i.redAdd(n),
                u = r.redAdd(t),
                c = o.redMul(a),
                f = s.redMul(u),
                d = o.redMul(u),
                l = a.redMul(s); return this.curve.point(c, f, l, d) }, c.prototype._projAdd = function(e) { var t, r, n = this.z.redMul(e.z),
                i = n.redSqr(),
                o = this.x.redMul(e.x),
                a = this.y.redMul(e.y),
                s = this.curve.d.redMul(o).redMul(a),
                u = i.redSub(s),
                c = i.redAdd(s),
                f = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),
                d = n.redMul(u).redMul(f); return this.curve.twisted ? (t = n.redMul(c).redMul(a.redSub(this.curve._mulA(o))), r = u.redMul(c)) : (t = n.redMul(c).redMul(a.redSub(o)), r = this.curve._mulC(u).redMul(c)), this.curve.point(d, t, r) }, c.prototype.add = function(e) { return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e) }, c.prototype.mul = function(e) { return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e) }, c.prototype.mulAdd = function(e, t, r) { return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1) }, c.prototype.jmulAdd = function(e, t, r) { return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0) }, c.prototype.normalize = function() { if (this.zOne) return this; var e = this.z.redInvm(); return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this }, c.prototype.neg = function() { return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg()) }, c.prototype.getX = function() { return this.normalize(), this.x.fromRed() }, c.prototype.getY = function() { return this.normalize(), this.y.fromRed() }, c.prototype.eq = function(e) { return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()) }, c.prototype.eqXToP = function(e) { var t = e.toRed(this.curve.red).redMul(this.z); if (0 === this.x.cmp(t)) return !0; for (var r = e.clone(), n = this.curve.redN.redMul(this.z);;) { if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1; if (t.redIAdd(n), 0 === this.x.cmp(t)) return !0 } }, c.prototype.toP = c.prototype.normalize, c.prototype.mixedAdd = c.prototype.add }, function(e, t) { e.exports = { doubles: { step: 4, points: [
                    ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                    ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                    ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                    ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                    ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                    ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                    ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                    ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                    ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                    ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                    ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                    ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                    ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                    ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                    ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                    ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                    ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                    ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                    ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                    ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                    ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                    ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                    ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                    ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                    ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                    ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                    ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                    ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                    ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                    ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                    ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                    ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                    ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                    ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                    ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                    ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                    ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                    ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                    ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                    ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                    ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                    ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                    ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                    ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                    ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                    ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                    ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                    ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                    ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                    ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                    ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                    ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                    ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                    ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                    ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                    ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                    ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                    ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                    ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                    ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                    ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                    ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                    ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                    ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                    ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                ] }, naf: { wnd: 7, points: [
                    ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                    ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                    ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                    ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                    ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                    ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                    ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                    ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                    ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                    ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                    ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                    ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                    ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                    ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                    ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                    ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                    ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                    ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                    ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                    ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                    ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                    ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                    ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                    ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                    ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                    ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                    ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                    ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                    ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                    ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                    ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                    ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                    ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                    ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                    ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                    ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                    ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                    ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                    ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                    ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                    ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                    ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                    ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                    ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                    ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                    ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                    ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                    ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                    ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                    ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                    ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                    ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                    ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                    ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                    ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                    ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                    ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                    ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                    ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                    ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                    ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                    ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                    ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                    ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                    ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                    ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                    ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                    ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                    ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                    ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                    ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                    ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                    ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                    ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                    ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                    ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                    ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                    ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                    ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                    ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                    ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                    ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                    ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                    ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                    ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                    ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                    ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                    ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                    ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                    ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                    ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                    ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                    ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                    ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                    ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                    ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                    ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                    ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                    ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                    ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                    ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                    ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                    ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                    ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                    ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                    ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                    ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                    ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                    ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                    ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                    ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                    ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                    ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                    ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                    ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                    ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                    ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                    ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                    ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                    ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                    ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                    ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                    ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                    ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                    ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                    ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                    ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                ] } } }, function(e, t, r) { "use strict"; var n = r(48),
            i = r(1377),
            o = r(802),
            a = r(931),
            s = r(1054),
            u = o.assert,
            c = r(1378),
            f = r(1379);

        function d(e) { if (!(this instanceof d)) return new d(e); "string" === typeof e && (u(Object.prototype.hasOwnProperty.call(a, e), "Unknown curve " + e), e = a[e]), e instanceof a.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash }
        e.exports = d, d.prototype.keyPair = function(e) { return new c(this, e) }, d.prototype.keyFromPrivate = function(e, t) { return c.fromPrivate(this, e, t) }, d.prototype.keyFromPublic = function(e, t) { return c.fromPublic(this, e, t) }, d.prototype.genKeyPair = function(e) { e || (e = {}); for (var t = new i({ hash: this.hash, pers: e.pers, persEnc: e.persEnc || "utf8", entropy: e.entropy || s(this.hash.hmacStrength), entropyEnc: e.entropy && e.entropyEnc || "utf8", nonce: this.n.toArray() }), r = this.n.byteLength(), o = this.n.sub(new n(2));;) { var a = new n(t.generate(r)); if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a) } }, d.prototype._truncateToN = function(e, t) { var r = 8 * e.byteLength() - this.n.bitLength(); return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e }, d.prototype.sign = function(e, t, r, o) { "object" === typeof r && (o = r, r = null), o || (o = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new n(e, 16)); for (var a = this.n.byteLength(), s = t.getPrivate().toArray("be", a), u = e.toArray("be", a), c = new i({ hash: this.hash, entropy: s, nonce: u, pers: o.pers, persEnc: o.persEnc || "utf8" }), d = this.n.sub(new n(1)), l = 0;; l++) { var h = o.k ? o.k(l) : new n(c.generate(this.n.byteLength())); if (!((h = this._truncateToN(h, !0)).cmpn(1) <= 0 || h.cmp(d) >= 0)) { var p = this.g.mul(h); if (!p.isInfinity()) { var b = p.getX(),
                            v = b.umod(this.n); if (0 !== v.cmpn(0)) { var g = h.invm(this.n).mul(v.mul(t.getPrivate()).iadd(e)); if (0 !== (g = g.umod(this.n)).cmpn(0)) { var y = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(v) ? 2 : 0); return o.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), y ^= 1), new f({ r: v, s: g, recoveryParam: y }) } } } } } }, d.prototype.verify = function(e, t, r, i) { e = this._truncateToN(new n(e, 16)), r = this.keyFromPublic(r, i); var o = (t = new f(t, "hex")).r,
                a = t.s; if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1; if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1; var s, u = a.invm(this.n),
                c = u.mul(e).umod(this.n),
                d = u.mul(o).umod(this.n); return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(c, r.getPublic(), d)).isInfinity() && s.eqXToP(o) : !(s = this.g.mulAdd(c, r.getPublic(), d)).isInfinity() && 0 === s.getX().umod(this.n).cmp(o) }, d.prototype.recoverPubKey = function(e, t, r, i) { u((3 & r) === r, "The recovery param is more than two bits"), t = new f(t, i); var o = this.n,
                a = new n(e),
                s = t.r,
                c = t.s,
                d = 1 & r,
                l = r >> 1; if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l) throw new Error("Unable to find sencond key candinate");
            s = l ? this.curve.pointFromX(s.add(this.curve.n), d) : this.curve.pointFromX(s, d); var h = t.r.invm(o),
                p = o.sub(a).mul(h).umod(o),
                b = c.mul(h).umod(o); return this.g.mulAdd(p, s, b) }, d.prototype.getKeyRecoveryParam = function(e, t, r, n) { if (null !== (t = new f(t, n)).recoveryParam) return t.recoveryParam; for (var i = 0; i < 4; i++) { var o; try { o = this.recoverPubKey(e, t, i) } catch (e) { continue } if (o.eq(r)) return i } throw new Error("Unable to find valid recovery factor") } }, function(e, t, r) { "use strict"; var n = r(101),
            i = r(1053),
            o = r(220);

        function a(e) { if (!(this instanceof a)) return new a(e);
            this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null; var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
                r = i.toArray(e.nonce, e.nonceEnc || "hex"),
                n = i.toArray(e.pers, e.persEnc || "hex");
            o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n) }
        e.exports = a, a.prototype._init = function(e, t, r) { var n = e.concat(t).concat(r);
            this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8); for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
            this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656 }, a.prototype._hmac = function() { return new n.hmac(this.hash, this.K) }, a.prototype._update = function(e) { var t = this._hmac().update(this.V).update([0]);
            e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest()) }, a.prototype.reseed = function(e, t, r, n) { "string" !== typeof t && (n = r, r = t, t = null), e = i.toArray(e, t), r = i.toArray(r, n), o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1 }, a.prototype.generate = function(e, t, r, n) { if (this._reseed > this.reseedInterval) throw new Error("Reseed is required"); "string" !== typeof t && (n = r, r = t, t = null), r && (r = i.toArray(r, n || "hex"), this._update(r)); for (var o = []; o.length < e;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V); var a = o.slice(0, e); return this._update(r), this._reseed++, i.encode(a, t) } }, function(e, t, r) { "use strict"; var n = r(48),
            i = r(802).assert;

        function o(e, t) { this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc) }
        e.exports = o, o.fromPublic = function(e, t, r) { return t instanceof o ? t : new o(e, { pub: t, pubEnc: r }) }, o.fromPrivate = function(e, t, r) { return t instanceof o ? t : new o(e, { priv: t, privEnc: r }) }, o.prototype.validate = function() { var e = this.getPublic(); return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" } }, o.prototype.getPublic = function(e, t) { return "string" === typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub }, o.prototype.getPrivate = function(e) { return "hex" === e ? this.priv.toString(16, 2) : this.priv }, o.prototype._importPrivate = function(e, t) { this.priv = new n(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n) }, o.prototype._importPublic = function(e, t) { if (e.x || e.y) return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
            this.pub = this.ec.curve.decodePoint(e, t) }, o.prototype.derive = function(e) { return e.validate() || i(e.validate(), "public point not validated"), e.mul(this.priv).getX() }, o.prototype.sign = function(e, t, r) { return this.ec.sign(e, this, t, r) }, o.prototype.verify = function(e, t) { return this.ec.verify(e, t, this) }, o.prototype.inspect = function() { return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >" } }, function(e, t, r) { "use strict"; var n = r(48),
            i = r(802),
            o = i.assert;

        function a(e, t) { if (e instanceof a) return e;
            this._importDER(e, t) || (o(e.r && e.s, "Signature without r or s"), this.r = new n(e.r, 16), this.s = new n(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam) }

        function s() { this.place = 0 }

        function u(e, t) { var r = e[t.place++]; if (!(128 & r)) return r; var n = 15 & r; if (0 === n || n > 4) return !1; for (var i = 0, o = 0, a = t.place; o < n; o++, a++) i <<= 8, i |= e[a], i >>>= 0; return !(i <= 127) && (t.place = a, i) }

        function c(e) { for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++; return 0 === t ? e : e.slice(t) }

        function f(e, t) { if (t < 128) e.push(t);
            else { var r = 1 + (Math.log(t) / Math.LN2 >>> 3); for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
                e.push(t) } }
        e.exports = a, a.prototype._importDER = function(e, t) { e = i.toArray(e, t); var r = new s; if (48 !== e[r.place++]) return !1; var o = u(e, r); if (!1 === o) return !1; if (o + r.place !== e.length) return !1; if (2 !== e[r.place++]) return !1; var a = u(e, r); if (!1 === a) return !1; var c = e.slice(r.place, a + r.place); if (r.place += a, 2 !== e[r.place++]) return !1; var f = u(e, r); if (!1 === f) return !1; if (e.length !== f + r.place) return !1; var d = e.slice(r.place, f + r.place); if (0 === c[0]) { if (!(128 & c[1])) return !1;
                c = c.slice(1) } if (0 === d[0]) { if (!(128 & d[1])) return !1;
                d = d.slice(1) } return this.r = new n(c), this.s = new n(d), this.recoveryParam = null, !0 }, a.prototype.toDER = function(e) { var t = this.r.toArray(),
                r = this.s.toArray(); for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = c(t), r = c(r); !r[0] && !(128 & r[1]);) r = r.slice(1); var n = [2];
            f(n, t.length), (n = n.concat(t)).push(2), f(n, r.length); var o = n.concat(r),
                a = [48]; return f(a, o.length), a = a.concat(o), i.encode(a, e) } }, function(e, t, r) { "use strict"; var n = r(101),
            i = r(931),
            o = r(802),
            a = o.assert,
            s = o.parseBytes,
            u = r(1381),
            c = r(1382);

        function f(e) { if (a("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof f)) return new f(e);
            e = i[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = n.sha512 }
        e.exports = f, f.prototype.sign = function(e, t) { e = s(e); var r = this.keyFromSecret(t),
                n = this.hashInt(r.messagePrefix(), e),
                i = this.g.mul(n),
                o = this.encodePoint(i),
                a = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
                u = n.add(a).umod(this.curve.n); return this.makeSignature({ R: i, S: u, Rencoded: o }) }, f.prototype.verify = function(e, t, r) { e = s(e), t = this.makeSignature(t); var n = this.keyFromPublic(r),
                i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
                o = this.g.mul(t.S()); return t.R().add(n.pub().mul(i)).eq(o) }, f.prototype.hashInt = function() { for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]); return o.intFromLE(e.digest()).umod(this.curve.n) }, f.prototype.keyFromPublic = function(e) { return u.fromPublic(this, e) }, f.prototype.keyFromSecret = function(e) { return u.fromSecret(this, e) }, f.prototype.makeSignature = function(e) { return e instanceof c ? e : new c(this, e) }, f.prototype.encodePoint = function(e) { var t = e.getY().toArray("le", this.encodingLength); return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t }, f.prototype.decodePoint = function(e) { var t = (e = o.parseBytes(e)).length - 1,
                r = e.slice(0, t).concat(-129 & e[t]),
                n = 0 !== (128 & e[t]),
                i = o.intFromLE(r); return this.curve.pointFromY(i, n) }, f.prototype.encodeInt = function(e) { return e.toArray("le", this.encodingLength) }, f.prototype.decodeInt = function(e) { return o.intFromLE(e) }, f.prototype.isPoint = function(e) { return e instanceof this.pointClass } }, function(e, t, r) { "use strict"; var n = r(802),
            i = n.assert,
            o = n.parseBytes,
            a = n.cachedProperty;

        function s(e, t) { this.eddsa = e, this._secret = o(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = o(t.pub) }
        s.fromPublic = function(e, t) { return t instanceof s ? t : new s(e, { pub: t }) }, s.fromSecret = function(e, t) { return t instanceof s ? t : new s(e, { secret: t }) }, s.prototype.secret = function() { return this._secret }, a(s, "pubBytes", (function() { return this.eddsa.encodePoint(this.pub()) })), a(s, "pub", (function() { return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv()) })), a(s, "privBytes", (function() { var e = this.eddsa,
                t = this.hash(),
                r = e.encodingLength - 1,
                n = t.slice(0, e.encodingLength); return n[0] &= 248, n[r] &= 127, n[r] |= 64, n })), a(s, "priv", (function() { return this.eddsa.decodeInt(this.privBytes()) })), a(s, "hash", (function() { return this.eddsa.hash().update(this.secret()).digest() })), a(s, "messagePrefix", (function() { return this.hash().slice(this.eddsa.encodingLength) })), s.prototype.sign = function(e) { return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this) }, s.prototype.verify = function(e, t) { return this.eddsa.verify(e, t, this) }, s.prototype.getSecret = function(e) { return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), e) }, s.prototype.getPublic = function(e) { return n.encode(this.pubBytes(), e) }, e.exports = s }, function(e, t, r) { "use strict"; var n = r(48),
            i = r(802),
            o = i.assert,
            a = i.cachedProperty,
            s = i.parseBytes;

        function u(e, t) { this.eddsa = e, "object" !== typeof t && (t = s(t)), Array.isArray(t) && (t = { R: t.slice(0, e.encodingLength), S: t.slice(e.encodingLength) }), o(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof n && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded }
        a(u, "S", (function() { return this.eddsa.decodeInt(this.Sencoded()) })), a(u, "R", (function() { return this.eddsa.decodePoint(this.Rencoded()) })), a(u, "Rencoded", (function() { return this.eddsa.encodePoint(this.R()) })), a(u, "Sencoded", (function() { return this.eddsa.encodeInt(this.S()) })), u.prototype.toBytes = function() { return this.Rencoded().concat(this.Sencoded()) }, u.prototype.toHex = function() { return i.encode(this.toBytes(), "hex").toUpperCase() }, e.exports = u }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = r(1384);
        t.getRandomBytes = function(e) { return new Promise((function(t, r) { n(e, (function(e, n) { e ? r(e) : t(n) })) })) }, t.getRandomBytesSync = function(e) { return n(e) } }, function(e, t, r) { "use strict";
        (function(t, n) { var i = 65536,
                o = 4294967295; var a = r(799).Buffer,
                s = t.crypto || t.msCrypto;
            s && s.getRandomValues ? e.exports = function(e, t) { if (e > o) throw new RangeError("requested too many random bytes"); var r = a.allocUnsafe(e); if (e > 0)
                    if (e > i)
                        for (var u = 0; u < e; u += i) s.getRandomValues(r.slice(u, u + i));
                    else s.getRandomValues(r);
                if ("function" === typeof t) return n.nextTick((function() { t(null, r) })); return r } : e.exports = function() { throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11") } }).call(this, r(147), r(246)) }, function(e, t, r) { "use strict";
        (function(e) { var n = r(48),
                i = new(0, r(930).ec)("secp256k1"),
                o = i.curve;
            t.privateKeyExport = function(e, t) { var r = new n(e); if (r.ucmp(o.n) >= 0) throw new Error("couldn't export to DER format"); var s = i.g.mul(r); return a(s.getX(), s.getY(), t) }, t.privateKeyModInverse = function(t) { var r = new n(t); if (r.ucmp(o.n) >= 0 || r.isZero()) throw new Error("private key range is invalid"); return r.invm(o.n).toArrayLike(e, "be", 32) }, t.signatureImport = function(t) { var r = new n(t.r);
                r.ucmp(o.n) >= 0 && (r = new n(0)); var i = new n(t.s); return i.ucmp(o.n) >= 0 && (i = new n(0)), e.concat([r.toArrayLike(e, "be", 32), i.toArrayLike(e, "be", 32)]) }, t.ecdhUnsafe = function(e, t, r) { var s = i.keyFromPublic(e),
                    u = new n(t); if (u.ucmp(o.n) >= 0 || u.isZero()) throw new Error("scalar was invalid (zero or overflow)"); var c = s.pub.mul(u); return a(c.getX(), c.getY(), r) }; var a = function(t, r, n) { var i = void 0; return n ? ((i = e.alloc(33))[0] = r.isOdd() ? 3 : 2, t.toArrayLike(e, "be", 32).copy(i, 1)) : ((i = e.alloc(65))[0] = 4, t.toArrayLike(e, "be", 32).copy(i, 1), r.toArrayLike(e, "be", 32).copy(i, 33)), i } }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict";
        (function(e) { var r = e.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                n = e.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            t.privateKeyExport = function(t, i, o) { var a = e.from(o ? r : n); return t.copy(a, o ? 8 : 9), i.copy(a, o ? 181 : 214), a }, t.privateKeyImport = function(e) { var t = e.length,
                    r = 0; if (t < r + 1 || 48 !== e[r]) return null; if (t < (r += 1) + 1 || !(128 & e[r])) return null; var n = 127 & e[r]; if (n < 1 || n > 2) return null; if (t < (r += 1) + n) return null; var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0); return t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1] ? null : e.slice(r + 2, r + 2 + e[r + 1]) }, t.signatureImportLax = function(t) { var r = e.alloc(32, 0),
                    n = e.alloc(32, 0),
                    i = t.length,
                    o = 0; if (48 !== t[o++]) return null; var a = t[o++]; if (128 & a && (o += a - 128) > i) return null; if (2 !== t[o++]) return null; var s = t[o++]; if (128 & s) { if (o + (a = s - 128) > i) return null; for (; a > 0 && 0 === t[o]; o += 1, a -= 1); for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o] } if (s > i - o) return null; var u = o; if (o += s, 2 !== t[o++]) return null; var c = t[o++]; if (128 & c) { if (o + (a = c - 128) > i) return null; for (; a > 0 && 0 === t[o]; o += 1, a -= 1); for (c = 0; a > 0; o += 1, a -= 1) c = (c << 8) + t[o] } if (c > i - o) return null; var f = o; for (o += c; s > 0 && 0 === t[u]; s -= 1, u += 1); if (s > 32) return null; var d = t.slice(u, u + s); for (d.copy(r, 32 - d.length); c > 0 && 0 === t[f]; c -= 1, f += 1); if (c > 32) return null; var l = t.slice(f, f + c); return l.copy(n, 32 - l.length), { r: r, s: n } } }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict"; var n = r(490),
            i = r(1057),
            o = r(799).Buffer,
            a = new Array(16);

        function s() { i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878 }

        function u(e, t) { return e << t | e >>> 32 - t }

        function c(e, t, r, n, i, o, a) { return u(e + (t & r | ~t & n) + i + o | 0, a) + t | 0 }

        function f(e, t, r, n, i, o, a) { return u(e + (t & n | r & ~n) + i + o | 0, a) + t | 0 }

        function d(e, t, r, n, i, o, a) { return u(e + (t ^ r ^ n) + i + o | 0, a) + t | 0 }

        function l(e, t, r, n, i, o, a) { return u(e + (r ^ (t | ~n)) + i + o | 0, a) + t | 0 }
        n(s, i), s.prototype._update = function() { for (var e = a, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t); var r = this._a,
                n = this._b,
                i = this._c,
                o = this._d;
            r = c(r, n, i, o, e[0], 3614090360, 7), o = c(o, r, n, i, e[1], 3905402710, 12), i = c(i, o, r, n, e[2], 606105819, 17), n = c(n, i, o, r, e[3], 3250441966, 22), r = c(r, n, i, o, e[4], 4118548399, 7), o = c(o, r, n, i, e[5], 1200080426, 12), i = c(i, o, r, n, e[6], 2821735955, 17), n = c(n, i, o, r, e[7], 4249261313, 22), r = c(r, n, i, o, e[8], 1770035416, 7), o = c(o, r, n, i, e[9], 2336552879, 12), i = c(i, o, r, n, e[10], 4294925233, 17), n = c(n, i, o, r, e[11], 2304563134, 22), r = c(r, n, i, o, e[12], 1804603682, 7), o = c(o, r, n, i, e[13], 4254626195, 12), i = c(i, o, r, n, e[14], 2792965006, 17), r = f(r, n = c(n, i, o, r, e[15], 1236535329, 22), i, o, e[1], 4129170786, 5), o = f(o, r, n, i, e[6], 3225465664, 9), i = f(i, o, r, n, e[11], 643717713, 14), n = f(n, i, o, r, e[0], 3921069994, 20), r = f(r, n, i, o, e[5], 3593408605, 5), o = f(o, r, n, i, e[10], 38016083, 9), i = f(i, o, r, n, e[15], 3634488961, 14), n = f(n, i, o, r, e[4], 3889429448, 20), r = f(r, n, i, o, e[9], 568446438, 5), o = f(o, r, n, i, e[14], 3275163606, 9), i = f(i, o, r, n, e[3], 4107603335, 14), n = f(n, i, o, r, e[8], 1163531501, 20), r = f(r, n, i, o, e[13], 2850285829, 5), o = f(o, r, n, i, e[2], 4243563512, 9), i = f(i, o, r, n, e[7], 1735328473, 14), r = d(r, n = f(n, i, o, r, e[12], 2368359562, 20), i, o, e[5], 4294588738, 4), o = d(o, r, n, i, e[8], 2272392833, 11), i = d(i, o, r, n, e[11], 1839030562, 16), n = d(n, i, o, r, e[14], 4259657740, 23), r = d(r, n, i, o, e[1], 2763975236, 4), o = d(o, r, n, i, e[4], 1272893353, 11), i = d(i, o, r, n, e[7], 4139469664, 16), n = d(n, i, o, r, e[10], 3200236656, 23), r = d(r, n, i, o, e[13], 681279174, 4), o = d(o, r, n, i, e[0], 3936430074, 11), i = d(i, o, r, n, e[3], 3572445317, 16), n = d(n, i, o, r, e[6], 76029189, 23), r = d(r, n, i, o, e[9], 3654602809, 4), o = d(o, r, n, i, e[12], 3873151461, 11), i = d(i, o, r, n, e[15], 530742520, 16), r = l(r, n = d(n, i, o, r, e[2], 3299628645, 23), i, o, e[0], 4096336452, 6), o = l(o, r, n, i, e[7], 1126891415, 10), i = l(i, o, r, n, e[14], 2878612391, 15), n = l(n, i, o, r, e[5], 4237533241, 21), r = l(r, n, i, o, e[12], 1700485571, 6), o = l(o, r, n, i, e[3], 2399980690, 10), i = l(i, o, r, n, e[10], 4293915773, 15), n = l(n, i, o, r, e[1], 2240044497, 21), r = l(r, n, i, o, e[8], 1873313359, 6), o = l(o, r, n, i, e[15], 4264355552, 10), i = l(i, o, r, n, e[6], 2734768916, 15), n = l(n, i, o, r, e[13], 1309151649, 21), r = l(r, n, i, o, e[4], 4149444226, 6), o = l(o, r, n, i, e[11], 3174756917, 10), i = l(i, o, r, n, e[2], 718787259, 15), n = l(n, i, o, r, e[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + o | 0 }, s.prototype._digest = function() { this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update(); var e = o.allocUnsafe(16); return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e }, e.exports = s }, function(e, t, r) {
        (t = e.exports = r(1058)).Stream = t, t.Readable = t, t.Writable = r(1062), t.Duplex = r(837), t.Transform = r(1063), t.PassThrough = r(1394), t.finished = r(933), t.pipeline = r(1395) }, , function(e, t, r) { "use strict";

        function n(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r }

        function i(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

        function o(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } var a = r(785).Buffer,
            s = r(1391).inspect,
            u = s && s.custom || "inspect";
        e.exports = function() {
            function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.head = null, this.tail = null, this.length = 0 } var t, r, c; return t = e, (r = [{ key: "push", value: function(e) { var t = { data: e, next: null };
                    this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length } }, { key: "unshift", value: function(e) { var t = { data: e, next: this.head };
                    0 === this.length && (this.tail = t), this.head = t, ++this.length } }, { key: "shift", value: function() { if (0 !== this.length) { var e = this.head.data; return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e } } }, { key: "clear", value: function() { this.head = this.tail = null, this.length = 0 } }, { key: "join", value: function(e) { if (0 === this.length) return ""; for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data; return r } }, { key: "concat", value: function(e) { if (0 === this.length) return a.alloc(0); for (var t, r, n, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0; o;) t = o.data, r = i, n = s, a.prototype.copy.call(t, r, n), s += o.data.length, o = o.next; return i } }, { key: "consume", value: function(e, t) { var r; return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r } }, { key: "first", value: function() { return this.head.data } }, { key: "_getString", value: function(e) { var t = this.head,
                        r = 1,
                        n = t.data; for (e -= n.length; t = t.next;) { var i = t.data,
                            o = e > i.length ? i.length : e; if (o === i.length ? n += i : n += i.slice(0, e), 0 === (e -= o)) { o === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o)); break }++r } return this.length -= r, n } }, { key: "_getBuffer", value: function(e) { var t = a.allocUnsafe(e),
                        r = this.head,
                        n = 1; for (r.data.copy(t), e -= r.data.length; r = r.next;) { var i = r.data,
                            o = e > i.length ? i.length : e; if (i.copy(t, t.length - e, 0, o), 0 === (e -= o)) { o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o)); break }++n } return this.length -= n, t } }, { key: u, value: function(e, t) { return s(this, function(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? n(Object(r), !0).forEach((function(t) { i(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e }({}, t, { depth: 0, customInspect: !1 })) } }]) && o(t.prototype, r), c && o(t, c), e }() }, , function(e, t, r) { "use strict";
        (function(t) { var n;

            function i(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } var o = r(933),
                a = Symbol("lastResolve"),
                s = Symbol("lastReject"),
                u = Symbol("error"),
                c = Symbol("ended"),
                f = Symbol("lastPromise"),
                d = Symbol("handlePromise"),
                l = Symbol("stream");

            function h(e, t) { return { value: e, done: t } }

            function p(e) { var t = e[a]; if (null !== t) { var r = e[l].read();
                    null !== r && (e[f] = null, e[a] = null, e[s] = null, t(h(r, !1))) } }

            function b(e) { t.nextTick(p, e) } var v = Object.getPrototypeOf((function() {})),
                g = Object.setPrototypeOf((i(n = {get stream() { return this[l] }, next: function() { var e = this,
                            r = this[u]; if (null !== r) return Promise.reject(r); if (this[c]) return Promise.resolve(h(void 0, !0)); if (this[l].destroyed) return new Promise((function(r, n) { t.nextTick((function() { e[u] ? n(e[u]) : r(h(void 0, !0)) })) })); var n, i = this[f]; if (i) n = new Promise(function(e, t) { return function(r, n) { e.then((function() { t[c] ? r(h(void 0, !0)) : t[d](r, n) }), n) } }(i, this));
                        else { var o = this[l].read(); if (null !== o) return Promise.resolve(h(o, !1));
                            n = new Promise(this[d]) } return this[f] = n, n } }, Symbol.asyncIterator, (function() { return this })), i(n, "return", (function() { var e = this; return new Promise((function(t, r) { e[l].destroy(null, (function(e) { e ? r(e) : t(h(void 0, !0)) })) })) })), n), v);
            e.exports = function(e) { var t, r = Object.create(g, (i(t = {}, l, { value: e, writable: !0 }), i(t, a, { value: null, writable: !0 }), i(t, s, { value: null, writable: !0 }), i(t, u, { value: null, writable: !0 }), i(t, c, { value: e._readableState.endEmitted, writable: !0 }), i(t, d, { value: function(e, t) { var n = r[l].read();
                        n ? (r[f] = null, r[a] = null, r[s] = null, e(h(n, !1))) : (r[a] = e, r[s] = t) }, writable: !0 }), t)); return r[f] = null, o(e, (function(e) { if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) { var t = r[s]; return null !== t && (r[f] = null, r[a] = null, r[s] = null, t(e)), void(r[u] = e) } var n = r[a];
                    null !== n && (r[f] = null, r[a] = null, r[s] = null, n(h(void 0, !0))), r[c] = !0 })), e.on("readable", b.bind(null, r)), r } }).call(this, r(246)) }, function(e, t) { e.exports = function() { throw new Error("Readable.from is not available in the browser") } }, function(e, t, r) { "use strict";
        e.exports = i; var n = r(1063);

        function i(e) { if (!(this instanceof i)) return new i(e);
            n.call(this, e) }
        r(490)(i, n), i.prototype._transform = function(e, t, r) { r(null, e) } }, function(e, t, r) { "use strict"; var n; var i = r(836).codes,
            o = i.ERR_MISSING_ARGS,
            a = i.ERR_STREAM_DESTROYED;

        function s(e) { if (e) throw e }

        function u(e, t, i, o) { o = function(e) { var t = !1; return function() { t || (t = !0, e.apply(void 0, arguments)) } }(o); var s = !1;
            e.on("close", (function() { s = !0 })), void 0 === n && (n = r(933)), n(e, { readable: t, writable: i }, (function(e) { if (e) return o(e);
                s = !0, o() })); var u = !1; return function(t) { if (!s && !u) return u = !0,
                    function(e) { return e.setHeader && "function" === typeof e.abort }(e) ? e.abort() : "function" === typeof e.destroy ? e.destroy() : void o(t || new a("pipe")) } }

        function c(e) { e() }

        function f(e, t) { return e.pipe(t) }

        function d(e) { return e.length ? "function" !== typeof e[e.length - 1] ? s : e.pop() : s }
        e.exports = function() { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]; var n, i = d(t); if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new o("streams"); var a = t.map((function(e, r) { var o = r < t.length - 1; return u(e, o, r > 0, (function(e) { n || (n = e), e && a.forEach(c), o || (a.forEach(c), i(n)) })) })); return t.reduce(f) } }, function(e, t, r) { "use strict"; var n = r(785).Buffer,
            i = r(490),
            o = r(1057),
            a = new Array(16),
            s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            u = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            c = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            f = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
            d = [0, 1518500249, 1859775393, 2400959708, 2840853838],
            l = [1352829926, 1548603684, 1836072691, 2053994217, 0];

        function h() { o.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520 }

        function p(e, t) { return e << t | e >>> 32 - t }

        function b(e, t, r, n, i, o, a, s) { return p(e + (t ^ r ^ n) + o + a | 0, s) + i | 0 }

        function v(e, t, r, n, i, o, a, s) { return p(e + (t & r | ~t & n) + o + a | 0, s) + i | 0 }

        function g(e, t, r, n, i, o, a, s) { return p(e + ((t | ~r) ^ n) + o + a | 0, s) + i | 0 }

        function y(e, t, r, n, i, o, a, s) { return p(e + (t & n | r & ~n) + o + a | 0, s) + i | 0 }

        function m(e, t, r, n, i, o, a, s) { return p(e + (t ^ (r | ~n)) + o + a | 0, s) + i | 0 }
        i(h, o), h.prototype._update = function() { for (var e = a, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t); for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, h = 0 | this._e, _ = 0 | this._a, w = 0 | this._b, x = 0 | this._c, k = 0 | this._d, S = 0 | this._e, E = 0; E < 80; E += 1) { var M, A;
                E < 16 ? (M = b(r, n, i, o, h, e[s[E]], d[0], c[E]), A = m(_, w, x, k, S, e[u[E]], l[0], f[E])) : E < 32 ? (M = v(r, n, i, o, h, e[s[E]], d[1], c[E]), A = y(_, w, x, k, S, e[u[E]], l[1], f[E])) : E < 48 ? (M = g(r, n, i, o, h, e[s[E]], d[2], c[E]), A = g(_, w, x, k, S, e[u[E]], l[2], f[E])) : E < 64 ? (M = y(r, n, i, o, h, e[s[E]], d[3], c[E]), A = v(_, w, x, k, S, e[u[E]], l[3], f[E])) : (M = m(r, n, i, o, h, e[s[E]], d[4], c[E]), A = b(_, w, x, k, S, e[u[E]], l[4], f[E])), r = h, h = o, o = p(i, 10), i = n, n = M, _ = S, S = k, k = p(x, 10), x = w, w = A } var R = this._b + i + k | 0;
            this._b = this._c + o + S | 0, this._c = this._d + h + _ | 0, this._d = this._e + r + w | 0, this._e = this._a + n + x | 0, this._a = R }, h.prototype._digest = function() { this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update(); var e = n.alloc ? n.alloc(20) : new n(20); return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e }, e.exports = h }, function(e, t, r) {
        (t = e.exports = function(e) { e = e.toLowerCase(); var r = t[e]; if (!r) throw new Error(e + " is not supported (we accept pull requests)"); return new r }).sha = r(1398), t.sha1 = r(1399), t.sha224 = r(1400), t.sha256 = r(1064), t.sha384 = r(1401), t.sha512 = r(1065) }, function(e, t, r) { var n = r(490),
            i = r(838),
            o = r(799).Buffer,
            a = [1518500249, 1859775393, -1894007588, -899497514],
            s = new Array(80);

        function u() { this.init(), this._w = s, i.call(this, 64, 56) }

        function c(e) { return e << 30 | e >>> 2 }

        function f(e, t, r, n) { return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n }
        n(u, i), u.prototype.init = function() { return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this }, u.prototype._update = function(e) { for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, u = 0 | this._e, d = 0; d < 16; ++d) r[d] = e.readInt32BE(4 * d); for (; d < 80; ++d) r[d] = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16]; for (var l = 0; l < 80; ++l) { var h = ~~(l / 20),
                    p = 0 | ((t = n) << 5 | t >>> 27) + f(h, i, o, s) + u + r[l] + a[h];
                u = s, s = o, o = c(i), i = n, n = p }
            this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = u + this._e | 0 }, u.prototype._hash = function() { var e = o.allocUnsafe(20); return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e }, e.exports = u }, function(e, t, r) { var n = r(490),
            i = r(838),
            o = r(799).Buffer,
            a = [1518500249, 1859775393, -1894007588, -899497514],
            s = new Array(80);

        function u() { this.init(), this._w = s, i.call(this, 64, 56) }

        function c(e) { return e << 5 | e >>> 27 }

        function f(e) { return e << 30 | e >>> 2 }

        function d(e, t, r, n) { return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n }
        n(u, i), u.prototype.init = function() { return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this }, u.prototype._update = function(e) { for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, u = 0 | this._e, l = 0; l < 16; ++l) r[l] = e.readInt32BE(4 * l); for (; l < 80; ++l) r[l] = (t = r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16]) << 1 | t >>> 31; for (var h = 0; h < 80; ++h) { var p = ~~(h / 20),
                    b = c(n) + d(p, i, o, s) + u + r[h] + a[p] | 0;
                u = s, s = o, o = f(i), i = n, n = b }
            this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = u + this._e | 0 }, u.prototype._hash = function() { var e = o.allocUnsafe(20); return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e }, e.exports = u }, function(e, t, r) { var n = r(490),
            i = r(1064),
            o = r(838),
            a = r(799).Buffer,
            s = new Array(64);

        function u() { this.init(), this._w = s, o.call(this, 64, 56) }
        n(u, i), u.prototype.init = function() { return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this }, u.prototype._hash = function() { var e = a.allocUnsafe(28); return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e }, e.exports = u }, function(e, t, r) { var n = r(490),
            i = r(1065),
            o = r(838),
            a = r(799).Buffer,
            s = new Array(160);

        function u() { this.init(), this._w = s, o.call(this, 128, 112) }
        n(u, i), u.prototype.init = function() { return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this }, u.prototype._hash = function() { var e = a.allocUnsafe(48);

            function t(t, r, n) { e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4) } return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e }, e.exports = u }, function(e, t, r) { var n = r(799).Buffer,
            i = r(929).Transform,
            o = r(856).StringDecoder;

        function a(e) { i.call(this), this.hashMode = "string" === typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null }
        r(490)(a, i), a.prototype.update = function(e, t, r) { "string" === typeof e && (e = n.from(e, t)); var i = this._update(e); return this.hashMode ? this : (r && (i = this._toString(i, r)), i) }, a.prototype.setAutoPadding = function() {}, a.prototype.getAuthTag = function() { throw new Error("trying to get auth tag in unsupported state") }, a.prototype.setAuthTag = function() { throw new Error("trying to set auth tag in unsupported state") }, a.prototype.setAAD = function() { throw new Error("trying to set aad in unsupported state") }, a.prototype._transform = function(e, t, r) { var n; try { this.hashMode ? this._update(e) : this.push(this._update(e)) } catch (i) { n = i } finally { r(n) } }, a.prototype._flush = function(e) { var t; try { this.push(this.__final()) } catch (r) { t = r }
            e(t) }, a.prototype._finalOrDigest = function(e) { var t = this.__final() || n.alloc(0); return e && (t = this._toString(t, e, !0)), t }, a.prototype._toString = function(e, t, r) { if (this._decoder || (this._decoder = new o(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings"); var n = this._decoder.write(e); return r && (n += this._decoder.end()), n }, e.exports = a }, function(e, t, r) { var n = r(1066);
        e.exports = function(e) { return "string" !== typeof e ? e : n(e) ? e.slice(2) : e } }, function(e, t, r) { var n = r(3),
            i = r(798),
            o = r(247),
            a = r(249),
            s = r(794),
            u = r(795),
            c = r(1067),
            f = r(1405),
            d = function(e) { "use strict";
                s(r, e); var t = u(r);

                function r() { var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if (o(this, r), !n.provider) throw new Error("PollingBlockTracker - no provider specified."); var i = n.pollingInterval || 2e4,
                        a = n.retryTimeout || i / 10,
                        s = void 0 === n.keepEventLoopActive || n.keepEventLoopActive,
                        u = n.setSkipCacheFlag || !1; return (e = t.call(this, Object.assign({ blockResetDuration: i }, n)))._provider = n.provider, e._pollingInterval = i, e._retryTimeout = a, e._keepEventLoopActive = s, e._setSkipCacheFlag = u, e } return a(r, [{ key: "checkForLatestBlock", value: function() { var e = i(n.mark((function e() { return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._updateLatestBlock();
                                    case 2:
                                        return e.next = 4, this.getLatestBlock();
                                    case 4:
                                        return e.abrupt("return", e.sent);
                                    case 5:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function() { return e.apply(this, arguments) } }() }, { key: "_start", value: function() { var e = this;
                        this._performSync().catch((function(t) { return e.emit("error", t) })) } }, { key: "_performSync", value: function() { var e = i(n.mark((function e() { var t; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this._isRunning) { e.next = 16; break } return e.prev = 1, e.next = 4, this._updateLatestBlock();
                                    case 4:
                                        return e.next = 6, l(this._pollingInterval, !this._keepEventLoopActive);
                                    case 6:
                                        e.next = 14; break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), t = new Error("PollingBlockTracker - encountered an error while attempting to update latest block:\n".concat(e.t0.stack)); try { this.emit("error", t) } catch (r) { console.error(t) } return e.next = 14, l(this._retryTimeout, !this._keepEventLoopActive);
                                    case 14:
                                        e.next = 0; break;
                                    case 16:
                                    case "end":
                                        return e.stop() } }), e, this, [
                                [1, 8]
                            ]) }))); return function() { return e.apply(this, arguments) } }() }, { key: "_updateLatestBlock", value: function() { var e = i(n.mark((function e() { var t; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this._fetchLatestBlock();
                                    case 2:
                                        t = e.sent, this._newPotentialLatest(t);
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function() { return e.apply(this, arguments) } }() }, { key: "_fetchLatestBlock", value: function() { var e = i(n.mark((function e() { var t, r, i = this; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = { jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [] }, this._setSkipCacheFlag && (t.skipCache = !0), e.next = 4, c((function(e) { return i._provider.sendAsync(t, e) }))();
                                    case 4:
                                        if (!(r = e.sent).error) { e.next = 7; break } throw new Error("PollingBlockTracker - encountered error fetching block:\n".concat(r.error));
                                    case 7:
                                        return e.abrupt("return", r.result);
                                    case 8:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function() { return e.apply(this, arguments) } }() }]), r }(f);

        function l(e, t) { return new Promise((function(r) { var n = setTimeout(r, e);
                n.unref && t && n.unref() })) }
        e.exports = d }, function(e, t, r) { var n = r(3),
            i = r(798),
            o = r(247),
            a = r(249),
            s = r(1050),
            u = r(1068),
            c = r(858),
            f = r(794),
            d = r(795),
            l = (r(1069), r(1067), r(1408)),
            h = function(e, t) { return e + t },
            p = ["sync", "latest"],
            b = function(e) { "use strict";
                f(r, e); var t = d(r);

                function r() { var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return o(this, r), (e = t.call(this))._blockResetDuration = n.blockResetDuration || 2e4, e._blockResetTimeout, e._currentBlock = null, e._isRunning = !1, e._onNewListener = e._onNewListener.bind(s(e)), e._onRemoveListener = e._onRemoveListener.bind(s(e)), e._resetCurrentBlock = e._resetCurrentBlock.bind(s(e)), e._setupInternalEvents(), e } return a(r, [{ key: "isRunning", value: function() { return this._isRunning } }, { key: "getCurrentBlock", value: function() { return this._currentBlock } }, { key: "getLatestBlock", value: function() { var e = i(n.mark((function e() { var t, r = this; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this._currentBlock) { e.next = 2; break } return e.abrupt("return", this._currentBlock);
                                    case 2:
                                        return e.next = 4, new Promise((function(e) { return r.once("latest", e) }));
                                    case 4:
                                        return t = e.sent, e.abrupt("return", t);
                                    case 6:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function() { return e.apply(this, arguments) } }() }, { key: "removeAllListeners", value: function(e) { e ? u(c(r.prototype), "removeAllListeners", this).call(this, e) : u(c(r.prototype), "removeAllListeners", this).call(this), this._setupInternalEvents(), this._onRemoveListener() } }, { key: "_start", value: function() {} }, { key: "_end", value: function() {} }, { key: "_setupInternalEvents", value: function() { this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener) } }, { key: "_onNewListener", value: function(e, t) { p.includes(e) && this._maybeStart() } }, { key: "_onRemoveListener", value: function(e, t) { this._getBlockTrackerEventCount() > 0 || this._maybeEnd() } }, { key: "_maybeStart", value: function() { this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), this._start()) } }, { key: "_maybeEnd", value: function() { this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), this._end()) } }, { key: "_getBlockTrackerEventCount", value: function() { var e = this; return p.map((function(t) { return e.listenerCount(t) })).reduce(h) } }, { key: "_newPotentialLatest", value: function(e) { var t = this._currentBlock;
                        t && v(e) <= v(t) || this._setCurrentBlock(e) } }, { key: "_setCurrentBlock", value: function(e) { var t = this._currentBlock;
                        this._currentBlock = e, this.emit("latest", e), this.emit("sync", { oldBlock: t, newBlock: e }) } }, { key: "_setupBlockResetTimeout", value: function() { this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref() } }, { key: "_cancelBlockResetTimeout", value: function() { clearTimeout(this._blockResetTimeout) } }, { key: "_resetCurrentBlock", value: function() { this._currentBlock = null } }]), r }(l);

        function v(e) { return Number.parseInt(e, 16) }
        e.exports = b }, function(e, t, r) { var n = r(858);
        e.exports = function(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = n(e));); return e } }, function(e, t) { e.exports = function(e) { var t = (e = e || {}).max || Number.MAX_SAFE_INTEGER,
                r = "undefined" !== typeof e.start ? e.start : Math.floor(Math.random() * t); return function() { return r %= t, r++ } } }, function(e, t, r) { var n = r(373),
            i = r(372),
            o = "object" === typeof Reflect ? Reflect : null,
            a = o && "function" === typeof o.apply ? o.apply : function(e, t, r) { return Function.prototype.apply.call(e, t, r) };

        function s() { i.call(this) }

        function u(e, t, r) { try { a(e, t, r) } catch (n) { setTimeout((function() { throw n })) } }

        function c(e, t) { for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n]; return r }
        e.exports = s, n.inherits(s, i), s.prototype.emit = function(e) { for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]); var n = "error" === e,
                i = this._events; if (void 0 !== i) n = n && void 0 === i.error;
            else if (!n) return !1; if (n) { var o; if (t.length > 0 && (o = t[0]), o instanceof Error) throw o; var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : "")); throw a.context = o, a } var s = i[e]; if (void 0 === s) return !1; if ("function" === typeof s) u(s, this, t);
            else { var f = s.length,
                    d = c(s, f); for (r = 0; r < f; ++r) u(d[r], this, t) } return !0 } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = o(r(1410)),
            i = o(r(1417));

        function o(e) { return e && e.__esModule ? e : { default: e } }
        t.default = (0, n.default)(i.default), e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { return function(t, r, o) { return e(n.default, t, (0, i.default)(r), o) } }; var n = o(r(1070)),
            i = o(r(827));

        function o(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, r, o) {
            (0, n.default)(t)(e, (0, i.default)(r), o) }; var n = o(r(1072)),
            i = o(r(827));

        function o(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { if ((0, n.default)(e)) return function(e) { var t = -1,
                    r = e.length; return function() { return ++t < r ? { value: e[t], key: t } : null } }(e); var t = (0, i.default)(e); return t ? function(e) { var t = -1; return function() { var r = e.next(); return r.done ? null : (t++, { value: r.value, key: t }) } }(t) : function(e) { var t = (0, o.default)(e),
                    r = -1,
                    n = t.length; return function() { var i = t[++r]; return r < n ? { value: e[i], key: i } : null } }(e) }; var n = a(r(190)),
            i = a(r(1413)),
            o = a(r(253));

        function a(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { return n && e[n] && e[n]() }; var n = "function" === typeof Symbol && Symbol.iterator;
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { return (0, i.default)((function(t, r) { var i; try { i = e.apply(this, t) } catch (o) { return r(o) }(0, n.default)(i) && "function" === typeof i.then ? i.then((function(e) { s(r, null, e) }), (function(e) { s(r, e.message ? e : new Error(e)) })) : r(null, i) })) }; var n = a(r(131)),
            i = a(r(1415)),
            o = a(r(1416));

        function a(e) { return e && e.__esModule ? e : { default: e } }

        function s(e, t, r) { try { e(t, r) } catch (n) {
                (0, o.default)(u, n) } }

        function u(e) { throw e }
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { return function() { var t = (0, o.default)(arguments),
                    r = t.pop();
                e.call(this, t, r) } }; var n, i = r(881),
            o = (n = i) && n.__esModule ? n : { default: n };
        e.exports = t.default }, function(e, t, r) { "use strict";
        (function(e, n) { Object.defineProperty(t, "__esModule", { value: !0 }), t.hasNextTick = t.hasSetImmediate = void 0, t.fallback = f, t.wrap = d; var i, o = r(881),
                a = (i = o) && i.__esModule ? i : { default: i }; var s, u = t.hasSetImmediate = "function" === typeof e && e,
                c = t.hasNextTick = "object" === typeof n && "function" === typeof n.nextTick;

            function f(e) { setTimeout(e, 0) }

            function d(e) { return function(t) { var r = (0, a.default)(arguments, 1);
                    e((function() { t.apply(null, r) })) } }
            s = u ? e : c ? n.nextTick : f, t.default = d(s) }).call(this, r(492).setImmediate, r(246)) }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, r, o) { o = o || n.default, t = t || []; var a = [],
                s = 0,
                u = (0, i.default)(r);
            e(t, (function(e, t, r) { var n = s++;
                u(e, (function(e, t) { a[n] = t, r(e) })) }), (function(e) { o(e, a) })) }; var n = o(r(316)),
            i = o(r(827));

        function o(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = o(r(1419)),
            i = o(r(1073));

        function o(e) { return e && e.__esModule ? e : { default: e } }
        t.default = (0, i.default)(n.default, 1), e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, r, a) {
            (0, n.default)(t)(e, (0, i.default)((0, o.default)(r)), a) }; var n = a(r(1072)),
            i = a(r(1420)),
            o = a(r(827));

        function a(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) { return function(t, r, n) { return e(t, n) } }, e.exports = t.default }, function(e, t, r) { var n = r(372).EventEmitter,
            i = r(373).inherits;

        function o() { n.call(this), this.isLocked = !0 }
        e.exports = o, i(o, n), o.prototype.go = function() { this.isLocked = !1, this.emit("unlock") }, o.prototype.stop = function() { this.isLocked = !0, this.emit("lock") }, o.prototype.await = function(e) { this.isLocked ? this.once("unlock", e) : setTimeout(e) } }, function(e, t, r) { t.parse = r(1423), t.stringify = r(1424) }, function(e, t) { var r, n, i, o, a = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t" },
            s = function(e) { throw { name: "SyntaxError", message: e, at: r, text: i } },
            u = function(e) { return e && e !== n && s("Expected '" + e + "' instead of '" + n + "'"), n = i.charAt(r), r += 1, n },
            c = function() { var e, t = ""; for ("-" === n && (t = "-", u("-")); n >= "0" && n <= "9";) t += n, u(); if ("." === n)
                    for (t += "."; u() && n >= "0" && n <= "9";) t += n; if ("e" === n || "E" === n)
                    for (t += n, u(), "-" !== n && "+" !== n || (t += n, u()); n >= "0" && n <= "9";) t += n, u(); if (e = +t, isFinite(e)) return e;
                s("Bad number") },
            f = function() { var e, t, r, i = ""; if ('"' === n)
                    for (; u();) { if ('"' === n) return u(), i; if ("\\" === n)
                            if (u(), "u" === n) { for (r = 0, t = 0; t < 4 && (e = parseInt(u(), 16), isFinite(e)); t += 1) r = 16 * r + e;
                                i += String.fromCharCode(r) } else { if ("string" !== typeof a[n]) break;
                                i += a[n] }
                        else i += n }
                s("Bad string") },
            d = function() { for (; n && n <= " ";) u() },
            l = function() { var e = []; if ("[" === n) { if (u("["), d(), "]" === n) return u("]"), e; for (; n;) { if (e.push(o()), d(), "]" === n) return u("]"), e;
                        u(","), d() } }
                s("Bad array") },
            h = function() { var e, t = {}; if ("{" === n) { if (u("{"), d(), "}" === n) return u("}"), t; for (; n;) { if (e = f(), d(), u(":"), Object.hasOwnProperty.call(t, e) && s('Duplicate key "' + e + '"'), t[e] = o(), d(), "}" === n) return u("}"), t;
                        u(","), d() } }
                s("Bad object") };
        o = function() { switch (d(), n) {
                case "{":
                    return h();
                case "[":
                    return l();
                case '"':
                    return f();
                case "-":
                    return c();
                default:
                    return n >= "0" && n <= "9" ? c() : function() { switch (n) {
                            case "t":
                                return u("t"), u("r"), u("u"), u("e"), !0;
                            case "f":
                                return u("f"), u("a"), u("l"), u("s"), u("e"), !1;
                            case "n":
                                return u("n"), u("u"), u("l"), u("l"), null }
                        s("Unexpected '" + n + "'") }() } }, e.exports = function(e, t) { var a; return i = e, r = 0, n = " ", a = o(), d(), n && s("Syntax error"), "function" === typeof t ? function e(r, n) { var i, o, a = r[n]; if (a && "object" === typeof a)
                    for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (void 0 !== (o = e(a, i)) ? a[i] = o : delete a[i]); return t.call(r, n, a) }({ "": a }, "") : a } }, function(e, t) { var r, n, i, o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            a = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };

        function s(e) { return o.lastIndex = 0, o.test(e) ? '"' + e.replace(o, (function(e) { var t = a[e]; return "string" === typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4) })) + '"' : '"' + e + '"' }

        function u(e, t) { var o, a, c, f, d, l = r,
                h = t[e]; switch (h && "object" === typeof h && "function" === typeof h.toJSON && (h = h.toJSON(e)), "function" === typeof i && (h = i.call(t, e, h)), typeof h) {
                case "string":
                    return s(h);
                case "number":
                    return isFinite(h) ? String(h) : "null";
                case "boolean":
                case "null":
                    return String(h);
                case "object":
                    if (!h) return "null"; if (r += n, d = [], "[object Array]" === Object.prototype.toString.apply(h)) { for (f = h.length, o = 0; o < f; o += 1) d[o] = u(o, h) || "null"; return c = 0 === d.length ? "[]" : r ? "[\n" + r + d.join(",\n" + r) + "\n" + l + "]" : "[" + d.join(",") + "]", r = l, c } if (i && "object" === typeof i)
                        for (f = i.length, o = 0; o < f; o += 1) "string" === typeof(a = i[o]) && (c = u(a, h)) && d.push(s(a) + (r ? ": " : ":") + c);
                    else
                        for (a in h) Object.prototype.hasOwnProperty.call(h, a) && (c = u(a, h)) && d.push(s(a) + (r ? ": " : ":") + c); return c = 0 === d.length ? "{}" : r ? "{\n" + r + d.join(",\n" + r) + "\n" + l + "}" : "{" + d.join(",") + "}", r = l, c } }
        e.exports = function(e, t, o) { var a; if (r = "", n = "", "number" === typeof o)
                for (a = 0; a < o; a += 1) n += " ";
            else "string" === typeof o && (n = o); if (i = t, t && "function" !== typeof t && ("object" !== typeof t || "number" !== typeof t.length)) throw new Error("JSON.stringify"); return u("", { "": e }) } }, function(e, t) { e.exports = function() { return Math.floor(Number.MAX_SAFE_INTEGER * Math.random()) } }, function(e, t, r) { var n = r(247),
            i = r(794),
            o = r(795),
            a = r(937),
            s = r(1427),
            u = function(e) { "use strict";
                i(r, e); var t = o(r);

                function r(e) { return n(this, r), t.call(this, (function(t) { var r = t.blockTracker; return s(Object.assign({ blockTracker: r }, e)) })) } return r }(a);
        e.exports = u }, function(e, t, r) { var n = r(247),
            i = r(249),
            o = r(3),
            a = r(798),
            s = r(1428),
            u = r(1429),
            c = [void 0, null, "<nil>"];
        e.exports = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.blockTracker; if (!t) throw new Error("createBlockCacheMiddleware - No BlockTracker specified"); var r = new f,
                n = { perma: r, block: r, fork: r }; return u(function() { var e = a(o.mark((function e(i, a, u) { var c, f, d, l, h, p; return o.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!i.skipCache) { e.next = 2; break } return e.abrupt("return", u());
                            case 2:
                                if (c = s.cacheTypeForPayload(i), f = n[c]) { e.next = 6; break } return e.abrupt("return", u());
                            case 6:
                                if (f.canCacheRequest(i)) { e.next = 8; break } return e.abrupt("return", u());
                            case 8:
                                if ((d = s.blockTagForPayload(i)) || (d = "latest"), "earliest" !== d) { e.next = 14; break }
                                l = "0x00", e.next = 23; break;
                            case 14:
                                if ("latest" !== d) { e.next = 22; break } return e.next = 17, t.getLatestBlock();
                            case 17:
                                h = e.sent, r.clearBefore(h), l = h, e.next = 23; break;
                            case 22:
                                l = d;
                            case 23:
                                return e.next = 25, f.get(i, l);
                            case 25:
                                if (void 0 !== (p = e.sent)) { e.next = 33; break } return e.next = 29, u();
                            case 29:
                                return e.next = 31, f.set(i, l, a.result);
                            case 31:
                                e.next = 34; break;
                            case 33:
                                a.result = p;
                            case 34:
                            case "end":
                                return e.stop() } }), e) }))); return function(t, r, n) { return e.apply(this, arguments) } }()) }; var f = function() { "use strict";

            function e() { n(this, e), this.cache = {} } return i(e, [{ key: "getBlockCacheForPayload", value: function(e, t) { var r = Number.parseInt(t, 16),
                        n = this.cache[r]; if (!n) { var i = {};
                        this.cache[r] = i, n = i } return n } }, { key: "get", value: function() { var e = a(o.mark((function e(t, r) { var n, i, a; return o.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = this.getBlockCacheForPayload(t, r)) { e.next = 3; break } return e.abrupt("return");
                                case 3:
                                    return i = s.cacheIdentifierForPayload(t, !0), a = n[i], e.abrupt("return", a);
                                case 6:
                                case "end":
                                    return e.stop() } }), e, this) }))); return function(t, r) { return e.apply(this, arguments) } }() }, { key: "set", value: function() { var e = a(o.mark((function e(t, r, n) { var i, a; return o.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.canCacheResult(t, n)) { e.next = 3; break } return e.abrupt("return");
                                case 3:
                                    i = this.getBlockCacheForPayload(t, r), a = s.cacheIdentifierForPayload(t, !0), i[a] = n;
                                case 6:
                                case "end":
                                    return e.stop() } }), e, this) }))); return function(t, r, n) { return e.apply(this, arguments) } }() }, { key: "canCacheRequest", value: function(e) { return !!s.canCache(e) && "pending" !== s.blockTagForPayload(e) } }, { key: "canCacheResult", value: function(e, t) { if (!c.includes(t)) return !!(!["eth_getTransactionByHash", "eth_getTransactionReceipt"].includes(e.method) || t && t.blockHash && "0x0000000000000000000000000000000000000000000000000000000000000000" !== t.blockHash) } }, { key: "clearBefore", value: function(e) { var t = this,
                        r = Number.parseInt(e, 16);
                    Object.keys(t.cache).map(Number).filter((function(e) { return e < r })).forEach((function(e) { return delete t.cache[e] })) } }]), e }() }, function(e, t, r) { var n = r(1075);

        function i(e) { return "never" !== s(e) }

        function o(e) { var t = a(e); return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t) }

        function a(e) { switch (e.method) {
                case "eth_getStorageAt":
                    return 2;
                case "eth_getBalance":
                case "eth_getCode":
                case "eth_getTransactionCount":
                case "eth_call":
                    return 1;
                case "eth_getBlockByNumber":
                    return 0;
                default:
                    return } }

        function s(e) { switch (e.method) {
                case "web3_clientVersion":
                case "web3_sha3":
                case "eth_protocolVersion":
                case "eth_getBlockTransactionCountByHash":
                case "eth_getUncleCountByBlockHash":
                case "eth_getCode":
                case "eth_getBlockByHash":
                case "eth_getTransactionByHash":
                case "eth_getTransactionByBlockHashAndIndex":
                case "eth_getTransactionReceipt":
                case "eth_getUncleByBlockHashAndIndex":
                case "eth_getCompilers":
                case "eth_compileLLL":
                case "eth_compileSolidity":
                case "eth_compileSerpent":
                case "shh_version":
                case "test_permaCache":
                    return "perma";
                case "eth_getBlockByNumber":
                case "eth_getBlockTransactionCountByNumber":
                case "eth_getUncleCountByBlockNumber":
                case "eth_getTransactionByBlockNumberAndIndex":
                case "eth_getUncleByBlockNumberAndIndex":
                case "test_forkCache":
                    return "fork";
                case "eth_gasPrice":
                case "eth_blockNumber":
                case "eth_getBalance":
                case "eth_getStorageAt":
                case "eth_getTransactionCount":
                case "eth_call":
                case "eth_estimateGas":
                case "eth_getFilterLogs":
                case "eth_getLogs":
                case "test_blockCache":
                    return "block";
                case "net_version":
                case "net_peerCount":
                case "net_listening":
                case "eth_syncing":
                case "eth_sign":
                case "eth_coinbase":
                case "eth_mining":
                case "eth_hashrate":
                case "eth_accounts":
                case "eth_sendTransaction":
                case "eth_sendRawTransaction":
                case "eth_newFilter":
                case "eth_newBlockFilter":
                case "eth_newPendingTransactionFilter":
                case "eth_uninstallFilter":
                case "eth_getFilterChanges":
                case "eth_getWork":
                case "eth_submitWork":
                case "eth_submitHashrate":
                case "db_putString":
                case "db_getString":
                case "db_putHex":
                case "db_getHex":
                case "shh_post":
                case "shh_newIdentity":
                case "shh_hasIdentity":
                case "shh_newGroup":
                case "shh_addToGroup":
                case "shh_newFilter":
                case "shh_uninstallFilter":
                case "shh_getFilterChanges":
                case "shh_getMessages":
                case "test_neverCache":
                    return "never" } }
        e.exports = { cacheIdentifierForPayload: function(e, t) { var r = t ? o(e) : e.params; return i(e) ? e.method + ":" + n(r) : null }, canCache: i, blockTagForPayload: function(e) { var t = a(e); if (t >= e.params.length) return null; return e.params[t] }, paramsWithoutBlockTag: o, blockTagParamIndex: a, cacheTypeForPayload: s } }, function(e, t, r) { var n = r(3),
            i = r(798);
        e.exports = function(e) { return function(t, r, o, a) { var s, u, c, f = new Promise((function(e) { s = e }));
                e(t, r, function() { var e = i(n.mark((function e() { return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return c = !0, o((function(e) { u = e, s() })), e.next = 4, f;
                                case 4:
                                case "end":
                                    return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }()).then(i(n.mark((function e() { return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!c) { e.next = 6; break } return e.next = 3, f;
                            case 3:
                                u(null), e.next = 7; break;
                            case 6:
                                a(null);
                            case 7:
                            case "end":
                                return e.stop() } }), e) })))).catch((function(e) { u ? u(e) : a(e) })) } } }, function(e, t, r) { var n = r(373).inherits,
            i = r(882);

        function o(e) { e = e || {}, this.staticResponses = e }
        e.exports = o, n(o, i), o.prototype.handleRequest = function(e, t, r) { var n = this.staticResponses[e.method]; "function" === typeof n ? n(e, t, r) : void 0 !== n ? setTimeout((function() { return r(null, n) })) : t() } }, function(e, t, r) { var n = r(247),
            i = r(794),
            o = r(795),
            a = r(937),
            s = r(1076),
            u = function(e) { "use strict";
                i(r, e); var t = o(r);

                function r() { return n(this, r), t.call(this, (function(e) { var t = e.blockTracker,
                            r = e.provider;
                        e.engine; return s({ blockTracker: t, provider: r }) })) } return r }(a);
        e.exports = u }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.createIdRemapMiddleware = void 0; var n = r(1078);
        t.createIdRemapMiddleware = function() { return function(e, t, r, i) { var o = e.id,
                    a = n.getUniqueId();
                e.id = a, t.id = a, r((function(r) { e.id = o, t.id = o, r() })) } } }, function(e, t, r) { "use strict"; var n = r(3),
            i = r(798);
        Object.defineProperty(t, "__esModule", { value: !0 }), t.createAsyncMiddleware = void 0, t.createAsyncMiddleware = function(e) { return function() { var t = i(n.mark((function t(r, o, a, s) { var u, c, f, d, l; return n.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                            case 0:
                                return c = new Promise((function(e) { u = e })), f = null, d = !1, l = function() { var e = i(n.mark((function e() { return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return d = !0, a((function(e) { f = e, u() })), e.next = 4, c;
                                                case 4:
                                                case "end":
                                                    return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(), t.prev = 4, t.next = 7, e(r, o, l);
                            case 7:
                                if (!d) { t.next = 13; break } return t.next = 10, c;
                            case 10:
                                f(null), t.next = 14; break;
                            case 13:
                                s(null);
                            case 14:
                                t.next = 19; break;
                            case 16:
                                t.prev = 16, t.t0 = t.catch(4), f ? f(t.t0) : s(t.t0);
                            case 19:
                            case "end":
                                return t.stop() } }), t, null, [
                        [4, 16]
                    ]) }))); return function(e, r, n, i) { return t.apply(this, arguments) } }() } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.createScaffoldMiddleware = void 0, t.createScaffoldMiddleware = function(e) { return function(t, r, n, i) { var o = e[t.method]; return void 0 === o ? n() : "function" === typeof o ? o(t, r, n, i) : (r.result = o, i()) } } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0; var n = r(939);
        Object.defineProperty(t, "EthereumRpcError", { enumerable: !0, get: function() { return n.EthereumRpcError } }), Object.defineProperty(t, "EthereumProviderError", { enumerable: !0, get: function() { return n.EthereumProviderError } }); var i = r(1080);
        Object.defineProperty(t, "serializeError", { enumerable: !0, get: function() { return i.serializeError } }), Object.defineProperty(t, "getMessageFromCode", { enumerable: !0, get: function() { return i.getMessageFromCode } }); var o = r(1440);
        Object.defineProperty(t, "ethErrors", { enumerable: !0, get: function() { return o.ethErrors } }); var a = r(940);
        Object.defineProperty(t, "errorCodes", { enumerable: !0, get: function() { return a.errorCodes } }) }, function(e, t, r) { var n = r(858),
            i = r(928),
            o = r(1437),
            a = r(1438);

        function s(t) { var r = "function" === typeof Map ? new Map : void 0; return e.exports = s = function(e) { if (null === e || !o(e)) return e; if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function"); if ("undefined" !== typeof r) { if (r.has(e)) return r.get(e);
                    r.set(e, t) }

                function t() { return a(e, arguments, n(this).constructor) } return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), i(t, e) }, s(t) }
        e.exports = s }, function(e, t) { e.exports = function(e) { return -1 !== Function.toString.call(e).indexOf("[native code]") } }, function(e, t, r) { var n = r(928),
            i = r(1049);

        function o(t, r, a) { return i() ? e.exports = o = Reflect.construct : e.exports = o = function(e, t, r) { var i = [null];
                i.push.apply(i, t); var o = new(Function.bind.apply(e, i)); return r && n(o, r.prototype), o }, o.apply(null, arguments) }
        e.exports = o }, function(e, t) { e.exports = i, i.default = i, i.stable = s, i.stableStringify = s; var r = [],
            n = [];

        function i(e, t, i) { var a; for (o(e, "", [], void 0), a = 0 === n.length ? JSON.stringify(e, t, i) : JSON.stringify(e, c(t), i); 0 !== r.length;) { var s = r.pop();
                4 === s.length ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2] } return a }

        function o(e, t, i, a) { var s; if ("object" === typeof e && null !== e) { for (s = 0; s < i.length; s++)
                    if (i[s] === e) { var u = Object.getOwnPropertyDescriptor(a, t); return void(void 0 !== u.get ? u.configurable ? (Object.defineProperty(a, t, { value: "[Circular]" }), r.push([a, t, e, u])) : n.push([e, t]) : (a[t] = "[Circular]", r.push([a, t, e]))) }
                if (i.push(e), Array.isArray(e))
                    for (s = 0; s < e.length; s++) o(e[s], s, i, e);
                else { var c = Object.keys(e); for (s = 0; s < c.length; s++) { var f = c[s];
                        o(e[f], f, i, e) } }
                i.pop() } }

        function a(e, t) { return e < t ? -1 : e > t ? 1 : 0 }

        function s(e, t, i) { var o, a = u(e, "", [], void 0) || e; for (o = 0 === n.length ? JSON.stringify(a, t, i) : JSON.stringify(a, c(t), i); 0 !== r.length;) { var s = r.pop();
                4 === s.length ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2] } return o }

        function u(e, t, i, o) { var s; if ("object" === typeof e && null !== e) { for (s = 0; s < i.length; s++)
                    if (i[s] === e) { var c = Object.getOwnPropertyDescriptor(o, t); return void(void 0 !== c.get ? c.configurable ? (Object.defineProperty(o, t, { value: "[Circular]" }), r.push([o, t, e, c])) : n.push([e, t]) : (o[t] = "[Circular]", r.push([o, t, e]))) }
                if ("function" === typeof e.toJSON) return; if (i.push(e), Array.isArray(e))
                    for (s = 0; s < e.length; s++) u(e[s], s, i, e);
                else { var f = {},
                        d = Object.keys(e).sort(a); for (s = 0; s < d.length; s++) { var l = d[s];
                        u(e[l], l, i, e), f[l] = e[l] } if (void 0 === o) return f;
                    r.push([o, t, e]), o[t] = f }
                i.pop() } }

        function c(e) { return e = void 0 !== e ? e : function(e, t) { return t },
                function(t, r) { if (n.length > 0)
                        for (var i = 0; i < n.length; i++) { var o = n[i]; if (o[1] === t && o[0] === r) { r = "[Circular]", n.splice(i, 1); break } }
                    return e.call(this, t, r) } } }, function(e, t, r) { "use strict"; var n = r(377);
        Object.defineProperty(t, "__esModule", { value: !0 }), t.ethErrors = void 0; var i = r(939),
            o = r(1080),
            a = r(940);

        function s(e, t) { var r = c(t),
                a = n(r, 2),
                s = a[0],
                u = a[1]; return new i.EthereumRpcError(e, s || o.getMessageFromCode(e), u) }

        function u(e, t) { var r = c(t),
                a = n(r, 2),
                s = a[0],
                u = a[1]; return new i.EthereumProviderError(e, s || o.getMessageFromCode(e), u) }

        function c(e) { if (e) { if ("string" === typeof e) return [e]; if ("object" === typeof e && !Array.isArray(e)) { var t = e.message,
                        r = e.data; if (t && "string" !== typeof t) throw new Error("Must specify string message."); return [t || void 0, r] } } return [] }
        t.ethErrors = { rpc: { parse: function(e) { return s(a.errorCodes.rpc.parse, e) }, invalidRequest: function(e) { return s(a.errorCodes.rpc.invalidRequest, e) }, invalidParams: function(e) { return s(a.errorCodes.rpc.invalidParams, e) }, methodNotFound: function(e) { return s(a.errorCodes.rpc.methodNotFound, e) }, internal: function(e) { return s(a.errorCodes.rpc.internal, e) }, server: function(e) { if (!e || "object" !== typeof e || Array.isArray(e)) throw new Error("Ethereum RPC Server errors must provide single object argument."); var t = e.code; if (!Number.isInteger(t) || t > -32005 || t < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005'); return s(t, e) }, invalidInput: function(e) { return s(a.errorCodes.rpc.invalidInput, e) }, resourceNotFound: function(e) { return s(a.errorCodes.rpc.resourceNotFound, e) }, resourceUnavailable: function(e) { return s(a.errorCodes.rpc.resourceUnavailable, e) }, transactionRejected: function(e) { return s(a.errorCodes.rpc.transactionRejected, e) }, methodNotSupported: function(e) { return s(a.errorCodes.rpc.methodNotSupported, e) }, limitExceeded: function(e) { return s(a.errorCodes.rpc.limitExceeded, e) } }, provider: { userRejectedRequest: function(e) { return u(a.errorCodes.provider.userRejectedRequest, e) }, unauthorized: function(e) { return u(a.errorCodes.provider.unauthorized, e) }, unsupportedMethod: function(e) { return u(a.errorCodes.provider.unsupportedMethod, e) }, disconnected: function(e) { return u(a.errorCodes.provider.disconnected, e) }, chainDisconnected: function(e) { return u(a.errorCodes.provider.chainDisconnected, e) }, custom: function(e) { if (!e || "object" !== typeof e || Array.isArray(e)) throw new Error("Ethereum Provider custom errors must provide single object argument."); var t = e.code,
                        r = e.message,
                        n = e.data; if (!r || "string" !== typeof r) throw new Error('"message" must be a nonempty string'); return new i.EthereumProviderError(t, r, n) } } } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.mergeMiddleware = void 0; var n = r(1079);
        t.mergeMiddleware = function(e) { var t = new n.JsonRpcEngine; return e.forEach((function(e) { return t.push(e) })), t.asMiddleware() } }, function(e, t) { e.exports = function(e) { return function(t, r, n, i) { var o = e[t.method]; return void 0 === o ? n() : "function" === typeof o ? o(t, r, n, i) : (r.result = o, i()) } } }, function(e, t, r) { var n = r(3),
            i = r(798),
            o = r(247),
            a = r(249),
            s = r(794),
            u = r(795),
            c = r(1069),
            f = r(1444),
            d = r(1445),
            l = r(859),
            h = (l.bnToHex, l.hexToInt),
            p = l.incrementHexInt,
            b = l.minBlockRef,
            v = l.blockRefIsNumber,
            g = function(e) { "use strict";
                s(r, e); var t = u(r);

                function r(e) { var n, i = e.provider,
                        a = e.params; return o(this, r), (n = t.call(this)).type = "log", n.ethQuery = new c(i), n.params = Object.assign({ fromBlock: "latest", toBlock: "latest", address: void 0, topics: [] }, a), n.params.address && (Array.isArray(n.params.address) || (n.params.address = [n.params.address]), n.params.address = n.params.address.map((function(e) { return e.toLowerCase() }))), n } return a(r, [{ key: "initialize", value: function() { var e = i(n.mark((function e(t) { var r, i, o, a, s; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.currentBlock, i = this.params.fromBlock, ["latest", "pending"].includes(i) && (i = r), "earliest" === i && (i = "0x0"), this.params.fromBlock = i, o = b(this.params.toBlock, r), a = Object.assign({}, this.params, { toBlock: o }), e.next = 9, this._fetchLogs(a);
                                    case 9:
                                        s = e.sent, this.addInitialResults(s);
                                    case 11:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "update", value: function() { var e = i(n.mark((function e(t) { var r, i, o, a, s, u, c, f = this; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.oldBlock, i = t.newBlock, o = i, a = r ? p(r) : i, s = Object.assign({}, this.params, { fromBlock: a, toBlock: o }), e.next = 6, this._fetchLogs(s);
                                    case 6:
                                        u = e.sent, c = u.filter((function(e) { return f.matchLog(e) })), this.addResults(c);
                                    case 9:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "_fetchLogs", value: function() { var e = i(n.mark((function e(t) { var r, i = this; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, f((function(e) { return i.ethQuery.getLogs(t, e) }))();
                                    case 2:
                                        return r = e.sent, e.abrupt("return", r);
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }, { key: "matchLog", value: function(e) { if (h(this.params.fromBlock) >= h(e.blockNumber)) return !1; if (v(this.params.toBlock) && h(this.params.toBlock) <= h(e.blockNumber)) return !1; var t = e.address && e.address.toLowerCase(); return !(this.params.address && t && !this.params.address.includes(t)) && this.params.topics.every((function(t, r) { var n = e.topics[r]; if (!n) return !1;
                            n = n.toLowerCase(); var i = Array.isArray(t) ? t : [t]; return !!i.includes(null) || (i = i.map((function(e) { return e.toLowerCase() }))).includes(n) })) } }]), r }(d);
        e.exports = g }, function(e, t, r) { "use strict"; var n = r(394),
            i = function(e, t, r, n) { return function() { for (var i = this, o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s]; var u = t.promiseModule; return new u((function(o, s) { t.multiArgs ? a.push((function() { for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            t.errorFirst ? r[0] ? s(r) : (r.shift(), o(r)) : o(r) })) : t.errorFirst ? a.push((function(e, t) { e ? s(e) : o(t) })) : a.push(o); var u = i === r ? n : i;
                        Reflect.apply(e, u, a) })) } },
            o = new WeakMap;
        e.exports = function(e, t) { t = n({ exclude: [/.+(?:Sync|Stream)$/], errorFirst: !0, promiseModule: Promise }, t); var r = typeof e; if (null === e || "object" !== r && "function" !== r) throw new TypeError("Expected `input` to be a `Function` or `Object`, got `".concat(null === e ? "null" : r, "`")); var a = new WeakMap,
                s = new Proxy(e, { apply: function(e, r, n) { var o = a.get(e); if (o) return Reflect.apply(o, r, n); var u = t.excludeMain ? e : i(e, t, s, e); return a.set(e, u), Reflect.apply(u, r, n) }, get: function(e, r) { var n = e[r]; if (! function(e, r) { var n = o.get(e); if (n || (n = {}, o.set(e, n)), r in n) return n[r]; var i = function(e) { return "string" === typeof e || "symbol" === typeof r ? r === e : e.test(r) },
                                    a = Reflect.getOwnPropertyDescriptor(e, r),
                                    s = void 0 === a || a.writable || a.configurable,
                                    u = (t.include ? t.include.some(i) : !t.exclude.some(i)) && s; return n[r] = u, u }(e, r) || n === Function.prototype[r]) return n; var u = a.get(n); if (u) return u; if ("function" === typeof n) { var c = i(n, t, s, e); return a.set(n, c), c } return n } }); return s } }, function(e, t, r) { var n = r(3),
            i = r(798),
            o = r(247),
            a = r(249),
            s = r(1068),
            u = r(858),
            c = r(794),
            f = r(795),
            d = function(e) { "use strict";
                c(r, e); var t = f(r);

                function r() { var e; return o(this, r), (e = t.call(this)).allResults = [], e } return a(r, [{ key: "update", value: function() { var e = i(n.mark((function e() { return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        throw new Error("BaseFilterWithHistory - no update method specified");
                                    case 1:
                                    case "end":
                                        return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }() }, { key: "addResults", value: function(e) { this.allResults = this.allResults.concat(e), s(u(r.prototype), "addResults", this).call(this, e) } }, { key: "addInitialResults", value: function(e) { this.allResults = this.allResults.concat(e), s(u(r.prototype), "addInitialResults", this).call(this, e) } }, { key: "getAllResults", value: function() { return this.allResults } }]), r }(r(941));
        e.exports = d }, function(e, t, r) { var n = r(3),
            i = r(798),
            o = r(247),
            a = r(249),
            s = r(794),
            u = r(795),
            c = r(941),
            f = r(942),
            d = r(859).incrementHexInt,
            l = function(e) { "use strict";
                s(r, e); var t = u(r);

                function r(e) { var n, i = e.provider;
                    e.params; return o(this, r), (n = t.call(this)).type = "block", n.provider = i, n } return a(r, [{ key: "update", value: function() { var e = i(n.mark((function e(t) { var r, i, o, a, s, u; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.oldBlock, i = t.newBlock, o = i, a = d(r), e.next = 5, f({ provider: this.provider, fromBlock: a, toBlock: o });
                                    case 5:
                                        s = e.sent, u = s.map((function(e) { return e.hash })), this.addResults(u);
                                    case 8:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }]), r }(c);
        e.exports = l }, function(e, t, r) { var n = r(3),
            i = r(917),
            o = r(158),
            a = r(798),
            s = r(247),
            u = r(249),
            c = r(794),
            f = r(795),
            d = r(941),
            l = r(942),
            h = r(859).incrementHexInt,
            p = function(e) { "use strict";
                c(r, e); var t = f(r);

                function r(e) { var n, i = e.provider; return s(this, r), (n = t.call(this)).type = "tx", n.provider = i, n } return u(r, [{ key: "update", value: function() { var e = a(n.mark((function e(t) { var r, a, s, u, c, f, d, p; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.oldBlock, a = r, s = h(r), e.next = 5, l({ provider: this.provider, fromBlock: s, toBlock: a });
                                    case 5:
                                        u = e.sent, c = [], f = o(u); try { for (f.s(); !(d = f.n()).done;) p = d.value, c.push.apply(c, i(p.transactions)) } catch (n) { f.e(n) } finally { f.f() }
                                        this.addResults(c);
                                    case 10:
                                    case "end":
                                        return e.stop() } }), e, this) }))); return function(t) { return e.apply(this, arguments) } }() }]), r }(d);
        e.exports = p }, function(e, t, r) { var n = r(1449),
            i = r(1450),
            o = r(373).inherits,
            a = r(857),
            s = r(1452),
            u = r(832),
            c = r(1462),
            f = r(882),
            d = r(1463),
            l = /^[0-9A-Fa-f]+$/g;

        function h(e) { var t = this;
            t.nonceLock = c(1), e.getAccounts && (t.getAccounts = e.getAccounts), e.processTransaction && (t.processTransaction = e.processTransaction), e.processMessage && (t.processMessage = e.processMessage), e.processPersonalMessage && (t.processPersonalMessage = e.processPersonalMessage), e.processTypedMessage && (t.processTypedMessage = e.processTypedMessage), t.approveTransaction = e.approveTransaction || t.autoApprove, t.approveMessage = e.approveMessage || t.autoApprove, t.approvePersonalMessage = e.approvePersonalMessage || t.autoApprove, t.approveDecryptMessage = e.approveDecryptMessage || t.autoApprove, t.approveEncryptionPublicKey = e.approveEncryptionPublicKey || t.autoApprove, t.approveTypedMessage = e.approveTypedMessage || t.autoApprove, e.signTransaction && (t.signTransaction = e.signTransaction || y("signTransaction")), e.signMessage && (t.signMessage = e.signMessage || y("signMessage")), e.signPersonalMessage && (t.signPersonalMessage = e.signPersonalMessage || y("signPersonalMessage")), e.decryptMessage && (t.decryptMessage = e.decryptMessage || y("decryptMessage")), e.encryptionPublicKey && (t.encryptionPublicKey = e.encryptionPublicKey || y("encryptionPublicKey")), e.signTypedMessage && (t.signTypedMessage = e.signTypedMessage || y("signTypedMessage")), e.recoverPersonalSignature && (t.recoverPersonalSignature = e.recoverPersonalSignature), e.publishTransaction && (t.publishTransaction = e.publishTransaction), t.estimateGas = e.estimateGas || t.estimateGas, t.getGasPrice = e.getGasPrice || t.getGasPrice }

        function p(e) { return e.toLowerCase() }

        function b(e) { var t = a.addHexPrefix(e); return a.isValidAddress(t) }

        function v(e) { var t = a.addHexPrefix(e); return !a.isValidAddress(t) && g(e) }

        function g(e) { return "string" === typeof e && ("0x" === e.slice(0, 2) && e.slice(2).match(l)) }

        function y(e) { return function(t, r) { r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + e + '" fn in constructor options')) } }
        e.exports = h, o(h, f), h.prototype.handleRequest = function(e, t, r) { var i, o, a, s, c, f = this; switch (f._parityRequests = {}, f._parityRequestCount = 0, e.method) {
                case "eth_coinbase":
                    return void f.getAccounts((function(e, t) { if (e) return r(e); var n = t[0] || null;
                        r(null, n) }));
                case "eth_accounts":
                    return void f.getAccounts((function(e, t) { if (e) return r(e);
                        r(null, t) }));
                case "eth_sendTransaction":
                    return i = e.params[0], void n([function(e) { return f.validateTransaction(i, e) }, function(e) { return f.processTransaction(i, e) }], r);
                case "eth_signTransaction":
                    return i = e.params[0], void n([function(e) { return f.validateTransaction(i, e) }, function(e) { return f.processSignTransaction(i, e) }], r);
                case "eth_sign":
                    return c = e.params[0], s = e.params[1], a = e.params[2] || {}, o = u(a, { from: c, data: s }), void n([function(e) { return f.validateMessage(o, e) }, function(e) { return f.processMessage(o, e) }], r);
                case "personal_sign":
                    return function() { var t = e.params[0]; if (v(e.params[1]) && b(t)) { "[message, address]. This was previously handled incorrectly, ", "and has been corrected automatically. ", "Please switch this param order for smooth behavior in the future.", console.warn("The eth_personalSign method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."), c = e.params[0], s = e.params[1] }
                        else s = e.params[0], c = e.params[1];
                        a = e.params[2] || {}, o = u(a, { from: c, data: s }), n([function(e) { return f.validatePersonalMessage(o, e) }, function(e) { return f.processPersonalMessage(o, e) }], r) }();
                case "eth_decryptMessage":
                    return function() { var t = e.params[0]; if (v(e.params[1]) && b(t)) { "[message, address]. This was previously handled incorrectly, ", "and has been corrected automatically. ", "Please switch this param order for smooth behavior in the future.", console.warn("The eth_decryptMessage method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."), c = e.params[0], s = e.params[1] }
                        else s = e.params[0], c = e.params[1];
                        a = e.params[2] || {}, o = u(a, { from: c, data: s }), n([function(e) { return f.validateDecryptMessage(o, e) }, function(e) { return f.processDecryptMessage(o, e) }], r) }();
                case "encryption_public_key":
                    return function() { var t = e.params[0];
                        n([function(e) { return f.validateEncryptionPublicKey(t, e) }, function(e) { return f.processEncryptionPublicKey(t, e) }], r) }();
                case "personal_ecRecover":
                    return function() { s = e.params[0]; var t = e.params[1];
                        a = e.params[2] || {}, o = u(a, { sig: t, data: s }), f.recoverPersonalSignature(o, r) }();
                case "eth_signTypedData":
                case "eth_signTypedData_v3":
                case "eth_signTypedData_v4":
                    return function() { var t = e.params[0],
                            i = e.params[1];
                        b(t) ? (c = t, s = i) : (s = t, c = i), a = e.params[2] || {}, o = u(a, { from: c, data: s }), n([function(e) { return f.validateTypedMessage(o, e) }, function(e) { return f.processTypedMessage(o, e) }], r) }();
                case "parity_postTransaction":
                    return i = e.params[0], void f.parityPostTransaction(i, r);
                case "parity_postSign":
                    return c = e.params[0], s = e.params[1], void f.parityPostSign(c, s, r);
                case "parity_checkRequest":
                    return function() { var t = e.params[0];
                        f.parityCheckRequest(t, r) }();
                case "parity_defaultAccount":
                    return void f.getAccounts((function(e, t) { if (e) return r(e); var n = t[0] || null;
                        r(null, n) }));
                default:
                    return void t() } }, h.prototype.getAccounts = function(e) { e(null, []) }, h.prototype.processTransaction = function(e, t) { var r = this;
            n([function(t) { return r.approveTransaction(e, t) }, function(e, t) { return r.checkApproval("transaction", e, t) }, function(t) { return r.finalizeAndSubmitTx(e, t) }], t) }, h.prototype.processSignTransaction = function(e, t) { var r = this;
            n([function(t) { return r.approveTransaction(e, t) }, function(e, t) { return r.checkApproval("transaction", e, t) }, function(t) { return r.finalizeTx(e, t) }], t) }, h.prototype.processMessage = function(e, t) { var r = this;
            n([function(t) { return r.approveMessage(e, t) }, function(e, t) { return r.checkApproval("message", e, t) }, function(t) { return r.signMessage(e, t) }], t) }, h.prototype.processPersonalMessage = function(e, t) { var r = this;
            n([function(t) { return r.approvePersonalMessage(e, t) }, function(e, t) { return r.checkApproval("message", e, t) }, function(t) { return r.signPersonalMessage(e, t) }], t) }, h.prototype.processDecryptMessage = function(e, t) { var r = this;
            n([function(t) { return r.approveDecryptMessage(e, t) }, function(e, t) { return r.checkApproval("decryptMessage", e, t) }, function(t) { return r.decryptMessage(e, t) }], t) }, h.prototype.processEncryptionPublicKey = function(e, t) { var r = this;
            n([function(t) { return r.approveEncryptionPublicKey(e, t) }, function(e, t) { return r.checkApproval("encryptionPublicKey", e, t) }, function(t) { return r.encryptionPublicKey(e, t) }], t) }, h.prototype.processTypedMessage = function(e, t) { var r = this;
            n([function(t) { return r.approveTypedMessage(e, t) }, function(e, t) { return r.checkApproval("message", e, t) }, function(t) { return r.signTypedMessage(e, t) }], t) }, h.prototype.autoApprove = function(e, t) { t(null, !0) }, h.prototype.checkApproval = function(e, t, r) { r(t ? null : new Error("User denied " + e + " signature.")) }, h.prototype.parityPostTransaction = function(e, t) { var r = this,
                n = r._parityRequestCount,
                i = "0x".concat(n.toString(16));
            r._parityRequestCount++, r.emitPayload({ method: "eth_sendTransaction", params: [e] }, (function(e, t) { if (e) r._parityRequests[i] = { error: e };
                else { var n = t.result;
                    r._parityRequests[i] = n } })), t(null, i) }, h.prototype.parityPostSign = function(e, t, r) { var n = this,
                i = n._parityRequestCount,
                o = "0x".concat(i.toString(16));
            n._parityRequestCount++, n.emitPayload({ method: "eth_sign", params: [e, t] }, (function(e, t) { if (e) n._parityRequests[o] = { error: e };
                else { var r = t.result;
                    n._parityRequests[o] = r } })), r(null, o) }, h.prototype.parityCheckRequest = function(e, t) { var r = this._parityRequests[e] || null; return r ? r.error ? t(r.error) : void t(null, r) : t(null, null) }, h.prototype.recoverPersonalSignature = function(e, t) { var r; try { r = s.recoverPersonalSignature(e) } catch (n) { return t(n) }
            t(null, r) }, h.prototype.validateTransaction = function(e, t) { if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign transaction."));
            this.validateSender(e.from, (function(r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign transaction for this address: "'.concat(e.from, '"'))) })) }, h.prototype.validateMessage = function(e, t) { if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign message."));
            this.validateSender(e.from, (function(r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from, '"'))) })) }, h.prototype.validatePersonalMessage = function(e, t) { return void 0 === e.from ? t(new Error("Undefined address - from address required to sign personal message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to sign personal message.")) : g(e.data) ? void this.validateSender(e.from, (function(r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from, '"'))) })) : t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex.")) }, h.prototype.validateDecryptMessage = function(e, t) { return void 0 === e.from ? t(new Error("Undefined address - from address required to decrypt message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to decrypt message.")) : g(e.data) ? void this.validateSender(e.from, (function(r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to decrypt message for this address: "'.concat(e.from, '"'))) })) : t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex.")) }, h.prototype.validateEncryptionPublicKey = function(e, t) { this.validateSender(e, (function(r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to obtain encryption public key for this address: "'.concat(e, '"'))) })) }, h.prototype.validateTypedMessage = function(e, t) { return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, (function(r, n) { return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from, '"'))) })) }, h.prototype.validateSender = function(e, t) { if (!e) return t(null, !1);
            this.getAccounts((function(r, n) { if (r) return t(r); var i = -1 !== n.map(p).indexOf(e.toLowerCase());
                t(null, i) })) }, h.prototype.finalizeAndSubmitTx = function(e, t) { var r = this;
            r.nonceLock.take((function() { n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r), r.publishTransaction.bind(r)], (function(e, n) { if (r.nonceLock.leave(), e) return t(e);
                    t(null, n) })) })) }, h.prototype.finalizeTx = function(e, t) { var r = this;
            r.nonceLock.take((function() { n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r)], (function(n, i) { if (r.nonceLock.leave(), n) return t(n);
                    t(null, { raw: i, tx: e }) })) })) }, h.prototype.publishTransaction = function(e, t) { this.emitPayload({ method: "eth_sendRawTransaction", params: [e] }, (function(e, r) { if (e) return t(e);
                t(null, r.result) })) }, h.prototype.estimateGas = function(e, t) { d(this.engine, e, t) }, h.prototype.getGasPrice = function(e) { this.emitPayload({ method: "eth_gasPrice", params: [] }, (function(t, r) { if (t) return e(t);
                e(null, r.result) })) }, h.prototype.fillInTxExtras = function(e, t) { var r = this,
                n = e.from,
                o = {};
            void 0 === e.gasPrice && (o.gasPrice = r.getGasPrice.bind(r)), void 0 === e.nonce && (o.nonce = r.emitPayload.bind(r, { method: "eth_getTransactionCount", params: [n, "pending"] })), void 0 === e.gas && (o.gas = r.estimateGas.bind(r, function(e) { return { from: e.from, to: e.to, value: e.value, data: e.data, gas: e.gas, gasPrice: e.gasPrice, nonce: e.nonce } }(e))), i(o, (function(r, n) { if (r) return t(r); var i = {};
                n.gasPrice && (i.gasPrice = n.gasPrice), n.nonce && (i.nonce = n.nonce.result), n.gas && (i.gas = n.gas), t(null, u(e, i)) })) } }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) { if (t = (0, o.default)(t || i.default), !(0, n.default)(e)) return t(new Error("First argument to waterfall must be an array of functions")); if (!e.length) return t(); var r = 0;

            function c(t) { var n = (0, u.default)(e[r++]);
                t.push((0, s.default)(f)), n.apply(null, t) }

            function f(n) { if (n || r === e.length) return t.apply(null, arguments);
                c((0, a.default)(arguments, 1)) }
            c([]) }; var n = c(r(102)),
            i = c(r(316)),
            o = c(r(934)),
            a = c(r(881)),
            s = c(r(935)),
            u = c(r(827));

        function c(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) {
            (0, i.default)(n.default, e, t) }; var n = o(r(1070)),
            i = o(r(1451));

        function o(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, r) { r = r || n.default; var s = (0, i.default)(t) ? [] : {};
            e(t, (function(e, t, r) {
                (0, a.default)(e)((function(e, n) { arguments.length > 2 && (n = (0, o.default)(arguments, 1)), s[t] = n, r(e) })) }), (function(e) { r(e, s) })) }; var n = s(r(316)),
            i = s(r(190)),
            o = s(r(881)),
            a = s(r(827));

        function s(e) { return e && e.__esModule ? e : { default: e } }
        e.exports = t.default }, function(e, t, r) { var n = r(857),
            i = r(1453);

        function o(e) { var t = new Error("Expect argument to be non-empty array"); if ("object" !== typeof e || !e.length) throw t; var r = e.map((function(e) { return "bytes" === e.type ? n.toBuffer(e.value) : e.value })),
                o = e.map((function(e) { return e.type })),
                a = e.map((function(e) { if (!e.name) throw t; return e.type + " " + e.name })); return i.soliditySHA3(["bytes32", "bytes32"], [i.soliditySHA3(new Array(e.length).fill("string"), a), i.soliditySHA3(o, r)]) }

        function a(e, t) { var r = n.toBuffer(t),
                i = n.fromRpcSig(r); return n.ecrecover(e, i.v, i.r, i.s) }

        function s(e) { var t = n.toBuffer(e.data); return a(n.hashPersonalMessage(t), e.sig) }

        function u(e, t) { for (var r = "" + e; r.length < t;) r = "0" + r; return r }
        e.exports = { concatSig: function(e, t, r) { var i = n.fromSigned(t),
                    o = n.fromSigned(r),
                    a = n.bufferToInt(e),
                    s = u(n.toUnsigned(i).toString("hex"), 64),
                    c = u(n.toUnsigned(o).toString("hex"), 64),
                    f = n.stripHexPrefix(n.intToHex(a)); return n.addHexPrefix(s.concat(c, f)).toString("hex") }, normalize: function(e) { if (e) { if ("number" === typeof e) { var t = n.toBuffer(e);
                        e = n.bufferToHex(t) } if ("string" !== typeof e) { var r = "eth-sig-util.normalize() requires hex string or integer input."; throw new Error(r += " received " + typeof e + ": " + e) } return n.addHexPrefix(e.toLowerCase()) } }, personalSign: function(e, t) { var r = n.toBuffer(t.data),
                    i = n.hashPersonalMessage(r),
                    o = n.ecsign(i, e); return n.bufferToHex(this.concatSig(o.v, o.r, o.s)) }, recoverPersonalSignature: function(e) { var t = s(e),
                    r = n.publicToAddress(t); return n.bufferToHex(r) }, extractPublicKey: function(e) { return "0x" + s(e).toString("hex") }, typedSignatureHash: function(e) { var t = o(e); return n.bufferToHex(t) }, signTypedData: function(e, t) { var r = o(t.data),
                    i = n.ecsign(r, e); return n.bufferToHex(this.concatSig(i.v, i.r, i.s)) }, recoverTypedSignature: function(e) { var t = a(o(e.data), e.sig),
                    r = n.publicToAddress(t); return n.bufferToHex(r) } } }, function(e, t, r) { e.exports = r(1454) }, function(e, t, r) {
        (function(t) { var n = r(1455),
                i = r(48),
                o = function() {};

            function a(e) { return e.startsWith("int[") ? "int256" + e.slice(3) : "int" === e ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : "uint" === e ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : "fixed" === e ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : "ufixed" === e ? "ufixed128x128" : e }

            function s(e) { return parseInt(/^\D+(\d+)$/.exec(e)[1], 10) }

            function u(e) { var t = /^\D+(\d+)x(\d+)$/.exec(e); return [parseInt(t[1], 10), parseInt(t[2], 10)] }

            function c(e) { var t = e.match(/(.*)\[(.*?)\]$/); return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null }

            function f(e) { var t = typeof e; if ("string" === t) return n.isHexPrefixed(e) ? new i(n.stripHexPrefix(e), 16) : new i(e, 10); if ("number" === t) return new i(e); if (e.toArray) return e; throw new Error("Argument is not a number") }

            function d(e) { var t = /^(\w+)\((.*)\)$/.exec(e); if (3 !== t.length) throw new Error("Invalid method signature"); var r = /^(.+)\):\((.+)$/.exec(t[2]); if (null !== r && 3 === r.length) return { method: t[1], args: r[1].split(","), retargs: r[2].split(",") }; var n = t[2].split(","); return 1 === n.length && "" === n[0] && (n = []), { method: t[1], args: n } }

            function l(e, r) { var o, a, d, h; if ("address" === e) return l("uint160", f(r)); if ("bool" === e) return l("uint8", r ? 1 : 0); if ("string" === e) return l("bytes", t.from(r, "utf8")); if (v(e)) { if ("undefined" === typeof r.length) throw new Error("Not an array?"); if ("dynamic" !== (o = c(e)) && 0 !== o && r.length > o) throw new Error("Elements exceed array size: " + o); for (h in d = [], e = e.slice(0, e.lastIndexOf("[")), "string" === typeof r && (r = JSON.parse(r)), r) d.push(l(e, r[h])); if ("dynamic" === o) { var p = l("uint256", r.length);
                        d.unshift(p) } return t.concat(d) } if ("bytes" === e) return r = t.from(r), d = t.concat([l("uint256", r.length), r]), r.length % 32 !== 0 && (d = t.concat([d, n.zeros(32 - r.length % 32)])), d; if (e.startsWith("bytes")) { if ((o = s(e)) < 1 || o > 32) throw new Error("Invalid bytes<N> width: " + o); return n.setLengthRight(r, 32) } if (e.startsWith("uint")) { if ((o = s(e)) % 8 || o < 8 || o > 256) throw new Error("Invalid uint<N> width: " + o); if ((a = f(r)).bitLength() > o) throw new Error("Supplied uint exceeds width: " + o + " vs " + a.bitLength()); if (a < 0) throw new Error("Supplied uint is negative"); return a.toArrayLike(t, "be", 32) } if (e.startsWith("int")) { if ((o = s(e)) % 8 || o < 8 || o > 256) throw new Error("Invalid int<N> width: " + o); if ((a = f(r)).bitLength() > o) throw new Error("Supplied int exceeds width: " + o + " vs " + a.bitLength()); return a.toTwos(256).toArrayLike(t, "be", 32) } if (e.startsWith("ufixed")) { if (o = u(e), (a = f(r)) < 0) throw new Error("Supplied ufixed is negative"); return l("uint256", a.mul(new i(2).pow(new i(o[1])))) } if (e.startsWith("fixed")) return o = u(e), l("int256", f(r).mul(new i(2).pow(new i(o[1])))); throw new Error("Unsupported or invalid type: " + e) }

            function h(e, r, n) { var o, a, s, u; if ("string" === typeof e && (e = p(e)), "address" === e.name) return h(e.rawType, r, n).toArrayLike(t, "be", 20).toString("hex"); if ("bool" === e.name) return h(e.rawType, r, n).toString() === new i(1).toString(); if ("string" === e.name) { var c = h(e.rawType, r, n); return t.from(c, "utf8").toString() } if (e.isArray) { for (s = [], o = e.size, "dynamic" === e.size && (n = h("uint256", r, n).toNumber(), o = h("uint256", r, n).toNumber(), n += 32), u = 0; u < o; u++) { var f = h(e.subArray, r, n);
                        s.push(f), n += e.subArray.memoryUsage } return s } if ("bytes" === e.name) return n = h("uint256", r, n).toNumber(), o = h("uint256", r, n).toNumber(), r.slice(n + 32, n + 32 + o); if (e.name.startsWith("bytes")) return r.slice(n, n + e.size); if (e.name.startsWith("uint")) { if ((a = new i(r.slice(n, n + 32), 16, "be")).bitLength() > e.size) throw new Error("Decoded int exceeds width: " + e.size + " vs " + a.bitLength()); return a } if (e.name.startsWith("int")) { if ((a = new i(r.slice(n, n + 32), 16, "be").fromTwos(256)).bitLength() > e.size) throw new Error("Decoded uint exceeds width: " + e.size + " vs " + a.bitLength()); return a } if (e.name.startsWith("ufixed")) { if (o = new i(2).pow(new i(e.size[1])), !(a = h("uint256", r, n)).mod(o).isZero()) throw new Error("Decimals not supported yet"); return a.div(o) } if (e.name.startsWith("fixed")) { if (o = new i(2).pow(new i(e.size[1])), !(a = h("int256", r, n)).mod(o).isZero()) throw new Error("Decimals not supported yet"); return a.div(o) } throw new Error("Unsupported or invalid type: " + e.name) }

            function p(e) { var t, r, n; if (v(e)) { t = c(e); var i = e.slice(0, e.lastIndexOf("[")); return i = p(i), r = { isArray: !0, name: e, size: t, memoryUsage: "dynamic" === t ? 32 : i.memoryUsage * t, subArray: i } } switch (e) {
                    case "address":
                        n = "uint160"; break;
                    case "bool":
                        n = "uint8"; break;
                    case "string":
                        n = "bytes" } if (r = { rawType: n, name: e, memoryUsage: 32 }, e.startsWith("bytes") && "bytes" !== e || e.startsWith("uint") || e.startsWith("int") ? r.size = s(e) : (e.startsWith("ufixed") || e.startsWith("fixed")) && (r.size = u(e)), e.startsWith("bytes") && "bytes" !== e && (r.size < 1 || r.size > 32)) throw new Error("Invalid bytes<N> width: " + r.size); if ((e.startsWith("uint") || e.startsWith("int")) && (r.size % 8 || r.size < 8 || r.size > 256)) throw new Error("Invalid int/uint<N> width: " + r.size); return r }

            function b(e) { return "string" === e || "bytes" === e || "dynamic" === c(e) }

            function v(e) { return e.lastIndexOf("]") === e.length - 1 }

            function g(e, t) { return e.startsWith("address") || e.startsWith("bytes") ? "0x" + t.toString("hex") : t.toString() }
            o.eventID = function(e, r) { var i = e + "(" + r.map(a).join(",") + ")"; return n.keccak256(t.from(i)) }, o.methodID = function(e, t) { return o.eventID(e, t).slice(0, 4) }, o.rawEncode = function(e, r) { var n = [],
                    i = [],
                    o = 0;
                e.forEach((function(e) { if (v(e)) { var t = c(e);
                        o += "dynamic" !== t ? 32 * t : 32 } else o += 32 })); for (var s = 0; s < e.length; s++) { var u = a(e[s]),
                        f = l(u, r[s]);
                    b(u) ? (n.push(l("uint256", o)), i.push(f), o += f.length) : n.push(f) } return t.concat(n.concat(i)) }, o.rawDecode = function(e, r) { var n = [];
                r = t.from(r); for (var i = 0, o = 0; o < e.length; o++) { var s = p(a(e[o])),
                        u = h(s, r, i);
                    i += s.memoryUsage, n.push(u) } return n }, o.simpleEncode = function(e) { var r = Array.prototype.slice.call(arguments).slice(1),
                    n = d(e); if (r.length !== n.args.length) throw new Error("Argument count mismatch"); return t.concat([o.methodID(n.method, n.args), o.rawEncode(n.args, r)]) }, o.simpleDecode = function(e, t) { var r = d(e); if (!r.retargs) throw new Error("No return values in method"); return o.rawDecode(r.retargs, t) }, o.stringify = function(e, t) { var r = []; for (var n in e) { var i = e[n],
                        o = t[n];
                    o = /^[^\[]+\[.*\]$/.test(i) ? o.map((function(e) { return g(i, e) })).join(", ") : g(i, o), r.push(o) } return r }, o.solidityHexValue = function(e, r, i) { var a, u; if (v(e)) { var d = e.replace(/\[.*?\]/, ""); if (!v(d)) { var l = c(e); if ("dynamic" !== l && 0 !== l && r.length > l) throw new Error("Elements exceed array size: " + l) } var h = r.map((function(e) { return o.solidityHexValue(d, e, 256) })); return t.concat(h) } if ("bytes" === e) return r; if ("string" === e) return t.from(r, "utf8"); if ("bool" === e) { i = i || 8; var p = Array(i / 4).join("0"); return t.from(r ? p + "1" : p + "0", "hex") } if ("address" === e) { var b = 20; return i && (b = i / 8), n.setLengthLeft(r, b) } if (e.startsWith("bytes")) { if ((a = s(e)) < 1 || a > 32) throw new Error("Invalid bytes<N> width: " + a); return n.setLengthRight(r, a) } if (e.startsWith("uint")) { if ((a = s(e)) % 8 || a < 8 || a > 256) throw new Error("Invalid uint<N> width: " + a); if ((u = f(r)).bitLength() > a) throw new Error("Supplied uint exceeds width: " + a + " vs " + u.bitLength()); return i = i || a, u.toArrayLike(t, "be", i / 8) } if (e.startsWith("int")) { if ((a = s(e)) % 8 || a < 8 || a > 256) throw new Error("Invalid int<N> width: " + a); if ((u = f(r)).bitLength() > a) throw new Error("Supplied int exceeds width: " + a + " vs " + u.bitLength()); return i = i || a, u.toTwos(a).toArrayLike(t, "be", i / 8) } throw new Error("Unsupported or invalid type: " + e) }, o.solidityPack = function(e, r) { if (e.length !== r.length) throw new Error("Number of types are not matching the values"); for (var n = [], i = 0; i < e.length; i++) { var s = a(e[i]),
                        u = r[i];
                    n.push(o.solidityHexValue(s, u, null)) } return t.concat(n) }, o.soliditySHA3 = function(e, t) { return n.keccak256(o.solidityPack(e, t)) }, o.soliditySHA256 = function(e, t) { return n.sha256(o.solidityPack(e, t)) }, o.solidityRIPEMD160 = function(e, t) { return n.ripemd160(o.solidityPack(e, t), !0) }, o.fromSerpent = function(e) { for (var t, r = [], n = 0; n < e.length; n++) { var i = e[n]; if ("s" === i) r.push("bytes");
                    else if ("b" === i) { for (var o = "bytes", a = n + 1; a < e.length && ((t = e[a]) >= "0" && t <= "9");) o += e[a] - "0", a++;
                        n = a - 1, r.push(o) } else if ("i" === i) r.push("int256");
                    else { if ("a" !== i) throw new Error("Unsupported or invalid type: " + i);
                        r.push("int256[]") } } return r }, o.toSerpent = function(e) { for (var t = [], r = 0; r < e.length; r++) { var n = e[r]; if ("bytes" === n) t.push("s");
                    else if (n.startsWith("bytes")) t.push("b" + s(n));
                    else if ("int256" === n) t.push("i");
                    else { if ("int256[]" !== n) throw new Error("Unsupported or invalid type: " + n);
                        t.push("a") } } return t.join("") }, e.exports = o }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict"; var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) { void 0 === n && (n = r), Object.defineProperty(e, n, { enumerable: !0, get: function() { return t[r] } }) } : function(e, t, r, n) { void 0 === n && (n = r), e[n] = t[r] }),
            i = this && this.__exportStar || function(e, t) { for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r) };
        Object.defineProperty(t, "__esModule", { value: !0 }), t.secp256k1 = t.rlp = t.BN = void 0; var o = r(943);
        t.secp256k1 = o; var a = r(839),
            s = r(48);
        t.BN = s; var u = r(880);
        t.rlp = u, Object.assign(t, a), i(r(1458), t), i(r(1459), t), i(r(944), t), i(r(1460), t), i(r(860), t), i(r(1461), t) }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }); var n = r(48),
                i = new(0, r(930).ec)("secp256k1"),
                o = i.curve;
            t.privateKeyExport = function(e, t) { void 0 === t && (t = !0); var r = new n(e); if (r.ucmp(o.n) >= 0) throw new Error("couldn't export to DER format"); var s = i.g.mul(r); return a(s.getX(), s.getY(), t) }, t.privateKeyModInverse = function(t) { var r = new n(t); if (r.ucmp(o.n) >= 0 || r.isZero()) throw new Error("private key range is invalid"); return r.invm(o.n).toArrayLike(e, "be", 32) }, t.signatureImport = function(t) { var r = new n(t.r);
                r.ucmp(o.n) >= 0 && (r = new n(0)); var i = new n(t.s); return i.ucmp(o.n) >= 0 && (i = new n(0)), e.concat([r.toArrayLike(e, "be", 32), i.toArrayLike(e, "be", 32)]) }, t.ecdhUnsafe = function(e, t, r) { void 0 === r && (r = !0); var s = i.keyFromPublic(e),
                    u = new n(t); if (u.ucmp(o.n) >= 0 || u.isZero()) throw new Error("scalar was invalid (zero or overflow)"); var c = s.pub.mul(u); return a(c.getX(), c.getY(), r) }; var a = function(t, r, n) { var i; return n ? ((i = e.alloc(33))[0] = r.isOdd() ? 3 : 2, t.toArrayLike(e, "be", 32).copy(i, 1)) : ((i = e.alloc(65))[0] = 4, t.toArrayLike(e, "be", 32).copy(i, 1), r.toArrayLike(e, "be", 32).copy(i, 33)), i } }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }); var r = e.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                n = e.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            t.privateKeyExport = function(t, i, o) { void 0 === o && (o = !0); var a = e.from(o ? r : n); return t.copy(a, o ? 8 : 9), i.copy(a, o ? 181 : 214), a }, t.privateKeyImport = function(e) { var t = e.length,
                    r = 0; if (t < r + 1 || 48 !== e[r]) return null; if (t < (r += 1) + 1 || !(128 & e[r])) return null; var n = 127 & e[r]; if (n < 1 || n > 2) return null; if (t < (r += 1) + n) return null; var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0); return t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1] ? null : e.slice(r + 2, r + 2 + e[r + 1]) }, t.signatureImportLax = function(t) { var r = e.alloc(32, 0),
                    n = e.alloc(32, 0),
                    i = t.length,
                    o = 0; if (48 !== t[o++]) return null; var a = t[o++]; if (128 & a && (o += a - 128) > i) return null; if (2 !== t[o++]) return null; var s = t[o++]; if (128 & s) { if (o + (a = s - 128) > i) return null; for (; a > 0 && 0 === t[o]; o += 1, a -= 1); for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o] } if (s > i - o) return null; var u = o; if (o += s, 2 !== t[o++]) return null; var c = t[o++]; if (128 & c) { if (o + (a = c - 128) > i) return null; for (; a > 0 && 0 === t[o]; o += 1, a -= 1); for (c = 0; a > 0; o += 1, a -= 1) c = (c << 8) + t[o] } if (c > i - o) return null; var f = o; for (o += c; s > 0 && 0 === t[u]; s -= 1, u += 1); if (s > 32) return null; var d = t.slice(u, u + s); for (d.copy(r, 32 - d.length); c > 0 && 0 === t[f]; c -= 1, f += 1); if (c > 32) return null; var l = t.slice(f, f + c); return l.copy(n, 32 - l.length), { r: r, s: n } } }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }), t.KECCAK256_RLP = t.KECCAK256_RLP_S = t.KECCAK256_RLP_ARRAY = t.KECCAK256_RLP_ARRAY_S = t.KECCAK256_NULL = t.KECCAK256_NULL_S = t.TWO_POW256 = t.MAX_INTEGER = void 0; var n = r(48);
            t.MAX_INTEGER = new n("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new n("10000000000000000000000000000000000000000000000000000000000000000", 16), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.KECCAK256_NULL = e.from(t.KECCAK256_NULL_S, "hex"), t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.KECCAK256_RLP_ARRAY = e.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.KECCAK256_RLP = e.from(t.KECCAK256_RLP_S, "hex") }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }), t.importPublic = t.privateToPublic = t.privateToAddress = t.publicToAddress = t.pubToAddress = t.isValidPublic = t.isValidPrivate = t.isPrecompiled = t.generateAddress2 = t.generateAddress = t.isValidChecksumAddress = t.toChecksumAddress = t.isZeroAddress = t.isValidAddress = t.zeroAddress = void 0; var n = r(932),
                i = r(839),
                o = r(943),
                a = r(48),
                s = r(860),
                u = r(944);
            t.zeroAddress = function() { var e = s.zeros(20); return s.bufferToHex(e) }, t.isValidAddress = function(e) { return /^0x[0-9a-fA-F]{40}$/.test(e) }, t.isZeroAddress = function(e) { return t.zeroAddress() === s.addHexPrefix(e) }, t.toChecksumAddress = function(e, t) { e = i.stripHexPrefix(e).toLowerCase(); for (var r = void 0 !== t ? t.toString() + "0x" : "", n = u.keccak(r + e).toString("hex"), o = "0x", a = 0; a < e.length; a++) parseInt(n[a], 16) >= 8 ? o += e[a].toUpperCase() : o += e[a]; return o }, t.isValidChecksumAddress = function(e, r) { return t.isValidAddress(e) && t.toChecksumAddress(e, r) === e }, t.generateAddress = function(t, r) { t = s.toBuffer(t); var n = new a(r); return n.isZero() ? u.rlphash([t, null]).slice(-20) : u.rlphash([t, e.from(n.toArray())]).slice(-20) }, t.generateAddress2 = function(t, r, i) { var o = s.toBuffer(t),
                    a = s.toBuffer(r),
                    c = s.toBuffer(i); return n(20 === o.length), n(32 === a.length), u.keccak256(e.concat([e.from("ff", "hex"), o, a, u.keccak256(c)])).slice(-20) }, t.isPrecompiled = function(e) { var t = s.unpad(e); return 1 === t.length && t[0] >= 1 && t[0] <= 8 }, t.isValidPrivate = function(e) { return o.privateKeyVerify(e) }, t.isValidPublic = function(t, r) { return void 0 === r && (r = !1), 64 === t.length ? o.publicKeyVerify(e.concat([e.from([4]), t])) : !!r && o.publicKeyVerify(t) }, t.pubToAddress = function(e, t) { return void 0 === t && (t = !1), e = s.toBuffer(e), t && 64 !== e.length && (e = o.publicKeyConvert(e, !1).slice(1)), n(64 === e.length), u.keccak(e).slice(-20) }, t.publicToAddress = t.pubToAddress, t.privateToAddress = function(e) { return t.publicToAddress(t.privateToPublic(e)) }, t.privateToPublic = function(e) { return e = s.toBuffer(e), o.publicKeyCreate(e, !1).slice(1) }, t.importPublic = function(e) { return 64 !== (e = s.toBuffer(e)).length && (e = o.publicKeyConvert(e, !1).slice(1)), e } }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }), t.hashPersonalMessage = t.isValidSignature = t.fromRpcSig = t.toRpcSig = t.ecrecover = t.ecsign = void 0; var n = r(943),
                i = r(48),
                o = r(860),
                a = r(944);

            function s(e, t) { return t ? e - (2 * t + 35) : e - 27 }

            function u(e) { return 0 === e || 1 === e }
            t.ecsign = function(e, t, r) { var i = n.sign(e, t),
                    o = i.recovery; return { r: i.signature.slice(0, 32), s: i.signature.slice(32, 64), v: r ? o + (2 * r + 35) : o + 27 } }, t.ecrecover = function(t, r, i, a, c) { var f = e.concat([o.setLength(i, 32), o.setLength(a, 32)], 64),
                    d = s(r, c); if (!u(d)) throw new Error("Invalid signature v value"); var l = n.recover(t, f, d); return n.publicKeyConvert(l, !1).slice(1) }, t.toRpcSig = function(t, r, n, i) { if (!u(s(t, i))) throw new Error("Invalid signature v value"); return o.bufferToHex(e.concat([o.setLengthLeft(r, 32), o.setLengthLeft(n, 32), o.toBuffer(t)])) }, t.fromRpcSig = function(e) { var t = o.toBuffer(e); if (65 !== t.length) throw new Error("Invalid signature length"); var r = t[64]; return r < 27 && (r += 27), { v: r, r: t.slice(0, 32), s: t.slice(32, 64) } }, t.isValidSignature = function(e, t, r, n, o) { void 0 === n && (n = !0); var a = new i("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                    c = new i("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16); if (32 !== t.length || 32 !== r.length) return !1; if (!u(s(e, o))) return !1; var f = new i(t),
                    d = new i(r); return !(f.isZero() || f.gt(c) || d.isZero() || d.gt(c)) && (!n || 1 !== d.cmp(a)) }, t.hashPersonalMessage = function(t) { var r = e.from("\x19Ethereum Signed Message:\n" + t.length.toString(), "utf-8"); return a.keccak(e.concat([r, t])) } }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict";
        (function(e) { Object.defineProperty(t, "__esModule", { value: !0 }), t.defineProperties = void 0; var n = r(932),
                i = r(839),
                o = r(880),
                a = r(860);
            t.defineProperties = function(t, r, s) { if (t.raw = [], t._fields = [], t.toJSON = function(e) { if (void 0 === e && (e = !1), e) { var r = {}; return t._fields.forEach((function(e) { r[e] = "0x" + t[e].toString("hex") })), r } return a.baToJSON(t.raw) }, t.serialize = function() { return o.encode(t.raw) }, r.forEach((function(r, i) {
                        function o() { return t.raw[i] }

                        function s(o) { "00" !== (o = a.toBuffer(o)).toString("hex") || r.allowZero || (o = e.allocUnsafe(0)), r.allowLess && r.length ? (o = a.stripZeros(o), n(r.length >= o.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === o.length || !r.length || n(r.length === o.length, "The field " + r.name + " must have byte length of " + r.length), t.raw[i] = o }
                        t._fields.push(r.name), Object.defineProperty(t, r.name, { enumerable: !0, configurable: !0, get: o, set: s }), r.default && (t[r.name] = r.default), r.alias && Object.defineProperty(t, r.alias, { enumerable: !1, configurable: !0, set: s, get: o }) })), s)
                    if ("string" === typeof s && (s = e.from(i.stripHexPrefix(s), "hex")), e.isBuffer(s) && (s = o.decode(s)), Array.isArray(s)) { if (s.length > t._fields.length) throw new Error("wrong number of fields in data");
                        s.forEach((function(e, r) { t[t._fields[r]] = a.toBuffer(e) })) } else { if ("object" !== typeof s) throw new Error("invalid data"); var u = Object.keys(s);
                        r.forEach((function(e) {-1 !== u.indexOf(e.name) && (t[e.name] = s[e.name]), -1 !== u.indexOf(e.alias) && (t[e.alias] = s[e.alias]) })) } } }).call(this, r(785).Buffer) }, function(e, t, r) {
        (function(t) {! function(r) { "use strict"; var n = function(e) { setTimeout(e, 0) }; "undefined" != typeof t && t && "function" == typeof t.nextTick && (n = t.nextTick), e.exports = function(e) { var t = { capacity: e || 1, current: 0, queue: [], firstHere: !1, take: function() { if (!1 === t.firstHere) { t.current++, t.firstHere = !0; var e = 1 } else e = 0; var r = { n: 1 }; "function" == typeof arguments[0] ? r.task = arguments[0] : r.n = arguments[0], arguments.length >= 2 && ("function" == typeof arguments[1] ? r.task = arguments[1] : r.n = arguments[1]); var n = r.task; if (r.task = function() { n(t.leave) }, t.current + r.n - e > t.capacity) return 1 === e && (t.current--, t.firstHere = !1), t.queue.push(r);
                            t.current += r.n - e, r.task(t.leave), 1 === e && (t.firstHere = !1) }, leave: function(e) { if (e = e || 1, t.current -= e, t.queue.length) { var r = t.queue[0];
                                r.n + t.current > t.capacity || (t.queue.shift(), t.current += r.n, n(r.task)) } else if (t.current < 0) throw new Error("leave called too many times.") }, available: function(e) { return e = e || 1, t.current + e <= t.capacity } }; return t } }() }).call(this, r(246)) }, function(e, t, r) { var n = r(936);
        e.exports = function(e, t, r) { e.sendAsync(n({ method: "eth_estimateGas", params: [t] }), (function(e, t) { if (e) return "no contract code at given address" === e.message ? r(null, "0xcf08") : r(e);
                r(null, t.result) })) } }, function(e, t, r) {
        (function(t) { var n = r(373).inherits,
                i = r(1465),
                o = r(857),
                a = r(882),
                s = r(1074).blockTagForPayload;

            function u(e) { this.nonceCache = {} }
            e.exports = u, n(u, a), u.prototype.handleRequest = function(e, r, n) { var a = this; switch (e.method) {
                    case "eth_getTransactionCount":
                        var u = s(e),
                            c = e.params[0].toLowerCase(),
                            f = a.nonceCache[c]; return void("pending" === u ? f ? n(null, f) : r((function(e, t, r) { if (e) return r();
                            void 0 === a.nonceCache[c] && (a.nonceCache[c] = t), r() })) : r());
                    case "eth_sendRawTransaction":
                        return void r((function(r, n, s) { if (r) return s(); var u = e.params[0],
                                c = (o.stripHexPrefix(u), t.from(o.stripHexPrefix(u), "hex"), new i(t.from(o.stripHexPrefix(u), "hex"))),
                                f = "0x" + c.getSenderAddress().toString("hex").toLowerCase(),
                                d = o.bufferToInt(c.nonce),
                                l = (++d).toString(16);
                            l.length % 2 && (l = "0" + l), l = "0x" + l, a.nonceCache[f] = l, s() }));
                    case "evm_revert":
                        return a.nonceCache = {}, void r();
                    default:
                        return void r() } } }).call(this, r(785).Buffer) }, function(e, t, r) { "use strict";
        (function(t) { var n = r(857),
                i = r(1466),
                o = n.BN,
                a = new o("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                s = function() {
                    function e(r) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), r = r || {}; var i = [{ name: "nonce", length: 32, allowLess: !0, default: new t([]) }, { name: "gasPrice", length: 32, allowLess: !0, default: new t([]) }, { name: "gasLimit", alias: "gas", length: 32, allowLess: !0, default: new t([]) }, { name: "to", allowZero: !0, length: 20, default: new t([]) }, { name: "value", length: 32, allowLess: !0, default: new t([]) }, { name: "data", alias: "input", allowZero: !0, default: new t([]) }, { name: "v", allowZero: !0, default: new t([28]) }, { name: "r", length: 32, allowZero: !0, allowLess: !0, default: new t([]) }, { name: "s", length: 32, allowZero: !0, allowLess: !0, default: new t([]) }];
                        n.defineProperties(this, i, r), Object.defineProperty(this, "from", { enumerable: !0, configurable: !0, get: this.getSenderAddress.bind(this) }); var o = n.bufferToInt(this.v),
                            a = Math.floor((o - 35) / 2);
                        a < 0 && (a = 0), this._chainId = a || r.chainId || 0, this._homestead = !0 } return e.prototype.toCreationAddress = function() { return "" === this.to.toString("hex") }, e.prototype.hash = function(e) { void 0 === e && (e = !0); var t = void 0; if (e) t = this.raw;
                        else if (this._chainId > 0) { var r = this.raw.slice();
                            this.v = this._chainId, this.r = 0, this.s = 0, t = this.raw, this.raw = r } else t = this.raw.slice(0, 6); return n.rlphash(t) }, e.prototype.getChainId = function() { return this._chainId }, e.prototype.getSenderAddress = function() { if (this._from) return this._from; var e = this.getSenderPublicKey(); return this._from = n.publicToAddress(e), this._from }, e.prototype.getSenderPublicKey = function() { if ((!this._senderPubKey || !this._senderPubKey.length) && !this.verifySignature()) throw new Error("Invalid Signature"); return this._senderPubKey }, e.prototype.verifySignature = function() { var e = this.hash(!1); if (this._homestead && 1 === new o(this.s).cmp(a)) return !1; try { var t = n.bufferToInt(this.v);
                            this._chainId > 0 && (t -= 2 * this._chainId + 8), this._senderPubKey = n.ecrecover(e, t, this.r, this.s) } catch (r) { return !1 } return !!this._senderPubKey }, e.prototype.sign = function(e) { var t = this.hash(!1),
                            r = n.ecsign(t, e);
                        this._chainId > 0 && (r.v += 2 * this._chainId + 8), Object.assign(this, r) }, e.prototype.getDataFee = function() { for (var e = this.raw[5], t = new o(0), r = 0; r < e.length; r++) 0 === e[r] ? t.iaddn(i.txDataZeroGas.v) : t.iaddn(i.txDataNonZeroGas.v); return t }, e.prototype.getBaseFee = function() { var e = this.getDataFee().iaddn(i.txGas.v); return this._homestead && this.toCreationAddress() && e.iaddn(i.txCreation.v), e }, e.prototype.getUpfrontCost = function() { return new o(this.gasLimit).imul(new o(this.gasPrice)).iadd(new o(this.value)) }, e.prototype.validate = function(e) { var t = []; return this.verifySignature() || t.push("Invalid Signature"), this.getBaseFee().cmp(new o(this.gasLimit)) > 0 && t.push(["gas limit is too low. Need at least " + this.getBaseFee()]), void 0 === e || !1 === e ? 0 === t.length : t.join(" ") }, e }();
            e.exports = s }).call(this, r(785).Buffer) }, function(e) { e.exports = JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}') }, function(e, t, r) { var n = r(247),
            i = r(794),
            o = r(795),
            a = r(937),
            s = r(1468),
            u = function(e) { "use strict";
                i(r, e); var t = o(r);

                function r() { return n(this, r), t.call(this, (function(e) { var t = e.blockTracker,
                            r = e.provider,
                            n = e.engine,
                            i = s({ blockTracker: t, provider: r }),
                            o = i.events,
                            a = i.middleware; return o.on("notification", (function(e) { return n.emit("data", null, e) })), a })) } return r }(a);
        e.exports = u }, function(e, t, r) { var n = r(3),
            i = r(798),
            o = r(938).default,
            a = r(1081),
            s = r(1077).createAsyncMiddleware,
            u = r(1076),
            c = r(859),
            f = c.unsafeRandomBytes,
            d = c.incrementHexInt,
            l = r(942);

        function h(e) { return { hash: e.hash, parentHash: e.parentHash, sha3Uncles: e.sha3Uncles, miner: e.miner, stateRoot: e.stateRoot, transactionsRoot: e.transactionsRoot, receiptsRoot: e.receiptsRoot, logsBloom: e.logsBloom, difficulty: e.difficulty, number: e.number, gasLimit: e.gasLimit, gasUsed: e.gasUsed, nonce: e.nonce, mixHash: e.mixHash, timestamp: e.timestamp, extraData: e.extraData } }
        e.exports = function(e) { var t = e.blockTracker,
                r = e.provider,
                c = {},
                p = u({ blockTracker: t, provider: r }),
                b = !1,
                v = new o,
                g = a({ eth_subscribe: s((function(e, t) { return y.apply(this, arguments) })), eth_unsubscribe: s((function(e, t) { return m.apply(this, arguments) })) }); return g.destroy = function() { for (var e in v.removeAllListeners(), c) c[e].destroy(), delete c[e];
                b = !0 }, { events: v, middleware: g };

            function y() { return (y = i(n.mark((function e(o, a) { var s, u, v, g, y, m, w; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (w = function(e) { var t = e.subId,
                                            r = e.filter; return r.on("update", (function(e) { return _(t, e) })), { type: s, destroy: function() { var e = i(n.mark((function e() { return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, p.uninstallFilter(r.idHex);
                                                            case 2:
                                                                return e.abrupt("return", e.sent);
                                                            case 3:
                                                            case "end":
                                                                return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }() } }, m = function(e) { var o = e.subId,
                                            a = { type: s, destroy: function() { var e = i(n.mark((function e() { return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    t.removeListener("sync", a.update);
                                                                case 1:
                                                                case "end":
                                                                    return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(), update: function() { var e = i(n.mark((function e(t) { var i, a, s, u, c; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return i = t.oldBlock, a = t.newBlock, s = a, u = d(i), e.next = 5, l({ provider: r, fromBlock: u, toBlock: s });
                                                                case 5:
                                                                    c = e.sent, c.map(h).forEach((function(e) { _(o, e) }));
                                                                case 8:
                                                                case "end":
                                                                    return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }; return t.on("sync", a.update), a }, !b) { e.next = 4; break } throw new Error("SubscriptionManager - attempting to use after destroying");
                            case 4:
                                s = o.params[0], u = f(16), e.t0 = s, e.next = "newHeads" === e.t0 ? 9 : "logs" === e.t0 ? 11 : 17; break;
                            case 9:
                                return v = m({ subId: u }), e.abrupt("break", 18);
                            case 11:
                                return g = o.params[1], e.next = 14, p.newLogFilter(g);
                            case 14:
                                return y = e.sent, v = w({ subId: u, filter: y }), e.abrupt("break", 18);
                            case 17:
                                throw new Error('SubscriptionManager - unsupported subscription type "'.concat(s, '"'));
                            case 18:
                                return c[u] = v, a.result = u, e.abrupt("return");
                            case 21:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function m() { return (m = i(n.mark((function e(t, r) { var i, o; return n.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!b) { e.next = 2; break } throw new Error("SubscriptionManager - attempting to use after destroying");
                            case 2:
                                if (i = t.params[0], o = c[i]) { e.next = 7; break } return r.result = !1, e.abrupt("return");
                            case 7:
                                return delete c[i], e.next = 10, o.destroy();
                            case 10:
                                r.result = !0;
                            case 11:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function _(e, t) { v.emit("notification", { jsonrpc: "2.0", method: "eth_subscription", params: { subscription: e, result: t } }) } } }, , , , , , , , , , , , , , , , , function(e, t, r) { "use strict";
        r.r(t), r.d(t, "Mutex", (function() { return a })), r.d(t, "Semaphore", (function() { return o })), r.d(t, "withTimeout", (function() { return s }));

        function n(e, t, r, n) { return new(r || (r = Promise))((function(i, o) {
                function a(e) { try { u(n.next(e)) } catch (t) { o(t) } }

                function s(e) { try { u(n.throw(e)) } catch (t) { o(t) } }

                function u(e) { var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) { e(t) }))).then(a, s) }
                u((n = n.apply(e, t || [])).next()) })) }

        function i(e, t) { var r, n, i, o, a = { label: 0, sent: function() { if (1 & i[0]) throw i[1]; return i[1] }, trys: [], ops: [] }; return o = { next: s(0), throw: s(1), return: s(2) }, "function" === typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

            function s(o) { return function(s) { return function(o) { if (r) throw new TypeError("Generator is already executing."); for (; a;) try { if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i; switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o; break;
                                case 4:
                                    return a.label++, { value: o[1], done: !1 };
                                case 5:
                                    a.label++, n = o[1], o = [0]; continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop(); continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) { a = 0; continue } if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) { a.label = o[1]; break } if (6 === o[0] && a.label < i[1]) { a.label = i[1], i = o; break } if (i && a.label < i[2]) { a.label = i[2], a.ops.push(o); break }
                                    i[2] && a.ops.pop(), a.trys.pop(); continue }
                            o = t.call(e, a) } catch (s) { o = [6, s], n = 0 } finally { r = i = 0 }
                        if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, s]) } } }
        Object.create;
        Object.create; var o = function() {
                function e(e) { if (this._maxConcurrency = e, this._queue = [], e <= 0) throw new Error("semaphore must be initialized to a positive value");
                    this._value = e } return e.prototype.acquire = function() { var e = this,
                        t = this.isLocked(),
                        r = new Promise((function(t) { return e._queue.push(t) })); return t || this._dispatch(), r }, e.prototype.runExclusive = function(e) { return n(this, void 0, void 0, (function() { var t, r, n; return i(this, (function(i) { switch (i.label) {
                                case 0:
                                    return [4, this.acquire()];
                                case 1:
                                    t = i.sent(), r = t[0], n = t[1], i.label = 2;
                                case 2:
                                    return i.trys.push([2, , 4, 5]), [4, e(r)];
                                case 3:
                                    return [2, i.sent()];
                                case 4:
                                    return n(), [7];
                                case 5:
                                    return [2] } })) })) }, e.prototype.isLocked = function() { return this._value <= 0 }, e.prototype.release = function() { if (this._maxConcurrency > 1) throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead"); if (this._currentReleaser) { var e = this._currentReleaser;
                        this._currentReleaser = void 0, e() } }, e.prototype._dispatch = function() { var e = this,
                        t = this._queue.shift(); if (t) { var r = !1;
                        this._currentReleaser = function() { r || (r = !0, e._value++, e._dispatch()) }, t([this._value--, this._currentReleaser]) } }, e }(),
            a = function() {
                function e() { this._semaphore = new o(1) } return e.prototype.acquire = function() { return n(this, void 0, void 0, (function() { var e; return i(this, (function(t) { switch (t.label) {
                                case 0:
                                    return [4, this._semaphore.acquire()];
                                case 1:
                                    return e = t.sent(), [2, e[1]] } })) })) }, e.prototype.runExclusive = function(e) { return this._semaphore.runExclusive((function() { return e() })) }, e.prototype.isLocked = function() { return this._semaphore.isLocked() }, e.prototype.release = function() { this._semaphore.release() }, e }();

        function s(e, t, r) { var o = this; return void 0 === r && (r = new Error("timeout")), { acquire: function() { return new Promise((function(a, s) { return n(o, void 0, void 0, (function() { var n, o; return i(this, (function(i) { switch (i.label) {
                                    case 0:
                                        return n = !1, setTimeout((function() { n = !0, s(r) }), t), [4, e.acquire()];
                                    case 1:
                                        return o = i.sent(), n ? (Array.isArray(o) ? o[1] : o)() : a(o), [2] } })) })) })) }, runExclusive: function(e) { return n(this, void 0, void 0, (function() { var t, r; return i(this, (function(n) { switch (n.label) {
                                case 0:
                                    t = function() {}, n.label = 1;
                                case 1:
                                    return n.trys.push([1, , 7, 8]), [4, this.acquire()];
                                case 2:
                                    return r = n.sent(), Array.isArray(r) ? (t = r[1], [4, e(r[0])]) : [3, 4];
                                case 3:
                                    return [2, n.sent()];
                                case 4:
                                    return t = r, [4, e()];
                                case 5:
                                    return [2, n.sent()];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return t(), [7];
                                case 8:
                                    return [2] } })) })) }, release: function() { e.release() }, isLocked: function() { return e.isLocked() } } } }, , , function(e, t, r) { "use strict";
        r.r(t), r.d(t, "useState", (function() { return G })), r.d(t, "useReducer", (function() { return Z })), r.d(t, "useEffect", (function() { return X })), r.d(t, "useLayoutEffect", (function() { return $ })), r.d(t, "useRef", (function() { return Q })), r.d(t, "useImperativeHandle", (function() { return ee })), r.d(t, "useMemo", (function() { return te })), r.d(t, "useCallback", (function() { return re })), r.d(t, "useContext", (function() { return ne })), r.d(t, "useDebugValue", (function() { return ie })), r.d(t, "useErrorBoundary", (function() { return oe })), r.d(t, "createElement", (function() { return b })), r.d(t, "createContext", (function() { return q })), r.d(t, "createRef", (function() { return g })), r.d(t, "Fragment", (function() { return y })), r.d(t, "Component", (function() { return m })), r.d(t, "version", (function() { return Ne })), r.d(t, "Children", (function() { return ye })), r.d(t, "render", (function() { return Oe })), r.d(t, "hydrate", (function() { return Pe })), r.d(t, "unmountComponentAtNode", (function() { return He })), r.d(t, "createPortal", (function() { return Re })), r.d(t, "createFactory", (function() { return qe })), r.d(t, "cloneElement", (function() { return De })), r.d(t, "isValidElement", (function() { return Ue })), r.d(t, "findDOMNode", (function() { return ze })), r.d(t, "PureComponent", (function() { return he })), r.d(t, "memo", (function() { return pe })), r.d(t, "forwardRef", (function() { return ve })), r.d(t, "unstable_batchedUpdates", (function() { return Fe })), r.d(t, "Suspense", (function() { return we })), r.d(t, "SuspenseList", (function() { return Se })), r.d(t, "lazy", (function() { return ke })); var n, i, o, a, s, u, c, f = {},
            d = [],
            l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

        function h(e, t) { for (var r in t) e[r] = t[r]; return e }

        function p(e) { var t = e.parentNode;
            t && t.removeChild(e) }

        function b(e, t, r) { var n, i = arguments,
                o = {}; for (n in t) "key" !== n && "ref" !== n && (o[n] = t[n]); if (arguments.length > 3)
                for (r = [r], n = 3; n < arguments.length; n++) r.push(i[n]); if (null != r && (o.children = r), "function" == typeof e && null != e.defaultProps)
                for (n in e.defaultProps) void 0 === o[n] && (o[n] = e.defaultProps[n]); return v(e, o, t && t.key, t && t.ref, null) }

        function v(e, t, r, i, o) { var a = { type: e, props: t, key: r, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o }; return null == o && (a.__v = a), n.vnode && n.vnode(a), a }

        function g() { return {} }

        function y(e) { return e.children }

        function m(e, t) { this.props = e, this.context = t }

        function _(e, t) { if (null == t) return e.__ ? _(e.__, e.__.__k.indexOf(e) + 1) : null; for (var r; t < e.__k.length; t++)
                if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
            return "function" == typeof e.type ? _(e) : null }

        function w(e) { var t, r; if (null != (e = e.__) && null != e.__c) { for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                    if (null != (r = e.__k[t]) && null != r.__e) { e.__e = e.__c.base = r.__e; break }
                return w(e) } }

        function x(e) {
            (!e.__d && (e.__d = !0) && i.push(e) && !o++ || s !== n.debounceRendering) && ((s = n.debounceRendering) || a)(k) }

        function k() { for (var e; o = i.length;) e = i.sort((function(e, t) { return e.__v.__b - t.__v.__b })), i = [], e.some((function(e) { var t, r, n, i, o, a, s;
                e.__d && (a = (o = (t = e).__v).__e, (s = t.__P) && (r = [], (n = h({}, o)).__v = n, i = T(s, o, n, t.__n, void 0 !== s.ownerSVGElement, null, r, null == a ? _(o) : a), C(r, o), i != a && w(o))) })) }

        function S(e, t, r, n, i, o, a, s, u) { var c, l, h, b, v, g, y, m = r && r.__k || d,
                w = m.length; if (s == f && (s = null != o ? o[0] : w ? _(r, 0) : null), c = 0, t.__k = E(t.__k, (function(r) { if (null != r) { if (r.__ = t, r.__b = t.__b + 1, null === (h = m[c]) || h && r.key == h.key && r.type === h.type) m[c] = void 0;
                        else
                            for (l = 0; l < w; l++) { if ((h = m[l]) && r.key == h.key && r.type === h.type) { m[l] = void 0; break }
                                h = null }
                        if (b = T(e, r, h = h || f, n, i, o, a, s, u), (l = r.ref) && h.ref != l && (y || (y = []), h.ref && y.push(h.ref, null, r), y.push(l, r.__c || b, r)), null != b) { var d; if (null == g && (g = b), void 0 !== r.__d) d = r.__d, r.__d = void 0;
                            else if (o == h || b != s || null == b.parentNode) { e: if (null == s || s.parentNode !== e) e.appendChild(b), d = null;
                                    else { for (v = s, l = 0;
                                            (v = v.nextSibling) && l < w; l += 2)
                                            if (v == b) break e;
                                        e.insertBefore(b, s), d = s }
                                    "option" == t.type && (e.value = "") }
                            s = void 0 !== d ? d : b.nextSibling, "function" == typeof t.type && (t.__d = s) } else s && h.__e == s && s.parentNode != e && (s = _(h)) } return c++, r })), t.__e = g, null != o && "function" != typeof t.type)
                for (c = o.length; c--;) null != o[c] && p(o[c]); for (c = w; c--;) null != m[c] && I(m[c], m[c]); if (y)
                for (c = 0; c < y.length; c++) P(y[c], y[++c], y[++c]) }

        function E(e, t, r) { if (null == r && (r = []), null == e || "boolean" == typeof e) t && r.push(t(null));
            else if (Array.isArray(e))
                for (var n = 0; n < e.length; n++) E(e[n], t, r);
            else r.push(t ? t("string" == typeof e || "number" == typeof e ? v(null, e, null, null, e) : null != e.__e || null != e.__c ? v(e.type, e.props, e.key, null, e.__v) : e) : e); return r }

        function M(e, t, r) { "-" === t[0] ? e.setProperty(t, r) : e[t] = "number" == typeof r && !1 === l.test(t) ? r + "px" : null == r ? "" : r }

        function A(e, t, r, n, i) { var o, a, s, u, c; if (i ? "className" === t && (t = "class") : "class" === t && (t = "className"), "style" === t)
                if (o = e.style, "string" == typeof r) o.cssText = r;
                else { if ("string" == typeof n && (o.cssText = "", n = null), n)
                        for (u in n) r && u in r || M(o, u, ""); if (r)
                        for (c in r) n && r[c] === n[c] || M(o, c, r[c]) }
            else "o" === t[0] && "n" === t[1] ? (a = t !== (t = t.replace(/Capture$/, "")), s = t.toLowerCase(), t = (s in e ? s : t).slice(2), r ? (n || e.addEventListener(t, R, a), (e.l || (e.l = {}))[t] = r) : e.removeEventListener(t, R, a)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && !i && t in e ? e[t] = null == r ? "" : r : "function" != typeof r && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == r || !1 === r ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : null == r || !1 === r && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, r)) }

        function R(e) { this.l[e.type](n.event ? n.event(e) : e) }

        function T(e, t, r, i, o, a, s, u, c) { var f, d, l, p, b, v, g, _, w, x, k = t.type; if (void 0 !== t.constructor) return null;
            (f = n.__b) && f(t); try { e: if ("function" == typeof k) { if (_ = t.props, w = (f = k.contextType) && i[f.__c], x = f ? w ? w.props.value : f.__ : i, r.__c ? g = (d = t.__c = r.__c).__ = d.__E : ("prototype" in k && k.prototype.render ? t.__c = d = new k(_, x) : (t.__c = d = new m(_, x), d.constructor = k, d.render = B), w && w.sub(d), d.props = _, d.state || (d.state = {}), d.context = x, d.__n = i, l = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != k.getDerivedStateFromProps && (d.__s == d.state && (d.__s = h({}, d.__s)), h(d.__s, k.getDerivedStateFromProps(_, d.__s))), p = d.props, b = d.state, l) null == k.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                        else { if (null == k.getDerivedStateFromProps && _ !== p && null != d.componentWillReceiveProps && d.componentWillReceiveProps(_, x), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(_, d.__s, x) || t.__v === r.__v && !d.__) { for (d.props = _, d.state = d.__s, t.__v !== r.__v && (d.__d = !1), d.__v = t, t.__e = r.__e, t.__k = r.__k, d.__h.length && s.push(d), f = 0; f < t.__k.length; f++) t.__k[f] && (t.__k[f].__ = t); break e }
                            null != d.componentWillUpdate && d.componentWillUpdate(_, d.__s, x), null != d.componentDidUpdate && d.__h.push((function() { d.componentDidUpdate(p, b, v) })) }
                        d.context = x, d.props = _, d.state = d.__s, (f = n.__r) && f(t), d.__d = !1, d.__v = t, d.__P = e, f = d.render(d.props, d.state, d.context), t.__k = null != f && f.type == y && null == f.key ? f.props.children : Array.isArray(f) ? f : [f], null != d.getChildContext && (i = h(h({}, i), d.getChildContext())), l || null == d.getSnapshotBeforeUpdate || (v = d.getSnapshotBeforeUpdate(p, b)), S(e, t, r, i, o, a, s, u, c), d.base = t.__e, d.__h.length && s.push(d), g && (d.__E = d.__ = null), d.__e = !1 } else null == a && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = O(r.__e, t, r, i, o, a, s, c);
                    (f = n.diffed) && f(t) }
            catch (e) { t.__v = null, n.__e(e, t, r) } return t.__e }

        function C(e, t) { n.__c && n.__c(t, e), e.some((function(t) { try { e = t.__h, t.__h = [], e.some((function(e) { e.call(t) })) } catch (e) { n.__e(e, t.__v) } })) }

        function O(e, t, r, n, i, o, a, s) { var u, c, l, h, p, b = r.props,
                v = t.props; if (i = "svg" === t.type || i, null != o)
                for (u = 0; u < o.length; u++)
                    if (null != (c = o[u]) && ((null === t.type ? 3 === c.nodeType : c.localName === t.type) || e == c)) { e = c, o[u] = null; break }
            if (null == e) { if (null === t.type) return document.createTextNode(v);
                e = i ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, v.is && { is: v.is }), o = null, s = !1 } if (null === t.type) b !== v && e.data != v && (e.data = v);
            else { if (null != o && (o = d.slice.call(e.childNodes)), l = (b = r.props || f).dangerouslySetInnerHTML, h = v.dangerouslySetInnerHTML, !s) { if (b === f)
                        for (b = {}, p = 0; p < e.attributes.length; p++) b[e.attributes[p].name] = e.attributes[p].value;
                    (h || l) && (h && l && h.__html == l.__html || (e.innerHTML = h && h.__html || "")) }(function(e, t, r, n, i) { var o; for (o in r) "children" === o || "key" === o || o in t || A(e, o, null, r[o], n); for (o in t) i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || r[o] === t[o] || A(e, o, t[o], r[o], n) })(e, v, b, i, s), h ? t.__k = [] : (t.__k = t.props.children, S(e, t, r, n, "foreignObject" !== t.type && i, o, a, f, s)), s || ("value" in v && void 0 !== (u = v.value) && u !== e.value && A(e, "value", u, b.value, !1), "checked" in v && void 0 !== (u = v.checked) && u !== e.checked && A(e, "checked", u, b.checked, !1)) } return e }

        function P(e, t, r) { try { "function" == typeof e ? e(t) : e.current = t } catch (e) { n.__e(e, r) } }

        function I(e, t, r) { var i, o, a; if (n.unmount && n.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || P(i, null, t)), r || "function" == typeof e.type || (r = null != (o = e.__e)), e.__e = e.__d = void 0, null != (i = e.__c)) { if (i.componentWillUnmount) try { i.componentWillUnmount() } catch (e) { n.__e(e, t) }
                i.base = i.__P = null } if (i = e.__k)
                for (a = 0; a < i.length; a++) i[a] && I(i[a], t, r);
            null != o && p(o) }

        function B(e, t, r) { return this.constructor(e, r) }

        function L(e, t, r) { var i, o, a;
            n.__ && n.__(e, t), o = (i = r === u) ? null : r && r.__k || t.__k, e = b(y, null, [e]), a = [], T(t, (i ? t : r || t).__k = e, o || f, f, void 0 !== t.ownerSVGElement, r && !i ? [r] : o ? null : d.slice.call(t.childNodes), a, r || f, i), C(a, e) }

        function j(e, t) { L(e, t, u) }

        function N(e, t) { var r, n; for (n in t = h(h({}, e.props), t), arguments.length > 2 && (t.children = d.slice.call(arguments, 2)), r = {}, t) "key" !== n && "ref" !== n && (r[n] = t[n]); return v(e.type, r, t.key || e.key, t.ref || e.ref, null) }

        function q(e) { var t = {},
                r = { __c: "__cC" + c++, __: e, Consumer: function(e, t) { return e.children(t) }, Provider: function(e) { var n, i = this; return this.getChildContext || (n = [], this.getChildContext = function() { return t[r.__c] = i, t }, this.shouldComponentUpdate = function(e) { i.props.value !== e.value && n.some((function(t) { t.context = e.value, x(t) })) }, this.sub = function(e) { n.push(e); var t = e.componentWillUnmount;
                            e.componentWillUnmount = function() { n.splice(n.indexOf(e), 1), t && t.call(e) } }), e.children } }; return r.Consumer.contextType = r, r.Provider.__ = r, r }
        n = { __e: function(e, t) { for (var r, n; t = t.__;)
                    if ((r = t.__c) && !r.__) try { if (r.constructor && null != r.constructor.getDerivedStateFromError && (n = !0, r.setState(r.constructor.getDerivedStateFromError(e))), null != r.componentDidCatch && (n = !0, r.componentDidCatch(e)), n) return x(r.__E = r) } catch (t) { e = t }
                    throw e } }, m.prototype.setState = function(e, t) { var r;
            r = this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof e && (e = e(r, this.props)), e && h(r, e), null != e && this.__v && (t && this.__h.push(t), x(this)) }, m.prototype.forceUpdate = function(e) { this.__v && (this.__e = !0, e && this.__h.push(e), x(this)) }, m.prototype.render = y, i = [], o = 0, a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = f, c = 0; var U, D, H, z = 0,
            F = [],
            K = n.__r,
            W = n.diffed,
            V = n.__c,
            J = n.unmount;

        function Y(e, t) { n.__h && n.__h(D, e, z || t), z = 0; var r = D.__H || (D.__H = { __: [], __h: [] }); return e >= r.__.length && r.__.push({}), r.__[e] }

        function G(e) { return z = 1, Z(fe, e) }

        function Z(e, t, r) { var n = Y(U++, 2); return n.__c || (n.__c = D, n.__ = [r ? r(t) : fe(void 0, t), function(t) { var r = e(n.__[0], t);
                n.__[0] !== r && (n.__[0] = r, n.__c.setState({})) }]), n.__ }

        function X(e, t) { var r = Y(U++, 3);!n.__s && ce(r.__H, t) && (r.__ = e, r.__H = t, D.__H.__h.push(r)) }

        function $(e, t) { var r = Y(U++, 4);!n.__s && ce(r.__H, t) && (r.__ = e, r.__H = t, D.__h.push(r)) }

        function Q(e) { return z = 5, te((function() { return { current: e } }), []) }

        function ee(e, t, r) { z = 6, $((function() { "function" == typeof e ? e(t()) : e && (e.current = t()) }), null == r ? r : r.concat(e)) }

        function te(e, t) { var r = Y(U++, 7); return ce(r.__H, t) ? (r.__H = t, r.__h = e, r.__ = e()) : r.__ }

        function re(e, t) { return z = 8, te((function() { return e }), t) }

        function ne(e) { var t = D.context[e.__c],
                r = Y(U++, 9); return r.__c = e, t ? (null == r.__ && (r.__ = !0, t.sub(D)), t.props.value) : e.__ }

        function ie(e, t) { n.useDebugValue && n.useDebugValue(t ? t(e) : e) }

        function oe(e) { var t = Y(U++, 10),
                r = G(); return t.__ = e, D.componentDidCatch || (D.componentDidCatch = function(e) { t.__ && t.__(e), r[1](e) }), [r[0], function() { r[1](void 0) }] }

        function ae() { F.some((function(e) { if (e.__P) try { e.__H.__h.forEach(se), e.__H.__h.forEach(ue), e.__H.__h = [] } catch (t) { return e.__H.__h = [], n.__e(t, e.__v), !0 } })), F = [] }

        function se(e) { e.t && e.t() }

        function ue(e) { var t = e.__(); "function" == typeof t && (e.t = t) }

        function ce(e, t) { return !e || t.some((function(t, r) { return t !== e[r] })) }

        function fe(e, t) { return "function" == typeof t ? t(e) : t }

        function de(e, t) { for (var r in t) e[r] = t[r]; return e }

        function le(e, t) { for (var r in e)
                if ("__source" !== r && !(r in t)) return !0;
            for (var n in t)
                if ("__source" !== n && e[n] !== t[n]) return !0;
            return !1 }
        n.__r = function(e) { K && K(e), U = 0, (D = e.__c).__H && (D.__H.__h.forEach(se), D.__H.__h.forEach(ue), D.__H.__h = []) }, n.diffed = function(e) { W && W(e); var t = e.__c; if (t) { var r = t.__H;
                r && r.__h.length && (1 !== F.push(t) && H === n.requestAnimationFrame || ((H = n.requestAnimationFrame) || function(e) { var t, r = function() { clearTimeout(n), cancelAnimationFrame(t), setTimeout(e) },
                        n = setTimeout(r, 100); "undefined" != typeof window && (t = requestAnimationFrame(r)) })(ae)) } }, n.__c = function(e, t) { t.some((function(e) { try { e.__h.forEach(se), e.__h = e.__h.filter((function(e) { return !e.__ || ue(e) })) } catch (r) { t.some((function(e) { e.__h && (e.__h = []) })), t = [], n.__e(r, e.__v) } })), V && V(e, t) }, n.unmount = function(e) { J && J(e); var t = e.__c; if (t) { var r = t.__H; if (r) try { r.__.forEach((function(e) { return e.t && e.t() })) } catch (e) { n.__e(e, t.__v) } } }; var he = function(e) { var t, r;

            function n(t) { var r; return (r = e.call(this, t) || this).isPureReactComponent = !0, r } return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, n.prototype.shouldComponentUpdate = function(e, t) { return le(this.props, e) || le(this.state, t) }, n }(m);

        function pe(e, t) {
            function r(e) { var r = this.props.ref,
                    n = r == e.ref; return !n && r && (r.call ? r(null) : r.current = null), t ? !t(this.props, e) || !n : le(this.props, e) }

            function n(t) { return this.shouldComponentUpdate = r, b(e, de({}, t)) } return n.prototype.isReactComponent = !0, n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.t = !0, n } var be = n.__b;

        function ve(e) {
            function t(t) { var r = de({}, t); return delete r.ref, e(r, t.ref) } return t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t }
        n.__b = function(e) { e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), be && be(e) }; var ge = function(e, t) { return e ? E(e).reduce((function(e, r, n) { return e.concat(t(r, n)) }), []) : null },
            ye = { map: ge, forEach: ge, count: function(e) { return e ? E(e).length : 0 }, only: function(e) { if (1 !== (e = E(e)).length) throw new Error("Children.only() expects only one child."); return e[0] }, toArray: E },
            me = n.__e;

        function _e(e) { return e && ((e = de({}, e)).__c = null, e.__k = e.__k && e.__k.map(_e)), e }

        function we() { this.__u = 0, this.o = null, this.__b = null }

        function xe(e) { var t = e.__.__c; return t && t.u && t.u(e) }

        function ke(e) { var t, r, n;

            function i(i) { if (t || (t = e()).then((function(e) { r = e.default || e }), (function(e) { n = e })), n) throw n; if (!r) throw t; return b(r, i) } return i.displayName = "Lazy", i.t = !0, i }

        function Se() { this.i = null, this.l = null }
        n.__e = function(e, t, r) { if (e.then)
                for (var n, i = t; i = i.__;)
                    if ((n = i.__c) && n.__c) return n.__c(e, t.__c);
            me(e, t, r) }, (we.prototype = new m).__c = function(e, t) { var r = this;
            null == r.o && (r.o = []), r.o.push(t); var n = xe(r.__v),
                i = !1,
                o = function() { i || (i = !0, n ? n(a) : a()) };
            t.__c = t.componentWillUnmount, t.componentWillUnmount = function() { o(), t.__c && t.__c() }; var a = function() { var e; if (!--r.__u)
                    for (r.__v.__k[0] = r.state.u, r.setState({ u: r.__b = null }); e = r.o.pop();) e.forceUpdate() };
            r.__u++ || r.setState({ u: r.__b = r.__v.__k[0] }), e.then(o, o) }, we.prototype.render = function(e, t) { return this.__b && (this.__v.__k[0] = _e(this.__b), this.__b = null), [b(m, null, t.u ? null : e.children), t.u && e.fallback] }; var Ee = function(e, t, r) { if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
                for (r = e.i; r;) { for (; r.length > 3;) r.pop()(); if (r[1] < r[0]) break;
                    e.i = r = r[2] } };
        (Se.prototype = new m).u = function(e) { var t = this,
                r = xe(t.__v),
                n = t.l.get(e); return n[0]++,
                function(i) { var o = function() { t.props.revealOrder ? (n.push(i), Ee(t, e, n)) : i() };
                    r ? r(o) : o() } }, Se.prototype.render = function(e) { this.i = null, this.l = new Map; var t = E(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse(); for (var r = t.length; r--;) this.l.set(t[r], this.i = [1, 0, this.i]); return e.children }, Se.prototype.componentDidUpdate = Se.prototype.componentDidMount = function() { var e = this;
            e.l.forEach((function(t, r) { Ee(e, r, t) })) }; var Me = function() {
            function e() {} var t = e.prototype; return t.getChildContext = function() { return this.props.context }, t.render = function(e) { return e.children }, e }();

        function Ae(e) { var t = this,
                r = e.container,
                n = b(Me, { context: t.context }, e.vnode); return t.s && t.s !== r && (t.v.parentNode && t.s.removeChild(t.v), I(t.h), t.p = !1), e.vnode ? t.p ? (r.__k = t.__k, L(n, r), t.__k = r.__k) : (t.v = document.createTextNode(""), j("", r), r.appendChild(t.v), t.p = !0, t.s = r, L(n, r, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), I(t.h)), t.h = n, t.componentWillUnmount = function() { t.v.parentNode && t.s.removeChild(t.v), I(t.h) }, null }

        function Re(e, t) { return b(Ae, { vnode: e, container: t }) } var Te = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
        m.prototype.isReactComponent = {}; var Ce = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

        function Oe(e, t, r) { if (null == t.__k)
                for (; t.firstChild;) t.removeChild(t.firstChild); return L(e, t), "function" == typeof r && r(), e ? e.__c : null }

        function Pe(e, t, r) { return j(e, t), "function" == typeof r && r(), e ? e.__c : null } var Ie = n.event;

        function Be(e, t) { e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, { configurable: !1, get: function() { return this["UNSAFE_" + t] }, set: function(e) { this["UNSAFE_" + t] = e } }) }
        n.event = function(e) { Ie && (e = Ie(e)), e.persist = function() {}; var t = !1,
                r = !1,
                n = e.stopPropagation;
            e.stopPropagation = function() { n.call(e), t = !0 }; var i = e.preventDefault; return e.preventDefault = function() { i.call(e), r = !0 }, e.isPropagationStopped = function() { return t }, e.isDefaultPrevented = function() { return r }, e.nativeEvent = e }; var Le = { configurable: !0, get: function() { return this.class } },
            je = n.vnode;
        n.vnode = function(e) { e.$$typeof = Ce; var t = e.type,
                r = e.props; if (t) { if (r.class != r.className && (Le.enumerable = "className" in r, null != r.className && (r.class = r.className), Object.defineProperty(r, "className", Le)), "function" != typeof t) { var n, i, o; for (o in r.defaultValue && void 0 !== r.value && (r.value || 0 === r.value || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && "select" === t && (E(r.children).forEach((function(e) {-1 != r.value.indexOf(e.props.value) && (e.props.selected = !0) })), delete r.value), r)
                        if (n = Te.test(o)) break;
                    if (n)
                        for (o in i = e.props = {}, r) i[Te.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] = r[o] }! function(t) { var r = e.type,
                        n = e.props; if (n && "string" == typeof r) { var i = {}; for (var o in n) /^on(Ani|Tra|Tou)/.test(o) && (n[o.toLowerCase()] = n[o], delete n[o]), i[o.toLowerCase()] = o; if (i.ondoubleclick && (n.ondblclick = n[i.ondoubleclick], delete n[i.ondoubleclick]), i.onbeforeinput && (n.onbeforeinput = n[i.onbeforeinput], delete n[i.onbeforeinput]), i.onchange && ("textarea" === r || "input" === r.toLowerCase() && !/^fil|che|ra/i.test(n.type))) { var a = i.oninput || "oninput";
                            n[a] || (n[a] = n[i.onchange], delete n[i.onchange]) } } }(), "function" == typeof t && !t.m && t.prototype && (Be(t.prototype, "componentWillMount"), Be(t.prototype, "componentWillReceiveProps"), Be(t.prototype, "componentWillUpdate"), t.m = !0) }
            je && je(e) }; var Ne = "16.8.0";

        function qe(e) { return b.bind(null, e) }

        function Ue(e) { return !!e && e.$$typeof === Ce }

        function De(e) { return Ue(e) ? N.apply(null, arguments) : e }

        function He(e) { return !!e.__k && (L(null, e), !0) }

        function ze(e) { return e && (e.base || 1 === e.nodeType && e) || null } var Fe = function(e, t) { return e(t) };
        t.default = { useState: G, useReducer: Z, useEffect: X, useLayoutEffect: $, useRef: Q, useImperativeHandle: ee, useMemo: te, useCallback: re, useContext: ne, useDebugValue: ie, version: "16.8.0", Children: ye, render: Oe, hydrate: Oe, unmountComponentAtNode: He, createPortal: Re, createElement: b, createContext: q, createFactory: qe, cloneElement: De, createRef: g, Fragment: y, isValidElement: Ue, findDOMNode: ze, Component: m, PureComponent: he, memo: pe, forwardRef: ve, unstable_batchedUpdates: Fe, Suspense: we, SuspenseList: Se, lazy: ke } }])
]);
//# sourceMappingURL=4.51aa43c6.chunk.js.map