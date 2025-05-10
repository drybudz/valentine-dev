(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/sanity/schemas/project-schema.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The name of the project.'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            },
            description: 'A unique identifier for the project, created from the title.'
        },
        {
            name: 'clientName',
            title: 'Client Name',
            type: 'string',
            description: 'The name of the client for this project.'
        },
        {
            name: 'projectYear',
            title: 'Project Year',
            type: 'string',
            description: 'The year the project was completed or launched.'
        },
        {
            name: 'projectDescription',
            title: 'Project Description',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ],
            description: 'A brief description of the project.'
        },
        {
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Main Image Alt',
                    type: 'string'
                }
            ],
            description: 'The main image for the project.'
        },
        {
            name: 'projectImages',
            title: 'Project Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string'
                        }
                    ]
                }
            ],
            description: 'Additional images for the project.'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'slug.current',
            media: 'image'
        }
    }
};
const __TURBOPACK__default__export__ = project;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemas/page-schema.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const page = {
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'pageCompanyLogo',
            title: 'Pages Company Logo',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Company Logo Alt Text',
                    type: 'string',
                    description: 'Alternative text for the company logo of the pages.'
                }
            ],
            description: 'The logo of the company for the pages.',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'pageCompanyLogoWhite',
            title: 'Pages Company Logo White',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Company Logo Alt Text',
                    type: 'string',
                    description: 'Alternative text for the company logo of the pages.'
                }
            ],
            description: 'The logo of the company for the pages.',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'navTitle',
            title: 'Navigation Title',
            type: 'string',
            description: 'This is the title of the navigation.'
        },
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string',
            description: 'This is the title of the page.'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'navTitle',
                maxLength: 96
            },
            description: 'A unique identifier for this page (auto-generated from Navigation Title).'
        },
        {
            name: 'pageDescription',
            title: 'Page Description',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ],
            description: 'Page Description.'
        },
        {
            name: 'contactInfo',
            title: 'Contact Info',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ],
            description: 'Optional contact information for this page (supports rich text).'
        },
        {
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'teamMember'
                        }
                    ]
                }
            ],
            description: 'Optional team members to showcase on this page.'
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'project'
                        }
                    ]
                }
            ],
            description: 'Optional projects to showcase on this page.'
        },
        {
            name: 'pageNote',
            title: 'Page Note',
            type: 'reference',
            to: {
                type: 'pageNote'
            },
            description: 'Optional page note to associate with this page to work as a footer.'
        }
    ],
    preview: {
        select: {
            title: 'navTitle',
            slug: 'slug.current'
        },
        prepare (selection) {
            const { title, slug } = selection;
            return {
                title: title,
                subtitle: slug ? `/${slug}` : 'No Slug'
            };
        }
    }
};
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemas/homepage-schema.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const homepage = {
    name: 'homepage',
    title: 'Home Pages',
    type: 'document',
    groups: [
        {
            name: 'hero',
            title: 'Hero Section'
        },
        {
            name: 'services',
            title: 'Services Section'
        },
        {
            name: 'process',
            title: 'Process Section'
        },
        {
            name: 'approach',
            title: 'Approach Section'
        },
        {
            name: 'general',
            title: 'General Information',
            default: true
        },
        {
            name: 'pageNoteGroup',
            title: 'Page Note & Footer'
        },
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        // General Information Group
        {
            name: 'companyLogo',
            title: 'Company Logo',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Company Logo Alt Text',
                    type: 'string',
                    description: 'Alternative text for the company logo.'
                }
            ],
            description: 'The logo of the company for the Home Navigation.',
            group: 'general'
        },
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            description: 'The name of the company.',
            group: 'general'
        },
        {
            name: 'status',
            title: 'Status',
            type: 'boolean',
            description: 'If on, this home page will be rendered. Useful for switching between available home Pages.',
            group: 'general'
        },
        {
            name: 'companyIcon',
            title: 'Company Icon',
            type: 'image',
            options: {
                hotspot: true
            },
            description: 'A smaller icon for the company, used in previews.',
            group: 'general'
        },
        // Page Note & Footer Group
        {
            name: 'locations',
            title: 'Locations',
            type: 'string',
            description: 'A list of locations to be displayed in the footer of home videos.',
            group: 'pageNoteGroup'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            description: 'Contact email address.',
            group: 'pageNoteGroup'
        },
        {
            name: 'pageNote',
            title: 'Page Note',
            type: 'reference',
            to: {
                type: 'pageNote'
            },
            description: 'Page note to associate with this homepage.',
            validation: (Rule)=>Rule.required(),
            group: 'pageNoteGroup'
        },
        {
            name: 'orlaLeft',
            title: 'Orla Left URL',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Orla Left Alt',
                    type: 'string',
                    description: 'Alternative text for the left ornament image.'
                }
            ],
            description: 'Left ornament image.',
            group: 'pageNoteGroup'
        },
        {
            name: 'orlaRight',
            title: 'Orla Right URL',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Orla Right Alt',
                    type: 'string',
                    description: 'Alternative text for the right ornament image.'
                }
            ],
            description: 'Right ornament image.',
            group: 'pageNoteGroup'
        },
        // Hero Section Group
        {
            name: 'slogan',
            title: 'Slogan',
            type: 'string',
            description: 'The main slogan for the homepage.',
            group: 'hero'
        },
        {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            description: 'Optional background color for the homepage (e.g., #f0f0f0).',
            group: 'hero'
        },
        {
            name: 'homeVideo1',
            title: 'Home Video',
            type: 'file',
            options: {
                accept: 'video/*'
            },
            description: 'The main background video for the homepage.',
            group: 'hero'
        },
        {
            name: 'videoAlt1',
            title: 'Video Alt Text',
            type: 'string',
            description: 'Alternative text for the video.',
            group: 'hero'
        },
        {
            name: 'videoDescription1',
            title: 'Video Description',
            type: 'text',
            description: 'Optional description for the video.',
            group: 'hero'
        },
        // Services Section Group
        {
            name: 'servicesTitle',
            title: 'Services Title',
            type: 'string',
            description: 'Title for the "Services" section.',
            group: 'services'
        },
        {
            name: 'osDescription',
            title: 'Services Description',
            type: 'text',
            description: 'Description for the "Services" section.',
            group: 'services'
        },
        {
            name: 'servicesList',
            title: 'Services List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'osTitle',
                            title: 'Service Title',
                            type: 'string',
                            description: 'Title for a service category.'
                        },
                        {
                            name: 'osItems',
                            title: 'Service Items',
                            type: 'array',
                            of: [
                                {
                                    type: 'string'
                                }
                            ],
                            description: 'List of services under this category.'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'osTitle',
                            subtitle: 'osItems.0'
                        }
                    }
                }
            ],
            description: 'List of service categories with their items.',
            group: 'services'
        },
        // Process Section Group
        {
            name: 'processTitle',
            title: 'Process Title',
            type: 'string',
            description: 'Title for the "Process" section.',
            group: 'process'
        },
        {
            name: 'opTitle1',
            title: 'Process Step 1 Title',
            type: 'string',
            description: 'Title for the first process step.',
            group: 'process'
        },
        {
            name: 'opText1',
            title: 'Process Step 1 Text',
            type: 'text',
            description: 'Description for the first process step.',
            group: 'process'
        },
        {
            name: 'opTitle2',
            title: 'Process Step 2 Title',
            type: 'string',
            description: 'Title for the second process step.',
            group: 'process'
        },
        {
            name: 'opText2',
            title: 'Process Step 2 Text',
            type: 'text',
            description: 'Description for the second process step.',
            group: 'process'
        },
        {
            name: 'opTitle3',
            title: 'Process Step 3 Title',
            type: 'string',
            description: 'Title for the third process step.',
            group: 'process'
        },
        {
            name: 'opText3',
            title: 'Process Step 3 Text',
            type: 'text',
            description: 'Description for the third process step.',
            group: 'process'
        },
        {
            name: 'opTitle4',
            title: 'Process Step 4 Title',
            type: 'string',
            description: 'Title for the fourth process step.',
            group: 'process'
        },
        {
            name: 'opText4',
            title: 'Process Step 4 Text',
            type: 'text',
            description: 'Description for the fourth process step.',
            group: 'process'
        },
        // Approach Section Group
        {
            name: 'approachTitle',
            title: 'Approach Title',
            type: 'string',
            description: 'Title for the "Approach" section.',
            group: 'approach'
        },
        {
            name: 'aDescription',
            title: 'Approach Description',
            type: 'text',
            description: 'Description for the "Approach" section.',
            group: 'approach'
        },
        // SEO Group (Example - Add more SEO fields as needed)
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            group: 'seo',
            description: 'Title for search engine results.'
        },
        {
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            group: 'seo',
            description: 'Description for search engine results.'
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            description: 'Relevant keywords for search engines.',
            group: 'seo'
        }
    ],
    preview: {
        select: {
            title: 'companyName',
            media: 'companyIcon'
        }
    }
};
const __TURBOPACK__default__export__ = homepage;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemas/pagenote-schema.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const pageNote = {
    name: 'pageNote',
    title: 'Page Notes',
    type: 'document',
    fields: [
        {
            name: 'workTitle',
            title: 'Work Title',
            type: 'string',
            description: 'Optional title for the "Work" related content.'
        },
        {
            name: 'workDescription',
            title: 'Work Description',
            type: 'text',
            description: 'Optional description for the "Work" related content.'
        },
        {
            name: 'connectTitle',
            title: 'Connect Title',
            type: 'string',
            description: 'Optional title for the "Connect" section.'
        },
        {
            name: 'connectLinks',
            title: 'Connect Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'linkTitle',
                            title: 'Link Title',
                            type: 'string',
                            description: 'Title of the link (e.g., Instagram, Email).'
                        },
                        {
                            name: 'linkUrl',
                            title: 'Link URL',
                            type: 'url',
                            description: 'The URL for the link.'
                        },
                        {
                            name: 'openNewTab',
                            title: 'Open in New Tab',
                            type: 'boolean',
                            description: 'Check this box to open the link in a new tab.'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'linkTitle',
                            subtitle: 'linkUrl'
                        }
                    }
                }
            ],
            description: 'Optional links for the "Connect" section (e.g., social media, contact).'
        },
        {
            name: 'noteImage',
            title: 'Note Image URL',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Note Image Alt Text',
                    type: 'string',
                    description: 'Alternative text for the note image (should be empty if purely decorative).'
                }
            ],
            description: 'Optional image for the page note (e.g., sidebar image).'
        },
        {
            name: 'companyLogo',
            title: 'Company Logo URL',
            type: 'image',
            options: {
                hotspot: true
            },
            description: 'Optional company logo image.'
        },
        {
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'string',
            description: 'Optional copyright information.'
        },
        {
            name: 'copyrightYear',
            title: 'Copyright Year',
            type: 'string',
            description: 'Optional year for copyright.'
        },
        {
            name: 'copyrightBrandName',
            title: 'Copyright Brand Name',
            type: 'string',
            description: 'Optional brand name for copyright.'
        }
    ],
    preview: {
        select: {
            title: 'copyrightBrandName',
            subtitle: 'copyrightYear'
        }
    }
};
const __TURBOPACK__default__export__ = pageNote;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemas/teammember-schema.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const teamMember = {
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            description: 'The full name of the team member.'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'fullName'
            },
            description: 'A unique identifier for the member (auto-generated from full name).'
        },
        {
            name: 'talentPosition',
            title: 'Talent Position',
            type: 'string',
            description: 'The role or position of the team member (e.g., Director, Photographer).'
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
            description: 'The city where the team member is based.'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for accessibility.'
                }
            ],
            description: 'Image of the team member.'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A brief description or bio of the team member (optional).'
        },
        {
            name: 'status',
            title: 'Status',
            type: 'boolean',
            description: 'Whether the team member is currently active or featured.'
        }
    ],
    preview: {
        select: {
            title: 'fullName',
            subtitle: 'talentPosition',
            media: 'image'
        }
    }
};
const __TURBOPACK__default__export__ = teamMember;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemas/aboutpage-schema.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const aboutPage = {
    name: 'aboutPage',
    title: 'About Pages',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
            description: 'The main title of the About Page (for internal use).'
        },
        {
            name: 'status',
            title: 'Status',
            type: 'boolean',
            description: 'If on, this about page will be rendered. Useful for switching between available about pages.'
        },
        {
            name: 'pageNote',
            title: 'Page Note',
            type: 'reference',
            to: {
                type: 'pageNote'
            },
            description: 'The page note to associate with this about page.',
            validation: (Rule)=>Rule.required()
        },
        // Philosophy Section
        {
            name: 'philosophyTitle',
            title: 'Philosophy Title',
            type: 'string',
            group: 'philosophy'
        },
        {
            name: 'philosophyDescription1',
            title: 'Philosophy Description 1',
            type: 'text',
            group: 'philosophy'
        },
        {
            name: 'philosophyImageCount',
            title: 'Number of Philosophy Project Images',
            type: 'string',
            options: {
                list: [
                    {
                        value: '2',
                        title: '2 Images'
                    },
                    {
                        value: '3',
                        title: '3 Images'
                    }
                ],
                layout: 'radio'
            },
            group: 'philosophy',
            description: 'Select either 2 Images or 3 Images to display from the referenced project.',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'philosophyProject',
            title: 'Philosophy Project Reference',
            type: 'reference',
            to: {
                type: 'project'
            },
            group: 'philosophy',
            description: 'Reference to a project to display images and info from.'
        },
        {
            name: 'philosophyDescription2',
            title: 'Philosophy Description 2',
            type: 'text',
            group: 'philosophy'
        },
        {
            name: 'philosophyFeaturedImage',
            title: 'Philosophy Featured Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for the featured image.'
                }
            ],
            group: 'philosophy'
        },
        {
            name: 'philosophyFeaturedImageSize',
            title: 'Philosophy Featured Image Size',
            type: 'string',
            options: {
                list: [
                    {
                        value: 'short',
                        title: 'Short'
                    },
                    {
                        value: 'tall',
                        title: 'Tall'
                    }
                ],
                layout: 'radio'
            },
            group: 'philosophy',
            description: 'Choose the display size of the featured image.'
        },
        // Story Section
        {
            name: 'storyTitle',
            title: 'Story Title',
            type: 'string',
            group: 'story'
        },
        {
            name: 'storyDescription1',
            title: 'Story Description 1',
            type: 'text',
            group: 'story'
        },
        {
            name: 'storyImageCount',
            title: 'Number of Story Project Images',
            type: 'string',
            options: {
                list: [
                    {
                        value: '2',
                        title: '2 Images'
                    },
                    {
                        value: '3',
                        title: '3 Images'
                    }
                ],
                layout: 'radio'
            },
            group: 'story',
            description: 'Select either 2 Images or 3 Images to display from the referenced project.',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'storyProject',
            title: 'Story Project Reference',
            type: 'reference',
            to: {
                type: 'project'
            },
            group: 'story',
            description: 'Reference to a project to display images and info from.'
        },
        {
            name: 'storyDescription2',
            title: 'Story Description 2',
            type: 'text',
            group: 'story'
        },
        {
            name: 'storyFeaturedImage',
            title: 'Story Featured Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for the featured image.'
                }
            ],
            group: 'story'
        },
        {
            name: 'storyFeaturedImageSize',
            title: 'Story Featured Image Size',
            type: 'string',
            options: {
                list: [
                    {
                        value: 'short',
                        title: 'Short'
                    },
                    {
                        value: 'tall',
                        title: 'Tall'
                    }
                ],
                layout: 'radio'
            },
            group: 'story',
            description: 'Choose the display size of the featured image.'
        },
        // Who We Are Section
        {
            name: 'whoTitle',
            title: 'Who We Are Title',
            type: 'string',
            group: 'who'
        },
        {
            name: 'whoDescription1',
            title: 'Who We Are Description 1',
            type: 'text',
            group: 'who'
        },
        {
            name: 'whoImageCount',
            title: 'Number of Who We Are Project Images',
            type: 'string',
            options: {
                list: [
                    {
                        value: '2',
                        title: '2 Images'
                    },
                    {
                        value: '3',
                        title: '3 Images'
                    }
                ],
                layout: 'radio'
            },
            group: 'who',
            description: 'Select either 2 Images or 3 Images to display from the referenced project.',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'whoProject',
            title: 'Who We Are Project Reference',
            type: 'reference',
            to: {
                type: 'project'
            },
            group: 'who',
            description: 'Reference to a project to display images and info from.'
        },
        {
            name: 'whoDescription2',
            title: 'Who We Are Description 2',
            type: 'text',
            group: 'who'
        },
        {
            name: 'whoFeaturedImage',
            title: 'Who We Are Featured Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Alternative text for the featured image.'
                }
            ],
            group: 'who'
        },
        {
            name: 'whoFeaturedImageSize',
            title: 'Who We Are Featured Image Size',
            type: 'string',
            options: {
                list: [
                    {
                        value: 'short',
                        title: 'Short'
                    },
                    {
                        value: 'tall',
                        title: 'Tall'
                    }
                ],
                layout: 'radio'
            },
            group: 'who',
            description: 'Choose the display size of the featured image.'
        }
    ],
    groups: [
        {
            name: 'philosophy',
            title: 'Philosophy Section'
        },
        {
            name: 'story',
            title: 'Story Section'
        },
        {
            name: 'who',
            title: 'Who We Are Section'
        }
    ],
    preview: {
        select: {
            title: 'title'
        }
    }
};
const __TURBOPACK__default__export__ = aboutPage;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemas/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$project$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/project-schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$page$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/page-schema.js [app-client] (ecmascript)");
// Valentine 2025
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$homepage$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/homepage-schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$pagenote$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/pagenote-schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$teammember$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/teammember-schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$aboutpage$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/aboutpage-schema.js [app-client] (ecmascript)");
;
;
;
;
;
;
const schemas = [
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$project$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$page$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$homepage$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$pagenote$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$teammember$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$aboutpage$2d$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
const __TURBOPACK__default__export__ = schemas;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity.config.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.mjs [app-client] (ecmascript) <locals>");
// import {deskTool} from "sanity/desk"
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/pane.mjs [app-client] (ecmascript)");
// import project from './sanity/schemas/project-schema'; //old version before refactor
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/index.js [app-client] (ecmascript)"); //Barrel file
;
;
;
// import {visionTool} from '@sanity/vision'
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    title: 'Valentine Studio Dev',
    // projectId :2j7eol5d
    projectId: 'm2vd2mbt',
    dataset: 'production',
    apiVersion: "2025-05-10",
    basePath: "/admin",
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])()
    ],
    schema: {
        types: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
const __TURBOPACK__default__export__ = config;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(studio)/admin/[[...index]]/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$client$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-sanity/dist/studio/client-component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity.config.js [app-client] (ecmascript)");
"use client";
;
;
;
function AdminPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$client$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextStudio"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2e$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/src/app/(studio)/admin/[[...index]]/page.js",
        lineNumber: 6,
        columnNumber: 12
    }, this);
}
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_b611208e._.js.map