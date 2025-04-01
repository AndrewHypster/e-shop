(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_b1388305._.js", {

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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Card = ({ type, firm, name, price, img, link = '#' })=>{
    _s();
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const byProduct = ()=>{};
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
                            lineNumber: 18,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardType, {
                            type: type
                        }, void 0, false, {
                            fileName: "[project]/components/card/card.jsx",
                            lineNumber: 19,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/card/card.jsx",
                    lineNumber: 17,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/card/card.jsx",
                lineNumber: 16,
                columnNumber: 5
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
                                lineNumber: 24,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "card-name",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/components/card/card.jsx",
                                lineNumber: 25,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card/card.jsx",
                        lineNumber: 23,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "card-price",
                        children: [
                            price * quantity,
                            "грн"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card/card.jsx",
                        lineNumber: 27,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "card-form",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$input$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: quantity,
                                onChange: setQuantity
                            }, void 0, false, {
                                fileName: "[project]/components/card/card.jsx",
                                lineNumber: 29,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "card-btn",
                                onClick: byProduct,
                                children: "В кошик"
                            }, void 0, false, {
                                fileName: "[project]/components/card/card.jsx",
                                lineNumber: 30,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/card/card.jsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-colors"
                    }, void 0, false, {
                        fileName: "[project]/components/card/card.jsx",
                        lineNumber: 32,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/card/card.jsx",
                lineNumber: 22,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/card/card.jsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
};
_s(Card, "Qe09P1MkhcuxrUT+4C5s8y/Npkg=");
_c = Card;
const CardType = ({ type })=>{
    if (type == 'new') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        className: "card-type card-type-new",
        children: "Новинка"
    }, void 0, false, {
        fileName: "[project]/components/card/card.jsx",
        lineNumber: 41,
        columnNumber: 7
    }, this);
    else if (type == 'top') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        className: "card-type card-type-top",
        children: "Топ"
    }, void 0, false, {
        fileName: "[project]/components/card/card.jsx",
        lineNumber: 45,
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Shop = ()=>{
    _s();
    const pageParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const category = pageParams.get('category') //shop?search=текст
    ;
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$shop$2d$db$2e$json__$28$json$29$__["default"][category].products;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "shop",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "shop-title",
                children: category
            }, void 0, false, {
                fileName: "[project]/app/shop/page.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "shop-cards",
                children: products.map((prod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$card$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            firm: prod.firm,
                            name: prod.name,
                            price: prod.price,
                            img: prod.img
                        }, void 0, false, {
                            fileName: "[project]/app/shop/page.jsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    }, prod.id, false, {
                        fileName: "[project]/app/shop/page.jsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/shop/page.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/shop/page.jsx",
        lineNumber: 14,
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
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_b1388305._.js.map