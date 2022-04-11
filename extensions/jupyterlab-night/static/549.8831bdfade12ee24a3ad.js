"use strict";(self.webpackChunkjupyterlab_night=self.webpackChunkjupyterlab_night||[]).push([[549],{760:(n,e,o)=>{o.d(e,{Z:()=>p});var r=o(645),t=o.n(r),a=o(875),i=t()((function(n){return n[1]}));i.i(a.Z),i.push([n.id,"/* Set the default typography for monospace elements */\ntt,\ncode,\nkbd,\nsamp,\npre {\n  font-family: var(--jp-code-font-family);\n  font-size: var(--jp-code-font-size);\n  line-height: var(--jp-code-line-height);\n}",""]);const p=i},875:(n,e,o)=>{o.d(e,{Z:()=>c});var r=o(645),t=o.n(r),a=o(667),i=o.n(a),p=o(482),l=t()((function(n){return n[1]})),s=i()(p.Z);l.push([n.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n/*\nThe following CSS variables define the main, public API for styling JupyterLab.\nThese variables should be used by all plugins wherever possible. In other\nwords, plugins should not define custom colors, sizes, etc unless absolutely\nnecessary. This enables users to change the visual theme of JupyterLab\nby changing these variables.\n\nMany variables appear in an ordered sequence (0,1,2,3). These sequences\nare designed to work well together, so for example, `--jp-border-color1` should\nbe used with `--jp-layout-color1`. The numbers have the following meanings:\n\n* 0: super-primary, reserved for special emphasis\n* 1: primary, most important under normal situations\n* 2: secondary, next most important under normal situations\n* 3: tertiary, next most important under normal situations\n\nThroughout JupyterLab, we are mostly following principles from Google's\nMaterial Design when selecting colors. We are not, however, following\nall of MD as it is not optimized for dense, information rich UIs.\n*/\n\n@font-face {\n  font-family: 'JetBrains Mono';\n  src: url("+s+") format('truetype');\n}\n\n:root {\n  /* Elevation\n   *\n   * We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:\n   *\n   * https://github.com/material-components/material-components-web\n   * https://material-components-web.appspot.com/elevation.html\n   */\n\n  --jp-night-green: #238635;\n  --jp-night-blue: #59a6ff;\n  --jp-night-orange: #F78166;\n  --jp-night-red: #e94d46;\n  --jp-night-purple: #a371f7;\n\n   --jp-shadow-base-lightness: 32;\n   --jp-shadow-umbra-color: rgba(\n     var(--jp-shadow-base-lightness),\n     var(--jp-shadow-base-lightness),\n     var(--jp-shadow-base-lightness),\n     0.2\n   );\n   --jp-shadow-penumbra-color: rgba(\n     var(--jp-shadow-base-lightness),\n     var(--jp-shadow-base-lightness),\n     var(--jp-shadow-base-lightness),\n     0.14\n   );\n   --jp-shadow-ambient-color: rgba(\n     var(--jp-shadow-base-lightness),\n     var(--jp-shadow-base-lightness),\n     var(--jp-shadow-base-lightness),\n     0.12\n   );\n   --jp-elevation-z0: none;\n   --jp-elevation-z1: 0 2px 1px -1px var(--jp-shadow-umbra-color),\n     0 1px 1px 0 var(--jp-shadow-penumbra-color),\n     0 1px 3px 0 var(--jp-shadow-ambient-color);\n   --jp-elevation-z2: 0 3px 1px -2px var(--jp-shadow-umbra-color),\n     0 2px 2px 0 var(--jp-shadow-penumbra-color),\n     0 1px 5px 0 var(--jp-shadow-ambient-color);\n   --jp-elevation-z4: 0 2px 4px -1px var(--jp-shadow-umbra-color),\n     0 4px 5px 0 var(--jp-shadow-penumbra-color),\n     0 1px 10px 0 var(--jp-shadow-ambient-color);\n   --jp-elevation-z6: 0 3px 5px -1px var(--jp-shadow-umbra-color),\n     0 6px 10px 0 var(--jp-shadow-penumbra-color),\n     0 1px 18px 0 var(--jp-shadow-ambient-color);\n   --jp-elevation-z8: 0 5px 5px -3px var(--jp-shadow-umbra-color),\n     0 8px 10px 1px var(--jp-shadow-penumbra-color),\n     0 3px 14px 2px var(--jp-shadow-ambient-color);\n   --jp-elevation-z12: 0 7px 8px -4px var(--jp-shadow-umbra-color),\n     0 12px 17px 2px var(--jp-shadow-penumbra-color),\n     0 5px 22px 4px var(--jp-shadow-ambient-color);\n   --jp-elevation-z16: 0 8px 10px -5px var(--jp-shadow-umbra-color),\n     0 16px 24px 2px var(--jp-shadow-penumbra-color),\n     0 6px 30px 5px var(--jp-shadow-ambient-color);\n   --jp-elevation-z20: 0 10px 13px -6px var(--jp-shadow-umbra-color),\n     0 20px 31px 3px var(--jp-shadow-penumbra-color),\n     0 8px 38px 7px var(--jp-shadow-ambient-color);\n   --jp-elevation-z24: 0 11px 15px -7px var(--jp-shadow-umbra-color),\n     0 24px 38px 3px var(--jp-shadow-penumbra-color),\n     0 9px 46px 8px var(--jp-shadow-ambient-color);\n\n  /* Borders\n   *\n   * The following variables, specify the visual styling of borders in JupyterLab.\n   */\n\n  --jp-border-width: 1px;\n  --jp-border-color0: rgb(48, 54, 61);\n  --jp-border-color1: rgb(48, 54, 61);\n  --jp-border-color2: rgb(48, 54, 61);\n  --jp-border-color3: rgb(48, 54, 61);\n  --jp-border-radius: 6px;\n\n  /* UI Fonts\n   *\n   * The UI font CSS variables are used for the typography all of the JupyterLab\n   * user interface elements that are not directly user generated content.\n   *\n   * The font sizing here is done assuming that the body font size of --jp-ui-font-size1\n   * is applied to a parent element. When children elements, such as headings, are sized\n   * in em all things will be computed relative to that body size.\n   */\n\n  --jp-ui-font-scale-factor: 1.2;\n  --jp-ui-font-size0: 0.8333em;\n  --jp-ui-font-size1: 13px; /* Base font size */\n  --jp-ui-font-size2: 1.2em;\n  --jp-ui-font-size3: 1.44em;\n\n  --jp-ui-font-family: 'JetBrains Mono';\n\n  /*\n   * Use these font colors against the corresponding main layout colors.\n   * In a light theme, these go from dark to light.\n   */\n\n  /* Defaults use Material Design specification */\n\n  --jp-ui-font-color0: rgba(240, 246, 252, 1);\n  --jp-ui-font-color1: rgba(240, 246, 252, 1);\n  --jp-ui-font-color2: rgba(240, 246, 252, 0.7);\n  --jp-ui-font-color3: rgba(240, 246, 252, 0.5);\n\n  --jp-icon-contrast-color0: var(--jp-ui-font-color0);\n  --jp-icon-contrast-color1: var(--jp-ui-font-color1);\n  --jp-icon-contrast-color2: var(--jp-ui-font-color2);\n  --jp-icon-contrast-color3: var(--jp-ui-font-color3);\n\n  /*\n   * Use these against the brand/accent/warn/error colors.\n   * These will typically go from light to darker, in both a dark and light theme.\n   */\n\n  --jp-ui-inverse-font-color0: rgba(0, 0, 0, 1);\n  --jp-ui-inverse-font-color1: rgba(0, 0, 0, 1);\n  --jp-ui-inverse-font-color2: rgba(0, 0, 0, 0.7);\n  --jp-ui-inverse-font-color3: rgba(0, 0, 0, 0.5);\n\n  /* Content Fonts\n   *\n   * Content font variables are used for typography of user generated content.\n   *\n   * The font sizing here is done assuming that the body font size of --jp-content-font-size1\n   * is applied to a parent element. When children elements, such as headings, are sized\n   * in em all things will be computed relative to that body size.\n   */\n\n  --jp-content-line-height: 1.6;\n  --jp-content-font-scale-factor: 1.2;\n  --jp-content-font-size0: 0.8333em;\n  --jp-content-font-size1: 14px; /* Base font size */\n  --jp-content-font-size2: 1.2em;\n  --jp-content-font-size3: 1.44em;\n  --jp-content-font-size4: 1.728em;\n  --jp-content-font-size5: 2.0736em;\n\n  /* This gives a magnification of about 125% in presentation mode over normal. */\n  --jp-content-presentation-font-size1: 17px;\n\n  --jp-content-heading-line-height: 1;\n  --jp-content-heading-margin-top: 1.2em;\n  --jp-content-heading-margin-bottom: 0.8em;\n  --jp-content-heading-font-weight: 500;\n\n  /* Defaults use Material Design specification */\n  --jp-content-font-color0: rgba(255, 255, 255, 1);\n  --jp-content-font-color1: rgba(255, 255, 255, 1);\n  --jp-content-font-color2: rgba(255, 255, 255, 0.7);\n  --jp-content-font-color3: rgba(255, 255, 255, 0.5);\n  --jp-content-link-color: var(--jp-night-blue);\n\n  --jp-content-font-family: 'JetBrains Mono';\n\n  /*\n   * Code Fonts\n   *\n   * Code font variables are used for typography of code and other monospaces content.\n   */\n\n  --jp-code-font-size: 13px;\n  --jp-code-line-height: 1.3077; /* 17px for 13px base */\n  --jp-code-padding: 0.385em; /* 5px for 13px base */\n  --jp-code-font-family-default: 'JetBrains Mono';\n  --jp-code-font-family: var(--jp-code-font-family-default);\n\n  /* This gives a magnification of about 125% in presentation mode over normal. */\n  --jp-code-presentation-font-size: 16px;\n\n  /* may need to tweak cursor width if you change font size */\n  --jp-code-cursor-width0: 1.4px;\n  --jp-code-cursor-width1: 2px;\n  --jp-code-cursor-width2: 4px;\n\n  /* Layout\n   *\n   * The following are the main layout colors use in JupyterLab. In a light\n   * theme these would go from light to dark.\n   */\n\n  --jp-layout-color0: #010409;\n  --jp-layout-color1: #0d1117;\n  --jp-layout-color2: #21262d;\n  --jp-layout-color3: #161b22;\n  --jp-layout-color4: #161b22;\n\n  /* Inverse Layout\n   *\n   * The following are the inverse layout colors use in JupyterLab. In a light\n   * theme these would go from dark to light.\n   */\n\n  --jp-inverse-layout-color0: white;\n  --jp-inverse-layout-color1: white;\n  --jp-inverse-layout-color2: var(--md-grey-200);\n  --jp-inverse-layout-color3: var(--md-grey-400);\n  --jp-inverse-layout-color4: var(--md-grey-600);\n\n  /* Brand/accent */\n\n  --jp-brand-color0: var(--jp-night-green);\n  --jp-brand-color1: var(--jp-night-green);\n  --jp-brand-color2: var(--jp-night-blue);\n  --jp-brand-color3: var(--jp-night-blue);\n\n  --jp-accent-color0: var(--jp-night-green);\n  --jp-accent-color1: var(--jp-night-green);\n  --jp-accent-color2: var(--jp-night-green);\n  --jp-accent-color3: var(--jp-night-green);\n\n  /* State colors (warn, error, success, info) */\n\n  --jp-warn-color0: var(--jp-night-orange);\n  --jp-warn-color1: var(--jp-night-orange);\n  --jp-warn-color2: var(--jp-night-orange);\n  --jp-warn-color3: var(--jp-night-orange);\n\n  --jp-error-color0: var(--jp-night-red);\n  --jp-error-color1: var(--jp-night-red);\n  --jp-error-color2: var(--jp-night-red);\n  --jp-error-color3: var(--jp-night-red);\n\n  --jp-success-color0: var(--jp-night-green);\n  --jp-success-color1: var(--jp-night-green);\n  --jp-success-color2: var(--jp-night-green);\n  --jp-success-color3: var(--jp-night-green);\n\n  --jp-info-color0: var(--jp-night-blue);\n  --jp-info-color1: var(--jp-night-blue);\n  --jp-info-color2: var(--jp-night-blue);\n  --jp-info-color3: var(--jp-night-blue);\n\n  /* Cell specific styles */\n\n  --jp-cell-padding: 5px;\n\n  --jp-cell-collapser-width: 8px;\n  --jp-cell-collapser-min-height: 20px;\n  --jp-cell-collapser-not-active-hover-opacity: 0.6;\n\n  --jp-cell-editor-background: #0d1117;\n  --jp-cell-editor-border-color: rgb(48, 54, 61);\n  --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300);\n  --jp-cell-editor-active-background: var(--jp-layout-color0);\n  --jp-cell-editor-active-border-color: var(--jp-brand-color1);\n\n  --jp-cell-prompt-width: 64px;\n  --jp-cell-prompt-font-family: 'JetBrains Mono';\n  --jp-cell-prompt-letter-spacing: 0px;\n  --jp-cell-prompt-opacity: 1;\n  --jp-cell-prompt-not-active-opacity: 0.8;\n  --jp-cell-prompt-not-active-font-color: white;\n  /* A custom blend of MD grey and blue 600\n   * See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex */\n  --jp-cell-inprompt-font-color: var(--jp-night-green);\n\n   /* A custom blend of MD grey and orange 600\n    * https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex */\n  --jp-cell-outprompt-font-color: var(--jp-night-orange);\n\n  /* Notebook specific styles */\n\n  --jp-notebook-padding: 10px;\n  --jp-notebook-select-background: var(--jp-layout-color1);\n  --jp-notebook-multiselected-color: rgba(33, 150, 243, 0.24);\n\n  /* The scroll padding is calculated to fill enough space at the bottom of the\n  notebook to show one single-line cell (with appropriate padding) at the top\n  when the notebook is scrolled all the way to the bottom. We also subtract one\n  pixel so that no scrollbar appears if we have just one single-line cell in the\n  notebook. This padding is to enable a 'scroll past end' feature in a notebook.\n  */\n  --jp-notebook-scroll-padding: calc(\n    100% - var(--jp-code-font-size) * var(--jp-code-line-height) -\n      var(--jp-code-padding) - var(--jp-cell-padding) - 1px\n  );\n\n  --jp-scrollbar-background-color: #21262d;\n  --jp-scrollbar-thumb-color: 88, 96, 97; /* need to specify thumb color as an RGB triplet */\n\n  --jp-scrollbar-endpad: 3px; /* the minimum gap between the thumb and the ends of a scrollbar */\n\n  /* hacks for setting the thumb shape. These do nothing in Firefox */\n\n  --jp-scrollbar-thumb-margin: 3.5px; /* the space in between the sides of the thumb and the track */\n  --jp-scrollbar-thumb-radius: 9px; /* set to a large-ish value for rounded endcaps on the thumb */\n\n  /* Rendermime styles */\n\n  --jp-rendermime-error-background: rgba(244, 67, 54, 0.28);\n  --jp-rendermime-table-row-background: var(--md-grey-900);\n  --jp-rendermime-table-row-hover-background: rgba(3, 169, 244, 0.2);\n\n  /* Dialog specific styles */\n\n  --jp-dialog-background: rgba(0, 0, 0, 0.6);\n\n  /* Console specific styles */\n\n  --jp-console-padding: 10px;\n\n  /* Toolbar specific styles */\n\n  --jp-toolbar-border-color: var(--jp-border-color2);\n  --jp-toolbar-micro-height: 8px;\n  --jp-toolbar-background: var(--jp-layout-color1);\n  --jp-toolbar-box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.8);\n  --jp-toolbar-header-margin: 4px 4px 0 4px;\n  --jp-toolbar-active-background: var(--jp-layout-color0);\n\n  /* Statusbar specific styles */\n\n  --jp-statusbar-height: 24px;\n\n  /* Input field styles */\n\n  --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300);\n  --jp-input-active-background: var(--jp-layout-color0);\n  --jp-input-hover-background: var(--jp-layout-color2);\n  --jp-input-background: var(--md-grey-800);\n  --jp-input-border-color: var(--jp-inverse-border-color);\n  --jp-input-active-border-color: var(--jp-brand-color1);\n  --jp-input-active-box-shadow-color: rgba(19, 124, 189, 0.3);\n\n  /* General editor styles */\n\n  --jp-editor-selected-background: var(--jp-layout-color2);\n  --jp-editor-selected-focused-background: rgba(33, 150, 243, 0.24);\n  --jp-editor-cursor-color: var(--jp-ui-font-color0);\n\n  /* Code mirror specific styles */\n\n  --jp-mirror-editor-keyword-color: #ff7b72;\n  --jp-mirror-editor-atom-color: var(--jp-night-blue);\n  --jp-mirror-editor-number-color: #79c0ff;\n  --jp-mirror-editor-def-color: #d2a8ff;\n  --jp-mirror-editor-variable-color: var(--md-grey-300);\n  --jp-mirror-editor-variable-2-color: var(--jp-night-blue);\n  --jp-mirror-editor-variable-3-color: var(--jp-night-green);\n  --jp-mirror-editor-punctuation-color: var(--jp-night-blue);\n  --jp-mirror-editor-property-color: #d2a8ff;\n  --jp-mirror-editor-operator-color: #79c0ff;\n  --jp-mirror-editor-comment-color: #8b949e;\n  --jp-mirror-editor-string-color: #a5d6ff;\n  --jp-mirror-editor-string-2-color: #a5d6ff;\n  --jp-mirror-editor-meta-color: var(--jp-night-purple);\n  --jp-mirror-editor-qualifier-color: #555;\n  --jp-mirror-editor-builtin-color: var(--jp-night-green);\n  --jp-mirror-editor-bracket-color: #997;\n  --jp-mirror-editor-tag-color: var(--jp-night-green);\n  --jp-mirror-editor-attribute-color: var(--jp-night-blue);\n  --jp-mirror-editor-header-color: var(--jp-night-blue);\n  --jp-mirror-editor-quote-color: var(--jp-night-green);\n  --jp-mirror-editor-link-color: var(--jp-night-blue);\n  --jp-mirror-editor-error-color: var(--jp-night-red);\n  --jp-mirror-editor-hr-color: #999;\n\n  /* Vega extension styles */\n\n  --jp-vega-background: var(--md-grey-400);\n\n  /* Sidebar-related styles */\n\n  --jp-sidebar-min-width: 180px;\n}\n\n.jp-InputArea-editor {\n  border-radius: 6px;\n}\n\n.jp-InputGroup input {\n  border-radius: 6px;\n}\n\n.jp-FileBrowser-toolbar.jp-Toolbar .jp-Toolbar-item:first-child .jp-ToolbarButtonComponent .jp-icon3 {\n  fill: white;\n}\n\n.jp-DirListing-item.jp-mod-selected {\n  color: white;\n}\n",""]);const c=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o=n(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(n,o,r){"string"==typeof n&&(n=[[null,n,""]]);var t={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(t[i]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);r&&t[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},549:(n,e,o)=>{o.r(e),o.d(e,{default:()=>i});var r=o(379),t=o.n(r),a=o(760);t()(a.Z,{insert:"head",singleton:!1});const i=a.Z.locals||{}},379:(n,e,o)=>{var r,t=function(){var n={};return function(e){if(void 0===n[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}n[e]=o}return n[e]}}(),a=[];function i(n){for(var e=-1,o=0;o<a.length;o++)if(a[o].identifier===n){e=o;break}return e}function p(n,e){for(var o={},r=[],t=0;t<n.length;t++){var p=n[t],l=e.base?p[0]+e.base:p[0],s=o[l]||0,c="".concat(l," ").concat(s);o[l]=s+1;var d=i(c),h={css:p[1],media:p[2],sourceMap:p[3]};-1!==d?(a[d].references++,a[d].updater(h)):a.push({identifier:c,updater:b(h,e),references:1}),r.push(c)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=o.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=t(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,c=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function d(n,e,o,r){var t=o?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=c(e,t);else{var a=document.createTextNode(t),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function h(n,e,o){var r=o.css,t=o.media,a=o.sourceMap;if(t?n.setAttribute("media",t):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var u=null,j=0;function b(n,e){var o,r,t;if(e.singleton){var a=j++;o=u||(u=l(e)),r=d.bind(null,o,a,!1),t=d.bind(null,o,a,!0)}else o=l(e),r=h.bind(null,o,e),t=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else t()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var o=p(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<o.length;r++){var t=i(o[r]);a[t].references--}for(var l=p(n,e),s=0;s<o.length;s++){var c=i(o[s]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}o=l}}}},482:(n,e,o)=>{o.d(e,{Z:()=>r});const r=o.p+"cd5c21dfecad1bf39296a3649056f8c59115c383ade9c3c43ca344ca11bbd809.ttf"}}]);