import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "sidebar-container": {
        "color": "#bfbfbf",
        "fontSize": 14
    },
    "sidebar-container h5": {
        "color": "#808080",
        "paddingBottom": 1
    },
    "sidebar-container h5 a": {
        "color": "#808080 !important",
        "textDecoration": "none"
    },
    "sidebar-container a": {
        "color": "#bfbfbf !important"
    },
    "sidebar-container a:hover": {
        "color": "#0085a1 !important"
    },
    "sidebar-container a:active": {
        "color": "#0085a1 !important"
    },
    "sidebar-container tags a": {
        "borderColor": "#bfbfbf"
    },
    "sidebar-container tags a:hover": {
        "borderColor": "#0085a1"
    },
    "sidebar-container tags a:active": {
        "borderColor": "#0085a1"
    },
    "sidebar-container short-about img": {
        "width": "80%",
        "display": "block",
        "borderRadius": 5,
        "marginBottom": 20
    },
    "sidebar-container short-about p": {
        "marginTop": 0,
        "marginBottom": 20
    },
    "sidebar-container short-about list-inline > li": {
        "paddingLeft": 0
    },
    "catalog-container": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "side-catalog": {
        "display": "block",
        "overflow": "auto",
        "height": "100%",
        "paddingBottom": 40,
        "width": 195
    },
    "side-catalogfixed": {
        "position": "fixed",
        "top": -21
    },
    "side-catalogfold catalog-toggle::before": {
        "content": "+"
    },
    "side-catalogfold catalog-body": {
        "display": "none"
    },
    "side-catalog catalog-toggle::before": {
        "content": "−",
        "position": "relative",
        "marginRight": 5,
        "bottom": 1
    },
    "side-catalog catalog-body": {
        "position": "relative",
        "listStyle": "none",
        "height": "auto",
        "overflow": "hidden",
        "paddingLeft": 0,
        "paddingRight": 5,
        "textIndent": 0
    },
    "side-catalog catalog-body li": {
        "position": "relative",
        "listStyle": "none"
    },
    "side-catalog catalog-body li a": {
        "paddingLeft": 10,
        "maxWidth": 180,
        "display": "inline-block",
        "verticalAlign": "middle",
        "height": 30,
        "lineHeight": 30,
        "overflow": "hidden",
        "textDecoration": "none",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis"
    },
    "side-catalog catalog-body h1_nav": {
        "marginLeft": 0,
        "fontSize": 13,
        "fontWeight": "bold"
    },
    "side-catalog catalog-body h2_nav": {
        "marginLeft": 0,
        "fontSize": 13,
        "fontWeight": "bold"
    },
    "side-catalog catalog-body h3_nav": {
        "marginLeft": 0,
        "fontSize": 13,
        "fontWeight": "bold"
    },
    "side-catalog catalog-body h4_nav": {
        "marginLeft": 10,
        "fontSize": 12
    },
    "side-catalog catalog-body h5_nav": {
        "marginLeft": 10,
        "fontSize": 12
    },
    "side-catalog catalog-body h6_nav": {
        "marginLeft": 10,
        "fontSize": 12
    },
    "side-catalog catalog-body h4_nav a": {
        "maxWidth": 170
    },
    "side-catalog catalog-body h5_nav a": {
        "maxWidth": 170
    },
    "side-catalog catalog-body h6_nav a": {
        "maxWidth": 170
    },
    "side-catalog catalog-body active": {
        "borderRadius": 4,
        "backgroundColor": "#F5F5F5"
    },
    "side-catalog catalog-body active a": {
        "color": "#0085a1!important"
    },
    "body": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.7,
        "fontSize": 16,
        "color": "#404040",
        "overflowX": "hidden",
        "webkitTapHighlightColor": "#0085a1"
    },
    "p": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "h1": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.1,
        "fontWeight": "bold"
    },
    "h2": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.1,
        "fontWeight": "bold"
    },
    "h3": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.1,
        "fontWeight": "bold"
    },
    "h4": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.1,
        "fontWeight": "bold",
        "fontSize": 21
    },
    "h5": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.1,
        "fontWeight": "bold"
    },
    "h6": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.1,
        "fontWeight": "bold"
    },
    "a": {
        "color": "#404040"
    },
    "a:hover": {
        "color": "#0085a1"
    },
    "a:focus": {
        "color": "#0085a1"
    },
    "a img:hover": {
        "cursor": "zoom-in"
    },
    "a img:focus": {
        "cursor": "zoom-in"
    },
    "article": {
        "overflowX": "hidden"
    },
    "blockquote": {
        "color": "#808080",
        "fontStyle": "italic",
        "fontSize": 0.95,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "blockquote p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "smallimg-hint": {
        "display": "block",
        "marginTop": -20,
        "textAlign": "center"
    },
    "br + smallimg-hint": {
        "marginTop": -40
    },
    "imgshadow": {
        "boxShadow": "rgba(0, 0, 0, 0.258824) 0px 2px 5px 0px"
    },
    "table th": {
        "border": "1px solid #eee !important"
    },
    "table td": {
        "border": "1px solid #eee !important"
    },
    "hrsmall": {
        "maxWidth": 100,
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto",
        "borderWidth": 4,
        "borderColor": "white"
    },
    "pre": {
        "WebkitOverflowScrolling": "touch"
    },
    "table-responsive": {
        "WebkitOverflowScrolling": "touch"
    },
    "pre code": {
        "display": "block",
        "width": "auto",
        "whiteSpace": "pre",
        "wordWrap": "normal"
    },
    "post-container a": {
        "color": "#337ab7"
    },
    "post-container a:hover": {
        "color": "#0085a1"
    },
    "post-container a:focus": {
        "color": "#0085a1"
    },
    "post-container h1": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "post-container h2": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "post-container h3": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "post-container h4": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "post-container h5": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontSize": 19,
        "fontWeight": "600",
        "color": "gray"
    },
    "post-container h6": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontSize": 16,
        "fontWeight": "600",
        "color": "gray"
    },
    "post-container h5 + p": {
        "marginTop": 5
    },
    "post-container h6 + p": {
        "marginTop": 5
    },
    "post-container ul": {
        "marginBottom": 40
    },
    "post-container ol": {
        "marginBottom": 40
    },
    "post-container ol ol": {
        "marginBottom": 5
    },
    "post-container ol ul": {
        "marginBottom": 5
    },
    "post-container ul ol": {
        "marginBottom": 5
    },
    "post-container ul ul": {
        "marginBottom": 5
    },
    "post-container li p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "post-container li h1": {
        "lineHeight": 2,
        "marginTop": 20
    },
    "post-container li h2": {
        "lineHeight": 2,
        "marginTop": 20
    },
    "post-container li h3": {
        "lineHeight": 2,
        "marginTop": 20
    },
    "post-container li h4": {
        "lineHeight": 2,
        "marginTop": 20
    },
    "post-container li h5": {
        "lineHeight": 2,
        "marginTop": 20
    },
    "post-container li h6": {
        "lineHeight": 2,
        "marginTop": 20
    },
    "navbar-custom": {
        "background": "none",
        "border": "none",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "zIndex": 3,
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.7
    },
    "navbar-custom navbar-brand": {
        "fontWeight": "800",
        "color": "white",
        "height": 56,
        "lineHeight": 25
    },
    "navbar-custom navbar-brand:hover": {
        "color": "rgba(255, 255, 255, 0.8)"
    },
    "navbar-custom nav li a": {
        "textTransform": "uppercase",
        "fontSize": 12,
        "lineHeight": 20,
        "fontWeight": "800",
        "letterSpacing": 1
    },
    "navbar-custom nav li a:active": {
        "background": "rgba(0, 0, 0, 0.12)"
    },
    "intro-header": {
        "background": "no-repeat center center",
        "backgroundColor": "#808080",
        "backgroundAttachment": "scroll",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "marginBottom": 0
    },
    "intro-header site-heading": {
        "paddingTop": 95,
        "paddingRight": 0,
        "paddingBottom": 70,
        "paddingLeft": 0,
        "color": "white",
        "textAlign": "center"
    },
    "intro-header post-heading": {
        "paddingTop": 85,
        "paddingRight": 0,
        "paddingBottom": 55,
        "paddingLeft": 0,
        "color": "white"
    },
    "intro-header page-heading": {
        "paddingTop": 85,
        "paddingRight": 0,
        "paddingBottom": 55,
        "paddingLeft": 0,
        "color": "white",
        "textAlign": "center"
    },
    "intro-header site-heading h1": {
        "marginTop": 0,
        "fontSize": 50
    },
    "intro-header page-heading h1": {
        "marginTop": 0,
        "fontSize": 50
    },
    "intro-header site-heading subheading": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.1,
        "fontSize": 18,
        "display": "block",
        "fontWeight": "300",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "intro-header page-heading subheading": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.1,
        "fontSize": 18,
        "display": "block",
        "fontWeight": "300",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "intro-header post-heading h1": {
        "fontSize": 30,
        "marginBottom": 24
    },
    "intro-header post-heading subheading": {
        "lineHeight": 1.4,
        "display": "block",
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "fontSize": 17,
        "fontWeight": "normal",
        "marginTop": -5,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "intro-header post-heading meta": {
        "lineHeight": 1.1,
        "display": "block",
        "fontFamily": "'Lora', 'Times New Roman', serif",
        "fontStyle": "italic",
        "fontWeight": "300",
        "fontSize": 18
    },
    "intro-header post-heading meta a": {
        "color": "white"
    },
    "post-preview > a": {
        "color": "#404040"
    },
    "post-preview > a:hover": {
        "textDecoration": "none",
        "color": "#0085a1"
    },
    "post-preview > a:focus": {
        "textDecoration": "none",
        "color": "#0085a1"
    },
    "post-preview > a > post-title": {
        "fontSize": 21,
        "lineHeight": 1.3,
        "marginTop": 30,
        "marginBottom": 8
    },
    "post-preview > a > post-subtitle": {
        "fontSize": 15,
        "lineHeight": 1.3,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontWeight": "300"
    },
    "post-preview > post-meta": {
        "fontFamily": "'Lora', 'Times New Roman', serif",
        "color": "#808080",
        "fontSize": 16,
        "fontStyle": "italic",
        "marginTop": 0
    },
    "post-preview > post-meta > a": {
        "textDecoration": "none",
        "color": "#404040"
    },
    "post-preview > post-meta > a:hover": {
        "color": "#0085a1",
        "textDecoration": "underline"
    },
    "post-preview > post-meta > a:focus": {
        "color": "#0085a1",
        "textDecoration": "underline"
    },
    "post-content-preview": {
        "fontSize": 13,
        "fontStyle": "italic",
        "color": "#a3a3a3"
    },
    "post-content-preview:hover": {
        "color": "#0085a1"
    },
    "section-heading": {
        "fontSize": 36,
        "marginTop": 60,
        "fontWeight": "700"
    },
    "caption": {
        "textAlign": "center",
        "fontSize": 14,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontStyle": "italic",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "block",
        "borderBottomRightRadius": 5,
        "borderBottomLeftRadius": 5
    },
    "footer": {
        "fontSize": 20,
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 65,
        "paddingLeft": 0
    },
    "footer list-inline": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer copyright": {
        "fontSize": 14,
        "textAlign": "center",
        "marginBottom": 0
    },
    "footer copyright a": {
        "color": "#337ab7"
    },
    "footer copyright a:hover": {
        "color": "#0085a1"
    },
    "footer copyright a:focus": {
        "color": "#0085a1"
    },
    "floating-label-form-group": {
        "fontSize": 14,
        "position": "relative",
        "marginBottom": 0,
        "paddingBottom": 0.5,
        "borderBottom": "1px solid #eeeeee"
    },
    "floating-label-form-group input": {
        "zIndex": 1,
        "position": "relative",
        "paddingRight": 0,
        "paddingLeft": 0,
        "border": "none",
        "borderRadius": 0,
        "fontSize": 1.5,
        "background": "none",
        "boxShadow": "none !important",
        "resize": "none"
    },
    "floating-label-form-group textarea": {
        "zIndex": 1,
        "position": "relative",
        "paddingRight": 0,
        "paddingLeft": 0,
        "border": "none",
        "borderRadius": 0,
        "fontSize": 1.5,
        "background": "none",
        "boxShadow": "none !important",
        "resize": "none"
    },
    "floating-label-form-group label": {
        "display": "block",
        "zIndex": 0,
        "position": "relative",
        "top": 2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 0.85,
        "lineHeight": 1.764705882,
        "verticalAlign": "baseline",
        "opacity": 0,
        "WebkitTransition": "top 0.3s ease,opacity 0.3s ease",
        "MozTransition": "top 0.3s ease,opacity 0.3s ease",
        "MsTransition": "top 0.3s ease,opacity 0.3s ease",
        "transition": "top 0.3s ease,opacity 0.3s ease"
    },
    "floating-label-form-group::not(:first-child)": {
        "paddingLeft": 14,
        "borderLeft": "1px solid #eeeeee"
    },
    "floating-label-form-group-with-value label": {
        "top": 0,
        "opacity": 1
    },
    "floating-label-form-group-with-focus label": {
        "color": "#0085a1"
    },
    "form row:first-child floating-label-form-group": {
        "borderTop": "1px solid #eeeeee"
    },
    "btn": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.7,
        "textTransform": "uppercase",
        "fontSize": 14,
        "fontWeight": "800",
        "letterSpacing": 1,
        "borderRadius": 0,
        "paddingTop": 15,
        "paddingRight": 25,
        "paddingBottom": 15,
        "paddingLeft": 25
    },
    "btn-lg": {
        "fontSize": 16,
        "paddingTop": 25,
        "paddingRight": 35,
        "paddingBottom": 25,
        "paddingLeft": 35
    },
    "btn-default:hover": {
        "backgroundColor": "#0085a1",
        "border": "1px solid #0085a1",
        "color": "white"
    },
    "btn-default:focus": {
        "backgroundColor": "#0085a1",
        "border": "1px solid #0085a1",
        "color": "white"
    },
    "pager": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": "!important",
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "pager li > a": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.7,
        "textTransform": "uppercase",
        "fontSize": 13,
        "fontWeight": "800",
        "letterSpacing": 1,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "backgroundColor": "white",
        "borderRadius": 0,
        "color": "#404040"
    },
    "pager li > span": {
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.7,
        "textTransform": "uppercase",
        "fontSize": 13,
        "fontWeight": "800",
        "letterSpacing": 1,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "backgroundColor": "white",
        "borderRadius": 0
    },
    "pager li > a:hover": {
        "color": "white",
        "backgroundColor": "#0085a1",
        "border": "1px solid #0085a1"
    },
    "pager li > a:focus": {
        "color": "white",
        "backgroundColor": "#0085a1",
        "border": "1px solid #0085a1"
    },
    "pager disabled > a": {
        "color": "#808080",
        "backgroundColor": "#404040",
        "cursor": "not-allowed"
    },
    "pager disabled > a:hover": {
        "color": "#808080",
        "backgroundColor": "#404040",
        "cursor": "not-allowed"
    },
    "pager disabled > a:focus": {
        "color": "#808080",
        "backgroundColor": "#404040",
        "cursor": "not-allowed"
    },
    "pager disabled > span": {
        "color": "#808080",
        "backgroundColor": "#404040",
        "cursor": "not-allowed"
    },
    "::-moz-selection": {
        "color": "white",
        "textShadow": "none",
        "background": "#0085a1"
    },
    "::selection": {
        "color": "white",
        "textShadow": "none",
        "background": "#0085a1"
    },
    "img::selection": {
        "color": "white",
        "background": "transparent"
    },
    "img::-moz-selection": {
        "color": "white",
        "background": "transparent"
    },
    "tags": {
        "marginBottom": -5
    },
    "tags a": {
        "display": "inline-block",
        "border": "1px solid rgba(255, 255, 255, 0.8)",
        "borderRadius": 999,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "color": "#ffffff",
        "lineHeight": 24,
        "fontSize": 12,
        "textDecoration": "none",
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 6,
        "marginLeft": 1
    },
    "tags tag": {
        "display": "inline-block",
        "border": "1px solid rgba(255, 255, 255, 0.8)",
        "borderRadius": 999,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "color": "#ffffff",
        "lineHeight": 24,
        "fontSize": 12,
        "textDecoration": "none",
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 6,
        "marginLeft": 1
    },
    "tags a:hover": {
        "color": "white",
        "borderColor": "white",
        "backgroundColor": "rgba(255, 255, 255, 0.4)",
        "textDecoration": "none"
    },
    "tags tag:hover": {
        "color": "white",
        "borderColor": "white",
        "backgroundColor": "rgba(255, 255, 255, 0.4)",
        "textDecoration": "none"
    },
    "tags a:active": {
        "color": "white",
        "borderColor": "white",
        "backgroundColor": "rgba(255, 255, 255, 0.4)",
        "textDecoration": "none"
    },
    "tags tag:active": {
        "color": "white",
        "borderColor": "white",
        "backgroundColor": "rgba(255, 255, 255, 0.4)",
        "textDecoration": "none"
    },
    "tag-heading": {
        "paddingTop": 70,
        "paddingRight": 0,
        "paddingBottom": 60,
        "paddingLeft": 0
    },
    "tag_cloud": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "tag_cloud a": {
        "fontSize": 14,
        "border": "none",
        "lineHeight": 28,
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 8,
        "marginLeft": 2,
        "background": "#D6D6D6"
    },
    "tag_cloud tag": {
        "fontSize": 14,
        "border": "none",
        "lineHeight": 28,
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 8,
        "marginLeft": 2,
        "background": "#D6D6D6"
    },
    "tag_cloud a:hover": {
        "backgroundColor": "#0085a1 !important"
    },
    "tag_cloud tag:hover": {
        "backgroundColor": "#0085a1 !important"
    },
    "tag_cloud a:active": {
        "backgroundColor": "#0085a1 !important"
    },
    "tag_cloud tag:active": {
        "backgroundColor": "#0085a1 !important"
    },
    "tag-comments": {
        "fontSize": 12
    },
    "t:first-child": {
        "marginTop": 0
    },
    "listing-seperator": {
        "color": "#0085a1",
        "fontSize": "21px !important"
    },
    "listing-seperator::before": {
        "marginRight": 5
    },
    "one-tag-list tag-text": {
        "fontWeight": "200",
        "fontFamily": "-apple-system, \"Helvetica Neue\", \"Arial\", \"PingFang SC\", \"Hiragino Sans GB\", \"STHeiti\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"Noto Sans CJK SC\", \"Source Han Sans CN\", \"Noto Sans SC\", \"Source Han Sans TC\", \"Noto Sans CJK TC\", \"WenQuanYi Micro Hei\", SimSun, sans-serif",
        "lineHeight": 1.7
    },
    "one-tag-list post-preview": {
        "position": "relative"
    },
    "one-tag-list post-preview > a post-title": {
        "fontSize": 16,
        "fontWeight": "500",
        "marginTop": 20
    },
    "one-tag-list post-preview > a post-subtitle": {
        "fontSize": 12
    },
    "one-tag-list post-preview > post-meta": {
        "position": "absolute",
        "right": 5,
        "bottom": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 12,
        "lineHeight": 12
    },
    "post-container img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "marginTop": 1.5,
        "marginRight": "auto",
        "marginBottom": 1.6,
        "marginLeft": "auto"
    },
    "navbar-default navbar-toggle:focus": {
        "backgroundColor": "inherit"
    },
    "navbar-default navbar-toggle:hover": {
        "backgroundColor": "inherit"
    },
    "navbar-default navbar-toggle:active": {
        "backgroundColor": "rgba(255, 255, 255, 0.25)"
    },
    "navbar-default navbar-toggle": {
        "borderColor": "transparent",
        "paddingTop": 19,
        "paddingRight": 16,
        "paddingBottom": 19,
        "paddingLeft": 16,
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "borderRadius": "50%"
    },
    "navbar-default navbar-toggle icon-bar": {
        "width": 18,
        "borderRadius": 0,
        "backgroundColor": "white"
    },
    "navbar-default navbar-toggle icon-bar + icon-bar": {
        "marginTop": 3
    },
    "comment": {
        "marginTop": 20
    },
    "comment ds-thread ds-reset ads-like-thread-button": {
        "border": "1px solid #ddd",
        "borderRadius": 0,
        "background": "white",
        "boxShadow": "none",
        "textShadow": "none"
    },
    "comment ds-thread ds-reset lids-tab ads-current": {
        "border": "1px solid #ddd",
        "borderRadius": 0,
        "background": "white",
        "boxShadow": "none",
        "textShadow": "none"
    },
    "comment ds-thread ds-reset ds-textarea-wrapper": {
        "background": "none"
    },
    "comment ds-thread ds-reset ds-gradient-bg": {
        "background": "none"
    },
    "ds-smilies-tooltip ulds-smilies-tabs li a": {
        "background": "white !important"
    },
    "page-fullscreen intro-header": {
        "position": "fixed",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%"
    },
    "page-fullscreen tag-heading": {
        "position": "fixed",
        "left": 0,
        "top": 0,
        "paddingBottom": 150,
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "WebkitBoxOrient": "vertical",
        "WebkitBoxPack": "center",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "WebkitJustifyContent": "center",
        "WebkitFlexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "flexDirection": "column"
    },
    "page-fullscreen footer": {
        "position": "absolute",
        "width": "100%",
        "bottom": 0,
        "paddingBottom": 20,
        "opacity": 0.6,
        "color": "#fff"
    },
    "page-fullscreen footer copyright": {
        "color": "#fff"
    },
    "page-fullscreen footer copyright a": {
        "color": "#fff"
    },
    "page-fullscreen footer copyright a:hover": {
        "color": "#ddd"
    }
});