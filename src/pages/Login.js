// import React from 'react';
// import "./Login.css";

// const Login = () => {
//   return (
// <div id="__next">
// <div className="layout-wrapper MuiBox-root css-33gw4">
//     <div className="app-content MuiBox-root css-10qwnza">
//         <div className="content-right MuiBox-root css-1kakr30">
//             <div className="MuiBox-root css-n1vild">
//                 <img alt="login-illustration" src="/images/pages/auth-v2-login-illustration-light.png" className="css-167gitw"/>
//                 <img alt="mask" className="css-qmvkma" src="/images/pages/auth-v2-mask-light.png"/>
//             </div>
//             <div className="MuiBox-root css-11z93p5">
//                 <div className="MuiBox-root css-1a51ivw">
//                     <div className="MuiBox-root css-o8u0d7">
//                         <div className="MuiBox-root css-1164z4f">
//                             <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1fn850a" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
//                                 <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <g clip-path="url(#clip0_1372_26450)">
//                                         <path d="M0 5V19L0.738388 17.5865C0.987284 17.11 1.70816 17.2869 1.70816 17.8245V25.2072C1.70816 25.6763 2.28482 25.9003 2.6015 25.5543L9.61294 17.8933C9.6973 17.8011 9.74409 17.6807 9.74409 17.5557V0.841629C9.74409 0.457107 9.3374 0.208685 8.99529 0.384233L0 5Z" fill="url(#paint0_linear_1372_26450)"></path>
//                                         <path d="M14.7441 12.872V25.3446L19.725 23.0742C20.0654 22.9191 20.4523 23.1679 20.4523 23.542V30.6156C20.4523 31.0194 20.8964 31.2656 21.2388 31.0516L29.2466 26.0474C29.3969 25.9535 29.4882 25.7887 29.4882 25.6115V5.86931C29.4882 5.48126 29.0747 5.2331 28.7323 5.41564L14.7441 12.872Z" fill="url(#paint1_linear_1372_26450)"></path>
//                                         <path d="M14.7441 12.8828V25.3281L9.81823 22.3166C9.47566 22.1072 9.03598 22.3538 9.03598 22.7553V30.7113C9.03598 31.1151 8.59186 31.3613 8.24944 31.1473L0.241703 26.1431C0.0913754 26.0492 4.95911e-05 25.8844 4.95911e-05 25.7072V5.1084L14.7441 12.8828Z" fill="url(#paint2_linear_1372_26450)"></path>
//                                     </g>
//                                     <defs>
//                                         <linearGradient id="paint0_linear_1372_26450" x1="15.7246" y1="-8.3125" x2="10.7441" y2="27.6875" gradientUnits="userSpaceOnUse">
//                                             <stop stop-color="#00D1FF"></stop>
//                                             <stop offset="1" stop-color="#0B14F4"></stop>
//                                         </linearGradient>
//                                         <linearGradient id="paint1_linear_1372_26450" x1="33.8801" y1="1.03549" x2="6.09686" y2="42.1653" gradientUnits="userSpaceOnUse">
//                                             <stop stop-color="#00D1FF"></stop>
//                                             <stop offset="1" stop-color="#0B14F4"></stop>
//                                         </linearGradient>
//                                         <linearGradient id="paint2_linear_1372_26450" x1="4.81162" y1="5.1084" x2="-13.9529" y2="29.0561" gradientUnits="userSpaceOnUse">
//                                             <stop stop-color="#00D1FF"></stop>
//                                             <stop offset="1" stop-color="#0B70F4"></stop>
//                                         </linearGradient>
//                                         <clipPath id="clip0_1372_26450">
//                                             <rect width="29.4882" height="31.6388" fill="white"></rect>
//                                         </clipPath>
//                                     </defs>
//                                 </svg>
//                             </svg>
//                         </div>
//                         <div className="MuiBox-root css-ii41w">
//                             <h3 className="MuiTypography-root MuiTypography-h3 css-npbmm3">Login</h3>
//                         </div>
//                         <div className="MuiBox-root css-gmuwbf">
//                             <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1hw4ewc" tabindex="0" type="button">
//                                 <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-ptkt72">
//                                     <span></span>
//                                 </span>
//                                 Outlook
//                             </button>
//                             <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-3dt1kj" tabindex="0" type="button">
//                                 <span className="MuiButton-startIcon MuiButton-iconSizeMedium css-ptkt72">
//                                     <span></span>
//                                 </span>
//                                 Google
//                             </button>
//                         </div>
//                         <div className="MuiDivider-root MuiDivider-fullWidth MuiDivider-withChildren css-1rcxypd" role="separator">
//                             <span className="MuiDivider-wrapper css-1mjhz9d">or</span>
//                         </div>
//                         <form novalidate="" autoComplete="off">
//                             <div className="MuiBox-root css-acwcvw">
//                                 <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-s3ijei">
//                                     <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeSmall MuiInputLabel-filled MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeSmall MuiInputLabel-filled css-1acxl7g" data-shrink="true" for=":Ra5dalaf6:" id=":Ra5dalaf6:-label">Email</label>
//                                     <div className="MuiInputBase-root MuiFilledInput-root MuiFilledInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall css-1of7t8s">
//                                         <input aria-invalid="false" autofocus="" id=":Ra5dalaf6:" type="text" className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputSizeSmall css-1no3sf"/>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="MuiBox-root css-acwcvw">
//                                 <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-s3ijei">
//                                     <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeSmall MuiInputLabel-filled MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeSmall MuiInputLabel-filled css-1acxl7g" data-shrink="true" for="auth-login-v2-password" id="auth-login-v2-password-label">Password</label>
//                                     <div className="MuiInputBase-root MuiFilledInput-root MuiFilledInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd css-1vyd1hb">
//                                         <input aria-invalid="false" id="auth-login-v2-password" type="password" className="MuiInputBase-input MuiFilledInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd css-1qd5mws"/>
//                                         <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-filled MuiInputAdornment-sizeSmall css-iax9b1">
//                                             <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-wf9q8e" tabindex="0" type="button">
//                                                 <span></span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth css-1ozynhw" tabindex="0" type="submit">Join</button>
//                         </form>
//                         <div className="MuiBox-root css-1osnca4">
//                             <a className="MuiTypography-root MuiTypography-body1 css-1hgj724" href="/forgot-password/">Forgot Password? Click here!</a>
//                         </div>
//                         <div className="MuiBox-root css-1osnca4">
//                             <a className="MuiTypography-root MuiTypography-body1 css-1hgj724" href="/register/">Don &#x27;t have an account yet? Click here!</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// <div className="MuiBox-root css-1j1tari">
//     <div style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none"></div>
// </div>
// </div>


