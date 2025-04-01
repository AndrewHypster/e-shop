(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_7a721ff8._.js", {

"[project]/components/link/link.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>A),
    "ABlock": (()=>ABlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
const A = ({ href, children, color = 'white' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: `link link-${color}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/link/link.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
};
_c = A;
const ABlock = ({ href, target = '', children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        target: target,
        className: `link-block`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/link/link.jsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
};
_c1 = ABlock;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "A");
__turbopack_context__.k.register(_c1, "ABlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/input/input.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const InputNum = ({ value, onChange })=>{
    _s();
    const [localValue, setLocalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const minus = ()=>localValue > 1 ? setState(localValue - 1) : setState(1);
    const plus = ()=>localValue < 100 ? setState(localValue + 1) : setState(100);
    const change = (valueInp)=>{
        if (valueInp) {
            if (valueInp < 1) setState(1);
            else if (valueInp > 100) setState(100);
            else setState(valueInp);
        }
    };
    const setState = (newValue)=>{
        setLocalValue(newValue);
        onChange(newValue);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inpt-num",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: minus,
                className: "inpt-num-btn",
                children: "-"
            }, void 0, false, {
                fileName: "[project]/components/input/input.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                onChange: (e)=>change(parseInt(e.target.value)),
                value: localValue,
                min: 1,
                max: 100,
                className: "inpt-num-inpt"
            }, void 0, false, {
                fileName: "[project]/components/input/input.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: plus,
                className: "inpt-num-btn",
                children: "+"
            }, void 0, false, {
                fileName: "[project]/components/input/input.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/input/input.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_s(InputNum, "BZ+50wH6w+4TfbprS/bu3ue6Lp8=");
_c = InputNum;
const __TURBOPACK__default__export__ = InputNum;
var _c;
__turbopack_context__.k.register(_c, "InputNum");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/card/card.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$link$2f$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/link/link.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$input$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/input/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Card = ({ type, firm, name, price, img, link = '#' })=>{
    _s();
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const { openForm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        href: link,
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$link$2f$link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ABlock"], {
                    href: link,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-img",
                            style: {
                                backgroundImage: `url(${img})`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/card/card.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardType, {
                            type: type
                        }, void 0, false, {
                            fileName: "[project]/components/card/card.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/card/card.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/card/card.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "card-kind",
                                children: firm
                            }, void 0, false, {
                                fileName: "[project]/components/card/card.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "card-name",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/components/card/card.jsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card/card.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "card-price",
                        children: [
                            price * quantity,
                            "грн"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card/card.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "card-form",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$input$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: quantity,
                                onChange: setQuantity
                            }, void 0, false, {
                                fileName: "[project]/components/card/card.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "card-btn",
                                onClick: ()=>openForm({
                                        firm,
                                        name,
                                        price,
                                        quantity
                                    }),
                                children: "В кошик"
                            }, void 0, false, {
                                fileName: "[project]/components/card/card.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card/card.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-colors"
                    }, void 0, false, {
                        fileName: "[project]/components/card/card.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/card/card.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/card/card.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_s(Card, "M8GjHUTLSWrGAJlXmtBIdXycqOY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Card;
const CardType = ({ type })=>{
    if (type == 'new') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        className: "card-type card-type-new",
        children: "Новинка"
    }, void 0, false, {
        fileName: "[project]/components/card/card.jsx",
        lineNumber: 48,
        columnNumber: 7
    }, this);
    else if (type == 'top') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        className: "card-type card-type-top",
        children: "Топ"
    }, void 0, false, {
        fileName: "[project]/components/card/card.jsx",
        lineNumber: 52,
        columnNumber: 7
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
};
_c1 = CardType;
const __TURBOPACK__default__export__ = Card;
var _c, _c1;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardType");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shop-db.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"Телефони\":{\"mainImg\":\"https://wo.ua/upload/resize_cache/iblock/889/790_790_1/zshwclg6f2dr3bd50o59id2dhdda4ww3.jpg\",\"desc\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, molestias.\",\"products\":[{\"id\":\"0\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"A65e\",\"price\":5200},{\"id\":\"1\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"S0e\",\"price\":6000},{\"id\":\"2\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"S1+\",\"price\":500},{\"id\":\"3\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"0e\",\"price\":5008},{\"id\":\"4\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"Suye\",\"price\":7000},{\"id\":\"5\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"S1088e\",\"price\":5080},{\"id\":\"6\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"Sf0e\",\"price\":100}]},\"Планшети\":{\"mainImg\":\"https://promax.in.ua/image/cache/webp/catalog/YML0e9ed83a41/planshety-lenovo/IMGe943c26aef87d4258cec551e3acd9c51-600x600.webp\",\"desc\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, molestias.\",\"products\":[{\"id\":\"7\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/0f4/790_790_1/8q7cw37gfdsat8bqibn7muelp6flu7pv.jpg\",\"firm\":\"Sang\",\"name\":\"A65e\",\"price\":8800},{\"id\":\"8\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/0f4/790_790_1/8q7cw37gfdsat8bqibn7muelp6flu7pv.jpg\",\"firm\":\"Sisung\",\"name\":\"S0e\",\"price\":6050},{\"id\":\"9\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/0f4/790_790_1/8q7cw37gfdsat8bqibn7muelp6flu7pv.jpg\",\"firm\":\"Emsung\",\"name\":\"S1+\",\"price\":5007},{\"id\":\"10\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/0f4/790_790_1/8q7cw37gfdsat8bqibn7muelp6flu7pv.jpg\",\"firm\":\"Samgo\",\"name\":\"0e\",\"price\":5558},{\"id\":\"11\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/0f4/790_790_1/8q7cw37gfdsat8bqibn7muelp6flu7pv.jpg\",\"firm\":\"Sung\",\"name\":\"Suye\",\"price\":700}]},\"Телевізори\":{\"mainImg\":\"https://marketing.brain.com.ua/static/articles_icon/7470.png\",\"desc\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, molestias.\",\"products\":[{\"id\":\"12\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/757/790_790_1/d7ue74lmfklh3dhzvwwknchrx2ror6ro.jpg\",\"firm\":\"Sang\",\"name\":\"A65e\",\"price\":88000},{\"id\":\"13\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/757/790_790_1/d7ue74lmfklh3dhzvwwknchrx2ror6ro.jpg\",\"firm\":\"Sisung\",\"name\":\"S0e\",\"price\":60750},{\"id\":\"14\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/757/790_790_1/d7ue74lmfklh3dhzvwwknchrx2ror6ro.jpg\",\"firm\":\"Emsung\",\"name\":\"S1+\",\"price\":50407},{\"id\":\"15\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/757/790_790_1/d7ue74lmfklh3dhzvwwknchrx2ror6ro.jpg\",\"firm\":\"Samgo\",\"name\":\"0e\",\"price\":55658},{\"id\":\"16\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/757/790_790_1/d7ue74lmfklh3dhzvwwknchrx2ror6ro.jpg\",\"firm\":\"Sung\",\"name\":\"Suye\",\"price\":77700}]},\"Електронки\":{\"mainImg\":\"https://getvape.com.ua/image/cachewebp/catalog/XrosPro/vaporesso-xros-pro-black-1-800x800-1000x1000.webp\",\"desc\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, molestias.\",\"products\":[{\"id\":\"12\",\"img\":\"https://getvape.com.ua/image/cachewebp/catalog/Elfx/10-1000x1000.webp\",\"firm\":\"Sang\",\"name\":\"A65e\",\"price\":8800},{\"id\":\"13\",\"img\":\"https://getvape.com.ua/image/cachewebp/catalog/Elfx/10-1000x1000.webp\",\"firm\":\"Sisung\",\"name\":\"S0e\",\"price\":6050},{\"id\":\"14\",\"img\":\"https://getvape.com.ua/image/cachewebp/catalog/Elfx/10-1000x1000.webp\",\"firm\":\"Emsung\",\"name\":\"S1+\",\"price\":5040},{\"id\":\"15\",\"img\":\"https://getvape.com.ua/image/cachewebp/catalog/Elfx/10-1000x1000.webp\",\"firm\":\"Samgo\",\"name\":\"0e\",\"price\":5568},{\"id\":\"16\",\"img\":\"https://getvape.com.ua/image/cachewebp/catalog/Elfx/10-1000x1000.webp\",\"firm\":\"Sung\",\"name\":\"Suye\",\"price\":70}]}}"));}}),
"[project]/components/order-form/form.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$cjs$2f$react$2e$production$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/cjs/react.production.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const OrderForm = ()=>{
    _s();
    const { selectedProduct, closeForm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$cjs$2f$react$2e$production$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [userPhone, setUserPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$cjs$2f$react$2e$production$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const orderText = `
      Нове замовлення\n
      Товар: ${selectedProduct.firm} ${selectedProduct.name}\n
      Ціна за штуку: ${selectedProduct.price}\n
      Кількість: ${selectedProduct.quantity}\n
      Загаальна вартість: ${selectedProduct.price * selectedProduct.quantity}\n\n
      Замовник: ${userName}
      Телефон: ${userPhone}
      `;
        ;
        try {
            const response = await fetch("http://localhost:5000/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: orderText
            });
            const result = await response.json();
            setMessage(result.message);
        } catch (error) {
            setMessage("Помилка при відправці замовлення.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `order-form-bg ${selectedProduct ? "" : "hidden"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "order-form",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "order-form-title",
                    children: "Оформлення замовлення"
                }, void 0, false, {
                    fileName: "[project]/components/order-form/form.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "order-form-text",
                    children: [
                        "Товар: ",
                        selectedProduct?.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/order-form/form.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "order-form-text",
                    children: [
                        "Ціна: ",
                        selectedProduct?.price * selectedProduct?.quantity,
                        "грн"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/order-form/form.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Ваше ім'я",
                    className: "order-form-inpt",
                    onChanche: (e)=>setUserName(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/components/order-form/form.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Телефон",
                    className: "order-form-inpt",
                    onChanche: (e)=>setUserPhone(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/components/order-form/form.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "order-form-btn",
                    children: "Замовити"
                }, void 0, false, {
                    fileName: "[project]/components/order-form/form.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "order-form-btn-close",
                    onClick: closeForm,
                    type: "button",
                    children: "x"
                }, void 0, false, {
                    fileName: "[project]/components/order-form/form.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/order-form/form.jsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/order-form/form.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
};
_s(OrderForm, "v/pwTP6cgjh0qV8bmeWR4JO4Wj4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = OrderForm;
const __TURBOPACK__default__export__ = OrderForm;
var _c;
__turbopack_context__.k.register(_c, "OrderForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/shop/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/card/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shop$2d$db$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/shop-db.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$order$2d$form$2f$form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/order-form/form.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Shop = ()=>{
    _s();
    const pageParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const category = pageParams.get('category') //shop?search=текст
    ;
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$shop$2d$db$2e$json__$28$json$29$__["default"][category]?.products;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "shop",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$order$2d$form$2f$form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/shop/page.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "shop-title",
                children: category
            }, void 0, false, {
                fileName: "[project]/app/shop/page.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "shop-cards",
                children: products?.map((prod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            firm: prod.firm,
                            name: prod.name,
                            price: prod.price,
                            img: prod.img
                        }, void 0, false, {
                            fileName: "[project]/app/shop/page.jsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this)
                    }, prod.id, false, {
                        fileName: "[project]/app/shop/page.jsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/shop/page.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/shop/page.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(Shop, "lS125FlbGvKS4FgqGmNb/rPr0lk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Shop;
const __TURBOPACK__default__export__ = Shop;
var _c;
__turbopack_context__.k.register(_c, "Shop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react.production.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
    if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
    maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
    return "function" === typeof maybeIterable ? maybeIterable : null;
}
var ReactNoopUpdateQueue = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, assign = Object.assign, emptyObject = {};
function Component(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function(partialState, callback) {
    if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, partialState, callback, "setState");
};
Component.prototype.forceUpdate = function(callback) {
    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
function PureComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
}
var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = !0;
var isArrayImpl = Array.isArray, ReactSharedInternals = {
    H: null,
    A: null,
    T: null,
    S: null,
    V: null
}, hasOwnProperty = Object.prototype.hasOwnProperty;
function ReactElement(type, key, self, source, owner, props) {
    self = props.ref;
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        ref: void 0 !== self ? self : null,
        props: props
    };
}
function cloneAndReplaceKey(oldElement, newKey) {
    return ReactElement(oldElement.type, newKey, void 0, void 0, void 0, oldElement.props);
}
function isValidElement(object) {
    return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
}
function escape(key) {
    var escaperLookup = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
    });
}
var userProvidedKeyEscapeRegex = /\/+/g;
function getElementKey(element, index) {
    return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
}
function noop$1() {}
function resolveThenable(thenable) {
    switch(thenable.status){
        case "fulfilled":
            return thenable.value;
        case "rejected":
            throw thenable.reason;
        default:
            switch("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            }, function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            })), thenable.status){
                case "fulfilled":
                    return thenable.value;
                case "rejected":
                    throw thenable.reason;
            }
    }
    throw thenable;
}
function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
    var type = typeof children;
    if ("undefined" === type || "boolean" === type) children = null;
    var invokeCallback = !1;
    if (null === children) invokeCallback = !0;
    else switch(type){
        case "bigint":
        case "string":
        case "number":
            invokeCallback = !0;
            break;
        case "object":
            switch(children.$$typeof){
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                    invokeCallback = !0;
                    break;
                case REACT_LAZY_TYPE:
                    return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
            }
    }
    if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
        return c;
    })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
    invokeCallback = 0;
    var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
    if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
    else if (i = getIteratorFn(children), "function" === typeof i) for(children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
    else if ("object" === type) {
        if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
        array = String(children);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
    }
    return invokeCallback;
}
function mapChildren(children, func, context) {
    if (null == children) return children;
    var result = [], count = 0;
    mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count++);
    });
    return result;
}
function lazyInitializer(payload) {
    if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(function(moduleObject) {
            if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
        }, function(error) {
            if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
        });
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
    }
    if (1 === payload._status) return payload._result.default;
    throw payload._result;
}
var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
    if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error: error
        });
        if (!window.dispatchEvent(event)) return;
    } else if ("object" === typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && "function" === typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("uncaughtException", error);
        return;
    }
    console.error(error);
};
function noop() {}
exports.Children = {
    map: mapChildren,
    forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
        }, forEachContext);
    },
    count: function(children) {
        var n = 0;
        mapChildren(children, function() {
            n++;
        });
        return n;
    },
    toArray: function(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    },
    only: function(children) {
        if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
        return children;
    }
};
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
exports.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(size) {
        return ReactSharedInternals.H.useMemoCache(size);
    }
};
exports.cache = function(fn) {
    return function() {
        return fn.apply(null, arguments);
    };
};
exports.cloneElement = function(element, config, children) {
    if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
    var props = assign({}, element.props), key = element.key, owner = void 0;
    if (null != config) for(propName in void 0 !== config.ref && (owner = void 0), void 0 !== config.key && (key = "" + config.key), config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
    var propName = arguments.length - 2;
    if (1 === propName) props.children = children;
    else if (1 < propName) {
        for(var childArray = Array(propName), i = 0; i < propName; i++)childArray[i] = arguments[i + 2];
        props.children = childArray;
    }
    return ReactElement(element.type, key, void 0, void 0, owner, props);
};
exports.createContext = function(defaultValue) {
    defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
    };
    defaultValue.Provider = defaultValue;
    defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
    };
    return defaultValue;
};
exports.createElement = function(type, config, children) {
    var propName, props = {}, key = null;
    if (null != config) for(propName in void 0 !== config.key && (key = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
    var childrenLength = arguments.length - 2;
    if (1 === childrenLength) props.children = children;
    else if (1 < childrenLength) {
        for(var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
        props.children = childArray;
    }
    if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === props[propName] && (props[propName] = childrenLength[propName]);
    return ReactElement(type, key, void 0, void 0, null, props);
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.forwardRef = function(render) {
    return {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
    };
};
exports.isValidElement = isValidElement;
exports.lazy = function(ctor) {
    return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: {
            _status: -1,
            _result: ctor
        },
        _init: lazyInitializer
    };
};
exports.memo = function(type, compare) {
    return {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: void 0 === compare ? null : compare
    };
};
exports.startTransition = function(scope) {
    var prevTransition = ReactSharedInternals.T, currentTransition = {};
    ReactSharedInternals.T = currentTransition;
    try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
    } catch (error) {
        reportGlobalError(error);
    } finally{
        ReactSharedInternals.T = prevTransition;
    }
};
exports.unstable_useCacheRefresh = function() {
    return ReactSharedInternals.H.useCacheRefresh();
};
exports.use = function(usable) {
    return ReactSharedInternals.H.use(usable);
};
exports.useActionState = function(action, initialState, permalink) {
    return ReactSharedInternals.H.useActionState(action, initialState, permalink);
};
exports.useCallback = function(callback, deps) {
    return ReactSharedInternals.H.useCallback(callback, deps);
};
exports.useContext = function(Context) {
    return ReactSharedInternals.H.useContext(Context);
};
exports.useDebugValue = function() {};
exports.useDeferredValue = function(value, initialValue) {
    return ReactSharedInternals.H.useDeferredValue(value, initialValue);
};
exports.useEffect = function(create, createDeps, update) {
    var dispatcher = ReactSharedInternals.H;
    if ("function" === typeof update) throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return dispatcher.useEffect(create, createDeps);
};
exports.useId = function() {
    return ReactSharedInternals.H.useId();
};
exports.useImperativeHandle = function(ref, create, deps) {
    return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
};
exports.useInsertionEffect = function(create, deps) {
    return ReactSharedInternals.H.useInsertionEffect(create, deps);
};
exports.useLayoutEffect = function(create, deps) {
    return ReactSharedInternals.H.useLayoutEffect(create, deps);
};
exports.useMemo = function(create, deps) {
    return ReactSharedInternals.H.useMemo(create, deps);
};
exports.useOptimistic = function(passthrough, reducer) {
    return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
};
exports.useReducer = function(reducer, initialArg, init) {
    return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
};
exports.useRef = function(initialValue) {
    return ReactSharedInternals.H.useRef(initialValue);
};
exports.useState = function(initialState) {
    return ReactSharedInternals.H.useState(initialState);
};
exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
    return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
exports.useTransition = function() {
    return ReactSharedInternals.H.useTransition();
};
exports.version = "19.1.0-canary-029e8bd6-20250306";
}}),
}]);

//# sourceMappingURL=_7a721ff8._.js.map