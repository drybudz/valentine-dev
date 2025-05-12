const pageNote = {
    name: 'pageNote',
    title: 'Page Notes',
    type: 'document',
    fields: [
      {
        name: 'workTitle',
        title: 'Work Title',
        type: 'string',
        description: 'Optional title for the "Work" related content.',
      },
      {
        name: 'workDescription',
        title: 'Work Description',
        type: 'text',
        description: 'Optional description for the "Work" related content.',
      },
      {
        name: 'connectTitle',
        title: 'Connect Title',
        type: 'string',
        description: 'Optional title for the "Connect" section.',
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
                description: 'Title of the link (e.g., Instagram, Email).',
              },
              {
                name: 'linkUrl',
                title: 'Link URL',
                type: 'url',
                description: 'The URL for the link.',
              },
              {
                name: 'openNewTab',
                title: 'Open in New Tab',
                type: 'boolean',
                description: 'Check this box to open the link in a new tab.',
              },
            ],
            preview: {
              select: {
                title: 'linkTitle',
                subtitle: 'linkUrl',
              },
            },
          },
        ],
        description: 'Optional links for the "Connect" section (e.g., social media, contact).',
      },
      {
        name: 'copyrightText',
        title: 'Copyright Text',
        type: 'string',
        description: 'Optional copyright information.',
      },
      {
        name: 'copyrightYear',
        title: 'Copyright Year',
        type: 'string', // Or 'number'
        description: 'Optional year for copyright.',
      },
      {
        name: 'copyrightBrandName',
        title: 'Copyright Brand Name',
        type: 'string',
        description: 'Optional brand name for copyright.',
      },
    ],
    preview: {
      select: {
        title: 'copyrightBrandName',
        subtitle: 'copyrightYear',
      },
    },
  };
  
  export default pageNote;