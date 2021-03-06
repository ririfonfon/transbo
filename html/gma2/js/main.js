! function() {
    var n = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global,
        r = n._,
        t = Array.prototype,
        e = Object.prototype,
        u = Function.prototype,
        i = t.push,
        o = t.slice,
        a = e.toString,
        c = e.hasOwnProperty,
        l = Array.isArray,
        f = Object.keys,
        s = u.bind,
        p = Object.create,
        h = function() {},
        v = function(n) { return n instanceof v ? n : this instanceof v ? void(this._wrapped = n) : new v(n) };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : n._ = v, v.VERSION = "1.8.3";
    var g = function(n, r, t) {
            if (void 0 === r) return n;
            switch (null == t ? 3 : t) {
                case 1:
                    return function(t) { return n.call(r, t) };
                case 2:
                    return function(t, e) { return n.call(r, t, e) };
                case 3:
                    return function(t, e, u) { return n.call(r, t, e, u) };
                case 4:
                    return function(t, e, u, i) { return n.call(r, t, e, u, i) }
            }
            return function() { return n.apply(r, arguments) }
        },
        y = function(n, r, t) { return null == n ? v.identity : v.isFunction(n) ? g(n, r, t) : v.isObject(n) ? v.matcher(n) : v.property(n) };
    v.iteratee = function(n, r) { return y(n, r, 1 / 0) };
    var d = function(n, r) {
            return r = null == r ? n.length - 1 : +r,
                function() {
                    for (var t = Math.max(arguments.length - r, 0), e = Array(t), u = 0; t > u; u++) e[u] = arguments[u + r];
                    switch (r) {
                        case 0:
                            return n.call(this, e);
                        case 1:
                            return n.call(this, arguments[0], e);
                        case 2:
                            return n.call(this, arguments[0], arguments[1], e)
                    }
                    var i = Array(r + 1);
                    for (u = 0; r > u; u++) i[u] = arguments[u];
                    return i[r] = e, n.apply(this, i)
                }
        },
        m = function(n) {
            if (!v.isObject(n)) return {};
            if (p) return p(n);
            h.prototype = n;
            var r = new h;
            return h.prototype = null, r
        },
        b = function(n) { return function(r) { return null == r ? void 0 : r[n] } },
        x = Math.pow(2, 53) - 1,
        j = b("length"),
        _ = function(n) { var r = j(n); return "number" == typeof r && r >= 0 && x >= r };
    v.each = v.forEach = function(n, r, t) {
        r = g(r, t);
        var e, u;
        if (_(n))
            for (e = 0, u = n.length; u > e; e++) r(n[e], e, n);
        else { var i = v.keys(n); for (e = 0, u = i.length; u > e; e++) r(n[i[e]], i[e], n) }
        return n
    }, v.map = v.collect = function(n, r, t) {
        r = y(r, t);
        for (var e = !_(n) && v.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;
            i[o] = r(n[a], a, n)
        }
        return i
    };
    var w = function(n) {
        var r = function(r, t, e, u) {
            var i = !_(r) && v.keys(r),
                o = (i || r).length,
                a = n > 0 ? 0 : o - 1;
            for (u || (e = r[i ? i[a] : a], a += n); a >= 0 && o > a; a += n) {
                var c = i ? i[a] : a;
                e = t(e, r[c], c, r)
            }
            return e
        };
        return function(n, t, e, u) { var i = arguments.length >= 3; return r(n, g(t, u, 4), e, i) }
    };
    v.reduce = v.foldl = v.inject = w(1), v.reduceRight = v.foldr = w(-1), v.find = v.detect = function(n, r, t) { var e; return e = _(n) ? v.findIndex(n, r, t) : v.findKey(n, r, t), void 0 !== e && -1 !== e ? n[e] : void 0 }, v.filter = v.select = function(n, r, t) { var e = []; return r = y(r, t), v.each(n, function(n, t, u) { r(n, t, u) && e.push(n) }), e }, v.reject = function(n, r, t) { return v.filter(n, v.negate(y(r)), t) }, v.every = v.all = function(n, r, t) { r = y(r, t); for (var e = !_(n) && v.keys(n), u = (e || n).length, i = 0; u > i; i++) { var o = e ? e[i] : i; if (!r(n[o], o, n)) return !1 } return !0 }, v.some = v.any = function(n, r, t) { r = y(r, t); for (var e = !_(n) && v.keys(n), u = (e || n).length, i = 0; u > i; i++) { var o = e ? e[i] : i; if (r(n[o], o, n)) return !0 } return !1 }, v.contains = v.includes = v.include = function(n, r, t, e) { return _(n) || (n = v.values(n)), ("number" != typeof t || e) && (t = 0), v.indexOf(n, r, t) >= 0 }, v.invoke = d(function(n, r, t) { var e = v.isFunction(r); return v.map(n, function(n) { var u = e ? r : n[r]; return null == u ? u : u.apply(n, t) }) }), v.pluck = function(n, r) { return v.map(n, v.property(r)) }, v.where = function(n, r) { return v.filter(n, v.matcher(r)) }, v.findWhere = function(n, r) { return v.find(n, v.matcher(r)) }, v.max = function(n, r, t) {
        var e, u, i = -(1 / 0),
            o = -(1 / 0);
        if (null == r && null != n) { n = _(n) ? n : v.values(n); for (var a = 0, c = n.length; c > a; a++) e = n[a], e > i && (i = e) } else r = y(r, t), v.each(n, function(n, t, e) { u = r(n, t, e), (u > o || u === -(1 / 0) && i === -(1 / 0)) && (i = n, o = u) });
        return i
    }, v.min = function(n, r, t) {
        var e, u, i = 1 / 0,
            o = 1 / 0;
        if (null == r && null != n) { n = _(n) ? n : v.values(n); for (var a = 0, c = n.length; c > a; a++) e = n[a], i > e && (i = e) } else r = y(r, t), v.each(n, function(n, t, e) { u = r(n, t, e), (o > u || u === 1 / 0 && i === 1 / 0) && (i = n, o = u) });
        return i
    }, v.shuffle = function(n) { for (var r, t = _(n) ? n : v.values(n), e = t.length, u = Array(e), i = 0; e > i; i++) r = v.random(0, i), r !== i && (u[i] = u[r]), u[r] = t[i]; return u }, v.sample = function(n, r, t) { return null == r || t ? (_(n) || (n = v.values(n)), n[v.random(n.length - 1)]) : v.shuffle(n).slice(0, Math.max(0, r)) }, v.sortBy = function(n, r, t) {
        return r = y(r, t), v.pluck(v.map(n, function(n, t, e) { return { value: n, index: t, criteria: r(n, t, e) } }).sort(function(n, r) {
            var t = n.criteria,
                e = r.criteria;
            if (t !== e) { if (t > e || void 0 === t) return 1; if (e > t || void 0 === e) return -1 }
            return n.index - r.index
        }), "value")
    };
    var A = function(n, r) {
        return function(t, e, u) {
            var i = r ? [
                [],
                []
            ] : {};
            return e = y(e, u), v.each(t, function(r, u) {
                var o = e(r, u, t);
                n(i, r, o)
            }), i
        }
    };
    v.groupBy = A(function(n, r, t) { v.has(n, t) ? n[t].push(r) : n[t] = [r] }), v.indexBy = A(function(n, r, t) { n[t] = r }), v.countBy = A(function(n, r, t) { v.has(n, t) ? n[t]++ : n[t] = 1 }), v.toArray = function(n) { return n ? v.isArray(n) ? o.call(n) : _(n) ? v.map(n, v.identity) : v.values(n) : [] }, v.size = function(n) { return null == n ? 0 : _(n) ? n.length : v.keys(n).length }, v.partition = A(function(n, r, t) { n[t ? 0 : 1].push(r) }, !0), v.first = v.head = v.take = function(n, r, t) { return null == n ? void 0 : null == r || t ? n[0] : v.initial(n, n.length - r) }, v.initial = function(n, r, t) { return o.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r))) }, v.last = function(n, r, t) { return null == n ? void 0 : null == r || t ? n[n.length - 1] : v.rest(n, Math.max(0, n.length - r)) }, v.rest = v.tail = v.drop = function(n, r, t) { return o.call(n, null == r || t ? 1 : r) }, v.compact = function(n) { return v.filter(n, v.identity) };
    var O = function(n, r, t, e) {
        for (var u = [], i = 0, o = e || 0, a = j(n); a > o; o++) {
            var c = n[o];
            if (_(c) && (v.isArray(c) || v.isArguments(c))) {
                r || (c = O(c, r, t));
                var l = 0,
                    f = c.length;
                for (u.length += f; f > l;) u[i++] = c[l++]
            } else t || (u[i++] = c)
        }
        return u
    };
    v.flatten = function(n, r) { return O(n, r, !1) }, v.without = d(function(n, r) { return v.difference(n, r) }), v.uniq = v.unique = function(n, r, t, e) {
        v.isBoolean(r) || (e = t, t = r, r = !1), null != t && (t = y(t, e));
        for (var u = [], i = [], o = 0, a = j(n); a > o; o++) {
            var c = n[o],
                l = t ? t(c, o, n) : c;
            r ? (o && i === l || u.push(c), i = l) : t ? v.contains(i, l) || (i.push(l), u.push(c)) : v.contains(u, c) || u.push(c)
        }
        return u
    }, v.union = function() { return v.uniq(O(arguments, !0, !0)) }, v.intersection = function(n) {
        for (var r = [], t = arguments.length, e = 0, u = j(n); u > e; e++) {
            var i = n[e];
            if (!v.contains(r, i)) {
                for (var o = 1; t > o && v.contains(arguments[o], i); o++);
                o === t && r.push(i)
            }
        }
        return r
    }, v.difference = function(n) { var r = O(arguments, !0, !0, 1); return v.filter(n, function(n) { return !v.contains(r, n) }) }, v.unzip = function(n) { for (var r = n && v.max(n, j).length || 0, t = Array(r), e = 0; r > e; e++) t[e] = v.pluck(n, e); return t }, v.zip = d(v.unzip), v.object = function(n, r) { for (var t = {}, e = 0, u = j(n); u > e; e++) r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1]; return t };
    var k = function(n) {
        return function(r, t, e) {
            t = y(t, e);
            for (var u = j(r), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                if (t(r[i], i, r)) return i;
            return -1
        }
    };
    v.findIndex = k(1), v.findLastIndex = k(-1), v.sortedIndex = function(n, r, t, e) {
        t = y(t, e, 1);
        for (var u = t(r), i = 0, o = j(n); o > i;) {
            var a = Math.floor((i + o) / 2);
            t(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    };
    var F = function(n, r, t) {
        return function(e, u, i) {
            var a = 0,
                c = j(e);
            if ("number" == typeof i) n > 0 ? a = i >= 0 ? i : Math.max(i + c, a) : c = i >= 0 ? Math.min(i + 1, c) : i + c + 1;
            else if (t && i && c) return i = t(e, u), e[i] === u ? i : -1;
            if (u !== u) return i = r(o.call(e, a, c), v.isNaN), i >= 0 ? i + a : -1;
            for (i = n > 0 ? a : c - 1; i >= 0 && c > i; i += n)
                if (e[i] === u) return i;
            return -1
        }
    };
    v.indexOf = F(1, v.findIndex, v.sortedIndex), v.lastIndexOf = F(-1, v.findLastIndex), v.range = function(n, r, t) { null == r && (r = n || 0, n = 0), t = t || 1; for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; e > i; i++, n += t) u[i] = n; return u };
    var S = function(n, r, t, e, u) {
        if (!(e instanceof r)) return n.apply(t, u);
        var i = m(n.prototype),
            o = n.apply(i, u);
        return v.isObject(o) ? o : i
    };
    v.bind = function(n, r) {
        if (s && n.bind === s) return s.apply(n, o.call(arguments, 1));
        if (!v.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var t = o.call(arguments, 2),
            e = d(function(u) { return S(n, e, r, this, t.concat(u)) });
        return e
    }, v.partial = d(function(n, r) {
        var t = v.partial.placeholder,
            e = function() { for (var u = 0, i = r.length, o = Array(i), a = 0; i > a; a++) o[a] = r[a] === t ? arguments[u++] : r[a]; for (; u < arguments.length;) o.push(arguments[u++]); return S(n, e, this, this, o) };
        return e
    }), v.partial.placeholder = v, v.bindAll = d(function(n, r) { if (r.length < 1) throw new Error("bindAll must be passed function names"); return v.each(r, function(r) { n[r] = v.bind(n[r], n) }) }), v.memoize = function(n, r) {
        var t = function(e) {
            var u = t.cache,
                i = "" + (r ? r.apply(this, arguments) : e);
            return v.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
        };
        return t.cache = {}, t
    }, v.delay = d(function(n, r, t) { return setTimeout(function() { return n.apply(null, t) }, r) }), v.defer = v.partial(v.delay, v, 1), v.throttle = function(n, r, t) {
        var e, u, i, o = null,
            a = 0;
        t || (t = {});
        var c = function() { a = t.leading === !1 ? 0 : v.now(), o = null, i = n.apply(e, u), o || (e = u = null) };
        return function() {
            var l = v.now();
            a || t.leading !== !1 || (a = l);
            var f = r - (l - a);
            return e = this, u = arguments, 0 >= f || f > r ? (o && (clearTimeout(o), o = null), a = l, i = n.apply(e, u), o || (e = u = null)) : o || t.trailing === !1 || (o = setTimeout(c, f)), i
        }
    }, v.debounce = function(n, r, t) {
        var e, u, i, o, a, c = function() {
            var l = v.now() - o;
            r > l && l >= 0 ? e = setTimeout(c, r - l) : (e = null, t || (a = n.apply(i, u), e || (i = u = null)))
        };
        return function() { i = this, u = arguments, o = v.now(); var l = t && !e; return e || (e = setTimeout(c, r)), l && (a = n.apply(i, u), i = u = null), a }
    }, v.wrap = function(n, r) { return v.partial(r, n) }, v.negate = function(n) { return function() { return !n.apply(this, arguments) } }, v.compose = function() {
        var n = arguments,
            r = n.length - 1;
        return function() { for (var t = r, e = n[r].apply(this, arguments); t--;) e = n[t].call(this, e); return e }
    }, v.after = function(n, r) { return function() { return --n < 1 ? r.apply(this, arguments) : void 0 } }, v.before = function(n, r) { var t; return function() { return --n > 0 && (t = r.apply(this, arguments)), 1 >= n && (r = null), t } }, v.once = v.partial(v.before, 2), v.restArgs = d;
    var E = !{ toString: null }.propertyIsEnumerable("toString"),
        M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        I = function(n, r) {
            var t = M.length,
                u = n.constructor,
                i = v.isFunction(u) && u.prototype || e,
                o = "constructor";
            for (v.has(n, o) && !v.contains(r, o) && r.push(o); t--;) o = M[t], o in n && n[o] !== i[o] && !v.contains(r, o) && r.push(o)
        };
    v.keys = function(n) { if (!v.isObject(n)) return []; if (f) return f(n); var r = []; for (var t in n) v.has(n, t) && r.push(t); return E && I(n, r), r }, v.allKeys = function(n) { if (!v.isObject(n)) return []; var r = []; for (var t in n) r.push(t); return E && I(n, r), r }, v.values = function(n) { for (var r = v.keys(n), t = r.length, e = Array(t), u = 0; t > u; u++) e[u] = n[r[u]]; return e }, v.mapObject = function(n, r, t) {
        r = y(r, t);
        for (var e = v.keys(n), u = e.length, i = {}, o = 0; u > o; o++) {
            var a = e[o];
            i[a] = r(n[a], a, n)
        }
        return i
    }, v.pairs = function(n) { for (var r = v.keys(n), t = r.length, e = Array(t), u = 0; t > u; u++) e[u] = [r[u], n[r[u]]]; return e }, v.invert = function(n) { for (var r = {}, t = v.keys(n), e = 0, u = t.length; u > e; e++) r[n[t[e]]] = t[e]; return r }, v.functions = v.methods = function(n) { var r = []; for (var t in n) v.isFunction(n[t]) && r.push(t); return r.sort() };
    var N = function(n, r) {
        return function(t) {
            var e = arguments.length;
            if (2 > e || null == t) return t;
            for (var u = 1; e > u; u++)
                for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                    var l = o[c];
                    r && void 0 !== t[l] || (t[l] = i[l])
                }
            return t
        }
    };
    v.extend = N(v.allKeys), v.extendOwn = v.assign = N(v.keys), v.findKey = function(n, r, t) {
        r = y(r, t);
        for (var e, u = v.keys(n), i = 0, o = u.length; o > i; i++)
            if (e = u[i], r(n[e], e, n)) return e
    }, v.pick = function(n, r, t) {
        var e, u, i = {},
            o = n;
        if (null == o) return i;
        v.isFunction(r) ? (u = v.allKeys(o), e = g(r, t)) : (u = O(arguments, !1, !1, 1), e = function(n, r, t) { return r in t }, o = Object(o));
        for (var a = 0, c = u.length; c > a; a++) {
            var l = u[a],
                f = o[l];
            e(f, l, o) && (i[l] = f)
        }
        return i
    }, v.omit = function(n, r, t) {
        if (v.isFunction(r)) r = v.negate(r);
        else {
            var e = v.map(O(arguments, !1, !1, 1), String);
            r = function(n, r) { return !v.contains(e, r) }
        }
        return v.pick(n, r, t)
    }, v.defaults = N(v.allKeys, !0), v.create = function(n, r) { var t = m(n); return r && v.extendOwn(t, r), t }, v.clone = function(n) { return v.isObject(n) ? v.isArray(n) ? n.slice() : v.extend({}, n) : n }, v.tap = function(n, r) { return r(n), n }, v.isMatch = function(n, r) {
        var t = v.keys(r),
            e = t.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; e > i; i++) { var o = t[i]; if (r[o] !== u[o] || !(o in u)) return !1 }
        return !0
    };
    var B = function(n, r, t, e) {
        if (n === r) return 0 !== n || 1 / n === 1 / r;
        if (null == n || null == r) return n === r;
        n instanceof v && (n = n._wrapped), r instanceof v && (r = r._wrapped);
        var u = a.call(n);
        if (u !== a.call(r)) return !1;
        switch (u) {
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + r;
            case "[object Number]":
                return +n !== +n ? +r !== +r : 0 === +n ? 1 / +n === 1 / r : +n === +r;
            case "[object Date]":
            case "[object Boolean]":
                return +n === +r
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof r) return !1;
            var o = n.constructor,
                c = r.constructor;
            if (o !== c && !(v.isFunction(o) && o instanceof o && v.isFunction(c) && c instanceof c) && "constructor" in n && "constructor" in r) return !1
        }
        t = t || [], e = e || [];
        for (var l = t.length; l--;)
            if (t[l] === n) return e[l] === r;
        if (t.push(n), e.push(r), i) {
            if (l = n.length, l !== r.length) return !1;
            for (; l--;)
                if (!B(n[l], r[l], t, e)) return !1
        } else {
            var f, s = v.keys(n);
            if (l = s.length, v.keys(r).length !== l) return !1;
            for (; l--;)
                if (f = s[l], !v.has(r, f) || !B(n[f], r[f], t, e)) return !1
        }
        return t.pop(), e.pop(), !0
    };
    v.isEqual = function(n, r) { return B(n, r) }, v.isEmpty = function(n) { return null == n ? !0 : _(n) && (v.isArray(n) || v.isString(n) || v.isArguments(n)) ? 0 === n.length : 0 === v.keys(n).length }, v.isElement = function(n) { return !(!n || 1 !== n.nodeType) }, v.isArray = l || function(n) { return "[object Array]" === a.call(n) }, v.isObject = function(n) { var r = typeof n; return "function" === r || "object" === r && !!n }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) { v["is" + n] = function(r) { return a.call(r) === "[object " + n + "]" } }), v.isArguments(arguments) || (v.isArguments = function(n) { return v.has(n, "callee") }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(n) { return "function" == typeof n || !1 }), v.isFinite = function(n) { return isFinite(n) && !isNaN(parseFloat(n)) }, v.isNaN = function(n) { return v.isNumber(n) && n !== +n }, v.isBoolean = function(n) { return n === !0 || n === !1 || "[object Boolean]" === a.call(n) }, v.isNull = function(n) { return null === n }, v.isUndefined = function(n) { return void 0 === n }, v.has = function(n, r) { return null != n && c.call(n, r) }, v.noConflict = function() { return n._ = r, this }, v.identity = function(n) { return n }, v.constant = function(n) { return function() { return n } }, v.noop = function() {}, v.property = b, v.propertyOf = function(n) { return null == n ? function() {} : function(r) { return n[r] } }, v.matcher = v.matches = function(n) {
        return n = v.extendOwn({}, n),
            function(r) { return v.isMatch(r, n) }
    }, v.times = function(n, r, t) {
        var e = Array(Math.max(0, n));
        r = g(r, t, 1);
        for (var u = 0; n > u; u++) e[u] = r(u);
        return e
    }, v.random = function(n, r) { return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1)) }, v.now = Date.now || function() { return (new Date).getTime() };
    var T = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
        R = v.invert(T),
        q = function(n) {
            var r = function(r) { return n[r] },
                t = "(?:" + v.keys(n).join("|") + ")",
                e = RegExp(t),
                u = RegExp(t, "g");
            return function(n) { return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, r) : n }
        };
    v.escape = q(T), v.unescape = q(R), v.result = function(n, r, t) { var e = null == n ? void 0 : n[r]; return void 0 === e && (e = t), v.isFunction(e) ? e.call(n) : e };
    var K = 0;
    v.uniqueId = function(n) { var r = ++K + ""; return n ? n + r : r }, v.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
    var z = /(.)^/,
        D = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
        L = /\\|'|\r|\n|\u2028|\u2029/g,
        P = function(n) { return "\\" + D[n] };
    v.template = function(n, r, t) {
        !r && t && (r = t), r = v.defaults({}, r, v.templateSettings);
        var e = RegExp([(r.escape || z).source, (r.interpolate || z).source, (r.evaluate || z).source].join("|") + "|$", "g"),
            u = 0,
            i = "__p+='";
        n.replace(e, function(r, t, e, o, a) { return i += n.slice(u, a).replace(L, P), u = a + r.length, t ? i += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), r }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try { var o = new Function(r.variable || "obj", "_", i) } catch (a) { throw a.source = i, a }
        var c = function(n) { return o.call(this, n, v) },
            l = r.variable || "obj";
        return c.source = "function(" + l + "){\n" + i + "}", c
    }, v.chain = function(n) { var r = v(n); return r._chain = !0, r };
    var C = function(n, r) { return n._chain ? v(r).chain() : r };
    v.mixin = function(n) {
        v.each(v.functions(n), function(r) {
            var t = v[r] = n[r];
            v.prototype[r] = function() { var n = [this._wrapped]; return i.apply(n, arguments), C(this, t.apply(v, n)) }
        })
    }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var r = t[n];
        v.prototype[n] = function() { var t = this._wrapped; return r.apply(t, arguments), "shift" !== n && "splice" !== n || 0 !== t.length || delete t[0], C(this, t) }
    }), v.each(["concat", "join", "slice"], function(n) {
        var r = t[n];
        v.prototype[n] = function() { return C(this, r.apply(this._wrapped, arguments)) }
    }), v.prototype.value = function() { return this._wrapped }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() { return "" + this._wrapped }, "function" == typeof define && define.amd && define("underscore", [], function() { return v })
}();
var e = e || {};
! function() {
    function t() { j = !0, clearTimeout(P), P = setTimeout(function() { j = !1 }, 700) }

    function n(e) {
        var t = [];
        if (e)
            for (t.unshift(e); e.parentNode;) t.unshift(e.parentNode), e = e.parentNode;
        return t
    }

    function r(e, t) { for (var r = n(e), o = n(t), i = null; r.length > 0 && r[0] == o.shift();) i = r.shift(); return i }

    function o(e, t, n) { for (var o = r(e, t), i = e, a = []; i && i != o;) g(i, "pointerenter") && a.push(i), i = i.parentNode; for (; a.length > 0;) n(a.pop()) }

    function i(e, t, n) { for (var o = r(e, t), i = e; i && i != o;) g(i, "pointerleave") && n(i), i = i.parentNode }

    function a(e, t) {
        ["pointerdown", "pointermove", "pointerup", "pointerover", "pointerout"].forEach(function(n) { window.addEventListener(e(n), function(e) {!j && E(e.target, n) && t(e, n, !0) }) }), void 0 === window["on" + e("pointerenter").toLowerCase()] && window.addEventListener(e("pointerover"), function(e) {
            if (!j) {
                var n = E(e.target, "pointerenter");
                n && n !== window && (n.contains(e.relatedTarget) || o(n, e.relatedTarget, function(n) { t(e, "pointerenter", !1, n, e.relatedTarget) }))
            }
        }), void 0 === window["on" + e("pointerleave").toLowerCase()] && window.addEventListener(e("pointerout"), function(e) {
            if (!j) {
                var n = E(e.target, "pointerleave");
                n && n !== window && (n.contains(e.relatedTarget) || i(n, e.relatedTarget, function(n) { t(e, "pointerleave", !1, n, e.relatedTarget) }))
            }
        })
    }
    if (!window.PointerEvent) {
        Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
            var t = Object(this),
                n = t.length >>> 0;
            if (0 === n) return -1;
            var r = 0;
            if (arguments.length > 0 && (r = Number(arguments[1]), r != r ? r = 0 : 0 != r && r != 1 / 0 && r != -(1 / 0) && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), r >= n) return -1;
            for (var o = r >= 0 ? r : Math.max(n - Math.abs(r), 0); n > o; o++)
                if (o in t && t[o] === e) return o;
            return -1
        }), Array.prototype.forEach || (Array.prototype.forEach = function(e, t) { if (!(this && e instanceof Function)) throw new TypeError; for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this) }), String.prototype.trim || (String.prototype.trim = function() { return this.replace(/^\s+|\s+$/, "") });
        var s = ["pointerdown", "pointerup", "pointermove", "pointerover", "pointerout", "pointercancel", "pointerenter", "pointerleave"],
            d = ["PointerDown", "PointerUp", "PointerMove", "PointerOver", "PointerOut", "PointerCancel", "PointerEnter", "PointerLeave"],
            c = "touch",
            f = "pen",
            l = "mouse",
            v = {},
            u = function(e) { for (; e && !e.handjs_forcePreventDefault;) e = e.parentNode; return !!e || window.handjs_forcePreventDefault },
            p = function(e, t, n, r, o) {
                var i;
                if (document.createEvent ? (i = document.createEvent("MouseEvents"), i.initMouseEvent(t, n, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, o || e.relatedTarget)) : (i = document.createEventObject(), i.screenX = e.screenX, i.screenY = e.screenY, i.clientX = e.clientX, i.clientY = e.clientY, i.ctrlKey = e.ctrlKey, i.altKey = e.altKey, i.shiftKey = e.shiftKey, i.metaKey = e.metaKey, i.button = e.button, i.relatedTarget = o || e.relatedTarget), void 0 === i.offsetX && (void 0 !== e.offsetX ? (Object && void 0 !== Object.defineProperty && (Object.defineProperty(i, "offsetX", { writable: !0 }), Object.defineProperty(i, "offsetY", { writable: !0 })), i.offsetX = e.offsetX, i.offsetY = e.offsetY) : Object && void 0 !== Object.defineProperty ? (Object.defineProperty(i, "offsetX", { get: function() { return this.currentTarget && this.currentTarget.offsetLeft ? e.clientX - this.currentTarget.offsetLeft : e.clientX } }), Object.defineProperty(i, "offsetY", { get: function() { return this.currentTarget && this.currentTarget.offsetTop ? e.clientY - this.currentTarget.offsetTop : e.clientY } })) : void 0 !== e.layerX && (i.offsetX = e.layerX - e.currentTarget.offsetLeft, i.offsetY = e.layerY - e.currentTarget.offsetTop)), i.isPrimary = void 0 !== e.isPrimary ? e.isPrimary : !0, e.pressure) i.pressure = e.pressure;
                else {
                    var a = 0;
                    void 0 !== e.which ? a = e.which : void 0 !== e.button && (a = e.button), i.pressure = 0 == a ? 0 : .5
                }
                if (i.rotation = e.rotation ? e.rotation : 0, i.hwTimestamp = e.hwTimestamp ? e.hwTimestamp : 0, i.tiltX = e.tiltX ? e.tiltX : 0, i.tiltY = e.tiltY ? e.tiltY : 0, i.height = e.height ? e.height : 0, i.width = e.width ? e.width : 0, i.preventDefault = function() { void 0 !== e.preventDefault && e.preventDefault() }, void 0 !== i.stopPropagation) {
                    var s = i.stopPropagation;
                    i.stopPropagation = function() { void 0 !== e.stopPropagation && e.stopPropagation(), s.call(this) }
                }
                switch (i.pointerId = e.pointerId, i.pointerType = e.pointerType, i.pointerType) {
                    case 2:
                        i.pointerType = c;
                        break;
                    case 3:
                        i.pointerType = f;
                        break;
                    case 4:
                        i.pointerType = l
                }
                r ? r.dispatchEvent(i) : e.target ? e.target.dispatchEvent(i) : e.srcElement.fireEvent("on" + T(t), i)
            },
            h = function(e, t, n, r, o) { e.pointerId = 1, e.pointerType = l, p(e, t, n, r, o) },
            m = function(e, t, n, r, o, i) {
                var a = t.identifier + 2;
                t.pointerId = a, t.pointerType = c, t.currentTarget = n, void 0 !== r.preventDefault && (t.preventDefault = function() { r.preventDefault() }), p(t, e, o, n, i)
            },
            g = function(e, t) { return e.__handjsGlobalRegisteredEvents && e.__handjsGlobalRegisteredEvents[t] },
            E = function(e, t) { for (; e && !g(e, t);) e = e.parentNode; return e ? e : g(document, t) ? document : g(window, t) ? window : void 0 },
            w = function(e, t, n, r, o, i) { E(n, e) && m(e, t, n, r, o, i) },
            T = function(e) { return e.toLowerCase().replace("pointer", "mouse") },
            y = function(e, t) {
                var n = s.indexOf(t),
                    r = e + d[n];
                return r
            },
            L = function(e, t, n, r) {
                if (void 0 === e.__handjsRegisteredEvents && (e.__handjsRegisteredEvents = []), r) {
                    if (void 0 !== e.__handjsRegisteredEvents[t]) return void e.__handjsRegisteredEvents[t]++;
                    e.__handjsRegisteredEvents[t] = 1, e.addEventListener(t, n, !1)
                } else {
                    if (-1 !== e.__handjsRegisteredEvents.indexOf(t) && (e.__handjsRegisteredEvents[t]--, 0 != e.__handjsRegisteredEvents[t])) return;
                    e.removeEventListener(t, n), e.__handjsRegisteredEvents[t] = 0
                }
            },
            _ = function(e, t, n) {
                if (e.__handjsGlobalRegisteredEvents || (e.__handjsGlobalRegisteredEvents = []), n) {
                    if (void 0 !== e.__handjsGlobalRegisteredEvents[t]) return void e.__handjsGlobalRegisteredEvents[t]++;
                    e.__handjsGlobalRegisteredEvents[t] = 1
                } else void 0 !== e.__handjsGlobalRegisteredEvents[t] && (e.__handjsGlobalRegisteredEvents[t]--, e.__handjsGlobalRegisteredEvents[t] < 0 && (e.__handjsGlobalRegisteredEvents[t] = 0));
                var r, o;
                switch (window.MSPointerEvent ? (r = function(e) { return y("MS", e) }, o = p) : (r = T, o = h), t) {
                    case "pointerenter":
                    case "pointerleave":
                        var i = r(t);
                        void 0 !== e["on" + i.toLowerCase()] && L(e, i, function(e) { o(e, t) }, n)
                }
            },
            b = function(e) {
                var t = e.prototype ? e.prototype.addEventListener : e.addEventListener,
                    n = function(e, n, r) {-1 != s.indexOf(e) && _(this, e, !0), void 0 === t ? this.attachEvent("on" + T(e), n) : t.call(this, e, n, r) };
                e.prototype ? e.prototype.addEventListener = n : e.addEventListener = n
            },
            M = function(e) {
                var t = e.prototype ? e.prototype.removeEventListener : e.removeEventListener,
                    n = function(e, n, r) {-1 != s.indexOf(e) && _(this, e, !1), void 0 === t ? this.detachEvent(T(e), n) : t.call(this, e, n, r) };
                e.prototype ? e.prototype.removeEventListener = n : e.removeEventListener = n
            };
        b(window), b(window.HTMLElement || window.Element), b(document), b(HTMLBodyElement), b(HTMLDivElement), b(HTMLImageElement), b(HTMLUListElement), b(HTMLAnchorElement), b(HTMLLIElement), b(HTMLTableElement), window.HTMLSpanElement && b(HTMLSpanElement), window.HTMLCanvasElement && b(HTMLCanvasElement), window.SVGElement && b(SVGElement), M(window), M(window.HTMLElement || window.Element), M(document), M(HTMLBodyElement), M(HTMLDivElement), M(HTMLImageElement), M(HTMLUListElement), M(HTMLAnchorElement), M(HTMLLIElement), M(HTMLTableElement), window.HTMLSpanElement && M(HTMLSpanElement), window.HTMLCanvasElement && M(HTMLCanvasElement), window.SVGElement && M(SVGElement);
        var j = !1,
            P = -1;
        ! function() {
            window.MSPointerEvent ? a(function(e) { return y("MS", e) }, p) : (a(T, h), void 0 !== window.ontouchstart && (window.addEventListener("touchstart", function(e) {
                for (var n = 0; n < e.changedTouches.length; ++n) {
                    var r = e.changedTouches[n];
                    v[r.identifier] = r.target, w("pointerover", r, r.target, e, !0), o(r.target, null, function(t) { m("pointerenter", r, t, e, !1) }), w("pointerdown", r, r.target, e, !0)
                }
                t()
            }), window.addEventListener("touchend", function(e) {
                for (var n = 0; n < e.changedTouches.length; ++n) {
                    var r = e.changedTouches[n],
                        o = v[r.identifier];
                    w("pointerup", r, o, e, !0), w("pointerout", r, o, e, !0), i(o, null, function(t) { m("pointerleave", r, t, e, !1) })
                }
                t()
            }), window.addEventListener("touchmove", function(e) {
                for (var n = 0; n < e.changedTouches.length; ++n) {
                    var r = e.changedTouches[n],
                        a = document.elementFromPoint(r.clientX, r.clientY),
                        s = v[r.identifier];
                    s && u(s) === !0 && e.preventDefault(), w("pointermove", r, s, e, !0), s !== a && (s && (w("pointerout", r, s, e, !0, a), s.contains(a) || i(s, a, function(t) { m("pointerleave", r, t, e, !1, a) })), a && (w("pointerover", r, a, e, !0, s), a.contains(s) || o(a, s, function(t) { m("pointerenter", r, t, e, !1, s) })), v[r.identifier] = a)
                }
                t()
            }), window.addEventListener("touchcancel", function(e) {
                for (var t = 0; t < e.changedTouches.length; ++t) {
                    var n = e.changedTouches[t];
                    w("pointercancel", n, v[n.identifier], e, !0)
                }
            })))
        }(), void 0 === navigator.pointerEnabled && (navigator.pointerEnabled = !0, navigator.msPointerEnabled && (navigator.maxTouchPoints = navigator.msMaxTouchPoints)), document.styleSheets && document.addEventListener && document.addEventListener("DOMContentLoaded", function() {
            if (!e.doNotProcessCSS && void 0 === document.body.style.touchAction) {
                var t = new RegExp(".+?{.*?}", "m"),
                    n = new RegExp(".+?{", "m"),
                    r = function(e) {
                        var r = t.exec(e);
                        if (r) {
                            var o = r[0];
                            e = e.replace(o, "").trim();
                            var i = n.exec(o)[0].replace("{", "").trim();
                            if (-1 != o.replace(/\s/g, "").indexOf("touch-action:none"))
                                for (var a = document.querySelectorAll(i), s = 0; s < a.length; s++) {
                                    var d = a[s];
                                    void 0 !== d.style.msTouchAction ? d.style.msTouchAction = "none" : d.handjs_forcePreventDefault = !0
                                }
                            return e
                        }
                    },
                    o = function(e) {
                        if (window.setImmediate) e && setImmediate(o, r(e));
                        else
                            for (; e;) e = r(e)
                    };
                try {
                    for (var i = 0; i < document.styleSheets.length; i++) {
                        var a = document.styleSheets[i];
                        if (void 0 != a.href) {
                            var s = new XMLHttpRequest;
                            s.open("get", a.href), s.send();
                            var d = s.responseText.replace(/(\n|\r)/g, "");
                            o(d)
                        }
                    }
                } catch (c) {}
                for (var f = document.getElementsByTagName("style"), i = 0; i < f.length; i++) {
                    var l = f[i],
                        v = l.innerHTML.replace(/(\n|\r)/g, "").trim();
                    o(v)
                }
            }
        }, !1)
    }
}();
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery) }(function(e) {
    function t(t) {
        var s = t || window.event,
            a = h.call(arguments, 1),
            r = 0,
            f = 0,
            d = 0,
            c = 0,
            m = 0,
            g = 0;
        if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (d = -1 * s.detail), "wheelDelta" in s && (d = s.wheelDelta), "wheelDeltaY" in s && (d = s.wheelDeltaY), "wheelDeltaX" in s && (f = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (f = -1 * d, d = 0), r = 0 === d ? f : d, "deltaY" in s && (d = -1 * s.deltaY, r = d), "deltaX" in s && (f = s.deltaX, 0 === d && (r = -1 * f)), 0 !== d || 0 !== f) {
            if (1 === s.deltaMode) {
                var w = e.data(this, "mousewheel-line-height");
                r *= w, d *= w, f *= w
            } else if (2 === s.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                r *= v, d *= v, f *= v
            }
            if (c = Math.max(Math.abs(d), Math.abs(f)), (!l || l > c) && (l = c, i(s, c) && (l /= 40)), i(s, c) && (r /= 40, f /= 40, d /= 40), r = Math[r >= 1 ? "floor" : "ceil"](r / l), f = Math[f >= 1 ? "floor" : "ceil"](f / l), d = Math[d >= 1 ? "floor" : "ceil"](d / l), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var p = this.getBoundingClientRect();
                m = t.clientX - p.left, g = t.clientY - p.top
            }
            return t.deltaX = f, t.deltaY = d, t.deltaFactor = l, t.offsetX = m, t.offsetY = g, t.deltaMode = 0, a.unshift(t, r, f, d), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
        }
    }

    function n() { l = null }

    function i(e, t) { return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0 }
    var o, l, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        h = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var r = s.length; r;) e.event.fixHooks[s[--r]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = a.length; n;) this.removeEventListener(a[--n], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var n = e(t),
                i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) { return e(t).height() },
        settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
    };
    e.fn.extend({ mousewheel: function(e) { return e ? this.bind("mousewheel", e) : this.trigger("mousewheel") }, unmousewheel: function(e) { return this.unbind("mousewheel", e) } })
});
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery) }(function(e) {
    function n(e) { return u.raw ? e : encodeURIComponent(e) }

    function o(e) { return u.raw ? e : decodeURIComponent(e) }

    function i(e) { return n(u.json ? JSON.stringify(e) : String(e)) }

    function r(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e } catch (n) {} }

    function t(n, o) { var i = u.raw ? n : r(n); return e.isFunction(o) ? o(i) : i }
    var c = /\+/g,
        u = e.cookie = function(r, c, a) {
            if (arguments.length > 1 && !e.isFunction(c)) {
                if (a = e.extend({}, u.defaults, a), "number" == typeof a.expires) {
                    var f = a.expires,
                        s = a.expires = new Date;
                    s.setTime(+s + 864e5 * f)
                }
                return document.cookie = [n(r), "=", i(c), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
            }
            for (var d = r ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], m = 0, x = p.length; x > m; m++) {
                var l = p[m].split("="),
                    g = o(l.shift()),
                    k = l.join("=");
                if (r && r === g) { d = t(k, c); break }
                r || void 0 === (k = t(k)) || (d[g] = k)
            }
            return d
        };
    u.defaults = {}, e.removeCookie = function(n, o) { return void 0 === e.cookie(n) ? !1 : (e.cookie(n, "", e.extend({}, o, { expires: -1 })), !e.cookie(n)) }
});
! function(n) {
    function r(n, r) {
        var t = n[0],
            f = n[1],
            i = n[2],
            a = n[3];
        t = o(t, f, i, a, r[0], 7, -680876936), a = o(a, t, f, i, r[1], 12, -389564586), i = o(i, a, t, f, r[2], 17, 606105819), f = o(f, i, a, t, r[3], 22, -1044525330), t = o(t, f, i, a, r[4], 7, -176418897), a = o(a, t, f, i, r[5], 12, 1200080426), i = o(i, a, t, f, r[6], 17, -1473231341), f = o(f, i, a, t, r[7], 22, -45705983), t = o(t, f, i, a, r[8], 7, 1770035416), a = o(a, t, f, i, r[9], 12, -1958414417), i = o(i, a, t, f, r[10], 17, -42063), f = o(f, i, a, t, r[11], 22, -1990404162), t = o(t, f, i, a, r[12], 7, 1804603682), a = o(a, t, f, i, r[13], 12, -40341101), i = o(i, a, t, f, r[14], 17, -1502002290), f = o(f, i, a, t, r[15], 22, 1236535329), t = u(t, f, i, a, r[1], 5, -165796510), a = u(a, t, f, i, r[6], 9, -1069501632), i = u(i, a, t, f, r[11], 14, 643717713), f = u(f, i, a, t, r[0], 20, -373897302), t = u(t, f, i, a, r[5], 5, -701558691), a = u(a, t, f, i, r[10], 9, 38016083), i = u(i, a, t, f, r[15], 14, -660478335), f = u(f, i, a, t, r[4], 20, -405537848), t = u(t, f, i, a, r[9], 5, 568446438), a = u(a, t, f, i, r[14], 9, -1019803690), i = u(i, a, t, f, r[3], 14, -187363961), f = u(f, i, a, t, r[8], 20, 1163531501), t = u(t, f, i, a, r[13], 5, -1444681467), a = u(a, t, f, i, r[2], 9, -51403784), i = u(i, a, t, f, r[7], 14, 1735328473), f = u(f, i, a, t, r[12], 20, -1926607734), t = e(t, f, i, a, r[5], 4, -378558), a = e(a, t, f, i, r[8], 11, -2022574463), i = e(i, a, t, f, r[11], 16, 1839030562), f = e(f, i, a, t, r[14], 23, -35309556), t = e(t, f, i, a, r[1], 4, -1530992060), a = e(a, t, f, i, r[4], 11, 1272893353), i = e(i, a, t, f, r[7], 16, -155497632), f = e(f, i, a, t, r[10], 23, -1094730640), t = e(t, f, i, a, r[13], 4, 681279174), a = e(a, t, f, i, r[0], 11, -358537222), i = e(i, a, t, f, r[3], 16, -722521979), f = e(f, i, a, t, r[6], 23, 76029189), t = e(t, f, i, a, r[9], 4, -640364487), a = e(a, t, f, i, r[12], 11, -421815835), i = e(i, a, t, f, r[15], 16, 530742520), f = e(f, i, a, t, r[2], 23, -995338651), t = c(t, f, i, a, r[0], 6, -198630844), a = c(a, t, f, i, r[7], 10, 1126891415), i = c(i, a, t, f, r[14], 15, -1416354905), f = c(f, i, a, t, r[5], 21, -57434055), t = c(t, f, i, a, r[12], 6, 1700485571), a = c(a, t, f, i, r[3], 10, -1894986606), i = c(i, a, t, f, r[10], 15, -1051523), f = c(f, i, a, t, r[1], 21, -2054922799), t = c(t, f, i, a, r[8], 6, 1873313359), a = c(a, t, f, i, r[15], 10, -30611744), i = c(i, a, t, f, r[6], 15, -1560198380), f = c(f, i, a, t, r[13], 21, 1309151649), t = c(t, f, i, a, r[4], 6, -145523070), a = c(a, t, f, i, r[11], 10, -1120210379), i = c(i, a, t, f, r[2], 15, 718787259), f = c(f, i, a, t, r[9], 21, -343485551), n[0] = v(t, n[0]), n[1] = v(f, n[1]), n[2] = v(i, n[2]), n[3] = v(a, n[3])
    }

    function t(n, r, t, o, u, e) { return r = v(v(r, n), v(o, e)), v(r << u | r >>> 32 - u, t) }

    function o(n, r, o, u, e, c, f) { return t(r & o | ~r & u, n, r, e, c, f) }

    function u(n, r, o, u, e, c, f) { return t(r & u | o & ~u, n, r, e, c, f) }

    function e(n, r, o, u, e, c, f) { return t(r ^ o ^ u, n, r, e, c, f) }

    function c(n, r, o, u, e, c, f) { return t(o ^ (r | ~u), n, r, e, c, f) }

    function f(n) {
        txt = "";
        var t, o = n.length,
            u = [1732584193, -271733879, -1732584194, 271733878];
        for (t = 64; t <= n.length; t += 64) r(u, i(n.substring(t - 64, t)));
        n = n.substring(t - 64);
        var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (t = 0; t < n.length; t++) e[t >> 2] |= n.charCodeAt(t) << (t % 4 << 3);
        if (e[t >> 2] |= 128 << (t % 4 << 3), t > 55)
            for (r(u, e), t = 0; 16 > t; t++) e[t] = 0;
        return e[14] = 8 * o, r(u, e), u
    }

    function i(n) { var r, t = []; for (r = 0; 64 > r; r += 4) t[r >> 2] = n.charCodeAt(r) + (n.charCodeAt(r + 1) << 8) + (n.charCodeAt(r + 2) << 16) + (n.charCodeAt(r + 3) << 24); return t }

    function a(n) { for (var r = "", t = 0; 4 > t; t++) r += l[n >> 8 * t + 4 & 15] + l[n >> 8 * t & 15]; return r }

    function d(n) { for (var r = 0; r < n.length; r++) n[r] = a(n[r]); return n.join("") }

    function h(n) { return d(f(n)) }

    function v(n, r) { return n + r & 4294967295 }

    function v(n, r) {
        var t = (65535 & n) + (65535 & r),
            o = (n >> 16) + (r >> 16) + (t >> 16);
        return o << 16 | 65535 & t
    }
    var l = "0123456789abcdef".split("");
    "5d41402abc4b2a76b9719d911017c592" != h("hello"), n.md5 = h
}(window);
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.React = e()
    }
}(function() {
    return function e(t, n, r) {
        function o(a, u) {
            if (!n[a]) {
                if (!t[a]) { var s = "function" == typeof require && require; if (!u && s) return s(a, !0); if (i) return i(a, !0); var l = new Error("Cannot find module '" + a + "'"); throw l.code = "MODULE_NOT_FOUND", l }
                var c = n[a] = { exports: {} };
                t[a][0].call(c.exports, function(e) { var n = t[a][1][e]; return o(n ? n : e) }, c, c.exports, e, t, n, r)
            }
            return n[a].exports
        }
        for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
        return o
    }({
        1: [function(e, t, n) {
            "use strict";
            var r = e(19),
                o = e(32),
                i = e(34),
                a = e(33),
                u = e(38),
                s = e(39),
                l = e(55),
                c = (e(56), e(40)),
                p = e(51),
                d = e(54),
                f = e(64),
                h = e(68),
                m = e(73),
                v = e(76),
                g = e(79),
                y = e(82),
                C = e(27),
                E = e(115),
                b = e(142);
            d.inject();
            var _ = l.createElement,
                x = l.createFactory,
                D = l.cloneElement,
                M = m.measure("React", "render", h.render),
                N = { Children: { map: o.map, forEach: o.forEach, count: o.count, only: b }, Component: i, DOM: c, PropTypes: v, initializeTouchEvents: function(e) { r.useTouchEvents = e }, createClass: a.createClass, createElement: _, cloneElement: D, createFactory: x, createMixin: function(e) { return e }, constructAndRenderComponent: h.constructAndRenderComponent, constructAndRenderComponentByID: h.constructAndRenderComponentByID, findDOMNode: E, render: M, renderToString: y.renderToString, renderToStaticMarkup: y.renderToStaticMarkup, unmountComponentAtNode: h.unmountComponentAtNode, isValidElement: l.isValidElement, withContext: u.withContext, __spread: C };
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({ CurrentOwner: s, InstanceHandles: f, Mount: h, Reconciler: g, TextComponent: p }), N.version = "0.13.3", t.exports = N
        }, { 115: 115, 142: 142, 19: 19, 27: 27, 32: 32, 33: 33, 34: 34, 38: 38, 39: 39, 40: 40, 51: 51, 54: 54, 55: 55, 56: 56, 64: 64, 68: 68, 73: 73, 76: 76, 79: 79, 82: 82 }],
        2: [function(e, t, n) {
            "use strict";
            var r = e(117),
                o = { componentDidMount: function() { this.props.autoFocus && r(this.getDOMNode()) } };
            t.exports = o
        }, { 117: 117 }],
        3: [function(e, t, n) {
            "use strict";

            function r() { var e = window.opera; return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12 }

            function o(e) { return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey) }

            function i(e) {
                switch (e) {
                    case T.topCompositionStart:
                        return P.compositionStart;
                    case T.topCompositionEnd:
                        return P.compositionEnd;
                    case T.topCompositionUpdate:
                        return P.compositionUpdate
                }
            }

            function a(e, t) { return e === T.topKeyDown && t.keyCode === b }

            function u(e, t) {
                switch (e) {
                    case T.topKeyUp:
                        return -1 !== E.indexOf(t.keyCode);
                    case T.topKeyDown:
                        return t.keyCode !== b;
                    case T.topKeyPress:
                    case T.topMouseDown:
                    case T.topBlur:
                        return !0;
                    default:
                        return !1
                }
            }

            function s(e) { var t = e.detail; return "object" == typeof t && "data" in t ? t.data : null }

            function l(e, t, n, r) {
                var o, l;
                if (_ ? o = i(e) : w ? u(e, r) && (o = P.compositionEnd) : a(e, r) && (o = P.compositionStart), !o) return null;
                M && (w || o !== P.compositionStart ? o === P.compositionEnd && w && (l = w.getData()) : w = v.getPooled(t));
                var c = g.getPooled(o, n, r);
                if (l) c.data = l;
                else {
                    var p = s(r);
                    null !== p && (c.data = p)
                }
                return h.accumulateTwoPhaseDispatches(c), c
            }

            function c(e, t) {
                switch (e) {
                    case T.topCompositionEnd:
                        return s(t);
                    case T.topKeyPress:
                        var n = t.which;
                        return n !== N ? null : (R = !0, I);
                    case T.topTextInput:
                        var r = t.data;
                        return r === I && R ? null : r;
                    default:
                        return null
                }
            }

            function p(e, t) {
                if (w) { if (e === T.topCompositionEnd || u(e, t)) { var n = w.getData(); return v.release(w), w = null, n } return null }
                switch (e) {
                    case T.topPaste:
                        return null;
                    case T.topKeyPress:
                        return t.which && !o(t) ? String.fromCharCode(t.which) : null;
                    case T.topCompositionEnd:
                        return M ? null : t.data;
                    default:
                        return null
                }
            }

            function d(e, t, n, r) { var o; if (o = D ? c(e, r) : p(e, r), !o) return null; var i = y.getPooled(P.beforeInput, n, r); return i.data = o, h.accumulateTwoPhaseDispatches(i), i }
            var f = e(15),
                h = e(20),
                m = e(21),
                v = e(22),
                g = e(91),
                y = e(95),
                C = e(139),
                E = [9, 13, 27, 32],
                b = 229,
                _ = m.canUseDOM && "CompositionEvent" in window,
                x = null;
            m.canUseDOM && "documentMode" in document && (x = document.documentMode);
            var D = m.canUseDOM && "TextEvent" in window && !x && !r(),
                M = m.canUseDOM && (!_ || x && x > 8 && 11 >= x),
                N = 32,
                I = String.fromCharCode(N),
                T = f.topLevelTypes,
                P = { beforeInput: { phasedRegistrationNames: { bubbled: C({ onBeforeInput: null }), captured: C({ onBeforeInputCapture: null }) }, dependencies: [T.topCompositionEnd, T.topKeyPress, T.topTextInput, T.topPaste] }, compositionEnd: { phasedRegistrationNames: { bubbled: C({ onCompositionEnd: null }), captured: C({ onCompositionEndCapture: null }) }, dependencies: [T.topBlur, T.topCompositionEnd, T.topKeyDown, T.topKeyPress, T.topKeyUp, T.topMouseDown] }, compositionStart: { phasedRegistrationNames: { bubbled: C({ onCompositionStart: null }), captured: C({ onCompositionStartCapture: null }) }, dependencies: [T.topBlur, T.topCompositionStart, T.topKeyDown, T.topKeyPress, T.topKeyUp, T.topMouseDown] }, compositionUpdate: { phasedRegistrationNames: { bubbled: C({ onCompositionUpdate: null }), captured: C({ onCompositionUpdateCapture: null }) }, dependencies: [T.topBlur, T.topCompositionUpdate, T.topKeyDown, T.topKeyPress, T.topKeyUp, T.topMouseDown] } },
                R = !1,
                w = null,
                O = { eventTypes: P, extractEvents: function(e, t, n, r) { return [l(e, t, n, r), d(e, t, n, r)] } };
            t.exports = O
        }, { 139: 139, 15: 15, 20: 20, 21: 21, 22: 22, 91: 91, 95: 95 }],
        4: [function(e, t, n) {
            "use strict";

            function r(e, t) { return e + t.charAt(0).toUpperCase() + t.substring(1) }
            var o = { boxFlex: !0, boxFlexGroup: !0, columnCount: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, strokeDashoffset: !0, strokeOpacity: !0, strokeWidth: !0 },
                i = ["Webkit", "ms", "Moz", "O"];
            Object.keys(o).forEach(function(e) { i.forEach(function(t) { o[r(t, e)] = o[e] }) });
            var a = { background: { backgroundImage: !0, backgroundPosition: !0, backgroundRepeat: !0, backgroundColor: !0 }, border: { borderWidth: !0, borderStyle: !0, borderColor: !0 }, borderBottom: { borderBottomWidth: !0, borderBottomStyle: !0, borderBottomColor: !0 }, borderLeft: { borderLeftWidth: !0, borderLeftStyle: !0, borderLeftColor: !0 }, borderRight: { borderRightWidth: !0, borderRightStyle: !0, borderRightColor: !0 }, borderTop: { borderTopWidth: !0, borderTopStyle: !0, borderTopColor: !0 }, font: { fontStyle: !0, fontVariant: !0, fontWeight: !0, fontSize: !0, lineHeight: !0, fontFamily: !0 } },
                u = { isUnitlessNumber: o, shorthandPropertyExpansions: a };
            t.exports = u
        }, {}],
        5: [function(e, t, n) {
            "use strict";
            var r = e(4),
                o = e(21),
                i = (e(106), e(111)),
                a = e(131),
                u = e(141),
                s = (e(150), u(function(e) { return a(e) })),
                l = "cssFloat";
            o.canUseDOM && void 0 === document.documentElement.style.cssFloat && (l = "styleFloat");
            var c = {
                createMarkupForStyles: function(e) {
                    var t = "";
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n];
                            null != r && (t += s(n) + ":", t += i(n, r) + ";")
                        }
                    return t || null
                },
                setValueForStyles: function(e, t) {
                    var n = e.style;
                    for (var o in t)
                        if (t.hasOwnProperty(o)) {
                            var a = i(o, t[o]);
                            if ("float" === o && (o = l), a) n[o] = a;
                            else {
                                var u = r.shorthandPropertyExpansions[o];
                                if (u)
                                    for (var s in u) n[s] = "";
                                else n[o] = ""
                            }
                        }
                }
            };
            t.exports = c
        }, { 106: 106, 111: 111, 131: 131, 141: 141, 150: 150, 21: 21, 4: 4 }],
        6: [function(e, t, n) {
            "use strict";

            function r() { this._callbacks = null, this._contexts = null }
            var o = e(28),
                i = e(27),
                a = e(133);
            i(r.prototype, {
                enqueue: function(e, t) { this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(e), this._contexts.push(t) },
                notifyAll: function() {
                    var e = this._callbacks,
                        t = this._contexts;
                    if (e) {
                        a(e.length === t.length), this._callbacks = null, this._contexts = null;
                        for (var n = 0, r = e.length; r > n; n++) e[n].call(t[n]);
                        e.length = 0, t.length = 0
                    }
                },
                reset: function() { this._callbacks = null, this._contexts = null },
                destructor: function() { this.reset() }
            }), o.addPoolingTo(r), t.exports = r
        }, { 133: 133, 27: 27, 28: 28 }],
        7: [function(e, t, n) {
            "use strict";

            function r(e) { return "SELECT" === e.nodeName || "INPUT" === e.nodeName && "file" === e.type }

            function o(e) {
                var t = x.getPooled(T.change, R, e);
                E.accumulateTwoPhaseDispatches(t), _.batchedUpdates(i, t)
            }

            function i(e) { C.enqueueEvents(e), C.processEventQueue() }

            function a(e, t) { P = e, R = t, P.attachEvent("onchange", o) }

            function u() { P && (P.detachEvent("onchange", o), P = null, R = null) }

            function s(e, t, n) { return e === I.topChange ? n : void 0 }

            function l(e, t, n) { e === I.topFocus ? (u(), a(t, n)) : e === I.topBlur && u() }

            function c(e, t) { P = e, R = t, w = e.value, O = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(P, "value", k), P.attachEvent("onpropertychange", d) }

            function p() { P && (delete P.value, P.detachEvent("onpropertychange", d), P = null, R = null, w = null, O = null) }

            function d(e) {
                if ("value" === e.propertyName) {
                    var t = e.srcElement.value;
                    t !== w && (w = t, o(e))
                }
            }

            function f(e, t, n) { return e === I.topInput ? n : void 0 }

            function h(e, t, n) { e === I.topFocus ? (p(), c(t, n)) : e === I.topBlur && p() }

            function m(e, t, n) { return e !== I.topSelectionChange && e !== I.topKeyUp && e !== I.topKeyDown || !P || P.value === w ? void 0 : (w = P.value, R) }

            function v(e) { return "INPUT" === e.nodeName && ("checkbox" === e.type || "radio" === e.type) }

            function g(e, t, n) { return e === I.topClick ? n : void 0 }
            var y = e(15),
                C = e(17),
                E = e(20),
                b = e(21),
                _ = e(85),
                x = e(93),
                D = e(134),
                M = e(136),
                N = e(139),
                I = y.topLevelTypes,
                T = { change: { phasedRegistrationNames: { bubbled: N({ onChange: null }), captured: N({ onChangeCapture: null }) }, dependencies: [I.topBlur, I.topChange, I.topClick, I.topFocus, I.topInput, I.topKeyDown, I.topKeyUp, I.topSelectionChange] } },
                P = null,
                R = null,
                w = null,
                O = null,
                S = !1;
            b.canUseDOM && (S = D("change") && (!("documentMode" in document) || document.documentMode > 8));
            var A = !1;
            b.canUseDOM && (A = D("input") && (!("documentMode" in document) || document.documentMode > 9));
            var k = { get: function() { return O.get.call(this) }, set: function(e) { w = "" + e, O.set.call(this, e) } },
                L = {
                    eventTypes: T,
                    extractEvents: function(e, t, n, o) {
                        var i, a;
                        if (r(t) ? S ? i = s : a = l : M(t) ? A ? i = f : (i = m, a = h) : v(t) && (i = g), i) { var u = i(e, t, n); if (u) { var c = x.getPooled(T.change, u, o); return E.accumulateTwoPhaseDispatches(c), c } }
                        a && a(e, t, n)
                    }
                };
            t.exports = L
        }, { 134: 134, 136: 136, 139: 139, 15: 15, 17: 17, 20: 20, 21: 21, 85: 85, 93: 93 }],
        8: [function(e, t, n) {
            "use strict";
            var r = 0,
                o = { createReactRootIndex: function() { return r++ } };
            t.exports = o
        }, {}],
        9: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { e.insertBefore(t, e.childNodes[n] || null) }
            var o = e(12),
                i = e(70),
                a = e(145),
                u = e(133),
                s = {
                    dangerouslyReplaceNodeWithMarkup: o.dangerouslyReplaceNodeWithMarkup,
                    updateTextContent: a,
                    processUpdates: function(e, t) {
                        for (var n, s = null, l = null, c = 0; c < e.length; c++)
                            if (n = e[c], n.type === i.MOVE_EXISTING || n.type === i.REMOVE_NODE) {
                                var p = n.fromIndex,
                                    d = n.parentNode.childNodes[p],
                                    f = n.parentID;
                                u(d), s = s || {}, s[f] = s[f] || [], s[f][p] = d, l = l || [], l.push(d)
                            }
                        var h = o.dangerouslyRenderMarkup(t);
                        if (l)
                            for (var m = 0; m < l.length; m++) l[m].parentNode.removeChild(l[m]);
                        for (var v = 0; v < e.length; v++) switch (n = e[v], n.type) {
                            case i.INSERT_MARKUP:
                                r(n.parentNode, h[n.markupIndex], n.toIndex);
                                break;
                            case i.MOVE_EXISTING:
                                r(n.parentNode, s[n.parentID][n.fromIndex], n.toIndex);
                                break;
                            case i.TEXT_CONTENT:
                                a(n.parentNode, n.textContent);
                                break;
                            case i.REMOVE_NODE:
                        }
                    }
                };
            t.exports = s
        }, { 12: 12, 133: 133, 145: 145, 70: 70 }],
        10: [function(e, t, n) {
            "use strict";

            function r(e, t) { return (e & t) === t }
            var o = e(133),
                i = {
                    MUST_USE_ATTRIBUTE: 1,
                    MUST_USE_PROPERTY: 2,
                    HAS_SIDE_EFFECTS: 4,
                    HAS_BOOLEAN_VALUE: 8,
                    HAS_NUMERIC_VALUE: 16,
                    HAS_POSITIVE_NUMERIC_VALUE: 48,
                    HAS_OVERLOADED_BOOLEAN_VALUE: 64,
                    injectDOMPropertyConfig: function(e) {
                        var t = e.Properties || {},
                            n = e.DOMAttributeNames || {},
                            a = e.DOMPropertyNames || {},
                            s = e.DOMMutationMethods || {};
                        e.isCustomAttribute && u._isCustomAttributeFunctions.push(e.isCustomAttribute);
                        for (var l in t) {
                            o(!u.isStandardName.hasOwnProperty(l)), u.isStandardName[l] = !0;
                            var c = l.toLowerCase();
                            if (u.getPossibleStandardName[c] = l, n.hasOwnProperty(l)) {
                                var p = n[l];
                                u.getPossibleStandardName[p] = l, u.getAttributeName[l] = p
                            } else u.getAttributeName[l] = c;
                            u.getPropertyName[l] = a.hasOwnProperty(l) ? a[l] : l, u.getMutationMethod[l] = s.hasOwnProperty(l) ? s[l] : null;
                            var d = t[l];
                            u.mustUseAttribute[l] = r(d, i.MUST_USE_ATTRIBUTE), u.mustUseProperty[l] = r(d, i.MUST_USE_PROPERTY), u.hasSideEffects[l] = r(d, i.HAS_SIDE_EFFECTS), u.hasBooleanValue[l] = r(d, i.HAS_BOOLEAN_VALUE), u.hasNumericValue[l] = r(d, i.HAS_NUMERIC_VALUE), u.hasPositiveNumericValue[l] = r(d, i.HAS_POSITIVE_NUMERIC_VALUE), u.hasOverloadedBooleanValue[l] = r(d, i.HAS_OVERLOADED_BOOLEAN_VALUE), o(!u.mustUseAttribute[l] || !u.mustUseProperty[l]), o(u.mustUseProperty[l] || !u.hasSideEffects[l]), o(!!u.hasBooleanValue[l] + !!u.hasNumericValue[l] + !!u.hasOverloadedBooleanValue[l] <= 1)
                        }
                    }
                },
                a = {},
                u = { ID_ATTRIBUTE_NAME: "data-reactid", isStandardName: {}, getPossibleStandardName: {}, getAttributeName: {}, getPropertyName: {}, getMutationMethod: {}, mustUseAttribute: {}, mustUseProperty: {}, hasSideEffects: {}, hasBooleanValue: {}, hasNumericValue: {}, hasPositiveNumericValue: {}, hasOverloadedBooleanValue: {}, _isCustomAttributeFunctions: [], isCustomAttribute: function(e) { for (var t = 0; t < u._isCustomAttributeFunctions.length; t++) { var n = u._isCustomAttributeFunctions[t]; if (n(e)) return !0 } return !1 }, getDefaultValueForProperty: function(e, t) { var n, r = a[e]; return r || (a[e] = r = {}), t in r || (n = document.createElement(e), r[t] = n[t]), r[t] }, injection: i };
            t.exports = u
        }, { 133: 133 }],
        11: [function(e, t, n) {
            "use strict";

            function r(e, t) { return null == t || o.hasBooleanValue[e] && !t || o.hasNumericValue[e] && isNaN(t) || o.hasPositiveNumericValue[e] && 1 > t || o.hasOverloadedBooleanValue[e] && t === !1 }
            var o = e(10),
                i = e(143),
                a = (e(150), {
                    createMarkupForID: function(e) { return o.ID_ATTRIBUTE_NAME + "=" + i(e) },
                    createMarkupForProperty: function(e, t) { if (o.isStandardName.hasOwnProperty(e) && o.isStandardName[e]) { if (r(e, t)) return ""; var n = o.getAttributeName[e]; return o.hasBooleanValue[e] || o.hasOverloadedBooleanValue[e] && t === !0 ? n : n + "=" + i(t) } return o.isCustomAttribute(e) ? null == t ? "" : e + "=" + i(t) : null },
                    setValueForProperty: function(e, t, n) {
                        if (o.isStandardName.hasOwnProperty(t) && o.isStandardName[t]) {
                            var i = o.getMutationMethod[t];
                            if (i) i(e, n);
                            else if (r(t, n)) this.deleteValueForProperty(e, t);
                            else if (o.mustUseAttribute[t]) e.setAttribute(o.getAttributeName[t], "" + n);
                            else {
                                var a = o.getPropertyName[t];
                                o.hasSideEffects[t] && "" + e[a] == "" + n || (e[a] = n)
                            }
                        } else o.isCustomAttribute(t) && (null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                    },
                    deleteValueForProperty: function(e, t) {
                        if (o.isStandardName.hasOwnProperty(t) && o.isStandardName[t]) {
                            var n = o.getMutationMethod[t];
                            if (n) n(e, void 0);
                            else if (o.mustUseAttribute[t]) e.removeAttribute(o.getAttributeName[t]);
                            else {
                                var r = o.getPropertyName[t],
                                    i = o.getDefaultValueForProperty(e.nodeName, r);
                                o.hasSideEffects[t] && "" + e[r] === i || (e[r] = i)
                            }
                        } else o.isCustomAttribute(t) && e.removeAttribute(t)
                    }
                });
            t.exports = a
        }, { 10: 10, 143: 143, 150: 150 }],
        12: [function(e, t, n) {
            "use strict";

            function r(e) { return e.substring(1, e.indexOf(" ")) }
            var o = e(21),
                i = e(110),
                a = e(112),
                u = e(125),
                s = e(133),
                l = /^(<[^ \/>]+)/,
                c = "data-danger-index",
                p = {
                    dangerouslyRenderMarkup: function(e) {
                        s(o.canUseDOM);
                        for (var t, n = {}, p = 0; p < e.length; p++) s(e[p]), t = r(e[p]), t = u(t) ? t : "*", n[t] = n[t] || [], n[t][p] = e[p];
                        var d = [],
                            f = 0;
                        for (t in n)
                            if (n.hasOwnProperty(t)) {
                                var h, m = n[t];
                                for (h in m)
                                    if (m.hasOwnProperty(h)) {
                                        var v = m[h];
                                        m[h] = v.replace(l, "$1 " + c + '="' + h + '" ')
                                    }
                                for (var g = i(m.join(""), a), y = 0; y < g.length; ++y) {
                                    var C = g[y];
                                    C.hasAttribute && C.hasAttribute(c) && (h = +C.getAttribute(c), C.removeAttribute(c), s(!d.hasOwnProperty(h)), d[h] = C, f += 1)
                                }
                            }
                        return s(f === d.length), s(d.length === e.length), d
                    },
                    dangerouslyReplaceNodeWithMarkup: function(e, t) {
                        s(o.canUseDOM), s(t), s("html" !== e.tagName.toLowerCase());
                        var n = i(t, a)[0];
                        e.parentNode.replaceChild(n, e)
                    }
                };
            t.exports = p
        }, { 110: 110, 112: 112, 125: 125, 133: 133, 21: 21 }],
        13: [function(e, t, n) {
            "use strict";
            var r = e(139),
                o = [r({ ResponderEventPlugin: null }), r({ SimpleEventPlugin: null }), r({ TapEventPlugin: null }), r({ EnterLeaveEventPlugin: null }), r({ ChangeEventPlugin: null }), r({ SelectEventPlugin: null }), r({ BeforeInputEventPlugin: null }), r({ AnalyticsEventPlugin: null }), r({ MobileSafariClickEventPlugin: null })];
            t.exports = o
        }, { 139: 139 }],
        14: [function(e, t, n) {
            "use strict";
            var r = e(15),
                o = e(20),
                i = e(97),
                a = e(68),
                u = e(139),
                s = r.topLevelTypes,
                l = a.getFirstReactDOM,
                c = { mouseEnter: { registrationName: u({ onMouseEnter: null }), dependencies: [s.topMouseOut, s.topMouseOver] }, mouseLeave: { registrationName: u({ onMouseLeave: null }), dependencies: [s.topMouseOut, s.topMouseOver] } },
                p = [null, null],
                d = {
                    eventTypes: c,
                    extractEvents: function(e, t, n, r) {
                        if (e === s.topMouseOver && (r.relatedTarget || r.fromElement)) return null;
                        if (e !== s.topMouseOut && e !== s.topMouseOver) return null;
                        var u;
                        if (t.window === t) u = t;
                        else {
                            var d = t.ownerDocument;
                            u = d ? d.defaultView || d.parentWindow : window
                        }
                        var f, h;
                        if (e === s.topMouseOut ? (f = t, h = l(r.relatedTarget || r.toElement) || u) : (f = u, h = t), f === h) return null;
                        var m = f ? a.getID(f) : "",
                            v = h ? a.getID(h) : "",
                            g = i.getPooled(c.mouseLeave, m, r);
                        g.type = "mouseleave", g.target = f, g.relatedTarget = h;
                        var y = i.getPooled(c.mouseEnter, v, r);
                        return y.type = "mouseenter", y.target = h, y.relatedTarget = f, o.accumulateEnterLeaveDispatches(g, y, m, v), p[0] = g, p[1] = y, p
                    }
                };
            t.exports = d
        }, { 139: 139, 15: 15, 20: 20, 68: 68, 97: 97 }],
        15: [function(e, t, n) {
            "use strict";
            var r = e(138),
                o = r({ bubbled: null, captured: null }),
                i = r({ topBlur: null, topChange: null, topClick: null, topCompositionEnd: null, topCompositionStart: null, topCompositionUpdate: null, topContextMenu: null, topCopy: null, topCut: null, topDoubleClick: null, topDrag: null, topDragEnd: null, topDragEnter: null, topDragExit: null, topDragLeave: null, topDragOver: null, topDragStart: null, topDrop: null, topError: null, topFocus: null, topInput: null, topKeyDown: null, topKeyPress: null, topKeyUp: null, topLoad: null, topMouseDown: null, topMouseMove: null, topMouseOut: null, topMouseOver: null, topMouseUp: null, topPaste: null, topReset: null, topScroll: null, topSelectionChange: null, topSubmit: null, topTextInput: null, topTouchCancel: null, topTouchEnd: null, topTouchMove: null, topTouchStart: null, topWheel: null }),
                a = { topLevelTypes: i, PropagationPhases: o };
            t.exports = a
        }, { 138: 138 }],
        16: [function(e, t, n) {
            var r = e(112),
                o = { listen: function(e, t, n) { return e.addEventListener ? (e.addEventListener(t, n, !1), { remove: function() { e.removeEventListener(t, n, !1) } }) : e.attachEvent ? (e.attachEvent("on" + t, n), { remove: function() { e.detachEvent("on" + t, n) } }) : void 0 }, capture: function(e, t, n) { return e.addEventListener ? (e.addEventListener(t, n, !0), { remove: function() { e.removeEventListener(t, n, !0) } }) : { remove: r } }, registerDefault: function() {} };
            t.exports = o
        }, { 112: 112 }],
        17: [function(e, t, n) {
            "use strict";
            var r = e(18),
                o = e(19),
                i = e(103),
                a = e(118),
                u = e(133),
                s = {},
                l = null,
                c = function(e) {
                    if (e) {
                        var t = o.executeDispatch,
                            n = r.getPluginModuleForEvent(e);
                        n && n.executeDispatch && (t = n.executeDispatch), o.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e)
                    }
                },
                p = null,
                d = {
                    injection: { injectMount: o.injection.injectMount, injectInstanceHandle: function(e) { p = e }, getInstanceHandle: function() { return p }, injectEventPluginOrder: r.injectEventPluginOrder, injectEventPluginsByName: r.injectEventPluginsByName },
                    eventNameDispatchConfigs: r.eventNameDispatchConfigs,
                    registrationNameModules: r.registrationNameModules,
                    putListener: function(e, t, n) {
                        u(!n || "function" == typeof n);
                        var r = s[t] || (s[t] = {});
                        r[e] = n
                    },
                    getListener: function(e, t) { var n = s[t]; return n && n[e] },
                    deleteListener: function(e, t) {
                        var n = s[t];
                        n && delete n[e]
                    },
                    deleteAllListeners: function(e) { for (var t in s) delete s[t][e] },
                    extractEvents: function(e, t, n, o) {
                        for (var a, u = r.plugins, s = 0, l = u.length; l > s; s++) {
                            var c = u[s];
                            if (c) {
                                var p = c.extractEvents(e, t, n, o);
                                p && (a = i(a, p))
                            }
                        }
                        return a
                    },
                    enqueueEvents: function(e) { e && (l = i(l, e)) },
                    processEventQueue: function() {
                        var e = l;
                        l = null, a(e, c), u(!l)
                    },
                    __purge: function() { s = {} },
                    __getListenerBank: function() { return s }
                };
            t.exports = d
        }, { 103: 103, 118: 118, 133: 133, 18: 18, 19: 19 }],
        18: [function(e, t, n) {
            "use strict";

            function r() {
                if (u)
                    for (var e in s) {
                        var t = s[e],
                            n = u.indexOf(e);
                        if (a(n > -1), !l.plugins[n]) { a(t.extractEvents), l.plugins[n] = t; var r = t.eventTypes; for (var i in r) a(o(r[i], t, i)) }
                    }
            }

            function o(e, t, n) {
                a(!l.eventNameDispatchConfigs.hasOwnProperty(n)), l.eventNameDispatchConfigs[n] = e;
                var r = e.phasedRegistrationNames;
                if (r) {
                    for (var o in r)
                        if (r.hasOwnProperty(o)) {
                            var u = r[o];
                            i(u, t, n)
                        }
                    return !0
                }
                return e.registrationName ? (i(e.registrationName, t, n), !0) : !1
            }

            function i(e, t, n) { a(!l.registrationNameModules[e]), l.registrationNameModules[e] = t, l.registrationNameDependencies[e] = t.eventTypes[n].dependencies }
            var a = e(133),
                u = null,
                s = {},
                l = {
                    plugins: [],
                    eventNameDispatchConfigs: {},
                    registrationNameModules: {},
                    registrationNameDependencies: {},
                    injectEventPluginOrder: function(e) { a(!u), u = Array.prototype.slice.call(e), r() },
                    injectEventPluginsByName: function(e) {
                        var t = !1;
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var o = e[n];
                                s.hasOwnProperty(n) && s[n] === o || (a(!s[n]), s[n] = o, t = !0)
                            }
                        t && r()
                    },
                    getPluginModuleForEvent: function(e) {
                        var t = e.dispatchConfig;
                        if (t.registrationName) return l.registrationNameModules[t.registrationName] || null;
                        for (var n in t.phasedRegistrationNames)
                            if (t.phasedRegistrationNames.hasOwnProperty(n)) { var r = l.registrationNameModules[t.phasedRegistrationNames[n]]; if (r) return r }
                        return null
                    },
                    _resetEventPlugins: function() {
                        u = null;
                        for (var e in s) s.hasOwnProperty(e) && delete s[e];
                        l.plugins.length = 0;
                        var t = l.eventNameDispatchConfigs;
                        for (var n in t) t.hasOwnProperty(n) && delete t[n];
                        var r = l.registrationNameModules;
                        for (var o in r) r.hasOwnProperty(o) && delete r[o]
                    }
                };
            t.exports = l
        }, { 133: 133 }],
        19: [function(e, t, n) {
            "use strict";

            function r(e) { return e === v.topMouseUp || e === v.topTouchEnd || e === v.topTouchCancel }

            function o(e) { return e === v.topMouseMove || e === v.topTouchMove }

            function i(e) { return e === v.topMouseDown || e === v.topTouchStart }

            function a(e, t) {
                var n = e._dispatchListeners,
                    r = e._dispatchIDs;
                if (Array.isArray(n))
                    for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) t(e, n[o], r[o]);
                else n && t(e, n, r)
            }

            function u(e, t, n) { e.currentTarget = m.Mount.getNode(n); var r = t(e, n); return e.currentTarget = null, r }

            function s(e, t) { a(e, t), e._dispatchListeners = null, e._dispatchIDs = null }

            function l(e) {
                var t = e._dispatchListeners,
                    n = e._dispatchIDs;
                if (Array.isArray(t)) {
                    for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                        if (t[r](e, n[r])) return n[r]
                } else if (t && t(e, n)) return n;
                return null
            }

            function c(e) { var t = l(e); return e._dispatchIDs = null, e._dispatchListeners = null, t }

            function p(e) {
                var t = e._dispatchListeners,
                    n = e._dispatchIDs;
                h(!Array.isArray(t));
                var r = t ? t(e, n) : null;
                return e._dispatchListeners = null, e._dispatchIDs = null, r
            }

            function d(e) { return !!e._dispatchListeners }
            var f = e(15),
                h = e(133),
                m = { Mount: null, injectMount: function(e) { m.Mount = e } },
                v = f.topLevelTypes,
                g = { isEndish: r, isMoveish: o, isStartish: i, executeDirectDispatch: p, executeDispatch: u, executeDispatchesInOrder: s, executeDispatchesInOrderStopAtTrue: c, hasDispatches: d, injection: m, useTouchEvents: !1 };
            t.exports = g
        }, { 133: 133, 15: 15 }],
        20: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { var r = t.dispatchConfig.phasedRegistrationNames[n]; return v(e, r) }

            function o(e, t, n) {
                var o = t ? m.bubbled : m.captured,
                    i = r(e, n, o);
                i && (n._dispatchListeners = f(n._dispatchListeners, i), n._dispatchIDs = f(n._dispatchIDs, e))
            }

            function i(e) { e && e.dispatchConfig.phasedRegistrationNames && d.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker, o, e) }

            function a(e, t, n) {
                if (n && n.dispatchConfig.registrationName) {
                    var r = n.dispatchConfig.registrationName,
                        o = v(e, r);
                    o && (n._dispatchListeners = f(n._dispatchListeners, o), n._dispatchIDs = f(n._dispatchIDs, e))
                }
            }

            function u(e) { e && e.dispatchConfig.registrationName && a(e.dispatchMarker, null, e) }

            function s(e) { h(e, i) }

            function l(e, t, n, r) { d.injection.getInstanceHandle().traverseEnterLeave(n, r, a, e, t) }

            function c(e) { h(e, u) }
            var p = e(15),
                d = e(17),
                f = e(103),
                h = e(118),
                m = p.PropagationPhases,
                v = d.getListener,
                g = { accumulateTwoPhaseDispatches: s, accumulateDirectDispatches: c, accumulateEnterLeaveDispatches: l };
            t.exports = g
        }, { 103: 103, 118: 118, 15: 15, 17: 17 }],
        21: [function(e, t, n) {
            "use strict";
            var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
                o = { canUseDOM: r, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent), canUseViewport: r && !!window.screen, isInWorker: !r };
            t.exports = o
        }, {}],
        22: [function(e, t, n) {
            "use strict";

            function r(e) { this._root = e, this._startText = this.getText(), this._fallbackText = null }
            var o = e(28),
                i = e(27),
                a = e(128);
            i(r.prototype, {
                getText: function() { return "value" in this._root ? this._root.value : this._root[a()] },
                getData: function() {
                    if (this._fallbackText) return this._fallbackText;
                    var e, t, n = this._startText,
                        r = n.length,
                        o = this.getText(),
                        i = o.length;
                    for (e = 0; r > e && n[e] === o[e]; e++);
                    var a = r - e;
                    for (t = 1; a >= t && n[r - t] === o[i - t]; t++);
                    var u = t > 1 ? 1 - t : void 0;
                    return this._fallbackText = o.slice(e, u), this._fallbackText
                }
            }), o.addPoolingTo(r), t.exports = r
        }, { 128: 128, 27: 27, 28: 28 }],
        23: [function(e, t, n) {
            "use strict";
            var r, o = e(10),
                i = e(21),
                a = o.injection.MUST_USE_ATTRIBUTE,
                u = o.injection.MUST_USE_PROPERTY,
                s = o.injection.HAS_BOOLEAN_VALUE,
                l = o.injection.HAS_SIDE_EFFECTS,
                c = o.injection.HAS_NUMERIC_VALUE,
                p = o.injection.HAS_POSITIVE_NUMERIC_VALUE,
                d = o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
            if (i.canUseDOM) {
                var f = document.implementation;
                r = f && f.hasFeature && f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
            }
            var h = { isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/), Properties: { accept: null, acceptCharset: null, accessKey: null, action: null, allowFullScreen: a | s, allowTransparency: a, alt: null, async: s, autoComplete: null, autoPlay: s, cellPadding: null, cellSpacing: null, charSet: a, checked: u | s, classID: a, className: r ? a : u, cols: a | p, colSpan: null, content: null, contentEditable: null, contextMenu: a, controls: u | s, coords: null, crossOrigin: null, data: null, dateTime: a, defer: s, dir: null, disabled: a | s, download: d, draggable: null, encType: null, form: a, formAction: a, formEncType: a, formMethod: a, formNoValidate: s, formTarget: a, frameBorder: a, headers: null, height: a, hidden: a | s, high: null, href: null, hrefLang: null, htmlFor: null, httpEquiv: null, icon: null, id: u, label: null, lang: null, list: a, loop: u | s, low: null, manifest: a, marginHeight: null, marginWidth: null, max: null, maxLength: a, media: a, mediaGroup: null, method: null, min: null, multiple: u | s, muted: u | s, name: null, noValidate: s, open: s, optimum: null, pattern: null, placeholder: null, poster: null, preload: null, radioGroup: null, readOnly: u | s, rel: null, required: s, role: a, rows: a | p, rowSpan: null, sandbox: null, scope: null, scoped: s, scrolling: null, seamless: a | s, selected: u | s, shape: null, size: a | p, sizes: a, span: p, spellCheck: null, src: null, srcDoc: u, srcSet: a, start: c, step: null, style: null, tabIndex: null, target: null, title: null, type: null, useMap: null, value: u | l, width: a, wmode: a, autoCapitalize: null, autoCorrect: null, itemProp: a, itemScope: a | s, itemType: a, itemID: a, itemRef: a, property: null, unselectable: a }, DOMAttributeNames: { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" }, DOMPropertyNames: { autoCapitalize: "autocapitalize", autoComplete: "autocomplete", autoCorrect: "autocorrect", autoFocus: "autofocus", autoPlay: "autoplay", encType: "encoding", hrefLang: "hreflang", radioGroup: "radiogroup", spellCheck: "spellcheck", srcDoc: "srcdoc", srcSet: "srcset" } };
            t.exports = h
        }, { 10: 10, 21: 21 }],
        24: [function(e, t, n) {
            "use strict";

            function r(e) { l(null == e.props.checkedLink || null == e.props.valueLink) }

            function o(e) { r(e), l(null == e.props.value && null == e.props.onChange) }

            function i(e) { r(e), l(null == e.props.checked && null == e.props.onChange) }

            function a(e) { this.props.valueLink.requestChange(e.target.value) }

            function u(e) { this.props.checkedLink.requestChange(e.target.checked) }
            var s = e(76),
                l = e(133),
                c = { button: !0, checkbox: !0, image: !0, hidden: !0, radio: !0, reset: !0, submit: !0 },
                p = { Mixin: { propTypes: { value: function(e, t, n) { return !e[t] || c[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.") }, checked: function(e, t, n) { return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.") }, onChange: s.func } }, getValue: function(e) { return e.props.valueLink ? (o(e), e.props.valueLink.value) : e.props.value }, getChecked: function(e) { return e.props.checkedLink ? (i(e), e.props.checkedLink.value) : e.props.checked }, getOnChange: function(e) { return e.props.valueLink ? (o(e), a) : e.props.checkedLink ? (i(e), u) : e.props.onChange } };
            t.exports = p
        }, { 133: 133, 76: 76 }],
        25: [function(e, t, n) {
            "use strict";

            function r(e) { e.remove() }
            var o = e(30),
                i = e(103),
                a = e(118),
                u = e(133),
                s = {
                    trapBubbledEvent: function(e, t) {
                        u(this.isMounted());
                        var n = this.getDOMNode();
                        u(n);
                        var r = o.trapBubbledEvent(e, t, n);
                        this._localEventListeners = i(this._localEventListeners, r)
                    },
                    componentWillUnmount: function() { this._localEventListeners && a(this._localEventListeners, r) }
                };
            t.exports = s
        }, { 103: 103, 118: 118, 133: 133, 30: 30 }],
        26: [function(e, t, n) {
            "use strict";
            var r = e(15),
                o = e(112),
                i = r.topLevelTypes,
                a = {
                    eventTypes: null,
                    extractEvents: function(e, t, n, r) {
                        if (e === i.topTouchStart) {
                            var a = r.target;
                            a && !a.onclick && (a.onclick = o)
                        }
                    }
                };
            t.exports = a
        }, { 112: 112, 15: 15 }],
        27: [function(e, t, n) {
            "use strict";

            function r(e, t) { if (null == e) throw new TypeError("Object.assign target cannot be null or undefined"); for (var n = Object(e), r = Object.prototype.hasOwnProperty, o = 1; o < arguments.length; o++) { var i = arguments[o]; if (null != i) { var a = Object(i); for (var u in a) r.call(a, u) && (n[u] = a[u]) } } return n }
            t.exports = r
        }, {}],
        28: [function(e, t, n) {
            "use strict";
            var r = e(133),
                o = function(e) { var t = this; if (t.instancePool.length) { var n = t.instancePool.pop(); return t.call(n, e), n } return new t(e) },
                i = function(e, t) { var n = this; if (n.instancePool.length) { var r = n.instancePool.pop(); return n.call(r, e, t), r } return new n(e, t) },
                a = function(e, t, n) { var r = this; if (r.instancePool.length) { var o = r.instancePool.pop(); return r.call(o, e, t, n), o } return new r(e, t, n) },
                u = function(e, t, n, r, o) { var i = this; if (i.instancePool.length) { var a = i.instancePool.pop(); return i.call(a, e, t, n, r, o), a } return new i(e, t, n, r, o) },
                s = function(e) {
                    var t = this;
                    r(e instanceof t), e.destructor && e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
                },
                l = 10,
                c = o,
                p = function(e, t) { var n = e; return n.instancePool = [], n.getPooled = t || c, n.poolSize || (n.poolSize = l), n.release = s, n },
                d = { addPoolingTo: p, oneArgumentPooler: o, twoArgumentPooler: i, threeArgumentPooler: a, fiveArgumentPooler: u };
            t.exports = d
        }, { 133: 133 }],
        29: [function(e, t, n) {
            "use strict";
            var r = e(115),
                o = { getDOMNode: function() { return r(this) } };
            t.exports = o
        }, { 115: 115 }],
        30: [function(e, t, n) {
            "use strict";

            function r(e) { return Object.prototype.hasOwnProperty.call(e, m) || (e[m] = f++, p[e[m]] = {}), p[e[m]] }
            var o = e(15),
                i = e(17),
                a = e(18),
                u = e(59),
                s = e(102),
                l = e(27),
                c = e(134),
                p = {},
                d = !1,
                f = 0,
                h = { topBlur: "blur", topChange: "change", topClick: "click", topCompositionEnd: "compositionend", topCompositionStart: "compositionstart", topCompositionUpdate: "compositionupdate", topContextMenu: "contextmenu", topCopy: "copy", topCut: "cut", topDoubleClick: "dblclick", topDrag: "drag", topDragEnd: "dragend", topDragEnter: "dragenter", topDragExit: "dragexit", topDragLeave: "dragleave", topDragOver: "dragover", topDragStart: "dragstart", topDrop: "drop", topFocus: "focus", topInput: "input", topKeyDown: "keydown", topKeyPress: "keypress", topKeyUp: "keyup", topMouseDown: "mousedown", topMouseMove: "mousemove", topMouseOut: "mouseout", topMouseOver: "mouseover", topMouseUp: "mouseup", topPaste: "paste", topScroll: "scroll", topSelectionChange: "selectionchange", topTextInput: "textInput", topTouchCancel: "touchcancel", topTouchEnd: "touchend", topTouchMove: "touchmove", topTouchStart: "touchstart", topWheel: "wheel" },
                m = "_reactListenersID" + String(Math.random()).slice(2),
                v = l({}, u, {
                    ReactEventListener: null,
                    injection: { injectReactEventListener: function(e) { e.setHandleTopLevel(v.handleTopLevel), v.ReactEventListener = e } },
                    setEnabled: function(e) { v.ReactEventListener && v.ReactEventListener.setEnabled(e) },
                    isEnabled: function() { return !(!v.ReactEventListener || !v.ReactEventListener.isEnabled()) },
                    listenTo: function(e, t) {
                        for (var n = t, i = r(n), u = a.registrationNameDependencies[e], s = o.topLevelTypes, l = 0, p = u.length; p > l; l++) {
                            var d = u[l];
                            i.hasOwnProperty(d) && i[d] || (d === s.topWheel ? c("wheel") ? v.ReactEventListener.trapBubbledEvent(s.topWheel, "wheel", n) : c("mousewheel") ? v.ReactEventListener.trapBubbledEvent(s.topWheel, "mousewheel", n) : v.ReactEventListener.trapBubbledEvent(s.topWheel, "DOMMouseScroll", n) : d === s.topScroll ? c("scroll", !0) ? v.ReactEventListener.trapCapturedEvent(s.topScroll, "scroll", n) : v.ReactEventListener.trapBubbledEvent(s.topScroll, "scroll", v.ReactEventListener.WINDOW_HANDLE) : d === s.topFocus || d === s.topBlur ? (c("focus", !0) ? (v.ReactEventListener.trapCapturedEvent(s.topFocus, "focus", n), v.ReactEventListener.trapCapturedEvent(s.topBlur, "blur", n)) : c("focusin") && (v.ReactEventListener.trapBubbledEvent(s.topFocus, "focusin", n), v.ReactEventListener.trapBubbledEvent(s.topBlur, "focusout", n)), i[s.topBlur] = !0, i[s.topFocus] = !0) : h.hasOwnProperty(d) && v.ReactEventListener.trapBubbledEvent(d, h[d], n), i[d] = !0)
                        }
                    },
                    trapBubbledEvent: function(e, t, n) {
                        return v.ReactEventListener.trapBubbledEvent(e, t, n);

                    },
                    trapCapturedEvent: function(e, t, n) { return v.ReactEventListener.trapCapturedEvent(e, t, n) },
                    ensureScrollValueMonitoring: function() {
                        if (!d) {
                            var e = s.refreshScrollValues;
                            v.ReactEventListener.monitorScrollValue(e), d = !0
                        }
                    },
                    eventNameDispatchConfigs: i.eventNameDispatchConfigs,
                    registrationNameModules: i.registrationNameModules,
                    putListener: i.putListener,
                    getListener: i.getListener,
                    deleteListener: i.deleteListener,
                    deleteAllListeners: i.deleteAllListeners
                });
            t.exports = v
        }, { 102: 102, 134: 134, 15: 15, 17: 17, 18: 18, 27: 27, 59: 59 }],
        31: [function(e, t, n) {
            "use strict";
            var r = e(79),
                o = e(116),
                i = e(132),
                a = e(147),
                u = {
                    instantiateChildren: function(e, t, n) {
                        var r = o(e);
                        for (var a in r)
                            if (r.hasOwnProperty(a)) {
                                var u = r[a],
                                    s = i(u, null);
                                r[a] = s
                            }
                        return r
                    },
                    updateChildren: function(e, t, n, u) {
                        var s = o(t);
                        if (!s && !e) return null;
                        var l;
                        for (l in s)
                            if (s.hasOwnProperty(l)) {
                                var c = e && e[l],
                                    p = c && c._currentElement,
                                    d = s[l];
                                if (a(p, d)) r.receiveComponent(c, d, n, u), s[l] = c;
                                else {
                                    c && r.unmountComponent(c, l);
                                    var f = i(d, null);
                                    s[l] = f
                                }
                            }
                        for (l in e) !e.hasOwnProperty(l) || s && s.hasOwnProperty(l) || r.unmountComponent(e[l]);
                        return s
                    },
                    unmountChildren: function(e) {
                        for (var t in e) {
                            var n = e[t];
                            r.unmountComponent(n)
                        }
                    }
                };
            t.exports = u
        }, { 116: 116, 132: 132, 147: 147, 79: 79 }],
        32: [function(e, t, n) {
            "use strict";

            function r(e, t) { this.forEachFunction = e, this.forEachContext = t }

            function o(e, t, n, r) {
                var o = e;
                o.forEachFunction.call(o.forEachContext, t, r)
            }

            function i(e, t, n) {
                if (null == e) return e;
                var i = r.getPooled(t, n);
                f(e, o, i), r.release(i)
            }

            function a(e, t, n) { this.mapResult = e, this.mapFunction = t, this.mapContext = n }

            function u(e, t, n, r) {
                var o = e,
                    i = o.mapResult,
                    a = !i.hasOwnProperty(n);
                if (a) {
                    var u = o.mapFunction.call(o.mapContext, t, r);
                    i[n] = u
                }
            }

            function s(e, t, n) {
                if (null == e) return e;
                var r = {},
                    o = a.getPooled(r, t, n);
                return f(e, u, o), a.release(o), d.create(r)
            }

            function l(e, t, n, r) { return null }

            function c(e, t) { return f(e, l, null) }
            var p = e(28),
                d = e(61),
                f = e(149),
                h = (e(150), p.twoArgumentPooler),
                m = p.threeArgumentPooler;
            p.addPoolingTo(r, h), p.addPoolingTo(a, m);
            var v = { forEach: i, map: s, count: c };
            t.exports = v
        }, { 149: 149, 150: 150, 28: 28, 61: 61 }],
        33: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = D.hasOwnProperty(t) ? D[t] : null;
                N.hasOwnProperty(t) && y(n === _.OVERRIDE_BASE), e.hasOwnProperty(t) && y(n === _.DEFINE_MANY || n === _.DEFINE_MANY_MERGED)
            }

            function o(e, t) {
                if (t) {
                    y("function" != typeof t), y(!d.isValidElement(t));
                    var n = e.prototype;
                    t.hasOwnProperty(b) && M.mixins(e, t.mixins);
                    for (var o in t)
                        if (t.hasOwnProperty(o) && o !== b) {
                            var i = t[o];
                            if (r(n, o), M.hasOwnProperty(o)) M[o](e, i);
                            else {
                                var a = D.hasOwnProperty(o),
                                    l = n.hasOwnProperty(o),
                                    c = i && i.__reactDontBind,
                                    p = "function" == typeof i,
                                    f = p && !a && !l && !c;
                                if (f) n.__reactAutoBindMap || (n.__reactAutoBindMap = {}), n.__reactAutoBindMap[o] = i, n[o] = i;
                                else if (l) {
                                    var h = D[o];
                                    y(a && (h === _.DEFINE_MANY_MERGED || h === _.DEFINE_MANY)), h === _.DEFINE_MANY_MERGED ? n[o] = u(n[o], i) : h === _.DEFINE_MANY && (n[o] = s(n[o], i))
                                } else n[o] = i
                            }
                        }
                }
            }

            function i(e, t) {
                if (t)
                    for (var n in t) {
                        var r = t[n];
                        if (t.hasOwnProperty(n)) {
                            var o = n in M;
                            y(!o);
                            var i = n in e;
                            y(!i), e[n] = r
                        }
                    }
            }

            function a(e, t) { y(e && t && "object" == typeof e && "object" == typeof t); for (var n in t) t.hasOwnProperty(n) && (y(void 0 === e[n]), e[n] = t[n]); return e }

            function u(e, t) {
                return function() {
                    var n = e.apply(this, arguments),
                        r = t.apply(this, arguments);
                    if (null == n) return r;
                    if (null == r) return n;
                    var o = {};
                    return a(o, n), a(o, r), o
                }
            }

            function s(e, t) { return function() { e.apply(this, arguments), t.apply(this, arguments) } }

            function l(e, t) { var n = t.bind(e); return n }

            function c(e) {
                for (var t in e.__reactAutoBindMap)
                    if (e.__reactAutoBindMap.hasOwnProperty(t)) {
                        var n = e.__reactAutoBindMap[t];
                        e[t] = l(e, f.guard(n, e.constructor.displayName + "." + t))
                    }
            }
            var p = e(34),
                d = (e(39), e(55)),
                f = e(58),
                h = e(65),
                m = e(66),
                v = (e(75), e(74), e(84)),
                g = e(27),
                y = e(133),
                C = e(138),
                E = e(139),
                b = (e(150), E({ mixins: null })),
                _ = C({ DEFINE_ONCE: null, DEFINE_MANY: null, OVERRIDE_BASE: null, DEFINE_MANY_MERGED: null }),
                x = [],
                D = { mixins: _.DEFINE_MANY, statics: _.DEFINE_MANY, propTypes: _.DEFINE_MANY, contextTypes: _.DEFINE_MANY, childContextTypes: _.DEFINE_MANY, getDefaultProps: _.DEFINE_MANY_MERGED, getInitialState: _.DEFINE_MANY_MERGED, getChildContext: _.DEFINE_MANY_MERGED, render: _.DEFINE_ONCE, componentWillMount: _.DEFINE_MANY, componentDidMount: _.DEFINE_MANY, componentWillReceiveProps: _.DEFINE_MANY, shouldComponentUpdate: _.DEFINE_ONCE, componentWillUpdate: _.DEFINE_MANY, componentDidUpdate: _.DEFINE_MANY, componentWillUnmount: _.DEFINE_MANY, updateComponent: _.OVERRIDE_BASE },
                M = {
                    displayName: function(e, t) { e.displayName = t },
                    mixins: function(e, t) {
                        if (t)
                            for (var n = 0; n < t.length; n++) o(e, t[n])
                    },
                    childContextTypes: function(e, t) { e.childContextTypes = g({}, e.childContextTypes, t) },
                    contextTypes: function(e, t) { e.contextTypes = g({}, e.contextTypes, t) },
                    getDefaultProps: function(e, t) { e.getDefaultProps = e.getDefaultProps ? u(e.getDefaultProps, t) : t },
                    propTypes: function(e, t) { e.propTypes = g({}, e.propTypes, t) },
                    statics: function(e, t) { i(e, t) }
                },
                N = { replaceState: function(e, t) { v.enqueueReplaceState(this, e), t && v.enqueueCallback(this, t) }, isMounted: function() { var e = h.get(this); return e && e !== m.currentlyMountingInstance }, setProps: function(e, t) { v.enqueueSetProps(this, e), t && v.enqueueCallback(this, t) }, replaceProps: function(e, t) { v.enqueueReplaceProps(this, e), t && v.enqueueCallback(this, t) } },
                I = function() {};
            g(I.prototype, p.prototype, N);
            var T = {
                createClass: function(e) {
                    var t = function(e, t) {
                        this.__reactAutoBindMap && c(this), this.props = e, this.context = t, this.state = null;
                        var n = this.getInitialState ? this.getInitialState() : null;
                        y("object" == typeof n && !Array.isArray(n)), this.state = n
                    };
                    t.prototype = new I, t.prototype.constructor = t, x.forEach(o.bind(null, t)), o(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), y(t.prototype.render);
                    for (var n in D) t.prototype[n] || (t.prototype[n] = null);
                    return t.type = t, t
                },
                injection: { injectMixin: function(e) { x.push(e) } }
            };
            t.exports = T
        }, { 133: 133, 138: 138, 139: 139, 150: 150, 27: 27, 34: 34, 39: 39, 55: 55, 58: 58, 65: 65, 66: 66, 74: 74, 75: 75, 84: 84 }],
        34: [function(e, t, n) {
            "use strict";

            function r(e, t) { this.props = e, this.context = t }
            var o = e(84),
                i = e(133);
            e(150), r.prototype.setState = function(e, t) { i("object" == typeof e || "function" == typeof e || null == e), o.enqueueSetState(this, e), t && o.enqueueCallback(this, t) }, r.prototype.forceUpdate = function(e) { o.enqueueForceUpdate(this), e && o.enqueueCallback(this, e) }, t.exports = r
        }, { 133: 133, 150: 150, 84: 84 }],
        35: [function(e, t, n) {
            "use strict";
            var r = e(44),
                o = e(68),
                i = { processChildrenUpdates: r.dangerouslyProcessChildrenUpdates, replaceNodeWithMarkupByID: r.dangerouslyReplaceNodeWithMarkupByID, unmountIDFromEnvironment: function(e) { o.purgeID(e) } };
            t.exports = i
        }, { 44: 44, 68: 68 }],
        36: [function(e, t, n) {
            "use strict";
            var r = e(133),
                o = !1,
                i = { unmountIDFromEnvironment: null, replaceNodeWithMarkupByID: null, processChildrenUpdates: null, injection: { injectEnvironment: function(e) { r(!o), i.unmountIDFromEnvironment = e.unmountIDFromEnvironment, i.replaceNodeWithMarkupByID = e.replaceNodeWithMarkupByID, i.processChildrenUpdates = e.processChildrenUpdates, o = !0 } } };
            t.exports = i
        }, { 133: 133 }],
        37: [function(e, t, n) {
            "use strict";

            function r(e) { var t = e._currentElement._owner || null; if (t) { var n = t.getName(); if (n) return " Check the render method of `" + n + "`." } return "" }
            var o = e(36),
                i = e(38),
                a = e(39),
                u = e(55),
                s = (e(56), e(65)),
                l = e(66),
                c = e(71),
                p = e(73),
                d = e(75),
                f = (e(74), e(79)),
                h = e(85),
                m = e(27),
                v = e(113),
                g = e(133),
                y = e(147),
                C = (e(150), 1),
                E = {
                    construct: function(e) { this._currentElement = e, this._rootNodeID = null, this._instance = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._isTopLevel = !1, this._pendingCallbacks = null },
                    mountComponent: function(e, t, n) {
                        this._context = n, this._mountOrder = C++, this._rootNodeID = e;
                        var r = this._processProps(this._currentElement.props),
                            o = this._processContext(this._currentElement._context),
                            i = c.getComponentClassForElement(this._currentElement),
                            a = new i(r, o);
                        a.props = r, a.context = o, a.refs = v, this._instance = a, s.set(a, this);
                        var u = a.state;
                        void 0 === u && (a.state = u = null), g("object" == typeof u && !Array.isArray(u)), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
                        var p, d, h = l.currentlyMountingInstance;
                        l.currentlyMountingInstance = this;
                        try { a.componentWillMount && (a.componentWillMount(), this._pendingStateQueue && (a.state = this._processPendingState(a.props, a.context))), p = this._getValidatedChildContext(n), d = this._renderValidatedComponent(p) } finally { l.currentlyMountingInstance = h }
                        this._renderedComponent = this._instantiateReactComponent(d, this._currentElement.type);
                        var m = f.mountComponent(this._renderedComponent, e, t, this._mergeChildContext(n, p));
                        return a.componentDidMount && t.getReactMountReady().enqueue(a.componentDidMount, a), m
                    },
                    unmountComponent: function() {
                        var e = this._instance;
                        if (e.componentWillUnmount) {
                            var t = l.currentlyUnmountingInstance;
                            l.currentlyUnmountingInstance = this;
                            try { e.componentWillUnmount() } finally { l.currentlyUnmountingInstance = t }
                        }
                        f.unmountComponent(this._renderedComponent), this._renderedComponent = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = null, s.remove(e)
                    },
                    _setPropsInternal: function(e, t) {
                        var n = this._pendingElement || this._currentElement;
                        this._pendingElement = u.cloneAndReplaceProps(n, m({}, n.props, e)), h.enqueueUpdate(this, t)
                    },
                    _maskContext: function(e) {
                        var t = null;
                        if ("string" == typeof this._currentElement.type) return v;
                        var n = this._currentElement.type.contextTypes;
                        if (!n) return v;
                        t = {};
                        for (var r in n) t[r] = e[r];
                        return t
                    },
                    _processContext: function(e) { var t = this._maskContext(e); return t },
                    _getValidatedChildContext: function(e) {
                        var t = this._instance,
                            n = t.getChildContext && t.getChildContext();
                        if (n) { g("object" == typeof t.constructor.childContextTypes); for (var r in n) g(r in t.constructor.childContextTypes); return n }
                        return null
                    },
                    _mergeChildContext: function(e, t) { return t ? m({}, e, t) : e },
                    _processProps: function(e) { return e },
                    _checkPropTypes: function(e, t, n) {
                        var o = this.getName();
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var a;
                                try { g("function" == typeof e[i]), a = e[i](t, i, o, n) } catch (u) { a = u }
                                a instanceof Error && (r(this), n === d.prop)
                            }
                    },
                    receiveComponent: function(e, t, n) {
                        var r = this._currentElement,
                            o = this._context;
                        this._pendingElement = null, this.updateComponent(t, r, e, o, n)
                    },
                    performUpdateIfNecessary: function(e) { null != this._pendingElement && f.receiveComponent(this, this._pendingElement || this._currentElement, e, this._context), (null !== this._pendingStateQueue || this._pendingForceUpdate) && this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context) },
                    _warnIfContextsDiffer: function(e, t) { e = this._maskContext(e), t = this._maskContext(t); for (var n = Object.keys(t).sort(), r = (this.getName() || "ReactCompositeComponent", 0); r < n.length; r++) n[r] },
                    updateComponent: function(e, t, n, r, o) {
                        var i = this._instance,
                            a = i.context,
                            u = i.props;
                        t !== n && (a = this._processContext(n._context), u = this._processProps(n.props), i.componentWillReceiveProps && i.componentWillReceiveProps(u, a));
                        var s = this._processPendingState(u, a),
                            l = this._pendingForceUpdate || !i.shouldComponentUpdate || i.shouldComponentUpdate(u, s, a);
                        l ? (this._pendingForceUpdate = !1, this._performComponentUpdate(n, u, s, a, e, o)) : (this._currentElement = n, this._context = o, i.props = u, i.state = s, i.context = a)
                    },
                    _processPendingState: function(e, t) {
                        var n = this._instance,
                            r = this._pendingStateQueue,
                            o = this._pendingReplaceState;
                        if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !r) return n.state;
                        if (o && 1 === r.length) return r[0];
                        for (var i = m({}, o ? r[0] : n.state), a = o ? 1 : 0; a < r.length; a++) {
                            var u = r[a];
                            m(i, "function" == typeof u ? u.call(n, i, e, t) : u)
                        }
                        return i
                    },
                    _performComponentUpdate: function(e, t, n, r, o, i) {
                        var a = this._instance,
                            u = a.props,
                            s = a.state,
                            l = a.context;
                        a.componentWillUpdate && a.componentWillUpdate(t, n, r), this._currentElement = e, this._context = i, a.props = t, a.state = n, a.context = r, this._updateRenderedComponent(o, i), a.componentDidUpdate && o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a, u, s, l), a)
                    },
                    _updateRenderedComponent: function(e, t) {
                        var n = this._renderedComponent,
                            r = n._currentElement,
                            o = this._getValidatedChildContext(),
                            i = this._renderValidatedComponent(o);
                        if (y(r, i)) f.receiveComponent(n, i, e, this._mergeChildContext(t, o));
                        else {
                            var a = this._rootNodeID,
                                u = n._rootNodeID;
                            f.unmountComponent(n), this._renderedComponent = this._instantiateReactComponent(i, this._currentElement.type);
                            var s = f.mountComponent(this._renderedComponent, a, e, this._mergeChildContext(t, o));
                            this._replaceNodeWithMarkupByID(u, s)
                        }
                    },
                    _replaceNodeWithMarkupByID: function(e, t) { o.replaceNodeWithMarkupByID(e, t) },
                    _renderValidatedComponentWithoutOwnerOrContext: function() {
                        var e = this._instance,
                            t = e.render();
                        return t
                    },
                    _renderValidatedComponent: function(e) {
                        var t, n = i.current;
                        i.current = this._mergeChildContext(this._currentElement._context, e), a.current = this;
                        try { t = this._renderValidatedComponentWithoutOwnerOrContext() } finally { i.current = n, a.current = null }
                        return g(null === t || t === !1 || u.isValidElement(t)), t
                    },
                    attachRef: function(e, t) {
                        var n = this.getPublicInstance(),
                            r = n.refs === v ? n.refs = {} : n.refs;
                        r[e] = t.getPublicInstance()
                    },
                    detachRef: function(e) {
                        var t = this.getPublicInstance().refs;
                        delete t[e]
                    },
                    getName: function() {
                        var e = this._currentElement.type,
                            t = this._instance && this._instance.constructor;
                        return e.displayName || t && t.displayName || e.name || t && t.name || null
                    },
                    getPublicInstance: function() { return this._instance },
                    _instantiateReactComponent: null
                };
            p.measureMethods(E, "ReactCompositeComponent", { mountComponent: "mountComponent", updateComponent: "updateComponent", _renderValidatedComponent: "_renderValidatedComponent" });
            var b = { Mixin: E };
            t.exports = b
        }, { 113: 113, 133: 133, 147: 147, 150: 150, 27: 27, 36: 36, 38: 38, 39: 39, 55: 55, 56: 56, 65: 65, 66: 66, 71: 71, 73: 73, 74: 74, 75: 75, 79: 79, 85: 85 }],
        38: [function(e, t, n) {
            "use strict";
            var r = e(27),
                o = e(113),
                i = (e(150), {
                    current: o,
                    withContext: function(e, t) {
                        var n, o = i.current;
                        i.current = r({}, o, e);
                        try { n = t() } finally { i.current = o }
                        return n
                    }
                });
            t.exports = i
        }, { 113: 113, 150: 150, 27: 27 }],
        39: [function(e, t, n) {
            "use strict";
            var r = { current: null };
            t.exports = r
        }, {}],
        40: [function(e, t, n) {
            "use strict";

            function r(e) { return o.createFactory(e) }
            var o = e(55),
                i = (e(56), e(140)),
                a = i({ a: "a", abbr: "abbr", address: "address", area: "area", article: "article", aside: "aside", audio: "audio", b: "b", base: "base", bdi: "bdi", bdo: "bdo", big: "big", blockquote: "blockquote", body: "body", br: "br", button: "button", canvas: "canvas", caption: "caption", cite: "cite", code: "code", col: "col", colgroup: "colgroup", data: "data", datalist: "datalist", dd: "dd", del: "del", details: "details", dfn: "dfn", dialog: "dialog", div: "div", dl: "dl", dt: "dt", em: "em", embed: "embed", fieldset: "fieldset", figcaption: "figcaption", figure: "figure", footer: "footer", form: "form", h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", head: "head", header: "header", hr: "hr", html: "html", i: "i", iframe: "iframe", img: "img", input: "input", ins: "ins", kbd: "kbd", keygen: "keygen", label: "label", legend: "legend", li: "li", link: "link", main: "main", map: "map", mark: "mark", menu: "menu", menuitem: "menuitem", meta: "meta", meter: "meter", nav: "nav", noscript: "noscript", object: "object", ol: "ol", optgroup: "optgroup", option: "option", output: "output", p: "p", param: "param", picture: "picture", pre: "pre", progress: "progress", q: "q", rp: "rp", rt: "rt", ruby: "ruby", s: "s", samp: "samp", script: "script", section: "section", select: "select", small: "small", source: "source", span: "span", strong: "strong", style: "style", sub: "sub", summary: "summary", sup: "sup", table: "table", tbody: "tbody", td: "td", textarea: "textarea", tfoot: "tfoot", th: "th", thead: "thead", time: "time", title: "title", tr: "tr", track: "track", u: "u", ul: "ul", "var": "var", video: "video", wbr: "wbr", circle: "circle", clipPath: "clipPath", defs: "defs", ellipse: "ellipse", g: "g", line: "line", linearGradient: "linearGradient", mask: "mask", path: "path", pattern: "pattern", polygon: "polygon", polyline: "polyline", radialGradient: "radialGradient", rect: "rect", stop: "stop", svg: "svg", text: "text", tspan: "tspan" }, r);
            t.exports = a
        }, { 140: 140, 55: 55, 56: 56 }],
        41: [function(e, t, n) {
            "use strict";
            var r = e(2),
                o = e(29),
                i = e(33),
                a = e(55),
                u = e(138),
                s = a.createFactory("button"),
                l = u({ onClick: !0, onDoubleClick: !0, onMouseDown: !0, onMouseMove: !0, onMouseUp: !0, onClickCapture: !0, onDoubleClickCapture: !0, onMouseDownCapture: !0, onMouseMoveCapture: !0, onMouseUpCapture: !0 }),
                c = i.createClass({ displayName: "ReactDOMButton", tagName: "BUTTON", mixins: [r, o], render: function() { var e = {}; for (var t in this.props) !this.props.hasOwnProperty(t) || this.props.disabled && l[t] || (e[t] = this.props[t]); return s(e, this.props.children) } });
            t.exports = c
        }, { 138: 138, 2: 2, 29: 29, 33: 33, 55: 55 }],
        42: [function(e, t, n) {
            "use strict";

            function r(e) { e && (null != e.dangerouslySetInnerHTML && (g(null == e.children), g("object" == typeof e.dangerouslySetInnerHTML && "__html" in e.dangerouslySetInnerHTML)), g(null == e.style || "object" == typeof e.style)) }

            function o(e, t, n, r) {
                var o = d.findReactContainerForID(e);
                if (o) {
                    var i = o.nodeType === D ? o.ownerDocument : o;
                    E(t, i)
                }
                r.getPutListenerQueue().enqueuePutListener(e, t, n)
            }

            function i(e) { P.call(T, e) || (g(I.test(e)), T[e] = !0) }

            function a(e) { i(e), this._tag = e, this._renderedChildren = null, this._previousStyleCopy = null, this._rootNodeID = null }
            var u = e(5),
                s = e(10),
                l = e(11),
                c = e(30),
                p = e(35),
                d = e(68),
                f = e(69),
                h = e(73),
                m = e(27),
                v = e(114),
                g = e(133),
                y = (e(134), e(139)),
                C = (e(150), c.deleteListener),
                E = c.listenTo,
                b = c.registrationNameModules,
                _ = { string: !0, number: !0 },
                x = y({ style: null }),
                D = 1,
                M = null,
                N = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 },
                I = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
                T = {},
                P = {}.hasOwnProperty;
            a.displayName = "ReactDOMComponent", a.Mixin = {
                construct: function(e) { this._currentElement = e },
                mountComponent: function(e, t, n) { this._rootNodeID = e, r(this._currentElement.props); var o = N[this._tag] ? "" : "</" + this._tag + ">"; return this._createOpenTagMarkupAndPutListeners(t) + this._createContentMarkup(t, n) + o },
                _createOpenTagMarkupAndPutListeners: function(e) {
                    var t = this._currentElement.props,
                        n = "<" + this._tag;
                    for (var r in t)
                        if (t.hasOwnProperty(r)) {
                            var i = t[r];
                            if (null != i)
                                if (b.hasOwnProperty(r)) o(this._rootNodeID, r, i, e);
                                else {
                                    r === x && (i && (i = this._previousStyleCopy = m({}, t.style)), i = u.createMarkupForStyles(i));
                                    var a = l.createMarkupForProperty(r, i);
                                    a && (n += " " + a)
                                }
                        }
                    if (e.renderToStaticMarkup) return n + ">";
                    var s = l.createMarkupForID(this._rootNodeID);
                    return n + " " + s + ">"
                },
                _createContentMarkup: function(e, t) {
                    var n = "";
                    ("listing" === this._tag || "pre" === this._tag || "textarea" === this._tag) && (n = "\n");
                    var r = this._currentElement.props,
                        o = r.dangerouslySetInnerHTML;
                    if (null != o) { if (null != o.__html) return n + o.__html } else {
                        var i = _[typeof r.children] ? r.children : null,
                            a = null != i ? null : r.children;
                        if (null != i) return n + v(i);
                        if (null != a) { var u = this.mountChildren(a, e, t); return n + u.join("") }
                    }
                    return n
                },
                receiveComponent: function(e, t, n) {
                    var r = this._currentElement;
                    this._currentElement = e, this.updateComponent(t, r, e, n)
                },
                updateComponent: function(e, t, n, o) { r(this._currentElement.props), this._updateDOMProperties(t.props, e), this._updateDOMChildren(t.props, e, o) },
                _updateDOMProperties: function(e, t) {
                    var n, r, i, a = this._currentElement.props;
                    for (n in e)
                        if (!a.hasOwnProperty(n) && e.hasOwnProperty(n))
                            if (n === x) {
                                var u = this._previousStyleCopy;
                                for (r in u) u.hasOwnProperty(r) && (i = i || {}, i[r] = "");
                                this._previousStyleCopy = null
                            } else b.hasOwnProperty(n) ? C(this._rootNodeID, n) : (s.isStandardName[n] || s.isCustomAttribute(n)) && M.deletePropertyByID(this._rootNodeID, n);
                    for (n in a) {
                        var l = a[n],
                            c = n === x ? this._previousStyleCopy : e[n];
                        if (a.hasOwnProperty(n) && l !== c)
                            if (n === x)
                                if (l ? l = this._previousStyleCopy = m({}, l) : this._previousStyleCopy = null, c) { for (r in c) !c.hasOwnProperty(r) || l && l.hasOwnProperty(r) || (i = i || {}, i[r] = ""); for (r in l) l.hasOwnProperty(r) && c[r] !== l[r] && (i = i || {}, i[r] = l[r]) } else i = l;
                        else b.hasOwnProperty(n) ? o(this._rootNodeID, n, l, t) : (s.isStandardName[n] || s.isCustomAttribute(n)) && M.updatePropertyByID(this._rootNodeID, n, l)
                    }
                    i && M.updateStylesByID(this._rootNodeID, i)
                },
                _updateDOMChildren: function(e, t, n) {
                    var r = this._currentElement.props,
                        o = _[typeof e.children] ? e.children : null,
                        i = _[typeof r.children] ? r.children : null,
                        a = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                        u = r.dangerouslySetInnerHTML && r.dangerouslySetInnerHTML.__html,
                        s = null != o ? null : e.children,
                        l = null != i ? null : r.children,
                        c = null != o || null != a,
                        p = null != i || null != u;
                    null != s && null == l ? this.updateChildren(null, t, n) : c && !p && this.updateTextContent(""), null != i ? o !== i && this.updateTextContent("" + i) : null != u ? a !== u && M.updateInnerHTMLByID(this._rootNodeID, u) : null != l && this.updateChildren(l, t, n)
                },
                unmountComponent: function() { this.unmountChildren(), c.deleteAllListeners(this._rootNodeID), p.unmountIDFromEnvironment(this._rootNodeID), this._rootNodeID = null }
            }, h.measureMethods(a, "ReactDOMComponent", { mountComponent: "mountComponent", updateComponent: "updateComponent" }), m(a.prototype, a.Mixin, f.Mixin), a.injection = { injectIDOperations: function(e) { a.BackendIDOperations = M = e } }, t.exports = a
        }, { 10: 10, 11: 11, 114: 114, 133: 133, 134: 134, 139: 139, 150: 150, 27: 27, 30: 30, 35: 35, 5: 5, 68: 68, 69: 69, 73: 73 }],
        43: [function(e, t, n) {
            "use strict";
            var r = e(15),
                o = e(25),
                i = e(29),
                a = e(33),
                u = e(55),
                s = u.createFactory("form"),
                l = a.createClass({ displayName: "ReactDOMForm", tagName: "FORM", mixins: [i, o], render: function() { return s(this.props) }, componentDidMount: function() { this.trapBubbledEvent(r.topLevelTypes.topReset, "reset"), this.trapBubbledEvent(r.topLevelTypes.topSubmit, "submit") } });
            t.exports = l
        }, { 15: 15, 25: 25, 29: 29, 33: 33, 55: 55 }],
        44: [function(e, t, n) {
            "use strict";
            var r = e(5),
                o = e(9),
                i = e(11),
                a = e(68),
                u = e(73),
                s = e(133),
                l = e(144),
                c = { dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.", style: "`style` must be set using `updateStylesByID()`." },
                p = {
                    updatePropertyByID: function(e, t, n) {
                        var r = a.getNode(e);
                        s(!c.hasOwnProperty(t)), null != n ? i.setValueForProperty(r, t, n) : i.deleteValueForProperty(r, t)
                    },
                    deletePropertyByID: function(e, t, n) {
                        var r = a.getNode(e);
                        s(!c.hasOwnProperty(t)), i.deleteValueForProperty(r, t, n)
                    },
                    updateStylesByID: function(e, t) {
                        var n = a.getNode(e);
                        r.setValueForStyles(n, t)
                    },
                    updateInnerHTMLByID: function(e, t) {
                        var n = a.getNode(e);
                        l(n, t)
                    },
                    updateTextContentByID: function(e, t) {
                        var n = a.getNode(e);
                        o.updateTextContent(n, t)
                    },
                    dangerouslyReplaceNodeWithMarkupByID: function(e, t) {
                        var n = a.getNode(e);
                        o.dangerouslyReplaceNodeWithMarkup(n, t)
                    },
                    dangerouslyProcessChildrenUpdates: function(e, t) {
                        for (var n = 0; n < e.length; n++) e[n].parentNode = a.getNode(e[n].parentID);
                        o.processUpdates(e, t)
                    }
                };
            u.measureMethods(p, "ReactDOMIDOperations", { updatePropertyByID: "updatePropertyByID", deletePropertyByID: "deletePropertyByID", updateStylesByID: "updateStylesByID", updateInnerHTMLByID: "updateInnerHTMLByID", updateTextContentByID: "updateTextContentByID", dangerouslyReplaceNodeWithMarkupByID: "dangerouslyReplaceNodeWithMarkupByID", dangerouslyProcessChildrenUpdates: "dangerouslyProcessChildrenUpdates" }), t.exports = p
        }, { 11: 11, 133: 133, 144: 144, 5: 5, 68: 68, 73: 73, 9: 9 }],
        45: [function(e, t, n) {
            "use strict";
            var r = e(15),
                o = e(25),
                i = e(29),
                a = e(33),
                u = e(55),
                s = u.createFactory("iframe"),
                l = a.createClass({ displayName: "ReactDOMIframe", tagName: "IFRAME", mixins: [i, o], render: function() { return s(this.props) }, componentDidMount: function() { this.trapBubbledEvent(r.topLevelTypes.topLoad, "load") } });
            t.exports = l
        }, { 15: 15, 25: 25, 29: 29, 33: 33, 55: 55 }],
        46: [function(e, t, n) {
            "use strict";
            var r = e(15),
                o = e(25),
                i = e(29),
                a = e(33),
                u = e(55),
                s = u.createFactory("img"),
                l = a.createClass({ displayName: "ReactDOMImg", tagName: "IMG", mixins: [i, o], render: function() { return s(this.props) }, componentDidMount: function() { this.trapBubbledEvent(r.topLevelTypes.topLoad, "load"), this.trapBubbledEvent(r.topLevelTypes.topError, "error") } });
            t.exports = l
        }, { 15: 15, 25: 25, 29: 29, 33: 33, 55: 55 }],
        47: [function(e, t, n) {
            "use strict";

            function r() { this.isMounted() && this.forceUpdate() }
            var o = e(2),
                i = e(11),
                a = e(24),
                u = e(29),
                s = e(33),
                l = e(55),
                c = e(68),
                p = e(85),
                d = e(27),
                f = e(133),
                h = l.createFactory("input"),
                m = {},
                v = s.createClass({
                    displayName: "ReactDOMInput",
                    tagName: "INPUT",
                    mixins: [o, a.Mixin, u],
                    getInitialState: function() { var e = this.props.defaultValue; return { initialChecked: this.props.defaultChecked || !1, initialValue: null != e ? e : null } },
                    render: function() {
                        var e = d({}, this.props);
                        e.defaultChecked = null, e.defaultValue = null;
                        var t = a.getValue(this);
                        e.value = null != t ? t : this.state.initialValue;
                        var n = a.getChecked(this);
                        return e.checked = null != n ? n : this.state.initialChecked, e.onChange = this._handleChange, h(e, this.props.children)
                    },
                    componentDidMount: function() {
                        var e = c.getID(this.getDOMNode());
                        m[e] = this
                    },
                    componentWillUnmount: function() {
                        var e = this.getDOMNode(),
                            t = c.getID(e);
                        delete m[t]
                    },
                    componentDidUpdate: function(e, t, n) {
                        var r = this.getDOMNode();
                        null != this.props.checked && i.setValueForProperty(r, "checked", this.props.checked || !1);
                        var o = a.getValue(this);
                        null != o && i.setValueForProperty(r, "value", "" + o)
                    },
                    _handleChange: function(e) {
                        var t, n = a.getOnChange(this);
                        n && (t = n.call(this, e)), p.asap(r, this);
                        var o = this.props.name;
                        if ("radio" === this.props.type && null != o) {
                            for (var i = this.getDOMNode(), u = i; u.parentNode;) u = u.parentNode;
                            for (var s = u.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), l = 0, d = s.length; d > l; l++) {
                                var h = s[l];
                                if (h !== i && h.form === i.form) {
                                    var v = c.getID(h);
                                    f(v);
                                    var g = m[v];
                                    f(g), p.asap(r, g)
                                }
                            }
                        }
                        return t
                    }
                });
            t.exports = v
        }, { 11: 11, 133: 133, 2: 2, 24: 24, 27: 27, 29: 29, 33: 33, 55: 55, 68: 68, 85: 85 }],
        48: [function(e, t, n) {
            "use strict";
            var r = e(29),
                o = e(33),
                i = e(55),
                a = (e(150), i.createFactory("option")),
                u = o.createClass({ displayName: "ReactDOMOption", tagName: "OPTION", mixins: [r], componentWillMount: function() {}, render: function() { return a(this.props, this.props.children) } });
            t.exports = u
        }, { 150: 150, 29: 29, 33: 33, 55: 55 }],
        49: [function(e, t, n) {
            "use strict";

            function r() {
                if (this._pendingUpdate) {
                    this._pendingUpdate = !1;
                    var e = u.getValue(this);
                    null != e && this.isMounted() && i(this, e)
                }
            }

            function o(e, t, n) { if (null == e[t]) return null; if (e.multiple) { if (!Array.isArray(e[t])) return new Error("The `" + t + "` prop supplied to <select> must be an array if `multiple` is true.") } else if (Array.isArray(e[t])) return new Error("The `" + t + "` prop supplied to <select> must be a scalar value if `multiple` is false.") }

            function i(e, t) {
                var n, r, o, i = e.getDOMNode().options;
                if (e.props.multiple) {
                    for (n = {}, r = 0, o = t.length; o > r; r++) n["" + t[r]] = !0;
                    for (r = 0, o = i.length; o > r; r++) {
                        var a = n.hasOwnProperty(i[r].value);
                        i[r].selected !== a && (i[r].selected = a)
                    }
                } else {
                    for (n = "" + t, r = 0, o = i.length; o > r; r++)
                        if (i[r].value === n) return void(i[r].selected = !0);
                    i.length && (i[0].selected = !0)
                }
            }
            var a = e(2),
                u = e(24),
                s = e(29),
                l = e(33),
                c = e(55),
                p = e(85),
                d = e(27),
                f = c.createFactory("select"),
                h = l.createClass({
                    displayName: "ReactDOMSelect",
                    tagName: "SELECT",
                    mixins: [a, u.Mixin, s],
                    propTypes: { defaultValue: o, value: o },
                    render: function() { var e = d({}, this.props); return e.onChange = this._handleChange, e.value = null, f(e, this.props.children) },
                    componentWillMount: function() { this._pendingUpdate = !1 },
                    componentDidMount: function() {
                        var e = u.getValue(this);
                        null != e ? i(this, e) : null != this.props.defaultValue && i(this, this.props.defaultValue)
                    },
                    componentDidUpdate: function(e) {
                        var t = u.getValue(this);
                        null != t ? (this._pendingUpdate = !1, i(this, t)) : !e.multiple != !this.props.multiple && (null != this.props.defaultValue ? i(this, this.props.defaultValue) : i(this, this.props.multiple ? [] : ""))
                    },
                    _handleChange: function(e) { var t, n = u.getOnChange(this); return n && (t = n.call(this, e)), this._pendingUpdate = !0, p.asap(r, this), t }
                });
            t.exports = h
        }, { 2: 2, 24: 24, 27: 27, 29: 29, 33: 33, 55: 55, 85: 85 }],
        50: [function(e, t, n) {
            "use strict";

            function r(e, t, n, r) { return e === n && t === r }

            function o(e) {
                var t = document.selection,
                    n = t.createRange(),
                    r = n.text.length,
                    o = n.duplicate();
                o.moveToElementText(e), o.setEndPoint("EndToStart", n);
                var i = o.text.length,
                    a = i + r;
                return { start: i, end: a }
            }

            function i(e) {
                var t = window.getSelection && window.getSelection();
                if (!t || 0 === t.rangeCount) return null;
                var n = t.anchorNode,
                    o = t.anchorOffset,
                    i = t.focusNode,
                    a = t.focusOffset,
                    u = t.getRangeAt(0),
                    s = r(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
                    l = s ? 0 : u.toString().length,
                    c = u.cloneRange();
                c.selectNodeContents(e), c.setEnd(u.startContainer, u.startOffset);
                var p = r(c.startContainer, c.startOffset, c.endContainer, c.endOffset),
                    d = p ? 0 : c.toString().length,
                    f = d + l,
                    h = document.createRange();
                h.setStart(n, o), h.setEnd(i, a);
                var m = h.collapsed;
                return { start: m ? f : d, end: m ? d : f }
            }

            function a(e, t) { var n, r, o = document.selection.createRange().duplicate(); "undefined" == typeof t.end ? (n = t.start, r = n) : t.start > t.end ? (n = t.end, r = t.start) : (n = t.start, r = t.end), o.moveToElementText(e), o.moveStart("character", n), o.setEndPoint("EndToStart", o), o.moveEnd("character", r - n), o.select() }

            function u(e, t) {
                if (window.getSelection) {
                    var n = window.getSelection(),
                        r = e[c()].length,
                        o = Math.min(t.start, r),
                        i = "undefined" == typeof t.end ? o : Math.min(t.end, r);
                    if (!n.extend && o > i) {
                        var a = i;
                        i = o, o = a
                    }
                    var u = l(e, o),
                        s = l(e, i);
                    if (u && s) {
                        var p = document.createRange();
                        p.setStart(u.node, u.offset), n.removeAllRanges(), o > i ? (n.addRange(p), n.extend(s.node, s.offset)) : (p.setEnd(s.node, s.offset), n.addRange(p))
                    }
                }
            }
            var s = e(21),
                l = e(126),
                c = e(128),
                p = s.canUseDOM && "selection" in document && !("getSelection" in window),
                d = { getOffsets: p ? o : i, setOffsets: p ? a : u };
            t.exports = d
        }, { 126: 126, 128: 128, 21: 21 }],
        51: [function(e, t, n) {
            "use strict";
            var r = e(11),
                o = e(35),
                i = e(42),
                a = e(27),
                u = e(114),
                s = function(e) {};
            a(s.prototype, {
                construct: function(e) { this._currentElement = e, this._stringText = "" + e, this._rootNodeID = null, this._mountIndex = 0 },
                mountComponent: function(e, t, n) { this._rootNodeID = e; var o = u(this._stringText); return t.renderToStaticMarkup ? o : "<span " + r.createMarkupForID(e) + ">" + o + "</span>" },
                receiveComponent: function(e, t) {
                    if (e !== this._currentElement) {
                        this._currentElement = e;
                        var n = "" + e;
                        n !== this._stringText && (this._stringText = n, i.BackendIDOperations.updateTextContentByID(this._rootNodeID, n))
                    }
                },
                unmountComponent: function() { o.unmountIDFromEnvironment(this._rootNodeID) }
            }), t.exports = s
        }, { 11: 11, 114: 114, 27: 27, 35: 35, 42: 42 }],
        52: [function(e, t, n) {
            "use strict";

            function r() { this.isMounted() && this.forceUpdate() }
            var o = e(2),
                i = e(11),
                a = e(24),
                u = e(29),
                s = e(33),
                l = e(55),
                c = e(85),
                p = e(27),
                d = e(133),
                f = (e(150), l.createFactory("textarea")),
                h = s.createClass({
                    displayName: "ReactDOMTextarea",
                    tagName: "TEXTAREA",
                    mixins: [o, a.Mixin, u],
                    getInitialState: function() {
                        var e = this.props.defaultValue,
                            t = this.props.children;
                        null != t && (d(null == e), Array.isArray(t) && (d(t.length <= 1), t = t[0]), e = "" + t), null == e && (e = "");
                        var n = a.getValue(this);
                        return { initialValue: "" + (null != n ? n : e) }
                    },
                    render: function() { var e = p({}, this.props); return d(null == e.dangerouslySetInnerHTML), e.defaultValue = null, e.value = null, e.onChange = this._handleChange, f(e, this.state.initialValue) },
                    componentDidUpdate: function(e, t, n) {
                        var r = a.getValue(this);
                        if (null != r) {
                            var o = this.getDOMNode();
                            i.setValueForProperty(o, "value", "" + r)
                        }
                    },
                    _handleChange: function(e) { var t, n = a.getOnChange(this); return n && (t = n.call(this, e)), c.asap(r, this), t }
                });
            t.exports = h
        }, { 11: 11, 133: 133, 150: 150, 2: 2, 24: 24, 27: 27, 29: 29, 33: 33, 55: 55, 85: 85 }],
        53: [function(e, t, n) {
            "use strict";

            function r() { this.reinitializeTransaction() }
            var o = e(85),
                i = e(101),
                a = e(27),
                u = e(112),
                s = { initialize: u, close: function() { d.isBatchingUpdates = !1 } },
                l = { initialize: u, close: o.flushBatchedUpdates.bind(o) },
                c = [l, s];
            a(r.prototype, i.Mixin, { getTransactionWrappers: function() { return c } });
            var p = new r,
                d = {
                    isBatchingUpdates: !1,
                    batchedUpdates: function(e, t, n, r, o) {
                        var i = d.isBatchingUpdates;
                        d.isBatchingUpdates = !0, i ? e(t, n, r, o) : p.perform(e, null, t, n, r, o)
                    }
                };
            t.exports = d
        }, { 101: 101, 112: 112, 27: 27, 85: 85 }],
        54: [function(e, t, n) {
            "use strict";

            function r(e) { return h.createClass({ tagName: e.toUpperCase(), render: function() { return new T(e, null, null, null, null, this.props) } }) }

            function o() { R.EventEmitter.injectReactEventListener(P), R.EventPluginHub.injectEventPluginOrder(s), R.EventPluginHub.injectInstanceHandle(w), R.EventPluginHub.injectMount(O), R.EventPluginHub.injectEventPluginsByName({ SimpleEventPlugin: L, EnterLeaveEventPlugin: l, ChangeEventPlugin: a, MobileSafariClickEventPlugin: d, SelectEventPlugin: A, BeforeInputEventPlugin: i }), R.NativeComponent.injectGenericComponentClass(g), R.NativeComponent.injectTextComponentClass(I), R.NativeComponent.injectAutoWrapper(r), R.Class.injectMixin(f), R.NativeComponent.injectComponentClasses({ button: y, form: C, iframe: _, img: E, input: x, option: D, select: M, textarea: N, html: F("html"), head: F("head"), body: F("body") }), R.DOMProperty.injectDOMPropertyConfig(p), R.DOMProperty.injectDOMPropertyConfig(U), R.EmptyComponent.injectEmptyComponent("noscript"), R.Updates.injectReconcileTransaction(S), R.Updates.injectBatchingStrategy(v), R.RootIndex.injectCreateReactRootIndex(c.canUseDOM ? u.createReactRootIndex : k.createReactRootIndex), R.Component.injectEnvironment(m), R.DOMComponent.injectIDOperations(b) }
            var i = e(3),
                a = e(7),
                u = e(8),
                s = e(13),
                l = e(14),
                c = e(21),
                p = e(23),
                d = e(26),
                f = e(29),
                h = e(33),
                m = e(35),
                v = e(53),
                g = e(42),
                y = e(41),
                C = e(43),
                E = e(46),
                b = e(44),
                _ = e(45),
                x = e(47),
                D = e(48),
                M = e(49),
                N = e(52),
                I = e(51),
                T = e(55),
                P = e(60),
                R = e(62),
                w = e(64),
                O = e(68),
                S = e(78),
                A = e(87),
                k = e(88),
                L = e(89),
                U = e(86),
                F = e(109);
            t.exports = { inject: o }
        }, {
            109: 109,
            13: 13,
            14: 14,
            21: 21,
            23: 23,
            26: 26,
            29: 29,
            3: 3,
            33: 33,
            35: 35,
            41: 41,
            42: 42,
            43: 43,
            44: 44,
            45: 45,
            46: 46,
            47: 47,
            48: 48,
            49: 49,
            51: 51,
            52: 52,
            53: 53,
            55: 55,
            60: 60,
            62: 62,
            64: 64,
            68: 68,
            7: 7,
            78: 78,
            8: 8,
            86: 86,
            87: 87,
            88: 88,
            89: 89
        }],
        55: [function(e, t, n) {
            "use strict";
            var r = e(38),
                o = e(39),
                i = e(27),
                a = (e(150), { key: !0, ref: !0 }),
                u = function(e, t, n, r, o, i) { this.type = e, this.key = t, this.ref = n, this._owner = r, this._context = o, this.props = i };
            u.prototype = { _isReactElement: !0 }, u.createElement = function(e, t, n) {
                var i, s = {},
                    l = null,
                    c = null;
                if (null != t) { c = void 0 === t.ref ? null : t.ref, l = void 0 === t.key ? null : "" + t.key; for (i in t) t.hasOwnProperty(i) && !a.hasOwnProperty(i) && (s[i] = t[i]) }
                var p = arguments.length - 2;
                if (1 === p) s.children = n;
                else if (p > 1) {
                    for (var d = Array(p), f = 0; p > f; f++) d[f] = arguments[f + 2];
                    s.children = d
                }
                if (e && e.defaultProps) { var h = e.defaultProps; for (i in h) "undefined" == typeof s[i] && (s[i] = h[i]) }
                return new u(e, l, c, o.current, r.current, s)
            }, u.createFactory = function(e) { var t = u.createElement.bind(null, e); return t.type = e, t }, u.cloneAndReplaceProps = function(e, t) { var n = new u(e.type, e.key, e.ref, e._owner, e._context, t); return n }, u.cloneElement = function(e, t, n) {
                var r, s = i({}, e.props),
                    l = e.key,
                    c = e.ref,
                    p = e._owner;
                if (null != t) { void 0 !== t.ref && (c = t.ref, p = o.current), void 0 !== t.key && (l = "" + t.key); for (r in t) t.hasOwnProperty(r) && !a.hasOwnProperty(r) && (s[r] = t[r]) }
                var d = arguments.length - 2;
                if (1 === d) s.children = n;
                else if (d > 1) {
                    for (var f = Array(d), h = 0; d > h; h++) f[h] = arguments[h + 2];
                    s.children = f
                }
                return new u(e.type, l, c, p, e._context, s)
            }, u.isValidElement = function(e) { var t = !(!e || !e._isReactElement); return t }, t.exports = u
        }, { 150: 150, 27: 27, 38: 38, 39: 39 }],
        56: [function(e, t, n) {
            "use strict";

            function r() { if (y.current) { var e = y.current.getName(); if (e) return " Check the render method of `" + e + "`." } return "" }

            function o(e) { var t = e && e.getPublicInstance(); if (!t) return void 0; var n = t.constructor; return n ? n.displayName || n.name || void 0 : void 0 }

            function i() { var e = y.current; return e && o(e) || void 0 }

            function a(e, t) { e._store.validated || null != e.key || (e._store.validated = !0, s('Each child in an array or iterator should have a unique "key" prop.', e, t)) }

            function u(e, t, n) { D.test(e) && s("Child objects should have non-numeric keys so ordering is preserved.", t, n) }

            function s(e, t, n) {
                var r = i(),
                    a = "string" == typeof n ? n : n.displayName || n.name,
                    u = r || a,
                    s = _[e] || (_[e] = {});
                if (!s.hasOwnProperty(u)) {
                    s[u] = !0;
                    var l = "";
                    if (t && t._owner && t._owner !== y.current) {
                        var c = o(t._owner);
                        l = " It was passed a child from " + c + "."
                    }
                }
            }

            function l(e, t) {
                if (Array.isArray(e))
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        m.isValidElement(r) && a(r, t)
                    } else if (m.isValidElement(e)) e._store.validated = !0;
                    else if (e) {
                    var o = E(e);
                    if (o) {
                        if (o !== e.entries)
                            for (var i, s = o.call(e); !(i = s.next()).done;) m.isValidElement(i.value) && a(i.value, t)
                    } else if ("object" == typeof e) { var l = v.extractIfFragment(e); for (var c in l) l.hasOwnProperty(c) && u(c, l[c], t) }
                }
            }

            function c(e, t, n, o) {
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var a;
                        try { b("function" == typeof t[i]), a = t[i](n, i, e, o) } catch (u) { a = u }
                        a instanceof Error && !(a.message in x) && (x[a.message] = !0, r(this))
                    }
            }

            function p(e, t) {
                var n = t.type,
                    r = "string" == typeof n ? n : n.displayName,
                    o = t._owner ? t._owner.getPublicInstance().constructor.displayName : null,
                    i = e + "|" + r + "|" + o;
                if (!M.hasOwnProperty(i)) {
                    M[i] = !0;
                    var a = "";
                    r && (a = " <" + r + " />");
                    var u = "";
                    o && (u = " The element was created by " + o + ".")
                }
            }

            function d(e, t) { return e !== e ? t !== t : 0 === e && 0 === t ? 1 / e === 1 / t : e === t }

            function f(e) {
                if (e._store) {
                    var t = e._store.originalProps,
                        n = e.props;
                    for (var r in n) n.hasOwnProperty(r) && (t.hasOwnProperty(r) && d(t[r], n[r]) || (p(r, e), t[r] = n[r]))
                }
            }

            function h(e) {
                if (null != e.type) {
                    var t = C.getComponentClassForElement(e),
                        n = t.displayName || t.name;
                    t.propTypes && c(n, t.propTypes, e.props, g.prop), "function" == typeof t.getDefaultProps
                }
            }
            var m = e(55),
                v = e(61),
                g = e(75),
                y = (e(74), e(39)),
                C = e(71),
                E = e(124),
                b = e(133),
                _ = (e(150), {}),
                x = {},
                D = /^\d+$/,
                M = {},
                N = { checkAndWarnForMutatedProps: f, createElement: function(e, t, n) { var r = m.createElement.apply(this, arguments); if (null == r) return r; for (var o = 2; o < arguments.length; o++) l(arguments[o], e); return h(r), r }, createFactory: function(e) { var t = N.createElement.bind(null, e); return t.type = e, t }, cloneElement: function(e, t, n) { for (var r = m.cloneElement.apply(this, arguments), o = 2; o < arguments.length; o++) l(arguments[o], r.type); return h(r), r } };
            t.exports = N
        }, { 124: 124, 133: 133, 150: 150, 39: 39, 55: 55, 61: 61, 71: 71, 74: 74, 75: 75 }],
        57: [function(e, t, n) {
            "use strict";

            function r(e) { c[e] = !0 }

            function o(e) { delete c[e] }

            function i(e) { return !!c[e] }
            var a, u = e(55),
                s = e(65),
                l = e(133),
                c = {},
                p = { injectEmptyComponent: function(e) { a = u.createFactory(e) } },
                d = function() {};
            d.prototype.componentDidMount = function() {
                var e = s.get(this);
                e && r(e._rootNodeID)
            }, d.prototype.componentWillUnmount = function() {
                var e = s.get(this);
                e && o(e._rootNodeID)
            }, d.prototype.render = function() { return l(a), a() };
            var f = u.createElement(d),
                h = { emptyElement: f, injection: p, isNullComponentID: i };
            t.exports = h
        }, { 133: 133, 55: 55, 65: 65 }],
        58: [function(e, t, n) {
            "use strict";
            var r = { guard: function(e, t) { return e } };
            t.exports = r
        }, {}],
        59: [function(e, t, n) {
            "use strict";

            function r(e) { o.enqueueEvents(e), o.processEventQueue() }
            var o = e(17),
                i = {
                    handleTopLevel: function(e, t, n, i) {
                        var a = o.extractEvents(e, t, n, i);
                        r(a)
                    }
                };
            t.exports = i
        }, { 17: 17 }],
        60: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = p.getID(e),
                    n = c.getReactRootIDFromNodeID(t),
                    r = p.findReactContainerForID(n),
                    o = p.getFirstReactDOM(r);
                return o
            }

            function o(e, t) { this.topLevelType = e, this.nativeEvent = t, this.ancestors = [] }

            function i(e) {
                for (var t = p.getFirstReactDOM(h(e.nativeEvent)) || window, n = t; n;) e.ancestors.push(n), n = r(n);
                for (var o = 0, i = e.ancestors.length; i > o; o++) {
                    t = e.ancestors[o];
                    var a = p.getID(t) || "";
                    v._handleTopLevel(e.topLevelType, t, a, e.nativeEvent)
                }
            }

            function a(e) {
                var t = m(window);
                e(t)
            }
            var u = e(16),
                s = e(21),
                l = e(28),
                c = e(64),
                p = e(68),
                d = e(85),
                f = e(27),
                h = e(123),
                m = e(129);
            f(o.prototype, { destructor: function() { this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0 } }), l.addPoolingTo(o, l.twoArgumentPooler);
            var v = {
                _enabled: !0,
                _handleTopLevel: null,
                WINDOW_HANDLE: s.canUseDOM ? window : null,
                setHandleTopLevel: function(e) { v._handleTopLevel = e },
                setEnabled: function(e) { v._enabled = !!e },
                isEnabled: function() { return v._enabled },
                trapBubbledEvent: function(e, t, n) { var r = n; return r ? u.listen(r, t, v.dispatchEvent.bind(null, e)) : null },
                trapCapturedEvent: function(e, t, n) { var r = n; return r ? u.capture(r, t, v.dispatchEvent.bind(null, e)) : null },
                monitorScrollValue: function(e) {
                    var t = a.bind(null, e);
                    u.listen(window, "scroll", t)
                },
                dispatchEvent: function(e, t) { if (v._enabled) { var n = o.getPooled(e, t); try { d.batchedUpdates(i, n) } finally { o.release(n) } } }
            };
            t.exports = v
        }, { 123: 123, 129: 129, 16: 16, 21: 21, 27: 27, 28: 28, 64: 64, 68: 68, 85: 85 }],
        61: [function(e, t, n) {
            "use strict";
            var r = (e(55), e(150), { create: function(e) { return e }, extract: function(e) { return e }, extractIfFragment: function(e) { return e } });
            t.exports = r
        }, { 150: 150, 55: 55 }],
        62: [function(e, t, n) {
            "use strict";
            var r = e(10),
                o = e(17),
                i = e(36),
                a = e(33),
                u = e(57),
                s = e(30),
                l = e(71),
                c = e(42),
                p = e(73),
                d = e(81),
                f = e(85),
                h = { Component: i.injection, Class: a.injection, DOMComponent: c.injection, DOMProperty: r.injection, EmptyComponent: u.injection, EventPluginHub: o.injection, EventEmitter: s.injection, NativeComponent: l.injection, Perf: p.injection, RootIndex: d.injection, Updates: f.injection };
            t.exports = h
        }, { 10: 10, 17: 17, 30: 30, 33: 33, 36: 36, 42: 42, 57: 57, 71: 71, 73: 73, 81: 81, 85: 85 }],
        63: [function(e, t, n) {
            "use strict";

            function r(e) { return i(document.documentElement, e) }
            var o = e(50),
                i = e(107),
                a = e(117),
                u = e(119),
                s = {
                    hasSelectionCapabilities: function(e) { return e && ("INPUT" === e.nodeName && "text" === e.type || "TEXTAREA" === e.nodeName || "true" === e.contentEditable) },
                    getSelectionInformation: function() { var e = u(); return { focusedElem: e, selectionRange: s.hasSelectionCapabilities(e) ? s.getSelection(e) : null } },
                    restoreSelection: function(e) {
                        var t = u(),
                            n = e.focusedElem,
                            o = e.selectionRange;
                        t !== n && r(n) && (s.hasSelectionCapabilities(n) && s.setSelection(n, o), a(n))
                    },
                    getSelection: function(e) {
                        var t;
                        if ("selectionStart" in e) t = { start: e.selectionStart, end: e.selectionEnd };
                        else if (document.selection && "INPUT" === e.nodeName) {
                            var n = document.selection.createRange();
                            n.parentElement() === e && (t = { start: -n.moveStart("character", -e.value.length), end: -n.moveEnd("character", -e.value.length) })
                        } else t = o.getOffsets(e);
                        return t || { start: 0, end: 0 }
                    },
                    setSelection: function(e, t) {
                        var n = t.start,
                            r = t.end;
                        if ("undefined" == typeof r && (r = n), "selectionStart" in e) e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length);
                        else if (document.selection && "INPUT" === e.nodeName) {
                            var i = e.createTextRange();
                            i.collapse(!0), i.moveStart("character", n), i.moveEnd("character", r - n), i.select()
                        } else o.setOffsets(e, t)
                    }
                };
            t.exports = s
        }, { 107: 107, 117: 117, 119: 119, 50: 50 }],
        64: [function(e, t, n) {
            "use strict";

            function r(e) { return f + e.toString(36) }

            function o(e, t) { return e.charAt(t) === f || t === e.length }

            function i(e) { return "" === e || e.charAt(0) === f && e.charAt(e.length - 1) !== f }

            function a(e, t) { return 0 === t.indexOf(e) && o(t, e.length) }

            function u(e) { return e ? e.substr(0, e.lastIndexOf(f)) : "" }

            function s(e, t) { if (d(i(e) && i(t)), d(a(e, t)), e === t) return e; var n, r = e.length + h; for (n = r; n < t.length && !o(t, n); n++); return t.substr(0, n) }

            function l(e, t) {
                var n = Math.min(e.length, t.length);
                if (0 === n) return "";
                for (var r = 0, a = 0; n >= a; a++)
                    if (o(e, a) && o(t, a)) r = a;
                    else if (e.charAt(a) !== t.charAt(a)) break;
                var u = e.substr(0, r);
                return d(i(u)), u
            }

            function c(e, t, n, r, o, i) {
                e = e || "", t = t || "", d(e !== t);
                var l = a(t, e);
                d(l || a(e, t));
                for (var c = 0, p = l ? u : s, f = e;; f = p(f, t)) {
                    var h;
                    if (o && f === e || i && f === t || (h = n(f, l, r)), h === !1 || f === t) break;
                    d(c++ < m)
                }
            }
            var p = e(81),
                d = e(133),
                f = ".",
                h = f.length,
                m = 100,
                v = {
                    createReactRootID: function() { return r(p.createReactRootIndex()) },
                    createReactID: function(e, t) { return e + t },
                    getReactRootIDFromNodeID: function(e) { if (e && e.charAt(0) === f && e.length > 1) { var t = e.indexOf(f, 1); return t > -1 ? e.substr(0, t) : e } return null },
                    traverseEnterLeave: function(e, t, n, r, o) {
                        var i = l(e, t);
                        i !== e && c(e, i, n, r, !1, !0), i !== t && c(i, t, n, o, !0, !1)
                    },
                    traverseTwoPhase: function(e, t, n) { e && (c("", e, t, n, !0, !1), c(e, "", t, n, !1, !0)) },
                    traverseAncestors: function(e, t, n) { c("", e, t, n, !0, !1) },
                    _getFirstCommonAncestorID: l,
                    _getNextDescendantID: s,
                    isAncestorIDOf: a,
                    SEPARATOR: f
                };
            t.exports = v
        }, { 133: 133, 81: 81 }],
        65: [function(e, t, n) {
            "use strict";
            var r = { remove: function(e) { e._reactInternalInstance = void 0 }, get: function(e) { return e._reactInternalInstance }, has: function(e) { return void 0 !== e._reactInternalInstance }, set: function(e, t) { e._reactInternalInstance = t } };
            t.exports = r
        }, {}],
        66: [function(e, t, n) {
            "use strict";
            var r = { currentlyMountingInstance: null, currentlyUnmountingInstance: null };
            t.exports = r
        }, {}],
        67: [function(e, t, n) {
            "use strict";
            var r = e(104),
                o = {
                    CHECKSUM_ATTR_NAME: "data-react-checksum",
                    addChecksumToMarkup: function(e) { var t = r(e); return e.replace(">", " " + o.CHECKSUM_ATTR_NAME + '="' + t + '">') },
                    canReuseMarkup: function(e, t) {
                        var n = t.getAttribute(o.CHECKSUM_ATTR_NAME);
                        n = n && parseInt(n, 10);
                        var i = r(e);
                        return i === n
                    }
                };
            t.exports = o
        }, { 104: 104 }],
        68: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = Math.min(e.length, t.length), r = 0; n > r; r++)
                    if (e.charAt(r) !== t.charAt(r)) return r;
                return e.length === t.length ? -1 : n
            }

            function o(e) { var t = P(e); return t && K.getID(t) }

            function i(e) {
                var t = a(e);
                if (t)
                    if (L.hasOwnProperty(t)) {
                        var n = L[t];
                        n !== e && (w(!c(n, t)), L[t] = e)
                    } else L[t] = e;
                return t
            }

            function a(e) { return e && e.getAttribute && e.getAttribute(k) || "" }

            function u(e, t) {
                var n = a(e);
                n !== t && delete L[n], e.setAttribute(k, t), L[t] = e
            }

            function s(e) { return L.hasOwnProperty(e) && c(L[e], e) || (L[e] = K.findReactNodeByID(e)), L[e] }

            function l(e) { var t = b.get(e)._rootNodeID; return C.isNullComponentID(t) ? null : (L.hasOwnProperty(t) && c(L[t], t) || (L[t] = K.findReactNodeByID(t)), L[t]) }

            function c(e, t) { if (e) { w(a(e) === t); var n = K.findReactContainerForID(t); if (n && T(n, e)) return !0 } return !1 }

            function p(e) { delete L[e] }

            function d(e) { var t = L[e]; return t && c(t, e) ? void(W = t) : !1 }

            function f(e) { W = null, E.traverseAncestors(e, d); var t = W; return W = null, t }

            function h(e, t, n, r, o) {
                var i = D.mountComponent(e, t, r, I);
                e._isTopLevel = !0, K._mountImageIntoNode(i, n, o)
            }

            function m(e, t, n, r) {
                var o = N.ReactReconcileTransaction.getPooled();
                o.perform(h, null, e, t, n, o, r), N.ReactReconcileTransaction.release(o)
            }
            var v = e(10),
                g = e(30),
                y = (e(39), e(55)),
                C = (e(56), e(57)),
                E = e(64),
                b = e(65),
                _ = e(67),
                x = e(73),
                D = e(79),
                M = e(84),
                N = e(85),
                I = e(113),
                T = e(107),
                P = e(127),
                R = e(132),
                w = e(133),
                O = e(144),
                S = e(147),
                A = (e(150), E.SEPARATOR),
                k = v.ID_ATTRIBUTE_NAME,
                L = {},
                U = 1,
                F = 9,
                B = {},
                V = {},
                j = [],
                W = null,
                K = {
                    _instancesByReactRootID: B,
                    scrollMonitor: function(e, t) { t() },
                    _updateRootComponent: function(e, t, n, r) { return K.scrollMonitor(n, function() { M.enqueueElementInternal(e, t), r && M.enqueueCallbackInternal(e, r) }), e },
                    _registerComponent: function(e, t) { w(t && (t.nodeType === U || t.nodeType === F)), g.ensureScrollValueMonitoring(); var n = K.registerContainer(t); return B[n] = e, n },
                    _renderNewRootComponent: function(e, t, n) {
                        var r = R(e, null),
                            o = K._registerComponent(r, t);
                        return N.batchedUpdates(m, r, o, t, n), r
                    },
                    render: function(e, t, n) {
                        w(y.isValidElement(e));
                        var r = B[o(t)];
                        if (r) {
                            var i = r._currentElement;
                            if (S(i, e)) return K._updateRootComponent(r, e, t, n).getPublicInstance();
                            K.unmountComponentAtNode(t)
                        }
                        var a = P(t),
                            u = a && K.isRenderedByReact(a),
                            s = u && !r,
                            l = K._renderNewRootComponent(e, t, s).getPublicInstance();
                        return n && n.call(l), l
                    },
                    constructAndRenderComponent: function(e, t, n) { var r = y.createElement(e, t); return K.render(r, n) },
                    constructAndRenderComponentByID: function(e, t, n) { var r = document.getElementById(n); return w(r), K.constructAndRenderComponent(e, t, r) },
                    registerContainer: function(e) { var t = o(e); return t && (t = E.getReactRootIDFromNodeID(t)), t || (t = E.createReactRootID()), V[t] = e, t },
                    unmountComponentAtNode: function(e) {
                        w(e && (e.nodeType === U || e.nodeType === F));
                        var t = o(e),
                            n = B[t];
                        return n ? (K.unmountComponentFromNode(n, e), delete B[t], delete V[t], !0) : !1
                    },
                    unmountComponentFromNode: function(e, t) { for (D.unmountComponent(e), t.nodeType === F && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild) },
                    findReactContainerForID: function(e) {
                        var t = E.getReactRootIDFromNodeID(e),
                            n = V[t];
                        return n
                    },
                    findReactNodeByID: function(e) { var t = K.findReactContainerForID(e); return K.findComponentRoot(t, e) },
                    isRenderedByReact: function(e) { if (1 !== e.nodeType) return !1; var t = K.getID(e); return t ? t.charAt(0) === A : !1 },
                    getFirstReactDOM: function(e) {
                        for (var t = e; t && t.parentNode !== t;) {
                            if (K.isRenderedByReact(t)) return t;
                            t = t.parentNode
                        }
                        return null
                    },
                    findComponentRoot: function(e, t) {
                        var n = j,
                            r = 0,
                            o = f(t) || e;
                        for (n[0] = o.firstChild, n.length = 1; r < n.length;) {
                            for (var i, a = n[r++]; a;) {
                                var u = K.getID(a);
                                u ? t === u ? i = a : E.isAncestorIDOf(u, t) && (n.length = r = 0, n.push(a.firstChild)) : n.push(a.firstChild), a = a.nextSibling
                            }
                            if (i) return n.length = 0, i
                        }
                        n.length = 0, w(!1)
                    },
                    _mountImageIntoNode: function(e, t, n) {
                        if (w(t && (t.nodeType === U || t.nodeType === F)), n) {
                            var o = P(t);
                            if (_.canReuseMarkup(e, o)) return;
                            var i = o.getAttribute(_.CHECKSUM_ATTR_NAME);
                            o.removeAttribute(_.CHECKSUM_ATTR_NAME);
                            var a = o.outerHTML;
                            o.setAttribute(_.CHECKSUM_ATTR_NAME, i);
                            var u = r(e, a);
                            " (client) " + e.substring(u - 20, u + 20) + "\n (server) " + a.substring(u - 20, u + 20), w(t.nodeType !== F)
                        }
                        w(t.nodeType !== F), O(t, e)
                    },
                    getReactRootID: o,
                    getID: i,
                    setID: u,
                    getNode: s,
                    getNodeFromInstance: l,
                    purgeID: p
                };
            x.measureMethods(K, "ReactMount", { _renderNewRootComponent: "_renderNewRootComponent", _mountImageIntoNode: "_mountImageIntoNode" }), t.exports = K
        }, { 10: 10, 107: 107, 113: 113, 127: 127, 132: 132, 133: 133, 144: 144, 147: 147, 150: 150, 30: 30, 39: 39, 55: 55, 56: 56, 57: 57, 64: 64, 65: 65, 67: 67, 73: 73, 79: 79, 84: 84, 85: 85 }],
        69: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { h.push({ parentID: e, parentNode: null, type: c.INSERT_MARKUP, markupIndex: m.push(t) - 1, textContent: null, fromIndex: null, toIndex: n }) }

            function o(e, t, n) { h.push({ parentID: e, parentNode: null, type: c.MOVE_EXISTING, markupIndex: null, textContent: null, fromIndex: t, toIndex: n }) }

            function i(e, t) { h.push({ parentID: e, parentNode: null, type: c.REMOVE_NODE, markupIndex: null, textContent: null, fromIndex: t, toIndex: null }) }

            function a(e, t) { h.push({ parentID: e, parentNode: null, type: c.TEXT_CONTENT, markupIndex: null, textContent: t, fromIndex: null, toIndex: null }) }

            function u() { h.length && (l.processChildrenUpdates(h, m), s()) }

            function s() { h.length = 0, m.length = 0 }
            var l = e(36),
                c = e(70),
                p = e(79),
                d = e(31),
                f = 0,
                h = [],
                m = [],
                v = {
                    Mixin: {
                        mountChildren: function(e, t, n) {
                            var r = d.instantiateChildren(e, t, n);
                            this._renderedChildren = r;
                            var o = [],
                                i = 0;
                            for (var a in r)
                                if (r.hasOwnProperty(a)) {
                                    var u = r[a],
                                        s = this._rootNodeID + a,
                                        l = p.mountComponent(u, s, t, n);
                                    u._mountIndex = i, o.push(l), i++
                                }
                            return o
                        },
                        updateTextContent: function(e) {
                            f++;
                            var t = !0;
                            try {
                                var n = this._renderedChildren;
                                d.unmountChildren(n);
                                for (var r in n) n.hasOwnProperty(r) && this._unmountChildByName(n[r], r);
                                this.setTextContent(e), t = !1
                            } finally { f--, f || (t ? s() : u()) }
                        },
                        updateChildren: function(e, t, n) { f++; var r = !0; try { this._updateChildren(e, t, n), r = !1 } finally { f--, f || (r ? s() : u()) } },
                        _updateChildren: function(e, t, n) {
                            var r = this._renderedChildren,
                                o = d.updateChildren(r, e, t, n);
                            if (this._renderedChildren = o, o || r) {
                                var i, a = 0,
                                    u = 0;
                                for (i in o)
                                    if (o.hasOwnProperty(i)) {
                                        var s = r && r[i],
                                            l = o[i];
                                        s === l ? (this.moveChild(s, u, a), a = Math.max(s._mountIndex, a), s._mountIndex = u) : (s && (a = Math.max(s._mountIndex, a), this._unmountChildByName(s, i)), this._mountChildByNameAtIndex(l, i, u, t, n)), u++
                                    }
                                for (i in r) !r.hasOwnProperty(i) || o && o.hasOwnProperty(i) || this._unmountChildByName(r[i], i)
                            }
                        },
                        unmountChildren: function() {
                            var e = this._renderedChildren;
                            d.unmountChildren(e), this._renderedChildren = null
                        },
                        moveChild: function(e, t, n) { e._mountIndex < n && o(this._rootNodeID, e._mountIndex, t) },
                        createChild: function(e, t) { r(this._rootNodeID, t, e._mountIndex) },
                        removeChild: function(e) { i(this._rootNodeID, e._mountIndex) },
                        setTextContent: function(e) { a(this._rootNodeID, e) },
                        _mountChildByNameAtIndex: function(e, t, n, r, o) {
                            var i = this._rootNodeID + t,
                                a = p.mountComponent(e, i, r, o);
                            e._mountIndex = n, this.createChild(e, a)
                        },
                        _unmountChildByName: function(e, t) { this.removeChild(e), e._mountIndex = null }
                    }
                };
            t.exports = v
        }, { 31: 31, 36: 36, 70: 70, 79: 79 }],
        70: [function(e, t, n) {
            "use strict";
            var r = e(138),
                o = r({ INSERT_MARKUP: null, MOVE_EXISTING: null, REMOVE_NODE: null, TEXT_CONTENT: null });
            t.exports = o
        }, { 138: 138 }],
        71: [function(e, t, n) {
            "use strict";

            function r(e) {
                if ("function" == typeof e.type) return e.type;
                var t = e.type,
                    n = p[t];
                return null == n && (p[t] = n = l(t)), n
            }

            function o(e) { return s(c), new c(e.type, e.props) }

            function i(e) { return new d(e) }

            function a(e) { return e instanceof d }
            var u = e(27),
                s = e(133),
                l = null,
                c = null,
                p = {},
                d = null,
                f = { injectGenericComponentClass: function(e) { c = e }, injectTextComponentClass: function(e) { d = e }, injectComponentClasses: function(e) { u(p, e) }, injectAutoWrapper: function(e) { l = e } },
                h = { getComponentClassForElement: r, createInternalComponent: o, createInstanceForText: i, isTextComponent: a, injection: f };
            t.exports = h
        }, { 133: 133, 27: 27 }],
        72: [function(e, t, n) {
            "use strict";
            var r = e(133),
                o = { isValidOwner: function(e) { return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef) }, addComponentAsRefTo: function(e, t, n) { r(o.isValidOwner(n)), n.attachRef(t, e) }, removeComponentAsRefFrom: function(e, t, n) { r(o.isValidOwner(n)), n.getPublicInstance().refs[t] === e.getPublicInstance() && n.detachRef(t) } };
            t.exports = o
        }, { 133: 133 }],
        73: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { return n }
            var o = { enableMeasure: !1, storedMeasure: r, measureMethods: function(e, t, n) {}, measure: function(e, t, n) { return n }, injection: { injectMeasure: function(e) { o.storedMeasure = e } } };
            t.exports = o
        }, {}],
        74: [function(e, t, n) {
            "use strict";
            var r = {};
            t.exports = r
        }, {}],
        75: [function(e, t, n) {
            "use strict";
            var r = e(138),
                o = r({ prop: null, context: null, childContext: null });
            t.exports = o
        }, { 138: 138 }],
        76: [function(e, t, n) {
            "use strict";

            function r(e) {
                function t(t, n, r, o, i) { if (o = o || b, null == n[r]) { var a = C[i]; return t ? new Error("Required " + a + " `" + r + "` was not specified in " + ("`" + o + "`.")) : null } return e(n, r, o, i) }
                var n = t.bind(null, !1);
                return n.isRequired = t.bind(null, !0), n
            }

            function o(e) {
                function t(t, n, r, o) {
                    var i = t[n],
                        a = m(i);
                    if (a !== e) {
                        var u = C[o],
                            s = v(i);
                        return new Error("Invalid " + u + " `" + n + "` of type `" + s + "` " + ("supplied to `" + r + "`, expected `" + e + "`."))
                    }
                    return null
                }
                return r(t)
            }

            function i() { return r(E.thatReturns(null)) }

            function a(e) {
                function t(t, n, r, o) {
                    var i = t[n];
                    if (!Array.isArray(i)) {
                        var a = C[o],
                            u = m(i);
                        return new Error("Invalid " + a + " `" + n + "` of type " + ("`" + u + "` supplied to `" + r + "`, expected an array."))
                    }
                    for (var s = 0; s < i.length; s++) { var l = e(i, s, r, o); if (l instanceof Error) return l }
                    return null
                }
                return r(t)
            }

            function u() {
                function e(e, t, n, r) { if (!g.isValidElement(e[t])) { var o = C[r]; return new Error("Invalid " + o + " `" + t + "` supplied to " + ("`" + n + "`, expected a ReactElement.")) } return null }
                return r(e)
            }

            function s(e) {
                function t(t, n, r, o) {
                    if (!(t[n] instanceof e)) {
                        var i = C[o],
                            a = e.name || b;
                        return new Error("Invalid " + i + " `" + n + "` supplied to " + ("`" + r + "`, expected instance of `" + a + "`."))
                    }
                    return null
                }
                return r(t)
            }

            function l(e) {
                function t(t, n, r, o) {
                    for (var i = t[n], a = 0; a < e.length; a++)
                        if (i === e[a]) return null;
                    var u = C[o],
                        s = JSON.stringify(e);
                    return new Error("Invalid " + u + " `" + n + "` of value `" + i + "` " + ("supplied to `" + r + "`, expected one of " + s + "."))
                }
                return r(t)
            }

            function c(e) {
                function t(t, n, r, o) {
                    var i = t[n],
                        a = m(i);
                    if ("object" !== a) { var u = C[o]; return new Error("Invalid " + u + " `" + n + "` of type " + ("`" + a + "` supplied to `" + r + "`, expected an object.")) }
                    for (var s in i)
                        if (i.hasOwnProperty(s)) { var l = e(i, s, r, o); if (l instanceof Error) return l }
                    return null
                }
                return r(t)
            }

            function p(e) {
                function t(t, n, r, o) { for (var i = 0; i < e.length; i++) { var a = e[i]; if (null == a(t, n, r, o)) return null } var u = C[o]; return new Error("Invalid " + u + " `" + n + "` supplied to " + ("`" + r + "`.")) }
                return r(t)
            }

            function d() {
                function e(e, t, n, r) { if (!h(e[t])) { var o = C[r]; return new Error("Invalid " + o + " `" + t + "` supplied to " + ("`" + n + "`, expected a ReactNode.")) } return null }
                return r(e)
            }

            function f(e) {
                function t(t, n, r, o) {
                    var i = t[n],
                        a = m(i);
                    if ("object" !== a) { var u = C[o]; return new Error("Invalid " + u + " `" + n + "` of type `" + a + "` " + ("supplied to `" + r + "`, expected `object`.")) }
                    for (var s in e) { var l = e[s]; if (l) { var c = l(i, s, r, o); if (c) return c } }
                    return null
                }
                return r(t)
            }

            function h(e) {
                switch (typeof e) {
                    case "number":
                    case "string":
                    case "undefined":
                        return !0;
                    case "boolean":
                        return !e;
                    case "object":
                        if (Array.isArray(e)) return e.every(h);
                        if (null === e || g.isValidElement(e)) return !0;
                        e = y.extractIfFragment(e);
                        for (var t in e)
                            if (!h(e[t])) return !1;
                        return !0;
                    default:
                        return !1
                }
            }

            function m(e) { var t = typeof e; return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : t }

            function v(e) { var t = m(e); if ("object" === t) { if (e instanceof Date) return "date"; if (e instanceof RegExp) return "regexp" } return t }
            var g = e(55),
                y = e(61),
                C = e(74),
                E = e(112),
                b = "<<anonymous>>",
                _ = u(),
                x = d(),
                D = { array: o("array"), bool: o("boolean"), func: o("function"), number: o("number"), object: o("object"), string: o("string"), any: i(), arrayOf: a, element: _, instanceOf: s, node: x, objectOf: c, oneOf: l, oneOfType: p, shape: f };
            t.exports = D
        }, { 112: 112, 55: 55, 61: 61, 74: 74 }],
        77: [function(e, t, n) {
            "use strict";

            function r() { this.listenersToPut = [] }
            var o = e(28),
                i = e(30),
                a = e(27);
            a(r.prototype, {
                enqueuePutListener: function(e, t, n) { this.listenersToPut.push({ rootNodeID: e, propKey: t, propValue: n }) },
                putListeners: function() {
                    for (var e = 0; e < this.listenersToPut.length; e++) {
                        var t = this.listenersToPut[e];
                        i.putListener(t.rootNodeID, t.propKey, t.propValue)
                    }
                },
                reset: function() { this.listenersToPut.length = 0 },
                destructor: function() { this.reset() }
            }), o.addPoolingTo(r), t.exports = r
        }, { 27: 27, 28: 28, 30: 30 }],
        78: [function(e, t, n) {
            "use strict";

            function r() { this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = o.getPooled(null), this.putListenerQueue = s.getPooled() }
            var o = e(6),
                i = e(28),
                a = e(30),
                u = e(63),
                s = e(77),
                l = e(101),
                c = e(27),
                p = { initialize: u.getSelectionInformation, close: u.restoreSelection },
                d = { initialize: function() { var e = a.isEnabled(); return a.setEnabled(!1), e }, close: function(e) { a.setEnabled(e) } },
                f = { initialize: function() { this.reactMountReady.reset() }, close: function() { this.reactMountReady.notifyAll() } },
                h = { initialize: function() { this.putListenerQueue.reset() }, close: function() { this.putListenerQueue.putListeners() } },
                m = [h, p, d, f],
                v = { getTransactionWrappers: function() { return m }, getReactMountReady: function() { return this.reactMountReady }, getPutListenerQueue: function() { return this.putListenerQueue }, destructor: function() { o.release(this.reactMountReady), this.reactMountReady = null, s.release(this.putListenerQueue), this.putListenerQueue = null } };
            c(r.prototype, l.Mixin, v), i.addPoolingTo(r), t.exports = r
        }, { 101: 101, 27: 27, 28: 28, 30: 30, 6: 6, 63: 63, 77: 77 }],
        79: [function(e, t, n) {
            "use strict";

            function r() { o.attachRefs(this, this._currentElement) }
            var o = e(80),
                i = (e(56), {
                    mountComponent: function(e, t, n, o) { var i = e.mountComponent(t, n, o); return n.getReactMountReady().enqueue(r, e), i },
                    unmountComponent: function(e) { o.detachRefs(e, e._currentElement), e.unmountComponent() },
                    receiveComponent: function(e, t, n, i) {
                        var a = e._currentElement;
                        if (t !== a || null == t._owner) {
                            var u = o.shouldUpdateRefs(a, t);
                            u && o.detachRefs(e, a), e.receiveComponent(t, n, i), u && n.getReactMountReady().enqueue(r, e)
                        }
                    },
                    performUpdateIfNecessary: function(e, t) { e.performUpdateIfNecessary(t) }
                });
            t.exports = i
        }, { 56: 56, 80: 80 }],
        80: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { "function" == typeof e ? e(t.getPublicInstance()) : i.addComponentAsRefTo(t, e, n) }

            function o(e, t, n) { "function" == typeof e ? e(null) : i.removeComponentAsRefFrom(t, e, n) }
            var i = e(72),
                a = {};
            a.attachRefs = function(e, t) {
                var n = t.ref;
                null != n && r(n, e, t._owner)
            }, a.shouldUpdateRefs = function(e, t) { return t._owner !== e._owner || t.ref !== e.ref }, a.detachRefs = function(e, t) {
                var n = t.ref;
                null != n && o(n, e, t._owner)
            }, t.exports = a
        }, { 72: 72 }],
        81: [function(e, t, n) {
            "use strict";
            var r = { injectCreateReactRootIndex: function(e) { o.createReactRootIndex = e } },
                o = { createReactRootIndex: null, injection: r };
            t.exports = o
        }, {}],
        82: [function(e, t, n) {
            "use strict";

            function r(e) {
                p(i.isValidElement(e));
                var t;
                try {
                    var n = a.createReactRootID();
                    return t = s.getPooled(!1), t.perform(function() {
                        var r = c(e, null),
                            o = r.mountComponent(n, t, l);
                        return u.addChecksumToMarkup(o)
                    }, null)
                } finally { s.release(t) }
            }

            function o(e) { p(i.isValidElement(e)); var t; try { var n = a.createReactRootID(); return t = s.getPooled(!0), t.perform(function() { var r = c(e, null); return r.mountComponent(n, t, l) }, null) } finally { s.release(t) } }
            var i = e(55),
                a = e(64),
                u = e(67),
                s = e(83),
                l = e(113),
                c = e(132),
                p = e(133);
            t.exports = { renderToString: r, renderToStaticMarkup: o }
        }, { 113: 113, 132: 132, 133: 133, 55: 55, 64: 64, 67: 67, 83: 83 }],
        83: [function(e, t, n) {
            "use strict";

            function r(e) { this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.reactMountReady = i.getPooled(null), this.putListenerQueue = a.getPooled() }
            var o = e(28),
                i = e(6),
                a = e(77),
                u = e(101),
                s = e(27),
                l = e(112),
                c = { initialize: function() { this.reactMountReady.reset() }, close: l },
                p = { initialize: function() { this.putListenerQueue.reset() }, close: l },
                d = [p, c],
                f = { getTransactionWrappers: function() { return d }, getReactMountReady: function() { return this.reactMountReady }, getPutListenerQueue: function() { return this.putListenerQueue }, destructor: function() { i.release(this.reactMountReady), this.reactMountReady = null, a.release(this.putListenerQueue), this.putListenerQueue = null } };
            s(r.prototype, u.Mixin, f), o.addPoolingTo(r), t.exports = r
        }, { 101: 101, 112: 112, 27: 27, 28: 28, 6: 6, 77: 77 }],
        84: [function(e, t, n) {
            "use strict";

            function r(e) { e !== i.currentlyMountingInstance && l.enqueueUpdate(e) }

            function o(e, t) { p(null == a.current); var n = s.get(e); return n ? n === i.currentlyUnmountingInstance ? null : n : null }
            var i = e(66),
                a = e(39),
                u = e(55),
                s = e(65),
                l = e(85),
                c = e(27),
                p = e(133),
                d = (e(150), {
                    enqueueCallback: function(e, t) { p("function" == typeof t); var n = o(e); return n && n !== i.currentlyMountingInstance ? (n._pendingCallbacks ? n._pendingCallbacks.push(t) : n._pendingCallbacks = [t], void r(n)) : null },
                    enqueueCallbackInternal: function(e, t) { p("function" == typeof t), e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], r(e) },
                    enqueueForceUpdate: function(e) {
                        var t = o(e, "forceUpdate");
                        t && (t._pendingForceUpdate = !0, r(t))
                    },
                    enqueueReplaceState: function(e, t) {
                        var n = o(e, "replaceState");
                        n && (n._pendingStateQueue = [t], n._pendingReplaceState = !0, r(n))
                    },
                    enqueueSetState: function(e, t) {
                        var n = o(e, "setState");
                        if (n) {
                            var i = n._pendingStateQueue || (n._pendingStateQueue = []);
                            i.push(t), r(n)
                        }
                    },
                    enqueueSetProps: function(e, t) {
                        var n = o(e, "setProps");
                        if (n) {
                            p(n._isTopLevel);
                            var i = n._pendingElement || n._currentElement,
                                a = c({}, i.props, t);
                            n._pendingElement = u.cloneAndReplaceProps(i, a), r(n)
                        }
                    },
                    enqueueReplaceProps: function(e, t) {
                        var n = o(e, "replaceProps");
                        if (n) {
                            p(n._isTopLevel);
                            var i = n._pendingElement || n._currentElement;
                            n._pendingElement = u.cloneAndReplaceProps(i, t), r(n)
                        }
                    },
                    enqueueElementInternal: function(e, t) { e._pendingElement = t, r(e) }
                });
            t.exports = d
        }, { 133: 133, 150: 150, 27: 27, 39: 39, 55: 55, 65: 65, 66: 66, 85: 85 }],
        85: [function(e, t, n) {
            "use strict";

            function r() { v(N.ReactReconcileTransaction && E) }

            function o() { this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = c.getPooled(), this.reconcileTransaction = N.ReactReconcileTransaction.getPooled() }

            function i(e, t, n, o, i) { r(), E.batchedUpdates(e, t, n, o, i) }

            function a(e, t) { return e._mountOrder - t._mountOrder }

            function u(e) {
                var t = e.dirtyComponentsLength;
                v(t === g.length), g.sort(a);
                for (var n = 0; t > n; n++) {
                    var r = g[n],
                        o = r._pendingCallbacks;
                    if (r._pendingCallbacks = null, f.performUpdateIfNecessary(r, e.reconcileTransaction), o)
                        for (var i = 0; i < o.length; i++) e.callbackQueue.enqueue(o[i], r.getPublicInstance())
                }
            }

            function s(e) { return r(), E.isBatchingUpdates ? void g.push(e) : void E.batchedUpdates(s, e) }

            function l(e, t) { v(E.isBatchingUpdates), y.enqueue(e, t), C = !0 }
            var c = e(6),
                p = e(28),
                d = (e(39), e(73)),
                f = e(79),
                h = e(101),
                m = e(27),
                v = e(133),
                g = (e(150), []),
                y = c.getPooled(),
                C = !1,
                E = null,
                b = { initialize: function() { this.dirtyComponentsLength = g.length }, close: function() { this.dirtyComponentsLength !== g.length ? (g.splice(0, this.dirtyComponentsLength), D()) : g.length = 0 } },
                _ = { initialize: function() { this.callbackQueue.reset() }, close: function() { this.callbackQueue.notifyAll() } },
                x = [b, _];
            m(o.prototype, h.Mixin, { getTransactionWrappers: function() { return x }, destructor: function() { this.dirtyComponentsLength = null, c.release(this.callbackQueue), this.callbackQueue = null, N.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null }, perform: function(e, t, n) { return h.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n) } }), p.addPoolingTo(o);
            var D = function() {
                for (; g.length || C;) {
                    if (g.length) {
                        var e = o.getPooled();
                        e.perform(u, null, e), o.release(e)
                    }
                    if (C) {
                        C = !1;
                        var t = y;
                        y = c.getPooled(), t.notifyAll(), c.release(t)
                    }
                }
            };
            D = d.measure("ReactUpdates", "flushBatchedUpdates", D);
            var M = { injectReconcileTransaction: function(e) { v(e), N.ReactReconcileTransaction = e }, injectBatchingStrategy: function(e) { v(e), v("function" == typeof e.batchedUpdates), v("boolean" == typeof e.isBatchingUpdates), E = e } },
                N = { ReactReconcileTransaction: null, batchedUpdates: i, enqueueUpdate: s, flushBatchedUpdates: D, injection: M, asap: l };
            t.exports = N
        }, { 101: 101, 133: 133, 150: 150, 27: 27, 28: 28, 39: 39, 6: 6, 73: 73, 79: 79 }],
        86: [function(e, t, n) {
            "use strict";
            var r = e(10),
                o = r.injection.MUST_USE_ATTRIBUTE,
                i = { Properties: { clipPath: o, cx: o, cy: o, d: o, dx: o, dy: o, fill: o, fillOpacity: o, fontFamily: o, fontSize: o, fx: o, fy: o, gradientTransform: o, gradientUnits: o, markerEnd: o, markerMid: o, markerStart: o, offset: o, opacity: o, patternContentUnits: o, patternUnits: o, points: o, preserveAspectRatio: o, r: o, rx: o, ry: o, spreadMethod: o, stopColor: o, stopOpacity: o, stroke: o, strokeDasharray: o, strokeLinecap: o, strokeOpacity: o, strokeWidth: o, textAnchor: o, transform: o, version: o, viewBox: o, x1: o, x2: o, x: o, y1: o, y2: o, y: o }, DOMAttributeNames: { clipPath: "clip-path", fillOpacity: "fill-opacity", fontFamily: "font-family", fontSize: "font-size", gradientTransform: "gradientTransform", gradientUnits: "gradientUnits", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", patternContentUnits: "patternContentUnits", patternUnits: "patternUnits", preserveAspectRatio: "preserveAspectRatio", spreadMethod: "spreadMethod", stopColor: "stop-color", stopOpacity: "stop-opacity", strokeDasharray: "stroke-dasharray", strokeLinecap: "stroke-linecap", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", textAnchor: "text-anchor", viewBox: "viewBox" } };
            t.exports = i
        }, { 10: 10 }],
        87: [function(e, t, n) {
            "use strict";

            function r(e) { if ("selectionStart" in e && u.hasSelectionCapabilities(e)) return { start: e.selectionStart, end: e.selectionEnd }; if (window.getSelection) { var t = window.getSelection(); return { anchorNode: t.anchorNode, anchorOffset: t.anchorOffset, focusNode: t.focusNode, focusOffset: t.focusOffset } } if (document.selection) { var n = document.selection.createRange(); return { parentElement: n.parentElement(), text: n.text, top: n.boundingTop, left: n.boundingLeft } } }

            function o(e) { if (y || null == m || m !== l()) return null; var t = r(m); if (!g || !d(g, t)) { g = t; var n = s.getPooled(h.select, v, e); return n.type = "select", n.target = m, a.accumulateTwoPhaseDispatches(n), n } }
            var i = e(15),
                a = e(20),
                u = e(63),
                s = e(93),
                l = e(119),
                c = e(136),
                p = e(139),
                d = e(146),
                f = i.topLevelTypes,
                h = { select: { phasedRegistrationNames: { bubbled: p({ onSelect: null }), captured: p({ onSelectCapture: null }) }, dependencies: [f.topBlur, f.topContextMenu, f.topFocus, f.topKeyDown, f.topMouseDown, f.topMouseUp, f.topSelectionChange] } },
                m = null,
                v = null,
                g = null,
                y = !1,
                C = {
                    eventTypes: h,
                    extractEvents: function(e, t, n, r) {
                        switch (e) {
                            case f.topFocus:
                                (c(t) || "true" === t.contentEditable) && (m = t, v = n, g = null);
                                break;
                            case f.topBlur:
                                m = null, v = null, g = null;
                                break;
                            case f.topMouseDown:
                                y = !0;
                                break;
                            case f.topContextMenu:
                            case f.topMouseUp:
                                return y = !1, o(r);
                            case f.topSelectionChange:
                            case f.topKeyDown:
                            case f.topKeyUp:
                                return o(r)
                        }
                    }
                };
            t.exports = C
        }, { 119: 119, 136: 136, 139: 139, 146: 146, 15: 15, 20: 20, 63: 63, 93: 93 }],
        88: [function(e, t, n) {
            "use strict";
            var r = Math.pow(2, 53),
                o = { createReactRootIndex: function() { return Math.ceil(Math.random() * r) } };
            t.exports = o
        }, {}],
        89: [function(e, t, n) {
            "use strict";
            var r = e(15),
                o = e(19),
                i = e(20),
                a = e(90),
                u = e(93),
                s = e(94),
                l = e(96),
                c = e(97),
                p = e(92),
                d = e(98),
                f = e(99),
                h = e(100),
                m = e(120),
                v = e(133),
                g = e(139),
                y = (e(150), r.topLevelTypes),
                C = { blur: { phasedRegistrationNames: { bubbled: g({ onBlur: !0 }), captured: g({ onBlurCapture: !0 }) } }, click: { phasedRegistrationNames: { bubbled: g({ onClick: !0 }), captured: g({ onClickCapture: !0 }) } }, contextMenu: { phasedRegistrationNames: { bubbled: g({ onContextMenu: !0 }), captured: g({ onContextMenuCapture: !0 }) } }, copy: { phasedRegistrationNames: { bubbled: g({ onCopy: !0 }), captured: g({ onCopyCapture: !0 }) } }, cut: { phasedRegistrationNames: { bubbled: g({ onCut: !0 }), captured: g({ onCutCapture: !0 }) } }, doubleClick: { phasedRegistrationNames: { bubbled: g({ onDoubleClick: !0 }), captured: g({ onDoubleClickCapture: !0 }) } }, drag: { phasedRegistrationNames: { bubbled: g({ onDrag: !0 }), captured: g({ onDragCapture: !0 }) } }, dragEnd: { phasedRegistrationNames: { bubbled: g({ onDragEnd: !0 }), captured: g({ onDragEndCapture: !0 }) } }, dragEnter: { phasedRegistrationNames: { bubbled: g({ onDragEnter: !0 }), captured: g({ onDragEnterCapture: !0 }) } }, dragExit: { phasedRegistrationNames: { bubbled: g({ onDragExit: !0 }), captured: g({ onDragExitCapture: !0 }) } }, dragLeave: { phasedRegistrationNames: { bubbled: g({ onDragLeave: !0 }), captured: g({ onDragLeaveCapture: !0 }) } }, dragOver: { phasedRegistrationNames: { bubbled: g({ onDragOver: !0 }), captured: g({ onDragOverCapture: !0 }) } }, dragStart: { phasedRegistrationNames: { bubbled: g({ onDragStart: !0 }), captured: g({ onDragStartCapture: !0 }) } }, drop: { phasedRegistrationNames: { bubbled: g({ onDrop: !0 }), captured: g({ onDropCapture: !0 }) } }, focus: { phasedRegistrationNames: { bubbled: g({ onFocus: !0 }), captured: g({ onFocusCapture: !0 }) } }, input: { phasedRegistrationNames: { bubbled: g({ onInput: !0 }), captured: g({ onInputCapture: !0 }) } }, keyDown: { phasedRegistrationNames: { bubbled: g({ onKeyDown: !0 }), captured: g({ onKeyDownCapture: !0 }) } }, keyPress: { phasedRegistrationNames: { bubbled: g({ onKeyPress: !0 }), captured: g({ onKeyPressCapture: !0 }) } }, keyUp: { phasedRegistrationNames: { bubbled: g({ onKeyUp: !0 }), captured: g({ onKeyUpCapture: !0 }) } }, load: { phasedRegistrationNames: { bubbled: g({ onLoad: !0 }), captured: g({ onLoadCapture: !0 }) } }, error: { phasedRegistrationNames: { bubbled: g({ onError: !0 }), captured: g({ onErrorCapture: !0 }) } }, mouseDown: { phasedRegistrationNames: { bubbled: g({ onMouseDown: !0 }), captured: g({ onMouseDownCapture: !0 }) } }, mouseMove: { phasedRegistrationNames: { bubbled: g({ onMouseMove: !0 }), captured: g({ onMouseMoveCapture: !0 }) } }, mouseOut: { phasedRegistrationNames: { bubbled: g({ onMouseOut: !0 }), captured: g({ onMouseOutCapture: !0 }) } }, mouseOver: { phasedRegistrationNames: { bubbled: g({ onMouseOver: !0 }), captured: g({ onMouseOverCapture: !0 }) } }, mouseUp: { phasedRegistrationNames: { bubbled: g({ onMouseUp: !0 }), captured: g({ onMouseUpCapture: !0 }) } }, paste: { phasedRegistrationNames: { bubbled: g({ onPaste: !0 }), captured: g({ onPasteCapture: !0 }) } }, reset: { phasedRegistrationNames: { bubbled: g({ onReset: !0 }), captured: g({ onResetCapture: !0 }) } }, scroll: { phasedRegistrationNames: { bubbled: g({ onScroll: !0 }), captured: g({ onScrollCapture: !0 }) } }, submit: { phasedRegistrationNames: { bubbled: g({ onSubmit: !0 }), captured: g({ onSubmitCapture: !0 }) } }, touchCancel: { phasedRegistrationNames: { bubbled: g({ onTouchCancel: !0 }), captured: g({ onTouchCancelCapture: !0 }) } }, touchEnd: { phasedRegistrationNames: { bubbled: g({ onTouchEnd: !0 }), captured: g({ onTouchEndCapture: !0 }) } }, touchMove: { phasedRegistrationNames: { bubbled: g({ onTouchMove: !0 }), captured: g({ onTouchMoveCapture: !0 }) } }, touchStart: { phasedRegistrationNames: { bubbled: g({ onTouchStart: !0 }), captured: g({ onTouchStartCapture: !0 }) } }, wheel: { phasedRegistrationNames: { bubbled: g({ onWheel: !0 }), captured: g({ onWheelCapture: !0 }) } } },
                E = { topBlur: C.blur, topClick: C.click, topContextMenu: C.contextMenu, topCopy: C.copy, topCut: C.cut, topDoubleClick: C.doubleClick, topDrag: C.drag, topDragEnd: C.dragEnd, topDragEnter: C.dragEnter, topDragExit: C.dragExit, topDragLeave: C.dragLeave, topDragOver: C.dragOver, topDragStart: C.dragStart, topDrop: C.drop, topError: C.error, topFocus: C.focus, topInput: C.input, topKeyDown: C.keyDown, topKeyPress: C.keyPress, topKeyUp: C.keyUp, topLoad: C.load, topMouseDown: C.mouseDown, topMouseMove: C.mouseMove, topMouseOut: C.mouseOut, topMouseOver: C.mouseOver, topMouseUp: C.mouseUp, topPaste: C.paste, topReset: C.reset, topScroll: C.scroll, topSubmit: C.submit, topTouchCancel: C.touchCancel, topTouchEnd: C.touchEnd, topTouchMove: C.touchMove, topTouchStart: C.touchStart, topWheel: C.wheel };
            for (var b in E) E[b].dependencies = [b];
            var _ = {
                eventTypes: C,
                executeDispatch: function(e, t, n) {
                    var r = o.executeDispatch(e, t, n);
                    r === !1 && (e.stopPropagation(), e.preventDefault())
                },
                extractEvents: function(e, t, n, r) {
                    var o = E[e];
                    if (!o) return null;
                    var g;
                    switch (e) {
                        case y.topInput:
                        case y.topLoad:
                        case y.topError:
                        case y.topReset:
                        case y.topSubmit:
                            g = u;
                            break;
                        case y.topKeyPress:
                            if (0 === m(r)) return null;
                        case y.topKeyDown:
                        case y.topKeyUp:
                            g = l;
                            break;
                        case y.topBlur:
                        case y.topFocus:
                            g = s;
                            break;
                        case y.topClick:
                            if (2 === r.button) return null;
                        case y.topContextMenu:
                        case y.topDoubleClick:
                        case y.topMouseDown:
                        case y.topMouseMove:
                        case y.topMouseOut:
                        case y.topMouseOver:
                        case y.topMouseUp:
                            g = c;
                            break;
                        case y.topDrag:
                        case y.topDragEnd:
                        case y.topDragEnter:
                        case y.topDragExit:
                        case y.topDragLeave:
                        case y.topDragOver:
                        case y.topDragStart:
                        case y.topDrop:
                            g = p;
                            break;
                        case y.topTouchCancel:
                        case y.topTouchEnd:
                        case y.topTouchMove:
                        case y.topTouchStart:
                            g = d;
                            break;
                        case y.topScroll:
                            g = f;
                            break;
                        case y.topWheel:
                            g = h;
                            break;
                        case y.topCopy:
                        case y.topCut:
                        case y.topPaste:
                            g = a
                    }
                    v(g);
                    var C = g.getPooled(o, n, r);
                    return i.accumulateTwoPhaseDispatches(C), C
                }
            };
            t.exports = _
        }, { 100: 100, 120: 120, 133: 133, 139: 139, 15: 15, 150: 150, 19: 19, 20: 20, 90: 90, 92: 92, 93: 93, 94: 94, 96: 96, 97: 97, 98: 98, 99: 99 }],
        90: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(93),
                i = { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } };
            o.augmentClass(r, i), t.exports = r
        }, { 93: 93 }],
        91: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(93),
                i = { data: null };
            o.augmentClass(r, i), t.exports = r
        }, { 93: 93 }],
        92: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(97),
                i = { dataTransfer: null };
            o.augmentClass(r, i), t.exports = r
        }, { 97: 97 }],
        93: [function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                this.dispatchConfig = e, this.dispatchMarker = t, this.nativeEvent = n;
                var r = this.constructor.Interface;
                for (var o in r)
                    if (r.hasOwnProperty(o)) {
                        var i = r[o];
                        this[o] = i ? i(n) : n[o]
                    }
                var u = null != n.defaultPrevented ? n.defaultPrevented : n.returnValue === !1;
                this.isDefaultPrevented = u ? a.thatReturnsTrue : a.thatReturnsFalse, this.isPropagationStopped = a.thatReturnsFalse
            }
            var o = e(28),
                i = e(27),
                a = e(112),
                u = e(123),
                s = { type: null, target: u, currentTarget: a.thatReturnsNull, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: null, isTrusted: null };
            i(r.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1, this.isDefaultPrevented = a.thatReturnsTrue
                },
                stopPropagation: function() {
                    var e = this.nativeEvent;
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this.isPropagationStopped = a.thatReturnsTrue
                },
                persist: function() { this.isPersistent = a.thatReturnsTrue },
                isPersistent: a.thatReturnsFalse,
                destructor: function() {
                    var e = this.constructor.Interface;
                    for (var t in e) this[t] = null;
                    this.dispatchConfig = null, this.dispatchMarker = null, this.nativeEvent = null
                }
            }), r.Interface = s, r.augmentClass = function(e, t) {
                var n = this,
                    r = Object.create(n.prototype);
                i(r, e.prototype), e.prototype = r, e.prototype.constructor = e, e.Interface = i({}, n.Interface, t), e.augmentClass = n.augmentClass, o.addPoolingTo(e, o.threeArgumentPooler)
            }, o.addPoolingTo(r, o.threeArgumentPooler), t.exports = r
        }, { 112: 112, 123: 123, 27: 27, 28: 28 }],
        94: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(99),
                i = { relatedTarget: null };
            o.augmentClass(r, i), t.exports = r
        }, { 99: 99 }],
        95: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(93),
                i = { data: null };
            o.augmentClass(r, i), t.exports = r
        }, { 93: 93 }],
        96: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(99),
                i = e(120),
                a = e(121),
                u = e(122),
                s = { key: a, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: u, charCode: function(e) { return "keypress" === e.type ? i(e) : 0 }, keyCode: function(e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 }, which: function(e) { return "keypress" === e.type ? i(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 } };
            o.augmentClass(r, s), t.exports = r
        }, { 120: 120, 121: 121, 122: 122, 99: 99 }],
        97: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(99),
                i = e(102),
                a = e(122),
                u = { screenX: null, screenY: null, clientX: null, clientY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: a, button: function(e) { var t = e.button; return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0 }, buttons: null, relatedTarget: function(e) { return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement) }, pageX: function(e) { return "pageX" in e ? e.pageX : e.clientX + i.currentScrollLeft }, pageY: function(e) { return "pageY" in e ? e.pageY : e.clientY + i.currentScrollTop } };
            o.augmentClass(r, u), t.exports = r
        }, { 102: 102, 122: 122, 99: 99 }],
        98: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(99),
                i = e(122),
                a = { touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: i };
            o.augmentClass(r, a), t.exports = r
        }, { 122: 122, 99: 99 }],
        99: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(93),
                i = e(123),
                a = { view: function(e) { if (e.view) return e.view; var t = i(e); if (null != t && t.window === t) return t; var n = t.ownerDocument; return n ? n.defaultView || n.parentWindow : window }, detail: function(e) { return e.detail || 0 } };
            o.augmentClass(r, a), t.exports = r
        }, { 123: 123, 93: 93 }],
        100: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(97),
                i = { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: null, deltaMode: null };
            o.augmentClass(r, i), t.exports = r
        }, { 97: 97 }],
        101: [function(e, t, n) {
            "use strict";
            var r = e(133),
                o = {
                    reinitializeTransaction: function() { this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1 },
                    _isInTransaction: !1,
                    getTransactionWrappers: null,
                    isInTransaction: function() { return !!this._isInTransaction },
                    perform: function(e, t, n, o, i, a, u, s) { r(!this.isInTransaction()); var l, c; try { this._isInTransaction = !0, l = !0, this.initializeAll(0), c = e.call(t, n, o, i, a, u, s), l = !1 } finally { try { if (l) try { this.closeAll(0) } catch (p) {} else this.closeAll(0) } finally { this._isInTransaction = !1 } } return c },
                    initializeAll: function(e) { for (var t = this.transactionWrappers, n = e; n < t.length; n++) { var r = t[n]; try { this.wrapperInitData[n] = i.OBSERVED_ERROR, this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null } finally { if (this.wrapperInitData[n] === i.OBSERVED_ERROR) try { this.initializeAll(n + 1) } catch (o) {} } } },
                    closeAll: function(e) {
                        r(this.isInTransaction());
                        for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                            var o, a = t[n],
                                u = this.wrapperInitData[n];
                            try { o = !0, u !== i.OBSERVED_ERROR && a.close && a.close.call(this, u), o = !1 } finally { if (o) try { this.closeAll(n + 1) } catch (s) {} }
                        }
                        this.wrapperInitData.length = 0
                    }
                },
                i = { Mixin: o, OBSERVED_ERROR: {} };
            t.exports = i
        }, { 133: 133 }],
        102: [function(e, t, n) {
            "use strict";
            var r = { currentScrollLeft: 0, currentScrollTop: 0, refreshScrollValues: function(e) { r.currentScrollLeft = e.x, r.currentScrollTop = e.y } };
            t.exports = r
        }, {}],
        103: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (o(null != t), null == e) return t;
                var n = Array.isArray(e),
                    r = Array.isArray(t);
                return n && r ? (e.push.apply(e, t), e) : n ? (e.push(t), e) : r ? [e].concat(t) : [e, t]
            }
            var o = e(133);
            t.exports = r
        }, { 133: 133 }],
        104: [function(e, t, n) {
            "use strict";

            function r(e) { for (var t = 1, n = 0, r = 0; r < e.length; r++) t = (t + e.charCodeAt(r)) % o, n = (n + t) % o; return t | n << 16 }
            var o = 65521;
            t.exports = r
        }, {}],
        105: [function(e, t, n) {
            function r(e) { return e.replace(o, function(e, t) { return t.toUpperCase() }) }
            var o = /-(.)/g;
            t.exports = r
        }, {}],
        106: [function(e, t, n) {
            "use strict";

            function r(e) { return o(e.replace(i, "ms-")) }
            var o = e(105),
                i = /^-ms-/;
            t.exports = r
        }, { 105: 105 }],
        107: [function(e, t, n) {
            function r(e, t) { return e && t ? e === t ? !0 : o(e) ? !1 : o(t) ? r(e, t.parentNode) : e.contains ? e.contains(t) : e.compareDocumentPosition ? !!(16 & e.compareDocumentPosition(t)) : !1 : !1 }
            var o = e(137);
            t.exports = r
        }, { 137: 137 }],
        108: [function(e, t, n) {
            function r(e) { return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e) }

            function o(e) { return r(e) ? Array.isArray(e) ? e.slice() : i(e) : [e] }
            var i = e(148);
            t.exports = o
        }, { 148: 148 }],
        109: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = i.createFactory(e),
                    n = o.createClass({ tagName: e.toUpperCase(), displayName: "ReactFullPageComponent" + e, componentWillUnmount: function() { a(!1) }, render: function() { return t(this.props) } });
                return n
            }
            var o = e(33),
                i = e(55),
                a = e(133);
            t.exports = r
        }, { 133: 133, 33: 33, 55: 55 }],
        110: [function(e, t, n) {
            function r(e) { var t = e.match(c); return t && t[1].toLowerCase() }

            function o(e, t) {
                var n = l;
                s(!!l);
                var o = r(e),
                    i = o && u(o);
                if (i) { n.innerHTML = i[1] + e + i[2]; for (var c = i[0]; c--;) n = n.lastChild } else n.innerHTML = e;
                var p = n.getElementsByTagName("script");
                p.length && (s(t), a(p).forEach(t));
                for (var d = a(n.childNodes); n.lastChild;) n.removeChild(n.lastChild);
                return d
            }
            var i = e(21),
                a = e(108),
                u = e(125),
                s = e(133),
                l = i.canUseDOM ? document.createElement("div") : null,
                c = /^\s*<(\w+)/;
            t.exports = o
        }, { 108: 108, 125: 125, 133: 133, 21: 21 }],
        111: [function(e, t, n) {
            "use strict";

            function r(e, t) { var n = null == t || "boolean" == typeof t || "" === t; if (n) return ""; var r = isNaN(t); return r || 0 === t || i.hasOwnProperty(e) && i[e] ? "" + t : ("string" == typeof t && (t = t.trim()), t + "px") }
            var o = e(4),
                i = o.isUnitlessNumber;
            t.exports = r
        }, { 4: 4 }],
        112: [function(e, t, n) {
            function r(e) { return function() { return e } }

            function o() {}
            o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() { return this }, o.thatReturnsArgument = function(e) { return e }, t.exports = o
        }, {}],
        113: [function(e, t, n) {
            "use strict";
            var r = {};
            t.exports = r
        }, {}],
        114: [function(e, t, n) {
            "use strict";

            function r(e) { return i[e] }

            function o(e) { return ("" + e).replace(a, r) }
            var i = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" },
                a = /[&><"']/g;
            t.exports = o
        }, {}],
        115: [function(e, t, n) {
            "use strict";

            function r(e) { return null == e ? null : u(e) ? e : o.has(e) ? i.getNodeFromInstance(e) : (a(null == e.render || "function" != typeof e.render), void a(!1)) }
            var o = (e(39), e(65)),
                i = e(68),
                a = e(133),
                u = e(135);
            e(150), t.exports = r
        }, { 133: 133, 135: 135, 150: 150, 39: 39, 65: 65, 68: 68 }],
        116: [function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                var r = e,
                    o = !r.hasOwnProperty(n);
                o && null != t && (r[n] = t)
            }

            function o(e) { if (null == e) return e; var t = {}; return i(e, r, t), t }
            var i = e(149);
            e(150), t.exports = o
        }, { 149: 149, 150: 150 }],
        117: [function(e, t, n) {
            "use strict";

            function r(e) { try { e.focus() } catch (t) {} }
            t.exports = r
        }, {}],
        118: [function(e, t, n) {
            "use strict";
            var r = function(e, t, n) { Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e) };
            t.exports = r
        }, {}],
        119: [function(e, t, n) {
            function r() { try { return document.activeElement || document.body } catch (e) { return document.body } }
            t.exports = r
        }, {}],
        120: [function(e, t, n) {
            "use strict";

            function r(e) { var t, n = e.keyCode; return "charCode" in e ? (t = e.charCode, 0 === t && 13 === n && (t = 13)) : t = n, t >= 32 || 13 === t ? t : 0 }
            t.exports = r
        }, {}],
        121: [function(e, t, n) {
            "use strict";

            function r(e) { if (e.key) { var t = i[e.key] || e.key; if ("Unidentified" !== t) return t } if ("keypress" === e.type) { var n = o(e); return 13 === n ? "Enter" : String.fromCharCode(n) } return "keydown" === e.type || "keyup" === e.type ? a[e.keyCode] || "Unidentified" : "" }
            var o = e(120),
                i = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
                a = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };
            t.exports = r
        }, { 120: 120 }],
        122: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this,
                    n = t.nativeEvent;
                if (n.getModifierState) return n.getModifierState(e);
                var r = i[e];
                return r ? !!n[r] : !1
            }

            function o(e) { return r }
            var i = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
            t.exports = o
        }, {}],
        123: [function(e, t, n) {
            "use strict";

            function r(e) { var t = e.target || e.srcElement || window; return 3 === t.nodeType ? t.parentNode : t }
            t.exports = r
        }, {}],
        124: [function(e, t, n) {
            "use strict";

            function r(e) { var t = e && (o && e[o] || e[i]); return "function" == typeof t ? t : void 0 }
            var o = "function" == typeof Symbol && Symbol.iterator,
                i = "@@iterator";
            t.exports = r
        }, {}],
        125: [function(e, t, n) {
            function r(e) { return i(!!a), d.hasOwnProperty(e) || (e = "*"), u.hasOwnProperty(e) || (a.innerHTML = "*" === e ? "<link />" : "<" + e + "></" + e + ">", u[e] = !a.firstChild), u[e] ? d[e] : null }
            var o = e(21),
                i = e(133),
                a = o.canUseDOM ? document.createElement("div") : null,
                u = { circle: !0, clipPath: !0, defs: !0, ellipse: !0, g: !0, line: !0, linearGradient: !0, path: !0, polygon: !0, polyline: !0, radialGradient: !0, rect: !0, stop: !0, text: !0 },
                s = [1, '<select multiple="true">', "</select>"],
                l = [1, "<table>", "</table>"],
                c = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                p = [1, "<svg>", "</svg>"],
                d = { "*": [1, "?<div>", "</div>"], area: [1, "<map>", "</map>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], legend: [1, "<fieldset>", "</fieldset>"], param: [1, "<object>", "</object>"], tr: [2, "<table><tbody>", "</tbody></table>"], optgroup: s, option: s, caption: l, colgroup: l, tbody: l, tfoot: l, thead: l, td: c, th: c, circle: p, clipPath: p, defs: p, ellipse: p, g: p, line: p, linearGradient: p, path: p, polygon: p, polyline: p, radialGradient: p, rect: p, stop: p, text: p };
            t.exports = r
        }, { 133: 133, 21: 21 }],
        126: [function(e, t, n) {
            "use strict";

            function r(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

            function o(e) {
                for (; e;) {
                    if (e.nextSibling) return e.nextSibling;
                    e = e.parentNode
                }
            }

            function i(e, t) {
                for (var n = r(e), i = 0, a = 0; n;) {
                    if (3 === n.nodeType) {
                        if (a = i + n.textContent.length, t >= i && a >= t) return { node: n, offset: t - i };
                        i = a
                    }
                    n = r(o(n))
                }
            }
            t.exports = i
        }, {}],
        127: [function(e, t, n) {
            "use strict";

            function r(e) { return e ? e.nodeType === o ? e.documentElement : e.firstChild : null }
            var o = 9;
            t.exports = r
        }, {}],
        128: [function(e, t, n) {
            "use strict";

            function r() { return !i && o.canUseDOM && (i = "textContent" in document.documentElement ? "textContent" : "innerText"), i }
            var o = e(21),
                i = null;
            t.exports = r
        }, { 21: 21 }],
        129: [function(e, t, n) {
            "use strict";

            function r(e) { return e === window ? { x: window.pageXOffset || document.documentElement.scrollLeft, y: window.pageYOffset || document.documentElement.scrollTop } : { x: e.scrollLeft, y: e.scrollTop } }
            t.exports = r
        }, {}],
        130: [function(e, t, n) {
            function r(e) { return e.replace(o, "-$1").toLowerCase() }
            var o = /([A-Z])/g;
            t.exports = r
        }, {}],
        131: [function(e, t, n) {
            "use strict";

            function r(e) { return o(e).replace(i, "-ms-") }
            var o = e(130),
                i = /^ms-/;
            t.exports = r
        }, { 130: 130 }],
        132: [function(e, t, n) {
            "use strict";

            function r(e) { return "function" == typeof e && "undefined" != typeof e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent }

            function o(e, t) {
                var n;
                if ((null === e || e === !1) && (e = a.emptyElement), "object" == typeof e) {
                    var o = e;
                    n = t === o.type && "string" == typeof o.type ? u.createInternalComponent(o) : r(o.type) ? new o.type(o) : new c
                } else "string" == typeof e || "number" == typeof e ? n = u.createInstanceForText(e) : l(!1);
                return n.construct(e), n._mountIndex = 0, n._mountImage = null, n
            }
            var i = e(37),
                a = e(57),
                u = e(71),
                s = e(27),
                l = e(133),
                c = (e(150), function() {});
            s(c.prototype, i.Mixin, { _instantiateReactComponent: o }), t.exports = o
        }, { 133: 133, 150: 150, 27: 27, 37: 37, 57: 57, 71: 71 }],
        133: [function(e, t, n) {
            "use strict";
            var r = function(e, t, n, r, o, i, a, u) {
                if (!e) {
                    var s;
                    if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var l = [n, r, o, i, a, u],
                            c = 0;
                        s = new Error("Invariant Violation: " + t.replace(/%s/g, function() { return l[c++] }))
                    }
                    throw s.framesToPop = 1, s
                }
            };
            t.exports = r
        }, {}],
        134: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!i.canUseDOM || t && !("addEventListener" in document)) return !1;
                var n = "on" + e,
                    r = n in document;
                if (!r) {
                    var a = document.createElement("div");
                    a.setAttribute(n, "return;"), r = "function" == typeof a[n]
                }
                return !r && o && "wheel" === e && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r
            }
            var o, i = e(21);
            i.canUseDOM && (o = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), t.exports = r
        }, { 21: 21 }],
        135: [function(e, t, n) {
            function r(e) { return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName)) }
            t.exports = r
        }, {}],
        136: [function(e, t, n) {
            "use strict";

            function r(e) { return e && ("INPUT" === e.nodeName && o[e.type] || "TEXTAREA" === e.nodeName) }
            var o = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
            t.exports = r
        }, {}],
        137: [function(e, t, n) {
            function r(e) { return o(e) && 3 == e.nodeType }
            var o = e(135);
            t.exports = r
        }, { 135: 135 }],
        138: [function(e, t, n) {
            "use strict";
            var r = e(133),
                o = function(e) {
                    var t, n = {};
                    r(e instanceof Object && !Array.isArray(e));
                    for (t in e) e.hasOwnProperty(t) && (n[t] = t);
                    return n
                };
            t.exports = o
        }, { 133: 133 }],
        139: [function(e, t, n) {
            var r = function(e) {
                var t;
                for (t in e)
                    if (e.hasOwnProperty(t)) return t;
                return null
            };
            t.exports = r
        }, {}],
        140: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { if (!e) return null; var r = {}; for (var i in e) o.call(e, i) && (r[i] = t.call(n, e[i], i, e)); return r }
            var o = Object.prototype.hasOwnProperty;
            t.exports = r
        }, {}],
        141: [function(e, t, n) {
            "use strict";

            function r(e) { var t = {}; return function(n) { return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n] } }
            t.exports = r
        }, {}],
        142: [function(e, t, n) {
            "use strict";

            function r(e) { return i(o.isValidElement(e)), e }
            var o = e(55),
                i = e(133);
            t.exports = r
        }, { 133: 133, 55: 55 }],
        143: [function(e, t, n) {
            "use strict";

            function r(e) { return '"' + o(e) + '"' }
            var o = e(114);
            t.exports = r
        }, { 114: 114 }],
        144: [function(e, t, n) {
            "use strict";
            var r = e(21),
                o = /^[ \r\n\t\f]/,
                i = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
                a = function(e, t) { e.innerHTML = t };
            if ("undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction && (a = function(e, t) { MSApp.execUnsafeLocalFunction(function() { e.innerHTML = t }) }), r.canUseDOM) {
                var u = document.createElement("div");
                u.innerHTML = " ", "" === u.innerHTML && (a = function(e, t) {
                    if (e.parentNode && e.parentNode.replaceChild(e, e), o.test(t) || "<" === t[0] && i.test(t)) {
                        e.innerHTML = "\ufeff" + t;
                        var n = e.firstChild;
                        1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1)
                    } else e.innerHTML = t
                })
            }
            t.exports = a
        }, { 21: 21 }],
        145: [function(e, t, n) {
            "use strict";
            var r = e(21),
                o = e(114),
                i = e(144),
                a = function(e, t) { e.textContent = t };
            r.canUseDOM && ("textContent" in document.documentElement || (a = function(e, t) { i(e, o(t)) })), t.exports = a
        }, { 114: 114, 144: 144, 21: 21 }],
        146: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e === t) return !0;
                var n;
                for (n in e)
                    if (e.hasOwnProperty(n) && (!t.hasOwnProperty(n) || e[n] !== t[n])) return !1;
                for (n in t)
                    if (t.hasOwnProperty(n) && !e.hasOwnProperty(n)) return !1;
                return !0
            }
            t.exports = r
        }, {}],
        147: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (null != e && null != t) {
                    var n = typeof e,
                        r = typeof t;
                    if ("string" === n || "number" === n) return "string" === r || "number" === r;
                    if ("object" === r && e.type === t.type && e.key === t.key) { var o = e._owner === t._owner; return o }
                }
                return !1
            }
            e(150), t.exports = r
        }, { 150: 150 }],
        148: [function(e, t, n) {
            function r(e) {
                var t = e.length;
                if (o(!Array.isArray(e) && ("object" == typeof e || "function" == typeof e)), o("number" == typeof t), o(0 === t || t - 1 in e), e.hasOwnProperty) try { return Array.prototype.slice.call(e) } catch (n) {}
                for (var r = Array(t), i = 0; t > i; i++) r[i] = e[i];
                return r
            }
            var o = e(133);
            t.exports = r
        }, { 133: 133 }],
        149: [function(e, t, n) {
            "use strict";

            function r(e) { return v[e] }

            function o(e, t) { return e && null != e.key ? a(e.key) : t.toString(36) }

            function i(e) { return ("" + e).replace(g, r) }

            function a(e) { return "$" + i(e) }

            function u(e, t, n, r, i) {
                var s = typeof e;
                if (("undefined" === s || "boolean" === s) && (e = null), null === e || "string" === s || "number" === s || l.isValidElement(e)) return r(i, e, "" === t ? h + o(e, 0) : t, n), 1;
                var p, v, g, y = 0;
                if (Array.isArray(e))
                    for (var C = 0; C < e.length; C++) p = e[C], v = ("" !== t ? t + m : h) + o(p, C), g = n + y, y += u(p, v, g, r, i);
                else {
                    var E = d(e);
                    if (E) {
                        var b, _ = E.call(e);
                        if (E !== e.entries)
                            for (var x = 0; !(b = _.next()).done;) p = b.value, v = ("" !== t ? t + m : h) + o(p, x++), g = n + y, y += u(p, v, g, r, i);
                        else
                            for (; !(b = _.next()).done;) {
                                var D = b.value;
                                D && (p = D[1], v = ("" !== t ? t + m : h) + a(D[0]) + m + o(p, 0), g = n + y, y += u(p, v, g, r, i))
                            }
                    } else if ("object" === s) { f(1 !== e.nodeType); var M = c.extract(e); for (var N in M) M.hasOwnProperty(N) && (p = M[N], v = ("" !== t ? t + m : h) + a(N) + m + o(p, 0), g = n + y, y += u(p, v, g, r, i)) }
                }
                return y
            }

            function s(e, t, n) { return null == e ? 0 : u(e, "", 0, t, n) }
            var l = e(55),
                c = e(61),
                p = e(64),
                d = e(124),
                f = e(133),
                h = (e(150), p.SEPARATOR),
                m = ":",
                v = { "=": "=0", ".": "=1", ":": "=2" },
                g = /[=.:]/g;
            t.exports = s
        }, { 124: 124, 133: 133, 150: 150, 55: 55, 61: 61, 64: 64 }],
        150: [function(e, t, n) {
            "use strict";
            var r = e(112),
                o = r;
            t.exports = o
        }, { 112: 112 }]
    }, {}, [1])(1)
});
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.React = e()
    }
}(function() {
    return function e(t, n, r) {
        function o(a, s) {
            if (!n[a]) {
                if (!t[a]) { var u = "function" == typeof require && require; if (!s && u) return u(a, !0); if (i) return i(a, !0); var l = new Error("Cannot find module '" + a + "'"); throw l.code = "MODULE_NOT_FOUND", l }
                var c = n[a] = { exports: {} };
                t[a][0].call(c.exports, function(e) { var n = t[a][1][e]; return o(n ? n : e) }, c, c.exports, e, t, n, r)
            }
            return n[a].exports
        }
        for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
        return o
    }({
        1: [function(e, t, n) {
            "use strict";
            var r = e(25),
                o = e(31),
                i = e(42),
                a = e(34),
                s = e(67),
                u = e(95),
                l = e(97),
                c = e(124),
                p = e(119),
                d = e(165);
            o.addons = { CSSTransitionGroup: a, LinkedStateMixin: r, PureRenderMixin: i, TransitionGroup: u, batchedUpdates: l.batchedUpdates, classSet: c, cloneWithProps: p, createFragment: s.create, update: d }, t.exports = o
        }, { 119: 119, 124: 124, 165: 165, 25: 25, 31: 31, 34: 34, 42: 42, 67: 67, 95: 95, 97: 97 }],
        2: [function(e, t, n) {
            "use strict";
            var r = e(131),
                o = { componentDidMount: function() { this.props.autoFocus && r(this.getDOMNode()) } };
            t.exports = o
        }, { 131: 131 }],
        3: [function(e, t, n) {
            "use strict";

            function r() { var e = window.opera; return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12 }

            function o(e) { return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey) }

            function i(e) {
                switch (e) {
                    case P.topCompositionStart:
                        return I.compositionStart;
                    case P.topCompositionEnd:
                        return I.compositionEnd;
                    case P.topCompositionUpdate:
                        return I.compositionUpdate
                }
            }

            function a(e, t) { return e === P.topKeyDown && t.keyCode === b }

            function s(e, t) {
                switch (e) {
                    case P.topKeyUp:
                        return -1 !== E.indexOf(t.keyCode);
                    case P.topKeyDown:
                        return t.keyCode !== b;
                    case P.topKeyPress:
                    case P.topMouseDown:
                    case P.topBlur:
                        return !0;
                    default:
                        return !1
                }
            }

            function u(e) { var t = e.detail; return "object" == typeof t && "data" in t ? t.data : null }

            function l(e, t, n, r) {
                var o, l;
                if (_ ? o = i(e) : w ? s(e, r) && (o = I.compositionEnd) : a(e, r) && (o = I.compositionStart), !o) return null;
                M && (w || o !== I.compositionStart ? o === I.compositionEnd && w && (l = w.getData()) : w = v.getPooled(t));
                var c = g.getPooled(o, n, r);
                if (l) c.data = l;
                else {
                    var p = u(r);
                    null !== p && (c.data = p)
                }
                return h.accumulateTwoPhaseDispatches(c), c
            }

            function c(e, t) {
                switch (e) {
                    case P.topCompositionEnd:
                        return u(t);
                    case P.topKeyPress:
                        var n = t.which;
                        return n !== T ? null : (R = !0, N);
                    case P.topTextInput:
                        var r = t.data;
                        return r === N && R ? null : r;
                    default:
                        return null
                }
            }

            function p(e, t) {
                if (w) { if (e === P.topCompositionEnd || s(e, t)) { var n = w.getData(); return v.release(w), w = null, n } return null }
                switch (e) {
                    case P.topPaste:
                        return null;
                    case P.topKeyPress:
                        return t.which && !o(t) ? String.fromCharCode(t.which) : null;
                    case P.topCompositionEnd:
                        return M ? null : t.data;
                    default:
                        return null
                }
            }

            function d(e, t, n, r) { var o; if (o = D ? c(e, r) : p(e, r), !o) return null; var i = y.getPooled(I.beforeInput, n, r); return i.data = o, h.accumulateTwoPhaseDispatches(i), i }
            var f = e(16),
                h = e(21),
                m = e(22),
                v = e(23),
                g = e(103),
                y = e(107),
                C = e(154),
                E = [9, 13, 27, 32],
                b = 229,
                _ = m.canUseDOM && "CompositionEvent" in window,
                x = null;
            m.canUseDOM && "documentMode" in document && (x = document.documentMode);
            var D = m.canUseDOM && "TextEvent" in window && !x && !r(),
                M = m.canUseDOM && (!_ || x && x > 8 && 11 >= x),
                T = 32,
                N = String.fromCharCode(T),
                P = f.topLevelTypes,
                I = { beforeInput: { phasedRegistrationNames: { bubbled: C({ onBeforeInput: null }), captured: C({ onBeforeInputCapture: null }) }, dependencies: [P.topCompositionEnd, P.topKeyPress, P.topTextInput, P.topPaste] }, compositionEnd: { phasedRegistrationNames: { bubbled: C({ onCompositionEnd: null }), captured: C({ onCompositionEndCapture: null }) }, dependencies: [P.topBlur, P.topCompositionEnd, P.topKeyDown, P.topKeyPress, P.topKeyUp, P.topMouseDown] }, compositionStart: { phasedRegistrationNames: { bubbled: C({ onCompositionStart: null }), captured: C({ onCompositionStartCapture: null }) }, dependencies: [P.topBlur, P.topCompositionStart, P.topKeyDown, P.topKeyPress, P.topKeyUp, P.topMouseDown] }, compositionUpdate: { phasedRegistrationNames: { bubbled: C({ onCompositionUpdate: null }), captured: C({ onCompositionUpdateCapture: null }) }, dependencies: [P.topBlur, P.topCompositionUpdate, P.topKeyDown, P.topKeyPress, P.topKeyUp, P.topMouseDown] } },
                R = !1,
                w = null,
                O = { eventTypes: I, extractEvents: function(e, t, n, r) { return [l(e, t, n, r), d(e, t, n, r)] } };
            t.exports = O
        }, { 103: 103, 107: 107, 154: 154, 16: 16, 21: 21, 22: 22, 23: 23 }],
        4: [function(e, t, n) {
            var r = e(147),
                o = { addClass: function(e, t) { return r(!/\s/.test(t)), t && (e.classList ? e.classList.add(t) : o.hasClass(e, t) || (e.className = e.className + " " + t)), e }, removeClass: function(e, t) { return r(!/\s/.test(t)), t && (e.classList ? e.classList.remove(t) : o.hasClass(e, t) && (e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, ""))), e }, conditionClass: function(e, t, n) { return (n ? o.addClass : o.removeClass)(e, t) }, hasClass: function(e, t) { return r(!/\s/.test(t)), e.classList ? !!t && e.classList.contains(t) : (" " + e.className + " ").indexOf(" " + t + " ") > -1 } };
            t.exports = o
        }, { 147: 147 }],
        5: [function(e, t, n) {
            "use strict";

            function r(e, t) { return e + t.charAt(0).toUpperCase() + t.substring(1) }
            var o = { boxFlex: !0, boxFlexGroup: !0, columnCount: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, strokeDashoffset: !0, strokeOpacity: !0, strokeWidth: !0 },
                i = ["Webkit", "ms", "Moz", "O"];
            Object.keys(o).forEach(function(e) { i.forEach(function(t) { o[r(t, e)] = o[e] }) });
            var a = { background: { backgroundImage: !0, backgroundPosition: !0, backgroundRepeat: !0, backgroundColor: !0 }, border: { borderWidth: !0, borderStyle: !0, borderColor: !0 }, borderBottom: { borderBottomWidth: !0, borderBottomStyle: !0, borderBottomColor: !0 }, borderLeft: { borderLeftWidth: !0, borderLeftStyle: !0, borderLeftColor: !0 }, borderRight: { borderRightWidth: !0, borderRightStyle: !0, borderRightColor: !0 }, borderTop: { borderTopWidth: !0, borderTopStyle: !0, borderTopColor: !0 }, font: { fontStyle: !0, fontVariant: !0, fontWeight: !0, fontSize: !0, lineHeight: !0, fontFamily: !0 } },
                s = { isUnitlessNumber: o, shorthandPropertyExpansions: a };
            t.exports = s
        }, {}],
        6: [function(e, t, n) {
            "use strict";
            var r = e(5),
                o = e(22),
                i = (e(118), e(125)),
                a = e(145),
                s = e(156),
                u = (e(166), s(function(e) { return a(e) })),
                l = "cssFloat";
            o.canUseDOM && void 0 === document.documentElement.style.cssFloat && (l = "styleFloat");
            var c = {
                createMarkupForStyles: function(e) {
                    var t = "";
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n];
                            null != r && (t += u(n) + ":", t += i(n, r) + ";")
                        }
                    return t || null
                },
                setValueForStyles: function(e, t) {
                    var n = e.style;
                    for (var o in t)
                        if (t.hasOwnProperty(o)) {
                            var a = i(o, t[o]);
                            if ("float" === o && (o = l), a) n[o] = a;
                            else {
                                var s = r.shorthandPropertyExpansions[o];
                                if (s)
                                    for (var u in s) n[u] = "";
                                else n[o] = ""
                            }
                        }
                }
            };
            t.exports = c
        }, { 118: 118, 125: 125, 145: 145, 156: 156, 166: 166, 22: 22, 5: 5 }],
        7: [function(e, t, n) {
            "use strict";

            function r() { this._callbacks = null, this._contexts = null }
            var o = e(30),
                i = e(29),
                a = e(147);
            i(r.prototype, {
                enqueue: function(e, t) { this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(e), this._contexts.push(t) },
                notifyAll: function() {
                    var e = this._callbacks,
                        t = this._contexts;
                    if (e) {
                        a(e.length === t.length), this._callbacks = null, this._contexts = null;
                        for (var n = 0, r = e.length; r > n; n++) e[n].call(t[n]);
                        e.length = 0, t.length = 0
                    }
                },
                reset: function() { this._callbacks = null, this._contexts = null },
                destructor: function() { this.reset() }
            }), o.addPoolingTo(r), t.exports = r
        }, { 147: 147, 29: 29, 30: 30 }],
        8: [function(e, t, n) {
            "use strict";

            function r(e) { return "SELECT" === e.nodeName || "INPUT" === e.nodeName && "file" === e.type }

            function o(e) {
                var t = x.getPooled(P.change, R, e);
                E.accumulateTwoPhaseDispatches(t), _.batchedUpdates(i, t)
            }

            function i(e) { C.enqueueEvents(e), C.processEventQueue() }

            function a(e, t) { I = e, R = t, I.attachEvent("onchange", o) }

            function s() { I && (I.detachEvent("onchange", o), I = null, R = null) }

            function u(e, t, n) { return e === N.topChange ? n : void 0 }

            function l(e, t, n) { e === N.topFocus ? (s(), a(t, n)) : e === N.topBlur && s() }

            function c(e, t) { I = e, R = t, w = e.value, O = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(I, "value", k), I.attachEvent("onpropertychange", d) }

            function p() { I && (delete I.value, I.detachEvent("onpropertychange", d), I = null, R = null, w = null, O = null) }

            function d(e) {
                if ("value" === e.propertyName) {
                    var t = e.srcElement.value;
                    t !== w && (w = t, o(e))
                }
            }

            function f(e, t, n) { return e === N.topInput ? n : void 0 }

            function h(e, t, n) { e === N.topFocus ? (p(), c(t, n)) : e === N.topBlur && p() }

            function m(e, t, n) { return e !== N.topSelectionChange && e !== N.topKeyUp && e !== N.topKeyDown || !I || I.value === w ? void 0 : (w = I.value, R) }

            function v(e) { return "INPUT" === e.nodeName && ("checkbox" === e.type || "radio" === e.type) }

            function g(e, t, n) { return e === N.topClick ? n : void 0 }
            var y = e(16),
                C = e(18),
                E = e(21),
                b = e(22),
                _ = e(97),
                x = e(105),
                D = e(148),
                M = e(150),
                T = e(154),
                N = y.topLevelTypes,
                P = { change: { phasedRegistrationNames: { bubbled: T({ onChange: null }), captured: T({ onChangeCapture: null }) }, dependencies: [N.topBlur, N.topChange, N.topClick, N.topFocus, N.topInput, N.topKeyDown, N.topKeyUp, N.topSelectionChange] } },
                I = null,
                R = null,
                w = null,
                O = null,
                S = !1;
            b.canUseDOM && (S = D("change") && (!("documentMode" in document) || document.documentMode > 8));
            var A = !1;
            b.canUseDOM && (A = D("input") && (!("documentMode" in document) || document.documentMode > 9));
            var k = { get: function() { return O.get.call(this) }, set: function(e) { w = "" + e, O.set.call(this, e) } },
                L = {
                    eventTypes: P,
                    extractEvents: function(e, t, n, o) {
                        var i, a;
                        if (r(t) ? S ? i = u : a = l : M(t) ? A ? i = f : (i = m, a = h) : v(t) && (i = g), i) { var s = i(e, t, n); if (s) { var c = x.getPooled(P.change, s, o); return E.accumulateTwoPhaseDispatches(c), c } }
                        a && a(e, t, n)
                    }
                };
            t.exports = L
        }, { 105: 105, 148: 148, 150: 150, 154: 154, 16: 16, 18: 18, 21: 21, 22: 22, 97: 97 }],
        9: [function(e, t, n) {
            "use strict";
            var r = 0,
                o = { createReactRootIndex: function() { return r++ } };
            t.exports = o
        }, {}],
        10: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { e.insertBefore(t, e.childNodes[n] || null) }
            var o = e(13),
                i = e(77),
                a = e(160),
                s = e(147),
                u = {
                    dangerouslyReplaceNodeWithMarkup: o.dangerouslyReplaceNodeWithMarkup,
                    updateTextContent: a,
                    processUpdates: function(e, t) {
                        for (var n, u = null, l = null, c = 0; c < e.length; c++)
                            if (n = e[c], n.type === i.MOVE_EXISTING || n.type === i.REMOVE_NODE) {
                                var p = n.fromIndex,
                                    d = n.parentNode.childNodes[p],
                                    f = n.parentID;
                                s(d), u = u || {}, u[f] = u[f] || [], u[f][p] = d, l = l || [], l.push(d)
                            }
                        var h = o.dangerouslyRenderMarkup(t);
                        if (l)
                            for (var m = 0; m < l.length; m++) l[m].parentNode.removeChild(l[m]);
                        for (var v = 0; v < e.length; v++) switch (n = e[v], n.type) {
                            case i.INSERT_MARKUP:
                                r(n.parentNode, h[n.markupIndex], n.toIndex);
                                break;
                            case i.MOVE_EXISTING:
                                r(n.parentNode, u[n.parentID][n.fromIndex], n.toIndex);
                                break;
                            case i.TEXT_CONTENT:
                                a(n.parentNode, n.textContent);
                                break;
                            case i.REMOVE_NODE:
                        }
                    }
                };
            t.exports = u
        }, { 13: 13, 147: 147, 160: 160, 77: 77 }],
        11: [function(e, t, n) {
            "use strict";

            function r(e, t) { return (e & t) === t }
            var o = e(147),
                i = {
                    MUST_USE_ATTRIBUTE: 1,
                    MUST_USE_PROPERTY: 2,
                    HAS_SIDE_EFFECTS: 4,
                    HAS_BOOLEAN_VALUE: 8,
                    HAS_NUMERIC_VALUE: 16,
                    HAS_POSITIVE_NUMERIC_VALUE: 48,
                    HAS_OVERLOADED_BOOLEAN_VALUE: 64,
                    injectDOMPropertyConfig: function(e) {
                        var t = e.Properties || {},
                            n = e.DOMAttributeNames || {},
                            a = e.DOMPropertyNames || {},
                            u = e.DOMMutationMethods || {};
                        e.isCustomAttribute && s._isCustomAttributeFunctions.push(e.isCustomAttribute);
                        for (var l in t) {
                            o(!s.isStandardName.hasOwnProperty(l)), s.isStandardName[l] = !0;
                            var c = l.toLowerCase();
                            if (s.getPossibleStandardName[c] = l, n.hasOwnProperty(l)) {
                                var p = n[l];
                                s.getPossibleStandardName[p] = l, s.getAttributeName[l] = p
                            } else s.getAttributeName[l] = c;
                            s.getPropertyName[l] = a.hasOwnProperty(l) ? a[l] : l, s.getMutationMethod[l] = u.hasOwnProperty(l) ? u[l] : null;
                            var d = t[l];
                            s.mustUseAttribute[l] = r(d, i.MUST_USE_ATTRIBUTE), s.mustUseProperty[l] = r(d, i.MUST_USE_PROPERTY), s.hasSideEffects[l] = r(d, i.HAS_SIDE_EFFECTS), s.hasBooleanValue[l] = r(d, i.HAS_BOOLEAN_VALUE), s.hasNumericValue[l] = r(d, i.HAS_NUMERIC_VALUE), s.hasPositiveNumericValue[l] = r(d, i.HAS_POSITIVE_NUMERIC_VALUE), s.hasOverloadedBooleanValue[l] = r(d, i.HAS_OVERLOADED_BOOLEAN_VALUE), o(!s.mustUseAttribute[l] || !s.mustUseProperty[l]), o(s.mustUseProperty[l] || !s.hasSideEffects[l]), o(!!s.hasBooleanValue[l] + !!s.hasNumericValue[l] + !!s.hasOverloadedBooleanValue[l] <= 1)
                        }
                    }
                },
                a = {},
                s = { ID_ATTRIBUTE_NAME: "data-reactid", isStandardName: {}, getPossibleStandardName: {}, getAttributeName: {}, getPropertyName: {}, getMutationMethod: {}, mustUseAttribute: {}, mustUseProperty: {}, hasSideEffects: {}, hasBooleanValue: {}, hasNumericValue: {}, hasPositiveNumericValue: {}, hasOverloadedBooleanValue: {}, _isCustomAttributeFunctions: [], isCustomAttribute: function(e) { for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) { var n = s._isCustomAttributeFunctions[t]; if (n(e)) return !0 } return !1 }, getDefaultValueForProperty: function(e, t) { var n, r = a[e]; return r || (a[e] = r = {}), t in r || (n = document.createElement(e), r[t] = n[t]), r[t] }, injection: i };
            t.exports = s
        }, { 147: 147 }],
        12: [function(e, t, n) {
            "use strict";

            function r(e, t) { return null == t || o.hasBooleanValue[e] && !t || o.hasNumericValue[e] && isNaN(t) || o.hasPositiveNumericValue[e] && 1 > t || o.hasOverloadedBooleanValue[e] && t === !1 }
            var o = e(11),
                i = e(158),
                a = (e(166), {
                    createMarkupForID: function(e) { return o.ID_ATTRIBUTE_NAME + "=" + i(e) },
                    createMarkupForProperty: function(e, t) { if (o.isStandardName.hasOwnProperty(e) && o.isStandardName[e]) { if (r(e, t)) return ""; var n = o.getAttributeName[e]; return o.hasBooleanValue[e] || o.hasOverloadedBooleanValue[e] && t === !0 ? n : n + "=" + i(t) } return o.isCustomAttribute(e) ? null == t ? "" : e + "=" + i(t) : null },
                    setValueForProperty: function(e, t, n) {
                        if (o.isStandardName.hasOwnProperty(t) && o.isStandardName[t]) {
                            var i = o.getMutationMethod[t];
                            if (i) i(e, n);
                            else if (r(t, n)) this.deleteValueForProperty(e, t);
                            else if (o.mustUseAttribute[t]) e.setAttribute(o.getAttributeName[t], "" + n);
                            else {
                                var a = o.getPropertyName[t];
                                o.hasSideEffects[t] && "" + e[a] == "" + n || (e[a] = n)
                            }
                        } else o.isCustomAttribute(t) && (null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                    },
                    deleteValueForProperty: function(e, t) {
                        if (o.isStandardName.hasOwnProperty(t) && o.isStandardName[t]) {
                            var n = o.getMutationMethod[t];
                            if (n) n(e, void 0);
                            else if (o.mustUseAttribute[t]) e.removeAttribute(o.getAttributeName[t]);
                            else {
                                var r = o.getPropertyName[t],
                                    i = o.getDefaultValueForProperty(e.nodeName, r);
                                o.hasSideEffects[t] && "" + e[r] === i || (e[r] = i)
                            }
                        } else o.isCustomAttribute(t) && e.removeAttribute(t)
                    }
                });
            t.exports = a
        }, { 11: 11, 158: 158, 166: 166 }],
        13: [function(e, t, n) {
            "use strict";

            function r(e) { return e.substring(1, e.indexOf(" ")) }
            var o = e(22),
                i = e(123),
                a = e(126),
                s = e(139),
                u = e(147),
                l = /^(<[^ \/>]+)/,
                c = "data-danger-index",
                p = {
                    dangerouslyRenderMarkup: function(e) {
                        u(o.canUseDOM);
                        for (var t, n = {}, p = 0; p < e.length; p++) u(e[p]), t = r(e[p]), t = s(t) ? t : "*", n[t] = n[t] || [], n[t][p] = e[p];
                        var d = [],
                            f = 0;
                        for (t in n)
                            if (n.hasOwnProperty(t)) {
                                var h, m = n[t];
                                for (h in m)
                                    if (m.hasOwnProperty(h)) {
                                        var v = m[h];
                                        m[h] = v.replace(l, "$1 " + c + '="' + h + '" ')
                                    }
                                for (var g = i(m.join(""), a), y = 0; y < g.length; ++y) {
                                    var C = g[y];
                                    C.hasAttribute && C.hasAttribute(c) && (h = +C.getAttribute(c), C.removeAttribute(c), u(!d.hasOwnProperty(h)), d[h] = C, f += 1)
                                }
                            }
                        return u(f === d.length), u(d.length === e.length), d
                    },
                    dangerouslyReplaceNodeWithMarkup: function(e, t) {
                        u(o.canUseDOM), u(t), u("html" !== e.tagName.toLowerCase());
                        var n = i(t, a)[0];
                        e.parentNode.replaceChild(n, e)
                    }
                };
            t.exports = p
        }, { 123: 123, 126: 126, 139: 139, 147: 147, 22: 22 }],
        14: [function(e, t, n) {
            "use strict";
            var r = e(154),
                o = [r({ ResponderEventPlugin: null }), r({ SimpleEventPlugin: null }), r({ TapEventPlugin: null }), r({ EnterLeaveEventPlugin: null }), r({ ChangeEventPlugin: null }), r({ SelectEventPlugin: null }), r({ BeforeInputEventPlugin: null }), r({ AnalyticsEventPlugin: null }), r({ MobileSafariClickEventPlugin: null })];
            t.exports = o
        }, { 154: 154 }],
        15: [function(e, t, n) {
            "use strict";
            var r = e(16),
                o = e(21),
                i = e(109),
                a = e(75),
                s = e(154),
                u = r.topLevelTypes,
                l = a.getFirstReactDOM,
                c = { mouseEnter: { registrationName: s({ onMouseEnter: null }), dependencies: [u.topMouseOut, u.topMouseOver] }, mouseLeave: { registrationName: s({ onMouseLeave: null }), dependencies: [u.topMouseOut, u.topMouseOver] } },
                p = [null, null],
                d = {
                    eventTypes: c,
                    extractEvents: function(e, t, n, r) {
                        if (e === u.topMouseOver && (r.relatedTarget || r.fromElement)) return null;
                        if (e !== u.topMouseOut && e !== u.topMouseOver) return null;
                        var s;
                        if (t.window === t) s = t;
                        else {
                            var d = t.ownerDocument;
                            s = d ? d.defaultView || d.parentWindow : window
                        }
                        var f, h;
                        if (e === u.topMouseOut ? (f = t, h = l(r.relatedTarget || r.toElement) || s) : (f = s, h = t), f === h) return null;
                        var m = f ? a.getID(f) : "",
                            v = h ? a.getID(h) : "",
                            g = i.getPooled(c.mouseLeave, m, r);
                        g.type = "mouseleave", g.target = f, g.relatedTarget = h;
                        var y = i.getPooled(c.mouseEnter, v, r);
                        return y.type = "mouseenter", y.target = h, y.relatedTarget = f, o.accumulateEnterLeaveDispatches(g, y, m, v), p[0] = g, p[1] = y, p
                    }
                };
            t.exports = d
        }, { 109: 109, 154: 154, 16: 16, 21: 21, 75: 75 }],
        16: [function(e, t, n) {
            "use strict";
            var r = e(153),
                o = r({ bubbled: null, captured: null }),
                i = r({ topBlur: null, topChange: null, topClick: null, topCompositionEnd: null, topCompositionStart: null, topCompositionUpdate: null, topContextMenu: null, topCopy: null, topCut: null, topDoubleClick: null, topDrag: null, topDragEnd: null, topDragEnter: null, topDragExit: null, topDragLeave: null, topDragOver: null, topDragStart: null, topDrop: null, topError: null, topFocus: null, topInput: null, topKeyDown: null, topKeyPress: null, topKeyUp: null, topLoad: null, topMouseDown: null, topMouseMove: null, topMouseOut: null, topMouseOver: null, topMouseUp: null, topPaste: null, topReset: null, topScroll: null, topSelectionChange: null, topSubmit: null, topTextInput: null, topTouchCancel: null, topTouchEnd: null, topTouchMove: null, topTouchStart: null, topWheel: null }),
                a = { topLevelTypes: i, PropagationPhases: o };
            t.exports = a
        }, { 153: 153 }],
        17: [function(e, t, n) {
            var r = e(126),
                o = { listen: function(e, t, n) { return e.addEventListener ? (e.addEventListener(t, n, !1), { remove: function() { e.removeEventListener(t, n, !1) } }) : e.attachEvent ? (e.attachEvent("on" + t, n), { remove: function() { e.detachEvent("on" + t, n) } }) : void 0 }, capture: function(e, t, n) { return e.addEventListener ? (e.addEventListener(t, n, !0), { remove: function() { e.removeEventListener(t, n, !0) } }) : { remove: r } }, registerDefault: function() {} };
            t.exports = o
        }, { 126: 126 }],
        18: [function(e, t, n) {
            "use strict";
            var r = e(19),
                o = e(20),
                i = e(115),
                a = e(132),
                s = e(147),
                u = {},
                l = null,
                c = function(e) {
                    if (e) {
                        var t = o.executeDispatch,
                            n = r.getPluginModuleForEvent(e);
                        n && n.executeDispatch && (t = n.executeDispatch), o.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e)
                    }
                },
                p = null,
                d = {
                    injection: { injectMount: o.injection.injectMount, injectInstanceHandle: function(e) { p = e }, getInstanceHandle: function() { return p }, injectEventPluginOrder: r.injectEventPluginOrder, injectEventPluginsByName: r.injectEventPluginsByName },
                    eventNameDispatchConfigs: r.eventNameDispatchConfigs,
                    registrationNameModules: r.registrationNameModules,
                    putListener: function(e, t, n) {
                        s(!n || "function" == typeof n);
                        var r = u[t] || (u[t] = {});
                        r[e] = n
                    },
                    getListener: function(e, t) { var n = u[t]; return n && n[e] },
                    deleteListener: function(e, t) {
                        var n = u[t];
                        n && delete n[e]
                    },
                    deleteAllListeners: function(e) { for (var t in u) delete u[t][e] },
                    extractEvents: function(e, t, n, o) {
                        for (var a, s = r.plugins, u = 0, l = s.length; l > u; u++) {
                            var c = s[u];
                            if (c) {
                                var p = c.extractEvents(e, t, n, o);
                                p && (a = i(a, p))
                            }
                        }
                        return a
                    },
                    enqueueEvents: function(e) { e && (l = i(l, e)) },
                    processEventQueue: function() {
                        var e = l;
                        l = null, a(e, c), s(!l)
                    },
                    __purge: function() { u = {} },
                    __getListenerBank: function() { return u }
                };
            t.exports = d
        }, { 115: 115, 132: 132, 147: 147, 19: 19, 20: 20 }],
        19: [function(e, t, n) {
            "use strict";

            function r() {
                if (s)
                    for (var e in u) {
                        var t = u[e],
                            n = s.indexOf(e);
                        if (a(n > -1), !l.plugins[n]) { a(t.extractEvents), l.plugins[n] = t; var r = t.eventTypes; for (var i in r) a(o(r[i], t, i)) }
                    }
            }

            function o(e, t, n) {
                a(!l.eventNameDispatchConfigs.hasOwnProperty(n)), l.eventNameDispatchConfigs[n] = e;
                var r = e.phasedRegistrationNames;
                if (r) {
                    for (var o in r)
                        if (r.hasOwnProperty(o)) {
                            var s = r[o];
                            i(s, t, n)
                        }
                    return !0
                }
                return e.registrationName ? (i(e.registrationName, t, n), !0) : !1
            }

            function i(e, t, n) { a(!l.registrationNameModules[e]), l.registrationNameModules[e] = t, l.registrationNameDependencies[e] = t.eventTypes[n].dependencies }
            var a = e(147),
                s = null,
                u = {},
                l = {
                    plugins: [],
                    eventNameDispatchConfigs: {},
                    registrationNameModules: {},
                    registrationNameDependencies: {},
                    injectEventPluginOrder: function(e) { a(!s), s = Array.prototype.slice.call(e), r() },
                    injectEventPluginsByName: function(e) {
                        var t = !1;
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var o = e[n];
                                u.hasOwnProperty(n) && u[n] === o || (a(!u[n]), u[n] = o, t = !0)
                            }
                        t && r()
                    },
                    getPluginModuleForEvent: function(e) {
                        var t = e.dispatchConfig;
                        if (t.registrationName) return l.registrationNameModules[t.registrationName] || null;
                        for (var n in t.phasedRegistrationNames)
                            if (t.phasedRegistrationNames.hasOwnProperty(n)) { var r = l.registrationNameModules[t.phasedRegistrationNames[n]]; if (r) return r }
                        return null
                    },
                    _resetEventPlugins: function() {
                        s = null;
                        for (var e in u) u.hasOwnProperty(e) && delete u[e];
                        l.plugins.length = 0;
                        var t = l.eventNameDispatchConfigs;
                        for (var n in t) t.hasOwnProperty(n) && delete t[n];
                        var r = l.registrationNameModules;
                        for (var o in r) r.hasOwnProperty(o) && delete r[o]
                    }
                };
            t.exports = l
        }, { 147: 147 }],
        20: [function(e, t, n) {
            "use strict";

            function r(e) { return e === v.topMouseUp || e === v.topTouchEnd || e === v.topTouchCancel }

            function o(e) { return e === v.topMouseMove || e === v.topTouchMove }

            function i(e) { return e === v.topMouseDown || e === v.topTouchStart }

            function a(e, t) {
                var n = e._dispatchListeners,
                    r = e._dispatchIDs;
                if (Array.isArray(n))
                    for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) t(e, n[o], r[o]);
                else n && t(e, n, r)
            }

            function s(e, t, n) { e.currentTarget = m.Mount.getNode(n); var r = t(e, n); return e.currentTarget = null, r }

            function u(e, t) { a(e, t), e._dispatchListeners = null, e._dispatchIDs = null }

            function l(e) {
                var t = e._dispatchListeners,
                    n = e._dispatchIDs;
                if (Array.isArray(t)) {
                    for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
                        if (t[r](e, n[r])) return n[r]
                } else if (t && t(e, n)) return n;
                return null
            }

            function c(e) { var t = l(e); return e._dispatchIDs = null, e._dispatchListeners = null, t }

            function p(e) {
                var t = e._dispatchListeners,
                    n = e._dispatchIDs;
                h(!Array.isArray(t));
                var r = t ? t(e, n) : null;
                return e._dispatchListeners = null, e._dispatchIDs = null, r
            }

            function d(e) { return !!e._dispatchListeners }
            var f = e(16),
                h = e(147),
                m = { Mount: null, injectMount: function(e) { m.Mount = e } },
                v = f.topLevelTypes,
                g = { isEndish: r, isMoveish: o, isStartish: i, executeDirectDispatch: p, executeDispatch: s, executeDispatchesInOrder: u, executeDispatchesInOrderStopAtTrue: c, hasDispatches: d, injection: m, useTouchEvents: !1 };
            t.exports = g
        }, { 147: 147, 16: 16 }],
        21: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { var r = t.dispatchConfig.phasedRegistrationNames[n]; return v(e, r) }

            function o(e, t, n) {
                var o = t ? m.bubbled : m.captured,
                    i = r(e, n, o);
                i && (n._dispatchListeners = f(n._dispatchListeners, i), n._dispatchIDs = f(n._dispatchIDs, e))
            }

            function i(e) { e && e.dispatchConfig.phasedRegistrationNames && d.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker, o, e) }

            function a(e, t, n) {
                if (n && n.dispatchConfig.registrationName) {
                    var r = n.dispatchConfig.registrationName,
                        o = v(e, r);
                    o && (n._dispatchListeners = f(n._dispatchListeners, o), n._dispatchIDs = f(n._dispatchIDs, e))
                }
            }

            function s(e) { e && e.dispatchConfig.registrationName && a(e.dispatchMarker, null, e) }

            function u(e) { h(e, i) }

            function l(e, t, n, r) { d.injection.getInstanceHandle().traverseEnterLeave(n, r, a, e, t) }

            function c(e) { h(e, s) }
            var p = e(16),
                d = e(18),
                f = e(115),
                h = e(132),
                m = p.PropagationPhases,
                v = d.getListener,
                g = { accumulateTwoPhaseDispatches: u, accumulateDirectDispatches: c, accumulateEnterLeaveDispatches: l };
            t.exports = g
        }, { 115: 115, 132: 132, 16: 16, 18: 18 }],
        22: [function(e, t, n) {
            "use strict";
            var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
                o = { canUseDOM: r, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent), canUseViewport: r && !!window.screen, isInWorker: !r };
            t.exports = o
        }, {}],
        23: [function(e, t, n) {
            "use strict";

            function r(e) { this._root = e, this._startText = this.getText(), this._fallbackText = null }
            var o = e(30),
                i = e(29),
                a = e(142);
            i(r.prototype, {
                getText: function() { return "value" in this._root ? this._root.value : this._root[a()] },
                getData: function() {
                    if (this._fallbackText) return this._fallbackText;
                    var e, t, n = this._startText,
                        r = n.length,
                        o = this.getText(),
                        i = o.length;
                    for (e = 0; r > e && n[e] === o[e]; e++);
                    var a = r - e;
                    for (t = 1; a >= t && n[r - t] === o[i - t]; t++);
                    var s = t > 1 ? 1 - t : void 0;
                    return this._fallbackText = o.slice(e, s), this._fallbackText
                }
            }), o.addPoolingTo(r), t.exports = r
        }, { 142: 142, 29: 29, 30: 30 }],
        24: [function(e, t, n) {
            "use strict";
            var r, o = e(11),
                i = e(22),
                a = o.injection.MUST_USE_ATTRIBUTE,
                s = o.injection.MUST_USE_PROPERTY,
                u = o.injection.HAS_BOOLEAN_VALUE,
                l = o.injection.HAS_SIDE_EFFECTS,
                c = o.injection.HAS_NUMERIC_VALUE,
                p = o.injection.HAS_POSITIVE_NUMERIC_VALUE,
                d = o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
            if (i.canUseDOM) {
                var f = document.implementation;
                r = f && f.hasFeature && f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
            }
            var h = { isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/), Properties: { accept: null, acceptCharset: null, accessKey: null, action: null, allowFullScreen: a | u, allowTransparency: a, alt: null, async: u, autoComplete: null, autoPlay: u, cellPadding: null, cellSpacing: null, charSet: a, checked: s | u, classID: a, className: r ? a : s, cols: a | p, colSpan: null, content: null, contentEditable: null, contextMenu: a, controls: s | u, coords: null, crossOrigin: null, data: null, dateTime: a, defer: u, dir: null, disabled: a | u, download: d, draggable: null, encType: null, form: a, formAction: a, formEncType: a, formMethod: a, formNoValidate: u, formTarget: a, frameBorder: a, headers: null, height: a, hidden: a | u, high: null, href: null, hrefLang: null, htmlFor: null, httpEquiv: null, icon: null, id: s, label: null, lang: null, list: a, loop: s | u, low: null, manifest: a, marginHeight: null, marginWidth: null, max: null, maxLength: a, media: a, mediaGroup: null, method: null, min: null, multiple: s | u, muted: s | u, name: null, noValidate: u, open: u, optimum: null, pattern: null, placeholder: null, poster: null, preload: null, radioGroup: null, readOnly: s | u, rel: null, required: u, role: a, rows: a | p, rowSpan: null, sandbox: null, scope: null, scoped: u, scrolling: null, seamless: a | u, selected: s | u, shape: null, size: a | p, sizes: a, span: p, spellCheck: null, src: null, srcDoc: s, srcSet: a, start: c, step: null, style: null, tabIndex: null, target: null, title: null, type: null, useMap: null, value: s | l, width: a, wmode: a, autoCapitalize: null, autoCorrect: null, itemProp: a, itemScope: a | u, itemType: a, itemID: a, itemRef: a, property: null, unselectable: a }, DOMAttributeNames: { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" }, DOMPropertyNames: { autoCapitalize: "autocapitalize", autoComplete: "autocomplete", autoCorrect: "autocorrect", autoFocus: "autofocus", autoPlay: "autoplay", encType: "encoding", hrefLang: "hreflang", radioGroup: "radiogroup", spellCheck: "spellcheck", srcDoc: "srcdoc", srcSet: "srcset" } };
            t.exports = h
        }, { 11: 11, 22: 22 }],
        25: [function(e, t, n) {
            "use strict";
            var r = e(73),
                o = e(92),
                i = { linkState: function(e) { return new r(this.state[e], o.createStateKeySetter(this, e)) } };
            t.exports = i
        }, { 73: 73, 92: 92 }],
        26: [function(e, t, n) {
            "use strict";

            function r(e) { l(null == e.props.checkedLink || null == e.props.valueLink) }

            function o(e) { r(e), l(null == e.props.value && null == e.props.onChange) }

            function i(e) { r(e), l(null == e.props.checked && null == e.props.onChange) }

            function a(e) { this.props.valueLink.requestChange(e.target.value) }

            function s(e) { this.props.checkedLink.requestChange(e.target.checked) }
            var u = e(84),
                l = e(147),
                c = { button: !0, checkbox: !0, image: !0, hidden: !0, radio: !0, reset: !0, submit: !0 },
                p = { Mixin: { propTypes: { value: function(e, t, n) { return !e[t] || c[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.") }, checked: function(e, t, n) { return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.") }, onChange: u.func } }, getValue: function(e) { return e.props.valueLink ? (o(e), e.props.valueLink.value) : e.props.value }, getChecked: function(e) { return e.props.checkedLink ? (i(e), e.props.checkedLink.value) : e.props.checked }, getOnChange: function(e) { return e.props.valueLink ? (o(e), a) : e.props.checkedLink ? (i(e), s) : e.props.onChange } };
            t.exports = p
        }, { 147: 147, 84: 84 }],
        27: [function(e, t, n) {
            "use strict";

            function r(e) { e.remove() }
            var o = e(33),
                i = e(115),
                a = e(132),
                s = e(147),
                u = {
                    trapBubbledEvent: function(e, t) {
                        s(this.isMounted());
                        var n = this.getDOMNode();
                        s(n);
                        var r = o.trapBubbledEvent(e, t, n);
                        this._localEventListeners = i(this._localEventListeners, r)
                    },
                    componentWillUnmount: function() { this._localEventListeners && a(this._localEventListeners, r) }
                };
            t.exports = u
        }, { 115: 115, 132: 132, 147: 147, 33: 33 }],
        28: [function(e, t, n) {
            "use strict";
            var r = e(16),
                o = e(126),
                i = r.topLevelTypes,
                a = {
                    eventTypes: null,
                    extractEvents: function(e, t, n, r) {
                        if (e === i.topTouchStart) {
                            var a = r.target;
                            a && !a.onclick && (a.onclick = o)
                        }
                    }
                };
            t.exports = a
        }, { 126: 126, 16: 16 }],
        29: [function(e, t, n) {
            "use strict";

            function r(e, t) { if (null == e) throw new TypeError("Object.assign target cannot be null or undefined"); for (var n = Object(e), r = Object.prototype.hasOwnProperty, o = 1; o < arguments.length; o++) { var i = arguments[o]; if (null != i) { var a = Object(i); for (var s in a) r.call(a, s) && (n[s] = a[s]) } } return n }
            t.exports = r
        }, {}],
        30: [function(e, t, n) {
            "use strict";
            var r = e(147),
                o = function(e) { var t = this; if (t.instancePool.length) { var n = t.instancePool.pop(); return t.call(n, e), n } return new t(e) },
                i = function(e, t) { var n = this; if (n.instancePool.length) { var r = n.instancePool.pop(); return n.call(r, e, t), r } return new n(e, t) },
                a = function(e, t, n) { var r = this; if (r.instancePool.length) { var o = r.instancePool.pop(); return r.call(o, e, t, n), o } return new r(e, t, n) },
                s = function(e, t, n, r, o) { var i = this; if (i.instancePool.length) { var a = i.instancePool.pop(); return i.call(a, e, t, n, r, o), a } return new i(e, t, n, r, o) },
                u = function(e) {
                    var t = this;
                    r(e instanceof t), e.destructor && e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
                },
                l = 10,
                c = o,
                p = function(e, t) { var n = e; return n.instancePool = [], n.getPooled = t || c, n.poolSize || (n.poolSize = l), n.release = u, n },
                d = { addPoolingTo: p, oneArgumentPooler: o, twoArgumentPooler: i, threeArgumentPooler: a, fiveArgumentPooler: s };
            t.exports = d
        }, { 147: 147 }],
        31: [function(e, t, n) {
            "use strict";
            var r = e(20),
                o = e(37),
                i = e(39),
                a = e(38),
                s = e(44),
                u = e(45),
                l = e(61),
                c = (e(62), e(46)),
                p = e(57),
                d = e(60),
                f = e(70),
                h = e(75),
                m = e(80),
                v = e(84),
                g = e(87),
                y = e(90),
                C = e(29),
                E = e(129),
                b = e(157);
            d.inject();
            var _ = l.createElement,
                x = l.createFactory,
                D = l.cloneElement,
                M = m.measure("React", "render", h.render),
                T = { Children: { map: o.map, forEach: o.forEach, count: o.count, only: b }, Component: i, DOM: c, PropTypes: v, initializeTouchEvents: function(e) { r.useTouchEvents = e }, createClass: a.createClass, createElement: _, cloneElement: D, createFactory: x, createMixin: function(e) { return e }, constructAndRenderComponent: h.constructAndRenderComponent, constructAndRenderComponentByID: h.constructAndRenderComponentByID, findDOMNode: E, render: M, renderToString: y.renderToString, renderToStaticMarkup: y.renderToStaticMarkup, unmountComponentAtNode: h.unmountComponentAtNode, isValidElement: l.isValidElement, withContext: s.withContext, __spread: C };
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({ CurrentOwner: u, InstanceHandles: f, Mount: h, Reconciler: g, TextComponent: p }), T.version = "0.13.3", t.exports = T
        }, { 129: 129, 157: 157, 20: 20, 29: 29, 37: 37, 38: 38, 39: 39, 44: 44, 45: 45, 46: 46, 57: 57, 60: 60, 61: 61, 62: 62, 70: 70, 75: 75, 80: 80, 84: 84, 87: 87, 90: 90 }],
        32: [function(e, t, n) {
            "use strict";
            var r = e(129),
                o = { getDOMNode: function() { return r(this) } };
            t.exports = o
        }, { 129: 129 }],
        33: [function(e, t, n) {
            "use strict";

            function r(e) { return Object.prototype.hasOwnProperty.call(e, m) || (e[m] = f++, p[e[m]] = {}), p[e[m]] }
            var o = e(16),
                i = e(18),
                a = e(19),
                s = e(65),
                u = e(114),
                l = e(29),
                c = e(148),
                p = {},
                d = !1,
                f = 0,
                h = { topBlur: "blur", topChange: "change", topClick: "click", topCompositionEnd: "compositionend", topCompositionStart: "compositionstart", topCompositionUpdate: "compositionupdate", topContextMenu: "contextmenu", topCopy: "copy", topCut: "cut", topDoubleClick: "dblclick", topDrag: "drag", topDragEnd: "dragend", topDragEnter: "dragenter", topDragExit: "dragexit", topDragLeave: "dragleave", topDragOver: "dragover", topDragStart: "dragstart", topDrop: "drop", topFocus: "focus", topInput: "input", topKeyDown: "keydown", topKeyPress: "keypress", topKeyUp: "keyup", topMouseDown: "mousedown", topMouseMove: "mousemove", topMouseOut: "mouseout", topMouseOver: "mouseover", topMouseUp: "mouseup", topPaste: "paste", topScroll: "scroll", topSelectionChange: "selectionchange", topTextInput: "textInput", topTouchCancel: "touchcancel", topTouchEnd: "touchend", topTouchMove: "touchmove", topTouchStart: "touchstart", topWheel: "wheel" },
                m = "_reactListenersID" + String(Math.random()).slice(2),
                v = l({}, s, {
                    ReactEventListener: null,
                    injection: { injectReactEventListener: function(e) { e.setHandleTopLevel(v.handleTopLevel), v.ReactEventListener = e } },
                    setEnabled: function(e) {
                        v.ReactEventListener && v.ReactEventListener.setEnabled(e)
                    },
                    isEnabled: function() { return !(!v.ReactEventListener || !v.ReactEventListener.isEnabled()) },
                    listenTo: function(e, t) {
                        for (var n = t, i = r(n), s = a.registrationNameDependencies[e], u = o.topLevelTypes, l = 0, p = s.length; p > l; l++) {
                            var d = s[l];
                            i.hasOwnProperty(d) && i[d] || (d === u.topWheel ? c("wheel") ? v.ReactEventListener.trapBubbledEvent(u.topWheel, "wheel", n) : c("mousewheel") ? v.ReactEventListener.trapBubbledEvent(u.topWheel, "mousewheel", n) : v.ReactEventListener.trapBubbledEvent(u.topWheel, "DOMMouseScroll", n) : d === u.topScroll ? c("scroll", !0) ? v.ReactEventListener.trapCapturedEvent(u.topScroll, "scroll", n) : v.ReactEventListener.trapBubbledEvent(u.topScroll, "scroll", v.ReactEventListener.WINDOW_HANDLE) : d === u.topFocus || d === u.topBlur ? (c("focus", !0) ? (v.ReactEventListener.trapCapturedEvent(u.topFocus, "focus", n), v.ReactEventListener.trapCapturedEvent(u.topBlur, "blur", n)) : c("focusin") && (v.ReactEventListener.trapBubbledEvent(u.topFocus, "focusin", n), v.ReactEventListener.trapBubbledEvent(u.topBlur, "focusout", n)), i[u.topBlur] = !0, i[u.topFocus] = !0) : h.hasOwnProperty(d) && v.ReactEventListener.trapBubbledEvent(d, h[d], n), i[d] = !0)
                        }
                    },
                    trapBubbledEvent: function(e, t, n) { return v.ReactEventListener.trapBubbledEvent(e, t, n) },
                    trapCapturedEvent: function(e, t, n) { return v.ReactEventListener.trapCapturedEvent(e, t, n) },
                    ensureScrollValueMonitoring: function() {
                        if (!d) {
                            var e = u.refreshScrollValues;
                            v.ReactEventListener.monitorScrollValue(e), d = !0
                        }
                    },
                    eventNameDispatchConfigs: i.eventNameDispatchConfigs,
                    registrationNameModules: i.registrationNameModules,
                    putListener: i.putListener,
                    getListener: i.getListener,
                    deleteListener: i.deleteListener,
                    deleteAllListeners: i.deleteAllListeners
                });
            t.exports = v
        }, { 114: 114, 148: 148, 16: 16, 18: 18, 19: 19, 29: 29, 65: 65 }],
        34: [function(e, t, n) {
            "use strict";
            var r = e(31),
                o = e(29),
                i = r.createFactory(e(95)),
                a = r.createFactory(e(35)),
                s = r.createClass({ displayName: "ReactCSSTransitionGroup", propTypes: { transitionName: r.PropTypes.string.isRequired, transitionAppear: r.PropTypes.bool, transitionEnter: r.PropTypes.bool, transitionLeave: r.PropTypes.bool }, getDefaultProps: function() { return { transitionAppear: !1, transitionEnter: !0, transitionLeave: !0 } }, _wrapChild: function(e) { return a({ name: this.props.transitionName, appear: this.props.transitionAppear, enter: this.props.transitionEnter, leave: this.props.transitionLeave }, e) }, render: function() { return i(o({}, this.props, { childFactory: this._wrapChild })) } });
            t.exports = s
        }, { 29: 29, 31: 31, 35: 35, 95: 95 }],
        35: [function(e, t, n) {
            "use strict";
            var r = e(31),
                o = e(4),
                i = e(94),
                a = e(157),
                s = (e(166), 17),
                u = r.createClass({
                    displayName: "ReactCSSTransitionGroupChild",
                    transition: function(e, t) {
                        var n = this.getDOMNode(),
                            r = this.props.name + "-" + e,
                            a = r + "-active",
                            s = function(e) { e && e.target !== n || (o.removeClass(n, r), o.removeClass(n, a), i.removeEndEventListener(n, s), t && t()) };
                        i.addEndEventListener(n, s), o.addClass(n, r), this.queueClass(a)
                    },
                    queueClass: function(e) { this.classNameQueue.push(e), this.timeout || (this.timeout = setTimeout(this.flushClassNameQueue, s)) },
                    flushClassNameQueue: function() { this.isMounted() && this.classNameQueue.forEach(o.addClass.bind(o, this.getDOMNode())), this.classNameQueue.length = 0, this.timeout = null },
                    componentWillMount: function() { this.classNameQueue = [] },
                    componentWillUnmount: function() { this.timeout && clearTimeout(this.timeout) },
                    componentWillAppear: function(e) { this.props.appear ? this.transition("appear", e) : e() },
                    componentWillEnter: function(e) { this.props.enter ? this.transition("enter", e) : e() },
                    componentWillLeave: function(e) { this.props.leave ? this.transition("leave", e) : e() },
                    render: function() { return a(this.props.children) }
                });
            t.exports = u
        }, { 157: 157, 166: 166, 31: 31, 4: 4, 94: 94 }],
        36: [function(e, t, n) {
            "use strict";
            var r = e(87),
                o = e(130),
                i = e(146),
                a = e(162),
                s = {
                    instantiateChildren: function(e, t, n) {
                        var r = o(e);
                        for (var a in r)
                            if (r.hasOwnProperty(a)) {
                                var s = r[a],
                                    u = i(s, null);
                                r[a] = u
                            }
                        return r
                    },
                    updateChildren: function(e, t, n, s) {
                        var u = o(t);
                        if (!u && !e) return null;
                        var l;
                        for (l in u)
                            if (u.hasOwnProperty(l)) {
                                var c = e && e[l],
                                    p = c && c._currentElement,
                                    d = u[l];
                                if (a(p, d)) r.receiveComponent(c, d, n, s), u[l] = c;
                                else {
                                    c && r.unmountComponent(c, l);
                                    var f = i(d, null);
                                    u[l] = f
                                }
                            }
                        for (l in e) !e.hasOwnProperty(l) || u && u.hasOwnProperty(l) || r.unmountComponent(e[l]);
                        return u
                    },
                    unmountChildren: function(e) {
                        for (var t in e) {
                            var n = e[t];
                            r.unmountComponent(n)
                        }
                    }
                };
            t.exports = s
        }, { 130: 130, 146: 146, 162: 162, 87: 87 }],
        37: [function(e, t, n) {
            "use strict";

            function r(e, t) { this.forEachFunction = e, this.forEachContext = t }

            function o(e, t, n, r) {
                var o = e;
                o.forEachFunction.call(o.forEachContext, t, r)
            }

            function i(e, t, n) {
                if (null == e) return e;
                var i = r.getPooled(t, n);
                f(e, o, i), r.release(i)
            }

            function a(e, t, n) { this.mapResult = e, this.mapFunction = t, this.mapContext = n }

            function s(e, t, n, r) {
                var o = e,
                    i = o.mapResult,
                    a = !i.hasOwnProperty(n);
                if (a) {
                    var s = o.mapFunction.call(o.mapContext, t, r);
                    i[n] = s
                }
            }

            function u(e, t, n) {
                if (null == e) return e;
                var r = {},
                    o = a.getPooled(r, t, n);
                return f(e, s, o), a.release(o), d.create(r)
            }

            function l(e, t, n, r) { return null }

            function c(e, t) { return f(e, l, null) }
            var p = e(30),
                d = e(67),
                f = e(164),
                h = (e(166), p.twoArgumentPooler),
                m = p.threeArgumentPooler;
            p.addPoolingTo(r, h), p.addPoolingTo(a, m);
            var v = { forEach: i, map: u, count: c };
            t.exports = v
        }, { 164: 164, 166: 166, 30: 30, 67: 67 }],
        38: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = D.hasOwnProperty(t) ? D[t] : null;
                T.hasOwnProperty(t) && y(n === _.OVERRIDE_BASE), e.hasOwnProperty(t) && y(n === _.DEFINE_MANY || n === _.DEFINE_MANY_MERGED)
            }

            function o(e, t) {
                if (t) {
                    y("function" != typeof t), y(!d.isValidElement(t));
                    var n = e.prototype;
                    t.hasOwnProperty(b) && M.mixins(e, t.mixins);
                    for (var o in t)
                        if (t.hasOwnProperty(o) && o !== b) {
                            var i = t[o];
                            if (r(n, o), M.hasOwnProperty(o)) M[o](e, i);
                            else {
                                var a = D.hasOwnProperty(o),
                                    l = n.hasOwnProperty(o),
                                    c = i && i.__reactDontBind,
                                    p = "function" == typeof i,
                                    f = p && !a && !l && !c;
                                if (f) n.__reactAutoBindMap || (n.__reactAutoBindMap = {}), n.__reactAutoBindMap[o] = i, n[o] = i;
                                else if (l) {
                                    var h = D[o];
                                    y(a && (h === _.DEFINE_MANY_MERGED || h === _.DEFINE_MANY)), h === _.DEFINE_MANY_MERGED ? n[o] = s(n[o], i) : h === _.DEFINE_MANY && (n[o] = u(n[o], i))
                                } else n[o] = i
                            }
                        }
                }
            }

            function i(e, t) {
                if (t)
                    for (var n in t) {
                        var r = t[n];
                        if (t.hasOwnProperty(n)) {
                            var o = n in M;
                            y(!o);
                            var i = n in e;
                            y(!i), e[n] = r
                        }
                    }
            }

            function a(e, t) { y(e && t && "object" == typeof e && "object" == typeof t); for (var n in t) t.hasOwnProperty(n) && (y(void 0 === e[n]), e[n] = t[n]); return e }

            function s(e, t) {
                return function() {
                    var n = e.apply(this, arguments),
                        r = t.apply(this, arguments);
                    if (null == n) return r;
                    if (null == r) return n;
                    var o = {};
                    return a(o, n), a(o, r), o
                }
            }

            function u(e, t) { return function() { e.apply(this, arguments), t.apply(this, arguments) } }

            function l(e, t) { var n = t.bind(e); return n }

            function c(e) {
                for (var t in e.__reactAutoBindMap)
                    if (e.__reactAutoBindMap.hasOwnProperty(t)) {
                        var n = e.__reactAutoBindMap[t];
                        e[t] = l(e, f.guard(n, e.constructor.displayName + "." + t))
                    }
            }
            var p = e(39),
                d = (e(45), e(61)),
                f = e(64),
                h = e(71),
                m = e(72),
                v = (e(83), e(82), e(96)),
                g = e(29),
                y = e(147),
                C = e(153),
                E = e(154),
                b = (e(166), E({ mixins: null })),
                _ = C({ DEFINE_ONCE: null, DEFINE_MANY: null, OVERRIDE_BASE: null, DEFINE_MANY_MERGED: null }),
                x = [],
                D = { mixins: _.DEFINE_MANY, statics: _.DEFINE_MANY, propTypes: _.DEFINE_MANY, contextTypes: _.DEFINE_MANY, childContextTypes: _.DEFINE_MANY, getDefaultProps: _.DEFINE_MANY_MERGED, getInitialState: _.DEFINE_MANY_MERGED, getChildContext: _.DEFINE_MANY_MERGED, render: _.DEFINE_ONCE, componentWillMount: _.DEFINE_MANY, componentDidMount: _.DEFINE_MANY, componentWillReceiveProps: _.DEFINE_MANY, shouldComponentUpdate: _.DEFINE_ONCE, componentWillUpdate: _.DEFINE_MANY, componentDidUpdate: _.DEFINE_MANY, componentWillUnmount: _.DEFINE_MANY, updateComponent: _.OVERRIDE_BASE },
                M = {
                    displayName: function(e, t) { e.displayName = t },
                    mixins: function(e, t) {
                        if (t)
                            for (var n = 0; n < t.length; n++) o(e, t[n])
                    },
                    childContextTypes: function(e, t) { e.childContextTypes = g({}, e.childContextTypes, t) },
                    contextTypes: function(e, t) { e.contextTypes = g({}, e.contextTypes, t) },
                    getDefaultProps: function(e, t) { e.getDefaultProps = e.getDefaultProps ? s(e.getDefaultProps, t) : t },
                    propTypes: function(e, t) { e.propTypes = g({}, e.propTypes, t) },
                    statics: function(e, t) { i(e, t) }
                },
                T = { replaceState: function(e, t) { v.enqueueReplaceState(this, e), t && v.enqueueCallback(this, t) }, isMounted: function() { var e = h.get(this); return e && e !== m.currentlyMountingInstance }, setProps: function(e, t) { v.enqueueSetProps(this, e), t && v.enqueueCallback(this, t) }, replaceProps: function(e, t) { v.enqueueReplaceProps(this, e), t && v.enqueueCallback(this, t) } },
                N = function() {};
            g(N.prototype, p.prototype, T);
            var P = {
                createClass: function(e) {
                    var t = function(e, t) {
                        this.__reactAutoBindMap && c(this), this.props = e, this.context = t, this.state = null;
                        var n = this.getInitialState ? this.getInitialState() : null;
                        y("object" == typeof n && !Array.isArray(n)), this.state = n
                    };
                    t.prototype = new N, t.prototype.constructor = t, x.forEach(o.bind(null, t)), o(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), y(t.prototype.render);
                    for (var n in D) t.prototype[n] || (t.prototype[n] = null);
                    return t.type = t, t
                },
                injection: { injectMixin: function(e) { x.push(e) } }
            };
            t.exports = P
        }, { 147: 147, 153: 153, 154: 154, 166: 166, 29: 29, 39: 39, 45: 45, 61: 61, 64: 64, 71: 71, 72: 72, 82: 82, 83: 83, 96: 96 }],
        39: [function(e, t, n) {
            "use strict";

            function r(e, t) { this.props = e, this.context = t }
            var o = e(96),
                i = e(147);
            e(166), r.prototype.setState = function(e, t) { i("object" == typeof e || "function" == typeof e || null == e), o.enqueueSetState(this, e), t && o.enqueueCallback(this, t) }, r.prototype.forceUpdate = function(e) { o.enqueueForceUpdate(this), e && o.enqueueCallback(this, e) }, t.exports = r
        }, { 147: 147, 166: 166, 96: 96 }],
        40: [function(e, t, n) {
            "use strict";
            var r = e(50),
                o = e(75),
                i = { processChildrenUpdates: r.dangerouslyProcessChildrenUpdates, replaceNodeWithMarkupByID: r.dangerouslyReplaceNodeWithMarkupByID, unmountIDFromEnvironment: function(e) { o.purgeID(e) } };
            t.exports = i
        }, { 50: 50, 75: 75 }],
        41: [function(e, t, n) {
            "use strict";
            var r = e(147),
                o = !1,
                i = { unmountIDFromEnvironment: null, replaceNodeWithMarkupByID: null, processChildrenUpdates: null, injection: { injectEnvironment: function(e) { r(!o), i.unmountIDFromEnvironment = e.unmountIDFromEnvironment, i.replaceNodeWithMarkupByID = e.replaceNodeWithMarkupByID, i.processChildrenUpdates = e.processChildrenUpdates, o = !0 } } };
            t.exports = i
        }, { 147: 147 }],
        42: [function(e, t, n) {
            "use strict";
            var r = e(161),
                o = { shouldComponentUpdate: function(e, t) { return !r(this.props, e) || !r(this.state, t) } };
            t.exports = o
        }, { 161: 161 }],
        43: [function(e, t, n) {
            "use strict";

            function r(e) { var t = e._currentElement._owner || null; if (t) { var n = t.getName(); if (n) return " Check the render method of `" + n + "`." } return "" }
            var o = e(41),
                i = e(44),
                a = e(45),
                s = e(61),
                u = (e(62), e(71)),
                l = e(72),
                c = e(78),
                p = e(80),
                d = e(83),
                f = (e(82), e(87)),
                h = e(97),
                m = e(29),
                v = e(127),
                g = e(147),
                y = e(162),
                C = (e(166), 1),
                E = {
                    construct: function(e) { this._currentElement = e, this._rootNodeID = null, this._instance = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._isTopLevel = !1, this._pendingCallbacks = null },
                    mountComponent: function(e, t, n) {
                        this._context = n, this._mountOrder = C++, this._rootNodeID = e;
                        var r = this._processProps(this._currentElement.props),
                            o = this._processContext(this._currentElement._context),
                            i = c.getComponentClassForElement(this._currentElement),
                            a = new i(r, o);
                        a.props = r, a.context = o, a.refs = v, this._instance = a, u.set(a, this);
                        var s = a.state;
                        void 0 === s && (a.state = s = null), g("object" == typeof s && !Array.isArray(s)), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
                        var p, d, h = l.currentlyMountingInstance;
                        l.currentlyMountingInstance = this;
                        try { a.componentWillMount && (a.componentWillMount(), this._pendingStateQueue && (a.state = this._processPendingState(a.props, a.context))), p = this._getValidatedChildContext(n), d = this._renderValidatedComponent(p) } finally { l.currentlyMountingInstance = h }
                        this._renderedComponent = this._instantiateReactComponent(d, this._currentElement.type);
                        var m = f.mountComponent(this._renderedComponent, e, t, this._mergeChildContext(n, p));
                        return a.componentDidMount && t.getReactMountReady().enqueue(a.componentDidMount, a), m
                    },
                    unmountComponent: function() {
                        var e = this._instance;
                        if (e.componentWillUnmount) {
                            var t = l.currentlyUnmountingInstance;
                            l.currentlyUnmountingInstance = this;
                            try { e.componentWillUnmount() } finally { l.currentlyUnmountingInstance = t }
                        }
                        f.unmountComponent(this._renderedComponent), this._renderedComponent = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = null, u.remove(e)
                    },
                    _setPropsInternal: function(e, t) {
                        var n = this._pendingElement || this._currentElement;
                        this._pendingElement = s.cloneAndReplaceProps(n, m({}, n.props, e)), h.enqueueUpdate(this, t)
                    },
                    _maskContext: function(e) {
                        var t = null;
                        if ("string" == typeof this._currentElement.type) return v;
                        var n = this._currentElement.type.contextTypes;
                        if (!n) return v;
                        t = {};
                        for (var r in n) t[r] = e[r];
                        return t
                    },
                    _processContext: function(e) { var t = this._maskContext(e); return t },
                    _getValidatedChildContext: function(e) {
                        var t = this._instance,
                            n = t.getChildContext && t.getChildContext();
                        if (n) { g("object" == typeof t.constructor.childContextTypes); for (var r in n) g(r in t.constructor.childContextTypes); return n }
                        return null
                    },
                    _mergeChildContext: function(e, t) { return t ? m({}, e, t) : e },
                    _processProps: function(e) { return e },
                    _checkPropTypes: function(e, t, n) {
                        var o = this.getName();
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var a;
                                try { g("function" == typeof e[i]), a = e[i](t, i, o, n) } catch (s) { a = s }
                                a instanceof Error && (r(this), n === d.prop)
                            }
                    },
                    receiveComponent: function(e, t, n) {
                        var r = this._currentElement,
                            o = this._context;
                        this._pendingElement = null, this.updateComponent(t, r, e, o, n)
                    },
                    performUpdateIfNecessary: function(e) { null != this._pendingElement && f.receiveComponent(this, this._pendingElement || this._currentElement, e, this._context), (null !== this._pendingStateQueue || this._pendingForceUpdate) && this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context) },
                    _warnIfContextsDiffer: function(e, t) { e = this._maskContext(e), t = this._maskContext(t); for (var n = Object.keys(t).sort(), r = (this.getName() || "ReactCompositeComponent", 0); r < n.length; r++) n[r] },
                    updateComponent: function(e, t, n, r, o) {
                        var i = this._instance,
                            a = i.context,
                            s = i.props;
                        t !== n && (a = this._processContext(n._context), s = this._processProps(n.props), i.componentWillReceiveProps && i.componentWillReceiveProps(s, a));
                        var u = this._processPendingState(s, a),
                            l = this._pendingForceUpdate || !i.shouldComponentUpdate || i.shouldComponentUpdate(s, u, a);
                        l ? (this._pendingForceUpdate = !1, this._performComponentUpdate(n, s, u, a, e, o)) : (this._currentElement = n, this._context = o, i.props = s, i.state = u, i.context = a)
                    },
                    _processPendingState: function(e, t) {
                        var n = this._instance,
                            r = this._pendingStateQueue,
                            o = this._pendingReplaceState;
                        if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !r) return n.state;
                        if (o && 1 === r.length) return r[0];
                        for (var i = m({}, o ? r[0] : n.state), a = o ? 1 : 0; a < r.length; a++) {
                            var s = r[a];
                            m(i, "function" == typeof s ? s.call(n, i, e, t) : s)
                        }
                        return i
                    },
                    _performComponentUpdate: function(e, t, n, r, o, i) {
                        var a = this._instance,
                            s = a.props,
                            u = a.state,
                            l = a.context;
                        a.componentWillUpdate && a.componentWillUpdate(t, n, r), this._currentElement = e, this._context = i, a.props = t, a.state = n, a.context = r, this._updateRenderedComponent(o, i), a.componentDidUpdate && o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a, s, u, l), a)
                    },
                    _updateRenderedComponent: function(e, t) {
                        var n = this._renderedComponent,
                            r = n._currentElement,
                            o = this._getValidatedChildContext(),
                            i = this._renderValidatedComponent(o);
                        if (y(r, i)) f.receiveComponent(n, i, e, this._mergeChildContext(t, o));
                        else {
                            var a = this._rootNodeID,
                                s = n._rootNodeID;
                            f.unmountComponent(n), this._renderedComponent = this._instantiateReactComponent(i, this._currentElement.type);
                            var u = f.mountComponent(this._renderedComponent, a, e, this._mergeChildContext(t, o));
                            this._replaceNodeWithMarkupByID(s, u)
                        }
                    },
                    _replaceNodeWithMarkupByID: function(e, t) { o.replaceNodeWithMarkupByID(e, t) },
                    _renderValidatedComponentWithoutOwnerOrContext: function() {
                        var e = this._instance,
                            t = e.render();
                        return t
                    },
                    _renderValidatedComponent: function(e) {
                        var t, n = i.current;
                        i.current = this._mergeChildContext(this._currentElement._context, e), a.current = this;
                        try { t = this._renderValidatedComponentWithoutOwnerOrContext() } finally { i.current = n, a.current = null }
                        return g(null === t || t === !1 || s.isValidElement(t)), t
                    },
                    attachRef: function(e, t) {
                        var n = this.getPublicInstance(),
                            r = n.refs === v ? n.refs = {} : n.refs;
                        r[e] = t.getPublicInstance()
                    },
                    detachRef: function(e) {
                        var t = this.getPublicInstance().refs;
                        delete t[e]
                    },
                    getName: function() {
                        var e = this._currentElement.type,
                            t = this._instance && this._instance.constructor;
                        return e.displayName || t && t.displayName || e.name || t && t.name || null
                    },
                    getPublicInstance: function() { return this._instance },
                    _instantiateReactComponent: null
                };
            p.measureMethods(E, "ReactCompositeComponent", { mountComponent: "mountComponent", updateComponent: "updateComponent", _renderValidatedComponent: "_renderValidatedComponent" });
            var b = { Mixin: E };
            t.exports = b
        }, { 127: 127, 147: 147, 162: 162, 166: 166, 29: 29, 41: 41, 44: 44, 45: 45, 61: 61, 62: 62, 71: 71, 72: 72, 78: 78, 80: 80, 82: 82, 83: 83, 87: 87, 97: 97 }],
        44: [function(e, t, n) {
            "use strict";
            var r = e(29),
                o = e(127),
                i = (e(166), {
                    current: o,
                    withContext: function(e, t) {
                        var n, o = i.current;
                        i.current = r({}, o, e);
                        try { n = t() } finally { i.current = o }
                        return n
                    }
                });
            t.exports = i
        }, { 127: 127, 166: 166, 29: 29 }],
        45: [function(e, t, n) {
            "use strict";
            var r = { current: null };
            t.exports = r
        }, {}],
        46: [function(e, t, n) {
            "use strict";

            function r(e) { return o.createFactory(e) }
            var o = e(61),
                i = (e(62), e(155)),
                a = i({ a: "a", abbr: "abbr", address: "address", area: "area", article: "article", aside: "aside", audio: "audio", b: "b", base: "base", bdi: "bdi", bdo: "bdo", big: "big", blockquote: "blockquote", body: "body", br: "br", button: "button", canvas: "canvas", caption: "caption", cite: "cite", code: "code", col: "col", colgroup: "colgroup", data: "data", datalist: "datalist", dd: "dd", del: "del", details: "details", dfn: "dfn", dialog: "dialog", div: "div", dl: "dl", dt: "dt", em: "em", embed: "embed", fieldset: "fieldset", figcaption: "figcaption", figure: "figure", footer: "footer", form: "form", h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", head: "head", header: "header", hr: "hr", html: "html", i: "i", iframe: "iframe", img: "img", input: "input", ins: "ins", kbd: "kbd", keygen: "keygen", label: "label", legend: "legend", li: "li", link: "link", main: "main", map: "map", mark: "mark", menu: "menu", menuitem: "menuitem", meta: "meta", meter: "meter", nav: "nav", noscript: "noscript", object: "object", ol: "ol", optgroup: "optgroup", option: "option", output: "output", p: "p", param: "param", picture: "picture", pre: "pre", progress: "progress", q: "q", rp: "rp", rt: "rt", ruby: "ruby", s: "s", samp: "samp", script: "script", section: "section", select: "select", small: "small", source: "source", span: "span", strong: "strong", style: "style", sub: "sub", summary: "summary", sup: "sup", table: "table", tbody: "tbody", td: "td", textarea: "textarea", tfoot: "tfoot", th: "th", thead: "thead", time: "time", title: "title", tr: "tr", track: "track", u: "u", ul: "ul", "var": "var", video: "video", wbr: "wbr", circle: "circle", clipPath: "clipPath", defs: "defs", ellipse: "ellipse", g: "g", line: "line", linearGradient: "linearGradient", mask: "mask", path: "path", pattern: "pattern", polygon: "polygon", polyline: "polyline", radialGradient: "radialGradient", rect: "rect", stop: "stop", svg: "svg", text: "text", tspan: "tspan" }, r);
            t.exports = a
        }, { 155: 155, 61: 61, 62: 62 }],
        47: [function(e, t, n) {
            "use strict";
            var r = e(2),
                o = e(32),
                i = e(38),
                a = e(61),
                s = e(153),
                u = a.createFactory("button"),
                l = s({ onClick: !0, onDoubleClick: !0, onMouseDown: !0, onMouseMove: !0, onMouseUp: !0, onClickCapture: !0, onDoubleClickCapture: !0, onMouseDownCapture: !0, onMouseMoveCapture: !0, onMouseUpCapture: !0 }),
                c = i.createClass({ displayName: "ReactDOMButton", tagName: "BUTTON", mixins: [r, o], render: function() { var e = {}; for (var t in this.props) !this.props.hasOwnProperty(t) || this.props.disabled && l[t] || (e[t] = this.props[t]); return u(e, this.props.children) } });
            t.exports = c
        }, { 153: 153, 2: 2, 32: 32, 38: 38, 61: 61 }],
        48: [function(e, t, n) {
            "use strict";

            function r(e) { e && (null != e.dangerouslySetInnerHTML && (g(null == e.children), g("object" == typeof e.dangerouslySetInnerHTML && "__html" in e.dangerouslySetInnerHTML)), g(null == e.style || "object" == typeof e.style)) }

            function o(e, t, n, r) {
                var o = d.findReactContainerForID(e);
                if (o) {
                    var i = o.nodeType === D ? o.ownerDocument : o;
                    E(t, i)
                }
                r.getPutListenerQueue().enqueuePutListener(e, t, n)
            }

            function i(e) { I.call(P, e) || (g(N.test(e)), P[e] = !0) }

            function a(e) { i(e), this._tag = e, this._renderedChildren = null, this._previousStyleCopy = null, this._rootNodeID = null }
            var s = e(6),
                u = e(11),
                l = e(12),
                c = e(33),
                p = e(40),
                d = e(75),
                f = e(76),
                h = e(80),
                m = e(29),
                v = e(128),
                g = e(147),
                y = (e(148), e(154)),
                C = (e(166), c.deleteListener),
                E = c.listenTo,
                b = c.registrationNameModules,
                _ = { string: !0, number: !0 },
                x = y({ style: null }),
                D = 1,
                M = null,
                T = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 },
                N = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
                P = {},
                I = {}.hasOwnProperty;
            a.displayName = "ReactDOMComponent", a.Mixin = {
                construct: function(e) { this._currentElement = e },
                mountComponent: function(e, t, n) { this._rootNodeID = e, r(this._currentElement.props); var o = T[this._tag] ? "" : "</" + this._tag + ">"; return this._createOpenTagMarkupAndPutListeners(t) + this._createContentMarkup(t, n) + o },
                _createOpenTagMarkupAndPutListeners: function(e) {
                    var t = this._currentElement.props,
                        n = "<" + this._tag;
                    for (var r in t)
                        if (t.hasOwnProperty(r)) {
                            var i = t[r];
                            if (null != i)
                                if (b.hasOwnProperty(r)) o(this._rootNodeID, r, i, e);
                                else {
                                    r === x && (i && (i = this._previousStyleCopy = m({}, t.style)), i = s.createMarkupForStyles(i));
                                    var a = l.createMarkupForProperty(r, i);
                                    a && (n += " " + a)
                                }
                        }
                    if (e.renderToStaticMarkup) return n + ">";
                    var u = l.createMarkupForID(this._rootNodeID);
                    return n + " " + u + ">"
                },
                _createContentMarkup: function(e, t) {
                    var n = "";
                    ("listing" === this._tag || "pre" === this._tag || "textarea" === this._tag) && (n = "\n");
                    var r = this._currentElement.props,
                        o = r.dangerouslySetInnerHTML;
                    if (null != o) { if (null != o.__html) return n + o.__html } else {
                        var i = _[typeof r.children] ? r.children : null,
                            a = null != i ? null : r.children;
                        if (null != i) return n + v(i);
                        if (null != a) { var s = this.mountChildren(a, e, t); return n + s.join("") }
                    }
                    return n
                },
                receiveComponent: function(e, t, n) {
                    var r = this._currentElement;
                    this._currentElement = e, this.updateComponent(t, r, e, n)
                },
                updateComponent: function(e, t, n, o) { r(this._currentElement.props), this._updateDOMProperties(t.props, e), this._updateDOMChildren(t.props, e, o) },
                _updateDOMProperties: function(e, t) {
                    var n, r, i, a = this._currentElement.props;
                    for (n in e)
                        if (!a.hasOwnProperty(n) && e.hasOwnProperty(n))
                            if (n === x) {
                                var s = this._previousStyleCopy;
                                for (r in s) s.hasOwnProperty(r) && (i = i || {}, i[r] = "");
                                this._previousStyleCopy = null
                            } else b.hasOwnProperty(n) ? C(this._rootNodeID, n) : (u.isStandardName[n] || u.isCustomAttribute(n)) && M.deletePropertyByID(this._rootNodeID, n);
                    for (n in a) {
                        var l = a[n],
                            c = n === x ? this._previousStyleCopy : e[n];
                        if (a.hasOwnProperty(n) && l !== c)
                            if (n === x)
                                if (l ? l = this._previousStyleCopy = m({}, l) : this._previousStyleCopy = null, c) { for (r in c) !c.hasOwnProperty(r) || l && l.hasOwnProperty(r) || (i = i || {}, i[r] = ""); for (r in l) l.hasOwnProperty(r) && c[r] !== l[r] && (i = i || {}, i[r] = l[r]) } else i = l;
                        else b.hasOwnProperty(n) ? o(this._rootNodeID, n, l, t) : (u.isStandardName[n] || u.isCustomAttribute(n)) && M.updatePropertyByID(this._rootNodeID, n, l)
                    }
                    i && M.updateStylesByID(this._rootNodeID, i)
                },
                _updateDOMChildren: function(e, t, n) {
                    var r = this._currentElement.props,
                        o = _[typeof e.children] ? e.children : null,
                        i = _[typeof r.children] ? r.children : null,
                        a = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                        s = r.dangerouslySetInnerHTML && r.dangerouslySetInnerHTML.__html,
                        u = null != o ? null : e.children,
                        l = null != i ? null : r.children,
                        c = null != o || null != a,
                        p = null != i || null != s;
                    null != u && null == l ? this.updateChildren(null, t, n) : c && !p && this.updateTextContent(""), null != i ? o !== i && this.updateTextContent("" + i) : null != s ? a !== s && M.updateInnerHTMLByID(this._rootNodeID, s) : null != l && this.updateChildren(l, t, n)
                },
                unmountComponent: function() { this.unmountChildren(), c.deleteAllListeners(this._rootNodeID), p.unmountIDFromEnvironment(this._rootNodeID), this._rootNodeID = null }
            }, h.measureMethods(a, "ReactDOMComponent", { mountComponent: "mountComponent", updateComponent: "updateComponent" }), m(a.prototype, a.Mixin, f.Mixin), a.injection = { injectIDOperations: function(e) { a.BackendIDOperations = M = e } }, t.exports = a
        }, { 11: 11, 12: 12, 128: 128, 147: 147, 148: 148, 154: 154, 166: 166, 29: 29, 33: 33, 40: 40, 6: 6, 75: 75, 76: 76, 80: 80 }],
        49: [function(e, t, n) {
            "use strict";
            var r = e(16),
                o = e(27),
                i = e(32),
                a = e(38),
                s = e(61),
                u = s.createFactory("form"),
                l = a.createClass({ displayName: "ReactDOMForm", tagName: "FORM", mixins: [i, o], render: function() { return u(this.props) }, componentDidMount: function() { this.trapBubbledEvent(r.topLevelTypes.topReset, "reset"), this.trapBubbledEvent(r.topLevelTypes.topSubmit, "submit") } });
            t.exports = l
        }, { 16: 16, 27: 27, 32: 32, 38: 38, 61: 61 }],
        50: [function(e, t, n) {
            "use strict";
            var r = e(6),
                o = e(10),
                i = e(12),
                a = e(75),
                s = e(80),
                u = e(147),
                l = e(159),
                c = { dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.", style: "`style` must be set using `updateStylesByID()`." },
                p = {
                    updatePropertyByID: function(e, t, n) {
                        var r = a.getNode(e);
                        u(!c.hasOwnProperty(t)), null != n ? i.setValueForProperty(r, t, n) : i.deleteValueForProperty(r, t)
                    },
                    deletePropertyByID: function(e, t, n) {
                        var r = a.getNode(e);
                        u(!c.hasOwnProperty(t)), i.deleteValueForProperty(r, t, n)
                    },
                    updateStylesByID: function(e, t) {
                        var n = a.getNode(e);
                        r.setValueForStyles(n, t)
                    },
                    updateInnerHTMLByID: function(e, t) {
                        var n = a.getNode(e);
                        l(n, t)
                    },
                    updateTextContentByID: function(e, t) {
                        var n = a.getNode(e);
                        o.updateTextContent(n, t)
                    },
                    dangerouslyReplaceNodeWithMarkupByID: function(e, t) {
                        var n = a.getNode(e);
                        o.dangerouslyReplaceNodeWithMarkup(n, t)
                    },
                    dangerouslyProcessChildrenUpdates: function(e, t) {
                        for (var n = 0; n < e.length; n++) e[n].parentNode = a.getNode(e[n].parentID);
                        o.processUpdates(e, t)
                    }
                };
            s.measureMethods(p, "ReactDOMIDOperations", { updatePropertyByID: "updatePropertyByID", deletePropertyByID: "deletePropertyByID", updateStylesByID: "updateStylesByID", updateInnerHTMLByID: "updateInnerHTMLByID", updateTextContentByID: "updateTextContentByID", dangerouslyReplaceNodeWithMarkupByID: "dangerouslyReplaceNodeWithMarkupByID", dangerouslyProcessChildrenUpdates: "dangerouslyProcessChildrenUpdates" }), t.exports = p
        }, { 10: 10, 12: 12, 147: 147, 159: 159, 6: 6, 75: 75, 80: 80 }],
        51: [function(e, t, n) {
            "use strict";
            var r = e(16),
                o = e(27),
                i = e(32),
                a = e(38),
                s = e(61),
                u = s.createFactory("iframe"),
                l = a.createClass({ displayName: "ReactDOMIframe", tagName: "IFRAME", mixins: [i, o], render: function() { return u(this.props) }, componentDidMount: function() { this.trapBubbledEvent(r.topLevelTypes.topLoad, "load") } });
            t.exports = l
        }, { 16: 16, 27: 27, 32: 32, 38: 38, 61: 61 }],
        52: [function(e, t, n) {
            "use strict";
            var r = e(16),
                o = e(27),
                i = e(32),
                a = e(38),
                s = e(61),
                u = s.createFactory("img"),
                l = a.createClass({ displayName: "ReactDOMImg", tagName: "IMG", mixins: [i, o], render: function() { return u(this.props) }, componentDidMount: function() { this.trapBubbledEvent(r.topLevelTypes.topLoad, "load"), this.trapBubbledEvent(r.topLevelTypes.topError, "error") } });
            t.exports = l
        }, { 16: 16, 27: 27, 32: 32, 38: 38, 61: 61 }],
        53: [function(e, t, n) {
            "use strict";

            function r() { this.isMounted() && this.forceUpdate() }
            var o = e(2),
                i = e(12),
                a = e(26),
                s = e(32),
                u = e(38),
                l = e(61),
                c = e(75),
                p = e(97),
                d = e(29),
                f = e(147),
                h = l.createFactory("input"),
                m = {},
                v = u.createClass({
                    displayName: "ReactDOMInput",
                    tagName: "INPUT",
                    mixins: [o, a.Mixin, s],
                    getInitialState: function() { var e = this.props.defaultValue; return { initialChecked: this.props.defaultChecked || !1, initialValue: null != e ? e : null } },
                    render: function() {
                        var e = d({}, this.props);
                        e.defaultChecked = null, e.defaultValue = null;
                        var t = a.getValue(this);
                        e.value = null != t ? t : this.state.initialValue;
                        var n = a.getChecked(this);
                        return e.checked = null != n ? n : this.state.initialChecked, e.onChange = this._handleChange, h(e, this.props.children)
                    },
                    componentDidMount: function() {
                        var e = c.getID(this.getDOMNode());
                        m[e] = this
                    },
                    componentWillUnmount: function() {
                        var e = this.getDOMNode(),
                            t = c.getID(e);
                        delete m[t]
                    },
                    componentDidUpdate: function(e, t, n) {
                        var r = this.getDOMNode();
                        null != this.props.checked && i.setValueForProperty(r, "checked", this.props.checked || !1);
                        var o = a.getValue(this);
                        null != o && i.setValueForProperty(r, "value", "" + o)
                    },
                    _handleChange: function(e) {
                        var t, n = a.getOnChange(this);
                        n && (t = n.call(this, e)), p.asap(r, this);
                        var o = this.props.name;
                        if ("radio" === this.props.type && null != o) {
                            for (var i = this.getDOMNode(), s = i; s.parentNode;) s = s.parentNode;
                            for (var u = s.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), l = 0, d = u.length; d > l; l++) {
                                var h = u[l];
                                if (h !== i && h.form === i.form) {
                                    var v = c.getID(h);
                                    f(v);
                                    var g = m[v];
                                    f(g), p.asap(r, g)
                                }
                            }
                        }
                        return t
                    }
                });
            t.exports = v
        }, { 12: 12, 147: 147, 2: 2, 26: 26, 29: 29, 32: 32, 38: 38, 61: 61, 75: 75, 97: 97 }],
        54: [function(e, t, n) {
            "use strict";
            var r = e(32),
                o = e(38),
                i = e(61),
                a = (e(166), i.createFactory("option")),
                s = o.createClass({ displayName: "ReactDOMOption", tagName: "OPTION", mixins: [r], componentWillMount: function() {}, render: function() { return a(this.props, this.props.children) } });
            t.exports = s
        }, { 166: 166, 32: 32, 38: 38, 61: 61 }],
        55: [function(e, t, n) {
            "use strict";

            function r() {
                if (this._pendingUpdate) {
                    this._pendingUpdate = !1;
                    var e = s.getValue(this);
                    null != e && this.isMounted() && i(this, e)
                }
            }

            function o(e, t, n) { if (null == e[t]) return null; if (e.multiple) { if (!Array.isArray(e[t])) return new Error("The `" + t + "` prop supplied to <select> must be an array if `multiple` is true.") } else if (Array.isArray(e[t])) return new Error("The `" + t + "` prop supplied to <select> must be a scalar value if `multiple` is false.") }

            function i(e, t) {
                var n, r, o, i = e.getDOMNode().options;
                if (e.props.multiple) {
                    for (n = {}, r = 0, o = t.length; o > r; r++) n["" + t[r]] = !0;
                    for (r = 0, o = i.length; o > r; r++) {
                        var a = n.hasOwnProperty(i[r].value);
                        i[r].selected !== a && (i[r].selected = a)
                    }
                } else {
                    for (n = "" + t, r = 0, o = i.length; o > r; r++)
                        if (i[r].value === n) return void(i[r].selected = !0);
                    i.length && (i[0].selected = !0)
                }
            }
            var a = e(2),
                s = e(26),
                u = e(32),
                l = e(38),
                c = e(61),
                p = e(97),
                d = e(29),
                f = c.createFactory("select"),
                h = l.createClass({
                    displayName: "ReactDOMSelect",
                    tagName: "SELECT",
                    mixins: [a, s.Mixin, u],
                    propTypes: { defaultValue: o, value: o },
                    render: function() { var e = d({}, this.props); return e.onChange = this._handleChange, e.value = null, f(e, this.props.children) },
                    componentWillMount: function() { this._pendingUpdate = !1 },
                    componentDidMount: function() {
                        var e = s.getValue(this);
                        null != e ? i(this, e) : null != this.props.defaultValue && i(this, this.props.defaultValue)
                    },
                    componentDidUpdate: function(e) {
                        var t = s.getValue(this);
                        null != t ? (this._pendingUpdate = !1, i(this, t)) : !e.multiple != !this.props.multiple && (null != this.props.defaultValue ? i(this, this.props.defaultValue) : i(this, this.props.multiple ? [] : ""))
                    },
                    _handleChange: function(e) { var t, n = s.getOnChange(this); return n && (t = n.call(this, e)), this._pendingUpdate = !0, p.asap(r, this), t }
                });
            t.exports = h
        }, { 2: 2, 26: 26, 29: 29, 32: 32, 38: 38, 61: 61, 97: 97 }],
        56: [function(e, t, n) {
            "use strict";

            function r(e, t, n, r) { return e === n && t === r }

            function o(e) {
                var t = document.selection,
                    n = t.createRange(),
                    r = n.text.length,
                    o = n.duplicate();
                o.moveToElementText(e), o.setEndPoint("EndToStart", n);
                var i = o.text.length,
                    a = i + r;
                return { start: i, end: a }
            }

            function i(e) {
                var t = window.getSelection && window.getSelection();
                if (!t || 0 === t.rangeCount) return null;
                var n = t.anchorNode,
                    o = t.anchorOffset,
                    i = t.focusNode,
                    a = t.focusOffset,
                    s = t.getRangeAt(0),
                    u = r(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
                    l = u ? 0 : s.toString().length,
                    c = s.cloneRange();
                c.selectNodeContents(e), c.setEnd(s.startContainer, s.startOffset);
                var p = r(c.startContainer, c.startOffset, c.endContainer, c.endOffset),
                    d = p ? 0 : c.toString().length,
                    f = d + l,
                    h = document.createRange();
                h.setStart(n, o), h.setEnd(i, a);
                var m = h.collapsed;
                return { start: m ? f : d, end: m ? d : f }
            }

            function a(e, t) { var n, r, o = document.selection.createRange().duplicate(); "undefined" == typeof t.end ? (n = t.start, r = n) : t.start > t.end ? (n = t.end, r = t.start) : (n = t.start, r = t.end), o.moveToElementText(e), o.moveStart("character", n), o.setEndPoint("EndToStart", o), o.moveEnd("character", r - n), o.select() }

            function s(e, t) {
                if (window.getSelection) {
                    var n = window.getSelection(),
                        r = e[c()].length,
                        o = Math.min(t.start, r),
                        i = "undefined" == typeof t.end ? o : Math.min(t.end, r);
                    if (!n.extend && o > i) {
                        var a = i;
                        i = o, o = a
                    }
                    var s = l(e, o),
                        u = l(e, i);
                    if (s && u) {
                        var p = document.createRange();
                        p.setStart(s.node, s.offset), n.removeAllRanges(), o > i ? (n.addRange(p), n.extend(u.node, u.offset)) : (p.setEnd(u.node, u.offset), n.addRange(p))
                    }
                }
            }
            var u = e(22),
                l = e(140),
                c = e(142),
                p = u.canUseDOM && "selection" in document && !("getSelection" in window),
                d = { getOffsets: p ? o : i, setOffsets: p ? a : s };
            t.exports = d
        }, { 140: 140, 142: 142, 22: 22 }],
        57: [function(e, t, n) {
            "use strict";
            var r = e(12),
                o = e(40),
                i = e(48),
                a = e(29),
                s = e(128),
                u = function(e) {};
            a(u.prototype, {
                construct: function(e) { this._currentElement = e, this._stringText = "" + e, this._rootNodeID = null, this._mountIndex = 0 },
                mountComponent: function(e, t, n) { this._rootNodeID = e; var o = s(this._stringText); return t.renderToStaticMarkup ? o : "<span " + r.createMarkupForID(e) + ">" + o + "</span>" },
                receiveComponent: function(e, t) {
                    if (e !== this._currentElement) {
                        this._currentElement = e;
                        var n = "" + e;
                        n !== this._stringText && (this._stringText = n, i.BackendIDOperations.updateTextContentByID(this._rootNodeID, n));

                    }
                },
                unmountComponent: function() { o.unmountIDFromEnvironment(this._rootNodeID) }
            }), t.exports = u
        }, { 12: 12, 128: 128, 29: 29, 40: 40, 48: 48 }],
        58: [function(e, t, n) {
            "use strict";

            function r() { this.isMounted() && this.forceUpdate() }
            var o = e(2),
                i = e(12),
                a = e(26),
                s = e(32),
                u = e(38),
                l = e(61),
                c = e(97),
                p = e(29),
                d = e(147),
                f = (e(166), l.createFactory("textarea")),
                h = u.createClass({
                    displayName: "ReactDOMTextarea",
                    tagName: "TEXTAREA",
                    mixins: [o, a.Mixin, s],
                    getInitialState: function() {
                        var e = this.props.defaultValue,
                            t = this.props.children;
                        null != t && (d(null == e), Array.isArray(t) && (d(t.length <= 1), t = t[0]), e = "" + t), null == e && (e = "");
                        var n = a.getValue(this);
                        return { initialValue: "" + (null != n ? n : e) }
                    },
                    render: function() { var e = p({}, this.props); return d(null == e.dangerouslySetInnerHTML), e.defaultValue = null, e.value = null, e.onChange = this._handleChange, f(e, this.state.initialValue) },
                    componentDidUpdate: function(e, t, n) {
                        var r = a.getValue(this);
                        if (null != r) {
                            var o = this.getDOMNode();
                            i.setValueForProperty(o, "value", "" + r)
                        }
                    },
                    _handleChange: function(e) { var t, n = a.getOnChange(this); return n && (t = n.call(this, e)), c.asap(r, this), t }
                });
            t.exports = h
        }, { 12: 12, 147: 147, 166: 166, 2: 2, 26: 26, 29: 29, 32: 32, 38: 38, 61: 61, 97: 97 }],
        59: [function(e, t, n) {
            "use strict";

            function r() { this.reinitializeTransaction() }
            var o = e(97),
                i = e(113),
                a = e(29),
                s = e(126),
                u = { initialize: s, close: function() { d.isBatchingUpdates = !1 } },
                l = { initialize: s, close: o.flushBatchedUpdates.bind(o) },
                c = [l, u];
            a(r.prototype, i.Mixin, { getTransactionWrappers: function() { return c } });
            var p = new r,
                d = {
                    isBatchingUpdates: !1,
                    batchedUpdates: function(e, t, n, r, o) {
                        var i = d.isBatchingUpdates;
                        d.isBatchingUpdates = !0, i ? e(t, n, r, o) : p.perform(e, null, t, n, r, o)
                    }
                };
            t.exports = d
        }, { 113: 113, 126: 126, 29: 29, 97: 97 }],
        60: [function(e, t, n) {
            "use strict";

            function r(e) { return h.createClass({ tagName: e.toUpperCase(), render: function() { return new P(e, null, null, null, null, this.props) } }) }

            function o() { R.EventEmitter.injectReactEventListener(I), R.EventPluginHub.injectEventPluginOrder(u), R.EventPluginHub.injectInstanceHandle(w), R.EventPluginHub.injectMount(O), R.EventPluginHub.injectEventPluginsByName({ SimpleEventPlugin: L, EnterLeaveEventPlugin: l, ChangeEventPlugin: a, MobileSafariClickEventPlugin: d, SelectEventPlugin: A, BeforeInputEventPlugin: i }), R.NativeComponent.injectGenericComponentClass(g), R.NativeComponent.injectTextComponentClass(N), R.NativeComponent.injectAutoWrapper(r), R.Class.injectMixin(f), R.NativeComponent.injectComponentClasses({ button: y, form: C, iframe: _, img: E, input: x, option: D, select: M, textarea: T, html: F("html"), head: F("head"), body: F("body") }), R.DOMProperty.injectDOMPropertyConfig(p), R.DOMProperty.injectDOMPropertyConfig(U), R.EmptyComponent.injectEmptyComponent("noscript"), R.Updates.injectReconcileTransaction(S), R.Updates.injectBatchingStrategy(v), R.RootIndex.injectCreateReactRootIndex(c.canUseDOM ? s.createReactRootIndex : k.createReactRootIndex), R.Component.injectEnvironment(m), R.DOMComponent.injectIDOperations(b) }
            var i = e(3),
                a = e(8),
                s = e(9),
                u = e(14),
                l = e(15),
                c = e(22),
                p = e(24),
                d = e(28),
                f = e(32),
                h = e(38),
                m = e(40),
                v = e(59),
                g = e(48),
                y = e(47),
                C = e(49),
                E = e(52),
                b = e(50),
                _ = e(51),
                x = e(53),
                D = e(54),
                M = e(55),
                T = e(58),
                N = e(57),
                P = e(61),
                I = e(66),
                R = e(68),
                w = e(70),
                O = e(75),
                S = e(86),
                A = e(99),
                k = e(100),
                L = e(101),
                U = e(98),
                F = e(122);
            t.exports = { inject: o }
        }, { 100: 100, 101: 101, 122: 122, 14: 14, 15: 15, 22: 22, 24: 24, 28: 28, 3: 3, 32: 32, 38: 38, 40: 40, 47: 47, 48: 48, 49: 49, 50: 50, 51: 51, 52: 52, 53: 53, 54: 54, 55: 55, 57: 57, 58: 58, 59: 59, 61: 61, 66: 66, 68: 68, 70: 70, 75: 75, 8: 8, 86: 86, 9: 9, 98: 98, 99: 99 }],
        61: [function(e, t, n) {
            "use strict";
            var r = e(44),
                o = e(45),
                i = e(29),
                a = (e(166), { key: !0, ref: !0 }),
                s = function(e, t, n, r, o, i) { this.type = e, this.key = t, this.ref = n, this._owner = r, this._context = o, this.props = i };
            s.prototype = { _isReactElement: !0 }, s.createElement = function(e, t, n) {
                var i, u = {},
                    l = null,
                    c = null;
                if (null != t) { c = void 0 === t.ref ? null : t.ref, l = void 0 === t.key ? null : "" + t.key; for (i in t) t.hasOwnProperty(i) && !a.hasOwnProperty(i) && (u[i] = t[i]) }
                var p = arguments.length - 2;
                if (1 === p) u.children = n;
                else if (p > 1) {
                    for (var d = Array(p), f = 0; p > f; f++) d[f] = arguments[f + 2];
                    u.children = d
                }
                if (e && e.defaultProps) { var h = e.defaultProps; for (i in h) "undefined" == typeof u[i] && (u[i] = h[i]) }
                return new s(e, l, c, o.current, r.current, u)
            }, s.createFactory = function(e) { var t = s.createElement.bind(null, e); return t.type = e, t }, s.cloneAndReplaceProps = function(e, t) { var n = new s(e.type, e.key, e.ref, e._owner, e._context, t); return n }, s.cloneElement = function(e, t, n) {
                var r, u = i({}, e.props),
                    l = e.key,
                    c = e.ref,
                    p = e._owner;
                if (null != t) { void 0 !== t.ref && (c = t.ref, p = o.current), void 0 !== t.key && (l = "" + t.key); for (r in t) t.hasOwnProperty(r) && !a.hasOwnProperty(r) && (u[r] = t[r]) }
                var d = arguments.length - 2;
                if (1 === d) u.children = n;
                else if (d > 1) {
                    for (var f = Array(d), h = 0; d > h; h++) f[h] = arguments[h + 2];
                    u.children = f
                }
                return new s(e.type, l, c, p, e._context, u)
            }, s.isValidElement = function(e) { var t = !(!e || !e._isReactElement); return t }, t.exports = s
        }, { 166: 166, 29: 29, 44: 44, 45: 45 }],
        62: [function(e, t, n) {
            "use strict";

            function r() { if (y.current) { var e = y.current.getName(); if (e) return " Check the render method of `" + e + "`." } return "" }

            function o(e) { var t = e && e.getPublicInstance(); if (!t) return void 0; var n = t.constructor; return n ? n.displayName || n.name || void 0 : void 0 }

            function i() { var e = y.current; return e && o(e) || void 0 }

            function a(e, t) { e._store.validated || null != e.key || (e._store.validated = !0, u('Each child in an array or iterator should have a unique "key" prop.', e, t)) }

            function s(e, t, n) { D.test(e) && u("Child objects should have non-numeric keys so ordering is preserved.", t, n) }

            function u(e, t, n) {
                var r = i(),
                    a = "string" == typeof n ? n : n.displayName || n.name,
                    s = r || a,
                    u = _[e] || (_[e] = {});
                if (!u.hasOwnProperty(s)) {
                    u[s] = !0;
                    var l = "";
                    if (t && t._owner && t._owner !== y.current) {
                        var c = o(t._owner);
                        l = " It was passed a child from " + c + "."
                    }
                }
            }

            function l(e, t) {
                if (Array.isArray(e))
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        m.isValidElement(r) && a(r, t)
                    } else if (m.isValidElement(e)) e._store.validated = !0;
                    else if (e) {
                    var o = E(e);
                    if (o) {
                        if (o !== e.entries)
                            for (var i, u = o.call(e); !(i = u.next()).done;) m.isValidElement(i.value) && a(i.value, t)
                    } else if ("object" == typeof e) { var l = v.extractIfFragment(e); for (var c in l) l.hasOwnProperty(c) && s(c, l[c], t) }
                }
            }

            function c(e, t, n, o) {
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var a;
                        try { b("function" == typeof t[i]), a = t[i](n, i, e, o) } catch (s) { a = s }
                        a instanceof Error && !(a.message in x) && (x[a.message] = !0, r(this))
                    }
            }

            function p(e, t) {
                var n = t.type,
                    r = "string" == typeof n ? n : n.displayName,
                    o = t._owner ? t._owner.getPublicInstance().constructor.displayName : null,
                    i = e + "|" + r + "|" + o;
                if (!M.hasOwnProperty(i)) {
                    M[i] = !0;
                    var a = "";
                    r && (a = " <" + r + " />");
                    var s = "";
                    o && (s = " The element was created by " + o + ".")
                }
            }

            function d(e, t) { return e !== e ? t !== t : 0 === e && 0 === t ? 1 / e === 1 / t : e === t }

            function f(e) {
                if (e._store) {
                    var t = e._store.originalProps,
                        n = e.props;
                    for (var r in n) n.hasOwnProperty(r) && (t.hasOwnProperty(r) && d(t[r], n[r]) || (p(r, e), t[r] = n[r]))
                }
            }

            function h(e) {
                if (null != e.type) {
                    var t = C.getComponentClassForElement(e),
                        n = t.displayName || t.name;
                    t.propTypes && c(n, t.propTypes, e.props, g.prop), "function" == typeof t.getDefaultProps
                }
            }
            var m = e(61),
                v = e(67),
                g = e(83),
                y = (e(82), e(45)),
                C = e(78),
                E = e(138),
                b = e(147),
                _ = (e(166), {}),
                x = {},
                D = /^\d+$/,
                M = {},
                T = { checkAndWarnForMutatedProps: f, createElement: function(e, t, n) { var r = m.createElement.apply(this, arguments); if (null == r) return r; for (var o = 2; o < arguments.length; o++) l(arguments[o], e); return h(r), r }, createFactory: function(e) { var t = T.createElement.bind(null, e); return t.type = e, t }, cloneElement: function(e, t, n) { for (var r = m.cloneElement.apply(this, arguments), o = 2; o < arguments.length; o++) l(arguments[o], r.type); return h(r), r } };
            t.exports = T
        }, { 138: 138, 147: 147, 166: 166, 45: 45, 61: 61, 67: 67, 78: 78, 82: 82, 83: 83 }],
        63: [function(e, t, n) {
            "use strict";

            function r(e) { c[e] = !0 }

            function o(e) { delete c[e] }

            function i(e) { return !!c[e] }
            var a, s = e(61),
                u = e(71),
                l = e(147),
                c = {},
                p = { injectEmptyComponent: function(e) { a = s.createFactory(e) } },
                d = function() {};
            d.prototype.componentDidMount = function() {
                var e = u.get(this);
                e && r(e._rootNodeID)
            }, d.prototype.componentWillUnmount = function() {
                var e = u.get(this);
                e && o(e._rootNodeID)
            }, d.prototype.render = function() { return l(a), a() };
            var f = s.createElement(d),
                h = { emptyElement: f, injection: p, isNullComponentID: i };
            t.exports = h
        }, { 147: 147, 61: 61, 71: 71 }],
        64: [function(e, t, n) {
            "use strict";
            var r = { guard: function(e, t) { return e } };
            t.exports = r
        }, {}],
        65: [function(e, t, n) {
            "use strict";

            function r(e) { o.enqueueEvents(e), o.processEventQueue() }
            var o = e(18),
                i = {
                    handleTopLevel: function(e, t, n, i) {
                        var a = o.extractEvents(e, t, n, i);
                        r(a)
                    }
                };
            t.exports = i
        }, { 18: 18 }],
        66: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = p.getID(e),
                    n = c.getReactRootIDFromNodeID(t),
                    r = p.findReactContainerForID(n),
                    o = p.getFirstReactDOM(r);
                return o
            }

            function o(e, t) { this.topLevelType = e, this.nativeEvent = t, this.ancestors = [] }

            function i(e) {
                for (var t = p.getFirstReactDOM(h(e.nativeEvent)) || window, n = t; n;) e.ancestors.push(n), n = r(n);
                for (var o = 0, i = e.ancestors.length; i > o; o++) {
                    t = e.ancestors[o];
                    var a = p.getID(t) || "";
                    v._handleTopLevel(e.topLevelType, t, a, e.nativeEvent)
                }
            }

            function a(e) {
                var t = m(window);
                e(t)
            }
            var s = e(17),
                u = e(22),
                l = e(30),
                c = e(70),
                p = e(75),
                d = e(97),
                f = e(29),
                h = e(137),
                m = e(143);
            f(o.prototype, { destructor: function() { this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0 } }), l.addPoolingTo(o, l.twoArgumentPooler);
            var v = {
                _enabled: !0,
                _handleTopLevel: null,
                WINDOW_HANDLE: u.canUseDOM ? window : null,
                setHandleTopLevel: function(e) { v._handleTopLevel = e },
                setEnabled: function(e) { v._enabled = !!e },
                isEnabled: function() { return v._enabled },
                trapBubbledEvent: function(e, t, n) { var r = n; return r ? s.listen(r, t, v.dispatchEvent.bind(null, e)) : null },
                trapCapturedEvent: function(e, t, n) { var r = n; return r ? s.capture(r, t, v.dispatchEvent.bind(null, e)) : null },
                monitorScrollValue: function(e) {
                    var t = a.bind(null, e);
                    s.listen(window, "scroll", t)
                },
                dispatchEvent: function(e, t) { if (v._enabled) { var n = o.getPooled(e, t); try { d.batchedUpdates(i, n) } finally { o.release(n) } } }
            };
            t.exports = v
        }, { 137: 137, 143: 143, 17: 17, 22: 22, 29: 29, 30: 30, 70: 70, 75: 75, 97: 97 }],
        67: [function(e, t, n) {
            "use strict";
            var r = (e(61), e(166), { create: function(e) { return e }, extract: function(e) { return e }, extractIfFragment: function(e) { return e } });
            t.exports = r
        }, { 166: 166, 61: 61 }],
        68: [function(e, t, n) {
            "use strict";
            var r = e(11),
                o = e(18),
                i = e(41),
                a = e(38),
                s = e(63),
                u = e(33),
                l = e(78),
                c = e(48),
                p = e(80),
                d = e(89),
                f = e(97),
                h = { Component: i.injection, Class: a.injection, DOMComponent: c.injection, DOMProperty: r.injection, EmptyComponent: s.injection, EventPluginHub: o.injection, EventEmitter: u.injection, NativeComponent: l.injection, Perf: p.injection, RootIndex: d.injection, Updates: f.injection };
            t.exports = h
        }, { 11: 11, 18: 18, 33: 33, 38: 38, 41: 41, 48: 48, 63: 63, 78: 78, 80: 80, 89: 89, 97: 97 }],
        69: [function(e, t, n) {
            "use strict";

            function r(e) { return i(document.documentElement, e) }
            var o = e(56),
                i = e(120),
                a = e(131),
                s = e(133),
                u = {
                    hasSelectionCapabilities: function(e) { return e && ("INPUT" === e.nodeName && "text" === e.type || "TEXTAREA" === e.nodeName || "true" === e.contentEditable) },
                    getSelectionInformation: function() { var e = s(); return { focusedElem: e, selectionRange: u.hasSelectionCapabilities(e) ? u.getSelection(e) : null } },
                    restoreSelection: function(e) {
                        var t = s(),
                            n = e.focusedElem,
                            o = e.selectionRange;
                        t !== n && r(n) && (u.hasSelectionCapabilities(n) && u.setSelection(n, o), a(n))
                    },
                    getSelection: function(e) {
                        var t;
                        if ("selectionStart" in e) t = { start: e.selectionStart, end: e.selectionEnd };
                        else if (document.selection && "INPUT" === e.nodeName) {
                            var n = document.selection.createRange();
                            n.parentElement() === e && (t = { start: -n.moveStart("character", -e.value.length), end: -n.moveEnd("character", -e.value.length) })
                        } else t = o.getOffsets(e);
                        return t || { start: 0, end: 0 }
                    },
                    setSelection: function(e, t) {
                        var n = t.start,
                            r = t.end;
                        if ("undefined" == typeof r && (r = n), "selectionStart" in e) e.selectionStart = n, e.selectionEnd = Math.min(r, e.value.length);
                        else if (document.selection && "INPUT" === e.nodeName) {
                            var i = e.createTextRange();
                            i.collapse(!0), i.moveStart("character", n), i.moveEnd("character", r - n), i.select()
                        } else o.setOffsets(e, t)
                    }
                };
            t.exports = u
        }, { 120: 120, 131: 131, 133: 133, 56: 56 }],
        70: [function(e, t, n) {
            "use strict";

            function r(e) { return f + e.toString(36) }

            function o(e, t) { return e.charAt(t) === f || t === e.length }

            function i(e) { return "" === e || e.charAt(0) === f && e.charAt(e.length - 1) !== f }

            function a(e, t) { return 0 === t.indexOf(e) && o(t, e.length) }

            function s(e) { return e ? e.substr(0, e.lastIndexOf(f)) : "" }

            function u(e, t) { if (d(i(e) && i(t)), d(a(e, t)), e === t) return e; var n, r = e.length + h; for (n = r; n < t.length && !o(t, n); n++); return t.substr(0, n) }

            function l(e, t) {
                var n = Math.min(e.length, t.length);
                if (0 === n) return "";
                for (var r = 0, a = 0; n >= a; a++)
                    if (o(e, a) && o(t, a)) r = a;
                    else if (e.charAt(a) !== t.charAt(a)) break;
                var s = e.substr(0, r);
                return d(i(s)), s
            }

            function c(e, t, n, r, o, i) {
                e = e || "", t = t || "", d(e !== t);
                var l = a(t, e);
                d(l || a(e, t));
                for (var c = 0, p = l ? s : u, f = e;; f = p(f, t)) {
                    var h;
                    if (o && f === e || i && f === t || (h = n(f, l, r)), h === !1 || f === t) break;
                    d(c++ < m)
                }
            }
            var p = e(89),
                d = e(147),
                f = ".",
                h = f.length,
                m = 100,
                v = {
                    createReactRootID: function() { return r(p.createReactRootIndex()) },
                    createReactID: function(e, t) { return e + t },
                    getReactRootIDFromNodeID: function(e) { if (e && e.charAt(0) === f && e.length > 1) { var t = e.indexOf(f, 1); return t > -1 ? e.substr(0, t) : e } return null },
                    traverseEnterLeave: function(e, t, n, r, o) {
                        var i = l(e, t);
                        i !== e && c(e, i, n, r, !1, !0), i !== t && c(i, t, n, o, !0, !1)
                    },
                    traverseTwoPhase: function(e, t, n) { e && (c("", e, t, n, !0, !1), c(e, "", t, n, !1, !0)) },
                    traverseAncestors: function(e, t, n) { c("", e, t, n, !0, !1) },
                    _getFirstCommonAncestorID: l,
                    _getNextDescendantID: u,
                    isAncestorIDOf: a,
                    SEPARATOR: f
                };
            t.exports = v
        }, { 147: 147, 89: 89 }],
        71: [function(e, t, n) {
            "use strict";
            var r = { remove: function(e) { e._reactInternalInstance = void 0 }, get: function(e) { return e._reactInternalInstance }, has: function(e) { return void 0 !== e._reactInternalInstance }, set: function(e, t) { e._reactInternalInstance = t } };
            t.exports = r
        }, {}],
        72: [function(e, t, n) {
            "use strict";
            var r = { currentlyMountingInstance: null, currentlyUnmountingInstance: null };
            t.exports = r
        }, {}],
        73: [function(e, t, n) {
            "use strict";

            function r(e, t) { this.value = e, this.requestChange = t }

            function o(e) { var t = { value: "undefined" == typeof e ? i.PropTypes.any.isRequired : e.isRequired, requestChange: i.PropTypes.func.isRequired }; return i.PropTypes.shape(t) }
            var i = e(31);
            r.PropTypes = { link: o }, t.exports = r
        }, { 31: 31 }],
        74: [function(e, t, n) {
            "use strict";
            var r = e(116),
                o = {
                    CHECKSUM_ATTR_NAME: "data-react-checksum",
                    addChecksumToMarkup: function(e) { var t = r(e); return e.replace(">", " " + o.CHECKSUM_ATTR_NAME + '="' + t + '">') },
                    canReuseMarkup: function(e, t) {
                        var n = t.getAttribute(o.CHECKSUM_ATTR_NAME);
                        n = n && parseInt(n, 10);
                        var i = r(e);
                        return i === n
                    }
                };
            t.exports = o
        }, { 116: 116 }],
        75: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = Math.min(e.length, t.length), r = 0; n > r; r++)
                    if (e.charAt(r) !== t.charAt(r)) return r;
                return e.length === t.length ? -1 : n
            }

            function o(e) { var t = I(e); return t && K.getID(t) }

            function i(e) {
                var t = a(e);
                if (t)
                    if (L.hasOwnProperty(t)) {
                        var n = L[t];
                        n !== e && (w(!c(n, t)), L[t] = e)
                    } else L[t] = e;
                return t
            }

            function a(e) { return e && e.getAttribute && e.getAttribute(k) || "" }

            function s(e, t) {
                var n = a(e);
                n !== t && delete L[n], e.setAttribute(k, t), L[t] = e
            }

            function u(e) { return L.hasOwnProperty(e) && c(L[e], e) || (L[e] = K.findReactNodeByID(e)), L[e] }

            function l(e) { var t = b.get(e)._rootNodeID; return C.isNullComponentID(t) ? null : (L.hasOwnProperty(t) && c(L[t], t) || (L[t] = K.findReactNodeByID(t)), L[t]) }

            function c(e, t) { if (e) { w(a(e) === t); var n = K.findReactContainerForID(t); if (n && P(n, e)) return !0 } return !1 }

            function p(e) { delete L[e] }

            function d(e) { var t = L[e]; return t && c(t, e) ? void(W = t) : !1 }

            function f(e) { W = null, E.traverseAncestors(e, d); var t = W; return W = null, t }

            function h(e, t, n, r, o) {
                var i = D.mountComponent(e, t, r, N);
                e._isTopLevel = !0, K._mountImageIntoNode(i, n, o)
            }

            function m(e, t, n, r) {
                var o = T.ReactReconcileTransaction.getPooled();
                o.perform(h, null, e, t, n, o, r), T.ReactReconcileTransaction.release(o)
            }
            var v = e(11),
                g = e(33),
                y = (e(45), e(61)),
                C = (e(62), e(63)),
                E = e(70),
                b = e(71),
                _ = e(74),
                x = e(80),
                D = e(87),
                M = e(96),
                T = e(97),
                N = e(127),
                P = e(120),
                I = e(141),
                R = e(146),
                w = e(147),
                O = e(159),
                S = e(162),
                A = (e(166), E.SEPARATOR),
                k = v.ID_ATTRIBUTE_NAME,
                L = {},
                U = 1,
                F = 9,
                B = {},
                j = {},
                V = [],
                W = null,
                K = {
                    _instancesByReactRootID: B,
                    scrollMonitor: function(e, t) { t() },
                    _updateRootComponent: function(e, t, n, r) { return K.scrollMonitor(n, function() { M.enqueueElementInternal(e, t), r && M.enqueueCallbackInternal(e, r) }), e },
                    _registerComponent: function(e, t) { w(t && (t.nodeType === U || t.nodeType === F)), g.ensureScrollValueMonitoring(); var n = K.registerContainer(t); return B[n] = e, n },
                    _renderNewRootComponent: function(e, t, n) {
                        var r = R(e, null),
                            o = K._registerComponent(r, t);
                        return T.batchedUpdates(m, r, o, t, n), r
                    },
                    render: function(e, t, n) {
                        w(y.isValidElement(e));
                        var r = B[o(t)];
                        if (r) {
                            var i = r._currentElement;
                            if (S(i, e)) return K._updateRootComponent(r, e, t, n).getPublicInstance();
                            K.unmountComponentAtNode(t)
                        }
                        var a = I(t),
                            s = a && K.isRenderedByReact(a),
                            u = s && !r,
                            l = K._renderNewRootComponent(e, t, u).getPublicInstance();
                        return n && n.call(l), l
                    },
                    constructAndRenderComponent: function(e, t, n) { var r = y.createElement(e, t); return K.render(r, n) },
                    constructAndRenderComponentByID: function(e, t, n) { var r = document.getElementById(n); return w(r), K.constructAndRenderComponent(e, t, r) },
                    registerContainer: function(e) { var t = o(e); return t && (t = E.getReactRootIDFromNodeID(t)), t || (t = E.createReactRootID()), j[t] = e, t },
                    unmountComponentAtNode: function(e) {
                        w(e && (e.nodeType === U || e.nodeType === F));
                        var t = o(e),
                            n = B[t];
                        return n ? (K.unmountComponentFromNode(n, e), delete B[t], delete j[t], !0) : !1
                    },
                    unmountComponentFromNode: function(e, t) { for (D.unmountComponent(e), t.nodeType === F && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild) },
                    findReactContainerForID: function(e) {
                        var t = E.getReactRootIDFromNodeID(e),
                            n = j[t];
                        return n
                    },
                    findReactNodeByID: function(e) { var t = K.findReactContainerForID(e); return K.findComponentRoot(t, e) },
                    isRenderedByReact: function(e) { if (1 !== e.nodeType) return !1; var t = K.getID(e); return t ? t.charAt(0) === A : !1 },
                    getFirstReactDOM: function(e) {
                        for (var t = e; t && t.parentNode !== t;) {
                            if (K.isRenderedByReact(t)) return t;
                            t = t.parentNode
                        }
                        return null
                    },
                    findComponentRoot: function(e, t) {
                        var n = V,
                            r = 0,
                            o = f(t) || e;
                        for (n[0] = o.firstChild, n.length = 1; r < n.length;) {
                            for (var i, a = n[r++]; a;) {
                                var s = K.getID(a);
                                s ? t === s ? i = a : E.isAncestorIDOf(s, t) && (n.length = r = 0, n.push(a.firstChild)) : n.push(a.firstChild), a = a.nextSibling
                            }
                            if (i) return n.length = 0, i
                        }
                        n.length = 0, w(!1)
                    },
                    _mountImageIntoNode: function(e, t, n) {
                        if (w(t && (t.nodeType === U || t.nodeType === F)), n) {
                            var o = I(t);
                            if (_.canReuseMarkup(e, o)) return;
                            var i = o.getAttribute(_.CHECKSUM_ATTR_NAME);
                            o.removeAttribute(_.CHECKSUM_ATTR_NAME);
                            var a = o.outerHTML;
                            o.setAttribute(_.CHECKSUM_ATTR_NAME, i);
                            var s = r(e, a);
                            " (client) " + e.substring(s - 20, s + 20) + "\n (server) " + a.substring(s - 20, s + 20), w(t.nodeType !== F)
                        }
                        w(t.nodeType !== F), O(t, e)
                    },
                    getReactRootID: o,
                    getID: i,
                    setID: s,
                    getNode: u,
                    getNodeFromInstance: l,
                    purgeID: p
                };
            x.measureMethods(K, "ReactMount", { _renderNewRootComponent: "_renderNewRootComponent", _mountImageIntoNode: "_mountImageIntoNode" }), t.exports = K
        }, { 11: 11, 120: 120, 127: 127, 141: 141, 146: 146, 147: 147, 159: 159, 162: 162, 166: 166, 33: 33, 45: 45, 61: 61, 62: 62, 63: 63, 70: 70, 71: 71, 74: 74, 80: 80, 87: 87, 96: 96, 97: 97 }],
        76: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { h.push({ parentID: e, parentNode: null, type: c.INSERT_MARKUP, markupIndex: m.push(t) - 1, textContent: null, fromIndex: null, toIndex: n }) }

            function o(e, t, n) { h.push({ parentID: e, parentNode: null, type: c.MOVE_EXISTING, markupIndex: null, textContent: null, fromIndex: t, toIndex: n }) }

            function i(e, t) { h.push({ parentID: e, parentNode: null, type: c.REMOVE_NODE, markupIndex: null, textContent: null, fromIndex: t, toIndex: null }) }

            function a(e, t) { h.push({ parentID: e, parentNode: null, type: c.TEXT_CONTENT, markupIndex: null, textContent: t, fromIndex: null, toIndex: null }) }

            function s() { h.length && (l.processChildrenUpdates(h, m), u()) }

            function u() { h.length = 0, m.length = 0 }
            var l = e(41),
                c = e(77),
                p = e(87),
                d = e(36),
                f = 0,
                h = [],
                m = [],
                v = {
                    Mixin: {
                        mountChildren: function(e, t, n) {
                            var r = d.instantiateChildren(e, t, n);
                            this._renderedChildren = r;
                            var o = [],
                                i = 0;
                            for (var a in r)
                                if (r.hasOwnProperty(a)) {
                                    var s = r[a],
                                        u = this._rootNodeID + a,
                                        l = p.mountComponent(s, u, t, n);
                                    s._mountIndex = i, o.push(l), i++
                                }
                            return o
                        },
                        updateTextContent: function(e) {
                            f++;
                            var t = !0;
                            try {
                                var n = this._renderedChildren;
                                d.unmountChildren(n);
                                for (var r in n) n.hasOwnProperty(r) && this._unmountChildByName(n[r], r);
                                this.setTextContent(e), t = !1
                            } finally { f--, f || (t ? u() : s()) }
                        },
                        updateChildren: function(e, t, n) { f++; var r = !0; try { this._updateChildren(e, t, n), r = !1 } finally { f--, f || (r ? u() : s()) } },
                        _updateChildren: function(e, t, n) {
                            var r = this._renderedChildren,
                                o = d.updateChildren(r, e, t, n);
                            if (this._renderedChildren = o, o || r) {
                                var i, a = 0,
                                    s = 0;
                                for (i in o)
                                    if (o.hasOwnProperty(i)) {
                                        var u = r && r[i],
                                            l = o[i];
                                        u === l ? (this.moveChild(u, s, a), a = Math.max(u._mountIndex, a), u._mountIndex = s) : (u && (a = Math.max(u._mountIndex, a), this._unmountChildByName(u, i)), this._mountChildByNameAtIndex(l, i, s, t, n)), s++
                                    }
                                for (i in r) !r.hasOwnProperty(i) || o && o.hasOwnProperty(i) || this._unmountChildByName(r[i], i)
                            }
                        },
                        unmountChildren: function() {
                            var e = this._renderedChildren;
                            d.unmountChildren(e), this._renderedChildren = null
                        },
                        moveChild: function(e, t, n) { e._mountIndex < n && o(this._rootNodeID, e._mountIndex, t) },
                        createChild: function(e, t) { r(this._rootNodeID, t, e._mountIndex) },
                        removeChild: function(e) { i(this._rootNodeID, e._mountIndex) },
                        setTextContent: function(e) { a(this._rootNodeID, e) },
                        _mountChildByNameAtIndex: function(e, t, n, r, o) {
                            var i = this._rootNodeID + t,
                                a = p.mountComponent(e, i, r, o);
                            e._mountIndex = n, this.createChild(e, a)
                        },
                        _unmountChildByName: function(e, t) { this.removeChild(e), e._mountIndex = null }
                    }
                };
            t.exports = v
        }, { 36: 36, 41: 41, 77: 77, 87: 87 }],
        77: [function(e, t, n) {
            "use strict";
            var r = e(153),
                o = r({ INSERT_MARKUP: null, MOVE_EXISTING: null, REMOVE_NODE: null, TEXT_CONTENT: null });
            t.exports = o
        }, { 153: 153 }],
        78: [function(e, t, n) {
            "use strict";

            function r(e) {
                if ("function" == typeof e.type) return e.type;
                var t = e.type,
                    n = p[t];
                return null == n && (p[t] = n = l(t)), n
            }

            function o(e) { return u(c), new c(e.type, e.props) }

            function i(e) { return new d(e) }

            function a(e) { return e instanceof d }
            var s = e(29),
                u = e(147),
                l = null,
                c = null,
                p = {},
                d = null,
                f = { injectGenericComponentClass: function(e) { c = e }, injectTextComponentClass: function(e) { d = e }, injectComponentClasses: function(e) { s(p, e) }, injectAutoWrapper: function(e) { l = e } },
                h = { getComponentClassForElement: r, createInternalComponent: o, createInstanceForText: i, isTextComponent: a, injection: f };
            t.exports = h
        }, { 147: 147, 29: 29 }],
        79: [function(e, t, n) {
            "use strict";
            var r = e(147),
                o = { isValidOwner: function(e) { return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef) }, addComponentAsRefTo: function(e, t, n) { r(o.isValidOwner(n)), n.attachRef(t, e) }, removeComponentAsRefFrom: function(e, t, n) { r(o.isValidOwner(n)), n.getPublicInstance().refs[t] === e.getPublicInstance() && n.detachRef(t) } };
            t.exports = o
        }, { 147: 147 }],
        80: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { return n }
            var o = { enableMeasure: !1, storedMeasure: r, measureMethods: function(e, t, n) {}, measure: function(e, t, n) { return n }, injection: { injectMeasure: function(e) { o.storedMeasure = e } } };
            t.exports = o
        }, {}],
        81: [function(e, t, n) {
            "use strict";

            function r(e) { return function(t, n, r) { t[n] = t.hasOwnProperty(n) ? e(t[n], r) : r } }

            function o(e, t) {
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var r = l[n];
                        r && l.hasOwnProperty(n) ? r(e, n, t[n]) : e.hasOwnProperty(n) || (e[n] = t[n])
                    }
                return e
            }
            var i = e(29),
                a = e(126),
                s = e(152),
                u = r(function(e, t) { return i({}, t, e) }),
                l = { children: a, className: r(s), style: u },
                c = { mergeProps: function(e, t) { return o(i({}, e), t) } };
            t.exports = c
        }, { 126: 126, 152: 152, 29: 29 }],
        82: [function(e, t, n) {
            "use strict";
            var r = {};
            t.exports = r
        }, {}],
        83: [function(e, t, n) {
            "use strict";
            var r = e(153),
                o = r({ prop: null, context: null, childContext: null });
            t.exports = o
        }, { 153: 153 }],
        84: [function(e, t, n) {
            "use strict";

            function r(e) {
                function t(t, n, r, o, i) { if (o = o || b, null == n[r]) { var a = C[i]; return t ? new Error("Required " + a + " `" + r + "` was not specified in " + ("`" + o + "`.")) : null } return e(n, r, o, i) }
                var n = t.bind(null, !1);
                return n.isRequired = t.bind(null, !0), n
            }

            function o(e) {
                function t(t, n, r, o) {
                    var i = t[n],
                        a = m(i);
                    if (a !== e) {
                        var s = C[o],
                            u = v(i);
                        return new Error("Invalid " + s + " `" + n + "` of type `" + u + "` " + ("supplied to `" + r + "`, expected `" + e + "`."))
                    }
                    return null
                }
                return r(t)
            }

            function i() { return r(E.thatReturns(null)) }

            function a(e) {
                function t(t, n, r, o) {
                    var i = t[n];
                    if (!Array.isArray(i)) {
                        var a = C[o],
                            s = m(i);
                        return new Error("Invalid " + a + " `" + n + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected an array."))
                    }
                    for (var u = 0; u < i.length; u++) { var l = e(i, u, r, o); if (l instanceof Error) return l }
                    return null
                }
                return r(t)
            }

            function s() {
                function e(e, t, n, r) { if (!g.isValidElement(e[t])) { var o = C[r]; return new Error("Invalid " + o + " `" + t + "` supplied to " + ("`" + n + "`, expected a ReactElement.")) } return null }
                return r(e)
            }

            function u(e) {
                function t(t, n, r, o) {
                    if (!(t[n] instanceof e)) {
                        var i = C[o],
                            a = e.name || b;
                        return new Error("Invalid " + i + " `" + n + "` supplied to " + ("`" + r + "`, expected instance of `" + a + "`."))
                    }
                    return null
                }
                return r(t)
            }

            function l(e) {
                function t(t, n, r, o) {
                    for (var i = t[n], a = 0; a < e.length; a++)
                        if (i === e[a]) return null;
                    var s = C[o],
                        u = JSON.stringify(e);
                    return new Error("Invalid " + s + " `" + n + "` of value `" + i + "` " + ("supplied to `" + r + "`, expected one of " + u + "."))
                }
                return r(t)
            }

            function c(e) {
                function t(t, n, r, o) {
                    var i = t[n],
                        a = m(i);
                    if ("object" !== a) { var s = C[o]; return new Error("Invalid " + s + " `" + n + "` of type " + ("`" + a + "` supplied to `" + r + "`, expected an object.")) }
                    for (var u in i)
                        if (i.hasOwnProperty(u)) { var l = e(i, u, r, o); if (l instanceof Error) return l }
                    return null
                }
                return r(t)
            }

            function p(e) {
                function t(t, n, r, o) { for (var i = 0; i < e.length; i++) { var a = e[i]; if (null == a(t, n, r, o)) return null } var s = C[o]; return new Error("Invalid " + s + " `" + n + "` supplied to " + ("`" + r + "`.")) }
                return r(t)
            }

            function d() {
                function e(e, t, n, r) { if (!h(e[t])) { var o = C[r]; return new Error("Invalid " + o + " `" + t + "` supplied to " + ("`" + n + "`, expected a ReactNode.")) } return null }
                return r(e)
            }

            function f(e) {
                function t(t, n, r, o) {
                    var i = t[n],
                        a = m(i);
                    if ("object" !== a) { var s = C[o]; return new Error("Invalid " + s + " `" + n + "` of type `" + a + "` " + ("supplied to `" + r + "`, expected `object`.")) }
                    for (var u in e) { var l = e[u]; if (l) { var c = l(i, u, r, o); if (c) return c } }
                    return null
                }
                return r(t)
            }

            function h(e) {
                switch (typeof e) {
                    case "number":
                    case "string":
                    case "undefined":
                        return !0;
                    case "boolean":
                        return !e;
                    case "object":
                        if (Array.isArray(e)) return e.every(h);
                        if (null === e || g.isValidElement(e)) return !0;
                        e = y.extractIfFragment(e);
                        for (var t in e)
                            if (!h(e[t])) return !1;
                        return !0;
                    default:
                        return !1
                }
            }

            function m(e) { var t = typeof e; return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : t }

            function v(e) { var t = m(e); if ("object" === t) { if (e instanceof Date) return "date"; if (e instanceof RegExp) return "regexp" } return t }
            var g = e(61),
                y = e(67),
                C = e(82),
                E = e(126),
                b = "<<anonymous>>",
                _ = s(),
                x = d(),
                D = { array: o("array"), bool: o("boolean"), func: o("function"), number: o("number"), object: o("object"), string: o("string"), any: i(), arrayOf: a, element: _, instanceOf: u, node: x, objectOf: c, oneOf: l, oneOfType: p, shape: f };
            t.exports = D
        }, { 126: 126, 61: 61, 67: 67, 82: 82 }],
        85: [function(e, t, n) {
            "use strict";

            function r() { this.listenersToPut = [] }
            var o = e(30),
                i = e(33),
                a = e(29);
            a(r.prototype, {
                enqueuePutListener: function(e, t, n) { this.listenersToPut.push({ rootNodeID: e, propKey: t, propValue: n }) },
                putListeners: function() {
                    for (var e = 0; e < this.listenersToPut.length; e++) {
                        var t = this.listenersToPut[e];
                        i.putListener(t.rootNodeID, t.propKey, t.propValue)
                    }
                },
                reset: function() { this.listenersToPut.length = 0 },
                destructor: function() { this.reset() }
            }), o.addPoolingTo(r), t.exports = r
        }, { 29: 29, 30: 30, 33: 33 }],
        86: [function(e, t, n) {
            "use strict";

            function r() { this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = o.getPooled(null), this.putListenerQueue = u.getPooled() }
            var o = e(7),
                i = e(30),
                a = e(33),
                s = e(69),
                u = e(85),
                l = e(113),
                c = e(29),
                p = { initialize: s.getSelectionInformation, close: s.restoreSelection },
                d = { initialize: function() { var e = a.isEnabled(); return a.setEnabled(!1), e }, close: function(e) { a.setEnabled(e) } },
                f = { initialize: function() { this.reactMountReady.reset() }, close: function() { this.reactMountReady.notifyAll() } },
                h = { initialize: function() { this.putListenerQueue.reset() }, close: function() { this.putListenerQueue.putListeners() } },
                m = [h, p, d, f],
                v = { getTransactionWrappers: function() { return m }, getReactMountReady: function() { return this.reactMountReady }, getPutListenerQueue: function() { return this.putListenerQueue }, destructor: function() { o.release(this.reactMountReady), this.reactMountReady = null, u.release(this.putListenerQueue), this.putListenerQueue = null } };
            c(r.prototype, l.Mixin, v), i.addPoolingTo(r), t.exports = r
        }, { 113: 113, 29: 29, 30: 30, 33: 33, 69: 69, 7: 7, 85: 85 }],
        87: [function(e, t, n) {
            "use strict";

            function r() { o.attachRefs(this, this._currentElement) }
            var o = e(88),
                i = (e(62), {
                    mountComponent: function(e, t, n, o) { var i = e.mountComponent(t, n, o); return n.getReactMountReady().enqueue(r, e), i },
                    unmountComponent: function(e) { o.detachRefs(e, e._currentElement), e.unmountComponent() },
                    receiveComponent: function(e, t, n, i) {
                        var a = e._currentElement;
                        if (t !== a || null == t._owner) {
                            var s = o.shouldUpdateRefs(a, t);
                            s && o.detachRefs(e, a), e.receiveComponent(t, n, i), s && n.getReactMountReady().enqueue(r, e)
                        }
                    },
                    performUpdateIfNecessary: function(e, t) { e.performUpdateIfNecessary(t) }
                });
            t.exports = i
        }, { 62: 62, 88: 88 }],
        88: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { "function" == typeof e ? e(t.getPublicInstance()) : i.addComponentAsRefTo(t, e, n) }

            function o(e, t, n) { "function" == typeof e ? e(null) : i.removeComponentAsRefFrom(t, e, n) }
            var i = e(79),
                a = {};
            a.attachRefs = function(e, t) {
                var n = t.ref;
                null != n && r(n, e, t._owner)
            }, a.shouldUpdateRefs = function(e, t) { return t._owner !== e._owner || t.ref !== e.ref }, a.detachRefs = function(e, t) {
                var n = t.ref;
                null != n && o(n, e, t._owner)
            }, t.exports = a
        }, { 79: 79 }],
        89: [function(e, t, n) {
            "use strict";
            var r = { injectCreateReactRootIndex: function(e) { o.createReactRootIndex = e } },
                o = { createReactRootIndex: null, injection: r };
            t.exports = o
        }, {}],
        90: [function(e, t, n) {
            "use strict";

            function r(e) {
                p(i.isValidElement(e));
                var t;
                try {
                    var n = a.createReactRootID();
                    return t = u.getPooled(!1), t.perform(function() {
                        var r = c(e, null),
                            o = r.mountComponent(n, t, l);
                        return s.addChecksumToMarkup(o)
                    }, null)
                } finally { u.release(t) }
            }

            function o(e) { p(i.isValidElement(e)); var t; try { var n = a.createReactRootID(); return t = u.getPooled(!0), t.perform(function() { var r = c(e, null); return r.mountComponent(n, t, l) }, null) } finally { u.release(t) } }
            var i = e(61),
                a = e(70),
                s = e(74),
                u = e(91),
                l = e(127),
                c = e(146),
                p = e(147);
            t.exports = { renderToString: r, renderToStaticMarkup: o }
        }, { 127: 127, 146: 146, 147: 147, 61: 61, 70: 70, 74: 74, 91: 91 }],
        91: [function(e, t, n) {
            "use strict";

            function r(e) { this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.reactMountReady = i.getPooled(null), this.putListenerQueue = a.getPooled() }
            var o = e(30),
                i = e(7),
                a = e(85),
                s = e(113),
                u = e(29),
                l = e(126),
                c = { initialize: function() { this.reactMountReady.reset() }, close: l },
                p = { initialize: function() { this.putListenerQueue.reset() }, close: l },
                d = [p, c],
                f = { getTransactionWrappers: function() { return d }, getReactMountReady: function() { return this.reactMountReady }, getPutListenerQueue: function() { return this.putListenerQueue }, destructor: function() { i.release(this.reactMountReady), this.reactMountReady = null, a.release(this.putListenerQueue), this.putListenerQueue = null } };
            u(r.prototype, s.Mixin, f), o.addPoolingTo(r), t.exports = r
        }, { 113: 113, 126: 126, 29: 29, 30: 30, 7: 7, 85: 85 }],
        92: [function(e, t, n) {
            "use strict";

            function r(e, t) { var n = {}; return function(r) { n[t] = r, e.setState(n) } }
            var o = {
                createStateSetter: function(e, t) {
                    return function(n, r, o, i, a, s) {
                        var u = t.call(e, n, r, o, i, a, s);
                        u && e.setState(u)
                    }
                },
                createStateKeySetter: function(e, t) { var n = e.__keySetters || (e.__keySetters = {}); return n[t] || (n[t] = r(e, t)) }
            };
            o.Mixin = { createStateSetter: function(e) { return o.createStateSetter(this, e) }, createStateKeySetter: function(e) { return o.createStateKeySetter(this, e) } }, t.exports = o
        }, {}],
        93: [function(e, t, n) {
            "use strict";
            var r = e(37),
                o = e(67),
                i = {
                    getChildMapping: function(e) { return e ? o.extract(r.map(e, function(e) { return e })) : e },
                    mergeChildMappings: function(e, t) {
                        function n(n) { return t.hasOwnProperty(n) ? t[n] : e[n] }
                        e = e || {}, t = t || {};
                        var r = {},
                            o = [];
                        for (var i in e) t.hasOwnProperty(i) ? o.length && (r[i] = o, o = []) : o.push(i);
                        var a, s = {};
                        for (var u in t) {
                            if (r.hasOwnProperty(u))
                                for (a = 0; a < r[u].length; a++) {
                                    var l = r[u][a];
                                    s[r[u][a]] = n(l)
                                }
                            s[u] = n(u)
                        }
                        for (a = 0; a < o.length; a++) s[o[a]] = n(o[a]);
                        return s
                    }
                };
            t.exports = i
        }, { 37: 37, 67: 67 }],
        94: [function(e, t, n) {
            "use strict";

            function r() {
                var e = document.createElement("div"),
                    t = e.style;
                "AnimationEvent" in window || delete s.animationend.animation, "TransitionEvent" in window || delete s.transitionend.transition;
                for (var n in s) {
                    var r = s[n];
                    for (var o in r)
                        if (o in t) { u.push(r[o]); break }
                }
            }

            function o(e, t, n) { e.addEventListener(t, n, !1) }

            function i(e, t, n) { e.removeEventListener(t, n, !1) }
            var a = e(22),
                s = { transitionend: { transition: "transitionend", WebkitTransition: "webkitTransitionEnd", MozTransition: "mozTransitionEnd", OTransition: "oTransitionEnd", msTransition: "MSTransitionEnd" }, animationend: { animation: "animationend", WebkitAnimation: "webkitAnimationEnd", MozAnimation: "mozAnimationEnd", OAnimation: "oAnimationEnd", msAnimation: "MSAnimationEnd" } },
                u = [];
            a.canUseDOM && r();
            var l = {
                addEndEventListener: function(e, t) { return 0 === u.length ? void window.setTimeout(t, 0) : void u.forEach(function(n) { o(e, n, t) }) },
                removeEndEventListener: function(e, t) {
                    0 !== u.length && u.forEach(function(n) { i(e, n, t) })
                }
            };
            t.exports = l
        }, { 22: 22 }],
        95: [function(e, t, n) {
            "use strict";
            var r = e(31),
                o = e(93),
                i = e(29),
                a = e(119),
                s = e(126),
                u = r.createClass({
                    displayName: "ReactTransitionGroup",
                    propTypes: { component: r.PropTypes.any, childFactory: r.PropTypes.func },
                    getDefaultProps: function() { return { component: "span", childFactory: s.thatReturnsArgument } },
                    getInitialState: function() { return { children: o.getChildMapping(this.props.children) } },
                    componentWillMount: function() { this.currentlyTransitioningKeys = {}, this.keysToEnter = [], this.keysToLeave = [] },
                    componentDidMount: function() { var e = this.state.children; for (var t in e) e[t] && this.performAppear(t) },
                    componentWillReceiveProps: function(e) {
                        var t = o.getChildMapping(e.children),
                            n = this.state.children;
                        this.setState({ children: o.mergeChildMappings(n, t) });
                        var r;
                        for (r in t) { var i = n && n.hasOwnProperty(r);!t[r] || i || this.currentlyTransitioningKeys[r] || this.keysToEnter.push(r) }
                        for (r in n) { var a = t && t.hasOwnProperty(r);!n[r] || a || this.currentlyTransitioningKeys[r] || this.keysToLeave.push(r) }
                    },
                    componentDidUpdate: function() {
                        var e = this.keysToEnter;
                        this.keysToEnter = [], e.forEach(this.performEnter);
                        var t = this.keysToLeave;
                        this.keysToLeave = [], t.forEach(this.performLeave)
                    },
                    performAppear: function(e) {
                        this.currentlyTransitioningKeys[e] = !0;
                        var t = this.refs[e];
                        t.componentWillAppear ? t.componentWillAppear(this._handleDoneAppearing.bind(this, e)) : this._handleDoneAppearing(e)
                    },
                    _handleDoneAppearing: function(e) {
                        var t = this.refs[e];
                        t.componentDidAppear && t.componentDidAppear(), delete this.currentlyTransitioningKeys[e];
                        var n = o.getChildMapping(this.props.children);
                        n && n.hasOwnProperty(e) || this.performLeave(e)
                    },
                    performEnter: function(e) {
                        this.currentlyTransitioningKeys[e] = !0;
                        var t = this.refs[e];
                        t.componentWillEnter ? t.componentWillEnter(this._handleDoneEntering.bind(this, e)) : this._handleDoneEntering(e)
                    },
                    _handleDoneEntering: function(e) {
                        var t = this.refs[e];
                        t.componentDidEnter && t.componentDidEnter(), delete this.currentlyTransitioningKeys[e];
                        var n = o.getChildMapping(this.props.children);
                        n && n.hasOwnProperty(e) || this.performLeave(e)
                    },
                    performLeave: function(e) {
                        this.currentlyTransitioningKeys[e] = !0;
                        var t = this.refs[e];
                        t.componentWillLeave ? t.componentWillLeave(this._handleDoneLeaving.bind(this, e)) : this._handleDoneLeaving(e)
                    },
                    _handleDoneLeaving: function(e) {
                        var t = this.refs[e];
                        t.componentDidLeave && t.componentDidLeave(), delete this.currentlyTransitioningKeys[e];
                        var n = o.getChildMapping(this.props.children);
                        if (n && n.hasOwnProperty(e)) this.performEnter(e);
                        else {
                            var r = i({}, this.state.children);
                            delete r[e], this.setState({ children: r })
                        }
                    },
                    render: function() {
                        var e = [];
                        for (var t in this.state.children) {
                            var n = this.state.children[t];
                            n && e.push(a(this.props.childFactory(n), { ref: t, key: t }))
                        }
                        return r.createElement(this.props.component, this.props, e)
                    }
                });
            t.exports = u
        }, { 119: 119, 126: 126, 29: 29, 31: 31, 93: 93 }],
        96: [function(e, t, n) {
            "use strict";

            function r(e) { e !== i.currentlyMountingInstance && l.enqueueUpdate(e) }

            function o(e, t) { p(null == a.current); var n = u.get(e); return n ? n === i.currentlyUnmountingInstance ? null : n : null }
            var i = e(72),
                a = e(45),
                s = e(61),
                u = e(71),
                l = e(97),
                c = e(29),
                p = e(147),
                d = (e(166), {
                    enqueueCallback: function(e, t) { p("function" == typeof t); var n = o(e); return n && n !== i.currentlyMountingInstance ? (n._pendingCallbacks ? n._pendingCallbacks.push(t) : n._pendingCallbacks = [t], void r(n)) : null },
                    enqueueCallbackInternal: function(e, t) { p("function" == typeof t), e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], r(e) },
                    enqueueForceUpdate: function(e) {
                        var t = o(e, "forceUpdate");
                        t && (t._pendingForceUpdate = !0, r(t))
                    },
                    enqueueReplaceState: function(e, t) {
                        var n = o(e, "replaceState");
                        n && (n._pendingStateQueue = [t], n._pendingReplaceState = !0, r(n))
                    },
                    enqueueSetState: function(e, t) {
                        var n = o(e, "setState");
                        if (n) {
                            var i = n._pendingStateQueue || (n._pendingStateQueue = []);
                            i.push(t), r(n)
                        }
                    },
                    enqueueSetProps: function(e, t) {
                        var n = o(e, "setProps");
                        if (n) {
                            p(n._isTopLevel);
                            var i = n._pendingElement || n._currentElement,
                                a = c({}, i.props, t);
                            n._pendingElement = s.cloneAndReplaceProps(i, a), r(n)
                        }
                    },
                    enqueueReplaceProps: function(e, t) {
                        var n = o(e, "replaceProps");
                        if (n) {
                            p(n._isTopLevel);
                            var i = n._pendingElement || n._currentElement;
                            n._pendingElement = s.cloneAndReplaceProps(i, t), r(n)
                        }
                    },
                    enqueueElementInternal: function(e, t) { e._pendingElement = t, r(e) }
                });
            t.exports = d
        }, { 147: 147, 166: 166, 29: 29, 45: 45, 61: 61, 71: 71, 72: 72, 97: 97 }],
        97: [function(e, t, n) {
            "use strict";

            function r() { v(T.ReactReconcileTransaction && E) }

            function o() { this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = c.getPooled(), this.reconcileTransaction = T.ReactReconcileTransaction.getPooled() }

            function i(e, t, n, o, i) { r(), E.batchedUpdates(e, t, n, o, i) }

            function a(e, t) { return e._mountOrder - t._mountOrder }

            function s(e) {
                var t = e.dirtyComponentsLength;
                v(t === g.length), g.sort(a);
                for (var n = 0; t > n; n++) {
                    var r = g[n],
                        o = r._pendingCallbacks;
                    if (r._pendingCallbacks = null, f.performUpdateIfNecessary(r, e.reconcileTransaction), o)
                        for (var i = 0; i < o.length; i++) e.callbackQueue.enqueue(o[i], r.getPublicInstance())
                }
            }

            function u(e) { return r(), E.isBatchingUpdates ? void g.push(e) : void E.batchedUpdates(u, e) }

            function l(e, t) { v(E.isBatchingUpdates), y.enqueue(e, t), C = !0 }
            var c = e(7),
                p = e(30),
                d = (e(45), e(80)),
                f = e(87),
                h = e(113),
                m = e(29),
                v = e(147),
                g = (e(166), []),
                y = c.getPooled(),
                C = !1,
                E = null,
                b = { initialize: function() { this.dirtyComponentsLength = g.length }, close: function() { this.dirtyComponentsLength !== g.length ? (g.splice(0, this.dirtyComponentsLength), D()) : g.length = 0 } },
                _ = { initialize: function() { this.callbackQueue.reset() }, close: function() { this.callbackQueue.notifyAll() } },
                x = [b, _];
            m(o.prototype, h.Mixin, { getTransactionWrappers: function() { return x }, destructor: function() { this.dirtyComponentsLength = null, c.release(this.callbackQueue), this.callbackQueue = null, T.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null }, perform: function(e, t, n) { return h.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n) } }), p.addPoolingTo(o);
            var D = function() {
                for (; g.length || C;) {
                    if (g.length) {
                        var e = o.getPooled();
                        e.perform(s, null, e), o.release(e)
                    }
                    if (C) {
                        C = !1;
                        var t = y;
                        y = c.getPooled(), t.notifyAll(), c.release(t)
                    }
                }
            };
            D = d.measure("ReactUpdates", "flushBatchedUpdates", D);
            var M = { injectReconcileTransaction: function(e) { v(e), T.ReactReconcileTransaction = e }, injectBatchingStrategy: function(e) { v(e), v("function" == typeof e.batchedUpdates), v("boolean" == typeof e.isBatchingUpdates), E = e } },
                T = { ReactReconcileTransaction: null, batchedUpdates: i, enqueueUpdate: u, flushBatchedUpdates: D, injection: M, asap: l };
            t.exports = T
        }, { 113: 113, 147: 147, 166: 166, 29: 29, 30: 30, 45: 45, 7: 7, 80: 80, 87: 87 }],
        98: [function(e, t, n) {
            "use strict";
            var r = e(11),
                o = r.injection.MUST_USE_ATTRIBUTE,
                i = { Properties: { clipPath: o, cx: o, cy: o, d: o, dx: o, dy: o, fill: o, fillOpacity: o, fontFamily: o, fontSize: o, fx: o, fy: o, gradientTransform: o, gradientUnits: o, markerEnd: o, markerMid: o, markerStart: o, offset: o, opacity: o, patternContentUnits: o, patternUnits: o, points: o, preserveAspectRatio: o, r: o, rx: o, ry: o, spreadMethod: o, stopColor: o, stopOpacity: o, stroke: o, strokeDasharray: o, strokeLinecap: o, strokeOpacity: o, strokeWidth: o, textAnchor: o, transform: o, version: o, viewBox: o, x1: o, x2: o, x: o, y1: o, y2: o, y: o }, DOMAttributeNames: { clipPath: "clip-path", fillOpacity: "fill-opacity", fontFamily: "font-family", fontSize: "font-size", gradientTransform: "gradientTransform", gradientUnits: "gradientUnits", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", patternContentUnits: "patternContentUnits", patternUnits: "patternUnits", preserveAspectRatio: "preserveAspectRatio", spreadMethod: "spreadMethod", stopColor: "stop-color", stopOpacity: "stop-opacity", strokeDasharray: "stroke-dasharray", strokeLinecap: "stroke-linecap", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", textAnchor: "text-anchor", viewBox: "viewBox" } };
            t.exports = i
        }, { 11: 11 }],
        99: [function(e, t, n) {
            "use strict";

            function r(e) { if ("selectionStart" in e && s.hasSelectionCapabilities(e)) return { start: e.selectionStart, end: e.selectionEnd }; if (window.getSelection) { var t = window.getSelection(); return { anchorNode: t.anchorNode, anchorOffset: t.anchorOffset, focusNode: t.focusNode, focusOffset: t.focusOffset } } if (document.selection) { var n = document.selection.createRange(); return { parentElement: n.parentElement(), text: n.text, top: n.boundingTop, left: n.boundingLeft } } }

            function o(e) { if (y || null == m || m !== l()) return null; var t = r(m); if (!g || !d(g, t)) { g = t; var n = u.getPooled(h.select, v, e); return n.type = "select", n.target = m, a.accumulateTwoPhaseDispatches(n), n } }
            var i = e(16),
                a = e(21),
                s = e(69),
                u = e(105),
                l = e(133),
                c = e(150),
                p = e(154),
                d = e(161),
                f = i.topLevelTypes,
                h = { select: { phasedRegistrationNames: { bubbled: p({ onSelect: null }), captured: p({ onSelectCapture: null }) }, dependencies: [f.topBlur, f.topContextMenu, f.topFocus, f.topKeyDown, f.topMouseDown, f.topMouseUp, f.topSelectionChange] } },
                m = null,
                v = null,
                g = null,
                y = !1,
                C = {
                    eventTypes: h,
                    extractEvents: function(e, t, n, r) {
                        switch (e) {
                            case f.topFocus:
                                (c(t) || "true" === t.contentEditable) && (m = t, v = n, g = null);
                                break;
                            case f.topBlur:
                                m = null, v = null, g = null;
                                break;
                            case f.topMouseDown:
                                y = !0;
                                break;
                            case f.topContextMenu:
                            case f.topMouseUp:
                                return y = !1, o(r);
                            case f.topSelectionChange:
                            case f.topKeyDown:
                            case f.topKeyUp:
                                return o(r)
                        }
                    }
                };
            t.exports = C
        }, { 105: 105, 133: 133, 150: 150, 154: 154, 16: 16, 161: 161, 21: 21, 69: 69 }],
        100: [function(e, t, n) {
            "use strict";
            var r = Math.pow(2, 53),
                o = { createReactRootIndex: function() { return Math.ceil(Math.random() * r) } };
            t.exports = o
        }, {}],
        101: [function(e, t, n) {
            "use strict";
            var r = e(16),
                o = e(20),
                i = e(21),
                a = e(102),
                s = e(105),
                u = e(106),
                l = e(108),
                c = e(109),
                p = e(104),
                d = e(110),
                f = e(111),
                h = e(112),
                m = e(134),
                v = e(147),
                g = e(154),
                y = (e(166), r.topLevelTypes),
                C = { blur: { phasedRegistrationNames: { bubbled: g({ onBlur: !0 }), captured: g({ onBlurCapture: !0 }) } }, click: { phasedRegistrationNames: { bubbled: g({ onClick: !0 }), captured: g({ onClickCapture: !0 }) } }, contextMenu: { phasedRegistrationNames: { bubbled: g({ onContextMenu: !0 }), captured: g({ onContextMenuCapture: !0 }) } }, copy: { phasedRegistrationNames: { bubbled: g({ onCopy: !0 }), captured: g({ onCopyCapture: !0 }) } }, cut: { phasedRegistrationNames: { bubbled: g({ onCut: !0 }), captured: g({ onCutCapture: !0 }) } }, doubleClick: { phasedRegistrationNames: { bubbled: g({ onDoubleClick: !0 }), captured: g({ onDoubleClickCapture: !0 }) } }, drag: { phasedRegistrationNames: { bubbled: g({ onDrag: !0 }), captured: g({ onDragCapture: !0 }) } }, dragEnd: { phasedRegistrationNames: { bubbled: g({ onDragEnd: !0 }), captured: g({ onDragEndCapture: !0 }) } }, dragEnter: { phasedRegistrationNames: { bubbled: g({ onDragEnter: !0 }), captured: g({ onDragEnterCapture: !0 }) } }, dragExit: { phasedRegistrationNames: { bubbled: g({ onDragExit: !0 }), captured: g({ onDragExitCapture: !0 }) } }, dragLeave: { phasedRegistrationNames: { bubbled: g({ onDragLeave: !0 }), captured: g({ onDragLeaveCapture: !0 }) } }, dragOver: { phasedRegistrationNames: { bubbled: g({ onDragOver: !0 }), captured: g({ onDragOverCapture: !0 }) } }, dragStart: { phasedRegistrationNames: { bubbled: g({ onDragStart: !0 }), captured: g({ onDragStartCapture: !0 }) } }, drop: { phasedRegistrationNames: { bubbled: g({ onDrop: !0 }), captured: g({ onDropCapture: !0 }) } }, focus: { phasedRegistrationNames: { bubbled: g({ onFocus: !0 }), captured: g({ onFocusCapture: !0 }) } }, input: { phasedRegistrationNames: { bubbled: g({ onInput: !0 }), captured: g({ onInputCapture: !0 }) } }, keyDown: { phasedRegistrationNames: { bubbled: g({ onKeyDown: !0 }), captured: g({ onKeyDownCapture: !0 }) } }, keyPress: { phasedRegistrationNames: { bubbled: g({ onKeyPress: !0 }), captured: g({ onKeyPressCapture: !0 }) } }, keyUp: { phasedRegistrationNames: { bubbled: g({ onKeyUp: !0 }), captured: g({ onKeyUpCapture: !0 }) } }, load: { phasedRegistrationNames: { bubbled: g({ onLoad: !0 }), captured: g({ onLoadCapture: !0 }) } }, error: { phasedRegistrationNames: { bubbled: g({ onError: !0 }), captured: g({ onErrorCapture: !0 }) } }, mouseDown: { phasedRegistrationNames: { bubbled: g({ onMouseDown: !0 }), captured: g({ onMouseDownCapture: !0 }) } }, mouseMove: { phasedRegistrationNames: { bubbled: g({ onMouseMove: !0 }), captured: g({ onMouseMoveCapture: !0 }) } }, mouseOut: { phasedRegistrationNames: { bubbled: g({ onMouseOut: !0 }), captured: g({ onMouseOutCapture: !0 }) } }, mouseOver: { phasedRegistrationNames: { bubbled: g({ onMouseOver: !0 }), captured: g({ onMouseOverCapture: !0 }) } }, mouseUp: { phasedRegistrationNames: { bubbled: g({ onMouseUp: !0 }), captured: g({ onMouseUpCapture: !0 }) } }, paste: { phasedRegistrationNames: { bubbled: g({ onPaste: !0 }), captured: g({ onPasteCapture: !0 }) } }, reset: { phasedRegistrationNames: { bubbled: g({ onReset: !0 }), captured: g({ onResetCapture: !0 }) } }, scroll: { phasedRegistrationNames: { bubbled: g({ onScroll: !0 }), captured: g({ onScrollCapture: !0 }) } }, submit: { phasedRegistrationNames: { bubbled: g({ onSubmit: !0 }), captured: g({ onSubmitCapture: !0 }) } }, touchCancel: { phasedRegistrationNames: { bubbled: g({ onTouchCancel: !0 }), captured: g({ onTouchCancelCapture: !0 }) } }, touchEnd: { phasedRegistrationNames: { bubbled: g({ onTouchEnd: !0 }), captured: g({ onTouchEndCapture: !0 }) } }, touchMove: { phasedRegistrationNames: { bubbled: g({ onTouchMove: !0 }), captured: g({ onTouchMoveCapture: !0 }) } }, touchStart: { phasedRegistrationNames: { bubbled: g({ onTouchStart: !0 }), captured: g({ onTouchStartCapture: !0 }) } }, wheel: { phasedRegistrationNames: { bubbled: g({ onWheel: !0 }), captured: g({ onWheelCapture: !0 }) } } },
                E = { topBlur: C.blur, topClick: C.click, topContextMenu: C.contextMenu, topCopy: C.copy, topCut: C.cut, topDoubleClick: C.doubleClick, topDrag: C.drag, topDragEnd: C.dragEnd, topDragEnter: C.dragEnter, topDragExit: C.dragExit, topDragLeave: C.dragLeave, topDragOver: C.dragOver, topDragStart: C.dragStart, topDrop: C.drop, topError: C.error, topFocus: C.focus, topInput: C.input, topKeyDown: C.keyDown, topKeyPress: C.keyPress, topKeyUp: C.keyUp, topLoad: C.load, topMouseDown: C.mouseDown, topMouseMove: C.mouseMove, topMouseOut: C.mouseOut, topMouseOver: C.mouseOver, topMouseUp: C.mouseUp, topPaste: C.paste, topReset: C.reset, topScroll: C.scroll, topSubmit: C.submit, topTouchCancel: C.touchCancel, topTouchEnd: C.touchEnd, topTouchMove: C.touchMove, topTouchStart: C.touchStart, topWheel: C.wheel };
            for (var b in E) E[b].dependencies = [b];
            var _ = {
                eventTypes: C,
                executeDispatch: function(e, t, n) {
                    var r = o.executeDispatch(e, t, n);
                    r === !1 && (e.stopPropagation(), e.preventDefault())
                },
                extractEvents: function(e, t, n, r) {
                    var o = E[e];
                    if (!o) return null;
                    var g;
                    switch (e) {
                        case y.topInput:
                        case y.topLoad:
                        case y.topError:
                        case y.topReset:
                        case y.topSubmit:
                            g = s;
                            break;
                        case y.topKeyPress:
                            if (0 === m(r)) return null;
                        case y.topKeyDown:
                        case y.topKeyUp:
                            g = l;
                            break;
                        case y.topBlur:
                        case y.topFocus:
                            g = u;
                            break;
                        case y.topClick:
                            if (2 === r.button) return null;
                        case y.topContextMenu:
                        case y.topDoubleClick:
                        case y.topMouseDown:
                        case y.topMouseMove:
                        case y.topMouseOut:
                        case y.topMouseOver:
                        case y.topMouseUp:
                            g = c;
                            break;
                        case y.topDrag:
                        case y.topDragEnd:
                        case y.topDragEnter:
                        case y.topDragExit:
                        case y.topDragLeave:
                        case y.topDragOver:
                        case y.topDragStart:
                        case y.topDrop:
                            g = p;
                            break;
                        case y.topTouchCancel:
                        case y.topTouchEnd:
                        case y.topTouchMove:
                        case y.topTouchStart:
                            g = d;
                            break;
                        case y.topScroll:
                            g = f;
                            break;
                        case y.topWheel:
                            g = h;
                            break;
                        case y.topCopy:
                        case y.topCut:
                        case y.topPaste:
                            g = a
                    }
                    v(g);
                    var C = g.getPooled(o, n, r);
                    return i.accumulateTwoPhaseDispatches(C), C
                }
            };
            t.exports = _
        }, { 102: 102, 104: 104, 105: 105, 106: 106, 108: 108, 109: 109, 110: 110, 111: 111, 112: 112, 134: 134, 147: 147, 154: 154, 16: 16, 166: 166, 20: 20, 21: 21 }],
        102: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(105),
                i = { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } };
            o.augmentClass(r, i), t.exports = r
        }, { 105: 105 }],
        103: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(105),
                i = { data: null };
            o.augmentClass(r, i), t.exports = r
        }, { 105: 105 }],
        104: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(109),
                i = { dataTransfer: null };
            o.augmentClass(r, i), t.exports = r
        }, { 109: 109 }],
        105: [function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                this.dispatchConfig = e, this.dispatchMarker = t, this.nativeEvent = n;
                var r = this.constructor.Interface;
                for (var o in r)
                    if (r.hasOwnProperty(o)) {
                        var i = r[o];
                        this[o] = i ? i(n) : n[o]
                    }
                var s = null != n.defaultPrevented ? n.defaultPrevented : n.returnValue === !1;
                this.isDefaultPrevented = s ? a.thatReturnsTrue : a.thatReturnsFalse, this.isPropagationStopped = a.thatReturnsFalse
            }
            var o = e(30),
                i = e(29),
                a = e(126),
                s = e(137),
                u = { type: null, target: s, currentTarget: a.thatReturnsNull, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: null, isTrusted: null };
            i(r.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1, this.isDefaultPrevented = a.thatReturnsTrue
                },
                stopPropagation: function() {
                    var e = this.nativeEvent;
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this.isPropagationStopped = a.thatReturnsTrue
                },
                persist: function() { this.isPersistent = a.thatReturnsTrue },
                isPersistent: a.thatReturnsFalse,
                destructor: function() {
                    var e = this.constructor.Interface;
                    for (var t in e) this[t] = null;
                    this.dispatchConfig = null, this.dispatchMarker = null, this.nativeEvent = null
                }
            }), r.Interface = u, r.augmentClass = function(e, t) {
                var n = this,
                    r = Object.create(n.prototype);
                i(r, e.prototype), e.prototype = r, e.prototype.constructor = e, e.Interface = i({}, n.Interface, t), e.augmentClass = n.augmentClass, o.addPoolingTo(e, o.threeArgumentPooler)
            }, o.addPoolingTo(r, o.threeArgumentPooler), t.exports = r
        }, { 126: 126, 137: 137, 29: 29, 30: 30 }],
        106: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(111),
                i = { relatedTarget: null };
            o.augmentClass(r, i), t.exports = r
        }, { 111: 111 }],
        107: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(105),
                i = { data: null };
            o.augmentClass(r, i), t.exports = r
        }, { 105: 105 }],
        108: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(111),
                i = e(134),
                a = e(135),
                s = e(136),
                u = { key: a, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: s, charCode: function(e) { return "keypress" === e.type ? i(e) : 0 }, keyCode: function(e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 }, which: function(e) { return "keypress" === e.type ? i(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0 } };
            o.augmentClass(r, u), t.exports = r
        }, { 111: 111, 134: 134, 135: 135, 136: 136 }],
        109: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(111),
                i = e(114),
                a = e(136),
                s = { screenX: null, screenY: null, clientX: null, clientY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: a, button: function(e) { var t = e.button; return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0 }, buttons: null, relatedTarget: function(e) { return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement) }, pageX: function(e) { return "pageX" in e ? e.pageX : e.clientX + i.currentScrollLeft }, pageY: function(e) { return "pageY" in e ? e.pageY : e.clientY + i.currentScrollTop } };
            o.augmentClass(r, s), t.exports = r
        }, { 111: 111, 114: 114, 136: 136 }],
        110: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(111),
                i = e(136),
                a = { touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: i };
            o.augmentClass(r, a), t.exports = r
        }, { 111: 111, 136: 136 }],
        111: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(105),
                i = e(137),
                a = { view: function(e) { if (e.view) return e.view; var t = i(e); if (null != t && t.window === t) return t; var n = t.ownerDocument; return n ? n.defaultView || n.parentWindow : window }, detail: function(e) { return e.detail || 0 } };
            o.augmentClass(r, a), t.exports = r
        }, { 105: 105, 137: 137 }],
        112: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { o.call(this, e, t, n) }
            var o = e(109),
                i = { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: null, deltaMode: null };
            o.augmentClass(r, i), t.exports = r
        }, { 109: 109 }],
        113: [function(e, t, n) {
            "use strict";
            var r = e(147),
                o = {
                    reinitializeTransaction: function() { this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1 },
                    _isInTransaction: !1,
                    getTransactionWrappers: null,
                    isInTransaction: function() { return !!this._isInTransaction },
                    perform: function(e, t, n, o, i, a, s, u) { r(!this.isInTransaction()); var l, c; try { this._isInTransaction = !0, l = !0, this.initializeAll(0), c = e.call(t, n, o, i, a, s, u), l = !1 } finally { try { if (l) try { this.closeAll(0) } catch (p) {} else this.closeAll(0) } finally { this._isInTransaction = !1 } } return c },
                    initializeAll: function(e) { for (var t = this.transactionWrappers, n = e; n < t.length; n++) { var r = t[n]; try { this.wrapperInitData[n] = i.OBSERVED_ERROR, this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null } finally { if (this.wrapperInitData[n] === i.OBSERVED_ERROR) try { this.initializeAll(n + 1) } catch (o) {} } } },
                    closeAll: function(e) {
                        r(this.isInTransaction());
                        for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                            var o, a = t[n],
                                s = this.wrapperInitData[n];
                            try { o = !0, s !== i.OBSERVED_ERROR && a.close && a.close.call(this, s), o = !1 } finally { if (o) try { this.closeAll(n + 1) } catch (u) {} }
                        }
                        this.wrapperInitData.length = 0
                    }
                },
                i = { Mixin: o, OBSERVED_ERROR: {} };
            t.exports = i
        }, { 147: 147 }],
        114: [function(e, t, n) {
            "use strict";
            var r = { currentScrollLeft: 0, currentScrollTop: 0, refreshScrollValues: function(e) { r.currentScrollLeft = e.x, r.currentScrollTop = e.y } };
            t.exports = r
        }, {}],
        115: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (o(null != t), null == e) return t;
                var n = Array.isArray(e),
                    r = Array.isArray(t);
                return n && r ? (e.push.apply(e, t), e) : n ? (e.push(t), e) : r ? [e].concat(t) : [e, t]
            }
            var o = e(147);
            t.exports = r
        }, { 147: 147 }],
        116: [function(e, t, n) {
            "use strict";

            function r(e) { for (var t = 1, n = 0, r = 0; r < e.length; r++) t = (t + e.charCodeAt(r)) % o, n = (n + t) % o; return t | n << 16 }
            var o = 65521;
            t.exports = r
        }, {}],
        117: [function(e, t, n) {
            function r(e) { return e.replace(o, function(e, t) { return t.toUpperCase() }) }
            var o = /-(.)/g;
            t.exports = r
        }, {}],
        118: [function(e, t, n) {
            "use strict";

            function r(e) { return o(e.replace(i, "ms-")) }
            var o = e(117),
                i = /^-ms-/;
            t.exports = r
        }, { 117: 117 }],
        119: [function(e, t, n) {
            "use strict";

            function r(e, t) { var n = i.mergeProps(t, e.props); return !n.hasOwnProperty(s) && e.props.hasOwnProperty(s) && (n.children = e.props.children), o.createElement(e.type, n) }
            var o = e(61),
                i = e(81),
                a = e(154),
                s = (e(166), a({ children: null }));
            t.exports = r
        }, { 154: 154, 166: 166, 61: 61, 81: 81 }],
        120: [function(e, t, n) {
            function r(e, t) { return e && t ? e === t ? !0 : o(e) ? !1 : o(t) ? r(e, t.parentNode) : e.contains ? e.contains(t) : e.compareDocumentPosition ? !!(16 & e.compareDocumentPosition(t)) : !1 : !1 }
            var o = e(151);
            t.exports = r
        }, { 151: 151 }],
        121: [function(e, t, n) {
            function r(e) { return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e) }

            function o(e) { return r(e) ? Array.isArray(e) ? e.slice() : i(e) : [e] }
            var i = e(163);
            t.exports = o
        }, { 163: 163 }],
        122: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = i.createFactory(e),
                    n = o.createClass({ tagName: e.toUpperCase(), displayName: "ReactFullPageComponent" + e, componentWillUnmount: function() { a(!1) }, render: function() { return t(this.props) } });
                return n
            }
            var o = e(38),
                i = e(61),
                a = e(147);
            t.exports = r
        }, { 147: 147, 38: 38, 61: 61 }],
        123: [function(e, t, n) {
            function r(e) { var t = e.match(c); return t && t[1].toLowerCase() }

            function o(e, t) {
                var n = l;
                u(!!l);
                var o = r(e),
                    i = o && s(o);
                if (i) { n.innerHTML = i[1] + e + i[2]; for (var c = i[0]; c--;) n = n.lastChild } else n.innerHTML = e;
                var p = n.getElementsByTagName("script");
                p.length && (u(t), a(p).forEach(t));
                for (var d = a(n.childNodes); n.lastChild;) n.removeChild(n.lastChild);
                return d
            }
            var i = e(22),
                a = e(121),
                s = e(139),
                u = e(147),
                l = i.canUseDOM ? document.createElement("div") : null,
                c = /^\s*<(\w+)/;
            t.exports = o
        }, { 121: 121, 139: 139, 147: 147, 22: 22 }],
        124: [function(e, t, n) {
            "use strict";

            function r(e) { return "object" == typeof e ? Object.keys(e).filter(function(t) { return e[t] }).join(" ") : Array.prototype.join.call(arguments, " ") }
            e(166), t.exports = r
        }, { 166: 166 }],
        125: [function(e, t, n) {
            "use strict";

            function r(e, t) { var n = null == t || "boolean" == typeof t || "" === t; if (n) return ""; var r = isNaN(t); return r || 0 === t || i.hasOwnProperty(e) && i[e] ? "" + t : ("string" == typeof t && (t = t.trim()), t + "px") }
            var o = e(5),
                i = o.isUnitlessNumber;
            t.exports = r
        }, { 5: 5 }],
        126: [function(e, t, n) {
            function r(e) { return function() { return e } }

            function o() {}
            o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() { return this }, o.thatReturnsArgument = function(e) { return e }, t.exports = o
        }, {}],
        127: [function(e, t, n) {
            "use strict";
            var r = {};
            t.exports = r
        }, {}],
        128: [function(e, t, n) {
            "use strict";

            function r(e) { return i[e] }

            function o(e) { return ("" + e).replace(a, r) }
            var i = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" },
                a = /[&><"']/g;
            t.exports = o
        }, {}],
        129: [function(e, t, n) {
            "use strict";

            function r(e) { return null == e ? null : s(e) ? e : o.has(e) ? i.getNodeFromInstance(e) : (a(null == e.render || "function" != typeof e.render), void a(!1)) }
            var o = (e(45), e(71)),
                i = e(75),
                a = e(147),
                s = e(149);
            e(166), t.exports = r
        }, { 147: 147, 149: 149, 166: 166, 45: 45, 71: 71, 75: 75 }],
        130: [function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                var r = e,
                    o = !r.hasOwnProperty(n);
                o && null != t && (r[n] = t)
            }

            function o(e) { if (null == e) return e; var t = {}; return i(e, r, t), t }
            var i = e(164);
            e(166), t.exports = o
        }, { 164: 164, 166: 166 }],
        131: [function(e, t, n) {
            "use strict";

            function r(e) { try { e.focus() } catch (t) {} }
            t.exports = r
        }, {}],
        132: [function(e, t, n) {
            "use strict";
            var r = function(e, t, n) { Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e) };
            t.exports = r
        }, {}],
        133: [function(e, t, n) {
            function r() { try { return document.activeElement || document.body } catch (e) { return document.body } }
            t.exports = r
        }, {}],
        134: [function(e, t, n) {
            "use strict";

            function r(e) { var t, n = e.keyCode; return "charCode" in e ? (t = e.charCode, 0 === t && 13 === n && (t = 13)) : t = n, t >= 32 || 13 === t ? t : 0 }
            t.exports = r
        }, {}],
        135: [function(e, t, n) {
            "use strict";

            function r(e) { if (e.key) { var t = i[e.key] || e.key; if ("Unidentified" !== t) return t } if ("keypress" === e.type) { var n = o(e); return 13 === n ? "Enter" : String.fromCharCode(n) } return "keydown" === e.type || "keyup" === e.type ? a[e.keyCode] || "Unidentified" : "" }
            var o = e(134),
                i = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
                a = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };
            t.exports = r
        }, { 134: 134 }],
        136: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this,
                    n = t.nativeEvent;
                if (n.getModifierState) return n.getModifierState(e);
                var r = i[e];
                return r ? !!n[r] : !1
            }

            function o(e) { return r }
            var i = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
            t.exports = o
        }, {}],
        137: [function(e, t, n) {
            "use strict";

            function r(e) { var t = e.target || e.srcElement || window; return 3 === t.nodeType ? t.parentNode : t }
            t.exports = r
        }, {}],
        138: [function(e, t, n) {
            "use strict";

            function r(e) { var t = e && (o && e[o] || e[i]); return "function" == typeof t ? t : void 0 }
            var o = "function" == typeof Symbol && Symbol.iterator,
                i = "@@iterator";
            t.exports = r
        }, {}],
        139: [function(e, t, n) {
            function r(e) { return i(!!a), d.hasOwnProperty(e) || (e = "*"), s.hasOwnProperty(e) || (a.innerHTML = "*" === e ? "<link />" : "<" + e + "></" + e + ">", s[e] = !a.firstChild), s[e] ? d[e] : null }
            var o = e(22),
                i = e(147),
                a = o.canUseDOM ? document.createElement("div") : null,
                s = { circle: !0, clipPath: !0, defs: !0, ellipse: !0, g: !0, line: !0, linearGradient: !0, path: !0, polygon: !0, polyline: !0, radialGradient: !0, rect: !0, stop: !0, text: !0 },
                u = [1, '<select multiple="true">', "</select>"],
                l = [1, "<table>", "</table>"],
                c = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                p = [1, "<svg>", "</svg>"],
                d = { "*": [1, "?<div>", "</div>"], area: [1, "<map>", "</map>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], legend: [1, "<fieldset>", "</fieldset>"], param: [1, "<object>", "</object>"], tr: [2, "<table><tbody>", "</tbody></table>"], optgroup: u, option: u, caption: l, colgroup: l, tbody: l, tfoot: l, thead: l, td: c, th: c, circle: p, clipPath: p, defs: p, ellipse: p, g: p, line: p, linearGradient: p, path: p, polygon: p, polyline: p, radialGradient: p, rect: p, stop: p, text: p };
            t.exports = r
        }, { 147: 147, 22: 22 }],
        140: [function(e, t, n) {
            "use strict";

            function r(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

            function o(e) {
                for (; e;) {
                    if (e.nextSibling) return e.nextSibling;
                    e = e.parentNode
                }
            }

            function i(e, t) {
                for (var n = r(e), i = 0, a = 0; n;) {
                    if (3 === n.nodeType) {
                        if (a = i + n.textContent.length, t >= i && a >= t) return { node: n, offset: t - i };
                        i = a
                    }
                    n = r(o(n))
                }
            }
            t.exports = i
        }, {}],
        141: [function(e, t, n) {
            "use strict";

            function r(e) { return e ? e.nodeType === o ? e.documentElement : e.firstChild : null }
            var o = 9;
            t.exports = r
        }, {}],
        142: [function(e, t, n) {
            "use strict";

            function r() { return !i && o.canUseDOM && (i = "textContent" in document.documentElement ? "textContent" : "innerText"), i }
            var o = e(22),
                i = null;
            t.exports = r
        }, { 22: 22 }],
        143: [function(e, t, n) {
            "use strict";

            function r(e) { return e === window ? { x: window.pageXOffset || document.documentElement.scrollLeft, y: window.pageYOffset || document.documentElement.scrollTop } : { x: e.scrollLeft, y: e.scrollTop } }
            t.exports = r
        }, {}],
        144: [function(e, t, n) {
            function r(e) { return e.replace(o, "-$1").toLowerCase() }
            var o = /([A-Z])/g;
            t.exports = r
        }, {}],
        145: [function(e, t, n) {
            "use strict";

            function r(e) { return o(e).replace(i, "-ms-") }
            var o = e(144),
                i = /^ms-/;
            t.exports = r
        }, { 144: 144 }],
        146: [function(e, t, n) {
            "use strict";

            function r(e) { return "function" == typeof e && "undefined" != typeof e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent }

            function o(e, t) {
                var n;
                if ((null === e || e === !1) && (e = a.emptyElement), "object" == typeof e) {
                    var o = e;
                    n = t === o.type && "string" == typeof o.type ? s.createInternalComponent(o) : r(o.type) ? new o.type(o) : new c
                } else "string" == typeof e || "number" == typeof e ? n = s.createInstanceForText(e) : l(!1);
                return n.construct(e), n._mountIndex = 0, n._mountImage = null, n
            }
            var i = e(43),
                a = e(63),
                s = e(78),
                u = e(29),
                l = e(147),
                c = (e(166), function() {});
            u(c.prototype, i.Mixin, { _instantiateReactComponent: o }), t.exports = o
        }, { 147: 147, 166: 166, 29: 29, 43: 43, 63: 63, 78: 78 }],
        147: [function(e, t, n) {
            "use strict";
            var r = function(e, t, n, r, o, i, a, s) {
                if (!e) {
                    var u;
                    if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var l = [n, r, o, i, a, s],
                            c = 0;
                        u = new Error("Invariant Violation: " + t.replace(/%s/g, function() { return l[c++] }))
                    }
                    throw u.framesToPop = 1, u
                }
            };
            t.exports = r
        }, {}],
        148: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!i.canUseDOM || t && !("addEventListener" in document)) return !1;
                var n = "on" + e,
                    r = n in document;
                if (!r) {
                    var a = document.createElement("div");
                    a.setAttribute(n, "return;"), r = "function" == typeof a[n]
                }
                return !r && o && "wheel" === e && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r
            }
            var o, i = e(22);
            i.canUseDOM && (o = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), t.exports = r
        }, { 22: 22 }],
        149: [function(e, t, n) {
            function r(e) { return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName)) }
            t.exports = r
        }, {}],
        150: [function(e, t, n) {
            "use strict";

            function r(e) { return e && ("INPUT" === e.nodeName && o[e.type] || "TEXTAREA" === e.nodeName) }
            var o = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
            t.exports = r
        }, {}],
        151: [function(e, t, n) {
            function r(e) { return o(e) && 3 == e.nodeType }
            var o = e(149);
            t.exports = r
        }, { 149: 149 }],
        152: [function(e, t, n) {
            "use strict";

            function r(e) {
                e || (e = "");
                var t, n = arguments.length;
                if (n > 1)
                    for (var r = 1; n > r; r++) t = arguments[r], t && (e = (e ? e + " " : "") + t);
                return e
            }
            t.exports = r
        }, {}],
        153: [function(e, t, n) {
            "use strict";
            var r = e(147),
                o = function(e) {
                    var t, n = {};
                    r(e instanceof Object && !Array.isArray(e));
                    for (t in e) e.hasOwnProperty(t) && (n[t] = t);
                    return n
                };
            t.exports = o
        }, { 147: 147 }],
        154: [function(e, t, n) {
            var r = function(e) {
                var t;
                for (t in e)
                    if (e.hasOwnProperty(t)) return t;
                return null
            };
            t.exports = r
        }, {}],
        155: [function(e, t, n) {
            "use strict";

            function r(e, t, n) { if (!e) return null; var r = {}; for (var i in e) o.call(e, i) && (r[i] = t.call(n, e[i], i, e)); return r }
            var o = Object.prototype.hasOwnProperty;
            t.exports = r
        }, {}],
        156: [function(e, t, n) {
            "use strict";

            function r(e) { var t = {}; return function(n) { return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n] } }
            t.exports = r
        }, {}],
        157: [function(e, t, n) {
            "use strict";

            function r(e) { return i(o.isValidElement(e)), e }
            var o = e(61),
                i = e(147);
            t.exports = r
        }, { 147: 147, 61: 61 }],
        158: [function(e, t, n) {
            "use strict";

            function r(e) { return '"' + o(e) + '"' }
            var o = e(128);
            t.exports = r
        }, { 128: 128 }],
        159: [function(e, t, n) {
            "use strict";
            var r = e(22),
                o = /^[ \r\n\t\f]/,
                i = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
                a = function(e, t) { e.innerHTML = t };
            if ("undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction && (a = function(e, t) {
                    MSApp.execUnsafeLocalFunction(function() {
                        e.innerHTML = t
                    })
                }), r.canUseDOM) {
                var s = document.createElement("div");
                s.innerHTML = " ", "" === s.innerHTML && (a = function(e, t) {
                    if (e.parentNode && e.parentNode.replaceChild(e, e), o.test(t) || "<" === t[0] && i.test(t)) {
                        e.innerHTML = "\ufeff" + t;
                        var n = e.firstChild;
                        1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1)
                    } else e.innerHTML = t
                })
            }
            t.exports = a
        }, { 22: 22 }],
        160: [function(e, t, n) {
            "use strict";
            var r = e(22),
                o = e(128),
                i = e(159),
                a = function(e, t) { e.textContent = t };
            r.canUseDOM && ("textContent" in document.documentElement || (a = function(e, t) { i(e, o(t)) })), t.exports = a
        }, { 128: 128, 159: 159, 22: 22 }],
        161: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e === t) return !0;
                var n;
                for (n in e)
                    if (e.hasOwnProperty(n) && (!t.hasOwnProperty(n) || e[n] !== t[n])) return !1;
                for (n in t)
                    if (t.hasOwnProperty(n) && !e.hasOwnProperty(n)) return !1;
                return !0
            }
            t.exports = r
        }, {}],
        162: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (null != e && null != t) {
                    var n = typeof e,
                        r = typeof t;
                    if ("string" === n || "number" === n) return "string" === r || "number" === r;
                    if ("object" === r && e.type === t.type && e.key === t.key) { var o = e._owner === t._owner; return o }
                }
                return !1
            }
            e(166), t.exports = r
        }, { 166: 166 }],
        163: [function(e, t, n) {
            function r(e) {
                var t = e.length;
                if (o(!Array.isArray(e) && ("object" == typeof e || "function" == typeof e)), o("number" == typeof t), o(0 === t || t - 1 in e), e.hasOwnProperty) try { return Array.prototype.slice.call(e) } catch (n) {}
                for (var r = Array(t), i = 0; t > i; i++) r[i] = e[i];
                return r
            }
            var o = e(147);
            t.exports = r
        }, { 147: 147 }],
        164: [function(e, t, n) {
            "use strict";

            function r(e) { return v[e] }

            function o(e, t) { return e && null != e.key ? a(e.key) : t.toString(36) }

            function i(e) { return ("" + e).replace(g, r) }

            function a(e) { return "$" + i(e) }

            function s(e, t, n, r, i) {
                var u = typeof e;
                if (("undefined" === u || "boolean" === u) && (e = null), null === e || "string" === u || "number" === u || l.isValidElement(e)) return r(i, e, "" === t ? h + o(e, 0) : t, n), 1;
                var p, v, g, y = 0;
                if (Array.isArray(e))
                    for (var C = 0; C < e.length; C++) p = e[C], v = ("" !== t ? t + m : h) + o(p, C), g = n + y, y += s(p, v, g, r, i);
                else {
                    var E = d(e);
                    if (E) {
                        var b, _ = E.call(e);
                        if (E !== e.entries)
                            for (var x = 0; !(b = _.next()).done;) p = b.value, v = ("" !== t ? t + m : h) + o(p, x++), g = n + y, y += s(p, v, g, r, i);
                        else
                            for (; !(b = _.next()).done;) {
                                var D = b.value;
                                D && (p = D[1], v = ("" !== t ? t + m : h) + a(D[0]) + m + o(p, 0), g = n + y, y += s(p, v, g, r, i))
                            }
                    } else if ("object" === u) { f(1 !== e.nodeType); var M = c.extract(e); for (var T in M) M.hasOwnProperty(T) && (p = M[T], v = ("" !== t ? t + m : h) + a(T) + m + o(p, 0), g = n + y, y += s(p, v, g, r, i)) }
                }
                return y
            }

            function u(e, t, n) { return null == e ? 0 : s(e, "", 0, t, n) }
            var l = e(61),
                c = e(67),
                p = e(70),
                d = e(138),
                f = e(147),
                h = (e(166), p.SEPARATOR),
                m = ":",
                v = { "=": "=0", ".": "=1", ":": "=2" },
                g = /[=.:]/g;
            t.exports = u
        }, { 138: 138, 147: 147, 166: 166, 61: 61, 67: 67, 70: 70 }],
        165: [function(e, t, n) {
            "use strict";

            function r(e) { return Array.isArray(e) ? e.concat() : e && "object" == typeof e ? a(new e.constructor, e) : e }

            function o(e, t, n) {
                u(Array.isArray(e));
                var r = t[n];
                u(Array.isArray(r))
            }

            function i(e, t) {
                if (u("object" == typeof t), l.call(t, f)) return u(1 === Object.keys(t).length), t[f];
                var n = r(e);
                if (l.call(t, h)) {
                    var s = t[h];
                    u(s && "object" == typeof s), u(n && "object" == typeof n), a(n, t[h])
                }
                l.call(t, c) && (o(e, t, c), t[c].forEach(function(e) { n.push(e) })), l.call(t, p) && (o(e, t, p), t[p].forEach(function(e) { n.unshift(e) })), l.call(t, d) && (u(Array.isArray(e)), u(Array.isArray(t[d])), t[d].forEach(function(e) { u(Array.isArray(e)), n.splice.apply(n, e) })), l.call(t, m) && (u("function" == typeof t[m]), n = t[m](n));
                for (var v in t) g.hasOwnProperty(v) && g[v] || (n[v] = i(e[v], t[v]));
                return n
            }
            var a = e(29),
                s = e(154),
                u = e(147),
                l = {}.hasOwnProperty,
                c = s({ $push: null }),
                p = s({ $unshift: null }),
                d = s({ $splice: null }),
                f = s({ $set: null }),
                h = s({ $merge: null }),
                m = s({ $apply: null }),
                v = [c, p, d, f, h, m],
                g = {};
            v.forEach(function(e) { g[e] = !0 }), t.exports = i
        }, { 147: 147, 154: 154, 29: 29 }],
        166: [function(e, t, n) {
            "use strict";
            var r = e(126),
                o = r;
            t.exports = o
        }, { 126: 126 }]
    }, {}, [1])(1)
});
! function() {
    window.defineNamespace = function(n, o) { for (var e = o.split("."), i = 0; i < e.length; i++) n[e[i]] || (n[e[i]] = {}), n = n[e[i]] }, window.assert = function(n, o, e) { if (!n) { var i = new Date; if (console.log("[" + i.toLocaleTimeString() + "] - " + o), e) throw new Error(o) } }, window.log = function(n) {
        if ("debug" == window.applicationType) {
            var o = new Date;
            console.log("[" + o.toLocaleTimeString() + "] - " + n)
        }
    }, window.warning = function(n) {
        if ("debug" == window.applicationType) {
            var o = new Date;
            console.warn("[" + o.toLocaleTimeString() + "] - " + n)
        }
    }, window.error = function(n) {
        var o = new Date;
        console.error("[" + o.toLocaleTimeString() + "] - " + n)
    }, window.isDot2 = function() { return "dot2" == localStorage.getItem("appType") }
}(), defineNamespace(window, "generic.globs"),
    function(n) {
        n.globs.epsylon = 1e-5, n.statusLogging = function(n) {
            if ("debug" == window.applicationType) {
                var o = new Date;
                n = "[" + o.toLocaleTimeString() + "] - " + n, console && console.log && console.log(n)
            }
        }
    }(window.generic), defineNamespace(window, "ui"), defineNamespace(window, "uiTypes.canvas"), defineNamespace(window, "tools"), defineNamespace(window, "login"),
    function() {
        var n = [];
        window.generic.slice = n.slice, window.generic.sign = function(n) { return Math.sign ? Math.sign(n) : Math.abs(n) / n }, window.generic.createGuid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
                var o = 16 * Math.random() | 0,
                    e = "x" === n ? o : 3 & o | 8;
                return e.toString(16)
            })
        }
    }(), window.generic.globs.$window = $(window), window.generic.globs.$body = $("body"), window.generic.globs.$document = $(document), defineNamespace(window, "utilities"),
    function(n) {
        var o = {};
        o.round = function(n) { return Math.round(n) }, o.ceil = function(n) { return Math.ceil(n) }, o.floor = function(n) { return Math.floor(n) }, o.roundPoint = function(n) { return { x: o.round(n.x), y: o.round(n.y) } }, o.roundPoints = function(n) { for (var e = 0; e < n.length; e++) n[e] = o.roundPoint(n[e]); return n }, o.roundRect = function(n) { return { x: o.round(n.x), y: o.round(n.y), width: o.round(n.width), height: o.round(n.height) } }, o.roundRadius = function(n) { return { topLeft: o.round(n.topLeft), topRight: o.round(n.topRight), bottomLeft: o.round(n.bottomLeft), bottomRight: o.round(n.bottomRight) } }, o.getMinMax = function(n, o) { return o > n ? { max: o, min: n } : { max: n, min: o } }, o.formatMinDigits = function(n, o) { for (var e = n + "", i = e.length; o > i; i++) e = "0" + e; return e }, n.math = o
    }(window.utilities),
    function(n) {
        var o, e;
        n.performance = { start: function() { o = void 0 != window.performance ? window.performance.now() : (new Date).getMilliseconds() }, end: function() { e = void 0 != window.performance ? window.performance.now() : (new Date).getMilliseconds(), document.querySelector(".debug").textContent = "Render time: " + (e - o).toFixed(2) + "ms, " + (1e3 / (e - o)).toFixed(2) + " fps" } }
    }(window.utilities),
    function(n) {
        n.emptyFunction = function() {}, n.hasChanged = function(n, o, e, i) { return i = i || o, n && e ? n[o] !== e[i] : n || e ? !0 : !1 }, n.checkAndSet = function(n, o, e, i, t) {
            if (t = void 0 === t ? "" : t, i = i || o, !n) return e ? e[i] === t ? !1 : (e[i] = t, !0) : (assert(!1, "window.utilities.checkAndSet: source and destination objects are both null!!!"), !1);
            var r = n[o] || t,
                c = e[i],
                d = !1;
            return r !== c && (e[i] = r, d = !0), d
        }
    }(window.utilities);
window.remoteColors = window.isDot2() ? { presetValues: { Value: { borderColor: "#FFFF00", activeBackgroundColor: "#555500" }, Output: { borderColor: "#FFFF00", activeBackgroundColor: "#555500" } }, button: { backgroundColor: "#000", backgroundColorPressed: "#3B2B00", strokeColor: "#505050" }, scrollBar: { backgroundColor: "#4C4C4C", backgroundColorPressed: "#4C4C4C", strokeColor: "#B2B2B2" }, commandLine: { color: "#FFF" }, ma2Window: { backgroundColor: "#1A1A1A", strokeColor: "#808080" }, canvasContainer: { fillColor: "#000", color: "#FFF", cell: { backgroundColor: "#505050", strokeColor: "#CCC", focusBorderColor: "#FFF" } }, fixtureSheet: { cellBackgroundColor: "#202020", cellBackgroundColor2: "#282828", headerCellBackgroundColor: "#393939", headerSelectedAttributeColor: "#FFF", headerSelectedPresetColor: "#FFF", focusBorderColor: "#FFF", borderColor: "#000" }, fixtureLayoutSheet: { cellBackgroundColor: "#000" }, commandHistory: { backgroundColor: "#1A1A1A", fillStyle: "#333", lineBackgroundColor: "#000", color: "#BBBBBB" }, pools: { cell: { backgroundColor: "#404040", color: "#FFF", selectedColor: "#FFFF00", border: { color: "#404040", focusColor: "#FFF" }, index: { color: "#A0A0A0", referencedColor: "#A0A0A0" }, stateStripe: { color: "#404040" } } }, groupPool: { cell: {} }, macroPool: { cell: {} }, presetPool: { cell: { amountOfUsed: { color: "#404040" }, dimmer: { backgroundColor: "#808080", color: "#E8A900" }, miscRects: [{ color: "#FF0" }, { color: "#0F0" }, { color: "#E8A900" }, { color: "#FF80FF" }] } }, executorSheet: { headerCellBackgroundColor: "#393939", cellBackgroundColor: "#646464", cellBackgroundColor2: "#7D7D7D", headerSelectedAttributeColor: "#F8FC00", headerSelectedPresetColor: "#B4B400", headerBorderColor: "#CE9703", borderColor: "#000000", borderColorAlternative: "#404040", selectedBorderColor: "#FF0" } } : { presetValues: { Value: { borderColor: "#FFFF00", activeBackgroundColor: "#555500" }, Fade: { borderColor: "#00FF00", activeBackgroundColor: "#006F00" }, Delay: { borderColor: "#E8A901", activeBackgroundColor: "#664A00" }, Output: { borderColor: "#E8A901", activeBackgroundColor: "#664A00" } }, button: { backgroundColor: "#000", backgroundColorPressed: "#3B2B00", strokeColor: "#E0A302" }, scrollBar: { backgroundColor: "#000", backgroundColorPressed: "#3B2B00", strokeColor: "#E0A302" }, commandLine: { color: "#FFF" }, ma2Window: { backgroundColor: "#1A1A1A", buttonsBackgroundColor: "#000", strokeColor: "#E0A302" }, canvasContainer: { fillColor: "#000", color: "#FFF", cell: { backgroundColor: "#505050", strokeColor: "#CCC", focusBorderColor: "#00F" } }, fixtureSheet: { cellBackgroundColor: "#000030", headerSelectedAttributeColor: "#F8FC00", headerSelectedPresetColor: "#B4B400" }, channelSheet: { cell: { backgroundColor: "#000030", color: "#FFF", border: { color: "#FFF", focusedColor: "#00F" } } }, commandHistory: { backgroundColor: "#1A1A1A", fillStyle: "#333", lineBackgroundColor: "#000", color: "#BBBBBB" }, pools: { cell: { backgroundColor: "#000", color: "#FFF", topHalf: { backgroundColor: "#000" }, bottomHalf: { backgroundColor1: "#3F3F3F", backgroundColor2: "#616161" }, border: { color: "#808080", focusColor: "#00F" }, index: { color: "#8F8F8F", referencedColor: "#0DDDD1" }, stateStripe: { color: "#808080" } } }, groupPool: { cell: { miscRects: { color: "#F00" } } }, macroPool: { cell: {} }, presetPool: { cell: { borderColor: "#FF0", amountOfUsed: { color: "#0DDDD1" }, dimmer: { backgroundColor: "#808080", color: "#E8A900" }, specialChars: [{ color: "#F00" }, { color: "#E8A900" }, { color: "#C0C0C0" }, { color: "#FFF" }], miscRects: [{ color: "#FF0" }, { color: "#0F0" }, { color: "#E8A900" }, { color: "#FF80FF" }] } }, worldPool: { cell: { backgroundColor: "#000", filledColor: "#FFF", emptyColor: "#888" } }, executorSheet: { headerCellBackgroundColor: "#000", cellBackgroundColor: "#606060", headerSelectedAttributeColor: "#F8FC00", headerSelectedPresetColor: "#B4B400", headerBorderColor: "#CE9703", borderColor: "#000000", borderColorAlternative: "#404040", selectedBorderColor: "#FF0" } };
defineNamespace(window, "timers"),
    function(e) {
        var n, t, i, o, r = [],
            l = [],
            a = [],
            c = function() {};
        c.Init = function() { n = setInterval(function() { for (var e = 0; e < r.length; e++) r[e]() }, 33), t = setInterval(function() { for (var e = 0; e < l.length; e++) l[e]() }, 33), i = setInterval(function() { for (var e = 0; e < a.length; e++) a[e]() }, 300), o = setInterval(function() { console && console.clear && "debug" == window.applicationType && console.clear() }, 36e4) }, c.AddRefreshTimerEventHandler = function(e) { r.push(e) }, c.RemoveRefreshTimerEventHandler = function(e) {
            var n = r.indexOf(e);
            n >= 0 && n < r.length && r.splice(n, 1)
        }, c.AddRequestTimerEventHandler = function(e) { l.push(e) }, c.RemoveRequestTimerEventHandler = function(e) {
            var n = l.indexOf(e);
            n >= 0 && n < l.length && l.splice(n, 1)
        }, c.AddBlinkTimerEventHandler = function(e) { a.push(e) }, c.RemoveBlinkTimerEventHandler = function(e) {
            var n = a.indexOf(e);
            n >= 0 && n < a.length && a.splice(n, 1)
        }, c.Clear = function() { r.length = 0, l.length = 0, a.length = 0, window.clearTimeout(n), window.clearTimeout(t), window.clearTimeout(i), window.clearTimeout(o) }, e.GlobalTimers = c
    }(window.timers);
defineNamespace(window, "utility"),
    function(t) {
        t.events = function(n) {
            var e, i = [];
            return t(n).each(function() {
                (e = t._data(this, "events")) && i.push({ element: this, events: e })
            }), i.length > 0 ? i : null
        }
    }(jQuery),
    function(t, n) { t.fn.isVisible = function() { return "none" != t(this).css("display") }, t.fn.setVisible = function() { return t(this).css("visibility", "visible") }, t.fn.setInvisible = function() { return t(this).css("visibility", "hidden") }, t.fn.applyTransform = function(n) { return t(this).css({ "-webkit-transform": n, "-moz-transform": n, "-ms-transform": n, transform: n }) }, t.getOrCreate = function(n, e, i, o) { i = i || "<div></div>", o = o || window.generic.globs.$body; var r = t("#" + n); return 0 in r || (r = t(i), r.attr("id", n), r.addClass(e), o.append(r)), r }, t.createBlock = function() { return t("<div></div>") }, t.createItem = function(n) { return n.html = n.html || "<div></div>", element = t(n.html), n.id && element.attr("id", n.id), n["class"] && element.addClass(n["class"]), n.parent && n.parent.append(element), element }, n.createItem = function(t) {}, n.getDefaultFontSize = function() { return parseInt(window.generic.globs.$body.css("font-size")) }, t.consoleStringToHTML = function(t) { return t ? t.replace("|", "<br/>") : "" }, t.normalizeConsoleString = function(t) { return t ? t.replace("|", "\n") : "" } }(jQuery, window.utility), window.uiTypes.SelectionOverlay = function(t, n) {
        function e(t) { var n = i(t); return n.x == t.x && n.y == t.y }

        function i(t) { var n = { x: t.x, y: t.y }; return n.x = Math.max(n.x, a.left), n.x = Math.min(n.x, a.left + a.width), n.y = Math.max(n.y, a.top), n.y = Math.min(n.y, a.top + a.height), n }
        var o, r, a = t,
            s = $(".selectionOverlay"),
            c = !1,
            u = n,
            l = null,
            f = null;
        this.setBorders = function(t) { a = t }, this.setParent = function(t) { u = t }, this.init = function(t, n) {
            var a = { x: t, y: n };
            if (c = e(a)) {
                r = o = i({ x: t, y: n }), isActive = t == o.x && n == o.y, s.css("width", 0), s.css("height", 0);
                var l = u.offset();
                s.css("top", l.top + o.y), s.css("left", l.left + o.x), s.show()
            }
        }, this.expand = function(t, n) {
            if (c) {
                r = i({ x: t, y: n });
                var e = Math.min(o.x, r.x),
                    a = Math.min(o.y, r.y),
                    y = Math.abs(o.x - r.x),
                    h = Math.abs(o.y - r.y),
                    d = u.offset();
                s.css("top", d.top + a), s.css("left", d.left + e), s.css("width", y), s.css("height", h), l = o.x > r.x ? window.uiTypes.HorizontalDirection.RightToLeft : o.x == r.x ? window.uiTypes.HorizontalDirection.None : window.uiTypes.HorizontalDirection.LeftToRight, f = o.y > r.y ? window.uiTypes.VerticalDirection.BottomToTop : o.y == r.y ? window.uiTypes.VerticalDirection.None : window.uiTypes.VerticalDirection.TopToBottom
            }
        }, this.getSize = function() { return c ? { startX: o.x, startY: o.y, endX: r.x, endY: r.y } : 0 }, this.setBorders = function(t) { a = t, this.Close() }, this.getHDirection = function() { return l }, this.getVDirection = function() { return f }, this.Close = function() { s.hide(), c = !1 }
    }, window.generic.globs.selectionOverlay = new window.uiTypes.SelectionOverlay, window.uiTypes.HorizontalDirection = { None: 0, LeftToRight: 1, RightToLeft: 2 }, window.uiTypes.VerticalDirection = { None: 0, TopToBottom: 1, BottomToTop: 2 },
    function(t) {
        function n(t, n) { if (2 > n || !t) return []; for (; 2 * n - 1 > t;) --n; for (var e = Array(), i = t, o = 0, r = 0, a = 0; n > a; a++) e.push({ x: a, y: o });++o, r += n, i -= n; for (var a = n, s = t - 1; i > n; ++a, --s) e[a] = { x: n - 1, y: o }, e[s] = { x: 0, y: o }, ++o, i -= 2, ++r; for (var c = i == n ? 0 : .5, a = i - 1; a >= 0; --a) e[r] = { x: c + a, y: o }, ++r; return ++o, { array: e, rows: o, columns: n, blockWidth: 100 / n, blockHeight: 100 / o } }

        function e(n, e, i, o) {
            var r = (100 / n.columns / 2, n.blockWidth + "%"),
                a = n.blockHeight + "%";
            isDot2() && (r = "calc(" + n.blockWidth + "% - 1px)", a = "calc(" + n.blockHeight + "% - 1px)");
            for (var s = 0; s < e.length; ++s) {
                var c = o.clone();
                t(".text", c).text(e[s].text), c.css({ position: "absolute", width: r, height: a, top: n.array[s].y * n.blockHeight + "%", left: n.array[s].x * n.blockWidth + "%" }), e[s].bind(c), i.append(c)
            }
        }

        function i(t) {
            for (var n = [], e = 0; e < t.array.length; ++e) {
                var i = t.array[e],
                    o = t.array[e + 1] || t.array[0],
                    r = 0,
                    a = o.x - i.x,
                    s = o.y - i.y;
                if (a) r = 90 * window.generic.sign(a);
                else if (s > 0) r = 180;
                else {
                    if (!(0 > s)) throw new Error;
                    r = 0
                }
                var c = a && s ? 90 / (Math.abs(a) / Math.abs(s) + 1) * window.generic.sign(-s) : 0;
                r += c, n.push(r)
            }
            return n
        }

        function o(t, n, e, i) {
            var o = t;
            o > 180 ? o -= 360 : -180 >= o && (o += 360);
            var r = "",
                a = { x: 0, y: 0 };
            "border" == n && (o >= -45 && 45 >= o ? (a.x = .5, r = "top") : o >= -135 && -45 > o ? (a.y = .5, r = "left") : o > 45 && 135 >= o ? (a.x = 1, a.y = .5, r = "right") : (a.x = .5, a.y = 1, r = "bottom"));
            var s = e.x - i.x;
            return "top" == r ? -.3 > s ? a.x += .5 : s > .3 && (a.x -= .5) : "bottom" == r && (-.5 > s ? a.x += .5 : s > .5 && (a.x -= .5)), { startPoint: { x: a.x + e.x, y: a.y + e.y }, angle: o }
        }

        function r(t, n) {
            var e = n - 90,
                i = 0 != e,
                o = "translate(-50%, -50%) " + (i ? "rotate(" + e + "deg)" : "");
            t.applyTransform(o), i && t.css({ "-webkit-transform-origin": "50% 50%", "-moz-transform-origin": "50% 50%", "-ms-transform-origin": "50% 50%", "transform-origin": "50% 50%" })
        }
        t.ButtonBlock = function() {}, t.ButtonBlock.create = function(a, s, c, u, l) {
            var f = n(a.length, s);
            if (e(f, a, c, u), l)
                for (var y = "border", h = i(f), d = 0; d < h.length; ++d) {
                    var p = o(h[d], y, f.array[d], f.array[d + 1] || f.array[0]),
                        g = t(l);
                    g.css({ position: "absolute", left: p.startPoint.x * f.blockWidth + "%", top: p.startPoint.y * f.blockHeight + "%", width: "25px", height: "20px" }), r(g, p.angle), c.append(g)
                }
            c.show()
        }
    }(jQuery),
    function(t) {
        function n(n, e, i) {
            var o = null;
            for (var r in n)
                if (n[r]) { o = t.Layout[r]; break }
            o ? e.call(o, i) : warning("$.Layout: invalid flag parameter " + n)
        }

        function e(t, e) { n(t, o, e) }

        function i(t, e) { n(t, r, e) }

        function o(t) { this.toggleClass("hidden", !t) }

        function r(t) {
            var n = "visible" === this.css("visibility");
            t && n || !t && !n || (t ? this.css("visibility", "visible") : this.css("visibility", "hidden"))
        }
        t.Layout = {}, t.Layout.init = function() { t.Layout.navigationPanel = t(".header-left-bottom"), t.Layout.cmdline = t(".header-left-top"), t.Layout.header = t(".header"), t.Layout.leftPanel = t(".middle-left"), t.Layout.topRightButton = t(".header-right"), t.Layout.dimmerWheel = t(".middle-right"), t.Layout.pageContent = t(".middle"), t.Layout.topButtons = t(".middle-center-top"), t.Layout.bottomButtons = t(".footer") }, t.Layout.hide = function(t) { e(t, !1) }, t.Layout.show = function(t, n) { n = arguments.length <= 1 ? !0 : !!n, e(t, n) }, t.Layout.setHidden = function(t) { i(t, !1) }, t.Layout.setVisible = function(t) { i(t, !0) }
    }(jQuery),
    function() {
        if (document.all && !window.setTimeout.isPolyfill) {
            var t = window.setTimeout;
            window.setTimeout = function(n, e) { var i = window.generic.slice.call(arguments, 2); return t(n instanceof Function ? function() { n.apply(null, i) } : n, e) }, window.setTimeout.isPolyfill = !0
        }
        Object.assign || (Object.assign = function(t, n) { for (var e, i, o = 1; o < arguments.length; ++o) { i = arguments[o]; for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]) } return t })
    }(),
    function(t) {
        t.BoundIncrement = function(t, n, e) { var i = t + 1; return i > e - 1 && (i = n), i }, t.BoundDecrement = function(t, n, e) { var i = t - 1; return n > i && (i = e - 1), i }, t.IsPointInRect = function(t, n) { return t.x >= n.left && t.x <= n.left + n.width && t.y >= n.top && t.y <= n.top + n.height }, t.GetEventPoint = function(t) { var n, e = t.originalEvent || t; return e.touches && e.touches.length > 0 ? n = e.touches[0] : e.changedTouches && (n = e.changedTouches[0]), { x: e.dataOffsetX || e.pageX || (n ? n.pageX : 0), y: e.dataOffsetY || e.pageY || (n ? n.pageY : 0) } }, t.AssertIsFinite = function(t) { if (void 0 == t) return !0; if (!isFinite(t)) throw Error() }, t.createObject = function(t) {
            function n() {}
            return n.prototype = t, new n
        }, t.extend = function(t, n) { F = function() {}, F.prototype = n.prototype, t.prototype = new F, t.prototype.constructor = t, t.superclass = n.prototype }
    }(window.generic);
! function(t, e) {
    var n = "undefined" != typeof window.Storage ? window.sessionStorage : !1;
    if (n) try { n.setItem("test", 1), n.removeItem("test") } catch (o) { n = !1 }
    var i = "undefined" != typeof window.Storage ? window.localStorage : !1;
    if (i) try { i.setItem("test", 1), i.removeItem("test") } catch (o) { i = !1 }
    var r = function() {},
        a = function(t) { var e = null; return e = i && n ? t ? i : n : i || n };
    r.AddSection = function(t) {
        if (r[t]) return window.generic.statusLogging("Storage section duplication '" + t + "'"), r[t];
        var o = r[t] = {
            Save: function(n, o, i) {
                var r = t + "." + n,
                    c = JSON.stringify(o) || "",
                    g = a(i);
                try { g ? g[r] = c : e.cookie(r, c) } catch (s) { window.generic.statusLogging(s) }
            },
            Load: function(o, r) {
                var a = t + "." + o,
                    c = null;
                try { c = n && n[a] ? n[a] : i && i[a] ? i[a] : e.cookie(a), c && (c = JSON.parse(c)), c = c || r } catch (g) { window.generic.statusLogging(g), c = r }
                return c
            }
        };
        return o.save = o.Save, o.load = o.Load, o
    }, t.Storage = r
}(window, jQuery);
defineNamespace(window, "generic.globs"),
    function(e) { e.config = { layout: { phone: { id: "phone", title: "Phone", dataPageLayout: "phone-layout", genericPage: { presetTypeBar: !1 }, pools: { minEmptyItems: 10 }, executorSheet: { fixedColumnsCount: 1 } }, tablet: { id: "tablet", title: "Tablet", dataPageLayout: "tablet-layout", genericPage: { presetTypeBar: !0 }, pools: { minEmptyItems: 0 }, executorSheet: { fixedColumnsCount: 2 } } }, icons: { world: "./images/MAIMG_ELEMENT_WORLD.png" } }, e.config.layout["default"] = e.config.layout.phone, e.config.keyboardCaptured = !1 }(window.generic.globs),
    function(e) {
        function t(e, t, n) {
            Object.defineProperty(e, t, {
                get: n.get,
                set: function(o) {
                    var a = n.get();
                    a !== o && (n.set(o), $(e).triggerHandler("propertyChanged", { name: t, oldValue: a, newValue: o }))
                }
            })
        }
        var n = function(e) {
            var n = e,
                o = [{ name: "layout", defaultValue: generic.globs.config.layout["default"].id }];
            o.forEach(function(e, o, a) { t(this, e.name, { get: function() { return n.Load(e.name) }, set: function(t) { n.Save(e.name, t, !0) } }), void 0 === this[e.name] && (this[e.name] = e.defaultValue) }.bind(this))
        };
        e.GlobalSettings = new n(Storage.AddSection("globalSettings"))
    }(window.generic.globs);
! function(e) {
    var t = {};
    t._handlers = {}, t.Register = function(e) { t._handlers[e.name] || (t._handlers[e.name] = e.handler, t._handlers[e.name].executeOnce = e.executeOnce) }, t.Unregister = function(e) { t._handlers[e] && delete t._handlers[e] }, t.HandleResponse = function(e) { for (var n in t._handlers) t._handlers[n](e) }, e.DataHandlerManager = t
}(window),
function() {
    var e = function() {
            var e = function(e, t) { Server.send(t ? { requestType: Server.requestTypes.commandConfirmationResult, result: e, option: t } : { requestType: Server.requestTypes.commandConfirmationResult, result: e }), setTimeout(function() { Server.resetBlockedRequests() }, 1e3) },
                t = !1,
                n = function(n) {
                    for (var r = parseInt(n.target.name), o = [], a = 0;;) {
                        var i = document.getElementById("optionsContainer" + a);
                        if (!i) break;
                        for (var s = 0; s < i.childNodes.length; s++)
                            if (-1 != i.childNodes[s].className.search("active")) {
                                var d = parseInt(i.childNodes[s].getAttribute("name"));
                                o.push(d);
                                break
                            }
                        a++
                    }
                    e(r, o), t = !0
                },
                r = function() { t || e(-1) };
            return {
                name: "CommandConfirmationDataHandler",
                handler: function(e) {
                    if (e.responseType != Server.requestTypes.commandConfirmation) return !1;
                    t = !1;
                    for (var o = [], a = 0; a < e.buttons.length; a++) o.push({ id: "alert_button" + a, text: e.buttons[a].text, btnId: e.buttons[a].id, type: "custom", click: n });
                    return e.focusedButtonIndex && 0 <= e.focusedButtonIndex && e.focusedButtonIndex < o.length && (o[e.focusedButtonIndex].focused = !0), $.alert({ title: e.tt, message: e.msg, buttons: o, options: e.optionGroups, onClose: r }), !0
                }
            }
        }(),
        t = function() {
            var e = function(e, t) { Server.send({ requestType: Server.requestTypes.presetCommandConfirmationResult, presetStoreMode: t, result: e }) },
                t = !1,
                n = function(n) {
                    var r = n.target.id.split("alert_button"),
                        a = r[r.length - 1];
                    e(a, o), t = !0
                },
                r = function() { t || e(-1, -1) },
                o = 0,
                a = function(e) {
                    var t = e.split("dropDownItem");
                    o = t[t.length - 1]
                };
            return {
                name: "PresetCommandConfirmationDataHandler",
                handler: function(e) {
                    if (e.responseType != Server.requestTypes.presetCommandConfirmation) return !1;
                    t = !1;
                    for (var i = [], s = 0; s < e.buttons.length; s++) i.push({ id: "alert_button" + s, text: e.buttons[s], type: "custom", click: n });
                    e.focusedButtonIndex && 0 <= e.focusedButtonIndex && e.focusedButtonIndex < i.length && (i[e.focusedButtonIndex].focused = !0);
                    for (var d = [], s = 0; s < e.dropDownItems.length; s++) d.push({ id: "dropDownItem" + s, text: e.dropDownItems[s] });
                    return e.dropDownItemIndex && 0 <= e.dropDownItemIndex && e.dropDownItemIndex < i.length ? (d[e.dropDownItemIndex].selected = !0, o = e.dropDownItemIndex) : o = 0, $.alert({ title: e.tt, message: e.ques, buttons: i, dropDown: { label: e.msg, items: d, onItemChanged: a }, onClose: r }), !0
                }
            }
        }(),
        n = { name: "LoginResultDataHandler", handler: function(e) { return e.responseType != Server.requestTypes.login ? !1 : (window.login.GetLoginManager().onResultHandler(e.result), !0) } },
        r = {
            name: "CommandLineDataHandler",
            handler: function(e) {
                var t = e.text,
                    n = e.prompt,
                    r = e.promptcolor,
                    o = void 0 !== t || void 0 !== n || void 0 !== r;
                return o && window.generic.globs.commandLine && window.generic.globs.commandLine.render(n, r, t, !0), o
            }
        };
    DataHandlerManager.Register(e), DataHandlerManager.Register(t), DataHandlerManager.Register(n), DataHandlerManager.Register(r)
}(),
function(e) {
    var t = function() { this._actions = {} };
    t.prototype.register = function(e) {
        if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) this._registerOne(e[t]);
        else this._registerOne(e)
    }, t.prototype._registerOne = function(e) { return e && e.type && e.handler ? (this._actions[e.type] || (this._actions[e.type] = []), void this._actions[e.type].push(e.handler)) : void warning("Dispatcher.register: Invalid argument 'actions'") }, t.prototype.unregister = function(e) {
        if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) this._unregisterOne(e[t]);
        else this._unregisterOne(e)
    }, t.prototype._unregisterOne = function(e) {
        if (!e || !e.type || !e.handler) return void warning("Dispatcher.unregister: Invalid argument 'action'");
        var t = this._actions[e.type];
        if (t)
            for (var n = 0; n < t.length; n++)
                if (t[n] == e.handler) { t = t.splice(n, 1); break }
    }, t.prototype.trigger = function(e) {
        if (!e || !e.type) return void warning("Dispatcher.trigger: Invalid argument 'action'");
        var t = this._actions[e.type];
        if (t)
            for (var n = 0; n < t.length; n++) t[n](e.type, e.data)
    }, e.Dispatcher = function() { return new t }
}(window);
defineNamespace(window, "window.uiTypes.pages.actions"),
    function(e) { e.playbacks = { ITEM_INDEX_CHANGED: "item_index_changed", PAGE_INDEX_CHANGED: "page_index_changed", MODE_CHANGED: "mode_changed" } }(window.uiTypes.pages.actions);
var e = window.timers.GlobalTimers;
window.g_ErrPop = !1,
    function(e) {
        var t = function(e) { this.m_timer = null, this.m_requestSent = !1, this.m_sessionTimerEventHandler = e, this.m_isLoggedIn = !1, this.m_id = 0 };
        t.prototype.start = function() { window.generic.statusLogging("Start Session"), this.m_timer || (this.m_timer = setTimeout(this.m_sessionTimerEventHandler, 50), this.m_requestSent = !0), this.m_sessionTimerEventHandler() }, t.prototype.stop = function() { this.m_timer && (window.clearTimeout(this.m_timer), this.m_timer = !1), this.m_id = 0, window.generic.statusLogging("Stop Session") }, t.prototype.getId = function() { return this.m_id }, t.prototype.setId = function(e) { this.m_id = e, this.m_timer && (this.m_requestSent ? window.clearTimeout(this.m_timer) : window.clearInterval(this.m_timer), this.m_requestSent = !1, this.m_timer = setInterval(this.m_sessionTimerEventHandler, 1e4)) }, t.prototype.getIsLoggedIn = function() { return this.m_isLoggedIn }, t.prototype.setIsLoggedIn = function(e) { this.m_isLoggedIn = e }, e.Session = t
    }(window), window.Server = function() {
        function t() { window.generic.statusLogging("Trying to reconnect"), o.connect(), window.clearTimeout(g), g = !1 }

        function n() { o.send({}, !0) }
        var o = {};
        o.requestTypes = { command: "command", keyname: "keyname", login: "login", encoder: "encoder", commandConfirmation: "commandConfirmation", commandConfirmationResult: "commandConfirmationResult", presetCommandConfirmation: "presetCommandConfirmation", presetCommandConfirmationResult: "presetCommandConfirmationResult", getdata: "getdata", presetTypes: "presetTypes", presetTypeList: "presetTypeList", fixtureSheet: "fixtureSheet", channelSheet: "channelSheet", fixtureLayout: "fixtureLayout", executorSheet: "executorSheet", commandHistory: "commandHistory", pool: "pool", pool_itemSelected: "pool_itemSelected", playbacks: "playbacks", playbacks_userInput: "playbacks_userInput", close: "close" }, o.requestOptions = { command: { maxRequests: 0 }, keyname: { maxRequests: 0 }, login: { maxRequests: 10 }, encoder: { maxRequests: 0 }, commandConfirmation: { maxRequests: 10 }, commandConfirmationResult: { maxRequests: 0 }, presetCommandConfirmation: { maxRequests: 10 }, presetCommandConfirmationResult: { maxRequests: 0 }, getdata: { maxRequests: 1 }, presetTypes: { maxRequests: 1 }, presetTypeList: { maxRequests: 1 }, fixtureSheet: { maxRequests: 1 }, channelSheet: { maxRequests: 1 }, executorSheet: { maxRequests: 1 }, commandHistory: { maxRequests: 1 }, pool: { maxRequests: 3 }, pool_itemSelected: { maxRequests: 0 }, playbacks: { maxRequests: 1 }, playbacks_userInput: { maxRequests: 0 }, close: { maxRequests: 0 } };
        var s = window.generic.globs.$document;
        o.notAvailableEvent = "serverNotAvailable", o.connectionEstablishedEvent = "connectionEstablished", o.connectionLostEvent = "connectionLost", o.connectionsLimitReachedEvent = "connectionLimitReached", o.sessionCreatedEvent = "sessionCreated", o.sessionLostEvent = "sessionLost";
        var i = "ws://" + window.location.host + "/?ma=1",
            r = !1,
            a = 0,
            c = 20,
            m = !1,
            g = !1,
            d = {},
            u = 30,
            l = new Session(n);
        o.IsConnected = function() { return m }, o.ValidSession = function() { return l.getId() > 0 }, o.GetSessionId = function() { return l.getId() }, o.SetSessionId = function(e) {
            var t = e != l.getId() && (0 >= e || l.getId() <= 0);
            l.setId(e), t && (e > 0 ? s.trigger(o.sessionCreatedEvent, e) : 0 > e && s.trigger(o.sessionLostEvent))
        }, o.SetLoginState = function(e) { return l.setIsLoggedIn(e) }, o.connect = function() {++a, a > c && s.trigger(o.notAvailableEvent), window.generic.statusLogging("m_serverAccessAttempts = " + a), window.generic.statusLogging("Connecting to : " + i); try { r = new WebSocket(i), r.onopen = o.SocketOnOpen, r.onmessage = o.SocketOnMessage, r.onclose = o.SocketOnClose, r.onerror = o.SocketOnError } catch (e) { o.SocketOnException() } }, o.disconnect = function() { m && 1 == r.readyState && (o.send({ requestType: o.requestTypes.close }), l.stop(), r.close()) }, o.SocketOnOpen = function(e) { window.generic.statusLogging("Connected to Console"), l.start(), m = !0, g && (window.clearTimeout(g), g = !1) }, o.resetBlockedRequests = function() { d = {} }, o.SocketOnMessage = function(e) {
            var t = "";
            try { t = JSON.parse(e.data) } catch (n) { return d = {}, void window.generic.statusLogging("Invalid Data received from Console (" + n + ") - Message [" + e.data + "]") }
            if ("server ready" == t.status) {
                s.trigger(o.connectionEstablishedEvent), a = 0, window.generic.statusLogging("Console is ready");
                var i = localStorage.getItem("appType");
                localStorage.setItem("appType", t.appType), i != t.appType && location.reload();
                var r = document.getElementsByTagName("title")[0];
                r && (r.innerText = t.appType), generic.globs.pageManager.applyPageFilter()
            } else {
                var c = t.responseType;
                c && "login" == c && l.setIsLoggedIn(t.result), c ? d[c] = (d[c] || 1) - 1 : void 0 == t.session && window.generic.statusLogging("Incomming typeless response");
                try { DataHandlerManager.HandleResponse(t) } catch (n) { window.generic.statusLogging("Error at response handling. Response type '" + c + "'") }
            }
        };
        var p = function() {
            var e = m;
            m = !1, e && s.trigger(o.connectionLostEvent), r = !1, window.ui.forcedDisconnect || g || (g = setTimeout(function() { t() }, 1e3))
        };
        return o.SocketOnClose = function(e) { p(), window.generic.statusLogging("Disconnected from the Console") }, o.SocketOnError = o.SocketOnException = function(e) { p(), window.generic.statusLogging("General Connection error") }, o.send = function(e, t) {
            if (1 == r.readyState && o.IsConnected() && (t || l.getId() > 0)) {
                e.session = l.getId(), e.command && (e.requestType = o.requestTypes.command, window.generic.statusLogging("exec command: " + e.command)), e.keyname && (e.requestType = o.requestTypes.keyname, window.generic.statusLogging("set keyname: " + e.keyname + ", value: " + e.value)), e.cmdlineText && window.generic.statusLogging("set text: " + e.cmdlineText);
                var n = e.requestType;
                if (void 0 != n && "login" != n && "getdata" != n && n != o.requestTypes.close && !l.getIsLoggedIn()) {
                    var s = $.getOrCreate("errorOverlay"),
                        i = { overlay: s, title: "Error", modalWindow: !0, messages: [{ text: "You are not logged in!" }], buttons: [{ type: "custom", text: "Close" }], stylePrefix: "loginForm", formSubmitHandler: function(e, t) { return setTimeout(function() { window.g_ErrPop = !1 }, 3e3), $.Popup.CloseLast(), !1 } },
                        a = $.getOrCreate("loginOverlay"),
                        c = a.css("display");
                    return void(window.g_ErrPop || "none" != c || (window.generic.statusLogging("Dropped request. User is not logged in."), $.Popup.Show(i), window.g_ErrPop = !0))
                }
                var m = o.requestOptions[e.requestType],
                    g = m ? m.maxRequests : u;
                if (e = Object.assign(e, m), d[n] = d[n] || 0, !g || d[n] < g) { var p = JSON.stringify(e); try { r.send(p), n && (d[n] = (d[n] || 0) + 1) } catch (w) { window.generic.statusLogging("Error sending Data to the console (" + w + ")") } } else window.generic.statusLogging("Dropped request. Request type: " + n)
            }
        }, o.closeAllConnection = function() { e.Clear(), window.generic.statusLogging("Closing all Connections as moving away from Page"), o.disconnect() }, o.sendAttributeEncoderResolution = function(e, t) { o.send({ command: 'assign attribute "' + e + '"/EncoderResolution=' + t }) }, o
    }();
defineNamespace(window, "ui"),
    function(e, t) {
        for (var n = { deltaMs: 300, preventDefaultEvent: !1, moveDelta: 10 }, o = (e(document), !1), a = ["iPad", "iPhone", "iPod"], i = 0; i < a.length; i++)
            if (-1 != navigator.platform.indexOf(a[i])) { o = !0; break }
        var r = function(t) { e.extend(n, t) },
            v = {};
        r.startEvent = "pointerdown", r.leaveEvent = "pointerleave", r.moveEvent = "pointermove", r.endEvent = "pointerup", r.maTouchDown = "maTouchDown", r.maTouchTap = "maTouchTap", r.maTouchUp = "maTouchUp", r.maTouchEnter = "maTouchEnter", r.maTouchMove = "maTouchMove", r.maTouchLeave = "maTouchLeave", r.maLongTap = "maLongTap";
        var m = [r.maTouchDown, r.maTouchTap, r.maTouchUp, r.maTouchEnter, r.maTouchMove, r.maTouchLeave, r.maLongTap],
            u = [r.maTouchEnter, r.maTouchMove, r.maTouchLeave, r.maLongTap],
            c = function(t, a) {
                var i = { itemMultitouch: !1 };
                e.extend(i, a), Array.isArray(t) || (t = [t]), e.each(t, function(t, a) {
                    function m(t) {
                        o && (t.preventDefault(), i.itemMultitouch = !0);
                        var a = t.pointerId;
                        if (0 === t.button) {
                            var v = 0;
                            for (var m in E) ++v;
                            if (i.itemMultitouch || !(v > 0)) {
                                E[a] || (E[a] = e.extend({}, h));
                                var c = E[a];
                                if (c.down) throw Error();
                                c.down = !0, c.delta = 0, c.isOver = !0, c.pointerId = a;
                                var d = t.currentTarget;
                                d._eventData = c;
                                var T = s(t, r.maTouchDown);
                                d.dispatchEvent(T), c.downPoint = window.generic.GetEventPoint(t), d._maTouchMoveEventTriggers > 0 && (c.HandleMove = p(d, c), document.addEventListener(r.moveEvent, c.HandleMove)), c.HandleUp = l(d, c), document.addEventListener(r.endEvent, c.HandleUp), c.timer = setTimeout(u, n.deltaMs, a, d)
                            }
                        }
                    }

                    function u(e, t) { c(e, !0, !0, t) }

                    function c(e, t, n, o) {
                        var a = E[e];
                        if (clearTimeout(a.timer), a.timer = 0, a.delta = 1, t)
                            if (n) {
                                if (a.down) {
                                    var i = s(null, r.maLongTap);
                                    o.dispatchEvent(i)
                                }
                            } else {
                                if (!a.down) throw Error("Touch TimerStop. Impossible situation");
                                var i = s(null, r.maTouchTap);
                                o.dispatchEvent(i)
                            }
                    }

                    function d(e, t) {
                        var n = E[e];
                        delete E[e], n.down = 0, document.removeEventListener(r.endEvent, n.HandleUp), document.removeEventListener(r.moveEvent, n.HandleMove)
                    }
                    var T = a;
                    if (T._maTouchEventsSubscription) return void console.log("Touch: Element " + T + " was already subscribed");
                    T._maTouchEventsSubscription = !0;
                    var E = {},
                        h = { timer: 0, delta: 1, down: !1, isOver: !1, downPoint: 0, HandleUp: null, HandleMove: null };
                    T.addEventListener(r.startEvent, m), v[T] = m;
                    var l = function(e, t) {
                            var n = e,
                                o = t;
                            return function(e) {
                                if (0 == e.button) {
                                    var t = e.pointerId;
                                    if (o.down && t == o.pointerId) {
                                        o.delta || c(t, !0, !1, n);
                                        var a = s(e, r.maTouchUp);
                                        n.dispatchEvent(a), d(t, n)
                                    }
                                }
                            }
                        },
                        p = function(t, o) {
                            var a = t,
                                i = o;
                            return function(t) {
                                var o = t.pointerId;
                                if (i.down && o == i.pointerId) {
                                    var v = e(a),
                                        m = { top: v.offset().top, left: v.offset().left, width: a.offsetWidth, height: a.offsetHeight },
                                        u = window.generic.GetEventPoint(t),
                                        d = { x: u.x - i.downPoint.x, y: u.y - i.downPoint.y },
                                        T = Math.abs(d.x) > n.moveDelta || Math.abs(d.y) > n.moveDelta,
                                        E = !1;
                                    window.generic.IsPointInRect(u, m) ? (i.isOver || a.dispatchEvent(s(t, r.maTouchEnter)), i.isOver = !0) : i.isOver && (i.isOver = !1, E = !0), a.dispatchEvent(E ? s(t, r.maTouchLeave) : s(t, r.maTouchMove)), (E || T) && c(o, !1)
                                }
                            }
                        }
                })
            },
            d = function(e) { v[e] && (e.removeEventListener(r.startEvent, v[e]), e._maTouchEventsSubscription = !1, delete v[e]) },
            s = function(t, n) { var o = document.createEvent("CustomEvent"); return t ? (o.initCustomEvent(n, t.bubbles, t.cancelable, {}), o = e.extend(o, t)) : o.initCustomEvent(n, !0, !0, {}), o },
            T = function(e) {
                var t = e.prototype ? e.prototype.addEventListener : e.addEventListener,
                    n = function(e, n, o) {-1 != m.indexOf(e) && (this._maTouchEventsCount || (this._maTouchEventsCount = 0, c(this)), ++this._maTouchEventsCount, -1 != u.indexOf(e) && (this._maTouchMoveEventTriggers || (this._maTouchMoveEventTriggers = 0), ++this._maTouchMoveEventTriggers)), void 0 === t ? console.log("Can't subscribe '" + this + "' to event " + e) : t.call(this, e, n, o) };
                e.prototype ? e.prototype.addEventListener = n : e.addEventListener = n
            },
            E = function(e) {
                var t = e.prototype ? e.prototype.removeEventListener : e.removeEventListener,
                    n = function(e, n, o) {-1 != m.indexOf(e) && (--this._maTouchEventsCount, 0 === this._maTouchEventsCount && d(this), this._maTouchEventsCount = Math.max(0, this._maTouchEventsCount), -1 != u.indexOf(e) && (--this._maTouchMoveEventTriggers, this._maTouchMoveEventTriggers = Math.max(0, this._maTouchMoveEventTriggers))), void 0 === t ? console.log("Can't unsubscribe '" + this + "' from event " + e) : t.call(this, e, n, o) };
                e.prototype ? e.prototype.removeEventListener = n : e.removeEventListener = n
            };
        T(window), T(window.HTMLElement || window.Element), T(document), T(HTMLBodyElement), T(HTMLDivElement), T(HTMLImageElement), T(HTMLUListElement), T(HTMLAnchorElement), T(HTMLLIElement), T(HTMLTableElement), window.HTMLSpanElement && T(HTMLSpanElement), window.HTMLCanvasElement && T(HTMLCanvasElement), window.SVGElement && T(SVGElement), E(window), E(window.HTMLElement || window.Element), E(document), E(HTMLBodyElement), E(HTMLDivElement), E(HTMLImageElement), E(HTMLUListElement), E(HTMLAnchorElement), E(HTMLLIElement), E(HTMLTableElement), window.HTMLSpanElement && E(HTMLSpanElement), window.HTMLCanvasElement && E(HTMLCanvasElement), window.SVGElement && E(SVGElement), t.Touch = r
    }(jQuery, window);
! function(e) {
    function t(t) {
        t.onClose = t.onClose || function() {};
        var o = 100,
            n = !1;
        t.overlay.attr("rel", "overlay"), t.overlay.attr("class", t.stylePrefix);
        var a = '<div class="' + t.stylePrefix + '" rel="container">';
        if (t.title && (a += '<div class="' + t.stylePrefix + '" rel="title-bar"><div class="' + t.stylePrefix + '" rel="title">' + t.title + '</div><div class="' + t.stylePrefix + '" rel="close-button"></div></div>'), a += '<div class="' + t.stylePrefix + '" rel="content">', t.messages)
            for (var r = 0; r < t.messages.length; r++) a += '<p class="' + t.stylePrefix + '" rel="message">' + e.consoleStringToHTML(t.messages[r].text) + "</p>";
        if (t.textboxes && t.textboxes.length > 0 || t.buttons && t.buttons.length > 0 || t.dropDowns && t.dropDowns.length > 0) {
            if (a += '<form class="' + t.stylePrefix + '" rel="form">', t.dropDown && (a += '<div class="' + t.stylePrefix + '" rel="dropDownContainer"></div>'), t.textboxes)
                for (var r = 0; r < t.textboxes.length; r++) a += l({ data: t, textbox: t.textboxes[r], tabStopIndex: o }), ++o;
            if (t.options) {
                a += '<ul class="' + t.stylePrefix + '" rel="options">';
                for (var r = 0; r < t.options.length; r++) {
                    var i = '<ul id="optionsContainer' + r + '" class="alert" rel="optionsContainer">';
                    if (n = !0, 0 == t.options[r].type)
                        for (var x = 0; x < t.options[r].options.length; x++) i += x == t.options[r].activeOption ? d({ text: t.options[r].options[x].text, data: t, index: x, groupIndex: "group" + r, name: t.options[r].options[x].id }) : p({ text: t.options[r].options[x].text, data: t, index: x, groupIndex: "group" + r, name: t.options[r].options[x].id });
                    else i += isDot2() ? 1 == t.options[r].activeOption ? u({ data: t, groupIndex: "group" + r, name: t.options[r].id }) : c({ data: t, groupIndex: "group" + r, name: t.options[r].id }) : 1 == t.options[r].activeOption ? u({ data: t, groupIndex: "group" + r, name: t.options[r].id, text: t.options[r].title }) : c({ data: t, groupIndex: "group" + r, name: t.options[r].id, text: t.options[r].title });
                    "" != i && (i += "</ul>", a += t.options[r].title ? s({ title: t.options[r].title, data: t, content: i, index: r }) : i, ++o)
                }
                a += "</ul>"
            }
            if (t.buttons) {
                a += '<ul class="' + t.stylePrefix + '" rel="buttons">';
                for (var r = 0; r < t.buttons.length; r++) t.buttons[r].text = e.consoleStringToHTML(t.buttons[r].text), a += m({ data: t, button: t.buttons[r], tabStopIndex: o }), ++o;
                a += "</ul>"
            }
            a += "</form>"
        }
        if (a += "</div></div>", t.overlay.html(a), n)
            for (var r = 0; r < t.options.length; r++)
                if (0 == t.options[r].type)
                    for (var x = 0; x < t.options[r].options.length; x++) {
                        var g = document.getElementById("group" + r + "_option" + x + "_wrapper");
                        g && (g.onclick = function(e) {
                            var t = e.currentTarget;
                            if (t) {
                                var o = t.id.substr(0, t.id.length - 8),
                                    n = t.id.substring(5, t.id.search("_o")),
                                    a = document.getElementById(o);
                                if (a) {
                                    a.click();
                                    for (var r = 0;;) {
                                        var i = document.getElementById("group" + n + "_option" + r + "_wrapper"),
                                            l = document.getElementById("group" + n + "_option" + r);
                                        if (!i || !l) break;
                                        l.checked || (i.className = "optionWrapper"), r++
                                    }
                                }
                            }
                        });
                        var v = document.getElementById("group" + r + "_option" + x);
                        v && (v.onchange = function(e) {
                            var t = e.currentTarget;
                            if (t) {
                                var o = document.getElementById(t.id + "_wrapper");
                                o && (o.className = t.checked && 1 == t.checked ? "optionWrapper active" : "optionWrapper")
                            }
                        })
                    } else {
                        var f = document.getElementById("group" + r + "_wrapper");
                        f && (f.onclick = function(e) {
                            var t = e.currentTarget;
                            if (t) {
                                var o = t.id.substr(0, t.id.length - 8) + "_ckb",
                                    n = document.getElementById(o);
                                n && n.click()
                            }
                        });
                        var b = document.getElementById("group" + r + "_ckb");
                        b && (b.onchange = function(e) {
                            var t = e.currentTarget;
                            if (t) {
                                var o = document.getElementById(t.id.substr(0, t.id.length - 4) + "_wrapper");
                                o && (o.className = t.checked && 1 == t.checked ? "optionWrapper active noBorder" : "optionWrapper")
                            }
                        })
                    }
        if (t.formSubmitHandler ? e("[rel='form']", t.overlay).bind("submit", function(o) {
                var n = 0;
                if (t.textboxes) {
                    var a = e("[rel='text'], [rel='password']", t.overlay);
                    n = {};
                    for (var r = 0; r < a.length; r++) {
                        var i = e(a[r]);
                        n[i.attr("id")] = i.val()
                    }
                }
                return t.formSubmitHandler(o, n)
            }) : e("[rel='form']", t.overlay).bind("submit", function() { return e.Popup.CloseLast(), !1 }), t.dropDown) {
            for (var y = e("[rel='dropDownContainer']", t.overlay), h = t.dropDown, I = [], x = 0; x < h.items.length; ++x) I.push({ value: h.items[x].id, text: e.consoleStringToHTML(h.items[x].text), "default": h.items[x].selected });
            var P = commands.createCommandType(e.extend({}, { id: "someDropDownCommand" + r, title: h.label }, { states: I }));
            commands.addCommandType(P);
            var _ = { command: commands.StateCommand(P, function(e, o, n) { commands.ui.defaultCommandExecute(e, o, n), t.dropDown.onItemChanged(e.getState().value) }), uiElement: commands.ui.UIDropDown() };
            _.uiElement.init(_.command);
            var C = e('<span class="' + t.stylePrefix + '" rel="dropDownLabel">' + h.label + "</span>"),
                w = e('<div class="' + t.stylePrefix + '" rel="dropDown"></div>');
            w.append(_.uiElement.getItem()), y.append(C), y.append(w), generic.globs.serverCommandManager.addCommands("dropDownCommands", [_]);
            var k = t.onClose;
            t.onClose = function() { commands.ui.disposeUIElements([_]), k() }.bind(this)
        }
        var W = !1;
        if (t.buttons) {
            var L = 100 / t.buttons.length;
            e("[rel='buttonWrapper']").css({ width: L + "%" });
            for (var r = 1; r <= t.buttons.length; r++) {
                var E = e("[rel='button']:nth-child(" + r + ")", t.overlay);
                t.buttons[r - 1].click && E.bind(Touch.endEvent, t.buttons[r - 1].click)
            }
        }
        if (t.options && t.options.length > 0) {
            W = !0;
            var O = 100 / t.options.length;
            if (e("[rel='optionGroupWrapper']").css({ width: O + "%" }), isDot2()) {
                var T = t.buttons.length / (t.buttons.length + t.options.length) * 100,
                    D = t.options.length / (t.buttons.length + t.options.length) * 100;
                e("[rel='options']").css({ width: D + "%" }), e("[rel='buttons']").css({ width: T + "%" })
            }
        }
        t.control = e(":first", t.overlay), e("[rel='close-button']", t.overlay).on(Touch.maTouchUp, e.Popup.Close.bind(this, t.control))
    }

    function o(t) {
        for (var o = 0; o < e.Popup.settings.length; o++)
            if (e.Popup.settings[o].control == t) return o;
        return -1
    }

    function n(t) {
        for (var o = 0; o < e.Popup.settings.length; ++o)
            if (e.Popup.settings[o].control == t.control && e.Popup.settings[o].overlay == t.overlay) return o;
        return -1
    }
    var a = generic.globs.config,
        r = e.getOrCreate("popupOverlay");
    e.Popup = function() {}, e.Popup.settings = [], e.Popup.Show = function(o) {
        if (o.control) { if (n(o) > -1) return } else {
            if (!o.overlay) throw new Error;
            t(o)
        }
        var i = o.overlay || r,
            l = o.control.css("z-index"),
            s = i.css("z-index");
        parseInt(s) || (s = 4), o.control.css("z-index", parseInt(i.css("z-index")) + 1);
        var p = { control: o.control, overlay: i, z_index: l, startEventHandlers: null, onClose: o.onClose },
            d = e.events(i) ? e.events(i)[0].events[Touch.startEvent] : null;
        if (d) { p.startEventHandlers = []; for (var c = 0; c < d.length; c++) p.startEventHandlers.push(d[c].handler) }
        e.Popup.settings.push(p), i.unbind(Touch.startEvent), o.modalWindow || i.bind(Touch.startEvent, e.Popup.CloseLast), o.control.show(), i.show();
        var u = e("[data-focus=true]", o.control);
        0 in u && setTimeout(function() { u.focus() }, 100), document.addEventListener("keyup", p.onKeyUp), a.keyboardCaptured = !1
    };
    var i = "'this.setSelectionRange(0, this.value.length)'",
        l = _.template('<label class="<%= data.stylePrefix %>" rel="label" for="<%= textbox.id %>">            <%= textbox.text %>        </label>         <input class="<%= data.stylePrefix %>" rel="<%= textbox.type || "text" %>" type="<%= textbox.type || "text" %>" id="<%= textbox.id %>"            value="<%= textbox.value %>" tabindex="<%= tabStopIndex %>" data-focus="<%= (textbox.focused ? "true" : "false") %>" <%= (textbox.autoSelect ? "onfocus=' + i + '" : "") %> <%= (textbox.autoCapitalize ? "autocomplete=\\"off\\" autocorrect=\\"off\\" autocapitalize=\\"off\\" spellcheck=\\"false\\"" : "") %> />'),
        s = _.template('<li class="<%= data.stylePrefix %>" rel="optionGroupWrapper">            <div class="<%= data.stylePrefix %> button" rel="optionGroupTitle" id="optionGroupTitle<%= index %>" >                <%= title %>            </div>            <%= content %>        </li>');
    if (isDot2()) var p = _.template('<li class="optionWrapper" rel="optionWrapper" id="<%= groupIndex %>_option<%= index %>_wrapper" name="<%= name %>" >                <input type="radio" class="<%= data.stylePrefix %> commandoption" rel="option" id="<%= groupIndex %>_option<%= index %>" name="<%= groupIndex %>" />                <label class="<%= data.stylePrefix %> commandoptionLabel" rel="optionLabel" id="<%= groupIndex %>_option<%= index %>Label" for="<%= data.stylePrefix %>_option<%= index %>"><%= text %></label>            </li>'),
        d = _.template('<li class="optionWrapper active" rel="optionWrapper" id="<%= groupIndex %>_option<%= index %>_wrapper" name="<%= name %>" >                <input type="radio" class="<%= data.stylePrefix %> commandoption" rel="option" id="<%= groupIndex %>_option<%= index %>" name="<%= groupIndex %>" checked />                <label class="<%= data.stylePrefix %> commandoptionLabel" rel="optionLabel" id="<%= groupIndex %>_option<%= index %>Label" for="<%= data.stylePrefix %>_option<%= index %>"><%= text %></label>            </li>'),
        c = _.template('<li class="optionWrapper" rel="optionWrapperChk" id="<%= groupIndex %>_wrapper" name="<%= name %>" >                <input type="checkbox" class="<%= data.stylePrefix %> commandoption" rel="option" id="<%= groupIndex %>_ckb" name="<%= groupIndex %>" />                <div class="<%= data.stylePrefix %> commandoptionImg" rel="optionImg" id="<%= groupIndex %>Img" ></div>            </li>'),
        u = _.template('<li class="optionWrapper active noBorder" rel="optionWrapperChk" id="<%= groupIndex %>_wrapper" name="<%= name %>" >                <input type="checkbox" class="<%= data.stylePrefix %> commandoption" rel="option" id="<%= groupIndex %>_ckb" name="<%= groupIndex %>" checked />                <div class="<%= data.stylePrefix %> commandoptionImg" rel="optionImg" id="<%= groupIndex %>Img" ></div>            </li>');
    else var p = _.template('<li class="optionWrapper" rel="optionWrapper" id="<%= groupIndex %>_option<%= index %>_wrapper" name="<%= name %>" >                <input type="radio" class="<%= data.stylePrefix %> commandoption" rel="option" id="<%= groupIndex %>_option<%= index %>" name="<%= groupIndex %>" />                <div class="<%= data.stylePrefix %> commandoptionImg" rel="optionImg" ></div>                <label class="<%= data.stylePrefix %> commandoptionLabel" rel="optionLabel" id="<%= groupIndex %>_option<%= index %>Label" for="<%= data.stylePrefix %>_option<%= index %>"><%= text %></label>            </li>'),
        d = _.template('<li class="optionWrapper active noBorder" rel="optionWrapper" id="<%= groupIndex %>_option<%= index %>_wrapper" name="<%= name %>" >                <input type="radio" class="<%= data.stylePrefix %> commandoption" rel="option" id="<%= groupIndex %>_option<%= index %>" name="<%= groupIndex %>" checked />                <div class="<%= data.stylePrefix %> commandoptionImg" rel="optionImg" ></div>                <label class="<%= data.stylePrefix %> commandoptionLabel" rel="optionLabel" id="<%= groupIndex %>_option<%= index %>Label" for="<%= data.stylePrefix %>_option<%= index %>"><%= text %></label>            </li>'),
        c = _.template('<li class="optionWrapper" rel="optionWrapperChk" id="<%= groupIndex %>_wrapper" name="<%= name %>" >                <input type="checkbox" class="<%= data.stylePrefix %> commandoption" rel="option" id="<%= groupIndex %>_ckb" name="<%= groupIndex %>" />                <div class="<%= data.stylePrefix %> commandoptionImg" rel="optionImg" id="<%= groupIndex %>Img" ></div>                <label class="<%= data.stylePrefix %> commandoptionLabel" rel="optionLabel" id="<%= groupIndex %>_optionLabel" for="<%= groupIndex %>Img"><%= text %></label>            </li>'),
        u = _.template('<li class="optionWrapper active noBorder" rel="optionWrapperChk" id="<%= groupIndex %>_wrapper" name="<%= name %>" >                <input type="checkbox" class="<%= data.stylePrefix %> commandoption" rel="option" id="<%= groupIndex %>_ckb" name="<%= groupIndex %>" checked />                <div class="<%= data.stylePrefix %> commandoptionImg" rel="optionImg" id="<%= groupIndex %>Img" ></div>                <label class="<%= data.stylePrefix %> commandoptionLabel" rel="optionLabel" id="<%= groupIndex %>_optionLabel" for="<%= groupIndex %>Img"><%= text %></label>            </li>');
    var m = _.template('<li class="<%= data.stylePrefix %>" rel="buttonWrapper">            <button class="<%= data.stylePrefix %> commandbutton" rel="button" data-role="submit" tabindex="<%= tabStopIndex %>" id="<%= button.id %>"  data-focus="<%= (button.focused ? "true" : "false") %>" name="<%= button.btnId %>" >                <%= button.text %>            </button>        </li>');
    e.Popup.Close = function(t) {
        var n = o(t);
        if (!(0 > n)) {
            var r = n == e.Popup.settings.length - 1,
                i = 0 == n,
                l = e.Popup.settings[n];
            l.onClose && l.onClose(), e.Popup.settings.splice(n, 1);
            for (var s = !1, p = 0; p < e.Popup.settings.length; p++)
                if (e.Popup.settings != l && e.Popup.settings.overlay == l.overlay) { s = !0; break }
            if (s || l.overlay.hide(), l.control.hide(), r && (l.overlay.unbind(Touch.startEvent, e.Popup.CloseLast), l.startEventHandlers))
                for (var p = 0; p < l.startEventHandlers.length; p++) l.overlay.bind(Touch.startEvent, l.startEventHandlers[p]);
            l.control.css("z-index", l.z_index), a.keyboardCaptured = i, document.removeEventListener("keyup", l.onKeyUp)
        }
    }, e.Popup.CloseLast = function() { var t = e.Popup.settings[e.Popup.settings.length - 1]; return t ? void e.Popup.Close(t.control) : void window.generic.statusLogging("No popup to close") }
}(jQuery),
function(e) {
    var t = e.getOrCreate("alertOverlay");
    e.alert = function(o) { o.buttons = o.buttons || [{ id: "alertOk", text: "Close", focused: !0 }], o.stylePrefix = o.stylePrefix || "alert", e.Popup.Show({ overlay: t, modalWindow: !0, title: o.title, messages: [{ text: o.message }], buttons: o.buttons, options: o.options, dropDown: o.dropDown, formSubmit: e.Popup.CloseLast, stylePrefix: o.stylePrefix, onClose: o.onClose }) }
}(jQuery), window.Overlays = isDot2() ? { serverDisabledOverlay: { overlay: $.getOrCreate("commonOverlay")[0], modalWindow: !0, messages: [{ text: "Remotes are disabled!|To activate Remotes for this console goto Setup/Global Settings." }], stylePrefix: "overlay" }, serverUnavailableOverlay: { overlay: $.getOrCreate("commonOverlay")[0], modalWindow: !0, messages: [{ text: "Cannot connect to the console!!!" }], stylePrefix: "overlay" }, connectionsLimitOverlay: { overlay: $.getOrCreate("commonOverlay")[0], modalWindow: !0, messages: [{ text: "Connection limit of 3 devices reached! Can't connect to the console!|Please close connection of any other Remote and try again." }], stylePrefix: "overlay" } } : { serverDisabledOverlay: { overlay: $.getOrCreate("commonOverlay")[0], modalWindow: !0, messages: [{ text: "Remotes are disabled!|To activate Remotes for this console goto Setup/Console/Global Settings." }], stylePrefix: "overlay" }, serverUnavailableOverlay: { overlay: $.getOrCreate("commonOverlay")[0], modalWindow: !0, messages: [{ text: "Cannot connect to the console!!!" }], stylePrefix: "overlay" }, connectionsLimitOverlay: { overlay: $.getOrCreate("commonOverlay")[0], modalWindow: !0, messages: [{ text: "Connection limit of 3 devices reached! Can't connect to the console!|Please close connection of any other Remote and try again." }], stylePrefix: "overlay" } };
defineNamespace(window, "uiTypes.pages"),
    function(t) {
        var e = function() { this.currentIndex = [0], this.step = [0], this.offset = [0] };
        e.prototype.getIndices = function(t) {
            var e = {};
            e.current = [], e.previous = [], e.next = [];
            for (var s = 0; s < this.step.length; s++) {
                var n = this.offset[s] + this.itemsCount[s];
                this.currentIndex[s] || (this.currentIndex[s] = 0);
                var r = Math.max(0, 0 == this.step[s] ? 0 : Math.floor((this.currentIndex[s] - this.offset[s]) / this.step[s])),
                    i = this.offset[s] + r * this.step[s];
                this.currentIndex[s] = i;
                var h = { startIndex: i, endIndex: Math.max(0, Math.min(n, i + this.step[s] - 1)), pageIndex: r };
                e.current.push(h), i > this.offset[s] && (h = { startIndex: Math.max(this.offset[s], e.current[s].startIndex - this.step[s]), endIndex: e.current[s].startIndex - 1, pageIndex: e.current[s].pageIndex - 1 }, e.previous.push(h)), i + this.step[s] <= n && (h = { startIndex: e.current[s].endIndex + 1, endIndex: Math.min(n, e.current[s].endIndex + this.step[s]), pageIndex: e.current[s].pageIndex + 1 }, e.next.push(h))
            }
            return e
        }, e.prototype.stepForward = function() { for (var t = 0; t < this.currentIndex.length; t++) this.currentIndex[t] += this.step[t], this.currentIndex[t] = Math.min(this.offset[t] + this.itemsCount[t], this.currentIndex[t]) }, e.prototype.stepBackward = function() { for (var t = 0; t < this.currentIndex.length; t++) this.currentIndex[t] -= this.step[t], this.currentIndex[t] = Math.max(this.offset[t], this.currentIndex[t]) }, e.prototype.setCurrentIndex = function(t) {
            if (this.currentIndex = [], "object" == typeof t)
                for (var e = 0; e < t.length; e++) this.currentIndex.push(t[e]);
            else if ("string" == typeof t) {
                this.currentIndex = [], t = t.replace("[", ""), t = t.replace("]", "");
                for (var s = t.split(","), e = 0; e < s.length; e++) {
                    var n = parseInt(s[e]);
                    isNaN(n) || this.currentIndex.push(n)
                }
            } else this.currentIndex[0] = t
        }, e.prototype.setPageIndex = function(t) { for (var e = 0; e < t.length; e++) this.currentIndex[e] = "object" == typeof t ? t[e] * this.step[e] : t * this.step[e] }, e.prototype.setStep = function(t) {
            if (this.step = [], "object" == typeof t)
                for (var e = 0; e < t.length; e++) this.step[e] = t[e];
            else this.step[0] = t
        }, e.prototype.setItemsCount = function(t) {
            if (this.itemsCount = [], "object" == typeof t)
                for (var e = 0; e < t.length; e++) this.itemsCount.push(Math.max(0, t[e] - 1));
            else this.itemsCount[0] = Math.max(0, t - 1)
        }, e.prototype.setOffset = function(t) {
            if (this.offset[e] = [], "object" == typeof t)
                for (var e = 0; e < t.length; e++) this.offset[e] || (this.offset[e] = 0), this.currentIndex[e] || (this.currentIndex[e] = 0), this.currentIndex[e] += t[e] - this.offset[e], this.offset[e] = t[e];
            else this.currentIndex += t - this.offset, this.offset = t
        }, t.Paginator = e
    }(window.uiTypes.pages);
window.uiTypes = window.uiTypes || {}, window.uiTypes.controls = window.uiTypes.controls || {},
    function(e) {
        var t = function() {},
            o = _.template("<div data-type='radio-button' data-value='<%= value %>'><input type='radio' id='<%= id %>' name='<%= groupName %>' <%= checked ? \"checked\" : \"\" %> data-type='marker'/>         <label for='<%= id %>' data-type='label'><span class='content'><%= text %></span></label></div>");
        t.create = function(e) { e.id = "radio-" + e.text; var t = $(o(e)); return t.on("change", e.handler), t }, t.dispose = function(e) { $("[data-type=radio-button]", e).off("change") }, e.RadioButton = { create: t.create, dispose: t.dispose }
    }(window.uiTypes.controls),
    function(e) {
        var t = function() {};
        t.create = function(t) { for (var o = $("<div data-type='radio-button-group'></div>"), a = "radio-name-" + Math.random(), n = 0; n < t.length; n++) t[n].groupName = a, o.append(e.RadioButton.create(t[n])); return o }, t.dispose = function(t) { for (var o = $("[data-type=radio-button-group]", t), a = 0; a < o.children.length; a++) e.RadioButton.dispose(o.children[a]) }, e.RadioButtonGroup = { create: t.create, dispose: t.dispose }
    }(window.uiTypes.controls);
window.uiTypes.DropDownButton = function() {
    var t = window.timers.GlobalTimers,
        e = function(e) {
            function i() { m && (m = !1, this.renderList(), $.Popup.Show({ control: w, onClose: function() { g = !1 } }), g = !0), d != s() && (d = !d, d ? a.show() : a.hide()) }

            function o(t, e, i, o) {
                for (var a, s = o, d = t.length, p = 1;;) {
                    a = r(t, p), a.width += e, a.height += i;
                    var c = n(a.width, s),
                        u = h(a.height, s);
                    if (c >= 0 && u >= 0) break;
                    if (0 > c) {
                        if (Math.abs(c) <= s.left) {
                            if (s.left -= Math.abs(c), 0 > u) {
                                var v = s.top - Math.abs(u);
                                s.top = Math.max(v, 0), s.fit = v >= 0
                            }
                        } else if (p > 1) {
                            --p, a = r(t, p), a.width += e, a.height += i, u = h(a.height, s);
                            var v = s.top - Math.abs(u);
                            s.top = Math.max(v, 0), s.fit = v >= 0
                        } else if (s.left = 0, s.fit = !1, 0 > u) {
                            var v = s.top - Math.abs(u);
                            s.top = Math.max(v, 0)
                        }
                        break
                    }
                    if (++p, p > d) {
                        var v = s.top - Math.abs(u);
                        s.top = Math.max(v, 0), s.fit = v >= 0;
                        break
                    }
                }
                return s.width = Math.min(a.width, l.width), s.height = Math.min(a.height, l.height), s.n_rows = a.n_rows, s.n_columns = p, s
            }

            function n(t, e) { return e.width - t }

            function h(t, e) { return e.height - t }

            function r(t, e) {
                for (var i = { width: 0, height: 0 }, o = [], n = Math.floor(t.length / e), h = 0; e > h; h++) o.push(n);
                for (var h = n * e, r = 0; h < t.length; h++, r++) ++o[r];
                for (var a = 0, s = 0; e > s; s++) {
                    for (var d = 0, p = 0, h = 0; h < o[s]; h++, a++) t[a].width > d && (d = t[a].width), p += t[a].height;
                    i.width += d, p > i.height && (i.height = p)
                }
                return i.n_rows = o, i
            }
            var a, s, d, p, c, u, l, v = e,
                f = v[0],
                w = null,
                g = !1,
                m = !1,
                b = null;
            this.init = function(t) {
                var o = $(".button-content", v);
                0 in o || (o = $('<div class="button-content"><div class="content"></div></div>'), e.append(o)), this.$title = $(".content", o), w = $.createBlock(), window.generic.globs.$body.append(w), a = $("*[data-rel=drop-down-sign]", v), s = t.canExecuteDropDown || function() { return !0 }, d = !1, p = t.$container, p.css({ position: "absolute", top: "0", left: "0" }), c = t.createItem, a.hide(), b = { down: t.OnStart, up: t.OnEnd, move: t.OnMove, tap: t.OnTap, leave: function() { s() && !g && (m = !0) }, redraw: i.bind(this), resize: this.close }, this.bind(b)
            }, this.bind = function(e) { f.addEventListener(Touch.maTouchDown, e.down), f.addEventListener(Touch.maTouchMove, e.move), f.addEventListener(Touch.maTouchUp, e.up), f.addEventListener(Touch.maTouchTap, e.tap), f.addEventListener(Touch.maTouchLeave, e.leave), f.addEventListener(Touch.maLongTap, e.leave), $(window).bind("resize", e.resize), t.AddRefreshTimerEventHandler(e.redraw) }, this.unbind = function(e) { t.RemoveRefreshTimerEventHandler(e.redraw), $(window).unbind("resize", e.resize), f.removeEventListener(Touch.maTouchDown, e.down), f.removeEventListener(Touch.maTouchMove, e.move), f.removeEventListener(Touch.maTouchUp, e.up), f.removeEventListener(Touch.maTouchTap, e.tap), f.removeEventListener(Touch.maTouchLeave, e.leave), f.removeEventListener(Touch.maLongTap, e.leave) }, this.rename = function(t) { this.$title.html(t) }, this.updateListData = function(t) { u = t }, this.updateListRect = function(t) { l = t }, this.renderList = function() {
                if (u) {
                    var t = !1;
                    l || (t = !0, l = { left: 0, top: 0, width: generic.globs.$body.width(), height: generic.globs.$body.height() }), w.setInvisible();
                    var e = $("<div></div>").append(p.children());
                    generic.globs.$body.append(p), p.css({ width: "", height: "" });
                    for (var i = u.length, n = [], h = v.offset(), r = [], a = 0, s = 0; i > s; s++) {
                        var d = c(u[s]);
                        n.push(d), p.append(d), r.push({ width: d.outerWidth(), height: d.outerHeight() }), a += r[s].height
                    }
                    e.remove();
                    var f = parseInt(p.css("border-left-width")) + 1 + parseInt(p.css("border-right-width")) + 1,
                        g = parseInt(p.css("border-top-width")) + 1 + parseInt(p.css("border-bottom-width")) + 1,
                        m = { left: h.left - l.left, top: h.top + v.height() - l.top };
                    m.width = l.width - m.left;
                    var b = h.top - l.top > l.height - (h.top - l.top) - v.height();
                    b && (m.top = l.height - (h.top - l.top)), m.height = l.height - m.top, m.fit = !0, m = o(r, f, g, m), m.width = Math.max(m.width, v.width());
                    var T = 0;
                    p.css("display", "table");
                    for (var s = 0; s < m.n_rows[0] && T < n.length; s++) {
                        var L = 0,
                            M = $("<div data-rel='drop-down-list-row'></div>");
                        M.css("display", "table-row");
                        for (var E = 0; E < m.n_columns && T < n.length; E++, T++) {
                            var d = n[s + L];
                            d.css("display", "table-cell"), M.append(d), L += m.n_rows[E]
                        }
                        p.append(M)
                    }
                    b && (m.top = l.height - m.top - m.height), w.css({ top: l.top + m.top, left: l.left + m.left, position: "absolute", overflow: "auto" }).innerWidth(m.width).innerHeight(m.height), p.css({ width: "100%", height: "100%" }), w.append(p), w.setVisible(), t && (l = void 0)
                }
            }, this.list = function() { return p }, this.close = function() { g && $.Popup.Close(w) }, this.dispose = function() { this.unbind(b), this.close(), w.remove() }
        };
    return e
}();
defineNamespace(window, "uiTypes"),
    function(e) {
        function t() {
            if (this.modelItems && this.modelItems.length > 0)
                for (var e = 0; e < this.modelItems.length; e++) {
                    var t = this.modelItems[e].$item;
                    t && t.off(Touch.maTouchUp, this.buttonClickHandler)
                }
            this.$container.empty()
        }
        var i = _.template('<div class="vertical-bar preset-type-bar"></div>'),
            s = _.template('<div class="vertical-bar_item-wrapper preset-type-bar_item_wrapper">             <div class="vertical-bar_item preset-type-bar_item <%= ( active ? "vertical-bar_item__active preset-type-bar__active" : "") %>" id="<%= id %>">                 <div class="preset-type-bar_item_number"><%= index %></div>                <div class="preset-type-bar_item_title" <%= ( active ? "style=color:yellow" : "") %>><%= title %></div>                <div class="preset-type-bar_item_indicator <%= (on ? "on" : "") %>"></div>            </div>         </div>'),
            r = _.template('<div class="vertical-bar_item-wrapper preset-type-bar_item_wrapper">             <div class="vertical-bar_item preset-type-bar_item <%= ( active ? "vertical-bar_item__active preset-type-bar__active" : "") %>" id="<%= id %>">                 <div class="preset-type-bar_item_number"><%= index %></div>                <div class="preset-type-bar_item_title" <%= ( active ? "style=color:yellow" : "") %>><%= title %></div>            </div>         </div>'),
            a = function(e) { this.$container = $(i()), e && $(e).append(this.$container), this.template = s, this.allTemplate = r, this.modelItems = null, this.buttonClickHandler = n.bind(this), this.itemSelectedCallback = Function.constructor },
            n = function(e) {
                var t = e.data.number;
                log("selected preset type id: " + t);
                var i = this.modelItems.length;
                if (i > 0)
                    for (var s = 0; i > s; s++)
                        if (this.modelItems[s].index == t) { this.itemSelectedCallback(t); break }
            };
        a.prototype.getItem = function() { return this.$container }, a.prototype.setupFull = function() {
            if (this.$container.toggleClass("hidden", !0), t.call(this), !(this.modelItems.length <= 0)) {
                for (var e = 0; e < this.modelItems.length; e++) {
                    var i = null;
                    0 == this.modelItems[e].index ? (window.allPresetSelected && (this.modelItems[e].active = !0), i = this.allTemplate(this.modelItems[e])) : (window.allPresetSelected && window.poolViewVisible && (this.modelItems[e].active = !1), i = this.template(this.modelItems[e]));
                    var s = $(i);
                    this.modelItems[e].$item = s, s.on(Touch.maTouchUp, { number: this.modelItems[e].index }, this.buttonClickHandler), this.$container.append(s)
                }
                this.$container.toggleClass("hidden", !1)
            }
        }, a.prototype.setupUpdate = function(e) {
            if (this.modelItems && e) {
                assert(this.modelItems.length === e.length, "PresetTypesUpdate invalid argument. Incoming array length differs from existing one");
                for (var t = 0; t < this.modelItems.length; t++) {
                    var i = this.modelItems[t],
                        s = e[t],
                        r = void 0 !== s.active && i.active !== s.active,
                        a = void 0 !== s.on && i.on !== s.on,
                        n = void 0 !== s.title && i.title !== s.title;
                    if (r || a || n) {
                        var o = $(".preset-type-bar_item", i.$item);
                        if (r && (o.toggleClass("vertical-bar_item__active", s.active), i.active = s.active), a) {
                            var l = $(".preset-type-bar_item_indicator", o);
                            l.toggleClass("on", s.on), i.on = s.on
                        }
                        if (n) {
                            var d = $(".preset-type-bar_item_title", o);
                            d.text(s.title), i.title = s.title
                        }
                    }
                }
            }
        }, a.prototype.render = function(e) { if (!e.presets) return !1; var t = []; return window.poolViewVisible && t.push({ id: "presetType0", active: !1, index: 0, title: "All", on: 0 }), _.each(e.presets, function(e, i, s) { t.push({ id: "presetType" + (e.i || void 0), active: e.s, index: e.i || void 0, title: e.np, on: e.a }) }, this), e.init || !this.modelItems || this.modelItems.length != t.length ? (this.modelItems = t, this.setupFull()) : this.setupUpdate(t), !0 }, a.prototype.dispose = function() { t.call(this), this.$container.remove() }, e.PresetTypesBar = a
    }(window.uiTypes),
    function(e) {
        var t = window.Server.requestTypes,
            i = function(e, t, i) { this.m_commandLine = e, this.commandExecutor = t, this.presetTypesUIControl = i, this.presetTypesUIControl.itemSelectedCallback = this.onItemSelected.bind(this), this.$tempParent = null, this.full_preset_type_init = !0, this.isActive = !1, this.model = null, this.dataHandlerName = "PresetDataHandler", this.refresh_context = this.refresh.bind(this), this.dataRequest_context = this.dataRequest.bind(this), this.dataHandler_context = this.dataHandler.bind(this) };
        i.prototype.onItemSelected = function(e) {
            for (var t = this.m_commandLine.getText() + " PT " + e, i = 0; 10 > i; i++) {
                var s = document.getElementById("presetType" + i);
                s && (s.children[1].style.color = i == e ? "yellow" : "")
            }
            window.allPresetSelected = 0 == e ? !0 : !1, this.commandExecutor.send({ command: t })
        }, i.prototype.dataRequest = function() { this.commandExecutor.send({ requestType: t.presetTypeList }) }, i.prototype.dataHandler = function(e) { return e.responseType != t.presetTypeList ? !1 : (this.model = { init: this.full_preset_type_init, presets: e.pre }, this.full_preset_type_init = !1, !0) }, i.prototype.refresh = function() { this.model && this.presetTypesUIControl.render(this.model) }, i.prototype.dispose = function() { this.deactivate(), this.presetTypesUIControl && (this.presetTypesUIControl.dispose(), this.presetTypesUIControl = null) };
        var s = window.timers.GlobalTimers,
            r = window.DataHandlerManager;
        i.prototype.activate = function() { this.isActive || (s.AddRequestTimerEventHandler(this.dataRequest_context), s.AddRefreshTimerEventHandler(this.refresh_context), r.Register({ name: this.dataHandlerName, handler: this.dataHandler_context }), this.isActive = !0, this.$tempParent && this.$oldParent.append(this.presetTypesUIControl.getItem())) }, i.prototype.deactivate = function() { this.isActive && (s.RemoveRequestTimerEventHandler(this.dataRequest_context), s.RemoveRefreshTimerEventHandler(this.refresh_context), r.Unregister(this.dataHandlerName), this.isActive = !1, this.$tempParent || (this.$tempParent = $("<div></div>")), this.$oldParent = this.presetTypesUIControl.getItem().parent(), this.$tempParent.append(this.presetTypesUIControl.getItem())) }, e.PresetTypesDataControl = i
    }(window.uiTypes);
defineNamespace(window, "uiTypes"),
    function(t) {
        function i(t, i) {
            if (e(t), i.items)
                for (var n = 0; n < i.items.length; ++n) {
                    var s = i.items[n],
                        r = c(s),
                        d = $(r);
                    t.$buttonsContainer.append(d);
                    var l = $(".bar-button", d);
                    t.$buttons.push(l), l.on(Touch.maTouchUp, s.handler)
                }
            i.options && (o(t, i.options.containerClickHandler), a(t, i.options.icon, i.options.index)), t.data = i
        }

        function n(t, i) {
            if (i.items)
                for (var n = 0; n < t.data.items.length; ++n) {
                    var e = t.data.items[n],
                        s = i.items[n],
                        c = t.$buttons[n];
                    void 0 !== s.active && e.active !== s.active && (c.toggleClass("active", s.active), e.active = s.active)
                }
            i.options && (o(t, i.options.containerClickHandler), a(t, i.options.icon, i.options.index))
        }

        function o(t, i) { void 0 !== i && i != t.options.containerClickHandler && (t.options.containerClickHandler && t.$optionsButton.off(Touch.maTouchUp, !1, t.options.containerClickHandler), i && t.$optionsButton.on(Touch.maTouchUp, i), t.options.containerClickHandler = i) }

        function a(t, i, n) { void 0 !== i && i != t.options.icon && (t.$icon.attr("src", i), t.options.icon = i), void 0 !== n && n != t.options.index && (t.$index.text(n), t.options.index = n) }

        function e(t) {
            if (t.$buttons && t.$buttons.length > 0)
                for (var i = 0; i < t.$buttons.length; i++) {
                    var n = t.$buttons[i];
                    n && n.off(Touch.maTouchUp)
                }
            t.$buttonsContainer.empty(), t.$buttons = []
        }
        var s = _.template('<div class="tablet-navigation-bar">             <div class="bar-options-wrapper">                 <div class="bar-options">                     <div data-rel="icon" class="bar-options-icon">                         <img src="<%= icon %>"/>                         <div data-rel="index" class="bar-options-index"></div>                     </div>                     <div class="bar-options-content">                         <div class="text content">Main Menu</div>                     </div>                     <embed data-rel="new-window-sign" class="newWindowSign" type="image/svg+xml" src="./images/newWindowSign.svg">                 </div>             </div>             <div class="bar-buttons-container line">             </div>         </div>');
        if (window.isDot2()) var c = _.template('<div class="bar-button-wrapper line-element">                 <div class="bar-button <%= active ? "active" : "" %>" data-id="<%= id %>">                     <div class="bar-button-content">                         <img src="<%= icon %>" class="navigationBarImg">                         <div class="text content"><%= title %></div>                     </div>                 </div>             </div>');
        else var c = _.template('<div class="bar-button-wrapper line-element">                 <div class="bar-button <%= active ? "active" : "" %>" data-id="<%= id %>">                     <div class="bar-button-content">                         <div class="text content"><%= title %></div>                     </div>                 </div>             </div>');
        var r = function(t) { this.data = null, this.$buttons = null, this.options = { containerClickHandler: null, icon: "", index: "" }, this.$container = $(s(this.options)), this.$container.hide(), t.append(this.$container), this.$buttonsContainer = $(".bar-buttons-container", this.$container), this.$optionsButton = $(".bar-options-wrapper", this.$container), this.$icon = $("[data-rel=icon] img", this.$container), this.$index = $("[data-rel=index]", this.$container) };
        r.prototype.show = function() { this.$container.show() }, r.prototype.hide = function() { this.$container.hide() }, r.prototype.setData = function(t) { t && (!this.data || !this.data.items || this.data.items && t.items && this.data.items.length != t.items.length ? i(this, t) : n(this, t)) }, r.prototype.setTitle = function(t) {
            var i = $(".active .text", this.$container);
            0 in i && i.text(t)
        }, r.prototype.dispose = function() { this.options.containerClickHandler && this.$optionsButton.off(Touch.maTouchUp, !1, this.options.containerClickHandler), e(this), this.$container.remove() }, t.TabletNavigationBar = r
    }(window.uiTypes);
defineNamespace(window, "uiTypes"),
    function(t) {
        var e = _.template('<div data-rel="buttons-container" class="horizontal-navigation-bar"></div>'),
            i = _.template('<div data-rel="prev-button" class="horizontal-navigation-bar-left-button">         <div data-rel="button-text" class="page-name"><%= prevTitle %></div>     </div>     <div data-rel="cur-button" class="horizontal-navigation-bar-current-page-title">         <div data-rel="button-text"><%= curTitle %></div>         <div data-rel="icon" class="horizontal-navigation-bar-icon">             <img src="<%= options.icon %>"/>             <div data-rel="index" class="horizontal-navigation-bar-index"><%= options.index %></div>         </div>         <embed data-rel="new-window-sign" class="newWindowSign" type="image/svg+xml" src="./images/newWindowSign.svg">     </div>     <div data-rel="next-button" class="horizontal-navigation-bar-right-button">         <div data-rel="button-text" class="page-name"><%= nextTitle %></div>     </div>'),
            n = function(t) { this.$container = $(e()), this.$container.hide(), t.append(this.$container), this.data = null, this.$items = null };
        n.prototype.show = function() { this.$container.show() }, n.prototype.hide = function() { this.$container.hide() }, n.prototype.setData = function(t) { t && (this.data ? this.update(t) : this.create(t)) }, n.prototype.create = function(t) {
            this.disposeItems(), this.data = { prevTitle: "", prevHandler: utilities.emptyFunction, curTitle: "", curHandler: utilities.emptyFunction, nextTitle: "", nextHandler: utilities.emptyFunction, options: { icon: "", index: "" } }, this.$items = {}, t.prevTitle = t.prevTitle || "", t.curTitle = t.curTitle || "", t.nextTitle = t.nextTitle || "", t.options = t.options || {}, t.options.icon = t.options.icon || "", t.options.index = t.options.index || "";
            var e = i(t),
                n = $(e);
            this.$container.append(n), this.$items.$prev = $("[data-rel=prev-button]", this.$container), this.$items.$cur = $("[data-rel=cur-button]", this.$container), this.$items.$next = $("[data-rel=next-button]", this.$container), this.$items.$icon = $("[data-rel=icon] img", this.$container), this.$items.$index = $("[data-rel=index]", this.$container), this.$items.$prev.on(Touch.maTouchUp, t.prevHandler), this.$items.$cur.on(Touch.maTouchUp, t.curHandler), this.$items.$next.on(Touch.maTouchUp, t.nextHandler), $.extend(this.data, t)
        }, n.prototype.update = function(t) {
            var e = this.data;
            void 0 !== t.prevHandler && e.prevHandler !== t.prevHandler && (this.$items.$prev.off(Touch.maTouchUp, e.prevHandler), this.$items.$prev.on(Touch.maTouchUp, t.prevHandler), e.prevHandler = t.prevHandler), void 0 !== t.curHandler && e.curHandler !== t.curHandler && (this.$items.$cur.off(Touch.maTouchUp, e.curHandler), this.$items.$cur.on(Touch.maTouchUp, t.curHandler), e.curHandler = t.curHandler), void 0 !== t.nextHandler && e.nextHandler !== t.nextHandler && (this.$items.$next.off(Touch.maTouchUp, e.nextHandler), this.$items.$next.on(Touch.maTouchUp, t.nextHandler), e.nextHandler = t.nextHandler), void 0 !== t.prevTitle && e.prevTitle !== t.prevTitle && ($("[data-rel=button-text]", this.$items.$prev).text(t.prevTitle), e.prevTitle = t.prevTitle), void 0 !== t.curTitle && e.curTitle !== t.curTitle && ($("[data-rel=button-text]", this.$items.$cur).text(t.curTitle), e.curTitle = t.curTitle), void 0 !== t.nextTitle && e.nextTitle !== t.nextTitle && ($("[data-rel=button-text]", this.$items.$next).text(t.nextTitle), e.nextTitle = t.nextTitle), t.options && (void 0 !== t.options.icon && e.options.icon !== t.options.icon && (this.$items.$icon.attr("src", t.options.icon), e.options.icon = t.options.icon), void 0 !== t.options.index && e.options.index !== t.options.index && (this.$items.$index.text(t.options.index), e.options.index = t.options.index)), $.extend(this.data, t)
        }, n.prototype.disposeItems = function() { this.$items && (this.$items.$prev && this.$items.$prev.off(Touch.maTouchUp, this.data.prevHandler), this.$items.$cur && this.$items.$cur.off(Touch.maTouchUp, this.data.curHandler), this.$items.$next && this.$items.$next.off(Touch.maTouchUp, this.data.nextHandler)), this.$container.empty() }, n.prototype.dispose = function() { this.disposeItems(), this.$container.remove() }, t.HorizontalNavigationBar = n
    }(window.uiTypes),
    function(t) {
        var e = _.template('<div data-rel="buttons-container" class="modal-horizontal-navigation-bar"></div>'),
            i = _.template('<div data-rel="cur-button" class="modal-horizontal-navigation-bar-current-page-title">         <div data-rel="button-text"><%= curTitle %></div>     </div>     <div data-rel="next-button" class="modal-horizontal-navigation-bar-right-button">         <div data-rel="button-text" class="page-name"><%= nextTitle %></div>     </div>'),
            n = function(t) { this.$container = $(e()), this.$container.hide(), t.append(this.$container), this.data = null, this.$items = null };
        n.prototype.show = function() { this.$container.show() }, n.prototype.hide = function() { this.$container.hide() }, n.prototype.setData = function(t) { this.data ? this.update(t) : this.create(t) }, n.prototype.create = function(t) {
            if (t) {
                this.disposeItems(), this.$items = {}, t.curTitle = t.curTitle || "", t.nextTitle = t.nextTitle || "";
                var e = i(t),
                    n = $(e);
                this.$container.append(n), this.$items.$cur = $("[data-rel=cur-button]", this.$container), this.$items.$next = $("[data-rel=next-button]", this.$container), this.$items.$cur.on(Touch.maTouchUp, t.curHandler), this.$items.$next.on(Touch.maTouchUp, t.nextHandler), this.data = t
            }
        }, n.prototype.update = function(t) {
            var e = this.data;
            void 0 !== t.curHandler && e.curHandler !== t.curHandler && (this.$items.$cur.off(Touch.maTouchUp, e.curHandler), this.$items.$cur.on(Touch.maTouchUp, t.curHandler), e.curHandler = t.curHandler), void 0 !== t.nextHandler && e.nextHandler !== t.nextHandler && (this.$items.$next.off(Touch.maTouchUp, e.nextHandler), this.$items.$next.on(Touch.maTouchUp, t.nextHandler), e.nextHandler = t.nextHandler), void 0 !== t.curTitle && e.curTitle !== t.curTitle && ($("[data-rel=button-text]", this.$items.$cur).text(t.curTitle), e.curTitle = t.curTitle), void 0 !== t.nextTitle && e.nextTitle !== t.nextTitle && ($("[data-rel=button-text]", this.$items.$next).text(t.nextTitle), e.nextTitle = t.nextTitle), this.data = t
        }, n.prototype.disposeItems = function() { this.$items && (this.$items.$cur && this.$items.$cur.off(this.data.curHandler), this.$items.$next && this.$items.$next.off(this.data.nextHandler)), this.$container.empty() }, n.prototype.dispose = function() { this.disposeItems(), this.$container.remove() }, t.ModalHorizontalNavigationBar = n
    }(window.uiTypes);
defineNamespace(window, "uiTypes.canvas"),
    function(t) {
        var e = function(t, e, i, o, h) { if (e > o) return !1; for (var n = "", r = 0, s = 0, a = 0, l = 0; l < t.length && (n = t[l], r = h(n).width, !(a + r > i)); l++) s = l, a += r; return [{ line: t.substring(0, s + 1), length: a }] },
            i = function(t, e, i, h, n) {
                for (var r = !1, s = "", a = [], l = 0, d = !0, c = !1, u = !0, f = 0; f < t.length; f++) {
                    c = !1;
                    var x = t[f];
                    "|" == x && (x = t[f] = "\n", r = !0);
                    var y = n(x).width;
                    if (x.charCodeAt(0) <= 32) " " == x || "	" == x ? ("	" == x && (x = "    ", y = n(x).width), l += y, r = o(l, i, t, f + 1, n), r === !0 && (l -= y)) : "\n" == x ? r = !0 : c = !0;
                    else if (y) {
                        var g = l + y;
                        g > i ? (r = !0, d ? l = g : --f) : l = g
                    }
                    if (r && !c && d && (s += x), d = !1, r || c || (s += x), (r || f === t.length - 1 && s) && (d = !0, r = !1, a.push({ line: s, length: l }), l = 0, s = "", a.length * e > h)) { u = !1; break }
                }
                return u ? a : !1
            },
            o = function(t, e, i, o, h) { for (var n = e - t, r = !1, s = o; s < i.length; s++) { var a = i[s]; if (" " == a || "	" == a || "\n" == a) { r = !1; break } var l = h(a).width; if (n -= l, 0 > n) { r = !0; break } } return r },
            h = function(t, e, i) {
                i instanceof Object || (i = { topRight: i, topLeft: i, bottomRight: i, bottomLeft: i });
                var o = e.x,
                    h = e.y,
                    n = e.width,
                    r = e.height;
                t.beginPath(), t.moveTo(o + i.topLeft, h), t.lineTo(o + n - i.topRight, h), t.quadraticCurveTo(o + n, h, o + n, h + i.topRight), t.lineTo(o + n, h + r - i.bottomRight), t.quadraticCurveTo(o + n, h + r, o + n - i.bottomRight, h + r), t.lineTo(o + i.bottomLeft, h + r), t.quadraticCurveTo(o, h + r, o, h + r - i.bottomLeft), t.lineTo(o, h + i.topLeft), t.quadraticCurveTo(o, h, o + i.topLeft, h), t.closePath()
            },
            n = function(t) { this.ctx = t };
        n.textCache = {}, n.transparent = "rgba(0,0,0,0)", n.prototype.setContextProperty = function(t, e) { this.ctx[t] != e && (this.ctx[t] = e) }, n.prototype.drawLines = function(t, e, i, o) {
            if (!(t.length <= 0)) {
                this.setContextProperty("strokeStyle", e), this.setContextProperty("fillStyle", i), this.setContextProperty("lineWidth", o), this.ctx.beginPath();
                for (var h = !0, n = 0; n < t.length; n++) {
                    var r = t[n];
                    h ? (this.ctx.moveTo(r.x, r.y), h = !1) : this.ctx.lineTo(r.x, r.y), r.end && (h = !0)
                }
                e && this.ctx.stroke(), i && this.ctx.fill(), this.ctx.closePath()
            }
        }, n.prototype.drawLine = function(t, e, i, o) { this.setContextProperty("strokeStyle", i), this.setContextProperty("lineWidth", o), this.ctx.beginPath(), this.ctx.moveTo(t.x, t.y), this.ctx.lineTo(e.x, e.y), this.ctx.stroke() }, n.prototype.drawRect = function(t, e, i, o, n) { t.x = t.x || t.left || 0, t.y = t.y || t.top || 0, n && h(this.ctx, t, n), o && (this.setContextProperty("fillStyle", o), n ? this.ctx.fill() : this.ctx.fillRect(t.x, t.y, t.width, t.height)), e && i > 0 && (this.setContextProperty("strokeStyle", e), this.setContextProperty("lineWidth", i || 1), n ? this.ctx.stroke() : this.ctx.strokeRect(t.x, t.y, t.width, t.height)) }, n.prototype.drawCircle = function(t, e, i, o, h) {
            (h || i) && (this.ctx.beginPath(), this.ctx.arc(t.x, t.y, e, 0, 2 * Math.PI, !1), h && (this.setContextProperty("fillStyle", h), this.ctx.fill()), i && (this.setContextProperty("strokeStyle", i), this.setContextProperty("lineWidth", o), this.ctx.stroke()))
        }, n.prototype.drawImage = function(t, e, i) { t.x = t.x || t.left || 0, t.y = t.y || t.top || 0, i ? this.ctx.drawImage(e, i.x, i.y, i.width, i.height, t.x, t.y, t.width, t.height) : this.ctx.drawImage(e, t.x, t.y, t.width, t.height) }, n.prototype.measureText = function(t, e) { return this.setContextProperty("font", e), this.ctx.measureText(t) }, n.prototype.fillText = function(t, o, h, r, s, a, l) {
            if (o) {
                h.min = h.min || 1, t.x = t.x || t.left || 0, t.y = t.y || t.top || 0;
                var d = "px " + h.family,
                    c = [],
                    u = h.size || t.height,
                    f = u,
                    x = !1,
                    y = n.textCache[o];
                if (y) {
                    var g = JSON.stringify({ width: t.width, height: t.height, wishedFontSize: f, oneLine: l });
                    y.options == g ? (c = y.lines, f = y.fontSize, x = !0) : y = void 0
                }
                if (!x) {
                    this.setContextProperty("font", utilities.math.floor(f) + d);
                    var p = this.ctx.measureText.bind(this.ctx),
                        m = this.ctx.measureText(o).width;
                    if (m <= t.width && (c.push({ line: o, length: m }), x = !0), !x) {
                        var w = {};
                        f = h.size || utilities.math.floor(t.height);
                        for (var v = h.min, C = f; C >= v;)
                            if (f = Math.floor((C + v) / 2), this.setContextProperty("font", f + d), c = l ? e(o, f, t.width, t.height, p) : i(o, f, t.width, t.height, p), w[f] = c || !1, c) {
                                if (w[f + 1] === !1) break;
                                v = f + 1
                            } else {
                                if (--f, w[f]) break;
                                C = f
                            }
                        c = w[f]
                    }
                }
                var b = utilities.math.floor(Math.max(f, h.min));
                this.setContextProperty("font", b + d), this.setContextProperty("textAlign", s), this.setContextProperty("textBaseline", a), this.setContextProperty("fillStyle", r); { b * c.length }
                "left" === s || ("right" === s ? t.x += t.width : "center" === s ? t.x += t.width / 2 : generic.statusLogging("fillText invalid parameter halign")), "top" === a || ("bottom" === a ? t.y += t.height / 2 + b - c.length / 2 * b : "middle" === a ? t.y += t.height / 2 + b / 2 - c.length / 2 * b : generic.statusLogging("fillText invalid parameter valign"));
                for (var R = utilities.math.round(t.y), T = 0; T < c.length; T++) this.ctx.fillText(c[T].line, t.x, R, utilities.math.round(c[T].length)), R += b;
                y || (n.textCache[o] = { options: JSON.stringify({ width: t.width, height: t.height, wishedFontSize: u }), fontSize: f, lines: c })
            }
        }, t.CanvasRenderer = function(t) { return new n(t) }, t.CanvasRenderer.transformRectToBorderRect = n.transformRectToBorderRect = function(t, e) { return { x: utilities.math.round(t.x + e / 2), y: utilities.math.round(t.y + e / 2), width: utilities.math.round(t.width - e), height: utilities.math.round(t.height - e) } }, t.CanvasRenderer.applyOffset = n.applyOffset = function(t, e) { return { x: utilities.math.round(t.x + e.left * t.width), y: utilities.math.round(t.y + e.top * t.height), width: utilities.math.round(t.width - (e.left + e.right) * t.width), height: utilities.math.round(t.height - (e.top + e.bottom) * t.height) } }, t.CanvasRenderer.getContentRect = n.getContentRect = function(t, e) { return e instanceof Object || (e = { top: e, left: e, bottom: e, right: e }), { x: utilities.math.round(t.x + e.left), y: utilities.math.round(t.y + e.top), width: utilities.math.round(t.width - e.left - e.right), height: utilities.math.round(t.height - e.top - e.bottom) } }, t.CanvasRenderer.calculateLocationLine = n.calculateLocationLine = function(t, e) { return { pointFrom: { x: e.x + e.width * t.pointFrom.x, y: e.y + e.height * t.pointFrom.y }, pointTo: { x: e.x + e.width * t.pointTo.x, y: e.y + e.height * t.pointTo.y } } }, t.CanvasRenderer.calculateLocationCircle = n.calculateLocationCircle = function(t, e) { return { center: { x: e.x + e.width * t.center.x, y: e.y + e.height * t.center.y }, radius: e.width * t.radius } }, t.CanvasRenderer.calculateLocationRect = n.calculateLocationRect = function(t, e) { return { x: e.x + e.width * t.x, y: e.y + e.height * t.y, width: e.width * t.width, height: e.height * t.height } }
    }(window),
    function(t) {
        var e = function(t) { this.$container = $(t), $("body").append(this.$container), this.modelStruct = [], this.modelMap = {}, this.layout = {}, this.layoutDirty = !0, this.init() };
        e.prototype.init = function() {
            for (var t = $("*[data-role]", this.$container), e = 0; e < t.length; ++e) {
                var i = { $item: $(t[e]), name: t[e].getAttribute("data-role") };
                this.modelStruct.push(i), this.modelMap[i.name] = i.$item
            }
        }, e.prototype.build = function() {
            if (this.layoutDirty) {
                this.layout = {}, this.m_baseRect = { x: this.$container.offset().left, y: this.$container.offset().top, width: this.$container.width(), height: this.$container.height() };
                for (var t = 0; t < this.modelStruct.length; ++t) {
                    var e = this.modelStruct[t].$item;
                    if (e.is(":visible")) {
                        var i = { x: e.offset().left / this.m_baseRect.width, y: e.offset().top / this.m_baseRect.height, width: e.width() / this.m_baseRect.width, height: e.height() / this.m_baseRect.height };
                        this.layout[this.modelStruct[t].name] = i
                    }
                }
                this.layoutDirty = !1
            }
            return this.layout
        }, e.prototype.show = function(t) { return this.modelMap[t] ? void(this.modelMap[t].hasClass("hidden") && (this.layoutDirty = !0, this.modelMap[t].removeClass("hidden"))) : void generic.statusLogging("CellBuilder.show invalid argument 'name'=" + t) }, e.prototype.hide = function(t) { return this.modelMap[t] ? void(this.modelMap[t].hasClass("hidden") || (this.layoutDirty = !0, this.modelMap[t].addClass("hidden"))) : void generic.statusLogging("CellBuilder.hide invalid argument 'name'=" + t) }, e.prototype.dispose = function() { this.$container.remove() }, t.CellBuilder = e
    }(window.uiTypes.canvas);
defineNamespace(window, "uiTypes"),
    function(t) {
        function e(t, e) {
            if (0 > e) this.paginatorItems.stepBackward();
            else {
                if (!(e > 0)) return;
                this.paginatorItems.stepForward()
            }
            r.call(this, this.paginatorItems.getIndices(), this.getMode().v)
        }

        function a(t, e) {
            if (0 > e) this.paginatorPages.stepBackward();
            else {
                if (!(e > 0)) return;
                this.paginatorPages.stepForward()
            }
            o.call(this, this.paginatorPages.getIndices(), this.getMode().v)
        }

        function i(t, e) { d.call(this, this.getMode(e)) }

        function s(t, e) { if (!t) return void warning("actionsRegister: invalid dispatcher argument"); for (var a in e) t.register(e[a]) }

        function n(t, e) {
            if (t)
                for (var a in e) t.unregister(e[a])
        }

        function r(t, e, a) {
            if (!a) {
                for (var i = [], s = 0; s < t.current.length; s++) i.push(t.current[s].startIndex);
                isDot2() ? this.storage.save("dot2_itemIndex_" + e, JSON.stringify(i), !0) : this.storage.save("itemIndex_" + e, JSON.stringify(i), !0)
            }
            this.model.previous.d = !t.previous.length, this.model.previous.t = this.model.previous.d ? "Previous" : "Previous " + (t.previous[0].startIndex + 1) + "-" + (t.previous[0].endIndex + 1), this.model.current.a = !0, this.model.current.t = "Current " + (t.current[0].startIndex + 1) + "-" + (t.current[0].endIndex + 1), this.model.next.d = !t.next.length, this.model.next.t = this.model.next.d ? "Next" : "Next " + (t.next[0].startIndex + 1) + "-" + (t.next[0].endIndex + 1)
        }

        function o(t, e, a) {
            if (!a) {
                for (var i = [], s = 0; s < t.current.length; s++) i.push(t.current[s].pageIndex);
                isDot2() ? this.storage.save("dot2_pageIndex", JSON.stringify(i), !0) : this.storage.save("pageIndex_" + e, JSON.stringify(i), !0)
            }
            this.model.pageDown.d = !t.previous.length, this.model.pageDown.t = "Previous page " + (this.model.pageDown.d ? "" : t.previous[0].pageIndex + 1), this.model.pageUp.d = !t.next.length, this.model.pageUp.t = "Next page " + (this.model.pageUp.d ? "" : t.next[0].pageIndex + 1)
        }

        function d(t, e) { e || (isDot2() ? this.storage.save("dot2_mode", t.v, !0) : this.storage.save("mode", t.v, !0)), this.m_currentModeModel = t; for (var a in this.model.modes) this.model.modes[a].a = this.model.modes[a].v == t.v }

        function p(t) { this.model.modes = t }
        var h = window.uiTypes.pages.actions.playbacks,
            c = React.createClass({
                displayName: "ButtonComponent",
                getInitialState: function() { return { data: this.props.data } },
                render: function() { var t = "vertical-bar_item playbacks-bar_item"; return this.props.data.a && (t += " vertical-bar_item__active playbacks-bar_item__active"), this.props.data.d && (t += " vertical-bar_item__disabled playbacks-bar_item__disabled"), React.createElement("div", { className: "vertical-bar_item-wrapper playbacks-bar_item_wrapper", ref: "item" }, React.createElement("div", { className: t, id: this.props.data.id }, React.createElement("div", { className: "content" }, " ", this.props.data.t || "", " "))) },
                componentDidMount: function() {
                    var t = React.findDOMNode(this.refs.item);
                    t.addEventListener(Touch.maTouchUp, this.props.handler)
                },
                componentWillUnmount: function() {
                    var t = React.findDOMNode(this.refs.item);
                    t.removeEventListener(Touch.maTouchUp, this.props.handler)
                }
            }),
            l = React.createClass({ displayName: "ButtonGroupComponent", getInitialState: function() { return { data: this.props.data } }, render: function() { return React.createElement("div", { className: "vertical-bar_group playbacks-bar_group" }, this.props.children) } }),
            g = React.createClass({
                displayName: "PlaybacksPagingBarComponent",
                getInitialState: function() { return this.props.dispatcher || error("PlaybacksPagingBarComponent: No dispatcher object supplied"), { data: this.props.data } },
                render: function() {
                    var t = [];
                    t.push(React.createElement(l, null, React.createElement(c, { key: "prev", data: this.state.data.previous, handler: this.itemIndexChanged.bind(this, -1) }), React.createElement(c, { key: "next", data: this.state.data.next, handler: this.itemIndexChanged.bind(this, 1) }))), t.push(React.createElement(l, null, React.createElement(c, { key: "pageDown", data: this.state.data.pageDown, handler: this.pageIndexChanged.bind(this, -1) }), React.createElement(c, { key: "pageUp", data: this.state.data.pageUp, handler: this.pageIndexChanged.bind(this, 1) })));
                    var e = [];
                    for (var a in this.state.data.modes) {
                        var i = "mode_" + this.state.data.modes[a].t;
                        e.push(React.createElement(c, { key: i, data: this.state.data.modes[a], handler: this.modeChanged.bind(this, this.state.data.modes[a].v) }))
                    }
                    return t.push(React.createElement(l, null, e)), React.createElement("div", { className: "vertical-bar playbacks-bar" }, t)
                },
                itemIndexChanged: function(t) { this.props.dispatcher.trigger({ type: h.ITEM_INDEX_CHANGED, data: t }) },
                pageIndexChanged: function(t) { this.props.dispatcher.trigger({ type: h.PAGE_INDEX_CHANGED, data: t }) },
                modeChanged: function(t) { this.props.dispatcher.trigger({ type: h.MODE_CHANGED, data: t }) }
            }),
            m = window.uiTypes.pages.Paginator,
            u = function(t, n, r) { this.storage = t, this.$parent = n, this.m_dispatcher = r, this.m_currentModeModel = {}, this.$container = $("<div class='universal-container'></div>"), this.$parent && this.$parent.append(this.$container), assert(this.storage, "PlaybacksDataControl: invalid storage argument"), this.isActive = !1, this.model = { previous: {}, current: {}, next: {}, pageDown: {}, pageUp: {}, modes: [] }, this.m_dispatcher && s(this.m_dispatcher, this.m_actions), this.m_actions = { itemIndexChanged: { type: h.ITEM_INDEX_CHANGED, handler: e.bind(this) }, pageIndexChanged: { type: h.PAGE_INDEX_CHANGED, handler: a.bind(this) }, modeChanged: { type: h.MODE_CHANGED, handler: i.bind(this) } }, this.playbackBarInstance = null };
        u.prototype.init = function(t) {
            this.paginatorItems = new m, this.paginatorPages = new m, this.setParameters(t, !0);
            var e = this.__getModeValue();
            isDot2() ? (this.paginatorItems.setCurrentIndex(this.storage.load("dot2_itemIndex_" + e, 0)), this.paginatorPages.setCurrentIndex(this.storage.load("dot2_pageIndex", 0))) : (this.paginatorItems.setCurrentIndex(this.storage.load("itemIndex_" + e, 0)), this.paginatorPages.setCurrentIndex(this.storage.load("pageIndex_" + e, 0))), this.playbackBarInstance = React.render(React.createElement(g, { data: this.model, dispatcher: this.m_dispatcher }), this.$container[0])
        }, u.prototype.dispose = function() { this.deactivate(), this.playbackBarInstance && (n(this.m_dispatcher, this.m_actions), this.playbackBarInstance.unmountComponentAtNode(this.$container[0]), this.playbackBarInstance = null, this.$container.remove()) }, u.prototype.setParameters = function(t, e) {
            var a = this.__getModeValue(),
                i = 0,
                s = 0;
            for (var n in t)
                if (s = s || n, t[n]) {
                    if (t[n].v == a) { i = n; break }
                    t[n].a && (s = n)
                }
            var h = t[i || s];
            void 0 !== h.itemsIndexOffset && this.paginatorItems.setOffset(h.itemsIndexOffset), void 0 !== h.itemsCount && this.paginatorItems.setItemsCount(h.itemsCount), void 0 !== h.itemsStep && this.paginatorItems.setStep(h.itemsStep), this.paginatorItems.setCurrentIndex(isDot2() ? this.storage.load("dot2_itemIndex_" + h.v, 0) : this.storage.load("itemIndex_" + h.v, 0)), void 0 !== h.pagesCount && this.paginatorPages.setItemsCount(h.pagesCount), void 0 !== h.pagesStep && this.paginatorPages.setStep(h.pagesStep), this.paginatorPages.setCurrentIndex(isDot2() ? this.storage.load("dot2_pageIndex", 0) : this.storage.load("pageIndex_" + h.v, 0)), p.call(this, t), d.call(this, h, e), r.call(this, this.paginatorItems.getIndices(e), this.getMode().v, e), o.call(this, this.paginatorPages.getIndices(e), this.getMode().v, e)
        }, u.prototype.activate = function() { this.isActive || (this.isActive = !0, this.$parent && this.$parent.append(this.$container)) }, u.prototype.deactivate = function() { this.isActive && (this.isActive = !1, this.$container.detach()) }, u.prototype.refresh = function() { this.playbackBarInstance.setState({ data: this.model }) }, u.prototype.setParent = function(t) { t.append(this.$container), this.$parent = t }, u.prototype.setDispatcher = function(t) { n(this.m_dispatcher, this.m_actions), this.m_dispatcher = t, s(this.m_dispatcher, this.m_actions) }, u.prototype.getItemsData = function() { for (var t = this.paginatorItems.getIndices(), e = [], a = [], i = 0; i < this.paginatorItems.itemsCount.length; i++) e.push(t.current[i].startIndex), a.push(t.current[i].endIndex - t.current[i].startIndex + 1); return { index: e, count: a } }, u.prototype.getPagesData = function() { var t = this.paginatorPages.getIndices(); return t.current && t.current[0] ? { index: t.current[0].pageIndex } : { index: 0 } }, u.prototype.getMode = function(t) {
            var e = { t: "", v: 0, a: !0 };
            if (!this.model || !this.model.modes) return e;
            var t = t || this.__getModeValue(),
                a = 0;
            for (var i in this.model.modes)
                if (a = a || i, t == this.model.modes[i].v) { a = i; break }
            return this.model.modes[a] || e
        }, u.prototype.__getModeValue = function() { return isDot2() ? this.storage.load("dot2_mode", window.uiTypes.playbacks.PlaybacksViewMode.faders) : this.storage.load("mode", window.uiTypes.playbacks.PlaybacksViewMode.faders) }, t.PlaybacksDataControl = u
    }(window.uiTypes);
defineNamespace(window, "uiTypes.pages"),
    function(t) {
        var e = function(t, e, i, n) { this.onResize_context = null, this.id = this.constructor.id, this.title = this.constructor.title, this.content = this.constructor.content, this.$page = $(this.content), this.$this = $(this), this.m_commandLine = t, this.m_commandExecutor = e, this.m_globalSettings = i, this.m_$globalSettings = $(this.m_globalSettings), this.m_dispatcher = n, this.globalSettingsChangeHandler_context = this.globalSettingsChangeHandler.bind(this) };
        e.prototype.Init = function() { this.$page.addClass("page"), this.onResize_context = this.OnResize.bind(this), generic.globs.$window.on("resize", this.onResize_context), this.m_$globalSettings.on("propertyChanged", this.globalSettingsChangeHandler_context) }, e.prototype.CreatePageButtons = function() { return null }, e.prototype.Show = utilities.emptyFunction, e.prototype.OnResize = utilities.emptyFunction, e.prototype.Close = function() { this.m_$globalSettings.off("propertyChanged", this.globalSettingsChangeHandler_context), generic.globs.$window.off("resize", this.onResize_context), this.onResize_context = 0, this.pageButtons && (generic.globs.serverCommandManager.removeCommands(this.id), commands.ui.disposeUIElements(this.pageButtons)), this.$page.remove() }, e.prototype.globalSettingsChangeHandler = utilities.emptyFunction, e.events = { pageButtonsChanged: "pageButtonsChanged", optionsPanelChanged: "optionsPanelChanged" }, t.Page = e
    }(window.uiTypes.pages),
    function(t) {
        var e = window.timers.GlobalTimers,
            i = function(t, e, n, s, o) { i.superclass.constructor.call(this, e, n, s, o), this.canvas = 0, this.canvasContainer = t, this.m_ma2window = 0, this.RefreshTimerProxy = this.RefreshTimerCallback.bind(this) };
        window.generic.extend(i, window.uiTypes.pages.Page), i.prototype.CreateWindow = utilities.emptyFunction, i.prototype.GetPayloadObject = function() { return new Object }, i.prototype.Init = function() { i.superclass.Init.call(this), this.$page.append(this.canvasContainer) }, i.prototype.RefreshTimerCallback = function() { this.m_commandExecutor.send(this.GetPayloadObject()) }, i.prototype.Show = function() { i.superclass.Show.call(this), this.canvas = $("canvas", this.canvasContainer), this.CreateWindow(), this.OnResize(!0), e.AddRefreshTimerEventHandler(this.RefreshTimerProxy), this.m_commandExecutor.IsConnected() || $.alert({ message: "Currently not Connected to the console" }) }, i.prototype.OnResize = function(t) { i.superclass.OnResize.call(this), this.canvas[0].width = this.canvasContainer.width(), this.canvas[0].height = this.canvasContainer.height(), this.m_ma2window.resize({ top: 0, left: 0, width: this.canvas[0].width, height: this.canvas[0].height }, t) }, i.prototype.Close = function() { DataHandlerManager.Unregister(this.id + "DataHandler"), e.RemoveRefreshTimerEventHandler(this.RefreshTimerProxy), this.m_ma2window.Close(), i.superclass.Close.call(this) }, t.CanvasPage = i
    }(window.uiTypes.pages),
    function(t) {
        var e = function(t, i, n, s, o) { e.superclass.constructor.call(this, t, i, n, s, o), this.itemSelected_context = this.ItemSelected ? this.ItemSelected.bind(this) : utilities.emptyFunction };
        e.id = "pools", window.generic.extend(e, window.uiTypes.pages.CanvasPage), e.prototype.CreateWindow = function() {
            var t = this.GetWindowClass();
            this.m_ma2window = new t(this.canvas, window.CanvasRenderer(this.canvas[0].getContext("2d")), { top: 0, left: 0, width: this.canvas[0].width, height: this.canvas[0].height }, this.m_dispatcher), this.m_ma2window.init(), this.m_ma2window.setConfig(generic.globs.config.layout[this.m_globalSettings.layout][e.id]), $(this.m_ma2window).bind(this.m_ma2window.itemSelectedEvent, this.itemSelected_context), DataHandlerManager.Register({ name: this.id + "DataHandler", handler: this.m_ma2window.SetDataSource.bind(this.m_ma2window) })
        }, e.prototype.globalSettingsChangeHandler = function(t, i) { "layout" === i.name && this.m_ma2window && this.m_ma2window.setConfig(generic.globs.config[i.name][i.newValue][e.id]) }, e.prototype.GetPayloadObject = function() { var t = {}; return t.requestType = Server.requestTypes.pool, t.pool = this.constructor.shortId, t.itemsCount = this.m_ma2window.GetVisibleItemsCount(), t.itemsOffset = this.m_ma2window.GetDataOffsetY(), t }, e.prototype.Close = function() { $(this.m_ma2window).unbind(this.m_ma2window.itemSelectedEvent, this.itemSelected_context), e.superclass.Close.call(this) }, t.PoolPage = e
    }(window.uiTypes.pages);
window.uiTypes.pages.PageManager = function() {
    var e = window.timers.GlobalTimers,
        t = window.uiTypes.pages,
        i = t.Page,
        a = function(t, a, s) {
            this.allPageClasses = {}, this.allPageClasses[window.uiTypes.pages.Command1.id] = window.uiTypes.pages.Command1, this.allPageClasses[window.uiTypes.pages.Command2.id] = window.uiTypes.pages.Command2, this.allPageClasses[window.uiTypes.pages.FixtureSheet.id] = window.uiTypes.pages.FixtureSheet, this.allPageClasses[window.uiTypes.pages.ChannelSheet.id] = window.uiTypes.pages.ChannelSheet, this.allPageClasses[window.uiTypes.pages.GroupPool.id] = window.uiTypes.pages.GroupPool, this.allPageClasses[window.uiTypes.pages.PresetPool.id] = window.uiTypes.pages.PresetPool, this.allPageClasses[window.uiTypes.pages.MacroPool.id] = window.uiTypes.pages.MacroPool, this.allPageClasses[window.uiTypes.pages.WorldPool.id] = window.uiTypes.pages.WorldPool, this.allPageClasses[window.uiTypes.pages.ExecutorSheet.id] = window.uiTypes.pages.ExecutorSheet, this.allPageClasses[window.uiTypes.pages.Playbacks.id] = window.uiTypes.pages.Playbacks, this.allPageClasses[window.uiTypes.pages.CommandHistory.id] = window.uiTypes.pages.CommandHistory, this.allPageClasses[window.uiTypes.pages.MainMenu.id] = window.uiTypes.pages.MainMenu, this.allPageClasses[window.uiTypes.pages.Wheels.id] = window.uiTypes.pages.Wheels, this.allPageClasses[window.uiTypes.pages.Settings.id] = window.uiTypes.pages.Settings, this.allPageClasses[window.uiTypes.pages.FullCommand.id] = window.uiTypes.pages.FullCommand;
            var n = [{ "class": this.allPageClasses[window.uiTypes.pages.Command1.id], isDefault: !0, isDot2: !0 }, { "class": this.allPageClasses[window.uiTypes.pages.Command2.id] }, { "class": this.allPageClasses[window.uiTypes.pages.FixtureSheet.id], isDot2: !0, icon: "images/d2ui_view_as_grid_icon_small.png" }, { "class": this.allPageClasses[window.uiTypes.pages.ChannelSheet.id] }, { "class": this.allPageClasses[window.uiTypes.pages.GroupPool.id], isDot2: !0, icon: "images/d2ui_group_view_icon_small.png" }, { "class": this.allPageClasses[window.uiTypes.pages.PresetPool.id], isDot2: !0, icon: "images/d2ui_preset_view_icon_small.png" }, { "class": this.allPageClasses[window.uiTypes.pages.MacroPool.id] }, { "class": this.allPageClasses[window.uiTypes.pages.WorldPool.id] }, { "class": this.allPageClasses[window.uiTypes.pages.ExecutorSheet.id] }, { "class": this.allPageClasses[window.uiTypes.pages.Playbacks.id], isDot2: !0, icon: "images/d2ui_virtual_playback_view_icon_small.png" }];
            this.additionalPages = [{ "class": this.allPageClasses[window.uiTypes.pages.CommandHistory.id], isDot2: !0 }, { "class": this.allPageClasses[window.uiTypes.pages.MainMenu.id], isDot2: !0 }, { "class": this.allPageClasses[window.uiTypes.pages.Wheels.id], isDot2: !0 }, { "class": this.allPageClasses[window.uiTypes.pages.Settings.id], isDot2: !0 }], this.currentPageList = null, this.globalSettings = s, this.commandLine = t, this.commandExecutor = a, generic.globs.config.activeLayout = this.getLayout();
            var o, r, g = null,
                l = {};
            this.chain = [], this.pageElements = { $main: null, $pageContent: null, $pageContentInner: null, $navigationPanel: null, topRightButton: null, $topButtonsContainer: null, $footer: null }, this.controlsPool = { presetType: null }, this.topRightButtonClickHandler_context = function() { this.TogglePage(window.uiTypes.pages.Wheels.id, { modal: !0 }) }.bind(this), this.globalSettingsChangeHandler_context = function(e, t) { "layout" === t.name && this.setLayout(t.oldValue, t.newValue) }.bind(this), this.refreshTimerHandler_context = this.refreshTimerHandler.bind(this), this.pageButtonsChangedHandler_context = this.pageButtonsChangedHandler.bind(this), this.optionsPanelContentChangedHandler_context = this.optionsPanelContentChangedHandler.bind(this), this.commonDataHandler = { name: "CommonDataHandler", handler: this.dataHandler.bind(this) }, this.world = new commands.State, this.dispatcher = Dispatcher(), this.dispatcher.actions = { CHANGE_TITLE: "change_title" }, this.Init = function() {
                this.$virtualPageContainer = $.createItem({ "class": "virtual-main-content" }), this.pageElements.$main = $(".main-content"), this.pageElements.$pageContent = $.Layout.pageContent, this.pageElements.$pageContentInner = $(".page-content-inner", this.pageElements.$pageContent), this.pageElements.$navigationPanel = $.Layout.navigationPanel, this.pageElements.topRightButton = document.getElementsByClassName("top-right-button")[0], this.pageElements.topRightButton.addEventListener(Touch.maTouchUp, this.topRightButtonClickHandler_context), this.pageElements.$topButtonsContainer = $.Layout.topButtons, this.pageElements.$footer = $.Layout.bottomButtons, this.pageButtons = [{ command: commands.Commands.previous(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.set(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.next(), uiElement: commands.ui.UILabel() }], this.pageButtons.forEach(commands.ui.initCommandUIElementPair), generic.globs.serverCommandManager.addCommands("common", this.pageButtons), this.footerButtons = this.pageButtons.map(commands.ui.fetchUIElementItems), ui.Layout.Place(this.pageElements.$footer, this.footerButtons);
                for (var t = 0; t < this.footerButtons.length; t++) this.footerButtons[t].$item.attr("data-pos", "fixed");
                $(this.globalSettings).on("propertyChanged", this.globalSettingsChangeHandler_context), DataHandlerManager.Register(this.commonDataHandler), e.AddRefreshTimerEventHandler(this.refreshTimerHandler_context)
            }, this.applyPageFilter = function() {
                var e = localStorage.getItem("appType");
                if ("dot2" == e) {
                    for (var t = [], i = 0; i < n.length; i++) n[i].isDot2 && t.push(n[i]);
                    n = t
                }
                if ("gma2" == e) {
                    for (var t = [], i = 0; i < n.length; i++) n[i].isNotGma2 || t.push(n[i]);
                    n = t
                }
                var a = document.getElementsByTagName("html")[0];
                a && a.setAttribute("appType", e), this.phonePageList = n.slice(), this.phonePageList.push({ "class": this.allPageClasses[window.uiTypes.pages.MainMenu.id], mainMenu: !0, ignore: !0, chainIgnore: !0, isDot2: !0 }), this.tabletPageList = n.slice(), this.tabletPageList.shift(), isDot2() || this.tabletPageList.shift(), this.tabletPageList.unshift({ "class": this.allPageClasses[window.uiTypes.pages.FullCommand.id], isDefault: !0, isDot2: !0 }), this.tabletPageList.push({ "class": this.allPageClasses[window.uiTypes.pages.MainMenu.id], mainMenu: !0, ignore: !0, chainIgnore: !0, isDot2: !0 }), this.setLayout(null, this.getLayout());
                var s = this.getDefaultPage();
                this.ShowPage(s["class"].id)
            }, this.TogglePage = function(e, t) { void 0 === e || e == g.id && JSON.stringify(t) === JSON.stringify(l.userDefined) ? this.ShowPage(o, null, !0) : this.ShowPage(e, t, !0) }, this.ShowPage = function(e, t, i) {
                if (Server.resetBlockedRequests(), window.poolViewVisible = !1, this.getCurrentPage() && this.getCurrentPage().id === e && this.getCurrentPageData().userDefined === t) return void window.generic.statusLogging("Requested page '" + e + "' is already opened");
                var a = this.resolvePageId(e);
                if (!a) return void window.generic.statusLogging("Requested page '" + e + "' does not exist");
                if (g) {
                    var s = this.__findPageById(g.id);
                    window.generic.statusLogging("Page '" + s["class"].title + "' is closing")
                }
                window.generic.statusLogging("Page '" + a["class"].title + "' is opening, id=" + a["class"].id);
                var n = { id: a["class"].id, title: a["class"].title, pages: [] };
                if (a["class"].pages)
                    for (var o = 0; o < a["class"].pages.length; o++) {
                        var r = this.__getPageClass(a["class"].pages[o]);
                        n.pages.push(new r["class"](this.commandLine, this.commandExecutor, this.globalSettings))
                    } else n.pages.push(new a["class"](this.commandLine, this.commandExecutor, this.globalSettings, this.dispatcher));
                this.setCurrentPage(n, t, i)
            }, this.resolvePageId = function(e) {
                var t = this.__findPageById(e);
                if (t) return t;
                if (t = this.__getPageClass(e), !t) return null;
                var i = this.allPageClasses[t["class"].id].pages;
                if (i && i.length > 0 && (t = this.__findPageById(i[0]))) return t;
                for (var a in this.complexPages)
                    for (var s = this.complexPages[a], n = 0; n < s.pages.length; n++)
                        if (e === s.pages[n] && (t = this.__findPageById(s.id))) return t;
                return this.getDefaultPage()
            }, this.closePreviousPage = function(e, t) {
                if (this.$virtualPageContainer.append(this.pageElements.$pageContentInner), e) {
                    if (e.pages && e.pages.length > 0)
                        for (var a = 0; a < e.pages.length; a++) {
                            var s = e.pages[a];
                            s.Close(), s.$page && (s.$page.hide(), s.requirements)
                        }
                    t && (t.isToggled || (e.id ? (o = e.id, r = t) : (o = !1, r = null)), t.userDefined && t.userDefined.fullscreen && t.userDefined.freezeCmdline && window.generic.globs.$body.removeClass("fixed-cmdLine")), this.setPageButtons(), $(e).off(i.events.pageButtonsChanged, this.pageButtonsChangedHandler_context), $(e).off(i.events.optionsPanelChanged, this.optionsPanelContentChangedHandler_context)
                }
            }, this.openNextPage = function(e, t) {
                t && t.userDefined && t.userDefined.fullscreen && t.userDefined.freezeCmdline && window.generic.globs.$body.addClass("fixed-cmdLine"), e = e.pages[0];
                var a = $.extend({}, generic.globs.config.layout[this.getLayout()].genericPage);
                $.extend(a, e.requirements), a.presetTypeBar ? (this.controlsPool.presetType = this.controlsPool.presetType || new window.uiTypes.PresetTypesDataControl(this.commandLine, this.commandExecutor, new window.uiTypes.PresetTypesBar($.Layout.leftPanel)), this.controlsPool.presetType.activate()) : this.controlsPool.presetType && this.controlsPool.presetType.deactivate(), $.Layout.show({ dimmerWheel: !0 }, a.showDimmerWheel), $.Layout.show({ bottomButtons: !0 }, !a.noFooter), this.pageElements.$main.append(e.$page), this.pageElements.$pageContent.append(this.pageElements.$pageContentInner), $(e).on(i.events.pageButtonsChanged, this.pageButtonsChangedHandler_context), $(e).on(i.events.optionsPanelChanged, this.optionsPanelContentChangedHandler_context), e.Init(), e.$page.show(), e.Show()
            }, this.setCurrentPage = function(e, t, i) { $.Layout.setHidden({ pageContent: !0 }), this.closePreviousPage(g, l), g = e, l.userDefined = t, l.isToggled = i, this.navigation.pageChanged(g, l), this.openNextPage(g, l), $.Layout.setVisible({ pageContent: !0 }) }, this.getCurrentPage = function() { return g }, this.getCurrentPageData = function() { return l }
        };
    a.prototype.refreshTimerHandler = function() { this.world.isDirty() && this.navigation.navigationBar && (this.world.clean(), this.navigation.navigationBar.setData({ options: { icon: this.world.getState().value ? generic.globs.config.icons.world : "", index: this.world.getState().value || "" } })) }, a.prototype.dataHandler = function(e) { return void 0 !== e.worldIndex && this.world.setState({ value: e.worldIndex }), !1 }, a.prototype.pageButtonsChangedHandler = function(e, t) { this.setPageButtons(t.buttons) }, a.prototype.setPageButtons = function(e) { this.pageElements.$topButtonsContainer.empty(), $(">:not([data-pos=fixed])", this.pageElements.$footer).remove(), e && ui.Layout.Place(this.pageButtonsContainer, e.map(commands.ui.fetchUIElementItems), { prepend: !0 }) }, a.prototype.optionsPanelContentChangedHandler = function(e, t) { this.setOptionsPanel(t) }, a.prototype.setOptionsPanel = function(e) { e.setParent($.Layout.leftPanel) }, a.prototype.getDefaultPage = function() { return _.find(this.currentPageList, function(e, t, i) { return e.isDefault }) }, a.prototype.__findPageById = function(e) { var t = function(t, i, a) { return t["class"].id === e }; return _.find(this.currentPageList, t) || _.find(this.additionalPages, t) }, a.prototype.__getPageClass = function(e) { return { "class": _.find(this.allPageClasses, function(t, i, a) { return t.id === e }) } }, a.prototype.getPageChain = function() { return this.chain }, a.prototype.showPage = function(e, t) { this.ShowPage(e, t) }, a.prototype.togglePage = function(e, t) { this.TogglePage(e, t) }, a.prototype.getPages = function() {
        var e = [],
            t = this.getCurrentPage().id;
        return this.currentPageList.forEach(function(i, a, s) { i.ignore || e.push({ id: i["class"].id, title: i["class"].title, current: i["class"].id === t, icon: i.icon }) }, this), e
    }, a.prototype.getMainPage = function() { var e = _.find(this.currentPageList, function(e, t, i) { return e.mainMenu }); return e ? { id: e["class"].id, title: e["class"].title } : void 0 }, a.prototype.getLayout = function() { return this.globalSettings.layout || generic.globs.config.layout["default"].id }, a.prototype.setLayout = function(e, t) {
        switch (window.generic.globs.$body.css({ opacity: 0 }), this.navigation && (this.navigation.dispose(), this.navigation = null), t) {
            case "phone":
                this.currentPageList = this.phonePageList, this.navigation = new s(this, this.pageElements.$navigationPanel, this.dispatcher), this.pageButtonsContainer = this.pageElements.$topButtonsContainer;
                break;
            case "tablet":
                this.currentPageList = this.tabletPageList, this.navigation = new n(this, this.pageElements.$navigationPanel, this.dispatcher), this.pageButtonsContainer = this.pageElements.$footer
        }
        generic.globs.$body.attr("data-page-layout", generic.globs.config.layout[t].dataPageLayout), this.chain.length = 0, this.currentPageList.forEach(function(e, t, i) { e.chainIgnore || this.chain.push(e["class"]) }, this);
        var i = this.getCurrentPage();
        i && (this.setPageButtons(i.pages[0].CreatePageButtons()), this.navigation.show(i, this.getCurrentPageData())), window.generic.globs.$body.animate({ opacity: 1 }, 500), window.setTimeout(function() { window.generic.globs.pageManager.setWorldDirty() }, 200)
    }, a.prototype.setWorldDirty = function() { this.world.m_dirty = !0 }, a.prototype.dispose = function() { this.navigation && (this.navigation.dispose(), this.navigation = null), _.forEach(this.controlsPool, function(e, t, i) { e && e.dispose() }), this.pageElements.topRightButton.removeEventListener(Touch.maTouchUp, this.topRightButtonClickHandler_context), generic.globs.serverCommandManager.removeCommands("common"), commands.ui.disposeUIElements(this.pageButtons), $(this.globalSettings).off("propertyChanged", this.globalSettingsChangeHandler_context), e.RemoveRefreshTimerEventHandler(this.refreshTimerHandler_context), DataHandlerManager.Unregister(this.commonDataHandler.name) };
    var s = (function() { var e = function(e) { this.$button = e, this.buttonDOMElement = e[0], this.$name = $(".text", this.$button), this.currentHandler = null }; return e.prototype.setText = function(e) { this.$name.text(e) }, e.prototype.on = function(e) { this.off(this.currentHandler), this.currentHandler = e, this.buttonDOMElement.addEventListener(Touch.maTouchUp, this.currentHandler) }, e.prototype.off = function() { this.currentHandler && this.buttonDOMElement.removeEventListener(Touch.maTouchUp, this.currentHandler) }, e.prototype.dispose = function() {}, e }(), function() {
            var e = function(e, t, i) { this.navigationBar = null, this.modalPageHeader = null, this.currentNavigationItem = null, this.pageManager = e, this.$container = t, this.dispatcher = i, this.actions = [{ type: this.dispatcher.actions.CHANGE_TITLE, handler: this.onChangeTitle.bind(this) }], this.dispatcher.register(this.actions) };
            e.prototype.show = function(e, t) { this.pageChanged(e, t) }, e.prototype.pageChanged = function(e, s) {
                var n = this.pageManager.getLayout();
                if ("phone" === n) {
                    var o = s && s.userDefined && s.userDefined.modal ? this.navigationBar : this.modalPageHeader,
                        r = s && s.userDefined && s.userDefined.modal ? this.getModalPageHeader() : this.getNavigationBar();
                    if (r === this.navigationBar) {
                        var g = a.call(this, t.isCurrent, i.previous).title,
                            l = a.call(this, t.isCurrent, i.next).title;
                        this.navigationBar.setData({ prevTitle: g, curTitle: e.title, nextTitle: l })
                    } else this.modalPageHeader.setData({ curTitle: e.title });
                    o && o.hide(), r.show(), this.currentNavigationItem = r
                } else this.currentNavigationItem = null
            }, e.prototype.onChangeTitle = function(e, t) { this.currentNavigationItem && this.currentNavigationItem.setData({ curTitle: t }) };
            var t = { isCurrent: function(e) { return e.current }, isMain: function(e) { return e.mainMenu } },
                i = { previous: function(e, t, i) { return e === t ? i : e - 1 }, next: function(e, t, i) { return e === i ? t : e + 1 }, nop: function(e, t, i) { return e } },
                a = function(e, t) {
                    for (var i = this.pageManager.getPages(), a = 0; a < i.length; a++)
                        if (e(i[a])) { var s = t(a, 0, i.length - 1); return i[s] }
                    var s = t(0, 0, i.length - 1);
                    return i[s]
                },
                s = {
                    showPreviousPage: function() {
                        var e = a.call(this, t.isCurrent, i.previous);
                        this.pageManager.showPage(e.id)
                    },
                    showMainMenuPage: function() {
                        var e = this.pageManager.getMainPage();
                        this.pageManager.togglePage(e.id, { modal: !0 })
                    },
                    showNextPage: function() {
                        var e = a.call(this, t.isCurrent, i.next);
                        this.pageManager.showPage(e.id)
                    }
                };
            e.prototype.getNavigationBar = function(e) { return this.navigationBar ? this.navigationBar : (this.navigationBar = new window.uiTypes.HorizontalNavigationBar(this.$container), this.navigationBar.setData({ prevHandler: s.showPreviousPage.bind(this), curHandler: s.showMainMenuPage.bind(this), nextHandler: s.showNextPage.bind(this) }), this.navigationBar) };
            var n = function() { return { closeMainPage: function() { this.pageManager.togglePage() } } }();
            return e.prototype.getModalPageHeader = function() { return this.modalPageHeader ? this.modalPageHeader : (this.modalPageHeader = new window.uiTypes.ModalHorizontalNavigationBar(this.$container), this.modalPageHeader.setData({ curHandler: n.closeMainPage.bind(this), nextHandler: n.closeMainPage.bind(this) }), this.modalPageHeader) }, e.prototype.hide = function() { this.navigationBar.hide(), this.modalPageHeader.hide() }, e.prototype.dispose = function() { this.navigationBar && this.navigationBar.dispose(), this.modalPageHeader && this.modalPageHeader.dispose(), this.currentNavigationItem = null, this.dispatcher.unregister(this.actions) }, e
        }()),
        n = function() {
            var e = function(e, a, s) { this.pageManager = e, this.$container = a, this.showPageHandler = t.bind(this), this.showMainMenuPageHandler = i.bind(this), this.dispatcher = s, this.actions = [{ type: this.dispatcher.actions.CHANGE_TITLE, handler: this.onChangeTitle.bind(this) }], this.dispatcher.register(this.actions) },
                t = function(e) {
                    var t = $(e.currentTarget),
                        i = t.attr("data-id");
                    this.pageManager.showPage(i)
                },
                i = function(e) {
                    var t = this.pageManager.getMainPage();
                    this.pageManager.togglePage(t.id, { modal: !0 })
                };
            return e.prototype.show = function(e, t) { this.pageChanged(e, t) }, e.prototype.pageChanged = function(e, t) {
                this.navigationBar || (this.navigationBar = new window.uiTypes.TabletNavigationBar(this.$container));
                for (var i = { items: [], options: { containerClickHandler: this.showMainMenuPageHandler } }, a = this.pageManager.getPages(), s = 0; s < a.length; s++) i.items.push({ title: a[s].title, id: a[s].id, handler: this.showPageHandler, active: a[s].id === e.id, icon: a[s].icon });
                this.navigationBar.setData(i), this.navigationBar.show()
            }, e.prototype.onChangeTitle = function(e, t) { this.navigationBar && this.navigationBar.setTitle(t) }, e.prototype.dispose = function() { this.navigationBar && (this.navigationBar.dispose(), this.navigationBar = null), this.dispatcher.unregister(this.actions) }, e
        }();
    return a
}();
! function(n, e) {
    n.forcedDisconnect = !1;
    var o = function() { Overlay.Show(window.Overlays.serverUnavailableOverlay) },
        i = function() { e("#connectButton .content").html("Connected... - Disconnect"), e("#disconnectedPanel").hide(200) },
        t = function() { e("#connectButton .content").html("Not connected... - Reconnect"), e("#disconnectedPanel").show(200) },
        r = function() { Overlay.Close() },
        c = function() { Overlay.Show(window.Overlays.serverDisabledOverlay) },
        v = function(n) { n ? Overlay.Show(window.Overlays.connectionsLimitOverlay) : Overlay.Close() },
        s = window.generic.globs.$document;
    s.bind(Server.notAvailableEvent, o), s.bind(Server.connectionEstablishedEvent, i), s.bind(Server.connectionLostEvent, t), s.bind(Server.connectionsLimitReachedEvent, v), s.bind(Server.sessionCreatedEvent, r), s.bind(Server.sessionLostEvent, c), e(window).unload(function() { s.unbind(Server.notAvailableEvent, o), s.unbind(Server.connectionEstablishedEvent, i), s.unbind(Server.connectionLostEvent, t), s.unbind(Server.connectionsLimitReachedEvent, v), s.unbind(Server.sessionCreatedEvent, r), s.unbind(Server.sessionLostEvent, c) });
    var a = {
        name: "SessionDataHandler",
        handler: function() {
            var n = !1;
            return function(e) {
                if (void 0 !== e.session) {
                    var o = void 0 !== e.connections_limit_reached;
                    if (o !== n && s.trigger(Server.connectionsLimitReachedEvent, [o]), n = o, void 0 !== e.forceLogin && window.ui.loginForm.Show(), !o) {
                        var i = e.session;
                        Server.SetSessionId(i)
                    }
                    return !0
                }
                return !1
            }
        }()
    };
    DataHandlerManager.Register(a)
}(window.ui, jQuery);
! function() {
    function e(e) { return "administrator" !== e.toLowerCase() }
    var o = null,
        t = function() {
            function e() {
                var e = n.GetCachedUsername(),
                    o = n.GetCachedPassword();
                isDot2() && (e = "remote"), o = o === md5("") ? "" : r, e ? o || (o = "") : (e = "", o = "");
                var u = 0;
                s ? ($("#" + a, s).val(e), $("#" + l, s).val(o), u = { overlay: i, control: s, modalWindow: !0 }) : u = isDot2() ? {
                    overlay: i,
                    title: "Login",
                    modalWindow: !0,
                    textboxes: [{ id: l, text: "Password:", type: "password", value: o, focused: !0, autoSelect: !0 }],
                    buttons: [{ id: "loginSubmit", type: "custom", text: "Login" }],
                    formSubmitHandler: function(e, o) {
                        e.preventDefault();
                        var r = "remote",
                            i = t(o[l]);
                        return n.SetUserData(r, i), n.sendLoginRequest(r, i), !1
                    },
                    stylePrefix: "loginForm"
                } : {
                    overlay: i,
                    title: "Login",
                    modalWindow: !0,
                    textboxes: [{ id: a, text: "Name:", type: "text", value: e, focused: !0, autoSelect: !0, autoCapitalize: !0 }, { id: l, text: "Password:", type: "password", value: o }],
                    buttons: [{ id: "loginSubmit", type: "custom", text: "Login" }],
                    formSubmitHandler: function(e, o) {
                        e.preventDefault();
                        var r = o[a],
                            i = t(o[l]);
                        return r.length > 0 ? (n.SetUserData(r, i), n.sendLoginRequest(r, i)) : $.alert({ message: "You need to give a Username", title: "Login Error" }), !1
                    },
                    stylePrefix: "loginForm"
                }, generic.globs.config.keyboardCaptured = !1, $.Popup.Show(u), s = u.control
            }

            function o(e) { e ? ($.Popup.CloseLast(), generic.globs.config.keyboardCaptured = !0, window.onkeydown = null) : $.alert(isDot2() ? { message: "Wrong Password!", title: "Login Error" } : { message: "Invalid user. Please, choose another user", title: "Login Error" }) }

            function t(e) { return e = void 0 !== e && null !== e && e !== r ? md5(e) : n.GetCachedPassword() }
            var r = "myUserIsSuperHero",
                i = $.getOrCreate("loginOverlay"),
                s = 0,
                a = "loginUsername",
                l = "loginPassword";
            n.loginResultCallback = o, this.Show = function() { Server.IsConnected() ? e.call(this) : $.alert({ message: "You need to be connected to the Console to login", title: "Login" }) }
        },
        n = function() {},
        r = "",
        i = "";
    n.LogIn = function() {
        var e = !1,
            t = !0,
            s = 0,
            a = 10;
        return function() { t ? t = !1 : (++s, e = a >= s, s = e ? s : 0), e ? n.sendLoginRequest(r || n.GetCachedUsername(), r ? i : n.GetCachedPassword()) : o.Show() }
    }(), n.sendLoginRequest = function(e, o) { Server.send({ requestType: Server.requestTypes.login, username: e, password: o }) }, n.loginResultCallback = utilities.emptyFunction, n.onResultHandler = function(o) { n.status = o, o && (isDot2() ? $.cookie("dot2password", e(r) ? i : "") : ($.cookie("gma2login", r), $.cookie("gma2password", e(r) ? i : ""))), n.loginResultCallback(o) }, n.LogOut = function() { n.status = !1 }, n.SetUserData = function(e, o) { r = e, i = o }, n.GetCachedUsername = function() { return isDot2() ? void 0 : $.cookie("gma2login") || $.cookie("malogin") || "" }, n.GetCachedPassword = function() { return isDot2() ? $.cookie("dot2password") || "" : $.cookie("gma2password") || $.cookie("mapassword") || "" };
    var s = function() { return n };
    loginManager = n, o = new t, window.generic.globs.$document.bind(Server.sessionCreatedEvent, n.LogIn), window.generic.globs.$document.bind(Server.sessionLostEvent, n.LogOut), window.login.GetLoginManager = s, window.ui.loginForm = o
}();
window.uiTypes.Wheel = function() {
    var e = function() {};
    e.values = { Normal: 0, Fine: 1, Ultra: 2 }, e.GetName = function(t) {
        for (var n in e.values)
            if (e.values[n] == t) return n;
        return ""
    };
    var t = function(e, t, n) {
        function i(e) { return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY }

        function o(e) { f.addClass("pressedState"), f.removeClass("releasedState"), m_scale = -256 / b.height(), window.isDot2() || (M = 0, C.css("background-image", "url('" + y[M] + "')")), this.WheelSelectedCallback && this.WheelSelectedCallback(A) }

        function l(e) {
            var t = i(e.originalEvent || e);
            if (k) {
                var n = (t - E) * m_scale;
                if (S += n, u(A, n), !window.isDot2() && n) {
                    var o = 0 > n ? window.generic.BoundIncrement : window.generic.BoundDecrement;
                    M = o(M, 0, y.length), C.css("background-image", "url(" + y[M] + ")")
                }
            }
            E = t, k = !0
        }

        function s(e) { k = !1, S = 0, f.removeClass("pressedState"), f.addClass("releasedState"), window.isDot2() || C.css("background-image", "") }

        function r(e) { this.AttrButtonCallback && this.AttrButtonCallback(A) }

        function a() {++B, B %= L, u(A, void 0, B) }

        function u(e, t, n) { N || (N = setInterval(h, 33)), U || (U = []), U[e] = U[e] || {}, void 0 !== t && (U[e].delta_value ? U[e].delta_value += t : U[e].delta_value = t), void 0 !== n && (U[e].resolution = n) }

        function h() {
            if (U) {
                for (var e in U) Server.send({ requestType: Server.requestTypes.encoder, name: e, value: U[e].delta_value, resolution: U[e].resolution });
                U = !1
            } else window.clearTimeout(N), N = !1
        }
        this.m_wheelControl = t, this.m_wheelScale = n ? n : 0, this.WheelSelectedCallback = null, this.AttrButtonCallback = null;
        var c = null,
            d = null,
            m = null,
            w = null,
            v = null,
            g = null,
            _ = null,
            p = null,
            T = null,
            b = null,
            f = null,
            C = null,
            k = !1,
            E = 0,
            S = 0,
            A = e,
            B = 0,
            L = 3,
            D = null,
            y = ["./images/wheelAnimation0.png", "./images/wheelAnimation1.png", "./images/wheelAnimation2.png", "./images/wheelAnimation3.png", "./images/wheelAnimation4.png", "./images/wheelAnimation5.png", "./images/wheelAnimation6.png", "./images/wheelAnimation7.png"],
            x = "wheel_animation_images";
        if (!(0 in $("#" + x))) {
            for (var I = "<div style='display:none' id='" + x + "'>", W = 0; W < y.length; W++) I += "<img src='" + y[W] + "' />";
            I += "</div>", window.generic.globs.$body.append(I)
        }
        var M = -1;
        this.init = function() { c = $(".wheelStripe", this.m_wheelControl), d = c[0], _ = $(".attributeEncoderResolutionButton", this.m_wheelControl), p = _[0], v = $(".attributeButtonName", this.m_wheelControl), m = $(".attributeMainButton", this.m_wheelControl), w = m[0], b = $(".wheelHolder", this.m_wheelControl), f = $(".wheelStripe", this.m_wheelControl), T = $(".attributeEncoderResolutionList", this.m_wheelControl), g = $(".attributeButtonValue", this.m_wheelControl), C = $(".wheelStripeInner", b), D = { stripe_down: o.bind(this), stripe_up: s.bind(this), stripe_move: l.bind(this), resolution_down: a.bind(this), attrBtn_click: r.bind(this) }, this.bind(D) }, this.bind = function(e) { d.addEventListener(Touch.maTouchDown, e.stripe_down), d.addEventListener(Touch.maTouchMove, e.stripe_move), d.addEventListener(Touch.maTouchUp, e.stripe_up), p && p.addEventListener(Touch.maTouchDown, e.resolution_down), w && w.addEventListener(Touch.maTouchDown, e.attrBtn_click) }, this.unbind = function(e) { d.removeEventListener(Touch.maTouchDown, e.stripe_down), d.removeEventListener(Touch.maTouchMove, e.stripe_move), d.removeEventListener(Touch.maTouchUp, e.stripe_up), p && p.removeEventListener(Touch.maTouchDown, e.resolution_down), w && w.removeEventListener(Touch.maTouchDown, e.attrBtn_click) }, this.setAttribute = function(e) { A = e.id, B = e.encoder_resolution, b.attr("id", e.id), v.text(e.name), $(".highlightedText", T).removeClass("highlightedText"), $(":nth-child(" + (parseInt(e.encoder_resolution) + 1) + ")", T).addClass("highlightedText"), g.text(e.value), g.css("background-color", e.bgColor), g.css("color", e.color) }, this.show = function() { this.m_wheelControl.show() }, this.hide = function() { this.m_wheelControl.hide() }, this.dispose = function() { this.unbind(D) };
        var N = !1,
            U = !1
    };
    return t
}();
defineNamespace(window, "ui"),
    function(e) {
        var t = {};
        t.Place = function(e, t, n) {
            if (n = n || {}, n.grid) return void i(e, t, n.grid);
            for (var a = !1, r = (100 / t.length + "%", 0); r < t.length; r++) {
                var o = t[r].$item,
                    s = t[r].location;
                s ? (a = !0, o.css({ position: "absolute", left: s.x, top: s.y, width: s.width, height: s.height })) : o.addClass("line-element"), n.prepend ? e.prepend(o) : e.append(o)
            }
            a ? e.css("position", "relative") : e.addClass("line")
        };
        var i = function(e, t, i) {
            assert(t && t.length > 0, "createGrid Argument $items is not Array", !0), assert(e, "createGrid Argument $container is null", !0);
            var n = i.columnsCount;
            assert(n > 0, "createGrid Argument options.columnsCount is invalid", !0);
            for (var a = t.length, r = 100 / n + "%", o = 100 / Math.ceil(a / n) + "%", s = 0; s < t.length; s++) {
                var l = t[s].$item;
                l.css(window.isDot2() ? { width: "calc(" + r + " - 1px)", height: "calc(" + o + " - 1px)", "float": "left" } : { width: r, height: o, "float": "left" }), e.append(l)
            }
        };
        e.Layout = t
    }(window.ui);
defineNamespace(window, "commands"),
    function(t) {
        function e(t) {
            if (this.states) {
                if (void 0 === t) return this["default"];
                for (var e = 0; e < this.states.length - 1; e++)
                    if (this.states[e].value == t.value) return this.states[e + 1];
                return this.states[0]
            }
            return void assert("called getNextState on stateless command " + this.id)
        }

        function i(t) {
            (!t.states || t.states.length <= 0) && (t.states = [{ value: !1, "default": !0 }, { value: !0 }]);
            for (var i = 0; i < t.states.length; i++)
                if (t.states[i]["default"]) { t["default"] = t.states[i]; break }
            return void 0 === t["default"] && (t["default"] = t.states[0]), t.getNextState = e, void 0 === t.release && void 0 === t.change && (t.release = !0), t
        }

        function n(t) { return t ? (t.id = t.id || generic.createGuid(), i(t)) : null }

        function s(t) { t && (assert(void 0 === m[t.id], "command type '" + t.title + "' already exists"), m[t.id] = t) }

        function a(t, e) {
            var i = -1;
            e === Touch.maTouchUp ? i = 0 : e === Touch.maTouchDown && (i = 1), i >= 0 && window.generic.globs.commandLine["do"]({ keyname: t.getType().id, value: i, autoSubmit: t.getType().autoSubmit })
        }

        function o(t, e, i) { return function() { return t(e, i) } }
        var r = { set: { id: "SET", title: "Set", blinkid: "set", autoSubmit: !0, press: !0, release: !1 }, previous: { id: "PREV", title: "Previous", press: !1 }, next: { id: "NEXT", title: "Next", press: !1 }, clear: { id: "CLEAR", title: "Clear", blinkid: "clear", longClick: !0, press: !0 }, channelFixtureSwitcher: { id: "FIXTURE_CHANNEL", title: "Channel / Fixture / Dmx", press: !0 }, fixtureGroupPresetSwitcher: { id: "FIXTURE_GROUP_PRESET", title: "Fixture / Group / Preset", press: !0 }, execCueSwitch: { id: "EXEC_CUE", title: "Exec / Cue", press: !0 }, storeUpdateSwitcher: { id: "STORE_UPDATE", title: "Store / Update", press: !0 }, oops: { id: "OOPS", title: "Oops", press: !0 }, esc: { id: "ESC", title: "ESC", press: !0 }, _0: { id: "0", title: "0", press: !0 }, _1: { id: "1", title: "1", press: !0 }, _2: { id: "2", title: "2", press: !0 }, _3: { id: "3", title: "3", press: !0 }, _4: { id: "4", title: "4", press: !0 }, _5: { id: "5", title: "5", press: !0 }, _6: { id: "6", title: "6", press: !0 }, _7: { id: "7", title: "7", press: !0 }, _8: { id: "8", title: "8", press: !0 }, _9: { id: "9", title: "9", press: !0 }, dot: { id: "PUNKT", title: ".", press: !0 }, plus: { id: "PLUS", title: "+", press: !0 }, minus: { id: "MINUS", title: "-", press: !0 }, thru: { id: "THRU", title: "Thru", press: !0 }, _if: { id: "IF", title: "If", press: !0 }, at: { id: "AT", title: "At", press: !0 }, full: { id: "FULL", title: "Full", press: !0 }, high: { id: "HIGH", title: "Highlight", blinkid: "high", autoSubmit: !0, press: !0 }, please: { id: "ENTER", title: "Please", press: !0 }, off: { id: "OFF", title: "Off", blinkid: "off", press: !0 }, on: { id: "ON", title: "On", blinkid: "on", press: !0 }, assign: { id: "ASSIGN", title: "Assign", blinkid: "assign", press: !0 }, label: { id: "LABEL", title: "Label", blinkid: "label", press: !0 }, copy: { id: "COPY", title: "Copy", blinkid: "copy", press: !0 }, time: { id: "TIME", title: "Time", blinkid: "time", press: !0 }, page: { id: "PAGE", title: "Page", blinkid: "page", press: !0 }, macro: { id: "MACRO", title: "Macro", blinkid: "macro", press: !0 }, _delete: { id: "DELETE", title: "Delete", blinkid: "delete", press: !0 }, "goto": { id: "GOTO", title: "Goto", blinkid: "goto", press: !0 }, go: { id: "GO_PLUS", title: "Go+", blinkid: "go", press: !0 }, goback: { id: "GO_MINUS", title: "Go-", blinkid: "goback", press: !0 }, pause: { id: "PAUSE", title: "Pause", blinkid: "pause", press: !0 }, select: { id: "SELECT", title: "Select", blinkid: "select", press: !0 }, fixture: { id: "FIXTURE", title: "Fixture", blinkid: "fixture", press: !0 }, sequence: { id: "SEQU", title: "Sequence", blinkid: "sequence", press: !0 }, cue: { id: "CUE", title: "Cue", blinkid: "cue", press: !0 }, preset: { id: "PRESET", title: "Preset", blinkid: "preset", press: !0 }, edit: { id: "EDIT", title: "Edit", blinkid: "edit", press: !0 }, update: { id: "UPDATE", title: "Update", blinkid: "update", press: !0 }, exec: { id: "EXEC", title: "Exec", blinkid: "exec", press: !0 }, store: { id: "STORE", title: "Store", blinkid: "store", press: !0 }, group: { id: "GROUP", title: "Group", blinkid: "group", press: !0 }, progOnly: { id: "PROG_ONLY", title: "Prg Only", blinkid: "po", autoSubmit: !0, press: !0 }, specialDialog: { id: "SPECIAL_DIALOGUE", title: "Special Dialogue", press: !0 }, solo: { id: "SOLO", title: "Solo", blinkid: "solo", autoSubmit: !0, press: !0 }, odd: { id: "ODD", title: "Odd", press: !0 }, even: { id: "EVEN", title: "Even", press: !0 }, wings: { id: "WINGS", title: "Wings", press: !0 }, reset: { id: "RESET", title: "Reset", press: !0 }, _empty: { id: "", title: "", press: !1 } };
        if (isDot2()) var m = $.extend({ ma: { id: "MA", title: "", press: !1 }, presetValue: { id: "layerMode", title: "", states: [{ value: "Value", text: "Name", "default": !0 }, { value: "Output", text: "Value" }] }, progOnly: { id: "PROG_ONLY", title: "Prg Only", blinkid: "po", autoSubmit: !0, press: !0 }, featureSort: { id: "featureSort", title: "Feature Sort" }, fixtureSort: { id: "fixtureSort", title: "Fixture Sort" }, channelSort: { id: "channelSort", title: "Channel Sort" }, hideName: { id: "hideName", title: "Hide name" }, empty: { id: "", title: "", release: !1 } }, r);
        else var m = $.extend({ ma: { id: "MA", title: "", press: !1 }, presetValue: { id: "layerMode", title: "Preset Value", states: [{ value: "Value", text: "Value", "default": !0 }, { value: "Fade", text: "Fade" }, { value: "Delay", text: "Delay" }, { value: "Output", text: "Output" }] }, progOnly: { id: "PROG_ONLY", title: "Prg Only", blinkid: "po", autoSubmit: !0, press: !0 }, featureSort: { id: "featureSort", title: "Feature Sort" }, fixtureSort: { id: "fixtureSort", title: "Fixture Sort" }, channelSort: { id: "channelSort", title: "Channel Sort" }, hideName: { id: "hideName", title: "Hide name" }, empty: { id: "", title: "", release: !1 } }, r);
        ! function() { _.map(m, i) }();
        var d = function(t, e) { this.m_type = t, this.execute = e };
        d.prototype.getType = function() { return this.m_type }, d.prototype.isDynamic = function() { return !1 };
        var l = function(t, e) {
            var i = { value: void 0 };
            t || e || (t = function() { return i }, e = function(t) { i = t }), this.m_getState = t, this.m_setState = e, this.m_dirty = !1, this.$ = $(this), this.onValueChangedEventName = "onValueChanged"
        };
        l.prototype.init = function() { this.$.triggerHandler(this.onValueChangedEventName, { state: this.m_getState() }) }, l.prototype.getState = function() { return this.m_getState ? this.m_getState() : void generic.statusLogging("State.m_getState is null") }, l.prototype.setState = function(t) { return this.m_setState ? void(this.getState().value != t.value && (this.m_setState(t), this.$.triggerHandler(this.onValueChangedEventName, { state: t }), this.m_dirty = !0)) : void generic.statusLogging("State.m_setState is null") }, l.prototype.isDirty = function() { return this.m_dirty }, l.prototype.clean = function() { this.m_dirty = !1 }, l.prototype.on = function(t, e) { this.$.on(this.onValueChangedEventName, e, t) }, l.prototype.off = function(t) { t ? this.$.off(this.onValueChangedEventName, t) : this.$.off(this.onValueChangedEventName) };
        var u = function(t, e, i, n) { this.m_type = t, this.execute = e, i && (i = i.bind(this, this.m_type)), n && (n = n.bind(this, this.m_type)), this.m_state = new l(i, n), void 0 === this.getState().value && this.setState(this.m_type["default"]) };
        u.prototype.init = function() { this.m_state.init() }, u.prototype.getType = function() { return this.m_type }, u.prototype.isDynamic = function() { return !0 }, u.prototype.getState = function() { return this.m_state.getState() }, u.prototype.setState = function(t) { this.m_state.setState(t) }, u.prototype.isDirty = function() { return this.m_state.isDirty() }, u.prototype.clean = function() { this.m_state.clean() }, u.prototype.on = function(t, e) { this.m_state.on(t, e) }, u.prototype.off = function(t) { this.m_state.off(t, parameters) }, t.Command = function(t, e) { return new d(t, e) }, t.StateCommand = function(t, e, i, n) { return new u(t, e, i, n) };
        var c = {};
        for (var p in r) {
            var h = r[p],
                f = null;
            f = h.blinkid ? t.StateCommand : t.Command, c[p] = o(f, h, a)
        }
        c.empty = o(t.Command, m.empty, function() {}), t.defaultCommandHandler = a, t.createCommandType = n, t.addCommandType = s, t.CommandType = m, t.Commands = c, t.State = l
    }(window.commands), defineNamespace(window, "commands.ui"),
    function(t) {
        function e(t, e, i, n) { t.on(e, function(t) { i(t, n) }) }
        var i = { getView: function(t, e) { var i = {}; return void 0 === e || null === e || void 0 === e.value || null === e.value ? i.text = t.title : e.value === !0 || e.value === !1 ? (i.highlighted = e.value, i.text = t.title) : (i.text = e.text, i.value = e.value), i } },
            n = { uiStates: $.extend({}, remoteColors.presetValues), getView: function(t, e) { return isDot2() ? $.extend({ image: "./images/d2ui_values_only.png", checked: "Output" == e.value ? !0 : !1 }, this.uiStates[e.value]) : $.extend({ text: t.title + " (" + e.text + ")" }, this.uiStates[e.value]) } },
            s = { uiStates: { "true": { image: "./images/ma_logo_checked.png" }, "false": { image: "./images/ma_logo.png" } }, getView: function(t, e) { return $.extend({ checked: e.value }, this.uiStates[e.value]) } },
            a = { "default": i };
        a[commands.CommandType.presetValue.id] = n, a[commands.CommandType.ma.id] = s;
        var o = function(t) { return a[t.id] || a["default"] },
            r = function() {};
        r.prototype.init = function(t) {
            this.m_command = t, this.m_presenter = o(t.getType()), this.m_$item && this.dispose(), this.m_$item = null;
            var e = [],
                i = this.m_command.getType();
            i.press && e.push(Touch.maTouchDown), i.release && e.push(Touch.maTouchUp), i.longPress && e.push(Touch.maLongTap), i.change && e.push("change"), this.m_events = e.join(" "), this.m_handler = function(t, e) { this.m_command.execute(this.m_command, t.type, e) }.bind(this)
        }, r.prototype.getItem = function() { return this.m_$item }, r.prototype.update = function(t) {};
        var m = function() { m.superclass.constructor.call(this) };
        generic.extend(m, r), m.prototype.init = function(t) { m.superclass.init.call(this, t), this.m_$item = $("<div class='commandbutton'><span class='content'></span></div>"), this.m_$item.on(this.m_events, this.m_handler), this.update(null) }, m.prototype.update = function(t) {
            var e = this.m_presenter.getView(this.m_command.getType(), t);
            $(".content", this.m_$item).text(e.text)
        }, m.prototype.dispose = function() { this.m_$item.off(this.m_events, this.m_handler) };
        var d = function() { d.superclass.constructor.call(this) };
        generic.extend(d, r), d.prototype.init = function(t) { d.superclass.init.call(this, t), this.m_$item = $("<div class='commandbutton'><span class='content'></span></div>"), this.m_$item.on(this.m_events, this.m_handler), this.update(this.m_command.getState ? this.m_command.getState() : void 0) }, d.prototype.update = function(t) {
            var e = this.m_presenter.getView(this.m_command.getType(), t);
            e.highlighted ? this.m_$item.addClass("highlighted") : e.highlighted === !1 && this.m_$item.removeClass("highlighted"), e.checked ? this.m_$item.addClass("checked") : e.checked === !1 && this.m_$item.removeClass("checked"), $(".content", this.m_$item).text(e.text)
        }, d.prototype.dispose = function() { this.m_$item.off(this.m_events, this.m_handler) };
        var l = function() { l.superclass.constructor.call(this), this.m_itemTemplateChecked = _.template('<div data-type="radio-button" data-value="<%= value %>">                 <input type="radio" id="radio-<%= value %>" name="radio-name-<%= id %>" checked data-type="marker">                 <label for="radio-<%= value %>" data-type="label">                     <span class="content"><%= text %></span>                 </label>             </div>'), this.m_itemTemplate = _.template('<div data-type="radio-button" data-value="<%= value %>">                 <input type="radio" id="radio-<%= value %>" name="radio-name-<%= id %>" data-type="marker">                 <label for="radio-<%= value %>" data-type="label">                     <span class="content"><%= text %></span>                 </label>             </div>') };
        generic.extend(l, r), l.prototype.init = function(t) {
            l.superclass.init.call(this, t), assert(this.m_command.m_type.states && this.m_command.m_type.states.length, "UIRadioStateButton was initialized with stateless command", !0);
            var i = this.m_command.m_state.getState();
            this.m_$item = $("<div></div>");
            for (var n = 0; n < this.m_command.m_type.states.length; n++) {
                var s = this.m_command.m_type.states[n],
                    a = null;
                a = $(s.value == i.value ? this.m_itemTemplateChecked({ text: s.text, value: s.value, id: this.m_command.m_type.id }) : this.m_itemTemplate({ text: s.text, value: s.value, id: this.m_command.m_type.id })), e(a, this.m_events, this.m_handler, s), this.m_$item.append(a)
            }
            this.m_$buttons = $("[data-type=radio-button]", this.m_$item)
        }, l.prototype.getItem = function() { return this.m_$buttons }, l.prototype.dispose = function() { this.m_$buttons.off(this.m_events, this.m_handler) };
        var u = function() { u.superclass.constructor.call(this) };
        generic.extend(u, r), u.prototype.init = function(t) { u.superclass.init.call(this, t), this.m_$item = $("<div class='commandbutton'><span class='content'><img class='logo'/></span></div>"), this.m_$item.on(this.m_events, this.m_handler), this.update(this.m_command.getState ? this.m_command.getState() : void 0) }, u.prototype.update = function(t) {
            var e = this.m_presenter.getView(this.m_command.getType(), t);
            e.checked ? this.m_$item.addClass("checked") : e.checked === !1 && this.m_$item.removeClass("checked"), $(".logo", this.m_$item).attr("src", e.image)
        }, u.prototype.dispose = function() { this.m_$item.off(this.m_events, this.m_handler) };
        var c = function() { c.superclass.constructor.call(this), this.m_dropDownSignURL = "./images/dropDownSign.svg" };
        generic.extend(c, r), c.prototype.init = function(t) { c.superclass.init.call(this, t), this.m_$item = $('<div class="drop-down"><div class="button-content"><span class="content"></span></div><embed data-rel="drop-down-sign" class="dropDownSign" type="image/svg+xml" src="' + this.m_dropDownSignURL + '"></embed></div>'), this.m_innerDropDown = new window.uiTypes.DropDownButton(this.m_$item), this.m_$container = $('<div class="drop-down-container"></div>'), this.m_$items = t.getType().states.map(function(t) { var e = $("<div class='drop-down-item'><span class='content'>" + t.text + "</span></div>"); return e.on(this.m_events, function(e) { this.m_handler(e, t), this.m_innerDropDown.close() }.bind(this)), e }.bind(this)), this.m_innerDropDown.updateListData(this.m_$items), this.m_innerDropDown.init({ OnTap: this.m_handler, canExecuteDropDown: function() { return !0 }, $container: this.m_$container, createItem: function(t) { return t } }), this.update(this.m_command.getState ? this.m_command.getState() : void 0) }, c.prototype.update = function(t) {
            var e = this.m_presenter.getView(this.m_command.getType(), t);
            this.m_innerDropDown.rename(e.text), $(".button-content", this.m_$item).css("background-color", e.activeBackgroundColor), $(".button-content", this.m_$item).css("border-color", e.borderColor), this.m_$container.css("border-color", e.borderColor)
        }, c.prototype.dispose = function() { this.m_innerDropDown && (this.m_innerDropDown.dispose(), this.m_innerDropDown = null); for (var t = 0; t < this.m_$items.length; t++) this.m_$items[t].off(this.m_events) }, t.UICommandElement = function() { return new r }, t.UILabel = function() { return new m }, t.UIMultiStateButton = function() { return new d }, t.UIStateImageButton = function() { return new u }, t.UIDropDown = function() { return new c }, t.UIRadioStateButton = function() { return new l }, t.initCommandUIElementPair = function(t, e, i) { t.uiElement.init(t.command) }, t.fetchUIElementItems = function(t) { return { $item: t.$item || t.uiElement.getItem() } }, t.disposeUIElements = function(t) { t.forEach(function(t, e, i) { t.uiElement && t.uiElement.dispose() }) }, t.defaultCommandExecute = function(t, e, i) {
            var n = null;
            if (void 0 === i) {
                var s = t.getState();
                n = t.getType().getNextState(s)
            } else n = i;
            t.setState(n)
        }
    }(window.commands.ui),
    function(t) {
        function e(t, e, i) { t.command.clean() }
        var i = window.timers.GlobalTimers,
            n = function() { this.m_commands = [], this.m_commandGroupHash = {}, this.m_blinkState = 0, this.m_refreshTimer_context = this.refreshTimer.bind(this), this.m_blinkTimer_context = this.blinkTimer.bind(this) };
        n.prototype.refreshCommandArray = function(t) {
            this.m_commands.length = 0;
            for (var e in this.m_commandGroupHash)
                for (var i = this.m_commandGroupHash[e], n = 0; n < i.length; n++) i[n].command.isDynamic() && this.m_commands.push(i[n])
        }, n.prototype.addCommands = function(t, e) {
            var n = this.m_commands.length <= 0 && e.length > 0;
            this.m_commandGroupHash[t] && (window.generic.statusLogging("Command Group " + t + " already exists and will be replaced"), delete this.m_commandGroupHash[t]), this.m_commandGroupHash[t] = e, this.refreshCommandArray(), n && (i.AddRefreshTimerEventHandler(this.m_refreshTimer_context), i.AddBlinkTimerEventHandler(this.m_blinkTimer_context))
        }, n.prototype.removeCommands = function(t) {
            if (!this.m_commandGroupHash[t]) return void window.generic.statusLogging("Attempt to remove nonexisting command group " + t);
            delete this.m_commandGroupHash[t];
            var e = this.m_commands.length > 0;
            this.refreshCommandArray();
            var n = e && this.m_commands.length <= 0;
            n && (i.RemoveRefreshTimerEventHandler(this.m_refreshTimer_context), i.RemoveBlinkTimerEventHandler(this.m_blinkTimer_context))
        }, n.prototype.refreshTimer = function() {
            for (var t = 0; t < this.m_commands.length; t++) { var i = this.m_commands[t]; "b" === i.command.getState().value ? i.uiElement.update({ value: this.m_blinkState }) : i.command.isDirty() && i.uiElement.update(i.command.getState()) }
            this.m_commands.forEach(e)
        }, n.prototype.blinkTimer = function() { this.m_blinkState = !this.m_blinkState }, n.prototype.dispose = function() { i.RemoveRefreshTimerEventHandler(this.m_refreshTimer_context), i.RemoveBlinkTimerEventHandler(this.m_blinkTimer_context) };
        var s = function() { s.superclass.constructor.call(this), this.m_buttonStateDataHandler = { name: "ButtonStateDataHandler", handler: function(t) { return t.responseType != Server.requestTypes.getdata ? !1 : (this.m_commands.length > 0 && this.dataHandler(t.data), !0) }.bind(this) }, DataHandlerManager.Register(this.m_buttonStateDataHandler) };
        generic.extend(s, n), s.prototype.blinkTimer = function() {
            s.superclass.blinkTimer.call(this);
            for (var t = [], e = 0; e < this.m_commands.length; e++) this.m_commands[e].command.getType().blinkid && t.push(this.m_commands[e].command.getType().blinkid);
            t.length > 0 && Server.send({ requestType: Server.requestTypes.getdata, data: t.join(",") })
        }, s.prototype.dataHandler = function(t) {
            for (var e = 0; e < t.length; e++)
                for (var i in t[e])
                    for (var n = t[e][i], s = 0; s < this.m_commands.length; s++) this.m_commands[s].command.getType().blinkid === i && ("0" === n ? n = !1 : "1" === n && (n = !0), this.m_commands[s].command.getState().value !== n && this.m_commands[s].command.setState({ value: n }))
        }, s.prototype.dispose = function() { DataHandlerManager.Unregister(this.m_buttonStateDataHandler.name) }, t.CommandManager = n, t.ServerCommandManager = s
    }(window.commands);
window.uiTypes.CommandLineComponent = function() {
    var t = generic.globs.config,
        e = React.createClass({
            displayName: "CommandLineComponent",
            getInitialState: function() { return { prompt: "", command: "", promptColor: remoteColors.commandLine.color, dirty: !1 } },
            shouldComponentUpdate: function(t, e) { return this.state.dirty = e.dirty, this.state.prompt != e.prompt || this.state.command != e.command || this.state.promptColor != e.promptColor },
            render: function() { return this.state.dirty = !0, window.isDot2() ? React.createElement("div", { className: "command-line-holder", ref: "cmdline" }, React.createElement("input", { className: "cmdline-input", type: "text", placeholder: "Command Line", ref: "cmdlineTextbox" })) : React.createElement("div", { className: "command-line-holder", ref: "cmdline" }, React.createElement("img", { className: "cmdline-history-button", ref: "historyButton", alt: "history", src: "images/btncontext.png" }), React.createElement("div", { className: "cmdline-prompt", ref: "cmdlinePrompt" }, this.state.prompt), React.createElement("input", { className: "cmdline-input", type: "text", ref: "cmdlineTextbox" })) },
            componentDidMount: function() {
                var t = React.findDOMNode(this.refs.cmdlineTextbox);
                if (t.addEventListener("keyup", this.onKeyUp), document.addEventListener("keypress", this.onKeyPress), window.isDot2()) t.addEventListener(Touch.maTouchUp, this.onHistoryButtonPress);
                else {
                    var e = React.findDOMNode(this.refs.historyButton);
                    e.addEventListener(Touch.maTouchUp, this.onHistoryButtonPress)
                }
            },
            componentWillUnmount: function() {
                var t = React.findDOMNode(this.refs.cmdlineTextbox);
                if (t.removeEventListener("keyup", this.onKeyUp), document.removeEventListener("keypress", this.onKeyPress), window.isDot2()) t.removeEventListener(Touch.maTouchUp, this.onHistoryButtonPress);
                else {
                    var e = React.findDOMNode(this.refs.historyButton);
                    e.removeEventListener(Touch.maTouchUp, this.onHistoryButtonPress)
                }
            },
            componentDidUpdate: function() {
                var t = React.findDOMNode(this.refs.cmdlineTextbox),
                    e = React.findDOMNode(this.refs.cmdlinePrompt);
                e && (e.style.color = this.state.promptColor), t.value = this.state.command
            },
            onKeyPress: function(e) {
                var n = React.findDOMNode(this.refs.cmdlineTextbox),
                    o = e.charCode;
                t.keyboardCaptured && n != document.activeElement && o && 13 != o && (n.focus(), this.setState({ command: this.state.command + "" + String.fromCharCode(o) }), e.preventDefault())
            },
            onKeyUp: function(e) {
                var n = React.findDOMNode(this.refs.cmdlineTextbox),
                    o = n.value,
                    i = e.keyCode;
                if (t.keyboardCaptured) {
                    this.setState({ command: n.value });
                    var s = this.keyToCommandMap[i],
                        r = s ? s(o) : void 0;
                    r && (this.props.dispatcher && this.props.dispatcher.trigger({ type: this.props.dispatcher.actions.COMMAND_ENTER, data: r }), this.setState({ dirty: !1 }))
                }
            },
            keyToCommandMap: { 13: function(t) { return { command: t } }, 27: function(t) { return { command: "ESC" } }, 38: function(t) { return { keyname: "UP", value: 1 } }, 40: function(t) { return { keyname: "DOWN", value: 1 } } },
            onHistoryButtonPress: function() { this.props.dispatcher && this.props.dispatcher.trigger({ type: this.props.dispatcher.actions.HISTORY_BUTTON_PRESSED }) },
            getCommand: function() { return this.state.command },
            getDirty: function() { return this.state.dirty }
        });
    return e
}(), window.uiTypes.CommandLine = function() {
    var t = function(t) { this.m_container = t, this.m_dispatcher = Dispatcher() };
    return t.prototype.init = function() { this.cmdlineComponent = React.render(React.createElement(window.uiTypes.CommandLineComponent, { dispatcher: this.m_dispatcher }), this.m_container), this.m_dispatcher.actions = { COMMAND_ENTER: "COMMAND_ENTER", HISTORY_BUTTON_PRESSED: "HISTORY_BUTTON_PRESSED" }, this.m_actions = [{ type: this.m_dispatcher.actions.COMMAND_ENTER, handler: this.onCommandEnter }, { type: this.m_dispatcher.actions.HISTORY_BUTTON_PRESSED, handler: this.onHistoryButtonPressed }], this.m_dispatcher.register(this.m_actions) }, t.prototype.dispose = function() { this.m_dispatcher.unregister(this.m_actions), this.m_actions = null, React.unmountComponentAtNode(this.m_container) }, t.prototype.render = function(t, e, n, o) {
        var i = {};
        t && t.length > 0 && (i.prompt = t), e && (i.promptColor = e), (o || n && n.length > 0) && (i.command = n || "", log("Command Line set command: " + n)), this.cmdlineComponent.setState(i)
    }, t.prototype["do"] = function(t) { this.cmdlineComponent.getDirty() && (t.cmdlineText = this.cmdlineComponent.getCommand(), this.cmdlineComponent.setState({ dirty: !1 })), Server.send(t) }, t.prototype.getText = function() { return this.cmdlineComponent.getCommand() }, t.prototype.clear = function() { this.cmdlineComponent.setState({ command: "" }) }, t.prototype.onCommandEnter = function(t, e) { Server.send(e) }, t.prototype.onHistoryButtonPressed = function() { window.generic.globs.pageManager.TogglePage(window.uiTypes.pages.CommandHistory.id, { modal: !0 }) }, t.prototype.isEmpty = function(t) { return 0 === this.getText().length }, t
}();
defineNamespace(window, "generic.globs"), $(document).ready(function() {
    var e = window.timers.GlobalTimers;
    if (!fullSupport) return void $("#body").hide();
    try { window.applicationCache.addEventListener("updateready", function(e) { window.applicationCache.status == window.applicationCache.UPDATEREADY && window.location.reload(!0) }, !1) } catch (n) { console.error(n) }
    e.Init(), $.Layout.init(), generic.globs.commandLine = new uiTypes.CommandLine(document.getElementsByClassName("header-left-top")[0]), generic.globs.commandLine.init(), commands.Commands.oops = function() { return commands.Command(commands.CommandType.oops, function(e, n) { generic.globs.commandLine.isEmpty() ? commands.defaultCommandHandler(e, n) : n === Touch.maTouchUp && Server.send({ command: generic.globs.commandLine.getText(), backspace: 1 }) }) }, commands.Commands.ma = function() { var e = commands.StateCommand(commands.CommandType.ma, function(e, n) { commands.ui.defaultCommandExecute(e, n), commands.defaultCommandHandler(e, e.getState().value ? Touch.maTouchDown : Touch.maTouchUp) }); return function() { return e } }(), generic.globs.serverCommandManager = new commands.ServerCommandManager, generic.globs.pageManager = new uiTypes.pages.PageManager(generic.globs.commandLine, window.Server, generic.globs.GlobalSettings), generic.globs.pageManager.Init(), new uiTypes.Wheel("DIM", $(".dimmer-wheel")).init(), $("body").bind("touchmove", function(e) { e.preventDefault() }), window.addEventListener("touchmove", function(e) { e.preventDefault() }, { passive: !1 }), window.addEventListener("touchend", function(e) { e.preventDefault(), void 0 != e.target && ("INPUT" == e.target.nodeName ? e.target.focus() : e.target.click()) }, { passive: !1 }), Server.connect()
}), $(window).unload(function() { generic.globs.pageManager && generic.globs.pageManager.dispose(), generic.globs.commandLine && generic.globs.commandLine.dispose(), Server.closeAllConnection() });
window.uiTypes.canvas.MouseEvent = function() { var t = function() {}; return t.down = 0, t.up = 0, t.move = 0, t }(), window.uiTypes.canvas.Shape = function() { var t = function(t, e) { this.m_rect = t, this.m_renderer = e }; return t.prototype.hitTest = function(t, e) { return window.generic.IsPointInRect(t, this.m_rect) ? this : !1 }, t }(), window.uiTypes.canvas.Button = function() { var t = function(e, r) { t.superclass.constructor.call(this, e, r), this.m_frameSize = 0, this.m_roundedCornerRadius = 0, this.m_backgroundColor = remoteColors.scrollBar.backgroundColor, this.m_backgroundColorPressed = remoteColors.scrollBar.backgroundColorPressed, this.m_strokeColor = remoteColors.scrollBar.strokeColor, this.m_pressed = 0, this.m_over = 0, this.m_pressedCallback = 0, this.m_moveCallback = 0, this.m_releaseCallback = 0, this.m_arrowLineWidth = 3 }; return window.generic.extend(t, window.uiTypes.canvas.Shape), t.prototype.draw = function() { this.m_renderer.drawRect(this.m_rect, this.m_strokeColor, this.m_frameSize, this.m_pressed && this.m_over ? this.m_backgroundColorPressed : this.m_backgroundColor, this.m_roundedCornerRadius) }, t.prototype.hitTest = function(e, r) { var i = t.superclass.hitTest.call(this, e, r); return this.m_over = i, r.up ? (this.m_pressed = !1, this.m_releaseCallback && this.m_releaseCallback(e)) : i && r.down && (this.m_pressed = !0, this.m_pressPoint = e, this.m_pressedCallback && this.m_pressedCallback(e)), this.m_pressed && r.move && this.m_moveCallback && this.m_moveCallback(e), i }, t }(), window.uiTypes.canvas.Arrow = function() {
    var t = function(e, r, i) { t.superclass.constructor.call(this, e, i), this.m_direction = r };
    window.generic.extend(t, window.uiTypes.canvas.Button);
    var e = { up: [5, 1, 7], down: [0, 6, 2], left: [2, 3, 7], right: [0, 4, 5] };
    return t.prototype.draw = function() {
        t.superclass.draw.call(this);
        var r = .3 * this.m_rect.width,
            i = [{ x: this.m_rect.left + r, y: this.m_rect.top + r }, { x: this.m_rect.left + this.m_rect.width / 2, y: this.m_rect.top + r }, { x: this.m_rect.left + (this.m_rect.width - r), y: this.m_rect.top + r }, { x: this.m_rect.left + r, y: this.m_rect.top + this.m_rect.height / 2 }, { x: this.m_rect.left + (this.m_rect.width - r), y: this.m_rect.top + this.m_rect.height / 2 }, { x: this.m_rect.left + r, y: this.m_rect.top + this.m_rect.width - r }, { x: this.m_rect.left + this.m_rect.width / 2, y: this.m_rect.top + this.m_rect.height - r }, { x: this.m_rect.left + (this.m_rect.width - r), y: this.m_rect.top + this.m_rect.height - r }];
        this.m_renderer.drawLines([i[e[this.m_direction][0]], i[e[this.m_direction][1]], i[e[this.m_direction][2]]], this.m_strokeColor, 0, this.m_arrowLineWidth)
    }, t
}(), window.uiTypes.canvas.Caret = function() { var t = function(e, r, i, s) { t.superclass.constructor.call(this, e, s) }; return window.generic.extend(t, window.uiTypes.canvas.Button), t }(), window.uiTypes.canvas.ScrollBar = function() {
    var t = function(e, r, i, s) {
        var o = this;
        t.superclass.constructor.call(this, e, s), this.m_defaultSettings = { defaultWheelCoef: 10, roundedCornerRadius: 0, backgroundColor: remoteColors.scrollBar.backgroundColor, frameSize: 0, strokeColor: remoteColors.scrollBar.strokeColor, minCaretBreadth: 50, visible: !0 }, this.m_parent = r, this.m_offset = 0, this.m_inverted = i, this.m_arrowBack = 0, this.m_caret = 0, this.m_arrowForward = 0, this.m_caretPressedPoint = 0, this.m_caretPressedOffset = 0, this.stepCallback = 0, this.stepPageCallback = 0, this.wheelStartCallback = 0, this.wheelCallback = 0, this.wheelEndCallback = 0, this.init = function() { this.m_arrowBack = new window.uiTypes.canvas.Arrow(this.GetBackArrowRect(), this.backArrowName, this.m_renderer), this.m_arrowBack.m_pressedCallback = function() { this.step("back") }.bind(this), this.m_caret = new window.uiTypes.canvas.Caret(this.GetCaretRect(), 0, 0, this.m_renderer), this.m_caret.m_pressedCallback = function(t) { this.m_caretPressedPoint = t, this.m_caretPressedOffset = this.GetOffset(), this.wheelStartCallback && this.wheelStartCallback() }.bind(this), this.m_caret.m_moveCallback = function(t) { this.dragCaret(t) }.bind(this), this.m_caret.m_releaseCallback = function(t) { this.m_caretPressedPoint = 0, this.m_caretPressedOffset = 0, this.wheelEndCallback && this.wheelEndCallback() }.bind(this), this.m_arrowForward = new window.uiTypes.canvas.Arrow(this.GetForwardArrowRect(), this.forwardArrowName, this.m_renderer), this.m_arrowForward.m_pressedCallback = function() { o.step("forward") } }, this.setColorSettings = function(t) { t.roundedCornerRadius && (this.m_arrowForward.m_roundedCornerRadius = this.m_caret.m_roundedCornerRadius = this.m_arrowBack.m_roundedCornerRadius = this.m_defaultSettings.roundedCornerRadius = t.roundedCornerRadius), t.backgroundColor && (this.m_defaultSettings.backgroundColor = t.backgroundColor), t.buttonsBackgroundColor && (this.m_arrowForward.m_backgroundColor = this.m_caret.m_backgroundColor = this.m_arrowBack.m_backgroundColor = t.buttonsBackgroundColor), t.buttonsPresedBackgroundColor && (this.m_arrowForward.m_backgroundColorPressed = this.m_caret.m_backgroundColorPressed = this.m_arrowBack.m_backgroundColorPressed = t.buttonsPresedBackgroundColor), t.frameSize && (this.m_arrowForward.m_frameSize = this.m_caret.m_frameSize = this.m_arrowBack.m_frameSize = this.m_defaultSettings.frameSize = t.frameSize), t.strokeColor && (this.m_arrowForward.m_strokeColor = this.m_caret.m_strokeColor = this.m_arrowBack.m_strokeColor = this.m_defaultSettings.strokeColor = t.strokeColor) }, this.hitTest = function(e, r) { if (this.m_defaultSettings.visible) { var i = t.superclass.hitTest.call(this, e, r); return i && (i = this.m_arrowBack.hitTest(e, r) || this.m_caret.hitTest(e, r) || this.m_arrowForward.hitTest(e, r), !i && r.down && this.stepPage(window.generic.IsPointInRect(e, this.GetBeforeCaretRect()) ? "back" : "forward")), i } return !1 }, this.draw = function() { this.m_defaultSettings.visible && (this.m_renderer.drawRect(this.m_rect, this.m_defaultSettings.strokeColor, this.m_defaultSettings.frameSize, this.m_defaultSettings.backgroundColor, this.m_defaultSettings.roundedCornerRadius), isDot2() || this.m_arrowBack.draw(), this.m_caret.draw(), isDot2() || this.m_arrowForward.draw()) }, this.getDirection = function(t) { if (this.m_inverted) { if ("forward" === t) return "back"; if ("back" === t) return "forward" } return t }, this.step = function(t) { this.stepCallback && this.stepCallback(this.getDirection(t)) }, this.stepPage = function(t) { this.stepPageCallback && this.stepPageCallback(this.getDirection(t)) }, this.dragCaret = function(t) {
            var e = { x: t.x - this.m_caretPressedPoint.x, y: t.y - this.m_caretPressedPoint.y };
            if (this.m_inverted && (e.x = -e.x, e.y = -e.y), this.wheelCallback) {
                var r = this.GetCaretFieldLength() - this.GetCaretLength();
                r > 0 && this.wheelCallback(this.GetDimensionValue(e) / r)
            }
        }, this.scroll = function(t) {
            if (this.m_inverted || (t.x = -t.x, t.y = -t.y), this.stepCallback) {
                var e = this.GetDimensionValue(t);
                this.stepCallback(e >= 0 ? "forward" : "back")
            }
        }, this.GetOffset = function() { return this.m_offset }, this.SetOffset = function(t) { this.m_offset = this.m_inverted ? 1 - (this.GetCaretFieldLength() - this.GetCaretLength()) * t : (this.GetCaretFieldLength() - this.GetCaretLength()) * t }, this.GetVisible = function() { return this.m_defaultSettings.visible }, this.SetVisible = function(e) { this.m_defaultSettings.visible != e && (this.m_defaultSettings.visible = e, $.event.trigger({ type: t.visibilityChangedEvent, sender: this })) }
    };
    return window.generic.extend(t, window.uiTypes.canvas.Shape), t.visibilityChangedEvent = "visibilityChanged", t.prototype.resize = function(t) { this.m_rect = t, this.m_arrowBack.m_rect = this.GetBackArrowRect(), this.m_caret.m_rect = this.GetCaretRect(), this.m_arrowForward.m_rect = this.GetForwardArrowRect() }, t
}(), window.uiTypes.canvas.HorizontalScrollBar = function() {
    var t = function(e, r, i) { t.superclass.constructor.call(this, e, r, 0, i), this.backArrowName = "left", this.forwardArrowName = "right" };
    return window.generic.extend(t, window.uiTypes.canvas.ScrollBar), t.prototype.GetBackArrowRect = function() { var t = this.m_rect.height; return isDot2() && (t = 0), { top: this.m_rect.top, left: this.m_rect.left, width: t, height: this.m_rect.height } }, t.prototype.GetBeforeCaretRect = function() { var t = this.m_rect.height; return isDot2() && (t = 0), { top: this.m_rect.top, left: this.m_rect.left + t, width: this.m_offset, height: this.m_rect.height } }, t.prototype.GetCaretRect = function() {
        var t = this.m_rect.height;
        isDot2() && (t = 0);
        var e = Math.min(this.m_parent.GetVisibleScrollableWidth() / this.m_parent.GetFullScrollableWidth(), 1);
        return { top: this.m_rect.top, left: this.m_rect.left + t + this.m_offset, width: Math.max(this.GetCaretFieldLength() * e, this.m_defaultSettings.minCaretBreadth), height: this.m_rect.height }
    }, t.prototype.GetAfterCaretRect = function() {
        var t = this.m_rect.height;
        isDot2() && (t = 0);
        var e = this.GetCaretRect();
        return { top: this.m_rect.top, left: e.left + e.width, width: this.m_rect.width - (e.left + e.width) - t, height: this.m_rect.height }
    }, t.prototype.GetForwardArrowRect = function() { var t = this.m_rect.height; return isDot2() && (t = 0), { top: this.m_rect.top, left: this.m_rect.left + this.m_rect.width - t, width: t, height: this.m_rect.height } }, t.prototype.GetCaretFieldLength = function() { var t = this.m_rect.height; return isDot2() && (t = 0), this.m_rect.width - 2 * t }, t.prototype.GetDimensionValue = function(t) { return t.x }, t.prototype.GetCaretLength = function() { return this.GetCaretRect().width }, t.prototype.GetBreadth = function() { return this.m_defaultSettings.visible ? this.m_rect.height : 0 }, t.prototype.resize = function(e) { t.superclass.resize.call(this, e), this.SetVisible(this.m_parent.GetVisibleScrollableWidth() / this.m_parent.GetFullScrollableWidth() >= 1 ? !1 : !0) }, t
}(), window.uiTypes.canvas.VerticalScrollBar = function() {
    var t = function(e, r, i, s) { t.superclass.constructor.call(this, e, r, i, s), this.backArrowName = "up", this.forwardArrowName = "down" };
    return window.generic.extend(t, window.uiTypes.canvas.ScrollBar), t.prototype.GetBackArrowRect = function(t) { var e = this.m_rect.width; return isDot2() && (e = 0), { top: this.m_rect.top, left: this.m_rect.left, width: this.m_rect.width, height: e } }, t.prototype.GetBeforeCaretRect = function() { var t = this.m_rect.width; return isDot2() && (t = 0), { top: this.m_rect.top + t, left: this.m_rect.left, width: this.m_rect.width, height: this.m_offset } }, t.prototype.GetCaretRect = function() {
        var t = this.m_rect.width;
        isDot2() && (t = 0);
        var e = Math.min(1, this.m_parent.GetVisibleScrollableHeight() / this.m_parent.GetFullScrollableHeight()),
            r = Math.max(parseInt(this.GetCaretFieldLength() * e), this.m_defaultSettings.minCaretBreadth);
        return { top: this.m_inverted ? this.m_rect.top + this.m_rect.height - t + this.m_offset - r : this.m_rect.top + t + this.m_offset, left: this.m_rect.left, width: this.m_rect.width, height: r }
    }, t.prototype.GetAfterCaretRect = function() {
        var t = this.m_rect.width;
        isDot2() && (t = 0);
        var e = this.GetCaretRect();
        return { top: e.top + e.height, left: this.m_rect.left, width: this.m_rect.width, height: this.m_rect.height - (e.top + e.height) - t }
    }, t.prototype.GetForwardArrowRect = function(t) { var e = this.m_rect.width; return isDot2() && (e = 0), { top: this.m_rect.top + this.m_rect.height - e, left: this.m_rect.left, width: this.m_rect.width, height: e } }, t.prototype.GetCaretFieldLength = function() { var t = this.m_rect.width; return isDot2() && (t = 0), this.m_rect.height - 2 * t }, t.prototype.GetDimensionValue = function(t) { return t.y }, t.prototype.GetCaretLength = function() { return this.GetCaretRect().height }, t.prototype.GetBreadth = function() { return this.m_defaultSettings.visible ? this.m_rect.width : 0 }, t.prototype.resize = function(e) { t.superclass.resize.call(this, e), this.SetVisible(this.m_parent.GetVisibleScrollableHeight() / this.m_parent.GetFullScrollableHeight() >= 1 ? !1 : !0) }, t
}();
window.uiTypes.canvas.MA2Window = function() {
    var t = function(t, e, i, s) {
        this.m_defaultSettings = { roundedCornerRadius: 8, backgroundColor: remoteColors.ma2Window.backgroundColor, buttonsBackgroundColor: remoteColors.ma2Window.buttonsBackgroundColor, frameSize: 2, strokeColor: remoteColors.ma2Window.strokeColor, maxScrollBreadth: 50, minScrollBreadth: 30, scrollBreadth: 45 }, isDot2() && (this.m_defaultSettings.scrollBreadth = 30, this.m_defaultSettings.roundedCornerRadius = 0), this.m_rect = i, this.m_parent = t, this.m_parentPureDOMElement = t[0], this.renderer = e, this.m_dispatcher = s;
        var r = 0,
            o = 0,
            n = 0;
        this.m_redrawWholeCanvas = !0, this.GetHScroll = function() { return r }, this.SetHScroll = function(t) { r = t }, this.GetVScroll = function() { return o }, this.SetVScroll = function(t) { o = t }, this.scroll = function(t) { t.ctrlKey || o.scroll({ x: t.deltaX, y: t.deltaY }) }, this.GetHScrollRect = function() { var t = this.GetContentRect(); return { top: this.m_rect.top + t.height, left: this.m_rect.left, width: this.m_rect.width, height: this.m_defaultSettings.scrollBreadth } }, this.GetVScrollRect = function() { var t = this.GetContentRect(); return { top: this.m_rect.top, left: this.m_rect.left + t.width, width: this.m_defaultSettings.scrollBreadth, height: t.height } }, this.GetContentRect = function() { return { x: this.m_rect.left, y: this.m_rect.top, top: this.m_rect.top, left: this.m_rect.left, width: this.m_rect.width - (this.GetVScroll() ? this.GetVScroll().GetBreadth() : this.m_defaultSettings.scrollBreadth) - this.m_rect.left, height: this.m_rect.height - (this.GetHScroll() ? this.GetHScroll().GetBreadth() : this.m_defaultSettings.scrollBreadth) - this.m_rect.top } }, this.press = function(e) {
            var i = window.generic.GetEventPoint(e),
                s = t.offset();
            i.x -= s.left, i.y -= s.top, n = this.hitTestWindow(i, { up: !1, down: !0, move: !1 })
        }, this.release = function(e) {
            var i = window.generic.GetEventPoint(e),
                s = t.offset();
            i.x -= s.left, i.y -= s.top, n ? n.hitTest(i, { up: !0, down: !1, move: !1 }) : this.hitTestWindow(i, { up: !0, down: !1, move: !1 }), n = !1
        }, this.over = function(e) {
            var i = window.generic.GetEventPoint(e),
                s = t.offset();
            i.x -= s.left, i.y -= s.top, this.hitTestWindow(i, { up: !1, down: !1, move: !1, over: !0 })
        }, this.move = function(e) {
            var i = window.generic.GetEventPoint(e),
                s = t.offset();
            i.x -= s.left, i.y -= s.top, n ? n.hitTest(i, { up: !1, down: !1, move: !0 }) : this.hitTestWindow(i, { up: !1, down: !1, move: !0 })
        }, this.scrollVisibilityChangedHandler = function(t) { t.sender == this.GetHScroll() ? this.GetVScroll().resize(this.GetVScrollRect()) : t.sender == this.GetVScroll() && this.GetHScroll().resize(this.GetHScrollRect()) }, this.hitTestWindow = function(t, e) { return this.hitTest(t, e) || r.hitTest(t, e) || o.hitTest(t, e) }, this.SetHScrollVisible = function(t) {
            var e = this.GetHScroll(),
                i = this.GetVScroll(),
                s = e.GetVisible();
            s != t && (e.SetVisible(t), i.GetVisible() && i.resize(this.GetVScrollRect()))
        }, this.SetVScrollVisible = function(t) {
            var e = this.GetHScroll(),
                i = this.GetVScroll(),
                s = i.GetVisible();
            s != t && (i.SetVisible(t), e.GetVisible() && e.resize(this.GetHScrollRect()))
        }, this.press_context = this.press.bind(this), this.move_context = this.move.bind(this), this.release_context = this.release.bind(this), this.over_context = this.over.bind(this), this.scroll_context = this.scroll.bind(this), this.m_scrollVisibilityChangedHandler_context = this.scrollVisibilityChangedHandler.bind(this)
    };
    return t.prototype.init = function(t) {
        isDot2() || (this.m_defaultSettings.scrollBreadth = Math.min(Math.max(this.m_parent.width() / 100 * 2, this.m_defaultSettings.minScrollBreadth), this.m_defaultSettings.maxScrollBreadth)), this.m_parentPureDOMElement.addEventListener(Touch.maTouchDown, this.press_context), this.m_parentPureDOMElement.addEventListener(Touch.maTouchMove, this.move_context), this.m_parentPureDOMElement.addEventListener(Touch.maTouchUp, this.release_context), this.m_parentPureDOMElement.addEventListener(Touch.maTouchOver, this.over_context), this.SetHScroll(new window.uiTypes.canvas.HorizontalScrollBar(this.GetHScrollRect(), this, this.renderer));
        var e = this.GetHScroll();
        e.stepCallback = this.hStep.bind(this), e.stepPageCallback = this.hStepPage.bind(this), e.wheelStartCallback = this.wheelStart.bind(this), e.wheelCallback = this.hWheel.bind(this), e.wheelEndCallback = this.wheelEnd.bind(this), e.init(), e.setColorSettings(this.m_defaultSettings), this.SetVScroll(new window.uiTypes.canvas.VerticalScrollBar(this.GetVScrollRect(), this, t, this.renderer));
        var i = this.GetVScroll();
        i.stepCallback = this.vStep.bind(this), i.stepPageCallback = this.vStepPage.bind(this), i.wheelStartCallback = this.wheelStart.bind(this), i.wheelCallback = this.vWheel.bind(this), i.wheelEndCallback = this.wheelEnd.bind(this), i.init(), i.setColorSettings(this.m_defaultSettings), $(this.m_parentPureDOMElement).on("mousewheel", this.scroll_context), document.addEventListener(window.uiTypes.canvas.ScrollBar.visibilityChangedEvent, this.m_scrollVisibilityChangedHandler_context)
    }, t.prototype.refresh = function() { this.m_redrawWholeCanvas && this.renderer.drawRect(this.m_rect, 0, 0, this.m_defaultSettings.fillStyle) }, t.prototype.hitTest = function(t, e) { var i = window.generic.IsPointInRect(t, this.GetContentRect()) ? this : !1; return i }, t.prototype.resize = function(t, e) { this.m_rect = t, isDot2() || (this.m_defaultSettings.scrollBreadth = Math.min(Math.max(this.m_parent.width() / 100 * 2, this.m_defaultSettings.minScrollBreadth), this.m_defaultSettings.maxScrollBreadth)), this.GetHScroll().resize(this.GetHScrollRect()), this.GetVScroll().resize(this.GetVScrollRect()), this.m_redrawWholeCanvas = !0 }, t.prototype.getSize = function() { return this.m_rect }, t.prototype.drawScrollBars = function() { this.GetHScroll().resize(this.GetHScrollRect()), this.GetVScroll().resize(this.GetVScrollRect()), this.GetHScroll().draw(this.renderer), this.GetVScroll().draw(this.renderer) }, t.prototype.setConfig = function(t) { $.extend(this.m_defaultSettings, t) }, t.prototype.Close = function() { this.m_parentPureDOMElement.removeEventListener(Touch.maTouchDown, this.press_context), this.m_parentPureDOMElement.removeEventListener(Touch.maTouchMove, this.move_context), this.m_parentPureDOMElement.removeEventListener(Touch.maTouchUp, this.release_context), $(this.m_parentPureDOMElement).on("mousewheel", this.scroll_context), document.removeEventListener(window.uiTypes.canvas.ScrollBar.visibilityChangedEvent, this.m_scrollVisibilityChangedHandler_context) }, t
}();
window.uiTypes.canvas.CanvasContainerWindow = function() {
    var t = function(e, s, i, o) {
        t.superclass.constructor.call(this, e, s, i, o), $.extend(this.m_defaultSettings, { fontSizeToCellHeightCoef: 5 / 3, fontSizeToCellWidthCoef: 20 / 3, hScrollVisible: !0, vScrollVisible: !0, lassoEnabled: !0, fillStyle: remoteColors.canvasContainer.fillColor, textColor: remoteColors.canvasContainer.color, cellBackgroundColor: remoteColors.canvasContainer.cell.backgroundColor, cellStrokeStyle: remoteColors.canvasContainer.cell.strokeColor, focusCellFrameSize: 2, focusCellBorderColor: remoteColors.canvasContainer.cell.focusBorderColor, fontFamily: "Helvetica", pixelPerEm: 0, cellFontSize: 0, fixedColumnsCount: 0, titleRows: 0 }), this.m_containerSettings = { cellHeight: 0, cellWidth: 0, cellRenderHeight: 0, cellRenderWidth: 0, colsCount: 0, rowsCount: 0 }, this.m_focusPos = { x: 0 - this.m_defaultSettings.fixedColumnsCount, y: 0 }, this.m_containerOffset = { x: 0, y: 0 }, this.m_wheelStartPoint = 0, this.GetLassoBorders = function() { var t = this.GetContentRect(); return t.top += this.m_containerSettings.cellRenderHeight * this.m_defaultSettings.titleRows, t.height -= this.m_containerSettings.cellRenderHeight * this.m_defaultSettings.titleRows, t }, this.SetColsCount = function(t) { this.m_containerSettings.colsCount != t && (this.m_containerSettings.colsCount = t, this.SyncHOffset()) }, this.wheelStart = function() { window.generic.statusLogging("wheel Start"), this.m_wheelStartPoint = { focusX: this.m_focusPos.x, focusY: this.m_focusPos.y, offsetX: this.m_containerOffset.x, offsetY: this.m_containerOffset.y }, this.m_focusPos.x < 0 && (this.m_wheelStartPoint.offsetX = 0, this.setOffset({ x: 0 })) }, this.wheelEnd = function() { this.m_wheelStartPoint = 0 }, this.hStep = function(t) {
            if ("forward" === t) {
                var e = Math.min(this.GetVisibleColsCount(), this.m_containerSettings.colsCount);
                this.m_focusPos.x < e - 1 ? this.setFocus({ x: this.m_focusPos.x + 1 }) : this.m_containerOffset.x + this.m_focusPos.x + this.m_defaultSettings.fixedColumnsCount < this.m_containerSettings.colsCount - 1 && this.setOffset({ x: this.m_containerOffset.x + 1 })
            } else "back" === t && (0 == this.m_focusPos.x && this.m_containerOffset.x > 0 ? this.setOffset({ x: this.m_containerOffset.x - 1 }) : this.m_focusPos.x > -this.m_defaultSettings.fixedColumnsCount && this.setFocus({ x: this.m_focusPos.x - 1 }))
        }, this.hStepPage = function(t) { return "forward" === t ? 10 : "back" === t ? -10 : 0 }, this.hWheel = function(t) {
            if (t)
                if (0 > t) t = parseInt(-t * this.m_containerSettings.colsCount), this.m_wheelStartPoint.focusX >= t ? this.setFocus({ x: this.m_wheelStartPoint.focusX - t }) : (t -= this.m_wheelStartPoint.focusX, this.setFocus({ x: 0 }), this.m_wheelStartPoint.offsetX >= t ? this.setOffset({ x: this.m_wheelStartPoint.offsetX - t }) : (t -= this.m_wheelStartPoint.offsetX, this.setOffset({ x: 0 }), this.setFocus(this.m_defaultSettings.fixedColumnsCount >= t ? { x: -t } : { x: -this.m_defaultSettings.fixedColumnsCount })));
                else {
                    var e = this.GetVisibleColsCount();
                    t = parseInt(t * this.m_containerSettings.colsCount), t < e - this.m_wheelStartPoint.focusX ? this.setFocus({ x: this.m_wheelStartPoint.focusX + t }) : (t -= e - this.m_wheelStartPoint.focusX, this.setFocus({ x: e - 1 }), this.setOffset(t < this.m_containerSettings.colsCount - this.m_defaultSettings.fixedColumnsCount - e - this.m_wheelStartPoint.offsetX ? { x: this.m_wheelStartPoint.offsetX + t } : { x: this.m_containerSettings.colsCount - this.m_defaultSettings.fixedColumnsCount - e }))
                }
        }, this.SyncHOffset = function() {
            var t = this.GetHScroll();
            if (t.GetVisible()) {
                var e = this.m_containerSettings.colsCount;
                if (1 >= e) t.SetOffset(0);
                else {
                    var s = this.m_focusPos.x + this.m_defaultSettings.fixedColumnsCount + (this.m_focusPos.x >= 0 ? this.m_containerOffset.x : 0);
                    t.SetOffset(s / (e - 1))
                }
            }
        }, this.vStep = function(t) {
            if ("forward" === t) {
                var e = Math.min(this.GetVisibleRowsCount(), this.GetRowsCount());
                this.m_focusPos.y < e - 1 ? this.setFocus({ y: this.m_focusPos.y + 1 }) : this.m_focusPos.y + this.m_containerOffset.y < this.GetRowsCount() - 1 && this.setOffset({ y: this.m_containerOffset.y + 1 })
            } else "back" === t && (this.m_focusPos.y > 0 ? this.setFocus({ y: this.m_focusPos.y - 1 }) : this.m_containerOffset.y > 0 && this.setOffset({ y: this.m_containerOffset.y - 1 }), this.SyncVOffset())
        }, this.vStepPage = function(t) { return "forward" === t ? 10 : "back" === t ? -10 : 0 }, this.vWheel = function(t) {
            if (t) {
                if (0 > t) t = parseInt(-t * this.GetRowsCount()), this.m_wheelStartPoint.focusY >= t ? this.setFocus({ y: this.m_wheelStartPoint.focusY - t }) : (t -= this.m_wheelStartPoint.focusY, this.setFocus({ y: 0 }), this.setOffset(this.m_wheelStartPoint.offsetY >= t ? { y: this.m_wheelStartPoint.offsetY - t } : { y: 0 }));
                else {
                    var e = this.GetVisibleRowsCount();
                    t = parseInt(t * this.GetRowsCount()), t < e - this.m_wheelStartPoint.focusY ? this.setFocus({ y: this.m_wheelStartPoint.focusY + t }) : (t -= e - this.m_wheelStartPoint.focusY, this.setFocus({ y: e - 1 }), this.setOffset(t < this.GetRowsCount() - e - this.m_wheelStartPoint.offsetY ? { y: this.m_wheelStartPoint.offsetY + t } : { y: this.GetRowsCount() - e }))
                }
                this.SyncVOffset()
            }
        }, this.SyncVOffset = function() {
            var t = this.GetVScroll();
            if (t.GetVisible()) {
                var e = this.GetRowsCount();
                t.SetOffset(1 >= e ? 0 : (this.m_focusPos.y + this.m_containerOffset.y) / (e - 1))
            }
        }, this.GetFocus = function() { return this.m_focusPos }, this.GetOffset = function() { return this.m_containerOffset }, this.ResetFocusAndOffset = function() { this.setFocus({ x: -this.m_defaultSettings.fixedColumnsCount, y: 0 }), this.setOffset({ x: 0, y: 0 }) }, this.GetCommandState = function(t) { var e = this.m_defaultSettings.storage.Load(t.id, t["default"]); return e.value ? e : t["default"] }, this.SetCommandState = function(t, e) { return this.m_defaultSettings.storage.Save(t.id, e, !0) }, this.itemSelectedEvent = "itemSelected"
    };
    return window.generic.extend(t, window.uiTypes.canvas.MA2Window), t.prototype.init = function() { t.superclass.init.call(this), this.SetHScrollVisible(this.m_defaultSettings.hScrollVisible), this.SetVScrollVisible(this.m_defaultSettings.vScrollVisible), this.setFontSize(), window.generic.globs.selectionOverlay.setBorders(this.GetLassoBorders()), window.generic.globs.selectionOverlay.setParent(this.m_parent) }, t.prototype.setFontSize = function() {
        var t = utility.getDefaultFontSize();
        this.m_defaultSettings.cellFontSize = t, this.m_defaultSettings.pixelPerEm = t / 1, this.m_containerSettings.cellHeight = parseInt(this.m_defaultSettings.cellFontSize * this.m_defaultSettings.fontSizeToCellHeightCoef), this.m_containerSettings.cellWidth = parseInt(this.m_defaultSettings.cellFontSize * this.m_defaultSettings.fontSizeToCellWidthCoef), this.m_redrawWholeCanvas = !0
    }, t.prototype.setFocus = function(t, e) {
        if (t) {
            var s = void 0 != t.y && t.y != this.m_focusPos.y;
            (s || e) && (this.m_focusPos.y = Math.max(t.y, 0), this.SyncVOffset());
            var i = void 0 != t.x && t.x != this.m_focusPos.x;
            (i || e) && (this.m_focusPos.x = Math.max(t.x, -this.m_defaultSettings.fixedColumnsCount), this.SyncHOffset()), (s || i) && this.m_defaultSettings.storage.Save("focus", this.m_focusPos)
        }
    }, t.prototype.setOffset = function(t, e) {
        if (t) {
            (t.x < 0 || t.y < 0) && (window.generic.statusLogging("Offset is invalid (x: " + t.x + ", " + t.y + ")"), t.x = Math.max(t.x, 0), t.y = Math.max(t.y, 0));
            var s = void 0 != t.y && t.y != this.m_containerOffset.y;
            (s || e) && (this.m_containerOffset.y = t.y, this.SyncVOffset());
            var i = void 0 != t.x && t.x != this.m_containerOffset.x;
            (i || e) && (this.m_containerOffset.x = t.x, this.SyncHOffset()), (s || i) && (this.m_redrawWholeCanvas = !0, this.m_defaultSettings.storage.Save("offset", this.m_containerOffset))
        }
    }, t.prototype.getFocusAndOffset = function() { return { focus: { x: 0, y: 0 }, offset: { x: 0, y: 0 } } }, t.prototype.resize = function(e, s) {
        t.superclass.resize.call(this, e, s), this.SetColsCount(this.GetVisibleColsCount());
        var i = s ? { focus: this.GetFocus(), offset: this.GetOffset() } : this.getFocusAndOffset();
        this.setFocus(i.focus, !0), this.setOffset(i.offset, !0), window.generic.globs.selectionOverlay.setBorders(this.GetLassoBorders())
    }, t.prototype.GetVisibleScrollableWidth = function() { return this.GetContentRect().width }, t.prototype.GetVisibleScrollableHeight = function() { return this.GetContentRect().height - this.m_containerSettings.cellHeight * this.m_defaultSettings.titleRows }, t.prototype.GetFullScrollableHeight = function() { return this.GetRowsCount() * this.m_containerSettings.cellHeight }, t.prototype.GetFullScrollableWidth = function() { return 0 }, t.prototype.GetVisibleRowsCount = function() { return parseInt(this.GetContentRect().height / this.m_containerSettings.cellHeight) - this.m_defaultSettings.titleRows }, t.prototype.GetDataOffsetX = function() { return this.m_containerOffset.x + this.m_defaultSettings.fixedColumnsCount }, t.prototype.hitTest = function(e, s) {
        var i = t.superclass.hitTest.call(this, e, s);
        if ((i || s.up) && this.m_defaultSettings.lassoEnabled) {
            var o = this.GetContentRect(),
                n = 0;
            if (s.down ? (window.generic.globs.selectionOverlay.init(e.x, e.y), n = window.generic.globs.selectionOverlay.getSize()) : s.move ? (window.generic.globs.selectionOverlay.expand(e.x, e.y), n = window.generic.globs.selectionOverlay.getSize()) : s.up && (window.generic.globs.selectionOverlay.expand(e.x, e.y), n = window.generic.globs.selectionOverlay.getSize(), window.generic.globs.selectionOverlay.Close(), n && (n.startX -= o.left, n.startY -= o.top, n.endX -= o.left, n.endY -= o.top), this.SelectRange(n, e, window.generic.globs.selectionOverlay.getHDirection(), window.generic.globs.selectionOverlay.getVDirection())), n) {
                var f = this.GetCellIndicesFromPoint({ x: n.endX, y: n.endY });
                if (f.row < this.GetRowsCount() && 0 <= f.col && f.col < this.m_containerSettings.colsCount && s.up)
                    if (this.m_focusPos.x == this.GetVisibleColsCount()) this.setFocus({ x: this.m_focusPos.x - 1, y: this.m_focusPos.y }), this.setOffset({ x: this.m_containerOffset.x + 1, y: this.m_containerOffset.y });
                    else { var r = { x: f.col - this.m_defaultSettings.fixedColumnsCount - this.m_containerOffset.x, y: f.row - this.m_containerOffset.y }; - this.m_defaultSettings.fixedColumnsCount <= r.x && r.x <= this.m_containerSettings.colsCount - this.m_defaultSettings.fixedColumnsCount - this.m_containerOffset.x && r.y >= 0 && this.setFocus(r) }
            }
        }
        return i
    }, t.prototype.onItemSelected = function(t) { $(this).triggerHandler(this.itemSelectedEvent, t) }, t
}(), window.uiTypes.canvas.CanvasGrid = function() {
    var t = function(e, s, i, o) { t.superclass.constructor.call(this, e, s, i, o), $.extend(this.m_containerSettings, { columnWidth: [] }) };
    window.generic.extend(t, window.uiTypes.canvas.CanvasContainerWindow), t.prototype.getFocusAndOffset = function() { return e(this.GetVisibleRowsCount(), this.GetVisibleColsCount(), this.GetRowsCount(), this.m_containerSettings.colsCount, this.m_containerOffset, this.m_focusPos) };
    var e = function(t, e, s, i, o, n) {
        var f = { focus: { x: 0, y: 0 }, offset: { x: 0, y: 0 } },
            r = o.y + n.y;
        window.generic.statusLogging("selectedRow: " + r);
        var l = Math.max(0, s - t);
        window.generic.statusLogging("maxRowOffset: " + l), l >= r ? o.y <= r && r <= o.y + t ? (f.offset.y = o.y, f.focus.y = n.y) : (f.offset.y = r, f.focus.y = 0) : (f.offset.y = l, f.focus.y = r - l), window.generic.statusLogging("result.offset.y: " + f.offset.y), window.generic.statusLogging("result.focus.y: " + f.focus.y);
        var c = o.x + n.x;
        if (window.generic.statusLogging("selectedCol: " + c), c >= 0) {
            var h = i - e;
            window.generic.statusLogging("maxColOffset: " + h), h >= c ? o.x <= c && c <= o.x + e ? (f.offset.x = o.x, f.focus.x = n.x) : (f.offset.x = c, f.focus.x = 0) : (f.offset.x = h, f.focus.x = c - h)
        } else f.offset.x = o.x, f.focus.x = n.x;
        return window.generic.statusLogging("result.offset.x: " + f.offset.x), window.generic.statusLogging("result.focus.x: " + f.focus.x), f
    };
    return t.prototype.GetFullScrollableWidth = function() { for (var t = 0, e = 0; e < this.m_containerSettings.columnWidth.length; e++) t += this.m_containerSettings.columnWidth[e]; return t }, t.prototype.GetMaxVisibleColsCount = function() { for (var t = 0, e = this.GetContentRect().width, s = 0; s < this.m_defaultSettings.fixedColumnsCount && s < this.m_containerSettings.columnWidth.length && (e -= this.m_containerSettings.columnWidth[s], !(0 > e)); s++) ++t; for (var s = this.m_defaultSettings.fixedColumnsCount + this.m_containerOffset.x; s < this.m_containerSettings.columnWidth.length && (e -= this.m_containerSettings.columnWidth[s], !(0 > e)); s++) ++t; for (; e >= this.m_containerSettings.cellWidth;) e -= this.m_containerSettings.cellWidth, ++t; return t }, t.prototype.GetVisibleColsCount = function() { var t = this.GetVisibleColsArray().length - this.m_defaultSettings.fixedColumnsCount; return 0 >= t && (t = this.GetMaxVisibleColsCount()), t }, t.prototype.GetVisibleColsArray = function() { for (var t = [], e = this.GetContentRect().width, s = 0; s < this.m_defaultSettings.fixedColumnsCount && s < this.m_containerSettings.columnWidth.length && (e -= this.m_containerSettings.columnWidth[s], !(0 > e)); s++) t.push(s); for (var s = this.m_defaultSettings.fixedColumnsCount + this.m_containerOffset.x; s < this.m_containerSettings.columnWidth.length && (e -= this.m_containerSettings.columnWidth[s], !(0 > e)); s++) t.push(s); return t }, t.prototype.GetDataOffsetY = function() { return this.m_containerOffset.y }, t.prototype.GetRowsCount = function() { return this.m_containerSettings.rowsCount }, t.prototype.SetColsCount = function(t) { this.m_containerSettings.colsCount != t && (this.m_containerSettings.colsCount = t, this.SyncHOffset()) }, t.prototype.GetCellIndicesFromPoint = function(t) {
        var e = { col: -1, row: -1 },
            s = this.GetContentRect();
        if (e.row = Math.ceil((t.y - s.top) / this.m_containerSettings.cellRenderHeight) - this.m_defaultSettings.titleRows - 1, e.row >= 0) e.row += this.m_containerOffset.y;
        else if (e.row >= Math.min(this.GetVisibleRowsCount(), this.GetRowsCount())) return !1;
        for (var i = this.GetVisibleColsArray(), o = t.x - s.left, n = 0; n < i.length; n++)
            if (o -= this.m_containerSettings.columnWidth[i[n]], 0 >= o) { e.col = i[n]; break }
        return o > 0 && this.m_containerOffset.x + i.length < this.m_containerSettings.colsCount && (e.col = i[i.length - 1] + 1), e
    }, t.prototype.SetRowsCount = function(t) { this.m_containerSettings.rowsCount != t && (this.m_containerSettings.rowsCount = t, this.SyncVOffset()) }, t
}(), window.uiTypes.canvas.CanvasBlockBox = function() {
    var t = function(e, s, i) {
        t.superclass.constructor.call(this, e, s, i), this.m_selectedItemIndex = 0, $.extend(this.m_containerSettings, { itemsCount: 0 }), this.Stretch = function() {
            var t = this.GetContentRect(),
                e = parseInt(t.width / this.m_containerSettings.cellWidth),
                s = t.width - e * this.m_containerSettings.cellWidth,
                i = this.m_containerSettings.cellWidth + s / e,
                o = parseInt(t.height / this.m_containerSettings.cellHeight),
                n = t.height - o * this.m_containerSettings.cellHeight,
                f = this.m_containerSettings.cellHeight + n / o,
                r = !1;
            this.m_containerSettings.cellRenderWidth != i && (this.m_containerSettings.cellRenderWidth = i, r = !0), this.m_containerSettings.cellRenderHeight != f && (this.m_containerSettings.cellRenderHeight = f, r = !0), r && window.generic.globs.selectionOverlay.setBorders(this.GetLassoBorders())
        }
    };
    window.generic.extend(t, window.uiTypes.canvas.CanvasContainerWindow), t.prototype.setFocus = function(e, s) { t.superclass.setFocus.call(this, e, s), e && (this.m_selectedItemIndex = (this.m_focusPos.y + this.m_containerOffset.y) * this.GetVisibleColsCount() + this.m_focusPos.x) }, t.prototype.setOffset = function(e, s) { t.superclass.setOffset.call(this, e, s), e && (this.m_selectedItemIndex = (this.m_focusPos.y + this.m_containerOffset.y) * this.GetVisibleColsCount() + this.m_focusPos.x) }, t.prototype.getFocusAndOffset = function() { return e(this.m_selectedItemIndex, this.GetVisibleRowsCount(), this.GetVisibleColsCount(), this.GetRowsCount(), this.GetVisibleColsCount(), this.m_containerOffset) };
    var e = function(t, e, s, i, o, n) {
        var f = { focus: { x: 0, y: 0 }, offset: { x: 0, y: 0 } };
        f.offset = n;
        var r = i * o - 1,
            l = e * s - 1,
            c = -1;
        if (l >= r) f.offset.x = 0, f.offset.y = 0, c = 0;
        else if (t > r - s) f.offset.x = 0, f.offset.y = i - e, c = r - e * s + 1;
        else {
            c = n.y * s;
            var h = (n.y + e) * s - 1;
            if (t >= c && h >= t) f.offset = n;
            else
                for (f.offset.y = 0, c = 0, h = e * s - 1, c > t && c >= 0 && alert("!AAA!"); t > h && r > h;) c += s, h += s, ++f.offset.y
        }
        return f.focus.y = Math.floor((t - c) / s), f.focus.x = t - (f.focus.y + f.offset.y) * s, window.generic.statusLogging("result.offset.x: " + f.offset.x), window.generic.statusLogging("result.focus.x: " + f.focus.x), window.generic.statusLogging("result.offset.y: " + f.offset.y), window.generic.statusLogging("result.focus.y: " + f.focus.y), f
    };
    return t.prototype.GetFullScrollableWidth = function() { return this.GetVisibleScrollableWidth() }, t.prototype.GetVisibleRowsCount = function() { return Math.min(Math.floor(this.GetContentRect().height / this.m_containerSettings.cellHeight), Math.ceil(this.GetItemsCount() / this.GetVisibleColsCount())) }, t.prototype.GetVisibleColsCount = function() { return parseInt(this.GetContentRect().width / this.m_containerSettings.cellWidth) - this.m_defaultSettings.fixedColumnsCount }, t.prototype.GetVisibleItemsCount = function() { return this.GetVisibleColsCount() * this.GetVisibleRowsCount() }, t.prototype.GetDataOffsetY = function() { return this.m_containerOffset.y * this.GetVisibleColsCount() }, t.prototype.GetRowsCount = function() { return Math.ceil(this.m_containerSettings.itemsCount / this.GetVisibleColsCount()) }, t.prototype.GetItemsCount = function() { return this.m_containerSettings.itemsCount }, t.prototype.SetItemsCount = function(t) { this.m_containerSettings.itemsCount = t, this.SyncVOffset() }, t.prototype.GetCellIndicesFromPoint = function(t) {
        var e = { col: -1, row: -1 },
            s = this.GetContentRect();
        e.row = Math.ceil((t.y - s.top) / this.m_containerSettings.cellRenderHeight) - this.m_defaultSettings.titleRows - 1 + this.m_containerOffset.y;
        for (var i = t.x - s.left, o = 0; o < this.GetVisibleColsCount(); o++)
            if (i -= this.m_containerSettings.cellRenderWidth, 0 >= i) { e.col = o; break }
        return e
    }, t
}();
defineNamespace(window, "uiTypes.canvas"),
    function(t) {
        var e = function() {
            var t = function(t) { this.m_defaultSettings = { fontSize: utility.getDefaultFontSize(), leading: .3, fontFamily: "Helvetica", margin: { top: .02, left: .02, bottom: .02, right: .02 }, padding: { top: .02, left: .02, bottom: 0, right: .02 }, bgColor: remoteColors.pools.cell.backgroundColor, textColor: remoteColors.pools.cell.color }, isDot2() ? (this.element = { x: 0, y: 0, width: 1, height: 1, noncontent: !0, bgColor: remoteColors.pools.cell.backgroundColor }, this.stateStripe = { enabled: !1, noncontent: !0, pointFrom: { x: .4, y: .1 }, pointTo: { x: .8, y: .1 }, width: .04, color: remoteColors.pools.cell.stateStripe.color }, this.border = { color: remoteColors.pools.cell.border.color, size: 1, focusColor: remoteColors.pools.cell.border.focusColor, focusSize: 4, roundedCornerRadius: 0 }) : (this.topHalf = { x: 0, y: 0, width: 1, height: .5, noncontent: !0, color: remoteColors.pools.cell.topHalf.backgroundColor }, this.bottomHalf = { x: 0, y: .5, width: 1, height: .5, noncontent: !0, gradient1: remoteColors.pools.cell.bottomHalf.backgroundColor1, gradient2: remoteColors.pools.cell.bottomHalf.backgroundColor2 }, this.stateStripe = { enabled: !1, noncontent: !0, pointFrom: { x: 0, y: .5 }, pointTo: { x: 1, y: .5 }, width: .04, color: remoteColors.pools.cell.stateStripe.color }, this.border = { color: remoteColors.pools.cell.border.color, size: 2, focusColor: remoteColors.pools.cell.border.focusColor, focusSize: 4, roundedCornerRadius: 8 }), this.index = { x: 0, y: 0, width: .5, height: .2, halign: "center", valign: "middle", defaultColor: remoteColors.pools.cell.index.color, referencedColor: remoteColors.pools.cell.index.referencedColor }, isDot2() && (this.index.halign = "left", this.index.x = .05, this.index.y = .02), this.title = { x: 0, y: .5, width: 1, height: .5, halign: "center", valign: "middle" }, isDot2() && (this.title.y = .18, this.title.height = .82), this.rects = { "default": {}, cell: {}, innerCell: {}, content: {} }, this.renderer = t };
            return t.prototype.calculateWidth = function(t) { var e = t.noncontent ? this.rects.innerCell : this.rects.content; return e.width * t.value }, t.prototype.calculateHeight = function(t) { var e = t.noncontent ? this.rects.innerCell : this.rects.content; return e.height * t.value }, t.prototype.calculateLocation = function(t, e) { if (!this.rects.content) throw generic.statusLogging("PoolCell.prototype.getLocation invalid member variable this.rects.content"), Error(); var o = e || (t.noncontent ? this.rects.innerCell : this.rects.content); return t.pointFrom && t.pointTo ? CanvasRenderer.calculateLocationLine(t, o) : t.center && t.radius ? CanvasRenderer.calculateLocationCircle(t, o) : CanvasRenderer.calculateLocationRect(t, o) }, t.prototype.drawTopHalf = function(t) { t.text && this.renderer.drawRect(this.calculateLocation(this.topHalf), 0, 0, this.topHalf.color, { topLeft: this.border.roundedCornerRadius, topRight: this.border.roundedCornerRadius, bottomLeft: 0, bottomRight: 0 }) }, t.prototype.drawBottomHalf = function(t) { t.text && this.renderer.drawRect(this.calculateLocation(this.bottomHalf), 0, 0, this.bottomHalf.gradient1, { topLeft: 0, topRight: 0, bottomLeft: this.border.roundedCornerRadius, bottomRight: this.border.roundedCornerRadius }) }, t.prototype.drawBackground = function() { isDot2() && this.renderer.drawRect(this.calculateLocation(this.element), 0, 0, this.element.bgColor, { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 }) }, t.prototype.drawName = function(t) {
                var e = t.text;
                if (void 0 !== e) {
                    var o = this.calculateLocation(this.title);
                    this.renderer.fillText(o, e, { family: this.m_defaultSettings.fontFamily, size: this.m_defaultSettings.fontSize }, t.color || this.m_defaultSettings.textColor, this.title.halign, this.title.valign)
                }
            }, t.prototype.drawBorder = function(t, e) {
                var o = e ? this.border.focusSize : this.border.size,
                    i = CanvasRenderer.transformRectToBorderRect(this.rects.cell, o);
                this.renderer.drawRect(i, e ? t.focusCellBorderColor || this.border.focusColor : t.borderColor || this.border.color, e ? this.border.focusSize : this.border.size, 0, e ? 0 : this.border.roundedCornerRadius)
            }, t.prototype.drawMiscRects = function(t) {
                if (this.miscRects && t.miscRects)
                    for (var e = 0; e < t.miscRects.length; e++)
                        if (!isDot2() || 3 == e) {
                            var o = t.miscRects[e];
                            if (o) {
                                var i = $.extend(!0, {}, this.miscRects.array[e]);
                                o.width && (i.pointTo.x = (i.pointTo.x - i.pointFrom.x) * o.width);
                                var r = this.calculateLocation(i),
                                    n = utilities.math.round(this.calculateHeight({ value: i.width }));
                                this.renderer.drawLine(r.pointFrom, r.pointTo, i.color, n)
                            }
                        }
            }, t.prototype.drawStateStripe = function(t) {
                if (this.stateStripe.enabled && t.text) {
                    var e = this.calculateLocation(this.stateStripe),
                        o = utilities.math.round(this.calculateHeight({ value: this.stateStripe.width, noncontent: this.stateStripe.noncontent }));
                    this.renderer.drawLine(e.pointFrom, e.pointTo, t.stateStripeColor || this.stateStripe.color, o)
                }
            }, t.prototype.drawIndex = function(t) {
                var e = t.index;
                if (void 0 === e) return void window.generic.statusLogging("index is undefined!!!");
                var o = this.calculateLocation(this.index),
                    i = t.isReferenced ? this.index.referencedColor : this.index.defaultColor;
                this.renderer.fillText(o, e, { family: this.m_defaultSettings.fontFamily }, i, this.index.halign, this.index.valign)
            }, t.prototype.draw = function(t, e) {
                t.data;
                this.rects["default"] = { x: utilities.math.round(t.x), y: utilities.math.round(t.y), width: utilities.math.round(t.width), height: utilities.math.round(t.height) }, this.rects.cell = CanvasRenderer.applyOffset(this.rects["default"], this.m_defaultSettings.margin);
                var o = utilities.math.getMinMax(this.border.focusSize, this.border.size);
                this.rects.innerCell = CanvasRenderer.getContentRect(this.rects.cell, o.min), this.rects.content = CanvasRenderer.getContentRect(this.rects.cell, o.max), this.rects.content = CanvasRenderer.applyOffset(this.rects.content, this.m_defaultSettings.padding), isDot2() ? this.drawBackground() : (this.drawTopHalf(t.data), this.drawBottomHalf(t.data)), isDot2() ? (this.drawIndex(t.data), this.customDraw({ pixelPerEm: t.pixelPerEm, data: t.data }), this.drawMiscRects(t.data), this.drawBorder(t.data, e), this.drawName(t.data), this.drawStateStripe(t.data)) : (this.drawIndex(t.data), this.drawName(t.data), this.drawStateStripe(t.data), this.customDraw({ pixelPerEm: t.pixelPerEm, data: t.data }), this.drawMiscRects(t.data), this.drawBorder(t.data, e))
            }, t.prototype.customDraw = function(t) {}, t
        }();
        t.PoolCell = e
    }(window.uiTypes.canvas);
window.uiTypes.canvas.PoolWindow = function() {
    var t = function(e, i, s, o) { t.superclass.constructor.call(this, e, i, s), $.extend(this.m_defaultSettings, { fontSizeToCellHeightCoef: 4.5, fontSizeToCellWidthCoef: 4.5 * 1.2, cellBackgroundColor: remoteColors.pools.cell.backgroundColor, lassoEnabled: !1, hScrollVisible: !1, vScrollVisible: !0, fixedColumnsCount: 0, titleRows: 0 }), this.m_selectedItem = -1, this.cellObject = new o(i) };
    return window.generic.extend(t, window.uiTypes.canvas.CanvasBlockBox), t.prototype.init = function() {
        t.superclass.init.call(this), this.SetColsCount(this.GetVisibleColsCount());
        var e = this.m_defaultSettings.storage.Load("offset", { x: 0, y: 0 }),
            i = this.m_defaultSettings.storage.Load("focus", { x: 0, y: 0 });
        this.setOffset(e), this.setFocus(i)
    }, t.prototype.refresh = function(e) { t.superclass.refresh.call(this, e), e && (this.Stretch(), this.m_selectedItem >= 0 && (this.onItemSelected({ id: this.m_selectedItem }), this.m_selectedItem = -1), this.draw(e), this.drawScrollBars()) }, t.prototype.draw = function(t) {
        for (var e = t.data, i = (this.GetItemsCount(), this.GetVisibleColsCount()), s = i * this.GetVisibleRowsCount(), o = 0, n = this.GetFocus(), l = 0, r = 0, c = 0; s > c; c++) {
            var a = { x: this.m_rect.left + r * this.m_containerSettings.cellRenderWidth, y: this.m_rect.top + l * this.m_containerSettings.cellRenderHeight },
                h = e ? e[c] || {} : {};
            if (h.i || (h.i = c + 1 + this.m_containerOffset.y * i), t.maxCnt && h.i > t.maxCnt) break;
            a.data = this.getItem(t, h), a.width = this.m_containerSettings.cellRenderWidth, a.height = this.m_containerSettings.cellRenderHeight, a.pixelPerEm = this.m_defaultSettings.pixelPerEm, r == n.x && l == n.y ? (o = a, o.data.focusCellBorderColor = this.m_defaultSettings.focusCellBorderColor) : this.cellObject.draw(a), ++r, r >= i && (r = 0, ++l)
        }
        o && this.cellObject.draw(o, !0)
    }, t.prototype.SetDataSource = function(t) {
        var e = t.cnt;
        !t.maxCnt && isDot2() && (t.maxCnt = 999);
        var i = this.GetVisibleColsCount();
        if (i) {
            var s = (i - e % i) % i;
            this.m_defaultSettings.minEmptyItems > s && (s += Math.ceil((this.m_defaultSettings.minEmptyItems - s) / i) * i), e += s, t.maxCnt && (e = Math.min(t.maxCnt, e))
        }
        this.SetItemsCount(e);
        var o = this.GetRowsCount();
        if (this.m_containerOffset.y > o) {
            var n = this.GetVisibleRowsCount();
            this.m_containerOffset.y = o - n
        }
        return this.refresh(t), !0
    }, t.prototype.hitTest = function(t, e) {
        var i = window.uiTypes.canvas.CanvasContainerWindow.superclass.hitTest.call(this, t, e);
        if (i && e.down && e.down) {
            var s = this.GetCellIndicesFromPoint(t);
            this.setFocus({ x: s.col - this.m_defaultSettings.fixedColumnsCount - this.m_containerOffset.x, y: s.row - this.m_containerOffset.y }), this.m_selectedItem = s.row * this.GetVisibleColsCount() + s.col + 1
        }
    }, t.prototype.getItem = function(t, e) { return { text: e.t, index: e.i, borderColor: e.bdC || t.bdC, color: e.c || t.c } }, t.prototype.selectItem = utilities.emptyFunction, t.prototype.GetVisibleRowsCount = function() { return Math.floor(this.GetContentRect().height / this.m_containerSettings.cellHeight) }, t.prototype.GetRowsCount = function() { return Math.max(this.GetVisibleRowsCount(), t.superclass.GetRowsCount.call(this)) }, t.prototype.close = function() { this.cellObject && (delete this.cellObject, this.cellObject = null), t.superclass.close.call(this) }, t
}();
window.uiTypes.pages.Command1 = function() { var m = function(n, a, o) { m.superclass.constructor.call(this, n, a, o), this.requirements = { showDimmerWheel: !0 }, this.$buttonsContainer = $.createItem({ "class": "button-container" }), this.pageCommands = isDot2() ? [{ command: commands.Commands.fixtureGroupPresetSwitcher(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.oops(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.esc(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._7(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._8(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._9(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.plus(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._4(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._5(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._6(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.thru(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._1(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._2(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._3(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.minus(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._0(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.dot(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._if(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.at(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.storeUpdateSwitcher(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.execCueSwitch(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.high(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.please(), uiElement: commands.ui.UILabel() }] : [{ command: commands.Commands.channelFixtureSwitcher(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.oops(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.esc(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._7(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._8(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._9(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.plus(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._4(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._5(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._6(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.thru(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._1(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._2(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._3(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.minus(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._0(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.dot(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._if(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.at(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.full(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.solo(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.high(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.please(), uiElement: commands.ui.UILabel() }], this.pageCommands.forEach(commands.ui.initCommandUIElementPair), this.commandItems = this.pageCommands.map(commands.ui.fetchUIElementItems), this.$page.append(this.$buttonsContainer) }; return window.generic.extend(m, window.uiTypes.pages.Page), m.prototype.Show = function() { m.superclass.Show.call(this), ui.Layout.Place(this.$buttonsContainer, this.commandItems, { grid: { columnsCount: 4 } }), generic.globs.serverCommandManager.addCommands(this.id, this.pageCommands) }, m.prototype.Close = function() { m.superclass.Close.call(this), generic.globs.serverCommandManager.removeCommands(this.id), commands.ui.disposeUIElements(this.pageCommands) }, m.id = "command1", m.title = isDot2() ? "Command" : "CMD 1", m.content = '<div id="' + m.id + '"></div>', m }();
window.uiTypes.pages.Command2 = function() { var m = function(n, t, o) { m.superclass.constructor.call(this, n, t, o), this.requirements = { showDimmerWheel: !0 }, this.$buttonsContainer = $.createItem({ "class": "button-container" }), this.pageCommands = [{ command: commands.Commands.empty(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.oops(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.esc(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.on(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.off(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.select(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._empty(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.assign(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.copy(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._delete(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.time(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands["goto"](), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.sequence(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.cue(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.exec(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.macro(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.page(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.group(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.preset(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.ma(), uiElement: commands.ui.UIStateImageButton() }, { command: commands.Commands.edit(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.update(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.store(), uiElement: commands.ui.UIMultiStateButton() }], this.pageCommands.forEach(commands.ui.initCommandUIElementPair), this.commandItems = this.pageCommands.map(commands.ui.fetchUIElementItems), this.$page.append(this.$buttonsContainer) }; return window.generic.extend(m, window.uiTypes.pages.Page), m.prototype.Show = function() { m.superclass.Show.call(this), ui.Layout.Place(this.$buttonsContainer, this.commandItems, { grid: { columnsCount: 4 } }), generic.globs.serverCommandManager.addCommands(this.id, this.pageCommands) }, m.prototype.Close = function() { m.superclass.Close.call(this), generic.globs.serverCommandManager.removeCommands(this.id), commands.ui.disposeUIElements(this.pageCommands) }, m.id = "command2", m.title = "CMD 2", m.content = '<div id="' + m.id + '"></div>', m.maButtonState = !1, m }();
window.uiTypes.pages.FixtureSheet = function() {
    var t = window.uiTypes.pages.Page,
        e = function(t, i, o) { e.superclass.constructor.call(this, $.createItem({ "class": "canvas-container", html: "<div><canvas>Sorry, your browser is not supported.</canvas></div>" }), t, i, o), $.extend(this.m_defaultSettings, {}), this.m_commandLine = t, this.m_commandExecutor = i, this.itemSelected_context = this.ItemSelected.bind(this) };
    return window.generic.extend(e, window.uiTypes.pages.CanvasPage), e.prototype.CreateWindow = function() { this.m_ma2window = new window.uiTypes.canvas.FixtureSheetWindow(this.canvas, window.CanvasRenderer(this.canvas[0].getContext("2d")), { top: 0, left: 0, width: this.canvas[0].width, height: this.canvas[0].height }), this.m_ma2window.init(), $(this.m_ma2window).bind(this.m_ma2window.itemSelectedEvent, this.itemSelected_context), DataHandlerManager.Register({ name: this.id + "DataHandler", handler: this.m_ma2window.SetDataSource.bind(this.m_ma2window) }), $(this).triggerHandler(t.events.pageButtonsChanged, { buttons: this.CreatePageButtons() }) }, e.prototype.CreatePageButtons = function() {
        if (!this.pageButtons) {
            var t = this.m_ma2window.GetCommandState.bind(this.m_ma2window),
                e = this.m_ma2window.SetCommandState.bind(this.m_ma2window),
                i = function(t, e) { commands.defaultCommandHandler(t, e), this.m_ma2window.ResetFocusAndOffset() }.bind(this);
            this.pageButtons = isDot2() ? [{ command: commands.StateCommand(commands.CommandType.presetValue, commands.ui.defaultCommandExecute, t, e), uiElement: commands.ui.UIStateImageButton(), icon: "images/btncontext.png" }, { command: commands.Commands.high(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }] : [{ command: commands.StateCommand(commands.CommandType.presetValue, commands.ui.defaultCommandExecute, t, e), uiElement: commands.ui.UIDropDown() }, { command: commands.StateCommand(commands.CommandType.progOnly, i), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.StateCommand(commands.CommandType.featureSort, commands.ui.defaultCommandExecute, t, e), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.StateCommand(commands.CommandType.fixtureSort, commands.ui.defaultCommandExecute, t, e), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.high(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }], this.pageButtons.forEach(commands.ui.initCommandUIElementPair), generic.globs.serverCommandManager.addCommands(this.id, this.pageButtons)
        }
        return this.pageButtons
    }, e.prototype.GetPayloadObject = function() { var t = e.superclass.GetPayloadObject.call(this); return t.requestType = Server.requestTypes.fixtureSheet, t.cntCols = this.m_ma2window.GetVisibleColsCount() + 1, t.cntRows = this.m_ma2window.GetVisibleRowsCount(), t.offCol = this.m_ma2window.GetDataOffsetX(), t.offRow = this.m_ma2window.GetDataOffsetY(), t.layerMode = this.m_ma2window.GetCommandState(commands.CommandType.presetValue).value, t.sortFea = this.m_ma2window.GetCommandState(commands.CommandType.featureSort).value ? "1" : "0", t.sortFix = this.m_ma2window.GetCommandState(commands.CommandType.fixtureSort).value ? "1" : "0", t }, e.prototype.ItemSelected = function(t, e) {
        var i = e.ids instanceof Array ? e.ids.join("+") : e.ids,
            o = e.attribute ? "attribute" : "fixture";
        this.m_commandExecutor.send({ command: o + " " + i })
    }, e.prototype.Close = function() { $(this.m_ma2window).unbind(this.m_ma2window.itemSelectedEvent, this.itemSelected_context), e.superclass.Close.call(this) }, e.id = "fixtureSheet", e.title = "Fixture Sheet", e.content = '<div id="' + e.id + '"></div>', e
}(), window.uiTypes.canvas.FixtureSheetWindow = function() {
    var t = function(e, i, o) {
        t.superclass.constructor.call(this, e, i, o), $.extend(this.m_defaultSettings, { fontSizeToCellHeightCoef: 5 / 3, fontSizeToCellWidthCoef: 20 / 3, headerCellBackgroundColor: remoteColors.fixtureSheet.headerCellBackgroundColor, cellBackgroundColor: remoteColors.fixtureSheet.cellBackgroundColor, cellBackgroundColor2: remoteColors.fixtureSheet.cellBackgroundColor2, headerSelectedAttributeColor: remoteColors.fixtureSheet.headerSelectedAttributeColor, headerSelectedPresetColor: remoteColors.fixtureSheet.headerSelectedPresetColor, hScrollVisible: !0, vScrollVisible: !0, fixedColumnsCount: 2, titleRows: 1, storage: Storage.AddSection("FixtureSheet") }), isDot2() && (this.m_defaultSettings.cellStrokeStyle = remoteColors.fixtureSheet.borderColor, this.m_defaultSettings.focusCellBorderColor = remoteColors.fixtureSheet.focusBorderColor), this.m_selectedRows = [], this.m_selectedHeaderColumn = -1, this.init = function() {
            t.superclass.init.call(this);
            var e = this.m_defaultSettings.storage.Load("offset", { x: 0, y: 0 }),
                i = this.m_defaultSettings.storage.Load("focus", { x: 0, y: 0 });
            this.setOffset(e), this.setFocus(i), this.m_redrawWholeCanvas = !0
        }, this.SetDataSource = function(t) {
            if (!t || t.responseType != Server.requestTypes.fixtureSheet) return !1;
            var e = t,
                i = e.cntCols,
                o = e.cntRows;
            if (void 0 === i || void 0 === o) return !1;
            this.SetColsCount(i), this.SetRowsCount(o);
            for (var s = Math.min(i - 1, this.m_containerOffset.x + this.m_focusPos.x), n = Math.min(o - 1, this.m_containerOffset.y + this.m_focusPos.y), a = this.GetVisibleRowsCount(), r = this.GetMaxVisibleColsCount(), m = { x: Math.min(Math.min(i - 1, r - 1) - this.m_defaultSettings.fixedColumnsCount, this.m_focusPos.x), y: Math.min(Math.min(o - 1, a - 1), this.m_focusPos.y) }, l = { x: s - m.x, y: n - m.y }; a + l.y > o && l.y > 0;) --l.y, m.y < o - 1 && ++m.y;
            for (; r + l.x > i && l.x > 0;) --l.x, m.x < i - 1 && ++m.x;
            this.setFocus(m, !0), this.setOffset(l, !0);
            for (var d = [], h = 0; h < e.cntCols; h++) d[h] = this.m_containerSettings.cellWidth;
            return d.length > 0 && (d[0] = this.m_containerSettings.cellWidth / 2), this.m_containerSettings.columnWidth = d, this.m_redrawWholeCanvas = !0, this.refresh(e), !0
        }, this.refresh = function(e) {
            if (t.superclass.refresh.call(this), e) {
                if (this.Stretch(), this.m_selectedRows.length > 0) {
                    for (var i = [], o = 0; o < this.m_selectedRows.length; ++o) {
                        var s = this.m_selectedRows[o];
                        if (s >= 0 && s < e.data.length) {
                            var n = e.data[s][0][0],
                                a = n.split(":");
                            a[0] && i.push(a[0])
                        }
                    }
                    this.onItemSelected({ ids: i }), this.m_selectedRows.length = 0
                }
                if (0 <= this.m_selectedHeaderColumn && this.m_selectedHeaderColumn - this.m_containerOffset.x < e.cols.length) {
                    var r = e.cols[this.m_selectedHeaderColumn - this.m_containerOffset.x].id;
                    this.onItemSelected({ ids: r, attribute: !0 }), this.m_selectedHeaderColumn = -1
                }
                this.draw(e), this.drawScrollBars()
            }
        }, this.draw = function(t) {
            var e = t.cols,
                i = Math.min(this.GetVisibleColsCount() + 1 + this.m_defaultSettings.fixedColumnsCount, e.length);
            if (this.m_redrawWholeCanvas) {
                for (var o = 0, s = 0; i > s; s++) {
                    var n = this.getColumnWidth(s),
                        a = e[s] ? e[s].n : "",
                        r = this.m_defaultSettings.textColor;
                    e[s].sAtt ? r = this.m_defaultSettings.headerSelectedAttributeColor : e[s].sPre && (r = this.m_defaultSettings.headerSelectedPresetColor), this.drawCell(isDot2() ? { offsetX: o, row: 0, cellWidth: n, text: a, textColor: r, cellBackgroundColor: this.m_defaultSettings.headerCellBackgroundColor } : { offsetX: o, row: 0, cellWidth: n, text: a, textColor: r, cellBackgroundColor: this.m_defaultSettings.cellBackgroundColor }), o += n
                }
                this.m_redrawWholeCanvas = !1
            }
            for (var m = t.data, l = m.length, d = 0, o = 0, h = 0; l > h; h++) {
                var c = m[h],
                    u = i;
                o = 0;
                for (var s = 0; u > s; s++) {
                    var f, g = c[s],
                        n = this.getColumnWidth(s);
                    f = isDot2() ? h % 2 == 0 ? this.m_defaultSettings.cellBackgroundColor : this.m_defaultSettings.cellBackgroundColor2 : this.m_defaultSettings.cellBackgroundColor;
                    var r = this.m_defaultSettings.textColor,
                        a = "";
                    g && (g[0] && (a = g[0], isDot2() && 0 == s && (a = a.substr(0, a.length - 1))), g[1] && (r = g[1]), g[2] && (f = g[2]));
                    var C = { offsetX: o, col: s, row: h + 1, cellWidth: n, text: a, textColor: r, cellBackgroundColor: f };
                    s == this.m_focusPos.x + this.m_defaultSettings.fixedColumnsCount && h == this.m_focusPos.y ? d = C : this.drawCell(C), o += n
                }
            }
            d && (d.borderColor = this.m_defaultSettings.focusCellBorderColor, this.drawCell(d))
        }, this.getColumnWidth = function(t) { return t < this.m_defaultSettings.fixedColumnsCount ? 0 > t || this.m_containerSettings.columnWidth.length <= t ? (window.generic.statusLogging("getColumnWidth invalid argument " + t), 0) : this.m_containerSettings.columnWidth[t] : t + this.m_containerOffset.x < 0 || this.m_containerSettings.columnWidth.length <= t + this.m_containerOffset.x ? (window.generic.statusLogging("getColumnWidth invalid argument " + t), 0) : this.m_containerSettings.columnWidth[t + this.m_containerOffset.x] }, this.drawCell = function(t) {
            var e = !t.text,
                i = this.GetContentRect(),
                o = i.left + t.offsetX,
                s = i.top + t.row * this.m_containerSettings.cellRenderHeight,
                n = { x: o, y: s, width: t.cellWidth, height: this.m_containerSettings.cellRenderHeight };
            isDot2() ? this.renderer.drawRect(n, t.borderColor || this.m_defaultSettings.cellStrokeStyle, this.m_defaultSettings.frameSize, t.cellBackgroundColor) : this.renderer.drawRect(n, t.borderColor || this.m_defaultSettings.cellStrokeStyle, this.m_defaultSettings.frameSize, e ? 0 : t.cellBackgroundColor);
            var a = { x: n.x + this.m_defaultSettings.frameSize, y: n.y + this.m_defaultSettings.frameSize, width: n.width - 2 * this.m_defaultSettings.frameSize, height: n.height - 2 * this.m_defaultSettings.frameSize },
                r = "center";
            isDot2() ? 1 == t.col && (r = "left") : (0 == t.col || 1 == t.col) && (r = "left"), this.renderer.fillText(a, t.text, { family: this.m_defaultSettings.fontFamily, size: this.m_defaultSettings.cellFontSize }, t.textColor, r, "middle", !0)
        }, this.Stretch = function() {
            var t = this.GetContentRect(),
                e = parseInt(t.height / this.m_containerSettings.cellHeight),
                i = t.height - e * this.m_containerSettings.cellHeight;
            this.m_containerSettings.cellRenderHeight = this.m_containerSettings.cellHeight + i / e
        }
    };
    return window.generic.extend(t, window.uiTypes.canvas.CanvasGrid), t.prototype.SelectRange = function(t, e, i, o) {
        if (t) {
            if (this.m_containerSettings.cellRenderHeight <= 0) return;
            var s = Math.ceil(t.startY / this.m_containerSettings.cellRenderHeight) - 2,
                n = Math.ceil(t.endY / this.m_containerSettings.cellRenderHeight) - 2;
            if (s > n) {
                var a = s;
                s = n, n = a
            }
            if (this.m_selectedRows.length = 0, o == window.uiTypes.VerticalDirection.BottomToTop)
                for (var r = n; r >= s; --r) r >= 0 && r < this.GetRowsCount() && this.m_selectedRows.push(r);
            else
                for (var r = s; n >= r; ++r) r >= 0 && r < this.GetRowsCount() && this.m_selectedRows.push(r)
        }
        var m = this.GetCellIndicesFromPoint(e);
        this.m_selectedHeaderColumn = -1 == m.row && m.col >= 0 ? m.col : -1
    }, t
}();
window.uiTypes.pages.ChannelSheet = function() {
        var e = window.uiTypes.pages.Page,
            t = function(e, i) { t.superclass.constructor.call(this, $.createItem({ "class": "canvas-container", html: "<div><canvas>Sorry, your browser is not supported.</canvas></div>" })), this.requirements = { showDimmerWheel: !0 }, this.m_commandLine = e, this.m_commandExecutor = i, this.itemSelected_context = this.ItemSelected.bind(this), this.notificationHandler_context = this.notificationHandler.bind(this), this.m_notifyCommands = {}, this.m_actualNotifications = {} };
        return window.generic.extend(t, window.uiTypes.pages.CanvasPage), t.prototype.CreateWindow = function() {
            this.m_ma2window = new window.uiTypes.canvas.ChannelSheetWindow(this.canvas, uiTypes.canvas.ChannelSheetCell, CanvasRenderer(this.canvas[0].getContext("2d")), { top: 0, left: 0, width: this.canvas[0].width, height: this.canvas[0].height }), this.m_ma2window.init(), $(this.m_ma2window).bind(this.m_ma2window.itemSelectedEvent, this.itemSelected_context), DataHandlerManager.Register({ name: this.id + "DataHandler", handler: this.m_ma2window.SetDataSource.bind(this.m_ma2window) }), this.CreatePageButtons();
            for (var t = 0; t < this.pageButtons.length; t++) this.pageButtons[t].command.on(this.notificationHandler_context, { id: this.pageButtons[t].command.getType().id }), this.m_actualNotifications[this.pageButtons[t].command.getType().id] = void 0, this.pageButtons[t].command.init();
            $(this).triggerHandler(e.events.pageButtonsChanged, { buttons: this.pageButtons })
        }, t.prototype.RefreshTimerCallback = function() { t.superclass.RefreshTimerCallback.call(this), this.m_ma2window && void 0 !== this.m_actualNotifications[commands.CommandType.hideName.id] && (this.m_ma2window.hideNamesChanged(), this.m_actualNotifications[commands.CommandType.hideName.id] = void 0) }, t.prototype.GetPayloadObject = function() { var e = new Object; return e.requestType = Server.requestTypes.channelSheet, e.cntCols = 3, e.cntRows = this.m_ma2window.GetVisibleItemsCount(), e.offRow = this.m_ma2window.GetDataOffsetY(), e.offCol = 0, e.layerMode = this.m_ma2window.GetCommandState(commands.CommandType.presetValue).value, e.sortCh = this.m_ma2window.GetCommandState(commands.CommandType.channelSort).value ? "1" : "0", e }, t.prototype.notificationHandler = function(e, t) { t && void 0 !== t.state && e.data && void 0 !== e.data.id && (this.m_actualNotifications[e.data.id] = t.state) }, t.prototype.CreatePageButtons = function() {
            if (!this.pageButtons) {
                var e = this.m_ma2window.GetCommandState.bind(this.m_ma2window),
                    t = this.m_ma2window.SetCommandState.bind(this.m_ma2window),
                    i = function(e, t) { commands.defaultCommandHandler(e, t), this.m_ma2window.ResetFocusAndOffset() }.bind(this);
                this.pageButtons = [{ command: commands.StateCommand(commands.CommandType.presetValue, commands.ui.defaultCommandExecute, e, t), uiElement: commands.ui.UIDropDown() }, { command: commands.StateCommand(commands.CommandType.progOnly, i), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.StateCommand(commands.CommandType.channelSort, commands.ui.defaultCommandExecute, e, t), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.StateCommand(commands.CommandType.hideName, commands.ui.defaultCommandExecute, e, t), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.high(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }], this.pageButtons.forEach(commands.ui.initCommandUIElementPair), generic.globs.serverCommandManager.addCommands(this.id, this.pageButtons)
            }
            return this.pageButtons
        }, t.prototype.Init = function() { t.superclass.Init.call(this), this.$page.append(this.canvasContainer) }, t.prototype.ItemSelected = function(e, t) {
            var i = t.ids instanceof Array ? t.ids.join("+") : t.ids;
            this.m_commandExecutor.send({ command: "channel " + i })
        }, t.prototype.Close = function() { $(this.m_ma2window).unbind(this.m_ma2window.itemSelectedEvent, this.itemSelected_context), t.superclass.Close.call(this) }, t.id = "channelSheet", t.title = "Channel Sheet", t.content = '<div id="' + t.id + '"></div>', t
    }(),
    function(e) {
        var t = function(e, i, n, a) { t.superclass.constructor.call(this, e, n, a), this.config = { hideName: { "true": { fontSizeToCellHeightCoef: 3, fontSizeToCellWidthCoef: 4 }, "false": { fontSizeToCellHeightCoef: 4, fontSizeToCellWidthCoef: 4 } } }, $.extend(this.m_defaultSettings, { hScrollVisible: !1, vScrollVisible: !0, fixedColumnsCount: 0, titleRows: 0, storage: Storage.AddSection("ChannelSheet") }), this.cellBuilder = new uiTypes.canvas.CellBuilder(i.model), this.cell = new i(this.renderer), this.m_selectedItems = [] };
        window.generic.extend(t, window.uiTypes.canvas.CanvasBlockBox), t.prototype.init = function() {
            $.extend(this.m_defaultSettings, this.config.hideName[this.GetCommandState(commands.CommandType.hideName).value]), t.superclass.init.call(this), this.SetColsCount(this.GetVisibleColsCount());
            var e = this.m_defaultSettings.storage.Load("offset", { x: 0, y: 0 }),
                i = this.m_defaultSettings.storage.Load("focus", { x: 0, y: 0 });
            this.setOffset(e), this.setFocus(i)
        }, t.prototype.hideNamesChanged = function() {
            var e = this.GetCommandState(commands.CommandType.hideName).value;
            $.extend(this.m_defaultSettings, this.config.hideName[e]), this.setFontSize(), e ? this.cellBuilder.hide("name") : this.cellBuilder.show("name")
        }, t.prototype.SetDataSource = function(e) { if (!e || e.responseType != Server.requestTypes.channelSheet) return !1; var t = e; return this.SetItemsCount(t.cntRows), this.refresh(t), !0 }, t.prototype.refresh = function(e) {
            if (t.superclass.refresh.call(this), e && e.data) {
                if (this.Stretch(), this.m_selectedItems.length > 0) {
                    for (var i = [], n = 0; n < this.m_selectedItems.length; ++n) {
                        var a = this.m_selectedItems[n];
                        if (a >= 0 && a < e.data.length) {
                            var s = e.data[a][0][0],
                                o = s.split(":");
                            1 == o.length ? i.push(o) : o[1] && i.push(o[1])
                        }
                    }
                    this.onItemSelected({ ids: i }), this.m_selectedItems.length = 0
                }
                this.draw(e.data), this.drawScrollBars()
            }
        }, t.prototype.draw = function(e) { for (var t = this.GetVisibleColsCount(), i = this.GetFocus(), n = 0, a = 0, s = this.cellBuilder.build(), o = { x: 0, y: 0, width: this.m_containerSettings.cellRenderWidth, height: this.m_containerSettings.cellRenderHeight, focused: !1 }, l = e.length + (this.GetVisibleColsCount() - e.length % this.GetVisibleColsCount()) % this.GetVisibleColsCount(), d = 0; l > d; d++) o.x = a * this.m_containerSettings.cellRenderWidth, o.y = n * this.m_containerSettings.cellRenderHeight, o.focused = a == i.x && n == i.y, o.data = this.getCellData(e[d]), this.cell.draw(o, s), ++a, a >= t && (a = 0, ++n) }, t.prototype.getCellData = function(e) { if (!e) return {}; var t = { index: { text: e[0][0], color: e[0][1], background: e[0][2] }, name: { text: e[1][0], color: e[1][1], background: e[1][2] } }; return e[2] && (t.value = { text: e[2][0], color: e[2][1], background: e[2][2] }), t }, t.prototype.SelectRange = function(e, t, i, n) {
            if (e) {
                var a = { x: Math.ceil(e.startX / this.m_containerSettings.cellRenderWidth) - 1, y: Math.ceil(e.startY / this.m_containerSettings.cellRenderHeight) - 1 - this.m_defaultSettings.titleRows },
                    s = { x: Math.ceil(e.endX / this.m_containerSettings.cellRenderWidth) - 1, y: Math.ceil(e.endY / this.m_containerSettings.cellRenderHeight) - 1 - this.m_defaultSettings.titleRows };
                if (a.y > s.y || a.y == s.y && a.x > s.x) {
                    var o = a;
                    a = s, s = o
                }
                this.m_selectedItems.length = 0;
                var l = a.y * this.GetVisibleColsCount() + a.x,
                    d = s.y * this.GetVisibleColsCount() + s.x;
                if (n == window.uiTypes.VerticalDirection.BottomToTop || i == window.uiTypes.HorizontalDirection.RightToLeft)
                    for (var m = d; m >= l; --m) this.m_selectedItems.push(m);
                else
                    for (var m = l; d >= m; m++) this.m_selectedItems.push(m)
            }
        }, t.prototype.Close = function() { this.cellBuilder.dispose(), t.superclass.Close.call(this) }, e.ChannelSheetWindow = t
    }(window.uiTypes.canvas),
    function(e) {
        var t = function(e) { this.m_renderer = e, this.m_defaultSettings = { fontSize: 1, leading: .3, fontFamily: "Helvetica", bgColor: remoteColors.channelSheet.cell.backgroundColor, textColor: remoteColors.channelSheet.cell.color }, this.m_elements = { border: { color: remoteColors.channelSheet.cell.border.color, size: 2, focusColor: remoteColors.channelSheet.cell.border.focusedColor, focusSize: 4, roundedCornerRadius: 8 }, index: { halign: "center", valign: "middle" }, name: { halign: "center", valign: "middle" }, value: { halign: "center", valign: "middle" } }, this.m_rects = { "default": {}, cell: {}, innerCell: {}, content: {} } };
        t.model = '<div class="cs-cell">            <div class="cs-top"> <div data-role="color" class="cs-color hidden"></div> <div data-role="index" class="cs-index"></div> </div>            <div data-role="name" class="cs-middle cs-name">            </div>            <div class="cs-bottom">                <div data-role="dimmer" class="cs-bottom-left cs-dimmer hidden"></div>                <div class="cs-bottom-right"> <div data-role="bar" class="cs-bar"></div> <div data-role="value" class="cs-value"></div> </div>            </div>        </div>', t.prototype.calculateLocation = function(e, t) { if (!this.m_rects.content) throw generic.statusLogging("ChannelSheetCell.prototype.getLocation invalid member variable this.m_rects.content"), Error(); var i = t || (e.noncontent ? this.m_rects.innerCell : this.m_rects.content); return e.pointFrom && e.pointTo ? CanvasRenderer.calculateLocationLine(e, i) : e.center && e.radius ? CanvasRenderer.calculateLocationCircle(e, i) : CanvasRenderer.calculateLocationRect(e, i) }, t.prototype.drawBackground = function() { this.m_renderer.drawRect(this.m_rects["default"], 0, 0, this.m_defaultSettings.bgColor) }, t.prototype.drawIndex = function(e, t) {
            if (t.index && e.index) {
                var i = this.calculateLocation($.extend(this.m_elements.index, t.index));
                this.m_renderer.fillText(i, e.index.text, { family: this.m_defaultSettings.fontFamily }, e.index.color || this.m_defaultSettings.textColor, this.m_elements.index.halign, this.m_elements.index.valign)
            }
        }, t.prototype.drawName = function(e, t) {
            if (t.name && e.name) {
                var i = this.calculateLocation($.extend(this.m_elements.name, t.name));
                this.m_renderer.fillText(i, e.name.text, { family: this.m_defaultSettings.fontFamily, size: this.m_defaultSettings.cellFontSize }, e.name.color || this.m_defaultSettings.textColor, this.m_elements.name.halign, this.m_elements.name.valign)
            }
        }, t.prototype.drawValue = function(e, t) {
            if (t.value && e.value) {
                var i = this.calculateLocation($.extend(this.m_elements.value, t.value)),
                    n = this.calculateLocation(t.value, this.m_rects.innerCell);
                e.value.background && this.m_renderer.drawRect(n, null, 0, e.value.background), this.m_renderer.fillText(i, e.value.text, { family: this.m_defaultSettings.fontFamily }, e.value.color || this.m_defaultSettings.textColor, this.m_elements.value.halign, this.m_elements.value.valign)
            }
        }, t.prototype.drawBorder = function(e, t, i) {
            var n = i ? this.m_elements.border.focusSize : this.m_elements.border.size,
                a = CanvasRenderer.transformRectToBorderRect(this.m_rects.cell, n);
            this.m_renderer.drawRect(a, i ? this.m_elements.border.focusColor : this.m_elements.border.color, i ? this.m_elements.border.focusSize : this.m_elements.border.size, null)
        }, t.prototype.draw = function(e, t) {
            var i = e.data;
            this.m_rects.cell = this.m_rects["default"] = utilities.math.roundRect(e);
            var n = utilities.math.getMinMax(this.m_elements.border.focusSize, this.m_elements.border.size);
            this.m_rects.innerCell = CanvasRenderer.getContentRect(this.m_rects.cell, n.min), this.m_rects.content = CanvasRenderer.getContentRect(this.m_rects.cell, n.max), this.drawBackground(), this.drawIndex(i, t), this.drawName(i, t), this.drawValue(i, t), this.drawBorder(i, t, e.focused)
        }, e.ChannelSheetCell = t
    }(window.uiTypes.canvas);
var e = window.timers.GlobalTimers;
window.uiTypes.pages.Wheels = function() {
    var t = window.uiTypes.pages.Page,
        s = window.Server,
        i = s.requestTypes,
        a = function(e, t, s) {
            a.superclass.constructor.call(this, e, t, s), this.requirements = { presetTypeBar: !0, showDimmerWheel: !0 }, this.pageCommands = [{ command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.high(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.solo(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.full(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.oops(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.on(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.off(), uiElement: commands.ui.UIMultiStateButton() }], this.pageCommands.forEach(commands.ui.initCommandUIElementPair), this.commandItems = this.pageCommands.map(commands.ui.fetchUIElementItems), generic.globs.serverCommandManager.addCommands(this.id, this.pageCommands), this.topRightButtonText = $(".top-right-button .text"), this.full_preset_type_init = !1, this.PresetTypeArray = [], this.wheels = [], this.wheelsCountPerPage = 4, this.wheelsContainer = $("#wheelContainer", this.$page), this.allWheels = $(".allWheels", this.wheelsContainer);
            var n = '<div id="FeatureButton" class="drop-down">';
            isDot2() || (n += '<embed data-rel="drop-down-sign" class="dropDownSign" type="image/svg+xml" src="./images/dropDownSign.svg"></embed>'), n += "</div>", this.$featureButton = $(n), this.featureButton = new window.uiTypes.DropDownButton(this.$featureButton), this.featureDropDownEnabled = !1, this.$wheelTemplate = $("*[data-rel=wheel-template]", this.wheelsContainer), this.fakeFeaturesSuffixes = "ABCDEFGHIJKLMNOPQRSTUWXYZ", this.wheelMaxSpace = 1 / 9, this.wheelMinWidth = 60, this.currentPresetTypeId = -1, this.currentFeatureId = -1, this.refresh_context = null, this.wheelSelected_context = this.WheelSelected.bind(this), this.attrBtnClicked_context = this.AttrBtnClicked.bind(this), this.Refresh = function() { this.m_commandExecutor.send({ requestType: i.presetTypes, type: this.full_preset_type_init ? "full" : "update" }), this.full_preset_type_init = !1 }, this.AddWheels = function(e, t) {
                if (!(0 >= e))
                    for (var s = t; t + e > s; s++) {
                        var i = this.$wheelTemplate.clone();
                        i.attr("id", "wheel" + s), this.allWheels.append(i), this.wheels[s] = new window.uiTypes.Wheel("", i), this.wheels[s].init(), this.wheels[s].WheelSelectedCallback = this.wheelSelected_context, this.wheels[s].AttrButtonCallback = this.attrBtnClicked_context
                    }
            }, this.PresetTypesRender = function(e) {
                if (e.responseType != i.presetTypes) return !1;
                for (var t = null, s = 0; s < this.PresetTypeArray.length; s++) {
                    var a = this.PresetTypeArray[s];
                    a.s && (t = a)
                }
                switch (e.type) {
                    case "full":
                        return this.PresetTypeArray = e.pre, this.PresetTypeArray.length <= 0 ? void this.wheelsContainer.hide() : (this.wheelsContainer.show(), this.setupFeatureFull(t), !0);
                    case "update":
                        return $.extend(!0, this.PresetTypeArray, e.pre), this.setupFeatureFull(t), !0;
                    default:
                        assert("Wheels.PresetTypesRender: invalid argument 'type'")
                }
                return !1
            }, this.setupFeatureFull = function(e) {
                if (e) {
                    var t = this.wheelsCountPerPage;
                    this.wheelsCountPerPage = Math.min(Math.floor(1 / this.wheelMaxSpace), Math.max(Math.floor(this.wheelsContainer.width() / this.wheelMinWidth), 1));
                    for (var s = 0, i = e.fea, a = i.length, n = 0; a > n; n++)
                        if (i[n].s) { s = n; break }
                    for (var r = i[s], o = 0, h = 0, l = r.att, n = 0; n < l.length; n++)
                        if (l[n].s) { o = l[n].i, h = n; break }
                    var d = Math.floor(h / this.wheelsCountPerPage),
                        u = d * this.wheelsCountPerPage,
                        m = Math.min(this.wheelsCountPerPage, r.att.length - u),
                        c = r.att.length > this.wheelsCountPerPage;
                    this.featureButton.rename(r.np + (c ? " " + this.fakeFeaturesSuffixes[d] : "")), this.featureDropDownEnabled = c || a > 1, this.allWheels.hide(), this.AddWheels(m - this.wheels.length, this.wheels.length);
                    var p = 100 / this.wheelsCountPerPage * m,
                        f = 100 / m;
                    this.allWheels.css("width", p + "%");
                    for (var n = 0; m > n; n++) {
                        var w = r.att[u + n];
                        this.wheels[n].setAttribute({ id: w.n, name: w.np, encoder_resolution: w.encoder_resolution, value: w.t, bgColor: w.bC, color: w.c }), this.wheels[n].m_wheelControl.css("width", f + "%"), this.wheels[n].show()
                    }
                    for (var n = m; n < this.wheels.length; n++) this.wheels[n].hide();
                    this.allWheels.show();
                    var g = this.currentPresetTypeId !== e.i || this.currentFeatureId !== r.i || t !== this.wheelsCountPerPage;
                    this.currentPresetTypeId = e.i, this.currentFeatureId = r.i, g && this.featureButton.updateListData(this.FeatureListUpdate())
                }
            }, this.FeatureButtonPressed = function() {
                for (var e = this.PresetTypeArray.length, t = 0; e > t; t++)
                    if (this.PresetTypeArray[t].s) {
                        for (var s = this.PresetTypeArray[t], i = s.fea, a = i.length, n = 0; a > n; n++) {
                            var r = i[n];
                            if (r.s) {
                                for (var o = 0; o < r.att.length; o++) {
                                    var h = r.att[o];
                                    if (h.s) {
                                        var l = Math.floor((r.att.length - 1) / this.wheelsCountPerPage + 1),
                                            d = Math.floor(o / this.wheelsCountPerPage);
                                        if (l - 1 > d) {
                                            var u = r.att[(d + 1) * this.wheelsCountPerPage];
                                            this.m_commandExecutor.send({ command: this.m_commandLine.getText() + " Att " + u.i })
                                        } else {
                                            var m = this.m_commandLine.getText();
                                            if ("" != m) {
                                                var c = i[n];
                                                this.m_commandExecutor.send({ command: this.m_commandLine.getText() + " FEA " + c.i })
                                            } else {
                                                n = (n + 1) % a;
                                                var p = i[n];
                                                this.m_commandExecutor.send({ command: "FEA " + p.i })
                                            }
                                        }
                                        break
                                    }
                                }
                                break
                            }
                        }
                        break
                    }
            }, this.FeatureListUpdate = function() {
                for (var e, t = this.PresetTypeArray.length, s = 0; t > s; s++)
                    if (this.PresetTypeArray[s].s) { e = this.ReorderFeatures(this.PresetTypeArray[s].fea); break }
                return e
            }, this.ReorderFeatures = function(e) {
                for (var t = [], s = 0; s < e.length; s++)
                    if (e[s].att.length <= this.wheelsCountPerPage) t.push(e[s]);
                    else
                        for (var i = e[s].att.length, a = 0; i > 0; ++a) t.push({ att: e[s].att.slice(a * this.wheelsCountPerPage, Math.min((a + 1) * this.wheelsCountPerPage, e[s].att.length)), p: e[s].p + " " + this.fakeFeaturesSuffixes[a], np: e[s].np + " " + this.fakeFeaturesSuffixes[a], i: e[s].i }), i -= this.wheelsCountPerPage;
                return t
            }, this.getFeatureDropDownEnabled_context = this.getFeatureDropDownEnabled.bind(this), this.FeatureSelected_context = this.FeatureSelected.bind(this), this.featureButtonCreateItem_context = this.featureButtonCreateItem.bind(this)
        };
    return window.generic.extend(a, window.uiTypes.pages.Page), a.id = "wheels", a.title = "Wheels", a.content = '<div id="' + a.id + '"><div id="wheelContainer"><div class="allWheels"></div><div class="hidden"><div data-rel="wheel-template" class="wheel"><div class="attributeButtons"><div class="attributeMainButton"><div class="attributeButtonName"></div><div class="attributeButtonValue"></div></div></div><div class="attributeEncoderResolutionButton"><ul class="attributeEncoderResolutionList"><li class="attributeEncoderResolutionNormal">Normal</li><li class="attributeEncoderResolutionFine">Fine</li><li class="attributeEncoderResolutionUltra">Ultra</li></ul></div><div class="wheelHolder"><div class="wheelStripe"><div class="wheelStripeInner"></div></div></div></div></div></div></div>', a.prototype.CreatePageButtons = function() {
        this.pageButtons || (this.pageButtons = [{ $item: this.$featureButton }]);
        var e = document.getElementsByClassName("vertical-controls")[0];
        e.innerHTML = "";
        for (var t = 0; t < this.pageCommands.length; t++) e.appendChild(this.pageCommands[t].uiElement.m_$item[0]);
        return this.pageButtons
    }, a.prototype.WheelSelected = function(e) { this.m_commandExecutor.send({ command: "Att " + e }) }, a.prototype.AttrBtnClicked = function(e) { this.m_commandExecutor.send({ command: this.m_commandLine.getText() + " Att " + e }) }, a.prototype.getFeatureDropDownEnabled = function() { return this.featureDropDownEnabled }, a.prototype.FeatureSelected = function(e) {
        e.preventDefault();
        var t = $(e.data).attr("attributeId");
        t && this.m_commandExecutor.send({ command: "ATT " + t }), this.featureButton.close()
    }, a.prototype.featureButtonCreateItem = function(e) { var t = $("<div class='drop-down-item' attributeId='" + e.att[0].i + "'>" + e.np + "</div>"); return t.bind(Touch.maTouchDown, t, this.FeatureSelected_context), t }, a.prototype.Show = function() {
        a.superclass.Show.call(this), this.OnResize(), this.full_preset_type_init = !0, this.refresh_context = this.Refresh.bind(this), e.AddRefreshTimerEventHandler(this.refresh_context), DataHandlerManager.Register({ name: this.id + "DataHandler", handler: this.PresetTypesRender.bind(this) }), this.AddWheels(this.wheelsCountPerPage, 0), this.topRightButtonText.text("Back"), this.featureButton.init({ OnTap: this.FeatureButtonPressed.bind(this), canExecuteDropDown: this.getFeatureDropDownEnabled_context, $container: $('<div class="drop-down-container"></div>'), createItem: this.featureButtonCreateItem_context }), $(this).triggerHandler(t.events.pageButtonsChanged, { buttons: this.CreatePageButtons() });
        var s = document.getElementsByClassName("dimmer-wheel")[0],
            i = document.getElementsByClassName("vertical-controls")[0];
        s && i && (s.classList.add("hidden"), i.classList.remove("hidden"))
    }, a.prototype.OnResize = function() { a.superclass.OnResize.call(this), window.generic.statusLogging("resize"), this.featureButton.updateListRect({ left: Math.floor(this.$page.offset().left), top: Math.floor(this.$page.offset().top), width: Math.floor(this.$page.width()), height: Math.floor(this.$page.height()) }) }, a.prototype.Close = function() {
        a.superclass.Close.call(this), this.refresh_context || window.generic.statusLogging("I'm memory leak"), setTimeout(function() {
            var e = document.getElementsByClassName("dimmer-wheel")[0],
                t = document.getElementsByClassName("vertical-controls")[0];
            e && t && (e.classList.remove("hidden"), t.classList.add("hidden"))
        }, 30), e.RemoveRefreshTimerEventHandler(this.refresh_context), this.refresh_context = null, DataHandlerManager.Unregister(this.id + "DataHandler"), this.featureButton && (this.featureButton.dispose(), this.featureButton = null), this.topRightButtonText.text("Wheels");
        for (var t = 0; t < this.wheels.length; t++) this.wheels[t].dispose()
    }, a
}();
window.uiTypes.pages.MainMenu = function() {
    var t = function(n, o, e) { t.superclass.constructor.call(this, n, o, e), this.requirements = { presetTypeBar: !0 }, this.columnsCount = 3, this.m_pressLoginButton_context = this.pressLoginButton.bind(this), this.m_pressConnectDisconnectButton_context = this.pressConnectDisconnectButton.bind(this), this.m_pressSettingsButton_context = this.pressSettingsButton.bind(this) };
    return window.generic.extend(t, window.uiTypes.pages.Page), t.id = "mainMenu", t.title = "Main Menu", t.content = '<div id="' + t.id + '"><div class="main"><div class="main-menu-section basic basic-js"><div class="title"><span class="content">Views</span></div><div class="navigationPanel"></div></div><div class="main-menu-section additional additional-js"><div class="title"><span class="content">Additional operations</span></div><div class="navigationPanel">', isDot2() || (t.content += '<div id="loginButton" class="navigationBlock menu-item"><span class="content">Login</span></div>'), t.content += '<div id="connectButton" class="navigationBlock menu-item"><span class="content" id="connectButtonContent">Connected... - Disconnect</span></div><div id="settingsButton" class="navigationBlock menu-item"><span class="content">Settings</span></div></div></div></div></div>', t.prototype.Init = function() { t.superclass.Init.call(this), this.m_loginButton = document.getElementById("loginButton"), this.m_connectButton = document.getElementById("connectButton"), this.m_settingsButton = document.getElementById("settingsButton"), this.m_loginButton && this.m_loginButton.addEventListener(Touch.maTouchDown, this.m_pressLoginButton_context), this.m_connectButton.addEventListener(Touch.maTouchDown, this.m_pressConnectDisconnectButton_context), this.m_settingsButton.addEventListener(Touch.maTouchDown, this.m_pressSettingsButton_context) }, t.prototype.pressConnectDisconnectButton = function() { this.m_commandExecutor.IsConnected() ? (window.ui.forcedDisconnect = !0, this.m_commandExecutor.disconnect()) : (window.ui.forcedDisconnect = !1, this.m_commandExecutor.connect()) }, t.prototype.pressLoginButton = function() { window.Server.SetLoginState(!1), window.ui.loginForm.Show() }, t.prototype.pressSettingsButton = function() { window.generic.globs.pageManager.TogglePage(window.uiTypes.pages.Settings.id, { modal: !0 }) }, t.prototype.Show = function() {
        t.superclass.Show.call(this);
        for (var n = window.generic.globs.pageManager.getPageChain(), o = [], e = 0; e < n.length; e++) {
            var i = n[e];
            o.push({ text: i.title, bind: this.openPage.bind(this, i.id) })
        }
        var s = $(".basic-js .navigationPanel", this.$page),
            c = "<div class='arrow'></div>",
            a = $("<div class='navigationBlock'><span class='content text'></span></div>");
        $.ButtonBlock.create(o, this.columnsCount, s, a, c)
    }, t.prototype.openPage = function(t, n) { n[0].addEventListener(Touch.maTouchUp, function(n) { window.generic.globs.pageManager.ShowPage(t) }) }, t.prototype.Close = function() { t.superclass.Close.call(this), this.m_loginButton && this.m_loginButton.removeEventListener(Touch.maTouchDown, this.m_pressLoginButton_context), this.m_connectButton.removeEventListener(Touch.maTouchDown, this.m_pressConnectDisconnectButton_context), this.m_settingsButton.removeEventListener(Touch.maTouchDown, this.m_pressSettingsButton_context) }, t
}();
window.uiTypes.pages.CommandHistory = function() { var t = function(e, i, s) { t.superclass.constructor.call(this, $.createItem({ "class": "canvas-container", html: "<div><canvas>Sorry, your browser is not supported.</canvas></div>" }), e, i, s), this.requirements = {}, this.CreateWindow = function() { this.m_ma2window = new window.uiTypes.canvas.CommandHistoryWindow(this.canvas, window.CanvasRenderer(this.canvas[0].getContext("2d")), { top: 0, left: 0, width: this.canvas[0].width, height: this.canvas[0].height }), this.m_ma2window.init(!0), DataHandlerManager.Register({ name: this.id + "DataHandler", handler: this.m_ma2window.commandHistoryRender.bind(this.m_ma2window) }) }, this.GetPayloadObject = function() { var t = new Object; return t.requestType = Server.requestTypes.commandHistory, t.cntCols = this.m_ma2window.GetVisibleColsCount(), t.cntRows = this.m_ma2window.GetVisibleRowsCount(), t.offCol = this.m_ma2window.GetDataOffsetX(), t.offRow = this.m_ma2window.GetDataOffsetY(), t } }; return window.generic.extend(t, window.uiTypes.pages.CanvasPage), t.prototype.Init = function() { t.superclass.Init.call(this), this.$page.append(this.canvasContainer) }, t.id = "commandHistory", t.title = "Command History", t.content = '<div id="' + t.id + '"></div>', t }(), window.uiTypes.canvas.CommandHistoryWindow = function() {
    var t = function(e, i, s) {
        t.superclass.constructor.call(this, e, i, s), $.extend(this.m_defaultSettings, { cellFontSize: 0, fontSizeToCellHeightCoef: 5 / 3, fontSizeToCellWidthCoef: 10 / 3, horzScrollWidthFactorOfWindowWidth: 3, backgroundColor: remoteColors.commandHistory.backgroundColor, fillStyle: remoteColors.commandHistory.fillStyle }), this.m_contentSettings = { colsCount: 0, rowsCount: 0, cellHeight: 0, cellWidth: 0 }, this.m_offset = { x: 0, y: 0 }, this.m_wheelStartPoint = 0, this.init = function(e) { t.superclass.init.call(this, e), this.setFontSize(), this.m_redrawWholeCanvas = !0 }, this.setFontSize = function() {
            var t = utility.getDefaultFontSize();
            this.m_defaultSettings.cellFontSize = t, this.m_contentSettings.cellHeight = parseInt(this.m_defaultSettings.cellFontSize * this.m_defaultSettings.fontSizeToCellHeightCoef), this.m_contentSettings.cellWidth = parseInt(this.m_defaultSettings.cellFontSize * this.m_defaultSettings.fontSizeToCellWidthCoef), this.m_redrawWholeCanvas = !0
        }, this.resize = function(e, i) { t.superclass.resize.call(this, e, i), this.SyncHOffset(), this.SyncVOffset() }, this.commandHistoryRender = function(t) { if (!t || t.responseType != Server.requestTypes.commandHistory) return !1; var e = t; return this.m_contentSettings.colsCount = e.cntCols, this.m_contentSettings.rowsCount = e.cntRows, this.refresh(e), !0 }, this.refresh = function(e) {
            if (t.superclass.refresh.call(this), e) {
                var i = e.data,
                    s = i.length;
                this.renderer.drawRect(this.GetContentRect(), 0, 0, this.m_defaultSettings.backgroundColor);
                for (var n = 0; s > n; n++) {
                    var o = i[n];
                    this.commandHistoryDrawLine(n + 1, o[0])
                }
                this.drawScrollBars()
            }
        }, this.commandHistoryDrawLine = function(t, e) {
            var i = this.GetContentRect(),
                s = i.width - i.x,
                n = { x: i.x, y: i.y + i.height - t * this.m_contentSettings.cellHeight, width: s, height: this.m_contentSettings.cellHeight };
            this.renderer.drawRect(n, 0, 0, remoteColors.commandHistory.lineBackgroundColor), this.drawCommandLine(n.x - this.GetDataOffsetX(), n.y + this.m_contentSettings.cellHeight / 2, e)
        }, this.drawCommandLine = function(t, e, i) {
            var s = "left",
                n = "middle",
                o = "Courier",
                h = i.indexOf("#");
            if (-1 != h) {
                var r = [];
                r[30] = "#000000", r[31] = "#7B0007", r[32] = "#1D830C", r[33] = "#7E8211", r[34] = "#14007E", r[35] = "#14007E", r[36] = "#257C7B", r[37] = "#BBBBBB";
                for (var l = 0, a = ""; h >= 0;) {
                    h > 0 && 0 == l && (a = i.substring(0, h), this.renderer.fillText({ x: t + l, y: e, height: this.m_defaultSettings.cellFontSize }, a, { family: o }, r[37], s, n), l += this.renderer.measureText(a, this.m_defaultSettings.cellFontSize + "px" + o).width);
                    var f = i.indexOf("m", h + 2),
                        c = i.substring(h + 2, f);
                    h = i.indexOf("#[", h + 1), a = -1 != h ? i.substring(f + 1, h) : i.substring(f + 1), this.renderer.fillText({ x: t + l, y: e, height: this.m_defaultSettings.cellFontSize }, a, { family: o }, r[c], s, n), l += this.renderer.measureText(a, this.m_defaultSettings.cellFontSize + "px" + o).width
                }
            } else this.renderer.fillText({ x: t, y: e, height: this.m_defaultSettings.cellFontSize }, i, { family: o }, remoteColors.commandHistory.color, s, n)
        }, this.wheelStart = function() { this.m_wheelStartPoint = { offsetX: this.m_offset.x, offsetY: this.m_offset.y } }, this.wheelEnd = function() { this.m_wheelStartPoint = 0 }, this.hStep = function(t) { "forward" === t ? (this.m_offset.x < this.GetFullScrollableWidth() && (this.m_offset.x += this.m_contentSettings.cellHeight, this.m_offset.x = Math.min(this.GetFullScrollableWidth(), this.m_offset.x)), this.SyncHOffset()) : "back" === t && (this.m_offset.x > 0 && (this.m_offset.x -= this.m_contentSettings.cellHeight, this.m_offset.x = Math.max(0, this.m_offset.x)), this.SyncHOffset()) }, this.hStepPage = function(t) { return "forward" === t ? 10 : "back" === t ? -10 : 0 }, this.hWheel = function(t) { t && (this.m_offset.x = Math.min(this.GetFullScrollableWidth(), Math.max(0, this.m_wheelStartPoint.offsetX + t * this.GetFullScrollableWidth())), this.SyncHOffset()) }, this.SyncHOffset = function() { this.GetHScroll().SetOffset(this.m_offset.x / this.GetFullScrollableWidth()) }, this.vStep = function(t) {
            if ("forward" === t) {
                var e = Math.max(0, this.m_contentSettings.rowsCount - this.GetVisibleRowsCount());
                this.m_offset.y < e && ++this.m_offset.y, this.SyncVOffset()
            } else "back" === t && (this.m_offset.y > 0 && --this.m_offset.y, this.SyncVOffset())
        }, this.vStepPage = function(t) { return "forward" === t ? 10 : "back" === t ? -10 : 0 }, this.vWheel = function(t) {
            if (t) {
                var e = Math.max(this.m_contentSettings.rowsCount - this.GetVisibleRowsCount(), 0);
                this.m_offset.y = Math.min(e, Math.max(0, parseInt(this.m_wheelStartPoint.offsetY + t * e))), this.SyncVOffset()
            }
        }, this.SyncVOffset = function() {
            var t = this.m_contentSettings.rowsCount - this.GetVisibleRowsCount() || this.m_offset.y;
            this.GetVScroll().SetOffset(this.m_offset.y / t)
        }, this.GetVisibleScrollableWidth = function() { return this.GetContentRect().width - this.m_contentSettings.cellWidth }, this.GetVisibleScrollableHeight = function() { return this.GetContentRect().height - this.m_contentSettings.cellHeight }, this.GetFullScrollableWidth = function() { return 3 * this.GetVisibleScrollableWidth() }, this.GetFullScrollableHeight = function() { return this.m_contentSettings.rowsCount * this.m_contentSettings.cellHeight }, this.GetVisibleColsCount = function() { return 2 }, this.GetVisibleRowsCount = function() { return Math.floor(this.GetContentRect().height / this.m_contentSettings.cellHeight) - 1 }, this.GetDataOffsetX = function() { return this.m_offset.x }, this.GetDataOffsetY = function() { return this.m_offset.y }
    };
    return window.generic.extend(t, window.uiTypes.canvas.MA2Window), t
}();
defineNamespace(window, "uiTypes.pages"),
    function(m) {
        var n = function(m, a, o) { n.superclass.constructor.call(this, m, a, o), this.requirements = { showDimmerWheel: !0 }, this.$buttonsContainer = $.createItem({ "class": "complex-button-container" }), this.pageCommands = isDot2() ? { left: [{ command: commands.Commands.pause(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.goback(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.go(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.on(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.off(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands["goto"](), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._delete(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.copy(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._empty(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.edit(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.update(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._empty(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.page(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.exec(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.cue(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.group(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.preset(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.time(), uiElement: commands.ui.UIMultiStateButton() }], right: [{ command: commands.Commands.fixture(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.oops(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.esc(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._7(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._8(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._9(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.plus(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._4(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._5(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._6(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.thru(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._1(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._2(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._3(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.minus(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._0(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.dot(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._if(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.at(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.store(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.full(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.high(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.please(), uiElement: commands.ui.UILabel() }] } : { left: [{ command: commands.Commands.on(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.off(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.select(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._empty(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.assign(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.copy(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._delete(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.time(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands["goto"](), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.sequence(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.cue(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.exec(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.macro(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.page(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.group(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.preset(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.ma(), uiElement: commands.ui.UIStateImageButton() }, { command: commands.Commands.edit(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.update(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.store(), uiElement: commands.ui.UIMultiStateButton() }], right: [{ command: commands.Commands.channelFixtureSwitcher(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.oops(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.esc(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands._7(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._8(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._9(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.plus(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._4(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._5(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._6(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.thru(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._1(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._2(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._3(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.minus(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._0(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.dot(), uiElement: commands.ui.UILabel() }, { command: commands.Commands._if(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.at(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.full(), uiElement: commands.ui.UILabel() }, { command: commands.Commands.solo(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.high(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.please(), uiElement: commands.ui.UILabel() }] }, this.pageCommands.left.forEach(commands.ui.initCommandUIElementPair), this.pageCommands.right.forEach(commands.ui.initCommandUIElementPair), this.commandItems = { left: this.pageCommands.left.map(commands.ui.fetchUIElementItems), right: this.pageCommands.right.map(commands.ui.fetchUIElementItems) }, this.$page.append(this.$buttonsContainer) };
        window.generic.extend(n, window.uiTypes.pages.Page), n.prototype.Show = function() { n.superclass.Show.call(this), this.$leftContainer = $.createItem({ "class": "cmd-button-container" }), this.$rightContainer = $.createItem({ "class": "cmd-button-container" }), isDot2() ? ui.Layout.Place(this.$leftContainer, this.commandItems.left, { grid: { columnsCount: 3 } }) : ui.Layout.Place(this.$leftContainer, this.commandItems.left, { grid: { columnsCount: 4 } }), ui.Layout.Place(this.$rightContainer, this.commandItems.right, { grid: { columnsCount: 4 } }), isDot2() ? ui.Layout.Place(this.$buttonsContainer, [{ $item: this.$leftContainer, location: { x: "0%", y: "0%", width: "50%", height: "100%" } }, { $item: this.$rightContainer, location: { x: "50%", y: "0%", width: "50%", height: "100%" } }]) : ui.Layout.Place(this.$buttonsContainer, [{ $item: this.$leftContainer, location: { x: "0%", y: "16.66%", width: "50%", height: "83.34%" } }, { $item: this.$rightContainer, location: { x: "50%", y: "0%", width: "50%", height: "100%" } }]), generic.globs.serverCommandManager.addCommands(this.id, this.pageCommands.left.concat(this.pageCommands.right)) }, n.prototype.Close = function() { n.superclass.Close.call(this), generic.globs.serverCommandManager.removeCommands(this.id), commands.ui.disposeUIElements(this.pageCommands.left), commands.ui.disposeUIElements(this.pageCommands.right) }, n.id = "FullCommand", n.title = isDot2() ? "Command" : "CMD", n.content = '<div id="' + n.id + '"></div>', n.maButtonState = !1, m.FullCommand = n
    }(window.uiTypes.pages);
defineNamespace(window, "uiTypes.canvas"), defineNamespace(window, "uiTypes.pages"),
    function(t) {
        var e = window.uiTypes.pages.Page,
            o = function(t, e, n) { o.superclass.constructor.call(this, $.createItem({ "class": "canvas-container", html: "<div><canvas></canvas></div>" }), t, e, n) };
        window.generic.extend(o, window.uiTypes.pages.PoolPage), o.prototype.GetWindowClass = function() { return window.uiTypes.canvas.GroupPoolWindow }, o.prototype.CreateWindow = function() { o.superclass.CreateWindow.call(this), $(this).triggerHandler(e.events.pageButtonsChanged, { buttons: this.CreatePageButtons() }) }, o.prototype.CreatePageButtons = function() { return this.pageButtons || (this.pageButtons = [{ command: commands.Commands.high(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }], this.pageButtons.forEach(commands.ui.initCommandUIElementPair), generic.globs.serverCommandManager.addCommands(this.id, this.pageButtons)), this.pageButtons }, o.prototype.ItemSelected = function(t, e) {
            var n = e.id,
                s = this.m_commandLine.getText();
            this.m_commandExecutor.send({ requestType: Server.requestTypes.pool_itemSelected, pool: o.shortId, id_1: n, cmdlineText: s })
        }, o.id = "groupPool", o.shortId = "group", o.title = isDot2() ? "Groups" : "Group Pool", o.content = '<div id="' + o.id + '"></div>', t.GroupPool = o
    }(window.uiTypes.pages),
    function(t) {
        var e = function(o, n, s) { e.superclass.constructor.call(this, o, n, s, t.GroupPoolCell), $.extend(this.m_defaultSettings, { storage: Storage.AddSection("GroupPool") }) };
        window.generic.extend(e, window.uiTypes.canvas.PoolWindow), e.prototype.getItem = function(t, o) { var n = e.superclass.getItem(t, o); return $.extend(n, { stateStripeColor: o.stateStripeC, isReferenced: o.isRef, miscRects: o.cntNotInWorld ? [{ width: o.cntNotInWorld }] : void 0 }), n }, e.prototype.SetDataSource = function(t) { return t.responseType != Server.requestTypes.pool ? !1 : "group" != t.pool ? !1 : e.superclass.SetDataSource.call(this, t) };
        var o = function(t) { o.superclass.constructor.call(this, t), isDot2() ? $.extend(this.m_defaultSettings, { margin: { top: 0, left: 0, bottom: 0, right: 0 }, padding: { top: 0, left: 0, bottom: 0, right: 0 } }) : $.extend(this.m_defaultSettings, {}), isDot2() || (this.stateStripe.enabled = !0, this.miscRects = { array: [{ color: remoteColors.groupPool.cell.miscRects.color, pointFrom: { x: 0, y: .5 }, pointTo: { x: 1, y: .5 }, width: .06 }] }) };
        window.generic.extend(o, window.uiTypes.canvas.PoolCell), t.GroupPoolWindow = e, t.GroupPoolCell = o
    }(window.uiTypes.canvas);
defineNamespace(window, "uiTypes.canvas"), defineNamespace(window, "uiTypes.pages"),
    function(e) {
        var t = window.uiTypes.pages.Page,
            o = function(e, t, r) { o.superclass.constructor.call(this, $.createItem({ "class": "canvas-container", html: "<div><canvas></canvas></div>" }), e, t, r), window.poolViewVisible = !0, this.requirements = { presetTypeBar: !0 } };
        window.generic.extend(o, window.uiTypes.pages.PoolPage), o.prototype.GetWindowClass = function() { return window.uiTypes.canvas.PresetPoolWindow }, o.prototype.CreateWindow = function() { o.superclass.CreateWindow.call(this), $(this).triggerHandler(t.events.pageButtonsChanged, { buttons: this.CreatePageButtons() }) }, o.prototype.CreatePageButtons = function() { return this.pageButtons || (this.pageButtons = [{ command: commands.Commands.store(), uiElement: commands.ui.UIMultiStateButton() }, { command: commands.Commands.clear(), uiElement: commands.ui.UIMultiStateButton() }], this.pageButtons.forEach(commands.ui.initCommandUIElementPair), generic.globs.serverCommandManager.addCommands(this.id, this.pageButtons)), this.pageButtons }, o.prototype.ItemSelected = function(e, t) {
            var r = t.id,
                i = t.presetTypeId,
                s = this.m_commandLine.getText();
            this.m_commandExecutor.send({ requestType: Server.requestTypes.pool_itemSelected, pool: o.shortId, id_1: r, id_2: i, cmdlineText: s })
        }, o.id = "presetPool", o.shortId = "preset", o.title = isDot2() ? "Presets" : "Preset Pool", o.content = '<div id="' + o.id + '"></div>', e.PresetPool = o
    }(window.uiTypes.pages),
    function(e) {
        var t = function(o, r, i) { t.superclass.constructor.call(this, o, r, i, e.PresetPoolCell), $.extend(this.m_defaultSettings, { storage: Storage.AddSection(window.uiTypes.pages.PresetPool.id) }), this.m_currentPresetTypeId = -1 };
        window.generic.extend(t, window.uiTypes.canvas.PoolWindow), t.prototype.getItem = function(e, o) { var r = t.superclass.getItem(e, o); return $.extend(r, { stateStripeColor: o.stateStripeC || e.stateStripeC, isReferenced: o.isRef, symbol: { wheelColor: o.symbol ? o.symbol.wheelC : "", mixColor: o.symbol ? o.symbol.mixC : "", color: o.symbol ? o.symbol.c : "", hasWheelSlots: o.symbol ? o.symbol.hasWheelSlots : !1 }, amountOfUsed: o.amountOfUsed, dimmer: o.dimmer, specialChars: [o.hasSelectiveData, o.hasGlobalData, o.hasUniversalData, o.hasEmbedded], miscRects: [o.hasValues, o.hasFades, o.hasDelays, o.hasEffect] }), r }, t.prototype.SetDataSource = function(e) { return e.responseType != Server.requestTypes.pool ? !1 : "preset" != e.pool ? !1 : (this.m_currentPresetTypeId = e.presetType, t.superclass.SetDataSource.call(this, e)) }, t.prototype.onItemSelected = function(e) { e.presetTypeId = this.m_currentPresetTypeId, t.superclass.onItemSelected.call(this, e) };
        var o = function(e) { o.superclass.constructor.call(this, e), isDot2() ? $.extend(this.m_defaultSettings, { margin: { top: 0, left: 0, bottom: 0, right: 0 }, padding: { top: 0, left: 0, bottom: 0, right: 0 } }) : $.extend(this.border, { color: remoteColors.presetPool.cell.borderColor }), this.title.width = .94, this.stateStripe.enabled = !0, this.amountOfUsed = { x: 0, y: .24, width: 1, height: .24, halign: "left", valign: "middle", color: remoteColors.presetPool.cell.amountOfUsed.color }, this.symbol = isDot2() ? { x: .55, y: .04, width: .6, height: .6, borderWidth: 1, bigCircle: { center: { x: .4, y: .4 }, radius: .4 }, bigSquare: { x: 0, y: 0, width: .8, height: .8 }, littleCircle: { center: { x: .65, y: .65 }, radius: .15 }, littleSquare: { x: .4, y: .4, width: .5, height: .5 } } : { x: .75, y: .08, width: .3, height: .3, borderWidth: 1, bigCircle: { center: { x: .4, y: .4 }, radius: .4 }, bigSquare: { x: 0, y: 0, width: .8, height: .8 }, littleCircle: { center: { x: .65, y: .65 }, radius: .15 }, littleSquare: { x: .4, y: .4, width: .5, height: .5 } }, this.dimmer = isDot2() ? { x: .95, y: .05, width: .05, height: .9, border: 1, background: remoteColors.presetPool.cell.dimmer.backgroundColor, color: remoteColors.presetPool.cell.dimmer.color } : { x: .95, y: .54, width: .05, height: .46, border: 1, background: remoteColors.presetPool.cell.dimmer.backgroundColor, color: remoteColors.presetPool.cell.dimmer.color }, isDot2() || (this.specialChars = { x: .5, y: 0, width: .25, height: .48, array: [{ color: remoteColors.presetPool.cell.specialChars[0].color, "char": "S", halign: "center", valign: "top" }, { color: remoteColors.presetPool.cell.specialChars[1].color, "char": "G", halign: "center", valign: "top" }, { color: remoteColors.presetPool.cell.specialChars[2].color, "char": "U", halign: "center", valign: "top" }, { color: remoteColors.presetPool.cell.specialChars[3].color, "char": "E", halign: "center", valign: "top" }] }), this.miscRects = { array: [{ color: remoteColors.presetPool.cell.miscRects[0].color, pointFrom: { x: 0, y: .5 }, pointTo: { x: .25, y: .5 }, width: .06 }, { color: remoteColors.presetPool.cell.miscRects[1].color, pointFrom: { x: .25, y: .5 }, pointTo: { x: .5, y: .5 }, width: .06 }, { color: remoteColors.presetPool.cell.miscRects[2].color, pointFrom: { x: .5, y: .5 }, pointTo: { x: .75, y: .5 }, width: .06 }, { color: remoteColors.presetPool.cell.miscRects[3].color, pointFrom: { x: .75, y: .5 }, pointTo: { x: 1, y: .5 }, width: .06 }] }, isDot2() && (this.miscRects = { array: [{ color: remoteColors.presetPool.cell.miscRects[0].color, pointFrom: { x: 0, y: .5 }, pointTo: { x: .25, y: .5 }, width: .06 }, { color: remoteColors.presetPool.cell.miscRects[1].color, pointFrom: { x: .25, y: .5 }, pointTo: { x: .5, y: .5 }, width: .06 }, { color: remoteColors.presetPool.cell.miscRects[2].color, pointFrom: { x: .5, y: .5 }, pointTo: { x: .75, y: .5 }, width: .06 }, { color: remoteColors.presetPool.cell.miscRects[3].color, pointFrom: { x: .05, y: .3 }, pointTo: { x: .058, y: .8 }, width: .06 }] }) };
        window.generic.extend(o, window.uiTypes.canvas.PoolCell), o.prototype.drawAmountOfUsed = function(e, t) {
            if (e.amountOfUsed) {
                var o = this.calculateLocation(this.amountOfUsed),
                    r = e.amountOfUsed;
                "" !== r && void 0 !== r && this.renderer.fillText(o, r, { family: this.m_defaultSettings.fontFamily }, this.amountOfUsed.color, this.amountOfUsed.halign, this.amountOfUsed.valign)
            }
        }, o.prototype.drawSymbol = function(e) {
            if (e.symbol) {
                var t = this.calculateLocation(this.symbol),
                    o = e.symbol.wheelColor,
                    r = e.symbol.mixColor,
                    i = e.symbol.color,
                    s = e.symbol.hasWheelSlots;
                if (t.width = t.height = Math.min(t.width, t.height), r && !o) {
                    var l = this.calculateLocation(this.symbol.bigSquare, t);
                    this.renderer.drawRect(l, 0, 0, i)
                } else {
                    var a = this.calculateLocation(this.symbol.bigCircle, t);
                    this.renderer.drawCircle(a.center, a.radius, 0, 0, i)
                }
                if (o && (r || s)) {
                    var c = this.calculateLocation(this.symbol.littleCircle, t);
                    this.renderer.drawCircle(c.center, c.radius, 0, 0, o)
                }
                if (r && (o || s)) {
                    var n = this.calculateLocation(this.symbol.littleSquare, t);
                    n = CanvasRenderer.getContentRect(n, this.symbol.borderWidth), this.renderer.drawRect(CanvasRenderer.transformRectToBorderRect(n, this.symbol.borderWidth), r, this.symbol.borderWidth, 0)
                }
            }
        }, o.prototype.drawDimmerBar = function(e) {
            var t = e.dimmer;
            if (void 0 !== t) {
                var o = this.calculateLocation(this.dimmer);
                this.renderer.drawRect(o, 0, 0, this.dimmer.background);
                var r = CanvasRenderer.getContentRect(o, this.dimmer.border),
                    i = r.height * t;
                r.y = r.y + r.height - i, r.height = i, this.renderer.drawRect(r, 0, 0, this.dimmer.color)
            }
        };
        var r = function(e, t) { if (0 > e || e > 3) throw generic.statusLogging("PresetPoolCell.getNextRect invalid parameter index"), Error(); return { x: t.x + e % 2 * t.width / 2, y: t.y + (e > 1 ? t.height / 2 : 0), width: t.width / 2 * .9, height: t.height / 2 * .9 } };
        o.prototype.drawSpecialChars = function(e) {
            if (e.specialChars)
                for (var t = this.calculateLocation(this.specialChars), o = 0, i = 0; i < e.specialChars.length; i++)
                    if (e.specialChars[i]) {
                        var s = r(o, t),
                            l = this.specialChars.array[i];
                        this.renderer.fillText(s, l["char"], { family: this.m_defaultSettings.fontFamily }, l.color, l.halign, l.valign), ++o
                    }
        }, o.prototype.customDraw = function(e) { isDot2() || this.drawAmountOfUsed(e.data, e.pixelPerEm), this.drawSymbol(e.data), this.drawDimmerBar(e.data), isDot2() || this.drawSpecialChars(e.data) }, e.PresetPoolWindow = t, e.PresetPoolCell = o
    }(window.uiTypes.canvas);
defineNamespace(window, "uiTypes.canvas"), defineNamespace(window, "uiTypes.pages"),
    function(e) {
        var t = function(e, o, i) { t.superclass.constructor.call(this, $.createItem({ "class": "canvas-container", html: "<div><canvas></canvas></div>" }), e, o, i) };
        window.generic.extend(t, window.uiTypes.pages.PoolPage), t.prototype.GetWindowClass = function() { return window.uiTypes.canvas.MacroPoolWindow }, t.prototype.ItemSelected = function(e, o) {
            var i = o.id,
                r = this.m_commandLine.getText();
            this.m_commandExecutor.send({ requestType: Server.requestTypes.pool_itemSelected, pool: t.shortId, id_1: i, cmdlineText: r })
        }, t.id = "MacroPool", t.shortId = "macro", t.title = "Macro Pool", t.content = '<div id="' + t.id + '"></div>', e.MacroPool = t
    }(window.uiTypes.pages),
    function(e) {
        var t = function(o, i, r) { t.superclass.constructor.call(this, o, i, r, e.MacroPoolCell), $.extend(this.m_defaultSettings, { storage: Storage.AddSection("MacroPool") }) };
        window.generic.extend(t, window.uiTypes.canvas.PoolWindow), t.prototype.getItem = function(e, o) { var i = t.superclass.getItem(e, o); return $.extend(i, { isReferenced: o.isRef, line: o.line, runState: o.runState, isRecording: o.isRecording }), i }, t.prototype.SetDataSource = function(e) { return e.responseType != Server.requestTypes.pool ? !1 : "macro" != e.pool ? !1 : t.superclass.SetDataSource.call(this, e) };
        var o = function(e) { o.superclass.constructor.call(this, e), $.extend(this.m_defaultSettings, {}) };
        window.generic.extend(o, window.uiTypes.canvas.PoolCell), o.activeMacroLine = { x: 0, y: .27, width: 1, height: .245, halign: "center", valign: "middle" }, o.recordingSymbol = { x: .8, y: 0, width: .2, height: .2 }, o.playPauseSymbol = { x: .8, y: 0, width: .2, height: .2 },
            function() {
                var e = { recordingSymbol: { rect: { x: 0, y: 0, width: 20, height: 20 }, center: { x: 10, y: 10 }, radius: 10, fillColor: "#A80707" }, playSymbol: { rect: { x: 20, y: 0, width: 20, height: 20 }, points: [{ x: 20, y: 0 }, { x: 35, y: 10 }, { x: 20, y: 20 }], color: "#F4B532", fillColor: "#F4B532" }, pauseSymbol: { rect: { x: 40, y: 0, width: 20, height: 20 }, points: [{ x: 45, y: 0 }, { x: 45, y: 20, end: !0 }, { x: 55, y: 0 }, { x: 55, y: 20 }], width: 6, color: "#F4B532" } },
                    t = document.createElement("canvas");
                t.width = 60, t.height = 60;
                var i = t.getContext("2d"),
                    r = window.CanvasRenderer(i);
                r.drawRect({ x: 0, y: 0, width: t.width, height: t.height }, null, 0, CanvasRenderer.transparent), r.drawCircle(e.recordingSymbol.center, e.recordingSymbol.radius, null, 0, e.recordingSymbol.fillColor), r.drawLines(e.playSymbol.points, e.playSymbol.color, e.playSymbol.fillColor, 1), r.drawLines(e.pauseSymbol.points, e.pauseSymbol.color, null, e.pauseSymbol.width), o.offScreenCanvas = t, o.prerenderedItems = e
            }(), o.prototype.drawActiveMacro = function(e) {
                if (e.line) {
                    var t = "Line " + e.line;
                    if (void 0 !== t) {
                        var i = this.calculateLocation(o.activeMacroLine);
                        this.renderer.fillText(i, t, { family: this.m_defaultSettings.fontFamily }, this.m_defaultSettings.textColor, o.activeMacroLine.halign, o.activeMacroLine.valign)
                    }
                }
            }, o.prototype.drawSymbols = function(e) {
                if (e.isRecording) {
                    var t = this.calculateLocation(o.recordingSymbol);
                    this.renderer.drawImage(t, o.offScreenCanvas, o.prerenderedItems.recordingSymbol.rect)
                }
                if (e.runState) {
                    var i = null;
                    e.isRecording ? (i = $.extend({}, o.playPauseSymbol), i.x -= o.recordingSymbol.width) : i = o.playPauseSymbol;
                    var t = this.calculateLocation(i);
                    this.renderer.drawImage(t, o.offScreenCanvas, "play" == e.runState ? o.prerenderedItems.playSymbol.rect : o.prerenderedItems.pauseSymbol.rect)
                }
            }, o.prototype.customDraw = function(e) { this.drawActiveMacro(e.data), this.drawSymbols(e.data) }, e.MacroPoolWindow = t, e.MacroPoolCell = o
    }(window.uiTypes.canvas);
defineNamespace(window, "uiTypes.canvas"), defineNamespace(window, "uiTypes.pages"),
    function(e) {
        var o = function(e, t, r) { o.superclass.constructor.call(this, $.createItem({ "class": "canvas-container", html: "<div><canvas></canvas></div>" }), e, t, r) };
        window.generic.extend(o, window.uiTypes.pages.PoolPage), o.prototype.GetWindowClass = function() { return window.uiTypes.canvas.WorldPoolWindow }, o.prototype.ItemSelected = function(e, t) {
            var r = t.id,
                s = this.m_commandLine.getText();
            this.m_commandExecutor.send({ requestType: Server.requestTypes.pool_itemSelected, pool: o.shortId, id_1: r, cmdlineText: s })
        }, o.id = "WorldPool", o.shortId = "world", o.title = "World Pool", o.content = '<div id="' + o.id + '"></div>', e.WorldPool = o
    }(window.uiTypes.pages),
    function(e) {
        var o = function(t, r, s) { o.superclass.constructor.call(this, t, r, s, e.WorldPoolCell), $.extend(this.m_defaultSettings, { storage: Storage.AddSection("WorldPool") }) };
        window.generic.extend(o, window.uiTypes.canvas.PoolWindow), o.prototype.getItem = function(e, t) { var r = o.superclass.getItem(e, t); return $.extend(r, { stateStripeColor: t.stateStripeC, maskSize: t.maskSize, mask: t.mask }), r }, o.prototype.SetDataSource = function(e) { return e.responseType != Server.requestTypes.pool ? !1 : "world" != e.pool ? !1 : o.superclass.SetDataSource.call(this, e) };
        var t = function(e) { t.superclass.constructor.call(this, e), $.extend(this.m_defaultSettings, {}), this.stateStripe.enabled = !0, this.presetTypeMask = { x: 0, y: .92, width: 1, height: .08, bgColor: remoteColors.worldPool.cell.backgroundColor, borderWidth: 1, filledColor: remoteColors.worldPool.cell.filledColor, emptyColor: remoteColors.worldPool.cell.emptyColor } };
        window.generic.extend(t, window.uiTypes.canvas.PoolCell), t.prototype.drawPresetTypeMask = function(e) {
            var o = e.mask,
                t = e.maskSize;
            if (o && t) {
                var r = this.calculateLocation(this.presetTypeMask);
                this.renderer.drawRect(r, null, 0, this.presetTypeMask.bgColor);
                for (var s = r.width / t, i = r.height, l = r.x + this.presetTypeMask.borderWidth, a = r.x + s - this.presetTypeMask.borderWidth, n = r.y + i / 2, d = [
                        [],
                        []
                    ], p = 0; t > p; p++) {
                    var c = 1 & o;
                    d[c].push({ x: l, y: n }), d[c].push({ x: a, y: n, end: !0 }), l += s, a += s, o >>= 1
                }
                this.renderer.drawLines(d[0], this.presetTypeMask.emptyColor, null, i - 2 * this.presetTypeMask.borderWidth), this.renderer.drawLines(d[1], this.presetTypeMask.filledColor, null, i - 2 * this.presetTypeMask.borderWidth)
            }
        }, t.prototype.customDraw = function(e) { this.drawPresetTypeMask(e.data) }, e.WorldPoolWindow = o, e.WorldPoolCell = t
    }(window.uiTypes.canvas);
! function(t) {
    var e = function(t, i, n) { e.superclass.constructor.call(this, t, i, n), this.requirements = {} };
    window.generic.extend(e, window.uiTypes.pages.Page), e.id = "settings", e.title = "Settings", e.content = '<div id="' + e.id + '"></div>', e.sectionTemplate = _.template('<div class="settings-section">        <div class="section-title"><span class="content"><%= title%></span></div>        <div class="section-content section-content-js"></div>    </div>'), e.footerTemplate = _.template('<div class="settings_copyright-footer">Copyright &copy 1994-' + (new Date).getFullYear() + " MA Lighting Technology GmbH All rights reserved.<br/>MA Lighting Technology GmbH Dachdeckerstra&szlige 16 97297 Waldb&uumlttelbrunn</div>"), e.prototype.Init = function() {
        e.superclass.Init.call(this);
        for (var t = $(e.sectionTemplate({ title: "Select layout" })), i = $(".section-content-js", t), n = function(t) { this.m_globalSettings.layout = $(t.currentTarget).attr("data-value"), generic.globs.config.activeLayout = $(t.currentTarget).attr("data-value") }.bind(this), o = _.filter(_.map(generic.globs.config.layout, function(t, e) { return "default" === e ? !1 : { value: t.id, text: t.title } }), Boolean), s = 0; s < o.length; s++) o[s].handler = n, o[s].checked = this.m_globalSettings.layout === o[s].value;
        this.$radioButtonGroup = window.uiTypes.controls.RadioButtonGroup.create(o).addClass("radioButtons line"), i.append(this.$radioButtonGroup);
        var a = $(e.footerTemplate());
        this.$page.append(t), this.$page.append(a)
    }, e.prototype.Close = function() { window.uiTypes.controls.RadioButtonGroup.dispose(), e.superclass.Close.call(this) }, t.Settings = e
}(window.uiTypes.pages);
defineNamespace(window, "uiTypes.pages"), defineNamespace(window, "uiTypes.canvas"),
    function(t) {
        var e = window.uiTypes.pages.Page,
            i = function(t, e, s, o) { i.superclass.constructor.call(this, $.createItem({ "class": "canvas-container", html: "<div><canvas></canvas></div>" }), t, e, s, o), isDot2() || (this.kDefaultFilterValue = "All", this.filterCommand = { id: "executorSheetFilters", title: "Filters", change: !0 }, this.m_filters = null), this.m_pageLocalDispatcher = Dispatcher(), this.m_pageLocalDispatcher.actions = { SEQUENCE_EXECUTOR_CHANGED: "sequence_executor_changed" }, this.actions = [{ type: this.m_pageLocalDispatcher.actions.SEQUENCE_EXECUTOR_CHANGED, handler: this.onSequenceExecutorChanged.bind(this) }] };
        window.generic.extend(i, window.uiTypes.pages.CanvasPage), i.prototype.Init = function() { i.superclass.Init.call(this), this.m_pageLocalDispatcher.register(this.actions) }, i.prototype.CreateWindow = function() { this.m_ma2window = new window.uiTypes.canvas.ExecutorSheetWindow(this.canvas, window.CanvasRenderer(this.canvas[0].getContext("2d")), { top: 0, left: 0, width: this.canvas[0].width, height: this.canvas[0].height }, this.m_pageLocalDispatcher), this.m_ma2window.init(), this.m_ma2window.setConfig(generic.globs.config.layout[this.m_globalSettings.layout][this.id]), DataHandlerManager.Register({ name: this.id + "DataHandler", handler: function(t) { return t && t.responseType == Server.requestTypes.executorSheet ? (!this.m_filters && t.filters && (this.m_filters = t.filters, $(this).triggerHandler(e.events.pageButtonsChanged, { buttons: this.CreatePageButtons() }), this.OnResize()), this.m_ma2window.onDataReceived(t)) : !1 }.bind(this) }) }, i.prototype.GetPayloadObject = function() { var t = i.superclass.GetPayloadObject.call(this); return t.requestType = Server.requestTypes.executorSheet, t.cntCols = this.m_ma2window.GetVisibleColsCount() + 1, t.cntRows = this.m_ma2window.GetVisibleRowsCount(), t.offCol = this.m_ma2window.GetDataOffsetX(), t.offRow = this.m_ma2window.GetDataOffsetY(), t.forceAutoScroll = this.m_ma2window.m_forceAutoScroll, this.m_ma2window.hasColumns() || (t.needCols = "1"), t }, i.prototype.onSequenceExecutorChanged = function(t, e) {
            var i = this.title + " E:" + e.executor + ", S: " + e.sequence;
            this.m_dispatcher.trigger({ type: this.m_dispatcher.actions.CHANGE_TITLE, data: i })
        }, i.prototype.CreatePageButtons = function() {
            if (this.pageButtons) return this.pageButtons;
            if (!this.m_filters) return null;
            var t = this.m_ma2window.GetCommandState.bind(this.m_ma2window),
                e = (this.m_ma2window.SetCommandState.bind(this.m_ma2window), [{ value: this.kDefaultFilterValue, text: this.kDefaultFilterValue, "default": !0 }]);
            for (var i in this.m_filters) e.push({ value: i, text: i });
            commands.addCommandType(commands.createCommandType($.extend({}, this.filterCommand, { states: e }))), this.pageButtons = [{
                command: commands.StateCommand(commands.CommandType[this.filterCommand.id], commands.ui.defaultCommandExecute, t, function(t, e) {
                    this.m_ma2window.SetCommandState(t, e);
                    var i = this.m_ma2window.GetCommandState(commands.CommandType[this.filterCommand.id]);
                    i && (this.m_ma2window.setFilter(this.m_filters[i.value], i.value), this.m_ma2window.setFocus({ x: 0 }))
                }.bind(this)),
                uiElement: commands.ui.UIRadioStateButton()
            }];
            var s = t(commands.CommandType[this.filterCommand.id]);
            return this.m_ma2window.setFilter(this.m_filters[s.value], s.value), this.pageButtons.forEach(commands.ui.initCommandUIElementPair), generic.globs.serverCommandManager.addCommands(this.id, this.pageButtons), this.pageButtons
        }, i.prototype.globalSettingsChangeHandler = function(t, e) { "layout" === e.name && this.m_ma2window.setConfig(generic.globs.config.layout[e.newValue][this.id]) }, i.prototype.Close = function() { this.m_dispatcher.trigger({ type: this.m_dispatcher.actions.CHANGE_TITLE, data: this.title }), this.m_pageLocalDispatcher.unregister(this.actions), i.superclass.Close.call(this) }, i.id = "executorSheet", i.title = isDot2() ? "Cues" : "Executor Sheet", i.content = '<div id="' + i.id + '"></div>', t.ExecutorSheet = i
    }(window.uiTypes.pages),
    function(t) {
        var e = function(t, i, s, o) { e.superclass.constructor.call(this, t, i, s, o), $.extend(this.m_defaultSettings, { fontSizeToCellHeightCoef: 5 / 3, fontSizeToCellWidthCoef: 20 / 3, headerSelectedAttributeColor: remoteColors.executorSheet.headerSelectedAttributeColor, headerSelectedPresetColor: remoteColors.executorSheet.headerSelectedPresetColor, headerCellBackgroundColor: remoteColors.executorSheet.headerCellBackgroundColor, cellStrokeStyle: remoteColors.executorSheet.borderColor, cellStrokeStyleAlternative: remoteColors.executorSheet.borderColorAlternative, headerCellStrokeStyle: remoteColors.executorSheet.headerBorderColor, hScrollVisible: !0, vScrollVisible: !0, fixedColumnsCount: 0, titleRows: 1, storage: Storage.AddSection("ExecutorSheet") }), this.m_selectedRows = [], this.m_lastActiveIndex = -1, this.m_selectedHeaderColumn = -1, this.m_columns = null, this.m_filter = null, this.m_filterName = "", this.m_sequence = "", this.m_exec = "" };
        window.generic.extend(e, window.uiTypes.canvas.CanvasGrid), e.prototype.init = function() {
            e.superclass.init.call(this);
            var t = this.m_defaultSettings.storage.Load("offset", { x: 0, y: 0 }),
                i = this.m_defaultSettings.storage.Load("focus", { x: 0, y: 0 });
            this.setOffset(t), this.setFocus(i), this.m_redrawWholeCanvas = !0
        }, e.prototype.onDataReceived = function(t) {
            if (!t || t.responseType != Server.requestTypes.executorSheet) return !1;
            var e = t,
                i = e.cntRows;
            if (void 0 === i) return !1;
            if (e.cols && (this.m_columns = e.cols), !this.m_columns) return void generic.statusLogging("ExecutorSheetWindow.draw - invalid argument 'columns'");
            (this.m_sequence != e.seq || this.m_exec != e.exec) && (this.m_sequence = e.seq, this.m_exec = e.exec, this.m_dispatcher.trigger({ type: this.m_dispatcher.actions.SEQUENCE_EXECUTOR_CHANGED, data: { sequence: this.m_sequence, executor: this.m_exec } })), this.m_filteredColumns = this.m_filter || this.m_columns;
            var s = this.m_filteredColumns.length;
            this.SetColsCount(s), this.SetRowsCount(i), void 0 != e.offRow && e.offRow >= 0 && this.setOffset({ y: e.offRow });
            for (var o = Math.min(s - 1, this.m_containerOffset.x + this.m_focusPos.x), n = Math.min(i - 1, this.m_containerOffset.y + this.m_focusPos.y), r = this.GetVisibleRowsCount(), a = this.GetMaxVisibleColsCount(), l = { x: Math.min(Math.min(s - 1, a - 1) - this.m_defaultSettings.fixedColumnsCount, this.m_focusPos.x), y: Math.min(Math.min(i - 1, r - 1), this.m_focusPos.y) }, h = { x: o - l.x, y: n - l.y }; r + h.y > i && h.y > 0;) --h.y, l.y < i - 1 && ++l.y;
            for (; a + h.x > s && h.x > 0;) --h.x, l.x < s - 1 && ++l.x;
            this.setFocus(l, !0), this.setOffset(h, !0);
            for (var c = [], m = 0; s > m; m++)
                if (c[m] = this.m_containerSettings.cellWidth, "Name" === this.m_filteredColumns[m].n && (c[m] = 2 * this.m_containerSettings.cellWidth), "Info" === this.m_filteredColumns[m].n)
                    if ("tablet" == this.getLayout()) {
                        var d = this.GetContentRect().width,
                            u = Math.max(Math.min(d / 250, 8), 1);
                        c[m] = "Info" == this.m_filterName ? this.m_containerSettings.cellWidth * u : this.m_containerSettings.cellWidth * u
                    } else c[m] = 2 * this.m_containerSettings.cellWidth;
            return c.length > 0 && (c[0] = this.m_containerSettings.cellWidth / 3 * 2), this.m_containerSettings.columnWidth = c, this.m_redrawWholeCanvas = !0, this.m_forceAutoScroll = e.activeI >= 0 && this.m_lastActiveIndex != e.activeI, this.m_lastActiveIndex = e.activeI, this.refresh(e), !0
        }, e.prototype.getLayout = function() { return generic.globs.config.activeLayout || generic.globs.config.layout["default"].id }, e.prototype.refresh = function(t) { e.superclass.refresh.call(this), t && (this.stretch(), this.draw(t), this.drawScrollBars()) }, e.prototype.draw = function(t) {
            var e = Math.min(this.GetVisibleColsCount() + 1 + this.m_defaultSettings.fixedColumnsCount, this.m_filteredColumns.length),
                i = t.rows,
                s = 0,
                o = { rowStart: void 0, rowEnd: void 0 },
                n = 0,
                r = [];
            if (i)
                for (var a = 0; a < i.length; a++) {
                    var l = i[a].cells,
                        h = i[a].prop;
                    h && h.s && (void 0 == o.rowStart && (o.rowStart = a), o.rowEnd = a), n = 0;
                    for (var c = -this.m_defaultSettings.fixedColumnsCount; c < this.m_containerOffset.x + e; c++) {
                        0 == c && (c = this.m_containerOffset.x);
                        var m = c + this.m_defaultSettings.fixedColumnsCount,
                            d = this.m_filteredColumns[m];
                        if (d) {
                            var u = l[d.id] || {},
                                f = c < this.m_containerOffset.x ? 0 : this.m_containerOffset.x,
                                g = this.getColumnWidth(m - f),
                                _ = u.v;
                            "Number" == d.n && void 0 !== o.rowStart && o.rowStart <= a && a <= o.rowEnd && r.push({ rowNumber: parseInt(_), rowIndex: a }), "Name" != d.n && u.pgs && (_ = Math.floor(u.pgs) + "");
                            var C = { offsetX: n, row: a + 1, cellWidth: g, text: _, textColor: u.c || t.c || this.m_defaultSettings.textColor, cellBackgroundColor: u.bC || t.bC || remoteColors.executorSheet.cellBackgroundColor, progressColor: u.pgsC, progressValue: u.pgs, progressPercent: u.pgsProc, inverted: u.inv };
                            C.borderColor = C.cellBackgroundColor != this.m_defaultSettings.cellStrokeStyle ? this.m_defaultSettings.cellStrokeStyle : this.m_defaultSettings.cellStrokeStyleAlternative, c == f + this.m_focusPos.x && a == this.m_focusPos.y ? s = C : this.drawCell(C), n += g
                        }
                    }
                }
            n = 0;
            for (var c = -this.m_defaultSettings.fixedColumnsCount; c < this.m_containerOffset.x + e; c++) {
                0 == c && (c = this.m_containerOffset.x);
                var m = c + this.m_defaultSettings.fixedColumnsCount,
                    d = this.m_filteredColumns[m];
                if (d) {
                    var f = c < this.m_containerOffset.x ? 0 : this.m_containerOffset.x,
                        g = this.getColumnWidth(m - f),
                        S = $.normalizeConsoleString(d ? d.n : ""),
                        w = this.m_defaultSettings.textColor;
                    d.sAtt ? w = this.m_defaultSettings.headerSelectedAttributeColor : d.sPre && (w = this.m_defaultSettings.headerSelectedPresetColor), this.drawCell({ isTitle: !0, offsetX: n, row: 0, cellWidth: g, text: S, textColor: w, cellBackgroundColor: this.m_defaultSettings.headerCellBackgroundColor, borderColor: this.m_defaultSettings.headerCellStrokeStyle }), n += g
                }
            }
            void 0 !== o.rowStart && this.renderer.drawRect({ x: 0, y: (o.rowStart + this.m_defaultSettings.titleRows) * this.m_containerSettings.cellRenderHeight, width: n, height: (o.rowEnd - o.rowStart + this.m_defaultSettings.titleRows) * this.m_containerSettings.cellRenderHeight }, remoteColors.executorSheet.selectedBorderColor, this.m_defaultSettings.frameSize), s && (s.borderColor = this.m_defaultSettings.focusCellBorderColor, this.drawCell(s))
        }, e.prototype.getColumnWidth = function(t) { return t < this.m_defaultSettings.fixedColumnsCount ? 0 > t || this.m_containerSettings.columnWidth.length <= t ? (window.generic.statusLogging("getColumnWidth invalid argument " + t), 0) : this.m_containerSettings.columnWidth[t] : t + this.m_containerOffset.x < 0 || this.m_containerSettings.columnWidth.length <= t + this.m_containerOffset.x ? (window.generic.statusLogging("getColumnWidth invalid argument " + t), 0) : this.m_containerSettings.columnWidth[t + this.m_containerOffset.x] }, e.prototype.drawCell = function(t) {
            var e = this.GetContentRect(),
                i = e.left + t.offsetX,
                s = e.top + t.row * this.m_containerSettings.cellRenderHeight,
                o = { x: i, y: s, width: t.cellWidth, height: this.m_containerSettings.cellRenderHeight };
            if (this.renderer.drawRect(o, t.borderColor, this.m_defaultSettings.frameSize, t.cellBackgroundColor), t.progressColor) {
                var n = o.width * t.progressPercent,
                    r = { x: o.x, y: o.y, width: n, height: o.height };
                t.inverted && (r.x = o.x + o.width - r.width), this.renderer.drawRect(r, null, 0, t.progressColor)
            }
            var a = { x: o.x + this.m_defaultSettings.frameSize, y: o.y + this.m_defaultSettings.frameSize, width: o.width - 2 * this.m_defaultSettings.frameSize, height: o.height - 2 * this.m_defaultSettings.frameSize };
            this.renderer.fillText(a, t.text, { family: this.m_defaultSettings.fontFamily, size: this.m_defaultSettings.cellFontSize }, t.textColor, t.isTitle ? "center" : "left", "middle", !0)
        }, e.prototype.stretch = function() {
            var t = this.GetContentRect(),
                e = parseInt(t.height / this.m_containerSettings.cellHeight),
                i = t.height - e * this.m_containerSettings.cellHeight;
            this.m_containerSettings.cellRenderHeight = this.m_containerSettings.cellHeight + i / e
        }, e.prototype.SelectRange = function(t, e, i, s) {
            if (t) {
                if (this.m_containerSettings.cellRenderHeight <= 0) return;
                var o = Math.ceil(t.startY / this.m_containerSettings.cellRenderHeight) - 2,
                    n = Math.ceil(t.endY / this.m_containerSettings.cellRenderHeight) - 2;
                if (o > n) {
                    var r = o;
                    o = n, n = r
                }
                if (this.m_selectedRows.length = 0, s == window.uiTypes.VerticalDirection.BottomToTop)
                    for (var a = n; a >= o; --a) a >= 0 && a < this.GetRowsCount() && this.m_selectedRows.push(a);
                else
                    for (var a = o; n >= a; ++a) a >= 0 && a < this.GetRowsCount() && this.m_selectedRows.push(a)
            }
            var l = this.GetCellIndicesFromPoint(e);
            this.m_selectedHeaderColumn = -1 == l.row && l.col >= 0 ? l.col : -1
        }, e.prototype.hasColumns = function() { return !!this.m_columns }, e.prototype.setFilter = function(t, e) { this.m_filter = t, this.m_filterName = e }, t.ExecutorSheetWindow = e
    }(window.uiTypes.canvas);
defineNamespace(window, "window.uiTypes.pages"),
    function() {
        var e = window.utilities.hasChanged,
            t = window.utilities.checkAndSet,
            a = Dispatcher(),
            s = { SLIDER_ACTION: "slider_action", EXEC_BUTTON_ACTION: "exec_button_action" },
            o = { none: 0, main: 1, faders: 2, buttons: 3, channels: 4 },
            i = { simple: 0, includeButton0: 1, includeAllButtons: 2 },
            n = { "short": 1, extended: 2 };
        isDot2() && (window.execIconList = [{ Keyword: "EmptyFlash", Image: "images/d2ui_empty_exec_button_flash_up.png" }, { Keyword: "EmptyGo", Image: "images/d2ui_empty_exec_button_go.png" }, { Keyword: "Black", Image: "images/d2ui_render_tools_playback_black.png" }, { Keyword: "DS", Image: "images/d2ui_render_tools_playback_double_rate.png" }, { Keyword: "Flash", Image: "images/d2ui_render_tools_playback_flash.png" }, { Keyword: "Go", Image: "images/d2ui_render_tools_playback_go_forward.png" }, { Keyword: "GoBack", Image: "images/d2ui_render_tools_playback_go_back.png" }, { Keyword: "HS", Image: "images/d2ui_render_tools_playback_half_rate.png" }, { Keyword: "Learn", Image: "images/d2ui_render_tools_playback_learn.png" }, { Keyword: "Off", Image: "images/d2ui_render_tools_playback_off.png" }, { Keyword: "On", Image: "images/d2ui_render_tools_playback_on.png" }, { Keyword: "Pause", Image: "images/d2ui_render_tools_playback_pause.png" }, { Keyword: "Rate1", Image: "images/d2ui_render_tools_playback_rate1.png" }, { Keyword: "Select", Image: "images/d2ui_render_tools_playback_select_fixtures.png" }, { Keyword: "Swap", Image: "images/d2ui_render_tools_playback_swop.png" }, { Keyword: "Temp", Image: "images/d2ui_render_tools_playback_temp.png" }, { Keyword: "Toggle", Image: "images/d2ui_render_tools_playback_toggle.png" }], window.getExecImage = function(e, t, a) {
                if ("Empty" == e && !a) return t ? execIconList[1].Image : execIconList[0].Image;
                if ("Empty" == e && a) return "noLabel";
                for (var s = 0; s < window.execIconList.length; s++)
                    if (window.execIconList[s].Keyword == e) return window.execIconList[s].Image;
                return log("Failed to get Image for the Keyword: " + e), 0
            }),
            function(e) {
                var t = window.timers.GlobalTimers,
                    r = window.uiTypes.pages.Page,
                    d = window.DataHandlerManager,
                    c = function(e, t, a) { c.superclass.constructor.call(this, e, t, a), this.kItemsInBlockCount = isDot2() ? 1 : 5, this.requirements = { noFooter: !0, presetTypeBar: !1, playbacksBar: !0 }, this.pageNavigationModel = {}, isDot2() ? (this.pageNavigationModel[o.faders] = { t: "Fader Wing", v: o.faders, a: !1, itemsType: [o.faders, o.buttons, o.buttons], itemsCount: [22, 22, 22], itemsStep: [8, 8, 8], itemsIndexOffset: [1, 101, 201], pagesCount: 2, pagesStep: [1] }, this.pageNavigationModel[o.buttons] = { t: "Button Wing", v: o.buttons, a: !1, itemsType: [o.buttons, o.buttons, o.buttons, o.buttons, o.buttons, o.buttons], itemsCount: [16, 16, 16, 16, 16, 16], itemsStep: [8, 8, 8, 8, 8, 8], itemsIndexOffset: [301, 401, 501, 601, 701, 801], pagesCount: 2, pagesStep: [1] }) : (this.pageNavigationModel[o.faders] = { t: "Fader", v: o.faders, a: !0, itemsType: [o.faders], itemsCount: [90], itemsStep: [0], itemsIndexOffset: [0], pagesCount: 0, pagesStep: [1] }, this.pageNavigationModel[o.buttons] = { t: "Button", v: o.buttons, a: !1, itemsType: [o.buttons], itemsCount: [90], itemsStep: [0], itemsIndexOffset: [0], pagesCount: 0, pagesStep: [1] }), this.accessDenied = !1, this.__pageSizeChanged_context = null, this.__requestData_context = null, this.__dataResponseReady_context = null, this.__sliderMoved_context = null, this.__buttonPressed_context = null, this.__refresh_context = null, this.__pageInitialized = !1 };
                window.generic.extend(c, r), c.id = "Playbacks", c.title = isDot2() ? "Virtual Playback" : "Playbacks", c.content = '<div id="' + c.id + '" class="playbacks"></div>', c.storage = Storage.AddSection(c.id), c.controls = {}, c.prototype.Init = function() {
                    c.superclass.Init.call(this), this.__dataResponseReady_context || (this.__dataResponseReady_context = this.__dataResponseReady.bind(this), d.Register({ name: this.id + "DataHandler", handler: this.__dataResponseReady_context })), this.__sliderMoved_context || (this.__sliderMoved_context = this.__sliderMoved.bind(this), a.register({ type: s.SLIDER_ACTION, handler: this.__sliderMoved_context })), this.__buttonPressed_context || (this.__buttonPressed_context = this.__buttonPressed.bind(this), a.register({ type: s.EXEC_BUTTON_ACTION, handler: this.__buttonPressed_context })), c.controls.pagesNavigationBar = c.controls.pagesNavigationBar || new window.uiTypes.PlaybacksDataControl(c.storage), this.pagesNavigationBar = c.controls.pagesNavigationBar, this.pagesNavigationBar.setDispatcher(a), this.pagesNavigationBar.init(this.pageNavigationModel), this.pagesNavigationBar.activate(), this.$this.triggerHandler(r.events.optionsPanelChanged, this.pagesNavigationBar); {
                        var e = this.pagesNavigationBar.getMode();
                        this.initWindow(this.pagesNavigationBar.getMode().v || e.v)
                    }
                    this.window.refresh()
                }, c.prototype.initWindow = function(e, t) {
                    if (this.window) {
                        if (t && this.window == c.controls.fallbackWindow) return !1;
                        if (!t) { if (e == o.faders && this.window == c.controls.fadersWindow) return !1; if (e == o.buttons && this.window == c.controls.buttonsWindow) return !1; if (e == o.main && this.window == c.controls.mainWindow) return !1 }
                        this.disposeWindow()
                    }
                    return t ? this.window = c.controls.fallbackWindow = c.controls.fallbackWindow || new window.uiTypes.FallbackWindow(this.$page, this.m_commandLine) : e == o.faders ? this.window = c.controls.fadersWindow = c.controls.fadersWindow || new window.uiTypes.FadersWindow(this.$page, this.m_commandLine) : e == o.buttons && (this.window = c.controls.buttonsWindow = c.controls.buttonsWindow || new window.uiTypes.ButtonsWindow(this.$page, this.m_commandLine)), this.window ? (this.window.setModel(null), this.$window = $(this.window), this.__pageSizeChanged_context || (this.__pageSizeChanged_context = this.__pageSizeChanged.bind(this), this.$window.on(uiTypes.BaseWindow.events.onPageSizeChanged, this.__pageSizeChanged_context)), this.window.setParent(this.$page), this.window.init(), this.__pageInitialized = !1, !0) : (error("Playbacks.initWindow: invalid argument 'mode'"), !1)
                }, c.prototype.disposeWindow = function() { this.__pageSizeChanged_context && (this.$window.off(uiTypes.BaseWindow.events.onPageSizeChanged, this.__pageSizeChanged_context), this.__pageSizeChanged_context = null), this.window && this.window.dispose() }, c.prototype.__sliderMoved = function(e, t) { this.m_commandExecutor.send({ requestType: Server.requestTypes.playbacks_userInput, execIndex: t.execIndex, pageIndex: this.pagesNavigationBar.getPagesData().index, faderValue: t.value, type: 1 }), log("Slider " + t.execIndex + " was moved. Value: " + t.value) }, c.prototype.__buttonPressed = function(e, t) { this.m_commandExecutor.send({ requestType: Server.requestTypes.playbacks_userInput, cmdline: this.m_commandLine.getText(), execIndex: t.execIndex, pageIndex: this.pagesNavigationBar.getPagesData().index, buttonId: t.buttonId, pressed: t.pressed || !1, released: t.released || !1, type: 0 }), log("Button " + t.buttonId + "." + t.execIndex + " pressed") }, c.prototype.__pageSizeChanged = function(e, t) {
                    if (isDot2()) {
                        var a = t.pageSize;
                        t.pageSize = [];
                        for (var s = this.pagesNavigationBar.getMode().itemsType.length, o = 0; s > o; o++) t.pageSize.push(a)
                    }
                    this.pagesNavigationBar.getMode().itemsStep = t.pageSize, this.pagesNavigationBar.setParameters(this.pageNavigationModel, !this.__pageInitialized), this.model && this.window && this.window.setModel(this.model)
                }, c.prototype.__requestData = function() { this.m_commandExecutor.send(this.getPayloadObject()) }, c.prototype.__dataResponseReady = function(e) {
                    if (!e || e.responseType != Server.requestTypes.playbacks) return !1;
                    if (this.window) {
                        this.accessDenied = e.accessDenied;
                        var t = this.pagesNavigationBar.getMode();
                        if (e.accessDenied) return !1;
                        if (t.v == e.responseSubType) {
                            if (this.window.setModel(e), e.itemGroups)
                                for (var a = 0; a < e.itemGroups.length; a++) {
                                    e.itemGroups[a].iExecOff = e.itemGroups[a].iExecOff || 0, e.itemGroups[a].cntPages = e.itemGroups[a].cntPages || 0;
                                    var s = t.itemsIndexOffset[a] != e.itemGroups[a].iExecOff;
                                    t.itemsIndexOffset[a] = e.itemGroups[a].iExecOff, s |= t.pagesCount != e.itemGroups[a].cntPages, t.pagesCount = e.itemGroups[a].cntPages, (s || !this.__pageInitialized) && this.pagesNavigationBar.setParameters(this.pageNavigationModel, !this.__pageInitialized)
                                }
                            this.__pageInitialized = !0
                        }
                    }
                    return !0
                }, c.prototype.getPayloadObject = function() {
                    var e = {};
                    e.requestType = Server.requestTypes.playbacks;
                    var t = this.pagesNavigationBar.getItemsData();
                    e.startIndex = t.index, e.itemsCount = t.count;
                    var a = this.pagesNavigationBar.getPagesData();
                    return e.pageIndex = a.index, e.itemsType = this.pagesNavigationBar.getMode().itemsType, e.view = this.pagesNavigationBar.getMode().v, e.execButtonViewMode = this.window ? this.window.constructor.execButtonViewMode : n["short"], e.buttonsViewMode = i.simple, e
                }, c.prototype.Show = function() { c.superclass.Show.call(this), this.__requestData_context || (this.__requestData_context = this.__requestData.bind(this), t.AddRequestTimerEventHandler(this.__requestData_context)), this.__refresh_context || (this.__refresh_context = this.refresh.bind(this), t.AddRefreshTimerEventHandler(this.__refresh_context)) }, c.prototype.refresh = function() { this.pagesNavigationBar && (this.pagesNavigationBar.refresh(), this.initWindow(this.pagesNavigationBar.getMode().v, this.accessDenied), this.window && this.window.refresh()) }, c.prototype.Close = function() { c.superclass.Close.call(this), this.__requestData_context && (t.RemoveRequestTimerEventHandler(this.__requestData_context), this.__requestData_context = null), this.__dataResponseReady_context && (d.Unregister(this.id + "DataHandler"), this.__dataResponseReady_context = null), this.__sliderMoved_context && (a.unregister({ type: s.SLIDER_ACTION, handler: this.__sliderMoved_context }), this.__sliderMoved_context = null), this.__buttonPressed_context && (a.unregister({ type: s.EXEC_BUTTON_ACTION, handler: this.__buttonPressed_context }), this.__buttonPressed_context = null), this.__refresh_context && (t.RemoveRefreshTimerEventHandler(this.__refresh_context), this.__refresh_context = null), this.disposeWindow(), this.pagesNavigationBar.deactivate() }, e.Playbacks = c
            }(window.uiTypes.pages),
            function(i) {
                var r = (window.timers.GlobalTimers, utilities.math, 10),
                    d = function(e, t) { this.parent = e, this.m_commandLine = t, this.m_defaultSettings = {}, this.$this = $(this) };
                d.events = { onPageSizeChanged: "onPageSizeChanged" }, d.prototype.init = function() { this.onResize_context || (this.onResize_context = this.onResize ? this.onResize.bind(this) : Function.constructor, generic.globs.$window.on("resize", this.onResize_context)) }, d.prototype.setParent = function(e) { this.parent = e }, d.prototype.setModel = function(e) { this.model = e }, d.prototype.onResize = Function.constructor, d.prototype.dispose = function() { generic.globs.$window.off("resize", this.onResize_context), this.onResize_context = null };
                var c = React.createClass({
                        displayName: "ButtonComponent",
                        getInitialState: function() { return this.itemData = {}, { data: this.props.data } },
                        initialized: !1,
                        shouldComponentUpdate: function(t, a) { if (!this.initialized) return this.initialized = !0, !0; var s = e(this.props.data, "s", t.data) || e(this.props.data, "t", t.data) || e(this.props.data, "bdC", t.data) || e(this.props.data, "c", t.data); return s },
                        render: function() { var e = "exec-button"; if (this.props.data.s && (e += " selected"), isDot2()) { var t = window.getExecImage(this.props.data.t); return React.createElement("div", { className: e, ref: "item" }, React.createElement("div", { className: "content" }, React.createElement("img", { className: "execBtnIcon", src: t }))) } return React.createElement("div", { className: e, ref: "item" }, React.createElement("div", { className: "content" }, " ", this.props.data.t, " ")) },
                        componentDidMount: function() {
                            var e = React.findDOMNode(this.refs.item);
                            e.addEventListener(Touch.maTouchDown, this.buttonPressed), e.addEventListener(Touch.maTouchUp, this.buttonPressed)
                        },
                        componentWillUnmount: function() {
                            var e = React.findDOMNode(this.refs.item);
                            e.removeEventListener(Touch.maTouchDown, this.buttonPressed), e.removeEventListener(Touch.maTouchUp, this.buttonPressed)
                        },
                        buttonPressed: function(e) { a.trigger({ type: s.EXEC_BUTTON_ACTION, data: { execIndex: this.props.execIndex, buttonId: this.props.buttonId, pressed: e.type == Touch.maTouchDown, released: e.type == Touch.maTouchUp } }) },
                        componentDidUpdate: function() {
                            var e = this.itemData;
                            if (!isDot2()) {
                                var a = React.findDOMNode(this.refs.item);
                                t(this.props.data, "bdC", e, "borderColor") && (a.style.borderColor = e.borderColor), t(this.props.data, "c", e, "color") && (a.style.color = e.color)
                            }
                        }
                    }),
                    l = React.createClass({
                        displayName: "Button1Component",
                        getInitialState: function() { return this.itemData = {}, this.leftLEDData = {}, this.rightLEDData = {}, { data: this.props.data } },
                        initialized: !1,
                        shouldComponentUpdate: function(t, a) { if (!this.initialized) return this.initialized = !0, !0; var s = e(this.props.data, "s", t.data) || e(this.props.data, "t", t.data) || e(this.props.data, "bdC", t.data) || e(this.props.data, "c", t.data) || e(this.props.data.leftLED, "bC", t.data.leftLED) || e(this.props.data.rightLED, "bC", t.data.rightLED); return s },
                        render: function() { var e = "exec-button"; if (this.props.data.s && (e += " selected"), isDot2()) { var t = window.getExecImage(this.props.data.t, 1); return React.createElement("div", { className: e, ref: "item" }, React.createElement("div", { className: "content" }, React.createElement("img", { className: "execBtnIcon", src: t }))) } return React.createElement("div", { className: e, ref: "item" }, React.createElement("div", { className: "indicator left", ref: "leftLED" }), React.createElement("div", { className: "indicator right", ref: "rightLED" }), React.createElement("div", { className: "content" }, " ", this.props.data.t, " ")) },
                        componentDidMount: function() {
                            var e = React.findDOMNode(this.refs.item);
                            e.addEventListener(Touch.maTouchDown, this.buttonPressed), e.addEventListener(Touch.maTouchUp, this.buttonPressed)
                        },
                        componentWillUnmount: function() {
                            var e = React.findDOMNode(this.refs.item);
                            e.removeEventListener(Touch.maTouchDown, this.buttonPressed), e.removeEventListener(Touch.maTouchUp, this.buttonPressed)
                        },
                        buttonPressed: function(e) { a.trigger({ type: s.EXEC_BUTTON_ACTION, data: { execIndex: this.props.execIndex, buttonId: this.props.buttonId, pressed: e.type == Touch.maTouchDown, released: e.type == Touch.maTouchUp } }) },
                        componentDidUpdate: function() {
                            var e = this.itemData,
                                a = this.leftLEDData,
                                s = this.rightLEDData;
                            if (isDot2()) {
                                var o = React.findDOMNode(this.refs.item);
                                t(this.props.data, "c", e, "color") && "#FFFF00" == e.color && (o.style.backgroundColor = "#808080")
                            } else {
                                var o = React.findDOMNode(this.refs.item);
                                t(this.props.data, "bdC", e, "borderColor") && (o.style.borderColor = e.borderColor), t(this.props.data, "c", e, "color") && (o.style.color = e.color);
                                var i = React.findDOMNode(this.refs.leftLED);
                                t(this.props.data.leftLED, "bC", a, "backgroundColor") && (i.style.backgroundColor = a.backgroundColor);
                                var n = React.findDOMNode(this.refs.rightLED);
                                t(this.props.data.rightLED, "bC", s, "backgroundColor") && (n.style.backgroundColor = s.backgroundColor)
                            }
                        }
                    }),
                    p = React.createClass({
                        displayName: "CueComponent",
                        getInitialState: function() { return this.cueData = {}, this.progressData = {}, { data: this.props.data } },
                        initialized: !1,
                        shouldComponentUpdate: function(t, a) { if (!this.initialized) return this.initialized = !0, !0; if (!this.props.data && !t.data) return !1; if (!this.props.data || !t.data) return !0; var s = e(this.props.data, "t", t.data) || e(this.props.data, "c", t.data) || e(this.props.data, "bC", t.data) || e(this.props.data.pgs, "inv", t.data.pgs) || e(this.props.data.pgs, "v", t.data.pgs) || e(this.props.data.pgs, "bC", t.data.pgs); return s },
                        render: function() { var e = ""; return isDot2() ? (e = this.props.data.t ? this.props.data.t : "", e = -1 != e.search("%") ? "" : e.trim()) : e = this.props.data ? this.props.data.t : "", isDot2() ? React.createElement("div", { className: "cue", ref: "cue" }, React.createElement("div", { className: "content" }, e), React.createElement("div", { className: "progress-bar", ref: "progress" })) : React.createElement("div", { className: "cue", ref: "cue" }, React.createElement("div", { className: "progress-bar", ref: "progress" }), React.createElement("div", { className: "content" }, e)) },
                        componentDidUpdate: function() {
                            this.props.data || (this.cueData = {}, this.progressData = {});
                            var e = this.cueData,
                                a = this.progressData,
                                s = this.props.data || {},
                                o = React.findDOMNode(this.refs.cue);
                            t(s, "c", e, "color") && (o.style.color = e.color), t(s, "bC", e, "backgroundColor") && !isDot2() && (o.style.backgroundColor = e.backgroundColor), s.pgs = s.pgs || {};
                            var i = React.findDOMNode(this.refs.progress);
                            t(s.pgs, "inv", a, "inverted", !1) && $(i).toggleClass("progress-bar-inverted", a.inverted), t(s.pgs, "v", a, "value", 0) && (i.style.width = 100 * (a.inverted ? 1 - a.value : a.value) + "%"), t(s.pgs, "bC", a, "backgroundColor") && (i.style.backgroundColor = a.backgroundColor)
                        }
                    }),
                    h = React.createClass({
                        displayName: "BottomButtonComponent",
                        getInitialState: function() { return this.progressData = {}, { data: this.props.data } },
                        initialized: !1,
                        shouldComponentUpdate: function(e, t) { return this.initialized ? !0 : (this.initialized = !0, !0) },
                        render: function() { var e = this.props.data && this.props.data.n && this.props.data.n.t ? this.props.data.n.t : ""; if (isDot2()) { var t = window.getExecImage(e, 1); return React.createElement("div", { className: "content", rel: "content" }, React.createElement("img", { className: "execBtnIcon", src: t })) } var a = this.props.data.fader ? React.createElement("div", { className: "playbacks_executor-button_bottom-button_fader", ref: "fader" }) : {}; return React.createElement("div", { className: "playbacks_executor-button_bottom-button", ref: "bottomButton" }, a, React.createElement("div", { className: "playbacks_executor-button_bottom-button_content" }, e)) },
                        componentDidUpdate: function() {
                            if (this.refs.fader) {
                                var e = this.progressData,
                                    a = React.findDOMNode(this.refs.fader);
                                t(this.props.data.fader, "v", e, "value", 0) && (a.style.height = 100 * e.value + "%"), t(this.props.data.fader, "bC", e, "backgroundColor") && (a.style.backgroundColor = e.backgroundColor)
                            }
                        }
                    }),
                    u = React.createClass({
                        displayName: "ExecutorButtonComponent",
                        getInitialState: function() { this.itemData = {}; var e = { data: this.props.data } || {}; return e.bdC = "#3D3D3D", e },
                        emptyCuesComponentPart: React.createElement("div", { className: "playbacks_executor-button_cues__empty" }),
                        emptyBottomButtonsComponentPart: function() { if (isDot2()) { var e = window.getExecImage("Empty", 1); return React.createElement("div", { className: "content", rel: "content" }, React.createElement("img", { className: "execBtnIcon", src: e })) } return React.createElement("div", { className: "playbacks_executor-button_bottom-buttons__empty" }) },
                        render: function() {
                            var e = [];
                            if (this.props.data.cues && this.props.data.cues.items && this.props.data.cues.items.length)
                                if (isDot2()) this.props.data.cues.items.length > 1 ? e.push(React.createElement(p, { key: 0, data: this.props.data.cues.items[1] })) : this.props.data.cues.items.length > 0 && e.push(React.createElement(p, { key: 0, data: this.props.data.cues.items[0] }));
                                else
                                    for (var t = 0; t < this.props.data.cues.items.length; t++) e.push(React.createElement(p, { key: t, data: this.props.data.cues.items[t] }));
                            else e = this.emptyCuesComponentPart;
                            var a = "playbacks_executor-button",
                                s = null;
                            if (this.props.execButtonViewMode == n.extended) {
                                isDot2() && (a += " bWing");
                                var o = [];
                                if (this.props.data.bottomButtons && this.props.data.bottomButtons.items)
                                    for (var t = 0; t < this.props.data.bottomButtons.items.length; t++) this.props.data.bottomButtons.items[t] && o.push(React.createElement(h, { key: t, data: this.props.data.bottomButtons.items[t] }));
                                s = React.createElement("div", { className: "playbacks_executor-button_bottom-buttons", ref: "bottomButtons" }, o.length ? o : this.emptyBottomButtonsComponentPart())
                            } else s = {}, a += " playbacks_executor-button__short";
                            if (isDot2()) { var i = this.props.data.tt.t; "Sequ" == i && (i = "Exec"); var r = this.props.data.oType.t; return "!T" == r && (i = "! " + i), this.props.execButtonViewMode == n.extended ? React.createElement("div", { className: a, ref: "executorButton" }, React.createElement("div", { className: "labelContainer", ref: "labelContainer" }, React.createElement("div", { className: "label" }, i), React.createElement("div", { className: "value" }, e)), s) : React.createElement("div", { className: a, ref: "executorButton" }, React.createElement("div", { className: "labelContainer", ref: "labelContainer" }, React.createElement("div", { className: "label" }, i), React.createElement("div", { className: "value" }, e)), s) }
                            return React.createElement("div", { className: a, ref: "executorButton" }, React.createElement("div", { className: "top", ref: "top" }, React.createElement("div", { className: "status" }, React.createElement("div", { className: "status-index", ref: "statusIndex" }, React.createElement("div", { className: "content" }, this.props.data.i.t)), React.createElement("div", { className: "object-type", ref: "objectType" }, React.createElement("div", { className: "content" }, React.createElement("img", { className: "special-symbols", ref: "specialSymbols" }), this.props.data.oType.t)), React.createElement("div", { className: "object-index", ref: "objectIndex" }, React.createElement("div", { className: "content" }, this.props.data.oI.t))), React.createElement("div", { className: "title", ref: "title" }, React.createElement("div", { className: "content" }, this.props.data.tt.t))), React.createElement("div", { className: "cues", ref: "cues" }, e), s)
                        },
                        componentDidUpdate: function() {
                            var e = this.itemData;
                            if (isDot2()) {
                                var a = React.findDOMNode(this.refs.labelContainer);
                                t(this.props.data, "bdC", e, "borderColor") && ("#FFFF80" == e.borderColor ? e.borderColor = this.props.data.isRun ? "#707039" : "#38381C" : "#C0C0C0" == e.borderColor ? e.borderColor = this.props.data.isRun ? "#567701" : "#2B3B00" : "#E8A901" == e.borderColor ? e.borderColor = this.props.data.isRun ? "#775601" : "#3B2B00" : "#80FFFF" == e.borderColor && (e.borderColor = this.props.data.isRun ? "#417F7F" : "#203F3F"), a.style.backgroundColor = e.borderColor)
                            } else {
                                var s = React.findDOMNode(this.refs.top);
                                t(this.props.data, "bC", e, "topBackgroundColor") && (s.style.backgroundColor = e.topBackgroundColor);
                                var o = React.findDOMNode(this.refs.executorButton);
                                t(this.props.data, "bdC", e, "borderColor") && (o.style.borderColor = e.borderColor);
                                var i = React.findDOMNode(this.refs.statusIndex);
                                t(this.props.data.i, "c", e, "statusIndexColor") && (i.style.color = e.statusIndexColor);
                                var n = React.findDOMNode(this.refs.objectType);
                                t(this.props.data.oType, "c", e, "objectTypeColor") && (n.style.color = e.objectTypeColor);
                                var r = React.findDOMNode(this.refs.objectIndex);
                                t(this.props.data.oI, "c", e, "objectIndexColor") && (r.style.color = e.objectIndexColor);
                                var d = React.findDOMNode(this.refs.title);
                                t(this.props.data.tt, "c", e, "titleColor") && (d.style.color = e.titleColor);
                                var c = React.findDOMNode(this.refs.cues);
                                t(this.props.data.cues, "bC", e, "cuesBackgroundColor") && (c.style.backgroundColor = e.cuesBackgroundColor);
                                var l = React.findDOMNode(this.refs.specialSymbols);
                                t(this.props.data, "specialSymbols", e, "specialSymbols") && (this.props.data.specialSymbols ? (l.setAttribute("src", "./images/" + this.props.data.specialSymbols + ".png"), l.style.display = "") : l.style.display = "none")
                            }
                        },
                        componentDidMount: function() {
                            var e = React.findDOMNode(this.refs.executorButton);
                            this.props.viewMode == o.buttons && (e.addEventListener(Touch.maTouchDown, this.buttonPressed), e.addEventListener(Touch.maTouchUp, this.buttonPressed))
                        },
                        componentWillUnmount: function() {
                            var e = React.findDOMNode(this.refs.executorButton);
                            this.props.viewMode == o.buttons && (e.removeEventListener(Touch.maTouchDown, this.buttonPressed), e.removeEventListener(Touch.maTouchUp, this.buttonPressed))
                        },
                        buttonPressed: function(e) {
                            var t = this.props.viewMode == o.buttons || !this.props.commandLine.isEmpty();
                            t && a.trigger({ type: s.EXEC_BUTTON_ACTION, data: { execIndex: this.props.execIndex, buttonId: this.props.buttonId, pressed: e.type == Touch.maTouchDown, released: e.type == Touch.maTouchUp } })
                        }
                    }),
                    m = React.createClass({
                        displayName: "FaderComponent",
                        getInitialState: function() { return this.sliderData = {}, this.itemData = {}, { data: this.props.data } },
                        render: function() { return isDot2() ? React.createElement("div", { className: "fader", ref: "item" }, React.createElement("div", { className: "axe-wrapper" }, React.createElement("div", { className: "axe" }, React.createElement("div", { className: "filler", ref: "filler" })), React.createElement("div", { className: "slider", ref: "slider", "data-value": this.props.data.v, "data-min-value": this.props.data.min, "data-max-value": this.props.data.max }, React.createElement("div", { className: "content" }, this.props.data.vT)))) : React.createElement("div", { className: "fader", ref: "item" }, React.createElement("div", { className: "axe-wrapper" }, React.createElement("div", { className: "axe" }), React.createElement("div", { className: "slider", ref: "slider", "data-value": this.props.data.v, "data-min-value": this.props.data.min, "data-max-value": this.props.data.max }, React.createElement("div", { className: "slider-title" }, React.createElement("div", { className: "content" }, this.props.data.tt)), React.createElement("div", { className: "slider-middle-line" }, React.createElement("div", { className: "content" }, this.props.data.vT))))) },
                        captured: !1,
                        fullHeight: 0,
                        onSliderDown: function(e) { this.captured = !0, this.fullHeight = $(this.refs.slider.getDOMNode()).parent().height(), this.capturedPoint = { x: e.pageX, y: e.pageY }, this.sliderStartValue = this.sliderData.valueInPercents },
                        onSliderMove: function(e) {
                            if (this.captured) {
                                var t = this.capturedPoint.y - e.pageY,
                                    o = t / this.fullHeight * 100 + parseFloat(this.sliderStartValue),
                                    i = Math.min(100, Math.max(0, o)),
                                    n = (this.props.data.max - this.props.data.min) * i / 100 + this.props.data.min;
                                a.trigger({ type: s.SLIDER_ACTION, data: { execIndex: this.props.execIndex, value: n } })
                            }
                        },
                        onSliderUp: function(e) { this.captured && (this.captured = !1, this.capturedPoint = null) },
                        componentDidMount: function() {
                            var e = React.findDOMNode(this.refs.slider);
                            e.addEventListener(Touch.maTouchDown, this.onSliderDown), e.addEventListener(Touch.maTouchUp, this.onSliderUp), this.onSliderMove_throttled = _.throttle(this.onSliderMove, r), e.addEventListener(Touch.maTouchMove, this.onSliderMove_throttled)
                        },
                        componentWillUnmount: function() {
                            var e = React.findDOMNode(this.refs.slider);
                            e.removeEventListener(Touch.maTouchDown, this.onSliderDown), e.removeEventListener(Touch.maTouchUp, this.onSliderUp), e.removeEventListener(Touch.maTouchMove, this.onSliderMove_throttled)
                        },
                        componentDidUpdate: function() {
                            var e = this.sliderData,
                                a = $(this.refs.slider.getDOMNode());
                            if (isDot2()) var s = $(this.refs.filler.getDOMNode());
                            var o = this.props.data.max - this.props.data.min,
                                i = this.props.data.v || 0,
                                n = o ? (100 * i / o).toFixed(1) : 0;
                            t({ valueInPercents: n }, "valueInPercents", e, "valueInPercents", 0) && (a.css("bottom", e.valueInPercents + "%"), s && s.css("height", e.valueInPercents + "%"));
                            var r = this.itemData;
                            if (!isDot2()) {
                                var d = React.findDOMNode(this.refs.item);
                                t(this.props.data, "bdC", r, "borderColor") && (d.style.borderColor = r.borderColor)
                            }
                        }
                    }),
                    g = React.createClass({ displayName: "ExecutorBlockComponent", getInitialState: function() { return { data: this.props.data } }, render: function() { if (!this.props.data) return React.createElement("div", { className: "executor-block" }); var e = {}; return this.props.viewMode == o.faders ? isDot2() ? React.createElement("div", { className: "executor-block" }, React.createElement(m, { data: this.props.data.fader, execIndex: this.props.data.iExec }), React.createElement(l, { data: this.props.data.button1, execIndex: this.props.data.iExec, buttonId: 0 }), React.createElement(c, { data: this.props.data.button2, execIndex: this.props.data.iExec, buttonId: 1 })) : React.createElement("div", { className: "executor-block" }, React.createElement(c, { data: this.props.data.button3, execIndex: this.props.data.iExec, buttonId: 2 }), React.createElement(c, { data: this.props.data.button2, execIndex: this.props.data.iExec, buttonId: 1 }), React.createElement(m, { data: this.props.data.fader, execIndex: this.props.data.iExec }), React.createElement(l, { data: this.props.data.button1, execIndex: this.props.data.iExec, buttonId: 0 })) : this.props.viewMode == o.buttons ? React.createElement("div", { className: "executor-block" }, React.createElement(l, { data: this.props.data.button1, execIndex: this.props.data.iExec, buttonId: 0 })) : React.createElement("div", { className: "executor-block" }, e) } }),
                    f = React.createClass({
                        displayName: "SectionComponent",
                        getInitialState: function() { return { data: this.props.data } },
                        render: function() {
                            var e = this.props.data.iExec,
                                t = [React.createElement(u, { data: this.props.data, viewMode: this.props.viewMode, execButtonViewMode: this.props.execButtonViewMode, execIndex: e, buttonId: 0, commandLine: this.props.commandLine })],
                                a = [];
                            if (this.props.data.executorBlocks) {
                                for (var s = 0; s < this.props.data.combinedItems; s++) {
                                    var o = this.props.data.executorBlocks ? this.props.data.executorBlocks[s] : null;
                                    o.iExec = e + s, a.push(React.createElement(g, { key: s, data: o, viewMode: this.props.viewMode }))
                                }
                                t.push(React.createElement("div", { className: "executor-blocks" }, a))
                            }
                            return React.createElement("div", { className: "playbacks_item-block_section", "data-colspan": this.props.data.combinedItems || 1 }, t)
                        }
                    }),
                    v = React.createClass({
                        displayName: "BlockComponent",
                        getInitialState: function() { return { data: this.props.data } },
                        render: function() {
                            var e = [];
                            if (this.props.data)
                                for (var t = 0; t < this.props.data.length; t++) {
                                    var a = this.props.data[t];
                                    isDot2() ? e.unshift(React.createElement(f, { key: t, data: a, viewMode: this.props.viewMode, execButtonViewMode: this.props.execButtonViewMode, commandLine: this.props.commandLine })) : e.push(React.createElement(f, { key: t, data: a, viewMode: this.props.viewMode, execButtonViewMode: this.props.execButtonViewMode, commandLine: this.props.commandLine }))
                                }
                            return React.createElement("div", { className: "playbacks_item-block", ref: "itemBlock" }, e)
                        }
                    }),
                    b = React.createClass({ displayName: "FWingComponent", getInitialState: function() { return { data: this.props.data } }, render: function() { return React.createElement("div", { className: "playbackWindowWrapper" }, React.createElement(y, { data: this.state.data, execButtonViewMode: "2", commandLine: this.state.commandLine }), React.createElement(w, { data: this.state.data, execButtonViewMode: this.state.execButtonViewMode, commandLine: this.state.commandLine })) } }),
                    w = React.createClass({
                        displayName: "FadersPageComponent",
                        getInitialState: function() { return { data: this.props.data } },
                        componentDidUpdate: function() {
                            if (isDot2() && !this.childsWidthSet) {
                                var e = this.getDOMNode();
                                if (e && e.childNodes[1] && e.childNodes[1].childNodes.length > 0) {
                                    var t = e.childNodes[1].childNodes,
                                        a = t.length;
                                    this.childsCount = a;
                                    for (var s = 0; a > s; s++) t[s].style.maxWidth = 100 / a + "%";
                                    this.childsWidthSet = !0
                                }
                            }
                        },
                        render: function() {
                            var e = [],
                                t = "",
                                a = null;
                            if (this.state.data ? a = this.state.data : this.props.data && (a = this.props.data), a) {
                                var t = a ? a.tt : null,
                                    s = a ? a.itemGroups : null;
                                if (s)
                                    for (var i = 0; i < s.length; i++)
                                        if (s[i] && s[i].items && s[i].items.length && 2 == s[i].itemsType) {
                                            var n = s[i].items;
                                            isDot2() && this.childsWidthSet && this.childsCount != n.length && (this.childsWidthSet = !1);
                                            for (var r = 0; r < n.length; r++) {
                                                var d = n[r];
                                                isDot2() ? e.unshift(React.createElement(v, { key: r, data: d, viewMode: o.faders, execButtonViewMode: this.props.execButtonViewMode, commandLine: this.props.commandLine })) : e.push(React.createElement(v, { key: r, data: d, viewMode: o.faders, execButtonViewMode: this.props.execButtonViewMode, commandLine: this.props.commandLine }))
                                            }
                                            var c = n[0] && n[0][0] && n[0][0].i ? n[0][0].i.t : "?",
                                                l = n[n.length - 1],
                                                p = l ? l[l.length - 1] : null,
                                                h = p && p.i ? p.i.t : c;
                                            isDot2() || (t = "Fader " + a.iPage, a.tt && (t += ' - "' + a.tt + '"'), t += " (" + c + "..." + h + ")")
                                        }
                            }
                            return React.createElement("div", { className: "playbacks_faders" }, React.createElement(E, { title: t }), React.createElement("div", { className: "playbacks_faders-row" }, e))
                        }
                    }),
                    y = React.createClass({
                        displayName: "ButtonsPageComponent",
                        getInitialState: function() { return { data: this.props.data } },
                        componentDidUpdate: function() {
                            if (isDot2() && !this.childsWidthSet) {
                                var e = this.getDOMNode();
                                if (e && e.childNodes[1] && e.childNodes[1].childNodes.length > 0) {
                                    for (var t = e.childNodes[1].childNodes, a = 0; a < t.length; a++) {
                                        var s = t[a].childNodes,
                                            o = s.length;
                                        this.childsCount = o;
                                        for (var i = 0; o > i; i++) s[i].style.maxWidth = 100 / o + "%"
                                    }
                                    this.childsWidthSet = !0
                                }
                            }
                        },
                        render: function() {
                            var e = [],
                                t = "",
                                a = null;
                            if (this.state.data ? a = this.state.data : this.props.data && (a = this.props.data), a) {
                                var s = a ? a.itemGroups : null;
                                if (s)
                                    for (var i = 0; i < s.length; i++)
                                        if (s[i] && s[i].items && s[i].items.length && 3 == s[i].itemsType) {
                                            var n = s[i].items,
                                                r = (a.layout ? a.layout.rowSize : 0) || 1;
                                            isDot2() && (r > n.length && (r = n.length), this.childsWidthSet && this.childsCount != n.length && (this.childsWidthSet = !1));
                                            for (var d = n.length / r, c = 0; d > c; c++) {
                                                for (var l = [], p = 0; r > p; p++) {
                                                    var h = c * r + p;
                                                    isDot2() ? l.unshift(React.createElement(v, { key: h, data: n[h], viewMode: o.buttons, execButtonViewMode: this.props.execButtonViewMode, commandLine: this.props.commandLine })) : l.push(React.createElement(v, { key: h, data: n[h], viewMode: o.buttons, execButtonViewMode: this.props.execButtonViewMode, commandLine: this.props.commandLine }))
                                                }
                                                e.push(isDot2() ? React.createElement("div", { key: "row" + i, className: "playbacks_buttons-grid_row" }, l) : React.createElement("div", { key: "row" + c, className: "playbacks_buttons-grid_row" }, l))
                                            }
                                            var u = n[0] && n[0][0] && n[0][0].i ? n[0][0].i.t : "?",
                                                m = n[n.length - 1],
                                                g = m ? m[m.length - 1] : null,
                                                f = g && g.i ? g.i.t : u;
                                            isDot2() || (t = "Button " + a.iPage + " - ", a.tt && (t += '"' + a.tt + '" '), t += "(" + u + "..." + f + ")")
                                        }
                            }
                            return React.createElement("div", { className: "playbacks_buttons" }, React.createElement(E, { title: t }), React.createElement("div", { className: "playbacks_buttons-grid" }, e))
                        }
                    }),
                    x = React.createClass({
                        displayName: "MainExecPageComponent",
                        getInitialState: function() {
                            return {
                                data: this.props.data
                            }
                        },
                        render: function() {
                            var e = [],
                                t = null;
                            if (this.state.data ? t = this.state.data : this.props.data && (t = this.props.data), t) {
                                var a = t ? t.itemGroups : null;
                                if (a)
                                    for (var s = 0; s < a.length; s++)
                                        if (a[s] && a[s].items && a[s].items.length && 1 == a[s].itemsType) {
                                            { a[s].items }
                                            log("Main!")
                                        }
                            }
                            return React.createElement("div", { className: "playbacks_mainExec" }, React.createElement("div", { className: "playbacks_mainExec-grid" }, e))
                        }
                    }),
                    R = React.createClass({ displayName: "CoreComponent", getInitialState: function() { return { data: this.props.data } }, render: function() { return React.createElement("div", { className: "playbackWindowWrapperMainExec" }, React.createElement("div", { className: "playbackWindowWrapper" }, React.createElement(y, { data: this.state.data, execButtonViewMode: "2", commandLine: this.state.commandLine }), React.createElement(w, { data: this.state.data, execButtonViewMode: this.state.execButtonViewMode, commandLine: this.state.commandLine })), React.createElement(x, { data: this.state.data, execButtonViewMode: this.state.execButtonViewMode, commandLine: this.state.commandLine })) } }),
                    E = React.createClass({ displayName: "PageTitleComponent", getInitialState: function() { return { title: "" } }, render: function() { return React.createElement("div", { className: "playbacks_page_title__small" }, this.props.title) } }),
                    C = React.createClass({ displayName: "FallbackPageComponent", getInitialState: function() { return { data: this.props.data } }, render: function() { return React.createElement("div", { className: "fallback_page playbacks_fallback-page" }, "Insufficient User Rights") } }),
                    N = function(e, t) { N.superclass.constructor.call(this, e, t) };
                window.generic.extend(N, d), N.kItemsInBlockCount = isDot2() ? 1 : 5, N.blockItemWidthRem = 5, N.execButtonViewMode = n["short"], N.prototype.init = function() { N.superclass.init.call(this), this.blocksInRow = 8, this.blocksPerPage = 0, this.pageComponentInstance = isDot2() ? React.render(React.createElement(b, { data: this.model, execButtonViewMode: N.execButtonViewMode, commandLine: this.m_commandLine }), this.parent[0]) : React.render(React.createElement(w, { data: this.model, execButtonViewMode: N.execButtonViewMode, commandLine: this.m_commandLine }), this.parent[0]), this.refreshLayout() }, N.prototype.refresh = function() { this.model && (this.model.layout = this.model.layout || {}, this.model.layout.rowSize = this.blocksInRow), this.pageComponentInstance.setState({ data: this.model, execButtonViewMode: N.execButtonViewMode, commandLine: this.m_commandLine }) }, N.prototype.onResize = function() { N.superclass.onResize.call(this), this.refreshLayout() }, N.prototype.refreshLayout = function() {
                    var e = N.kItemsInBlockCount * N.blockItemWidthRem * utility.getDefaultFontSize(),
                        t = this.parent.width();
                    this.blocksInRow = Math.max(1, Math.floor(t / e)), this.blocksInRow != this.blocksPerPage && (this.blocksPerPage = this.blocksInRow, this.$this.triggerHandler(d.events.onPageSizeChanged, { pageSize: this.blocksPerPage * N.kItemsInBlockCount }))
                }, N.prototype.dispose = function() { N.superclass.dispose.call(this), React.unmountComponentAtNode(this.parent[0]) };
                var I = function(e, t) { I.superclass.constructor.call(this, e, t) };
                window.generic.extend(I, d), I.kItemsInBlockCount = isDot2() ? 1 : 5, I.blockItemWidthRem = 5, I.blockItemHeightRem = 7, I.execButtonViewMode = n.extended, I.prototype.init = function() { I.superclass.init.call(this), this.blocksPerPage = 0, this.blocksInRow = 0, this.blocksInColumn = 0, isDot2() && (this.blocksInColumn = 6), this.pageComponentInstance = React.render(React.createElement(y, { data: this.model, execButtonViewMode: I.execButtonViewMode, commandLine: this.m_commandLine }), this.parent[0]), this.refreshLayout() }, I.prototype.refresh = function() { this.model && (this.model.layout = this.model.layout || {}, this.model.layout.rowSize = this.blocksInRow), this.pageComponentInstance.setState({ data: this.model, execButtonViewMode: I.execButtonViewMode, commandLine: this.m_commandLine }) }, I.prototype.onResize = function() { I.superclass.onResize.call(this), this.refreshLayout() }, I.prototype.refreshLayout = function() {
                    var e = $(".playbacks_page_title__small", this.parent),
                        t = I.kItemsInBlockCount * I.blockItemWidthRem * utility.getDefaultFontSize(),
                        a = this.parent.width();
                    this.blocksInRow = Math.max(1, Math.floor(a / t));
                    var s = I.blockItemHeightRem * utility.getDefaultFontSize(),
                        o = this.parent.height() - e.height();
                    this.blocksInColumn = Math.max(1, Math.floor(o / s));
                    var i;
                    i = isDot2() ? parseInt(this.blocksInRow * this.blocksInColumn / this.blocksInColumn) : this.blocksInRow * this.blocksInColumn, i != this.blocksPerPage && (this.blocksPerPage = i, this.$this.triggerHandler(d.events.onPageSizeChanged, { pageSize: this.blocksPerPage * I.kItemsInBlockCount }))
                }, I.prototype.dispose = function() { I.superclass.dispose.call(this), React.unmountComponentAtNode(this.parent[0]) };
                var D = function(e, t) { D.superclass.constructor.call(this, e, t) };
                window.generic.extend(D, d), D.prototype.init = function() { D.superclass.init.call(this), this.pageComponentInstance = React.render(React.createElement(R, null), this.parent[0]) }, D.prototype.refresh = function() { this.pageComponentInstance.setState({}) }, D.prototype.dispose = function() { D.superclass.dispose.call(this), React.unmountComponentAtNode(this.parent[0]) };
                var k = function(e, t) { k.superclass.constructor.call(this, e, t) };
                window.generic.extend(k, d), k.prototype.init = function() { k.superclass.init.call(this), this.pageComponentInstance = React.render(React.createElement(C, null), this.parent[0]) }, k.prototype.refresh = function() { this.pageComponentInstance.setState({}) }, k.prototype.dispose = function() { k.superclass.dispose.call(this), React.unmountComponentAtNode(this.parent[0]) }, i.BaseWindow = d, i.MainWindow = D, i.FadersWindow = N, i.ButtonsWindow = I, i.FallbackWindow = k
            }(window.uiTypes), defineNamespace(window.uiTypes, "playbacks"), window.uiTypes.playbacks.PlaybacksViewMode = o, window.uiTypes.playbacks.PlaybackButtonsViewMode = i, window.uiTypes.playbacks.PlaybackExecButtonViewMode = n
    }();
//# sourceMappingURL=../js/main.js.map