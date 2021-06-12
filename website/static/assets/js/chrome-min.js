(function () {
  var e,
    f = this;
  function m(a) {
    return void 0 !== a;
  }
  function aa() {}
  function ba(a) {
    a.qa = function () {
      return a.dl ? a.dl : (a.dl = new a());
    };
  }
  function ca(a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if (
          "[object Array]" == c ||
          ("number" == typeof a.length &&
            "undefined" != typeof a.splice &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("splice"))
        )
          return "array";
        if (
          "[object Function]" == c ||
          ("undefined" != typeof a.call &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("call"))
        )
          return "function";
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  }
  function n(a) {
    return "array" == ca(a);
  }
  function da(a) {
    var b = ca(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function q(a) {
    return "string" == typeof a;
  }
  function ea(a) {
    return "number" == typeof a;
  }
  function ga(a) {
    return "function" == ca(a);
  }
  function ha(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function ia(a) {
    return a[ja] || (a[ja] = ++ka);
  }
  var ja = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    ka = 0;
  function la(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ma(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function t(a, b, c) {
    t =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? la
        : ma;
    return t.apply(null, arguments);
  }
  function u(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b);
    };
  }
  var na =
    Date.now ||
    function () {
      return +new Date();
    };
  function w(a, b) {
    var c = a.split("."),
      d = f;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var g; c.length && (g = c.shift()); )
      !c.length && m(b) ? (d[g] = b) : (d = d[g] ? d[g] : (d[g] = {}));
  }
  function y(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.b = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.rr = function (a, c, h) {
      for (
        var k = Array(arguments.length - 2), l = 2;
        l < arguments.length;
        l++
      )
        k[l - 2] = arguments[l];
      return b.prototype[c].apply(a, k);
    };
  }
  function oa(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, oa);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  y(oa, Error);
  oa.prototype.name = "CustomError";
  var A = {};
  function pa(a, b) {
    for (
      var c = a.split("%s"),
        d = "",
        g = Array.prototype.slice.call(arguments, 1);
      g.length && 1 < c.length;

    )
      d += c.shift() + g.shift();
    return d + c.join("%s");
  }
  function qa(a) {
    return a
      .replace(/[\t\r\n ]+/g, " ")
      .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
  }
  var ra = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
      };
  function sa(a) {
    return decodeURIComponent(a.replace(/\+/g, " "));
  }
  function ta(a) {
    if (!ua.test(a)) return a;
    -1 != a.indexOf("&") && (a = a.replace(va, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(wa, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(xa, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(ya, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(za, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(Aa, "&#0;"));
    return a;
  }
  var va = /&/g,
    wa = /</g,
    xa = />/g,
    ya = /"/g,
    za = /'/g,
    Aa = /\x00/g,
    ua = /[\x00&<>"']/;
  function Ba(a) {
    return String(a)
      .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
      .replace(/\x08/g, "\\x08");
  }
  function Ca(a) {
    return Array.prototype.join.call(arguments, "");
  }
  function Da(a, b) {
    for (
      var c = 0,
        d = ra(String(a)).split("."),
        g = ra(String(b)).split("."),
        h = Math.max(d.length, g.length),
        k = 0;
      0 == c && k < h;
      k++
    ) {
      var l = d[k] || "",
        p = g[k] || "",
        r = RegExp("(\\d*)(\\D*)", "g"),
        v = RegExp("(\\d*)(\\D*)", "g");
      do {
        var z = r.exec(l) || ["", "", ""],
          E = v.exec(p) || ["", "", ""];
        if (0 == z[0].length && 0 == E[0].length) break;
        c =
          Ea(
            0 == z[1].length ? 0 : parseInt(z[1], 10),
            0 == E[1].length ? 0 : parseInt(E[1], 10)
          ) ||
          Ea(0 == z[2].length, 0 == E[2].length) ||
          Ea(z[2], E[2]);
      } while (0 == c);
    }
    return c;
  }
  function Ea(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function Fa(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
      return c.toUpperCase();
    });
  }
  function Ga(a) {
    return String(a)
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase();
  }
  function Ha(a) {
    var b = q(void 0) ? Ba(void 0) : "\\s";
    return a.replace(
      new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"),
      function (a, b, g) {
        return b + g.toUpperCase();
      }
    );
  }
  function Ia(a, b) {
    b.unshift(a);
    oa.call(this, pa.apply(null, b));
    b.shift();
  }
  y(Ia, oa);
  Ia.prototype.name = "AssertionError";
  function Ja(a, b) {
    throw new Ia(
      "Failure" + (a ? ": " + a : ""),
      Array.prototype.slice.call(arguments, 1)
    );
  }
  var Ka = Array.prototype.indexOf
      ? function (a, b, c) {
          return Array.prototype.indexOf.call(a, b, c);
        }
      : function (a, b, c) {
          c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
          if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
          for (; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    B = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, g = q(a) ? a.split("") : a, h = 0; h < d; h++)
            h in g && b.call(c, g[h], h, a);
        },
    La = Array.prototype.filter
      ? function (a, b, c) {
          return Array.prototype.filter.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length, g = [], h = 0, k = q(a) ? a.split("") : a, l = 0;
            l < d;
            l++
          )
            if (l in k) {
              var p = k[l];
              b.call(c, p, l, a) && (g[h++] = p);
            }
          return g;
        },
    Ma = Array.prototype.map
      ? function (a, b, c) {
          return Array.prototype.map.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length, g = Array(d), h = q(a) ? a.split("") : a, k = 0;
            k < d;
            k++
          )
            k in h && (g[k] = b.call(c, h[k], k, a));
          return g;
        },
    Na = Array.prototype.every
      ? function (a, b, c) {
          return Array.prototype.every.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, g = q(a) ? a.split("") : a, h = 0; h < d; h++)
            if (h in g && !b.call(c, g[h], h, a)) return !1;
          return !0;
        };
  function Oa(a, b) {
    var c = 0;
    B(
      a,
      function (a, g, h) {
        b.call(void 0, a, g, h) && ++c;
      },
      void 0
    );
    return c;
  }
  function Pa(a, b) {
    return 0 <= Ka(a, b);
  }
  function Qa(a, b) {
    var c = Ka(a, b),
      d;
    (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
    return d;
  }
  function Ra(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments);
  }
  function Sa(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Ta(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (da(d)) {
        var g = a.length || 0,
          h = d.length || 0;
        a.length = g + h;
        for (var k = 0; k < h; k++) a[g + k] = d[k];
      } else a.push(d);
    }
  }
  function Ua(a, b, c, d) {
    Array.prototype.splice.apply(a, Va(arguments, 1));
  }
  function Va(a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  }
  function Wa(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function Xa(a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function Ya(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function Za(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  }
  function $a(a) {
    for (var b in a) return !1;
    return !0;
  }
  function ab(a, b, c) {
    if (null !== a && b in a)
      throw Error('The object already contains the key "' + b + '"');
    a[b] = c;
  }
  function cb(a, b, c) {
    return null !== a && b in a ? a[b] : c;
  }
  var db =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function eb(a, b) {
    for (var c, d, g = 1; g < arguments.length; g++) {
      d = arguments[g];
      for (c in d) a[c] = d[c];
      for (var h = 0; h < db.length; h++)
        (c = db[h]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  A.Rg = {};
  A.Rg.bn = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  A.Rg.Qo = function (a) {
    return !0 === A.Rg.bn[a];
  };
  function fb() {
    this.Og = "";
    this.Ym = gb;
  }
  fb.prototype.Yc = !0;
  fb.prototype.Fb = function () {
    return this.Og;
  };
  fb.prototype.toString = function () {
    return "Const{" + this.Og + "}";
  };
  function hb(a) {
    if (a instanceof fb && a.constructor === fb && a.Ym === gb) return a.Og;
    Ja("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  }
  var gb = {};
  function ib(a) {
    var b = new fb();
    b.Og = a;
    return b;
  }
  function jb() {
    this.Ag = "";
    this.Wm = kb;
  }
  jb.prototype.Yc = !0;
  var kb = {};
  jb.prototype.Fb = function () {
    return this.Ag;
  };
  jb.prototype.toString = function () {
    return "SafeStyle{" + this.Ag + "}";
  };
  function lb(a) {
    if (a instanceof jb && a.constructor === jb && a.Wm === kb) return a.Ag;
    Ja("expected object of type SafeStyle, got '" + a + "'");
    return "type_error:SafeStyle";
  }
  jb.prototype.Od = function (a) {
    this.Ag = a;
    return this;
  };
  var mb = new jb().Od(""),
    nb = /^[-,."'%_!# a-zA-Z0-9]+$/;
  function ob() {
    this.ec = "";
    this.Xm = pb;
  }
  e = ob.prototype;
  e.Yc = !0;
  e.Fb = function () {
    return this.ec;
  };
  e.pi = !0;
  e.Ke = function () {
    return 1;
  };
  e.toString = function () {
    return "SafeUrl{" + this.ec + "}";
  };
  function qb(a) {
    if (a instanceof ob && a.constructor === ob && a.Xm === pb) return a.ec;
    Ja("expected object of type SafeUrl, got '" + a + "'");
    return "type_error:SafeUrl";
  }
  var rb = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
  function sb(a) {
    if (a instanceof ob) return a;
    a = a.Yc ? a.Fb() : String(a);
    rb.test(a) || (a = "about:invalid#zClosurez");
    var b = new ob();
    b.ec = a;
    return b;
  }
  var pb = {};
  function tb() {
    this.Bg = "";
    this.an = ub;
  }
  e = tb.prototype;
  e.Yc = !0;
  e.Fb = function () {
    return this.Bg;
  };
  e.pi = !0;
  e.Ke = function () {
    return 1;
  };
  e.toString = function () {
    return "TrustedResourceUrl{" + this.Bg + "}";
  };
  function wb(a) {
    if (a instanceof tb && a.constructor === tb && a.an === ub) return a.Bg;
    Ja("expected object of type TrustedResourceUrl, got '" + a + "'");
    return "type_error:TrustedResourceUrl";
  }
  var ub = {};
  function xb(a) {
    var b = new tb();
    b.Bg = a;
    return b;
  }
  function yb() {
    this.ec = "";
    this.Vm = Ab;
    this.gk = null;
  }
  e = yb.prototype;
  e.pi = !0;
  e.Ke = function () {
    return this.gk;
  };
  e.Yc = !0;
  e.Fb = function () {
    return this.ec;
  };
  e.toString = function () {
    return "SafeHtml{" + this.ec + "}";
  };
  function Bb(a) {
    if (a instanceof yb && a.constructor === yb && a.Vm === Ab) return a.ec;
    Ja("expected object of type SafeHtml, got '" + a + "'");
    return "type_error:SafeHtml";
  }
  var Cb = /^[a-zA-Z0-9-]+$/,
    Db = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    },
    Eb = {
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      TEMPLATE: !0,
    };
  function Fb(a, b, c) {
    if (!Cb.test(a)) throw Error("Invalid tag name <" + a + ">.");
    if (a.toUpperCase() in Eb)
      throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    return Gb(a, b, c);
  }
  function Hb(a) {
    function b(a) {
      if (n(a)) B(a, b);
      else {
        if (!(a instanceof yb)) {
          var h = null;
          a.pi && (h = a.Ke());
          a = Ib(ta(a.Yc ? a.Fb() : String(a)), h);
        }
        d += Bb(a);
        a = a.Ke();
        0 == c ? (c = a) : 0 != a && c != a && (c = null);
      }
    }
    var c = 0,
      d = "";
    B(arguments, b);
    return Ib(d, c);
  }
  var Ab = {};
  function Ib(a, b) {
    return new yb().Od(a, b);
  }
  yb.prototype.Od = function (a, b) {
    this.ec = a;
    this.gk = b;
    return this;
  };
  function Gb(a, b, c) {
    var d = null,
      g = "<" + a;
    if (b)
      for (var h in b) {
        if (!Cb.test(h)) throw Error('Invalid attribute name "' + h + '".');
        var k = b[h];
        if (null != k) {
          var l,
            p = a;
          l = h;
          if (k instanceof fb) k = hb(k);
          else if ("style" == l.toLowerCase()) {
            if (!ha(k))
              throw Error(
                'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                  typeof k +
                  " given: " +
                  k
              );
            if (!(k instanceof jb)) {
              var p = "",
                r = void 0;
              for (r in k) {
                if (!/^[-_a-zA-Z0-9]+$/.test(r))
                  throw Error("Name allows only [-_a-zA-Z0-9], got: " + r);
                var v = k[r];
                if (null != v) {
                  if (v instanceof fb) v = hb(v);
                  else if (nb.test(v)) {
                    for (var z = !0, E = !0, T = 0; T < v.length; T++) {
                      var H = v.charAt(T);
                      "'" == H && E ? (z = !z) : '"' == H && z && (E = !E);
                    }
                    (z && E) ||
                      (Ja("String value requires balanced quotes, got: " + v),
                      (v = "zClosurez"));
                  } else
                    Ja(
                      "String value allows only [-,.\"'%_!# a-zA-Z0-9], got: " +
                        v
                    ),
                      (v = "zClosurez");
                  p += r + ":" + v + ";";
                }
              }
              k = p ? new jb().Od(p) : mb;
            }
            k = lb(k);
          } else {
            if (/^on/i.test(l))
              throw Error(
                'Attribute "' +
                  l +
                  '" requires goog.string.Const value, "' +
                  k +
                  '" given.'
              );
            if (l.toLowerCase() in Db)
              if (k instanceof tb) k = wb(k);
              else if (k instanceof ob) k = qb(k);
              else if (q(k)) k = sb(k).Fb();
              else
                throw Error(
                  'Attribute "' +
                    l +
                    '" on tag "' +
                    p +
                    '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                    k +
                    '" given.'
                );
          }
          k.Yc && (k = k.Fb());
          l = l + '="' + ta(String(k)) + '"';
          g += " " + l;
        }
      }
    null != c ? n(c) || (c = [c]) : (c = []);
    A.Rg.Qo(a.toLowerCase())
      ? (g += ">")
      : ((d = Hb(c)), (g += ">" + Bb(d) + "</" + a + ">"), (d = d.Ke()));
    (a = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(a) ? 0 : null);
    return Ib(g, d);
  }
  var Jb = Ib("<!DOCTYPE html>", 0),
    Kb = Ib("", 0);
  function Lb(a) {
    if (a.ob && "function" == typeof a.ob) return a.ob();
    if (q(a)) return a.split("");
    if (da(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    return Ya(a);
  }
  function Mb(a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (da(a) || q(a)) B(a, b, c);
    else {
      var d;
      if (a.rc && "function" == typeof a.rc) d = a.rc();
      else if (a.ob && "function" == typeof a.ob) d = void 0;
      else if (da(a) || q(a)) {
        d = [];
        for (var g = a.length, h = 0; h < g; h++) d.push(h);
      } else d = Za(a);
      for (var g = Lb(a), h = g.length, k = 0; k < h; k++)
        b.call(c, g[k], d && d[k], a);
    }
  }
  function Nb() {
    return !0;
  }
  function Ob(a, b) {
    this.Hb = {};
    this.N = [];
    this.aa = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else a && this.addAll(a);
  }
  e = Ob.prototype;
  e.ob = function () {
    Pb(this);
    for (var a = [], b = 0; b < this.N.length; b++) a.push(this.Hb[this.N[b]]);
    return a;
  };
  e.rc = function () {
    Pb(this);
    return this.N.concat();
  };
  e.ze = function (a) {
    return Qb(this.Hb, a);
  };
  e.clear = function () {
    this.Hb = {};
    this.aa = this.N.length = 0;
  };
  e.remove = function (a) {
    return Qb(this.Hb, a)
      ? (delete this.Hb[a],
        this.aa--,
        this.N.length > 2 * this.aa && Pb(this),
        !0)
      : !1;
  };
  function Pb(a) {
    if (a.aa != a.N.length) {
      for (var b = 0, c = 0; b < a.N.length; ) {
        var d = a.N[b];
        Qb(a.Hb, d) && (a.N[c++] = d);
        b++;
      }
      a.N.length = c;
    }
    if (a.aa != a.N.length) {
      for (var g = {}, c = (b = 0); b < a.N.length; )
        (d = a.N[b]), Qb(g, d) || ((a.N[c++] = d), (g[d] = 1)), b++;
      a.N.length = c;
    }
  }
  e.get = function (a, b) {
    return Qb(this.Hb, a) ? this.Hb[a] : b;
  };
  e.set = function (a, b) {
    Qb(this.Hb, a) || (this.aa++, this.N.push(a));
    this.Hb[a] = b;
  };
  e.addAll = function (a) {
    var b;
    a instanceof Ob ? ((b = a.rc()), (a = a.ob())) : ((b = Za(a)), (a = Ya(a)));
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
  };
  e.forEach = function (a, b) {
    for (var c = this.rc(), d = 0; d < c.length; d++) {
      var g = c[d],
        h = this.get(g);
      a.call(b, h, g, this);
    }
  };
  e.clone = function () {
    return new Ob(this);
  };
  function Qb(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var Rb;
  a: {
    var Sb = f.navigator;
    if (Sb) {
      var Tb = Sb.userAgent;
      if (Tb) {
        Rb = Tb;
        break a;
      }
    }
    Rb = "";
  }
  function C(a) {
    return -1 != Rb.indexOf(a);
  }
  function Ub() {
    return C("Opera") || C("OPR");
  }
  function Vb() {
    return (C("Chrome") || C("CriOS")) && !Ub() && !C("Edge");
  }
  function Wb() {
    return C("iPhone") && !C("iPod") && !C("iPad");
  }
  var Xb = Ub(),
    D = C("Trident") || C("MSIE"),
    Yb = C("Edge"),
    F =
      C("Gecko") &&
      !(-1 != Rb.toLowerCase().indexOf("webkit") && !C("Edge")) &&
      !(C("Trident") || C("MSIE")) &&
      !C("Edge"),
    G = -1 != Rb.toLowerCase().indexOf("webkit") && !C("Edge"),
    $b = G && C("Mobile"),
    ac = C("Macintosh"),
    bc = C("Windows"),
    cc = C("Linux") || C("CrOS"),
    dc = C("Android"),
    ec = Wb(),
    fc = C("iPad");
  function gc() {
    var a = Rb;
    if (F) return /rv\:([^\);]+)(\)|;)/.exec(a);
    if (Yb) return /Edge\/([\d\.]+)/.exec(a);
    if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (G) return /WebKit\/(\S+)/.exec(a);
  }
  function hc() {
    var a = f.document;
    return a ? a.documentMode : void 0;
  }
  var ic = (function () {
      if (Xb && f.opera) {
        var a;
        var b = f.opera.version;
        try {
          a = b();
        } catch (c) {
          a = b;
        }
        return a;
      }
      a = "";
      (b = gc()) && (a = b ? b[1] : "");
      return D && ((b = hc()), b > parseFloat(a)) ? String(b) : a;
    })(),
    jc = {};
  function I(a) {
    return jc[a] || (jc[a] = 0 <= Da(ic, a));
  }
  var kc = f.document,
    lc =
      kc && D
        ? hc() || ("CSS1Compat" == kc.compatMode ? parseInt(ic, 10) : 5)
        : void 0;
  function mc(a, b, c, d, g) {
    this.reset(a, b, c, d, g);
  }
  mc.prototype.tk = null;
  var nc = 0;
  mc.prototype.reset = function (a, b, c, d, g) {
    "number" == typeof g || nc++;
    d || na();
    this.Xe = a;
    this.Yo = b;
    delete this.tk;
  };
  mc.prototype.cm = function (a) {
    this.Xe = a;
  };
  function oc(a) {
    this.ul = a;
    this.ja = this.W = this.Xe = this.S = null;
  }
  function pc(a, b) {
    this.name = a;
    this.value = b;
  }
  pc.prototype.toString = function () {
    return this.name;
  };
  var qc = new pc("WARNING", 900),
    rc = new pc("INFO", 800),
    sc = new pc("CONFIG", 700);
  e = oc.prototype;
  e.getName = function () {
    return this.ul;
  };
  e.getParent = function () {
    return this.S;
  };
  e.Vb = function () {
    this.W || (this.W = {});
    return this.W;
  };
  e.cm = function (a) {
    this.Xe = a;
  };
  function tc(a) {
    if (a.Xe) return a.Xe;
    if (a.S) return tc(a.S);
    Ja("Root logger has no level set.");
    return null;
  }
  e.log = function (a, b, c) {
    if (a.value >= tc(this).value)
      for (
        ga(b) && (b = b()),
          a = new mc(a, String(b), this.ul),
          c && (a.tk = c),
          c = "log:" + a.Yo,
          f.console &&
            (f.console.timeStamp
              ? f.console.timeStamp(c)
              : f.console.markTimeline && f.console.markTimeline(c)),
          f.msWriteProfilerMark && f.msWriteProfilerMark(c),
          c = this;
        c;

      ) {
        b = c;
        var d = a;
        if (b.ja) for (var g = 0, h = void 0; (h = b.ja[g]); g++) h(d);
        c = c.getParent();
      }
  };
  e.info = function (a, b) {
    this.log(rc, a, b);
  };
  var uc = {},
    vc = null;
  function wc(a) {
    vc || ((vc = new oc("")), (uc[""] = vc), vc.cm(sc));
    var b;
    if (!(b = uc[a])) {
      b = new oc(a);
      var c = a.lastIndexOf("."),
        d = a.substr(c + 1),
        c = wc(a.substr(0, c));
      c.Vb()[d] = b;
      b.S = c;
      uc[a] = b;
    }
    return b;
  }
  function xc(a, b) {
    a && a.info(b, void 0);
  }
  function K(a, b) {
    this.x = m(a) ? a : 0;
    this.y = m(b) ? b : 0;
  }
  e = K.prototype;
  e.clone = function () {
    return new K(this.x, this.y);
  };
  e.toString = function () {
    return "(" + this.x + ", " + this.y + ")";
  };
  function yc(a, b) {
    return new K(a.x - b.x, a.y - b.y);
  }
  e.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  e.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  e.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  e.translate = function (a, b) {
    a instanceof K
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += a), ea(b) && (this.y += b));
    return this;
  };
  e.scale = function (a, b) {
    var c = ea(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this;
  };
  function zc() {
    0 != Ac && (Cc[ia(this)] = this);
    this.Ab = this.Ab;
    this.gd = this.gd;
  }
  var Ac = 0,
    Cc = {};
  zc.prototype.Ab = !1;
  zc.prototype.Ca = function () {
    if (!this.Ab && ((this.Ab = !0), this.o(), 0 != Ac)) {
      var a = ia(this);
      delete Cc[a];
    }
  };
  function Dc(a, b) {
    var c = u(Ec, b);
    a.Ab
      ? c.call(void 0)
      : (a.gd || (a.gd = []), a.gd.push(m(void 0) ? t(c, void 0) : c));
  }
  zc.prototype.o = function () {
    if (this.gd) for (; this.gd.length; ) this.gd.shift()();
  };
  function Ec(a) {
    a && "function" == typeof a.Ca && a.Ca();
  }
  var Fc = !D || 9 <= lc,
    Gc = !D || 9 <= lc,
    Hc = D && !I("9");
  !G || I("528");
  (F && I("1.9b")) || (D && I("8")) || (Xb && I("9.5")) || (G && I("528"));
  (F && !I("8")) || (D && I("9"));
  function L(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.kd = !1;
    this.Ql = !0;
  }
  L.prototype.stopPropagation = function () {
    this.kd = !0;
  };
  L.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Ql = !1;
  };
  function Ic(a) {
    a.preventDefault();
  }
  function Jc(a) {
    Jc[" "](a);
    return a;
  }
  Jc[" "] = aa;
  function Kc(a, b) {
    L.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode =
      this.keyCode =
      this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
      this.offsetY =
      this.offsetX =
        0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.xg = !1;
    this.Xa = null;
    a && this.ta(a, b);
  }
  y(Kc, L);
  var Lc = [1, 4, 2];
  Kc.prototype.ta = function (a, b) {
    var c = (this.type = a.type),
      d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var g = a.relatedTarget;
    if (g) {
      if (F) {
        var h;
        a: {
          try {
            Jc(g.nodeName);
            h = !0;
            break a;
          } catch (k) {}
          h = !1;
        }
        h || (g = null);
      }
    } else
      "mouseover" == c
        ? (g = a.fromElement)
        : "mouseout" == c && (g = a.toElement);
    this.relatedTarget = g;
    null === d
      ? ((this.offsetX = G || void 0 !== a.offsetX ? a.offsetX : a.layerX),
        (this.offsetY = G || void 0 !== a.offsetY ? a.offsetY : a.layerY),
        (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0))
      : ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0));
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.xg = ac ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.Xa = a;
    a.defaultPrevented && this.preventDefault();
  };
  function Mc(a) {
    return (
      (Fc
        ? 0 == a.Xa.button
        : "click" == a.type
        ? !0
        : !!(a.Xa.button & Lc[0])) && !(G && ac && a.ctrlKey)
    );
  }
  Kc.prototype.stopPropagation = function () {
    Kc.b.stopPropagation.call(this);
    this.Xa.stopPropagation
      ? this.Xa.stopPropagation()
      : (this.Xa.cancelBubble = !0);
  };
  Kc.prototype.preventDefault = function () {
    Kc.b.preventDefault.call(this);
    var a = this.Xa;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), Hc))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  var Nc = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  function Oc(a) {
    return !(!a || !a[Nc]);
  }
  var Pc = 0;
  function Qc(a, b, c, d, g) {
    this.listener = a;
    this.Cg = null;
    this.src = b;
    this.type = c;
    this.xe = !!d;
    this.cg = g;
    this.key = ++Pc;
    this.$d = this.Ff = !1;
  }
  function Rc(a) {
    a.$d = !0;
    a.listener = null;
    a.Cg = null;
    a.src = null;
    a.cg = null;
  }
  function Sc(a) {
    this.src = a;
    this.va = {};
    this.uf = 0;
  }
  e = Sc.prototype;
  e.add = function (a, b, c, d, g) {
    var h = a.toString();
    a = this.va[h];
    a || ((a = this.va[h] = []), this.uf++);
    var k = Tc(a, b, d, g);
    -1 < k
      ? ((b = a[k]), c || (b.Ff = !1))
      : ((b = new Qc(b, this.src, h, !!d, g)), (b.Ff = c), a.push(b));
    return b;
  };
  e.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.va)) return !1;
    var g = this.va[a];
    b = Tc(g, b, c, d);
    return -1 < b
      ? (Rc(g[b]),
        Array.prototype.splice.call(g, b, 1),
        0 == g.length && (delete this.va[a], this.uf--),
        !0)
      : !1;
  };
  function Uc(a, b) {
    var c = b.type;
    c in a.va &&
      Qa(a.va[c], b) &&
      (Rc(b), 0 == a.va[c].length && (delete a.va[c], a.uf--));
  }
  e.fb = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.va)
      if (!a || c == a) {
        for (var d = this.va[c], g = 0; g < d.length; g++) ++b, Rc(d[g]);
        delete this.va[c];
        this.uf--;
      }
    return b;
  };
  e.Me = function (a, b, c, d) {
    a = this.va[a.toString()];
    var g = -1;
    a && (g = Tc(a, b, c, d));
    return -1 < g ? a[g] : null;
  };
  e.hasListener = function (a, b) {
    var c = m(a),
      d = c ? a.toString() : "",
      g = m(b);
    return Xa(this.va, function (a) {
      for (var k = 0; k < a.length; ++k)
        if (!((c && a[k].type != d) || (g && a[k].xe != b))) return !0;
      return !1;
    });
  };
  function Tc(a, b, c, d) {
    for (var g = 0; g < a.length; ++g) {
      var h = a[g];
      if (!h.$d && h.listener == b && h.xe == !!c && h.cg == d) return g;
    }
    return -1;
  }
  var Vc = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Wc = {},
    Xc = 0;
  function M(a, b, c, d, g) {
    if (n(b)) {
      for (var h = 0; h < b.length; h++) M(a, b[h], c, d, g);
      return null;
    }
    c = Yc(c);
    return Oc(a) ? a.j(b, c, d, g) : Zc(a, b, c, !1, d, g);
  }
  function Zc(a, b, c, d, g, h) {
    if (!b) throw Error("Invalid event type");
    var k = !!g,
      l = $c(a);
    l || (a[Vc] = l = new Sc(a));
    c = l.add(b, c, d, g, h);
    if (c.Cg) return c;
    d = ad();
    c.Cg = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) a.addEventListener(b.toString(), d, k);
    else if (a.attachEvent) a.attachEvent(bd(b.toString()), d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    Xc++;
    return c;
  }
  function ad() {
    var a = cd,
      b = Gc
        ? function (c) {
            return a.call(b.src, b.listener, c);
          }
        : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c;
          };
    return b;
  }
  function dd(a, b, c, d, g) {
    if (n(b)) {
      for (var h = 0; h < b.length; h++) dd(a, b[h], c, d, g);
      return null;
    }
    c = Yc(c);
    return Oc(a) ? a.kl(b, c, d, g) : Zc(a, b, c, !0, d, g);
  }
  function ed(a, b, c, d, g) {
    if (n(b)) for (var h = 0; h < b.length; h++) ed(a, b[h], c, d, g);
    else
      (c = Yc(c)),
        Oc(a)
          ? a.la(b, c, d, g)
          : a && (a = $c(a)) && (b = a.Me(b, c, !!d, g)) && fd(b);
  }
  function fd(a) {
    if (!ea(a) && a && !a.$d) {
      var b = a.src;
      if (Oc(b)) Uc(b.Bb, a);
      else {
        var c = a.type,
          d = a.Cg;
        b.removeEventListener
          ? b.removeEventListener(c, d, a.xe)
          : b.detachEvent && b.detachEvent(bd(c), d);
        Xc--;
        (c = $c(b))
          ? (Uc(c, a), 0 == c.uf && ((c.src = null), (b[Vc] = null)))
          : Rc(a);
      }
    }
  }
  function bd(a) {
    return a in Wc ? Wc[a] : (Wc[a] = "on" + a);
  }
  function gd(a, b, c, d) {
    var g = !0;
    if ((a = $c(a)))
      if ((b = a.va[b.toString()]))
        for (b = b.concat(), a = 0; a < b.length; a++) {
          var h = b[a];
          h && h.xe == c && !h.$d && ((h = hd(h, d)), (g = g && !1 !== h));
        }
    return g;
  }
  function hd(a, b) {
    var c = a.listener,
      d = a.cg || a.src;
    a.Ff && fd(a);
    return c.call(d, b);
  }
  function cd(a, b) {
    if (a.$d) return !0;
    if (!Gc) {
      var c;
      if (!(c = b))
        a: {
          c = ["window", "event"];
          for (var d = f, g; (g = c.shift()); )
            if (null != d[g]) d = d[g];
            else {
              c = null;
              break a;
            }
          c = d;
        }
      g = c;
      c = new Kc(g, this);
      d = !0;
      if (!(0 > g.keyCode || void 0 != g.returnValue)) {
        a: {
          var h = !1;
          if (0 == g.keyCode)
            try {
              g.keyCode = -1;
              break a;
            } catch (p) {
              h = !0;
            }
          if (h || void 0 == g.returnValue) g.returnValue = !0;
        }
        g = [];
        for (h = c.currentTarget; h; h = h.parentNode) g.push(h);
        for (var h = a.type, k = g.length - 1; !c.kd && 0 <= k; k--) {
          c.currentTarget = g[k];
          var l = gd(g[k], h, !0, c),
            d = d && l;
        }
        for (k = 0; !c.kd && k < g.length; k++)
          (c.currentTarget = g[k]), (l = gd(g[k], h, !1, c)), (d = d && l);
      }
      return d;
    }
    return hd(a, new Kc(b, this));
  }
  function $c(a) {
    a = a[Vc];
    return a instanceof Sc ? a : null;
  }
  var id = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function Yc(a) {
    if (ga(a)) return a;
    a[id] ||
      (a[id] = function (b) {
        return a.handleEvent(b);
      });
    return a[id];
  }
  function N() {
    zc.call(this);
    this.Bb = new Sc(this);
    this.dn = this;
    this.Si = null;
  }
  y(N, zc);
  N.prototype[Nc] = !0;
  e = N.prototype;
  e.$f = function () {
    return this.Si;
  };
  e.cj = function (a) {
    this.Si = a;
  };
  e.addEventListener = function (a, b, c, d) {
    M(this, a, b, c, d);
  };
  e.removeEventListener = function (a, b, c, d) {
    ed(this, a, b, c, d);
  };
  e.dispatchEvent = function (a) {
    var b,
      c = this.$f();
    if (c) for (b = []; c; c = c.$f()) b.push(c);
    var c = this.dn,
      d = a.type || a;
    if (q(a)) a = new L(a, c);
    else if (a instanceof L) a.target = a.target || c;
    else {
      var g = a;
      a = new L(d, c);
      eb(a, g);
    }
    var g = !0,
      h;
    if (b)
      for (var k = b.length - 1; !a.kd && 0 <= k; k--)
        (h = a.currentTarget = b[k]), (g = jd(h, d, !0, a) && g);
    a.kd ||
      ((h = a.currentTarget = c),
      (g = jd(h, d, !0, a) && g),
      a.kd || (g = jd(h, d, !1, a) && g));
    if (b)
      for (k = 0; !a.kd && k < b.length; k++)
        (h = a.currentTarget = b[k]), (g = jd(h, d, !1, a) && g);
    return g;
  };
  e.o = function () {
    N.b.o.call(this);
    this.Bb && this.Bb.fb(void 0);
    this.Si = null;
  };
  e.j = function (a, b, c, d) {
    return this.Bb.add(String(a), b, !1, c, d);
  };
  e.kl = function (a, b, c, d) {
    return this.Bb.add(String(a), b, !0, c, d);
  };
  e.la = function (a, b, c, d) {
    return this.Bb.remove(String(a), b, c, d);
  };
  function jd(a, b, c, d) {
    b = a.Bb.va[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var g = !0, h = 0; h < b.length; ++h) {
      var k = b[h];
      if (k && !k.$d && k.xe == c) {
        var l = k.listener,
          p = k.cg || k.src;
        k.Ff && Uc(a.Bb, k);
        g = !1 !== l.call(p, d) && g;
      }
    }
    return g && 0 != d.Ql;
  }
  e.Me = function (a, b, c, d) {
    return this.Bb.Me(String(a), b, c, d);
  };
  e.hasListener = function (a, b) {
    return this.Bb.hasListener(m(a) ? String(a) : void 0, b);
  };
  function kd(a, b) {
    N.call(this);
    this.Zc = a || 1;
    this.me = b || f;
    this.qh = t(this.rq, this);
    this.Bi = na();
  }
  y(kd, N);
  e = kd.prototype;
  e.enabled = !1;
  e.w = null;
  e.setInterval = function (a) {
    this.Zc = a;
    this.w && this.enabled
      ? (this.stop(), this.start())
      : this.w && this.stop();
  };
  e.rq = function () {
    if (this.enabled) {
      var a = na() - this.Bi;
      0 < a && a < 0.8 * this.Zc
        ? (this.w = this.me.setTimeout(this.qh, this.Zc - a))
        : (this.w && (this.me.clearTimeout(this.w), (this.w = null)),
          this.dispatchEvent(ld),
          this.enabled &&
            ((this.w = this.me.setTimeout(this.qh, this.Zc)),
            (this.Bi = na())));
    }
  };
  e.start = function () {
    this.enabled = !0;
    this.w ||
      ((this.w = this.me.setTimeout(this.qh, this.Zc)), (this.Bi = na()));
  };
  e.stop = function () {
    this.enabled = !1;
    this.w && (this.me.clearTimeout(this.w), (this.w = null));
  };
  e.o = function () {
    kd.b.o.call(this);
    this.stop();
    delete this.me;
  };
  var ld = "tick";
  function md(a, b, c) {
    if (ga(a)) c && (a = t(a, c));
    else if (a && "function" == typeof a.handleEvent) a = t(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : f.setTimeout(a, b || 0);
  }
  function nd(a) {
    f.clearTimeout(a);
  }
  function od(a, b, c) {
    zc.call(this);
    this.Ci = a;
    this.Zc = b || 0;
    this.ra = c;
    this.Gf = t(this.Gn, this);
  }
  y(od, zc);
  e = od.prototype;
  e.ab = 0;
  e.o = function () {
    od.b.o.call(this);
    this.stop();
    delete this.Ci;
    delete this.ra;
  };
  e.start = function (a) {
    this.stop();
    this.ab = md(this.Gf, m(a) ? a : this.Zc);
  };
  e.stop = function () {
    this.$c() && nd(this.ab);
    this.ab = 0;
  };
  e.$c = function () {
    return 0 != this.ab;
  };
  e.Gn = function () {
    this.ab = 0;
    this.Ci && this.Ci.call(this.ra);
  };
  A.h = {};
  A.h.vd = !1;
  A.h.get = function (a) {
    if (A.h.vd || a.classList) return a.classList;
    a = a.className;
    return (q(a) && a.match(/\S+/g)) || [];
  };
  A.h.set = function (a, b) {
    a.className = b;
  };
  A.h.contains = function (a, b) {
    return A.h.vd || a.classList ? a.classList.contains(b) : Pa(A.h.get(a), b);
  };
  A.h.add = function (a, b) {
    A.h.vd || a.classList
      ? a.classList.add(b)
      : A.h.contains(a, b) ||
        (a.className += 0 < a.className.length ? " " + b : b);
  };
  A.h.addAll = function (a, b) {
    if (A.h.vd || a.classList)
      B(b, function (b) {
        A.h.add(a, b);
      });
    else {
      var c = {};
      B(A.h.get(a), function (a) {
        c[a] = !0;
      });
      B(b, function (a) {
        c[a] = !0;
      });
      a.className = "";
      for (var d in c) a.className += 0 < a.className.length ? " " + d : d;
    }
  };
  A.h.remove = function (a, b) {
    A.h.vd || a.classList
      ? a.classList.remove(b)
      : A.h.contains(a, b) &&
        (a.className = La(A.h.get(a), function (a) {
          return a != b;
        }).join(" "));
  };
  A.h.fb = function (a, b) {
    A.h.vd || a.classList
      ? B(b, function (b) {
          A.h.remove(a, b);
        })
      : (a.className = La(A.h.get(a), function (a) {
          return !Pa(b, a);
        }).join(" "));
  };
  A.h.enable = function (a, b, c) {
    c ? A.h.add(a, b) : A.h.remove(a, b);
  };
  A.h.Nn = function (a, b, c) {
    (c ? A.h.addAll : A.h.fb)(a, b);
  };
  A.h.je = function (a, b, c) {
    return A.h.contains(a, b) ? (A.h.remove(a, b), A.h.add(a, c), !0) : !1;
  };
  A.h.toggle = function (a, b) {
    var c = !A.h.contains(a, b);
    A.h.enable(a, b, c);
    return c;
  };
  A.h.gh = function (a, b, c) {
    A.h.remove(a, b);
    A.h.add(a, c);
  };
  function pd(a, b, c, d, g) {
    if (!(D || Yb || (G && I("525")))) return !0;
    if (ac && g) return qd(a);
    if (g && !d) return !1;
    ea(b) && (b = rd(b));
    if (!c && (17 == b || 18 == b || (ac && 91 == b))) return !1;
    if ((G || Yb) && d && c)
      switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
          return !1;
      }
    if (D && d && b == a) return !1;
    switch (a) {
      case 13:
        return !0;
      case 27:
        return !(G || Yb);
    }
    return qd(a);
  }
  function qd(a) {
    if (
      (48 <= a && 57 >= a) ||
      (96 <= a && 106 >= a) ||
      (65 <= a && 90 >= a) ||
      ((G || Yb) && 0 == a)
    )
      return !0;
    switch (a) {
      case 32:
      case 43:
      case 63:
      case 64:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
        return !0;
      default:
        return !1;
    }
  }
  function rd(a) {
    if (F) a = vd(a);
    else if (ac && G)
      a: switch (a) {
        case 93:
          a = 91;
          break a;
      }
    return a;
  }
  function vd(a) {
    switch (a) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 173:
        return 189;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return a;
    }
  }
  function wd(a, b) {
    N.call(this);
    a && xd(this, a, b);
  }
  y(wd, N);
  e = wd.prototype;
  e.f = null;
  e.hg = null;
  e.zi = null;
  e.ig = null;
  e.Va = -1;
  e.xc = -1;
  e.ih = !1;
  var yd = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45,
    },
    zd = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45,
    },
    Ad = D || Yb || (G && I("525")),
    Bd = ac && F;
  e = wd.prototype;
  e.no = function (a) {
    if (G || Yb)
      if (
        (17 == this.Va && !a.ctrlKey) ||
        (18 == this.Va && !a.altKey) ||
        (ac && 91 == this.Va && !a.metaKey)
      )
        this.xc = this.Va = -1;
    -1 == this.Va &&
      (a.ctrlKey && 17 != a.keyCode
        ? (this.Va = 17)
        : a.altKey && 18 != a.keyCode
        ? (this.Va = 18)
        : a.metaKey && 91 != a.keyCode && (this.Va = 91));
    Ad && !pd(a.keyCode, this.Va, a.shiftKey, a.ctrlKey, a.altKey)
      ? this.handleEvent(a)
      : ((this.xc = rd(a.keyCode)), Bd && (this.ih = a.altKey));
  };
  e.oo = function (a) {
    this.xc = this.Va = -1;
    this.ih = a.altKey;
  };
  e.handleEvent = function (a) {
    var b = a.Xa,
      c,
      d,
      g = b.altKey;
    D && "keypress" == a.type
      ? ((c = this.xc), (d = 13 != c && 27 != c ? b.keyCode : 0))
      : (G || Yb) && "keypress" == a.type
      ? ((c = this.xc),
        (d = 0 <= b.charCode && 63232 > b.charCode && qd(c) ? b.charCode : 0))
      : Xb && !G
      ? ((c = this.xc), (d = qd(c) ? b.keyCode : 0))
      : ((c = b.keyCode || this.xc),
        (d = b.charCode || 0),
        Bd && (g = this.ih),
        ac && 63 == d && 224 == c && (c = 191));
    var h = (c = rd(c)),
      k = b.keyIdentifier;
    c
      ? 63232 <= c && c in yd
        ? (h = yd[c])
        : 25 == c && a.shiftKey && (h = 9)
      : k && k in zd && (h = zd[k]);
    a = h == this.Va;
    this.Va = h;
    b = new Cd(h, d, a, b);
    b.altKey = g;
    this.dispatchEvent(b);
  };
  e.a = function () {
    return this.f;
  };
  function xd(a, b, c) {
    a.ig && a.detach();
    a.f = b;
    a.hg = M(a.f, "keypress", a, c);
    a.zi = M(a.f, "keydown", a.no, c, a);
    a.ig = M(a.f, "keyup", a.oo, c, a);
  }
  e.detach = function () {
    this.hg &&
      (fd(this.hg),
      fd(this.zi),
      fd(this.ig),
      (this.ig = this.zi = this.hg = null));
    this.f = null;
    this.xc = this.Va = -1;
  };
  e.o = function () {
    wd.b.o.call(this);
    this.detach();
  };
  function Cd(a, b, c, d) {
    Kc.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c;
  }
  y(Cd, Kc);
  var Dd = !D || 9 <= lc,
    Ed = (!F && !D) || (D && 9 <= lc) || (F && I("1.9.1")),
    Fd = D && !I("9"),
    Gd = D || Xb || G;
  A.L = {};
  A.L.Fr = function (a, b, c) {
    a.insertAdjacentHTML(b, Bb(c));
  };
  A.L.qd = function (a, b) {
    a.innerHTML = Bb(b);
  };
  A.L.Tr = function (a, b) {
    a.outerHTML = Bb(b);
  };
  A.L.Sf = function (a, b) {
    a.write(Bb(b));
  };
  A.L.Mr = function (a, b) {
    var c;
    c = b instanceof ob ? b : sb(b);
    a.href = qb(c);
  };
  A.L.Nr = function (a, b) {
    a.src = wb(b);
  };
  A.L.Or = function (a, b) {
    a.src = wb(b);
  };
  A.L.Pr = function (a, b) {
    a.src = wb(b);
  };
  A.L.Qr = function (a, b, c) {
    a.rel = c;
    a.href =
      -1 != c.toLowerCase().indexOf("stylesheet")
        ? wb(b)
        : b instanceof tb
        ? wb(b)
        : b instanceof ob
        ? qb(b)
        : sb(b).Fb();
  };
  A.L.Sr = function (a, b) {
    a.data = wb(b);
  };
  A.L.Ur = function (a, b) {
    a.src = wb(b);
  };
  A.L.Rr = function (a, b) {
    var c;
    c = b instanceof ob ? b : sb(b);
    a.href = qb(c);
  };
  A.L.Jr = function (a, b, c, d, g) {
    a = a instanceof ob ? a : sb(a);
    return (b || window).open(qb(a), c ? hb(c) : "", d, g);
  };
  function Hd(a, b) {
    this.width = a;
    this.height = b;
  }
  e = Hd.prototype;
  e.clone = function () {
    return new Hd(this.width, this.height);
  };
  e.toString = function () {
    return "(" + this.width + " x " + this.height + ")";
  };
  e.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  e.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  e.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  e.scale = function (a, b) {
    var c = ea(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this;
  };
  A.Pm = !1;
  A.uj = !1;
  A.Rm = A.Pm || A.uj;
  A.i = function (a) {
    return a ? new Id(A.P(a)) : A.zn || (A.zn = new Id());
  };
  A.F = function () {
    return document;
  };
  A.a = function (a) {
    return A.Sh(document, a);
  };
  A.Sh = function (a, b) {
    return q(b) ? a.getElementById(b) : b;
  };
  A.Yn = function (a) {
    return A.Rk(document, a);
  };
  A.Rk = function (a, b) {
    return A.Sh(a, b);
  };
  A.Mm = A.a;
  A.l = function (a, b, c) {
    return A.Xf(document, a, b, c);
  };
  A.B = function (a, b) {
    var c = b || document;
    return A.rh(c) ? c.querySelectorAll("." + a) : A.Xf(document, "*", a, b);
  };
  A.ia = function (a, b) {
    var c = b || document,
      d = null;
    return (
      (d = c.getElementsByClassName
        ? c.getElementsByClassName(a)[0]
        : A.rh(c)
        ? c.querySelector("." + a)
        : A.Xf(document, "*", a, b)[0]) || null
    );
  };
  A.Xh = function (a, b) {
    return A.ia(a, b);
  };
  A.rh = function (a) {
    return !(!a.querySelectorAll || !a.querySelector);
  };
  A.Xf = function (a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? b.toUpperCase() : "";
    if (A.rh(a) && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c);
      if (b) {
        d = {};
        for (var g = 0, h = 0, k; (k = a[h]); h++)
          b == k.nodeName && (d[g++] = k);
        d.length = g;
        return d;
      }
      return a;
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
      d = {};
      for (h = g = 0; (k = a[h]); h++)
        (b = k.className),
          "function" == typeof b.split && Pa(b.split(/\s+/), c) && (d[g++] = k);
      d.length = g;
      return d;
    }
    return a;
  };
  A.Nm = A.l;
  A.Jg = function (a, b) {
    Wa(b, function (b, d) {
      "style" == d
        ? (a.style.cssText = b)
        : "class" == d
        ? (a.className = b)
        : "for" == d
        ? (a.htmlFor = b)
        : A.wj.hasOwnProperty(d)
        ? a.setAttribute(A.wj[d], b)
        : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
        ? a.setAttribute(d, b)
        : (a[d] = b);
    });
  };
  A.wj = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width",
  };
  A.Da = function (a) {
    return A.Tk(a || window);
  };
  A.Tk = function (a) {
    a = a.document;
    a = A.Ve(a) ? a.documentElement : a.body;
    return new Hd(a.clientWidth, a.clientHeight);
  };
  A.Un = function () {
    return A.Ek(window);
  };
  A.Ek = function (a) {
    var b = a.document,
      c = 0;
    if (b) {
      var c = b.body,
        d = b.documentElement;
      if (!d || !c) return 0;
      a = A.Tk(a).height;
      if (A.Ve(b) && d.scrollHeight)
        c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
      else {
        var b = d.scrollHeight,
          g = d.offsetHeight;
        d.clientHeight != g && ((b = c.scrollHeight), (g = c.offsetHeight));
        c = b > a ? (b > g ? b : g) : b < g ? b : g;
      }
    }
    return c;
  };
  A.xr = function (a) {
    return A.i((a || f || window).document).Ua();
  };
  A.Ua = function () {
    return A.Fk(document);
  };
  A.Fk = function (a) {
    var b = A.Rh(a);
    a = A.ai(a);
    return D && I("10") && a.pageYOffset != b.scrollTop
      ? new K(b.scrollLeft, b.scrollTop)
      : new K(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
  };
  A.Uc = function () {
    return A.Rh(document);
  };
  A.Rh = function (a) {
    return a.scrollingElement
      ? a.scrollingElement
      : !G && A.Ve(a)
      ? a.documentElement
      : a.body || a.documentElement;
  };
  A.Ea = function (a) {
    return a ? A.ai(a) : window;
  };
  A.ai = function (a) {
    return a.parentWindow || a.defaultView;
  };
  A.g = function (a, b, c) {
    return A.ak(document, arguments);
  };
  A.ak = function (a, b) {
    var c = b[0],
      d = b[1];
    if (!Dd && d && (d.name || d.type)) {
      c = ["<", c];
      d.name && c.push(' name="', ta(d.name), '"');
      if (d.type) {
        c.push(' type="', ta(d.type), '"');
        var g = {};
        eb(g, d);
        delete g.type;
        d = g;
      }
      c.push(">");
      c = c.join("");
    }
    c = a.createElement(c);
    d &&
      (q(d)
        ? (c.className = d)
        : n(d)
        ? (c.className = d.join(" "))
        : A.Jg(c, d));
    2 < b.length && A.Ej(a, c, b, 2);
    return c;
  };
  A.Ej = function (a, b, c, d) {
    function g(c) {
      c && b.appendChild(q(c) ? a.createTextNode(c) : c);
    }
    for (; d < c.length; d++) {
      var h = c[d];
      da(h) && !A.vi(h) ? B(A.wi(h) ? Sa(h) : h, g) : g(h);
    }
  };
  A.Om = A.g;
  A.createElement = function (a) {
    return document.createElement(a);
  };
  A.createTextNode = function (a) {
    return document.createTextNode(String(a));
  };
  A.vn = function (a, b, c) {
    return A.bk(document, a, b, !!c);
  };
  A.bk = function (a, b, c, d) {
    for (
      var g = a.createElement("TABLE"),
        h = g.appendChild(a.createElement("TBODY")),
        k = 0;
      k < b;
      k++
    ) {
      for (var l = a.createElement("TR"), p = 0; p < c; p++) {
        var r = a.createElement("TD");
        d && A.Lg(r, "\u00a0");
        l.appendChild(r);
      }
      h.appendChild(l);
    }
    return g;
  };
  A.Np = function (a) {
    return A.Rl(document, a);
  };
  A.Rl = function (a, b) {
    var c = a.createElement("DIV");
    D
      ? (A.L.qd(c, Hb(Fb("br"), b)), c.removeChild(c.firstChild))
      : A.L.qd(c, b);
    return A.Rj(a, c);
  };
  A.Go = function (a) {
    return A.$k(document, a);
  };
  A.$k = function (a, b) {
    var c = a.createElement("DIV");
    D
      ? ((c.innerHTML = "<br>" + b), c.removeChild(c.firstChild))
      : (c.innerHTML = b);
    return A.Rj(a, c);
  };
  A.Rj = function (a, b) {
    if (1 == b.childNodes.length) return b.removeChild(b.firstChild);
    for (var c = a.createDocumentFragment(); b.firstChild; )
      c.appendChild(b.firstChild);
    return c;
  };
  A.eg = function () {
    return A.Ve(document);
  };
  A.Ve = function (a) {
    return A.Rm ? A.uj : "CSS1Compat" == a.compatMode;
  };
  A.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  A.appendChild = function (a, b) {
    a.appendChild(b);
  };
  A.append = function (a, b) {
    A.Ej(A.P(a), a, arguments, 1);
  };
  A.md = function (a) {
    for (var b; (b = a.firstChild); ) a.removeChild(b);
  };
  A.Qd = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b);
  };
  A.ti = function (a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
  };
  A.cl = function (a, b, c) {
    a.insertBefore(b, a.childNodes[c] || null);
  };
  A.removeNode = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  };
  A.Ml = function (a, b) {
    var c = b.parentNode;
    c && c.replaceChild(a, b);
  };
  A.zk = function (a) {
    var b,
      c = a.parentNode;
    if (c && 11 != c.nodeType) {
      if (a.removeNode) return a.removeNode(!1);
      for (; (b = a.firstChild); ) c.insertBefore(b, a);
      return A.removeNode(a);
    }
  };
  A.Vb = function (a) {
    return Ed && void 0 != a.children
      ? a.children
      : La(a.childNodes, function (a) {
          return 1 == a.nodeType;
        });
  };
  A.Eb = function (a) {
    return m(a.firstElementChild)
      ? a.firstElementChild
      : A.Zf(a.firstChild, !0);
  };
  A.Uh = function (a) {
    return m(a.lastElementChild) ? a.lastElementChild : A.Zf(a.lastChild, !1);
  };
  A.Vh = function (a) {
    return m(a.nextElementSibling)
      ? a.nextElementSibling
      : A.Zf(a.nextSibling, !0);
  };
  A.Ok = function (a) {
    return m(a.previousElementSibling)
      ? a.previousElementSibling
      : A.Zf(a.previousSibling, !1);
  };
  A.Zf = function (a, b) {
    for (; a && 1 != a.nodeType; ) a = b ? a.nextSibling : a.previousSibling;
    return a;
  };
  A.Jk = function (a) {
    if (!a) return null;
    if (a.firstChild) return a.firstChild;
    for (; a && !a.nextSibling; ) a = a.parentNode;
    return a ? a.nextSibling : null;
  };
  A.Pk = function (a) {
    if (!a) return null;
    if (!a.previousSibling) return a.parentNode;
    for (a = a.previousSibling; a && a.lastChild; ) a = a.lastChild;
    return a;
  };
  A.vi = function (a) {
    return ha(a) && 0 < a.nodeType;
  };
  A.ad = function (a) {
    return ha(a) && 1 == a.nodeType;
  };
  A.hl = function (a) {
    return ha(a) && a.window == a;
  };
  A.Wh = function (a) {
    var b;
    if (
      Gd &&
      !(D && I("9") && !I("10") && f.SVGElement && a instanceof f.SVGElement) &&
      (b = a.parentElement)
    )
      return b;
    b = a.parentNode;
    return A.ad(b) ? b : null;
  };
  A.contains = function (a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  A.Vj = function (a, b) {
    if (a == b) return 0;
    if (a.compareDocumentPosition)
      return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    if (D && !(9 <= lc)) {
      if (9 == a.nodeType) return -1;
      if (9 == b.nodeType) return 1;
    }
    if ("sourceIndex" in a || (a.parentNode && "sourceIndex" in a.parentNode)) {
      var c = 1 == a.nodeType,
        d = 1 == b.nodeType;
      if (c && d) return a.sourceIndex - b.sourceIndex;
      var g = a.parentNode,
        h = b.parentNode;
      return g == h
        ? A.Xj(a, b)
        : !c && A.contains(g, b)
        ? -1 * A.Wj(a, b)
        : !d && A.contains(h, a)
        ? A.Wj(b, a)
        : (c ? a.sourceIndex : g.sourceIndex) -
          (d ? b.sourceIndex : h.sourceIndex);
    }
    d = A.P(a);
    c = d.createRange();
    c.selectNode(a);
    c.collapse(!0);
    d = d.createRange();
    d.selectNode(b);
    d.collapse(!0);
    return c.compareBoundaryPoints(f.Range.START_TO_END, d);
  };
  A.Wj = function (a, b) {
    var c = a.parentNode;
    if (c == b) return -1;
    for (var d = b; d.parentNode != c; ) d = d.parentNode;
    return A.Xj(d, a);
  };
  A.Xj = function (a, b) {
    for (var c = b; (c = c.previousSibling); ) if (c == a) return -1;
    return 1;
  };
  A.vk = function (a) {
    var b,
      c = arguments.length;
    if (!c) return null;
    if (1 == c) return arguments[0];
    var d = [],
      g = Infinity;
    for (b = 0; b < c; b++) {
      for (var h = [], k = arguments[b]; k; ) h.unshift(k), (k = k.parentNode);
      d.push(h);
      g = Math.min(g, h.length);
    }
    h = null;
    for (b = 0; b < g; b++) {
      for (var k = d[0][b], l = 1; l < c; l++) if (k != d[l][b]) return h;
      h = k;
    }
    return h;
  };
  A.P = function (a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  };
  A.Jd = function (a) {
    return a.contentDocument || a.contentWindow.document;
  };
  A.Hk = function (a) {
    return a.contentWindow || A.Ea(A.Jd(a));
  };
  A.Lg = function (a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
      for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
      a.firstChild.data = b;
    } else {
      A.md(a);
      var c = A.P(a);
      a.appendChild(c.createTextNode(String(b)));
    }
  };
  A.Nk = function (a) {
    if ("outerHTML" in a) return a.outerHTML;
    var b = A.P(a).createElement("DIV");
    b.appendChild(a.cloneNode(!0));
    return b.innerHTML;
  };
  A.wk = function (a, b) {
    var c = [];
    return A.Lh(a, b, c, !0) ? c[0] : void 0;
  };
  A.xk = function (a, b) {
    var c = [];
    A.Lh(a, b, c, !1);
    return c;
  };
  A.Lh = function (a, b, c, d) {
    if (null != a)
      for (a = a.firstChild; a; ) {
        if ((b(a) && (c.push(a), d)) || A.Lh(a, b, c, d)) return !0;
        a = a.nextSibling;
      }
    return !1;
  };
  A.yj = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 };
  A.vf = { IMG: " ", BR: "\n" };
  A.bd = function (a) {
    return A.Xk(a) && A.gl(a);
  };
  A.Fc = function (a, b) {
    b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute("tabIndex"));
  };
  A.qb = function (a) {
    var b;
    return (b = A.Zo(a) ? !a.disabled && (!A.Xk(a) || A.gl(a)) : A.bd(a)) && D
      ? A.Ao(a)
      : b;
  };
  A.Xk = function (a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified;
  };
  A.gl = function (a) {
    a = a.tabIndex;
    return ea(a) && 0 <= a && 32768 > a;
  };
  A.Zo = function (a) {
    return (
      "A" == a.tagName ||
      "INPUT" == a.tagName ||
      "TEXTAREA" == a.tagName ||
      "SELECT" == a.tagName ||
      "BUTTON" == a.tagName
    );
  };
  A.Ao = function (a) {
    a = ga(a.getBoundingClientRect)
      ? a.getBoundingClientRect()
      : { height: a.offsetHeight, width: a.offsetWidth };
    return null != a && 0 < a.height && 0 < a.width;
  };
  A.tc = function (a) {
    if (Fd && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
      var b = [];
      A.Zh(a, b, !0);
      a = b.join("");
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    Fd || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a;
  };
  A.Qk = function (a) {
    var b = [];
    A.Zh(a, b, !1);
    return b.join("");
  };
  A.Zh = function (a, b, c) {
    if (!(a.nodeName in A.yj))
      if (3 == a.nodeType)
        c
          ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
          : b.push(a.nodeValue);
      else if (a.nodeName in A.vf) b.push(A.vf[a.nodeName]);
      else for (a = a.firstChild; a; ) A.Zh(a, b, c), (a = a.nextSibling);
  };
  A.Lk = function (a) {
    return A.tc(a).length;
  };
  A.Mk = function (a, b) {
    for (var c = b || A.P(a).body, d = []; a && a != c; ) {
      for (var g = a; (g = g.previousSibling); ) d.unshift(A.tc(g));
      a = a.parentNode;
    }
    return d
      .join("")
      .replace(/^[\s\xa0]+/, "")
      .replace(/ +/g, " ").length;
  };
  A.Kk = function (a, b, c) {
    a = [a];
    for (var d = 0, g = null; 0 < a.length && d < b; )
      if (((g = a.pop()), !(g.nodeName in A.yj)))
        if (3 == g.nodeType)
          var h = g.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "),
            d = d + h.length;
        else if (g.nodeName in A.vf) d += A.vf[g.nodeName].length;
        else
          for (h = g.childNodes.length - 1; 0 <= h; h--)
            a.push(g.childNodes[h]);
    ha(c) && ((c.Lr = g ? g.nodeValue.length + b - d - 1 : 0), (c.node = g));
    return g;
  };
  A.wi = function (a) {
    if (a && "number" == typeof a.length) {
      if (ha(a))
        return "function" == typeof a.item || "string" == typeof a.item;
      if (ga(a)) return "function" == typeof a.item;
    }
    return !1;
  };
  A.Id = function (a, b, c, d) {
    if (!b && !c) return null;
    var g = b ? b.toUpperCase() : null;
    return A.Ph(
      a,
      function (a) {
        return (
          (!g || a.nodeName == g) &&
          (!c || (q(a.className) && Pa(a.className.split(/\s+/), c)))
        );
      },
      !0,
      d
    );
  };
  A.Ck = function (a, b, c) {
    return A.Id(a, null, b, c);
  };
  A.Ph = function (a, b, c, d) {
    c || (a = a.parentNode);
    c = null == d;
    for (var g = 0; a && (c || g <= d); ) {
      if (b(a)) return a;
      a = a.parentNode;
      g++;
    }
    return null;
  };
  A.Bk = function (a) {
    try {
      return a && a.activeElement;
    } catch (b) {}
    return null;
  };
  A.yr = function () {
    var a = A.Ea();
    return m(a.devicePixelRatio)
      ? a.devicePixelRatio
      : a.matchMedia
      ? A.pg(0.75) || A.pg(1.5) || A.pg(2) || A.pg(3) || 1
      : 1;
  };
  A.pg = function (a) {
    return A.Ea().matchMedia(
      "(-webkit-min-device-pixel-ratio: " +
        a +
        "),(min--moz-device-pixel-ratio: " +
        a +
        "),(min-resolution: " +
        a +
        "dppx)"
    ).matches
      ? a
      : 0;
  };
  function Id(a) {
    this.J = a || f.document || document;
  }
  e = Id.prototype;
  e.i = A.i;
  e.F = function () {
    return this.J;
  };
  e.a = function (a) {
    return A.Sh(this.J, a);
  };
  e.Yn = function (a) {
    return A.Rk(this.J, a);
  };
  e.Mm = Id.prototype.a;
  e.l = function (a, b, c) {
    return A.Xf(this.J, a, b, c);
  };
  e.B = function (a, b) {
    return A.B(a, b || this.J);
  };
  e.ia = function (a, b) {
    return A.ia(a, b || this.J);
  };
  e.Xh = function (a, b) {
    return A.Xh(a, b || this.J);
  };
  e.Nm = Id.prototype.l;
  e.Jg = A.Jg;
  e.Da = function (a) {
    return A.Da(a || this.Ea());
  };
  e.Un = function () {
    return A.Ek(this.Ea());
  };
  e.g = function (a, b, c) {
    return A.ak(this.J, arguments);
  };
  e.Om = Id.prototype.g;
  e.createElement = function (a) {
    return this.J.createElement(a);
  };
  e.createTextNode = function (a) {
    return this.J.createTextNode(String(a));
  };
  e.vn = function (a, b, c) {
    return A.bk(this.J, a, b, !!c);
  };
  e.Np = function (a) {
    return A.Rl(this.J, a);
  };
  e.Go = function (a) {
    return A.$k(this.J, a);
  };
  e.eg = function () {
    return A.Ve(this.J);
  };
  e.Ea = function () {
    return A.ai(this.J);
  };
  e.Uc = function () {
    return A.Rh(this.J);
  };
  e.Ua = function () {
    return A.Fk(this.J);
  };
  e.Bk = function (a) {
    return A.Bk(a || this.J);
  };
  e.appendChild = A.appendChild;
  e.append = A.append;
  e.canHaveChildren = A.canHaveChildren;
  e.md = A.md;
  e.Qd = A.Qd;
  e.ti = A.ti;
  e.cl = A.cl;
  e.removeNode = A.removeNode;
  e.Ml = A.Ml;
  e.zk = A.zk;
  e.Vb = A.Vb;
  e.Eb = A.Eb;
  e.Uh = A.Uh;
  e.Vh = A.Vh;
  e.Ok = A.Ok;
  e.Jk = A.Jk;
  e.Pk = A.Pk;
  e.vi = A.vi;
  e.ad = A.ad;
  e.hl = A.hl;
  e.Wh = A.Wh;
  e.contains = A.contains;
  e.Vj = A.Vj;
  e.vk = A.vk;
  e.P = A.P;
  e.Jd = A.Jd;
  e.Hk = A.Hk;
  e.Lg = A.Lg;
  e.Nk = A.Nk;
  e.wk = A.wk;
  e.xk = A.xk;
  e.bd = A.bd;
  e.Fc = A.Fc;
  e.qb = A.qb;
  e.tc = A.tc;
  e.Lk = A.Lk;
  e.Mk = A.Mk;
  e.Kk = A.Kk;
  e.wi = A.wi;
  e.Id = A.Id;
  e.Ck = A.Ck;
  e.Ph = A.Ph;
  function Jd(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  }
  e = Jd.prototype;
  e.clone = function () {
    return new Jd(this.top, this.right, this.bottom, this.left);
  };
  e.toString = function () {
    return (
      "(" +
      this.top +
      "t, " +
      this.right +
      "r, " +
      this.bottom +
      "b, " +
      this.left +
      "l)"
    );
  };
  e.contains = function (a) {
    return this && a
      ? a instanceof Jd
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };
  e.expand = function (a, b, c, d) {
    ha(a)
      ? ((this.top -= a.top),
        (this.right += a.right),
        (this.bottom += a.bottom),
        (this.left -= a.left))
      : ((this.top -= a),
        (this.right += b),
        (this.bottom += c),
        (this.left -= d));
    return this;
  };
  e.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  e.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  e.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  e.translate = function (a, b) {
    a instanceof K
      ? ((this.left += a.x),
        (this.right += a.x),
        (this.top += a.y),
        (this.bottom += a.y))
      : ((this.left += a),
        (this.right += a),
        ea(b) && ((this.top += b), (this.bottom += b)));
    return this;
  };
  e.scale = function (a, b) {
    var c = ea(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this;
  };
  function Kd(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  }
  e = Kd.prototype;
  e.clone = function () {
    return new Kd(this.left, this.top, this.width, this.height);
  };
  e.toString = function () {
    return (
      "(" +
      this.left +
      ", " +
      this.top +
      " - " +
      this.width +
      "w x " +
      this.height +
      "h)"
    );
  };
  e.contains = function (a) {
    return a instanceof Kd
      ? this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height
      : a.x >= this.left &&
          a.x <= this.left + this.width &&
          a.y >= this.top &&
          a.y <= this.top + this.height;
  };
  e.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  e.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  e.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  e.translate = function (a, b) {
    a instanceof K
      ? ((this.left += a.x), (this.top += a.y))
      : ((this.left += a), ea(b) && (this.top += b));
    return this;
  };
  e.scale = function (a, b) {
    var c = ea(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this;
  };
  A.vendor = {};
  A.vendor.$h = function () {
    return G ? "Webkit" : F ? "Moz" : D ? "ms" : Xb ? "O" : null;
  };
  A.vendor.Br = function () {
    return G ? "-webkit" : F ? "-moz" : D ? "-ms" : Xb ? "-o" : null;
  };
  A.vendor.Ar = function (a, b) {
    if (b && a in b) return a;
    var c = A.vendor.$h();
    return c
      ? ((c = c.toLowerCase()), (c += Ha(a)), !m(b) || c in b ? c : null)
      : null;
  };
  A.vendor.zr = function (a) {
    return ((A.vendor.$h() || "") + a).toLowerCase();
  };
  function Ld(a, b, c) {
    if (q(b)) (b = Md(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var g = b[d],
          h = Md(c, d);
        h && (c.style[h] = g);
      }
  }
  var Nd = {};
  function Md(a, b) {
    var c = Nd[b];
    if (!c) {
      var d = Fa(b),
        c = d;
      void 0 === a.style[d] &&
        ((d = A.vendor.$h() + Ha(d)), void 0 !== a.style[d] && (c = d));
      Nd[b] = c;
    }
    return c;
  }
  function Od(a, b) {
    var c = A.P(a);
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (c = c.defaultView.getComputedStyle(a, null))
      ? c[b] || c.getPropertyValue(b) || ""
      : "";
  }
  function Pd(a, b) {
    return (
      Od(a, b) ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    );
  }
  function Qd(a) {
    return Pd(a, "position");
  }
  function Rd(a, b, c) {
    var d;
    b instanceof K ? ((d = b.x), (b = b.y)) : ((d = b), (b = c));
    a.style.left = Sd(d, !1);
    a.style.top = Sd(b, !1);
  }
  function Td(a) {
    return new K(a.offsetLeft, a.offsetTop);
  }
  function Ud(a) {
    var b;
    try {
      b = a.getBoundingClientRect();
    } catch (c) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
    D &&
      a.ownerDocument.body &&
      ((a = a.ownerDocument),
      (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
      (b.top -= a.documentElement.clientTop + a.body.clientTop));
    return b;
  }
  function Vd(a) {
    if (D && !(8 <= lc)) return a.offsetParent;
    var b = A.P(a),
      c = Pd(a, "position"),
      d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
      if (
        (11 == a.nodeType && a.host && (a = a.host),
        (c = Pd(a, "position")),
        (d = d && "static" == c && a != b.documentElement && a != b.body),
        !d &&
          (a.scrollWidth > a.clientWidth ||
            a.scrollHeight > a.clientHeight ||
            "fixed" == c ||
            "absolute" == c ||
            "relative" == c))
      )
        return a;
    return null;
  }
  function Wd(a) {
    for (
      var b = new Jd(0, Infinity, Infinity, 0),
        c = A.i(a),
        d = c.F().body,
        g = c.F().documentElement,
        h = c.Uc();
      (a = Vd(a));

    )
      if (
        !((D && 0 == a.clientWidth) || (G && 0 == a.clientHeight && a == d)) &&
        a != d &&
        a != g &&
        "visible" != Pd(a, "overflow")
      ) {
        var k = Xd(a),
          l = new K(a.clientLeft, a.clientTop);
        k.x += l.x;
        k.y += l.y;
        b.top = Math.max(b.top, k.y);
        b.right = Math.min(b.right, k.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, k.y + a.clientHeight);
        b.left = Math.max(b.left, k.x);
      }
    d = h.scrollLeft;
    h = h.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, h);
    c = c.Da();
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, h + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left
      ? b
      : null;
  }
  function Yd(a, b) {
    var c = b || A.Uc(),
      d;
    d = c || A.Uc();
    var g = Xd(a),
      h = Xd(d),
      k = Zd(d);
    if (d == A.Uc()) {
      var l = g.x - d.scrollLeft,
        g = g.y - d.scrollTop;
      !D || 10 <= lc || ((l += k.left), (g += k.top));
    } else (l = g.x - h.x - k.left), (g = g.y - h.y - k.top);
    var k = d.clientHeight - a.offsetHeight,
      h = d.scrollLeft,
      p = d.scrollTop,
      h = h + Math.min(l, Math.max(l - (d.clientWidth - a.offsetWidth), 0)),
      p = p + Math.min(g, Math.max(g - k, 0));
    d = new K(h, p);
    c.scrollLeft = d.x;
    c.scrollTop = d.y;
  }
  function Xd(a) {
    var b = A.P(a),
      c = new K(0, 0),
      d;
    d = b ? A.P(b) : A.F();
    d = !D || 9 <= lc || A.i(d).eg() ? d.documentElement : d.body;
    if (a == d) return c;
    a = Ud(a);
    b = A.i(b).Ua();
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
  }
  function $d(a) {
    a = Ud(a);
    return new K(a.left, a.top);
  }
  function ae(a) {
    if (1 == a.nodeType) return $d(a);
    a = a.changedTouches ? a.changedTouches[0] : a;
    return new K(a.clientX, a.clientY);
  }
  function be(a, b, c) {
    if (b instanceof Hd) (c = b.height), (b = b.width);
    else if (void 0 == c) throw Error("missing height argument");
    a.style.width = Sd(b, !0);
    a.style.height = Sd(c, !0);
  }
  function Sd(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a;
  }
  function O(a) {
    var b = ce;
    if ("none" != Pd(a, "display")) return b(a);
    var c = a.style,
      d = c.display,
      g = c.visibility,
      h = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = h;
    c.visibility = g;
    return a;
  }
  function ce(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = G && !b && !c;
    return (m(b) && !d) || !a.getBoundingClientRect
      ? new Hd(b, c)
      : ((a = Ud(a)), new Hd(a.right - a.left, a.bottom - a.top));
  }
  function de(a) {
    var b = Xd(a);
    a = O(a);
    return new Kd(b.x, b.y, a.width, a.height);
  }
  function ee(a, b) {
    var c = a.style;
    "opacity" in c
      ? (c.opacity = b)
      : "MozOpacity" in c
      ? (c.MozOpacity = b)
      : "filter" in c &&
        (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")");
  }
  function P(a, b) {
    a.style.display = b ? "" : "none";
  }
  function fe(a) {
    return "rtl" == Pd(a, "direction");
  }
  var ge = F ? "MozUserSelect" : G ? "WebkitUserSelect" : null;
  function he(a, b, c) {
    c = c ? null : a.getElementsByTagName("*");
    if (ge) {
      if (((b = b ? "none" : ""), a.style && (a.style[ge] = b), c)) {
        a = 0;
        for (var d; (d = c[a]); a++) d.style && (d.style[ge] = b);
      }
    } else if (D || Xb)
      if (((b = b ? "on" : ""), a.setAttribute("unselectable", b), c))
        for (a = 0; (d = c[a]); a++) d.setAttribute("unselectable", b);
  }
  function ie(a) {
    return new Hd(a.offsetWidth, a.offsetHeight);
  }
  function je(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left,
      d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var g = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return g;
  }
  function ke(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null;
    return c ? je(a, c) : 0;
  }
  function le(a) {
    if (D) {
      var b = ke(a, "paddingLeft"),
        c = ke(a, "paddingRight"),
        d = ke(a, "paddingTop");
      a = ke(a, "paddingBottom");
      return new Jd(d, c, a, b);
    }
    b = Od(a, "paddingLeft");
    c = Od(a, "paddingRight");
    d = Od(a, "paddingTop");
    a = Od(a, "paddingBottom");
    return new Jd(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
  }
  var me = { thin: 2, medium: 4, thick: 6 };
  function ne(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
      return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return c in me ? me[c] : je(a, c);
  }
  function Zd(a) {
    if (D && !(9 <= lc)) {
      var b = ne(a, "borderLeft"),
        c = ne(a, "borderRight"),
        d = ne(a, "borderTop");
      a = ne(a, "borderBottom");
      return new Jd(d, c, a, b);
    }
    b = Od(a, "borderLeftWidth");
    c = Od(a, "borderRightWidth");
    d = Od(a, "borderTopWidth");
    a = Od(a, "borderBottomWidth");
    return new Jd(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
  }
  function oe(a) {
    var b = a.offsetLeft,
      c = a.offsetParent;
    c || "fixed" != Qd(a) || (c = A.P(a).documentElement);
    if (!c) return b;
    if (F)
      var d = Zd(c),
        b = b + d.left;
    else 8 <= lc && !(9 <= lc) && ((d = Zd(c)), (b -= d.left));
    return fe(c) ? c.clientWidth - (b + a.offsetWidth) : b;
  }
  function pe(a, b, c, d, g, h, k, l, p) {
    var r, v;
    if ((r = c.offsetParent)) {
      var z = "HTML" == r.tagName || "BODY" == r.tagName;
      (z && "static" == Qd(r)) ||
        ((v = Xd(r)),
        z ||
          ((z =
            (z = fe(r)) && F
              ? -r.scrollLeft
              : !z || (D && I("8")) || "visible" == Pd(r, "overflowX")
              ? r.scrollLeft
              : r.scrollWidth - r.clientWidth - r.scrollLeft),
          (v = yc(v, new K(z, r.scrollTop)))));
    }
    r = v || new K();
    v = de(a);
    if ((z = Wd(a))) {
      var E = new Kd(z.left, z.top, z.right - z.left, z.bottom - z.top),
        z = Math.max(v.left, E.left),
        T = Math.min(v.left + v.width, E.left + E.width);
      if (z <= T) {
        var H = Math.max(v.top, E.top),
          E = Math.min(v.top + v.height, E.top + E.height);
        H <= E &&
          ((v.left = z), (v.top = H), (v.width = T - z), (v.height = E - H));
      }
    }
    z = A.i(a);
    H = A.i(c);
    if (z.F() != H.F()) {
      var T = z.F().body,
        H = H.Ea(),
        E = new K(0, 0),
        fa = A.Ea(A.P(T)),
        vb = T;
      do {
        var bb = fa == H ? Xd(vb) : $d(vb);
        E.x += bb.x;
        E.y += bb.y;
      } while (
        fa &&
        fa != H &&
        fa != fa.parent &&
        (vb = fa.frameElement) &&
        (fa = fa.parent)
      );
      T = yc(E, Xd(T));
      !D || 9 <= lc || z.eg() || (T = yc(T, z.Ua()));
      v.left += T.x;
      v.top += T.y;
    }
    a = qe(a, b);
    b = new K(
      a & 2 ? v.left + v.width : v.left,
      a & 1 ? v.top + v.height : v.top
    );
    b = yc(b, r);
    g && ((b.x += (a & 2 ? -1 : 1) * g.x), (b.y += (a & 1 ? -1 : 1) * g.y));
    var x;
    if (k)
      if (p) x = p;
      else if ((x = Wd(c)))
        (x.top -= r.y), (x.right -= r.x), (x.bottom -= r.y), (x.left -= r.x);
    g = x;
    p = b.clone();
    x = qe(c, d);
    d = O(c);
    a = l ? l.clone() : d.clone();
    l = p;
    p = a;
    l = l.clone();
    p = p.clone();
    a = 0;
    if (h || 0 != x)
      x & 2 ? (l.x -= p.width + (h ? h.right : 0)) : h && (l.x += h.left),
        x & 1 ? (l.y -= p.height + (h ? h.bottom : 0)) : h && (l.y += h.top);
    k &&
      (g
        ? ((h = l),
          (x = p),
          (a = 0),
          65 == (k & 65) && (h.x < g.left || h.x >= g.right) && (k &= -2),
          132 == (k & 132) && (h.y < g.top || h.y >= g.bottom) && (k &= -5),
          h.x < g.left && k & 1 && ((h.x = g.left), (a |= 1)),
          k & 16 &&
            ((b = h.x),
            h.x < g.left && ((h.x = g.left), (a |= 4)),
            h.x + x.width > g.right &&
              ((x.width = Math.min(g.right - h.x, b + x.width - g.left)),
              (x.width = Math.max(x.width, 0)),
              (a |= 4))),
          h.x + x.width > g.right &&
            k & 1 &&
            ((h.x = Math.max(g.right - x.width, g.left)), (a |= 1)),
          k & 2 &&
            (a =
              a | (h.x < g.left ? 16 : 0) | (h.x + x.width > g.right ? 32 : 0)),
          h.y < g.top && k & 4 && ((h.y = g.top), (a |= 2)),
          k & 32 &&
            ((b = h.y),
            h.y < g.top && ((h.y = g.top), (a |= 8)),
            h.y + x.height > g.bottom &&
              ((x.height = Math.min(g.bottom - h.y, b + x.height - g.top)),
              (x.height = Math.max(x.height, 0)),
              (a |= 8))),
          h.y + x.height > g.bottom &&
            k & 4 &&
            ((h.y = Math.max(g.bottom - x.height, g.top)), (a |= 2)),
          k & 8 &&
            (a =
              a |
              (h.y < g.top ? 64 : 0) |
              (h.y + x.height > g.bottom ? 128 : 0)),
          (k = a))
        : (k = 256),
      (a = k));
    h = new Kd(0, 0, 0, 0);
    h.left = l.x;
    h.top = l.y;
    h.width = p.width;
    h.height = p.height;
    k = a;
    k & 496 ||
      (Rd(c, new K(h.left, h.top)),
      (a = new Hd(h.width, h.height)),
      d == a ||
        (d && a && d.width == a.width && d.height == a.height) ||
        ((h = a),
        (l = A.P(c)),
        (d = A.i(l).eg()),
        !D || I("10") || (d && I("8"))
          ? ((c = c.style),
            F
              ? (c.MozBoxSizing = "border-box")
              : G
              ? (c.WebkitBoxSizing = "border-box")
              : (c.boxSizing = "border-box"),
            (c.width = Math.max(h.width, 0) + "px"),
            (c.height = Math.max(h.height, 0) + "px"))
          : ((l = c.style),
            d
              ? ((d = le(c)),
                (c = Zd(c)),
                (l.pixelWidth = h.width - c.left - d.left - d.right - c.right),
                (l.pixelHeight =
                  h.height - c.top - d.top - d.bottom - c.bottom))
              : ((l.pixelWidth = h.width), (l.pixelHeight = h.height)))));
    return k;
  }
  function qe(a, b) {
    return (b & 4 && fe(a) ? b ^ 2 : b) & -5;
  }
  var re;
  function se(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role");
  }
  function Q(a, b, c) {
    n(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c
      ? (re ||
          (re = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false",
          }),
        (c = re),
        b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
      : a.setAttribute(d, c);
  }
  function te(a, b) {
    var c = a.getAttribute("aria-" + b);
    return null == c || void 0 == c ? "" : String(c);
  }
  function ue(a, b) {
    var c = "";
    b && (c = b.id);
    Q(a, "activedescendant", c);
  }
  function we(a) {
    zc.call(this);
    this.ra = a;
    this.N = {};
  }
  y(we, zc);
  var xe = [];
  e = we.prototype;
  e.j = function (a, b, c, d) {
    n(b) || (b && (xe[0] = b.toString()), (b = xe));
    for (var g = 0; g < b.length; g++) {
      var h = M(a, b[g], c || this.handleEvent, d || !1, this.ra || this);
      if (!h) break;
      this.N[h.key] = h;
    }
    return this;
  };
  e.kl = function (a, b, c, d) {
    return ye(this, a, b, c, d);
  };
  function ye(a, b, c, d, g, h) {
    if (n(c)) for (var k = 0; k < c.length; k++) ye(a, b, c[k], d, g, h);
    else {
      b = dd(b, c, d || a.handleEvent, g, h || a.ra || a);
      if (!b) return a;
      a.N[b.key] = b;
    }
    return a;
  }
  e.la = function (a, b, c, d, g) {
    if (n(b)) for (var h = 0; h < b.length; h++) this.la(a, b[h], c, d, g);
    else
      (c = c || this.handleEvent),
        (g = g || this.ra || this),
        (c = Yc(c)),
        (d = !!d),
        (b = Oc(a)
          ? a.Me(b, c, d, g)
          : a
          ? (a = $c(a))
            ? a.Me(b, c, d, g)
            : null
          : null),
        b && (fd(b), delete this.N[b.key]);
    return this;
  };
  e.fb = function () {
    Wa(
      this.N,
      function (a, b) {
        this.N.hasOwnProperty(b) && fd(a);
      },
      this
    );
    this.N = {};
  };
  e.o = function () {
    we.b.o.call(this);
    this.fb();
  };
  e.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  function ze() {}
  ba(ze);
  ze.prototype.ep = 0;
  function Ae(a) {
    return ":" + (a.ep++).toString(36);
  }
  function Be(a) {
    N.call(this);
    this.X = a || A.i();
    this.Mb = Ce;
    this.ab = null;
    this.A = !1;
    this.f = null;
    this.uc = void 0;
    this.kb = this.W = this.S = this.Gi = null;
    this.Jm = !1;
  }
  y(Be, N);
  Be.prototype.Ho = ze.qa();
  var Ce = null;
  function De(a, b) {
    switch (a) {
      case 1:
        return b ? "disable" : "enable";
      case 2:
        return b ? "highlight" : "unhighlight";
      case 4:
        return b ? "activate" : "deactivate";
      case 8:
        return b ? "select" : "unselect";
      case 16:
        return b ? "check" : "uncheck";
      case 32:
        return b ? "focus" : "blur";
      case 64:
        return b ? "open" : "close";
    }
    throw Error("Invalid component state");
  }
  function Ee(a) {
    return a.ab || (a.ab = Ae(a.Ho));
  }
  function Fe(a, b) {
    if (a.S && a.S.kb) {
      var c = a.S.kb,
        d = a.ab;
      d in c && delete c[d];
      ab(a.S.kb, b, a);
    }
    a.ab = b;
  }
  e = Be.prototype;
  e.a = function () {
    return this.f;
  };
  e.B = function (a) {
    return this.f ? this.X.B(a, this.f) : [];
  };
  e.ia = function (a) {
    return this.f ? this.X.ia(a, this.f) : null;
  };
  e.Xh = function (a) {
    return this.ia(a);
  };
  e.ba = function () {
    this.uc || (this.uc = new we(this));
    return this.uc;
  };
  function Ge(a, b) {
    if (a == b) throw Error("Unable to set parent component");
    if (b && a.S && a.ab && He(a.S, a.ab) && a.S != b)
      throw Error("Unable to set parent component");
    a.S = b;
    Be.b.cj.call(a, b);
  }
  e.getParent = function () {
    return this.S;
  };
  e.cj = function (a) {
    if (this.S && this.S != a) throw Error("Method not supported");
    Be.b.cj.call(this, a);
  };
  e.i = function () {
    return this.X;
  };
  e.g = function () {
    this.f = this.X.createElement("DIV");
  };
  e.tb = function (a) {
    Ie(this, a);
  };
  function Ie(a, b, c) {
    if (a.A) throw Error("Component already rendered");
    a.f || a.g();
    b ? b.insertBefore(a.f, c || null) : a.X.F().body.appendChild(a.f);
    (a.S && !a.S.A) || a.O();
  }
  e.D = function (a) {
    if (this.A) throw Error("Component already rendered");
    if (a && this.Qa(a)) {
      this.Jm = !0;
      var b = A.P(a);
      (this.X && this.X.F() == b) || (this.X = A.i(a));
      this.Sa(a);
      this.O();
    } else throw Error("Invalid element to decorate");
  };
  e.Qa = function () {
    return !0;
  };
  e.Sa = function (a) {
    this.f = a;
  };
  e.O = function () {
    this.A = !0;
    Je(this, function (a) {
      !a.A && a.a() && a.O();
    });
  };
  e.Ma = function () {
    Je(this, function (a) {
      a.A && a.Ma();
    });
    this.uc && this.uc.fb();
    this.A = !1;
  };
  e.o = function () {
    this.A && this.Ma();
    this.uc && (this.uc.Ca(), delete this.uc);
    Je(this, function (a) {
      a.Ca();
    });
    !this.Jm && this.f && A.removeNode(this.f);
    this.S = this.Gi = this.f = this.kb = this.W = null;
    Be.b.o.call(this);
  };
  e.qe = function (a, b) {
    this.re(a, Ke(this), b);
  };
  e.re = function (a, b, c) {
    if (a.A && (c || !this.A)) throw Error("Component already rendered");
    if (0 > b || b > Ke(this))
      throw Error("Child component index out of bounds");
    (this.kb && this.W) || ((this.kb = {}), (this.W = []));
    if (a.getParent() == this) {
      var d = Ee(a);
      this.kb[d] = a;
      Qa(this.W, a);
    } else ab(this.kb, Ee(a), a);
    Ge(a, this);
    Ua(this.W, b, 0, a);
    a.A && this.A && a.getParent() == this
      ? ((c = this.H()),
        (b = c.childNodes[b] || null),
        b != a.a() && c.insertBefore(a.a(), b))
      : c
      ? (this.f || this.g(),
        (b = Le(this, b + 1)),
        Ie(a, this.H(), b ? b.f : null))
      : this.A &&
        !a.A &&
        a.f &&
        a.f.parentNode &&
        1 == a.f.parentNode.nodeType &&
        a.O();
  };
  e.H = function () {
    return this.f;
  };
  e.We = function () {
    null == this.Mb && (this.Mb = fe(this.A ? this.f : this.X.F().body));
    return this.Mb;
  };
  e.de = function (a) {
    if (this.A) throw Error("Component already rendered");
    this.Mb = a;
  };
  function Ke(a) {
    return a.W ? a.W.length : 0;
  }
  function He(a, b) {
    return a.kb && b ? cb(a.kb, b) || null : null;
  }
  function Le(a, b) {
    return a.W ? a.W[b] || null : null;
  }
  function Je(a, b, c) {
    a.W && B(a.W, b, c);
  }
  function Me(a, b) {
    return a.W && b ? Ka(a.W, b) : -1;
  }
  e.removeChild = function (a, b) {
    if (a) {
      var c = q(a) ? a : Ee(a);
      a = He(this, c);
      if (c && a) {
        var d = this.kb;
        c in d && delete d[c];
        Qa(this.W, a);
        b && (a.Ma(), a.f && A.removeNode(a.f));
        Ge(a, null);
      }
    }
    if (!a) throw Error("Child is not in parent component");
    return a;
  };
  e.md = function (a) {
    for (var b = []; this.W && 0 != this.W.length; )
      b.push(this.removeChild(Le(this, 0), a));
    return b;
  };
  function Ne() {}
  var Oe;
  ba(Ne);
  var Pe = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected",
  };
  e = Ne.prototype;
  e.Db = function () {};
  e.g = function (a) {
    return a.i().g("DIV", this.qc(a).join(" "), a.Wb());
  };
  e.H = function (a) {
    return a;
  };
  e.Ge = function (a, b, c) {
    if ((a = a.a ? a.a() : a)) {
      var d = [b];
      D && !I("7") && ((d = Qe(A.h.get(a), b)), d.push(b));
      A.h.Nn(a, d, c);
    }
  };
  e.Qa = function () {
    return !0;
  };
  e.D = function (a, b) {
    b.id && Fe(a, b.id);
    var c = this.H(b);
    c && c.firstChild
      ? Re(a, c.firstChild.nextSibling ? Sa(c.childNodes) : c.firstChild)
      : (a.La = null);
    var d = 0,
      g = this.u(),
      h = this.u(),
      k = !1,
      l = !1,
      p = !1,
      r = Sa(A.h.get(b));
    B(
      r,
      function (a) {
        k || a != g
          ? l || a != h
            ? (d |= this.ag(a))
            : (l = !0)
          : ((k = !0), h == g && (l = !0));
        1 == this.ag(a) && A.bd(c) && A.Fc(c, !1);
      },
      this
    );
    a.V = d;
    k || (r.push(g), h == g && (l = !0));
    l || r.push(h);
    var v = a.nb;
    v && r.push.apply(r, v);
    if (D && !I("7")) {
      var z = Qe(r);
      0 < z.length && (r.push.apply(r, z), (p = !0));
    }
    (k && l && !v && !p) || A.h.set(b, r.join(" "));
    return b;
  };
  e.Pd = function (a) {
    a.We() && this.de(a.a(), !0);
    a.isEnabled() && this.Ec(a, a.v);
  };
  function Se(a, b, c) {
    if ((a = c || a.Db()))
      (c = b.getAttribute("role") || null), a != c && se(b, a);
  }
  function Te(a, b, c) {
    var d = b.Fj;
    null != d && a.Zi(c, d);
    b.v || Q(c, "hidden", !b.v);
    b.isEnabled() || a.Qb(c, 1, !b.isEnabled());
    R(b, 8) && a.Qb(c, 8, U(b, 8));
    R(b, 16) && a.Qb(c, 16, U(b, 16));
    R(b, 64) && a.Qb(c, 64, U(b, 64));
  }
  e.Zi = function (a, b) {
    Q(a, "label", b);
  };
  e.lf = function (a, b) {
    he(a, !b, !D && !Xb);
  };
  e.de = function (a, b) {
    this.Ge(a, this.u() + "-rtl", b);
  };
  e.qb = function (a) {
    var b;
    return R(a, 32) && (b = a.Y()) ? A.bd(b) : !1;
  };
  e.Ec = function (a, b) {
    var c;
    if (R(a, 32) && (c = a.Y())) {
      if (!b && U(a, 32)) {
        try {
          c.blur();
        } catch (d) {}
        U(a, 32) && a.Xc(null);
      }
      A.bd(c) != b && A.Fc(c, b);
    }
  };
  e.M = function (a, b) {
    P(a, b);
    a && Q(a, "hidden", !b);
  };
  e.Pa = function (a, b, c) {
    var d = a.a();
    if (d) {
      var g = this.Je(b);
      g && this.Ge(a, g, c);
      this.Qb(d, b, c);
    }
  };
  e.Qb = function (a, b, c) {
    Oe ||
      (Oe = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
    b = Oe[b];
    var d = a.getAttribute("role") || null;
    d && ((d = Pe[d] || b), (b = "checked" == b || "selected" == b ? d : b));
    b && Q(a, b, c);
  };
  e.Dc = function (a, b) {
    var c = this.H(a);
    if (c && (A.md(c), b))
      if (q(b)) A.Lg(c, b);
      else {
        var d = function (a) {
          if (a) {
            var b = A.P(c);
            c.appendChild(q(a) ? b.createTextNode(a) : a);
          }
        };
        n(b) ? B(b, d) : !da(b) || "nodeType" in b ? d(b) : B(Sa(b), d);
      }
  };
  e.Y = function (a) {
    return a.a();
  };
  e.u = function () {
    return "goog-control";
  };
  e.qc = function (a) {
    var b = this.u(),
      c = [b],
      d = this.u();
    d != b && c.push(d);
    b = a.V;
    for (d = []; b; ) {
      var g = b & -b;
      d.push(this.Je(g));
      b &= ~g;
    }
    c.push.apply(c, d);
    (a = a.nb) && c.push.apply(c, a);
    D && !I("7") && c.push.apply(c, Qe(c));
    return c;
  };
  function Qe(a, b) {
    var c = [];
    b && (a = a.concat([b]));
    B([], function (d) {
      !Na(d, u(Pa, a)) || (b && !Pa(d, b)) || c.push(d.join("_"));
    });
    return c;
  }
  e.Je = function (a) {
    this.Jf || Ue(this);
    return this.Jf[a];
  };
  e.ag = function (a) {
    if (!this.rm) {
      this.Jf || Ue(this);
      var b = this.Jf,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      this.rm = c;
    }
    a = parseInt(this.rm[a], 10);
    return isNaN(a) ? 0 : a;
  };
  function Ue(a) {
    var b = a.u();
    b.replace(/\xa0|\s/g, " ");
    a.Jf = {
      1: b + "-disabled",
      2: b + "-hover",
      4: b + "-active",
      8: b + "-selected",
      16: b + "-checked",
      32: b + "-focused",
      64: b + "-open",
    };
  }
  function Ve() {}
  y(Ve, Ne);
  ba(Ve);
  e = Ve.prototype;
  e.Db = function () {
    return "button";
  };
  e.Qb = function (a, b, c) {
    switch (b) {
      case 8:
      case 16:
        Q(a, "pressed", c);
        break;
      default:
      case 64:
      case 1:
        Ve.b.Qb.call(this, a, b, c);
    }
  };
  e.g = function (a) {
    var b = Ve.b.g.call(this, a);
    this.ee(b, a.Wc());
    var c = a.I();
    c && this.ic(b, c);
    R(a, 16) && this.Qb(b, 16, U(a, 16));
    return b;
  };
  e.D = function (a, b) {
    b = Ve.b.D.call(this, a, b);
    var c = this.I(b);
    a.rj = c;
    a.pj = this.Wc(b);
    R(a, 16) && this.Qb(b, 16, U(a, 16));
    return b;
  };
  e.I = aa;
  e.ic = aa;
  e.Wc = function (a) {
    return a.title;
  };
  e.ee = function (a, b) {
    a && (b ? (a.title = b) : a.removeAttribute("title"));
  };
  e.u = function () {
    return "goog-button";
  };
  function We(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!ga(b)) throw Error("Invalid decorator function " + b);
    Xe[a] = b;
  }
  var Ye = {},
    Xe = {};
  function V(a, b, c) {
    Be.call(this, c);
    if (!b) {
      b = this.constructor;
      for (var d; b; ) {
        d = ia(b);
        if ((d = Ye[d])) break;
        b = b.b ? b.b.constructor : null;
      }
      b = d ? (ga(d.qa) ? d.qa() : new d()) : null;
    }
    this.s = b;
    this.La = m(a) ? a : null;
    this.Fj = null;
  }
  y(V, Be);
  e = V.prototype;
  e.La = null;
  e.V = 0;
  e.sf = 39;
  e.te = 255;
  e.rf = 0;
  e.v = !0;
  e.nb = null;
  e.Ld = !0;
  e.wf = !1;
  e.ef = null;
  e.mf = function (a) {
    this.A && a != this.Ld && Ze(this, a);
    this.Ld = a;
  };
  e.Y = function () {
    return this.s.Y(this);
  };
  e.Yf = function () {
    return this.ua || (this.ua = new wd());
  };
  e.Ge = function (a, b) {
    b
      ? a &&
        (this.nb ? Pa(this.nb, a) || this.nb.push(a) : (this.nb = [a]),
        this.s.Ge(this, a, !0))
      : a &&
        this.nb &&
        Qa(this.nb, a) &&
        (0 == this.nb.length && (this.nb = null), this.s.Ge(this, a, !1));
  };
  e.g = function () {
    var a = this.s.g(this);
    this.f = a;
    Se(this.s, a, this.sc());
    this.wf || this.s.lf(a, !1);
    this.v || this.s.M(a, !1);
  };
  e.sc = function () {
    return this.ef;
  };
  e.dj = function (a) {
    this.ef = a;
  };
  e.Zi = function (a) {
    this.Fj = a;
    var b = this.a();
    b && this.s.Zi(b, a);
  };
  e.H = function () {
    return this.s.H(this.a());
  };
  e.Qa = function (a) {
    return this.s.Qa(a);
  };
  e.Sa = function (a) {
    this.f = a = this.s.D(this, a);
    Se(this.s, a, this.sc());
    this.wf || this.s.lf(a, !1);
    this.v = "none" != a.style.display;
  };
  e.O = function () {
    V.b.O.call(this);
    Te(this.s, this, this.f);
    this.s.Pd(this);
    if (this.sf & -2 && (this.Ld && Ze(this, !0), R(this, 32))) {
      var a = this.Y();
      if (a) {
        var b = this.Yf();
        xd(b, a);
        this.ba()
          .j(b, "key", this.Ya)
          .j(a, "focus", this.bg)
          .j(a, "blur", this.Xc);
      }
    }
  };
  function Ze(a, b) {
    var c = a.ba(),
      d = a.a();
    b
      ? (c
          .j(d, "mouseover", a.gi)
          .j(d, "mousedown", a.vc)
          .j(d, "mouseup", a.wc)
          .j(d, "mouseout", a.fi),
        a.Oe != aa && c.j(d, "contextmenu", a.Oe),
        D &&
          (c.j(d, "dblclick", a.Vk), a.Re || ((a.Re = new $e(a)), Dc(a, a.Re))))
      : (c
          .la(d, "mouseover", a.gi)
          .la(d, "mousedown", a.vc)
          .la(d, "mouseup", a.wc)
          .la(d, "mouseout", a.fi),
        a.Oe != aa && c.la(d, "contextmenu", a.Oe),
        D && (c.la(d, "dblclick", a.Vk), Ec(a.Re), (a.Re = null)));
  }
  e.Ma = function () {
    V.b.Ma.call(this);
    this.ua && this.ua.detach();
    this.v && this.isEnabled() && this.s.Ec(this, !1);
  };
  e.o = function () {
    V.b.o.call(this);
    this.ua && (this.ua.Ca(), delete this.ua);
    delete this.s;
    this.Re = this.nb = this.La = null;
  };
  e.Wb = function () {
    return this.La;
  };
  e.Dc = function (a) {
    this.s.Dc(this.a(), a);
    this.La = a;
  };
  function Re(a, b) {
    a.La = b;
  }
  e.Tc = function () {
    var a = this.Wb();
    if (!a) return "";
    a = q(a) ? a : n(a) ? Ma(a, A.Qk).join("") : A.tc(a);
    return qa(a);
  };
  e.Hg = function (a) {
    this.Dc(a);
  };
  e.de = function (a) {
    V.b.de.call(this, a);
    var b = this.a();
    b && this.s.de(b, a);
  };
  e.lf = function (a) {
    this.wf = a;
    var b = this.a();
    b && this.s.lf(b, a);
  };
  e.M = function (a, b) {
    if (b || (this.v != a && this.dispatchEvent(a ? "show" : "hide"))) {
      var c = this.a();
      c && this.s.M(c, a);
      this.isEnabled() && this.s.Ec(this, a);
      this.v = a;
      return !0;
    }
    return !1;
  };
  e.isEnabled = function () {
    return !U(this, 1);
  };
  e.Fa = function (a) {
    var b = this.getParent();
    (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
      !af(this, 1, !a) ||
      (a || (this.setActive(!1), this.vb(!1)),
      this.v && this.s.Ec(this, a),
      this.Pa(1, !a, !0));
  };
  e.vb = function (a) {
    af(this, 2, a) && this.Pa(2, a);
  };
  e.$c = function () {
    return U(this, 4);
  };
  e.setActive = function (a) {
    af(this, 4, a) && this.Pa(4, a);
  };
  e.ej = function (a) {
    af(this, 8, a) && this.Pa(8, a);
  };
  e.U = function (a) {
    af(this, 64, a) && this.Pa(64, a);
  };
  function U(a, b) {
    return !!(a.V & b);
  }
  e.Pa = function (a, b, c) {
    c || 1 != a
      ? R(this, a) &&
        b != U(this, a) &&
        (this.s.Pa(this, a, b), (this.V = b ? this.V | a : this.V & ~a))
      : this.Fa(!b);
  };
  function R(a, b) {
    return !!(a.sf & b);
  }
  e.wa = function (a, b) {
    if (this.A && U(this, a) && !b) throw Error("Component already rendered");
    !b && U(this, a) && this.Pa(a, !1);
    this.sf = b ? this.sf | a : this.sf & ~a;
  };
  function bf(a, b) {
    return !!(a.te & b) && R(a, b);
  }
  function af(a, b, c) {
    return (
      R(a, b) &&
      U(a, b) != c &&
      (!(a.rf & b) || a.dispatchEvent(De(b, c))) &&
      !a.Ab
    );
  }
  e.gi = function (a) {
    (!a.relatedTarget || !A.contains(this.a(), a.relatedTarget)) &&
      this.dispatchEvent("enter") &&
      this.isEnabled() &&
      bf(this, 2) &&
      this.vb(!0);
  };
  e.fi = function (a) {
    (a.relatedTarget && A.contains(this.a(), a.relatedTarget)) ||
      !this.dispatchEvent("leave") ||
      (bf(this, 4) && this.setActive(!1), bf(this, 2) && this.vb(!1));
  };
  e.Oe = aa;
  e.vc = function (a) {
    this.isEnabled() &&
      (bf(this, 2) && this.vb(!0),
      Mc(a) &&
        (bf(this, 4) && this.setActive(!0),
        this.s && this.s.qb(this) && this.Y().focus()));
    !this.wf && Mc(a) && a.preventDefault();
  };
  e.wc = function (a) {
    this.isEnabled() &&
      (bf(this, 2) && this.vb(!0),
      this.$c() && this.jd(a) && bf(this, 4) && this.setActive(!1));
  };
  e.Vk = function (a) {
    this.isEnabled() && this.jd(a);
  };
  e.jd = function (a) {
    if (bf(this, 16)) {
      var b = !U(this, 16);
      af(this, 16, b) && this.Pa(16, b);
    }
    bf(this, 8) && this.ej(!0);
    bf(this, 64) && this.U(!U(this, 64));
    b = new L("action", this);
    a &&
      ((b.altKey = a.altKey),
      (b.ctrlKey = a.ctrlKey),
      (b.metaKey = a.metaKey),
      (b.shiftKey = a.shiftKey),
      (b.xg = a.xg));
    return this.dispatchEvent(b);
  };
  e.bg = function () {
    bf(this, 32) && af(this, 32, !0) && this.Pa(32, !0);
  };
  e.Xc = function () {
    bf(this, 4) && this.setActive(!1);
    bf(this, 32) && af(this, 32, !1) && this.Pa(32, !1);
  };
  e.Ya = function (a) {
    return this.v && this.isEnabled() && this.Za(a)
      ? (a.preventDefault(), a.stopPropagation(), !0)
      : !1;
  };
  e.Za = function (a) {
    return 13 == a.keyCode && this.jd(a);
  };
  if (!ga(V)) throw Error("Invalid component class " + V);
  if (!ga(Ne)) throw Error("Invalid renderer class " + Ne);
  var cf = ia(V);
  Ye[cf] = Ne;
  We("goog-control", function () {
    return new V(null);
  });
  function $e(a) {
    zc.call(this);
    this.Nf = a;
    this.Lf = !1;
    this.ra = new we(this);
    Dc(this, this.ra);
    a = this.Nf.f;
    this.ra
      .j(a, "mousedown", this.qo)
      .j(a, "mouseup", this.so)
      .j(a, "click", this.Ne);
  }
  y($e, zc);
  $e.prototype.qo = function () {
    this.Lf = !1;
  };
  $e.prototype.so = function () {
    this.Lf = !0;
  };
  $e.prototype.Ne = function (a) {
    if (this.Lf) this.Lf = !1;
    else {
      var b = a.Xa,
        c = b.button,
        d = b.type;
      b.button = 0;
      b.type = "mousedown";
      this.Nf.vc(new Kc(b, a.currentTarget));
      b.type = "mouseup";
      this.Nf.wc(new Kc(b, a.currentTarget));
      b.button = c;
      b.type = d;
    }
  };
  $e.prototype.o = function () {
    this.Nf = null;
    $e.b.o.call(this);
  };
  function df() {}
  y(df, Ve);
  ba(df);
  e = df.prototype;
  e.Db = function () {};
  e.g = function (a) {
    a.mf(!1);
    a.te &= -256;
    a.wa(32, !1);
    return a
      .i()
      .g(
        "BUTTON",
        {
          class: this.qc(a).join(" "),
          disabled: !a.isEnabled(),
          title: a.Wc() || "",
          value: a.I() || "",
        },
        a.Tc() || ""
      );
  };
  e.Qa = function (a) {
    return (
      "BUTTON" == a.tagName ||
      ("INPUT" == a.tagName &&
        ("button" == a.type || "submit" == a.type || "reset" == a.type))
    );
  };
  e.D = function (a, b) {
    a.mf(!1);
    a.te &= -256;
    a.wa(32, !1);
    if (b.disabled) {
      var c = this.Je(1);
      A.h.add(b, c);
    }
    return df.b.D.call(this, a, b);
  };
  e.Pd = function (a) {
    a.ba().j(a.a(), "click", a.jd);
  };
  e.lf = aa;
  e.de = aa;
  e.qb = function (a) {
    return a.isEnabled();
  };
  e.Ec = aa;
  e.Pa = function (a, b, c) {
    df.b.Pa.call(this, a, b, c);
    (a = a.a()) && 1 == b && (a.disabled = c);
  };
  e.I = function (a) {
    return a.value;
  };
  e.ic = function (a, b) {
    a && (a.value = b);
  };
  e.Qb = aa;
  function ef(a, b, c) {
    V.call(this, a, b || df.qa(), c);
  }
  y(ef, V);
  e = ef.prototype;
  e.I = function () {
    return this.rj;
  };
  e.ic = function (a) {
    this.rj = a;
    this.s.ic(this.a(), a);
  };
  e.Wc = function () {
    return this.pj;
  };
  e.ee = function (a) {
    this.pj = a;
    this.s.ee(this.a(), a);
  };
  e.o = function () {
    ef.b.o.call(this);
    delete this.rj;
    delete this.pj;
  };
  e.O = function () {
    ef.b.O.call(this);
    if (R(this, 32)) {
      var a = this.Y();
      a && this.ba().j(a, "keyup", this.Za);
    }
  };
  e.Za = function (a) {
    return (13 == a.keyCode && "key" == a.type) ||
      (32 == a.keyCode && "keyup" == a.type)
      ? this.jd(a)
      : 32 == a.keyCode;
  };
  We("goog-button", function () {
    return new ef(null);
  });
  function ff() {}
  y(ff, Ve);
  ba(ff);
  e = ff.prototype;
  e.g = function (a) {
    var b = { class: "goog-inline-block " + this.qc(a).join(" ") },
      b = a.i().g("DIV", b, a.Wb());
    this.ee(b, a.Wc());
    return b;
  };
  e.Db = function () {
    return "button";
  };
  e.Qa = function (a) {
    return "DIV" == a.tagName;
  };
  e.D = function (a, b) {
    A.h.add(b, "goog-inline-block");
    return ff.b.D.call(this, a, b);
  };
  e.I = function () {
    return "";
  };
  e.u = function () {
    return "goog-flat-button";
  };
  We("goog-flat-button", function () {
    return new ef(null, ff.qa());
  });
  function gf(a) {
    this.Gj = a;
  }
  ba(gf);
  e = gf.prototype;
  e.Db = function () {
    return this.Gj;
  };
  function hf(a, b) {
    a && (a.tabIndex = b ? 0 : -1);
  }
  e.g = function (a) {
    return a.i().g("DIV", this.qc(a).join(" "));
  };
  e.H = function (a) {
    return a;
  };
  e.Qa = function (a) {
    return "DIV" == a.tagName;
  };
  e.D = function (a, b) {
    b.id && Fe(a, b.id);
    var c = this.u(),
      d = !1,
      g = A.h.get(b);
    g &&
      B(
        g,
        function (b) {
          b == c
            ? (d = !0)
            : b &&
              (b == c + "-disabled"
                ? a.Fa(!1)
                : b == c + "-horizontal"
                ? a.setOrientation(jf)
                : b == c + "-vertical" && a.setOrientation(kf));
        },
        this
      );
    d || A.h.add(b, c);
    lf(this, a, this.H(b));
    return b;
  };
  function lf(a, b, c) {
    if (c)
      for (var d = c.firstChild, g; d && d.parentNode == c; ) {
        g = d.nextSibling;
        if (1 == d.nodeType) {
          var h = a.Qh(d);
          h && ((h.f = d), b.isEnabled() || h.Fa(!1), b.qe(h), h.D(d));
        } else (d.nodeValue && "" != ra(d.nodeValue)) || c.removeChild(d);
        d = g;
      }
  }
  e.Qh = function (a) {
    a: {
      var b;
      a = A.h.get(a);
      for (var c = 0, d = a.length; c < d; c++)
        if (((b = a[c]), (b = b in Xe ? Xe[b]() : null))) {
          a = b;
          break a;
        }
      a = null;
    }
    return a;
  };
  e.Pd = function (a) {
    a = a.a();
    he(a, !0, F);
    D && (a.hideFocus = !0);
    var b = this.Db();
    b && se(a, b);
  };
  e.Y = function (a) {
    return a.a();
  };
  e.u = function () {
    return "goog-container";
  };
  e.qc = function (a) {
    var b = this.u(),
      c = [b, a.hd == jf ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c;
  };
  function mf(a, b, c) {
    Be.call(this, c);
    this.s = b || gf.qa();
    this.hd = a || kf;
  }
  y(mf, Be);
  var jf = "horizontal",
    kf = "vertical";
  e = mf.prototype;
  e.Ai = null;
  e.ua = null;
  e.s = null;
  e.hd = null;
  e.v = !0;
  e.ha = !0;
  e.Nh = !0;
  e.Z = -1;
  e.da = null;
  e.cc = !1;
  e.gn = !1;
  e.Ap = !0;
  e.Rb = null;
  e.Y = function () {
    return this.Ai || this.s.Y(this);
  };
  e.Yf = function () {
    return this.ua || (this.ua = new wd(this.Y()));
  };
  e.g = function () {
    this.f = this.s.g(this);
  };
  e.H = function () {
    return this.s.H(this.a());
  };
  e.Qa = function (a) {
    return this.s.Qa(a);
  };
  e.Sa = function (a) {
    this.f = this.s.D(this, a);
    "none" == a.style.display && (this.v = !1);
  };
  e.O = function () {
    mf.b.O.call(this);
    Je(
      this,
      function (a) {
        a.A && nf(this, a);
      },
      this
    );
    var a = this.a();
    this.s.Pd(this);
    this.M(this.v, !0);
    this.ba()
      .j(this, "enter", this.ci)
      .j(this, "highlight", this.di)
      .j(this, "unhighlight", this.ii)
      .j(this, "open", this.vo)
      .j(this, "close", this.bi)
      .j(a, "mousedown", this.vc)
      .j(A.P(a), "mouseup", this.ko)
      .j(
        a,
        ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"],
        this.fo
      );
    this.qb() && of(this, !0);
  };
  function of(a, b) {
    var c = a.ba(),
      d = a.Y();
    b
      ? c.j(d, "focus", a.bg).j(d, "blur", a.Xc).j(a.Yf(), "key", a.Ya)
      : c.la(d, "focus", a.bg).la(d, "blur", a.Xc).la(a.Yf(), "key", a.Ya);
  }
  e.Ma = function () {
    this.hc(-1);
    this.da && this.da.U(!1);
    this.cc = !1;
    mf.b.Ma.call(this);
  };
  e.o = function () {
    mf.b.o.call(this);
    this.ua && (this.ua.Ca(), (this.ua = null));
    this.s = this.da = this.Rb = this.Ai = null;
  };
  e.ci = function () {
    return !0;
  };
  e.di = function (a) {
    var b = Me(this, a.target);
    if (-1 < b && b != this.Z) {
      var c = pf(this);
      c && c.vb(!1);
      this.Z = b;
      c = pf(this);
      this.cc && c.setActive(!0);
      this.Ap &&
        this.da &&
        c != this.da &&
        (R(c, 64) ? c.U(!0) : this.da.U(!1));
    }
    b = this.a();
    null != a.target.a() && Q(b, "activedescendant", a.target.a().id);
  };
  e.ii = function (a) {
    a.target == pf(this) && (this.Z = -1);
    this.a().removeAttribute("aria-activedescendant");
  };
  e.vo = function (a) {
    (a = a.target) &&
      a != this.da &&
      a.getParent() == this &&
      (this.da && this.da.U(!1), (this.da = a));
  };
  e.bi = function (a) {
    a.target == this.da && (this.da = null);
    var b = this.a(),
      c = a.target.a();
    b && U(a.target, 2) && c && ue(b, c);
  };
  e.vc = function (a) {
    this.ha && (this.cc = !0);
    var b = this.Y();
    b && A.bd(b) ? b.focus() : a.preventDefault();
  };
  e.ko = function () {
    this.cc = !1;
  };
  e.fo = function (a) {
    var b;
    a: {
      b = a.target;
      if (this.Rb)
        for (var c = this.a(); b && b !== c; ) {
          var d = b.id;
          if (d in this.Rb) {
            b = this.Rb[d];
            break a;
          }
          b = b.parentNode;
        }
      b = null;
    }
    if (b)
      switch (a.type) {
        case "mousedown":
          b.vc(a);
          break;
        case "mouseup":
          b.wc(a);
          break;
        case "mouseover":
          b.gi(a);
          break;
        case "mouseout":
          b.fi(a);
          break;
        case "contextmenu":
          b.Oe(a);
      }
  };
  e.bg = function () {};
  e.Xc = function () {
    this.hc(-1);
    this.cc = !1;
    this.da && this.da.U(!1);
  };
  e.Ya = function (a) {
    return this.isEnabled() &&
      this.v &&
      (0 != Ke(this) || this.Ai) &&
      this.Za(a)
      ? (a.preventDefault(), a.stopPropagation(), !0)
      : !1;
  };
  e.Za = function (a) {
    var b = pf(this);
    if (
      (b && "function" == typeof b.Ya && b.Ya(a)) ||
      (this.da &&
        this.da != b &&
        "function" == typeof this.da.Ya &&
        this.da.Ya(a))
    )
      return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
      case 27:
        if (this.qb()) this.Y().blur();
        else return !1;
        break;
      case 36:
        qf(this);
        break;
      case 35:
        rf(this);
        break;
      case 38:
        if (this.hd == kf) sf(this);
        else return !1;
        break;
      case 37:
        if (this.hd == jf) this.We() ? tf(this) : sf(this);
        else return !1;
        break;
      case 40:
        if (this.hd == kf) tf(this);
        else return !1;
        break;
      case 39:
        if (this.hd == jf) this.We() ? sf(this) : tf(this);
        else return !1;
        break;
      default:
        return !1;
    }
    return !0;
  };
  function nf(a, b) {
    var c = b.a(),
      c = c.id || (c.id = Ee(b));
    a.Rb || (a.Rb = {});
    a.Rb[c] = b;
  }
  e.qe = function (a, b) {
    mf.b.qe.call(this, a, b);
  };
  e.re = function (a, b, c) {
    a.rf |= 2;
    a.rf |= 64;
    (!this.qb() && this.gn) || a.wa(32, !1);
    a.mf(!1);
    var d = a.getParent() == this ? Me(this, a) : -1;
    mf.b.re.call(this, a, b, c);
    a.A && this.A && nf(this, a);
    a = d;
    -1 == a && (a = Ke(this));
    a == this.Z
      ? (this.Z = Math.min(Ke(this) - 1, b))
      : a > this.Z && b <= this.Z
      ? this.Z++
      : a < this.Z && b > this.Z && this.Z--;
  };
  e.removeChild = function (a, b) {
    if ((a = q(a) ? He(this, a) : a)) {
      var c = Me(this, a);
      -1 != c &&
        (c == this.Z ? (a.vb(!1), (this.Z = -1)) : c < this.Z && this.Z--);
      var d = a.a();
      d &&
        d.id &&
        this.Rb &&
        ((c = this.Rb), (d = d.id), d in c && delete c[d]);
    }
    a = mf.b.removeChild.call(this, a, b);
    a.mf(!0);
    return a;
  };
  e.setOrientation = function (a) {
    if (this.a()) throw Error("Component already rendered");
    this.hd = a;
  };
  e.M = function (a, b) {
    if (b || (this.v != a && this.dispatchEvent(a ? "show" : "hide"))) {
      this.v = a;
      var c = this.a();
      c &&
        (P(c, a),
        this.qb() && hf(this.Y(), this.ha && this.v),
        b || this.dispatchEvent(this.v ? "aftershow" : "afterhide"));
      return !0;
    }
    return !1;
  };
  e.isEnabled = function () {
    return this.ha;
  };
  e.Fa = function (a) {
    this.ha != a &&
      this.dispatchEvent(a ? "enable" : "disable") &&
      (a
        ? ((this.ha = !0),
          Je(this, function (a) {
            a.Km ? delete a.Km : a.Fa(!0);
          }))
        : (Je(this, function (a) {
            a.isEnabled() ? a.Fa(!1) : (a.Km = !0);
          }),
          (this.cc = this.ha = !1)),
      this.qb() && hf(this.Y(), a && this.v));
  };
  e.qb = function () {
    return this.Nh;
  };
  e.Ec = function (a) {
    a != this.Nh && this.A && of(this, a);
    this.Nh = a;
    this.ha && this.v && hf(this.Y(), a);
  };
  e.hc = function (a) {
    (a = Le(this, a)) ? a.vb(!0) : -1 < this.Z && pf(this).vb(!1);
  };
  e.vb = function (a) {
    this.hc(Me(this, a));
  };
  function pf(a) {
    return Le(a, a.Z);
  }
  function qf(a) {
    uf(
      a,
      function (a, c) {
        return (a + 1) % c;
      },
      Ke(a) - 1
    );
  }
  function rf(a) {
    uf(
      a,
      function (a, c) {
        a--;
        return 0 > a ? c - 1 : a;
      },
      0
    );
  }
  function tf(a) {
    uf(
      a,
      function (a, c) {
        return (a + 1) % c;
      },
      a.Z
    );
  }
  function sf(a) {
    uf(
      a,
      function (a, c) {
        a--;
        return 0 > a ? c - 1 : a;
      },
      a.Z
    );
  }
  function uf(a, b, c) {
    c = 0 > c ? Me(a, a.da) : c;
    var d = Ke(a);
    c = b.call(a, c, d);
    for (var g = 0; g <= d; ) {
      var h = Le(a, c);
      if (h && a.Mj(h)) {
        a.hc(c);
        break;
      }
      g++;
      c = b.call(a, c, d);
    }
  }
  e.Mj = function (a) {
    return a.v && a.isEnabled() && R(a, 2);
  };
  function vf() {}
  y(vf, Ne);
  ba(vf);
  vf.prototype.u = function () {
    return "goog-menuheader";
  };
  function wf(a, b, c) {
    V.call(this, a, c || vf.qa(), b);
    this.wa(1, !1);
    this.wa(2, !1);
    this.wa(4, !1);
    this.wa(32, !1);
    this.V = 1;
  }
  y(wf, V);
  We("goog-menuheader", function () {
    return new wf(null);
  });
  function xf() {
    this.Sj = [];
  }
  y(xf, Ne);
  ba(xf);
  function yf(a, b) {
    var c = a.Sj[b];
    if (!c) {
      switch (b) {
        case 0:
          c = a.u() + "-highlight";
          break;
        case 1:
          c = a.u() + "-checkbox";
          break;
        case 2:
          c = a.u() + "-content";
      }
      a.Sj[b] = c;
    }
    return c;
  }
  e = xf.prototype;
  e.Db = function () {
    return "menuitem";
  };
  e.g = function (a) {
    var b = a.i().g("DIV", this.qc(a).join(" "), zf(this, a.Wb(), a.i()));
    Af(this, a, b, R(a, 8) || R(a, 16));
    return b;
  };
  e.H = function (a) {
    return a && a.firstChild;
  };
  e.D = function (a, b) {
    var c = A.Eb(b),
      d = yf(this, 2);
    (c && A.h.contains(c, d)) || b.appendChild(zf(this, b.childNodes, a.i()));
    A.h.contains(b, "goog-option") && (a.Ig(!0), this.Ig(a, b, !0));
    return xf.b.D.call(this, a, b);
  };
  e.Dc = function (a, b) {
    var c = this.H(a),
      d = Bf(this, a) ? c.firstChild : null;
    xf.b.Dc.call(this, a, b);
    d && !Bf(this, a) && c.insertBefore(d, c.firstChild || null);
  };
  function zf(a, b, c) {
    a = yf(a, 2);
    return c.g("DIV", a, b);
  }
  e.fm = function (a, b, c) {
    a && b && Af(this, a, b, c);
  };
  e.Ig = function (a, b, c) {
    a && b && Af(this, a, b, c);
  };
  function Bf(a, b) {
    var c = a.H(b);
    if (c) {
      var c = c.firstChild,
        d = yf(a, 1);
      return !!c && A.ad(c) && A.h.contains(c, d);
    }
    return !1;
  }
  function Af(a, b, c, d) {
    Se(a, c, b.sc());
    Te(a, b, c);
    d != Bf(a, c) &&
      (A.h.enable(c, "goog-option", d),
      (c = a.H(c)),
      d
        ? ((a = yf(a, 1)),
          c.insertBefore(b.i().g("DIV", a), c.firstChild || null))
        : c.removeChild(c.firstChild));
  }
  e.Je = function (a) {
    switch (a) {
      case 2:
        return yf(this, 0);
      case 16:
      case 8:
        return "goog-option-selected";
      default:
        return xf.b.Je.call(this, a);
    }
  };
  e.ag = function (a) {
    var b = yf(this, 0);
    switch (a) {
      case "goog-option-selected":
        return 16;
      case b:
        return 2;
      default:
        return xf.b.ag.call(this, a);
    }
  };
  e.u = function () {
    return "goog-menuitem";
  };
  function Cf(a, b, c, d) {
    V.call(this, a, d || xf.qa(), c);
    this.ic(b);
  }
  y(Cf, V);
  e = Cf.prototype;
  e.I = function () {
    var a = this.Gi;
    return null != a ? a : this.Tc();
  };
  e.ic = function (a) {
    this.Gi = a;
  };
  e.wa = function (a, b) {
    Cf.b.wa.call(this, a, b);
    switch (a) {
      case 8:
        U(this, 16) && !b && af(this, 16, !1) && this.Pa(16, !1);
        var c = this.a();
        c && this.s.fm(this, c, b);
        break;
      case 16:
        (c = this.a()) && this.s.Ig(this, c, b);
    }
  };
  e.fm = function (a) {
    this.wa(8, a);
  };
  e.Ig = function (a) {
    this.wa(16, a);
  };
  e.Tc = function () {
    var a = this.Wb();
    return n(a)
      ? ((a = Ma(a, function (a) {
          return A.ad(a) &&
            (A.h.contains(a, "goog-menuitem-accel") ||
              A.h.contains(a, "goog-menuitem-mnemonic-separator"))
            ? ""
            : A.Qk(a);
        }).join("")),
        qa(a))
      : Cf.b.Tc.call(this);
  };
  e.wc = function (a) {
    var b = this.getParent();
    if (b) {
      var c = b.Hl;
      b.Hl = null;
      if ((b = c && ea(a.clientX)))
        (b = new K(a.clientX, a.clientY)),
          (b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1);
      if (b) return;
    }
    Cf.b.wc.call(this, a);
  };
  e.Za = function (a) {
    return a.keyCode == this.rl && this.jd(a) ? !0 : Cf.b.Za.call(this, a);
  };
  e.Xn = function () {
    return this.rl;
  };
  We("goog-menuitem", function () {
    return new Cf(null);
  });
  Cf.prototype.sc = function () {
    return R(this, 16)
      ? "menuitemcheckbox"
      : R(this, 8)
      ? "menuitemradio"
      : Cf.b.sc.call(this);
  };
  Cf.prototype.getParent = function () {
    return V.prototype.getParent.call(this);
  };
  Cf.prototype.$f = function () {
    return V.prototype.$f.call(this);
  };
  function Df() {}
  y(Df, Ne);
  ba(Df);
  Df.prototype.g = function (a) {
    return a.i().g("DIV", this.u());
  };
  Df.prototype.D = function (a, b) {
    b.id && Fe(a, b.id);
    if ("HR" == b.tagName) {
      var c = b;
      b = this.g(a);
      A.Qd(b, c);
      A.removeNode(c);
    } else A.h.add(b, this.u());
    return b;
  };
  Df.prototype.Dc = function () {};
  Df.prototype.u = function () {
    return "goog-menuseparator";
  };
  function Ef(a, b) {
    V.call(this, null, a || Df.qa(), b);
    this.wa(1, !1);
    this.wa(2, !1);
    this.wa(4, !1);
    this.wa(32, !1);
    this.V = 1;
  }
  y(Ef, V);
  Ef.prototype.O = function () {
    Ef.b.O.call(this);
    se(this.a(), "separator");
  };
  We("goog-menuseparator", function () {
    return new Ef();
  });
  function Ff(a) {
    this.Gj = a || "menu";
  }
  y(Ff, gf);
  ba(Ff);
  e = Ff.prototype;
  e.Qa = function (a) {
    return "UL" == a.tagName || Ff.b.Qa.call(this, a);
  };
  e.Qh = function (a) {
    return "HR" == a.tagName ? new Ef() : Ff.b.Qh.call(this, a);
  };
  e.Mc = function (a, b) {
    return A.contains(a.a(), b);
  };
  e.u = function () {
    return "goog-menu";
  };
  e.Pd = function (a) {
    Ff.b.Pd.call(this, a);
    Q(a.a(), "haspopup", "true");
  };
  We("goog-menuseparator", function () {
    return new Ef();
  });
  function Gf(a, b) {
    mf.call(this, kf, b || Ff.qa(), a);
    this.Ec(!1);
  }
  y(Gf, mf);
  e = Gf.prototype;
  e.hh = !0;
  e.hn = !1;
  e.u = function () {
    return this.s.u();
  };
  e.Mc = function (a) {
    if (this.s.Mc(this, a)) return !0;
    for (var b = 0, c = Ke(this); b < c; b++) {
      var d = Le(this, b);
      if ("function" == typeof d.Mc && d.Mc(a)) return !0;
    }
    return !1;
  };
  e.lc = function (a) {
    this.qe(a, !0);
  };
  e.xd = function (a, b) {
    this.re(a, b, !0);
  };
  e.removeItem = function (a) {
    (a = this.removeChild(a, !0)) && a.Ca();
  };
  e.Le = function (a) {
    return Le(this, a);
  };
  e.Th = function () {
    return Ke(this);
  };
  e.Ik = function () {
    var a = [];
    Je(this, function (b) {
      a.push(b);
    });
    return a;
  };
  e.setPosition = function (a, b) {
    var c = this.v;
    c || P(this.a(), !0);
    var d = this.a(),
      g = a,
      h = b,
      k = Xd(d);
    g instanceof K && ((h = g.y), (g = g.x));
    Rd(d, d.offsetLeft + (g - k.x), d.offsetTop + (h - k.y));
    c || P(this.a(), !1);
  };
  e.M = function (a, b, c) {
    (b = Gf.b.M.call(this, a, b)) && a && this.A && this.hh && this.Y().focus();
    this.Hl = a && c && ea(c.clientX) ? new K(c.clientX, c.clientY) : null;
    return b;
  };
  e.ci = function (a) {
    this.hh && this.Y().focus();
    return Gf.b.ci.call(this, a);
  };
  e.Mj = function (a) {
    return (this.hn || a.isEnabled()) && a.v && R(a, 2);
  };
  e.Sa = function (a) {
    for (
      var b = this.s,
        c = this.i().l("DIV", b.u() + "-content", a),
        d = c.length,
        g = 0;
      g < d;
      g++
    )
      lf(b, this, c[g]);
    Gf.b.Sa.call(this, a);
  };
  e.Za = function (a) {
    var b = Gf.b.Za.call(this, a);
    b ||
      Je(
        this,
        function (c) {
          !b &&
            c.Xn &&
            c.rl == a.keyCode &&
            (this.isEnabled() && this.vb(c), (b = c.Ya(a)));
        },
        this
      );
    return b;
  };
  e.hc = function (a) {
    Gf.b.hc.call(this, a);
    (a = Le(this, a)) && Yd(a.a(), this.a());
  };
  function Hf() {}
  Hf.prototype.Lb = function () {};
  function If(a, b, c) {
    this.element = a;
    this.Be = b;
    this.Ep = c;
  }
  y(If, Hf);
  If.prototype.Lb = function (a, b, c) {
    pe(this.element, this.Be, a, b, void 0, c, this.Ep);
  };
  function Jf(a, b, c, d) {
    If.call(this, a, b);
    this.kg = c ? 5 : 0;
    this.Oi = d || void 0;
  }
  y(Jf, If);
  Jf.prototype.Wn = function () {
    return this.kg;
  };
  Jf.prototype.bj = function (a) {
    this.kg = a;
  };
  Jf.prototype.Lb = function (a, b, c, d) {
    var g = pe(this.element, this.Be, a, b, null, c, 10, d, this.Oi);
    if (g & 496) {
      var h = Kf(g, this.Be);
      b = Kf(g, b);
      g = pe(this.element, h, a, b, null, c, 10, d, this.Oi);
      g & 496 &&
        ((h = Kf(g, h)),
        (b = Kf(g, b)),
        pe(this.element, h, a, b, null, c, this.kg, d, this.Oi));
    }
  };
  function Kf(a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b;
  }
  function Lf(a, b, c, d) {
    Jf.call(this, a, b, c || d);
    (c || d) && this.bj(65 | (d ? 32 : 132));
  }
  y(Lf, Jf);
  function Mf() {}
  y(Mf, Ve);
  ba(Mf);
  e = Mf.prototype;
  e.g = function (a) {
    var b = { class: "goog-inline-block " + this.qc(a).join(" ") },
      b = a.i().g("DIV", b, this.Of(a.Wb(), a.i()));
    this.ee(b, a.Wc());
    return b;
  };
  e.Db = function () {
    return "button";
  };
  e.H = function (a) {
    return a && a.firstChild && a.firstChild.firstChild;
  };
  e.Of = function (a, b) {
    return b.g(
      "DIV",
      "goog-inline-block " + (this.u() + "-outer-box"),
      b.g("DIV", "goog-inline-block " + (this.u() + "-inner-box"), a)
    );
  };
  e.Qa = function (a) {
    return "DIV" == a.tagName;
  };
  e.D = function (a, b) {
    Nf(b, !0);
    Nf(b, !1);
    var c;
    a: {
      c = a.i().Eb(b);
      var d = this.u() + "-outer-box";
      if (
        c &&
        A.h.contains(c, d) &&
        ((c = a.i().Eb(c)),
        (d = this.u() + "-inner-box"),
        c && A.h.contains(c, d))
      ) {
        c = !0;
        break a;
      }
      c = !1;
    }
    c || b.appendChild(this.Of(b.childNodes, a.i()));
    A.h.addAll(b, ["goog-inline-block", this.u()]);
    return Mf.b.D.call(this, a, b);
  };
  e.u = function () {
    return "goog-custom-button";
  };
  function Nf(a, b) {
    if (a)
      for (
        var c = b ? a.firstChild : a.lastChild, d;
        c && c.parentNode == a;

      ) {
        d = b ? c.nextSibling : c.previousSibling;
        if (3 == c.nodeType) {
          var g = c.nodeValue;
          if ("" == ra(g)) a.removeChild(c);
          else {
            c.nodeValue = b
              ? g.replace(/^[\s\xa0]+/, "")
              : g.replace(/[\s\xa0]+$/, "");
            break;
          }
        } else break;
        c = d;
      }
  }
  function Of() {}
  y(Of, Mf);
  ba(Of);
  e = Of.prototype;
  e.H = function (a) {
    return Of.b.H.call(this, a && a.firstChild);
  };
  e.D = function (a, b) {
    var c = A.l("*", "goog-menu", b)[0];
    if (c) {
      P(c, !1);
      A.appendChild(A.P(c).body, c);
      var d = new Gf();
      d.D(c);
      a.ce(d);
    }
    return Of.b.D.call(this, a, b);
  };
  e.Of = function (a, b) {
    return Of.b.Of.call(this, [this.createCaption(a, b), this.Pf(b)], b);
  };
  e.createCaption = function (a, b) {
    return b.g("DIV", "goog-inline-block " + (this.u() + "-caption"), a);
  };
  e.Pf = function (a) {
    return a.g(
      "DIV",
      "goog-inline-block " + (this.u() + "-dropdown"),
      "\u00a0"
    );
  };
  e.u = function () {
    return "goog-menu-button";
  };
  var Pf = C("Firefox"),
    Qf = Wb() || C("iPod"),
    Rf = C("iPad"),
    Sf = C("Android") && !(Vb() || C("Firefox") || Ub() || C("Silk")),
    Tf = Vb(),
    Uf =
      C("Safari") &&
      !(Vb() || C("Coast") || Ub() || C("Edge") || C("Silk") || C("Android")) &&
      !(Wb() || C("iPad") || C("iPod"));
  function Vf(a, b, c, d, g) {
    ef.call(this, a, c || Of.qa(), d);
    this.wa(64, !0);
    this.ed = new Lf(null, 5);
    b && this.ce(b);
    this.Vo = null;
    this.w = new kd(500);
    (!Qf && !Rf) || I("533.17.9") || (this.fg = !0);
    this.Wo = g || Ff.qa();
  }
  y(Vf, ef);
  e = Vf.prototype;
  e.fg = !1;
  e.Ip = !1;
  e.Wp = !1;
  e.O = function () {
    Vf.b.O.call(this);
    Wf(this, !0);
    this.m && Xf(this, this.m, !0);
    Q(this.f, "haspopup", !!this.m);
  };
  e.Ma = function () {
    Vf.b.Ma.call(this);
    Wf(this, !1);
    if (this.m) {
      this.U(!1);
      this.m.Ma();
      Xf(this, this.m, !1);
      var a = this.m.a();
      a && A.removeNode(a);
    }
  };
  e.o = function () {
    Vf.b.o.call(this);
    this.m && (this.m.Ca(), delete this.m);
    delete this.Gp;
    this.w.Ca();
  };
  e.vc = function (a) {
    Vf.b.vc.call(this, a);
    this.$c() && (this.U(!U(this, 64), a), this.m && (this.m.cc = U(this, 64)));
  };
  e.wc = function (a) {
    Vf.b.wc.call(this, a);
    this.m && !this.$c() && (this.m.cc = !1);
  };
  e.jd = function () {
    this.setActive(!1);
    return !0;
  };
  e.jo = function (a) {
    this.m && this.m.v && !this.Mc(a.target) && this.U(!1);
  };
  e.Mc = function (a) {
    return (a && A.contains(this.a(), a)) || (this.m && this.m.Mc(a)) || !1;
  };
  e.Za = function (a) {
    if (32 == a.keyCode) {
      if ((a.preventDefault(), "keyup" != a.type)) return !0;
    } else if ("key" != a.type) return !1;
    if (this.m && this.m.v) {
      var b = 13 == a.keyCode || 32 == a.keyCode,
        c = this.m.Ya(a);
      return 27 == a.keyCode || b ? (this.U(!1), !0) : c;
    }
    return 40 == a.keyCode ||
      38 == a.keyCode ||
      32 == a.keyCode ||
      13 == a.keyCode
      ? (this.U(!0, a), !0)
      : !1;
  };
  e.ei = function () {
    this.U(!1);
  };
  e.po = function () {
    this.$c() || this.U(!1);
  };
  e.Xc = function (a) {
    this.fg || this.U(!1);
    Vf.b.Xc.call(this, a);
  };
  function W(a) {
    a.m || a.ce(new Gf(a.i(), a.Wo));
    return a.m || null;
  }
  e.ce = function (a) {
    var b = this.m;
    if (
      a != b &&
      (b && (this.U(!1), this.A && Xf(this, b, !1), delete this.m),
      this.A && Q(this.f, "haspopup", !!a),
      a)
    ) {
      this.m = a;
      Ge(a, this);
      a.M(!1);
      var c = this.fg;
      (a.hh = c) && a.Ec(!0);
      this.A && Xf(this, a, !0);
    }
    return b;
  };
  e.lc = function (a) {
    W(this).qe(a, !0);
  };
  e.xd = function (a, b) {
    W(this).re(a, b, !0);
  };
  e.removeItem = function (a) {
    (a = W(this).removeChild(a, !0)) && a.Ca();
  };
  e.Le = function (a) {
    return this.m ? Le(this.m, a) : null;
  };
  e.Th = function () {
    return this.m ? Ke(this.m) : 0;
  };
  e.M = function (a, b) {
    var c = Vf.b.M.call(this, a, b);
    c && !this.v && this.U(!1);
    return c;
  };
  e.Fa = function (a) {
    Vf.b.Fa.call(this, a);
    this.isEnabled() || this.U(!1);
  };
  function Yf(a) {
    a = a.ed.Be;
    return 5 == a || 4 == a;
  }
  function Zf(a) {
    a.ed.bj && a.ed.bj(33);
  }
  function $f(a) {
    return a.ed.Wn && !!(a.ed.kg & 32);
  }
  e.U = function (a, b) {
    Vf.b.U.call(this, a);
    if (this.m && U(this, 64) == a) {
      if (a) {
        if (!this.m.A)
          if (this.Ip) {
            var c = A.Vh(this.a());
            c ? Ie(this.m, c.parentNode, c) : this.m.tb(this.a().parentNode);
          } else this.m.tb();
        this.Im = Wd(this.a());
        this.Kj = de(this.a());
        this.Ti();
        c = !!b && (13 == b.keyCode || 32 == b.keyCode);
        (b && (40 == b.keyCode || 38 == b.keyCode)) || (c && this.Wp)
          ? qf(this.m)
          : this.m.hc(-1);
      } else {
        this.setActive(!1);
        this.m.cc = !1;
        if ((c = this.a())) Q(c, "activedescendant", ""), Q(c, "owns", "");
        null != this.wg &&
          ((this.wg = void 0), (c = this.m.a()) && be(c, "", ""));
      }
      this.m.M(a, !1, b);
      if (!this.Ab) {
        var c = this.ba(),
          d = a ? c.j : c.la;
        d.call(c, this.i().F(), "mousedown", this.jo, !0);
        this.fg && d.call(c, this.m, "blur", this.po);
        d.call(c, this.w, ld, this.xp);
        a ? this.w.start() : this.w.stop();
      }
    }
    this.m && this.m.a() && this.m.f.removeAttribute("aria-hidden");
  };
  e.Ti = function () {
    if (this.m.A) {
      var a = this.ed;
      this.ed.element = this.Gp || this.a();
      var b = this.m.a();
      this.m.v || ((b.style.visibility = "hidden"), P(b, !0));
      !this.wg && $f(this) && (this.wg = O(b));
      a.Lb(b, a.Be ^ 1, this.Vo, this.wg);
      this.m.v || (P(b, !1), (b.style.visibility = "visible"));
    }
  };
  e.xp = function () {
    var a = de(this.a()),
      b = Wd(this.a()),
      c;
    c = this.Kj;
    (c = !(
      c == a ||
      (c &&
        a &&
        c.left == a.left &&
        c.width == a.width &&
        c.top == a.top &&
        c.height == a.height)
    )) ||
      ((c = this.Im),
      (c = !(
        c == b ||
        (c &&
          b &&
          c.top == b.top &&
          c.right == b.right &&
          c.bottom == b.bottom &&
          c.left == b.left)
      )));
    c && ((this.Kj = a), (this.Im = b), this.Ti());
  };
  function Xf(a, b, c) {
    var d = a.ba();
    c = c ? d.j : d.la;
    c.call(d, b, "action", a.ei);
    c.call(d, b, "close", a.bi);
    c.call(d, b, "highlight", a.di);
    c.call(d, b, "unhighlight", a.ii);
  }
  function Wf(a, b) {
    var c = a.ba();
    (b ? c.j : c.la).call(c, a.a(), "keydown", a.mo);
  }
  e.di = function (a) {
    (a = a.target.a()) && ag(this, a);
  };
  e.mo = function (a) {
    R(this, 32) && this.Y() && this.m && this.m.v && a.stopPropagation();
  };
  e.ii = function () {
    if (!pf(this.m)) {
      var a = this.a();
      Q(a, "activedescendant", "");
      Q(a, "owns", "");
    }
  };
  e.bi = function (a) {
    if (U(this, 64) && a.target instanceof Cf) {
      a = a.target;
      var b = a.a();
      a.v && U(a, 2) && null != b && ag(this, b);
    }
  };
  function ag(a, b) {
    var c = a.a(),
      d = te(b, "activedescendant"),
      d = A.P(b).getElementById(d) || b;
    if (!d.id) {
      var g = ze.qa();
      d.id = Ae(g);
    }
    ue(c, d);
    Q(c, "owns", d.id);
  }
  We("goog-menu-button", function () {
    return new Vf(null);
  });
  function bg() {}
  y(bg, ff);
  ba(bg);
  e = bg.prototype;
  e.g = function (a) {
    var b = { class: "goog-inline-block " + this.qc(a).join(" ") },
      b = a
        .i()
        .g("DIV", b, [this.createCaption(a.Wb(), a.i()), this.Pf(a.i())]);
    this.ee(b, a.Wc());
    return b;
  };
  e.H = function (a) {
    return a && a.firstChild;
  };
  e.D = function (a, b) {
    var c = A.l("*", "goog-menu", b)[0];
    if (c) {
      P(c, !1);
      a.i().F().body.appendChild(c);
      var d = new Gf();
      d.D(c);
      a.ce(d);
    }
    A.l("*", this.u() + "-caption", b)[0] ||
      b.appendChild(this.createCaption(b.childNodes, a.i()));
    A.l("*", this.u() + "-dropdown", b)[0] || b.appendChild(this.Pf(a.i()));
    return bg.b.D.call(this, a, b);
  };
  e.createCaption = function (a, b) {
    return b.g("DIV", "goog-inline-block " + (this.u() + "-caption"), a);
  };
  e.Pf = function (a) {
    return a.g(
      "DIV",
      {
        class: "goog-inline-block " + (this.u() + "-dropdown"),
        "aria-hidden": !0,
      },
      "\u00a0"
    );
  };
  e.u = function () {
    return "goog-flat-menu-button";
  };
  We("goog-flat-menu-button", function () {
    return new Vf(null, null, bg.qa());
  });
  function cg(a) {
    N.call(this);
    this.$b = [];
    fg(this, a);
  }
  y(cg, N);
  e = cg.prototype;
  e.gc = null;
  e.Zl = null;
  e.Th = function () {
    return this.$b.length;
  };
  e.Le = function (a) {
    return this.$b[a] || null;
  };
  function fg(a, b) {
    b &&
      (B(
        b,
        function (a) {
          gg(this, a, !1);
        },
        a
      ),
      Ta(a.$b, b));
  }
  e.lc = function (a) {
    this.xd(a, this.Th());
  };
  e.xd = function (a, b) {
    a && (gg(this, a, !1), Ua(this.$b, b, 0, a));
  };
  e.removeItem = function (a) {
    a &&
      Qa(this.$b, a) &&
      a == this.gc &&
      ((this.gc = null), this.dispatchEvent("select"));
  };
  e.Vc = function () {
    return this.gc;
  };
  e.Ik = function () {
    return Sa(this.$b);
  };
  e.rd = function (a) {
    a != this.gc && (gg(this, this.gc, !1), (this.gc = a), gg(this, a, !0));
    this.dispatchEvent("select");
  };
  e.Kd = function () {
    var a = this.gc;
    return a ? Ka(this.$b, a) : -1;
  };
  e.Kg = function (a) {
    this.rd(this.Le(a));
  };
  e.clear = function () {
    var a = this.$b;
    if (!n(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.gc = null;
  };
  e.o = function () {
    cg.b.o.call(this);
    delete this.$b;
    this.gc = null;
  };
  function gg(a, b, c) {
    b &&
      ("function" == typeof a.Zl
        ? a.Zl(b, c)
        : "function" == typeof b.ej && b.ej(c));
  }
  function hg(a, b, c, d, g) {
    Vf.call(this, a, b, c, d, g || new Ff("listbox"));
    this.Eh = this.Wb();
    this.si = null;
    this.dj("listbox");
  }
  y(hg, Vf);
  e = hg.prototype;
  e.C = null;
  e.O = function () {
    hg.b.O.call(this);
    ig(this);
    jg(this);
  };
  e.Sa = function (a) {
    hg.b.Sa.call(this, a);
    (a = this.Tc()) ? ((this.Eh = a), ig(this)) : this.Vc() || this.Kg(0);
  };
  e.o = function () {
    hg.b.o.call(this);
    this.C && (this.C.Ca(), (this.C = null));
    this.Eh = null;
  };
  e.ei = function (a) {
    this.rd(a.target);
    hg.b.ei.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action");
  };
  e.yo = function () {
    var a = this.Vc();
    hg.b.ic.call(this, a && a.I());
    ig(this);
  };
  e.ce = function (a) {
    var b = hg.b.ce.call(this, a);
    a != b &&
      (this.C && this.C.clear(),
      a &&
        (this.C
          ? Je(
              a,
              function (a) {
                kg(a);
                this.C.lc(a);
              },
              this
            )
          : lg(this, a)));
    return b;
  };
  e.lc = function (a) {
    kg(a);
    hg.b.lc.call(this, a);
    this.C ? this.C.lc(a) : lg(this, W(this));
    mg(this);
  };
  e.xd = function (a, b) {
    kg(a);
    hg.b.xd.call(this, a, b);
    this.C ? this.C.xd(a, b) : lg(this, W(this));
  };
  e.removeItem = function (a) {
    hg.b.removeItem.call(this, a);
    this.C && this.C.removeItem(a);
  };
  e.rd = function (a) {
    if (this.C) {
      var b = this.Vc();
      this.C.rd(a);
      a != b && this.dispatchEvent("change");
    }
  };
  e.Kg = function (a) {
    this.C && this.rd(this.C.Le(a));
  };
  e.ic = function (a) {
    if (null != a && this.C)
      for (var b = 0, c; (c = this.C.Le(b)); b++)
        if (c && "function" == typeof c.I && c.I() == a) {
          this.rd(c);
          return;
        }
    this.rd(null);
  };
  e.I = function () {
    var a = this.Vc();
    return a ? a.I() : null;
  };
  e.Vc = function () {
    return this.C ? this.C.Vc() : null;
  };
  e.Kd = function () {
    return this.C ? this.C.Kd() : -1;
  };
  function lg(a, b) {
    a.C = new cg();
    b &&
      Je(
        b,
        function (a) {
          kg(a);
          this.C.lc(a);
        },
        a
      );
    jg(a);
  }
  function jg(a) {
    a.C && a.ba().j(a.C, "select", a.yo);
  }
  function ig(a) {
    var b = a.Vc();
    a.Dc(b ? b.Tc() : a.Eh);
    var c = a.s.H(a.a());
    c &&
      a.i().ad(c) &&
      (null == a.si && (a.si = te(c, "label")),
      (b = (b = b ? b.a() : null) ? te(b, "label") : a.si),
      Q(c, "label", b),
      mg(a));
  }
  function mg(a) {
    var b = a.s;
    if (b && (b = b.H(a.a()))) {
      var c = a.f;
      b.id || (b.id = Ae(ze.qa()));
      se(b, "option");
      Q(c, "activedescendant", b.id);
      a.C &&
        ((c = a.C.Ik()),
        Q(b, "setsize", ng(c)),
        (a = a.C.Kd()),
        Q(b, "posinset", 0 <= a ? ng(Va(c, 0, a + 1)) : 0));
    }
  }
  function ng(a) {
    return Oa(a, function (a) {
      return a instanceof Cf;
    });
  }
  function kg(a) {
    a.dj(a instanceof Cf ? "option" : "separator");
  }
  e.U = function (a, b) {
    hg.b.U.call(this, a, b);
    U(this, 64) ? W(this).hc(this.Kd()) : mg(this);
  };
  We("goog-select", function () {
    return new hg(null);
  });
  var og =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
  function pg(a, b) {
    if (a)
      for (var c = a.split("&"), d = 0; d < c.length; d++) {
        var g = c[d].indexOf("="),
          h = null,
          k = null;
        0 <= g
          ? ((h = c[d].substring(0, g)), (k = c[d].substring(g + 1)))
          : (h = c[d]);
        b(h, k ? sa(k) : "");
      }
  }
  function X(a, b) {
    this.lb = this.td = this.Cc = "";
    this.Zd = null;
    this.Ub = this.cb = "";
    this.bb = this.Oo = !1;
    var c;
    if (a instanceof X)
      (this.bb = m(b) ? b : a.bb),
        qg(this, a.Cc),
        (c = a.td),
        Y(this),
        (this.td = c),
        (c = a.lb),
        Y(this),
        (this.lb = c),
        rg(this, a.Zd),
        (c = a.cb),
        Y(this),
        (this.cb = c),
        sg(this, a.ea.clone()),
        tg(this, a.Ub);
    else if (a && (c = String(a).match(og))) {
      this.bb = !!b;
      qg(this, c[1] || "", !0);
      var d = c[2] || "";
      Y(this);
      this.td = ug(d);
      d = c[3] || "";
      Y(this);
      this.lb = ug(d, !0);
      rg(this, c[4]);
      d = c[5] || "";
      Y(this);
      this.cb = ug(d, !0);
      sg(this, c[6] || "", !0);
      tg(this, c[7] || "", !0);
    } else (this.bb = !!b), (this.ea = new vg(null, 0, this.bb));
  }
  X.prototype.toString = function () {
    var a = [],
      b = this.Cc;
    b && a.push(wg(b, xg, !0), ":");
    var c = this.lb;
    if (c || "file" == b)
      a.push("//"),
        (b = this.td) && a.push(wg(b, xg, !0), "@"),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (c = this.Zd),
        null != c && a.push(":", String(c));
    if ((c = this.cb))
      this.lb && "/" != c.charAt(0) && a.push("/"),
        a.push(wg(c, "/" == c.charAt(0) ? yg : zg, !0));
    (c = this.ea.toString()) && a.push("?", c);
    (c = this.Ub) && a.push("#", wg(c, Ag));
    return a.join("");
  };
  X.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.Cc;
    c ? qg(b, a.Cc) : (c = !!a.td);
    if (c) {
      var d = a.td;
      Y(b);
      b.td = d;
    } else c = !!a.lb;
    c ? ((d = a.lb), Y(b), (b.lb = d)) : (c = null != a.Zd);
    d = a.cb;
    if (c) rg(b, a.Zd);
    else if ((c = !!a.cb)) {
      if ("/" != d.charAt(0))
        if (this.lb && !this.cb) d = "/" + d;
        else {
          var g = b.cb.lastIndexOf("/");
          -1 != g && (d = b.cb.substr(0, g + 1) + d);
        }
      g = d;
      if (".." == g || "." == g) d = "";
      else if (-1 != g.indexOf("./") || -1 != g.indexOf("/.")) {
        for (
          var d = 0 == g.lastIndexOf("/", 0), g = g.split("/"), h = [], k = 0;
          k < g.length;

        ) {
          var l = g[k++];
          "." == l
            ? d && k == g.length && h.push("")
            : ".." == l
            ? ((1 < h.length || (1 == h.length && "" != h[0])) && h.pop(),
              d && k == g.length && h.push(""))
            : (h.push(l), (d = !0));
        }
        d = h.join("/");
      } else d = g;
    }
    c ? (Y(b), (b.cb = d)) : (c = "" !== a.ea.toString());
    c ? sg(b, ug(a.ea.toString())) : (c = !!a.Ub);
    c && tg(b, a.Ub);
    return b;
  };
  X.prototype.clone = function () {
    return new X(this);
  };
  function qg(a, b, c) {
    Y(a);
    a.Cc = c ? ug(b, !0) : b;
    a.Cc && (a.Cc = a.Cc.replace(/:$/, ""));
  }
  function rg(a, b) {
    Y(a);
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.Zd = b;
    } else a.Zd = null;
  }
  function sg(a, b, c) {
    Y(a);
    b instanceof vg
      ? ((a.ea = b), a.ea.aj(a.bb))
      : (c || (b = wg(b, Bg)), (a.ea = new vg(b, 0, a.bb)));
  }
  function Cg(a) {
    return a.Ub;
  }
  function tg(a, b, c) {
    Y(a);
    a.Ub = c ? ug(b) : b;
  }
  function Y(a) {
    if (a.Oo) throw Error("Tried to modify a read-only Uri");
  }
  X.prototype.aj = function (a) {
    this.bb = a;
    this.ea && this.ea.aj(a);
    return this;
  };
  function Dg(a) {
    return a instanceof X ? a.clone() : new X(a, void 0);
  }
  function ug(a, b) {
    return a
      ? b
        ? decodeURI(a.replace(/%25/g, "%2525"))
        : decodeURIComponent(a)
      : "";
  }
  function wg(a, b, c) {
    return q(a)
      ? ((a = encodeURI(a).replace(b, Eg)),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a)
      : null;
  }
  function Eg(a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  }
  var xg = /[#\/\?@]/g,
    zg = /[\#\?:]/g,
    yg = /[\#\?]/g,
    Bg = /[\#\?@]/g,
    Ag = /#/g;
  function vg(a, b, c) {
    this.aa = this.R = null;
    this.Ta = a || null;
    this.bb = !!c;
  }
  function Fg(a) {
    a.R ||
      ((a.R = new Ob()),
      (a.aa = 0),
      a.Ta &&
        pg(a.Ta, function (b, c) {
          a.add(sa(b), c);
        }));
  }
  e = vg.prototype;
  e.add = function (a, b) {
    Fg(this);
    this.Ta = null;
    a = Gg(this, a);
    var c = this.R.get(a);
    c || this.R.set(a, (c = []));
    c.push(b);
    this.aa++;
    return this;
  };
  e.remove = function (a) {
    Fg(this);
    a = Gg(this, a);
    return this.R.ze(a)
      ? ((this.Ta = null), (this.aa -= this.R.get(a).length), this.R.remove(a))
      : !1;
  };
  e.clear = function () {
    this.R = this.Ta = null;
    this.aa = 0;
  };
  e.ze = function (a) {
    Fg(this);
    a = Gg(this, a);
    return this.R.ze(a);
  };
  e.rc = function () {
    Fg(this);
    for (var a = this.R.ob(), b = this.R.rc(), c = [], d = 0; d < b.length; d++)
      for (var g = a[d], h = 0; h < g.length; h++) c.push(b[d]);
    return c;
  };
  e.ob = function (a) {
    Fg(this);
    var b = [];
    if (q(a)) this.ze(a) && (b = Ra(b, this.R.get(Gg(this, a))));
    else {
      a = this.R.ob();
      for (var c = 0; c < a.length; c++) b = Ra(b, a[c]);
    }
    return b;
  };
  e.set = function (a, b) {
    Fg(this);
    this.Ta = null;
    a = Gg(this, a);
    this.ze(a) && (this.aa -= this.R.get(a).length);
    this.R.set(a, [b]);
    this.aa++;
    return this;
  };
  e.get = function (a, b) {
    var c = a ? this.ob(a) : [];
    return 0 < c.length ? String(c[0]) : b;
  };
  e.toString = function () {
    if (this.Ta) return this.Ta;
    if (!this.R) return "";
    for (var a = [], b = this.R.rc(), c = 0; c < b.length; c++)
      for (
        var d = b[c], g = encodeURIComponent(String(d)), d = this.ob(d), h = 0;
        h < d.length;
        h++
      ) {
        var k = g;
        "" !== d[h] && (k += "=" + encodeURIComponent(String(d[h])));
        a.push(k);
      }
    return (this.Ta = a.join("&"));
  };
  e.clone = function () {
    var a = new vg();
    a.Ta = this.Ta;
    this.R && ((a.R = this.R.clone()), (a.aa = this.aa));
    return a;
  };
  function Gg(a, b) {
    var c = String(b);
    a.bb && (c = c.toLowerCase());
    return c;
  }
  e.aj = function (a) {
    a &&
      !this.bb &&
      (Fg(this),
      (this.Ta = null),
      this.R.forEach(function (a, c) {
        var d = c.toLowerCase();
        c != d &&
          (this.remove(c),
          this.remove(d),
          0 < a.length &&
            ((this.Ta = null),
            this.R.set(Gg(this, d), Sa(a)),
            (this.aa += a.length)));
      }, this));
    this.bb = a;
  };
  e.extend = function (a) {
    for (var b = 0; b < arguments.length; b++)
      Mb(
        arguments[b],
        function (a, b) {
          this.add(b, a);
        },
        this
      );
  };
  function Hg() {
    N.call(this);
    this.V = Ig;
    this.endTime = this.startTime = null;
  }
  y(Hg, N);
  var Ig = 0;
  Hg.prototype.Wa = function () {
    this.zb("begin");
  };
  Hg.prototype.Jb = function () {
    this.zb("end");
  };
  Hg.prototype.Ki = function () {
    this.zb("finish");
  };
  Hg.prototype.zb = function (a) {
    this.dispatchEvent(a);
  };
  var Jg = {},
    Kg = null;
  function Lg(a) {
    a = ia(a);
    delete Jg[a];
    $a(Jg) && Kg && Kg.stop();
  }
  function Mg() {
    Kg ||
      (Kg = new od(function () {
        Ng();
      }, 20));
    var a = Kg;
    a.$c() || a.start();
  }
  function Ng() {
    var a = na();
    Wa(Jg, function (b) {
      Og(b, a);
    });
    $a(Jg) || Mg();
  }
  function Pg(a, b, c, d) {
    Hg.call(this);
    if (!n(a) || !n(b)) throw Error("Start and end parameters must be arrays");
    if (a.length != b.length)
      throw Error("Start and end points must be the same length");
    this.he = a;
    this.mk = b;
    this.duration = c;
    this.zj = d;
    this.coords = [];
    this.Jc = !1;
    this.eb = 0;
  }
  y(Pg, Hg);
  e = Pg.prototype;
  e.play = function (a) {
    if (a || this.V == Ig) (this.eb = 0), (this.coords = this.he);
    else if (1 == this.V) return !1;
    Lg(this);
    this.startTime = a = na();
    -1 == this.V && (this.startTime -= this.duration * this.eb);
    this.endTime = this.startTime + this.duration;
    this.eb || this.Wa();
    this.zb("play");
    -1 == this.V && this.zb("resume");
    this.V = 1;
    var b = ia(this);
    b in Jg || (Jg[b] = this);
    Mg();
    Og(this, a);
    return !0;
  };
  e.stop = function (a) {
    Lg(this);
    this.V = Ig;
    a && (this.eb = 1);
    Qg(this, this.eb);
    this.zb("stop");
    this.Jb();
  };
  e.pause = function () {
    1 == this.V && (Lg(this), (this.V = -1), this.zb("pause"));
  };
  e.o = function () {
    this.V == Ig || this.stop(!1);
    this.zb("destroy");
    Pg.b.o.call(this);
  };
  function Og(a, b) {
    a.eb = (b - a.startTime) / (a.endTime - a.startTime);
    1 <= a.eb && (a.eb = 1);
    Qg(a, a.eb);
    1 == a.eb ? ((a.V = Ig), Lg(a), a.Ki(), a.Jb()) : 1 == a.V && a.dc();
  }
  function Qg(a, b) {
    ga(a.zj) && (b = a.zj(b));
    a.coords = Array(a.he.length);
    for (var c = 0; c < a.he.length; c++)
      a.coords[c] = (a.mk[c] - a.he[c]) * b + a.he[c];
  }
  e.dc = function () {
    this.zb("animate");
  };
  e.zb = function (a) {
    this.dispatchEvent(new Rg(a, this));
  };
  function Rg(a, b) {
    L.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.eb = b.eb;
    this.state = b.V;
    this.jn = b;
  }
  y(Rg, L);
  var Sg = {};
  function Tg(a) {
    return 1 - Math.pow(1 - a, 3);
  }
  function Ug(a) {
    return 3 * a * a - 2 * a * a * a;
  }
  function Vg(a, b) {
    L.call(this, "navigate");
    this.No = b;
  }
  y(Vg, L);
  function Wg() {
    return (
      !(C("iPad") || (C("Android") && !C("Mobile")) || C("Silk")) &&
      (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
    );
  }
  function Xg(a, b) {
    for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
    return c.join("\x0B");
  }
  function Yg(a, b, c, d) {
    N.call(this);
    if (a && !b)
      throw Error(
        "Can't use invisible history without providing a blank page."
      );
    var g;
    if (c) g = c;
    else {
      g = "history_state" + Zg;
      var h = Fb("input", {
        type: "text",
        name: g,
        id: g,
        style: ib("display:none"),
      });
      A.L.Sf(document, h);
      g = A.a(g);
    }
    this.Qe = g;
    this.jc = c ? A.Ea(A.P(c)) : window;
    this.oi = q(b) ? xb(b) : b;
    D &&
      !b &&
      ((b =
        "https" == window.location.protocol
          ? ib("https:///")
          : ib('javascript:""')),
      (this.oi = b = xb(hb(b))));
    this.w = new kd($g);
    Dc(this, this.w);
    this.ud = !a;
    this.T = new we(this);
    if (a || ah) {
      var k;
      if (d) k = d;
      else {
        a = "history_iframe" + Zg;
        d = { id: a, style: ib("display:none"), sandbox: void 0 };
        b = {};
        b.src = this.oi || null;
        b.srcdoc = null;
        c = { sandbox: "" };
        g = {};
        for (k in b) g[k] = b[k];
        for (k in c) g[k] = c[k];
        for (k in d) {
          h = k.toLowerCase();
          if (h in b)
            throw Error(
              'Cannot override "' +
                h +
                '" attribute, got "' +
                k +
                '" with value "' +
                d[k] +
                '"'
            );
          h in c && delete g[h];
          g[k] = d[k];
        }
        k = Gb("iframe", g, void 0);
        A.L.Sf(document, k);
        k = A.a(a);
      }
      this.dg = k;
      this.Fm = !0;
    }
    ah && (this.T.j(this.jc, "load", this.hp), (this.gm = this.Hh = !1));
    this.ud ? this.nf(bh(this), !0) : ch(this, this.Qe.value);
    Zg++;
  }
  y(Yg, N);
  Yg.prototype.ha = !1;
  Yg.prototype.Vd = !1;
  Yg.prototype.Td = null;
  var dh = (function (a, b) {
      var c = b || Xg;
      return function () {
        var b = this || f,
          b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}),
          g = c(ia(a), arguments);
        return b.hasOwnProperty(g) ? b[g] : (b[g] = a.apply(this, arguments));
      };
    })(function () {
      return D ? 8 <= lc : "onhashchange" in f;
    }),
    ah = D && !(8 <= lc);
  e = Yg.prototype;
  e.Ud = null;
  e.o = function () {
    Yg.b.o.call(this);
    this.T.Ca();
    this.Fa(!1);
  };
  e.Fa = function (a) {
    if (a != this.ha)
      if (ah && !this.Hh) this.gm = a;
      else if (a)
        if (
          (Xb
            ? this.T.j(this.jc.document, eh, this.Cp)
            : F && this.T.j(this.jc, "pageshow", this.vp),
          dh() && this.ud)
        )
          this.T.j(this.jc, "hashchange", this.lp),
            (this.ha = !0),
            this.dispatchEvent(new Vg(bh(this), !1));
        else {
          if (!D || Wg() || this.Hh)
            this.T.j(this.w, ld, t(this.Qj, this, !0)),
              (this.ha = !0),
              ah ||
                ((this.Td = bh(this)),
                this.dispatchEvent(new Vg(bh(this), !1))),
              this.w.start();
        }
      else (this.ha = !1), this.T.fb(), this.w.stop();
  };
  e.hp = function () {
    this.Hh = !0;
    this.Qe.value && ch(this, this.Qe.value, !0);
    this.Fa(this.gm);
  };
  e.vp = function (a) {
    a.Xa.persisted && (this.Fa(!1), this.Fa(!0));
  };
  e.lp = function () {
    var a = fh(this.jc);
    a != this.Td && gh(this, a, !0);
  };
  function bh(a) {
    return null != a.Ud ? a.Ud : a.ud ? fh(a.jc) : hh(a) || "";
  }
  function ih(a, b) {
    bh(a) != b &&
      (a.ud
        ? (a.nf(b, !1),
          dh() || (D && !Wg() && ch(a, b, !1, void 0)),
          a.ha && a.Qj(!1))
        : (ch(a, b, !1),
          (a.Ud = a.Td = a.Qe.value = b),
          a.dispatchEvent(new Vg(0, !1))));
  }
  function fh(a) {
    a = a.location.href;
    var b = a.indexOf("#");
    return 0 > b ? "" : a.substring(b + 1);
  }
  e.nf = function (a, b) {
    var c = this.jc.location,
      d = c.href.split("#")[0],
      g = -1 != c.href.indexOf("#");
    if (ah || g || a) d += "#" + a;
    d != c.href && (b ? c.replace(d) : (c.href = d));
  };
  function ch(a, b, c, d) {
    if (a.Fm || b != hh(a))
      if (((a.Fm = !1), (b = encodeURIComponent(String(b))), D)) {
        var g = A.Jd(a.dg);
        g.open("text/html", c ? "replace" : void 0);
        c = Hb(Fb("title", {}, d || a.jc.document.title), Fb("body", {}, b));
        A.L.Sf(g, c);
        g.close();
      } else if (((g = wb(a.oi) + "#" + b), (a = a.dg.contentWindow)))
        c ? a.location.replace(g) : (a.location.href = g);
  }
  function hh(a) {
    if (D) return (a = A.Jd(a.dg)), a.body ? sa(a.body.innerHTML) : null;
    var b = a.dg.contentWindow;
    if (b) {
      var c;
      try {
        c = sa(fh(b));
      } catch (d) {
        return a.Vd || (1 != a.Vd && a.w.setInterval(jh), (a.Vd = !0)), null;
      }
      a.Vd && (0 != a.Vd && a.w.setInterval($g), (a.Vd = !1));
      return c || null;
    }
    return null;
  }
  e.Qj = function (a) {
    if (this.ud) {
      var b = fh(this.jc);
      b != this.Td && gh(this, b, a);
    }
    if (!this.ud || ah)
      if (((b = hh(this) || ""), null == this.Ud || b == this.Ud))
        (this.Ud = null), b != this.Td && gh(this, b, a);
  };
  function gh(a, b, c) {
    a.Td = a.Qe.value = b;
    a.ud ? (ah && ch(a, b), a.nf(b)) : ch(a, b);
    a.dispatchEvent(new Vg(bh(a), c));
  }
  e.Cp = function () {
    this.w.stop();
    this.w.start();
  };
  var eh = ["mousedown", "keydown", "mousemove"],
    Zg = 0,
    $g = 150,
    jh = 1e4;
  A.c = {};
  A.c.set = function (a, b) {
    a.className = b;
  };
  A.c.get = function (a) {
    a = a.className;
    return (q(a) && a.match(/\S+/g)) || [];
  };
  A.c.add = function (a, b) {
    var c = A.c.get(a),
      d = Va(arguments, 1),
      g = c.length + d.length;
    A.c.Aj(c, d);
    A.c.set(a, c.join(" "));
    return c.length == g;
  };
  A.c.remove = function (a, b) {
    var c = A.c.get(a),
      d = Va(arguments, 1),
      g = A.c.Dk(c, d);
    A.c.set(a, g.join(" "));
    return g.length == c.length - d.length;
  };
  A.c.Aj = function (a, b) {
    for (var c = 0; c < b.length; c++) Pa(a, b[c]) || a.push(b[c]);
  };
  A.c.Dk = function (a, b) {
    return La(a, function (a) {
      return !Pa(b, a);
    });
  };
  A.c.je = function (a, b, c) {
    for (var d = A.c.get(a), g = !1, h = 0; h < d.length; h++)
      d[h] == b && (Ua(d, h--, 1), (g = !0));
    g && (d.push(c), A.c.set(a, d.join(" ")));
    return g;
  };
  A.c.gh = function (a, b, c) {
    var d = A.c.get(a);
    q(b) ? Qa(d, b) : n(b) && (d = A.c.Dk(d, b));
    q(c) && !Pa(d, c) ? d.push(c) : n(c) && A.c.Aj(d, c);
    A.c.set(a, d.join(" "));
  };
  A.c.has = function (a, b) {
    return Pa(A.c.get(a), b);
  };
  A.c.enable = function (a, b, c) {
    c ? A.c.add(a, b) : A.c.remove(a, b);
  };
  A.c.toggle = function (a, b) {
    var c = !A.c.has(a, b);
    A.c.enable(a, b, c);
    return c;
  };
  function kh(a, b, c, d, g) {
    Pg.call(this, b, c, d, g);
    this.element = a;
  }
  y(kh, Pg);
  e = kh.prototype;
  e.jb = aa;
  e.We = function () {
    m(this.Mb) || (this.Mb = fe(this.element));
    return this.Mb;
  };
  e.dc = function () {
    this.jb();
    kh.b.dc.call(this);
  };
  e.Jb = function () {
    this.jb();
    kh.b.Jb.call(this);
  };
  e.Wa = function () {
    this.jb();
    kh.b.Wa.call(this);
  };
  function lh(a, b, c, d, g) {
    if (2 != b.length || 2 != c.length)
      throw Error("Start and end points must be 2D");
    kh.apply(this, arguments);
  }
  y(lh, kh);
  lh.prototype.jb = function () {
    var a = this.Jc && this.We() ? "right" : "left";
    this.element.style[a] = Math.round(this.coords[0]) + "px";
    this.element.style.top = Math.round(this.coords[1]) + "px";
  };
  function mh(a, b, c, d) {
    var g = [this.Jc ? oe(a) : a.offsetLeft, a.offsetTop];
    lh.call(this, a, g, b, c, d);
  }
  y(mh, lh);
  mh.prototype.Wa = function () {
    this.he = [
      this.Jc ? oe(this.element) : this.element.offsetLeft,
      this.element.offsetTop,
    ];
    mh.b.Wa.call(this);
  };
  function nh(a, b, c, d, g) {
    if (2 != b.length || 2 != c.length)
      throw Error("Start and end points must be 2D");
    kh.apply(this, arguments);
  }
  y(nh, kh);
  nh.prototype.jb = function () {
    if (this.Jc) {
      var a = this.element,
        b = Math.round(this.coords[0]),
        b = Math.max(b, 0);
      fe(a)
        ? F
          ? (a.scrollLeft = -b)
          : D && I("8")
          ? (a.scrollLeft = b)
          : (a.scrollLeft = a.scrollWidth - b - a.clientWidth)
        : (a.scrollLeft = b);
    } else this.element.scrollLeft = Math.round(this.coords[0]);
    this.element.scrollTop = Math.round(this.coords[1]);
  };
  function oh(a, b, c, d, g) {
    ea(b) && (b = [b]);
    ea(c) && (c = [c]);
    kh.call(this, a, b, c, d, g);
    if (1 != b.length || 1 != c.length)
      throw Error("Start and end points must be 1D");
    this.jg = ph;
  }
  y(oh, kh);
  var qh = 1 / 1024,
    ph = -1;
  e = oh.prototype;
  e.jb = function () {
    var a = this.coords[0];
    Math.abs(a - this.jg) >= qh && (ee(this.element, a), (this.jg = a));
  };
  e.Wa = function () {
    this.jg = ph;
    oh.b.Wa.call(this);
  };
  e.Jb = function () {
    this.jg = ph;
    oh.b.Jb.call(this);
  };
  e.show = function () {
    this.element.style.display = "";
  };
  e.li = function () {
    this.element.style.display = "none";
  };
  function rh(a, b, c) {
    oh.call(this, a, 1, 0, b, c);
  }
  y(rh, oh);
  function sh(a, b, c) {
    oh.call(this, a, 0, 1, b, c);
  }
  y(sh, oh);
  function th(a, b, c) {
    oh.call(this, a, 1, 0, b, c);
  }
  y(th, oh);
  th.prototype.Wa = function () {
    this.show();
    th.b.Wa.call(this);
  };
  th.prototype.Jb = function () {
    this.li();
    th.b.Jb.call(this);
  };
  function uh(a, b, c) {
    oh.call(this, a, 0, 1, b, c);
  }
  y(uh, oh);
  uh.prototype.Wa = function () {
    this.show();
    uh.b.Wa.call(this);
  };
  A.dataset = {};
  A.dataset.oe = !D;
  A.dataset.wd = "data-";
  A.dataset.set = function (a, b, c) {
    A.dataset.oe && a.dataset
      ? (a.dataset[b] = c)
      : a.setAttribute(A.dataset.wd + Ga(b), c);
  };
  A.dataset.get = function (a, b) {
    return A.dataset.oe && a.dataset
      ? b in a.dataset
        ? a.dataset[b]
        : null
      : a.getAttribute(A.dataset.wd + Ga(b));
  };
  A.dataset.remove = function (a, b) {
    A.dataset.oe && a.dataset
      ? delete a.dataset[b]
      : a.removeAttribute(A.dataset.wd + Ga(b));
  };
  A.dataset.has = function (a, b) {
    return A.dataset.oe && a.dataset
      ? b in a.dataset
      : a.hasAttribute
      ? a.hasAttribute(A.dataset.wd + Ga(b))
      : !!a.getAttribute(A.dataset.wd + Ga(b));
  };
  A.dataset.getAll = function (a) {
    if (A.dataset.oe && a.dataset) return a.dataset;
    var b = {};
    a = a.attributes;
    for (var c = 0; c < a.length; ++c) {
      var d = a[c];
      if (0 == d.name.lastIndexOf(A.dataset.wd, 0)) {
        var g = Fa(d.name.substr(5));
        b[g] = d.value;
      }
    }
    return b;
  };
  A.Na = {};
  A.Na.Qm = D ? 'javascript:""' : "about:blank";
  A.Na.Hq = D ? 'javascript:""' : "javascript:undefined";
  A.Na.Zm = "border:0;vertical-align:bottom;";
  A.Na.yh = function (a, b) {
    var c;
    c = q(b) ? new jb().Od(b).Fb() : b instanceof jb ? lb(b) : "";
    return a.g("iframe", { frameborder: 0, style: A.Na.Zm + c, src: A.Na.Qm });
  };
  A.Na.$r = function (a, b) {
    A.Na.Lm(a, Ib(b, null));
  };
  A.Na.Lm = function (a, b) {
    var c = A.Jd(a);
    c.open();
    A.L.Sf(c, b);
    c.close();
  };
  A.Na.tr = function (a, b, c, d, g) {
    var h = A.i(a);
    q(b) && (b = Ib(b, null));
    q(c) && (c = Ib(c, null));
    q(d) && (d = new jb().Od(d));
    b = Fb("html", {}, Hb(Fb("head", {}, b), Fb("body", {}, c)));
    g || (b = Hb(Jb, b));
    d = A.Na.yh(h, d);
    a.appendChild(d);
    A.Na.Lm(d, b);
    return d;
  };
  function vh(a) {
    N.call(this);
    this.Te = {};
    this.Se = {};
    this.ra = new we(this);
    this.S = a;
  }
  y(vh, N);
  var wh = [D && !I("11") ? "readystatechange" : "load", "abort", "error"];
  function xh(a, b, c) {
    (c = q(c) ? c : c.src) &&
      (a.Te[b] = { src: c, $j: m(void 0) ? void 0 : null });
  }
  vh.prototype.start = function () {
    var a = this.Te;
    B(
      Za(a),
      function (b) {
        var c = a[b];
        if (c && (delete a[b], !this.Ab)) {
          var d;
          d = this.S ? A.i(this.S).g("IMG") : new Image();
          c.$j && (d.crossOrigin = c.$j);
          this.ra.j(d, wh, this.Fl);
          this.Se[b] = d;
          d.id = b;
          d.src = c.src;
        }
      },
      this
    );
  };
  vh.prototype.Fl = function (a) {
    var b = a.currentTarget;
    if (b) {
      if ("readystatechange" == a.type)
        if ("complete" == b.readyState) a.type = "load";
        else return;
      "undefined" == typeof b.naturalWidth &&
        ("load" == a.type
          ? ((b.naturalWidth = b.width), (b.naturalHeight = b.height))
          : ((b.naturalWidth = 0), (b.naturalHeight = 0)));
      this.dispatchEvent({ type: a.type, target: b });
      !this.Ab &&
        ((a = b.id), delete this.Te[a], (b = this.Se[a])) &&
        (delete this.Se[a],
        this.ra.la(b, wh, this.Fl),
        $a(this.Se) && $a(this.Te) && this.dispatchEvent("complete"));
    }
  };
  vh.prototype.o = function () {
    delete this.Te;
    delete this.Se;
    Ec(this.ra);
    vh.b.o.call(this);
  };
  function yh(a, b, c) {
    N.call(this);
    this.target = a;
    this.handle = b || a;
    this.mg = c || new Kd(NaN, NaN, NaN, NaN);
    this.J = A.P(a);
    this.T = new we(this);
    Dc(this, this.T);
    this.deltaY =
      this.deltaX =
      this.qm =
      this.pm =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0;
    this.ha = !0;
    this.Qc = !1;
    this.Ll = !0;
    this.al = 0;
    this.Jc = this.Io = !1;
    M(this.handle, ["touchstart", "mousedown"], this.om, !1, this);
  }
  y(yh, N);
  var zh =
    f.document &&
    f.document.documentElement &&
    !!f.document.documentElement.setCapture;
  e = yh.prototype;
  e.ba = function () {
    return this.T;
  };
  e.Fa = function (a) {
    this.ha = a;
  };
  e.o = function () {
    yh.b.o.call(this);
    ed(this.handle, ["touchstart", "mousedown"], this.om, !1, this);
    this.T.fb();
    zh && this.J.releaseCapture();
    this.handle = this.target = null;
  };
  function Ah(a) {
    m(a.Mb) || (a.Mb = fe(a.target));
    return a.Mb;
  }
  e.om = function (a) {
    var b = "mousedown" == a.type;
    if (!this.ha || this.Qc || (b && !Mc(a))) this.dispatchEvent("earlycancel");
    else {
      if (0 == this.al)
        if (this.dispatchEvent(new Bh("start", this, a.clientX, a.clientY)))
          (this.Qc = !0), this.Ll && a.preventDefault();
        else return;
      else this.Ll && a.preventDefault();
      var b = this.J,
        c = b.documentElement,
        d = !zh;
      this.T.j(b, ["touchmove", "mousemove"], this.to, d);
      this.T.j(b, ["touchend", "mouseup"], this.Tf, d);
      zh
        ? (c.setCapture(!1), this.T.j(c, "losecapture", this.Tf))
        : this.T.j(A.Ea(b), "blur", this.Tf);
      D && this.Io && this.T.j(b, "dragstart", Ic);
      this.Sp && this.T.j(this.Sp, "scroll", this.up, d);
      this.clientX = this.pm = a.clientX;
      this.clientY = this.qm = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      this.deltaX = this.Jc ? oe(this.target) : this.target.offsetLeft;
      this.deltaY = this.target.offsetTop;
      this.Pi = A.i(this.J).Ua();
    }
  };
  e.Tf = function (a) {
    this.T.fb();
    zh && this.J.releaseCapture();
    this.Qc
      ? ((this.Qc = !1),
        this.dispatchEvent(
          new Bh(
            "end",
            this,
            a.clientX,
            a.clientY,
            0,
            Ch(this, this.deltaX),
            Dh(this, this.deltaY)
          )
        ))
      : this.dispatchEvent("earlycancel");
  };
  e.to = function (a) {
    if (this.ha) {
      var b = (this.Jc && Ah(this) ? -1 : 1) * (a.clientX - this.clientX),
        c = a.clientY - this.clientY;
      this.clientX = a.clientX;
      this.clientY = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      if (!this.Qc) {
        var d = this.pm - this.clientX,
          g = this.qm - this.clientY;
        if (d * d + g * g > this.al)
          if (this.dispatchEvent(new Bh("start", this, a.clientX, a.clientY)))
            this.Qc = !0;
          else {
            this.Ab || this.Tf(a);
            return;
          }
      }
      c = Eh(this, b, c);
      b = c.x;
      c = c.y;
      this.Qc &&
        this.dispatchEvent(
          new Bh("beforedrag", this, a.clientX, a.clientY, 0, b, c)
        ) &&
        (Fh(this, a, b, c), a.preventDefault());
    }
  };
  function Eh(a, b, c) {
    var d = A.i(a.J).Ua();
    b += d.x - a.Pi.x;
    c += d.y - a.Pi.y;
    a.Pi = d;
    a.deltaX += b;
    a.deltaY += c;
    return new K(Ch(a, a.deltaX), Dh(a, a.deltaY));
  }
  e.up = function (a) {
    var b = Eh(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    Fh(this, a, b.x, b.y);
  };
  function Fh(a, b, c, d) {
    a.Jc && Ah(a)
      ? (a.target.style.right = c + "px")
      : (a.target.style.left = c + "px");
    a.target.style.top = d + "px";
    a.dispatchEvent(new Bh("drag", a, b.clientX, b.clientY, 0, c, d));
  }
  function Ch(a, b) {
    var c = a.mg,
      d = isNaN(c.left) ? null : c.left,
      c = isNaN(c.width) ? 0 : c.width;
    return Math.min(
      null != d ? d + c : Infinity,
      Math.max(null != d ? d : -Infinity, b)
    );
  }
  function Dh(a, b) {
    var c = a.mg,
      d = isNaN(c.top) ? null : c.top,
      c = isNaN(c.height) ? 0 : c.height;
    return Math.min(
      null != d ? d + c : Infinity,
      Math.max(null != d ? d : -Infinity, b)
    );
  }
  function Bh(a, b, c, d, g, h, k) {
    L.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.left = m(h) ? h : b.deltaX;
    this.top = m(k) ? k : b.deltaY;
  }
  y(Bh, L);
  function Gh(a) {
    N.call(this);
    this.f = a;
    a = D ? "focusout" : "blur";
    this.To = M(this.f, D ? "focusin" : "focus", this, !D);
    this.Uo = M(this.f, a, this, !D);
  }
  y(Gh, N);
  Gh.prototype.handleEvent = function (a) {
    var b = new Kc(a.Xa);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b);
  };
  Gh.prototype.o = function () {
    Gh.b.o.call(this);
    fd(this.To);
    fd(this.Uo);
    delete this.f;
  };
  function Hh(a, b) {
    this.f = a;
    this.X = b;
  }
  function Ih(a, b) {
    Be.call(this, b);
    this.zq = !!a;
    this.Sd = null;
  }
  y(Ih, Be);
  e = Ih.prototype;
  e.Mh = null;
  e.v = !1;
  e.Ia = null;
  e.ma = null;
  e.wb = null;
  e.oh = !1;
  e.u = function () {
    return "goog-modalpopup";
  };
  e.Wf = function () {
    return this.Ia;
  };
  e.g = function () {
    Ih.b.g.call(this);
    var a = this.a(),
      b = ra(this.u()).split(" ");
    A.h.addAll(a, b);
    A.Fc(a, !0);
    P(a, !1);
    Jh(this);
    Kh(this);
  };
  function Jh(a) {
    a.zq &&
      !a.ma &&
      ((a.ma = A.Na.yh(a.i())),
      (a.ma.className = a.u() + "-bg"),
      P(a.ma, !1),
      ee(a.ma, 0));
    a.Ia || ((a.Ia = a.i().g("DIV", a.u() + "-bg")), P(a.Ia, !1));
  }
  function Kh(a) {
    a.wb ||
      ((a.wb = a.i().createElement("SPAN")),
      P(a.wb, !1),
      A.Fc(a.wb, !0),
      (a.wb.style.position = "absolute"));
  }
  e.Nl = function () {
    this.oh = !1;
  };
  e.Qa = function (a) {
    return !!a && "DIV" == a.tagName;
  };
  e.Sa = function (a) {
    Ih.b.Sa.call(this, a);
    a = ra(this.u()).split(" ");
    A.h.addAll(this.a(), a);
    Jh(this);
    Kh(this);
    A.Fc(this.a(), !0);
    P(this.a(), !1);
  };
  e.O = function () {
    this.ma && A.Qd(this.ma, this.a());
    A.Qd(this.Ia, this.a());
    Ih.b.O.call(this);
    A.ti(this.wb, this.a());
    this.Mh = new Gh(this.i().F());
    this.ba().j(this.Mh, "focusin", this.kp);
    Lh(this, !1);
  };
  e.Ma = function () {
    this.v && this.M(!1);
    Ec(this.Mh);
    Ih.b.Ma.call(this);
    A.removeNode(this.ma);
    A.removeNode(this.Ia);
    A.removeNode(this.wb);
  };
  e.M = function (a) {
    a != this.v &&
      (this.Yd && this.Yd.stop(),
      this.ve && this.ve.stop(),
      this.Xd && this.Xd.stop(),
      this.ue && this.ue.stop(),
      this.A && Lh(this, a),
      a ? this.qf() : this.Eo());
  };
  function Lh(a, b) {
    a.sl || (a.sl = new Hh(a.f, a.X));
    var c = a.sl;
    if (b) {
      c.Nd || (c.Nd = []);
      for (var d = c.X.Vb(c.X.F().body), g = 0; g < d.length; g++) {
        var h = d[g];
        h == c.f || te(h, "hidden") || (Q(h, "hidden", !0), c.Nd.push(h));
      }
    } else if (c.Nd) {
      for (g = 0; g < c.Nd.length; g++) c.Nd[g].removeAttribute("aria-hidden");
      c.Nd = null;
    }
  }
  e.qf = function () {
    if (this.dispatchEvent("beforeshow")) {
      try {
        this.Sd = this.i().F().activeElement;
      } catch (a) {}
      this.Wi();
      this.Lb();
      this.ba().j(this.i().Ea(), "resize", this.Wi);
      Mh(this, !0);
      this.focus();
      this.v = !0;
      this.Yd && this.ve
        ? (dd(this.Yd, "end", this.tg, !1, this),
          this.ve.play(),
          this.Yd.play())
        : this.tg();
    }
  };
  e.Eo = function () {
    if (this.dispatchEvent("beforehide")) {
      this.ba().la(this.i().Ea(), "resize", this.Wi);
      this.v = !1;
      this.Xd && this.ue
        ? (dd(this.Xd, "end", this.sg, !1, this),
          this.ue.play(),
          this.Xd.play())
        : this.sg();
      a: {
        try {
          var a = this.i(),
            b = a.F().body,
            c = a.F().activeElement || b;
          if (!this.Sd || this.Sd == b) {
            this.Sd = null;
            break a;
          }
          (c == b || a.contains(this.a(), c)) && this.Sd.focus();
        } catch (d) {}
        this.Sd = null;
      }
    }
  };
  function Mh(a, b) {
    a.ma && P(a.ma, b);
    a.Ia && P(a.Ia, b);
    P(a.a(), b);
    P(a.wb, b);
  }
  e.tg = function () {
    this.dispatchEvent("show");
  };
  e.sg = function () {
    Mh(this, !1);
    this.dispatchEvent("hide");
  };
  e.focus = function () {
    this.Ak();
  };
  e.Wi = function () {
    this.ma && P(this.ma, !1);
    this.Ia && P(this.Ia, !1);
    var a = this.i().F(),
      b = A.Da(A.Ea(a) || window),
      c = Math.max(
        b.width,
        Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)
      ),
      a = Math.max(
        b.height,
        Math.max(a.body.scrollHeight, a.documentElement.scrollHeight)
      );
    this.ma && (P(this.ma, !0), be(this.ma, c, a));
    this.Ia && (P(this.Ia, !0), be(this.Ia, c, a));
  };
  e.Lb = function () {
    var a = this.i().F(),
      b = A.Ea(a) || window;
    if ("fixed" == Qd(this.a())) var c = (a = 0);
    else (c = this.i().Ua()), (a = c.x), (c = c.y);
    var d = O(this.a()),
      b = A.Da(b),
      a = Math.max(a + b.width / 2 - d.width / 2, 0),
      c = Math.max(c + b.height / 2 - d.height / 2, 0);
    Rd(this.a(), a, c);
    Rd(this.wb, a, c);
  };
  e.kp = function (a) {
    this.oh ? this.Nl() : a.target == this.wb && md(this.Ak, 0, this);
  };
  e.Ak = function () {
    try {
      D && this.i().F().body.focus(), this.a().focus();
    } catch (a) {}
  };
  e.o = function () {
    Ec(this.Yd);
    this.Yd = null;
    Ec(this.Xd);
    this.Xd = null;
    Ec(this.ve);
    this.ve = null;
    Ec(this.ue);
    this.ue = null;
    Ih.b.o.call(this);
  };
  function Nh(a, b, c) {
    Ih.call(this, b, c);
    this.Aa = a || "modal-dialog";
    this.$ = Oh(Oh(new Ph(), Qh, !0), Rh, !1, !0);
  }
  y(Nh, Ih);
  e = Nh.prototype;
  e.pk = !0;
  e.ji = !0;
  e.tl = !0;
  e.Fe = !0;
  e.Cf = 0.5;
  e.Wg = "";
  e.La = null;
  e.nc = null;
  e.Fn = !1;
  e.ka = null;
  e.Ha = null;
  e.Vg = null;
  e.Ga = null;
  e.Ka = null;
  e.G = null;
  e.ef = "dialog";
  e.u = function () {
    return this.Aa;
  };
  e.Sk = function () {
    return this.Wg;
  };
  e.Dc = function (a) {
    this.La = a = Ib(a, null);
    this.Ka && A.L.qd(this.Ka, a);
  };
  e.Wb = function () {
    return null != this.La ? Bb(this.La) : "";
  };
  e.sc = function () {
    return this.ef;
  };
  e.dj = function (a) {
    this.ef = a;
  };
  e.H = function () {
    this.a() || this.tb();
    return this.Ka;
  };
  e.Wf = function () {
    this.a() || this.tb();
    return Nh.b.Wf.call(this);
  };
  function Sh(a, b) {
    a.Cf = b;
    if (a.a()) {
      var c = a.Wf();
      c && ee(c, a.Cf);
    }
  }
  e.am = function (a) {
    this.Fe = a;
    Th(this, a && this.A);
  };
  function Th(a, b) {
    var c = ra(a.Aa + "-title-draggable").split(" ");
    a.a() && (b ? A.h.addAll(a.ka, c) : A.h.fb(a.ka, c));
    b && !a.nc
      ? ((a.nc = new yh(a.a(), a.ka)),
        A.h.addAll(a.ka, c),
        M(a.nc, "start", a.aq, !1, a))
      : !b && a.nc && (a.nc.Ca(), (a.nc = null));
  }
  e.g = function () {
    Nh.b.g.call(this);
    var a = this.a(),
      b = this.i();
    this.ka = b.g(
      "DIV",
      this.Aa + "-title",
      (this.Ha = b.g(
        "SPAN",
        { className: this.Aa + "-title-text", id: Ee(this) },
        this.Wg
      )),
      (this.Ga = b.g("SPAN", this.Aa + "-title-close"))
    );
    A.append(
      a,
      this.ka,
      (this.Ka = b.g("DIV", this.Aa + "-content")),
      (this.G = b.g("DIV", this.Aa + "-buttons"))
    );
    se(this.Ha, "heading");
    se(this.Ga, "button");
    A.Fc(this.Ga, !0);
    Q(this.Ga, "label", Uh);
    this.Vg = this.Ha.id;
    se(a, this.sc());
    Q(a, "labelledby", this.Vg || "");
    this.La && A.L.qd(this.Ka, this.La);
    P(this.Ga, this.ji);
    this.$ && ((a = this.$), (a.f = this.G), a.tb());
    P(this.G, !!this.$);
    Sh(this, this.Cf);
  };
  e.Sa = function (a) {
    Nh.b.Sa.call(this, a);
    a = this.a();
    var b = this.Aa + "-content";
    this.Ka = A.l(null, b, a)[0];
    this.Ka ||
      ((this.Ka = this.i().g("DIV", b)),
      this.La && A.L.qd(this.Ka, this.La),
      a.appendChild(this.Ka));
    var b = this.Aa + "-title",
      c = this.Aa + "-title-text",
      d = this.Aa + "-title-close";
    (this.ka = A.l(null, b, a)[0])
      ? ((this.Ha = A.l(null, c, this.ka)[0]),
        (this.Ga = A.l(null, d, this.ka)[0]))
      : ((this.ka = this.i().g("DIV", b)), a.insertBefore(this.ka, this.Ka));
    this.Ha
      ? ((this.Wg = A.tc(this.Ha)), this.Ha.id || (this.Ha.id = Ee(this)))
      : ((this.Ha = A.g("SPAN", { className: c, id: Ee(this) })),
        this.ka.appendChild(this.Ha));
    this.Vg = this.Ha.id;
    Q(a, "labelledby", this.Vg || "");
    this.Ga ||
      ((this.Ga = this.i().g("SPAN", d)), this.ka.appendChild(this.Ga));
    P(this.Ga, this.ji);
    b = this.Aa + "-buttons";
    (this.G = A.l(null, b, a)[0])
      ? ((this.$ = new Ph(this.i())), this.$.D(this.G))
      : ((this.G = this.i().g("DIV", b)),
        a.appendChild(this.G),
        this.$ && ((a = this.$), (a.f = this.G), a.tb()),
        P(this.G, !!this.$));
    Sh(this, this.Cf);
  };
  e.O = function () {
    Nh.b.O.call(this);
    this.ba().j(this.a(), "keydown", this.El).j(this.a(), "keypress", this.El);
    this.ba().j(this.G, "click", this.gp);
    Th(this, this.Fe);
    this.ba().j(this.Ga, "click", this.yp);
    var a = this.a();
    se(a, this.sc());
    "" !== this.Ha.id && Q(a, "labelledby", this.Ha.id);
    if (!this.tl) {
      this.tl = !1;
      if (this.A) {
        var a = this.i(),
          b = this.Wf();
        a.removeNode(this.ma);
        a.removeNode(b);
      }
      this.v && Lh(this, !1);
    }
  };
  e.Ma = function () {
    this.v && this.M(!1);
    Th(this, !1);
    Nh.b.Ma.call(this);
  };
  e.M = function (a) {
    a != this.v && (this.A || this.tb(), Nh.b.M.call(this, a));
  };
  e.tg = function () {
    Nh.b.tg.call(this);
    this.dispatchEvent(Vh);
  };
  e.sg = function () {
    Nh.b.sg.call(this);
    this.dispatchEvent(Wh);
    this.Fn && this.Ca();
  };
  e.aq = function () {
    var a = this.i().F(),
      b = A.Da(A.Ea(a) || window),
      c = Math.max(a.body.scrollWidth, b.width),
      a = Math.max(a.body.scrollHeight, b.height),
      d = O(this.a());
    "fixed" == Qd(this.a())
      ? (this.nc.mg =
          new Kd(
            0,
            0,
            Math.max(0, b.width - d.width),
            Math.max(0, b.height - d.height)
          ) || new Kd(NaN, NaN, NaN, NaN))
      : (this.nc.mg =
          new Kd(0, 0, c - d.width, a - d.height) ||
          new Kd(NaN, NaN, NaN, NaN));
  };
  e.yp = function () {
    Xh(this);
  };
  function Xh(a) {
    if (a.ji) {
      var b = a.$,
        c = b && b.sh;
      c ? ((b = b.get(c)), a.dispatchEvent(new Yh(c, b)) && a.M(!1)) : a.M(!1);
    }
  }
  e.o = function () {
    this.G = this.Ga = null;
    Nh.b.o.call(this);
  };
  e.gp = function (a) {
    a: {
      for (a = a.target; null != a && a != this.G; ) {
        if ("BUTTON" == a.tagName) break a;
        a = a.parentNode;
      }
      a = null;
    }
    if (a && !a.disabled) {
      a = a.name;
      var b = this.$.get(a);
      this.dispatchEvent(new Yh(a, b)) && this.M(!1);
    }
  };
  e.El = function (a) {
    var b = !1,
      c = !1,
      d = this.$,
      g = a.target;
    if ("keydown" == a.type)
      if (this.pk && 27 == a.keyCode) {
        var h = d && d.sh,
          g = "SELECT" == g.tagName && !g.disabled;
        h && !g
          ? ((c = !0), (b = d.get(h)), (b = this.dispatchEvent(new Yh(h, b))))
          : g || (b = !0);
      } else {
        if (9 == a.keyCode && a.shiftKey && g == this.a()) {
          this.oh = !0;
          try {
            this.wb.focus();
          } catch (v) {}
          md(this.Nl, 0, this);
        }
      }
    else if (13 == a.keyCode) {
      if ("BUTTON" == g.tagName && !g.disabled) h = g.name;
      else if (g == this.Ga) Xh(this);
      else if (d) {
        var k = d.Dh,
          l;
        if ((l = k))
          a: {
            l = d.f.getElementsByTagName("BUTTON");
            for (var p = 0, r; (r = l[p]); p++)
              if (r.name == k || r.id == k) {
                l = r;
                break a;
              }
            l = null;
          }
        g =
          ("TEXTAREA" == g.tagName ||
            "SELECT" == g.tagName ||
            "A" == g.tagName) &&
          !g.disabled;
        !l || l.disabled || g || (h = k);
      }
      h &&
        d &&
        ((c = !0), (b = this.dispatchEvent(new Yh(h, String(d.get(h))))));
    } else g == this.Ga && 32 == a.keyCode && Xh(this);
    if (b || c) a.stopPropagation(), a.preventDefault();
    b && this.M(!1);
  };
  function Yh(a, b) {
    this.type = Zh;
    this.key = a;
    this.caption = b;
  }
  y(Yh, L);
  var Zh = "dialogselect",
    Wh = "afterhide",
    Vh = "aftershow";
  function Ph(a) {
    this.X = a || A.i();
    Ob.call(this);
  }
  y(Ph, Ob);
  e = Ph.prototype;
  e.Aa = "goog-buttonset";
  e.Dh = null;
  e.f = null;
  e.sh = null;
  e.set = function (a, b, c, d) {
    Ob.prototype.set.call(this, a, b);
    c && (this.Dh = a);
    d && (this.sh = a);
    return this;
  };
  function Oh(a, b, c, d) {
    return a.set(b.key, b.caption, c, d);
  }
  e.tb = function () {
    if (this.f) {
      A.L.qd(this.f, Kb);
      var a = A.i(this.f);
      this.forEach(function (b, c) {
        var d = a.g("BUTTON", { name: c }, b);
        c == this.Dh && (d.className = this.Aa + "-default");
        this.f.appendChild(d);
      }, this);
    }
  };
  e.D = function (a) {
    if (a && 1 == a.nodeType) {
      this.f = a;
      a = this.f.getElementsByTagName("BUTTON");
      for (var b = 0, c, d, g; (c = a[b]); b++)
        if (((d = c.name || c.id), (g = A.tc(c) || c.value), d)) {
          var h = 0 == b;
          this.set(d, g, h, c.name == $h);
          h && A.h.add(c, this.Aa + "-default");
        }
    }
  };
  e.a = function () {
    return this.f;
  };
  e.i = function () {
    return this.X;
  };
  var $h = "cancel",
    Uh = "Close",
    Qh = { key: "ok", caption: "OK" },
    Rh = { key: $h, caption: "Cancel" },
    ai = { key: "yes", caption: "Yes" },
    bi = { key: "no", caption: "No" },
    ci = { key: "save", caption: "Save" },
    di = { key: "continue", caption: "Continue" };
  "undefined" != typeof document &&
    (Oh(new Ph(), Qh, !0, !0),
    Oh(Oh(new Ph(), Qh, !0), Rh, !1, !0),
    Oh(Oh(new Ph(), ai, !0), bi, !1, !0),
    Oh(Oh(Oh(new Ph(), ai), bi, !0), Rh, !1, !0),
    Oh(Oh(Oh(new Ph(), di), ci), Rh, !0, !0));
  function ei(a, b, c, d, g) {
    function h(a) {
      a &&
        ((a.tabIndex = 0),
        se(a, k.Db()),
        A.h.add(a, "goog-zippy-header"),
        fi(k, a),
        a && k.il.j(a, "keydown", k.np));
    }
    N.call(this);
    this.X = g || A.i();
    this.Tb = this.X.a(a) || null;
    this.Hd = this.X.a(d || null);
    this.Gd = (this.lg = ga(b) ? b : null) || !b ? null : this.X.a(b);
    this.Rc = 1 == c;
    m(c) ||
      this.lg ||
      (this.Hd
        ? (this.Rc = "none" != this.Hd.style.display)
        : this.Tb && (this.Rc = A.h.contains(this.Tb, "goog-zippy-expanded")));
    this.il = new we(this);
    this.Hi = new we(this);
    var k = this;
    h(this.Tb);
    h(this.Hd);
    gi(this, this.Rc);
  }
  y(ei, N);
  e = ei.prototype;
  e.Ld = !0;
  e.o = function () {
    ei.b.o.call(this);
    Ec(this.il);
    Ec(this.Hi);
  };
  e.Db = function () {
    return "tab";
  };
  e.H = function () {
    return this.Gd;
  };
  e.expand = function () {
    gi(this, !0);
  };
  e.collapse = function () {
    gi(this, !1);
  };
  e.toggle = function () {
    gi(this, !this.Rc);
  };
  function gi(a, b) {
    a.Gd ? P(a.Gd, b) : b && a.lg && (a.Gd = a.lg());
    a.Gd && A.h.add(a.Gd, "goog-zippy-content");
    a.Hd
      ? (P(a.Tb, !b), P(a.Hd, b))
      : a.Tb &&
        (A.h.enable(a.Tb, "goog-zippy-expanded", b),
        A.h.enable(a.Tb, "goog-zippy-collapsed", !b),
        Q(a.Tb, "expanded", b));
    a.Rc = b;
    a.dispatchEvent(new hi("toggle", a, a.Rc));
  }
  e.mf = function (a) {
    this.Ld != a &&
      ((this.Ld = a) ? (fi(this, this.Tb), fi(this, this.Hd)) : this.Hi.fb());
  };
  function fi(a, b) {
    b && a.Hi.j(b, "click", a.mp);
  }
  e.np = function (a) {
    if (13 == a.keyCode || 32 == a.keyCode)
      this.toggle(),
        this.dispatchEvent(new L("action", this)),
        a.preventDefault(),
        a.stopPropagation();
  };
  e.mp = function () {
    this.toggle();
    this.dispatchEvent(new L("action", this));
  };
  function hi(a, b, c) {
    L.call(this, a, b);
    this.Qn = c;
  }
  y(hi, L);
  function ii(a) {
    return (a = a.exec(Rb)) ? a[1] : "";
  }
  var ji = (function () {
    if (Pf) return ii(/Firefox\/([0-9.]+)/);
    if (D || Yb || Xb) return ic;
    if (Tf) return ii(/Chrome\/([0-9.]+)/);
    if (Uf && !(Wb() || C("iPad") || C("iPod")))
      return ii(/Version\/([0-9.]+)/);
    if (Qf || Rf) {
      var a;
      if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Rb)))
        return a[1] + "." + a[2];
    } else if (Sf)
      return (a = ii(/Android\s+([0-9.]+)/)) ? a : ii(/Version\/([0-9.]+)/);
    return "";
  })();
  function ki(a, b, c, d, g, h) {
    Pg.call(this, [c.left, c.top], [c.right, c.bottom], d, g);
    this.f = a;
    this.fe = b;
    this.Dn = !!h;
  }
  y(ki, Pg);
  ki.prototype.dc = function () {
    this.f.style.backgroundPosition =
      -Math.floor(this.coords[0] / this.fe.width) * this.fe.width +
      "px " +
      -Math.floor(this.coords[1] / this.fe.height) * this.fe.height +
      "px";
    ki.b.dc.call(this);
  };
  ki.prototype.Ki = function () {
    this.Dn || this.play(!0);
    ki.b.Ki.call(this);
  };
  ki.prototype.o = function () {
    ki.b.o.call(this);
    this.f = null;
  };
  function li(a, b, c) {
    this.Gf = a;
    this.ra = b;
    c ||
      ((a = c = new X("//www.google.com/images/cleardot.gif")),
      Y(a),
      (b =
        Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ na()).toString(36)),
      Y(a),
      a.ea.set("zx", b));
    this.ne = c;
  }
  e = li.prototype;
  e.ac = wc("goog.net.NetworkTester");
  e.xm = 1e4;
  e.jf = !1;
  e.Mp = 0;
  e.Af = 0;
  e.Il = 0;
  e.Tg = null;
  e.df = null;
  e.setTimeout = function (a) {
    this.xm = a;
  };
  e.start = function () {
    if (this.jf) throw Error("NetworkTester.start called when already running");
    this.jf = !0;
    xc(this.ac, "Starting");
    this.Af = 0;
    mi(this);
  };
  e.stop = function () {
    ni(this);
    this.jf = !1;
  };
  function mi(a) {
    a.Af++;
    "onLine" in navigator && !navigator.onLine
      ? (xc(a.ac, "Browser is set to work offline."), md(t(a.af, a, !1), 0))
      : (xc(a.ac, "Loading image (attempt " + a.Af + ") at " + a.ne),
        (a.Xb = new Image()),
        (a.Xb.onload = t(a.qp, a)),
        (a.Xb.onerror = t(a.pp, a)),
        (a.Xb.onabort = t(a.op, a)),
        (a.Tg = md(a.rp, a.xm, a)),
        (a.Xb.src = String(a.ne)));
  }
  e.qp = function () {
    xc(this.ac, "Image loaded");
    this.af(!0);
  };
  e.pp = function () {
    xc(this.ac, "Image load error");
    this.af(!1);
  };
  e.op = function () {
    xc(this.ac, "Image load aborted");
    this.af(!1);
  };
  e.rp = function () {
    xc(this.ac, "Image load timed out");
    this.af(!1);
  };
  e.af = function (a) {
    ni(this);
    a
      ? ((this.jf = !1), this.Gf.call(this.ra, !0))
      : this.Af <= this.Mp
      ? this.Il
        ? (this.df = md(this.tp, this.Il, this))
        : mi(this)
      : ((this.jf = !1), this.Gf.call(this.ra, !1));
  };
  e.tp = function () {
    this.df = null;
    mi(this);
  };
  function ni(a) {
    a.Xb &&
      ((a.Xb.onload = null),
      (a.Xb.onerror = null),
      (a.Xb.onabort = null),
      (a.Xb = null));
    a.Tg && (nd(a.Tg), (a.Tg = null));
    a.df && (nd(a.df), (a.df = null));
  }
  function oi(a, b) {
    N.call(this);
    this.f = a;
    var c = A.ad(this.f) ? this.f : this.f ? this.f.body : null;
    this.Po = !!c && fe(c);
    this.jl = M(this.f, F ? "DOMMouseScroll" : "mousewheel", this, b);
  }
  y(oi, N);
  oi.prototype.handleEvent = function (a) {
    var b = 0,
      c = 0,
      d = 0;
    a = a.Xa;
    if ("mousewheel" == a.type) {
      c = 1;
      if (D || (G && (bc || I("532.0")))) c = 40;
      d = pi(-a.wheelDelta, c);
      m(a.wheelDeltaX)
        ? ((b = pi(-a.wheelDeltaX, c)), (c = pi(-a.wheelDeltaY, c)))
        : (c = d);
    } else
      (d = a.detail),
        100 < d ? (d = 3) : -100 > d && (d = -3),
        m(a.axis) && a.axis === a.HORIZONTAL_AXIS ? (b = d) : (c = d);
    ea(this.pl) && (b = Math.min(Math.max(b, -this.pl), this.pl));
    ea(this.ql) && (c = Math.min(Math.max(c, -this.ql), this.ql));
    this.Po && (b = -b);
    b = new qi(d, a, b, c);
    this.dispatchEvent(b);
  };
  function pi(a, b) {
    return G && (ac || cc) && 0 != a % b ? a : a / b;
  }
  oi.prototype.o = function () {
    oi.b.o.call(this);
    fd(this.jl);
    this.jl = null;
  };
  function qi(a, b, c, d) {
    Kc.call(this, b);
    this.type = "mousewheel";
    this.detail = a;
    this.deltaX = c;
    this.deltaY = d;
  }
  y(qi, Kc); /*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
  A.fc = (function () {
    function a(a, c) {
      if (!a) return [];
      if (a.constructor == Array) return a;
      if (!q(a)) return [a];
      if (q(c) && ((c = A.a(c)), !c)) return [];
      c = c || A.F();
      var g = c.ownerDocument || c.documentElement;
      Bc =
        (c.contentType && "application/xml" == c.contentType) ||
        (Xb && (c.doctype || "[object XMLDocument]" == g.toString())) ||
        (!!g && (Zb ? g.xml : c.xmlVersion || g.xmlVersion));
      return (g = d(a)(c)) && g.rg ? g : b(g);
    }
    function b(a) {
      if (a && a.rg) return a;
      var b = [];
      if (!a || !a.length) return b;
      a[0] && b.push(a[0]);
      if (2 > a.length) return b;
      zb++;
      if (Zb && Bc) {
        var c = zb + "";
        a[0].setAttribute("_zipIdx", c);
        for (var d = 1, g; (g = a[d]); d++)
          a[d].getAttribute("_zipIdx") != c && b.push(g),
            g.setAttribute("_zipIdx", c);
      } else if (Zb && a.sn)
        try {
          for (d = 1; (g = a[d]); d++) vb(g) && b.push(g);
        } catch (h) {}
      else
        for (a[0] && (a[0]._zipIdx = zb), d = 1; (g = a[d]); d++)
          a[d]._zipIdx != zb && b.push(g), (g._zipIdx = zb);
      return b;
    }
    function c(a, b) {
      if (!b) return 1;
      var c = gl(a);
      return b[c] ? 0 : (b[c] = 1);
    }
    function d(a, b) {
      if (Ji) {
        var c = Ki[a];
        if (c && !b) return c;
      }
      if ((c = Li[a])) return c;
      var c = a.charAt(0),
        h = -1 == a.indexOf(" ");
      0 <= a.indexOf("#") && h && (b = !0);
      if (
        !Ji ||
        b ||
        -1 != ">~+".indexOf(c) ||
        (Zb && -1 != a.indexOf(":")) ||
        (Mi && 0 <= a.indexOf(".")) ||
        -1 != a.indexOf(":contains") ||
        -1 != a.indexOf("|=")
      ) {
        var k = a.split(/\s*,\s*/);
        return (Li[a] =
          2 > k.length
            ? g(a)
            : function (a) {
                for (var b = 0, c = [], d; (d = k[b++]); )
                  c = c.concat(g(d)(a));
                return c;
              });
      }
      var l = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
      return (Ki[a] = function (b) {
        try {
          if (9 != b.nodeType && !h) throw Error("");
          var c = b.querySelectorAll(l);
          Zb ? (c.sn = !0) : (c.rg = !0);
          return c;
        } catch (g) {
          return d(a, !0)(b);
        }
      });
    }
    function g(a) {
      var b = x(ra(a));
      if (1 == b.length) {
        var c = h(b[0]);
        return function (a) {
          if ((a = c(a, []))) a.rg = !0;
          return a;
        };
      }
      return function (a) {
        a = sd(a);
        for (var c, d, g = b.length, k, l, dg = 0; dg < g; dg++) {
          l = [];
          c = b[dg];
          d = a.length - 1;
          0 < d && ((k = {}), (l.rg = !0));
          d = h(c);
          for (var Ii = 0; (c = a[Ii]); Ii++) d(c, l, k);
          if (!l.length) break;
          a = l;
        }
        return l;
      };
    }
    function h(a) {
      var b = Ni[a.fc];
      if (b) return b;
      var c = a.bl,
        c = c ? c.vg : "",
        d = r(a, { pa: 1 }),
        g = "*" == a.tag,
        h = A.F().getElementsByClassName;
      if (c)
        (h = { pa: 1 }),
          g && (h.tag = 1),
          (d = r(a, h)),
          "+" == c
            ? (b = p(d))
            : "~" == c
            ? (b = l(d))
            : ">" == c && (b = k(d));
      else if (a.id)
        (d = !a.ol && g ? Nb : r(a, { pa: 1, id: 1 })),
          (b = function (b, c) {
            var g = A.i(b).a(a.id),
              h;
            if ((h = g && d(g)) && !(h = 9 == b.nodeType)) {
              for (h = g.parentNode; h && h != b; ) h = h.parentNode;
              h = !!h;
            }
            if (h) return sd(g, c);
          });
      else if (
        h &&
        /\{\s*\[native code\]\s*\}/.test(String(h)) &&
        a.c.length &&
        !Mi
      )
        var d = r(a, { pa: 1, c: 1, id: 1 }),
          v = a.c.join(" "),
          b = function (a, b) {
            for (
              var c = sd(0, b), g, h = 0, k = a.getElementsByClassName(v);
              (g = k[h++]);

            )
              d(g, a) && c.push(g);
            return c;
          };
      else
        g || a.ol
          ? ((d = r(a, { pa: 1, tag: 1, id: 1 })),
            (b = function (b, c) {
              for (
                var g = sd(0, c), h, k = 0, l = b.getElementsByTagName(a.Yh());
                (h = l[k++]);

              )
                d(h, b) && g.push(h);
              return g;
            }))
          : (b = function (b, c) {
              for (
                var d = sd(0, c), g, h = 0, k = b.getElementsByTagName(a.Yh());
                (g = k[h++]);

              )
                d.push(g);
              return d;
            });
      return (Ni[a.fc] = b);
    }
    function k(a) {
      a = a || Nb;
      return function (b, d, g) {
        for (var h = 0, k = b[Oi]; (b = k[h++]); )
          td(b) && (!g || c(b, g)) && a(b, h) && d.push(b);
        return d;
      };
    }
    function l(a) {
      return function (b, d, g) {
        for (b = b[ud]; b; ) {
          if (td(b)) {
            if (g && !c(b, g)) break;
            a(b) && d.push(b);
          }
          b = b[ud];
        }
        return d;
      };
    }
    function p(a) {
      return function (b, d, g) {
        for (; (b = b[ud]); )
          if (!ve || vb(b)) {
            (g && !c(b, g)) || !a(b) || d.push(b);
            break;
          }
        return d;
      };
    }
    function r(a, b) {
      if (!a) return Nb;
      b = b || {};
      var c = null;
      b.pa || (c = bb(c, vb));
      b.tag ||
        ("*" != a.tag &&
          (c = bb(c, function (b) {
            return b && b.tagName == a.Yh();
          })));
      b.c ||
        B(a.c, function (a, b) {
          var d = new RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
          c = bb(c, function (a) {
            return d.test(a.className);
          });
          c.count = b;
        });
      b.ld ||
        B(a.ld, function (a) {
          var b = a.name;
          eg[b] && (c = bb(c, eg[b](b, a.value)));
        });
      b.Bf ||
        B(a.Bf, function (a) {
          var b,
            d = a.mh;
          a.type && Pi[a.type]
            ? (b = Pi[a.type](d, a.Ei))
            : d.length && (b = hl(d));
          b && (c = bb(c, b));
        });
      b.id ||
        (a.id &&
          (c = bb(c, function (b) {
            return !!b && b.id == a.id;
          })));
      c || "default" in b || (c = Nb);
      return c;
    }
    function v(a) {
      return E(a) % 2;
    }
    function z(a) {
      return !(E(a) % 2);
    }
    function E(a) {
      var b = a.parentNode,
        c = 0,
        d = b[Oi],
        g = a._i || -1,
        h = b._l || -1;
      if (!d) return -1;
      d = d.length;
      if (h == d && 0 <= g && 0 <= h) return g;
      b._l = d;
      g = -1;
      for (b = b.firstElementChild || b.firstChild; b; b = b[ud])
        td(b) && ((b._i = ++c), a === b && (g = c));
      return g;
    }
    function T(a) {
      for (; (a = a[ud]); ) if (td(a)) return !1;
      return !0;
    }
    function H(a) {
      for (; (a = a[il]); ) if (td(a)) return !1;
      return !0;
    }
    function fa(a, b) {
      return a
        ? "class" == b
          ? a.className || ""
          : "for" == b
          ? a.htmlFor || ""
          : "style" == b
          ? a.style.cssText || ""
          : (Bc ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
        : "";
    }
    function vb(a) {
      return 1 == a.nodeType;
    }
    function bb(a, b) {
      return a
        ? b
          ? function () {
              return a.apply(window, arguments) && b.apply(window, arguments);
            }
          : a
        : b;
    }
    function x(a) {
      function b() {
        0 <= r && ((J.id = c(r, S).replace(/\\/g, "")), (r = -1));
        if (0 <= v) {
          var a = v == S ? null : c(v, S);
          0 > ">~+".indexOf(a) ? (J.tag = a) : (J.vg = a);
          v = -1;
        }
        0 <= p && (J.c.push(c(p + 1, S).replace(/\\/g, "")), (p = -1));
      }
      function c(b, d) {
        return ra(a.slice(b, d));
      }
      a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
      for (
        var d = [],
          g = -1,
          h = -1,
          k = -1,
          l = -1,
          p = -1,
          r = -1,
          v = -1,
          z = "",
          x = "",
          E,
          S = 0,
          T = a.length,
          J = null,
          H = null;
        (z = x), (x = a.charAt(S)), S < T;
        S++
      )
        "\\" != z &&
          (J ||
            ((E = S),
            (J = {
              fc: null,
              ld: [],
              Bf: [],
              c: [],
              tag: null,
              vg: null,
              id: null,
              Yh: function () {
                return Bc ? this.Dp : this.tag;
              },
            }),
            (v = S)),
          0 <= g
            ? "]" == x
              ? (H.mh ? (H.Ei = c(k || g + 1, S)) : (H.mh = c(g + 1, S)),
                !(g = H.Ei) ||
                  ('"' != g.charAt(0) && "'" != g.charAt(0)) ||
                  (H.Ei = g.slice(1, -1)),
                J.Bf.push(H),
                (H = null),
                (g = k = -1))
              : "=" == x &&
                ((k = 0 <= "|~^$*".indexOf(z) ? z : ""),
                (H.type = k + x),
                (H.mh = c(g + 1, S - k.length)),
                (k = S + 1))
            : 0 <= h
            ? ")" == x && (0 <= l && (H.value = c(h + 1, S)), (l = h = -1))
            : "#" == x
            ? (b(), (r = S + 1))
            : "." == x
            ? (b(), (p = S))
            : ":" == x
            ? (b(), (l = S))
            : "[" == x
            ? (b(), (g = S), (H = {}))
            : "(" == x
            ? (0 <= l &&
                ((H = { name: c(l + 1, S), value: null }), J.ld.push(H)),
              (h = S))
            : " " == x &&
              z != x &&
              (b(),
              0 <= l && J.ld.push({ name: c(l + 1, S) }),
              (J.ol = J.ld.length || J.Bf.length || J.c.length),
              (J.Kr = J.fc = c(E, S)),
              (J.Dp = J.tag = J.vg ? null : J.tag || "*"),
              J.tag && (J.tag = J.tag.toUpperCase()),
              d.length &&
                d[d.length - 1].vg &&
                ((J.bl = d.pop()), (J.fc = J.bl.fc + " " + J.fc)),
              d.push(J),
              (J = null)));
      return d;
    }
    function sd(a, b) {
      var c = b || [];
      a && c.push(a);
      return c;
    }
    var Mi = G && "BackCompat" == A.F().compatMode,
      Zb = D && !I("9"),
      Oi = A.F().firstChild.children ? "children" : "childNodes",
      Bc = !1,
      Pi = {
        "*=": function (a, b) {
          return function (c) {
            return 0 <= fa(c, a).indexOf(b);
          };
        },
        "^=": function (a, b) {
          return function (c) {
            return 0 == fa(c, a).indexOf(b);
          };
        },
        "$=": function (a, b) {
          return function (c) {
            c = " " + fa(c, a);
            return c.lastIndexOf(b) == c.length - b.length;
          };
        },
        "~=": function (a, b) {
          var c = " " + b + " ";
          return function (b) {
            return 0 <= (" " + fa(b, a) + " ").indexOf(c);
          };
        },
        "|=": function (a, b) {
          b = " " + b;
          return function (c) {
            c = " " + fa(c, a);
            return c == b || 0 == c.indexOf(b + "-");
          };
        },
        "=": function (a, b) {
          return function (c) {
            return fa(c, a) == b;
          };
        },
      },
      ve = "undefined" == typeof A.F().firstChild.nextElementSibling,
      ud = ve ? "nextSibling" : "nextElementSibling",
      il = ve ? "previousSibling" : "previousElementSibling",
      td = ve ? vb : Nb,
      eg = {
        checked: function () {
          return function (a) {
            return a.checked || a.attributes.checked;
          };
        },
        "first-child": function () {
          return H;
        },
        "last-child": function () {
          return T;
        },
        "only-child": function () {
          return function (a) {
            return H(a) && T(a) ? !0 : !1;
          };
        },
        empty: function () {
          return function (a) {
            var b = a.childNodes;
            for (a = a.childNodes.length - 1; 0 <= a; a--) {
              var c = b[a].nodeType;
              if (1 === c || 3 == c) return !1;
            }
            return !0;
          };
        },
        contains: function (a, b) {
          var c = b.charAt(0);
          if ('"' == c || "'" == c) b = b.slice(1, -1);
          return function (a) {
            return 0 <= a.innerHTML.indexOf(b);
          };
        },
        not: function (a, b) {
          var c = x(b)[0],
            d = { pa: 1 };
          "*" != c.tag && (d.tag = 1);
          c.c.length || (d.c = 1);
          var g = r(c, d);
          return function (a) {
            return !g(a);
          };
        },
        "nth-child": function (a, b) {
          if ("odd" == b) return v;
          if ("even" == b) return z;
          if (-1 != b.indexOf("n")) {
            var c = b.split("n", 2),
              d = c[0] ? ("-" == c[0] ? -1 : parseInt(c[0], 10)) : 1,
              g = c[1] ? parseInt(c[1], 10) : 0,
              h = 0,
              k = -1;
            0 < d
              ? 0 > g
                ? (g = g % d && d + (g % d))
                : 0 < g && (g >= d && (h = g - (g % d)), (g %= d))
              : 0 > d && ((d *= -1), 0 < g && ((k = g), (g %= d)));
            if (0 < d)
              return function (a) {
                a = E(a);
                return a >= h && (0 > k || a <= k) && a % d == g;
              };
            b = g;
          }
          var l = parseInt(b, 10);
          return function (a) {
            return E(a) == l;
          };
        },
      },
      hl = Zb
        ? function (a) {
            var b = a.toLowerCase();
            "class" == b && (a = "className");
            return function (c) {
              return Bc ? c.getAttribute(a) : c[a] || c[b];
            };
          }
        : function (a) {
            return function (b) {
              return b && b.getAttribute && b.hasAttribute(a);
            };
          },
      Ni = {},
      Li = {},
      Ki = {},
      Ji = !!A.F().querySelectorAll && (!G || I("526")),
      zb = 0,
      gl = Zb
        ? function (a) {
            return Bc
              ? a.getAttribute("_uid") || a.setAttribute("_uid", ++zb) || zb
              : a.uniqueID;
          }
        : function (a) {
            return a._uid || (a._uid = ++zb);
          };
    a.ld = eg;
    return a;
  })();
  w("goog.dom.query", A.fc);
  w("goog.dom.query.pseudos", A.fc.ld);
  A.forms = {};
  A.forms.vr = function (a) {
    var b = new Ob();
    A.forms.Gk(a, b, A.forms.en);
    return b;
  };
  A.forms.wr = function (a) {
    var b = [];
    A.forms.Gk(a, b, A.forms.fn);
    return b.join("&");
  };
  A.forms.Gk = function (a, b, c) {
    for (var d = a.elements, g, h = 0; (g = d[h]); h++)
      if (g.form == a && !g.disabled && "FIELDSET" != g.tagName) {
        var k = g.name;
        switch (g.type.toLowerCase()) {
          case "file":
          case "submit":
          case "reset":
          case "button":
            break;
          case "select-multiple":
            g = A.forms.I(g);
            if (null != g) for (var l, p = 0; (l = g[p]); p++) c(b, k, l);
            break;
          default:
            (l = A.forms.I(g)), null != l && c(b, k, l);
        }
      }
    d = a.getElementsByTagName("INPUT");
    for (h = 0; (g = d[h]); h++)
      g.form == a &&
        "image" == g.type.toLowerCase() &&
        ((k = g.name),
        c(b, k, g.value),
        c(b, k + ".x", "0"),
        c(b, k + ".y", "0"));
  };
  A.forms.en = function (a, b, c) {
    var d = a.get(b);
    d || ((d = []), a.set(b, d));
    d.push(c);
  };
  A.forms.fn = function (a, b, c) {
    a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c));
  };
  A.forms.Cr = function (a) {
    a = a.elements;
    for (var b, c = 0; (b = a[c]); c++)
      if (!b.disabled && b.type && "file" == b.type.toLowerCase()) return !0;
    return !1;
  };
  A.forms.$i = function (a, b) {
    if ("FORM" == a.tagName)
      for (var c = a.elements, d = 0; (a = c[d]); d++) A.forms.$i(a, b);
    else 1 == b && a.blur(), (a.disabled = b);
  };
  A.forms.ur = function (a) {
    a.focus();
    a.select && a.select();
  };
  A.forms.Dr = function (a) {
    return !!A.forms.I(a);
  };
  A.forms.Er = function (a, b) {
    return !!A.forms.co(a, b);
  };
  A.forms.I = function (a) {
    var b = a.type;
    if (!m(b)) return null;
    switch (b.toLowerCase()) {
      case "checkbox":
      case "radio":
        return A.forms.Vn(a);
      case "select-one":
        return A.forms.$n(a);
      case "select-multiple":
        return A.forms.Zn(a);
      default:
        return m(a.value) ? a.value : null;
    }
  };
  A.Cq = A.forms.I;
  A.forms.co = function (a, b) {
    var c = a.elements[b];
    if (c) {
      if (c.type) return A.forms.I(c);
      for (var d = 0; d < c.length; d++) {
        var g = A.forms.I(c[d]);
        if (g) return g;
      }
    }
    return null;
  };
  A.forms.Vn = function (a) {
    return a.checked ? a.value : null;
  };
  A.forms.$n = function (a) {
    var b = a.selectedIndex;
    return 0 <= b ? a.options[b].value : null;
  };
  A.forms.Zn = function (a) {
    for (var b = [], c, d = 0; (c = a.options[d]); d++)
      c.selected && b.push(c.value);
    return b.length ? b : null;
  };
  A.forms.ic = function (a, b) {
    var c = a.type;
    if (m(c))
      switch (c.toLowerCase()) {
        case "checkbox":
        case "radio":
          A.forms.cq(a, b);
          break;
        case "select-one":
          A.forms.lq(a, b);
          break;
        case "select-multiple":
          A.forms.kq(a, b);
          break;
        default:
          a.value = null != b ? b : "";
      }
  };
  A.forms.cq = function (a, b) {
    a.checked = b;
  };
  A.forms.lq = function (a, b) {
    a.selectedIndex = -1;
    if (q(b))
      for (var c, d = 0; (c = a.options[d]); d++)
        if (c.value == b) {
          c.selected = !0;
          break;
        }
  };
  A.forms.kq = function (a, b) {
    q(b) && (b = [b]);
    for (var c, d = 0; (c = a.options[d]); d++)
      if (((c.selected = !1), b))
        for (var g, h = 0; (g = b[h]); h++) c.value == g && (c.selected = !0);
  };
  function ri(a) {
    this.f = a;
    this.f[si] = this;
    this.He = {};
    this.mb = {};
    this.ph = {};
  }
  var si = "_wect";
  ri.prototype.ac = wc("wireless.events.ListenerCoalescer");
  function ti(a) {
    a[si] || new ri(a);
    return a[si];
  }
  ri.prototype.lo = function (a, b) {
    void 0 == this.He[a] && (this.He[a] = 0);
    this.He[a]++;
    for (var c = this.mb[a], d = c.length, g, h = 0; h < d; h++)
      try {
        c[h](b);
      } catch (l) {
        var k = this.ac;
        k && k.log(qc, "Exception during event processing.", l);
        g = g || l;
      }
    this.He[a]--;
    if (g) throw g;
  };
  function ui(a, b) {
    a.ph[b] || (a.ph[b] = t(a.lo, a, b));
    return a.ph[b];
  }
  function vi(a, b, c, d) {
    d = !!d;
    var g = b + ":" + (d ? "capture" : "bubble");
    a.mb[g] || ((a.mb[g] = []), a.f.addEventListener(b, ui(a, g), d));
    a.mb[g].push(c);
  }
  function wi() {
    return -1 != navigator.userAgent.indexOf("Android");
  }
  var xi = /Mac OS X.+Silk\//;
  function yi(a, b, c, d) {
    return (a << 21) | (b << 14) | (c << 7) | d;
  }
  var zi = /OS (\d)_(\d)(?:_(\d))?/,
    Ai = /Chrome\/([0-9.]+)/;
  function Bi(a, b, c, d, g) {
    var h = ti(a);
    vi(h, b, c, d);
    g &&
      Ci(
        a,
        function () {
          vi(h, b, c, d);
        },
        function () {
          var a = !!d,
            g = b + ":" + (a ? "capture" : "bubble");
          if (h.mb[g]) {
            h.He[g] && (h.mb[g] = h.mb[g].slice(0));
            var p = h.mb[g].indexOf(c);
            -1 != p && h.mb[g].splice(p, 1);
            0 == h.mb[g].length &&
              ((h.mb[g] = void 0), h.f.removeEventListener(b, ui(h, g), a));
          }
        }
      );
  }
  function Ci(a, b, c) {
    a.addEventListener(
      "DOMFocusIn",
      function (a) {
        a.target && "TEXTAREA" == a.target.tagName && b();
      },
      !1
    );
    a.addEventListener(
      "DOMFocusOut",
      function (a) {
        a.target && "TEXTAREA" == a.target.tagName && c();
      },
      !1
    );
  }
  function Di() {}
  var Ei =
      /iPhone|iPod|iPad/.test(navigator.userAgent) ||
      wi() ||
      xi.test(navigator.userAgent),
    Fi = window.navigator.msPointerEnabled,
    Gi = Ei ? "touchstart" : Fi ? "MSPointerDown" : "mousedown",
    Hi = Ei ? "touchmove" : Fi ? "MSPointerMove" : "mousemove",
    Qi = Ei ? "touchend" : Fi ? "MSPointerUp" : "mouseup",
    Ri = Fi ? "MSPointerCancel" : "touchcancel";
  function Si(a) {
    return function (b) {
      b.touches = [];
      b.targetTouches = [];
      b.changedTouches = [];
      b.type != Qi && ((b.touches[0] = b), (b.targetTouches[0] = b));
      b.changedTouches[0] = b;
      a(b);
    };
  }
  function Ti(a) {
    var b;
    if ((b = wi() && -1 != navigator.userAgent.indexOf("Chrome/")))
      (b = Ai.exec(navigator.userAgent)),
        (b = 18 == +(b ? b[1] : "").split(".")[0]);
    return b
      ? new K(a.clientX, a.pageY - window.scrollY)
      : new K(a.clientX, a.clientY);
  }
  function Ui(a) {
    return (Fi ? [a] : a.changedTouches) || [];
  }
  function Vi(a) {
    return Fi ? a.pointerId : a.identifier;
  }
  var Wi,
    Xi,
    Yi,
    Zi,
    $i = wc("wireless.events.clickbuster");
  function aj(a) {
    if (!(2500 < na() - Xi)) {
      var b = Ti(a);
      if (1 > b.x && 1 > b.y)
        $i &&
          $i.log(
            qc,
            "Not busting click on label elem at (" + b.x + ", " + b.y + ")",
            void 0
          );
      else {
        for (var c = 0; c < Wi.length; c += 2)
          if (25 > Math.abs(b.x - Wi[c]) && 25 > Math.abs(b.y - Wi[c + 1])) {
            Wi.splice(c, c + 2);
            return;
          }
        $i && $i.log(qc, "busting click at " + b.x + ", " + b.y, void 0);
        a.stopPropagation();
        a.preventDefault();
        (a = Yi) && a();
      }
    }
  }
  function bj(a) {
    var b = Ti((a.touches || [a])[0]);
    Wi.push(b.x, b.y);
    window.setTimeout(function () {
      for (var a = b.x, d = b.y, g = 0; g < Wi.length; g += 2)
        if (Wi[g] == a && Wi[g + 1] == d) {
          Wi.splice(g, g + 2);
          break;
        }
      Yi = void 0;
    }, 2500);
  }
  function cj() {
    this.yc = [];
    this.zc = [];
  }
  function dj(a, b) {
    for (; (a.length && 250 < b - a[1]) || 10 < a.length; ) a.splice(0, 2);
  }
  function ej(a, b, c) {
    this.sa = a;
    this.Gb = b;
    this.pc = c;
    this.Pb = [];
    this.zd = [];
    this.Xg = [];
    this.Yg = [];
    this.ie = [];
    this.Ng = [];
  }
  ej.prototype.ga = 0;
  function fj(a, b) {
    for (var c, d = Ui(b), g = d.length, h = 0; h < a.ga; h++) {
      a.zd[h] = void 0;
      for (var k = 0; k < g; k++)
        if (a.Pb[h] == Vi(d[k])) {
          a.zd[h] = d[k];
          c = !0;
          break;
        }
    }
    return c;
  }
  ej.prototype.Ni = function (a) {
    if (!this.Pg && this.ga != this.pc) {
      for (
        var b = Ui(a), c = Math.min(b.length, this.pc - this.ga), d = 0;
        d < c;
        d++
      ) {
        var g = b[d];
        this.Pb[this.ga] = Vi(g);
        this.ie[this.ga] = g.clientX;
        this.Ng[this.ga] = g.clientY;
        this.ga++;
      }
      fj(this, a);
      if (this.ga == this.pc)
        for (d = 0; d < this.pc; d++) this.Xg[d] = this.Yg[d] = 0;
      this.Dl(a);
    }
  };
  ej.prototype.ug = function (a) {
    if (!this.Pg && 0 < this.ga && fj(this, a)) {
      this.Sc && this.Li(a);
      a = this.ga;
      for (var b = 0, c = 0; c < a; c++)
        this.zd[c] &&
          (this.Pb.splice(c - b, 1), this.ga--, (this.Sc = !1), b++);
    }
  };
  ej.prototype.reset = function () {
    this.ga = 0;
    this.Pg = this.Sc = !1;
  };
  function gj(a, b) {
    var c = b || 0,
      d = a.zd[c];
    return d ? d.clientX : a.sa[a.Pb[c || 0]];
  }
  function hj(a, b) {
    var c = b || 0,
      d = a.zd[c];
    return d ? d.clientY : a.Gb[a.Pb[c || 0]];
  }
  function ij(a, b, c) {
    ej.call(this, b, c, 1);
    this.Fe = a;
    this.Jh = new cj();
  }
  y(ij, ej);
  ij.prototype.Dl = function (a) {
    var b = this.Jh,
      c = this.ie[0],
      d = this.Ng[0];
    a = a.timeStamp;
    b.yc.length = b.zc.length = 0;
    b.yc.push(c, a);
    b.zc.push(d, a);
    b.Ih = c;
    this.Ih = this.ie[0];
  };
  ij.prototype.Cl = function () {
    return !0;
  };
  ij.prototype.Mi = function (a) {
    this.Ih = this.ie[0];
    var b = this.Jh,
      c = gj(this),
      d = hj(this),
      g = a.timeStamp,
      h = b.yc[b.yc.length - 2] - c,
      k = b.zc[b.zc.length - 2] - d,
      l = b.yc,
      p = b.Ro;
    p && h && 2 < l.length && (0 < p) ^ (0 < h) && l.splice(0, l.length - 2);
    l = b.zc;
    (p = b.So) &&
      k &&
      2 < l.length &&
      (0 < p) ^ (0 < k) &&
      l.splice(0, l.length - 2);
    dj(b.yc, g);
    dj(b.zc, g);
    b.yc.push(c, g);
    b.zc.push(d, g);
    b.Ro = h;
    b.So = k;
    this.Fe.ip(a);
    a.preventDefault();
  };
  ij.prototype.Li = function (a) {
    if (a) {
      var b = this.Jh,
        c = a.timeStamp;
      m(this.sa[this.Pb[0]]) &&
        m(this.Gb[this.Pb[0]]) &&
        c &&
        (dj(b.yc, c), dj(b.zc, c));
      a.preventDefault();
    }
    b = this.Fe;
    b.ub.Md &&
      ((c = b.Jn),
      (c = 0 < gj(c) - c.Ih ? "left" : "right"),
      0 != b.ub.Sb && b.ub.Sb != b.ub.Zr && b.ub.scroll(c));
    var b = this.ie[0],
      c = this.Ng[0],
      d;
    if ((d = a))
      m(Zi) ||
        ((d = zi.exec(navigator.userAgent) || []),
        d.shift(),
        (Zi = yi.apply(null, d) >= yi(6) || !1)),
        (d = Zi);
    if (d) a.preventDefault();
    else
      for (
        Yi = void 0,
          Wi ||
            (document.addEventListener("click", aj, !0),
            (a = bj),
            Ei || Fi || (a = Si(a)),
            Bi(document, Gi, a, !0, !0),
            (Wi = [])),
          Xi = na(),
          a = 0;
        a < Wi.length;
        a += 2
      )
        if (25 > Math.abs(b - Wi[a]) && 25 > Math.abs(c - Wi[a + 1])) {
          Wi.splice(a, a + 2);
          break;
        }
  };
  function jj(a, b, c) {
    ej.call(this, b, c, 2);
    this.tj = a;
  }
  y(jj, ej);
  jj.prototype.Dl = aa;
  jj.prototype.Cl = function (a) {
    return this.tj.Ir(a);
  };
  jj.prototype.Mi = function (a) {
    this.tj.Hr(a);
    a.preventDefault();
  };
  jj.prototype.Li = function (a) {
    this.tj.Gr(a);
    a && a.preventDefault();
  };
  function kj(a, b, c) {
    hg.call(this, a, b, bg.qa(), c);
    this.ff = new lj(1e3);
    Dc(this, this.ff);
  }
  y(kj, hg);
  kj.prototype.g = function () {
    kj.b.g.call(this);
    A.h.add(this.a(), "jfk-select");
  };
  kj.prototype.Ti = function () {
    if (W(this).A) {
      var a = this.a();
      ae(a);
      var b = Yf(this) ? 4 : 6,
        c = W(this).a(),
        d = !1;
      W(this).v || ((d = !0), (c.style.visibility = "hidden"), P(c, !0));
      var g = Math.max(this.Kd(), 0),
        g = Le(W(this), g),
        h = 0;
      if ($f(this)) {
        var k = c.scrollTop;
        c.style.overflowY = "visible";
        c.style.height = "auto";
        d || ((h = ae(g.a()).y - ae(this.a()).y), (h = k - h));
      }
      var d = g ? g.a().offsetTop : 0,
        k = Wd(a),
        l = 0;
      k &&
        ((l = Wd(c)),
        (l = Math.min(Math.max(k.top, l.top + 2), l.bottom - 2) - k.top));
      pe(
        a,
        b,
        c,
        Yf(this) ? 4 : 6,
        new K(0, l - d),
        null,
        65 | ($f(this) ? 32 : 132),
        null
      );
      $f(this) &&
        ((a = ae(g.a()).y - ae(this.a()).y),
        (c.style.overflowY = "auto"),
        (c.scrollTop = h + a));
      W(this).v || (P(c, !1), (c.style.visibility = "visible"));
    }
  };
  kj.prototype.Za = function (a) {
    var b = kj.b.Za.call(this, a);
    return "key" != a.type ||
      !W(this) ||
      a.altKey ||
      a.ctrlKey ||
      a.metaKey ||
      a.xg
      ? b
      : U(this, 64) || 32 != a.keyCode
      ? b
        ? (!U(this, 64) || (38 != a.keyCode && 40 != a.keyCode) || mj(this), !0)
        : qd(a.keyCode)
        ? ((a = a.charCode ? String.fromCharCode(a.charCode) : " "),
          this.ff.add(a),
          (b = this.ff.De),
          this.ff.Qf ? nj(this, a, !1) : nj(this, b, 1 < b.length),
          !0)
        : !1
      : (this.ff.Ol(), b);
  };
  function mj(a) {
    var b = pf(W(a));
    b && Yd(b.a(), W(a).H());
  }
  function nj(a, b, c) {
    var d = U(a, 64) ? W(a).Z : a.Kd();
    b = new RegExp("^" + Ba(b), "i");
    c || ++d;
    for (var d = 0 > d ? 0 : d, g = W(a), h = 0, k = Ke(g); h < k; ++h) {
      c = (d + h) % k;
      var l = Le(g, c),
        p = l.Tc();
      if (l.isEnabled() && p && b.test(p)) {
        b = c;
        U(a, 64) ? (W(a).hc(b), mj(a)) : a.Kg(b);
        break;
      }
    }
  }
  function lj(a) {
    zc.call(this);
    this.ek = new od(this.Ol, a, this);
    Dc(this, this.ek);
  }
  y(lj, zc);
  lj.prototype.add = function (a) {
    a == this.De ? (this.Qf = !0) : this.Qf || (this.De += a);
    this.ek.start();
  };
  lj.prototype.Ol = function () {
    this.De = "";
    this.Qf = !1;
  };
  lj.prototype.Qf = !1;
  lj.prototype.De = "";
  function oj(a) {
    this.Zg = a;
    this.f = this.Zg.a();
    this.sa = {};
    this.Gb = {};
    this.ja = [];
  }
  var pj = [ij, jj];
  e = oj.prototype;
  e.wp = function (a) {
    var b = a.touches || [a],
      c = b.length,
      d;
    for (d in this.sa) {
      for (var g = 0; g < c; g++)
        if (d == Vi(b[g])) {
          var h = !0;
          break;
        }
      h || qj(this, +d);
    }
    b = Ui(a);
    c = b.length;
    for (g = 0; g < c; g++) (d = Vi(b[g])), m(this.sa[d]) && qj(this, +d);
    c = !0;
    g = this.ja.length;
    for (b = 0; b < g; b++)
      if ((d = this.ja[b]) && d.ga != d.pc) {
        c = !1;
        break;
      }
    if (!c && this.Zg.Ni(a)) {
      c = Ui(a);
      d = c.length;
      for (b = 0; b < d; b++) {
        var h = c[b],
          k = Vi(h);
        this.sa[k] = h.clientX;
        this.Gb[k] = h.clientY;
      }
      for (b = 0; b < g; b++) (d = this.ja[b]) && d.Ni(a);
    }
  };
  e.sp = function (a) {
    for (var b = !0, c = this.ja.length, d = 0; d < c; d++) {
      var g = this.ja[d];
      if (g && 0 < g.ga) {
        b = !1;
        break;
      }
    }
    if (!b) {
      for (d = 0; d < c; d++)
        if ((g = this.ja[d]))
          if (((b = g), (g = a), !b.Pg && b.ga == b.pc && fj(b, g)))
            if (b.Sc) b.Mi(g);
            else {
              for (var h = void 0, k = 0; k < b.pc; k++) {
                var l = b.zd[k];
                if (l) {
                  var p = b.Pb[k],
                    r = b.Gb[p] - l.clientY;
                  b.Xg[k] += Math.abs(b.sa[p] - l.clientX);
                  b.Yg[k] += Math.abs(r);
                  h = h || 2 < b.Xg[k] || 2 < b.Yg[k];
                }
              }
              if (h) {
                for (k = 0; k < b.pc; k++)
                  (b.ie[k] = gj(b, k)), (b.Ng[k] = hj(b, k));
                b.Sc = b.Cl(g);
                b.Sc ? b.Mi(g) : b.reset();
              }
            }
      a = Ui(a);
      c = a.length;
      for (d = 0; d < c; d++)
        (b = a[d]),
          (g = Vi(b)),
          m(this.sa[g]) && ((this.sa[g] = b.clientX), (this.Gb[g] = b.clientY));
    }
  };
  e.jp = function (a) {
    for (var b = Ui(a), c = b.length, d, g = 0; g < c; g++) {
      var h = b[g],
        h = Vi(h);
      m(this.sa[h]) && (this.Zg.ug(a), (d = !0));
    }
    if (d) {
      d = this.ja.length;
      for (g = 0; g < d; g++) (h = this.ja[g]) && h.ug(a);
      for (g = 0; g < c; g++)
        (h = b[g]),
          (h = Vi(h)),
          m(this.sa[h]) && (delete this.sa[h], delete this.Gb[h]);
    }
  };
  function qj(a, b) {
    a.Zg.ug(null);
    for (var c = a.ja.length, d = 0; d < c; d++) {
      var g = a.ja[d];
      if (g) {
        var h = g;
        if (!h.Pg && 0 < h.ga) {
          for (var g = void 0, k = 0; k < h.ga; k++)
            if (h.Pb[k] == b) {
              g = k;
              break;
            }
          m(g) && (h.Sc && h.Li(null), h.Pb.splice(g, 1), h.ga--, (h.Sc = !1));
        }
      }
    }
    delete a.sa[b];
    delete a.Gb[b];
  }
  e.enable = function (a, b) {
    var c = t(this.jp, this),
      d = this.f,
      g = t(this.wp, this),
      h = t(this.sp, this),
      k = c;
    Ei || Fi || ((g = Si(g)), (h = Si(h)), (k = Si(k)));
    var l = !!a;
    Bi(d, Gi, g, l, b);
    Bi(d, Hi, h, l, b);
    Bi(d, Qi, k, l, b);
    Bi(d, Ri, c, l, b);
  };
  e.reset = function () {
    for (var a in this.sa) delete this.sa[Number(a)], delete this.Gb[Number(a)];
    for (a = 0; a < this.ja.length; a++) {
      var b = this.ja[a];
      b && b.reset();
    }
  };
  e.am = function (a) {
    var b = this.ja[0];
    b ? (a = b) : ((b = new pj[0](a, this.sa, this.Gb)), (a = this.ja[0] = b));
    return a;
  };
  function rj() {
    N.call(this);
    this.Pp = 600;
    this.Vl = 1;
    this.Tp = Tg;
    this.Qp = new K(0, 0);
    this.Ah = A.Ua();
    this.X = new A.i();
    this.T = new we(this);
  }
  y(rj, N);
  rj.prototype.scrollTo = function (a, b) {
    this.Ah = A.Ua();
    var c = b || this.Qp;
    a = new K(c.x + a.x, c.y + a.y);
    c = new Pg([this.Ah.x, this.Ah.y], [a.x, a.y], this.Vl * this.Pp, this.Tp);
    this.T.j(c, ["begin", "finish", "animate"], this.xo);
    c.play();
  };
  rj.prototype.xo = function (a) {
    switch (a.type) {
      case "begin":
        this.dispatchEvent("b");
        break;
      case "finish":
        window.scrollTo(a.x, a.y);
        this.dispatchEvent("a");
        break;
      case "animate":
        window.scrollTo(a.x, a.y);
    }
  };
  function sj(a, b) {
    var c = Xd(b);
    a.scrollTo(c, void 0);
  }
  rj.prototype.io = function (a) {
    a.preventDefault();
    a = a.target;
    var b = A.Id(a, "A", "gweb-smoothscroll-control");
    b && (a = b);
    a = a.href.match(/(#)(.*)/)[2];
    b = A.a(a);
    tj(b, !0);
    sj(this, b);
    window.location.hash = a;
    tj(b, !1);
  };
  function tj(a, b) {
    var c = a.id.match("_temp");
    b != c && (a.id = b ? a.id + "_temp" : a.id.replace("_temp", ""));
  }
  Function.prototype.bind ||
    (Function.prototype.bind = function (a) {
      function b() {
        return g.apply(
          this instanceof c && a ? this : a,
          d.concat(Array.prototype.slice.call(arguments))
        );
      }
      function c() {}
      if ("function" !== typeof this)
        throw new TypeError(
          "Function.prototype.bind - what is trying to be",
          "bound is not callable"
        );
      var d = Array.prototype.slice.call(arguments, 1),
        g = this;
      c.prototype = this.prototype;
      b.prototype = new c();
      return b;
    });
  function uj(a) {
    a = a || {};
    var b = A.g("input", {
      id: "history_state",
      style: "display:none;",
      type: "hidden",
    });
    document.body.appendChild(b);
    this.$a = new Yg(!1, null, b);
    this.Bo = cb(a, "hashParam", "slide");
    this.fa = A.a(a.carouselId);
    this.kn = "animInDuration" in a ? a.animInDuration : vj;
    this.ln = "animOutDuration" in a ? a.animOutDuration : 800;
    this.Xl = a.selectedTabClass || "tab-on";
    this.Rd = "isTimerSet" in a ? a.isTimerSet : !1;
    this.ui = "isHistorySet" in a ? a.isHistorySet : !1;
    this.cp = a.navPreviousClass || "nav-previous";
    this.bp = a.navNextClass || "nav-next";
    this.oq = a.tabContainerClass || "tabs";
    this.sq = "timerDuration" in a ? a.timerDuration : 5e3;
    this.ya = [];
    this.w = this.yb = null;
    this.Ic = 0;
    this.Yb = !1;
    this.pq = A.l("", this.oq, this.fa)[0];
    this.ke = A.l("li", "", this.pq);
    this.zg = A.l("", this.cp, this.fa)[0];
    this.Bl = A.l("", this.bp, this.fa)[0];
    this.Fd = new we(this);
    if (1 < this.ke.length)
      if ((this.ck(), wj(this), this.ui))
        if (
          ((a = (a = bh(this.$a).match(new RegExp(this.Bo + "=([^&]+)")))
            ? a[1]
            : null),
          (b = !1),
          a)
        ) {
          for (var c in this.ya) {
            var d = A.l("a", "", this.ya[c].fa)[0].href.split("#")[1];
            a == d && (this.ya[c].show(), (b = !0));
          }
          b || (this.ya[0].show(), this.of(0));
        } else this.ya[0].show(), this.of(0);
      else this.ya[0].show();
    else
      1 == this.ke.length &&
        ((this.ke[0].parentNode.style.display = "none"),
        this.zg && (this.zg.parentNode.style.display = "none"),
        wj(this));
  }
  w("gweb.ui.TimedCarousel", uj);
  var vj = 800;
  function wj(a) {
    a.Rd && a.lk();
    xj(a);
    a.dm();
  }
  e = uj.prototype;
  e.dm = function () {
    this.Rd &&
      (this.Fd.j(this.fa, "mouseover", this.Pc),
      this.Fd.j(this.fa, "mouseout", u(this.Gh, this.Ic)));
  };
  e.ck = function () {
    B(
      this.ke,
      function (a, b) {
        var c = new yj(a, this, b);
        this.ya.push(c);
        c.Sg.style.display = "none";
      },
      this
    );
  };
  e.lk = function () {
    Ec(this.w);
    this.w = new kd(this.sq);
    this.w.start();
    this.Fd.j(this.w, ld, function () {
      this.of(this.Ic);
      this.ya[this.Ic].show();
      this.Ic == this.ya.length - 1 ? (this.Ic = 0) : this.Ic++;
    });
  };
  e.Gh = function (a) {
    this.Ic = a;
    this.w.start();
  };
  e.Pc = function () {
    this.w && this.w.stop();
  };
  function xj(a) {
    a.zg &&
      a.Fd.j(a.zg, "click", function (a) {
        zj(this, 0 < this.yb.index ? this.yb.index - 1 : this.ya.length - 1);
        a.preventDefault();
      });
    a.Bl &&
      a.Fd.j(a.Bl, "click", function (a) {
        this.next();
        a.preventDefault();
      });
  }
  e.next = function () {
    var a = this.yb.index < this.ya.length - 1 ? this.yb.index + 1 : 0;
    zj(this, a);
    return a;
  };
  e.of = function (a) {
    if (this.ui) {
      var b = A.l("a", "", this.yb.fa)[0].href.split("#")[1];
      a = A.l("a", "", this.ya[a].fa)[0].href.split("#")[1];
      var c = bh(this.$a),
        b = c ? c.replace(b, a) : a;
      ih(this.$a, b);
    }
  };
  function zj(a, b) {
    a.of(b);
    a.Rd && a.Pc();
    a.ya[b].show();
    a.Rd && a.Gh(b);
  }
  var Aj = /tab-(.*)$/;
  function yj(a, b, c) {
    this.index = c;
    this.fa = a;
    this.parent = b;
    a = this.fa.id
      ? this.fa.id.match(Aj)[1]
      : A.l("a", "", this.fa)[0].href.split("#")[1];
    this.Sg = A.a(a);
    M(
      this.fa,
      "click",
      function (a) {
        zj(this.parent, this.index);
        a.preventDefault();
      },
      !1,
      this
    );
  }
  yj.prototype.show = function () {
    if (this.parent.Yb) return null;
    if (this != this.parent.yb) {
      this.parent.yb && this.parent.yb.li();
      this.parent.Rd && this.parent.Gh(this.index);
      var a = new uh(this.Sg, this.parent.kn);
      M(a, "begin", this.Dj, !1, this);
      M(a, "end", this.xf, !1, this);
      a.play();
      A.c.add(this.fa, this.parent.Xl);
      this.parent.yb = this;
      return this;
    }
    return null;
  };
  yj.prototype.li = function () {
    var a = new th(this.Sg, this.parent.ln);
    M(a, "begin", this.Dj, !1, this);
    M(a, "end", this.xf, !1, this);
    a.play();
    A.c.remove(this.fa, this.parent.Xl);
    return this;
  };
  yj.prototype.Dj = function () {
    this.parent.Yb = !0;
  };
  yj.prototype.xf = function () {
    this.parent.Yb = !1;
  };
  function Z(a, b) {
    Nh.call(this, Bj, !0);
    this.Uj = a || Cj;
    this.Ye = Bj + "-" + this.Uj;
    this.ni = this.Ye + "-iframe";
    this.Wg = b || "";
    this.oa = [];
    this.xb = null;
    this.yk = !0;
    this.rb = this.f;
    this.yi =
      this.Ra =
      this.xl =
      this.yl =
      this.Ja =
      this.Cb =
      this.Oa =
      this.pb =
        null;
    this.Kb = 0;
    this.cf = !1;
    this.pf = !0;
    this.kh = this.Sl = !1;
    this.Al = Dj;
    this.zl = Ej;
    this.Tj = Fj;
    this.Yk = !1;
    this.bf = -1;
    this.cd = !1;
    this.og = new vh();
    this.Ee = this.Mg = !1;
    this.Hj = !0;
    this.Rf = !1;
    this.jk = Gj;
    this.Dg = null;
  }
  y(Z, Nh);
  w("gweb.ui.LightBox", Z);
  var Bj = "gweb-lightbox",
    Hj = Ei ? "touchstart" : Fi ? "MSPointerDown" : "click",
    Fj = "\u00d7",
    Dj = "\u2039",
    Ej = "\u203a",
    Ij = /\.(gif|jpg|jpeg|png|webp)$/i,
    Jj = /^#/,
    Kj = /\/\/(www\.)?youtube\.com\//,
    Lj = /\/\/(www\.)?youtube\.com\/watch/,
    Cj = "lb",
    Gj = 767;
  Z.prototype.jq = function (a) {
    this.cf = a;
  };
  Z.prototype.setOverlayCaption = Z.prototype.jq;
  Z.prototype.bm = function (a) {
    this.pf = a;
  };
  Z.prototype.setItemCount = Z.prototype.bm;
  Z.prototype.em = function (a) {
    this.Sl = a;
  };
  Z.prototype.setScaleImages = Z.prototype.em;
  Z.prototype.$l = function (a) {
    this.kh = a;
  };
  Z.prototype.setAnimate = Z.prototype.$l;
  Z.prototype.hq = function (a) {
    this.Al = a;
  };
  Z.prototype.setNavTextPrev = Z.prototype.hq;
  Z.prototype.gq = function (a) {
    this.zl = a;
  };
  Z.prototype.setNavTextNext = Z.prototype.gq;
  Z.prototype.$p = function (a) {
    this.Tj = a;
  };
  Z.prototype.setCloseText = Z.prototype.$p;
  Z.prototype.bq = function (a) {
    this.Yk = a;
  };
  Z.prototype.setHideNav = Z.prototype.bq;
  Z.prototype.iq = function (a) {
    this.bf = a ? 1 : 0;
  };
  Z.prototype.setOutsideNav = Z.prototype.iq;
  Z.prototype.eq = function (a) {
    this.cd = a;
  };
  Z.prototype.setLoop = Z.prototype.eq;
  Z.prototype.fq = function (a) {
    this.jk = a || Gj;
  };
  Z.prototype.setMobileWidthThreshold = Z.prototype.fq;
  Z.prototype.hk = function () {
    this.pf = !1;
    this.Ee = !0;
  };
  Z.prototype.disableNav = Z.prototype.hk;
  Z.prototype.ik = function () {
    this.Rf = !0;
  };
  Z.prototype.disableOnMobile = Z.prototype.ik;
  Z.prototype.Zp = function (a) {
    this.Hj = a;
  };
  Z.prototype.setBackgroundClickable = Z.prototype.Zp;
  Z.prototype.ta = function () {
    if (Mj(this)) {
      for (var a = A.B(this.Uj), b = 0, c = a.length; b < c; b++) {
        var d = a[b],
          g = new Nj(d);
        g.ll = M(d, Hj, u(this.ho, d), !1, this);
        this.oa.push(g);
        A.dataset.set(d, "lightboxIndex", this.oa.length - 1);
        -1 == this.bf && Kj.test(g.href) && (this.bf = 1);
      }
      Sh(this, 0.8);
      this.pk = !0;
      this.$ = null;
      this.G &&
        (this.$ ? ((a = this.$), (a.f = this.G), a.tb()) : A.L.qd(this.G, Kb),
        P(this.G, !!this.$));
      this.tb();
      1 == this.bf && A.c.add(this.rb, "gweb-lightbox-outside-nav");
      this.Kb = Math.ceil(2 * Zd(this.rb).top);
      this.Ee || ((a = new wd(document)), M(a, "key", this.Ya, !1, this));
      M(this, "imageloaded", u(this.uh, this.Oa), !1, this);
      M(this, "iframeloaded", u(this.uh, this.pb), !1, this);
      M(this, "fragmentloaded", u(this.uh, this.Cb), !1, this);
      this.Hj && M(this.Ia, Hj, u(this.M, !1), !1, this);
      M(this, Wh, this.Kf, !1, this);
      M(this, "navigateprev", u(this.fj, this.yl), !1, this);
      M(this, "navigatenext", u(this.fj, this.xl), !1, this);
      "opacity" in window.document.body.style && (this.Mg = !0);
    }
    M(window, "resize", u(this.yn, 250), !1, this);
  };
  Z.prototype.init = Z.prototype.ta;
  e = Z.prototype;
  e.yn = function (a) {
    this.Dg || (this.Dg = md(u(this.wo), a, this));
  };
  function Mj(a, b) {
    var c = A.Da().width <= a.jk;
    return (a.Rf && !c) || (!a.Rf && !b) || (!a.Rf && b && !c);
  }
  e.g = function () {
    Z.b.g.call(this);
    A.appendChild(this.Ga, A.createTextNode(this.Tj));
    this.f.setAttribute("id", this.Ye);
    this.G &&
      ((this.Ja = A.g("div", "gweb-lightbox-caption gweb-lightbox-hide")),
      A.appendChild(this.G, this.Ja));
    this.pf && 1 < this.oa.length && this.Ha
      ? ((this.yi = A.g("span")), A.appendChild(this.Ha, this.yi))
      : (this.pf = !1);
    this.rb = this.f;
    this.Ee
      ? P(this.G, !0)
      : ((this.yl = Oj(this, "gweb-lightbox-prev")),
        (this.xl = Oj(this, "gweb-lightbox-next")));
    for (var a = 0, b = this.oa.length; a < b; a++) {
      var c = this.oa[a];
      this.Oa || "IMG" != c.type
        ? this.pb || "IFRAME" != c.type
          ? this.Cb ||
            "A" != c.type ||
            ((this.Cb = A.g("div", {
              id: this.Ye + "-fragment",
              class: Bj + "-fragment",
            })),
            A.append(this.Ka, this.Cb))
          : ((this.pb = A.Na.yh(A)),
            (this.pb.id = this.ni),
            (this.pb.name = this.ni),
            A.append(this.Ka, this.pb))
        : ((this.Oa = A.g("img", {
            id: this.Ye + "-image",
            src: "//www.google.com/images/cleardot.gif",
          })),
          be(this.Oa, 200, 200),
          A.appendChild(this.Ka, this.Oa));
    }
  };
  e.ho = function (a, b) {
    var c = this.oa[Pj(a)].En;
    Mj(this, c) && (b.preventDefault(), this.fj(a));
  };
  e.wo = function () {
    nd(this.Dg);
    this.Dg = null;
    var a = Mj(this);
    if (!this.a() && a) this.ta();
    else if (this.a())
      if (a) this.Lb(this.Kl);
      else {
        for (a = this.oa.length - 1; 0 <= a; a--) fd(this.oa[a].ll);
        this.oa = [];
        this.Ca();
      }
  };
  e.Ya = function (a) {
    if (this.v && !this.Ee)
      switch (a.keyCode) {
        case 37:
          (this.cd || 0 != this.xb) && this.dispatchEvent("navigateprev");
          break;
        case 39:
          (this.cd || this.xb != this.oa.length - 1) &&
            this.dispatchEvent("navigatenext");
      }
  };
  e.Hg = function (a) {
    a
      ? (A.c.remove(this.Ja, "gweb-lightbox-hide"),
        (this.Ja.innerHTML = a),
        this.cf && A.c.add(this.Ja, "gweb-lightbox-overlay"))
      : (A.md(this.Ja), A.c.add(this.Ja, "gweb-lightbox-hide"));
    P(this.Ja, !1);
  };
  Z.prototype.setCaption = Z.prototype.Hg;
  e = Z.prototype;
  e.hm = function () {
    P(this.Ja, !0);
    this.kh && new sh(this.Ja, 200).play();
  };
  function Pj(a) {
    a = A.dataset.get(a, "lightboxIndex");
    return parseInt(a, 10);
  }
  function Oj(a, b) {
    var c = A.g("span", "", "gweb-lightbox-next" == b ? a.zl : a.Al),
      d = A.g("img", { src: "//www.google.com/images/cleardot.gif", alt: "" }),
      c = A.g("a", { class: "gweb-lightbox-nav " + b, href: "#" }, [c, d]);
    P(c, !1);
    A.appendChild(a.G, c);
    P(a.G, !0);
    M(
      c,
      Hj,
      function (a) {
        a.preventDefault();
        "gweb-lightbox-next" == b
          ? this.dispatchEvent("navigatenext")
          : this.dispatchEvent("navigateprev");
      },
      !1,
      a
    );
    return c;
  }
  function Qj(a, b, c) {
    b = A.Eb(b);
    b.style.visibility = "visible";
    "gweb-lightbox-prev" == c
      ? (b.style.left = "0")
      : "gweb-lightbox-next" == c && (b.style.right = "0");
    md(u(a.Rn, b), 2e3, a);
  }
  e.Rn = function (a) {
    a = new rh(a, 500);
    M(a, "end", this.Do, !1, this);
    a.play();
  };
  e.Do = function (a) {
    a = a.target.element;
    a.style.visibility = "hidden";
    a.style.opacity = 1;
    a.style.filter = "";
  };
  e.fj = function (a) {
    this.gj(Pj(a));
  };
  e.gj = function (a) {
    if (this.oa && a <= this.oa.length - 1) {
      this.xb = a;
      a = this.oa[this.xb];
      this.Hg("");
      if (!this.v) {
        this.M(!0);
        var b = new sh(this.rb, 200);
        this.Mg || M(b, "end", u(Ld, this.rb, "filter", ""), !1, this);
        b.play();
      }
      this.pf && (this.yi.innerHTML = this.xb + 1 + "/" + this.oa.length);
      this.Kl = O(this.rb);
      switch (a.type) {
        case "A":
          this.Kf("A");
          Rj(this, !0, this.Cb);
          be(this.Cb, a.width, a.height);
          this.Ra = new Hd(a.width, a.height);
          b = a.href.split("#");
          if (1 < b.length)
            (a = A.a(b[1]).cloneNode(!0)),
              A.append(this.Cb, a.childNodes),
              this.dispatchEvent("fragmentloaded");
          else throw Error("Invalid url:" + a.href);
          break;
        case "IFRAME":
          Sj(this, a);
          break;
        case "IMG":
          this.Di(a);
      }
    }
  };
  Z.prototype.showContentByIndex = Z.prototype.gj;
  function Tj(a, b) {
    try {
      var c = window.frames[a.ni];
      c && c.location.replace(b);
    } catch (d) {}
  }
  Z.prototype.Kf = function (a) {
    this.pb &&
      ("IFRAME" != a && Tj(this, "//www.google.com/images/cleardot.gif"),
      P(this.pb, !a || "IFRAME" == a));
    this.Oa &&
      ("IMG" != a && (this.Oa.src = "//www.google.com/images/cleardot.gif"),
      P(this.Oa, !a || "IMG" == a));
    this.Cb && (A.md(this.Cb), P(this.Cb, !a || "A" == a));
  };
  function Rj(a, b, c) {
    A.c.enable(a.rb, "gweb-lightbox-loading", b);
    a.Mg && c && (b ? ee(c, 0.5) : new sh(c, 500).play());
  }
  function Sj(a, b) {
    a.Kf("IFRAME");
    Rj(a, !0, a.Oa);
    dd(
      a.pb,
      "load",
      function (a) {
        a.preventDefault();
        this.pb.width = b.width;
        this.pb.height = b.height;
        this.Ra = new Hd(b.width, b.height);
        this.dispatchEvent("iframeloaded");
      },
      !1,
      a
    );
    Tj(a, Uj(b));
  }
  Z.prototype.Di = function (a) {
    var b = A.Da(window),
      c = this.Ye + "-image";
    this.Kf("IMG");
    this.og && (xh(this.og, c, a.href), this.og.start());
    Rj(this, !0, this.Oa);
    dd(
      this.og,
      "load",
      function (a) {
        a = a.target;
        this.Oa.src = a.src;
        if (this.Sl) {
          var c = ie(this.ka).height,
            h = O(this.Ja).height + this.Kb,
            c = this.cf ? b.height - this.Kb - c : b.height - this.Kb - c - h,
            h = 1 == this.bf ? b.width - 3 * this.Kb : b.width - this.Kb;
          a.height > c || a.width > h
            ? ((h = Math.min(h / a.width - 0.1, c / a.height - 0.05)),
              (c = Math.floor(a.width * h)),
              (a = Math.floor(a.height * h)),
              be(this.Oa, c, a),
              (this.Ra = new Hd(c, a)))
            : (be(this.Oa, a.width, a.height),
              (this.Ra = new Hd(a.width, a.height)));
        } else
          be(this.Oa, a.width, a.height), (this.Ra = new Hd(a.width, a.height));
        this.dispatchEvent("imageloaded");
      },
      !1,
      this
    );
  };
  Z.prototype.uh = function (a) {
    var b = this.oa[this.xb],
      c = 200 < this.Ra.width ? this.Ra.width : 200;
    this.rb.style.width = Sd(c, !0);
    this.Ja.style.width = Sd(c, !0);
    this.Hg(b.title);
    this.Lb(this.Kl);
    if (!this.Ee) {
      var d = this.oa.length,
        c = A.ia("gweb-lightbox-prev", this.G),
        g = A.ia("gweb-lightbox-next", this.G),
        b = A.l("img", null, this.G);
      0 == this.xb
        ? this.cd
          ? (P(c, !0), A.dataset.set(c, "lightboxIndex", d - 1))
          : P(c, !1)
        : (P(c, !0), A.dataset.set(c, "lightboxIndex", this.xb - 1));
      this.xb + 1 == d
        ? this.cd
          ? (P(g, !0), A.dataset.set(g, "lightboxIndex", 0))
          : P(g, !1)
        : (P(g, !0), A.dataset.set(g, "lightboxIndex", this.xb + 1));
      this.Yk &&
        this.yk &&
        this.Mg &&
        (Qj(this, g, "gweb-lightbox-next"), Qj(this, c, "gweb-lightbox-prev"));
      var d = O(this.Ja).height,
        h = O(this.ka).height + "px";
      Ld(c, "top", h);
      Ld(g, "top", h);
      c = this.cf ? this.Ra.height - d : this.Ra.height;
      g = 0.35 * this.Ra.width;
      for (d = b.length - 1; 0 <= d; d--) be(b[d], g, c);
      this.yk = !1;
    }
    Rj(this, !1, a);
  };
  Z.prototype.Lb = function (a) {
    if (a) {
      var b = A.Da(window),
        c = A.Ua(),
        d = O(this.ka),
        g = O(this.Ja),
        h = [],
        k = 200 <= this.Ra.width ? this.Ra.width : 200,
        d = this.Ra.height + d.height;
      this.cf || (d += g.height);
      g = Math.floor(c.x + b.width / 2 - k / 2) - this.Kb / 2;
      b = Math.floor(c.y + b.height / 2 - d / 2) - this.Kb / 2;
      this.kh
        ? ((h = [
            a.width - this.Kb,
            a.height - this.Kb,
            Xd(this.rb).x,
            Xd(this.rb).y,
          ]),
          (a = new Vj(this.rb, h, [k, d, g, b], 800, Tg)),
          M(a, "end", this.hm, !1, this),
          a.play())
        : (Z.b.Lb.call(this), this.hm());
    } else Z.b.Lb.call(this);
  };
  function Vj(a, b, c, d, g) {
    kh.apply(this, arguments);
  }
  y(Vj, kh);
  Vj.prototype.jb = function () {
    be(this.element, this.coords[0], this.coords[1]);
    Rd(this.element, this.coords[2], this.coords[3]);
  };
  function Nj(a) {
    this.type = this.bo(a);
    this.href = a.href || "";
    this.title = this.Sk(a);
    this.width =
      "IMG" == this.type ? 0 : parseInt(A.dataset.get(a, Wj), 10) || 200;
    this.height =
      "IMG" == this.type ? 0 : parseInt(A.dataset.get(a, Xj), 10) || 200;
    this.En = A.dataset.has(a, Yj);
    this.ll = null;
  }
  var Xj = "lightboxHeight",
    Yj = "lightboxMobile",
    Wj = "lightboxWidth";
  Nj.prototype.bo = function (a) {
    var b = a.href,
      c = b.match(/[^\?#]*(?=[\?#])/);
    return ((c && c[0]) || b).match(Ij)
      ? "IMG"
      : a.getAttribute("href", 2).match(Jj)
      ? "A"
      : "IFRAME";
  };
  Nj.prototype.Sk = function (a) {
    return A.dataset.get(a, "lightboxCaption") || a.getAttribute("title") || "";
  };
  function Uj(a) {
    if (Lj.test(a.href)) {
      a = new X(a.href);
      var b = a.ea.get("v");
      Y(a);
      a.ea.remove("v");
      return "//www.youtube.com/embed/" + b + "?" + ug(a.ea.toString());
    }
    return a.href;
  }
  function Zj(a, b) {
    Be.call(this, b);
    var c = a || {};
    this.Lo = cb(c, "isCalculateHeight", !0);
    this.Nc = cb(c, "cssNamespace", ak);
    this.Ri = cb(c, "paramName", "tab");
    this.Qg = [];
    this.Ad = [];
    this.xh = {};
    this.wh = [];
    this.pd = 0;
    this.kc = {
      Fq: this.Nc,
      Sm: this.Nc + "-" + bk,
      vj: this.Nc + "-" + ck,
      Tm: this.Nc + "-" + dk,
      Um: this.Nc + "-" + ek,
      xj: this.Nc + "-" + fk,
      $m: this.Nc + "-" + gk,
    };
    m(hk) ||
      ((c = A.g("input", {
        id: "history_state",
        style: "display:none;",
        type: "hidden",
      })),
      document.body.appendChild(c),
      (hk = new Yg(!1, null, c)),
      hk.Fa(!0));
    this.$a = hk;
  }
  var hk;
  y(Zj, Be);
  var ak = "gweb-tabset",
    bk = "content",
    ck = "content-active",
    dk = "contents",
    ek = "nav",
    fk = "nav-active",
    gk = "visible";
  e = Zj.prototype;
  e.g = function () {
    Zj.b.g.call(this);
    this.f = this.i().createElement("div");
  };
  e.Sa = function (a) {
    Zj.b.Sa.call(this, a);
    this.f = a;
    a = this.a();
    this.wm = A.l("div", this.kc.Um, a)[0];
    this.Qg = A.l("li", null, this.wm);
    this.un = A.l("div", this.kc.Tm, a)[0];
    this.Ad = A.B(this.kc.Sm, a);
    a = 0;
    for (var b; (b = this.Ad[a]); a++)
      (b = b.id || "UNDEFINED-CONTENT-ITEM-" + a),
        (this.xh[b] = a),
        (this.wh[a] = b);
    this.pd = ik(this);
    this.gb(this.pd, !1);
    this.ba().j(this.$a, "navigate", this.Fo);
    this.Lo && Ld(this.un, "min-height", jk(this) + "px");
    this.M();
  };
  e.O = function () {
    Zj.b.O.call(this);
    for (var a = this.ba(), b = 0, c; (c = this.Qg[b]); b++)
      (c = A.l("a", null, c)[0]), a.j(c, "click", u(this.uo, b));
  };
  e.Fo = function (a) {
    var b = ik(this);
    b != this.pd && a.No && this.gb(b, !1);
  };
  e.uo = function (a, b) {
    b.preventDefault();
    this.gb(a, !0);
  };
  function ik(a) {
    var b;
    b = new RegExp(a.Ri + "=[A-Za-z0-9_-]+", "g");
    var c = bh(a.$a).match(b);
    if (c && c[0])
      for (var d = c.length, g = 0; g < d; g++) {
        b = c[g].split("=")[1];
        var h = a.xh;
        if (null !== h && b in h) return cb(a.xh, b);
      }
    return 0;
  }
  function jk(a) {
    var b = O(a.wm).height,
      c = O(a.Ad[0]).height;
    B(
      a.Ad,
      function (a, b) {
        0 < b && (c = Math.max(c, O(a).height));
      },
      a
    );
    return Math.max(b, c);
  }
  e.gb = function (a, b) {
    var c = m(b) ? b : !0;
    A.c.remove(this.Qg[this.pd], this.kc.xj);
    A.c.remove(this.Ad[this.pd], this.kc.vj);
    A.c.add(this.Qg[a], this.kc.xj);
    A.c.add(this.Ad[a], this.kc.vj);
    if (c) {
      var d = new RegExp(this.Ri + "=" + this.wh[this.pd], "g"),
        c = this.Ri + "=" + this.wh[a],
        g = bh(this.$a);
      (d = g.match(d)) && d[0]
        ? ih(this.$a, g.replace(d[0], c))
        : ih(this.$a, g + (g ? "&" + c : c));
    }
    this.pd = a;
    this.dispatchEvent(new kk());
  };
  e.M = function () {
    A.c.add(this.a(), this.kc.$m);
  };
  function kk() {
    L.call(this, lk);
  }
  y(kk, L);
  var lk = "tab-select";
  function mk(a, b) {
    this.wq = a;
    this.Yj = b;
    this.src = b.src;
    this.type = b.type;
    this.rn = b.cat;
  }
  function nk(a, b) {
    switch (a) {
      case "floodlight":
        var c = 1e13 * (Math.random() + ""),
          d = "";
        Wa(b, function (a, g) {
          if ("ord" == g) {
            var l = ta(b.ord);
            c = "1" == l ? l + ";num=" + c : l;
          } else (l = ta(g) + "=" + ta(a) + ";"), (d += l);
        });
        var g = A.g("iframe", {
          src: Ca(
            "//",
            b.src,
            ".fls.doubleclick.net/activityi;",
            d,
            "ord=",
            c,
            "?"
          ),
          width: 1,
          height: 1,
          style: "display: none;",
        });
        document.body.appendChild(g);
    }
  }
  e = mk.prototype;
  e.ah = function (a, b) {
    a = A.a(a);
    1 == a.nodeType && "A" == a.tagName && b
      ? ok(a, this.Em, this)
      : ok(a, this.Ne, this);
  };
  e.Ne = function (a) {
    a = a || window.event;
    this.track(pk(this, a.currentTarget || a.srcElement));
  };
  e.track = function (a) {
    nk(this.wq, a || this.Yj);
  };
  e.Em = function (a) {
    a = a || window.event;
    var b = a.currentTarget || a.srcElement;
    this.track(pk(this, b));
    "A" != b.tagName && (b = A.Id(b, "A"));
    a &&
      "click" == a.type &&
      b &&
      b.href &&
      "_blank" != b.target &&
      (a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
      setTimeout(function () {
        window.top.location = b.href;
      }, 1e3));
  };
  e.$g = function (a, b) {
    var c = A.l(void 0, a);
    B(
      c,
      function (a) {
        this.ah(a, b);
      },
      this
    );
  };
  function pk(a, b) {
    var c = A.dataset.getAll(b),
      d = {};
    d.src = c.dSrc || a.src;
    d.cat = c.dCat || a.rn;
    d.type = c.dType || a.type;
    Wa(c, function (a, b) {
      var c = b.match(/^d([A-Z])(\w+)$/);
      c && ((b = c[1].toLowerCase() + c[2]), (d[b] = a));
    });
    return d;
  }
  function ok(a, b, c) {
    c && (b = t(b, c));
    a.addEventListener
      ? a.addEventListener("click", b, !1)
      : a.attachEvent && a.attachEvent("onclick", b);
  }
  function qk(a, b) {
    mk.call(this, a, b);
    this.className = b.className;
    this.xa = rk;
    sk(this);
  }
  y(qk, mk);
  var rk = "crosB",
    tk = {
      dr: { id: "bkws", xa: "crosC" },
      er: { id: "skws", Vr: "crosD" },
      Oq: { id: "ctpt", xa: "crosE" },
      Pq: { id: "ctpt", xa: "crosE" },
      Rq: { id: "ctxt", xa: "crosF" },
      Zq: { id: "ntp", xa: "crosG" },
      Mq: { id: "Chromebooks", xa: "crosH" },
      Nq: { id: "GDN", xa: "crosI" },
      qr: { id: "YTPT", xa: "crosJ" },
      pr: { id: "YTVI", xa: "crosK" },
    };
  function uk(a, b, c) {
    var d = 1e13 * (Math.random() + ""),
      g = A.dataset.get(c, "floodlightCat"),
      h = g || b.cat,
      k = A.dataset.get(c, "floodlightType") || b.type,
      d = g ? 1 : d;
    b = escape(b.src);
    k = ta(k);
    h = ta(h);
    a = a.xa;
    c = c ? A.dataset.get(c, "gPartner") || "NONE" : void 0;
    c = A.g("iframe", {
      src: Ca(
        "//fls.doubleclick.net/activityi;",
        "src=",
        b,
        ";",
        "type=",
        k,
        ";",
        "cat=",
        h,
        ";",
        "ord=",
        d,
        ";",
        "u1=",
        a,
        ";",
        "u2=",
        c,
        ";",
        "?"
      ),
      width: 1,
      height: 1,
      style: "display: none;",
    });
    document.body.appendChild(c);
  }
  qk.prototype.Em = function (a) {
    uk(this, this.Yj, a.target.parentNode);
    a = a || window.event;
    var b = a.currentTarget || a.srcElement;
    "A" != b.tagName && (b = A.Id(b, "A"));
    a &&
      "click" == a.type &&
      b &&
      b.href &&
      (a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
      setTimeout(function () {
        window.top.location = b.href;
      }, 1e3));
  };
  function sk(a) {
    window._gaq &&
      window._gaq.push(
        t(function () {
          this.xa = _gat._getTrackerByName()._getVisitorCustomVar(1);
          this.$g(this.className);
        }, a)
      );
  }
  qk.prototype.$g = function (a) {
    a = A.B(a);
    this.xa || (this.xa = rk);
    for (var b = 0, c = a.length; b < c; b++) {
      var d = a[b],
        g = -1 < d.href.indexOf("#"),
        h = g ? new X(d.href.replace("#", "?")) : new X(d.href),
        k = A.dataset.get(d, "gCustom"),
        l = -1 < d.href.indexOf("amazon.co.uk") ? this.xa + "01-21" : this.xa;
      if ("append" == k) d.href += l;
      else if (k) {
        var p = h;
        Y(p);
        p.ea.set(k, l);
        d.href = g ? h.toString().replace("?", "#") : h.toString();
      }
      this.ah(a[b], !0);
    }
  };
  function vk(a, b, c, d, g) {
    if (4 != b.length || 4 != c.length)
      throw Error("Start and end points must be 4D");
    var h = b[0] + b[2],
      k = c[0] + c[2],
      l = b[1] + b[3],
      p = c[1] + c[3],
      r = O(a),
      k = [r.width - p, r.height - k];
    Ta(b, [r.width - l, r.height - h]);
    Ta(c, k);
    kh.call(this, a, b, c, d, g);
  }
  y(vk, kh);
  vk.prototype.jb = function () {
    be(this.element, this.coords[4], this.coords[5]);
    this.element.style.borderWidth = pa(
      "%spx %spx %spx %spx",
      this.coords[0],
      this.coords[1],
      this.coords[2],
      this.coords[3]
    );
  };
  function wk(a, b, c, d) {
    N.call(this);
    c = A.a(c);
    this.ki = A.B(a, c);
    this.Ae = A.B(b, c);
    if (this.ki.length != this.Ae.length)
      throw Error(
        "There must be an equal number of header and content elements"
      );
    this.Bp = d;
    this.sj = [];
  }
  y(wk, N);
  wk.prototype.ta = function () {
    for (var a = 0, b = this.ki.length; a < b; a++) {
      var c = new ei(this.ki[a], this.Ae[a], a === this.Bp);
      M(c, "toggle", this.zp, !0, this);
      this.sj[a] = c;
    }
  };
  wk.prototype.zp = function (a) {
    if (a.Qn) {
      for (var b = 0, c = this.sj.length; b < c; b++) {
        var d = this.sj[b];
        d != a.target && d.Rc && gi(d, !1);
      }
      this.dispatchEvent(new xk("expand", this, a.target));
    }
  };
  function xk(a, b, c) {
    L.call(this, a, b);
    this.Bq = c;
  }
  y(xk, L);
  xk.prototype.eo = function () {
    return this.Bq;
  };
  function yk() {
    this.Mf = null;
    this.mi = !1;
    this.pe = null;
    this.$e = !1;
    N.call(this);
  }
  y(yk, N);
  yk.prototype.D = function (a) {
    this.el();
    if ((this.Mf = A.a(a))) {
      this.pe = A.ia("active", this.Mf);
      a = A.Vb(this.Mf);
      for (var b = 0, c = a.length; b < c; b++) new zk(this).D(a[b]);
      M(window, "resize", this.el, !1, this);
    }
  };
  yk.prototype.el = function () {
    if (!D || (D && 0 <= Da(ji, 9))) this.$e = A.Da().width <= Ak;
  };
  function zk(a) {
    this.sb = a;
    this.za =
      this.Df =
      this.Jj =
      this.ij =
      this.Kh =
      this.Ue =
      this.Fi =
      this.Ib =
      this.dd =
        null;
  }
  y(zk, N);
  var Ak = 770;
  e = zk.prototype;
  e.D = function (a) {
    this.dd = a;
    this.Ib = A.l("UL", null, a)[0];
    this.Fi = A.l("A", null, a)[0];
    Bk(this);
    M(this.dd, "mouseover", this.mm, !1, this);
    M(this.dd, "mouseout", this.km, !1, this);
    M(this.Df, "finish", this.ym, !1, this);
    M(window, "resize", u(this.Ch, 250), !1, this);
    this.Ib &&
      (Ck(this),
      Ei
        ? M(this.dd, Gi, this.zo, !1, this)
        : (M(this.dd, "mouseover", this.lm, !1, this),
          M(this.dd, "mouseout", this.nm, !1, this)));
  };
  function Bk(a) {
    a.Jj = new vk(a.Fi, [0, 0, 0, 0], [0, 0, 4, 0], 200);
    a.Df = new vk(a.Fi, [0, 0, 4, 0], [0, 0, 0, 0], 200);
  }
  function Ck(a) {
    var b = Td(a.Ib),
      c = O(a.Ib),
      d = O(a.dd);
    a.Ue = new K(b.x, d.height - c.height);
    a.Kh = new K(b.x, d.height);
    a.Ib.style.display = "block";
    Rd(a.Ib, a.Ue);
    b = 100 * A.l("LI", null, a.Ib).length;
    a.ij = new lh(a.Ib, [a.Ue.x, a.Ue.y], [a.Kh.x, a.Kh.y], b, Tg);
  }
  e.Ac = function () {
    this.Ib && Ck(this);
    Bk(this);
    M(this.Df, "finish", this.ym, !1, this);
    nd(this.za);
    this.za = null;
  };
  e.Ch = function (a) {
    this.za || (this.za = md(u(this.Ac), a, this));
  };
  e.lm = function (a) {
    this.sb.$e ||
      (a.relatedTarget && A.contains(a.currentTarget, a.relatedTarget)) ||
      this.ij.play();
  };
  e.nm = function (a) {
    this.sb.$e ||
      (a.relatedTarget && A.contains(a.currentTarget, a.relatedTarget)) ||
      (this.ij.stop(), Rd(this.Ib, this.Ue));
  };
  e.mm = function (a) {
    this.sb.$e ||
      (a.relatedTarget && A.contains(a.currentTarget, a.relatedTarget)) ||
      ((this.sb.mi = !0),
      this.Jj.play(),
      this.sb.pe && A.c.remove(this.sb.pe, "active"));
  };
  e.km = function (a) {
    this.sb.$e ||
      (a.relatedTarget && A.contains(a.currentTarget, a.relatedTarget)) ||
      ((this.sb.mi = !1), this.Df.play());
  };
  e.ym = function () {
    this.sb.pe && A.c.enable(this.sb.pe, "active", !this.sb.mi);
  };
  e.zo = function (a) {
    if (
      window.innerWidth > Ak &&
      (a.stopPropagation(),
      !(
        (a.relatedTarget && A.contains(a.currentTarget, a.relatedTarget)) ||
        (a.target.tagName && "A" == a.target.tagName)
      ))
    ) {
      a.preventDefault();
      var b = A.l("UL", null, a.currentTarget)[0];
      b && (0 > Td(b).y ? (this.lm(a), this.mm(a)) : (this.nm(a), this.km(a)));
    }
  };
  function Dk(a) {
    this.Pe = A.a("header");
    this.Ij = window.document.body;
    this.Zb = !1;
    this.$o = Gi;
    this.ca = [];
    this.tn = a || Ek;
    this.Pe && this.K();
  }
  var Ek = "Menu";
  e = Dk.prototype;
  e.K = function () {
    for (
      var a = A.l("LI", "nav-l1-menuitem", this.Pe), b = a.length - 1;
      -1 < b;
      b--
    ) {
      var c = new Fk(a[b]);
      this.ca[b] = c;
      M(c.anchor, "focus", u(this.Bm, c, !0), !1, this);
    }
    a = A.l("A", null, this.ca[this.ca.length - 1].Gc);
    0 < a.length && M(a[a.length - 1], "blur", u(this.Bm, null, !1), !1, this);
    window.matchMedia && window.matchMedia("screen").addListener
      ? ((a = window.matchMedia("(max-width: 600px)")),
        a.addListener(t(this.nk, this)),
        this.nk(a))
      : M(window, "resize", this.Pn, !1, this);
    Gk(this);
    Hk(this);
  };
  e.Bm = function (a) {
    for (var b = this.ca.length - 1; -1 < b; b--)
      A.c.enable(this.ca[b].pa, "nav-open", a == this.ca[b] && this.ca[b].Gc);
  };
  e.nk = function (a) {
    if ((a.matches && !this.Zb) || (!a.matches && this.Zb))
      for (
        this.Zb ? ((this.Zb = !1), this.Cm()) : ((this.Zb = !0), Ik(this)),
          A.c.enable(this.Pe, "compact-nav", this.Zb),
          A.c.remove(this.Ij, "nav-expanded"),
          a = this.ca.length - 1;
        0 <= a;
        a--
      )
        this.ca[a].anchor.href =
          this.Zb && this.ca[a].Gc ? "javascript:void(0)" : this.ca[a].link;
  };
  e.Pn = function () {
    var a = document.documentElement.clientWidth || document.body.clientWidth;
    ((600 >= a && !this.Zb) || (600 < a && this.Zb)) && Ik(this);
  };
  function Ik(a) {
    if (!a.In) {
      var b = A.g("A", { id: "menu-nav", href: "javascript:void(0)" }, a.tn),
        c = A.g("SPAN");
      A.appendChild(b, c);
      A.Qd(b, a.Pe);
      M(b, [a.$o, "focus"], a.uq, !1, a);
      for (b = a.ca.length - 1; -1 < b; b--)
        (c = a.ca[b]),
          A.c.has(c.pa, "active") && c.Gc && A.c.add(c.pa, "nav-open"),
          M(c.anchor, "click", a.Cm, !1, a);
      a.In = !0;
    }
  }
  e.uq = function (a) {
    a.preventDefault();
    A.c.toggle(this.Ij, "nav-expanded");
  };
  e.Cm = function (a) {
    var b;
    a && (b = a.currentTarget);
    for (var c = this.ca.length - 1; 0 <= c; c--)
      this.ca[c].anchor == b && this.ca[c].Gc
        ? (A.c.toggle(this.ca[c].pa, "nav-open"), a.preventDefault())
        : A.c.remove(this.ca[c].pa, "nav-open");
  };
  function Fk(a) {
    this.pa = a;
    this.link = (this.anchor = A.Eb(a)) ? this.anchor.href : "";
    this.Gc = A.ia("nav-l2", a);
  }
  function Gk(a) {
    var b = A.l("a", null, a.Pe),
      c = /\/chrome\/browser\/(|index\.html|#eula)$/;
    B(
      b,
      function (a) {
        a.href = $b ? a.href.replace(c, this.Kp) : a.href.replace(c, this.Jp);
      },
      a
    );
  }
  function Hk(a) {
    var b;
    B(
      a.ca,
      function (a) {
        if (a.Wr) {
          for (var d = (b = 0); d < a.Gc.childNodes.length; d++)
            /li/i.test(a.Gc.childNodes[d].tagName) && b++;
          A.h.add(a.Gc, "sub-nav-columns-" + b);
        }
      },
      a
    );
  }
  e.Kp = function (a, b) {
    return "/chrome/browser/mobile/" + b;
  };
  e.Jp = function (a, b) {
    return "/chrome/browser/desktop/" + b;
  };
  function Jk(a, b) {
    this.na = A.a(a);
    this.gb = new kj(b);
    this.K();
  }
  Jk.prototype.Tn = function () {
    var a = this.gb.I();
    "" != a && (window.location.href = a);
  };
  Jk.prototype.K = function () {
    Zf(this.gb);
    this.gb.Kg(0);
    this.gb.tb(this.na);
    B(
      A.Vb(this.na),
      function (a) {
        var b = A.dataset.get(a, "presentation");
        a = A.dataset.get(a, "value");
        b && a && this.gb.lc(new Cf(b, a));
      },
      this
    );
    M(this.gb, "change", this.Tn, !1, this);
  };
  function Kk(a) {
    A.a(a) &&
      ((this.f = A.a(a)),
      (a = [O(this.f).width]),
      Pg.call(this, [0], a, Lk, Ug),
      Mk(this));
  }
  y(Kk, Pg);
  var Lk = 1250;
  function Mk(a) {
    dd(a.f, "mouseover", a.play, !1, a);
  }
  Kk.prototype.jb = function () {
    this.f.style.webkitMaskImage = pa(
      "-webkit-gradient(radial, 17 17, %s, 17 17, %s,from(rgba(0, 0, 0, 1)),color-stop(0.5, rgba(0, 0, 0, 0.2)),to(rgba(0, 0, 0, 1)))",
      Math.floor(this.coords[0]),
      Math.floor(this.coords[0] + 15)
    );
  };
  Kk.prototype.dc = function () {
    this.jb();
    Kk.b.dc.call(this);
  };
  Kk.prototype.Jb = function () {
    this.jb();
    Kk.b.Jb.call(this);
    Mk(this);
  };
  Kk.prototype.Wa = function () {
    this.jb();
    Kk.b.Wa.call(this);
  };
  function Nk(a, b, c, d, g) {
    N.call(this);
    c = A.a(c);
    this.$ = A.B(a, c);
    this.Ae = A.B(b, c);
    this.Bj = A.a(d);
    this.sm = g || !1;
    if (this.$.length != this.Ae.length)
      throw Error(
        "There must be an equal number of button and content elements"
      );
    this.ib = [];
    this.Oc = null;
  }
  y(Nk, N);
  e = Nk.prototype;
  e.ta = function (a) {
    for (var b = 0, c = this.$.length; b < c; b++) {
      var d = new Ok(this.$[b], this.Ae[b]);
      d.ta(a);
      M(d, Pk, this.vq, !1, this);
      "hover" === a &&
        (M(d.Bd, "mouseout", this.Ji, !1, this),
        M(d.button, "mouseout", this.Ji, !1, this));
      this.ib[b] = d;
    }
    M(document, "click", this.Ji, !1, this);
  };
  e.Ji = function (a) {
    var b = this.Oc;
    !b ||
      this.sm ||
      (this.Bj && A.contains(this.Bj, a.target)) ||
      this.sm ||
      ("click" === b.bh &&
        (a.target == b.button || A.contains(b.button, a.target))) ||
      (Qk(this.Oc), (this.Oc = null));
  };
  e.vq = function (a) {
    a = a.currentTarget;
    a != this.Oc && (this.Oc && Qk(this.Oc), (this.Oc = a));
  };
  e.ao = function () {
    return this.ib;
  };
  e.nq = function (a) {
    (a = this.ib[a]) && a.hj();
  };
  function Ok(a, b) {
    N.call(this);
    this.button = a;
    this.Lj = ie(this.button);
    this.Bd = b;
    this.Zj = O(this.Bd);
    var c;
    a: {
      c = Ya(Rk);
      for (var d = 0, g = c.length; d < g; d++) {
        var h = c[d];
        if (A.c.has(this.button, h)) {
          c = h;
          break a;
        }
      }
      c = c[0];
    }
    this.Jl = c;
  }
  y(Ok, N);
  var Rk = {
      Dq: "tooltip-above",
      Gq: "tooltip-below",
      Wq: "tooltip-left",
      ar: "tooltip-right",
      Lq: "tooltip-custom",
    },
    Pk = "show",
    Sk = { fr: Pk, Qq: "hide" };
  Ok.prototype.ta = function (a) {
    switch (a) {
      case "click":
        this.bh = "click";
        break;
      case "hover":
        this.bh = "mouseover";
        break;
      default:
        this.bh = "click";
    }
    a = this.Lj.height;
    var b = this.Lj.width,
      c = this.Zj.height,
      d = this.Zj.width,
      g = null;
    switch (this.Jl) {
      case "tooltip-above":
        g = new K(b / 2 - d / 2, -(c + 10));
        break;
      case "tooltip-below":
        g = new K(b / 2 - d / 2, a + 10);
        break;
      case "tooltip-left":
        g = new K(-(d + 10), a / 2 - c / 2);
        break;
      case "tooltip-right":
        g = new K(b + 10, a / 2 - c / 2);
    }
    g && Rd(this.Bd, g);
    this.Bd.appendChild(A.g("SPAN", this.Jl));
    M(this.button, this.bh, this.hj, !1, this);
  };
  Ok.prototype.hj = function () {
    this.Bd.style.display = "block";
    this.dispatchEvent(Pk);
  };
  function Qk(a) {
    a.Bd.style.display = "none";
    a.dispatchEvent("hide");
  }
  function Tk(a) {
    uj.call(this, a);
    this.cd = a.loop || !1;
    this.Ic = 1;
    a = bh(this.$a);
    a = a.split("=");
    a = a[1];
    A.a(a) && (this.Fd.fb(), (this.Rd = !1), this.Pc(), wj(this));
  }
  y(Tk, uj);
  Tk.prototype.ck = function () {
    for (var a = 0, b = this.ke.length; a < b; a++) {
      var c = new Uk(this.ke[a], this, a);
      this.ya[a] = c;
      c.Sg.style.display = "none";
    }
  };
  Tk.prototype.dm = aa;
  function Uk(a, b, c) {
    yj.call(this, a, b, c);
    M(this.fa, "click", this.parent.Pc, !1, this.parent);
  }
  y(Uk, yj);
  Uk.prototype.xf = function (a) {
    !this.cd &&
      a.jn instanceof th &&
      this.parent.w &&
      this.parent.w.enabled &&
      this.index == this.parent.ya.length - 1 &&
      this.parent.Pc();
    Uk.b.xf.call(this);
  };
  Tk.prototype.of = function (a) {
    if (this.ui) {
      var b = A.l("a", "", this.yb.fa)[0].href.split("#")[1];
      a = A.l("a", "", this.ya[a].fa)[0].href.split("#")[1];
      var c;
      b != a && ((b = (c = bh(this.$a)) ? c.replace(b, a) : a), ih(this.$a, b));
    }
  };
  function Vk(a, b, c, d) {
    this.Ln = b || Wk;
    this.Ul = A.a(c);
    this.Hn = A.Uc();
    this.links = A.l("A", a, A.a(d));
  }
  var Wk = 1e3;
  Vk.prototype.ta = function () {
    for (var a = this.links, b = 0, c = a.length; b < c; b++) {
      var d = a[b],
        g = Cg(new X(d.href));
      (g = A.a(g)) && M(d, "click", t(this.scrollTo, this, g));
    }
  };
  Vk.prototype.scrollTo = function (a) {
    var b, c, d;
    this.Ul
      ? ((b = this.Ul), (c = b.scrollLeft), (d = b.scrollTop))
      : ((b = this.Hn), (d = A.Ua()), (c = d.x), (d = d.y));
    new nh(
      b,
      [c, d],
      [a.offsetLeft - 50, a.offsetTop - 50],
      this.Ln,
      Tg
    ).play();
  };
  function Xk(a, b, c) {
    a = A.a(a);
    var d = A.Ua();
    b = b || 50;
    new nh(
      A.Uc(),
      [d.x, d.y],
      [a.offsetLeft - b, a.offsetTop - b],
      c || Wk,
      Tg
    ).play();
  }
  function Yk(a, b, c, d, g) {
    N.call(this);
    this.od = A.a(a);
    this.Eg = b;
    this.Kc = null;
    this.sd = this.Hc = this.kj = 0;
    this.Yb = !1;
    this.gg = [];
    this.Wd = this.Qi = 0;
    this.Ob = c;
    this.Sb = 1;
    this.items = {};
    this.ng = null;
    this.ne = new X(location.href);
    this.nh = d || !1;
    this.On = g || !1;
    this.Md = !1;
    this.K();
  }
  y(Yk, N);
  e = Yk.prototype;
  e.K = function () {
    if (this.On || this.Hf()) {
      this.Kc = A.ia("nav-scroller-viewport-inner", this.od);
      var a = A.B("nav-scroller-item-link", this.od);
      Zk(this, a.length, a[0]);
      this.Kc.style.width = this.kj + "px";
      for (var b = 0, c = a.length; b < c; b++) {
        var d = a[b],
          g = Cg(new X(d.href)) || d.id;
        this.Wd = Math.ceil((b + 1) / this.sd);
        this.items[g] = new $k(g, b, d, this.Wd);
        this.gg.push(g);
      }
      this.yg = al("nav-scroller-previous", "left", "<");
      this.qg = al("nav-scroller-next", "right", ">");
      a = A.g("DIV", null, [this.yg, this.qg]);
      A.append(this.od, a);
      bl(this);
      cl(this, !0);
      Ei && new dl(this.Kc, this);
    } else cl(this, !1);
    M(window, "resize", u(this.Ch, 250), !1, this);
  };
  e.Hf = function () {
    this.eh = A.Da();
    return 533 <= this.eh.width;
  };
  function Zk(a, b, c) {
    c && (a.Hc = O(c).width);
    b && (a.kj = a.Hc * b);
    b = a.Kc.parentNode.offsetWidth / a.Hc;
    a.sd = 0.8 < b % 1 ? Math.ceil(b) : Math.floor(b);
    a.Qi = a.Hc * a.sd;
    a.Xi = a.Hc * a.sd - a.kj;
  }
  function cl(a, b) {
    !a.ng && b
      ? (a.ng = M(a.od, "click", a.Uk, !1, a))
      : a.ng && !b && (ed(a.od, "click", a.Uk, !1, a), (a.ng = null));
  }
  e.Ch = function (a) {
    this.za || (this.za = md(u(this.Ac), a, this));
  };
  e.Ac = function () {
    if (this.Kc) {
      Zk(this);
      var a = 0,
        b;
      for (b in this.items)
        a++, (this.Wd = Math.ceil(a / this.sd)), (this.items[b].Gl = this.Wd);
      bl(this);
      cl(this, !0);
    } else this.K();
    this.dispatchEvent(new L("resize"));
    nd(this.za);
    this.za = null;
  };
  function bl(a) {
    a.Md = a.sd < a.gg.length;
    var b = null,
      c = Cg(new X(location.href));
    c && c in a.items
      ? (b = a.items[c])
      : a.Ob && a.Ob in a.items
      ? (b = a.items[a.Ob])
      : a.nh && (b = a.items[a.gg[0]]);
    b ? fl(a, b) : a.dh(-1);
  }
  e.Uk = function (a) {
    var b = a.target || a.srcElement;
    "INPUT" != b.tagName &&
      (this.Eg && a.preventDefault(),
      "A" != b.tagName && b.parentNode && (b = b.parentNode),
      (a = A.dataset.get(b, "navDir")),
      "left" == a
        ? this.scroll("left")
        : "right" == a
        ? this.scroll("right")
        : this.Eg && b.href && fl(this, Cg(new X(b.href))));
  };
  function al(a, b, c) {
    c = A.g("SPAN", "arrow", c);
    return A.g(
      "A",
      {
        class: a + " nav-scroller-control nav-scroller-disabled",
        "data-nav-dir": b,
        href: "javascript:void(0)",
      },
      c
    );
  }
  function fl(a, b) {
    a.Ob = "string" == typeof b ? a.items[b] : b;
    for (var c in a.items) {
      var d = a.items[c].vm;
      A.c.enable(d, "nav-selected", a.Ob.vm == d);
    }
    a.Sb = a.Ob.Gl;
    c = b;
    "string" == typeof c && (c = a.items[c]);
    d = 0;
    a.Md
      ? ((d = Math.floor(a.sd / 2) * a.Hc - c.index * a.Hc), jl(a, d))
      : kl(a);
    a.Ob.id != a.ne.Ub &&
      (tg(a.ne, a.Ob.id), window.location.replace(a.ne.toString()));
    a.Eg && a.Eg(a.Ob);
  }
  e.scroll = function (a) {
    var b = 0;
    "right" == a
      ? ((b = this.Kc.offsetLeft - this.Qi),
        this.Yb || (this.Sb = this.Sb + 1 > this.Wd ? this.Wd : this.Sb + 1))
      : ((b = this.Kc.offsetLeft + this.Qi),
        this.Yb || (this.Sb = 1 > this.Sb - 1 ? 1 : this.Sb - 1));
    jl(this, b);
  };
  function jl(a, b) {
    a.Md && (0 <= b ? (b = -1) : b <= a.Xi && (b = a.Xi - 1));
    a.dh(b);
    if (!a.Yb) {
      a.Yb = !0;
      var c = new mh(a.Kc, [b, 0], 400, Tg);
      M(
        c,
        "end",
        function () {
          this.Yb = !1;
        },
        !1,
        a
      );
      c.play();
    }
  }
  e.dh = function (a) {
    this.Md
      ? (-1 === a
          ? A.c.gh(this.yg, "nav-scroller-hidden", "nav-scroller-disabled")
          : A.c.remove(this.yg, "nav-scroller-disabled", "nav-scroller-hidden"),
        a == this.Xi - 1
          ? A.c.gh(this.qg, "nav-scroller-hidden", "nav-scroller-disabled")
          : A.c.remove(this.qg, "nav-scroller-disabled", "nav-scroller-hidden"))
      : (A.c.add(this.yg, "nav-scroller-hidden"),
        A.c.add(this.qg, "nav-scroller-hidden"));
  };
  function kl(a) {
    a.Md ||
      ((position =
        (O(a.od).width - 2 * le(a.od).left - a.gg.length * a.Hc) / 2),
      jl(a, position));
  }
  function $k(a, b, c, d) {
    this.id = a;
    this.index = b || 0;
    this.vm = c || null;
    this.Gl = d || 0;
  }
  function dl(a, b) {
    this.ub = b;
    this.element = a;
    this.Oh = new oj(this);
    this.Oh.enable(!1);
    this.Jn = this.Oh.am(this);
    this.Oh.reset();
  }
  y(dl, Di);
  dl.prototype.a = function () {
    return this.element;
  };
  dl.prototype.Ni = function () {
    return !0;
  };
  dl.prototype.ug = aa;
  dl.prototype.ip = aa;
  function ll(a, b) {
    this.Yp = a;
    this.Vp = b;
    this.mc = [];
    this.eh = this.ub = null;
    this.Yl = "";
    this.K();
  }
  ll.prototype.K = function () {
    this.mc = A.B("device-content", A.a(this.Yp));
    this.Hf() && ml(this, 0);
    this.ub = new Yk(this.Vp, t(this.mn, this));
    kl(this.ub);
    M(this.ub, "resize", this.Ac, !1, this);
  };
  ll.prototype.Hf = function () {
    this.eh = A.Da();
    return 533 <= this.eh.width;
  };
  ll.prototype.Ac = function () {
    if (this.Hf())
      if (this.ub)
        try {
          ml(this, this.ub.Ob.index + 1);
        } catch (a) {
          ml(this, 0);
        }
      else this.K();
    else ml(this, -1);
    nd(this.za);
    this.za = null;
  };
  function ml(a, b) {
    for (var c = a.mc.length - 1; 0 <= c; c--) P(a.mc[c], b === c || -1 === b);
  }
  ll.prototype.mn = function (a) {
    var b = a.id,
      c = null;
    if (a.id != this.Yl) {
      for (var d = this.mc.length - 1; 0 <= d; d--)
        this.mc[d].id == b
          ? (c = new uh(this.mc[d], 300))
          : "none" != this.mc[d].style.display && P(this.mc[d], !1);
      this.Yl = a.id;
      c.play();
      if (A.B("note-" + b).length) {
        for (var g = A.B("note-" + b), h = 0, k = "", d = 1; 3 >= d; d++)
          (k = A.ia("point-" + d)) && P(k, !1);
        B(g, function (a, b) {
          h = A.tc(g[b]);
          "*" == h && (h = 3);
          k = A.ia("point-" + h);
          Ld(k, "display", "block");
        });
      }
    }
  };
  function nl(a) {
    this.Gg = "";
    this.se = null;
    this.animationName = a || location.hash || "";
    this.yf = [];
    this.Dd = [];
    this.oc = null;
    this.xi = !1;
    a = document.documentElement.style;
    this.tm = a
      ? "backgroundSize" in a ||
        "MozBackgroundSize" in a ||
        "WebkitBackgroundSize" in a ||
        "KhtmlBackgroundSize" in a
      : void 0;
    M(window, "load", this.K, !1, this);
  }
  w("chrm.ui.DeviceAnimation", nl);
  nl.prototype.K = function () {
    this.oc = new Hd(928, 430);
    this.Dd = A.B("device");
    this.yf = A.B("device-animation");
    ol(this);
    pl(this);
    switch (location.hash) {
      case "#device-samsung":
        ql(this, A.a("home-to-samsung"));
        break;
      case "#device-acer":
        ql(this, A.a("home-to-acer"));
    }
    this.animationName && ql(this, A.a(this.animationName));
  };
  function pl(a) {
    for (var b = A.l("A", "anim-link"), c = 0, d = b.length; c < d; c++)
      M(
        b[c],
        "click",
        function (a) {
          ql(this, a.currentTarget);
        },
        !1,
        a
      );
  }
  function ql(a, b) {
    a.animationName = A.dataset.get(b, "chrmAnimation");
    var c = a.animationName.split("-");
    a.Gg = c[1];
    a.xi = c[2] ? !0 : !1;
    a.xi && (a.animationName = c[0] + "-" + c[1]);
    var d = A.a(a.animationName),
      c = A.a("device-" + c[0]);
    ol(a, a.animationName);
    var g = A.ia("keyframe", c);
    a.oc = ie(g);
    be(d, a.oc);
    a.tm || (!a.tm && 430 == a.oc.height && 928 == a.oc.width)
      ? a.jh(d, c)
      : (ol(a),
        new rh(c, 500).play(),
        new sh(A.a("device-" + a.Gg), 500).play(),
        rl(a, a.Gg));
  }
  nl.prototype.jh = function (a, b) {
    this.se = new sl(
      a,
      this.oc,
      this.xi
        ? new Jd(24 * this.oc.height, 0, 0, 0)
        : new Jd(0, 0, 25 * this.oc.height, 0),
      1500,
      null
    );
    M(this.se, "finish", this.fp, !1, this);
    A.c.add(b, "hide");
    this.se.play();
  };
  nl.prototype.fp = function () {
    rl(this, this.Gg);
    var a = this.se.f.style;
    a.backgroundPosition = "";
    "undefined" != typeof a.backgroundPositionX &&
      ((a.backgroundPositionX = ""), (a.backgroundPositionY = ""));
    this.se.stop(!0);
    ol(this);
  };
  function rl(a, b) {
    for (var c = 0, d = a.Dd.length; c < d; c++) {
      var g = "device-" + b;
      A.c.enable(a.Dd[c], "hide", g != a.Dd[c].id);
      a.Yr || g != a.Dd[c].id || ee(a.Dd[c], "");
    }
  }
  function ol(a, b) {
    for (var c = 0, d = a.yf.length; c < d; c++) P(a.yf[c], b == a.yf[c].id);
  }
  function sl(a, b, c, d, g) {
    ki.call(this, a, b, c, d, g);
  }
  y(sl, ki);
  sl.prototype.dc = function () {
    this.f.style.backgroundPosition =
      "0px " +
      -(
        this.mk[1] -
        Math.floor(this.coords[1] / this.fe.height) * this.fe.height
      ) +
      "px";
    sl.b.dc.call(this);
  };
  function tl(a, b) {
    this.pa = a;
    this.Hm = a.src;
    this.Ui = b || ul;
    this.Zk = this.Hm.replace(/\.\w+$/, this.Ui + "$&");
  }
  var ul = "_2x";
  tl.prototype.Mo = function () {
    return this.Hm.match("//" + document.domain);
  };
  tl.prototype.Di = function (a) {
    this.Mo &&
      (a
        ? ((a = new X(this.Zk)), new li(u(this.um), this, a).start())
        : this.um(!0));
  };
  tl.prototype.um = function (a) {
    a && (this.pa.src = this.Zk);
  };
  function vl(a, b, c, d) {
    this.Dm = new Nk(a, b, c, null, !0);
    this.ib = [];
    this.kf = [];
    this.cn = d;
    this.uri = new X(document.location.href);
    this.K();
  }
  vl.prototype.K = function () {
    this.Dm.ta("hover", !0);
    this.ib = this.Dm.ib;
    this.kf = A.l("SPAN", "screenshot", A.a("ck-apps-screens"));
    for (var a = this.ib.length - 1; 0 <= a; a--)
      M(this.ib[a], Pk, u(this.vl, !0), !1, this),
        M(this.ib[a], "hide", u(this.vl, !1), !1, this);
    this.nh();
  };
  vl.prototype.nh = function () {
    for (
      var a = "ck-apps-tab-" + (this.uri.Ub || this.cn), b = this.ib.length - 1;
      0 <= b;
      b--
    )
      this.ib[b].button.id == a && this.ib[b].hj();
  };
  vl.prototype.vl = function (a, b) {
    var c = b.currentTarget.button;
    A.c.enable(b.currentTarget.button, "ck-apps-active", a);
    for (
      var c = A.dataset.get(c, "ckApp"), d = this.kf.length - 1;
      0 <= d;
      d--
    ) {
      var g = "ck-app-tablet-screen-" + c;
      A.c.enable(
        this.kf[d],
        "ck-apps-active",
        this.kf[d].id == "ck-app-tv-screen-" + c || this.kf[d].id == g ? !0 : !1
      );
    }
  };
  function wl(a, b, c, d) {
    this.fh = d;
    this.na = A.a(a);
    this.qn = A.a(c);
    this.wl = A.a(b);
    this.Bn = A.Vb(this.wl);
    this.K();
  }
  wl.prototype.K = function () {
    B(
      this.Bn,
      function (a) {
        "" !== a.className &&
          M(
            a,
            "click",
            function (a) {
              a = a.target.className;
              A.c.je(this.na, this.fh, a);
              A.c.je(this.wl, this.fh, a);
              this.fh = a;
            },
            !1,
            this
          );
      },
      this
    );
    for (var a = A.l("A", "cast-link", this.na), b = a.length - 1; 0 <= b; b--)
      M(a[b], "click", this.tq, !1, this);
  };
  wl.prototype.tq = function () {
    A.c.toggle(this.qn, "casting");
    A.c.toggle(this.na, "casting");
  };
  (function () {
    var a = A.a("locale-switcher-select");
    a &&
      M(a, "change", function () {
        var a = this[this.selectedIndex].value;
        "" != a && (window.location.href = a);
      });
  })();
  w("chrm.utils.detect.animationEndEvent", function (a) {
    return a.style.animationName || void 0 !== a.style.MozAnimationName
      ? "animationend"
      : void 0 !== a.style.WebkitAnimationName
      ? "webkitAnimationEnd"
      : !1;
  });
  w("chrm.utils.detect.cssAnimation", function () {
    var a = document.documentElement.style;
    if (a)
      return (
        "animation" in a ||
        "WebkitAnimation" in a ||
        ("OAnimation" in a) | ("MozAnimation" in a)
      );
  });
  w("chrm.utils.detect.textFillColor", function () {
    var a = document.documentElement.style;
    if (a) return "WebkitTextFillColor" in a && "WebkitBackgroundClip" in a;
  });
  function xl() {
    var a = document.documentElement.style;
    if (a) return "opacity" in a;
  }
  w("chrm.utils.detect.opacity", xl);
  var yl = Rb;
  w("chrm.utils.Environment.userAgent", yl);
  function zl() {
    var a = /(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/;
    return $b || null !== yl.match(a);
  }
  w("chrm.utils.Environment.isMobile", zl);
  w("chrm.utils.Environment.isLinux", function () {
    return cc;
  });
  function Al() {
    return fc || ec;
  }
  w("chrm.utils.Environment.isIos", Al);
  w("chrm.utils.Environment.isAndroid", function () {
    return dc;
  });
  function Bl() {
    return null !== yl.match("CriOS");
  }
  w("chrm.utils.Environment.isChromeIos", Bl);
  function Cl() {
    return null !== yl.match("CrOS");
  }
  w("chrm.utils.Environment.isChromeOs", Cl);
  w("chrm.utils.Environment.isWindows", function () {
    return bc;
  });
  function Dl() {
    return null !== yl.match(".*NT 5.1.*");
  }
  w("chrm.utils.Environment.isWindowsXP", Dl);
  function El() {
    return null !== yl.match(".*NT 6.0.*");
  }
  w("chrm.utils.Environment.isWindowsVista", El);
  function Fl() {
    var a = yl.match(/Windows NT (\d*\.\d*)/);
    return a ? +a[1] : a;
  }
  w("chrm.utils.Environment.windowsNTVersion", Fl);
  function Gl() {
    return null !== yl.match(".*NT 6.1.*");
  }
  w("chrm.utils.Environment.isWindows7", Gl);
  w("chrm.utils.Environment.isWindows8", function () {
    return null !== yl.match(".*NT 6.2.*");
  });
  function Hl() {
    return null !== yl.match("WOW64") || null !== yl.match("Win64");
  }
  w("chrm.utils.Environment.isWin64", Hl);
  w("chrm.utils.Environment.isOSX", function () {
    return ac;
  });
  function Il() {
    var a = yl.match(/Mac OS X (\d[\.\_\d]+)/),
      b = "";
    a && ((a = (a[1] || a).split("_")), (b = a[0] + "." + a[1]));
    return b.toString();
  }
  w("chrm.utils.Environment.macOSXVersion", Il);
  w("chrm.utils.Environment.getOS", function () {
    var a = "unknown";
    Hl()
      ? (a = "win64")
      : bc
      ? (a = "win")
      : ac
      ? (a = "mac")
      : cc
      ? (a = "linux")
      : Al()
      ? (a = "ios")
      : dc && (a = "android");
    return a;
  });
  w("chrm.utils.Environment.isOSX106To108", function () {
    if (ac) {
      var a = Il().split(".");
      a[1] || (a[1] = 0);
      if (6 <= Number(a[1]) && 8 >= Number(a[1])) return !0;
    }
    return !1;
  });
  w("chrm.utils.Environment.isOSSupported", function () {
    var a = !0;
    if (ac || bc) {
      if (ac)
        var b = "10.9",
          c = Il();
      else if (bc)
        var b = "6.1",
          d = b.split("."),
          c = Fl();
      d = b.split(".");
      b = c.toString().split(".");
      b[1] || (b[1] = 0);
      Number(b[0]) < Number(d[0])
        ? (a = !1)
        : Number(b[0]) == Number(d[0]) &&
          Number(b[1]) < Number(d[1]) &&
          (a = !1);
    }
    return a;
  });
  function Jl() {
    this.If = [];
    this.Gm = new X(location.href);
    this.K();
  }
  var Kl = {
      "browser-beta": "beta",
      "browser-canary": "canary",
      "browser-landing": "stable",
    },
    Ll = { betachannel: "beta", devchannel: "dev" };
  Jl.prototype.K = function () {
    var a,
      b,
      c = this.Gm.ea.get("platform"),
      d = /^[0-9a-zA-Z]+$/;
    c && d.test(c) && (b = c);
    ac
      ? (a = "mac")
      : bc
      ? (a = 6 < Fl() && Hl() ? "win64" : "win")
      : cc
      ? (a = "linux")
      : -1 < Cl() && (a = "cros");
    this.Vi = a;
    this.Vf = b;
    Ml(this);
    a = this.Vf || this.Vi;
    this.Vi && this.If.push(this.Vi);
    this.Vf && this.If.push("force-" + this.Vf);
    A.h.addAll(document.documentElement, this.If);
    A.Jg(document.documentElement, { id: a });
  };
  var Nl = {
    Iq: function () {
      var a = "stable",
        b = this.Gm.ea.get("extra"),
        c = document.getElementById("main");
      null !== Ll && b in Ll
        ? (a = Ll[b])
        : c &&
          ((b = c.getAttribute("class")),
          null !== Kl && b in Kl && (a = Kl[b]));
      return "build-" + a || !1;
    },
    Xq: function () {
      return zl() ? "mobile" : !1;
    },
    Eq: function () {
      return dc ? "android" : !1;
    },
    Tq: function () {
      return Al() ? "ios" : !1;
    },
    Uq: function () {
      return fc ? "ipad" : !1;
    },
    Vq: function () {
      return ec ? "iphone" : !1;
    },
    Jq: function () {
      return Tf ? "chrome" : !1;
    },
    Kq: function () {
      return Bl() ? "chrome" : !1;
    },
    $q: function () {
      return Xb ? "opera" : !1;
    },
    cr: function () {
      return Uf ? "safari" : !1;
    },
    Yq: function () {
      return Pf ? "mozilla" : !1;
    },
    Sq: function () {
      var a;
      D && (a = 0 <= Da(ji, 8) ? "ie" : "ie7");
      return a || !1;
    },
    gr: function () {
      return bc ? "win" : !1;
    },
    ir: function () {
      return 10 <= Fl() ? "win10" : !1;
    },
    mr: function () {
      return 6.2 <= Fl() && 10 > Fl() ? "win8" : !1;
    },
    lr: function () {
      return Gl() ? "win7" : !1;
    },
    nr: function () {
      return El() ? "vista" : !1;
    },
    or: function () {
      return Dl() ? "winXP" : !1;
    },
    jr: function () {
      return Hl() ? "win64" : !1;
    },
    kr: function () {
      var a = !1;
      6 < Fl() && Hl() ? (a = !0) : "win64" === this.Vf && (a = !0);
      return a ? "win64-capable" : "win64-incapable";
    },
  };
  function Ml(a) {
    Wa(
      Nl,
      function (a) {
        a = a.bind(this)();
        q(a) && this.If.push(a);
      },
      a
    );
  }
  function Ol(a) {
    this.Lc = A.Da();
    this.Nb = [];
    this.Co = A.a(Pl);
    this.on = A.a(Ql);
    this.bc = A.a(Rl);
    this.Uf = A.a(Sl);
    this.Cj = A.a(Tl);
    this.ap = O(this.Co).height;
    this.Wl = this.Ba = 0;
    this.ge = new rj();
    this.Ii = this.ae = this.za = null;
    this.Rp = a || 1e3;
    this.ua = null;
    this.active = !1;
    this.K();
  }
  var Pl = "header",
    Ql = "grid",
    Rl = "main",
    Sl = "footer",
    Tl = "feature-section-keyframes";
  e = Ol.prototype;
  e.K = function () {
    this.active || M(window, "resize", u(this.xn, 250), !1, this);
    if (xl() && 800 <= this.Lc.width && 670 <= this.Lc.height) {
      this.active = !0;
      A.c.add(document.body, "scroll-active");
      this.ge.Vl = 1.25;
      var a = this.ge,
        b = A.l("a", "gweb-smoothscroll-control", null);
      if (b)
        for (var c = 0, d; (d = b[c]); c++) {
          var g;
          g = Dg(d.href);
          var h = g.lb + g.cb,
            k = Dg(window.location.hostname + window.location.pathname);
          if (h == k.lb + k.cb && g.Ub) {
            g = d.href.match(/(#)(.*)/)[2];
            var l = A.a(g);
          }
          l && a.T.j(d, "click", a.io);
        }
      this.Yi = A.B("feature-content", this.bc);
      this.Wl = O(this.Yi[1]).height;
      this.Nb = [];
      a = 0;
      for (b = this.Yi.length; a < b; a++)
        (c = new Ul(this.Yi[a])), this.Nb.push(c);
      this.Uf.style.marginTop = this.Lc.height + 50 + "px";
      this.fd = A.B("scroll-control");
      for (a = this.fd.length - 1; -1 < a; a--)
        M(this.fd[a], "click", this.hi, !1, this);
      this.Tl = A.B("nav-arrow");
      for (a = this.Tl.length - 1; -1 < a; a--)
        M(this.Tl[a], "click", this.hi, !1, this);
      this.Ii = new oi(this.on);
      M(this.Ii, "mousewheel", this.dk, !1, this);
      this.ua = new wd(document);
      M(this.ua, "key", this.Wk, !1, this);
      Vl(this, this.Ba);
      this.Ac();
      M(window, "unload", this.kk, !1, this);
    }
  };
  e.kk = function () {
    A.c.remove(document.body, "scroll-active");
    ed(this.Ii, "mousewheel", this.dk, !1, this);
    ed(this.ua, "key", this.Wk, !1, this);
    if (this.fd)
      for (var a = this.fd.length - 1; -1 < a; a--)
        ed(this.fd[a], "click", this.hi, !1, this);
    A.c.set(this.Cj, "");
    this.bc.style.paddingTop = "";
    this.bc.style.marginBottom = "";
    this.Uf.style.marginTop = "";
    this.Nb = [];
  };
  e.hi = function (a) {
    a.preventDefault();
    el = a.currentTarget;
    a = parseInt(A.dataset.get(el, "featuresNavScrollPos"), 0);
    -1 < a && a != this.Ba && Vl(this, a, this.bc);
  };
  e.Wk = function (a) {
    var b = null;
    switch (a.keyCode) {
      case 38:
      case 33:
      case 37:
        b = Wl(this, !1);
        break;
      case 40:
      case 34:
      case 32:
      case 39:
        b = Wl(this, !0);
    }
    Xl(this, b, a);
  };
  e.ro = function (a) {
    Xl(this, Wl(this, 0 < a.deltaY ? !0 : !1), a);
  };
  function Xl(a, b, c) {
    null != b && b !== a.Ba && b < a.Nb.length
      ? (c.preventDefault(), Vl(a, b, a.bc))
      : (0 === a.Ba
          ? ((b = new K(0, 0)), a.ge.scrollTo(b, b))
          : a.Ba == a.Nb.length - 1 && (sj(a.ge, a.Uf), (a.Ba = a.Nb.length)),
        a.th(a.ae));
  }
  function Wl(a, b) {
    var c = null;
    return (c = b
      ? a.Ba !== a.Nb.length - 1
        ? a.Ba + 1
        : a.Ba
      : 0 !== a.Ba
      ? a.Ba - 1
      : a.Ba);
  }
  e.th = function (a) {
    a &&
      (nd(a),
      a === this.ae ? (this.ae = null) : a === this.za && (this.za = null));
  };
  function Vl(a, b, c) {
    var d = b < a.Ba;
    c && A.Ua().y != Td(c).y && sj(a.ge, c);
    A.c.enable(a.bc, "features-scroll-up", d);
    for (c = a.Nb.length - 1; -1 < c; c--)
      (d = c === b),
        A.c.enable(a.Nb[c].pa, "feature-content-active", d),
        d && ((a.Ba = c), A.c.set(a.Cj, a.Nb[c].xq));
    a.dh();
    md(u(a.th, a.ae), a.Rp, a);
  }
  e.dh = function () {
    for (var a = this.fd.length - 1; -1 < a; a--)
      A.c.enable(this.fd[a], "section-nav-active", a === this.Ba);
  };
  e.Ac = function () {
    this.Lc = A.Da();
    if (xl() && 800 <= this.Lc.width && 670 <= this.Lc.height)
      if (this.active) {
        var a = Math.ceil((this.Lc.height - (this.Wl + this.ap)) / 2.5);
        0 < a &&
          ((this.bc.style.paddingTop = a + "px"),
          (this.bc.style.marginBottom = "-" + a + "px"),
          (this.Uf.style.marginTop = this.Lc.height + 50 + "px"),
          sj(this.ge, this.bc));
      } else this.K();
    else (this.active = !1), this.kk();
    this.th(this.za);
  };
  e.xn = function (a) {
    this.za || (this.za = md(u(this.Ac), a, this));
  };
  e.dk = function (a) {
    a.preventDefault();
    this.ae || (this.ae = md(u(this.ro, a), 1, this));
  };
  function Ul(a) {
    this.pa = a;
    this.id = a.id;
    this.xq = A.dataset.get(a, "featureTriggerClass");
  }
  function Yl(a, b) {
    this.Kn = b || "buynow-button-dropdown";
    this.Oj = a;
    this.Ef = [];
    this.sk = (this.jj = Ei) ? Gi : "mouseover";
    this.K();
  }
  Yl.prototype.K = function () {
    this.Ef = A.l("DIV", this.Kn);
    for (
      var a = this.jj ? this.sk : [this.sk, "click"], b = this.Ef.length - 1;
      -1 < b;
      b--
    ) {
      var c = A.Eb(this.Ef[b]);
      M(c, a, this.mj, !1, this);
      if (!this.Xr) {
        var d = A.Uh(this.Ef[b]);
        M(c, "mouseout", this.mj, !1, this);
        M(d, "mouseout", this.mj, !1, this);
        M(d, "mouseover", this.Nj, !1, this);
      }
    }
  };
  Yl.prototype.mj = function (a) {
    a.preventDefault();
    var b = A.Wh(a.currentTarget);
    A.c.has(b, "buynow-options-hover");
    this.jj
      ? A.c.toggle(b, "buynow-options-hover")
      : "mouseout" == a.type
      ? (this.Ug ||
          (this.Ug = md(u(A.c.remove, b, "buynow-options-hover"), 500, this)),
        this.Oj && this.Oj.Pc())
      : "mouseout" != a.type && (this.Nj(), A.c.add(b, "buynow-options-hover"));
  };
  Yl.prototype.Nj = function () {
    this.Ug && (nd(this.Ug), (this.Ug = null));
  };
  function Zl(a, b, c, d) {
    this.na = A.a(a);
    this.nn = A.a(b);
    this.lh = A.Vb(this.nn);
    this.zh = d || "";
    this.yd = new kd(c);
    this.ye = 0;
    this.zf = [];
    B(
      this.lh,
      function (a) {
        this.zf.push(a.classList[0]);
      },
      this
    );
    d && A.c.add(this.na, d);
    window.location.hash &&
      B(
        this.lh,
        function (a) {
          A.c.has(a, window.location.hash.substr(1)) &&
            $l(this, this.zh, a.className, !0);
        },
        this
      );
    M(this.yd, ld, t(this.wn, this, this.ye));
    B(
      this.lh,
      function (a) {
        M(
          a,
          "click",
          function () {
            $l(this, this.zh, a.className, !0);
          },
          !1,
          this
        );
      },
      this
    );
    this.yd.start();
  }
  function $l(a, b, c, d) {
    A.c.remove(a.na, b);
    A.c.add(a.na, c);
    d && a.yd && a.yd.stop();
    a.zh = c;
  }
  Zl.prototype.wn = function () {
    var a = this.zf[this.ye];
    this.yd && this.ye == this.zf.length - 1 ? this.yd.stop() : this.ye++;
    $l(this, a, this.zf[this.ye]);
  };
  w("chrm.util.getQueryParamsAsObject", function () {
    var a = document.location.search.slice(1),
      b = a.split("&"),
      c = {},
      d;
    "" != a &&
      b.forEach(function (a) {
        d = a.split("=");
        c[d[0]] = d[1];
      });
    return c;
  });
  function am(a) {
    this.Ie = { Xp: bm, Hp: cm, pn: dm, locale: em };
    a && ha(a) && eb(this.Ie, a);
    a = document.querySelectorAll(this.Ie.Xp);
    this.Sn = new we(this);
    if (m(window.userfeedback.api.startFeedback))
      for (var b = 0; b < a.length; b++) this.Sn.j(a[b], "click", this.uk);
  }
  w("chrm.utils.Feedback", am);
  var bm = "a.feedback, a.feedback-link",
    cm = "237",
    dm = "",
    em = "en_us";
  am.prototype.uk = function (a) {
    var b = !0;
    try {
      window.userfeedback.api.startFeedback({
        productId: this.Ie.Hp,
        bucket: this.Ie.pn,
        locale: this.Ie.locale,
      }),
        m(a) && (a.preventDefault(), (b = !1));
    } catch (c) {}
    return b;
  };
  am.prototype.feedbackHandler = am.prototype.uk;
  function fm(a) {
    this.Lp = a || {};
    this.Bh = {};
    this.Cn = this.Cd = null;
    this.gf = [];
    this.nl = [];
    this.hb = "";
    this.be = gm;
    this.fk = {};
  }
  var gm = "any";
  e = fm.prototype;
  e.ri = function () {
    if ((this.Cd = A.a("countrycode")))
      A.l("OPTION", null, this.Cd),
        (this.hb = A.forms.I(this.Cd)),
        M(this.Cd, "change", this.qj, !1, this);
    this.gf = A.l("DIV", "retailer-list", A.a("retailer-list"));
    this.nl = A.B("locale-content");
  };
  e.Ko = function () {
    var a = A.a("devicetype");
    this.Ed = A.l("OPTION", null, a);
    M(a, "change", this.tf, !1, this);
    this.nd = A.l("LI", "retailer-link", A.a("retailer-list"));
    for (var b = this.nd.length - 1; -1 < b; b--) {
      var c = this.nd[b],
        d = A.dataset.get(c, "gPartner");
      this.fk[d] = A.dataset.get(c, "deviceAvailability").split(" ");
    }
    this.An = A.B("device-info");
    hm(this, !1);
    if ((b = new X(window.location.href).ea.get("device")))
      for (c = this.Ed.length - 1; -1 < c; c--)
        this.Ed[c].value == b &&
          ((this.Ed[c].selected = "selected"), this.tf(new L("change", a)));
  };
  e.qj = function () {
    if ((this.hb = A.forms.I(this.Cd)))
      if ((this.oj(), im(this), this.Cn)) {
        for (var a = this.sr[this.hb], b = this.Ed.length - 1; -1 < b; b--) {
          var c = this.Ed[b].value;
          c != gm && A.forms.$i(this.Ed[b], !Pa(a, c));
        }
        this.tf();
      }
  };
  e.oj = function () {
    if (this.gf)
      for (var a = 0, b = this.gf.length; a < b; a++)
        A.c.enable(this.gf[a], "hide", this.gf[a].id != "retailers-" + this.hb);
    hm(this, !0);
  };
  e.tf = function (a) {
    if ((this.be = A.forms.I(a.currentTarget)))
      for (this.Bh = this.Lp[this.be], a = this.nd.length - 1; -1 < a; a--) {
        var b;
        if (this.be == gm) b = !1;
        else {
          b = this.be;
          var c = A.dataset.get(this.nd[a], "gPartner");
          b = !Pa(this.fk[c], b);
        }
        c = b;
        ee(this.nd[a], c ? 0.3 : 1);
        A.c.enable(this.nd[a], "retailer-disabled", c);
        b = this.nd[a];
        var d = "javascript:void(0)";
        if (!c) {
          var g = A.dataset.get(b, "gPartner"),
            h;
          a: {
            for (h = this.Bh.length - 1; -1 < h; h--)
              if (((d = this.Bh[h]), d.id == g)) {
                h = d;
                break a;
              }
            h = void 0;
          }
          d = h.link;
          g = h.cat;
          h = h.type;
        }
        if (d || c)
          (b = A.Eb(b)),
            (b.href = d),
            g
              ? (A.dataset.set(b, "floodlightCat", g),
                h && A.dataset.set(b, "floodlightType", h))
              : (A.dataset.remove(b, "floodlightCat"),
                A.dataset.remove(b, "floodlightType"));
      }
    hm(this, !1);
  };
  function hm(a, b) {
    var c = b ? a.nl : a.An,
      d = b ? "locale-content-" + a.hb : "device-info-" + a.be;
    if (c)
      for (var g = c.length - 1; -1 < g; g--)
        A.c.enable(c[g], "hide", !A.c.has(c[g], d));
  }
  function jm() {
    this.Ce = null;
    this.we = [];
    this.Pl = null;
    this.Bc = [];
    this.Ze = [];
    this.Fh = this.hb = "";
  }
  e = jm.prototype;
  e.Jo = function () {
    this.we = A.B("buynow");
    for (var a = 0, b = this.we.length; a < b; a++)
      Ei
        ? M(this.we[a], Gi, this.mq, !1, this)
        : (M(this.we[a], "mouseover", u(this.im, !0), !1, this),
          M(this.we[a], "mouseout", u(this.im, !1), !1, this));
  };
  e.im = function (a, b) {
    if (!b.relatedTarget || !A.contains(b.currentTarget, b.relatedTarget)) {
      var c = A.ia("locale-retailers", b.currentTarget),
        d = ie(c);
      c.style.height = Sd(a ? d.height : "", !0);
    }
  };
  e.mq = function (a) {
    a = A.ia("locale-retailers", a.currentTarget);
    displayAttr = a.style.display;
    a.style.display = displayAttr && "none" != displayAttr ? "none" : "block";
  };
  e.ri = function (a) {
    this.Fh = a || "";
    this.Ce = A.a("countrycode");
    this.Pl = A.a("retailer-list");
    this.Bc = A.l("div", "retailer-list", this.Pl);
    this.Ze = A.B("locale-content");
    this.Ce &&
      ((this.hb = A.forms.I(this.Ce)), M(this.Ce, "change", this.qj, !1, this));
    this.Fh && this.tf();
  };
  e.qj = function () {
    if ((this.hb = A.forms.I(this.Ce))) this.oj(), im(this);
  };
  e.oj = function () {
    if (this.Bc)
      for (var a = 0, b = this.Bc.length; a < b; a++)
        A.c.enable(this.Bc[a], "hide", this.Bc[a].id != "retailers-" + this.hb);
  };
  e.tf = function () {
    for (var a = 0, b = this.Bc.length; a < b; a++) {
      for (
        var c = A.l("li", null, this.Bc[a]), d = 0, g = c.length - 1;
        0 <= g;
        g--
      ) {
        var h = !A.c.has(c[g], this.Fh),
          d = h ? d + 1 : d;
        A.c.enable(c[g], "hide", h);
      }
      g = this.Bc[a].id;
      A.forms.$i(A.a("option-" + g.substr(g.indexOf("-") + 1)), d == c.length);
    }
  };
  function im(a) {
    if (a.Ze)
      for (var b = 0, c = a.Ze.length; b < c; b++)
        A.c.enable(
          a.Ze[b],
          "hide",
          !A.c.has(a.Ze[b], "locale-content-" + a.hb)
        );
  }
  function km(a) {
    this.hf = A.B(a);
    this.yq = window.location.hash.substring(1);
    for (var b = this.hf.length - 1; 0 <= b; b--) {
      this.hf[b].id == this.yq && this.Am(this.hf[b]);
      for (var c = A.B(a + "-link", this.hf[b]), d = c.length - 1; 0 <= d; d--)
        M(c[d], "click", t(this.Am, this, this.hf[b]));
    }
  }
  km.prototype.Am = function (a) {
    for (var b = A.B("expanded"), c = b.length - 1; 0 <= c; c--)
      a !== b[c] && A.c.je(b[c], "expanded", "collapsed");
    A.c.has(a, "collapsed")
      ? A.c.je(a, "collapsed", "expanded")
      : A.c.je(a, "expanded", "collapsed");
    window.location.hash = a.id;
  };
  function lm(a, b, c) {
    this.zm = A.a(a);
    this.na = A.a(b);
    this.Aq = A.a(c);
    this.Fg = "";
    this.rk = new N();
    this.vh = 0;
    this.K();
  }
  e = lm.prototype;
  e.K = function () {
    M(this.zm, "click", this.nj, !1, this);
    M(this.rk, "videoclick", this.Pj, !1, this);
    M(this.na, "click", u(this.Ne), !1, this);
    this.vh = O(this.na).width;
    var a = Cg(new X(window.location));
    a ? this.ml(a) : md(this.nj, 3e3, this);
  };
  e.Ne = function (a) {
    for (a = a.target; a.tagName && "LI" != a.tagName.toUpperCase(); )
      a = a.parentNode;
    (this.Fg = A.dataset.get(a, "videoid")) &&
      this.rk.dispatchEvent("videoclick");
  };
  e.nj = function () {
    var a = !A.c.toggle(this.zm, "on"),
      b = A.Eb(this.na),
      b = a
        ? new lh(b, [0, 0], [this.vh, 0], 200, Sg.Mn)
        : new lh(b, [this.vh, 0], [0, 0], 200, Sg.Mn);
    a
      ? M(
          b,
          "end",
          function () {
            P(this.na, !1);
          },
          !1,
          this
        )
      : P(this.na, !0);
    b.play();
  };
  e.Pj = function () {
    this.Aq.src =
      "//www.youtube.com/embed/" +
      this.Fg +
      "?wmode=transparent&showinfo=0&autoplay=1&autohide=1&rel=0&modestbranding=1";
    this.nj();
  };
  e.ml = function (a) {
    if ((a = A.a("clip-" + a)))
      (this.Fg = A.dataset.get(a, "videoid")), this.Pj();
  };
  function mm() {
    this.le = nm();
    for (var a in this.le)
      for (var b = this.le[a], c = 0, d = b.length; c < d; c++)
        M(b[c].tab, "click", this.gb(b, c), !1, this);
    om(this);
  }
  w("gweb.ui.GTabs", mm);
  function nm() {
    var a = A.l("div", "g-tab-contents"),
      b = A.l("div", "g-tabs"),
      c = b.length,
      d = {};
    if (a.length != c) return null;
    for (var g = 0; g < c; g++) {
      d["set-" + g] = [];
      var h = b[g],
        k = A.l("div", "g-tab-content", a[g]),
        h = A.l("li", "g-tab", h),
        l = h.length;
      if (k.length != l) return null;
      for (var p = 0; p < l; p++) {
        var r = {};
        r.tab = h[p];
        r.content = k[p];
        d["set-" + g].push(r);
      }
    }
    return d;
  }
  function pm(a, b) {
    var c = a.getElementsByTagName("a");
    return (c ? c[0].hash : null) || "#tab" + b;
  }
  mm.prototype.gb = function (a, b) {
    return function (c) {
      c = c || null;
      this.qf(a, b);
      this.nf();
      c && c.preventDefault();
    };
  };
  mm.prototype.nf = function () {
    for (var a = A.l("li", "g-tab"), b = "", c = 0, d; (d = a[c]); c++)
      A.c.has(d, "g-tab-selected") && (b += pm(d, c));
    return (window.location.hash = b);
  };
  mm.prototype.qf = function (a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      A.c.remove(a[c].tab, "g-tab-selected"),
        A.c.add(a[c].content, "g-tab-content-hidden");
    A.c.add(a[b].tab, "g-tab-selected");
    A.c.remove(a[b].content, "g-tab-content-hidden");
  };
  function om(a) {
    var b = unescape(window.location.hash).replace(/#/gi, "|#").split("|"),
      c = 0,
      d;
    for (d in a.le) {
      for (var g = !1, h = a.le[d], k = 0, l = h.length; k < l; k++) {
        var p = pm(h[k].tab, c++);
        Pa(b, p) && ((g = !0), a.qf(h, k));
      }
      g || a.qf(h, 0);
    }
  }
  function qm() {
    mm.call(this);
    this.lj = [];
    this.lj = A.l("a", "g-tab-link");
    for (var a = this.lj.length - 1; 0 <= a; a--)
      M(this.lj[a], "click", this.jm, !1, this);
  }
  y(qm, mm);
  qm.prototype.jm = function (a) {
    A.Da().width > Ak &&
      (a.preventDefault(),
      a.target &&
        ((a = Cg(new X(a.target.href))),
        (window.location.hash = a),
        om(this),
        Xk(a + "_content")));
  };
  function rm() {
    this.qk = new we(this);
    this.ta();
  }
  w("dropDown.Twisty", rm);
  rm.prototype.ta = function () {
    A.h.add(document.documentElement, "twisty-js");
    for (
      var a = A.B("toggle-panel"),
        b = A.B("toggle-btn"),
        c = A.ia("twisty-js"),
        d = 0;
      d < b.length;
      d++
    ) {
      var g = t(this.jh, this, a[d], b[d]),
        h = t(this.close, this, a[d], c);
      this.qk.j(c, "click", h);
      this.qk.j(b[d], "click", g);
    }
  };
  rm.prototype.jh = function (a, b, c) {
    b = a.style[Fa("display")];
    "block" == ("undefined" !== typeof b ? b : a.style[Md(a, "display")] || "")
      ? Ld(a, "display", "none")
      : Ld(a, "display", "block");
    c.preventDefault();
  };
  rm.prototype.close = function (a, b, c) {
    A.h.contains(c.target, "toggle-btn") || Ld(a, "display", "none");
  };
  new Jl();
  w("dropDown.Twisty", rm);
  new rm();
  !window.location.hash &&
    window.addEventListener &&
    window.addEventListener(
      "load",
      function () {
        window.scrollY || window.scrollTo(0, 1);
      },
      !1
    );
  w("gweb.ui.TabSet.Decorator", function (a) {
    a = a || {};
    this.qq = A.B(cb(a, "cssNamespace", ak));
    this.le = [];
    for (var b = 0, c; (c = this.qq[b]); b++) {
      var d = new Zj(a);
      this.le.push(d);
      d.D(c);
    }
  });
  w("chrm.ui.Tabs", qm);
  qm.prototype.showTabByLink = qm.prototype.jm;
  w("chrm.ui.MenuBar", yk);
  yk.prototype.decorate = yk.prototype.D;
  w("chrm.ui.FatNavMenu", Dk);
  w("chrm.ui.Logo", Kk);
  w("chrm.ui.HiDpiImageLoader", function (a, b, c, d) {
    this.Xo = d || 768;
    this.Fp = b || 1.5;
    this.Ui = c;
    this.Op = a || !1;
    this.fl = $b;
    if (
      (window.devicePixelRatio ||
        (screen.deviceXDPI && screen.deviceXDPI / 96) ||
        1) >= this.Fp &&
      (!this.fl ||
        (this.fl &&
          (wi() || screen.width > screen.height
            ? screen.width
            : window.innerWidth > window.innerHeight
            ? screen.height > screen.width
              ? screen.height
              : screen.width
            : screen.height < screen.width
            ? screen.height
            : screen.width) >= this.Xo &&
          !/^([23]g|3|4)$/.test((navigator.connection || { type: 0 }).type)))
    ) {
      a = A.l("IMG", "hi-dpi");
      for (b = 0; (c = a[b]); b++) new tl(c, this.Ui).Di(this.Op);
      A.c.add(document.documentElement, "hidpi-ready");
    }
  });
  w("chrm.ui.AppGallery", Zl);
  w("chrm.ui.Tooltips", Nk);
  Nk.prototype.init = Nk.prototype.ta;
  Nk.prototype.getTooltips = Nk.prototype.ao;
  Nk.prototype.showTooltipByIndex = Nk.prototype.nq;
  Sk.SHOW = Pk;
  w("chrm.ui.Zippies", wk);
  wk.prototype.init = wk.prototype.ta;
  wk.EXPAND_EVENT = "expand";
  w("chrm.ui.ZippiesEvent", xk);
  xk.prototype.getZippy = xk.prototype.eo;
  w("goog.ui.Zippy", ei);
  ei.prototype.getContentElement = ei.prototype.H;
  w("chrm.ui.SelectNav", Jk);
  w("chrm.ui.TimedCarousel", Tk);
  Tk.prototype.doTimerStart = Tk.prototype.lk;
  Tk.prototype.doTimerStop = Tk.prototype.Pc;
  w("chrm.ui.SmoothScroll", Vk);
  Vk.prototype.init = Vk.prototype.ta;
  w("chrm.ui.SmoothScroll.scrollWindowTo", Xk);
  w("goog.events.listen", M);
  Z.prototype.init = Z.prototype.ta;
  Z.prototype.setAnimate = Z.prototype.$l;
  Z.prototype.setItemCount = Z.prototype.bm;
  Z.prototype.showContentByIndex = Z.prototype.gj;
  Z.prototype.setScaleImages = Z.prototype.em;
  Z.prototype.disableNav = Z.prototype.hk;
  Z.prototype.disableOnMobile = Z.prototype.ik;
  w("chrm.ui.HorizontalScroller", Yk);
  w("chrm.ui.DeviceSelector", ll);
  w("chrm.widget.BuyNow", jm);
  jm.prototype.initBuyNowButton = jm.prototype.Jo;
  jm.prototype.initCountrySelect = jm.prototype.ri;
  w("chrm.widget.RetailerSelector", fm);
  fm.prototype.initCountrySelect = fm.prototype.ri;
  fm.prototype.initDeviceSelect = fm.prototype.Ko;
  w("chrm.widget.Features", km);
  w("chrm.widget.Playlist", lm);
  lm.prototype.loadVideoByName = lm.prototype.ml;
  w("chrm.ui.DeviceAnimation", nl);
  w("chrm.ui.BuyNowDropDown", Yl);
  w("chrm.ui.FeaturesScroller", Ol);
  w("chrm.ui.Eureka.AppNav", vl);
  w("chrm.ui.Eureka.Cast", wl);
  w("gweb.analytics.DoubleTrack", mk);
  mk.prototype.track = mk.prototype.track;
  mk.prototype.trackClass = mk.prototype.$g;
  mk.prototype.trackElement = mk.prototype.ah;
  w("chrm.analytics.FloodlightTracker", qk);
  w("chrm.analytics.FloodlightTracker.trackSource", function () {
    var a = new X(window.location.href.replace("#", "?")),
      a = a.ea.get("utm_source") || a.ea.get("cmp") || null,
      b;
    a: {
      if (a)
        for (b in tk) {
          if (-1 < a.indexOf(tk[b].id)) {
            b = tk[b].xa;
            break a;
          }
        }
      else if (0 == document.referrer.indexOf("www.google")) {
        b = "crosA";
        break a;
      }
      b = null;
    }
    window._gaq && b && window._gaq.push(["_setCustomVar", 1, "source", b, 1]);
  });
  qk.prototype.trackClass = qk.prototype.$g;
  qk.prototype.trackElement = qk.prototype.ah;
  qk.prototype.track = qk.prototype.track;
  w("goog.dom.getElementsByClass", A.B);
  w("goog.dom.classes.has", A.c.has);
  w("goog.dom.classes.add", A.c.add);
  w("goog.userAgent.MOBILE", $b);
})();
