//#region \0rolldown/runtime.js
var e = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), t = ":host,:root{--pico-font-family-emoji:\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--pico-font-family-sans-serif:system-ui,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,Helvetica,Arial,\"Helvetica Neue\",sans-serif,var(--pico-font-family-emoji);--pico-font-family-monospace:ui-monospace,SFMono-Regular,\"SF Mono\",Menlo,Consolas,\"Liberation Mono\",monospace,var(--pico-font-family-emoji);--pico-font-family:var(--pico-font-family-sans-serif);--pico-line-height:1.5;--pico-font-weight:400;--pico-font-size:100%;--pico-text-underline-offset:.1rem;--pico-border-radius:.25rem;--pico-border-width:.0625rem;--pico-outline-width:.125rem;--pico-transition:.2s ease-in-out;--pico-spacing:1rem;--pico-typography-spacing-vertical:1rem;--pico-block-spacing-vertical:var(--pico-spacing);--pico-block-spacing-horizontal:var(--pico-spacing);--pico-grid-column-gap:var(--pico-spacing);--pico-grid-row-gap:var(--pico-spacing);--pico-form-element-spacing-vertical:.75rem;--pico-form-element-spacing-horizontal:1rem;--pico-group-box-shadow:0 0 0 #0000;--pico-group-box-shadow-focus-with-button:0 0 0 var(--pico-outline-width) var(--pico-primary-focus);--pico-group-box-shadow-focus-with-input:0 0 0 .0625rem var(--pico-form-element-border-color);--pico-modal-overlay-backdrop-filter:blur(.375rem);--pico-nav-element-spacing-vertical:1rem;--pico-nav-element-spacing-horizontal:.5rem;--pico-nav-link-spacing-vertical:.5rem;--pico-nav-link-spacing-horizontal:.5rem;--pico-nav-breadcrumb-divider:\">\";--pico-icon-checkbox:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");--pico-icon-minus:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E\");--pico-icon-chevron:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");--pico-icon-date:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E\");--pico-icon-time:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E\");--pico-icon-search:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E\");--pico-icon-close:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E\");--pico-icon-loading:url(\"data:image/svg+xml,%3Csvg fill='none' height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' %3E%3Cstyle%3E g %7B animation: rotate 2s linear infinite; transform-origin: center center; %7D circle %7B stroke-dasharray: 75,100; stroke-dashoffset: -5; animation: dash 1.5s ease-in-out infinite; stroke-linecap: round; %7D @keyframes rotate %7B 0%25 %7B transform: rotate(0deg); %7D 100%25 %7B transform: rotate(360deg); %7D %7D @keyframes dash %7B 0%25 %7B stroke-dasharray: 1,100; stroke-dashoffset: 0; %7D 50%25 %7B stroke-dasharray: 44.5,100; stroke-dashoffset: -17.5; %7D 100%25 %7B stroke-dasharray: 44.5,100; stroke-dashoffset: -62; %7D %7D %3C/style%3E%3Cg%3E%3Ccircle cx='12' cy='12' r='10' fill='none' stroke='rgb(136, 145, 164)' stroke-width='4' /%3E%3C/g%3E%3C/svg%3E\")}@media (width>=576px){:host,:root{--pico-font-size:106.25%}}@media (width>=768px){:host,:root{--pico-font-size:112.5%}}@media (width>=1024px){:host,:root{--pico-font-size:118.75%}}@media (width>=1280px){:host,:root{--pico-font-size:125%}}@media (width>=1536px){:host,:root{--pico-font-size:131.25%}}a,a.contrast,a.secondary{--pico-text-decoration:underline}small{--pico-font-size:.875em}h1,h2,h3,h4,h5,h6{--pico-font-weight:700}h1{--pico-font-size:2rem;--pico-line-height:1.125;--pico-typography-spacing-top:3rem}h2{--pico-font-size:1.75rem;--pico-line-height:1.15;--pico-typography-spacing-top:2.625rem}h3{--pico-font-size:1.5rem;--pico-line-height:1.175;--pico-typography-spacing-top:2.25rem}h4{--pico-font-size:1.25rem;--pico-line-height:1.2;--pico-typography-spacing-top:1.874rem}h5{--pico-font-size:1.125rem;--pico-line-height:1.225;--pico-typography-spacing-top:1.6875rem}h6{--pico-font-size:1rem;--pico-line-height:1.25;--pico-typography-spacing-top:1.5rem}tfoot td,tfoot th,thead td,thead th{--pico-font-weight:600;--pico-border-width:.1875rem}code,kbd,pre,samp{--pico-font-family:var(--pico-font-family-monospace)}kbd{--pico-font-weight:bolder}:where(select,textarea),input:not([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]){--pico-outline-width:.0625rem}[type=search]{--pico-border-radius:5rem}[type=checkbox],[type=radio]{--pico-border-width:.125rem}[type=checkbox][role=switch]{--pico-border-width:.1875rem}details.dropdown summary:not([role=button]){--pico-outline-width:.0625rem}nav details.dropdown summary:focus-visible{--pico-outline-width:.125rem}[role=search]{--pico-border-radius:5rem}:is([role=group]:has(button.secondary:focus,[type=submit].secondary:focus,[type=button].secondary:focus,[role=button].secondary:focus),[role=search]:has(button.secondary:focus,[type=submit].secondary:focus,[type=button].secondary:focus,[role=button].secondary:focus)){--pico-group-box-shadow-focus-with-button:0 0 0 var(--pico-outline-width) var(--pico-secondary-focus)}:is([role=group]:has(button.contrast:focus,[type=submit].contrast:focus,[type=button].contrast:focus,[role=button].contrast:focus),[role=search]:has(button.contrast:focus,[type=submit].contrast:focus,[type=button].contrast:focus,[role=button].contrast:focus)){--pico-group-box-shadow-focus-with-button:0 0 0 var(--pico-outline-width) var(--pico-contrast-focus)}[role=group] [role=button],[role=group] [type=button],[role=group] [type=submit],[role=group] button,[role=search] [role=button],[role=search] [type=button],[role=search] [type=submit],[role=search] button{--pico-form-element-spacing-horizontal:2rem}details summary[role=button]:not(.outline):after,[aria-busy=true]:not(input,select,textarea):is(button,[type=submit],[type=button],[type=reset],[role=button]):not(.outline):before{filter:brightness(0)invert()}:host(:not([data-theme=dark])),:root:not([data-theme=dark]),[data-theme=light]{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;--pico-background-color:#fff;--pico-color:#373c44;--pico-text-selection-color:#029ae840;--pico-muted-color:#646b79;--pico-muted-border-color:#e7eaf0;--pico-primary:#0172ad;--pico-primary-background:#0172ad;--pico-primary-border:var(--pico-primary-background);--pico-primary-underline:#0172ad80;--pico-primary-hover:#015887;--pico-primary-hover-background:#02659a;--pico-primary-hover-border:var(--pico-primary-hover-background);--pico-primary-hover-underline:var(--pico-primary-hover);--pico-primary-focus:#029ae880;--pico-primary-inverse:#fff;--pico-secondary:#5d6b89;--pico-secondary-background:#525f7a;--pico-secondary-border:var(--pico-secondary-background);--pico-secondary-underline:#5d6b8980;--pico-secondary-hover:#48536b;--pico-secondary-hover-background:#48536b;--pico-secondary-hover-border:var(--pico-secondary-hover-background);--pico-secondary-hover-underline:var(--pico-secondary-hover);--pico-secondary-focus:#5d6b8940;--pico-secondary-inverse:#fff;--pico-contrast:#181c25;--pico-contrast-background:#181c25;--pico-contrast-border:var(--pico-contrast-background);--pico-contrast-underline:#181c2580;--pico-contrast-hover:#000;--pico-contrast-hover-background:#000;--pico-contrast-hover-border:var(--pico-contrast-hover-background);--pico-contrast-hover-underline:var(--pico-secondary-hover);--pico-contrast-focus:#5d6b8940;--pico-contrast-inverse:#fff;--pico-box-shadow:.0145rem .029rem .174rem #8191b504,.0335rem .067rem .402rem #8191b506,.0625rem .125rem .75rem #8191b508,.1125rem .225rem 1.35rem #8191b509,.2085rem .417rem 2.502rem #8191b50b,.5rem 1rem 6rem #8191b50f,0 0 0 .0625rem #8191b504;--pico-h1-color:#2d3138;--pico-h2-color:#373c44;--pico-h3-color:#424751;--pico-h4-color:#4d535e;--pico-h5-color:#5c6370;--pico-h6-color:#646b79;--pico-mark-background-color:#fde7c0;--pico-mark-color:#0f1114;--pico-ins-color:#1d6a54;--pico-del-color:#883935;--pico-blockquote-border-color:var(--pico-muted-border-color);--pico-blockquote-footer-color:var(--pico-muted-color);--pico-button-box-shadow:0 0 0 #0000;--pico-button-hover-box-shadow:0 0 0 #0000;--pico-table-border-color:var(--pico-muted-border-color);--pico-table-row-stripped-background-color:#6f78870a;--pico-code-background-color:#f3f5f7;--pico-code-color:#646b79;--pico-code-kbd-background-color:var(--pico-color);--pico-code-kbd-color:var(--pico-background-color);--pico-form-element-background-color:#fbfcfc;--pico-form-element-selected-background-color:#dfe3eb;--pico-form-element-border-color:#cfd5e2;--pico-form-element-color:#23262c;--pico-form-element-placeholder-color:var(--pico-muted-color);--pico-form-element-active-background-color:#fff;--pico-form-element-active-border-color:var(--pico-primary-border);--pico-form-element-focus-color:var(--pico-primary-border);--pico-form-element-disabled-opacity:.5;--pico-form-element-invalid-border-color:#b86a6b;--pico-form-element-invalid-active-border-color:#c84f48;--pico-form-element-invalid-focus-color:var(--pico-form-element-invalid-active-border-color);--pico-form-element-valid-border-color:#4c9b8a;--pico-form-element-valid-active-border-color:#279977;--pico-form-element-valid-focus-color:var(--pico-form-element-valid-active-border-color);--pico-switch-background-color:#bfc7d9;--pico-switch-checked-background-color:var(--pico-primary-background);--pico-switch-color:#fff;--pico-switch-thumb-box-shadow:0 0 0 #0000;--pico-range-border-color:#dfe3eb;--pico-range-active-border-color:#bfc7d9;--pico-range-thumb-border-color:var(--pico-background-color);--pico-range-thumb-color:var(--pico-secondary-background);--pico-range-thumb-active-color:var(--pico-primary-background);--pico-accordion-border-color:var(--pico-muted-border-color);--pico-accordion-active-summary-color:var(--pico-primary-hover);--pico-accordion-close-summary-color:var(--pico-color);--pico-accordion-open-summary-color:var(--pico-muted-color);--pico-card-background-color:var(--pico-background-color);--pico-card-border-color:var(--pico-muted-border-color);--pico-card-box-shadow:var(--pico-box-shadow);--pico-card-sectioning-background-color:#fbfcfc;--pico-dropdown-background-color:#fff;--pico-dropdown-border-color:#eff1f4;--pico-dropdown-box-shadow:var(--pico-box-shadow);--pico-dropdown-color:var(--pico-color);--pico-dropdown-hover-background-color:#eff1f4;--pico-loading-spinner-opacity:.5;--pico-modal-overlay-background-color:#e8eaedbf;--pico-progress-background-color:#dfe3eb;--pico-progress-color:var(--pico-primary-background);--pico-tooltip-background-color:var(--pico-contrast-background);--pico-tooltip-color:var(--pico-contrast-inverse);--pico-icon-valid:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(76, 154.5, 137.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");--pico-icon-invalid:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(200.25, 79.25, 72.25)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E\")}:host(:not([data-theme=dark])) input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]),:root:not([data-theme=dark]) input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]),[data-theme=light] input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]){--pico-form-element-focus-color:var(--pico-primary-focus)}@media only screen and (prefers-color-scheme:dark){:host(:not([data-theme])),:root:not([data-theme]){--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--pico-background-color:#13171f;--pico-color:#c2c7d0;--pico-text-selection-color:#01aaff30;--pico-muted-color:#7b8495;--pico-muted-border-color:#202632;--pico-primary:#01aaff;--pico-primary-background:#0172ad;--pico-primary-border:var(--pico-primary-background);--pico-primary-underline:#01aaff80;--pico-primary-hover:#79c0ff;--pico-primary-hover-background:#017fc0;--pico-primary-hover-border:var(--pico-primary-hover-background);--pico-primary-hover-underline:var(--pico-primary-hover);--pico-primary-focus:#01aaff60;--pico-primary-inverse:#fff;--pico-secondary:#969eaf;--pico-secondary-background:#525f7a;--pico-secondary-border:var(--pico-secondary-background);--pico-secondary-underline:#969eaf80;--pico-secondary-hover:#b3b9c5;--pico-secondary-hover-background:#5d6b89;--pico-secondary-hover-border:var(--pico-secondary-hover-background);--pico-secondary-hover-underline:var(--pico-secondary-hover);--pico-secondary-focus:#909ebe40;--pico-secondary-inverse:#fff;--pico-contrast:#dfe3eb;--pico-contrast-background:#eff1f4;--pico-contrast-border:var(--pico-contrast-background);--pico-contrast-underline:#dfe3eb80;--pico-contrast-hover:#fff;--pico-contrast-hover-background:#fff;--pico-contrast-hover-border:var(--pico-contrast-hover-background);--pico-contrast-hover-underline:var(--pico-contrast-hover);--pico-contrast-focus:#cfd5e240;--pico-contrast-inverse:#000;--pico-box-shadow:.0145rem .029rem .174rem #07090c04,.0335rem .067rem .402rem #07090c06,.0625rem .125rem .75rem #07090c08,.1125rem .225rem 1.35rem #07090c09,.2085rem .417rem 2.502rem #07090c0b,.5rem 1rem 6rem #07090c0f,0 0 0 .0625rem #07090c04;--pico-h1-color:#f0f1f3;--pico-h2-color:#e0e3e7;--pico-h3-color:#c2c7d0;--pico-h4-color:#b3b9c5;--pico-h5-color:#a4acba;--pico-h6-color:#8891a4;--pico-mark-background-color:#014063;--pico-mark-color:#fff;--pico-ins-color:#62af9a;--pico-del-color:#ce7e7b;--pico-blockquote-border-color:var(--pico-muted-border-color);--pico-blockquote-footer-color:var(--pico-muted-color);--pico-button-box-shadow:0 0 0 #0000;--pico-button-hover-box-shadow:0 0 0 #0000;--pico-table-border-color:var(--pico-muted-border-color);--pico-table-row-stripped-background-color:#6f78870a;--pico-code-background-color:#1a1f28;--pico-code-color:#8891a4;--pico-code-kbd-background-color:var(--pico-color);--pico-code-kbd-color:var(--pico-background-color);--pico-form-element-background-color:#1c212c;--pico-form-element-selected-background-color:#2a3140;--pico-form-element-border-color:#2a3140;--pico-form-element-color:#e0e3e7;--pico-form-element-placeholder-color:#8891a4;--pico-form-element-active-background-color:#1a1f28;--pico-form-element-active-border-color:var(--pico-primary-border);--pico-form-element-focus-color:var(--pico-primary-border);--pico-form-element-disabled-opacity:.5;--pico-form-element-invalid-border-color:#964a50;--pico-form-element-invalid-active-border-color:#b7403b;--pico-form-element-invalid-focus-color:var(--pico-form-element-invalid-active-border-color);--pico-form-element-valid-border-color:#2a7b6f;--pico-form-element-valid-active-border-color:#16896a;--pico-form-element-valid-focus-color:var(--pico-form-element-valid-active-border-color);--pico-switch-background-color:#333c4e;--pico-switch-checked-background-color:var(--pico-primary-background);--pico-switch-color:#fff;--pico-switch-thumb-box-shadow:0 0 0 #0000;--pico-range-border-color:#202632;--pico-range-active-border-color:#2a3140;--pico-range-thumb-border-color:var(--pico-background-color);--pico-range-thumb-color:var(--pico-secondary-background);--pico-range-thumb-active-color:var(--pico-primary-background);--pico-accordion-border-color:var(--pico-muted-border-color);--pico-accordion-active-summary-color:var(--pico-primary-hover);--pico-accordion-close-summary-color:var(--pico-color);--pico-accordion-open-summary-color:var(--pico-muted-color);--pico-card-background-color:#181c25;--pico-card-border-color:var(--pico-card-background-color);--pico-card-box-shadow:var(--pico-box-shadow);--pico-card-sectioning-background-color:#1a1f28;--pico-dropdown-background-color:#181c25;--pico-dropdown-border-color:#202632;--pico-dropdown-box-shadow:var(--pico-box-shadow);--pico-dropdown-color:var(--pico-color);--pico-dropdown-hover-background-color:#202632;--pico-loading-spinner-opacity:.5;--pico-modal-overlay-background-color:#08090abf;--pico-progress-background-color:#202632;--pico-progress-color:var(--pico-primary-background);--pico-tooltip-background-color:var(--pico-contrast-background);--pico-tooltip-color:var(--pico-contrast-inverse);--pico-icon-valid:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(42, 123, 111)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");--pico-icon-invalid:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(149.5, 74, 80)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E\")}:host(:not([data-theme])) input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]),:root:not([data-theme]) input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]){--pico-form-element-focus-color:var(--pico-primary-focus)}:host(:not([data-theme])) details summary[role=button].contrast:not(.outline):after,:root:not([data-theme]) details summary[role=button].contrast:not(.outline):after,:host(:not([data-theme])) [aria-busy=true]:not(input,select,textarea).contrast:is(button,[type=submit],[type=button],[type=reset],[role=button]):not(.outline):before,:root:not([data-theme]) [aria-busy=true]:not(input,select,textarea).contrast:is(button,[type=submit],[type=button],[type=reset],[role=button]):not(.outline):before{filter:brightness(0)}}[data-theme=dark]{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--pico-background-color:#13171f;--pico-color:#c2c7d0;--pico-text-selection-color:#01aaff30;--pico-muted-color:#7b8495;--pico-muted-border-color:#202632;--pico-primary:#01aaff;--pico-primary-background:#0172ad;--pico-primary-border:var(--pico-primary-background);--pico-primary-underline:#01aaff80;--pico-primary-hover:#79c0ff;--pico-primary-hover-background:#017fc0;--pico-primary-hover-border:var(--pico-primary-hover-background);--pico-primary-hover-underline:var(--pico-primary-hover);--pico-primary-focus:#01aaff60;--pico-primary-inverse:#fff;--pico-secondary:#969eaf;--pico-secondary-background:#525f7a;--pico-secondary-border:var(--pico-secondary-background);--pico-secondary-underline:#969eaf80;--pico-secondary-hover:#b3b9c5;--pico-secondary-hover-background:#5d6b89;--pico-secondary-hover-border:var(--pico-secondary-hover-background);--pico-secondary-hover-underline:var(--pico-secondary-hover);--pico-secondary-focus:#909ebe40;--pico-secondary-inverse:#fff;--pico-contrast:#dfe3eb;--pico-contrast-background:#eff1f4;--pico-contrast-border:var(--pico-contrast-background);--pico-contrast-underline:#dfe3eb80;--pico-contrast-hover:#fff;--pico-contrast-hover-background:#fff;--pico-contrast-hover-border:var(--pico-contrast-hover-background);--pico-contrast-hover-underline:var(--pico-contrast-hover);--pico-contrast-focus:#cfd5e240;--pico-contrast-inverse:#000;--pico-box-shadow:.0145rem .029rem .174rem #07090c04,.0335rem .067rem .402rem #07090c06,.0625rem .125rem .75rem #07090c08,.1125rem .225rem 1.35rem #07090c09,.2085rem .417rem 2.502rem #07090c0b,.5rem 1rem 6rem #07090c0f,0 0 0 .0625rem #07090c04;--pico-h1-color:#f0f1f3;--pico-h2-color:#e0e3e7;--pico-h3-color:#c2c7d0;--pico-h4-color:#b3b9c5;--pico-h5-color:#a4acba;--pico-h6-color:#8891a4;--pico-mark-background-color:#014063;--pico-mark-color:#fff;--pico-ins-color:#62af9a;--pico-del-color:#ce7e7b;--pico-blockquote-border-color:var(--pico-muted-border-color);--pico-blockquote-footer-color:var(--pico-muted-color);--pico-button-box-shadow:0 0 0 #0000;--pico-button-hover-box-shadow:0 0 0 #0000;--pico-table-border-color:var(--pico-muted-border-color);--pico-table-row-stripped-background-color:#6f78870a;--pico-code-background-color:#1a1f28;--pico-code-color:#8891a4;--pico-code-kbd-background-color:var(--pico-color);--pico-code-kbd-color:var(--pico-background-color);--pico-form-element-background-color:#1c212c;--pico-form-element-selected-background-color:#2a3140;--pico-form-element-border-color:#2a3140;--pico-form-element-color:#e0e3e7;--pico-form-element-placeholder-color:#8891a4;--pico-form-element-active-background-color:#1a1f28;--pico-form-element-active-border-color:var(--pico-primary-border);--pico-form-element-focus-color:var(--pico-primary-border);--pico-form-element-disabled-opacity:.5;--pico-form-element-invalid-border-color:#964a50;--pico-form-element-invalid-active-border-color:#b7403b;--pico-form-element-invalid-focus-color:var(--pico-form-element-invalid-active-border-color);--pico-form-element-valid-border-color:#2a7b6f;--pico-form-element-valid-active-border-color:#16896a;--pico-form-element-valid-focus-color:var(--pico-form-element-valid-active-border-color);--pico-switch-background-color:#333c4e;--pico-switch-checked-background-color:var(--pico-primary-background);--pico-switch-color:#fff;--pico-switch-thumb-box-shadow:0 0 0 #0000;--pico-range-border-color:#202632;--pico-range-active-border-color:#2a3140;--pico-range-thumb-border-color:var(--pico-background-color);--pico-range-thumb-color:var(--pico-secondary-background);--pico-range-thumb-active-color:var(--pico-primary-background);--pico-accordion-border-color:var(--pico-muted-border-color);--pico-accordion-active-summary-color:var(--pico-primary-hover);--pico-accordion-close-summary-color:var(--pico-color);--pico-accordion-open-summary-color:var(--pico-muted-color);--pico-card-background-color:#181c25;--pico-card-border-color:var(--pico-card-background-color);--pico-card-box-shadow:var(--pico-box-shadow);--pico-card-sectioning-background-color:#1a1f28;--pico-dropdown-background-color:#181c25;--pico-dropdown-border-color:#202632;--pico-dropdown-box-shadow:var(--pico-box-shadow);--pico-dropdown-color:var(--pico-color);--pico-dropdown-hover-background-color:#202632;--pico-loading-spinner-opacity:.5;--pico-modal-overlay-background-color:#08090abf;--pico-progress-background-color:#202632;--pico-progress-color:var(--pico-primary-background);--pico-tooltip-background-color:var(--pico-contrast-background);--pico-tooltip-color:var(--pico-contrast-inverse);--pico-icon-valid:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(42, 123, 111)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");--pico-icon-invalid:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(149.5, 74, 80)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E\")}[data-theme=dark] input:is([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[type=file]){--pico-form-element-focus-color:var(--pico-primary-focus)}[data-theme=dark] details summary[role=button].contrast:not(.outline):after,[data-theme=dark] [aria-busy=true]:not(input,select,textarea).contrast:is(button,[type=submit],[type=button],[type=reset],[role=button]):not(.outline):before{filter:brightness(0)}[type=checkbox],[type=radio],[type=range],progress{accent-color:var(--pico-primary)}*,:after,:before{box-sizing:border-box;background-repeat:no-repeat}:after,:before{-webkit-text-decoration:inherit;text-decoration:inherit;vertical-align:inherit}:where(:host),:where(:root){-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;background-color:var(--pico-background-color);color:var(--pico-color);font-weight:var(--pico-font-weight);font-size:var(--pico-font-size);line-height:var(--pico-line-height);font-family:var(--pico-font-family);text-underline-offset:var(--pico-text-underline-offset);text-rendering:optimizelegibility;overflow-wrap:break-word;tab-size:4}body{width:100%;margin:0}main{display:block}body>footer,body>header,body>main{padding-block:var(--pico-block-spacing-vertical)}section{margin-bottom:var(--pico-block-spacing-vertical)}.container,.container-fluid{width:100%;padding-right:var(--pico-spacing);padding-left:var(--pico-spacing);margin-left:auto;margin-right:auto}@media (width>=576px){.container{max-width:510px;padding-left:0;padding-right:0}}@media (width>=768px){.container{max-width:700px}}@media (width>=1024px){.container{max-width:950px}}@media (width>=1280px){.container{max-width:1200px}}@media (width>=1536px){.container{max-width:1450px}}.grid{grid-column-gap:var(--pico-grid-column-gap);grid-row-gap:var(--pico-grid-row-gap);grid-template-columns:1fr;display:grid}@media (width>=768px){.grid{grid-template-columns:repeat(auto-fit,minmax(0%,1fr))}}.grid>*{min-width:0}.overflow-auto{overflow:auto}b,strong{font-weight:bolder}sub,sup{vertical-align:baseline;font-size:.75em;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}address,blockquote,dl,ol,p,pre,table,ul{margin-top:0;margin-bottom:var(--pico-typography-spacing-vertical);color:var(--pico-color);font-style:normal;font-weight:var(--pico-font-weight)}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:var(--pico-typography-spacing-vertical);color:var(--pico-color);font-weight:var(--pico-font-weight);font-size:var(--pico-font-size);line-height:var(--pico-line-height);font-family:var(--pico-font-family)}h1{--pico-color:var(--pico-h1-color)}h2{--pico-color:var(--pico-h2-color)}h3{--pico-color:var(--pico-h3-color)}h4{--pico-color:var(--pico-h4-color)}h5{--pico-color:var(--pico-h5-color)}h6{--pico-color:var(--pico-h6-color)}:where(article,address,blockquote,dl,figure,form,ol,p,pre,table,ul)~:is(h1,h2,h3,h4,h5,h6){margin-top:var(--pico-typography-spacing-top)}p,hgroup{margin-bottom:var(--pico-typography-spacing-vertical)}hgroup>*{margin-top:0;margin-bottom:0}hgroup>:not(:first-child):last-child{--pico-color:var(--pico-muted-color);--pico-font-weight:unset;font-size:1rem}:where(ol,ul) li{margin-bottom:calc(var(--pico-typography-spacing-vertical) * .25)}:where(dl,ol,ul) :where(dl,ol,ul){margin:0;margin-top:calc(var(--pico-typography-spacing-vertical) * .25)}ul li{list-style:square}mark{background-color:var(--pico-mark-background-color);color:var(--pico-mark-color);vertical-align:baseline;padding:.125rem .25rem}blockquote{margin:var(--pico-typography-spacing-vertical) 0;padding:var(--pico-spacing);border-right:none;border-left:.25rem solid var(--pico-blockquote-border-color);border-inline-start:.25rem solid var(--pico-blockquote-border-color);border-inline-end:none;display:block}blockquote footer{margin-top:calc(var(--pico-typography-spacing-vertical) * .5);color:var(--pico-blockquote-footer-color)}abbr[title]{cursor:help;border-bottom:1px dotted;text-decoration:none}ins{color:var(--pico-ins-color);text-decoration:none}del{color:var(--pico-del-color)}::selection{background-color:var(--pico-text-selection-color)}:where(a:not([role=button])),[role=link]{--pico-color:var(--pico-primary);--pico-background-color:transparent;--pico-underline:var(--pico-primary-underline);background-color:var(--pico-background-color);color:var(--pico-color);-webkit-text-decoration:var(--pico-text-decoration);-webkit-text-decoration:var(--pico-text-decoration);text-decoration:var(--pico-text-decoration);-webkit-text-decoration-color:var(--pico-underline);text-decoration-color:var(--pico-underline);text-underline-offset:.125em;transition:background-color var(--pico-transition),color var(--pico-transition),box-shadow var(--pico-transition),-webkit-text-decoration var(--pico-transition);transition:background-color var(--pico-transition),color var(--pico-transition),text-decoration var(--pico-transition),box-shadow var(--pico-transition);transition:background-color var(--pico-transition),color var(--pico-transition),text-decoration var(--pico-transition),box-shadow var(--pico-transition),-webkit-text-decoration var(--pico-transition);outline:0}:where(a:not([role=button])):is([aria-current]:not([aria-current=false]),:hover,:active,:focus),[role=link]:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){--pico-color:var(--pico-primary-hover);--pico-underline:var(--pico-primary-hover-underline);--pico-text-decoration:underline}:where(a:not([role=button])):focus-visible,[role=link]:focus-visible{box-shadow:0 0 0 var(--pico-outline-width) var(--pico-primary-focus)}:where(a:not([role=button])).secondary,[role=link].secondary{--pico-color:var(--pico-secondary);--pico-underline:var(--pico-secondary-underline)}:where(a:not([role=button])).secondary:is([aria-current]:not([aria-current=false]),:hover,:active,:focus),[role=link].secondary:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){--pico-color:var(--pico-secondary-hover);--pico-underline:var(--pico-secondary-hover-underline)}:where(a:not([role=button])).contrast,[role=link].contrast{--pico-color:var(--pico-contrast);--pico-underline:var(--pico-contrast-underline)}:where(a:not([role=button])).contrast:is([aria-current]:not([aria-current=false]),:hover,:active,:focus),[role=link].contrast:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){--pico-color:var(--pico-contrast-hover);--pico-underline:var(--pico-contrast-hover-underline)}a[role=button]{display:inline-block}button{text-transform:none;margin:0;font-family:inherit;overflow:visible}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[role=button],[type=button],[type=reset],[type=submit],button{--pico-background-color:var(--pico-primary-background);--pico-border-color:var(--pico-primary-border);--pico-color:var(--pico-primary-inverse);--pico-box-shadow:var(--pico-button-box-shadow,0 0 0 #0000);padding:var(--pico-form-element-spacing-vertical) var(--pico-form-element-spacing-horizontal);border:var(--pico-border-width) solid var(--pico-border-color);border-radius:var(--pico-border-radius);background-color:var(--pico-background-color);box-shadow:var(--pico-box-shadow);color:var(--pico-color);font-weight:var(--pico-font-weight);font-size:1rem;line-height:var(--pico-line-height);text-align:center;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background-color var(--pico-transition),border-color var(--pico-transition),color var(--pico-transition),box-shadow var(--pico-transition);outline:0;text-decoration:none}[type=file]::file-selector-button{--pico-background-color:var(--pico-primary-background);--pico-border-color:var(--pico-primary-border);--pico-color:var(--pico-primary-inverse);--pico-box-shadow:var(--pico-button-box-shadow,0 0 0 #0000);padding:var(--pico-form-element-spacing-vertical) var(--pico-form-element-spacing-horizontal);border:var(--pico-border-width) solid var(--pico-border-color);border-radius:var(--pico-border-radius);background-color:var(--pico-background-color);box-shadow:var(--pico-box-shadow);color:var(--pico-color);font-weight:var(--pico-font-weight);font-size:1rem;line-height:var(--pico-line-height);text-align:center;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background-color var(--pico-transition),border-color var(--pico-transition),color var(--pico-transition),box-shadow var(--pico-transition);outline:0;text-decoration:none}[role=button]:is(:hover,:active,:focus),[role=button][aria-current]:not([aria-current=false]),[type=button]:is(:hover,:active,:focus),[type=button][aria-current]:not([aria-current=false]),[type=reset]:is(:hover,:active,:focus),[type=reset][aria-current]:not([aria-current=false]),[type=submit]:is(:hover,:active,:focus),[type=submit][aria-current]:not([aria-current=false]),button:is(:hover,:active,:focus),button[aria-current]:not([aria-current=false]){--pico-background-color:var(--pico-primary-hover-background);--pico-border-color:var(--pico-primary-hover-border);--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000);--pico-color:var(--pico-primary-inverse)}[type=file]::file-selector-button:is(:hover,:active,:focus){--pico-background-color:var(--pico-primary-hover-background);--pico-border-color:var(--pico-primary-hover-border);--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000);--pico-color:var(--pico-primary-inverse)}[type=file]::file-selector-button:is(){--pico-background-color:var(--pico-primary-hover-background);--pico-border-color:var(--pico-primary-hover-border);--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000);--pico-color:var(--pico-primary-inverse)}[role=button]:focus,[role=button][aria-current]:not([aria-current=false]):focus,[type=button]:focus,[type=button][aria-current]:not([aria-current=false]):focus,[type=reset]:focus,[type=reset][aria-current]:not([aria-current=false]):focus,[type=submit]:focus,[type=submit][aria-current]:not([aria-current=false]):focus,button:focus,button[aria-current]:not([aria-current=false]):focus{--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000),0 0 0 var(--pico-outline-width) var(--pico-primary-focus)}[type=file]::file-selector-button:focus{--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000),0 0 0 var(--pico-outline-width) var(--pico-primary-focus)}[type=file]::file-selector-button:is():focus{--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000),0 0 0 var(--pico-outline-width) var(--pico-primary-focus)}[type=button],[type=reset],[type=submit]{margin-bottom:var(--pico-spacing)}:is(button,[type=submit],[type=button],[role=button]).secondary,[type=reset]{--pico-background-color:var(--pico-secondary-background);--pico-border-color:var(--pico-secondary-border);--pico-color:var(--pico-secondary-inverse);cursor:pointer}[type=file]::file-selector-button{--pico-background-color:var(--pico-secondary-background);--pico-border-color:var(--pico-secondary-border);--pico-color:var(--pico-secondary-inverse);cursor:pointer}:is(button,[type=submit],[type=button],[role=button]).secondary:is([aria-current]:not([aria-current=false]),:hover,:active,:focus),[type=reset]:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){--pico-background-color:var(--pico-secondary-hover-background);--pico-border-color:var(--pico-secondary-hover-border);--pico-color:var(--pico-secondary-inverse)}[type=file]::file-selector-button:is(:hover,:active,:focus){--pico-background-color:var(--pico-secondary-hover-background);--pico-border-color:var(--pico-secondary-hover-border);--pico-color:var(--pico-secondary-inverse)}:is(button,[type=submit],[type=button],[role=button]).secondary:focus,:is(button,[type=submit],[type=button],[role=button]).secondary[aria-current]:not([aria-current=false]):focus,[type=reset]:focus,[type=reset][aria-current]:not([aria-current=false]):focus{--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000),0 0 0 var(--pico-outline-width) var(--pico-secondary-focus)}[type=file]::file-selector-button:focus{--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000),0 0 0 var(--pico-outline-width) var(--pico-secondary-focus)}[type=file]::file-selector-button:is():focus{--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000),0 0 0 var(--pico-outline-width) var(--pico-secondary-focus)}:is(button,[type=submit],[type=button],[role=button]).contrast{--pico-background-color:var(--pico-contrast-background);--pico-border-color:var(--pico-contrast-border);--pico-color:var(--pico-contrast-inverse)}:is(button,[type=submit],[type=button],[role=button]).contrast:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){--pico-background-color:var(--pico-contrast-hover-background);--pico-border-color:var(--pico-contrast-hover-border);--pico-color:var(--pico-contrast-inverse)}:is(button,[type=submit],[type=button],[role=button]).contrast:focus,:is(button,[type=submit],[type=button],[role=button]).contrast[aria-current]:not([aria-current=false]):focus{--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000),0 0 0 var(--pico-outline-width) var(--pico-contrast-focus)}:is(button,[type=submit],[type=button],[role=button]).outline,[type=reset].outline{--pico-background-color:transparent;--pico-color:var(--pico-primary);--pico-border-color:var(--pico-primary)}:is(button,[type=submit],[type=button],[role=button]).outline:is([aria-current]:not([aria-current=false]),:hover,:active,:focus),[type=reset].outline:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){--pico-background-color:transparent;--pico-color:var(--pico-primary-hover);--pico-border-color:var(--pico-primary-hover)}:is(button,[type=submit],[type=button],[role=button]).outline.secondary,[type=reset].outline{--pico-color:var(--pico-secondary);--pico-border-color:var(--pico-secondary)}:is(button,[type=submit],[type=button],[role=button]).outline.secondary:is([aria-current]:not([aria-current=false]),:hover,:active,:focus),[type=reset].outline:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){--pico-color:var(--pico-secondary-hover);--pico-border-color:var(--pico-secondary-hover)}:is(button,[type=submit],[type=button],[role=button]).outline.contrast{--pico-color:var(--pico-contrast);--pico-border-color:var(--pico-contrast)}:is(button,[type=submit],[type=button],[role=button]).outline.contrast:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){--pico-color:var(--pico-contrast-hover);--pico-border-color:var(--pico-contrast-hover)}:where(button,[type=submit],[type=reset],[type=button],[role=button])[disabled],:where(fieldset[disabled]) :is(button,[type=submit],[type=button],[type=reset],[role=button]){opacity:.5;pointer-events:none}:where(table){border-collapse:collapse;border-spacing:0;text-indent:0;width:100%}td,th{padding:calc(var(--pico-spacing)/ 2) var(--pico-spacing);border-bottom:var(--pico-border-width) solid var(--pico-table-border-color);background-color:var(--pico-background-color);color:var(--pico-color);font-weight:var(--pico-font-weight);text-align:left;text-align:start}tfoot td,tfoot th{border-top:var(--pico-border-width) solid var(--pico-table-border-color);border-bottom:0}table.striped tbody tr:nth-child(odd) td,table.striped tbody tr:nth-child(odd) th{background-color:var(--pico-table-row-stripped-background-color)}:where(audio,canvas,iframe,img,svg,video){vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){height:0;display:none}:where(iframe){border-style:none}img{border-style:none;max-width:100%;height:auto}:where(svg:not([fill])){fill:currentColor}svg:not(:host),svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-size:.875em;font-family:var(--pico-font-family)}pre code,pre samp{font-size:inherit;font-family:inherit}pre{-ms-overflow-style:scrollbar;overflow:auto}code,kbd,pre,samp{border-radius:var(--pico-border-radius);background:var(--pico-code-background-color);color:var(--pico-code-color);font-weight:var(--pico-font-weight);line-height:initial}code,kbd,samp{padding:.375rem;display:inline-block}pre{margin-bottom:var(--pico-spacing);display:block;overflow-x:auto}pre>code,pre>samp{padding:var(--pico-spacing);line-height:var(--pico-line-height);background:0 0;display:block}kbd{background-color:var(--pico-code-kbd-background-color);color:var(--pico-code-kbd-color);vertical-align:baseline}figure{margin:0;padding:0;display:block}figure figcaption{padding:calc(var(--pico-spacing) * .5) 0;color:var(--pico-muted-color)}hr{height:0;margin:var(--pico-typography-spacing-vertical) 0;border:0;border-top:1px solid var(--pico-muted-border-color);color:inherit}[hidden],template{display:none!important}canvas{display:inline-block}input,optgroup,select,textarea{font-size:1rem;line-height:var(--pico-line-height);letter-spacing:inherit;margin:0;font-family:inherit}input{overflow:visible}select{text-transform:none}legend{max-width:100%;color:inherit;white-space:normal;padding:0}textarea{overflow:auto}[type=checkbox],[type=radio]{padding:0}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:0}:-moz-ui-invalid{box-shadow:none}::-ms-expand{display:none}[type=file],[type=range]{border-width:0;padding:0}input:not([type=checkbox],[type=radio],[type=range]){height:calc(1rem * var(--pico-line-height) + var(--pico-form-element-spacing-vertical) * 2 + var(--pico-border-width) * 2)}fieldset{width:100%;margin:0;margin-bottom:var(--pico-spacing);border:0;padding:0}fieldset legend,label{margin-bottom:calc(var(--pico-spacing) * .375);color:var(--pico-color);font-weight:var(--pico-form-label-font-weight,var(--pico-font-weight));display:block}fieldset legend{margin-bottom:calc(var(--pico-spacing) * .5)}button[type=submit],input:not([type=checkbox],[type=radio]),select,textarea{width:100%}input:not([type=checkbox],[type=radio],[type=range],[type=file]),select,textarea{appearance:none;padding:var(--pico-form-element-spacing-vertical) var(--pico-form-element-spacing-horizontal)}input,select,textarea{--pico-background-color:var(--pico-form-element-background-color);--pico-border-color:var(--pico-form-element-border-color);--pico-color:var(--pico-form-element-color);--pico-box-shadow:none;border:var(--pico-border-width) solid var(--pico-border-color);border-radius:var(--pico-border-radius);background-color:var(--pico-background-color);box-shadow:var(--pico-box-shadow);color:var(--pico-color);font-weight:var(--pico-font-weight);transition:background-color var(--pico-transition),border-color var(--pico-transition),color var(--pico-transition),box-shadow var(--pico-transition);outline:0}:where(select,textarea):not([readonly]):is(:active,:focus),input:not([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[readonly]):is(:active,:focus){--pico-background-color:var(--pico-form-element-active-background-color)}:where(select,textarea):not([readonly]):is(:active,:focus),input:not([type=submit],[type=button],[type=reset],[role=switch],[readonly]):is(:active,:focus){--pico-border-color:var(--pico-form-element-active-border-color)}:where(select,textarea):not([readonly]):focus,input:not([type=submit],[type=button],[type=reset],[type=range],[type=file],[readonly]):focus{--pico-box-shadow:0 0 0 var(--pico-outline-width) var(--pico-form-element-focus-color)}:where(fieldset[disabled]) :is(input:not([type=submit],[type=button],[type=reset]),select,textarea),input:not([type=submit],[type=button],[type=reset])[disabled],label[aria-disabled=true],select[disabled],textarea[disabled]{opacity:var(--pico-form-element-disabled-opacity);pointer-events:none}label[aria-disabled=true] input[disabled]{opacity:1}:where(input,select,textarea):not([type=checkbox],[type=radio],[type=date],[type=datetime-local],[type=month],[type=time],[type=week],[type=range])[aria-invalid]{padding-left:var(--pico-form-element-spacing-horizontal);background-position:right .75rem center;background-repeat:no-repeat;background-size:1rem;padding-right:calc(var(--pico-form-element-spacing-horizontal) + 1.5rem)!important;padding-inline-start:var(--pico-form-element-spacing-horizontal)!important;padding-inline-end:calc(var(--pico-form-element-spacing-horizontal) + 1.5rem)!important}:where(input,select,textarea):not([type=checkbox],[type=radio],[type=date],[type=datetime-local],[type=month],[type=time],[type=week],[type=range])[aria-invalid=false]:not(select){background-image:var(--pico-icon-valid)}:where(input,select,textarea):not([type=checkbox],[type=radio],[type=date],[type=datetime-local],[type=month],[type=time],[type=week],[type=range])[aria-invalid=true]:not(select){background-image:var(--pico-icon-invalid)}:where(input,select,textarea)[aria-invalid=false]{--pico-border-color:var(--pico-form-element-valid-border-color)}:where(input,select,textarea)[aria-invalid=false]:is(:active,:focus){--pico-border-color:var(--pico-form-element-valid-active-border-color)!important}:where(input,select,textarea)[aria-invalid=false]:is(:active,:focus):not([type=checkbox],[type=radio]){--pico-box-shadow:0 0 0 var(--pico-outline-width) var(--pico-form-element-valid-focus-color)!important}:where(input,select,textarea)[aria-invalid=true]{--pico-border-color:var(--pico-form-element-invalid-border-color)}:where(input,select,textarea)[aria-invalid=true]:is(:active,:focus){--pico-border-color:var(--pico-form-element-invalid-active-border-color)!important}:where(input,select,textarea)[aria-invalid=true]:is(:active,:focus):not([type=checkbox],[type=radio]){--pico-box-shadow:0 0 0 var(--pico-outline-width) var(--pico-form-element-invalid-focus-color)!important}[dir=rtl] :where(input,select,textarea):not([type=checkbox],[type=radio]):is([aria-invalid],[aria-invalid=true],[aria-invalid=false]){background-position:.75rem}input::placeholder,select:invalid,textarea::placeholder{color:var(--pico-form-element-placeholder-color);opacity:1}input::-webkit-input-placeholder{color:var(--pico-form-element-placeholder-color);opacity:1}textarea::-webkit-input-placeholder{color:var(--pico-form-element-placeholder-color);opacity:1}input:not([type=checkbox],[type=radio]),select,textarea{margin-bottom:var(--pico-spacing)}select::-ms-expand{background-color:#0000;border:0}select:not([multiple],[size]){padding-right:calc(var(--pico-form-element-spacing-horizontal) + 1.5rem);padding-left:var(--pico-form-element-spacing-horizontal);background-image:var(--pico-icon-chevron);background-position:right .75rem center;background-repeat:no-repeat;background-size:1rem;padding-inline-start:var(--pico-form-element-spacing-horizontal);padding-inline-end:calc(var(--pico-form-element-spacing-horizontal) + 1.5rem)}select[multiple] option:checked{background:var(--pico-form-element-selected-background-color);color:var(--pico-form-element-color)}[dir=rtl] select:not([multiple],[size]){background-position:.75rem}textarea{resize:vertical;display:block}textarea[aria-invalid]{--pico-icon-height:calc(1rem * var(--pico-line-height) + var(--pico-form-element-spacing-vertical) * 2 + var(--pico-border-width) * 2);background-position:right .75rem top!important;background-size:1rem var(--pico-icon-height)!important}:where(input,select,textarea,fieldset,.grid)+small{width:100%;margin-top:calc(var(--pico-spacing) * -.75);margin-bottom:var(--pico-spacing);color:var(--pico-muted-color);display:block}:where(input,select,textarea,fieldset,.grid)[aria-invalid=false]+small{color:var(--pico-ins-color)}:where(input,select,textarea,fieldset,.grid)[aria-invalid=true]+small{color:var(--pico-del-color)}label>:where(input,select,textarea){margin-top:calc(var(--pico-spacing) * .25)}label:has([type=checkbox],[type=radio]){cursor:pointer;width:fit-content}[type=checkbox],[type=radio]{appearance:none;margin-top:-.125em;border-width:var(--pico-border-width);vertical-align:middle;cursor:pointer;width:1.25em;height:1.25em;margin-inline-end:.5em}[type=checkbox]::-ms-check{display:none}[type=radio]::-ms-check{display:none}[type=checkbox]:checked,[type=checkbox]:checked:active,[type=checkbox]:checked:focus,[type=radio]:checked,[type=radio]:checked:active,[type=radio]:checked:focus{--pico-background-color:var(--pico-primary-background);--pico-border-color:var(--pico-primary-border);background-image:var(--pico-icon-checkbox);background-position:50%;background-repeat:no-repeat;background-size:.75em}[type=checkbox]~label,[type=radio]~label{cursor:pointer;margin-bottom:0;display:inline-block}[type=checkbox]~label:not(:last-of-type),[type=radio]~label:not(:last-of-type){margin-inline-end:1em}[type=checkbox]:indeterminate{--pico-background-color:var(--pico-primary-background);--pico-border-color:var(--pico-primary-border);background-image:var(--pico-icon-minus);background-position:50%;background-repeat:no-repeat;background-size:.75em}[type=radio]{border-radius:50%}[type=radio]:checked,[type=radio]:checked:active,[type=radio]:checked:focus{--pico-background-color:var(--pico-primary-inverse);background-image:none;border-width:.35em}[type=checkbox][role=switch]{--pico-background-color:var(--pico-switch-background-color);--pico-color:var(--pico-switch-color);border:var(--pico-border-width) solid var(--pico-border-color);background-color:var(--pico-background-color);border-radius:1.25em;width:2.25em;height:1.25em;line-height:1.25em}[type=checkbox][role=switch]:not([aria-invalid]){--pico-border-color:var(--pico-switch-background-color)}[type=checkbox][role=switch]:before{aspect-ratio:1;background-color:var(--pico-color);height:100%;box-shadow:var(--pico-switch-thumb-box-shadow);content:\"\";border-radius:50%;transition:margin .1s ease-in-out;display:block}[type=checkbox][role=switch]:focus{--pico-background-color:var(--pico-switch-background-color);--pico-border-color:var(--pico-switch-background-color)}[type=checkbox][role=switch]:checked{--pico-background-color:var(--pico-switch-checked-background-color);--pico-border-color:var(--pico-switch-checked-background-color);background-image:none}[type=checkbox][role=switch]:checked:before{margin-inline-start:1em}[type=checkbox][role=switch][disabled]{--pico-background-color:var(--pico-border-color)}[type=checkbox][aria-invalid=false]:checked,[type=checkbox][aria-invalid=false]:checked:active,[type=checkbox][aria-invalid=false]:checked:focus,[type=checkbox][role=switch][aria-invalid=false]:checked,[type=checkbox][role=switch][aria-invalid=false]:checked:active,[type=checkbox][role=switch][aria-invalid=false]:checked:focus{--pico-background-color:var(--pico-form-element-valid-border-color)}[type=checkbox]:checked:active[aria-invalid=true],[type=checkbox]:checked:focus[aria-invalid=true],[type=checkbox]:checked[aria-invalid=true],[type=checkbox][role=switch]:checked:active[aria-invalid=true],[type=checkbox][role=switch]:checked:focus[aria-invalid=true],[type=checkbox][role=switch]:checked[aria-invalid=true]{--pico-background-color:var(--pico-form-element-invalid-border-color)}[type=checkbox][aria-invalid=false]:checked,[type=checkbox][aria-invalid=false]:checked:active,[type=checkbox][aria-invalid=false]:checked:focus,[type=checkbox][role=switch][aria-invalid=false]:checked,[type=checkbox][role=switch][aria-invalid=false]:checked:active,[type=checkbox][role=switch][aria-invalid=false]:checked:focus,[type=radio][aria-invalid=false]:checked,[type=radio][aria-invalid=false]:checked:active,[type=radio][aria-invalid=false]:checked:focus{--pico-border-color:var(--pico-form-element-valid-border-color)}[type=checkbox]:checked:active[aria-invalid=true],[type=checkbox]:checked:focus[aria-invalid=true],[type=checkbox]:checked[aria-invalid=true],[type=checkbox][role=switch]:checked:active[aria-invalid=true],[type=checkbox][role=switch]:checked:focus[aria-invalid=true],[type=checkbox][role=switch]:checked[aria-invalid=true],[type=radio]:checked:active[aria-invalid=true],[type=radio]:checked:focus[aria-invalid=true],[type=radio]:checked[aria-invalid=true]{--pico-border-color:var(--pico-form-element-invalid-border-color)}[type=color]::-webkit-color-swatch-wrapper{padding:0}[type=color]::-moz-focus-inner{padding:0}[type=color]::-webkit-color-swatch{border-radius:calc(var(--pico-border-radius) * .5);border:0}[type=color]::-moz-color-swatch{border-radius:calc(var(--pico-border-radius) * .5);border:0}input:not([type=checkbox],[type=radio],[type=range],[type=file]):is([type=date],[type=datetime-local],[type=month],[type=time],[type=week]){--pico-icon-position:.75rem;--pico-icon-width:1rem;padding-right:calc(var(--pico-icon-width) + var(--pico-icon-position));background-image:var(--pico-icon-date);background-position:center right var(--pico-icon-position);background-size:var(--pico-icon-width) auto;background-repeat:no-repeat}input:not([type=checkbox],[type=radio],[type=range],[type=file])[type=time]{background-image:var(--pico-icon-time)}[type=date]::-webkit-calendar-picker-indicator{width:var(--pico-icon-width);margin-right:calc(var(--pico-icon-width) * -1);margin-left:var(--pico-icon-position);opacity:0}[type=datetime-local]::-webkit-calendar-picker-indicator{width:var(--pico-icon-width);margin-right:calc(var(--pico-icon-width) * -1);margin-left:var(--pico-icon-position);opacity:0}[type=month]::-webkit-calendar-picker-indicator{width:var(--pico-icon-width);margin-right:calc(var(--pico-icon-width) * -1);margin-left:var(--pico-icon-position);opacity:0}[type=time]::-webkit-calendar-picker-indicator{width:var(--pico-icon-width);margin-right:calc(var(--pico-icon-width) * -1);margin-left:var(--pico-icon-position);opacity:0}[type=week]::-webkit-calendar-picker-indicator{width:var(--pico-icon-width);margin-right:calc(var(--pico-icon-width) * -1);margin-left:var(--pico-icon-position);opacity:0}@-moz-document url-prefix(){[type=date],[type=datetime-local],[type=month],[type=time],[type=week]{padding-right:var(--pico-form-element-spacing-horizontal)!important;background-image:none!important}}[dir=rtl] :is([type=date],[type=datetime-local],[type=month],[type=time],[type=week]){text-align:right}[type=file]{--pico-color:var(--pico-muted-color);margin-left:calc(var(--pico-outline-width) * -1);padding:calc(var(--pico-form-element-spacing-vertical) * .5) 0;padding-left:var(--pico-outline-width);background:0 0;border:0;border-radius:0}[type=file]::file-selector-button{margin-right:calc(var(--pico-spacing)/ 2);padding:calc(var(--pico-form-element-spacing-vertical) * .5) var(--pico-form-element-spacing-horizontal)}[type=file]:is(:hover,:active,:focus)::file-selector-button{--pico-background-color:var(--pico-secondary-hover-background);--pico-border-color:var(--pico-secondary-hover-border)}[type=file]:focus::file-selector-button{--pico-box-shadow:var(--pico-button-hover-box-shadow,0 0 0 #0000),0 0 0 var(--pico-outline-width) var(--pico-secondary-focus)}[type=range]{appearance:none;background:0 0;width:100%;height:1.25rem}[type=range]::-webkit-slider-runnable-track{border-radius:var(--pico-border-radius);background-color:var(--pico-range-border-color);width:100%;height:.375rem;-webkit-transition:background-color var(--pico-transition),box-shadow var(--pico-transition);transition:background-color var(--pico-transition),box-shadow var(--pico-transition)}[type=range]::-moz-range-track{border-radius:var(--pico-border-radius);background-color:var(--pico-range-border-color);width:100%;height:.375rem;-moz-transition:background-color var(--pico-transition),box-shadow var(--pico-transition);transition:background-color var(--pico-transition),box-shadow var(--pico-transition)}[type=range]::-ms-track{border-radius:var(--pico-border-radius);background-color:var(--pico-range-border-color);width:100%;height:.375rem;-ms-transition:background-color var(--pico-transition),box-shadow var(--pico-transition);transition:background-color var(--pico-transition),box-shadow var(--pico-transition)}[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:2px solid var(--pico-range-thumb-border-color);background-color:var(--pico-range-thumb-color);cursor:pointer;width:1.25rem;height:1.25rem;-webkit-transition:background-color var(--pico-transition),transform var(--pico-transition);transition:background-color var(--pico-transition),transform var(--pico-transition);border-radius:50%;margin-top:-.4375rem}[type=range]::-moz-range-thumb{-webkit-appearance:none;border:2px solid var(--pico-range-thumb-border-color);background-color:var(--pico-range-thumb-color);cursor:pointer;width:1.25rem;height:1.25rem;-moz-transition:background-color var(--pico-transition),transform var(--pico-transition);transition:background-color var(--pico-transition),transform var(--pico-transition);border-radius:50%;margin-top:-.4375rem}[type=range]::-ms-thumb{-webkit-appearance:none;border:2px solid var(--pico-range-thumb-border-color);background-color:var(--pico-range-thumb-color);cursor:pointer;width:1.25rem;height:1.25rem;-ms-transition:background-color var(--pico-transition),transform var(--pico-transition);transition:background-color var(--pico-transition),transform var(--pico-transition);border-radius:50%;margin-top:-.4375rem}[type=range]:active,[type=range]:focus-within{--pico-range-border-color:var(--pico-range-active-border-color);--pico-range-thumb-color:var(--pico-range-thumb-active-color)}[type=range]:active::-webkit-slider-thumb{transform:scale(1.25)}[type=range]:active::-moz-range-thumb{transform:scale(1.25)}[type=range]:active::-ms-thumb{transform:scale(1.25)}input:not([type=checkbox],[type=radio],[type=range],[type=file])[type=search]{background-image:var(--pico-icon-search);background-position:center left calc(var(--pico-form-element-spacing-horizontal) + .125rem);background-repeat:no-repeat;background-size:1rem;padding-inline-start:calc(var(--pico-form-element-spacing-horizontal) + 1.75rem)}input:not([type=checkbox],[type=radio],[type=range],[type=file])[type=search][aria-invalid]{background-position:1.125rem,right .75rem center;padding-inline-start:calc(var(--pico-form-element-spacing-horizontal) + 1.75rem)!important}input:not([type=checkbox],[type=radio],[type=range],[type=file])[type=search][aria-invalid=false]{background-image:var(--pico-icon-search),var(--pico-icon-valid)}input:not([type=checkbox],[type=radio],[type=range],[type=file])[type=search][aria-invalid=true]{background-image:var(--pico-icon-search),var(--pico-icon-invalid)}[dir=rtl] :where(input):not([type=checkbox],[type=radio],[type=range],[type=file])[type=search]{background-position:right 1.125rem center}[dir=rtl] :where(input):not([type=checkbox],[type=radio],[type=range],[type=file])[type=search][aria-invalid]{background-position:right 1.125rem center,.75rem}details{margin-bottom:var(--pico-spacing);display:block}details summary{cursor:pointer;transition:color var(--pico-transition);line-height:1rem;list-style-type:none}details summary:not([role]){color:var(--pico-accordion-close-summary-color)}details summary::-webkit-details-marker{display:none}details summary::marker{display:none}details summary::-moz-list-bullet{list-style-type:none}details summary:after{width:1rem;height:1rem;float:right;background-image:var(--pico-icon-chevron);content:\"\";transition:transform var(--pico-transition);background-position:100%;background-repeat:no-repeat;background-size:1rem;margin-inline-start:calc(var(--pico-spacing,1rem) * .5);display:block;transform:rotate(-90deg)}details summary:focus{outline:0}details summary:focus:not([role]){color:var(--pico-accordion-active-summary-color)}details summary:focus-visible:not([role]){outline:var(--pico-outline-width) solid var(--pico-primary-focus);outline-offset:calc(var(--pico-spacing,1rem) * .5);color:var(--pico-primary)}details summary[role=button]{text-align:left;width:100%}details summary[role=button]:after{height:calc(1rem * var(--pico-line-height,1.5))}details[open]>summary{margin-bottom:var(--pico-spacing)}details[open]>summary:not([role]):not(:focus){color:var(--pico-accordion-open-summary-color)}details[open]>summary:after{transform:rotate(0)}[dir=rtl] details summary{text-align:right}[dir=rtl] details summary:after{float:left;background-position:0}article{margin-bottom:var(--pico-block-spacing-vertical);padding:var(--pico-block-spacing-vertical) var(--pico-block-spacing-horizontal);border-radius:var(--pico-border-radius);background:var(--pico-card-background-color);box-shadow:var(--pico-card-box-shadow)}article>footer,article>header{margin-right:calc(var(--pico-block-spacing-horizontal) * -1);margin-left:calc(var(--pico-block-spacing-horizontal) * -1);padding:calc(var(--pico-block-spacing-vertical) * .66) var(--pico-block-spacing-horizontal);background-color:var(--pico-card-sectioning-background-color)}article>header{margin-top:calc(var(--pico-block-spacing-vertical) * -1);margin-bottom:var(--pico-block-spacing-vertical);border-bottom:var(--pico-border-width) solid var(--pico-card-border-color);border-top-right-radius:var(--pico-border-radius);border-top-left-radius:var(--pico-border-radius)}article>footer{margin-top:var(--pico-block-spacing-vertical);margin-bottom:calc(var(--pico-block-spacing-vertical) * -1);border-top:var(--pico-border-width) solid var(--pico-card-border-color);border-bottom-right-radius:var(--pico-border-radius);border-bottom-left-radius:var(--pico-border-radius)}details.dropdown{border-bottom:none;position:relative}details.dropdown>a:after,details.dropdown>button:after,details.dropdown>summary:after{width:1rem;height:calc(1rem * var(--pico-line-height,1.5));float:right;background-image:var(--pico-icon-chevron);content:\"\";background-position:100%;background-repeat:no-repeat;background-size:1rem;margin-inline-start:.25rem;display:block;transform:rotate(0)translate(.2rem)}nav details.dropdown{margin-bottom:0}details.dropdown>summary:not([role]){height:calc(1rem * var(--pico-line-height) + var(--pico-form-element-spacing-vertical) * 2 + var(--pico-border-width) * 2);padding:var(--pico-form-element-spacing-vertical) var(--pico-form-element-spacing-horizontal);border:var(--pico-border-width) solid var(--pico-form-element-border-color);border-radius:var(--pico-border-radius);background-color:var(--pico-form-element-background-color);color:var(--pico-form-element-placeholder-color);line-height:inherit;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background-color var(--pico-transition),border-color var(--pico-transition),color var(--pico-transition),box-shadow var(--pico-transition)}details.dropdown>summary:not([role]):active,details.dropdown>summary:not([role]):focus{border-color:var(--pico-form-element-active-border-color);background-color:var(--pico-form-element-active-background-color)}details.dropdown>summary:not([role]):focus{box-shadow:0 0 0 var(--pico-outline-width) var(--pico-form-element-focus-color)}details.dropdown>summary:not([role]):focus-visible{outline:0}details.dropdown>summary:not([role])[aria-invalid=false]{--pico-form-element-border-color:var(--pico-form-element-valid-border-color);--pico-form-element-active-border-color:var(--pico-form-element-valid-focus-color);--pico-form-element-focus-color:var(--pico-form-element-valid-focus-color)}details.dropdown>summary:not([role])[aria-invalid=true]{--pico-form-element-border-color:var(--pico-form-element-invalid-border-color);--pico-form-element-active-border-color:var(--pico-form-element-invalid-focus-color);--pico-form-element-focus-color:var(--pico-form-element-invalid-focus-color)}nav details.dropdown{margin:calc(var(--pico-nav-element-spacing-vertical) * -1) 0;display:inline}nav details.dropdown>summary:after{transform:rotate(0)translate(0)}nav details.dropdown>summary:not([role]){height:calc(1rem * var(--pico-line-height) + var(--pico-nav-link-spacing-vertical) * 2);padding:calc(var(--pico-nav-link-spacing-vertical) - var(--pico-border-width) * 2) var(--pico-nav-link-spacing-horizontal)}nav details.dropdown>summary:not([role]):focus-visible{box-shadow:0 0 0 var(--pico-outline-width) var(--pico-primary-focus)}details.dropdown>summary+ul{z-index:99;width:100%;min-width:fit-content;margin:0;margin-top:var(--pico-outline-width);border:var(--pico-border-width) solid var(--pico-dropdown-border-color);border-radius:var(--pico-border-radius);background-color:var(--pico-dropdown-background-color);box-shadow:var(--pico-dropdown-box-shadow);color:var(--pico-dropdown-color);white-space:nowrap;opacity:0;transition:opacity var(--pico-transition),transform 0s ease-in-out 1s;flex-direction:column;padding:0;display:flex;position:absolute;left:0}details.dropdown>summary+ul[dir=rtl]{left:auto;right:0}details.dropdown>summary+ul li{width:100%;padding:calc(var(--pico-form-element-spacing-vertical) * .5) var(--pico-form-element-spacing-horizontal);margin-bottom:0;list-style:none}details.dropdown>summary+ul li:first-of-type{margin-top:calc(var(--pico-form-element-spacing-vertical) * .5)}details.dropdown>summary+ul li:last-of-type{margin-bottom:calc(var(--pico-form-element-spacing-vertical) * .5)}details.dropdown>summary+ul li a{margin:calc(var(--pico-form-element-spacing-vertical) * -.5) calc(var(--pico-form-element-spacing-horizontal) * -1);padding:calc(var(--pico-form-element-spacing-vertical) * .5) var(--pico-form-element-spacing-horizontal);color:var(--pico-dropdown-color);text-overflow:ellipsis;border-radius:0;text-decoration:none;display:block;overflow:hidden}details.dropdown>summary+ul li a:active,details.dropdown>summary+ul li a:focus,details.dropdown>summary+ul li a:focus-visible,details.dropdown>summary+ul li a:hover,details.dropdown>summary+ul li a[aria-current]:not([aria-current=false]){background-color:var(--pico-dropdown-hover-background-color)}details.dropdown>summary+ul li label{width:100%}details.dropdown>summary+ul li:has(label):hover{background-color:var(--pico-dropdown-hover-background-color)}details.dropdown[open]>summary{margin-bottom:0}details.dropdown[open]>summary+ul{opacity:1;transition:opacity var(--pico-transition),transform 0s ease-in-out 0s;transform:scaleY(1)}details.dropdown[open]>summary:before{z-index:1;content:\"\";cursor:default;background:0 0;width:100vw;height:100vh;display:block;position:fixed;inset:0}label>details.dropdown{margin-top:calc(var(--pico-spacing) * .25)}[role=group],[role=search]{width:100%;margin-bottom:var(--pico-spacing);border-radius:var(--pico-border-radius);box-shadow:var(--pico-group-box-shadow,0 0 0 transparent);vertical-align:middle;transition:box-shadow var(--pico-transition);display:inline-flex;position:relative}[role=group] input:not([type=checkbox],[type=radio]),[role=group] select,[role=group]>*,[role=search] input:not([type=checkbox],[type=radio]),[role=search] select,[role=search]>*{flex:auto;margin-bottom:0;position:relative}[role=group] input:not([type=checkbox],[type=radio]):not(:first-child),[role=group] select:not(:first-child),[role=group]>:not(:first-child),[role=search] input:not([type=checkbox],[type=radio]):not(:first-child),[role=search] select:not(:first-child),[role=search]>:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;margin-left:0}[role=group] input:not([type=checkbox],[type=radio]):not(:last-child),[role=group] select:not(:last-child),[role=group]>:not(:last-child),[role=search] input:not([type=checkbox],[type=radio]):not(:last-child),[role=search] select:not(:last-child),[role=search]>:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}[role=group] input:not([type=checkbox],[type=radio]):focus,[role=group] select:focus,[role=group]>:focus,[role=search] input:not([type=checkbox],[type=radio]):focus,[role=search] select:focus,[role=search]>:focus{z-index:2}[role=group] [role=button]:not(:first-child),[role=group] [type=button]:not(:first-child),[role=group] [type=reset]:not(:first-child),[role=group] [type=submit]:not(:first-child),[role=group] button:not(:first-child),[role=group] input:not([type=checkbox],[type=radio]):not(:first-child),[role=group] select:not(:first-child),[role=search] [role=button]:not(:first-child),[role=search] [type=button]:not(:first-child),[role=search] [type=reset]:not(:first-child),[role=search] [type=submit]:not(:first-child),[role=search] button:not(:first-child),[role=search] input:not([type=checkbox],[type=radio]):not(:first-child),[role=search] select:not(:first-child){margin-left:calc(var(--pico-border-width) * -1)}[role=group] [role=button],[role=group] [type=button],[role=group] [type=reset],[role=group] [type=submit],[role=group] button,[role=search] [role=button],[role=search] [type=button],[role=search] [type=reset],[role=search] [type=submit],[role=search] button{width:auto}@supports selector(:has(*)){:is([role=group]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus),[role=search]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus)){--pico-group-box-shadow:var(--pico-group-box-shadow-focus-with-button)}[role=group]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus) input:not([type=checkbox],[type=radio]){border-color:#0000}[role=group]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus) select{border-color:#0000}[role=search]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus) input:not([type=checkbox],[type=radio]){border-color:#0000}[role=search]:has(button:focus,[type=submit]:focus,[type=button]:focus,[role=button]:focus) select{border-color:#0000}:is([role=group]:has(input:not([type=submit],[type=button]):focus,select:focus),[role=search]:has(input:not([type=submit],[type=button]):focus,select:focus)){--pico-group-box-shadow:var(--pico-group-box-shadow-focus-with-input)}[role=group]:has(input:not([type=submit],[type=button]):focus,select:focus) [role=button]{--pico-button-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-border);--pico-button-hover-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-hover-border)}[role=group]:has(input:not([type=submit],[type=button]):focus,select:focus) [type=button]{--pico-button-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-border);--pico-button-hover-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-hover-border)}[role=group]:has(input:not([type=submit],[type=button]):focus,select:focus) [type=submit]{--pico-button-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-border);--pico-button-hover-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-hover-border)}[role=group]:has(input:not([type=submit],[type=button]):focus,select:focus) button{--pico-button-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-border);--pico-button-hover-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-hover-border)}[role=search]:has(input:not([type=submit],[type=button]):focus,select:focus) [role=button]{--pico-button-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-border);--pico-button-hover-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-hover-border)}[role=search]:has(input:not([type=submit],[type=button]):focus,select:focus) [type=button]{--pico-button-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-border);--pico-button-hover-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-hover-border)}[role=search]:has(input:not([type=submit],[type=button]):focus,select:focus) [type=submit]{--pico-button-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-border);--pico-button-hover-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-hover-border)}[role=search]:has(input:not([type=submit],[type=button]):focus,select:focus) button{--pico-button-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-border);--pico-button-hover-box-shadow:0 0 0 var(--pico-border-width) var(--pico-primary-hover-border)}[role=group] [role=button]:focus,[role=group] [type=button]:focus,[role=group] [type=reset]:focus,[role=group] [type=submit]:focus,[role=group] button:focus,[role=search] [role=button]:focus,[role=search] [type=button]:focus,[role=search] [type=reset]:focus,[role=search] [type=submit]:focus,[role=search] button:focus{box-shadow:none}}[role=search]>:first-child{border-top-left-radius:5rem;border-bottom-left-radius:5rem}[role=search]>:last-child{border-top-right-radius:5rem;border-bottom-right-radius:5rem}[aria-busy=true]:not(input,select,textarea,html,form){white-space:nowrap}[aria-busy=true]:not(input,select,textarea,html,form):before{background-image:var(--pico-icon-loading);content:\"\";vertical-align:-.125em;background-repeat:no-repeat;background-size:1em;width:1em;height:1em;display:inline-block}[aria-busy=true]:not(input,select,textarea,html,form):not(:empty):before{margin-inline-end:calc(var(--pico-spacing) * .5)}[aria-busy=true]:not(input,select,textarea,html,form):empty{text-align:center}[role=button][aria-busy=true],[type=button][aria-busy=true],[type=reset][aria-busy=true],[type=submit][aria-busy=true],a[aria-busy=true],button[aria-busy=true]{pointer-events:none}:host,:root{--pico-scrollbar-width:0px}dialog{z-index:999;width:inherit;min-width:100%;height:inherit;min-height:100%;-webkit-backdrop-filter:var(--pico-modal-overlay-backdrop-filter);backdrop-filter:var(--pico-modal-overlay-backdrop-filter);background-color:var(--pico-modal-overlay-background-color);color:var(--pico-color);border:0;justify-content:center;align-items:center;padding:0;display:flex;position:fixed;inset:0}dialog>article{width:100%;max-height:calc(100vh - var(--pico-spacing) * 2);margin:var(--pico-spacing);overflow:auto}@media (width>=576px){dialog>article{max-width:510px}}@media (width>=768px){dialog>article{max-width:700px}}dialog>article>header>*{margin-bottom:0}dialog>article>header .close,dialog>article>header :is(a,button)[rel=prev]{margin:0;margin-left:var(--pico-spacing);float:right;padding:0}dialog>article>footer{text-align:right}dialog>article>footer [role=button],dialog>article>footer button{margin-bottom:0}dialog>article>footer [role=button]:not(:first-of-type),dialog>article>footer button:not(:first-of-type){margin-left:calc(var(--pico-spacing) * .5)}dialog>article .close,dialog>article :is(a,button)[rel=prev]{width:1rem;height:1rem;margin-top:calc(var(--pico-spacing) * -1);margin-bottom:var(--pico-spacing);background-image:var(--pico-icon-close);opacity:.5;transition:opacity var(--pico-transition);background-color:#0000;background-position:50%;background-repeat:no-repeat;background-size:auto 1rem;border:none;margin-left:auto;display:block}dialog>article .close:is([aria-current]:not([aria-current=false]),:hover,:active,:focus),dialog>article :is(a,button)[rel=prev]:is([aria-current]:not([aria-current=false]),:hover,:active,:focus){opacity:1}dialog:not([open]),dialog[open=false]{display:none}.modal-is-open{padding-right:var(--pico-scrollbar-width,0);pointer-events:none;touch-action:none;overflow:hidden}.modal-is-open dialog{pointer-events:auto;touch-action:auto}:where(.modal-is-opening,.modal-is-closing) dialog,:where(.modal-is-opening,.modal-is-closing) dialog>article{animation-duration:.2s;animation-timing-function:ease-in-out;animation-fill-mode:both}:where(.modal-is-opening,.modal-is-closing) dialog{animation-name:modal-overlay;animation-duration:.8s}:where(.modal-is-opening,.modal-is-closing) dialog>article{animation-name:modal;animation-delay:.2s}.modal-is-closing dialog,.modal-is-closing dialog>article{animation-direction:reverse;animation-delay:0s}@keyframes modal-overlay{0%{-webkit-backdrop-filter:none;backdrop-filter:none;background-color:#0000}}@keyframes modal{0%{opacity:0;transform:translateY(-100%)}}:where(nav li):before{float:left;content:\"​\"}nav,nav ul{display:flex}nav{justify-content:space-between;overflow:visible}nav ol,nav ul{align-items:center;margin-bottom:0;padding:0;list-style:none}nav ol:first-of-type,nav ul:first-of-type{margin-left:calc(var(--pico-nav-element-spacing-horizontal) * -1)}nav ol:last-of-type,nav ul:last-of-type{margin-right:calc(var(--pico-nav-element-spacing-horizontal) * -1)}nav li{padding:var(--pico-nav-element-spacing-vertical) var(--pico-nav-element-spacing-horizontal);margin:0;display:inline-block}nav li :where(a,[role=link]){margin:calc(var(--pico-nav-link-spacing-vertical) * -1) calc(var(--pico-nav-link-spacing-horizontal) * -1);padding:var(--pico-nav-link-spacing-vertical) var(--pico-nav-link-spacing-horizontal);border-radius:var(--pico-border-radius);display:inline-block}nav li :where(a,[role=link]):not(:hover){text-decoration:none}nav li [role=button],nav li [type=button],nav li button,nav li input:not([type=checkbox],[type=radio],[type=range],[type=file]),nav li select{height:auto;margin-right:inherit;margin-bottom:0;margin-left:inherit;padding:calc(var(--pico-nav-link-spacing-vertical) - var(--pico-border-width) * 2) var(--pico-nav-link-spacing-horizontal)}nav[aria-label=breadcrumb]{justify-content:start;align-items:center}nav[aria-label=breadcrumb] ul li:not(:first-child){margin-inline-start:var(--pico-nav-link-spacing-horizontal)}nav[aria-label=breadcrumb] ul li a{margin:calc(var(--pico-nav-link-spacing-vertical) * -1) 0;margin-inline-start:calc(var(--pico-nav-link-spacing-horizontal) * -1)}nav[aria-label=breadcrumb] ul li:not(:last-child):after{width:calc(var(--pico-nav-link-spacing-horizontal) * 4);margin:0 calc(var(--pico-nav-link-spacing-horizontal) * -1);content:var(--pico-nav-breadcrumb-divider);color:var(--pico-muted-color);text-align:center;white-space:nowrap;text-decoration:none;display:inline-block;position:absolute}nav[aria-label=breadcrumb] a[aria-current]:not([aria-current=false]){color:inherit;pointer-events:none;background-color:#0000;text-decoration:none}aside li,aside nav,aside ol,aside ul{display:block}aside li{padding:calc(var(--pico-nav-element-spacing-vertical) * .5) var(--pico-nav-element-spacing-horizontal)}aside li a{display:block}aside li [role=button]{margin:inherit}[dir=rtl] nav[aria-label=breadcrumb] ul li:not(:last-child) :after{content:\"\\\\\"}progress{vertical-align:baseline;appearance:none;width:100%;height:.5rem;margin-bottom:calc(var(--pico-spacing) * .5);border-radius:var(--pico-border-radius);background-color:var(--pico-progress-background-color);color:var(--pico-progress-color);border:0;display:inline-block;overflow:hidden}progress::-webkit-progress-bar{border-radius:var(--pico-border-radius);background:0 0}progress[value]::-webkit-progress-value{background-color:var(--pico-progress-color);-webkit-transition:inline-size var(--pico-transition);transition:inline-size var(--pico-transition)}progress::-moz-progress-bar{background-color:var(--pico-progress-color)}@media (prefers-reduced-motion:no-preference){progress:indeterminate{background:var(--pico-progress-background-color) linear-gradient(to right,var(--pico-progress-color) 30%,var(--pico-progress-background-color) 30%) top left/150% 150% no-repeat;animation:1s linear infinite progress-indeterminate}progress:indeterminate[value]::-webkit-progress-value{background-color:#0000}progress:indeterminate::-moz-progress-bar{background-color:#0000}[dir=rtl] progress:indeterminate{animation-direction:reverse}}@keyframes progress-indeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}[data-tooltip]{position:relative}[data-tooltip]:not(a,button,input,[role=button]){cursor:help;border-bottom:1px dotted;text-decoration:none}[data-tooltip]:after,[data-tooltip]:before,[data-tooltip][data-placement=top]:after,[data-tooltip][data-placement=top]:before{z-index:99;border-radius:var(--pico-border-radius);background:var(--pico-tooltip-background-color);content:attr(data-tooltip);color:var(--pico-tooltip-color);font-style:normal;font-weight:var(--pico-font-weight);text-overflow:ellipsis;white-space:nowrap;opacity:0;pointer-events:none;padding:.25rem .5rem;font-size:.875rem;text-decoration:none;display:block;position:absolute;bottom:100%;left:50%;overflow:hidden;transform:translate(-50%,-.25rem)}[data-tooltip]:after,[data-tooltip][data-placement=top]:after{content:\"\";color:var(--pico-tooltip-background-color);background-color:#0000;border-top:.3rem solid;border-left:.3rem solid #0000;border-right:.3rem solid #0000;border-radius:0;padding:0;transform:translate(-50%)}[data-tooltip][data-placement=bottom]:after,[data-tooltip][data-placement=bottom]:before{top:100%;bottom:auto;transform:translate(-50%,.25rem)}[data-tooltip][data-placement=bottom]:after{border:.3rem solid #0000;border-bottom-color:currentColor;transform:translate(-50%,-.3rem)}[data-tooltip][data-placement=left]:after,[data-tooltip][data-placement=left]:before{inset:50% 100% auto auto;transform:translate(-.25rem,-50%)}[data-tooltip][data-placement=left]:after{border:.3rem solid #0000;border-left-color:currentColor;transform:translate(.3rem,-50%)}[data-tooltip][data-placement=right]:after,[data-tooltip][data-placement=right]:before{inset:50% auto auto 100%;transform:translate(.25rem,-50%)}[data-tooltip][data-placement=right]:after{border:.3rem solid #0000;border-right-color:currentColor;transform:translate(-.3rem,-50%)}[data-tooltip]:focus:after,[data-tooltip]:focus:before,[data-tooltip]:hover:after,[data-tooltip]:hover:before{opacity:1}@media (hover:hover) and (pointer:fine){[data-tooltip]:focus:after,[data-tooltip]:focus:before,[data-tooltip]:hover:after,[data-tooltip]:hover:before{--pico-tooltip-slide-to:translate(-50%, -.25rem);opacity:0;animation-name:tooltip-slide;animation-duration:.2s;animation-fill-mode:forwards;transform:translate(-50%,.75rem)}[data-tooltip]:focus:after,[data-tooltip]:hover:after{--pico-tooltip-caret-slide-to:translate(-50%, 0rem);animation-name:tooltip-caret-slide;transform:translate(-50%,-.25rem)}[data-tooltip][data-placement=bottom]:focus:after,[data-tooltip][data-placement=bottom]:focus:before,[data-tooltip][data-placement=bottom]:hover:after,[data-tooltip][data-placement=bottom]:hover:before{--pico-tooltip-slide-to:translate(-50%, .25rem);animation-name:tooltip-slide;transform:translate(-50%,-.75rem)}[data-tooltip][data-placement=bottom]:focus:after,[data-tooltip][data-placement=bottom]:hover:after{--pico-tooltip-caret-slide-to:translate(-50%, -.3rem);animation-name:tooltip-caret-slide;transform:translate(-50%,-.5rem)}[data-tooltip][data-placement=left]:focus:after,[data-tooltip][data-placement=left]:focus:before,[data-tooltip][data-placement=left]:hover:after,[data-tooltip][data-placement=left]:hover:before{--pico-tooltip-slide-to:translate(-.25rem, -50%);animation-name:tooltip-slide;transform:translate(.75rem,-50%)}[data-tooltip][data-placement=left]:focus:after,[data-tooltip][data-placement=left]:hover:after{--pico-tooltip-caret-slide-to:translate(.3rem, -50%);animation-name:tooltip-caret-slide;transform:translate(.05rem,-50%)}[data-tooltip][data-placement=right]:focus:after,[data-tooltip][data-placement=right]:focus:before,[data-tooltip][data-placement=right]:hover:after,[data-tooltip][data-placement=right]:hover:before{--pico-tooltip-slide-to:translate(.25rem, -50%);animation-name:tooltip-slide;transform:translate(-.75rem,-50%)}[data-tooltip][data-placement=right]:focus:after,[data-tooltip][data-placement=right]:hover:after{--pico-tooltip-caret-slide-to:translate(-.3rem, -50%);animation-name:tooltip-caret-slide;transform:translate(-.05rem,-50%)}}@keyframes tooltip-slide{to{transform:var(--pico-tooltip-slide-to);opacity:1}}@keyframes tooltip-caret-slide{50%{opacity:0}to{transform:var(--pico-tooltip-caret-slide-to);opacity:1}}[aria-controls]{cursor:pointer}[aria-disabled=true],[disabled]{cursor:not-allowed}[aria-hidden=false][hidden]{display:initial}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);position:absolute}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation}[dir=rtl]{direction:rtl}@media (prefers-reduced-motion:reduce){:not([aria-busy=true]),:not([aria-busy=true]):after,:not([aria-busy=true]):before{background-attachment:initial!important;scroll-behavior:auto!important;transition-duration:0s!important;transition-delay:0s!important;animation-duration:1ms!important;animation-iteration-count:1!important;animation-delay:-1ms!important}}:root{--primary-color:#ff6b81}body{padding:.5rem 1.5rem 2rem}#dropzone{border:3px dashed var(--pico-muted-border-color);text-align:center;background-color:var(--pico-card-background-color);cursor:pointer;border-radius:12px;margin-bottom:2rem;padding:40px 20px;transition:all .3s}#dropzone.dragging{border-color:var(--pico-primary-background);background-color:#ff6b810d;box-shadow:0 0 15px #ff6b8126}#dropzone svg{color:var(--pico-muted-color);margin-bottom:1rem;transition:color .3s}#dropzone.dragging svg{color:var(--pico-primary-background)}#video-file-input{display:none}.video-container{border-radius:8px;width:100%;display:block;position:relative;overflow:hidden;box-shadow:0 4px 12px #00000040}.video-container video{width:100%;height:auto;display:block}.crop-overlay{pointer-events:none;position:absolute;inset:0;overflow:hidden}.crop-box{box-sizing:border-box;border:2px solid var(--primary-color,#ff6b81);cursor:move;pointer-events:auto;touch-action:none;position:absolute;box-shadow:0 0 0 9999px #00000073}.crop-handle{background:var(--primary-color,#ff6b81);pointer-events:auto;touch-action:none;border:2px solid #fff;border-radius:50%;width:14px;height:14px;position:absolute}.crop-handle[data-handle=nw]{cursor:nwse-resize;top:-8px;left:-8px}.crop-handle[data-handle=ne]{cursor:nesw-resize;top:-8px;right:-8px}.crop-handle[data-handle=sw]{cursor:nesw-resize;bottom:-8px;left:-8px}.crop-handle[data-handle=se]{cursor:nwse-resize;bottom:-8px;right:-8px}.meta-grid{grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.75rem;margin-bottom:1.5rem;display:grid}.meta-item{background:var(--pico-card-background-color);border:1px solid var(--pico-muted-border-color);border-radius:6px;padding:.5rem .75rem;font-size:.85rem}.meta-label{color:var(--pico-muted-color);text-transform:uppercase;letter-spacing:.5px;font-size:.75rem;font-weight:700;display:block}.slider-group{margin-bottom:1.5rem}.slider-group label{justify-content:space-between;align-items:center;font-weight:500;display:flex}.slider-group span.time-val{background:var(--pico-code-background-color);border-radius:4px;padding:2px 6px;font-family:monospace}.trim-visualizer{background-color:var(--pico-muted-border-color);border:1px solid var(--pico-muted-border-color);border-radius:10px;height:20px;margin:1.5rem 0;position:relative;overflow:hidden}.trim-selection{border-left:2px solid var(--pico-primary-background);border-right:2px solid var(--pico-primary-background);background-color:#ff6b8159;height:100%;transition:all .1s;position:absolute;top:0}header.card-header{background-color:var(--pico-card-sectioning-background-color);border-bottom:1px solid var(--pico-muted-border-color);margin:-1.5rem -1.5rem 1.5rem;padding:1rem 1.5rem;font-weight:700}details.config-card{border:1px solid var(--pico-muted-border-color);background-color:var(--pico-card-background-color);border-radius:12px;margin-bottom:0;padding:0;overflow:hidden}details.config-card>summary.card-header{background-color:var(--pico-card-sectioning-background-color);border-bottom:1px solid var(--pico-muted-border-color);cursor:pointer;justify-content:space-between;align-items:center;gap:.75rem;margin:0;padding:1rem 1.5rem;font-weight:700;list-style:none;transition:background-color .15s;display:flex}details.config-card>summary.card-header:hover{background-color:var(--pico-muted-border-color)}details.config-card:not([open])>summary.card-header{border-bottom:none}details.config-card>summary.card-header::-webkit-details-marker{display:none}details.config-card>summary.card-header:after{content:\"\";opacity:.55;background:0 0;border:2px solid;border-top:0;border-left:0;flex:none;width:.5rem;height:.5rem;transition:transform .2s;transform:rotate(45deg)}details.config-card[open]>summary.card-header:after{transform:rotate(-135deg)}.config-card-body{padding:1.25rem 1.5rem}.settings-stack{flex-direction:column;gap:1.5rem;display:flex}.audio-waveform{background:var(--pico-card-sectioning-background-color);border:1px solid var(--pico-muted-border-color);width:100%;height:90px;color:var(--primary-color);cursor:pointer;border-radius:6px;margin-top:.75rem;display:block}.quality-readout{grid-template-columns:1fr 1fr;align-items:center;gap:.5rem;margin-bottom:.75rem;display:grid}.quality-rate{color:var(--pico-muted-color);font-family:monospace;font-size:.85rem;font-weight:600}.size-estimate{border-top:1px dashed var(--pico-muted-border-color);margin-top:1rem;padding-top:.75rem;font-size:.9rem}.size-estimate strong{color:var(--pico-primary);font-family:monospace}.log-section{margin:0}.log-section pre{color:#a6e22e;background-color:#1a1a1a;border-radius:6px;max-height:200px;margin:0;padding:10px;font-family:Courier New,Courier,monospace;font-size:.8rem;overflow-y:auto}.theme-toggle-btn{cursor:pointer;color:var(--pico-color);background:0 0;border:none;border-radius:50%;justify-content:center;align-items:center;width:40px;height:40px;padding:.5rem;transition:background-color .2s;display:inline-flex}.theme-toggle-btn:hover{background-color:var(--pico-muted-border-color)}.theme-toggle-btn svg{width:20px;height:20px}nav.brand-nav{border-bottom:1px solid var(--pico-muted-border-color);margin-bottom:2rem;padding:.5rem 0}.preset-badge{background:var(--pico-primary-background);color:var(--pico-primary-inverse);vertical-align:middle;border-radius:4px;margin-left:.5rem;padding:2px 6px;font-size:.75rem}#loaded-file-section{container-type:inline-size}.workshop-layout{grid-template-columns:minmax(0,1fr);gap:1.5rem;margin-top:1.5rem;display:grid}@container (width>=720px) and (width<=1099px){.workshop-layout{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}.workshop-output{grid-column:1/-1}}@container (width>=1100px){.workshop-layout{grid-template-columns:minmax(0,.95fr) minmax(0,1.15fr) minmax(0,1fr);align-items:start}}.workshop-sidebar,.workshop-main,.workshop-output{flex-direction:column;gap:1.5rem;display:flex}.output-actions{flex-direction:column;gap:.5rem;display:flex}.output-actions button{width:100%;margin:0;padding:.8rem 2rem;font-size:1.1rem;font-weight:700}.batch-thumbs{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.4rem;max-height:40vh;display:grid;overflow-y:auto}.batch-thumb{aspect-ratio:1;object-fit:cover;border:1px solid var(--pico-muted-border-color);background:var(--pico-card-sectioning-background-color);border-radius:4px;width:100%}#batch-queue{flex-direction:column;gap:.5rem;max-height:60vh;display:flex;overflow-y:auto}.batch-item{border:1px solid var(--pico-muted-border-color);border-radius:6px;grid-template-columns:1fr auto auto;align-items:center;gap:.75rem;padding:.5rem .75rem;font-size:.85rem;display:grid}.batch-item-name{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.batch-item-status{color:var(--pico-muted-color);font-family:monospace;font-size:.78rem}.batch-item[data-status=done] .batch-item-status{color:#2ecc71}.batch-item[data-status=error] .batch-item-status{color:#f92672}.batch-item-dl{font-size:.78rem;font-weight:600}.output-shell{border:2px dashed var(--pico-muted-border-color);min-height:240px;color:var(--pico-muted-color);text-align:center;border-radius:12px;flex-direction:column;justify-content:center;align-items:center;gap:.75rem;padding:2rem;display:flex}.output-shell svg{opacity:.5}.output-shell p{margin:0;font-size:.9rem}.workshop-output>section{margin-top:0!important}.range-slider-wrapper{align-items:center;height:40px;margin-top:.5rem;margin-bottom:.75rem;display:flex;position:relative}.range-slider-wrapper .trim-visualizer{background-color:var(--pico-muted-border-color);z-index:1;border-radius:5px;width:100%;height:10px;margin:0;position:absolute;top:15px;left:0;right:0}.range-slider-wrapper .range-slider-input{pointer-events:none;appearance:none;width:100%;position:absolute;height:40px!important;box-shadow:none!important;background:0 0!important;border:none!important;margin:0!important;padding:0!important}.range-slider-wrapper .range-slider-input::-webkit-slider-thumb{pointer-events:auto;appearance:none;background:var(--pico-primary-background,#ff6b81);cursor:pointer;border:2.5px solid #fff;border-radius:50%;width:20px;height:20px;margin-top:0;transition:transform .12s;box-shadow:0 1.5px 5px #00000073}.range-slider-wrapper .range-slider-input::-webkit-slider-thumb:hover{transform:scale(1.22)}.range-slider-wrapper .range-slider-input::-moz-range-thumb{pointer-events:auto;background:var(--pico-primary-background,#ff6b81);cursor:pointer;border:2.5px solid #fff;border-radius:50%;width:20px;height:20px;transition:transform .12s;box-shadow:0 1.5px 5px #00000073}.range-slider-wrapper .range-slider-input::-moz-range-thumb:hover{transform:scale(1.22)}.range-slider-wrapper .range-slider-input::-webkit-slider-runnable-track{background:0 0!important;border:none!important}.range-slider-wrapper .range-slider-input::-moz-range-track{background:0 0!important;border:none!important}.image-canvas-stage{border:1px solid var(--pico-muted-border-color);cursor:crosshair;background-color:#0000;background-image:linear-gradient(45deg,#7878782e 25%,#0000 25%),linear-gradient(-45deg,#7878782e 25%,#0000 25%),linear-gradient(45deg,#0000 75%,#7878782e 75%),linear-gradient(-45deg,#0000 75%,#7878782e 75%);background-position:0 0,0 10px,10px -10px,-10px 0;background-repeat:repeat,repeat,repeat,repeat;background-size:20px 20px;background-attachment:scroll,scroll,scroll,scroll;background-origin:padding-box,padding-box,padding-box,padding-box;background-clip:border-box,border-box,border-box,border-box;border-radius:8px;width:100%;min-height:320px;position:relative;overflow:hidden}.image-toolbar{grid-template-columns:auto minmax(150px,220px) 1fr;align-items:center;gap:.65rem;margin-bottom:.75rem;display:grid}.canvas-tool-picker{flex-wrap:wrap;align-items:center;gap:.5rem 1.25rem;margin-top:.75rem;display:flex}.canvas-tool-picker .canvas-tool-label{text-transform:uppercase;letter-spacing:.5px;color:var(--pico-muted-color);font-size:.75rem;font-weight:700}.canvas-tool-picker label{cursor:pointer;align-items:center;gap:.4rem;margin:0;display:inline-flex}.canvas-tool-picker label:has(input:disabled){opacity:.45;cursor:not-allowed}.tool-badge{border:1px solid #0000;border-radius:999px;justify-self:end;padding:.3rem .55rem;font-size:.8rem;font-weight:600}.tool-badge-crop{color:#fff;background:#ff6b81d9;border-color:#ff6b81}.tool-badge-paint{color:#fff;background:#2ecc71d9;border-color:#2ecc71}@media (width<=640px){.image-toolbar{grid-template-columns:1fr}.tool-badge{justify-self:start}}.image-canvas-stage canvas{display:block;position:absolute}#image-mask-canvas{touch-action:none}.image-canvas-stage.is-crop-mode{cursor:move}.image-canvas-stage.is-paint-mode{cursor:crosshair}", n = "\n<nav class=\"brand-nav\">\n      <ul>\n        <li>\n          <strong><code>&lt;media-converter&gt;</code></strong>\n        </li>\n      </ul>\n      <ul>\n        <li>\n          <button id=\"theme-toggle\" class=\"theme-toggle-btn\" aria-label=\"Toggle theme\">\n            <!-- Moon Icon (Dark Mode active, click to light) -->\n            <svg\n              id=\"theme-icon-moon\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              fill=\"none\"\n              viewBox=\"0 0 24 24\"\n              stroke-width=\"2\"\n              stroke=\"currentColor\"\n            >\n              <path\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                d=\"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z\"\n              />\n            </svg>\n            <!-- Sun Icon (Light Mode active, click to dark, hidden by default in JS) -->\n            <svg\n              id=\"theme-icon-sun\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              fill=\"none\"\n              viewBox=\"0 0 24 24\"\n              stroke-width=\"2\"\n              stroke=\"currentColor\"\n              style=\"display: none\"\n            >\n              <path\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                d=\"M12 3v2.25m0 13.5V21M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M3 12h2.25m13.5 0H21M6.34 17.66l-1.42 1.42m12.72-12.72l-1.42 1.42M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z\"\n              />\n            </svg>\n          </button>\n        </li>\n      </ul>\n    </nav>\n\n    <main>\n      <!-- Step 1: drop a file (full-width entry point) -->\n      <div id=\"dropzone\" role=\"button\" tabindex=\"0\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"48\"\n          height=\"48\"\n          fill=\"none\"\n          viewBox=\"0 0 24 24\"\n          stroke=\"currentColor\"\n          stroke-width=\"1.5\"\n        >\n          <path\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            d=\"M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z\"\n          />\n        </svg>\n        <h3>Drag & Drop media file here</h3>\n        <p style=\"margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--pico-muted-color)\">\n          or click to select a file from your device\n        </p>\n        <small style=\"font-size: 0.8rem; opacity: 0.7\"\n          >Supports video (MP4, WebM, MOV), images (PNG, JPG, WebP, AVIF), and audio (MP3, WAV, M4A, FLAC, OGG)</small\n        >\n        <input type=\"file\" id=\"video-file-input\" accept=\"video/*,image/*,audio/*\" multiple />\n      </div>\n\n      <!-- Loaded media: 3-column workflow (info | settings | output) -->\n      <section id=\"loaded-file-section\" style=\"display: none\">\n        <h2 style=\"font-size: 1.5rem; margin-bottom: 1rem\">🎬 Source Media Workshop</h2>\n\n        <div id=\"video-workspace\" class=\"workshop-layout\">\n          <!-- Column 1: input / info -->\n          <div class=\"workshop-sidebar\">\n            <!-- Live Video Preview & Seeking -->\n            <article style=\"padding: 1rem; margin-bottom: 0\">\n              <header class=\"card-header\" style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem\">\n                Original Video Player\n              </header>\n              <div class=\"video-container\">\n                <video id=\"preview-video\" controls muted playsinline></video>\n                <div id=\"video-crop-overlay\" class=\"crop-overlay\" style=\"display: none\">\n                  <div class=\"crop-box\" id=\"video-crop-box\">\n                    <span class=\"crop-handle\" data-handle=\"nw\"></span>\n                    <span class=\"crop-handle\" data-handle=\"ne\"></span>\n                    <span class=\"crop-handle\" data-handle=\"sw\"></span>\n                    <span class=\"crop-handle\" data-handle=\"se\"></span>\n                  </div>\n                </div>\n              </div>\n              <small style=\"display: block; text-align: center; margin-top: 0.5rem; color: var(--pico-muted-color)\">\n                💡 Use player's controls or sliders to scrub frames for cutouts\n              </small>\n            </article>\n\n            <!-- Source Video Properties -->\n            <article style=\"padding: 1rem; margin-bottom: 0\">\n              <header class=\"card-header\" style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem\">\n                Attributes & Metadata\n              </header>\n\n              <div class=\"meta-grid\">\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">File Name</span>\n                  <span id=\"meta-name\" style=\"word-break: break-all; font-weight: 500\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">File Size</span>\n                  <span id=\"meta-size\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">Duration</span>\n                  <span id=\"meta-duration\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">Resolution</span>\n                  <span id=\"meta-resolution\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">Aspect Ratio</span>\n                  <span id=\"meta-aspect\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">Video Codec</span>\n                  <span id=\"meta-vcodec\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">Original FPS</span>\n                  <span id=\"meta-fps\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">Audio Tracks</span>\n                  <span id=\"meta-atrack\">-</span>\n                </div>\n              </div>\n\n              <div\n                style=\"\n                  background-color: var(--pico-card-sectioning-background-color);\n                  border: 1px solid var(--pico-muted-border-color);\n                  border-radius: 6px;\n                  padding: 0.75rem;\n                \"\n              >\n                <strong style=\"font-size: 0.85rem; display: block; margin-bottom: 0.25rem\"\n                  >📝 Embedded Metadata Tags</strong\n                >\n                <pre id=\"meta-tags\" style=\"margin: 0; font-size: 0.8rem; max-height: 120px; overflow-y: auto\">\nNone detected</pre\n                >\n              </div>\n            </article>\n          </div>\n          <!-- Column 2: conversion settings -->\n          <div class=\"workshop-main\">\n            <!-- Settings & Form Options Block -->\n            <form id=\"conversion-form\" class=\"settings-stack\" style=\"margin-bottom: 0\">\n                <details class=\"config-card\" id=\"panel-processing\">\n                  <summary class=\"card-header\">⚡ Processing Mode</summary>\n                  <div class=\"config-card-body\">\n                    <fieldset style=\"margin-bottom: 0\">\n                      <label for=\"fast-copy-tag\">\n                        <input type=\"checkbox\" id=\"fast-copy-tag\" name=\"fast-copy-tag\" />\n                        ⚡ Fast Copy Mode (Only Trim, No Re-encoding)\n                      </label>\n                      <span\n                        class=\"help-text\"\n                        style=\"font-size: 0.8rem; color: var(--pico-muted-color); display: block; margin-top: 0.25rem; margin-left: 1.5rem\"\n                      >\n                        Copies streams without re-encoding — instant, lossless trims\n                      </span>\n                    </fieldset>\n                  </div>\n                </details>\n\n                <details class=\"config-card\" id=\"panel-trim\">\n                  <summary class=\"card-header\">✂️ Time Crop & Trim</summary>\n                  <div class=\"config-card-body\">\n                  <fieldset>\n                    <label for=\"enable-trim\">\n                      <input type=\"checkbox\" id=\"enable-trim\" name=\"enable-trim\" />\n                      Enable Trimming / Time Crop\n                    </label>\n                  </fieldset>\n\n                  <div id=\"trim-controls-group\" style=\"display: none; padding-top: 0.5rem\">\n                    <div class=\"slider-group\" style=\"margin-bottom: 0.5rem\">\n                      <div\n                        style=\"\n                          display: flex;\n                          justify-content: space-between;\n                          align-items: center;\n                          margin-bottom: 0.5rem;\n                        \"\n                      >\n                        <span style=\"font-weight: 500; font-size: 0.9rem\">Cut / Clip Window Range:</span>\n                        <span class=\"time-val\" style=\"font-family: monospace; font-size: 0.85rem; padding: 2px 6px\">\n                          <span id=\"trim-start-val\" style=\"font-weight: bold; color: var(--primary-color)\">0.00s</span>\n                          to\n                          <span id=\"trim-end-val\" style=\"font-weight: bold; color: var(--primary-color)\">10.00s</span>\n                        </span>\n                      </div>\n\n                      <div class=\"range-slider-wrapper\">\n                        <div class=\"trim-visualizer\">\n                          <div class=\"trim-selection\" id=\"trim-selection-bar\"></div>\n                        </div>\n                        <input\n                          type=\"range\"\n                          id=\"trim-start\"\n                          class=\"range-slider-input\"\n                          name=\"trim-start\"\n                          min=\"0\"\n                          max=\"100\"\n                          step=\"0.01\"\n                          value=\"0\"\n                          style=\"z-index: 3\"\n                        />\n                        <input\n                          type=\"range\"\n                          id=\"trim-end\"\n                          class=\"range-slider-input\"\n                          name=\"trim-end\"\n                          min=\"0\"\n                          max=\"100\"\n                          step=\"0.01\"\n                          value=\"100\"\n                          style=\"z-index: 2\"\n                        />\n                      </div>\n\n                      <small\n                        style=\"\n                          display: block;\n                          color: var(--pico-muted-color);\n                          text-align: center;\n                          margin-top: 0.25rem;\n                          font-size: 0.75rem;\n                        \"\n                      >\n                        💡 Drag the left/right handles above to set your trimming window.\n                      </small>\n                    </div>\n                  </div>\n                \n                  </div>\n                </details>\n\n                <!-- Spatial crop / framing -->\n                <details class=\"config-card\" id=\"panel-crop\">\n                  <summary class=\"card-header\">🔲 Crop / Frame</summary>\n                  <div class=\"config-card-body\">\n                    <fieldset>\n                      <label for=\"enable-crop-video\">\n                        <input type=\"checkbox\" id=\"enable-crop-video\" name=\"enable-crop-video\" />\n                        Enable Frame Cropping\n                      </label>\n                    </fieldset>\n\n                    <div id=\"crop-controls-group\" style=\"display: none; padding-top: 0.5rem\">\n                      <small style=\"display: block; color: var(--pico-muted-color); margin-bottom: 0.75rem; font-size: 0.75rem\">\n                        💡 Drag the box or its corners on the preview to set the crop region.\n                      </small>\n                      <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                        <div>\n                          <label for=\"crop-x\">X</label>\n                          <input type=\"number\" id=\"crop-x\" min=\"0\" value=\"0\" />\n                        </div>\n                        <div>\n                          <label for=\"crop-y\">Y</label>\n                          <input type=\"number\" id=\"crop-y\" min=\"0\" value=\"0\" />\n                        </div>\n                      </div>\n                      <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                        <div>\n                          <label for=\"crop-w\">Width</label>\n                          <input type=\"number\" id=\"crop-w\" min=\"1\" value=\"1\" />\n                        </div>\n                        <div>\n                          <label for=\"crop-h\">Height</label>\n                          <input type=\"number\" id=\"crop-h\" min=\"1\" value=\"1\" />\n                        </div>\n                      </div>\n                      <div class=\"grid\" style=\"margin-bottom: 0\">\n                        <button type=\"button\" id=\"crop-full\" class=\"secondary\">Use Full Frame</button>\n                        <button type=\"button\" id=\"crop-square\" class=\"secondary\">Centered Square</button>\n                      </div>\n                    </div>\n                  </div>\n                </details>\n\n                <!-- Box 2: Aspect and Dimension Resizing -->\n                <details class=\"config-card\" id=\"panel-resize\">\n                  <summary class=\"card-header\">📐 Resolution & Aspect Ratio Resize</summary>\n                  <div class=\"config-card-body\">\n                  <fieldset>\n                    <label for=\"enable-resize\">\n                      <input type=\"checkbox\" id=\"enable-resize\" name=\"enable-resize\" />\n                      Enable Video Resizing\n                    </label>\n                  </fieldset>\n\n                  <div id=\"resize-controls-group\" style=\"display: none; padding-top: 0.5rem\">\n                    <fieldset>\n                      <label for=\"resize-preset\">Preset Dimensions</label>\n                      <select id=\"resize-preset\" name=\"resize-preset\">\n                        <option value=\"custom\" selected>Custom Size</option>\n                        <option value=\"1920\">1080p Full HD (Max 1920px)</option>\n                        <option value=\"1280\">720p HD (Max 1280px)</option>\n                        <option value=\"854\">480p SD (Max 854px)</option>\n                        <option value=\"640\">360p (Max 640px)</option>\n                        <option value=\"square-1080\">Square 1:1 HD (1080x1080)</option>\n                        <option value=\"square-720\">Square 1:1 Standard (720x720)</option>\n                      </select>\n                    </fieldset>\n\n                    <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                      <div>\n                        <label for=\"resize-width\">Width (px)</label>\n                        <input\n                          type=\"number\"\n                          id=\"resize-width\"\n                          name=\"resize-width\"\n                          min=\"16\"\n                          placeholder=\"Original Width\"\n                        />\n                      </div>\n                      <div>\n                        <label for=\"resize-height\">Height (px)</label>\n                        <input\n                          type=\"number\"\n                          id=\"resize-height\"\n                          name=\"resize-height\"\n                          min=\"16\"\n                          placeholder=\"Original Height\"\n                        />\n                      </div>\n                    </div>\n\n                    <div class=\"grid\" style=\"align-items: center; margin-top: 0.5rem\">\n                      <div>\n                        <label for=\"preserve-aspect\">\n                          <input type=\"checkbox\" id=\"preserve-aspect\" name=\"preserve-aspect\" checked />\n                          Lock Aspect Ratio\n                        </label>\n                      </div>\n                      <div>\n                        <label for=\"resize-fit\">Fit Mode</label>\n                        <select id=\"resize-fit\" name=\"resize-fit\">\n                          <option value=\"fill\">Fill (Stretch)</option>\n                          <option value=\"contain\" selected>Contain (Letterbox)</option>\n                          <option value=\"cover\">Cover (Crop)</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                \n                  </div>\n                </details>\n\n                <details class=\"config-card\" id=\"panel-codec\">\n                  <summary class=\"card-header\">💿 Output Format & Codec</summary>\n                  <div class=\"config-card-body\">\n                    <div class=\"grid\" style=\"margin-bottom: 0\">\n                      <div>\n                        <label for=\"out-format\">Output Format / Container</label>\n                        <select id=\"out-format\" name=\"out-format\">\n                          <option value=\"mp4\" selected>MP4 (.mp4) - Most Compatible</option>\n                          <option value=\"webm\">WebM (.webm) - Modern Open-Source</option>\n                        </select>\n                      </div>\n                      <div>\n                        <label for=\"out-vcodec\">Video Encoder Codec</label>\n                        <select id=\"out-vcodec\" name=\"out-vcodec\">\n                          <option value=\"avc\" selected>H.264 / AVC (High compatibility)</option>\n                          <option value=\"hevc\">H.265 / HEVC (High compression)</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </details>\n\n                <details class=\"config-card\" id=\"panel-compression\">\n                  <summary class=\"card-header\">🗜️ Compression & Quality</summary>\n                  <div class=\"config-card-body\">\n                    <div class=\"slider-group\" style=\"margin-bottom: 0\">\n                      <label for=\"out-quality\" style=\"display: block; margin-bottom: 0.5rem\">\n                        Video Compression (Subjective Quality):\n                      </label>\n                      <div class=\"quality-readout\">\n                        <span>\n                          <span\n                            class=\"time-val\"\n                            id=\"out-quality-val\"\n                            style=\"background-color: var(--pico-primary-background); color: var(--pico-primary-inverse)\"\n                            >Medium</span\n                          >\n                          <span id=\"out-quality-rate\" class=\"quality-rate\">~3.5 Mbps</span>\n                        </span>\n                        <span\n                          id=\"quality-help\"\n                          style=\"font-size: 0.8rem; display: block; color: var(--pico-muted-color); margin-top: 0.25rem\"\n                        >\n                          Balanced bitrate and visual fidelity for typical social/web sharing.\n                        </span>\n                      </div>\n                      <input type=\"range\" id=\"out-quality\" name=\"out-quality\" min=\"1\" max=\"5\" value=\"3\" step=\"1\" />\n\n                      <!-- Custom Bitrate Override Option -->\n                      <div\n                        style=\"\n                          margin-top: 1rem;\n                          border-top: 1px dashed var(--pico-muted-border-color);\n                          padding-top: 0.75rem;\n                        \"\n                      >\n                        <label for=\"use-custom-bitrate\">\n                          <input type=\"checkbox\" id=\"use-custom-bitrate\" name=\"use-custom-bitrate\" />\n                          🔧 Use Explicit Target Bitrate Override\n                        </label>\n                        <div id=\"custom-bitrate-group\" style=\"display: none; margin-top: 0.6rem\">\n                          <div class=\"grid\" style=\"align-items: center; margin-bottom: 0\">\n                            <div>\n                              <label for=\"custom-bitrate\" style=\"font-size: 0.8rem\">Target Bitrate (bps):</label>\n                              <input\n                                type=\"number\"\n                                id=\"custom-bitrate\"\n                                name=\"custom-bitrate\"\n                                placeholder=\"e.g. 3500000\"\n                                min=\"100000\"\n                                step=\"50000\"\n                                value=\"3500000\"\n                                style=\"margin-bottom: 0\"\n                              />\n                            </div>\n                            <div style=\"display: flex; align-items: flex-end; padding-top: 1.4rem\">\n                              <span\n                                class=\"time-val\"\n                                id=\"custom-bitrate-mbps-label\"\n                                style=\"\n                                  font-family: monospace;\n                                  font-size: 0.85rem;\n                                  font-weight: bold;\n                                  background: var(--pico-code-background-color);\n                                  padding: 8px 12px;\n                                  border-radius: 4px;\n                                  display: inline-block;\n                                \"\n                                >3.50 Mbps</span\n                              >\n                            </div>\n                          </div>\n                          <small style=\"display: block; color: var(--pico-muted-color); margin-top: 0.25rem\">\n                            💡 Provide standard bits per second (e.g. 5,000,000 is 5.0 Mbps, 800,000 is 800 kbps).\n                          </small>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </details>\n\n                <details class=\"config-card\" id=\"panel-rotation\">\n                  <summary class=\"card-header\">🔄 Rotation</summary>\n                  <div class=\"config-card-body\">\n                    <div class=\"grid\" style=\"align-items: center; margin-bottom: 0\">\n                      <div>\n                        <label for=\"rotate-correction\">Rotation Correction</label>\n                        <select id=\"rotate-correction\" name=\"rotate-correction\">\n                          <option value=\"0\" selected>0° (Keep natural state)</option>\n                          <option value=\"90\">90° Clockwise</option>\n                          <option value=\"180\">180° Half-flip</option>\n                          <option value=\"270\">270° Counter-Clockwise</option>\n                        </select>\n                      </div>\n                      <div>\n                        <fieldset style=\"margin-bottom: 0; padding-top: 1.25rem\">\n                          <label for=\"allow-rot-metadata\">\n                            <input type=\"checkbox\" id=\"allow-rot-metadata\" name=\"allow-rot-metadata\" checked />\n                            Allow Rotation Metadata\n                          </label>\n                        </fieldset>\n                      </div>\n                    </div>\n                  </div>\n                </details>\n\n                <details class=\"config-card\" id=\"panel-resample\">\n                  <summary class=\"card-header\">⏱️ Frame Rate Resample</summary>\n                  <div class=\"config-card-body\">\n                    <label for=\"enable-fps\">\n                      <input type=\"checkbox\" id=\"enable-fps\" name=\"enable-fps\" />\n                      ⏱️ Resample / Normalize Frame Rate (FPS)\n                    </label>\n                    <div id=\"fps-controls-group\" style=\"display: none; margin-top: 0.6rem\">\n                      <div class=\"grid\" style=\"align-items: center; margin-bottom: 0\">\n                        <div>\n                          <label for=\"target-fps\" style=\"font-size: 0.8rem\">Target Frame Rate (FPS):</label>\n                          <select id=\"target-fps\" name=\"target-fps\" style=\"margin-bottom: 0\">\n                            <option value=\"15\">15 FPS (Classic / Low bandwidth)</option>\n                            <option value=\"24\">24 FPS (Cinematic standard)</option>\n                            <option value=\"25\">25 FPS (PAL standard)</option>\n                            <option value=\"30\" selected>30 FPS (Standard smooth NTSC)</option>\n                            <option value=\"50\">50 FPS (PAL high-framerate)</option>\n                            <option value=\"60\">60 FPS (Ultra smooth / gaming standard)</option>\n                          </select>\n                        </div>\n                        <div>\n                          <label for=\"fps-mode\" style=\"font-size: 0.8rem\">Resampling Mode:</label>\n                          <select id=\"fps-mode\" name=\"fps-mode\" style=\"margin-bottom: 0\">\n                            <option value=\"duplicate\" selected>Frame Repeating (Fast / Standard)</option>\n                            <option value=\"blend\">Traditional Bidirectional Blending (Smooth)</option>\n                          </select>\n                        </div>\n                      </div>\n                      <small style=\"display: block; color: var(--pico-muted-color); margin-top: 0.5rem; font-size: 0.8rem\">\n                        💡 <strong>Bidirectional Blending</strong> uses hardware-accelerated 2D canvas interpolation to\n                        blend adjacent source frames dynamically, making video playback look cinematic and ultra-smooth\n                        on higher frame rates.\n                      </small>\n                    </div>\n                  </div>\n                </details>\n\n                <!-- Box 4: Audio Track Handling -->\n                <details class=\"config-card\" id=\"panel-audio\">\n                  <summary class=\"card-header\">🔊 Audio Stream Handlers</summary>\n                  <div class=\"config-card-body\">\n                  <fieldset>\n                    <legend style=\"font-weight: 500; font-size: 0.95rem; margin-bottom: 0.5rem\">\n                      Audio Mode Select\n                    </legend>\n                    <label for=\"audio-mode-copy\">\n                      <input type=\"radio\" id=\"audio-mode-copy\" name=\"audio-mode\" value=\"copy\" checked />\n                      ⚡ Retain Original Audio Stream (Raw Copy)\n                    </label>\n                    <label for=\"audio-mode-transcode\">\n                      <input type=\"radio\" id=\"audio-mode-transcode\" name=\"audio-mode\" value=\"transcode\" />\n                      ⚙️ Transcode / Convert Audio\n                    </label>\n                    <label for=\"audio-mode-mute\">\n                      <input type=\"radio\" id=\"audio-mode-mute\" name=\"audio-mode\" value=\"mute\" />\n                      🔇 Strip Audio Track (Mute Video)\n                    </label>\n                  </fieldset>\n\n                  <div\n                    id=\"audio-transcode-controls\"\n                    style=\"\n                      display: none;\n                      border-top: 1px solid var(--pico-muted-border-color);\n                      padding-top: 1rem;\n                      margin-top: 0.5rem;\n                    \"\n                  >\n                    <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                      <div>\n                        <label for=\"audio-codec\">Audio Codec</label>\n                        <select id=\"audio-codec\" name=\"audio-codec\">\n                          <option value=\"aac\" selected>AAC (Highly compatible)</option>\n                          <option value=\"opus\">Opus (High quality, lower bitrate)</option>\n                          <option value=\"mp3\">MP3</option>\n                          <option value=\"flac\">FLAC (Lossless)</option>\n                        </select>\n                      </div>\n                      <div>\n                        <label for=\"audio-bitrate\">Bitrate</label>\n                        <select id=\"audio-bitrate\" name=\"audio-bitrate\">\n                          <option value=\"64000\">64 kbps (Mobile optimization)</option>\n                          <option value=\"128000\" selected>128 kbps (Balanced)</option>\n                          <option value=\"192000\">192 kbps (High Fidelity)</option>\n                          <option value=\"320000\">320 kbps (Premium)</option>\n                        </select>\n                      </div>\n                    </div>\n\n                    <div class=\"grid\" style=\"margin-bottom: 0\">\n                      <div>\n                        <label for=\"audio-channels\">Channels</label>\n                        <select id=\"audio-channels\" name=\"audio-channels\">\n                          <option value=\"0\" selected>Original Channels</option>\n                          <option value=\"1\">1 (Mono)</option>\n                          <option value=\"2\">2 (Stereo)</option>\n                        </select>\n                      </div>\n                      <div>\n                        <label for=\"audio-samplerate\">Sample Rate</label>\n                        <select id=\"audio-samplerate\" name=\"audio-samplerate\">\n                          <option value=\"0\" selected>Original Sample Rate</option>\n                          <option value=\"44100\">44,100 Hz</option>\n                          <option value=\"48000\">48,000 Hz</option>\n                          <option value=\"32000\">32,000 Hz</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                \n                  </div>\n                </details>\n            </form>\n          </div>\n          <!-- Column 3: output / download -->\n          <div class=\"workshop-output\">\n            <div class=\"output-actions\">\n              <button type=\"submit\" form=\"conversion-form\" id=\"convert-btn\" class=\"contrast\">\n                🚀 Convert & Process Video File\n              </button>\n              <button type=\"button\" id=\"cancel-btn\" class=\"secondary\" style=\"display: none\">🛑 Cancel Conversion</button>\n              <div class=\"size-estimate\">\n                Estimated output: <strong id=\"size-estimate\">—</strong>\n                <small style=\"display: block; color: var(--pico-muted-color); margin-top: 0.15rem\">\n                  Rough estimate (bitrate × duration; accounts for crop, trim, resize & frame rate).\n                </small>\n              </div>\n            </div>\n\n            <div id=\"output-placeholder\" class=\"output-shell\">\n              <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"40\"\n                height=\"40\"\n                fill=\"none\"\n                viewBox=\"0 0 24 24\"\n                stroke=\"currentColor\"\n                stroke-width=\"1.3\"\n              >\n                <path\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  d=\"M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z\"\n                />\n              </svg>\n              <p>Your processed video will appear here</p>\n            </div>\n\n            <section id=\"progress-section\" style=\"display: none; margin-top: 2rem\">\n        <article>\n          <h4 style=\"margin-bottom: 0.5rem; display: flex; justify-content: space-between\">\n            <span id=\"progress-title\">🐰 Processing Video Sample...</span>\n            <strong id=\"progress-percentage\">0%</strong>\n          </h4>\n          <progress id=\"conversion-progress\" value=\"0\" max=\"100\"></progress>\n          <div\n            style=\"display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--pico-muted-color)\"\n          >\n            <span id=\"progress-time-processed\">Processed Time: 0s / 0s</span>\n            <span id=\"progress-speed\">Processing speed: Normal</span>\n          </div>\n        </article>\n      </section>\n            <section id=\"result-section\" style=\"display: none; margin-top: 2rem\">\n        <!-- Processed output shown first; the original already lives in the input column -->\n        <article style=\"padding: 1rem; border: 1px solid rgb(46, 204, 113); margin-bottom: 2rem\">\n          <header\n            class=\"card-header\"\n            style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem; background: rgba(46, 204, 113, 0.05); color: rgb(46, 204, 113)\"\n          >\n            Processed Output\n          </header>\n          <div class=\"video-container\">\n            <video id=\"output-video\" controls autoplay></video>\n          </div>\n        </article>\n\n        <ins\n          style=\"\n            background: rgba(46, 204, 113, 0.1);\n            border: 1px solid rgb(46, 204, 113);\n            display: block;\n            padding: 1.5rem;\n            border-radius: 8px;\n            margin-bottom: 2rem;\n          \"\n        >\n          <h3 style=\"color: rgb(46, 204, 113); margin-bottom: 0.5rem\">🎉 Success! Conversion Completed Successfully</h3>\n          <p style=\"margin-bottom: 1rem; font-size: 0.95rem\">\n            Your media has been processed on-the-fly and packaged directly in your browser. No server uploads occurred.\n          </p>\n\n          <div class=\"grid\" style=\"align-items: center; margin-bottom: 0\">\n            <div>\n              <a\n                href=\"#\"\n                id=\"download-anchor\"\n                download=\"mediabunny_result.mp4\"\n                class=\"button\"\n                style=\"border: none; font-weight: bold; display: inline-flex; align-items: center; gap: 8px\"\n              >\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"20\"\n                  height=\"20\"\n                  fill=\"none\"\n                  viewBox=\"0 0 24 24\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2.5\"\n                >\n                  <path\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    d=\"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3\"\n                  />\n                </svg>\n                <span>Download Processed Video</span>\n              </a>\n              <span id=\"output-size-tag\" style=\"margin-left: 1rem; font-size: 0.9rem; font-weight: bold; opacity: 0.85\"\n                >-</span\n              >\n            </div>\n          </div>\n        </ins>\n      </section>\n\n            <details class=\"config-card log-section\">\n              <summary class=\"card-header\">🔍 System Console & Transcoding logs (verbose)</summary>\n              <div class=\"config-card-body\">\n                <div style=\"position: relative\">\n                  <button\n                    id=\"clear-console-btn\"\n                    class=\"outline secondary\"\n                    style=\"position: absolute; right: 10px; top: 10px; font-size: 0.7rem; padding: 4px 10px; margin: 0; width: auto\"\n                  >\n                    Clear Log\n                  </button>\n                  <pre id=\"log-console\">System diagnostic logger initialized. Waiting for media file drop...</pre>\n                </div>\n              </div>\n            </details>\n          </div>\n        </div>\n\n        <div id=\"image-workspace\" class=\"workshop-layout\" style=\"display: none\">\n          <!-- Column 1: input / info -->\n          <div class=\"workshop-sidebar\">\n            <article style=\"padding: 1rem; margin-bottom: 0\">\n              <header class=\"card-header\" style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem\">\n                Image Preview & Blur Paint Mask\n              </header>\n              <div class=\"image-canvas-stage\" id=\"image-canvas-stage\">\n                <canvas id=\"image-preview-canvas\"></canvas>\n                <canvas id=\"image-mask-canvas\"></canvas>\n              </div>\n              <div class=\"canvas-tool-picker\" role=\"radiogroup\" aria-label=\"Canvas Tool\">\n                <span class=\"canvas-tool-label\">Canvas Tool</span>\n                <div>\n                  <label>\n                    <input type=\"radio\" name=\"img-canvas-tool\" value=\"crop\" id=\"img-tool-crop\" checked />\n                    ✂️ Crop\n                  </label>\n                  <label>\n                    <input type=\"radio\" name=\"img-canvas-tool\" value=\"paint\" id=\"img-tool-paint\" />\n                    🙈 Redaction\n                  </label>\n                </div>\n              </div>\n              <small style=\"display: block; text-align: center; margin-top: 0.5rem; color: var(--pico-muted-color)\">\n                Enable Crop or Redaction to activate a tool. Drag crop corners directly on the preview, or paint\n                redactions over sensitive areas.\n              </small>\n            </article>\n\n            <article style=\"padding: 1rem; margin-bottom: 0\">\n              <header class=\"card-header\" style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem\">\n                Image Attributes\n              </header>\n              <div class=\"meta-grid\">\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">File Name</span>\n                  <span id=\"img-meta-name\" style=\"word-break: break-all; font-weight: 500\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">File Size</span>\n                  <span id=\"img-meta-size\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">Original Size</span>\n                  <span id=\"img-meta-resolution\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">Aspect Ratio</span>\n                  <span id=\"img-meta-aspect\">-</span>\n                </div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">Detected Type</span>\n                  <span id=\"img-meta-type\">-</span>\n                </div>\n              </div>\n            </article>\n          </div>\n          <!-- Column 2: image settings -->\n          <div class=\"workshop-main\">\n            <form id=\"image-form\" class=\"settings-stack\" style=\"margin-bottom: 0\">\n              <details class=\"config-card\" id=\"panel-img-crop\">\n                  <summary class=\"card-header\">✂️ Crop Region</summary>\n                  <div class=\"config-card-body\">\n                  <fieldset>\n                  <label for=\"img-enable-crop\">\n                    <input type=\"checkbox\" id=\"img-enable-crop\" checked />\n                    Enable Crop\n                  </label>\n                </fieldset>\n                <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                  <div>\n                    <label for=\"img-crop-x\">X</label>\n                    <input type=\"number\" id=\"img-crop-x\" min=\"0\" value=\"0\" />\n                  </div>\n                  <div>\n                    <label for=\"img-crop-y\">Y</label>\n                    <input type=\"number\" id=\"img-crop-y\" min=\"0\" value=\"0\" />\n                  </div>\n                </div>\n                <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                  <div>\n                    <label for=\"img-crop-width\">Crop Width</label>\n                    <input type=\"number\" id=\"img-crop-width\" min=\"1\" value=\"1\" />\n                  </div>\n                  <div>\n                    <label for=\"img-crop-height\">Crop Height</label>\n                    <input type=\"number\" id=\"img-crop-height\" min=\"1\" value=\"1\" />\n                  </div>\n                </div>\n                <div class=\"grid\" style=\"margin-bottom: 0\">\n                  <button type=\"button\" id=\"img-crop-full\" class=\"secondary\">Use Full Image</button>\n                  <button type=\"button\" id=\"img-crop-square\" class=\"secondary\">Centered Square</button>\n                </div>\n              \n                  </div>\n                </details>\n\n              <details class=\"config-card\" id=\"panel-img-resize\">\n                  <summary class=\"card-header\">📐 Output Resize</summary>\n                  <div class=\"config-card-body\">\n                  <fieldset>\n                  <label for=\"img-enable-resize\">\n                    <input type=\"checkbox\" id=\"img-enable-resize\" />\n                    Enable Resize\n                  </label>\n                </fieldset>\n                <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                  <div>\n                    <label for=\"img-out-width\">Output Width</label>\n                    <input type=\"number\" id=\"img-out-width\" min=\"1\" value=\"1\" />\n                  </div>\n                  <div>\n                    <label for=\"img-out-height\">Output Height</label>\n                    <input type=\"number\" id=\"img-out-height\" min=\"1\" value=\"1\" />\n                  </div>\n                </div>\n                <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                  <div>\n                    <label for=\"img-scale-preset\">Scale Preset</label>\n                    <select id=\"img-scale-preset\">\n                      <option value=\"\" selected>Select scale...</option>\n                      <option value=\"0.25\">25% (0.25x)</option>\n                      <option value=\"0.5\">50% (0.5x)</option>\n                      <option value=\"0.75\">75% (0.75x)</option>\n                      <option value=\"1\">100% (1x)</option>\n                      <option value=\"1.25\">125% (1.25x)</option>\n                      <option value=\"1.5\">150% (1.5x)</option>\n                      <option value=\"2\">200% (2x)</option>\n                      <option value=\"3\">300% (3x)</option>\n                      <option value=\"4\">400% (4x)</option>\n                    </select>\n                  </div>\n                  <div>\n                    <label for=\"img-maxdim-preset\">Max Dimension Preset</label>\n                    <select id=\"img-maxdim-preset\">\n                      <option value=\"\" selected>Fit longest side to...</option>\n                      <option value=\"256\">256 px (2^8)</option>\n                      <option value=\"512\">512 px (2^9)</option>\n                      <option value=\"720\">720 px</option>\n                      <option value=\"1024\">1024 px (2^10)</option>\n                      <option value=\"1080\">1080 px</option>\n                      <option value=\"1280\">1280 px</option>\n                      <option value=\"1920\">1920 px</option>\n                      <option value=\"2048\">2048 px (2^11)</option>\n                      <option value=\"2560\">2560 px</option>\n                      <option value=\"3840\">3840 px</option>\n                      <option value=\"4096\">4096 px (2^12)</option>\n                    </select>\n                  </div>\n                </div>\n                <fieldset>\n                  <label for=\"img-lock-aspect\">\n                    <input type=\"checkbox\" id=\"img-lock-aspect\" checked />\n                    Lock Aspect Ratio\n                  </label>\n                </fieldset>\n              \n                  </div>\n                </details>\n\n              <details class=\"config-card\" id=\"panel-img-redact\">\n                  <summary class=\"card-header\">🙈 Redaction Brush</summary>\n                  <div class=\"config-card-body\">\n                  <fieldset>\n                  <label for=\"img-enable-blur\">\n                    <input type=\"checkbox\" id=\"img-enable-blur\" checked />\n                    Enable Redaction Mask Painting\n                  </label>\n                </fieldset>\n                <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                  <div>\n                    <label for=\"img-redaction-mode\">Redaction Effect</label>\n                    <select id=\"img-redaction-mode\">\n                      <option value=\"blur\" selected>Blur</option>\n                      <option value=\"pixelate\">Pixelate</option>\n                      <option value=\"black\">Solid Black</option>\n                    </select>\n                  </div>\n                  <div>\n                    <label for=\"img-brush-size\">Brush Size (px)</label>\n                    <input type=\"range\" id=\"img-brush-size\" min=\"8\" max=\"180\" value=\"40\" step=\"1\" />\n                  </div>\n                  <div>\n                    <label for=\"img-blur-strength\">Effect Strength</label>\n                    <input type=\"range\" id=\"img-blur-strength\" min=\"2\" max=\"100\" value=\"4\" step=\"0.25\" />\n                  </div>\n                </div>\n                <div class=\"grid\" style=\"margin-bottom: 0\">\n                  <label for=\"img-erase-mode\" style=\"align-self: center; margin-bottom: 0\">\n                    <input type=\"checkbox\" id=\"img-erase-mode\" />\n                    Erase Mask Mode\n                  </label>\n                  <button type=\"button\" id=\"img-clear-mask\" class=\"secondary\">Clear Blur Mask</button>\n                </div>\n              \n                  </div>\n                </details>\n\n              <details class=\"config-card\" id=\"panel-img-format\">\n                  <summary class=\"card-header\">💾 Format & Compression</summary>\n                  <div class=\"config-card-body\">\n                  <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                  <div>\n                    <label for=\"img-out-format\">Output Format</label>\n                    <select id=\"img-out-format\">\n                      <option value=\"image/jpeg\" selected>JPEG (.jpg)</option>\n                      <option value=\"image/png\">PNG (.png, lossless)</option>\n                      <option value=\"image/webp\">WebP (.webp)</option>\n                      <option value=\"image/avif\">AVIF (.avif)</option>\n                    </select>\n                  </div>\n                  <div>\n                    <label for=\"img-quality\">Compression Quality</label>\n                    <input type=\"range\" id=\"img-quality\" min=\"0.1\" max=\"1\" value=\"0.86\" step=\"0.01\" />\n                    <small id=\"img-quality-label\">0.86</small>\n                  </div>\n                </div>\n              \n                  </div>\n                </details>\n\n            </form>\n          </div>\n          <!-- Column 3: output / download -->\n          <div class=\"workshop-output\">\n            <div class=\"output-actions\">\n              <button type=\"submit\" form=\"image-form\" id=\"image-process-btn\" class=\"contrast\">\n                🖼️ Process & Export Image\n              </button>\n            </div>\n\n            <div id=\"image-output-placeholder\" class=\"output-shell\">\n              <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"40\"\n                height=\"40\"\n                fill=\"none\"\n                viewBox=\"0 0 24 24\"\n                stroke=\"currentColor\"\n                stroke-width=\"1.3\"\n              >\n                <path\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                  d=\"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z\"\n                />\n              </svg>\n              <p>Your processed image will appear here</p>\n            </div>\n\n            <section id=\"image-result-section\" style=\"display: none; margin-top: 2rem\">\n        <!-- Processed image shown first; the original already lives in the input column -->\n        <article style=\"padding: 1rem; border: 1px solid rgb(46, 204, 113); margin-bottom: 2rem\">\n          <header\n            class=\"card-header\"\n            style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem; background: rgba(46, 204, 113, 0.05); color: rgb(46, 204, 113)\"\n          >\n            Processed Image\n          </header>\n          <img id=\"image-output-preview\" alt=\"Processed image\" style=\"width: 100%; height: auto; display: block\" />\n        </article>\n\n        <ins\n          style=\"\n            background: rgba(46, 204, 113, 0.1);\n            border: 1px solid rgb(46, 204, 113);\n            display: block;\n            padding: 1.5rem;\n            border-radius: 8px;\n            margin-bottom: 2rem;\n          \"\n        >\n          <h3 style=\"color: rgb(46, 204, 113); margin-bottom: 0.5rem\">🎉 Image Ready</h3>\n          <p style=\"margin-bottom: 1rem; font-size: 0.95rem\">\n            Your image was cropped, redacted, scaled, and re-encoded directly in browser memory.\n          </p>\n          <div class=\"grid\" style=\"align-items: center; margin-bottom: 0\">\n            <div>\n              <a\n                href=\"#\"\n                id=\"image-download-anchor\"\n                download=\"processed-image.jpg\"\n                class=\"button\"\n                style=\"border: none; font-weight: bold; display: inline-flex; align-items: center; gap: 8px\"\n              >\n                Download Processed Image\n              </a>\n              <span\n                id=\"image-output-size-tag\"\n                style=\"margin-left: 1rem; font-size: 0.9rem; font-weight: bold; opacity: 0.85\"\n                >-</span\n              >\n            </div>\n          </div>\n        </ins>\n      </section>\n\n            <details class=\"config-card log-section\">\n              <summary class=\"card-header\">🔍 System Console & Transcoding logs (verbose)</summary>\n              <div class=\"config-card-body\">\n                <div style=\"position: relative\">\n                  <button\n                    id=\"clear-console-btn-img\"\n                    class=\"outline secondary\"\n                    style=\"position: absolute; right: 10px; top: 10px; font-size: 0.7rem; padding: 4px 10px; margin: 0; width: auto\"\n                  >\n                    Clear Log\n                  </button>\n                  <pre id=\"log-console-img\">System diagnostic logger initialized. Waiting for media file drop...</pre>\n                </div>\n              </div>\n            </details>\n          </div>\n        </div>\n\n        <div id=\"audio-workspace\" class=\"workshop-layout\" style=\"display: none\">\n          <!-- Column 1: input / info -->\n          <div class=\"workshop-sidebar\">\n            <article style=\"padding: 1rem; margin-bottom: 0\">\n              <header class=\"card-header\" style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem\">\n                Original Audio Player\n              </header>\n              <audio id=\"audio-preview\" controls style=\"width: 100%; display: block\"></audio>\n              <canvas id=\"audio-waveform\" class=\"audio-waveform\"></canvas>\n              <small style=\"display: block; text-align: center; margin-top: 0.5rem; color: var(--pico-muted-color)\">\n                💡 Play to preview, click the waveform to seek; enable trimming below to clip a time range.\n              </small>\n            </article>\n\n            <article style=\"padding: 1rem; margin-bottom: 0\">\n              <header class=\"card-header\" style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem\">\n                Audio Attributes\n              </header>\n              <div class=\"meta-grid\">\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">File Name</span>\n                  <span id=\"audio-meta-name\" style=\"word-break: break-all; font-weight: 500\">-</span>\n                </div>\n                <div class=\"meta-item\"><span class=\"meta-label\">File Size</span><span id=\"audio-meta-size\">-</span></div>\n                <div class=\"meta-item\"><span class=\"meta-label\">Duration</span><span id=\"audio-meta-duration\">-</span></div>\n                <div class=\"meta-item\"><span class=\"meta-label\">Codec</span><span id=\"audio-meta-codec\">-</span></div>\n                <div class=\"meta-item\">\n                  <span class=\"meta-label\">Sample Rate</span><span id=\"audio-meta-samplerate\">-</span>\n                </div>\n                <div class=\"meta-item\"><span class=\"meta-label\">Channels</span><span id=\"audio-meta-channels\">-</span></div>\n                <div class=\"meta-item\"><span class=\"meta-label\">Bitrate</span><span id=\"audio-meta-bitrate\">-</span></div>\n              </div>\n            </article>\n          </div>\n\n          <!-- Column 2: audio settings -->\n          <div class=\"workshop-main\">\n            <form id=\"audio-form\" class=\"settings-stack\" style=\"margin-bottom: 0\">\n              <details class=\"config-card\" id=\"panel-audio-trim\">\n                <summary class=\"card-header\">✂️ Time Crop & Trim</summary>\n                <div class=\"config-card-body\">\n                  <fieldset>\n                    <label for=\"audio-enable-trim\">\n                      <input type=\"checkbox\" id=\"audio-enable-trim\" />\n                      Enable Trimming / Time Crop\n                    </label>\n                  </fieldset>\n                  <div id=\"audio-trim-controls\" style=\"display: none; padding-top: 0.5rem\">\n                    <div class=\"slider-group\" style=\"margin-bottom: 0.5rem\">\n                      <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem\">\n                        <span style=\"font-weight: 500; font-size: 0.9rem\">Cut / Clip Window Range:</span>\n                        <span class=\"time-val\" style=\"font-family: monospace; font-size: 0.85rem; padding: 2px 6px\">\n                          <span id=\"audio-trim-start-val\" style=\"font-weight: bold; color: var(--primary-color)\">0.00s</span>\n                          to\n                          <span id=\"audio-trim-end-val\" style=\"font-weight: bold; color: var(--primary-color)\">0.00s</span>\n                        </span>\n                      </div>\n                      <div class=\"range-slider-wrapper\">\n                        <div class=\"trim-visualizer\"><div class=\"trim-selection\" id=\"audio-trim-selection-bar\"></div></div>\n                        <input type=\"range\" id=\"audio-trim-start\" class=\"range-slider-input\" min=\"0\" max=\"100\" step=\"0.01\" value=\"0\" style=\"z-index: 3\" />\n                        <input type=\"range\" id=\"audio-trim-end\" class=\"range-slider-input\" min=\"0\" max=\"100\" step=\"0.01\" value=\"100\" style=\"z-index: 2\" />\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </details>\n\n              <details class=\"config-card\" id=\"panel-audio-output\">\n                <summary class=\"card-header\">🎧 Output Format & Encoding</summary>\n                <div class=\"config-card-body\">\n                  <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                    <div>\n                      <label for=\"audio-out-format\">Output Format</label>\n                      <select id=\"audio-out-format\" name=\"audio-out-format\">\n                        <option value=\"mp3\" selected>MP3 (.mp3)</option>\n                        <option value=\"m4a\">M4A / AAC (.m4a)</option>\n                        <option value=\"opus\">Opus (.ogg)</option>\n                        <option value=\"wav\">WAV (.wav, lossless)</option>\n                        <option value=\"flac\">FLAC (.flac, lossless)</option>\n                      </select>\n                    </div>\n                    <div>\n                      <label for=\"audio-out-bitrate\">Bitrate</label>\n                      <select id=\"audio-out-bitrate\" name=\"audio-out-bitrate\">\n                        <option value=\"96000\">96 kbps</option>\n                        <option value=\"128000\">128 kbps</option>\n                        <option value=\"192000\" selected>192 kbps</option>\n                        <option value=\"256000\">256 kbps</option>\n                        <option value=\"320000\">320 kbps</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"grid\" style=\"margin-bottom: 0\">\n                    <div>\n                      <label for=\"audio-out-samplerate\">Sample Rate</label>\n                      <select id=\"audio-out-samplerate\" name=\"audio-out-samplerate\">\n                        <option value=\"0\" selected>Original</option>\n                        <option value=\"48000\">48,000 Hz</option>\n                        <option value=\"44100\">44,100 Hz</option>\n                        <option value=\"32000\">32,000 Hz</option>\n                        <option value=\"22050\">22,050 Hz</option>\n                      </select>\n                    </div>\n                    <div>\n                      <label for=\"audio-out-channels\">Channels</label>\n                      <select id=\"audio-out-channels\" name=\"audio-out-channels\">\n                        <option value=\"0\" selected>Original</option>\n                        <option value=\"1\">1 (Mono)</option>\n                        <option value=\"2\">2 (Stereo)</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n              </details>\n            </form>\n          </div>\n\n          <!-- Column 3: output / download -->\n          <div class=\"workshop-output\">\n            <div class=\"output-actions\">\n              <button type=\"submit\" form=\"audio-form\" id=\"audio-process-btn\" class=\"contrast\">🎵 Convert & Process Audio</button>\n              <button type=\"button\" id=\"audio-cancel-btn\" class=\"secondary\" style=\"display: none\">🛑 Cancel Conversion</button>\n              <div class=\"size-estimate\">\n                Estimated output: <strong id=\"audio-size-estimate\">—</strong>\n                <small style=\"display: block; color: var(--pico-muted-color); margin-top: 0.15rem\">\n                  Rough estimate (bitrate × duration; trim-aware).\n                </small>\n              </div>\n            </div>\n\n            <div id=\"audio-output-placeholder\" class=\"output-shell\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.3\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z\" />\n              </svg>\n              <p>Your processed audio will appear here</p>\n            </div>\n\n            <section id=\"audio-progress-section\" style=\"display: none\">\n              <article>\n                <h4 style=\"margin-bottom: 0.5rem; display: flex; justify-content: space-between\">\n                  <span id=\"audio-progress-title\">🎵 Processing audio...</span>\n                  <strong id=\"audio-progress-pct\">0%</strong>\n                </h4>\n                <progress id=\"audio-progress\" value=\"0\" max=\"100\"></progress>\n              </article>\n            </section>\n\n            <section id=\"audio-result-section\" style=\"display: none\">\n              <article style=\"padding: 1rem; border: 1px solid rgb(46, 204, 113); margin-bottom: 2rem\">\n                <header class=\"card-header\" style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem; background: rgba(46, 204, 113, 0.05); color: rgb(46, 204, 113)\">\n                  Processed Audio\n                </header>\n                <audio id=\"audio-output-preview\" controls style=\"width: 100%; display: block\"></audio>\n              </article>\n              <ins style=\"background: rgba(46, 204, 113, 0.1); border: 1px solid rgb(46, 204, 113); display: block; padding: 1.5rem; border-radius: 8px\">\n                <h3 style=\"color: rgb(46, 204, 113); margin-bottom: 0.5rem\">🎉 Audio Ready</h3>\n                <p style=\"margin-bottom: 1rem; font-size: 0.95rem\">\n                  Processed directly in your browser. No server uploads occurred.\n                </p>\n                <a href=\"#\" id=\"audio-download-anchor\" download=\"audio_web_export.mp3\" class=\"button\" style=\"border: none; font-weight: bold; display: inline-flex; align-items: center; gap: 8px\">\n                  Download Processed Audio\n                </a>\n                <span id=\"audio-output-size-tag\" style=\"margin-left: 1rem; font-size: 0.9rem; font-weight: bold; opacity: 0.85\">-</span>\n              </ins>\n            </section>\n\n            <details class=\"config-card log-section\">\n              <summary class=\"card-header\">🔍 System Console & Transcoding logs (verbose)</summary>\n              <div class=\"config-card-body\">\n                <div style=\"position: relative\">\n                  <button id=\"clear-console-btn-audio\" class=\"outline secondary\" style=\"position: absolute; right: 10px; top: 10px; font-size: 0.7rem; padding: 4px 10px; margin: 0; width: auto\">\n                    Clear Log\n                  </button>\n                  <pre id=\"log-console-audio\">System diagnostic logger initialized. Waiting for media file drop...</pre>\n                </div>\n              </div>\n            </details>\n          </div>\n        </div>\n\n        <div id=\"batch-workspace\" style=\"display: none\">\n          <div class=\"workshop-layout\">\n            <!-- Column 1: input previews -->\n            <div class=\"workshop-sidebar\">\n              <article style=\"padding: 1rem; margin-bottom: 0\">\n                <header class=\"card-header\" style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem\">\n                  Batch Input (<span id=\"batch-input-count\">0</span>)\n                </header>\n                <div id=\"batch-thumbs\" class=\"batch-thumbs\"></div>\n                <small style=\"display: block; margin-top: 0.75rem; color: var(--pico-muted-color)\">\n                  Total input size: <strong id=\"batch-total-size\">-</strong>\n                </small>\n              </article>\n            </div>\n            <!-- Column 2: shared settings applied to every image -->\n            <div class=\"workshop-main\">\n              <details class=\"config-card\" id=\"panel-batch-format\" open>\n                <summary class=\"card-header\">💾 Output Format & Quality</summary>\n                <div class=\"config-card-body\">\n                  <div class=\"grid\" style=\"margin-bottom: 0.5rem\">\n                    <div>\n                      <label for=\"batch-out-format\">Output Format</label>\n                      <select id=\"batch-out-format\">\n                        <option value=\"image/jpeg\" selected>JPEG (.jpg)</option>\n                        <option value=\"image/png\">PNG (.png, lossless)</option>\n                        <option value=\"image/webp\">WebP (.webp)</option>\n                        <option value=\"image/avif\">AVIF (.avif)</option>\n                      </select>\n                    </div>\n                    <div>\n                      <label for=\"batch-quality\">Compression Quality</label>\n                      <input type=\"range\" id=\"batch-quality\" min=\"0.1\" max=\"1\" value=\"0.86\" step=\"0.01\" />\n                      <small id=\"batch-quality-label\">0.86</small>\n                    </div>\n                  </div>\n                </div>\n              </details>\n\n              <details class=\"config-card\" id=\"panel-batch-resize\" open>\n                <summary class=\"card-header\">📐 Resize</summary>\n                <div class=\"config-card-body\">\n                  <fieldset>\n                    <label for=\"batch-enable-resize\">\n                      <input type=\"checkbox\" id=\"batch-enable-resize\" />\n                      Enable Resize (applied to all)\n                    </label>\n                  </fieldset>\n                  <div id=\"batch-resize-controls\" style=\"display: none\">\n                    <div class=\"grid\" style=\"margin-bottom: 0\">\n                      <div>\n                        <label for=\"batch-maxdim-preset\">Max Dimension Preset</label>\n                        <select id=\"batch-maxdim-preset\">\n                          <option value=\"\" selected>Choose a preset…</option>\n                          <option value=\"512\">512 px</option>\n                          <option value=\"1024\">1024 px</option>\n                          <option value=\"1280\">1280 px</option>\n                          <option value=\"1920\">1920 px</option>\n                          <option value=\"2560\">2560 px</option>\n                          <option value=\"3840\">3840 px</option>\n                        </select>\n                      </div>\n                      <div>\n                        <label for=\"batch-maxdim\">Max Dimension (px)</label>\n                        <input type=\"number\" id=\"batch-maxdim\" min=\"1\" placeholder=\"e.g. 1920\" />\n                      </div>\n                    </div>\n                    <small style=\"display: block; color: var(--pico-muted-color); margin-top: 0.5rem; font-size: 0.75rem\">\n                      💡 Caps the longest side to this value (downscale only — never enlarged; aspect ratio preserved).\n                      Pick a preset or type an exact size.\n                    </small>\n                  </div>\n                </div>\n              </details>\n\n            </div>\n\n            <!-- Column 3: actions, results queue, and logs -->\n            <div class=\"workshop-output\">\n              <div class=\"output-actions\">\n                <button type=\"button\" id=\"batch-process-btn\" class=\"contrast\">🖼️ Process All Images</button>\n                <button type=\"button\" id=\"batch-download-all\" class=\"secondary\" style=\"display: none\">\n                  ⬇️ Download All (.zip)\n                </button>\n              </div>\n\n              <article style=\"padding: 1rem; margin-bottom: 0\">\n                <header class=\"card-header\" style=\"margin-top: -1rem; margin-left: -1rem; margin-right: -1rem\">\n                  Batch Queue (<span id=\"batch-count\">0</span>)\n                </header>\n                <div id=\"batch-queue\"></div>\n              </article>\n\n              <details class=\"config-card log-section\">\n                <summary class=\"card-header\">🔍 System Console & logs (verbose)</summary>\n                <div class=\"config-card-body\">\n                  <div style=\"position: relative\">\n                    <button id=\"clear-console-btn-batch\" class=\"outline secondary\" style=\"position: absolute; right: 10px; top: 10px; font-size: 0.7rem; padding: 4px 10px; margin: 0; width: auto\">\n                      Clear Log\n                    </button>\n                    <pre id=\"log-console-batch\">System diagnostic logger initialized. Waiting for media file drop...</pre>\n                  </div>\n                </div>\n              </details>\n            </div>\n          </div>\n        </div>\n      </section>\n    </main>\n\n    <footer\n      style=\"\n        margin-top: 4rem;\n        padding: 1.5rem 0;\n        border-top: 1px solid var(--pico-muted-border-color);\n        text-align: center;\n        font-size: 0.85rem;\n        color: var(--pico-muted-color);\n      \"\n    >\n      <p>Powered by <strong>WebCodecs</strong> & <strong>MediaBunny</strong>. Built by Cacheflowe 👋</p>\n    </footer>\n", r;
(function(e) {
	e[e.Silent = 0] = "Silent", e[e.Errors = 1] = "Errors", e[e.Warnings = 2] = "Warnings", e[e.Info = 3] = "Info";
})(r ||= {});
var i = class e {
	constructor() {}
	static get level() {
		return e._level;
	}
	static set level(t) {
		if (t !== r.Silent && t !== r.Errors && t !== r.Warnings && t !== r.Info) throw TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
		e._level = t;
	}
	static get _emitter() {
		return e._emitterInstance ??= new Je();
	}
	static on(t, n, r) {
		return e._emitter.on(t, n, r);
	}
	static _error(...t) {
		e._emitter._emit("error", t), e._level >= r.Errors && console.error(...t);
	}
	static _warn(...t) {
		e._emitter._emit("warn", t), e._level >= r.Warnings && console.warn(...t);
	}
	static _info(...t) {
		e._emitter._emit("info", t), e._level >= r.Info && console.info(...t);
	}
};
i._level = r.Info, i._emitterInstance = null;
//#endregion
//#region node_modules/mediabunny/dist/modules/src/misc.js
function a(e) {
	if (!e) throw Error("Assertion failed.");
}
var o = (e) => {
	let t = (e % 360 + 360) % 360;
	if (t === 0 || t === 90 || t === 180 || t === 270) return t;
	throw Error(`Invalid rotation ${e}.`);
}, s = (e) => e && e[e.length - 1], c = (e) => e >= 0 && e < 2 ** 32, l = (e) => {
	let t = 0;
	for (; e.readBits(1) === 0 && t < 32;) t++;
	if (t >= 32) throw Error("Invalid exponential-Golomb code.");
	return (1 << t) - 1 + e.readBits(t);
}, u = (e) => {
	let t = l(e);
	return t & 1 ? t + 1 >> 1 : -(t >> 1);
}, d = (e, t, n, r) => {
	for (let i = t; i < n; i++) {
		let t = Math.floor(i / 8), a = e[t], o = 7 - (i & 7);
		a &= ~(1 << o), a |= (r & 1 << n - i - 1) >> n - i - 1 << o, e[t] = a;
	}
}, f = (e) => e.constructor === Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e), p = (e) => e.constructor === DataView ? e : ArrayBuffer.isView(e) ? new DataView(e.buffer, e.byteOffset, e.byteLength) : new DataView(e), m = /* #__PURE__ */ new TextDecoder(), h = /* #__PURE__ */ new TextEncoder(), g = (e) => {
	for (let t = 0; t < e.length; t++) if (e.charCodeAt(t) > 255) return !1;
	return !0;
}, _ = (e) => Object.fromEntries(Object.entries(e).map(([e, t]) => [t, e])), v = {
	bt709: 1,
	bt470bg: 5,
	smpte170m: 6,
	bt2020: 9,
	smpte432: 12
}, y = /* #__PURE__ */ _(v), b = {
	bt709: 1,
	smpte170m: 6,
	linear: 8,
	"iec61966-2-1": 13,
	pq: 16,
	hlg: 18
}, x = /* #__PURE__ */ _(b), S = {
	rgb: 0,
	bt709: 1,
	bt470bg: 5,
	smpte170m: 6,
	"bt2020-ncl": 9
}, C = /* #__PURE__ */ _(S), w = (e) => !!e && !!e.primaries && !!e.transfer && !!e.matrix && e.fullRange !== void 0, ee = (e) => e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer || ArrayBuffer.isView(e), T = class {
	constructor() {
		this.currentPromise = Promise.resolve(), this.pending = 0;
	}
	async acquire() {
		let e, t = new Promise((t) => {
			let n = !1;
			e = () => {
				n ||= (t(), this.pending--, !0);
			};
		}), n = this.currentPromise;
		return this.currentPromise = t, this.pending++, await n, e;
	}
}, E = /^[0-9a-fA-F]+$/, te = (e) => [...e].map((e) => e.toString(16).padStart(2, "0")).join(""), ne = (e) => {
	a(e.length % 2 == 0);
	let t = new Uint8Array(e.length / 2);
	for (let n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.slice(n, n + 2), 16);
	return t;
}, re = (e) => (e = e >> 1 & 1431655765 | (e & 1431655765) << 1, e = e >> 2 & 858993459 | (e & 858993459) << 2, e = e >> 4 & 252645135 | (e & 252645135) << 4, e = e >> 8 & 16711935 | (e & 16711935) << 8, e = e >> 16 & 65535 | (e & 65535) << 16, e >>> 0), ie = (e, t, n) => {
	let r = 0, i = e.length - 1, a = -1;
	for (; r <= i;) {
		let o = r + i >> 1, s = n(e[o]);
		s === t ? (a = o, i = o - 1) : s < t ? r = o + 1 : i = o - 1;
	}
	return a;
}, D = (e, t, n) => {
	let r = 0, i = e.length - 1, a = -1;
	for (; r <= i;) {
		let o = r + (i - r + 1) / 2 | 0;
		n(e[o]) <= t ? (a = o, r = o + 1) : i = o - 1;
	}
	return a;
}, ae = (e, t, n) => {
	let r = D(e, n(t), n);
	e.splice(r + 1, 0, t);
}, O = () => {
	let e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}, oe = (e, t) => {
	let n = e.indexOf(t);
	n !== -1 && e.splice(n, 1);
}, se = (e, t) => {
	for (let n = e.length - 1; n >= 0; n--) if (t(e[n])) return e[n];
}, ce = (e, t) => {
	for (let n = e.length - 1; n >= 0; n--) if (t(e[n])) return n;
	return -1;
}, le = async function* (e) {
	Symbol.iterator in e ? yield* e[Symbol.iterator]() : yield* e[Symbol.asyncIterator]();
}, k = (e) => {
	if (!(Symbol.iterator in e) && !(Symbol.asyncIterator in e)) throw TypeError("Argument must be an iterable or async iterable.");
}, A = (e) => {
	throw Error(`Unexpected value: ${e}`);
}, ue = (e, t, n) => {
	let r = e.getUint8(t), i = e.getUint8(t + 1), a = e.getUint8(t + 2);
	return n ? r | i << 8 | a << 16 : r << 16 | i << 8 | a;
}, de = (e, t, n) => ue(e, t, n) << 8 >> 8, fe = (e, t, n, r) => {
	n >>>= 0, n &= 16777215, r ? (e.setUint8(t, n & 255), e.setUint8(t + 1, n >>> 8 & 255), e.setUint8(t + 2, n >>> 16 & 255)) : (e.setUint8(t, n >>> 16 & 255), e.setUint8(t + 1, n >>> 8 & 255), e.setUint8(t + 2, n & 255));
}, j = (e, t, n, r) => {
	n = M(n, -8388608, 8388607), n < 0 && (n = n + 16777216 & 16777215), fe(e, t, n, r);
}, pe = (e, t, n, r) => {
	r ? (e.setUint32(t + 0, n, !0), e.setInt32(t + 4, Math.floor(n / 2 ** 32), !0)) : (e.setInt32(t + 0, Math.floor(n / 2 ** 32), !0), e.setUint32(t + 4, n, !0));
}, M = (e, t, n) => Math.max(t, Math.min(n, e)), N = (e) => {
	let t = Math.round(e);
	return Math.abs(e / t - 1) < 10 * 2 ** -52 ? t : e;
}, me = (e, t) => Math.round(e / t) * t, he = (e, t) => Math.round(e * t) / t, ge = (e, t) => Math.floor(e / t) * t, _e = (e, t) => Math.floor(e * t) / t, ve = (e) => {
	let t = 0;
	for (; e;) t++, e >>= 1;
	return t;
}, ye = /^[a-z]{3}$/, be = (e) => ye.test(e), xe = 1e6 * (1 + 2 ** -52), Se = (e, t) => {
	let n = e < 0 ? -1 : 1;
	e = Math.abs(e);
	let r = 0, i = 1, a = 1, o = 0, s = e;
	for (;;) {
		let e = Math.floor(s), c = e * a + r, l = e * o + i;
		if (l > t) return {
			num: n * a,
			den: o
		};
		if (r = a, i = o, a = c, o = l, s = 1 / (s - e), !isFinite(s)) break;
	}
	return {
		num: n * a,
		den: o
	};
}, Ce = class {
	constructor() {
		this.currentPromise = Promise.resolve();
	}
	call(e) {
		return this.currentPromise = this.currentPromise.then(e);
	}
}, we = null, Te = () => we === null ? we = !!(typeof navigator < "u" && (navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent))) : we, Ee = null, De = () => Ee === null ? Ee = typeof navigator < "u" && navigator.userAgent?.includes("Firefox") : Ee, Oe = null, ke = () => Oe === null ? Oe = !!(typeof navigator < "u" && (navigator.vendor?.includes("Google Inc") || /Chrome/.test(navigator.userAgent))) : Oe, Ae = null, je = () => {
	if (Ae !== null) return Ae;
	if (typeof navigator > "u") return null;
	let e = /\bChrome\/(\d+)/.exec(navigator.userAgent);
	return e ? Ae = Number(e[1]) : null;
}, Me = (e, t) => e === -1 ? t : e, Ne = (e, t, n, r) => e <= r && n <= t, Pe = function* (e) {
	for (let t in e) {
		let n = e[t];
		n !== void 0 && (yield {
			key: t,
			value: n
		});
	}
}, Fe = (e) => {
	switch (e.toLowerCase()) {
		case "image/jpeg":
		case "image/jpg": return ".jpg";
		case "image/png": return ".png";
		case "image/gif": return ".gif";
		case "image/webp": return ".webp";
		case "image/bmp": return ".bmp";
		case "image/svg+xml": return ".svg";
		case "image/tiff": return ".tiff";
		case "image/avif": return ".avif";
		case "image/x-icon":
		case "image/vnd.microsoft.icon": return ".ico";
		default: return null;
	}
}, Ie = (e) => {
	let t = atob(e), n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	return n;
}, Le = (e) => {
	let t = "";
	for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
	return btoa(t);
}, Re = (e, t) => {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}, ze = () => {
	Symbol.dispose ??= Symbol("Symbol.dispose");
}, Be = (e) => typeof e == "number" && !Number.isNaN(e), Ve = (e, t) => {
	if (t.includes("://")) return t;
	if (e.includes("://")) {
		let t = e.indexOf("?");
		t !== -1 && (e = e.slice(0, t));
	}
	let n;
	if (t.startsWith("/")) {
		let r = e.indexOf("://");
		if (r === -1) n = t;
		else {
			let i = e.indexOf("/", r + 3);
			n = i === -1 ? e + t : e.slice(0, i) + t;
		}
	} else {
		let r = e.lastIndexOf("/");
		n = r === -1 ? t : e.slice(0, r + 1) + t;
	}
	let r = "", i = n.indexOf("://");
	if (i !== -1) {
		let e = n.indexOf("/", i + 3);
		e !== -1 && (r = n.slice(0, e), n = n.slice(e));
	}
	let a = n.split("/"), o = [];
	for (let e of a) e === ".." ? o.pop() : e !== "." && o.push(e);
	return r + o.join("/");
}, He = (e, t) => {
	let n = 0;
	for (let r = 0; r < e.length; r++) t(e[r]) && n++;
	return n;
}, Ue = (e, t) => {
	let n = -1, r = Infinity;
	for (let i = 0; i < e.length; i++) {
		let a = t(e[i]);
		a < r && (r = a, n = i);
	}
	return n;
}, We = (e) => {
	a(Number.isInteger(e.num)), a(Number.isInteger(e.den)), a(e.den !== 0);
	let t = Math.abs(e.num), n = Math.abs(e.den);
	for (; n !== 0;) {
		let e = t % n;
		t = n, n = e;
	}
	let r = t || 1;
	return {
		num: e.num / r,
		den: e.den / r
	};
}, Ge = (e, t) => {
	if (typeof e != "object" || !e) throw TypeError(`${t} must be an object.`);
	if (!Number.isInteger(e.left) || e.left < 0) throw TypeError(`${t}.left must be a non-negative integer.`);
	if (!Number.isInteger(e.top) || e.top < 0) throw TypeError(`${t}.top must be a non-negative integer.`);
	if (!Number.isInteger(e.width) || e.width < 0) throw TypeError(`${t}.width must be a non-negative integer.`);
	if (!Number.isInteger(e.height) || e.height < 0) throw TypeError(`${t}.height must be a non-negative integer.`);
}, Ke = (e) => new Promise((t) => setTimeout(t, e)), qe = (e) => Array.isArray(e) ? e : [e], Je = class {
	constructor() {
		this._listeners = /* @__PURE__ */ new Map();
	}
	on(e, t, n) {
		this._listeners.has(e) || this._listeners.set(e, /* @__PURE__ */ new Set());
		let r = {
			fn: t,
			once: n?.once ?? !1
		};
		return this._listeners.get(e).add(r), () => {
			this._listeners.get(e)?.delete(r);
		};
	}
	_emit(...e) {
		let [t, n] = e, r = this._listeners.get(t);
		if (r) for (let e of r) {
			try {
				e.fn(n);
			} catch (e) {
				console.error(e);
			}
			e.once && r.delete(e);
		}
	}
}, Ye = (e) => Math.ceil(e / 2) * 2, Xe = (e) => typeof e == "object" && !!e && Object.getPrototypeOf(e) === Object.prototype && Object.values(e).every((e) => typeof e == "string"), Ze = class {
	constructor(e, t) {
		if (this.data = e, this.mimeType = t, !(e instanceof Uint8Array)) throw TypeError("data must be a Uint8Array.");
		if (typeof t != "string") throw TypeError("mimeType must be a string.");
	}
}, Qe = class {
	constructor(e, t, n, r) {
		if (this.data = e, this.mimeType = t, this.name = n, this.description = r, !(e instanceof Uint8Array)) throw TypeError("data must be a Uint8Array.");
		if (t !== void 0 && typeof t != "string") throw TypeError("mimeType, when provided, must be a string.");
		if (n !== void 0 && typeof n != "string") throw TypeError("name, when provided, must be a string.");
		if (r !== void 0 && typeof r != "string") throw TypeError("description, when provided, must be a string.");
	}
}, $e = (e) => {
	if (!e || typeof e != "object") throw TypeError("tags must be an object.");
	if (e.title !== void 0 && typeof e.title != "string") throw TypeError("tags.title, when provided, must be a string.");
	if (e.description !== void 0 && typeof e.description != "string") throw TypeError("tags.description, when provided, must be a string.");
	if (e.artist !== void 0 && typeof e.artist != "string") throw TypeError("tags.artist, when provided, must be a string.");
	if (e.album !== void 0 && typeof e.album != "string") throw TypeError("tags.album, when provided, must be a string.");
	if (e.albumArtist !== void 0 && typeof e.albumArtist != "string") throw TypeError("tags.albumArtist, when provided, must be a string.");
	if (e.trackNumber !== void 0 && (!Number.isInteger(e.trackNumber) || e.trackNumber <= 0)) throw TypeError("tags.trackNumber, when provided, must be a positive integer.");
	if (e.tracksTotal !== void 0 && (!Number.isInteger(e.tracksTotal) || e.tracksTotal <= 0)) throw TypeError("tags.tracksTotal, when provided, must be a positive integer.");
	if (e.discNumber !== void 0 && (!Number.isInteger(e.discNumber) || e.discNumber <= 0)) throw TypeError("tags.discNumber, when provided, must be a positive integer.");
	if (e.discsTotal !== void 0 && (!Number.isInteger(e.discsTotal) || e.discsTotal <= 0)) throw TypeError("tags.discsTotal, when provided, must be a positive integer.");
	if (e.genre !== void 0 && typeof e.genre != "string") throw TypeError("tags.genre, when provided, must be a string.");
	if (e.date !== void 0 && (!(e.date instanceof Date) || Number.isNaN(e.date.getTime()))) throw TypeError("tags.date, when provided, must be a valid Date.");
	if (e.lyrics !== void 0 && typeof e.lyrics != "string") throw TypeError("tags.lyrics, when provided, must be a string.");
	if (e.images !== void 0) {
		if (!Array.isArray(e.images)) throw TypeError("tags.images, when provided, must be an array.");
		for (let t of e.images) {
			if (!t || typeof t != "object") throw TypeError("Each image in tags.images must be an object.");
			if (!(t.data instanceof Uint8Array)) throw TypeError("Each image.data must be a Uint8Array.");
			if (typeof t.mimeType != "string") throw TypeError("Each image.mimeType must be a string.");
			if (![
				"coverFront",
				"coverBack",
				"unknown"
			].includes(t.kind)) throw TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.");
		}
	}
	if (e.comment !== void 0 && typeof e.comment != "string") throw TypeError("tags.comment, when provided, must be a string.");
	if (e.raw !== void 0) {
		if (!e.raw || typeof e.raw != "object") throw TypeError("tags.raw, when provided, must be an object.");
		for (let t of Object.values(e.raw)) if (t !== null && typeof t != "string" && !(t instanceof Uint8Array) && !(t instanceof Ze) && !(t instanceof Qe) && !Xe(t)) throw TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.");
	}
}, et = (e) => e.title === void 0 && e.description === void 0 && e.artist === void 0 && e.album === void 0 && e.albumArtist === void 0 && e.trackNumber === void 0 && e.tracksTotal === void 0 && e.discNumber === void 0 && e.discsTotal === void 0 && e.genre === void 0 && e.date === void 0 && e.lyrics === void 0 && (!e.images || e.images.length === 0) && e.comment === void 0 && (e.raw === void 0 || Object.keys(e.raw).length === 0), tt = {
	default: !0,
	primary: !0,
	forced: !1,
	original: !1,
	commentary: !1,
	hearingImpaired: !1,
	visuallyImpaired: !1
}, nt = (e) => {
	if (!e || typeof e != "object") throw TypeError("disposition must be an object.");
	if (e.default !== void 0 && typeof e.default != "boolean") throw TypeError("disposition.default must be a boolean.");
	if (e.primary !== void 0 && typeof e.primary != "boolean") throw TypeError("disposition.primary must be a boolean.");
	if (e.forced !== void 0 && typeof e.forced != "boolean") throw TypeError("disposition.forced must be a boolean.");
	if (e.original !== void 0 && typeof e.original != "boolean") throw TypeError("disposition.original must be a boolean.");
	if (e.commentary !== void 0 && typeof e.commentary != "boolean") throw TypeError("disposition.commentary must be a boolean.");
	if (e.hearingImpaired !== void 0 && typeof e.hearingImpaired != "boolean") throw TypeError("disposition.hearingImpaired must be a boolean.");
	if (e.visuallyImpaired !== void 0 && typeof e.visuallyImpaired != "boolean") throw TypeError("disposition.visuallyImpaired must be a boolean.");
}, P = class e {
	constructor(e) {
		this.bytes = e, this.pos = 0;
	}
	seekToByte(e) {
		this.pos = 8 * e;
	}
	readBit() {
		let e = Math.floor(this.pos / 8), t = this.bytes[e] ?? 0, n = 7 - (this.pos & 7), r = (t & 1 << n) >> n;
		return this.pos++, r;
	}
	readBits(e) {
		if (e === 1) return this.readBit();
		let t = 0;
		for (let n = 0; n < e; n++) t <<= 1, t |= this.readBit();
		return t;
	}
	writeBits(e, t) {
		let n = this.pos + e;
		for (let e = this.pos; e < n; e++) {
			let r = Math.floor(e / 8), i = this.bytes[r], a = 7 - (e & 7);
			i &= ~(1 << a), i |= (t & 1 << n - e - 1) >> n - e - 1 << a, this.bytes[r] = i;
		}
		this.pos = n;
	}
	readAlignedByte() {
		if (this.pos % 8 != 0) throw Error("Bitstream is not byte-aligned.");
		let e = this.pos / 8, t = this.bytes[e] ?? 0;
		return this.pos += 8, t;
	}
	skipBits(e) {
		this.pos += e;
	}
	getBitsLeft() {
		return this.bytes.length * 8 - this.pos;
	}
	clone() {
		let t = new e(this.bytes);
		return t.pos = this.pos, t;
	}
}, F = [
	96e3,
	88200,
	64e3,
	48e3,
	44100,
	32e3,
	24e3,
	22050,
	16e3,
	12e3,
	11025,
	8e3,
	7350
], rt = [
	-1,
	1,
	2,
	3,
	4,
	5,
	6,
	8
], it = (e) => {
	if (!e || e.byteLength < 2) throw TypeError("AAC description must be at least 2 bytes long.");
	let t = new P(e), n = t.readBits(5);
	n === 31 && (n = 32 + t.readBits(6));
	let r = t.readBits(4), i = null;
	r === 15 ? i = t.readBits(24) : r < F.length && (i = F[r]);
	let a = t.readBits(4), o = null;
	return a >= 1 && a <= 7 && (o = rt[a]), {
		objectType: n,
		frequencyIndex: r,
		sampleRate: i,
		channelConfiguration: a,
		numberOfChannels: o
	};
}, at = (e) => {
	let t = F.indexOf(e.sampleRate), n = null;
	t === -1 && (t = 15, n = e.sampleRate);
	let r = rt.indexOf(e.numberOfChannels);
	if (r === -1) throw TypeError(`Unsupported number of channels: ${e.numberOfChannels}`);
	let i = 13;
	e.objectType >= 32 && (i += 6), t === 15 && (i += 24);
	let a = Math.ceil(i / 8), o = new Uint8Array(a), s = new P(o);
	return e.objectType < 32 ? s.writeBits(5, e.objectType) : (s.writeBits(5, 31), s.writeBits(6, e.objectType - 32)), s.writeBits(4, t), t === 15 && s.writeBits(24, n), s.writeBits(4, r), o;
}, ot = [
	"avc",
	"hevc",
	"vp9",
	"av1",
	"vp8"
], I = [
	"pcm-s16",
	"pcm-s16be",
	"pcm-s24",
	"pcm-s24be",
	"pcm-s32",
	"pcm-s32be",
	"pcm-f32",
	"pcm-f32be",
	"pcm-f64",
	"pcm-f64be",
	"pcm-u8",
	"pcm-s8",
	"ulaw",
	"alaw"
], st = [
	"aac",
	"opus",
	"mp3",
	"vorbis",
	"flac",
	"ac3",
	"eac3"
], ct = [...st, ...I], lt = ["webvtt"], L = [
	{
		maxMacroblocks: 99,
		maxBitrate: 64e3,
		maxDpbMbs: 396,
		level: 10
	},
	{
		maxMacroblocks: 396,
		maxBitrate: 192e3,
		maxDpbMbs: 900,
		level: 11
	},
	{
		maxMacroblocks: 396,
		maxBitrate: 384e3,
		maxDpbMbs: 2376,
		level: 12
	},
	{
		maxMacroblocks: 396,
		maxBitrate: 768e3,
		maxDpbMbs: 2376,
		level: 13
	},
	{
		maxMacroblocks: 396,
		maxBitrate: 2e6,
		maxDpbMbs: 2376,
		level: 20
	},
	{
		maxMacroblocks: 792,
		maxBitrate: 4e6,
		maxDpbMbs: 4752,
		level: 21
	},
	{
		maxMacroblocks: 1620,
		maxBitrate: 4e6,
		maxDpbMbs: 8100,
		level: 22
	},
	{
		maxMacroblocks: 1620,
		maxBitrate: 1e7,
		maxDpbMbs: 8100,
		level: 30
	},
	{
		maxMacroblocks: 3600,
		maxBitrate: 14e6,
		maxDpbMbs: 18e3,
		level: 31
	},
	{
		maxMacroblocks: 5120,
		maxBitrate: 2e7,
		maxDpbMbs: 20480,
		level: 32
	},
	{
		maxMacroblocks: 8192,
		maxBitrate: 2e7,
		maxDpbMbs: 32768,
		level: 40
	},
	{
		maxMacroblocks: 8192,
		maxBitrate: 5e7,
		maxDpbMbs: 32768,
		level: 41
	},
	{
		maxMacroblocks: 8704,
		maxBitrate: 5e7,
		maxDpbMbs: 34816,
		level: 42
	},
	{
		maxMacroblocks: 22080,
		maxBitrate: 135e6,
		maxDpbMbs: 110400,
		level: 50
	},
	{
		maxMacroblocks: 36864,
		maxBitrate: 24e7,
		maxDpbMbs: 184320,
		level: 51
	},
	{
		maxMacroblocks: 36864,
		maxBitrate: 24e7,
		maxDpbMbs: 184320,
		level: 52
	},
	{
		maxMacroblocks: 139264,
		maxBitrate: 24e7,
		maxDpbMbs: 696320,
		level: 60
	},
	{
		maxMacroblocks: 139264,
		maxBitrate: 48e7,
		maxDpbMbs: 696320,
		level: 61
	},
	{
		maxMacroblocks: 139264,
		maxBitrate: 8e8,
		maxDpbMbs: 696320,
		level: 62
	}
], ut = [
	{
		maxPictureSize: 36864,
		maxBitrate: 128e3,
		tier: "L",
		level: 30
	},
	{
		maxPictureSize: 122880,
		maxBitrate: 15e5,
		tier: "L",
		level: 60
	},
	{
		maxPictureSize: 245760,
		maxBitrate: 3e6,
		tier: "L",
		level: 63
	},
	{
		maxPictureSize: 552960,
		maxBitrate: 6e6,
		tier: "L",
		level: 90
	},
	{
		maxPictureSize: 983040,
		maxBitrate: 1e7,
		tier: "L",
		level: 93
	},
	{
		maxPictureSize: 2228224,
		maxBitrate: 12e6,
		tier: "L",
		level: 120
	},
	{
		maxPictureSize: 2228224,
		maxBitrate: 3e7,
		tier: "H",
		level: 120
	},
	{
		maxPictureSize: 2228224,
		maxBitrate: 2e7,
		tier: "L",
		level: 123
	},
	{
		maxPictureSize: 2228224,
		maxBitrate: 5e7,
		tier: "H",
		level: 123
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 25e6,
		tier: "L",
		level: 150
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 1e8,
		tier: "H",
		level: 150
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 4e7,
		tier: "L",
		level: 153
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 16e7,
		tier: "H",
		level: 153
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 6e7,
		tier: "L",
		level: 156
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 24e7,
		tier: "H",
		level: 156
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 6e7,
		tier: "L",
		level: 180
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 24e7,
		tier: "H",
		level: 180
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 12e7,
		tier: "L",
		level: 183
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 48e7,
		tier: "H",
		level: 183
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 24e7,
		tier: "L",
		level: 186
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 8e8,
		tier: "H",
		level: 186
	}
], dt = [
	{
		maxPictureSize: 36864,
		maxBitrate: 2e5,
		level: 10
	},
	{
		maxPictureSize: 73728,
		maxBitrate: 8e5,
		level: 11
	},
	{
		maxPictureSize: 122880,
		maxBitrate: 18e5,
		level: 20
	},
	{
		maxPictureSize: 245760,
		maxBitrate: 36e5,
		level: 21
	},
	{
		maxPictureSize: 552960,
		maxBitrate: 72e5,
		level: 30
	},
	{
		maxPictureSize: 983040,
		maxBitrate: 12e6,
		level: 31
	},
	{
		maxPictureSize: 2228224,
		maxBitrate: 18e6,
		level: 40
	},
	{
		maxPictureSize: 2228224,
		maxBitrate: 3e7,
		level: 41
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 6e7,
		level: 50
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 12e7,
		level: 51
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 18e7,
		level: 52
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 18e7,
		level: 60
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 24e7,
		level: 61
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 48e7,
		level: 62
	}
], ft = [
	{
		maxPictureSize: 147456,
		maxBitrate: 15e5,
		tier: "M",
		level: 0
	},
	{
		maxPictureSize: 278784,
		maxBitrate: 3e6,
		tier: "M",
		level: 1
	},
	{
		maxPictureSize: 665856,
		maxBitrate: 6e6,
		tier: "M",
		level: 4
	},
	{
		maxPictureSize: 1065024,
		maxBitrate: 1e7,
		tier: "M",
		level: 5
	},
	{
		maxPictureSize: 2359296,
		maxBitrate: 12e6,
		tier: "M",
		level: 8
	},
	{
		maxPictureSize: 2359296,
		maxBitrate: 3e7,
		tier: "H",
		level: 8
	},
	{
		maxPictureSize: 2359296,
		maxBitrate: 2e7,
		tier: "M",
		level: 9
	},
	{
		maxPictureSize: 2359296,
		maxBitrate: 5e7,
		tier: "H",
		level: 9
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 3e7,
		tier: "M",
		level: 12
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 1e8,
		tier: "H",
		level: 12
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 4e7,
		tier: "M",
		level: 13
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 16e7,
		tier: "H",
		level: 13
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 6e7,
		tier: "M",
		level: 14
	},
	{
		maxPictureSize: 8912896,
		maxBitrate: 24e7,
		tier: "H",
		level: 14
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 6e7,
		tier: "M",
		level: 15
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 24e7,
		tier: "H",
		level: 15
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 6e7,
		tier: "M",
		level: 16
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 24e7,
		tier: "H",
		level: 16
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 1e8,
		tier: "M",
		level: 17
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 48e7,
		tier: "H",
		level: 17
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 16e7,
		tier: "M",
		level: 18
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 8e8,
		tier: "H",
		level: 18
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 16e7,
		tier: "M",
		level: 19
	},
	{
		maxPictureSize: 35651584,
		maxBitrate: 8e8,
		tier: "H",
		level: 19
	}
], pt = ".01.01.01.01.00", mt = ".0.110.01.01.01.0", ht = (e, t, n, r) => {
	if (e === "avc") {
		let e = Math.ceil(t / 16) * Math.ceil(n / 16), i = L.find((t) => e <= t.maxMacroblocks && r <= t.maxBitrate) ?? s(L), a = i ? i.level : 0;
		return `avc1.${"64".padStart(2, "0")}00${a.toString(16).padStart(2, "0")}`;
	} else if (e === "hevc") {
		let e = t * n, i = ut.find((t) => e <= t.maxPictureSize && r <= t.maxBitrate) ?? s(ut);
		return `hev1.1.6.${i.tier}${i.level}.B0`;
	} else if (e === "vp8") return "vp8";
	else if (e === "vp9") {
		let e = t * n;
		return `vp09.00.${(dt.find((t) => e <= t.maxPictureSize && r <= t.maxBitrate) ?? s(dt)).level.toString().padStart(2, "0")}.08`;
	} else if (e === "av1") {
		let e = t * n, i = ft.find((t) => e <= t.maxPictureSize && r <= t.maxBitrate) ?? s(ft);
		return `av01.0.${i.level.toString().padStart(2, "0")}${i.tier}.08`;
	}
	throw TypeError(`Unhandled codec '${e}'.`);
}, gt = (e) => {
	let t = e.split(".");
	return [
		1,
		1,
		Number(t[1]),
		2,
		1,
		Number(t[2]),
		3,
		1,
		Number(t[3]),
		4,
		1,
		t[4] ? Number(t[4]) : 1
	];
}, _t = (e) => {
	let t = e.split("."), n = Number(t[1]), r = t[2], i = Number(r.slice(0, -1)), a = (n << 5) + i, o = +(r.slice(-1) === "H"), s = Number(t[3]) === 8 ? 0 : 1, c = t[4] ? Number(t[4]) : 0, l = t[5] ? Number(t[5][0]) : 1, u = t[5] ? Number(t[5][1]) : 1, d = t[5] ? Number(t[5][2]) : 0;
	return [
		129,
		a,
		(o << 7) + (s << 6) + 0 + (c << 4) + (l << 3) + (u << 2) + d,
		0
	];
}, vt = (e) => {
	let { codec: t, codecDescription: n, colorSpace: r, avcCodecInfo: i, hevcCodecInfo: o, vp9CodecInfo: c, av1CodecInfo: l } = e;
	if (t === "avc") {
		if (a(e.avcType !== null), i) {
			let t = new Uint8Array([
				i.avcProfileIndication,
				i.profileCompatibility,
				i.avcLevelIndication
			]);
			return `avc${e.avcType}.${te(t)}`;
		}
		if (!n || n.byteLength < 4) throw TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
		return `avc${e.avcType}.${te(n.subarray(1, 4))}`;
	} else if (t === "hevc") {
		let e, t, r, i, a, s;
		if (o) e = o.generalProfileSpace, t = o.generalProfileIdc, r = re(o.generalProfileCompatibilityFlags), i = o.generalTierFlag, a = o.generalLevelIdc, s = [...o.generalConstraintIndicatorFlags];
		else {
			if (!n || n.byteLength < 23) throw TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
			let o = p(n), c = o.getUint8(1);
			e = c >> 6 & 3, t = c & 31, r = re(o.getUint32(2)), i = c >> 5 & 1, a = o.getUint8(12), s = [];
			for (let e = 0; e < 6; e++) s.push(o.getUint8(6 + e));
		}
		let c = "hev1.";
		for (c += [
			"",
			"A",
			"B",
			"C"
		][e] + t, c += ".", c += r.toString(16).toUpperCase(), c += ".", c += i === 0 ? "L" : "H", c += a; s.length > 0 && s[s.length - 1] === 0;) s.pop();
		return s.length > 0 && (c += ".", c += s.map((e) => e.toString(16).toUpperCase()).join(".")), c;
	} else if (t === "vp8") return "vp8";
	else if (t === "vp9") {
		if (!c) {
			let t = e.width * e.height, n = s(dt).level;
			for (let e of dt) if (t <= e.maxPictureSize) {
				n = e.level;
				break;
			}
			return `vp09.00.${n.toString().padStart(2, "0")}.08`;
		}
		let t = c.profile.toString().padStart(2, "0"), n = c.level.toString().padStart(2, "0"), r = c.bitDepth.toString().padStart(2, "0"), i = c.chromaSubsampling.toString().padStart(2, "0"), a = c.colourPrimaries.toString().padStart(2, "0"), o = c.transferCharacteristics.toString().padStart(2, "0"), l = c.matrixCoefficients.toString().padStart(2, "0"), u = c.videoFullRangeFlag.toString().padStart(2, "0"), d = `vp09.${t}.${n}.${r}.${i}`;
		return d += `.${a}.${o}.${l}.${u}`, d.endsWith(pt) && (d = d.slice(0, -15)), d;
	} else if (t === "av1") {
		if (!l) {
			let t = e.width * e.height, n = s(dt).level;
			for (let e of dt) if (t <= e.maxPictureSize) {
				n = e.level;
				break;
			}
			return `av01.0.${n.toString().padStart(2, "0")}M.08`;
		}
		let t = l.profile, n = l.level.toString().padStart(2, "0"), i = l.tier ? "H" : "M", a = l.bitDepth.toString().padStart(2, "0"), o = l.monochrome ? "1" : "0", c = 100 * l.chromaSubsamplingX + 10 * l.chromaSubsamplingY + 1 * (l.chromaSubsamplingX && l.chromaSubsamplingY ? l.chromaSamplePosition : 0), u = r?.primaries ? v[r.primaries] : 1, d = r?.transfer ? b[r.transfer] : 1, f = r?.matrix ? S[r.matrix] : 1, p = +!!r?.fullRange, m = `av01.${t}.${n}${i}.${a}`;
		return m += `.${o}.${c.toString().padStart(3, "0")}`, m += `.${u.toString().padStart(2, "0")}`, m += `.${d.toString().padStart(2, "0")}`, m += `.${f.toString().padStart(2, "0")}`, m += `.${p}`, m.endsWith(mt) && (m = m.slice(0, -17)), m;
	}
	throw TypeError(`Unhandled codec '${t}'.`);
}, yt = (e, t, n) => {
	if (e === "aac") return t >= 2 && n <= 24e3 ? "mp4a.40.29" : n <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
	if (e === "mp3") return "mp3";
	if (e === "opus") return "opus";
	if (e === "vorbis") return "vorbis";
	if (e === "flac") return "flac";
	if (e === "ac3") return "ac-3";
	if (e === "eac3") return "ec-3";
	if (I.includes(e)) return e;
	throw TypeError(`Unhandled codec '${e}'.`);
}, bt = (e) => {
	let { codec: t, codecDescription: n, aacCodecInfo: r } = e;
	if (t === "aac") {
		if (!r) throw TypeError("AAC codec info must be provided.");
		if (r.isMpeg2) return "mp4a.67";
		{
			let e;
			return e = r.objectType === null ? it(n).objectType : r.objectType, `mp4a.40.${e}`;
		}
	} else if (t === "mp3") return "mp3";
	else if (t === "opus") return "opus";
	else if (t === "vorbis") return "vorbis";
	else if (t === "flac") return "flac";
	else if (t === "ac3") return "ac-3";
	else if (t === "eac3") return "ec-3";
	else if (t && I.includes(t)) return t;
	throw TypeError(`Unhandled codec '${t}'.`);
}, xt = 48e3, St = /^pcm-([usf])(\d+)(be)?$/, Ct = (e) => {
	if (a(I.includes(e)), e === "ulaw") return {
		dataType: "ulaw",
		sampleSize: 1,
		littleEndian: !0,
		silentValue: 255
	};
	if (e === "alaw") return {
		dataType: "alaw",
		sampleSize: 1,
		littleEndian: !0,
		silentValue: 213
	};
	let t = St.exec(e);
	a(t);
	let n;
	n = t[1] === "u" ? "unsigned" : t[1] === "s" ? "signed" : "float";
	let r = Number(t[2]) / 8, i = t[3] !== "be";
	return {
		dataType: n,
		sampleSize: r,
		littleEndian: i,
		silentValue: e === "pcm-u8" ? 2 ** 7 : 0
	};
}, wt = (e) => e.startsWith("avc1") || e.startsWith("avc3") ? "avc" : e.startsWith("hev1") || e.startsWith("hvc1") ? "hevc" : e === "vp8" ? "vp8" : e.startsWith("vp09") ? "vp9" : e.startsWith("av01") ? "av1" : e === "mp3" || e === "mp4a.69" || e === "mp4a.6B" || e === "mp4a.6b" || e === "mp4a.40.34" ? "mp3" : e.startsWith("mp4a.40.") || e === "mp4a.67" ? "aac" : e === "opus" ? "opus" : e === "vorbis" ? "vorbis" : e === "flac" ? "flac" : e === "ac-3" || e === "ac3" ? "ac3" : e === "ec-3" || e === "eac3" ? "eac3" : e === "ulaw" ? "ulaw" : e === "alaw" ? "alaw" : St.test(e) ? e : e === "webvtt" ? "webvtt" : null, Tt = (e) => e === "avc" ? { avc: { format: "avc" } } : e === "hevc" ? { hevc: { format: "hevc" } } : {}, Et = (e) => e === "aac" ? { aac: { format: "aac" } } : e === "opus" ? { opus: { format: "opus" } } : {}, Dt = [
	"avc1",
	"avc3",
	"hev1",
	"hvc1",
	"vp8",
	"vp09",
	"av01"
], Ot = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/, kt = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/, R = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/, At = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/, jt = (e) => {
	if (!e) throw TypeError("Video chunk metadata must be provided.");
	if (typeof e != "object") throw TypeError("Video chunk metadata must be an object.");
	if (!e.decoderConfig) throw TypeError("Video chunk metadata must include a decoder configuration.");
	if (typeof e.decoderConfig != "object") throw TypeError("Video chunk metadata decoder configuration must be an object.");
	if (typeof e.decoderConfig.codec != "string") throw TypeError("Video chunk metadata decoder configuration must specify a codec string.");
	if (!Dt.some((t) => e.decoderConfig.codec.startsWith(t))) throw TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
	if (!Number.isInteger(e.decoderConfig.codedWidth) || e.decoderConfig.codedWidth <= 0) throw TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
	if (!Number.isInteger(e.decoderConfig.codedHeight) || e.decoderConfig.codedHeight <= 0) throw TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
	if (e.decoderConfig.displayAspectWidth !== void 0 && (!Number.isInteger(e.decoderConfig.displayAspectWidth) || e.decoderConfig.displayAspectWidth <= 0)) throw TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
	if (e.decoderConfig.displayAspectHeight !== void 0 && (!Number.isInteger(e.decoderConfig.displayAspectHeight) || e.decoderConfig.displayAspectHeight <= 0)) throw TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
	if (e.decoderConfig.displayAspectWidth !== void 0 != (e.decoderConfig.displayAspectHeight !== void 0)) throw TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
	if (e.decoderConfig.description !== void 0 && !ee(e.decoderConfig.description)) throw TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
	if (e.decoderConfig.colorSpace !== void 0) {
		let { colorSpace: t } = e.decoderConfig;
		if (typeof t != "object") throw TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
		let n = Object.keys(v);
		if (t.primaries != null && !n.includes(t.primaries)) throw TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${n.join(", ")}.`);
		let r = Object.keys(b);
		if (t.transfer != null && !r.includes(t.transfer)) throw TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${r.join(", ")}.`);
		let i = Object.keys(S);
		if (t.matrix != null && !i.includes(t.matrix)) throw TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${i.join(", ")}.`);
		if (t.fullRange != null && typeof t.fullRange != "boolean") throw TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.");
	}
	if (e.decoderConfig.codec.startsWith("avc1") || e.decoderConfig.codec.startsWith("avc3")) {
		if (!Ot.test(e.decoderConfig.codec)) throw TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.");
	} else if (e.decoderConfig.codec.startsWith("hev1") || e.decoderConfig.codec.startsWith("hvc1")) {
		if (!kt.test(e.decoderConfig.codec)) throw TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.");
	} else if (e.decoderConfig.codec.startsWith("vp8")) {
		if (e.decoderConfig.codec !== "vp8") throw TypeError("Video chunk metadata decoder configuration codec string for VP8 must be \"vp8\".");
	} else if (e.decoderConfig.codec.startsWith("vp09")) {
		if (!R.test(e.decoderConfig.codec)) throw TypeError("Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section \"Codecs Parameter String\" of https://www.webmproject.org/vp9/mp4/.");
	} else if (e.decoderConfig.codec.startsWith("av01") && !At.test(e.decoderConfig.codec)) throw TypeError("Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section \"Codecs Parameter String\" of https://aomediacodec.github.io/av1-isobmff/.");
}, Mt = [
	"mp4a",
	"mp3",
	"opus",
	"vorbis",
	"flac",
	"ulaw",
	"alaw",
	"pcm",
	"ac-3",
	"ec-3"
], Nt = (e) => {
	if (!e) throw TypeError("Audio chunk metadata must be provided.");
	if (typeof e != "object") throw TypeError("Audio chunk metadata must be an object.");
	if (!e.decoderConfig) throw TypeError("Audio chunk metadata must include a decoder configuration.");
	if (typeof e.decoderConfig != "object") throw TypeError("Audio chunk metadata decoder configuration must be an object.");
	if (typeof e.decoderConfig.codec != "string") throw TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
	if (!Mt.some((t) => e.decoderConfig.codec.startsWith(t))) throw TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
	if (!Number.isInteger(e.decoderConfig.sampleRate) || e.decoderConfig.sampleRate <= 0) throw TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
	if (!Number.isInteger(e.decoderConfig.numberOfChannels) || e.decoderConfig.numberOfChannels <= 0) throw TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
	if (e.decoderConfig.description !== void 0 && !ee(e.decoderConfig.description)) throw TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
	if (e.decoderConfig.codec.startsWith("mp4a") && e.decoderConfig.codec !== "mp4a.69" && e.decoderConfig.codec !== "mp4a.6B" && e.decoderConfig.codec !== "mp4a.6b") {
		if (![
			"mp4a.40.2",
			"mp4a.40.02",
			"mp4a.40.5",
			"mp4a.40.05",
			"mp4a.40.29",
			"mp4a.67"
		].includes(e.decoderConfig.codec)) throw TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.");
	} else if (e.decoderConfig.codec.startsWith("mp3") || e.decoderConfig.codec.startsWith("mp4a")) {
		if (e.decoderConfig.codec !== "mp3" && e.decoderConfig.codec !== "mp4a.69" && e.decoderConfig.codec !== "mp4a.6B" && e.decoderConfig.codec !== "mp4a.6b") throw TypeError("Audio chunk metadata decoder configuration codec string for MP3 must be \"mp3\", \"mp4a.69\" or \"mp4a.6B\".");
	} else if (e.decoderConfig.codec.startsWith("opus")) {
		if (e.decoderConfig.codec !== "opus") throw TypeError("Audio chunk metadata decoder configuration codec string for Opus must be \"opus\".");
		if (e.decoderConfig.description && e.decoderConfig.description.byteLength < 18) throw TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.");
	} else if (e.decoderConfig.codec.startsWith("vorbis")) {
		if (e.decoderConfig.codec !== "vorbis") throw TypeError("Audio chunk metadata decoder configuration codec string for Vorbis must be \"vorbis\".");
		if (!e.decoderConfig.description) throw TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.");
	} else if (e.decoderConfig.codec.startsWith("flac")) {
		if (e.decoderConfig.codec !== "flac") throw TypeError("Audio chunk metadata decoder configuration codec string for FLAC must be \"flac\".");
		if (!e.decoderConfig.description || e.decoderConfig.description.byteLength < 42) throw TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.");
	} else if (e.decoderConfig.codec.startsWith("ac-3") || e.decoderConfig.codec.startsWith("ac3")) {
		if (e.decoderConfig.codec !== "ac-3") throw TypeError("Audio chunk metadata decoder configuration codec string for AC-3 must be \"ac-3\".");
	} else if (e.decoderConfig.codec.startsWith("ec-3") || e.decoderConfig.codec.startsWith("eac3")) {
		if (e.decoderConfig.codec !== "ec-3") throw TypeError("Audio chunk metadata decoder configuration codec string for EC-3 must be \"ec-3\".");
	} else if ((e.decoderConfig.codec.startsWith("pcm") || e.decoderConfig.codec.startsWith("ulaw") || e.decoderConfig.codec.startsWith("alaw")) && !I.includes(e.decoderConfig.codec)) throw TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${I.join(", ")}).`);
}, Pt = (e) => {
	if (!e) throw TypeError("Subtitle metadata must be provided.");
	if (typeof e != "object") throw TypeError("Subtitle metadata must be an object.");
	if (!e.config) throw TypeError("Subtitle metadata must include a config object.");
	if (typeof e.config != "object") throw TypeError("Subtitle metadata config must be an object.");
	if (typeof e.config.description != "string") throw TypeError("Subtitle metadata config description must be a string.");
}, Ft = [
	44100,
	48e3,
	32e3
], It = [
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	32,
	40,
	48,
	56,
	64,
	80,
	96,
	112,
	128,
	160,
	192,
	224,
	256,
	320,
	-1,
	-1,
	32,
	48,
	56,
	64,
	80,
	96,
	112,
	128,
	160,
	192,
	224,
	256,
	320,
	384,
	-1,
	-1,
	32,
	64,
	96,
	128,
	160,
	192,
	224,
	256,
	288,
	320,
	352,
	384,
	416,
	448,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	8,
	16,
	24,
	32,
	40,
	48,
	56,
	64,
	80,
	96,
	112,
	128,
	144,
	160,
	-1,
	-1,
	8,
	16,
	24,
	32,
	40,
	48,
	56,
	64,
	80,
	96,
	112,
	128,
	144,
	160,
	-1,
	-1,
	32,
	48,
	56,
	64,
	80,
	96,
	112,
	128,
	144,
	160,
	176,
	192,
	224,
	256,
	-1
], Lt = 1483304551, Rt = (e, t, n, r, i) => t === 0 ? 0 : t === 1 ? Math.floor(144 * n / (r << e)) + i : t === 2 ? Math.floor(144 * n / r) + i : (Math.floor(12 * n / r) + i) * 4, zt = (e, t, n, r) => t === 0 ? 0 : t === 1 ? 144 * n / (r << e) : t === 2 ? 144 * n / r : 12 * n / r * 4, Bt = (e, t) => e === 3 ? t === 3 ? 21 : 36 : t === 3 ? 13 : 21, Vt = (e, t) => {
	let n = e >>> 24, r = e >>> 16 & 255, i = e >>> 8 & 255, a = e & 255;
	if (n !== 255 && r !== 255 && i !== 255 && a !== 255) return {
		header: null,
		bytesAdvanced: 4
	};
	if (n !== 255 || (r & 224) != 224) return {
		header: null,
		bytesAdvanced: 1
	};
	let o = 0, s = 0;
	r & 16 ? o = r & 8 ? 0 : 1 : (o = 1, s = 1);
	let c = r >> 3 & 3, l = r >> 1 & 3, u = i >> 4 & 15, d = (i >> 2 & 3) % 3, f = i >> 1 & 1, p = a >> 6 & 3, m = a >> 4 & 3, h = a >> 3 & 1, g = a >> 2 & 1, _ = a & 3, v = It[o * 16 * 4 + l * 16 + u];
	if (v === -1) return {
		header: null,
		bytesAdvanced: 1
	};
	let y = v * 1e3, b = Ft[d] >> o + s, x = Rt(o, l, y, b, f);
	if (t !== null && t < x) return {
		header: null,
		bytesAdvanced: 1
	};
	let S;
	return S = c === 3 ? l === 3 ? 384 : 1152 : l === 3 ? 384 : l === 2 ? 1152 : 576, {
		header: {
			totalSize: x,
			mpegVersionId: c,
			lowSamplingFrequency: o,
			layer: l,
			bitrate: y,
			frequencyIndex: d,
			sampleRate: b,
			channel: p,
			modeExtension: m,
			copyright: h,
			original: g,
			emphasis: _,
			audioSamplesInFrame: S
		},
		bytesAdvanced: 1
	};
}, Ht = (e) => {
	let t = 127, n = 0, r = e;
	for (; t ^ 2147483647;) n = r & ~t, n <<= 1, n |= r & t, t = (t + 1 << 8) - 1, r = n;
	return n;
}, Ut = (e) => {
	let t = 2130706432, n = 0;
	for (; t !== 0;) n >>= 1, n |= e & t, t >>= 8;
	return n;
}, Wt;
(function(e) {
	e[e.FrameCount = 1] = "FrameCount", e[e.FileSize = 2] = "FileSize", e[e.Toc = 4] = "Toc";
})(Wt ||= {});
var Gt = (e) => e === 3 ? 1 : 2, Kt = [
	48e3,
	44100,
	32e3
], qt = [
	24e3,
	22050,
	16e3
], Jt;
(function(e) {
	e[e.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", e[e.SLICE_DPA = 2] = "SLICE_DPA", e[e.SLICE_DPB = 3] = "SLICE_DPB", e[e.SLICE_DPC = 4] = "SLICE_DPC", e[e.IDR = 5] = "IDR", e[e.SEI = 6] = "SEI", e[e.SPS = 7] = "SPS", e[e.PPS = 8] = "PPS", e[e.AUD = 9] = "AUD", e[e.SPS_EXT = 13] = "SPS_EXT";
})(Jt ||= {});
var Yt;
(function(e) {
	e[e.RASL_N = 8] = "RASL_N", e[e.RASL_R = 9] = "RASL_R", e[e.BLA_W_LP = 16] = "BLA_W_LP", e[e.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", e[e.VPS_NUT = 32] = "VPS_NUT", e[e.SPS_NUT = 33] = "SPS_NUT", e[e.PPS_NUT = 34] = "PPS_NUT", e[e.AUD_NUT = 35] = "AUD_NUT", e[e.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", e[e.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT";
})(Yt ||= {});
var Xt = function* (e) {
	let t = 0, n = -1;
	for (; t < e.length - 2;) {
		let r = e.indexOf(0, t);
		if (r === -1 || r >= e.length - 2) break;
		t = r;
		let i = 0;
		if (t + 3 < e.length && e[t + 1] === 0 && e[t + 2] === 0 && e[t + 3] === 1 ? i = 4 : e[t + 1] === 0 && e[t + 2] === 1 && (i = 3), i === 0) {
			t++;
			continue;
		}
		n !== -1 && t > n && (yield {
			offset: n,
			length: t - n
		}), n = t + i, t = n;
	}
	n !== -1 && n < e.length && (yield {
		offset: n,
		length: e.length - n
	});
}, Zt = function* (e, t) {
	let n = 0, r = new DataView(e.buffer, e.byteOffset, e.byteLength);
	for (; n + t <= e.length;) {
		let e;
		t === 1 ? e = r.getUint8(n) : t === 2 ? e = r.getUint16(n, !1) : t === 3 ? e = ue(r, n, !1) : (a(t === 4), e = r.getUint32(n, !1)), n += t, yield {
			offset: n,
			length: e
		}, n += e;
	}
}, Qt = (e, t) => t.description ? Zt(e, (f(t.description)[4] & 3) + 1) : Xt(e), $t = (e) => e & 31, en = (e) => {
	let t = [], n = e.length;
	for (let r = 0; r < n; r++) r + 2 < n && e[r] === 0 && e[r + 1] === 0 && e[r + 2] === 3 ? (t.push(0, 0), r += 2) : t.push(e[r]);
	return new Uint8Array(t);
}, tn = new Uint8Array([
	0,
	0,
	0,
	1
]), nn = (e) => {
	let t = e.reduce((e, t) => e + tn.byteLength + t.byteLength, 0), n = new Uint8Array(t), r = 0;
	for (let t of e) n.set(tn, r), r += tn.byteLength, n.set(t, r), r += t.byteLength;
	return n;
}, rn = (e, t) => {
	let n = e.reduce((e, n) => e + t + n.byteLength, 0), r = new Uint8Array(n), i = 0;
	for (let n of e) {
		let e = new DataView(r.buffer, r.byteOffset, r.byteLength);
		switch (t) {
			case 1:
				e.setUint8(i, n.byteLength);
				break;
			case 2:
				e.setUint16(i, n.byteLength, !1);
				break;
			case 3:
				fe(e, i, n.byteLength, !1);
				break;
			case 4:
				e.setUint32(i, n.byteLength, !1);
				break;
		}
		i += t, r.set(n, i), i += n.byteLength;
	}
	return r;
}, an = (e, t) => t.description ? rn(e, (f(t.description)[4] & 3) + 1) : nn(e), on = (e) => {
	try {
		let t = [], n = [], r = [];
		for (let i of Xt(e)) {
			let a = e.subarray(i.offset, i.offset + i.length), o = $t(a[0]);
			o === Jt.SPS ? t.push(a) : o === Jt.PPS ? n.push(a) : o === Jt.SPS_EXT && r.push(a);
		}
		if (t.length === 0 || n.length === 0) return null;
		let i = t[0], o = un(i);
		a(o !== null);
		let s = o.profileIdc === 100 || o.profileIdc === 110 || o.profileIdc === 122 || o.profileIdc === 144;
		return {
			configurationVersion: 1,
			avcProfileIndication: o.profileIdc,
			profileCompatibility: o.constraintFlags,
			avcLevelIndication: o.levelIdc,
			lengthSizeMinusOne: 3,
			sequenceParameterSets: t,
			pictureParameterSets: n,
			chromaFormat: s ? o.chromaFormatIdc : null,
			bitDepthLumaMinus8: s ? o.bitDepthLumaMinus8 : null,
			bitDepthChromaMinus8: s ? o.bitDepthChromaMinus8 : null,
			sequenceParameterSetExt: s ? r : null
		};
	} catch (e) {
		return i._error("Error building AVC Decoder Configuration Record:", e), null;
	}
}, sn = (e) => {
	let t = [];
	t.push(e.configurationVersion), t.push(e.avcProfileIndication), t.push(e.profileCompatibility), t.push(e.avcLevelIndication), t.push(252 | e.lengthSizeMinusOne & 3), t.push(224 | e.sequenceParameterSets.length & 31);
	for (let n of e.sequenceParameterSets) {
		let e = n.byteLength;
		t.push(e >> 8), t.push(e & 255);
		for (let r = 0; r < e; r++) t.push(n[r]);
	}
	t.push(e.pictureParameterSets.length);
	for (let n of e.pictureParameterSets) {
		let e = n.byteLength;
		t.push(e >> 8), t.push(e & 255);
		for (let r = 0; r < e; r++) t.push(n[r]);
	}
	if (e.avcProfileIndication === 100 || e.avcProfileIndication === 110 || e.avcProfileIndication === 122 || e.avcProfileIndication === 144) {
		a(e.chromaFormat !== null), a(e.bitDepthLumaMinus8 !== null), a(e.bitDepthChromaMinus8 !== null), a(e.sequenceParameterSetExt !== null), t.push(252 | e.chromaFormat & 3), t.push(248 | e.bitDepthLumaMinus8 & 7), t.push(248 | e.bitDepthChromaMinus8 & 7), t.push(e.sequenceParameterSetExt.length);
		for (let n of e.sequenceParameterSetExt) {
			let e = n.byteLength;
			t.push(e >> 8), t.push(e & 255);
			for (let r = 0; r < e; r++) t.push(n[r]);
		}
	}
	return new Uint8Array(t);
}, cn = (e) => {
	try {
		let t = p(e), n = 0, r = t.getUint8(n++), i = t.getUint8(n++), a = t.getUint8(n++), o = t.getUint8(n++), s = t.getUint8(n++) & 3, c = t.getUint8(n++) & 31, l = [];
		for (let r = 0; r < c; r++) {
			let r = t.getUint16(n, !1);
			n += 2, l.push(e.subarray(n, n + r)), n += r;
		}
		let u = t.getUint8(n++), d = [];
		for (let r = 0; r < u; r++) {
			let r = t.getUint16(n, !1);
			n += 2, d.push(e.subarray(n, n + r)), n += r;
		}
		let f = {
			configurationVersion: r,
			avcProfileIndication: i,
			profileCompatibility: a,
			avcLevelIndication: o,
			lengthSizeMinusOne: s,
			sequenceParameterSets: l,
			pictureParameterSets: d,
			chromaFormat: null,
			bitDepthLumaMinus8: null,
			bitDepthChromaMinus8: null,
			sequenceParameterSetExt: null
		};
		if ((i === 100 || i === 110 || i === 122 || i === 144) && n + 4 <= e.length) {
			let r = t.getUint8(n++) & 3, i = t.getUint8(n++) & 7, a = t.getUint8(n++) & 7, o = t.getUint8(n++);
			f.chromaFormat = r, f.bitDepthLumaMinus8 = i, f.bitDepthChromaMinus8 = a;
			let s = [];
			for (let r = 0; r < o; r++) {
				let r = t.getUint16(n, !1);
				n += 2, s.push(e.subarray(n, n + r)), n += r;
			}
			f.sequenceParameterSetExt = s;
		}
		return f;
	} catch (e) {
		return i._error("Error deserializing AVC Decoder Configuration Record:", e), null;
	}
}, ln = {
	1: {
		num: 1,
		den: 1
	},
	2: {
		num: 12,
		den: 11
	},
	3: {
		num: 10,
		den: 11
	},
	4: {
		num: 16,
		den: 11
	},
	5: {
		num: 40,
		den: 33
	},
	6: {
		num: 24,
		den: 11
	},
	7: {
		num: 20,
		den: 11
	},
	8: {
		num: 32,
		den: 11
	},
	9: {
		num: 80,
		den: 33
	},
	10: {
		num: 18,
		den: 11
	},
	11: {
		num: 15,
		den: 11
	},
	12: {
		num: 64,
		den: 33
	},
	13: {
		num: 160,
		den: 99
	},
	14: {
		num: 4,
		den: 3
	},
	15: {
		num: 3,
		den: 2
	},
	16: {
		num: 2,
		den: 1
	}
}, un = (e) => {
	try {
		let t = new P(en(e));
		if (t.skipBits(1), t.skipBits(2), t.readBits(5) !== 7) return null;
		let n = t.readAlignedByte(), r = t.readAlignedByte(), i = t.readAlignedByte();
		l(t);
		let o = 1, c = 0, d = 0, f = 0;
		if ((n === 100 || n === 110 || n === 122 || n === 244 || n === 44 || n === 83 || n === 86 || n === 118 || n === 128) && (o = l(t), o === 3 && (f = t.readBits(1)), c = l(t), d = l(t), t.skipBits(1), t.readBits(1))) {
			for (let e = 0; e < (o === 3 ? 12 : 8); e++) if (t.readBits(1)) {
				let n = e < 6 ? 16 : 64, r = 8, i = 8;
				for (let e = 0; e < n; e++) {
					if (i !== 0) {
						let e = u(t);
						i = (r + e + 256) % 256;
					}
					r = i === 0 ? r : i;
				}
			}
		}
		l(t);
		let p = l(t);
		if (p === 0) l(t);
		else if (p === 1) {
			t.skipBits(1), u(t), u(t);
			let e = l(t);
			for (let n = 0; n < e; n++) u(t);
		}
		l(t), t.skipBits(1);
		let m = l(t), h = l(t), g = 16 * (m + 1), _ = 16 * (h + 1), v = g, y = _, b = t.readBits(1);
		if (b || t.skipBits(1), t.skipBits(1), t.readBits(1)) {
			let e = l(t), n = l(t), r = l(t), i = l(t), a, s;
			if ((f === 0 ? o : 0) === 0) a = 1, s = 2 - b;
			else {
				let e = o === 3 ? 1 : 2, t = o === 1 ? 2 : 1;
				a = e, s = t * (2 - b);
			}
			v -= a * (e + n), y -= s * (r + i);
		}
		let x = 2, S = 2, C = 2, w = 0, ee = {
			num: 1,
			den: 1
		}, T = null, E = null;
		if (t.readBits(1)) {
			if (t.readBits(1)) {
				let e = t.readBits(8);
				if (e === 255) ee = {
					num: t.readBits(16),
					den: t.readBits(16)
				};
				else {
					let t = ln[e];
					t && (ee = t);
				}
			}
			t.readBits(1) && t.skipBits(1), t.readBits(1) && (t.skipBits(3), w = t.readBits(1), t.readBits(1) && (x = t.readBits(8), S = t.readBits(8), C = t.readBits(8))), t.readBits(1) && (l(t), l(t)), t.readBits(1) && (t.skipBits(32), t.skipBits(32), t.skipBits(1));
			let e = t.readBits(1);
			e && dn(t);
			let n = t.readBits(1);
			n && dn(t), (e || n) && t.skipBits(1), t.skipBits(1), t.readBits(1) && (t.skipBits(1), l(t), l(t), l(t), l(t), T = l(t), E = l(t));
		}
		if (T === null) {
			a(E === null);
			let e = r & 16;
			if ((n === 44 || n === 86 || n === 100 || n === 110 || n === 122 || n === 244) && e) T = 0, E = 0;
			else {
				let e = m + 1, t = h + 1, n = (2 - b) * t, r = L.find((e) => e.level >= i) ?? s(L), a = Math.min(Math.floor(r.maxDpbMbs / (e * n)), 16);
				T = a, E = a;
			}
		}
		return a(E !== null), {
			profileIdc: n,
			constraintFlags: r,
			levelIdc: i,
			frameMbsOnlyFlag: b,
			chromaFormatIdc: o,
			bitDepthLumaMinus8: c,
			bitDepthChromaMinus8: d,
			codedWidth: g,
			codedHeight: _,
			displayWidth: v,
			displayHeight: y,
			pixelAspectRatio: ee,
			colourPrimaries: x,
			matrixCoefficients: C,
			transferCharacteristics: S,
			fullRangeFlag: w,
			numReorderFrames: T,
			maxDecFrameBuffering: E
		};
	} catch (e) {
		return i._error("Error parsing AVC SPS:", e), null;
	}
}, dn = (e) => {
	let t = l(e);
	e.skipBits(4), e.skipBits(4);
	for (let n = 0; n <= t; n++) l(e), l(e), e.skipBits(1);
	e.skipBits(5), e.skipBits(5), e.skipBits(5), e.skipBits(5);
}, fn = (e, t) => t.description ? rn(e, (f(t.description)[21] & 3) + 1) : nn(e), pn = (e, t) => t.description ? Zt(e, (f(t.description)[21] & 3) + 1) : Xt(e), mn = (e) => e >> 1 & 63, hn = (e) => {
	try {
		let t = new P(en(e));
		t.skipBits(16), t.readBits(4);
		let n = t.readBits(3), r = t.readBits(1), { general_profile_space: i, general_tier_flag: a, general_profile_idc: o, general_profile_compatibility_flags: s, general_constraint_indicator_flags: c, general_level_idc: u } = _n(t, n);
		l(t);
		let d = l(t), f = 0;
		d === 3 && (f = t.readBits(1));
		let p = l(t), m = l(t), h = p, g = m;
		if (t.readBits(1)) {
			let e = l(t), n = l(t), r = l(t), i = l(t), a = 1, o = 1, s = f === 0 ? d : 0;
			s === 1 ? (a = 2, o = 2) : s === 2 && (a = 2, o = 1), h -= (e + n) * a, g -= (r + i) * o;
		}
		let _ = l(t), v = l(t);
		l(t);
		let y = t.readBits(1) ? 0 : n, b = 0;
		for (let e = y; e <= n; e++) l(t), b = l(t), l(t);
		if (l(t), l(t), l(t), l(t), l(t), l(t), t.readBits(1) && t.readBits(1) && vn(t), t.skipBits(1), t.skipBits(1), t.readBits(1) && (t.skipBits(4), t.skipBits(4), l(t), l(t), t.skipBits(1)), yn(t, l(t)), t.readBits(1)) {
			let e = l(t);
			for (let n = 0; n < e; n++) l(t), t.skipBits(1);
		}
		t.skipBits(1), t.skipBits(1);
		let x = 2, S = 2, C = 2, w = 0, ee = 0, T = {
			num: 1,
			den: 1
		};
		if (t.readBits(1)) {
			let e = xn(t, n);
			T = e.pixelAspectRatio, x = e.colourPrimaries, S = e.transferCharacteristics, C = e.matrixCoefficients, w = e.fullRangeFlag, ee = e.minSpatialSegmentationIdc;
		}
		return {
			displayWidth: h,
			displayHeight: g,
			pixelAspectRatio: T,
			colourPrimaries: x,
			transferCharacteristics: S,
			matrixCoefficients: C,
			fullRangeFlag: w,
			maxDecFrameBuffering: b + 1,
			spsMaxSubLayersMinus1: n,
			spsTemporalIdNestingFlag: r,
			generalProfileSpace: i,
			generalTierFlag: a,
			generalProfileIdc: o,
			generalProfileCompatibilityFlags: s,
			generalConstraintIndicatorFlags: c,
			generalLevelIdc: u,
			chromaFormatIdc: d,
			bitDepthLumaMinus8: _,
			bitDepthChromaMinus8: v,
			minSpatialSegmentationIdc: ee
		};
	} catch (e) {
		return i._error("Error parsing HEVC SPS:", e), null;
	}
}, gn = (e) => {
	try {
		let t = [], n = [], r = [], i = [];
		for (let a of Xt(e)) {
			let o = e.subarray(a.offset, a.offset + a.length), s = mn(o[0]);
			s === Yt.VPS_NUT ? t.push(o) : s === Yt.SPS_NUT ? n.push(o) : s === Yt.PPS_NUT ? r.push(o) : (s === Yt.PREFIX_SEI_NUT || s === Yt.SUFFIX_SEI_NUT) && i.push(o);
		}
		if (n.length === 0 || r.length === 0) return null;
		let a = hn(n[0]);
		if (!a) return null;
		let o = 0;
		if (r.length > 0) {
			let e = r[0], t = new P(en(e));
			t.skipBits(16), l(t), l(t), t.skipBits(1), t.skipBits(1), t.skipBits(3), t.skipBits(1), t.skipBits(1), l(t), l(t), u(t), t.skipBits(1), t.skipBits(1), t.readBits(1) && l(t), u(t), u(t), t.skipBits(1), t.skipBits(1), t.skipBits(1), t.skipBits(1);
			let n = t.readBits(1), i = t.readBits(1);
			o = !n && !i ? 0 : n && !i ? 2 : !n && i ? 3 : 0;
		}
		let s = [
			...t.length ? [{
				arrayCompleteness: 1,
				nalUnitType: Yt.VPS_NUT,
				nalUnits: t
			}] : [],
			...n.length ? [{
				arrayCompleteness: 1,
				nalUnitType: Yt.SPS_NUT,
				nalUnits: n
			}] : [],
			...r.length ? [{
				arrayCompleteness: 1,
				nalUnitType: Yt.PPS_NUT,
				nalUnits: r
			}] : [],
			...i.length ? [{
				arrayCompleteness: 1,
				nalUnitType: mn(i[0][0]),
				nalUnits: i
			}] : []
		];
		return {
			configurationVersion: 1,
			generalProfileSpace: a.generalProfileSpace,
			generalTierFlag: a.generalTierFlag,
			generalProfileIdc: a.generalProfileIdc,
			generalProfileCompatibilityFlags: a.generalProfileCompatibilityFlags,
			generalConstraintIndicatorFlags: a.generalConstraintIndicatorFlags,
			generalLevelIdc: a.generalLevelIdc,
			minSpatialSegmentationIdc: a.minSpatialSegmentationIdc,
			parallelismType: o,
			chromaFormatIdc: a.chromaFormatIdc,
			bitDepthLumaMinus8: a.bitDepthLumaMinus8,
			bitDepthChromaMinus8: a.bitDepthChromaMinus8,
			avgFrameRate: 0,
			constantFrameRate: 0,
			numTemporalLayers: a.spsMaxSubLayersMinus1 + 1,
			temporalIdNested: a.spsTemporalIdNestingFlag,
			lengthSizeMinusOne: 3,
			arrays: s
		};
	} catch (e) {
		return i._error("Error building HEVC Decoder Configuration Record:", e), null;
	}
}, _n = (e, t) => {
	let n = e.readBits(2), r = e.readBits(1), i = e.readBits(5), a = 0;
	for (let t = 0; t < 32; t++) a = a << 1 | e.readBits(1);
	let o = /* @__PURE__ */ new Uint8Array(6);
	for (let t = 0; t < 6; t++) o[t] = e.readBits(8);
	let s = e.readBits(8), c = [], l = [];
	for (let n = 0; n < t; n++) c.push(e.readBits(1)), l.push(e.readBits(1));
	if (t > 0) for (let n = t; n < 8; n++) e.skipBits(2);
	for (let n = 0; n < t; n++) c[n] && e.skipBits(88), l[n] && e.skipBits(8);
	return {
		general_profile_space: n,
		general_tier_flag: r,
		general_profile_idc: i,
		general_profile_compatibility_flags: a,
		general_constraint_indicator_flags: o,
		general_level_idc: s
	};
}, vn = (e) => {
	for (let t = 0; t < 4; t++) for (let n = 0; n < (t === 3 ? 2 : 6); n++) if (!e.readBits(1)) l(e);
	else {
		let n = Math.min(64, 1 << 4 + (t << 1));
		t > 1 && u(e);
		for (let t = 0; t < n; t++) u(e);
	}
}, yn = (e, t) => {
	let n = [];
	for (let r = 0; r < t; r++) n[r] = bn(e, r, t, n);
}, bn = (e, t, n, r) => {
	let i = 0, a = 0, o = 0;
	if (t !== 0 && (a = e.readBits(1)), a) {
		o = t === n ? t - (l(e) + 1) : t - 1, e.readBits(1), l(e);
		let a = r[o] ?? 0;
		for (let t = 0; t <= a; t++) e.readBits(1) || e.readBits(1);
		i = r[o];
	} else {
		let t = l(e), n = l(e);
		for (let n = 0; n < t; n++) l(e), e.readBits(1);
		for (let t = 0; t < n; t++) l(e), e.readBits(1);
		i = t + n;
	}
	return i;
}, xn = (e, t) => {
	let n = 2, r = 2, i = 2, a = 0, o = 0, s = {
		num: 1,
		den: 1
	};
	if (e.readBits(1)) {
		let t = e.readBits(8);
		if (t === 255) s = {
			num: e.readBits(16),
			den: e.readBits(16)
		};
		else {
			let e = ln[t];
			e && (s = e);
		}
	}
	return e.readBits(1) && e.readBits(1), e.readBits(1) && (e.readBits(3), a = e.readBits(1), e.readBits(1) && (n = e.readBits(8), r = e.readBits(8), i = e.readBits(8))), e.readBits(1) && (l(e), l(e)), e.readBits(1), e.readBits(1), e.readBits(1), e.readBits(1) && (l(e), l(e), l(e), l(e)), e.readBits(1) && (e.readBits(32), e.readBits(32), e.readBits(1) && l(e), e.readBits(1) && Sn(e, !0, t)), e.readBits(1) && (e.readBits(1), e.readBits(1), e.readBits(1), o = l(e), l(e), l(e), l(e), l(e)), {
		pixelAspectRatio: s,
		colourPrimaries: n,
		transferCharacteristics: r,
		matrixCoefficients: i,
		fullRangeFlag: a,
		minSpatialSegmentationIdc: o
	};
}, Sn = (e, t, n) => {
	let r = !1, i = !1, a = !1;
	t && (r = e.readBits(1) === 1, i = e.readBits(1) === 1, (r || i) && (a = e.readBits(1) === 1, a && (e.readBits(8), e.readBits(5), e.readBits(1), e.readBits(5)), e.readBits(4), e.readBits(4), a && e.readBits(4), e.readBits(5), e.readBits(5), e.readBits(5)));
	for (let t = 0; t <= n; t++) {
		let t = e.readBits(1) === 1, n = !0;
		t || (n = e.readBits(1) === 1);
		let o = !1;
		n ? l(e) : o = e.readBits(1) === 1;
		let s = 1;
		o || (s = l(e) + 1), r && Cn(e, s, a), i && Cn(e, s, a);
	}
}, Cn = (e, t, n) => {
	for (let r = 0; r < t; r++) l(e), l(e), n && (l(e), l(e)), e.readBits(1);
}, wn = (e) => {
	let t = [];
	t.push(e.configurationVersion), t.push((e.generalProfileSpace & 3) << 6 | (e.generalTierFlag & 1) << 5 | e.generalProfileIdc & 31), t.push(e.generalProfileCompatibilityFlags >>> 24 & 255), t.push(e.generalProfileCompatibilityFlags >>> 16 & 255), t.push(e.generalProfileCompatibilityFlags >>> 8 & 255), t.push(e.generalProfileCompatibilityFlags & 255), t.push(...e.generalConstraintIndicatorFlags), t.push(e.generalLevelIdc & 255), t.push(240 | e.minSpatialSegmentationIdc >> 8 & 15), t.push(e.minSpatialSegmentationIdc & 255), t.push(252 | e.parallelismType & 3), t.push(252 | e.chromaFormatIdc & 3), t.push(248 | e.bitDepthLumaMinus8 & 7), t.push(248 | e.bitDepthChromaMinus8 & 7), t.push(e.avgFrameRate >> 8 & 255), t.push(e.avgFrameRate & 255), t.push((e.constantFrameRate & 3) << 6 | (e.numTemporalLayers & 7) << 3 | (e.temporalIdNested & 1) << 2 | e.lengthSizeMinusOne & 3), t.push(e.arrays.length & 255);
	for (let n of e.arrays) {
		t.push((n.arrayCompleteness & 1) << 7 | 0 | n.nalUnitType & 63), t.push(n.nalUnits.length >> 8 & 255), t.push(n.nalUnits.length & 255);
		for (let e of n.nalUnits) {
			t.push(e.length >> 8 & 255), t.push(e.length & 255);
			for (let n = 0; n < e.length; n++) t.push(e[n]);
		}
	}
	return new Uint8Array(t);
}, Tn;
(function(e) {
	e[e.audAllowed = 0] = "audAllowed", e[e.beforeFirstVcl = 1] = "beforeFirstVcl", e[e.afterFirstVcl = 2] = "afterFirstVcl", e[e.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", e[e.noMoreDataAllowed = 4] = "noMoreDataAllowed";
})(Tn ||= {});
var En = (e, t) => {
	let n = /* @__PURE__ */ new Set(), r = Tn.audAllowed;
	for (let i of pn(e, t)) {
		if (r === Tn.noMoreDataAllowed) {
			n.add(i.offset);
			continue;
		}
		let t = mn(e[i.offset]);
		if (r === Tn.eoBitstreamAllowed && t !== 37) {
			n.add(i.offset);
			continue;
		}
		let a = !1;
		t === 35 ? r > Tn.audAllowed ? a = !0 : r = Tn.beforeFirstVcl : t <= 31 ? r > Tn.afterFirstVcl ? a = !0 : r = Tn.afterFirstVcl : t === 36 ? r === Tn.afterFirstVcl ? r = Tn.eoBitstreamAllowed : a = !0 : t === 37 ? r < Tn.afterFirstVcl ? a = !0 : r = Tn.noMoreDataAllowed : t === 32 || t === 33 || t === 34 || t === 39 || t >= 41 && t <= 44 || t >= 48 && t <= 55 ? r > Tn.beforeFirstVcl ? a = !0 : r = Tn.beforeFirstVcl : (t === 38 || t === 40 || t >= 45 && t <= 47 || t >= 56 && t <= 63) && r < Tn.afterFirstVcl && (a = !0), a && n.add(i.offset);
	}
	if (n.size === 0) return null;
	let i = [];
	for (let r of pn(e, t)) n.has(r.offset) || i.push(e.subarray(r.offset, r.offset + r.length));
	return fn(i, t);
}, Dn = (e) => {
	let t = new P(e);
	if (t.readBits(2) !== 2) return null;
	let n = t.readBits(1), r = (t.readBits(1) << 1) + n;
	if (r === 3 && t.skipBits(1), t.readBits(1) === 1 || t.readBits(1) !== 0 || (t.skipBits(2), t.readBits(24) !== 4817730)) return null;
	let i = 8;
	r >= 2 && (i = t.readBits(1) ? 12 : 10);
	let a = t.readBits(3), o = 0, c = 0;
	if (a !== 7) if (c = t.readBits(1), r === 1 || r === 3) {
		let e = t.readBits(1), n = t.readBits(1);
		o = !e && !n ? 3 : e && !n ? 2 : 1, t.skipBits(1);
	} else o = 1;
	else o = 3, c = 1;
	let l = t.readBits(16), u = t.readBits(16), d = (l + 1) * (u + 1), f = s(dt).level;
	for (let e of dt) if (d <= e.maxPictureSize) {
		f = e.level;
		break;
	}
	return {
		profile: r,
		level: f,
		bitDepth: i,
		chromaSubsampling: o,
		videoFullRangeFlag: c,
		colourPrimaries: a === 2 ? 1 : a === 1 ? 6 : 2,
		transferCharacteristics: a === 2 ? 1 : a === 1 ? 6 : 2,
		matrixCoefficients: a === 7 ? 0 : a === 2 ? 1 : a === 1 ? 6 : 2
	};
}, On = function* (e) {
	let t = new P(e), n = () => {
		let e = 0;
		for (let n = 0; n < 8; n++) {
			let r = t.readAlignedByte();
			if (e |= (r & 127) << n * 7, !(r & 128)) break;
			if (n === 7 && r & 128) return null;
		}
		return e >= 2 ** 32 - 1 ? null : e;
	};
	for (; t.getBitsLeft() >= 8;) {
		t.skipBits(1);
		let r = t.readBits(4), i = t.readBits(1), o = t.readBits(1);
		t.skipBits(1), i && t.skipBits(8);
		let s;
		if (o) {
			let e = n();
			if (e === null) return;
			s = e;
		} else s = Math.floor(t.getBitsLeft() / 8);
		a(t.pos % 8 == 0), yield {
			type: r,
			data: e.subarray(t.pos / 8, t.pos / 8 + s)
		}, t.skipBits(s * 8);
	}
}, kn = (e) => {
	for (let { type: t, data: n } of On(e)) {
		if (t !== 1) continue;
		let e = new P(n), r = e.readBits(3);
		e.readBits(1);
		let i = e.readBits(1), a = 0, o = 0, s = 0;
		if (i) a = e.readBits(5);
		else {
			if (e.readBits(1) && (e.skipBits(32), e.skipBits(32), e.readBits(1))) return null;
			let t = e.readBits(1);
			t && (s = e.readBits(5), e.skipBits(32), e.skipBits(5), e.skipBits(5));
			let n = e.readBits(5);
			for (let r = 0; r <= n; r++) {
				e.skipBits(12);
				let n = e.readBits(5);
				if (r === 0 && (a = n), n > 7) {
					let t = e.readBits(1);
					r === 0 && (o = t);
				}
				if (t && e.readBits(1)) {
					let t = s + 1;
					e.skipBits(t), e.skipBits(t), e.skipBits(1);
				}
				e.readBits(1) && e.skipBits(4);
			}
		}
		let c = e.readBits(4), l = e.readBits(4), u = c + 1;
		e.skipBits(u);
		let d = l + 1;
		e.skipBits(d);
		let f = 0;
		if (f = i ? 0 : e.readBits(1), f && (e.skipBits(4), e.skipBits(3)), e.skipBits(1), e.skipBits(1), e.skipBits(1), !i) {
			e.skipBits(1), e.skipBits(1), e.skipBits(1), e.skipBits(1);
			let t = e.readBits(1);
			t && (e.skipBits(1), e.skipBits(1));
			let n = e.readBits(1), r = 0;
			r = n ? 2 : e.readBits(1), r > 0 && (e.readBits(1) || e.skipBits(1)), t && e.skipBits(3);
		}
		e.skipBits(1), e.skipBits(1), e.skipBits(1);
		let p = e.readBits(1), m = 8;
		r === 2 && p ? m = e.readBits(1) ? 12 : 10 : r <= 2 && (m = p ? 10 : 8);
		let h = 0;
		r !== 1 && (h = e.readBits(1));
		let g = 1, _ = 1, v = 0;
		return h || (r === 0 ? (g = 1, _ = 1) : r === 1 ? (g = 0, _ = 0) : m === 12 && (g = e.readBits(1), g && (_ = e.readBits(1))), g && _ && (v = e.readBits(2))), {
			profile: r,
			level: a,
			tier: o,
			bitDepth: m,
			monochrome: h,
			chromaSubsamplingX: g,
			chromaSubsamplingY: _,
			chromaSamplePosition: v
		};
	}
	return null;
}, An = (e) => {
	let t = p(e), n = t.getUint8(9), r = t.getUint16(10, !0), i = t.getUint32(12, !0), a = t.getInt16(16, !0), o = t.getUint8(18), s = null;
	return o && (s = e.subarray(19, 21 + n)), {
		outputChannelCount: n,
		preSkip: r,
		inputSampleRate: i,
		outputGain: a,
		channelMappingFamily: o,
		channelMappingTable: s
	};
}, jn = [
	480,
	960,
	1920,
	2880,
	480,
	960,
	1920,
	2880,
	480,
	960,
	1920,
	2880,
	480,
	960,
	480,
	960,
	120,
	240,
	480,
	960,
	120,
	240,
	480,
	960,
	120,
	240,
	480,
	960,
	120,
	240,
	480,
	960
], Mn = (e) => ({ durationInSamples: jn[e[0] >> 3] }), Nn = (e) => {
	if (e.length < 7) throw Error("Setup header is too short.");
	if (e[0] !== 5) throw Error("Wrong packet type in Setup header.");
	if (String.fromCharCode(...e.slice(1, 7)) !== "vorbis") throw Error("Invalid packet signature in Setup header.");
	let t = e.length, n = new Uint8Array(t);
	for (let r = 0; r < t; r++) n[r] = e[t - 1 - r];
	let r = new P(n), i = 0;
	for (; r.getBitsLeft() > 97;) if (r.readBits(1) === 1) {
		i = r.pos;
		break;
	}
	if (i === 0) throw Error("Invalid Setup header: framing bit not found.");
	let a = 0, o = !1, s = 0;
	for (; r.getBitsLeft() >= 97;) {
		let e = r.pos, t = r.readBits(8), n = r.readBits(16), i = r.readBits(16);
		if (t > 63 || n !== 0 || i !== 0) {
			r.pos = e;
			break;
		}
		if (r.skipBits(1), a++, a > 64) break;
		r.clone().readBits(6) + 1 === a && (o = !0, s = a);
	}
	if (!o) throw Error("Invalid Setup header: mode header not found.");
	if (s > 63) throw Error(`Unsupported mode count: ${s}.`);
	let c = s;
	r.pos = 0, r.skipBits(i);
	let l = Array(c).fill(0);
	for (let e = c - 1; e >= 0; e--) r.skipBits(40), l[e] = r.readBits(1);
	return { modeBlockflags: l };
}, Pn = (e, t, n) => {
	switch (e) {
		case "avc":
			for (let e of Qt(n, t)) {
				let t = n[e.offset], r = $t(t);
				if (r >= Jt.NON_IDR_SLICE && r <= Jt.SLICE_DPC) return "delta";
				if (r === Jt.IDR) return "key";
				if (r === Jt.SEI && (!ke() || je() >= 144)) {
					let t = en(n.subarray(e.offset, e.offset + e.length)), r = 1;
					do {
						let e = 0;
						for (;;) {
							let n = t[r++];
							if (n === void 0 || (e += n, n < 255)) break;
						}
						let n = 0;
						for (;;) {
							let e = t[r++];
							if (e === void 0 || (n += e, e < 255)) break;
						}
						if (e === 6) {
							let e = new P(t);
							e.pos = 8 * r;
							let n = l(e), i = e.readBits(1);
							if (n === 0 && i === 1) return "key";
						}
						r += n;
					} while (r < t.length - 1);
				}
			}
			return "delta";
		case "hevc":
			for (let e of pn(n, t)) {
				let t = mn(n[e.offset]);
				if (t < Yt.BLA_W_LP) return "delta";
				if (t <= Yt.RSV_IRAP_VCL23) return "key";
			}
			return "delta";
		case "vp8": return n[0] & 1 ? "delta" : "key";
		case "vp9": {
			let e = new P(n);
			if (e.readBits(2) !== 2) return null;
			let t = e.readBits(1);
			return (e.readBits(1) << 1) + t === 3 && e.skipBits(1), e.readBits(1) ? null : e.readBits(1) === 0 ? "key" : "delta";
		}
		case "av1": {
			let e = !1;
			for (let { type: t, data: r } of On(n)) if (t === 1) {
				let t = new P(r);
				t.skipBits(4), e = !!t.readBits(1);
			} else if (t === 3 || t === 6 || t === 7) {
				if (e) return "key";
				let t = new P(r);
				return t.readBits(1) ? null : t.readBits(2) === 0 ? "key" : "delta";
			}
			return null;
		}
		default: A(e), a(!1);
	}
}, Fn;
(function(e) {
	e[e.STREAMINFO = 0] = "STREAMINFO", e[e.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", e[e.PICTURE = 6] = "PICTURE";
})(Fn ||= {});
var In = (e, t) => {
	let n = p(e), r = 0, i = n.getUint32(r, !0);
	r += 4;
	let a = m.decode(e.subarray(r, r + i));
	r += i, i > 0 && (t.raw ??= {}, t.raw.vendor ??= a);
	let o = n.getUint32(r, !0);
	r += 4;
	for (let i = 0; i < o; i++) {
		let i = n.getUint32(r, !0);
		r += 4;
		let a = m.decode(e.subarray(r, r + i));
		r += i;
		let o = a.indexOf("=");
		if (o === -1) continue;
		let s = a.slice(0, o).toUpperCase(), c = a.slice(o + 1);
		switch (t.raw ??= {}, t.raw[s] ??= c, s) {
			case "TITLE":
				t.title ??= c;
				break;
			case "DESCRIPTION":
				t.description ??= c;
				break;
			case "ARTIST":
				t.artist ??= c;
				break;
			case "ALBUM":
				t.album ??= c;
				break;
			case "ALBUMARTIST":
				t.albumArtist ??= c;
				break;
			case "COMMENT":
				t.comment ??= c;
				break;
			case "LYRICS":
				t.lyrics ??= c;
				break;
			case "TRACKNUMBER":
				{
					let e = c.split("/"), n = Number.parseInt(e[0], 10), r = e[1] && Number.parseInt(e[1], 10);
					Number.isInteger(n) && n > 0 && (t.trackNumber ??= n), r && Number.isInteger(r) && r > 0 && (t.tracksTotal ??= r);
				}
				break;
			case "TRACKTOTAL":
				{
					let e = Number.parseInt(c, 10);
					Number.isInteger(e) && e > 0 && (t.tracksTotal ??= e);
				}
				break;
			case "DISCNUMBER":
				{
					let e = c.split("/"), n = Number.parseInt(e[0], 10), r = e[1] && Number.parseInt(e[1], 10);
					Number.isInteger(n) && n > 0 && (t.discNumber ??= n), r && Number.isInteger(r) && r > 0 && (t.discsTotal ??= r);
				}
				break;
			case "DISCTOTAL":
				{
					let e = Number.parseInt(c, 10);
					Number.isInteger(e) && e > 0 && (t.discsTotal ??= e);
				}
				break;
			case "DATE":
				{
					let e = new Date(c);
					Number.isNaN(e.getTime()) || (t.date ??= e);
				}
				break;
			case "GENRE":
				t.genre ??= c;
				break;
			case "METADATA_BLOCK_PICTURE":
				{
					let e = Ie(c), n = p(e), r = n.getUint32(0, !1), i = n.getUint32(4, !1), a = String.fromCharCode(...e.subarray(8, 8 + i)), o = n.getUint32(8 + i, !1), s = m.decode(e.subarray(12 + i, 12 + i + o)), l = n.getUint32(i + o + 28), u = e.subarray(i + o + 32, i + o + 32 + l);
					t.images ??= [], t.images.push({
						data: u,
						mimeType: a,
						kind: r === 3 ? "coverFront" : r === 4 ? "coverBack" : "unknown",
						name: void 0,
						description: s || void 0
					});
				}
				break;
		}
	}
}, Ln = (e, t, n) => {
	let r = [e], i = h.encode("Mediabunny"), a = new Uint8Array(4 + i.length), o = new DataView(a.buffer);
	o.setUint32(0, i.length, !0), a.set(i, 4), r.push(a);
	let s = /* @__PURE__ */ new Set(), c = (e, t) => {
		let n = `${e}=${t}`, i = h.encode(n);
		a = new Uint8Array(4 + i.length), o = new DataView(a.buffer), o.setUint32(0, i.length, !0), a.set(i, 4), r.push(a), s.add(e);
	};
	for (let { key: e, value: r } of Pe(t)) switch (e) {
		case "title":
			c("TITLE", r);
			break;
		case "description":
			c("DESCRIPTION", r);
			break;
		case "artist":
			c("ARTIST", r);
			break;
		case "album":
			c("ALBUM", r);
			break;
		case "albumArtist":
			c("ALBUMARTIST", r);
			break;
		case "genre":
			c("GENRE", r);
			break;
		case "date":
			{
				let e = t.raw?.DATE ?? t.raw?.date;
				e && typeof e == "string" ? c("DATE", e) : c("DATE", r.toISOString().slice(0, 10));
			}
			break;
		case "comment":
			c("COMMENT", r);
			break;
		case "lyrics":
			c("LYRICS", r);
			break;
		case "trackNumber":
			c("TRACKNUMBER", r.toString());
			break;
		case "tracksTotal":
			c("TRACKTOTAL", r.toString());
			break;
		case "discNumber":
			c("DISCNUMBER", r.toString());
			break;
		case "discsTotal":
			c("DISCTOTAL", r.toString());
			break;
		case "images":
			if (!n) break;
			for (let e of r) {
				let t = e.kind === "coverFront" ? 3 : e.kind === "coverBack" ? 4 : 0, n = new Uint8Array(e.mimeType.length);
				for (let t = 0; t < e.mimeType.length; t++) n[t] = e.mimeType.charCodeAt(t);
				let r = h.encode(e.description ?? ""), i = new Uint8Array(8 + n.length + 4 + r.length + 16 + 4 + e.data.length), a = p(i);
				a.setUint32(0, t, !1), a.setUint32(4, n.length, !1), i.set(n, 8), a.setUint32(8 + n.length, r.length, !1), i.set(r, 12 + n.length), a.setUint32(28 + n.length + r.length, e.data.length, !1), i.set(e.data, 32 + n.length + r.length), c("METADATA_BLOCK_PICTURE", Le(i));
			}
			break;
		case "raw": break;
		default: A(e);
	}
	if (t.raw) for (let e in t.raw) {
		let n = t.raw[e] ?? t.raw[e.toLowerCase()];
		e === "vendor" || n == null || s.has(e) || typeof n == "string" && c(e, n);
	}
	let l = /* @__PURE__ */ new Uint8Array(4);
	p(l).setUint32(0, s.size, !0), r.splice(2, 0, l);
	let u = r.reduce((e, t) => e + t.length, 0), d = new Uint8Array(u), f = 0;
	for (let e of r) d.set(e, f), f += e.length;
	return d;
}, Rn = [
	2,
	1,
	2,
	3,
	3,
	4,
	4,
	5
], zn = (e) => {
	if (e.length < 7 || e[0] !== 11 || e[1] !== 119) return null;
	let t = new P(e);
	t.skipBits(16), t.skipBits(16);
	let n = t.readBits(2);
	if (n === 3) return null;
	let r = t.readBits(6), i = t.readBits(5);
	if (i > 8) return null;
	let a = t.readBits(3), o = t.readBits(3);
	return o & 1 && o !== 1 && t.skipBits(2), o & 4 && t.skipBits(2), o === 2 && t.skipBits(2), {
		fscod: n,
		bsid: i,
		bsmod: a,
		acmod: o,
		lfeon: t.readBits(1),
		bitRateCode: Math.floor(r / 2)
	};
}, Bn = [
	128,
	138,
	192,
	128,
	140,
	192,
	160,
	174,
	240,
	160,
	176,
	240,
	192,
	208,
	288,
	192,
	210,
	288,
	224,
	242,
	336,
	224,
	244,
	336,
	256,
	278,
	384,
	256,
	280,
	384,
	320,
	348,
	480,
	320,
	350,
	480,
	384,
	416,
	288 * 2,
	384,
	418,
	288 * 2,
	448,
	486,
	336 * 2,
	448,
	488,
	336 * 2,
	256 * 2,
	278 * 2,
	384 * 2,
	256 * 2,
	279 * 2,
	384 * 2,
	320 * 2,
	348 * 2,
	480 * 2,
	320 * 2,
	349 * 2,
	480 * 2,
	384 * 2,
	417 * 2,
	576 * 2,
	384 * 2,
	418 * 2,
	576 * 2,
	448 * 2,
	487 * 2,
	672 * 2,
	448 * 2,
	488 * 2,
	672 * 2,
	512 * 2,
	557 * 2,
	768 * 2,
	512 * 2,
	558 * 2,
	768 * 2,
	640 * 2,
	696 * 2,
	960 * 2,
	640 * 2,
	697 * 2,
	960 * 2,
	768 * 2,
	835 * 2,
	1152 * 2,
	768 * 2,
	836 * 2,
	1152 * 2,
	896 * 2,
	975 * 2,
	1344 * 2,
	896 * 2,
	976 * 2,
	1344 * 2,
	1024 * 2,
	1114 * 2,
	1536 * 2,
	1024 * 2,
	1115 * 2,
	1536 * 2,
	1152 * 2,
	1253 * 2,
	1728 * 2,
	1152 * 2,
	1254 * 2,
	1728 * 2,
	1280 * 2,
	1393 * 2,
	1920 * 2,
	1280 * 2,
	1394 * 2,
	1920 * 2
], Vn = 1536;
new Uint8Array([
	5,
	4,
	65,
	67,
	45,
	51
]), new Uint8Array([
	5,
	4,
	69,
	65,
	67,
	51
]);
var Hn = [
	1,
	2,
	3,
	6
], Un = (e) => {
	if (e.length < 6 || e[0] !== 11 || e[1] !== 119) return null;
	let t = new P(e);
	t.skipBits(16);
	let n = t.readBits(2);
	if (t.skipBits(3), n !== 0 && n !== 2) return null;
	let r = t.readBits(11), i = t.readBits(2), a = 0, o;
	i === 3 ? (a = t.readBits(2), o = 3) : o = t.readBits(2);
	let s = t.readBits(3), c = t.readBits(1), l = t.readBits(5);
	if (l < 11 || l > 16) return null;
	let u = Hn[o], d;
	return d = i < 3 ? Kt[i] / 1e3 : qt[a] / 1e3, {
		dataRate: Math.round((r + 1) * d / (u * 16)),
		substreams: [{
			fscod: i,
			fscod2: a,
			bsid: l,
			bsmod: 0,
			acmod: s,
			lfeon: c,
			numDepSub: 0,
			chanLoc: 0
		}]
	};
}, Wn = (e) => {
	if (e.length < 2) return null;
	let t = new P(e), n = t.readBits(13), r = t.readBits(3), i = [];
	for (let n = 0; n <= r && !(Math.ceil(t.pos / 8) + 3 > e.length); n++) {
		let e = t.readBits(2), n = t.readBits(5);
		t.skipBits(1), t.skipBits(1);
		let r = t.readBits(3), a = t.readBits(3), o = t.readBits(1);
		t.skipBits(3);
		let s = t.readBits(4), c = 0;
		s > 0 ? c = t.readBits(9) : t.skipBits(1), i.push({
			fscod: e,
			fscod2: null,
			bsid: n,
			bsmod: r,
			acmod: a,
			lfeon: o,
			numDepSub: s,
			chanLoc: c
		});
	}
	return i.length === 0 ? null : {
		dataRate: n,
		substreams: i
	};
}, Gn = (e) => {
	let t = e.substreams[0];
	return a(t), t.fscod < 3 ? Kt[t.fscod] : t.fscod2 !== null && t.fscod2 < 3 ? qt[t.fscod2] : null;
}, Kn = (e) => {
	let t = e.substreams[0];
	a(t);
	let n = Rn[t.acmod] + t.lfeon;
	if (t.numDepSub > 0) {
		let e = [
			2,
			2,
			1,
			1,
			2,
			2,
			2,
			1,
			1
		];
		for (let r = 0; r < 9; r++) t.chanLoc & 1 << 8 - r && (n += e[r]);
	}
	return n;
}, qn = class {
	constructor(e) {
		this.input = e;
	}
	dispose() {}
}, Jn = /* #__PURE__ */ new Uint8Array(), z = class e {
	constructor(e, t, n, r, i = -1, a, o) {
		if (this.data = e, this.type = t, this.timestamp = n, this.duration = r, this.sequenceNumber = i, e === Jn && a === void 0) throw Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
		if (a === void 0 && (a = e.byteLength), !(e instanceof Uint8Array)) throw TypeError("data must be a Uint8Array.");
		if (t !== "key" && t !== "delta") throw TypeError("type must be either \"key\" or \"delta\".");
		if (!Number.isFinite(n)) throw TypeError("timestamp must be a number.");
		if (!Number.isFinite(r) || r < 0) throw TypeError("duration must be a non-negative number.");
		if (!Number.isFinite(i)) throw TypeError("sequenceNumber must be a number.");
		if (!Number.isInteger(a) || a < 0) throw TypeError("byteLength must be a non-negative integer.");
		if (o !== void 0 && (typeof o != "object" || !o)) throw TypeError("sideData, when provided, must be an object.");
		if (o?.alpha !== void 0 && !(o.alpha instanceof Uint8Array)) throw TypeError("sideData.alpha, when provided, must be a Uint8Array.");
		if (o?.alphaByteLength !== void 0 && (!Number.isInteger(o.alphaByteLength) || o.alphaByteLength < 0)) throw TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
		this.byteLength = a, this.sideData = o ?? {}, this.sideData.alpha && this.sideData.alphaByteLength === void 0 && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength);
	}
	get isMetadataOnly() {
		return this.data === Jn;
	}
	get microsecondTimestamp() {
		return Math.trunc(xe * this.timestamp);
	}
	get microsecondDuration() {
		return Math.trunc(xe * this.duration);
	}
	toEncodedVideoChunk() {
		if (this.isMetadataOnly) throw TypeError("Metadata-only packets cannot be converted to a video chunk.");
		if (typeof EncodedVideoChunk > "u") throw Error("Your browser does not support EncodedVideoChunk.");
		return new EncodedVideoChunk({
			data: this.data,
			type: this.type,
			timestamp: this.microsecondTimestamp,
			duration: this.microsecondDuration
		});
	}
	alphaToEncodedVideoChunk(e = this.type) {
		if (!this.sideData.alpha) throw TypeError("This packet does not contain alpha side data.");
		if (this.isMetadataOnly) throw TypeError("Metadata-only packets cannot be converted to a video chunk.");
		if (typeof EncodedVideoChunk > "u") throw Error("Your browser does not support EncodedVideoChunk.");
		return new EncodedVideoChunk({
			data: this.sideData.alpha,
			type: e,
			timestamp: this.microsecondTimestamp,
			duration: this.microsecondDuration
		});
	}
	toEncodedAudioChunk() {
		if (this.isMetadataOnly) throw TypeError("Metadata-only packets cannot be converted to an audio chunk.");
		if (typeof EncodedAudioChunk > "u") throw Error("Your browser does not support EncodedAudioChunk.");
		return new EncodedAudioChunk({
			data: this.data,
			type: this.type,
			timestamp: this.microsecondTimestamp,
			duration: this.microsecondDuration
		});
	}
	static fromEncodedChunk(t, n) {
		if (!(t instanceof EncodedVideoChunk || t instanceof EncodedAudioChunk)) throw TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
		let r = new Uint8Array(t.byteLength);
		return t.copyTo(r), new e(r, t.type, t.timestamp / 1e6, (t.duration ?? 0) / 1e6, void 0, void 0, n);
	}
	clone(t) {
		if (t !== void 0 && (typeof t != "object" || !t)) throw TypeError("options, when provided, must be an object.");
		if (t?.data !== void 0 && !(t.data instanceof Uint8Array)) throw TypeError("options.data, when provided, must be a Uint8Array.");
		if (t?.type !== void 0 && t.type !== "key" && t.type !== "delta") throw TypeError("options.type, when provided, must be either \"key\" or \"delta\".");
		if (t?.timestamp !== void 0 && !Number.isFinite(t.timestamp)) throw TypeError("options.timestamp, when provided, must be a number.");
		if (t?.duration !== void 0 && !Number.isFinite(t.duration)) throw TypeError("options.duration, when provided, must be a number.");
		if (t?.sequenceNumber !== void 0 && !Number.isFinite(t.sequenceNumber)) throw TypeError("options.sequenceNumber, when provided, must be a number.");
		if (t?.sideData !== void 0 && (typeof t.sideData != "object" || t.sideData === null)) throw TypeError("options.sideData, when provided, must be an object.");
		return new e(t?.data ?? this.data, t?.type ?? this.type, t?.timestamp ?? this.timestamp, t?.duration ?? this.duration, t?.sequenceNumber ?? this.sequenceNumber, this.byteLength, t?.sideData ?? this.sideData);
	}
}, Yn = (e) => {
	let t = (e.hasVideo ? "video/" : e.hasAudio ? "audio/" : "application/") + (e.isQuickTime ? "quicktime" : "mp4");
	if (e.codecStrings.length > 0) {
		let n = [...new Set(e.codecStrings)];
		t += `; codecs="${n.join(", ")}"`;
	}
	return t;
}, Xn = (e) => {
	let t = p(e), n = 0, r = t.getUint8(n);
	n += 1, n += 3;
	let i = te(e.subarray(n, n + 16));
	n += 16;
	let a = null;
	if (r > 0) {
		let r = t.getUint32(n);
		if (n += 4, r > 0) {
			a = [];
			for (let t = 0; t < r; t++) a.push(te(e.subarray(n, n + 16))), n += 16;
		}
	}
	let o = t.getUint32(n);
	return n += 4, {
		systemId: i,
		keyIds: a,
		data: e.slice(n, n + o)
	};
}, Zn = (e, t) => e.systemId === t.systemId && Re(e.data, t.data), Qn = (e) => {
	let t = G(e), n = K(e, 4), r = 8;
	t === 1 && (t = ec(e), r = 16);
	let i = t - r;
	return i < 0 ? null : {
		name: n,
		totalSize: t,
		headerSize: r,
		contentSize: i
	};
}, $n = (e) => Zs(e) / 65536, er = (e) => Zs(e) / 1073741824, tr = (e) => {
	let t = 0;
	for (let n = 0; n < 4; n++) {
		t <<= 7;
		let n = W(e);
		if (t |= n & 127, !(n & 128)) break;
	}
	return t;
}, nr = (e) => {
	let t = Ks(e);
	return e.skip(2), t = Math.min(t, e.remainingLength), m.decode(U(e, t));
}, rr = (e) => {
	let t = Qn(e);
	if (!t || t.name !== "data" || e.remainingLength < 8) return null;
	let n = G(e);
	e.skip(4);
	let r = U(e, t.contentSize - 8);
	switch (n) {
		case 1: return m.decode(r);
		case 2: return new TextDecoder("utf-16be").decode(r);
		case 13: return new Ze(r, "image/jpeg");
		case 14: return new Ze(r, "image/png");
		case 27: return new Ze(r, "image/bmp");
		default: return r;
	}
}, ir = /* @__PURE__ */ new Uint32Array(256), ar = /* @__PURE__ */ new Uint32Array(256), or = /* @__PURE__ */ new Uint32Array(256), sr = /* @__PURE__ */ new Uint32Array(256), cr = /* @__PURE__ */ new Uint32Array(256), lr = /* @__PURE__ */ new Uint32Array(256), ur = /* @__PURE__ */ new Uint32Array(10), dr = !1, fr = () => {
	let e = /* @__PURE__ */ new Uint8Array(256), t = /* @__PURE__ */ new Uint8Array(256), n = /* @__PURE__ */ new Uint8Array(256);
	for (let e = 0, r = 1; e < 256; e++) n[e] = r, t[r] = e, r = r ^ r << 1 ^ (r & 128 ? 283 : 0);
	let r = (e, r) => e && r ? n[(t[e] + t[r]) % 255] : 0;
	e[0] = 99;
	for (let r = 1; r < 256; r++) {
		let i = n[255 - t[r]], a = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
		a = a >>> 8 ^ a & 255 ^ 99, e[r] = a;
	}
	for (let t = 0; t < 256; t++) {
		let n = e[t], i = e.indexOf(t);
		ir[t] = n << 24 | n << 16 | n << 8 | n, lr[t] = i << 24 | i << 16 | i << 8 | i;
		let a = r(i, 14), o = r(i, 9), s = r(i, 13), c = r(i, 11), l = a << 24 | o << 16 | s << 8 | c;
		ar[t] = l, or[t] = l >>> 8 | l << 24, sr[t] = l >>> 16 | l << 16, cr[t] = l >>> 24 | l << 8;
	}
	let i = 1;
	for (let e = 0; e < 10; e++) ur[e] = i << 24, i = i << 1 ^ (i & 128 ? 283 : 0);
	dr = !0;
}, pr = class {
	constructor() {
		this.roundkey = /* @__PURE__ */ new Uint32Array(44), this.iv = new Uint32Array(16 / Uint32Array.BYTES_PER_ELEMENT), this.in = /* @__PURE__ */ new Uint8Array(16), this.out = /* @__PURE__ */ new Uint8Array(16), this.inView = new DataView(this.in.buffer), this.outView = new DataView(this.out.buffer);
	}
	init({ key: e, iv: t }) {
		a(e.byteLength === 16), a(t.byteLength === 16), dr || fr();
		let n = new DataView(e.buffer, e.byteOffset, e.byteLength), r = new DataView(t.buffer, t.byteOffset, t.byteLength);
		this.roundkey[0] = n.getUint32(0, !1), this.roundkey[1] = n.getUint32(4, !1), this.roundkey[2] = n.getUint32(8, !1), this.roundkey[3] = n.getUint32(12, !1), this.iv[0] = r.getUint32(0, !1), this.iv[1] = r.getUint32(4, !1), this.iv[2] = r.getUint32(8, !1), this.iv[3] = r.getUint32(12, !1);
		for (let e = 4; e < 44; e += 4) {
			let t = this.roundkey[e - 1];
			this.roundkey[e] = this.roundkey[e - 4] ^ ir[t >>> 16 & 255] & 4278190080 ^ ir[t >>> 8 & 255] & 16711680 ^ ir[t >>> 0 & 255] & 65280 ^ ir[t >>> 24 & 255] & 255 ^ ur[e / 4 - 1], this.roundkey[e + 1] = this.roundkey[e - 3] ^ this.roundkey[e], this.roundkey[e + 2] = this.roundkey[e - 2] ^ this.roundkey[e + 1], this.roundkey[e + 3] = this.roundkey[e - 1] ^ this.roundkey[e + 2];
		}
		for (let e = 0, t = 40; e < t; e += 4, t -= 4) for (let n = 0; n < 4; n++) {
			let r = this.roundkey[e + n];
			this.roundkey[e + n] = this.roundkey[t + n], this.roundkey[t + n] = r;
		}
		for (let e = 4; e < 40; e += 4) for (let t = 0; t < 4; t++) {
			let n = this.roundkey[e + t];
			this.roundkey[e + t] = ar[ir[n >>> 24 & 255] & 255] ^ or[ir[n >>> 16 & 255] & 255] ^ sr[ir[n >>> 8 & 255] & 255] ^ cr[ir[n >>> 0 & 255] & 255];
		}
	}
	decrypt() {
		let e = this.inView.getUint32(0, !1) ^ this.roundkey[0], t = this.inView.getUint32(4, !1) ^ this.roundkey[1], n = this.inView.getUint32(8, !1) ^ this.roundkey[2], r = this.inView.getUint32(12, !1) ^ this.roundkey[3], i = this.inView.getUint32(0, !1), a = this.inView.getUint32(4, !1), o = this.inView.getUint32(8, !1), s = this.inView.getUint32(12, !1), c, l, u, d;
		for (let i = 1; i < 10; i++) {
			let a = i * 4;
			c = ar[e >>> 24] ^ or[r >>> 16 & 255] ^ sr[n >>> 8 & 255] ^ cr[t & 255] ^ this.roundkey[a], l = ar[t >>> 24] ^ or[e >>> 16 & 255] ^ sr[r >>> 8 & 255] ^ cr[n & 255] ^ this.roundkey[a + 1], u = ar[n >>> 24] ^ or[t >>> 16 & 255] ^ sr[e >>> 8 & 255] ^ cr[r & 255] ^ this.roundkey[a + 2], d = ar[r >>> 24] ^ or[n >>> 16 & 255] ^ sr[t >>> 8 & 255] ^ cr[e & 255] ^ this.roundkey[a + 3], e = c, t = l, n = u, r = d;
		}
		let f = lr[e >>> 24 & 255] & 4278190080 ^ lr[r >>> 16 & 255] & 16711680 ^ lr[n >>> 8 & 255] & 65280 ^ lr[t >>> 0 & 255] & 255 ^ this.roundkey[40], p = lr[t >>> 24 & 255] & 4278190080 ^ lr[e >>> 16 & 255] & 16711680 ^ lr[r >>> 8 & 255] & 65280 ^ lr[n >>> 0 & 255] & 255 ^ this.roundkey[41], m = lr[n >>> 24 & 255] & 4278190080 ^ lr[t >>> 16 & 255] & 16711680 ^ lr[e >>> 8 & 255] & 65280 ^ lr[r >>> 0 & 255] & 255 ^ this.roundkey[42], h = lr[r >>> 24 & 255] & 4278190080 ^ lr[n >>> 16 & 255] & 16711680 ^ lr[t >>> 8 & 255] & 65280 ^ lr[e >>> 0 & 255] & 255 ^ this.roundkey[43];
		this.outView.setUint32(0, f ^ this.iv[0], !1), this.outView.setUint32(4, p ^ this.iv[1], !1), this.outView.setUint32(8, m ^ this.iv[2], !1), this.outView.setUint32(12, h ^ this.iv[3], !1), this.iv[0] = i, this.iv[1] = a, this.iv[2] = o, this.iv[3] = s;
	}
}, mr = (e, t, n) => {
	let r = !1, i = 0, a = 2 ** 16, o = new pr();
	return new ReadableStream({
		pull: async (s) => {
			r ||= (o.init(await t()), !0);
			let c = a + 16, l = e.requestSliceRange(i, 0, c);
			if (l instanceof Promise && (l = await l), !l || l.length === 0) throw Error("Invalid ciphertext.");
			let u = l.length;
			if (u % 16 != 0) throw Error("Invalid ciphertext.");
			let d = u === c ? u - 16 : u, f = U(l, d), p = new Uint8Array(d);
			for (let e = 0; e < d; e += 16) o.in.set(f.subarray(e, e + 16)), o.decrypt(), p.set(o.out, e);
			if (d < u) s.enqueue(p), i += d;
			else {
				let e = p[d - 1];
				if (e === 0 || e > 16) throw Error("Invalid PKCS#7 padding. Incorrect key or corrupted data.");
				let t = p.subarray(0, d - e);
				s.enqueue(t), s.close(), n();
			}
		},
		cancel: () => {
			n();
		}
	});
}, hr = class e extends qn {
	constructor(e) {
		super(e), this.moovSlice = null, this.currentTrack = null, this.tracks = [], this.metadataPromise = null, this.movieTimescale = -1, this.movieDurationInTimescale = -1, this.isQuickTime = !1, this.metadataTags = {}, this.currentMetadataKeys = null, this.isFragmented = !1, this.fragmentTrackDefaults = [], this.psshBoxes = [], this.currentFragment = null, this.lastReadFragment = null, this.decryptionKeyCache = /* @__PURE__ */ new Map(), this.reader = e._reader;
	}
	async getTrackBackings() {
		return await this.readMetadata(), this.tracks.map((e) => e.trackBacking);
	}
	async getMimeType() {
		await this.readMetadata();
		let e = await this.getTrackBackings(), t = await Promise.all(e.map((e) => e.getDecoderConfig().then((e) => e?.codec ?? null)));
		return Yn({
			isQuickTime: this.isQuickTime,
			hasVideo: this.tracks.some((e) => e.info?.type === "video"),
			hasAudio: this.tracks.some((e) => e.info?.type === "audio"),
			codecStrings: t.filter(Boolean)
		});
	}
	async getMetadataTags() {
		return await this.readMetadata(), this.metadataTags;
	}
	readMetadata() {
		return this.metadataPromise ??= (async () => {
			let t = 0, n = !1;
			for (;;) {
				let r = this.reader.requestSliceRange(t, 8, 16);
				if (r instanceof Promise && (r = await r), !r) break;
				let i = t, o = Qn(r);
				if (!o) break;
				if (o.name === "ftyp" || o.name === "styp") {
					let e = K(r, 4);
					this.isQuickTime = e === "qt  ";
				} else if (o.name === "moov") {
					let e = this.reader.requestSlice(r.filePos, o.contentSize);
					if (e instanceof Promise && (e = await e), !e) break;
					this.moovSlice = e, this.readContiguousBoxes(this.moovSlice);
					for (let e of this.tracks) {
						let t = e.editListPreviousSegmentDurations / this.movieTimescale;
						e.editListOffset -= Math.round(t * e.timescale);
					}
					n = this.isFragmented && this.reader.fileSize !== null && this.reader.fileSize > i + o.totalSize;
					break;
				} else if (o.name === "moof") {
					if (!this.input._initInput) throw Error("\"moof\" box encountered with no \"moov\" box present; this file is likely a Segment as described in ISO/IEC 14496-12 Section 8.16. A separate init file that contains a \"moov\" box is required to read this file, please provide it using InputOptions.initInput.");
					let t = await this.input._initInput._getDemuxer();
					if (t.constructor !== e) throw Error("Init input must match the input's format.");
					await t.readMetadata(), this.movieTimescale = t.movieTimescale, this.movieDurationInTimescale = t.movieDurationInTimescale, this.metadataTags = t.metadataTags, this.isFragmented = !0, this.fragmentTrackDefaults = t.fragmentTrackDefaults, this.psshBoxes = t.psshBoxes;
					for (let e of t.tracks) {
						let t = {
							id: e.id,
							demuxer: this,
							trackBacking: null,
							disposition: e.disposition,
							timescale: e.timescale,
							durationInMediaTimescale: e.durationInMediaTimescale,
							durationInMovieTimescale: e.durationInMovieTimescale,
							rotation: e.rotation,
							internalCodecId: e.internalCodecId,
							name: e.name,
							languageCode: e.languageCode,
							sampleTableByteOffset: null,
							sampleTable: null,
							fragmentLookupTable: [],
							currentFragmentState: null,
							fragmentPositionCache: [],
							editListPreviousSegmentDurations: e.editListPreviousSegmentDurations,
							editListOffset: e.editListOffset,
							encryptionInfo: e.encryptionInfo,
							encryptionAuxInfo: null,
							frmaCodecString: null,
							info: e.info
						};
						e.trackBacking && (a(t.info), t.info.type === "video" && t.info.width !== -1 ? (t.trackBacking = new _r(t), this.tracks.push(t)) : t.info.type === "audio" && t.info.numberOfChannels !== -1 && (t.trackBacking = new vr(t), this.tracks.push(t)));
					}
					n = !1;
					break;
				}
				t = i + o.totalSize;
			}
			if (n) {
				a(this.reader.fileSize !== null);
				let e = this.reader.requestSlice(this.reader.fileSize - 4, 4);
				e instanceof Promise && (e = await e), a(e);
				let t = G(e), n = this.reader.fileSize - t;
				if (n >= 0 && n <= this.reader.fileSize - 16) {
					let e = this.reader.requestSliceRange(n, 8, 16);
					if (e instanceof Promise && (e = await e), e) {
						let t = Qn(e);
						if (t && t.name === "mfra") {
							let n = this.reader.requestSlice(e.filePos, t.contentSize);
							n instanceof Promise && (n = await n), n && this.readContiguousBoxes(n);
						}
					}
				}
			}
		})();
	}
	getSampleTableForTrack(e) {
		if (e.sampleTable) return e.sampleTable;
		let t = {
			sampleTimingEntries: [],
			sampleCompositionTimeOffsets: [],
			sampleSizes: [],
			keySampleIndices: null,
			chunkOffsets: [],
			sampleToChunk: [],
			presentationTimestamps: null,
			presentationTimestampIndexMap: null
		};
		if (e.sampleTable = t, e.sampleTableByteOffset === null) return t;
		a(this.moovSlice);
		let n = this.moovSlice.slice(e.sampleTableByteOffset);
		if (this.currentTrack = e, this.traverseBox(n), this.currentTrack = null, e.info?.type === "audio" && e.info.codec && I.includes(e.info.codec) && t.sampleCompositionTimeOffsets.length === 0) {
			a(e.info?.type === "audio");
			let n = Ct(e.info.codec), r = [], i = [];
			for (let a = 0; a < t.sampleToChunk.length; a++) {
				let o = t.sampleToChunk[a], c = t.sampleToChunk[a + 1], l = (c ? c.startChunkIndex : t.chunkOffsets.length) - o.startChunkIndex;
				for (let a = 0; a < l; a++) {
					let c = o.startSampleIndex + a * o.samplesPerChunk, l = c + o.samplesPerChunk, u = D(t.sampleTimingEntries, c, (e) => e.startIndex), d = t.sampleTimingEntries[u], f = D(t.sampleTimingEntries, l, (e) => e.startIndex), p = t.sampleTimingEntries[f], m = d.startDecodeTimestamp + (c - d.startIndex) * d.delta, h = p.startDecodeTimestamp + (l - p.startIndex) * p.delta - m, g = s(r);
					g && g.delta === h ? g.count++ : r.push({
						startIndex: o.startChunkIndex + a,
						startDecodeTimestamp: m,
						count: 1,
						delta: h
					});
					let _ = o.samplesPerChunk * n.sampleSize * e.info.numberOfChannels;
					i.push(_);
				}
				o.startSampleIndex = o.startChunkIndex, o.samplesPerChunk = 1;
			}
			t.sampleTimingEntries = r, t.sampleSizes = i;
		}
		if (t.sampleCompositionTimeOffsets.length > 0) {
			t.presentationTimestamps = [];
			for (let e of t.sampleTimingEntries) for (let n = 0; n < e.count; n++) t.presentationTimestamps.push({
				presentationTimestamp: e.startDecodeTimestamp + n * e.delta,
				sampleIndex: e.startIndex + n
			});
			for (let e of t.sampleCompositionTimeOffsets) for (let n = 0; n < e.count; n++) {
				let r = e.startIndex + n, i = t.presentationTimestamps[r];
				i && (i.presentationTimestamp += e.offset);
			}
			t.presentationTimestamps.sort((e, t) => e.presentationTimestamp - t.presentationTimestamp), t.presentationTimestampIndexMap = Array(t.presentationTimestamps.length).fill(-1);
			for (let e = 0; e < t.presentationTimestamps.length; e++) t.presentationTimestampIndexMap[t.presentationTimestamps[e].sampleIndex] = e;
		}
		return t;
	}
	async readFragment(e) {
		if (this.lastReadFragment?.moofOffset === e) return this.lastReadFragment;
		let t = this.reader.requestSliceRange(e, 8, 16);
		t instanceof Promise && (t = await t), a(t);
		let n = Qn(t);
		a(n?.name === "moof");
		let r = this.reader.requestSlice(e, n.totalSize);
		r instanceof Promise && (r = await r), a(r), this.traverseBox(r);
		let i = this.lastReadFragment;
		a(i && i.moofOffset === e);
		for (let [, e] of i.trackData) {
			let t = e.track, { fragmentPositionCache: n } = t;
			if (!e.startTimestampIsFinal) {
				let r = t.fragmentLookupTable.find((e) => e.moofOffset === i.moofOffset);
				if (r) Cr(e, r.timestamp);
				else {
					let t = D(n, i.moofOffset - 1, (e) => e.moofOffset);
					if (t !== -1) {
						let r = n[t];
						Cr(e, r.endTimestamp);
					}
				}
				e.startTimestampIsFinal = !0;
			}
			let r = D(n, e.startTimestamp, (e) => e.startTimestamp);
			if ((r === -1 || n[r].moofOffset !== i.moofOffset) && n.splice(r + 1, 0, {
				moofOffset: i.moofOffset,
				startTimestamp: e.startTimestamp,
				endTimestamp: e.endTimestamp
			}), e.encryptionAuxInfo && t.encryptionInfo) {
				let n = await Dr(this.reader, t.encryptionInfo, e.encryptionAuxInfo);
				for (let t = 0; t < Math.min(e.samples.length, n.length); t++) {
					let r = n[t];
					e.samples[t].encryption = r;
				}
			}
		}
		return i;
	}
	readContiguousBoxes(e) {
		let t = e.filePos;
		for (; e.filePos - t <= e.length - 8 && this.traverseBox(e););
	}
	*iterateContiguousBoxes(e) {
		let t = e.filePos;
		for (; e.filePos - t <= e.length - 8;) {
			let t = e.filePos, n = Qn(e);
			if (!n) break;
			yield {
				boxInfo: n,
				slice: e
			}, e.filePos = t + n.totalSize;
		}
	}
	traverseBox(e) {
		let t = e.filePos, n = Qn(e);
		if (!n) return !1;
		let r = e.filePos, c = t + n.totalSize;
		switch (n.name) {
			case "mdia":
			case "minf":
			case "dinf":
			case "mfra":
			case "edts":
			case "sinf":
			case "schi":
				this.readContiguousBoxes(e.slice(r, n.contentSize));
				break;
			case "mvhd":
				{
					let t = W(e);
					e.skip(3), t === 1 ? (e.skip(16), this.movieTimescale = G(e), this.movieDurationInTimescale = ec(e)) : (e.skip(8), this.movieTimescale = G(e), this.movieDurationInTimescale = G(e));
				}
				break;
			case "trak":
				{
					let t = {
						id: -1,
						demuxer: this,
						trackBacking: null,
						disposition: {
							...tt,
							primary: !1
						},
						info: null,
						timescale: -1,
						durationInMovieTimescale: -1,
						durationInMediaTimescale: -1,
						rotation: 0,
						internalCodecId: null,
						name: null,
						languageCode: "und",
						sampleTableByteOffset: -1,
						sampleTable: null,
						fragmentLookupTable: [],
						currentFragmentState: null,
						fragmentPositionCache: [],
						editListPreviousSegmentDurations: 0,
						editListOffset: 0,
						encryptionInfo: null,
						encryptionAuxInfo: null,
						frmaCodecString: null
					};
					this.currentTrack = t, this.readContiguousBoxes(e.slice(r, n.contentSize)), t.id !== -1 && t.timescale !== -1 && t.info !== null && (t.info.type === "video" && t.info.width !== -1 ? (t.trackBacking = new _r(t), this.tracks.push(t)) : t.info.type === "audio" && t.info.numberOfChannels !== -1 && (t.trackBacking = new vr(t), this.tracks.push(t))), this.currentTrack = null;
				}
				break;
			case "tkhd":
				{
					let t = this.currentTrack;
					if (!t) break;
					let n = W(e), r = !!(qs(e) & 1);
					if (t.disposition.default = r, n === 0) e.skip(8), t.id = G(e), e.skip(4), t.durationInMovieTimescale = G(e);
					else if (n === 1) e.skip(16), t.id = G(e), e.skip(4), t.durationInMovieTimescale = ec(e);
					else throw Error(`Incorrect track header version ${n}.`);
					e.skip(16);
					let i = o(me(wr([
						$n(e),
						$n(e),
						er(e),
						$n(e),
						$n(e),
						er(e),
						$n(e),
						$n(e),
						er(e)
					]), 90));
					a(i === 0 || i === 90 || i === 180 || i === 270), t.rotation = i;
				}
				break;
			case "elst":
				{
					let t = this.currentTrack;
					if (!t) break;
					let n = W(e);
					e.skip(3);
					let r = !1, a = 0, o = G(e);
					for (let s = 0; s < o; s++) {
						let o = n === 1 ? ec(e) : G(e), s = n === 1 ? tc(e) : Zs(e), c = $n(e);
						if (o !== 0) {
							if (r) {
								i._warn("Unsupported edit list: multiple edits are not currently supported. Only using first edit.");
								break;
							}
							if (s === -1) {
								a += o;
								continue;
							}
							if (c !== 1) {
								i._warn("Unsupported edit list entry: media rate must be 1.");
								break;
							}
							t.editListPreviousSegmentDurations = a, t.editListOffset = s, r = !0;
						}
					}
				}
				break;
			case "mdhd":
				{
					let t = this.currentTrack;
					if (!t) break;
					let n = W(e);
					e.skip(3), n === 0 ? (e.skip(8), t.timescale = G(e), t.durationInMediaTimescale = G(e)) : n === 1 && (e.skip(16), t.timescale = G(e), t.durationInMediaTimescale = ec(e));
					let r = Ks(e);
					if (r > 0) {
						t.languageCode = "";
						for (let e = 0; e < 3; e++) t.languageCode = String.fromCharCode(96 + (r & 31)) + t.languageCode, r >>= 5;
						be(t.languageCode) || (t.languageCode = "und");
					}
				}
				break;
			case "hdlr":
				{
					let t = this.currentTrack;
					if (!t) break;
					e.skip(8);
					let n = K(e, 4);
					n === "vide" ? t.info = {
						type: "video",
						width: -1,
						height: -1,
						squarePixelWidth: -1,
						squarePixelHeight: -1,
						codec: null,
						codecDescription: null,
						colorSpace: null,
						avcType: null,
						avcCodecInfo: null,
						hevcCodecInfo: null,
						vp9CodecInfo: null,
						av1CodecInfo: null
					} : n === "soun" && (t.info = {
						type: "audio",
						numberOfChannels: -1,
						sampleRate: -1,
						codec: null,
						codecDescription: null,
						aacCodecInfo: null,
						pcmLittleEndian: !1,
						pcmSampleSize: null
					});
				}
				break;
			case "stbl":
				{
					let i = this.currentTrack;
					if (!i) break;
					i.sampleTableByteOffset = t, this.readContiguousBoxes(e.slice(r, n.contentSize));
				}
				break;
			case "stsd":
				{
					let t = this.currentTrack;
					if (!t || t.info === null || t.sampleTable) break;
					let n = W(e);
					e.skip(3);
					let r = G(e);
					for (let a = 0; a < r; a++) {
						let r = e.filePos, a = Qn(e);
						if (!a) break;
						t.internalCodecId = a.name;
						let o = a.name.toLowerCase();
						if (t.info.type === "video") {
							e.skip(24), t.info.width = Ks(e), t.info.height = Ks(e), t.info.squarePixelWidth = t.info.width, t.info.squarePixelHeight = t.info.height, e.skip(50), t.frmaCodecString = null, this.readContiguousBoxes(e.slice(e.filePos, r + a.totalSize - e.filePos));
							let n = o === "encv" ? t.frmaCodecString : o;
							t.frmaCodecString = null, n === "avc1" || n === "avc3" ? (t.info.codec = "avc", t.info.avcType = n === "avc1" ? 1 : 3) : n === "hvc1" || n === "hev1" ? t.info.codec = "hevc" : n === "vp08" ? t.info.codec = "vp8" : n === "vp09" ? t.info.codec = "vp9" : n === "av01" ? t.info.codec = "av1" : n === null ? i._warn("Unknown encrypted video codec due to missing frma box.") : i._warn(`Unsupported video codec (sample entry type '${a.name}').`);
						} else {
							e.skip(8);
							let s = Ks(e);
							e.skip(6);
							let c = Ks(e), l = Ks(e);
							e.skip(4);
							let u = G(e) / 65536, d = null;
							n === 0 && s > 0 && (s === 1 ? (e.skip(4), l = 8 * G(e), e.skip(8)) : s === 2 && (e.skip(4), u = ic(e), c = G(e), e.skip(4), l = G(e), d = G(e), e.skip(8))), t.info.numberOfChannels = c, t.info.sampleRate = u, t.frmaCodecString = null, this.readContiguousBoxes(e.slice(e.filePos, r + a.totalSize - e.filePos));
							let f = o === "enca" ? t.frmaCodecString : o;
							if (t.frmaCodecString = null, f !== "mp4a") if (f === "opus") t.info.codec = "opus", t.info.sampleRate = xt;
							else if (f === "flac") t.info.codec = "flac";
							else if (f === "ulaw") t.info.codec = "ulaw";
							else if (f === "alaw") t.info.codec = "alaw";
							else if (f === "ac-3") t.info.codec = "ac3";
							else if (f === "ec-3") t.info.codec = "eac3";
							else if (f === "twos") l === 8 ? t.info.codec = "pcm-s8" : l === 16 ? t.info.codec = t.info.pcmLittleEndian ? "pcm-s16" : "pcm-s16be" : (i._warn(`Unsupported sample size ${l} for codec 'twos'.`), t.info.codec = null);
							else if (f === "sowt") l === 8 ? t.info.codec = "pcm-s8" : l === 16 ? t.info.codec = "pcm-s16" : (i._warn(`Unsupported sample size ${l} for codec 'sowt'.`), t.info.codec = null);
							else if (f === "raw ") t.info.codec = "pcm-u8";
							else if (f === "in24") t.info.codec = t.info.pcmLittleEndian ? "pcm-s24" : "pcm-s24be";
							else if (f === "in32") t.info.codec = t.info.pcmLittleEndian ? "pcm-s32" : "pcm-s32be";
							else if (f === "fl32") t.info.codec = t.info.pcmLittleEndian ? "pcm-f32" : "pcm-f32be";
							else if (f === "fl64") t.info.codec = t.info.pcmLittleEndian ? "pcm-f64" : "pcm-f64be";
							else if (f === "ipcm") {
								let e = t.info.pcmSampleSize;
								t.info.pcmLittleEndian ? e === 16 ? t.info.codec = "pcm-s16" : e === 24 ? t.info.codec = "pcm-s24" : e === 32 ? t.info.codec = "pcm-s32" : (i._warn(`Invalid ipcm sample size ${e}.`), t.info.codec = null) : e === 16 ? t.info.codec = "pcm-s16be" : e === 24 ? t.info.codec = "pcm-s24be" : e === 32 ? t.info.codec = "pcm-s32be" : (i._warn(`Invalid ipcm sample size ${e}.`), t.info.codec = null);
							} else if (f === "fpcm") {
								let e = t.info.pcmSampleSize;
								t.info.pcmLittleEndian ? e === 32 ? t.info.codec = "pcm-f32" : e === 64 ? t.info.codec = "pcm-f64" : (i._warn(`Invalid fpcm sample size ${e}.`), t.info.codec = null) : e === 32 ? t.info.codec = "pcm-f32be" : e === 64 ? t.info.codec = "pcm-f64be" : (i._warn(`Invalid fpcm sample size ${e}.`), t.info.codec = null);
							} else if (f === "lpcm" && d !== null) {
								let e = l + 7 >> 3, n = !!(d & 1), r = !!(d & 2), a = d & 4 ? -1 : 0;
								l > 0 && l <= 64 && (n ? l === 32 && (t.info.codec = r ? "pcm-f32be" : "pcm-f32") : a & 1 << e - 1 ? e === 1 ? t.info.codec = "pcm-s8" : e === 2 ? t.info.codec = r ? "pcm-s16be" : "pcm-s16" : e === 3 ? t.info.codec = r ? "pcm-s24be" : "pcm-s24" : e === 4 && (t.info.codec = r ? "pcm-s32be" : "pcm-s32") : e === 1 && (t.info.codec = "pcm-u8")), t.info.codec === null && i._warn("Unsupported PCM format.");
							} else f === null ? i._warn("Unknown encrypted audio codec due to missing frma box.") : i._warn(`Unsupported audio codec (sample entry type '${a.name}').`);
						}
						e.filePos = r + a.totalSize;
					}
				}
				break;
			case "frma":
				{
					let t = this.currentTrack;
					if (!t) break;
					t.frmaCodecString = K(e, 4).toLowerCase();
				}
				break;
			case "schm":
				{
					let t = this.currentTrack;
					if (!t) break;
					e.skip(4);
					let n = K(e, 4);
					n === "cenc" || n === "cens" || n === "cbcs" ? t.encryptionInfo = {
						scheme: n,
						defaultKid: null,
						defaultIsProtected: null,
						defaultPerSampleIvSize: null,
						defaultConstantIv: null,
						defaultCryptByteBlock: null,
						defaultSkipByteBlock: null
					} : i._warn(`Unsupported encryption scheme '${n}'.`);
				}
				break;
			case "tenc":
				{
					let t = this.currentTrack;
					if (!t || !t.encryptionInfo) break;
					let n = W(e);
					e.skip(3), e.skip(1);
					let r = W(e);
					if (n > 0 ? (t.encryptionInfo.defaultCryptByteBlock = r >> 4, t.encryptionInfo.defaultSkipByteBlock = r & 15) : (t.encryptionInfo.defaultCryptByteBlock = 0, t.encryptionInfo.defaultSkipByteBlock = 0), t.encryptionInfo.defaultIsProtected = W(e) !== 0, t.encryptionInfo.defaultPerSampleIvSize = W(e), t.encryptionInfo.defaultKid = te(U(e, 16)), t.encryptionInfo.defaultIsProtected && t.encryptionInfo.defaultPerSampleIvSize === 0) {
						let n = W(e), r = /* @__PURE__ */ new Uint8Array(16);
						r.set(U(e, n), 0), t.encryptionInfo.defaultConstantIv = r;
					}
				}
				break;
			case "avcC":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info), t.info.codecDescription = U(e, n.contentSize);
				}
				break;
			case "hvcC":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info), t.info.codecDescription = U(e, n.contentSize);
				}
				break;
			case "vpcC":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "video"), e.skip(4);
					let n = W(e), r = W(e), i = W(e), o = i >> 4, s = i >> 1 & 7, c = i & 1, l = W(e), u = W(e), d = W(e);
					t.info.vp9CodecInfo = {
						profile: n,
						level: r,
						bitDepth: o,
						chromaSubsampling: s,
						videoFullRangeFlag: c,
						colourPrimaries: l,
						transferCharacteristics: u,
						matrixCoefficients: d
					};
				}
				break;
			case "av1C":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "video"), e.skip(1);
					let n = W(e), r = n >> 5, i = n & 31, o = W(e), s = o >> 7, c = o >> 6 & 1, l = o >> 5 & 1, u = o >> 4 & 1, d = o >> 3 & 1, f = o >> 2 & 1, p = o & 3, m = r === 2 && c ? l ? 12 : 10 : c ? 10 : 8;
					t.info.av1CodecInfo = {
						profile: r,
						level: i,
						tier: s,
						bitDepth: m,
						monochrome: u,
						chromaSubsamplingX: d,
						chromaSubsamplingY: f,
						chromaSamplePosition: p
					};
				}
				break;
			case "colr":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "video");
					let n = K(e, 4);
					if (n !== "nclx" && n !== "nclc") break;
					let r = Ks(e), i = Ks(e), o = Ks(e), s;
					n === "nclx" && (s = !!(W(e) & 128)), t.info.colorSpace = {
						primaries: y[r],
						transfer: x[i],
						matrix: C[o],
						fullRange: s
					};
				}
				break;
			case "pasp":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "video");
					let n = G(e), r = G(e);
					n > 0 && r > 0 && (n > r ? t.info.squarePixelWidth = Math.round(t.info.width * n / r) : t.info.squarePixelHeight = Math.round(t.info.height * r / n));
				}
				break;
			case "wave":
				this.readContiguousBoxes(e.slice(r, n.contentSize));
				break;
			case "esds":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "audio"), e.skip(4), a(W(e) === 3), tr(e), e.skip(2);
					let n = W(e), r = (n & 128) != 0, o = (n & 64) != 0, s = (n & 32) != 0;
					if (r && e.skip(2), o) {
						let t = W(e);
						e.skip(t);
					}
					s && e.skip(2), a(W(e) === 4);
					let c = tr(e), l = e.filePos, u = W(e);
					if (u === 64 || u === 103 ? (t.info.codec = "aac", t.info.aacCodecInfo = {
						isMpeg2: u === 103,
						objectType: null
					}) : u === 105 || u === 107 ? t.info.codec = "mp3" : u === 221 ? t.info.codec = "vorbis" : i._warn(`Unsupported audio codec (objectTypeIndication ${u}) - discarding track.`), e.skip(12), c > e.filePos - l) {
						a(W(e) === 5);
						let n = tr(e);
						if (t.info.codecDescription = U(e, n), t.info.codec === "aac") {
							let e = it(t.info.codecDescription);
							e.numberOfChannels !== null && (t.info.numberOfChannels = e.numberOfChannels), e.sampleRate !== null && (t.info.sampleRate = e.sampleRate);
						}
					}
				}
				break;
			case "enda":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "audio"), t.info.pcmLittleEndian = !!(Ks(e) & 255);
				}
				break;
			case "pcmC":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "audio"), e.skip(4);
					let n = W(e);
					t.info.pcmLittleEndian = !!(n & 1), t.info.pcmSampleSize = W(e);
				}
				break;
			case "dOps":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "audio"), e.skip(1);
					let n = W(e), r = Ks(e), i = G(e), o = Js(e), s = W(e), c;
					c = s === 0 ? /* @__PURE__ */ new Uint8Array() : U(e, 2 + n);
					let l = new Uint8Array(19 + c.byteLength), u = new DataView(l.buffer);
					u.setUint32(0, 1332770163, !1), u.setUint32(4, 1214603620, !1), u.setUint8(8, 1), u.setUint8(9, n), u.setUint16(10, r, !0), u.setUint32(12, i, !0), u.setInt16(16, o, !0), u.setUint8(18, s), l.set(c, 19), t.info.codecDescription = l, t.info.numberOfChannels = n;
				}
				break;
			case "dfLa":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "audio"), e.skip(4);
					let n = e.filePos;
					for (; e.filePos < c;) {
						let n = W(e), r = qs(e);
						if ((n & 127) === Fn.STREAMINFO) {
							e.skip(10);
							let n = G(e), r = n >>> 12, i = (n >> 9 & 7) + 1;
							t.info.sampleRate = r, t.info.numberOfChannels = i, e.skip(20);
						} else e.skip(r);
						if (n & 128) break;
					}
					let r = e.filePos;
					e.filePos = n;
					let i = U(e, r - n), o = new Uint8Array(4 + i.byteLength);
					new DataView(o.buffer).setUint32(0, 1716281667, !1), o.set(i, 4), t.info.codecDescription = o;
				}
				break;
			case "dac3":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "audio");
					let n = new P(U(e, 3)), r = n.readBits(2);
					n.skipBits(8);
					let i = n.readBits(3), o = n.readBits(1);
					r < 3 && (t.info.sampleRate = Kt[r]), t.info.numberOfChannels = Rn[i] + o;
				}
				break;
			case "dec3":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.info?.type === "audio");
					let r = Wn(U(e, n.contentSize));
					if (!r) {
						i._warn("Invalid dec3 box contents, ignoring.");
						break;
					}
					let o = Gn(r);
					o !== null && (t.info.sampleRate = o), t.info.numberOfChannels = Kn(r);
				}
				break;
			case "stts":
				{
					let t = this.currentTrack;
					if (!t || !t.sampleTable) break;
					e.skip(4);
					let n = G(e), r = 0, i = 0;
					for (let a = 0; a < n; a++) {
						let n = G(e), a = G(e);
						t.sampleTable.sampleTimingEntries.push({
							startIndex: r,
							startDecodeTimestamp: i,
							count: n,
							delta: a
						}), r += n, i += n * a;
					}
				}
				break;
			case "ctts":
				{
					let t = this.currentTrack;
					if (!t || !t.sampleTable) break;
					e.skip(4);
					let n = G(e), r = 0;
					for (let i = 0; i < n; i++) {
						let n = G(e), i = Zs(e);
						t.sampleTable.sampleCompositionTimeOffsets.push({
							startIndex: r,
							count: n,
							offset: i
						}), r += n;
					}
				}
				break;
			case "stsz":
				{
					let t = this.currentTrack;
					if (!t || !t.sampleTable) break;
					e.skip(4);
					let n = G(e), r = G(e);
					if (n === 0) for (let n = 0; n < r; n++) {
						let n = G(e);
						t.sampleTable.sampleSizes.push(n);
					}
					else t.sampleTable.sampleSizes.push(n);
				}
				break;
			case "stz2":
				{
					let t = this.currentTrack;
					if (!t || !t.sampleTable) break;
					e.skip(4), e.skip(3);
					let n = W(e), r = G(e), i = new P(U(e, Math.ceil(r * n / 8)));
					for (let e = 0; e < r; e++) {
						let e = i.readBits(n);
						t.sampleTable.sampleSizes.push(e);
					}
				}
				break;
			case "stss":
				{
					let t = this.currentTrack;
					if (!t || !t.sampleTable) break;
					e.skip(4), t.sampleTable.keySampleIndices = [];
					let n = G(e);
					for (let r = 0; r < n; r++) {
						let n = G(e) - 1;
						t.sampleTable.keySampleIndices.push(n);
					}
					t.sampleTable.keySampleIndices[0] !== 0 && t.sampleTable.keySampleIndices.unshift(0);
				}
				break;
			case "stsc":
				{
					let t = this.currentTrack;
					if (!t || !t.sampleTable) break;
					e.skip(4);
					let n = G(e);
					for (let r = 0; r < n; r++) {
						let n = G(e) - 1, r = G(e), i = G(e);
						t.sampleTable.sampleToChunk.push({
							startSampleIndex: -1,
							startChunkIndex: n,
							samplesPerChunk: r,
							sampleDescriptionIndex: i
						});
					}
					let r = 0;
					for (let e = 0; e < t.sampleTable.sampleToChunk.length; e++) if (t.sampleTable.sampleToChunk[e].startSampleIndex = r, e < t.sampleTable.sampleToChunk.length - 1) {
						let n = t.sampleTable.sampleToChunk[e + 1].startChunkIndex - t.sampleTable.sampleToChunk[e].startChunkIndex;
						r += n * t.sampleTable.sampleToChunk[e].samplesPerChunk;
					}
				}
				break;
			case "stco":
				{
					let t = this.currentTrack;
					if (!t || !t.sampleTable) break;
					e.skip(4);
					let n = G(e);
					for (let r = 0; r < n; r++) {
						let n = G(e);
						t.sampleTable.chunkOffsets.push(n);
					}
				}
				break;
			case "co64":
				{
					let t = this.currentTrack;
					if (!t || !t.sampleTable) break;
					e.skip(4);
					let n = G(e);
					for (let r = 0; r < n; r++) {
						let n = ec(e);
						t.sampleTable.chunkOffsets.push(n);
					}
				}
				break;
			case "mvex":
				this.isFragmented = !0, this.readContiguousBoxes(e.slice(r, n.contentSize));
				break;
			case "mehd":
				{
					let t = W(e);
					e.skip(3);
					let n = t === 1 ? ec(e) : G(e);
					this.movieDurationInTimescale = n;
				}
				break;
			case "trex":
				{
					e.skip(4);
					let t = G(e), n = G(e), r = G(e), i = G(e), a = G(e);
					this.fragmentTrackDefaults.push({
						trackId: t,
						defaultSampleDescriptionIndex: n,
						defaultSampleDuration: r,
						defaultSampleSize: i,
						defaultSampleFlags: a
					});
				}
				break;
			case "tfra":
				{
					let t = W(e);
					e.skip(3);
					let n = G(e), r = this.tracks.find((e) => e.id === n);
					if (!r) break;
					let i = G(e), a = (i & 48) >> 4, o = (i & 12) >> 2, s = i & 3, c = [
						W,
						Ks,
						qs,
						G
					], l = c[a], u = c[o], d = c[s], f = G(e);
					for (let n = 0; n < f; n++) {
						let n = t === 1 ? ec(e) : G(e), i = t === 1 ? ec(e) : G(e);
						l(e), u(e), d(e), r.fragmentLookupTable.push({
							timestamp: n,
							moofOffset: i
						});
					}
					r.fragmentLookupTable.sort((e, t) => e.timestamp - t.timestamp);
					for (let e = 0; e < r.fragmentLookupTable.length - 1; e++) {
						let t = r.fragmentLookupTable[e], n = r.fragmentLookupTable[e + 1];
						t.timestamp === n.timestamp && (r.fragmentLookupTable.splice(e + 1, 1), e--);
					}
				}
				break;
			case "moof":
				this.currentFragment = {
					moofOffset: t,
					moofSize: n.totalSize,
					implicitBaseDataOffset: t,
					trackData: /* @__PURE__ */ new Map(),
					psshBoxes: []
				}, this.readContiguousBoxes(e.slice(r, n.contentSize)), this.lastReadFragment = this.currentFragment, this.currentFragment = null;
				break;
			case "traf":
				if (a(this.currentFragment), this.readContiguousBoxes(e.slice(r, n.contentSize)), this.currentTrack) {
					let e = this.currentFragment.trackData.get(this.currentTrack.id);
					cond: if (e) {
						if (e.samples.length === 0) {
							this.currentFragment.trackData.delete(this.currentTrack.id);
							break cond;
						}
						e.presentationTimestamps = e.samples.map((e, t) => ({
							presentationTimestamp: e.presentationTimestamp,
							sampleIndex: t
						})).sort((e, t) => e.presentationTimestamp - t.presentationTimestamp);
						for (let t = 0; t < e.presentationTimestamps.length; t++) {
							let n = e.presentationTimestamps[t], r = e.samples[n.sampleIndex];
							e.firstKeyFrameTimestamp === null && r.isKeyFrame && (e.firstKeyFrameTimestamp = r.presentationTimestamp), t < e.presentationTimestamps.length - 1 && (r.duration = e.presentationTimestamps[t + 1].presentationTimestamp - n.presentationTimestamp);
						}
						let t = e.samples[e.presentationTimestamps[0].sampleIndex], n = e.samples[s(e.presentationTimestamps).sampleIndex];
						e.startTimestamp = t.presentationTimestamp, e.endTimestamp = n.presentationTimestamp + n.duration;
						let { currentFragmentState: r } = this.currentTrack;
						a(r), r.startTimestamp !== null && (Cr(e, r.startTimestamp), e.startTimestampIsFinal = !0), r.encryptionAuxInfo && !e.samples[0].encryption && (e.encryptionAuxInfo = r.encryptionAuxInfo);
					}
					this.currentTrack.currentFragmentState = null, this.currentTrack = null;
				}
				break;
			case "pssh":
				{
					if (this.input._formatOptions.isobmff?._suppressPsshParsing) break;
					let t = Xn(U(e, n.contentSize));
					this.currentFragment ? this.currentFragment.psshBoxes.push(t) : this.currentTrack || this.psshBoxes.push(t);
				}
				break;
			case "tfhd":
				{
					a(this.currentFragment), e.skip(1);
					let t = qs(e), n = !!(t & 1), r = !!(t & 2), i = !!(t & 8), o = !!(t & 16), s = !!(t & 32), c = !!(t & 65536), l = !!(t & 131072), u = G(e), d = this.tracks.find((e) => e.id === u);
					if (!d) break;
					let f = this.fragmentTrackDefaults.find((e) => e.trackId === u);
					this.currentTrack = d, d.currentFragmentState = {
						baseDataOffset: this.currentFragment.implicitBaseDataOffset,
						sampleDescriptionIndex: f?.defaultSampleDescriptionIndex ?? null,
						defaultSampleDuration: f?.defaultSampleDuration ?? null,
						defaultSampleSize: f?.defaultSampleSize ?? null,
						defaultSampleFlags: f?.defaultSampleFlags ?? null,
						startTimestamp: null,
						encryptionAuxInfo: null
					}, n ? d.currentFragmentState.baseDataOffset = ec(e) : l && (d.currentFragmentState.baseDataOffset = this.currentFragment.moofOffset), r && (d.currentFragmentState.sampleDescriptionIndex = G(e)), i && (d.currentFragmentState.defaultSampleDuration = G(e)), o && (d.currentFragmentState.defaultSampleSize = G(e)), s && (d.currentFragmentState.defaultSampleFlags = G(e)), c && (d.currentFragmentState.defaultSampleDuration = 0);
				}
				break;
			case "tfdt":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(t.currentFragmentState);
					let n = W(e);
					e.skip(3);
					let r = n === 0 ? G(e) : ec(e);
					t.currentFragmentState.startTimestamp = r;
				}
				break;
			case "trun":
				{
					let t = this.currentTrack;
					if (!t) break;
					a(this.currentFragment), a(t.currentFragmentState);
					let n = W(e), r = qs(e), i = !!(r & 1), o = !!(r & 4), s = !!(r & 256), c = !!(r & 512), l = !!(r & 1024), u = !!(r & 2048), d = G(e), f = null;
					i && (f = Zs(e));
					let p = null;
					o && (p = G(e));
					let m;
					this.currentFragment.trackData.has(t.id) ? (m = this.currentFragment.trackData.get(t.id), f !== null && (m.currentOffset = t.currentFragmentState.baseDataOffset + f)) : (m = {
						track: t,
						currentTimestamp: 0,
						currentOffset: t.currentFragmentState.baseDataOffset + (f ?? 0),
						startTimestamp: 0,
						endTimestamp: 0,
						firstKeyFrameTimestamp: null,
						samples: [],
						presentationTimestamps: [],
						startTimestampIsFinal: !1,
						encryptionAuxInfo: null
					}, this.currentFragment.trackData.set(t.id, m));
					for (let r = 0; r < d; r++) {
						let i;
						s ? i = G(e) : (a(t.currentFragmentState.defaultSampleDuration !== null), i = t.currentFragmentState.defaultSampleDuration);
						let o;
						c ? o = G(e) : (a(t.currentFragmentState.defaultSampleSize !== null), o = t.currentFragmentState.defaultSampleSize);
						let d;
						l ? d = G(e) : (a(t.currentFragmentState.defaultSampleFlags !== null), d = t.currentFragmentState.defaultSampleFlags), r === 0 && p !== null && (d = p);
						let f = 0;
						u && (f = n === 0 ? G(e) : Zs(e));
						let h = !(d & 65536);
						m.samples.push({
							presentationTimestamp: m.currentTimestamp + f,
							duration: i,
							byteOffset: m.currentOffset,
							byteSize: o,
							isKeyFrame: h,
							encryption: null
						}), m.currentOffset += o, m.currentTimestamp += i;
					}
					this.currentFragment.implicitBaseDataOffset = m.currentOffset;
				}
				break;
			case "saiz":
				{
					let t = this.currentTrack;
					if (!t || !t.encryptionInfo) break;
					if (e.skip(1), qs(e) & 1) {
						let n = K(e, 4), r = G(e);
						if (n !== t.encryptionInfo.scheme || r !== 0) break;
					}
					let n = W(e), r = G(e), i = null;
					n === 0 && r > 0 && (i = U(e, r));
					let a = Er(t);
					a.defaultSampleInfoSize = n, a.sampleSizes = i, a.sampleCount = r;
				}
				break;
			case "saio":
				{
					let t = this.currentTrack;
					if (!t || !t.encryptionInfo) break;
					let n = W(e);
					if (qs(e) & 1) {
						let n = K(e, 4), r = G(e);
						if (n !== t.encryptionInfo.scheme || r !== 0) break;
					}
					let r = G(e);
					if (r === 0) break;
					r > 1 && i._warn("Multiple saio entries are not supported; using the first offset only.");
					let a = n === 0 ? G(e) : Number(ec(e));
					this.currentFragment && (a += this.currentFragment.moofOffset);
					let o = Er(t);
					o.offset = a;
				}
				break;
			case "senc":
				{
					let t = this.currentTrack;
					if (!t || !t.encryptionInfo) break;
					a(this.currentFragment);
					let n = this.currentFragment.trackData.get(t.id);
					if (!n) break;
					e.skip(1);
					let r = !!(qs(e) & 2), i = G(e), o = t.encryptionInfo.defaultPerSampleIvSize;
					a(o !== null);
					for (let a = 0; a < Math.min(i, n.samples.length); a++) {
						let i = /* @__PURE__ */ new Uint8Array(16);
						o > 0 ? i.set(U(e, o), 0) : i.set(t.encryptionInfo.defaultConstantIv, 0);
						let s = null;
						if (r) {
							let t = Ks(e);
							s = [];
							for (let n = 0; n < t; n++) {
								let t = Ks(e), n = G(e);
								s.push({
									clearLen: t,
									protectedLen: n
								});
							}
						}
						let c = n.samples[a];
						c.encryption = {
							iv: i,
							subsamples: s
						};
					}
				}
				break;
			case "udta":
				{
					let t = this.iterateContiguousBoxes(e.slice(r, n.contentSize));
					for (let { boxInfo: e, slice: n } of t) {
						if (e.name !== "meta" && !this.currentTrack) {
							let t = n.filePos;
							this.metadataTags.raw ??= {}, e.name[0] === "©" ? this.metadataTags.raw[e.name] ??= nr(n) : this.metadataTags.raw[e.name] ??= U(n, e.contentSize), n.filePos = t;
						}
						switch (e.name) {
							case "meta":
								n.skip(-e.headerSize), this.traverseBox(n);
								break;
							case "©nam":
							case "name":
								this.currentTrack ? this.currentTrack.name = m.decode(U(n, e.contentSize)) : this.metadataTags.title ??= nr(n);
								break;
							case "©des":
								this.currentTrack || (this.metadataTags.description ??= nr(n));
								break;
							case "©ART":
								this.currentTrack || (this.metadataTags.artist ??= nr(n));
								break;
							case "©alb":
								this.currentTrack || (this.metadataTags.album ??= nr(n));
								break;
							case "albr":
								this.currentTrack || (this.metadataTags.albumArtist ??= nr(n));
								break;
							case "©gen":
								this.currentTrack || (this.metadataTags.genre ??= nr(n));
								break;
							case "©day":
								if (!this.currentTrack) {
									let e = new Date(nr(n));
									Number.isNaN(e.getTime()) || (this.metadataTags.date ??= e);
								}
								break;
							case "©cmt":
								this.currentTrack || (this.metadataTags.comment ??= nr(n));
								break;
							case "©lyr":
								this.currentTrack || (this.metadataTags.lyrics ??= nr(n));
								break;
						}
					}
				}
				break;
			case "meta":
				{
					if (this.currentTrack) break;
					let t = G(e) !== 0;
					this.currentMetadataKeys = /* @__PURE__ */ new Map(), t ? this.readContiguousBoxes(e.slice(r, n.contentSize)) : this.readContiguousBoxes(e.slice(r + 4, n.contentSize - 4)), this.currentMetadataKeys = null;
				}
				break;
			case "keys":
				{
					if (!this.currentMetadataKeys) break;
					e.skip(4);
					let t = G(e);
					for (let n = 0; n < t; n++) {
						let t = G(e);
						e.skip(4);
						let r = m.decode(U(e, t - 8));
						this.currentMetadataKeys.set(n + 1, r);
					}
				}
				break;
			case "ilst":
				{
					if (!this.currentMetadataKeys) break;
					let t = this.iterateContiguousBoxes(e.slice(r, n.contentSize));
					for (let { boxInfo: e, slice: n } of t) {
						let t = e.name, r = (t.charCodeAt(0) << 24) + (t.charCodeAt(1) << 16) + (t.charCodeAt(2) << 8) + t.charCodeAt(3);
						this.currentMetadataKeys.has(r) && (t = this.currentMetadataKeys.get(r));
						let i = rr(n);
						switch (this.metadataTags.raw ??= {}, this.metadataTags.raw[t] ??= i, t) {
							case "©nam":
							case "titl":
							case "com.apple.quicktime.title":
							case "title":
								typeof i == "string" && (this.metadataTags.title ??= i);
								break;
							case "©des":
							case "desc":
							case "dscp":
							case "com.apple.quicktime.description":
							case "description":
								typeof i == "string" && (this.metadataTags.description ??= i);
								break;
							case "©ART":
							case "com.apple.quicktime.artist":
							case "artist":
								typeof i == "string" && (this.metadataTags.artist ??= i);
								break;
							case "©alb":
							case "albm":
							case "com.apple.quicktime.album":
							case "album":
								typeof i == "string" && (this.metadataTags.album ??= i);
								break;
							case "aART":
							case "album_artist":
								typeof i == "string" && (this.metadataTags.albumArtist ??= i);
								break;
							case "©cmt":
							case "com.apple.quicktime.comment":
							case "comment":
								typeof i == "string" && (this.metadataTags.comment ??= i);
								break;
							case "©gen":
							case "gnre":
							case "com.apple.quicktime.genre":
							case "genre":
								typeof i == "string" && (this.metadataTags.genre ??= i);
								break;
							case "©lyr":
							case "lyrics":
								typeof i == "string" && (this.metadataTags.lyrics ??= i);
								break;
							case "©day":
							case "rldt":
							case "com.apple.quicktime.creationdate":
							case "date":
								if (typeof i == "string") {
									let e = new Date(i);
									Number.isNaN(e.getTime()) || (this.metadataTags.date ??= e);
								}
								break;
							case "covr":
							case "com.apple.quicktime.artwork":
								i instanceof Ze ? (this.metadataTags.images ??= [], this.metadataTags.images.push({
									data: i.data,
									kind: "coverFront",
									mimeType: i.mimeType
								})) : i instanceof Uint8Array && (this.metadataTags.images ??= [], this.metadataTags.images.push({
									data: i,
									kind: "coverFront",
									mimeType: "image/*"
								}));
								break;
							case "track":
								if (typeof i == "string") {
									let e = i.split("/"), t = Number.parseInt(e[0], 10), n = e[1] && Number.parseInt(e[1], 10);
									Number.isInteger(t) && t > 0 && (this.metadataTags.trackNumber ??= t), n && Number.isInteger(n) && n > 0 && (this.metadataTags.tracksTotal ??= n);
								}
								break;
							case "trkn":
								if (i instanceof Uint8Array && i.length >= 6) {
									let e = p(i), t = e.getUint16(2, !1), n = e.getUint16(4, !1);
									t > 0 && (this.metadataTags.trackNumber ??= t), n > 0 && (this.metadataTags.tracksTotal ??= n);
								}
								break;
							case "disc":
							case "disk":
								if (i instanceof Uint8Array && i.length >= 6) {
									let e = p(i), t = e.getUint16(2, !1), n = e.getUint16(4, !1);
									t > 0 && (this.metadataTags.discNumber ??= t), n > 0 && (this.metadataTags.discsTotal ??= n);
								}
								break;
						}
					}
				}
				break;
		}
		return e.filePos = c, !0;
	}
}, gr = class {
	constructor(e) {
		this.internalTrack = e, this.packetToSampleIndex = /* @__PURE__ */ new WeakMap(), this.packetToFragmentLocation = /* @__PURE__ */ new WeakMap();
	}
	getId() {
		return this.internalTrack.id;
	}
	getNumber() {
		let e = this.internalTrack.demuxer, t = this.internalTrack.trackBacking.getType(), n = 0;
		for (let r of e.tracks) if (r.trackBacking.getType() === t && n++, r === this.internalTrack) break;
		return n;
	}
	getCodec() {
		throw Error("Not implemented on base class.");
	}
	getInternalCodecId() {
		return this.internalTrack.internalCodecId;
	}
	getName() {
		return this.internalTrack.name;
	}
	getLanguageCode() {
		return this.internalTrack.languageCode;
	}
	getTimeResolution() {
		return this.internalTrack.timescale;
	}
	isRelativeToUnixEpoch() {
		return !1;
	}
	getUnixTimeForTimestamp() {
		return null;
	}
	getDisposition() {
		return this.internalTrack.disposition;
	}
	getPairingMask() {
		return 1n;
	}
	getBitrate() {
		return null;
	}
	getAverageBitrate() {
		return null;
	}
	async getDurationFromMetadata() {
		let e = this.internalTrack;
		return e.durationInMediaTimescale <= 0 ? null : (a(e.trackBacking), ((await e.trackBacking.getFirstPacket({ metadataOnly: !0 }))?.timestamp ?? 0) + e.durationInMediaTimescale / e.timescale);
	}
	async getLiveRefreshInterval() {
		return null;
	}
	async getFirstPacket(e) {
		let t = await this.fetchPacketForSampleIndex(0, e);
		return t || !this.internalTrack.demuxer.isFragmented ? t : this.performFragmentedLookup(null, (e) => e.trackData.get(this.internalTrack.id) ? {
			sampleIndex: 0,
			correctSampleFound: !0
		} : {
			sampleIndex: -1,
			correctSampleFound: !1
		}, -Infinity, Infinity, e);
	}
	mapTimestampIntoTimescale(e) {
		return N(e * this.internalTrack.timescale) + this.internalTrack.editListOffset;
	}
	async getPacket(e, t) {
		let n = this.mapTimestampIntoTimescale(e), r = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), i = yr(r, n), a = await this.fetchPacketForSampleIndex(i, t);
		return !Tr(r) || !this.internalTrack.demuxer.isFragmented ? a : this.performFragmentedLookup(null, (e) => {
			let t = e.trackData.get(this.internalTrack.id);
			if (!t) return {
				sampleIndex: -1,
				correctSampleFound: !1
			};
			let r = D(t.presentationTimestamps, n, (e) => e.presentationTimestamp);
			return {
				sampleIndex: r === -1 ? -1 : t.presentationTimestamps[r].sampleIndex,
				correctSampleFound: r !== -1 && n < t.endTimestamp
			};
		}, n, n, t);
	}
	async getNextPacket(e, t) {
		let n = this.packetToSampleIndex.get(e);
		if (n !== void 0) return this.fetchPacketForSampleIndex(n + 1, t);
		let r = this.packetToFragmentLocation.get(e);
		if (r === void 0) throw Error("Packet was not created from this track.");
		return this.performFragmentedLookup(r.fragment, (e) => {
			if (e === r.fragment) {
				let t = e.trackData.get(this.internalTrack.id);
				if (r.sampleIndex + 1 < t.samples.length) return {
					sampleIndex: r.sampleIndex + 1,
					correctSampleFound: !0
				};
			} else if (e.trackData.get(this.internalTrack.id)) return {
				sampleIndex: 0,
				correctSampleFound: !0
			};
			return {
				sampleIndex: -1,
				correctSampleFound: !1
			};
		}, -Infinity, Infinity, t);
	}
	async getKeyPacket(e, t) {
		let n = this.mapTimestampIntoTimescale(e), r = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), i = br(r, n), a = await this.fetchPacketForSampleIndex(i, t);
		return !Tr(r) || !this.internalTrack.demuxer.isFragmented ? a : this.performFragmentedLookup(null, (e) => {
			let t = e.trackData.get(this.internalTrack.id);
			if (!t) return {
				sampleIndex: -1,
				correctSampleFound: !1
			};
			let r = ce(t.presentationTimestamps, (e) => t.samples[e.sampleIndex].isKeyFrame && e.presentationTimestamp <= n);
			return {
				sampleIndex: r === -1 ? -1 : t.presentationTimestamps[r].sampleIndex,
				correctSampleFound: r !== -1 && n < t.endTimestamp
			};
		}, n, n, t);
	}
	async getNextKeyPacket(e, t) {
		let n = this.packetToSampleIndex.get(e);
		if (n !== void 0) {
			let e = Sr(this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), n);
			return this.fetchPacketForSampleIndex(e, t);
		}
		let r = this.packetToFragmentLocation.get(e);
		if (r === void 0) throw Error("Packet was not created from this track.");
		return this.performFragmentedLookup(r.fragment, (e) => {
			if (e === r.fragment) {
				let t = e.trackData.get(this.internalTrack.id).samples.findIndex((e, t) => e.isKeyFrame && t > r.sampleIndex);
				if (t !== -1) return {
					sampleIndex: t,
					correctSampleFound: !0
				};
			} else {
				let t = e.trackData.get(this.internalTrack.id);
				if (t && t.firstKeyFrameTimestamp !== null) {
					let e = t.samples.findIndex((e) => e.isKeyFrame);
					return a(e !== -1), {
						sampleIndex: e,
						correctSampleFound: !0
					};
				}
			}
			return {
				sampleIndex: -1,
				correctSampleFound: !1
			};
		}, -Infinity, Infinity, t);
	}
	async fetchPacketForSampleIndex(e, t) {
		if (e === -1) return null;
		let n = xr(this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), e);
		if (!n) return null;
		let r;
		if (t.metadataOnly) r = Jn;
		else {
			let t = this.internalTrack.demuxer.reader.requestSlice(n.sampleOffset, n.sampleSize);
			if (t instanceof Promise && (t = await t), !t) return null;
			if (r = U(t, n.sampleSize), this.internalTrack.encryptionAuxInfo) {
				a(this.internalTrack.encryptionInfo);
				let t = await Dr(this.internalTrack.demuxer.reader, this.internalTrack.encryptionInfo, this.internalTrack.encryptionAuxInfo);
				e < t.length && (r = await Or(this.internalTrack, t[e], r, null));
			}
		}
		let i = (n.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale, o = n.duration / this.internalTrack.timescale, s = new z(r, n.isKeyFrame ? "key" : "delta", i, o, e, n.sampleSize);
		return this.packetToSampleIndex.set(s, e), s;
	}
	async fetchPacketInFragment(e, t, n) {
		if (t === -1) return null;
		let r = e.trackData.get(this.internalTrack.id).samples[t];
		a(r);
		let i;
		if (n.metadataOnly) i = Jn;
		else {
			let t = this.internalTrack.demuxer.reader.requestSlice(r.byteOffset, r.byteSize);
			if (t instanceof Promise && (t = await t), !t) return null;
			i = U(t, r.byteSize), r.encryption && (i = await Or(this.internalTrack, r.encryption, i, e));
		}
		let o = (r.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale, s = r.duration / this.internalTrack.timescale, c = new z(i, r.isKeyFrame ? "key" : "delta", o, s, e.moofOffset + t, r.byteSize);
		return this.packetToFragmentLocation.set(c, {
			fragment: e,
			sampleIndex: t
		}), c;
	}
	async performFragmentedLookup(e, t, n, r, i) {
		let o = this.internalTrack.demuxer, s = null, c = null, l = -1;
		if (e) {
			let { sampleIndex: n, correctSampleFound: r } = t(e);
			if (r) return this.fetchPacketInFragment(e, n, i);
			n !== -1 && (c = e, l = n);
		}
		let u = D(this.internalTrack.fragmentLookupTable, n, (e) => e.timestamp), d = u === -1 ? null : this.internalTrack.fragmentLookupTable[u], f = D(this.internalTrack.fragmentPositionCache, n, (e) => e.startTimestamp), p = f === -1 ? null : this.internalTrack.fragmentPositionCache[f], m = Math.max(d?.moofOffset ?? 0, p?.moofOffset ?? 0) || null, h;
		for (e ? m === null || e.moofOffset >= m ? (h = e.moofOffset + e.moofSize, s = e) : h = m : h = m ?? 0;;) {
			if (s) {
				let e = s.trackData.get(this.internalTrack.id);
				if (e && e.startTimestamp > r) break;
			}
			let e = o.reader.requestSliceRange(h, 8, 16);
			if (e instanceof Promise && (e = await e), !e) break;
			let n = h, a = Qn(e);
			if (!a) break;
			if (a.name === "moof") {
				s = await o.readFragment(n);
				let { sampleIndex: e, correctSampleFound: r } = t(s);
				if (r) return this.fetchPacketInFragment(s, e, i);
				e !== -1 && (c = s, l = e);
			}
			h = n + a.totalSize;
		}
		if (d && (!c || c.moofOffset < d.moofOffset)) {
			let e = this.internalTrack.fragmentLookupTable[u - 1];
			a(!e || e.timestamp < d.timestamp);
			let n = e?.timestamp ?? -Infinity;
			return this.performFragmentedLookup(null, t, n, r, i);
		}
		return c ? this.fetchPacketInFragment(c, l, i) : null;
	}
}, _r = class extends gr {
	constructor(e) {
		super(e), this.decoderConfigPromise = null, this.internalTrack = e;
	}
	getType() {
		return "video";
	}
	getCodec() {
		return this.internalTrack.info.codec;
	}
	getCodedWidth() {
		return this.internalTrack.info.width;
	}
	getCodedHeight() {
		return this.internalTrack.info.height;
	}
	getSquarePixelWidth() {
		return this.internalTrack.info.squarePixelWidth;
	}
	getSquarePixelHeight() {
		return this.internalTrack.info.squarePixelHeight;
	}
	getRotation() {
		return this.internalTrack.rotation;
	}
	async getColorSpace() {
		return {
			primaries: this.internalTrack.info.colorSpace?.primaries,
			transfer: this.internalTrack.info.colorSpace?.transfer,
			matrix: this.internalTrack.info.colorSpace?.matrix,
			fullRange: this.internalTrack.info.colorSpace?.fullRange
		};
	}
	async canBeTransparent() {
		return !1;
	}
	async getDecoderConfig() {
		return this.internalTrack.info.codec ? this.decoderConfigPromise ??= (async () => {
			if (this.internalTrack.info.codec === "vp9" && !this.internalTrack.info.vp9CodecInfo) {
				let e = await this.getFirstPacket({});
				this.internalTrack.info.vp9CodecInfo = e && Dn(e.data);
			} else if (this.internalTrack.info.codec === "av1" && !this.internalTrack.info.av1CodecInfo) {
				let e = await this.getFirstPacket({});
				this.internalTrack.info.av1CodecInfo = e && kn(e.data);
			}
			let e = {
				codec: vt(this.internalTrack.info),
				codedWidth: this.internalTrack.info.width,
				codedHeight: this.internalTrack.info.height,
				description: this.internalTrack.info.codecDescription ?? void 0,
				colorSpace: this.internalTrack.info.colorSpace ?? void 0
			};
			return (this.internalTrack.info.width !== this.internalTrack.info.squarePixelWidth || this.internalTrack.info.height !== this.internalTrack.info.squarePixelHeight) && (e.displayAspectWidth = this.internalTrack.info.squarePixelWidth, e.displayAspectHeight = this.internalTrack.info.squarePixelHeight), e;
		})() : null;
	}
}, vr = class extends gr {
	constructor(e) {
		super(e), this.decoderConfig = null, this.internalTrack = e;
	}
	getType() {
		return "audio";
	}
	getCodec() {
		return this.internalTrack.info.codec;
	}
	getNumberOfChannels() {
		return this.internalTrack.info.numberOfChannels;
	}
	getSampleRate() {
		return this.internalTrack.info.sampleRate;
	}
	async getDecoderConfig() {
		return this.internalTrack.info.codec ? this.decoderConfig ??= {
			codec: bt(this.internalTrack.info),
			numberOfChannels: this.internalTrack.info.numberOfChannels,
			sampleRate: this.internalTrack.info.sampleRate,
			description: this.internalTrack.info.codecDescription ?? void 0
		} : null;
	}
}, yr = (e, t) => {
	if (e.presentationTimestamps) {
		let n = D(e.presentationTimestamps, t, (e) => e.presentationTimestamp);
		return n === -1 ? -1 : e.presentationTimestamps[n].sampleIndex;
	} else {
		let n = D(e.sampleTimingEntries, t, (e) => e.startDecodeTimestamp);
		if (n === -1) return -1;
		let r = e.sampleTimingEntries[n];
		return r.startIndex + Math.min(Math.floor((t - r.startDecodeTimestamp) / r.delta), r.count - 1);
	}
}, br = (e, t) => {
	if (!e.keySampleIndices) return yr(e, t);
	if (e.presentationTimestamps) {
		let n = D(e.presentationTimestamps, t, (e) => e.presentationTimestamp);
		if (n === -1) return -1;
		for (let t = n; t >= 0; t--) {
			let n = e.presentationTimestamps[t].sampleIndex;
			if (ie(e.keySampleIndices, n, (e) => e) !== -1) return n;
		}
		return -1;
	} else {
		let n = yr(e, t), r = D(e.keySampleIndices, n, (e) => e);
		return e.keySampleIndices[r] ?? -1;
	}
}, xr = (e, t) => {
	let n = D(e.sampleTimingEntries, t, (e) => e.startIndex), r = e.sampleTimingEntries[n];
	if (!r || r.startIndex + r.count <= t) return null;
	let i = r.startDecodeTimestamp + (t - r.startIndex) * r.delta, o = D(e.sampleCompositionTimeOffsets, t, (e) => e.startIndex), s = e.sampleCompositionTimeOffsets[o];
	s && t - s.startIndex < s.count && (i += s.offset);
	let c = e.sampleSizes[Math.min(t, e.sampleSizes.length - 1)], l = D(e.sampleToChunk, t, (e) => e.startSampleIndex), u = e.sampleToChunk[l];
	a(u);
	let d = u.startChunkIndex + Math.floor((t - u.startSampleIndex) / u.samplesPerChunk), f = e.chunkOffsets[d], p = u.startSampleIndex + (d - u.startChunkIndex) * u.samplesPerChunk, m = 0, h = f;
	if (e.sampleSizes.length === 1) h += c * (t - p), m += c * u.samplesPerChunk;
	else for (let n = p; n < p + u.samplesPerChunk; n++) {
		let r = e.sampleSizes[n];
		n < t && (h += r), m += r;
	}
	let g = r.delta;
	if (e.presentationTimestamps) {
		let n = e.presentationTimestampIndexMap[t];
		a(n !== void 0), n < e.presentationTimestamps.length - 1 && (g = e.presentationTimestamps[n + 1].presentationTimestamp - i);
	}
	return {
		presentationTimestamp: i,
		duration: g,
		sampleOffset: h,
		sampleSize: c,
		chunkOffset: f,
		chunkSize: m,
		isKeyFrame: e.keySampleIndices ? ie(e.keySampleIndices, t, (e) => e) !== -1 : !0
	};
}, Sr = (e, t) => {
	if (!e.keySampleIndices) return t + 1;
	let n = D(e.keySampleIndices, t, (e) => e);
	return e.keySampleIndices[n + 1] ?? -1;
}, Cr = (e, t) => {
	e.startTimestamp += t, e.endTimestamp += t;
	for (let n of e.samples) n.presentationTimestamp += t;
	for (let n of e.presentationTimestamps) n.presentationTimestamp += t;
}, wr = (e) => {
	let [t, n] = e, r = Math.atan2(n, t);
	return Number.isFinite(r) ? 180 / Math.PI * r : 0;
}, Tr = (e) => e.sampleSizes.length === 0, Er = (e) => e.currentFragmentState ? e.currentFragmentState.encryptionAuxInfo ??= {
	defaultSampleInfoSize: 0,
	sampleSizes: null,
	sampleCount: 0,
	offset: null,
	resolved: null
} : e.encryptionAuxInfo ??= {
	defaultSampleInfoSize: 0,
	sampleSizes: null,
	sampleCount: 0,
	offset: null,
	resolved: null
}, Dr = async (e, t, n) => {
	if (n.resolved) return n.resolved;
	if (n.offset === null || n.sampleCount === 0) throw Error("Incomplete saiz/saio info; cannot resolve encryption data.");
	let r = 0;
	if (n.defaultSampleInfoSize > 0) r = n.defaultSampleInfoSize * n.sampleCount;
	else {
		a(n.sampleSizes);
		for (let e = 0; e < n.sampleCount; e++) r += n.sampleSizes[e];
	}
	let i = e.requestSlice(n.offset, r);
	if (i instanceof Promise && (i = await i), !i) throw Error("Failed to read auxiliary encryption info.");
	let o = t.defaultPerSampleIvSize;
	a(o !== null);
	let s = [];
	for (let e = 0; e < n.sampleCount; e++) {
		let r = n.defaultSampleInfoSize > 0 ? n.defaultSampleInfoSize : n.sampleSizes[e], a = /* @__PURE__ */ new Uint8Array(16);
		o > 0 ? a.set(U(i, o), 0) : a.set(t.defaultConstantIv, 0);
		let c = null;
		if (r > o) {
			let e = Ks(i);
			c = [];
			for (let t = 0; t < e; t++) {
				let e = Ks(i), t = G(i);
				c.push({
					clearLen: e,
					protectedLen: t
				});
			}
		}
		s.push({
			iv: a,
			subsamples: c
		});
	}
	return n.resolved = s, s;
}, Or = async (e, t, n, r) => {
	a(e.encryptionInfo);
	let i = e.encryptionInfo;
	a(i.defaultKid !== null);
	let o = i.defaultKid, s, c = e.demuxer.decryptionKeyCache.get(o);
	if (c) s = await c;
	else {
		if (!e.demuxer.input._formatOptions.isobmff?.resolveKeyId) throw Error("Encrypted media samples encountered. To decrypt them, please provide a callback for InputOptions.formatOptions.isobmff.resolveKeyId.");
		let t = (async () => {
			let t = e.demuxer.psshBoxes;
			if (r) {
				t = [...t, ...r.psshBoxes].filter((e) => e.keyIds === null || e.keyIds.includes(o));
				for (let e = 0; e < t.length - 1; e++) for (let n = e + 1; n < t.length; n++) Zn(t[e], t[n]) && (t.splice(n, 1), n--);
			}
			let n = await e.demuxer.input._formatOptions.isobmff.resolveKeyId({
				keyId: o,
				psshBoxes: t
			});
			if (!(typeof n == "string" && n.length === 32 && E.test(n) || n instanceof Uint8Array && n.byteLength === 16)) throw TypeError("resolveKeyId must return a 32-character hex string or a 16-byte Uint8Array containing the decryption key.");
			return n instanceof Uint8Array ? n : ne(n);
		})();
		e.demuxer.decryptionKeyCache.set(o, t), s = await t;
	}
	return i.scheme === "cenc" || i.scheme === "cens" ? kr(s, i, t, n) : Ar(s, i, t, n);
}, kr = async (e, t, n, r) => {
	let i = /* @__PURE__ */ new Uint8Array(16);
	i.set(n.iv, 0);
	let o = await crypto.subtle.importKey("raw", e, { name: "AES-CTR" }, !1, ["decrypt"]), s = async (e) => {
		let t = await crypto.subtle.decrypt({
			name: "AES-CTR",
			counter: i,
			length: 64
		}, o, e);
		return new Uint8Array(t);
	};
	if (!n.subsamples) return s(r);
	a(t.defaultCryptByteBlock !== null && t.defaultSkipByteBlock !== null);
	let c = jr(n.subsamples, t.defaultCryptByteBlock, t.defaultSkipByteBlock), l = 0;
	for (let e of c) for (let t of e.perSubsample) l += t.length;
	let u = new Uint8Array(l), d = 0;
	for (let e of c) for (let t of e.perSubsample) u.set(r.subarray(t.offset, t.offset + t.length), d), d += t.length;
	let f = await s(u), p = new Uint8Array(r), m = 0;
	for (let e of c) for (let t of e.perSubsample) p.set(f.subarray(m, m + t.length), t.offset), m += t.length;
	return p;
}, Ar = (e, t, n, r) => {
	let i = new pr();
	i.init({
		key: e,
		iv: n.iv
	});
	let o = t.defaultCryptByteBlock, s = t.defaultSkipByteBlock;
	if (a(o !== null && s !== null), !n.subsamples) {
		let e = new Uint8Array(r), t = Math.floor(r.length / 16);
		for (let n = 0; n < t; n++) {
			let t = n * 16;
			i.in.set(r.subarray(t, t + 16)), i.decrypt(), e.set(i.out, t);
		}
		return e;
	}
	if (o === 0 && s === 0) throw Error("cbcs with subsamples requires pattern encryption.");
	let c = new Uint8Array(r), l = jr(n.subsamples, o, s), u = new DataView(n.iv.buffer, n.iv.byteOffset, 16);
	for (let e of l) {
		i.iv[0] = u.getUint32(0, !1), i.iv[1] = u.getUint32(4, !1), i.iv[2] = u.getUint32(8, !1), i.iv[3] = u.getUint32(12, !1);
		for (let t of e.perSubsample) {
			let e = t.length / 16;
			for (let n = 0; n < e; n++) {
				let e = t.offset + n * 16;
				i.in.set(r.subarray(e, e + 16)), i.decrypt(), c.set(i.out, e);
			}
		}
	}
	return c;
}, jr = (e, t, n) => {
	let r = [], i = t !== 0 || n !== 0, a = 0;
	for (let o of e) {
		a += o.clearLen;
		let e = [];
		if (!i) o.protectedLen > 0 && e.push({
			offset: a,
			length: o.protectedLen
		}), a += o.protectedLen;
		else {
			let r = o.protectedLen, i = a;
			for (; r > 0 && !(r < 16 * t);) {
				let a = 16 * t;
				e.push({
					offset: i,
					length: a
				}), i += a, r -= a;
				let o = Math.min(16 * n, r);
				i += o, r -= o;
			}
			a += o.protectedLen;
		}
		r.push({ perSubsample: e });
	}
	return r;
}, Mr = class {
	constructor(e) {
		this.value = e;
	}
}, Nr = class {
	constructor(e) {
		this.value = e;
	}
}, Pr = class {
	constructor(e) {
		this.value = e;
	}
}, Fr = class {
	constructor(e) {
		this.value = e;
	}
}, B;
(function(e) {
	e[e.EBML = 440786851] = "EBML", e[e.EBMLVersion = 17030] = "EBMLVersion", e[e.EBMLReadVersion = 17143] = "EBMLReadVersion", e[e.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", e[e.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", e[e.DocType = 17026] = "DocType", e[e.DocTypeVersion = 17031] = "DocTypeVersion", e[e.DocTypeReadVersion = 17029] = "DocTypeReadVersion", e[e.Void = 236] = "Void", e[e.Segment = 408125543] = "Segment", e[e.SeekHead = 290298740] = "SeekHead", e[e.Seek = 19899] = "Seek", e[e.SeekID = 21419] = "SeekID", e[e.SeekPosition = 21420] = "SeekPosition", e[e.Duration = 17545] = "Duration", e[e.Info = 357149030] = "Info", e[e.TimestampScale = 2807729] = "TimestampScale", e[e.MuxingApp = 19840] = "MuxingApp", e[e.WritingApp = 22337] = "WritingApp", e[e.Tracks = 374648427] = "Tracks", e[e.TrackEntry = 174] = "TrackEntry", e[e.TrackNumber = 215] = "TrackNumber", e[e.TrackUID = 29637] = "TrackUID", e[e.TrackType = 131] = "TrackType", e[e.FlagEnabled = 185] = "FlagEnabled", e[e.FlagDefault = 136] = "FlagDefault", e[e.FlagForced = 21930] = "FlagForced", e[e.FlagOriginal = 21934] = "FlagOriginal", e[e.FlagHearingImpaired = 21931] = "FlagHearingImpaired", e[e.FlagVisualImpaired = 21932] = "FlagVisualImpaired", e[e.FlagCommentary = 21935] = "FlagCommentary", e[e.FlagLacing = 156] = "FlagLacing", e[e.Name = 21358] = "Name", e[e.Language = 2274716] = "Language", e[e.LanguageBCP47 = 2274717] = "LanguageBCP47", e[e.CodecID = 134] = "CodecID", e[e.CodecPrivate = 25506] = "CodecPrivate", e[e.CodecDelay = 22186] = "CodecDelay", e[e.SeekPreRoll = 22203] = "SeekPreRoll", e[e.DefaultDuration = 2352003] = "DefaultDuration", e[e.Video = 224] = "Video", e[e.PixelWidth = 176] = "PixelWidth", e[e.PixelHeight = 186] = "PixelHeight", e[e.DisplayWidth = 21680] = "DisplayWidth", e[e.DisplayHeight = 21690] = "DisplayHeight", e[e.DisplayUnit = 21682] = "DisplayUnit", e[e.AlphaMode = 21440] = "AlphaMode", e[e.Audio = 225] = "Audio", e[e.SamplingFrequency = 181] = "SamplingFrequency", e[e.Channels = 159] = "Channels", e[e.BitDepth = 25188] = "BitDepth", e[e.SimpleBlock = 163] = "SimpleBlock", e[e.BlockGroup = 160] = "BlockGroup", e[e.Block = 161] = "Block", e[e.BlockAdditions = 30113] = "BlockAdditions", e[e.BlockMore = 166] = "BlockMore", e[e.BlockAdditional = 165] = "BlockAdditional", e[e.BlockAddID = 238] = "BlockAddID", e[e.BlockDuration = 155] = "BlockDuration", e[e.ReferenceBlock = 251] = "ReferenceBlock", e[e.Cluster = 524531317] = "Cluster", e[e.Timestamp = 231] = "Timestamp", e[e.Cues = 475249515] = "Cues", e[e.CuePoint = 187] = "CuePoint", e[e.CueTime = 179] = "CueTime", e[e.CueTrackPositions = 183] = "CueTrackPositions", e[e.CueTrack = 247] = "CueTrack", e[e.CueClusterPosition = 241] = "CueClusterPosition", e[e.Colour = 21936] = "Colour", e[e.MatrixCoefficients = 21937] = "MatrixCoefficients", e[e.TransferCharacteristics = 21946] = "TransferCharacteristics", e[e.Primaries = 21947] = "Primaries", e[e.Range = 21945] = "Range", e[e.Projection = 30320] = "Projection", e[e.ProjectionType = 30321] = "ProjectionType", e[e.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", e[e.Attachments = 423732329] = "Attachments", e[e.AttachedFile = 24999] = "AttachedFile", e[e.FileDescription = 18046] = "FileDescription", e[e.FileName = 18030] = "FileName", e[e.FileMediaType = 18016] = "FileMediaType", e[e.FileData = 18012] = "FileData", e[e.FileUID = 18094] = "FileUID", e[e.Chapters = 272869232] = "Chapters", e[e.Tags = 307544935] = "Tags", e[e.Tag = 29555] = "Tag", e[e.Targets = 25536] = "Targets", e[e.TargetTypeValue = 26826] = "TargetTypeValue", e[e.TargetType = 25546] = "TargetType", e[e.TagTrackUID = 25541] = "TagTrackUID", e[e.TagEditionUID = 25545] = "TagEditionUID", e[e.TagChapterUID = 25540] = "TagChapterUID", e[e.TagAttachmentUID = 25542] = "TagAttachmentUID", e[e.SimpleTag = 26568] = "SimpleTag", e[e.TagName = 17827] = "TagName", e[e.TagLanguage = 17530] = "TagLanguage", e[e.TagString = 17543] = "TagString", e[e.TagBinary = 17541] = "TagBinary", e[e.ContentEncodings = 28032] = "ContentEncodings", e[e.ContentEncoding = 25152] = "ContentEncoding", e[e.ContentEncodingOrder = 20529] = "ContentEncodingOrder", e[e.ContentEncodingScope = 20530] = "ContentEncodingScope", e[e.ContentCompression = 20532] = "ContentCompression", e[e.ContentCompAlgo = 16980] = "ContentCompAlgo", e[e.ContentCompSettings = 16981] = "ContentCompSettings", e[e.ContentEncryption = 20533] = "ContentEncryption";
})(B ||= {});
var Ir = [B.EBML, B.Segment], Lr = [
	B.SeekHead,
	B.Info,
	B.Cluster,
	B.Tracks,
	B.Cues,
	B.Attachments,
	B.Chapters,
	B.Tags
], Rr = [...Ir, ...Lr], zr = (e) => e < 256 ? 1 : e < 65536 ? 2 : e < 1 << 24 ? 3 : e < 2 ** 32 ? 4 : e < 2 ** 40 ? 5 : 6, Br = (e) => e < 1n << 8n ? 1 : e < 1n << 16n ? 2 : e < 1n << 24n ? 3 : e < 1n << 32n ? 4 : e < 1n << 40n ? 5 : e < 1n << 48n ? 6 : e < 1n << 56n ? 7 : 8, Vr = (e) => e >= -64 && e < 64 ? 1 : e >= -8192 && e < 8192 ? 2 : e >= -1048576 && e < 1 << 20 ? 3 : e >= -134217728 && e < 1 << 27 ? 4 : e >= -(2 ** 34) && e < 2 ** 34 ? 5 : 6, Hr = (e) => {
	if (e < 127) return 1;
	if (e < 16383) return 2;
	if (e < (1 << 21) - 1) return 3;
	if (e < (1 << 28) - 1) return 4;
	if (e < 2 ** 35 - 1) return 5;
	if (e < 2 ** 42 - 1) return 6;
	throw Error("EBML varint size not supported " + e);
}, Ur = class {
	constructor(e) {
		this.writer = e, this.helper = /* @__PURE__ */ new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = /* @__PURE__ */ new WeakMap(), this.dataOffsets = /* @__PURE__ */ new WeakMap();
	}
	writeByte(e) {
		this.helperView.setUint8(0, e), this.writer.write(this.helper.subarray(0, 1));
	}
	writeFloat32(e) {
		this.helperView.setFloat32(0, e, !1), this.writer.write(this.helper.subarray(0, 4));
	}
	writeFloat64(e) {
		this.helperView.setFloat64(0, e, !1), this.writer.write(this.helper);
	}
	writeUnsignedInt(e, t = zr(e)) {
		let n = 0;
		switch (t) {
			case 6: this.helperView.setUint8(n++, e / 2 ** 40 | 0);
			case 5: this.helperView.setUint8(n++, e / 2 ** 32 | 0);
			case 4: this.helperView.setUint8(n++, e >> 24);
			case 3: this.helperView.setUint8(n++, e >> 16);
			case 2: this.helperView.setUint8(n++, e >> 8);
			case 1:
				this.helperView.setUint8(n++, e);
				break;
			default: throw Error("Bad unsigned int size " + t);
		}
		this.writer.write(this.helper.subarray(0, n));
	}
	writeUnsignedBigInt(e, t = Br(e)) {
		let n = 0;
		for (let r = t - 1; r >= 0; r--) this.helperView.setUint8(n++, Number(e >> BigInt(r * 8) & 255n));
		this.writer.write(this.helper.subarray(0, n));
	}
	writeSignedInt(e, t = Vr(e)) {
		e < 0 && (e += 2 ** (t * 8)), this.writeUnsignedInt(e, t);
	}
	writeVarInt(e, t = Hr(e)) {
		let n = 0;
		switch (t) {
			case 1:
				this.helperView.setUint8(n++, 128 | e);
				break;
			case 2:
				this.helperView.setUint8(n++, 64 | e >> 8), this.helperView.setUint8(n++, e);
				break;
			case 3:
				this.helperView.setUint8(n++, 32 | e >> 16), this.helperView.setUint8(n++, e >> 8), this.helperView.setUint8(n++, e);
				break;
			case 4:
				this.helperView.setUint8(n++, 16 | e >> 24), this.helperView.setUint8(n++, e >> 16), this.helperView.setUint8(n++, e >> 8), this.helperView.setUint8(n++, e);
				break;
			case 5:
				this.helperView.setUint8(n++, 8 | e / 2 ** 32 & 7), this.helperView.setUint8(n++, e >> 24), this.helperView.setUint8(n++, e >> 16), this.helperView.setUint8(n++, e >> 8), this.helperView.setUint8(n++, e);
				break;
			case 6:
				this.helperView.setUint8(n++, 4 | e / 2 ** 40 & 3), this.helperView.setUint8(n++, e / 2 ** 32 | 0), this.helperView.setUint8(n++, e >> 24), this.helperView.setUint8(n++, e >> 16), this.helperView.setUint8(n++, e >> 8), this.helperView.setUint8(n++, e);
				break;
			default: throw Error("Bad EBML varint size " + t);
		}
		this.writer.write(this.helper.subarray(0, n));
	}
	writeAsciiString(e) {
		this.writer.write(new Uint8Array(e.split("").map((e) => e.charCodeAt(0))));
	}
	writeEBML(e) {
		if (e !== null) if (e instanceof Uint8Array) this.writer.write(e);
		else if (Array.isArray(e)) for (let t of e) this.writeEBML(t);
		else if (this.offsets.set(e, this.writer.getPos()), this.writeUnsignedInt(e.id), Array.isArray(e.data)) {
			let t = this.writer.getPos(), n = e.size === -1 ? 1 : e.size ?? 4;
			e.size === -1 ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + n);
			let r = this.writer.getPos();
			if (this.dataOffsets.set(e, r), this.writeEBML(e.data), e.size !== -1) {
				let e = this.writer.getPos() - r, i = this.writer.getPos();
				this.writer.seek(t), this.writeVarInt(e, n), this.writer.seek(i);
			}
		} else if (typeof e.data == "number") {
			let t = e.size ?? zr(e.data);
			this.writeVarInt(t), this.writeUnsignedInt(e.data, t);
		} else if (typeof e.data == "bigint") {
			let t = e.size ?? Br(e.data);
			this.writeVarInt(t), this.writeUnsignedBigInt(e.data, t);
		} else if (typeof e.data == "string") this.writeVarInt(e.data.length), this.writeAsciiString(e.data);
		else if (e.data instanceof Uint8Array) this.writeVarInt(e.data.byteLength, e.size), this.writer.write(e.data);
		else if (e.data instanceof Mr) this.writeVarInt(4), this.writeFloat32(e.data.value);
		else if (e.data instanceof Nr) this.writeVarInt(8), this.writeFloat64(e.data.value);
		else if (e.data instanceof Pr) {
			let t = e.size ?? Vr(e.data.value);
			this.writeVarInt(t), this.writeSignedInt(e.data.value, t);
		} else if (e.data instanceof Fr) {
			let t = h.encode(e.data.value);
			this.writeVarInt(t.length), this.writer.write(t);
		} else A(e.data);
	}
}, Wr = (e) => {
	if (e.remainingLength < 1) return null;
	let t = W(e);
	if (e.skip(-1), t === 0) return null;
	let n = 1, r = 128;
	for (; (t & r) === 0;) n++, r >>= 1;
	return e.remainingLength < n ? null : n;
}, Gr = (e) => {
	if (e.remainingLength < 1) return null;
	let t = W(e);
	if (t === 0) return null;
	let n = 1, r = 128;
	for (; (t & r) === 0;) n++, r >>= 1;
	if (e.remainingLength < n - 1) return null;
	let i = t & r - 1;
	for (let t = 1; t < n; t++) i *= 256, i += W(e);
	return i;
}, V = (e, t) => {
	if (t < 1 || t > 8) throw Error("Bad unsigned int size " + t);
	let n = 0;
	for (let r = 0; r < t; r++) n *= 256, n += W(e);
	return n;
}, Kr = (e, t) => {
	if (t < 1) throw Error("Bad unsigned int size " + t);
	let n = 0n;
	for (let r = 0; r < t; r++) n <<= 8n, n += BigInt(W(e));
	return n;
}, qr = (e) => {
	let t = Wr(e);
	return t === null || e.remainingLength < t ? null : V(e, t);
}, Jr = (e) => {
	if (e.remainingLength < 1) return null;
	if (W(e) === 255) return;
	e.skip(-1);
	let t = Gr(e);
	if (t === null) return null;
	if (t !== 72057594037927940) return t;
}, Yr = (e) => {
	a(e.remainingLength >= 2);
	let t = qr(e);
	if (t === null) return null;
	let n = Jr(e);
	return n === null ? null : {
		id: t,
		size: n
	};
}, Xr = (e, t) => {
	let n = U(e, t), r = 0;
	for (; r < t && n[r] !== 0;) r += 1;
	return String.fromCharCode(...n.subarray(0, r));
}, Zr = (e, t) => {
	let n = U(e, t), r = 0;
	for (; r < t && n[r] !== 0;) r += 1;
	return m.decode(n.subarray(0, r));
}, Qr = (e, t) => {
	if (t === 0) return 0;
	if (t !== 4 && t !== 8) throw Error("Bad float size " + t);
	return t === 4 ? rc(e) : ic(e);
}, $r = async (e, t, n, r) => {
	let i = new Set(n), a = t;
	for (; r === null || a < r;) {
		let t = e.requestSliceRange(a, 2, 16);
		if (t instanceof Promise && (t = await t), !t) break;
		let n = Yr(t);
		if (!n) break;
		if (i.has(n.id)) return {
			pos: a,
			found: !0
		};
		ni(n.size), a = t.filePos + n.size;
	}
	return {
		pos: r !== null && r > a ? r : a,
		found: !1
	};
}, ei = async (e, t, n, r) => {
	let i = 2 ** 16, a = new Set(n), o = t;
	for (; o < r;) {
		let t = e.requestSliceRange(o, 0, Math.min(i, r - o));
		if (t instanceof Promise && (t = await t), !t || t.length < 8) break;
		for (let e = 0; e < t.length - 8; e++) {
			t.filePos = o;
			let e = qr(t);
			if (e !== null && a.has(e)) return o;
			o++;
		}
	}
	return null;
}, ti = {
	avc: "V_MPEG4/ISO/AVC",
	hevc: "V_MPEGH/ISO/HEVC",
	vp8: "V_VP8",
	vp9: "V_VP9",
	av1: "V_AV1",
	aac: "A_AAC",
	mp3: "A_MPEG/L3",
	opus: "A_OPUS",
	vorbis: "A_VORBIS",
	flac: "A_FLAC",
	ac3: "A_AC3",
	eac3: "A_EAC3",
	"pcm-u8": "A_PCM/INT/LIT",
	"pcm-s16": "A_PCM/INT/LIT",
	"pcm-s16be": "A_PCM/INT/BIG",
	"pcm-s24": "A_PCM/INT/LIT",
	"pcm-s24be": "A_PCM/INT/BIG",
	"pcm-s32": "A_PCM/INT/LIT",
	"pcm-s32be": "A_PCM/INT/BIG",
	"pcm-f32": "A_PCM/FLOAT/IEEE",
	"pcm-f64": "A_PCM/FLOAT/IEEE",
	webvtt: "S_TEXT/WEBVTT"
};
function ni(e) {
	if (e === void 0) throw Error("Undefined element size is used in a place where it is not supported.");
}
//#endregion
//#region node_modules/mediabunny/dist/modules/src/matroska/matroska-misc.js
var ri = (e) => {
	let t = (e.hasVideo ? "video/" : e.hasAudio ? "audio/" : "application/") + (e.isWebM ? "webm" : "x-matroska");
	if (e.codecStrings.length > 0) {
		let n = [...new Set(e.codecStrings.filter(Boolean))];
		t += `; codecs="${n.join(", ")}"`;
	}
	return t;
}, ii;
(function(e) {
	e[e.None = 0] = "None", e[e.Xiph = 1] = "Xiph", e[e.FixedSize = 2] = "FixedSize", e[e.Ebml = 3] = "Ebml";
})(ii ||= {});
var ai;
(function(e) {
	e[e.Block = 1] = "Block", e[e.Private = 2] = "Private", e[e.Next = 4] = "Next";
})(ai ||= {});
var oi;
(function(e) {
	e[e.Zlib = 0] = "Zlib", e[e.Bzlib = 1] = "Bzlib", e[e.lzo1x = 2] = "lzo1x", e[e.HeaderStripping = 3] = "HeaderStripping";
})(oi ||= {});
var si = [
	{
		id: B.SeekHead,
		flag: "seekHeadSeen"
	},
	{
		id: B.Info,
		flag: "infoSeen"
	},
	{
		id: B.Tracks,
		flag: "tracksSeen"
	},
	{
		id: B.Cues,
		flag: "cuesSeen"
	}
], ci = 10 * 2 ** 20, li = class extends qn {
	constructor(e) {
		super(e), this.readMetadataPromise = null, this.segments = [], this.currentSegment = null, this.currentTrack = null, this.currentCluster = null, this.currentBlock = null, this.currentBlockAdditional = null, this.currentCueTime = null, this.currentDecodingInstruction = null, this.currentTagTargetIsMovie = !0, this.currentSimpleTagName = null, this.currentAttachedFile = null, this.isWebM = !1, this.reader = e._reader;
	}
	async getTrackBackings() {
		return await this.readMetadata(), this.segments.flatMap((e) => e.tracks.map((e) => e.trackBacking));
	}
	async getMimeType() {
		await this.readMetadata();
		let e = await this.getTrackBackings(), t = await Promise.all(e.map((e) => e.getDecoderConfig().then((e) => e?.codec ?? null)));
		return ri({
			isWebM: this.isWebM,
			hasVideo: this.segments.some((e) => e.tracks.some((e) => e.info?.type === "video")),
			hasAudio: this.segments.some((e) => e.tracks.some((e) => e.info?.type === "audio")),
			codecStrings: t.filter(Boolean)
		});
	}
	async getMetadataTags() {
		await this.readMetadata();
		for (let e of this.segments) e.metadataTagsCollected ||= (this.reader.fileSize !== null && await this.loadSegmentMetadata(e), !0);
		let e = {};
		for (let t of this.segments) e = {
			...e,
			...t.metadataTags
		};
		return e;
	}
	readMetadata() {
		return this.readMetadataPromise ??= (async () => {
			let e = 0;
			for (;;) {
				let t = this.reader.requestSliceRange(e, 2, 16);
				if (t instanceof Promise && (t = await t), !t) break;
				let n = Yr(t);
				if (!n) break;
				let r = n.id, i = n.size, a = t.filePos;
				if (r === B.EBML) {
					ni(i);
					let e = this.reader.requestSlice(a, i);
					if (e instanceof Promise && (e = await e), !e) break;
					this.readContiguousElements(e);
				} else if (r === B.Segment) {
					if (await this.readSegment(a, i), i === void 0 || this.reader.fileSize === null) break;
				} else if (r === B.Cluster) {
					if (this.reader.fileSize === null) break;
					i === void 0 && (i = (await $r(this.reader, a, Rr, this.reader.fileSize)).pos - a);
					let e = s(this.segments);
					e && (e.elementEndPos = a + i);
				}
				ni(i), e = a + i;
			}
		})();
	}
	async readSegment(e, t) {
		this.currentSegment = {
			seekHeadSeen: !1,
			infoSeen: !1,
			tracksSeen: !1,
			cuesSeen: !1,
			tagsSeen: !1,
			attachmentsSeen: !1,
			timestampScale: -1,
			timestampFactor: -1,
			duration: -1,
			seekEntries: [],
			tracks: [],
			cuePoints: [],
			dataStartPos: e,
			elementEndPos: t === void 0 ? null : e + t,
			clusterSeekStartPos: e,
			lastReadCluster: null,
			metadataTags: {},
			metadataTagsCollected: !1
		}, this.segments.push(this.currentSegment);
		let n = e;
		for (; this.currentSegment.elementEndPos === null || n < this.currentSegment.elementEndPos;) {
			let e = this.reader.requestSliceRange(n, 2, 16);
			if (e instanceof Promise && (e = await e), !e) break;
			let t = n, r = Yr(e);
			if (!r || !Lr.includes(r.id) && r.id !== B.Void) {
				let e = await ei(this.reader, t, Lr, Math.min(this.currentSegment.elementEndPos ?? Infinity, t + ci));
				if (e) {
					n = e;
					continue;
				} else break;
			}
			let { id: i, size: a } = r, o = e.filePos, s = si.findIndex((e) => e.id === i);
			if (s !== -1) {
				let e = si[s].flag;
				this.currentSegment[e] = !0, ni(a);
				let t = this.reader.requestSlice(o, a);
				t instanceof Promise && (t = await t), t && this.readContiguousElements(t);
			} else if (i === B.Tags || i === B.Attachments) {
				i === B.Tags ? this.currentSegment.tagsSeen = !0 : this.currentSegment.attachmentsSeen = !0, ni(a);
				let e = this.reader.requestSlice(o, a);
				e instanceof Promise && (e = await e), e && this.readContiguousElements(e);
			} else if (i === B.Cluster) {
				this.currentSegment.clusterSeekStartPos = t;
				break;
			}
			if (a === void 0) break;
			n = o + a;
		}
		if (this.currentSegment.seekEntries.sort((e, t) => e.segmentPosition - t.segmentPosition), this.reader.fileSize !== null) for (let t of this.currentSegment.seekEntries) {
			let n = si.find((e) => e.id === t.id);
			if (!n || this.currentSegment[n.flag]) continue;
			let r = this.reader.requestSliceRange(e + t.segmentPosition, 2, 16);
			if (r instanceof Promise && (r = await r), !r) continue;
			let i = Yr(r);
			if (!i) continue;
			let { id: a, size: o } = i;
			if (a !== n.id) continue;
			ni(o), this.currentSegment[n.flag] = !0;
			let s = this.reader.requestSlice(r.filePos, o);
			s instanceof Promise && (s = await s), s && this.readContiguousElements(s);
		}
		this.currentSegment.timestampScale === -1 && (this.currentSegment.timestampScale = 1e6, this.currentSegment.timestampFactor = 1e9 / 1e6);
		for (let e of this.currentSegment.tracks) e.defaultDurationNs !== null && (e.defaultDuration = this.currentSegment.timestampFactor * e.defaultDurationNs / 1e9);
		let r = new Map(this.currentSegment.tracks.map((e) => [e.id, e]));
		for (let e of this.currentSegment.cuePoints) {
			let t = r.get(e.trackId);
			t && t.cuePoints.push(e);
		}
		for (let e of this.currentSegment.tracks) {
			e.cuePoints.sort((e, t) => e.time - t.time);
			for (let t = 0; t < e.cuePoints.length - 1; t++) {
				let n = e.cuePoints[t], r = e.cuePoints[t + 1];
				n.time === r.time && (e.cuePoints.splice(t + 1, 1), t--);
			}
		}
		let i = null, a = -Infinity;
		for (let e of this.currentSegment.tracks) e.cuePoints.length > a && (a = e.cuePoints.length, i = e);
		for (let e of this.currentSegment.tracks) e.cuePoints.length === 0 && (e.cuePoints = i.cuePoints);
		this.currentSegment = null;
	}
	async readCluster(e, t) {
		if (t.lastReadCluster?.elementStartPos === e) return t.lastReadCluster;
		let n = this.reader.requestSliceRange(e, 2, 16);
		n instanceof Promise && (n = await n), a(n);
		let r = e, i = Yr(n);
		a(i);
		let o = i.id;
		a(o === B.Cluster);
		let c = i.size, l = n.filePos;
		c === void 0 && (c = (await $r(this.reader, l, Rr, t.elementEndPos)).pos - l);
		let u = this.reader.requestSlice(l, c);
		u instanceof Promise && (u = await u);
		let d = {
			segment: t,
			elementStartPos: r,
			elementEndPos: l + c,
			dataStartPos: l,
			timestamp: -1,
			trackData: /* @__PURE__ */ new Map()
		};
		this.currentCluster = d, u && (d.elementEndPos = this.readContiguousElements(u, Rr));
		for (let [, e] of d.trackData) {
			let t = e.track;
			a(e.blocks.length > 0);
			let n = !1;
			for (let t = 0; t < e.blocks.length; t++) {
				let r = e.blocks[t];
				r.timestamp += d.timestamp, n ||= r.lacing !== ii.None;
			}
			e.presentationTimestamps = e.blocks.map((e, t) => ({
				timestamp: e.timestamp,
				blockIndex: t
			})).sort((e, t) => e.timestamp - t.timestamp);
			for (let n = 0; n < e.presentationTimestamps.length; n++) {
				let r = e.presentationTimestamps[n], i = e.blocks[r.blockIndex];
				e.firstKeyFrameTimestamp === null && i.isKeyFrame && (e.firstKeyFrameTimestamp = i.timestamp), n < e.presentationTimestamps.length - 1 ? i.duration = e.presentationTimestamps[n + 1].timestamp - i.timestamp : i.duration === 0 && t.defaultDuration != null && i.lacing === ii.None && (i.duration = t.defaultDuration);
			}
			n && (this.expandLacedBlocks(e.blocks, t), e.presentationTimestamps = e.blocks.map((e, t) => ({
				timestamp: e.timestamp,
				blockIndex: t
			})).sort((e, t) => e.timestamp - t.timestamp));
			let i = e.blocks[e.presentationTimestamps[0].blockIndex], o = e.blocks[s(e.presentationTimestamps).blockIndex];
			e.startTimestamp = i.timestamp, e.endTimestamp = o.timestamp + o.duration;
			let c = D(t.clusterPositionCache, e.startTimestamp, (e) => e.startTimestamp);
			(c === -1 || t.clusterPositionCache[c].elementStartPos !== r) && t.clusterPositionCache.splice(c + 1, 0, {
				elementStartPos: d.elementStartPos,
				startTimestamp: e.startTimestamp
			});
		}
		return t.lastReadCluster = d, d;
	}
	getTrackDataInCluster(e, t) {
		let n = e.trackData.get(t);
		if (!n) {
			let r = e.segment.tracks.find((e) => e.id === t);
			if (!r) return null;
			n = {
				track: r,
				startTimestamp: 0,
				endTimestamp: 0,
				firstKeyFrameTimestamp: null,
				blocks: [],
				presentationTimestamps: []
			}, e.trackData.set(t, n);
		}
		return n;
	}
	expandLacedBlocks(e, t) {
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (r.lacing === ii.None) continue;
			r.decoded ||= (r.data = this.decodeBlockData(t, r.data), !0);
			let i = Us.tempFromBytes(r.data), o = [], s = W(i) + 1;
			switch (r.lacing) {
				case ii.Xiph:
					{
						let e = 0;
						for (let t = 0; t < s - 1; t++) {
							let t = 0;
							for (; i.bufferPos < i.length;) {
								let n = W(i);
								if (t += n, n < 255) {
									o.push(t), e += t;
									break;
								}
							}
						}
						o.push(i.length - (i.bufferPos + e));
					}
					break;
				case ii.FixedSize:
					{
						let e = i.length - 1, t = Math.floor(e / s);
						for (let e = 0; e < s; e++) o.push(t);
					}
					break;
				case ii.Ebml:
					{
						let e = Gr(i);
						a(e !== null);
						let t = e;
						o.push(t);
						let n = t;
						for (let e = 1; e < s - 1; e++) {
							let e = i.bufferPos, r = Gr(i);
							a(r !== null);
							let s = r - ((1 << (i.bufferPos - e) * 7 - 1) - 1);
							t += s, o.push(t), n += t;
						}
						o.push(i.length - (i.bufferPos + n));
					}
					break;
				default: a(!1);
			}
			a(o.length === s), e.splice(n, 1);
			let c = r.duration || s * (t.defaultDuration ?? 0);
			for (let t = 0; t < s; t++) {
				let a = o[t], l = U(i, a), u = r.timestamp + c * t / s, d = c / s;
				e.splice(n + t, 0, {
					timestamp: u,
					duration: d,
					isKeyFrame: r.isKeyFrame,
					data: l,
					lacing: ii.None,
					decoded: !0,
					mainAdditional: r.mainAdditional
				});
			}
			n += s, n--;
		}
	}
	async loadSegmentMetadata(e) {
		for (let t of e.seekEntries) {
			if (!(t.id === B.Tags && !e.tagsSeen) && !(t.id === B.Attachments && !e.attachmentsSeen)) continue;
			let n = this.reader.requestSliceRange(e.dataStartPos + t.segmentPosition, 2, 16);
			if (n instanceof Promise && (n = await n), !n) continue;
			let r = Yr(n);
			if (!r || r.id !== t.id) continue;
			let { size: i } = r;
			ni(i), a(!this.currentSegment), this.currentSegment = e;
			let o = this.reader.requestSlice(n.filePos, i);
			o instanceof Promise && (o = await o), o && this.readContiguousElements(o), this.currentSegment = null, t.id === B.Tags ? e.tagsSeen = !0 : t.id === B.Attachments && (e.attachmentsSeen = !0);
		}
	}
	readContiguousElements(e, t) {
		for (; e.remainingLength >= 2;) {
			let n = e.filePos;
			if (!this.traverseElement(e, t)) return n;
		}
		return e.filePos;
	}
	traverseElement(e, t) {
		let n = Yr(e);
		if (!n || t && t.includes(n.id)) return !1;
		let { id: r, size: s } = n, c = e.filePos;
		switch (ni(s), r) {
			case B.DocType:
				this.isWebM = Xr(e, s) === "webm";
				break;
			case B.Seek:
				{
					if (!this.currentSegment) break;
					let t = {
						id: -1,
						segmentPosition: -1
					};
					this.currentSegment.seekEntries.push(t), this.readContiguousElements(e.slice(c, s)), (t.id === -1 || t.segmentPosition === -1) && this.currentSegment.seekEntries.pop();
				}
				break;
			case B.SeekID:
				{
					let t = this.currentSegment?.seekEntries[this.currentSegment.seekEntries.length - 1];
					if (!t) break;
					t.id = V(e, s);
				}
				break;
			case B.SeekPosition:
				{
					let t = this.currentSegment?.seekEntries[this.currentSegment.seekEntries.length - 1];
					if (!t) break;
					t.segmentPosition = V(e, s);
				}
				break;
			case B.TimestampScale:
				if (!this.currentSegment) break;
				this.currentSegment.timestampScale = V(e, s), this.currentSegment.timestampFactor = 1e9 / this.currentSegment.timestampScale;
				break;
			case B.Duration:
				if (!this.currentSegment) break;
				this.currentSegment.duration = Qr(e, s);
				break;
			case B.TrackEntry:
				if (!this.currentSegment || (this.currentTrack = {
					id: -1,
					segment: this.currentSegment,
					demuxer: this,
					clusterPositionCache: [],
					cuePoints: [],
					disposition: {
						...tt,
						primary: !1
					},
					trackBacking: null,
					codecId: null,
					codecPrivate: null,
					defaultDuration: null,
					defaultDurationNs: null,
					name: null,
					languageCode: "eng",
					hasLanguageBcp47: !1,
					decodingInstructions: [],
					info: null
				}, this.readContiguousElements(e.slice(c, s)), !this.currentTrack)) break;
				if (this.currentTrack.decodingInstructions.some((e) => e.data?.type !== "decompress" || e.scope !== ai.Block || e.data.algorithm !== oi.HeaderStripping) && (i._warn(`Track #${this.currentTrack.id} has an unsupported content encoding; dropping.`), this.currentTrack = null), this.currentTrack && this.currentTrack.id !== -1 && this.currentTrack.codecId && this.currentTrack.info) {
					let e = this.currentTrack.codecId.indexOf("/"), t = e === -1 ? this.currentTrack.codecId : this.currentTrack.codecId.slice(0, e);
					if (this.currentTrack.info.type === "video" && this.currentTrack.info.width !== -1 && this.currentTrack.info.height !== -1) {
						if (this.currentTrack.info.squarePixelWidth = this.currentTrack.info.width, this.currentTrack.info.squarePixelHeight = this.currentTrack.info.height, this.currentTrack.info.displayWidth !== null && this.currentTrack.info.displayHeight !== null) {
							let e = this.currentTrack.info.displayWidth * this.currentTrack.info.height, t = this.currentTrack.info.displayHeight * this.currentTrack.info.width;
							e > 0 && t > 0 && (e > t ? this.currentTrack.info.squarePixelWidth = Math.round(this.currentTrack.info.width * e / t) : this.currentTrack.info.squarePixelHeight = Math.round(this.currentTrack.info.height * t / e));
						}
						this.currentTrack.codecId === ti.avc ? (this.currentTrack.info.codec = "avc", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : this.currentTrack.codecId === ti.hevc ? (this.currentTrack.info.codec = "hevc", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : t === ti.vp8 ? this.currentTrack.info.codec = "vp8" : t === ti.vp9 ? this.currentTrack.info.codec = "vp9" : t === ti.av1 && (this.currentTrack.info.codec = "av1");
						let e = this.currentTrack;
						this.currentTrack.trackBacking = new di(e), this.currentSegment.tracks.push(this.currentTrack);
					} else if (this.currentTrack.info.type === "audio") {
						t === ti.aac ? (this.currentTrack.info.codec = "aac", this.currentTrack.info.aacCodecInfo = {
							isMpeg2: this.currentTrack.codecId.includes("MPEG2"),
							objectType: null
						}, this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : this.currentTrack.codecId === ti.mp3 ? this.currentTrack.info.codec = "mp3" : t === ti.opus ? (this.currentTrack.info.codec = "opus", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate, this.currentTrack.info.sampleRate = xt) : t === ti.vorbis ? (this.currentTrack.info.codec = "vorbis", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : t === ti.flac ? (this.currentTrack.info.codec = "flac", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : t === ti.ac3 ? (this.currentTrack.info.codec = "ac3", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : t === ti.eac3 ? (this.currentTrack.info.codec = "eac3", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : this.currentTrack.codecId === "A_PCM/INT/LIT" ? this.currentTrack.info.bitDepth === 8 ? this.currentTrack.info.codec = "pcm-u8" : this.currentTrack.info.bitDepth === 16 ? this.currentTrack.info.codec = "pcm-s16" : this.currentTrack.info.bitDepth === 24 ? this.currentTrack.info.codec = "pcm-s24" : this.currentTrack.info.bitDepth === 32 && (this.currentTrack.info.codec = "pcm-s32") : this.currentTrack.codecId === "A_PCM/INT/BIG" ? this.currentTrack.info.bitDepth === 8 ? this.currentTrack.info.codec = "pcm-u8" : this.currentTrack.info.bitDepth === 16 ? this.currentTrack.info.codec = "pcm-s16be" : this.currentTrack.info.bitDepth === 24 ? this.currentTrack.info.codec = "pcm-s24be" : this.currentTrack.info.bitDepth === 32 && (this.currentTrack.info.codec = "pcm-s32be") : this.currentTrack.codecId === "A_PCM/FLOAT/IEEE" && (this.currentTrack.info.bitDepth === 32 ? this.currentTrack.info.codec = "pcm-f32" : this.currentTrack.info.bitDepth === 64 && (this.currentTrack.info.codec = "pcm-f64"));
						let e = this.currentTrack;
						this.currentTrack.trackBacking = new fi(e), this.currentSegment.tracks.push(this.currentTrack);
					}
				}
				this.currentTrack = null;
				break;
			case B.TrackNumber:
				if (!this.currentTrack) break;
				this.currentTrack.id = V(e, s);
				break;
			case B.TrackType:
				{
					if (!this.currentTrack) break;
					let t = V(e, s);
					t === 1 ? this.currentTrack.info = {
						type: "video",
						width: -1,
						height: -1,
						displayWidth: null,
						displayHeight: null,
						displayUnit: null,
						squarePixelWidth: -1,
						squarePixelHeight: -1,
						rotation: 0,
						codec: null,
						codecDescription: null,
						colorSpace: null,
						alphaMode: !1
					} : t === 2 && (this.currentTrack.info = {
						type: "audio",
						numberOfChannels: 1,
						sampleRate: 8e3,
						bitDepth: -1,
						codec: null,
						codecDescription: null,
						aacCodecInfo: null
					});
				}
				break;
			case B.FlagEnabled:
				if (!this.currentTrack) break;
				V(e, s) || (this.currentTrack = null);
				break;
			case B.FlagDefault:
				if (!this.currentTrack) break;
				this.currentTrack.disposition.default = !!V(e, s);
				break;
			case B.FlagForced:
				if (!this.currentTrack) break;
				this.currentTrack.disposition.forced = !!V(e, s);
				break;
			case B.FlagOriginal:
				if (!this.currentTrack) break;
				this.currentTrack.disposition.original = !!V(e, s);
				break;
			case B.FlagHearingImpaired:
				if (!this.currentTrack) break;
				this.currentTrack.disposition.hearingImpaired = !!V(e, s);
				break;
			case B.FlagVisualImpaired:
				if (!this.currentTrack) break;
				this.currentTrack.disposition.visuallyImpaired = !!V(e, s);
				break;
			case B.FlagCommentary:
				if (!this.currentTrack) break;
				this.currentTrack.disposition.commentary = !!V(e, s);
				break;
			case B.CodecID:
				if (!this.currentTrack) break;
				this.currentTrack.codecId = Xr(e, s);
				break;
			case B.CodecPrivate:
				if (!this.currentTrack) break;
				this.currentTrack.codecPrivate = U(e, s);
				break;
			case B.DefaultDuration:
				if (!this.currentTrack) break;
				this.currentTrack.defaultDurationNs = V(e, s);
				break;
			case B.Name:
				if (!this.currentTrack) break;
				this.currentTrack.name = Zr(e, s);
				break;
			case B.Language:
				if (!this.currentTrack || this.currentTrack.hasLanguageBcp47) break;
				this.currentTrack.languageCode = Xr(e, s), be(this.currentTrack.languageCode) || (this.currentTrack.languageCode = "und");
				break;
			case B.LanguageBCP47:
				{
					if (!this.currentTrack) break;
					let t = Xr(e, s).split("-")[0];
					t ? this.currentTrack.languageCode = t : this.currentTrack.languageCode = "und", this.currentTrack.hasLanguageBcp47 = !0;
				}
				break;
			case B.Video:
				if (this.currentTrack?.info?.type !== "video") break;
				this.readContiguousElements(e.slice(c, s));
				break;
			case B.PixelWidth:
				if (this.currentTrack?.info?.type !== "video") break;
				this.currentTrack.info.width = V(e, s);
				break;
			case B.PixelHeight:
				if (this.currentTrack?.info?.type !== "video") break;
				this.currentTrack.info.height = V(e, s);
				break;
			case B.DisplayWidth:
				if (this.currentTrack?.info?.type !== "video") break;
				this.currentTrack.info.displayWidth = V(e, s);
				break;
			case B.DisplayHeight:
				if (this.currentTrack?.info?.type !== "video") break;
				this.currentTrack.info.displayHeight = V(e, s);
				break;
			case B.DisplayUnit:
				if (this.currentTrack?.info?.type !== "video") break;
				this.currentTrack.info.displayUnit = V(e, s);
				break;
			case B.AlphaMode:
				if (this.currentTrack?.info?.type !== "video") break;
				this.currentTrack.info.alphaMode = V(e, s) === 1;
				break;
			case B.Colour:
				if (this.currentTrack?.info?.type !== "video") break;
				this.currentTrack.info.colorSpace = {}, this.readContiguousElements(e.slice(c, s));
				break;
			case B.MatrixCoefficients:
				{
					if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace) break;
					let t = C[V(e, s)] ?? null;
					this.currentTrack.info.colorSpace.matrix = t;
				}
				break;
			case B.Range:
				if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace) break;
				this.currentTrack.info.colorSpace.fullRange = V(e, s) === 2;
				break;
			case B.TransferCharacteristics:
				{
					if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace) break;
					let t = x[V(e, s)] ?? null;
					this.currentTrack.info.colorSpace.transfer = t;
				}
				break;
			case B.Primaries:
				{
					if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace) break;
					let t = y[V(e, s)] ?? null;
					this.currentTrack.info.colorSpace.primaries = t;
				}
				break;
			case B.Projection:
				if (this.currentTrack?.info?.type !== "video") break;
				this.readContiguousElements(e.slice(c, s));
				break;
			case B.ProjectionPoseRoll:
				{
					if (this.currentTrack?.info?.type !== "video") break;
					let t = -Qr(e, s);
					try {
						this.currentTrack.info.rotation = o(t);
					} catch {}
				}
				break;
			case B.Audio:
				if (this.currentTrack?.info?.type !== "audio") break;
				this.readContiguousElements(e.slice(c, s));
				break;
			case B.SamplingFrequency:
				if (this.currentTrack?.info?.type !== "audio") break;
				this.currentTrack.info.sampleRate = Qr(e, s);
				break;
			case B.Channels:
				if (this.currentTrack?.info?.type !== "audio") break;
				this.currentTrack.info.numberOfChannels = V(e, s);
				break;
			case B.BitDepth:
				if (this.currentTrack?.info?.type !== "audio") break;
				this.currentTrack.info.bitDepth = V(e, s);
				break;
			case B.CuePoint:
				if (!this.currentSegment) break;
				this.readContiguousElements(e.slice(c, s)), this.currentCueTime = null;
				break;
			case B.CueTime:
				this.currentCueTime = V(e, s);
				break;
			case B.CueTrackPositions:
				{
					if (this.currentCueTime === null) break;
					a(this.currentSegment);
					let t = {
						time: this.currentCueTime,
						trackId: -1,
						clusterPosition: -1
					};
					this.currentSegment.cuePoints.push(t), this.readContiguousElements(e.slice(c, s)), (t.trackId === -1 || t.clusterPosition === -1) && this.currentSegment.cuePoints.pop();
				}
				break;
			case B.CueTrack:
				{
					let t = this.currentSegment?.cuePoints[this.currentSegment.cuePoints.length - 1];
					if (!t) break;
					t.trackId = V(e, s);
				}
				break;
			case B.CueClusterPosition:
				{
					let t = this.currentSegment?.cuePoints[this.currentSegment.cuePoints.length - 1];
					if (!t) break;
					a(this.currentSegment), t.clusterPosition = this.currentSegment.dataStartPos + V(e, s);
				}
				break;
			case B.Timestamp:
				if (!this.currentCluster) break;
				this.currentCluster.timestamp = V(e, s);
				break;
			case B.SimpleBlock:
				{
					if (!this.currentCluster) break;
					let t = Gr(e);
					if (t === null) break;
					let n = this.getTrackDataInCluster(this.currentCluster, t);
					if (!n) break;
					let r = Js(e), i = W(e), a = i >> 1 & 3, o = !!(i & 128);
					n.track.info?.type === "audio" && n.track.info.codec && (o = !0);
					let l = U(e, s - (e.filePos - c)), u = n.track.decodingInstructions.length > 0;
					n.blocks.push({
						timestamp: r,
						duration: 0,
						isKeyFrame: o,
						data: l,
						lacing: a,
						decoded: !u,
						mainAdditional: null
					});
				}
				break;
			case B.BlockGroup:
				if (!this.currentCluster) break;
				this.readContiguousElements(e.slice(c, s)), this.currentBlock = null;
				break;
			case B.Block:
				{
					if (!this.currentCluster) break;
					let t = Gr(e);
					if (t === null) break;
					let n = this.getTrackDataInCluster(this.currentCluster, t);
					if (!n) break;
					let r = Js(e), i = W(e) >> 1 & 3, a = U(e, s - (e.filePos - c)), o = n.track.decodingInstructions.length > 0;
					this.currentBlock = {
						timestamp: r,
						duration: 0,
						isKeyFrame: !0,
						data: a,
						lacing: i,
						decoded: !o,
						mainAdditional: null
					}, n.blocks.push(this.currentBlock);
				}
				break;
			case B.BlockAdditions:
				this.readContiguousElements(e.slice(c, s));
				break;
			case B.BlockMore:
				if (!this.currentBlock) break;
				this.currentBlockAdditional = {
					addId: 1,
					data: null
				}, this.readContiguousElements(e.slice(c, s)), this.currentBlockAdditional.data && this.currentBlockAdditional.addId === 1 && (this.currentBlock.mainAdditional = this.currentBlockAdditional.data), this.currentBlockAdditional = null;
				break;
			case B.BlockAdditional:
				if (!this.currentBlockAdditional) break;
				this.currentBlockAdditional.data = U(e, s);
				break;
			case B.BlockAddID:
				if (!this.currentBlockAdditional) break;
				this.currentBlockAdditional.addId = V(e, s);
				break;
			case B.BlockDuration:
				if (!this.currentBlock) break;
				this.currentBlock.duration = V(e, s);
				break;
			case B.ReferenceBlock:
				if (!this.currentBlock) break;
				this.currentBlock.isKeyFrame = !1;
				break;
			case B.Tag:
				this.currentTagTargetIsMovie = !0, this.readContiguousElements(e.slice(c, s));
				break;
			case B.Targets:
				this.readContiguousElements(e.slice(c, s));
				break;
			case B.TargetTypeValue:
				V(e, s) !== 50 && (this.currentTagTargetIsMovie = !1);
				break;
			case B.TagTrackUID:
			case B.TagEditionUID:
			case B.TagChapterUID:
			case B.TagAttachmentUID:
				this.currentTagTargetIsMovie = !1;
				break;
			case B.SimpleTag:
				if (!this.currentTagTargetIsMovie) break;
				this.currentSimpleTagName = null, this.readContiguousElements(e.slice(c, s));
				break;
			case B.TagName:
				this.currentSimpleTagName = Zr(e, s);
				break;
			case B.TagString:
				{
					if (!this.currentSimpleTagName) break;
					let t = Zr(e, s);
					this.processTagValue(this.currentSimpleTagName, t);
				}
				break;
			case B.TagBinary:
				{
					if (!this.currentSimpleTagName) break;
					let t = U(e, s);
					this.processTagValue(this.currentSimpleTagName, t);
				}
				break;
			case B.AttachedFile:
				{
					if (!this.currentSegment) break;
					this.currentAttachedFile = {
						fileUid: null,
						fileName: null,
						fileMediaType: null,
						fileData: null,
						fileDescription: null
					}, this.readContiguousElements(e.slice(c, s));
					let t = this.currentSegment.metadataTags;
					if (this.currentAttachedFile.fileUid && this.currentAttachedFile.fileData && (t.raw ??= {}, t.raw[this.currentAttachedFile.fileUid.toString()] = new Qe(this.currentAttachedFile.fileData, this.currentAttachedFile.fileMediaType ?? void 0, this.currentAttachedFile.fileName ?? void 0, this.currentAttachedFile.fileDescription ?? void 0)), this.currentAttachedFile.fileMediaType?.startsWith("image/") && this.currentAttachedFile.fileData) {
						let e = this.currentAttachedFile.fileName, n = "unknown";
						if (e) {
							let t = e.toLowerCase();
							t.startsWith("cover.") ? n = "coverFront" : t.startsWith("back.") && (n = "coverBack");
						}
						t.images ??= [], t.images.push({
							data: this.currentAttachedFile.fileData,
							mimeType: this.currentAttachedFile.fileMediaType,
							kind: n,
							name: this.currentAttachedFile.fileName ?? void 0,
							description: this.currentAttachedFile.fileDescription ?? void 0
						});
					}
					this.currentAttachedFile = null;
				}
				break;
			case B.FileUID:
				if (!this.currentAttachedFile) break;
				this.currentAttachedFile.fileUid = Kr(e, s);
				break;
			case B.FileName:
				if (!this.currentAttachedFile) break;
				this.currentAttachedFile.fileName = Zr(e, s);
				break;
			case B.FileMediaType:
				if (!this.currentAttachedFile) break;
				this.currentAttachedFile.fileMediaType = Xr(e, s);
				break;
			case B.FileData:
				if (!this.currentAttachedFile) break;
				this.currentAttachedFile.fileData = U(e, s);
				break;
			case B.FileDescription:
				if (!this.currentAttachedFile) break;
				this.currentAttachedFile.fileDescription = Zr(e, s);
				break;
			case B.ContentEncodings:
				if (!this.currentTrack) break;
				this.readContiguousElements(e.slice(c, s)), this.currentTrack.decodingInstructions.sort((e, t) => t.order - e.order);
				break;
			case B.ContentEncoding:
				this.currentDecodingInstruction = {
					order: 0,
					scope: ai.Block,
					data: null
				}, this.readContiguousElements(e.slice(c, s)), this.currentDecodingInstruction.data && this.currentTrack.decodingInstructions.push(this.currentDecodingInstruction), this.currentDecodingInstruction = null;
				break;
			case B.ContentEncodingOrder:
				if (!this.currentDecodingInstruction) break;
				this.currentDecodingInstruction.order = V(e, s);
				break;
			case B.ContentEncodingScope:
				if (!this.currentDecodingInstruction) break;
				this.currentDecodingInstruction.scope = V(e, s);
				break;
			case B.ContentCompression:
				if (!this.currentDecodingInstruction) break;
				this.currentDecodingInstruction.data = {
					type: "decompress",
					algorithm: oi.Zlib,
					settings: null
				}, this.readContiguousElements(e.slice(c, s));
				break;
			case B.ContentCompAlgo:
				if (this.currentDecodingInstruction?.data?.type !== "decompress") break;
				this.currentDecodingInstruction.data.algorithm = V(e, s);
				break;
			case B.ContentCompSettings:
				if (this.currentDecodingInstruction?.data?.type !== "decompress") break;
				this.currentDecodingInstruction.data.settings = U(e, s);
				break;
			case B.ContentEncryption:
				if (!this.currentDecodingInstruction) break;
				this.currentDecodingInstruction.data = { type: "decrypt" };
				break;
		}
		return e.filePos = c + s, !0;
	}
	decodeBlockData(e, t) {
		a(e.decodingInstructions.length > 0);
		let n = t;
		for (let t of e.decodingInstructions) switch (a(t.data), t.data.type) {
			case "decompress":
				switch (t.data.algorithm) {
					case oi.HeaderStripping:
						if (t.data.settings && t.data.settings.length > 0) {
							let e = t.data.settings, r = new Uint8Array(e.length + n.length);
							r.set(e, 0), r.set(n, e.length), n = r;
						}
						break;
					default:
				}
				break;
			default:
		}
		return n;
	}
	processTagValue(e, t) {
		if (!this.currentSegment?.metadataTags) return;
		let n = this.currentSegment.metadataTags;
		if (n.raw ??= {}, n.raw[e] ??= t, typeof t == "string") switch (e.toLowerCase()) {
			case "title":
				n.title ??= t;
				break;
			case "description":
				n.description ??= t;
				break;
			case "artist":
				n.artist ??= t;
				break;
			case "album":
				n.album ??= t;
				break;
			case "album_artist":
				n.albumArtist ??= t;
				break;
			case "genre":
				n.genre ??= t;
				break;
			case "comment":
				n.comment ??= t;
				break;
			case "lyrics":
				n.lyrics ??= t;
				break;
			case "date":
				{
					let e = new Date(t);
					Number.isNaN(e.getTime()) || (n.date ??= e);
				}
				break;
			case "track_number":
			case "part_number":
				{
					let e = t.split("/"), r = Number.parseInt(e[0], 10), i = e[1] && Number.parseInt(e[1], 10);
					Number.isInteger(r) && r > 0 && (n.trackNumber ??= r), i && Number.isInteger(i) && i > 0 && (n.tracksTotal ??= i);
				}
				break;
			case "disc_number":
			case "disc":
				{
					let e = t.split("/"), r = Number.parseInt(e[0], 10), i = e[1] && Number.parseInt(e[1], 10);
					Number.isInteger(r) && r > 0 && (n.discNumber ??= r), i && Number.isInteger(i) && i > 0 && (n.discsTotal ??= i);
				}
				break;
		}
	}
}, ui = class {
	constructor(e) {
		this.internalTrack = e, this.packetToClusterLocation = /* @__PURE__ */ new WeakMap();
	}
	getId() {
		return this.internalTrack.id;
	}
	getNumber() {
		let e = this.internalTrack.demuxer, t = this.internalTrack.trackBacking.getType(), n = 0;
		for (let r of e.segments) for (let e of r.tracks) if (e.trackBacking.getType() === t && n++, e === this.internalTrack) break;
		return n;
	}
	getCodec() {
		throw Error("Not implemented on base class.");
	}
	getInternalCodecId() {
		return this.internalTrack.codecId;
	}
	getName() {
		return this.internalTrack.name;
	}
	getLanguageCode() {
		return this.internalTrack.languageCode;
	}
	getTimeResolution() {
		return this.internalTrack.segment.timestampFactor;
	}
	isRelativeToUnixEpoch() {
		return !1;
	}
	getUnixTimeForTimestamp() {
		return null;
	}
	getDisposition() {
		return this.internalTrack.disposition;
	}
	getPairingMask() {
		return 1n;
	}
	getBitrate() {
		return null;
	}
	getAverageBitrate() {
		return null;
	}
	async getDurationFromMetadata() {
		let e = this.internalTrack.segment;
		if (e.duration <= 0) return null;
		let t = e.duration / e.timestampFactor, n = await this.getFirstPacket({ metadataOnly: !0 });
		return t += n?.timestamp ?? 0, t;
	}
	async getLiveRefreshInterval() {
		return null;
	}
	async getFirstPacket(e) {
		return this.performClusterLookup(null, (e) => e.trackData.get(this.internalTrack.id) ? {
			blockIndex: 0,
			correctBlockFound: !0
		} : {
			blockIndex: -1,
			correctBlockFound: !1
		}, -Infinity, Infinity, e);
	}
	intoTimescale(e) {
		return N(e * this.internalTrack.segment.timestampFactor);
	}
	async getPacket(e, t) {
		let n = this.intoTimescale(e);
		return this.performClusterLookup(null, (e) => {
			let t = e.trackData.get(this.internalTrack.id);
			if (!t) return {
				blockIndex: -1,
				correctBlockFound: !1
			};
			let r = D(t.presentationTimestamps, n, (e) => e.timestamp);
			return {
				blockIndex: r === -1 ? -1 : t.presentationTimestamps[r].blockIndex,
				correctBlockFound: r !== -1 && n < t.endTimestamp
			};
		}, n, n, t);
	}
	async getNextPacket(e, t) {
		let n = this.packetToClusterLocation.get(e);
		if (n === void 0) throw Error("Packet was not created from this track.");
		return this.performClusterLookup(n.cluster, (e) => {
			if (e === n.cluster) {
				let t = e.trackData.get(this.internalTrack.id);
				if (n.blockIndex + 1 < t.blocks.length) return {
					blockIndex: n.blockIndex + 1,
					correctBlockFound: !0
				};
			} else if (e.trackData.get(this.internalTrack.id)) return {
				blockIndex: 0,
				correctBlockFound: !0
			};
			return {
				blockIndex: -1,
				correctBlockFound: !1
			};
		}, -Infinity, Infinity, t);
	}
	async getKeyPacket(e, t) {
		let n = this.intoTimescale(e);
		return this.performClusterLookup(null, (e) => {
			let t = e.trackData.get(this.internalTrack.id);
			if (!t) return {
				blockIndex: -1,
				correctBlockFound: !1
			};
			let r = ce(t.presentationTimestamps, (e) => t.blocks[e.blockIndex].isKeyFrame && e.timestamp <= n);
			return {
				blockIndex: r === -1 ? -1 : t.presentationTimestamps[r].blockIndex,
				correctBlockFound: r !== -1 && n < t.endTimestamp
			};
		}, n, n, t);
	}
	async getNextKeyPacket(e, t) {
		let n = this.packetToClusterLocation.get(e);
		if (n === void 0) throw Error("Packet was not created from this track.");
		return this.performClusterLookup(n.cluster, (e) => {
			if (e === n.cluster) {
				let t = e.trackData.get(this.internalTrack.id).blocks.findIndex((e, t) => e.isKeyFrame && t > n.blockIndex);
				if (t !== -1) return {
					blockIndex: t,
					correctBlockFound: !0
				};
			} else {
				let t = e.trackData.get(this.internalTrack.id);
				if (t && t.firstKeyFrameTimestamp !== null) {
					let e = t.blocks.findIndex((e) => e.isKeyFrame);
					return a(e !== -1), {
						blockIndex: e,
						correctBlockFound: !0
					};
				}
			}
			return {
				blockIndex: -1,
				correctBlockFound: !1
			};
		}, -Infinity, Infinity, t);
	}
	async fetchPacketInCluster(e, t, n) {
		if (t === -1) return null;
		let r = e.trackData.get(this.internalTrack.id).blocks[t];
		a(r), r.decoded ||= (r.data = this.internalTrack.demuxer.decodeBlockData(this.internalTrack, r.data), !0);
		let i = n.metadataOnly ? Jn : r.data, o = r.timestamp / this.internalTrack.segment.timestampFactor, s = r.duration / this.internalTrack.segment.timestampFactor, c = {};
		r.mainAdditional && this.internalTrack.info?.type === "video" && this.internalTrack.info.alphaMode && (c.alpha = n.metadataOnly ? Jn : r.mainAdditional, c.alphaByteLength = r.mainAdditional.byteLength);
		let l = new z(i, r.isKeyFrame ? "key" : "delta", o, s, e.dataStartPos + t, r.data.byteLength, c);
		return this.packetToClusterLocation.set(l, {
			cluster: e,
			blockIndex: t
		}), l;
	}
	async performClusterLookup(e, t, n, r, i) {
		let { demuxer: o, segment: s } = this.internalTrack, c = null, l = null, u = -1;
		if (e) {
			let { blockIndex: n, correctBlockFound: r } = t(e);
			if (r) return this.fetchPacketInCluster(e, n, i);
			n !== -1 && (l = e, u = n);
		}
		let d = D(this.internalTrack.cuePoints, n, (e) => e.time), f = d === -1 ? null : this.internalTrack.cuePoints[d], p = D(this.internalTrack.clusterPositionCache, n, (e) => e.startTimestamp), m = p === -1 ? null : this.internalTrack.clusterPositionCache[p], h = Math.max(f?.clusterPosition ?? 0, m?.elementStartPos ?? 0) || null, g;
		for (e ? h === null || e.elementStartPos >= h ? (g = e.elementEndPos, c = e) : g = h : g = h ?? s.clusterSeekStartPos; s.elementEndPos === null || g <= s.elementEndPos - 2;) {
			if (c) {
				let e = c.trackData.get(this.internalTrack.id);
				if (e && e.startTimestamp > r) break;
			}
			let e = o.reader.requestSliceRange(g, 2, 16);
			if (e instanceof Promise && (e = await e), !e) break;
			let n = g, d = Yr(e);
			if (!d || !Lr.includes(d.id) && d.id !== B.Void) {
				let e = await ei(o.reader, n, Lr, Math.min(s.elementEndPos ?? Infinity, n + ci));
				if (e) {
					g = e;
					continue;
				} else break;
			}
			let f = d.id, p = d.size, m = e.filePos;
			if (f === B.Cluster) {
				c = await o.readCluster(n, s), p = c.elementEndPos - m;
				let { blockIndex: e, correctBlockFound: r } = t(c);
				if (r) return this.fetchPacketInCluster(c, e, i);
				e !== -1 && (l = c, u = e);
			}
			p === void 0 && (a(f !== B.Cluster), p = (await $r(o.reader, m, Rr, s.elementEndPos)).pos - m);
			let h = m + p;
			if (s.elementEndPos === null) {
				let e = o.reader.requestSliceRange(h, 2, 16);
				if (e instanceof Promise && (e = await e), !e) break;
				if (qr(e) === B.Segment) {
					s.elementEndPos = h;
					break;
				}
			}
			g = h;
		}
		if (f && (!l || l.elementStartPos < f.clusterPosition)) {
			let e = this.internalTrack.cuePoints[d - 1];
			a(!e || e.time < f.time);
			let n = e?.time ?? -Infinity;
			return this.performClusterLookup(null, t, n, r, i);
		}
		return l ? this.fetchPacketInCluster(l, u, i) : null;
	}
}, di = class extends ui {
	constructor(e) {
		super(e), this.decoderConfigPromise = null, this.internalTrack = e;
	}
	getType() {
		return "video";
	}
	getCodec() {
		return this.internalTrack.info.codec;
	}
	getCodedWidth() {
		return this.internalTrack.info.width;
	}
	getCodedHeight() {
		return this.internalTrack.info.height;
	}
	getSquarePixelWidth() {
		return this.internalTrack.info.squarePixelWidth;
	}
	getSquarePixelHeight() {
		return this.internalTrack.info.squarePixelHeight;
	}
	getRotation() {
		return this.internalTrack.info.rotation;
	}
	async getColorSpace() {
		return {
			primaries: this.internalTrack.info.colorSpace?.primaries,
			transfer: this.internalTrack.info.colorSpace?.transfer,
			matrix: this.internalTrack.info.colorSpace?.matrix,
			fullRange: this.internalTrack.info.colorSpace?.fullRange
		};
	}
	async canBeTransparent() {
		return this.internalTrack.info.alphaMode;
	}
	async getDecoderConfig() {
		return this.internalTrack.info.codec ? this.decoderConfigPromise ??= (async () => {
			let e = null;
			(this.internalTrack.info.codec === "vp9" || this.internalTrack.info.codec === "av1" || this.internalTrack.info.codec === "avc" && !this.internalTrack.info.codecDescription || this.internalTrack.info.codec === "hevc" && !this.internalTrack.info.codecDescription) && (e = await this.getFirstPacket({}));
			let t = {
				codec: vt({
					width: this.internalTrack.info.width,
					height: this.internalTrack.info.height,
					codec: this.internalTrack.info.codec,
					codecDescription: this.internalTrack.info.codecDescription,
					colorSpace: this.internalTrack.info.colorSpace,
					avcType: 1,
					avcCodecInfo: this.internalTrack.info.codec === "avc" && e ? on(e.data) : null,
					hevcCodecInfo: this.internalTrack.info.codec === "hevc" && e ? gn(e.data) : null,
					vp9CodecInfo: this.internalTrack.info.codec === "vp9" && e ? Dn(e.data) : null,
					av1CodecInfo: this.internalTrack.info.codec === "av1" && e ? kn(e.data) : null
				}),
				codedWidth: this.internalTrack.info.width,
				codedHeight: this.internalTrack.info.height,
				description: this.internalTrack.info.codecDescription ?? void 0,
				colorSpace: this.internalTrack.info.colorSpace ?? void 0
			};
			return (this.internalTrack.info.width !== this.internalTrack.info.squarePixelWidth || this.internalTrack.info.height !== this.internalTrack.info.squarePixelHeight) && (t.displayAspectWidth = this.internalTrack.info.squarePixelWidth, t.displayAspectHeight = this.internalTrack.info.squarePixelHeight), t;
		})() : null;
	}
}, fi = class extends ui {
	constructor(e) {
		super(e), this.decoderConfig = null, this.internalTrack = e;
	}
	getType() {
		return "audio";
	}
	getCodec() {
		return this.internalTrack.info.codec;
	}
	getNumberOfChannels() {
		return this.internalTrack.info.numberOfChannels;
	}
	getSampleRate() {
		return this.internalTrack.info.sampleRate;
	}
	async getDecoderConfig() {
		return this.internalTrack.info.codec ? this.decoderConfig ??= {
			codec: bt({
				codec: this.internalTrack.info.codec,
				codecDescription: this.internalTrack.info.codecDescription,
				aacCodecInfo: this.internalTrack.info.aacCodecInfo
			}),
			numberOfChannels: this.internalTrack.info.numberOfChannels,
			sampleRate: this.internalTrack.info.sampleRate,
			description: this.internalTrack.info.codecDescription ?? void 0
		} : null;
	}
}, pi = async (e, t, n, r = null) => {
	let i = 2 ** 16, a = t;
	for (; n === null || a < n;) {
		let t = n === null ? i : Math.min(i, n - a), o = e.requestSliceRange(a, 4, t);
		if (o instanceof Promise && (o = await o), !o || o.length < 4) break;
		for (; o.remainingLength >= 4;) {
			let t = o.filePos, n = Vt(G(o), e.fileSize === null ? null : e.fileSize - a);
			if (n.header && (!r || n.header.sampleRate === r.sampleRate && n.header.mpegVersionId === r.mpegVersionId && n.header.layer === r.layer && Gt(n.header.channel) === Gt(r.channel))) return {
				header: n.header,
				startPos: a
			};
			o.filePos = t + n.bytesAdvanced, a = o.filePos;
		}
	}
	return null;
}, mi = class extends qn {
	constructor(e) {
		super(e), this.metadataPromise = null, this.firstFrameHeader = null, this.firstFrameHeaderPos = null, this.loadedSamples = [], this.metadataTags = null, this.xingData = null, this.trackBackings = [], this.readingMutex = new T(), this.lastSampleLoaded = !1, this.lastLoadedPos = 0, this.nextTimestampInSamples = 0, this.reader = e._reader;
	}
	async readMetadata() {
		return this.metadataPromise ??= (async () => {
			for (; !this.firstFrameHeader && !this.lastSampleLoaded;) await this.advanceReader();
			if (!this.firstFrameHeader) throw Error("No valid MP3 frame found.");
			this.trackBackings = [new hi(this)];
		})();
	}
	async advanceReader() {
		if (this.lastLoadedPos === 0) for (;;) {
			let e = this.reader.requestSlice(this.lastLoadedPos, 10);
			if (e instanceof Promise && (e = await e), !e) {
				this.lastSampleLoaded = !0;
				return;
			}
			let t = dc(e);
			if (!t) break;
			this.lastLoadedPos = e.filePos + t.size;
		}
		let e = await pi(this.reader, this.lastLoadedPos, this.reader.fileSize, this.firstFrameHeader);
		if (!e) {
			this.lastSampleLoaded = !0;
			return;
		}
		let t = e.header;
		this.lastLoadedPos = e.startPos + t.totalSize - 1;
		let n = Bt(t.mpegVersionId, t.channel), r = this.reader.requestSlice(e.startPos + n, 4);
		if (r instanceof Promise && (r = await r), r) {
			let t = G(r);
			if (t === 1483304551 || t === 1231971951) {
				if (!this.xingData) {
					let t = this.reader.requestSlice(e.startPos + n + 4, 12);
					if (t instanceof Promise && (t = await t), t) {
						let e = p(U(t, 12)), n = e.getUint32(0, !1);
						this.xingData = {
							frameCount: n & Wt.FrameCount ? e.getUint32(4, !1) : null,
							fileSize: n & Wt.FileSize ? e.getUint32(8, !1) : null
						};
					}
				}
				return;
			}
		}
		this.firstFrameHeader || (this.firstFrameHeader = t, this.firstFrameHeaderPos = e.startPos);
		let i = t.audioSamplesInFrame / this.firstFrameHeader.sampleRate, a = {
			timestamp: this.nextTimestampInSamples / this.firstFrameHeader.sampleRate,
			duration: i,
			dataStart: e.startPos,
			dataSize: t.totalSize
		};
		this.loadedSamples.push(a), this.nextTimestampInSamples += t.audioSamplesInFrame;
	}
	async getMimeType() {
		return "audio/mpeg";
	}
	async getTrackBackings() {
		return await this.readMetadata(), this.trackBackings;
	}
	async getMetadataTags() {
		let e = await this.readingMutex.acquire();
		try {
			if (await this.readMetadata(), this.metadataTags) return this.metadataTags;
			this.metadataTags = {};
			let e = 0, t = !1;
			for (;;) {
				let n = this.reader.requestSlice(e, 10);
				if (n instanceof Promise && (n = await n), !n) break;
				let r = dc(n);
				if (!r) break;
				t = !0;
				let i = this.reader.requestSlice(n.filePos, r.size);
				if (i instanceof Promise && (i = await i), !i) break;
				fc(i, r, this.metadataTags), e = n.filePos + r.size;
			}
			if (!t && this.reader.fileSize !== null && this.reader.fileSize >= 128) {
				let e = this.reader.requestSlice(this.reader.fileSize - 128, 128);
				e instanceof Promise && (e = await e), a(e), K(e, 3) === "TAG" && lc(e, this.metadataTags);
			}
			return this.metadataTags;
		} finally {
			e();
		}
	}
}, hi = class {
	constructor(e) {
		this.demuxer = e;
	}
	getType() {
		return "audio";
	}
	getId() {
		return 1;
	}
	getNumber() {
		return 1;
	}
	getTimeResolution() {
		return a(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.sampleRate / this.demuxer.firstFrameHeader.audioSamplesInFrame;
	}
	isRelativeToUnixEpoch() {
		return !1;
	}
	getUnixTimeForTimestamp() {
		return null;
	}
	getPairingMask() {
		return 1n;
	}
	getBitrate() {
		return null;
	}
	getAverageBitrate() {
		return null;
	}
	async getDurationFromMetadata() {
		let e = this.demuxer;
		if (a(e.firstFrameHeader !== null), a(e.firstFrameHeaderPos !== null), e.xingData) {
			if (e.xingData.frameCount !== null) return e.xingData.frameCount * e.firstFrameHeader.audioSamplesInFrame / e.firstFrameHeader.sampleRate;
		} else if (e.reader.fileSize !== null) {
			let t = zt(e.firstFrameHeader.lowSamplingFrequency, e.firstFrameHeader.layer, e.firstFrameHeader.bitrate, e.firstFrameHeader.sampleRate), n = (e.reader.fileSize - e.firstFrameHeaderPos) / t;
			return Math.round(n) * e.firstFrameHeader.audioSamplesInFrame / e.firstFrameHeader.sampleRate;
		}
		return null;
	}
	async getLiveRefreshInterval() {
		return null;
	}
	getName() {
		return null;
	}
	getLanguageCode() {
		return "und";
	}
	getCodec() {
		return "mp3";
	}
	getInternalCodecId() {
		return null;
	}
	getNumberOfChannels() {
		return a(this.demuxer.firstFrameHeader), Gt(this.demuxer.firstFrameHeader.channel);
	}
	getSampleRate() {
		return a(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.sampleRate;
	}
	getDisposition() {
		return { ...tt };
	}
	async getDecoderConfig() {
		return a(this.demuxer.firstFrameHeader), {
			codec: "mp3",
			numberOfChannels: Gt(this.demuxer.firstFrameHeader.channel),
			sampleRate: this.demuxer.firstFrameHeader.sampleRate
		};
	}
	async getPacketAtIndex(e, t) {
		if (e === -1) return null;
		let n = this.demuxer.loadedSamples[e];
		if (!n) return null;
		let r;
		if (t.metadataOnly) r = Jn;
		else {
			let e = this.demuxer.reader.requestSlice(n.dataStart, n.dataSize);
			if (e instanceof Promise && (e = await e), !e) return null;
			r = U(e, n.dataSize);
		}
		return new z(r, "key", n.timestamp, n.duration, e, n.dataSize);
	}
	getFirstPacket(e) {
		return this.getPacketAtIndex(0, e);
	}
	async getNextPacket(e, t) {
		let n = await this.demuxer.readingMutex.acquire();
		try {
			let n = ie(this.demuxer.loadedSamples, e.timestamp, (e) => e.timestamp);
			if (n === -1) throw Error("Packet was not created from this track.");
			let r = n + 1;
			for (; r >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded;) await this.demuxer.advanceReader();
			return this.getPacketAtIndex(r, t);
		} finally {
			n();
		}
	}
	async getPacket(e, t) {
		let n = await this.demuxer.readingMutex.acquire();
		try {
			for (;;) {
				let n = D(this.demuxer.loadedSamples, e, (e) => e.timestamp);
				if (n === -1 && this.demuxer.loadedSamples.length > 0) return null;
				if (this.demuxer.lastSampleLoaded || n >= 0 && n + 1 < this.demuxer.loadedSamples.length) return this.getPacketAtIndex(n, t);
				await this.demuxer.advanceReader();
			}
		} finally {
			n();
		}
	}
	getKeyPacket(e, t) {
		return this.getPacket(e, t);
	}
	getNextKeyPacket(e, t) {
		return this.getNextPacket(e, t);
	}
}, gi = 1399285583, _i = 79764919, vi = /* @__PURE__ */ new Uint32Array(256);
for (let e = 0; e < 256; e++) {
	let t = e << 24;
	for (let e = 0; e < 8; e++) t = t & 2147483648 ? t << 1 ^ _i : t << 1;
	vi[e] = t >>> 0 & 4294967295;
}
var yi = (e) => {
	let t = p(e), n = t.getUint32(22, !0);
	t.setUint32(22, 0, !0);
	let r = 0;
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		r = (r << 8 ^ vi[r >>> 24 ^ n]) >>> 0;
	}
	return t.setUint32(22, n, !0), r;
}, bi = (e, t, n) => {
	let r = 0, i = null;
	if (e.length > 0) if (t.codec === "vorbis") {
		a(t.vorbisInfo);
		let o = t.vorbisInfo.modeBlockflags.length, s = (1 << ve(o - 1)) - 1 << 1, c = (e[0] & s) >> 1;
		if (c >= t.vorbisInfo.modeBlockflags.length) throw Error("Invalid mode number.");
		let l = n, u = t.vorbisInfo.modeBlockflags[c];
		if (i = t.vorbisInfo.blocksizes[u], u === 1) {
			let n = (s | 1) + 1, r = e[0] & n ? 1 : 0;
			l = t.vorbisInfo.blocksizes[r];
		}
		r = l === null ? 0 : l + i >> 2;
	} else t.codec === "opus" && (r = Mn(e).durationInSamples);
	return {
		durationInSamples: r,
		vorbisBlockSize: i
	};
}, xi = (e) => {
	let t = "audio/ogg";
	if (e.codecStrings) {
		let n = [...new Set(e.codecStrings)];
		t += `; codecs="${n.join(", ")}"`;
	}
	return t;
}, Si = 65307, Ci = (e) => {
	let t = e.filePos;
	if (Xs(e) !== 1399285583) return null;
	e.skip(1);
	let n = W(e), r = nc(e), i = Xs(e), a = Xs(e), o = Xs(e), s = W(e), c = new Uint8Array(s);
	for (let t = 0; t < s; t++) c[t] = W(e);
	let l = 27 + s, u = c.reduce((e, t) => e + t, 0);
	return {
		headerStartPos: t,
		totalSize: l + u,
		dataStartPos: t + l,
		dataSize: u,
		headerType: n,
		granulePosition: r,
		serialNumber: i,
		sequenceNumber: a,
		checksum: o,
		lacingValues: c
	};
}, wi = (e, t) => {
	for (; e.filePos < t - 3;) {
		let t = Xs(e), n = t & 255, r = t >>> 8 & 255, i = t >>> 16 & 255, a = t >>> 24 & 255;
		if (!(n !== 79 && r !== 79 && i !== 79 && a !== 79)) {
			if (e.skip(-4), t === 1399285583) return !0;
			e.skip(1);
		}
	}
	return !1;
}, Ti = class extends qn {
	constructor(e) {
		super(e), this.metadataPromise = null, this.bitstreams = [], this.trackBackings = [], this.metadataTags = {}, this.reader = e._reader;
	}
	async readMetadata() {
		return this.metadataPromise ??= (async () => {
			let e = 0;
			for (;;) {
				let t = this.reader.requestSliceRange(e, 27, 282);
				if (t instanceof Promise && (t = await t), !t) break;
				let n = Ci(t);
				if (!n || !(n.headerType & 2)) break;
				this.bitstreams.push({
					serialNumber: n.serialNumber,
					bosPage: n,
					description: null,
					numberOfChannels: -1,
					sampleRate: -1,
					codecInfo: {
						codec: null,
						vorbisInfo: null,
						opusInfo: null
					},
					lastMetadataPacket: null
				}), e = n.headerStartPos + n.totalSize;
			}
			for (let e of this.bitstreams) {
				let t = await this.readPacket(e.bosPage, 0);
				t && (t.data.byteLength >= 7 && t.data[0] === 1 && t.data[1] === 118 && t.data[2] === 111 && t.data[3] === 114 && t.data[4] === 98 && t.data[5] === 105 && t.data[6] === 115 ? await this.readVorbisMetadata(t, e) : t.data.byteLength >= 8 && t.data[0] === 79 && t.data[1] === 112 && t.data[2] === 117 && t.data[3] === 115 && t.data[4] === 72 && t.data[5] === 101 && t.data[6] === 97 && t.data[7] === 100 && await this.readOpusMetadata(t, e), e.codecInfo.codec !== null && this.trackBackings.push(new Ei(e, this)));
			}
		})();
	}
	async readVorbisMetadata(e, t) {
		let n = await this.findNextPacketStart(e);
		if (!n) return;
		let r = await this.readPacket(n.startPage, n.startSegmentIndex);
		if (!r || (n = await this.findNextPacketStart(r), !n)) return;
		let i = await this.readPacket(n.startPage, n.startSegmentIndex);
		if (!i || r.data[0] !== 3 || i.data[0] !== 5) return;
		let a = [], o = (e) => {
			for (; a.push(Math.min(255, e)), !(e < 255);) e -= 255;
		};
		o(e.data.length), o(r.data.length);
		let s = new Uint8Array(1 + a.length + e.data.length + r.data.length + i.data.length);
		s[0] = 2, s.set(a, 1), s.set(e.data, 1 + a.length), s.set(r.data, 1 + a.length + e.data.length), s.set(i.data, 1 + a.length + e.data.length + r.data.length), t.codecInfo.codec = "vorbis", t.description = s, t.lastMetadataPacket = i;
		let c = p(e.data);
		t.numberOfChannels = c.getUint8(11), t.sampleRate = c.getUint32(12, !0);
		let l = c.getUint8(28);
		t.codecInfo.vorbisInfo = {
			blocksizes: [1 << (l & 15), 1 << (l >> 4)],
			modeBlockflags: Nn(i.data).modeBlockflags
		}, In(r.data.subarray(7), this.metadataTags);
	}
	async readOpusMetadata(e, t) {
		let n = await this.findNextPacketStart(e);
		if (!n) return;
		let r = await this.readPacket(n.startPage, n.startSegmentIndex);
		if (!r) return;
		t.codecInfo.codec = "opus", t.description = e.data, t.lastMetadataPacket = r;
		let i = An(e.data);
		t.numberOfChannels = i.outputChannelCount, t.sampleRate = xt, t.codecInfo.opusInfo = { preSkip: i.preSkip }, In(r.data.subarray(8), this.metadataTags);
	}
	async readPacket(e, t) {
		a(t < e.lacingValues.length);
		let n = 0;
		for (let r = 0; r < t; r++) n += e.lacingValues[r];
		let r = e, i = n, o = t, s = [];
		outer: for (;;) {
			let t = this.reader.requestSlice(r.dataStartPos, r.dataSize);
			t instanceof Promise && (t = await t), a(t);
			let c = U(t, r.dataSize);
			for (;;) {
				if (o === r.lacingValues.length) {
					s.push(c.subarray(n, i));
					break;
				}
				let e = r.lacingValues[o];
				if (i += e, e < 255) {
					s.push(c.subarray(n, i));
					break outer;
				}
				o++;
			}
			let l = r.headerStartPos + r.totalSize;
			for (;;) {
				let t = this.reader.requestSliceRange(l, 27, 282);
				if (t instanceof Promise && (t = await t), !t) return null;
				let n = Ci(t);
				if (!n) return null;
				if (r = n, r.serialNumber === e.serialNumber) break;
				l = r.headerStartPos + r.totalSize;
			}
			n = 0, i = 0, o = 0;
		}
		let c = s.reduce((e, t) => e + t.length, 0);
		if (c === 0) return null;
		let l = new Uint8Array(c), u = 0;
		for (let e = 0; e < s.length; e++) {
			let t = s[e];
			l.set(t, u), u += t.length;
		}
		return {
			data: l,
			endPage: r,
			endSegmentIndex: o
		};
	}
	async findNextPacketStart(e) {
		if (e.endSegmentIndex < e.endPage.lacingValues.length - 1) return {
			startPage: e.endPage,
			startSegmentIndex: e.endSegmentIndex + 1
		};
		if (e.endPage.headerType & 4) return null;
		let t = e.endPage.headerStartPos + e.endPage.totalSize;
		for (;;) {
			let n = this.reader.requestSliceRange(t, 27, 282);
			if (n instanceof Promise && (n = await n), !n) return null;
			let r = Ci(n);
			if (!r) return null;
			if (r.serialNumber === e.endPage.serialNumber) return {
				startPage: r,
				startSegmentIndex: 0
			};
			t = r.headerStartPos + r.totalSize;
		}
	}
	async getMimeType() {
		return await this.readMetadata(), xi({ codecStrings: (await Promise.all(this.trackBackings.map((e) => e.getDecoderConfig().then((e) => e?.codec ?? null)))).filter(Boolean) });
	}
	async getTrackBackings() {
		return await this.readMetadata(), this.trackBackings;
	}
	async getMetadataTags() {
		return await this.readMetadata(), this.metadataTags;
	}
}, Ei = class {
	constructor(e, t) {
		this.bitstream = e, this.demuxer = t, this.encodedPacketToMetadata = /* @__PURE__ */ new WeakMap(), this.sequentialScanCache = [], this.sequentialScanMutex = new T(), this.internalSampleRate = e.codecInfo.codec === "opus" ? xt : e.sampleRate;
	}
	getType() {
		return "audio";
	}
	getId() {
		return this.bitstream.serialNumber;
	}
	getNumber() {
		let e = this.demuxer.trackBackings.findIndex((e) => e.bitstream === this.bitstream);
		return a(e !== -1), e + 1;
	}
	getNumberOfChannels() {
		return this.bitstream.numberOfChannels;
	}
	getSampleRate() {
		return this.bitstream.sampleRate;
	}
	getTimeResolution() {
		return this.bitstream.sampleRate;
	}
	isRelativeToUnixEpoch() {
		return !1;
	}
	getUnixTimeForTimestamp() {
		return null;
	}
	getPairingMask() {
		return 1n;
	}
	getBitrate() {
		return null;
	}
	getAverageBitrate() {
		return null;
	}
	async getDurationFromMetadata() {
		return null;
	}
	async getLiveRefreshInterval() {
		return null;
	}
	getCodec() {
		return this.bitstream.codecInfo.codec;
	}
	getInternalCodecId() {
		return null;
	}
	async getDecoderConfig() {
		return a(this.bitstream.codecInfo.codec), {
			codec: this.bitstream.codecInfo.codec,
			numberOfChannels: this.bitstream.numberOfChannels,
			sampleRate: this.bitstream.sampleRate,
			description: this.bitstream.description ?? void 0
		};
	}
	getName() {
		return null;
	}
	getLanguageCode() {
		return "und";
	}
	getDisposition() {
		return {
			...tt,
			primary: !1
		};
	}
	granulePositionToTimestampInSamples(e) {
		return this.bitstream.codecInfo.codec === "opus" ? (a(this.bitstream.codecInfo.opusInfo), e - this.bitstream.codecInfo.opusInfo.preSkip) : e;
	}
	createEncodedPacketFromOggPacket(e, t, n) {
		if (!e) return null;
		let { durationInSamples: r, vorbisBlockSize: i } = bi(e.data, this.bitstream.codecInfo, t.vorbisLastBlocksize), a = new z(n.metadataOnly ? Jn : e.data, "key", Math.max(0, t.timestampInSamples) / this.internalSampleRate, r / this.internalSampleRate, e.endPage.headerStartPos + e.endSegmentIndex, e.data.byteLength);
		return this.encodedPacketToMetadata.set(a, {
			packet: e,
			timestampInSamples: t.timestampInSamples,
			durationInSamples: r,
			vorbisLastBlockSize: t.vorbisLastBlocksize,
			vorbisBlockSize: i
		}), a;
	}
	async getFirstPacket(e) {
		a(this.bitstream.lastMetadataPacket);
		let t = await this.demuxer.findNextPacketStart(this.bitstream.lastMetadataPacket);
		if (!t) return null;
		let n = 0;
		this.bitstream.codecInfo.codec === "opus" && (a(this.bitstream.codecInfo.opusInfo), n -= this.bitstream.codecInfo.opusInfo.preSkip);
		let r = await this.demuxer.readPacket(t.startPage, t.startSegmentIndex);
		return this.createEncodedPacketFromOggPacket(r, {
			timestampInSamples: n,
			vorbisLastBlocksize: null
		}, e);
	}
	async getNextPacket(e, t) {
		let n = this.encodedPacketToMetadata.get(e);
		if (!n) throw Error("Packet was not created from this track.");
		let r = await this.demuxer.findNextPacketStart(n.packet);
		if (!r) return null;
		let i = n.timestampInSamples + n.durationInSamples, a = await this.demuxer.readPacket(r.startPage, r.startSegmentIndex);
		return this.createEncodedPacketFromOggPacket(a, {
			timestampInSamples: i,
			vorbisLastBlocksize: n.vorbisBlockSize
		}, t);
	}
	async getPacket(e, t) {
		if (this.demuxer.reader.fileSize === null) return this.getPacketSequential(e, t);
		let n = N(e * this.internalSampleRate);
		if (n === 0) return this.getFirstPacket(t);
		if (n < 0) return null;
		a(this.bitstream.lastMetadataPacket);
		let r = await this.demuxer.findNextPacketStart(this.bitstream.lastMetadataPacket);
		if (!r) return null;
		let i = r.startPage, o = this.demuxer.reader.fileSize, s = [i];
		outer: for (; i.headerStartPos + i.totalSize < o;) {
			let e = i.headerStartPos, t = Math.floor((e + o) / 2), r = t;
			for (;;) {
				let e = Math.min(r + Si, o - 27), c = this.demuxer.reader.requestSlice(r, e - r);
				if (c instanceof Promise && (c = await c), a(c), !wi(c, e)) {
					o = t + 27;
					continue outer;
				}
				let l = this.demuxer.reader.requestSliceRange(c.filePos, 27, 282);
				l instanceof Promise && (l = await l), a(l);
				let u = Ci(l);
				a(u);
				let d = !1;
				if (u.serialNumber === this.bitstream.serialNumber) d = !0;
				else {
					let e = this.demuxer.reader.requestSlice(u.headerStartPos, u.totalSize);
					e instanceof Promise && (e = await e), a(e), d = yi(U(e, u.totalSize)) === u.checksum;
				}
				if (!d) {
					r = u.headerStartPos + 4;
					continue;
				}
				if (d && u.serialNumber !== this.bitstream.serialNumber) {
					r = u.headerStartPos + u.totalSize;
					continue;
				}
				if (u.granulePosition === -1) {
					r = u.headerStartPos + u.totalSize;
					continue;
				}
				this.granulePositionToTimestampInSamples(u.granulePosition) > n ? o = u.headerStartPos : (i = u, s.push(u));
				continue outer;
			}
		}
		let c = r.startPage;
		for (let e of s) {
			if (e.granulePosition === i.granulePosition) break;
			(!c || e.headerStartPos > c.headerStartPos) && (c = e);
		}
		let l = c, u = [l];
		for (; !(l.serialNumber === this.bitstream.serialNumber && l.granulePosition === i.granulePosition);) {
			let e = l.headerStartPos + l.totalSize, t = this.demuxer.reader.requestSliceRange(e, 27, 282);
			t instanceof Promise && (t = await t), a(t);
			let n = Ci(t);
			a(n), l = n, l.serialNumber === this.bitstream.serialNumber && u.push(l);
		}
		a(l.granulePosition !== -1);
		let d = null, f, p, m = l, h = 0;
		if (l.headerStartPos === r.startPage.headerStartPos) f = this.granulePositionToTimestampInSamples(0), p = !0, d = 0;
		else {
			f = 0, p = !1;
			for (let e = l.lacingValues.length - 1; e >= 0; e--) if (l.lacingValues[e] < 255) {
				d = e + 1;
				break;
			}
			if (d === null) throw Error("Invalid page with granule position: no packets end on this page.");
			h = d - 1;
			let e = {
				data: Jn,
				endPage: m,
				endSegmentIndex: h
			};
			if (await this.demuxer.findNextPacketStart(e)) {
				let e = Oi(u, l, d);
				a(e);
				let t = Di(u, e.page, e.segmentIndex);
				t && (l = t.page, d = t.segmentIndex);
			} else for (;;) {
				let e = Oi(u, l, d);
				if (!e) break;
				let t = Di(u, e.page, e.segmentIndex);
				if (!t) break;
				if (l = t.page, d = t.segmentIndex, e.page.headerStartPos !== m.headerStartPos) {
					m = e.page, h = e.segmentIndex;
					break;
				}
			}
		}
		let g = null, _ = null;
		for (; l !== null;) {
			a(d !== null);
			let e = await this.demuxer.readPacket(l, d);
			if (!e) break;
			if (!(l.headerStartPos === r.startPage.headerStartPos && d < r.startSegmentIndex)) {
				let r = this.createEncodedPacketFromOggPacket(e, {
					timestampInSamples: f,
					vorbisLastBlocksize: _?.vorbisBlockSize ?? null
				}, t);
				a(r);
				let i = this.encodedPacketToMetadata.get(r);
				if (a(i), !p && e.endPage.headerStartPos === m.headerStartPos && e.endSegmentIndex === h ? (f = this.granulePositionToTimestampInSamples(l.granulePosition), p = !0, r = this.createEncodedPacketFromOggPacket(e, {
					timestampInSamples: f - i.durationInSamples,
					vorbisLastBlocksize: _?.vorbisBlockSize ?? null
				}, t), a(r), i = this.encodedPacketToMetadata.get(r), a(i)) : f += i.durationInSamples, g = r, _ = i, p && (Math.max(f, 0) > n || Math.max(i.timestampInSamples, 0) === n)) break;
			}
			let i = await this.demuxer.findNextPacketStart(e);
			if (!i) break;
			l = i.startPage, d = i.startSegmentIndex;
		}
		return g;
	}
	async getPacketSequential(e, t) {
		let n = await this.sequentialScanMutex.acquire();
		try {
			let n = N(e * this.internalSampleRate);
			e = n / this.internalSampleRate;
			let r = D(this.sequentialScanCache, n, (e) => e.timestampInSamples), i;
			if (r !== -1) {
				let e = this.sequentialScanCache[r];
				i = this.createEncodedPacketFromOggPacket(e.packet, {
					timestampInSamples: e.timestampInSamples,
					vorbisLastBlocksize: e.vorbisLastBlockSize
				}, t);
			} else i = await this.getFirstPacket(t);
			let o = 0;
			for (; i && i.timestamp < e;) {
				let n = await this.getNextPacket(i, t);
				if (!n || n.timestamp > e) break;
				if (i = n, o++, o === 100) {
					o = 0;
					let e = this.encodedPacketToMetadata.get(i);
					a(e), this.sequentialScanCache.length > 0 && a(s(this.sequentialScanCache).timestampInSamples <= e.timestampInSamples), this.sequentialScanCache.push(e);
				}
			}
			return i;
		} finally {
			n();
		}
	}
	getKeyPacket(e, t) {
		return this.getPacket(e, t);
	}
	getNextKeyPacket(e, t) {
		return this.getNextPacket(e, t);
	}
}, Di = (e, t, n) => {
	let r = t, i = n;
	outer: for (;;) {
		for (i--; i >= 0; i--) if (r.lacingValues[i] < 255) {
			i++;
			break outer;
		}
		if (a(i === -1), !(r.headerType & 1)) {
			i = 0;
			break;
		}
		let t = se(e, (e) => e.headerStartPos < r.headerStartPos);
		if (!t) return null;
		r = t, i = r.lacingValues.length;
	}
	if (a(i !== -1), i === r.lacingValues.length) {
		let t = e[e.indexOf(r) + 1];
		a(t), r = t, i = 0;
	}
	return {
		page: r,
		segmentIndex: i
	};
}, Oi = (e, t, n) => {
	if (n > 0) return {
		page: t,
		segmentIndex: n - 1
	};
	let r = se(e, (e) => e.headerStartPos < t.headerStartPos);
	return r ? {
		page: r,
		segmentIndex: r.lacingValues.length - 1
	} : null;
}, ki;
(function(e) {
	e[e.PCM = 1] = "PCM", e[e.IEEE_FLOAT = 3] = "IEEE_FLOAT", e[e.ALAW = 6] = "ALAW", e[e.MULAW = 7] = "MULAW", e[e.EXTENSIBLE = 65534] = "EXTENSIBLE";
})(ki ||= {});
var Ai = class extends qn {
	constructor(e) {
		super(e), this.metadataPromise = null, this.dataStart = -1, this.dataSize = -1, this.audioInfo = null, this.trackBackings = [], this.lastKnownPacketIndex = 0, this.metadataTags = {}, this.reader = e._reader;
	}
	async readMetadata() {
		return this.metadataPromise ??= (async () => {
			let e = this.reader.requestSlice(0, 12);
			e instanceof Promise && (e = await e), a(e);
			let t = K(e, 4), n = t !== "RIFX", r = t === "RF64", i = Ys(e, n), o = r ? this.reader.fileSize : Math.min(i + 8, this.reader.fileSize ?? Infinity);
			if (K(e, 4) !== "WAVE") throw Error("Invalid WAVE file - wrong format");
			let s = 0, c = null, l = e.filePos;
			for (; o === null || l < o;) {
				let e = this.reader.requestSlice(l, 8);
				if (e instanceof Promise && (e = await e), !e) break;
				let t = K(e, 4), i = Ys(e, n), a = e.filePos;
				if (r && s === 0 && t !== "ds64") throw Error("Invalid RF64 file: First chunk must be \"ds64\".");
				if (t === "fmt ") await this.parseFmtChunk(a, i, n);
				else if (t === "data") {
					if (c ??= i, this.dataStart = e.filePos, this.dataSize = Math.min(c, (o ?? Infinity) - this.dataStart), this.reader.fileSize === null) break;
				} else if (t === "ds64") {
					let e = this.reader.requestSlice(a, i);
					if (e instanceof Promise && (e = await e), !e) break;
					let t = $s(e, n);
					c = $s(e, n), o = Math.min(t + 8, this.reader.fileSize ?? Infinity);
				} else t === "LIST" ? await this.parseListChunk(a, i, n) : (t === "ID3 " || t === "id3 ") && await this.parseId3Chunk(a, i);
				l = a + i + (i & 1), s++;
			}
			if (!this.audioInfo) throw Error("Invalid WAVE file - missing \"fmt \" chunk");
			if (this.dataStart === -1) throw Error("Invalid WAVE file - missing \"data\" chunk");
			let u = this.audioInfo.blockSizeInBytes;
			this.dataSize = Math.floor(this.dataSize / u) * u, this.trackBackings.push(new Mi(this));
		})();
	}
	async parseFmtChunk(e, t, n) {
		let r = this.reader.requestSlice(e, t);
		if (r instanceof Promise && (r = await r), !r) return;
		let i = Gs(r, n), a = Gs(r, n), o = Ys(r, n);
		r.skip(4);
		let s = Gs(r, n), c;
		if (c = t === 14 ? 8 : Gs(r, n), t >= 18 && i !== 357) {
			let e = Gs(r, n), a = t - 18;
			if (Math.min(a, e) >= 22 && i === ki.EXTENSIBLE) {
				r.skip(6);
				let e = U(r, 16);
				i = e[0] | e[1] << 8;
			}
		}
		(i === ki.MULAW || i === ki.ALAW) && (c = 8), this.audioInfo = {
			format: i,
			numberOfChannels: a,
			sampleRate: o,
			sampleSizeInBytes: Math.ceil(c / 8),
			blockSizeInBytes: s
		};
	}
	async parseListChunk(e, t, n) {
		let r = this.reader.requestSlice(e, t);
		if (r instanceof Promise && (r = await r), !r) return;
		let i = K(r, 4);
		if (i !== "INFO" && i !== "INF0") return;
		let a = r.filePos;
		for (; a <= e + t - 8;) {
			r.filePos = a;
			let e = K(r, 4), t = Ys(r, n), i = U(r, t), o = 0;
			for (let e = 0; e < i.length && i[e] !== 0; e++) o++;
			let s = String.fromCharCode(...i.subarray(0, o));
			switch (this.metadataTags.raw ??= {}, this.metadataTags.raw[e] = s, e) {
				case "INAM":
				case "TITL":
					this.metadataTags.title ??= s;
					break;
				case "TIT3":
					this.metadataTags.description ??= s;
					break;
				case "IART":
					this.metadataTags.artist ??= s;
					break;
				case "IPRD":
					this.metadataTags.album ??= s;
					break;
				case "IPRT":
				case "ITRK":
				case "TRCK":
					{
						let e = s.split("/"), t = Number.parseInt(e[0], 10), n = e[1] && Number.parseInt(e[1], 10);
						Number.isInteger(t) && t > 0 && (this.metadataTags.trackNumber ??= t), n && Number.isInteger(n) && n > 0 && (this.metadataTags.tracksTotal ??= n);
					}
					break;
				case "ICRD":
				case "IDIT":
					{
						let e = new Date(s);
						Number.isNaN(e.getTime()) || (this.metadataTags.date ??= e);
					}
					break;
				case "YEAR":
					{
						let e = Number.parseInt(s, 10);
						Number.isInteger(e) && e > 0 && (this.metadataTags.date ??= new Date(e, 0, 1));
					}
					break;
				case "IGNR":
				case "GENR":
					this.metadataTags.genre ??= s;
					break;
				case "ICMT":
				case "CMNT":
				case "COMM":
					this.metadataTags.comment ??= s;
					break;
			}
			a += 8 + t + (t & 1);
		}
	}
	async parseId3Chunk(e, t) {
		let n = this.reader.requestSlice(e, t);
		if (n instanceof Promise && (n = await n), !n) return;
		let r = dc(n);
		if (r) {
			let i = t - 10;
			r.size = Math.min(r.size, i), r.size > 0 && fc(n.slice(e + 10, r.size), r, this.metadataTags);
		}
	}
	getCodec() {
		if (a(this.audioInfo), this.audioInfo.format === ki.MULAW) return "ulaw";
		if (this.audioInfo.format === ki.ALAW) return "alaw";
		if (this.audioInfo.format === ki.PCM) {
			if (this.audioInfo.sampleSizeInBytes === 1) return "pcm-u8";
			if (this.audioInfo.sampleSizeInBytes === 2) return "pcm-s16";
			if (this.audioInfo.sampleSizeInBytes === 3) return "pcm-s24";
			if (this.audioInfo.sampleSizeInBytes === 4) return "pcm-s32";
		}
		return this.audioInfo.format === ki.IEEE_FLOAT && this.audioInfo.sampleSizeInBytes === 4 ? "pcm-f32" : null;
	}
	async getMimeType() {
		return "audio/wav";
	}
	async getTrackBackings() {
		return await this.readMetadata(), this.trackBackings;
	}
	async getMetadataTags() {
		return await this.readMetadata(), this.metadataTags;
	}
}, ji = 2048, Mi = class {
	constructor(e) {
		this.demuxer = e;
	}
	getType() {
		return "audio";
	}
	getId() {
		return 1;
	}
	getNumber() {
		return 1;
	}
	getCodec() {
		return this.demuxer.getCodec();
	}
	getInternalCodecId() {
		return a(this.demuxer.audioInfo), this.demuxer.audioInfo.format;
	}
	async getDecoderConfig() {
		let e = this.demuxer.getCodec();
		return e ? (a(this.demuxer.audioInfo), {
			codec: e,
			numberOfChannels: this.demuxer.audioInfo.numberOfChannels,
			sampleRate: this.demuxer.audioInfo.sampleRate
		}) : null;
	}
	getNumberOfChannels() {
		return a(this.demuxer.audioInfo), this.demuxer.audioInfo.numberOfChannels;
	}
	getSampleRate() {
		return a(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
	}
	getTimeResolution() {
		return a(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
	}
	isRelativeToUnixEpoch() {
		return !1;
	}
	getUnixTimeForTimestamp() {
		return null;
	}
	getPairingMask() {
		return 1n;
	}
	getBitrate() {
		return null;
	}
	getAverageBitrate() {
		return null;
	}
	async getDurationFromMetadata() {
		return a(this.demuxer.dataSize !== -1), this.demuxer.dataSize / this.demuxer.audioInfo.blockSizeInBytes / this.demuxer.audioInfo.sampleRate;
	}
	async getLiveRefreshInterval() {
		return null;
	}
	getName() {
		return null;
	}
	getLanguageCode() {
		return "und";
	}
	getDisposition() {
		return { ...tt };
	}
	async getPacketAtIndex(e, t) {
		a(e >= 0), a(this.demuxer.audioInfo);
		let n = e * ji * this.demuxer.audioInfo.blockSizeInBytes;
		if (n >= this.demuxer.dataSize) return null;
		let r = Math.min(ji * this.demuxer.audioInfo.blockSizeInBytes, this.demuxer.dataSize - n);
		if (this.demuxer.reader.fileSize === null) {
			let e = this.demuxer.reader.requestSlice(this.demuxer.dataStart + n, r);
			if (e instanceof Promise && (e = await e), !e) return null;
		}
		let i;
		if (t.metadataOnly) i = Jn;
		else {
			let e = this.demuxer.reader.requestSlice(this.demuxer.dataStart + n, r);
			e instanceof Promise && (e = await e), a(e), i = U(e, r);
		}
		let o = e * ji / this.demuxer.audioInfo.sampleRate, s = r / this.demuxer.audioInfo.blockSizeInBytes / this.demuxer.audioInfo.sampleRate;
		return this.demuxer.lastKnownPacketIndex = Math.max(e, this.demuxer.lastKnownPacketIndex), new z(i, "key", o, s, e, r);
	}
	getFirstPacket(e) {
		return this.getPacketAtIndex(0, e);
	}
	async getPacket(e, t) {
		a(this.demuxer.audioInfo);
		let n = Math.floor(Math.min(e * this.demuxer.audioInfo.sampleRate / ji, (this.demuxer.dataSize - 1) / (ji * this.demuxer.audioInfo.blockSizeInBytes)));
		if (n < 0) return null;
		let r = await this.getPacketAtIndex(n, t);
		if (r) return r;
		if (n === 0) return null;
		a(this.demuxer.reader.fileSize === null);
		let i = await this.getPacketAtIndex(this.demuxer.lastKnownPacketIndex, t);
		for (; i;) {
			let e = await this.getNextPacket(i, t);
			if (!e) break;
			i = e;
		}
		return i;
	}
	getNextPacket(e, t) {
		a(this.demuxer.audioInfo);
		let n = Math.round(e.timestamp * this.demuxer.audioInfo.sampleRate / ji);
		return this.getPacketAtIndex(n + 1, t);
	}
	getKeyPacket(e, t) {
		return this.getPacket(e, t);
	}
	getNextKeyPacket(e, t) {
		return this.getNextPacket(e, t);
	}
}, Ni = (e) => {
	let t = e.filePos, n = new P(U(e, 9));
	if (n.readBits(12) !== 4095 || (n.skipBits(1), n.readBits(2) !== 0)) return null;
	let r = n.readBits(1), i = n.readBits(2) + 1, a = n.readBits(4);
	if (a === 15) return null;
	n.skipBits(1);
	let o = n.readBits(3);
	if (o === 0) throw Error("ADTS frames with channel configuration 0 are not supported.");
	n.skipBits(1), n.skipBits(1), n.skipBits(1), n.skipBits(1);
	let s = n.readBits(13);
	n.skipBits(11);
	let c = n.readBits(2) + 1;
	if (c !== 1) throw Error("ADTS frames with more than one AAC frame are not supported.");
	let l = null;
	return r === 1 ? e.filePos -= 2 : l = n.readBits(16), {
		objectType: i,
		samplingFrequencyIndex: a,
		channelConfiguration: o,
		frameLength: s,
		numberOfAacFrames: c,
		crcCheck: l,
		startPos: t
	};
}, Pi = 1024, Fi = class extends qn {
	constructor(e) {
		super(e), this.metadataPromise = null, this.firstFrameHeader = null, this.loadedSamples = [], this.metadataTags = null, this.trackBackings = [], this.readingMutex = new T(), this.lastSampleLoaded = !1, this.lastLoadedPos = 0, this.nextTimestampInSamples = 0, this.reader = e._reader;
	}
	async readMetadata() {
		return this.metadataPromise ??= (async () => {
			for (; !this.firstFrameHeader && !this.lastSampleLoaded;) await this.advanceReader();
			a(this.firstFrameHeader), this.trackBackings = [new Ii(this)];
		})();
	}
	async advanceReader() {
		if (this.lastLoadedPos === 0) for (;;) {
			let e = this.reader.requestSlice(this.lastLoadedPos, 10);
			if (e instanceof Promise && (e = await e), !e) {
				this.lastSampleLoaded = !0;
				return;
			}
			let t = dc(e);
			if (!t) break;
			this.lastLoadedPos = e.filePos + t.size;
		}
		let e = this.reader.requestSliceRange(this.lastLoadedPos, 7, 9);
		if (e instanceof Promise && (e = await e), !e) {
			this.lastSampleLoaded = !0;
			return;
		}
		let t = Ni(e);
		if (!t) {
			this.lastSampleLoaded = !0;
			return;
		}
		if (this.reader.fileSize !== null && t.startPos + t.frameLength > this.reader.fileSize) {
			this.lastSampleLoaded = !0;
			return;
		}
		this.firstFrameHeader ||= t;
		let n = F[t.samplingFrequencyIndex];
		a(n !== void 0);
		let r = Pi / n, i = {
			timestamp: this.nextTimestampInSamples / n,
			duration: r,
			dataStart: t.startPos,
			dataSize: t.frameLength
		};
		this.loadedSamples.push(i), this.nextTimestampInSamples += Pi, this.lastLoadedPos = t.startPos + t.frameLength;
	}
	async getMimeType() {
		return "audio/aac";
	}
	async getTrackBackings() {
		return await this.readMetadata(), this.trackBackings;
	}
	async getMetadataTags() {
		let e = await this.readingMutex.acquire();
		try {
			if (await this.readMetadata(), this.metadataTags) return this.metadataTags;
			this.metadataTags = {};
			let e = 0;
			for (;;) {
				let t = this.reader.requestSlice(e, 10);
				if (t instanceof Promise && (t = await t), !t) break;
				let n = dc(t);
				if (!n) break;
				let r = this.reader.requestSlice(t.filePos, n.size);
				if (r instanceof Promise && (r = await r), !r) break;
				fc(r, n, this.metadataTags), e = t.filePos + n.size;
			}
			return this.metadataTags;
		} finally {
			e();
		}
	}
}, Ii = class {
	constructor(e) {
		this.demuxer = e;
	}
	getType() {
		return "audio";
	}
	getId() {
		return 1;
	}
	getNumber() {
		return 1;
	}
	getTimeResolution() {
		return this.getSampleRate() / Pi;
	}
	isRelativeToUnixEpoch() {
		return !1;
	}
	getUnixTimeForTimestamp() {
		return null;
	}
	getPairingMask() {
		return 1n;
	}
	getBitrate() {
		return null;
	}
	getAverageBitrate() {
		return null;
	}
	async getDurationFromMetadata() {
		return null;
	}
	async getLiveRefreshInterval() {
		return null;
	}
	getName() {
		return null;
	}
	getLanguageCode() {
		return "und";
	}
	getCodec() {
		return "aac";
	}
	getInternalCodecId() {
		return a(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.objectType;
	}
	getNumberOfChannels() {
		a(this.demuxer.firstFrameHeader);
		let e = rt[this.demuxer.firstFrameHeader.channelConfiguration];
		return a(e !== void 0), e;
	}
	getSampleRate() {
		a(this.demuxer.firstFrameHeader);
		let e = F[this.demuxer.firstFrameHeader.samplingFrequencyIndex];
		return a(e !== void 0), e;
	}
	getDisposition() {
		return { ...tt };
	}
	async getDecoderConfig() {
		return a(this.demuxer.firstFrameHeader), {
			codec: `mp4a.40.${this.demuxer.firstFrameHeader.objectType}`,
			numberOfChannels: this.getNumberOfChannels(),
			sampleRate: this.getSampleRate()
		};
	}
	async getPacketAtIndex(e, t) {
		if (e === -1) return null;
		let n = this.demuxer.loadedSamples[e];
		if (!n) return null;
		let r;
		if (t.metadataOnly) r = Jn;
		else {
			let e = this.demuxer.reader.requestSlice(n.dataStart, n.dataSize);
			if (e instanceof Promise && (e = await e), !e) return null;
			r = U(e, n.dataSize);
		}
		return new z(r, "key", n.timestamp, n.duration, e, n.dataSize);
	}
	getFirstPacket(e) {
		return this.getPacketAtIndex(0, e);
	}
	async getNextPacket(e, t) {
		let n = await this.demuxer.readingMutex.acquire();
		try {
			let n = ie(this.demuxer.loadedSamples, e.timestamp, (e) => e.timestamp);
			if (n === -1) throw Error("Packet was not created from this track.");
			let r = n + 1;
			for (; r >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded;) await this.demuxer.advanceReader();
			return this.getPacketAtIndex(r, t);
		} finally {
			n();
		}
	}
	async getPacket(e, t) {
		let n = await this.demuxer.readingMutex.acquire();
		try {
			for (;;) {
				let n = D(this.demuxer.loadedSamples, e, (e) => e.timestamp);
				if (n === -1 && this.demuxer.loadedSamples.length > 0) return null;
				if (this.demuxer.lastSampleLoaded || n >= 0 && n + 1 < this.demuxer.loadedSamples.length) return this.getPacketAtIndex(n, t);
				await this.demuxer.advanceReader();
			}
		} finally {
			n();
		}
	}
	getKeyPacket(e, t) {
		return this.getPacket(e, t);
	}
	getNextKeyPacket(e, t) {
		return this.getNextPacket(e, t);
	}
}, Li = (e) => e === 0 ? null : e === 1 ? 192 : e >= 2 && e <= 5 ? 144 * 2 ** e : e === 6 ? "uncommon-u8" : e === 7 ? "uncommon-u16" : e >= 8 && e <= 15 ? 2 ** e : null, Ri = (e, t) => {
	switch (e) {
		case 0: return t;
		case 1: return 88200;
		case 2: return 176400;
		case 3: return 192e3;
		case 4: return 8e3;
		case 5: return 16e3;
		case 6: return 22050;
		case 7: return 24e3;
		case 8: return 32e3;
		case 9: return 44100;
		case 10: return 48e3;
		case 11: return 96e3;
		case 12: return "uncommon-u8";
		case 13: return "uncommon-u16";
		case 14: return "uncommon-u16-10";
		default: return null;
	}
}, zi = (e) => {
	let t = 0, n = new P(U(e, 1));
	for (; n.readBits(1) === 1;) t++;
	if (t === 0) return n.readBits(7);
	let r = [], i = t - 1, a = new P(U(e, i)), o = 8 - t - 1;
	for (let e = 0; e < o; e++) r.unshift(n.readBits(1));
	for (let e = 0; e < i; e++) for (let e = 0; e < 8; e++) {
		let t = a.readBits(1);
		e < 2 || r.unshift(t);
	}
	return r.reduce((e, t, n) => e | t << n, 0);
}, Bi = (e, t) => {
	if (t === "uncommon-u16") return Ks(e) + 1;
	if (t === "uncommon-u8") return W(e) + 1;
	if (typeof t == "number") return t;
	A(t), a(!1);
}, Vi = (e, t) => t === "uncommon-u16" ? Ks(e) : t === "uncommon-u16-10" ? Ks(e) * 10 : t === "uncommon-u8" ? W(e) : typeof t == "number" ? t : null, Hi = (e) => {
	let t = 0;
	for (let n of e) {
		t ^= n;
		for (let e = 0; e < 8; e++) t & 128 ? t = t << 1 ^ 7 : t <<= 1, t &= 255;
	}
	return t;
}, Ui = class extends qn {
	constructor(e) {
		super(e), this.loadedSamples = [], this.metadataPromise = null, this.trackBacking = null, this.metadataTags = {}, this.audioInfo = null, this.lastLoadedPos = null, this.blockingBit = null, this.readingMutex = new T(), this.lastSampleLoaded = !1, this.reader = e._reader;
	}
	async getMetadataTags() {
		return await this.readMetadata(), this.metadataTags;
	}
	async getTrackBackings() {
		return await this.readMetadata(), a(this.trackBacking), [this.trackBacking];
	}
	async getMimeType() {
		return "audio/flac";
	}
	async readMetadata() {
		return this.metadataPromise ??= (async () => {
			let e = 0;
			for (;;) {
				let t = this.reader.requestSlice(e, 10);
				if (t instanceof Promise && (t = await t), !t) {
					this.lastSampleLoaded = !0;
					return;
				}
				let n = dc(t);
				if (!n) break;
				let r = this.reader.requestSlice(t.filePos, n.size);
				r instanceof Promise && (r = await r), a(r), fc(r, n, this.metadataTags), e = t.filePos + n.size;
			}
			for (e += 4; this.reader.fileSize === null || e < this.reader.fileSize;) {
				let t = this.reader.requestSlice(e, 4);
				if (t instanceof Promise && (t = await t), e += 4, t === null) throw Error(`Metadata block at position ${e} is too small! Corrupted file.`);
				a(t);
				let n = W(t), r = qs(t), i = (n & 128) != 0;
				switch (n & 127) {
					case Fn.STREAMINFO: {
						let t = this.reader.requestSlice(e, r);
						if (t instanceof Promise && (t = await t), a(t), t === null) throw Error(`StreamInfo block at position ${e} is too small! Corrupted file.`);
						let n = U(t, 34), i = new P(n), o = i.readBits(16), s = i.readBits(16), c = i.readBits(24), l = i.readBits(24), u = i.readBits(20), d = i.readBits(3) + 1;
						i.readBits(5);
						let f = i.readBits(36);
						i.skipBits(128);
						let p = /* @__PURE__ */ new Uint8Array(42);
						p.set(new Uint8Array([
							102,
							76,
							97,
							67
						]), 0), p.set(new Uint8Array([
							128,
							0,
							0,
							34
						]), 4), p.set(n, 8), this.audioInfo = {
							numberOfChannels: d,
							sampleRate: u,
							totalSamples: f,
							minimumBlockSize: o,
							maximumBlockSize: s,
							minimumFrameSize: c,
							maximumFrameSize: l,
							description: p
						}, this.trackBacking = new Wi(this);
						break;
					}
					case Fn.VORBIS_COMMENT: {
						let t = this.reader.requestSlice(e, r);
						t instanceof Promise && (t = await t), a(t), In(U(t, r), this.metadataTags);
						break;
					}
					case Fn.PICTURE: {
						let t = this.reader.requestSlice(e, r);
						t instanceof Promise && (t = await t), a(t);
						let n = G(t), i = G(t), o = m.decode(U(t, i)), s = G(t), c = m.decode(U(t, s));
						t.skip(16);
						let l = G(t), u = U(t, l);
						this.metadataTags.images ??= [], this.metadataTags.images.push({
							data: u,
							mimeType: o,
							kind: n === 3 ? "coverFront" : n === 4 ? "coverBack" : "unknown",
							description: c
						});
						break;
					}
					default: break;
				}
				if (e += r, i) {
					this.lastLoadedPos = e;
					break;
				}
			}
			if (!this.audioInfo) throw Error("Missing STREAMINFO metadata block! Corrupted FLAC file.");
		})();
	}
	async readNextFlacFrame({ startPos: e, isFirstPacket: t }) {
		a(this.audioInfo);
		let n = this.audioInfo.maximumBlockSize * this.audioInfo.numberOfChannels * 4 + 16 + 2, r = this.audioInfo.minimumFrameSize || 10, i = (this.audioInfo.maximumFrameSize || n) + 16, o = await this.reader.requestSliceRange(e, 16, i);
		if (!o) return null;
		let s = this.readFlacFrameHeader({
			slice: o,
			isFirstPacket: t
		});
		if (!s) return null;
		for (o.filePos = e + r;;) {
			if (o.filePos > o.end - 6) return {
				num: s.num,
				blockSize: s.blockSize,
				sampleRate: s.sampleRate,
				size: o.end - e,
				isLastFrame: !0
			};
			if (W(o) === 255) {
				let t = o.filePos;
				if (W(o) !== (this.blockingBit === 1 ? 249 : 248)) {
					o.filePos = t;
					continue;
				}
				o.skip(-2);
				let n = o.filePos - e, r = this.readFlacFrameHeader({
					slice: o,
					isFirstPacket: !1
				});
				if (!r) {
					o.filePos = t;
					continue;
				}
				if (this.blockingBit === 0) {
					if (r.num - s.num !== 1) {
						o.filePos = t;
						continue;
					}
				} else if (r.num - s.num !== s.blockSize) {
					o.filePos = t;
					continue;
				}
				return {
					num: s.num,
					blockSize: s.blockSize,
					sampleRate: s.sampleRate,
					size: n,
					isLastFrame: !1
				};
			}
		}
	}
	readFlacFrameHeader({ slice: e, isFirstPacket: t }) {
		let n = e.filePos, r = new P(U(e, 4));
		if (r.readBits(15) !== 32764) return null;
		if (this.blockingBit === null) {
			a(t);
			let e = r.readBits(1);
			this.blockingBit = e;
		} else if (this.blockingBit === 1) {
			if (a(!t), r.readBits(1) !== 1) return null;
		} else if (this.blockingBit === 0) {
			if (a(!t), r.readBits(1) !== 0) return null;
		} else throw Error("Invalid blocking bit");
		let i = Li(r.readBits(4));
		if (!i) return null;
		a(this.audioInfo);
		let o = Ri(r.readBits(4), this.audioInfo.sampleRate);
		if (!o || (r.readBits(4), r.readBits(3), r.readBits(1) !== 0)) return null;
		let s = zi(e), c = Bi(e, i), l = Vi(e, o);
		if (l === null || l !== this.audioInfo.sampleRate) return null;
		let u = e.filePos - n, d = W(e);
		return e.skip(-u), e.skip(-1), d === Hi(U(e, u)) ? {
			num: s,
			blockSize: c,
			sampleRate: l
		} : null;
	}
	async advanceReader() {
		await this.readMetadata(), a(this.lastLoadedPos !== null), a(this.audioInfo);
		let e = this.lastLoadedPos, t = await this.readNextFlacFrame({
			startPos: e,
			isFirstPacket: this.loadedSamples.length === 0
		});
		if (!t) {
			this.lastSampleLoaded = !0;
			return;
		}
		let n = this.loadedSamples[this.loadedSamples.length - 1], r = {
			blockOffset: n ? n.blockOffset + n.blockSize : 0,
			blockSize: t.blockSize,
			byteOffset: e,
			byteSize: t.size
		};
		if (this.lastLoadedPos += t.size, this.loadedSamples.push(r), t.isLastFrame) {
			this.lastSampleLoaded = !0;
			return;
		}
	}
}, Wi = class {
	constructor(e) {
		this.demuxer = e;
	}
	getType() {
		return "audio";
	}
	getId() {
		return 1;
	}
	getNumber() {
		return 1;
	}
	getCodec() {
		return "flac";
	}
	getInternalCodecId() {
		return null;
	}
	getNumberOfChannels() {
		return a(this.demuxer.audioInfo), this.demuxer.audioInfo.numberOfChannels;
	}
	getSampleRate() {
		return a(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
	}
	getName() {
		return null;
	}
	getLanguageCode() {
		return "und";
	}
	getTimeResolution() {
		return a(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
	}
	isRelativeToUnixEpoch() {
		return !1;
	}
	getUnixTimeForTimestamp() {
		return null;
	}
	getPairingMask() {
		return 1n;
	}
	getBitrate() {
		return null;
	}
	getAverageBitrate() {
		return null;
	}
	async getDurationFromMetadata() {
		return a(this.demuxer.audioInfo), this.demuxer.audioInfo.totalSamples === 0 ? null : this.demuxer.audioInfo.totalSamples / this.demuxer.audioInfo.sampleRate;
	}
	async getLiveRefreshInterval() {
		return null;
	}
	getDisposition() {
		return { ...tt };
	}
	async getDecoderConfig() {
		return a(this.demuxer.audioInfo), {
			codec: "flac",
			numberOfChannels: this.demuxer.audioInfo.numberOfChannels,
			sampleRate: this.demuxer.audioInfo.sampleRate,
			description: this.demuxer.audioInfo.description
		};
	}
	async getPacket(e, t) {
		if (a(this.demuxer.audioInfo), e < 0) return null;
		let n = await this.demuxer.readingMutex.acquire();
		try {
			for (;;) {
				let n = D(this.demuxer.loadedSamples, e, (e) => e.blockOffset / this.demuxer.audioInfo.sampleRate);
				if (n === -1) {
					await this.demuxer.advanceReader();
					continue;
				}
				let r = this.demuxer.loadedSamples[n];
				if (r.blockOffset / this.demuxer.audioInfo.sampleRate + r.blockSize / this.demuxer.audioInfo.sampleRate <= e) {
					if (this.demuxer.lastSampleLoaded) return this.getPacketAtIndex(this.demuxer.loadedSamples.length - 1, t);
					await this.demuxer.advanceReader();
					continue;
				}
				return this.getPacketAtIndex(n, t);
			}
		} finally {
			n();
		}
	}
	async getNextPacket(e, t) {
		let n = await this.demuxer.readingMutex.acquire();
		try {
			let n = e.sequenceNumber + 1;
			if (this.demuxer.lastSampleLoaded && n >= this.demuxer.loadedSamples.length) return null;
			for (; n >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded;) await this.demuxer.advanceReader();
			return this.getPacketAtIndex(n, t);
		} finally {
			n();
		}
	}
	getKeyPacket(e, t) {
		return this.getPacket(e, t);
	}
	getNextKeyPacket(e, t) {
		return this.getNextPacket(e, t);
	}
	async getPacketAtIndex(e, t) {
		let n = this.demuxer.loadedSamples[e];
		if (!n) return null;
		let r;
		if (t.metadataOnly) r = Jn;
		else {
			let e = this.demuxer.reader.requestSlice(n.byteOffset, n.byteSize);
			if (e instanceof Promise && (e = await e), !e) return null;
			r = U(e, n.byteSize);
		}
		a(this.demuxer.audioInfo);
		let i = n.blockOffset / this.demuxer.audioInfo.sampleRate, o = n.blockSize / this.demuxer.audioInfo.sampleRate;
		return new z(r, "key", i, o, e, n.byteSize);
	}
	async getFirstPacket(e) {
		for (; this.demuxer.loadedSamples.length === 0 && !this.demuxer.lastSampleLoaded;) await this.demuxer.advanceReader();
		return this.getPacketAtIndex(0, e);
	}
}, Gi = 9e4, Ki = (e) => {
	let t = "video/MP2T", n = [...new Set(e.filter(Boolean))];
	return n.length > 0 && (t += `; codecs="${n.join(", ")}"`), t;
}, qi = "PES packet is missing PTS where it was expected. PES packets without PTS are not currently supported. If you think this file should be supported, please report it.", Ji = /* @__PURE__ */ new Set(), Yi = class extends qn {
	constructor(e) {
		super(e), this.metadataPromise = null, this.elementaryStreams = [], this.trackBackingEntries = [], this.packetOffset = 0, this.packetStride = -1, this.sectionEndPositions = [], this.seekChunkSize = 5 * 1024 * 1024, this.minReferencePointByteDistance = -1, this.reader = e._reader;
	}
	async readMetadata() {
		return this.metadataPromise ??= (async () => {
			let e = this.reader.requestSlice(0, 205);
			e instanceof Promise && (e = await e), a(e);
			let t = U(e, 205);
			if (t[0] === 71 && t[188] === 71) this.packetOffset = 0, this.packetStride = 188;
			else if (t[0] === 71 && t[204] === 71) this.packetOffset = 0, this.packetStride = 204;
			else if (t[4] === 71 && t[196] === 71) this.packetOffset = 4, this.packetStride = 192;
			else throw Error("Unreachable.");
			this.minReferencePointByteDistance = 256 * this.packetStride;
			let n = this.packetOffset, r = null, o = !1, s = !1;
			for (;;) {
				let e = await this.readPacketHeader(n);
				if (!e) break;
				if (e.payloadUnitStartIndicator === 0) {
					n += this.packetStride;
					continue;
				}
				if (s && !this.elementaryStreams.some((t) => t.pid === e.pid)) {
					n += this.packetStride;
					continue;
				}
				let t = await this.readSection(n, !0, !s);
				if (!t) break;
				let c = !1;
				if (!s && t.pid !== 0 && !(t.payload[0] === 0 && t.payload[1] === 0 && t.payload[2] === 1)) {
					let e = new P(t.payload), n = e.readAlignedByte();
					e.skipBits(8 * n), c = e.readBits(8) === 2;
				}
				if (t.pid === 0 && !o) {
					let e = new P(t.payload), n = e.readAlignedByte();
					e.skipBits(8 * n), e.skipBits(14);
					let i = e.readBits(10);
					for (e.skipBits(40); 8 * (i + 3) - e.pos > 32;) {
						let t = e.readBits(16);
						e.skipBits(3);
						let n = e.readBits(13);
						if (t !== 0) {
							if (r !== null) throw Error("Only files with a single program are supported.");
							r = n;
						}
					}
					if (r === null) throw Error("Program Association Table must link to a Program Map Table.");
					o = !0;
				} else if ((t.pid === r || c) && !s) {
					let e = new P(t.payload), n = e.readAlignedByte();
					e.skipBits(8 * n), e.skipBits(12);
					let r = e.readBits(12);
					e.skipBits(43), e.readBits(13), e.skipBits(6);
					let a = e.readBits(10);
					for (e.skipBits(8 * a); 8 * (r + 3) - e.pos > 32;) {
						let t = e.readBits(8);
						e.skipBits(3);
						let n = e.readBits(13);
						e.skipBits(6);
						let r = e.readBits(10), a = e.pos + 8 * r, o = !1, s = !1;
						for (; e.pos < a;) {
							let t = e.readBits(8), n = e.readBits(8);
							t === 106 ? o = !0 : (t === 122 || t === 204) && (s = !0), e.skipBits(8 * n);
						}
						let c = null;
						switch (t) {
							case 27:
							case 36:
								c = {
									type: "video",
									codec: t === 27 ? "avc" : "hevc",
									decoderConfig: null,
									avcCodecInfo: null,
									hevcCodecInfo: null,
									colorSpace: {
										primaries: null,
										transfer: null,
										matrix: null,
										fullRange: null
									},
									width: -1,
									height: -1,
									squarePixelWidth: -1,
									squarePixelHeight: -1,
									reorderSize: -1
								};
								break;
							case 3:
							case 4:
							case 15:
							case 129:
							case 135:
								{
									let e;
									if (t === 3 || t === 4) e = "mp3";
									else if (t === 15) e = "aac";
									else if (t === 129) e = "ac3";
									else if (t === 135) e = "eac3";
									else throw Error("Unreachable.");
									c = {
										type: "audio",
										codec: e,
										decoderConfig: null,
										aacCodecInfo: null,
										numberOfChannels: -1,
										sampleRate: -1
									};
								}
								break;
							case 6:
								s ? c = {
									type: "audio",
									codec: "eac3",
									decoderConfig: null,
									aacCodecInfo: null,
									numberOfChannels: -1,
									sampleRate: -1
								} : o && (c = {
									type: "audio",
									codec: "ac3",
									decoderConfig: null,
									aacCodecInfo: null,
									numberOfChannels: -1,
									sampleRate: -1
								});
								break;
							default: Ji.has(t) || (i._warn(`Note: MPEG-TS streams with stream_type 0x${t.toString(16)} are not currently supported.`), Ji.add(t));
						}
						c && this.elementaryStreams.push({
							demuxer: this,
							pid: n,
							streamType: t,
							initialized: !1,
							firstSection: null,
							canBeTrustedWithKeyPackets: !1,
							info: c,
							referencePesPackets: []
						});
					}
					s = !0;
				} else {
					let e = this.elementaryStreams.find((e) => e.pid === t.pid);
					outer: if (e && !e.initialized) {
						let n = Zi(t, !0);
						if (!n) throw Error(`Couldn't read first PES packet for Elementary Stream with PID ${e.pid}`);
						if (e.firstSection = t, e.canBeTrustedWithKeyPackets = t.randomAccessIndicator === 1, this.input._initInput) {
							let n = (await this.input._initInput._getDemuxer()).elementaryStreams.find((n) => n.pid === t.pid && n.info.codec === e.info.codec);
							if (n) {
								e.info = n.info, e.initialized = !0;
								break outer;
							}
						}
						let r = new na(e, n);
						if (e.info.type === "video") {
							for (;;) {
								let t = r;
								if (t.suppliedPacket = null, await r.markNextPacket(), e.info.codec === "avc") {
									if (!r.suppliedPacket) throw Error("Invalid AVC video stream; could not extract AVCDecoderConfigurationRecord from any packet.");
									if (e.info.avcCodecInfo = on(r.suppliedPacket.data), !e.info.avcCodecInfo) continue;
									let t = e.info.avcCodecInfo.sequenceParameterSets[0];
									a(t);
									let n = un(t);
									e.info.width = n.displayWidth, e.info.height = n.displayHeight;
									let i = n.pixelAspectRatio.num, o = n.pixelAspectRatio.den;
									i > 0 && o > 0 && (i > o ? (e.info.squarePixelWidth = Math.round(e.info.width * i / o), e.info.squarePixelHeight = e.info.height) : (e.info.squarePixelWidth = e.info.width, e.info.squarePixelHeight = Math.round(e.info.height * o / i))), e.info.colorSpace = {
										primaries: y[n.colourPrimaries],
										transfer: x[n.transferCharacteristics],
										matrix: C[n.matrixCoefficients],
										fullRange: !!n.fullRangeFlag
									}, e.info.reorderSize = n.maxDecFrameBuffering;
									break;
								} else if (e.info.codec === "hevc") {
									if (!r.suppliedPacket) throw Error("Invalid HEVC video stream; could not extract HVCDecoderConfigurationRecord from first packet.");
									if (e.info.hevcCodecInfo = gn(r.suppliedPacket.data), !e.info.hevcCodecInfo) continue;
									let t = e.info.hevcCodecInfo.arrays.find((e) => e.nalUnitType === Yt.SPS_NUT).nalUnits[0];
									a(t);
									let n = hn(t);
									e.info.width = n.displayWidth, e.info.height = n.displayHeight, n.pixelAspectRatio.num > n.pixelAspectRatio.den ? (e.info.squarePixelWidth = Math.round(e.info.width * n.pixelAspectRatio.num / n.pixelAspectRatio.den), e.info.squarePixelHeight = e.info.height) : (e.info.squarePixelWidth = e.info.width, e.info.squarePixelHeight = Math.round(e.info.height * n.pixelAspectRatio.den / n.pixelAspectRatio.num)), e.info.colorSpace = {
										primaries: y[n.colourPrimaries],
										transfer: x[n.transferCharacteristics],
										matrix: C[n.matrixCoefficients],
										fullRange: !!n.fullRangeFlag
									}, e.info.reorderSize = n.maxDecFrameBuffering;
									break;
								} else throw Error("Unhandled.");
							}
							e.info.decoderConfig = {
								codec: vt({
									width: e.info.width,
									height: e.info.height,
									codec: e.info.codec,
									codecDescription: null,
									colorSpace: e.info.colorSpace,
									avcType: 1,
									avcCodecInfo: e.info.avcCodecInfo,
									hevcCodecInfo: e.info.hevcCodecInfo,
									vp9CodecInfo: null,
									av1CodecInfo: null
								}),
								codedWidth: e.info.width,
								codedHeight: e.info.height,
								colorSpace: e.info.colorSpace
							}, (e.info.width !== e.info.squarePixelWidth || e.info.height !== e.info.squarePixelHeight) && (e.info.decoderConfig.displayAspectWidth = e.info.squarePixelWidth, e.info.decoderConfig.displayAspectHeight = e.info.squarePixelHeight), e.initialized = !0;
						} else {
							if (await r.markNextPacket(), !r.suppliedPacket) throw Error(`Couldn't parse first media packet for Elementary Stream with PID ${e.pid}`);
							if (e.info.codec === "aac") {
								let t = Ni(Us.tempFromBytes(r.suppliedPacket.data));
								if (!t) throw Error("Invalid AAC audio stream; could not read ADTS frame header from first packet.");
								e.info.aacCodecInfo = {
									isMpeg2: !1,
									objectType: t.objectType
								}, e.info.numberOfChannels = rt[t.channelConfiguration], e.info.sampleRate = F[t.samplingFrequencyIndex];
							} else if (e.info.codec === "mp3") {
								let t = Vt(G(Us.tempFromBytes(r.suppliedPacket.data)), r.suppliedPacket.data.byteLength);
								if (!t.header) throw Error("Invalid MP3 audio stream; could not read frame header from first packet.");
								e.info.numberOfChannels = Gt(t.header.channel), e.info.sampleRate = t.header.sampleRate;
							} else if (e.info.codec === "ac3") {
								let t = zn(r.suppliedPacket.data);
								if (!t) throw Error("Invalid AC-3 audio stream; could not read sync frame from first packet.");
								if (t.fscod === 3) throw Error("Invalid AC-3 audio stream; reserved sample rate code found in first packet.");
								e.info.numberOfChannels = Rn[t.acmod] + t.lfeon, e.info.sampleRate = Kt[t.fscod];
							} else if (e.info.codec === "eac3") {
								let t = Un(r.suppliedPacket.data);
								if (!t) throw Error("Invalid E-AC-3 audio stream; could not read sync frame from first packet.");
								let n = Gn(t);
								if (n === null) throw Error("Invalid E-AC-3 audio stream; reserved sample rate code found in first packet.");
								e.info.numberOfChannels = Kn(t), e.info.sampleRate = n;
							} else throw Error("Unhandled.");
							e.info.decoderConfig = {
								codec: bt({
									codec: e.info.codec,
									codecDescription: null,
									aacCodecInfo: e.info.aacCodecInfo
								}),
								numberOfChannels: e.info.numberOfChannels,
								sampleRate: e.info.sampleRate
							}, e.initialized = !0;
						}
					}
				}
				if (s && this.elementaryStreams.every((e) => e.initialized)) break;
				n += this.packetStride;
			}
			if (!s) throw Error(o ? "No Program Map Table found in the file." : "No Program Association Table found in the file.");
			for (let e of this.elementaryStreams) e.info.type === "video" ? this.trackBackingEntries.push(new $i(e)) : this.trackBackingEntries.push(new ea(e));
		})();
	}
	async getTrackBackings() {
		return await this.readMetadata(), this.trackBackingEntries;
	}
	async getMetadataTags() {
		return {};
	}
	async getMimeType() {
		return await this.readMetadata(), Ki(await Promise.all(this.trackBackingEntries.map((e) => e.getDecoderConfig().then((e) => e?.codec ?? null))));
	}
	async readSection(e, t, n = !1) {
		let r = e, i = e, a = [], o = 0, s = null, c = !0, l = 0;
		for (;;) {
			let e = await this.readPacket(i);
			if (i += this.packetStride, !e) break;
			if (s) {
				if (e.pid !== s.pid) {
					if (n) break;
					continue;
				}
				if (e.payloadUnitStartIndicator === 1) break;
			} else {
				if (e.payloadUnitStartIndicator === 0) break;
				s = e;
			}
			let u = !!(e.adaptationFieldControl & 2), d = !!(e.adaptationFieldControl & 1), f = 0;
			if (u && (f = 1 + e.body[0], e === s && f > 1 && (l = e.body[1] >> 6 & 1)), d && (f === 0 ? (a.push(e.body), o += e.body.byteLength) : (a.push(e.body.subarray(f)), o += e.body.byteLength - f)), r = i, !t && o >= 64) {
				c = !1;
				break;
			}
			if (ie(this.sectionEndPositions, r, (e) => e) !== -1) {
				c = !1;
				break;
			}
		}
		if (c) {
			let e = D(this.sectionEndPositions, r, (e) => e);
			this.sectionEndPositions.splice(e + 1, 0, r);
		}
		if (!s) return null;
		let u;
		if (a.length === 1) u = a[0];
		else {
			let e = a.reduce((e, t) => e + t.length, 0);
			u = new Uint8Array(e);
			let t = 0;
			for (let e of a) u.set(e, t), t += e.length;
		}
		return {
			startPos: e,
			endPos: t ? r : null,
			pid: s.pid,
			payload: u,
			randomAccessIndicator: l
		};
	}
	async readPacketHeader(e) {
		let t = this.reader.requestSlice(e, 4);
		if (t instanceof Promise && (t = await t), !t) return null;
		if (W(t) !== 71) throw Error("Invalid TS packet sync byte. Likely an internal bug, please report this file.");
		let n = Ks(t);
		n >> 15;
		let r = n >> 14 & 1;
		n >> 13 & 1;
		let i = n & 8191, a = W(t);
		a >> 6;
		let o = a >> 4 & 3;
		return a & 15, {
			payloadUnitStartIndicator: r,
			pid: i,
			adaptationFieldControl: o
		};
	}
	async readPacket(e) {
		let t = this.reader.requestSlice(e, 188);
		if (t instanceof Promise && (t = await t), !t) return null;
		let n = U(t, 188);
		if (n[0] !== 71) throw Error("Invalid TS packet sync byte. Likely an internal bug, please report this file.");
		let r = (n[1] << 8) + n[2];
		r >> 15;
		let i = r >> 14 & 1;
		r >> 13 & 1;
		let a = r & 8191, o = n[3];
		o >> 6;
		let s = o >> 4 & 3;
		return o & 15, {
			payloadUnitStartIndicator: i,
			pid: a,
			adaptationFieldControl: s,
			body: n.subarray(4)
		};
	}
}, Xi = (e, t) => {
	if (e.payload.byteLength < 3) return null;
	let n = new P(e.payload);
	if (n.readBits(24) !== 1) return null;
	let r = n.readBits(8);
	if (n.skipBits(16), r === 188 || r === 190 || r === 191 || r === 240 || r === 241 || r === 255 || r === 242 || r === 248) return null;
	n.skipBits(8);
	let i = n.readBits(2);
	n.skipBits(14);
	let a = null;
	if (i === 2 || i === 3) a = 0, n.skipBits(4), a += n.readBits(3) * (1 << 30), n.skipBits(1), a += n.readBits(15) * 32768, n.skipBits(1), a += n.readBits(15);
	else if (t) throw Error(qi);
	return {
		sectionStartPos: e.startPos,
		sectionEndPos: e.endPos,
		pts: a,
		randomAccessIndicator: e.randomAccessIndicator
	};
}, Zi = (e, t) => {
	a(e.endPos !== null);
	let n = Xi(e, t);
	if (!n) return null;
	let r = new P(e.payload);
	r.skipBits(32);
	let i = r.readBits(16);
	r.skipBits(16);
	let o = r.readBits(8), s = r.pos + 8 * o;
	r.pos = s;
	let c = s / 8;
	a(Number.isInteger(c));
	let l = e.payload.subarray(c, i > 0 ? 6 + i : e.payload.byteLength);
	return {
		...n,
		data: l
	};
}, Qi = class e {
	constructor(e) {
		this.elementaryStream = e, this.packetBuffers = /* @__PURE__ */ new WeakMap(), this.packetSectionStarts = /* @__PURE__ */ new WeakMap();
	}
	getId() {
		return this.elementaryStream.pid;
	}
	getNumber() {
		let t = this.elementaryStream.demuxer, n = this.elementaryStream.info.type, r = 0;
		for (let i of t.trackBackingEntries) if (i.getType() === n && r++, a(i instanceof e), i.elementaryStream === this.elementaryStream) break;
		return r;
	}
	getCodec() {
		throw Error("Not implemented on base class.");
	}
	getInternalCodecId() {
		return this.elementaryStream.streamType;
	}
	getName() {
		return null;
	}
	getLanguageCode() {
		return "und";
	}
	getDisposition() {
		return {
			...tt,
			primary: !1
		};
	}
	getTimeResolution() {
		return Gi;
	}
	isRelativeToUnixEpoch() {
		return !1;
	}
	getUnixTimeForTimestamp() {
		return null;
	}
	getPairingMask() {
		return 1n;
	}
	getBitrate() {
		return null;
	}
	getAverageBitrate() {
		return null;
	}
	async getDurationFromMetadata() {
		return null;
	}
	async getLiveRefreshInterval() {
		return null;
	}
	createEncodedPacket(e, t, n) {
		let r;
		return r = this.allPacketsAreKeyPackets() || e.randomAccessIndicator === 1 ? "key" : "delta", new z(n.metadataOnly ? Jn : e.data, r, e.pts / Gi, Math.max(t / Gi, 0), e.sequenceNumber, e.data.byteLength);
	}
	async getFirstPacket(e) {
		let t = this.elementaryStream.firstSection;
		a(t);
		let n = Zi(t, !0);
		a(n);
		let r = new na(this.elementaryStream, n), i = new ra(this, r), o = await i.readNext();
		if (!o) return null;
		let s = this.createEncodedPacket(o.packet, o.duration, e);
		return this.packetBuffers.set(s, i), this.packetSectionStarts.set(s, o.packet.sectionStartPos), s;
	}
	async getNextPacket(e, t) {
		let n = this.packetBuffers.get(e);
		if (n) {
			let r = await n.readNext();
			if (!r) return null;
			this.packetBuffers.delete(e);
			let i = this.createEncodedPacket(r.packet, r.duration, t);
			return this.packetBuffers.set(i, n), this.packetSectionStarts.set(i, r.packet.sectionStartPos), i;
		}
		let r = this.packetSectionStarts.get(e);
		if (r === void 0) throw Error("Packet was not created from this track.");
		let i = await this.elementaryStream.demuxer.readSection(r, !0);
		a(i);
		let o = Zi(i, !0);
		a(o);
		let s = new na(this.elementaryStream, o);
		n = new ra(this, s);
		let c = e.sequenceNumber;
		for (;;) {
			let e = await n.readNext();
			if (!e) return null;
			if (e.packet.sequenceNumber > c) {
				let r = this.createEncodedPacket(e.packet, e.duration, t);
				return this.packetBuffers.set(r, n), this.packetSectionStarts.set(r, e.packet.sectionStartPos), r;
			}
		}
	}
	async getNextKeyPacket(e, t) {
		let n = e;
		for (;;) {
			if (n = await this.getNextPacket(n, t), !n) return null;
			if (n.type === "key") return n;
		}
	}
	getPacket(e, t) {
		return this.doPacketLookup(e, !1, t);
	}
	getKeyPacket(e, t) {
		return this.doPacketLookup(e, !0, t);
	}
	async doPacketLookup(e, t, n) {
		let r = N(e * Gi), i = this.elementaryStream.demuxer, { reader: o, seekChunkSize: c } = i, l = this.elementaryStream.pid, u = async (e, t, n) => {
			let r = e;
			for (; r < t;) {
				let e = await i.readPacketHeader(r);
				if (!e) return null;
				if (e.pid === l && e.payloadUnitStartIndicator === 1) {
					let e = await i.readSection(r, n);
					if (!e) return null;
					let t = Xi(e, !1);
					if (t && t.pts !== null) return {
						pesPacketHeader: t,
						section: e
					};
				}
				r += i.packetStride;
			}
			return null;
		}, d = this.elementaryStream.firstSection;
		a(d);
		let f = Xi(d, !0);
		if (a(f), r < f.pts) return null;
		let p, m = this.elementaryStream.referencePesPackets, h = D(m, r, (e) => e.pts), g = h === -1 ? null : m[h];
		if (g && r - g.pts < 9e4 / 2) p = g.sectionStartPos;
		else {
			let e = 0;
			if (o.fileSize !== null) {
				let t = Math.ceil(o.fileSize / c);
				if (t > 1) {
					let n = 0, a = t - 1;
					for (e = n; n <= a;) {
						let t = Math.floor((n + a) / 2), o = ge(t * c, i.packetStride) + f.sectionStartPos, s = await u(o, o + c, !1);
						if (!s) {
							a = t - 1;
							continue;
						}
						s.pesPacketHeader.pts <= r ? (e = t, n = t + 1) : a = t - 1;
					}
				}
			}
			p = ge(e * c, i.packetStride) + f.sectionStartPos;
		}
		let _ = (await u(p, o.fileSize ?? Infinity, !1))?.pesPacketHeader ?? null;
		_ ||= f;
		let v = this.getReorderSize(), y = async (e, t) => {
			let o = await i.readSection(e, !0);
			a(o);
			let c = Zi(o, !0);
			a(c);
			let l = new na(this.elementaryStream, c), u = new ra(this, l);
			for (; !((s(u.presentationOrderPackets)?.pts ?? -Infinity) >= r || !await u.readNextPacket()););
			let d = ce(u.presentationOrderPackets, t);
			if (d === -1) return null;
			let f = u.presentationOrderPackets[d], p = d === 0 ? 0 : f.pts - u.presentationOrderPackets[d - 1].pts;
			for (; u.decodeOrderPackets[0] !== f;) u.decodeOrderPackets.shift();
			u.lastDuration = p;
			let m = await u.readNext();
			a(m);
			let h = this.createEncodedPacket(m.packet, m.duration, n);
			return this.packetBuffers.set(h, u), this.packetSectionStarts.set(h, m.packet.sectionStartPos), h;
		};
		if (!t || this.allPacketsAreKeyPackets()) {
			outer: for (;;) {
				let e = _.sectionStartPos + i.packetStride;
				for (;;) {
					let t = await i.readPacketHeader(e);
					if (!t) break outer;
					if (t.pid === l && t.payloadUnitStartIndicator === 1) {
						let t = await i.readSection(e, !1);
						if (t) {
							let e = Xi(t, !1);
							if (e && e.pts !== null) {
								if (e.pts > r) break outer;
								_ = e, ta(this.elementaryStream, _);
								break;
							}
						}
					}
					e += i.packetStride;
				}
			}
			outer: for (let e = 0; e < v + 1; e++) {
				let e = _.sectionStartPos - i.packetStride;
				for (; e >= i.packetOffset;) {
					let t = await i.readPacketHeader(e);
					if (!t) break outer;
					if (t.pid === l && t.payloadUnitStartIndicator === 1) {
						let t = await i.readSection(e, !1);
						if (t) {
							let e = Xi(t, !1);
							if (e && e.pts !== null) {
								_ = e;
								break;
							}
						}
					}
					e -= i.packetStride;
				}
			}
			return y(_.sectionStartPos, (e) => e.pts <= r);
		} else {
			let e = p, t = null, n = !this.elementaryStream.canBeTrustedWithKeyPackets;
			for (;;) {
				let s = null, p = e <= f.sectionStartPos, m, h = null;
				if (p) m = f, h = d;
				else {
					let t = await u(e, o.fileSize ?? Infinity, n);
					m = t?.pesPacketHeader ?? null, h = t?.section ?? null;
				}
				let g = !1, _ = 0;
				outer: for (; m && !(t !== null && m.sectionStartPos >= t);) {
					if (m.pts <= r) {
						let e;
						if (this.elementaryStream.canBeTrustedWithKeyPackets) e = m.randomAccessIndicator === 1;
						else {
							a(h);
							let t = Zi(h, !0);
							a(t);
							let n = new na(this.elementaryStream, t);
							await n.markNextPacket(), e = n.suppliedPacket?.randomAccessIndicator === 1;
						}
						e && (s = m);
					}
					if (m.pts > r && (g = !0), g && (_++, _ > v)) break;
					let e = m.sectionStartPos + i.packetStride;
					for (;;) {
						let t = await i.readPacketHeader(e);
						if (!t) break outer;
						if (t.pid === l && t.payloadUnitStartIndicator === 1) {
							let t = await i.readSection(e, n);
							if (t) {
								let e = Xi(t, !1);
								if (e && e.pts !== null) {
									m = e, h = t, ta(this.elementaryStream, m);
									break;
								}
							}
						}
						e += i.packetStride;
					}
				}
				if (s) {
					let e = s;
					if (_ === 0) outer: for (let t = 0; t < v; t++) {
						let t = e.sectionStartPos - i.packetStride;
						for (; t >= i.packetOffset;) {
							let r = await i.readPacketHeader(t);
							if (!r) break outer;
							if (r.pid === l && r.payloadUnitStartIndicator === 1) {
								let r = await i.readSection(t, n);
								if (r) {
									let t = Xi(r, !1);
									if (t && t.pts !== null) {
										e = t;
										break;
									}
								}
							}
							t -= i.packetStride;
						}
					}
					let t = await y(e.sectionStartPos, (e) => e.pts <= r && e.randomAccessIndicator === 1);
					return a(t), t;
				}
				if (p) return null;
				t = e, e = Math.max(ge(e - f.sectionStartPos - c, i.packetStride) + f.sectionStartPos, f.sectionStartPos);
			}
		}
	}
}, $i = class extends Qi {
	getType() {
		return "video";
	}
	getCodec() {
		return this.elementaryStream.info.codec;
	}
	getCodedWidth() {
		return this.elementaryStream.info.width;
	}
	getCodedHeight() {
		return this.elementaryStream.info.height;
	}
	getSquarePixelWidth() {
		return this.elementaryStream.info.squarePixelWidth;
	}
	getSquarePixelHeight() {
		return this.elementaryStream.info.squarePixelHeight;
	}
	getRotation() {
		return 0;
	}
	async getColorSpace() {
		return this.elementaryStream.info.colorSpace;
	}
	async canBeTransparent() {
		return !1;
	}
	async getDecoderConfig() {
		return a(this.elementaryStream.info.decoderConfig), this.elementaryStream.info.decoderConfig;
	}
	allPacketsAreKeyPackets() {
		return !1;
	}
	getReorderSize() {
		return this.elementaryStream.info.reorderSize;
	}
}, ea = class extends Qi {
	getType() {
		return "audio";
	}
	getCodec() {
		return this.elementaryStream.info.codec;
	}
	getNumberOfChannels() {
		return this.elementaryStream.info.numberOfChannels;
	}
	getSampleRate() {
		return this.elementaryStream.info.sampleRate;
	}
	async getDecoderConfig() {
		return a(this.elementaryStream.info.decoderConfig), this.elementaryStream.info.decoderConfig;
	}
	allPacketsAreKeyPackets() {
		return !0;
	}
	getReorderSize() {
		return 0;
	}
}, ta = (e, t) => {
	let n = e.referencePesPackets, r = D(n, t.sectionStartPos, (e) => e.sectionStartPos);
	if (r >= 0) {
		let i = n[r];
		if (t.pts <= i.pts) return !1;
		let a = e.demuxer.minReferencePointByteDistance;
		if (t.sectionStartPos - i.sectionStartPos < a) return !1;
		if (r < n.length - 1) {
			let e = n[r + 1];
			if (e.pts < t.pts || e.sectionStartPos - t.sectionStartPos < a) return !1;
		}
	}
	return n.splice(r + 1, 0, t), !0;
}, na = class {
	constructor(e, t) {
		this.currentPos = 0, this.pesPackets = [], this.currentPesPacketIndex = 0, this.currentPesPacketPos = 0, this.endPos = 0, this.lastSuppliedPesPacket = null, this.nextPts = null, this.suppliedPacket = null, this.elementaryStream = e, this.pid = e.pid, this.demuxer = e.demuxer, this.startingPesPacket = t;
	}
	ensureBuffered(e) {
		let t = this.endPos - this.currentPos;
		return t >= e ? e : this.bufferData(e - t).then(() => Math.min(this.endPos - this.currentPos, e));
	}
	getCurrentPesPacket() {
		let e = this.pesPackets[this.currentPesPacketIndex];
		return a(e), e;
	}
	async bufferData(e) {
		let t = this.endPos + e;
		for (; this.endPos < t;) {
			let e;
			if (this.pesPackets.length === 0) e = this.startingPesPacket;
			else {
				let t = s(this.pesPackets).sectionEndPos;
				for (a(t !== null);;) {
					let n = await this.demuxer.readPacketHeader(t);
					if (!n) return;
					if (n.pid === this.pid) {
						let n = await this.demuxer.readSection(t, !0);
						if (!n) return;
						let r = Zi(n, !1);
						if (r) {
							e = r;
							break;
						}
					}
					t += this.demuxer.packetStride;
				}
			}
			this.pesPackets.push(e), this.endPos += e.data.byteLength;
		}
	}
	readBytes(e) {
		let t = this.getCurrentPesPacket(), n = this.currentPos - this.currentPesPacketPos, r = n + e;
		if (this.currentPos += e, r <= t.data.byteLength) return t.data.subarray(n, r);
		let i = new Uint8Array(e);
		i.set(t.data.subarray(n));
		let a = t.data.byteLength - n;
		for (;;) {
			this.advanceCurrentPacket();
			let t = this.getCurrentPesPacket(), n = e - a;
			if (n <= t.data.byteLength) {
				i.set(t.data.subarray(0, n), a);
				break;
			}
			i.set(t.data, a), a += t.data.byteLength;
		}
		return i;
	}
	readU8() {
		let e = this.getCurrentPesPacket(), t = this.currentPos - this.currentPesPacketPos;
		return this.currentPos++, t < e.data.byteLength ? e.data[t] : (this.advanceCurrentPacket(), e = this.getCurrentPesPacket(), e.data[0]);
	}
	seekTo(e) {
		if (e !== this.currentPos) {
			if (e < this.currentPos) for (; e < this.currentPesPacketPos;) {
				this.currentPesPacketIndex--;
				let e = this.getCurrentPesPacket();
				this.currentPesPacketPos -= e.data.byteLength;
			}
			else for (;;) {
				let t = this.getCurrentPesPacket();
				if (e < this.currentPesPacketPos + t.data.byteLength) break;
				this.currentPesPacketPos += t.data.byteLength, this.currentPesPacketIndex++;
			}
			this.currentPos = e;
		}
	}
	skip(e) {
		this.seekTo(this.currentPos + e);
	}
	advanceCurrentPacket() {
		this.currentPesPacketPos += this.getCurrentPesPacket().data.byteLength, this.currentPesPacketIndex++;
	}
	async markNextPacket() {
		a(!this.suppliedPacket);
		let e = this.elementaryStream;
		if (e.info.type === "video") {
			let t = e.info.codec, n = 1024;
			if (t !== "avc" && t !== "hevc") throw Error("Unhandled.");
			let r = t === "avc" ? 1 : 2, i = null, a = !1, o = 0;
			for (;;) {
				let e = this.ensureBuffered(n);
				if (e instanceof Promise && (e = await e), e === 0) break;
				let s = this.currentPos, c = this.readBytes(e), u = c.byteLength, d = 0;
				for (; d < u;) {
					let e = c.indexOf(0, d);
					if (e === -1 || e >= u) break;
					d = e;
					let n = s + d;
					if (d + 3 >= u) {
						this.seekTo(n);
						break;
					}
					let f = c[d + 1], p = c[d + 2], m = c[d + 3], h = 0;
					if (f === 0 && p === 0 && m === 1 ? h = 4 : f === 0 && p === 1 && (h = 3), h === 0) {
						d++;
						continue;
					}
					let g = n;
					i ??= g;
					let _ = d + h, v = _ + r;
					if (v + (t === "avc" ? 6 : 1) > u) {
						this.seekTo(n);
						break;
					}
					let y = c[_], b, x, S;
					if (t === "avc") b = $t(y), x = b === Jt.NON_IDR_SLICE || b === Jt.SLICE_DPA || b === Jt.IDR, S = b === Jt.SEI || b === Jt.SPS || b === Jt.PPS || b === Jt.AUD;
					else {
						if (b = mn(y), ((y & 1) << 5 | c[_ + 1] >> 3) > 0) {
							d += h;
							continue;
						}
						x = b <= Yt.RASL_R || b >= Yt.BLA_W_LP && b <= 21, S = b >= Yt.VPS_NUT && b <= 37 || b === Yt.PREFIX_SEI_NUT || b >= 41 && b <= 44 || b >= 48 && b <= 55;
					}
					let C = !1;
					if (x) {
						let e;
						if (t === "avc") {
							let t = l(new P(c.subarray(v, v + 6)));
							e = !a || t <= o, o = t;
						} else e = c[v] >> 7 == 1;
						e && (a ? C = !0 : a = !0);
					} else S && a && (C = !0);
					if (C) {
						let e = g - i;
						return this.seekTo(i), this.supplyPacket(e, 0);
					}
					d += h;
				}
				if (e < n) break;
			}
			if (i !== null && this.endPos > i) {
				let e = this.endPos - i;
				return this.seekTo(i), this.supplyPacket(e, 0);
			}
		} else {
			let t = e.info.codec;
			for (;;) {
				let n = this.ensureBuffered(128);
				n instanceof Promise && (n = await n);
				let r = this.currentPos;
				for (; this.currentPos - r < n;) {
					let n = this.readU8();
					if (t === "aac") {
						if (n !== 255) continue;
						this.skip(-1);
						let t = this.currentPos, r = this.ensureBuffered(9);
						if (r instanceof Promise && (r = await r), r < 9) return;
						let i = this.readBytes(9), a = Ni(Us.tempFromBytes(i));
						if (a) {
							this.seekTo(t);
							let n = this.ensureBuffered(a.frameLength);
							return n instanceof Promise && (n = await n), this.supplyPacket(n, Math.round(Pi * Gi / e.info.sampleRate));
						} else this.seekTo(t + 1);
					} else if (t === "mp3") {
						if (n !== 255) continue;
						this.skip(-1);
						let t = this.currentPos, r = this.ensureBuffered(4);
						if (r instanceof Promise && (r = await r), r < 4) return;
						let i = Vt(p(this.readBytes(4)).getUint32(0), null);
						if (i.header) {
							this.seekTo(t);
							let n = this.ensureBuffered(i.header.totalSize);
							n instanceof Promise && (n = await n);
							let r = i.header.audioSamplesInFrame * Gi / e.info.sampleRate;
							return this.supplyPacket(n, Math.round(r));
						} else this.seekTo(t + 1);
					} else if (t === "ac3") {
						if (n !== 11) continue;
						this.skip(-1);
						let t = this.currentPos, r = this.ensureBuffered(5);
						if (r instanceof Promise && (r = await r), r < 5) return;
						let i = this.readBytes(5);
						if (i[0] !== 11 || i[1] !== 119) {
							this.seekTo(t + 1);
							continue;
						}
						let o = i[4] >> 6, s = i[4] & 63;
						if (o === 3 || s > 37) {
							this.seekTo(t + 1);
							continue;
						}
						let c = Bn[3 * s + o];
						a(c !== void 0), this.seekTo(t), r = this.ensureBuffered(c), r instanceof Promise && (r = await r);
						let l = Math.round(Vn * Gi / e.info.sampleRate);
						return this.supplyPacket(r, l);
					} else if (t === "eac3") {
						if (n !== 11) continue;
						this.skip(-1);
						let t = this.currentPos, r = this.ensureBuffered(5);
						if (r instanceof Promise && (r = await r), r < 5) return;
						let i = this.readBytes(5);
						if (i[0] !== 11 || i[1] !== 119) {
							this.seekTo(t + 1);
							continue;
						}
						let a = (((i[2] & 7) << 8 | i[3]) + 1) * 2, o = Hn[i[4] >> 6 == 3 ? 3 : i[4] >> 4 & 3];
						this.seekTo(t), r = this.ensureBuffered(a), r instanceof Promise && (r = await r);
						let s = o * 256, c = Math.round(s * Gi / e.info.sampleRate);
						return this.supplyPacket(r, c);
					} else throw Error("Unhandled.");
				}
				if (n < 128) break;
			}
		}
	}
	supplyPacket(e, t) {
		let n = this.getCurrentPesPacket(), r;
		if (this.lastSuppliedPesPacket === n) a(this.nextPts !== null), r = this.nextPts;
		else {
			if (n.pts === null) throw Error(qi);
			r = n.pts, ta(this.elementaryStream, n);
		}
		this.lastSuppliedPesPacket = n, this.nextPts = r + t;
		let i = n.sectionStartPos, o = i + (this.currentPos - this.currentPesPacketPos), s = this.readBytes(e), c = n.randomAccessIndicator;
		if (c === 0 && !this.elementaryStream.canBeTrustedWithKeyPackets) {
			if (this.elementaryStream.info.type === "audio") c = 1;
			else if (this.elementaryStream.info.decoderConfig) {
				let e = Pn(this.elementaryStream.info.codec, this.elementaryStream.info.decoderConfig, s) === "key";
				c = Number(e);
			}
		}
		this.suppliedPacket = {
			pts: r,
			data: s,
			sequenceNumber: o,
			sectionStartPos: i,
			randomAccessIndicator: c
		}, this.pesPackets.splice(0, this.currentPesPacketIndex), this.currentPesPacketIndex = 0;
	}
}, ra = class {
	constructor(e, t) {
		this.decodeOrderPackets = [], this.reorderBuffer = [], this.presentationOrderPackets = [], this.reachedEnd = !1, this.lastDuration = 0, this.backing = e, this.context = t, this.reorderSize = e.getReorderSize(), a(this.reorderSize >= 0);
	}
	async readNext() {
		if (this.decodeOrderPackets.length === 0 && !await this.readNextPacket()) return null;
		await this.ensureCurrentPacketHasNext();
		let e = this.decodeOrderPackets[0], t = this.presentationOrderPackets.indexOf(e);
		a(t !== -1);
		let n;
		for (t === this.presentationOrderPackets.length - 1 ? n = this.lastDuration : (n = this.presentationOrderPackets[t + 1].pts - e.pts, this.lastDuration = n), this.decodeOrderPackets.shift(); this.presentationOrderPackets.length > 0;) {
			let e = this.presentationOrderPackets[0];
			if (this.decodeOrderPackets.includes(e)) break;
			this.presentationOrderPackets.shift();
		}
		return {
			packet: e,
			duration: n
		};
	}
	async readNextPacket() {
		if (this.reachedEnd) return !1;
		let e;
		return this.context.suppliedPacket || await this.context.markNextPacket(), e = this.context.suppliedPacket, this.context.suppliedPacket = null, e ? (this.decodeOrderPackets.push(e), this.processPacketThroughReorderBuffer(e), !0) : (this.reachedEnd = !0, this.flushReorderBuffer(), !1);
	}
	async ensureCurrentPacketHasNext() {
		let e = this.decodeOrderPackets[0];
		for (a(e);;) {
			let t = this.presentationOrderPackets.indexOf(e);
			if (t !== -1 && t <= this.presentationOrderPackets.length - 2 || !await this.readNextPacket()) break;
		}
	}
	processPacketThroughReorderBuffer(e) {
		if (this.reorderBuffer.push(e), this.reorderBuffer.length > this.reorderSize) {
			let e = 0;
			for (let t = 1; t < this.reorderBuffer.length; t++) this.reorderBuffer[t].pts < this.reorderBuffer[e].pts && (e = t);
			let t = this.reorderBuffer[e];
			this.presentationOrderPackets.push(t), this.reorderBuffer.splice(e, 1);
		}
	}
	flushReorderBuffer() {
		this.reorderBuffer.sort((e, t) => e.pts - t.pts), this.presentationOrderPackets.push(...this.reorderBuffer), this.reorderBuffer.length = 0;
	}
}, ia = "application/vnd.apple.mpegurl", aa = "#EXT-X-STREAM-INF:", oa = "#EXT-X-I-FRAME-STREAM-INF:", sa = "#EXT-X-MEDIA:", ca = "#EXTINF:", la = "#EXT-X-MAP:", ua = "#EXT-X-KEY:", da = "#EXT-X-MEDIA-SEQUENCE:", fa = "#EXT-X-BYTERANGE:", pa = "#EXT-X-PROGRAM-DATE-TIME:", ma = "#EXT-X-TARGETDURATION:", ha = (e) => e.length === 0 || e.startsWith("#") && !e.startsWith("#EXT"), ga = class {
	constructor(e) {
		this._attributes = {};
		let t = "", n = "", r = !1, i = !1;
		for (let a = 0; a < e.length; a++) {
			let o = e[a];
			o === "\"" ? i = !i : o === "=" && !r && !i ? r = !0 : o === "," && !i ? (t && (this._attributes[t.trim().toLowerCase()] = n), t = "", n = "", r = !1) : r ? n += o : t += o;
		}
		t && (this._attributes[t.trim().toLowerCase()] = n);
	}
	get(e) {
		return this._attributes[e.toLowerCase()] ?? null;
	}
	getAsNumber(e) {
		let t = this.get(e);
		if (t === null) return null;
		let n = Number(t);
		return Number.isFinite(n) ? n : null;
	}
	merge(e) {
		Object.assign(this._attributes, e._attributes);
	}
}, _a = class {
	constructor(e, t, n) {
		this.nextInputCacheAge = 0, this.inputCache = [], this.trackBackingsPromise = null, this.firstSegment = null, this.firstSegmentFirstTimestamps = /* @__PURE__ */ new WeakMap(), this.firstTimestampCache = /* @__PURE__ */ new WeakMap(), this.input = e, this.path = t, this.trackDeclarations = n;
	}
	async getDurationFromMetadata(e) {
		let t = await this.getSegmentAt(Infinity, { skipLiveWait: e.skipLiveWait });
		return t ? t.timestamp + t.duration : null;
	}
	async getUnixTimeForTimestamp(e) {
		let t = await this.getSegmentAt(e, {});
		if (t ??= await this.getFirstSegment({}), !t || t.unixEpochTimestamp === null) return null;
		let n = e - t.timestamp;
		return t.unixEpochTimestamp + n;
	}
	async getTrackBackings() {
		return this.trackBackingsPromise ??= (async () => {
			let e = [];
			if (this.trackDeclarations) {
				for (let t of this.trackDeclarations) if (t.type === "video") {
					let n = He(e, (e) => e.getType() === "video") + 1;
					e.push(new ya(this, t, n));
				} else if (t.type === "audio") {
					let n = He(e, (e) => e.getType() === "audio") + 1;
					e.push(new ba(this, t, n));
				}
			} else {
				if (this.firstSegment = await this.getFirstSegment({}), !this.firstSegment) return [];
				let t = await this.getInputForSegment(this.firstSegment).getTracks();
				for (let n of t) if (n.type === "video") {
					let t = He(e, (e) => e.getType() === "video") + 1;
					e.push(new ya(this, {
						id: e.length + 1,
						type: "video"
					}, t));
				} else if (n.type === "audio") {
					let t = He(e, (e) => e.getType() === "audio") + 1;
					e.push(new ba(this, {
						id: e.length + 1,
						type: "audio"
					}, t));
				}
			}
			return e;
		})();
	}
	async getFirstTimestampForInput(e) {
		let t = this.firstTimestampCache.get(e);
		if (t !== void 0) return t;
		let n = await e.getFirstTimestamp();
		return this.firstTimestampCache.set(e, n), n;
	}
	async getMediaOffset(e, t) {
		let n = e.firstSegment ?? e, r;
		if (this.firstSegmentFirstTimestamps.has(n)) r = this.firstSegmentFirstTimestamps.get(n);
		else {
			let e = this.getInputForSegment(n);
			r = await this.getFirstTimestampForInput(e), this.firstSegmentFirstTimestamps.set(n, r);
		}
		if (n === e) return n.timestamp - r;
		let i = await this.getFirstTimestampForInput(t), a = e.timestamp - n.timestamp, o = i - r - a;
		return Math.abs(o) <= Math.min(.25, a) ? n.timestamp - r : e.timestamp - i;
	}
	dispose() {
		for (let e of this.inputCache) e.input.dispose();
		this.inputCache.length = 0;
	}
}, va = class {
	constructor(e, t, n) {
		this.packetInfos = /* @__PURE__ */ new WeakMap(), this.hydrationPromise = null, this.firstInputTrack = null, this.segmentedInput = e, this.decl = t, this.number = n;
	}
	hydrate() {
		return this.hydrationPromise ??= (async () => {
			if (this.segmentedInput.firstSegment ??= await this.segmentedInput.getFirstSegment({}), !this.segmentedInput.firstSegment) throw Error("Missing first segment, can't retrieve track.");
			let e = (await this.segmentedInput.getInputForSegment(this.segmentedInput.firstSegment).getTracks()).find((e) => e.type === this.decl.type && e.number === this.number);
			if (!e) throw Error("No matching track found in underlying media data.");
			this.firstInputTrack = e;
		})();
	}
	getId() {
		return this.decl.id;
	}
	getType() {
		return this.decl.type;
	}
	getNumber() {
		return this.number;
	}
	delegate(e) {
		return this.firstInputTrack ? e() : this.hydrate().then(e);
	}
	async getDecoderConfig() {
		return this.delegate(() => this.firstInputTrack._backing.getDecoderConfig());
	}
	getHasOnlyKeyPackets() {
		return this.delegate(() => this.firstInputTrack._backing.getHasOnlyKeyPackets?.() ?? null);
	}
	getPairingMask() {
		return 1n;
	}
	getCodec() {
		return this.delegate(() => this.firstInputTrack._backing.getCodec());
	}
	getInternalCodecId() {
		return this.delegate(() => this.firstInputTrack._backing.getInternalCodecId());
	}
	getDisposition() {
		return this.delegate(() => this.firstInputTrack._backing.getDisposition());
	}
	getLanguageCode() {
		return this.delegate(() => this.firstInputTrack._backing.getLanguageCode());
	}
	getName() {
		return this.delegate(() => this.firstInputTrack._backing.getName());
	}
	getTimeResolution() {
		return this.delegate(() => this.firstInputTrack._backing.getTimeResolution());
	}
	async isRelativeToUnixEpoch() {
		return await this.hydrate(), a(this.segmentedInput.firstSegment), this.segmentedInput.firstSegment.unixEpochTimestamp === this.segmentedInput.firstSegment.timestamp;
	}
	getUnixTimeForTimestamp(e) {
		return this.segmentedInput.getUnixTimeForTimestamp(e);
	}
	getBitrate() {
		return this.delegate(() => this.firstInputTrack._backing.getBitrate());
	}
	getAverageBitrate() {
		return this.delegate(() => this.firstInputTrack._backing.getAverageBitrate());
	}
	getDurationFromMetadata(e) {
		return this.segmentedInput.getDurationFromMetadata(e);
	}
	getLiveRefreshInterval() {
		return this.segmentedInput.getLiveRefreshInterval();
	}
	async createAdjustedPacket(e, t, n) {
		a(e.sequenceNumber >= 0), a(this.segmentedInput.firstSegment);
		let r = await this.segmentedInput.getMediaOffset(t, n.input), i = t.timestamp - this.segmentedInput.firstSegment.timestamp, o = e.clone({
			timestamp: he(e.timestamp + r, await n.getTimeResolution()),
			sequenceNumber: Math.floor(1e8 * i) + e.sequenceNumber
		});
		return this.packetInfos.set(o, {
			segment: t,
			track: n,
			sourcePacket: e
		}), o;
	}
	async getFirstPacket(e) {
		await this.hydrate(), a(this.segmentedInput.firstSegment), a(this.firstInputTrack);
		let t = await this.firstInputTrack._backing.getFirstPacket(e);
		return t ? this.createAdjustedPacket(t, this.segmentedInput.firstSegment, this.firstInputTrack) : null;
	}
	getNextPacket(e, t) {
		return this._getNextInternal(e, t, !1);
	}
	getNextKeyPacket(e, t) {
		return this._getNextInternal(e, t, !0);
	}
	async _getNextInternal(e, t, n) {
		let r = this.packetInfos.get(e);
		if (!r) throw Error("Packet was not created from this track.");
		let i = n ? await r.track._backing.getNextKeyPacket(r.sourcePacket, t) : await r.track._backing.getNextPacket(r.sourcePacket, t);
		if (i) return this.createAdjustedPacket(i, r.segment, r.track);
		let a = r.segment;
		for (;;) {
			let e = await this.segmentedInput.getNextSegment(a, { skipLiveWait: t.skipLiveWait });
			if (!e) return null;
			let n = (await this.segmentedInput.getInputForSegment(e).getTracks()).find((e) => e.type === r.track.type && e.number === r.track.number);
			if (!n) {
				a = e;
				continue;
			}
			let i = await n._backing.getFirstPacket(t);
			return i ? this.createAdjustedPacket(i, e, n) : null;
		}
	}
	getPacket(e, t) {
		return this._getPacketInternal(e, t, !1);
	}
	getKeyPacket(e, t) {
		return this._getPacketInternal(e, t, !0);
	}
	async _getPacketInternal(e, t, n) {
		let r = await this.segmentedInput.getSegmentAt(e, { skipLiveWait: t.skipLiveWait });
		if (!r) return null;
		for (await this.hydrate(); r;) {
			let i = this.segmentedInput.getInputForSegment(r), a = (await i.getTracks()).find((e) => e.type === this.firstInputTrack.type && e.number === this.firstInputTrack.number);
			if (!a) {
				r = await this.segmentedInput.getPreviousSegment(r, { skipLiveWait: t.skipLiveWait });
				continue;
			}
			let o = e - await this.segmentedInput.getMediaOffset(r, i), s = n ? await a._backing.getKeyPacket(o, t) : await a._backing.getPacket(o, t);
			if (!s) {
				r = await this.segmentedInput.getPreviousSegment(r, { skipLiveWait: t.skipLiveWait });
				continue;
			}
			return this.createAdjustedPacket(s, r, a);
		}
		return null;
	}
}, ya = class extends va {
	getType() {
		return "video";
	}
	getCodec() {
		return this.delegate(() => this.firstInputTrack._backing.getCodec());
	}
	getCodedWidth() {
		return this.delegate(() => this.firstInputTrack._backing.getCodedWidth());
	}
	getCodedHeight() {
		return this.delegate(() => this.firstInputTrack._backing.getCodedHeight());
	}
	getSquarePixelWidth() {
		return this.delegate(() => this.firstInputTrack._backing.getSquarePixelWidth());
	}
	getSquarePixelHeight() {
		return this.delegate(() => this.firstInputTrack._backing.getSquarePixelHeight());
	}
	getRotation() {
		return this.delegate(() => this.firstInputTrack._backing.getRotation());
	}
	async getColorSpace() {
		return this.delegate(() => this.firstInputTrack._backing.getColorSpace());
	}
	async canBeTransparent() {
		return this.delegate(() => this.firstInputTrack._backing.canBeTransparent());
	}
	async getDecoderConfig() {
		return this.delegate(() => this.firstInputTrack._backing.getDecoderConfig());
	}
}, ba = class extends va {
	getType() {
		return "audio";
	}
	getCodec() {
		return this.delegate(() => this.firstInputTrack._backing.getCodec());
	}
	getNumberOfChannels() {
		return this.delegate(() => this.firstInputTrack._backing.getNumberOfChannels());
	}
	getSampleRate() {
		return this.delegate(() => this.firstInputTrack._backing.getSampleRate());
	}
	async getDecoderConfig() {
		return this.delegate(() => this.firstInputTrack._backing.getDecoderConfig());
	}
};
(/* @__PURE__ */ e(((e, t) => {
	t.exports = {};
})))(), ze();
var xa = Infinity;
typeof FinalizationRegistry < "u" && new FinalizationRegistry((e) => {
	e();
});
var Sa = class extends Je {
	constructor() {
		super(), this._disposed = !1, this._refCount = 0, this._usedForHls = !1, this._refFinalizationRegistry = null, this._sizePromise = null, this.onread = null, typeof FinalizationRegistry < "u" && (this._refFinalizationRegistry = new FinalizationRegistry((e) => {
			e._decrementRefCount();
		}));
	}
	async getSizeOrNull() {
		if (this._disposed) throw new Vs();
		return this._sizePromise ??= (async () => {
			let e = this._getFileSize();
			return e === void 0 ? (await this._read(0, 1, 0, xa), e = this._getFileSize(), a(e !== void 0), e) : e;
		})();
	}
	async getSize() {
		if (this._disposed) throw new Vs();
		let e = await this.getSizeOrNull();
		if (e === null) throw Error("Cannot determine the size of an unsized source.");
		return e;
	}
	slice(e, t) {
		if (!Number.isInteger(e) || e < 0) throw TypeError("offset must be a non-negative integer.");
		if (t !== void 0 && (!Number.isInteger(t) || t < 0)) throw TypeError("length, when provided, must be a non-negative integer.");
		return new Ma(this, e, t);
	}
	_dispatchRead(e, t) {
		this.onread?.(e, t), this._emit("read", {
			start: e,
			end: t
		});
	}
	ref() {
		return new Ca(this);
	}
	_incrementRefCount() {
		this._refCount++;
	}
	_decrementRefCount() {
		this._refCount--, this._refCount === 0 && (this._dispose(), this._disposed = !0);
	}
}, Ca = class {
	constructor(e) {
		if (this._freed = !1, e._disposed) throw Error("Cannot ref a disposed source.");
		e._incrementRefCount(), e._refFinalizationRegistry?.register(this, e, this), this._source = e;
	}
	get source() {
		if (!this._source) throw Error("Can't get source; ref has already been freed.");
		return this._source;
	}
	get freed() {
		return this._freed;
	}
	free() {
		if (this._freed) throw Error("Illegal operation: double free on SourceRef.");
		let e = this.source;
		a(e._refCount > 0), e._decrementRefCount(), e._refFinalizationRegistry?.unregister(this), this._freed = !0, this._source = null;
	}
	[Symbol.dispose]() {
		this.freed || this.free();
	}
}, wa = class extends Sa {
	constructor(e, t) {
		if (typeof e != "string") throw TypeError("rootPath must be a string.");
		if (typeof t != "function") throw TypeError("requestHandler must be a function.");
		super(), this.rootPath = e, this.requestHandler = t;
	}
	_resolveRequest(e) {
		let t = this.requestHandler(e), n = (e) => {
			if (!(e instanceof Sa || e instanceof Ca)) throw TypeError("requestHandler must return or resolve to a Source or SourceRef.");
			let t = e instanceof Sa ? e.ref() : e;
			return t.source._usedForHls ||= this._usedForHls, t;
		};
		return t instanceof Promise ? t.then(n) : n(t);
	}
}, Ta = (e, t) => e.path === t.path, Ea = class extends wa {
	constructor() {
		super(...arguments), this._root = null, this._rootRequest = null;
	}
	_read(e, t, n, r) {
		if (!this._root) {
			if (!this._rootRequest) {
				let e = this._resolveRequest({
					path: this.rootPath,
					isRoot: !0
				}), t = (e) => {
					let t = e instanceof Sa ? e.ref() : e;
					return this._root = t, this._rootRequest = null, t;
				};
				e instanceof Promise ? this._rootRequest = e.then(t) : (t(e), a(this._root));
			}
			if (this._rootRequest) return this._rootRequest.then((i) => i.source._read(e, t, n, r));
		}
		return this._root.source._read(e, t, n, r);
	}
	_getFileSize() {
		if (this._root) return this._root.source._getFileSize();
	}
	_dispose() {
		this._root ? this._root.free() : this._rootRequest && this._rootRequest.then((e) => e.free());
	}
}, Da = class extends Sa {
	constructor(e, t = {}) {
		if (!(e instanceof Blob)) throw TypeError("blob must be a Blob.");
		if (!t || typeof t != "object") throw TypeError("options must be an object.");
		if (t.maxCacheSize !== void 0 && (!Be(t.maxCacheSize) || t.maxCacheSize < 0)) throw TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
		if (t.useStreamReader !== void 0 && typeof t.useStreamReader != "boolean") throw TypeError("options.useStreamReader, when provided, must be a boolean.");
		super(), this._readers = /* @__PURE__ */ new WeakMap(), this._blob = e, this._options = t, this._orchestrator = new ja({
			maxCacheSize: t.maxCacheSize ?? 8 * 2 ** 20,
			maxWorkerCount: 4,
			runWorker: this._runWorker.bind(this),
			prefetchProfile: Aa.fileSystem
		}), this._orchestrator.fileSize = e.size;
	}
	_getFileSize() {
		return this._orchestrator.fileSize;
	}
	_read(e, t, n, r) {
		return this._orchestrator.read(e, t, n, r);
	}
	async _runWorker(e) {
		a(e.strictTarget);
		let t = this._readers.get(e);
		for (t === void 0 && (t = ("stream" in this._blob) && !Te() && this._options.useStreamReader !== !1 ? this._blob.slice(e.currentPos).stream().getReader() : null, this._readers.set(e, t)); e.currentPos < e.targetPos && !e.aborted;) if (t) {
			let { done: n, value: r } = await t.read();
			if (n) throw this._orchestrator.onWorkerFinished(e), Error("Blob reader stopped unexpectedly before all requested data was read.");
			if (e.aborted) break;
			this._dispatchRead(e.currentPos, e.currentPos + r.length), this._orchestrator.supplyWorkerData(e, r);
		} else {
			let t = await this._blob.slice(e.currentPos, e.targetPos).arrayBuffer();
			if (e.aborted) break;
			this._dispatchRead(e.currentPos, e.currentPos + t.byteLength), this._orchestrator.supplyWorkerData(e, new Uint8Array(t));
		}
		this._orchestrator.signalWorkerStoppedRunning(e), e.aborted && await t?.cancel();
	}
	_dispose() {
		this._orchestrator.dispose();
	}
}, Oa = .5 * 2 ** 20, ka = class extends Sa {
	constructor(e, t = {}) {
		if (!(e instanceof ReadableStream)) throw TypeError("stream must be a ReadableStream.");
		if (!t || typeof t != "object") throw TypeError("options must be an object.");
		if (t.maxCacheSize !== void 0 && (!Be(t.maxCacheSize) || t.maxCacheSize < 0)) throw TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
		super(), this._reader = null, this._cache = [], this._pendingSlices = [], this._currentIndex = 0, this._targetIndex = 0, this._maxRequestedIndex = 0, this._endIndex = null, this._pulling = !1, this._stream = e, this._maxCacheSize = t.maxCacheSize ?? 32 * 2 ** 20;
	}
	_getFileSize() {
		return this._endIndex;
	}
	_read(e, t) {
		if (this._endIndex !== null && t > this._endIndex) return null;
		this._maxRequestedIndex = Math.max(this._maxRequestedIndex, t);
		let n = D(this._cache, e, (e) => e.start), r = n === -1 ? null : this._cache[n];
		if (r && r.start <= e && t <= r.end) return {
			bytes: r.bytes,
			view: r.view,
			offset: r.start
		};
		let i = e, a = new Uint8Array(t - e);
		if (n !== -1) for (let r = n; r < this._cache.length; r++) {
			let n = this._cache[r];
			if (n.start >= t) break;
			let o = Math.max(e, n.start);
			o > i && this._throwDueToCacheMiss();
			let s = Math.min(t, n.end);
			o < s && (a.set(n.bytes.subarray(o - n.start, s - n.start), o - e), i = s);
		}
		if (i === t) return {
			bytes: a,
			view: p(a),
			offset: e
		};
		this._currentIndex > i && this._throwDueToCacheMiss();
		let { promise: o, resolve: s, reject: c } = O();
		return this._pendingSlices.push({
			start: e,
			end: t,
			bytes: a,
			resolve: s,
			reject: c
		}), this._targetIndex = Math.max(this._targetIndex, t), this._pulling || (this._pulling = !0, this._pull().catch((e) => {
			if (this._pulling = !1, this._pendingSlices.length > 0) this._pendingSlices.forEach((t) => t.reject(e)), this._pendingSlices.length = 0;
			else throw e;
		})), o;
	}
	_throwDueToCacheMiss() {
		throw Error("Read is before the cached region. With ReadableStreamSource, you must access the data more sequentially or increase the size of its cache.");
	}
	async _pull() {
		for (this._reader ??= this._stream.getReader(); this._currentIndex < this._targetIndex && !this._disposed;) {
			let { done: e, value: t } = await this._reader.read();
			if (e) {
				for (let e of this._pendingSlices) e.resolve(null);
				this._pendingSlices.length = 0, this._endIndex = this._currentIndex;
				break;
			}
			let n = this._currentIndex, r = this._currentIndex + t.byteLength;
			this._dispatchRead(n, r);
			for (let e = 0; e < this._pendingSlices.length; e++) {
				let i = this._pendingSlices[e], a = Math.max(n, i.start), o = Math.min(r, i.end);
				a < o && (i.bytes.set(t.subarray(a - n, o - n), a - i.start), o === i.end && (i.resolve({
					bytes: i.bytes,
					view: p(i.bytes),
					offset: i.start
				}), this._pendingSlices.splice(e, 1), e--));
			}
			for (this._cache.push({
				start: n,
				end: r,
				bytes: t,
				view: p(t),
				age: 0
			}); this._cache.length > 0;) {
				let e = this._cache[0];
				if (this._maxRequestedIndex - e.end <= this._maxCacheSize) break;
				this._cache.shift();
			}
			this._currentIndex += t.byteLength;
		}
		this._pulling = !1;
	}
	_dispose() {
		this._pendingSlices.length = 0, this._cache.length = 0, this._reader?.cancel();
	}
}, Aa = {
	none: (e, t) => ({
		start: e,
		end: t
	}),
	fileSystem: (e, t) => {
		let n = 2 ** 16;
		return e = Math.floor((e - n) / n) * n, t = Math.ceil((t + n) / n) * n, {
			start: e,
			end: t
		};
	},
	network: (e, t, n) => {
		let r = 2 ** 16;
		e = Math.max(0, Math.floor((e - r) / r) * r);
		for (let r of n) {
			let n = 8 * 2 ** 20, i = Math.max((r.startPos + r.targetPos) / 2, r.targetPos - n);
			if (Ne(e, t, i, r.targetPos)) {
				let e = r.targetPos - r.startPos, i = Math.ceil((e + 1) / n) * n, a = 2 ** Math.ceil(Math.log2(e + 1)), o = Math.min(a, i);
				t = Math.max(t, r.startPos + o);
			}
		}
		return t = Math.max(t, e + Oa), {
			start: e,
			end: t
		};
	}
}, ja = class {
	constructor(e) {
		this.options = e, this.fileSize = null, this.nextAge = 0, this.workers = [], this.cache = [], this.currentCacheSize = 0, this.disposed = !1, this.queuedReads = [];
	}
	read(e, t, n, r) {
		a(!this.disposed);
		let i = this.options.prefetchProfile(e, t, this.workers), o = Math.max(i.start, n), s = Math.min(i.end, this.fileSize ?? Infinity, r);
		a(o <= e && t <= s);
		let c = null, l = D(this.cache, e, (e) => e.start), u = l === -1 ? null : this.cache[l];
		u && u.start <= e && t <= u.end && (u.age = this.nextAge++, c = {
			bytes: u.bytes,
			view: u.view,
			offset: u.start
		});
		let d = D(this.cache, o, (e) => e.start), f = c ? null : new Uint8Array(t - e), m = 0, h = o, g = [];
		if (d !== -1) {
			for (let n = d; n < this.cache.length; n++) {
				let r = this.cache[n];
				if (r.start >= s) break;
				if (r.end <= o) continue;
				let i = Math.max(o, r.start), c = Math.min(s, r.end);
				if (a(i <= c), h < i && g.push({
					start: h,
					end: i
				}), h = c, f) {
					let n = Math.max(e, r.start), i = Math.min(t, r.end);
					if (n < i) {
						let t = n - e;
						f.set(r.bytes.subarray(n - r.start, i - r.start), t), t === m && (m = i - e);
					}
				}
				r.age = this.nextAge++;
			}
			h < s && g.push({
				start: h,
				end: s
			});
		} else g.push({
			start: o,
			end: s
		});
		if (f && m >= f.length && (c = {
			bytes: f,
			view: p(f),
			offset: e
		}), g.length === 0) return a(c), c;
		let { promise: _, resolve: v, reject: y } = O(), b = [];
		for (let n of g) {
			let r = Math.max(e, n.start), i = Math.min(t, n.end);
			r === n.start && i === n.end ? b.push(n) : r < i && b.push({
				start: r,
				end: i
			});
		}
		let x = f && {
			start: e,
			bytes: f,
			holes: b,
			resolve: v,
			reject: y
		};
		outer: for (let e of g) {
			for (let t of this.workers) if (this.checkHoleAgainstWorker(t, e, x ? [x] : [])) {
				this.checkQueuedReadsAgainstWorker(t);
				continue outer;
			}
			let t = e.end < s || this.fileSize !== null, n = this.createWorker(e.start, e.end, t);
			if (n) x && (n.pendingSlices = [x]), this.runWorker(n);
			else {
				let n = D(this.queuedReads, e.start, (e) => e.hole.start), r = n === -1 ? null : this.queuedReads[n];
				for (r && e.start <= r.hole.end ? (r.hole.end = Math.max(r.hole.end, e.end), r.strictTarget &&= t, x && r.pendingSlices.push(x)) : (n++, r = {
					hole: {
						start: e.start,
						end: e.end
					},
					strictTarget: t,
					pendingSlices: x ? [x] : [],
					age: this.nextAge++
				}, this.queuedReads.splice(n, 0, r)); n + 1 < this.queuedReads.length;) {
					let e = this.queuedReads[n + 1];
					if (e.hole.start > r.hole.end) break;
					r.hole.end = Math.max(r.hole.end, e.hole.end), r.pendingSlices.push(...e.pendingSlices), r.strictTarget &&= e.strictTarget, r.age = Math.min(r.age, e.age), this.queuedReads.splice(n + 1, 1);
				}
			}
		}
		return c ? _.catch((e) => {
			if (!this.disposed) throw e;
		}) : (a(f), c = _.then((t) => t && {
			bytes: t,
			view: p(t),
			offset: e
		})), c;
	}
	checkHoleAgainstWorker(e, t, n) {
		if (Ne(t.start - 2 ** 17, t.start, e.currentPos, e.targetPos)) {
			e.targetPos = Math.max(e.targetPos, t.end);
			for (let t = 0; t < n.length; t++) {
				let r = n[t];
				e.pendingSlices.includes(r) || e.pendingSlices.push(r);
			}
			return e.running || this.runWorker(e), !0;
		}
		return !1;
	}
	checkQueuedReadsAgainstWorker(e) {
		let t = !1;
		for (let n = 0; n < this.queuedReads.length; n++) {
			let r = this.queuedReads[n];
			if (this.checkHoleAgainstWorker(e, r.hole, r.pendingSlices)) this.queuedReads.splice(n, 1), n--, t = !0;
			else if (t) break;
		}
	}
	createWorker(e, t, n) {
		if (this.workers.length >= this.options.maxWorkerCount) {
			let e = null, t = null;
			for (let n = 0; n < this.workers.length; n++) {
				let r = this.workers[n];
				!r.running && r.pendingSlices.length === 0 && (!e || r.age < e.age) && (t = n, e = r);
			}
			if (e) a(t !== null), a(e.pendingSlices.length === 0), this.workers.splice(t, 1);
			else return null;
		}
		let r = {
			startPos: e,
			currentPos: e,
			targetPos: t,
			strictTarget: n,
			running: !1,
			aborted: this.disposed,
			pendingSlices: [],
			age: this.nextAge++
		};
		return this.workers.push(r), r;
	}
	runWorker(e) {
		a(!e.running), a(e.currentPos < e.targetPos), e.running = !0, e.age = this.nextAge++, this.options.runWorker(e).catch((t) => {
			if (e.running = !1, e.pendingSlices.length > 0) e.pendingSlices.forEach((e) => e.reject(t)), e.pendingSlices.length = 0;
			else if (!e.aborted && !this.disposed) throw t;
		}).finally(() => {
			if (!(e.running || this.workers.length >= this.options.maxWorkerCount) && this.queuedReads.length > 0) {
				let e = 0;
				for (let t = 1; t < this.queuedReads.length; t++) this.queuedReads[t].age < this.queuedReads[e].age && (e = t);
				let t = this.queuedReads[e];
				this.queuedReads.splice(e, 1);
				let n = this.createWorker(t.hole.start, t.hole.end, t.strictTarget);
				a(n), n.pendingSlices = t.pendingSlices, this.runWorker(n);
			}
		});
	}
	consolidateEverythingIntoOneWorker(e) {
		let t = new Set(e.pendingSlices);
		for (let n = 0; n < this.workers.length; n++) {
			let r = this.workers[n];
			if (r !== e) {
				for (let e of r.pendingSlices) t.add(e);
				r.aborted = !0, r.pendingSlices.length = 0, this.workers.splice(n, 1), n--;
			}
		}
		for (let e = 0; e < this.queuedReads.length; e++) {
			let n = this.queuedReads[e];
			for (let e of n.pendingSlices) t.add(e);
		}
		e.pendingSlices = [...t], this.queuedReads.length = 0;
	}
	supplyWorkerData(e, t) {
		a(!e.aborted);
		let n = e.currentPos, r = n + t.length;
		this.insertIntoCache({
			start: n,
			end: r,
			bytes: t,
			view: p(t),
			age: this.nextAge++
		}), e.currentPos += t.length, e.currentPos > e.targetPos && (e.targetPos = e.currentPos, this.checkQueuedReadsAgainstWorker(e));
		for (let i = 0; i < e.pendingSlices.length; i++) {
			let a = e.pendingSlices[i], o = Math.max(n, a.start), s = Math.min(r, a.start + a.bytes.length);
			o < s && a.bytes.set(t.subarray(o - n, s - n), o - a.start);
			for (let e = 0; e < a.holes.length; e++) {
				let t = a.holes[e];
				n <= t.start && r > t.start && (t.start = r), t.end <= t.start && (a.holes.splice(e, 1), e--);
			}
			a.holes.length === 0 && (a.resolve(a.bytes), e.pendingSlices.splice(i, 1), i--);
		}
		for (let t = 0; t < this.workers.length; t++) {
			let i = this.workers[t];
			e === i || i.running || Ne(n, r, i.currentPos, i.targetPos) && (this.workers.splice(t, 1), t--);
		}
	}
	supplyFileSize(e) {
		a(this.fileSize === null), this.fileSize = e;
		for (let t of this.workers) {
			t.targetPos = Math.min(t.targetPos, e), t.strictTarget = !0;
			for (let n = 0; n < t.pendingSlices.length; n++) {
				let r = t.pendingSlices[n];
				for (let i of r.holes) if (i.end > e) {
					r.resolve(null), t.pendingSlices.splice(n, 1), n--;
					break;
				}
			}
		}
		for (let t = 0; t < this.queuedReads.length; t++) {
			let n = this.queuedReads[t];
			if (n.hole.start >= e) {
				for (let e of n.pendingSlices) e.resolve(null);
				this.queuedReads.splice(t, 1), t--;
			} else if (n.hole.end > e) {
				n.hole.end = e, n.strictTarget = !0;
				for (let t = 0; t < n.pendingSlices.length; t++) {
					let r = n.pendingSlices[t];
					r.start >= e && (r.resolve(null), n.pendingSlices.splice(t, 1), t--);
				}
			}
		}
	}
	signalWorkerStoppedRunning(e) {
		e.running = !1, e.pendingSlices.length = 0;
	}
	onWorkerFinished(e) {
		let t = this.workers.indexOf(e);
		a(t !== -1), e.running = !1, this.workers.splice(t, 1), this.fileSize === null && this.supplyFileSize(e.currentPos);
		for (let t of e.pendingSlices) t.resolve(null);
	}
	insertIntoCache(e) {
		if (this.options.maxCacheSize === 0) return;
		let t = D(this.cache, e.start, (e) => e.start) + 1;
		if (t > 0) {
			let n = this.cache[t - 1];
			if (n.end >= e.end) return;
			if (n.end > e.start) {
				let r = new Uint8Array(e.end - n.start);
				r.set(n.bytes, 0), r.set(e.bytes, e.start - n.start), this.currentCacheSize += e.end - n.end, n.bytes = r, n.view = p(r), n.end = e.end, t--, e = n;
			} else this.cache.splice(t, 0, e), this.currentCacheSize += e.bytes.length;
		} else this.cache.splice(t, 0, e), this.currentCacheSize += e.bytes.length;
		for (let n = t + 1; n < this.cache.length; n++) {
			let t = this.cache[n];
			if (e.end <= t.start) break;
			if (e.end >= t.end) {
				this.cache.splice(n, 1), this.currentCacheSize -= t.bytes.length, n--;
				continue;
			}
			let r = new Uint8Array(t.end - e.start);
			r.set(e.bytes, 0), r.set(t.bytes, t.start - e.start), this.currentCacheSize -= e.end - t.start, e.bytes = r, e.view = p(r), e.end = t.end, this.cache.splice(n, 1);
			break;
		}
		for (; this.currentCacheSize > this.options.maxCacheSize;) {
			let e = 0, t = this.cache[0];
			for (let n = 1; n < this.cache.length; n++) {
				let r = this.cache[n];
				r.age < t.age && (e = n, t = r);
			}
			if (this.currentCacheSize - t.bytes.length <= this.options.maxCacheSize) break;
			this.cache.splice(e, 1), this.currentCacheSize -= t.bytes.length;
		}
	}
	dispose() {
		for (let e of this.workers) e.aborted = !0;
		this.workers.length = 0, this.cache.length = 0, this.disposed = !0;
	}
}, Ma = class extends Sa {
	constructor(e, t, n) {
		if (super(), this._ref = null, e._disposed) throw Error("Cannot create a slice of a disposed source.");
		this._baseSource = e, this._offset = t, this._length = n ?? null;
	}
	_getFileSize() {
		let e = this._baseSource._getFileSize();
		return e === void 0 ? this._length === null ? void 0 : this._length : e === null ? this._length === null ? null : this._length : M(e - this._offset, 0, this._length ?? Infinity);
	}
	_read(e, t, n, r) {
		if (this._length !== null && t > this._length) return null;
		let i = this._baseSource._read(this._offset + e, this._offset + t, this._offset + n, this._offset + r), a = (e) => e ? (e.offset -= this._offset, e) : null;
		return i instanceof Promise ? i.then(a) : a(i);
	}
	_dispose() {
		this._ref?.free();
	}
	ref() {
		return this._ref ??= this._baseSource.ref(), super.ref();
	}
}, Na = function(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: r,
			async: n
		});
	} else n && e.stack.push({ async: !0 });
	return t;
}, Pa = (function(e) {
	return function(t) {
		function n(n) {
			t.error = t.hasError ? new e(n, t.error, "An error was suppressed during disposal.") : n, t.hasError = !0;
		}
		var r, i = 0;
		function a() {
			for (; r = t.stack.pop();) try {
				if (!r.async && i === 1) return i = 0, t.stack.push(r), Promise.resolve().then(a);
				if (r.dispose) {
					var e = r.dispose.call(r.value);
					if (r.async) return i |= 2, Promise.resolve(e).then(a, function(e) {
						return n(e), a();
					});
				} else i |= 1;
			} catch (e) {
				n(e);
			}
			if (i === 1) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
			if (t.hasError) throw t.error;
		}
		return a();
	};
})(typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
}), Fa = /^0[xX][0-9a-fA-F]+$/, Ia = /^data:.*;base64,/i, La = class extends _a {
	constructor(e, t, n, r) {
		super(e.input, t, n), this.segments = [], this.nextLines = null, this.currentUpdateSegmentsPromise = null, this.streamHasEnded = !1, this.lastSegmentUpdateTime = -Infinity, this.refreshInterval = 5, this.rootPath = t, this.demuxer = e, this.nextLines = r;
	}
	runUpdateSegments() {
		return this.currentUpdateSegmentsPromise ??= (async () => {
			try {
				let e = this.getRemainingWaitTimeMs();
				e > 0 && await Ke(e), this.lastSegmentUpdateTime = performance.now(), await this.updateSegments();
			} finally {
				this.currentUpdateSegmentsPromise = null;
			}
		})();
	}
	getRemainingWaitTimeMs() {
		let e = performance.now() - this.lastSegmentUpdateTime, t = Math.max(0, 1e3 * this.refreshInterval - e);
		return t <= 50 ? 0 : t;
	}
	async updateSegments() {
		let e = this.nextLines;
		if (this.nextLines = null, !e) {
			let t = {
				stack: [],
				error: void 0,
				hasError: !1
			};
			try {
				let n = Na(t, await this.demuxer.input._getSourceUncached({
					path: this.rootPath,
					isRoot: !1
				}), !1), r = await new Hs(n.source).requestEntireFile();
				a(r), e = ac(r, r.length, { ignore: ha }), n.source instanceof wa && (this.rootPath = n.source.rootPath);
			} catch (e) {
				t.error = e, t.hasError = !0;
			} finally {
				Pa(t);
			}
		}
		let t = this.input._formatOptions.hls?.offsetTimestampsByDateTime !== !1, n = !1, r = 0, i = null, o = null, c = null, l = 0, u = null, d = null, f = null, m = null, h = null, g = null, _ = !1, v = s(this.segments) ?? null, y = (e) => {
			let t = e.indexOf("@"), n = Number(t === -1 ? e : e.slice(0, t));
			if (!Number.isInteger(n) || n < 0) throw Error(`Invalid #EXT-X-BYTERANGE length '${e}'.`);
			let r = null;
			if (t !== -1 && (r = Number(e.slice(t + 1)), !Number.isInteger(r) || r < 0)) throw Error(`Invalid #EXT-X-BYTERANGE offset '${e}'.`);
			return {
				length: n,
				offset: r
			};
		}, b = (e) => {
			l = e, v && (a(v.sequenceNumber !== null), v.sequenceNumber < e && (r = v.timestamp + v.duration, u = v.firstSegment, d = v.initSegment, h = v.lastProgramDateTimeSeconds, i = v.unixEpochTimestamp === null ? null : v.unixEpochTimestamp + v.duration, v = null));
		};
		for (let a = 0; a < e.length; a++) {
			let x = e[a];
			if (!n) {
				if (x !== "#EXTM3U") throw Error("Invalid M3U8 file; expected first line to be #EXTM3U.");
				n = !0;
				continue;
			}
			if (!x.startsWith("#")) {
				if (!v) {
					if (o === null) throw Error("Invalid M3U8 file; a segment must be preceded by an #EXTINF tag.");
					let e = c;
					if (e && e.method === "AES-128" && !e.iv) {
						let t = /* @__PURE__ */ new Uint8Array(16), n = p(t);
						n.setUint32(8, Math.floor(l / 2 ** 32)), n.setUint32(12, l), e = {
							...e,
							iv: t
						};
					}
					let t = {
						path: Ve(this.rootPath, x),
						offset: m?.offset ?? 0,
						length: m?.length ?? null
					}, n = {
						timestamp: r,
						unixEpochTimestamp: i,
						firstSegment: u,
						sequenceNumber: l,
						location: t,
						duration: o,
						encryption: e,
						initSegment: d,
						lastProgramDateTimeSeconds: h
					};
					u ??= n, r += o, i !== null && (i += o), this.segments.push(n);
				}
				o = null, m === null ? f = null : m = null, b(l + 1);
			}
			if (x.startsWith("#EXTINF:")) {
				if (v) {
					_ = !0;
					continue;
				}
				_ ||= (h === null && l > 0 && g !== null && (r = l * g), !0);
				let e = x.slice(ca.length), t = e.indexOf(","), n = t === -1 ? e : e.slice(0, t), i = Number(n);
				if (!Number.isFinite(i) || i < 0) throw Error(`Invalid #EXTINF tag duration '${n}'.`);
				o = i;
			} else if (x.startsWith("#EXT-X-MAP:")) {
				let e = new ga(x.slice(la.length)), t = e.get("uri");
				if (!t) throw Error("Invalid #EXT-X-MAP tag; missing URI attribute.");
				let n = e.get("byterange"), a = null;
				if (n !== null && (a = y(n)), a && a.offset === null) throw Error("Invalid #EXT-X-MAP tag; BYTERANGE attribute must have a specified offset.");
				if (!v) {
					let e = {
						path: Ve(this.rootPath, t),
						offset: a?.offset ?? 0,
						length: a?.length ?? null
					};
					if (c?.method === "AES-128" && !c.iv) throw Error("IV attribute must be set on #EXT-X-KEY tag preceding the #EXT-X-MAP tag.");
					d = {
						timestamp: r,
						unixEpochTimestamp: i,
						firstSegment: null,
						sequenceNumber: null,
						location: e,
						duration: 0,
						encryption: c,
						initSegment: null,
						lastProgramDateTimeSeconds: h
					};
				}
				o = null, m === null ? f = null : m = null;
			} else if (x.startsWith("#EXT-X-KEY:")) {
				let e = new ga(x.slice(ua.length)), t = e.get("method");
				if (t === "NONE") c = null;
				else if (t === "AES-128") {
					let t = e.get("uri");
					if (!t) throw Error("Invalid #EXT-X-KEY: AES-128 requires a URI attribute.");
					let n = null, r = e.get("iv");
					if (r) {
						if (!Fa.test(r)) throw Error(`Unsupported IV format '${r}'.`);
						let e = r.slice(2);
						e = e.padStart(32, "0"), n = /* @__PURE__ */ new Uint8Array(16);
						for (let t = 0; t < 16; t++) {
							let r = -32 + t;
							n[t] = parseInt(e.slice(r, r + 2), 16);
						}
					}
					let i = e.get("keyformat") ?? "identity";
					if (i !== "identity") throw Error("For AES-128 encryption, only the 'identity' KEYFORMAT is currently supported. If you think other formats should be supported, please raise an issue.");
					c = {
						method: "AES-128",
						keyUri: Ve(this.rootPath, t),
						iv: n,
						keyFormat: i
					};
				} else if (t === "SAMPLE-AES" || t === "SAMPLE-AES-CTR") {
					let n = e.get("uri");
					if (!n) throw Error(`Invalid #EXT-X-KEY: ${t} requires a URI attribute.`);
					if ((e.get("keyformat") ?? "identity") === "identity") throw Error("For SAMPLE-AES and SAMPLE-AES-CTR encryption, the 'identity' KEYFORMAT is not supported. If you think this format should be supported, please raise an issue.");
					let r = null;
					if (Ia.test(n)) {
						let e = n.indexOf(","), t = Ie(n.slice(e + 1));
						if (t.length >= 8 && t[4] === 112 && t[5] === 115 && t[6] === 115 && t[7] === 104) {
							let e = p(t).getUint32(0);
							r = Xn(t.subarray(8, Math.min(e, t.length)));
						}
					}
					c = {
						method: t,
						psshBox: r
					};
				} else throw Error(`Unsupported encryption method '${t}'. If you think this method should be supported, please raise an issue.`);
			} else if (x.startsWith("#EXT-X-MEDIA-SEQUENCE:")) {
				let e = x.slice(da.length), t = Number(e);
				if (!Number.isInteger(t) || t < 0) throw Error(`Invalid EXT-X-MEDIA-SEQUENCE value '${e}'.`);
				b(t);
			} else if (x.startsWith("#EXT-X-BYTERANGE:")) {
				let e = y(x.slice(fa.length));
				if (e.offset === null) {
					if (f === null) throw Error("Invalid M3U8 file; #EXT-X-BYTERANGE without offset requires a previous byte range.");
					e.offset = f;
				}
				m = e, f = e.offset + e.length;
			} else if (x.startsWith("#EXT-X-PROGRAM-DATE-TIME:")) {
				if (v) continue;
				let e = x.slice(pa.length), n = Date.parse(e);
				if (!Number.isFinite(n)) continue;
				let a = n / 1e3;
				if (h === a) continue;
				if (h === null && this.segments.length > 0) {
					let e = s(this.segments), n = a - (e.timestamp + e.duration);
					for (let e of this.segments) e.unixEpochTimestamp = e.timestamp + n, t && (e.timestamp = e.unixEpochTimestamp);
				}
				h = a, i = a, t && (r = a);
			} else if (x === "#EXT-X-DISCONTINUITY") u = null;
			else if (x.startsWith("#EXT-X-TARGETDURATION:")) {
				let e = x.slice(ma.length), t = Number(e);
				if (!Number.isFinite(t) || t < 0) throw Error(`Invalid EXT-X-TARGETDURATION value '${e}'.`);
				this.refreshInterval = t, g = t;
			} else if (x === "#EXT-X-ENDLIST") {
				this.streamHasEnded = !0;
				break;
			} else x.startsWith("#EXT-X-PLAYLIST-TYPE:") && x.slice(21).toLowerCase() === "vod" && (this.streamHasEnded = !0);
		}
		if (!n) throw Error("Invalid M3U8 file; no #EXTM3U header.");
	}
	async getFirstSegment() {
		return this.segments.length === 0 && await this.runUpdateSegments(), this.segments[0] ?? null;
	}
	async getSegmentAt(e, t) {
		this.segments.length === 0 && await this.runUpdateSegments();
		let n = !!t.skipLiveWait && this.getRemainingWaitTimeMs() > 0;
		for (;;) {
			let r = D(this.segments, e, (e) => e.timestamp);
			if (r === -1) return null;
			if (r < this.segments.length - 1 || this.streamHasEnded || n) return this.segments[r];
			let i = this.segments[r];
			if (e < i.timestamp + i.duration) return i;
			await this.runUpdateSegments(), t.skipLiveWait && (n = !0);
		}
	}
	async getNextSegment(e, t) {
		let n = this.segments.indexOf(e);
		a(n !== -1);
		let r = n + 1, i = !!t.skipLiveWait && this.getRemainingWaitTimeMs() > 0;
		for (;;) {
			if (r < this.segments.length) return this.segments[r];
			if (this.streamHasEnded || i) return null;
			await this.runUpdateSegments(), t.skipLiveWait && (i = !0);
		}
	}
	async getPreviousSegment(e) {
		let t = this.segments.indexOf(e);
		return a(t !== -1), this.segments[t - 1] ?? null;
	}
	getInputForSegment(e) {
		let t = e, n = this.inputCache.find((e) => e.segment === t);
		if (n) return n.age = this.nextInputCacheAge++, n.input;
		let r = null;
		(t.initSegment || t.firstSegment) && (r = this.getInputForSegment(t.initSegment ?? t.firstSegment));
		let i = {
			...this.input._formatOptions,
			isobmff: {
				...this.input._formatOptions.isobmff,
				resolveKeyId: this.input._formatOptions.isobmff?.resolveKeyId && ((e) => {
					if (!t.encryption || !(t.encryption.method === "SAMPLE-AES" || t.encryption.method === "SAMPLE-AES-CTR") || !t.encryption.psshBox) return this.input._formatOptions.isobmff.resolveKeyId(e);
					let n = e.psshBoxes, { psshBox: r } = t.encryption;
					return (r.keyIds === null || r.keyIds.includes(e.keyId)) && !n.some((e) => Zn(e, r)) && (n = [...n, r]), this.input._formatOptions.isobmff.resolveKeyId({
						...e,
						psshBoxes: n
					});
				})
			}
		}, o = new zs({
			source: new Ea(t.location.path, async (e) => {
				a(e.isRoot);
				let n = {
					...e,
					isRoot: !1
				}, r, i = t.location.offset > 0 || t.location.length !== null;
				if (!t.encryption || t.encryption.method === "SAMPLE-AES" || t.encryption.method === "SAMPLE-AES-CTR") {
					if (r = await this.input._getSourceCached(n), i) {
						let e = r.source.slice(t.location.offset, t.location.length ?? void 0).ref();
						r.free(), r = e;
					}
				} else if (t.encryption.method === "AES-128") {
					let e = t.encryption;
					a(e.iv);
					let o = await this.input._getSourceCached(n);
					if (i) {
						let e = o.source.slice(t.location.offset, t.location.length ?? void 0).ref();
						o.free(), o = e;
					}
					r = new ka(mr(new Hs(o.source), async () => {
						let t = {
							stack: [],
							error: void 0,
							hasError: !1
						};
						try {
							let n = await new Hs(Na(t, await this.input._getSourceCached({
								path: e.keyUri,
								isRoot: !1
							}, 2), !1).source).requestSlice(0, 16);
							if (!n) throw Error("Invalid AES-128 key; expected at least 16 bytes of data.");
							return {
								key: U(n, 16),
								iv: e.iv
							};
						} catch (e) {
							t.error = e, t.hasError = !0;
						} finally {
							Pa(t);
						}
					}, () => {
						o.free();
					})).ref();
				} else a(!1);
				return r;
			}),
			formats: this.input._formats.filter((e) => !(e instanceof ro)),
			initInput: r ?? void 0,
			formatOptions: i
		});
		if (o._onFormatDetermined = (e) => {
			if ((t.encryption?.method === "SAMPLE-AES" || t.encryption?.method === "SAMPLE-AES-CTR") && !e._isIsobmff) throw Error("The SAMPLE-AES and SAMPLE-AES-CTR encryption methods are currently only supported for ISOBMFF files.");
		}, this.inputCache.push({
			segment: t,
			input: o,
			age: this.nextInputCacheAge++
		}), this.inputCache.length > 4) {
			let e = Ue(this.inputCache, (e) => e.age);
			a(e !== -1), this.inputCache.splice(e, 1);
		}
		return o;
	}
	async getLiveRefreshInterval() {
		return this.getRemainingWaitTimeMs() === 0 && await this.runUpdateSegments(), this.streamHasEnded ? null : this.refreshInterval;
	}
}, Ra = class extends qn {
	constructor(e) {
		super(e), this.metadataPromise = null, this.trackBackings = null, this.internalTracks = null, this.segmentedInputs = [], this.hasMasterPlaylist = !0;
	}
	readMetadata() {
		return this.metadataPromise ??= (async () => {
			a(this.input._rootSource instanceof wa);
			let e = await this.input._reader.requestEntireFile();
			a(e);
			let t = ac(e, e.length, { ignore: ha }), { rootPath: n } = this.input._rootSource, r = [], i = [];
			for (let e = 1; e < t.length; e++) {
				let a = t[e];
				if (a.startsWith("#EXT-X-STREAM-INF:")) {
					let i = e, o = t[++e];
					if (o === void 0) throw Error("Incorrect M3U8 file; a line must follow the #EXT-X-STREAM-INF tag.");
					let s = Ve(n, o), c = new ga(a.slice(aa.length));
					if (c.getAsNumber("bandwidth") === null) throw Error("Invalid M3U8 file; #EXT-X-STREAM-INF tag requires a BANDWIDTH attribute with a valid numerical value.");
					r.push({
						fullPath: s,
						attributes: c,
						lineNumber: i,
						hasOnlyKeyPackets: !1
					});
				} else if (a.startsWith("#EXT-X-I-FRAME-STREAM-INF:")) {
					let t = new ga(a.slice(oa.length)), i = t.get("uri");
					if (i === null) throw Error("Invalid M3U8 file; #EXT-X-I-FRAME-STREAM-INF tag requires a URI attribute.");
					if (t.getAsNumber("bandwidth") === null) throw Error("Invalid M3U8 file; #EXT-X-I-FRAME-STREAM-INF tag requires a BANDWIDTH attribute with a valid numerical value.");
					let o = Ve(n, i);
					r.push({
						fullPath: o,
						attributes: t,
						lineNumber: e,
						hasOnlyKeyPackets: !0
					});
				} else if (a.startsWith("#EXT-X-MEDIA:")) {
					let t = new ga(a.slice(sa.length));
					if (t.get("type") === null) throw Error("Invalid M3U8 file; #EXT-X-MEDIA tag requires a TYPE attribute.");
					if (t.get("group-id") === null) throw Error("Invalid M3U8 file; #EXT-X-MEDIA tag requires a GROUP-ID attribute.");
					let r = null, o = t.get("uri");
					o !== null && (r = Ve(n, o)), i.push({
						fullPath: r,
						attributes: t,
						lineNumber: e
					});
				} else if (a !== "#EXT-X-I-FRAMES-ONLY" && a.startsWith("#EXTINF:")) {
					let e = new La(this, n, null, t);
					this.segmentedInputs = [e], this.hasMasterPlaylist = !1, this.trackBackings = await e.getTrackBackings();
					return;
				}
			}
			let o = [...new Set(i.filter((e) => e.attributes.get("type").toLowerCase() === "video").map((e) => e.attributes.get("group-id")))], s = [...new Set(i.filter((e) => e.attributes.get("type").toLowerCase() === "audio").map((e) => e.attributes.get("group-id")))], c = await Promise.all(r.map(async (e, t) => {
				let r = [], c = e.attributes.get("codecs"), l;
				if (c) l = c.split(",").map((e) => e.trim());
				else {
					let t = await this.getSegmentedInputForPath(e.fullPath).getTrackBackings(), n = await Promise.all(t.map(async (e) => ({
						track: e,
						codec: await e.getCodec()
					})));
					l = await Promise.all(n.filter((e) => e.codec !== null).map((e) => e.track.getDecoderConfig().then((e) => e.codec)));
				}
				let u = e.attributes.get("video"), d = e.attributes.get("audio"), f = l.some((e) => ot.includes(wt(e))), p = l.some((e) => ct.includes(wt(e)));
				if (u !== null && !f) {
					if (!o.includes(u)) throw Error(`Invalid M3U8 file; variant stream references video group "${u}" which is not defined in any #EXT-X-MEDIA tags.`);
					let e = i.find((e) => {
						let t = e.attributes.get("group-id"), n = e.attributes.get("type");
						return t === u && n.toLowerCase() === "video";
					});
					outer: if (e) {
						let t = e.attributes.get("uri");
						if (t === null) break outer;
						let r = Ve(n, t), i = (await this.getSegmentedInputForPath(r).getTrackBackings()).find((e) => e.getType() === "video");
						if (!i || await i.getCodec() === null) break outer;
						let o = await i.getDecoderConfig().then((e) => e?.codec ?? null);
						a(o !== null), l.push(o);
					}
				}
				if (d !== null && !p) {
					if (!s.includes(d)) throw Error(`Invalid M3U8 file; variant stream references audio group "${d}" which is not defined in any #EXT-X-MEDIA tags.`);
					let e = i.find((e) => {
						let t = e.attributes.get("group-id"), n = e.attributes.get("type");
						return t === d && n.toLowerCase() === "audio";
					});
					outer: if (e) {
						let t = e.attributes.get("uri");
						if (t === null) break outer;
						let r = Ve(n, t), i = (await this.getSegmentedInputForPath(r).getTrackBackings()).find((e) => e.getType() === "audio");
						if (!i || await i.getCodec() === null) break outer;
						let o = await i.getDecoderConfig().then((e) => e?.codec ?? null);
						a(o !== null), l.push(o);
					}
				}
				l = [...new Set(l)];
				let m = null, h = null, g = e.attributes.getAsNumber("bandwidth");
				a(g !== null);
				let _ = e.attributes.getAsNumber("average-bandwidth"), v = e.attributes.get("name");
				for (let n of l) {
					let a = wt(n);
					if (a !== null) {
						if (ot.includes(a)) {
							if (m !== null) throw Error("Unsupported M3U8 file; multiple video codecs found in the CODECS attribute of a variant stream.");
							m = n;
							let a = e.attributes.get("video");
							if (a === null) {
								let n = e.attributes.get("resolution"), i = null, a = null;
								if (n) {
									let e = n.match(/^(\d+)x(\d+)$/);
									e && (i = Number(e[1]), a = Number(e[2]));
								}
								r.push({
									id: -1,
									demuxer: this,
									backingTrack: null,
									default: !0,
									autoselect: !0,
									languageCode: "und",
									lineNumber: e.lineNumber,
									fullPath: e.fullPath,
									fullCodecString: m,
									pairingMask: 1n << BigInt(t),
									peakBitrate: g,
									averageBitrate: _,
									name: v,
									hasOnlyKeyPackets: e.hasOnlyKeyPackets,
									info: {
										type: "video",
										width: i,
										height: a
									}
								});
							} else {
								if (!o.includes(a)) throw Error(`Invalid M3U8 file; variant stream references video group "${a}" which is not defined in any #EXT-X-MEDIA tags.`);
								for (let n of i) {
									let i = n.attributes.get("group-id"), o = n.attributes.get("type");
									if (i !== a || o.toLowerCase() !== "video") continue;
									let s = n.attributes.get("resolution") ?? e.attributes.get("resolution"), c = null, l = null;
									if (s) {
										let e = s.match(/^(\d+)x(\d+)$/);
										e && (c = Number(e[1]), l = Number(e[2]));
									}
									r.push({
										id: -1,
										demuxer: this,
										backingTrack: null,
										default: Ha(n.attributes),
										autoselect: Ha(n.attributes) || Ua(n.attributes),
										languageCode: Wa(n.attributes.get("language")),
										lineNumber: n.lineNumber,
										fullPath: n.fullPath ?? e.fullPath,
										fullCodecString: m,
										pairingMask: 1n << BigInt(t),
										peakBitrate: null,
										averageBitrate: null,
										name: n.attributes.get("name"),
										hasOnlyKeyPackets: e.hasOnlyKeyPackets,
										info: {
											type: "video",
											width: c,
											height: l
										}
									});
								}
							}
						} else if (ct.includes(a)) {
							if (h !== null) throw Error("Unsupported M3U8 file; multiple audio codecs found in the CODECS attribute of a variant stream.");
							h = n;
							let a = e.attributes.get("audio");
							if (a === null) {
								let n = e.attributes.get("channels"), i = n === null ? null : Number(n.split("/")[0]);
								r.push({
									id: -1,
									demuxer: this,
									backingTrack: null,
									default: !0,
									autoselect: !0,
									languageCode: "und",
									lineNumber: e.lineNumber,
									fullPath: e.fullPath,
									fullCodecString: h,
									pairingMask: 1n << BigInt(t),
									peakBitrate: g,
									averageBitrate: _,
									name: v,
									hasOnlyKeyPackets: e.hasOnlyKeyPackets,
									info: {
										type: "audio",
										numberOfChannels: i !== null && Number.isInteger(i) && i > 0 ? i : null
									}
								});
							} else {
								if (!s.includes(a)) throw Error(`Invalid M3U8 file; variant stream references audio group "${a}" which is not defined in any #EXT-X-MEDIA tags.`);
								for (let n of i) {
									let i = n.attributes.get("group-id"), o = n.attributes.get("type");
									if (i !== a || o.toLowerCase() !== "audio") continue;
									let s = n.attributes.get("channels") ?? e.attributes.get("channels"), c = s === null ? null : Number(s.split("/")[0]);
									r.push({
										id: -1,
										demuxer: this,
										backingTrack: null,
										default: Ha(n.attributes),
										autoselect: Ha(n.attributes) || Ua(n.attributes),
										languageCode: Wa(n.attributes.get("language")),
										lineNumber: n.lineNumber,
										fullPath: n.fullPath ?? e.fullPath,
										fullCodecString: h,
										pairingMask: 1n << BigInt(t),
										peakBitrate: null,
										averageBitrate: null,
										name: n.attributes.get("name"),
										hasOnlyKeyPackets: e.hasOnlyKeyPackets,
										info: {
											type: "audio",
											numberOfChannels: c !== null && Number.isInteger(c) && c > 0 ? c : null
										}
									});
								}
							}
						}
					}
				}
				return r;
			})), l = [], u = (e) => {
				let t = l.find((t) => t.fullPath === e.fullPath && t.info.type === e.info.type);
				t ? (t.pairingMask |= e.pairingMask, t.default ||= e.default, t.autoselect ||= e.autoselect, t.lineNumber = Math.min(t.lineNumber, e.lineNumber), e.peakBitrate !== null && (t.peakBitrate = Math.max(t.peakBitrate ?? -Infinity, e.peakBitrate)), e.averageBitrate !== null && (t.averageBitrate = Math.max(t.averageBitrate ?? -Infinity, e.averageBitrate)), t.languageCode === "und" && (t.languageCode = e.languageCode)) : (e.id = l.length + 1, l.push(e));
			};
			for (let e of c) for (let t of e) u(t);
			l.sort((e, t) => e.lineNumber - t.lineNumber), this.trackBackings = [];
			for (let e of l) e.info.type === "video" ? this.trackBackings.push(new Ba(e)) : this.trackBackings.push(new Va(e));
			this.internalTracks = l;
		})();
	}
	async getTrackBackings() {
		return await this.readMetadata(), a(this.trackBackings), this.trackBackings;
	}
	getSegmentedInputForPath(e) {
		let t = this.segmentedInputs.find((t) => t.path === e);
		if (t) return t;
		let n = null;
		return this.internalTracks && (n = this.internalTracks.filter((t) => t.fullPath === e).map((e) => ({
			id: e.id,
			type: e.info.type
		}))), t = new La(this, e, n, null), this.segmentedInputs.push(t), t;
	}
	async getMetadataTags() {
		return {};
	}
	async getMimeType() {
		return ia;
	}
	dispose() {
		if (this.segmentedInputs) {
			for (let e of this.segmentedInputs) e.dispose();
			this.segmentedInputs.length = 0;
		}
	}
}, za = class {
	constructor(e) {
		this.internalTrack = e, this.hydrationPromise = null;
	}
	hydrate() {
		return this.hydrationPromise ??= (async () => {
			let e = this.internalTrack.demuxer.getSegmentedInputForPath(this.internalTrack.fullPath), t = null, n = (await e.getTrackBackings()).filter((e) => e.getType() === this.getType());
			if (n.length === 1) t = n[0];
			else if (this instanceof Ba) {
				for (let e of n) if (await e.getCodec() === this.getCodec()) {
					t = e;
					break;
				}
			} else {
				a(this instanceof Va);
				for (let e of n) if (await e.getCodec() === this.getCodec()) {
					t = e;
					break;
				}
			}
			if (!t) throw Error("Could not find matching track in underlying media data.");
			this.internalTrack.backingTrack = t;
		})();
	}
	delegate(e) {
		return this.internalTrack.backingTrack ? e() : this.hydrate().then(e);
	}
	getCodec() {
		throw Error("Not implemented on base class.");
	}
	getDisposition() {
		return {
			...tt,
			default: this.internalTrack.autoselect,
			primary: this.internalTrack.default
		};
	}
	getId() {
		return this.internalTrack.id;
	}
	getPairingMask() {
		return this.internalTrack.pairingMask;
	}
	getInternalCodecId() {
		return null;
	}
	getLanguageCode() {
		return this.internalTrack.languageCode;
	}
	getName() {
		return this.internalTrack.name;
	}
	getNumber() {
		a(this.internalTrack.demuxer.internalTracks);
		let e = this.internalTrack.info.type, t = 0;
		for (let n of this.internalTrack.demuxer.internalTracks) if (n.info.type === e && t++, n === this.internalTrack) break;
		return t;
	}
	getTimeResolution() {
		return this.delegate(() => this.internalTrack.backingTrack.getTimeResolution());
	}
	isRelativeToUnixEpoch() {
		return this.delegate(() => this.internalTrack.backingTrack.isRelativeToUnixEpoch());
	}
	getUnixTimeForTimestamp(e) {
		return this.delegate(() => this.internalTrack.backingTrack.getUnixTimeForTimestamp(e));
	}
	getBitrate() {
		return this.internalTrack.peakBitrate;
	}
	getAverageBitrate() {
		return this.internalTrack.averageBitrate;
	}
	async getDurationFromMetadata(e) {
		return await this.hydrate(), this.internalTrack.backingTrack.getDurationFromMetadata(e);
	}
	async getLiveRefreshInterval() {
		return await this.hydrate(), this.internalTrack.backingTrack.getLiveRefreshInterval();
	}
	getHasOnlyKeyPackets() {
		return this.internalTrack.hasOnlyKeyPackets || null;
	}
	async getFirstPacket(e) {
		return await this.hydrate(), this.internalTrack.backingTrack.getFirstPacket(e);
	}
	async getPacket(e, t) {
		return await this.hydrate(), this.internalTrack.backingTrack.getPacket(e, t);
	}
	async getKeyPacket(e, t) {
		return await this.hydrate(), this.internalTrack.backingTrack.getKeyPacket(e, t);
	}
	async getNextPacket(e, t) {
		return await this.hydrate(), this.internalTrack.backingTrack.getNextPacket(e, t);
	}
	async getNextKeyPacket(e, t) {
		return await this.hydrate(), this.internalTrack.backingTrack.getNextKeyPacket(e, t);
	}
}, Ba = class extends za {
	constructor(e) {
		super(e);
	}
	get backingVideoTrack() {
		return this.internalTrack.backingTrack;
	}
	getType() {
		return "video";
	}
	getCodec() {
		return wt(this.internalTrack.fullCodecString);
	}
	getCodedWidth() {
		return this.delegate(() => this.backingVideoTrack.getCodedWidth());
	}
	getCodedHeight() {
		return this.delegate(() => this.backingVideoTrack.getCodedHeight());
	}
	getSquarePixelWidth() {
		return this.delegate(() => this.backingVideoTrack.getSquarePixelWidth());
	}
	getSquarePixelHeight() {
		return this.delegate(() => this.backingVideoTrack.getSquarePixelHeight());
	}
	getMetadataDisplayWidth() {
		return this.backingVideoTrack ? null : this.internalTrack.info.width;
	}
	getMetadataDisplayHeight() {
		return this.backingVideoTrack ? null : this.internalTrack.info.height;
	}
	getRotation() {
		return this.delegate(() => this.backingVideoTrack.getRotation());
	}
	async getColorSpace() {
		return await this.hydrate(), this.backingVideoTrack.getColorSpace();
	}
	async canBeTransparent() {
		return await this.hydrate(), this.backingVideoTrack.canBeTransparent();
	}
	getMetadataCodecParameterString() {
		return this.backingVideoTrack ? null : this.internalTrack.fullCodecString;
	}
	async getDecoderConfig() {
		return await this.hydrate(), this.backingVideoTrack.getDecoderConfig();
	}
}, Va = class extends za {
	constructor(e) {
		super(e);
	}
	get backingAudioTrack() {
		return this.internalTrack.backingTrack;
	}
	getType() {
		return "audio";
	}
	getCodec() {
		return wt(this.internalTrack.fullCodecString);
	}
	getNumberOfChannels() {
		return this.internalTrack.info.numberOfChannels === null ? this.delegate(() => this.backingAudioTrack.getNumberOfChannels()) : this.internalTrack.info.numberOfChannels;
	}
	getSampleRate() {
		return this.delegate(() => this.backingAudioTrack.getSampleRate());
	}
	getMetadataCodecParameterString() {
		return this.backingAudioTrack ? null : this.internalTrack.fullCodecString;
	}
	async getDecoderConfig() {
		return await this.hydrate(), this.backingAudioTrack.getDecoderConfig();
	}
}, Ha = (e) => {
	let t = e.get("default");
	if (t === null) return !1;
	let n = t.toUpperCase();
	if (n === "YES") return !0;
	if (n === "NO") return !1;
	throw Error(`Invalid M3U8 file; #EXT-X-MEDIA DEFAULT attribute must be YES or NO, got "${t}".`);
}, Ua = (e) => {
	let t = e.get("autoselect");
	if (t === null) return !1;
	let n = t.toUpperCase();
	if (n === "YES") return !0;
	if (n === "NO") return !1;
	throw Error(`Invalid M3U8 file; #EXT-X-MEDIA AUTOSELECT attribute must be YES or NO, got "${t}".`);
}, Wa = (e) => e === null ? "und" : e.split("-")[0] || "und", Ga = class {
	constructor() {
		this._isIsobmff = !1;
	}
}, Ka = class extends Ga {
	constructor() {
		super(...arguments), this._isIsobmff = !0;
	}
	async _getMajorBrand(e) {
		let t = e._reader.requestSlice(0, 12);
		if (t instanceof Promise && (t = await t), !t) return null;
		t.skip(4);
		let n = K(t, 4);
		return n !== "ftyp" && n !== "styp" ? null : K(t, 4);
	}
	_createDemuxer(e) {
		return new hr(e);
	}
}, qa = class extends Ka {
	async _canReadInput(e) {
		let t = await this._getMajorBrand(e);
		if (t !== null) return t !== "qt  ";
		let n = e._reader.requestSlice(4, 4);
		if (n instanceof Promise && (n = await n), !n) return !1;
		let r = K(n, 4);
		return r === "moof" || r === "sidx";
	}
	get name() {
		return "MP4";
	}
	get mimeType() {
		return "video/mp4";
	}
}, Ja = class extends Ka {
	async _canReadInput(e) {
		return await this._getMajorBrand(e) === "qt  ";
	}
	get name() {
		return "QuickTime File Format";
	}
	get mimeType() {
		return "video/quicktime";
	}
}, Ya = class extends Ga {
	async isSupportedEBMLOfDocType(e, t) {
		let n = e._reader.requestSlice(0, 16);
		if (n instanceof Promise && (n = await n), !n) return !1;
		let r = Wr(n);
		if (r === null || r < 1 || r > 8 || V(n, r) !== B.EBML) return !1;
		let i = Jr(n);
		if (typeof i != "number") return !1;
		let a = e._reader.requestSlice(n.filePos, i);
		if (a instanceof Promise && (a = await a), !a) return !1;
		let o = n.filePos;
		for (; a.filePos <= o + i - 2;) {
			let e = Yr(a);
			if (!e) break;
			let { id: n, size: r } = e, i = a.filePos;
			if (r === void 0) return !1;
			switch (n) {
				case B.EBMLVersion:
					if (V(a, r) !== 1) return !1;
					break;
				case B.EBMLReadVersion:
					if (V(a, r) !== 1) return !1;
					break;
				case B.DocType:
					if (Xr(a, r) !== t) return !1;
					break;
				case B.DocTypeVersion:
					if (V(a, r) > 4) return !1;
					break;
			}
			a.filePos = i + r;
		}
		return !0;
	}
	_canReadInput(e) {
		return this.isSupportedEBMLOfDocType(e, "matroska");
	}
	_createDemuxer(e) {
		return new li(e);
	}
	get name() {
		return "Matroska";
	}
	get mimeType() {
		return "video/x-matroska";
	}
}, Xa = class extends Ya {
	_canReadInput(e) {
		return this.isSupportedEBMLOfDocType(e, "webm");
	}
	get name() {
		return "WebM";
	}
	get mimeType() {
		return "video/webm";
	}
}, Za = class extends Ga {
	async _canReadInput(e) {
		let t = 0;
		for (;;) {
			let n = e._reader.requestSlice(t, 10);
			if (n instanceof Promise && (n = await n), !n) break;
			let r = dc(n);
			if (!r) break;
			t = n.filePos + r.size;
		}
		let n = await pi(e._reader, t, t + 4096);
		if (!n) return !1;
		let r = n.header, i = Bt(r.mpegVersionId, r.channel), a = e._reader.requestSlice(n.startPos + i, 4);
		if (a instanceof Promise && (a = await a), !a) return !1;
		let o = G(a);
		if (o === 1483304551 || o === 1231971951) return !0;
		t = n.startPos + n.header.totalSize;
		let s = await pi(e._reader, t, t + 4);
		if (!s) return !1;
		let c = s.header;
		return !(r.channel !== c.channel || r.sampleRate !== c.sampleRate);
	}
	_createDemuxer(e) {
		return new mi(e);
	}
	get name() {
		return "MP3";
	}
	get mimeType() {
		return "audio/mpeg";
	}
}, Qa = class extends Ga {
	async _canReadInput(e) {
		let t = e._reader.requestSlice(0, 12);
		if (t instanceof Promise && (t = await t), !t) return !1;
		let n = K(t, 4);
		return n !== "RIFF" && n !== "RIFX" && n !== "RF64" ? !1 : (t.skip(4), K(t, 4) === "WAVE");
	}
	_createDemuxer(e) {
		return new Ai(e);
	}
	get name() {
		return "WAVE";
	}
	get mimeType() {
		return "audio/wav";
	}
}, $a = class extends Ga {
	async _canReadInput(e) {
		let t = e._reader.requestSlice(0, 4);
		return t instanceof Promise && (t = await t), t ? K(t, 4) === "OggS" : !1;
	}
	_createDemuxer(e) {
		return new Ti(e);
	}
	get name() {
		return "Ogg";
	}
	get mimeType() {
		return "application/ogg";
	}
}, eo = class extends Ga {
	async _canReadInput(e) {
		let t = 0;
		for (;;) {
			let n = e._reader.requestSlice(t, 10);
			if (n instanceof Promise && (n = await n), !n) break;
			let r = dc(n);
			if (!r) break;
			t = n.filePos + r.size;
		}
		let n = e._reader.requestSlice(t, 4);
		return n instanceof Promise && (n = await n), n ? K(n, 4) === "fLaC" : !1;
	}
	get name() {
		return "FLAC";
	}
	get mimeType() {
		return "audio/flac";
	}
	_createDemuxer(e) {
		return new Ui(e);
	}
}, to = class extends Ga {
	async _canReadInput(e) {
		let t = 0;
		for (;;) {
			let n = e._reader.requestSlice(t, 10);
			if (n instanceof Promise && (n = await n), !n) break;
			let r = dc(n);
			if (!r) break;
			t = n.filePos + r.size;
		}
		let n = e._reader.requestSliceRange(t, 7, 9);
		if (n instanceof Promise && (n = await n), !n) return !1;
		let r = Ni(n);
		if (!r || (t += r.frameLength, n = e._reader.requestSliceRange(t, 7, 9), n instanceof Promise && (n = await n), !n)) return !1;
		let i = Ni(n);
		return i ? r.objectType === i.objectType && r.samplingFrequencyIndex === i.samplingFrequencyIndex && r.channelConfiguration === i.channelConfiguration : !1;
	}
	_createDemuxer(e) {
		return new Fi(e);
	}
	get name() {
		return "ADTS";
	}
	get mimeType() {
		return "audio/aac";
	}
}, no = class extends Ga {
	async _canReadInput(e) {
		let t = e._reader.requestSlice(0, 205);
		if (t instanceof Promise && (t = await t), !t) return !1;
		let n = U(t, 205);
		return n[0] === 71 && n[188] === 71 || n[0] === 71 && n[204] === 71 ? !0 : n[4] === 71 && n[196] === 71;
	}
	_createDemuxer(e) {
		return new Yi(e);
	}
	get name() {
		return "MPEG Transport Stream";
	}
	get mimeType() {
		return "video/MP2T";
	}
}, ro = class extends Ga {
	async _canReadInput(e) {
		let t = e._reader.requestSlice(0, 7);
		if (t instanceof Promise && (t = await t), !t || K(t, 7) !== "#EXTM3U") return !1;
		if (!(e._rootSource instanceof wa)) throw TypeError("HLS inputs require `InputOptions.source` to be a PathedSource or a ref to one.");
		return e._rootSource._usedForHls = !0, !0;
	}
	_createDemuxer(e) {
		return new Ra(e);
	}
	get name() {
		return "HTTP Live Streaming (HLS)";
	}
	get mimeType() {
		return ia;
	}
}, io = [
	/* @__PURE__ */ new ro(),
	/* @__PURE__ */ new qa(),
	/* @__PURE__ */ new Ja(),
	/* @__PURE__ */ new Ya(),
	/* @__PURE__ */ new Xa(),
	/* @__PURE__ */ new Qa(),
	/* @__PURE__ */ new $a(),
	/* @__PURE__ */ new eo(),
	/* @__PURE__ */ new Za(),
	/* @__PURE__ */ new to(),
	/* @__PURE__ */ new no()
], ao = (e, t) => {
	if (!e || typeof e != "object") throw TypeError(`${t}, when provided, must be an object.`);
	if (e.isobmff !== void 0) {
		if (!e.isobmff || typeof e.isobmff != "object") throw TypeError(`${t}.isobmff, when provided, must be an object.`);
		if (e.isobmff.resolveKeyId !== void 0 && typeof e.isobmff.resolveKeyId != "function") throw TypeError(`${t}.isobmff.resolveKeyId, when provided, must be a function.`);
	}
	if (e.hls !== void 0) {
		if (!e.hls || typeof e.hls != "object") throw TypeError(`${t}.hls, when provided, must be an object.`);
		if (e.hls.offsetTimestampsByDateTime !== void 0 && typeof e.hls.offsetTimestampsByDateTime != "boolean") throw TypeError(`${t}.hls.offsetTimestampsByDateTime, when provided, must be a boolean.`);
	}
}, oo = function(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: r,
			async: n
		});
	} else n && e.stack.push({ async: !0 });
	return t;
}, so = (function(e) {
	return function(t) {
		function n(n) {
			t.error = t.hasError ? new e(n, t.error, "An error was suppressed during disposal.") : n, t.hasError = !0;
		}
		var r, i = 0;
		function a() {
			for (; r = t.stack.pop();) try {
				if (!r.async && i === 1) return i = 0, t.stack.push(r), Promise.resolve().then(a);
				if (r.dispose) {
					var e = r.dispose.call(r.value);
					if (r.async) return i |= 2, Promise.resolve(e).then(a, function(e) {
						return n(e), a();
					});
				} else i |= 1;
			} catch (e) {
				n(e);
			}
			if (i === 1) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
			if (t.hasError) throw t.error;
		}
		return a();
	};
})(typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
});
ze();
var co = -Infinity, lo = -Infinity, uo = null;
typeof FinalizationRegistry < "u" && (uo = new FinalizationRegistry((e) => {
	let t = performance.now();
	e.type === "video" ? (t - co >= 1e3 && (i._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), co = t), typeof VideoFrame < "u" && e.data instanceof VideoFrame && e.data.close()) : (t - lo >= 1e3 && (i._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), lo = t), typeof AudioData < "u" && e.data instanceof AudioData && e.data.close());
}));
var fo = class {
	constructor() {
		this._referenceCount = 0, this._lastAllocationBuffer = null;
	}
}, po = [
	"I420",
	"I420P10",
	"I420P12",
	"I420A",
	"I420AP10",
	"I420AP12",
	"I422",
	"I422P10",
	"I422P12",
	"I422A",
	"I422AP10",
	"I422AP12",
	"I444",
	"I444P10",
	"I444P12",
	"I444A",
	"I444AP10",
	"I444AP12",
	"NV12",
	"RGBA",
	"RGBX",
	"BGRA",
	"BGRX"
], mo = new Set(po), ho = class e {
	get codedWidth() {
		return this.visibleRect.width;
	}
	get codedHeight() {
		return this.visibleRect.height;
	}
	get displayWidth() {
		return this.rotation % 180 == 0 ? this.squarePixelWidth : this.squarePixelHeight;
	}
	get displayHeight() {
		return this.rotation % 180 == 0 ? this.squarePixelHeight : this.squarePixelWidth;
	}
	get microsecondTimestamp() {
		return Math.trunc(xe * this.timestamp);
	}
	get microsecondDuration() {
		return Math.trunc(xe * this.duration);
	}
	get hasAlpha() {
		return this.format && this.format.includes("A");
	}
	constructor(t, n) {
		if (this._closed = !1, t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer || ArrayBuffer.isView(t)) {
			if (!n || typeof n != "object") throw TypeError("init must be an object.");
			if (n.format === void 0 || !mo.has(n.format)) throw TypeError("init.format must be one of: " + po.join(", "));
			if (!Number.isInteger(n.codedWidth) || n.codedWidth <= 0) throw TypeError("init.codedWidth must be a positive integer.");
			if (!Number.isInteger(n.codedHeight) || n.codedHeight <= 0) throw TypeError("init.codedHeight must be a positive integer.");
			if (n.rotation !== void 0 && ![
				0,
				90,
				180,
				270
			].includes(n.rotation)) throw TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
			if (!Number.isFinite(n.timestamp)) throw TypeError("init.timestamp must be a number.");
			if (n.duration !== void 0 && (!Number.isFinite(n.duration) || n.duration < 0)) throw TypeError("init.duration, when provided, must be a non-negative number.");
			if (n.layout !== void 0) {
				if (!Array.isArray(n.layout)) throw TypeError("init.layout, when provided, must be an array.");
				for (let e of n.layout) {
					if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("Each entry in init.layout must be an object.");
					if (!Number.isInteger(e.offset) || e.offset < 0) throw TypeError("plane.offset must be a non-negative integer.");
					if (!Number.isInteger(e.stride) || e.stride < 0) throw TypeError("plane.stride must be a non-negative integer.");
				}
			}
			if (n.visibleRect !== void 0 && Ge(n.visibleRect, "init.visibleRect"), n.displayWidth !== void 0 && (!Number.isInteger(n.displayWidth) || n.displayWidth <= 0)) throw TypeError("init.displayWidth, when provided, must be a positive integer.");
			if (n.displayHeight !== void 0 && (!Number.isInteger(n.displayHeight) || n.displayHeight <= 0)) throw TypeError("init.displayHeight, when provided, must be a positive integer.");
			if (n.displayWidth !== void 0 != (n.displayHeight !== void 0)) throw TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
			this._data = n._doNotCopy ? f(t) : f(t).slice(), this._layout = n.layout ?? To(n.format, n.codedWidth, n.codedHeight), this.format = n.format, this.rotation = n.rotation ?? 0, this.timestamp = n.timestamp, this.duration = n.duration ?? 0;
			let e = n.colorSpace ?? null;
			e === null && (e = this.format === "RGBA" || this.format === "RGBX" || this.format === "BGRA" || this.format === "BGRX" ? {
				primaries: "bt709",
				transfer: "iec61966-2-1",
				matrix: "rgb",
				fullRange: !0
			} : {
				primaries: "bt709",
				transfer: "bt709",
				matrix: "bt709",
				fullRange: !1
			}), this.colorSpace = new bo(e), this.visibleRect = {
				left: n.visibleRect?.left ?? 0,
				top: n.visibleRect?.top ?? 0,
				width: n.visibleRect?.width ?? n.codedWidth,
				height: n.visibleRect?.height ?? n.codedHeight
			}, n.displayWidth === void 0 ? (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height) : (this.squarePixelWidth = this.rotation % 180 == 0 ? n.displayWidth : n.displayHeight, this.squarePixelHeight = this.rotation % 180 == 0 ? n.displayHeight : n.displayWidth);
		} else if (typeof VideoFrame < "u" && t instanceof VideoFrame) {
			if (n?.rotation !== void 0 && ![
				0,
				90,
				180,
				270
			].includes(n.rotation)) throw TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
			if (n?.timestamp !== void 0 && !Number.isFinite(n?.timestamp)) throw TypeError("init.timestamp, when provided, must be a number.");
			if (n?.duration !== void 0 && (!Number.isFinite(n.duration) || n.duration < 0)) throw TypeError("init.duration, when provided, must be a non-negative number.");
			n?.visibleRect !== void 0 && Ge(n.visibleRect, "init.visibleRect"), this._data = t, this._layout = null, this.format = t.format, this.visibleRect = {
				left: t.visibleRect?.x ?? 0,
				top: t.visibleRect?.y ?? 0,
				width: t.visibleRect?.width ?? t.codedWidth,
				height: t.visibleRect?.height ?? t.codedHeight
			}, this.rotation = n?.rotation ?? 0, this.squarePixelWidth = t.displayWidth, this.squarePixelHeight = t.displayHeight, this.timestamp = n?.timestamp ?? t.timestamp / 1e6, this.duration = n?.duration ?? (t.duration ?? 0) / 1e6, this.colorSpace = new bo(t.colorSpace);
		} else if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof SVGImageElement < "u" && t instanceof SVGImageElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap || typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas) {
			if (!n || typeof n != "object") throw TypeError("init must be an object.");
			if (n.rotation !== void 0 && ![
				0,
				90,
				180,
				270
			].includes(n.rotation)) throw TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
			if (!Number.isFinite(n.timestamp)) throw TypeError("init.timestamp must be a number.");
			if (n.duration !== void 0 && (!Number.isFinite(n.duration) || n.duration < 0)) throw TypeError("init.duration, when provided, must be a non-negative number.");
			if (typeof VideoFrame < "u") return new e(new VideoFrame(t, {
				timestamp: Math.trunc(n.timestamp * xe),
				duration: Math.trunc((n.duration ?? 0) * xe) || void 0
			}), n);
			let r = 0, i = 0;
			if ("naturalWidth" in t ? (r = t.naturalWidth, i = t.naturalHeight) : "videoWidth" in t ? (r = t.videoWidth, i = t.videoHeight) : "width" in t && (r = Number(t.width), i = Number(t.height)), !r || !i) throw TypeError("Could not determine dimensions.");
			let a = new OffscreenCanvas(r, i), o = a.getContext("2d", {
				alpha: De(),
				willReadFrequently: !0
			});
			if (!o) throw Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
			o.drawImage(t, 0, 0), this._data = a, this._layout = null, this.format = "RGBX", this.visibleRect = {
				left: 0,
				top: 0,
				width: r,
				height: i
			}, this.squarePixelWidth = r, this.squarePixelHeight = i, this.rotation = n.rotation ?? 0, this.timestamp = n.timestamp, this.duration = n.duration ?? 0, this.colorSpace = new bo({
				matrix: "rgb",
				primaries: "bt709",
				transfer: "iec61966-2-1",
				fullRange: !0
			});
		} else if (t instanceof fo) {
			if (!n || typeof n != "object") throw TypeError("init must be an object.");
			if (n.rotation !== void 0 && ![
				0,
				90,
				180,
				270
			].includes(n.rotation)) throw TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
			if (!Number.isFinite(n.timestamp)) throw TypeError("init.timestamp must be a number.");
			if (n.duration !== void 0 && (!Number.isFinite(n.duration) || n.duration < 0)) throw TypeError("init.duration, when provided, must be a non-negative number.");
			if (this._data = t, t._referenceCount++, this.format = t.getFormat(), this.format !== null && !po.includes(this.format)) throw TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
			if (this.visibleRect = {
				left: 0,
				top: 0,
				width: t.getCodedWidth(),
				height: t.getCodedHeight()
			}, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw TypeError("getCodedWidth() must return a positive integer.");
			if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw TypeError("getCodedHeight() must return a positive integer.");
			if (this.squarePixelWidth = t.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw TypeError("getSquarePixelWidth() must return a positive integer.");
			if (this.squarePixelHeight = t.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw TypeError("getSquarePixelHeight() must return a positive integer.");
			this.rotation = n.rotation ?? 0, this.timestamp = n.timestamp, this.duration = n.duration ?? 0, this.colorSpace = t.getColorSpace();
		} else throw TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
		this.encodeOptions = n?.encodeOptions ?? {}, this.pixelAspectRatio = We({
			num: this.squarePixelWidth * this.codedHeight,
			den: this.squarePixelHeight * this.codedWidth
		}), uo?.register(this, {
			type: "video",
			data: this._data
		}, this);
	}
	clone() {
		if (this._closed) throw Error("VideoSample is closed.");
		return a(this._data !== null), this._data instanceof fo ? new e(this._data, {
			timestamp: this.timestamp,
			duration: this.duration,
			rotation: this.rotation,
			encodeOptions: this.encodeOptions
		}) : xo(this._data) ? new e(this._data.clone(), {
			timestamp: this.timestamp,
			duration: this.duration,
			rotation: this.rotation,
			encodeOptions: this.encodeOptions
		}) : this._data instanceof Uint8Array ? (a(this._layout), new e(this._data, {
			format: this.format,
			layout: this._layout,
			codedWidth: this.codedWidth,
			codedHeight: this.codedHeight,
			timestamp: this.timestamp,
			duration: this.duration,
			colorSpace: this.colorSpace,
			rotation: this.rotation,
			visibleRect: this.visibleRect,
			displayWidth: this.displayWidth,
			displayHeight: this.displayHeight,
			encodeOptions: this.encodeOptions,
			_doNotCopy: !0
		})) : new e(this._data, {
			format: this.format,
			codedWidth: this.codedWidth,
			codedHeight: this.codedHeight,
			timestamp: this.timestamp,
			duration: this.duration,
			colorSpace: this.colorSpace,
			rotation: this.rotation,
			visibleRect: this.visibleRect,
			displayWidth: this.displayWidth,
			displayHeight: this.displayHeight,
			encodeOptions: this.encodeOptions
		});
	}
	close() {
		this._closed ||= (uo?.unregister(this), this._data instanceof fo ? (this._data._referenceCount--, this._data._referenceCount === 0 && this._data.close()) : xo(this._data) ? this._data.close() : this._data = null, !0);
	}
	allocationSize(e = {}) {
		if (wo(e), this._closed) throw Error("VideoSample is closed.");
		if ((e.format ?? this.format) == null) throw Error("Cannot get allocation size when format is null.");
		return xo(this._data) ? this._data.allocationSize(e) : Do(this, e).allocationSize;
	}
	async copyTo(t, n = {}) {
		if (!ee(t)) throw TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
		if (wo(n), this._closed) throw Error("VideoSample is closed.");
		if ((n.format ?? this.format) == null) throw Error("Cannot copy video sample data when format is null.");
		if (a(this._data !== null), xo(this._data)) return this._data.copyTo(t, n);
		if (n.format && ![
			"RGBA",
			"RGBX",
			"BGRA",
			"BGRX"
		].includes(this.format) && [
			"RGBA",
			"RGBX",
			"BGRA",
			"BGRX"
		].includes(n.format)) if (this._data instanceof fo) {
			let r = {
				stack: [],
				error: void 0,
				hasError: !1
			};
			try {
				let i = oo(r, await this._data.toRgbSample({
					timestamp: this.timestamp,
					duration: this.duration,
					rotation: this.rotation
				}, n.colorSpace ?? "srgb"), !1);
				if (!(i instanceof e)) throw TypeError("toRgbSample() must return a VideoSample.");
				if (![
					"RGBA",
					"RGBX",
					"BGRA",
					"BGRX"
				].includes(i.format)) throw Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${i.format}' instead.`);
				return await i.copyTo(t, n);
			} catch (e) {
				r.error = e, r.hasError = !0;
			} finally {
				so(r);
			}
		} else {
			if (typeof VideoFrame > "u") throw Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
			let e = this.toVideoFrame(), r = await e.copyTo(t, n);
			return e.close(), r;
		}
		let r = Do(this, n);
		a(this.format);
		let i = f(t);
		if (i.byteLength < r.allocationSize) throw TypeError(`Destination buffer too small. Required: ${r.allocationSize}, Available: ${i.byteLength}`);
		let o = Eo(this.format), s;
		if (this._data instanceof fo) {
			let e = this._data.getDataPlanes();
			if (e instanceof Promise && (e = await e), !Array.isArray(e) || e.some((e) => !(e.data instanceof Uint8Array) || !Number.isInteger(e.stride) || e.stride < 0)) throw TypeError("getDataPlanes() must return an array of objects with a Uint8Array \"data\" property and a non-negative integer \"stride\" property.");
			s = e;
		} else if (this._data instanceof Uint8Array) a(this._layout), a(this._layout.length === o.length), s = this._layout.map((e, t) => {
			let n = Math.ceil(this.codedHeight / o[t].heightDivisor);
			return {
				data: this._data.subarray(e.offset, e.offset + e.stride * n),
				stride: e.stride
			};
		});
		else {
			let e = this._data.getContext("2d");
			a(e), s = [{
				data: f(e.getImageData(0, 0, this.codedWidth, this.codedHeight).data),
				stride: 4 * this.codedWidth
			}];
		}
		let c = [], l = o.length;
		for (let e = 0; e < l; e++) {
			let t = r.computedLayouts[e], n = s[e].stride, a = s[e].data, o = t.sourceTop * n;
			o += t.sourceLeftBytes;
			let l = t.destinationOffset, u = t.sourceWidthBytes, d = {
				offset: l,
				stride: t.destinationStride
			};
			for (let e = 0; e < t.sourceHeight; e++) {
				if (o + u > a.byteLength) throw Error("Source buffer OOB read.");
				if (l + u > i.byteLength) throw Error("Destination buffer OOB write.");
				let e = a.subarray(o, o + u);
				i.set(e, l), o += n, l += t.destinationStride;
			}
			c.push(d);
		}
		if (n.format !== void 0) {
			let e = this.format.startsWith("RGB") !== n.format.startsWith("RGB"), t = this.format.includes("X") && n.format.includes("A");
			if (e || t) for (let n = 0; n < r.allocationSize; n += 4) {
				if (e) {
					let e = i[n];
					i[n] = i[n + 2], i[n + 2] = e;
				}
				t && (i[n + 3] = 255);
			}
		}
		return c;
	}
	toVideoFrame() {
		if (this._closed) throw Error("VideoSample is closed.");
		if (a(this._data !== null), this._data instanceof fo) {
			if (this.format === null) throw Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
			let e = this._data.getDataPlanes();
			if (e instanceof Promise) throw Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
			let t = e.reduce((e, t) => e + t.data.byteLength, 0), n = new Uint8Array(t), r = 0, i = [];
			for (let t of e) n.set(t.data, r), i.push(r), r += t.data.byteLength;
			return new VideoFrame(n, {
				format: this.format,
				layout: e.map((e, t) => ({
					offset: i[t],
					stride: e.stride
				})),
				codedWidth: this.codedWidth,
				codedHeight: this.codedHeight,
				timestamp: this.microsecondTimestamp,
				duration: this.microsecondDuration,
				colorSpace: this.colorSpace,
				displayWidth: this.squarePixelWidth,
				displayHeight: this.squarePixelHeight
			});
		} else if (xo(this._data)) return new VideoFrame(this._data, {
			timestamp: this.microsecondTimestamp,
			duration: this.microsecondDuration || void 0
		});
		else if (this._data instanceof Uint8Array) return new VideoFrame(this._data, {
			format: this.format,
			codedWidth: this.codedWidth,
			codedHeight: this.codedHeight,
			timestamp: this.microsecondTimestamp,
			duration: this.microsecondDuration || void 0,
			colorSpace: this.colorSpace,
			displayWidth: this.squarePixelWidth,
			displayHeight: this.squarePixelHeight
		});
		else return new VideoFrame(this._data, {
			timestamp: this.microsecondTimestamp,
			duration: this.microsecondDuration || void 0
		});
	}
	draw(e, t, n, r, i, a, o, s, c) {
		let l = 0, u = 0, d = this.displayWidth, f = this.displayHeight, p = 0, m = 0, h = this.displayWidth, g = this.displayHeight;
		if (a === void 0 ? (p = t, m = n, r !== void 0 && (h = r, g = i)) : (l = t, u = n, d = r, f = i, p = a, m = o, s === void 0 ? (h = d, g = f) : (h = s, g = c)), !(typeof CanvasRenderingContext2D < "u" && e instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D < "u" && e instanceof OffscreenCanvasRenderingContext2D)) throw TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
		if (!Number.isFinite(l)) throw TypeError("sx must be a number.");
		if (!Number.isFinite(u)) throw TypeError("sy must be a number.");
		if (!Number.isFinite(d) || d < 0) throw TypeError("sWidth must be a non-negative number.");
		if (!Number.isFinite(f) || f < 0) throw TypeError("sHeight must be a non-negative number.");
		if (!Number.isFinite(p)) throw TypeError("dx must be a number.");
		if (!Number.isFinite(m)) throw TypeError("dy must be a number.");
		if (!Number.isFinite(h) || h < 0) throw TypeError("dWidth must be a non-negative number.");
		if (!Number.isFinite(g) || g < 0) throw TypeError("dHeight must be a non-negative number.");
		if (this._closed) throw Error("VideoSample is closed.");
		({sx: l, sy: u, sWidth: d, sHeight: f} = this._rotateSourceRegion(l, u, d, f, this.rotation));
		let _ = this.toCanvasImageSource();
		e.save();
		let v = p + h / 2, y = m + g / 2;
		e.translate(v, y), e.rotate(this.rotation * Math.PI / 180);
		let b = this.rotation % 180 == 0 ? 1 : h / g;
		e.scale(1 / b, b), e.drawImage(_, l, u, d, f, -h / 2, -g / 2, h, g), e.restore();
	}
	drawWithFit(e, t) {
		if (!(typeof CanvasRenderingContext2D < "u" && e instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D < "u" && e instanceof OffscreenCanvasRenderingContext2D)) throw TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
		if (!t || typeof t != "object") throw TypeError("options must be an object.");
		if (![
			"fill",
			"contain",
			"cover"
		].includes(t.fit)) throw TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
		if (t.rotation !== void 0 && ![
			0,
			90,
			180,
			270
		].includes(t.rotation)) throw TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
		t.crop !== void 0 && Co(t.crop, "options.");
		let n = e.canvas.width, r = e.canvas.height, i = t.rotation ?? this.rotation, [a, o] = i % 180 == 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth], s = t.crop;
		s &&= So(s, a, o);
		let c, l, u, d, { sx: f, sy: p, sWidth: m, sHeight: h } = this._rotateSourceRegion(t.crop?.left ?? 0, t.crop?.top ?? 0, t.crop?.width ?? a, t.crop?.height ?? o, i);
		if (t.fit === "fill") c = 0, l = 0, u = n, d = r;
		else {
			let [e, i] = t.crop ? [t.crop.width, t.crop.height] : [a, o], s = t.fit === "contain" ? Math.min(n / e, r / i) : Math.max(n / e, r / i);
			u = e * s, d = i * s, c = (n - u) / 2, l = (r - d) / 2;
		}
		e.save();
		let g = i % 180 == 0 ? 1 : u / d;
		e.translate(n / 2, r / 2), e.rotate(i * Math.PI / 180), e.scale(1 / g, g), e.translate(-n / 2, -r / 2), e.drawImage(this.toCanvasImageSource(), f, p, m, h, c, l, u, d), e.restore();
	}
	_rotateSourceRegion(e, t, n, r, i) {
		return i === 90 ? [e, t, n, r] = [
			t,
			this.squarePixelHeight - e - n,
			r,
			n
		] : i === 180 ? [e, t] = [this.squarePixelWidth - e - n, this.squarePixelHeight - t - r] : i === 270 && ([e, t, n, r] = [
			this.squarePixelWidth - t - r,
			e,
			r,
			n
		]), {
			sx: e,
			sy: t,
			sWidth: n,
			sHeight: r
		};
	}
	toCanvasImageSource() {
		if (this._closed) throw Error("VideoSample is closed.");
		if (a(this._data !== null), this._data instanceof fo || this._data instanceof Uint8Array) {
			let e = this.toVideoFrame();
			return queueMicrotask(() => e.close()), e;
		} else return this._data;
	}
	async transform(t) {
		if (!t || typeof t != "object") throw TypeError("options must be an object.");
		if (t.width !== void 0 && (!Number.isInteger(t.width) || t.width <= 0)) throw TypeError("options.width, when provided, must be a positive integer.");
		if (t.height !== void 0 && (!Number.isInteger(t.height) || t.height <= 0)) throw TypeError("options.height, when provided, must be a positive integer.");
		if (t.roundDimensionsTo !== void 0 && (!Number.isInteger(t.roundDimensionsTo) || t.roundDimensionsTo <= 0)) throw TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
		if (t.fit !== void 0 && ![
			"fill",
			"contain",
			"cover"
		].includes(t.fit)) throw TypeError("options.fit, when provided, must be one of \"fill\", \"contain\", or \"cover\".");
		if (t.width !== void 0 && t.height !== void 0 && t.fit === void 0) throw TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
		if (t.rotate !== void 0 && ![
			0,
			90,
			180,
			270
		].includes(t.rotate)) throw TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
		if (t.crop !== void 0 && Co(t.crop, "options."), t.alpha !== void 0 && !["keep", "discard"].includes(t.alpha)) throw TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
		let n = o(this.rotation + (t.rotate ?? 0)), [r, i] = n % 180 == 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth], a = t.crop;
		a &&= So(a, r, i);
		let s = a ? a.width : r, c = a ? a.height : i, l = s / c, u, d;
		t.width !== void 0 && t.height === void 0 ? (u = t.width, d = u / l) : t.width === void 0 && t.height !== void 0 ? (d = t.height, u = d * l) : t.width !== void 0 && t.height !== void 0 ? (u = t.width, d = t.height) : (u = s, d = c), u = me(u, t.roundDimensionsTo ?? 1), d = me(d, t.roundDimensionsTo ?? 1);
		let f = {
			width: u,
			height: d,
			fit: t.fit ?? "fill",
			rotation: n,
			crop: a ?? {
				left: 0,
				top: 0,
				width: r,
				height: i
			},
			alpha: t.alpha ?? "keep"
		};
		for (let e of go) {
			let t = e(this, f);
			if (t instanceof Promise && (t = await t), t !== null) return t;
		}
		let p = null, m = !1;
		for (let e of vo) if (e.canvas.width === f.width && e.canvas.height === f.height) {
			p = e.canvas, e.age = yo++;
			break;
		}
		if (p === null) {
			if (typeof OffscreenCanvas < "u") p = new OffscreenCanvas(f.width, f.height);
			else {
				if (typeof window > "u" || typeof document > "u") throw Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
				p = document.createElement("canvas"), p.width = f.width, p.height = f.height;
			}
			m = !0, vo.length >= _o && vo.splice(Ue(vo, (e) => e.age), 1), vo.push({
				canvas: p,
				age: yo++
			});
		}
		let h = p.getContext("2d", { alpha: !0 });
		if (!h) throw Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
		return f.alpha === "discard" ? (h.fillStyle = "black", h.fillRect(0, 0, f.width, f.height)) : m || h.clearRect(0, 0, f.width, f.height), this.drawWithFit(h, {
			fit: f.fit,
			rotation: f.rotation,
			crop: f.crop
		}), new e(p, {
			timestamp: this.timestamp,
			duration: this.duration,
			rotation: 0
		});
	}
	setRotation(e) {
		if (![
			0,
			90,
			180,
			270
		].includes(e)) throw TypeError("newRotation must be 0, 90, 180, or 270.");
		this.rotation = e;
	}
	setTimestamp(e) {
		if (!Number.isFinite(e)) throw TypeError("newTimestamp must be a number.");
		this.timestamp = e;
	}
	setDuration(e) {
		if (!Number.isFinite(e) || e < 0) throw TypeError("newDuration must be a non-negative number.");
		this.duration = e;
	}
	setEncodeOptions(e) {
		if (!e || typeof e != "object") throw TypeError("newEncodeOptions must be an object.");
		this.encodeOptions = e;
	}
	[Symbol.dispose]() {
		this.close();
	}
}, go = [], _o = 3, vo = [], yo = 0, bo = class {
	constructor(e) {
		if (e !== void 0) {
			if (!e || typeof e != "object") throw TypeError("init.colorSpace, when provided, must be an object.");
			let t = Object.keys(v);
			if (e.primaries != null && !t.includes(e.primaries)) throw TypeError(`init.colorSpace.primaries, when provided, must be one of ${t.join(", ")}.`);
			let n = Object.keys(b);
			if (e.transfer != null && !n.includes(e.transfer)) throw TypeError(`init.colorSpace.transfer, when provided, must be one of ${n.join(", ")}.`);
			let r = Object.keys(S);
			if (e.matrix != null && !r.includes(e.matrix)) throw TypeError(`init.colorSpace.matrix, when provided, must be one of ${r.join(", ")}.`);
			if (e.fullRange != null && typeof e.fullRange != "boolean") throw TypeError("init.colorSpace.fullRange, when provided, must be a boolean.");
		}
		this.primaries = e?.primaries ?? null, this.transfer = e?.transfer ?? null, this.matrix = e?.matrix ?? null, this.fullRange = e?.fullRange ?? null;
	}
	toJSON() {
		return {
			primaries: this.primaries,
			transfer: this.transfer,
			matrix: this.matrix,
			fullRange: this.fullRange
		};
	}
}, xo = (e) => typeof VideoFrame < "u" && e instanceof VideoFrame, So = (e, t, n) => {
	let r = Math.min(e.left, t), i = Math.min(e.top, n), o = Math.min(e.width, t - r), s = Math.min(e.height, n - i);
	return a(o >= 0), a(s >= 0), {
		left: r,
		top: i,
		width: o,
		height: s
	};
}, Co = (e, t) => {
	if (!e || typeof e != "object") throw TypeError(t + "crop, when provided, must be an object.");
	if (!Number.isInteger(e.left) || e.left < 0) throw TypeError(t + "crop.left must be a non-negative integer.");
	if (!Number.isInteger(e.top) || e.top < 0) throw TypeError(t + "crop.top must be a non-negative integer.");
	if (!Number.isInteger(e.width) || e.width < 0) throw TypeError(t + "crop.width must be a non-negative integer.");
	if (!Number.isInteger(e.height) || e.height < 0) throw TypeError(t + "crop.height must be a non-negative integer.");
}, wo = (e) => {
	if (!e || typeof e != "object") throw TypeError("options must be an object.");
	if (e.colorSpace !== void 0 && !["display-p3", "srgb"].includes(e.colorSpace)) throw TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
	if (e.format !== void 0 && typeof e.format != "string") throw TypeError("options.format, when provided, must be a string.");
	if (e.layout !== void 0) {
		if (!Array.isArray(e.layout)) throw TypeError("options.layout, when provided, must be an array.");
		for (let t of e.layout) {
			if (!t || typeof t != "object") throw TypeError("Each entry in options.layout must be an object.");
			if (!Number.isInteger(t.offset) || t.offset < 0) throw TypeError("plane.offset must be a non-negative integer.");
			if (!Number.isInteger(t.stride) || t.stride < 0) throw TypeError("plane.stride must be a non-negative integer.");
		}
	}
	if (e.rect !== void 0) {
		if (!e.rect || typeof e.rect != "object") throw TypeError("options.rect, when provided, must be an object.");
		if (e.rect.x !== void 0 && (!Number.isInteger(e.rect.x) || e.rect.x < 0)) throw TypeError("options.rect.x, when provided, must be a non-negative integer.");
		if (e.rect.y !== void 0 && (!Number.isInteger(e.rect.y) || e.rect.y < 0)) throw TypeError("options.rect.y, when provided, must be a non-negative integer.");
		if (e.rect.width !== void 0 && (!Number.isInteger(e.rect.width) || e.rect.width < 0)) throw TypeError("options.rect.width, when provided, must be a non-negative integer.");
		if (e.rect.height !== void 0 && (!Number.isInteger(e.rect.height) || e.rect.height < 0)) throw TypeError("options.rect.height, when provided, must be a non-negative integer.");
	}
}, To = (e, t, n) => {
	let r = Eo(e), i = [], a = 0;
	for (let e of r) {
		let r = Math.ceil(t / e.widthDivisor), o = Math.ceil(n / e.heightDivisor), s = r * e.sampleBytes, c = s * o;
		i.push({
			offset: a,
			stride: s
		}), a += c;
	}
	return i;
}, Eo = (e) => {
	let t = (e, t, n, r, i) => {
		let a = [
			{
				sampleBytes: e,
				widthDivisor: 1,
				heightDivisor: 1
			},
			{
				sampleBytes: t,
				widthDivisor: n,
				heightDivisor: r
			},
			{
				sampleBytes: t,
				widthDivisor: n,
				heightDivisor: r
			}
		];
		return i && a.push({
			sampleBytes: e,
			widthDivisor: 1,
			heightDivisor: 1
		}), a;
	};
	switch (e) {
		case "I420": return t(1, 1, 2, 2, !1);
		case "I420P10":
		case "I420P12": return t(2, 2, 2, 2, !1);
		case "I420A": return t(1, 1, 2, 2, !0);
		case "I420AP10":
		case "I420AP12": return t(2, 2, 2, 2, !0);
		case "I422": return t(1, 1, 2, 1, !1);
		case "I422P10":
		case "I422P12": return t(2, 2, 2, 1, !1);
		case "I422A": return t(1, 1, 2, 1, !0);
		case "I422AP10":
		case "I422AP12": return t(2, 2, 2, 1, !0);
		case "I444": return t(1, 1, 1, 1, !1);
		case "I444P10":
		case "I444P12": return t(2, 2, 1, 1, !1);
		case "I444A": return t(1, 1, 1, 1, !0);
		case "I444AP10":
		case "I444AP12": return t(2, 2, 1, 1, !0);
		case "NV12": return [{
			sampleBytes: 1,
			widthDivisor: 1,
			heightDivisor: 1
		}, {
			sampleBytes: 2,
			widthDivisor: 2,
			heightDivisor: 2
		}];
		case "RGBA":
		case "RGBX":
		case "BGRA":
		case "BGRX": return [{
			sampleBytes: 4,
			widthDivisor: 1,
			heightDivisor: 1
		}];
		default: A(e), a(!1);
	}
}, Do = (e, t) => {
	let n = {
		left: 0,
		top: 0,
		width: e.codedWidth,
		height: e.codedHeight
	}, r = t.rect, i = Oo(n, r, e.codedWidth, e.codedHeight, e.format), a = t.layout, o;
	if (!t.format || t.format === e.format) o = e.format;
	else if ([
		"RGBA",
		"RGBX",
		"BGRA",
		"BGRX"
	].includes(t.format)) o = t.format;
	else throw Error("NotSupportedError: Invalid destination format.");
	return Ao(i, o, a);
}, Oo = (e, t, n, r, i) => {
	let a = { ...e };
	if (t !== void 0) {
		if (t.width === 0 || t.height === 0) throw TypeError("visibleRect dimensions cannot be zero.");
		if ((t.x || 0) + (t.width || 0) > n) throw TypeError("visibleRect exceeds codedWidth.");
		if ((t.y || 0) + (t.height || 0) > r) throw TypeError("visibleRect exceeds codedHeight.");
		a.x = t.x || 0, a.y = t.y || 0, a.width = t.width || 0, a.height = t.height || 0;
	}
	if (!ko(i, a)) throw TypeError("visibleRect alignment is invalid for the format.");
	return a;
}, ko = (e, t) => {
	if (e === null) return !0;
	let n = Eo(e);
	for (let e = 0; e < n.length; e++) {
		let r = n[e], i = r.widthDivisor, a = r.heightDivisor;
		if ((t.x || 0) % i !== 0 || (t.y || 0) % a !== 0) return !1;
	}
	return !0;
}, Ao = (e, t, n) => {
	let r = Eo(t), i = r.length;
	if (n !== void 0 && n.length !== i) throw TypeError(`Layout must have ${i} planes.`);
	let a = 0, o = [], s = [];
	for (let t = 0; t < i; t++) {
		let i = r[t], c = i.sampleBytes, l = i.widthDivisor, u = i.heightDivisor, d = {
			destinationOffset: 0,
			destinationStride: 0,
			sourceTop: 0,
			sourceHeight: 0,
			sourceLeftBytes: 0,
			sourceWidthBytes: 0
		};
		if (d.sourceTop = Math.ceil(Math.trunc(e.y || 0) / u), d.sourceHeight = Math.ceil(Math.trunc(e.height || 0) / u), d.sourceLeftBytes = Math.floor(Math.trunc(e.x || 0) / l) * c, d.sourceWidthBytes = Math.floor(Math.trunc(e.width || 0) / l) * c, n !== void 0) {
			let e = n[t];
			if (e.stride < d.sourceWidthBytes) throw TypeError(`Stride for plane ${t} is too small.`);
			d.destinationOffset = e.offset, d.destinationStride = e.stride;
		} else d.destinationOffset = a, d.destinationStride = d.sourceWidthBytes;
		let f = d.destinationStride * d.sourceHeight + d.destinationOffset;
		if (f > 4294967295) throw TypeError("Allocation size exceeds limit.");
		s.push(f), a = Math.max(a, f);
		for (let e = 0; e < t; e++) {
			let n = o[e];
			if (!(s[t] <= n.destinationOffset || s[e] <= d.destinationOffset)) throw TypeError("Planes overlap.");
		}
		o.push(d);
	}
	return {
		allocationSize: a,
		computedLayouts: o
	};
}, jo = /* @__PURE__ */ new Set([
	"f32",
	"f32-planar",
	"s16",
	"s16-planar",
	"s32",
	"s32-planar",
	"u8",
	"u8-planar"
]), Mo = class {
	constructor() {
		this._referenceCount = 0;
	}
}, No = class e {
	get microsecondTimestamp() {
		return Math.trunc(xe * this.timestamp);
	}
	get microsecondDuration() {
		return Math.trunc(xe * this.duration);
	}
	constructor(e) {
		if (this._closed = !1, Ro(e)) {
			if (e.format === null) throw TypeError("AudioData with null format is not supported.");
			this._data = e, this.format = e.format, this.sampleRate = e.sampleRate, this.numberOfFrames = e.numberOfFrames, this.numberOfChannels = e.numberOfChannels, this.timestamp = e.timestamp / 1e6, this.duration = e.numberOfFrames / e.sampleRate;
		} else if (e instanceof Mo) {
			if (this._data = e, e._referenceCount++, this.format = e.getFormat(), !jo.has(this.format)) throw TypeError("getFormat() must return an AudioSampleFormat.");
			if (this.sampleRate = e.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw TypeError("getSampleRate() must return a positive integer.");
			if (this.numberOfFrames = e.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw TypeError("getNumberOfFrames() must return a non-negative integer.");
			if (this.numberOfChannels = e.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw TypeError("getNumberOfChannels() must return a positive integer.");
			if (this.timestamp = e.getTimestamp(), !Number.isFinite(this.timestamp)) throw TypeError("getTimestamp() must return a finite number.");
			this.duration = this.numberOfFrames / this.sampleRate;
		} else {
			if (!e || typeof e != "object") throw TypeError("Invalid AudioDataInit: must be an object.");
			if (!jo.has(e.format)) throw TypeError("Invalid AudioDataInit: invalid format.");
			if (!Number.isFinite(e.sampleRate) || e.sampleRate <= 0) throw TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
			if (!Number.isInteger(e.numberOfChannels) || e.numberOfChannels === 0) throw TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
			if (!Number.isFinite(e?.timestamp)) throw TypeError("init.timestamp must be a number.");
			let t = e.data.byteLength / (Po(e.format) * e.numberOfChannels);
			if (!Number.isInteger(t)) throw TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
			this.format = e.format, this.sampleRate = e.sampleRate, this.numberOfFrames = t, this.numberOfChannels = e.numberOfChannels, this.timestamp = e.timestamp, this.duration = t / e.sampleRate;
			let n;
			if (e.data instanceof ArrayBuffer) n = new Uint8Array(e.data);
			else if (ArrayBuffer.isView(e.data)) n = new Uint8Array(e.data.buffer, e.data.byteOffset, e.data.byteLength);
			else throw TypeError("Invalid AudioDataInit: data is not a BufferSource.");
			let r = this.numberOfFrames * this.numberOfChannels * Po(this.format);
			if (n.byteLength < r) throw TypeError("Invalid AudioDataInit: insufficient data size.");
			this._data = n;
		}
		uo?.register(this, {
			type: "audio",
			data: this._data
		}, this);
	}
	allocationSize(e) {
		if (!e || typeof e != "object") throw TypeError("options must be an object.");
		if (!Number.isInteger(e.planeIndex) || e.planeIndex < 0) throw TypeError("planeIndex must be a non-negative integer.");
		if (e.format !== void 0 && !jo.has(e.format)) throw TypeError("Invalid format.");
		if (e.frameOffset !== void 0 && (!Number.isInteger(e.frameOffset) || e.frameOffset < 0)) throw TypeError("frameOffset must be a non-negative integer.");
		if (e.frameCount !== void 0 && (!Number.isInteger(e.frameCount) || e.frameCount < 0)) throw TypeError("frameCount must be a non-negative integer.");
		if (this._closed) throw Error("AudioSample is closed.");
		let t = e.format ?? this.format, n = e.frameOffset ?? 0;
		if (n >= this.numberOfFrames) throw RangeError("frameOffset out of range");
		let r = e.frameCount === void 0 ? this.numberOfFrames - n : e.frameCount;
		if (r > this.numberOfFrames - n) throw RangeError("frameCount out of range");
		let i = Po(t), a = Fo(t);
		if (a && e.planeIndex >= this.numberOfChannels || !a && e.planeIndex !== 0) throw RangeError("planeIndex out of range");
		return (a ? r : r * this.numberOfChannels) * i;
	}
	copyTo(e, t) {
		if (!ee(e)) throw TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
		if (!t || typeof t != "object") throw TypeError("options must be an object.");
		if (!Number.isInteger(t.planeIndex) || t.planeIndex < 0) throw TypeError("planeIndex must be a non-negative integer.");
		if (t.format !== void 0 && !jo.has(t.format)) throw TypeError("Invalid format.");
		if (t.frameOffset !== void 0 && (!Number.isInteger(t.frameOffset) || t.frameOffset < 0)) throw TypeError("frameOffset must be a non-negative integer.");
		if (t.frameCount !== void 0 && (!Number.isInteger(t.frameCount) || t.frameCount < 0)) throw TypeError("frameCount must be a non-negative integer.");
		if (this._closed) throw Error("AudioSample is closed.");
		let { format: n, frameCount: r, frameOffset: i } = t, { planeIndex: a } = t, o = this.format, s = n ?? this.format;
		if (!s) throw Error("Destination format not determined");
		let c = this.numberOfFrames, l = this.numberOfChannels, u = i ?? 0;
		if (u >= c) throw RangeError("frameOffset out of range");
		let d = r === void 0 ? c - u : r;
		if (d > c - u) throw RangeError("frameCount out of range");
		let f = Po(s), m = Fo(s);
		if (m && a >= l || !m && a !== 0) throw RangeError("planeIndex out of range");
		let h = (m ? d : d * l) * f;
		if (e.byteLength < h) throw RangeError("Destination buffer is too small");
		let g = p(e), _ = Lo(s);
		if (Ro(this._data)) Te() && l > 2 && s !== o ? Bo(this._data, g, o, s, l, a, u, d) : this._data.copyTo(e, {
			planeIndex: a,
			frameOffset: u,
			frameCount: d,
			format: s
		});
		else {
			let e = Io(o), t = Po(o), n = Fo(o), r;
			if (this._data instanceof Mo) {
				let e = (e) => {
					let r = this._data.getDataPlane(e);
					if (!(r instanceof Uint8Array)) throw TypeError("getDataPlane() must return a Uint8Array.");
					let i = c * t * (n ? 1 : l);
					if (r.byteLength !== i) throw TypeError(`Data plane ${e} has invalid size. Expected exactly ${i} bytes, got ${r.byteLength} bytes.`);
					return r;
				};
				if (n) if (m) r = e(a), a = 0;
				else {
					r = new Uint8Array(c * t * l);
					for (let n = 0; n < l; n++) {
						let i = e(n);
						r.set(i, n * c * t);
					}
				}
				else r = e(0);
			} else r = this._data;
			let i = p(r);
			for (let r = 0; r < d; r++) if (m) {
				let o = r * f, s;
				s = n ? (a * c + (r + u)) * t : ((r + u) * l + a) * t, _(g, o, e(i, s));
			} else for (let a = 0; a < l; a++) {
				let o = (r * l + a) * f, s;
				s = n ? (a * c + (r + u)) * t : ((r + u) * l + a) * t, _(g, o, e(i, s));
			}
		}
	}
	clone() {
		if (this._closed) throw Error("AudioSample is closed.");
		if (this._data instanceof Mo) {
			let t = new e(this._data);
			return t.setTimestamp(this.timestamp), t;
		} else if (Ro(this._data)) {
			let t = new e(this._data.clone());
			return t.setTimestamp(this.timestamp), t;
		} else return new e({
			format: this.format,
			sampleRate: this.sampleRate,
			numberOfFrames: this.numberOfFrames,
			numberOfChannels: this.numberOfChannels,
			timestamp: this.timestamp,
			data: this._data
		});
	}
	trim(t, n = this.numberOfFrames) {
		if (!Number.isInteger(t) || t < 0) throw TypeError("startSample must be a non-negative integer.");
		if (!Number.isInteger(n) || n < 0) throw TypeError("endSample must be a non-negative integer.");
		if (t > this.numberOfFrames) throw RangeError("startSample out of range.");
		if (n > this.numberOfFrames) throw RangeError("endSample out of range.");
		if (n < t) throw RangeError("endSample must not be less than startSample.");
		if (this._closed) throw Error("AudioSample is closed.");
		let r = n - t, i = Po(this.format), a;
		if (Fo(this.format)) {
			let e = r * i;
			if (a = new Uint8Array(e * this.numberOfChannels), r > 0) for (let n = 0; n < this.numberOfChannels; n++) this.copyTo(a.subarray(n * e, (n + 1) * e), {
				planeIndex: n,
				format: this.format,
				frameOffset: t,
				frameCount: r
			});
		} else a = new Uint8Array(r * this.numberOfChannels * i), r > 0 && this.copyTo(a, {
			planeIndex: 0,
			format: this.format,
			frameOffset: t,
			frameCount: r
		});
		return new e({
			data: a,
			format: this.format,
			sampleRate: this.sampleRate,
			numberOfChannels: this.numberOfChannels,
			timestamp: this.timestamp + t / this.sampleRate
		});
	}
	close() {
		this._closed ||= (uo?.unregister(this), this._data instanceof Mo ? (this._data._referenceCount--, this._data._referenceCount === 0 && this._data.close()) : Ro(this._data) ? this._data.close() : this._data = /* @__PURE__ */ new Uint8Array(), !0);
	}
	toAudioData() {
		if (this._closed) throw Error("AudioSample is closed.");
		return this._data instanceof Mo ? this._createAudioDataFromData() : Ro(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
			format: this.format,
			sampleRate: this.sampleRate,
			numberOfFrames: this.numberOfFrames,
			numberOfChannels: this.numberOfChannels,
			timestamp: this.microsecondTimestamp,
			data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
		});
	}
	_createAudioDataFromData() {
		if (Fo(this.format)) {
			let e = this.allocationSize({
				planeIndex: 0,
				format: this.format
			}), t = new ArrayBuffer(e * this.numberOfChannels);
			for (let n = 0; n < this.numberOfChannels; n++) this.copyTo(new Uint8Array(t, n * e, e), {
				planeIndex: n,
				format: this.format
			});
			return new AudioData({
				format: this.format,
				sampleRate: this.sampleRate,
				numberOfFrames: this.numberOfFrames,
				numberOfChannels: this.numberOfChannels,
				timestamp: this.microsecondTimestamp,
				data: t
			});
		} else {
			let e = new ArrayBuffer(this.allocationSize({
				planeIndex: 0,
				format: this.format
			}));
			return this.copyTo(e, {
				planeIndex: 0,
				format: this.format
			}), new AudioData({
				format: this.format,
				sampleRate: this.sampleRate,
				numberOfFrames: this.numberOfFrames,
				numberOfChannels: this.numberOfChannels,
				timestamp: this.microsecondTimestamp,
				data: e
			});
		}
	}
	toAudioBuffer() {
		if (this._closed) throw Error("AudioSample is closed.");
		let e = new AudioBuffer({
			numberOfChannels: this.numberOfChannels,
			length: this.numberOfFrames,
			sampleRate: this.sampleRate
		}), t = new Float32Array(this.allocationSize({
			planeIndex: 0,
			format: "f32-planar"
		}) / 4);
		for (let n = 0; n < this.numberOfChannels; n++) this.copyTo(t, {
			planeIndex: n,
			format: "f32-planar"
		}), e.copyToChannel(t, n);
		return e;
	}
	setTimestamp(e) {
		if (!Number.isFinite(e)) throw TypeError("newTimestamp must be a number.");
		this.timestamp = e;
	}
	[Symbol.dispose]() {
		this.close();
	}
	static *_fromAudioBuffer(t, n) {
		if (!(t instanceof AudioBuffer)) throw TypeError("audioBuffer must be an AudioBuffer.");
		let r = t.numberOfChannels, i = t.sampleRate, a = t.length, o = Math.floor(24e4 / r), s = 0, c = a;
		for (; c > 0;) {
			let a = Math.min(o, c), l = new Float32Array(r * a);
			for (let e = 0; e < r; e++) t.copyFromChannel(l.subarray(e * a, (e + 1) * a), e, s);
			yield new e({
				format: "f32-planar",
				sampleRate: i,
				numberOfFrames: a,
				numberOfChannels: r,
				timestamp: n + s / i,
				data: l
			}), s += a, c -= a;
		}
	}
	static fromAudioBuffer(t, n) {
		if (!(t instanceof AudioBuffer)) throw TypeError("audioBuffer must be an AudioBuffer.");
		let r = t.numberOfChannels, i = t.sampleRate, a = t.length, o = Math.floor(24e4 / r), s = 0, c = a, l = [];
		for (; c > 0;) {
			let a = Math.min(o, c), u = new Float32Array(r * a);
			for (let e = 0; e < r; e++) t.copyFromChannel(u.subarray(e * a, (e + 1) * a), e, s);
			let d = new e({
				format: "f32-planar",
				sampleRate: i,
				numberOfFrames: a,
				numberOfChannels: r,
				timestamp: n + s / i,
				data: u
			});
			l.push(d), s += a, c -= a;
		}
		return l;
	}
}, Po = (e) => {
	switch (e) {
		case "u8":
		case "u8-planar": return 1;
		case "s16":
		case "s16-planar": return 2;
		case "s32":
		case "s32-planar": return 4;
		case "f32":
		case "f32-planar": return 4;
		default: throw Error("Unknown AudioSampleFormat");
	}
}, Fo = (e) => {
	switch (e) {
		case "u8-planar":
		case "s16-planar":
		case "s32-planar":
		case "f32-planar": return !0;
		default: return !1;
	}
}, Io = (e) => {
	switch (e) {
		case "u8":
		case "u8-planar": return (e, t) => (e.getUint8(t) - 128) / 128;
		case "s16":
		case "s16-planar": return (e, t) => e.getInt16(t, !0) / 32768;
		case "s32":
		case "s32-planar": return (e, t) => e.getInt32(t, !0) / 2147483648;
		case "f32":
		case "f32-planar": return (e, t) => e.getFloat32(t, !0);
	}
}, Lo = (e) => {
	switch (e) {
		case "u8":
		case "u8-planar": return (e, t, n) => e.setUint8(t, M((n + 1) * 127.5, 0, 255));
		case "s16":
		case "s16-planar": return (e, t, n) => e.setInt16(t, M(Math.round(n * 32767), -32768, 32767), !0);
		case "s32":
		case "s32-planar": return (e, t, n) => e.setInt32(t, M(Math.round(n * 2147483647), -2147483648, 2147483647), !0);
		case "f32":
		case "f32-planar": return (e, t, n) => e.setFloat32(t, n, !0);
	}
}, Ro = (e) => typeof AudioData < "u" && e instanceof AudioData, zo = (e) => {
	switch (e) {
		case "u8-planar": return "u8";
		case "s16-planar": return "s16";
		case "s32-planar": return "s32";
		case "f32-planar": return "f32";
		default: return e;
	}
}, Bo = (e, t, n, r, i, a, o, s) => {
	let c = Io(n), l = Lo(r), u = Po(n), d = Po(r), f = Fo(n);
	if (Fo(r)) if (f) {
		let r = new ArrayBuffer(s * u), i = p(r);
		e.copyTo(r, {
			planeIndex: a,
			frameOffset: o,
			frameCount: s,
			format: n
		});
		for (let e = 0; e < s; e++) {
			let n = e * u;
			l(t, e * d, c(i, n));
		}
	} else {
		let r = new ArrayBuffer(s * i * u), f = p(r);
		e.copyTo(r, {
			planeIndex: 0,
			frameOffset: o,
			frameCount: s,
			format: n
		});
		for (let e = 0; e < s; e++) {
			let n = (e * i + a) * u;
			l(t, e * d, c(f, n));
		}
	}
	else if (f) {
		let r = s * u, a = new ArrayBuffer(r), f = p(a);
		for (let r = 0; r < i; r++) {
			e.copyTo(a, {
				planeIndex: r,
				frameOffset: o,
				frameCount: s,
				format: n
			});
			for (let e = 0; e < s; e++) {
				let n = e * u;
				l(t, (e * i + r) * d, c(f, n));
			}
		}
	} else {
		let r = new ArrayBuffer(s * i * u), a = p(r);
		e.copyTo(r, {
			planeIndex: 0,
			frameOffset: o,
			frameCount: s,
			format: n
		});
		for (let e = 0; e < s; e++) for (let n = 0; n < i; n++) {
			let r = e * i + n, o = r * u;
			l(t, r * d, c(a, o));
		}
	}
}, Vo = (e, t) => {
	let n = e.allocationSize({
		format: t,
		planeIndex: 0
	}), r = new ArrayBuffer(n);
	return e.copyTo(r, {
		format: t,
		planeIndex: 0
	}), new No({
		data: r,
		format: t,
		numberOfChannels: e.numberOfChannels,
		sampleRate: e.sampleRate,
		timestamp: e.timestamp,
		duration: e.duration
	});
}, Ho = /* @__PURE__ */ new Map(), Uo = /* @__PURE__ */ new Map(), Wo = (e) => {
	if (!e || typeof e != "object") throw TypeError("Encoding config must be an object.");
	if (!ot.includes(e.codec)) throw TypeError(`Invalid video codec '${e.codec}'. Must be one of: ${ot.join(", ")}.`);
	if (!(e.bitrate instanceof Xo) && (!Number.isInteger(e.bitrate) || e.bitrate <= 0)) throw TypeError("config.bitrate must be a positive integer or a quality.");
	if (e.keyFrameInterval !== void 0 && (!Number.isFinite(e.keyFrameInterval) || e.keyFrameInterval < 0)) throw TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
	if (e.sizeChangeBehavior !== void 0 && ![
		"deny",
		"passThrough",
		"fill",
		"contain",
		"cover"
	].includes(e.sizeChangeBehavior)) throw TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
	if (e.transform !== void 0) {
		if (typeof e.transform != "object" || !e.transform) throw TypeError("config.transform, when provided, must be an object.");
		if (e.transform.width !== void 0 && (!Number.isInteger(e.transform.width) || e.transform.width <= 0)) throw TypeError("config.transform.width, when provided, must be a positive integer.");
		if (e.transform.height !== void 0 && (!Number.isInteger(e.transform.height) || e.transform.height <= 0)) throw TypeError("config.transform.height, when provided, must be a positive integer.");
		if (e.transform.fit !== void 0 && ![
			"fill",
			"contain",
			"cover"
		].includes(e.transform.fit)) throw TypeError("config.transform.fit, when provided, must be one of \"fill\", \"contain\", or \"cover\".");
		if (e.transform.width !== void 0 && e.transform.height !== void 0 && e.transform.fit === void 0 && ![
			"fill",
			"contain",
			"cover"
		].includes(e.sizeChangeBehavior)) throw TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
		if (e.transform.fit !== void 0 && [
			"fill",
			"contain",
			"cover"
		].includes(e.sizeChangeBehavior) && e.transform.fit !== e.sizeChangeBehavior) throw TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
		if (e.transform.rotate !== void 0 && ![
			0,
			90,
			180,
			270
		].includes(e.transform.rotate)) throw TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
		if (e.transform.crop !== void 0 && Co(e.transform.crop, "config.transform."), e.transform.process !== void 0 && typeof e.transform.process != "function") throw TypeError("config.transform.process, when provided, must be a function.");
		if (e.transform.frameRate !== void 0 && (!Number.isFinite(e.transform.frameRate) || e.transform.frameRate <= 0)) throw TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
		if (e.transform.force !== void 0 && typeof e.transform.force != "boolean") throw TypeError("config.transform.force, when provided, must be a boolean.");
	}
	if (e.onEncodedPacket !== void 0 && typeof e.onEncodedPacket != "function") throw TypeError("config.onEncodedPacket, when provided, must be a function.");
	if (e.onEncoderConfig !== void 0 && typeof e.onEncoderConfig != "function") throw TypeError("config.onEncoderConfig, when provided, must be a function.");
	if (e.onEncodedSample !== void 0 && typeof e.onEncodedSample != "function") throw TypeError("config.onEncodedSample, when provided, must be a function.");
	Go(e.codec, e);
}, Go = (e, t) => {
	if (!t || typeof t != "object") throw TypeError("Encoding options must be an object.");
	if (t.alpha !== void 0 && !["discard", "keep"].includes(t.alpha)) throw TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
	if (t.bitrateMode !== void 0 && !["constant", "variable"].includes(t.bitrateMode)) throw TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
	if (t.latencyMode !== void 0 && !["quality", "realtime"].includes(t.latencyMode)) throw TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
	if (t.fullCodecString !== void 0 && typeof t.fullCodecString != "string") throw TypeError("fullCodecString, when provided, must be a string.");
	if (t.fullCodecString !== void 0 && wt(t.fullCodecString) !== e) throw TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${e}).`);
	if (t.hardwareAcceleration !== void 0 && ![
		"no-preference",
		"prefer-hardware",
		"prefer-software"
	].includes(t.hardwareAcceleration)) throw TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
	if (t.scalabilityMode !== void 0 && typeof t.scalabilityMode != "string") throw TypeError("scalabilityMode, when provided, must be a string.");
	if (t.contentHint !== void 0 && typeof t.contentHint != "string") throw TypeError("contentHint, when provided, must be a string.");
}, Ko = (e) => {
	let t = e.bitrate instanceof Xo ? e.bitrate._toVideoBitrate(e.codec, e.width, e.height) : e.bitrate;
	return {
		codec: e.fullCodecString ?? ht(e.codec, e.width, e.height, t),
		width: e.width,
		height: e.height,
		displayWidth: e.squarePixelWidth,
		displayHeight: e.squarePixelHeight,
		bitrate: t,
		bitrateMode: e.bitrateMode,
		alpha: e.alpha ?? "discard",
		framerate: e.framerate,
		latencyMode: e.latencyMode,
		hardwareAcceleration: e.hardwareAcceleration,
		scalabilityMode: e.scalabilityMode,
		contentHint: e.contentHint,
		...Tt(e.codec)
	};
}, qo = (e) => {
	if (!e || typeof e != "object") throw TypeError("Encoding config must be an object.");
	if (!ct.includes(e.codec)) throw TypeError(`Invalid audio codec '${e.codec}'. Must be one of: ${ct.join(", ")}.`);
	if (e.bitrate === void 0 && !(I.includes(e.codec) || e.codec === "flac")) throw TypeError("config.bitrate must be provided for compressed audio codecs.");
	if (e.bitrate !== void 0 && !(e.bitrate instanceof Xo) && (!Number.isInteger(e.bitrate) || e.bitrate <= 0)) throw TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
	if (e.transform !== void 0) {
		if (typeof e.transform != "object" || !e.transform) throw TypeError("config.transform, when provided, must be an object.");
		if (e.transform.numberOfChannels !== void 0 && (!Number.isInteger(e.transform.numberOfChannels) || e.transform.numberOfChannels <= 0)) throw TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
		if (e.transform.sampleRate !== void 0 && (!Number.isInteger(e.transform.sampleRate) || e.transform.sampleRate <= 0)) throw TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
		if (e.transform.sampleFormat !== void 0 && ![
			"u8",
			"s16",
			"s32",
			"f32"
		].includes(e.transform.sampleFormat)) throw TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
		if (e.transform.process !== void 0 && typeof e.transform.process != "function") throw TypeError("config.transform.process, when provided, must be a function.");
	}
	if (e.onEncodedPacket !== void 0 && typeof e.onEncodedPacket != "function") throw TypeError("config.onEncodedPacket, when provided, must be a function.");
	if (e.onEncoderConfig !== void 0 && typeof e.onEncoderConfig != "function") throw TypeError("config.onEncoderConfig, when provided, must be a function.");
	if (e.onEncodedSample !== void 0 && typeof e.onEncodedSample != "function") throw TypeError("config.onEncodedSample, when provided, must be a function.");
	Jo(e.codec, e);
}, Jo = (e, t) => {
	if (!t || typeof t != "object") throw TypeError("Encoding options must be an object.");
	if (t.bitrateMode !== void 0 && !["constant", "variable"].includes(t.bitrateMode)) throw TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
	if (t.fullCodecString !== void 0 && typeof t.fullCodecString != "string") throw TypeError("fullCodecString, when provided, must be a string.");
	if (t.fullCodecString !== void 0 && wt(t.fullCodecString) !== e) throw TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${e}).`);
}, Yo = (e) => {
	let t = e.bitrate instanceof Xo ? e.bitrate._toAudioBitrate(e.codec) : e.bitrate;
	return {
		codec: e.fullCodecString ?? yt(e.codec, e.numberOfChannels, e.sampleRate),
		numberOfChannels: e.numberOfChannels,
		sampleRate: e.sampleRate,
		bitrate: t,
		bitrateMode: e.bitrateMode,
		...Et(e.codec)
	};
}, Xo = class {
	constructor(e) {
		this._factor = e;
	}
	_toVideoBitrate(e, t, n) {
		let r = 3e6 * (t * n / (1920 * 1080)) ** .95 * {
			avc: 1,
			hevc: .6,
			vp9: .6,
			av1: .4,
			vp8: 1.2
		}[e] * this._factor;
		return Math.ceil(r / 1e3) * 1e3;
	}
	_toAudioBitrate(e) {
		if (I.includes(e) || e === "flac") return;
		let t = {
			aac: 128e3,
			opus: 64e3,
			mp3: 16e4,
			vorbis: 64e3,
			ac3: 384e3,
			eac3: 192e3
		}[e];
		if (!t) throw Error(`Unhandled codec: ${e}`);
		let n = t * this._factor;
		return e === "aac" ? n = [
			96e3,
			128e3,
			16e4,
			192e3
		].reduce((e, t) => Math.abs(t - n) < Math.abs(e - n) ? t : e) : e === "opus" || e === "vorbis" ? n = Math.max(6e3, n) : e === "mp3" && (n = [
			8e3,
			16e3,
			24e3,
			32e3,
			4e4,
			48e3,
			64e3,
			8e4,
			96e3,
			112e3,
			128e3,
			16e4,
			192e3,
			224e3,
			256e3,
			32e4
		].reduce((e, t) => Math.abs(t - n) < Math.abs(e - n) ? t : e)), Math.round(n / 1e3) * 1e3;
	}
}, Zo = /* #__PURE__ */ new Xo(.3), Qo = /* #__PURE__ */ new Xo(.6), $o = /* #__PURE__ */ new Xo(1), es = /* #__PURE__ */ new Xo(2), ts = /* #__PURE__ */ new Xo(4), ns = async (e, t = {}) => {
	let { width: n = 1280, height: r = 720, bitrate: i = 1e6, ...a } = t;
	if (!ot.includes(e)) return !1;
	if (!Number.isInteger(n) || n <= 0) throw TypeError("width must be a positive integer.");
	if (!Number.isInteger(r) || r <= 0) throw TypeError("height must be a positive integer.");
	if (!(i instanceof Xo) && (!Number.isInteger(i) || i <= 0)) throw TypeError("bitrate must be a positive integer or a quality.");
	Go(e, a);
	let o = Ko({
		codec: e,
		width: n,
		height: r,
		bitrate: i,
		framerate: void 0,
		...a,
		alpha: "discard"
	}), s = JSON.stringify(o), c = Ho.get(s);
	if (c) return c;
	let l = (async () => cs.some((t) => t.supports(e, o)) ? !0 : typeof VideoEncoder > "u" || (n % 2 == 1 || r % 2 == 1) && (e === "avc" || e === "hevc") || !(await VideoEncoder.isConfigSupported(o)).supported ? !1 : De() ? new Promise(async (e) => {
		try {
			let t = new VideoEncoder({
				output: () => {},
				error: () => e(!1)
			});
			t.configure(o);
			let i = new Uint8Array(n * r * 4), a = new VideoFrame(i, {
				format: "RGBA",
				codedWidth: n,
				codedHeight: r,
				timestamp: 0
			});
			t.encode(a), a.close(), await t.flush(), e(!0);
		} catch {
			e(!1);
		}
	}) : !0)();
	return Ho.set(s, l), l;
}, rs = async (e, t = {}) => {
	let { numberOfChannels: n = 2, sampleRate: r = 48e3, bitrate: i = 128e3, ...a } = t;
	if (!ct.includes(e)) return !1;
	if (!Number.isInteger(n) || n <= 0) throw TypeError("numberOfChannels must be a positive integer.");
	if (!Number.isInteger(r) || r <= 0) throw TypeError("sampleRate must be a positive integer.");
	if (!(i instanceof Xo) && (!Number.isInteger(i) || i <= 0)) throw TypeError("bitrate must be a positive integer.");
	Jo(e, a);
	let o = Yo({
		codec: e,
		numberOfChannels: n,
		sampleRate: r,
		bitrate: i,
		...a
	}), s = JSON.stringify(o), c = Uo.get(s);
	if (c) return c;
	let l = (async () => ls.some((t) => t.supports(e, o)) || I.includes(e) ? !0 : typeof AudioEncoder > "u" ? !1 : (await AudioEncoder.isConfigSupported(o)).supported === !0)();
	return Uo.set(s, l), l;
}, is = async (e = ct, t) => {
	let n = await Promise.all(e.map((e) => rs(e, t)));
	return e.filter((e, t) => n[t]);
}, as = async (e, t) => {
	for (let n of e) if (await ns(n, t)) return n;
	return null;
}, os = [], ss = [], cs = [], ls = [], us = (e) => {
	let t = 8191, n = e, r = 4096, i = 0, a = 12, o = 0;
	for (n < 0 && (n = -n, i = 128), n += 33, n > t && (n = t); (n & r) !== r && a >= 5;) r >>= 1, a--;
	return o = n >> a - 4 & 15, ~(i | a - 5 << 4 | o) & 255;
}, ds = (e) => {
	let t = 0, n = 0, r = ~e;
	r & 128 && (r &= -129, t = -1), n = ((r & 240) >> 4) + 5;
	let i = (1 << n | (r & 15) << n - 4 | 1 << n - 5) - 33;
	return t === 0 ? i : -i;
}, fs = (e) => {
	let t = 4095, n = 2048, r = 0, i = 11, a = 0, o = e;
	for (o < 0 && (o = -o, r = 128), o > t && (o = t); (o & n) !== n && i >= 5;) n >>= 1, i--;
	return a = o >> (i === 4 ? 1 : i - 4) & 15, (r | i - 4 << 4 | a) ^ 85;
}, ps = (e) => {
	let t = 0, n = 0, r = e ^ 85;
	r & 128 && (r &= -129, t = -1), n = ((r & 240) >> 4) + 4;
	let i = 0;
	return i = n === 4 ? r << 1 | 1 : 1 << n | (r & 15) << n - 4 | 1 << n - 5, t === 0 ? i : -i;
}, ms = (e) => {
	if (!e || typeof e != "object") throw TypeError("options must be an object.");
	if (e.metadataOnly !== void 0 && typeof e.metadataOnly != "boolean") throw TypeError("options.metadataOnly, when defined, must be a boolean.");
	if (e.verifyKeyPackets !== void 0 && typeof e.verifyKeyPackets != "boolean") throw TypeError("options.verifyKeyPackets, when defined, must be a boolean.");
	if (e.verifyKeyPackets && e.metadataOnly) throw TypeError("options.verifyKeyPackets and options.metadataOnly cannot be enabled together.");
	if (e.skipLiveWait !== void 0 && typeof e.skipLiveWait != "boolean") throw TypeError("options.skipLiveWait, when defined, must be a boolean.");
}, hs = (e) => {
	if (!Be(e)) throw TypeError("timestamp must be a number.");
}, gs = (e, t, n) => n.verifyKeyPackets ? t.then(async (t) => {
	if (!t || t.type === "delta") return t;
	let n = await e.determinePacketType(t);
	return n && (t.type = n), t;
}) : t, _s = class {
	constructor(e) {
		if (!(e instanceof As)) throw TypeError("track must be an InputTrack.");
		this._track = e;
	}
	async getFirstPacket(e = {}) {
		if (ms(e), this._track.input._disposed) throw new Vs();
		return gs(this._track, this._track._backing.getFirstPacket(e), e);
	}
	async getFirstKeyPacket(e = {}) {
		ms(e);
		let t = await this.getFirstPacket(e);
		return t ? t.type === "key" ? t : this.getNextKeyPacket(t, e) : null;
	}
	async getPacket(e, t = {}) {
		if (hs(e), ms(t), this._track.input._disposed) throw new Vs();
		return gs(this._track, this._track._backing.getPacket(e, t), t);
	}
	async getNextPacket(e, t = {}) {
		if (!(e instanceof z)) throw TypeError("packet must be an EncodedPacket.");
		if (ms(t), this._track.input._disposed) throw new Vs();
		return gs(this._track, this._track._backing.getNextPacket(e, t), t);
	}
	async getKeyPacket(e, t = {}) {
		if (hs(e), ms(t), this._track.input._disposed) throw new Vs();
		if (!t.verifyKeyPackets) return this._track._backing.getKeyPacket(e, t);
		let n = await this._track._backing.getKeyPacket(e, t);
		return n && (a(n.type === "key"), await this._track.determinePacketType(n) === "delta" ? this.getKeyPacket(n.timestamp - 1 / await this._track.getTimeResolution(), t) : n);
	}
	async getNextKeyPacket(e, t = {}) {
		if (!(e instanceof z)) throw TypeError("packet must be an EncodedPacket.");
		if (ms(t), this._track.input._disposed) throw new Vs();
		if (!t.verifyKeyPackets) return this._track._backing.getNextKeyPacket(e, t);
		let n = await this._track._backing.getNextKeyPacket(e, t);
		return n && (a(n.type === "key"), await this._track.determinePacketType(n) === "delta" ? this.getNextKeyPacket(n, t) : n);
	}
	packets(e, t, n = {}) {
		if (e !== void 0 && !(e instanceof z)) throw TypeError("startPacket must be an EncodedPacket.");
		if (e !== void 0 && e.isMetadataOnly && !n?.metadataOnly) throw TypeError("startPacket can only be metadata-only if options.metadataOnly is enabled.");
		if (t !== void 0 && !(t instanceof z)) throw TypeError("endPacket must be an EncodedPacket.");
		if (ms(n), this._track.input._disposed) throw new Vs();
		let r = [], { promise: i, resolve: a } = O(), { promise: o, resolve: s } = O(), c = !1, l = !1, u = null, d = [], f = () => Math.max(2, d.length);
		(async () => {
			let u = e ?? await this.getFirstPacket(n);
			for (; u && !l && !this._track.input._disposed && !(t && u.sequenceNumber >= t?.sequenceNumber);) {
				if (r.length > f()) {
					({promise: o, resolve: s} = O()), await o;
					continue;
				}
				r.push(u), a(), {promise: i, resolve: a} = O(), u = await this.getNextPacket(u, n);
			}
			c = !0, a();
		})().catch((e) => {
			u || (u = e, a());
		});
		let p = this._track;
		return {
			async next() {
				for (;;) if (p.input._disposed) throw new Vs();
				else if (l) return {
					value: void 0,
					done: !0
				};
				else if (u) throw u;
				else if (r.length > 0) {
					let e = r.shift(), t = performance.now();
					for (d.push(t); d.length > 0 && t - d[0] >= 1e3;) d.shift();
					return s(), {
						value: e,
						done: !1
					};
				} else if (c) return {
					value: void 0,
					done: !0
				};
				else await i;
			},
			async return() {
				return l = !0, s(), a(), {
					value: void 0,
					done: !0
				};
			},
			async throw(e) {
				throw e;
			},
			[Symbol.asyncIterator]() {
				return this;
			}
		};
	}
}, vs = class {
	constructor(e, t) {
		this.onSample = e, this.onError = t;
	}
}, ys = class {
	mediaSamplesInRange(e = -Infinity, t = Infinity, n) {
		hs(e), hs(t);
		let r = [], i = !1, a = null, { promise: o, resolve: s } = O(), { promise: c, resolve: l } = O(), u = !1, d = !1, f = !1, p = null, m = {
			...n,
			verifyKeyPackets: !0,
			metadataOnly: !1
		};
		(async () => {
			let n = await this._createDecoder((n) => {
				if (l(), n.timestamp >= t && (d = !0), d) {
					n.close();
					return;
				}
				a && (n.timestamp > e ? (r.push(a), i = !0) : a.close()), n.timestamp >= e && (r.push(n), i = !0), a = i ? null : n, r.length > 0 && (s(), {promise: o, resolve: s} = O());
			}, (e) => {
				p || (p = e, s());
			}), h = this._createPacketSink(), g = await h.getKeyPacket(e, m) ?? await h.getFirstKeyPacket(m), _ = g, v = h.packets(g ?? void 0, void 0, m);
			for (await v.next(); _ && !d && !this._track.input._disposed;) {
				let e = bs(r.length);
				if (r.length + n.getDecodeQueueSize() > e) {
					({promise: c, resolve: l} = O()), await c;
					continue;
				}
				n.decode(_);
				let t = await v.next();
				if (t.done) break;
				_ = t.value;
			}
			await v.return(), !f && !this._track.input._disposed && await n.flush(), n.close(), !i && a && r.push(a), u = !0, s();
		})().catch((e) => {
			p || (p = e, s());
		});
		let h = this._track, g = () => {
			a?.close();
			for (let e of r) e.close();
		};
		return {
			async next() {
				for (;;) if (h.input._disposed) throw g(), new Vs();
				else if (f) return {
					value: void 0,
					done: !0
				};
				else if (p) throw g(), p;
				else if (r.length > 0) {
					let e = r.shift();
					return l(), {
						value: e,
						done: !1
					};
				} else if (!u) await o;
				else return {
					value: void 0,
					done: !0
				};
			},
			async return() {
				return f = !0, d = !0, l(), s(), g(), {
					value: void 0,
					done: !0
				};
			},
			async throw(e) {
				throw e;
			},
			[Symbol.asyncIterator]() {
				return this;
			}
		};
	}
	mediaSamplesAtTimestamps(e, t) {
		k(e);
		let n = le(e), r = [], i = [], { promise: o, resolve: s } = O(), { promise: c, resolve: l } = O(), u = !1, d = !1, f = null, p = (e) => {
			i.push(e), s(), {promise: o, resolve: s} = O();
		}, m = {
			...t,
			verifyKeyPackets: !0,
			metadataOnly: !1
		};
		(async () => {
			let e = await this._createDecoder((e) => {
				if (l(), d) {
					e.close();
					return;
				}
				let t = 0;
				for (; r.length > 0 && e.timestamp - r[0] > -1e-10;) t++, r.shift();
				if (t > 0) for (let n = 0; n < t; n++) p(n < t - 1 ? e.clone() : e);
				else e.close();
			}, (e) => {
				f || (f = e, s());
			}), t = this._createPacketSink(), o = null, h = null, g = -1, _ = async () => {
				a(h);
				let n = h;
				for (e.decode(n); n.sequenceNumber < g;) {
					let r = bs(i.length);
					for (; i.length + e.getDecodeQueueSize() > r && !d;) ({promise: c, resolve: l} = O()), await c;
					if (d) break;
					let o = await t.getNextPacket(n, m);
					a(o), e.decode(o), n = o;
				}
				g = -1;
			}, v = async () => {
				await e.flush();
				for (let e = 0; e < r.length; e++) p(null);
				r.length = 0;
			};
			for await (let e of n) {
				if (hs(e), d || this._track.input._disposed) break;
				let n = await t.getPacket(e, m), i = n && await t.getKeyPacket(e, m);
				if (!i) {
					g !== -1 && (await _(), await v()), p(null), o = null;
					continue;
				}
				o && (i.sequenceNumber !== h.sequenceNumber || n.timestamp < o.timestamp) && (await _(), await v()), r.push(n.timestamp), g = Math.max(n.sequenceNumber, g), o = n, h = i;
			}
			!d && !this._track.input._disposed && (g !== -1 && await _(), await v()), e.close(), u = !0, s();
		})().catch((e) => {
			f || (f = e, s());
		});
		let h = this._track, g = () => {
			for (let e of i) e?.close();
		};
		return {
			async next() {
				for (;;) if (h.input._disposed) throw g(), new Vs();
				else if (d) return {
					value: void 0,
					done: !0
				};
				else if (f) throw g(), f;
				else if (i.length > 0) {
					let e = i.shift();
					return a(e !== void 0), l(), {
						value: e,
						done: !1
					};
				} else if (!u) await o;
				else return {
					value: void 0,
					done: !0
				};
			},
			async return() {
				return d = !0, l(), s(), g(), {
					value: void 0,
					done: !0
				};
			},
			async throw(e) {
				throw e;
			},
			[Symbol.asyncIterator]() {
				return this;
			}
		};
	}
}, bs = (e) => e === 0 ? 40 : 8, xs = class extends vs {
	constructor(e, t, n, r, i, o) {
		super(e, t), this.codec = n, this.decoderConfig = r, this.rotation = i, this.timeResolution = o, this.decoder = null, this.customDecoder = null, this.customDecoderCallSerializer = new Ce(), this.customDecoderQueueSize = 0, this.inputTimestamps = [], this.sampleQueue = [], this.currentPacketIndex = 0, this.raslSkipped = !1, this.alphaDecoder = null, this.alphaHadKeyframe = !1, this.colorQueue = [], this.alphaQueue = [], this.merger = null, this.decodedAlphaChunkCount = 0, this.alphaDecoderQueueSize = 0, this.nullAlphaFrameQueue = [], this.currentAlphaPacketIndex = 0, this.alphaRaslSkipped = !1, this.frameHandlerSerializer = new Ce();
		let s = os.find((e) => e.supports(n, r));
		if (s) this.customDecoder = new s(), this.customDecoder.codec = n, this.customDecoder.config = r, this.customDecoder.onSample = (e) => {
			if (!(e instanceof ho)) throw TypeError("The argument passed to onSample must be a VideoSample.");
			this.finalizeAndEmitSample(e);
		}, this.customDecoderCallSerializer.call(() => this.customDecoder.init());
		else {
			let e = (e) => {
				this.frameHandlerSerializer.call(async () => {
					if (this.alphaQueue.length > 0) {
						let t = this.alphaQueue.shift();
						a(t !== void 0), await this.mergeAlpha(e, t);
					} else this.colorQueue.push(e);
				}).catch((e) => this.onError(e));
			};
			if (n === "avc" && this.decoderConfig.description && ke()) {
				let e = cn(f(this.decoderConfig.description));
				if (e && e.sequenceParameterSets.length > 0) {
					let t = un(e.sequenceParameterSets[0]);
					t && t.frameMbsOnlyFlag === 0 && (this.decoderConfig = {
						...this.decoderConfig,
						hardwareAcceleration: "prefer-software"
					});
				}
			}
			let t = (/* @__PURE__ */ Error("Decoding error")).stack;
			this.decoder = new VideoDecoder({
				output: (t) => {
					try {
						e(t);
					} catch (e) {
						this.onError(e);
					}
				},
				error: (e) => {
					e.stack = t, this.onError(e);
				}
			}), this.decoder.configure(this.decoderConfig);
		}
	}
	getDecodeQueueSize() {
		return this.customDecoder ? this.customDecoderQueueSize : (a(this.decoder), Math.max(this.decoder.decodeQueueSize, this.alphaDecoder?.decodeQueueSize ?? 0));
	}
	decode(e) {
		if (this.codec === "hevc" && this.currentPacketIndex > 0 && !this.raslSkipped) {
			if (this.hasHevcRaslPicture(e.data)) return;
			this.raslSkipped = !0;
		}
		if (this.customDecoder) this.customDecoderQueueSize++, this.customDecoderCallSerializer.call(() => this.customDecoder.decode(e)).then(() => this.customDecoderQueueSize--);
		else {
			if (a(this.decoder), Te() || ae(this.inputTimestamps, e.timestamp, (e) => e), ke() && this.currentPacketIndex === 0) {
				if (this.codec === "avc") {
					let t = [];
					for (let n of Qt(e.data, this.decoderConfig)) {
						let r = $t(e.data[n.offset]);
						r === Jt.AUD && (t.length = 0), r >= 20 && r <= 31 || t.push(e.data.subarray(n.offset, n.offset + n.length));
					}
					e = new z(an(t, this.decoderConfig), e.type, e.timestamp, e.duration);
				} else if (this.codec === "hevc") {
					let t = En(e.data, this.decoderConfig);
					t && (e = new z(t, e.type, e.timestamp, e.duration));
				}
			}
			this.decoder.decode(e.toEncodedVideoChunk()), this.decodeAlphaData(e);
		}
		this.currentPacketIndex++;
	}
	decodeAlphaData(e) {
		if (!e.sideData.alpha) {
			this.pushNullAlphaFrame();
			return;
		}
		if (this.merger ||= new Cs(), !this.alphaDecoder) {
			let e = (e) => {
				this.frameHandlerSerializer.call(async () => {
					if (this.colorQueue.length > 0) {
						let t = this.colorQueue.shift();
						a(t !== void 0), await this.mergeAlpha(t, e);
					} else this.alphaQueue.push(e);
					for (this.decodedAlphaChunkCount++; this.nullAlphaFrameQueue.length > 0 && this.nullAlphaFrameQueue[0] === this.decodedAlphaChunkCount;) if (this.nullAlphaFrameQueue.shift(), this.colorQueue.length > 0) {
						let e = this.colorQueue.shift();
						a(e !== void 0), await this.mergeAlpha(e, null);
					} else this.alphaQueue.push(null);
					this.alphaDecoderQueueSize--;
				}).catch((e) => this.onError(e));
			}, t = (/* @__PURE__ */ Error("Decoding error")).stack;
			this.alphaDecoder = new VideoDecoder({
				output: (t) => {
					try {
						e(t);
					} catch (e) {
						this.onError(e);
					}
				},
				error: (e) => {
					e.stack = t, this.onError(e);
				}
			}), this.alphaDecoder.configure(this.decoderConfig);
		}
		let t = Pn(this.codec, this.decoderConfig, e.sideData.alpha);
		if (this.alphaHadKeyframe ||= t === "key", this.alphaHadKeyframe) {
			if (this.codec === "hevc" && this.currentAlphaPacketIndex > 0 && !this.alphaRaslSkipped) {
				if (this.hasHevcRaslPicture(e.sideData.alpha)) {
					this.pushNullAlphaFrame();
					return;
				}
				this.alphaRaslSkipped = !0;
			}
			this.currentAlphaPacketIndex++, this.alphaDecoder.decode(e.alphaToEncodedVideoChunk(t ?? e.type)), this.alphaDecoderQueueSize++;
		} else this.pushNullAlphaFrame();
	}
	pushNullAlphaFrame() {
		this.alphaDecoderQueueSize === 0 ? this.alphaQueue.push(null) : this.nullAlphaFrameQueue.push(this.decodedAlphaChunkCount + this.alphaDecoderQueueSize);
	}
	hasHevcRaslPicture(e) {
		for (let t of pn(e, this.decoderConfig)) {
			let n = mn(e[t.offset]);
			if (n === Yt.RASL_N || n === Yt.RASL_R) return !0;
		}
		return !1;
	}
	sampleHandler(e) {
		if (Te()) {
			if (this.sampleQueue.length > 0 && e.timestamp >= s(this.sampleQueue).timestamp) {
				for (let e of this.sampleQueue) this.finalizeAndEmitSample(e);
				this.sampleQueue.length = 0;
			}
			ae(this.sampleQueue, e, (e) => e.timestamp);
		} else {
			let t = this.inputTimestamps.shift();
			a(t !== void 0), e.setTimestamp(t), this.finalizeAndEmitSample(e);
		}
	}
	finalizeAndEmitSample(e) {
		e.setTimestamp(Math.round(e.timestamp * this.timeResolution) / this.timeResolution), e.setDuration(Math.round(e.duration * this.timeResolution) / this.timeResolution), e.setRotation(this.rotation), this.onSample(e);
	}
	async mergeAlpha(e, t) {
		if (!t) {
			let t = new ho(e);
			this.sampleHandler(t);
			return;
		}
		a(this.merger);
		let n = new ho(await this.merger.update(e, t));
		this.sampleHandler(n);
	}
	async flush() {
		if (this.customDecoder ? await this.customDecoderCallSerializer.call(() => this.customDecoder.flush()) : (a(this.decoder), await Promise.all([this.decoder.flush(), this.alphaDecoder?.flush()]), await this.frameHandlerSerializer.currentPromise, this.colorQueue.forEach((e) => e.close()), this.colorQueue.length = 0, this.alphaQueue.forEach((e) => e?.close()), this.alphaQueue.length = 0, this.alphaHadKeyframe = !1, this.decodedAlphaChunkCount = 0, this.alphaDecoderQueueSize = 0, this.nullAlphaFrameQueue.length = 0, this.currentAlphaPacketIndex = 0, this.alphaRaslSkipped = !1), Te()) {
			for (let e of this.sampleQueue) this.finalizeAndEmitSample(e);
			this.sampleQueue.length = 0;
		}
		this.currentPacketIndex = 0, this.raslSkipped = !1;
	}
	close() {
		this.customDecoder ? this.customDecoderCallSerializer.call(() => this.customDecoder.close()) : (a(this.decoder), this.decoder.close(), this.alphaDecoder?.close(), this.colorQueue.forEach((e) => e.close()), this.colorQueue.length = 0, this.alphaQueue.forEach((e) => e?.close()), this.alphaQueue.length = 0, this.merger?.close());
		for (let e of this.sampleQueue) e.close();
		this.sampleQueue.length = 0;
	}
}, Ss = !1, Cs = class e {
	constructor() {
		this.canvas = null, this.gl = null, this.program = null, this.vao = null, this.colorTexture = null, this.alphaTexture = null, this.worker = null, this.pendingRequests = /* @__PURE__ */ new Map(), this.nextRequestId = 0;
		let t = typeof OffscreenCanvas < "u" || typeof document < "u" && typeof document.createElement == "function";
		if (!e.forceCpu && t && !Ss) try {
			typeof OffscreenCanvas < "u" ? this.canvas = new OffscreenCanvas(300, 150) : this.canvas = document.createElement("canvas");
			let e = this.canvas.getContext("webgl2", { premultipliedAlpha: !1 });
			if (!e) throw Error("Couldn't acquire WebGL 2 context.");
			this.gl = e, this.program = this.createProgram(), this.vao = this.createVAO(), this.colorTexture = this.createTexture(), this.alphaTexture = this.createTexture(), this.gl.useProgram(this.program), this.gl.uniform1i(this.gl.getUniformLocation(this.program, "u_colorTexture"), 0), this.gl.uniform1i(this.gl.getUniformLocation(this.program, "u_alphaTexture"), 1);
		} catch (e) {
			this.gl = null, this.canvas = null, Ss = !0, i._warn("Falling back to CPU for color/alpha merging.", e);
		}
	}
	async update(e, t) {
		return this.gl ? this.updateGpu(e, t) : this.updateCpu(e, t);
	}
	createProgram() {
		a(this.gl);
		let e = this.createShader(this.gl.VERTEX_SHADER, "#version 300 es\n			in vec2 a_position;\n			in vec2 a_texCoord;\n			out vec2 v_texCoord;\n			\n			void main() {\n				gl_Position = vec4(a_position, 0.0, 1.0);\n				v_texCoord = a_texCoord;\n			}\n		"), t = this.createShader(this.gl.FRAGMENT_SHADER, "#version 300 es\n			precision highp float;\n			\n			uniform sampler2D u_colorTexture;\n			uniform sampler2D u_alphaTexture;\n			in vec2 v_texCoord;\n			out vec4 fragColor;\n			\n			void main() {\n				vec3 color = texture(u_colorTexture, v_texCoord).rgb;\n				float alpha = texture(u_alphaTexture, v_texCoord).r;\n				fragColor = vec4(color, alpha);\n			}\n		"), n = this.gl.createProgram();
		return this.gl.attachShader(n, e), this.gl.attachShader(n, t), this.gl.linkProgram(n), n;
	}
	createShader(e, t) {
		a(this.gl);
		let n = this.gl.createShader(e);
		return this.gl.shaderSource(n, t), this.gl.compileShader(n), n;
	}
	createVAO() {
		a(this.gl), a(this.program);
		let e = this.gl.createVertexArray();
		this.gl.bindVertexArray(e);
		let t = new Float32Array([
			-1,
			-1,
			0,
			1,
			1,
			-1,
			1,
			1,
			-1,
			1,
			0,
			0,
			1,
			1,
			1,
			0
		]), n = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, n), this.gl.bufferData(this.gl.ARRAY_BUFFER, t, this.gl.STATIC_DRAW);
		let r = this.gl.getAttribLocation(this.program, "a_position"), i = this.gl.getAttribLocation(this.program, "a_texCoord");
		return this.gl.enableVertexAttribArray(r), this.gl.vertexAttribPointer(r, 2, this.gl.FLOAT, !1, 16, 0), this.gl.enableVertexAttribArray(i), this.gl.vertexAttribPointer(i, 2, this.gl.FLOAT, !1, 16, 8), e;
	}
	createTexture() {
		a(this.gl);
		let e = this.gl.createTexture();
		return this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), e;
	}
	updateGpu(e, t) {
		a(this.gl), a(this.canvas), (e.displayWidth !== this.canvas.width || e.displayHeight !== this.canvas.height) && (this.canvas.width = e.displayWidth, this.canvas.height = e.displayHeight), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, this.colorTexture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, e), this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, this.alphaTexture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, t), this.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.bindVertexArray(this.vao), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
		let n = new VideoFrame(this.canvas, {
			timestamp: e.timestamp,
			duration: e.duration ?? void 0
		});
		return e.close(), t.close(), n;
	}
	updateCpu(e, t) {
		if (!this.worker) {
			let e = new Blob([`(${ws.toString()})()`], { type: "application/javascript" }), t = URL.createObjectURL(e);
			this.worker = new Worker(t), URL.revokeObjectURL(t), this.worker.addEventListener("message", (e) => {
				let t = e.data, n = this.pendingRequests.get(t.id);
				n && (this.pendingRequests.delete(t.id), "error" in t ? n.reject(Error(t.error)) : n.resolve(t.frame));
			}), this.worker.addEventListener("error", (e) => {
				let t = Error(e.message || "Color/alpha merge worker error.");
				for (let e of this.pendingRequests.values()) e.reject(t);
				this.pendingRequests.clear();
			});
		}
		let n = this.nextRequestId++, r = O();
		return this.pendingRequests.set(n, r), this.worker.postMessage({
			id: n,
			color: e,
			alpha: t
		}, { transfer: [e, t] }), r.promise;
	}
	close() {
		this.gl?.getExtension("WEBGL_lose_context")?.loseContext(), this.gl = null, this.canvas = null, this.worker?.terminate(), this.worker = null;
		let e = /* @__PURE__ */ Error("Color/alpha merger closed.");
		for (let t of this.pendingRequests.values()) t.reject(e);
		this.pendingRequests.clear();
	}
};
Cs.forceCpu = !0;
var ws = () => {
	let e = null, t = null, n = Promise.resolve();
	self.addEventListener("message", (e) => {
		let { id: t, color: i, alpha: a } = e.data;
		n = n.then(async () => {
			try {
				let e = await r(i, a);
				self.postMessage({
					id: t,
					frame: e
				}, { transfer: [e] });
			} catch (e) {
				self.postMessage({
					id: t,
					error: e.message
				});
			} finally {
				i.close(), a.close();
			}
		});
	});
	let r = async (e, t) => {
		let n = e.format, r = t.format;
		if (!n || !r) throw Error("CPU color/alpha merging requires a known VideoFrame format.");
		let s = n.includes("P10"), c = n.includes("P12"), l = r.includes("P10"), u = r.includes("P12");
		if (l !== s || u !== c) throw Error(`CPU color/alpha merging requires the alpha frame to have the same bit depth as the color frame (color: '${n}', alpha: '${r}').`);
		let d = e.codedWidth, f = e.codedHeight;
		if (n === "RGBX" || n === "RGBA" || n === "BGRX" || n === "BGRA") return await i(e, t, d, f, n);
		if (n === "I420" || n === "I420P10" || n === "I420P12" || n === "I422" || n === "I422P10" || n === "I422P12" || n === "I444" || n === "I444P10" || n === "I444P12") return await a(e, t, d, f, n);
		if (n === "NV12") return await o(e, t, d, f);
		throw Error(`CPU color/alpha merging does not support format '${n}'.`);
	}, i = async (e, t, n, r, i) => {
		let a = n * r, o = new Uint8Array(a * 4);
		await e.copyTo(o);
		let c = await s(t, n, r, 1);
		for (let e = 0, t = 3; e < a; e++, t += 4) o[t] = c[e];
		let l = {
			format: i === "RGBX" || i === "RGBA" ? "RGBA" : "BGRA",
			codedWidth: n,
			codedHeight: r,
			timestamp: e.timestamp,
			duration: e.duration ?? void 0,
			transfer: [o.buffer]
		};
		return new VideoFrame(o, l);
	}, a = async (e, t, n, r, i) => {
		let a = i.includes("P10"), o = i.includes("P12"), c = a || o ? 2 : 1, l, u;
		i.startsWith("I420") ? (l = Math.ceil(n / 2), u = Math.ceil(r / 2)) : i.startsWith("I422") ? (l = Math.ceil(n / 2), u = r) : (l = n, u = r);
		let d = n * r, f = l * u, p = d * c, m = f * c, h = d * c, g = p + 2 * m + h, _ = new Uint8Array(g);
		await e.copyTo(_);
		let v = await s(t, n, r, c), y = p + 2 * m;
		_.set(v, y);
		let b = {
			format: i.slice(0, 4) + "A" + i.slice(4),
			codedWidth: n,
			codedHeight: r,
			timestamp: e.timestamp,
			duration: e.duration ?? void 0,
			transfer: [_.buffer]
		};
		return new VideoFrame(_, b);
	}, o = async (e, n, r, i) => {
		let a = r * i, o = Math.ceil(r / 2) * Math.ceil(i / 2), c = e.allocationSize();
		(!t || t.byteLength !== c) && (t = new Uint8Array(c)), await e.copyTo(t);
		let l = new Uint8Array(a + 2 * o + a);
		l.set(t.subarray(0, a), 0);
		let u = a, d = a + o, f = a;
		for (let e = 0; e < o; e++) l[u + e] = t[f + e * 2], l[d + e] = t[f + e * 2 + 1];
		let p = await s(n, r, i, 1);
		l.set(p, a + 2 * o);
		let m = {
			format: "I420A",
			codedWidth: r,
			codedHeight: i,
			timestamp: e.timestamp,
			duration: e.duration ?? void 0,
			transfer: [l.buffer]
		};
		return new VideoFrame(l, m);
	}, s = async (t, n, r, i) => {
		let a = t.allocationSize();
		(!e || e.byteLength !== a) && (e = new Uint8Array(a)), await t.copyTo(e);
		let o = t.format;
		if (o === "RGBA" || o === "BGRA" || o === "RGBX" || o === "BGRX") {
			let t = o === "RGBA" || o === "RGBX" ? 0 : 2, i = n * r;
			for (let n = 0; n < i; n++) e[n] = e[n * 4 + t];
			return e.subarray(0, i);
		} else return e.subarray(0, n * r * i);
	};
}, Ts = (e) => {
	if (!e || typeof e != "object") throw TypeError("decoderOptions must be an object.");
	if (e.hardwareAcceleration !== void 0 && ![
		"no-preference",
		"prefer-hardware",
		"prefer-software"
	].includes(e.hardwareAcceleration)) throw TypeError("decoderOptions.hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
	if (e.optimizeForLatency !== void 0 && typeof e.optimizeForLatency != "boolean") throw TypeError("decoderOptions.optimizeForLatency, when provided, must be a boolean.");
}, Es = class extends ys {
	constructor(e, t = {}) {
		if (!(e instanceof Ms)) throw TypeError("videoTrack must be an InputVideoTrack.");
		Ts(t), super(), this._track = e, this._decoderOptions = t;
	}
	async _createDecoder(e, t) {
		if (!await this._track.canDecode()) throw Error("This video track cannot be decoded by this browser. Make sure to check decodability before using a track.");
		let n = await this._track.getCodec(), r = await this._track.getRotation(), i = await this._track.getDecoderConfig(), o = await this._track.getTimeResolution();
		return a(n && i), i = {
			...i,
			hardwareAcceleration: this._decoderOptions.hardwareAcceleration,
			optimizeForLatency: this._decoderOptions.optimizeForLatency
		}, new xs(e, t, n, i, r, o);
	}
	_createPacketSink() {
		return new _s(this._track);
	}
	async getSample(e, t = {}) {
		hs(e);
		for await (let n of this.mediaSamplesAtTimestamps([e], t)) return n;
		throw Error("Internal error: Iterator returned nothing.");
	}
	samples(e, t, n = {}) {
		return this.mediaSamplesInRange(e, t, n);
	}
	samplesAtTimestamps(e, t = {}) {
		return this.mediaSamplesAtTimestamps(e, t);
	}
}, Ds = class extends vs {
	constructor(e, t, n, r) {
		super(e, t), this.decoder = null, this.customDecoder = null, this.customDecoderCallSerializer = new Ce(), this.customDecoderQueueSize = 0, this.currentTimestamp = null, this.expectedFirstTimestamp = null, this.timestampOffset = 0;
		let i = (t) => {
			let n = t.timestamp;
			this.expectedFirstTimestamp && this.currentTimestamp === null && (this.timestampOffset = this.expectedFirstTimestamp - n), n += this.timestampOffset, (this.currentTimestamp === null || Math.abs(n - this.currentTimestamp) >= t.duration) && (this.currentTimestamp = n);
			let i = this.currentTimestamp;
			if (this.currentTimestamp += t.duration, t.numberOfFrames === 0) {
				t.close();
				return;
			}
			let a = r.sampleRate;
			t.setTimestamp(Math.round(i * a) / a), e(t);
		}, a = ss.find((e) => e.supports(n, r));
		if (a) this.customDecoder = new a(), this.customDecoder.codec = n, this.customDecoder.config = r, this.customDecoder.onSample = (e) => {
			if (!(e instanceof No)) throw TypeError("The argument passed to onSample must be an AudioSample.");
			i(e);
		}, this.customDecoderCallSerializer.call(() => this.customDecoder.init());
		else {
			let e = (/* @__PURE__ */ Error("Decoding error")).stack;
			this.decoder = new AudioDecoder({
				output: (e) => {
					try {
						i(new No(e));
					} catch (e) {
						this.onError(e);
					}
				},
				error: (t) => {
					t.stack = e, this.onError(t);
				}
			}), this.decoder.configure(r);
		}
	}
	getDecodeQueueSize() {
		return this.customDecoder ? this.customDecoderQueueSize : (a(this.decoder), this.decoder.decodeQueueSize);
	}
	decode(e) {
		this.customDecoder ? (this.customDecoderQueueSize++, this.customDecoderCallSerializer.call(() => this.customDecoder.decode(e)).then(() => this.customDecoderQueueSize--)) : (a(this.decoder), this.expectedFirstTimestamp ??= e.timestamp, this.decoder.decode(e.toEncodedAudioChunk()));
	}
	async flush() {
		this.customDecoder ? await this.customDecoderCallSerializer.call(() => this.customDecoder.flush()) : (a(this.decoder), await this.decoder.flush()), this.currentTimestamp = null, this.expectedFirstTimestamp = null, this.timestampOffset = 0;
	}
	close() {
		this.customDecoder ? this.customDecoderCallSerializer.call(() => this.customDecoder.close()) : (a(this.decoder), this.decoder.close());
	}
}, Os = class extends vs {
	constructor(e, t, n) {
		super(e, t), this.decoderConfig = n, this.currentTimestamp = null, a(I.includes(n.codec)), this.codec = n.codec;
		let { dataType: r, sampleSize: i, littleEndian: o } = Ct(this.codec);
		switch (this.inputSampleSize = i, i) {
			case 1:
				r === "unsigned" ? this.readInputValue = (e, t) => e.getUint8(t) - 2 ** 7 : r === "signed" ? this.readInputValue = (e, t) => e.getInt8(t) : r === "ulaw" ? this.readInputValue = (e, t) => ds(e.getUint8(t)) : r === "alaw" ? this.readInputValue = (e, t) => ps(e.getUint8(t)) : a(!1);
				break;
			case 2:
				r === "unsigned" ? this.readInputValue = (e, t) => e.getUint16(t, o) - 2 ** 15 : r === "signed" ? this.readInputValue = (e, t) => e.getInt16(t, o) : a(!1);
				break;
			case 3:
				r === "unsigned" ? this.readInputValue = (e, t) => ue(e, t, o) - 2 ** 23 : r === "signed" ? this.readInputValue = (e, t) => de(e, t, o) : a(!1);
				break;
			case 4:
				r === "unsigned" ? this.readInputValue = (e, t) => e.getUint32(t, o) - 2 ** 31 : r === "signed" ? this.readInputValue = (e, t) => e.getInt32(t, o) : r === "float" ? this.readInputValue = (e, t) => e.getFloat32(t, o) : a(!1);
				break;
			case 8:
				r === "float" ? this.readInputValue = (e, t) => e.getFloat64(t, o) : a(!1);
				break;
			default: A(i), a(!1);
		}
		switch (i) {
			case 1:
				r === "ulaw" || r === "alaw" ? (this.outputSampleSize = 2, this.outputFormat = "s16", this.writeOutputValue = (e, t, n) => e.setInt16(t, n, !0)) : (this.outputSampleSize = 1, this.outputFormat = "u8", this.writeOutputValue = (e, t, n) => e.setUint8(t, n + 2 ** 7));
				break;
			case 2:
				this.outputSampleSize = 2, this.outputFormat = "s16", this.writeOutputValue = (e, t, n) => e.setInt16(t, n, !0);
				break;
			case 3:
				this.outputSampleSize = 4, this.outputFormat = "s32", this.writeOutputValue = (e, t, n) => e.setInt32(t, n << 8, !0);
				break;
			case 4:
				this.outputSampleSize = 4, r === "float" ? (this.outputFormat = "f32", this.writeOutputValue = (e, t, n) => e.setFloat32(t, n, !0)) : (this.outputFormat = "s32", this.writeOutputValue = (e, t, n) => e.setInt32(t, n, !0));
				break;
			case 8:
				this.outputSampleSize = 4, this.outputFormat = "f32", this.writeOutputValue = (e, t, n) => e.setFloat32(t, n, !0);
				break;
			default: A(i), a(!1);
		}
	}
	getDecodeQueueSize() {
		return 0;
	}
	decode(e) {
		let t = p(e.data), n = e.byteLength / this.decoderConfig.numberOfChannels / this.inputSampleSize, r = n * this.decoderConfig.numberOfChannels * this.outputSampleSize, i = new ArrayBuffer(r), a = new DataView(i);
		for (let e = 0; e < n * this.decoderConfig.numberOfChannels; e++) {
			let n = e * this.inputSampleSize, r = e * this.outputSampleSize, i = this.readInputValue(t, n);
			this.writeOutputValue(a, r, i);
		}
		let o = n / this.decoderConfig.sampleRate;
		(this.currentTimestamp === null || Math.abs(e.timestamp - this.currentTimestamp) >= o) && (this.currentTimestamp = e.timestamp);
		let s = this.currentTimestamp;
		this.currentTimestamp += o;
		let c = new No({
			format: this.outputFormat,
			data: i,
			numberOfChannels: this.decoderConfig.numberOfChannels,
			sampleRate: this.decoderConfig.sampleRate,
			numberOfFrames: n,
			timestamp: s
		});
		this.onSample(c);
	}
	async flush() {}
	close() {}
}, ks = class extends ys {
	constructor(e) {
		if (!(e instanceof Ns)) throw TypeError("audioTrack must be an InputAudioTrack.");
		super(), this._track = e;
	}
	async _createDecoder(e, t) {
		if (!await this._track.canDecode()) throw Error("This audio track cannot be decoded by this browser. Make sure to check decodability before using a track.");
		let n = await this._track.getCodec(), r = await this._track.getDecoderConfig();
		return a(n && r), I.includes(r.codec) ? new Os(e, t, r) : new Ds(e, t, n, r);
	}
	_createPacketSink() {
		return new _s(this._track);
	}
	async getSample(e, t = {}) {
		hs(e);
		for await (let n of this.mediaSamplesAtTimestamps([e], t)) return n;
		throw Error("Internal error: Iterator returned nothing.");
	}
	samples(e, t, n = {}) {
		return this.mediaSamplesInRange(e, t, n);
	}
	samplesAtTimestamps(e, t = {}) {
		return this.mediaSamplesAtTimestamps(e, t);
	}
}, As = class e {
	constructor(e, t) {
		this.input = e, this._backing = t;
	}
	isVideoTrack() {
		return this instanceof Ms;
	}
	isAudioTrack() {
		return this instanceof Ns;
	}
	get id() {
		return this._backing.getId();
	}
	get number() {
		return this._backing.getNumber();
	}
	async getInternalCodecId() {
		return this._backing.getInternalCodecId();
	}
	get internalCodecId() {
		return H(this._backing.getInternalCodecId(), "internalCodecId", "getInternalCodecId");
	}
	async getLanguageCode() {
		return this._backing.getLanguageCode();
	}
	get languageCode() {
		return H(this._backing.getLanguageCode(), "languageCode", "getLanguageCode");
	}
	async getName() {
		return this._backing.getName();
	}
	get name() {
		return H(this._backing.getName(), "name", "getName");
	}
	async getTimeResolution() {
		return this._backing.getTimeResolution();
	}
	get timeResolution() {
		return H(this._backing.getTimeResolution(), "timeResolution", "getTimeResolution");
	}
	async isRelativeToUnixEpoch() {
		return this._backing.isRelativeToUnixEpoch();
	}
	async getUnixTimeForTimestamp(e) {
		return this._backing.getUnixTimeForTimestamp(e);
	}
	async hasUnixTimeMapping() {
		return await this._backing.getUnixTimeForTimestamp(await this.getFirstTimestamp()) !== null;
	}
	async getDisposition() {
		return this._backing.getDisposition();
	}
	get disposition() {
		return H(this._backing.getDisposition(), "disposition", "getDisposition");
	}
	async getBitrate() {
		return this._backing.getBitrate();
	}
	async getAverageBitrate() {
		return this._backing.getAverageBitrate();
	}
	async getFirstTimestamp() {
		return (await this._backing.getFirstPacket({ metadataOnly: !0 }))?.timestamp ?? 0;
	}
	async computeDuration(e) {
		let t = await this._backing.getPacket(Infinity, {
			metadataOnly: !0,
			...e
		});
		return he((t?.timestamp ?? 0) + (t?.duration ?? 0), await this.getTimeResolution());
	}
	async getDurationFromMetadata(e = {}) {
		return this._backing.getDurationFromMetadata(e);
	}
	async computePacketStats(e = Infinity, t) {
		let n = new _s(this), r = Infinity, i = -Infinity, a = 0, o = 0;
		for await (let s of n.packets(void 0, void 0, {
			metadataOnly: !0,
			...t
		})) {
			if (a >= e && s.timestamp >= i) break;
			r = Math.min(r, s.timestamp), i = Math.max(i, s.timestamp + s.duration), a++, o += s.byteLength;
		}
		return {
			packetCount: a,
			averagePacketRate: a ? Number((a / (i - r)).toPrecision(16)) : 0,
			averageBitrate: a ? Number((8 * o / (i - r)).toPrecision(16)) : 0
		};
	}
	async isLive() {
		return await this._backing.getLiveRefreshInterval() !== null;
	}
	async getLiveRefreshInterval() {
		return this._backing.getLiveRefreshInterval();
	}
	canBePairedWith(t) {
		if (!(t instanceof e)) throw TypeError("other must be an InputTrack.");
		return this.input !== t.input || this === t ? !1 : (this._backing.getPairingMask() & t._backing.getPairingMask()) !== 0n;
	}
	async getPairableTracks(e) {
		return this.input.getTracks(Ls({ filter: (e) => e.canBePairedWith(this) }, e));
	}
	async getPairableVideoTracks(e) {
		return this.input.getVideoTracks(Ls({ filter: (e) => e.canBePairedWith(this) }, e));
	}
	async getPairableAudioTracks(e) {
		return this.input.getAudioTracks(Ls({ filter: (e) => e.canBePairedWith(this) }, e));
	}
	async getPrimaryPairableVideoTrack(e) {
		return this.input.getPrimaryVideoTrack(Ls({ filter: (e) => e.canBePairedWith(this) }, e));
	}
	async getPrimaryPairableAudioTrack(e) {
		return this.input.getPrimaryAudioTrack(Ls({ filter: (e) => e.canBePairedWith(this) }, e));
	}
	async hasPairableTrack(e) {
		e &&= js(e);
		let t = await this.input.getTracks();
		for (let n of t) if (this.canBePairedWith(n) && (!e || await e(n))) return !0;
		return !1;
	}
	hasPairableVideoTrack(e) {
		return e &&= js(e), this.hasPairableTrack(async (t) => t.isVideoTrack() && (!e || await e(t)));
	}
	hasPairableAudioTrack(e) {
		return e &&= js(e), this.hasPairableTrack(async (t) => t.isAudioTrack() && (!e || await e(t)));
	}
}, H = (e, t, n) => {
	if (e instanceof Promise) throw Error(`'${t}' is deprecated and not available synchronously for this track. Use the preferred '${n}()' instead.`);
	return e;
}, js = (e) => {
	if (e !== void 0 && typeof e != "function") throw TypeError("predicate, when provided, must be a function.");
	return e ? (t) => {
		let n = (e) => {
			if (typeof e != "boolean") throw TypeError("predicate must return or resolve to a boolean value.");
			return e;
		}, r = e(t);
		return r instanceof Promise ? r.then(n) : n(r);
	} : void 0;
}, Ms = class extends As {
	constructor(e, t) {
		super(e, t), this._pixelAspectRatioCache = null, this._backing = t;
	}
	get type() {
		return "video";
	}
	async getCodec() {
		return this._backing.getCodec();
	}
	get codec() {
		return H(this._backing.getCodec(), "codec", "getCodec");
	}
	async hasOnlyKeyPackets() {
		return await this._backing.getHasOnlyKeyPackets?.() ?? !1;
	}
	async getCodedWidth() {
		return this._backing.getCodedWidth();
	}
	get codedWidth() {
		return H(this._backing.getCodedWidth(), "codedWidth", "getCodedWidth");
	}
	async getCodedHeight() {
		return this._backing.getCodedHeight();
	}
	get codedHeight() {
		return H(this._backing.getCodedHeight(), "codedHeight", "getCodedHeight");
	}
	async getRotation() {
		return this._backing.getRotation();
	}
	get rotation() {
		return H(this._backing.getRotation(), "rotation", "getRotation");
	}
	async getSquarePixelWidth() {
		return this._backing.getSquarePixelWidth();
	}
	get squarePixelWidth() {
		return H(this._backing.getSquarePixelWidth(), "squarePixelWidth", "getSquarePixelWidth");
	}
	async getSquarePixelHeight() {
		return this._backing.getSquarePixelHeight();
	}
	get squarePixelHeight() {
		return H(this._backing.getSquarePixelHeight(), "squarePixelHeight", "getSquarePixelHeight");
	}
	async getPixelAspectRatio() {
		return this._pixelAspectRatioCache ??= We({
			num: await this.getSquarePixelWidth() * await this.getCodedHeight(),
			den: await this.getSquarePixelHeight() * await this.getCodedWidth()
		});
	}
	get pixelAspectRatio() {
		return this._pixelAspectRatioCache ??= We({
			num: H(this._backing.getSquarePixelWidth(), "pixelAspectRatio", "getPixelAspectRatio") * H(this._backing.getCodedHeight(), "pixelAspectRatio", "getPixelAspectRatio"),
			den: H(this._backing.getSquarePixelHeight(), "pixelAspectRatio", "getPixelAspectRatio") * H(this._backing.getCodedWidth(), "pixelAspectRatio", "getPixelAspectRatio")
		});
	}
	async getDisplayWidth() {
		return await this._backing.getMetadataDisplayWidth?.() ?? (await this.getRotation() % 180 == 0 ? this.getSquarePixelWidth() : this.getSquarePixelHeight());
	}
	get displayWidth() {
		let e = this._backing.getMetadataDisplayWidth?.();
		if (e !== void 0) {
			let t = H(e, "displayWidth", "getDisplayWidth");
			if (t !== null) return t;
		}
		return H(H(this._backing.getRotation(), "displayWidth", "getDisplayWidth") % 180 == 0 ? this._backing.getSquarePixelWidth() : this._backing.getSquarePixelHeight(), "displayWidth", "getDisplayWidth");
	}
	async getDisplayHeight() {
		return await this._backing.getMetadataDisplayHeight?.() ?? (await this.getRotation() % 180 == 0 ? this.getSquarePixelHeight() : this.getSquarePixelWidth());
	}
	get displayHeight() {
		let e = this._backing.getMetadataDisplayHeight?.();
		if (e !== void 0) {
			let t = H(e, "displayHeight", "getDisplayHeight");
			if (t !== null) return t;
		}
		return H(H(this._backing.getRotation(), "displayHeight", "getDisplayHeight") % 180 == 0 ? this._backing.getSquarePixelHeight() : this._backing.getSquarePixelWidth(), "displayHeight", "getDisplayHeight");
	}
	async getColorSpace() {
		return this._backing.getColorSpace();
	}
	async hasHighDynamicRange() {
		let e = await this._backing.getColorSpace();
		return e.primaries === "bt2020" || e.primaries === "smpte432" || e.transfer === "pq" || e.transfer === "hlg" || e.matrix === "bt2020-ncl";
	}
	async canBeTransparent() {
		return this._backing.canBeTransparent();
	}
	async getDecoderConfig() {
		return this._backing.getDecoderConfig();
	}
	async getCodecParameterString() {
		return await this._backing.getMetadataCodecParameterString?.() ?? (await this._backing.getDecoderConfig())?.codec ?? null;
	}
	async canDecode() {
		try {
			let e = await this._backing.getDecoderConfig();
			if (!e) return !1;
			let t = await this._backing.getCodec();
			return a(t !== null), os.some((n) => n.supports(t, e)) ? !0 : typeof VideoDecoder > "u" ? !1 : (await VideoDecoder.isConfigSupported(e)).supported === !0;
		} catch (e) {
			return i._error("Error during decodability check:", e), !1;
		}
	}
	async determinePacketType(e) {
		if (!(e instanceof z)) throw TypeError("packet must be an EncodedPacket.");
		if (e.isMetadataOnly) throw TypeError("packet must not be metadata-only to determine its type.");
		let t = await this.getCodec();
		if (t === null) return null;
		let n = await this.getDecoderConfig();
		return a(n), Pn(t, n, e.data);
	}
}, Ns = class extends As {
	constructor(e, t) {
		super(e, t), this._backing = t;
	}
	get type() {
		return "audio";
	}
	async getCodec() {
		return this._backing.getCodec();
	}
	get codec() {
		return H(this._backing.getCodec(), "codec", "getCodec");
	}
	async hasOnlyKeyPackets() {
		return await this._backing.getHasOnlyKeyPackets?.() ?? !0;
	}
	async getNumberOfChannels() {
		return this._backing.getNumberOfChannels();
	}
	get numberOfChannels() {
		return H(this._backing.getNumberOfChannels(), "numberOfChannels", "getNumberOfChannels");
	}
	async getSampleRate() {
		return this._backing.getSampleRate();
	}
	get sampleRate() {
		return H(this._backing.getSampleRate(), "sampleRate", "getSampleRate");
	}
	async getDecoderConfig() {
		return this._backing.getDecoderConfig();
	}
	async getCodecParameterString() {
		return await this._backing.getMetadataCodecParameterString?.() ?? (await this._backing.getDecoderConfig())?.codec ?? null;
	}
	async canDecode() {
		try {
			let e = await this._backing.getDecoderConfig();
			if (!e) return !1;
			let t = await this._backing.getCodec();
			return a(t !== null), ss.some((n) => n.supports(t, e)) || e.codec.startsWith("pcm-") ? !0 : typeof AudioDecoder > "u" ? !1 : (await AudioDecoder.isConfigSupported(e)).supported === !0;
		} catch (e) {
			return i._error("Error during decodability check:", e), !1;
		}
	}
	async determinePacketType(e) {
		if (!(e instanceof z)) throw TypeError("packet must be an EncodedPacket.");
		return await this.getCodec() === null ? null : "key";
	}
}, Ps = (e) => -(e ?? -Infinity), Fs = (e) => -e, Is = (e) => {
	if (typeof e != "object" || !e) throw TypeError("query must be an object.");
	if (e.filter !== void 0 && typeof e.filter != "function") throw TypeError("query.filter, when provided, must be a function.");
	if (e.sortBy !== void 0 && typeof e.sortBy != "function") throw TypeError("query.sortBy, when provided, must be a function.");
	return {
		filter: e.filter ? (t) => {
			let n = (e) => {
				if (typeof e != "boolean") throw TypeError("query.filter must return or resolve to a boolean.");
				return e;
			}, r = e.filter(t);
			return r instanceof Promise ? r.then(n) : n(r);
		} : void 0,
		sortBy: e.sortBy ? (t) => {
			let n = (e) => {
				if (typeof e != "number" && (!Array.isArray(e) || !e.every((e) => typeof e == "number"))) throw TypeError("query.sortBy must return or resolve to a number or an array of numbers.");
				return e;
			}, r = e.sortBy(t);
			return r instanceof Promise ? r.then(n) : n(r);
		} : void 0
	};
}, Ls = (e, t) => ({
	filter: e?.filter || t?.filter ? (n) => {
		let r = e?.filter?.(n) ?? !0, i = (e) => e === !1 ? !1 : t?.filter?.(n) ?? !0;
		return r instanceof Promise ? r.then(i) : i(r);
	} : void 0,
	sortBy: e?.sortBy || t?.sortBy ? (n) => {
		let r = e?.sortBy?.(n) ?? [], i = t?.sortBy?.(n) ?? [], a = (e, t) => [...Array.isArray(e) ? e : [e], ...Array.isArray(t) ? t : [t]];
		return r instanceof Promise || i instanceof Promise ? Promise.all([r, i]).then(([e, t]) => a(e, t)) : a(r, i);
	} : void 0
}), Rs = async (e, t) => {
	let n = e;
	if (t?.filter) {
		let r = e.map((e) => t.filter(e));
		if (r.some((e) => e instanceof Promise)) {
			let t = await Promise.all(r);
			n = e.filter((e, n) => t[n]);
		} else n = e.filter((e, t) => r[t]);
	}
	if (!t?.sortBy) return n;
	let r = n.map((e) => t.sortBy(e)), i = r.some((e) => e instanceof Promise) ? await Promise.all(r) : r;
	return n.map((e, t) => ({
		track: e,
		sortValue: i[t]
	})).sort((e, t) => {
		let n = Array.isArray(e.sortValue) ? e.sortValue : [e.sortValue], r = Array.isArray(t.sortValue) ? t.sortValue : [t.sortValue], i = Math.max(n.length, r.length);
		for (let e = 0; e < i; e++) {
			let t = n[e] ?? 0, i = r[e] ?? 0;
			if (t !== i) return t - i;
		}
		return 0;
	}).map((e) => e.track);
};
//#endregion
//#region node_modules/mediabunny/dist/modules/src/input.js
ze();
var zs = class e extends Je {
	get disposed() {
		return this._disposed;
	}
	constructor(t) {
		if (super(), this._demuxerPromise = null, this._format = null, this._trackBackingsCache = null, this._backingToTrack = /* @__PURE__ */ new Map(), this._disposed = !1, this._nextSourceCacheAge = 0, this._sourceRefs = [], this._sourceCache = [], this._sourceCachePromises = [], this._onFormatDetermined = null, !t || typeof t != "object") throw TypeError("options must be an object.");
		if (!Array.isArray(t.formats) || t.formats.some((e) => !(e instanceof Ga))) throw TypeError("options.formats must be an array of InputFormat.");
		if (!(t.source instanceof Sa || t.source instanceof Ca)) throw TypeError("options.source must be a Source or SourceRef.");
		if (t.source instanceof Sa && t.source._disposed) throw TypeError("options.source must not be a disposed Source.");
		if (t.initInput !== void 0 && !(t.initInput instanceof e)) throw TypeError("options.initInput, when provided, must be an Input.");
		t.formatOptions !== void 0 && ao(t.formatOptions, "formatOptions"), this._formats = t.formats, this._initInput = t.initInput ?? null, this._formatOptions = t.formatOptions ?? {}, t.source instanceof Sa ? this._rootRef = t.source.ref() : this._rootRef = t.source, this._sourceRefs.push(this._rootRef);
	}
	get _rootSource() {
		return this._rootRef.source;
	}
	async _getSourceUncached(e) {
		a(this._rootSource instanceof wa);
		let t = await this._rootSource._resolveRequest(e);
		return this._emit("source", {
			source: t.source,
			request: e,
			isRoot: e.isRoot
		}), t;
	}
	_getSourceCached(e, t = 1) {
		let n = this._sourceCache.find((n) => n.cacheGroup === t && Ta(n.request, e));
		if (n) return n.age++, Promise.resolve(n.sourceRef.source.ref());
		let r = this._sourceCachePromises.find((n) => n.cacheGroup === t && Ta(n.request, e));
		if (r) return r.promise.then((e) => e.sourceRef.source.ref());
		let i = (async () => {
			let n = await this._getSourceUncached(e);
			if (He(this._sourceCache, (e) => e.cacheGroup === t && e.sourceRef.source._refCount === 1) >= 4) {
				let e = Ue(this._sourceCache, (e) => e.cacheGroup === t && e.sourceRef.source._refCount === 1 ? e.age : Infinity);
				a(e !== -1);
				let n = this._sourceCache[e];
				this._sourceCache.splice(e, 1), n.sourceRef.free(), oe(this._sourceRefs, n.sourceRef);
			}
			this._sourceRefs.push(n);
			let r = this._sourceCachePromises.findIndex((t) => t.request === e);
			return a(r !== -1), this._sourceCachePromises.splice(r, 1), {
				request: e,
				sourceRef: n,
				age: this._nextSourceCacheAge++,
				cacheGroup: t
			};
		})();
		return this._sourceCachePromises.push({
			request: e,
			cacheGroup: t,
			promise: i
		}), i.then((e) => {
			let t = e.sourceRef.source.ref();
			return this._sourceCache.push(e), t;
		});
	}
	_getDemuxer() {
		return this._demuxerPromise ??= (async () => {
			this._reader = new Hs(this._rootSource), this._emit("source", {
				source: this._rootSource,
				request: null,
				isRoot: !0
			});
			for (let e of this._formats) if (await e._canReadInput(this)) return this._format = e, this._onFormatDetermined?.(e), e._createDemuxer(this);
			throw new Bs();
		})();
	}
	get source() {
		return this._rootSource;
	}
	async getFormat() {
		return await this._getDemuxer(), a(this._format), this._format;
	}
	async canRead() {
		try {
			return await this._getDemuxer(), !0;
		} catch (e) {
			if (e instanceof Bs) return !1;
			throw e;
		}
	}
	async getFirstTimestamp(e) {
		e ??= await this.getTracks();
		let t = e.filter((e) => e !== null);
		if (t.length === 0) return 0;
		let n = await Promise.all(t.map((e) => e.getFirstTimestamp()));
		return Math.min(...n);
	}
	async computeDuration(e, t) {
		e ??= await this.getTracks();
		let n = e.filter((e) => e !== null);
		if (n.length === 0) return 0;
		let r = await Promise.all(n.map((e) => e.computeDuration(t)));
		return Math.max(...r);
	}
	async getDurationFromMetadata(e, t) {
		e ??= await this.getTracks();
		let n = e.filter((e) => e !== null), r = (await Promise.all(n.map((e) => e.getDurationFromMetadata(t)))).filter((e) => e !== null);
		return r.length === 0 ? null : Math.max(...r);
	}
	async getTracks(e) {
		return e &&= Is(e), Rs((await this._getTrackBackings()).map((e) => this._wrapBackingAsTrack(e)), e);
	}
	async getVideoTracks(e) {
		return e &&= Is(e), Rs((await this.getTracks()).filter((e) => e.isVideoTrack()), e);
	}
	async getAudioTracks(e) {
		return e &&= Is(e), Rs((await this.getTracks()).filter((e) => e.isAudioTrack()), e);
	}
	async getPrimaryVideoTrack(e) {
		e &&= Is(e);
		let t = Ls(e, { sortBy: async (e) => [
			Fs((await e.getDisposition()).default),
			Fs(await e.hasPairableAudioTrack()),
			Fs(!await e.hasOnlyKeyPackets()),
			Ps(await e.getBitrate())
		] });
		return (await this.getVideoTracks(t))[0] ?? null;
	}
	async getPrimaryAudioTrack(e) {
		e &&= Is(e);
		let t = await this.getPrimaryVideoTrack(), n = Ls(e, { sortBy: async (e) => [
			Fs(!t || e.canBePairedWith(t)),
			Fs((await e.getDisposition()).default),
			Ps(await e.getBitrate())
		] });
		return (await this.getAudioTracks(n))[0] ?? null;
	}
	async _getTrackBackings() {
		let e = await this._getDemuxer();
		return this._trackBackingsCache ??= await e.getTrackBackings();
	}
	_wrapBackingAsTrack(e) {
		let t = this._backingToTrack.get(e);
		if (t) return t;
		let n = e.getType() === "video" ? new Ms(this, e) : new Ns(this, e);
		return this._backingToTrack.set(e, n), n;
	}
	async getMimeType() {
		return (await this._getDemuxer()).getMimeType();
	}
	async getMetadataTags() {
		return (await this._getDemuxer()).getMetadataTags();
	}
	dispose() {
		if (!this._disposed) {
			this._disposed = !0;
			for (let e of this._sourceRefs) e.free();
			this._sourceRefs.length = 0, this._demuxerPromise && this._demuxerPromise.then((e) => e.dispose()).catch(() => {});
		}
	}
	[Symbol.dispose]() {
		this.dispose();
	}
}, Bs = class extends Error {
	constructor(e = "Input has an unsupported or unrecognizable format.") {
		super(e), this.name = "UnsupportedInputFormatError";
	}
}, Vs = class extends Error {
	constructor(e = "Input has been disposed.") {
		super(e), this.name = "InputDisposedError";
	}
}, Hs = class {
	constructor(e) {
		this.source = e;
	}
	get fileSize() {
		let e = this.source._getFileSize();
		if (e === void 0) throw Error("Reading file size too early; read required first.");
		return e;
	}
	get fileSizeNonStrict() {
		return this.source._getFileSize() ?? null;
	}
	requestSlice(e, t) {
		if (this.source._disposed) throw new Vs();
		if (e < 0 || this.fileSizeNonStrict !== null && e + t > this.fileSizeNonStrict) return null;
		if (t === 0) {
			let t = /* @__PURE__ */ new Uint8Array();
			return new Us(t, p(t), 0, e, e);
		}
		let n = e + t, r = this.source._read(e, n, 0, xa);
		return r instanceof Promise ? r.then((t) => t ? new Us(t.bytes, t.view, t.offset, e, n) : null) : r ? new Us(r.bytes, r.view, r.offset, e, n) : null;
	}
	requestSliceRange(e, t, n) {
		if (this.source._disposed) throw new Vs();
		if (e < 0) return null;
		if (this.fileSizeNonStrict !== null) return this.requestSlice(e, M(this.fileSizeNonStrict - e, t, n));
		{
			let r = this.requestSlice(e, n), i = (r) => r || (a(this.fileSizeNonStrict !== null), this.requestSlice(e, M(this.fileSizeNonStrict - e, t, n)));
			return r instanceof Promise ? r.then(i) : i(r);
		}
	}
	requestEntireFile() {
		return this.fileSizeNonStrict === null ? (async () => {
			let e = [], t = 0;
			for (;;) {
				if (e.length === 1 && this.fileSizeNonStrict !== null) return this.requestSlice(0, this.fileSizeNonStrict);
				let n = this.requestSliceRange(t, 0, 1024);
				if (n instanceof Promise && (n = await n), !n || n.length === 0) break;
				let r = U(n, n.length);
				e.push(r), t += n.length;
			}
			let n = new Uint8Array(t), r = 0;
			for (let t of e) n.set(t, r), r += t.length;
			return new Us(n, p(n), 0, 0, t);
		})() : this.requestSlice(0, this.fileSizeNonStrict);
	}
}, Us = class e {
	constructor(e, t, n, r, i) {
		this.bytes = e, this.view = t, this.offset = n, this.start = r, this.end = i, this.bufferPos = r - n;
	}
	static tempFromBytes(t) {
		return new e(t, p(t), 0, 0, t.length);
	}
	get length() {
		return this.end - this.start;
	}
	get filePos() {
		return this.offset + this.bufferPos;
	}
	set filePos(e) {
		this.bufferPos = e - this.offset;
	}
	get remainingLength() {
		return Math.max(this.end - this.filePos, 0);
	}
	skip(e) {
		this.bufferPos += e;
	}
	slice(t, n = this.end - t) {
		if (t < this.start || t + n > this.end) throw RangeError("Slicing outside of original slice.");
		return new e(this.bytes, this.view, this.offset, t, t + n);
	}
}, Ws = (e, t) => {
	if (e.filePos < e.start || e.filePos + t > e.end) throw RangeError(`Tried reading [${e.filePos}, ${e.filePos + t}), but slice is [${e.start}, ${e.end}). This is likely an internal error, please report it alongside the file that caused it.`);
}, U = (e, t) => {
	Ws(e, t);
	let n = e.bytes.subarray(e.bufferPos, e.bufferPos + t);
	return e.bufferPos += t, n;
}, W = (e) => (Ws(e, 1), e.view.getUint8(e.bufferPos++)), Gs = (e, t) => {
	Ws(e, 2);
	let n = e.view.getUint16(e.bufferPos, t);
	return e.bufferPos += 2, n;
}, Ks = (e) => {
	Ws(e, 2);
	let t = e.view.getUint16(e.bufferPos, !1);
	return e.bufferPos += 2, t;
}, qs = (e) => {
	Ws(e, 3);
	let t = ue(e.view, e.bufferPos, !1);
	return e.bufferPos += 3, t;
}, Js = (e) => {
	Ws(e, 2);
	let t = e.view.getInt16(e.bufferPos, !1);
	return e.bufferPos += 2, t;
}, Ys = (e, t) => {
	Ws(e, 4);
	let n = e.view.getUint32(e.bufferPos, t);
	return e.bufferPos += 4, n;
}, G = (e) => {
	Ws(e, 4);
	let t = e.view.getUint32(e.bufferPos, !1);
	return e.bufferPos += 4, t;
}, Xs = (e) => {
	Ws(e, 4);
	let t = e.view.getUint32(e.bufferPos, !0);
	return e.bufferPos += 4, t;
}, Zs = (e) => {
	Ws(e, 4);
	let t = e.view.getInt32(e.bufferPos, !1);
	return e.bufferPos += 4, t;
}, Qs = (e) => {
	Ws(e, 4);
	let t = e.view.getInt32(e.bufferPos, !0);
	return e.bufferPos += 4, t;
}, $s = (e, t) => {
	let n, r;
	return t ? (n = Ys(e, !0), r = Ys(e, !0)) : (r = Ys(e, !1), n = Ys(e, !1)), r * 4294967296 + n;
}, ec = (e) => {
	let t = G(e), n = G(e);
	return t * 4294967296 + n;
}, tc = (e) => {
	let t = Zs(e), n = G(e);
	return t * 4294967296 + n;
}, nc = (e) => {
	let t = Xs(e);
	return Qs(e) * 4294967296 + t;
}, rc = (e) => {
	Ws(e, 4);
	let t = e.view.getFloat32(e.bufferPos, !1);
	return e.bufferPos += 4, t;
}, ic = (e) => {
	Ws(e, 8);
	let t = e.view.getFloat64(e.bufferPos, !1);
	return e.bufferPos += 8, t;
}, K = (e, t) => {
	Ws(e, t);
	let n = "";
	for (let r = 0; r < t; r++) n += String.fromCharCode(e.bytes[e.bufferPos++]);
	return n;
}, ac = (e, t, n) => m.decode(U(e, t)).split("\n").map((e) => e.trim()).filter((e) => e.length > 0 && !n?.ignore?.(e)), oc;
(function(e) {
	e[e.Unsynchronisation = 128] = "Unsynchronisation", e[e.ExtendedHeader = 64] = "ExtendedHeader", e[e.ExperimentalIndicator = 32] = "ExperimentalIndicator", e[e.Footer = 16] = "Footer";
})(oc ||= {});
var sc;
(function(e) {
	e[e.ISO_8859_1 = 0] = "ISO_8859_1", e[e.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", e[e.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", e[e.UTF_8 = 3] = "UTF_8";
})(sc ||= {});
var cc = /* @__PURE__ */ "Blues.Classic rock.Country.Dance.Disco.Funk.Grunge.Hip-hop.Jazz.Metal.New age.Oldies.Other.Pop.Rhythm and blues.Rap.Reggae.Rock.Techno.Industrial.Alternative.Ska.Death metal.Pranks.Soundtrack.Euro-techno.Ambient.Trip-hop.Vocal.Jazz & funk.Fusion.Trance.Classical.Instrumental.Acid.House.Game.Sound clip.Gospel.Noise.Alternative rock.Bass.Soul.Punk.Space.Meditative.Instrumental pop.Instrumental rock.Ethnic.Gothic.Darkwave.Techno-industrial.Electronic.Pop-folk.Eurodance.Dream.Southern rock.Comedy.Cult.Gangsta.Top 40.Christian rap.Pop/funk.Jungle music.Native US.Cabaret.New wave.Psychedelic.Rave.Showtunes.Trailer.Lo-fi.Tribal.Acid punk.Acid jazz.Polka.Retro.Musical.Rock 'n' roll.Hard rock.Folk.Folk rock.National folk.Swing.Fast fusion.Bebop.Latin.Revival.Celtic.Bluegrass.Avantgarde.Gothic rock.Progressive rock.Psychedelic rock.Symphonic rock.Slow rock.Big band.Chorus.Easy listening.Acoustic.Humour.Speech.Chanson.Opera.Chamber music.Sonata.Symphony.Booty bass.Primus.Porn groove.Satire.Slow jam.Club.Tango.Samba.Folklore.Ballad.Power ballad.Rhythmic Soul.Freestyle.Duet.Punk rock.Drum solo.A cappella.Euro-house.Dance hall.Goa music.Drum & bass.Club-house.Hardcore techno.Terror.Indie.Britpop.Negerpunk.Polsk punk.Beat.Christian gangsta rap.Heavy metal.Black metal.Crossover.Contemporary Christian.Christian rock.Merengue.Salsa.Thrash metal.Anime.Jpop.Synthpop.Christmas.Art rock.Baroque.Bhangra.Big beat.Breakbeat.Chillout.Downtempo.Dub.EBM.Eclectic.Electro.Electroclash.Emo.Experimental.Garage.Global.IDM.Illbient.Industro-Goth.Jam Band.Krautrock.Leftfield.Lounge.Math rock.New romantic.Nu-breakz.Post-punk.Post-rock.Psytrance.Shoegaze.Space rock.Trop rock.World music.Neoclassical.Audiobook.Audio theatre.Neue Deutsche Welle.Podcast.Indie rock.G-Funk.Dubstep.Garage rock.Psybient".split("."), lc = (e, t) => {
	let n = e.filePos;
	t.raw ??= {}, t.raw.TAG ??= U(e, 125), e.filePos = n;
	let r = uc(e, 30);
	r && (t.title ??= r);
	let i = uc(e, 30);
	i && (t.artist ??= i);
	let a = uc(e, 30);
	a && (t.album ??= a);
	let o = uc(e, 4), s = Number.parseInt(o, 10);
	Number.isInteger(s) && s > 0 && (t.date ??= new Date(String(s)));
	let c = U(e, 30), l;
	if (c[28] === 0 && c[29] !== 0) {
		let n = c[29];
		n > 0 && (t.trackNumber ??= n), e.skip(-30), l = uc(e, 28), e.skip(2);
	} else e.skip(-30), l = uc(e, 30);
	l && (t.comment ??= l);
	let u = W(e);
	u < cc.length && (t.genre ??= cc[u]);
}, uc = (e, t) => {
	let n = U(e, t), r = Me(n.indexOf(0), n.length), i = n.subarray(0, r), a = "";
	for (let e = 0; e < i.length; e++) a += String.fromCharCode(i[e]);
	return a.trimEnd();
}, dc = (e) => {
	let t = e.filePos, n = K(e, 3), r = W(e), i = W(e), a = W(e), o = G(e);
	if (n !== "ID3" || r === 255 || i === 255 || o & 2155905152) return e.filePos = t, null;
	let s = Ut(o);
	return a & oc.Footer && (s += 10), {
		majorVersion: r,
		revision: i,
		flags: a,
		size: s
	};
}, fc = (e, t, n) => {
	if (![
		2,
		3,
		4
	].includes(t.majorVersion)) {
		i._warn(`Unsupported ID3v2 major version: ${t.majorVersion}`);
		return;
	}
	let r = new pc(t, U(e, t.flags & oc.Footer ? t.size - 10 : t.size));
	if (t.flags & oc.Unsynchronisation && t.majorVersion === 3 && r.ununsynchronizeAll(), t.flags & oc.ExtendedHeader) {
		let e = r.readU32();
		t.majorVersion === 3 ? r.pos += e : r.pos += e - 4;
	}
	for (; r.pos <= r.bytes.length - r.frameHeaderSize();) {
		let e = r.readId3V2Frame();
		if (!e) break;
		let a = r.pos, o = r.pos + e.size, s = !1, c = !1, l = !1;
		if (t.majorVersion === 3 ? (s = !!(e.flags & 64), c = !!(e.flags & 128)) : t.majorVersion === 4 && (s = !!(e.flags & 4), c = !!(e.flags & 8), l = !!(e.flags & 2) || !!(t.flags & oc.Unsynchronisation)), s) {
			i._warn(`Skipping encrypted ID3v2 frame ${e.id}`), r.pos = o;
			continue;
		}
		if (c) {
			i._warn(`Skipping compressed ID3v2 frame ${e.id}`), r.pos = o;
			continue;
		}
		if (l && r.ununsynchronizeRegion(r.pos, o), n.raw ??= {}, e.id === "TXXX") {
			let e = n.raw.TXXX ??= {}, t = r.readId3V2TextEncoding(), i = r.readId3V2Text(t, o), a = r.readId3V2Text(t, o);
			e[i] ??= a;
		} else e.id[0] === "T" ? n.raw[e.id] ??= r.readId3V2EncodingAndText(o) : n.raw[e.id] ??= r.readBytes(e.size);
		switch (r.pos = a, e.id) {
			case "TIT2":
			case "TT2":
				n.title ??= r.readId3V2EncodingAndText(o);
				break;
			case "TIT3":
			case "TT3":
				n.description ??= r.readId3V2EncodingAndText(o);
				break;
			case "TPE1":
			case "TP1":
				n.artist ??= r.readId3V2EncodingAndText(o);
				break;
			case "TALB":
			case "TAL":
				n.album ??= r.readId3V2EncodingAndText(o);
				break;
			case "TPE2":
			case "TP2":
				n.albumArtist ??= r.readId3V2EncodingAndText(o);
				break;
			case "TRCK":
			case "TRK":
				{
					let e = r.readId3V2EncodingAndText(o).split("/"), t = Number.parseInt(e[0], 10), i = e[1] && Number.parseInt(e[1], 10);
					Number.isInteger(t) && t > 0 && (n.trackNumber ??= t), i && Number.isInteger(i) && i > 0 && (n.tracksTotal ??= i);
				}
				break;
			case "TPOS":
			case "TPA":
				{
					let e = r.readId3V2EncodingAndText(o).split("/"), t = Number.parseInt(e[0], 10), i = e[1] && Number.parseInt(e[1], 10);
					Number.isInteger(t) && t > 0 && (n.discNumber ??= t), i && Number.isInteger(i) && i > 0 && (n.discsTotal ??= i);
				}
				break;
			case "TCON":
			case "TCO":
				{
					let e = r.readId3V2EncodingAndText(o), t = /^\((\d+)\)/.exec(e);
					if (t) {
						let e = Number.parseInt(t[1]);
						if (cc[e] !== void 0) {
							n.genre ??= cc[e];
							break;
						}
					}
					if (t = /^\d+$/.exec(e), t) {
						let e = Number.parseInt(t[0]);
						if (cc[e] !== void 0) {
							n.genre ??= cc[e];
							break;
						}
					}
					n.genre ??= e;
				}
				break;
			case "TDRC":
			case "TDAT":
				{
					let e = r.readId3V2EncodingAndText(o), t = new Date(e);
					Number.isNaN(t.getTime()) || (n.date ??= t);
				}
				break;
			case "TYER":
			case "TYE":
				{
					let e = r.readId3V2EncodingAndText(o), t = Number.parseInt(e, 10);
					Number.isInteger(t) && (n.date ??= new Date(String(t)));
				}
				break;
			case "USLT":
			case "ULT":
				{
					let e = r.readU8();
					r.pos += 3, r.readId3V2Text(e, o), n.lyrics ??= r.readId3V2Text(e, o);
				}
				break;
			case "COMM":
			case "COM":
				{
					let e = r.readU8();
					r.pos += 3, r.readId3V2Text(e, o), n.comment ??= r.readId3V2Text(e, o);
				}
				break;
			case "APIC":
			case "PIC":
				{
					let e = r.readId3V2TextEncoding(), i;
					if (t.majorVersion === 2) {
						let e = r.readAscii(3);
						i = e === "PNG" ? "image/png" : e === "JPG" ? "image/jpeg" : "image/*";
					} else i = r.readId3V2Text(e, o);
					let a = r.readU8(), s = r.readId3V2Text(e, o).trimEnd(), c = o - r.pos;
					if (c >= 0) {
						let e = r.readBytes(c);
						n.images ||= [], n.images.push({
							data: e,
							mimeType: i,
							kind: a === 3 ? "coverFront" : a === 4 ? "coverBack" : "unknown",
							description: s
						});
					}
				}
				break;
			default:
				r.pos += e.size;
				break;
		}
		r.pos = o;
	}
}, pc = class {
	constructor(e, t) {
		this.header = e, this.bytes = t, this.pos = 0, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength);
	}
	frameHeaderSize() {
		return this.header.majorVersion === 2 ? 6 : 10;
	}
	ununsynchronizeAll() {
		let e = [];
		for (let t = 0; t < this.bytes.length; t++) {
			let n = this.bytes[t];
			e.push(n), n === 255 && t !== this.bytes.length - 1 && this.bytes[t] === 0 && t++;
		}
		this.bytes = new Uint8Array(e), this.view = new DataView(this.bytes.buffer);
	}
	ununsynchronizeRegion(e, t) {
		let n = [];
		for (let r = e; r < t; r++) {
			let e = this.bytes[r];
			n.push(e), e === 255 && r !== t - 1 && this.bytes[r + 1] === 0 && r++;
		}
		let r = this.bytes.subarray(0, e), i = this.bytes.subarray(t);
		this.bytes = new Uint8Array(r.length + n.length + i.length), this.bytes.set(r, 0), this.bytes.set(n, r.length), this.bytes.set(i, r.length + n.length), this.view = new DataView(this.bytes.buffer);
	}
	readBytes(e) {
		let t = this.bytes.subarray(this.pos, this.pos + e);
		return this.pos += e, t;
	}
	readU8() {
		let e = this.view.getUint8(this.pos);
		return this.pos += 1, e;
	}
	readU16() {
		let e = this.view.getUint16(this.pos, !1);
		return this.pos += 2, e;
	}
	readU24() {
		let e = this.view.getUint16(this.pos, !1), t = this.view.getUint8(this.pos + 2);
		return this.pos += 3, e * 256 + t;
	}
	readU32() {
		let e = this.view.getUint32(this.pos, !1);
		return this.pos += 4, e;
	}
	readAscii(e) {
		let t = "";
		for (let n = 0; n < e; n++) t += String.fromCharCode(this.view.getUint8(this.pos + n));
		return this.pos += e, t;
	}
	readId3V2Frame() {
		if (this.header.majorVersion === 2) {
			let e = this.readAscii(3);
			return e === "\0\0\0" ? null : {
				id: e,
				size: this.readU24(),
				flags: 0
			};
		} else {
			let e = this.readAscii(4);
			if (e === "\0\0\0\0") return null;
			let t = this.readU32(), n = this.header.majorVersion === 4 ? Ut(t) : t, r = this.readU16(), i = this.pos, a = (e) => {
				let t = this.pos + e;
				if (t > this.bytes.length) return !1;
				if (t <= this.bytes.length - this.frameHeaderSize()) {
					this.pos += e;
					let t = this.readAscii(4);
					if (t !== "\0\0\0\0" && !/[0-9A-Z]{4}/.test(t)) return !1;
				}
				return !0;
			};
			if (!a(n)) {
				let e = this.header.majorVersion === 4 ? t : Ut(t);
				a(e) && (n = e);
			}
			return this.pos = i, {
				id: e,
				size: n,
				flags: r
			};
		}
	}
	readId3V2TextEncoding() {
		let e = this.readU8();
		if (e > 3) throw Error(`Unsupported text encoding: ${e}`);
		return e;
	}
	readId3V2Text(e, t) {
		let n = this.pos, r = this.readBytes(t - this.pos);
		switch (e) {
			case sc.ISO_8859_1: {
				let e = "";
				for (let t = 0; t < r.length; t++) {
					let i = r[t];
					if (i === 0) {
						this.pos = n + t + 1;
						break;
					}
					e += String.fromCharCode(i);
				}
				return e;
			}
			case sc.UTF_16_WITH_BOM: if (r[0] === 255 && r[1] === 254) {
				let e = new TextDecoder("utf-16le"), t = Me(r.findIndex((e, t) => e === 0 && r[t + 1] === 0 && t % 2 == 0), r.length);
				return this.pos = n + Math.min(t + 2, r.length), e.decode(r.subarray(2, t));
			} else if (r[0] === 254 && r[1] === 255) {
				let e = new TextDecoder("utf-16be"), t = Me(r.findIndex((e, t) => e === 0 && r[t + 1] === 0 && t % 2 == 0), r.length);
				return this.pos = n + Math.min(t + 2, r.length), e.decode(r.subarray(2, t));
			} else {
				let e = Me(r.findIndex((e) => e === 0), r.length);
				return this.pos = n + Math.min(e + 1, r.length), m.decode(r.subarray(0, e));
			}
			case sc.UTF_16_BE_NO_BOM: {
				let e = new TextDecoder("utf-16be"), t = Me(r.findIndex((e, t) => e === 0 && r[t + 1] === 0 && t % 2 == 0), r.length);
				return this.pos = n + Math.min(t + 2, r.length), e.decode(r.subarray(0, t));
			}
			case sc.UTF_8: {
				let e = Me(r.findIndex((e) => e === 0), r.length);
				return this.pos = n + Math.min(e + 1, r.length), m.decode(r.subarray(0, e));
			}
		}
	}
	readId3V2EncodingAndText(e) {
		if (this.pos >= e) return "";
		let t = this.readId3V2TextEncoding();
		return this.readId3V2Text(t, e);
	}
}, mc = class {
	constructor(e) {
		this.helper = /* @__PURE__ */ new Uint8Array(8), this.helperView = p(this.helper), this.writer = e;
	}
	writeId3V2Tag(e) {
		let t = this.writer.getPos();
		this.writeAscii("ID3"), this.writeU8(4), this.writeU8(0), this.writeU8(0), this.writeSynchsafeU32(0);
		let n = this.writer.getPos(), r = /* @__PURE__ */ new Set();
		for (let { key: t, value: n } of Pe(e)) switch (t) {
			case "title":
				this.writeId3V2TextFrame("TIT2", n), r.add("TIT2");
				break;
			case "description":
				this.writeId3V2TextFrame("TIT3", n), r.add("TIT3");
				break;
			case "artist":
				this.writeId3V2TextFrame("TPE1", n), r.add("TPE1");
				break;
			case "album":
				this.writeId3V2TextFrame("TALB", n), r.add("TALB");
				break;
			case "albumArtist":
				this.writeId3V2TextFrame("TPE2", n), r.add("TPE2");
				break;
			case "trackNumber":
				{
					let t = e.tracksTotal === void 0 ? n.toString() : `${n}/${e.tracksTotal}`;
					this.writeId3V2TextFrame("TRCK", t), r.add("TRCK");
				}
				break;
			case "discNumber":
				{
					let t = e.discsTotal === void 0 ? n.toString() : `${n}/${e.discsTotal}`;
					this.writeId3V2TextFrame("TPOS", t), r.add("TPOS");
				}
				break;
			case "genre":
				this.writeId3V2TextFrame("TCON", n), r.add("TCON");
				break;
			case "date":
				this.writeId3V2TextFrame("TDRC", n.toISOString().slice(0, 10)), r.add("TDRC");
				break;
			case "lyrics":
				this.writeId3V2LyricsFrame(n), r.add("USLT");
				break;
			case "comment":
				this.writeId3V2CommentFrame(n), r.add("COMM");
				break;
			case "images":
				{
					let e = {
						coverFront: 3,
						coverBack: 4,
						unknown: 0
					};
					for (let t of n) {
						let n = e[t.kind] ?? 0, r = t.description ?? "";
						this.writeId3V2ApicFrame(t.mimeType, n, r, t.data);
					}
				}
				break;
			case "tracksTotal":
			case "discsTotal": break;
			case "raw": break;
			default: A(t);
		}
		if (e.raw) for (let t in e.raw) {
			let n = e.raw[t];
			if (n == null || t.length !== 4 || r.has(t)) continue;
			let i;
			if (typeof n == "string") if (g(n)) {
				i = new Uint8Array(n.length + 2), i[0] = sc.ISO_8859_1;
				for (let e = 0; e < n.length; e++) i[e + 1] = n.charCodeAt(e);
			} else {
				let e = h.encode(n);
				i = new Uint8Array(e.byteLength + 2), i[0] = sc.UTF_8, i.set(e, 1);
			}
			else if (n instanceof Uint8Array) i = n;
			else if (t === "TXXX" && Xe(n)) {
				for (let e in n) {
					let t = n[e], r = g(e) && g(t), i = r ? null : h.encode(e), a = r ? null : h.encode(t), o = r ? e.length : i.byteLength, s = r ? t.length : a.byteLength, c = 1 + o + 1 + s + 1;
					this.writeAscii("TXXX"), this.writeSynchsafeU32(c), this.writeU16(0), this.writeU8(r ? sc.ISO_8859_1 : sc.UTF_8), r ? (this.writeIsoString(e), this.writeIsoString(t)) : (this.writer.write(i), this.writeU8(0), this.writer.write(a), this.writeU8(0));
				}
				continue;
			} else continue;
			this.writeAscii(t), this.writeSynchsafeU32(i.byteLength), this.writeU16(0), this.writer.write(i);
		}
		let i = this.writer.getPos(), a = i - n;
		return this.writer.seek(t + 6), this.writeSynchsafeU32(a), this.writer.seek(i), a + 10;
	}
	writeU8(e) {
		this.helper[0] = e, this.writer.write(this.helper.subarray(0, 1));
	}
	writeU16(e) {
		this.helperView.setUint16(0, e, !1), this.writer.write(this.helper.subarray(0, 2));
	}
	writeU32(e) {
		this.helperView.setUint32(0, e, !1), this.writer.write(this.helper.subarray(0, 4));
	}
	writeAscii(e) {
		for (let t = 0; t < e.length; t++) this.helper[t] = e.charCodeAt(t);
		this.writer.write(this.helper.subarray(0, e.length));
	}
	writeSynchsafeU32(e) {
		this.writeU32(Ht(e));
	}
	writeIsoString(e) {
		let t = new Uint8Array(e.length + 1);
		for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
		this.writer.write(t);
	}
	writeUtf8String(e) {
		let t = h.encode(e);
		this.writer.write(t), this.writeU8(0);
	}
	writeId3V2TextFrame(e, t) {
		let n = g(t), r = 1 + (n ? t.length : h.encode(t).byteLength) + 1;
		this.writeAscii(e), this.writeSynchsafeU32(r), this.writeU16(0), this.writeU8(n ? sc.ISO_8859_1 : sc.UTF_8), n ? this.writeIsoString(t) : this.writeUtf8String(t);
	}
	writeId3V2LyricsFrame(e) {
		let t = g(e), n = 5 + e.length + 1;
		this.writeAscii("USLT"), this.writeSynchsafeU32(n), this.writeU16(0), this.writeU8(t ? sc.ISO_8859_1 : sc.UTF_8), this.writeAscii("und"), t ? (this.writeIsoString(""), this.writeIsoString(e)) : (this.writeUtf8String(""), this.writeUtf8String(e));
	}
	writeId3V2CommentFrame(e) {
		let t = g(e), n = 5 + (t ? e.length : h.encode(e).byteLength) + 1;
		this.writeAscii("COMM"), this.writeSynchsafeU32(n), this.writeU16(0), this.writeU8(t ? sc.ISO_8859_1 : sc.UTF_8), this.writeU8(117), this.writeU8(110), this.writeU8(100), t ? (this.writeIsoString(""), this.writeIsoString(e)) : (this.writeUtf8String(""), this.writeUtf8String(e));
	}
	writeId3V2ApicFrame(e, t, n, r) {
		let i = g(e) && g(n), a = i ? n.length : h.encode(n).byteLength, o = 1 + e.length + 1 + 1 + a + 1 + r.byteLength;
		this.writeAscii("APIC"), this.writeSynchsafeU32(o), this.writeU16(0), this.writeU8(i ? sc.ISO_8859_1 : sc.UTF_8), i ? this.writeIsoString(e) : this.writeUtf8String(e), this.writeU8(t), i ? this.writeIsoString(n) : this.writeUtf8String(n), this.writer.write(r);
	}
}, hc = class {
	constructor(e) {
		this.mutex = new T(), this.trackTimestampInfo = /* @__PURE__ */ new WeakMap(), this.output = e;
	}
	onTrackClose(e) {}
	validateTimestamp(e, t, n) {
		if (t < 0) throw Error(`Timestamps must be non-negative (got ${t}s).`);
		let r = this.trackTimestampInfo.get(e);
		if (r) {
			if (n && (r.maxTimestampBeforeLastKeyPacket = r.maxTimestamp), r.maxTimestampBeforeLastKeyPacket !== null && t < r.maxTimestampBeforeLastKeyPacket) throw Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${t}s, but largest timestamp is ${r.maxTimestampBeforeLastKeyPacket}s.`);
			r.maxTimestamp = Math.max(r.maxTimestamp, t);
		} else {
			if (!n) throw Error("First packet must be a key packet.");
			r = {
				maxTimestamp: t,
				maxTimestampBeforeLastKeyPacket: null
			}, this.trackTimestampInfo.set(e, r);
		}
	}
}, gc = /* #__PURE__ */ new Uint8Array([
	102,
	76,
	97,
	67
]), _c = 38, vc = 34, yc = class extends hc {
	constructor(e, t) {
		super(e), this.metadataWritten = !1, this.blockSizes = [], this.frameSizes = [], this.sampleRate = null, this.channels = null, this.bitsPerSample = null, this.format = t;
	}
	async start() {
		let e = await this.mutex.acquire();
		this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.writer.write(gc), e();
	}
	writeHeader({ bitsPerSample: e, minimumBlockSize: t, maximumBlockSize: n, minimumFrameSize: r, maximumFrameSize: i, sampleRate: o, channels: s, totalSamples: c }) {
		a(this.writer.getPos() === 4);
		let l = !et(this.output._metadataTags), u = new P(/* @__PURE__ */ new Uint8Array(4));
		u.writeBits(1, Number(!l)), u.writeBits(7, Fn.STREAMINFO), u.writeBits(24, vc), this.writer.write(u.bytes);
		let d = new P(/* @__PURE__ */ new Uint8Array(18));
		if (d.writeBits(16, t), d.writeBits(16, n), d.writeBits(24, r), d.writeBits(24, i), d.writeBits(20, o), d.writeBits(3, s - 1), d.writeBits(5, e - 1), c >= 2 ** 32) throw Error("This muxer only supports writing up to 2 ** 32 samples");
		d.writeBits(4, 0), d.writeBits(32, c), this.writer.write(d.bytes), this.writer.write(/* @__PURE__ */ new Uint8Array(16));
	}
	writePictureBlock(e) {
		let t = 32 + e.mimeType.length + (e.description?.length ?? 0) + e.data.length, n = new Uint8Array(t), r = 0, i = p(n);
		i.setUint32(r, e.kind === "coverFront" ? 3 : e.kind === "coverBack" ? 4 : 0), r += 4, i.setUint32(r, e.mimeType.length), r += 4, n.set(h.encode(e.mimeType), 8), r += e.mimeType.length, i.setUint32(r, e.description?.length ?? 0), r += 4, n.set(h.encode(e.description ?? ""), r), r += e.description?.length ?? 0, r += 16, i.setUint32(r, e.data.length), r += 4, n.set(e.data, r), r += e.data.length, a(r === t);
		let o = new P(/* @__PURE__ */ new Uint8Array(4));
		o.writeBits(1, 0), o.writeBits(7, Fn.PICTURE), o.writeBits(24, t), this.writer.write(o.bytes), this.writer.write(n);
	}
	writeVorbisCommentAndPictureBlock() {
		if (this.format._options.appendOnly || this.writer.seek(_c + gc.byteLength), et(this.output._metadataTags)) {
			this.metadataWritten = !0;
			return;
		}
		let e = this.output._metadataTags.images ?? [];
		for (let t of e) this.writePictureBlock(t);
		let t = Ln(/* @__PURE__ */ new Uint8Array(), this.output._metadataTags, !1), n = new P(/* @__PURE__ */ new Uint8Array(4));
		n.writeBits(1, 1), n.writeBits(7, Fn.VORBIS_COMMENT), n.writeBits(24, t.length), this.writer.write(n.bytes), this.writer.write(t), this.metadataWritten = !0;
	}
	async getMimeType() {
		return "audio/flac";
	}
	async addEncodedVideoPacket() {
		throw Error("FLAC does not support video.");
	}
	async addEncodedAudioPacket(e, t, n) {
		let r = await this.mutex.acquire();
		try {
			if (this.validateTimestamp(e, t.timestamp, t.type === "key"), this.sampleRate === null) {
				Nt(n), a(n), a(n.decoderConfig), a(n.decoderConfig.description), this.sampleRate = n.decoderConfig.sampleRate, this.channels = n.decoderConfig.numberOfChannels;
				let e = new P(f(n.decoderConfig.description));
				e.skipBits(167);
				let t = e.readBits(5) + 1;
				this.bitsPerSample = t, this.format._options.appendOnly && this.writeHeader({
					minimumBlockSize: 16,
					maximumBlockSize: 65535,
					minimumFrameSize: 0,
					maximumFrameSize: 0,
					sampleRate: this.sampleRate,
					channels: this.channels,
					bitsPerSample: this.bitsPerSample,
					totalSamples: 0
				});
			}
			this.metadataWritten || this.writeVorbisCommentAndPictureBlock();
			let r = Us.tempFromBytes(t.data);
			r.skip(2);
			let i = Li(new P(U(r, 2)).readBits(4));
			if (i === null) throw Error("Invalid FLAC frame: Invalid block size.");
			zi(r);
			let o = Bi(r, i);
			this.format._options.appendOnly || (this.blockSizes.push(o), this.frameSizes.push(t.data.length));
			let s = this.writer.getPos();
			this.writer.write(t.data), this.format._options.onFrame && this.format._options.onFrame(t.data, s), await this.writer.flush();
		} finally {
			r();
		}
	}
	addSubtitleCue() {
		throw Error("FLAC does not support subtitles.");
	}
	async finalize() {
		let e = await this.mutex.acquire();
		if (!this.format._options.appendOnly) {
			let e = Infinity, t = 0, n = Infinity, r = 0, i = 0;
			for (let a = 0; a < this.blockSizes.length; a++) n = Math.min(n, this.frameSizes[a]), r = Math.max(r, this.frameSizes[a]), t = Math.max(t, this.blockSizes[a]), i += this.blockSizes[a], a !== this.blockSizes.length - 1 && (e = Math.min(e, this.blockSizes[a]));
			a(this.sampleRate !== null), a(this.channels !== null), a(this.bitsPerSample !== null), this.writer.seek(4), this.writeHeader({
				minimumBlockSize: e,
				maximumBlockSize: t,
				minimumFrameSize: n,
				maximumFrameSize: r,
				sampleRate: this.sampleRate,
				channels: this.channels,
				bitsPerSample: this.bitsPerSample,
				totalSamples: i
			});
		}
		e();
	}
}, bc = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g, xc = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/, Sc = (e) => {
	let t = xc.exec(e);
	if (!t) throw Error("Expected match.");
	return 3600 * 1e3 * Number(t[1] || "0") + 60 * 1e3 * Number(t[2]) + 1e3 * Number(t[3]) + Number(t[4]);
}, Cc = (e) => {
	let t = Math.floor(e / (3600 * 1e3)), n = Math.floor(e % (3600 * 1e3) / (60 * 1e3)), r = Math.floor(e % (60 * 1e3) / 1e3), i = e % 1e3;
	return t.toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0") + ":" + r.toString().padStart(2, "0") + "." + i.toString().padStart(3, "0");
}, wc = class {
	constructor(e) {
		this.writer = e, this.helper = /* @__PURE__ */ new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = /* @__PURE__ */ new WeakMap();
	}
	writeU32(e) {
		this.helperView.setUint32(0, e, !1), this.writer.write(this.helper.subarray(0, 4));
	}
	writeU64(e) {
		this.helperView.setUint32(0, Math.floor(e / 2 ** 32), !1), this.helperView.setUint32(4, e, !1), this.writer.write(this.helper.subarray(0, 8));
	}
	writeAscii(e) {
		for (let t = 0; t < e.length; t++) this.helperView.setUint8(t % 8, e.charCodeAt(t)), t % 8 == 7 && this.writer.write(this.helper);
		e.length % 8 != 0 && this.writer.write(this.helper.subarray(0, e.length % 8));
	}
	writeBox(e) {
		if (this.offsets.set(e, this.writer.getPos()), e.contents && !e.children) this.writeBoxHeader(e, e.size ?? e.contents.byteLength + 8), this.writer.write(e.contents);
		else {
			let t = this.writer.getPos();
			if (this.writeBoxHeader(e, 0), e.contents && this.writer.write(e.contents), e.children) for (let t of e.children) t && this.writeBox(t);
			let n = this.writer.getPos(), r = e.size ?? n - t;
			this.writer.seek(t), this.writeBoxHeader(e, r), this.writer.seek(n);
		}
	}
	writeBoxHeader(e, t) {
		this.writeU32(e.largeSize ? 1 : t), this.writeAscii(e.type), e.largeSize && this.writeU64(t);
	}
	measureBoxHeader(e) {
		return 8 + (e.largeSize ? 8 : 0);
	}
	patchBox(e) {
		let t = this.offsets.get(e);
		a(t !== void 0);
		let n = this.writer.getPos();
		this.writer.seek(t), this.writeBox(e), this.writer.seek(n);
	}
	measureBox(e) {
		if (e.contents && !e.children) return this.measureBoxHeader(e) + e.contents.byteLength;
		{
			let t = this.measureBoxHeader(e);
			if (e.contents && (t += e.contents.byteLength), e.children) for (let n of e.children) n && (t += this.measureBox(n));
			return t;
		}
	}
}, q = /* #__PURE__ */ new Uint8Array(8), Tc = /* #__PURE__ */ new DataView(q.buffer), Ec = (e) => [(e % 256 + 256) % 256], J = (e) => (Tc.setUint16(0, e, !1), [q[0], q[1]]), Dc = (e) => (Tc.setInt16(0, e, !1), [q[0], q[1]]), Oc = (e) => (Tc.setUint32(0, e, !1), [
	q[1],
	q[2],
	q[3]
]), Y = (e) => (Tc.setUint32(0, e, !1), [
	q[0],
	q[1],
	q[2],
	q[3]
]), kc = (e) => (Tc.setInt32(0, e, !1), [
	q[0],
	q[1],
	q[2],
	q[3]
]), Ac = (e) => (Tc.setUint32(0, Math.floor(e / 2 ** 32), !1), Tc.setUint32(4, e, !1), [
	q[0],
	q[1],
	q[2],
	q[3],
	q[4],
	q[5],
	q[6],
	q[7]
]), jc = (e) => (Tc.setInt32(0, Math.floor(e / 2 ** 32), !1), Tc.setUint32(4, e, !1), [
	q[0],
	q[1],
	q[2],
	q[3],
	q[4],
	q[5],
	q[6],
	q[7]
]), Mc = (e) => (Tc.setInt16(0, 2 ** 8 * e, !1), [q[0], q[1]]), Nc = (e) => (Tc.setInt32(0, 2 ** 16 * e, !1), [
	q[0],
	q[1],
	q[2],
	q[3]
]), Pc = (e) => (Tc.setInt32(0, 2 ** 30 * e, !1), [
	q[0],
	q[1],
	q[2],
	q[3]
]), Fc = (e, t) => {
	let n = [], r = e;
	do {
		let e = r & 127;
		r >>= 7, n.length > 0 && (e |= 128), n.push(e), t !== void 0 && t--;
	} while (r > 0 || t);
	return n.reverse();
}, X = (e, t = !1) => {
	let n = Array(e.length).fill(null).map((t, n) => e.charCodeAt(n));
	return t && n.push(0), n;
}, Ic = (e) => {
	let t = Math.PI / 180 * e, n = Math.round(Math.cos(t)), r = Math.round(Math.sin(t));
	return [
		n,
		r,
		0,
		-r,
		n,
		0,
		0,
		0,
		1
	];
}, Lc = /* #__PURE__ */ Ic(0), Rc = (e) => [
	Nc(e[0]),
	Nc(e[1]),
	Pc(e[2]),
	Nc(e[3]),
	Nc(e[4]),
	Pc(e[5]),
	Nc(e[6]),
	Nc(e[7]),
	Pc(e[8])
], Z = (e, t, n) => ({
	type: e,
	contents: t && new Uint8Array(t.flat(10)),
	children: n
}), Q = (e, t, n, r, i) => Z(e, [
	Ec(t),
	Oc(n),
	r ?? []
], i), zc = (e) => e.isQuickTime ? Z("ftyp", [
	X("qt  "),
	Y(512),
	X("qt  ")
]) : e.fragmented ? e.cmaf ? Z("ftyp", [
	X("iso5"),
	Y(512),
	X("iso5"),
	X("iso6"),
	X("mp41"),
	X("cmfc"),
	X("dash")
]) : Z("ftyp", [
	X("iso5"),
	Y(512),
	X("iso5"),
	X("iso6"),
	X("mp41")
]) : Z("ftyp", [
	X("isom"),
	Y(512),
	X("isom"),
	e.holdsAvc ? X("avc1") : [],
	X("mp41")
]), Bc = () => Z("styp", [
	X("iso5"),
	Y(0),
	X("iso5"),
	X("iso6"),
	X("mp41"),
	X("cmfc"),
	X("dash")
]), Vc = (e, t) => {
	let n = e.maxWrittenEndTimestamp - e.minWrittenTimestamp;
	return Number.isFinite(n) || (n = 0), Q("sidx", 1, 0, [
		Y(1),
		Y(vu),
		Ac($(e.minWrittenTimestamp, vu)),
		Ac(0),
		J(0),
		J(1),
		Y(t & 2147483647),
		Y($(n, vu)),
		Y(0)
	]);
}, Hc = (e) => ({
	type: "mdat",
	largeSize: e
}), Uc = (e) => ({
	type: "free",
	size: e
}), Wc = (e) => Z("moov", void 0, [
	Gc(e.creationTime, e.trackDatas),
	...e.trackDatas.map((t) => qc(t, e.creationTime)),
	e.isFragmented ? Pl(e.trackDatas) : null,
	Yl(e)
]), Gc = (e, t) => {
	let n = Math.max(0, ...t.map((e) => $(Kc(e), vu) + $(e.startTimestampOffset ?? 0, vu))), r = Math.max(0, ...t.map((e) => e.track.id)) + 1, i = !c(e) || !c(n), a = i ? Ac : Y;
	return Q("mvhd", +i, 0, [
		a(e),
		a(e),
		Y(vu),
		a(n),
		Nc(1),
		Mc(1),
		Array(10).fill(0),
		Rc(Lc),
		Array(24).fill(0),
		Y(r)
	]);
}, Kc = (e) => {
	if (e.samples.length === 0) return 0;
	let t = Infinity, n = -Infinity;
	for (let r = 0; r < e.samples.length; r++) {
		let i = e.samples[r];
		i.timestamp < t && (t = i.timestamp), i.timestamp + i.duration > n && (n = i.timestamp + i.duration);
	}
	return t === Infinity ? 0 : n - t;
}, qc = (e, t) => {
	let n = bu(e), r = e.startTimestampOffset !== null && e.startTimestampOffset > 0;
	return Z("trak", void 0, [
		Jc(e, t),
		r ? Yc(e, e.startTimestampOffset) : null,
		Xc(e, t),
		n.name === void 0 ? null : Z("udta", void 0, [Z("name", [...h.encode(n.name)])])
	]);
}, Jc = (e, t) => {
	let n = $(Kc(e), vu) + $(e.startTimestampOffset ?? 0, vu), r = !c(t) || !c(n), i = r ? Ac : Y, a;
	if (e.type === "video") {
		let t = e.track.metadata.rotation;
		a = Ic(t ?? 0);
	} else a = Lc;
	let o = 2;
	return e.track.metadata.disposition?.default !== !1 && (o |= 1), Q("tkhd", +r, o, [
		i(t),
		i(t),
		Y(e.track.id),
		Y(0),
		i(n),
		Array(8).fill(0),
		J(0),
		J(e.track.id),
		Mc(+(e.type === "audio")),
		J(0),
		Rc(a),
		Nc(e.type === "video" ? e.info.width : 0),
		Nc(e.type === "video" ? e.info.height : 0)
	]);
}, Yc = (e, t) => {
	let n = $(t, vu), r = $(Kc(e), vu), i = !c(n) || !c(r), a = i ? Ac : Y, o = i ? jc : kc;
	return Z("edts", void 0, [Q("elst", +!!i, 0, [
		Y(2),
		a(n),
		o(-1),
		Nc(1),
		a(r),
		o(0),
		Nc(1)
	])]);
}, Xc = (e, t) => Z("mdia", void 0, [
	Zc(e, t),
	el(!0, Qc[e.type], $c[e.type]),
	tl(e)
]), Zc = (e, t) => {
	let n = $(Kc(e), e.timescale), r = !c(t) || !c(n), i = r ? Ac : Y;
	return Q("mdhd", +r, 0, [
		i(t),
		i(t),
		Y(e.timescale),
		i(n),
		J(lu(e.track.metadata.languageCode ?? "und")),
		J(0)
	]);
}, Qc = {
	video: "vide",
	audio: "soun",
	subtitle: "text"
}, $c = {
	video: "MediabunnyVideoHandler",
	audio: "MediabunnySoundHandler",
	subtitle: "MediabunnyTextHandler"
}, el = (e, t, n, r = "\0\0\0\0") => Q("hdlr", 0, 0, [
	e ? X("mhlr") : Y(0),
	X(t),
	X(r),
	Y(0),
	Y(0),
	X(n, !0)
]), tl = (e) => Z("minf", void 0, [
	nl[e.type](),
	rl(),
	ol(e)
]), nl = {
	video: () => Q("vmhd", 0, 1, [
		J(0),
		J(0),
		J(0),
		J(0)
	]),
	audio: () => Q("smhd", 0, 0, [J(0), J(0)]),
	subtitle: () => Q("nmhd", 0, 0)
}, rl = () => Z("dinf", void 0, [il()]), il = () => Q("dref", 0, 0, [Y(1)], [al()]), al = () => Q("url ", 0, 1), ol = (e) => {
	let t = e.compositionTimeOffsetTable.length > 1 || e.compositionTimeOffsetTable.some((e) => e.sampleCompositionTimeOffset !== 0);
	return Z("stbl", void 0, [
		sl(e),
		Dl(e),
		t ? Ml(e) : null,
		t ? Nl(e) : null,
		kl(e),
		Al(e),
		jl(e),
		Ol(e)
	]);
}, sl = (e) => {
	let t;
	if (e.type === "video") t = cl(ru(e.track.source._codec, e.info.decoderConfig.codec), e);
	else if (e.type === "audio") {
		let n = au(e.track.source._codec, e.muxer.isQuickTime);
		a(n), t = hl(n, e);
	} else e.type === "subtitle" && (t = Tl(su[e.track.source._codec], e));
	return a(t), Q("stsd", 0, 0, [Y(1)], [t]);
}, cl = (e, t) => Z(e, [
	[
		,
		,
		,
		,
		,
		,
	].fill(0),
	J(1),
	J(0),
	J(0),
	Array(12).fill(0),
	J(t.info.width),
	J(t.info.height),
	Y(4718592),
	Y(4718592),
	Y(0),
	J(1),
	Array(32).fill(0),
	J(24),
	Dc(65535)
], [
	iu[t.track.source._codec](t),
	ll(t),
	w(t.info.decoderConfig.colorSpace) ? ul(t) : null
]), ll = (e) => e.info.pixelAspectRatio.num === e.info.pixelAspectRatio.den ? null : Z("pasp", [Y(e.info.pixelAspectRatio.num), Y(e.info.pixelAspectRatio.den)]), ul = (e) => Z("colr", [
	X(e.muxer.isQuickTime ? "nclc" : "nclx"),
	J(v[e.info.decoderConfig.colorSpace.primaries]),
	J(b[e.info.decoderConfig.colorSpace.transfer]),
	J(S[e.info.decoderConfig.colorSpace.matrix]),
	e.muxer.isQuickTime ? [] : Ec(!!e.info.decoderConfig.colorSpace.fullRange << 7)
]), dl = (e) => e.info.decoderConfig && Z("avcC", [...f(e.info.decoderConfig.description)]), fl = (e) => e.info.decoderConfig && Z("hvcC", [...f(e.info.decoderConfig.description)]), pl = (e) => {
	if (!e.info.decoderConfig) return null;
	let t = e.info.decoderConfig, n = t.codec.split("."), r = Number(n[1]), i = Number(n[2]), a = Number(n[3]), o = n[4] ? Number(n[4]) : 1, s = n[8] ? Number(n[8]) : Number(t.colorSpace?.fullRange ?? 0), c = (a << 4) + (o << 1) + s, l = n[5] ? Number(n[5]) : t.colorSpace?.primaries ? v[t.colorSpace.primaries] : 2, u = n[6] ? Number(n[6]) : t.colorSpace?.transfer ? b[t.colorSpace.transfer] : 2, d = n[7] ? Number(n[7]) : t.colorSpace?.matrix ? S[t.colorSpace.matrix] : 2;
	return Q("vpcC", 1, 0, [
		Ec(r),
		Ec(i),
		Ec(c),
		Ec(l),
		Ec(u),
		Ec(d),
		J(0)
	]);
}, ml = (e) => Z("av1C", _t(e.info.decoderConfig.codec)), hl = (e, t) => {
	let n = 0, r, i = 16, a = I.includes(t.track.source._codec);
	if (a) {
		let e = t.track.source._codec, { sampleSize: r } = Ct(e);
		i = 8 * r, i > 16 && (n = 1);
	}
	if (t.muxer.isQuickTime && (n = 1), n === 0) r = [
		[
			,
			,
			,
			,
			,
			,
		].fill(0),
		J(1),
		J(n),
		J(0),
		Y(0),
		J(t.info.numberOfChannels),
		J(i),
		J(0),
		J(0),
		J(t.info.sampleRate < 2 ** 16 ? t.info.sampleRate : 0),
		J(0)
	];
	else {
		let e = a ? 0 : -2;
		r = [
			[
				,
				,
				,
				,
				,
				,
			].fill(0),
			J(1),
			J(n),
			J(0),
			Y(0),
			J(t.info.numberOfChannels),
			J(Math.min(i, 16)),
			Dc(e),
			J(0),
			J(t.info.sampleRate < 2 ** 16 ? t.info.sampleRate : 0),
			J(0),
			a ? [
				Y(1),
				Y(i / 8),
				Y(t.info.numberOfChannels * i / 8)
			] : [
				Y(0),
				Y(0),
				Y(0)
			],
			Y(2)
		];
	}
	return Z(e, r, [ou(t.track.source._codec, t.muxer.isQuickTime)?.(t) ?? null]);
}, gl = (e) => {
	let t;
	switch (e.track.source._codec) {
		case "aac":
			t = 64;
			break;
		case "mp3":
			t = 107;
			break;
		case "vorbis":
			t = 221;
			break;
		default: throw Error(`Unhandled audio codec: ${e.track.source._codec}`);
	}
	let n = [
		...Ec(t),
		...Ec(21),
		...Oc(0),
		...Y(0),
		...Y(0)
	];
	if (e.info.decoderConfig.description) {
		let t = f(e.info.decoderConfig.description);
		n = [
			...n,
			...Ec(5),
			...Fc(t.byteLength),
			...t
		];
	}
	return n = [
		...J(1),
		...Ec(0),
		...Ec(4),
		...Fc(n.length),
		...n,
		...Ec(6),
		...Ec(1),
		...Ec(2)
	], n = [
		...Ec(3),
		...Fc(n.length),
		...n
	], Q("esds", 0, 0, n);
}, _l = (e) => Z("wave", void 0, [
	vl(e),
	yl(e),
	Z("\0\0\0\0")
]), vl = (e) => Z("frma", [X(au(e.track.source._codec, e.muxer.isQuickTime))]), yl = (e) => {
	let { littleEndian: t } = Ct(e.track.source._codec);
	return Z("enda", [J(+t)]);
}, bl = (e) => {
	let t = e.info.numberOfChannels, n = 3840, r = e.info.sampleRate, i = 0, o = 0, s = /* @__PURE__ */ new Uint8Array(), c = e.info.decoderConfig?.description;
	if (c) {
		a(c.byteLength >= 18);
		let e = An(f(c));
		t = e.outputChannelCount, n = e.preSkip, r = e.inputSampleRate, i = e.outputGain, o = e.channelMappingFamily, e.channelMappingTable && (s = e.channelMappingTable);
	}
	return Z("dOps", [
		Ec(0),
		Ec(t),
		J(n),
		Y(r),
		Dc(i),
		Ec(o),
		...s
	]);
}, xl = (e) => {
	let t = e.info.decoderConfig?.description;
	return a(t), Q("dfLa", 0, 0, [...f(t).subarray(4)]);
}, Sl = (e) => {
	let { littleEndian: t, sampleSize: n } = Ct(e.track.source._codec);
	return Q("pcmC", 0, 0, [Ec(+t), Ec(8 * n)]);
}, Cl = (e) => {
	let t = zn(e.info.firstPacket.data);
	if (!t) throw Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
	let n = /* @__PURE__ */ new Uint8Array(3), r = new P(n);
	return r.writeBits(2, t.fscod), r.writeBits(5, t.bsid), r.writeBits(3, t.bsmod), r.writeBits(3, t.acmod), r.writeBits(1, t.lfeon), r.writeBits(5, t.bitRateCode), r.writeBits(5, 0), Z("dac3", [...n]);
}, wl = (e) => {
	let t = Un(e.info.firstPacket.data);
	if (!t) throw Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
	let n = 16;
	for (let e of t.substreams) n += 23, e.numDepSub > 0 ? n += 9 : n += 1;
	let r = Math.ceil(n / 8), i = new Uint8Array(r), a = new P(i);
	a.writeBits(13, t.dataRate), a.writeBits(3, t.substreams.length - 1);
	for (let e of t.substreams) a.writeBits(2, e.fscod), a.writeBits(5, e.bsid), a.writeBits(1, 0), a.writeBits(1, 0), a.writeBits(3, e.bsmod), a.writeBits(3, e.acmod), a.writeBits(1, e.lfeon), a.writeBits(3, 0), a.writeBits(4, e.numDepSub), e.numDepSub > 0 ? a.writeBits(9, e.chanLoc) : a.writeBits(1, 0);
	return Z("dec3", [...i]);
}, Tl = (e, t) => Z(e, [[
	,
	,
	,
	,
	,
	,
].fill(0), J(1)], [cu[t.track.source._codec](t)]), El = (e) => Z("vttC", [...h.encode(e.info.config.description)]), Dl = (e) => Q("stts", 0, 0, [Y(e.timeToSampleTable.length), e.timeToSampleTable.map((e) => [Y(e.sampleCount), Y(e.sampleDelta)])]), Ol = (e) => {
	if (e.samples.every((e) => e.type === "key")) return null;
	let t = [...e.samples.entries()].filter(([, e]) => e.type === "key");
	return Q("stss", 0, 0, [Y(t.length), t.map(([e]) => Y(e + 1))]);
}, kl = (e) => Q("stsc", 0, 0, [Y(e.compactlyCodedChunkTable.length), e.compactlyCodedChunkTable.map((e) => [
	Y(e.firstChunk),
	Y(e.samplesPerChunk),
	Y(1)
])]), Al = (e) => {
	if (e.type === "audio" && e.info.requiresPcmTransformation) {
		let { sampleSize: t } = Ct(e.track.source._codec);
		return Q("stsz", 0, 0, [Y(t * e.info.numberOfChannels), Y(e.samples.reduce((t, n) => t + $(n.duration, e.timescale), 0))]);
	}
	return Q("stsz", 0, 0, [
		Y(0),
		Y(e.samples.length),
		e.samples.map((e) => Y(e.size))
	]);
}, jl = (e) => e.finalizedChunks.length > 0 && s(e.finalizedChunks).offset >= 2 ** 32 ? Q("co64", 0, 0, [Y(e.finalizedChunks.length), e.finalizedChunks.map((e) => Ac(e.offset))]) : Q("stco", 0, 0, [Y(e.finalizedChunks.length), e.finalizedChunks.map((e) => Y(e.offset))]), Ml = (e) => Q("ctts", 1, 0, [Y(e.compositionTimeOffsetTable.length), e.compositionTimeOffsetTable.map((e) => [Y(e.sampleCount), kc(e.sampleCompositionTimeOffset)])]), Nl = (e) => {
	let t = Infinity, n = -Infinity, r = Infinity, i = -Infinity;
	a(e.compositionTimeOffsetTable.length > 0), a(e.samples.length > 0);
	for (let r = 0; r < e.compositionTimeOffsetTable.length; r++) {
		let i = e.compositionTimeOffsetTable[r];
		t = Math.min(t, i.sampleCompositionTimeOffset), n = Math.max(n, i.sampleCompositionTimeOffset);
	}
	for (let t = 0; t < e.samples.length; t++) {
		let n = e.samples[t];
		r = Math.min(r, $(n.timestamp, e.timescale)), i = Math.max(i, $(n.timestamp + n.duration, e.timescale));
	}
	let o = Math.max(-t, 0);
	return i >= 2 ** 31 ? null : Q("cslg", 0, 0, [
		kc(o),
		kc(t),
		kc(n),
		kc(r),
		kc(i)
	]);
}, Pl = (e) => Z("mvex", void 0, e.map(Fl)), Fl = (e) => Q("trex", 0, 0, [
	Y(e.track.id),
	Y(1),
	Y(0),
	Y(0),
	Y(0)
]), Il = (e, t) => Z("moof", void 0, [Ll(e), ...t.map(zl)]), Ll = (e) => Q("mfhd", 0, 0, [Y(e)]), Rl = (e) => {
	let t = 0, n = 0, r = e.type === "delta";
	return n |= +r, r ? t |= 1 : t |= 2, t << 24 | n << 16 | 0;
}, zl = (e) => Z("traf", void 0, [
	Bl(e),
	Vl(e),
	Hl(e)
]), Bl = (e) => {
	a(e.currentChunk);
	let t = 0;
	t |= 8, t |= 16, t |= 32, t |= 131072;
	let n = e.currentChunk.samples[1] ?? e.currentChunk.samples[0], r = {
		duration: n.timescaleUnitsToNextSample,
		size: n.size,
		flags: Rl(n)
	};
	return Q("tfhd", 0, t, [
		Y(e.track.id),
		Y(r.duration),
		Y(r.size),
		Y(r.flags)
	]);
}, Vl = (e) => (a(e.currentChunk), Q("tfdt", 1, 0, [Ac($(e.currentChunk.startTimestamp, e.timescale))])), Hl = (e) => {
	a(e.currentChunk);
	let t = e.currentChunk.samples.map((e) => e.timescaleUnitsToNextSample), n = e.currentChunk.samples.map((e) => e.size), r = e.currentChunk.samples.map(Rl), i = e.currentChunk.samples.map((t) => $(t.timestamp - t.decodeTimestamp, e.timescale)), o = new Set(t), s = new Set(n), c = new Set(r), l = new Set(i), u = c.size === 2 && r[0] !== r[1], d = o.size > 1, f = s.size > 1, p = !u && c.size > 1, m = l.size > 1 || [...l].some((e) => e !== 0), h = 0;
	return h |= 1, h |= 4 * u, h |= 256 * d, h |= 512 * f, h |= 1024 * p, h |= 2048 * m, Q("trun", 1, h, [
		Y(e.currentChunk.samples.length),
		Y(e.currentChunk.offset - e.currentChunk.moofOffset || 0),
		u ? Y(r[0]) : [],
		e.currentChunk.samples.map((e, a) => [
			d ? Y(t[a]) : [],
			f ? Y(n[a]) : [],
			p ? Y(r[a]) : [],
			m ? kc(i[a]) : []
		])
	]);
}, Ul = (e) => Z("mfra", void 0, [...e.map(Wl), Gl()]), Wl = (e, t) => Q("tfra", 1, 0, [
	Y(e.track.id),
	Y(63),
	Y(e.finalizedChunks.length),
	e.finalizedChunks.map((n) => [
		Ac($(n.samples[0].timestamp, e.timescale)),
		Ac(n.moofOffset),
		Y(t + 1),
		Y(1),
		Y(1)
	])
]), Gl = () => Q("mfro", 0, 0, [Y(0)]), Kl = () => Z("vtte"), ql = (e, t, n, r, i) => Z("vttc", void 0, [
	i === null ? null : Z("vsid", [kc(i)]),
	n === null ? null : Z("iden", [...h.encode(n)]),
	t === null ? null : Z("ctim", [...h.encode(Cc(t))]),
	r === null ? null : Z("sttg", [...h.encode(r)]),
	Z("payl", [...h.encode(e)])
]), Jl = (e) => Z("vtta", [...h.encode(e)]), Yl = (e) => {
	let t = [], n = e.format._options.metadataFormat ?? "auto", r = e.output._metadataTags;
	if (n === "mdir" || n === "auto" && !e.isQuickTime) {
		let e = eu(r);
		e && t.push(e);
	} else if (n === "mdta") {
		let e = tu(r);
		e && t.push(e);
	} else (n === "udta" || n === "auto" && e.isQuickTime) && Xl(t, e.output._metadataTags);
	return t.length === 0 ? null : Z("udta", void 0, t);
}, Xl = (e, t) => {
	for (let { key: n, value: r } of Pe(t)) switch (n) {
		case "title":
			e.push(Zl("©nam", r));
			break;
		case "description":
			e.push(Zl("©des", r));
			break;
		case "artist":
			e.push(Zl("©ART", r));
			break;
		case "album":
			e.push(Zl("©alb", r));
			break;
		case "albumArtist":
			e.push(Zl("albr", r));
			break;
		case "genre":
			e.push(Zl("©gen", r));
			break;
		case "date":
			e.push(Zl("©day", r.toISOString().slice(0, 10)));
			break;
		case "comment":
			e.push(Zl("©cmt", r));
			break;
		case "lyrics":
			e.push(Zl("©lyr", r));
			break;
		case "raw": break;
		case "discNumber":
		case "discsTotal":
		case "trackNumber":
		case "tracksTotal":
		case "images": break;
		default: A(n);
	}
	if (t.raw) for (let n in t.raw) {
		let r = t.raw[n];
		r == null || n.length !== 4 || e.some((e) => e.type === n) || (typeof r == "string" ? e.push(Zl(n, r)) : r instanceof Uint8Array && e.push(Z(n, Array.from(r))));
	}
}, Zl = (e, t) => {
	let n = h.encode(t);
	return Z(e, [
		J(n.length),
		J(lu("und")),
		Array.from(n)
	]);
}, Ql = {
	"image/jpeg": 13,
	"image/png": 14,
	"image/bmp": 27
}, $l = (e, t) => {
	let n = [];
	for (let { key: r, value: i } of Pe(e)) switch (r) {
		case "title":
			n.push({
				key: t ? "title" : "©nam",
				value: nu(i)
			});
			break;
		case "description":
			n.push({
				key: t ? "description" : "©des",
				value: nu(i)
			});
			break;
		case "artist":
			n.push({
				key: t ? "artist" : "©ART",
				value: nu(i)
			});
			break;
		case "album":
			n.push({
				key: t ? "album" : "©alb",
				value: nu(i)
			});
			break;
		case "albumArtist":
			n.push({
				key: t ? "album_artist" : "aART",
				value: nu(i)
			});
			break;
		case "comment":
			n.push({
				key: t ? "comment" : "©cmt",
				value: nu(i)
			});
			break;
		case "genre":
			n.push({
				key: t ? "genre" : "©gen",
				value: nu(i)
			});
			break;
		case "lyrics":
			n.push({
				key: t ? "lyrics" : "©lyr",
				value: nu(i)
			});
			break;
		case "date":
			n.push({
				key: t ? "date" : "©day",
				value: nu(i.toISOString().slice(0, 10))
			});
			break;
		case "images":
			for (let e of i) e.kind === "coverFront" && n.push({
				key: "covr",
				value: Z("data", [
					Y(Ql[e.mimeType] ?? 0),
					Y(0),
					Array.from(e.data)
				])
			});
			break;
		case "trackNumber":
			if (t) {
				let t = e.tracksTotal === void 0 ? i.toString() : `${i}/${e.tracksTotal}`;
				n.push({
					key: "track",
					value: nu(t)
				});
			} else n.push({
				key: "trkn",
				value: Z("data", [
					Y(0),
					Y(0),
					J(0),
					J(i),
					J(e.tracksTotal ?? 0),
					J(0)
				])
			});
			break;
		case "discNumber":
			t || n.push({
				key: "disc",
				value: Z("data", [
					Y(0),
					Y(0),
					J(0),
					J(i),
					J(e.discsTotal ?? 0),
					J(0)
				])
			});
			break;
		case "tracksTotal":
		case "discsTotal": break;
		case "raw": break;
		default: A(r);
	}
	if (e.raw) for (let r in e.raw) {
		let i = e.raw[r];
		i == null || !t && r.length !== 4 || n.some((e) => e.key === r) || (typeof i == "string" ? n.push({
			key: r,
			value: nu(i)
		}) : i instanceof Uint8Array ? n.push({
			key: r,
			value: Z("data", [
				Y(0),
				Y(0),
				Array.from(i)
			])
		}) : i instanceof Ze && n.push({
			key: r,
			value: Z("data", [
				Y(Ql[i.mimeType] ?? 0),
				Y(0),
				Array.from(i.data)
			])
		}));
	}
	return n;
}, eu = (e) => {
	let t = $l(e, !1);
	return t.length === 0 ? null : Q("meta", 0, 0, void 0, [el(!1, "mdir", "", "appl"), Z("ilst", void 0, t.map((e) => Z(e.key, void 0, [e.value])))]);
}, tu = (e) => {
	let t = $l(e, !0);
	return t.length === 0 ? null : Z("meta", void 0, [
		el(!1, "mdta", ""),
		Q("keys", 0, 0, [Y(t.length)], t.map((e) => Z("mdta", [...h.encode(e.key)]))),
		Z("ilst", void 0, t.map((e, t) => Z(String.fromCharCode(...Y(t + 1)), void 0, [e.value])))
	]);
}, nu = (e) => Z("data", [
	Y(1),
	Y(0),
	...h.encode(e)
]), ru = (e, t) => {
	switch (e) {
		case "avc": return t.startsWith("avc3") ? "avc3" : "avc1";
		case "hevc": return "hvc1";
		case "vp8": return "vp08";
		case "vp9": return "vp09";
		case "av1": return "av01";
	}
}, iu = {
	avc: dl,
	hevc: fl,
	vp8: pl,
	vp9: pl,
	av1: ml
}, au = (e, t) => {
	switch (e) {
		case "aac": return "mp4a";
		case "mp3": return "mp4a";
		case "opus": return "Opus";
		case "vorbis": return "mp4a";
		case "flac": return "fLaC";
		case "ulaw": return "ulaw";
		case "alaw": return "alaw";
		case "pcm-u8": return "raw ";
		case "pcm-s8": return "sowt";
		case "ac3": return "ac-3";
		case "eac3": return "ec-3";
	}
	if (t) switch (e) {
		case "pcm-s16": return "sowt";
		case "pcm-s16be": return "twos";
		case "pcm-s24": return "in24";
		case "pcm-s24be": return "in24";
		case "pcm-s32": return "in32";
		case "pcm-s32be": return "in32";
		case "pcm-f32": return "fl32";
		case "pcm-f32be": return "fl32";
		case "pcm-f64": return "fl64";
		case "pcm-f64be": return "fl64";
	}
	else switch (e) {
		case "pcm-s16": return "ipcm";
		case "pcm-s16be": return "ipcm";
		case "pcm-s24": return "ipcm";
		case "pcm-s24be": return "ipcm";
		case "pcm-s32": return "ipcm";
		case "pcm-s32be": return "ipcm";
		case "pcm-f32": return "fpcm";
		case "pcm-f32be": return "fpcm";
		case "pcm-f64": return "fpcm";
		case "pcm-f64be": return "fpcm";
	}
}, ou = (e, t) => {
	switch (e) {
		case "aac": return gl;
		case "mp3": return gl;
		case "opus": return bl;
		case "vorbis": return gl;
		case "flac": return xl;
		case "ac3": return Cl;
		case "eac3": return wl;
	}
	if (t) switch (e) {
		case "pcm-s24": return _l;
		case "pcm-s24be": return _l;
		case "pcm-s32": return _l;
		case "pcm-s32be": return _l;
		case "pcm-f32": return _l;
		case "pcm-f32be": return _l;
		case "pcm-f64": return _l;
		case "pcm-f64be": return _l;
	}
	else switch (e) {
		case "pcm-s16": return Sl;
		case "pcm-s16be": return Sl;
		case "pcm-s24": return Sl;
		case "pcm-s24be": return Sl;
		case "pcm-s32": return Sl;
		case "pcm-s32be": return Sl;
		case "pcm-f32": return Sl;
		case "pcm-f32be": return Sl;
		case "pcm-f64": return Sl;
		case "pcm-f64be": return Sl;
	}
	return null;
}, su = { webvtt: "wvtt" }, cu = { webvtt: El }, lu = (e) => {
	a(e.length === 3);
	let t = 0;
	for (let n = 0; n < 3; n++) t <<= 5, t += e.charCodeAt(n) - 96;
	return t;
}, uu = class {
	constructor(e, t) {
		if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, e._writerAcquired) throw Error("Can't have multiple Writers for the same Target.");
		this.target = e, e._setMonotonicity(t), e._writerAcquired = !0;
	}
	start() {
		a(!this.started), this.target._start(), this.started = !0;
	}
	write(e) {
		a(this.started && !this.finalized), this.maybeTrackWrites(e), this.target._write(e, this.pos), this.pos += e.byteLength;
	}
	seek(e) {
		this.pos = e;
	}
	getPos() {
		return this.pos;
	}
	async flush() {
		return a(this.started && !this.finalized), this.target._flush();
	}
	async finalize() {
		a(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0;
	}
	maybeTrackWrites(e) {
		if (!this.trackedWrites) return;
		let t = this.getPos();
		if (t < this.trackedStart) {
			if (t + e.byteLength <= this.trackedStart) return;
			e = e.subarray(this.trackedStart - t), t = 0;
		}
		let n = t + e.byteLength - this.trackedStart, r = this.trackedWrites.byteLength;
		for (; r < n;) r *= 2;
		if (r !== this.trackedWrites.byteLength) {
			let e = new Uint8Array(r);
			e.set(this.trackedWrites, 0), this.trackedWrites = e;
		}
		this.trackedWrites.set(e, t - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, t + e.byteLength);
	}
	startTrackingWrites() {
		this.trackedWrites = new Uint8Array(2 ** 10), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart;
	}
	stopTrackingWrites() {
		if (!this.trackedWrites) throw Error("Internal error: Can't get tracked writes since nothing was tracked.");
		let e = {
			data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
			start: this.trackedStart,
			end: this.trackedEnd
		};
		return this.trackedWrites = null, e;
	}
}, du = class extends Je {
	constructor() {
		super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null;
	}
	_setMonotonicity(e) {
		this._monotonicity !== !1 && (this._monotonicity = e);
	}
	_dispatchWrite(e, t) {
		this.onwrite?.(e, t), this._emit("write", {
			start: e,
			end: t
		});
	}
	slice(e) {
		if (!Number.isInteger(e) || e < 0) throw TypeError("offset must be a non-negative integer.");
		return new gu(this, e);
	}
}, fu = 2 ** 16, pu = 2 ** 32, mu = class extends du {
	constructor(e = {}) {
		if (super(), this.buffer = null, this._maxPos = 0, !e || typeof e != "object") throw TypeError("BufferTarget options, when provided, must be an object.");
		if (e.onFinalize !== void 0 && typeof e.onFinalize != "function") throw TypeError("options.onFinalize, when provided, must be a function.");
		if (this._options = e, this._supportsResize = "resize" in /* @__PURE__ */ new ArrayBuffer(0), this._supportsResize) try {
			this._buffer = new ArrayBuffer(fu, { maxByteLength: pu });
		} catch {
			this._buffer = new ArrayBuffer(fu), this._supportsResize = !1;
		}
		else this._buffer = new ArrayBuffer(fu);
		this._bytes = new Uint8Array(this._buffer);
	}
	_ensureSize(e) {
		let t = this._buffer.byteLength;
		for (; t < e;) t *= 2;
		if (t !== this._buffer.byteLength) {
			if (t > pu) throw Error(`ArrayBuffer exceeded maximum size of ${pu} bytes. Please consider using another target.`);
			if (this._supportsResize) this._buffer.resize(t);
			else {
				let e = new ArrayBuffer(t), n = new Uint8Array(e);
				n.set(this._bytes, 0), this._buffer = e, this._bytes = n;
			}
		}
	}
	_start() {}
	_write(e, t) {
		this._ensureSize(t + e.byteLength), this._bytes.set(e, t), this._maxPos = Math.max(this._maxPos, t + e.byteLength), this._dispatchWrite(t, t + e.byteLength);
	}
	async _flush() {}
	async _finalize() {
		this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized");
	}
	async _close() {}
	_getSlice(e, t) {
		return this._bytes.slice(e, t);
	}
}, hu = class extends du {
	_start() {}
	_write(e, t) {
		this._dispatchWrite(t, t + e.byteLength);
	}
	async _flush() {}
	async _finalize() {
		this._emit("finalized");
	}
	async _close() {}
}, gu = class extends du {
	constructor(e, t) {
		super(), this._baseTarget = e, this._offset = t;
	}
	_start() {}
	_write(e, t) {
		this._baseTarget._write(e, this._offset + t), this._dispatchWrite(t, t + e.byteLength);
	}
	_flush() {
		return this._baseTarget._flush();
	}
	async _finalize() {
		this._emit("finalized");
	}
	async _close() {}
	_setMonotonicity(e) {
		super._setMonotonicity(e), this._baseTarget._setMonotonicity(e);
	}
}, _u = class {
	constructor(e, t) {
		if (this.rootPath = e, this.getTarget = t, typeof e != "string") throw TypeError("rootPath must be a string.");
		if (typeof t != "function") throw TypeError("getTarget must be a function.");
	}
}, vu = 57600, yu = 2082844800, bu = (e) => {
	let t = {}, n = e.track;
	return n.metadata.name !== void 0 && (t.name = n.metadata.name), t;
}, $ = (e, t, n = !0) => {
	let r = e * t;
	return n ? Math.round(r) : r;
}, xu = class extends hc {
	constructor(e, t) {
		super(e), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new mu(), this.auxWriter = new uu(this.auxTarget, !1), this.auxBoxWriter = new wc(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = O(), this.creationTime = Math.floor(Date.now() / 1e3) + yu, this.finalizedChunks = [], this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -Infinity, this.minWrittenTimestamp = Infinity, this.maxWrittenEndTimestamp = -Infinity, this.segmentHeaderSize = null, this.format = t, this.isQuickTime = t instanceof ed, this.isCmaf = t instanceof $u, this.minimumFragmentDuration = t._options.minimumFragmentDuration ?? (t instanceof $u ? Infinity : 1);
	}
	async start() {
		let e = await this.mutex.acquire();
		if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((e) => this.format._options.fastStart === void 0 ? e instanceof mu : this.format._options.fastStart === "fragmented"), this.boxWriter = new wc(this.writer), this.fastStart = this.format._options.fastStart ?? (this.writer.target instanceof mu ? "in-memory" : !1), this.isFragmented = this.fastStart === "fragmented"), this.isCmaf) {
			if (!this.output._hasInitTarget()) throw Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
			let e = new uu(await this.output._getInitTarget(), !0);
			e.start(), this.initWriter = e, this.initBoxWriter = new wc(e);
		}
		let t = this.output._tracks.some((e) => e.isVideoTrack() && e.source._codec === "avc");
		{
			let e = this.initBoxWriter ?? this.boxWriter;
			if (a(e), this.format._options.onFtyp && e.writer.startTrackingWrites(), e.writeBox(zc({
				isQuickTime: this.isQuickTime,
				holdsAvc: t,
				fragmented: this.isFragmented,
				cmaf: this.isCmaf
			})), this.format._options.onFtyp) {
				let { data: t, start: n } = e.writer.stopTrackingWrites();
				this.format._options.onFtyp(t, n);
			}
			this.ftypSize = e.writer.getPos(), this.isCmaf && await this.initWriter.flush();
		}
		if (this.fastStart !== "in-memory") if (this.fastStart === "reserve") {
			for (let e of this.output._tracks) if (e.metadata.maximumPacketCount === void 0) throw Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.");
		} else this.isFragmented || (a(this.writer), a(this.boxWriter), this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat = Hc(!0), this.boxWriter.writeBox(this.mdat));
		await this.writer?.flush(), e();
	}
	allTracksAreKnown() {
		for (let e of this.output._tracks) if (!e.source._closed && !this.trackDatas.some((t) => t.track === e)) return !1;
		return !0;
	}
	async getMimeType() {
		await this.allTracksKnown.promise;
		let e = this.trackDatas.map((e) => e.type === "video" || e.type === "audio" ? e.info.decoderConfig.codec : { webvtt: "wvtt" }[e.track.source._codec]);
		return Yn({
			isQuickTime: this.isQuickTime,
			hasVideo: this.trackDatas.some((e) => e.type === "video"),
			hasAudio: this.trackDatas.some((e) => e.type === "audio"),
			codecStrings: e
		});
	}
	getVideoTrackData(e, t, n) {
		let r = this.trackDatas.find((t) => t.track === e);
		if (r) return r;
		jt(n), a(n), a(n.decoderConfig);
		let i = { ...n.decoderConfig };
		a(i.codedWidth !== void 0), a(i.codedHeight !== void 0);
		let o = !1;
		if (e.source._codec === "avc" && !i.description) {
			let e = on(t.data);
			if (!e) throw Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
			i.description = sn(e), o = !0;
		} else if (e.source._codec === "hevc" && !i.description) {
			let e = gn(t.data);
			if (!e) throw Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
			i.description = wn(e), o = !0;
		}
		let s = Se(1 / (e.metadata.frameRate ?? 57600), 1e6).den, c = i.displayAspectWidth, l = i.displayAspectHeight, u = c === void 0 || l === void 0 ? {
			num: 1,
			den: 1
		} : We({
			num: c * i.codedHeight,
			den: l * i.codedWidth
		}), d = {
			muxer: this,
			track: e,
			type: "video",
			info: {
				width: i.codedWidth,
				height: i.codedHeight,
				pixelAspectRatio: u,
				decoderConfig: i,
				requiresAnnexBTransformation: o
			},
			timescale: s,
			samples: [],
			sampleQueue: [],
			timestampProcessingQueue: [],
			timeToSampleTable: [],
			compositionTimeOffsetTable: [],
			lastTimescaleUnits: null,
			lastSample: null,
			startTimestampOffset: null,
			finalizedChunks: [],
			currentChunk: null,
			compactlyCodedChunkTable: [],
			closed: !1
		};
		return this.trackDatas.push(d), this.trackDatas.sort((e, t) => e.track.id - t.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), d;
	}
	getAudioTrackData(e, t, n) {
		let r = this.trackDatas.find((t) => t.track === e);
		if (r) return r;
		Nt(n), a(n), a(n.decoderConfig);
		let i = { ...n.decoderConfig }, o = !1;
		if (e.source._codec === "aac" && !i.description) {
			let e = Ni(Us.tempFromBytes(t.data));
			if (!e) throw Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
			let n = F[e.samplingFrequencyIndex], r = rt[e.channelConfiguration];
			if (n === void 0 || r === void 0) throw Error("Invalid ADTS frame header.");
			i.description = at({
				objectType: e.objectType,
				sampleRate: n,
				numberOfChannels: r
			}), o = !0;
		}
		let s = {
			muxer: this,
			track: e,
			type: "audio",
			info: {
				numberOfChannels: n.decoderConfig.numberOfChannels,
				sampleRate: n.decoderConfig.sampleRate,
				decoderConfig: i,
				requiresPcmTransformation: !this.isFragmented && I.includes(e.source._codec),
				expectedNextPcmPacketTimestamp: null,
				requiresAdtsStripping: o,
				firstPacket: t
			},
			timescale: i.sampleRate,
			samples: [],
			sampleQueue: [],
			timestampProcessingQueue: [],
			timeToSampleTable: [],
			compositionTimeOffsetTable: [],
			lastTimescaleUnits: null,
			lastSample: null,
			startTimestampOffset: null,
			finalizedChunks: [],
			currentChunk: null,
			compactlyCodedChunkTable: [],
			closed: !1
		};
		return this.trackDatas.push(s), this.trackDatas.sort((e, t) => e.track.id - t.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), s;
	}
	getSubtitleTrackData(e, t) {
		let n = this.trackDatas.find((t) => t.track === e);
		if (n) return n;
		Pt(t), a(t), a(t.config);
		let r = {
			muxer: this,
			track: e,
			type: "subtitle",
			info: { config: t.config },
			timescale: 1e3,
			samples: [],
			sampleQueue: [],
			timestampProcessingQueue: [],
			timeToSampleTable: [],
			compositionTimeOffsetTable: [],
			lastTimescaleUnits: null,
			lastSample: null,
			startTimestampOffset: null,
			finalizedChunks: [],
			currentChunk: null,
			compactlyCodedChunkTable: [],
			closed: !1,
			lastCueEndTimestamp: 0,
			cueQueue: [],
			nextSourceId: 0,
			cueToSourceId: /* @__PURE__ */ new WeakMap()
		};
		return this.trackDatas.push(r), this.trackDatas.sort((e, t) => e.track.id - t.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), r;
	}
	async addEncodedVideoPacket(e, t, n) {
		let r = await this.mutex.acquire();
		try {
			let r = this.getVideoTrackData(e, t, n), i = t.data;
			if (r.info.requiresAnnexBTransformation) {
				let e = [...Xt(i)].map((e) => i.subarray(e.offset, e.offset + e.length));
				if (e.length === 0) throw Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
				i = rn(e, 4);
			}
			this.validateTimestamp(r.track, t.timestamp, t.type === "key");
			let a = this.createSampleForTrack(r, i, t.timestamp, t.duration, t.type);
			await this.registerSample(r, a);
		} finally {
			r();
		}
	}
	async addEncodedAudioPacket(e, t, n) {
		let r = await this.mutex.acquire();
		try {
			let r = this.getAudioTrackData(e, t, n), i = t.data;
			if (r.info.requiresAdtsStripping) {
				let e = Ni(Us.tempFromBytes(i));
				if (!e) throw Error("Expected ADTS frame, didn't get one.");
				let t = e.crcCheck === null ? 7 : 9;
				i = i.subarray(t);
			}
			this.validateTimestamp(r.track, t.timestamp, t.type === "key");
			let a = t.timestamp, o = t.duration;
			if (r.info.requiresPcmTransformation) {
				let e = Ct(r.info.decoderConfig.codec).sampleSize * r.info.numberOfChannels;
				if (o = i.byteLength / e / r.info.sampleRate, r.info.expectedNextPcmPacketTimestamp !== null) {
					let e = a - r.info.expectedNextPcmPacketTimestamp;
					if (e < .01) a = r.info.expectedNextPcmPacketTimestamp;
					else {
						let t = await this.padWithSilence(r, r.info.expectedNextPcmPacketTimestamp, e);
						a = r.info.expectedNextPcmPacketTimestamp + t;
					}
				}
				r.info.expectedNextPcmPacketTimestamp = a + o;
			}
			let s = this.createSampleForTrack(r, i, a, o, t.type);
			await this.registerSample(r, s);
		} finally {
			r();
		}
	}
	async padWithSilence(e, t, n) {
		let r = $(n, e.timescale);
		if (n = r / e.timescale, r > 0) {
			let { sampleSize: i, silentValue: a } = Ct(e.info.decoderConfig.codec), o = r * e.info.numberOfChannels, s = new Uint8Array(i * o).fill(a), c = this.createSampleForTrack(e, new Uint8Array(s.buffer), t, n, "key");
			await this.registerSample(e, c);
		}
		return n;
	}
	async addSubtitleCue(e, t, n) {
		let r = await this.mutex.acquire();
		try {
			let r = this.getSubtitleTrackData(e, n);
			this.validateTimestamp(r.track, t.timestamp, !0), e.source._codec === "webvtt" && (r.cueQueue.push(t), await this.processWebVTTCues(r, t.timestamp));
		} finally {
			r();
		}
	}
	async processWebVTTCues(e, t) {
		for (; e.cueQueue.length > 0;) {
			let n = /* @__PURE__ */ new Set([]);
			for (let r of e.cueQueue) a(r.timestamp <= t), a(e.lastCueEndTimestamp <= r.timestamp + r.duration), n.add(Math.max(r.timestamp, e.lastCueEndTimestamp)), n.add(r.timestamp + r.duration);
			let r = [...n].sort((e, t) => e - t), i = r[0], o = r[1] ?? i;
			if (t < o) break;
			if (e.lastCueEndTimestamp < i) {
				this.auxWriter.seek(0);
				let t = Kl();
				this.auxBoxWriter.writeBox(t);
				let n = this.auxTarget._getSlice(0, this.auxWriter.getPos()), r = this.createSampleForTrack(e, n, e.lastCueEndTimestamp, i - e.lastCueEndTimestamp, "key");
				await this.registerSample(e, r), e.lastCueEndTimestamp = i;
			}
			this.auxWriter.seek(0);
			for (let t = 0; t < e.cueQueue.length; t++) {
				let n = e.cueQueue[t];
				if (n.timestamp >= o) break;
				bc.lastIndex = 0;
				let r = bc.test(n.text), a = n.timestamp + n.duration, s = e.cueToSourceId.get(n);
				if (s === void 0 && o < a && (s = e.nextSourceId++, e.cueToSourceId.set(n, s)), n.notes) {
					let e = Jl(n.notes);
					this.auxBoxWriter.writeBox(e);
				}
				let c = ql(n.text, r ? i : null, n.identifier ?? null, n.settings ?? null, s ?? null);
				this.auxBoxWriter.writeBox(c), a === o && e.cueQueue.splice(t--, 1);
			}
			let s = this.auxTarget._getSlice(0, this.auxWriter.getPos()), c = this.createSampleForTrack(e, s, i, o - i, "key");
			await this.registerSample(e, c), e.lastCueEndTimestamp = o;
		}
	}
	createSampleForTrack(e, t, n, r, i) {
		return {
			timestamp: n,
			decodeTimestamp: n,
			duration: r,
			data: t,
			size: t.byteLength,
			type: i,
			timescaleUnitsToNextSample: $(r, e.timescale)
		};
	}
	processTimestamps(e, t) {
		if (e.timestampProcessingQueue.length === 0) return;
		if (e.type === "audio" && e.info.requiresPcmTransformation) {
			this.isFragmented || (e.startTimestampOffset ??= e.timestampProcessingQueue[0].timestamp);
			let t = 0;
			for (let n = 0; n < e.timestampProcessingQueue.length; n++) {
				let r = e.timestampProcessingQueue[n], i = $(r.duration, e.timescale);
				t += i;
			}
			if (e.timeToSampleTable.length === 0) e.timeToSampleTable.push({
				sampleCount: t,
				sampleDelta: 1
			});
			else {
				let n = s(e.timeToSampleTable);
				n.sampleCount += t;
			}
			e.timestampProcessingQueue.length = 0;
			return;
		}
		let n = e.timestampProcessingQueue.map((e) => e.timestamp).sort((e, t) => e - t);
		this.isFragmented || (e.startTimestampOffset ??= n[0]);
		for (let t = 0; t < e.timestampProcessingQueue.length; t++) {
			let r = e.timestampProcessingQueue[t];
			r.decodeTimestamp = n[t];
			let i = $(r.timestamp - r.decodeTimestamp, e.timescale), o = $(r.duration, e.timescale);
			if (e.lastTimescaleUnits !== null) {
				a(e.lastSample);
				let t = $(r.decodeTimestamp, e.timescale, !1), n = Math.round(t - e.lastTimescaleUnits);
				if (a(n >= 0), e.lastTimescaleUnits += n, e.lastSample.timescaleUnitsToNextSample = n, !this.isFragmented) {
					let t = s(e.timeToSampleTable);
					if (a(t), t.sampleCount === 1) {
						t.sampleDelta = n;
						let r = e.timeToSampleTable[e.timeToSampleTable.length - 2];
						r && r.sampleDelta === n && (r.sampleCount++, e.timeToSampleTable.pop(), t = r);
					} else t.sampleDelta !== n && (t.sampleCount--, e.timeToSampleTable.push(t = {
						sampleCount: 1,
						sampleDelta: n
					}));
					t.sampleDelta === o ? t.sampleCount++ : e.timeToSampleTable.push({
						sampleCount: 1,
						sampleDelta: o
					});
					let r = s(e.compositionTimeOffsetTable);
					a(r), r.sampleCompositionTimeOffset === i ? r.sampleCount++ : e.compositionTimeOffsetTable.push({
						sampleCount: 1,
						sampleCompositionTimeOffset: i
					});
				}
			} else e.lastTimescaleUnits = $(r.decodeTimestamp, e.timescale, !1), this.isFragmented || (e.timeToSampleTable.push({
				sampleCount: 1,
				sampleDelta: o
			}), e.compositionTimeOffsetTable.push({
				sampleCount: 1,
				sampleCompositionTimeOffset: i
			}));
			e.lastSample = r;
		}
		if (e.timestampProcessingQueue.length = 0, a(e.lastSample), a(e.lastTimescaleUnits !== null), t !== void 0 && e.lastSample.timescaleUnitsToNextSample === 0) {
			a(t.type === "key");
			let n = $(t.timestamp, e.timescale, !1), r = Math.round(n - e.lastTimescaleUnits);
			e.lastSample.timescaleUnitsToNextSample = r;
		}
	}
	async registerSample(e, t) {
		t.type === "key" && this.processTimestamps(e, t), e.timestampProcessingQueue.push(t), this.isFragmented ? (e.sampleQueue.push(t), await this.interleaveSamples()) : this.fastStart === "reserve" ? await this.registerSampleFastStartReserve(e, t) : await this.addSampleToTrack(e, t);
	}
	async addSampleToTrack(e, t) {
		if (!this.isFragmented && (e.samples.push(t), this.fastStart === "reserve")) {
			let t = e.track.metadata.maximumPacketCount;
			if (a(t !== void 0), e.samples.length > t) throw Error(`Track #${e.track.id} has already reached the maximum packet count (${t}). Either add less packets or increase the maximum packet count.`);
		}
		let n = !1;
		if (!e.currentChunk) n = !0;
		else {
			e.currentChunk.startTimestamp = Math.min(e.currentChunk.startTimestamp, t.timestamp);
			let r = t.timestamp - e.currentChunk.startTimestamp;
			if (this.isFragmented) {
				let i = this.trackDatas.every((n) => {
					if (e === n) return t.type === "key";
					let r = n.sampleQueue[0];
					return r ? r.type === "key" : n.closed;
				});
				r >= this.minimumFragmentDuration && i && t.timestamp > this.maxWrittenTimestamp && (n = !0, await this.finalizeFragment());
			} else n = r >= .5;
		}
		n && (e.currentChunk && await this.finalizeCurrentChunk(e), e.currentChunk = {
			startTimestamp: t.timestamp,
			samples: [],
			offset: null,
			moofOffset: null
		}), a(e.currentChunk), e.currentChunk.samples.push(t), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, t.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, t.timestamp + t.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, t.timestamp));
	}
	async finalizeCurrentChunk(e) {
		if (a(!this.isFragmented), a(this.writer), !e.currentChunk) return;
		e.finalizedChunks.push(e.currentChunk), this.finalizedChunks.push(e.currentChunk);
		let t = e.currentChunk.samples.length;
		if (e.type === "audio" && e.info.requiresPcmTransformation && (t = e.currentChunk.samples.reduce((t, n) => t + $(n.duration, e.timescale), 0)), (e.compactlyCodedChunkTable.length === 0 || s(e.compactlyCodedChunkTable).samplesPerChunk !== t) && e.compactlyCodedChunkTable.push({
			firstChunk: e.finalizedChunks.length,
			samplesPerChunk: t
		}), this.fastStart === "in-memory") {
			e.currentChunk.offset = 0;
			return;
		}
		e.currentChunk.offset = this.writer.getPos();
		for (let t of e.currentChunk.samples) a(t.data), this.writer.write(t.data), t.data = null;
		await this.writer.flush();
	}
	async interleaveSamples(e = !1) {
		if (a(this.isFragmented), !(!e && !this.allTracksAreKnown())) outer: for (;;) {
			let t = null, n = Infinity;
			for (let r of this.trackDatas) {
				if (!e && r.sampleQueue.length === 0 && !r.closed) break outer;
				r.sampleQueue.length > 0 && r.sampleQueue[0].timestamp < n && (t = r, n = r.sampleQueue[0].timestamp);
			}
			if (!t) break;
			let r = t.sampleQueue.shift();
			await this.addSampleToTrack(t, r);
		}
	}
	async finalizeFragment(e = !this.isCmaf) {
		a(this.isFragmented);
		let t = this.nextFragmentNumber++;
		if (t === 1) {
			let e = this.initBoxWriter ?? this.boxWriter;
			a(e), this.format._options.onMoov && e.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
			let t = Wc(this);
			if (e.writeBox(t), this.format._options.onMoov) {
				let { data: t, start: n } = e.writer.stopTrackingWrites();
				this.format._options.onMoov(t, n);
			}
			if (this.isCmaf) {
				a(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new wc(this.writer);
				let e = this.boxWriter.measureBox(Bc()), t = this.boxWriter.measureBox(Vc(this, 0));
				this.segmentHeaderSize = e + t, this.writer.seek(this.segmentHeaderSize);
			}
		}
		a(this.writer), a(this.boxWriter);
		let n = this.trackDatas.filter((e) => e.currentChunk), r = Il(t, n), i = this.writer.getPos(), o = i + this.boxWriter.measureBox(r), s = o + 8, c = Infinity;
		for (let e of n) {
			e.currentChunk.offset = s, e.currentChunk.moofOffset = i;
			for (let t of e.currentChunk.samples) s += t.size;
			c = Math.min(c, e.currentChunk.startTimestamp);
		}
		let l = s - o, u = l >= 2 ** 32;
		if (u) for (let e of n) e.currentChunk.offset += 8;
		this.format._options.onMoof && this.writer.startTrackingWrites();
		let d = Il(t, n);
		if (this.boxWriter.writeBox(d), this.format._options.onMoof) {
			let { data: e, start: t } = this.writer.stopTrackingWrites();
			this.format._options.onMoof(e, t, c);
		}
		a(this.writer.getPos() === o), this.format._options.onMdat && this.writer.startTrackingWrites();
		let f = Hc(u);
		f.size = l, this.boxWriter.writeBox(f), this.writer.seek(o + (u ? 16 : 8));
		for (let e of n) for (let t of e.currentChunk.samples) this.writer.write(t.data), t.data = null;
		if (this.format._options.onMdat) {
			let { data: e, start: t } = this.writer.stopTrackingWrites();
			this.format._options.onMdat(e, t);
		}
		for (let e of n) e.finalizedChunks.push(e.currentChunk), this.finalizedChunks.push(e.currentChunk), e.currentChunk = null;
		e && await this.writer.flush();
	}
	async registerSampleFastStartReserve(e, t) {
		if (a(this.writer), a(this.boxWriter), this.allTracksAreKnown()) {
			if (!this.mdat) {
				this.ensureOneEnabledTrack();
				let e = Wc(this), t = this.boxWriter.measureBox(e) + this.computeSampleTableSizeUpperBound() + 4096;
				a(this.ftypSize !== null), this.writer.seek(this.ftypSize + t), this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat = Hc(!0), this.boxWriter.writeBox(this.mdat);
				for (let e of this.trackDatas) {
					for (let t of e.sampleQueue) await this.addSampleToTrack(e, t);
					e.sampleQueue.length = 0;
				}
			}
			await this.addSampleToTrack(e, t);
		} else e.sampleQueue.push(t);
	}
	computeSampleTableSizeUpperBound() {
		a(this.fastStart === "reserve");
		let e = 0;
		for (let t of this.trackDatas) {
			let n = t.track.metadata.maximumPacketCount;
			a(n !== void 0), e += 8 * Math.ceil(2 / 3 * n), e += 4 * n, e += 8 * Math.ceil(2 / 3 * n), e += 12 * Math.ceil(2 / 3 * n), e += 4 * n, e += 8 * n;
		}
		return e;
	}
	async onTrackClose(e) {
		let t = await this.mutex.acquire(), n = this.trackDatas.find((t) => t.track === e);
		n && (n.closed = !0, n.type === "subtitle" && e.source._codec === "webvtt" && await this.processWebVTTCues(n, Infinity), this.processTimestamps(n)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), t();
	}
	ensureOneEnabledTrack() {
		for (let e of [
			"video",
			"audio",
			"subtitle"
		]) {
			let t = this.trackDatas.filter((t) => t.type === e);
			if (t.length !== 0 && !t.some((e) => e.track.metadata.disposition?.default !== !1)) {
				let e = t[0];
				e.track.metadata.disposition = {
					...e.track.metadata.disposition,
					default: !0
				};
			}
		}
	}
	async finalize() {
		let e = await this.mutex.acquire();
		this.allTracksKnown.resolve(), this.ensureOneEnabledTrack();
		for (let e of this.trackDatas) e.closed = !0, e.type === "subtitle" && e.track.source._codec === "webvtt" && await this.processWebVTTCues(e, Infinity), this.processTimestamps(e);
		if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
		else for (let e of this.trackDatas) {
			await this.finalizeCurrentChunk(e), a(e.startTimestampOffset !== null);
			for (let t = 0; t < e.samples.length; t++) {
				let n = e.samples[t];
				n.timestamp -= e.startTimestampOffset, n.decodeTimestamp -= e.startTimestampOffset;
			}
		}
		if (a(this.writer), a(this.boxWriter), this.fastStart === "in-memory") {
			this.mdat = Hc(!1);
			let e;
			for (let t = 0; t < 2; t++) {
				let t = Wc(this), n = this.boxWriter.measureBox(t);
				e = this.boxWriter.measureBox(this.mdat);
				let r = this.writer.getPos() + n + e;
				for (let t of this.finalizedChunks) {
					t.offset = r;
					for (let { data: n } of t.samples) a(n), r += n.byteLength, e += n.byteLength;
				}
				if (r < 2 ** 32) break;
				e >= 2 ** 32 && (this.mdat.largeSize = !0);
			}
			this.format._options.onMoov && this.writer.startTrackingWrites();
			let t = Wc(this);
			if (this.boxWriter.writeBox(t), this.format._options.onMoov) {
				let { data: e, start: t } = this.writer.stopTrackingWrites();
				this.format._options.onMoov(e, t);
			}
			this.format._options.onMdat && this.writer.startTrackingWrites(), this.mdat.size = e, this.boxWriter.writeBox(this.mdat);
			for (let e of this.finalizedChunks) for (let t of e.samples) a(t.data), this.writer.write(t.data), t.data = null;
			if (this.format._options.onMdat) {
				let { data: e, start: t } = this.writer.stopTrackingWrites();
				this.format._options.onMdat(e, t);
			}
		} else if (this.isFragmented) if (this.isCmaf) {
			let e = this.segmentHeaderSize === null ? 0 : this.writer.getPos() - this.segmentHeaderSize;
			this.writer.seek(0), this.boxWriter.writeBox(Bc()), this.boxWriter.writeBox(Vc(this, e));
		} else {
			let e = this.writer.getPos(), t = Ul(this.trackDatas);
			this.boxWriter.writeBox(t);
			let n = this.writer.getPos() - e;
			this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(n);
		}
		else {
			a(this.mdat);
			let e = this.boxWriter.offsets.get(this.mdat);
			a(e !== void 0);
			let t = this.writer.getPos() - e;
			if (this.mdat.size = t, this.mdat.largeSize = t >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.format._options.onMdat) {
				let { data: e, start: t } = this.writer.stopTrackingWrites();
				this.format._options.onMdat(e, t);
			}
			let n = Wc(this);
			if (this.fastStart === "reserve") {
				a(this.ftypSize !== null), this.writer.seek(this.ftypSize), this.format._options.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(n);
				let e = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
				this.boxWriter.writeBox(Uc(e));
			} else this.format._options.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(n);
			if (this.format._options.onMoov) {
				let { data: e, start: t } = this.writer.stopTrackingWrites();
				this.format._options.onMoov(e, t);
			}
		}
		e();
	}
}, Su = -(2 ** 15), Cu = 2 ** 15 - 1, wu = "Mediabunny", Tu = 6, Eu = 5, Du = {
	video: 1,
	audio: 2,
	subtitle: 17
}, Ou = class extends hc {
	constructor(e, t) {
		super(e), this.trackDatas = [], this.allTracksKnown = O(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = /* @__PURE__ */ new Map(), this.startTimestamp = Infinity, this.endTimestamp = -Infinity, this.format = t;
	}
	async start() {
		let e = await this.mutex.acquire();
		this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new Ur(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush(), e();
	}
	writeEBMLHeader() {
		this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
		let e = {
			id: B.EBML,
			data: [
				{
					id: B.EBMLVersion,
					data: 1
				},
				{
					id: B.EBMLReadVersion,
					data: 1
				},
				{
					id: B.EBMLMaxIDLength,
					data: 4
				},
				{
					id: B.EBMLMaxSizeLength,
					data: 8
				},
				{
					id: B.DocType,
					data: this.format instanceof nd ? "webm" : "matroska"
				},
				{
					id: B.DocTypeVersion,
					data: 2
				},
				{
					id: B.DocTypeReadVersion,
					data: 2
				}
			]
		};
		if (this.ebmlWriter.writeEBML(e), this.format._options.onEbmlHeader) {
			let { data: e, start: t } = this.writer.stopTrackingWrites();
			this.format._options.onEbmlHeader(e, t);
		}
	}
	maybeCreateSeekHead(e) {
		if (this.format._options.appendOnly) return;
		let t = new Uint8Array([
			28,
			83,
			187,
			107
		]), n = new Uint8Array([
			21,
			73,
			169,
			102
		]), r = new Uint8Array([
			22,
			84,
			174,
			107
		]), i = new Uint8Array([
			25,
			65,
			164,
			105
		]), a = new Uint8Array([
			18,
			84,
			195,
			103
		]), o = {
			id: B.SeekHead,
			data: [
				{
					id: B.Seek,
					data: [{
						id: B.SeekID,
						data: t
					}, {
						id: B.SeekPosition,
						size: 5,
						data: e ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
					}]
				},
				{
					id: B.Seek,
					data: [{
						id: B.SeekID,
						data: n
					}, {
						id: B.SeekPosition,
						size: 5,
						data: e ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
					}]
				},
				{
					id: B.Seek,
					data: [{
						id: B.SeekID,
						data: r
					}, {
						id: B.SeekPosition,
						size: 5,
						data: e ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
					}]
				},
				this.attachmentsElement ? {
					id: B.Seek,
					data: [{
						id: B.SeekID,
						data: i
					}, {
						id: B.SeekPosition,
						size: 5,
						data: e ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
					}]
				} : null,
				this.tagsElement ? {
					id: B.Seek,
					data: [{
						id: B.SeekID,
						data: a
					}, {
						id: B.SeekPosition,
						size: 5,
						data: e ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
					}]
				} : null
			]
		};
		this.seekHead = o;
	}
	createSegmentInfo() {
		let e = {
			id: B.Duration,
			data: new Nr(0)
		};
		this.segmentDuration = e;
		let t = {
			id: B.Info,
			data: [
				{
					id: B.TimestampScale,
					data: 1e6
				},
				{
					id: B.MuxingApp,
					data: wu
				},
				{
					id: B.WritingApp,
					data: wu
				},
				this.format._options.appendOnly ? null : e
			]
		};
		this.segmentInfo = t;
	}
	createTracks() {
		let e = {
			id: B.Tracks,
			data: []
		};
		this.tracksElement = e;
		for (let t of this.trackDatas) {
			let n = ti[t.track.source._codec];
			a(n);
			let r = 0;
			if (t.type === "audio" && t.track.source._codec === "opus") {
				r = 1e6 * 80;
				let e = t.info.decoderConfig.description;
				if (e) {
					let t = An(f(e));
					r = Math.round(1e9 * (t.preSkip / xt));
				}
			}
			e.data.push({
				id: B.TrackEntry,
				data: [
					{
						id: B.TrackNumber,
						data: t.track.id
					},
					{
						id: B.TrackUID,
						data: t.track.id
					},
					{
						id: B.TrackType,
						data: Du[t.type]
					},
					t.track.metadata.disposition?.default === !1 ? {
						id: B.FlagDefault,
						data: 0
					} : null,
					t.track.metadata.disposition?.forced ? {
						id: B.FlagForced,
						data: 1
					} : null,
					t.track.metadata.disposition?.hearingImpaired ? {
						id: B.FlagHearingImpaired,
						data: 1
					} : null,
					t.track.metadata.disposition?.visuallyImpaired ? {
						id: B.FlagVisualImpaired,
						data: 1
					} : null,
					t.track.metadata.disposition?.original ? {
						id: B.FlagOriginal,
						data: 1
					} : null,
					t.track.metadata.disposition?.commentary ? {
						id: B.FlagCommentary,
						data: 1
					} : null,
					{
						id: B.FlagLacing,
						data: 0
					},
					{
						id: B.Language,
						data: t.track.metadata.languageCode ?? "und"
					},
					{
						id: B.CodecID,
						data: n
					},
					{
						id: B.CodecDelay,
						data: 0
					},
					{
						id: B.SeekPreRoll,
						data: r
					},
					t.track.metadata.name === void 0 ? null : {
						id: B.Name,
						data: new Fr(t.track.metadata.name)
					},
					t.type === "video" ? this.videoSpecificTrackInfo(t) : null,
					t.type === "audio" ? this.audioSpecificTrackInfo(t) : null,
					t.type === "subtitle" ? this.subtitleSpecificTrackInfo(t) : null
				]
			});
		}
	}
	videoSpecificTrackInfo(e) {
		let { frameRate: t, rotation: n } = e.track.metadata, r = [e.info.decoderConfig.description ? {
			id: B.CodecPrivate,
			data: f(e.info.decoderConfig.description)
		} : null, t ? {
			id: B.DefaultDuration,
			data: 1e9 / t
		} : null], i = n ? o(-n) : 0, a = !!e.info.aspectRatio && e.info.aspectRatio.num * e.info.height !== e.info.aspectRatio.den * e.info.width, s = e.info.decoderConfig.colorSpace, c = {
			id: B.Video,
			data: [
				{
					id: B.PixelWidth,
					data: e.info.width
				},
				{
					id: B.PixelHeight,
					data: e.info.height
				},
				a ? {
					id: B.DisplayWidth,
					data: e.info.aspectRatio.num
				} : null,
				a ? {
					id: B.DisplayHeight,
					data: e.info.aspectRatio.den
				} : null,
				a ? {
					id: B.DisplayUnit,
					data: 3
				} : null,
				e.info.alphaMode ? {
					id: B.AlphaMode,
					data: 1
				} : null,
				w(s) ? {
					id: B.Colour,
					data: [
						{
							id: B.MatrixCoefficients,
							data: S[s.matrix]
						},
						{
							id: B.TransferCharacteristics,
							data: b[s.transfer]
						},
						{
							id: B.Primaries,
							data: v[s.primaries]
						},
						{
							id: B.Range,
							data: s.fullRange ? 2 : 1
						}
					]
				} : null,
				i ? {
					id: B.Projection,
					data: [{
						id: B.ProjectionType,
						data: 0
					}, {
						id: B.ProjectionPoseRoll,
						data: new Mr((i + 180) % 360 - 180)
					}]
				} : null
			]
		};
		return r.push(c), r;
	}
	audioSpecificTrackInfo(e) {
		let t = I.includes(e.track.source._codec) ? Ct(e.track.source._codec) : null;
		return [e.info.decoderConfig.description ? {
			id: B.CodecPrivate,
			data: f(e.info.decoderConfig.description)
		} : null, {
			id: B.Audio,
			data: [
				{
					id: B.SamplingFrequency,
					data: new Mr(e.info.sampleRate)
				},
				{
					id: B.Channels,
					data: e.info.numberOfChannels
				},
				t ? {
					id: B.BitDepth,
					data: 8 * t.sampleSize
				} : null
			]
		}];
	}
	subtitleSpecificTrackInfo(e) {
		return [{
			id: B.CodecPrivate,
			data: h.encode(e.info.config.description)
		}];
	}
	maybeCreateTags() {
		let e = [], t = (t, n) => {
			e.push({
				id: B.SimpleTag,
				data: [{
					id: B.TagName,
					data: new Fr(t)
				}, typeof n == "string" ? {
					id: B.TagString,
					data: new Fr(n)
				} : {
					id: B.TagBinary,
					data: n
				}]
			});
		}, n = this.output._metadataTags, r = /* @__PURE__ */ new Set();
		for (let { key: e, value: i } of Pe(n)) switch (e) {
			case "title":
				t("TITLE", i), r.add("TITLE");
				break;
			case "description":
				t("DESCRIPTION", i), r.add("DESCRIPTION");
				break;
			case "artist":
				t("ARTIST", i), r.add("ARTIST");
				break;
			case "album":
				t("ALBUM", i), r.add("ALBUM");
				break;
			case "albumArtist":
				t("ALBUM_ARTIST", i), r.add("ALBUM_ARTIST");
				break;
			case "genre":
				t("GENRE", i), r.add("GENRE");
				break;
			case "comment":
				t("COMMENT", i), r.add("COMMENT");
				break;
			case "lyrics":
				t("LYRICS", i), r.add("LYRICS");
				break;
			case "date":
				t("DATE", i.toISOString().slice(0, 10)), r.add("DATE");
				break;
			case "trackNumber":
				t("PART_NUMBER", n.tracksTotal === void 0 ? i.toString() : `${i}/${n.tracksTotal}`), r.add("PART_NUMBER");
				break;
			case "discNumber":
				t("DISC", n.discsTotal === void 0 ? i.toString() : `${i}/${n.discsTotal}`), r.add("DISC");
				break;
			case "tracksTotal":
			case "discsTotal": break;
			case "images":
			case "raw": break;
			default: A(e);
		}
		if (n.raw) for (let e in n.raw) {
			let i = n.raw[e];
			i == null || r.has(e) || (typeof i == "string" || i instanceof Uint8Array) && t(e, i);
		}
		e.length !== 0 && (this.tagsElement = {
			id: B.Tags,
			data: [{
				id: B.Tag,
				data: [{
					id: B.Targets,
					data: [{
						id: B.TargetTypeValue,
						data: 50
					}, {
						id: B.TargetType,
						data: "MOVIE"
					}]
				}, ...e]
			}]
		});
	}
	maybeCreateAttachments() {
		let e = this.output._metadataTags, t = [], n = /* @__PURE__ */ new Set(), r = e.images ?? [];
		for (let e of r) {
			let r = e.name;
			r === void 0 && (r = (e.kind === "coverFront" ? "cover" : e.kind === "coverBack" ? "back" : "image") + (Fe(e.mimeType) ?? ""));
			let i;
			for (;;) {
				i = 0n;
				for (let e = 0; e < 8; e++) i <<= 8n, i |= BigInt(Math.floor(Math.random() * 256));
				if (i !== 0n && !n.has(i)) break;
			}
			n.add(i), t.push({
				id: B.AttachedFile,
				data: [
					e.description === void 0 ? null : {
						id: B.FileDescription,
						data: new Fr(e.description)
					},
					{
						id: B.FileName,
						data: new Fr(r)
					},
					{
						id: B.FileMediaType,
						data: e.mimeType
					},
					{
						id: B.FileData,
						data: e.data
					},
					{
						id: B.FileUID,
						data: i
					}
				]
			});
		}
		for (let [n, i] of Object.entries(e.raw ?? {})) i instanceof Qe && /^\d+$/.test(n) && (r.find((e) => e.mimeType === i.mimeType && Re(e.data, i.data)) || t.push({
			id: B.AttachedFile,
			data: [
				i.description === void 0 ? null : {
					id: B.FileDescription,
					data: new Fr(i.description)
				},
				{
					id: B.FileName,
					data: new Fr(i.name ?? "")
				},
				{
					id: B.FileMediaType,
					data: i.mimeType ?? ""
				},
				{
					id: B.FileData,
					data: i.data
				},
				{
					id: B.FileUID,
					data: BigInt(n)
				}
			]
		}));
		t.length !== 0 && (this.attachmentsElement = {
			id: B.Attachments,
			data: t
		});
	}
	createSegment() {
		this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
		let e = {
			id: B.Segment,
			size: this.format._options.appendOnly ? -1 : Tu,
			data: [
				this.seekHead,
				this.segmentInfo,
				this.tracksElement,
				this.attachmentsElement,
				this.tagsElement
			]
		};
		if (this.segment = e, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(e), this.format._options.onSegmentHeader) {
			let { data: e, start: t } = this.writer.stopTrackingWrites();
			this.format._options.onSegmentHeader(e, t);
		}
	}
	createCues() {
		this.cues = {
			id: B.Cues,
			data: []
		};
	}
	get segmentDataOffset() {
		return a(this.segment), this.ebmlWriter.dataOffsets.get(this.segment);
	}
	allTracksAreKnown() {
		for (let e of this.output._tracks) if (!e.source._closed && !this.trackDatas.some((t) => t.track === e)) return !1;
		return !0;
	}
	async getMimeType() {
		await this.allTracksKnown.promise;
		let e = this.trackDatas.map((e) => e.type === "video" || e.type === "audio" ? e.info.decoderConfig.codec : { webvtt: "wvtt" }[e.track.source._codec]);
		return ri({
			isWebM: this.format instanceof nd,
			hasVideo: this.trackDatas.some((e) => e.type === "video"),
			hasAudio: this.trackDatas.some((e) => e.type === "audio"),
			codecStrings: e
		});
	}
	getVideoTrackData(e, t, n) {
		let r = this.trackDatas.find((t) => t.track === e);
		if (r) return r;
		jt(n), a(n), a(n.decoderConfig), a(n.decoderConfig.codedWidth !== void 0), a(n.decoderConfig.codedHeight !== void 0);
		let i = n.decoderConfig.displayAspectWidth, o = n.decoderConfig.displayAspectHeight, s = i === void 0 || o === void 0 ? null : We({
			num: i,
			den: o
		}), c = {
			track: e,
			type: "video",
			info: {
				width: n.decoderConfig.codedWidth,
				height: n.decoderConfig.codedHeight,
				aspectRatio: s,
				decoderConfig: n.decoderConfig,
				alphaMode: !!t.sideData.alpha
			},
			chunkQueue: [],
			lastWrittenMsTimestamp: null,
			closed: !1
		};
		return e.source._codec === "vp9" ? c.info.decoderConfig = {
			...c.info.decoderConfig,
			description: new Uint8Array(gt(c.info.decoderConfig.codec))
		} : e.source._codec === "av1" && (c.info.decoderConfig = {
			...c.info.decoderConfig,
			description: new Uint8Array(_t(c.info.decoderConfig.codec))
		}), this.trackDatas.push(c), this.trackDatas.sort((e, t) => e.track.id - t.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), c;
	}
	getAudioTrackData(e, t, n) {
		let r = this.trackDatas.find((t) => t.track === e);
		if (r) return r;
		Nt(n), a(n), a(n.decoderConfig);
		let i = { ...n.decoderConfig }, o = !1;
		if (e.source._codec === "aac" && !i.description) {
			let e = Ni(Us.tempFromBytes(t.data));
			if (!e) throw Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
			let n = F[e.samplingFrequencyIndex], r = rt[e.channelConfiguration];
			if (n === void 0 || r === void 0) throw Error("Invalid ADTS frame header.");
			i.description = at({
				objectType: e.objectType,
				sampleRate: n,
				numberOfChannels: r
			}), o = !0;
		}
		let s = {
			track: e,
			type: "audio",
			info: {
				numberOfChannels: n.decoderConfig.numberOfChannels,
				sampleRate: n.decoderConfig.sampleRate,
				decoderConfig: i,
				requiresAdtsStripping: o
			},
			chunkQueue: [],
			lastWrittenMsTimestamp: null,
			closed: !1
		};
		return this.trackDatas.push(s), this.trackDatas.sort((e, t) => e.track.id - t.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), s;
	}
	getSubtitleTrackData(e, t) {
		let n = this.trackDatas.find((t) => t.track === e);
		if (n) return n;
		Pt(t), a(t), a(t.config);
		let r = {
			track: e,
			type: "subtitle",
			info: { config: t.config },
			chunkQueue: [],
			lastWrittenMsTimestamp: null,
			closed: !1
		};
		return this.trackDatas.push(r), this.trackDatas.sort((e, t) => e.track.id - t.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), r;
	}
	async addEncodedVideoPacket(e, t, n) {
		let r = await this.mutex.acquire();
		try {
			let r = this.getVideoTrackData(e, t, n), i = t.type === "key";
			this.validateTimestamp(r.track, t.timestamp, i);
			let a = t.timestamp, o = t.duration;
			e.metadata.frameRate !== void 0 && (a = he(a, e.metadata.frameRate), o = he(o, e.metadata.frameRate));
			let s = r.info.alphaMode ? t.sideData.alpha ?? null : null, c = this.createInternalChunk(t.data, a, o, t.type, s);
			e.source._codec === "vp9" && this.fixVP9ColorSpace(r, c), r.chunkQueue.push(c), await this.interleaveChunks();
		} finally {
			r();
		}
	}
	async addEncodedAudioPacket(e, t, n) {
		let r = await this.mutex.acquire();
		try {
			let r = this.getAudioTrackData(e, t, n), i = t.data;
			if (r.info.requiresAdtsStripping) {
				let e = Ni(Us.tempFromBytes(i));
				if (!e) throw Error("Expected ADTS frame, didn't get one.");
				let t = e.crcCheck === null ? 7 : 9;
				i = i.subarray(t);
			}
			let a = t.type === "key";
			this.validateTimestamp(r.track, t.timestamp, a);
			let o = this.createInternalChunk(i, t.timestamp, t.duration, t.type);
			r.chunkQueue.push(o), await this.interleaveChunks();
		} finally {
			r();
		}
	}
	async addSubtitleCue(e, t, n) {
		let r = await this.mutex.acquire();
		try {
			let r = this.getSubtitleTrackData(e, n);
			this.validateTimestamp(r.track, t.timestamp, !0);
			let i = t.text, a = Math.round(t.timestamp * 1e3);
			bc.lastIndex = 0, i = i.replace(bc, (e) => `<${Cc(Sc(e.slice(1, -1)) - a)}>`);
			let o = h.encode(i), s = `${t.settings ?? ""}\n${t.identifier ?? ""}\n${t.notes ?? ""}`, c = this.createInternalChunk(o, t.timestamp, t.duration, "key", s.trim() ? h.encode(s) : null);
			r.chunkQueue.push(c), await this.interleaveChunks();
		} finally {
			r();
		}
	}
	async interleaveChunks(e = !1) {
		if (!(!e && !this.allTracksAreKnown())) {
			outer: for (;;) {
				let t = null, n = Infinity;
				for (let r of this.trackDatas) {
					if (!e && r.chunkQueue.length === 0 && !r.closed) break outer;
					r.chunkQueue.length > 0 && r.chunkQueue[0].timestamp < n && (t = r, n = r.chunkQueue[0].timestamp);
				}
				if (!t) break;
				let r = t.chunkQueue.shift();
				this.writeBlock(t, r);
			}
			e || await this.writer.flush();
		}
	}
	fixVP9ColorSpace(e, t) {
		if (t.type !== "key" || !e.info.decoderConfig.colorSpace || !e.info.decoderConfig.colorSpace.matrix) return;
		let n = new P(t.data);
		n.skipBits(2);
		let r = n.readBits(1), i = (n.readBits(1) << 1) + r;
		if (i === 3 && n.skipBits(1), n.readBits(1) || n.readBits(1) !== 0 || (n.skipBits(2), n.readBits(24) !== 4817730)) return;
		i >= 2 && n.skipBits(1);
		let a = {
			rgb: 7,
			bt709: 2,
			bt470bg: 1,
			smpte170m: 3
		}[e.info.decoderConfig.colorSpace.matrix];
		d(t.data, n.pos, n.pos + 3, a);
	}
	createInternalChunk(e, t, n, r, i = null) {
		return {
			data: e,
			type: r,
			timestamp: t,
			duration: n,
			additions: i
		};
	}
	writeBlock(e, t) {
		this.segment || this.createSegment();
		let n = Math.round(1e3 * t.timestamp), r = this.trackDatas.every((n) => {
			if (e === n) return t.type === "key";
			let r = n.chunkQueue[0];
			return r ? r.type === "key" : n.closed;
		}), i = !1;
		if (!this.currentCluster) i = !0;
		else {
			a(this.currentClusterStartMsTimestamp !== null), a(this.currentClusterMaxMsTimestamp !== null);
			let e = n - this.currentClusterStartMsTimestamp;
			i = r && n > this.currentClusterMaxMsTimestamp && e >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || e > Cu;
		}
		i && this.createNewCluster(n);
		let o = n - this.currentClusterStartMsTimestamp;
		if (o < Su) return;
		let s = /* @__PURE__ */ new Uint8Array(4), c = new DataView(s.buffer);
		c.setUint8(0, 128 | e.track.id), c.setInt16(1, o, !1);
		let l = Math.round(1e3 * t.duration);
		if (t.additions) {
			let r = {
				id: B.BlockGroup,
				data: [
					{
						id: B.Block,
						data: [s, t.data]
					},
					t.type === "delta" ? {
						id: B.ReferenceBlock,
						data: new Pr(e.lastWrittenMsTimestamp - n)
					} : null,
					t.additions ? {
						id: B.BlockAdditions,
						data: [{
							id: B.BlockMore,
							data: [{
								id: B.BlockAddID,
								data: 1
							}, {
								id: B.BlockAdditional,
								data: t.additions
							}]
						}]
					} : null,
					l > 0 ? {
						id: B.BlockDuration,
						data: l
					} : null
				]
			};
			this.ebmlWriter.writeEBML(r);
		} else {
			c.setUint8(3, Number(t.type === "key") << 7);
			let e = {
				id: B.SimpleBlock,
				data: [s, t.data]
			};
			this.ebmlWriter.writeEBML(e);
		}
		this.startTimestamp = Math.min(this.startTimestamp, n), this.endTimestamp = Math.max(this.endTimestamp, n + l), e.lastWrittenMsTimestamp = n, this.trackDatasInCurrentCluster.has(e) || this.trackDatasInCurrentCluster.set(e, { firstMsTimestamp: n }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, n);
	}
	createNewCluster(e) {
		this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
			id: B.Cluster,
			size: this.format._options.appendOnly ? -1 : Eu,
			data: [{
				id: B.Timestamp,
				data: e
			}]
		}, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = e, this.currentClusterMaxMsTimestamp = e, this.trackDatasInCurrentCluster.clear();
	}
	finalizeCurrentCluster() {
		if (a(this.currentCluster), !this.format._options.appendOnly) {
			let e = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster), t = this.writer.getPos();
			this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(e, Eu), this.writer.seek(t);
		}
		if (this.format._options.onCluster) {
			a(this.currentClusterStartMsTimestamp !== null);
			let { data: e, start: t } = this.writer.stopTrackingWrites();
			this.format._options.onCluster(e, t, this.currentClusterStartMsTimestamp / 1e3);
		}
		let e = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset, t = /* @__PURE__ */ new Map();
		for (let [e, { firstMsTimestamp: n }] of this.trackDatasInCurrentCluster) t.has(n) || t.set(n, []), t.get(n).push(e);
		let n = [...t.entries()].sort((e, t) => e[0] - t[0]);
		for (let [t, r] of n) a(this.cues), this.cues.data.push({
			id: B.CuePoint,
			data: [{
				id: B.CueTime,
				data: t
			}, ...r.map((t) => ({
				id: B.CueTrackPositions,
				data: [{
					id: B.CueTrack,
					data: t.track.id
				}, {
					id: B.CueClusterPosition,
					data: e
				}]
			}))]
		});
	}
	async onTrackClose(e) {
		let t = await this.mutex.acquire(), n = this.trackDatas.find((t) => t.track === e);
		n && (n.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), t();
	}
	async finalize() {
		let e = await this.mutex.acquire();
		this.allTracksKnown.resolve();
		for (let e of this.trackDatas) e.closed = !0;
		if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), a(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
			let e = this.writer.getPos() - this.segmentDataOffset;
			this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(e, Tu);
			let t = this.startTimestamp === Infinity ? 0 : this.endTimestamp - this.startTimestamp;
			this.segmentDuration.data = new Nr(t), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), a(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead);
		}
		e();
	}
}, ku = class {
	constructor(e) {
		this.writer = e, this.helper = /* @__PURE__ */ new Uint8Array(8), this.helperView = new DataView(this.helper.buffer);
	}
	writeU32(e) {
		this.helperView.setUint32(0, e, !1), this.writer.write(this.helper.subarray(0, 4));
	}
	writeXingFrame(e) {
		let t = this.writer.getPos(), n = 224 | e.mpegVersionId << 3 | e.layer << 1, r;
		r = e.mpegVersionId & 2 && e.mpegVersionId & 1 ? 0 : 1;
		let i = -1, a = r * 16 * 4 + e.layer * 16;
		for (let t = 0; t < 16; t++) {
			let n = It[a + t];
			if (Rt(r, e.layer, 1e3 * n, e.sampleRate, 0) >= 155) {
				i = t;
				break;
			}
		}
		if (i === -1) throw Error("No suitable bitrate found.");
		let o = i << 4 | e.frequencyIndex << 2 | 0, s = e.channel << 6 | e.modeExtension << 4 | e.copyright << 3 | e.original << 2 | e.emphasis;
		this.helper[0] = 255, this.helper[1] = n, this.helper[2] = o, this.helper[3] = s, this.writer.write(this.helper.subarray(0, 4));
		let c = Bt(e.mpegVersionId, e.channel);
		this.writer.seek(t + c), this.writeU32(Lt);
		let l = 0;
		e.frameCount !== null && (l |= Wt.FrameCount), e.fileSize !== null && (l |= Wt.FileSize), e.toc !== null && (l |= Wt.Toc), this.writeU32(l), this.writeU32(e.frameCount ?? 0), this.writeU32(e.fileSize ?? 0), this.writer.write(e.toc ?? /* @__PURE__ */ new Uint8Array(100));
		let u = It[a + i], d = Rt(r, e.layer, 1e3 * u, e.sampleRate, 0);
		this.writer.seek(t + d);
	}
}, Au = class extends hc {
	constructor(e, t) {
		super(e), this.xingFrameData = null, this.frameCount = 0, this.framePositions = [], this.xingFramePos = null, this.format = t;
	}
	async start() {
		let e = await this.mutex.acquire();
		this.writer = await this.output._getRootWriter(this.format._options.xingHeader === !1), this.mp3Writer = new ku(this.writer), et(this.output._metadataTags) || new mc(this.writer).writeId3V2Tag(this.output._metadataTags), e();
	}
	async getMimeType() {
		return "audio/mpeg";
	}
	async addEncodedVideoPacket() {
		throw Error("MP3 does not support video.");
	}
	async addEncodedAudioPacket(e, t) {
		let n = await this.mutex.acquire();
		try {
			let n = this.format._options.xingHeader !== !1;
			if (!this.xingFrameData && n) {
				let e = p(t.data);
				if (e.byteLength < 4) throw Error("Invalid MP3 header in sample.");
				let n = Vt(e.getUint32(0, !1), null).header;
				if (!n) throw Error("Invalid MP3 header in sample.");
				let r = Bt(n.mpegVersionId, n.channel);
				if (e.byteLength >= r + 4) {
					let t = e.getUint32(r, !1);
					if (t === 1483304551 || t === 1231971951) return;
				}
				this.xingFrameData = {
					mpegVersionId: n.mpegVersionId,
					layer: n.layer,
					frequencyIndex: n.frequencyIndex,
					sampleRate: n.sampleRate,
					channel: n.channel,
					modeExtension: n.modeExtension,
					copyright: n.copyright,
					original: n.original,
					emphasis: n.emphasis,
					frameCount: null,
					fileSize: null,
					toc: null
				}, this.xingFramePos = this.writer.getPos(), this.mp3Writer.writeXingFrame(this.xingFrameData), this.frameCount++;
			}
			this.validateTimestamp(e, t.timestamp, t.type === "key"), n && this.framePositions.push(this.writer.getPos()), this.writer.write(t.data), this.frameCount++, await this.writer.flush();
		} finally {
			n();
		}
	}
	async addSubtitleCue() {
		throw Error("MP3 does not support subtitles.");
	}
	async finalize() {
		if (!this.xingFrameData || this.xingFramePos === null) return;
		let e = await this.mutex.acquire(), t = this.writer.getPos() - this.xingFramePos;
		this.writer.seek(this.xingFramePos);
		let n = /* @__PURE__ */ new Uint8Array(100);
		for (let e = 0; e < 100; e++) {
			let r = Math.floor(this.framePositions.length * (e / 100));
			n[e] = 256 * ((this.framePositions[r] - this.xingFramePos) / t);
		}
		if (this.xingFrameData.frameCount = this.frameCount, this.xingFrameData.fileSize = t, this.xingFrameData.toc = n, this.format._options.onXingFrame && this.writer.startTrackingWrites(), this.mp3Writer.writeXingFrame(this.xingFrameData), this.format._options.onXingFrame) {
			let { data: e, start: t } = this.writer.stopTrackingWrites();
			this.format._options.onXingFrame(e, t);
		}
		e();
	}
}, ju = 8192, Mu = class extends hc {
	constructor(e, t) {
		super(e), this.trackDatas = [], this.bosPagesWritten = !1, this.allTracksKnown = O(), this.pageBytes = new Uint8Array(Si), this.pageView = new DataView(this.pageBytes.buffer), this.format = t;
	}
	async start() {
		let e = await this.mutex.acquire();
		this.writer = await this.output._getRootWriter(!0), e();
	}
	async getMimeType() {
		return await this.allTracksKnown.promise, xi({ codecStrings: this.trackDatas.map((e) => e.codecInfo.codec) });
	}
	addEncodedVideoPacket() {
		throw Error("Video tracks are not supported.");
	}
	getTrackData(e, t) {
		let n = this.trackDatas.find((t) => t.track === e);
		if (n) return n;
		let r;
		do
			r = Math.floor(2 ** 32 * Math.random());
		while (this.trackDatas.some((e) => e.serialNumber === r));
		a(e.source._codec === "vorbis" || e.source._codec === "opus"), Nt(t), a(t), a(t.decoderConfig);
		let i = {
			track: e,
			serialNumber: r,
			internalSampleRate: e.source._codec === "opus" ? xt : t.decoderConfig.sampleRate,
			codecInfo: {
				codec: e.source._codec,
				vorbisInfo: null,
				opusInfo: null
			},
			vorbisLastBlocksize: null,
			packetQueue: [],
			currentTimestampInSamples: 0,
			pagesWritten: 0,
			currentGranulePosition: 0,
			currentLacingValues: [],
			currentPageData: [],
			currentPageSize: 27,
			currentPageStartsWithFreshPacket: !0,
			currentPageStartTimestampInSamples: 0,
			closed: !1
		};
		return this.queueHeaderPackets(i, t), this.trackDatas.push(i), this.allTracksAreKnown() && this.allTracksKnown.resolve(), i;
	}
	queueHeaderPackets(e, t) {
		if (a(t.decoderConfig), e.track.source._codec === "vorbis") {
			a(t.decoderConfig.description);
			let n = f(t.decoderConfig.description);
			if (n[0] !== 2) throw TypeError("First byte of Vorbis decoder description must be 2.");
			let r = 1, i = () => {
				let e = 0;
				for (;;) {
					let t = n[r++];
					if (t === void 0) throw TypeError("Vorbis decoder description is too short.");
					if (e += t, t < 255) return e;
				}
			}, o = i(), s = i();
			if (n.length - r <= 0) throw TypeError("Vorbis decoder description is too short.");
			let c = n.subarray(r, r += o);
			r += s;
			let l = n.subarray(r), u = /* @__PURE__ */ new Uint8Array(7);
			u[0] = 3, u[1] = 118, u[2] = 111, u[3] = 114, u[4] = 98, u[5] = 105, u[6] = 115;
			let d = Ln(u, this.output._metadataTags, !0);
			e.packetQueue.push({
				data: c,
				timestampInSamples: 0,
				durationInSamples: 0,
				forcePageFlush: !0
			}, {
				data: d,
				timestampInSamples: 0,
				durationInSamples: 0,
				forcePageFlush: !1
			}, {
				data: l,
				timestampInSamples: 0,
				durationInSamples: 0,
				forcePageFlush: !0
			});
			let m = p(c).getUint8(28);
			e.codecInfo.vorbisInfo = {
				blocksizes: [1 << (m & 15), 1 << (m >> 4)],
				modeBlockflags: Nn(l).modeBlockflags
			};
		} else if (e.track.source._codec === "opus") {
			if (!t.decoderConfig.description) throw TypeError("For Ogg, Opus decoder description is required.");
			let n = f(t.decoderConfig.description), r = /* @__PURE__ */ new Uint8Array(8), i = p(r);
			i.setUint32(0, 1332770163, !1), i.setUint32(4, 1415669619, !1);
			let a = Ln(r, this.output._metadataTags, !0);
			e.packetQueue.push({
				data: n,
				timestampInSamples: 0,
				durationInSamples: 0,
				forcePageFlush: !0
			}, {
				data: a,
				timestampInSamples: 0,
				durationInSamples: 0,
				forcePageFlush: !0
			}), e.codecInfo.opusInfo = { preSkip: An(n).preSkip };
		}
	}
	async addEncodedAudioPacket(e, t, n) {
		let r = await this.mutex.acquire();
		try {
			let r = this.getTrackData(e, n);
			this.validateTimestamp(r.track, t.timestamp, t.type === "key");
			let i = r.currentTimestampInSamples, { durationInSamples: a, vorbisBlockSize: o } = bi(t.data, r.codecInfo, r.vorbisLastBlocksize);
			r.currentTimestampInSamples += a, r.vorbisLastBlocksize = o, r.packetQueue.push({
				data: t.data,
				timestampInSamples: i,
				durationInSamples: a,
				forcePageFlush: !1
			}), await this.interleavePages();
		} finally {
			r();
		}
	}
	addSubtitleCue() {
		throw Error("Subtitle tracks are not supported.");
	}
	allTracksAreKnown() {
		for (let e of this.output._tracks) if (!e.source._closed && !this.trackDatas.some((t) => t.track === e)) return !1;
		return !0;
	}
	async interleavePages(e = !1) {
		if (!this.bosPagesWritten) {
			if (!this.allTracksAreKnown() && !e) return;
			for (let e of this.trackDatas) for (; e.packetQueue.length > 0;) {
				let t = e.packetQueue.shift();
				if (this.writePacket(e, t, !1), t.forcePageFlush) break;
			}
			this.bosPagesWritten = !0;
		}
		outer: for (;;) {
			let t = null, n = Infinity;
			for (let r of this.trackDatas) {
				if (!e && r.packetQueue.length <= 1 && !r.closed) break outer;
				r.packetQueue.length > 0 && r.packetQueue[0].timestampInSamples < n && (t = r, n = r.packetQueue[0].timestampInSamples);
			}
			if (!t) break;
			let r = t.packetQueue.shift(), i = t.packetQueue.length === 0;
			this.writePacket(t, r, i);
		}
		e || await this.writer.flush();
	}
	writePacket(e, t, n) {
		let r = t.timestampInSamples + t.durationInSamples;
		if (this.format._options.maximumPageDuration !== void 0) {
			let t = this.format._options.maximumPageDuration * e.internalSampleRate;
			e.currentLacingValues.length > 0 && r - e.currentPageStartTimestampInSamples > t && this.writePage(e, !1);
		}
		let i = t.data.length, a = 0, o = 0;
		for (;;) {
			e.currentLacingValues.length === 0 && a > 0 && (e.currentPageStartsWithFreshPacket = !1);
			let r = Math.min(255, i);
			e.currentLacingValues.push(r), e.currentPageSize++, o += r;
			let s = i < 255;
			if (e.currentLacingValues.length === 255) {
				let r = t.data.subarray(a, o);
				if (a = o, e.currentPageData.push(r), e.currentPageSize += r.length, this.writePage(e, n && s), s) return;
			}
			if (s) break;
			i -= 255;
		}
		let s = t.data.subarray(a);
		e.currentPageData.push(s), e.currentPageSize += s.length, e.currentGranulePosition = r, (e.currentPageSize >= ju || t.forcePageFlush) && this.writePage(e, n);
	}
	writePage(e, t) {
		this.pageView.setUint32(0, gi, !0), this.pageView.setUint8(4, 0);
		let n = 0;
		e.currentPageStartsWithFreshPacket || (n |= 1), e.pagesWritten === 0 && (n |= 2), t && (n |= 4), this.pageView.setUint8(5, n);
		let r = e.currentLacingValues.every((e) => e === 255) ? -1 : e.currentGranulePosition;
		pe(this.pageView, 6, r, !0), this.pageView.setUint32(14, e.serialNumber, !0), this.pageView.setUint32(18, e.pagesWritten, !0), this.pageView.setUint32(22, 0, !0), this.pageView.setUint8(26, e.currentLacingValues.length), this.pageBytes.set(e.currentLacingValues, 27);
		let i = 27 + e.currentLacingValues.length;
		for (let t of e.currentPageData) this.pageBytes.set(t, i), i += t.length;
		let a = this.pageBytes.subarray(0, i), o = yi(a);
		if (this.pageView.setUint32(22, o, !0), e.pagesWritten++, e.currentLacingValues.length = 0, e.currentPageData.length = 0, e.currentPageSize = 27, e.currentPageStartsWithFreshPacket = !0, e.currentPageStartTimestampInSamples = e.currentGranulePosition, this.format._options.onPage && this.writer.startTrackingWrites(), this.writer.write(a), this.format._options.onPage) {
			let { data: t, start: n } = this.writer.stopTrackingWrites();
			this.format._options.onPage(t, n, e.track.source);
		}
	}
	async onTrackClose(e) {
		let t = await this.mutex.acquire(), n = this.trackDatas.find((t) => t.track === e);
		n && (n.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleavePages(), t();
	}
	async finalize() {
		let e = await this.mutex.acquire();
		this.allTracksKnown.resolve();
		for (let e of this.trackDatas) e.closed = !0;
		await this.interleavePages(!0);
		for (let e of this.trackDatas) e.currentLacingValues.length > 0 && this.writePage(e, !0);
		e();
	}
}, Nu = class {
	constructor(e) {
		this.writer = e, this.helper = /* @__PURE__ */ new Uint8Array(8), this.helperView = new DataView(this.helper.buffer);
	}
	writeU16(e) {
		this.helperView.setUint16(0, e, !0), this.writer.write(this.helper.subarray(0, 2));
	}
	writeU32(e) {
		this.helperView.setUint32(0, e, !0), this.writer.write(this.helper.subarray(0, 4));
	}
	writeU64(e) {
		this.helperView.setUint32(0, e, !0), this.helperView.setUint32(4, Math.floor(e / 2 ** 32), !0), this.writer.write(this.helper);
	}
	writeAscii(e) {
		this.writer.write(new TextEncoder().encode(e));
	}
}, Pu = class extends hc {
	constructor(e, t) {
		super(e), this.headerWritten = !1, this.dataSize = 0, this.sampleRate = null, this.sampleCount = 0, this.riffSizePos = null, this.dataSizePos = null, this.ds64RiffSizePos = null, this.ds64DataSizePos = null, this.ds64SampleCountPos = null, this.format = t, this.isRf64 = !!t._options.large;
	}
	async start() {
		let e = await this.mutex.acquire();
		this.writer = await this.output._getRootWriter(!1), this.riffWriter = new Nu(this.writer), e();
	}
	async getMimeType() {
		return "audio/wav";
	}
	async addEncodedVideoPacket() {
		throw Error("WAVE does not support video.");
	}
	async addEncodedAudioPacket(e, t, n) {
		let r = await this.mutex.acquire();
		try {
			if (this.headerWritten ||= (Nt(n), a(n), a(n.decoderConfig), this.writeHeader(e, n.decoderConfig), this.sampleRate = n.decoderConfig.sampleRate, !0), this.validateTimestamp(e, t.timestamp, t.type === "key"), !this.isRf64 && this.writer.getPos() + t.data.byteLength >= 2 ** 32) throw Error("Adding more audio data would exceed the maximum RIFF size of 4 GiB. To write larger files, use RF64 by setting `large: true` in the WavOutputFormatOptions.");
			this.writer.write(t.data), this.dataSize += t.data.byteLength, this.sampleCount += Math.round(t.duration * this.sampleRate), await this.writer.flush();
		} finally {
			r();
		}
	}
	async addSubtitleCue() {
		throw Error("WAVE does not support subtitles.");
	}
	writeHeader(e, t) {
		this.format._options.onHeader && this.writer.startTrackingWrites();
		let n, r = e.source._codec, i = Ct(r);
		n = i.dataType === "ulaw" ? ki.MULAW : i.dataType === "alaw" ? ki.ALAW : i.dataType === "float" ? ki.IEEE_FLOAT : ki.PCM;
		let a = t.numberOfChannels, o = t.sampleRate, s = i.sampleSize * a;
		if (this.riffWriter.writeAscii(this.isRf64 ? "RF64" : "RIFF"), this.isRf64 ? this.riffWriter.writeU32(4294967295) : (this.riffSizePos = this.writer.getPos(), this.riffWriter.writeU32(0)), this.riffWriter.writeAscii("WAVE"), this.isRf64 && (this.riffWriter.writeAscii("ds64"), this.riffWriter.writeU32(28), this.ds64RiffSizePos = this.writer.getPos(), this.riffWriter.writeU64(0), this.ds64DataSizePos = this.writer.getPos(), this.riffWriter.writeU64(0), this.ds64SampleCountPos = this.writer.getPos(), this.riffWriter.writeU64(0), this.riffWriter.writeU32(0)), this.riffWriter.writeAscii("fmt "), this.riffWriter.writeU32(16), this.riffWriter.writeU16(n), this.riffWriter.writeU16(a), this.riffWriter.writeU32(o), this.riffWriter.writeU32(o * s), this.riffWriter.writeU16(s), this.riffWriter.writeU16(8 * i.sampleSize), !et(this.output._metadataTags)) {
			let e = this.format._options.metadataFormat ?? "info";
			e === "info" ? this.writeInfoChunk(this.output._metadataTags) : e === "id3" ? this.writeId3Chunk(this.output._metadataTags) : A(e);
		}
		if (this.riffWriter.writeAscii("data"), this.isRf64 ? this.riffWriter.writeU32(4294967295) : (this.dataSizePos = this.writer.getPos(), this.riffWriter.writeU32(0)), this.format._options.onHeader) {
			let { data: e, start: t } = this.writer.stopTrackingWrites();
			this.format._options.onHeader(e, t);
		}
	}
	writeInfoChunk(e) {
		let t = this.writer.getPos();
		this.riffWriter.writeAscii("LIST"), this.riffWriter.writeU32(0), this.riffWriter.writeAscii("INFO");
		let n = /* @__PURE__ */ new Set(), r = (e, t) => {
			if (!g(t)) {
				i._warn(`Didn't write tag '${e}' because '${t}' is not ISO 8859-1-compatible.`);
				return;
			}
			let r = t.length + 1, a = new Uint8Array(r);
			for (let e = 0; e < t.length; e++) a[e] = t.charCodeAt(e);
			this.riffWriter.writeAscii(e), this.riffWriter.writeU32(r), this.writer.write(a), r & 1 && this.writer.write(/* @__PURE__ */ new Uint8Array(1)), n.add(e);
		};
		for (let { key: t, value: i } of Pe(e)) switch (t) {
			case "title":
				r("INAM", i), n.add("INAM");
				break;
			case "artist":
				r("IART", i), n.add("IART");
				break;
			case "album":
				r("IPRD", i), n.add("IPRD");
				break;
			case "trackNumber":
				r("ITRK", e.tracksTotal === void 0 ? i.toString() : `${i}/${e.tracksTotal}`), n.add("ITRK");
				break;
			case "genre":
				r("IGNR", i), n.add("IGNR");
				break;
			case "date":
				r("ICRD", i.toISOString().slice(0, 10)), n.add("ICRD");
				break;
			case "comment":
				r("ICMT", i), n.add("ICMT");
				break;
			case "albumArtist":
			case "discNumber":
			case "tracksTotal":
			case "discsTotal":
			case "description":
			case "lyrics":
			case "images": break;
			case "raw": break;
			default: A(t);
		}
		if (e.raw) for (let t in e.raw) {
			let i = e.raw[t];
			i == null || t.length !== 4 || n.has(t) || typeof i == "string" && r(t, i);
		}
		let a = this.writer.getPos(), o = a - t - 8;
		this.writer.seek(t + 4), this.riffWriter.writeU32(o), this.writer.seek(a), o & 1 && this.writer.write(/* @__PURE__ */ new Uint8Array(1));
	}
	writeId3Chunk(e) {
		let t = this.writer.getPos();
		this.riffWriter.writeAscii("ID3 "), this.riffWriter.writeU32(0);
		let n = new mc(this.writer).writeId3V2Tag(e), r = this.writer.getPos();
		this.writer.seek(t + 4), this.riffWriter.writeU32(n), this.writer.seek(r), n & 1 && this.writer.write(/* @__PURE__ */ new Uint8Array(1));
	}
	async finalize() {
		let e = await this.mutex.acquire(), t = this.writer.getPos();
		this.isRf64 ? (a(this.ds64RiffSizePos !== null), this.writer.seek(this.ds64RiffSizePos), this.riffWriter.writeU64(t - 8), a(this.ds64DataSizePos !== null), this.writer.seek(this.ds64DataSizePos), this.riffWriter.writeU64(this.dataSize), a(this.ds64SampleCountPos !== null), this.writer.seek(this.ds64SampleCountPos), this.riffWriter.writeU64(this.sampleCount)) : (a(this.riffSizePos !== null), this.writer.seek(this.riffSizePos), this.riffWriter.writeU32(t - 8), a(this.dataSizePos !== null), this.writer.seek(this.dataSizePos), this.riffWriter.writeU32(this.dataSize)), e();
	}
}, Fu = class {
	constructor(e) {
		this.sourceSampleRate = null, this.sourceNumberOfChannels = null, this.startTime = null, this.bufferStartFrame = 0, this.maxWrittenFrame = null, this.targetSampleRate = e.targetSampleRate, this.targetNumberOfChannels = e.targetNumberOfChannels, this.onSample = e.onSample, this.bufferSizeInFrames = Math.floor(this.targetSampleRate * 5), this.bufferSizeInSamples = this.bufferSizeInFrames * this.targetNumberOfChannels, this.outputBuffer = new Float32Array(this.bufferSizeInSamples);
	}
	doChannelMixerSetup() {
		a(this.sourceNumberOfChannels !== null);
		let e = this.sourceNumberOfChannels, t = this.targetNumberOfChannels;
		e === 1 && t === 2 ? this.channelMixer = (t, n) => t[n * e] : e === 1 && t === 4 ? this.channelMixer = (t, n, r) => t[n * e] * +(r < 2) : e === 1 && t === 6 ? this.channelMixer = (t, n, r) => t[n * e] * +(r === 2) : e === 2 && t === 1 ? this.channelMixer = (t, n) => {
			let r = n * e;
			return .5 * (t[r] + t[r + 1]);
		} : e === 2 && t === 4 || e === 2 && t === 6 ? this.channelMixer = (t, n, r) => t[n * e + r] * +(r < 2) : e === 4 && t === 1 ? this.channelMixer = (t, n) => {
			let r = n * e;
			return .25 * (t[r] + t[r + 1] + t[r + 2] + t[r + 3]);
		} : e === 4 && t === 2 ? this.channelMixer = (t, n, r) => {
			let i = n * e;
			return .5 * (t[i + r] + t[i + r + 2]);
		} : e === 4 && t === 6 ? this.channelMixer = (t, n, r) => {
			let i = n * e;
			return r < 2 ? t[i + r] : r === 2 || r === 3 ? 0 : t[i + r - 2];
		} : e === 6 && t === 1 ? this.channelMixer = (t, n) => {
			let r = n * e;
			return Math.SQRT1_2 * (t[r] + t[r + 1]) + t[r + 2] + .5 * (t[r + 4] + t[r + 5]);
		} : e === 6 && t === 2 ? this.channelMixer = (t, n, r) => {
			let i = n * e;
			return t[i + r] + Math.SQRT1_2 * (t[i + 2] + t[i + r + 4]);
		} : e === 6 && t === 4 ? this.channelMixer = (t, n, r) => {
			let i = n * e;
			return r < 2 ? t[i + r] + Math.SQRT1_2 * t[i + 2] : t[i + r + 2];
		} : this.channelMixer = (t, n, r) => r < e ? t[n * e + r] : 0;
	}
	ensureTempBufferSize(e) {
		let t = this.tempSourceBuffer.length;
		for (; t < e;) t *= 2;
		if (t !== this.tempSourceBuffer.length) {
			let e = new Float32Array(t);
			e.set(this.tempSourceBuffer), this.tempSourceBuffer = e;
		}
	}
	async add(e) {
		this.sourceSampleRate === null && (this.sourceSampleRate = e.sampleRate, this.sourceNumberOfChannels = e.numberOfChannels, this.startTime = e.timestamp, this.tempSourceBuffer = new Float32Array(this.sourceSampleRate * this.sourceNumberOfChannels), this.doChannelMixerSetup()), a(this.startTime !== null);
		let t = e.numberOfFrames * e.numberOfChannels;
		this.ensureTempBufferSize(t);
		let n = e.allocationSize({
			planeIndex: 0,
			format: "f32"
		}), r = new Float32Array(this.tempSourceBuffer.buffer, 0, n / 4);
		e.copyTo(r, {
			planeIndex: 0,
			format: "f32"
		});
		let i = e.timestamp - this.startTime, o = i + e.duration, s = Math.floor(i * this.targetSampleRate), c = Math.ceil(o * this.targetSampleRate);
		for (let t = s; t < c; t++) {
			if (t < this.bufferStartFrame) continue;
			for (; t >= this.bufferStartFrame + this.bufferSizeInFrames;) await this.finalizeCurrentBuffer(), this.bufferStartFrame += this.bufferSizeInFrames;
			let n = t - this.bufferStartFrame;
			a(n < this.bufferSizeInFrames);
			let o = (t / this.targetSampleRate - i) * this.sourceSampleRate, s = Math.floor(o), c = Math.ceil(o), l = o - s;
			for (let t = 0; t < this.targetNumberOfChannels; t++) {
				let i = 0, a = 0;
				s >= 0 && s < e.numberOfFrames && (i = this.channelMixer(r, s, t)), c >= 0 && c < e.numberOfFrames && (a = this.channelMixer(r, c, t));
				let o = i + l * (a - i), u = n * this.targetNumberOfChannels + t;
				this.outputBuffer[u] += o;
			}
			this.maxWrittenFrame === null ? this.maxWrittenFrame = n : this.maxWrittenFrame = Math.max(this.maxWrittenFrame, n);
		}
	}
	async finalizeCurrentBuffer() {
		if (this.maxWrittenFrame === null) return;
		a(this.startTime !== null);
		let e = (this.maxWrittenFrame + 1) * this.targetNumberOfChannels, t = new Float32Array(e);
		t.set(this.outputBuffer.subarray(0, e));
		let n = new No({
			format: "f32",
			sampleRate: this.targetSampleRate,
			numberOfChannels: this.targetNumberOfChannels,
			timestamp: this.startTime + this.bufferStartFrame / this.targetSampleRate,
			data: t
		});
		await this.onSample(n), this.outputBuffer.fill(0), this.maxWrittenFrame = null;
	}
	finalize() {
		return this.finalizeCurrentBuffer();
	}
}, Iu = class {
	constructor() {
		this._connectedTrack = null, this._closingPromise = null, this._closed = !1;
	}
	_ensureValidAdd() {
		if (!this._connectedTrack) throw Error("Source is not connected to an output track.");
		if (this._connectedTrack.output.state === "canceled") throw Error("Output has been canceled.");
		if (this._connectedTrack.output.state === "finalizing" || this._connectedTrack.output.state === "finalized") throw Error("Output has been finalized.");
		if (this._connectedTrack.output.state === "pending") throw Error("Output has not started.");
		if (this._closed) throw Error("Source is closed.");
	}
	async _start() {}
	async _flushAndClose(e) {}
	close() {
		if (this._closingPromise) return;
		let e = this._connectedTrack;
		if (!e) throw Error("Cannot call close without connecting the source to an output track.");
		if (e.output.state === "pending") throw Error("Cannot call close before output has been started.");
		this._closingPromise = (async () => {
			await this._flushAndClose(!1), this._closed = !0, !(e.output.state === "finalizing" || e.output.state === "finalized") && e.output._muxer.onTrackClose(e);
		})();
	}
	async _flushOrWaitForOngoingClose(e) {
		return this._closingPromise ??= (async () => {
			await this._flushAndClose(e), this._closed = !0;
		})();
	}
}, Lu = class extends Iu {
	constructor(e) {
		if (super(), this._connectedTrack = null, !ot.includes(e)) throw TypeError(`Invalid video codec '${e}'. Must be one of: ${ot.join(", ")}.`);
		this._codec = e;
	}
}, Ru = (e, t) => {
	if (e.metadata.hasOnlyKeyPackets && t.type !== "key") throw Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.");
}, zu = class extends Lu {
	constructor(e) {
		super(e);
	}
	add(e, t) {
		if (!(e instanceof z)) throw TypeError("packet must be an EncodedPacket.");
		if (e.isMetadataOnly) throw TypeError("Metadata-only packets cannot be added.");
		if (t !== void 0 && (!t || typeof t != "object")) throw TypeError("meta, when provided, must be an object.");
		return this._ensureValidAdd(), Ru(this._connectedTrack, e), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, e, t);
	}
}, Bu = class {
	constructor(e, t) {
		this.source = e, this.encodingConfig = t, this.ensureEncoderPromise = null, this.encoderInitialized = !1, this.encoder = null, this.muxer = null, this.lastMultipleOfKeyFrameInterval = -1, this.emittedEncoderPackets = 0, this.codedWidth = null, this.codedHeight = null, this.outputWidth = null, this.outputHeight = null, this.frameRateLastSample = null, this.frameRateLastTimestamp = null, this.frameRateLastEndTimestamp = null, this.preciseTimings = [], this.customEncoder = null, this.customEncoderCallSerializer = new Ce(), this.customEncoderQueueSize = 0, this.alphaEncoder = null, this.splitter = null, this.splitterCreationFailed = !1, this.alphaFrameQueue = [], this.error = null, this.closed = !1, this.lastMuxerPromise = Promise.resolve();
	}
	async add(e, t, n) {
		let r = e;
		try {
			this.checkForEncoderError(), this.source._ensureValidAdd();
			let i = this.encodingConfig, o = i.sizeChangeBehavior ?? "deny", s = !1;
			if (this.codedWidth !== null && this.codedHeight !== null) {
				if ((e.codedWidth !== this.codedWidth || e.codedHeight !== this.codedHeight) && (s = !0, o === "deny")) throw Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`);
			} else this.codedWidth = e.codedWidth, this.codedHeight = e.codedHeight;
			if (i.transform?.width !== void 0 || i.transform?.height !== void 0 || i.transform?.rotate !== void 0 || i.transform?.crop !== void 0 || i.transform?.force === !0 || s && o !== "passThrough") {
				let n = i.transform?.width, r = i.transform?.height, c = i.transform?.fit ?? "fill";
				s && o !== "passThrough" && (a(this.outputWidth), a(this.outputHeight), a(o !== "deny"), n = this.outputWidth, r = this.outputHeight, c = o);
				let l = await e.transform({
					width: n,
					height: r,
					roundDimensionsTo: 2,
					crop: i.transform?.crop,
					rotate: i.transform?.rotate,
					fit: c,
					alpha: i.alpha
				});
				(this.outputWidth === null || this.outputHeight === null) && (this.outputWidth = l.displayWidth, this.outputHeight = l.displayHeight), t && e.close(), e = l, t = !0;
			} else (this.outputWidth === null || this.outputHeight === null) && (this.outputWidth = e.codedWidth, this.outputHeight = e.codedHeight);
			let c = i.transform?.frameRate;
			if (c !== void 0) {
				let i = e.timestamp + e.duration, a = _e(e.timestamp, c);
				if (this.frameRateLastSample !== null) if (a <= this.frameRateLastTimestamp) {
					this.frameRateLastSample.close(), this.frameRateLastSample = e.clone(), this.frameRateLastEndTimestamp = i;
					return;
				} else await this.padFrameRate(a, n);
				e === r && (e = e.clone(), t = !0), e.setTimestamp(a), e.setDuration(1 / c), this.frameRateLastSample?.close(), this.frameRateLastSample = e.clone(), this.frameRateLastTimestamp = a, this.frameRateLastEndTimestamp = i;
			}
			await this.processAndEncode(e, n);
		} finally {
			t && e.close();
		}
	}
	async processAndEncode(e, t) {
		let n = this.encodingConfig, r;
		if (n.transform?.process) {
			let t = n.transform.process(e);
			if (t instanceof Promise && (t = await t), t === null) return;
			Array.isArray(t) || (t = [t]), r = t.map((t) => t instanceof ho ? t : typeof VideoFrame < "u" && t instanceof VideoFrame ? new ho(t) : new ho(t, {
				timestamp: e.timestamp,
				duration: e.duration
			}));
		} else r = [e];
		try {
			for (let e of r) {
				if (this.encoderInitialized || (this.ensureEncoderPromise || this.ensureEncoder(e), this.encoderInitialized || await this.ensureEncoderPromise), a(this.encoderInitialized), this.closed) break;
				let n = this.encodingConfig.keyFrameInterval ?? 2, r = Math.floor(e.timestamp / n), i = {
					...e.encodeOptions,
					...t
				}, o = {
					...i,
					keyFrame: i.keyFrame === void 0 ? n === 0 || r !== this.lastMultipleOfKeyFrameInterval : i.keyFrame
				};
				if (this.lastMultipleOfKeyFrameInterval = r, this.encodingConfig.onEncodedSample?.(e), this.customEncoder) {
					this.customEncoderQueueSize++;
					let t = e.clone(), n = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(t, o)).then(() => this.customEncoderQueueSize--).catch((e) => this.error ??= e).finally(() => {
						t.close();
					});
					this.customEncoderQueueSize >= 4 && await n;
				} else {
					a(this.encoder);
					let t = e.toVideoFrame(), n = D(this.preciseTimings, t.timestamp, (e) => e.microsecondTimestamp), r = n === -1 ? null : this.preciseTimings[n];
					if (r && r.microsecondTimestamp === t.timestamp ? (r.timestamp !== e.timestamp && (r.timestampIsValid = !1), r.duration !== e.duration && (r.durationIsValid = !1)) : (this.preciseTimings.splice(n + 1, 0, {
						microsecondTimestamp: t.timestamp,
						timestamp: e.timestamp,
						duration: e.duration,
						timestampIsValid: !0,
						durationIsValid: !0
					}), this.preciseTimings.length > 128 && this.preciseTimings.shift()), !this.alphaEncoder) this.encoder.encode(t, o), t.close();
					else if (t.format && !t.format.includes("A") || this.splitterCreationFailed) this.alphaFrameQueue.push(null), this.encoder.encode(t, o), t.close();
					else {
						let e = t.displayWidth, n = t.displayHeight;
						this.splitter ||= new Hu(e, n);
						let { colorFrame: r, alphaFrame: i } = await this.splitter.update(t);
						this.alphaFrameQueue.push(i), this.encoder.encode(r, o), r.close();
					}
					this.encoder.encodeQueueSize >= 4 && await new Promise((e) => this.encoder.addEventListener("dequeue", e, { once: !0 }));
				}
				await this.lastMuxerPromise;
			}
		} finally {
			for (let t of r) t !== e && t.close();
		}
	}
	async padFrameRate(e, t) {
		let n = this.encodingConfig.transform.frameRate;
		a(this.frameRateLastSample);
		let r = Math.round((e - this.frameRateLastTimestamp) * n);
		for (let e = 1; e < r; e++) {
			let r = this.frameRateLastSample.clone();
			r.setTimestamp(this.frameRateLastTimestamp + e / n), r.setDuration(1 / n), await this.processAndEncode(r, t), r.close();
		}
	}
	ensureEncoder(e) {
		this.ensureEncoderPromise = (async () => {
			let t = Ko({
				...this.encodingConfig,
				width: e.codedWidth,
				height: e.codedHeight,
				squarePixelWidth: e.squarePixelWidth,
				squarePixelHeight: e.squarePixelHeight,
				framerate: this.source._connectedTrack?.metadata.frameRate
			});
			this.encodingConfig.onEncoderConfig?.(t);
			let n = cs.find((e) => e.supports(this.encodingConfig.codec, t));
			if (n) this.customEncoder = new n(), this.customEncoder.codec = this.encodingConfig.codec, this.customEncoder.config = t, this.customEncoder.onPacket = (e, t) => {
				if (!(e instanceof z)) throw TypeError("The first argument passed to onPacket must be an EncodedPacket.");
				if (t !== void 0 && (!t || typeof t != "object")) throw TypeError("The second argument passed to onPacket must be an object or undefined.");
				Ru(this.source._connectedTrack, e), this.encodingConfig.onEncodedPacket?.(e, t), this.lastMuxerPromise = this.muxer.addEncodedVideoPacket(this.source._connectedTrack, e, t).catch((e) => {
					this.error ??= e;
				});
			}, await this.customEncoder.init();
			else {
				if (typeof VideoEncoder > "u") throw Error("VideoEncoder is not supported by this browser.");
				if (t.alpha = "discard", this.encodingConfig.alpha === "keep" && (t.latencyMode = "quality"), (t.width % 2 == 1 || t.height % 2 == 1) && (this.encodingConfig.codec === "avc" || this.encodingConfig.codec === "hevc")) throw Error(`The dimensions ${t.width}x${t.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);
				if (!(await VideoEncoder.isConfigSupported(t)).supported) throw Error(`This specific encoder configuration (${t.codec}, ${t.bitrate} bps, ${t.width}x${t.height}, hardware acceleration: ${t.hardwareAcceleration ?? "no-preference"}) is not supported by this browser. Consider using another codec or changing your video parameters.`);
				let e = [], n = [], r = 0, i = 0, o = (e, t, n) => {
					let r = {};
					if (t) {
						let e = new Uint8Array(t.byteLength);
						t.copyTo(e), r.alpha = e;
					}
					let i = z.fromEncodedChunk(e, r), a = D(this.preciseTimings, e.timestamp, (e) => e.microsecondTimestamp), o = a === -1 ? null : this.preciseTimings[a], s = null;
					this.emittedEncoderPackets === 0 && i.type === "delta" && n?.decoderConfig && (s = Pn(this.encodingConfig.codec, n.decoderConfig, i.data)), (o && o.microsecondTimestamp === e.timestamp || s !== null) && (i = i.clone({
						timestamp: o?.timestampIsValid ? o.timestamp : void 0,
						duration: o?.durationIsValid ? o.duration : void 0,
						type: s ?? void 0
					})), Ru(this.source._connectedTrack, i), this.encodingConfig.onEncodedPacket?.(i, n), this.lastMuxerPromise = this.muxer.addEncodedVideoPacket(this.source._connectedTrack, i, n).catch((e) => {
						this.error ??= e;
					}), this.emittedEncoderPackets++;
				}, s = (/* @__PURE__ */ Error("Encoding error")).stack;
				if (this.encoder = new VideoEncoder({
					output: (t, s) => {
						if (!this.alphaEncoder) {
							o(t, null, s);
							return;
						}
						let c = this.alphaFrameQueue.shift();
						a(c !== void 0), c ? (this.alphaEncoder.encode(c, { keyFrame: t.type === "key" }), i++, c.close(), e.push({
							chunk: t,
							meta: s
						})) : i === 0 ? o(t, null, s) : (n.push(r + i), e.push({
							chunk: t,
							meta: s
						}));
					},
					error: (e) => {
						e.stack = s, this.error ??= e;
					}
				}), this.encoder.configure(t), this.encodingConfig.alpha === "keep") {
					let s = (/* @__PURE__ */ Error("Encoding error")).stack;
					this.alphaEncoder = new VideoEncoder({
						output: (t, s) => {
							i--;
							let c = e.shift();
							for (a(c !== void 0), o(c.chunk, t, c.meta), r++; n.length > 0 && n[0] === r;) {
								n.shift();
								let t = e.shift();
								a(t !== void 0), o(t.chunk, null, t.meta);
							}
						},
						error: (e) => {
							e.stack = s, this.error ??= e;
						}
					}), this.alphaEncoder.configure(t);
				}
			}
			a(this.source._connectedTrack), this.muxer = this.source._connectedTrack.output._muxer, this.encoderInitialized = !0;
		})();
	}
	async flushAndClose(e) {
		if (e || this.checkForEncoderError(), !e && this.frameRateLastSample) {
			let e = this.encodingConfig.transform.frameRate, t = _e(this.frameRateLastEndTimestamp, e);
			await this.padFrameRate(t);
		}
		this.closed = !0, this.frameRateLastSample?.close(), this.frameRateLastSample = null, this.customEncoder ? (e || this.customEncoderCallSerializer.call(() => this.customEncoder.flush()), await this.customEncoderCallSerializer.call(() => this.customEncoder.close())) : this.encoder && (e || (await this.encoder.flush(), await this.alphaEncoder?.flush()), this.encoder.state !== "closed" && this.encoder.close(), this.alphaEncoder && this.alphaEncoder.state !== "closed" && this.alphaEncoder.close(), this.alphaFrameQueue.forEach((e) => e?.close()), this.splitter?.close()), e || this.checkForEncoderError();
	}
	getQueueSize() {
		return this.customEncoder ? this.customEncoderQueueSize : this.encoder?.encodeQueueSize ?? 0;
	}
	checkForEncoderError() {
		if (this.error) throw this.error;
	}
}, Vu = !1, Hu = class e {
	constructor(t, n) {
		this.canvas = null, this.gl = null, this.colorProgram = null, this.alphaProgram = null, this.vao = null, this.sourceTexture = null, this.alphaResolutionLocation = null, this.worker = null, this.pendingRequests = /* @__PURE__ */ new Map(), this.nextRequestId = 0;
		let r = typeof OffscreenCanvas < "u" || typeof document < "u" && typeof document.createElement == "function";
		if (!e.forceCpu && r && !Vu) try {
			typeof OffscreenCanvas < "u" ? this.canvas = new OffscreenCanvas(t, n) : (this.canvas = document.createElement("canvas"), this.canvas.width = t, this.canvas.height = n);
			let e = this.canvas.getContext("webgl2", { alpha: !0 });
			if (!e) throw Error("Couldn't acquire WebGL 2 context.");
			this.gl = e, this.colorProgram = this.createColorProgram(), this.alphaProgram = this.createAlphaProgram(), this.vao = this.createVAO(), this.sourceTexture = this.createTexture(), this.alphaResolutionLocation = this.gl.getUniformLocation(this.alphaProgram, "u_resolution"), this.gl.useProgram(this.colorProgram), this.gl.uniform1i(this.gl.getUniformLocation(this.colorProgram, "u_sourceTexture"), 0), this.gl.useProgram(this.alphaProgram), this.gl.uniform1i(this.gl.getUniformLocation(this.alphaProgram, "u_sourceTexture"), 0);
		} catch (e) {
			this.gl = null, this.canvas = null, Vu = !0, i._warn("Falling back to CPU for color/alpha splitting.", e);
		}
	}
	async update(e) {
		return this.gl ? this.updateGpu(e) : this.updateCpu(e);
	}
	updateGpu(e) {
		a(this.gl), a(this.canvas), (e.displayWidth !== this.canvas.width || e.displayHeight !== this.canvas.height) && (this.canvas.width = e.displayWidth, this.canvas.height = e.displayHeight), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, this.sourceTexture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, e);
		let t = this.runColorProgram(e), n = this.runAlphaProgram(e);
		return e.close(), {
			colorFrame: t,
			alphaFrame: n
		};
	}
	createVertexShader() {
		return a(this.gl), this.createShader(this.gl.VERTEX_SHADER, "#version 300 es\n			in vec2 a_position;\n			in vec2 a_texCoord;\n			out vec2 v_texCoord;\n			\n			void main() {\n				gl_Position = vec4(a_position, 0.0, 1.0);\n				v_texCoord = a_texCoord;\n			}\n		");
	}
	createColorProgram() {
		a(this.gl);
		let e = this.createVertexShader(), t = this.createShader(this.gl.FRAGMENT_SHADER, "#version 300 es\n			precision highp float;\n			\n			uniform sampler2D u_sourceTexture;\n			in vec2 v_texCoord;\n			out vec4 fragColor;\n			\n			void main() {\n				vec4 source = texture(u_sourceTexture, v_texCoord);\n				fragColor = vec4(source.rgb, 1.0);\n			}\n		"), n = this.gl.createProgram();
		return this.gl.attachShader(n, e), this.gl.attachShader(n, t), this.gl.linkProgram(n), n;
	}
	createAlphaProgram() {
		a(this.gl);
		let e = this.createVertexShader(), t = this.createShader(this.gl.FRAGMENT_SHADER, "#version 300 es\n			precision highp float;\n			\n			uniform sampler2D u_sourceTexture;\n			uniform vec2 u_resolution; // The width and height of the canvas\n			in vec2 v_texCoord;\n			out vec4 fragColor;\n\n			// This function determines the value for a single byte in the YUV stream\n			float getByteValue(float byteOffset) {\n				float width = u_resolution.x;\n				float height = u_resolution.y;\n\n				float yPlaneSize = width * height;\n\n				if (byteOffset < yPlaneSize) {\n					// This byte is in the luma plane. Find the corresponding pixel coordinates to sample from\n					float y = floor(byteOffset / width);\n					float x = mod(byteOffset, width);\n					\n					// Add 0.5 to sample the center of the texel\n					vec2 sampleCoord = (vec2(x, y) + 0.5) / u_resolution;\n					\n					// The luma value is the alpha from the source texture\n					return texture(u_sourceTexture, sampleCoord).a;\n				} else {\n					// Write a fixed value for chroma and beyond\n					return 128.0 / 255.0;\n				}\n			}\n			\n			void main() {\n				// Each fragment writes 4 bytes (R, G, B, A)\n				float pixelIndex = floor(gl_FragCoord.y) * u_resolution.x + floor(gl_FragCoord.x);\n				float baseByteOffset = pixelIndex * 4.0;\n\n				vec4 result;\n				for (int i = 0; i < 4; i++) {\n					float currentByteOffset = baseByteOffset + float(i);\n					result[i] = getByteValue(currentByteOffset);\n				}\n				\n				fragColor = result;\n			}\n		"), n = this.gl.createProgram();
		return this.gl.attachShader(n, e), this.gl.attachShader(n, t), this.gl.linkProgram(n), n;
	}
	createShader(e, t) {
		a(this.gl);
		let n = this.gl.createShader(e);
		return this.gl.shaderSource(n, t), this.gl.compileShader(n), this.gl.getShaderParameter(n, this.gl.COMPILE_STATUS) || i._error("Shader compile error:", this.gl.getShaderInfoLog(n)), n;
	}
	createVAO() {
		a(this.gl), a(this.colorProgram);
		let e = this.gl.createVertexArray();
		this.gl.bindVertexArray(e);
		let t = new Float32Array([
			-1,
			-1,
			0,
			1,
			1,
			-1,
			1,
			1,
			-1,
			1,
			0,
			0,
			1,
			1,
			1,
			0
		]), n = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, n), this.gl.bufferData(this.gl.ARRAY_BUFFER, t, this.gl.STATIC_DRAW);
		let r = this.gl.getAttribLocation(this.colorProgram, "a_position"), i = this.gl.getAttribLocation(this.colorProgram, "a_texCoord");
		return this.gl.enableVertexAttribArray(r), this.gl.vertexAttribPointer(r, 2, this.gl.FLOAT, !1, 16, 0), this.gl.enableVertexAttribArray(i), this.gl.vertexAttribPointer(i, 2, this.gl.FLOAT, !1, 16, 8), e;
	}
	createTexture() {
		a(this.gl);
		let e = this.gl.createTexture();
		return this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), e;
	}
	runColorProgram(e) {
		return a(this.gl), a(this.canvas), this.gl.useProgram(this.colorProgram), this.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.bindVertexArray(this.vao), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4), new VideoFrame(this.canvas, {
			timestamp: e.timestamp,
			duration: e.duration ?? void 0,
			alpha: "discard"
		});
	}
	runAlphaProgram(e) {
		a(this.gl), a(this.canvas), this.gl.useProgram(this.alphaProgram), this.gl.uniform2f(this.alphaResolutionLocation, this.canvas.width, this.canvas.height), this.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.bindVertexArray(this.vao), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
		let { width: t, height: n } = this.canvas, r = Math.ceil(t / 2) * Math.ceil(n / 2), i = t * n + r * 2, o = Math.ceil(i / (t * 4)), s = new Uint8Array(4 * t * o);
		this.gl.readPixels(0, 0, t, o, this.gl.RGBA, this.gl.UNSIGNED_BYTE, s), s = s.subarray(0, i), a(s[t * n] === 128), a(s[s.length - 1] === 128);
		let c = {
			format: "I420",
			codedWidth: t,
			codedHeight: n,
			timestamp: e.timestamp,
			duration: e.duration ?? void 0,
			transfer: [s.buffer]
		};
		return new VideoFrame(s, c);
	}
	updateCpu(e) {
		if (!this.worker) {
			let e = new Blob([`(${Uu.toString()})()`], { type: "application/javascript" }), t = URL.createObjectURL(e);
			this.worker = new Worker(t), URL.revokeObjectURL(t), this.worker.addEventListener("message", (e) => {
				let t = e.data, n = this.pendingRequests.get(t.id);
				n && (this.pendingRequests.delete(t.id), "error" in t ? n.reject(Error(t.error)) : n.resolve({
					colorFrame: t.colorFrame,
					alphaFrame: t.alphaFrame
				}));
			}), this.worker.addEventListener("error", (e) => {
				let t = Error(e.message || "Color/alpha splitter worker error.");
				for (let e of this.pendingRequests.values()) e.reject(t);
				this.pendingRequests.clear();
			});
		}
		let t = this.nextRequestId++, n = O();
		return this.pendingRequests.set(t, n), this.worker.postMessage({
			id: t,
			sourceFrame: e
		}, { transfer: [e] }), n.promise;
	}
	close() {
		this.gl?.getExtension("WEBGL_lose_context")?.loseContext(), this.gl = null, this.canvas = null, this.worker?.terminate(), this.worker = null;
		let e = /* @__PURE__ */ Error("Color/alpha splitter closed.");
		for (let t of this.pendingRequests.values()) t.reject(e);
		this.pendingRequests.clear();
	}
};
Hu.forceCpu = !0;
var Uu = () => {
	let e = null, t = Promise.resolve();
	self.addEventListener("message", (e) => {
		let { id: r, sourceFrame: i } = e.data;
		t = t.then(async () => {
			try {
				let { colorFrame: e, alphaFrame: t } = await n(i);
				self.postMessage({
					id: r,
					colorFrame: e,
					alphaFrame: t
				}, { transfer: [e, t] });
			} catch (e) {
				self.postMessage({
					id: r,
					error: e.message
				});
			} finally {
				i.close();
			}
		});
	});
	let n = async (t) => {
		let n = t.format;
		if (!n) throw Error("CPU color/alpha splitting requires a known VideoFrame format.");
		let a = t.codedWidth, o = t.codedHeight, s = t.allocationSize();
		if ((!e || e.byteLength !== s) && (e = new Uint8Array(s)), await t.copyTo(e), n === "RGBA" || n === "BGRA") return r(e, a, o, n, t);
		if (n === "I420A" || n === "I420AP10" || n === "I420AP12" || n === "I422A" || n === "I422AP10" || n === "I422AP12" || n === "I444A" || n === "I444AP10" || n === "I444AP12") return i(e, a, o, n, t);
		throw Error(`CPU color/alpha splitting does not support format '${n}'.`);
	}, r = (e, t, n, r, i) => {
		let a = t * n, o = a + Math.ceil(t / 2) * Math.ceil(n / 2) * 2, s = new Uint8Array(o);
		for (let t = 0, n = 3; t < a; t++, n += 4) s[t] = e[n];
		s.fill(128, a);
		let c = new VideoFrame(e, {
			format: r === "RGBA" ? "RGBX" : "BGRX",
			codedWidth: t,
			codedHeight: n,
			timestamp: i.timestamp,
			duration: i.duration ?? void 0
		}), l = {
			format: "I420",
			codedWidth: t,
			codedHeight: n,
			timestamp: i.timestamp,
			duration: i.duration ?? void 0,
			transfer: [s.buffer]
		};
		return {
			colorFrame: c,
			alphaFrame: new VideoFrame(s, l)
		};
	}, i = (e, t, n, r, i) => {
		let a = r.includes("P10"), o = r.includes("P12"), s = a || o ? 2 : 1, c, l;
		r.startsWith("I420") ? (c = Math.ceil(t / 2), l = Math.ceil(n / 2)) : r.startsWith("I422") ? (c = Math.ceil(t / 2), l = n) : (c = t, l = n);
		let u = t * n, d = c * l, f = u * s, p = d * s, m = u * s, h = f + p * 2, g = r.replace("A", ""), _ = Math.ceil(t / 2) * Math.ceil(n / 2), v = m + _ * s * 2, y = new Uint8Array(v), b = h;
		y.set(e.subarray(b, b + m), 0);
		let x = m, S = a ? 512 : o ? 2048 : 128;
		s === 1 ? y.fill(S, x) : new Uint16Array(y.buffer, x, 2 * _).fill(S);
		let C = a ? "I420P10" : o ? "I420P12" : "I420", w = new VideoFrame(e.subarray(0, h), {
			format: g,
			codedWidth: t,
			codedHeight: n,
			timestamp: i.timestamp,
			duration: i.duration ?? void 0
		}), ee = {
			format: C,
			codedWidth: t,
			codedHeight: n,
			timestamp: i.timestamp,
			duration: i.duration ?? void 0,
			transfer: [y.buffer]
		};
		return {
			colorFrame: w,
			alphaFrame: new VideoFrame(y, ee)
		};
	};
}, Wu = class extends Lu {
	constructor(e) {
		Wo(e), super(e.codec), this._encoder = new Bu(this, e);
	}
	add(e, t) {
		if (!(e instanceof ho)) throw TypeError("videoSample must be a VideoSample.");
		return this._encoder.add(e, !1, t);
	}
	_flushAndClose(e) {
		return this._encoder.flushAndClose(e);
	}
}, Gu = class extends Iu {
	constructor(e) {
		if (super(), this._connectedTrack = null, !ct.includes(e)) throw TypeError(`Invalid audio codec '${e}'. Must be one of: ${ct.join(", ")}.`);
		this._codec = e;
	}
}, Ku = class extends Gu {
	constructor(e) {
		super(e);
	}
	add(e, t) {
		if (!(e instanceof z)) throw TypeError("packet must be an EncodedPacket.");
		if (e.isMetadataOnly) throw TypeError("Metadata-only packets cannot be added.");
		if (t !== void 0 && (!t || typeof t != "object")) throw TypeError("meta, when provided, must be an object.");
		return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, e, t);
	}
}, qu = class {
	constructor(e, t) {
		this.source = e, this.encodingConfig = t, this.ensureEncoderPromise = null, this.encoderInitialized = !1, this.encoder = null, this.muxer = null, this.lastNumberOfChannels = null, this.lastSampleRate = null, this.isPcmEncoder = !1, this.outputSampleSize = null, this.writeOutputValue = null, this.customEncoder = null, this.customEncoderCallSerializer = new Ce(), this.customEncoderQueueSize = 0, this.lastEndSampleIndex = null, this.resampler = null, this.error = null, this.lastMuxerPromise = Promise.resolve(), this.closed = !1;
	}
	async add(e, t) {
		try {
			if (this.checkForEncoderError(), this.source._ensureValidAdd(), this.lastNumberOfChannels !== null && this.lastSampleRate !== null) {
				if (e.numberOfChannels !== this.lastNumberOfChannels || e.sampleRate !== this.lastSampleRate) throw Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e.numberOfChannels} channels at ${e.sampleRate} Hz.`);
			} else this.lastNumberOfChannels = e.numberOfChannels, this.lastSampleRate = e.sampleRate;
			let n = this.encodingConfig;
			n.transform?.numberOfChannels !== void 0 || n.transform?.sampleRate !== void 0 ? (this.resampler ||= new Fu({
				targetNumberOfChannels: n.transform.numberOfChannels ?? e.numberOfChannels,
				targetSampleRate: n.transform.sampleRate ?? e.sampleRate,
				onSample: async (e) => {
					await this.processAndEncode(e, !0);
				}
			}), await this.resampler.add(e)) : await this.processAndEncode(e, t);
		} finally {
			t && e.close();
		}
	}
	async processAndEncode(e, t) {
		let n = this.encodingConfig;
		if (n.transform?.sampleFormat !== void 0 && zo(e.format) !== n.transform.sampleFormat) {
			let r = Vo(e, n.transform.sampleFormat);
			t && e.close(), e = r, t = !0;
		}
		if (n.transform?.process) {
			let r = n.transform.process(e);
			if (r instanceof Promise && (r = await r), r === null) return;
			Array.isArray(r) || (r = [r]);
			for (let e of r) {
				if (!(e instanceof No)) throw TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");
				await this.encodeSample(e, !0);
			}
			t && e.close();
		} else await this.encodeSample(e, t);
	}
	async encodeSample(e, t) {
		try {
			if (this.encoderInitialized || (this.ensureEncoderPromise || this.ensureEncoder(e), this.encoderInitialized || await this.ensureEncoderPromise), a(this.encoderInitialized), this.closed) return;
			{
				let t = Math.round(e.timestamp * e.sampleRate), n = Math.round((e.timestamp + e.duration) * e.sampleRate);
				if (this.lastEndSampleIndex === null) this.lastEndSampleIndex = n;
				else {
					let n = t - this.lastEndSampleIndex;
					if (n >= 64) {
						let t = new No({
							data: new Float32Array(n * e.numberOfChannels),
							format: "f32-planar",
							sampleRate: e.sampleRate,
							numberOfChannels: e.numberOfChannels,
							numberOfFrames: n,
							timestamp: this.lastEndSampleIndex / e.sampleRate
						});
						await this.encodeSample(t, !0);
					}
					this.lastEndSampleIndex += e.numberOfFrames;
				}
			}
			if (this.encodingConfig.onEncodedSample?.(e), this.customEncoder) {
				this.customEncoderQueueSize++;
				let t = e.clone(), n = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(t)).then(() => this.customEncoderQueueSize--).catch((e) => this.error ??= e).finally(() => {
					t.close();
				});
				this.customEncoderQueueSize >= 4 && await n, await this.lastMuxerPromise;
			} else if (this.isPcmEncoder) await this.doPcmEncoding(e, t);
			else {
				a(this.encoder);
				let n = e.toAudioData();
				this.encoder.encode(n), n.close(), t && e.close(), this.encoder.encodeQueueSize >= 4 && await new Promise((e) => this.encoder.addEventListener("dequeue", e, { once: !0 })), await this.lastMuxerPromise;
			}
		} finally {
			t && e.close();
		}
	}
	async doPcmEncoding(e, t) {
		a(this.outputSampleSize), a(this.writeOutputValue);
		let { numberOfChannels: n, numberOfFrames: r, sampleRate: i, timestamp: o } = e, s = 2048, c = [];
		for (let t = 0; t < r; t += s) {
			let r = Math.min(s, e.numberOfFrames - t), i = r * n * this.outputSampleSize, a = new ArrayBuffer(i), o = new DataView(a);
			c.push({
				frameCount: r,
				view: o
			});
		}
		let l = e.allocationSize({
			planeIndex: 0,
			format: "f32-planar"
		}), u = new Float32Array(l / Float32Array.BYTES_PER_ELEMENT);
		for (let t = 0; t < n; t++) {
			e.copyTo(u, {
				planeIndex: t,
				format: "f32-planar"
			});
			for (let e = 0; e < c.length; e++) {
				let { frameCount: r, view: i } = c[e];
				for (let a = 0; a < r; a++) this.writeOutputValue(i, (a * n + t) * this.outputSampleSize, u[e * s + a]);
			}
		}
		t && e.close();
		let d = { decoderConfig: {
			codec: this.encodingConfig.codec,
			numberOfChannels: n,
			sampleRate: i
		} };
		for (let e = 0; e < c.length; e++) {
			let { frameCount: t, view: n } = c[e], r = n.buffer, a = e * s, l = new z(new Uint8Array(r), "key", o + a / i, t / i);
			this.encodingConfig.onEncodedPacket?.(l, d), await this.muxer.addEncodedAudioPacket(this.source._connectedTrack, l, d);
		}
	}
	ensureEncoder(e) {
		this.ensureEncoderPromise = (async () => {
			let { numberOfChannels: t, sampleRate: n } = e, r = Yo({
				numberOfChannels: t,
				sampleRate: n,
				...this.encodingConfig
			});
			this.encodingConfig.onEncoderConfig?.(r);
			let i = ls.find((e) => e.supports(this.encodingConfig.codec, r));
			if (i) this.customEncoder = new i(), this.customEncoder.codec = this.encodingConfig.codec, this.customEncoder.config = r, this.customEncoder.onPacket = (e, t) => {
				if (!(e instanceof z)) throw TypeError("The first argument passed to onPacket must be an EncodedPacket.");
				if (t !== void 0 && (!t || typeof t != "object")) throw TypeError("The second argument passed to onPacket must be an object or undefined.");
				this.encodingConfig.onEncodedPacket?.(e, t), this.lastMuxerPromise = this.muxer.addEncodedAudioPacket(this.source._connectedTrack, e, t).catch((e) => {
					this.error ??= e;
				});
			}, await this.customEncoder.init();
			else if (I.includes(this.encodingConfig.codec)) this.initPcmEncoder();
			else {
				if (typeof AudioEncoder > "u") throw Error("AudioEncoder is not supported by this browser.");
				if (!(await AudioEncoder.isConfigSupported(r)).supported) throw Error(`This specific encoder configuration (${r.codec}, ${r.bitrate} bps, ${r.numberOfChannels} channels, ${r.sampleRate} Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.`);
				let e = (/* @__PURE__ */ Error("Encoding error")).stack;
				this.encoder = new AudioEncoder({
					output: (e, t) => {
						if (this.encodingConfig.codec === "aac" && t?.decoderConfig) {
							let e = !1;
							if (e = !t.decoderConfig.description || t.decoderConfig.description.byteLength < 2 ? !0 : it(f(t.decoderConfig.description)).objectType === 0, e) {
								let e = Number(s(r.codec.split(".")));
								t.decoderConfig.description = at({
									objectType: e,
									numberOfChannels: t.decoderConfig.numberOfChannels,
									sampleRate: t.decoderConfig.sampleRate
								});
							}
						}
						let n = z.fromEncodedChunk(e);
						n = n.clone({
							timestamp: he(n.timestamp, r.sampleRate),
							duration: e.duration == null ? void 0 : he(n.duration, r.sampleRate)
						}), this.encodingConfig.onEncodedPacket?.(n, t), this.lastMuxerPromise = this.muxer.addEncodedAudioPacket(this.source._connectedTrack, n, t).catch((e) => {
							this.error ??= e;
						});
					},
					error: (t) => {
						t.stack = e, this.error ??= t;
					}
				}), this.encoder.configure(r);
			}
			a(this.source._connectedTrack), this.muxer = this.source._connectedTrack.output._muxer, this.encoderInitialized = !0;
		})();
	}
	initPcmEncoder() {
		this.isPcmEncoder = !0;
		let e = this.encodingConfig.codec, { dataType: t, sampleSize: n, littleEndian: r } = Ct(e);
		switch (this.outputSampleSize = n, n) {
			case 1:
				t === "unsigned" ? this.writeOutputValue = (e, t, n) => e.setUint8(t, M((n + 1) * 127.5, 0, 255)) : t === "signed" ? this.writeOutputValue = (e, t, n) => {
					e.setInt8(t, M(Math.round(n * 128), -128, 127));
				} : t === "ulaw" ? this.writeOutputValue = (e, t, n) => {
					let r = M(Math.floor(n * 32767), -32768, 32767);
					e.setUint8(t, us(r));
				} : t === "alaw" ? this.writeOutputValue = (e, t, n) => {
					let r = M(Math.floor(n * 32767), -32768, 32767);
					e.setUint8(t, fs(r));
				} : a(!1);
				break;
			case 2:
				t === "unsigned" ? this.writeOutputValue = (e, t, n) => e.setUint16(t, M((n + 1) * 32767.5, 0, 65535), r) : t === "signed" ? this.writeOutputValue = (e, t, n) => e.setInt16(t, M(Math.round(n * 32767), -32768, 32767), r) : a(!1);
				break;
			case 3:
				t === "unsigned" ? this.writeOutputValue = (e, t, n) => fe(e, t, M((n + 1) * 8388607.5, 0, 16777215), r) : t === "signed" ? this.writeOutputValue = (e, t, n) => j(e, t, M(Math.round(n * 8388607), -8388608, 8388607), r) : a(!1);
				break;
			case 4:
				t === "unsigned" ? this.writeOutputValue = (e, t, n) => e.setUint32(t, M((n + 1) * 2147483647.5, 0, 4294967295), r) : t === "signed" ? this.writeOutputValue = (e, t, n) => e.setInt32(t, M(Math.round(n * 2147483647), -2147483648, 2147483647), r) : t === "float" ? this.writeOutputValue = (e, t, n) => e.setFloat32(t, n, r) : a(!1);
				break;
			case 8:
				t === "float" ? this.writeOutputValue = (e, t, n) => e.setFloat64(t, n, r) : a(!1);
				break;
			default: A(n), a(!1);
		}
	}
	async flushAndClose(e) {
		e || this.checkForEncoderError(), !e && this.resampler && await this.resampler.finalize(), this.resampler = null, this.closed = !0, this.customEncoder ? (e || this.customEncoderCallSerializer.call(() => this.customEncoder.flush()), await this.customEncoderCallSerializer.call(() => this.customEncoder.close())) : this.encoder && (e || await this.encoder.flush(), this.encoder.state !== "closed" && this.encoder.close()), e || this.checkForEncoderError();
	}
	getQueueSize() {
		return this.customEncoder ? this.customEncoderQueueSize : this.isPcmEncoder ? 0 : this.encoder?.encodeQueueSize ?? 0;
	}
	checkForEncoderError() {
		if (this.error) throw this.error;
	}
}, Ju = class extends Gu {
	constructor(e) {
		qo(e), super(e.codec), this._encoder = new qu(this, e);
	}
	add(e) {
		if (!(e instanceof No)) throw TypeError("audioSample must be an AudioSample.");
		return this._encoder.add(e, !1);
	}
	_flushAndClose(e) {
		return this._encoder.flushAndClose(e);
	}
}, Yu = class extends Iu {
	constructor(e) {
		if (super(), this._connectedTrack = null, !lt.includes(e)) throw TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${lt.join(", ")}.`);
		this._codec = e;
	}
}, Xu = class {
	getSupportedVideoCodecs() {
		return this.getSupportedCodecs().filter((e) => ot.includes(e));
	}
	getSupportedAudioCodecs() {
		return this.getSupportedCodecs().filter((e) => ct.includes(e));
	}
	getSupportedSubtitleCodecs() {
		return this.getSupportedCodecs().filter((e) => lt.includes(e));
	}
	_codecUnsupportedHint(e) {
		return "";
	}
}, Zu = class extends Xu {
	constructor(e = {}) {
		if (!e || typeof e != "object") throw TypeError("options must be an object.");
		if (e.fastStart !== void 0 && ![
			!1,
			"in-memory",
			"reserve",
			"fragmented"
		].includes(e.fastStart)) throw TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
		if (e.minimumFragmentDuration !== void 0 && (!Number.isFinite(e.minimumFragmentDuration) || e.minimumFragmentDuration < 0)) throw TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
		if (e.onFtyp !== void 0 && typeof e.onFtyp != "function") throw TypeError("options.onFtyp, when provided, must be a function.");
		if (e.onMoov !== void 0 && typeof e.onMoov != "function") throw TypeError("options.onMoov, when provided, must be a function.");
		if (e.onMdat !== void 0 && typeof e.onMdat != "function") throw TypeError("options.onMdat, when provided, must be a function.");
		if (e.onMoof !== void 0 && typeof e.onMoof != "function") throw TypeError("options.onMoof, when provided, must be a function.");
		if (e.metadataFormat !== void 0 && ![
			"mdir",
			"mdta",
			"udta",
			"auto"
		].includes(e.metadataFormat)) throw TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
		super(), this._options = e;
	}
	getSupportedTrackCounts() {
		let e = 2 ** 32 - 1;
		return {
			video: {
				min: 0,
				max: e
			},
			audio: {
				min: 0,
				max: e
			},
			subtitle: {
				min: 0,
				max: e
			},
			total: {
				min: 1,
				max: e
			}
		};
	}
	get supportsVideoRotationMetadata() {
		return !0;
	}
	get supportsTimestampedMediaData() {
		return !0;
	}
	_createMuxer(e) {
		return new xu(e, this);
	}
}, Qu = class extends Zu {
	constructor(e) {
		super(e);
	}
	get _name() {
		return "MP4";
	}
	get fileExtension() {
		return ".mp4";
	}
	get mimeType() {
		return "video/mp4";
	}
	getSupportedCodecs() {
		return [
			...ot,
			...st,
			"pcm-s16",
			"pcm-s16be",
			"pcm-s24",
			"pcm-s24be",
			"pcm-s32",
			"pcm-s32be",
			"pcm-f32",
			"pcm-f32be",
			"pcm-f64",
			"pcm-f64be",
			...lt
		];
	}
	_codecUnsupportedHint(e) {
		return new ed().getSupportedCodecs().includes(e) ? " Switching to MOV will grant support for this codec." : "";
	}
}, $u = class extends Zu {
	constructor(e) {
		super(e);
	}
	get _name() {
		return "CMAF";
	}
	get fileExtension() {
		return ".m4s";
	}
	get mimeType() {
		return "video/mp4";
	}
	getSupportedCodecs() {
		return [
			...ot,
			...st,
			"pcm-s16",
			"pcm-s16be",
			"pcm-s24",
			"pcm-s24be",
			"pcm-s32",
			"pcm-s32be",
			"pcm-f32",
			"pcm-f32be",
			"pcm-f64",
			"pcm-f64be",
			...lt
		];
	}
}, ed = class extends Zu {
	constructor(e) {
		super(e);
	}
	get _name() {
		return "MOV";
	}
	get fileExtension() {
		return ".mov";
	}
	get mimeType() {
		return "video/quicktime";
	}
	getSupportedCodecs() {
		return [...ot, ...ct];
	}
	_codecUnsupportedHint(e) {
		return new Qu().getSupportedCodecs().includes(e) ? " Switching to MP4 will grant support for this codec." : "";
	}
}, td = class extends Xu {
	constructor(e = {}) {
		if (!e || typeof e != "object") throw TypeError("options must be an object.");
		if (e.appendOnly !== void 0 && typeof e.appendOnly != "boolean") throw TypeError("options.appendOnly, when provided, must be a boolean.");
		if (e.minimumClusterDuration !== void 0 && (!Number.isFinite(e.minimumClusterDuration) || e.minimumClusterDuration < 0)) throw TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
		if (e.onEbmlHeader !== void 0 && typeof e.onEbmlHeader != "function") throw TypeError("options.onEbmlHeader, when provided, must be a function.");
		if (e.onSegmentHeader !== void 0 && typeof e.onSegmentHeader != "function") throw TypeError("options.onHeader, when provided, must be a function.");
		if (e.onCluster !== void 0 && typeof e.onCluster != "function") throw TypeError("options.onCluster, when provided, must be a function.");
		super(), this._options = e;
	}
	_createMuxer(e) {
		return new Ou(e, this);
	}
	get _name() {
		return "Matroska";
	}
	getSupportedTrackCounts() {
		return {
			video: {
				min: 0,
				max: 127
			},
			audio: {
				min: 0,
				max: 127
			},
			subtitle: {
				min: 0,
				max: 127
			},
			total: {
				min: 1,
				max: 127
			}
		};
	}
	get fileExtension() {
		return ".mkv";
	}
	get mimeType() {
		return "video/x-matroska";
	}
	getSupportedCodecs() {
		return [
			...ot,
			...st,
			...I.filter((e) => ![
				"pcm-s8",
				"pcm-f32be",
				"pcm-f64be",
				"ulaw",
				"alaw"
			].includes(e)),
			...lt
		];
	}
	get supportsVideoRotationMetadata() {
		return !1;
	}
	get supportsTimestampedMediaData() {
		return !0;
	}
}, nd = class extends td {
	constructor(e) {
		super(e);
	}
	getSupportedCodecs() {
		return [
			...ot.filter((e) => [
				"vp8",
				"vp9",
				"av1"
			].includes(e)),
			...ct.filter((e) => ["opus", "vorbis"].includes(e)),
			...lt
		];
	}
	get _name() {
		return "WebM";
	}
	get fileExtension() {
		return ".webm";
	}
	get mimeType() {
		return "video/webm";
	}
	_codecUnsupportedHint(e) {
		return new td().getSupportedCodecs().includes(e) ? " Switching to MKV will grant support for this codec." : "";
	}
}, rd = class extends Xu {
	constructor(e = {}) {
		if (!e || typeof e != "object") throw TypeError("options must be an object.");
		if (e.xingHeader !== void 0 && typeof e.xingHeader != "boolean") throw TypeError("options.xingHeader, when provided, must be a boolean.");
		if (e.onXingFrame !== void 0 && typeof e.onXingFrame != "function") throw TypeError("options.onXingFrame, when provided, must be a function.");
		super(), this._options = e;
	}
	_createMuxer(e) {
		return new Au(e, this);
	}
	get _name() {
		return "MP3";
	}
	getSupportedTrackCounts() {
		return {
			video: {
				min: 0,
				max: 0
			},
			audio: {
				min: 1,
				max: 1
			},
			subtitle: {
				min: 0,
				max: 0
			},
			total: {
				min: 1,
				max: 1
			}
		};
	}
	get fileExtension() {
		return ".mp3";
	}
	get mimeType() {
		return "audio/mpeg";
	}
	getSupportedCodecs() {
		return ["mp3"];
	}
	get supportsVideoRotationMetadata() {
		return !1;
	}
	get supportsTimestampedMediaData() {
		return !1;
	}
}, id = class extends Xu {
	constructor(e = {}) {
		if (!e || typeof e != "object") throw TypeError("options must be an object.");
		if (e.large !== void 0 && typeof e.large != "boolean") throw TypeError("options.large, when provided, must be a boolean.");
		if (e.metadataFormat !== void 0 && !["info", "id3"].includes(e.metadataFormat)) throw TypeError("options.metadataFormat, when provided, must be either 'info' or 'id3'.");
		if (e.onHeader !== void 0 && typeof e.onHeader != "function") throw TypeError("options.onHeader, when provided, must be a function.");
		super(), this._options = e;
	}
	_createMuxer(e) {
		return new Pu(e, this);
	}
	get _name() {
		return "WAVE";
	}
	getSupportedTrackCounts() {
		return {
			video: {
				min: 0,
				max: 0
			},
			audio: {
				min: 1,
				max: 1
			},
			subtitle: {
				min: 0,
				max: 0
			},
			total: {
				min: 1,
				max: 1
			}
		};
	}
	get fileExtension() {
		return ".wav";
	}
	get mimeType() {
		return "audio/wav";
	}
	getSupportedCodecs() {
		return [...I.filter((e) => [
			"pcm-s16",
			"pcm-s24",
			"pcm-s32",
			"pcm-f32",
			"pcm-u8",
			"ulaw",
			"alaw"
		].includes(e))];
	}
	get supportsVideoRotationMetadata() {
		return !1;
	}
	get supportsTimestampedMediaData() {
		return !1;
	}
}, ad = class extends Xu {
	constructor(e = {}) {
		if (!e || typeof e != "object") throw TypeError("options must be an object.");
		if (e.maximumPageDuration !== void 0 && (!Number.isFinite(e.maximumPageDuration) || e.maximumPageDuration <= 0)) throw TypeError("options.maximumPageDuration, when provided, must be a positive number.");
		if (e.onPage !== void 0 && typeof e.onPage != "function") throw TypeError("options.onPage, when provided, must be a function.");
		super(), this._options = e;
	}
	_createMuxer(e) {
		return new Mu(e, this);
	}
	get _name() {
		return "Ogg";
	}
	getSupportedTrackCounts() {
		let e = 2 ** 32;
		return {
			video: {
				min: 0,
				max: 0
			},
			audio: {
				min: 0,
				max: e
			},
			subtitle: {
				min: 0,
				max: 0
			},
			total: {
				min: 1,
				max: e
			}
		};
	}
	get fileExtension() {
		return ".ogg";
	}
	get mimeType() {
		return "application/ogg";
	}
	getSupportedCodecs() {
		return [...ct.filter((e) => ["vorbis", "opus"].includes(e))];
	}
	get supportsVideoRotationMetadata() {
		return !1;
	}
	get supportsTimestampedMediaData() {
		return !1;
	}
}, od = class extends Xu {
	constructor(e = {}) {
		if (!e || typeof e != "object") throw TypeError("options must be an object.");
		if (e.appendOnly !== void 0 && typeof e.appendOnly != "boolean") throw TypeError("options.appendOnly, when provided, must be a boolean.");
		super(), this._options = e;
	}
	_createMuxer(e) {
		return new yc(e, this);
	}
	get _name() {
		return "FLAC";
	}
	getSupportedTrackCounts() {
		return {
			video: {
				min: 0,
				max: 0
			},
			audio: {
				min: 1,
				max: 1
			},
			subtitle: {
				min: 0,
				max: 0
			},
			total: {
				min: 1,
				max: 1
			}
		};
	}
	get fileExtension() {
		return ".flac";
	}
	get mimeType() {
		return "audio/flac";
	}
	getSupportedCodecs() {
		return ["flac"];
	}
	get supportsVideoRotationMetadata() {
		return !1;
	}
	get supportsTimestampedMediaData() {
		return !1;
	}
}, sd = [
	"video",
	"audio",
	"subtitle"
], cd = class e {
	constructor(e, t, n, r, i) {
		this.id = e, this.output = t, this.type = n, this.source = r, this.metadata = i;
	}
	isVideoTrack() {
		return this.type === "video";
	}
	isAudioTrack() {
		return this.type === "audio";
	}
	isSubtitleTrack() {
		return this.type === "subtitle";
	}
	canBePairedWith(t) {
		if (!(t instanceof e)) throw TypeError("other must be an OutputTrack.");
		if (this === t) return !1;
		let n = qe(this.metadata.group), r = qe(t.metadata.group);
		for (let e of n) if (this.type !== t.type && r.some((t) => e === t) || r.some((t) => e._pairedGroups.has(t))) return !0;
		return !1;
	}
}, ld = class extends cd {
	constructor(e, t, n, r) {
		super(e, t, "video", n, r);
	}
}, ud = class extends cd {
	constructor(e, t, n, r) {
		super(e, t, "audio", n, r);
	}
}, dd = class extends cd {
	constructor(e, t, n, r) {
		super(e, t, "subtitle", n, r);
	}
}, fd = class e {
	constructor() {
		this._pairedGroups = /* @__PURE__ */ new Set();
	}
	pairWith(t) {
		if (!(t instanceof e)) throw TypeError("other must be an OutputTrackGroup.");
		if (this === t) throw TypeError("Cannot pair a group with itself.");
		this._pairedGroups.add(t), t._pairedGroups.add(this);
	}
}, pd = (e) => {
	if (!e || typeof e != "object") throw TypeError("metadata must be an object.");
	if (e.languageCode !== void 0 && !be(e.languageCode)) throw TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
	if (e.name !== void 0 && typeof e.name != "string") throw TypeError("metadata.name, when provided, must be a string.");
	if (e.disposition !== void 0 && nt(e.disposition), e.maximumPacketCount !== void 0 && (!Number.isInteger(e.maximumPacketCount) || e.maximumPacketCount < 0)) throw TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
	if (e.group !== void 0 && !(e.group instanceof fd) && (!Array.isArray(e.group) || e.group.some((e) => !(e instanceof fd)))) throw TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.");
}, md = class extends Je {
	get target() {
		let e = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
		if (this._rootTargetPromise) throw TypeError(e);
		let t = this._getRootTarget();
		if (t instanceof Promise) throw TypeError(e);
		return t;
	}
	constructor(e) {
		if (super(), this.state = "pending", this.defaultTrackGroup = new fd(), this._onFinalize = null, this._unfinalizedTargets = /* @__PURE__ */ new Set(), this._rootWriterPromise = null, this._tracks = [], this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new T(), this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !e || typeof e != "object") throw TypeError("options must be an object.");
		if (!(e.format instanceof Xu)) throw TypeError("options.format must be an OutputFormat.");
		if (!(e.target instanceof du || e.target instanceof _u)) throw TypeError("options.target must be a Target or a PathedTarget.");
		if (e.target instanceof du && this._rememberTarget(e.target), e.initTarget !== void 0 && !(e.initTarget instanceof du) && typeof e.initTarget != "function") throw Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
		if (e.onFinalize !== void 0 && typeof e.onFinalize != "function") throw TypeError("options.onFinalize, when provided, must be a function.");
		this.format = e.format, this._target = e.target, this._onFinalize = e.onFinalize ?? null, this._initTarget = e.initTarget ?? null, this._initTarget instanceof du && this._rememberTarget(this._initTarget), this._muxer = e.format._createMuxer(this);
	}
	_getTargetValidated(e) {
		a(this._target instanceof _u);
		let t = this._target.getTarget(e), n = (e) => {
			if (!(e instanceof du)) throw TypeError("getTarget must return a Target.");
			return e;
		};
		return t instanceof Promise ? t.then(n) : n(t);
	}
	async _getTarget(e) {
		a(this._target instanceof _u);
		let t = await this._getTargetValidated(e);
		return this._emit("target", {
			target: t,
			request: e,
			isRoot: e.isRoot
		}), this.state === "canceled" ? await t._close() : this._rememberTarget(t), t;
	}
	_rememberTarget(e) {
		this._unfinalizedTargets.add(e), e.on("finalized", () => this._unfinalizedTargets.delete(e), { once: !0 });
	}
	async _getInitTarget() {
		if (a(this._initTarget !== null), this._initTarget instanceof du) return this._initTarget;
		let e = await this._initTarget();
		return this.state === "canceled" ? await e._close() : this._rememberTarget(e), e;
	}
	_hasInitTarget() {
		return this._initTarget !== null;
	}
	_getRootTarget() {
		if (this._rootTarget) return this._rootTarget;
		if (this._rootTargetPromise) return this._rootTargetPromise;
		if (this._target instanceof du) return this._emit("target", {
			target: this._target,
			request: null,
			isRoot: !0
		}), this._rootTarget = this._target, this._target;
		let e = {
			path: this._target.rootPath,
			isRoot: !0,
			mimeType: this.format.mimeType
		}, t = this._getTargetValidated(e), n = (t) => (this.state === "canceled" ? t._close() : this._rememberTarget(t), this._emit("target", {
			target: t,
			request: e,
			isRoot: !0
		}), this._rootTarget = t, t);
		return t instanceof Promise ? this._rootTargetPromise = t.then(n) : n(t);
	}
	_getRootWriter(e) {
		return this._rootWriterPromise ??= (async () => {
			let t = await this._getRootTarget(), n = new uu(t, typeof e == "boolean" ? e : e(t));
			return n.start(), n;
		})();
	}
	addVideoTrack(e, t = {}) {
		if (!(e instanceof Lu)) throw TypeError("source must be a VideoSource.");
		if (pd(t), t.rotation !== void 0 && ![
			0,
			90,
			180,
			270
		].includes(t.rotation)) throw TypeError(`Invalid video rotation: ${t.rotation}. Has to be 0, 90, 180 or 270.`);
		if (!this.format.supportsVideoRotationMetadata && t.rotation) throw Error(`${this.format._name} does not support video rotation metadata.`);
		if (t.frameRate !== void 0 && (!Number.isFinite(t.frameRate) || t.frameRate <= 0)) throw TypeError(`Invalid video frame rate: ${t.frameRate}. Must be a positive number.`);
		let n = { ...t };
		return n.group ??= this.defaultTrackGroup, this._addTrack(new ld(this._tracks.length + 1, this, e, n));
	}
	addAudioTrack(e, t = {}) {
		if (!(e instanceof Gu)) throw TypeError("source must be an AudioSource.");
		pd(t);
		let n = { ...t };
		return n.group ??= this.defaultTrackGroup, this._addTrack(new ud(this._tracks.length + 1, this, e, n));
	}
	addSubtitleTrack(e, t = {}) {
		if (!(e instanceof Yu)) throw TypeError("source must be a SubtitleSource.");
		pd(t);
		let n = { ...t };
		return n.group ??= this.defaultTrackGroup, this._addTrack(new dd(this._tracks.length + 1, this, e, n));
	}
	setMetadataTags(e) {
		if ($e(e), this.state !== "pending") throw Error("Cannot set metadata tags after output has been started or canceled.");
		this._metadataTags = e;
	}
	_addTrack(e) {
		if (this.state !== "pending") throw Error("Cannot add track after output has been started or canceled.");
		if (e.source._connectedTrack) throw Error("Source is already used for a track.");
		let t = this.format.getSupportedTrackCounts(), n = this._tracks.reduce((t, n) => t + +(n.type === e.type), 0), r = t[e.type].max;
		if (n === r) throw Error(r === 0 ? `${this.format._name} does not support ${e.type} tracks.` : `${this.format._name} does not support more than ${r} ${e.type} track${r === 1 ? "" : "s"}.`);
		let i = t.total.max;
		if (this._tracks.length === i) throw Error(`${this.format._name} does not support more than ${i} tracks${i === 1 ? "" : "s"} in total.`);
		if (e.isVideoTrack()) {
			let t = this.format.getSupportedVideoCodecs();
			if (t.length === 0) throw Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(e.source._codec));
			if (!t.includes(e.source._codec)) throw Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${t.map((e) => `'${e}'`).join(", ")}.` + this.format._codecUnsupportedHint(e.source._codec));
		} else if (e.isAudioTrack()) {
			let t = this.format.getSupportedAudioCodecs();
			if (t.length === 0) throw Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(e.source._codec));
			if (!t.includes(e.source._codec)) throw Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${t.map((e) => `'${e}'`).join(", ")}.` + this.format._codecUnsupportedHint(e.source._codec));
		} else if (e.isSubtitleTrack()) {
			let t = this.format.getSupportedSubtitleCodecs();
			if (t.length === 0) throw Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(e.source._codec));
			if (!t.includes(e.source._codec)) throw Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${t.map((e) => `'${e}'`).join(", ")}.` + this.format._codecUnsupportedHint(e.source._codec));
		}
		return this._tracks.push(e), e.source._connectedTrack = e, e;
	}
	async start() {
		let e = this.format.getSupportedTrackCounts();
		for (let t of sd) {
			let n = this._tracks.reduce((e, n) => e + +(n.type === t), 0), r = e[t].min;
			if (n < r) throw Error(r === e[t].max ? `${this.format._name} requires exactly ${r} ${t} track${r === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${r} ${t} track${r === 1 ? "" : "s"}.`);
		}
		let t = e.total.min;
		if (this._tracks.length < t) throw Error(t === e.total.max ? `${this.format._name} requires exactly ${t} track${t === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${t} track${t === 1 ? "" : "s"}.`);
		if (this.state === "canceled") throw Error("Output has been canceled.");
		return this._startPromise ? (i._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
			this.state = "started";
			let e = await this._mutex.acquire();
			try {
				await this._muxer.start();
				let e = this._tracks.map((e) => e.source._start());
				await Promise.all(e);
			} finally {
				e();
			}
		})();
	}
	getMimeType() {
		return this._muxer.getMimeType();
	}
	async cancel() {
		if (this._cancelPromise) return i._warn("Output has already been canceled."), this._cancelPromise;
		if (this.state === "finalizing" || this.state === "finalized") {
			this.state === "finalized" && i._warn("Output has already been finalized.");
			return;
		}
		return this._cancelPromise = (async () => {
			this.state = "canceled";
			let e = await this._mutex.acquire();
			try {
				let e = this._tracks.map((e) => e.source._flushOrWaitForOngoingClose(!0));
				await Promise.all(e), await Promise.all([...this._unfinalizedTargets].map((e) => e._close())), this._unfinalizedTargets.clear();
			} finally {
				e();
			}
		})();
	}
	async finalize() {
		if (this.state === "pending") throw Error("Cannot finalize before starting.");
		if (this.state === "canceled") throw Error("Cannot finalize after canceling.");
		return this._finalizePromise ? (i._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
			this.state = "finalizing";
			let e = await this._mutex.acquire();
			try {
				let e = this._tracks.map((e) => e.source._flushOrWaitForOngoingClose(!1));
				if (await Promise.all(e), await this._muxer.finalize(), this._rootWriterPromise) {
					let e = await this._rootWriterPromise;
					e.finalized || (await e.flush(), await e.finalize());
				}
				this._onFinalize && await this._onFinalize(), this.state = "finalized";
			} finally {
				e();
			}
		})();
	}
}, hd = (e) => {
	if (!e || typeof e != "object") throw TypeError("options.video, when provided, must be an object.");
	if (e?.discard !== void 0 && typeof e.discard != "boolean") throw TypeError("options.video.discard, when provided, must be a boolean.");
	if (e?.forceTranscode !== void 0 && typeof e.forceTranscode != "boolean") throw TypeError("options.video.forceTranscode, when provided, must be a boolean.");
	if (e?.codec !== void 0 && !ot.includes(e.codec)) throw TypeError(`options.video.codec, when provided, must be one of: ${ot.join(", ")}.`);
	if (e?.bitrate !== void 0 && !(e.bitrate instanceof Xo) && (!Number.isInteger(e.bitrate) || e.bitrate <= 0)) throw TypeError("options.video.bitrate, when provided, must be a positive integer or a quality.");
	if (e?.width !== void 0 && (!Number.isInteger(e.width) || e.width <= 0)) throw TypeError("options.video.width, when provided, must be a positive integer.");
	if (e?.height !== void 0 && (!Number.isInteger(e.height) || e.height <= 0)) throw TypeError("options.video.height, when provided, must be a positive integer.");
	if (e?.fit !== void 0 && ![
		"fill",
		"contain",
		"cover"
	].includes(e.fit)) throw TypeError("options.video.fit, when provided, must be one of 'fill', 'contain', or 'cover'.");
	if (e?.width !== void 0 && e.height !== void 0 && e.fit === void 0) throw TypeError("When both options.video.width and options.video.height are provided, options.video.fit must also be provided.");
	if (e?.rotate !== void 0 && ![
		0,
		90,
		180,
		270
	].includes(e.rotate)) throw TypeError("options.video.rotate, when provided, must be 0, 90, 180 or 270.");
	if (e?.allowRotationMetadata !== void 0 && typeof e.allowRotationMetadata != "boolean") throw TypeError("options.video.allowRotationMetadata, when provided, must be a boolean.");
	if (e?.crop !== void 0 && Co(e.crop, "options.video."), e?.frameRate !== void 0 && (!Number.isFinite(e.frameRate) || e.frameRate <= 0)) throw TypeError("options.video.frameRate, when provided, must be a finite positive number.");
	if (e?.alpha !== void 0 && !["discard", "keep"].includes(e.alpha)) throw TypeError("options.video.alpha, when provided, must be either 'discard' or 'keep'.");
	if (e?.keyFrameInterval !== void 0 && (!Number.isFinite(e.keyFrameInterval) || e.keyFrameInterval < 0)) throw TypeError("options.video.keyFrameInterval, when provided, must be a non-negative number.");
	if (e?.process !== void 0 && typeof e.process != "function") throw TypeError("options.video.process, when provided, must be a function.");
	if (e?.processedWidth !== void 0 && (!Number.isInteger(e.processedWidth) || e.processedWidth <= 0)) throw TypeError("options.video.processedWidth, when provided, must be a positive integer.");
	if (e?.processedHeight !== void 0 && (!Number.isInteger(e.processedHeight) || e.processedHeight <= 0)) throw TypeError("options.video.processedHeight, when provided, must be a positive integer.");
	if (e?.hardwareAcceleration !== void 0 && ![
		"no-preference",
		"prefer-hardware",
		"prefer-software"
	].includes(e.hardwareAcceleration)) throw TypeError("options.video.hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
	if (e?.group !== void 0 && !(e.group instanceof fd || Array.isArray(e.group) && e.group.every((e) => e instanceof fd))) throw TypeError("options.video.group, when provided, must be an OutputTrackGroup or an array of OutputTrackGroups.");
}, gd = (e) => {
	if (!e || typeof e != "object") throw TypeError("options.audio, when provided, must be an object.");
	if (e?.discard !== void 0 && typeof e.discard != "boolean") throw TypeError("options.audio.discard, when provided, must be a boolean.");
	if (e?.forceTranscode !== void 0 && typeof e.forceTranscode != "boolean") throw TypeError("options.audio.forceTranscode, when provided, must be a boolean.");
	if (e?.codec !== void 0 && !ct.includes(e.codec)) throw TypeError(`options.audio.codec, when provided, must be one of: ${ct.join(", ")}.`);
	if (e?.bitrate !== void 0 && !(e.bitrate instanceof Xo) && (!Number.isInteger(e.bitrate) || e.bitrate <= 0)) throw TypeError("options.audio.bitrate, when provided, must be a positive integer or a quality.");
	if (e?.numberOfChannels !== void 0 && (!Number.isInteger(e.numberOfChannels) || e.numberOfChannels <= 0)) throw TypeError("options.audio.numberOfChannels, when provided, must be a positive integer.");
	if (e?.sampleRate !== void 0 && (!Number.isInteger(e.sampleRate) || e.sampleRate <= 0)) throw TypeError("options.audio.sampleRate, when provided, must be a positive integer.");
	if (e?.sampleFormat !== void 0 && ![
		"u8",
		"s16",
		"s32",
		"f32"
	].includes(e.sampleFormat)) throw TypeError("options.audio.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
	if (e?.process !== void 0 && typeof e.process != "function") throw TypeError("options.audio.process, when provided, must be a function.");
	if (e?.processedNumberOfChannels !== void 0 && (!Number.isInteger(e.processedNumberOfChannels) || e.processedNumberOfChannels <= 0)) throw TypeError("options.audio.processedNumberOfChannels, when provided, must be a positive integer.");
	if (e?.processedSampleRate !== void 0 && (!Number.isInteger(e.processedSampleRate) || e.processedSampleRate <= 0)) throw TypeError("options.audio.processedSampleRate, when provided, must be a positive integer.");
	if (e?.group !== void 0 && !(e.group instanceof fd || Array.isArray(e.group) && e.group.every((e) => e instanceof fd))) throw TypeError("options.audio.group, when provided, must be an OutputTrackGroup or an array of OutputTrackGroups.");
}, _d = 2, vd = 48e3, yd = class e {
	static async init(t) {
		let n = new e(t);
		return await n._init(), n;
	}
	constructor(e) {
		if (this._addedCounts = {
			video: 0,
			audio: 0,
			subtitle: 0
		}, this._totalTrackCount = 0, this._nextOutputTrackId = 0, this._outputTrackIds = [], this._outputOwnTrackGroups = [], this._trackPromises = [], this._executed = !1, this._synchronizer = new Sd(), this._totalDuration = null, this._maxTimestamps = /* @__PURE__ */ new Map(), this._canceled = !1, this.onProgress = void 0, this._computeProgress = !1, this._lastProgress = 0, this.isValid = !1, this.utilizedTracks = [], this.discardedTracks = [], !e || typeof e != "object") throw TypeError("options must be an object.");
		if (!(e.input instanceof zs)) throw TypeError("options.input must be an Input.");
		if (!(e.output instanceof md)) throw TypeError("options.output must be an Output.");
		if (e.tracks !== void 0 && e.tracks !== "all" && e.tracks !== "primary") throw TypeError("options.tracks, when provided, must be either 'all' or 'primary'.");
		if (e.output._tracks.length > 0 || Object.keys(e.output._metadataTags).length > 0 || e.output.state !== "pending") throw TypeError("options.output must be fresh: no tracks or metadata tags added and not started.");
		if (e.video !== void 0 && typeof e.video != "function") if (Array.isArray(e.video)) for (let t of e.video) hd(t);
		else hd(e.video);
		if (e.audio !== void 0 && typeof e.audio != "function") if (Array.isArray(e.audio)) for (let t of e.audio) gd(t);
		else gd(e.audio);
		if (e.trim !== void 0 && (!e.trim || typeof e.trim != "object")) throw TypeError("options.trim, when provided, must be an object.");
		if (e.trim?.start !== void 0 && !Number.isFinite(e.trim.start)) throw TypeError("options.trim.start, when provided, must be a finite number.");
		if (e.trim?.end !== void 0 && !Number.isFinite(e.trim.end)) throw TypeError("options.trim.end, when provided, must be a finite number.");
		if (e.trim?.start !== void 0 && e.trim.end !== void 0 && e.trim.start >= e.trim.end) throw TypeError("options.trim.start must be less than options.trim.end.");
		if (e.tags !== void 0 && (typeof e.tags != "object" || !e.tags) && typeof e.tags != "function") throw TypeError("options.tags, when provided, must be an object or a function.");
		if (typeof e.tags == "object" && $e(e.tags), e.showWarnings !== void 0 && typeof e.showWarnings != "boolean") throw TypeError("options.showWarnings, when provided, must be a boolean.");
		this._options = e, this.input = e.input, this.output = e.output;
		let { promise: t, resolve: n } = O();
		this._started = t, this._start = n;
	}
	async _init() {
		let e = await this.input.getFormat(), t, n = this._options.tracks;
		n === void 0 && (n = e.name.includes("(HLS)") ? "primary" : "all"), n === "all" ? t = await this.input.getTracks() : n === "primary" ? t = [await this.input.getPrimaryVideoTrack(), await this.input.getPrimaryAudioTrack()].filter((e) => e !== null) : (A(n), a(!1));
		let r = this.output.format.getSupportedTrackCounts(), o = 1, s = 1, c = [], l = [];
		for (let e of t) {
			let t;
			if (e.isVideoTrack()) if (this._options.video) if (typeof this._options.video == "function") {
				let n = await this._options.video(e, o) ?? {};
				if (Array.isArray(n)) for (let e of n) hd(e);
				else hd(n);
				t = Array.isArray(n) ? n : [n], o++;
			} else t = Array.isArray(this._options.video) ? this._options.video : [this._options.video];
			else t = [{}];
			else if (e.isAudioTrack()) if (this._options.audio) if (typeof this._options.audio == "function") {
				let n = await this._options.audio(e, s) ?? {};
				if (Array.isArray(n)) for (let e of n) gd(e);
				else gd(n);
				t = Array.isArray(n) ? n : [n], s++;
			} else t = Array.isArray(this._options.audio) ? this._options.audio : [this._options.audio];
			else t = [{}];
			else a(!1);
			let n = t.filter((e) => e.discard);
			for (let t of n) this.discardedTracks.push({
				track: e,
				reason: "discarded_by_user",
				trackOptions: t
			});
			if (t.length === n.length) {
				t.length === 0 && this.discardedTracks.push({
					track: e,
					reason: "discarded_by_user",
					trackOptions: {}
				});
				continue;
			}
			let r = t.filter((e) => !e.discard);
			c.push(e), l.push(r);
		}
		this._options.trim?.start === void 0 ? this._startTimestamp = Math.max(await this.input.getFirstTimestamp(c), 0) : this._startTimestamp = this._options.trim.start, this._endTimestamp = Math.max(this._options.trim?.end ?? Infinity, this._startTimestamp);
		for (let e = 0; e < c.length; e++) {
			let t = c[e], n = l[e];
			for (let e of n) {
				if (this._totalTrackCount === r.total.max) {
					this.discardedTracks.push({
						track: t,
						reason: "max_track_count_reached",
						trackOptions: e
					});
					continue;
				}
				if (this._addedCounts[t.type] === r[t.type].max) {
					this.discardedTracks.push({
						track: t,
						reason: "max_track_count_of_type_reached",
						trackOptions: e
					});
					continue;
				}
				let n = this._nextOutputTrackId++;
				t.isVideoTrack() ? await this._processVideoTrack(t, e, n) : t.isAudioTrack() ? await this._processAudioTrack(t, e, n) : a(!1);
			}
		}
		for (let e = 0; e < this.utilizedTracks.length - 1; e++) for (let t = e + 1; t < this.utilizedTracks.length; t++) {
			let n = this.utilizedTracks[e], r = this.utilizedTracks[t], i = this._outputOwnTrackGroups[e], o = this._outputOwnTrackGroups[t];
			a(i !== void 0), a(o !== void 0), i && o && n.canBePairedWith(r) && i.pairWith(o);
		}
		let u = await this.input.getMetadataTags(), d;
		if (this._options.tags) {
			let e = typeof this._options.tags == "function" ? await this._options.tags(u) : this._options.tags;
			$e(e), d = e;
		} else d = u;
		let f = e.mimeType === this.output.format.mimeType, p = u.raw === d.raw;
		if (u.raw && p && !f && delete d.raw, this.output.setMetadataTags(d), this.isValid = this._totalTrackCount >= r.total.min && this._addedCounts.video >= r.video.min && this._addedCounts.audio >= r.audio.min && this._addedCounts.subtitle >= r.subtitle.min, this._options.showWarnings ?? !0) {
			let e = [], t = this.discardedTracks.filter((e) => e.reason !== "discarded_by_user");
			t.length > 0 && e.push("Some tracks had to be discarded from the conversion:", t), this.isValid || (e.length > 0 && e.push("\n\n"), e.push(this._getInvalidityExplanation().join(""))), e.length > 0 && i._warn(...e);
		}
	}
	_getInvalidityExplanation() {
		let e = [];
		if (this.discardedTracks.length === 0) e.push("Due to missing tracks, this conversion cannot be executed.");
		else {
			let t = this.discardedTracks.every((e) => e.reason === "discarded_by_user" || e.reason === "no_encodable_target_codec") && this.discardedTracks.some((e) => e.reason === "no_encodable_target_codec");
			if (e.push("Due to discarded tracks, this conversion cannot be executed."), t) {
				let t = this.discardedTracks.flatMap((e) => e.reason === "discarded_by_user" ? [] : e.track.type === "video" ? this.output.format.getSupportedVideoCodecs() : e.track.type === "audio" ? this.output.format.getSupportedAudioCodecs() : this.output.format.getSupportedSubtitleCodecs()), n = [...new Set(t)];
				n.length === 1 ? e.push(`\nTracks were discarded because your environment is not able to encode '${n[0]}'.`) : e.push(`
Tracks were discarded because your environment is not able to encode any of the following codecs: ${n.map((e) => `'${e}'`).join(", ")}.`), n.includes("mp3") && e.push("\nThe @mediabunny/mp3-encoder extension package provides support for encoding MP3."), n.includes("aac") && e.push("\nThe @mediabunny/aac-encoder extension package provides support for encoding AAC."), (n.includes("ac3") || n.includes("eac3")) && e.push("\nThe @mediabunny/ac3 extension package provides support for encoding and decoding AC-3/E-AC-3."), n.includes("flac") && e.push("\nThe @mediabunny/flac-encoder extension package provides support for encoding FLAC.");
			} else e.push("\nCheck the discardedTracks field for more info.");
		}
		return e;
	}
	async execute() {
		if (!this.isValid) throw Error("Cannot execute this conversion because its output configuration is invalid. Make sure to always check the isValid field before executing a conversion.\n" + this._getInvalidityExplanation().join(""));
		if (this._executed) throw Error("Conversion cannot be executed twice.");
		this._executed = !0;
		for (let e of this._outputTrackIds) this._synchronizer.declareTrack(e);
		if (this.onProgress) {
			let e = [...new Set(this.utilizedTracks)].map(async (e) => await e.isLive() ? Infinity : await e.getDurationFromMetadata() ?? await e.computeDuration()), t = Math.max(0, ...await Promise.all(e));
			this._computeProgress = !0, this._totalDuration = Math.min(t - this._startTimestamp, this._endTimestamp - this._startTimestamp);
			for (let e of this._outputTrackIds) this._maxTimestamps.set(e, 0);
			this.onProgress?.(0, 0);
		}
		await this.output.start(), this._start();
		try {
			await Promise.all(this._trackPromises);
		} catch (e) {
			throw this._canceled || this.cancel(), e;
		}
		if (this._canceled) throw new bd();
		if (await this.output.finalize(), this._computeProgress) {
			let e = Math.min(...this._maxTimestamps.values());
			this.onProgress?.(1, e);
		}
	}
	async cancel() {
		if (!(this.output.state === "finalizing" || this.output.state === "finalized")) {
			if (this._canceled) {
				i._warn("Conversion already canceled.");
				return;
			}
			this._canceled = !0, await this.output.cancel();
		}
	}
	async _processVideoTrack(e, t, n) {
		let r = await e.getCodec();
		if (!r) {
			this.discardedTracks.push({
				track: e,
				reason: "unknown_source_codec",
				trackOptions: t
			});
			return;
		}
		let s, c = await e.getRotation(), l = o(c + (t.rotate ?? 0)), u = l, d = this.output.format.supportsVideoRotationMetadata && (t.allowRotationMetadata ?? !0), f = await e.getSquarePixelWidth(), p = await e.getSquarePixelHeight(), [m, h] = l % 180 == 0 ? [f, p] : [p, f], g = t.crop;
		g &&= So(g, m, h);
		let [_, v] = g ? [g.width, g.height] : [m, h], y = _, b = v, x = y / b;
		t.width !== void 0 && t.height === void 0 ? (y = Ye(t.width), b = Ye(Math.round(y / x))) : t.width === void 0 && t.height !== void 0 ? (b = Ye(t.height), y = Ye(Math.round(b * x))) : t.width !== void 0 && t.height !== void 0 && (y = Ye(t.width), b = Ye(t.height));
		let S = await e.getFirstTimestamp(), C = this.output.format.getSupportedVideoCodecs(), w = !!t.forceTranscode || S < this._startTimestamp || !!t.frameRate || t.keyFrameInterval !== void 0 || t.process !== void 0 || t.bitrate !== void 0 || !C.includes(r) || t.codec && t.codec !== r || y !== _ || b !== v || l !== 0 && !d || !!g, ee = t.alpha ?? "discard";
		if (w) {
			if (!await e.canDecode()) {
				this.discardedTracks.push({
					track: e,
					reason: "undecodable_source_codec",
					trackOptions: t
				});
				return;
			}
			t.codec && (C = C.filter((e) => e === t.codec));
			let r = t.bitrate ?? es, m = await as(C, {
				width: t.process && t.processedWidth ? t.processedWidth : y,
				height: t.process && t.processedHeight ? t.processedHeight : b,
				bitrate: r
			});
			if (!m) {
				this.discardedTracks.push({
					track: e,
					reason: "no_encodable_target_codec",
					trackOptions: t
				});
				return;
			}
			let h = {
				codec: m,
				bitrate: r,
				keyFrameInterval: t.keyFrameInterval,
				sizeChangeBehavior: t.fit ?? "passThrough",
				alpha: ee,
				hardwareAcceleration: t.hardwareAcceleration,
				transform: {}
			};
			a(h.transform);
			let x = y !== _ || b !== v || l !== 0 && (!d || t.process !== void 0) || !!g || f !== await e.getCodedWidth() || p !== await e.getCodedHeight();
			if (!x) {
				let t = new md({
					format: new Qu(),
					target: new hu()
				}), n = new Wu(h);
				t.addVideoTrack(n), await t.start();
				let r = await new Es(e).getSample(S);
				if (r) try {
					await n.add(r), r.close(), await t.finalize();
				} catch (e) {
					i._info("Error when probing encoder support. Falling back to rerender path.", e), x = !0, t.cancel();
				}
				else await t.cancel();
			}
			t.frameRate && (h.transform.frameRate = t.frameRate), t.process && (h.transform.process = t.process), x && (u = 0, h.transform.width = y, h.transform.height = b, h.transform.fit = t.fit ?? "fill", h.transform.rotate = o(l - c), h.transform.crop = g, h.transform.alpha = ee);
			let w = null;
			h.onEncodedSample = (e) => {
				w = e.timestamp;
			};
			let T = new Wu(h);
			s = T, this._trackPromises.push((async () => {
				await this._started;
				let t = new Es(e);
				for await (let e of t.samples(this._startTimestamp, this._endTimestamp)) {
					if (this._canceled) {
						e.close();
						return;
					}
					let t = Math.max(e.timestamp - this._startTimestamp, 0);
					e.setTimestamp(t), this._reportProgress(n, e.timestamp + e.duration), await T.add(e), w !== null && this._synchronizer.shouldWait(n, w) && await this._synchronizer.wait(w), e.close();
				}
				T.close(), this._synchronizer.closeTrack(n);
			})());
		} else {
			let t = new zu(r);
			s = t, this._trackPromises.push((async () => {
				await this._started;
				let r = new _s(e), i = { decoderConfig: await e.getDecoderConfig() ?? void 0 };
				for await (let e of r.packets(void 0, void 0, { verifyKeyPackets: !0 })) {
					if (this._canceled) return;
					if (e.timestamp >= this._endTimestamp) break;
					let r = e.clone({
						timestamp: e.timestamp - this._startTimestamp,
						sideData: ee === "discard" ? {} : e.sideData
					});
					a(r.timestamp >= 0), this._reportProgress(n, r.timestamp + r.duration), await t.add(r, i), this._synchronizer.shouldWait(n, r.timestamp) && await this._synchronizer.wait(r.timestamp);
				}
				t.close(), this._synchronizer.closeTrack(n);
			})());
		}
		let T = null;
		t.group || (T = new fd());
		let E = await e.getLanguageCode();
		this.output.addVideoTrack(s, {
			frameRate: t.frameRate,
			languageCode: be(E) ? E : void 0,
			name: await e.getName() ?? void 0,
			disposition: await e.getDisposition(),
			rotation: u,
			group: T ?? t.group
		}), this._addedCounts.video++, this._totalTrackCount++, this.utilizedTracks.push(e), this._outputTrackIds.push(n), this._outputOwnTrackGroups.push(T);
	}
	async _processAudioTrack(e, t, n) {
		let r = await e.getCodec();
		if (!r) {
			this.discardedTracks.push({
				track: e,
				reason: "unknown_source_codec",
				trackOptions: t
			});
			return;
		}
		let i, o = await e.getNumberOfChannels(), s = await e.getSampleRate(), c = await e.getFirstTimestamp(), l = t.numberOfChannels ?? o, u = t.sampleRate ?? s, d = c < this._startTimestamp, f = c > this._startTimestamp && !this.output.format.supportsTimestampedMediaData, p = this.output.format.getSupportedAudioCodecs();
		if (!t.forceTranscode && !t.bitrate && l === o && u === s && !d && !f && p.includes(r) && (!t.codec || t.codec === r) && !t.process && t.sampleFormat === void 0) {
			let t = new Ku(r);
			i = t, this._trackPromises.push((async () => {
				await this._started;
				let r = new _s(e), i = { decoderConfig: await e.getDecoderConfig() ?? void 0 };
				for await (let e of r.packets()) {
					if (this._canceled) return;
					if (e.timestamp >= this._endTimestamp) break;
					let r = e.clone({ timestamp: e.timestamp - this._startTimestamp });
					a(r.timestamp >= 0), this._reportProgress(n, r.timestamp + r.duration), await t.add(r, i), this._synchronizer.shouldWait(n, r.timestamp) && await this._synchronizer.wait(r.timestamp);
				}
				t.close(), this._synchronizer.closeTrack(n);
			})());
		} else {
			if (!await e.canDecode()) {
				this.discardedTracks.push({
					track: e,
					reason: "undecodable_source_codec",
					trackOptions: t
				});
				return;
			}
			let r = null;
			t.codec && (p = p.filter((e) => e === t.codec));
			let d = t.bitrate ?? es, m = await is(p, {
				numberOfChannels: t.process && t.processedNumberOfChannels ? t.processedNumberOfChannels : l,
				sampleRate: t.process && t.processedSampleRate ? t.processedSampleRate : u,
				bitrate: d
			});
			if (!m.some((e) => st.includes(e)) && p.some((e) => st.includes(e)) && (l !== _d || u !== vd)) {
				let e = (await is(p, {
					numberOfChannels: _d,
					sampleRate: vd,
					bitrate: d
				})).find((e) => st.includes(e));
				e && (r = e, l = _d, u = vd);
			} else r = m[0] ?? null;
			if (r === null) {
				this.discardedTracks.push({
					track: e,
					reason: "no_encodable_target_codec",
					trackOptions: t
				});
				return;
			}
			let h = {
				codec: r,
				bitrate: d,
				transform: {
					sampleFormat: t.sampleFormat,
					process: t.process
				}
			};
			a(h.transform), l !== o && (h.transform.numberOfChannels = l), u !== s && (h.transform.sampleRate = u);
			let g = null;
			h.onEncodedSample = (e) => {
				g = e.timestamp;
			};
			let _ = new Ju(h);
			i = _, this._trackPromises.push((async () => {
				if (await this._started, f) {
					let e = c - this._startTimestamp, t = Math.round(e * s), r = new No({
						data: new Float32Array(t * o),
						format: "f32-planar",
						numberOfChannels: o,
						sampleRate: s,
						timestamp: 0
					});
					await this._registerAudioSample(r, _, n, () => g);
				}
				let t = new ks(e);
				for await (let e of t.samples(this._startTimestamp, this._endTimestamp)) {
					if (this._canceled) {
						e.close();
						return;
					}
					let t = 0, r = e.numberOfFrames;
					if (e.timestamp < this._startTimestamp && (t = Math.round((this._startTimestamp - e.timestamp) * e.sampleRate)), e.timestamp + e.duration > this._endTimestamp && (r = Math.round((this._endTimestamp - e.timestamp) * e.sampleRate)), t > 0 || r < e.numberOfFrames) {
						let n = e.trim(t, r);
						if (e.close(), e = n, e.numberOfFrames === 0) {
							e.close();
							continue;
						}
					}
					e.setTimestamp(e.timestamp - this._startTimestamp), await this._registerAudioSample(e, _, n, () => g);
				}
				_.close(), this._synchronizer.closeTrack(n);
			})());
		}
		let m = null;
		t.group || (m = new fd());
		let h = await e.getLanguageCode();
		this.output.addAudioTrack(i, {
			languageCode: be(h) ? h : void 0,
			name: await e.getName() ?? void 0,
			disposition: await e.getDisposition(),
			group: m ?? t.group
		}), this._addedCounts.audio++, this._totalTrackCount++, this.utilizedTracks.push(e), this._outputTrackIds.push(n), this._outputOwnTrackGroups.push(m);
	}
	async _registerAudioSample(e, t, n, r) {
		this._reportProgress(n, e.timestamp + e.duration), await t.add(e), e.close();
		let i = r();
		i !== null && this._synchronizer.shouldWait(n, i) && await this._synchronizer.wait(i);
	}
	_reportProgress(e, t) {
		if (!this._computeProgress) return;
		a(this._totalDuration !== null), this._maxTimestamps.set(e, Math.max(t, this._maxTimestamps.get(e)));
		let n = Math.min(...this._maxTimestamps.values()), r = M(n / this._totalDuration, 0, 1);
		r !== this._lastProgress && (this._lastProgress = r, this.onProgress?.(r, n));
	}
}, bd = class extends Error {
	constructor(e = "Conversion has been canceled.") {
		super(e), this.name = "ConversionCanceledError";
	}
}, xd = 1, Sd = class {
	constructor() {
		this.maxTimestamps = /* @__PURE__ */ new Map(), this.resolvers = [];
	}
	declareTrack(e) {
		this.maxTimestamps.set(e, 0);
	}
	shouldWait(e, t) {
		let n = this.maxTimestamps.get(e);
		return a(n !== void 0), this.maxTimestamps.set(e, Math.max(t, n)), t - this.computeMinAndMaybeResolve() > xd;
	}
	wait(e) {
		let { promise: t, resolve: n } = O();
		return this.resolvers.push({
			timestamp: e,
			resolve: n
		}), t;
	}
	closeTrack(e) {
		this.maxTimestamps.delete(e), this.computeMinAndMaybeResolve();
	}
	computeMinAndMaybeResolve() {
		let e = Infinity;
		for (let [, t] of this.maxTimestamps) e = Math.min(e, t);
		for (let t = 0; t < this.resolvers.length; t++) {
			let n = this.resolvers[t];
			n.timestamp - e < xd && (n.resolve(), this.resolvers.splice(t, 1), t--);
		}
		return e;
	}
}, Cd = 12, wd = 8, Td = 1, Ed = 4, Dd = 4;
function Od({ root: e, formatBytes: t, revealLoadedSection: n }) {
	function r(t, n) {
		let r = e.getElementById(t);
		if (!r) throw Error(`DOM element not found: #${t} (expected ${n})`);
		return r;
	}
	let i = r("image-canvas-stage", "div#image-canvas-stage"), a = r("image-preview-canvas", "canvas#image-preview-canvas"), o = r("image-mask-canvas", "canvas#image-mask-canvas"), s = r("img-meta-name", "span#img-meta-name"), c = r("img-meta-size", "span#img-meta-size"), l = r("img-meta-resolution", "span#img-meta-resolution"), u = r("img-meta-aspect", "span#img-meta-aspect"), d = r("img-meta-type", "span#img-meta-type"), f = r("img-enable-crop", "input#img-enable-crop"), p = r("img-tool-crop", "input#img-tool-crop"), m = r("img-tool-paint", "input#img-tool-paint"), h = r("img-crop-x", "input#img-crop-x"), g = r("img-crop-y", "input#img-crop-y"), _ = r("img-crop-width", "input#img-crop-width"), v = r("img-crop-height", "input#img-crop-height"), y = r("img-crop-full", "button#img-crop-full"), b = r("img-crop-square", "button#img-crop-square"), x = r("img-enable-resize", "input#img-enable-resize"), S = r("img-out-width", "input#img-out-width"), C = r("img-out-height", "input#img-out-height"), w = r("img-scale-preset", "select#img-scale-preset"), ee = r("img-maxdim-preset", "select#img-maxdim-preset"), T = r("img-lock-aspect", "input#img-lock-aspect"), E = r("img-enable-blur", "input#img-enable-blur"), te = r("img-redaction-mode", "select#img-redaction-mode"), ne = r("img-brush-size", "input#img-brush-size"), re = r("img-blur-strength", "input#img-blur-strength"), ie = r("img-erase-mode", "input#img-erase-mode"), D = r("img-clear-mask", "button#img-clear-mask"), ae = r("img-out-format", "select#img-out-format"), O = r("img-quality", "input#img-quality"), oe = r("img-quality-label", "span#img-quality-label"), se = r("image-form", "form#image-form"), ce = r("image-result-section", "section#image-result-section"), le = r("image-output-placeholder", "div#image-output-placeholder"), k = r("image-download-anchor", "a#image-download-anchor"), A = r("image-output-size-tag", "span#image-output-size-tag"), ue = r("image-output-preview", "img#image-output-preview"), de = null, fe = null, j = null, pe = null, M = 0, N = 0, me = null, he = null, ge = !1, _e = null, ve = !1, ye = {
		scale: 1,
		offsetX: 0,
		offsetY: 0,
		drawWidth: 0,
		drawHeight: 0
	}, be = null;
	function xe() {
		me &&= (URL.revokeObjectURL(me), null), he &&= (URL.revokeObjectURL(he), null);
	}
	function Se(e, t, n) {
		return Math.min(n, Math.max(t, Math.round(e)));
	}
	function Ce() {
		if (!M || !N) return {
			x: 0,
			y: 0,
			width: 1,
			height: 1
		};
		if (!f.checked) return {
			x: 0,
			y: 0,
			width: M,
			height: N
		};
		let e = Se(parseInt(h.value) || 0, 0, M - 1), t = Se(parseInt(g.value) || 0, 0, N - 1), n = Se(parseInt(_.value) || M, 1, M - e), r = Se(parseInt(v.value) || N, 1, N - t);
		return h.value = String(e), g.value = String(t), _.value = String(n), v.value = String(r), {
			x: e,
			y: t,
			width: n,
			height: r
		};
	}
	function we(e, t) {
		a.width = e, a.height = t, o.width = e, o.height = t;
	}
	function Te() {
		let e = Ce(), { offsetX: t, offsetY: n, scale: r } = ye;
		return {
			x: t + e.x * r,
			y: n + e.y * r,
			width: e.width * r,
			height: e.height * r
		};
	}
	function Ee(e, t) {
		let n = i.getBoundingClientRect();
		return {
			x: e - n.left,
			y: t - n.top
		};
	}
	function De(e) {
		let t = Se(e.x, 0, Math.max(0, M - 1)), n = Se(e.y, 0, Math.max(0, N - 1)), r = Se(e.width, 1, Math.max(1, M - t)), i = Se(e.height, 1, Math.max(1, N - n));
		h.value = String(t), g.value = String(n), _.value = String(r), v.value = String(i);
	}
	function Oe(e, t) {
		let n = Te(), r = [
			[
				"nw",
				n.x,
				n.y
			],
			[
				"ne",
				n.x + n.width,
				n.y
			],
			[
				"sw",
				n.x,
				n.y + n.height
			],
			[
				"se",
				n.x + n.width,
				n.y + n.height
			]
		];
		for (let [n, i, a] of r) if (Math.hypot(e - i, t - a) <= Cd) return n;
		if (e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height) return "move";
		let { offsetX: i, offsetY: a, drawWidth: o, drawHeight: s } = ye;
		return e >= i && e <= i + o && t >= a && t <= a + s ? "new" : null;
	}
	function ke() {
		let e = o.getContext("2d");
		e.clearRect(0, 0, o.width, o.height), !(!j || !E.checked) && e.drawImage(j, 0, 0, o.width, o.height);
	}
	function Ae() {
		if (!fe) return;
		let e = i.getBoundingClientRect(), t = Math.max(1, Math.floor(e.width));
		if (t <= 1) return;
		let n = t / M, r = t, s = Math.max(1, Math.floor(N * n));
		i.style.height = `${s}px`, ye = {
			scale: n,
			offsetX: 0,
			offsetY: 0,
			drawWidth: r,
			drawHeight: s
		}, we(r, s), a.style.left = "0px", a.style.top = "0px", o.style.left = "0px", o.style.top = "0px";
		let c = a.getContext("2d");
		if (c.clearRect(0, 0, r, s), c.drawImage(fe, 0, 0, r, s), f.checked) {
			let e = Ce(), t = e.x * n, r = e.y * n, i = e.width * n, a = e.height * n;
			c.save(), c.strokeStyle = "rgba(255, 107, 129, 0.95)", c.lineWidth = 2, c.setLineDash([8, 5]), c.strokeRect(t, r, i, a), c.setLineDash([]), c.fillStyle = "rgba(255, 107, 129, 0.95)", [
				[t, r],
				[t + i, r],
				[t, r + a],
				[t + i, r + a]
			].forEach(([e, t]) => {
				c.fillRect(e - 10 / 2, t - 10 / 2, 10, 10);
			}), c.restore();
		}
		ke();
	}
	function je() {
		!pe || !j || (pe.clearRect(0, 0, j.width, j.height), ke());
	}
	function Me(e, t) {
		let n = Ee(e, t), r = n.x, i = n.y, { offsetX: a, offsetY: o, scale: s, drawWidth: c, drawHeight: l } = ye;
		return r < a || i < o || r > a + c || i > o + l ? null : {
			x: Se((r - a) / s, 0, M - 1),
			y: Se((i - o) / s, 0, N - 1)
		};
	}
	function Ne(e, t) {
		if (!pe) return;
		let n = parseInt(ne.value) || 40;
		pe.save(), pe.lineCap = "round", pe.lineJoin = "round", pe.lineWidth = Math.max(2, n / Math.max(.1, ye.scale)), pe.globalCompositeOperation = ie.checked ? "destination-out" : "source-over", pe.strokeStyle = "rgba(255, 72, 72, 0.82)", pe.beginPath(), pe.moveTo(e.x, e.y), pe.lineTo(t.x, t.y), pe.stroke(), pe.restore(), ke();
	}
	function Pe() {
		h.value = "0", g.value = "0", _.value = String(M || 1), v.value = String(N || 1), S.value = _.value, C.value = v.value;
	}
	function Fe() {
		let e = Ce();
		S.value = String(e.width), C.value = String(e.height);
	}
	function Ie() {
		return p.checked ? "crop" : m.checked ? "paint" : null;
	}
	function Le() {
		let e = Ie();
		i.classList.toggle("is-crop-mode", e === "crop"), i.classList.toggle("is-paint-mode", e === "paint");
	}
	function Re() {
		let e = f.checked, t = E.checked;
		p.disabled = !e, m.disabled = !t, p.checked && !e && (p.checked = !1, t && (m.checked = !0)), m.checked && !t && (m.checked = !1, e && (p.checked = !0)), !p.checked && !m.checked && (e ? p.checked = !0 : t && (m.checked = !0)), Le();
	}
	function ze() {
		let e = parseFloat(O.value).toFixed(2);
		oe.textContent = ae.value === "image/png" ? "Lossless" : e, O.disabled = ae.value === "image/png";
	}
	function Be(e) {
		if (!Number.isFinite(e) || e <= 0) return;
		let t = Ce(), n = Math.max(1, Math.round(t.width * e)), r = Math.max(1, Math.round(t.height * e));
		x.checked = !0, S.value = String(n), C.value = String(r);
	}
	function Ve(e) {
		if (!Number.isFinite(e) || e <= 0) return;
		let t = Ce(), n = Math.max(t.width, t.height), r = n > 0 ? e / n : 1, i = Math.max(1, Math.round(t.width * r)), a = Math.max(1, Math.round(t.height * r));
		x.checked = !0, S.value = String(i), C.value = String(a);
	}
	function He(e) {
		if (!be) return;
		let { handle: t, startPoint: n, startCrop: r } = be, i = e.x - n.x, a = e.y - n.y;
		if (t === "move") {
			De({
				x: r.x + i,
				y: r.y + a,
				width: r.width,
				height: r.height
			});
			return;
		}
		if (t === "new") {
			let t = Math.min(n.x, e.x), r = Math.min(n.y, e.y), i = Math.max(n.x, e.x), a = Math.max(n.y, e.y);
			De({
				x: t,
				y: r,
				width: Math.max(wd, i - t),
				height: Math.max(wd, a - r)
			});
			return;
		}
		let o = r.x, s = r.y, c = r.width, l = r.height, u = r.x + r.width, d = r.y + r.height;
		(t === "nw" || t === "sw") && (o = Math.min(e.x, u - wd), c = u - o), (t === "ne" || t === "se") && (c = Math.max(wd, e.x - r.x)), (t === "nw" || t === "ne") && (s = Math.min(e.y, d - wd), l = d - s), (t === "sw" || t === "se") && (l = Math.max(wd, e.y - r.y)), De({
			x: o,
			y: s,
			width: c,
			height: l
		});
	}
	function Ue(e) {
		return e === "image/png" ? "png" : e === "image/webp" ? "webp" : e === "image/avif" ? "avif" : "jpg";
	}
	async function We(e, t, n) {
		return await new Promise((r, i) => {
			e.toBlob((e) => {
				if (!e) {
					i(/* @__PURE__ */ Error("Could not encode output image."));
					return;
				}
				r(e);
			}, t, n);
		});
	}
	function Ge() {
		fe &&= (fe.close(), null), j = null, pe = null, M = 0, N = 0, de = null, ge = !1, _e = null, be = null, xe();
	}
	async function Ke(e) {
		Ge(), de = e, ce.style.display = "none", le.style.display = "", me = URL.createObjectURL(e), fe = await createImageBitmap(e), M = fe.width, N = fe.height, j = document.createElement("canvas"), j.width = M, j.height = N, pe = j.getContext("2d"), s.textContent = e.name, c.textContent = t(e.size), l.textContent = `${M}x${N}`, u.textContent = `${(M / N).toFixed(2)}:1`, d.textContent = e.type || "image/*", ue.src = "", Pe(), je(), Re(), ze(), n(), Ae(), requestAnimationFrame(() => {
			Ae();
		}), console.log(`Loaded image file: "${e.name}" (${M}x${N})`);
	}
	function qe(e) {
		ve = e, Le();
	}
	[
		h,
		g,
		_,
		v
	].forEach((e) => {
		e.addEventListener("input", () => {
			Ce(), Fe(), Ae();
		});
	}), f.addEventListener("change", () => {
		Re(), Fe(), Ae();
	}), p.addEventListener("change", Le), m.addEventListener("change", Le), y.addEventListener("click", () => {
		Pe(), Ae();
	}), b.addEventListener("click", () => {
		let e = Math.min(M, N), t = Math.floor((M - e) / 2), n = Math.floor((N - e) / 2);
		h.value = String(t), g.value = String(n), _.value = String(e), v.value = String(e), Fe(), Ae();
	}), x.addEventListener("change", () => {
		Fe();
	}), w.addEventListener("change", () => {
		let e = parseFloat(w.value);
		Number.isNaN(e) || Be(e);
	}), ee.addEventListener("change", () => {
		let e = parseInt(ee.value);
		Number.isNaN(e) || Ve(e);
	}), S.addEventListener("input", () => {
		if (!T.checked) return;
		let e = Ce(), t = parseInt(S.value) || e.width, n = e.width / e.height;
		C.value = String(Math.max(1, Math.round(t / n)));
	}), C.addEventListener("input", () => {
		if (!T.checked) return;
		let e = Ce(), t = parseInt(C.value) || e.height, n = e.width / e.height;
		S.value = String(Math.max(1, Math.round(t * n)));
	}), E.addEventListener("change", () => {
		Re(), ke();
	}), D.addEventListener("click", () => {
		je();
	}), ae.addEventListener("change", () => {
		ze();
	}), O.addEventListener("input", () => {
		ze();
	}), o.addEventListener("pointerdown", (e) => {
		if (!fe) return;
		let t = Me(e.clientX, e.clientY);
		if (!t) return;
		let n = Ie();
		if (n === "crop") {
			if (!f.checked) return;
			let n = Ee(e.clientX, e.clientY), r = Oe(n.x, n.y);
			if (!r) return;
			be = {
				handle: r,
				startPoint: t,
				startCrop: Ce()
			};
		} else if (n === "paint") {
			if (!E.checked) return;
			ge = !0, _e = t, Ne(t, t);
		} else return;
		o.setPointerCapture(e.pointerId);
	}), o.addEventListener("pointermove", (e) => {
		let t = Me(e.clientX, e.clientY);
		if (t) {
			if (be) {
				He(t), Fe(), Ae();
				return;
			}
			!ge || !_e || (Ne(_e, t), _e = t);
		}
	});
	let Je = () => {
		ge = !1, _e = null, be = null;
	}, Ye = (e) => {
		e?.pointerId !== void 0 && o.releasePointerCapture(e.pointerId), Je();
	};
	return o.addEventListener("pointerup", Ye), o.addEventListener("pointercancel", Ye), o.addEventListener("pointerleave", Je), window.addEventListener("resize", () => {
		ve && Ae();
	}), se.addEventListener("submit", async (e) => {
		if (e.preventDefault(), !de || !fe) {
			alert("Please load an image first.");
			return;
		}
		try {
			let e = Ce(), n = document.createElement("canvas");
			n.width = e.width, n.height = e.height;
			let r = n.getContext("2d");
			if (r.drawImage(fe, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height), E.checked && j && pe) {
				let t = Math.max(Td, parseInt(re.value) || Ed), i = document.createElement("canvas");
				i.width = e.width, i.height = e.height, i.getContext("2d").drawImage(j, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
				let a = document.createElement("canvas");
				a.width = e.width, a.height = e.height;
				let o = a.getContext("2d");
				if (te.value === "pixelate") {
					let r = Math.max(Dd, t), i = Math.max(1, Math.round(e.width / r)), a = Math.max(1, Math.round(e.height / r)), s = document.createElement("canvas");
					s.width = i, s.height = a;
					let c = s.getContext("2d");
					c.imageSmoothingEnabled = !1, c.drawImage(n, 0, 0, i, a), o.imageSmoothingEnabled = !1, o.drawImage(s, 0, 0, i, a, 0, 0, e.width, e.height);
				} else te.value === "black" ? (o.fillStyle = "#000000", o.fillRect(0, 0, e.width, e.height)) : (o.filter = `blur(${t}px)`, o.drawImage(n, 0, 0), o.filter = "none");
				let s = document.createElement("canvas");
				s.width = e.width, s.height = e.height;
				let c = s.getContext("2d");
				c.drawImage(a, 0, 0), c.globalCompositeOperation = "destination-in", c.drawImage(i, 0, 0), c.globalCompositeOperation = "source-over", r.drawImage(s, 0, 0);
			}
			let i = n;
			if (x.checked) {
				let t = Math.max(1, parseInt(S.value) || e.width), r = Math.max(1, parseInt(C.value) || e.height), a = document.createElement("canvas");
				a.width = t, a.height = r, a.getContext("2d").drawImage(n, 0, 0, t, r), i = a;
			}
			let a = ae.value, o = a === "image/png" ? void 0 : parseFloat(O.value), s;
			try {
				s = await We(i, a, o);
			} catch {
				console.warn(`Primary output format ${a} was unsupported. Falling back to JPEG.`), s = await We(i, "image/jpeg", .9);
			}
			he && URL.revokeObjectURL(he), he = URL.createObjectURL(s);
			let c = Ue(s.type || a), l = de.name.lastIndexOf("."), u = l > 0 ? de.name.slice(0, l) : de.name;
			k.href = he, k.download = `${u}_web_export.${c}`, A.textContent = `Size: ${t(s.size)}`, ue.src = he, le.style.display = "none", ce.style.display = "block", ce.scrollIntoView({ behavior: "smooth" }), console.log(`Image processing complete. Output: ${t(s.size)} (${c.toUpperCase()})`);
		} catch (e) {
			console.error("Image processing failed:", e), alert(`Image processing failed: ${e.message || e}`);
		}
	}), ze(), Re(), {
		load: Ke,
		dispose: Ge,
		setActive: qe
	};
}
//#endregion
//#region src/audioWorkflow.ts
var kd = {
	mp3: {
		makeFormat: () => new rd(),
		codec: "mp3",
		ext: "mp3",
		mime: "audio/mpeg",
		lossless: !1
	},
	m4a: {
		makeFormat: () => new Qu(),
		codec: "aac",
		ext: "m4a",
		mime: "audio/mp4",
		lossless: !1
	},
	opus: {
		makeFormat: () => new ad(),
		codec: "opus",
		ext: "ogg",
		mime: "audio/ogg",
		lossless: !1
	},
	wav: {
		makeFormat: () => new id(),
		codec: "pcm-s16",
		ext: "wav",
		mime: "audio/wav",
		lossless: !0
	},
	flac: {
		makeFormat: () => new od(),
		codec: "flac",
		ext: "flac",
		mime: "audio/flac",
		lossless: !0
	}
};
function Ad({ root: e, formatBytes: t, revealLoadedSection: n }) {
	function r(t, n) {
		let r = e.getElementById(t);
		if (!r) throw Error(`DOM element not found: #${t} (expected ${n})`);
		return r;
	}
	let i = r("audio-preview", "audio#audio-preview"), a = r("audio-waveform", "canvas#audio-waveform"), o = r("audio-meta-name", "span"), s = r("audio-meta-size", "span"), c = r("audio-meta-duration", "span"), l = r("audio-meta-codec", "span"), u = r("audio-meta-samplerate", "span"), d = r("audio-meta-channels", "span"), f = r("audio-meta-bitrate", "span"), p = r("audio-form", "form#audio-form"), m = r("audio-enable-trim", "input"), h = r("audio-trim-controls", "div"), g = r("audio-trim-start", "input"), _ = r("audio-trim-end", "input"), v = r("audio-trim-start-val", "span"), y = r("audio-trim-end-val", "span"), b = r("audio-trim-selection-bar", "div"), x = r("audio-out-format", "select"), S = r("audio-out-bitrate", "select"), C = r("audio-out-samplerate", "select"), w = r("audio-out-channels", "select"), ee = r("audio-process-btn", "button"), T = r("audio-cancel-btn", "button"), E = r("audio-size-estimate", "strong"), te = r("audio-output-placeholder", "div"), ne = r("audio-progress-section", "section"), re = r("audio-progress-title", "span"), ie = r("audio-progress-pct", "strong"), D = r("audio-progress", "progress"), ae = r("audio-result-section", "section"), O = r("audio-output-preview", "audio"), oe = r("audio-download-anchor", "a"), se = r("audio-output-size-tag", "span"), ce = null, le = null, k = 0, A = null, ue = !1, de = null, fe = null, j = [], pe = null, M = 0;
	function N() {
		de &&= (URL.revokeObjectURL(de), null), fe &&= (URL.revokeObjectURL(fe), null);
	}
	function me(e) {
		if (isNaN(e) || !isFinite(e)) return "0:00";
		let t = Math.floor(e / 60), n = Math.floor(e % 60), r = Math.floor(e % 1 * 100);
		return `${t}:${n.toString().padStart(2, "0")}.${r.toString().padStart(2, "0")}`;
	}
	function he() {
		return kd[x.value] || kd.mp3;
	}
	function ge() {
		if (!k) {
			E.textContent = "—";
			return;
		}
		let e = k;
		if (m.checked) {
			let t = parseFloat(g.value), n = parseFloat(_.value);
			!isNaN(t) && !isNaN(n) && n > t && (e = n - t);
		}
		let n = he(), r;
		r = n.ext === "wav" ? (parseInt(C.value) || 44100) * (parseInt(w.value) || 2) * 2 * e : n.lossless ? (parseInt(C.value) || 44100) * (parseInt(w.value) || 2) * 2 * e * .6 : (parseInt(S.value) || 192e3) * e / 8, E.textContent = "≈ " + t(r);
	}
	function _e() {
		S.disabled = he().lossless, ge();
	}
	async function ve() {
		for (let e of Array.from(x.options)) {
			let t = kd[e.value];
			if (!t) continue;
			let n = !1;
			try {
				n = await rs(t.codec);
			} catch {
				n = !1;
			}
			e.disabled = !n;
			let r = e.textContent.replace(/ — unavailable$/, "");
			e.textContent = n ? r : `${r} — unavailable`;
		}
		if (x.selectedOptions[0]?.disabled) {
			let e = Array.from(x.options).find((e) => !e.disabled);
			e && (x.value = e.value);
		}
		_e();
	}
	function ye(e, t) {
		v.textContent = `${e.toFixed(2)}s`, y.textContent = `${t.toFixed(2)}s`, k && (b.style.left = `${e / k * 100}%`, b.style.width = `${(t - e) / k * 100}%`), be();
	}
	function be() {
		let e = a.clientWidth || 300, t = a.clientHeight || 90, n = window.devicePixelRatio || 1;
		a.width = Math.round(e * n), a.height = Math.round(t * n);
		let r = a.getContext("2d");
		if (!r) return;
		r.setTransform(n, 0, 0, n, 0, 0), r.clearRect(0, 0, e, t);
		let o = t / 2, s = o - 2, c = getComputedStyle(a).color || "#ff6b81";
		if (j.length) {
			r.fillStyle = c;
			let t = j.length;
			for (let n = 0; n < e; n++) {
				let i = j[Math.floor(n / e * t)] || {
					min: 0,
					max: 0
				}, a = o - i.max * s, c = o - i.min * s;
				r.fillRect(n, a, 1, Math.max(1, c - a));
			}
		}
		if (m.checked && k) {
			let n = parseFloat(g.value) / k * e, i = parseFloat(_.value) / k * e;
			r.fillStyle = "rgba(0, 0, 0, 0.5)", r.fillRect(0, 0, Math.max(0, n), t), r.fillRect(Math.min(e, i), 0, e - Math.min(e, i), t), r.strokeStyle = c, r.lineWidth = 1, r.strokeRect(n + .5, .5, Math.max(0, i - n) - 1, t - 1);
		}
		if (k && i.currentTime > 0) {
			let n = i.currentTime / k * e;
			r.fillStyle = "rgba(255, 255, 255, 0.85)", r.fillRect(n, 0, 1.5, t);
		}
	}
	async function xe(e, t) {
		j = [], be();
		try {
			let n = await e.arrayBuffer();
			pe ||= new (window.AudioContext || window.webkitAudioContext)();
			let r = await pe.decodeAudioData(n);
			if (t !== M) return;
			let i = r.getChannelData(0), a = Math.max(1, Math.floor(i.length / 800)), o = [];
			for (let e = 0; e < 800; e++) {
				let t = 1, n = -1, r = e * a, s = Math.min(i.length, r + a);
				for (let e = r; e < s; e++) {
					let r = i[e];
					r < t && (t = r), r > n && (n = r);
				}
				o.push(s > r ? {
					min: t,
					max: n
				} : {
					min: 0,
					max: 0
				});
			}
			j = o, be();
		} catch (e) {
			console.warn("Could not render audio waveform (format may be undecodable by WebAudio):", e);
		}
	}
	a.addEventListener("click", (e) => {
		if (!k) return;
		let t = a.getBoundingClientRect();
		i.currentTime = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)) * k, be();
	}), i.addEventListener("timeupdate", () => be()), window.addEventListener("resize", () => be());
	async function Se(e) {
		Ce(), ce = e, ae.style.display = "none", te.style.display = "", ne.style.display = "none", de = URL.createObjectURL(e), i.src = de, xe(e, ++M), o.textContent = e.name, s.textContent = t(e.size);
		try {
			le = new zs({
				formats: io,
				source: new Da(e)
			});
			let t = await le.getFormat();
			console.log(`Detected audio container: ${t.name} (${t.mimeType})`);
			let r = await le.getPrimaryAudioTrack();
			if (!r) {
				l.textContent = "No audio track", console.warn("No audio track found in this file."), n();
				return;
			}
			let i = await r.getCodec();
			if (k = await le.computeDuration(), l.textContent = String(i || "unknown").toUpperCase(), c.textContent = me(k), u.textContent = r.sampleRate ? `${r.sampleRate.toLocaleString()} Hz` : "-", d.textContent = String(r.numberOfChannels || "-"), k > 0) {
				let t = e.size * 8 / k / 1e3;
				f.textContent = `~${Math.round(t)} kbps`;
			} else f.textContent = "-";
			g.max = String(k), _.max = String(k), g.value = "0", _.value = String(k), ye(0, k), console.log(`Loaded audio: "${e.name}" — ${me(k)}, ${r.sampleRate}Hz, ${r.numberOfChannels}ch.`), n(), _e();
		} catch (e) {
			console.error("Error analyzing audio file: ", e), alert(`Could not read audio metadata: ${e.message || e}`);
		}
	}
	m.addEventListener("change", () => {
		if (m.checked) {
			h.style.display = "block", i.pause();
			let e = parseFloat(g.value);
			ye(e, parseFloat(_.value)), i.currentTime = e;
		} else h.style.display = "none";
		ge();
	}), g.addEventListener("input", () => {
		ue = !0, i.pause();
		let e = parseFloat(g.value), t = parseFloat(_.value);
		e >= t && (e = Math.max(0, t - .05), g.value = String(e)), g.style.zIndex = "3", _.style.zIndex = "2", ye(e, t), i.currentTime = e;
	}), _.addEventListener("input", () => {
		ue = !0, i.pause();
		let e = parseFloat(g.value), t = parseFloat(_.value);
		t <= e && (t = Math.min(k, e + .05), _.value = String(t)), g.style.zIndex = "2", _.style.zIndex = "3", ye(e, t), i.currentTime = t;
	}), [g, _].forEach((e) => [
		"change",
		"mouseup",
		"touchend"
	].forEach((t) => e.addEventListener(t, () => {
		ue = !1;
	}))), i.addEventListener("timeupdate", () => {
		if (m.checked && !ue) {
			let e = parseFloat(_.value);
			i.currentTime >= e && (i.pause(), i.currentTime = parseFloat(g.value));
		}
	}), x.addEventListener("change", _e), p.addEventListener("input", ge), p.addEventListener("change", ge), p.addEventListener("submit", async (e) => {
		if (e.preventDefault(), !ce || !le) {
			alert("Please load an audio file first.");
			return;
		}
		ee.style.display = "none", T.style.display = "inline-block", ne.style.display = "block", ae.style.display = "none", te.style.display = "none", D.value = 0, ie.textContent = "0%", re.textContent = "🎵 Initializing audio pipeline...";
		try {
			let e = he(), n = new mu(), r = new md({
				format: e.makeFormat(),
				target: n
			}), i = {
				forceTranscode: !0,
				codec: e.codec
			};
			e.lossless || (i.bitrate = parseInt(S.value) || 192e3);
			let a = parseInt(C.value);
			a > 0 && (i.sampleRate = a);
			let o = parseInt(w.value);
			o > 0 && (i.numberOfChannels = o);
			let s = m.checked && k ? {
				start: parseFloat(g.value),
				end: parseFloat(_.value)
			} : void 0;
			if (A = await yd.init({
				input: le,
				output: r,
				audio: i,
				trim: s
			}), !A.isValid) throw A.discardedTracks.forEach((e) => console.warn(`Track discarded: ${e.reason}`)), Error("This audio format/codec combination is not supported.");
			A.onProgress = (e) => {
				let t = Math.min(100, Math.round(e * 100));
				D.value = t, ie.textContent = `${t}%`, re.textContent = `🎵 Transcoding audio (${t}%)`;
			}, console.log(`🚀 Converting audio to ${e.ext.toUpperCase()} (${e.codec})...`), await A.execute();
			let c = n.buffer;
			if (!c) throw Error("Conversion produced an empty buffer.");
			let l = new Blob([c], { type: e.mime });
			fe && URL.revokeObjectURL(fe), fe = URL.createObjectURL(l);
			let u = ce.name.lastIndexOf("."), d = u > 0 ? ce.name.slice(0, u) : ce.name;
			oe.href = fe, oe.download = `${d}_web_export.${e.ext}`, O.src = fe, se.textContent = `Size: ${t(l.size)}`, console.log(`🎉 Audio conversion complete! Output: ${t(l.size)} (${e.ext.toUpperCase()}).`), ae.style.display = "block", ae.scrollIntoView({ behavior: "smooth" });
		} catch (e) {
			e.name === "ConversionCanceledError" || e.message?.includes("canceled") ? console.warn("Audio conversion canceled.") : (console.error("Audio conversion failed: ", e), alert(`Audio conversion failed: ${e.message || e}`));
		} finally {
			ee.style.display = "inline-block", T.style.display = "none", ne.style.display = "none", ae.style.display === "none" && (te.style.display = ""), A = null;
		}
	}), T.addEventListener("click", async () => {
		A && (console.log("Requesting cancellation of audio conversion..."), await A.cancel());
	});
	function Ce() {
		le &&= (le.dispose(), null), N(), i.removeAttribute("src"), O.removeAttribute("src"), k = 0, ce = null, ue = !1, M++, j = [], be();
	}
	function we(e) {
		e || i.pause();
	}
	return _e(), ve(), {
		load: Se,
		dispose: Ce,
		setActive: we
	};
}
//#endregion
//#region src/zip.ts
var jd = (() => {
	let e = /* @__PURE__ */ new Uint32Array(256);
	for (let t = 0; t < 256; t++) {
		let n = t;
		for (let e = 0; e < 8; e++) n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
		e[t] = n >>> 0;
	}
	return e;
})();
function Md(e) {
	let t = 4294967295;
	for (let n = 0; n < e.length; n++) t = jd[(t ^ e[n]) & 255] ^ t >>> 8;
	return (t ^ 4294967295) >>> 0;
}
var Nd = (e) => new Uint8Array([e & 255, e >>> 8 & 255]), Pd = (e) => new Uint8Array([
	e & 255,
	e >>> 8 & 255,
	e >>> 16 & 255,
	e >>> 24 & 255
]);
function Fd(e) {
	let t = 0;
	for (let n of e) t += n.length;
	let n = new Uint8Array(t), r = 0;
	for (let t of e) n.set(t, r), r += t.length;
	return n;
}
function Id(e) {
	let t = new TextEncoder(), n = [], r = [], i = 0, a = 2048;
	for (let o of e) {
		let e = t.encode(o.name), s = Md(o.data), c = o.data.length, l = Fd([
			Pd(67324752),
			Nd(20),
			Nd(a),
			Nd(0),
			Nd(0),
			Nd(33),
			Pd(s),
			Pd(c),
			Pd(c),
			Nd(e.length),
			Nd(0),
			e
		]);
		n.push(l, o.data), r.push(Fd([
			Pd(33639248),
			Nd(20),
			Nd(20),
			Nd(a),
			Nd(0),
			Nd(0),
			Nd(33),
			Pd(s),
			Pd(c),
			Pd(c),
			Nd(e.length),
			Nd(0),
			Nd(0),
			Nd(0),
			Nd(0),
			Pd(0),
			Pd(i),
			e
		])), i += l.length + c;
	}
	let o = Fd(r), s = Fd([
		Pd(101010256),
		Nd(0),
		Nd(0),
		Nd(e.length),
		Nd(e.length),
		Pd(o.length),
		Pd(i),
		Nd(0)
	]);
	return new Blob([
		...n,
		o,
		s
	], { type: "application/zip" });
}
//#endregion
//#region src/imageBatchWorkflow.ts
var Ld = {
	"image/jpeg": "jpg",
	"image/png": "png",
	"image/webp": "webp",
	"image/avif": "avif"
};
function Rd({ root: e, formatBytes: t }) {
	function n(t, n) {
		let r = e.getElementById(t);
		if (!r) throw Error(`DOM element not found: #${t} (expected ${n})`);
		return r;
	}
	let r = n("batch-out-format", "select"), i = n("batch-quality", "input"), a = n("batch-quality-label", "small"), o = n("batch-enable-resize", "input"), s = n("batch-resize-controls", "div"), c = n("batch-maxdim-preset", "select"), l = n("batch-maxdim", "input"), u = n("batch-process-btn", "button"), d = n("batch-download-all", "button"), f = n("batch-queue", "div"), p = n("batch-count", "span"), m = n("batch-thumbs", "div"), h = n("batch-input-count", "span"), g = n("batch-total-size", "strong"), _ = [], v = [];
	function y() {
		_.forEach((e) => {
			e.url && URL.revokeObjectURL(e.url);
		}), v.forEach((e) => URL.revokeObjectURL(e)), v = [];
	}
	function b(e) {
		m.innerHTML = "";
		let n = 0;
		for (let t of e) {
			n += t.size;
			let e = URL.createObjectURL(t);
			v.push(e);
			let r = document.createElement("img");
			r.className = "batch-thumb", r.src = e, r.alt = t.name, r.title = t.name, m.appendChild(r);
		}
		h.textContent = String(e.length), g.textContent = t(n);
	}
	function x() {
		let e = r.value === "image/png";
		a.textContent = e ? "Lossless" : parseFloat(i.value).toFixed(2), i.disabled = e;
	}
	function S(e) {
		return e.status === "pending" ? "Pending" : e.status === "processing" ? "Processing…" : e.status === "error" ? `Error: ${e.error || "failed"}` : e.blob ? t(e.blob.size) : "Done";
	}
	function C() {
		p.textContent = String(_.length), f.innerHTML = "", _.forEach((e, t) => {
			let n = document.createElement("div");
			n.className = "batch-item", n.dataset.status = e.status;
			let r = document.createElement("span");
			r.className = "batch-item-name", r.textContent = e.file.name;
			let i = document.createElement("span");
			if (i.className = "batch-item-status", i.textContent = S(e), n.appendChild(r), n.appendChild(i), e.status === "done" && e.url) {
				let r = document.createElement("a");
				r.className = "batch-item-dl", r.href = e.url, r.download = e.outName || `image_${t}`, r.textContent = "Download", n.appendChild(r);
			}
			f.appendChild(n);
		}), d.style.display = _.some((e) => e.status === "done") ? "inline-block" : "none";
	}
	function w() {
		if (!o.checked) return null;
		let e = parseInt(l.value);
		return !Number.isNaN(e) && e > 0 ? e : null;
	}
	function ee(e, t) {
		let n = w();
		if (n === null) return {
			w: e,
			h: t
		};
		let r = Math.max(e, t), i = r > n ? n / r : 1;
		return {
			w: Math.max(1, Math.round(e * i)),
			h: Math.max(1, Math.round(t * i))
		};
	}
	async function T(e, t, n) {
		return new Promise((r, i) => {
			e.toBlob((e) => e ? r(e) : i(/* @__PURE__ */ Error("encode failed")), t, n);
		});
	}
	async function E(e) {
		let t = await createImageBitmap(e.file);
		try {
			let { w: n, h: a } = ee(t.width, t.height), o = document.createElement("canvas");
			o.width = n, o.height = a, o.getContext("2d").drawImage(t, 0, 0, n, a);
			let s = r.value, c = s === "image/png" ? void 0 : parseFloat(i.value), l, u = Ld[s] || "jpg";
			try {
				l = await T(o, s, c);
			} catch {
				console.warn(`Format ${s} unsupported for ${e.file.name}; falling back to JPEG.`), l = await T(o, "image/jpeg", .9), u = "jpg";
			}
			e.url && URL.revokeObjectURL(e.url), e.blob = l, e.url = URL.createObjectURL(l);
			let d = e.file.name.lastIndexOf(".");
			e.outName = `${d > 0 ? e.file.name.slice(0, d) : e.file.name}${w() === null ? "_web_export" : `_${Math.max(n, a)}px`}.${u}`, e.status = "done";
		} finally {
			t.close();
		}
	}
	async function te() {
		u.setAttribute("aria-busy", "true"), u.disabled = !0, console.log(`🖼️ Batch: processing ${_.length} image(s)…`);
		for (let e of _) {
			e.status = "processing", C();
			try {
				await E(e);
			} catch (t) {
				e.status = "error", e.error = t?.message || String(t), console.error(`Batch item "${e.file.name}" failed:`, t);
			}
			C();
		}
		u.removeAttribute("aria-busy"), u.disabled = !1;
		let e = _.filter((e) => e.status === "done").length;
		console.log(`✅ Batch complete: ${e}/${_.length} succeeded.`);
	}
	function ne(e, t) {
		let n = document.createElement("a");
		n.href = e, n.download = t, n.style.display = "none", document.body.appendChild(n), n.click(), n.remove();
	}
	async function re() {
		let e = _.filter((e) => e.status === "done" && e.blob);
		if (e.length) {
			d.setAttribute("aria-busy", "true"), d.disabled = !0;
			try {
				let n = /* @__PURE__ */ new Set(), r = [];
				for (let t of e) {
					let e = t.outName;
					if (n.has(e)) {
						let t = e.lastIndexOf("."), n = r.length;
						e = t > 0 ? `${e.slice(0, t)}_${n}${e.slice(t)}` : `${e}_${n}`;
					}
					n.add(e), r.push({
						name: e,
						data: new Uint8Array(await t.blob.arrayBuffer())
					});
				}
				let i = Id(r), a = URL.createObjectURL(i);
				ne(a, "media-converter-batch.zip"), setTimeout(() => URL.revokeObjectURL(a), 1e4), console.log(`📦 Zipped ${r.length} file(s) → ${t(i.size)}.`);
			} catch (e) {
				console.error("Failed to build zip:", e), alert(`Could not build the zip: ${e?.message || e}`);
			} finally {
				d.removeAttribute("aria-busy"), d.disabled = !1;
			}
		}
	}
	r.addEventListener("change", x), i.addEventListener("input", x), o.addEventListener("change", () => {
		s.style.display = o.checked ? "block" : "none";
	}), c.addEventListener("change", () => {
		c.value && (l.value = c.value);
	}), l.addEventListener("input", () => {
		l.value !== c.value && (c.value = "");
	}), u.addEventListener("click", () => void te()), d.addEventListener("click", () => void re());
	function ie(e) {
		y(), _ = e.map((e) => ({
			file: e,
			status: "pending"
		})), u.disabled = !1, u.textContent = `🖼️ Process All Images (${_.length})`, x(), b(e), C(), console.log(`Batch queued: ${_.length} image(s).`);
	}
	function D() {
		y(), _ = [];
	}
	function ae() {}
	return x(), {
		start: ie,
		dispose: D,
		setActive: ae
	};
}
//#endregion
//#region src/toolkitCore.ts
var zd = [], Bd = !1;
function Vd(e) {
	if (typeof e != "object" || !e) return String(e);
	try {
		return JSON.stringify(e);
	} catch {
		return String(e);
	}
}
function Hd() {
	if (Bd) return;
	Bd = !0;
	let e = console.log, t = console.warn, n = console.error, r = (e, t, n) => {
		if (n.apply(console, t), zd.length === 0) return;
		let r = (/* @__PURE__ */ new Date()).toLocaleTimeString(), i = t.map(Vd).join(" ").replace(/</g, "&lt;").replace(/>/g, "&gt;"), a = "#a6e22e";
		e === "warn" && (a = "#fd971f"), e === "error" && (a = "#f92672");
		for (let e of zd) e.innerHTML += `<div style="color: ${a}">[${r}] ${i}</div>`, e.scrollTop = e.scrollHeight;
	};
	console.log = (...t) => r("log", t, e), console.warn = (...e) => r("warn", e, t), console.error = (...e) => r("error", e, n);
}
function Ud(e, { themeElement: t }) {
	Hd();
	let n = [
		e.getElementById("log-console"),
		e.getElementById("log-console-img"),
		e.getElementById("log-console-audio"),
		e.getElementById("log-console-batch")
	].filter((e) => e != null);
	n.forEach((e) => zd.push(e)), [
		e.getElementById("clear-console-btn"),
		e.getElementById("clear-console-btn-img"),
		e.getElementById("clear-console-btn-audio"),
		e.getElementById("clear-console-btn-batch")
	].filter((e) => e != null).forEach((e) => {
		e.addEventListener("click", () => {
			n.forEach((e) => {
				e.innerHTML = "System diagnostic logger cleared. Ready for next operation.";
			});
		});
	});
	let r = e.getElementById("theme-toggle"), i = e.getElementById("theme-icon-moon"), a = e.getElementById("theme-icon-sun"), o = e.getElementById("dropzone"), s = e.getElementById("video-file-input"), c = e.getElementById("loaded-file-section"), l = e.getElementById("video-workspace"), u = e.getElementById("image-workspace"), d = e.getElementById("audio-workspace"), f = e.getElementById("batch-workspace"), p = e.getElementById("preview-video"), m = e.getElementById("meta-name"), h = e.getElementById("meta-size"), g = e.getElementById("meta-duration"), _ = e.getElementById("meta-resolution"), v = e.getElementById("meta-aspect"), y = e.getElementById("meta-vcodec"), b = e.getElementById("meta-fps"), x = e.getElementById("meta-atrack"), S = e.getElementById("meta-tags"), C = e.getElementById("conversion-form"), w = e.getElementById("enable-trim"), ee = e.getElementById("trim-controls-group"), T = e.getElementById("trim-start"), E = e.getElementById("trim-end"), te = e.getElementById("trim-start-val"), ne = e.getElementById("trim-end-val"), re = e.getElementById("trim-selection-bar"), ie = e.getElementById("enable-resize"), D = e.getElementById("resize-controls-group"), ae = e.getElementById("resize-preset"), O = e.getElementById("resize-width"), oe = e.getElementById("resize-height"), se = e.getElementById("preserve-aspect"), ce = e.getElementById("resize-fit"), le = e.getElementById("out-format"), k = e.getElementById("out-vcodec"), A = e.getElementById("out-quality"), ue = e.getElementById("out-quality-val"), de = e.getElementById("out-quality-rate"), fe = e.getElementById("quality-help"), j = e.getElementById("fast-copy-tag"), pe = [
		"panel-crop",
		"panel-resize",
		"panel-codec",
		"panel-compression",
		"panel-rotation",
		"panel-resample"
	].map((t) => e.getElementById(t)), M = e.getElementById("enable-crop-video"), N = e.getElementById("crop-controls-group"), me = e.getElementById("crop-x"), he = e.getElementById("crop-y"), ge = e.getElementById("crop-w"), _e = e.getElementById("crop-h"), ve = e.getElementById("crop-full"), ye = e.getElementById("crop-square"), be = e.getElementById("video-crop-overlay"), xe = e.getElementById("video-crop-box"), Se = e.querySelector("label[for=\"audio-mode-transcode\"]"), Ce = e.getElementById("rotate-correction"), we = e.getElementById("allow-rot-metadata"), Te = e.getElementById("enable-fps"), Ee = e.getElementById("fps-controls-group"), De = e.getElementById("target-fps"), Oe = e.getElementById("fps-mode"), ke = e.getElementById("use-custom-bitrate"), Ae = e.getElementById("custom-bitrate-group"), je = e.getElementById("custom-bitrate"), Me = e.getElementById("custom-bitrate-mbps-label"), Ne = e.getElementById("audio-mode-copy"), Pe = e.getElementById("audio-mode-transcode"), Fe = e.getElementById("audio-mode-mute"), Ie = e.getElementById("audio-transcode-controls"), Le = e.getElementById("audio-codec"), Re = e.getElementById("audio-bitrate"), ze = e.getElementById("audio-channels"), Be = e.getElementById("audio-samplerate"), Ve = e.getElementById("convert-btn"), He = e.getElementById("cancel-btn"), Ue = e.getElementById("progress-section"), We = e.getElementById("progress-title"), Ge = e.getElementById("progress-percentage"), Ke = e.getElementById("conversion-progress"), qe = e.getElementById("progress-time-processed"), Je = e.getElementById("progress-speed"), Ye = e.getElementById("result-section"), Xe = e.getElementById("download-anchor"), Ze = e.getElementById("output-size-tag"), Qe = e.getElementById("output-video"), $e = e.getElementById("output-placeholder"), et = e.getElementById("image-result-section"), tt = null, nt = null, P = 0, F = 0, rt = 0, it = 0, at = !1, ot = null, I = !1, st = null, ct = null, lt = null, L = {
		lastSample: null,
		nextOutputTimestamp: 0,
		isFirstFrame: !0,
		blendCanvas: null,
		blendCtx: null
	};
	function ut() {
		if (L.lastSample) try {
			L.lastSample.close();
		} catch {}
		L = {
			lastSample: null,
			nextOutputTimestamp: 0,
			isFirstFrame: !0,
			blendCanvas: null,
			blendCtx: null
		};
	}
	let dt = {
		1: Zo,
		2: Qo,
		3: $o,
		4: es,
		5: ts
	}, ft = {
		1: "Very Low",
		2: "Low",
		3: "Medium",
		4: "High",
		5: "Very High"
	}, pt = {
		1: "Prioritizes hyper-compression over quality. Ideal for lightweight previews.",
		2: "Aggressive compression. Noticeable reduction in metadata and detail.",
		3: "Balanced bitrate and visual fidelity for typical social/web sharing.",
		4: "Excellent visual density. Great for standard professional distribution.",
		5: "Preserves maximum fine detail and frames. Generates large files."
	}, mt = {
		1: "~600 kbps",
		2: "~1.5 Mbps",
		3: "~3.5 Mbps",
		4: "~7.5 Mbps",
		5: "~15 Mbps"
	}, ht = {
		1: .6,
		2: 1.5,
		3: 3.5,
		4: 7.5,
		5: 15
	};
	function gt() {
		let e = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		t.setAttribute("data-theme", e), _t(e);
	}
	function _t(e) {
		e === "dark" ? (i.style.display = "none", a.style.display = "inline-block") : (i.style.display = "inline-block", a.style.display = "none");
	}
	r.addEventListener("click", () => {
		let e = (t.getAttribute("data-theme") || "light") === "light" ? "dark" : "light";
		t.setAttribute("data-theme", e), localStorage.setItem("theme", e), _t(e);
	}), gt();
	function vt(e, t = 2) {
		if (e === 0) return "0 Bytes";
		let n = 1024, r = t < 0 ? 0 : t, i = [
			"Bytes",
			"KB",
			"MB",
			"GB",
			"TB"
		], a = Math.floor(Math.log(e) / Math.log(n));
		return parseFloat((e / n ** a).toFixed(r)) + " " + i[a];
	}
	function yt(e) {
		if (isNaN(e) || !isFinite(e)) return "0:00";
		let t = Math.floor(e / 60), n = Math.floor(e % 60), r = Math.floor(e % 1 * 100);
		return `${t}:${n.toString().padStart(2, "0")}.${r.toString().padStart(2, "0")}`;
	}
	function bt() {
		c.style.display = "block", c.scrollIntoView({ behavior: "smooth" });
	}
	st = Od({
		root: e,
		formatBytes: vt,
		revealLoadedSection: bt
	}), ct = Ad({
		root: e,
		formatBytes: vt,
		revealLoadedSection: bt
	}), lt = Rd({
		root: e,
		formatBytes: vt
	}), o.addEventListener("click", () => s.click()), ["dragenter", "dragover"].forEach((e) => {
		o.addEventListener(e, (e) => {
			e.preventDefault(), o.classList.add("dragging");
		}, !1);
	}), ["dragleave", "drop"].forEach((e) => {
		o.addEventListener(e, (e) => {
			e.preventDefault(), o.classList.remove("dragging");
		}, !1);
	}), o.addEventListener("drop", (e) => {
		let t = e.dataTransfer?.files;
		t && t.length > 0 && xt(Array.from(t));
	}), s.addEventListener("change", () => {
		s.files && s.files.length > 0 && xt(Array.from(s.files));
	});
	function xt(e) {
		if (e.length <= 1) {
			wt(e[0]);
			return;
		}
		let t = e.filter((e) => St(e) === "image");
		t.length >= 2 ? (Ct("batch"), st?.dispose(), ct?.dispose(), nt &&= (nt.dispose(), null), lt?.start(t), bt(), t.length < e.length && console.warn(`Batch mode: ${e.length - t.length} non-image file(s) were ignored.`)) : wt(e[0]);
	}
	function St(e) {
		if (e.type.startsWith("video/")) return "video";
		if (e.type.startsWith("image/")) return "image";
		if (e.type.startsWith("audio/")) return "audio";
		let t = e.name.toLowerCase();
		return [
			".mp4",
			".mov",
			".webm",
			".mkv",
			".avi"
		].some((e) => t.endsWith(e)) ? "video" : [
			".jpg",
			".jpeg",
			".png",
			".webp",
			".avif",
			".bmp",
			".gif"
		].some((e) => t.endsWith(e)) ? "image" : [
			".mp3",
			".wav",
			".m4a",
			".flac",
			".ogg",
			".opus",
			".aac",
			".weba"
		].some((e) => t.endsWith(e)) ? "audio" : null;
	}
	function Ct(e) {
		l.style.display = e === "video" ? "grid" : "none", u.style.display = e === "image" ? "grid" : "none", d.style.display = e === "audio" ? "grid" : "none", f.style.display = e === "batch" ? "block" : "none", Ue.style.display = "none", Ye.style.display = "none", $e.style.display = "", et.style.display = "none", st?.setActive(e === "image"), ct?.setActive(e === "audio"), e !== "batch" && lt?.dispose();
	}
	async function wt(e) {
		let t = St(e);
		if (!t) {
			alert("Unsupported file type. Please load a video, image, or audio file.");
			return;
		}
		nt && t !== "video" && (nt.dispose(), nt = null), t === "video" ? await Tt(e) : t === "image" ? (Ct("image"), ct?.dispose(), await st?.load(e)) : (Ct("audio"), st?.dispose(), await ct?.load(e));
	}
	async function Tt(e) {
		tt = e, Ct("video"), console.log(`Loading video file: "${e.name}" (${vt(e.size)})`), st?.dispose(), ct?.dispose(), Ye.style.display = "none", Qe.src && URL.revokeObjectURL(Qe.src), Qe.src = "", p.src = URL.createObjectURL(e), m.textContent = e.name, h.textContent = vt(e.size);
		try {
			nt && nt.dispose(), nt = new zs({
				formats: io,
				source: new Da(e)
			}), await nt.canRead() || console.warn("Input format is unrecognized by MediaBunny. Transcoding might fail depending on engine codecs.");
			let t = await nt.getFormat();
			console.log(`Detected Container Format: ${t.name} (MimeType: ${t.mimeType})`);
			let n = await nt.getVideoTracks(), r = await nt.getAudioTracks();
			console.log(`Detected: ${n.length} video track(s) and ${r.length} audio track(s).`);
			let i = await nt.getPrimaryVideoTrack();
			if (i) {
				P = await i.getDisplayWidth(), F = await i.getDisplayHeight();
				let e = await i.getCodec(), t = await i.getCodedWidth(), n = await i.getCodedHeight(), a = await i.getRotation();
				rt = await nt.computeDuration(), g.textContent = yt(rt), _.textContent = `${P}x${F}`, v.textContent = `${(P / F).toFixed(2)}:1`, y.textContent = String(e).toUpperCase();
				try {
					let e = await i.computePacketStats(300);
					e && e.averagePacketRate ? (it = e.averagePacketRate, b.textContent = `${e.averagePacketRate.toFixed(2)} fps`, console.log(`Computed original FPS estimate: ${e.averagePacketRate} fps from prefix stats.`)) : b.textContent = "Unknown";
				} catch (e) {
					console.warn("Could not compute primary video packet stats for FPS metadata:", e), b.textContent = "Unknown";
				}
				at = r.length > 0, x.textContent = r.length > 0 ? `${r.length} track(s)` : "Muted / None", console.log(`Video details: ${t}x${n} coded dimensions, display size ${P}x${F}, natural rotation: ${a}°`), O.value = String(P), oe.value = String(F), O.max = String(P * 2), oe.max = String(F * 2), T.max = String(rt), E.max = String(rt), T.value = "0", E.value = String(rt), Et(0, rt), Pt();
			} else console.warn("No video track detected inside this clip! Options might behave differently."), _.textContent = "Audio Only", v.textContent = "-", y.textContent = "-";
			try {
				let e = await nt.getMetadataTags(), t = {};
				for (let [n, r] of Object.entries(e)) r instanceof Uint8Array ? t[n] = `[Binary Array: ${vt(r.length)}]` : Array.isArray(r) ? t[n] = `[Array of ${r.length} entries]` : t[n] = r;
				S.textContent = Object.keys(t).length > 0 ? JSON.stringify(t, null, 2) : "No tags parsed from metadata container.";
			} catch {
				S.textContent = "Unabled to parse metadata block tags.";
			}
			bt(), Lt();
		} catch (e) {
			console.error("An error occurred during video analysis profiling: ", e), alert(`Could not process video metadata: ${e.message || e}`);
		}
	}
	function Et(e, t) {
		if (te.textContent = `${e.toFixed(2)}s`, ne.textContent = `${t.toFixed(2)}s`, !rt) return;
		let n = e / rt * 100, r = (t - e) / rt * 100;
		re.style.left = `${n}%`, re.style.width = `${r}%`;
	}
	w.addEventListener("change", () => {
		if (w.checked) {
			ee.style.display = "block", p.pause();
			let e = parseFloat(T.value);
			Et(e, parseFloat(E.value)), p.currentTime = e;
		} else ee.style.display = "none";
	}), T.addEventListener("input", () => {
		I = !0, p.pause();
		let e = parseFloat(T.value), t = parseFloat(E.value);
		e >= t && (e = Math.max(0, t - .05), T.value = String(e)), T.style.zIndex = "3", E.style.zIndex = "2", Et(e, t), p.currentTime = e;
	}), E.addEventListener("input", () => {
		I = !0, p.pause();
		let e = parseFloat(T.value), t = parseFloat(E.value);
		t <= e && (t = Math.min(rt, e + .05), E.value = String(t)), T.style.zIndex = "2", E.style.zIndex = "3", Et(e, t), p.currentTime = t;
	}), T.addEventListener("change", () => {
		I = !1;
	}), E.addEventListener("change", () => {
		I = !1, p.currentTime = parseFloat(T.value);
	}), ["mouseup", "touchend"].forEach((e) => {
		T.addEventListener(e, () => {
			I = !1;
		}), E.addEventListener(e, () => {
			I = !1, p.currentTime = parseFloat(T.value);
		});
	}), p.addEventListener("timeupdate", () => {
		if (w.checked && !I) {
			let e = parseFloat(T.value), t = parseFloat(E.value);
			p.currentTime >= t && (p.pause(), p.currentTime = e, console.log(`Playback crossed your selected clipping window end (${t.toFixed(2)}s). Paused & reset back to start boundary.`));
		}
	}), p.addEventListener("play", () => {
		if (w.checked) {
			let e = parseFloat(T.value), t = parseFloat(E.value);
			(p.currentTime < e || p.currentTime >= t) && (p.currentTime = e);
		}
	});
	function Dt() {
		let e = ke.checked;
		Ae.style.display = e ? "block" : "none", A.disabled = e, ue.style.opacity = e ? "0.4" : "", de.style.opacity = e ? "0.4" : "";
	}
	ke.addEventListener("change", () => {
		Dt(), Lt();
	}), Dt(), je.addEventListener("input", () => {
		let e = parseInt(je.value);
		!isNaN(e) && e > 0 ? Me.textContent = `${(e / 1e6).toFixed(2)} Mbps` : Me.textContent = "- Mbps";
	}), Te.addEventListener("change", () => {
		Ee.style.display = Te.checked ? "block" : "none";
	}), ie.addEventListener("change", () => {
		D.style.display = ie.checked ? "block" : "none";
	});
	function Ot(e) {
		if (!P || !F) return e;
		let t = P / F;
		return Math.round(e / t);
	}
	function kt(e) {
		if (!P || !F) return e;
		let t = P / F;
		return Math.round(e * t);
	}
	O.addEventListener("input", () => {
		if (se.checked && O.value) {
			let e = parseInt(O.value);
			e > 0 && (oe.value = String(Ot(e)));
		}
	}), oe.addEventListener("input", () => {
		if (se.checked && oe.value) {
			let e = parseInt(oe.value);
			e > 0 && (O.value = String(kt(e)));
		}
	}), ae.addEventListener("change", () => {
		let e = ae.value;
		if (e === "custom") {
			O.disabled = !1, oe.disabled = !1;
			return;
		}
		if (e.startsWith("square")) {
			let t = e === "square-1080" ? 1080 : 720;
			O.value = String(t), oe.value = String(t), se.checked = !1;
		} else {
			let t = parseInt(e);
			O.value = String(t), oe.value = String(Ot(t)), se.checked = !0;
		}
	}), se.addEventListener("change", () => {
		if (se.checked && O.value) {
			let e = parseInt(O.value);
			e > 0 && (oe.value = String(Ot(e)));
		}
	});
	let R = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}, At = null;
	function jt(e) {
		let t = P, n = F, r = Math.max(0, Math.min(Math.round(e.x), Math.max(0, t - 8))), i = Math.max(0, Math.min(Math.round(e.y), Math.max(0, n - 8)));
		return {
			x: r,
			y: i,
			width: Math.max(8, Math.min(Math.round(e.width), t - r)),
			height: Math.max(8, Math.min(Math.round(e.height), n - i))
		};
	}
	function Mt() {
		!P || !F || (xe.style.left = `${R.x / P * 100}%`, xe.style.top = `${R.y / F * 100}%`, xe.style.width = `${R.width / P * 100}%`, xe.style.height = `${R.height / F * 100}%`);
	}
	function Nt(e) {
		R = jt(e), me.value = String(R.x), he.value = String(R.y), ge.value = String(R.width), _e.value = String(R.height), Mt(), Lt();
	}
	function Pt() {
		Nt({
			x: 0,
			y: 0,
			width: P,
			height: F
		});
	}
	M.addEventListener("change", () => {
		let e = M.checked;
		N.style.display = e ? "block" : "none", be.style.display = e ? "block" : "none", e && (!R.width || !R.height) && Pt(), Mt(), Lt();
	}), [
		me,
		he,
		ge,
		_e
	].forEach((e) => {
		e.addEventListener("input", () => {
			Nt({
				x: parseInt(me.value) || 0,
				y: parseInt(he.value) || 0,
				width: parseInt(ge.value) || 8,
				height: parseInt(_e.value) || 8
			});
		});
	}), ve.addEventListener("click", () => Pt()), ye.addEventListener("click", () => {
		let e = Math.min(P, F);
		Nt({
			x: Math.floor((P - e) / 2),
			y: Math.floor((F - e) / 2),
			width: e,
			height: e
		});
	}), xe.addEventListener("pointerdown", (e) => {
		P && (At = {
			handle: e.target.dataset?.handle || "move",
			startX: e.clientX,
			startY: e.clientY,
			start: { ...R }
		}, e.preventDefault(), e.stopPropagation());
	}), window.addEventListener("pointermove", (e) => {
		if (!At) return;
		let t = p.getBoundingClientRect();
		if (!t.width || !t.height) return;
		let n = (e.clientX - At.startX) / t.width * P, r = (e.clientY - At.startY) / t.height * F, i = At.start;
		if (At.handle === "move") {
			Nt({
				x: Math.max(0, Math.min(i.x + n, P - i.width)),
				y: Math.max(0, Math.min(i.y + r, F - i.height)),
				width: i.width,
				height: i.height
			});
			return;
		}
		let a = i.x, o = i.y, s = i.width, c = i.height, l = i.x + i.width, u = i.y + i.height, d = At.handle;
		(d === "nw" || d === "sw") && (a = Math.min(i.x + n, l - 8), s = l - a), (d === "ne" || d === "se") && (s = Math.max(8, i.width + n)), (d === "nw" || d === "ne") && (o = Math.min(i.y + r, u - 8), c = u - o), (d === "sw" || d === "se") && (c = Math.max(8, i.height + r)), Nt({
			x: a,
			y: o,
			width: s,
			height: c
		});
	}), window.addEventListener("pointerup", () => {
		At = null;
	}), le.addEventListener("change", () => {
		let e = le.value;
		if (k.innerHTML = "", e === "mp4") {
			let e = document.createElement("option");
			e.value = "avc", e.textContent = "H.264 / AVC (High compatibility)", e.selected = !0;
			let t = document.createElement("option");
			t.value = "hevc", t.textContent = "H.265 / HEVC (High compression)", k.appendChild(e), k.appendChild(t);
		} else if (e === "webm") {
			let e = document.createElement("option");
			e.value = "vp9", e.textContent = "VP9 (Modern WebM Open-source)", e.selected = !0;
			let t = document.createElement("option");
			t.value = "vp8", t.textContent = "VP8 (Legacy compatibility)";
			let n = document.createElement("option");
			n.value = "av1", n.textContent = "AV1 (Ultra Next-Gen Format)", k.appendChild(e), k.appendChild(t), k.appendChild(n);
		}
	});
	function Ft() {
		let e = parseInt(A.value);
		ue.textContent = ft[e] || "Medium", de && (de.textContent = mt[e] || ""), fe.textContent = pt[e] || "";
	}
	A.addEventListener("input", Ft), Ft();
	let It = e.getElementById("size-estimate");
	function Lt() {
		if (!It) return;
		if (j.checked) {
			It.textContent = "≈ source size (stream copy, no re-encode)";
			return;
		}
		if (!rt) {
			It.textContent = "—";
			return;
		}
		let e = rt;
		if (w.checked) {
			let t = parseFloat(T.value), n = parseFloat(E.value);
			!isNaN(t) && !isNaN(n) && n > t && (e = n - t);
		}
		let t = P, n = F;
		if (M.checked && R.width && R.height && (t = R.width, n = R.height), ie.checked) {
			let e = parseInt(O.value), r = parseInt(oe.value);
			e > 0 && (t = e), r > 0 && (n = r);
		}
		let r = it || 30;
		if (Te.checked) {
			let e = parseInt(De.value);
			e > 0 && (r = e);
		}
		let i;
		if (ke.checked) i = parseInt(je.value) || 0;
		else {
			let e = ht[parseInt(A.value)] ?? 3.5, a = t && n ? t * n / (1920 * 1080) : 1, o = r / 30;
			i = e * 1e6 * a * o;
		}
		let a = 0;
		Pe.checked ? a = parseInt(Re.value) || 0 : Ne.checked && at && (a = 128e3), It.textContent = "≈ " + vt((i + a) * e / 8);
	}
	C.addEventListener("input", Lt), C.addEventListener("change", Lt);
	function Rt() {
		let e = j.checked;
		pe.forEach((t) => {
			t && (t.style.display = e ? "none" : "");
		}), Se && (Se.style.display = e ? "none" : ""), e && Pe.checked && (Ne.checked = !0, Ie.style.display = "none");
	}
	j.addEventListener("change", Rt), Rt(), Ne.addEventListener("change", () => Ie.style.display = "none"), Fe.addEventListener("change", () => Ie.style.display = "none"), Pe.addEventListener("change", () => Ie.style.display = "block"), C.addEventListener("submit", async (e) => {
		if (e.preventDefault(), !tt || !nt) {
			alert("Please load a source media file before executing transcription.");
			return;
		}
		ut(), Ve.style.display = "none", He.style.display = "inline-block", Ue.style.display = "block", Ye.style.display = "none", $e.style.display = "none", We.textContent = "🐰 Initializing conversion pipeline...", Ge.textContent = "0%", Ke.value = 0, qe.textContent = "Processed Time: 0s / 0s";
		let t = performance.now();
		try {
			let e = le.value === "mp4", n = e ? new Qu() : new nd(), r = new mu(), i = new md({
				format: n,
				target: r
			}), a = {};
			if (j.checked) console.log("⚡ Fast Copy trim mode enabled. Omitting size / quality alterations."), a.forceTranscode = !1;
			else {
				if (a.forceTranscode = !0, a.codec = k.value, ke.checked) {
					let e = parseInt(je.value);
					!isNaN(e) && e > 1e3 ? (a.bitrate = e, console.log(`Using custom target video bitrate: ${(e / 1e6).toFixed(2)} Mbps (${e} bps)`)) : (a.bitrate = $o, console.log("Custom bitrate was invalid. Defaulting to Medium Preset Quality."));
				} else {
					let e = parseInt(A.value);
					a.bitrate = dt[e] || $o, console.log(`Using video quality preset level: ${e} (${ft[e] || "Medium"})`);
				}
				if (M.checked && (a.crop = {
					left: R.x,
					top: R.y,
					width: R.width,
					height: R.height
				}, console.log(`Cropping frame to ${R.width}x${R.height} at (${R.x}, ${R.y}).`)), ie.checked && (O.value && (a.width = parseInt(O.value)), oe.value && (a.height = parseInt(oe.value)), a.fit = ce.value, console.log(`Setting resize dimensions: ${a.width}x${a.height} (${a.fit})`)), Te.checked) {
					let e = parseInt(De.value);
					if (!isNaN(e) && e > 0) if (Oe.value === "blend") {
						let t = 1 / e;
						console.log(`Setting up hardware-accelerated Bidirectional Frame Blending at ${e} FPS.`), a.process = async (e) => {
							let n = e.codedWidth, r = e.codedHeight;
							if (L.isFirstFrame) {
								L.isFirstFrame = !1, L.nextOutputTimestamp = e.timestamp, L.lastSample = e.clone(), L.blendCanvas = document.createElement("canvas"), L.blendCanvas.width = n, L.blendCanvas.height = r, L.blendCtx = L.blendCanvas.getContext("2d");
								let i = e.clone();
								return i.setTimestamp(L.nextOutputTimestamp), i.setDuration(t), L.nextOutputTimestamp += t, [i];
							}
							let i = L.lastSample, a = e, o = i.timestamp, s = a.timestamp, c = s - o, l = [];
							for (; L.nextOutputTimestamp <= s;) {
								let s = L.nextOutputTimestamp, u = 0;
								c > 0 && (u = (s - o) / c), u = Math.max(0, Math.min(1, u));
								let d = u * u * (3 - 2 * u), f = L.blendCanvas, p = L.blendCtx;
								p.clearRect(0, 0, n, r);
								let m = i.toVideoFrame(), h = a.toVideoFrame();
								p.globalAlpha = 1, p.drawImage(m, 0, 0, n, r), p.globalAlpha = d, p.drawImage(h, 0, 0, n, r), m.close(), h.close();
								let g = new e.constructor(f, {
									timestamp: s,
									duration: t
								});
								l.push(g), L.nextOutputTimestamp += t;
							}
							return i.close(), L.lastSample = a.clone(), l;
						};
					} else a.frameRate = e, console.log(`Setting output target frame rate: ${e} FPS (continuous repeating mode).`);
				}
			}
			let o = parseInt(Ce.value);
			o !== 0 && (a.rotate = o, a.forceTranscode = !0, console.log(`Applying manual rotation adjustment: ${o}° CW.`)), a.allowRotationMetadata = we.checked;
			let s = {};
			if (Fe.checked) console.log("🔇 Mutex setting: Stripping entire audio stream from output."), s.discard = !0;
			else if (Ne.checked) console.log("⚡ Audio block: Direct pass-through copy selected."), s.forceTranscode = !1;
			else if (Pe.checked) {
				s.forceTranscode = !0, s.codec = Le.value, s.bitrate = parseInt(Re.value);
				let e = parseInt(ze.value);
				e > 0 && (s.numberOfChannels = e);
				let t = parseInt(Be.value);
				t > 0 && (s.sampleRate = t), console.log(`Transcoding Audio Stream: ${s.codec} at ${parseInt(Re.value) / 1e3}kbps, SampleRate: ${t || "Original"}, Channels: ${e || "Original"}`);
			}
			let c = {};
			if (w.checked && (c.start = parseFloat(T.value), c.end = parseFloat(E.value), console.log(`Clip window enabled: ${c.start}s to ${c.end}s (Trim duration: ${(c.end - c.start).toFixed(2)}s)`)), ot = await yd.init({
				input: nt,
				output: i,
				video: a,
				audio: s,
				trim: w.checked ? c : void 0
			}), !ot.isValid) throw console.error("Transcode pipeline validation failed!"), ot.discardedTracks.forEach((e) => {
				console.warn(`Track ${e.track.id} discarded. Reason: ${e.reason}`);
			}), Error("Chosen tracks make for an invalid or unsupported file conversion combination.");
			let l = w.checked ? c.end - c.start : rt;
			ot.onProgress = (e, n) => {
				let r = Math.min(100, Math.round(e * 100));
				Ge.textContent = `${r}%`, Ke.value = r, We.textContent = `🐰 Transcoding active clip frames (${r}%)`, qe.textContent = `Processed Time: ${n.toFixed(1)}s / ${l.toFixed(1)}s`;
				let i = (performance.now() - t) / 1e3;
				n > 0 && (Je.textContent = `Processing speed: ${(n / i).toFixed(2)}x real-time`);
			}, console.log("🚀 Launching conversion backend. Please wait..."), await ot.execute();
			let u = r.buffer;
			if (!u) throw Error("Conversion processed but target buffer remains empty!");
			let d = e ? "video/mp4" : "video/webm", f = e ? "mp4" : "webm", p = new Blob([u], { type: d }), m = URL.createObjectURL(p);
			Xe.href = m;
			let h = tt.name.lastIndexOf(".");
			Xe.download = `${h > 0 ? tt.name.slice(0, h) : tt.name}_web_export.${f}`, Ze.textContent = `Size: ${vt(p.size)}`, Qe.src = m, console.log(`🎉 Transcoding successfully finished! Outfile Size: ${vt(p.size)}.`), Ye.style.display = "block", Ye.scrollIntoView({ behavior: "smooth" });
		} catch (e) {
			e.name === "ConversionCanceledError" || e.message?.includes("canceled") ? console.warn("Transcoding canceled by the operator.") : (console.error("Transcoder failure: ", e), alert(`Conversion failure: ${e.message || e}`));
		} finally {
			ut(), Ve.style.display = "inline-block", He.style.display = "none", Ue.style.display = "none", Ye.style.display === "none" && ($e.style.display = ""), ot = null;
		}
	}), He.addEventListener("click", async () => {
		ot && (console.log("Requesting cancellation of active codec processors..."), await ot.cancel());
	});
}
//#endregion
//#region src/component.ts
var Wd = t.replace(/:root\b/g, ":host"), Gd = "\n:host { display: block; }\n.mb-app {\n  font-family: var(--pico-font-family, system-ui, sans-serif);\n  font-size: var(--pico-font-size, 100%);\n  line-height: var(--pico-line-height, 1.5);\n  color: var(--pico-color);\n  background-color: var(--pico-background-color);\n  -webkit-font-smoothing: antialiased;\n  padding: 0.5rem 1.5rem 2rem;\n}\n", Kd = class extends HTMLElement {
	connectedCallback() {
		if (this.shadowRoot) return;
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = Wd + Gd, e.appendChild(t);
		let r = document.createElement("div");
		r.className = "mb-app", r.setAttribute("data-theme", this.getAttribute("theme") || "dark"), r.innerHTML = n, e.appendChild(r), Ud(e, { themeElement: r });
	}
};
customElements.get("media-converter") || customElements.define("media-converter", Kd), customElements.get("mediabunny-toolkit") || customElements.define("mediabunny-toolkit", class extends Kd {});
//#endregion
export { Kd as MediaConverter };
