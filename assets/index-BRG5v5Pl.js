(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ns = { exports: {} },
  rl = {},
  rs = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xn = Symbol.for("react.element"),
  Nc = Symbol.for("react.portal"),
  _c = Symbol.for("react.fragment"),
  Pc = Symbol.for("react.strict_mode"),
  jc = Symbol.for("react.profiler"),
  zc = Symbol.for("react.provider"),
  Tc = Symbol.for("react.context"),
  Lc = Symbol.for("react.forward_ref"),
  Oc = Symbol.for("react.suspense"),
  Mc = Symbol.for("react.memo"),
  Rc = Symbol.for("react.lazy"),
  Do = Symbol.iterator;
function Ac(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Do && e[Do]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ls = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  is = Object.assign,
  os = {};
function on(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = os),
    (this.updater = n || ls);
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function us() {}
us.prototype = on.prototype;
function Hi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = os),
    (this.updater = n || ls);
}
var Ui = (Hi.prototype = new us());
Ui.constructor = Hi;
is(Ui, on.prototype);
Ui.isPureReactComponent = !0;
var Io = Array.isArray,
  ss = Object.prototype.hasOwnProperty,
  Bi = { current: null },
  as = { key: !0, ref: !0, __self: !0, __source: !0 };
function cs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ss.call(t, r) && !as.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Xn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Bi.current,
  };
}
function Fc(e, t) {
  return {
    $$typeof: Xn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xn;
}
function Dc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vo = /\/+/g;
function xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Dc("" + e.key)
    : t.toString(36);
}
function kr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xn:
          case Nc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + xl(o, 0) : r),
      Io(l)
        ? ((n = ""),
          e != null && (n = e.replace(Vo, "$&/") + "/"),
          kr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Wi(l) &&
            (l = Fc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Vo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Io(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + xl(i, u);
      o += kr(i, t, n, s, l);
    }
  else if (((s = Ac(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + xl(i, u++)), (o += kr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Ic(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  wr = { transition: null },
  Vc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Bi,
  };
function fs() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
  map: nr,
  forEach: function (e, t, n) {
    nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = on;
L.Fragment = _c;
L.Profiler = jc;
L.PureComponent = Hi;
L.StrictMode = Pc;
L.Suspense = Oc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vc;
L.act = fs;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = is({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Bi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ss.call(t, s) &&
        !as.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Xn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Tc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: zc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = cs;
L.createFactory = function (e) {
  var t = cs.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: Lc, render: e };
};
L.isValidElement = Wi;
L.lazy = function (e) {
  return { $$typeof: Rc, _payload: { _status: -1, _result: e }, _init: Ic };
};
L.memo = function (e, t) {
  return { $$typeof: Mc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = t;
  }
};
L.unstable_act = fs;
L.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
L.useContext = function (e) {
  return se.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
L.useId = function () {
  return se.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return se.current.useRef(e);
};
L.useState = function (e) {
  return se.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return se.current.useTransition();
};
L.version = "18.3.1";
rs.exports = L;
var Ne = rs.exports;
const j = Cc(Ne);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c = Ne,
  Hc = Symbol.for("react.element"),
  Uc = Symbol.for("react.fragment"),
  Bc = Object.prototype.hasOwnProperty,
  Wc = $c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ds(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Bc.call(t, r) && !Qc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Hc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Wc.current,
  };
}
rl.Fragment = Uc;
rl.jsx = ds;
rl.jsxs = ds;
ns.exports = rl;
var v = ns.exports,
  ps = { exports: {} },
  ke = {},
  ms = { exports: {} },
  hs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, z) {
    var T = C.length;
    C.push(z);
    e: for (; 0 < T; ) {
      var Q = (T - 1) >>> 1,
        G = C[Q];
      if (0 < l(G, z)) (C[Q] = z), (C[T] = G), (T = Q);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0],
      T = C.pop();
    if (T !== z) {
      C[0] = T;
      e: for (var Q = 0, G = C.length, er = G >>> 1; Q < er; ) {
        var yt = 2 * (Q + 1) - 1,
          Sl = C[yt],
          gt = yt + 1,
          tr = C[gt];
        if (0 > l(Sl, T))
          gt < G && 0 > l(tr, Sl)
            ? ((C[Q] = tr), (C[gt] = T), (Q = gt))
            : ((C[Q] = Sl), (C[yt] = T), (Q = yt));
        else if (gt < G && 0 > l(tr, T)) (C[Q] = tr), (C[gt] = T), (Q = gt);
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var T = C.sortIndex - z.sortIndex;
    return T !== 0 ? T : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    k = !1,
    w = !1,
    S = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= C)
        r(c), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(c);
    }
  }
  function y(C) {
    if (((S = !1), d(C), !w))
      if (n(s) !== null) (w = !0), kl(E);
      else {
        var z = n(c);
        z !== null && wl(y, z.startTime - C);
      }
  }
  function E(C, z) {
    (w = !1), S && ((S = !1), f(P), (P = -1)), (k = !0);
    var T = p;
    try {
      for (
        d(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (C && !je()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var G = Q(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof G == "function" ? (m.callback = G) : m === n(s) && r(s),
            d(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var er = !0;
      else {
        var yt = n(c);
        yt !== null && wl(y, yt.startTime - z), (er = !1);
      }
      return er;
    } finally {
      (m = null), (p = T), (k = !1);
    }
  }
  var N = !1,
    _ = null,
    P = -1,
    W = 5,
    O = -1;
  function je() {
    return !(e.unstable_now() - O < W);
  }
  function an() {
    if (_ !== null) {
      var C = e.unstable_now();
      O = C;
      var z = !0;
      try {
        z = _(!0, C);
      } finally {
        z ? cn() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var cn;
  if (typeof a == "function")
    cn = function () {
      a(an);
    };
  else if (typeof MessageChannel < "u") {
    var Fo = new MessageChannel(),
      Ec = Fo.port2;
    (Fo.port1.onmessage = an),
      (cn = function () {
        Ec.postMessage(null);
      });
  } else
    cn = function () {
      A(an, 0);
    };
  function kl(C) {
    (_ = C), N || ((N = !0), cn());
  }
  function wl(C, z) {
    P = A(function () {
      C(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || k || ((w = !0), kl(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var T = p;
      p = z;
      try {
        return C();
      } finally {
        p = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, z) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var T = p;
      p = C;
      try {
        return z();
      } finally {
        p = T;
      }
    }),
    (e.unstable_scheduleCallback = function (C, z, T) {
      var Q = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? Q + T : Q))
          : (T = Q),
        C)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = T + G),
        (C = {
          id: h++,
          callback: z,
          priorityLevel: C,
          startTime: T,
          expirationTime: G,
          sortIndex: -1,
        }),
        T > Q
          ? ((C.sortIndex = T),
            t(c, C),
            n(s) === null &&
              C === n(c) &&
              (S ? (f(P), (P = -1)) : (S = !0), wl(y, T - Q)))
          : ((C.sortIndex = G), t(s, C), w || k || ((w = !0), kl(E))),
        C
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (C) {
      var z = p;
      return function () {
        var T = p;
        p = z;
        try {
          return C.apply(this, arguments);
        } finally {
          p = T;
        }
      };
    });
})(hs);
ms.exports = hs;
var Zc = ms.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kc = Ne,
  ge = Zc;
function g(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var vs = new Set(),
  On = {};
function Lt(e, t) {
  qt(e, t), qt(e + "Capture", t);
}
function qt(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) vs.add(t[e]);
}
var Ze = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xl = Object.prototype.hasOwnProperty,
  Yc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $o = {},
  Ho = {};
function Xc(e) {
  return Xl.call(Ho, e)
    ? !0
    : Xl.call($o, e)
    ? !1
    : Yc.test(e)
    ? (Ho[e] = !0)
    : (($o[e] = !0), !1);
}
function Gc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Jc(e, t, n, r) {
  if (t === null || typeof t > "u" || Gc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Zi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Zi);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Zi);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qi, Zi);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ki(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Jc(t, n, l, r) && (n = null),
    r || l === null
      ? Xc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  Rt = Symbol.for("react.portal"),
  At = Symbol.for("react.fragment"),
  Yi = Symbol.for("react.strict_mode"),
  Gl = Symbol.for("react.profiler"),
  ys = Symbol.for("react.provider"),
  gs = Symbol.for("react.context"),
  Xi = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  Gi = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  ks = Symbol.for("react.offscreen"),
  Uo = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uo && e[Uo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var U = Object.assign,
  El;
function kn(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      El = (t && t[1]) || "";
    }
  return (
    `
` +
    El +
    e
  );
}
var Cl = !1;
function Nl(e, t) {
  if (!e || Cl) return "";
  Cl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Cl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function qc(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case At:
      return "Fragment";
    case Rt:
      return "Portal";
    case Gl:
      return "Profiler";
    case Yi:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gs:
        return (e.displayName || "Context") + ".Consumer";
      case ys:
        return (e._context.displayName || "Context") + ".Provider";
      case Xi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gi:
        return (
          (t = e.displayName || null), t !== null ? t : bl(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return bl(e(t));
        } catch {}
    }
  return null;
}
function bc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(t);
    case 8:
      return t === Yi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ws(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ef(e) {
  var t = ws(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = ef(e));
}
function Ss(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ws(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ei(e, t) {
  var n = t.checked;
  return U({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xs(e, t) {
  (t = t.checked), t != null && Ki(e, "checked", t, !1);
}
function ti(e, t) {
  xs(e, t);
  var n = dt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ni(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ni(e, t.type, dt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Wo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ni(e, t, n) {
  (t !== "number" || Lr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wn = Array.isArray;
function Zt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ri(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return U({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Qo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dt(n) };
}
function Es(e, t) {
  var n = dt(t.value),
    r = dt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Zo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ir,
  Ns = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ir = ir || document.createElement("div"),
          ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  tf = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function (e) {
  tf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function _s(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (En.hasOwnProperty(e) && En[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ps(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = _s(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var nf = U(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
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
  }
);
function ii(e, t) {
  if (t) {
    if (nf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function oi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ui = null;
function Ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var si = null,
  Kt = null,
  Yt = null;
function Ko(e) {
  if ((e = qn(e))) {
    if (typeof si != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = sl(t)), si(e.stateNode, e.type, t));
  }
}
function js(e) {
  Kt ? (Yt ? Yt.push(e) : (Yt = [e])) : (Kt = e);
}
function zs() {
  if (Kt) {
    var e = Kt,
      t = Yt;
    if (((Yt = Kt = null), Ko(e), t)) for (e = 0; e < t.length; e++) Ko(t[e]);
  }
}
function Ts(e, t) {
  return e(t);
}
function Ls() {}
var _l = !1;
function Os(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return Ts(e, t, n);
  } finally {
    (_l = !1), (Kt !== null || Yt !== null) && (Ls(), zs());
  }
}
function Rn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var ai = !1;
if (Ze)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        ai = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    ai = !1;
  }
function rf(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Cn = !1,
  Or = null,
  Mr = !1,
  ci = null,
  lf = {
    onError: function (e) {
      (Cn = !0), (Or = e);
    },
  };
function of(e, t, n, r, l, i, o, u, s) {
  (Cn = !1), (Or = null), rf.apply(lf, arguments);
}
function uf(e, t, n, r, l, i, o, u, s) {
  if ((of.apply(this, arguments), Cn)) {
    if (Cn) {
      var c = Or;
      (Cn = !1), (Or = null);
    } else throw Error(g(198));
    Mr || ((Mr = !0), (ci = c));
  }
}
function Ot(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ms(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Yo(e) {
  if (Ot(e) !== e) throw Error(g(188));
}
function sf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ot(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Yo(l), e;
        if (i === r) return Yo(l), t;
        i = i.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Rs(e) {
  return (e = sf(e)), e !== null ? As(e) : null;
}
function As(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = As(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Fs = ge.unstable_scheduleCallback,
  Xo = ge.unstable_cancelCallback,
  af = ge.unstable_shouldYield,
  cf = ge.unstable_requestPaint,
  Z = ge.unstable_now,
  ff = ge.unstable_getCurrentPriorityLevel,
  qi = ge.unstable_ImmediatePriority,
  Ds = ge.unstable_UserBlockingPriority,
  Rr = ge.unstable_NormalPriority,
  df = ge.unstable_LowPriority,
  Is = ge.unstable_IdlePriority,
  ll = null,
  Ve = null;
function pf(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : vf,
  mf = Math.log,
  hf = Math.LN2;
function vf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mf(e) / hf) | 0)) | 0;
}
var or = 64,
  ur = 4194304;
function Sn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ar(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Sn(u)) : ((i &= o), i !== 0 && (r = Sn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Sn(o)) : i !== 0 && (r = Sn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function yf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function gf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Me(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = yf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Vs() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n);
}
function kf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function bi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function $s(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hs,
  eo,
  Us,
  Bs,
  Ws,
  di = !1,
  sr = [],
  lt = null,
  it = null,
  ot = null,
  An = new Map(),
  Fn = new Map(),
  et = [],
  wf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Go(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fn.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = qn(t)), t !== null && eo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Sf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (it = pn(it, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = pn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return An.set(i, pn(An.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Fn.set(i, pn(Fn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Qs(e) {
  var t = St(e.target);
  if (t !== null) {
    var n = Ot(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ms(n)), t !== null)) {
          (e.blockedOn = t),
            Ws(e.priority, function () {
              Us(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Sr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ui = r), n.target.dispatchEvent(r), (ui = null);
    } else return (t = qn(n)), t !== null && eo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Jo(e, t, n) {
  Sr(e) && n.delete(t);
}
function xf() {
  (di = !1),
    lt !== null && Sr(lt) && (lt = null),
    it !== null && Sr(it) && (it = null),
    ot !== null && Sr(ot) && (ot = null),
    An.forEach(Jo),
    Fn.forEach(Jo);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    di ||
      ((di = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, xf)));
}
function Dn(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < sr.length) {
    mn(sr[0], e);
    for (var n = 1; n < sr.length; n++) {
      var r = sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lt !== null && mn(lt, e),
      it !== null && mn(it, e),
      ot !== null && mn(ot, e),
      An.forEach(t),
      Fn.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    Qs(n), n.blockedOn === null && et.shift();
}
var Xt = Ge.ReactCurrentBatchConfig,
  Fr = !0;
function Ef(e, t, n, r) {
  var l = R,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (R = 1), to(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = i);
  }
}
function Cf(e, t, n, r) {
  var l = R,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (R = 4), to(e, t, n, r);
  } finally {
    (R = l), (Xt.transition = i);
  }
}
function to(e, t, n, r) {
  if (Fr) {
    var l = pi(e, t, n, r);
    if (l === null) Dl(e, t, r, Dr, n), Go(e, r);
    else if (Sf(l, e, t, n, r)) r.stopPropagation();
    else if ((Go(e, r), t & 4 && -1 < wf.indexOf(e))) {
      for (; l !== null; ) {
        var i = qn(l);
        if (
          (i !== null && Hs(i),
          (i = pi(e, t, n, r)),
          i === null && Dl(e, t, r, Dr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Dl(e, t, r, null, n);
  }
}
var Dr = null;
function pi(e, t, n, r) {
  if (((Dr = null), (e = Ji(r)), (e = St(e)), e !== null))
    if (((t = Ot(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ms(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Dr = e), null;
}
function Zs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ff()) {
        case qi:
          return 1;
        case Ds:
          return 4;
        case Rr:
        case df:
          return 16;
        case Is:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  no = null,
  xr = null;
function Ks() {
  if (xr) return xr;
  var e,
    t = no,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function qo() {
  return !1;
}
function we(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ar
        : qo),
      (this.isPropagationStopped = qo),
      this
    );
  }
  return (
    U(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ro = we(un),
  Jn = U({}, un, { view: 0, detail: 0 }),
  Nf = we(Jn),
  jl,
  zl,
  hn,
  il = U({}, Jn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === "mousemove"
              ? ((jl = e.screenX - hn.screenX), (zl = e.screenY - hn.screenY))
              : (zl = jl = 0),
            (hn = e)),
          jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  bo = we(il),
  _f = U({}, il, { dataTransfer: 0 }),
  Pf = we(_f),
  jf = U({}, Jn, { relatedTarget: 0 }),
  Tl = we(jf),
  zf = U({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tf = we(zf),
  Lf = U({}, un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Of = we(Lf),
  Mf = U({}, un, { data: 0 }),
  eu = we(Mf),
  Rf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Af = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ff = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Df(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ff[e]) ? !!t[e] : !1;
}
function lo() {
  return Df;
}
var If = U({}, Jn, {
    key: function (e) {
      if (e.key) {
        var t = Rf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Af[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lo,
    charCode: function (e) {
      return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Er(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Vf = we(If),
  $f = U({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  tu = we($f),
  Hf = U({}, Jn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lo,
  }),
  Uf = we(Hf),
  Bf = U({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wf = we(Bf),
  Qf = U({}, il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zf = we(Qf),
  Kf = [9, 13, 27, 32],
  io = Ze && "CompositionEvent" in window,
  Nn = null;
Ze && "documentMode" in document && (Nn = document.documentMode);
var Yf = Ze && "TextEvent" in window && !Nn,
  Ys = Ze && (!io || (Nn && 8 < Nn && 11 >= Nn)),
  nu = " ",
  ru = !1;
function Xs(e, t) {
  switch (e) {
    case "keyup":
      return Kf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Gs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ft = !1;
function Xf(e, t) {
  switch (e) {
    case "compositionend":
      return Gs(t);
    case "keypress":
      return t.which !== 32 ? null : ((ru = !0), nu);
    case "textInput":
      return (e = t.data), e === nu && ru ? null : e;
    default:
      return null;
  }
}
function Gf(e, t) {
  if (Ft)
    return e === "compositionend" || (!io && Xs(e, t))
      ? ((e = Ks()), (xr = no = nt = null), (Ft = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ys && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Jf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Jf[e.type] : t === "textarea";
}
function Js(e, t, n, r) {
  js(r),
    (t = Ir(t, "onChange")),
    0 < t.length &&
      ((n = new ro("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _n = null,
  In = null;
function qf(e) {
  sa(e, 0);
}
function ol(e) {
  var t = Vt(e);
  if (Ss(t)) return e;
}
function bf(e, t) {
  if (e === "change") return t;
}
var qs = !1;
if (Ze) {
  var Ll;
  if (Ze) {
    var Ol = "oninput" in document;
    if (!Ol) {
      var iu = document.createElement("div");
      iu.setAttribute("oninput", "return;"),
        (Ol = typeof iu.oninput == "function");
    }
    Ll = Ol;
  } else Ll = !1;
  qs = Ll && (!document.documentMode || 9 < document.documentMode);
}
function ou() {
  _n && (_n.detachEvent("onpropertychange", bs), (In = _n = null));
}
function bs(e) {
  if (e.propertyName === "value" && ol(In)) {
    var t = [];
    Js(t, In, e, Ji(e)), Os(qf, t);
  }
}
function ed(e, t, n) {
  e === "focusin"
    ? (ou(), (_n = t), (In = n), _n.attachEvent("onpropertychange", bs))
    : e === "focusout" && ou();
}
function td(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ol(In);
}
function nd(e, t) {
  if (e === "click") return ol(t);
}
function rd(e, t) {
  if (e === "input" || e === "change") return ol(t);
}
function ld(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ae = typeof Object.is == "function" ? Object.is : ld;
function Vn(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Xl.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function uu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function su(e, t) {
  var n = uu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = uu(n);
  }
}
function ea(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ea(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ta() {
  for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lr(e.document);
  }
  return t;
}
function oo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function id(e) {
  var t = ta(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ea(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && oo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = su(n, i));
        var o = su(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var od = Ze && "documentMode" in document && 11 >= document.documentMode,
  Dt = null,
  mi = null,
  Pn = null,
  hi = !1;
function au(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hi ||
    Dt == null ||
    Dt !== Lr(r) ||
    ((r = Dt),
    "selectionStart" in r && oo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && Vn(Pn, r)) ||
      ((Pn = r),
      (r = Ir(mi, "onSelect")),
      0 < r.length &&
        ((t = new ro("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Dt))));
}
function cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var It = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  Ml = {},
  na = {};
Ze &&
  ((na = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete It.animationend.animation,
    delete It.animationiteration.animation,
    delete It.animationstart.animation),
  "TransitionEvent" in window || delete It.transitionend.transition);
function ul(e) {
  if (Ml[e]) return Ml[e];
  if (!It[e]) return e;
  var t = It[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in na) return (Ml[e] = t[n]);
  return e;
}
var ra = ul("animationend"),
  la = ul("animationiteration"),
  ia = ul("animationstart"),
  oa = ul("transitionend"),
  ua = new Map(),
  cu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mt(e, t) {
  ua.set(e, t), Lt(t, [e]);
}
for (var Rl = 0; Rl < cu.length; Rl++) {
  var Al = cu[Rl],
    ud = Al.toLowerCase(),
    sd = Al[0].toUpperCase() + Al.slice(1);
  mt(ud, "on" + sd);
}
mt(ra, "onAnimationEnd");
mt(la, "onAnimationIteration");
mt(ia, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(oa, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Lt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Lt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ad = new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));
function fu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), uf(r, t, void 0, e), (e.currentTarget = null);
}
function sa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          fu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          fu(l, u, c), (i = s);
        }
    }
  }
  if (Mr) throw ((e = ci), (Mr = !1), (ci = null), e);
}
function D(e, t) {
  var n = t[wi];
  n === void 0 && (n = t[wi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (aa(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), aa(n, e, r, t);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      vs.forEach(function (n) {
        n !== "selectionchange" && (ad.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fr] || ((t[fr] = !0), Fl("selectionchange", !1, t));
  }
}
function aa(e, t, n, r) {
  switch (Zs(t)) {
    case 1:
      var l = Ef;
      break;
    case 4:
      l = Cf;
      break;
    default:
      l = to;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ai ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Dl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = St(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Os(function () {
    var c = i,
      h = Ji(n),
      m = [];
    e: {
      var p = ua.get(e);
      if (p !== void 0) {
        var k = ro,
          w = e;
        switch (e) {
          case "keypress":
            if (Er(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Vf;
            break;
          case "focusin":
            (w = "focus"), (k = Tl);
            break;
          case "focusout":
            (w = "blur"), (k = Tl);
            break;
          case "beforeblur":
          case "afterblur":
            k = Tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = bo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Pf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Uf;
            break;
          case ra:
          case la:
          case ia:
            k = Tf;
            break;
          case oa:
            k = Wf;
            break;
          case "scroll":
            k = Nf;
            break;
          case "wheel":
            k = Zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = tu;
        }
        var S = (t & 4) !== 0,
          A = !S && e === "scroll",
          f = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = Rn(a, f)), y != null && S.push(Hn(a, y, d)))),
            A)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new k(p, w, null, n, h)), m.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ui &&
            (w = n.relatedTarget || n.fromElement) &&
            (St(w) || w[Ke]))
        )
          break e;
        if (
          (k || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          k
            ? ((w = n.relatedTarget || n.toElement),
              (k = c),
              (w = w ? St(w) : null),
              w !== null &&
                ((A = Ot(w)), w !== A || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((k = null), (w = c)),
          k !== w)
        ) {
          if (
            ((S = bo),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = tu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (A = k == null ? p : Vt(k)),
            (d = w == null ? p : Vt(w)),
            (p = new S(y, a + "leave", k, n, h)),
            (p.target = A),
            (p.relatedTarget = d),
            (y = null),
            St(h) === c &&
              ((S = new S(f, a + "enter", w, n, h)),
              (S.target = d),
              (S.relatedTarget = A),
              (y = S)),
            (A = y),
            k && w)
          )
            t: {
              for (S = k, f = w, a = 0, d = S; d; d = Mt(d)) a++;
              for (d = 0, y = f; y; y = Mt(y)) d++;
              for (; 0 < a - d; ) (S = Mt(S)), a--;
              for (; 0 < d - a; ) (f = Mt(f)), d--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Mt(S)), (f = Mt(f));
              }
              S = null;
            }
          else S = null;
          k !== null && du(m, p, k, S, !1),
            w !== null && A !== null && du(m, A, w, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? Vt(c) : window),
          (k = p.nodeName && p.nodeName.toLowerCase()),
          k === "select" || (k === "input" && p.type === "file"))
        )
          var E = bf;
        else if (lu(p))
          if (qs) E = rd;
          else {
            E = td;
            var N = ed;
          }
        else
          (k = p.nodeName) &&
            k.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = nd);
        if (E && (E = E(e, c))) {
          Js(m, E, n, h);
          break e;
        }
        N && N(e, p, c),
          e === "focusout" &&
            (N = p._wrapperState) &&
            N.controlled &&
            p.type === "number" &&
            ni(p, "number", p.value);
      }
      switch (((N = c ? Vt(c) : window), e)) {
        case "focusin":
          (lu(N) || N.contentEditable === "true") &&
            ((Dt = N), (mi = c), (Pn = null));
          break;
        case "focusout":
          Pn = mi = Dt = null;
          break;
        case "mousedown":
          hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hi = !1), au(m, n, h);
          break;
        case "selectionchange":
          if (od) break;
        case "keydown":
        case "keyup":
          au(m, n, h);
      }
      var _;
      if (io)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Ft
          ? Xs(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Ys &&
          n.locale !== "ko" &&
          (Ft || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Ft && (_ = Ks())
            : ((nt = h),
              (no = "value" in nt ? nt.value : nt.textContent),
              (Ft = !0))),
        (N = Ir(c, P)),
        0 < N.length &&
          ((P = new eu(P, e, null, n, h)),
          m.push({ event: P, listeners: N }),
          _ ? (P.data = _) : ((_ = Gs(n)), _ !== null && (P.data = _)))),
        (_ = Yf ? Xf(e, n) : Gf(e, n)) &&
          ((c = Ir(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new eu("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = _)));
    }
    sa(m, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ir(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Rn(e, n)),
      i != null && r.unshift(Hn(e, i, l)),
      (i = Rn(e, t)),
      i != null && r.push(Hn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function du(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Rn(n, i)), s != null && o.unshift(Hn(n, s, u)))
        : l || ((s = Rn(n, i)), s != null && o.push(Hn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var cd = /\r\n?/g,
  fd = /\u0000|\uFFFD/g;
function pu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cd,
      `
`
    )
    .replace(fd, "");
}
function dr(e, t, n) {
  if (((t = pu(t)), pu(e) !== t && n)) throw Error(g(425));
}
function Vr() {}
var vi = null,
  yi = null;
function gi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ki = typeof setTimeout == "function" ? setTimeout : void 0,
  dd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  mu = typeof Promise == "function" ? Promise : void 0,
  pd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof mu < "u"
      ? function (e) {
          return mu.resolve(null).then(e).catch(md);
        }
      : ki;
function md(e) {
  setTimeout(function () {
    throw e;
  });
}
function Il(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Dn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Dn(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function hu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  Ie = "__reactFiber$" + sn,
  Un = "__reactProps$" + sn,
  Ke = "__reactContainer$" + sn,
  wi = "__reactEvents$" + sn,
  hd = "__reactListeners$" + sn,
  vd = "__reactHandles$" + sn;
function St(e) {
  var t = e[Ie];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Ie])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = hu(e); e !== null; ) {
          if ((n = e[Ie])) return n;
          e = hu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qn(e) {
  return (
    (e = e[Ie] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function sl(e) {
  return e[Un] || null;
}
var Si = [],
  $t = -1;
function ht(e) {
  return { current: e };
}
function I(e) {
  0 > $t || ((e.current = Si[$t]), (Si[$t] = null), $t--);
}
function F(e, t) {
  $t++, (Si[$t] = e.current), (e.current = t);
}
var pt = {},
  ie = ht(pt),
  de = ht(!1),
  _t = pt;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function $r() {
  I(de), I(ie);
}
function vu(e, t, n) {
  if (ie.current !== pt) throw Error(g(168));
  F(ie, t), F(de, n);
}
function ca(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, bc(e) || "Unknown", l));
  return U({}, n, r);
}
function Hr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pt),
    (_t = ie.current),
    F(ie, e),
    F(de, de.current),
    !0
  );
}
function yu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = ca(e, t, _t)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(de),
      I(ie),
      F(ie, e))
    : I(de),
    F(de, n);
}
var Ue = null,
  al = !1,
  Vl = !1;
function fa(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
function yd(e) {
  (al = !0), fa(e);
}
function vt() {
  if (!Vl && Ue !== null) {
    Vl = !0;
    var e = 0,
      t = R;
    try {
      var n = Ue;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ue = null), (al = !1);
    } catch (l) {
      throw (Ue !== null && (Ue = Ue.slice(e + 1)), Fs(qi, vt), l);
    } finally {
      (R = t), (Vl = !1);
    }
  }
  return null;
}
var Ht = [],
  Ut = 0,
  Ur = null,
  Br = 0,
  Se = [],
  xe = 0,
  Pt = null,
  Be = 1,
  We = "";
function kt(e, t) {
  (Ht[Ut++] = Br), (Ht[Ut++] = Ur), (Ur = e), (Br = t);
}
function da(e, t, n) {
  (Se[xe++] = Be), (Se[xe++] = We), (Se[xe++] = Pt), (Pt = e);
  var r = Be;
  e = We;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Me(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Be = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (We = i + e);
  } else (Be = (1 << i) | (n << l) | r), (We = e);
}
function uo(e) {
  e.return !== null && (kt(e, 1), da(e, 1, 0));
}
function so(e) {
  for (; e === Ur; )
    (Ur = Ht[--Ut]), (Ht[Ut] = null), (Br = Ht[--Ut]), (Ht[Ut] = null);
  for (; e === Pt; )
    (Pt = Se[--xe]),
      (Se[xe] = null),
      (We = Se[--xe]),
      (Se[xe] = null),
      (Be = Se[--xe]),
      (Se[xe] = null);
}
var ye = null,
  ve = null,
  V = !1,
  Oe = null;
function pa(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pt !== null ? { id: Be, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ei(e) {
  if (V) {
    var t = ve;
    if (t) {
      var n = t;
      if (!gu(e, t)) {
        if (xi(e)) throw Error(g(418));
        t = ut(n.nextSibling);
        var r = ye;
        t && gu(e, t)
          ? pa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (ye = e));
      }
    } else {
      if (xi(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (ye = e);
    }
  }
}
function ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function pr(e) {
  if (e !== ye) return !1;
  if (!V) return ku(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (xi(e)) throw (ma(), Error(g(418)));
    for (; t; ) pa(e, t), (t = ut(t.nextSibling));
  }
  if ((ku(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function ma() {
  for (var e = ve; e; ) e = ut(e.nextSibling);
}
function en() {
  (ve = ye = null), (V = !1);
}
function ao(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var gd = Ge.ReactCurrentBatchConfig;
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function mr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function wu(e) {
  var t = e._init;
  return t(e._payload);
}
function ha(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ft(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, y) {
    return a === null || a.tag !== 6
      ? ((a = Zl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, y) {
    var E = d.type;
    return E === At
      ? h(f, a, d.props.children, y, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === qe &&
            wu(E) === a.type))
      ? ((y = l(a, d.props)), (y.ref = vn(f, a, d)), (y.return = f), y)
      : ((y = Tr(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = vn(f, a, d)),
        (y.return = f),
        y);
  }
  function c(f, a, d, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Kl(d, f.mode, y)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, y, E) {
    return a === null || a.tag !== 7
      ? ((a = Nt(d, f.mode, y, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Zl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (
            (d = Tr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = vn(f, null, a)),
            (d.return = f),
            d
          );
        case Rt:
          return (a = Kl(a, f.mode, d)), (a.return = f), a;
        case qe:
          var y = a._init;
          return m(f, y(a._payload), d);
      }
      if (wn(a) || fn(a))
        return (a = Nt(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, y) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === E ? s(f, a, d, y) : null;
        case Rt:
          return d.key === E ? c(f, a, d, y) : null;
        case qe:
          return (E = d._init), p(f, a, E(d._payload), y);
      }
      if (wn(d) || fn(d)) return E !== null ? null : h(f, a, d, y, null);
      mr(f, d);
    }
    return null;
  }
  function k(f, a, d, y, E) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), u(a, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case rr:
          return (f = f.get(y.key === null ? d : y.key) || null), s(a, f, y, E);
        case Rt:
          return (f = f.get(y.key === null ? d : y.key) || null), c(a, f, y, E);
        case qe:
          var N = y._init;
          return k(f, a, d, N(y._payload), E);
      }
      if (wn(y) || fn(y)) return (f = f.get(d) || null), h(a, f, y, E, null);
      mr(a, y);
    }
    return null;
  }
  function w(f, a, d, y) {
    for (
      var E = null, N = null, _ = a, P = (a = 0), W = null;
      _ !== null && P < d.length;
      P++
    ) {
      _.index > P ? ((W = _), (_ = null)) : (W = _.sibling);
      var O = p(f, _, d[P], y);
      if (O === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && O.alternate === null && t(f, _),
        (a = i(O, a, P)),
        N === null ? (E = O) : (N.sibling = O),
        (N = O),
        (_ = W);
    }
    if (P === d.length) return n(f, _), V && kt(f, P), E;
    if (_ === null) {
      for (; P < d.length; P++)
        (_ = m(f, d[P], y)),
          _ !== null &&
            ((a = i(_, a, P)), N === null ? (E = _) : (N.sibling = _), (N = _));
      return V && kt(f, P), E;
    }
    for (_ = r(f, _); P < d.length; P++)
      (W = k(_, f, P, d[P], y)),
        W !== null &&
          (e && W.alternate !== null && _.delete(W.key === null ? P : W.key),
          (a = i(W, a, P)),
          N === null ? (E = W) : (N.sibling = W),
          (N = W));
    return (
      e &&
        _.forEach(function (je) {
          return t(f, je);
        }),
      V && kt(f, P),
      E
    );
  }
  function S(f, a, d, y) {
    var E = fn(d);
    if (typeof E != "function") throw Error(g(150));
    if (((d = E.call(d)), d == null)) throw Error(g(151));
    for (
      var N = (E = null), _ = a, P = (a = 0), W = null, O = d.next();
      _ !== null && !O.done;
      P++, O = d.next()
    ) {
      _.index > P ? ((W = _), (_ = null)) : (W = _.sibling);
      var je = p(f, _, O.value, y);
      if (je === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && je.alternate === null && t(f, _),
        (a = i(je, a, P)),
        N === null ? (E = je) : (N.sibling = je),
        (N = je),
        (_ = W);
    }
    if (O.done) return n(f, _), V && kt(f, P), E;
    if (_ === null) {
      for (; !O.done; P++, O = d.next())
        (O = m(f, O.value, y)),
          O !== null &&
            ((a = i(O, a, P)), N === null ? (E = O) : (N.sibling = O), (N = O));
      return V && kt(f, P), E;
    }
    for (_ = r(f, _); !O.done; P++, O = d.next())
      (O = k(_, f, P, O.value, y)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? P : O.key),
          (a = i(O, a, P)),
          N === null ? (E = O) : (N.sibling = O),
          (N = O));
    return (
      e &&
        _.forEach(function (an) {
          return t(f, an);
        }),
      V && kt(f, P),
      E
    );
  }
  function A(f, a, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === At &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var E = d.key, N = a; N !== null; ) {
              if (N.key === E) {
                if (((E = d.type), E === At)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (a = l(N, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === qe &&
                    wu(E) === N.type)
                ) {
                  n(f, N.sibling),
                    (a = l(N, d.props)),
                    (a.ref = vn(f, N, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === At
              ? ((a = Nt(d.props.children, f.mode, y, d.key)),
                (a.return = f),
                (f = a))
              : ((y = Tr(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = vn(f, a, d)),
                (y.return = f),
                (f = y));
          }
          return o(f);
        case Rt:
          e: {
            for (N = d.key; a !== null; ) {
              if (a.key === N)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Kl(d, f.mode, y)), (a.return = f), (f = a);
          }
          return o(f);
        case qe:
          return (N = d._init), A(f, a, N(d._payload), y);
      }
      if (wn(d)) return w(f, a, d, y);
      if (fn(d)) return S(f, a, d, y);
      mr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Zl(d, f.mode, y)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return A;
}
var tn = ha(!0),
  va = ha(!1),
  Wr = ht(null),
  Qr = null,
  Bt = null,
  co = null;
function fo() {
  co = Bt = Qr = null;
}
function po(e) {
  var t = Wr.current;
  I(Wr), (e._currentValue = t);
}
function Ci(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Gt(e, t) {
  (Qr = e),
    (co = Bt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (co !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bt === null)) {
      if (Qr === null) throw Error(g(308));
      (Bt = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Bt = Bt.next = e;
  return t;
}
var xt = null;
function mo(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function ya(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), mo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ga(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function st(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), mo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Cr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bi(e, n);
  }
}
function Su(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (h = c = s = null), (u = i);
    do {
      var p = u.lane,
        k = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: k,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            S = u;
          switch (((p = t), (k = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                m = w.call(k, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == "function" ? w.call(k, m, p) : w),
                p == null)
              )
                break e;
              m = U({}, m, p);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (k = {
          eventTime: k,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = k), (s = m)) : (h = h.next = k),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (zt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var bn = {},
  $e = ht(bn),
  Bn = ht(bn),
  Wn = ht(bn);
function Et(e) {
  if (e === bn) throw Error(g(174));
  return e;
}
function vo(e, t) {
  switch ((F(Wn, t), F(Bn, e), F($e, bn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = li(t, e));
  }
  I($e), F($e, t);
}
function nn() {
  I($e), I(Bn), I(Wn);
}
function ka(e) {
  Et(Wn.current);
  var t = Et($e.current),
    n = li(t, e.type);
  t !== n && (F(Bn, e), F($e, n));
}
function yo(e) {
  Bn.current === e && (I($e), I(Bn));
}
var $ = ht(0);
function Kr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $l = [];
function go() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Nr = Ge.ReactCurrentDispatcher,
  Hl = Ge.ReactCurrentBatchConfig,
  jt = 0,
  H = null,
  Y = null,
  J = null,
  Yr = !1,
  jn = !1,
  Qn = 0,
  kd = 0;
function ne() {
  throw Error(g(321));
}
function ko(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function wo(e, t, n, r, l, i) {
  if (
    ((jt = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? Ed : Cd),
    (e = n(r, l)),
    jn)
  ) {
    i = 0;
    do {
      if (((jn = !1), (Qn = 0), 25 <= i)) throw Error(g(301));
      (i += 1),
        (J = Y = null),
        (t.updateQueue = null),
        (Nr.current = Nd),
        (e = n(r, l));
    } while (jn);
  }
  if (
    ((Nr.current = Xr),
    (t = Y !== null && Y.next !== null),
    (jt = 0),
    (J = Y = H = null),
    (Yr = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function So() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (H.memoizedState = J = e) : (J = J.next = e), J;
}
function Pe() {
  if (Y === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? H.memoizedState : J.next;
  if (t !== null) (J = t), (Y = e);
  else {
    if (e === null) throw Error(g(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      J === null ? (H.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ul(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var h = c.lane;
      if ((jt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (H.lanes |= h),
          (zt |= h);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Ae(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (H.lanes |= i), (zt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ae(i, t.memoizedState) || (fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function wa() {}
function Sa(e, t) {
  var n = H,
    r = Pe(),
    l = t(),
    i = !Ae(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    xo(Ca.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, Ea.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(g(349));
    jt & 30 || xa(n, t, l);
  }
  return l;
}
function xa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ea(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Na(t) && _a(e);
}
function Ca(e, t, n) {
  return n(function () {
    Na(t) && _a(e);
  });
}
function Na(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function _a(e) {
  var t = Ye(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function Eu(e) {
  var t = De();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xd.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function Kn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Pa() {
  return Pe().memoizedState;
}
function _r(e, t, n, r) {
  var l = De();
  (H.flags |= e),
    (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function cl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && ko(r, o.deps))) {
      l.memoizedState = Kn(t, n, i, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = Kn(1 | t, n, i, r));
}
function Cu(e, t) {
  return _r(8390656, 8, e, t);
}
function xo(e, t) {
  return cl(2048, 8, e, t);
}
function ja(e, t) {
  return cl(4, 2, e, t);
}
function za(e, t) {
  return cl(4, 4, e, t);
}
function Ta(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function La(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), cl(4, 4, Ta.bind(null, t, e), n)
  );
}
function Eo() {}
function Oa(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ko(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ma(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ko(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ra(e, t, n) {
  return jt & 21
    ? (Ae(n, t) || ((n = Vs()), (H.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function wd(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (Hl.transition = r);
  }
}
function Aa() {
  return Pe().memoizedState;
}
function Sd(e, t, n) {
  var r = ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Fa(e))
  )
    Da(t, n);
  else if (((n = ya(e, t, n, r)), n !== null)) {
    var l = ue();
    Re(n, e, r, l), Ia(n, t, r);
  }
}
function xd(e, t, n) {
  var r = ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fa(e)) Da(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ae(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), mo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ya(e, t, l, r)),
      n !== null && ((l = ue()), Re(n, e, r, l), Ia(n, t, r));
  }
}
function Fa(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function Da(e, t) {
  jn = Yr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ia(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bi(e, n);
  }
}
var Xr = {
    readContext: _e,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  Ed = {
    readContext: _e,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Cu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _r(4194308, 4, Ta.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Sd.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Eu,
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = Eu(!1),
        t = e[0];
      return (e = wd.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = De();
      if (V) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(g(349));
        jt & 30 || xa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Cu(Ca.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Kn(9, Ea.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = q.identifierPrefix;
      if (V) {
        var n = We,
          r = Be;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = kd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cd = {
    readContext: _e,
    useCallback: Oa,
    useContext: _e,
    useEffect: xo,
    useImperativeHandle: La,
    useInsertionEffect: ja,
    useLayoutEffect: za,
    useMemo: Ma,
    useReducer: Ul,
    useRef: Pa,
    useState: function () {
      return Ul(Zn);
    },
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      var t = Pe();
      return Ra(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Ul(Zn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: wa,
    useSyncExternalStore: Sa,
    useId: Aa,
    unstable_isNewReconciler: !1,
  },
  Nd = {
    readContext: _e,
    useCallback: Oa,
    useContext: _e,
    useEffect: xo,
    useImperativeHandle: La,
    useInsertionEffect: ja,
    useLayoutEffect: za,
    useMemo: Ma,
    useReducer: Bl,
    useRef: Pa,
    useState: function () {
      return Bl(Zn);
    },
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      var t = Pe();
      return Y === null ? (t.memoizedState = e) : Ra(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Zn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: wa,
    useSyncExternalStore: Sa,
    useId: Aa,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = U({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ni(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : U({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ot(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ct(e),
      i = Qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Re(t, e, l, r), Cr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ct(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Re(t, e, l, r), Cr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = ct(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = st(e, l, r)),
      t !== null && (Re(t, e, r, n), Cr(t, e, r));
  },
};
function Nu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Vn(n, r) || !Vn(l, i)
      : !0
  );
}
function Va(e, t, n) {
  var r = !1,
    l = pt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = _e(i))
      : ((l = pe(t) ? _t : ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? bt(e, l) : pt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function _u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fl.enqueueReplaceState(t, t.state, null);
}
function _i(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ho(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = _e(i))
    : ((i = pe(t) ? _t : ie.current), (l.context = bt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ni(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && fl.enqueueReplaceState(l, l.state, null),
      Zr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _d = typeof WeakMap == "function" ? WeakMap : Map;
function $a(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jr || ((Jr = !0), (Di = r)), Pi(e, t);
    }),
    n
  );
}
function Ha(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Pi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Pi(e, t),
          typeof r != "function" &&
            (at === null ? (at = new Set([this])) : at.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Pu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _d();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = $d.bind(null, e, t, n)), t.then(e, e));
}
function ju(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), st(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Pd = Ge.ReactCurrentOwner,
  fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? va(t, null, n, r) : tn(t, e.child, n, r);
}
function Tu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Gt(t, l),
    (r = wo(e, t, n, r, i, l)),
    (n = So()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (V && n && uo(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Lu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Lo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ua(e, t, i, r, l))
      : ((e = Tr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Vn), n(o, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ft(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ua(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Vn(i, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return ji(e, t, n, r, l);
}
function Ba(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Qt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(Qt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        F(Qt, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Qt, he),
      (he |= r);
  return oe(e, t, l, n), t.child;
}
function Wa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ji(e, t, n, r, l) {
  var i = pe(n) ? _t : ie.current;
  return (
    (i = bt(t, i)),
    Gt(t, l),
    (n = wo(e, t, n, r, i, l)),
    (r = So()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (V && r && uo(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Ou(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0;
    Hr(t);
  } else i = !1;
  if ((Gt(t, l), t.stateNode === null))
    Pr(e, t), Va(t, n, r), _i(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = _e(c))
      : ((c = pe(n) ? _t : ie.current), (c = bt(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && _u(t, o, r, c)),
      (be = !1);
    var p = t.memoizedState;
    (o.state = p),
      Zr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || de.current || be
        ? (typeof h == "function" && (Ni(t, n, h, r), (s = t.memoizedState)),
          (u = be || Nu(t, n, u, r, p, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ga(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Te(t.type, u)),
      (o.props = c),
      (m = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = pe(n) ? _t : ie.current), (s = bt(t, s)));
    var k = n.getDerivedStateFromProps;
    (h =
      typeof k == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && _u(t, o, r, s)),
      (be = !1),
      (p = t.memoizedState),
      (o.state = p),
      Zr(t, r, o, l);
    var w = t.memoizedState;
    u !== m || p !== w || de.current || be
      ? (typeof k == "function" && (Ni(t, n, k, r), (w = t.memoizedState)),
        (c = be || Nu(t, n, c, r, p, w, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zi(e, t, n, r, i, l);
}
function zi(e, t, n, r, l, i) {
  Wa(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && yu(t, n, !1), Xe(e, t, i);
  (r = t.stateNode), (Pd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = tn(t, e.child, null, i)), (t.child = tn(t, null, u, i)))
      : oe(e, t, u, i),
    (t.memoizedState = r.state),
    l && yu(t, n, !0),
    t.child
  );
}
function Qa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vu(e, t.context, !1),
    vo(e, t.containerInfo);
}
function Mu(e, t, n, r, l) {
  return en(), ao(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function Li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Za(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F($, l & 1),
    e === null)
  )
    return (
      Ei(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ml(o, r, 0, null)),
              (e = Nt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Li(n)),
              (t.memoizedState = Ti),
              e)
            : Co(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return jd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ft(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = ft(u, i)) : ((i = Nt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Li(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ti),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ft(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Co(e, t) {
  return (
    (t = ml({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hr(e, t, n, r) {
  return (
    r !== null && ao(r),
    tn(t, e.child, null, n),
    (e = Co(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wl(Error(g(422)))), hr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = ml({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Nt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && tn(t, e.child, null, o),
        (t.child.memoizedState = Li(o)),
        (t.memoizedState = Ti),
        i);
  if (!(t.mode & 1)) return hr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(g(419))), (r = Wl(i, r, void 0)), hr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ye(e, l), Re(r, e, l, -1));
    }
    return To(), (r = Wl(Error(g(421)))), hr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Hd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ve = ut(l.nextSibling)),
      (ye = t),
      (V = !0),
      (Oe = null),
      e !== null &&
        ((Se[xe++] = Be),
        (Se[xe++] = We),
        (Se[xe++] = Pt),
        (Be = e.id),
        (We = e.overflow),
        (Pt = t)),
      (t = Co(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ru(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ci(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Ka(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
        else if (e.tag === 19) Ru(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Kr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ql(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ql(t, !0, n, null, i);
        break;
      case "together":
        Ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function zd(e, t, n) {
  switch (t.tag) {
    case 3:
      Qa(t), en();
      break;
    case 5:
      ka(t);
      break;
    case 1:
      pe(t.type) && Hr(t);
      break;
    case 4:
      vo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Za(e, t, n)
          : (F($, $.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      F($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ka(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ba(e, t, n);
  }
  return Xe(e, t, n);
}
var Ya, Oi, Xa, Ga;
Ya = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Oi = function () {};
Xa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Et($e.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      case "select":
        (l = U({}, l, { value: void 0 })),
          (r = U({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vr);
    }
    ii(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (On.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (On.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && D("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ga = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Td(e, t, n) {
  var r = t.pendingProps;
  switch ((so(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return pe(t.type) && $r(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        I(de),
        I(ie),
        go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && ($i(Oe), (Oe = null)))),
        Oi(e, t),
        re(t),
        null
      );
    case 5:
      yo(t);
      var l = Et(Wn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return re(t), null;
        }
        if (((e = Et($e.current)), pr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ie] = t), (r[Un] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xn.length; l++) D(xn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Bo(r, i), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Qo(r, i), D("invalid", r);
          }
          ii(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : On.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              lr(r), Wo(r, i, !0);
              break;
            case "textarea":
              lr(r), Zo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Vr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Cs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ie] = t),
            (e[Un] = r),
            Ya(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = oi(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < xn.length; l++) D(xn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                Bo(e, r), (l = ei(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = U({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Qo(e, r), (l = ri(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            ii(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Ps(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ns(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Mn(e, s)
                    : typeof s == "number" && Mn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (On.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && D("scroll", e)
                      : s != null && Ki(e, i, s, o));
              }
            switch (n) {
              case "input":
                lr(e), Wo(e, r, !1);
                break;
              case "textarea":
                lr(e), Zo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Zt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Zt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Ga(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = Et(Wn.current)), Et($e.current), pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ie] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ie] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (I($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && ve !== null && t.mode & 1 && !(t.flags & 128))
          ma(), en(), (t.flags |= 98560), (i = !1);
        else if (((i = pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317));
            i[Ie] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Oe !== null && ($i(Oe), (Oe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : To())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        nn(), Oi(e, t), e === null && $n(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return po(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && $r(), re(t), null;
    case 19:
      if ((I($), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Kr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Z() > ln &&
            ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !V)
            )
              return re(t), null;
          } else
            2 * Z() - i.renderingStartTime > ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Z()),
          (t.sibling = null),
          (n = $.current),
          F($, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        zo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function Ld(e, t) {
  switch ((so(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && $r(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        I(de),
        I(ie),
        go(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return yo(t), null;
    case 13:
      if ((I($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return I($), null;
    case 4:
      return nn(), null;
    case 10:
      return po(t.type._context), null;
    case 22:
    case 23:
      return zo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  le = !1,
  Od = typeof WeakSet == "function" ? WeakSet : Set,
  x = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function Mi(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Au = !1;
function Md(e, t) {
  if (((vi = Fr), (e = ta()), oo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var k;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (k = m.firstChild) !== null;

            )
              (p = m), (m = k);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++h === r && (s = o),
                (k = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = k;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yi = { focusedElem: e, selectionRange: n }, Fr = !1, x = t; x !== null; )
    if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (x = e);
    else
      for (; x !== null; ) {
        t = x;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    A = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Te(t.type, S),
                      A
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (y) {
          B(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (x = e);
          break;
        }
        x = t.return;
      }
  return (w = Au), (Au = !1), w;
}
function zn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Mi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ri(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ja(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ja(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ie], delete t[Un], delete t[wi], delete t[hd], delete t[vd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function qa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qa(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ai(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ai(e, t, n), e = e.sibling; e !== null; ) Ai(e, t, n), (e = e.sibling);
}
function Fi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fi(e, t, n), e = e.sibling; e !== null; ) Fi(e, t, n), (e = e.sibling);
}
var b = null,
  Le = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) ba(e, t, n), (n = n.sibling);
}
function ba(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(ll, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Wt(n, t);
    case 6:
      var r = b,
        l = Le;
      (b = null),
        Je(e, t, n),
        (b = r),
        (Le = l),
        b !== null &&
          (Le
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Le
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Il(e.parentNode, n)
              : e.nodeType === 1 && Il(e, n),
            Dn(e))
          : Il(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Le),
        (b = n.stateNode.containerInfo),
        (Le = !0),
        Je(e, t, n),
        (b = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Mi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Wt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Je(e, t, n), (le = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Du(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Od()),
      t.forEach(function (r) {
        var l = Ud.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Le = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(g(160));
        ba(i, o, l), (b = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ec(t, e), (t = t.sibling);
}
function ec(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Fe(e), r & 4)) {
        try {
          zn(3, e, e.return), dl(3, e);
        } catch (S) {
          B(e, e.return, S);
        }
        try {
          zn(5, e, e.return);
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 1:
      ze(t, e), Fe(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Fe(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Mn(l, "");
        } catch (S) {
          B(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && xs(l, i),
              oi(u, o);
            var c = oi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                m = s[o + 1];
              h === "style"
                ? Ps(l, m)
                : h === "dangerouslySetInnerHTML"
                ? Ns(l, m)
                : h === "children"
                ? Mn(l, m)
                : Ki(l, h, m, c);
            }
            switch (u) {
              case "input":
                ti(l, i);
                break;
              case "textarea":
                Es(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var k = i.value;
                k != null
                  ? Zt(l, !!i.multiple, k, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Zt(l, !!i.multiple, i.defaultValue, !0)
                      : Zt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Un] = i;
          } catch (S) {
            B(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Dn(t.containerInfo);
        } catch (S) {
          B(e, e.return, S);
        }
      break;
    case 4:
      ze(t, e), Fe(e);
      break;
    case 13:
      ze(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Po = Z())),
        r & 4 && Du(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || h), ze(t, e), (le = c)) : ze(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (x = e, h = e.child; h !== null; ) {
            for (m = x = h; x !== null; ) {
              switch (((p = x), (k = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zn(4, p, p.return);
                  break;
                case 1:
                  Wt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      B(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Wt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Vu(m);
                    continue;
                  }
              }
              k !== null ? ((k.return = p), (x = k)) : Vu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = _s("display", o)));
              } catch (S) {
                B(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (S) {
                B(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Fe(e), r & 4 && Du(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mn(l, ""), (r.flags &= -33));
          var i = Fu(e);
          Fi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Fu(e);
          Ai(e, u, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rd(e, t, n) {
  (x = e), tc(e);
}
function tc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || vr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = vr;
        var c = le;
        if (((vr = o), (le = s) && !c))
          for (x = l; x !== null; )
            (o = x),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? $u(l)
                : s !== null
                ? ((s.return = o), (x = s))
                : $u(l);
        for (; i !== null; ) (x = i), tc(i), (i = i.sibling);
        (x = l), (vr = u), (le = c);
      }
      Iu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (x = i)) : Iu(e);
  }
}
function Iu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && xu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Dn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        le || (t.flags & 512 && Ri(t));
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function Vu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function $u(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ri(t);
          } catch (s) {
            B(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ri(t);
          } catch (s) {
            B(t, o, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (x = u);
      break;
    }
    x = t.return;
  }
}
var Ad = Math.ceil,
  Gr = Ge.ReactCurrentDispatcher,
  No = Ge.ReactCurrentOwner,
  Ce = Ge.ReactCurrentBatchConfig,
  M = 0,
  q = null,
  K = null,
  ee = 0,
  he = 0,
  Qt = ht(0),
  X = 0,
  Yn = null,
  zt = 0,
  pl = 0,
  _o = 0,
  Tn = null,
  ce = null,
  Po = 0,
  ln = 1 / 0,
  He = null,
  Jr = !1,
  Di = null,
  at = null,
  yr = !1,
  rt = null,
  qr = 0,
  Ln = 0,
  Ii = null,
  jr = -1,
  zr = 0;
function ue() {
  return M & 6 ? Z() : jr !== -1 ? jr : (jr = Z());
}
function ct(e) {
  return e.mode & 1
    ? M & 2 && ee !== 0
      ? ee & -ee
      : gd.transition !== null
      ? (zr === 0 && (zr = Vs()), zr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Zs(e.type))),
        e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < Ln) throw ((Ln = 0), (Ii = null), Error(g(185)));
  Gn(e, n, r),
    (!(M & 2) || e !== q) &&
      (e === q && (!(M & 2) && (pl |= n), X === 4 && tt(e, ee)),
      me(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((ln = Z() + 500), al && vt()));
}
function me(e, t) {
  var n = e.callbackNode;
  gf(e, t);
  var r = Ar(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && Xo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xo(n), t === 1))
      e.tag === 0 ? yd(Hu.bind(null, e)) : fa(Hu.bind(null, e)),
        pd(function () {
          !(M & 6) && vt();
        }),
        (n = null);
    else {
      switch ($s(r)) {
        case 1:
          n = qi;
          break;
        case 4:
          n = Ds;
          break;
        case 16:
          n = Rr;
          break;
        case 536870912:
          n = Is;
          break;
        default:
          n = Rr;
      }
      n = ac(n, nc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function nc(e, t) {
  if (((jr = -1), (zr = 0), M & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (Jt() && e.callbackNode !== n) return null;
  var r = Ar(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = lc();
    (q !== e || ee !== t) && ((He = null), (ln = Z() + 500), Ct(e, t));
    do
      try {
        Id();
        break;
      } catch (u) {
        rc(e, u);
      }
    while (!0);
    fo(),
      (Gr.current = i),
      (M = l),
      K !== null ? (t = 0) : ((q = null), (ee = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = fi(e)), l !== 0 && ((r = l), (t = Vi(e, l)))), t === 1)
    )
      throw ((n = Yn), Ct(e, 0), tt(e, r), me(e, Z()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Fd(l) &&
          ((t = br(e, r)),
          t === 2 && ((i = fi(e)), i !== 0 && ((r = i), (t = Vi(e, i)))),
          t === 1))
      )
        throw ((n = Yn), Ct(e, 0), tt(e, r), me(e, Z()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          wt(e, ce, He);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Po + 500 - Z()), 10 < t))
          ) {
            if (Ar(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ki(wt.bind(null, e, ce, He), t);
            break;
          }
          wt(e, ce, He);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Me(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ad(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ki(wt.bind(null, e, ce, He), r);
            break;
          }
          wt(e, ce, He);
          break;
        case 5:
          wt(e, ce, He);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return me(e, Z()), e.callbackNode === n ? nc.bind(null, e) : null;
}
function Vi(e, t) {
  var n = Tn;
  return (
    e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256),
    (e = br(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && $i(t)),
    e
  );
}
function $i(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function Fd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ae(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~_o,
      t &= ~pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Hu(e) {
  if (M & 6) throw Error(g(327));
  Jt();
  var t = Ar(e, 0);
  if (!(t & 1)) return me(e, Z()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fi(e);
    r !== 0 && ((t = r), (n = Vi(e, r)));
  }
  if (n === 1) throw ((n = Yn), Ct(e, 0), tt(e, t), me(e, Z()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ce, He),
    me(e, Z()),
    null
  );
}
function jo(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((ln = Z() + 500), al && vt());
  }
}
function Tt(e) {
  rt !== null && rt.tag === 0 && !(M & 6) && Jt();
  var t = M;
  M |= 1;
  var n = Ce.transition,
    r = R;
  try {
    if (((Ce.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Ce.transition = n), (M = t), !(M & 6) && vt();
  }
}
function zo() {
  (he = Qt.current), I(Qt);
}
function Ct(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), dd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((so(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $r();
          break;
        case 3:
          nn(), I(de), I(ie), go();
          break;
        case 5:
          yo(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          I($);
          break;
        case 19:
          I($);
          break;
        case 10:
          po(r.type._context);
          break;
        case 22:
        case 23:
          zo();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (K = e = ft(e.current, null)),
    (ee = he = t),
    (X = 0),
    (Yn = null),
    (_o = pl = zt = 0),
    (ce = Tn = null),
    xt !== null)
  ) {
    for (t = 0; t < xt.length; t++)
      if (((n = xt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    xt = null;
  }
  return e;
}
function rc(e, t) {
  do {
    var n = K;
    try {
      if ((fo(), (Nr.current = Xr), Yr)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Yr = !1;
      }
      if (
        ((jt = 0),
        (J = Y = H = null),
        (jn = !1),
        (Qn = 0),
        (No.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Yn = t), (K = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var k = ju(o);
          if (k !== null) {
            (k.flags &= -257),
              zu(k, o, u, i, t),
              k.mode & 1 && Pu(i, c, t),
              (t = k),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Pu(i, c, t), To();
              break e;
            }
            s = Error(g(426));
          }
        } else if (V && u.mode & 1) {
          var A = ju(o);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              zu(A, o, u, i, t),
              ao(rn(s, u));
            break e;
          }
        }
        (i = s = rn(s, u)),
          X !== 4 && (X = 2),
          Tn === null ? (Tn = [i]) : Tn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = $a(i, s, t);
              Su(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (at === null || !at.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = Ha(i, u, t);
                Su(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      oc(n);
    } catch (E) {
      (t = E), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function lc() {
  var e = Gr.current;
  return (Gr.current = Xr), e === null ? Xr : e;
}
function To() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(zt & 268435455) && !(pl & 268435455)) || tt(q, ee);
}
function br(e, t) {
  var n = M;
  M |= 2;
  var r = lc();
  (q !== e || ee !== t) && ((He = null), Ct(e, t));
  do
    try {
      Dd();
      break;
    } catch (l) {
      rc(e, l);
    }
  while (!0);
  if ((fo(), (M = n), (Gr.current = r), K !== null)) throw Error(g(261));
  return (q = null), (ee = 0), X;
}
function Dd() {
  for (; K !== null; ) ic(K);
}
function Id() {
  for (; K !== null && !af(); ) ic(K);
}
function ic(e) {
  var t = sc(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? oc(e) : (K = t),
    (No.current = null);
}
function oc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ld(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = Td(n, t, he)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function wt(e, t, n) {
  var r = R,
    l = Ce.transition;
  try {
    (Ce.transition = null), (R = 1), Vd(e, t, n, r);
  } finally {
    (Ce.transition = l), (R = r);
  }
  return null;
}
function Vd(e, t, n, r) {
  do Jt();
  while (rt !== null);
  if (M & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (kf(e, i),
    e === q && ((K = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yr ||
      ((yr = !0),
      ac(Rr, function () {
        return Jt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ce.transition), (Ce.transition = null);
    var o = R;
    R = 1;
    var u = M;
    (M |= 4),
      (No.current = null),
      Md(e, n),
      ec(n, e),
      id(yi),
      (Fr = !!vi),
      (yi = vi = null),
      (e.current = n),
      Rd(n),
      cf(),
      (M = u),
      (R = o),
      (Ce.transition = i);
  } else e.current = n;
  if (
    (yr && ((yr = !1), (rt = e), (qr = l)),
    (i = e.pendingLanes),
    i === 0 && (at = null),
    pf(n.stateNode),
    me(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = Di), (Di = null), e);
  return (
    qr & 1 && e.tag !== 0 && Jt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ii ? Ln++ : ((Ln = 0), (Ii = e))) : (Ln = 0),
    vt(),
    null
  );
}
function Jt() {
  if (rt !== null) {
    var e = $s(qr),
      t = Ce.transition,
      n = R;
    try {
      if (((Ce.transition = null), (R = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (qr = 0), M & 6)) throw Error(g(331));
        var l = M;
        for (M |= 4, x = e.current; x !== null; ) {
          var i = x,
            o = i.child;
          if (x.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (x = c; x !== null; ) {
                  var h = x;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zn(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (x = m);
                  else
                    for (; x !== null; ) {
                      h = x;
                      var p = h.sibling,
                        k = h.return;
                      if ((Ja(h), h === c)) {
                        x = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = k), (x = p);
                        break;
                      }
                      x = k;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var A = S.sibling;
                    (S.sibling = null), (S = A);
                  } while (S !== null);
                }
              }
              x = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (x = o);
          else
            e: for (; x !== null; ) {
              if (((i = x), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (x = f);
                break e;
              }
              x = i.return;
            }
        }
        var a = e.current;
        for (x = a; x !== null; ) {
          o = x;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (x = d);
          else
            e: for (o = a; x !== null; ) {
              if (((u = x), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, u);
                  }
                } catch (E) {
                  B(u, u.return, E);
                }
              if (u === o) {
                x = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (x = y);
                break e;
              }
              x = u.return;
            }
        }
        if (
          ((M = l), vt(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (Ce.transition = t);
    }
  }
  return !1;
}
function Uu(e, t, n) {
  (t = rn(n, t)),
    (t = $a(e, t, 1)),
    (e = st(e, t, 1)),
    (t = ue()),
    e !== null && (Gn(e, 1, t), me(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Uu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Uu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (at === null || !at.has(r)))
        ) {
          (e = rn(n, e)),
            (e = Ha(t, e, 1)),
            (t = st(t, e, 1)),
            (e = ue()),
            t !== null && (Gn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $d(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (X === 4 || (X === 3 && (ee & 130023424) === ee && 500 > Z() - Po)
        ? Ct(e, 0)
        : (_o |= n)),
    me(e, t);
}
function uc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ye(e, t)), e !== null && (Gn(e, t, n), me(e, n));
}
function Hd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), uc(e, n);
}
function Ud(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), uc(e, n);
}
var sc;
sc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), zd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), V && t.flags & 1048576 && da(t, Br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pr(e, t), (e = t.pendingProps);
      var l = bt(t, ie.current);
      Gt(t, n), (l = wo(null, t, r, e, l, n));
      var i = So();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((i = !0), Hr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ho(t),
            (l.updater = fl),
            (t.stateNode = l),
            (l._reactInternals = t),
            _i(t, r, e, n),
            (t = zi(null, t, r, !0, i, n)))
          : ((t.tag = 0), V && i && uo(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Wd(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = ji(null, t, r, e, n);
            break e;
          case 1:
            t = Ou(null, t, r, e, n);
            break e;
          case 11:
            t = Tu(null, t, r, e, n);
            break e;
          case 14:
            t = Lu(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        ji(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ou(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Qa(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ga(e, t),
          Zr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = rn(Error(g(423)), t)), (t = Mu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(g(424)), t)), (t = Mu(e, t, r, n, l));
            break e;
          } else
            for (
              ve = ut(t.stateNode.containerInfo.firstChild),
                ye = t,
                V = !0,
                Oe = null,
                n = va(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ka(t),
        e === null && Ei(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        gi(r, l) ? (o = null) : i !== null && gi(r, i) && (t.flags |= 32),
        Wa(e, t),
        oe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ei(t), null;
    case 13:
      return Za(e, t, n);
    case 4:
      return (
        vo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Tu(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          F(Wr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ae(i.value, o)) {
            if (i.children === l.children && !de.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ci(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(g(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ci(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Gt(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Lu(e, t, r, l, n)
      );
    case 15:
      return Ua(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Pr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Hr(t)) : (e = !1),
        Gt(t, n),
        Va(t, r, l),
        _i(t, r, l, n),
        zi(null, t, r, !0, e, n)
      );
    case 19:
      return Ka(e, t, n);
    case 22:
      return Ba(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function ac(e, t) {
  return Fs(e, t);
}
function Bd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new Bd(e, t, n, r);
}
function Lo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Wd(e) {
  if (typeof e == "function") return Lo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xi)) return 11;
    if (e === Gi) return 14;
  }
  return 2;
}
function ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Tr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Lo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case At:
        return Nt(n.children, l, i, t);
      case Yi:
        (o = 8), (l |= 8);
        break;
      case Gl:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = Gl), (e.lanes = i), e
        );
      case Jl:
        return (e = Ee(13, n, t, l)), (e.elementType = Jl), (e.lanes = i), e;
      case ql:
        return (e = Ee(19, n, t, l)), (e.elementType = ql), (e.lanes = i), e;
      case ks:
        return ml(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ys:
              o = 10;
              break e;
            case gs:
              o = 9;
              break e;
            case Xi:
              o = 11;
              break e;
            case Gi:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Nt(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function ml(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = ks),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Kl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Qd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pl(0)),
    (this.expirationTimes = Pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Oo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Qd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ee(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(i),
    e
  );
}
function Zd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function cc(e) {
  if (!e) return pt;
  e = e._reactInternals;
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return ca(e, n, t);
  }
  return t;
}
function fc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Oo(n, r, !0, e, l, i, o, u, s)),
    (e.context = cc(null)),
    (n = e.current),
    (r = ue()),
    (l = ct(n)),
    (i = Qe(r, l)),
    (i.callback = t ?? null),
    st(n, i, l),
    (e.current.lanes = l),
    Gn(e, l, r),
    me(e, r),
    e
  );
}
function hl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    o = ct(l);
  return (
    (n = cc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = st(l, t, o)),
    e !== null && (Re(e, l, o, i), Cr(e, l, o)),
    o
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Mo(e, t) {
  Bu(e, t), (e = e.alternate) && Bu(e, t);
}
function Kd() {
  return null;
}
var dc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ro(e) {
  this._internalRoot = e;
}
vl.prototype.render = Ro.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  hl(e, t, null, null);
};
vl.prototype.unmount = Ro.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      hl(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && Qs(e);
  }
};
function Ao(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wu() {}
function Yd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = el(o);
        i.call(c);
      };
    }
    var o = fc(t, r, e, 0, null, !1, !1, "", Wu);
    return (
      (e._reactRootContainer = o),
      (e[Ke] = o.current),
      $n(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Oo(e, 0, !1, null, null, !1, !1, "", Wu);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      hl(t, s, n, r);
    }),
    s
  );
}
function gl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = el(o);
        u.call(s);
      };
    }
    hl(t, o, e, l);
  } else o = Yd(n, t, e, l, r);
  return el(o);
}
Hs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 &&
          (bi(t, n | 1), me(t, Z()), !(M & 6) && ((ln = Z() + 500), vt()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ue();
          Re(r, e, 1, l);
        }
      }),
        Mo(e, 1);
  }
};
eo = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ue();
      Re(t, e, 134217728, n);
    }
    Mo(e, 134217728);
  }
};
Us = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = ue();
      Re(n, e, t, r);
    }
    Mo(e, t);
  }
};
Bs = function () {
  return R;
};
Ws = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
si = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ti(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(g(90));
            Ss(r), ti(r, l);
          }
        }
      }
      break;
    case "textarea":
      Es(e, n);
      break;
    case "select":
      (t = n.value), t != null && Zt(e, !!n.multiple, t, !1);
  }
};
Ts = jo;
Ls = Tt;
var Xd = { usingClientEntryPoint: !1, Events: [qn, Vt, sl, js, zs, jo] },
  gn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Gd = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Kd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (ll = gr.inject(Gd)), (Ve = gr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xd;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ao(t)) throw Error(g(200));
  return Zd(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!Ao(e)) throw Error(g(299));
  var n = !1,
    r = "",
    l = dc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Oo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    new Ro(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = Rs(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return Tt(e);
};
ke.hydrate = function (e, t, n) {
  if (!yl(t)) throw Error(g(200));
  return gl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!Ao(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = dc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = fc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ke] = t.current),
    $n(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new vl(t);
};
ke.render = function (e, t, n) {
  if (!yl(t)) throw Error(g(200));
  return gl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Tt(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = jo;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return gl(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function pc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc);
    } catch (e) {
      console.error(e);
    }
}
pc(), (ps.exports = ke);
var Jd = ps.exports,
  mc,
  Qu = Jd;
(mc = Qu.createRoot), Qu.hydrateRoot;
const qd = ({ setId: e }) => {
    const [t, n] = Ne.useState(1),
      r = (l) => {
        e(l), n(l);
      };
    return v.jsxs("div", {
      className:
        "flex flex-col md:flex-row font-bold select-none px-6 py-4 w-full",
      children: [
        v.jsxs("div", {
          className: "mb-4 md:mb-0 md:mr-auto px-2",
          children: [
            v.jsx("p", { className: "text-xl", children: "Aaron Kairavuo" }),
            v.jsx("p", {
              className: "text-sm opacity-50 italic -mt-1",
              children: "- Portfolio",
            }),
          ],
        }),
        v.jsxs("div", {
          className: "hidden md:flex ml-auto my-auto gap-4",
          children: [
            v.jsx("button", {
              onClick: () => r(1),
              className: `px-5 py-1.5 rounded-md ${
                t === 1 ? "bg-white/5" : "hover:bg-white/10"
              }`,
              children: "Minusta",
            }),
            v.jsx("button", {
              onClick: () => r(2),
              className: `px-5 py-1.5 rounded-md ${
                t === 2 ? "bg-white/5" : "hover:bg-white/10"
              }`,
              children: "Taitojani",
            }),
            v.jsx("button", {
              onClick: () => r(3),
              className: `px-5 py-1.5 rounded-md ${
                t === 3 ? "bg-white/5" : "hover:bg-white/10"
              }`,
              children: "Projektit",
            }),
            v.jsx("button", {
              onClick: () => r(4),
              className: `px-5 py-1.5 rounded-md ${
                t === 4 ? "bg-white/5" : "hover:bg-white/10"
              }`,
              children: "Yhteystiedot",
            }),
          ],
        }),
      ],
    });
  },
  Yl = () =>
    v.jsx(v.Fragment, {
      children: v.jsx("div", {
        className: "flex items-center justify-center px-4",
        children: v.jsxs("div", {
          className: "max-w-2xl mt-[8%]",
          children: [
            v.jsx("p", {
              className: "text-4xl font-bold mb-4 text-left",
              children: "Kuka olen?",
            }),
            v.jsxs("p", {
              className: "text-lg md:text-xl leading-relaxed",
              children: [
                v.jsx("span", { className: "opacity-70", children: "Olen " }),
                v.jsx("span", {
                  className: "font-bold ",
                  children: "ohjelmistokehittäjäopiskelija",
                }),
                " ",
                v.jsx("span", {
                  className: "opacity-70",
                  children:
                    "ja kiinnostunut tietotekniikasta sekä koodaamisesta. Koodaamisen monimuotoisuus kiehtoo, ja vapaa-ajalla teen projekteja sekä suunnittelen uusia. Osaan myös rakentaa ja huoltaa tietokoneita. Olen toisen vuoden opiskelija ja haluan oppia lisää työn kautta. Olen innokas kehittymään ja oppimaan uutta.",
                }),
              ],
            }),
            v.jsxs("div", {
              className: "",
              children: [
                v.jsx("p", {
                  className: "text-2xl font-bold mb-4 text-left mt-10",
                  children: "Saavutuksiani",
                }),
                v.jsxs("div", {
                  className: "flex  gap-10",
                  children: [
                    v.jsxs("div", {
                      className: "",
                      children: [
                        v.jsx("p", {
                          className: "font-semibold text-xl opacity-80",
                          children: "Koulunäytöt",
                        }),
                        v.jsxs("ul", {
                          className: "mt-1",
                          children: [
                            v.jsx("li", {
                              className:
                                "hover:opacity-100 opacity-50 select-none cursor-default",
                              children: "Ohjelmointi, 5",
                            }),
                            v.jsx("li", {
                              className:
                                "hover:opacity-100 opacity-50 select-none cursor-default",
                              children: "Työssätoimiminen, 5",
                            }),
                          ],
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "",
                      children: [
                        v.jsx("p", {
                          className: "font-semibold text-xl opacity-80",
                          children: "Sertifikaatit",
                        }),
                        v.jsx("ul", {
                          className: "mt-1",
                          children: v.jsx("a", {
                            href: "https://eu.credential.net/325b2af7-5b84-480d-ae70-9cd1fb04def4#gs.incpmn",
                            title: "Sertifikaattiin",
                            children: v.jsx("li", {
                              className:
                                "hover:opacity-100 opacity-50 select-none cursor-pointer",
                              children: "DevSecLab, Myönnetty 12.2.2024",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Zu = () =>
    v.jsx(v.Fragment, {
      children: v.jsx("div", {
        className: "flex items-center px-4 sm:px-6 lg:px-16 justify-center ",
        children: v.jsxs("div", {
          className: "max-w-4xl mt-[8%]",
          children: [
            v.jsx("p", {
              className: "text-3xl sm:text-4xl font-bold mb-4 text-left",
              children: "Taitojani",
            }),
            v.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsx("p", {
                      className: "font-semibold text-xl sm:text-2xl",
                      children: "Koodaaminen",
                    }),
                    v.jsx("ul", {
                      className: `\r
              `,
                      children: [
                        "React",
                        "JavaScript",
                        "Python",
                        "MySQL",
                        "CSS / Tailwind",
                        "Jest-testus",
                        "Cypress-testaus",
                        "Azure",
                        "AWS",
                        "Git",
                        "Docker",
                        "React-Native, alkeet",
                        "Unity, C#",
                        "Three.js",
                      ].map((e, t) =>
                        v.jsx(
                          "li",
                          {
                            className:
                              "hover:opacity-100 opacity-50 select-none cursor-default transition-opacity duration-200",
                            children: e,
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("p", {
                      className: "font-semibold text-xl sm:text-2xl",
                      children: "Muuta",
                    }),
                    v.jsx("ul", {
                      className: "",
                      children: [
                        "MS sovellukset",
                        "LibreOfficen sovellukset",
                        "SSH yhteyden ottaminen",
                        "Wordpress-sivuston luonti",
                        "Wordpress-pluginin luonti",
                        "Figma / Adobe XD käyttöliittymäsuunnittelu",
                        "Tietokantojen suunnittelu ja luonti",
                        "Tietokoneiden rakentaminen sekä huolto",
                        "Windows, Linux sekä MacOS tuntemus",
                      ].map((e, t) =>
                        v.jsx(
                          "li",
                          {
                            className:
                              "hover:opacity-100 opacity-50 select-none cursor-default transition-opacity duration-200",
                            children: e,
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("p", {
                      className: "font-semibold text-xl sm:text-2xl",
                      children: "Onnistuu myös",
                    }),
                    v.jsx("ul", {
                      className: "",
                      children: [
                        "Valo- /Videokuvaus",
                        "Valo- /Videoeditointi",
                        "Sisällön suunnittelu ja tuontanto",
                      ].map((e, t) =>
                        v.jsx(
                          "li",
                          {
                            className:
                              "hover:opacity-100 opacity-50 select-none cursor-default transition-opacity duration-200",
                            children: e,
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  bd = [
    {
      Name: "CarparkPy",
      description:
        "Carparkpy on parkkipaikkojen löytämiseen ja tilastointiin tehty sovellus joka kertoo montako ruutua on parkkipaikalla vapana tai varattuna. Reposta löydät paremmin tietoja.",
      tools: "React, Tailwind, Api, Ui-kirjasto, Python, YOLO",
      link: "https://github.com/Arskakoo/carparkpy-app",
      demo: "https://carparkpy.vercel.app",
      date: "26.11.2024",
    },
    {
      Name: "Sulake",
      description: "Sulake on pörssisähkön hinnan kerronta PWA-sovellus.",
      tools: "React, Tailwind, Api, Ui-kirjasto",
      link: "https://github.com/Arskakoo/sulakeapp",
      demo: "https://arskakoo.github.io/sulakeapp/",
      date: "6.6.2024",
    },
    {
      Name: "Avaruuspeli",
      description:
        "Unityllä sekä c# toteutettu avaruuspeli missä tarkoituksena on tuhota vastustajat ennenkuin he osuvat koti planeettaasi.",
      tools: "C#, Unity",
      link: "https://github.com/Arskakoo/Avaruuspeli",
      demo: "https://arskakoo.github.io/Avaruuspeli/",
      date: "6.9.2024",
    },
    {
      Name: "Shelly pörssisähkö",
      description:
        "Shelly 3 Pro:hon kehitetty pörssisähkönhintaan mukautuva skripti. Reagoi pörssisähkönhintaan sulkien että avaten releitä.",
      tools: "JavaScript, Espurino",
      link: "https://github.com/Saow/Shelly3Pro-porssisahko",
      demo: "#",
      date: "20.2.2024",
    },
    {
      Name: "Donitsi",
      description:
        "Three.js:llä toteutettu pyörivä donitisi. Three.js:llä lisättyt valot, pyörimisanimaatio sekä kamerankulma.",
      tools: "Three.js",
      link: "https://github.com/Arskakoo/donitsi",
      demo: "https://arskakoo.github.io/donitsi/",
      date: "23.5.2024",
    },
    {
      Name: "Glide",
      description:
        "Glide on frisbeegolffareille tarkoitettu sovellus jolla voi helposti tarkistaa peli kulku.",
      tools: "React, Tailwind, UI-kirjasto",
      link: "https://github.com/Arskakoo/Glideapp",
      demo: "https://arskakoo.github.io/Glideapp/",
      date: "25.6.2024",
    },
  ],
  e0 = () =>
    v.jsx("div", {
      className: "flex flex-col items-center justify-center min-h-screen px-4",
      children: v.jsxs("div", {
        className: "max-w-4xl",
        children: [
          v.jsx("p", {
            className:
              "text-4xl mt-24 font-bold pb-6 text-left border-b border-white/10",
            children: "Projektit",
          }),
          v.jsx("div", {
            className: "",
            children: bd.map((e, t) =>
              v.jsxs(
                "div",
                {
                  className: "p-5 flex border-b border-white/10",
                  children: [
                    v.jsxs("div", {
                      className: "w-2/3",
                      children: [
                        v.jsx("p", {
                          className: "text-2xl opacity-80 font-bold mb-2",
                          children: e.Name,
                        }),
                        v.jsx("p", {
                          className: " text-gray-500 mx-1",
                          children: e.description,
                        }),
                        v.jsx("p", {
                          className:
                            "font-semibold text-sm text-gray-500/80 py-1 mx-1",
                          children: e.tools,
                        }),
                        v.jsx("p", {
                          className:
                            "font-bold text-sm text-gray-500/60 mb-3 mx-1",
                          children: e.date,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "flex space-x-4 ml-auto my-auto",
                      children: [
                        e.link !== "#" &&
                          v.jsx("a", {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "px-4 py-2 bg-black/30 text-white rounded-md hover:opacity-50 opacity-80",
                            children: "Repo",
                          }),
                        e.demo !== "#" &&
                          v.jsx("a", {
                            href: e.demo,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "px-4 py-2 bg-white/10  text-white rounded-md hover:opacity-50 opacity-80",
                            children: "Demo",
                          }),
                      ],
                    }),
                  ],
                },
                t
              )
            ),
          }),
        ],
      }),
    });
var t0 = Object.defineProperty,
  tl = Object.getOwnPropertySymbols,
  hc = Object.prototype.hasOwnProperty,
  vc = Object.prototype.propertyIsEnumerable,
  Ku = (e, t, n) =>
    t in e
      ? t0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  n0 = (e, t) => {
    for (var n in t || (t = {})) hc.call(t, n) && Ku(e, n, t[n]);
    if (tl) for (var n of tl(t)) vc.call(t, n) && Ku(e, n, t[n]);
    return e;
  },
  r0 = (e, t) => {
    var n = {};
    for (var r in e) hc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && tl)
      for (var r of tl(e)) t.indexOf(r) < 0 && vc.call(e, r) && (n[r] = e[r]);
    return n;
  };
const yc = Ne.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: l = "currentColor",
      size: i = "1em",
      weight: o = "regular",
      mirrored: u = !1,
      children: s,
      weights: c,
    } = n,
    h = r0(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]);
  return j.createElement(
    "svg",
    n0(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        fill: l,
        viewBox: "0 0 256 256",
        transform: u ? "scale(-1, 1)" : void 0,
      },
      h
    ),
    !!r && j.createElement("title", null, r),
    s,
    c.get(o)
  );
});
yc.displayName = "SSRBase";
const l0 = yc,
  i0 = new Map([
    [
      "bold",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z",
        })
      ),
    ],
    [
      "duotone",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z",
          opacity: "0.2",
        }),
        j.createElement("path", {
          d: "M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z",
        })
      ),
    ],
    [
      "fill",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z",
        })
      ),
    ],
    [
      "light",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z",
        })
      ),
    ],
    [
      "regular",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z",
        })
      ),
    ],
    [
      "thin",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z",
        })
      ),
    ],
  ]),
  o0 = new Map([
    [
      "bold",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z",
        })
      ),
    ],
    [
      "duotone",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",
          opacity: "0.2",
        }),
        j.createElement("path", {
          d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
        })
      ),
    ],
    [
      "fill",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z",
        })
      ),
    ],
    [
      "light",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z",
        })
      ),
    ],
    [
      "regular",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
        })
      ),
    ],
    [
      "thin",
      j.createElement(
        j.Fragment,
        null,
        j.createElement("path", {
          d: "M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z",
        })
      ),
    ],
  ]);
var u0 = Object.defineProperty,
  s0 = Object.defineProperties,
  a0 = Object.getOwnPropertyDescriptors,
  Yu = Object.getOwnPropertySymbols,
  c0 = Object.prototype.hasOwnProperty,
  f0 = Object.prototype.propertyIsEnumerable,
  Xu = (e, t, n) =>
    t in e
      ? u0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  d0 = (e, t) => {
    for (var n in t || (t = {})) c0.call(t, n) && Xu(e, n, t[n]);
    if (Yu) for (var n of Yu(t)) f0.call(t, n) && Xu(e, n, t[n]);
    return e;
  },
  p0 = (e, t) => s0(e, a0(t));
const gc = Ne.forwardRef((e, t) =>
  j.createElement(l0, p0(d0({ ref: t }, e), { weights: o0 }))
);
gc.displayName = "LinkedinLogo";
const m0 = Ne.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1,
});
var h0 = Object.defineProperty,
  nl = Object.getOwnPropertySymbols,
  kc = Object.prototype.hasOwnProperty,
  wc = Object.prototype.propertyIsEnumerable,
  Gu = (e, t, n) =>
    t in e
      ? h0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ju = (e, t) => {
    for (var n in t || (t = {})) kc.call(t, n) && Gu(e, n, t[n]);
    if (nl) for (var n of nl(t)) wc.call(t, n) && Gu(e, n, t[n]);
    return e;
  },
  qu = (e, t) => {
    var n = {};
    for (var r in e) kc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && nl)
      for (var r of nl(e)) t.indexOf(r) < 0 && wc.call(e, r) && (n[r] = e[r]);
    return n;
  };
const Sc = Ne.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: l,
      size: i,
      weight: o,
      mirrored: u,
      children: s,
      weights: c,
    } = n,
    h = qu(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]),
    m = Ne.useContext(m0),
    {
      color: p = "currentColor",
      size: k,
      weight: w = "regular",
      mirrored: S = !1,
    } = m,
    A = qu(m, ["color", "size", "weight", "mirrored"]);
  return j.createElement(
    "svg",
    Ju(
      Ju(
        {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: i ?? k,
          height: i ?? k,
          fill: l ?? p,
          viewBox: "0 0 256 256",
          transform: u || S ? "scale(-1, 1)" : void 0,
        },
        A
      ),
      h
    ),
    !!r && j.createElement("title", null, r),
    s,
    c.get(o ?? w)
  );
});
Sc.displayName = "IconBase";
const v0 = Sc;
var y0 = Object.defineProperty,
  g0 = Object.defineProperties,
  k0 = Object.getOwnPropertyDescriptors,
  bu = Object.getOwnPropertySymbols,
  w0 = Object.prototype.hasOwnProperty,
  S0 = Object.prototype.propertyIsEnumerable,
  es = (e, t, n) =>
    t in e
      ? y0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  x0 = (e, t) => {
    for (var n in t || (t = {})) w0.call(t, n) && es(e, n, t[n]);
    if (bu) for (var n of bu(t)) S0.call(t, n) && es(e, n, t[n]);
    return e;
  },
  E0 = (e, t) => g0(e, k0(t));
const xc = Ne.forwardRef((e, t) =>
  j.createElement(v0, E0(x0({ ref: t }, e), { weights: i0 }))
);
xc.displayName = "GithubLogo";
const ts = () =>
  v.jsx(v.Fragment, {
    children: v.jsx("div", {
      className: "flex items-center justify-center  px-4 sm:px-8 lg:px-16",
      children: v.jsxs("div", {
        className: "max-w-4xl mt-[10%]",
        children: [
          v.jsx("p", {
            className: "text-4xl font-bold mb-4 text-left",
            children: "Yhteystietoni",
          }),
          v.jsxs("p", {
            className: "text-lg md:text-xl leading-relaxed",
            children: [
              v.jsx("div", {
                className: "",
                children: v.jsxs("p", {
                  className: "opacity-60",
                  children: [
                    "Sähköposti:",
                    " ",
                    v.jsx("a", {
                      href: "mailto:aaron.kairavuo@gmail.com",
                      className: "hover:underline text-white",
                      children: "Aaron.kairavuo@gmail.com",
                    }),
                  ],
                }),
              }),
              v.jsxs("div", {
                className: "flex gap-5 mt-5",
                children: [
                  v.jsx("a", {
                    href: "https://github.com/Arskakoo",
                    target: "_blank",
                    className: "hover:opacity-50",
                    children: v.jsx(xc, { size: 34 }),
                  }),
                  v.jsx("a", {
                    href: "https://www.linkedin.com/in/aaronkairavuo/",
                    target: "_blank",
                    className: "hover:opacity-50",
                    children: v.jsx(gc, { size: 32 }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
function C0() {
  const [e, t] = Ne.useState(1),
    n = () => {
      switch (e) {
        case 1:
          return v.jsx(Yl, {});
        case 2:
          return v.jsx(Zu, {});
        case 3:
          return v.jsx(e0, {});
        case 4:
          return v.jsx(ts, {});
        default:
          return v.jsx(Yl, {});
      }
    };
  return v.jsxs(v.Fragment, {
    children: [
      v.jsx("header", { children: v.jsx(qd, { setId: t }) }),
      v.jsxs("main", {
        children: [
          v.jsx("div", { className: "desktop-only", children: n() }),
          v.jsxs("div", {
            className: "mobile-only ",
            children: [
              v.jsx(Yl, {}),
              v.jsx(Zu, { className: "" }),
              v.jsx("p", {
                className:
                  "text-center font-bold text-red-400/80 text-xl mt-10",
                children: "Projektit näkyvät tietokoneella!",
              }),
              v.jsxs("p", {
                className:
                  "text-center font-semibold text-gray-400/80 text-md mb-10",
                children: ["Mutta tulevaisuudessa ehkä tässä", " "],
              }),
              v.jsx(ts, {}),
            ],
          }),
        ],
      }),
      v.jsx("footer", {}),
    ],
  });
}
mc(document.getElementById("root")).render(
  v.jsx(Ne.StrictMode, { children: v.jsx(C0, {}) })
);