//     <div>
// <script id="__NEXT_DATA__" type="application/json" crossorigin="">

//     "props": {
//       "pageProps": {}
//     },
//     "page": "/login",
//     "query": {},
//     "buildId": "C7AJlnALFx5IyYKJRfoq9",
//     "nextExport": true,
//     "autoExport": true,
//     "isFallback": false,
//     "scriptLoader": []
 

// </script>


// <script>
//    self.__BUILD_MANIFEST = function(s, a, c, e, t, i, n, o, d, b, g, f, u, h, r) {
// return {
// __rewrites: {
// afterFiles: [],
// beforeFiles: [],
// fallback: []
// },
// "/": ["95b64a6e-070d95cb89b9dab8.js", "static/chunks/c31f1870-8a77cce2b8259f70.js", a, b, "index-c55111c570aef9e6.js"],
// "/401": ["401-9ac2694a8cc45cae.js"],
// "/404": ["404-e8377e8d30b417dc.js"],
// "/500": ["500-10ba0def6e200a9d.js"],
// "/_error": ["_error-2b35abdd95bbce4e.js"],
// "/acl": ["acl-8e07a30374fac179.js"],
// "/authenticate-with-google": ["authenticate-with-google-e5e8373640fe73d8.js"],
// "/authenticate-with-outlook": ["authenticate-with-outlook-1372f2e5d8597e1c.js"],
// "/blog": [c, i, g, "blog-30984a822181be8c.js"],
// "/blog/api/createComment": [c, "createComment-31cfdfbe310a6eb9.js"],
// "/blog/api/dist/createComment": ["5321-682a2589b09ed84c.js", "createComment-91715f288a77b00f.js"],
// "/blog/api/hello": ["hello-c5bbf82789fb9919.js"],
// "/blog/[slug]": [a, c, i, g, "[slug]-6ec7b294a4b8bce1.js"],
// "/blog-helper": ["blog-helper-7293ca8c3aff135c.js"],
// "/contacts": [n, f, "contacts-792095f40269a51a.js"],
// "/contacts/[contactId]": [e, n, o, u, f, "static/chunks/3029-2ce620406abe7cee.js", d, "static/chunks/pages/contacts/[contactId]-8dd0a38ddf297492.js"],
// "/deals": ["deals-1756f5d781fa5e2a.js"],
// "/deals/create": [a, h, r, "create-825dfd1a747baaa0.js"],
// "/deals/edit/[id]": [a, h, r, "[id]-b4e280cf19b950a8.js"],
// "/deals/[id]": ["8132-bd2fa29daf24695f.js", "static/chunks/pages/deals/[id]-87431875bdd41891.js"],
// "/forgot-password": ["forgot-password-258cd76546435364.js"],
// "/home": [e, n, o, d, "home-f0525f589761aa23.js"],
// "/login": [s, "login-8547a144912bbc83.js"],
// "/notes": [e, o, d, "notes-1de08439f0704fe4.js"],
// "/onboarding/business-info": [s, t, "business-info-4bfdcd122b08ea0d.js"],
// "/onboarding/describe-business": [s, a, t, "describe-business-7bc8d5c1d561694f.js"],
// "/onboarding/integrate-contact-email": ["integrate-contact-email-4d1ba1b8c386caf3.js"],
// "/onboarding/integrate-contact-email-old": [s, t, "integrate-contact-email-old-f01600c64e06a1a3.js"],
// "/onboarding/save-address": [s, t, "save-address-548a5d455b79898b.js"],
// "/onboarding/save-services": ["save-services-afeddb0e40311ee4.js"],
// "/register": [s, "register-a644288408f65f49.js"],
// "/settings/business-profile": ["5386-3e352bd694d9250f.js", "static/chunks/pages/settings/business-profile-a73190625397447a.js"],
// "/settings/members": [s, e, u, "6763-88be8a954bc8e503.js", "static/chunks/pages/settings/members-e43eb827f6953b23.js"],
// "/settings/my-profile": ["my-profile-61a5aced9eb169c9.js"],
// "/sitemap.xml": ["sitemap.xml-825b2f3342f5e335.js"],
// "/studio/[[...index]]": ["d3048c20-386ac2672800f995.js", "d2094a0f-afda8d9f4d683851.js", "static/chunks/ffa32686-af3def7fae5e5d18.js", "static/chunks/4201a8df-a7bf8b347e05f0d9.js", "static/chunks/34ad4f53-5f6e9fc9c7f21942.js", "static/chunks/75fc9c18-4321f959804bd28d.js", "static/chunks/ed9a0b66-8f30bb64c87f5af3.js", "static/chunks/53adca4f-1ee1a24a4fd7e624.js", c, i, b, "static/chunks/2585-bbd27f71d9bc048a.js", "static/chunks/pages/studio/[[...index]]-e673e33d2eaa6235.js"],
// sortedPages: ["/", "/401", "/404", "/500", "/_app", "/_error", "/acl", "/authenticate-with-google", "/authenticate-with-outlook", "/blog", "/blog/api/createComment", "/blog/api/dist/createComment", "/blog/api/hello", "/blog/[slug]", "/blog-helper", "/contacts", "/contacts/[contactId]", "/deals", "/deals/create", "/deals/edit/[id]", "/deals/[id]", "/forgot-password", "/home", "/login", "/notes", "/onboarding/business-info", "/onboarding/describe-business", "/onboarding/integrate-contact-email", "/onboarding/integrate-contact-email-old", "/onboarding/save-address", "/onboarding/save-services", "/register", "/settings/business-profile", "/settings/members", "/settings/my-profile", "/sitemap.xml", "/studio/[[...index]]"]
// }
// }("6310-4f0f8522cf68c4b8.js", "5675-8744c25a1fbeaf50.js", "9668-6dc9056ea657d7a3.js", "8192-b65fe3e93bb49e56.js", "2175-2e41d7821b412053.js", "6803-9cc5d26f086e3606.js", "1443-9c5fe64d6dba9be6.js", "8036-ada0e8c2cb979c74.js", "3934-8115ef290cf67162.js", "9773-3a80aa38c2aad583.js", "4216-8d88da756d637f56.js", "5851-e30cb07a1ecc39c1.js", "4386-517cd4f9f84c398d.js", "2744-0c16e3189331e222.js", "8685-432bce3f6e0a1a01.js"),
// self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();

// </script>





// </div>
// );
// };
// export default Login;