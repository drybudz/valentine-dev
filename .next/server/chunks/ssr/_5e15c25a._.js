module.exports = {

"[project]/sanity/config/client-config.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const config = {
    // projectId: "2j7eol5d",
    projectId: "m2vd2mbt",
    dataset: "production",
    apiVersion: "2025-05-10",
    useCdn: true
};
const __TURBOPACK__default__export__ = config;
}}),
"[project]/sanity/schemas/sanity-utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAboutPage": (()=>getAboutPage),
    "getHomePage": (()=>getHomePage),
    "getPage": (()=>getPage),
    "getPageData": (()=>getPageData),
    "getPages": (()=>getPages),
    "getProject": (()=>getProject),
    "getProjects": (()=>getProjects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__ = __turbopack_context__.i("[project]/node_modules/groq/lib/groq.js [app-rsc] (ecmascript) <export default as groq>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$config$2f$client$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/config/client-config.js [app-rsc] (ecmascript)");
;
;
async function getHomePage() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$config$2f$client$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).fetch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__["groq"]`*[_type == "homepage" && status == true][0]{
      companyLogo{
        asset->{
          _id,
          url
        },
        alt
      },
      companyName,
      companyIcon{
        asset->{
          _id,
          url
        }
      },
      locations,
      email,
      pageNote->{
        ...
      },
      orlaLeft{
        asset->{
          _id,
          url
        },
        alt
      },
      orlaRight{
        asset->{
          _id,
          url
        },
        alt
      },
      slogan,
      backgroundColor,
      homeVideo1{
        asset->{
          _id,
          url
        }
      },
      videoAlt1,
      videoDescription1,
      servicesTitle,
      osDescription,
      servicesList[]{
        osTitle,
        osItems
      },
      processTitle,
      opTitle1,
      opText1,
      opTitle2,
      opText2,
      opTitle3,
      opText3,
      opTitle4,
      opText4,
      approachTitle,
      aDescription,
      seoTitle,
      seoDescription,
      keywords
    }`);
}
async function getProjects() {
    //we need this client to grab the data from the studio using GROQ, and I have moved it to config to avoid repeating code
    // const client = createClient({
    //     projectId: '2j7eol5d',
    //     dataset: 'production',
    //     apiVersion: "2025-04-23",
    // })
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$config$2f$client$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).fetch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__["groq"]`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            projectDescription,
          }`);
}
async function getProject(slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$config$2f$client$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).fetch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__["groq"]`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        projectDescription,
      }`, {
        slug
    });
}
async function getPages() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$config$2f$client$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).fetch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__["groq"]`{
        "pages": *[_type == "page"]{
          _id,
          _createdAt,
          navTitle,
          "slug": slug.current,
          pageCompanyLogo{
            alt,
            "url": asset->url
          },
          pageCompanyLogoWhite{
            alt,
            "url": asset->url
          },
          pageNote->{...}
        },
        "pageNote": *[_type == "pageNote"][0] { // Fetch the first pageNote, only 1
          ...
        }
      }`);
}
async function getPage(slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$config$2f$client$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).fetch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__["groq"]`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            pageTitle,
            "slug": slug.current,
            pageDescription
          }`, {
        slug
    });
}
async function getAboutPage() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$config$2f$client$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).fetch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__["groq"]`*[_type == "aboutPage" && status == true][0]{
        title,
        pageNote->{...},
        philosophyTitle,
        philosophyDescription1,
        philosophyImageCount,
        "philosophyProjectData": philosophyProject->{
          name,
          clientName,
          projectYear,
          projectImages[]{ // Fetch all images
            asset->{
              _id,
              url
            },
            alt
          },
          _id
        },
        philosophyDescription2,
        philosophyFeaturedImage{
          asset->{
            _id,
            url
          },
          alt
        },
        philosophyFeaturedImageSize,
        storyTitle,
        storyDescription1,
        storyImageCount,
        "storyProjectData": storyProject->{
          name,
          clientName,
          projectYear,
          projectImages[]{ // Fetch all images
            asset->{
              _id,
              url
            },
            alt
          },
          _id
        },
        storyDescription2,
        storyFeaturedImage{
          asset->{
            _id,
            url
          },
          alt
        },
        storyFeaturedImageSize,
        whoTitle,
        whoDescription1,
        whoImageCount,
        "whoProjectData": whoProject->{
          name,
          clientName,
          projectYear,
          projectImages[]{ // Fetch all images
            asset->{
              _id,
              url
            },
            alt
          },
          _id
        },
        whoDescription2,
        whoFeaturedImage{
          asset->{
            _id,
            url
          },
          alt
        },
        whoFeaturedImageSize
      }`);
}
async function getPageData(slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$config$2f$client$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).fetch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__["groq"]`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        pageTitle,
        "slug": slug.current,
        pageDescription,
        contactInfo,
        teamMembers[]->{
          _id,
          fullName,
          slug,
          talentPosition,
          city,
          image{
            asset->{ _id, url },
            alt
          },
          description,
          status
        },
        projects[]->{
          _id,
          name,
          slug,
          mainImage{
            asset->{ _id, url },
            alt
          },
          projectImages[]{ // Fetch the array of project images
            asset->{ _id, url },
            alt
          }
          // Add other project fields you need
        },
        pageNote->{ // Fetch the linked pageNote
          _id,
          _createdAt,
          workTitle,
          workDescription,
          connectTitle,
          connectLinks[]{
            _key,
            linkTitle,
            linkUrl,
            openNewTab
          },
          copyrightText,
          copyrightBrandName,
          copyrightYear
        }
      }`, {
        slug
    });
}
}}),
"[project]/src/app/components/HeaderNavigation.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/HeaderNavigation.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/HeaderNavigation.jsx <module evaluation>", "default");
}}),
"[project]/src/app/components/HeaderNavigation.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/HeaderNavigation.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/HeaderNavigation.jsx", "default");
}}),
"[project]/src/app/components/HeaderNavigation.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HeaderNavigation$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/components/HeaderNavigation.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HeaderNavigation$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/components/HeaderNavigation.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HeaderNavigation$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/components/HomeChecker.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/HomeChecker.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/HomeChecker.jsx <module evaluation>", "default");
}}),
"[project]/src/app/components/HomeChecker.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/HomeChecker.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/HomeChecker.jsx", "default");
}}),
"[project]/src/app/components/HomeChecker.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HomeChecker$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/components/HomeChecker.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HomeChecker$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/components/HomeChecker.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HomeChecker$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(site)/layout.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$sanity$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/sanity-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HeaderNavigation$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/HeaderNavigation.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HomeChecker$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/HomeChecker.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "Valentine Website 2025",
    description: "Generated with Next + Sanity"
};
async function RootLayout({ children }) {
    //get all Pages Changes except About
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$sanity$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPages"])(); // The getPages function now returns an object
    const pages = data?.pages || []; // Access the 'pages' array
    // Layout of the Pages //Except Studio & About - - - - - PAGES
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/layout.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/layout.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Silkscreen:wght@400;700&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/layout.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/layout.js",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HomeChecker$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/(site)/layout.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$HeaderNavigation$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        pages: pages
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/layout.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/layout.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/layout.js",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(site)/layout.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_5e15c25a._.js.map