module.exports = {

"[project]/components/link/link.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "A": (()=>A),
    "ABlock": (()=>ABlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
const A = ({ href, children, color = 'white' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: `link link-${color}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/link/link.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
};
const ABlock = ({ href, target = '', children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
;
}}),
"[project]/components/input/input.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const InputNum = ({ value, onChange })=>{
    const [localValue, setLocalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inpt-num",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: minus,
                className: "inpt-num-btn",
                children: "-"
            }, void 0, false, {
                fileName: "[project]/components/input/input.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = InputNum;
}}),
"[project]/components/card/card.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$link$2f$link$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/link/link.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$input$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/input/input.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Card = ({ type, firm, name, price, img, link = '#' })=>{
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const { openForm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        href: link,
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$link$2f$link$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ABlock"], {
                    href: link,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-img",
                            style: {
                                backgroundImage: `url(${img})`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/card/card.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardType, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "card-kind",
                                children: firm
                            }, void 0, false, {
                                fileName: "[project]/components/card/card.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "card-form",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$input$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                value: quantity,
                                onChange: setQuantity
                            }, void 0, false, {
                                fileName: "[project]/components/card/card.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "card-btn",
                                onClick: ()=>openForm({
                                        type,
                                        firm,
                                        name,
                                        price
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
const CardType = ({ type })=>{
    if (type == 'new') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        className: "card-type card-type-new",
        children: "Новинка"
    }, void 0, false, {
        fileName: "[project]/components/card/card.jsx",
        lineNumber: 48,
        columnNumber: 7
    }, this);
    else if (type == 'top') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
        className: "card-type card-type-top",
        children: "Топ"
    }, void 0, false, {
        fileName: "[project]/components/card/card.jsx",
        lineNumber: 52,
        columnNumber: 7
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
};
const __TURBOPACK__default__export__ = Card;
}}),
"[project]/shop-db.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"Телефони\":{\"mainImg\":\"https://wo.ua/upload/resize_cache/iblock/889/790_790_1/zshwclg6f2dr3bd50o59id2dhdda4ww3.jpg\",\"desc\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, molestias.\",\"products\":[{\"id\":\"0\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"A65e\",\"price\":5200},{\"id\":\"1\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"S0e\",\"price\":6000},{\"id\":\"2\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"S1+\",\"price\":500},{\"id\":\"3\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"0e\",\"price\":5008},{\"id\":\"4\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"Suye\",\"price\":7000},{\"id\":\"5\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"S1088e\",\"price\":5080},{\"id\":\"6\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/f8a/790_790_1/5uurqr9l3frjysj6eeyj5lirr3j55tyz.jpg\",\"firm\":\"Samsung\",\"name\":\"Sf0e\",\"price\":100}]},\"Планшети\":{\"mainImg\":\"https://promax.in.ua/image/cache/webp/catalog/YML0e9ed83a41/planshety-lenovo/IMGe943c26aef87d4258cec551e3acd9c51-600x600.webp\",\"desc\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, molestias.\",\"products\":[{\"id\":\"7\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/0f4/790_790_1/8q7cw37gfdsat8bqibn7muelp6flu7pv.jpg\",\"firm\":\"Sang\",\"name\":\"A65e\",\"price\":8800},{\"id\":\"8\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/0f4/790_790_1/8q7cw37gfdsat8bqibn7muelp6flu7pv.jpg\",\"firm\":\"Sisung\",\"name\":\"S0e\",\"price\":6050},{\"id\":\"9\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/0f4/790_790_1/8q7cw37gfdsat8bqibn7muelp6flu7pv.jpg\",\"firm\":\"Emsung\",\"name\":\"S1+\",\"price\":5007},{\"id\":\"10\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/0f4/790_790_1/8q7cw37gfdsat8bqibn7muelp6flu7pv.jpg\",\"firm\":\"Samgo\",\"name\":\"0e\",\"price\":5558},{\"id\":\"11\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/0f4/790_790_1/8q7cw37gfdsat8bqibn7muelp6flu7pv.jpg\",\"firm\":\"Sung\",\"name\":\"Suye\",\"price\":700}]},\"Телевізори\":{\"mainImg\":\"https://marketing.brain.com.ua/static/articles_icon/7470.png\",\"desc\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, molestias.\",\"products\":[{\"id\":\"12\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/757/790_790_1/d7ue74lmfklh3dhzvwwknchrx2ror6ro.jpg\",\"firm\":\"Sang\",\"name\":\"A65e\",\"price\":88000},{\"id\":\"13\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/757/790_790_1/d7ue74lmfklh3dhzvwwknchrx2ror6ro.jpg\",\"firm\":\"Sisung\",\"name\":\"S0e\",\"price\":60750},{\"id\":\"14\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/757/790_790_1/d7ue74lmfklh3dhzvwwknchrx2ror6ro.jpg\",\"firm\":\"Emsung\",\"name\":\"S1+\",\"price\":50407},{\"id\":\"15\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/757/790_790_1/d7ue74lmfklh3dhzvwwknchrx2ror6ro.jpg\",\"firm\":\"Samgo\",\"name\":\"0e\",\"price\":55658},{\"id\":\"16\",\"img\":\"https://wo.ua/upload/resize_cache/iblock/757/790_790_1/d7ue74lmfklh3dhzvwwknchrx2ror6ro.jpg\",\"firm\":\"Sung\",\"name\":\"Suye\",\"price\":77700}]},\"Електронки\":{\"mainImg\":\"https://getvape.com.ua/image/cachewebp/catalog/XrosPro/vaporesso-xros-pro-black-1-800x800-1000x1000.webp\",\"desc\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, molestias.\",\"products\":[{\"id\":\"12\",\"img\":\"https://getvape.com.ua/image/cachewebp/catalog/Elfx/10-1000x1000.webp\",\"firm\":\"Sang\",\"name\":\"A65e\",\"price\":8800},{\"id\":\"13\",\"img\":\"https://getvape.com.ua/image/cachewebp/catalog/Elfx/10-1000x1000.webp\",\"firm\":\"Sisung\",\"name\":\"S0e\",\"price\":6050},{\"id\":\"14\",\"img\":\"https://getvape.com.ua/image/cachewebp/catalog/Elfx/10-1000x1000.webp\",\"firm\":\"Emsung\",\"name\":\"S1+\",\"price\":5040},{\"id\":\"15\",\"img\":\"https://getvape.com.ua/image/cachewebp/catalog/Elfx/10-1000x1000.webp\",\"firm\":\"Samgo\",\"name\":\"0e\",\"price\":5568},{\"id\":\"16\",\"img\":\"https://getvape.com.ua/image/cachewebp/catalog/Elfx/10-1000x1000.webp\",\"firm\":\"Sung\",\"name\":\"Suye\",\"price\":70}]}}"));}}),
"[project]/app/shop/page.jsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/app/shop/page.jsx'

Expression expected`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_d6cfb299._.js.map